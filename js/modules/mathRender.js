// mathRender.js — KaTeX rendering utility for StudFlow
// Detects LaTeX in text, renders math, escapes the rest.
// Usage: window.StudFlow.mathRender.render(text) → safe HTML string
(function() {
    'use strict';

    // ==================== ESCAPE ====================
    function escapeHtml(str) {
        if (!str) return '';
        return str.replace(/&/g, '&amp;')
                  .replace(/</g, '&lt;')
                  .replace(/>/g, '&gt;')
                  .replace(/"/g, '&quot;');
    }

    // ==================== NORMALIZE COMMON PATTERNS ====================
    // Light normalization — only safe, unambiguous transforms
    function normalizeLatex(tex) {
        return tex
            // x^2 → x^{2}, x^10 → x^{10} (bare exponents without braces)
            .replace(/\^(\d+)/g, '^{$1}')
            // x_n → x_{n}, x_0 → x_{0}
            .replace(/_(\w)(?!\{)/g, '_{$1}')
            // sqrt(...) → \sqrt{...} only if not already \sqrt
            .replace(/(?<!\\)sqrt\(([^)]+)\)/g, '\\sqrt{$1}');
    }

    // ==================== RENDER ====================
    // Takes a string that may contain \( ... \) and \[ ... \]
    // Returns safe HTML with rendered KaTeX spans
    function render(text) {
        if (!text) return '';
        if (typeof katex === 'undefined') {
            // KaTeX not loaded — return escaped text as-is
            return escapeHtml(text);
        }

        // Split text by LaTeX delimiters, process each segment
        // Pattern: \( ... \) for inline, \[ ... \] for display
        var result = '';
        var i = 0;
        var len = text.length;

        while (i < len) {
            // Look for \( or \[
            var inlineStart = text.indexOf('\\(', i);
            var blockStart = text.indexOf('\\[', i);

            // Find the nearest delimiter
            var nextStart = -1;
            var isBlock = false;

            if (inlineStart === -1 && blockStart === -1) {
                // No more math — append rest as text
                result += escapeHtml(text.substring(i));
                break;
            } else if (inlineStart === -1) {
                nextStart = blockStart; isBlock = true;
            } else if (blockStart === -1) {
                nextStart = inlineStart; isBlock = false;
            } else if (inlineStart < blockStart) {
                nextStart = inlineStart; isBlock = false;
            } else {
                nextStart = blockStart; isBlock = true;
            }

            // Append text before the math
            if (nextStart > i) {
                result += escapeHtml(text.substring(i, nextStart));
            }

            // Find closing delimiter
            var closeDelim = isBlock ? '\\]' : '\\)';
            var closePos = text.indexOf(closeDelim, nextStart + 2);

            if (closePos === -1) {
                // No closing delimiter — treat as plain text
                result += escapeHtml(text.substring(nextStart));
                break;
            }

            // Extract and render the LaTeX
            var tex = text.substring(nextStart + 2, closePos);
            tex = normalizeLatex(tex);

            try {
                var html = katex.renderToString(tex, {
                    displayMode: isBlock,
                    throwOnError: false,
                    errorColor: '#f43f5e',
                    trust: false,
                    strict: false
                });
                result += html;
            } catch (e) {
                // Fallback: show the raw LaTeX in a styled span
                console.warn('[mathRender] KaTeX error:', e.message, 'for:', tex);
                var fallback = isBlock ? '\\[' + tex + '\\]' : '\\(' + tex + '\\)';
                result += '<span class="math-error">' + escapeHtml(fallback) + '</span>';
            }

            i = closePos + 2;
        }

        return result;
    }

    // ==================== SET ELEMENT CONTENT ====================
    // Safe replacement for el.textContent = text when math may be present
    function setContent(el, text) {
        if (!el) return;
        if (!text || (typeof katex === 'undefined' && !hasLatex(text))) {
            el.textContent = text || '';
            return;
        }
        if (hasLatex(text)) {
            el.innerHTML = render(text);
        } else {
            el.textContent = text;
        }
    }

    // Quick check: does this string contain LaTeX delimiters?
    function hasLatex(text) {
        return text && (text.indexOf('\\(') !== -1 || text.indexOf('\\[') !== -1);
    }

    // ==================== PROCESS EXISTING DOM ====================
    // Scan an element for text nodes with LaTeX and render them
    function processElement(el) {
        if (!el || typeof katex === 'undefined') return;
        // Process all text-bearing children that might have math
        var targets = el.querySelectorAll('.flashcard-content, .quiz-question-text, .gen-quiz-question, .bac-section-content, .cc-text, .prof-msg-content');
        for (var i = 0; i < targets.length; i++) {
            var t = targets[i];
            var raw = t.getAttribute('data-raw') || t.textContent;
            if (hasLatex(raw)) {
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
