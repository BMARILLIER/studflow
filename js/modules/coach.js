// coach.js — Coach Quotidien + Fiches methodologiques
(function() {

    // ==================== FICHES METHODO (existantes) ====================
    var FICHES = [
        {
            id: 'feynman',
            title: 'Comment apprendre efficacement',
            icon: '🧠',
            color: 'var(--hot)',
            content: '<h3>La technique Feynman</h3>'
                + '<p>Richard Feynman, prix Nobel de physique, utilisait cette methode simple :</p>'
                + '<ol>'
                + '<li><strong>Choisis un concept</strong> que tu veux comprendre</li>'
                + '<li><strong>Explique-le comme a un enfant de 10 ans</strong> — si tu ne peux pas simplifier, tu n\'as pas compris</li>'
                + '<li><strong>Identifie les trous</strong> — la ou tu bloques, retourne au cours</li>'
                + '<li><strong>Simplifie encore</strong> — utilise des analogies, des exemples concrets</li>'
                + '</ol>'
                + '<h3>La repetition espacee</h3>'
                + '<p>Ton cerveau oublie vite. Pour contrer ca :</p>'
                + '<ul>'
                + '<li><strong>J+1</strong> : Relis tes notes le lendemain</li>'
                + '<li><strong>J+3</strong> : Refais les exercices sans regarder le cours</li>'
                + '<li><strong>J+7</strong> : Teste-toi avec des flashcards</li>'
                + '<li><strong>J+14</strong> : Explique le cours a quelqu\'un</li>'
                + '</ul>'
                + '<h3>Conseil pratique</h3>'
                + '<p>Apres chaque cours, prends 5 minutes pour ecrire de memoire les 3 points cles. C\'est plus efficace que relire 10 fois.</p>'
        },
        {
            id: 'fiche',
            title: 'Comment faire une fiche utile',
            icon: '📝',
            color: 'var(--mint)',
            content: '<h3>La structure ideale d\'une fiche</h3>'
                + '<ol>'
                + '<li><strong>Titre + date</strong> du cours</li>'
                + '<li><strong>3-5 idees principales</strong> (pas plus !)</li>'
                + '<li><strong>Mots-cles</strong> en couleur</li>'
                + '<li><strong>Un schema ou dessin</strong> si possible</li>'
                + '<li><strong>1 exemple concret</strong> par idee</li>'
                + '</ol>'
                + '<h3>Les erreurs a eviter</h3>'
                + '<ul>'
                + '<li>Recopier le cours en entier</li>'
                + '<li>Ecrire des phrases longues</li>'
                + '<li>Ne pas relire ses fiches</li>'
                + '<li>Faire la fiche la veille de l\'exam</li>'
                + '</ul>'
                + '<h3>Conseil</h3>'
                + '<p>Fais tes fiches a la main si possible. Le geste d\'ecrire aide la memorisation.</p>'
        },
        {
            id: 'memoriser',
            title: 'Comment memoriser',
            icon: '🏰',
            color: 'var(--sky)',
            content: '<h3>Le palais de la memoire</h3>'
                + '<p>Technique utilisee depuis l\'Antiquite :</p>'
                + '<ol>'
                + '<li><strong>Visualise un lieu</strong> que tu connais bien</li>'
                + '<li><strong>Place chaque info</strong> a un endroit precis</li>'
                + '<li><strong>Fais le parcours</strong> mentalement pour retrouver les infos</li>'
                + '</ol>'
                + '<h3>L\'active recall</h3>'
                + '<p>Ne relis pas, TESTE-toi ! Ferme ton cours et essaie de te rappeler. C\'est 3x plus efficace que la relecture passive.</p>'
                + '<h3>Le spacing effect</h3>'
                + '<p>Revise un peu chaque jour plutot que tout la veille. 15 min/jour pendant 7 jours > 2h la veille.</p>'
        },
        {
            id: 'sans-stress',
            title: 'Comment reviser sans stress',
            icon: '🧘',
            color: 'var(--accent)',
            content: '<h3>Le planning realiste</h3>'
                + '<ol>'
                + '<li><strong>Liste tout</strong> ce que tu dois reviser</li>'
                + '<li><strong>Estime le temps</strong> pour chaque sujet (ajoute 30%)</li>'
                + '<li><strong>Repartis sur les jours</strong> disponibles (max 3h/jour)</li>'
                + '<li><strong>Prevois des jours off</strong></li>'
                + '</ol>'
                + '<h3>La regle des pauses</h3>'
                + '<ul>'
                + '<li><strong>25 min travail → 5 min pause</strong> (Pomodoro)</li>'
                + '<li>Apres 4 sessions → <strong>pause longue 15-30 min</strong></li>'
                + '<li>Pendant la pause : marche, etire-toi, bois de l\'eau</li>'
                + '</ul>'
                + '<h3>Le sommeil</h3>'
                + '<p>Ton cerveau consolide la memoire pendant le sommeil. 8h minimum la veille d\'un exam.</p>'
        },
        {
            id: 'controle',
            title: 'Comment preparer un controle',
            icon: '📅',
            color: 'var(--sun)',
            content: '<h3>J-7 : La semaine avant</h3>'
                + '<ul>'
                + '<li>Relis toutes tes fiches et identifie les points faibles</li>'
                + '<li>Commence par les sujets les plus difficiles</li>'
                + '</ul>'
                + '<h3>J-3 : Trois jours avant</h3>'
                + '<ul>'
                + '<li>Fais des exercices types / annales</li>'
                + '<li>Teste-toi sans regarder le cours</li>'
                + '</ul>'
                + '<h3>J-1 : La veille</h3>'
                + '<ul>'
                + '<li>Relis UNIQUEMENT tes fiches</li>'
                + '<li>Prepare tes affaires</li>'
                + '<li>Couche-toi tot !</li>'
                + '</ul>'
                + '<h3>Jour J</h3>'
                + '<p>Petit-dejeuner equilibre, 5 min de respiration, arrive en avance, lis tout le sujet avant de commencer.</p>'
        }
    ];

    // ==================== MESSAGES DU JOUR PAR PROFIL ====================
    var DAILY_MESSAGES = {
        anxieux: [
            "Tu n'as pas besoin d'en faire trop aujourd'hui. Une petite session suffit pour avancer.",
            "Le stress que tu ressens, c'est ton cerveau qui se prepare. C'est normal et ca passe.",
            "Rappelle-toi : tu as deja surmonte des moments difficiles. Tu en es capable.",
            "Respire doucement. Tout va bien. Chaque petit pas compte.",
            "Aujourd'hui, concentre-toi sur UNE seule chose. Le reste attendra.",
            "Le stress diminue des que tu commences. Le plus dur c'est les 5 premieres minutes.",
            "Tu n'as pas besoin d'etre parfait. Fais de ton mieux, c'est largement suffisant."
        ],
        procrastinateur: [
            "Le plus difficile est de commencer. 10 minutes peuvent tout changer.",
            "Tu n'as pas besoin de motivation pour commencer. La motivation viendra en faisant.",
            "Juste 15 minutes. C'est tout. Apres, tu decides si tu continues.",
            "Ton futur toi te remerciera d'avoir commence aujourd'hui.",
            "Pas besoin de finir. Juste de commencer. Le reste suivra naturellement.",
            "Le secret : ne pas penser a tout ce qu'il y a a faire. Juste le premier pas.",
            "Mets un timer de 10 min. C'est rien. Mais ca peut tout debloquer."
        ],
        desorganise: [
            "On va faire simple aujourd'hui. Une tache a la fois.",
            "Aujourd'hui, choisis UNE priorite et tiens-la. C'est tout.",
            "Un bon plan simple vaut mieux qu'un plan parfait jamais suivi.",
            "Commence par ce qui est le plus urgent. Le reste suivra.",
            "Ecrire ta to-do list de 3 choses max, c'est deja s'organiser.",
            "La structure libere. Suis ton plan et tu verras la difference.",
            "Pas de panique si tout n'est pas fait. L'essentiel c'est de garder le cap."
        ],
        surcharge: [
            "Aujourd'hui, fais moins mais mieux. La qualite prime.",
            "Tu en fais deja beaucoup. Autorise-toi une pause sans culpabilite.",
            "Choisis la chose la plus importante. Le reste n'est pas urgent.",
            "Ton cerveau a besoin de repos pour fonctionner. Repose-toi, c'est productif.",
            "Rappelle-toi : ce n'est pas celui qui travaille le plus qui reussit le mieux.",
            "Prends 5 min de pause la, maintenant. Tu le merites.",
            "Decharge-toi d'une tache. Le monde ne s'effondrera pas."
        ],
        confiance_faible: [
            "Tu progresses plus que tu ne le crois. Continue.",
            "Ne pas savoir, c'est le debut de l'apprentissage. Pas une faiblesse.",
            "Les meilleures methodes sont simples. Tu vas les decouvrir ici.",
            "Chaque session te rend un peu meilleur. C'est mathematique.",
            "Tu as le potentiel. La methode va tout debloquer.",
            "Beaucoup de gens brillants ont doute avant de reussir. C'est normal.",
            "Aujourd'hui, apprends UNE chose nouvelle. C'est deja une victoire."
        ],
        confiant: [
            "Tu geres bien ! Aujourd'hui, vise un cran plus haut.",
            "Continue sur cette lancee. Ta regularite va payer.",
            "Challenge du jour : explique un concept a quelqu'un. Si tu y arrives, c'est gagne.",
            "Tu as de bonnes bases. Pousse-toi un peu plus loin aujourd'hui.",
            "La confiance, ca se construit jour apres jour. Et tu le fais.",
            "Pret pour une session intense ? Tu en es capable.",
            "Ton engagement est ta plus grande force. Continue."
        ],
        equilibre: [
            "Belle journee pour apprendre quelque chose de nouveau.",
            "Garde ton rythme. La regularite, c'est la cle.",
            "Tu avances bien. Continue a ton rythme.",
            "Aujourd'hui est une bonne journee pour progresser, meme un peu.",
            "Varie tes methodes : flashcards, exercices, quiz. Ca renforce la memoire.",
            "Un petit pas aujourd'hui, un grand progres demain.",
            "Continue comme ca, tu es sur la bonne voie."
        ]
    };

    // ==================== OBJECTIFS DU JOUR ====================
    var DAILY_OBJECTIVES = {
        anxieux: [
            { text: 'Respiration 4-7-8 avant de travailler', icon: '🫁', module: 'breathing', duree: '2 min' },
            { text: 'Session focus courte (15 min)', icon: '🎯', module: 'focus', duree: '15 min' },
            { text: 'Relire une fiche methodo', icon: '🧠', module: 'coach', duree: '5 min' }
        ],
        procrastinateur: [
            { text: 'Micro session focus (10 min)', icon: '🎯', module: 'focus', duree: '10 min' },
            { text: 'Revoir 5 flashcards', icon: '🎴', module: 'flashcard', duree: '5 min' },
            { text: 'Avancer d\'une etape ton plan bac', icon: '📅', module: 'planbac', duree: '15 min' }
        ],
        desorganise: [
            { text: 'Consulter ton plan de la semaine', icon: '📅', module: 'planbac', duree: '3 min' },
            { text: 'Session focus structuree (25 min)', icon: '🎯', module: 'focus', duree: '25 min' },
            { text: 'Faire une fiche de revision', icon: '📝', module: 'coach', duree: '15 min' }
        ],
        surcharge: [
            { text: 'Exercice de respiration', icon: '🫁', module: 'breathing', duree: '3 min' },
            { text: 'UNE session focus (15 min max)', icon: '🎯', module: 'focus', duree: '15 min' },
            { text: 'Pause active (marche ou etirements)', icon: '💆', module: 'stress', duree: '10 min' }
        ],
        confiance_faible: [
            { text: 'Lire une fiche methodo', icon: '🧠', module: 'coach', duree: '5 min' },
            { text: 'Tenter un quiz pour se tester', icon: '⚡', module: 'quiz', duree: '10 min' },
            { text: 'Session focus guidee (20 min)', icon: '🎯', module: 'focus', duree: '20 min' }
        ],
        confiant: [
            { text: 'Challenge quiz avance', icon: '⚡', module: 'quiz', duree: '15 min' },
            { text: 'Session focus deep work (40 min)', icon: '🎯', module: 'focus', duree: '40 min' },
            { text: 'Avancer le plan bac', icon: '📅', module: 'planbac', duree: '20 min' }
        ],
        equilibre: [
            { text: 'Session focus Pomodoro (25 min)', icon: '🎯', module: 'focus', duree: '25 min' },
            { text: 'Revoir 5 flashcards', icon: '🎴', module: 'flashcard', duree: '5 min' },
            { text: 'Explorer un module au choix', icon: '🗺️', module: 'coach', duree: '10 min' }
        ]
    };

    // ==================== ACTIONS RECOMMANDEES ====================
    var ACTIONS_PAR_PROFIL = {
        anxieux: [
            { label: 'Respiration guidee', icon: '🫁', module: 'breathing' },
            { label: 'Anti-stress', icon: '💆', module: 'stress' },
            { label: 'Focus doux 15 min', icon: '🎯', module: 'focus' }
        ],
        procrastinateur: [
            { label: 'Focus rapide 10 min', icon: '🎯', module: 'focus' },
            { label: 'Flashcards express', icon: '🎴', module: 'flashcard' },
            { label: 'Plan bac', icon: '📅', module: 'planbac' }
        ],
        desorganise: [
            { label: 'Mon plan bac', icon: '📅', module: 'planbac' },
            { label: 'Methode revision', icon: '🧠', module: 'coach' },
            { label: 'Session focus', icon: '🎯', module: 'focus' }
        ],
        surcharge: [
            { label: 'Respiration zen', icon: '🫁', module: 'breathing' },
            { label: 'Anti-stress', icon: '💆', module: 'stress' },
            { label: 'Focus leger', icon: '🎯', module: 'focus' }
        ],
        confiance_faible: [
            { label: 'Fiche methodo', icon: '🧠', module: 'coach' },
            { label: 'Quiz decouverte', icon: '⚡', module: 'quiz' },
            { label: 'Bac francais', icon: '🇫🇷', module: 'bacfrancais' }
        ],
        confiant: [
            { label: 'Challenge quiz', icon: '⚡', module: 'quiz' },
            { label: 'Deep focus', icon: '🎯', module: 'focus' },
            { label: 'Bac francais avance', icon: '🇫🇷', module: 'bacfrancais' }
        ],
        equilibre: [
            { label: 'Session focus', icon: '🎯', module: 'focus' },
            { label: 'Flashcards', icon: '🎴', module: 'flashcard' },
            { label: 'Plan bac', icon: '📅', module: 'planbac' }
        ]
    };

    // ==================== ENCOURAGEMENTS ====================
    var ENCOURAGEMENTS = [
        "Bravo, tu avances !",
        "Chaque effort compte.",
        "Continue comme ca !",
        "Tu fais du bon travail.",
        "Un pas de plus vers la reussite.",
        "Tu peux etre fier de toi.",
        "C'est comme ca qu'on progresse.",
        "Tu geres ! Ne lache rien.",
        "Encore un objectif atteint. Bien joue !",
        "La regularite, c'est ta force."
    ];

    var INACTIVITY_MESSAGES = [
        "Reprendre doucement suffit. Meme 5 minutes aujourd'hui, c'est deja enorme.",
        "Ca fait quelques jours. Pas de pression — un petit pas suffit pour reprendre.",
        "Tu n'as rien perdu. Tout est la. Il suffit de recommencer doucement.",
        "Le plus dur c'est de revenir. Et tu es la. C'est deja gagne.",
        "Pas de jugement. Juste un nouveau depart. On y va ensemble."
    ];

    // ==================== HELPERS ====================
    function getMainProfile() {
        var profile = window.StudFlow.storage.getUserProfile();
        return (profile && profile.mainProfile) ? profile.mainProfile : 'equilibre';
    }

    function getCoachData() {
        var today = new Date().toDateString();
        var data = window.StudFlow.storage.loadData('coachQuotidien', {
            lastCoachDate: null,
            coachHistory: [],
            objectifsRealises: 0,
            objectifDone: false,
            messageIndex: -1,
            objectiveIndex: -1,
            joursActifs: 0,
            sessionsRealisees: 0,
            lastActiveDate: null
        });

        // Reset daily state if new day
        if (data.lastCoachDate !== today) {
            if (data.lastCoachDate) {
                data.coachHistory.push({
                    date: data.lastCoachDate,
                    objectifDone: data.objectifDone
                });
                // Keep only last 30 days
                if (data.coachHistory.length > 30) {
                    data.coachHistory = data.coachHistory.slice(-30);
                }
            }
            // Check consecutive days
            var yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            if (data.lastCoachDate === yesterday.toDateString()) {
                data.joursActifs++;
            } else if (data.lastCoachDate !== today) {
                // Not consecutive, but we track total visits
            }
            data.lastCoachDate = today;
            data.objectifDone = false;
            data.messageIndex = Math.floor(Math.random() * 7);
            data.objectiveIndex = Math.floor(Math.random() * 3);
            saveCoachData(data);
        }
        return data;
    }

    function saveCoachData(data) {
        window.StudFlow.storage.saveData('coachQuotidien', data);
    }

    function getDaysInactive() {
        var data = window.StudFlow.storage.loadData('coachQuotidien', { lastActiveDate: null });
        if (!data.lastActiveDate) return 0;
        var last = new Date(data.lastActiveDate);
        var now = new Date();
        return Math.floor((now - last) / (1000 * 60 * 60 * 24));
    }

    function goToModule(moduleId) {
        var moduleMap = {
            breathing: function() { window.StudFlow.app.showScreen('breathing'); },
            stress: function() { window.StudFlow.stress.show(); },
            focus: function() { window.StudFlow.focus.show(); },
            flashcard: function() { window.StudFlow.flashcards.start(); },
            quiz: function() { window.StudFlow.quiz.start(); },
            bacfrancais: function() { window.StudFlow.bacfrancais.show(); },
            planbac: function() { window.StudFlow.planbac.show(); },
            coach: function() { openFiches(); }
        };
        var fn = moduleMap[moduleId];
        if (fn) fn();
    }

    // ==================== RENDER PRINCIPAL ====================
    function show() {
        window.StudFlow.app.showScreen('coach');
    }

    function render() {
        var container = document.getElementById('coach-content');
        if (!container) return;

        var profileKey = getMainProfile();
        var coachData = getCoachData();
        var daysInactive = getDaysInactive();

        var messages = DAILY_MESSAGES[profileKey] || DAILY_MESSAGES.equilibre;
        var msgIdx = coachData.messageIndex >= 0 ? coachData.messageIndex % messages.length : 0;
        var dailyMsg = messages[msgIdx];

        var objectives = DAILY_OBJECTIVES[profileKey] || DAILY_OBJECTIVES.equilibre;
        var objIdx = coachData.objectiveIndex >= 0 ? coachData.objectiveIndex % objectives.length : 0;
        var todayObjective = objectives[objIdx];

        var actions = ACTIONS_PAR_PROFIL[profileKey] || ACTIONS_PAR_PROFIL.equilibre;

        // Inactivity message
        var inactivityHTML = '';
        if (daysInactive >= 3) {
            var inactIdx = Math.min(daysInactive - 3, INACTIVITY_MESSAGES.length - 1);
            inactivityHTML = '<div class="cq-inactivity">'
                + '<span class="cq-inactivity-icon">🤗</span>'
                + '<p>' + INACTIVITY_MESSAGES[inactIdx] + '</p>'
                + '</div>';
        }

        // Objectif status
        var objectifHTML = '';
        if (coachData.objectifDone) {
            var encIdx = Math.floor(Math.random() * ENCOURAGEMENTS.length);
            objectifHTML = '<div class="cq-objectif done">'
                + '<div class="cq-objectif-done-icon">✅</div>'
                + '<p class="cq-objectif-done-msg">' + ENCOURAGEMENTS[encIdx] + '</p>'
                + '</div>';
        } else {
            objectifHTML = '<div class="cq-objectif">'
                + '<div class="cq-objectif-header">'
                + '<span class="cq-objectif-icon">' + todayObjective.icon + '</span>'
                + '<div class="cq-objectif-info">'
                + '<h4>' + todayObjective.text + '</h4>'
                + '<span class="cq-objectif-duree">' + todayObjective.duree + '</span>'
                + '</div>'
                + '</div>'
                + '<div class="cq-objectif-actions">'
                + '<button class="cq-btn-go" data-action="coach.goToModule" data-param="' + todayObjective.module + '">Commencer</button>'
                + '<button class="cq-btn-done" data-action="coach.validateObjectif">J\'ai fait ✓</button>'
                + '</div>'
                + '</div>';
        }

        // Actions recommandees
        var actionsHTML = actions.map(function(a) {
            return '<button class="cq-action-btn" data-action="coach.goToModule" data-param="' + a.module + '">'
                + '<span class="cq-action-icon">' + a.icon + '</span>'
                + '<span>' + a.label + '</span>'
                + '</button>';
        }).join('');

        // Stats suivi
        var histDone = coachData.coachHistory.filter(function(h) { return h.objectifDone; }).length;
        var histTotal = coachData.coachHistory.length;

        container.innerHTML = ''
            + '<div class="cq-container">'

            // Header
            + '<div class="cq-header">'
            + '<h2>👋 Ton Coach</h2>'
            + '<button class="cq-fiches-btn" data-action="coach.openFiches">📚 Fiches methodo</button>'
            + '</div>'

            // Inactivity
            + inactivityHTML

            // Message du jour
            + '<div class="cq-message">'
            + '<span class="cq-message-icon">💬</span>'
            + '<p>' + dailyMsg + '</p>'
            + '</div>'

            // Objectif du jour
            + '<div class="cq-section">'
            + '<h3 class="cq-section-title">🎯 Objectif du jour</h3>'
            + objectifHTML
            + '</div>'

            // Action recommandee
            + '<div class="cq-section">'
            + '<h3 class="cq-section-title">⚡ Action recommandee</h3>'
            + '<div class="cq-actions-row">' + actionsHTML + '</div>'
            + '</div>'

            // Suivi motivation
            + '<div class="cq-section">'
            + '<h3 class="cq-section-title">📊 Ton suivi</h3>'
            + '<div class="cq-stats">'
            + '<div class="cq-stat">'
            + '<div class="cq-stat-value">' + coachData.joursActifs + '</div>'
            + '<div class="cq-stat-label">Jours actifs</div>'
            + '</div>'
            + '<div class="cq-stat">'
            + '<div class="cq-stat-value">' + coachData.objectifsRealises + '</div>'
            + '<div class="cq-stat-label">Objectifs faits</div>'
            + '</div>'
            + '<div class="cq-stat">'
            + '<div class="cq-stat-value">' + histDone + '/' + histTotal + '</div>'
            + '<div class="cq-stat-label">Derniers jours</div>'
            + '</div>'
            + '</div>'
            + '</div>'

            + '</div>';

        // Mark active
        var data = getCoachData();
        data.lastActiveDate = new Date().toISOString();
        saveCoachData(data);
    }

    // ==================== ACTIONS ====================
    function validateObjectif() {
        var data = getCoachData();
        data.objectifDone = true;
        data.objectifsRealises = (data.objectifsRealises || 0) + 1;
        data.sessionsRealisees = (data.sessionsRealisees || 0) + 1;
        saveCoachData(data);

        if (window.StudFlow.gamification) {
            window.StudFlow.gamification.addXP('coach_objectif');
            window.StudFlow.gamification.showToast('+10 XP — Objectif du jour accompli !', 'xp', '🎯');
        }

        render();
    }

    // ==================== FICHES METHODO ====================
    function openFiches() {
        var container = document.getElementById('coach-content');
        if (!container) return;

        var fichesHTML = FICHES.map(function(f, i) {
            return '<div class="coach-card" data-action="coach.openFiche" data-param="' + i + '">'
                + '<div class="coach-card-icon" style="background: ' + f.color + '">' + f.icon + '</div>'
                + '<div class="coach-card-info">'
                + '<h3>' + f.title + '</h3>'
                + '<span class="coach-card-arrow">→</span>'
                + '</div>'
                + '</div>';
        }).join('');

        container.innerHTML = '<div class="coach-header">'
            + '<button class="cq-back-link" data-action="coach.render">← Coach quotidien</button>'
            + '<h2>📚 Fiches Methodo</h2>'
            + '<p>5 fiches pour apprendre a apprendre</p>'
            + '</div>'
            + '<div class="coach-cards">' + fichesHTML + '</div>';
    }

    function openFiche(index) {
        var f = FICHES[index];
        var container = document.getElementById('coach-content');
        if (!container) return;

        container.innerHTML = '<button class="back-btn" data-action="coach.openFiches">← Retour aux fiches</button>'
            + '<div class="coach-fiche">'
            + '<div class="coach-fiche-header">'
            + '<span class="coach-fiche-icon" style="background: ' + f.color + '">' + f.icon + '</span>'
            + '<h2>' + f.title + '</h2>'
            + '</div>'
            + '<div class="coach-fiche-content">' + f.content + '</div>'
            + '<div class="gen-view-actions gen-export-row">'
            + '<span class="gen-export-label">Exporter :</span>'
            + '<button class="btn-secondary btn-sm" data-action="coach.exportFiche" data-param="' + index + '" data-param2="copy">Copier</button>'
            + '<button class="btn-secondary btn-sm" data-action="coach.exportFiche" data-param="' + index + '" data-param2="txt">TXT</button>'
            + '<button class="btn-secondary btn-sm" data-action="coach.exportFiche" data-param="' + index + '" data-param2="pdf">PDF</button>'
            + '</div>'
            + '</div>';

        if (window.StudFlow.gamification) window.StudFlow.gamification.addXP('coach_fiche');
    }

    function exportCoachFiche(index, format) {
        var f = FICHES[index];
        if (!f || !window.StudFlow.exporter) return;
        if (format === 'copy') window.StudFlow.exporter.copyCoachFiche(f);
        else if (format === 'pdf') window.StudFlow.exporter.exportCoachFicheAsPdf(f);
        else window.StudFlow.exporter.exportCoachFicheAsTxt(f);
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.coach = {
        show: show,
        render: render,
        openFiche: openFiche,
        openFiches: openFiches,
        validateObjectif: validateObjectif,
        goToModule: goToModule,
        exportFiche: exportCoachFiche,
        FICHES: FICHES
    };
})();
