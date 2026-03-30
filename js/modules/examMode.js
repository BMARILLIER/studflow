// examMode.js — Simulated Bac exam mode (timed, no feedback, full analysis)
(function() {
    'use strict';

    var QUESTION_COUNT = 15;
    var STORAGE_KEY = 'studflow_exam_history';
    var DURATIONS = { philo: 30, francais: 25, maths: 20, histgeo: 30, ses: 25, physique: 20, svt: 25, anglais: 20 };

    var state = {
        questions: [],
        answers: [],
        currentIndex: 0,
        subjectId: null,
        subjectName: '',
        timerTotal: 0,
        timerLeft: 0,
        interval: null,
        startTime: null
    };

    // ==================== QUESTION SOURCING ====================
    function getQuestionsForSubject(subjectId) {
        var subj = window.StudFlow.subjects ? window.StudFlow.subjects.getById(subjectId) : null;
        if (!subj || !subj.sections) return [];
        var pool = [];
        for (var i = 0; i < subj.sections.length; i++) {
            var s = subj.sections[i];
            var qz = s.quiz || [];
            for (var j = 0; j < qz.length; j++) {
                var q = Object.assign({}, qz[j]);
                q._sectionId = s.id;
                q._sectionTitle = s.title;
                pool.push(q);
            }
        }
        // Shuffle
        for (var k = pool.length - 1; k > 0; k--) {
            var r = Math.floor(Math.random() * (k + 1));
            var tmp = pool[k]; pool[k] = pool[r]; pool[r] = tmp;
        }
        return pool.slice(0, QUESTION_COUNT);
    }

    function countQuestions(subjectId) {
        var subj = window.StudFlow.subjects ? window.StudFlow.subjects.getById(subjectId) : null;
        if (!subj || !subj.sections) return 0;
        var total = 0;
        for (var i = 0; i < subj.sections.length; i++) {
            total += (subj.sections[i].quiz || []).length;
        }
        return total;
    }

    // ==================== SHOW (PREP SCREEN) ====================
    function show() {
        window.StudFlow.app.showScreen('exam');
        if (window.StudFlow.subjects && window.StudFlow.subjects.preload) {
            window.StudFlow.subjects.preload().then(function() { renderPrep(); });
        } else {
            renderPrep();
        }
    }

    function renderPrep() {
        var container = document.getElementById('exam-content');
        if (!container) return;

        var subjects = window.StudFlow.subjects ? window.StudFlow.subjects.getAll() : [];
        var html = '<div class="exam-prep">';
        html += '<button class="back-btn" data-action="screen:dashboard">\u2190 Retour</button>';
        html += '<div class="exam-prep-header">';
        html += '<div class="exam-prep-icon">\uD83C\uDFAF</div>';
        html += '<h2>Mode Examen</h2>';
        html += '<p>Simule un vrai Bac : chrono, pas d\'aide, pas de feedback.</p>';
        html += '</div>';

        html += '<div class="exam-subject-grid">';
        for (var i = 0; i < subjects.length; i++) {
            var s = subjects[i];
            var qCount = countQuestions(s.id);
            var disabled = qCount < QUESTION_COUNT;
            html += '<button class="exam-subject-card' + (disabled ? ' disabled' : '') + '"'
                + (disabled ? '' : ' data-action="examMode.selectSubject" data-param="' + s.id + '"')
                + '>'
                + '<span class="exam-subj-icon">' + (s.icon || '\uD83D\uDCDA') + '</span>'
                + '<span class="exam-subj-name">' + s.name + '</span>'
                + '<span class="exam-subj-count">' + qCount + ' Q' + (disabled ? ' (min ' + QUESTION_COUNT + ')' : '') + '</span>'
                + '</button>';
        }
        html += '</div>';

        // Selected subject info (hidden until selection)
        html += '<div id="exam-selected" style="display:none;"></div>';
        html += '</div>';
        container.innerHTML = html;
    }

    function selectSubject(subjectId) {
        var subj = window.StudFlow.subjects ? window.StudFlow.subjects.getById(subjectId) : null;
        if (!subj) return;
        state.subjectId = subjectId;
        state.subjectName = subj.name;

        // Highlight selected card
        var cards = document.querySelectorAll('.exam-subject-card');
        for (var i = 0; i < cards.length; i++) cards[i].classList.remove('selected');
        var clicked = document.querySelector('[data-param="' + subjectId + '"].exam-subject-card');
        if (clicked) clicked.classList.add('selected');

        var duration = DURATIONS[subjectId] || 25;
        var el = document.getElementById('exam-selected');
        if (el) {
            el.style.display = '';
            el.innerHTML = '<div class="exam-info">'
                + '<div class="exam-info-row"><span>\u23F1</span> ' + duration + ' minutes</div>'
                + '<div class="exam-info-row"><span>\u2753</span> ' + QUESTION_COUNT + ' questions</div>'
                + '<div class="exam-info-row"><span>\uD83D\uDEAB</span> Pas de feedback pendant l\'examen</div>'
                + '</div>'
                + '<button class="exam-start-btn" data-action="examMode.start">Commencer l\'examen \u2192</button>';
        }
    }

    // ==================== START EXAM ====================
    function start() {
        if (!state.subjectId) return;
        var questions = getQuestionsForSubject(state.subjectId);
        if (questions.length < QUESTION_COUNT) {
            if (window.StudFlow.gamification) {
                window.StudFlow.gamification.showToast('Pas assez de questions pour cet examen.', 'xp', '\u26A0\uFE0F');
            }
            return;
        }

        state.questions = questions;
        state.answers = [];
        for (var i = 0; i < questions.length; i++) state.answers.push(-1);
        state.currentIndex = 0;
        state.timerTotal = (DURATIONS[state.subjectId] || 25) * 60;
        state.timerLeft = state.timerTotal;
        state.startTime = Date.now();

        renderExam();
        startTimer();
    }

    // ==================== TIMER ====================
    function startTimer() {
        clearInterval(state.interval);
        state.interval = setInterval(function() {
            state.timerLeft--;
            updateTimerDisplay();
            if (state.timerLeft <= 0) {
                endExam();
            }
        }, 1000);
    }

    function updateTimerDisplay() {
        var el = document.getElementById('exam-timer-val');
        if (!el) return;
        var m = Math.floor(Math.max(0, state.timerLeft) / 60);
        var s = Math.max(0, state.timerLeft) % 60;
        el.textContent = m + ':' + (s < 10 ? '0' : '') + s;
        if (state.timerLeft <= 60) {
            el.parentElement.classList.add('exam-timer-danger');
        }
    }

    // ==================== RENDER EXAM ====================
    function renderExam() {
        var container = document.getElementById('exam-content');
        if (!container) return;

        var q = state.questions[state.currentIndex];
        if (!q) return;

        // Progress dots
        var dots = '';
        for (var i = 0; i < state.questions.length; i++) {
            var cls = 'exam-dot';
            if (state.answers[i] !== -1) cls += ' answered';
            if (i === state.currentIndex) cls += ' current';
            dots += '<span class="' + cls + '" data-action="examMode.goTo" data-param="' + i + '"></span>';
        }

        var m = Math.floor(Math.max(0, state.timerLeft) / 60);
        var s = Math.max(0, state.timerLeft) % 60;
        var timerClass = state.timerLeft <= 60 ? ' exam-timer-danger' : '';

        var html = '<div class="exam-session">';

        // Topbar
        html += '<div class="exam-topbar">';
        html += '<div class="exam-timer' + timerClass + '" id="exam-timer"><span id="exam-timer-val">' + m + ':' + (s < 10 ? '0' : '') + s + '</span></div>';
        html += '<div class="exam-progress-num">' + (state.currentIndex + 1) + '/' + state.questions.length + '</div>';
        html += '</div>';

        // Progress dots
        html += '<div class="exam-progress-dots">' + dots + '</div>';

        // Question
        html += '<div class="exam-question-container">';
        html += '<div class="exam-question-text">' + escapeHTML(q.question) + '</div>';
        html += '<div class="exam-options">';
        var letters = ['A', 'B', 'C', 'D'];
        for (var j = 0; j < q.options.length; j++) {
            var sel = state.answers[state.currentIndex] === j ? ' selected' : '';
            html += '<button class="exam-option' + sel + '" data-action="examMode.answer" data-param="' + j + '">'
                + '<span class="exam-option-letter">' + letters[j] + '</span> '
                + escapeHTML(q.options[j])
                + '</button>';
        }
        html += '</div></div>';

        // Navigation
        html += '<div class="exam-nav">';
        if (state.currentIndex > 0) {
            html += '<button class="exam-nav-btn" data-action="examMode.prev">\u2190 Precedent</button>';
        } else {
            html += '<span></span>';
        }
        if (state.currentIndex < state.questions.length - 1) {
            html += '<button class="exam-nav-btn primary" data-action="examMode.next">Suivant \u2192</button>';
        } else {
            html += '<button class="exam-nav-btn finish" data-action="examMode.confirmEnd">Terminer l\'examen</button>';
        }
        html += '</div>';

        html += '</div>';
        container.innerHTML = html;
    }

    // ==================== NAVIGATION ====================
    function answer(index) {
        state.answers[state.currentIndex] = Number(index);
        // Update UI without full re-render
        var opts = document.querySelectorAll('.exam-option');
        for (var i = 0; i < opts.length; i++) {
            opts[i].classList.toggle('selected', i === Number(index));
        }
        // Update dot
        var dots = document.querySelectorAll('.exam-dot');
        if (dots[state.currentIndex]) dots[state.currentIndex].classList.add('answered');
    }

    function next() { if (state.currentIndex < state.questions.length - 1) { state.currentIndex++; renderExam(); } }
    function prev() { if (state.currentIndex > 0) { state.currentIndex--; renderExam(); } }
    function goTo(index) { var idx = Number(index); if (idx >= 0 && idx < state.questions.length) { state.currentIndex = idx; renderExam(); } }

    function confirmEnd() {
        var unanswered = 0;
        for (var i = 0; i < state.answers.length; i++) { if (state.answers[i] === -1) unanswered++; }
        if (unanswered > 0) {
            var btn = document.querySelector('.exam-nav-btn.finish');
            if (btn && !btn.classList.contains('confirm')) {
                btn.classList.add('confirm');
                btn.textContent = unanswered + ' sans reponse — Confirmer ?';
                return;
            }
        }
        endExam();
    }

    // ==================== END EXAM ====================
    function endExam() {
        clearInterval(state.interval);
        var elapsed = Math.floor((Date.now() - state.startTime) / 1000);

        var score = 0;
        var sectionStats = {};
        for (var i = 0; i < state.questions.length; i++) {
            var q = state.questions[i];
            var correct = state.answers[i] === q.correctIndex;
            if (correct) score++;

            var sid = q._sectionTitle || 'Autre';
            if (!sectionStats[sid]) sectionStats[sid] = { correct: 0, total: 0 };
            sectionStats[sid].total++;
            if (correct) sectionStats[sid].correct++;
        }

        var total = state.questions.length;
        var percent = Math.round((score / total) * 100);
        var grade = Math.round(percent * 20 / 100);

        // Level + message
        var level, message, levelClass;
        if (grade >= 16) { level = 'Excellent'; message = 'Tu es pret(e) pour le Bac !'; levelClass = 'excellent'; }
        else if (grade >= 12) { level = 'Bien'; message = 'Quelques points a consolider.'; levelClass = 'good'; }
        else if (grade >= 8) { level = 'Moyen'; message = 'Revise les points faibles identifies.'; levelClass = 'medium'; }
        else { level = 'A travailler'; message = 'Concentre-toi sur les bases.'; levelClass = 'weak'; }

        // Strengths / weaknesses
        var strengths = [];
        var weaknesses = [];
        for (var sec in sectionStats) {
            var st = sectionStats[sec];
            var pct = Math.round((st.correct / st.total) * 100);
            if (pct >= 70) strengths.push({ name: sec, pct: pct });
            else if (pct < 50) weaknesses.push({ name: sec, pct: pct });
        }

        // Save history
        saveResult({ date: new Date().toISOString(), subject: state.subjectId, subjectName: state.subjectName, score: score, total: total, percent: percent, grade: grade, elapsed: elapsed });

        // XP + events
        if (window.StudFlow.gamification) window.StudFlow.gamification.addXP('exam_complete');
        if (window.StudFlow.events) window.StudFlow.events.emit('exam:completed', { score: score, total: total, percent: percent, grade: grade, subject: state.subjectId });
        if (window.StudFlow.analytics) window.StudFlow.analytics.track('exam_completed', { score: score, total: total, percent: percent, grade: grade, subject: state.subjectId });

        // Render results
        renderResults({ score: score, total: total, percent: percent, grade: grade, level: level, levelClass: levelClass, message: message, strengths: strengths, weaknesses: weaknesses, elapsed: elapsed });
    }

    function renderResults(r) {
        var container = document.getElementById('exam-content');
        if (!container) return;

        var minutes = Math.floor(r.elapsed / 60);
        var seconds = r.elapsed % 60;

        var html = '<div class="exam-results">';
        html += '<div class="exam-results-header">';
        html += '<div class="exam-grade-circle"><span class="exam-grade-val">' + r.grade + '</span><span class="exam-grade-max">/20</span></div>';
        html += '<div class="exam-level exam-level-' + r.levelClass + '">' + r.level + '</div>';
        html += '<p class="exam-message">' + r.message + '</p>';
        html += '</div>';

        // Stats
        html += '<div class="exam-stats">';
        html += '<div class="exam-stat"><div class="exam-stat-val">' + r.percent + '%</div><div class="exam-stat-label">Score</div></div>';
        html += '<div class="exam-stat"><div class="exam-stat-val">' + r.score + '/' + r.total + '</div><div class="exam-stat-label">Correct</div></div>';
        html += '<div class="exam-stat"><div class="exam-stat-val">' + minutes + ':' + (seconds < 10 ? '0' : '') + seconds + '</div><div class="exam-stat-label">Temps</div></div>';
        html += '</div>';

        // Readiness bar
        html += '<div class="exam-readiness">';
        html += '<div class="exam-readiness-label">Pret(e) a ' + r.percent + '% pour le Bac</div>';
        html += '<div class="exam-readiness-bar"><div class="exam-readiness-fill" style="width:' + r.percent + '%"></div></div>';
        html += '</div>';

        // Analysis
        if (r.strengths.length > 0 || r.weaknesses.length > 0) {
            html += '<div class="exam-analysis">';
            if (r.strengths.length > 0) {
                html += '<div class="exam-analysis-col"><div class="exam-analysis-title">\u2705 Points forts</div>';
                for (var s = 0; s < r.strengths.length; s++) {
                    html += '<div class="exam-analysis-item good">' + r.strengths[s].name + ' <small>' + r.strengths[s].pct + '%</small></div>';
                }
                html += '</div>';
            }
            if (r.weaknesses.length > 0) {
                html += '<div class="exam-analysis-col"><div class="exam-analysis-title">\u26A0\uFE0F A revoir</div>';
                for (var w = 0; w < r.weaknesses.length; w++) {
                    html += '<div class="exam-analysis-item weak">' + r.weaknesses[w].name + ' <small>' + r.weaknesses[w].pct + '%</small></div>';
                }
                html += '</div>';
            }
            html += '</div>';
        }

        // Actions
        html += '<div class="exam-results-actions">';
        html += '<button class="exam-btn primary" data-action="examMode.showCorrection">Voir la correction</button>';
        html += '<button class="exam-btn secondary" data-action="examMode.show">Refaire un examen</button>';
        html += '<button class="exam-btn ghost" data-action="screen:dashboard">Retour au dashboard</button>';
        html += '</div>';

        html += '</div>';
        container.innerHTML = html;
    }

    // ==================== CORRECTION ====================
    function showCorrection() {
        var container = document.getElementById('exam-content');
        if (!container) return;

        var html = '<div class="exam-correction">';
        html += '<button class="back-btn" data-action="examMode.backToResults">\u2190 Resultats</button>';
        html += '<h2>Correction</h2>';

        for (var i = 0; i < state.questions.length; i++) {
            var q = state.questions[i];
            var userAnswer = state.answers[i];
            var isCorrect = userAnswer === q.correctIndex;

            html += '<div class="exam-corr-item ' + (isCorrect ? 'correct' : 'wrong') + '">';
            html += '<div class="exam-corr-num">Q' + (i + 1) + (q._sectionTitle ? ' \u00b7 ' + q._sectionTitle : '') + '</div>';
            html += '<div class="exam-corr-question">' + escapeHTML(q.question) + '</div>';

            for (var j = 0; j < q.options.length; j++) {
                var cls = 'exam-corr-opt';
                if (j === q.correctIndex) cls += ' correct-answer';
                if (j === userAnswer && !isCorrect) cls += ' wrong-answer';
                var letters = ['A', 'B', 'C', 'D'];
                html += '<div class="' + cls + '">' + letters[j] + '. ' + escapeHTML(q.options[j]) + '</div>';
            }

            if (!isCorrect && q.explanation) {
                html += '<div class="exam-corr-explanation">' + escapeHTML(q.explanation) + '</div>';
            }
            html += '</div>';
        }

        html += '</div>';
        container.innerHTML = html;
    }

    function backToResults() {
        // Re-compute and re-render results from current state
        endExam.__lastResults ? renderResults(endExam.__lastResults) : show();
    }

    // ==================== STORAGE ====================
    function saveResult(result) {
        var history = [];
        try { history = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); } catch (e) {}
        history.push(result);
        if (history.length > 20) history = history.slice(-20);
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(history)); } catch (e) {}
    }

    function getLastResult() {
        try {
            var history = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
            return history.length > 0 ? history[history.length - 1] : null;
        } catch (e) { return null; }
    }

    // ==================== HELPERS ====================
    function escapeHTML(str) {
        if (window.StudFlow.app && window.StudFlow.app.escapeText) return window.StudFlow.app.escapeText(str);
        var div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    // Override endExam to cache results for backToResults
    var _origEndExam = endExam;
    endExam = function() {
        clearInterval(state.interval);
        var elapsed = Math.floor((Date.now() - state.startTime) / 1000);
        var score = 0;
        var sectionStats = {};
        for (var i = 0; i < state.questions.length; i++) {
            var q = state.questions[i];
            var correct = state.answers[i] === q.correctIndex;
            if (correct) score++;
            var sid = q._sectionTitle || 'Autre';
            if (!sectionStats[sid]) sectionStats[sid] = { correct: 0, total: 0 };
            sectionStats[sid].total++;
            if (correct) sectionStats[sid].correct++;
        }
        var total = state.questions.length;
        var percent = Math.round((score / total) * 100);
        var grade = Math.round(percent * 20 / 100);
        var level, message, levelClass;
        if (grade >= 16) { level = 'Excellent'; message = 'Tu es pret(e) pour le Bac !'; levelClass = 'excellent'; }
        else if (grade >= 12) { level = 'Bien'; message = 'Quelques points a consolider.'; levelClass = 'good'; }
        else if (grade >= 8) { level = 'Moyen'; message = 'Revise les points faibles identifies.'; levelClass = 'medium'; }
        else { level = 'A travailler'; message = 'Concentre-toi sur les bases.'; levelClass = 'weak'; }
        var strengths = [], weaknesses = [];
        for (var sec in sectionStats) {
            var st = sectionStats[sec];
            var pct = Math.round((st.correct / st.total) * 100);
            if (pct >= 70) strengths.push({ name: sec, pct: pct });
            else if (pct < 50) weaknesses.push({ name: sec, pct: pct });
        }
        saveResult({ date: new Date().toISOString(), subject: state.subjectId, subjectName: state.subjectName, score: score, total: total, percent: percent, grade: grade, elapsed: elapsed });
        if (window.StudFlow.gamification) window.StudFlow.gamification.addXP('exam_complete');
        if (window.StudFlow.events) window.StudFlow.events.emit('exam:completed', { score: score, total: total, percent: percent, grade: grade, subject: state.subjectId });
        if (window.StudFlow.analytics) window.StudFlow.analytics.track('exam_completed', { score: score, total: total, percent: percent, grade: grade, subject: state.subjectId });
        var results = { score: score, total: total, percent: percent, grade: grade, level: level, levelClass: levelClass, message: message, strengths: strengths, weaknesses: weaknesses, elapsed: elapsed };
        endExam.__lastResults = results;
        renderResults(results);
    };

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.examMode = {
        show: show,
        selectSubject: selectSubject,
        start: start,
        answer: answer,
        next: next,
        prev: prev,
        goTo: goTo,
        confirmEnd: confirmEnd,
        showCorrection: showCorrection,
        backToResults: function() { if (endExam.__lastResults) renderResults(endExam.__lastResults); else show(); },
        getLastResult: getLastResult
    };
})();
