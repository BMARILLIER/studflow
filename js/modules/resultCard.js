// resultCard.js — Shareable screenshot-able result card for Instagram Stories
(function() {
    'use strict';

    // ==================== CONFIG ====================
    var CARD_WIDTH = 320;
    var BRAND_NAME = 'StudFlow';
    var BRAND_URL = 'studflow.app';

    // ==================== GENERATE CARD HTML ====================
    function generate(data) {
        // data = { type, score, total, streak, subject, percentile, xp }
        var type = data.type || 'session';
        var score = data.score || 0;
        var total = data.total || 0;
        var streak = data.streak || 0;
        var subject = data.subject || '';
        var percentile = data.percentile || 0;
        var xp = data.xp || 0;

        var pct = total > 0 ? Math.round((score / total) * 100) : 0;

        // Choose emoji + label based on type
        var mainEmoji = getMainEmoji(type, pct);
        var typeLabel = getTypeLabel(type);

        // Build card div
        var card = document.createElement('div');
        card.className = 'rc-card';

        var html = '';

        // Brand
        html += '<div class="rc-brand">';
        html += '<span class="rc-brand-icon">\u2726</span> ' + BRAND_NAME;
        html += '</div>';

        // Main score area
        html += '<div class="rc-score-area">';
        html += '<div class="rc-emoji">' + mainEmoji + '</div>';
        html += '<div class="rc-score">' + pct + '%</div>';
        if (subject) {
            html += '<div class="rc-subject">' + escapeHTML(subject) + ' \u00b7 ' + score + '/' + total + '</div>';
        } else {
            html += '<div class="rc-subject">' + typeLabel + ' \u00b7 ' + score + '/' + total + '</div>';
        }
        html += '</div>';

        // Details
        html += '<div class="rc-details">';

        if (streak > 0) {
            html += '<div class="rc-detail-item">';
            html += '<span class="rc-detail-icon">\uD83D\uDD25</span>';
            html += '<span class="rc-detail-text">Streak : ' + streak + ' jour' + (streak > 1 ? 's' : '') + '</span>';
            html += '</div>';
        }

        if (percentile > 0) {
            html += '<div class="rc-detail-item">';
            html += '<span class="rc-detail-icon">\uD83D\uDCCA</span>';
            html += '<span class="rc-detail-text">Top ' + percentile + '% des \u00e9l\u00e8ves</span>';
            html += '</div>';
        }

        if (xp > 0) {
            html += '<div class="rc-detail-item">';
            html += '<span class="rc-detail-icon">\u26A1</span>';
            html += '<span class="rc-detail-text">+' + xp + ' XP</span>';
            html += '</div>';
        }

        html += '</div>';

        // URL
        html += '<div class="rc-url">' + BRAND_URL + '</div>';

        card.innerHTML = html;
        return card;
    }

    // ==================== SHOW OVERLAY ====================
    function show(data) {
        // Remove existing overlay if any
        var existing = document.querySelector('.rc-overlay');
        if (existing) existing.remove();

        var overlay = document.createElement('div');
        overlay.className = 'rc-overlay';

        // Close button
        var closeBtn = document.createElement('button');
        closeBtn.className = 'rc-close';
        closeBtn.innerHTML = '\u00d7';
        closeBtn.setAttribute('aria-label', 'Fermer');
        closeBtn.addEventListener('click', function() {
            overlay.classList.add('rc-overlay-closing');
            setTimeout(function() { overlay.remove(); }, 200);
        });

        // Card
        var card = generate(data);

        // Actions below card
        var actions = document.createElement('div');
        actions.className = 'rc-actions';

        // Share button
        var shareBtn = document.createElement('button');
        shareBtn.className = 'rc-action-btn rc-action-share';
        shareBtn.innerHTML = '\uD83D\uDCF2 Partager';
        shareBtn.addEventListener('click', function() {
            shareCard(data);
        });

        // Screenshot tip
        var tipBtn = document.createElement('button');
        tipBtn.className = 'rc-action-btn rc-action-screenshot';
        tipBtn.innerHTML = '\uD83D\uDCF8 Screenshot pour ta Story';
        tipBtn.addEventListener('click', function() {
            showScreenshotTip();
        });

        actions.appendChild(shareBtn);
        actions.appendChild(tipBtn);

        // Build overlay
        overlay.appendChild(closeBtn);
        overlay.appendChild(card);
        overlay.appendChild(actions);

        document.body.appendChild(overlay);

        // Animate in
        requestAnimationFrame(function() {
            overlay.classList.add('rc-overlay-visible');
        });

        // Close on overlay background click
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                overlay.classList.add('rc-overlay-closing');
                setTimeout(function() { overlay.remove(); }, 200);
            }
        });
    }

    // ==================== SHARE ====================
    function shareCard(data) {
        var text = getShareText(data);
        var url = window.location.origin + window.location.pathname;

        if (navigator.share) {
            navigator.share({
                title: '\uD83D\uDD25 Mon score StudFlow',
                text: text,
                url: url
            }).catch(function() {});
        } else {
            // Fallback: copy to clipboard
            var fullText = text + '\n' + url;
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(fullText).then(function() {
                    if (window.StudFlow.gamification) {
                        window.StudFlow.gamification.showToast('Copie ! Colle-le sur Insta ou Snap \uD83D\uDCF2', 'xp', '\uD83D\uDCCB');
                    }
                });
            }
        }
    }

    function showScreenshotTip() {
        if (window.StudFlow.gamification) {
            window.StudFlow.gamification.showToast('Fais un screenshot et poste-le en Story ! \uD83D\uDCF8', 'info', '\uD83D\uDCF1');
        }
    }

    // ==================== GET SHARE TEXT ====================
    function getShareText(data) {
        var type = data.type || 'session';
        var score = data.score || 0;
        var total = data.total || 0;
        var streak = data.streak || 0;
        var xp = data.xp || 0;
        var pct = total > 0 ? Math.round((score / total) * 100) : 0;

        var lines = [];

        if (type === 'session') {
            lines.push('\uD83D\uDD25 ' + pct + '% sur ma session StudFlow !');
            lines.push(score + '/' + total + ' correct');
        } else if (type === 'challenge') {
            lines.push('\u2694\uFE0F Defi StudFlow : ' + pct + '% (' + score + '/' + total + ')');
            lines.push('Tu fais mieux ?');
        } else if (type === 'chrono') {
            lines.push('\u23F1 Chrono StudFlow : ' + pct + '% (' + score + '/' + total + ')');
        } else if (type === 'streak') {
            lines.push('\uD83D\uDD25 ' + streak + ' jours de streak sur StudFlow !');
        }

        if (streak > 0 && type !== 'streak') {
            lines.push('\uD83D\uDD25 Streak : ' + streak + ' jours');
        }
        if (xp > 0) {
            lines.push('\u26A1 +' + xp + ' XP');
        }

        lines.push('');
        lines.push('Revise aussi sur ' + BRAND_URL);

        return lines.join('\n');
    }

    // ==================== HELPERS ====================
    function getMainEmoji(type, pct) {
        if (type === 'streak') return '\uD83D\uDD25';
        if (type === 'challenge') return pct >= 70 ? '\uD83C\uDFC6' : '\u2694\uFE0F';
        if (pct >= 80) return '\uD83D\uDD25';
        if (pct >= 60) return '\uD83D\uDCAA';
        if (pct >= 40) return '\uD83D\uDCDA';
        return '\uD83E\uDDE0';
    }

    function getTypeLabel(type) {
        if (type === 'session') return 'Session';
        if (type === 'challenge') return 'D\u00e9fi';
        if (type === 'chrono') return 'Chrono';
        if (type === 'streak') return 'Streak';
        return 'R\u00e9sultat';
    }

    function escapeHTML(str) {
        if (window.StudFlow.app && window.StudFlow.app.escapeText) return window.StudFlow.app.escapeText(str);
        var div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.resultCard = {
        generate: generate,
        show: show,
        getShareText: getShareText
    };

})();
