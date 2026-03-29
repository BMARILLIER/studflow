// profChat.js — Prof IA (Document Q&A chat linked to imported PDF)
(function() {

    var STORAGE_KEY = 'studflow_prof_chat';
    var MAX_DOC_CHARS = 15000;
    var MAX_MESSAGES = 60;
    var PRUNE_TO = 30;
    var MAX_HISTORY = 12;
    var API_URL = 'https://api.groq.com/openai/v1/chat/completions';
    var MODEL_PRIMARY = 'llama-3.3-70b-versatile';
    var MODEL_FALLBACK = 'mixtral-8x7b-32768';
    var TIMEOUT_MS = 20000;

    var conversationHistory = [];

    // ==================== STORAGE ====================
    function loadChat() {
        return window.StudFlow.storage.loadData(STORAGE_KEY, { messages: [], docName: '' });
    }

    function saveChat(data) {
        window.StudFlow.storage.saveData(STORAGE_KEY, data);
    }

    // ==================== DOCUMENT ====================
    function getDocument() {
        var state = window.StudFlow.app.getState();
        return { text: state.pdfText || '', name: state.fileName || '' };
    }

    function isAvailable() {
        return getDocument().text.length > 0;
    }

    function hasApiKey() {
        // AI disabled for beta
        if (window.StudFlow.features && !window.StudFlow.features.AI_ENABLED) return false;
        var key = window.StudFlow.storage.loadData('groq_api_key', '');
        return key && key.length > 10;
    }

    // ==================== SYSTEM PROMPT ====================
    function buildSystemPrompt(docText, docName) {
        var truncated = docText;
        if (docText.length > MAX_DOC_CHARS) {
            truncated = docText.substring(0, MAX_DOC_CHARS)
                + '\n\n[... document tronque, ' + docText.length + ' caracteres au total]';
        }

        return 'Tu es un professeur expert et pedagogue. Un lyceen te pose des questions sur son cours.'
            + '\n\nTon role :'
            + '\n- Expliquer clairement les concepts du document ci-dessous'
            + '\n- Repondre aux questions avec des exemples concrets'
            + '\n- Si l\'eleve demande un resume, fais un resume structure'
            + '\n- Si l\'eleve ne comprend pas, reformule plus simplement'
            + '\n- Utilise le tutoiement, sois bienveillant et direct'
            + '\n\nRegles strictes :'
            + '\n- Reponds en 3-8 phrases max, sauf si on te demande un resume detaille'
            + '\n- Utilise **gras** pour les mots-cles importants'
            + '\n- Si la question n\'a pas de rapport avec le document, dis-le poliment'
            + '\n- Ne reponds JAMAIS avec des informations fausses. Si tu n\'es pas sur, dis "Verifie dans ton cours"'
            + '\n- N\'invente pas de contenu qui n\'est pas dans le document'
            + '\n\nDocument de l\'eleve (' + docName + ') :'
            + '\n---'
            + '\n' + truncated
            + '\n---';
    }

    // ==================== API CALL ====================
    function callAPI(messages, model, attempt) {
        if (window.StudFlow.features && !window.StudFlow.features.AI_ENABLED) {
            return Promise.reject(new Error('IA desactivee'));
        }
        var apiKey = window.StudFlow.storage.loadData('groq_api_key', '');
        var controller = new AbortController();
        var timer = setTimeout(function() { controller.abort(); }, TIMEOUT_MS);

        return fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + apiKey
            },
            body: JSON.stringify({
                model: model || MODEL_PRIMARY,
                messages: messages,
                max_tokens: 600,
                temperature: 0.6
            }),
            signal: controller.signal
        })
        .then(function(res) {
            clearTimeout(timer);
            if (res.status === 401) {
                throw { type: 'auth', message: 'Cle API invalide ou expiree.' };
            }
            if (res.status === 429) {
                if (attempt < 1) {
                    return new Promise(function(resolve) {
                        setTimeout(resolve, 2000);
                    }).then(function() {
                        return callAPI(messages, model, attempt + 1);
                    });
                }
                throw { type: 'rate_limit', message: 'Trop de requetes. Reessaie dans quelques secondes.' };
            }
            if (!res.ok) {
                if (model === MODEL_PRIMARY) {
                    return callAPI(messages, MODEL_FALLBACK, 0);
                }
                throw { type: 'api', message: 'Erreur serveur (' + res.status + ').' };
            }
            return res.json();
        })
        .then(function(data) {
            if (data && data.choices && data.choices[0] && data.choices[0].message) {
                return data.choices[0].message.content;
            }
            throw { type: 'parse', message: 'Reponse inattendue du serveur.' };
        })
        .catch(function(err) {
            clearTimeout(timer);
            if (err && err.type) throw err;
            if (err && err.name === 'AbortError') {
                if (attempt < 1) {
                    return callAPI(messages, model, attempt + 1);
                }
                throw { type: 'timeout', message: 'Le serveur met trop de temps a repondre.' };
            }
            if (attempt < 1) {
                return new Promise(function(resolve) {
                    setTimeout(resolve, 2000);
                }).then(function() {
                    return callAPI(messages, model, attempt + 1);
                });
            }
            throw { type: 'network', message: 'Pas de connexion internet.' };
        });
    }

    // ==================== LOCAL FALLBACK ====================
    function localSearch(query, docText) {
        var words = query.toLowerCase().replace(/[^a-zàâäéèêëïîôùûüçœæ0-9 ]/g, '')
            .split(/\s+/).filter(function(w) { return w.length > 2; });
        if (!words.length) return null;

        var paragraphs = docText.split(/\n\n+/).filter(function(p) { return p.trim().length > 30; });
        var scored = paragraphs.map(function(p) {
            var lower = p.toLowerCase();
            var score = 0;
            words.forEach(function(w) {
                if (lower.indexOf(w) !== -1) score++;
            });
            return { text: p.trim(), score: score };
        }).filter(function(s) { return s.score > 0; });

        scored.sort(function(a, b) { return b.score - a.score; });
        var top = scored.slice(0, 3);
        if (!top.length) return null;

        var result = 'Voici ce que j\'ai trouve dans ton document :\n\n';
        top.forEach(function(s, i) {
            var excerpt = s.text.length > 400 ? s.text.substring(0, 400) + '...' : s.text;
            result += (i + 1) + '. ' + excerpt + '\n\n';
        });
        result += 'Pour une explication detaillee, configure ta cle API Groq dans les parametres.';
        return result;
    }

    // ==================== SEND MESSAGE ====================
    function sendMessage(text) {
        if (!text || !text.trim()) return;
        text = text.trim();

        var doc = getDocument();
        if (!doc.text) {
            if (window.StudFlow.gamification) {
                window.StudFlow.gamification.showToast('Importe un PDF d\'abord !', 'info', '📄');
            }
            return;
        }

        // Add user message to UI
        var chat = loadChat();
        chat.messages.push({ role: 'user', text: text, ts: Date.now() });
        if (chat.messages.length > MAX_MESSAGES) {
            chat.messages = chat.messages.slice(-PRUNE_TO);
        }
        saveChat(chat);
        renderMessages(chat.messages);
        clearInput();
        showTyping(true);

        if (hasApiKey()) {
            // Build LLM messages
            conversationHistory.push({ role: 'user', content: text });
            var sysPrompt = buildSystemPrompt(doc.text, doc.name);
            var msgs = [{ role: 'system', content: sysPrompt }];
            var recent = conversationHistory.slice(-MAX_HISTORY);
            msgs = msgs.concat(recent);

            callAPI(msgs, MODEL_PRIMARY, 0)
                .then(function(reply) {
                    conversationHistory.push({ role: 'assistant', content: reply });
                    if (conversationHistory.length > MAX_HISTORY * 3) {
                        conversationHistory = conversationHistory.slice(-(MAX_HISTORY * 3));
                    }
                    addBotMessage(reply);
                })
                .catch(function(err) {
                    var msg = (err && err.message) ? err.message : 'Erreur inconnue.';
                    addBotMessage('Desole, je n\'ai pas pu repondre. ' + msg);
                });
        } else {
            // Local fallback: keyword search in document
            setTimeout(function() {
                var result = localSearch(text, doc.text);
                if (result) {
                    addBotMessage(result);
                } else {
                    addBotMessage(
                        'Je n\'ai pas trouve de passage pertinent dans ton document pour cette question.'
                        + '\n\nPour des explications detaillees, configure ta cle API Groq dans les parametres.'
                    );
                }
            }, 400);
        }
    }

    function addBotMessage(text) {
        showTyping(false);
        var chat = loadChat();
        chat.messages.push({ role: 'bot', text: text, ts: Date.now() });
        saveChat(chat);
        renderMessages(chat.messages);
        showSuggestions();
    }

    // ==================== UI RENDERING ====================
    function render() {
        var container = document.getElementById('prof-content');
        if (!container) return;

        var doc = getDocument();
        var chat = loadChat();

        // Reset history if document changed
        if (chat.docName !== doc.name) {
            chat = { messages: [], docName: doc.name };
            saveChat(chat);
            conversationHistory = [];
        }

        var badge = hasApiKey()
            ? '<span class="pc-badge pc-badge-ai">Prof IA</span>'
            : '<span class="pc-badge pc-badge-local">Recherche locale</span>';

        container.innerHTML = ''
            + '<div class="pc-container">'
            + '<div class="pc-topbar">'
            + '<div class="pc-topbar-left">'
            + '<div class="pc-topbar-title">Prof IA</div>'
            + badge
            + '</div>'
            + '<div class="pc-doc-name">📄 ' + escapeHTML(doc.name || 'Document') + '</div>'
            + '</div>'
            + '<div class="pc-messages" id="pc-messages"></div>'
            + '<div class="pc-suggestions" id="pc-suggestions"></div>'
            + '<div class="pc-input-area">'
            + '<input type="text" class="pc-input" id="pc-input" '
            + 'placeholder="Pose une question sur ton cours..." '
            + 'onkeydown="if(event.key===\'Enter\')StudFlow.profChat.send(this.value)">'
            + '<button class="pc-send-btn" data-action="profChat.send" data-param="document.getElementById(\'pc-input">➤</button>'
            + '</div>'
            + '</div>';

        renderMessages(chat.messages);

        if (!chat.messages.length) {
            showGreeting();
        }
        showSuggestions();
    }

    function renderMessages(messages) {
        var el = document.getElementById('pc-messages');
        if (!el) return;

        var html = messages.map(function(m) {
            var cls = m.role === 'user' ? 'pc-msg pc-msg-user' : 'pc-msg pc-msg-bot';
            var content = m.role === 'bot' ? formatBotText(m.text) : escapeHTML(m.text);
            return '<div class="' + cls + '">' + content + '</div>';
        }).join('');

        el.innerHTML = html;
        el.scrollTop = el.scrollHeight;
    }

    function formatBotText(text) {
        // Bold **text** and line breaks
        return escapeHTML(text)
            .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
            .replace(/\n/g, '<br>');
    }

    function escapeHTML(str) {
        if (!str) return '';
        return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    function showGreeting() {
        var doc = getDocument();
        var greeting = '<div class="pc-msg pc-msg-bot">'
            + 'Salut ! Je suis ton <strong>Prof IA</strong>. '
            + 'J\'ai lu ton document <strong>' + escapeHTML(doc.name) + '</strong>.'
            + '<br><br>Pose-moi n\'importe quelle question sur ton cours !'
            + '</div>';
        var el = document.getElementById('pc-messages');
        if (el) el.innerHTML = greeting;
    }

    function showSuggestions() {
        var el = document.getElementById('pc-suggestions');
        if (!el) return;
        var suggestions = [
            'Resume ce document',
            'Explique les points cles',
            'Quels sont les themes principaux ?',
            'Pose-moi une question'
        ];
        var html = suggestions.map(function(s) {
            return '<button class="pc-suggestion" data-action="profChat.send" data-param="' + s.replace(/"/g, '&quot;') + '">'
                + s + '</button>';
        }).join('');
        el.innerHTML = html;
    }

    function showTyping(show) {
        var el = document.getElementById('pc-messages');
        if (!el) return;
        var existing = el.querySelector('.pc-typing');
        if (existing) existing.remove();
        if (show) {
            var dot = '<div class="pc-typing"><span></span><span></span><span></span></div>';
            el.insertAdjacentHTML('beforeend', dot);
            el.scrollTop = el.scrollHeight;
        }
    }

    function clearInput() {
        var input = document.getElementById('pc-input');
        if (input) input.value = '';
    }

    // ==================== SHOW ====================
    function show() {
        if (!isAvailable()) {
            if (window.StudFlow.gamification) {
                window.StudFlow.gamification.showToast(
                    'Importe un PDF d\'abord pour utiliser le Prof IA !', 'info', '📄'
                );
            }
            return;
        }
        window.StudFlow.app.showScreen('professor');
        render();
        // Focus input after render
        setTimeout(function() {
            var input = document.getElementById('pc-input');
            if (input) input.focus();
        }, 100);
    }

    function clearHistory() {
        saveChat({ messages: [], docName: '' });
        conversationHistory = [];
        render();
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.profChat = {
        show: show,
        render: render,
        send: sendMessage,
        isAvailable: isAvailable,
        clearHistory: clearHistory
    };

})();
