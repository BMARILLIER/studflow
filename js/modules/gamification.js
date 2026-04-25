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

    // Streak milestones: day => { message, bonusXP, confetti }
    const STREAK_MILESTONES = {
        3:   { message: '3 jours ! Tu prends le rythme 🌱',            bonusXP: 50,   confetti: false },
        7:   { message: '1 SEMAINE ! Tu es inarretable 🔥',            bonusXP: 100,  confetti: true },
        14:  { message: '2 SEMAINES ! C\'est une habitude maintenant 💪', bonusXP: 200,  confetti: true },
        30:  { message: '1 MOIS ! Tu es une LEGENDE 👑',               bonusXP: 500,  confetti: true },
        50:  { message: '50 JOURS ! Machine de guerre 🏆',             bonusXP: 750,  confetti: true },
        100: { message: '100 JOURS !!! IMMORTEL(LE) 🌟🌟🌟',          bonusXP: 1500, confetti: true }
    };

    const MAX_STREAK_FREEZES = 2;
    const FREEZE_EARN_INTERVAL = 7; // earn 1 freeze every 7 streak days

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

    // Variable XP multiplier (dopamine surprise)
    function rollXPMultiplier() {
        var roll = Math.random();
        if (roll < 0.70) return { mult: 1, label: null };
        if (roll < 0.90) return { mult: 1.5, label: 'Bonus XP ! x1.5 💫', type: 'xp-big' };
        if (roll < 0.98) return { mult: 2, label: 'SUPER BONUS x2 ! 🔥', type: 'xp-big' };
        return { mult: 3, label: 'MEGA BONUS x3 !!! ⚡⚡⚡', type: 'xp-big' };
    }

    // Anti-spam: same action cannot fire more than once every 400ms.
    // Stops accidental double-taps and runaway loops; legitimate flows
    // (one flashcard every few seconds) are well above this floor.
    var _lastActionAt = {};
    var ACTION_COOLDOWN_MS = 400;

    // Circular log of recent XP awards (debug + admin transparency).
    // Keeps the last 30 entries; not persisted across reloads.
    var _xpLog = [];

    function addXP(action) {
        const baseAmount = XP_ACTIONS[action] || 0;
        if (baseAmount === 0) return;

        var nowTs = Date.now();
        if (_lastActionAt[action] && nowTs - _lastActionAt[action] < ACTION_COOLDOWN_MS) {
            return; // dropped: too soon after the previous fire of the same action
        }
        _lastActionAt[action] = nowTs;

        var multiplier = rollXPMultiplier();
        var amount = Math.round(baseAmount * multiplier.mult);

        _xpLog.push({ at: nowTs, action: action, amount: amount, mult: multiplier.mult });
        if (_xpLog.length > 30) _xpLog.shift();

        const stats = getStats();
        const oldXP = stats.xp;
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

        // Show multiplier toast if bonus hit
        if (multiplier.label) {
            setTimeout(function() {
                showToast(multiplier.label, multiplier.type, '🎰');
            }, 400);
        }

        // Level up! — overlay spectaculaire
        if (newLevel.level > oldLevel.level) {
            setTimeout(() => {
                spawnConfetti();
                if (window.StudFlow.sounds) window.StudFlow.sounds.levelUp();
                // Overlay plein ecran
                showLevelUpOverlay(newLevel);
            }, 400);
        } else {
            // Nudge discret au passage de 80% vers le niveau suivant (pas au level-up)
            const next = getNextLevel(stats.xp);
            if (next.level > newLevel.level) {
                const range = next.xpNeeded - newLevel.xpNeeded;
                const needed = next.xpNeeded - stats.xp;
                if (range > 0 && needed > 0) {
                    const oldProgress = (oldXP - newLevel.xpNeeded) / range;
                    const newProgress = (stats.xp - newLevel.xpNeeded) / range;
                    if (oldProgress < 0.8 && newProgress >= 0.8) {
                        setTimeout(function() {
                            showToast('Plus que ' + needed + ' XP pour niveau ' + next.level + ' ' + next.emoji, 'xp', '⚡');
                        }, 800);
                    }
                }
            }
        }

        // Update UI
        updateXPDisplay();

        // Event bus
        if (window.StudFlow.events) {
            window.StudFlow.events.emit('xp:gained', { action: action, amount: amount, totalXP: stats.xp, multiplier: multiplier.mult });
            if (newLevel.level > oldLevel.level) {
                window.StudFlow.events.emit('level:up', { level: newLevel.level, name: newLevel.name });
            }
        }
    }

    // Joker mensuel gratuit : +1 freeze chaque 1er usage d'un nouveau mois Paris.
    // Ne remplace pas les freezes classiques — s'y ajoute.
    function grantMonthlyJokerIfDue() {
        var p = new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Paris' }));
        var month = p.getFullYear() + '-' + String(p.getMonth() + 1).padStart(2, '0');
        var last = localStorage.getItem('studflow_joker_monthly_month');
        if (last === month) return false;
        var freezes = getStreakFreezes();
        localStorage.setItem('studflow_streak_freezes', String(freezes + 1));
        localStorage.setItem('studflow_joker_monthly_month', month);
        setTimeout(function() {
            showToast('Joker mensuel offert ! ❄️', 'streak', '🎁');
        }, 1500);
        return true;
    }

    function checkStreak(stats) {
        grantMonthlyJokerIfDue();
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
                // Missed a day — try to use a streak freeze
                var freezes = getStreakFreezes();
                if (freezes > 0) {
                    useStreakFreeze();
                    stats.streak++;
                    setTimeout(function() {
                        showToast('Streak freeze utilise ! ❄️ Il t\'en reste ' + getStreakFreezes(), 'streak', '❄️');
                    }, 800);
                } else {
                    stats.streak = 1;
                }
            } else {
                stats.streak = 1;
            }
            stats.lastActiveDate = today;

            // Earn streak freeze every 7 days
            earnStreakFreeze(stats.streak);

            // Check streak milestones
            checkStreakMilestone(stats);

            // Event bus — streak updated
            if (window.StudFlow.events) {
                window.StudFlow.events.emit('streak:updated', { streak: stats.streak });
            }

            // Daily login XP
            stats.xp += XP_ACTIONS.daily_login;
        }
    }

    // --- Streak Freeze ---
    function getStreakFreezes() {
        var val = localStorage.getItem('studflow_streak_freezes');
        return val !== null ? parseInt(val, 10) : 0;
    }

    function useStreakFreeze() {
        var freezes = getStreakFreezes();
        if (freezes > 0) {
            localStorage.setItem('studflow_streak_freezes', String(freezes - 1));
            return true;
        }
        return false;
    }

    function earnStreakFreeze(currentStreak) {
        if (currentStreak <= 0) return;
        // Earn a freeze at every multiple of FREEZE_EARN_INTERVAL
        if (currentStreak % FREEZE_EARN_INTERVAL === 0) {
            var freezes = getStreakFreezes();
            if (freezes < MAX_STREAK_FREEZES) {
                localStorage.setItem('studflow_streak_freezes', String(freezes + 1));
                setTimeout(function() {
                    showToast('Streak freeze gagne ! ❄️ (' + (freezes + 1) + '/' + MAX_STREAK_FREEZES + ')', 'streak', '❄️');
                }, 2000);
            }
        }
    }

    // --- Streak Milestones ---
    function getAchievedMilestones() {
        var raw = localStorage.getItem('studflow_streak_milestones');
        return raw ? JSON.parse(raw) : [];
    }

    function saveAchievedMilestones(arr) {
        localStorage.setItem('studflow_streak_milestones', JSON.stringify(arr));
    }

    function checkStreakMilestone(stats) {
        var milestone = STREAK_MILESTONES[stats.streak];
        if (!milestone) return;

        var achieved = getAchievedMilestones();
        if (achieved.indexOf(stats.streak) !== -1) return; // already triggered

        // Mark as achieved
        achieved.push(stats.streak);
        saveAchievedMilestones(achieved);

        // Award bonus XP
        stats.xp += milestone.bonusXP;

        // Show celebration after a delay so it doesn't collide with streak toast
        setTimeout(function() {
            showToast(milestone.message, 'xp-big', '🎉');
            showToast('+' + milestone.bonusXP + ' XP bonus !', 'xp-big', '🏅');
            if (milestone.confetti) {
                spawnConfetti();
            }
        }, 1800);
    }

    // --- Streak Danger Level ---
    function getStreakDangerLevel() {
        var stats = getStats();
        var today = new Date().toDateString();
        if (stats.lastActiveDate === today) return 'safe';

        var hour = new Date().getHours();
        if (hour >= 23) return 'critical';
        if (hour >= 21) return 'danger';
        if (hour >= 18) return 'warning';
        return 'safe';
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

    // Level up overlay
    function showLevelUpOverlay(level) {
        var overlay = document.createElement('div');
        overlay.className = 'levelup-overlay';
        overlay.innerHTML = '<div class="levelup-card">'
            + '<div class="levelup-emoji">' + level.emoji + '</div>'
            + '<h2 class="levelup-title">Niveau ' + level.level + '\u00A0!</h2>'
            + '<p class="levelup-name">' + level.name + '</p>'
            + '<p class="levelup-msg">Tu avances\u00A0! Continue comme \u00E7a.</p>'
            + '<button class="levelup-btn" id="levelup-close">Continuer \u2192</button>'
            + '</div>';
        document.body.appendChild(overlay);
        overlay.querySelector('#levelup-close').addEventListener('click', function() {
            overlay.classList.add('levelup-exit');
            setTimeout(function() { overlay.remove(); }, 300);
        });
        // Auto-close apres 4s
        setTimeout(function() {
            if (overlay.parentNode) {
                overlay.classList.add('levelup-exit');
                setTimeout(function() { if (overlay.parentNode) overlay.remove(); }, 300);
            }
        }, 4000);
    }

    // Init — check streak on load
    function init() {
        const stats = getStats();
        checkStreak(stats);
        saveStats(stats);
        updateXPDisplay();
    }

    window.StudFlow = window.StudFlow || {};
    function getXPLog() { return _xpLog.slice(); }

    window.StudFlow.gamification = {
        addXP, getStats, getCurrentLevel, getNextLevel, getLevelProgress,
        updateXPDisplay, showToast, spawnConfetti, init,
        XP_ACTIONS, LEVELS,
        getStreakFreezes, useStreakFreeze, earnStreakFreeze, grantMonthlyJokerIfDue,
        checkStreakMilestone, getStreakDangerLevel,
        getXPLog
    };
})();
