// helpBubble.js — Bouton d'aide flottant + menu contextuel
(function() {
    'use strict';

    // ==================== CONFIG ====================
    var HELP_OPTIONS = [
        {
            id: 'lost',
            icon: '🧭',
            label: 'Je suis perdu',
            message: 'Pas de panique. On reprend simplement. Lance une session courte et laisse-toi guider.',
            cta: 'Commencer une session',
            action: 'dailySession.show'
        },
        {
            id: 'start',
            icon: '🚀',
            label: 'Comment commencer',
            message: 'Fais le diagnostic (2 min) pour qu\'on adapte tout a ton profil. Ensuite, lance ta premiere session.',
            cta: 'Faire le diagnostic',
            action: 'screen:diagnostic'
        },
        {
            id: 'stress',
            icon: '💆',
            label: 'Je stresse',
            message: 'C\'est normal. Respire un coup, on a un module fait pour ca. 2 minutes et tu te sens deja mieux.',
            cta: 'Exercice de respiration',
            action: 'screen:stress'
        },
        {
            id: 'resume',
            icon: '▶️',
            label: 'Reprendre une session',
            message: 'Tu peux reprendre la ou tu en etais. Tes flashcards et ta progression sont sauvegardees.',
            cta: 'Reprendre',
            action: 'screen:flashcard'
        }
    ];

    var IDLE_DELAY = 90000; // 90s d'inactivité
    var _idleTimer = null;
    var _isOpen = false;
    var _selectedOption = null;
    var _bubbleEl = null;
    var _panelEl = null;
    var _nudgeEl = null;

    // ==================== RENDER ====================
    function inject() {
        // Don't inject twice
        if (document.getElementById('help-bubble')) return;

        // Floating button
        var btn = document.createElement('button');
        btn.id = 'help-bubble';
        btn.className = 'help-bubble';
        btn.setAttribute('aria-label', 'Aide');
        btn.innerHTML = '<span class="help-bubble-icon">?</span>';
        btn.addEventListener('click', toggle);
        document.body.appendChild(btn);
        _bubbleEl = btn;

        // Panel
        var panel = document.createElement('div');
        panel.id = 'help-bubble-panel';
        panel.className = 'help-bubble-panel';
        panel.setAttribute('role', 'dialog');
        panel.setAttribute('aria-label', 'Menu d\'aide');
        panel.innerHTML = renderMenu();
        document.body.appendChild(panel);
        _panelEl = panel;

        // Nudge tooltip
        var nudge = document.createElement('div');
        nudge.id = 'help-bubble-nudge';
        nudge.className = 'help-bubble-nudge';
        nudge.textContent = 'Besoin d\'aide ?';
        nudge.addEventListener('click', function() {
            hideNudge();
            open();
        });
        document.body.appendChild(nudge);
        _nudgeEl = nudge;

        // Delegate clicks inside panel
        panel.addEventListener('click', handlePanelClick);

        // Close on outside click
        document.addEventListener('click', function(e) {
            if (_isOpen && !panel.contains(e.target) && e.target !== btn && !btn.contains(e.target)) {
                close();
            }
        });

        // Close on Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && _isOpen) close();
        });

        // Start idle tracking
        resetIdleTimer();
        ['click', 'keydown', 'scroll', 'touchstart'].forEach(function(evt) {
            document.addEventListener(evt, resetIdleTimer, { passive: true });
        });
    }

    function renderMenu() {
        var html = '<div class="help-panel-header">'
            + '<span class="help-panel-title">Comment on peut t\'aider ?</span>'
            + '<button class="help-panel-close" data-help-action="close" aria-label="Fermer">&times;</button>'
            + '</div>'
            + '<div class="help-panel-options">';

        for (var i = 0; i < HELP_OPTIONS.length; i++) {
            var opt = HELP_OPTIONS[i];
            html += '<button class="help-option" data-help-option="' + opt.id + '">'
                + '<span class="help-option-icon">' + opt.icon + '</span>'
                + '<span class="help-option-label">' + opt.label + '</span>'
                + '</button>';
        }

        html += '</div>';
        return html;
    }

    function renderDetail(opt) {
        return '<div class="help-panel-header">'
            + '<button class="help-panel-back" data-help-action="back" aria-label="Retour">&#8592;</button>'
            + '<span class="help-panel-title">' + opt.icon + ' ' + opt.label + '</span>'
            + '<button class="help-panel-close" data-help-action="close" aria-label="Fermer">&times;</button>'
            + '</div>'
            + '<div class="help-panel-detail">'
            + '<p class="help-detail-msg">' + opt.message + '</p>'
            + '<button class="help-detail-cta" data-help-action="go" data-help-go="' + opt.action + '">' + opt.cta + '</button>'
            + '</div>';
    }

    // ==================== INTERACTIONS ====================
    function handlePanelClick(e) {
        var target = e.target.closest('[data-help-action]');
        if (!target) {
            // Check option buttons
            var optBtn = e.target.closest('[data-help-option]');
            if (optBtn) {
                var optId = optBtn.getAttribute('data-help-option');
                showDetail(optId);
            }
            return;
        }

        var action = target.getAttribute('data-help-action');
        if (action === 'close') {
            close();
        } else if (action === 'back') {
            showMenu();
        } else if (action === 'go') {
            var goAction = target.getAttribute('data-help-go');
            close();
            triggerAction(goAction);
        }
    }

    function triggerAction(action) {
        if (!action) return;

        // Handle "screen:xxx" pattern
        if (action.startsWith('screen:')) {
            var screenId = action.split(':')[1];
            if (window.StudFlow && window.StudFlow.app) {
                window.StudFlow.app.showScreen(screenId);
            }
            return;
        }

        // Handle "module.method" pattern
        var parts = action.split('.');
        if (parts.length >= 2) {
            var obj = window.StudFlow;
            for (var i = 0; i < parts.length - 1; i++) {
                obj = obj && obj[parts[i]];
            }
            var method = parts[parts.length - 1];
            if (obj && typeof obj[method] === 'function') {
                obj[method]();
            }
        }
    }

    function showDetail(optId) {
        for (var i = 0; i < HELP_OPTIONS.length; i++) {
            if (HELP_OPTIONS[i].id === optId) {
                _selectedOption = HELP_OPTIONS[i];
                _panelEl.innerHTML = renderDetail(_selectedOption);
                return;
            }
        }
    }

    function showMenu() {
        _selectedOption = null;
        _panelEl.innerHTML = renderMenu();
    }

    function toggle() {
        if (_isOpen) close(); else open();
    }

    function open() {
        _isOpen = true;
        showMenu();
        _panelEl.classList.add('open');
        _bubbleEl.classList.add('active');
        hideNudge();
    }

    function close() {
        _isOpen = false;
        _panelEl.classList.remove('open');
        _bubbleEl.classList.remove('active');
    }

    // ==================== IDLE NUDGE ====================
    function resetIdleTimer() {
        hideNudge();
        clearTimeout(_idleTimer);
        _idleTimer = setTimeout(showNudge, IDLE_DELAY);
    }

    function showNudge() {
        // Only show if panel is closed and not on home/diagnostic/onboarding
        if (_isOpen) return;
        var screen = window.StudFlow && window.StudFlow.app && window.StudFlow.app.getState
            ? window.StudFlow.app.getState().currentScreen : '';
        if (screen === 'home' || screen === 'diagnostic' || screen === 'onboarding') return;
        if (_nudgeEl) _nudgeEl.classList.add('visible');
    }

    function hideNudge() {
        if (_nudgeEl) _nudgeEl.classList.remove('visible');
    }

    // ==================== VISIBILITY ====================
    // Hide on home/diagnostic/onboarding screens
    function updateVisibility() {
        if (!_bubbleEl) return;
        var screen = window.StudFlow && window.StudFlow.app && window.StudFlow.app.getState
            ? window.StudFlow.app.getState().currentScreen : 'home';
        var hide = (screen === 'home' || screen === 'diagnostic' || screen === 'onboarding');
        _bubbleEl.style.display = hide ? 'none' : '';
        if (hide) {
            close();
            hideNudge();
        }
    }

    // Observe screen changes via MutationObserver on .screen.active
    function watchScreenChanges() {
        var observer = new MutationObserver(updateVisibility);
        document.querySelectorAll('.screen').forEach(function(el) {
            observer.observe(el, { attributes: true, attributeFilter: ['class'] });
        });
    }

    // ==================== INIT ====================
    function init() {
        inject();
        updateVisibility();
        watchScreenChanges();
    }

    // Boot
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Expose
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.helpBubble = { open: open, close: close, toggle: toggle };
})();
