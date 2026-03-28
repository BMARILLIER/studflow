// subscription.js — Module abonnement simule (mode premium fictif local)
(function() {
    const PLANS = {
        free: {
            id: 'free',
            name: 'Gratuit',
            price: '0€',
            period: '',
            features: [
                'Flashcards manuelles (illimite)',
                'Quiz manuels (illimite)',
                'Coach methodo (5 fiches)',
                'Anti-stress',
                'Respiration guidee',
                'Timer focus'
            ],
            limitations: [
                'Bac francais : 2 sections',
                'Pas de generation IA',
                'Pas d\'export PDF'
            ]
        },
        premium: {
            id: 'premium',
            name: 'Premium',
            price: '4.99€',
            period: '/mois',
            features: [
                'Tout le plan Gratuit',
                'Bac francais complet (4 sections)',
                'Toutes les flashcards pre-integrees',
                'Tous les quiz pre-integres',
                'Statistiques detaillees',
                'Export PDF des fiches',
                'Themes personnalises'
            ],
            limitations: []
        },
        ultimate: {
            id: 'ultimate',
            name: 'Ultimate',
            price: '9.99€',
            period: '/mois',
            features: [
                'Tout le plan Premium',
                'Generation IA Groq (flashcards + quiz)',
                'Synthese IA de tes cours',
                'Toutes les matieres (a venir)',
                'Support prioritaire',
                'Acces anticipe aux nouveautes'
            ],
            limitations: []
        }
    };

    function getCurrentPlan() {
        // Delegue au systeme premium pour le plan actif
        var userPlan = window.StudFlow.storage.getUserPlan();
        return window.StudFlow.storage.loadData('subscription', {
            plan: userPlan,
            activatedAt: new Date().toISOString(),
            expiresAt: null,
            isLocal: true
        });
    }

    function setPlan(planId) {
        const sub = {
            plan: planId,
            activatedAt: new Date().toISOString(),
            expiresAt: planId === 'free' ? null : getFutureDate(30),
            isLocal: true
        };
        window.StudFlow.storage.saveData('subscription', sub);
        return sub;
    }

    function isPremium() {
        return window.StudFlow.storage.isPremium();
    }

    function isUltimate() {
        const sub = getCurrentPlan();
        return sub.plan === 'ultimate';
    }

    function hasFeature(feature) {
        // Delegue au systeme premium
        if (window.StudFlow.premium) {
            return window.StudFlow.premium.hasAccess(feature);
        }
        return window.StudFlow.storage.isPremium();
    }

    function getFutureDate(days) {
        const d = new Date();
        d.setDate(d.getDate() + days);
        return d.toISOString();
    }

    function showSettings() {
        const container = document.getElementById('subscription-content');
        if (!container) return;

        const sub = getCurrentPlan();

        container.innerHTML = `
            <div class="sub-current">
                <div class="sub-current-badge ${sub.plan}">
                    ${sub.plan === 'free' ? '🆓' : sub.plan === 'premium' ? '⭐' : '👑'} ${PLANS[sub.plan].name}
                </div>
                <p class="sub-current-info">
                    ${sub.isLocal ? 'Mode local — Toutes les fonctionnalites sont disponibles' : 'Plan actif'}
                </p>
            </div>

            <div class="sub-plans">
                ${Object.values(PLANS).map(p => `
                    <div class="sub-plan-card ${p.id === sub.plan ? 'active' : ''}">
                        <div class="sub-plan-header">
                            <h3>${p.name}</h3>
                            <div class="sub-plan-price">
                                <span class="sub-price">${p.price}</span>
                                <span class="sub-period">${p.period}</span>
                            </div>
                        </div>
                        <ul class="sub-features">
                            ${p.features.map(f => `<li class="sub-feature-yes">✓ ${f}</li>`).join('')}
                            ${p.limitations.map(f => `<li class="sub-feature-no">✗ ${f}</li>`).join('')}
                        </ul>
                        ${p.id === sub.plan
                            ? '<button class="sub-btn active" disabled>Plan actuel</button>'
                            : `<button class="sub-btn" data-action="subscription.selectPlan" data-param="${p.id}">${p.id === 'free' ? 'Passer au gratuit' : 'Simuler l\'upgrade'}</button>`
                        }
                    </div>
                `).join('')}
            </div>

            <div class="sub-note">
                <p>💡 <strong>Note :</strong> En mode local, toutes les fonctionnalites sont deverrouillees.
                Les plans sont affiches a titre indicatif pour la future version en ligne.</p>
            </div>
        `;
    }

    function selectPlan(planId) {
        if (planId === 'free') {
            // Downgrade
            window.StudFlow.storage.setUserPlan('free');
            window.StudFlow.storage.setSubscription({ plan: 'free', activatedAt: null, expiresAt: null, method: null });
            showSettings();
        } else {
            // Delegate to premium for Stripe/licence/simulation flow
            if (window.StudFlow.premium) {
                window.StudFlow.premium.initiateCheckout(planId);
            } else {
                setPlan(planId);
                showSettings();
            }
        }
    }

    window.StudFlow = window.StudFlow || {};
    window.StudFlow.subscription = {
        getCurrentPlan, setPlan, isPremium, isUltimate,
        hasFeature, showSettings, selectPlan, PLANS
    };
})();
