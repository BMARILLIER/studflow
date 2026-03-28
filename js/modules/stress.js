// stress.js — Module anti-stress complet
(function() {
    const SITUATIONS = [
        {
            id: 'avant-controle',
            title: 'Avant un controle',
            icon: '📝',
            messages: [
                "Tu as deja fait le plus dur : tu as revise. Maintenant, fais confiance a ton cerveau.",
                "Le stress avant un controle est normal. Il prouve que ca compte pour toi.",
                "Rappelle-toi : un controle, c'est juste un moment. Ca ne definit pas ta valeur.",
                "Tu en as deja passe des dizaines. Tu sais faire. Respire et fonce.",
                "Meme si tu ne sais pas tout, tu sais beaucoup plus que tu ne crois."
            ],
            conseils: [
                "Relis tes fiches une derniere fois (5 min max), puis ARRETE de reviser.",
                "Prepare tout ce soir : affaires, vetements, reveil. Moins de stress demain matin.",
                "Ecris sur un papier 3 choses que tu maitrises. Lis-le avant l'epreuve.",
                "Visualise-toi en train de repondre calmement. La visualisation fonctionne vraiment."
            ],
            action: "Fais 3 cycles de respiration 4-7-8 maintenant"
        },
        {
            id: 'panique-revision',
            title: 'Panique revision',
            icon: '😱',
            messages: [
                "Stop. Tu ne peux pas tout reviser en une fois, et c'est OK.",
                "Le cerveau ne peut pas absorber en mode panique. Calme d'abord, revision ensuite.",
                "Mieux vaut maitriser 5 notions que survoler 20.",
                "La panique est un signal : tu as besoin d'une pause, pas de plus de travail.",
                "Chaque minute de revision calme vaut 10 minutes de revision stressee."
            ],
            conseils: [
                "Pose ton cours. Prends 5 minutes de pause COMPLETE (pas de telephone).",
                "Ecris les 3 sujets les plus importants. Concentre-toi UNIQUEMENT sur ceux-la.",
                "Mets un timer de 25 min. Revise UN seul sujet. Puis pause. Repete.",
                "Appelle un ami pour reviser ensemble. Expliquer aide a comprendre."
            ],
            action: "Pose tout et fais une pause de 5 minutes"
        },
        {
            id: 'fatigue',
            title: 'Fatigue mentale',
            icon: '😴',
            messages: [
                "Ton cerveau te dit qu'il a besoin de repos. Ecoute-le.",
                "La fatigue mentale, c'est comme une batterie faible. Il faut recharger.",
                "Forcer quand on est epuise = retenir 0%. Mieux vaut dormir.",
                "Les plus grands athletes se reposent. Les meilleurs eleves aussi.",
                "Une sieste de 20 min peut relancer ta journee entiere."
            ],
            conseils: [
                "Bois un grand verre d'eau. La deshydratation cause 30% de la fatigue mentale.",
                "Sors marcher 10 minutes. L'air frais relance le cerveau.",
                "Si tu peux, fais une sieste de 20 min (pas plus, sinon tu seras groggy).",
                "Change d'activite : dessine, ecoute de la musique, fais du sport."
            ],
            action: "Ferme les yeux 2 minutes et respire profondement"
        },
        {
            id: 'confiance',
            title: 'Manque de confiance',
            icon: '💪',
            messages: [
                "Tu es plus capable que tu ne le crois. Le doute est normal, pas la verite.",
                "Chaque fois que tu as eu peur d'echouer, tu t'en es sorti. Rappelle-toi ca.",
                "Les meilleurs eleves doutent aussi. La difference : ils agissent malgre le doute.",
                "Tu n'as pas besoin d'etre parfait. Tu as besoin d'etre present et de faire de ton mieux.",
                "Regarde le chemin parcouru, pas celui qui reste. Tu as deja appris enormement."
            ],
            conseils: [
                "Ecris 3 reussites recentes (meme petites). Relis-les quand le doute revient.",
                "Parle a quelqu'un de confiance. Verbaliser le doute le reduit.",
                "Commence par un exercice facile pour reprendre confiance, puis augmente.",
                "Rappelle-toi : le bac, des millions de personnes l'ont eu. Toi aussi tu peux."
            ],
            action: "Ecris une chose dont tu es fier(e) cette semaine"
        }
    ];

    function show() {
        window.StudFlow.app.showScreen('stress');
        renderMain();
    }

    function renderMain() {
        const container = document.getElementById('stress-content');
        if (!container) return;

        container.innerHTML = `
            <button class="back-btn" data-action="screen:dashboard">\u2190 Retour</button>
            <div class="stress-header">
                <div class="stress-main-icon">🆘</div>
                <h2>Je stresse</h2>
                <p>Choisis ta situation, on va gerer ca ensemble</p>
            </div>
            <div class="stress-situations">
                ${SITUATIONS.map((s, i) => `
                    <button class="stress-situation-btn" data-action="stress.openSituation" data-param="${i}">
                        <span class="stress-sit-icon">${s.icon}</span>
                        <span class="stress-sit-title">${s.title}</span>
                        <span class="stress-sit-arrow">→</span>
                    </button>
                `).join('')}
            </div>
        `;
    }

    function openSituation(index) {
        const s = SITUATIONS[index];
        const randomMessage = s.messages[Math.floor(Math.random() * s.messages.length)];
        const randomConseil = s.conseils[Math.floor(Math.random() * s.conseils.length)];

        const container = document.getElementById('stress-content');
        container.innerHTML = `
            <button class="back-btn" data-action="stress.renderMain">← Retour</button>
            <div class="stress-detail">
                <div class="stress-detail-header">
                    <span class="stress-detail-icon">${s.icon}</span>
                    <h2>${s.title}</h2>
                </div>

                <div class="stress-card stress-message">
                    <div class="stress-card-label">💬 Message pour toi</div>
                    <p>${randomMessage}</p>
                </div>

                <div class="stress-card stress-conseil">
                    <div class="stress-card-label">💡 Conseil pratique</div>
                    <p>${randomConseil}</p>
                </div>

                <div class="stress-card stress-action">
                    <div class="stress-card-label">⚡ Action immediate</div>
                    <p>${s.action}</p>
                </div>

                <div class="stress-actions">
                    <button class="breathing-btn primary" data-action="breathing.start">
                        🧘 Respiration guidee
                    </button>
                    <button class="breathing-btn secondary" data-action="stress.openSituation" data-param="${index}">
                        🔄 Autre message
                    </button>
                </div>
            </div>
        `;

        if (window.StudFlow.gamification) window.StudFlow.gamification.addXP('stress_session');
        if (window.StudFlow.badges) { window.StudFlow.badges.incrementCounter('stressSessions'); window.StudFlow.badges.checkAll(); }
        if (window.StudFlow.events) {
            window.StudFlow.events.emit('stress:completed', { situation: s.id, title: s.title });
        }
    }

    window.StudFlow = window.StudFlow || {};
    window.StudFlow.stress = { show, renderMain, openSituation };
})();
