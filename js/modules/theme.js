// theme.js — Light/Dark theme toggle
(function() {
    'use strict';

    var STORAGE_KEY = 'studflow_theme';

    function getSystemPreference() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            return 'light';
        }
        return 'dark';
    }

    function applyTheme(theme) {
        if (theme === 'light') {
            document.body.classList.add('theme-light');
        } else {
            document.body.classList.remove('theme-light');
        }
        // Update meta theme-color
        var meta = document.querySelector('meta[name="theme-color"]');
        if (meta) {
            meta.setAttribute('content', theme === 'light' ? '#f5f5f7' : '#1a1a2e');
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
        return getSystemPreference();
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

        // Listen for system preference changes (only if no saved preference)
        if (window.matchMedia) {
            window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', function(e) {
                var saved = localStorage.getItem(STORAGE_KEY);
                if (!saved) {
                    applyTheme(e.matches ? 'light' : 'dark');
                }
            });
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
