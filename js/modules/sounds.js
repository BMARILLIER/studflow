// sounds.js — Web Audio API sound effects & haptic feedback for dopamine loops
(function() {

    var audioCtx = null;
    var initialized = false;

    // ==================== AUDIO CONTEXT ====================

    function getAudioContext() {
        if (audioCtx) return audioCtx;
        try {
            var AC = window.AudioContext || window.webkitAudioContext;
            if (AC) {
                audioCtx = new AC();
            }
        } catch (e) {
            console.warn('[Sounds] AudioContext not available:', e);
        }
        return audioCtx;
    }

    // Resume context on first user interaction (browser autoplay policy)
    function ensureContext() {
        var ctx = getAudioContext();
        if (ctx && ctx.state === 'suspended') {
            ctx.resume();
        }
        return ctx;
    }

    function initContextOnInteraction() {
        function handler() {
            ensureContext();
            document.removeEventListener('click', handler, true);
            document.removeEventListener('touchstart', handler, true);
            document.removeEventListener('keydown', handler, true);
        }
        document.addEventListener('click', handler, true);
        document.addEventListener('touchstart', handler, true);
        document.addEventListener('keydown', handler, true);
    }

    // ==================== SETTINGS ====================

    function isEnabled() {
        var val = localStorage.getItem('studflow_sounds_enabled');
        return val === null ? true : val === 'true';
    }

    function setEnabled(bool) {
        localStorage.setItem('studflow_sounds_enabled', bool ? 'true' : 'false');
    }

    function isHapticEnabled() {
        var val = localStorage.getItem('studflow_haptic_enabled');
        return val === null ? true : val === 'true';
    }

    function setHapticEnabled(bool) {
        localStorage.setItem('studflow_haptic_enabled', bool ? 'true' : 'false');
    }

    // ==================== CORE TONE GENERATOR ====================

    function playTone(frequency, duration, type, gain) {
        if (!isEnabled()) return;
        var ctx = ensureContext();
        if (!ctx) return;
        var osc = ctx.createOscillator();
        var vol = ctx.createGain();
        osc.type = type || 'sine';
        osc.frequency.value = frequency;
        vol.gain.value = gain || 0.3;
        vol.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
        osc.connect(vol);
        vol.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + duration);
    }

    function playToneAt(frequency, duration, type, gain, delay) {
        if (!isEnabled()) return;
        var ctx = ensureContext();
        if (!ctx) return;
        var osc = ctx.createOscillator();
        var vol = ctx.createGain();
        osc.type = type || 'sine';
        osc.frequency.value = frequency;
        var startTime = ctx.currentTime + (delay || 0);
        vol.gain.setValueAtTime(gain || 0.3, startTime);
        vol.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
        osc.connect(vol);
        vol.connect(ctx.destination);
        osc.start(startTime);
        osc.stop(startTime + duration);
    }

    function playSweep(startFreq, endFreq, duration, type, gain) {
        if (!isEnabled()) return;
        var ctx = ensureContext();
        if (!ctx) return;
        var osc = ctx.createOscillator();
        var vol = ctx.createGain();
        osc.type = type || 'sine';
        osc.frequency.setValueAtTime(startFreq, ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(endFreq, ctx.currentTime + duration);
        vol.gain.value = gain || 0.3;
        vol.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
        osc.connect(vol);
        vol.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + duration);
    }

    // ==================== SOUND EFFECTS ====================

    /** Short happy "ding" — two ascending tones (200ms) */
    function correct() {
        playToneAt(523, 0.12, 'sine', 0.3, 0);      // C5
        playToneAt(659, 0.12, 'sine', 0.3, 0.08);    // E5
        haptic('success');
    }

    /** Short "buzz" — descending low tone (150ms) */
    function wrong() {
        playSweep(300, 200, 0.15, 'sawtooth', 0.2);
        haptic('error');
    }

    /** Excited ascending arpeggio — 3 quick notes (300ms) */
    function combo() {
        playToneAt(523, 0.1, 'sine', 0.25, 0);       // C5
        playToneAt(659, 0.1, 'sine', 0.25, 0.1);     // E5
        playToneAt(784, 0.15, 'sine', 0.3, 0.2);     // G5
        haptic('success');
    }

    /** Triumphant fanfare — ascending chord (500ms) */
    function levelUp() {
        if (!isEnabled()) return;
        var ctx = ensureContext();
        if (!ctx) return;
        var freqs = [523, 659, 784]; // C5 E5 G5 chord
        for (var i = 0; i < freqs.length; i++) {
            var osc = ctx.createOscillator();
            var vol = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.value = freqs[i];
            vol.gain.setValueAtTime(0.2, ctx.currentTime);
            vol.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
            osc.connect(vol);
            vol.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.5);
        }
        // Add a higher octave stab after 0.25s
        playToneAt(1047, 0.3, 'sine', 0.2, 0.25); // C6
        haptic('heavy');
    }

    /** Warm "whoosh" — sweep up (200ms) */
    function streakAlive() {
        playSweep(300, 600, 0.2, 'sine', 0.2);
        haptic('light');
    }

    /** Subtle click for UI interactions (50ms) */
    function tick() {
        playTone(800, 0.05, 'sine', 0.1);
        haptic('light');
    }

    /** Urgent tick for timer countdown — last 10 seconds (80ms) */
    function countdown() {
        playTone(1000, 0.08, 'square', 0.15);
        haptic('medium');
    }

    // ==================== HAPTIC FEEDBACK ====================

    var HAPTIC_PATTERNS = {
        light: [10],
        medium: [25],
        heavy: [50],
        success: [10, 50, 20],
        error: [50, 30, 50]
    };

    function haptic(type) {
        if (!isHapticEnabled()) return;
        if (!navigator.vibrate) return;
        var pattern = HAPTIC_PATTERNS[type] || HAPTIC_PATTERNS.light;
        try {
            navigator.vibrate(pattern);
        } catch (e) {
            // Vibration not supported or not allowed
        }
    }

    // ==================== EVENT BUS INTEGRATION ====================

    function init() {
        if (initialized) return;
        initialized = true;

        initContextOnInteraction();

        if (!window.StudFlow || !window.StudFlow.events) return;

        var events = window.StudFlow.events;

        // XP gained — play correct ding
        events.on('xp:gained', function() { correct(); });

        // Level up — triumphant fanfare
        events.on('level:up', function() { levelUp(); });

        // Streak updated — warm whoosh
        events.on('streak:updated', function() { streakAlive(); });

        // Badge unlocked — combo arpeggio
        events.on('badge:unlocked', function() { combo(); });

        // Quiz completed — combo for good scores
        events.on('quiz:completed', function(data) {
            if (data && data.percent >= 80) {
                combo();
            }
        });

        // Flashcard completed — combo for good scores
        events.on('flashcard:completed', function(data) {
            if (data && data.percent >= 80) {
                combo();
            }
        });

        // Focus completed
        events.on('focus:completed', function() { combo(); });

        // Mission completed
        events.on('mission:completed', function() { levelUp(); });
        events.on('daily_mission:completed', function() { combo(); });

        // Wire up settings toggles
        document.addEventListener('change', function(e) {
            if (e.target.id === 'sounds-toggle') {
                setEnabled(e.target.checked);
            }
            if (e.target.id === 'haptic-toggle') {
                setHapticEnabled(e.target.checked);
            }
        });

        // Set initial toggle states when settings screen is shown
        document.addEventListener('click', function(e) {
            var action = e.target.getAttribute('data-action') || (e.target.closest && e.target.closest('[data-action]') && e.target.closest('[data-action]').getAttribute('data-action'));
            if (action === 'screen:settings') {
                setTimeout(function() {
                    var soundToggle = document.getElementById('sounds-toggle');
                    var hapticToggle = document.getElementById('haptic-toggle');
                    if (soundToggle) soundToggle.checked = isEnabled();
                    if (hapticToggle) hapticToggle.checked = isHapticEnabled();
                }, 50);
            }
        });
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.sounds = {
        init: init,
        correct: correct,
        wrong: wrong,
        combo: combo,
        levelUp: levelUp,
        streakAlive: streakAlive,
        tick: tick,
        countdown: countdown,
        haptic: haptic,
        isEnabled: isEnabled,
        setEnabled: setEnabled,
        isHapticEnabled: isHapticEnabled,
        setHapticEnabled: setHapticEnabled
    };

    // Auto-init
    init();

})();
