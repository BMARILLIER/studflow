// adviceGenerator.js — Generateur de conseils adaptes au profil
(function() {

    var engine = function() { return window.StudFlow.engine; };

    // ==================== BASE DE CONSEILS ====================
    var ADVICE_DB = {
        stress: [
            {
                titre: 'Le stress prepare ton cerveau',
                explication: 'Un stress modere ameliore la concentration et la memoire. C\'est quand il deborde qu\'il bloque. Apprends a le doser, pas a le supprimer.',
                action: 'Inspire 4s, retiens 7s, expire 8s. Repete 3 fois. Ca prend 1 minute et ca calme le systeme nerveux.',
                encouragement: 'Tu as un super pouvoir : tu peux calmer ton corps en 60 secondes.'
            },
            {
                titre: 'Nomme ton stress',
                explication: 'Quand tu dis "je suis stresse", ca active ton cortex prefrontal qui calme l\'amygdale. Nommer l\'emotion la reduit.',
                action: 'Ecris sur un papier ce qui te stresse. Juste l\'ecrire reduit l\'intensite de 40%.',
                encouragement: 'Le stress prouve que tu tiens a ta reussite. C\'est une force.'
            },
            {
                titre: 'Le scan corporel express',
                explication: 'Le stress se loge dans le corps : epaules, machoire, ventre. Detendre ces zones envoie un signal de calme au cerveau.',
                action: 'Ferme les yeux. Relache tes epaules. Desserre ta machoire. Respire par le ventre. 30 secondes suffisent.',
                encouragement: 'Ton corps et ton esprit sont connectes. Calme l\'un, l\'autre suit.'
            },
            {
                titre: 'La visualisation positive',
                explication: 'Le cerveau ne fait pas bien la difference entre imaginer et vivre. Visualiser ta reussite active les memes circuits que la reussir vraiment.',
                action: 'Ferme les yeux 1 minute. Imagine-toi le jour du bac, calme et confiant, en train d\'ecrire tes reponses.',
                encouragement: 'Ce que tu imagines souvent, tu le realises plus facilement.'
            }
        ],
        concentration: [
            {
                titre: 'La regle du telephone',
                explication: 'Chaque notification coupe ta concentration pendant 23 minutes. Ton cerveau met du temps a revenir en mode focus.',
                action: 'Mets ton telephone dans une autre piece pendant 25 minutes. Pas en silencieux. Dans une AUTRE piece.',
                encouragement: 'Une heure sans telephone vaut trois heures avec. Teste et tu verras.'
            },
            {
                titre: 'Le Pomodoro adapte',
                explication: 'Ton cerveau fonctionne par cycles. 25 min de focus puis 5 min de pause est le rythme optimal pour la plupart des gens.',
                action: 'Lance un timer de 25 min. Travaille sans interruption. Pause 5 min. Repete 4 fois puis grande pause.',
                encouragement: '4 Pomodoros = 2h de vrai travail. C\'est enorme et c\'est a ta portee.'
            },
            {
                titre: 'Commence par le plus dur',
                explication: 'Ta concentration est maximale en debut de session. Elle baisse naturellement apres 45 min. Place le travail difficile en premier.',
                action: 'Identifie LA tache la plus difficile de ta session. Attaque-la en premier. Le reste sera facile.',
                encouragement: 'Si tu fais le plus dur d\'abord, le reste de la journee est en descente.'
            }
        ],
        organisation: [
            {
                titre: 'La regle des 3 taches',
                explication: 'Les to-do lists de 15 items sont faites pour echouer. 3 priorites par jour, c\'est le maximum efficace.',
                action: 'Ce soir, ecris tes 3 taches pour demain. Pas 10. Juste 3. Commence par la premiere.',
                encouragement: 'Simplicite = efficacite. Tu vas voir la difference.'
            },
            {
                titre: 'Prevois 30% de temps en plus',
                explication: 'On sous-estime toujours le temps necessaire. Ajoute 30% a chaque estimation pour un planning realiste.',
                action: 'Si tu penses qu\'un exercice prend 30 min, prevois 40. Un planning realiste est un planning que tu suis.',
                encouragement: 'Un plan que tu respectes vaut mieux qu\'un plan parfait que tu abandonnes.'
            },
            {
                titre: 'La preparation du soir',
                explication: 'Preparer le lendemain le soir reduit le stress matinal. Ton cerveau dort mieux quand il sait ce qui l\'attend.',
                action: 'Avant de dormir : note tes 3 priorites et pose ton cours ouvert a la bonne page.',
                encouragement: 'Se coucher organise, c\'est se lever motive.'
            }
        ],
        motivation: [
            {
                titre: 'La motivation vient en faisant',
                explication: 'On croit qu\'il faut etre motive pour commencer. C\'est l\'inverse : l\'action cree la motivation.',
                action: 'Engage-toi pour 5 minutes seulement. Pas plus. Le cerveau s\'active et continue naturellement.',
                encouragement: 'Le plus dur c\'est les 5 premieres minutes. Tu en es capable.'
            },
            {
                titre: 'Celebre tes micro-victoires',
                explication: 'Ton cerveau a besoin de dopamine pour rester motive. Chaque petite tache terminee en libere.',
                action: 'Apres chaque session, note une chose que tu as accomplie. Meme minuscule, ca compte.',
                encouragement: 'Tu fais plus de progres que tu ne le penses.'
            },
            {
                titre: 'Ton futur toi te remercie',
                explication: 'Chaque minute investie aujourd\'hui est un cadeau pour demain. Les eleves qui reussissent sont les plus reguliers, pas les plus intelligents.',
                action: 'Choisis UNE chose a faire dans les 10 prochaines minutes. Fais-la.',
                encouragement: 'Tu n\'as pas besoin d\'etre parfait. Juste regulier.'
            }
        ],
        confiance: [
            {
                titre: 'Tu sais plus que tu ne le crois',
                explication: 'Le cerveau retient bien plus qu\'on ne pense. Le probleme est la recuperation, pas le stockage.',
                action: 'Ferme ton cours. Ecris tout ce dont tu te souviens. Tu seras surpris.',
                encouragement: 'La confiance se construit en decouvrant ce qu\'on sait.'
            },
            {
                titre: 'L\'echec est un professeur',
                explication: 'Ton cerveau apprend PLUS de ses erreurs que de ses succes. Chaque erreur renforce les bonnes connexions.',
                action: 'Reprends un exercice rate. Analyse POURQUOI tu t\'es trompe. Cette erreur ne se reproduira plus.',
                encouragement: 'Se tromper n\'est pas echouer. C\'est apprendre plus vite.'
            },
            {
                titre: 'Ta progression est reelle',
                explication: 'On oublie d\'ou on vient. Compare-toi a toi-meme il y a un mois, pas aux autres.',
                action: 'Note 3 choses que tu sais faire aujourd\'hui que tu ne savais pas il y a un mois.',
                encouragement: 'La seule course qui compte est celle contre toi-meme d\'hier.'
            }
        ],
        procrastination: [
            {
                titre: 'Tu ne procrastines pas par paresse',
                explication: 'La procrastination est une reaction emotionnelle. Ton cerveau fuit l\'inconfort, pas la tache.',
                action: 'Identifie ce qui te bloque : trop long ? Trop dur ? Commence par la partie la plus facile.',
                encouragement: 'Comprendre pourquoi tu procrastines, c\'est deja arreter.'
            },
            {
                titre: 'La technique du "juste un"',
                explication: 'Ne pense pas a la montagne. Juste au premier pas. "Juste un exercice", "juste une page".',
                action: 'Dis-toi : je fais JUSTE un exercice. Si apres tu veux arreter, tu peux. Sans culpabilite.',
                encouragement: 'Un pas c\'est deja avancer.'
            },
            {
                titre: 'Rends le debut facile',
                explication: 'Le cerveau est attire par ce qui est deja commence. Prepare tout a l\'avance.',
                action: 'Ce soir, pose ton cours ouvert sur ton bureau. Demain tu n\'auras qu\'a t\'asseoir.',
                encouragement: 'Preparer le terrain, c\'est deja travailler.'
            }
        ],
        bac: [
            {
                titre: 'Les annales sont ton meilleur outil',
                explication: 'Les sujets du bac suivent des schemas recurrents. En les pratiquant, tu les reconnais plus vite le jour J.',
                action: 'Choisis une matiere. Fais UN sujet type en conditions reelles, avec chronometre.',
                encouragement: 'Chaque sujet pratique aujourd\'hui est un point de plus le jour du bac.'
            },
            {
                titre: 'La methode fiche express',
                explication: 'Une bonne fiche tient sur une page recto. Si tu as besoin de plus, synthetise davantage.',
                action: 'Prends un chapitre. Resume-le en 5 points cles max. Utilise couleurs et schemas.',
                encouragement: 'Creer une fiche, c\'est deja reviser.'
            },
            {
                titre: 'Lis tout le sujet d\'abord',
                explication: 'La premiere erreur au bac : foncer sans lire. Lire tout d\'abord permet de gerer son temps et reperer les questions faciles.',
                action: 'Entraine-toi : a chaque exercice, lis l\'enonce complet avant d\'ecrire un seul mot.',
                encouragement: 'Les 5 minutes de lecture sont les mieux investies de l\'epreuve.'
            }
        ],
        fatigue: [
            {
                titre: 'Le sommeil est ta memoire',
                explication: 'Pendant le sommeil, le cerveau consolide les apprentissages. Dormir 8h apres une revision est plus efficace que reviser 3h de plus.',
                action: 'Ce soir, couche-toi 30 minutes plus tot. Pas de telephone au lit.',
                encouragement: 'Dormir n\'est pas perdre du temps. C\'est reviser en dormant.'
            },
            {
                titre: 'Les pauses sont productives',
                explication: 'Ton cerveau ne peut pas fonctionner a 100% des heures. Les pauses rechargent la concentration.',
                action: 'Toutes les 25 minutes, pause de 5 min. Leve-toi. Etire-toi. Bois de l\'eau.',
                encouragement: 'Les meilleurs athletes se reposent entre les sprints. Toi aussi.'
            }
        ]
    };

    // ==================== PROFIL → CATEGORIES PRIORITAIRES ====================
    var PROFIL_PRIO = {
        anxieux: ['stress', 'confiance', 'concentration'],
        procrastinateur: ['procrastination', 'motivation', 'concentration'],
        desorganise: ['organisation', 'concentration', 'bac'],
        surcharge: ['fatigue', 'stress', 'organisation'],
        confiance_faible: ['confiance', 'motivation', 'bac'],
        confiant: ['bac', 'concentration', 'organisation'],
        equilibre: ['motivation', 'concentration', 'organisation', 'bac', 'stress', 'confiance']
    };

    // ==================== GENERATION ====================
    function generate(options) {
        options = options || {};
        var profileKey = options.profile || getMainProfile();
        var category = options.category || null;
        var history = getHistory();

        var pool = [];

        if (category && ADVICE_DB[category]) {
            pool = ADVICE_DB[category].slice();
        } else {
            // Priority categories from profile
            var prio = PROFIL_PRIO[profileKey] || PROFIL_PRIO.equilibre;
            prio.forEach(function(cat) {
                if (ADVICE_DB[cat]) pool = pool.concat(ADVICE_DB[cat]);
            });
        }

        // Filter out recently seen
        var recent = history.recentIds || [];
        var filtered = pool.filter(function(a) {
            var id = a.titre;
            return recent.indexOf(id) === -1;
        });

        if (filtered.length === 0) {
            // Reset if all seen
            history.recentIds = [];
            filtered = pool;
        }

        var chosen = engine().pickRandom(filtered);

        // Track
        if (!history.recentIds) history.recentIds = [];
        history.recentIds.push(chosen.titre);
        if (history.recentIds.length > 15) history.recentIds = history.recentIds.slice(-10);
        history.total = (history.total || 0) + 1;
        history.lastDate = new Date().toISOString();
        saveHistory(history);

        return {
            titre: chosen.titre,
            explication: chosen.explication,
            action: chosen.action,
            encouragement: chosen.encouragement,
            category: category || 'adapte',
            profile: profileKey,
            generatedAt: new Date().toISOString()
        };
    }

    function getCategories() {
        return Object.keys(ADVICE_DB);
    }

    // ==================== HELPERS ====================
    function getMainProfile() {
        var p = window.StudFlow.storage.getUserProfile();
        return (p && p.mainProfile) ? p.mainProfile : 'equilibre';
    }

    function getHistory() {
        return window.StudFlow.storage.loadData('adviceGenHistory', { recentIds: [], total: 0 });
    }

    function saveHistory(h) {
        window.StudFlow.storage.saveData('adviceGenHistory', h);
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.adviceGenerator = {
        generate: generate,
        getCategories: getCategories
    };
})();
