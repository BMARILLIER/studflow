// chronoMode.js — Mode Chrono: 60-second timed quiz challenge (daily, seeded)
(function() {

    // ==================== CONSTANTS ====================
    var CHRONO_DURATION = 60;
    var CHRONO_STORAGE_KEY = 'studflow_chrono';
    var MAX_QUESTIONS = 30;

    // Combo thresholds
    var COMBO_LEVELS = [
        { min: 7, mult: 5, label: 'LEGENDARY!', cls: 'legendary' },
        { min: 5, mult: 3, label: 'FIRE!', cls: 'fire' },
        { min: 3, mult: 2, label: 'COMBO!', cls: 'combo' }
    ];

    // ==================== STATE ====================
    var state = {
        questions: [],
        currentIndex: 0,
        score: 0,
        correct: 0,
        total: 0,
        combo: 0,
        maxCombo: 0,
        maxComboMult: 1,
        timer: CHRONO_DURATION,
        interval: null,
        running: false,
        xpAwarded: false
    };

    // ==================== SEEDED RANDOM ====================
    function seededRandom(seed) {
        var x = Math.sin(seed) * 10000;
        return x - Math.floor(x);
    }

    function getDaySeed() {
        return Math.floor(Date.now() / 86400000);
    }

    function seededShuffle(arr, seed) {
        var shuffled = arr.slice();
        for (var i = shuffled.length - 1; i > 0; i--) {
            var s = seededRandom(seed + i);
            var j = Math.floor(s * (i + 1));
            var tmp = shuffled[i];
            shuffled[i] = shuffled[j];
            shuffled[j] = tmp;
        }
        return shuffled;
    }

    // ==================== STORAGE ====================
    function loadStorage() {
        return window.StudFlow.storage.loadData(CHRONO_STORAGE_KEY, {
            bestScore: 0,
            todayScore: null,
            todayDate: null,
            history: []
        });
    }

    function saveStorage(data) {
        window.StudFlow.storage.saveData(CHRONO_STORAGE_KEY, data);
    }

    function getTodayStr() {
        var d = new Date();
        var y = d.getFullYear();
        var m = ('0' + (d.getMonth() + 1)).slice(-2);
        var day = ('0' + d.getDate()).slice(-2);
        return y + '-' + m + '-' + day;
    }

    // ==================== GET QUESTIONS (from challenges.js pattern) ====================
    function getQuestions() {
        var questions = [];

        // From quiz module (imported + custom)
        if (window.StudFlow.app) {
            var appState = window.StudFlow.app.getState();
            if (appState.quizQuestions) {
                appState.quizQuestions.forEach(function(q) {
                    if (q.question && q.options && typeof q.correctIndex === 'number') {
                        questions.push({ question: q.question, options: q.options, correctIndex: q.correctIndex });
                    }
                });
            }
            if (appState.customQuiz) {
                appState.customQuiz.forEach(function(q) {
                    if (q.question && q.options && typeof q.correctIndex === 'number') {
                        questions.push({ question: q.question, options: q.options, correctIndex: q.correctIndex });
                    }
                });
            }
        }

        // From subjects
        if (window.StudFlow.subjects && window.StudFlow.subjects.getAllQuiz) {
            var subjQuiz = window.StudFlow.subjects.getAllQuiz();
            subjQuiz.forEach(function(q) {
                if (q.question && q.options && typeof q.correctIndex === 'number') {
                    questions.push({ question: q.question, options: q.options, correctIndex: q.correctIndex });
                }
            });
        }

        // From bac francais
        if (window.StudFlow.bacfrancais && window.StudFlow.bacfrancais.getAllQuiz) {
            var bacQuiz = window.StudFlow.bacfrancais.getAllQuiz();
            bacQuiz.forEach(function(q) {
                if (q.question && q.options && typeof q.correctIndex === 'number') {
                    questions.push({ question: q.question, options: q.options, correctIndex: q.correctIndex });
                }
            });
        }

        return questions;
    }

    function getDailyQuestions() {
        var all = getQuestions();
        var seed = getDaySeed();
        var shuffled = seededShuffle(all, seed);
        return shuffled.slice(0, MAX_QUESTIONS);
    }

    // ==================== COMBO ====================
    function getComboInfo(streak) {
        for (var i = 0; i < COMBO_LEVELS.length; i++) {
            if (streak >= COMBO_LEVELS[i].min) {
                return COMBO_LEVELS[i];
            }
        }
        return { min: 0, mult: 1, label: '', cls: '' };
    }

    // ==================== ESCAPE ====================
    function esc(str) {
        if (window.StudFlow.app && window.StudFlow.app.escapeText) return window.StudFlow.app.escapeText(str);
        var div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    // ==================== SHOW (HUB SCREEN) ====================
    function show() {
        window.StudFlow.app.showScreen('chrono');
        renderHub();
    }

    function renderHub() {
        var container = document.getElementById('chrono-content');
        if (!container) return;

        var data = loadStorage();
        var today = getTodayStr();
        var best = data.bestScore || 0;
        var todayScore = (data.todayDate === today && data.todayScore !== null) ? data.todayScore : null;
        var todayLabel = todayScore !== null ? (todayScore + ' pts') : '--';

        container.innerHTML = ''
            + '<div class="chrono-hub">'
            + '<button class="back-btn" data-action="screen:dashboard">\u2190 Retour</button>'
            + '<div class="chrono-hub-hero">'
            + '<div class="chrono-hub-icon">\u23F1\uFE0F</div>'
            + '<h2 class="chrono-hub-title">Mode Chrono</h2>'
            + '<p class="chrono-hub-desc">60 secondes. Max de bonnes reponses.<br>Le meme defi pour tout le monde aujourd\'hui.</p>'
            + '</div>'
            + '<div class="chrono-hub-stats">'
            + '<div class="chrono-hub-stat">'
            + '<span class="chrono-hub-stat-label">Ton record</span>'
            + '<span class="chrono-hub-stat-val">' + best + ' pts</span>'
            + '</div>'
            + '<div class="chrono-hub-stat">'
            + '<span class="chrono-hub-stat-label">Score du jour</span>'
            + '<span class="chrono-hub-stat-val">' + todayLabel + '</span>'
            + '</div>'
            + '</div>'
            + '<button class="chrono-go-btn" data-action="chronoMode.start">GO ! \u2192</button>'
            + '</div>';
    }

    // ==================== START ====================
    function start() {
        var questions = getDailyQuestions();
        if (questions.length === 0) {
            if (window.StudFlow.gamification && window.StudFlow.gamification.showToast) {
                window.StudFlow.gamification.showToast('Aucune question disponible. Ajoute du contenu d\'abord !', 'xp');
            }
            return;
        }

        state.questions = questions;
        state.currentIndex = 0;
        state.score = 0;
        state.correct = 0;
        state.total = 0;
        state.combo = 0;
        state.maxCombo = 0;
        state.maxComboMult = 1;
        state.timer = CHRONO_DURATION;
        state.running = true;
        state.xpAwarded = false;

        renderGame();
        startTimer();
    }

    // ==================== TIMER ====================
    function startTimer() {
        if (state.interval) clearInterval(state.interval);
        state.interval = setInterval(function() {
            state.timer--;
            updateTimerDisplay();
            if (state.timer <= 0) {
                endGame();
            }
        }, 1000);
    }

    function updateTimerDisplay() {
        var el = document.getElementById('chrono-timer-val');
        if (el) {
            el.textContent = state.timer;
            if (state.timer <= 10) {
                el.classList.add('chrono-timer-danger');
            }
        }
    }

    // ==================== RENDER GAME ====================
    function renderGame() {
        var container = document.getElementById('chrono-content');
        if (!container) return;

        var q = state.questions[state.currentIndex];
        if (!q) { endGame(); return; }

        var comboInfo = getComboInfo(state.combo);
        var comboHTML = '';
        if (comboInfo.label) {
            comboHTML = '<div class="chrono-combo chrono-combo-' + comboInfo.cls + '">x' + comboInfo.mult + ' ' + comboInfo.label + '</div>';
        }

        var optionLabels = ['A', 'B', 'C', 'D'];
        var optionsHTML = '';
        for (var i = 0; i < q.options.length; i++) {
            optionsHTML += '<button class="chrono-option chrono-option-' + optionLabels[i].toLowerCase() + '" '
                + 'data-action="chronoMode.answer" data-param="' + i + '">'
                + '<span class="chrono-option-letter">' + optionLabels[i] + '</span>'
                + '<span class="chrono-option-text">' + esc(q.options[i]) + '</span>'
                + '</button>';
        }

        container.innerHTML = ''
            + '<div class="chrono-overlay">'
            + '<div class="chrono-topbar">'
            + '<div class="chrono-timer"><span id="chrono-timer-val" class="' + (state.timer <= 10 ? 'chrono-timer-danger' : '') + '">' + state.timer + '</span></div>'
            + '<div class="chrono-score-display">' + state.score + ' pts</div>'
            + '</div>'
            + comboHTML
            + '<div class="chrono-progress">Q.' + (state.currentIndex + 1) + '</div>'
            + '<div class="chrono-question">' + esc(q.question) + '</div>'
            + '<div class="chrono-options">' + optionsHTML + '</div>'
            + '</div>';
    }

    // ==================== ANSWER ====================
    function answer(idx) {
        if (!state.running) return;

        idx = Number(idx);
        var q = state.questions[state.currentIndex];
        if (!q) return;

        var isCorrect = (idx === q.correctIndex);
        state.total++;

        if (isCorrect) {
            state.correct++;
            state.combo++;
            if (state.combo > state.maxCombo) state.maxCombo = state.combo;
            var comboInfo = getComboInfo(state.combo);
            if (comboInfo.mult > state.maxComboMult) state.maxComboMult = comboInfo.mult;
            state.score += comboInfo.mult;
            flashAnswer(idx, true);
        } else {
            state.combo = 0;
            flashAnswer(idx, false);
        }

        // Move to next question
        state.currentIndex++;
        if (state.currentIndex >= state.questions.length) {
            endGame();
            return;
        }

        // Small delay for visual feedback then render next
        setTimeout(function() {
            if (state.running) renderGame();
        }, 150);
    }

    function flashAnswer(idx, correct) {
        var btns = document.querySelectorAll('.chrono-option');
        if (btns[idx]) {
            btns[idx].classList.add(correct ? 'chrono-option-correct' : 'chrono-option-wrong');
        }
        // Disable all buttons briefly
        for (var i = 0; i < btns.length; i++) {
            btns[i].style.pointerEvents = 'none';
        }
    }

    // ==================== END GAME ====================
    function endGame() {
        state.running = false;
        if (state.interval) {
            clearInterval(state.interval);
            state.interval = null;
        }

        // Save
        var data = loadStorage();
        var today = getTodayStr();

        // Update best score
        if (state.score > data.bestScore) {
            data.bestScore = state.score;
        }

        // Only first play of the day counts as todayScore
        if (data.todayDate !== today) {
            data.todayScore = state.score;
            data.todayDate = today;
        }

        // Add to history
        data.history.push({
            date: today,
            score: state.score,
            correct: state.correct,
            total: state.total
        });

        // Keep last 30 entries
        if (data.history.length > 30) {
            data.history = data.history.slice(-30);
        }

        saveStorage(data);

        // Award XP
        if (!state.xpAwarded && window.StudFlow.gamification) {
            var xp = 10;
            if (state.score >= 26) xp = 60;
            else if (state.score >= 16) xp = 40;
            else if (state.score >= 6) xp = 25;

            // Use custom XP amount via addXP workaround: call multiple small xp actions
            // Or directly manipulate — use showToast for feedback
            if (window.StudFlow.gamification.addXP) {
                // Add a custom action
                window.StudFlow.gamification.XP_ACTIONS.chrono_complete = xp;
                window.StudFlow.gamification.addXP('chrono_complete');
            }
            state.xpAwarded = true;
        }

        renderResults(data);
    }

    // ==================== RENDER RESULTS ====================
    function renderResults(data) {
        var container = document.getElementById('chrono-content');
        if (!container) return;

        var comboInfo = getComboInfo(state.maxCombo);
        var maxMultLabel = 'x' + state.maxComboMult;

        // Estimate percentile (fun fake based on score)
        var percentile = 50;
        if (state.score >= 30) percentile = 5;
        else if (state.score >= 25) percentile = 10;
        else if (state.score >= 20) percentile = 15;
        else if (state.score >= 15) percentile = 25;
        else if (state.score >= 10) percentile = 40;
        else if (state.score >= 5) percentile = 60;
        else percentile = 80;

        var xp = 10;
        if (state.score >= 26) xp = 60;
        else if (state.score >= 16) xp = 40;
        else if (state.score >= 6) xp = 25;

        container.innerHTML = ''
            + '<div class="chrono-results">'
            + '<div class="chrono-result-card" id="chrono-result-card">'
            + '<div class="chrono-result-header">\u23F1\uFE0F CHRONO STUDFLOW</div>'
            + '<div class="chrono-result-score">\uD83D\uDD25 ' + state.score + ' pts</div>'
            + '<div class="chrono-result-detail">' + state.correct + ' bonnes / ' + state.total + '</div>'
            + '<div class="chrono-result-combo">Combo max: ' + maxMultLabel + '</div>'
            + '<div class="chrono-result-percentile">\uD83D\uDCCA Top ' + percentile + '% des joueurs</div>'
            + '<div class="chrono-result-best">\uD83C\uDFC6 Record perso: ' + data.bestScore + '</div>'
            + '<div class="chrono-result-brand">studflow.app</div>'
            + '</div>'
            + '<div class="chrono-result-xp">+' + xp + ' XP</div>'
            + '<div class="chrono-result-actions">'
            + '<button class="chrono-action-btn chrono-share-btn" data-action="chronoMode.shareResult">'
            + '\uD83D\uDCE4 Partager'
            + '</button>'
            + '<button class="chrono-action-btn chrono-replay-btn" data-action="chronoMode.start">'
            + '\uD83D\uDD04 Rejouer'
            + '</button>'
            + '<button class="chrono-back-btn" data-action="screen:dashboard">'
            + '\u2190 Retour'
            + '</button>'
            + '</div>'
            + '</div>';
    }

    // ==================== SHARE ====================
    function shareResult() {
        var text = '\u23F1\uFE0F CHRONO STUDFLOW\n'
            + '\uD83D\uDD25 ' + state.score + ' pts\n'
            + state.correct + ' bonnes / ' + state.total + '\n'
            + 'Combo max: x' + state.maxComboMult + '\n'
            + '\nTu fais mieux ? \uD83D\uDC49 studflow.app';

        if (navigator.share) {
            navigator.share({
                title: 'Mode Chrono StudFlow',
                text: text
            }).catch(function() {});
        } else {
            // Fallback: copy to clipboard
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(text).then(function() {
                    if (window.StudFlow.gamification && window.StudFlow.gamification.showToast) {
                        window.StudFlow.gamification.showToast('Resultat copie !', 'xp');
                    }
                });
            }
        }
    }

    // ==================== PUBLIC HELPERS ====================
    function getBestScore() {
        var data = loadStorage();
        return data.bestScore || 0;
    }

    function hasPlayedToday() {
        var data = loadStorage();
        return data.todayDate === getTodayStr();
    }

    function getTodayScore() {
        var data = loadStorage();
        if (data.todayDate === getTodayStr()) return data.todayScore;
        return null;
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.chronoMode = {
        show: show,
        start: start,
        answer: answer,
        shareResult: shareResult,
        getBestScore: getBestScore,
        hasPlayedToday: hasPlayedToday,
        getTodayScore: getTodayScore
    };

})();
