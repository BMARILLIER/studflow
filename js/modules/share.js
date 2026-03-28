// share.js — Module Partage et Invitation
(function() {

    // ==================== CONFIG ====================
    var SHARE_MESSAGE = "Je revise avec StudFlow — ca m'aide a moins stresser pour le bac et a m'organiser.\nTu peux essayer gratuitement ici :";
    var SHARE_LINK = window.location.href.split('?')[0] + '?ref=ami';
    var SHARE_FULL = SHARE_MESSAGE + '\n' + SHARE_LINK;

    var SHARE_CHANNELS = [
        {
            id: 'copy',
            name: 'Copier',
            icon: '📋',
            action: function() { copyToClipboard(SHARE_FULL); }
        },
        {
            id: 'whatsapp',
            name: 'WhatsApp',
            icon: '💬',
            action: function() { openExternal('https://wa.me/?text=' + encodeURIComponent(SHARE_FULL)); }
        },
        {
            id: 'messenger',
            name: 'Messenger',
            icon: '💭',
            action: function() { openExternal('https://www.facebook.com/dialog/send?link=' + encodeURIComponent(SHARE_LINK) + '&app_id=0&redirect_uri=' + encodeURIComponent(window.location.href)); }
        },
        {
            id: 'email',
            name: 'Email',
            icon: '✉️',
            action: function() {
                var subject = encodeURIComponent('Essaye StudFlow pour reviser le bac');
                var body = encodeURIComponent(SHARE_FULL);
                window.location.href = 'mailto:?subject=' + subject + '&body=' + body;
            }
        }
    ];

    // ==================== HELPERS ====================
    function copyToClipboard(text) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(function() {
                showCopyFeedback();
            });
        } else {
            // Fallback
            var textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            showCopyFeedback();
        }
    }

    function showCopyFeedback() {
        if (window.StudFlow.gamification) {
            window.StudFlow.gamification.showToast('Copie dans le presse-papiers !', 'xp', '📋');
        }
    }

    function openExternal(url) {
        window.open(url, '_blank');
        trackShare();
    }

    function trackShare() {
        var stats = window.StudFlow.storage.loadData('shareStats', { total: 0, channels: {} });
        stats.total++;
        window.StudFlow.storage.saveData('shareStats', stats);

        if (window.StudFlow.gamification) {
            window.StudFlow.gamification.addXP('share');
            window.StudFlow.gamification.showToast('+5 XP — Merci de partager !', 'xp', '🤝');
        }
    }

    function tryNativeShare() {
        if (navigator.share) {
            navigator.share({
                title: 'StudFlow — Coach pour reussir le bac',
                text: SHARE_MESSAGE,
                url: SHARE_LINK
            }).then(function() {
                trackShare();
            }).catch(function() {
                // User cancelled or error — no action needed
            });
            return true;
        }
        return false;
    }

    // ==================== RENDER ====================
    function show() {
        window.StudFlow.app.showScreen('share');
    }

    function renderMain() {
        var container = document.getElementById('share-content');
        if (!container) return;

        var stats = window.StudFlow.storage.loadData('shareStats', { total: 0 });
        var hasNativeShare = !!navigator.share;

        // Share channels
        var channelsHTML = SHARE_CHANNELS.map(function(ch) {
            return '<button class="share-channel-btn" data-action="share.triggerShare" data-param="' + ch.id + '">'
                + '<span class="share-channel-icon">' + ch.icon + '</span>'
                + '<span class="share-channel-name">' + ch.name + '</span>'
                + '</button>';
        }).join('');

        container.innerHTML = '<div class="share-container">'
            // Header
            + '<div class="share-header">'
            + '<div class="share-header-icon">🤝</div>'
            + '<h2>Invite tes amis</h2>'
            + '<p>StudFlow est meilleur quand on revise ensemble !</p>'
            + '</div>'

            // Native share button (if available)
            + (hasNativeShare
                ? '<button class="share-native-btn" data-action="share.nativeShare">📤 Partager StudFlow</button>'
                : '')

            // Message preview
            + '<div class="share-message-card">'
            + '<div class="share-message-label">Message a partager</div>'
            + '<div class="share-message-text">'
            + '<p>' + SHARE_MESSAGE.replace(/\n/g, '<br>') + '</p>'
            + '<p class="share-message-link">' + SHARE_LINK + '</p>'
            + '</div>'
            + '<button class="share-copy-btn" data-action="share.copyMessage">📋 Copier le message</button>'
            + '</div>'

            // Link
            + '<div class="share-link-card">'
            + '<div class="share-link-label">Lien d\'invitation</div>'
            + '<div class="share-link-row">'
            + '<input type="text" class="share-link-input" value="' + SHARE_LINK + '" readonly data-action="select-input">'
            + '<button class="share-link-copy" data-action="share.copyLink">Copier</button>'
            + '</div>'
            + '</div>'

            // Channels
            + '<div class="share-channels">'
            + '<div class="share-channels-label">Partager via</div>'
            + '<div class="share-channels-grid">' + channelsHTML + '</div>'
            + '</div>'

            // Motivation
            + '<div class="share-motivation">'
            + '<p>💡 Reviser avec un ami augmente la motivation et la memorisation.</p>'
            + '</div>'

            // Stats
            + (stats.total > 0
                ? '<div class="share-stats">🌟 Tu as partage ' + stats.total + ' fois. Merci !</div>'
                : '')
            + '</div>';
    }

    // ==================== ACTIONS ====================
    function triggerShare(channelId) {
        var ch = SHARE_CHANNELS.find(function(c) { return c.id === channelId; });
        if (ch) {
            ch.action();
            trackShare();
        }
    }

    function nativeShare() {
        tryNativeShare();
    }

    function copyMessage() {
        copyToClipboard(SHARE_FULL);
        trackShare();
    }

    function copyLink() {
        copyToClipboard(SHARE_LINK);
        trackShare();
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.share = {
        show: show,
        renderMain: renderMain,
        triggerShare: triggerShare,
        nativeShare: nativeShare,
        copyMessage: copyMessage,
        copyLink: copyLink
    };
})();
