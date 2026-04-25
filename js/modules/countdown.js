// countdown.js — Discrete "available until midnight" indicator (Europe/Paris).
// No alerts, no pressure — just an info badge that auto-refreshes every minute.
(function() {
    'use strict';

    function parisNow() {
        return new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Paris' }));
    }

    function msUntilMidnight() {
        var now = parisNow();
        var end = new Date(now);
        end.setHours(24, 0, 0, 0);
        return end.getTime() - now.getTime();
    }

    function formatRemaining() {
        var ms = msUntilMidnight();
        if (ms <= 0) return 'nouvelle journee';
        var totalMin = Math.floor(ms / 60000);
        var hours = Math.floor(totalMin / 60);
        var mins = totalMin % 60;
        if (hours === 0) return mins + ' min';
        if (mins === 0) return hours + ' h';
        return hours + ' h ' + (mins < 10 ? '0' : '') + mins;
    }

    function renderBadge() {
        return '<span class="sf-countdown" style="display:inline-flex;align-items:center;gap:0.3rem;color:var(--text-muted);font-size:0.82rem;opacity:0.85;">'
            +    '🌙 Disponible jusqu\'a minuit · <strong class="sf-countdown-value" style="font-weight:600;">' + formatRemaining() + '</strong>'
            +  '</span>';
    }

    function tick() {
        var els = document.querySelectorAll('.sf-countdown-value');
        if (!els.length) return;
        var txt = formatRemaining();
        for (var i = 0; i < els.length; i++) els[i].textContent = txt;
    }

    var _timer = null;
    function start() {
        if (_timer) return;
        _timer = setInterval(tick, 60000); // every minute
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', start);
    } else {
        start();
    }

    window.StudFlow = window.StudFlow || {};
    window.StudFlow.countdown = {
        renderBadge: renderBadge,
        formatRemaining: formatRemaining,
        msUntilMidnight: msUntilMidnight,
        tick: tick
    };
})();
