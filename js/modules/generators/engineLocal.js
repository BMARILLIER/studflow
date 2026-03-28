// engineLocal.js — Moteur de generation locale intelligent (sans LLM externe)
(function() {

    // ==================== STOPWORDS FR ====================
    var STOPWORDS = [
        'le','la','les','de','des','du','un','une','et','est','en','que','qui',
        'dans','pour','pas','sur','ce','se','il','elle','son','sa','ses','au',
        'aux','avec','par','ne','nous','vous','ils','elles','ont','sont','mais',
        'ou','donc','ni','car','si','je','tu','on','mon','ton','cette','ces',
        'cet','tout','tous','toute','toutes','plus','moins','tres','bien','aussi',
        'peut','fait','comme','etre','avoir','faire','dire','aller','voir','savoir',
        'pouvoir','falloir','vouloir','entre','meme','autre','autres','apres',
        'avant','sous','chez','vers','sans','leurs','leur','dont','a','y','c',
        'd','l','n','s','qu','j','m','t'
    ];

    // ==================== TEXT PROCESSING ====================

    /**
     * Nettoie et normalise du texte
     */
    function cleanText(text) {
        if (!text) return '';
        return text
            .replace(/\r\n/g, '\n')
            .replace(/\r/g, '\n')
            .replace(/\t/g, ' ')
            .replace(/ {2,}/g, ' ')
            .trim();
    }

    /**
     * Decoupe le texte en phrases
     */
    function splitSentences(text) {
        var cleaned = cleanText(text);
        // Split on sentence-ending punctuation followed by space or newline
        var raw = cleaned.split(/(?<=[.!?])\s+/);
        return raw
            .map(function(s) { return s.trim(); })
            .filter(function(s) { return s.length > 10; });
    }

    /**
     * Decoupe en paragraphes
     */
    function splitParagraphs(text) {
        return cleanText(text)
            .split(/\n{2,}/)
            .map(function(p) { return p.trim(); })
            .filter(function(p) { return p.length > 20; });
    }

    /**
     * Tokenise en mots normalises
     */
    function tokenize(text) {
        return text
            .toLowerCase()
            .replace(/[^a-zàâäéèêëïîôùûüÿçœæ\s-]/g, ' ')
            .split(/\s+/)
            .filter(function(w) { return w.length > 2 && STOPWORDS.indexOf(w) === -1; });
    }

    /**
     * Extrait les mots-cles par frequence
     */
    function extractKeywords(text, maxCount) {
        maxCount = maxCount || 15;
        var tokens = tokenize(text);
        var freq = {};
        tokens.forEach(function(w) {
            freq[w] = (freq[w] || 0) + 1;
        });
        var sorted = Object.keys(freq).sort(function(a, b) { return freq[b] - freq[a]; });
        return sorted.slice(0, maxCount).map(function(word) {
            return { word: word, count: freq[word] };
        });
    }

    /**
     * Detecte les titres potentiels dans le texte
     */
    function detectTitles(text) {
        var lines = text.split('\n');
        var titles = [];
        lines.forEach(function(line, idx) {
            var trimmed = line.trim();
            if (!trimmed || trimmed.length < 3) return;
            var isTitle = false;
            // Short line (likely a title)
            if (trimmed.length < 80 && trimmed.length > 3) {
                // Numbered titles: "1.", "I.", "A)", "Chapitre 1", etc.
                if (/^[\dIVXLCM]+[.)]\s/.test(trimmed)) isTitle = true;
                if (/^[A-Z][.)]\s/.test(trimmed)) isTitle = true;
                if (/^(chapitre|partie|section|introduction|conclusion|titre)/i.test(trimmed)) isTitle = true;
                // All caps or mostly caps
                var upperRatio = (trimmed.match(/[A-ZÀÂÉÈÊËÎÏÔÙÛÜÇ]/g) || []).length / trimmed.length;
                if (upperRatio > 0.6 && trimmed.length > 5) isTitle = true;
                // Ends without punctuation (titles usually don't end with period)
                if (trimmed.length < 60 && !/[.!?;,]$/.test(trimmed)) isTitle = true;
            }
            if (isTitle) {
                titles.push({ text: trimmed, line: idx });
            }
        });
        return titles;
    }

    /**
     * Extrait les phrases les plus importantes (scoring simple)
     */
    function extractKeySentences(text, maxCount) {
        maxCount = maxCount || 10;
        var sentences = splitSentences(text);
        var keywords = extractKeywords(text, 20);
        var kwSet = {};
        keywords.forEach(function(kw) { kwSet[kw.word] = kw.count; });

        var scored = sentences.map(function(sentence) {
            var tokens = tokenize(sentence);
            var score = 0;
            tokens.forEach(function(t) {
                if (kwSet[t]) score += kwSet[t];
            });
            // Bonus for sentences that look like definitions
            if (/\best\b.*\b(un|une|le|la|l')\b/i.test(sentence)) score += 3;
            if (/\bsignifie\b|\bdesigne\b|\bconsiste\b|\bpermet\b/i.test(sentence)) score += 3;
            // Penalty for very long sentences
            if (sentence.length > 300) score *= 0.7;
            // Penalty for very short
            if (sentence.length < 30) score *= 0.5;
            return { sentence: sentence, score: score };
        });

        scored.sort(function(a, b) { return b.score - a.score; });
        return scored.slice(0, maxCount).map(function(s) { return s.sentence; });
    }

    /**
     * Detecte les definitions potentielles
     */
    function extractDefinitions(text, maxCount) {
        maxCount = maxCount || 5;
        var sentences = splitSentences(text);
        var defs = [];
        var defPatterns = [
            /\best\s+(un|une|le|la|l')\s/i,
            /\bsignifie\b/i,
            /\bdesigne\b/i,
            /\bconsiste\s+[àa]\b/i,
            /\bse\s+definit\b/i,
            /\bon\s+appelle\b/i,
            /\b:\s/
        ];
        sentences.forEach(function(s) {
            for (var i = 0; i < defPatterns.length; i++) {
                if (defPatterns[i].test(s) && s.length < 250) {
                    defs.push(s);
                    break;
                }
            }
        });
        return defs.slice(0, maxCount);
    }

    /**
     * Genere un resume condense (top phrases)
     */
    function generateSummary(text, lineCount) {
        lineCount = lineCount || 5;
        var keySentences = extractKeySentences(text, lineCount);
        // Reorder by position in original text
        var sentences = splitSentences(text);
        keySentences.sort(function(a, b) {
            return sentences.indexOf(a) - sentences.indexOf(b);
        });
        return keySentences;
    }

    /**
     * Genere des questions a partir des points cles
     */
    function generateQuestionsFromText(keySentences, maxCount) {
        maxCount = maxCount || 5;
        var questions = [];
        var templates = [
            'Qu\'est-ce que {concept} ?',
            'Quel est le role de {concept} ?',
            'En quoi {concept} est-il important ?',
            'Comment fonctionne {concept} ?',
            'Quelles sont les caracteristiques de {concept} ?'
        ];
        keySentences.forEach(function(sentence) {
            if (questions.length >= maxCount) return;
            var keywords = tokenize(sentence);
            if (keywords.length < 2) return;
            // Pick the most significant word(s)
            var concept = keywords.slice(0, 2).join(' ');
            var tplIdx = questions.length % templates.length;
            questions.push({
                question: templates[tplIdx].replace('{concept}', concept),
                source: sentence
            });
        });
        return questions;
    }

    /**
     * Genere des distracteurs pour un QCM a partir d'un ensemble de faits
     */
    function generateDistractors(correctAnswer, allFacts, count) {
        count = count || 3;
        var distractors = [];
        var shuffled = allFacts.slice().sort(function() { return Math.random() - 0.5; });
        for (var i = 0; i < shuffled.length && distractors.length < count; i++) {
            if (shuffled[i] !== correctAnswer && shuffled[i].length > 10) {
                distractors.push(shuffled[i]);
            }
        }
        // Pad with generic distractors if not enough
        var generics = [
            'Aucune de ces reponses',
            'Toutes les reponses sont correctes',
            'Ce point n\'est pas aborde dans le cours'
        ];
        while (distractors.length < count) {
            distractors.push(generics[distractors.length % generics.length]);
        }
        return distractors;
    }

    // ==================== TEMPLATE ENGINE ====================
    /**
     * Remplace les variables dans un template
     */
    function applyTemplate(template, vars) {
        var result = template;
        Object.keys(vars).forEach(function(key) {
            result = result.replace(new RegExp('\\{' + key + '\\}', 'g'), vars[key] || '');
        });
        return result;
    }

    /**
     * Choisit un element aleatoire dans un tableau
     */
    function pickRandom(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    /**
     * Melange un tableau (Fisher-Yates)
     */
    function shuffle(arr) {
        var a = arr.slice();
        for (var i = a.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
        }
        return a;
    }

    // ==================== LOCAL LLM PROVIDER (OPTIONNEL) ====================
    /**
     * Interface pour futur modele local (llama.cpp, etc.)
     * Desactive par defaut. Ne depend de rien.
     */
    var localLLMConfig = {
        enabled: false,
        endpoint: 'http://localhost:8080/v1/chat/completions',
        model: 'local'
    };

    function isLocalLLMAvailable() {
        return localLLMConfig.enabled;
    }

    function setLocalLLMConfig(config) {
        localLLMConfig = Object.assign({}, localLLMConfig, config);
    }

    /**
     * Appel au LLM local (uniquement si active et disponible)
     * Retourne null si non disponible
     */
    async function callLocalLLM(prompt) {
        if (window.StudFlow.features && !window.StudFlow.features.AI_ENABLED) return null;
        if (!localLLMConfig.enabled) return null;
        try {
            var response = await fetch(localLLMConfig.endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    model: localLLMConfig.model,
                    messages: [
                        { role: 'system', content: 'Tu es un assistant pedagogique. Reponds de facon claire et structuree.' },
                        { role: 'user', content: prompt }
                    ],
                    temperature: 0.7,
                    max_tokens: 2048
                })
            });
            if (!response.ok) return null;
            var data = await response.json();
            return data.choices && data.choices[0] ? data.choices[0].message.content : null;
        } catch (e) {
            return null;
        }
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.engine = {
        // Text processing
        cleanText: cleanText,
        splitSentences: splitSentences,
        splitParagraphs: splitParagraphs,
        tokenize: tokenize,
        extractKeywords: extractKeywords,
        detectTitles: detectTitles,
        extractKeySentences: extractKeySentences,
        extractDefinitions: extractDefinitions,
        generateSummary: generateSummary,
        generateQuestionsFromText: generateQuestionsFromText,
        generateDistractors: generateDistractors,
        // Templates
        applyTemplate: applyTemplate,
        pickRandom: pickRandom,
        shuffle: shuffle,
        // Local LLM (optional)
        isLocalLLMAvailable: isLocalLLMAvailable,
        setLocalLLMConfig: setLocalLLMConfig,
        callLocalLLM: callLocalLLM
    };
})();
