// pwa.js — Service Worker registration + Install prompt + Offline detection
(function() {
    'use strict';

    // Register service worker
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            navigator.serviceWorker.register('/service-worker.js').then(function(reg) {
                console.log('SW registered, scope:', reg.scope);
                reg.addEventListener('updatefound', function() {
                    var newWorker = reg.installing;
                    if (newWorker) {
                        newWorker.addEventListener('statechange', function() {
                            if (newWorker.state === 'activated' && navigator.serviceWorker.controller) {
                                console.log('New version available');
                                if (window.StudFlow && window.StudFlow.gamification) {
                                    window.StudFlow.gamification.showToast(
                                        'Nouvelle version dispo ! Relance l\'app pour en profiter.', 'xp'
                                    );
                                }
                            }
                        });
                    }
                });
            }).catch(function(err) {
                console.log('SW registration failed:', err);
            });
        });
    }

    // Install prompt
    var deferredPrompt = null;
    var installPrompt = document.getElementById('pwa-install-prompt');
    var installBtn = document.getElementById('pwa-install-btn');
    var installClose = document.getElementById('pwa-install-close');

    window.addEventListener('beforeinstallprompt', function(e) {
        e.preventDefault();
        deferredPrompt = e;
        setTimeout(function() {
            if (installPrompt) installPrompt.style.display = 'flex';
        }, 3000);
    });

    if (installBtn) {
        installBtn.addEventListener('click', function() {
            if (!deferredPrompt) return;
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then(function(choice) {
                if (choice.outcome === 'accepted') {
                    console.log('PWA installed');
                }
                deferredPrompt = null;
                if (installPrompt) installPrompt.style.display = 'none';
            });
        });
    }

    if (installClose) {
        installClose.addEventListener('click', function() {
            if (installPrompt) installPrompt.style.display = 'none';
            deferredPrompt = null;
        });
    }

    window.addEventListener('appinstalled', function() {
        if (installPrompt) installPrompt.style.display = 'none';
        deferredPrompt = null;
    });

    // Offline / online detection
    var offlineBanner = document.getElementById('pwa-offline-banner');

    function updateOnlineStatus() {
        if (!offlineBanner) return;
        offlineBanner.style.display = navigator.onLine ? 'none' : 'block';
    }

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    updateOnlineStatus();
})();
