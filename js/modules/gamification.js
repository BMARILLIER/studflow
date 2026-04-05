// gamification.js — XP, niveaux, streaks, confetti, toasts
(function() {
    const LEVELS = [
        { level: 1, name: 'Debutant', xpNeeded: 0, emoji: '🌱' },
        { level: 2, name: 'Curieux', xpNeeded: 50, emoji: '🔍' },
        { level: 3, name: 'Motive', xpNeeded: 120, emoji: '💪' },
        { level: 4, name: 'Regulier', xpNeeded: 250, emoji: '📚' },
        { level: 5, name: 'Concentre', xpNeeded: 400, emoji: '🎯' },
        { level: 6, name: 'Efficace', xpNeeded: 600, emoji: '⚡' },
        { level: 7, name: 'Expert', xpNeeded: 850, emoji: '🧠' },
        { level: 8, name: 'Master', xpNeeded: 1200, emoji: '👑' },
        { level: 9, name: 'Champion', xpNeeded: 1600, emoji: '🏆' },
        { level: 10, name: 'Legende', xpNeeded: 2100, emoji: '🌟' }
    ];

    const XP_ACTIONS = {
        flashcard_correct: 5,
        flashcard_complete: 15,
        quiz_correct: 8,
        quiz_complete: 25,
        focus_15: 20,
        focus_25: 35,
        focus_45: 60,
        diagnostic_done: 30,
        coach_fiche: 10,
        stress_session: 10,
        breathing_session: 8,
        daily_login: 15,
        create_flashcard: 5,
        create_quiz: 8,
        daily_mission: 50,
        bac_section: 12,
        coach_objectif: 10,
        confiance_better: 8,
        plan_created: 20,
        plan_session: 10,
        urgence_complete: 15,
        share: 5,
        conseil_lu: 3,
        quiz_gen_complete: 15,
        feedback: 10,
        coach_chat: 5,
        challenge_create: 10,
        challenge_complete: 20,
        challenge_win: 30
    };

    const CONFETTI_COLORS = ['#60a5fa', '#22d3ee', '#34D399', '#a78bfa', '#FBBF24', '#93c5fd', '#38BDF8'];

    function getStats() {
        return window.StudFlow.storage.loadData('gamification', {
            xp: 0,
            level: 1,
            streak: 0,
            lastActiveDate: null,
            totalActions: 0,
            badges: []
        });
    }

    function saveStats(stats) {
        window.StudFlow.storage.saveData('gamification', stats);
    }

    function getCurrentLevel(xp) {
        let current = LEVELS[0];
        for (let i = LEVELS.length - 1; i >= 0; i--) {
            if (xp >= LEVELS[i].xpNeeded) {
                current = LEVELS[i];
                break;
            }
        }
        return current;
    }

    function getNextLevel(xp) {
        for (let i = 0; i < LEVELS.length; i++) {
            if (xp < LEVELS[i].xpNeeded) return LEVELS[i];
        }
        return LEVELS[LEVELS.length - 1];
    }

    function getLevelProgress(xp) {
        const current = getCurrentLevel(xp);
        const next = getNextLevel(xp);
        if (current.level === next.level) return 100;
        const inLevel = xp - current.xpNeeded;
        const levelRange = next.xpNeeded - current.xpNeeded;
        return Math.min(100, Math.round((inLevel / levelRange) * 100));
    }

    function addXP(action) {
        const amount = XP_ACTIONS[action] || 0;
        if (amount === 0) return;

        const stats = getStats();
        const oldLevel = getCurrentLevel(stats.xp);
        stats.xp += amount;
        stats.totalActions++;
        const newLevel = getCurrentLevel(stats.xp);

        // Check daily streak
        checkStreak(stats);

        saveStats(stats);

        // Show XP toast — differentiate by amount
        var toastType = amount >= 25 ? 'xp-big' : 'xp';
        var toastIcon = amount >= 50 ? '🏆' : amount >= 25 ? '⭐' : '✨';
        showToast(`+${amount} XP`, toastType, toastIcon);

        // Level up!
        if (newLevel.level > oldLevel.level) {
            setTimeout(() => {
                spawnConfetti();
                setTimeout(() => {
                    showToast(`Niveau ${newLevel.level} ! ${newLevel.emoji} ${newLevel.name}`, 'level-up', '🎉');
                }, 200);
            }, 500);
        }

        // Update UI
        updateXPDisplay();

        // Event bus
        if (window.StudFlow.events) {
            window.StudFlow.events.emit('xp:gained', { action: action, amount: amount, totalXP: stats.xp });
            if (newLevel.level > oldLevel.level) {
                window.StudFlow.events.emit('level:up', { level: newLevel.level, name: newLevel.name });
            }
        }
    }

    function checkStreak(stats) {
        const today = new Date().toDateString();
        if (stats.lastActiveDate !== today) {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);

            if (stats.lastActiveDate === yesterday.toDateString()) {
                stats.streak++;
                if (stats.streak > 1) {
                    setTimeout(() => {
                        showToast(`${stats.streak} jours de suite !`, 'streak', '🔥');
                    }, 1200);
                }
            } else if (stats.lastActiveDate !== null) {
                stats.streak = 1;
            } else {
                stats.streak = 1;
            }
            stats.lastActiveDate = today;

            // Event bus — streak updated
            if (window.StudFlow.events) {
                window.StudFlow.events.emit('streak:updated', { streak: stats.streak });
            }

            // Daily login XP
            stats.xp += XP_ACTIONS.daily_login;
        }
    }

    function updateXPDisplay() {
        const stats = getStats();
        const current = getCurrentLevel(stats.xp);
        const next = getNextLevel(stats.xp);
        const progress = getLevelProgress(stats.xp);

        // Header XP bar
        const levelEl = document.querySelector('.xp-level');
        if (levelEl) levelEl.textContent = `Nv.${current.level} ${current.emoji}`;

        const xpFill = document.querySelector('.xp-fill');
        if (xpFill) {
            xpFill.style.width = `${progress}%`;
            const xpBar = xpFill.parentElement;
            if (xpBar) xpBar.setAttribute('aria-valuenow', String(progress));
        }

        // Dashboard XP card
        const dashLevel = document.querySelector('.dash-xp-level');
        if (dashLevel) dashLevel.textContent = current.level;

        const dashTitle = document.querySelector('.dash-xp-title');
        if (dashTitle) dashTitle.textContent = `${current.emoji} ${current.name} — Niveau ${current.level}`;

        const dashFill = document.querySelector('.dash-xp-fill');
        if (dashFill) {
            dashFill.style.width = `${progress}%`;
            const dashBar = dashFill.parentElement;
            if (dashBar) dashBar.setAttribute('aria-valuenow', String(progress));
        }

        const dashText = document.querySelector('.dash-xp-text');
        if (dashText) {
            if (current.level < LEVELS.length) {
                dashText.textContent = `${stats.xp} / ${next.xpNeeded} XP — encore ${next.xpNeeded - stats.xp} XP pour ${next.name}`;
            } else {
                dashText.textContent = `${stats.xp} XP — Niveau max atteint !`;
            }
        }

        // Streak in header
        const streakEl = document.getElementById('streak-count');
        if (streakEl) streakEl.textContent = stats.streak;
    }

    // Toast system
    var MAX_TOASTS = 3;

    function showToast(message, type, icon) {
        let container = document.querySelector('.toast-container');
        if (!container) {
            container = document.createElement('div');
            container.className = 'toast-container';
            container.setAttribute('aria-live', 'polite');
            container.setAttribute('role', 'status');
            document.body.appendChild(container);
        }

        // Limit visible toasts — remove oldest if at max
        while (container.children.length >= MAX_TOASTS) {
            container.removeChild(container.firstChild);
        }

        const toast = document.createElement('div');
        toast.className = `toast ${type || ''}`;
        const iconSpan = document.createElement('span');
        iconSpan.className = 'toast-icon';
        iconSpan.textContent = icon || '✨';
        toast.appendChild(iconSpan);
        toast.appendChild(document.createTextNode(' ' + (message || '')));
        container.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('toast-exit');
            setTimeout(() => {
                if (toast.parentNode) toast.remove();
            }, 300);
        }, 2900);
    }

    // Confetti
    function spawnConfetti() {
        let container = document.querySelector('.confetti-container');
        if (!container) {
            container = document.createElement('div');
            container.className = 'confetti-container';
            document.body.appendChild(container);
        }

        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.background = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
            confetti.style.animationDelay = Math.random() * 0.8 + 's';
            confetti.style.animationDuration = (1.5 + Math.random() * 1.5) + 's';
            confetti.style.width = (6 + Math.random() * 8) + 'px';
            confetti.style.height = (6 + Math.random() * 8) + 'px';
            container.appendChild(confetti);
        }

        setTimeout(() => {
            if (container.parentNode) container.remove();
        }, 3500);
    }

    // Init — check streak on load
    function init() {
        const stats = getStats();
        checkStreak(stats);
        saveStats(stats);
        updateXPDisplay();
    }

    window.StudFlow = window.StudFlow || {};
    window.StudFlow.gamification = {
        addXP, getStats, getCurrentLevel, getNextLevel, getLevelProgress,
        updateXPDisplay, showToast, spawnConfetti, init,
        XP_ACTIONS, LEVELS
    };
})();
