// quiz.js — Logique quiz + creation manuelle
(function() {
    let currentIndex = 0;
    let score = 0;
    let startTime = null;
    let selectedAnswer = null;
    let currentDeck = 'all';

    function getAllQuestions() {
        const state = window.StudFlow.app.getState();
        let questions = [];

        if (currentDeck === 'all') {
            questions = (state.quizQuestions || []).concat(state.customQuiz || []);
            if (window.StudFlow.subjects) {
                questions = questions.concat(window.StudFlow.subjects.getAllQuiz());
            } else if (window.StudFlow.bacfrancais) {
                questions = questions.concat(window.StudFlow.bacfrancais.getAllQuiz());
            }
        } else if (currentDeck === 'custom') {
            questions = state.customQuiz || [];
        } else if (currentDeck === 'imported') {
            questions = state.quizQuestions || [];
        } else if (currentDeck.startsWith('subj-')) {
            if (window.StudFlow.subjects) {
                questions = window.StudFlow.subjects.getQuizByDeck(currentDeck);
            }
        } else if (currentDeck.startsWith('bac-')) {
            if (window.StudFlow.bacfrancais) {
                questions = window.StudFlow.bacfrancais.getQuizBySection(currentDeck.replace('bac-', ''));
            }
        }

        return questions.length > 0 ? questions : [{
            question: "Pas encore de quiz",
            options: ["Cree tes propres quiz", "Ou explore Bac francais", "Option C", "Option D"],
            correctIndex: 0,
            explanation: "Commence par creer un quiz ou explore le module Bac francais"
        }];
    }

    function start(deck) {
        // If no deck specified, show picker first
        if (!deck || deck === 'all') {
            showDeckPicker();
            return;
        }
        launchQuiz(deck);
    }

    function launchQuiz(deck) {
        currentDeck = deck;
        currentIndex = 0;
        score = 0;
        selectedAnswer = null;
        startTime = Date.now();
        if (window.StudFlow.combo) window.StudFlow.combo.startSession();
        if (window.StudFlow.analytics) window.StudFlow.analytics.track('quiz_start', { deck: currentDeck });
        window.StudFlow.app.showScreen('quiz');
        // Hide picker, show quiz content
        var picker = document.getElementById('quiz-deck-picker');
        var qContent = document.getElementById('quiz-content');
        if (picker) picker.style.display = 'none';
        if (qContent) qContent.style.display = '';
        displayQuestion();
    }

    function showDeckPicker() {
        window.StudFlow.app.showScreen('quiz');

        // Ensure subject data is loaded before building the picker
        if (window.StudFlow.subjects && window.StudFlow.subjects.preload) {
            window.StudFlow.subjects.preload().then(function() {
                renderDeckPicker();
            });
        } else {
            renderDeckPicker();
        }
    }

    function renderDeckPicker() {
        var state = window.StudFlow.app.getState();
        var hasImported = (state.quizQuestions || []).length > 0;
        var hasCustom = (state.customQuiz || []).length > 0;
        var fileName = window.StudFlow.storage.loadData('pdfFileName', '');

        // Build subject list
        var subjectCards = '';
        if (window.StudFlow.subjects) {
            var subjects = window.StudFlow.subjects.getAll();
            for (var i = 0; i < subjects.length; i++) {
                var s = subjects[i];
                var qzCount = 0;
                for (var j = 0; j < (s.sections || []).length; j++) {
                    qzCount += ((s.sections[j] || {}).quiz || []).length;
                }
                if (qzCount === 0) continue;
                subjectCards += '<button class="quiz-deck-card" data-action="quiz:launch-deck" data-param="subj-' + s.id + '">'
                    + '<span class="quiz-deck-icon">' + (s.icon || '\uD83D\uDCDA') + '</span>'
                    + '<span class="quiz-deck-name">' + (s.name || s.id) + '</span>'
                    + '<span class="quiz-deck-count">' + qzCount + ' Q</span>'
                    + '</button>';
            }
        }

        // Build imported card
        var importedCard = '';
        if (hasImported) {
            var impCount = state.quizQuestions.length;
            var impLabel = fileName || 'PDF importe';
            importedCard = '<button class="quiz-deck-card quiz-deck-card--imported" data-action="quiz:launch-deck" data-param="imported">'
                + '<span class="quiz-deck-icon">\uD83D\uDCC4</span>'
                + '<span class="quiz-deck-name">Quiz de ton PDF</span>'
                + '<span class="quiz-deck-sub">' + window.StudFlow.app.escapeText(impLabel) + '</span>'
                + '<span class="quiz-deck-count">' + impCount + ' Q</span>'
                + '</button>';
        }

        var html = '<div class="quiz-deck-header">'
            + '<h2>Choisis ton quiz</h2>'
            + '<p>Selectionne une matiere ou lance un mix.</p>'
            + '</div>';

        // Prominent CTA: mix all
        html += '<button class="quiz-deck-cta" data-action="quiz:launch-deck" data-param="all">'
            + '\u26A1 Tout melanger — quiz surprise'
            + '</button>';

        // Imported PDF section
        if (importedCard) {
            html += '<div class="quiz-deck-section">'
                + '<div class="quiz-deck-section-label">Tes PDF</div>'
                + importedCard
                + '</div>';
        }

        // Subjects section
        if (subjectCards) {
            html += '<div class="quiz-deck-section">'
                + '<div class="quiz-deck-section-label">Par matiere</div>'
                + '<div class="quiz-deck-grid">' + subjectCards + '</div>'
                + '</div>';
        }

        // Custom cards
        if (hasCustom) {
            html += '<button class="quiz-deck-card" data-action="quiz:launch-deck" data-param="custom">'
                + '<span class="quiz-deck-icon">\u270D\uFE0F</span>'
                + '<span class="quiz-deck-name">Mes quiz perso</span>'
                + '<span class="quiz-deck-count">' + state.customQuiz.length + ' Q</span>'
                + '</button>';
        }

        // Show picker, hide quiz content
        var container = document.getElementById('quiz-deck-picker');
        var qContent = document.getElementById('quiz-content');
        if (!container) {
            // Create picker container dynamically
            container = document.createElement('div');
            container.id = 'quiz-deck-picker';
            var screen = document.getElementById('screen-quiz');
            if (screen) screen.insertBefore(container, screen.querySelector('.flashcard-progress'));
        }
        container.innerHTML = html;
        container.style.display = '';
        if (qContent) qContent.style.display = 'none';
    }

    function displayQuestion() {
        const questions = getAllQuestions();
        const q = questions[currentIndex];
        if (!q) {
            showResults();
            return;
        }

        document.getElementById('quiz-number').textContent = `Question ${currentIndex + 1}`;
        var math = window.StudFlow.mathRender;
        if (math) {
            math.setContent(document.getElementById('quiz-question'), q.question);
        } else {
            document.getElementById('quiz-question').textContent = q.question;
        }
        document.getElementById('quiz-progress').textContent =
            `${currentIndex + 1}/${questions.length}`;
        var qzPct = Math.round(((currentIndex + 1) / questions.length) * 100);
        document.getElementById('quiz-progress-bar').style.width = qzPct + '%';
        var qzBar = document.getElementById('quiz-progress-bar').parentElement;
        if (qzBar) qzBar.setAttribute('aria-valuenow', qzPct);
        document.getElementById('quiz-score').textContent = `${score} pts`;

        const optionsContainer = document.getElementById('quiz-options');
        optionsContainer.innerHTML = '';

        q.options.forEach((option, index) => {
            const btn = document.createElement('button');
            btn.className = 'quiz-option';
            var optText = `${String.fromCharCode(65 + index)}. ${option}`;
            if (window.StudFlow.mathRender) {
                window.StudFlow.mathRender.setContent(btn, optText);
            } else {
                btn.textContent = optText;
            }
            btn.onclick = () => selectAnswer(index, btn);
            optionsContainer.appendChild(btn);
        });

        document.getElementById('quiz-feedback').className = 'quiz-feedback';
        document.getElementById('quiz-feedback').textContent = '';
        var submitBtn = document.getElementById('quiz-submit');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Valider';
        submitBtn.onclick = function() { submitAnswer(); };
        selectedAnswer = null;
    }

    function selectAnswer(index, btn) {
        document.querySelectorAll('.quiz-option').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedAnswer = index;
        document.getElementById('quiz-submit').disabled = false;
    }

    function submitAnswer() {
        // Guard: do nothing if no answer selected
        if (selectedAnswer === null || selectedAnswer === undefined) return;

        const questions = getAllQuestions();
        const q = questions[currentIndex];
        if (!q) return;
        const isCorrect = selectedAnswer === q.correctIndex;
        const options = document.querySelectorAll('.quiz-option');
        const state = window.StudFlow.app.getState();

        options.forEach((opt, i) => {
            opt.onclick = null;
            if (i === q.correctIndex) {
                opt.classList.add('correct');
            } else if (i === selectedAnswer && !isCorrect) {
                opt.classList.add('wrong');
            }
        });

        const feedback = document.getElementById('quiz-feedback');
        if (isCorrect) {
            score++;
            state.streak = (state.streak || 0) + 1;
            feedback.className = 'quiz-feedback correct';
            var correctMsg = '\u2713 Correct ! ' + (q.explanation || '');
            if (window.StudFlow.mathRender) { window.StudFlow.mathRender.setContent(feedback, correctMsg); }
            else { feedback.textContent = correctMsg; }
            if (window.StudFlow.gamification) window.StudFlow.gamification.addXP('quiz_correct');
            if (window.StudFlow.combo) window.StudFlow.combo.hit();
            else if (window.StudFlow.sounds) window.StudFlow.sounds.correct();
        } else {
            state.streak = 0;
            feedback.className = 'quiz-feedback wrong';
            var wrongMsg = '\u2717 ' + (q.explanation || 'La bonne reponse etait ' + q.options[q.correctIndex]);
            if (window.StudFlow.mathRender) { window.StudFlow.mathRender.setContent(feedback, wrongMsg); }
            else { feedback.textContent = wrongMsg; }
            if (window.StudFlow.combo) window.StudFlow.combo.miss();
            else if (window.StudFlow.sounds) window.StudFlow.sounds.wrong();
        }

        window.StudFlow.app.updateStats();
        window.StudFlow.storage.saveAppState(state);

        var submitBtn = document.getElementById('quiz-submit');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Question suivante \u2192';
        submitBtn.onclick = function() {
            currentIndex++;
            displayQuestion();
        };
    }

    function showResults() {
        const questions = getAllQuestions();
        const total = questions.length;
        const percent = Math.round((score / total) * 100);
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        const minutes = Math.floor(elapsed / 60);
        const seconds = elapsed % 60;

        var rIcon = document.getElementById('results-icon');
        var rTitle = document.getElementById('results-title');
        var rScore = document.getElementById('results-score');
        var rCorrect = document.getElementById('results-correct');
        var rWrong = document.getElementById('results-wrong');
        var rTime = document.getElementById('results-time');
        var rRetry = document.getElementById('results-retry');
        if (rIcon) rIcon.textContent = percent >= 70 ? '🏆' : '📚';
        if (rTitle) rTitle.textContent = percent >= 70 ? 'Bravo !' : 'Continue de reviser !';
        if (rScore) rScore.textContent = `${percent}%`;
        if (rCorrect) rCorrect.textContent = score;
        if (rWrong) rWrong.textContent = total - score;
        if (rTime) rTime.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        if (rRetry) {
            rRetry.textContent = 'Refaire le quiz';
            rRetry.onclick = function() { start(currentDeck); };
        }

        if (window.StudFlow.combo) window.StudFlow.combo.endSession();
        if (window.StudFlow.gamification) window.StudFlow.gamification.addXP('quiz_complete');
        if (window.StudFlow.stats) window.StudFlow.stats.recordActivity('quiz');
        if (window.StudFlow.events) {
            window.StudFlow.events.emit('quiz:completed', { score: score, total: total, percent: percent, deck: currentDeck });
        }
        if (window.StudFlow.analytics) window.StudFlow.analytics.track('quiz_completed', { score: score, total: total, percent: percent, deck: currentDeck });
        window.StudFlow.app.showScreen('results');

        // Feedback prompt after 3rd quiz
        var quizCount = parseInt(localStorage.getItem('studflow_quiz_count') || '0') + 1;
        localStorage.setItem('studflow_quiz_count', quizCount);
        var alreadyAsked = localStorage.getItem('studflow_feedback_prompted');
        if (quizCount === 3 && !alreadyAsked) {
            localStorage.setItem('studflow_feedback_prompted', '1');
            setTimeout(function() {
                var fb = document.getElementById('quiz-feedback');
                if (fb) {
                    fb.innerHTML = '<div style="background:var(--card-bg);border:1px solid var(--accent);border-radius:12px;padding:16px;margin-top:16px;text-align:center;">'
                        + '<p style="font-size:1rem;margin-bottom:10px;">Tu as fait 3 quiz ! Ton avis nous aide a ameliorer StudFlow.</p>'
                        + '<button class="breathing-btn primary" data-action="feedback.show" style="font-size:0.9rem;">Donner mon avis (30 sec)</button>'
                        + '</div>';
                }
            }, 500);
        }
    }

    // Creation manuelle
    function showCreateForm() {
        const container = document.getElementById('quiz-create-form');
        if (container) {
            container.style.display = container.style.display === 'none' ? 'block' : 'none';
        }
    }

    function createQuestion() {
        const escape = window.StudFlow.app.escapeText;
        const question = escape(document.getElementById('new-quiz-question').value.trim());
        const optA = escape(document.getElementById('new-quiz-a').value.trim());
        const optB = escape(document.getElementById('new-quiz-b').value.trim());
        const optC = escape(document.getElementById('new-quiz-c').value.trim());
        const optD = escape(document.getElementById('new-quiz-d').value.trim());
        const correct = parseInt(document.getElementById('new-quiz-correct').value);

        if (!question || !optA || !optB || !optC || !optD) return;

        const state = window.StudFlow.app.getState();
        if (!state.customQuiz) state.customQuiz = [];
        state.customQuiz.push({
            question,
            options: [optA, optB, optC, optD],
            correctIndex: correct,
            explanation: ''
        });
        window.StudFlow.storage.saveAppState(state);

        // Reset form
        document.getElementById('new-quiz-question').value = '';
        document.getElementById('new-quiz-a').value = '';
        document.getElementById('new-quiz-b').value = '';
        document.getElementById('new-quiz-c').value = '';
        document.getElementById('new-quiz-d').value = '';

        if (window.StudFlow.gamification) window.StudFlow.gamification.addXP('create_quiz');

        // Confirmation
        const btn = document.getElementById('create-quiz-btn');
        const oldText = btn.textContent;
        btn.textContent = 'Quiz ajoute !';
        btn.style.background = 'var(--green)';
        setTimeout(() => {
            btn.textContent = oldText;
            btn.style.background = '';
        }, 1500);

        updateCount();
    }

    function updateCount() {
        const state = window.StudFlow.app.getState();
        let subjectTotal = 0;
        if (window.StudFlow.subjects) {
            subjectTotal = window.StudFlow.subjects.getAllQuiz().length;
        } else if (window.StudFlow.bacfrancais) {
            subjectTotal = window.StudFlow.bacfrancais.getAllQuiz().length;
        }
        const total = (state.quizQuestions || []).length +
                      (state.customQuiz || []).length + subjectTotal;
        const el = document.getElementById('quiz-count');
        if (el) el.textContent = `${total} questions`;
    }

    window.StudFlow = window.StudFlow || {};
    window.StudFlow.quiz = {
        start, launchQuiz, displayQuestion, selectAnswer, submitAnswer, showResults,
        showCreateForm, createQuestion, updateCount, getAllQuestions
    };
})();
