// dailyMission.js — Mission du jour (daily engagement loop)
(function() {

    var STORAGE_KEY = 'studflow_daily_mission';
    var XP_BONUS = 50;

    var TASKS = [
        { id: 'focus',      label: '1 session Focus',         target: 1 },
        { id: 'flashcards', label: 'Réviser 5 flashcards',    target: 5 },
        { id: 'quiz',       label: 'Répondre à 3 questions',  target: 3 }
    ];

    function getTodayKey() {
        return new Date().toISOString().slice(0, 10);
    }

    function loadState() {
        var raw = window.StudFlow.storage.loadData(STORAGE_KEY, null);
        if (!raw || raw.date !== getTodayKey()) {
            var fresh = { date: getTodayKey(), focus: 0, flashcards: 0, quiz: 0, completed: false };
            saveState(fresh);
            return fresh;
        }
        return raw;
    }

    function saveState(state) {
        window.StudFlow.storage.saveData(STORAGE_KEY, state);
    }

    function getCompletedCount(state) {
        var count = 0;
        TASKS.forEach(function(t) {
            if (state[t.id] >= t.target) count++;
        });
        return count;
    }

    function checkCompletion(state) {
        if (state.completed) return;
        if (getCompletedCount(state) >= TASKS.length) {
            state.completed = true;
            saveState(state);
            if (window.StudFlow.gamification) {
                window.StudFlow.gamification.addXP('daily_mission');
                window.StudFlow.gamification.showToast(
                    'Mission du jour terminée ! +' + XP_BONUS + ' XP', 'xp', '🎯'
                );
                window.StudFlow.gamification.spawnConfetti();
            }
            // Notify weekly progress tracker
            if (window.StudFlow.events) {
                window.StudFlow.events.emit('daily_mission:completed', {});
            }
        }
    }

    function onFocusCompleted() {
        var state = loadState();
        if (state.completed) return;
        state.focus = Math.min(state.focus + 1, TASKS[0].target);
        saveState(state);
        checkCompletion(state);
        refreshUI();
    }

    function onFlashcardCompleted(data) {
        var state = loadState();
        if (state.completed) return;
        var increment = (data && data.total) ? data.total : 1;
        state.flashcards = Math.min(state.flashcards + increment, TASKS[1].target);
        saveState(state);
        checkCompletion(state);
        refreshUI();
    }

    function onQuizCompleted(data) {
        var state = loadState();
        if (state.completed) return;
        var increment = (data && data.total) ? data.total : 1;
        state.quiz = Math.min(state.quiz + increment, TASKS[2].target);
        saveState(state);
        checkCompletion(state);
        refreshUI();
    }

    function refreshUI() {
        var el = document.getElementById('dm-card');
        if (!el) return;
        var tmp = document.createElement('div');
        tmp.innerHTML = renderCard();
        el.replaceWith(tmp.firstChild);
    }

    function renderCard() {
        var state = loadState();
        var done = getCompletedCount(state);
        var total = TASKS.length;
        var pct = Math.round((done / total) * 100);

        if (state.completed) {
            var gamStats = window.StudFlow.gamification ? window.StudFlow.gamification.getStats() : { streak: 0 };
            var streak = gamStats.streak || 0;
            var streakText = streak > 1 ? '🔥 ' + streak + ' jours de série !' : '🔥 Série maintenue !';
            return '<div id="dm-card" class="dm-card dm-complete">'
                + '<div class="dm-header">'
                + '<span class="dm-icon">🎯</span>'
                + '<span class="dm-title">Mission accomplie</span>'
                + '<span class="dm-badge dm-badge-done">+' + XP_BONUS + ' XP</span>'
                + '</div>'
                + '<div class="dm-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" aria-label="Mission du jour"><div class="dm-fill" style="width:100%"></div></div>'
                + '<p class="dm-congrats">Bravo ! Tu as complété ta mission du jour.</p>'
                + '<p class="dm-streak">' + streakText + '</p>'
                + '<button class="dm-share-btn" data-action="weeklyProgress.share">📤 Partager ma progression</button>'
                + '</div>';
        }

        var tasksHTML = TASKS.map(function(t) {
            var current = state[t.id];
            var isDone = current >= t.target;
            var cls = isDone ? 'dm-task done' : 'dm-task';
            var check = isDone ? '✓' : (current + '/' + t.target);
            return '<div class="' + cls + '">'
                + '<span class="dm-task-check">' + check + '</span>'
                + '<span class="dm-task-label">' + t.label + '</span>'
                + '</div>';
        }).join('');

        // Determine next incomplete task for CTA
        var nextAction = '';
        var nextLabel = '';
        var nextTime = '~3 min';
        for (var i = 0; i < TASKS.length; i++) {
            if (state[TASKS[i].id] < TASKS[i].target) {
                if (TASKS[i].id === 'focus') { nextAction = 'focus'; nextLabel = 'Lancer le Focus'; }
                else if (TASKS[i].id === 'flashcards') { nextAction = 'flashcard'; nextLabel = 'Reviser les cartes'; }
                else { nextAction = 'quiz'; nextLabel = 'Lancer le quiz'; }
                break;
            }
        }

        var ctaHTML = nextAction
            ? '<button class="dm-cta" data-action="dashboard.goTo" data-param="' + nextAction + '">' + nextLabel + ' \u2192</button>'
            : '';

        return '<div id="dm-card" class="dm-card">'
            + '<div class="dm-header">'
            + '<span class="dm-icon">\uD83C\uDFAF</span>'
            + '<span class="dm-title">Mission du jour</span>'
            + '<span class="dm-badge">' + done + '/' + total + '</span>'
            + '<span class="dm-time">' + nextTime + '</span>'
            + '</div>'
            + '<div class="dm-bar" role="progressbar" aria-valuenow="' + pct + '" aria-valuemin="0" aria-valuemax="100" aria-label="Mission du jour"><div class="dm-fill" style="width:' + pct + '%"></div></div>'
            + tasksHTML
            + ctaHTML
            + '</div>';
    }

    function init() {
        if (!window.StudFlow.events) return;
        window.StudFlow.events.on('focus:completed', onFocusCompleted);
        window.StudFlow.events.on('flashcard:completed', onFlashcardCompleted);
        window.StudFlow.events.on('quiz:completed', onQuizCompleted);
    }

    // Expose
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.dailyMission = {
        renderCard: renderCard,
        init: init
    };

})();
