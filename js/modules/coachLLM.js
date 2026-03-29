// coachLLM.js — Moteur LLM Groq pour Coach IA StudFlow
// Sprint B: retry, résumé auto, contexte enrichi, erreurs typées
(function() {
    'use strict';

    var API_URL = 'https://api.groq.com/openai/v1/chat/completions';
    var MODEL_PRIMARY = 'llama-3.3-70b-versatile';
    var MODEL_FALLBACK = 'mixtral-8x7b-32768';
    var MAX_TOKENS = 500;
    var TEMPERATURE = 0.7;
    var TIMEOUT_MS = 15000;
    var MAX_HISTORY = 10;
    var MAX_RETRIES = 1;
    var RETRY_DELAY_MS = 2000;

    var apiKey = null;
    var conversationHistory = [];

    // ==================== INIT ====================
    function init() {
        apiKey = window.StudFlow.storage.loadData('groq_api_key', '') || null;
    }

    // ==================== AVAILABILITY ====================
    function isAvailable() {
        // AI disabled for beta — no external calls
        if (window.StudFlow.features && !window.StudFlow.features.AI_ENABLED) return false;
        if (!apiKey) {
            apiKey = window.StudFlow.storage.loadData('groq_api_key', '') || null;
        }
        return !!apiKey && navigator.onLine;
    }

    // ==================== CONTEXT GATHERING ====================
    function gatherContext() {
        var ctx = {
            mainProfile: 'equilibre',
            scores: {},
            lastErrors: [],
            level: 1,
            xp: 0,
            activeSubject: null,
            dailyGoal: null,
            activeMission: null,
            focusSessions: 0,
            focusMinutes: 0,
            streak: 0
        };

        // Profile
        var profile = window.StudFlow.storage.getUserProfile();
        if (profile) {
            ctx.mainProfile = profile.mainProfile || 'equilibre';
            ctx.scores = profile.scores || {};
        }

        // Gamification
        if (window.StudFlow.gamification) {
            var gStats = window.StudFlow.gamification.getStats();
            ctx.level = gStats.level || 1;
            ctx.xp = gStats.xp || 0;
            ctx.streak = gStats.streak || 0;
        }

        // Focus stats
        var focusStats = window.StudFlow.storage.loadData('focusStats', { sessions: 0, totalMinutes: 0 });
        ctx.focusSessions = focusStats.sessions || 0;
        ctx.focusMinutes = focusStats.totalMinutes || 0;

        // Active subject
        ctx.activeSubject = window.StudFlow.storage.loadData('activeSubject', null);

        // Daily goal
        var dailyGoal = window.StudFlow.storage.loadData('dailyGoal', null);
        if (dailyGoal) {
            ctx.dailyGoal = dailyGoal.goal || dailyGoal.label || null;
        }

        // Active mission
        var missions = window.StudFlow.storage.loadData('missions', { active: null });
        if (missions && missions.active) {
            ctx.activeMission = missions.active.title || missions.active.label || null;
        }

        // Last quiz errors (up to 5)
        var quizHistory = window.StudFlow.storage.loadData('quizGenHistory', { results: [] });
        if (quizHistory.results && quizHistory.results.length > 0) {
            var allErrors = [];
            for (var i = quizHistory.results.length - 1; i >= 0 && allErrors.length < 5; i--) {
                var r = quizHistory.results[i];
                if (r && r.questions) {
                    for (var j = 0; j < r.questions.length && allErrors.length < 5; j++) {
                        var q = r.questions[j];
                        if (q && !q.isCorrect) {
                            allErrors.push({
                                question: q.question || q.text || '?',
                                answer: q.correctAnswer || q.answer || '?',
                                explanation: q.explanation || null
                            });
                        }
                    }
                }
            }
            ctx.lastErrors = allErrors;
        }

        return ctx;
    }

    // ==================== SYSTEM PROMPT ====================
    function buildSystemPrompt(ctx) {
        var profileTips = {
            anxieux: 'Cet eleve est ANXIEUX. Priorite absolue : le rassurer. Ton calme et doux. Ne jamais minimiser son stress. Valider ses emotions d\'abord, conseiller ensuite. Phrases courtes et apaisantes.',
            procrastinateur: 'Cet eleve PROCRASTINE. Ne pas le culpabiliser. Le guider vers une action MINUSCULE (5-10 min). Celebrer le fait qu\'il soit la. "Juste 5 minutes" est ta phrase magique.',
            desorganise: 'Cet eleve est DESORGANISE. Donner UNE seule consigne a la fois. Pas de listes de 10 choses. Etre tres concret : "Fais CA maintenant". Structure = securite pour lui.',
            surcharge: 'Cet eleve est EN SURCHARGE. Il en fait trop. L\'aider a ELIMINER, pas a ajouter. Lui donner la permission de faire moins. "Tu n\'as pas besoin de tout faire".',
            confiance_faible: 'Cet eleve manque de CONFIANCE. Ne jamais dire "c\'est facile". Valoriser chaque petit progres. Montrer qu\'il sait plus qu\'il ne le croit. Exemples concrets de reussite.',
            confiant: 'Cet eleve est CONFIANT. Le challenger. Poser des questions qui font reflechir. Pousser vers l\'excellence sans arrogance. "Tu peux aller plus loin".',
            equilibre: 'Cet eleve est EQUILIBRE. Ton neutre et professionnel. Varier entre conseil, exercice et encouragement.'
        };

        var profileTip = profileTips[ctx.mainProfile] || profileTips.equilibre;

        var prompt = 'Tu es un coach pedagogique expert pour un lyceen qui prepare le Bac. Tu t\'appelles "Coach StudFlow".\n\n'
            + '## Ton style\n'
            + '- Tutoiement obligatoire\n'
            + '- Francais courant (pas soutenu, pas familier)\n'
            + '- Bienveillant mais direct — pas de blabla\n'
            + '- Jamais condescendant ou infantilisant\n'
            + '- Tu NE dis JAMAIS que tu es une IA\n\n'
            + '## Methode pedagogique\n'
            + '1. **Ecouter** : reformule ce que l\'eleve dit pour montrer que tu comprends\n'
            + '2. **Repondre** : explication claire en 2-4 phrases max\n'
            + '3. **Illustrer** : un exemple concret, une analogie du quotidien\n'
            + '4. **Actionner** : termine par UNE action concrete a faire maintenant\n\n'
            + '## Regles strictes\n'
            + '- Reponses COURTES : 3-6 phrases max. Pas de paves.\n'
            + '- Si l\'eleve est triste, stresse ou decourage → soutien emotionnel EN PREMIER, contenu apres\n'
            + '- Si tu ne sais pas → "Je ne suis pas sur, verifie dans ton cours"\n'
            + '- Si la question est vague → pose UNE question de precision\n'
            + '- Utilise **gras** pour les mots cles importants\n'
            + '- Utilise des listes a puces si ca aide la clarte\n'
            + '- Ne repete jamais la meme reponse\n'
            + '- Ne donne jamais de fausses informations sur le programme du Bac\n\n'
            + '## Profil de cet eleve\n'
            + profileTip + '\n\n'
            + '## Contexte\n'
            + '- Profil psycho : ' + (ctx.mainProfile || 'equilibre') + '\n'
            + '- Niveau app : ' + ctx.level + ' (XP: ' + ctx.xp + ')\n'
            + '- Matiere active : ' + (ctx.activeSubject || 'non definie') + '\n'
            + '- Serie active : ' + ctx.streak + ' jours consecutifs\n'
            + '- Focus : ' + ctx.focusSessions + ' sessions (' + ctx.focusMinutes + ' min)\n'
            + (ctx.dailyGoal ? '- Objectif du jour : ' + ctx.dailyGoal + '\n' : '')
            + (ctx.activeMission ? '- Mission en cours : ' + ctx.activeMission + '\n' : '');

        // Errors block
        if (ctx.lastErrors && ctx.lastErrors.length > 0) {
            prompt += '\n\nDernieres erreurs quiz (points faibles a travailler) :';
            for (var i = 0; i < ctx.lastErrors.length; i++) {
                var err = ctx.lastErrors[i];
                prompt += '\n' + (i + 1) + '. Q: ' + err.question + ' → Bonne reponse : ' + err.answer;
                if (err.explanation) {
                    prompt += ' (' + err.explanation + ')';
                }
            }
        }

        return prompt;
    }

    // ==================== MESSAGES BUILDER ====================
    function buildMessages(userMsg, ctx) {
        var messages = [
            { role: 'system', content: buildSystemPrompt(ctx) }
        ];

        // Add trimmed/summarized conversation history
        var history = trimHistory(conversationHistory);
        for (var i = 0; i < history.length; i++) {
            messages.push(history[i]);
        }

        // Add current user message
        messages.push({ role: 'user', content: userMsg });

        return messages;
    }

    // ==================== HISTORY TRIMMING + SUMMARY ====================
    function trimHistory(history) {
        if (history.length <= MAX_HISTORY) return history.slice();

        // Summarize old messages, keep recent ones
        var oldPart = history.slice(0, history.length - MAX_HISTORY);
        var recentPart = history.slice(-MAX_HISTORY);

        // Build a compact summary of older exchanges
        var summaryParts = [];
        for (var i = 0; i < oldPart.length; i += 2) {
            var userMsg = oldPart[i];
            var botMsg = oldPart[i + 1];
            if (userMsg && botMsg) {
                var userText = (userMsg.content || '').substring(0, 60);
                var botText = (botMsg.content || '').substring(0, 80);
                summaryParts.push('- Eleve: "' + userText + '..." → Coach: "' + botText + '..."');
            }
        }

        if (summaryParts.length > 0) {
            var summaryMsg = {
                role: 'system',
                content: 'Resume des echanges precedents :\n' + summaryParts.join('\n')
            };
            return [summaryMsg].concat(recentPart);
        }

        return recentPart;
    }

    // ==================== SEND MESSAGE (with retry) ====================
    function sendMessage(userMsg, context) {
        if (window.StudFlow.features && !window.StudFlow.features.AI_ENABLED) {
            return Promise.reject(makeError('disabled', 'IA desactivee'));
        }
        if (!isAvailable()) {
            return Promise.reject(makeError('unavailable', 'LLM indisponible'));
        }

        var ctx = context || gatherContext();
        var messages = buildMessages(userMsg, ctx);

        return callAPI(messages, MODEL_PRIMARY, 0)
            .then(function(reply) {
                // Update conversation history
                conversationHistory.push({ role: 'user', content: userMsg });
                conversationHistory.push({ role: 'assistant', content: reply });

                // Keep history bounded
                if (conversationHistory.length > MAX_HISTORY * 3) {
                    conversationHistory = conversationHistory.slice(-(MAX_HISTORY * 3));
                }

                return reply;
            });
    }

    // ==================== API CALL (retry + fallback model) ====================
    function callAPI(messages, model, attempt) {
        var controller = new AbortController();
        var timeoutId = setTimeout(function() {
            controller.abort();
        }, TIMEOUT_MS);

        return fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + apiKey
            },
            body: JSON.stringify({
                model: model,
                messages: messages,
                max_tokens: MAX_TOKENS,
                temperature: TEMPERATURE
            }),
            signal: controller.signal
        })
        .then(function(response) {
            clearTimeout(timeoutId);
            if (!response.ok) {
                if (response.status === 429) {
                    // Rate limited — retry after delay
                    if (attempt < MAX_RETRIES) {
                        return delay(RETRY_DELAY_MS * (attempt + 1)).then(function() {
                            return callAPI(messages, model, attempt + 1);
                        });
                    }
                    throw makeError('rate_limit', 'Trop de requetes, reessaie dans un instant');
                }
                if ((response.status === 404 || response.status === 400) && model === MODEL_PRIMARY) {
                    // Model unavailable — try fallback
                    return callAPI(messages, MODEL_FALLBACK, 0);
                }
                if (response.status === 401) {
                    throw makeError('auth', 'Cle API invalide — verifie dans Parametres');
                }
                // Other error — retry once
                if (attempt < MAX_RETRIES) {
                    return delay(RETRY_DELAY_MS).then(function() {
                        return callAPI(messages, model, attempt + 1);
                    });
                }
                throw makeError('api', 'Erreur serveur (' + response.status + ')');
            }
            return response.json();
        })
        .then(function(data) {
            if (data && data.choices && data.choices[0] && data.choices[0].message) {
                return data.choices[0].message.content || '';
            }
            throw makeError('parse', 'Reponse invalide du serveur');
        })
        .catch(function(err) {
            clearTimeout(timeoutId);
            if (err.name === 'AbortError') {
                // Timeout — retry once
                if (attempt < MAX_RETRIES) {
                    return callAPI(messages, model, attempt + 1);
                }
                throw makeError('timeout', 'Le serveur met trop de temps a repondre');
            }
            if (err.type) throw err; // already a typed error
            // Network error — retry once
            if (attempt < MAX_RETRIES) {
                return delay(RETRY_DELAY_MS).then(function() {
                    return callAPI(messages, model, attempt + 1);
                });
            }
            throw makeError('network', 'Pas de connexion au serveur');
        });
    }

    // ==================== HELPERS ====================
    function delay(ms) {
        return new Promise(function(resolve) { setTimeout(resolve, ms); });
    }

    function makeError(type, message) {
        var err = new Error(message);
        err.type = type;
        return err;
    }

    function resetHistory() {
        conversationHistory = [];
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.coachLLM = {
        init: init,
        isAvailable: isAvailable,
        sendMessage: sendMessage,
        resetHistory: resetHistory,
        gatherContext: gatherContext
    };

})();
