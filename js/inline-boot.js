// inline-boot.js — Extracted from index.html inline <script> blocks
// Contains: Stripe return handling, Groq key mgmt, RGPD, admin mode,
//           showScreen overrides, settings init, DOMContentLoaded boot, event delegation
(function() {
    'use strict';

    // ==================== EVENT DELEGATION ====================
    // Replaces all inline onclick handlers with data-action attributes
    var ACTION_MAP = {
        'screen:dashboard':     function() { StudFlow.app.showScreen('dashboard'); },
        'screen:flashcard':     function() { StudFlow.flashcards.start(); },
        'screen:quiz':          function() { StudFlow.quiz.start(); },
        'pdf-result:flashcards': function() { StudFlow.flashcards.start('imported'); },
        'pdf-result:quiz':      function() { if (StudFlow.quiz) StudFlow.quiz.launchQuiz('imported'); },
        'screen:coach':         function() { StudFlow.coach.show(); },
        'screen:stress':        function() { StudFlow.stress.show(); },
        'screen:focus':         function() { StudFlow.focus.show(); },
        'screen:bacfrancais':   function() { StudFlow.bacfrancais.show(); },
        'screen:upload':        function() { StudFlow.app.showScreen('upload'); },
        'screen:settings':      function() { StudFlow.app.showScreen('settings'); },
        'screen:premium':       function() { StudFlow.app.showScreen('premium'); },
        'screen:planbac':       function() { StudFlow.planbac.show(); },
        'screen:urgence':       function() { StudFlow.urgence.show(); },
        'screen:confiance':     function() { StudFlow.confiance.show(); },
        'screen:generators':    function() { StudFlow.app.showScreen('generators'); },
        'screen:admin':         function() { StudFlow.app.showScreen('admin'); },
        'admin:switch-student': function() { StudFlow.roles.toggleStudentPreview(); StudFlow.app.showScreen('dashboard'); },
        'screen:subject-picker': function() { if (StudFlow.subjectPicker) StudFlow.subjectPicker.show(); },
        'screen:matieres':      function() { if (StudFlow.subjects) StudFlow.subjects.showHub(); },
        'screen:annales':       function() { if (StudFlow.annales) StudFlow.annales.show(); },
        'screen:challenges':    function() { if (StudFlow.challenges) StudFlow.challenges.show(); },
        'screen:aide':          function() { if (StudFlow.aide) StudFlow.aide.show(); },
        'screen:stories':       function() { if (StudFlow.storiesMode) StudFlow.storiesMode.show(); },
        'screen:daily-session': function() { if (StudFlow.dailySession) StudFlow.dailySession.show(); },
        'screen:ds-demain': function() { if (StudFlow.dsDemain) StudFlow.dsDemain.show(); },
        'screen:chrono': function() { if (StudFlow.chronoMode) StudFlow.chronoMode.show(); },
        'screen:weekly-report': function() { if (StudFlow.weeklyReport) StudFlow.weeklyReport.show(); },
        'screen:errors':        function() { if (StudFlow.errorNotebook) StudFlow.errorNotebook.show(); },
        'screen:badges':        function() { if (StudFlow.badges) StudFlow.badges.show(); },
        'screen:exam':          function() { if (StudFlow.examMode) StudFlow.examMode.show(); },
        'screen:stats':         function() { if (StudFlow.stats) StudFlow.stats.show(); },
        'screen:missions':      function() { if (StudFlow.missions) StudFlow.missions.show(); },
        'screen:timeline':      function() { if (StudFlow.timeline) StudFlow.timeline.show(); },
        'toggle-more-menu':     function() { StudFlow.app.toggleMoreMenu(); },
        'auth:login':           function() { StudFlow.auth.openModal('login'); },
        'auth:submit':          function() { StudFlow.auth.handleSubmit(); },
        'auth:close':           function() { StudFlow.auth.closeModal(); },
        'auth:toggle':          function() { StudFlow.auth.handleToggle(); },
        'auth:export':          function() { StudFlow.auth.exportData(); },
        'auth:delete-local':    function() { StudFlow.auth.deleteLocalData(); },
        'fc:flip':              function() { StudFlow.flashcards.flip(); },
        'fc:know':              function() { StudFlow.flashcards.answer(true); },
        'fc:dont-know':         function() { StudFlow.flashcards.answer(false); },
        'fc:easy':              function() { StudFlow.flashcards.answer('easy'); },
        'fc:simplify':          function() { StudFlow.flashcards.simplify(); },
        'settings:calmToggle':  function(t) { if (StudFlow.calmMode) { StudFlow.calmMode.setManual(t.checked); } },
        'fc:shuffle':           function() { StudFlow.flashcards.shuffleDeck(); },
        'fc:create-form':       function() { StudFlow.flashcards.showCreateForm(); },
        'fc:create':            function() { StudFlow.flashcards.createCard(); },
        'flashcards.startMode': function(p) { StudFlow.flashcards.startMode(p); },
        'flashcards.showModePicker': function(p) { StudFlow.flashcards.showModePicker(p || 'all'); },
        'quiz:simplify':        function() { StudFlow.quiz.simplify(); },
        'frenchOral.show':      function() { if (StudFlow.frenchOral) StudFlow.frenchOral.show(); },
        'frenchOral.start':     function(t) { if (StudFlow.frenchOral) StudFlow.frenchOral.start(t.getAttribute('data-param')); },
        'screen:french-oral':   function() { if (StudFlow.frenchOral) StudFlow.frenchOral.show(); },
        'quiz:create-form':     function() { StudFlow.quiz.showCreateForm(); },
        'quiz:create':          function() { StudFlow.quiz.createQuestion(); },
        'quiz:launch-deck':     function(target) { var deck = target.getAttribute('data-param') || 'all'; StudFlow.quiz.launchQuiz(deck); },
        'results:share':        function() {
            var score = parseInt(document.getElementById('results-correct').textContent) || 0;
            var wrong = parseInt(document.getElementById('results-wrong').textContent) || 0;
            var total = score + wrong;
            var gStats = StudFlow.gamification ? StudFlow.gamification.getStats() : {};
            var combo = StudFlow.combo ? StudFlow.combo.getMax() : 0;
            var data = { type: 'session', score: score, total: total, streak: gStats.streak || 0, xp: gStats.xp || 0, combo: combo };
            if (StudFlow.resultCard) { StudFlow.resultCard.show(data); }
            else {
                var text = StudFlow.resultCard ? StudFlow.resultCard.getShareText(data) : '';
                if (!text) {
                    var pct = total > 0 ? Math.round((score / total) * 100) : 0;
                    text = pct + '% sur ma session StudFlow ! ' + score + '/' + total + ' correct';
                    if (data.streak > 0) text += ' | Streak : ' + data.streak + 'j';
                    if (combo > 0) text += ' | Combo x' + combo;
                    text += '\nstudflow.app';
                }
                if (navigator.share) { navigator.share({ title: 'Mon score StudFlow', text: text, url: window.location.origin }); }
                else if (navigator.clipboard) { navigator.clipboard.writeText(text).then(function() { if (StudFlow.gamification) StudFlow.gamification.showToast('Score copie !', 'xp', '\uD83D\uDCCB'); }); }
            }
        },
        'breathing:toggle':     function() { StudFlow.breathing.toggle(); },
        'breathing:stop':       function() { StudFlow.breathing.stop(); StudFlow.app.showScreen('dashboard'); },
        'diagnostic:start':     function() { StudFlow.diagnostic.start(); },
        'feedback:show':        function() { StudFlow.feedback.show(); },
        'feedback:bug':         function() { StudFlow.feedback.show(); setTimeout(function(){StudFlow.feedback.showQuickForm('bug');},100); },
        'feedback:idea':        function() { StudFlow.feedback.show(); setTimeout(function(){StudFlow.feedback.showQuickForm('idee');},100); },
        'backup:export':        function() { StudFlow.backup.exportData(); },
        'backup:import':        function() { StudFlow.backup.importData(); },
        'errorlog:export':      function() { StudFlow.errorLog.exportLog(); },
        'privacy-policy':       function() { window.showPrivacyPolicy(); },
        'groq:save':            function() { window.saveGroqKey(); },
        'admin:analytics':      function() { window.renderAdminAnalytics(); },
        'admin:feedback':       function() { window.renderAdminFeedback(); },
        'admin:flush':          function() { window.adminFlushAll(); },
        'admin:refresh':        function() { if (typeof refreshAdminStatus === 'function') refreshAdminStatus(); },
        'admin:content-audit':  function() {
            var c = document.getElementById('admin-dashboard-content');
            if (c) c.style.display = 'none';
            var ac = document.getElementById('admin-content');
            if (ac) ac.style.display = 'block';
            StudFlow.app.showScreen('admin');
            if (StudFlow.contentAudit) StudFlow.contentAudit.renderAdminPanel();
        },
        'admin:back-dashboard': function() {
            var ac = document.getElementById('admin-content');
            if (ac) ac.style.display = 'none';
            var c = document.getElementById('admin-dashboard-content');
            if (c) c.style.display = 'block';
            if (StudFlow.adminDashboard) StudFlow.adminDashboard.render();
        },
        'report-error':         function() {
            StudFlow.errorLog.logReport(
                StudFlow.app.getState().currentScreen === 'results' ? 'quiz/flashcard' : 'unknown',
                document.getElementById('results-score') ? document.getElementById('results-score').textContent : ''
            );
            if (StudFlow.gamification) StudFlow.gamification.showToast('Merci ! Ton signalement a ete enregistre.', 'xp');
        },
        'analytics:consent':    function() {
            var el = document.getElementById('analytics-consent-toggle');
            if (el && StudFlow.analytics) StudFlow.analytics.setConsent(el.checked);
        },
        'sr:start':             function() { StudFlow.app.showScreen('dashboard'); if (StudFlow.spacedRepetition) StudFlow.spacedRepetition.startSession(); },
        'sr:start-safe':        function() { if (StudFlow.spacedRepetition) StudFlow.spacedRepetition.startSession(); },
        'logo:home':            function() { StudFlow.app.showScreen('dashboard'); },
        'feedback:bug-then-show': function() { StudFlow.feedback.showQuickForm('bug'); StudFlow.feedback.show(); },
        'feedback:show':        function() { StudFlow.feedback.show(); },
        'landing:scroll':       function(target) { var id = target.getAttribute('data-param'); var el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: 'smooth' }); },
        'landing:toggle-faq':   function(target) { var idx = Number(target.getAttribute('data-param')); if (window.toggleFaq) window.toggleFaq(idx); },
        'landing:privacy':      function() { if (window.showPrivacyPolicy) window.showPrivacyPolicy(); },
        'landing:legal':        function() { if (window.showLegalNotice) window.showLegalNotice(); },
        'landing:terms':        function() { if (window.showTerms) window.showTerms(); },
        'theme:toggle':         function() { if (StudFlow.theme) StudFlow.theme.toggle(); },
        'noop':                 function() {},
        'select-input':         function(target) { if (target.select) target.select(); }
    };

    function handleDelegatedEvent(e) {
        var target = e.target.closest('[data-action]');
        if (!target) return;
        var action = target.getAttribute('data-action');
        if (!action) return;

        // Static map first (complex / multi-step actions)
        if (ACTION_MAP[action]) {
            e.preventDefault();
            ACTION_MAP[action](target);
            return;
        }

        // Generic resolver: "module.method" → StudFlow[module][method](param, param2)
        var parts = action.split('.');
        if (parts.length >= 2) {
            var obj = window.StudFlow;
            for (var i = 0; i < parts.length - 1; i++) {
                obj = obj && obj[parts[i]];
            }
            var method = parts[parts.length - 1];
            if (obj && typeof obj[method] === 'function') {
                e.preventDefault();
                var p = target.getAttribute('data-param');
                var p2 = target.getAttribute('data-param2');
                // Auto-convert numeric params
                if (p !== null && p !== '' && !isNaN(p)) p = Number(p);
                if (p2 !== null && p2 !== '' && !isNaN(p2)) p2 = Number(p2);
                if (p2 !== null) obj[method](p, p2);
                else if (p !== null) obj[method](p);
                else obj[method]();
            }
        }
    }

    document.addEventListener('click', handleDelegatedEvent);
    document.addEventListener('change', handleDelegatedEvent);

    // Keyboard accessibility: Enter/Space triggers data-action on role="button" elements
    document.addEventListener('keydown', function(e) {
        if (e.key !== 'Enter' && e.key !== ' ') return;
        var el = e.target;
        if (el && el.getAttribute('role') === 'button' && el.hasAttribute('data-action')) {
            e.preventDefault();
            el.click();
        }
    });

    // Stripe return handling removed — Premium disabled for beta
    // Clean up stale Stripe URL params if present
    (function() {
        var params = new URLSearchParams(window.location.search);
        if (params.get('stripe_success') || params.get('stripe_cancel')) {
            history.replaceState({}, '', window.location.pathname + window.location.hash);
        }
    })();

    // ==================== GROQ API KEY MANAGEMENT ====================
    window.saveGroqKey = function() {
        // AI disabled for beta — block key saving
        if (window.StudFlow.features && !window.StudFlow.features.AI_ENABLED) {
            var status = document.getElementById('groq-status');
            if (status) {
                status.className = 'api-status';
                status.textContent = 'Configure ta cle API Groq pour activer l\'IA.';
            }
            return;
        }
        var key = document.getElementById('groq-api-input');
        var status = document.getElementById('groq-status');
        if (!key || !status) return;
        var val = key.value.trim();
        if (val) {
            StudFlow.storage.saveData('groq_api_key', val);
            status.className = 'api-status success';
            status.textContent = 'Cle sauvegardee ! Le Coach IA et l\'import PDF l\'utiliseront.';
        } else {
            StudFlow.storage.removeData('groq_api_key');
            status.className = 'api-status success';
            status.textContent = 'Cle supprimee. Mode 100% local actif.';
        }
    };

    // ==================== RGPD: PRIVACY POLICY MODAL ====================
    window.showPrivacyPolicy = function() {
        var existing = document.getElementById('privacy-modal');
        if (existing) { existing.style.display = 'flex'; return; }
        var modal = document.createElement('div');
        modal.id = 'privacy-modal';
        modal.className = 'auth-modal-overlay';
        modal.style.display = 'flex';
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-modal', 'true');
        modal.setAttribute('aria-label', 'Politique de confidentialite');
        modal.innerHTML = '<div class="auth-modal" style="max-width:600px;max-height:80vh;overflow-y:auto;">'
            + '<button class="auth-modal-close privacy-close-btn" aria-label="Fermer">&times;</button>'
            + '<h2 style="font-family:Fraunces,serif;margin-bottom:1rem;">Politique de confidentialite</h2>'
            + '<div style="font-size:0.85rem;color:var(--text-muted);line-height:1.7;">'
            + '<p><strong>Editeur :</strong> [NOM / DENOMINATION], France<br>'
            + '<strong>Contact DPO :</strong> [EMAIL]</p>'
            + '<h3 style="color:var(--text);margin:1rem 0 0.5rem;">Donnees collectees</h3>'
            + '<p><strong>Compte :</strong> email, mot de passe (hash), methode de connexion.</p>'
            + '<p><strong>Progression :</strong> scores quiz/flashcards, profil de revision, sessions focus, XP, badges, historique coach.</p>'
            + '<p><strong>Paiement :</strong> gere exclusivement par Stripe. Nous ne stockons jamais ton numero de carte.</p>'
            + '<h3 style="color:var(--text);margin:1rem 0 0.5rem;">Pourquoi ?</h3>'
            + '<p>Pour te fournir le service (quiz, fiches, coach, suivi de progression) et gerer ton abonnement.</p>'
            + '<h3 style="color:var(--text);margin:1rem 0 0.5rem;">Sous-traitants</h3>'
            + '<p><strong>Supabase</strong> — Auth + stockage (UE, Francfort). DPA signe.</p>'
            + '<p><strong>Stripe</strong> — Paiements (UE + US). PCI DSS Level 1.</p>'
            + '<p><strong>Groq</strong> — Coach IA, optionnel (US). Pas de retention des messages.</p>'
            + '<p>Nous ne vendons <strong>jamais</strong> tes donnees. Aucun profilage publicitaire.</p>'
            + '<h3 style="color:var(--text);margin:1rem 0 0.5rem;">Conservation</h3>'
            + '<p>Donnees compte : tant que le compte est actif.<br>'
            + 'Historique coach : 90 jours glissants.<br>'
            + 'Facturation : 3 ans apres fin d\'abonnement (obligation legale).<br>'
            + 'Apres suppression : toutes les donnees effacees sous 30 jours.</p>'
            + '<h3 style="color:var(--text);margin:1rem 0 0.5rem;">Tes droits (RGPD)</h3>'
            + '<p>Acces, rectification, suppression, portabilite, opposition, limitation.<br>'
            + 'Exerce tes droits dans Parametres ou par email au DPO.<br>'
            + 'Autorite de controle : <a href="https://www.cnil.fr" target="_blank" rel="noopener" style="color:var(--accent-light);">CNIL</a></p>'
            + '<h3 style="color:var(--text);margin:1rem 0 0.5rem;">Cookies</h3>'
            + '<p>Cookie de session uniquement (authentification). Aucun cookie publicitaire, aucun cookie tiers.</p>'
            + '<h3 style="color:var(--text);margin:1rem 0 0.5rem;">Donnees locales (sur ton appareil)</h3>'
            + '<p>StudFlow stocke tes donnees de revision <strong>localement</strong> sur ton appareil :</p>'
            + '<ul style="margin:0.5rem 0 0.5rem 1.5rem;"><li>Profil de revision (resultat du diagnostic)</li><li>Scores et progression (quiz, flashcards, XP)</li><li>Sessions focus et serie de jours</li><li>Contenu genere (fiches, questions)</li><li>Historique coach (90 jours max)</li></ul>'
            + '<p>Ces donnees restent sur ton appareil sauf si tu actives la synchronisation (compte Supabase).</p>'
            + '<h3 style="color:var(--text);margin:1rem 0 0.5rem;">Analytics</h3>'
            + '<p>Si tu es connecte, des donnees d\'usage anonymisees (erreurs, evenements) sont envoyees pour ameliorer l\'app. Tu peux desactiver cela dans les parametres.</p>'
            + '<h3 style="color:var(--text);margin:1rem 0 0.5rem;">Mineurs</h3>'
            + '<p>StudFlow s\'adresse aux lyceens. A partir de 15 ans tu peux consentir seul (loi Informatique et Libertes). Avant 15 ans, accord parental requis.</p>'
            + '</div></div>';
        document.body.appendChild(modal);
        modal.addEventListener('click', function(e) {
            if (e.target === modal) modal.style.display = 'none';
        });
    };

    // ==================== RGPD: CLEANUP EXPIRED DATA ====================
    function cleanupExpiredData() {
        var now = Date.now();
        var chatData = StudFlow.storage.loadData('coachChat', { messages: [] });
        var ninetyDays = 90 * 24 * 60 * 60 * 1000;
        if (chatData.messages && chatData.messages.length > 0) {
            var before = chatData.messages.length;
            chatData.messages = chatData.messages.filter(function(msg) {
                return (now - (msg.timestamp || 0)) < ninetyDays;
            });
            if (chatData.messages.length < before) {
                StudFlow.storage.saveData('coachChat', chatData);
            }
        }
        var tracking = StudFlow.storage.loadData('capsuleTracking', {});
        var oneYear = 365 * 24 * 60 * 60 * 1000;
        var changed = false;
        Object.keys(tracking).forEach(function(id) {
            if (tracking[id].lastViewed && (now - tracking[id].lastViewed) > oneYear) {
                delete tracking[id];
                changed = true;
            }
        });
        if (changed) StudFlow.storage.saveData('capsuleTracking', tracking);
    }

    // Stripe config removed — Premium disabled for beta
    function initSettingsStripe() {
        refreshAdminPanel();
    }

    // ==================== ADMIN MODE ====================
    function isAdminMode() {
        return StudFlow.roles && StudFlow.roles.isAdmin();
    }

    window.toggleAdminMode = function() {
        if (isAdminMode()) {
            // Already admin — go to admin dashboard
            StudFlow.app.showScreen('admin');
        } else {
            // Not admin — open login modal (uses standard Supabase auth)
            if (StudFlow.auth) StudFlow.auth.openModal('login');
            if (StudFlow.gamification && StudFlow.gamification.showToast) {
                StudFlow.gamification.showToast('Connecte-toi avec un compte admin.', 'xp', '');
            }
        }
    };

    function refreshAdminPanel() {
        // Visibility is now handled by CSS .admin-only + body.is-admin
        updateAdminStatus();
        if (isAdminMode()) refreshAdminStatus();
    }

    function updateAdminStatus() {
        var el = document.getElementById('admin-status');
        if (!el) return;
        el.textContent = 'Beta privee — Premium desactive';
    }

    // Stubs for compat (admin dashboard may reference these)
    window.adminActivatePremium7d = function() {};
    window.adminDeactivatePremium = function() {};
    window.adminExpirePremium = function() {};
    window.adminResetPremiumData = function() {};

    // ==================== ADMIN: ANALYTICS + FEEDBACK VIEWS ====================
    function refreshAdminStatus() {
        var el = document.getElementById('admin-queue-status');
        if (!el) return;
        var aStatus = StudFlow.analytics && StudFlow.analytics.getFlushStatus ? StudFlow.analytics.getFlushStatus() : null;
        var fStatus = StudFlow.feedback && StudFlow.feedback.getFlushStatus ? StudFlow.feedback.getFlushStatus() : null;
        var lines = [];
        if (aStatus) {
            lines.push('<strong>Analytics queue:</strong> ' + aStatus.queueSize + ' en attente'
                + (aStatus.flushing ? ' (flush en cours...)' : '')
                + (aStatus.lastFlushTime ? ' · Dernier flush: ' + new Date(aStatus.lastFlushTime).toLocaleString('fr-FR') : ' · Jamais flush')
            );
            if (aStatus.lastError) {
                lines.push('<span style="color:#ef4444;">Derniere erreur analytics: ' + StudFlow.app.escapeText(aStatus.lastError.message) + ' (' + new Date(aStatus.lastError.time).toLocaleString('fr-FR') + ')</span>');
            }
        } else {
            lines.push('<strong>Analytics:</strong> module non disponible');
        }
        if (fStatus) {
            lines.push('<strong>Feedback queue:</strong> ' + fStatus.queueSize + ' en attente'
                + (fStatus.lastFlushTime ? ' · Dernier flush: ' + new Date(fStatus.lastFlushTime).toLocaleString('fr-FR') : ' · Jamais flush')
            );
            if (fStatus.lastError) {
                lines.push('<span style="color:#ef4444;">Derniere erreur feedback: ' + StudFlow.app.escapeText(fStatus.lastError.message) + ' (' + new Date(fStatus.lastError.time).toLocaleString('fr-FR') + ')</span>');
            }
        } else {
            lines.push('<strong>Feedback:</strong> module non disponible');
        }
        el.innerHTML = lines.join('<br>');
    }

    window.adminFlushAll = function() {
        if (StudFlow.analytics) StudFlow.analytics.flush();
        if (StudFlow.feedback) StudFlow.feedback.flushQueue();
        StudFlow.gamification.showToast('Flush lance', 'xp', '\u2191');
        setTimeout(refreshAdminStatus, 2000);
    };

    window.renderAdminAnalytics = function() {
        refreshAdminStatus();
        var view = document.getElementById('admin-data-view');
        if (!view) return;
        view.innerHTML = '<p style="color:var(--text-muted);font-size:0.85rem;">Chargement analytics (last 50)...</p>';
        if (!StudFlow.analytics || !StudFlow.analytics.getRecentEvents) {
            view.innerHTML = '<p style="color:var(--text-muted);">Module analytics non disponible.</p>';
            return;
        }
        StudFlow.analytics.getRecentEvents(50).then(function(events) {
            if (!events || events.length === 0) {
                view.innerHTML = '<p style="color:var(--text-muted);">Aucun event enregistre.</p>';
                return;
            }
            var html = '<p style="font-size:0.75rem;color:var(--text-dim);margin-bottom:6px;">' + events.length + ' events affiches</p>'
                + '<table style="width:100%;font-size:0.78rem;border-collapse:collapse;">'
                + '<tr style="border-bottom:1px solid rgba(255,255,255,0.1);"><th style="text-align:left;padding:4px;">Event</th><th style="text-align:left;padding:4px;">Metadata</th><th style="text-align:left;padding:4px;">Date</th></tr>';
            for (var i = 0; i < events.length; i++) {
                var ev = events[i];
                var meta = ev.metadata ? JSON.stringify(ev.metadata) : '{}';
                if (meta.length > 60) meta = meta.substring(0, 57) + '...';
                var d = ev.created_at ? new Date(ev.created_at).toLocaleString('fr-FR') : '';
                html += '<tr style="border-bottom:1px solid rgba(255,255,255,0.05);">'
                    + '<td style="padding:4px;color:var(--accent-light);">' + (ev.event_name || '') + '</td>'
                    + '<td style="padding:4px;color:var(--text-dim);word-break:break-all;">' + StudFlow.app.escapeText(meta) + '</td>'
                    + '<td style="padding:4px;color:var(--text-dim);white-space:nowrap;">' + d + '</td>'
                    + '</tr>';
            }
            html += '</table>';
            view.innerHTML = html;
        });
    };

    window.renderAdminFeedback = function() {
        refreshAdminStatus();
        var view = document.getElementById('admin-data-view');
        if (!view) return;
        view.innerHTML = '<p style="color:var(--text-muted);font-size:0.85rem;">Chargement feedback (last 50)...</p>';
        if (!StudFlow.feedback || !StudFlow.feedback.getRecentFeedback) {
            view.innerHTML = '<p style="color:var(--text-muted);">Module feedback non disponible.</p>';
            return;
        }
        StudFlow.feedback.getRecentFeedback(50).then(function(items) {
            if (!items || items.length === 0) {
                view.innerHTML = '<p style="color:var(--text-muted);">Aucun feedback enregistre.</p>';
                return;
            }
            var html = '<p style="font-size:0.75rem;color:var(--text-dim);margin-bottom:6px;">' + items.length + ' feedbacks affiches</p>'
                + '<table style="width:100%;font-size:0.78rem;border-collapse:collapse;">'
                + '<tr style="border-bottom:1px solid rgba(255,255,255,0.1);"><th style="text-align:left;padding:4px;">Type</th><th style="text-align:left;padding:4px;">Message</th><th style="text-align:left;padding:4px;">Date</th></tr>';
            for (var i = 0; i < items.length; i++) {
                var fb = items[i];
                var msg = fb.message || '';
                if (msg.length > 80) msg = msg.substring(0, 77) + '...';
                var d = fb.created_at ? new Date(fb.created_at).toLocaleString('fr-FR') : '';
                var typeColor = fb.type === 'bug' ? '#ef4444' : fb.type === 'idee' ? '#3b82f6' : 'var(--text-muted)';
                html += '<tr style="border-bottom:1px solid rgba(255,255,255,0.05);">'
                    + '<td style="padding:4px;color:' + typeColor + ';">' + (fb.type || 'general') + '</td>'
                    + '<td style="padding:4px;color:var(--text-muted);word-break:break-all;">' + StudFlow.app.escapeText(msg) + '</td>'
                    + '<td style="padding:4px;color:var(--text-dim);white-space:nowrap;">' + d + '</td>'
                    + '</tr>';
            }
            html += '</table>';
            view.innerHTML = html;
        });
    };

    // Ctrl+Shift+A toggle
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.shiftKey && e.key === 'A') {
            e.preventDefault();
            window.toggleAdminMode();
        }
    });

    // ==================== DOMCONTENTLOADED BOOT ====================
    document.addEventListener('DOMContentLoaded', function() {
        cleanupExpiredData();
        // Only populate Groq key field if AI is enabled
        if (StudFlow.features && StudFlow.features.AI_ENABLED) {
            var existingKey = StudFlow.storage.loadData('groq_api_key', '');
            if (existingKey) {
                var input = document.getElementById('groq-api-input');
                if (input) input.value = existingKey;
            }
        }
        if (StudFlow.gamification) StudFlow.gamification.init();
        if (StudFlow.premium && StudFlow.premium.checkSubscriptionStatus) StudFlow.premium.checkSubscriptionStatus();
        if (StudFlow.cloud) StudFlow.cloud.init();
        if (StudFlow.auth) StudFlow.auth.init();
        if (StudFlow.roles) StudFlow.roles.init();
        if (StudFlow.analytics) StudFlow.analytics.init();
        if (StudFlow.feedback && StudFlow.feedback.init) StudFlow.feedback.init();
        if (StudFlow.notifications && StudFlow.notifications.init) StudFlow.notifications.init();

        // Extend showScreen with module renders
        var origShowScreen = StudFlow.app.showScreen;
        StudFlow.app.showScreen = function(screenId) {
            origShowScreen(screenId);
            if (screenId === 'settings') {
                if (StudFlow.auth) StudFlow.auth.refreshUI();
                if (StudFlow.premium) StudFlow.premium.renderSettings();
                if (typeof initSettingsStripe === 'function') initSettingsStripe();
            }
            if (screenId === 'coach') {
                if (StudFlow.coachChat) { StudFlow.coachChat.render(); } else { StudFlow.coach.render(); }
            }
            if (screenId === 'stress') StudFlow.stress.renderMain();
            if (screenId === 'focus') StudFlow.focus.renderSetup();
            if (screenId === 'bacfrancais') StudFlow.bacfrancais.renderMain();
            if (screenId === 'planbac') StudFlow.planbac.renderMain();
            if (screenId === 'urgence') StudFlow.urgence.renderMain();
            if (screenId === 'confiance') StudFlow.confiance.renderMain();
            if (screenId === 'conseils') StudFlow.conseils.renderMain();
            if (screenId === 'generators') StudFlow.generatorHub.renderMain();
            if (screenId === 'admin') {
                // Reset view: show dashboard, hide audit
                var adc = document.getElementById('admin-dashboard-content');
                var ac = document.getElementById('admin-content');
                if (adc) adc.style.display = 'block';
                if (ac) ac.style.display = 'none';
                if (StudFlow.adminDashboard) StudFlow.adminDashboard.render();
            }
            if (screenId === 'stats') {
                if (StudFlow.premium && !StudFlow.premium.hasAccess('stats_avancees')) {
                    StudFlow.premium.showPaywall('stats_avancees');
                    return;
                }
                if (StudFlow.stats) StudFlow.stats.renderMain();
            }
            if (screenId === 'premium') { if (StudFlow.premium) StudFlow.premium.renderPremiumScreen(); }
            if (screenId === 'home') { if (StudFlow.home) StudFlow.home.render(); }
            if (screenId === 'missions') { if (StudFlow.missions) StudFlow.missions.renderMain(); }
            if (screenId === 'matieres') { if (StudFlow.subjects) StudFlow.subjects.renderHub(); }
            if (screenId === 'timeline') { if (StudFlow.timeline) StudFlow.timeline.renderMain(); }
            if (screenId === 'feedback') { if (StudFlow.feedback) StudFlow.feedback.render(); }
            if (screenId === 'annales') { if (StudFlow.annales) StudFlow.annales.show(); }
            if (screenId === 'dashboard') {
                StudFlow.app.updateDashboard();
                if (StudFlow.gamification) StudFlow.gamification.updateXPDisplay();
                if (StudFlow.dashboard && StudFlow.dashboard.showTourIfNeeded) StudFlow.dashboard.showTourIfNeeded();
            }
        };

        // Privacy modal close via delegation
        document.addEventListener('click', function(e) {
            if (e.target.classList && e.target.classList.contains('privacy-close-btn')) {
                var pm = document.getElementById('privacy-modal');
                if (pm) pm.style.display = 'none';
            }
        });
    });
})();
