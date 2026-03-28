// notifications.js — Rappels quotidiens via Push Notifications + smart streak alerts
(function() {
    'use strict';

    var PERMISSION_KEY = 'studflow_notif_asked';
    var ENABLED_KEY = 'studflow_notif_enabled';
    var PREFS_KEY = 'studflow_notif_prefs';
    var ACTIVE_HOURS_KEY = 'studflow_active_hours';
    var DEFAULT_REMIND_HOUR = 18; // fallback 18h

    // ==================== PREFERENCES ====================
    function getDefaultPrefs() {
        return {
            enabled: true,
            streakAlerts: true,
            revisionAlerts: true,
            quietStart: 23,
            quietEnd: 7
        };
    }

    function getPreferences() {
        try {
            var saved = localStorage.getItem(PREFS_KEY);
            if (saved) {
                var parsed = JSON.parse(saved);
                var defaults = getDefaultPrefs();
                // Merge with defaults to fill missing keys
                for (var key in defaults) {
                    if (defaults.hasOwnProperty(key) && parsed[key] === undefined) {
                        parsed[key] = defaults[key];
                    }
                }
                return parsed;
            }
        } catch (e) { /* ignore */ }
        return getDefaultPrefs();
    }

    function setPreferences(prefs) {
        var current = getPreferences();
        for (var key in prefs) {
            if (prefs.hasOwnProperty(key)) {
                current[key] = prefs[key];
            }
        }
        localStorage.setItem(PREFS_KEY, JSON.stringify(current));

        // Sync enabled state with legacy key
        if (current.enabled !== undefined) {
            if (current.enabled) {
                localStorage.setItem(ENABLED_KEY, '1');
            } else {
                localStorage.removeItem(ENABLED_KEY);
            }
        }
    }

    function isInQuietHours() {
        var prefs = getPreferences();
        var hour = new Date().getHours();
        if (prefs.quietStart <= prefs.quietEnd) {
            return hour >= prefs.quietStart && hour < prefs.quietEnd;
        }
        // Wraps midnight: e.g. 23 -> 7
        return hour >= prefs.quietStart || hour < prefs.quietEnd;
    }

    // ==================== SMART TIMING ====================
    function trackSessionHour() {
        try {
            var hours = JSON.parse(localStorage.getItem(ACTIVE_HOURS_KEY) || '[]');
            var currentHour = new Date().getHours();
            hours.push(currentHour);
            // Keep last 7 entries
            if (hours.length > 7) {
                hours = hours.slice(hours.length - 7);
            }
            localStorage.setItem(ACTIVE_HOURS_KEY, JSON.stringify(hours));
        } catch (e) { /* ignore */ }
    }

    function getSmartRemindHour() {
        try {
            var hours = JSON.parse(localStorage.getItem(ACTIVE_HOURS_KEY) || '[]');
            if (hours.length < 3) return DEFAULT_REMIND_HOUR; // not enough data

            // Count frequency of each hour
            var freq = {};
            for (var i = 0; i < hours.length; i++) {
                var h = hours[i];
                freq[h] = (freq[h] || 0) + 1;
            }

            // Find the most common hour
            var bestHour = DEFAULT_REMIND_HOUR;
            var bestCount = 0;
            for (var hour in freq) {
                if (freq.hasOwnProperty(hour) && freq[hour] > bestCount) {
                    bestCount = freq[hour];
                    bestHour = parseInt(hour);
                }
            }
            return bestHour;
        } catch (e) {
            return DEFAULT_REMIND_HOUR;
        }
    }

    // ==================== SMART MESSAGES ====================
    function getSmartMessage() {
        var prefs = getPreferences();
        var candidates = [];

        // 1. Streak danger message
        if (prefs.streakAlerts) {
            var streakInfo = getStreakInfo();
            if (streakInfo && streakInfo.streak > 2 && !streakInfo.activeToday) {
                candidates.push('Ta serie de ' + streakInfo.streak + ' jours est en danger ! Reviens vite \uD83D\uDD25');
            }
        }

        // 2. Spaced repetition due cards
        if (prefs.revisionAlerts) {
            var dueCount = getSRDueCount();
            if (dueCount > 0) {
                candidates.push(dueCount + ' carte' + (dueCount > 1 ? 's' : '') + ' a reviser aujourd\'hui (repetition espacee) \uD83E\uDDE0');
            }
        }

        // 3. Mastery target for weak subject
        try {
            if (window.StudFlow && window.StudFlow.adaptive) {
                var topics = window.StudFlow.adaptive.getAllTopics();
                if (topics.length > 0) {
                    var weakest = topics[0];
                    var wpct = Math.round(weakest.topic.mastery * 100);
                    var target = Math.min(100, wpct + 10);
                    if (wpct < 60) {
                        candidates.push('\uD83C\uDFAF Tu peux atteindre ' + target + '% en ' + weakest.topic.label + ' aujourd\'hui');
                    }
                }
            }
        } catch(e) {}

        // 4. XP proximity to next level
        var xpInfo = getXPInfo();
        if (xpInfo && xpInfo.xpRemaining > 0 && xpInfo.xpRemaining <= 50) {
            candidates.push('Plus que ' + xpInfo.xpRemaining + ' XP pour le niveau suivant ! \uD83C\uDFAF');
        }

        // If we have smart candidates, pick one (prioritize streak danger)
        if (candidates.length > 0) {
            return candidates[0];
        }

        // Fallback to generic messages
        var fallback = [
            '15 min de revision ce soir ? Ton futur toi te remerciera.',
            'Un petit quiz avant de dormir ? Ca prend 5 minutes.',
            'Ta serie est en jeu ! Reviens faire une session rapide.',
            'Le bac approche. Meme 10 minutes comptent.',
            'Ton coach t\'attend. Une question rapide ?'
        ];
        return fallback[Math.floor(Math.random() * fallback.length)];
    }

    function getStreakInfo() {
        try {
            if (window.StudFlow && window.StudFlow.gamification) {
                var stats = window.StudFlow.gamification.getStats();
                var today = new Date().toDateString();
                return {
                    streak: stats.streak || 0,
                    lastActiveDate: stats.lastActiveDate,
                    activeToday: stats.lastActiveDate === today
                };
            }
        } catch (e) { /* ignore */ }
        return null;
    }

    function getSRDueCount() {
        try {
            if (window.StudFlow && window.StudFlow.spacedRepetition) {
                return window.StudFlow.spacedRepetition.getDueCount();
            }
        } catch (e) { /* ignore */ }
        return 0;
    }

    function getXPInfo() {
        try {
            if (window.StudFlow && window.StudFlow.gamification) {
                var stats = window.StudFlow.gamification.getStats();
                var nextLevel = window.StudFlow.gamification.getNextLevel(stats.xp);
                var currentLevel = window.StudFlow.gamification.getCurrentLevel(stats.xp);
                if (nextLevel.level > currentLevel.level) {
                    return {
                        xp: stats.xp,
                        xpRemaining: nextLevel.xpNeeded - stats.xp,
                        nextLevelName: nextLevel.name
                    };
                }
            }
        } catch (e) { /* ignore */ }
        return null;
    }

    // ==================== STREAK DANGER ====================
    function checkStreakDanger() {
        if (!isEnabled()) return;
        var prefs = getPreferences();
        if (!prefs.streakAlerts) return;
        if (isInQuietHours()) return;

        var streakInfo = getStreakInfo();
        if (!streakInfo || streakInfo.streak <= 2) return;
        if (streakInfo.activeToday) return;

        // Check how long since last activity
        var lastActive = localStorage.getItem('studflow_last_active');
        if (!lastActive) return;

        var hoursSince = (Date.now() - parseInt(lastActive)) / (1000 * 60 * 60);
        if (hoursSince < 20) return;

        // Urgent notification
        if (Notification.permission === 'granted') {
            new Notification('StudFlow', {
                body: 'Ta serie de ' + streakInfo.streak + ' jours va mourir ! Plus que quelques heures \u26A0\uFE0F',
                icon: '/icons/icon-192.png',
                badge: '/icons/icon-192.png',
                tag: 'studflow-streak-danger',
                renotify: true
            });
        }
    }

    function scheduleStreakCheck() {
        var streakInfo = getStreakInfo();
        if (!streakInfo || streakInfo.streak <= 0) return;

        // Schedule for 20h (8PM) today if not past already
        var now = new Date();
        var target = new Date();
        target.setHours(20, 0, 0, 0);
        if (now >= target) {
            target.setDate(target.getDate() + 1);
        }
        var ms = target.getTime() - now.getTime();

        setTimeout(function() {
            checkStreakDanger();
            // Reschedule for next day
            scheduleStreakCheck();
        }, ms);
    }

    // ==================== INIT ====================
    function init() {
        // Track session start hour for smart timing
        trackSessionHour();

        // Ask permission after 2nd quiz (not immediately)
        var quizCount = parseInt(localStorage.getItem('studflow_quiz_count') || '0');
        var asked = localStorage.getItem(PERMISSION_KEY);
        if (quizCount >= 2 && !asked && 'Notification' in window) {
            setTimeout(askPermission, 3000);
        }
        // Schedule daily reminder if already enabled
        if (isEnabled()) {
            scheduleDailyReminder();
            scheduleStreakCheck();
        }

        // Listen for visibility change to check streak danger
        document.addEventListener('visibilitychange', function() {
            if (!document.hidden) {
                checkStreakDanger();
            }
        });
    }

    // ==================== PERMISSION ====================
    function askPermission() {
        if (!('Notification' in window)) return;
        if (Notification.permission === 'granted') {
            localStorage.setItem(PERMISSION_KEY, '1');
            localStorage.setItem(ENABLED_KEY, '1');
            scheduleDailyReminder();
            return;
        }
        if (Notification.permission === 'denied') {
            localStorage.setItem(PERMISSION_KEY, '1');
            return;
        }
        // Show custom prompt first
        showCustomPrompt();
    }

    function showCustomPrompt() {
        var overlay = document.createElement('div');
        overlay.id = 'notif-prompt';
        overlay.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.7);z-index:10000;display:flex;align-items:center;justify-content:center;padding:20px;';
        overlay.innerHTML = '<div style="background:var(--card-bg,#1e1e3f);border-radius:16px;padding:24px;max-width:320px;text-align:center;">'
            + '<div style="font-size:2.5rem;margin-bottom:10px;">\uD83D\uDD14</div>'
            + '<h3 style="margin:0 0 8px;font-size:1.1rem;color:#fff;">Rappel quotidien ?</h3>'
            + '<p style="margin:0 0 16px;font-size:0.9rem;color:rgba(255,255,255,0.7);line-height:1.4;">Un petit rappel chaque soir pour ne pas oublier de reviser. On s\'adapte a tes horaires. Tu peux desactiver quand tu veux.</p>'
            + '<button data-action="notifications.acceptNotif" style="background:#6c63ff;color:#fff;border:none;border-radius:8px;padding:10px 24px;font-size:0.9rem;cursor:pointer;width:100%;">Activer les rappels</button>'
            + '<br><button data-action="notifications.declineNotif" style="background:none;border:none;color:rgba(255,255,255,0.4);font-size:0.8rem;margin-top:10px;cursor:pointer;">Non merci</button>'
            + '</div>';
        document.body.appendChild(overlay);
    }

    function acceptNotif() {
        removePrompt();
        localStorage.setItem(PERMISSION_KEY, '1');
        Notification.requestPermission().then(function(result) {
            if (result === 'granted') {
                localStorage.setItem(ENABLED_KEY, '1');
                setPreferences({ enabled: true });
                scheduleDailyReminder();
                scheduleStreakCheck();
                if (window.StudFlow.gamification && window.StudFlow.gamification.showToast) {
                    window.StudFlow.gamification.showToast('Rappels actives !', 'xp', '\uD83D\uDD14');
                }
            }
        });
    }

    function declineNotif() {
        removePrompt();
        localStorage.setItem(PERMISSION_KEY, '1');
    }

    function removePrompt() {
        var el = document.getElementById('notif-prompt');
        if (el) el.remove();
    }

    // ==================== SCHEDULE ====================
    function scheduleDailyReminder() {
        if (!isEnabled()) return;

        var remindHour = getSmartRemindHour();

        // Calculate ms until next reminder time
        var now = new Date();
        var next = new Date();
        next.setHours(remindHour, 0, 0, 0);
        if (now >= next) {
            next.setDate(next.getDate() + 1);
        }
        var ms = next.getTime() - now.getTime();

        setTimeout(function() {
            showReminder();
            // Re-schedule for next day
            scheduleDailyReminder();
        }, ms);
    }

    function showReminder() {
        if (!isEnabled() || Notification.permission !== 'granted') return;
        if (isInQuietHours()) return;

        // Don't show if user was active in the last 2 hours
        var lastActive = localStorage.getItem('studflow_last_active');
        if (lastActive) {
            var diff = Date.now() - parseInt(lastActive);
            if (diff < 2 * 60 * 60 * 1000) return; // active within 2h
        }

        var msg = getSmartMessage();

        new Notification('StudFlow', {
            body: msg,
            icon: '/icons/icon-192.png',
            badge: '/icons/icon-192.png',
            tag: 'studflow-daily',
            renotify: true
        });
    }

    // ==================== HELPERS ====================
    function isEnabled() {
        return localStorage.getItem(ENABLED_KEY) === '1' && 'Notification' in window && Notification.permission === 'granted';
    }

    function disable() {
        localStorage.removeItem(ENABLED_KEY);
        setPreferences({ enabled: false });
        if (window.StudFlow.gamification && window.StudFlow.gamification.showToast) {
            window.StudFlow.gamification.showToast('Rappels desactives', 'xp', '\uD83D\uDD15');
        }
    }

    function enable() {
        if (Notification.permission === 'granted') {
            localStorage.setItem(ENABLED_KEY, '1');
            setPreferences({ enabled: true });
            scheduleDailyReminder();
            scheduleStreakCheck();
            if (window.StudFlow.gamification && window.StudFlow.gamification.showToast) {
                window.StudFlow.gamification.showToast('Rappels actives !', 'xp', '\uD83D\uDD14');
            }
        } else {
            askPermission();
        }
    }

    // Track last active time
    document.addEventListener('visibilitychange', function() {
        if (!document.hidden) {
            localStorage.setItem('studflow_last_active', String(Date.now()));
        }
    });

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.notifications = {
        init: init,
        askPermission: askPermission,
        acceptNotif: acceptNotif,
        declineNotif: declineNotif,
        enable: enable,
        disable: disable,
        isEnabled: isEnabled,
        getPreferences: getPreferences,
        setPreferences: setPreferences,
        checkStreakDanger: checkStreakDanger
    };
})();
