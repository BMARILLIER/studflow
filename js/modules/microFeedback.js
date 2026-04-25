// microFeedback.js — Micro-animations non intrusives pour feedback instantane.
// Usage: window.StudFlow.microFeedback.success(element)
(function() {
    'use strict';

    var _styleInjected = false;

    function injectStyles() {
        if (_styleInjected) return;
        _styleInjected = true;
        var css =
            '@keyframes sf-pulse-success{'
          +   '0%{transform:scale(1);box-shadow:0 0 0 0 rgba(34,197,94,0.4)}'
          +   '50%{transform:scale(1.02);box-shadow:0 0 0 10px rgba(34,197,94,0.22)}'
          +   '100%{transform:scale(1);box-shadow:0 0 0 20px rgba(34,197,94,0)}'
          + '}'
          + '.sf-pulse-success{animation:sf-pulse-success 500ms ease-out;will-change:transform}'
          + '@media (prefers-reduced-motion: reduce){.sf-pulse-success{animation:none}}';

        var s = document.createElement('style');
        s.setAttribute('data-sf-micro', '1');
        s.textContent = css;
        document.head.appendChild(s);
    }

    function success(el) {
        if (!el || !el.classList) return;
        injectStyles();
        el.classList.remove('sf-pulse-success');
        // force reflow pour redemarrer l'animation meme si click rapide
        void el.offsetWidth;
        el.classList.add('sf-pulse-success');
        setTimeout(function() {
            if (el && el.classList) el.classList.remove('sf-pulse-success');
        }, 600);
    }

    window.StudFlow = window.StudFlow || {};
    window.StudFlow.microFeedback = { success: success };
})();
