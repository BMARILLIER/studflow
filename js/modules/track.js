// track.js — Read/write track (bac|brevet) via RPCs on beta_testers.
// Identity = email from localStorage (no Supabase auth in beta flow).
(function() {
    'use strict';

    function getClient() {
        return (window.StudFlow && window.StudFlow.sb && window.StudFlow.sb.getClient)
            ? window.StudFlow.sb.getClient() : null;
    }
    function getEmail() {
        try { return localStorage.getItem('studflow_beta_email'); } catch (e) { return null; }
    }

    function fetchTrack() {
        var sb = getClient(); var email = getEmail();
        if (!sb || !email) return Promise.resolve(null);
        return sb.rpc('beta_get_track', { p_email: email }).then(function(r) {
            if (r.error) { console.error('[track] fetch:', r.error.message); return null; }
            return (r.data && r.data.ok) ? (r.data.track || null) : null;
        }).catch(function(e) { console.error('[track] fetch throw:', e); return null; });
    }

    function saveTrack(level) {
        if (level !== 'bac' && level !== 'brevet') return Promise.resolve(false);
        var sb = getClient(); var email = getEmail();
        if (!sb || !email) return Promise.resolve(false);
        return sb.rpc('beta_set_track', { p_email: email, p_track: level }).then(function(r) {
            if (r.error) { console.error('[track] save:', r.error.message); return false; }
            if (!r.data || !r.data.ok) { console.error('[track] save rejected:', r.data && r.data.code); return false; }
            try {
                var p = window.StudFlow.storage.getUserProfile() || {};
                p.identity = p.identity || {};
                p.identity.examLevel = level;
                p.identity.class = level === 'brevet' ? '3eme' : 'terminale';
                window.StudFlow.storage.updateUserProfile(p);
            } catch (e) { console.warn('[track] local sync:', e); }
            return true;
        }).catch(function(e) { console.error('[track] save throw:', e); return false; });
    }

    window.StudFlow = window.StudFlow || {};
    window.StudFlow.track = { fetch: fetchTrack, save: saveTrack, getEmail: getEmail };
})();
