// conseils.js — Generateur de conseils pedagogiques et motivationnels
(function() {

    // ==================== BASE DE CONSEILS ====================
    var CONSEILS = [
        // --- MOTIVATION ---
        {
            id: 'motiv_1', cat: 'motivation',
            titre: 'La regle des 5 minutes',
            explication: 'Ton cerveau resiste au demarrage, pas au travail lui-meme. Une fois lance, il continue naturellement. Le secret : ne pas penser a toute la session, juste aux 5 premieres minutes.',
            action: 'Mets un timer de 5 minutes et commence. Pas plus. Apres, tu decides si tu continues.',
            motivation: 'Le plus dur c\'est de commencer. Et tu viens de le faire en lisant ce conseil.'
        },
        {
            id: 'motiv_2', cat: 'motivation',
            titre: 'Ton futur toi te remercie',
            explication: 'Chaque minute que tu investis aujourd\'hui est un cadeau pour toi-meme demain. Les eleves qui reussissent ne sont pas les plus intelligents — ce sont les plus reguliers.',
            action: 'Choisis UNE chose a faire dans les 10 prochaines minutes. Fais-la. C\'est tout.',
            motivation: 'Tu n\'as pas besoin d\'etre parfait. Juste de faire un pas. Et tu en es capable.'
        },
        {
            id: 'motiv_3', cat: 'motivation',
            titre: 'Celebre tes petites victoires',
            explication: 'Ton cerveau a besoin de recompenses pour rester motive. Chaque tache terminee merite d\'etre reconnue — meme les plus petites.',
            action: 'Apres chaque session, note une chose que tu as apprise ou accomplie. Meme minuscule.',
            motivation: 'Tu fais plus de progres que tu ne le penses. Regarde en arriere et mesure le chemin parcouru.'
        },
        {
            id: 'motiv_4', cat: 'motivation',
            titre: 'La motivation vient en faisant',
            explication: 'On croit qu\'il faut etre motive pour commencer. C\'est l\'inverse : la motivation arrive APRES les premieres minutes d\'action. C\'est prouve scientifiquement.',
            action: 'Ouvre ton cours. Lis juste le premier paragraphe. Ne te force a rien d\'autre.',
            motivation: 'Tu n\'attends pas d\'avoir faim pour cuisiner. N\'attends pas la motivation pour travailler.'
        },

        // --- CONCENTRATION ---
        {
            id: 'conc_1', cat: 'concentration',
            titre: 'Le telephone : ton pire ennemi',
            explication: 'Chaque notification interrompt ta concentration pendant 23 minutes en moyenne. Pas 30 secondes — 23 minutes. Ton cerveau met du temps a se re-concentrer.',
            action: 'Mets ton telephone dans une autre piece pendant ta session. Pas en silencieux. Dans une AUTRE piece.',
            motivation: 'Une heure sans telephone vaut trois heures avec. Tu seras surpris de ce que tu peux accomplir.'
        },
        {
            id: 'conc_2', cat: 'concentration',
            titre: 'La technique Pomodoro',
            explication: '25 minutes de focus total, puis 5 minutes de pause. Ton cerveau fonctionne par cycles. Respecte-les et il te le rendra.',
            action: 'Lance un timer de 25 minutes. Travaille sans interruption. Pause de 5 min. Repete.',
            motivation: '4 Pomodoros = 2h de vrai travail. C\'est plus que ce que la plupart font en une journee entiere.'
        },
        {
            id: 'conc_3', cat: 'concentration',
            titre: 'L\'environnement change tout',
            explication: 'Ton cerveau associe les lieux a des activites. Si tu revises dans ton lit, il pense \"dodo\". Change de lieu pour changer de mode.',
            action: 'Trouve un endroit dedie UNIQUEMENT au travail. Bureau, bibliotheque, table de cuisine — mais toujours le meme.',
            motivation: 'Un bon environnement fait la moitie du travail. Prepare-le bien et le reste suivra.'
        },
        {
            id: 'conc_4', cat: 'concentration',
            titre: 'Commence par le plus dur',
            explication: 'Ta concentration est maximale en debut de session. Apres 45 minutes, elle baisse naturellement. Place le travail difficile en premier.',
            action: 'Identifie la tache la plus difficile de ta session. Fais-la EN PREMIER. Le reste sera facile.',
            motivation: 'Si tu fais le plus dur d\'abord, le reste de la journee est en descente.'
        },

        // --- ORGANISATION ---
        {
            id: 'orga_1', cat: 'organisation',
            titre: 'La regle des 3 taches',
            explication: 'Les to-do lists de 15 items sont faites pour echouer. Ton cerveau se bloque devant trop de choix. 3 taches prioritaires, c\'est tout ce dont tu as besoin.',
            action: 'Ce soir, ecris 3 taches pour demain. Pas 10. 3. Et commence par la premiere.',
            motivation: 'La simplicite est ta meilleure alliee. Moins de taches, plus d\'action.'
        },
        {
            id: 'orga_2', cat: 'organisation',
            titre: 'Prevois 30% de temps en plus',
            explication: 'On sous-estime TOUJOURS le temps necessaire. C\'est humain, ca s\'appelle le biais de planification. La solution : ajouter 30% a chaque estimation.',
            action: 'Si tu penses qu\'un exercice prend 30 min, prevois 40. Si un chapitre prend 1h, prevois 1h20.',
            motivation: 'Un planning realiste est un planning que tu suis. Et suivre son planning, ca fait du bien.'
        },
        {
            id: 'orga_3', cat: 'organisation',
            titre: 'La preparation du soir',
            explication: 'Preparer le lendemain le soir avant reduit le stress matinal de 40%. Ton cerveau dort mieux quand il sait ce qui l\'attend.',
            action: 'Avant de dormir : prepare tes affaires, note tes 3 priorites, et pose ton cours ouvert a la bonne page.',
            motivation: 'Se coucher organise, c\'est se lever motive.'
        },

        // --- STRESS ---
        {
            id: 'stress_1', cat: 'stress',
            titre: 'Le stress n\'est pas ton ennemi',
            explication: 'Le stress modere AMELIORE les performances. C\'est quand il deborde qu\'il bloque. Ton corps se prepare a agir — c\'est une reaction de survie, pas un defaut.',
            action: 'Quand le stress monte : nomme-le. Dis \"je suis stresse\". Ca active le cortex prefrontal et calme l\'amygdale.',
            motivation: 'Le stress prouve que tu tiens a ta reussite. C\'est une qualite, pas une faiblesse.'
        },
        {
            id: 'stress_2', cat: 'stress',
            titre: 'La respiration 4-7-8',
            explication: 'Cette technique active le systeme parasympathique en 60 secondes. Elle ralentit le coeur, baisse la tension et calme l\'esprit. Utilisee par les pilotes et les chirurgiens.',
            action: 'Inspire 4 secondes. Retiens 7 secondes. Expire 8 secondes. Repete 3 fois.',
            motivation: 'En 1 minute, tu peux transformer ton stress en calme. C\'est un super pouvoir.'
        },
        {
            id: 'stress_3', cat: 'stress',
            titre: 'Le catastrophisme, ce menteur',
            explication: 'Ton cerveau imagine le PIRE scenario et te le presente comme certain. \"Je vais rater\", \"Je vais tout oublier\". Ce ne sont pas des faits — ce sont des pensees automatiques.',
            action: 'Quand une pensee catastrophe arrive, demande-toi : \"Est-ce un fait ou une peur ?\" 9 fois sur 10, c\'est une peur.',
            motivation: 'Tes pensees ne sont pas la realite. Tu as le pouvoir de les remettre en question.'
        },
        {
            id: 'stress_4', cat: 'stress',
            titre: 'Bouge ton corps, calme ton esprit',
            explication: 'L\'activite physique reduit le cortisol (hormone du stress) en 20 minutes. Pas besoin de courir un marathon — marcher suffit.',
            action: 'Entre deux sessions de revision, fais 5 minutes de marche ou d\'etirements. Ton cerveau te remerciera.',
            motivation: 'Un corps en mouvement est un esprit plus clair.'
        },

        // --- BAC ---
        {
            id: 'bac_1', cat: 'bac',
            titre: 'Les annales sont ton tresor',
            explication: 'Les sujets du bac suivent des schemas. En faisant des annales, tu reconnais ces schemas et tu gagnes en vitesse et en confiance le jour J.',
            action: 'Choisis une matiere. Fais UN sujet d\'annale en conditions reelles. Chronometre-toi.',
            motivation: 'Chaque sujet que tu fais aujourd\'hui est un point de plus le jour du bac.'
        },
        {
            id: 'bac_2', cat: 'bac',
            titre: 'La methode fiche express',
            explication: 'Une bonne fiche tient sur une page recto. Si tu as besoin de plus, c\'est que tu n\'as pas assez synthetise. Synthetiser, c\'est comprendre.',
            action: 'Prends un chapitre. Resume-le en 5 points cles max sur une fiche. Utilise des couleurs et des schemas.',
            motivation: 'Creer une fiche, c\'est deja reviser. Tu fais d\'une pierre deux coups.'
        },
        {
            id: 'bac_3', cat: 'bac',
            titre: 'Jour J : lis TOUT le sujet d\'abord',
            explication: 'La premiere erreur au bac : foncer sur la premiere question sans lire la suite. Lire tout le sujet d\'abord te permet de gerer ton temps et de reperer les questions faciles.',
            action: 'Entraine-toi : a chaque exercice, lis l\'enonce complet avant d\'ecrire un seul mot.',
            motivation: 'Les 5 minutes passees a lire le sujet sont les mieux investies de l\'epreuve.'
        },

        // --- CONFIANCE ---
        {
            id: 'conf_1', cat: 'confiance',
            titre: 'Tu sais plus que tu ne le crois',
            explication: 'Le cerveau retient bien plus que ce qu\'on pense. Le probleme n\'est pas le stockage, c\'est la recuperation. Quand tu te testes, tu actives les bonnes connexions.',
            action: 'Ferme ton cours. Ecris tout ce dont tu te souviens. Tu seras surpris par tout ce que tu sais deja.',
            motivation: 'La confiance se construit en decouvrant ce qu\'on sait, pas en comptant ce qu\'on ne sait pas.'
        },
        {
            id: 'conf_2', cat: 'confiance',
            titre: 'L\'echec est un professeur',
            explication: 'Les erreurs activent des zones du cerveau differentes de la reussite. Ton cerveau apprend PLUS de ses erreurs que de ses succes. Chaque erreur est un apprentissage.',
            action: 'Reprends un exercice que tu as rate. Analyse POURQUOI tu t\'es trompe. Cette fois, tu ne feras plus la meme erreur.',
            motivation: 'Se tromper n\'est pas echouer. C\'est apprendre plus vite.'
        },
        {
            id: 'conf_3', cat: 'confiance',
            titre: 'Arrete de te comparer',
            explication: 'Tu vois les notes des autres, pas leurs heures de travail ni leurs doutes. La comparaison est toujours injuste parce que tu compares ton interieur a leur exterieur.',
            action: 'Note 3 choses que tu fais mieux qu\'il y a un mois. Voila ta vraie progression.',
            motivation: 'La seule course qui compte est celle contre toi-meme d\'hier.'
        },

        // --- PROCRASTINATION ---
        {
            id: 'proc_1', cat: 'procrastination',
            titre: 'Tu ne procrastines pas par paresse',
            explication: 'La procrastination est une reaction emotionnelle, pas un manque de volonte. Ton cerveau fuit l\'inconfort de la tache, pas la tache elle-meme.',
            action: 'Identifie ce qui te bloque : c\'est trop long ? Trop dur ? Commence par la partie la plus FACILE.',
            motivation: 'Comprendre pourquoi tu procrastines, c\'est deja arreter de procrastiner.'
        },
        {
            id: 'proc_2', cat: 'procrastination',
            titre: 'La technique du \"juste un\"',
            explication: 'Ne pense pas a toute la montagne. Pense juste au premier pas. \"Juste un exercice\". \"Juste une page\". \"Juste 5 minutes\". Le reste suit naturellement.',
            action: 'Dis-toi : \"Je fais JUSTE un exercice\". Si apres tu veux arreter, tu peux. Sans culpabilite.',
            motivation: 'Un pas, c\'est deja avancer. Et tu viens de le faire.'
        },
        {
            id: 'proc_3', cat: 'procrastination',
            titre: 'Rends le debut irresistible',
            explication: 'Si commencer est dur, rends-le plus facile. Pose ton cours ouvert sur ton bureau. Ouvre la bonne page. Le cerveau est attire par ce qui est deja commence.',
            action: 'Ce soir, prepare tout : cours ouvert, stylo pret, timer a cote. Demain, tu n\'auras qu\'a t\'asseoir.',
            motivation: 'Preparer le terrain, c\'est deja travailler. Tu es plus malin que ta procrastination.'
        },

        // --- FATIGUE ---
        {
            id: 'fat_1', cat: 'fatigue',
            titre: 'Le sommeil est ta memoire',
            explication: 'Pendant le sommeil, ton cerveau consolide les apprentissages de la journee. Dormir 8h apres une session de revision est plus efficace que reviser 3h de plus.',
            action: 'Ce soir, couche-toi 30 minutes plus tot que d\'habitude. Pas de telephone au lit.',
            motivation: 'Dormir n\'est pas perdre du temps. C\'est reviser en dormant.'
        },
        {
            id: 'fat_2', cat: 'fatigue',
            titre: 'Les pauses ne sont pas du luxe',
            explication: 'Ton cerveau ne peut pas fonctionner a 100% pendant des heures. Il a besoin de cycles : effort, puis repos. Les pauses rechargent la concentration.',
            action: 'Toutes les 25-30 minutes, fais une vraie pause de 5 min. Leve-toi. Etire-toi. Respire.',
            motivation: 'Les meilleurs athletes se reposent entre les sprints. Toi aussi tu as le droit.'
        },
        {
            id: 'fat_3', cat: 'fatigue',
            titre: 'L\'eau, ce super-aliment du cerveau',
            explication: 'Une deshydratation de 2% suffit a baisser ta concentration de 20%. Ton cerveau est compose a 75% d\'eau. Boire regulierement booste tes performances.',
            action: 'Pose une bouteille d\'eau sur ton bureau. Bois un verre avant chaque session de revision.',
            motivation: 'Un geste simple pour des resultats concrets. L\'efficacite commence par les bases.'
        }
    ];

    // ==================== MAPPING PROFIL → CATEGORIES ====================
    var PROFIL_CATEGORIES = {
        anxieux: ['stress', 'confiance', 'concentration', 'motivation'],
        procrastinateur: ['procrastination', 'motivation', 'concentration', 'organisation'],
        desorganise: ['organisation', 'concentration', 'bac', 'motivation'],
        surcharge: ['fatigue', 'stress', 'organisation', 'motivation'],
        confiance_faible: ['confiance', 'motivation', 'bac', 'concentration'],
        confiant: ['bac', 'concentration', 'organisation', 'motivation'],
        equilibre: ['motivation', 'concentration', 'organisation', 'bac', 'stress', 'confiance', 'procrastination', 'fatigue']
    };

    // ==================== STATE ====================
    var currentConseil = null;

    // ==================== HELPERS ====================
    function getMainProfile() {
        var profile = window.StudFlow.storage.getUserProfile();
        return (profile && profile.mainProfile) ? profile.mainProfile : 'equilibre';
    }

    function getHistory() {
        return window.StudFlow.storage.loadData('conseilsHistory', { seen: [], lastDate: null, total: 0 });
    }

    function saveHistory(history) {
        window.StudFlow.storage.saveData('conseilsHistory', history);
    }

    function pickConseil() {
        var profileKey = getMainProfile();
        var priorityCats = PROFIL_CATEGORIES[profileKey] || PROFIL_CATEGORIES.equilibre;
        var history = getHistory();
        var seenIds = history.seen || [];

        // Filter by priority categories, prefer unseen
        var pool = [];
        for (var i = 0; i < priorityCats.length; i++) {
            var cat = priorityCats[i];
            var catConseils = CONSEILS.filter(function(c) {
                return c.cat === cat && seenIds.indexOf(c.id) === -1;
            });
            pool = pool.concat(catConseils);
        }

        // If all priority ones seen, open up to all unseen
        if (pool.length === 0) {
            pool = CONSEILS.filter(function(c) {
                return seenIds.indexOf(c.id) === -1;
            });
        }

        // If ALL seen, reset history and pick from all
        if (pool.length === 0) {
            history.seen = [];
            saveHistory(history);
            pool = CONSEILS.slice();
        }

        // Pick random from pool
        var idx = Math.floor(Math.random() * pool.length);
        var conseil = pool[idx];

        // Record
        history.seen.push(conseil.id);
        if (history.seen.length > 50) history.seen = history.seen.slice(-30);
        history.total = (history.total || 0) + 1;
        history.lastDate = new Date().toISOString();
        saveHistory(history);

        return conseil;
    }

    function getCatLabel(cat) {
        var labels = {
            motivation: '🔥 Motivation',
            concentration: '🎯 Concentration',
            organisation: '📋 Organisation',
            stress: '🧘 Anti-stress',
            bac: '🎓 Bac',
            confiance: '💪 Confiance',
            procrastination: '⏰ Anti-procrastination',
            fatigue: '😴 Energie'
        };
        return labels[cat] || cat;
    }

    // ==================== RENDER ====================
    function show() {
        window.StudFlow.app.showScreen('conseils');
    }

    function renderMain() {
        var container = document.getElementById('conseils-content');
        if (!container) return;

        if (!currentConseil) {
            currentConseil = pickConseil();
        }

        var c = currentConseil;
        var history = getHistory();

        container.innerHTML = '<div class="csl-container">'
            // Header
            + '<div class="csl-header">'
            + '<h2>💡 Conseil du moment</h2>'
            + '<span class="csl-counter">' + history.total + ' conseils lus</span>'
            + '</div>'

            // Card
            + '<div class="csl-card">'
            + '<div class="csl-card-cat">' + getCatLabel(c.cat) + '</div>'
            + '<h3 class="csl-card-title">' + c.titre + '</h3>'

            + '<div class="csl-card-section">'
            + '<div class="csl-card-label">💡 Explication</div>'
            + '<p>' + c.explication + '</p>'
            + '</div>'

            + '<div class="csl-card-section csl-action">'
            + '<div class="csl-card-label">⚡ Action concrete</div>'
            + '<p>' + c.action + '</p>'
            + '</div>'

            + '<div class="csl-card-motivation">'
            + '<p>' + c.motivation + '</p>'
            + '</div>'
            + '</div>'

            // Button
            + '<button class="csl-btn-new" data-action="conseils.nouveau">Nouveau conseil →</button>'
            + '</div>';

        // XP
        if (window.StudFlow.gamification) {
            window.StudFlow.gamification.addXP('conseil_lu');
        }
        if (window.StudFlow.stats) window.StudFlow.stats.recordActivity('conseil');
    }

    function nouveau() {
        currentConseil = pickConseil();
        renderMain();
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.conseils = {
        show: show,
        renderMain: renderMain,
        nouveau: nouveau
    };
})();
