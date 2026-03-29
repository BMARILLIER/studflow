// aiQuota.js — Central AI quota, cache and cost control for StudFlow
// Every AI call must go through this module. No direct API calls.
(function() {
    'use strict';

    var STORAGE_KEY = 'studflow_ai_quota';
    var CACHE_KEY = 'studflow_ai_cache';

    // ==================== QUOTAS (per day, per user) ====================
    var LIMITS = {
        'pdf_analyze':  3,    // PDF analysis via /api/analyze
        'prof_chat':    15,   // Prof IA messages
        'coach_chat':   10,   // Coach IA messages
        'total':        28    // Hard cap for all AI calls combined
    };

    // ==================== STATE ====================
    function getTodayStr() {
        return new Date().toISOString().slice(0, 10);
    }

    function loadState() {
        try {
            var raw = localStorage.getItem(STORAGE_KEY);
            var state = raw ? JSON.parse(raw) : null;
            if (!state || state.date !== getTodayStr()) {
                // New day — reset counters
                return { date: getTodayStr(), counts: {}, totalTokensEstimated: 0, cacheHits: 0 };
            }
            return state;
        } catch (e) {
            return { date: getTodayStr(), counts: {}, totalTokensEstimated: 0, cacheHits: 0 };
        }
    }

    function saveState(state) {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        } catch (e) {}
    }

    // ==================== QUOTA CHECK ====================
    function canCall(action) {
        var state = loadState();
        var count = state.counts[action] || 0;
        var total = 0;
        for (var k in state.counts) { total += state.counts[k]; }

        var limit = LIMITS[action] || 5;
        if (count >= limit) return { allowed: false, reason: 'Limite atteinte pour aujourd\'hui (' + limit + '/' + limit + '). Reviens demain !' };
        if (total >= LIMITS.total) return { allowed: false, reason: 'Limite quotidienne globale atteinte (' + LIMITS.total + ' appels). Reviens demain !' };

        return { allowed: true, remaining: limit - count - 1 };
    }

    function recordCall(action, estimatedTokens) {
        var state = loadState();
        state.counts[action] = (state.counts[action] || 0) + 1;
        state.totalTokensEstimated += (estimatedTokens || 0);
        saveState(state);
    }

    function recordCacheHit() {
        var state = loadState();
        state.cacheHits = (state.cacheHits || 0) + 1;
        saveState(state);
    }

    // ==================== RESPONSE CACHE ====================
    // Cache AI responses keyed by content hash. Prevents paying twice for the same content.
    var CACHE_MAX_ENTRIES = 50;
    var CACHE_TTL_HOURS = 720; // 30 jours

    function hashText(text) {
        // Simple fast hash (djb2)
        var hash = 5381;
        var str = String(text || '').substring(0, 2000); // Only hash first 2000 chars
        for (var i = 0; i < str.length; i++) {
            hash = ((hash << 5) + hash) + str.charCodeAt(i);
            hash = hash & hash;
        }
        return (hash >>> 0).toString(36);
    }

    function loadCache() {
        try {
            var raw = localStorage.getItem(CACHE_KEY);
            return raw ? JSON.parse(raw) : {};
        } catch (e) {
            return {};
        }
    }

    function saveCache(cache) {
        try {
            localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
        } catch (e) {}
    }

    function getCached(action, text) {
        var cache = loadCache();
        var key = action + '_' + hashText(text);
        var entry = cache[key];
        if (!entry) return null;

        // Check TTL
        var age = (Date.now() - entry.ts) / (1000 * 60 * 60);
        if (age > CACHE_TTL_HOURS) {
            delete cache[key];
            saveCache(cache);
            return null;
        }

        recordCacheHit();
        console.log('[aiQuota] Cache hit for', action, '- saved an API call');
        return entry.data;
    }

    function setCache(action, text, data) {
        var cache = loadCache();
        var key = action + '_' + hashText(text);

        // Evict oldest if full
        var keys = Object.keys(cache);
        if (keys.length >= CACHE_MAX_ENTRIES) {
            // Remove oldest 10
            keys.sort(function(a, b) { return (cache[a].ts || 0) - (cache[b].ts || 0); });
            for (var i = 0; i < 10 && i < keys.length; i++) {
                delete cache[keys[i]];
            }
        }

        cache[key] = { data: data, ts: Date.now() };
        saveCache(cache);
    }

    // ==================== DEDUPLICATION ====================
    // Prevents re-analyzing the same PDF text
    function isDuplicate(action, text) {
        return getCached(action, text) !== null;
    }

    // ==================== STATS ====================
    function getStats() {
        var state = loadState();
        var total = 0;
        for (var k in state.counts) { total += state.counts[k]; }
        return {
            date: state.date,
            counts: state.counts,
            total: total,
            totalLimit: LIMITS.total,
            tokensEstimated: state.totalTokensEstimated,
            cacheHits: state.cacheHits || 0,
            limits: LIMITS
        };
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.aiQuota = {
        canCall: canCall,
        recordCall: recordCall,
        getCached: getCached,
        setCache: setCache,
        isDuplicate: isDuplicate,
        getStats: getStats,
        LIMITS: LIMITS
    };
})();
