// auth.js — Auth Supabase (email/password) + RGPD
(function() {

    var _user = null;
    var _previousFocus = null;

    // ==================== INIT ====================

    function init() {
        var sb = StudFlow.sb && StudFlow.sb.getClient();
        if (!sb) return;

        sb.auth.onAuthStateChange(function(event, session) {
            var prev = _user;
            _user = session ? session.user : null;
            // Compute role on every auth change
            if (StudFlow.roles) StudFlow.roles.computeRole(_user);
            refreshUI();

            if (event === 'SIGNED_IN' && _user && !prev) {
                if (StudFlow.cloud) StudFlow.cloud.pull();
                // Admin redirect handled by roles.onRoleChange (async RPC)
            }
            if (event === 'SIGNED_OUT') {
                if (StudFlow.cloud) StudFlow.cloud.stop();
                if (StudFlow.roles) StudFlow.roles.computeRole(null);
            }
        });

        // Restore existing session
        sb.auth.getSession().then(function(r) {
            if (r.data && r.data.session) {
                _user = r.data.session.user;
                if (StudFlow.roles) StudFlow.roles.computeRole(_user);
                refreshUI();
                if (StudFlow.cloud) StudFlow.cloud.pull();
            }
        }).catch(function() {});
    }

    // ==================== PASSWORD VISIBILITY TOGGLE ====================
    document.addEventListener('click', function(e) {
        var btn = e.target.closest('#auth-eye-btn');
        if (!btn) return;
        var inp = document.getElementById('auth-password');
        if (!inp) return;
        var show = inp.type === 'password';
        inp.type = show ? 'text' : 'password';
        btn.textContent = show ? '\u{1F441}\u{200D}\u{1F5E8}' : '\u{1F441}';
        btn.setAttribute('aria-label', show ? 'Masquer le mot de passe' : 'Afficher le mot de passe');
    });

    // ==================== MODAL ACCESSIBILITY ====================
    // Escape to close + focus trap (applies to auth-modal and privacy-modal)
    document.addEventListener('keydown', function(e) {
        if (e.key !== 'Escape' && e.key !== 'Tab') return;
        var modals = ['auth-modal', 'privacy-modal'];
        var activeModal = null;
        for (var i = 0; i < modals.length; i++) {
            var m = document.getElementById(modals[i]);
            if (m && m.style.display !== 'none') { activeModal = m; break; }
        }
        if (!activeModal) return;

        // Escape to close
        if (e.key === 'Escape') {
            e.preventDefault();
            if (activeModal.id === 'auth-modal') {
                closeModal();
            } else {
                activeModal.style.display = 'none';
                if (_previousFocus && _previousFocus.focus) {
                    _previousFocus.focus();
                    _previousFocus = null;
                }
            }
            return;
        }

        // Tab focus trap
        var focusable = activeModal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (focusable.length === 0) return;
        var first = focusable[0];
        var last = focusable[focusable.length - 1];
        if (e.shiftKey) {
            if (document.activeElement === first) { e.preventDefault(); last.focus(); }
        } else {
            if (document.activeElement === last) { e.preventDefault(); first.focus(); }
        }
    });

    // Click overlay to close
    document.addEventListener('click', function(e) {
        if (e.target.id === 'auth-modal') closeModal();
        if (e.target.id === 'privacy-modal') e.target.style.display = 'none';
    });

    // ==================== BETA WHITELIST ====================
    // Only these emails can sign up / sign in during closed beta.
    // Set to null to disable the whitelist and allow everyone.
    var BETA_WHITELIST = [
        'bm.myreseau@gmail.com'
        // Add beta tester emails here, e.g.:
        // 'eleve1@example.com',
        // 'eleve2@example.com',
    ];

    function isBetaAllowed(email) {
        if (!BETA_WHITELIST) return true; // whitelist disabled
        if (!email) return false;
        return BETA_WHITELIST.indexOf(email.toLowerCase().trim()) !== -1;
    }

    // ==================== SIGN UP / IN / OUT ====================

    function signUp(email, password) {
        var sb = getSb(); if (!sb) return showMsg('Service indisponible.', 'error');
        if (!isBetaAllowed(email)) {
            showMsg('Inscription fermee. Ton email n\'est pas dans la liste beta.', 'error');
            return;
        }
        setLoading(true);
        sb.auth.signUp({ email: email, password: password }).then(function(r) {
            if (r.error) { setLoading(false); showMsg(tr(r.error.message), 'error'); return; }
            if (r.data.user && !r.data.session) {
                // Auto sign-in after signup (email confirmation disabled)
                sb.auth.signInWithPassword({ email: email, password: password }).then(function(r2) {
                    setLoading(false);
                    if (r2.error) { showMsg(tr(r2.error.message), 'error'); return; }
                    closeModal();
                    toast('Compte cree !');
                    if (window.StudFlow.analytics) window.StudFlow.analytics.track('signup');
                }).catch(function(e2) { setLoading(false); showMsg(tr(e2.message), 'error'); });
            } else {
                setLoading(false);
                closeModal();
                toast('Compte cree !');
                if (window.StudFlow.analytics) window.StudFlow.analytics.track('signup');
            }
        }).catch(function(e) { setLoading(false); showMsg(tr(e.message), 'error'); });
    }

    function signIn(email, password) {
        var sb = getSb(); if (!sb) return showMsg('Service indisponible.', 'error');
        if (!isBetaAllowed(email)) {
            showMsg('Connexion fermee. Ton email n\'est pas dans la liste beta.', 'error');
            return;
        }
        setLoading(true);
        sb.auth.signInWithPassword({ email: email, password: password }).then(function(r) {
            setLoading(false);
            if (r.error) { showMsg(tr(r.error.message), 'error'); return; }
            closeModal();
            toast('Connecte !');
            if (window.StudFlow.analytics) window.StudFlow.analytics.track('login');
        }).catch(function(e) { setLoading(false); showMsg(tr(e.message), 'error'); });
    }

    function signOut() {
        var sb = getSb(); if (!sb) return;
        if (window.StudFlow.analytics) window.StudFlow.analytics.track('logout');
        sb.auth.signOut().then(function() {
            _user = null;
            refreshUI();
            toast('Deconnecte.');
        });
    }

    function getUser() { return _user; }

    // ==================== ERROR TRANSLATION ====================

    function tr(msg) {
        if (!msg) return 'Erreur inconnue';
        if (msg.indexOf('Invalid login') !== -1) return 'Email ou mot de passe incorrect.';
        if (msg.indexOf('already registered') !== -1) return 'Email deja utilise.';
        if (msg.indexOf('least 6') !== -1 || (msg.indexOf('Password') !== -1 && msg.indexOf('6') !== -1)) return 'Mot de passe : 6 caracteres minimum.';
        if (msg.indexOf('rate limit') !== -1) return 'Trop de tentatives.';
        if (msg.indexOf('not confirmed') !== -1) return 'Confirme ton email d\'abord.';
        if (StudFlow.sb && StudFlow.sb.isNetworkError({ message: msg })) return 'Pas de connexion.';
        return msg;
    }

    // ==================== MODAL UI ====================

    function openModal(mode) {
        var m = document.getElementById('auth-modal');
        if (!m) return;
        _previousFocus = document.activeElement;
        m.style.display = 'flex';
        setMode(mode || 'login');
        hideMsg();
        // Focus first input
        var firstInput = m.querySelector('input:not([type=hidden])');
        if (firstInput) setTimeout(function() { firstInput.focus(); }, 50);
    }

    function closeModal() {
        var m = document.getElementById('auth-modal');
        if (m) m.style.display = 'none';
        hideMsg();
        // Restore focus to trigger element
        if (_previousFocus && _previousFocus.focus) {
            _previousFocus.focus();
            _previousFocus = null;
        }
    }

    function setMode(mode) {
        var t = document.getElementById('auth-modal-title');
        var b = document.getElementById('auth-submit-btn');
        var tt = document.getElementById('auth-toggle-text');
        var tl = document.getElementById('auth-toggle-link');
        var ageRow = document.getElementById('auth-age-row');
        if (mode === 'signup') {
            if (t) t.textContent = 'Creer un compte';
            if (b) { b.textContent = 'S\'inscrire'; b.dataset.mode = 'signup'; }
            if (tt) tt.textContent = 'Deja un compte ? ';
            if (tl) { tl.textContent = 'Se connecter'; tl.dataset.mode = 'login'; }
            if (ageRow) ageRow.style.display = 'flex';
        } else {
            if (t) t.textContent = 'Se connecter';
            if (b) { b.textContent = 'Connexion'; b.dataset.mode = 'login'; }
            if (tt) tt.textContent = 'Pas de compte ? ';
            if (tl) { tl.textContent = 'Creer un compte'; tl.dataset.mode = 'signup'; }
            if (ageRow) ageRow.style.display = 'none';
        }
    }

    function handleSubmit() {
        var e = (document.getElementById('auth-email') || {}).value;
        var p = (document.getElementById('auth-password') || {}).value;
        var mode = (document.getElementById('auth-submit-btn') || {}).dataset;
        if (!e || !p) { showMsg('Remplis tous les champs.', 'error'); return; }
        e = e.trim();
        // Age verification for signup
        if (mode && mode.mode === 'signup') {
            var ageCheck = document.getElementById('auth-age-check');
            if (ageCheck && !ageCheck.checked) {
                showMsg('Tu dois confirmer ton age pour creer un compte.', 'error');
                return;
            }
            signUp(e, p);
        } else {
            signIn(e, p);
        }
    }

    function handleToggle() {
        var l = document.getElementById('auth-toggle-link');
        if (l) setMode(l.dataset.mode);
        hideMsg();
    }

    function showMsg(msg, type) {
        var el = document.getElementById('auth-message');
        if (!el) return;
        el.textContent = msg;
        el.className = 'auth-message ' + (type || '');
        el.style.display = 'block';
    }
    function hideMsg() {
        var el = document.getElementById('auth-message');
        if (el) { el.textContent = ''; el.style.display = 'none'; }
    }
    function setLoading(v) {
        var b = document.getElementById('auth-submit-btn');
        if (!b) return;
        b.disabled = v;
        if (v) b.textContent = 'Chargement...';
        else b.textContent = b.dataset.mode === 'signup' ? 'S\'inscrire' : 'Connexion';
    }

    // ==================== SETTINGS / HEADER UI ====================

    function refreshUI() {
        // Header button
        var hb = document.getElementById('auth-header-btn');
        if (hb) {
            if (_user) {
                hb.textContent = (_user.email || '').split('@')[0] || 'Compte';
                hb.onclick = function() { StudFlow.app.showScreen('settings'); };
            } else {
                hb.textContent = 'Connexion';
                hb.onclick = function() { openModal('login'); };
            }
        }
        // Settings section
        var c = document.getElementById('auth-settings-content');
        if (!c) return;
        if (_user) {
            var syncInfo = '';
            if (StudFlow.cloud) {
                var s = StudFlow.cloud.getSyncStatus();
                var stateLabels = { ok: '✓ Synchronise', syncing: '⟳ Sync en cours...', error: '', waiting: '', idle: '' };
                var stateLabel = stateLabels[s.state] || '';
                syncInfo = s.lastSyncAt
                    ? '<p style="font-size:0.8rem;color:var(--text-muted);">Derniere sync : ' + new Date(s.lastSyncAt).toLocaleString('fr-FR')
                      + (stateLabel ? ' · ' + stateLabel : '') + '</p>'
                    : (stateLabel ? '<p style="font-size:0.8rem;color:var(--text-muted);">' + stateLabel + '</p>' : '');
            }
            c.innerHTML = ''
                + '<div class="auth-status-card connected">'
                + '<span class="auth-status-dot"></span>'
                + '<div class="auth-status-info">'
                + '<strong>Connecte</strong>'
                + '<p>' + escapeHtml(_user.email || '') + '</p>'
                + syncInfo
                + '</div></div>'
                + '<div class="auth-actions">'
                + '<button class="breathing-btn secondary" data-action="auth.exportData">Exporter mes donnees (JSON)</button>'
                + '<button class="breathing-btn secondary" data-action="auth.signOut">Se deconnecter</button>'
                + '<button class="breathing-btn secondary" style="color:#ef4444;border-color:#ef4444;" data-action="auth.deleteAccount">Supprimer mon compte</button>'
                + '</div>';
        } else {
            c.innerHTML = ''
                + '<div class="auth-status-card">'
                + '<span class="auth-status-dot offline"></span>'
                + '<div class="auth-status-info">'
                + '<strong>Non connecte</strong>'
                + '<p>Cree un compte pour synchroniser entre appareils.</p>'
                + '</div></div>'
                + '<button class="breathing-btn primary" data-action="auth.openModal" data-param="login" style="margin-top:8px;">Se connecter</button>';
        }
    }

    // ==================== RGPD ====================

    function exportData() {
        var all = {};
        for (var i = 0; i < localStorage.length; i++) {
            var k = localStorage.key(i);
            if (k && k.indexOf('studflow_') === 0) {
                try { all[k.replace('studflow_', '')] = JSON.parse(localStorage.getItem(k)); }
                catch(e) { all[k.replace('studflow_', '')] = localStorage.getItem(k); }
            }
        }
        var blob = new Blob([JSON.stringify(all, null, 2)], { type: 'application/json' });
        var a = document.createElement('a');
        a.href = window.URL.createObjectURL(blob);
        a.download = 'studflow-export-' + new Date().toISOString().slice(0, 10) + '.json';
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
        window.URL.revokeObjectURL(a.href);
        toast('Export telecharge.');
    }

    function deleteAccount() {
        if (!_user) return;
        if (!confirm('Supprimer ton compte ?\nToutes tes donnees (locales + serveur) seront effacees definitivement.')) return;
        if (!confirm('Derniere verification : cette action est IRREVERSIBLE. Continuer ?')) return;
        var sb = getSb();
        if (!sb) { toast('Pas de connexion.'); return; }
        sb.rpc('delete_own_account').then(function(r) {
            if (r.error) { toast('Erreur : ' + r.error.message); return; }
            _user = null;
            localStorage.clear();
            toast('Compte et donnees supprimes.');
            window.location.reload();
        }).catch(function(e) { toast('Erreur : ' + e.message); });
    }

    // Delete local data only (for non-connected users)
    function deleteLocalData() {
        if (!confirm('Effacer toutes tes donnees locales ? Cette action est irreversible.')) return;
        if (!confirm('Confirmer la suppression ?')) return;
        localStorage.clear();
        toast('Donnees locales supprimees.');
        window.location.reload();
    }

    // ==================== HELPERS ====================

    function escapeHtml(str) {
        if (!str) return '';
        return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    function getSb() { return StudFlow.sb ? StudFlow.sb.getClient() : null; }
    function toast(msg) {
        if (StudFlow.gamification && StudFlow.gamification.showToast) {
            StudFlow.gamification.showToast(msg, 'xp', '\u2139\uFE0F');
        }
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.auth = {
        init: init,
        getUser: getUser,
        signOut: signOut,
        openModal: openModal,
        closeModal: closeModal,
        handleSubmit: handleSubmit,
        handleToggle: handleToggle,
        refreshUI: refreshUI,
        exportData: exportData,
        deleteAccount: deleteAccount,
        deleteLocalData: deleteLocalData
    };
})();
