// supabaseClient.js — Singleton Supabase + helpers
// Single source of truth for Supabase config (URL + anon key)
// Env vars: VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY (via .env)
(function() {

    // Read from env (Vite replaces at build time) — no hardcoded fallbacks
    var URL = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_SUPABASE_URL)
        ? import.meta.env.VITE_SUPABASE_URL
        : '';
    var KEY = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_SUPABASE_ANON_KEY)
        ? import.meta.env.VITE_SUPABASE_ANON_KEY
        : '';
    var TIMEOUT_MS = 8000;

    // Validate env vars — fail loudly if missing
    if (!URL || !KEY) {
        console.error('[SB] VITE_SUPABASE_URL ou VITE_SUPABASE_ANON_KEY manquant dans .env — Supabase desactive.');
    }

    var _client = null;

    // ==================== CLIENT ====================

    function getClient() {
        if (_client) return _client;
        if (!URL || !KEY) return null;
        if (typeof supabase === 'undefined' || !supabase.createClient) return null;
        try {
            _client = supabase.createClient(URL, KEY, {
                auth: { persistSession: true, autoRefreshToken: true }
            });
        } catch (e) {
            console.warn('[SB] init error:', e.message);
            return null;
        }
        return _client;
    }

    function isAvailable() {
        return !!getClient();
    }

    // ==================== SESSION HELPERS ====================

    function getSession() {
        var sb = getClient();
        if (!sb) return Promise.resolve(null);
        return sb.auth.getSession().then(function(r) {
            return r.data && r.data.session ? r.data.session : null;
        }).catch(function() { return null; });
    }

    function getUser() {
        var sb = getClient();
        if (!sb) return Promise.resolve(null);
        return sb.auth.getUser().then(function(r) {
            return r.data && r.data.user ? r.data.user : null;
        }).catch(function() { return null; });
    }

    function onAuthStateChange(cb) {
        var sb = getClient();
        if (!sb) return { data: { subscription: { unsubscribe: function() {} } } };
        return sb.auth.onAuthStateChange(cb);
    }

    // ==================== QUERY WITH TIMEOUT ====================

    function withTimeout(promise, ms) {
        ms = ms || TIMEOUT_MS;
        return new Promise(function(resolve, reject) {
            var timer = setTimeout(function() {
                reject(new Error('Timeout reseau (' + ms + 'ms)'));
            }, ms);
            promise.then(function(val) {
                clearTimeout(timer);
                resolve(val);
            }).catch(function(err) {
                clearTimeout(timer);
                reject(err);
            });
        });
    }

    // ==================== ERROR HELPER ====================

    var _offline = false;

    function isNetworkError(err) {
        if (!err) return false;
        var msg = (err.message || '').toLowerCase();
        return msg.indexOf('fetch') !== -1
            || msg.indexOf('network') !== -1
            || msg.indexOf('timeout') !== -1
            || msg.indexOf('failed') !== -1
            || msg.indexOf('resolve') !== -1;
    }

    function isOffline() { return _offline; }

    // Wrap withTimeout to detect offline state and notify user once
    var _originalWithTimeout = withTimeout;
    withTimeout = function(promise, ms) {
        return _originalWithTimeout(promise, ms).catch(function(err) {
            if (isNetworkError(err) && !_offline) {
                _offline = true;
                if (window.StudFlow && window.StudFlow.gamification && window.StudFlow.gamification.showToast) {
                    window.StudFlow.gamification.showToast('Mode hors-ligne — tes donnees restent en local', 'info', '📡');
                }
            }
            throw err;
        });
    };

    // Recover from offline when network comes back
    window.addEventListener('online', function() {
        if (_offline) {
            _offline = false;
            if (window.StudFlow && window.StudFlow.gamification && window.StudFlow.gamification.showToast) {
                window.StudFlow.gamification.showToast('Connexion retrouvee !', 'xp', '✅');
            }
        }
    });

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.sb = {
        URL: URL,
        KEY: KEY,
        getClient: getClient,
        isAvailable: isAvailable,
        isOffline: isOffline,
        getSession: getSession,
        getUser: getUser,
        onAuthStateChange: onAuthStateChange,
        withTimeout: withTimeout,
        isNetworkError: isNetworkError
    };

})();
