// calmMode.js — Mode calme/accessible pour élèves en difficulté (dys, TSA)
// Réduit animations, sons, confetti quand le profil est en difficulté
(function() {
    'use strict';

    var STORAGE_KEY = 'studflow_calm_mode';
    var _active = false;

    // ==================== DÉTECTION AUTOMATIQUE ====================
    function shouldActivate() {
        // Actif si le profil global est en difficulté
        if (window.StudFlow.studentProfile) {
            var level = window.StudFlow.studentProfile.getGlobalLevel();
            if (level === 'difficulte') return true;
        }
        // Ou si activé manuellement
        return localStorage.getItem(STORAGE_KEY) === 'true';
    }

    function isActive() {
        return _active;
    }

    function setManual(bool) {
        localStorage.setItem(STORAGE_KEY, bool ? 'true' : 'false');
        _active = bool;
        applyMode();
    }

    // ==================== APPLIQUER LE MODE ====================
    function applyMode() {
        _active = shouldActivate();

        if (_active) {
            document.body.classList.add('calm-mode');
            // Réduire les sons
            if (window.StudFlow.sounds) {
                // Ne pas désactiver complètement, juste les rendre optionnels
            }
        } else {
            document.body.classList.remove('calm-mode');
        }
    }

    // ==================== WRAPPER CONFETTI ====================
    // Override spawnConfetti pour la réduire en mode calme
    function patchConfetti() {
        if (!window.StudFlow.gamification) return;
        var originalConfetti = window.StudFlow.gamification.spawnConfetti;
        window.StudFlow.gamification.spawnConfetti = function() {
            if (_active) {
                // Version calme : juste 5 confettis lents au lieu de 50
                var container = document.querySelector('.confetti-container');
                if (!container) {
                    container = document.createElement('div');
                    container.className = 'confetti-container';
                    document.body.appendChild(container);
                }
                for (var i = 0; i < 5; i++) {
                    var c = document.createElement('div');
                    c.className = 'confetti confetti-calm';
                    c.style.left = (20 + Math.random() * 60) + '%';
                    c.style.background = '#60a5fa';
                    c.style.animationDuration = '3s';
                    c.style.opacity = '0.5';
                    container.appendChild(c);
                }
                setTimeout(function() { if (container.parentNode) container.remove(); }, 3500);
            } else {
                originalConfetti();
            }
        };
    }

    // ==================== WRAPPER TOAST ====================
    // Rendre les messages plus doux en mode calme
    function patchToast() {
        if (!window.StudFlow.gamification) return;
        var originalToast = window.StudFlow.gamification.showToast;
        window.StudFlow.gamification.showToast = function(message, type, icon) {
            if (_active) {
                // Remplacer les messages agressifs par des messages doux
                message = message
                    .replace(/Tu g\u00e8res/, 'Tu avances bien')
                    .replace(/Tu es en feu/, 'Tu fais du bon travail')
                    .replace(/Ton cerveau carbure/, 'Tu apprends bien');
            }
            originalToast(message, type, icon);
        };
    }

    // ==================== NOTIFICATION DISCRÈTE ====================
    function showCalmNotice() {
        if (!_active) return;
        // Ne montrer qu'une fois par session
        if (sessionStorage.getItem('calm_notice_shown')) return;
        sessionStorage.setItem('calm_notice_shown', '1');

        if (window.StudFlow.gamification) {
            setTimeout(function() {
                window.StudFlow.gamification.showToast(
                    'Mode adapt\u00e9 activ\u00e9 pour t\u2019aider',
                    'xp', '\uD83D\uDCA1'
                );
            }, 2000);
        }
    }

    // ==================== INIT ====================
    function init() {
        applyMode();
        patchConfetti();
        patchToast();
        showCalmNotice();
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.calmMode = {
        isActive: isActive,
        setManual: setManual,
        init: init,
        applyMode: applyMode
    };

    // Auto-init après chargement des autres modules
    if (document.readyState === 'complete') {
        setTimeout(init, 1500);
    } else {
        window.addEventListener('load', function() { setTimeout(init, 1500); });
    }
})();
