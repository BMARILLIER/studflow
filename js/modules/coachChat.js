// coachChat.js — Coach IA conversationnel local-first
(function() {
    'use strict';

    var STORAGE_KEY = 'coachChat';
    var MAX_MESSAGES = 100;
    var PRUNE_TO = 50;
    var XP_COOLDOWN = 60000; // 60s
    var HISTORY_SIZE = 20;
    var lastXPTime = 0;

    // ==================== INTENT KEYWORDS ====================
    var INTENT_KEYWORDS = {
        confiance: {
            exact: ['nul', 'nule', 'nulle', 'nuls', 'bete', 'stupide', 'incapable', 'incompetent',
                    'debile', 'loser', 'pourri', 'mauvais', 'mauvaise', 'mediocre', 'echec'],
            partial: ['nul', 'incapab', 'incompet'],
            phrases: ['je suis nul', 'je suis nule', 'je suis nulle', 'je suis bete',
                      'je suis mauvais', 'je suis mauvaise', 'je comprends rien',
                      'j\'y arrive pas', 'j\'y arriverai jamais', 'je vais rater',
                      'je vais echouer', 'je suis pas capable', 'pas assez intelligent',
                      'pas assez bonne', 'trop bete', 'je sers a rien',
                      'je vaux rien', 'c\'est foutu', 'j\'ai tout rate',
                      'je suis pas fait pour ca', 'je suis pas faite pour ca',
                      'je comprends jamais rien', 'tout le monde est meilleur']
        },
        stress: {
            exact: ['stress', 'stresse', 'angoisse', 'anxieux', 'panique', 'peur', 'terrifie',
                    'anxiete', 'tremble', 'pleure', 'pleurer'],
            partial: ['angois', 'stres', 'paniqu', 'inquiet', 'nerveu', 'anxie'],
            phrases: ['j\'ai peur', 'je stresse', 'trop de pression', 'mal au ventre',
                      'boule au ventre', 'j\'arrive pas a dormir', 'je panique',
                      'je suis mort de trouille', 'je tremble', 'j\'ai envie de pleurer']
        },
        organisation: {
            exact: ['organiser', 'planning', 'planifier', 'agenda', 'routine'],
            partial: ['organis', 'planifi'],
            phrases: ['comment m\'organiser', 'par ou commencer', 'trop de trucs',
                      'je sais pas quoi faire', 'je sais pas par ou commencer']
        },
        revision: {
            exact: ['reviser', 'memoriser', 'apprendre', 'retenir', 'fiche', 'flashcard',
                    'quiz', 'methode', 'technique'],
            partial: ['revis', 'memori', 'appren', 'reten'],
            phrases: ['comment reviser', 'je retiens rien', 'j\'oublie tout',
                      'comment memoriser', 'ca rentre pas']
        },
        motivation: {
            exact: ['motivation', 'flemme', 'procrastine', 'demotiver', 'courage', 'envie',
                    'fatigue', 'epuise', 'epuisee', 'ras le bol'],
            partial: ['motiv', 'procrast', 'flemm', 'fatigu', 'epuis'],
            phrases: ['pas envie', 'la flemme', 'pas motive', 'j\'arrive pas a commencer',
                      'j\'en ai marre', 'c\'est trop dur', 'j\'abandonne',
                      'a quoi ca sert', 'ca sert a rien', 'je veux arreter',
                      'j\'en peux plus', 'trop fatigue', 'trop fatiguee']
        },
        examen: {
            exact: ['examen', 'bac', 'controle', 'epreuve', 'interro', 'oral', 'note',
                    'resultat', 'bulletins'],
            partial: ['exam', 'contro', 'interr'],
            phrases: ['j\'ai un controle', 'controle demain', 'preparer le bac',
                      'interro demain', 'peur de l\'exam', 'j\'ai eu une mauvaise note',
                      'mauvaise note']
        },
        general: {
            exact: ['salut', 'bonjour', 'hey', 'coucou', 'merci', 'aide', 'oui', 'non', 'ok'],
            partial: [],
            phrases: ['ca va', 'aide moi', 'quoi de neuf']
        }
    };

    // ==================== RESPONSE TEMPLATES ====================
    var RESPONSES = {
        confiance: [
            {
                id: 'conf_01',
                text: "Hey, stop. Tu n'es PAS nul(le). Le fait que tu sois ici montre que tu veux progresser, et c'est exactement ce qui fait la difference.",
                followUp: "On va te le prouver. Tu veux voir tes progres ?",
                action: { type: 'module', target: 'stats', label: 'Voir mes progres' },
                condition: null
            },
            {
                id: 'conf_02',
                text: "Je t'arrete tout de suite : ne pas savoir quelque chose, c'est le DEBUT de l'apprentissage. Pas un echec. Personne ne nait en sachant.",
                followUp: "Commence par un petit quiz pour voir ce que tu sais deja.",
                action: { type: 'module', target: 'quiz', label: 'Quiz pour se tester' },
                condition: null
            },
            {
                id: 'conf_03',
                text: "Tu sais ce qui est vraiment nul ? Abandonner. Et tu n'abandonnes pas puisque tu es la. Alors on avance ensemble, etape par etape.",
                followUp: "Une micro-session de 10 min pour reprendre confiance ?",
                action: { type: 'module', target: 'focus', label: 'Session Focus 10min' },
                condition: null
            },
            {
                id: 'conf_04',
                text: "Les meilleurs eleves ont tous doute a un moment. La difference, c'est qu'ils ont continue malgre le doute. Tu peux le faire aussi.",
                followUp: null,
                action: { type: 'module', target: 'confiance', label: 'Boost confiance' },
                condition: null
            },
            {
                id: 'conf_05',
                text: "Ton cerveau n'est pas defaillant — il a juste besoin de la bonne methode. La memoire, ca se travaille. Et c'est exactement pour ca que je suis la.",
                followUp: "Tu veux decouvrir des techniques de memorisation ?",
                action: { type: 'module', target: 'flashcards', label: 'Flashcards' },
                condition: null
            }
        ],
        stress: [
            {
                id: 'stress_01',
                text: "Le stress montre que tu prends ca au serieux, c'est une force. {conseil_action}",
                followUp: "Tu veux essayer un exercice de respiration ?",
                action: { type: 'module', target: 'breathing', label: 'Respiration 4-7-8' },
                condition: null
            },
            {
                id: 'stress_02',
                text: "C'est normal de stresser. {conseil_explication} L'important c'est de ne pas le laisser te bloquer.",
                followUp: "On travaille ensemble pour le gerer ?",
                action: { type: 'module', target: 'stress', label: 'Anti-stress' },
                condition: null
            },
            {
                id: 'stress_03',
                text: "{conseil_encouragement} Tu as deja fait face au stress avant et tu t'en es sorti.",
                followUp: "Tu veux qu'on regarde tes progres pour te rassurer ?",
                action: { type: 'module', target: 'stats', label: 'Mes progres' },
                condition: null
            },
            {
                id: 'stress_04',
                text: "Quand le stress monte, ton corps te parle. {conseil_action}",
                followUp: null,
                action: { type: 'module', target: 'breathing', label: 'Respiration guidee' },
                condition: null
            },
            {
                id: 'stress_05',
                text: "Le stress c'est de l'energie mal dirigee. On va la canaliser. {conseil_encouragement}",
                followUp: "Une session focus courte peut aider a reprendre le controle.",
                action: { type: 'module', target: 'focus', label: 'Session Focus 15min' },
                condition: null
            }
        ],
        organisation: [
            {
                id: 'orga_01',
                text: "S'organiser, c'est se simplifier la vie. {conseil_action}",
                followUp: "Tu veux creer un planning avec le Plan Bac ?",
                action: { type: 'module', target: 'planbac', label: 'Mon Plan Bac' },
                condition: null
            },
            {
                id: 'orga_02',
                text: "{conseil_explication} Commence petit : une seule tache a la fois.",
                followUp: "On lance une session focus pour avancer ?",
                action: { type: 'module', target: 'focus', label: 'Session Focus' },
                condition: null
            },
            {
                id: 'orga_03',
                text: "Pas besoin d'un plan parfait. Juste un premier pas. {conseil_encouragement}",
                followUp: null,
                action: null,
                condition: null
            },
            {
                id: 'orga_04',
                text: "{conseil_action} Le secret c'est la regularite, pas la perfection.",
                followUp: "Regarde tes statistiques pour voir ta regularite !",
                action: { type: 'module', target: 'stats', label: 'Ma progression' },
                condition: function(stats) { return stats.streakDays >= 2; }
            },
            {
                id: 'orga_05',
                text: "Quand tout semble enorme, decompose. {conseil_explication}",
                followUp: "Le module urgence peut t'aider a prioriser.",
                action: { type: 'module', target: 'urgence', label: 'Controle demain' },
                condition: null
            }
        ],
        revision: [
            {
                id: 'rev_01',
                text: "Reviser, c'est pas relire 10 fois. C'est tester sa memoire. {conseil_action}",
                followUp: "Tu veux lancer un quiz pour tester tes connaissances ?",
                action: { type: 'module', target: 'quiz', label: 'Lancer un quiz' },
                condition: null
            },
            {
                id: 'rev_02',
                text: "{conseil_explication} La repetition espacee est ta meilleure alliee.",
                followUp: "Essaye les flashcards avec repetition espacee !",
                action: { type: 'module', target: 'flashcards', label: 'Flashcards' },
                condition: null
            },
            {
                id: 'rev_03',
                text: "La technique Feynman : explique le concept comme si tu parlais a un enfant de 10 ans. Si tu bloques, c'est la qu'il faut reviser. {conseil_encouragement}",
                followUp: null,
                action: null,
                condition: null
            },
            {
                id: 'rev_04',
                text: "{conseil_action} Et n'oublie pas : creer une fiche c'est deja reviser !",
                followUp: "Tu veux generer une fiche avec le generateur ?",
                action: { type: 'module', target: 'generators', label: 'Generateur de fiches' },
                condition: null
            },
            {
                id: 'rev_05',
                text: "Tu retiens plus que tu ne le crois. Le probleme c'est la recuperation, pas le stockage. {conseil_explication}",
                followUp: "Un quiz t'aidera a renforcer les connexions.",
                action: { type: 'module', target: 'quiz', label: 'Quiz rapide' },
                condition: null
            }
        ],
        motivation: [
            {
                id: 'motiv_01',
                text: "La motivation vient en faisant, pas en attendant. {conseil_action}",
                followUp: "Une micro-session de 10 min pour demarrer ?",
                action: { type: 'module', target: 'focus', label: 'Micro-session 10min' },
                condition: null
            },
            {
                id: 'motiv_02',
                text: "{conseil_encouragement} Tu es deja la, c'est un premier pas enorme.",
                followUp: "Regarde tes progres, ca va te motiver !",
                action: { type: 'module', target: 'stats', label: 'Mes progres' },
                condition: null
            },
            {
                id: 'motiv_03',
                text: "C'est normal d'avoir la flemme. {conseil_explication} Le truc c'est de commencer par le plus petit pas possible.",
                followUp: null,
                action: null,
                condition: null
            },
            {
                id: 'motiv_04',
                text: "Ton futur toi te remercie pour chaque minute investie aujourd'hui. {conseil_encouragement}",
                followUp: "Allez, on lance un focus ?",
                action: { type: 'module', target: 'focus', label: 'Session Focus' },
                condition: null
            },
            {
                id: 'motiv_05',
                text: "{conseil_action} Rappelle-toi pourquoi tu fais tout ca. L'effort d'aujourd'hui construit la reussite de demain.",
                followUp: null,
                action: { type: 'module', target: 'confiance', label: 'Boost confiance' },
                condition: null
            }
        ],
        examen: [
            {
                id: 'exam_01',
                text: "Un controle demain ? Pas de panique. {conseil_action} Concentre-toi sur l'essentiel.",
                followUp: "Le mode urgence est fait pour ca !",
                action: { type: 'module', target: 'urgence', label: 'Mode urgence' },
                condition: null
            },
            {
                id: 'exam_02',
                text: "{conseil_explication} Fais des annales, c'est le meilleur entrainement pour le jour J.",
                followUp: "Tu veux faire un quiz pour t'entrainer ?",
                action: { type: 'module', target: 'quiz', label: 'Quiz d\'entrainement' },
                condition: null
            },
            {
                id: 'exam_03',
                text: "Le jour de l'exam, lis TOUT le sujet avant d'ecrire. Ces 5 minutes sont les mieux investies. {conseil_encouragement}",
                followUp: null,
                action: null,
                condition: null
            },
            {
                id: 'exam_04',
                text: "{conseil_action} Et surtout, dors bien la veille. Ton cerveau consolide pendant le sommeil.",
                followUp: "Prepare tes fiches essentielles maintenant.",
                action: { type: 'module', target: 'flashcards', label: 'Fiches de revision' },
                condition: null
            },
            {
                id: 'exam_05',
                text: "Tu as travaille pour ca. Fais confiance a ta preparation. {conseil_encouragement}",
                followUp: "Un exercice de respiration avant l'exam fait des miracles.",
                action: { type: 'module', target: 'breathing', label: 'Respiration pre-exam' },
                condition: function(stats) { return stats.focusSessions >= 3; }
            }
        ],
        general: [
            {
                id: 'gen_01',
                text: "Je peux t'aider sur : les revisions, le stress, la motivation, l'organisation ou la preparation d'un exam. Dis-moi ce dont tu as besoin !",
                followUp: null,
                action: null,
                condition: null
            },
            {
                id: 'gen_02',
                text: "Tu as {xp} XP et tu es niveau {level}. Qu'est-ce qu'on travaille aujourd'hui ? Revision, organisation, motivation ?",
                followUp: null,
                action: null,
                condition: null
            },
            {
                id: 'gen_03',
                text: "Dis-moi ce qui te preoccupe — stress, revisions, motivation, un controle qui approche ? Je m'adapte a toi.",
                followUp: null,
                action: null,
                condition: null
            },
            {
                id: 'gen_04',
                text: "Je ne suis pas sur de comprendre. Tu peux me dire ce qui te preoccupe ? Par exemple : revisions, stress, motivation, organisation...",
                followUp: null,
                action: null,
                condition: null
            },
            {
                id: 'gen_05',
                text: "Tu es en streak de {streak} jours ! C'est la regularite qui fait la difference.",
                followUp: null,
                action: null,
                condition: function(stats) { return stats.streakDays >= 2; }
            }
        ]
    };

    // ==================== GREETINGS PER PROFILE ====================
    var GREETINGS = {
        anxieux: "Salut ! Je suis ton coach. Ici, zero pression. On avance a ton rythme. Dis-moi comment tu te sens.",
        procrastinateur: "Hey ! Bien joue d'etre la, c'est deja un premier pas. On commence par quoi ?",
        desorganise: "Salut ! On va mettre de l'ordre ensemble. Dis-moi ce qui te bloque.",
        surcharge: "Hey ! Respire un coup. Tu fais deja beaucoup. On va simplifier tout ca.",
        confiance_faible: "Salut ! Tu es plus capable que tu ne le penses. Je suis la pour te le prouver.",
        confiant: "Hey ! Pret a passer au niveau superieur ? Dis-moi ce qu'on attaque.",
        equilibre: "Salut ! Content de te voir. Qu'est-ce qu'on travaille aujourd'hui ?"
    };

    // ==================== SUGGESTIONS ====================
    var SUGGESTIONS_MAP = {
        _greeting: {
            anxieux: ['Je stresse un peu', 'Comment reviser sans stress', 'Respiration guidee'],
            procrastinateur: ['J\'arrive pas a commencer', 'Methode revision', 'Session focus'],
            desorganise: ['Par ou commencer', 'Faire un planning', 'Methode revision'],
            surcharge: ['Trop de trucs a faire', 'Comment prioriser', 'Besoin de souffler'],
            confiance_faible: ['Je suis pas sur de moi', 'Comment progresser', 'Quiz pour tester'],
            confiant: ['Technique avancee', 'Preparer le bac', 'Session focus intense'],
            equilibre: ['Je stresse', 'Comment reviser', 'Motive-moi']
        },
        confiance: ['Comment progresser', 'Technique de memorisation', 'Voir mes progres', 'Autre chose'],
        stress: ['Exercice de respiration', 'Technique anti-stress', 'Exam bientot', 'Autre chose'],
        organisation: ['Faire un planning', 'Par ou commencer', 'Mon Plan Bac', 'Autre chose'],
        revision: ['Technique Feynman', 'Faire des flashcards', 'Memorisation', 'Autre chose'],
        motivation: ['Micro-session 10 min', 'Mes progres', 'Pourquoi je travaille', 'Autre chose'],
        examen: ['Controle demain', 'Preparer le bac', 'Fiches de revision', 'Autre chose'],
        general: ['Je stresse', 'Comment reviser', 'Motive-moi', 'Preparer un controle']
    };

    // ==================== STORAGE ====================
    function loadChatData() {
        return window.StudFlow.storage.loadData(STORAGE_KEY, {
            messages: [],
            messageCount: 0,
            intentsUsed: {},
            lastIntents: [],
            responseHistory: [],
            sessionCount: 0,
            lastActivity: null
        });
    }

    function saveChatData(data) {
        // Prune if over max
        if (data.messages.length > MAX_MESSAGES) {
            data.messages = data.messages.slice(-PRUNE_TO);
        }
        window.StudFlow.storage.saveData(STORAGE_KEY, data);
    }

    // ==================== NLP ====================
    function normalizeInput(text) {
        return text
            .toLowerCase()
            .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
            .replace(/[^a-z0-9\s']/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
    }

    function detectIntent(text) {
        var normalized = normalizeInput(text);
        var tokens = normalized.split(' ');
        var scores = {};

        Object.keys(INTENT_KEYWORDS).forEach(function(intent) {
            var kw = INTENT_KEYWORDS[intent];
            var score = 0;

            // 1. Phrase matching (+3)
            kw.phrases.forEach(function(phrase) {
                var normPhrase = normalizeInput(phrase);
                if (normalized.indexOf(normPhrase) !== -1) {
                    score += 3;
                }
            });

            // 2. Exact word matching (+1.5)
            kw.exact.forEach(function(word) {
                var normWord = normalizeInput(word);
                if (tokens.indexOf(normWord) !== -1) {
                    score += 1.5;
                }
            });

            // 3. Partial stem matching (+0.8)
            kw.partial.forEach(function(stem) {
                var normStem = normalizeInput(stem);
                for (var i = 0; i < tokens.length; i++) {
                    if (tokens[i].indexOf(normStem) !== -1) {
                        score += 0.8;
                        break;
                    }
                }
            });

            // general gets reduced weight
            if (intent === 'general') {
                score *= 0.5;
            }

            scores[intent] = score;
        });

        // Find best
        var bestIntent = 'general';
        var bestScore = 0;
        Object.keys(scores).forEach(function(intent) {
            if (scores[intent] > bestScore) {
                bestScore = scores[intent];
                bestIntent = intent;
            }
        });

        // Minimum threshold
        if (bestScore < 0.8) {
            bestIntent = 'general';
            bestScore = 0;
        }

        return { intent: bestIntent, score: bestScore };
    }

    // ==================== CONTEXT STATS ====================
    function getContextStats() {
        var stats = {
            xp: 0, level: 1, streak: 0, streakDays: 0,
            focusSessions: 0, fichesCount: 0, quizCount: 0
        };

        if (window.StudFlow.gamification) {
            var gStats = window.StudFlow.gamification.getStats();
            stats.xp = gStats.xp || 0;
            stats.level = gStats.level || 1;
            stats.streak = gStats.streak || 0;
            stats.streakDays = gStats.streak || 0;
        }

        var focusStats = window.StudFlow.storage.loadData('focusStats', { sessions: 0 });
        stats.focusSessions = focusStats.sessions || 0;

        var ficheHistory = window.StudFlow.storage.loadData('ficheGenHistory', { total: 0 });
        stats.fichesCount = ficheHistory.total || 0;

        var quizHistory = window.StudFlow.storage.loadData('quizGenHistory', { total: 0 });
        stats.quizCount = quizHistory.total || 0;

        return stats;
    }

    // ==================== TEMPLATE INTERPOLATION ====================
    function interpolateTemplate(template, stats, profileKey) {
        var result = template;

        result = result.replace(/\{xp\}/g, String(stats.xp));
        result = result.replace(/\{level\}/g, String(stats.level));
        result = result.replace(/\{streak\}/g, String(stats.streak));
        result = result.replace(/\{focusSessions\}/g, String(stats.focusSessions));
        result = result.replace(/\{fichesCount\}/g, String(stats.fichesCount));
        result = result.replace(/\{quizCount\}/g, String(stats.quizCount));

        // Dynamic advice from adviceGenerator
        if (result.indexOf('{conseil_') !== -1) {
            var advice = null;
            if (window.StudFlow.adviceGenerator) {
                try {
                    advice = window.StudFlow.adviceGenerator.generate({ profile: profileKey });
                } catch(e) { /* fallback */ }
            }
            if (advice) {
                result = result.replace(/\{conseil_action\}/g, advice.action || '');
                result = result.replace(/\{conseil_explication\}/g, advice.explication || '');
                result = result.replace(/\{conseil_encouragement\}/g, advice.encouragement || '');
            } else {
                result = result.replace(/\{conseil_action\}/g, 'Commence par un petit pas concret.');
                result = result.replace(/\{conseil_explication\}/g, 'Chaque effort compte.');
                result = result.replace(/\{conseil_encouragement\}/g, 'Tu es sur la bonne voie.');
            }
        }

        return result;
    }

    // ==================== RESPONSE GENERATION ====================
    function generateResponse(intent, userText) {
        var chatData = loadChatData();
        var stats = getContextStats();
        var profileKey = getMainProfile();
        var templates = RESPONSES[intent] || RESPONSES.general;

        // Filter by condition
        var eligible = templates.filter(function(t) {
            if (t.condition && typeof t.condition === 'function') {
                return t.condition(stats);
            }
            return true;
        });

        // Exclude recently used
        var history = chatData.responseHistory || [];
        var fresh = eligible.filter(function(t) {
            return history.indexOf(t.id) === -1;
        });

        // Reset if all seen for this intent
        if (fresh.length === 0) {
            chatData.responseHistory = history.filter(function(id) {
                return id.indexOf(intent.substring(0, 3)) === -1;
            });
            fresh = eligible;
        }

        // Random pick
        var chosen = fresh[Math.floor(Math.random() * fresh.length)];

        // Track in history
        chatData.responseHistory.push(chosen.id);
        if (chatData.responseHistory.length > HISTORY_SIZE) {
            chatData.responseHistory = chatData.responseHistory.slice(-HISTORY_SIZE);
        }

        // Track intent usage
        if (!chatData.intentsUsed) chatData.intentsUsed = {};
        chatData.intentsUsed[intent] = (chatData.intentsUsed[intent] || 0) + 1;

        // Track last intents
        if (!chatData.lastIntents) chatData.lastIntents = [];
        chatData.lastIntents.push(intent);
        if (chatData.lastIntents.length > 3) chatData.lastIntents = chatData.lastIntents.slice(-3);

        saveChatData(chatData);

        // Interpolate
        var text = interpolateTemplate(chosen.text, stats, profileKey);
        var followUp = chosen.followUp ? interpolateTemplate(chosen.followUp, stats, profileKey) : null;

        return {
            text: text,
            followUp: followUp,
            action: chosen.action || null,
            suggestions: getSuggestions(intent, profileKey)
        };
    }

    // ==================== SUGGESTIONS ====================
    function getSuggestions(intent, profileKey) {
        return SUGGESTIONS_MAP[intent] || SUGGESTIONS_MAP.general;
    }

    function getGreetingSuggestions(profileKey) {
        var greetMap = SUGGESTIONS_MAP._greeting;
        return greetMap[profileKey] || greetMap.equilibre;
    }

    // ==================== HELPERS ====================
    function getMainProfile() {
        var p = window.StudFlow.storage.getUserProfile();
        return (p && p.mainProfile) ? p.mainProfile : 'equilibre';
    }

    function makeId() {
        return 'msg_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
    }

    function getGreeting(profileKey) {
        return GREETINGS[profileKey] || GREETINGS.equilibre;
    }

    function isLLMActive() {
        return window.StudFlow.coachLLM && window.StudFlow.coachLLM.isAvailable();
    }

    // ==================== XP ====================
    function rewardXP() {
        var now = Date.now();
        if (now - lastXPTime < XP_COOLDOWN) return;
        lastXPTime = now;
        if (window.StudFlow.gamification) {
            window.StudFlow.gamification.addXP('coach_chat');
        }
    }

    // ==================== MESSAGE MANAGEMENT ====================
    function addMessage(role, text, extras) {
        var chatData = loadChatData();
        extras = extras || {};
        var msg = {
            id: makeId(),
            role: role,
            text: text,
            intent: extras.intent || null,
            timestamp: Date.now(),
            suggestions: extras.suggestions || null,
            action: extras.action || null,
            followUp: extras.followUp || null
        };
        chatData.messages.push(msg);
        if (role === 'user') {
            chatData.messageCount = (chatData.messageCount || 0) + 1;
        }
        chatData.lastActivity = Date.now();
        saveChatData(chatData);
        return msg;
    }

    // ==================== SEND MESSAGE FLOW ====================
    var FREE_MSG_LIMIT = 5;

    function sendMessage(text) {
        if (!text || !text.trim()) return;
        text = text.trim();

        // Free user daily message limit (premium = unlimited)
        var hasUnlimitedCoach = window.StudFlow.premium && window.StudFlow.premium.hasAccess('coach_illimite');
        if (!hasUnlimitedCoach) {
            var today = new Date().toISOString().slice(0, 10);
            var msgCount = window.StudFlow.storage.loadData('coachMsgCount', { date: '', count: 0 });
            if (msgCount.date !== today) { msgCount = { date: today, count: 0 }; }
            if (msgCount.count >= FREE_MSG_LIMIT) {
                addMessage('bot', 'Tu as utilise tes ' + FREE_MSG_LIMIT + ' echanges du jour \u2014 reviens demain, ou debloque le coaching illimite pour aller encore plus loin dans ta preparation !', {
                    action: { type: 'module', target: 'premium', label: 'Decouvrir les avantages' }
                });
                renderMessages();
                scrollToBottom();
                if (window.StudFlow.analytics) window.StudFlow.analytics.track('coach_limit_reached');
                return;
            }
            msgCount.count++;
            window.StudFlow.storage.saveData('coachMsgCount', msgCount);
        }

        // Add user message
        addMessage('user', text);
        renderMessages();
        scrollToBottom();

        // Clear input
        var input = document.getElementById('cc-input');
        if (input) input.value = '';

        // Show typing
        showTypingIndicator();

        // Try LLM first, fallback to keyword-matching
        if (window.StudFlow.coachLLM && window.StudFlow.coachLLM.isAvailable()) {
            window.StudFlow.coachLLM.sendMessage(text)
                .then(function(llmReply) {
                    hideTypingIndicator();
                    addMessage('bot', llmReply, {
                        intent: 'llm',
                        suggestions: getLLMSuggestions()
                    });
                    renderMessages();
                    scrollToBottom();
                    rewardXP();
                    if (window.StudFlow.badges) window.StudFlow.badges.checkAll();
                    if (window.StudFlow.analytics) window.StudFlow.analytics.track('coach_message', { mode: 'llm' });
                })
                .catch(function(err) {
                    hideTypingIndicator();
                    // Show error context then fallback
                    var errMsg = (err && err.type === 'auth')
                        ? 'Cle API invalide. Verifie dans Parametres. Je reponds en mode local.'
                        : 'Assistant IA temporairement indisponible. Je reponds en mode local.';
                    addMessage('bot', errMsg, { intent: 'system' });
                    fallbackKeyword(text);
                });
        } else {
            // No LLM → keyword-matching
            var delay = 300 + Math.floor(Math.random() * 500);
            setTimeout(function() {
                hideTypingIndicator();
                fallbackKeyword(text);
            }, delay);
        }
    }

    function fallbackKeyword(text) {
        var result = detectIntent(text);
        var response = generateResponse(result.intent, text);
        addMessage('bot', response.text, {
            intent: result.intent,
            followUp: response.followUp,
            action: response.action,
            suggestions: response.suggestions
        });
        renderMessages();
        scrollToBottom();
        rewardXP();
        if (window.StudFlow.badges) window.StudFlow.badges.checkAll();
        if (window.StudFlow.analytics) window.StudFlow.analytics.track('coach_message', { mode: 'keyword', intent: result.intent });
    }

    function getLLMSuggestions() {
        return [
            'Explique plus simplement',
            'Donne-moi un exercice',
            'Comment reviser efficacement ?'
        ];
    }

    function useSuggestion(text) {
        sendMessage(text);
    }

    // ==================== ACTIONS ====================
    function executeAction(type, target) {
        if (type === 'module' && target) {
            if (window.StudFlow.app && window.StudFlow.app.showScreen) {
                window.StudFlow.app.showScreen(target);
            }
        }
    }

    // ==================== TYPING INDICATOR ====================
    function showTypingIndicator() {
        var container = document.getElementById('cc-messages');
        if (!container) return;
        var existing = container.querySelector('.cc-typing');
        if (existing) return;

        var el = document.createElement('div');
        el.className = 'cc-msg cc-msg-bot cc-typing-wrap';
        el.innerHTML = '<div class="cc-avatar">🎓</div>'
            + '<div class="cc-bubble cc-bubble-bot cc-typing">'
            + '<span class="cc-dot"></span>'
            + '<span class="cc-dot"></span>'
            + '<span class="cc-dot"></span>'
            + '</div>';
        container.appendChild(el);
        scrollToBottom();
    }

    function hideTypingIndicator() {
        var container = document.getElementById('cc-messages');
        if (!container) return;
        var typing = container.querySelector('.cc-typing-wrap');
        if (typing) typing.remove();
    }

    function scrollToBottom() {
        var container = document.getElementById('cc-messages');
        if (container) {
            setTimeout(function() {
                container.scrollTop = container.scrollHeight;
            }, 50);
        }
    }

    // ==================== RENDER ====================
    function renderMessage(msg) {
        var cls = 'cc-msg cc-msg-' + msg.role;
        var html = '<div class="' + cls + '">';

        if (msg.role === 'bot') {
            html += '<div class="cc-avatar">🎓</div>';
        }

        var bubbleCls = 'cc-bubble cc-bubble-' + msg.role;
        html += '<div class="' + bubbleCls + '">';

        // Use markdown rendering for LLM messages, plain escape for others
        var renderedText = (msg.intent === 'llm') ? renderBasicMarkdown(msg.text) : escapeHtml(msg.text);
        html += '<div class="cc-text">' + renderedText + '</div>';

        if (msg.followUp) {
            html += '<div class="cc-followup">' + escapeHtml(msg.followUp) + '</div>';
        }

        if (msg.action) {
            html += '<button class="cc-action-btn" data-action="coachChat.executeAction" data-param="' + msg.action.type + '" data-param2="' + msg.action.target + '">'
                + escapeHtml(msg.action.label) + ' →</button>';
        }

        // Timestamp
        var time = new Date(msg.timestamp);
        var h = String(time.getHours()).padStart(2, '0');
        var m = String(time.getMinutes()).padStart(2, '0');
        html += '<div class="cc-msg-time">' + h + ':' + m + '</div>';

        html += '</div>'; // bubble
        html += '</div>'; // msg

        return html;
    }

    function escapeHtml(text) {
        var div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    function renderBasicMarkdown(text) {
        var escaped = escapeHtml(text);
        // Bold: **text** → <strong>
        escaped = escaped.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
        // Bullet lists: lines starting with "- "
        escaped = escaped.replace(/^- (.+)$/gm, '<li>$1</li>');
        escaped = escaped.replace(/((?:<li>.*<\/li>\n?)+)/g, '<ul>$1</ul>');
        // Line breaks
        escaped = escaped.replace(/\n/g, '<br>');
        // Clean extra <br> around <ul>
        escaped = escaped.replace(/<br><ul>/g, '<ul>');
        escaped = escaped.replace(/<\/ul><br>/g, '</ul>');
        return escaped;
    }

    function renderMessages() {
        var container = document.getElementById('cc-messages');
        if (!container) return;

        var chatData = loadChatData();
        var msgs = chatData.messages;

        var html = '';
        msgs.forEach(function(msg) {
            html += renderMessage(msg);
        });

        container.innerHTML = html;

        // Render suggestions after last bot message
        renderSuggestions(chatData);
    }

    function renderSuggestions(chatData) {
        var container = document.getElementById('cc-suggestions');
        if (!container) return;

        var msgs = chatData.messages;
        var suggestions = null;

        // Get suggestions from last bot message
        for (var i = msgs.length - 1; i >= 0; i--) {
            if (msgs[i].role === 'bot' && msgs[i].suggestions) {
                suggestions = msgs[i].suggestions;
                break;
            }
        }

        if (!suggestions) {
            suggestions = getGreetingSuggestions(getMainProfile());
        }

        var html = '';
        suggestions.forEach(function(s) {
            html += '<button class="cc-suggestion" data-action="coachChat.useSuggestion" data-param="' + escapeHtml(s).replace(/"/g, '&quot;') + '">'
                + escapeHtml(s) + '</button>';
        });

        container.innerHTML = html;
    }

    function render() {
        var el = document.getElementById('coach-content');
        if (!el) return;

        // Init LLM module if available
        if (window.StudFlow.coachLLM && window.StudFlow.coachLLM.init) {
            window.StudFlow.coachLLM.init();
        }

        var chatData = loadChatData();
        var profileKey = getMainProfile();

        // Increment session
        chatData.sessionCount = (chatData.sessionCount || 0) + 1;
        saveChatData(chatData);

        // If first ever message, add greeting
        if (chatData.messages.length === 0) {
            var greetText = getGreeting(profileKey);
            addMessage('bot', greetText, {
                suggestions: getGreetingSuggestions(profileKey)
            });
            chatData = loadChatData();
        }

        var html = '<div class="cc-container">'
            // Top bar
            + '<div class="cc-topbar">'
            + '<div class="cc-topbar-left">'
            + '<div class="cc-topbar-title">Coach IA</div>'
            + (isLLMActive() ? '<span class="cc-badge-llm">Assistant pedagogique (beta)</span>' : '')
            + '</div>'
            + '<div class="cc-topbar-actions">'
            + '<button class="cc-topbar-btn" data-action="coachChat.showFiches">📚 Fiches</button>'
            + '<button class="cc-topbar-btn" data-action="coachChat.showOldCoach">📅 Quotidien</button>'
            + '</div>'
            + '</div>'
            // Messages
            + '<div class="cc-messages" id="cc-messages"></div>'
            // Suggestions
            + '<div class="cc-suggestions" id="cc-suggestions"></div>'
            // Input
            + '<div class="cc-input-area">'
            + '<input type="text" class="cc-input" id="cc-input" placeholder="Ecris ton message..." '
            + 'onkeydown="if(event.key===\'Enter\')StudFlow.coachChat.sendMessage(this.value)">'
            + '<button class="cc-send-btn" data-action="coachChat.sendMessage" data-param="document.getElementById(\'cc-input">➤</button>'
            + '</div>'
            + '</div>';

        el.innerHTML = html;

        renderMessages();
        scrollToBottom();
    }

    // ==================== DELEGATION ====================
    function showOldCoach() {
        if (window.StudFlow.coach) {
            window.StudFlow.coach.render();
        }
    }

    function showFiches() {
        if (window.StudFlow.coach && window.StudFlow.coach.openFiches) {
            window.StudFlow.coach.openFiches();
        }
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.coachChat = {
        render: render,
        sendMessage: sendMessage,
        useSuggestion: useSuggestion,
        executeAction: executeAction,
        showOldCoach: showOldCoach,
        showFiches: showFiches
    };

})();
