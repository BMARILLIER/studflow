// breathing.js — Immersive guided breathing with halo animation
(function() {
    var _running = false;
    var _timer = null;
    var _currentMode = 'calm';
    var _totalSeconds = 0;
    var _cyclePhase = 0;
    var _phaseElapsed = 0;
    var _targetDuration = 60; // seconds

    // ==================== MODES ====================
    var MODES = {
        calm: {
            name: 'Respiration calme',
            desc: 'Simple et apaisante. Pour se recentrer.',
            phases: [
                { label: 'Inspire doucement\u2026', duration: 4, anim: 'expand' },
                { label: 'Expire lentement\u2026', duration: 6, anim: 'contract' }
            ]
        },
        '478': {
            name: 'Relaxation 4-7-8',
            desc: 'Calme profond. Ideal avant de dormir.',
            phases: [
                { label: 'Inspire doucement\u2026', duration: 4, anim: 'expand' },
                { label: 'Garde l\'air\u2026', duration: 7, anim: 'hold' },
                { label: 'Expire lentement\u2026', duration: 8, anim: 'contract' }
            ]
        },
        box: {
            name: 'Respiration carree',
            desc: 'Equilibre et focus. Utilisee par les pilotes.',
            phases: [
                { label: 'Inspire\u2026', duration: 4, anim: 'expand' },
                { label: 'Garde\u2026', duration: 4, anim: 'hold' },
                { label: 'Expire\u2026', duration: 4, anim: 'contract' },
                { label: 'Garde\u2026', duration: 4, anim: 'hold' }
            ]
        },
        coherence: {
            name: 'Coherence cardiaque',
            desc: '5 min pour equilibrer ton systeme nerveux.',
            phases: [
                { label: 'Inspire\u2026', duration: 5, anim: 'expand' },
                { label: 'Expire\u2026', duration: 5, anim: 'contract' }
            ]
        }
    };

    // ==================== RENDER ====================
    function start() {
        window.StudFlow.app.showScreen('breathing');
        render();
    }

    function render() {
        var container = document.querySelector('.breathing-screen');
        if (!container) return;

        var modesHTML = Object.keys(MODES).map(function(key) {
            var m = MODES[key];
            var cls = key === _currentMode ? 'br-mode-chip selected' : 'br-mode-chip';
            return '<button class="' + cls + '" data-action="breathing.selectMode" data-param="' + key + '">' + m.name + '</button>';
        }).join('');

        // Particles HTML
        var particles = '';
        for (var p = 0; p < 6; p++) {
            particles += '<div class="br-particle br-p' + p + '"></div>';
        }

        container.innerHTML = ''
            + '<p class="br-intro">Rel\u00E2che tes \u00E9paules. Suis le mouvement de la forme.</p>'
            + '<div class="br-modes">' + modesHTML + '</div>'
            + '<p class="br-desc">' + MODES[_currentMode].desc + '</p>'
            + '<div class="br-halo-container">'
            + particles
            + '<div class="br-halo" id="br-halo">'
            + '<div class="br-halo-ring"></div>'
            + '<div class="br-halo-core">'
            + '<span class="br-phase-text" id="br-phase">Pret ?</span>'
            + '</div>'
            + '</div>'
            + '</div>'
            + '<div class="br-duration">'
            + '<button class="br-dur-chip' + (_targetDuration === 30 ? ' selected' : '') + '" data-action="breathing.setDuration" data-param="30">30s</button>'
            + '<button class="br-dur-chip' + (_targetDuration === 60 ? ' selected' : '') + '" data-action="breathing.setDuration" data-param="60">1 min</button>'
            + '<button class="br-dur-chip' + (_targetDuration === 180 ? ' selected' : '') + '" data-action="breathing.setDuration" data-param="180">3 min</button>'
            + '</div>'
            + '<div class="br-timer" id="br-timer">0:00</div>'
            + '<div class="br-controls">'
            + '<button class="br-btn-start" id="br-start" data-action="breathing:toggle">Commencer</button>'
            + '<button class="br-btn-stop" data-action="breathing:stop">Terminer</button>'
            + '</div>';
    }

    function selectMode(key) {
        if (_running) stopBreathing();
        _currentMode = key;
        render();
    }

    function setDuration(secs) {
        _targetDuration = parseInt(secs, 10) || 60;
        render();
    }

    // ==================== BREATHING ENGINE ====================
    function toggle() {
        if (_running) pauseBreathing();
        else startBreathing();
    }

    function startBreathing() {
        _running = true;
        _cyclePhase = 0;
        _phaseElapsed = 0;
        _totalSeconds = 0;

        var btn = document.getElementById('br-start');
        if (btn) btn.textContent = 'Pause';

        var halo = document.getElementById('br-halo');
        if (halo) halo.classList.add('active');

        tick(); // Immediate first tick
        _timer = setInterval(tick, 1000);
    }

    function tick() {
        var mode = MODES[_currentMode];
        var phases = mode.phases;
        var phase = phases[_cyclePhase];

        // Update phase text
        var phaseEl = document.getElementById('br-phase');
        if (phaseEl) phaseEl.textContent = phase.label;

        // Update halo animation class
        var halo = document.getElementById('br-halo');
        if (halo) {
            halo.classList.remove('expand', 'hold', 'contract');
            halo.classList.add(phase.anim);
            // Set animation duration to match phase
            halo.style.setProperty('--phase-duration', phase.duration + 's');
        }

        // Update timer
        _totalSeconds++;
        var mins = Math.floor(_totalSeconds / 60);
        var secs = _totalSeconds % 60;
        var timerEl = document.getElementById('br-timer');
        if (timerEl) timerEl.textContent = mins + ':' + (secs < 10 ? '0' : '') + secs;

        // Advance phase
        _phaseElapsed++;
        if (_phaseElapsed >= phase.duration) {
            _phaseElapsed = 0;
            _cyclePhase = (_cyclePhase + 1) % phases.length;
        }

        // Auto-stop at target duration
        if (_targetDuration > 0 && _totalSeconds >= _targetDuration) {
            finishBreathing();
        }
    }

    function pauseBreathing() {
        _running = false;
        clearInterval(_timer);
        var btn = document.getElementById('br-start');
        if (btn) btn.textContent = 'Reprendre';
        var halo = document.getElementById('br-halo');
        if (halo) halo.classList.remove('expand', 'hold', 'contract');
    }

    function stopBreathing() {
        if (_running && _totalSeconds > 10 && window.StudFlow.gamification) {
            window.StudFlow.gamification.addXP('breathing_session');
            window.StudFlow.gamification.showToast('C\'est bien. Tu peux reprendre.', 'xp', '\uD83D\uDE0C');
        }
        _running = false;
        clearInterval(_timer);
        _timer = null;
        _totalSeconds = 0;
        _cyclePhase = 0;
        _phaseElapsed = 0;
    }

    function finishBreathing() {
        _running = false;
        clearInterval(_timer);
        _timer = null;

        // Show end message
        var phaseEl = document.getElementById('br-phase');
        if (phaseEl) phaseEl.textContent = 'C\'est bien. Tu peux reprendre.';

        var halo = document.getElementById('br-halo');
        if (halo) { halo.classList.remove('expand', 'hold', 'contract'); }

        var btn = document.getElementById('br-start');
        if (btn) btn.textContent = 'Recommencer';

        if (_totalSeconds > 10 && window.StudFlow.gamification) {
            window.StudFlow.gamification.addXP('breathing_session');
            setTimeout(function() {
                window.StudFlow.gamification.showToast('Parfait. On reprend doucement.', 'xp', '\uD83D\uDE0C');
            }, 800);
        }

        _totalSeconds = 0;
        _cyclePhase = 0;
        _phaseElapsed = 0;
    }

    function stop() {
        stopBreathing();
        window.StudFlow.app.showScreen('dashboard');
    }

    // ==================== SMART SUGGEST ====================
    // Called after difficult sessions or when stress is detected
    function suggest(reason) {
        if (!window.StudFlow.gamification) return;
        var msg = reason === 'post_session'
            ? 'Session intense. 30 secondes de respiration ?'
            : 'On prend 30 secondes pour se recentrer.';
        window.StudFlow.gamification.showToast(msg, 'xp', '\uD83D\uDCA8');
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.breathing = {
        start: start,
        toggle: toggle,
        stop: stop,
        selectMode: selectMode,
        setDuration: setDuration,
        suggest: suggest
    };
})();
