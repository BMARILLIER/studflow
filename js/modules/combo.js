// combo.js — In-session combo/streak system for dopamine loops
// Tracks consecutive correct answers, awards bonus XP, shows visual feedback
(function() {
    'use strict';

    var _count = 0;          // current combo count
    var _maxCombo = 0;        // best combo this session
    var _sessionActive = false;
    var _el = null;           // combo HUD element
    var _timeout = null;      // auto-hide timer

    // Combo tiers — each tier has a label, min count, XP bonus, and CSS class
    var TIERS = [
        { min: 2,  label: 'x2',    bonus: 2,  cls: 'combo-t1', sound: 'tick' },
        { min: 4,  label: 'x4',    bonus: 5,  cls: 'combo-t2', sound: 'combo' },
        { min: 7,  label: 'x7',    bonus: 10, cls: 'combo-t3', sound: 'combo' },
        { min: 10, label: 'x10!',  bonus: 20, cls: 'combo-t4', sound: 'combo' },
        { min: 15, label: 'x15!!', bonus: 35, cls: 'combo-t5', sound: 'levelUp' }
    ];

    // ==================== HUD ====================
    function ensureHUD() {
        if (_el) return _el;
        _el = document.createElement('div');
        _el.id = 'combo-hud';
        _el.className = 'combo-hud';
        _el.setAttribute('aria-live', 'polite');
        _el.innerHTML = '<span class="combo-fire"></span>'
            + '<span class="combo-count"></span>'
            + '<span class="combo-label"></span>';
        document.body.appendChild(_el);
        return _el;
    }

    function updateHUD() {
        var hud = ensureHUD();
        var tier = getTier();

        if (_count < 2) {
            hud.classList.remove('combo-visible');
            return;
        }

        // Update content
        hud.querySelector('.combo-count').textContent = _count;
        hud.querySelector('.combo-label').textContent = tier ? tier.label : 'combo';
        hud.querySelector('.combo-fire').textContent = _count >= 10 ? '\uD83D\uDD25' : '\u26A1';

        // Update tier class
        TIERS.forEach(function(t) { hud.classList.remove(t.cls); });
        if (tier) hud.classList.add(tier.cls);

        // Show + animate
        hud.classList.add('combo-visible');
        hud.classList.remove('combo-pop');
        // Force reflow for re-animation
        void hud.offsetWidth;
        hud.classList.add('combo-pop');

        // Screen pulse at high combos
        if (_count >= 7) {
            pulseScreen();
        }

        // Auto-hide after inactivity
        clearTimeout(_timeout);
        _timeout = setTimeout(function() {
            if (_count >= 2) {
                hud.classList.remove('combo-visible');
            }
        }, 8000);
    }

    function pulseScreen() {
        var app = document.querySelector('.app-container');
        if (!app) return;
        app.classList.remove('combo-screen-pulse');
        void app.offsetWidth;
        app.classList.add('combo-screen-pulse');
    }

    // ==================== TIER LOGIC ====================
    function getTier() {
        for (var i = TIERS.length - 1; i >= 0; i--) {
            if (_count >= TIERS[i].min) return TIERS[i];
        }
        return null;
    }

    // ==================== CORE ====================
    function hit() {
        if (!_sessionActive) return;
        _count++;
        if (_count > _maxCombo) _maxCombo = _count;

        var tier = getTier();

        // Bonus XP
        if (tier && tier.bonus > 0 && window.StudFlow.gamification) {
            var stats = window.StudFlow.gamification.getStats();
            stats.xp += tier.bonus;
            window.StudFlow.storage.saveData('gamification', stats);
            window.StudFlow.gamification.updateXPDisplay();

            // Show bonus toast only at tier transitions
            if (_count === tier.min) {
                window.StudFlow.gamification.showToast(
                    tier.label + ' combo ! +' + tier.bonus + ' XP bonus',
                    'combo',
                    _count >= 10 ? '\uD83D\uDD25' : '\u26A1'
                );
            }
        }

        // Sound escalation
        if (tier && window.StudFlow.sounds) {
            var snd = window.StudFlow.sounds[tier.sound];
            if (snd) snd();
        }

        updateHUD();
    }

    function miss() {
        if (!_sessionActive) return;
        if (_count >= 4 && window.StudFlow.gamification) {
            window.StudFlow.gamification.showToast(
                'Combo perdu a ' + _count + ' !',
                'combo-break',
                '\uD83D\uDCA8'
            );
        }
        if (_count >= 4 && window.StudFlow.sounds) {
            window.StudFlow.sounds.wrong();
        }
        _count = 0;
        updateHUD();
    }

    function startSession() {
        _count = 0;
        _maxCombo = 0;
        _sessionActive = true;
        updateHUD();
    }

    function endSession() {
        _sessionActive = false;
        var result = { maxCombo: _maxCombo, lastCombo: _count };

        // Bonus XP for session max combo
        if (_maxCombo >= 5 && window.StudFlow.gamification) {
            var bonusXP = Math.min(_maxCombo * 2, 50);
            var stats = window.StudFlow.gamification.getStats();
            stats.xp += bonusXP;
            window.StudFlow.storage.saveData('gamification', stats);
            window.StudFlow.gamification.updateXPDisplay();
            window.StudFlow.gamification.showToast(
                'Meilleur combo : ' + _maxCombo + ' ! +' + bonusXP + ' XP',
                'combo',
                '\uD83C\uDFC6'
            );
        }

        _count = 0;
        _maxCombo = 0;
        updateHUD();
        return result;
    }

    function getCount() { return _count; }
    function getMax() { return _maxCombo; }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.combo = {
        hit: hit,
        miss: miss,
        startSession: startSession,
        endSession: endSession,
        getCount: getCount,
        getMax: getMax
    };
})();
