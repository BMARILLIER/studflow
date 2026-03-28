// premium.js — Systeme Premium StudFlow (desactive pendant la beta)
(function() {

    // ==================== BETA FLAG ====================
    // Premium is disabled during closed beta. All features are free.
    // Set to false when Stripe is integrated and ready to go live.
    var PREMIUM_DISABLED_FOR_BETA = true;

    // ==================== PREMIUM FEATURES (9 gated) ====================
    var PREMIUM_FEATURES = {
        matieres_premium:    { name: 'Matieres Premium', plans: ['premium', 'ultimate'], icon: '📚' },
        stats_avancees:      { name: 'Statistiques avancees', plans: ['premium', 'ultimate'], icon: '📊' },
        export_pdf:          { name: 'Export PDF', plans: ['premium', 'ultimate'], icon: '📄' },
        coach_illimite:      { name: 'Coach illimite', plans: ['premium', 'ultimate'], icon: '🧠' },
        planning_complet:    { name: 'Planning complet', plans: ['premium', 'ultimate'], icon: '📅' },
        missions_premium:    { name: 'Missions premium', plans: ['premium', 'ultimate'], icon: '🎯' },
        bac_sections_extra:  { name: 'Sections Bac avancees', plans: ['premium', 'ultimate'], icon: '🇫🇷' },
        conseils_premium:    { name: 'Conseils personnalises', plans: ['ultimate'], icon: '💡' },
        generators_advanced: { name: 'Generateurs avances', plans: ['ultimate'], icon: '⚙️' }
    };

    // ==================== TOAST HELPER ====================
    function showToast(msg, type) {
        if (window.StudFlow.gamification && window.StudFlow.gamification.showToast) {
            var icon = type === 'success' ? '⭐' : type === 'error' ? '❌' : 'ℹ️';
            window.StudFlow.gamification.showToast(msg, type === 'success' ? 'streak' : 'xp', icon);
        }
    }

    // ==================== ACCESS CONTROL ====================
    function hasAccess(featureId) {
        // During beta: all features are unlocked for free
        if (PREMIUM_DISABLED_FOR_BETA) return true;
        if (!PREMIUM_FEATURES[featureId]) return true;
        var userPlan = window.StudFlow.storage.getUserPlan();
        if (userPlan === 'free') return false;
        if (!window.StudFlow.storage.isSubscriptionValid()) return false;
        return PREMIUM_FEATURES[featureId].plans.indexOf(userPlan) !== -1;
    }

    function guard(featureId) {
        if (hasAccess(featureId)) return true;
        showPaywall(featureId);
        return false;
    }

    // ==================== SUBSCRIPTION STATUS CHECK ====================
    function checkSubscriptionStatus() {
        if (PREMIUM_DISABLED_FOR_BETA) return;
        var sub = window.StudFlow.storage.getSubscription();
        if (sub.plan === 'free') return;
        if (sub.expiresAt && new Date(sub.expiresAt) <= new Date()) {
            window.StudFlow.storage.setUserPlan('free');
            window.StudFlow.storage.setSubscription({ plan: 'free', activatedAt: null, expiresAt: null, method: null });
            showToast('Ton abonnement a expire. Renouvelle pour continuer en Premium.', 'info');
        }
    }

    // ==================== RENDER — PREMIUM SCREEN (BETA) ====================
    function showPremiumScreen() {
        window.StudFlow.app.showScreen('premium');
        renderPremiumScreen();
    }

    function renderPremiumScreen() {
        var container = document.getElementById('premium-content');
        if (!container) return;

        container.innerHTML = ''
            + '<div class="prem-hero">'
            + '<div class="prem-hero-icon">🧪</div>'
            + '<h1>Beta privee</h1>'
            + '<p class="prem-hero-sub">Pendant la beta, toutes les fonctionnalites sont accessibles gratuitement.</p>'
            + '</div>'
            + '<div class="prem-cta-section">'
            + '<p style="color:var(--text-muted);text-align:center;">Les abonnements Premium seront disponibles dans une prochaine version.</p>'
            + '<button class="prem-btn-ghost" data-action="app.showScreen" data-param="dashboard" style="margin-top:12px;">Retour</button>'
            + '</div>';
    }

    // ==================== PAYWALL (beta: should never show, but safe fallback) ====================
    function showPaywall(featureId) {
        // During beta all features are free, so this is a no-op
        if (PREMIUM_DISABLED_FOR_BETA) return;
    }

    // ==================== INLINE UPSELL ====================
    function renderInlineUpsell(featureId) {
        // During beta: no upsell
        if (PREMIUM_DISABLED_FOR_BETA) return '';
        var feature = PREMIUM_FEATURES[featureId];
        var label = feature ? feature.name : 'Premium';
        return '<div class="prem-upsell-inline">'
            + '<p>🔒 <strong>' + label + '</strong> — disponible en Premium</p>'
            + '</div>';
    }

    // ==================== BADGE DASHBOARD ====================
    function renderBadge() {
        if (PREMIUM_DISABLED_FOR_BETA) {
            return '<div class="prem-dash-badge" style="cursor:default;">'
                + '<span class="prem-dash-badge-icon">🧪</span>'
                + '<span class="prem-dash-badge-text">Beta</span>'
                + '</div>';
        }
        return '';
    }

    // ==================== SETTINGS RENDER ====================
    function renderSettings() {
        var container = document.getElementById('subscription-content');
        if (!container) return;

        if (PREMIUM_DISABLED_FOR_BETA) {
            container.innerHTML = ''
                + '<div class="prem-settings-status">'
                + '<div class="prem-settings-badge">🧪 Beta privee</div>'
                + '<p>Toutes les fonctionnalites sont accessibles pendant la beta.</p>'
                + '</div>';
            return;
        }
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.premium = {
        hasAccess: hasAccess,
        guard: guard,
        showPremiumScreen: showPremiumScreen,
        renderPremiumScreen: renderPremiumScreen,
        showPaywall: showPaywall,
        renderInlineUpsell: renderInlineUpsell,
        renderBadge: renderBadge,
        renderSettings: renderSettings,
        checkSubscriptionStatus: checkSubscriptionStatus,
        PREMIUM_FEATURES: PREMIUM_FEATURES
    };

})();
