// pwa.js — Service Worker registration + Install prompt + iOS guide + Offline detection
(function() {
    'use strict';

    // ==================== SERVICE WORKER ====================
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

    // ==================== DETECT PLATFORM ====================
    var isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent) && !window.MSStream;
    var isStandalone = window.matchMedia('(display-mode: standalone)').matches
        || window.navigator.standalone === true;
    var installDismissed = sessionStorage.getItem('pwa-install-dismissed');

    // ==================== INSTALL PROMPT (ANDROID / CHROME) ====================
    var deferredPrompt = null;
    var installPrompt = document.getElementById('pwa-install-prompt');
    var installBtn = document.getElementById('pwa-install-btn');
    var installClose = document.getElementById('pwa-install-close');

    window.addEventListener('beforeinstallprompt', function(e) {
        e.preventDefault();
        deferredPrompt = e;
        if (isStandalone || installDismissed) return;
        setTimeout(function() {
            if (installPrompt) {
                installPrompt.style.display = 'flex';
                installPrompt.classList.remove('pwa-ios-guide');
            }
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
            sessionStorage.setItem('pwa-install-dismissed', '1');
        });
    }

    window.addEventListener('appinstalled', function() {
        if (installPrompt) installPrompt.style.display = 'none';
        deferredPrompt = null;
    });

    // ==================== iOS INSTALL GUIDE ====================
    function showIOSGuide() {
        if (isStandalone || installDismissed || !installPrompt) return;

        // Wait a bit, then show iOS-specific guide
        setTimeout(function() {
            var textEl = installPrompt.querySelector('.pwa-install-text');
            var btnEl = installPrompt.querySelector('.pwa-install-btn');
            if (textEl) {
                textEl.innerHTML = '<strong>Installe StudFlow</strong><br>'
                    + '<span class="pwa-ios-steps">'
                    + 'Appuie sur <span class="pwa-ios-icon">⬆️</span> Partager '
                    + 'puis <strong>"Sur l\'ecran d\'accueil"</strong>'
                    + '</span>';
            }
            if (btnEl) btnEl.style.display = 'none';
            installPrompt.classList.add('pwa-ios-guide');
            installPrompt.style.display = 'flex';
        }, 5000);
    }

    // Show iOS guide if on iOS Safari and not already installed
    if (isIOS && !isStandalone) {
        // Only show if no beforeinstallprompt fires (iOS never fires it)
        setTimeout(function() {
            if (!deferredPrompt) showIOSGuide();
        }, 6000);
    }

    // ==================== OFFLINE / ONLINE ====================
    var offlineBanner = document.getElementById('pwa-offline-banner');

    function updateOnlineStatus() {
        if (!offlineBanner) return;
        offlineBanner.style.display = navigator.onLine ? 'none' : 'block';
    }

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    updateOnlineStatus();
})();
