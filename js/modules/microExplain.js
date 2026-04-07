// microExplain.js — "Explique-moi vite" : resume ultra-court du contenu
(function() {
    function shortenText(text, max) {
        if (!text) return '';
        max = max || 100;
        var t = text.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
        if (t.length <= max) return t;
        var cut = t.substring(0, max);
        var last = Math.max(cut.lastIndexOf('.'), cut.lastIndexOf('!'), cut.lastIndexOf('?'), cut.lastIndexOf(','));
        return (last > max * 0.4 ? cut.substring(0, last + 1) : cut) + '...';
    }

    function extractKeyword(text) {
        if (!text) return '';
        var t = text.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
        // Try bold markers or quotes first
        var bold = t.match(/\*\*(.+?)\*\*/);
        if (bold) return bold[1];
        var quoted = t.match(/"([^"]+)"/);
        if (quoted) return quoted[1];
        // Try "c'est ..." pattern
        var cest = t.match(/[Cc]'est\s+(?:un[e]?\s+)?(.+?)(?:[.,;]|$)/);
        if (cest) return shortenText(cest[1], 40);
        // Fallback: longest capitalized word or first noun-like word (>4 chars)
        var words = t.split(/\s+/);
        var best = '';
        for (var i = 0; i < words.length; i++) {
            var w = words[i].replace(/[^a-zA-ZÀ-ÿ]/g, '');
            if (w.length > best.length && w.length > 4 && w[0] === w[0].toUpperCase()) best = w;
        }
        if (best) return best;
        // Fallback: first meaningful word >5 chars
        for (var j = 0; j < words.length; j++) {
            var w2 = words[j].replace(/[^a-zA-ZÀ-ÿ]/g, '');
            if (w2.length > 5) return w2;
        }
        return words[0] || '';
    }

    function buildMicroExplain(item) {
        // item = { question, answer, explanation, options, correctIndex }
        var answer = item.answer || item.explanation || '';
        var question = item.question || '';

        // "En gros" — first sentence of answer or explanation
        var raw = answer.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
        var enGros = '';
        var egMatch = raw.match(/En gros\s*[:]\s*([^.!?]+[.!?])/i);
        if (egMatch) {
            enGros = egMatch[1].trim();
        } else {
            var first = raw.split(/(?<=[.!?])\s/)[0] || '';
            enGros = shortenText(first, 120);
        }

        // "Mot-cle"
        var motCle = extractKeyword(raw || question);

        // "A retenir" — pick a different sentence from answer, or rephrase
        var aRetenir = '';
        var sentences = raw.split(/(?<=[.!?])\s+/);
        // Find a sentence with "important", "retenir", "essentiel", "cle"
        for (var i = 0; i < sentences.length; i++) {
            if (/important|retenir|essentiel|cl[eé]|fondamental/i.test(sentences[i])) {
                aRetenir = shortenText(sentences[i], 100);
                break;
            }
        }
        // Fallback: second sentence if different from enGros
        if (!aRetenir && sentences.length > 1) {
            aRetenir = shortenText(sentences[1], 100);
        }
        if (!aRetenir) aRetenir = enGros;

        return { enGros: enGros, motCle: motCle, aRetenir: aRetenir };
    }

    function escape(str) {
        if (!str) return '';
        return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    function renderHTML(data) {
        return '<div class="micro-explain">'
            + '<div class="micro-explain-row"><span class="micro-explain-label">En gros</span>'
            + '<span class="micro-explain-text">' + escape(data.enGros) + '</span></div>'
            + '<div class="micro-explain-row"><span class="micro-explain-label">Mot-cle</span>'
            + '<span class="micro-explain-text micro-explain-keyword">' + escape(data.motCle) + '</span></div>'
            + '<div class="micro-explain-row"><span class="micro-explain-label">A retenir</span>'
            + '<span class="micro-explain-text">' + escape(data.aRetenir) + '</span></div>'
            + '</div>';
    }

    window.StudFlow = window.StudFlow || {};
    window.StudFlow.microExplain = {
        build: buildMicroExplain,
        shortenText: shortenText,
        extractKeyword: extractKeyword,
        renderHTML: renderHTML
    };
})();
