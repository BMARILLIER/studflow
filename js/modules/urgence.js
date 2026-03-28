// urgence.js — Mode Urgence Examen
(function() {

    // ==================== DONNEES ====================
    var MATIERES_URGENCE = [
        { id: 'francais', name: 'Francais', icon: '📝' },
        { id: 'philo', name: 'Philosophie', icon: '🤔' },
        { id: 'histoire', name: 'Histoire-Geo', icon: '🌍' },
        { id: 'maths', name: 'Mathematiques', icon: '📐' },
        { id: 'anglais', name: 'Anglais', icon: '🇬🇧' },
        { id: 'sciences', name: 'Sciences', icon: '🔬' },
        { id: 'autre', name: 'Autre matiere', icon: '📚' }
    ];

    var TEMPS_OPTIONS = [
        { id: 'tres_court', label: 'Moins de 30 min', icon: '⏰', minutes: 25 },
        { id: 'court', label: '30 min a 1h', icon: '⏱️', minutes: 50 },
        { id: 'moyen', label: '1h a 2h', icon: '🕐', minutes: 90 },
        { id: 'long', label: 'Plus de 2h', icon: '🕑', minutes: 150 }
    ];

    var NIVEAU_OPTIONS = [
        { id: 'perdu', label: 'Completement perdu', emoji: '😰', desc: 'Je ne comprends presque rien' },
        { id: 'fragile', label: 'Fragile', emoji: '😟', desc: 'J\'ai des bases mais beaucoup de lacunes' },
        { id: 'moyen', label: 'Correct', emoji: '😊', desc: 'J\'ai compris le cours mais pas assez pratique' },
        { id: 'confiant', label: 'Plutot confiant', emoji: '💪', desc: 'Je veux juste consolider' }
    ];

    // ==================== MESSAGES RASSURANTS ====================
    var MESSAGES_CALME = [
        "Respire. Meme avec peu de temps, tu peux progresser.",
        "Tu es ici. C'est deja un bon reflexe.",
        "On va transformer ton stress en plan d'action."
    ];

    var MESSAGES_PENDANT = {
        anxieux: [
            "Tu fais deja ce qu'il faut en revisitant maintenant.",
            "Concentre-toi sur ce que tu SAIS, pas sur ce que tu ne sais pas.",
            "Ton cerveau retient mieux quand tu es calme. Respire."
        ],
        procrastinateur: [
            "Le fait d'etre la maintenant, c'est deja enorme.",
            "Pas besoin de tout savoir. Juste les points essentiels.",
            "Chaque minute compte. Tu utilises bien ton temps."
        ],
        desorganise: [
            "On a un plan. Suis-le etape par etape.",
            "Pas besoin de tout faire. Juste ce qui est prioritaire.",
            "Structure = confiance. Suis les etapes."
        ],
        surcharge: [
            "On va a l'essentiel. Pas de surcharge, promis.",
            "Mieux vaut bien reviser 3 choses que survoler 10.",
            "Apres ca, tu te reposes. Deal ?"
        ],
        confiance_faible: [
            "Tu sais plus de choses que tu ne le penses.",
            "Les erreurs d'hier sont les lecons d'aujourd'hui.",
            "Fais confiance a ce que tu as deja appris."
        ],
        confiant: [
            "Tu es bien prepare. Cette session va consolider tout ca.",
            "Derniere ligne droite. Tu geres.",
            "Tu as les bases. Maintenant on affine."
        ],
        equilibre: [
            "Tu geres bien la situation. Continue comme ca.",
            "Fais les choses dans l'ordre et tout ira bien.",
            "Tu as les outils. Utilise-les."
        ]
    };

    var CONSEILS_RAPIDES = {
        francais: [
            "Revois les figures de style les plus courantes",
            "Relis tes introductions et conclusions types",
            "Revise les mouvements litteraires cles"
        ],
        philo: [
            "Revois les definitions des concepts cles",
            "Prepare 2-3 exemples universels (Platon, Descartes, Sartre)",
            "Structure type : these, antithese, synthese"
        ],
        histoire: [
            "Revois les dates cles et les evenements majeurs",
            "Prepare des exemples precis pour chaque chapitre",
            "Revise la methode de la composition"
        ],
        maths: [
            "Revois les formules essentielles",
            "Refais les exercices types du cours",
            "Verifie les erreurs de calcul frequentes"
        ],
        anglais: [
            "Revois le vocabulaire thematique",
            "Relis les regles de grammaire de base",
            "Prepare des expressions de liaison"
        ],
        sciences: [
            "Revois les formules et definitions cles",
            "Refais un exercice type de chaque chapitre",
            "Verifie les unites et conversions"
        ],
        autre: [
            "Revois les concepts fondamentaux",
            "Fais une fiche ultra-synthetique",
            "Teste-toi sur les points essentiels"
        ]
    };

    var ERREURS_FREQUENTES = {
        francais: "Hors-sujet, manque d'exemples, intro trop courte",
        philo: "Pas de problematique claire, exemples trop vagues",
        histoire: "Dates incorrectes, pas de plan apparent",
        maths: "Erreurs de signe, oublier les unites, ne pas verifier",
        anglais: "Grammaire de base, faux-amis, conjugaison",
        sciences: "Unites manquantes, formules mal appliquees",
        autre: "Manque de structure, pas assez d'exemples"
    };

    var MESSAGES_APRES = [
        "Tu as fait de ton mieux. C'est tout ce qu'on peut demander.",
        "Tu es pret a faire de ton mieux demain.",
        "Quelle que soit la note, tu as fait l'effort. C'est ca qui compte."
    ];

    var CONSEILS_APRES = [
        "Dors bien cette nuit. Ton cerveau consolide pendant le sommeil.",
        "Demain matin, fais une respiration 4-7-8 avant l'examen.",
        "Lis tout le sujet avant de commencer a ecrire.",
        "Commence par ce que tu maitrises le mieux pour gagner en confiance.",
        "Prends le temps de bien lire les consignes."
    ];

    // ==================== STATE ====================
    var urgenceState = {
        step: 'welcome', // welcome, situation, plan, action, after
        matiere: null,
        temps: null,
        niveau: null
    };

    // ==================== HELPERS ====================
    function getMainProfile() {
        var profile = window.StudFlow.storage.getUserProfile();
        return (profile && profile.mainProfile) ? profile.mainProfile : 'equilibre';
    }

    function saveUrgenceUsage() {
        var history = window.StudFlow.storage.loadData('urgenceHistory', []);
        history.push({
            date: new Date().toISOString(),
            matiere: urgenceState.matiere,
            temps: urgenceState.temps,
            niveau: urgenceState.niveau
        });
        if (history.length > 20) history = history.slice(-20);
        window.StudFlow.storage.saveData('urgenceHistory', history);
    }

    // ==================== RENDER ====================
    function show() {
        urgenceState.step = 'welcome';
        window.StudFlow.app.showScreen('urgence');
    }

    function renderMain() {
        var container = document.getElementById('urgence-content');
        if (!container) return;

        switch (urgenceState.step) {
            case 'welcome': renderWelcome(container); break;
            case 'situation': renderSituation(container); break;
            case 'plan': renderPlan(container); break;
            case 'after': renderAfter(container); break;
            default: renderWelcome(container);
        }
    }

    // ==================== ECRAN 1 — WELCOME ====================
    function renderWelcome(container) {
        var msgIdx = Math.floor(Math.random() * MESSAGES_CALME.length);
        container.innerHTML = '<div class="urg-welcome">'
            + '<div class="urg-welcome-icon">🫂</div>'
            + '<h2>Respire.</h2>'
            + '<p class="urg-welcome-msg">' + MESSAGES_CALME[msgIdx] + '</p>'
            + '<p class="urg-welcome-sub">On va faire simple et efficace.</p>'
            + '<button class="urg-btn-primary" data-action="urgence.nextStep" data-param="situation">Commencer</button>'
            + '</div>';
    }

    // ==================== ECRAN 2 — SITUATION ====================
    function renderSituation(container) {
        var matieresHTML = MATIERES_URGENCE.map(function(m) {
            var sel = urgenceState.matiere === m.id ? 'selected' : '';
            return '<button class="urg-choice-btn ' + sel + '" data-action="urgence.selectMatiere" data-param="' + m.id + '">'
                + '<span>' + m.icon + '</span>'
                + '<span>' + m.name + '</span>'
                + '</button>';
        }).join('');

        var tempsHTML = TEMPS_OPTIONS.map(function(t) {
            var sel = urgenceState.temps === t.id ? 'selected' : '';
            return '<button class="urg-choice-btn ' + sel + '" data-action="urgence.selectTemps" data-param="' + t.id + '">'
                + '<span>' + t.icon + '</span>'
                + '<span>' + t.label + '</span>'
                + '</button>';
        }).join('');

        var niveauHTML = NIVEAU_OPTIONS.map(function(n) {
            var sel = urgenceState.niveau === n.id ? 'selected' : '';
            return '<button class="urg-choice-btn wide ' + sel + '" data-action="urgence.selectNiveau" data-param="' + n.id + '">'
                + '<span class="urg-niveau-emoji">' + n.emoji + '</span>'
                + '<span class="urg-niveau-info">'
                + '<strong>' + n.label + '</strong>'
                + '<small>' + n.desc + '</small>'
                + '</span>'
                + '</button>';
        }).join('');

        var canProceed = urgenceState.matiere && urgenceState.temps && urgenceState.niveau;

        container.innerHTML = '<div class="urg-situation">'
            + '<h2>Dis-moi ta situation</h2>'
            + '<p class="urg-situation-sub">On va adapter le plan a toi.</p>'

            + '<div class="urg-field">'
            + '<label class="urg-label">📚 Quelle matiere ?</label>'
            + '<div class="urg-choices-grid">' + matieresHTML + '</div>'
            + '</div>'

            + '<div class="urg-field">'
            + '<label class="urg-label">⏰ Combien de temps tu as ?</label>'
            + '<div class="urg-choices-grid">' + tempsHTML + '</div>'
            + '</div>'

            + '<div class="urg-field">'
            + '<label class="urg-label">📊 Ton niveau sur ce sujet ?</label>'
            + '<div class="urg-choices-col">' + niveauHTML + '</div>'
            + '</div>'

            + '<button class="urg-btn-primary" data-action="urgence.generatePlan" ' + (canProceed ? '' : 'disabled') + '>'
            + 'Generer mon plan rapide 🚀'
            + '</button>'
            + '</div>';
    }

    function selectMatiere(id) {
        urgenceState.matiere = id;
        renderMain();
    }

    function selectTemps(id) {
        urgenceState.temps = id;
        renderMain();
    }

    function selectNiveau(id) {
        urgenceState.niveau = id;
        renderMain();
    }

    // ==================== ECRAN 3 — PLAN RAPIDE ====================
    function generatePlan() {
        urgenceState.step = 'plan';
        saveUrgenceUsage();
        renderMain();
    }

    function renderPlan(container) {
        var profileKey = getMainProfile();
        var matiere = MATIERES_URGENCE.find(function(m) { return m.id === urgenceState.matiere; });
        var tempsOpt = TEMPS_OPTIONS.find(function(t) { return t.id === urgenceState.temps; });
        var minutes = tempsOpt ? tempsOpt.minutes : 30;

        var msgs = MESSAGES_PENDANT[profileKey] || MESSAGES_PENDANT.equilibre;
        var msgIdx = Math.floor(Math.random() * msgs.length);

        // Generate plan steps based on time and level
        var steps = generatePlanSteps(minutes, urgenceState.niveau, urgenceState.matiere, profileKey);

        var stepsHTML = steps.map(function(s, i) {
            return '<div class="urg-plan-step">'
                + '<div class="urg-step-num">' + (i + 1) + '</div>'
                + '<div class="urg-step-info">'
                + '<h4>' + s.icon + ' ' + s.title + '</h4>'
                + '<p>' + s.desc + '</p>'
                + '<span class="urg-step-duree">' + s.duree + ' min</span>'
                + '</div>'
                + '</div>';
        }).join('');

        // Conseils rapides
        var conseils = CONSEILS_RAPIDES[urgenceState.matiere] || CONSEILS_RAPIDES.autre;
        var conseilsHTML = conseils.map(function(c) {
            return '<li>' + c + '</li>';
        }).join('');

        // Erreurs frequentes
        var erreurs = ERREURS_FREQUENTES[urgenceState.matiere] || ERREURS_FREQUENTES.autre;

        container.innerHTML = '<div class="urg-plan">'
            // Motivation
            + '<div class="urg-plan-motivation">'
            + '<span>💬</span>'
            + '<p>' + msgs[msgIdx] + '</p>'
            + '</div>'

            // Plan header
            + '<div class="urg-plan-header">'
            + '<h2>' + matiere.icon + ' Plan rapide — ' + matiere.name + '</h2>'
            + '<p>' + tempsOpt.label + ' de revision disponibles</p>'
            + '</div>'

            // Steps
            + '<div class="urg-plan-steps">' + stepsHTML + '</div>'

            // Conseils
            + '<div class="urg-section">'
            + '<h3>⚡ A revoir en priorite</h3>'
            + '<ul class="urg-conseils-list">' + conseilsHTML + '</ul>'
            + '</div>'

            // Erreurs
            + '<div class="urg-section urg-erreurs">'
            + '<h3>⚠️ Erreurs frequentes a eviter</h3>'
            + '<p>' + erreurs + '</p>'
            + '</div>'

            // Anti-stress
            + '<div class="urg-section urg-anti-stress">'
            + '<h3>🧘 Anti-stress immediat</h3>'
            + '<p>Ton cerveau retient mieux quand tu es calme.</p>'
            + '<button class="urg-btn-secondary" data-action="app.showScreen" data-param="breathing">🫁 Respiration 4-7-8</button>'
            + '</div>'

            // Actions
            + '<div class="urg-plan-actions">'
            + '<button class="urg-btn-primary" data-action="urgence.startFocus">🎯 Lancer session focus</button>'
            + '<button class="urg-btn-secondary" data-action="urgence.nextStep" data-param="after">J\'ai fini mes revisions ✓</button>'
            + '</div>'
            + '</div>';
    }

    function generatePlanSteps(totalMinutes, niveau, matiere, profileKey) {
        var steps = [];
        var isAnxious = profileKey === 'anxieux' || profileKey === 'surcharge';

        if (totalMinutes <= 30) {
            // Plan tres court
            if (isAnxious) {
                steps.push({ icon: '🫁', title: 'Respiration', desc: 'Calme ton corps et ton esprit', duree: 3 });
            }
            steps.push({ icon: '📖', title: 'Revision essentielle', desc: 'Relis les points cles du cours', duree: isAnxious ? 10 : 15 });
            steps.push({ icon: '✏️', title: 'Exercice rapide', desc: 'Fais 1 exercice type pour ancrer', duree: 10 });
            if (!isAnxious) {
                steps.push({ icon: '🧠', title: 'Auto-test', desc: 'Ferme le cours, recite les points cles', duree: 5 });
            }
        } else if (totalMinutes <= 60) {
            // Plan court
            if (isAnxious) {
                steps.push({ icon: '🫁', title: 'Respiration', desc: 'Calme ton corps, 4-7-8', duree: 3 });
            }
            steps.push({ icon: '📖', title: 'Revision ciblee', desc: 'Les concepts essentiels du chapitre', duree: 15 });
            steps.push({ icon: '☕', title: 'Micro-pause', desc: 'Bois de l\'eau, etire-toi', duree: 5 });
            steps.push({ icon: '✏️', title: 'Exercices types', desc: 'Entrainement sur les exercices classiques', duree: 15 });
            steps.push({ icon: '🧠', title: 'Auto-evaluation', desc: 'Recite de memoire, identifie les lacunes', duree: isAnxious ? 7 : 10 });
        } else if (totalMinutes <= 120) {
            // Plan moyen
            if (isAnxious) {
                steps.push({ icon: '🫁', title: 'Respiration et preparation', desc: 'Calme et concentration', duree: 5 });
            }
            steps.push({ icon: '📖', title: 'Revision structuree', desc: 'Relis le cours avec tes fiches', duree: 20 });
            steps.push({ icon: '✏️', title: 'Exercices pratiques', desc: 'Refais les exercices les plus representatifs', duree: 25 });
            steps.push({ icon: '☕', title: 'Pause active', desc: 'Marche, etirements, hydratation', duree: 10 });
            steps.push({ icon: '📝', title: 'Fiche synthese', desc: 'Ecris les 5 points essentiels a retenir', duree: 15 });
            steps.push({ icon: '🧠', title: 'Auto-test complet', desc: 'Teste-toi sans regarder le cours', duree: 15 });
        } else {
            // Plan long
            if (isAnxious) {
                steps.push({ icon: '🫁', title: 'Preparation mentale', desc: 'Respiration et visualisation positive', duree: 5 });
            }
            steps.push({ icon: '📖', title: 'Revision approfondie', desc: 'Reprends le cours chapitre par chapitre', duree: 30 });
            steps.push({ icon: '✏️', title: 'Exercices chapitre 1', desc: 'Pratique sur la premiere partie', duree: 25 });
            steps.push({ icon: '☕', title: 'Pause', desc: 'Repose ton cerveau', duree: 10 });
            steps.push({ icon: '✏️', title: 'Exercices chapitre 2', desc: 'Pratique sur la deuxieme partie', duree: 25 });
            steps.push({ icon: '📝', title: 'Fiche synthese', desc: 'Resume les points essentiels', duree: 20 });
            steps.push({ icon: '☕', title: 'Pause', desc: 'Derniere pause avant le sprint', duree: 10 });
            steps.push({ icon: '🎯', title: 'Sujet blanc', desc: 'Entrainement en conditions reelles', duree: 30 });
            steps.push({ icon: '🧠', title: 'Bilan et confiance', desc: 'Identifie ce que tu sais bien, rassure-toi', duree: 10 });
        }

        // Adjust for niveau "perdu" — add more basics
        if (niveau === 'perdu' && steps.length > 2) {
            steps[1].desc = 'Concentre-toi sur les DEFINITIONS et concepts de base';
        }
        // Adjust for "confiant" — more practice
        if (niveau === 'confiant' && steps.length > 2) {
            steps[1].desc = 'Revois rapidement les points delicats';
        }

        return steps;
    }

    // ==================== ECRAN 4 — APRES REVISION ====================
    function renderAfter(container) {
        var msgIdx = Math.floor(Math.random() * MESSAGES_APRES.length);
        var conseilsHTML = CONSEILS_APRES.map(function(c) {
            return '<li class="urg-after-tip">' + c + '</li>';
        }).join('');

        container.innerHTML = '<div class="urg-after">'
            + '<div class="urg-after-icon">🌟</div>'
            + '<h2>Tu es pret.</h2>'
            + '<p class="urg-after-msg">' + MESSAGES_APRES[msgIdx] + '</p>'

            + '<div class="urg-after-section">'
            + '<h3>💡 Conseils pour demain</h3>'
            + '<ul class="urg-after-tips">' + conseilsHTML + '</ul>'
            + '</div>'

            + '<div class="urg-after-section">'
            + '<h3>🧘 Derniere respiration</h3>'
            + '<p>Avant de dormir, fais une respiration 4-7-8. Ca aide a bien dormir.</p>'
            + '<button class="urg-btn-secondary" data-action="app.showScreen" data-param="breathing">🫁 Respiration guidee</button>'
            + '</div>'

            + '<div class="urg-after-final">'
            + '<p>Tu as fait tout ce que tu pouvais.<br>Maintenant, fais-toi confiance.</p>'
            + '<button class="urg-btn-primary" data-action="app.showScreen" data-param="dashboard">Retour au tableau de bord</button>'
            + '</div>'
            + '</div>';

        if (window.StudFlow.gamification) {
            window.StudFlow.gamification.addXP('urgence_complete');
            window.StudFlow.gamification.showToast('+15 XP — Mode urgence termine !', 'xp', '🌟');
        }
        if (window.StudFlow.badges) window.StudFlow.badges.checkAll();
    }

    // ==================== ACTIONS ====================
    function nextStep(step) {
        urgenceState.step = step;
        renderMain();
    }

    function startFocus() {
        if (window.StudFlow.focus) {
            window.StudFlow.focus.show();
        }
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.urgence = {
        show: show,
        renderMain: renderMain,
        nextStep: nextStep,
        selectMatiere: selectMatiere,
        selectTemps: selectTemps,
        selectNiveau: selectNiveau,
        generatePlan: generatePlan,
        startFocus: startFocus
    };
})();
