// mathRender.js — KaTeX rendering utility for StudFlow
// Detects LaTeX in text (\( \) inline, \[ \] block), renders via KaTeX, escapes the rest.
// API: render(text), setContent(el, text), processElement(el)
(function() {
    'use strict';

    // ==================== CACHE ====================
    var _cache = {};
    var _cacheSize = 0;
    var CACHE_MAX = 500;

    function getCached(key) {
        return _cache[key] || null;
    }

    function setCache(key, value) {
        if (_cacheSize >= CACHE_MAX) {
            // Evict oldest half
            var keys = Object.keys(_cache);
            for (var i = 0; i < keys.length / 2; i++) {
                delete _cache[keys[i]];
            }
            _cacheSize = Object.keys(_cache).length;
        }
        _cache[key] = value;
        _cacheSize++;
    }

    // ==================== ESCAPE ====================
    function escapeHtml(str) {
        if (!str) return '';
        return str.replace(/&/g, '&amp;')
                  .replace(/</g, '&lt;')
                  .replace(/>/g, '&gt;')
                  .replace(/"/g, '&quot;');
    }

    // ==================== NORMALIZE (SAFE ONLY) ====================
    // Whitelist of safe, unambiguous patterns. Never invents math.
    var SAFE_PATTERNS = [
        // x^2 → x^{2} (single or multi-digit bare exponent)
        { from: /\^(\d+)(?!\})/g, to: '^{$1}' },
        // x_n → x_{n} (single char bare subscript, not already braced)
        { from: /_([a-zA-Z0-9])(?!\{)/g, to: '_{$1}' },
        // sqrt(...) → \sqrt{...} only if not already prefixed by backslash
        { from: /(?<!\\)sqrt\(([^)]+)\)/g, to: '\\sqrt{$1}' }
    ];

    function normalizeLatex(tex) {
        for (var i = 0; i < SAFE_PATTERNS.length; i++) {
            tex = tex.replace(SAFE_PATTERNS[i].from, SAFE_PATTERNS[i].to);
        }
        return tex;
    }

    // ==================== QUICK CHECK ====================
    function hasLatex(text) {
        return text && (text.indexOf('\\(') !== -1 || text.indexOf('\\[') !== -1);
    }

    // ==================== RENDER ====================
    function render(text) {
        if (!text) return '';

        // Cache hit
        var cached = getCached(text);
        if (cached) return cached;

        // No KaTeX — escaped plain text
        if (typeof katex === 'undefined') {
            return escapeHtml(text);
        }

        // No math delimiters — escaped plain text
        if (!hasLatex(text)) {
            var escaped = escapeHtml(text);
            setCache(text, escaped);
            return escaped;
        }

        var result = '';
        var i = 0;
        var len = text.length;

        while (i < len) {
            var inlineStart = text.indexOf('\\(', i);
            var blockStart = text.indexOf('\\[', i);

            var nextStart = -1;
            var isBlock = false;

            if (inlineStart === -1 && blockStart === -1) {
                result += escapeHtml(text.substring(i));
                break;
            } else if (inlineStart === -1) {
                nextStart = blockStart; isBlock = true;
            } else if (blockStart === -1) {
                nextStart = inlineStart; isBlock = false;
            } else if (inlineStart <= blockStart) {
                nextStart = inlineStart; isBlock = false;
            } else {
                nextStart = blockStart; isBlock = true;
            }

            // Text before the math
            if (nextStart > i) {
                result += escapeHtml(text.substring(i, nextStart));
            }

            // Find closing delimiter
            var closeDelim = isBlock ? '\\]' : '\\)';
            var closePos = text.indexOf(closeDelim, nextStart + 2);

            if (closePos === -1) {
                // No closing delimiter — plain text
                result += escapeHtml(text.substring(nextStart));
                break;
            }

            // Extract, normalize, render
            var tex = text.substring(nextStart + 2, closePos);
            tex = normalizeLatex(tex);

            try {
                result += katex.renderToString(tex, {
                    displayMode: isBlock,
                    throwOnError: false,
                    errorColor: '#f43f5e',
                    trust: false,
                    strict: false
                });
            } catch (e) {
                console.warn('[mathRender] KaTeX error for "' + tex.substring(0, 40) + '":', e.message);
                var fallbackTex = isBlock ? '\\[' + tex + '\\]' : '\\(' + tex + '\\)';
                result += '<span class="math-fallback" title="Formule non reconnue">'
                    + escapeHtml(fallbackTex)
                    + '</span>';
            }

            i = closePos + 2;
        }

        setCache(text, result);
        return result;
    }

    // ==================== SET ELEMENT CONTENT ====================
    function setContent(el, text) {
        if (!el) return;
        if (!text) { el.textContent = ''; return; }
        if (hasLatex(text) && typeof katex !== 'undefined') {
            el.innerHTML = render(text);
        } else {
            el.textContent = text;
        }
    }

    // ==================== PROCESS EXISTING DOM ====================
    function processElement(root) {
        if (!root || typeof katex === 'undefined') return;
        var selectors = '.flashcard-content, .quiz-question-text, .quiz-option, .quiz-feedback, .gen-quiz-question, .bac-section-content, .cc-text, .prof-msg-content';
        var targets = root.querySelectorAll(selectors);
        for (var i = 0; i < targets.length; i++) {
            var t = targets[i];
            var raw = t.getAttribute('data-raw') || t.textContent;
            if (hasLatex(raw)) {
                t.setAttribute('data-raw', raw);
                t.innerHTML = render(raw);
            }
        }
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.mathRender = {
        render: render,
        setContent: setContent,
        hasLatex: hasLatex,
        processElement: processElement,
        escapeHtml: escapeHtml
    };
})();
