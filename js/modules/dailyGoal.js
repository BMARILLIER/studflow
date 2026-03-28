// dailyGoal.js — Objectif du jour unique, warm & motivant
(function() {

    var STORAGE_KEY = 'dailyGoal';

    // ==================== DATE HELPERS ====================
    function getTodayStr() {
        var d = new Date();
        var y = d.getFullYear();
        var m = String(d.getMonth() + 1).padStart(2, '0');
        var day = String(d.getDate()).padStart(2, '0');
        return y + '-' + m + '-' + day;
    }

    // ==================== STORAGE ====================
    function loadGoalData() {
        return window.StudFlow.storage.loadData(STORAGE_KEY, {
            date: null,
            goal: null,
            done: false,
            history: []
        });
    }

    function saveGoalData(data) {
        window.StudFlow.storage.saveData(STORAGE_KEY, data);
    }

    // ==================== PROFILE ====================
    function getMainProfile() {
        var profile = window.StudFlow.storage.getUserProfile();
        return (profile && profile.mainProfile) ? profile.mainProfile : null;
    }

    // ==================== PLAN BAC INTEGRATION ====================
    function getUndonePlanBacSessions() {
        var plan = window.StudFlow.storage.loadData('planBac', null);
        if (!plan || !plan.weeks || plan.weeks.length === 0) return [];

        // Find current week
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        var currentWeekIdx = -1;
        for (var i = 0; i < plan.weeks.length; i++) {
            var parts = plan.weeks[i].endDate.split('/');
            var end = new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
            end.setHours(23, 59, 59);
            if (today <= end) { currentWeekIdx = i; break; }
        }
        if (currentWeekIdx < 0) return [];

        var week = plan.weeks[currentWeekIdx];
        var undone = [];
        for (var j = 0; j < week.sessions.length; j++) {
            if (!week.sessions[j].done) undone.push(week.sessions[j]);
        }
        return undone;
    }

    // ==================== GOAL POOL PAR PROFIL ====================
    var GOAL_POOL = {
        anxieux: [
            { type: 'breathing', text: 'Fais une respiration 4-7-8 pour te recentrer', coachPhrase: 'Ton calme est ta superpuissance.', module: 'stress', action: 'breathing_session' },
            { type: 'focus_15', text: 'Lance un focus de 15 min sur un sujet', coachPhrase: '15 minutes, c\'est deja enorme. Go !', module: 'focus', action: 'focus_15' },
            { type: 'fiche_stress', text: 'Lis une fiche anti-stress du Coach', coachPhrase: 'Apprendre a gerer le stress, c\'est du skill.', module: 'coach', action: 'coach_fiche' },
            { type: 'confiance', text: 'Fais un exercice de confiance en toi', coachPhrase: 'T\'es plus fort(e) que tu ne le crois, serieux.', module: 'confiance', action: 'confiance_better' },
            { type: 'flashcards_5', text: 'Revois 5 flashcards tranquille', coachPhrase: 'Chaque carte, c\'est un neurone qui dit merci.', module: 'flashcard', action: 'flashcard_complete' }
        ],
        procrastinateur: [
            { type: 'micro_start', text: 'Demarre juste 10 min sur n\'importe quoi', coachPhrase: 'Le plus dur c\'est de commencer. Apres ca roule.', module: 'focus', action: 'focus_15' },
            { type: 'focus_15', text: 'Lance un focus de 15 min', coachPhrase: 'Pas de pression. Juste 15 min et t\'es un(e) boss.', module: 'focus', action: 'focus_15' },
            { type: 'flashcards_5', text: 'Revois 5 flashcards rapides', coachPhrase: 'Quick win ! 5 cartes et t\'as deja progresse.', module: 'flashcard', action: 'flashcard_complete' },
            { type: 'quiz_rapide', text: 'Fais un quiz rapide pour te tester', coachPhrase: 'Un quiz, c\'est comme un mini-game. Let\'s go.', module: 'quiz', action: 'quiz_complete' },
            { type: 'fiche_methodo', text: 'Lis une fiche methodo du Coach', coachPhrase: 'Savoir comment apprendre, c\'est le vrai cheat code.', module: 'coach', action: 'coach_fiche' }
        ],
        desorganise: [
            { type: 'check_planbac', text: 'Verifie ton Plan Bac de la semaine', coachPhrase: 'Un plan, c\'est ta boussole. Check-le !', module: 'planbac', action: 'plan_session' },
            { type: 'focus_25', text: 'Lance un focus de 25 min bien carre', coachPhrase: '25 min structures, c\'est le mode efficace.', module: 'focus', action: 'focus_25' },
            { type: 'fiche_methodo', text: 'Lis une fiche methodo organisation', coachPhrase: 'L\'organisation, ca s\'apprend. Tu geres deja.', module: 'coach', action: 'coach_fiche' },
            { type: 'flashcards_5', text: 'Revois 5 flashcards pour ancrer', coachPhrase: 'Repeter, c\'est memoriser. Science, pas magie.', module: 'flashcard', action: 'flashcard_complete' },
            { type: 'bac_section', text: 'Avance une section Bac Francais', coachPhrase: 'Le Bac Fr c\'est du contenu pret. Profite.', module: 'bacfrancais', action: 'bac_section' }
        ],
        surcharge: [
            { type: 'breathing', text: 'Respiration 4-7-8 pour souffler', coachPhrase: 'Tu fais trop. Respire d\'abord. Serieux.', module: 'stress', action: 'breathing_session' },
            { type: 'relire_fiche', text: 'Relis juste une fiche deja faite', coachPhrase: 'Pas de nouveau. Juste consolider. C\'est smart.', module: 'coach', action: 'coach_fiche' },
            { type: 'focus_15', text: 'Une seule session focus de 15 min', coachPhrase: 'UNE session. Pas trois. Tu as le droit.', module: 'focus', action: 'focus_15' },
            { type: 'pause_active', text: 'Prends une vraie pause active (marche, etirements)', coachPhrase: 'Se reposer, c\'est PAS de la paresse. C\'est de la strategie.', module: 'stress', action: 'stress_session' },
            { type: 'flashcards_5', text: 'Revois 5 flashcards faciles', coachPhrase: 'Facile = bien. Ton cerveau a besoin de gagner aussi.', module: 'flashcard', action: 'flashcard_complete' }
        ],
        confiance_faible: [
            { type: 'confiance', text: 'Fais un exercice de confiance en toi', coachPhrase: 'La confiance ca se muscle. Un exercice a la fois.', module: 'confiance', action: 'confiance_better' },
            { type: 'micro_action', text: 'Fais UNE micro-action de revision (5 min)', coachPhrase: 'Meme tout petit, un pas c\'est un pas.', module: 'focus', action: 'focus_15' },
            { type: 'fiche_methodo', text: 'Lis une fiche methodo du Coach', coachPhrase: 'Savoir comment faire, ca change TOUT.', module: 'coach', action: 'coach_fiche' },
            { type: 'quiz_test', text: 'Teste-toi avec un quiz sans pression', coachPhrase: 'Se tromper c\'est apprendre. Zero jugement ici.', module: 'quiz', action: 'quiz_complete' },
            { type: 'flashcards_5', text: 'Revois 5 flashcards', coachPhrase: 'Tu sais plus que tu crois. Verifie.', module: 'flashcard', action: 'flashcard_complete' }
        ],
        confiant: [
            { type: 'challenge_quiz', text: 'Challenge : fais un quiz sans erreur', coachPhrase: 'T\'es chaud(e) ? Prouve-le. Zero faute.', module: 'quiz', action: 'quiz_complete' },
            { type: 'focus_45', text: 'Deep focus 45 min mode beast', coachPhrase: '45 min de concentration, t\'es un(e) machine.', module: 'focus', action: 'focus_45' },
            { type: 'bac_chapitre', text: 'Avance un chapitre Bac Francais', coachPhrase: 'Vise l\'excellence. Le Bac Fr est ton terrain.', module: 'bacfrancais', action: 'bac_section' },
            { type: 'flashcards_10', text: 'Maitrise 10 flashcards d\'affilee', coachPhrase: '10 cartes, c\'est rien pour toi. Go.', module: 'flashcard', action: 'flashcard_complete' },
            { type: 'creer_contenu', text: 'Cree tes propres flashcards ou quiz', coachPhrase: 'Creer du contenu, c\'est le niveau au-dessus.', module: 'flashcard', action: 'create_flashcard' }
        ],
        equilibre: [
            { type: 'focus_25', text: 'Session focus de 25 min', coachPhrase: 'Regulier et efficace, c\'est toi ca.', module: 'focus', action: 'focus_25' },
            { type: 'flashcards_5', text: 'Revois 5 flashcards', coachPhrase: 'Un peu chaque jour, c\'est la recette magique.', module: 'flashcard', action: 'flashcard_complete' },
            { type: 'quiz_test', text: 'Fais un quiz pour te tester', coachPhrase: 'Se tester, c\'est le meilleur moyen de retenir.', module: 'quiz', action: 'quiz_complete' },
            { type: 'explorer_module', text: 'Explore un module que tu connais pas', coachPhrase: 'La curiosite, c\'est ton meilleur atout.', module: 'coach', action: 'coach_fiche' },
            { type: 'bac_section', text: 'Avance une section Bac Francais', coachPhrase: 'Pas de rush. Avance a ton rythme, c\'est parfait.', module: 'bacfrancais', action: 'bac_section' }
        ]
    };

    var PLANBAC_GOAL = {
        type: 'planbac_session',
        text: 'Avance une session de ton Plan Bac',
        coachPhrase: 'Ton Plan Bac t\'attend. Une session et tu avances.',
        module: 'planbac',
        action: 'plan_session'
    };

    // ==================== GENERATION ALGORITHME ====================
    function generateGoal() {
        var data = loadGoalData();
        var today = getTodayStr();

        // 1. Already generated today? Return as-is
        if (data.date === today && data.goal) {
            return data;
        }

        var profileKey = getMainProfile();
        if (!profileKey) return data; // No diagnostic yet

        // 2. Archive yesterday's goal
        if (data.goal && data.date && data.date !== today) {
            if (!data.history) data.history = [];
            data.history.push({
                date: data.date,
                type: data.goal.type,
                text: data.goal.text,
                done: data.done
            });
            // Trim to 30
            if (data.history.length > 30) {
                data.history = data.history.slice(data.history.length - 30);
            }
        }

        // 3. Anti-repetition: exclude yesterday's type
        var lastType = (data.goal && data.date) ? data.goal.type : null;

        // 4. 50% chance planBac if sessions exist
        var undoneSessions = getUndonePlanBacSessions();
        if (undoneSessions.length > 0 && lastType !== 'planbac_session' && Math.random() < 0.5) {
            data.date = today;
            data.goal = Object.assign({}, PLANBAC_GOAL);
            data.done = false;
            saveGoalData(data);
            return data;
        }

        // 5. Pick from profile pool
        var pool = GOAL_POOL[profileKey] || GOAL_POOL.equilibre;
        var filtered = pool;
        if (lastType) {
            filtered = pool.filter(function(g) { return g.type !== lastType; });
            if (filtered.length === 0) filtered = pool;
        }
        var pick = filtered[Math.floor(Math.random() * filtered.length)];

        data.date = today;
        data.goal = {
            type: pick.type,
            text: pick.text,
            coachPhrase: pick.coachPhrase,
            module: pick.module,
            action: pick.action
        };
        data.done = false;
        saveGoalData(data);
        return data;
    }

    // ==================== RENDER ====================
    function renderDashboardBlock() {
        var profileKey = getMainProfile();
        if (!profileKey) return ''; // No diagnostic yet → no block

        var data = generateGoal();
        if (!data.goal) return '';

        if (data.done) {
            return '<div class="dash-today-card done">'
                + '<div class="dash-today-icon">✅</div>'
                + '<div class="dash-today-content">'
                + '<span class="dash-today-label">Aujourd\'hui</span>'
                + '<p class="dash-today-done-msg">Mission accomplie ! Tu assures.</p>'
                + '</div>'
                + '</div>';
        }

        return '<div class="dash-today-card">'
            + '<div class="dash-today-icon">🌟</div>'
            + '<div class="dash-today-content">'
            + '<span class="dash-today-label">Aujourd\'hui</span>'
            + '<p class="dash-today-coach">' + data.goal.coachPhrase + '</p>'
            + '<p class="dash-today-goal">' + data.goal.text + '</p>'
            + '<button class="dash-today-btn" data-action="dailyGoal.validateGoal">Je l\'ai fait !</button>'
            + '</div>'
            + '</div>';
    }

    // ==================== VALIDATION ====================
    function validateGoal() {
        var data = loadGoalData();
        if (!data.goal || data.done) return;

        // 1. Mark done
        data.done = true;
        saveGoalData(data);

        // 2. Add XP via gamification
        if (window.StudFlow.gamification && data.goal.action) {
            window.StudFlow.gamification.addXP(data.goal.action);
        }

        // 3. Confetti after 400ms
        if (window.StudFlow.gamification) {
            setTimeout(function() {
                window.StudFlow.gamification.spawnConfetti();
            }, 400);
        }

        // 4. Toast after 700ms
        if (window.StudFlow.gamification) {
            setTimeout(function() {
                window.StudFlow.gamification.showToast('Objectif du jour valide !', 'streak', '🎯');
            }, 700);
        }

        // 5. Record activity via stats
        if (window.StudFlow.stats) {
            window.StudFlow.stats.recordActivity('focus');
        }

        // 6. Check badges
        if (window.StudFlow.badges) {
            window.StudFlow.badges.checkAll();
        }

        // 7. Re-render dashboard
        if (window.StudFlow.dashboard) {
            window.StudFlow.dashboard.render();
        }
    }

    // ==================== PUBLIC HELPER ====================
    function getTodayGoal() {
        var data = loadGoalData();
        var today = getTodayStr();
        if (data.date === today) return data.goal;
        return null;
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.dailyGoal = {
        renderDashboardBlock: renderDashboardBlock,
        validateGoal: validateGoal,
        getTodayGoal: getTodayGoal,
        generateGoal: generateGoal
    };

})();
