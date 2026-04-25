// adminUsage.js — Mini dashboard admin : usage beta StudFlow.
// Gate cote serveur (RPC `admin_usage_stats` verifie l'email dans admin_emails).
// Affichage texte + chiffres, zero refacto.
(function() {
    'use strict';

    function getEmail() {
        try { return localStorage.getItem('studflow_beta_email'); } catch (e) { return null; }
    }
    function getClient() {
        return (window.StudFlow && window.StudFlow.sb && window.StudFlow.sb.getClient)
            ? window.StudFlow.sb.getClient() : null;
    }

    function fetchStats() {
        var sb = getClient(); var email = getEmail();
        if (!sb || !email) return Promise.resolve({ ok: false, code: 'offline' });
        return sb.rpc('admin_usage_stats', { p_email: email }).then(function(r) {
            if (r.error) return { ok: false, code: 'network' };
            return r.data || { ok: false, code: 'unknown' };
        }).catch(function() { return { ok: false, code: 'network' }; });
    }

    function stat(label, value) {
        return '<div style="display:flex;justify-content:space-between;align-items:baseline;padding:12px 14px;background:var(--bg-glass);border:1px solid rgba(255,255,255,0.08);border-radius:12px;">'
          +   '<span style="color:var(--text-muted);font-size:0.88rem;">' + label + '</span>'
          +   '<span style="font-size:1.6rem;font-weight:700;font-variant-numeric:tabular-nums;">' + value + '</span>'
          + '</div>';
    }

    function render() {
        var slot = document.getElementById('adminusage-content');
        if (!slot) return;

        slot.innerHTML = ''
          + '<button class="back-btn" data-action="screen:dashboard">&larr; Retour</button>'
          + '<div style="max-width:560px;margin:0 auto;padding:1rem 1.25rem;">'
          +   '<h1 style="font-family:\'Fraunces\',serif;margin:0 0 0.25rem;">📊 Usage beta</h1>'
          +   '<p style="color:var(--text-muted);margin:0 0 1.25rem;font-size:0.88rem;">Chargement...</p>'
          +   '<div id="adminusage-list"></div>'
          + '</div>';

        fetchStats().then(function(s) {
            var sub = slot.querySelector('p');
            var list = document.getElementById('adminusage-list');
            if (!s || !s.ok) {
                if (sub) sub.textContent = '';
                if (list) list.innerHTML = '<div style="padding:1.5rem;text-align:center;color:var(--text-muted);border:1px dashed rgba(255,255,255,0.12);border-radius:12px;">Acces refuse.</div>';
                return;
            }
            if (sub) sub.textContent = 'Aujourd\'hui (Europe/Paris). Actifs = 24h glissantes.';
            list.innerHTML = ''
              + '<div style="display:flex;flex-direction:column;gap:8px;">'
              +   stat('Utilisateurs actifs (24h)',  s.active_24h)
              +   stat('Logins aujourd\'hui',        s.logins_today)
              +   stat('Sessions terminees',         s.sessions_today)
              +   stat('Cartes revisees',            s.cards_today)
              + '</div>'
              + '<p style="margin-top:1rem;color:var(--text-muted);font-size:0.78rem;text-align:center;">Actualise au prochain clic.</p>';
        });
    }

    window.StudFlow = window.StudFlow || {};
    window.StudFlow.adminUsage = { render: render, fetchStats: fetchStats };
})();
