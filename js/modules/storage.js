// storage.js — Persistance localStorage
(function() {
    const PREFIX = 'studflow_';

    // ==================== FEATURE FLAGS (beta) ====================
    // Central feature flags. Checked by all modules before calling external AI.
    // Set AI_ENABLED to true when ready to re-enable AI features.
    var FEATURES = {
        AI_ENABLED: false
    };

    // Expose early so every module loaded after storage.js can read it
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.features = FEATURES;

    // Keys safe to purge when quota is exceeded (non-critical, regenerable)
    var PURGEABLE_KEYS = [
        'error_log', 'content_reports', 'analytics_queue',
        'betaTips', '_cloud_dirty', 'studflow_debug',
        'dailyDashboard', 'tour_done'
    ];

    // ==================== QUOTA RECOVERY ====================

    function isQuotaError(e) {
        if (e && e.name === 'QuotaExceededError') return true;
        if (e && e.code === 22) return true; // legacy Safari
        if (e && e.code === 1014 && e.name === 'NS_ERROR_DOM_QUOTA_REACHED') return true; // Firefox
        return false;
    }

    function emergencyCleanup() {
        var freed = 0;
        // Phase 1: drop known purgeable keys
        for (var i = 0; i < PURGEABLE_KEYS.length; i++) {
            var fullKey = PREFIX + PURGEABLE_KEYS[i];
            var val = localStorage.getItem(fullKey);
            if (val) {
                freed += val.length;
                localStorage.removeItem(fullKey);
            }
            // Also try without prefix (some keys store directly)
            val = localStorage.getItem(PURGEABLE_KEYS[i]);
            if (val) {
                freed += val.length;
                localStorage.removeItem(PURGEABLE_KEYS[i]);
            }
        }
        // Phase 2: compact error_log if it survived (halve it)
        try {
            var logRaw = localStorage.getItem('studflow_error_log');
            if (logRaw && logRaw.length > 500) {
                var entries = JSON.parse(logRaw);
                entries = entries.slice(Math.floor(entries.length / 2));
                localStorage.setItem('studflow_error_log', JSON.stringify(entries));
                freed += logRaw.length - JSON.stringify(entries).length;
            }
        } catch (e) { /* ignore */ }
        return freed;
    }

    function notifyQuotaCleanup() {
        try {
            if (window.StudFlow && window.StudFlow.gamification && window.StudFlow.gamification.showToast) {
                window.StudFlow.gamification.showToast(
                    'Stockage presque plein — nettoyage automatique effectue',
                    'warning',
                    '⚠️'
                );
            }
        } catch (e) { /* toast is best-effort */ }
    }

    function saveData(key, data) {
        try {
            localStorage.setItem(PREFIX + key, JSON.stringify(data));
        } catch (e) {
            if (isQuotaError(e)) {
                console.warn('Storage quota exceeded, running emergency cleanup');
                emergencyCleanup();
                notifyQuotaCleanup();
                // Retry once after cleanup
                try {
                    localStorage.setItem(PREFIX + key, JSON.stringify(data));
                    return; // success after cleanup
                } catch (e2) {
                    console.error('Storage save failed after cleanup:', key, e2);
                    // Log to errorLog if available (may also be full, best-effort)
                    if (window.StudFlow && window.StudFlow.errorLog) {
                        try { window.StudFlow.errorLog.log('quota', 'Save failed after cleanup: ' + key); } catch(e3) {}
                    }
                }
            } else {
                console.warn('Storage save error:', e);
            }
        }
    }

    function loadData(key, defaultValue) {
        try {
            const raw = localStorage.getItem(PREFIX + key);
            return raw ? JSON.parse(raw) : (defaultValue !== undefined ? defaultValue : null);
        } catch (e) {
            console.warn('Storage load error:', e);
            return defaultValue !== undefined ? defaultValue : null;
        }
    }

    function removeData(key) {
        localStorage.removeItem(PREFIX + key);
    }

    function updateUserProfile(data) {
        const existing = loadData('profile', {});
        const merged = Object.assign({}, existing, data);
        saveData('profile', merged);
        return merged;
    }

    function getUserProfile() {
        return loadData('profile', null);
    }

    // Auto-save appState periodically
    function saveAppState(state) {
        saveData('flashcards', state.flashcards || []);
        saveData('quizQuestions', state.quizQuestions || []);
        saveData('customFlashcards', state.customFlashcards || []);
        saveData('customQuiz', state.customQuiz || []);
        saveData('scores', {
            masteredCards: state.masteredCards || 0,
            streak: state.streak || 0,
            quizScore: state.quizScore || 0,
            flashcardScore: state.flashcardScore || 0
        });
        saveData('focusStats', state.focusStats || { sessions: 0, totalMinutes: 0, streak: 0 });
    }

    function restoreAppState(state) {
        state.flashcards = loadData('flashcards', []);
        state.quizQuestions = loadData('quizQuestions', []);
        state.customFlashcards = loadData('customFlashcards', []);
        state.customQuiz = loadData('customQuiz', []);
        const scores = loadData('scores', {});
        state.masteredCards = scores.masteredCards || 0;
        state.streak = scores.streak || 0;
        state.focusStats = loadData('focusStats', { sessions: 0, totalMinutes: 0, streak: 0 });
        return state;
    }

    function hasCompletedOnboarding() {
        return loadData('onboarding_done', false);
    }

    function setOnboardingDone() {
        saveData('onboarding_done', true);
    }

    function hasDiagnostic() {
        return getUserProfile() !== null;
    }

    // Plan utilisateur (free | premium)
    function getUserPlan() {
        return loadData('userPlan', 'free');
    }

    function setUserPlan(plan) {
        saveData('userPlan', plan);
    }

    function isPremium() {
        var plan = getUserPlan();
        if (plan === 'free') return false;
        if (isSubscriptionValid()) return true;
        // Backward compat: old data may have plan set without subscription
        return plan === 'premium' || plan === 'ultimate';
    }

    // ==================== SUBSCRIPTION ====================
    function getSubscription() {
        return loadData('subscription', { plan: 'free', activatedAt: null, expiresAt: null, method: null });
    }

    function setSubscription(sub) {
        saveData('subscription', sub);
    }

    function isSubscriptionValid() {
        var sub = getSubscription();
        if (sub.plan === 'free') return false;
        if (!sub.expiresAt) return sub.plan !== 'free'; // lifetime/no-expiry
        return new Date(sub.expiresAt) > new Date();
    }

    function getStripeConfig() {
        return loadData('stripeConfig', {
            mode: 'simulation',
            publishableKey: '',
            premiumPriceId: '',
            ultimatePriceId: ''
        });
    }

    function setStripeConfig(cfg) {
        saveData('stripeConfig', cfg);
    }

    // ==================== SCHEMA VERSIONING ====================
    var CURRENT_SCHEMA_VERSION = 2;

    var MIGRATIONS = [
        { version: 2, migrate: function() {
            var existing = loadData('subscription', null);
            if (!existing || !existing.method) {
                var plan = loadData('userPlan', 'free');
                saveData('subscription', { plan: plan, activatedAt: null, expiresAt: null, method: null });
            }
        }}
    ];

    function runMigrations() {
        var storedVersion = loadData('schema_version', 0);
        if (storedVersion >= CURRENT_SCHEMA_VERSION) return;

        for (var i = 0; i < MIGRATIONS.length; i++) {
            if (MIGRATIONS[i].version > storedVersion) {
                try {
                    MIGRATIONS[i].migrate();
                } catch (e) {
                    console.warn('Migration v' + MIGRATIONS[i].version + ' failed:', e);
                }
            }
        }

        saveData('schema_version', CURRENT_SCHEMA_VERSION);
    }

    // Run migrations immediately on module load
    runMigrations();

    window.StudFlow = window.StudFlow || {};
    window.StudFlow.storage = {
        saveData,
        loadData,
        removeData,
        updateUserProfile,
        getUserProfile,
        saveAppState,
        restoreAppState,
        hasCompletedOnboarding,
        setOnboardingDone,
        hasDiagnostic,
        getUserPlan,
        setUserPlan,
        isPremium,
        getSubscription,
        setSubscription,
        isSubscriptionValid,
        getStripeConfig,
        setStripeConfig,
        _isQuotaError: isQuotaError,
        _emergencyCleanup: emergencyCleanup
    };
})();
