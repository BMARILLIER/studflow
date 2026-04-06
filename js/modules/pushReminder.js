// pushReminder.js — Notifications push de rappel pour la rétention
// Rappelle l'élève le soir s'il n'a pas fait de session
(function() {
    'use strict';

    var STORAGE_KEY = 'studflow_push_reminder';
    var REMINDER_HOUR = 19; // 19h = heure du rappel

    // ==================== PERMISSION ====================
    function isSupported() {
        return 'Notification' in window && 'serviceWorker' in navigator;
    }

    function isEnabled() {
        return Notification.permission === 'granted';
    }

    function askPermission() {
        if (!isSupported()) return Promise.resolve(false);
        if (isEnabled()) return Promise.resolve(true);

        return Notification.requestPermission().then(function(result) {
            return result === 'granted';
        });
    }

    // ==================== LOCAL NOTIFICATION (sans serveur push) ====================
    // On utilise un timer local : pas besoin de serveur push
    function scheduleReminder() {
        if (!isEnabled()) return;

        // Verifier si une session a ete faite aujourd'hui
        var todayKey = new Date().toISOString().slice(0, 10);
        var gaugeData = window.StudFlow.storage.loadData('studflow_daily_gauge', { date: null, count: 0 });
        if (gaugeData.date === todayKey && gaugeData.count > 0) return; // deja fait

        // Calculer le temps avant 19h
        var now = new Date();
        var target = new Date();
        target.setHours(REMINDER_HOUR, 0, 0, 0);
        if (now >= target) {
            // Apres 19h et pas de session → notifier maintenant (si pas deja fait)
            var lastNotif = localStorage.getItem(STORAGE_KEY + '_last');
            if (lastNotif === todayKey) return; // deja notifie aujourd'hui
            sendLocalNotification();
            localStorage.setItem(STORAGE_KEY + '_last', todayKey);
        } else {
            // Avant 19h → programmer un timer
            var delay = target.getTime() - now.getTime();
            setTimeout(function() {
                // Re-verifier si une session a ete faite entre-temps
                var freshGauge = window.StudFlow.storage.loadData('studflow_daily_gauge', { date: null, count: 0 });
                if (freshGauge.date === todayKey && freshGauge.count > 0) return;
                var lastN = localStorage.getItem(STORAGE_KEY + '_last');
                if (lastN === todayKey) return;
                sendLocalNotification();
                localStorage.setItem(STORAGE_KEY + '_last', todayKey);
            }, delay);
        }
    }

    function sendLocalNotification() {
        if (!isEnabled()) return;

        var gamStats = window.StudFlow.gamification ? window.StudFlow.gamification.getStats() : {};
        var streak = gamStats.streak || 0;

        var messages = [
            { title: '\uD83D\uDD25 Ton streak est en danger\u00A0!', body: streak > 0 ? ('Tu as ' + streak + ' jour' + (streak > 1 ? 's' : '') + ' de suite. Ne perds pas ta s\u00E9rie\u00A0!') : '2 minutes suffisent pour commencer\u00A0!' },
            { title: '\uD83C\uDFAF Session du soir', body: 'Le cerveau retient mieux le soir. 5 min et c\u2019est fait\u00A0!' },
            { title: '\uD83D\uDCAA Juste 5 cartes', body: 'M\u00EAme une mini-session compte. Lance-toi\u00A0!' }
        ];

        var msg = streak > 1 ? messages[0] : messages[Math.floor(Math.random() * messages.length)];

        // Utiliser le Service Worker si possible
        if (navigator.serviceWorker && navigator.serviceWorker.controller) {
            navigator.serviceWorker.ready.then(function(reg) {
                reg.showNotification(msg.title, {
                    body: msg.body,
                    icon: '/icons/icon-192.png',
                    badge: '/icons/icon-192.png',
                    tag: 'studflow-reminder',
                    renotify: true,
                    data: { url: '/#dashboard' }
                });
            });
        } else {
            // Fallback : notification simple
            new Notification(msg.title, {
                body: msg.body,
                icon: '/icons/icon-192.png',
                tag: 'studflow-reminder'
            });
        }
    }

    // ==================== INIT ====================
    function init() {
        if (!isSupported()) return;

        // Demander la permission discretement apres 3 sessions
        var gaugeData = window.StudFlow.storage.loadData('studflow_daily_gauge', { date: null, count: 0 });
        var gamStats = window.StudFlow.gamification ? window.StudFlow.gamification.getStats() : {};
        var totalActions = gamStats.totalActions || 0;

        if (totalActions >= 10 && !isEnabled() && Notification.permission !== 'denied') {
            // Attendre 5s apres le chargement pour ne pas etre intrusif
            setTimeout(function() {
                showPermissionPrompt();
            }, 5000);
        }

        // Si deja autorise, programmer le rappel
        if (isEnabled()) {
            scheduleReminder();
        }
    }

    function showPermissionPrompt() {
        // Ne pas montrer si deja demande recemment
        var lastAsked = localStorage.getItem(STORAGE_KEY + '_asked');
        var todayKey = new Date().toISOString().slice(0, 10);
        if (lastAsked === todayKey) return;

        var banner = document.createElement('div');
        banner.className = 'push-permission-banner';
        banner.innerHTML = '<div class="push-permission-content">'
            + '<span class="push-permission-icon">\uD83D\uDD14</span>'
            + '<div class="push-permission-text">'
            + '<strong>Recevoir un rappel le soir\u00A0?</strong>'
            + '<p>Pour ne pas oublier ta session quotidienne</p>'
            + '</div>'
            + '<div class="push-permission-actions">'
            + '<button class="push-permission-yes" id="push-yes">Activer</button>'
            + '<button class="push-permission-no" id="push-no">Plus tard</button>'
            + '</div>'
            + '</div>';

        document.body.appendChild(banner);
        localStorage.setItem(STORAGE_KEY + '_asked', todayKey);

        document.getElementById('push-yes').addEventListener('click', function() {
            askPermission().then(function(granted) {
                banner.remove();
                if (granted) {
                    scheduleReminder();
                    if (window.StudFlow.gamification) {
                        window.StudFlow.gamification.showToast('Rappels activ\u00E9s\u00A0!', 'xp', '\uD83D\uDD14');
                    }
                }
            });
        });

        document.getElementById('push-no').addEventListener('click', function() {
            banner.remove();
        });

        // Auto-dismiss apres 10s
        setTimeout(function() { if (banner.parentNode) banner.remove(); }, 10000);
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.pushReminder = {
        init: init,
        askPermission: askPermission,
        isEnabled: isEnabled,
        scheduleReminder: scheduleReminder
    };

    // Auto-init apres chargement
    if (document.readyState === 'complete') {
        setTimeout(init, 3000);
    } else {
        window.addEventListener('load', function() { setTimeout(init, 3000); });
    }
})();
