// trackPicker.js — Forces bac/brevet choice on first run (track IS NULL).
(function() {
    'use strict';

    function hideAllScreens() {
        var ss = document.querySelectorAll('.screen');
        for (var i = 0; i < ss.length; i++) {
            ss[i].classList.remove('active');
            ss[i].style.display = 'none';
        }
    }

    function show() {
        hideAllScreens();
        var el = document.getElementById('screen-trackpicker');
        if (!el) { console.error('[trackPicker] #screen-trackpicker missing'); return; }
        el.style.display = 'block';
        el.classList.add('active');

        var err = document.getElementById('trackpicker-error');
        if (err) err.style.display = 'none';
        var bacBtn = document.getElementById('trackpicker-bac');
        var brvBtn = document.getElementById('trackpicker-brevet');

        function pick(level) {
            return function() {
                if (bacBtn) bacBtn.disabled = true;
                if (brvBtn) brvBtn.disabled = true;
                if (err) err.style.display = 'none';
                window.StudFlow.track.save(level).then(function(ok) {
                    if (!ok) {
                        if (err) {
                            err.textContent = 'Erreur d\'enregistrement. Verifie ta connexion et reessaie.';
                            err.style.display = 'block';
                        }
                        if (bacBtn) bacBtn.disabled = false;
                        if (brvBtn) brvBtn.disabled = false;
                        return;
                    }
                    window.location.hash = '#dashboard';
                    window.location.reload();
                });
            };
        }
        if (bacBtn) bacBtn.onclick = pick('bac');
        if (brvBtn) brvBtn.onclick = pick('brevet');
    }

    // Hide any element tagged with data-track="other-track" (e.g. bac-only
    // shortcuts for a brevet user). Idempotent.
    function applyTrackFilter(track) {
        if (track !== 'bac' && track !== 'brevet') return;
        var els = document.querySelectorAll('[data-track]');
        for (var i = 0; i < els.length; i++) {
            var need = els[i].getAttribute('data-track');
            if (need && need !== track) els[i].style.display = 'none';
        }
    }

    // Returns Promise<'bac'|'brevet'|null>. null = picker shown.
    function enforce() {
        if (!window.StudFlow.betaGate || !window.StudFlow.betaGate.isUnlocked()) return Promise.resolve(null);
        if (!window.StudFlow.track) return Promise.resolve(null);
        return window.StudFlow.track.fetch().then(function(track) {
            if (!track) { show(); return null; }
            try {
                var p = window.StudFlow.storage.getUserProfile() || {};
                p.identity = p.identity || {};
                if (p.identity.examLevel !== track) {
                    p.identity.examLevel = track;
                    p.identity.class = track === 'brevet' ? '3eme' : 'terminale';
                    window.StudFlow.storage.updateUserProfile(p);
                }
            } catch (e) { /* noop */ }
            applyTrackFilter(track);
            return track;
        });
    }

    function isPickerVisible() {
        var el = document.getElementById('screen-trackpicker');
        return !!(el && el.style.display !== 'none' && el.classList.contains('active'));
    }

    window.StudFlow = window.StudFlow || {};
    window.StudFlow.trackPicker = { show: show, enforce: enforce, isVisible: isPickerVisible, applyTrackFilter: applyTrackFilter };
})();
