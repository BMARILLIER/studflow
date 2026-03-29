// dashboard.js — Tableau de bord intelligent et personnalise
(function() {

    // ==================== MESSAGES MOTIVATION ====================
    const MOTIVATION_MESSAGES = [
        "T'as ouvert l'appli. C'est deja 90% du taff.",
        "Meme 10 min ca compte. Les gros cerveaux revisent pas 12h.",
        "Ton futur toi va kiffer pour ce que tu fais la.",
        "Pas besoin d'etre parfait. Juste regulier. Et t'es la.",
        "Y'a des milliers d'eleves qui revisent en meme temps que toi. T'es pas seul(e).",
        "La motivation c'est un mythe. L'habitude c'est la vraie arme.",
        "Chaque carte que tu maitrises = un neurone de plus pret pour le Bac.",
        "T'as le droit de faire une pause. Revenir frais c'est pas tricher.",
        "Les premiers de la classe? Ils sont juste reguliers. Comme toi.",
        "Aujourd'hui tu plantes. En juin tu recoltes.",
        "10 min > 0 min. Toujours.",
        "Le Bac c'est un marathon, pas un sprint. Et t'es en train de courir.",
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
    const MODULE_MAP = {
        stress: function() { window.StudFlow.stress.show(); },
        focus: function() { window.StudFlow.focus.show(); },
        coach: function() { window.StudFlow.coach.show(); },
        flashcard: function() { window.StudFlow.flashcards.start(); },
        quiz: function() { window.StudFlow.quiz.start(); },
        bacfrancais: function() { window.StudFlow.bacfrancais.show(); },
        planbac: function() { window.StudFlow.planbac.show(); },
        urgence: function() { window.StudFlow.urgence.show(); },
        confiance: function() { window.StudFlow.confiance.show(); },
        conseils: function() { window.StudFlow.conseils.show(); },
        generators: function() { window.StudFlow.app.showScreen('generators'); },
        upload: function() { window.StudFlow.app.showScreen('upload'); },
        breathing: function() { window.StudFlow.app.showScreen('breathing'); },
        stats: function() { window.StudFlow.stats.show(); },
        badges: function() { if (window.StudFlow.badges) window.StudFlow.badges.show(); },
        missions: function() { if (window.StudFlow.missions) window.StudFlow.missions.show(); },
        matieres: function() { if (window.StudFlow.subjects) window.StudFlow.subjects.showHub(); },
        timeline: function() { if (window.StudFlow.timeline) window.StudFlow.timeline.show(); },
        annales: function() { if (window.StudFlow.annales) window.StudFlow.annales.show(); },
        challenges: function() { if (window.StudFlow.challenges) window.StudFlow.challenges.show(); },
        chrono: function() { if (window.StudFlow.chronoMode) window.StudFlow.chronoMode.show(); },
        sr: function() { window.StudFlow.flashcards.start('sr'); }
    };

    function goTo(moduleId) {
        // Handle subject chips: subj_maths, subj_philo, etc.
        if (moduleId && moduleId.indexOf('subj_') === 0) {
            var subjId = moduleId.replace('subj_', '');
            if (window.StudFlow.subjects) {
                window.StudFlow.subjects.showSubject(subjId);
            }
            return;
        }
        var fn = MODULE_MAP[moduleId];
        if (fn) {
            fn();
        } else {
            window.StudFlow.app.showScreen(moduleId);
        }
    }

    // ==================== HELPERS ====================
    function getProfile() {
        return window.StudFlow.storage.getUserProfile();
    }

    function getMainProfile() {
        var profile = getProfile();
        return (profile && profile.mainProfile) ? profile.mainProfile : 'equilibre';
    }

    function getGamificationStats() {
        if (window.StudFlow.gamification) {
            return window.StudFlow.gamification.getStats();
        }
        return { xp: 0, level: 1, streak: 0, totalActions: 0 };
    }

    function getFocusStats() {
        return window.StudFlow.storage.loadData('focusStats', { sessions: 0, totalMinutes: 0, streak: 0 });
    }

    function getAppState() {
        return window.StudFlow.app.getState();
    }

    function getDailyData() {
        var today = new Date().toDateString();
        var data = window.StudFlow.storage.loadData('dailyDashboard', {
            date: null,
            motivationIndex: -1,
            objectivesCompleted: [],
            objectiveSet: null
        });
        // Reset if it's a new day
        if (data.date !== today) {
            data = {
                date: today,
                motivationIndex: Math.floor(Math.random() * MOTIVATION_MESSAGES.length),
                objectivesCompleted: [],
                objectiveSet: null
            };
            saveDailyData(data);
        }
        return data;
    }

    function saveDailyData(data) {
        window.StudFlow.storage.saveData('dailyDashboard', data);
    }

    function getGreeting() {
        var h = new Date().getHours();
        if (h < 12) return 'Bonjour';
        if (h < 18) return 'Bon aprem\'';
        return 'Bonsoir';
    }

    // ==================== RENDER PRINCIPAL ====================
    function render() {
        var container = document.getElementById('smart-dashboard');
        if (!container) return;

        var profileKey = getMainProfile();
        var profileData = PROFILE_DETAILS[profileKey] || PROFILE_DETAILS.equilibre;
        var daily = getDailyData();
        var focusStats = getFocusStats();
        var gamStats = getGamificationStats();
        var state = getAppState();
        var recs = RECOMMENDATIONS[profileKey] || RECOMMENDATIONS.equilibre;
        var objectives = getObjectivesForToday(profileKey);
        var greeting = getGreeting();

        // Calculate progress stats
        var totalCards = (state.flashcards ? state.flashcards.length : 0)
                       + (state.customFlashcards ? state.customFlashcards.length : 0);
        var masteredCards = state.masteredCards || 0;
        var totalQuiz = (state.quizQuestions ? state.quizQuestions.length : 0)
                       + (state.customQuiz ? state.customQuiz.length : 0);

        // Daily Goal block (warm unique objective)
        var dailyGoalHTML = '';
        if (window.StudFlow.dailyGoal) {
            dailyGoalHTML = window.StudFlow.dailyGoal.renderDashboardBlock();
        }

        // Secondary zone blocks
        var srBlockHTML = '';
        if (window.StudFlow.spacedRepetition) {
            srBlockHTML = window.StudFlow.spacedRepetition.renderDashboardBlock();
        }

        var missionsWidgetHTML = '';
        if (window.StudFlow.missions) {
            missionsWidgetHTML = window.StudFlow.missions.renderDashboardWidget();
        }

        var timelineWidgetHTML = '';
        if (window.StudFlow.timeline) {
            timelineWidgetHTML = window.StudFlow.timeline.renderDashboardWidget();
        }

        var premiumBadgeHTML = '';
        if (window.StudFlow.premium) {
            premiumBadgeHTML = '<div class="dash-section dash-premium-badge-row">'
                + window.StudFlow.premium.renderBadge()
                + '</div>';
        }

        // ===== PRIMARY ZONE (5 focused sections) =====
        // 1. Bac countdown
        // 2. Main action card (Session: Focus / Flashcards / Quiz)
        // 3. Mission du jour
        // 4. Gamification (XP / Streak / Badges)
        // 5. Progression (adaptive mastery + stats)

        var dailyMissionHTML = '';
        if (window.StudFlow.dailyMission) {
            dailyMissionHTML = window.StudFlow.dailyMission.renderCard();
        }

        var adaptiveHTML = '';
        if (window.StudFlow.adaptive) {
            adaptiveHTML = window.StudFlow.adaptive.renderCard();
        }

        var dailySessionHTML = '';
        if (window.StudFlow.dailySession) {
            dailySessionHTML = window.StudFlow.dailySession.renderDashboardButton();
        }

        var dsDemainHTML = '';
        if (window.StudFlow.dsDemain) {
            dsDemainHTML = window.StudFlow.dsDemain.renderDashboardLink();
        }

        var subjectPickerCTA = '';
        if (window.StudFlow.subjectPicker) {
            subjectPickerCTA = window.StudFlow.subjectPicker.renderDashboardCTA();
        }

        var errorNbHTML = '';
        if (window.StudFlow.errorNotebook) {
            errorNbHTML = window.StudFlow.errorNotebook.renderDashboardWidget();
        }

        var weeklyReportBannerHTML = '';
        if (window.StudFlow.weeklyReport) {
            weeklyReportBannerHTML = window.StudFlow.weeklyReport.renderDashboardBanner();
        }

        // ===== ZONE 1: HERO (countdown + CTA + actions — above the fold) =====
        var essentialHTML = ''
            + renderBetaBanner()
            + weeklyReportBannerHTML
            + subjectPickerCTA
            + renderHeroBac(gamStats)
            + renderHeroActions()
            + renderSubjectStrip();

        // ===== ZONE 2: ENGAGEMENT (streak + mission) =====
        var engagementHTML = ''
            + renderStreakAlert(gamStats)
            + renderStreakCard(gamStats)
            + dailyMissionHTML
            + dailyGoalHTML;

        // ===== ZONE 3: ACTIONS RAPIDES =====
        var actionsHTML = '<div class="dash-quick-actions">'
            + renderChallengeCard()
            + renderChronoCard()
            + '</div>';

        // ===== ZONE 4: INSIGHTS =====
        var insightsHTML = ''
            + renderDailyTip()
            + adaptiveHTML
            + errorNbHTML;

        var primaryHTML = essentialHTML + engagementHTML + actionsHTML + insightsHTML;

        // ===== EXPLORE BUTTON (replaces cluttered collapsible) =====
        var exploreHTML = '<div class="dash-section dash-explore-row">'
            + '<button class="dash-explore-btn" data-action="dashboard.openExplore">'
            + '<span>\uD83D\uDD0D Explorer tous les outils</span>'
            + '<span class="dash-explore-arrow">\u2192</span>'
            + '</button>'
            + '</div>';

        container.innerHTML = primaryHTML + exploreHTML;
    }

    // ==================== HERO CTA (import PDF) ====================
    function renderHeroCTA() {
        return '<div class="dash-section dash-hero-cta">'
            + '<div class="dash-hero-cta-card" data-action="dashboard.goTo" data-param="upload">'
            + '<div class="dash-hero-cta-icon">📄</div>'
            + '<div class="dash-hero-cta-content">'
            + '<h3>Importe ton PDF</h3>'
            + '<p>Glisse ton cours et genere quiz, flashcards, fiches en 30 secondes.</p>'
            + '</div>'
            + '<span class="dash-hero-cta-arrow">→</span>'
            + '</div>'
            + '</div>';
    }

    // ==================== PROF IA CARD (visible when PDF imported) ====================
    function renderProfCard(state) {
        if (!state.pdfText || !state.pdfText.length) return '';
        var name = state.fileName || 'Document';
        return '<div class="dash-section dash-prof-card" data-action="profChat.show">'
            + '<div class="dash-prof-icon">🎓</div>'
            + '<div class="dash-prof-content">'
            + '<h3>Prof IA</h3>'
            + '<p>Pose une question sur <strong>' + (window.StudFlow.app.escapeText ? window.StudFlow.app.escapeText(name) : name) + '</strong></p>'
            + '</div>'
            + '<span class="dash-prof-arrow">→</span>'
            + '</div>';
    }

    // ==================== NEXT ACTION CARD ====================
    function getNextAction() {
        // Read daily mission state to know what's been done today
        var missionState = window.StudFlow.storage.loadData('daily_mission', null);
        var todayKey = new Date().toISOString().slice(0, 10);

        // Reset if not today's data
        if (!missionState || missionState.date !== todayKey) {
            missionState = { date: todayKey, focus: 0, flashcards: 0, quiz: 0, completed: false };
        }

        var focusDone = missionState.focus >= 1;
        var flashcardsDone = missionState.flashcards >= 5;
        var quizDone = missionState.quiz >= 3;

        if (missionState.completed || (focusDone && flashcardsDone && quizDone)) {
            return { type: 'done' };
        }

        if (!focusDone) {
            return {
                type: 'action',
                icon: '🎯',
                title: 'Session Focus de 25 minutes',
                desc: 'Aujourd\'hui tu peux commencer par une session Focus de 25 minutes.',
                btnLabel: 'Commencer la session',
                action: 'focus',
                accent: 'sun'
            };
        }

        if (!flashcardsDone) {
            return {
                type: 'action',
                icon: '🎴',
                title: 'Reviser tes flashcards',
                desc: 'Ta session focus est faite ! Enchaine avec une revision de flashcards.',
                btnLabel: 'Reviser mes cartes',
                action: 'flashcard',
                accent: 'mint'
            };
        }

        // Quiz remaining
        return {
            type: 'action',
            icon: '⚡',
            title: 'Tester tes connaissances',
            desc: 'Focus et flashcards termines ! Finis avec un quiz rapide.',
            btnLabel: 'Lancer le quiz',
            action: 'quiz',
            accent: 'accent'
        };
    }

    function renderNextAction() {
        var next = getNextAction();
        var coachMsg = COACH_MESSAGES[Math.floor(Math.random() * COACH_MESSAGES.length)];

        if (next.type === 'done') {
            return '<div class="dash-section dash-next-action dash-next-done">'
                + '<div class="dash-next-header">'
                + '<span class="dash-next-icon" aria-hidden="true">✅</span>'
                + '<h3 class="dash-next-title">Bravo !</h3>'
                + '</div>'
                + '<p class="dash-next-desc">Tu as complete tes activites aujourd\'hui. Reviens demain pour continuer ta serie !</p>'
                + '<p class="dash-next-coach">' + coachMsg + '</p>'
                + '</div>';
        }

        return '<div class="dash-section dash-next-action">'
            + '<div class="dash-next-header">'
            + '<span class="dash-next-icon" aria-hidden="true">' + next.icon + '</span>'
            + '<div>'
            + '<h3 class="dash-next-title">Ta prochaine etape</h3>'
            + '<p class="dash-next-desc">' + next.desc + '</p>'
            + '</div>'
            + '</div>'
            + '<button class="dash-next-btn dash-next-btn--' + next.accent + '" data-action="dashboard.goTo" data-param="' + next.action + '">'
            + next.btnLabel + ' →'
            + '</button>'
            + '<p class="dash-next-coach">' + coachMsg + '</p>'
            + '</div>';
    }

    // ==================== STREAK ALERT ====================
    function renderStreakAlert(gamStats) {
        var streak = gamStats.streak || 0;
        if (streak < 2) return ''; // No streak to lose

        // Only show alert after 18h if daily mission not completed
        var hour = new Date().getHours();
        if (hour < 18) return '';

        var dm = window.StudFlow.dailyMission;
        if (!dm) return '';
        var dmState = window.StudFlow.storage.loadData('studflow_daily_mission', null);
        if (dmState && dmState.completed) return ''; // Mission done, streak safe

        return '<div class="dash-section streak-alert">'
            + '<div class="streak-alert-content">'
            + '<span class="streak-alert-icon">\u26A0\uFE0F</span>'
            + '<div class="streak-alert-text">'
            + '<strong>Tu vas perdre ton streak de ' + streak + ' jours !</strong>'
            + '<span>Complete ta mission avant minuit.</span>'
            + '</div>'
            + '</div>'
            + '<button class="streak-alert-btn" data-action="dashboard.goTo" data-param="flashcard">'
            + 'Sauver mon streak \u2192'
            + '</button>'
            + '</div>';
    }

    // ==================== HERO BAC (countdown + CTA + stats) ====================
    function renderHeroBac(gamStats) {
        // Countdown
        var now = new Date();
        var bacDate = new Date(now.getFullYear(), 5, 18); // June 18
        if (now > new Date(now.getFullYear(), 6, 5)) {
            bacDate = new Date(now.getFullYear() + 1, 5, 18);
        }
        var days = Math.max(0, Math.ceil((bacDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)));

        // Urgency
        var urgencyClass = 'hero-calm';
        var msg = 'Tu as le temps. Pose les bases.';
        if (days <= 10) {
            urgencyClass = 'hero-critical';
            msg = 'Derniere ligne droite. Tu es pret(e).';
        } else if (days <= 30) {
            urgencyClass = 'hero-urgent';
            msg = '10 min maintenant = des points en plus en juin.';
        } else if (days <= 90) {
            urgencyClass = 'hero-soon';
            msg = 'Le Bac approche. Chaque jour compte.';
        }

        // Stats
        var streak = gamStats.streak || 0;
        var xp = gamStats.xp || 0;
        var pct = gamStats.progressPct || 0;
        var level = gamStats.level || 1;

        var statsHTML = '<div class="hero-bac-stats">';
        if (streak > 0) statsHTML += '<span class="hero-bac-stat">\uD83D\uDD25 ' + streak + 'j</span>';
        if (xp > 0) statsHTML += '<span class="hero-bac-stat">\u2728 ' + xp + ' XP</span>';
        statsHTML += '</div>';

        // Continue CTA
        var sr = window.StudFlow.spacedRepetition;
        var dueCount = sr ? sr.getDueCount() : 0;
        var ctaAction = dueCount > 0 ? 'sr' : 'flashcard';
        var ctaLabel = dueCount > 0 ? 'Reviser ' + dueCount + ' carte' + (dueCount > 1 ? 's' : '') : 'Commencer ma session';

        return '<div class="dash-section hero-bac ' + urgencyClass + '">'
            + '<div class="hero-bac-countdown">'
            + '<span class="hero-bac-fire">\uD83D\uDD25</span>'
            + '<span class="hero-bac-days">J-' + days + '</span>'
            + '<span class="hero-bac-label">avant le Bac</span>'
            + '</div>'
            + '<p class="hero-bac-msg">' + msg + '</p>'
            + '<button class="hero-bac-cta" data-action="dashboard.goTo" data-param="' + ctaAction + '">'
            + ctaLabel + ' \u2192'
            + '</button>'
            + statsHTML
            + '</div>';
    }

    // ==================== CONTINUE BUTTON ====================
    function renderContinueButton() {
        // Determine last activity to resume
        var sr = window.StudFlow.spacedRepetition;
        var dueCount = sr ? sr.getDueCount() : 0;
        var state = getAppState();
        var hasPdf = !!(state.pdfText && state.pdfText.length > 50);
        var hasCards = (state.flashcards && state.flashcards.length > 0)
            || (state.customFlashcards && state.customFlashcards.length > 0);

        // Pick the best "continue" action
        var action = '';
        var label = '';
        var icon = '';

        if (dueCount > 0) {
            action = 'sr';
            label = dueCount + ' carte' + (dueCount > 1 ? 's' : '') + ' a reviser';
            icon = '🔄';
        } else if (hasCards) {
            action = 'flashcard';
            label = 'Continuer les flashcards';
            icon = '🎴';
        } else if (hasPdf) {
            action = 'flashcard';
            label = 'Reviser ton cours';
            icon = '📄';
        } else {
            return ''; // Nothing to continue
        }

        return '<div class="dash-section dash-continue">'
            + '<button class="dash-continue-btn" data-action="dashboard.goTo" data-param="' + action + '">'
            + '<span class="dash-continue-icon">' + icon + '</span>'
            + '<span class="dash-continue-text">'
            + '<strong>Continuer</strong>'
            + '<span>' + label + '</span>'
            + '</span>'
            + '<span class="dash-continue-arrow">\u2192</span>'
            + '</button>'
            + '</div>';
    }

    // ==================== STREAK + XP CARD ====================
    function renderStreakCard(gamStats) {
        var streak = gamStats.streak || 0;
        var xp = gamStats.xp || 0;
        var level = gamStats.level || 1;
        var nextXp = gamStats.nextLevelXp || 100;
        var pct = gamStats.progressPct || 0;

        if (streak === 0 && xp === 0) return '';

        var streakHTML = streak > 0
            ? '<div class="dash-streak-pill">'
            + '<span class="dash-streak-fire">\uD83D\uDD25</span>'
            + '<span class="dash-streak-count">' + streak + ' jour' + (streak > 1 ? 's' : '') + '</span>'
            + '</div>'
            : '';

        var xpHTML = '<div class="dash-xp-mini">'
            + '<div class="dash-xp-mini-bar"><div class="dash-xp-mini-fill" style="width:' + pct + '%"></div></div>'
            + '<span class="dash-xp-mini-label">Niv. ' + level + ' \u00B7 ' + xp + '/' + nextXp + ' XP</span>'
            + '</div>';

        return '<div class="dash-section dash-engagement-row">'
            + streakHTML + xpHTML
            + '</div>';
    }

    // ==================== HERO: "QUE VEUX-TU FAIRE ?" ====================
    function renderHeroActions() {
        var subtexts = [
            'Revise moins. Retiens plus.',
            '10 min/jour. Bac dans la poche.',
            'Chaque jour compte. Lance-toi.',
            'Ton futur toi va kiffer.',
            'Meme 5 min, ca change tout.'
        ];
        var sub = subtexts[Math.floor(Math.random() * subtexts.length)];

        return '<div class="dash-section dash-hero-question">'
            + '<h2 class="dash-hero-title">Que veux-tu faire aujourd\'hui ?</h2>'
            + '<p class="dash-hero-sub">' + sub + '</p>'
            + '<div class="dash-hero-grid">'
            + '<button class="dash-hero-btn" data-action="dashboard.goTo" data-param="upload">'
            + '<span class="dash-hero-icon">📄</span>'
            + '<span class="dash-hero-label">Importer un cours</span>'
            + '</button>'
            + '<button class="dash-hero-btn" data-action="dashboard.goTo" data-param="flashcard">'
            + '<span class="dash-hero-icon">🎴</span>'
            + '<span class="dash-hero-label">Reviser</span>'
            + '</button>'
            + '<button class="dash-hero-btn" data-action="dashboard.goTo" data-param="quiz">'
            + '<span class="dash-hero-icon">⚡</span>'
            + '<span class="dash-hero-label">S\'entrainer</span>'
            + '</button>'
            + '</div>'
            + '</div>';
    }

    // ==================== MATIERES SCROLLABLES ====================
    function renderSubjectStrip() {
        var subjects = window.StudFlow.subjects ? window.StudFlow.subjects.getAll() : [];
        if (subjects.length === 0) return '';

        var cardsHTML = '';
        for (var i = 0; i < subjects.length; i++) {
            var s = subjects[i];
            cardsHTML += '<button class="dash-subj-chip" data-action="dashboard.goTo" data-param="subj_' + s.id + '">'
                + '<span class="dash-subj-chip-icon">' + (s.icon || '📘') + '</span>'
                + '<span class="dash-subj-chip-name">' + (s.name || s.id) + '</span>'
                + '</button>';
        }

        return '<div class="dash-section dash-subjects-strip">'
            + '<div class="dash-subjects-scroll">'
            + cardsHTML
            + '</div>'
            + '</div>';
    }

    // ==================== SESSION CARD (focus + extras) ====================
    function renderSessionCard() {
        return '<div class="dash-section dash-session-card">'
            + '<h3 class="dash-session-title">Outils</h3>'
            + '<div class="dash-session-grid">'
            + '<button class="dash-session-btn focus" data-action="dashboard.goTo" data-param="focus">'
            + '<span class="dash-session-icon">🎯</span>'
            + '<span class="dash-session-label">Focus</span>'
            + '</button>'
            + '<button class="dash-session-btn matieres" data-action="dashboard.goTo" data-param="matieres">'
            + '<span class="dash-session-icon">📚</span>'
            + '<span class="dash-session-label">Matieres</span>'
            + '</button>'
            + '<button class="dash-session-btn flashcard" data-action="dashboard.goTo" data-param="coach">'
            + '<span class="dash-session-icon">🧠</span>'
            + '<span class="dash-session-label">Coach</span>'
            + '</button>'
            + '<button class="dash-session-btn quiz" data-action="dashboard.goTo" data-param="stress">'
            + '<span class="dash-session-icon">💆</span>'
            + '<span class="dash-session-label">Zen</span>'
            + '</button>'
            + '</div>'
            + '</div>';
    }

    // ==================== CHALLENGE CARD ====================
    function renderChallengeCard() {
        return '<div class="dash-section dash-challenge-cta" data-action="dashboard.goTo" data-param="challenges">'
            + '<div class="dash-challenge-icon">⚔️</div>'
            + '<div class="dash-challenge-content">'
            + '<h3>Defier un ami</h3>'
            + '<p>Cree un quiz et compare ton score avec tes amis !</p>'
            + '</div>'
            + '<span class="dash-challenge-arrow">→</span>'
            + '</div>';
    }

    // ==================== CHRONO CARD ====================
    function renderChronoCard() {
        var best = window.StudFlow.chronoMode ? window.StudFlow.chronoMode.getBestScore() : 0;
        var todayDone = window.StudFlow.chronoMode ? window.StudFlow.chronoMode.hasPlayedToday() : false;
        var todayScore = window.StudFlow.chronoMode ? window.StudFlow.chronoMode.getTodayScore() : null;
        var subLabel = todayDone ? ('Score du jour : ' + todayScore + ' pts') : '60s pour un max de points !';
        var bestLabel = best > 0 ? (' \u00B7 Record : ' + best + ' pts') : '';
        return '<div class="dash-section dash-chrono-cta" data-action="screen:chrono">'
            + '<div class="dash-challenge-icon">\u23F1\uFE0F</div>'
            + '<div class="dash-challenge-content">'
            + '<h3>Mode Chrono</h3>'
            + '<p>' + subLabel + bestLabel + '</p>'
            + '</div>'
            + '<span class="dash-challenge-arrow">\u2192</span>'
            + '</div>';
    }

    // ==================== DAILY TIP ====================
    var DASHBOARD_TIPS = [
        { icon: '🧠', tip: 'Explique a voix haute ce que tu apprends. Si tu galeres, c\'est la qu\'il faut reviser.' },
        { icon: '😴', tip: 'Revise juste avant de dormir. Ton cerveau stocke les infos pendant la nuit.' },
        { icon: '📱', tip: 'Ton tel dans une autre piece = +20% de concentration. Teste, tu verras.' },
        { icon: '✍️', tip: 'Ecrire a la main active 5x plus de zones du cerveau que taper au clavier.' },
        { icon: '🏃', tip: '10 min de marche entre 2 sessions = +25% de concentration. Ton cerveau a besoin d\'oxygene.' },
        { icon: '💧', tip: 'Ton cerveau = 75% d\'eau. Bois un verre avant de bosser.' },
        { icon: '🔁', tip: 'Tu oublies 80% en 24h. Reviens demain et tu retiens tout.' },
        { icon: '❌', tip: 'Se tromper active l\'hippocampe 3x plus qu\'une bonne reponse. Les erreurs = progression.' },
        { icon: '🎯', tip: '"Juste 5 min." Apres 5 min ton cerveau est lance et tu continues.' },
        { icon: '📝', tip: 'Se tester est 2x plus efficace que relire. Les quiz > les cours.' }
    ];

    function renderDailyTip() {
        // Pick tip based on day of year (deterministic)
        var dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
        var tip = DASHBOARD_TIPS[dayOfYear % DASHBOARD_TIPS.length];

        return '<div class="dash-section dash-daily-tip">'
            + '<div class="dash-tip-icon">' + tip.icon + '</div>'
            + '<p class="dash-tip-text">' + tip.tip + '</p>'
            + '</div>';
    }

    // ==================== GAMIFICATION BAR (XP + Streak + Badges) ====================
    function renderGamificationBar(gamStats) {
        var xp = gamStats.xp || 0;
        var streak = gamStats.streak || 0;
        var level = gamStats.level || 1;

        return '<div class="dash-section dash-gamification">'
            + '<div class="dash-gam-row">'
            + '<div class="dash-gam-item">'
            + '<span class="dash-gam-icon">✨</span>'
            + '<span class="dash-gam-val">' + xp + ' XP</span>'
            + '<span class="dash-gam-sub">Niveau ' + level + '</span>'
            + '</div>'
            + '<div class="dash-gam-item">'
            + '<span class="dash-gam-icon">🔥</span>'
            + '<span class="dash-gam-val">' + streak + ' jour' + (streak > 1 ? 's' : '') + '</span>'
            + '<span class="dash-gam-sub">Serie</span>'
            + '</div>'
            + '<div class="dash-gam-item clickable" data-action="dashboard.goTo" data-param="badges">'
            + '<span class="dash-gam-icon">🏅</span>'
            + '<span class="dash-gam-val">Badges</span>'
            + '<span class="dash-gam-sub">Voir &rarr;</span>'
            + '</div>'
            + '</div>'
            + '</div>';
    }

    // ==================== ADVANCED TOOLS ====================
    function renderAdvancedTools() {
        return '';
    }

    // ==================== QUICK STATS (3 compact) ====================
    function renderQuickStats(focusStats, gamStats, masteredCards, totalCards) {
        var sessions = focusStats.sessions || 0;
        var streak = gamStats.streak || 0;
        var cardLabel = totalCards > 0 ? (masteredCards + '/' + totalCards) : '0';

        return '<div class="dash-section dash-quick-stats">'
            + '<div class="dash-qstats-row">'
            + '<div class="dash-qstat">'
            + '<div class="dash-qstat-val">' + sessions + '</div>'
            + '<div class="dash-qstat-label">Sessions focus</div>'
            + '</div>'
            + '<div class="dash-qstat">'
            + '<div class="dash-qstat-val">' + cardLabel + '</div>'
            + '<div class="dash-qstat-label">Cartes maitrisees</div>'
            + '</div>'
            + '<div class="dash-qstat">'
            + '<div class="dash-qstat-val">' + streak + '<span class="dash-qstat-fire">🔥</span></div>'
            + '<div class="dash-qstat-label">Serie jours</div>'
            + '</div>'
            + '</div>'
            + '</div>';
    }

    // ==================== CONTENT SUMMARY ====================
    function renderContentSummary(state) {
        var flashCount = (state.flashcards ? state.flashcards.length : 0)
                        + (state.customFlashcards ? state.customFlashcards.length : 0);
        var quizCount = (state.quizQuestions ? state.quizQuestions.length : 0)
                       + (state.customQuiz ? state.customQuiz.length : 0);
        var fileName = window.StudFlow.storage.loadData('pdfFileName', '');

        if (flashCount === 0 && quizCount === 0 && !fileName) return '';

        var items = [];
        if (flashCount > 0) items.push('<span class="dash-content-tag">🎴 ' + flashCount + ' flashcard' + (flashCount > 1 ? 's' : '') + '</span>');
        if (quizCount > 0) items.push('<span class="dash-content-tag">⚡ ' + quizCount + ' question' + (quizCount > 1 ? 's' : '') + ' quiz</span>');

        var fileLabel = fileName ? '<p class="dash-content-file">Depuis : ' + window.StudFlow.app.escapeText(fileName) + '.pdf</p>' : '';

        return '<div class="dash-section dash-content-summary">'
            + '<h3 class="dash-section-title">Tes contenus</h3>'
            + '<div class="dash-content-tags">' + items.join('') + '</div>'
            + fileLabel
            + '</div>';
    }

    // ==================== TOGGLE MORE ====================
    function toggleMore() {
        // Legacy — kept for compatibility
        openExplore();
    }

    function openExplore() {
        // Remove existing drawer if any
        var existing = document.getElementById('explore-drawer');
        if (existing) { existing.remove(); return; }

        var items = [
            { icon: '\uD83D\uDCDA', label: 'Matieres', action: 'matieres' },
            { icon: '\uD83D\uDCDC', label: 'Annales Bac', action: 'annales' },
            { icon: '\uD83E\uDDE0', label: 'Coach IA', action: 'coach' },
            { icon: '\uD83C\uDFAF', label: 'Session Focus', action: 'focus' },
            { icon: '\uD83D\uDCA6', label: 'Anti-stress', action: 'stress' },
            { icon: '\uD83D\uDCC5', label: 'Plan Bac', action: 'planbac' },
            { icon: '\uD83D\uDCCA', label: 'Progression', action: 'stats' },
            { icon: '\uD83C\uDFC5', label: 'Badges', action: 'badges' },
            { icon: '\uD83C\uDFAF', label: 'Missions', action: 'missions' },
            { icon: '\u2699\uFE0F', label: 'Generateurs', action: 'generators' },
            { icon: '\uD83D\uDCD5', label: 'Carnet erreurs', action: 'screen:errors' },
            { icon: '\u2753', label: 'Aide', action: 'screen:aide' }
        ];

        var grid = items.map(function(item) {
            var da = item.action.indexOf('screen:') === 0 ? item.action : 'dashboard.goTo';
            var dp = item.action.indexOf('screen:') === 0 ? '' : item.action;
            return '<button class="explore-item" data-action="' + da + '"' + (dp ? ' data-param="' + dp + '"' : '') + '>'
                + '<span class="explore-item-icon">' + item.icon + '</span>'
                + '<span class="explore-item-label">' + item.label + '</span>'
                + '</button>';
        }).join('');

        var drawer = document.createElement('div');
        drawer.id = 'explore-drawer';
        drawer.className = 'explore-drawer-overlay';
        drawer.innerHTML = '<div class="explore-drawer">'
            + '<div class="explore-drawer-header">'
            + '<h3>Explorer</h3>'
            + '<button class="explore-drawer-close" data-action="dashboard.closeExplore">\u2715</button>'
            + '</div>'
            + '<div class="explore-drawer-grid">' + grid + '</div>'
            + '</div>';

        // Close on overlay click
        drawer.addEventListener('click', function(e) {
            if (e.target === drawer) closeExplore();
        });

        document.body.appendChild(drawer);
    }

    function closeExplore() {
        var el = document.getElementById('explore-drawer');
        if (el) el.remove();
    }

    // ==================== BETA BANNER ====================
    function renderBetaBanner() {
        if (localStorage.getItem('studflow_beta_banner_dismissed')) return '';

        return '<div class="dash-section dash-beta-banner" id="beta-banner">'
            + '<button class="dash-beta-close" data-action="dashboard.dismissBetaBanner" aria-label="Fermer">&times;</button>'
            + '<div class="dash-beta-summary" data-action="dashboard.toggleBetaBanner">'
            + '<span class="dash-beta-chip">Beta</span>'
            + '<span class="dash-beta-summary-text">Tes retours nous aident</span>'
            + '<span class="dash-beta-chevron">&#x25BC;</span>'
            + '</div>'
            + '<div class="dash-beta-detail">'
            + '<p class="dash-beta-text">StudFlow est en version beta. Tes retours nous aident a ameliorer l\'application.</p>'
            + '<div class="dash-beta-actions">'
            + '<button class="dash-beta-btn secondary" data-action="feedback:bug-then-show">Signaler un probleme</button>'
            + '<button class="dash-beta-btn primary" data-action="feedback.show">Donner un avis</button>'
            + '</div>'
            + '</div>'
            + '</div>';
    }

    function dismissBetaBanner() {
        localStorage.setItem('studflow_beta_banner_dismissed', '1');
        var el = document.getElementById('beta-banner');
        if (el) el.remove();
    }

    function toggleBetaBanner() {
        var el = document.getElementById('beta-banner');
        if (el) el.classList.toggle('beta-expanded');
    }

    // ==================== GREETING BAR ====================
    function renderGreetingBar(greeting, gamStats) {
        var streak = gamStats.streak || 0;
        var level = gamStats.level || 1;

        // Coach-powered greeting message (profile-aware)
        var timeMsg = '';
        var profile = window.StudFlow.storage.getUserProfile();

        // First visit after onboarding: reference their profile
        if (profile && profile.behavior && !localStorage.getItem('studflow_first_coach_done')) {
            localStorage.setItem('studflow_first_coach_done', '1');
            var ws = profile.behavior.consistency;
            var stress = profile.behavior.stressLevel;
            if (ws === 'low') timeMsg = 'Tu m\'as dit que tu procrastines : on commence petit aujourd\'hui.';
            else if (stress === 'high') timeMsg = 'Tu m\'as dit que tu stresses : on va y aller doucement.';
            else if (profile.behavior.confidence === 'low') timeMsg = 'Tu doutes un peu ? Normal. On avance ensemble.';
        }

        if (!timeMsg && window.StudFlow.coachEngine) {
            timeMsg = window.StudFlow.coachEngine.getCoachMessage(profile, { moment: 'start' });
        }
        if (!timeMsg) {
            var hour = new Date().getHours();
            if (hour < 12) timeMsg = 'Bonne session ce matin.';
            else if (hour < 18) timeMsg = 'L\'apres-midi parfait pour reviser.';
            else timeMsg = 'Session du soir, la plus efficace.';
        }

        var streakBadge = streak > 0
            ? '<span class="dash-greet-streak">🔥 ' + streak + 'j</span>'
            : '';

        return '<div class="dash-greet">'
            + '<div class="dash-greet-left">'
            + '<h2 class="dash-greet-name">' + greeting + ' !</h2>'
            + '<p class="dash-greet-msg">' + timeMsg + '</p>'
            + '</div>'
            + '<div class="dash-greet-right">'
            + streakBadge
            + '</div>'
            + '</div>';
    }

    // ==================== SECTION 0 — COUNTDOWN BAC ====================
    function renderCountdown() {
        // Bac dates: Philo 18 juin, Grand Oral 23 juin - 4 juillet
        var now = new Date();
        var bacPhilo = new Date(now.getFullYear(), 5, 18); // June 18
        // If past this year's date, use next year
        if (now > new Date(now.getFullYear(), 6, 5)) {
            bacPhilo = new Date(now.getFullYear() + 1, 5, 18);
        }
        var diff = bacPhilo.getTime() - now.getTime();
        var days = Math.ceil(diff / (1000 * 60 * 60 * 24));

        if (days < 0) days = 0;

        var urgencyClass = '';
        var urgencyMsg = '';
        if (days <= 7) {
            urgencyClass = 'countdown-critical';
            urgencyMsg = 'C\'est maintenant ! Tu es pret(e).';
        } else if (days <= 30) {
            urgencyClass = 'countdown-urgent';
            urgencyMsg = 'Derniere ligne droite. Chaque jour compte.';
        } else if (days <= 90) {
            urgencyClass = 'countdown-soon';
            urgencyMsg = 'Le Bac approche. Reste regulier(e).';
        } else {
            urgencyClass = 'countdown-calm';
            urgencyMsg = 'Tu as le temps. Construis de bonnes habitudes.';
        }

        // Global Bac Readiness
        var avgMastery = 0;
        var topicCount = 0;
        var topicBars = '';
        if (window.StudFlow.adaptive) {
            var allTopics = window.StudFlow.adaptive.getAllTopics();
            topicCount = allTopics.length;
            for (var t = 0; t < allTopics.length; t++) avgMastery += allTopics[t].topic.mastery;
            avgMastery = topicCount > 0 ? Math.round((avgMastery / topicCount) * 100) : 0;

            // Top 4 subjects mini bars
            var shown = Math.min(allTopics.length, 4);
            for (var b = 0; b < shown; b++) {
                var tp = allTopics[b];
                var tpct = Math.round(tp.topic.mastery * 100);
                var barColor = tpct >= 70 ? '#22c55e' : tpct >= 40 ? '#f59e0b' : '#ef4444';
                topicBars += '<div class="dash-readiness-topic">'
                    + '<span class="dash-readiness-name">' + escapeHTML(tp.topic.label) + '</span>'
                    + '<div class="dash-readiness-minibar"><div style="width:' + tpct + '%;background:' + barColor + '"></div></div>'
                    + '<span class="dash-readiness-pct">' + tpct + '%</span>'
                    + '</div>';
            }
        }

        // Estimated readiness: if avgMastery growth rate is X%/day, when will we reach 70%?
        var readinessMsg = '';
        if (avgMastery >= 70) {
            readinessMsg = 'Tu es pret(e) pour le Bac !';
        } else if (avgMastery > 0 && days > 0) {
            var needed = 70 - avgMastery;
            var dailyRate = Math.max(0.5, avgMastery / Math.max(1, 30 - days + 30)); // rough estimate
            var daysToReady = Math.ceil(needed / Math.max(dailyRate, 0.3));
            if (daysToReady <= days) {
                readinessMsg = 'En rythme pour etre pret dans ~' + daysToReady + ' jours';
            } else {
                readinessMsg = 'Accelere un peu pour etre pret a temps';
            }
        }

        // Social proof (simulated percentile based on mastery)
        var percentile = Math.min(95, Math.max(5, Math.round(avgMastery * 1.2)));

        return '<div class="dash-section dash-countdown ' + urgencyClass + '">'
            + '<div class="dash-countdown-card">'
            + '<div class="dash-bac-top">'
            + '<div class="dash-countdown-left">'
            + '<div class="dash-countdown-number">' + days + '</div>'
            + '<div class="dash-countdown-label">jours</div>'
            + '</div>'
            + '<div class="dash-readiness-right">'
            + '<div class="dash-readiness-big">' + avgMastery + '%</div>'
            + '<div class="dash-readiness-label">pret</div>'
            + '</div>'
            + '</div>'
            + (topicBars ? '<div class="dash-readiness-topics">' + topicBars + '</div>' : '')
            + (readinessMsg ? '<div class="dash-countdown-msg">' + readinessMsg + '</div>' : '')
            + (avgMastery > 0 ? '<div class="dash-readiness-social">Tu es en avance sur ' + percentile + '% des eleves</div>' : '')
            + '</div>'
            + '</div>';
    }

    // ==================== SECTION 1 — PROFIL ETUDIANT ====================
    function renderProfileSection(profileData, profileKey, greeting) {
        var profile = getProfile();
        if (!profile) {
            return '<div class="dash-section dash-diag-cta" data-action="diagnostic:start">'
                + '<div class="dash-diag-content">'
                + '<div class="dash-diag-icon">🎯</div>'
                + '<div class="dash-diag-text">'
                + '<h3 class="dash-diag-title">Decouvre ton profil</h3>'
                + '<p class="dash-diag-sub">2 min · personnalise tes sessions</p>'
                + '</div>'
                + '</div>'
                + '<span class="dash-diag-arrow">→</span>'
                + '</div>';
        }

        var strengthsHTML = profileData.strengths.map(function(s) {
            return '<span class="dash-strength-tag">' + s + '</span>';
        }).join('');

        return '<div class="dash-section dash-profile">'
            + '<div class="dash-profile-card ' + profileData.color + '">'
            + '<div class="dash-profile-emoji">' + profileData.emoji + '</div>'
            + '<div class="dash-profile-info">'
            + '<div class="dash-profile-label">Ton profil</div>'
            + '<h2>' + greeting + ' ! ' + profileData.emoji + '</h2>'
            + '<p class="dash-profile-title">' + profileData.title + '</p>'
            + '<p class="dash-profile-desc">' + profileData.description + '</p>'
            + '<div class="dash-strengths">'
            + '<span class="dash-strengths-label">Tes forces :</span>'
            + '<div class="dash-strength-tags">' + strengthsHTML + '</div>'
            + '</div>'
            + '<div class="dash-improve">'
            + '<span class="dash-improve-icon">🎯</span>'
            + '<span>Axe a travailler : <strong>' + profileData.improve + '</strong></span>'
            + '</div>'
            + '</div>'
            + '</div>'
            + '</div>';
    }

    // ==================== SECTION 5 — MESSAGE MOTIVATION ====================
    function renderMotivationSection(daily) {
        var msg = MOTIVATION_MESSAGES[daily.motivationIndex] || MOTIVATION_MESSAGES[0];
        return '<div class="dash-section dash-motivation">'
            + '<div class="dash-motivation-card">'
            + '<span class="dash-motivation-icon">💬</span>'
            + '<p class="dash-motivation-text">"' + msg + '"</p>'
            + '</div>'
            + '</div>';
    }

    // ==================== SECTION 2 — RECOMMANDATIONS DU JOUR ====================
    function renderRecommendationsSection(recs, profileKey) {
        // Limit recommendations for free users
        var maxReco = 3;
        if (window.StudFlow.premium && !window.StudFlow.premium.hasAccess('stats_avancees')) {
            maxReco = 1;
        }
        var visibleRecs = recs.slice(0, maxReco);

        var recsHTML = visibleRecs.map(function(rec, i) {
            var priorityClass = rec.priority === 'high' ? 'priority-high' : '';
            var priorityLabel = rec.priority === 'high' ? '<span class="dash-rec-badge">Recommande</span>' : '';
            return '<div class="dash-rec-card ' + priorityClass + '" data-action="dashboard.goTo" data-param="' + rec.module + '">'
                + priorityLabel
                + '<div class="dash-rec-icon">' + rec.icon + '</div>'
                + '<div class="dash-rec-info">'
                + '<h4>' + rec.title + '</h4>'
                + '<p>' + rec.desc + '</p>'
                + '</div>'
                + '<span class="dash-rec-arrow">→</span>'
                + '</div>';
        }).join('');

        var upsellHTML = '';
        if (maxReco < recs.length && window.StudFlow.premium) {
            upsellHTML = window.StudFlow.premium.renderInlineUpsell('stats_avancees');
        }

        return '<div class="dash-section dash-recommendations">'
            + '<h3 class="dash-section-title">\uD83D\uDCCB Recommandations du jour</h3>'
            + '<div class="dash-rec-list">'
            + recsHTML
            + '</div>'
            + upsellHTML
            + '</div>';
    }

    // ==================== SECTION 3 — TOUTES LES ACTIONS ====================
    function renderSecondaryActions() {
        return '<div class="dash-section">'
            + '<h3 class="dash-section-title">⚡ Toutes les actions</h3>'
            + '<div class="dash-actions-grid">'
            + '<button class="dash-quick-btn" data-action="dashboard.goTo" data-param="matieres">'
            + '<span class="dash-quick-icon">📚</span><span>Matieres</span></button>'
            + '<button class="dash-quick-btn" data-action="dashboard.goTo" data-param="annales">'
            + '<span class="dash-quick-icon">📜</span><span>Annales Bac</span></button>'
            + '<button class="dash-quick-btn" data-action="dashboard.goTo" data-param="coach">'
            + '<span class="dash-quick-icon">🧠</span><span>Coach</span></button>'
            + '<button class="dash-quick-btn" data-action="dashboard.goTo" data-param="focus">'
            + '<span class="dash-quick-icon">🎯</span><span>Focus</span></button>'
            + '<button class="dash-quick-btn" data-action="dashboard.goTo" data-param="stress">'
            + '<span class="dash-quick-icon">💆</span><span>Anti-stress</span></button>'
            + '<button class="dash-quick-btn" data-action="dashboard.goTo" data-param="planbac">'
            + '<span class="dash-quick-icon">📅</span><span>Plan Bac</span></button>'
            + '<button class="dash-quick-btn" data-action="dashboard.goTo" data-param="generators">'
            + '<span class="dash-quick-icon">⚙️</span><span>Generateurs</span></button>'
            + '<button class="dash-quick-btn" data-action="dashboard.goTo" data-param="stats">'
            + '<span class="dash-quick-icon">📊</span><span>Progression</span></button>'
            + '<button class="dash-quick-btn" data-action="dashboard.goTo" data-param="badges">'
            + '<span class="dash-quick-icon">🏅</span><span>Badges</span></button>'
            + '<button class="dash-quick-btn" data-action="dashboard.goTo" data-param="missions">'
            + '<span class="dash-quick-icon">🎯</span><span>Missions</span></button>'
            + '<button class="dash-quick-btn" data-action="screen:errors">'
            + '<span class="dash-quick-icon">📕</span><span>Erreurs</span></button>'
            + '<button class="dash-quick-btn" data-action="screen:aide">'
            + '<span class="dash-quick-icon">❓</span><span>Aide</span></button>'
            + '</div>'
            + '</div>';
    }

    // ==================== SECTION 6 — OBJECTIF DU JOUR ====================
    function getObjectivesForToday(profileKey) {
        var pool = DAILY_OBJECTIVES[profileKey] || DAILY_OBJECTIVES.equilibre;
        var daily = getDailyData();
        // Pick consistent objectives for the day based on date seed
        if (!daily.objectiveSet) {
            daily.objectiveSet = pool.map(function(o, i) { return i; });
            saveDailyData(daily);
        }
        return daily.objectiveSet.map(function(idx) { return pool[idx]; });
    }

    function renderObjectiveSection(objectives, daily) {
        var objHTML = objectives.map(function(obj, i) {
            var completed = daily.objectivesCompleted.indexOf(i) !== -1;
            var checkedClass = completed ? 'completed' : '';
            var checkIcon = completed ? '✅' : '⬜';
            return '<div class="dash-objective-item ' + checkedClass + '" data-action="dashboard.toggleObjective" data-param="' + i + '">'
                + '<span class="dash-obj-check">' + checkIcon + '</span>'
                + '<span class="dash-obj-icon">' + obj.icon + '</span>'
                + '<span class="dash-obj-text">' + obj.text + '</span>'
                + '</div>';
        }).join('');

        var completedCount = daily.objectivesCompleted.length;
        var totalCount = objectives.length;
        var progressPct = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
        var progressMsg = completedCount === totalCount
            ? 'Bravo ! Tous les objectifs du jour sont faits !'
            : completedCount + '/' + totalCount + ' objectifs completes';

        return '<div class="dash-section dash-objectives">'
            + '<h3 class="dash-section-title">🎯 Objectifs du jour</h3>'
            + '<div class="dash-obj-progress">'
            + '<div class="dash-obj-bar" role="progressbar" aria-valuenow="' + progressPct + '" aria-valuemin="0" aria-valuemax="100" aria-label="Objectifs du jour"><div class="dash-obj-fill" style="width: ' + progressPct + '%"></div></div>'
            + '<span class="dash-obj-status">' + progressMsg + '</span>'
            + '</div>'
            + '<div class="dash-obj-list">'
            + objHTML
            + '</div>'
            + '</div>';
    }

    // ==================== SECTION 4 — PROGRESSION ====================
    function renderProgressSection(focusStats, gamStats, totalCards, masteredCards, totalQuiz) {
        var focusSessions = focusStats.sessions || 0;
        var focusMinutes = focusStats.totalMinutes || 0;
        var xp = gamStats.xp || 0;
        var streak = gamStats.streak || 0;

        // Empty state for brand new users
        if (focusSessions === 0 && xp === 0 && totalCards === 0 && totalQuiz === 0) {
            return '<div class="dash-section dash-progress">'
                + '<h3 class="dash-section-title">📊 Ta progression</h3>'
                + '<div class="dash-empty-state">'
                + '<div class="dash-empty-icon">🚀</div>'
                + '<p class="dash-empty-text">Ta progression apparaitra ici des ta premiere activite.</p>'
                + '<p class="dash-empty-hint">Lance une session focus ou un quiz pour commencer !</p>'
                + '</div>'
                + '</div>';
        }

        var focusHours = Math.floor(focusMinutes / 60);
        var focusMins = focusMinutes % 60;
        var timeDisplay = focusHours > 0 ? (focusHours + 'h ' + focusMins + 'min') : (focusMins + ' min');
        var cardsPct = totalCards > 0 ? Math.round((masteredCards / totalCards) * 100) : 0;

        return '<div class="dash-section dash-progress">'
            + '<h3 class="dash-section-title">📊 Ta progression</h3>'
            + '<div class="dash-stats-grid">'
            + renderStatCard('🎯', 'Sessions focus', String(focusSessions), 'sessions', 'accent')
            + renderStatCard('⏱️', 'Temps travaille', timeDisplay, 'cumule', 'hot')
            + renderStatCard('🎴', 'Cartes maitrisees', masteredCards + '/' + totalCards, cardsPct + '%', 'mint')
            + renderStatCard('⚡', 'Questions quiz', String(totalQuiz), 'disponibles', 'sun')
            + renderStatCard('🔥', 'Serie actuelle', String(streak), 'jours', 'peach')
            + renderStatCard('✨', 'XP total', String(xp), 'points', 'sky')
            + '</div>'
            + '</div>';
    }

    function renderStatCard(icon, label, value, sublabel, color) {
        return '<div class="dash-stat-card ' + color + '">'
            + '<div class="dash-stat-icon">' + icon + '</div>'
            + '<div class="dash-stat-value">' + value + '</div>'
            + '<div class="dash-stat-label">' + label + '</div>'
            + '<div class="dash-stat-sub">' + sublabel + '</div>'
            + '</div>';
    }

    // ==================== ACTIONS ====================
    function toggleObjective(index) {
        var daily = getDailyData();
        var pos = daily.objectivesCompleted.indexOf(index);
        if (pos === -1) {
            daily.objectivesCompleted.push(index);
            // XP bonus for completing objective
            if (window.StudFlow.gamification) {
                window.StudFlow.gamification.showToast('+5 XP — Objectif complete !', 'xp', '🎯');
                var stats = window.StudFlow.gamification.getStats();
                stats.xp += 5;
                stats.totalActions++;
                window.StudFlow.storage.saveData('gamification', stats);
                window.StudFlow.gamification.updateXPDisplay();
            }
        } else {
            daily.objectivesCompleted.splice(pos, 1);
        }
        saveDailyData(daily);

        // Check if all objectives done
        var profileKey = getMainProfile();
        var objectives = DAILY_OBJECTIVES[profileKey] || DAILY_OBJECTIVES.equilibre;
        if (daily.objectivesCompleted.length === objectives.length) {
            if (window.StudFlow.gamification) {
                setTimeout(function() {
                    window.StudFlow.gamification.showToast('Tous les objectifs du jour faits !', 'streak', '🏆');
                    window.StudFlow.gamification.spawnConfetti();
                }, 400);
            }
        }

        render();
    }

    // ==================== TOUR GUIDE (first visit) ====================
    var TOUR_STEPS = [
        { icon: '⚡', title: 'Quiz', text: 'Teste tes connaissances avec des quiz de niveau bac. Plus tu joues, plus tu progresses.' },
        { icon: '🧠', title: 'Coach IA', text: 'Pose n\'importe quelle question. Le coach s\'adapte a ton profil et tes besoins.' },
        { icon: '🎯', title: 'Focus', text: 'Lance un timer Pomodoro pour rester concentre. 25 min de travail, 5 min de pause.' },
        { icon: '💆', title: 'Zen', text: 'Exercices de respiration et anti-stress. Parfait avant un controle ou quand ca monte.' }
    ];

    function showTourIfNeeded() {
        if (localStorage.getItem('studflow_tour_done')) return;
        var onboarding = window.StudFlow.storage.loadData('onboarding', { completed: false });
        if (!onboarding.completed) return;
        setTimeout(function() { showTourStep(0); }, 800);
    }

    function showTourStep(index) {
        // Remove previous overlay
        var prev = document.getElementById('studflow-tour');
        if (prev) prev.remove();

        if (index >= TOUR_STEPS.length) {
            localStorage.setItem('studflow_tour_done', '1');
            return;
        }

        var step = TOUR_STEPS[index];
        var isLast = index === TOUR_STEPS.length - 1;
        var overlay = document.createElement('div');
        overlay.id = 'studflow-tour';
        overlay.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.7);z-index:10000;display:flex;align-items:center;justify-content:center;padding:20px;';
        overlay.innerHTML = '<div class="tour-card">'
            + '<div class="tour-icon">' + step.icon + '</div>'
            + '<h3 class="tour-title">' + step.title + '</h3>'
            + '<p class="tour-text">' + step.text + '</p>'
            + '<div class="tour-dots">'
            + TOUR_STEPS.map(function(_, i) { return '<div class="tour-dot' + (i === index ? ' active' : '') + '"></div>'; }).join('')
            + '</div>'
            + '<button class="tour-btn-primary" data-action="dashboard.tourNext" data-param="' + (index + 1) + '">'
            + (isLast ? 'C\'est parti !' : 'Suivant →')
            + '</button>'
            + '<br><button class="tour-btn-skip" data-action="dashboard.tourSkip">Passer le tour</button>'
            + '</div>';
        document.body.appendChild(overlay);
    }

    function tourNext(index) { showTourStep(index); }
    function tourSkip() {
        localStorage.setItem('studflow_tour_done', '1');
        var el = document.getElementById('studflow-tour');
        if (el) el.remove();
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.dashboard = {
        render: render,
        goTo: goTo,
        toggleMore: toggleMore,
        openExplore: openExplore,
        closeExplore: closeExplore,
        toggleObjective: toggleObjective,
        showTourIfNeeded: showTourIfNeeded,
        tourNext: tourNext,
        tourSkip: tourSkip,
        dismissBetaBanner: dismissBetaBanner,
        toggleBetaBanner: toggleBetaBanner
    };

})();
