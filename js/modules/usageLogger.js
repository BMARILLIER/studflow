// usageLogger.js — Tracking usage minimal (login + sessions).
// Identification par email localStorage (meme flow que leaderboard/track).
// Non bloquant : un echec RPC est logge en console, jamais remonte a l'UI.
(function() {
    'use strict';

    var LS_LAST_LOGIN = 'studflow_usage_last_login';

    function getEmail() {
        try { return localStorage.getItem('studflow_beta_email'); } catch (e) { return null; }
    }
    function getClient() {
        return (window.StudFlow && window.StudFlow.sb && window.StudFlow.sb.getClient)
            ? window.StudFlow.sb.getClient() : null;
    }

    function log(event_type, value) {
        if (!event_type) return;
        var sb = getClient();
        var email = getEmail();
        if (!sb || !email) return;
        try {
            sb.rpc('usage_log', {
                p_email: email,
                p_event: event_type,
                p_value: value || null
            }).then(function(r) {
                if (r && r.error) console.warn('[usage]', r.error.message);
            }).catch(function(e) { console.warn('[usage]', e); });
        } catch (e) { console.warn('[usage] sync', e); }
    }

    function logLoginOnce() {
        var today = new Date().toDateString();
        var last = null;
        try { last = localStorage.getItem(LS_LAST_LOGIN); } catch (e) {}
        if (last === today) return;
        log('login', null);
        try { localStorage.setItem(LS_LAST_LOGIN, today); } catch (e) {}
    }

    function init() {
        logLoginOnce();

        if (window.StudFlow && window.StudFlow.events && window.StudFlow.events.on) {
            window.StudFlow.events.on('flashcard:completed', function(d) {
                if (!d) return;
                log('session_end', {
                    mode: 'flashcards',
                    cards: d.total || 0,
                    score: d.score || 0,
                    percent: d.percent || 0,
                    deck: d.deck || null
                });
            });
            window.StudFlow.events.on('quiz:completed', function(d) {
                if (!d) return;
                log('session_end', {
                    mode: 'quiz',
                    cards: d.total || 0,
                    score: d.score || 0,
                    percent: d.percent || 0,
                    deck: d.deck || null
                });
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    window.StudFlow = window.StudFlow || {};
    window.StudFlow.usageLogger = { log: log };
})();
