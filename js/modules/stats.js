// stats.js — Systeme de progression & statistiques unifiees
(function() {

    var STORAGE_KEY = 'progression';

    // ==================== DATE HELPERS ====================
    function getTodayStr() {
        var d = new Date();
        var y = d.getFullYear();
        var m = String(d.getMonth() + 1).padStart(2, '0');
        var day = String(d.getDate()).padStart(2, '0');
        return y + '-' + m + '-' + day;
    }

    // ==================== PERSISTENCE ====================
    function getProgression() {
        return window.StudFlow.storage.loadData(STORAGE_KEY, {
            streakDays: 0,
            bestStreakDays: 0,
            lastActiveDate: null,
            modulesCompleted: {
                focus: 0,
                fiche: 0,
                quiz: 0,
                conseil: 0
            }
        });
    }

    function saveProgression(p) {
        window.StudFlow.storage.saveData(STORAGE_KEY, p);
    }

    // ==================== PUBLIC HOOK ====================
    // Streak is read from gamification.js (single source of truth).
    // stats.js only tracks bestStreakDays as a high-water mark.
    function recordActivity(type) {
        var p = getProgression();

        // Read streak from gamification (single source of truth)
        var gamStreak = 0;
        if (window.StudFlow.gamification) {
            gamStreak = window.StudFlow.gamification.getStats().streak || 0;
        }
        if (gamStreak > (p.bestStreakDays || 0)) {
            p.bestStreakDays = gamStreak;
        }

        if (!p.modulesCompleted) {
            p.modulesCompleted = { focus: 0, fiche: 0, quiz: 0, conseil: 0 };
        }

        if (type && p.modulesCompleted[type] !== undefined) {
            p.modulesCompleted[type]++;
        }

        saveProgression(p);
    }

    // ==================== AGGREGATION ====================
    function getAggregatedStats() {
        var p = getProgression();

        // Focus stats (from focus.js via storage)
        var focusStats = window.StudFlow.storage.loadData('focusStats', { sessions: 0, totalMinutes: 0 });

        // Fiche history (from ficheGenerator.js)
        var ficheHistory = window.StudFlow.storage.loadData('ficheGenHistory', { total: 0 });

        // Quiz history (from quizGenerator.js)
        var quizHistory = window.StudFlow.storage.loadData('quizGenHistory', { total: 0 });

        // Conseils history (from conseils.js)
        var conseilsHistory = window.StudFlow.storage.loadData('conseilsHistory', { total: 0 });

        // Gamification stats
        var gamStats = { xp: 0, level: 1, streak: 0 };
        if (window.StudFlow.gamification) {
            gamStats = window.StudFlow.gamification.getStats();
        }

        return {
            streakDays: gamStats.streak || 0,
            bestStreakDays: p.bestStreakDays || 0,
            focusSessions: focusStats.sessions || 0,
            focusMinutes: focusStats.totalMinutes || 0,
            fichesCreatedCount: ficheHistory.total || 0,
            quizCompletedCount: quizHistory.total || 0,
            conseilsViewedCount: conseilsHistory.total || 0,
            xp: gamStats.xp || 0,
            level: gamStats.level || 1
        };
    }

    // ==================== MOTIVATIONAL MESSAGE ====================
    function getMotivationalMessage(stats) {
        if (stats.streakDays >= 7) {
            return '1 semaine de suite ! Tu es inarretable.';
        }
        if (stats.streakDays >= 3) {
            return stats.streakDays + ' jours d\'affile, continue comme ca !';
        }
        if (stats.focusSessions >= 10) {
            return 'Plus de 10 sessions focus, tu es concentre(e) !';
        }
        if (stats.fichesCreatedCount >= 5) {
            return 'Deja ' + stats.fichesCreatedCount + ' fiches creees, bravo !';
        }
        if (stats.focusSessions >= 1) {
            return 'Tu as deja commence a travailler, c\'est le plus dur !';
        }
        return 'Commence ta premiere action pour lancer ta progression !';
    }

    // ==================== MODULE PROGRESS ====================
    function getModuleProgress() {
        var stats = getAggregatedStats();
        return [
            {
                label: 'Sessions Focus',
                icon: '🎯',
                current: stats.focusSessions,
                goal: 10,
                color: 'accent'
            },
            {
                label: 'Fiches creees',
                icon: '📝',
                current: stats.fichesCreatedCount,
                goal: 5,
                color: 'mint'
            },
            {
                label: 'Quiz completes',
                icon: '⚡',
                current: stats.quizCompletedCount,
                goal: 5,
                color: 'sun'
            },
            {
                label: 'Conseils lus',
                icon: '💡',
                current: stats.conseilsViewedCount,
                goal: 10,
                color: 'peach'
            }
        ];
    }

    // ==================== RENDER ====================
    function renderMain() {
        var container = document.getElementById('stats-content');
        if (!container) return;

        var stats = getAggregatedStats();
        var message = getMotivationalMessage(stats);
        var modules = getModuleProgress();

        // Format focus time
        var focusHours = Math.floor(stats.focusMinutes / 60);
        var focusMins = stats.focusMinutes % 60;
        var timeDisplay = focusHours > 0 ? (focusHours + 'h ' + focusMins + 'min') : (focusMins + ' min');

        var html = '<div class="stats-screen">';

        // Header
        html += '<div class="stats-header">'
            + '<h2>Ma Progression</h2>'
            + '<p class="stats-message">' + message + '</p>'
            + '</div>';

        // Streak card
        html += '<div class="stats-streak-card">'
            + '<div class="stats-streak-item">'
            + '<span class="stats-streak-value">' + stats.streakDays + '</span>'
            + '<span class="stats-streak-label">jours de suite</span>'
            + '</div>'
            + '<div class="stats-streak-divider"></div>'
            + '<div class="stats-streak-item">'
            + '<span class="stats-streak-value">' + stats.bestStreakDays + '</span>'
            + '<span class="stats-streak-label">record perso</span>'
            + '</div>'
            + '</div>';

        // Stats cards grid
        html += '<div class="stats-cards-grid">'
            + renderCard('🎯', 'Sessions Focus', stats.focusSessions, 'accent')
            + renderCard('⏱️', 'Temps travaille', timeDisplay, 'hot')
            + renderCard('📝', 'Fiches creees', stats.fichesCreatedCount, 'mint')
            + renderCard('⚡', 'Quiz completes', stats.quizCompletedCount, 'sun')
            + renderCard('💡', 'Conseils lus', stats.conseilsViewedCount, 'peach')
            + '</div>';

        // Module progress bars
        html += '<div class="stats-module-progress">'
            + '<h3>Objectifs de progression</h3>';

        for (var i = 0; i < modules.length; i++) {
            var m = modules[i];
            var pct = Math.min(100, Math.round((m.current / m.goal) * 100));
            html += '<div class="stats-progress-row">'
                + '<div class="stats-progress-info">'
                + '<span>' + m.icon + ' ' + m.label + '</span>'
                + '<span>' + m.current + ' / ' + m.goal + '</span>'
                + '</div>'
                + '<div class="stats-progress-bar ' + m.color + '">'
                + '<div class="stats-progress-fill" style="width: ' + pct + '%"></div>'
                + '</div>'
                + '</div>';
        }

        html += '</div>';

        // XP section
        html += '<div class="stats-xp-section">'
            + '<div class="stats-xp-row">'
            + '<span>✨ XP total</span>'
            + '<span class="stats-xp-value">' + stats.xp + '</span>'
            + '</div>'
            + '<div class="stats-xp-row">'
            + '<span>📊 Niveau</span>'
            + '<span class="stats-xp-value">' + stats.level + '</span>'
            + '</div>'
            + '</div>';

        html += '</div>';

        container.innerHTML = html;
    }

    function renderCard(icon, label, value, color) {
        return '<div class="stats-card ' + color + '">'
            + '<div class="stats-card-icon">' + icon + '</div>'
            + '<div class="stats-card-value">' + value + '</div>'
            + '<div class="stats-card-label">' + label + '</div>'
            + '</div>';
    }

    // ==================== SHOW ====================
    function show() {
        if (window.StudFlow.premium && !window.StudFlow.premium.hasAccess('stats_avancees')) {
            window.StudFlow.premium.showPaywall('stats_avancees');
            return;
        }
        window.StudFlow.app.showScreen('stats');
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.stats = {
        show: show,
        renderMain: renderMain,
        recordActivity: recordActivity,
        getAggregatedStats: getAggregatedStats,
        getProgression: getProgression
    };

})();
