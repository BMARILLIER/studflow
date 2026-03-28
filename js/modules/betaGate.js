// betaGate.js — Closed beta access gate (IIFE)
// Requires: window.StudFlow.sb (supabaseClient)
(function() {
    'use strict';

    var BETA_LIMIT = 200;
    var MAX_REFERRALS = 2;
    var LS_UNLOCKED     = 'studflow_beta_unlocked';
    var LS_EMAIL        = 'studflow_beta_email';
    var LS_TOKEN        = 'studflow_beta_token';
    var LS_WELCOME_SEEN = 'studflow_beta_welcome_seen';

    // ---- Pure helpers (exported for testing) ----

    function validateEmail(email) {
        if (!email || typeof email !== 'string') return false;
        // Simple but effective email regex
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    }

    function parseInviteToken(search) {
        if (!search || typeof search !== 'string') return null;
        var params = new URLSearchParams(search);
        return params.get('invite') || null;
    }

    // ---- Client-side rate limit ----
    var _lastAttempt = 0;
    var _attemptCount = 0;
    var RATE_LIMIT_WINDOW = 60000; // 1 minute
    var RATE_LIMIT_MAX = 5; // max 5 attempts per minute

    function isRateLimited() {
        var now = Date.now();
        if (now - _lastAttempt > RATE_LIMIT_WINDOW) {
            _attemptCount = 0;
        }
        return _attemptCount >= RATE_LIMIT_MAX;
    }

    function recordAttempt() {
        var now = Date.now();
        if (now - _lastAttempt > RATE_LIMIT_WINDOW) {
            _attemptCount = 0;
        }
        _attemptCount++;
        _lastAttempt = now;
    }

    // ---- Core gate logic ----

    function isUnlocked() {
        return localStorage.getItem(LS_UNLOCKED) === 'true';
    }

    function getInviteToken() {
        return parseInviteToken(window.location.search);
    }

    function unlock(email, token) {
        localStorage.setItem(LS_UNLOCKED, 'true');
        localStorage.setItem(LS_EMAIL, email);
        localStorage.setItem(LS_TOKEN, token);
    }

    // ---- Welcome screen (shown once) ----

    function isWelcomeSeen() {
        return localStorage.getItem(LS_WELCOME_SEEN) === 'true';
    }

    function markWelcomeSeen() {
        localStorage.setItem(LS_WELCOME_SEEN, 'true');
    }

    function showWelcome() {
        var container = document.getElementById('betawelcome-content');
        if (!container) return;

        container.innerHTML =
            '<div class="beta-gate">' +
                '<div class="beta-gate-card beta-welcome-card">' +
                    '<div class="beta-gate-icon">🚀</div>' +
                    '<h1 class="beta-gate-title">StudFlow Beta</h1>' +
                    '<div class="beta-welcome-body">' +
                        '<p>Bienvenue dans la b\u00eata priv\u00e9e de StudFlow.</p>' +
                        '<p>Tu fais partie des premiers testeurs de l\u2019application qui aide les lyc\u00e9ens \u00e0 r\u00e9viser le bac.</p>' +
                        '<p>Certaines fonctionnalit\u00e9s peuvent encore \u00e9voluer. ' +
                            'Tes retours nous aident \u00e0 am\u00e9liorer StudFlow.</p>' +
                    '</div>' +
                    '<div class="beta-welcome-actions">' +
                        '<button class="beta-gate-btn" id="beta-welcome-start">Commencer</button>' +
                        '<button class="beta-gate-btn beta-welcome-secondary" id="beta-welcome-feedback">Signaler un probl\u00e8me</button>' +
                    '</div>' +
                    '<p class="beta-welcome-note">Merci de ne pas partager ton lien d\u2019invitation.</p>' +
                '</div>' +
            '</div>';

        document.getElementById('beta-welcome-start').addEventListener('click', function() {
            markWelcomeSeen();
            if (window.StudFlow.storage.hasCompletedOnboarding()) {
                window.StudFlow.app.showScreen('dashboard');
                if (window.StudFlow.app.updateDashboard) window.StudFlow.app.updateDashboard();
            } else if (window.StudFlow.onboarding) {
                window.StudFlow.onboarding.start();
            } else {
                window.StudFlow.app.showScreen('home');
            }
        });

        document.getElementById('beta-welcome-feedback').addEventListener('click', function() {
            markWelcomeSeen();
            window.StudFlow.app.showScreen('feedback');
        });
    }

    // ---- Error messages ----

    var ERROR_MESSAGES = {
        invalid_token: "Ce lien d'invitation n'est pas valide.",
        token_revoked: "Ce lien d'invitation a \u00e9t\u00e9 r\u00e9voqu\u00e9.",
        token_used:    "Ce lien d'invitation est d\u00e9j\u00e0 utilis\u00e9 par un autre compte.",
        beta_full:     "B\u00eata compl\u00e8te \u2014 les " + BETA_LIMIT + " places de test sont d\u00e9j\u00e0 utilis\u00e9es.",
        network:       "Connexion Internet requise pour activer votre acc\u00e8s b\u00eata.",
        unknown:       "Une erreur est survenue. Veuillez r\u00e9essayer."
    };

    // ---- UI Rendering ----

    function renderDenied(container, reason) {
        var msg = ERROR_MESSAGES[reason] || ERROR_MESSAGES.unknown;
        container.innerHTML =
            '<div class="beta-gate">' +
                '<div class="beta-gate-card">' +
                    '<div class="beta-gate-icon">🔒</div>' +
                    '<h1 class="beta-gate-title">Acc\u00e8s b\u00eata</h1>' +
                    '<p class="beta-gate-error">' + escapeHtml(msg) + '</p>' +
                '</div>' +
            '</div>';
    }

    function show() {
        var container = document.getElementById('betagate-content');
        if (!container) return;

        var token = getInviteToken();

        // No token in URL → dead end
        if (!token) {
            container.innerHTML =
                '<div class="beta-gate">' +
                    '<div class="beta-gate-card">' +
                        '<div class="beta-gate-icon">🔒</div>' +
                        '<h1 class="beta-gate-title">Acc\u00e8s b\u00eata requis</h1>' +
                        '<p class="beta-gate-msg">StudFlow est en b\u00eata ferm\u00e9e. ' +
                            'Tu as besoin d\u2019un lien d\u2019invitation pour acc\u00e9der \u00e0 l\u2019application.</p>' +
                    '</div>' +
                '</div>';
            return;
        }

        // Token present → show email form
        container.innerHTML =
            '<div class="beta-gate">' +
                '<div class="beta-gate-card">' +
                    '<div class="beta-gate-icon">✨</div>' +
                    '<h1 class="beta-gate-title">Bienvenue en b\u00eata !</h1>' +
                    '<p class="beta-gate-msg">Entre ton email pour activer ton acc\u00e8s.</p>' +
                    '<form id="beta-gate-form" class="beta-gate-form">' +
                        '<input type="email" id="beta-gate-email" class="beta-gate-input" ' +
                            'placeholder="ton.email@exemple.com" required autocomplete="email">' +
                        '<label class="beta-gate-consent">' +
                            '<input type="checkbox" id="beta-gate-consent" required>' +
                            '<span>J\u2019accepte que mon email soit utilis\u00e9 pour la b\u00eata de StudFlow</span>' +
                        '</label>' +
                        '<button type="submit" class="beta-gate-btn">Activer mon acc\u00e8s</button>' +
                        '<div id="beta-gate-error" class="beta-gate-error" style="display:none;"></div>' +
                    '</form>' +
                '</div>' +
            '</div>';

        // Bind form submit
        var form = document.getElementById('beta-gate-form');
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            handleSubmit(token);
        });
    }

    function handleSubmit(token) {
        var emailInput = document.getElementById('beta-gate-email');
        var consentBox = document.getElementById('beta-gate-consent');
        var errorDiv   = document.getElementById('beta-gate-error');
        var btn        = document.querySelector('.beta-gate-btn');
        var email      = emailInput.value.trim();

        // Client-side validation
        if (!validateEmail(email)) {
            showFormError(errorDiv, 'Adresse email invalide.');
            return;
        }
        if (!consentBox.checked) {
            showFormError(errorDiv, 'Tu dois accepter les conditions.');
            return;
        }

        // Token format validation (hex or ref-hex)
        if (!token || !/^(ref-)?[a-f0-9]{8,}$/i.test(token)) {
            showFormError(errorDiv, ERROR_MESSAGES.invalid_token);
            return;
        }

        // Rate limit
        if (isRateLimited()) {
            showFormError(errorDiv, 'Trop de tentatives. Reessaie dans quelques instants.');
            return;
        }
        recordAttempt();

        // Disable button during request
        btn.disabled = true;
        btn.textContent = 'Activation...';
        errorDiv.style.display = 'none';

        // Call Supabase RPC
        activateOnServer(token, email)
            .then(function(result) {
                if (result.ok) {
                    unlock(email, token);
                    // Show welcome screen on first activation
                    window.StudFlow.app.showScreen('betawelcome');
                    showWelcome();
                } else if (result.code === 'beta_full') {
                    // Show waitlist page instead of static error
                    showWaitlist();
                } else {
                    showFormError(errorDiv, ERROR_MESSAGES[result.code] || ERROR_MESSAGES.unknown);
                    btn.disabled = false;
                    btn.textContent = 'Activer mon acc\u00e8s';
                }
            })
            .catch(function() {
                showFormError(errorDiv, ERROR_MESSAGES.network);
                btn.disabled = false;
                btn.textContent = 'Activer mon acc\u00e8s';
            });
    }

    function activateOnServer(token, email) {
        var sb = window.StudFlow.sb;
        if (!sb || !sb.isAvailable()) {
            return Promise.reject(new Error('Supabase not available'));
        }
        var client = sb.getClient();
        if (!client) {
            return Promise.reject(new Error('Supabase client not initialized'));
        }
        return sb.withTimeout(
            client.rpc('beta_activate', { p_token: token, p_email: email })
                .then(function(res) {
                    if (res.error) throw res.error;
                    return res.data; // { ok: true } or { ok: false, code: '...' }
                })
        );
    }

    function showFormError(el, msg) {
        el.textContent = msg;
        el.style.display = 'block';
    }

    function escapeHtml(str) {
        var div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    // ---- Waitlist (shown when beta is full) ----

    function showWaitlist(container) {
        if (!container) container = document.getElementById('betagate-content');
        if (!container) return;

        container.innerHTML =
            '<div class="beta-gate">' +
                '<div class="beta-gate-card">' +
                    '<div class="beta-gate-icon">⏳</div>' +
                    '<h1 class="beta-gate-title">StudFlow Beta</h1>' +
                    '<p class="beta-gate-msg">La b\u00eata priv\u00e9e est actuellement compl\u00e8te.</p>' +
                    '<p class="beta-gate-msg">Les ' + BETA_LIMIT + ' places de test sont d\u00e9j\u00e0 utilis\u00e9es.</p>' +
                    '<p class="beta-gate-msg">Tu peux rejoindre la liste d\u2019attente pour \u00eatre inform\u00e9 ' +
                        'lors de l\u2019ouverture de nouvelles places.</p>' +
                    '<form id="beta-waitlist-form" class="beta-gate-form">' +
                        '<label for="beta-waitlist-email" class="beta-gate-label">Ton email</label>' +
                        '<input type="email" id="beta-waitlist-email" class="beta-gate-input" ' +
                            'placeholder="Ton email" required autocomplete="email">' +
                        '<button type="submit" class="beta-gate-btn">Rejoindre la liste d\u2019attente</button>' +
                        '<div id="beta-waitlist-msg" class="beta-waitlist-msg" style="display:none;"></div>' +
                    '</form>' +
                    '<p class="beta-welcome-note">Nous t\u2019enverrons un message lorsque de nouvelles places seront disponibles.</p>' +
                '</div>' +
            '</div>';

        var form = document.getElementById('beta-waitlist-form');
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            handleWaitlistSubmit();
        });
    }

    function handleWaitlistSubmit() {
        var emailInput = document.getElementById('beta-waitlist-email');
        var msgDiv     = document.getElementById('beta-waitlist-msg');
        var btn        = form_querySelector('#beta-waitlist-form .beta-gate-btn');
        var email      = emailInput.value.trim();

        if (!validateEmail(email)) {
            showWaitlistMsg(msgDiv, 'Adresse email invalide.', true);
            return;
        }

        btn.disabled = true;
        btn.textContent = 'Inscription...';
        msgDiv.style.display = 'none';

        joinWaitlistOnServer(email)
            .then(function(result) {
                if (result.ok) {
                    showWaitlistMsg(msgDiv, 'Merci ! Tu es maintenant sur la liste d\u2019attente StudFlow.', false);
                    btn.style.display = 'none';
                    emailInput.disabled = true;
                } else if (result.code === 'already_listed') {
                    showWaitlistMsg(msgDiv, 'Tu es d\u00e9j\u00e0 inscrit sur la liste d\u2019attente.', false);
                    btn.style.display = 'none';
                    emailInput.disabled = true;
                } else {
                    showWaitlistMsg(msgDiv, ERROR_MESSAGES.unknown, true);
                    btn.disabled = false;
                    btn.textContent = 'Rejoindre la liste d\u2019attente';
                }
            })
            .catch(function() {
                showWaitlistMsg(msgDiv, ERROR_MESSAGES.network, true);
                btn.disabled = false;
                btn.textContent = 'Rejoindre la liste d\u2019attente';
            });
    }

    function form_querySelector(sel) {
        return document.querySelector(sel);
    }

    function joinWaitlistOnServer(email) {
        var sb = window.StudFlow.sb;
        if (!sb || !sb.isAvailable()) {
            return Promise.reject(new Error('Supabase not available'));
        }
        var client = sb.getClient();
        if (!client) {
            return Promise.reject(new Error('Supabase client not initialized'));
        }
        return sb.withTimeout(
            client.rpc('beta_waitlist_join', { p_email: email, p_source: 'beta_gate' })
                .then(function(res) {
                    if (res.error) throw res.error;
                    return res.data;
                })
        );
    }

    function showWaitlistMsg(el, msg, isError) {
        el.textContent = msg;
        el.className = 'beta-waitlist-msg' + (isError ? ' beta-waitlist-error' : ' beta-waitlist-success');
        el.style.display = 'block';
    }

    // ---- Referral system ----

    function getStoredEmail() {
        return localStorage.getItem(LS_EMAIL) || null;
    }

    function buildInviteUrl(token) {
        var base = window.location.origin + window.location.pathname;
        return base + '?invite=' + encodeURIComponent(token);
    }

    function fetchMyInvites() {
        var email = getStoredEmail();
        if (!email) return Promise.resolve([]);

        var sb = window.StudFlow.sb;
        if (!sb || !sb.isAvailable()) return Promise.resolve([]);

        var client = sb.getClient();
        if (!client) return Promise.resolve([]);

        return sb.withTimeout(
            client.rpc('beta_get_invites', { p_email: email })
                .then(function(res) {
                    if (res.error) return [];
                    if (res.data && res.data.ok) return res.data.invites || [];
                    return [];
                })
        ).catch(function() { return []; });
    }

    function createInvite() {
        var email = getStoredEmail();
        if (!email) return Promise.reject(new Error('No email'));

        var sb = window.StudFlow.sb;
        if (!sb || !sb.isAvailable()) return Promise.reject(new Error('Offline'));

        var client = sb.getClient();
        if (!client) return Promise.reject(new Error('No client'));

        return sb.withTimeout(
            client.rpc('beta_create_invite', { p_email: email })
                .then(function(res) {
                    if (res.error) throw res.error;
                    return res.data;
                })
        );
    }

    var REFERRAL_ERRORS = {
        max_invites_reached: 'Tu as d\u00e9j\u00e0 utilis\u00e9 tes 2 invitations.',
        beta_full:           'B\u00eata compl\u00e8te \u2014 les ' + BETA_LIMIT + ' places sont d\u00e9j\u00e0 prises.',
        not_a_tester:        'Ton compte n\u2019est pas reconnu comme testeur actif.',
        network:             'Connexion requise pour g\u00e9n\u00e9rer une invitation.'
    };

    function showReferralPanel() {
        var container = document.getElementById('beta-invite-settings');
        if (!container) return;
        container.style.display = '';

        container.innerHTML =
            '<div class="beta-referral-card">' +
                '<div class="beta-referral-header">' +
                    '<span class="beta-referral-icon">🎟️</span>' +
                    '<div>' +
                        '<h3 class="beta-referral-title">Invite tes amis</h3>' +
                        '<p class="beta-referral-subtitle">Tu fais partie des premiers testeurs StudFlow. ' +
                            'Tu peux inviter ' + MAX_REFERRALS + ' amis qui passent aussi le bac.</p>' +
                    '</div>' +
                '</div>' +
                '<div id="beta-referral-list" class="beta-referral-list">' +
                    '<p class="beta-referral-loading">Chargement...</p>' +
                '</div>' +
                '<div id="beta-referral-actions"></div>' +
                '<div id="beta-referral-error" class="beta-gate-error" style="display:none;"></div>' +
            '</div>';

        // Load existing invites
        fetchMyInvites().then(function(invites) {
            renderReferralList(invites);
        });
    }

    function renderReferralList(invites) {
        var listEl    = document.getElementById('beta-referral-list');
        var actionsEl = document.getElementById('beta-referral-actions');
        if (!listEl || !actionsEl) return;

        var usedCount = invites.length;

        if (invites.length === 0) {
            listEl.innerHTML = '<p class="beta-referral-empty">Aucune invitation g\u00e9n\u00e9r\u00e9e pour le moment.</p>';
        } else {
            var html = '';
            for (var i = 0; i < invites.length; i++) {
                var inv = invites[i];
                var url = buildInviteUrl(inv.token);
                var used = inv.uses >= inv.max_uses;
                var statusLabel = used ? 'Utilis\u00e9e' : 'Active';
                var statusClass = used ? 'beta-invite-used' : 'beta-invite-active';
                html +=
                    '<div class="beta-invite-row">' +
                        '<div class="beta-invite-url">' + escapeHtml(url) + '</div>' +
                        '<div class="beta-invite-meta">' +
                            '<span class="beta-invite-status ' + statusClass + '">' + statusLabel + '</span>' +
                            '<button class="beta-invite-copy" data-url="' + escapeHtml(url) + '">Copier</button>' +
                        '</div>' +
                    '</div>';
            }
            listEl.innerHTML = html;

            // Bind copy buttons
            var copyBtns = listEl.querySelectorAll('.beta-invite-copy');
            for (var j = 0; j < copyBtns.length; j++) {
                copyBtns[j].addEventListener('click', handleCopyClick);
            }
        }

        // Show "generate" button if under limit
        if (usedCount < MAX_REFERRALS) {
            actionsEl.innerHTML =
                '<button class="beta-gate-btn beta-referral-generate" id="beta-referral-generate-btn">' +
                    'G\u00e9n\u00e9rer une invitation (' + usedCount + '/' + MAX_REFERRALS + ')' +
                '</button>';
            document.getElementById('beta-referral-generate-btn')
                .addEventListener('click', handleGenerateClick);
        } else {
            actionsEl.innerHTML =
                '<p class="beta-referral-done">' + MAX_REFERRALS + '/' + MAX_REFERRALS + ' invitations utilis\u00e9es</p>';
        }
    }

    function handleCopyClick(e) {
        var url = e.target.getAttribute('data-url');
        if (!url) return;

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(url).then(function() {
                e.target.textContent = 'Copi\u00e9 !';
                setTimeout(function() { e.target.textContent = 'Copier'; }, 2000);
            });
        } else {
            // Fallback: select text
            var input = document.createElement('input');
            input.value = url;
            document.body.appendChild(input);
            input.select();
            document.execCommand('copy');
            document.body.removeChild(input);
            e.target.textContent = 'Copi\u00e9 !';
            setTimeout(function() { e.target.textContent = 'Copier'; }, 2000);
        }
    }

    function handleGenerateClick() {
        var btn      = document.getElementById('beta-referral-generate-btn');
        var errorDiv = document.getElementById('beta-referral-error');
        if (!btn) return;

        btn.disabled = true;
        btn.textContent = 'G\u00e9n\u00e9ration...';
        if (errorDiv) errorDiv.style.display = 'none';

        createInvite()
            .then(function(result) {
                if (result.ok) {
                    if (window.StudFlow.analytics) window.StudFlow.analytics.track('invite_link_generated');
                    // Refresh the list
                    fetchMyInvites().then(function(invites) {
                        renderReferralList(invites);
                    });
                } else {
                    var msg = REFERRAL_ERRORS[result.code] || REFERRAL_ERRORS.network;
                    if (errorDiv) showFormError(errorDiv, msg);
                    btn.disabled = false;
                    btn.textContent = 'G\u00e9n\u00e9rer une invitation';
                }
            })
            .catch(function() {
                if (errorDiv) showFormError(errorDiv, REFERRAL_ERRORS.network);
                btn.disabled = false;
                btn.textContent = 'G\u00e9n\u00e9rer une invitation';
            });
    }

    // ---- Register on namespace ----

    window.StudFlow = window.StudFlow || {};
    window.StudFlow.betaGate = {
        isUnlocked:       isUnlocked,
        getInviteToken:   getInviteToken,
        show:             show,
        showWelcome:      showWelcome,
        renderDenied:     renderDenied,
        unlock:           unlock,
        showReferralPanel: showReferralPanel,
        showWaitlist:     showWaitlist,
        // Pure helpers exposed for testing
        validateEmail:    validateEmail,
        parseInviteToken: parseInviteToken,
        buildInviteUrl:   buildInviteUrl,
        isWelcomeSeen:    isWelcomeSeen,
        markWelcomeSeen:  markWelcomeSeen
    };
})();
