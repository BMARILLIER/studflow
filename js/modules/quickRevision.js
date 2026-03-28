// quickRevision.js — Révision rapide (3-question micro quiz on dashboard)
(function() {

    var QUESTION_COUNT = 3;
    var state = { phase: 'idle', questions: [], index: 0, score: 0, selected: -1 };

    // ==================== QUESTIONS ====================
    function getAllAvailable() {
        var appState = window.StudFlow.app.getState();
        var qs = (appState.quizQuestions || []).concat(appState.customQuiz || []);
        if (window.StudFlow.subjects && window.StudFlow.subjects.getAllQuiz) {
            qs = qs.concat(window.StudFlow.subjects.getAllQuiz() || []);
        }
        if (window.StudFlow.bacfrancais && window.StudFlow.bacfrancais.getAllQuiz) {
            qs = qs.concat(window.StudFlow.bacfrancais.getAllQuiz() || []);
        }
        return qs.filter(function(q) {
            return q && q.question && q.options && q.options.length >= 2 && typeof q.correctIndex === 'number';
        });
    }

    function pickRandom(arr, n) {
        var copy = arr.slice();
        for (var i = copy.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = copy[i]; copy[i] = copy[j]; copy[j] = tmp;
        }
        return copy.slice(0, n);
    }

    // ==================== ACTIONS ====================
    function startQuiz() {
        var pool = getAllAvailable();
        if (pool.length < QUESTION_COUNT) {
            if (window.StudFlow.gamification) {
                window.StudFlow.gamification.showToast(
                    'Pas assez de questions. Importe un PDF ou explore les matières !', 'info', '📚'
                );
            }
            return;
        }
        state.questions = pickRandom(pool, QUESTION_COUNT);
        state.index = 0;
        state.score = 0;
        state.selected = -1;
        state.phase = 'playing';
        refreshUI();
    }

    function selectAnswer(idx) {
        if (state.phase !== 'playing' || state.selected >= 0) return;
        state.selected = idx;
        var q = state.questions[state.index];
        var isCorrect = idx === q.correctIndex;
        if (isCorrect) {
            state.score++;
            if (window.StudFlow.gamification) {
                window.StudFlow.gamification.addXP('quiz_correct');
            }
        }
        state.phase = 'feedback';
        refreshUI();
    }

    function nextQuestion() {
        state.index++;
        state.selected = -1;
        if (state.index >= state.questions.length) {
            state.phase = 'done';
            // Award completion XP
            if (window.StudFlow.gamification) {
                window.StudFlow.gamification.addXP('quiz_complete');
            }
            // Emit event for dailyMission and other listeners
            if (window.StudFlow.events) {
                window.StudFlow.events.emit('quiz:completed', {
                    score: state.score,
                    total: QUESTION_COUNT,
                    percent: Math.round((state.score / QUESTION_COUNT) * 100),
                    deck: 'quick'
                });
            }
        } else {
            state.phase = 'playing';
        }
        refreshUI();
    }

    function resetToIdle() {
        state.phase = 'idle';
        state.questions = [];
        state.index = 0;
        state.score = 0;
        state.selected = -1;
        refreshUI();
    }

    // ==================== RENDER ====================
    function renderCard() {
        if (state.phase === 'playing' || state.phase === 'feedback') return renderQuestion();
        if (state.phase === 'done') return renderResults();
        return renderIdle();
    }

    function renderIdle() {
        return '<div id="qr-card" class="qr-card">'
            + '<div class="qr-idle">'
            + '<div class="qr-idle-text">'
            + '<div class="qr-title">⚡ Révision rapide</div>'
            + '<div class="qr-sub">3 questions • 60 secondes</div>'
            + '</div>'
            + '<button class="qr-start-btn" data-action="quickRevision.start">Commencer</button>'
            + '</div>'
            + '</div>';
    }

    function renderQuestion() {
        var q = state.questions[state.index];
        var num = state.index + 1;
        var isFeedback = state.phase === 'feedback';
        var labels = ['A', 'B', 'C', 'D'];

        var optsHTML = q.options.map(function(opt, i) {
            var cls = 'qr-opt';
            if (isFeedback) {
                if (i === q.correctIndex) cls += ' correct';
                else if (i === state.selected && i !== q.correctIndex) cls += ' wrong';
            } else if (i === state.selected) {
                cls += ' selected';
            }
            var onclick = isFeedback ? '' : ' data-action="quickRevision.select" data-param="' + i + '"';
            return '<button class="' + cls + '"' + onclick + '>'
                + '<span class="qr-opt-label">' + labels[i] + '</span>'
                + '<span class="qr-opt-text">' + opt + '</span>'
                + '</button>';
        }).join('');

        var feedbackHTML = '';
        if (isFeedback) {
            var isCorrect = state.selected === q.correctIndex;
            var fbClass = isCorrect ? 'qr-fb correct' : 'qr-fb wrong';
            var fbText = isCorrect
                ? '✓ Correct !' + (q.explanation ? ' ' + q.explanation : '')
                : '✗ ' + (q.explanation || 'Réponse : ' + q.options[q.correctIndex]);
            feedbackHTML = '<div class="' + fbClass + '">' + fbText + '</div>'
                + '<button class="qr-next-btn" data-action="quickRevision.next">'
                + (num < QUESTION_COUNT ? 'Suivant →' : 'Voir résultat')
                + '</button>';
        }

        return '<div id="qr-card" class="qr-card qr-active">'
            + '<div class="qr-progress-row">'
            + '<span class="qr-progress-label">Question ' + num + '/' + QUESTION_COUNT + '</span>'
            + '<div class="qr-progress-bar"><div class="qr-progress-fill" style="width:' + Math.round((num / QUESTION_COUNT) * 100) + '%"></div></div>'
            + '</div>'
            + '<div class="qr-question">' + q.question + '</div>'
            + '<div class="qr-opts">' + optsHTML + '</div>'
            + feedbackHTML
            + '</div>';
    }

    function renderResults() {
        var pct = Math.round((state.score / QUESTION_COUNT) * 100);
        var emoji = pct === 100 ? '🎉' : pct >= 66 ? '👏' : '💪';
        var msg = pct === 100 ? 'Parfait !' : pct >= 66 ? 'Bien joué !' : 'Continue comme ça !';

        return '<div id="qr-card" class="qr-card qr-done">'
            + '<div class="qr-result-emoji">' + emoji + '</div>'
            + '<div class="qr-result-score">' + state.score + '/' + QUESTION_COUNT + '</div>'
            + '<div class="qr-result-msg">' + msg + '</div>'
            + '<div class="qr-result-xp">+' + (state.score * 8 + 25) + ' XP gagnés</div>'
            + '<button class="qr-start-btn" data-action="quickRevision.reset">Retour</button>'
            + '</div>';
    }

    // ==================== UI UPDATE ====================
    function refreshUI() {
        var el = document.getElementById('qr-card');
        if (!el) return;
        var tmp = document.createElement('div');
        tmp.innerHTML = renderCard();
        el.replaceWith(tmp.firstChild);
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.quickRevision = {
        renderCard: renderCard,
        start: startQuiz,
        select: selectAnswer,
        next: nextQuestion,
        reset: resetToIdle
    };

})();
