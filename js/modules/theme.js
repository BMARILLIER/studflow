// theme.js — Light/Dark theme toggle
// Default: dark mode (StudFlow identity). User can toggle to light.
(function() {
    'use strict';

    var STORAGE_KEY = 'studflow_theme';
    var DARK_BG = '#0b1020';
    var LIGHT_BG = '#f5f7fa';

    function applyTheme(theme) {
        if (theme === 'light') {
            document.body.classList.add('theme-light');
        } else {
            document.body.classList.remove('theme-light');
        }
        // Update meta theme-color to match actual --bg
        var meta = document.querySelector('meta[name="theme-color"]');
        if (meta) {
            meta.setAttribute('content', theme === 'light' ? LIGHT_BG : DARK_BG);
        }
        // Update toggle button icons
        updateToggleButtons(theme);
    }

    function updateToggleButtons(theme) {
        var headerBtn = document.getElementById('theme-toggle-header');
        if (headerBtn) {
            headerBtn.textContent = theme === 'light' ? '🌙' : '☀️';
            headerBtn.setAttribute('aria-label', theme === 'light' ? 'Passer en mode sombre' : 'Passer en mode clair');
        }
        var settingsBtn = document.getElementById('theme-toggle-settings');
        if (settingsBtn) {
            settingsBtn.textContent = theme === 'light' ? '🌙 Mode sombre' : '☀️ Mode clair';
        }
    }

    function get() {
        var saved = localStorage.getItem(STORAGE_KEY);
        if (saved === 'light' || saved === 'dark') return saved;
        // Default to dark — StudFlow's identity is dark mode
        return 'dark';
    }

    function set(theme) {
        if (theme !== 'light' && theme !== 'dark') return;
        localStorage.setItem(STORAGE_KEY, theme);
        applyTheme(theme);
    }

    function toggle() {
        var current = get();
        set(current === 'light' ? 'dark' : 'light');
    }

    function init() {
        var theme = get();
        applyTheme(theme);
        // Mode nuit automatique apres 21h
        checkNightMode();
    }

    function checkNightMode() {
        var hour = new Date().getHours();
        var userSet = localStorage.getItem(STORAGE_KEY);
        // Seulement si l'utilisateur n'a pas choisi manuellement
        if (userSet) return;
        if (hour >= 21 || hour < 7) {
            // Apres 21h ou avant 7h : mode sombre (deja par defaut) + filtre bleu
            document.body.classList.add('night-mode');
        } else {
            document.body.classList.remove('night-mode');
        }
    }

    // Apply immediately to avoid flash
    init();

    window.StudFlow = window.StudFlow || {};
    window.StudFlow.theme = {
        toggle: toggle,
        set: set,
        get: get,
        init: init
    };
})();
