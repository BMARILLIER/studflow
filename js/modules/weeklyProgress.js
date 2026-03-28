// weeklyProgress.js — Weekly progress card + optional sharing
(function() {

    var STORAGE_KEY = 'studflow_weekly_progress';

    // ==================== WEEK HELPERS ====================
    function getMondayKey(date) {
        var d = new Date(date);
        var day = d.getDay(); // 0=Sun
        d.setDate(d.getDate() - ((day + 6) % 7));
        return d.toISOString().slice(0, 10);
    }

    function currentWeekKey() {
        return getMondayKey(new Date());
    }

    function emptyWeek() {
        return { focus: 0, flashcards: 0, quiz: 0, missions: 0 };
    }

    // ==================== STATE ====================
    function loadState() {
        var raw = window.StudFlow.storage.loadData(STORAGE_KEY, null);
        var week = currentWeekKey();
        if (!raw || raw.week !== week) {
            // New week — archive current as prev
            var prev = (raw && raw.week) ? {
                focus: raw.focus || 0,
                flashcards: raw.flashcards || 0,
                quiz: raw.quiz || 0,
                missions: raw.missions || 0
            } : emptyWeek();
            var fresh = { week: week, focus: 0, flashcards: 0, quiz: 0, missions: 0, prev: prev };
            saveState(fresh);
            return fresh;
        }
        if (!raw.prev) raw.prev = emptyWeek();
        return raw;
    }

    function saveState(state) {
        window.StudFlow.storage.saveData(STORAGE_KEY, state);
    }

    // ==================== EVENT HANDLERS ====================
    function onFocusCompleted() {
        var s = loadState();
        s.focus++;
        saveState(s);
        refreshUI();
    }

    function onFlashcardCompleted(data) {
        var s = loadState();
        s.flashcards += (data && data.total) ? data.total : 1;
        saveState(s);
        refreshUI();
    }

    function onQuizCompleted(data) {
        var s = loadState();
        s.quiz += (data && data.total) ? data.total : 1;
        saveState(s);
        refreshUI();
    }

    function onMissionCompleted() {
        var s = loadState();
        s.missions++;
        saveState(s);
        refreshUI();
    }

    // ==================== RENDER ====================
    function diff(current, prev) {
        var d = current - prev;
        if (d > 0) return '<span class="wp-diff up">+' + d + '</span>';
        if (d < 0) return '<span class="wp-diff down">' + d + '</span>';
        return '<span class="wp-diff same">=</span>';
    }

    function renderCard() {
        var s = loadState();
        var gamStats = window.StudFlow.gamification ? window.StudFlow.gamification.getStats() : { streak: 0 };
        var streak = gamStats.streak || 0;

        var rows = [
            { icon: '🔥', label: 'Série', value: streak + ' jour' + (streak > 1 ? 's' : ''), noDiff: true },
            { icon: '⚡', label: 'Sessions focus', value: s.focus, prev: s.prev.focus },
            { icon: '📚', label: 'Flashcards', value: s.flashcards, prev: s.prev.flashcards },
            { icon: '✅', label: 'Quiz', value: s.quiz, prev: s.prev.quiz }
        ];

        var rowsHTML = rows.map(function(r) {
            var diffHTML = r.noDiff ? '' : diff(r.value, r.prev);
            var valStr = typeof r.value === 'number' ? String(r.value) : r.value;
            return '<div class="wp-row">'
                + '<span class="wp-row-icon">' + r.icon + '</span>'
                + '<span class="wp-row-label">' + r.label + '</span>'
                + '<span class="wp-row-value">' + valStr + '</span>'
                + diffHTML
                + '</div>';
        }).join('');

        return '<div id="wp-card" class="wp-card">'
            + '<div class="wp-header">'
            + '<span class="wp-title">📊 Ma semaine</span>'
            + '<span class="wp-week-label">vs semaine dernière</span>'
            + '</div>'
            + rowsHTML
            + '<button class="wp-share-btn" data-action="weeklyProgress.share">'
            + '📤 Partager ma progression'
            + '</button>'
            + '</div>';
    }

    // ==================== SHARE ====================
    function shareProgress() {
        var s = loadState();
        var gamStats = window.StudFlow.gamification ? window.StudFlow.gamification.getStats() : { streak: 0, xp: 0 };
        var streak = gamStats.streak || 0;

        var text = '📊 Ma semaine sur StudFlow :\n'
            + '🔥 ' + streak + ' jour' + (streak > 1 ? 's' : '') + ' de série\n'
            + '⚡ ' + s.focus + ' session' + (s.focus > 1 ? 's' : '') + ' focus\n'
            + '📚 ' + s.flashcards + ' flashcard' + (s.flashcards > 1 ? 's' : '') + ' révisée' + (s.flashcards > 1 ? 's' : '') + '\n'
            + '✅ ' + s.quiz + ' question' + (s.quiz > 1 ? 's' : '') + ' quiz\n\n'
            + 'Révise avec StudFlow — gratuit et 100% local !';

        // Try Web Share API first
        if (navigator.share) {
            navigator.share({ text: text }).catch(function() {});
            return;
        }
        // Fallback: clipboard
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(function() {
                if (window.StudFlow.gamification) {
                    window.StudFlow.gamification.showToast('Progression copiée !', 'xp', '📋');
                }
            });
        } else {
            // Textarea fallback
            var ta = document.createElement('textarea');
            ta.value = text;
            ta.style.position = 'fixed';
            ta.style.opacity = '0';
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
            if (window.StudFlow.gamification) {
                window.StudFlow.gamification.showToast('Progression copiée !', 'xp', '📋');
            }
        }
    }

    // ==================== UI UPDATE ====================
    function refreshUI() {
        var el = document.getElementById('wp-card');
        if (!el) return;
        var tmp = document.createElement('div');
        tmp.innerHTML = renderCard();
        el.replaceWith(tmp.firstChild);
    }

    // ==================== INIT ====================
    function init() {
        if (!window.StudFlow.events) return;
        window.StudFlow.events.on('focus:completed', onFocusCompleted);
        window.StudFlow.events.on('flashcard:completed', onFlashcardCompleted);
        window.StudFlow.events.on('quiz:completed', onQuizCompleted);
        window.StudFlow.events.on('daily_mission:completed', onMissionCompleted);
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.weeklyProgress = {
        renderCard: renderCard,
        share: shareProgress,
        init: init
    };

})();
