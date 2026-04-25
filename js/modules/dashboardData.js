// dashboardData.js — Static configuration extracted from dashboard.js.
// Pure data: messages, per-profile objectives/recommendations, profile
// metadata, and the navigation map. No DOM, no state. Loaded before
// dashboard.js in main.js so its IIFE can alias these via window.StudFlow.dashboardData.
(function() {
    'use strict';

    // ==================== MESSAGES MOTIVATION ====================
    const MOTIVATION_MESSAGES = [
        "T'as ouvert l'appli. C'est deja 90% du taff.",
        "Meme 10 min ca compte. Les gros cerveaux revisent pas 12h.",
        "Ton futur toi va kiffer pour ce que tu fais la.",
        "Pas besoin d'etre parfait. Juste regulier. Et t'es la.",
        "Y'a des milliers d'eleves qui revisent en meme temps que toi. T'es pas seul(e).",
        "La motivation c'est un mythe. L'habitude c'est la vraie arme.",
        "Chaque carte que tu maitrises = un neurone de plus pret pour l'examen.",
        "T'as le droit de faire une pause. Revenir frais c'est pas tricher.",
        "Les premiers de la classe? Ils sont juste reguliers. Comme toi.",
        "Aujourd'hui tu plantes. En juin tu recoltes.",
        "10 min > 0 min. Toujours.",
        "L'examen c'est un marathon, pas un sprint. Et t'es en train de courir.",
        "Fun fact: tu retiens 80% de plus quand tu revises le soir. Bien joue.",
        "Tu geres. Un module a la fois.",
        "Le plus dur c'etait d'ouvrir l'appli. C'est fait."
    ];

    // ==================== NEXT ACTION COACH MESSAGES ====================
    const COACH_MESSAGES = [
        "Un petit pas aujourd'hui > rien du tout.",
        "25 min de focus et t'as deja fait plus que 80% des gens.",
        "La regularite bat l'intensite. Chaque. Jour.",
        "Commence doucement. Le flow va venir.",
        "Ton futur toi te remerciera. Grave.",
        "Meme 10 min c'est une W.",
        "Le plus dur c'est de commencer. Et t'y es presque."
    ];

    // ==================== OBJECTIFS PAR PROFIL ====================
    const DAILY_OBJECTIVES = {
        anxieux: [
            { text: "Faire 1 exercice de respiration", action: 'breathing', icon: '🫁', module: 'stress' },
            { text: "1 session focus de 15 min", action: 'focus_15', icon: '🎯', module: 'focus' },
            { text: "Lire 1 fiche methodo anti-stress", action: 'coach', icon: '🧠', module: 'coach' }
        ],
        procrastinateur: [
            { text: "1 micro-session focus de 15 min", action: 'focus_15', icon: '🎯', module: 'focus' },
            { text: "Revoir 5 flashcards", action: 'flashcards_5', icon: '🎴', module: 'flashcard' },
            { text: "Lire 1 fiche methodo organisation", action: 'coach', icon: '📋', module: 'coach' }
        ],
        desorganise: [
            { text: "Lire la fiche 'Comment reviser sans stress'", action: 'coach', icon: '🧠', module: 'coach' },
            { text: "1 session focus de 25 min", action: 'focus_25', icon: '🎯', module: 'focus' },
            { text: "Avancer Bac francais - 1 section", action: 'bac', icon: '🇫🇷', module: 'bacfrancais' }
        ],
        surcharge: [
            { text: "Respiration 4-7-8 pour decompresser", action: 'breathing', icon: '🫁', module: 'stress' },
            { text: "1 seule session focus de 15 min", action: 'focus_15', icon: '🎯', module: 'focus' },
            { text: "Revoir 5 flashcards faciles", action: 'flashcards_5', icon: '🎴', module: 'flashcard' }
        ],
        confiance_faible: [
            { text: "Lire la fiche 'Comment apprendre efficacement'", action: 'coach', icon: '🧠', module: 'coach' },
            { text: "Tenter 1 quiz pour se tester", action: 'quiz', icon: '⚡', module: 'quiz' },
            { text: "1 session focus de 25 min", action: 'focus_25', icon: '🎯', module: 'focus' }
        ],
        confiant: [
            { text: "Challenge quiz Bac francais", action: 'bac_quiz', icon: '🇫🇷', module: 'bacfrancais' },
            { text: "Maitriser 10 flashcards", action: 'flashcards_10', icon: '🎴', module: 'flashcard' },
            { text: "Session focus deep work 45 min", action: 'focus_45', icon: '🎯', module: 'focus' }
        ],
        equilibre: [
            { text: "1 session focus de 25 min", action: 'focus_25', icon: '🎯', module: 'focus' },
            { text: "Revoir 5 flashcards", action: 'flashcards_5', icon: '🎴', module: 'flashcard' },
            { text: "Explorer 1 nouveau module", action: 'explore', icon: '🗺️', module: 'coach' }
        ]
    };

    // ==================== RECOMMANDATIONS PAR PROFIL ====================
    const RECOMMENDATIONS = {
        anxieux: [
            { title: "Respire un coup", desc: "2 min de respiration et tu te sens deja mieux. Teste.", icon: '🫁', module: 'stress', priority: 'high' },
            { title: "15 min chrono", desc: "Juste 15 min. Apres t'es libre. Deal ?", icon: '🎯', module: 'focus', priority: 'medium' },
            { title: "Anti-stress mode", desc: "Des techniques qui marchent vraiment. Pas du blabla.", icon: '💆', module: 'coach', priority: 'medium' }
        ],
        procrastinateur: [
            { title: "15 min. C'est tout.", desc: "Pas 2h. Juste 15 min. Tu peux le faire les yeux fermes.", icon: '🎯', module: 'focus', priority: 'high' },
            { title: "Quelques cartes", desc: "5 flashcards pour activer le mode revision.", icon: '🎴', module: 'flashcard', priority: 'medium' },
            { title: "Le hack organisation", desc: "Comment planifier sans se prendre la tete. Ca existe.", icon: '📋', module: 'coach', priority: 'medium' }
        ],
        desorganise: [
            { title: "Ta routine en 5 min", desc: "Un planning simple qui tient. Pas un truc de robot.", icon: '📋', module: 'coach', priority: 'high' },
            { title: "1 matiere. Pas 5.", desc: "Choisis UN truc et fonce. Le reste attendra.", icon: '🎯', module: 'focus', priority: 'medium' },
            { title: "Bac francais d'abord", desc: "C'est structure, c'est clair, c'est par la.", icon: '🇫🇷', module: 'bacfrancais', priority: 'medium' }
        ],
        surcharge: [
            { title: "Stop. Respire.", desc: "T'en fais trop. Ton cerveau a besoin de 2 min de pause.", icon: '🫁', module: 'stress', priority: 'high' },
            { title: "1 seul module", desc: "Choisis UN truc. Pas trois. Moins = mieux.", icon: '🎯', module: 'focus', priority: 'medium' },
            { title: "L'art de prioriser", desc: "Tout faire c'est rien faire bien. On t'explique.", icon: '🧠', module: 'coach', priority: 'medium' }
        ],
        confiance_faible: [
            { title: "La methode Feynman", desc: "Le hack #1 pour apprendre. Si t'expliques, tu sais.", icon: '🧠', module: 'coach', priority: 'high' },
            { title: "Quiz sans pression", desc: "Juste pour voir ou t'en es. Zero jugement.", icon: '⚡', module: 'quiz', priority: 'medium' },
            { title: "Bac francais", desc: "Tout est pret. T'as juste a suivre le guide.", icon: '🇫🇷', module: 'bacfrancais', priority: 'medium' }
        ],
        confiant: [
            { title: "Quiz challenge", desc: "T'es chaud ? Prouve-le. Go quiz Bac.", icon: '🇫🇷', module: 'bacfrancais', priority: 'high' },
            { title: "Deep work 45 min", desc: "Mode beast. Concentration max. Tu geres ca.", icon: '🎯', module: 'focus', priority: 'medium' },
            { title: "Cree tes propres cartes", desc: "Les meilleures fiches c'est celles que TU fais.", icon: '🎴', module: 'flashcard', priority: 'medium' }
        ],
        equilibre: [
            { title: "25 min Pomodoro", desc: "Focus puis pause. Le combo parfait pour toi.", icon: '🎯', module: 'focus', priority: 'high' },
            { title: "Tes cartes du jour", desc: "Quelques flashcards pour ancrer tout ca.", icon: '🎴', module: 'flashcard', priority: 'medium' },
            { title: "Boost ta memoire", desc: "Des techniques de ouf que personne t'a apprises.", icon: '🧠', module: 'coach', priority: 'medium' }
        ]
    };

    // ==================== PROFILS DETAILLES ====================
    const PROFILE_DETAILS = {
        anxieux: {
            emoji: '😰',
            title: 'Stresse mais motive',
            description: "T'as envie de bien faire et ca te stresse. C'est normal et c'est meme un bon signe. On va transformer ce stress en carburant.",
            strengths: ['Motivation elevee', 'Conscience de tes objectifs', 'Capacite d\'effort'],
            improve: 'Gestion du stress',
            color: 'hot'
        },
        procrastinateur: {
            emoji: '⏰',
            title: 'Potentiel de ouf, faut juste demarrer',
            description: "Procrastiner c'est pas etre flemmard. Ton cerveau cherche le chemin facile. On va le hacker avec des micro-sessions.",
            strengths: ['Creativite', 'Adaptabilite', 'Concentration intense quand ca part'],
            improve: 'Demarrage et regularite',
            color: 'sun'
        },
        desorganise: {
            emoji: '📋',
            title: 'Plein d\'energie, faut juste canaliser',
            description: "T'as l'energie et la volonte mais tu pars dans tous les sens. Un cadre simple va tout changer. Pas un planning de robot, juste des habitudes.",
            strengths: ['Energie', 'Curiosite', 'Volonte'],
            improve: 'Organisation',
            color: 'sky'
        },
        surcharge: {
            emoji: '🤯',
            title: 'Bosseur, mais faut prioriser',
            description: "T'en fais trop. C'est admirable mais ton cerveau sature. Moins mais mieux. On va t'apprendre a choisir.",
            strengths: ['Engagement', 'Discipline', 'Serieux'],
            improve: 'Priorisation et repos',
            color: 'peach'
        },
        confiance_faible: {
            emoji: '📚',
            title: 'T\'as juste besoin de la bonne methode',
            description: "Tu sais pas par ou commencer et c'est normal. Personne t'a appris a apprendre. Les methodes existent et elles sont simples.",
            strengths: ['Humilite', 'Ouverture d\'esprit', 'Envie de progresser'],
            improve: 'Methodes d\'apprentissage',
            color: 'accent'
        },
        confiant: {
            emoji: '💪',
            title: 'Solide. Pret a tout defoncer',
            description: "T'as de bonnes bases. StudFlow va t'aider a passer au niveau superieur avec des challenges et du contenu avance.",
            strengths: ['Confiance', 'Autonomie', 'Bases solides'],
            improve: 'Aller encore plus loin',
            color: 'mint'
        },
        equilibre: {
            emoji: '⚖️',
            title: 'Bien equilibre, quelques reglages',
            description: "T'as un bon equilibre global. Quelques ajustements et t'es au top. Explore a ton rythme.",
            strengths: ['Equilibre', 'Adaptabilite', 'Bonne conscience de soi'],
            improve: 'Regularite',
            color: 'accent'
        }
    };

    // ==================== MODULE NAVIGATION MAP ====================
    // The functions reach into window.StudFlow at call time, so optional
    // modules (loaded later via the deferred bundle) are still accessible.
    const MODULE_MAP = {
        stress:      function() { window.StudFlow.stress.show(); },
        focus:       function() { window.StudFlow.focus.show(); },
        coach:       function() { window.StudFlow.coach.show(); },
        flashcard:   function() { window.StudFlow.flashcards.start(); },
        quiz:        function() { window.StudFlow.quiz.start(); },
        bacfrancais: function() { window.StudFlow.bacfrancais.show(); },
        planbac:     function() { window.StudFlow.planbac.show(); },
        urgence:     function() { window.StudFlow.urgence.show(); },
        confiance:   function() { window.StudFlow.confiance.show(); },
        conseils:    function() { window.StudFlow.conseils.show(); },
        generators:  function() { window.StudFlow.app.showScreen('generators'); },
        upload:      function() { window.StudFlow.app.showScreen('upload'); },
        breathing:   function() { window.StudFlow.app.showScreen('breathing'); },
        stats:       function() { window.StudFlow.stats.show(); },
        badges:      function() { if (window.StudFlow.badges) window.StudFlow.badges.show(); },
        missions:    function() { if (window.StudFlow.missions) window.StudFlow.missions.show(); },
        matieres:    function() { if (window.StudFlow.subjects) window.StudFlow.subjects.showHub(); },
        timeline:    function() { if (window.StudFlow.timeline) window.StudFlow.timeline.show(); },
        annales:     function() { if (window.StudFlow.annales) window.StudFlow.annales.show(); },
        challenges:  function() { if (window.StudFlow.challenges) window.StudFlow.challenges.show(); },
        chrono:      function() { if (window.StudFlow.chronoMode) window.StudFlow.chronoMode.show(); },
        exam:        function() { if (window.StudFlow.examMode) window.StudFlow.examMode.show(); },
        sr:          function() { window.StudFlow.flashcards.start('sr'); },
        jourbac:     function() { if (window.StudFlow.jourBac) window.StudFlow.jourBac.show(); }
    };

    window.StudFlow = window.StudFlow || {};
    window.StudFlow.dashboardData = {
        MOTIVATION_MESSAGES: MOTIVATION_MESSAGES,
        COACH_MESSAGES: COACH_MESSAGES,
        DAILY_OBJECTIVES: DAILY_OBJECTIVES,
        RECOMMENDATIONS: RECOMMENDATIONS,
        PROFILE_DETAILS: PROFILE_DETAILS,
        MODULE_MAP: MODULE_MAP
    };
})();
