// adminDashboard.js — Tableau de bord admin complet
(function() {
    'use strict';

    function render() {
        var container = document.getElementById('admin-dashboard-content');
        if (!container) return;

        var html = '<h2 style="font-family:\'Fraunces\',serif;margin-bottom:0.5rem;">Administration</h2>';
        html += '<p style="color:var(--text-muted);margin-bottom:1.5rem;">Vue d\'ensemble de StudFlow</p>';

        // === QUICK ACTIONS ===
        html += '<div class="admin-dash-actions">';
        html += '<button class="admin-dash-action-btn" data-action="admin:switch-student">';
        html += '<span>👁️</span><span>Voir comme etudiant</span>';
        html += '</button>';
        html += '<button class="admin-dash-action-btn" data-action="screen:settings">';
        html += '<span>⚙️</span><span>Parametres</span>';
        html += '</button>';
        html += '<button class="admin-dash-action-btn" data-action="admin:content-audit">';
        html += '<span>🔍</span><span>Audit contenu</span>';
        html += '</button>';
        html += '</div>';

        // === STATS UTILISATEURS ===
        html += renderUserStats();

        // === CONTENU ===
        html += renderContentStats();

        // === ANALYTICS ===
        html += renderAnalyticsPanel();

        // === FEEDBACK ===
        html += renderFeedbackPanel();

        // === PREMIUM / ADMIN TOOLS ===
        html += renderAdminTools();

        container.innerHTML = html;

        // Load async data
        loadAnalyticsData();
        loadFeedbackData();
    }

    // ==================== USER STATS ====================
    function renderUserStats() {
        var html = '<div class="admin-dash-section">';
        html += '<h3>👥 Utilisateurs</h3>';
        html += '<div class="admin-dash-cards">';

        // Pull from Supabase if available
        html += '<div class="admin-dash-card" id="admin-stat-users">';
        html += '<div class="admin-dash-card-value">—</div>';
        html += '<div class="admin-dash-card-label">Inscrits</div>';
        html += '</div>';

        html += '<div class="admin-dash-card" id="admin-stat-active">';
        html += '<div class="admin-dash-card-value">—</div>';
        html += '<div class="admin-dash-card-label">Actifs (7j)</div>';
        html += '</div>';

        html += '<div class="admin-dash-card" id="admin-stat-signups">';
        html += '<div class="admin-dash-card-value">—</div>';
        html += '<div class="admin-dash-card-label">Nouveaux (7j)</div>';
        html += '</div>';

        html += '</div>'; // cards
        html += '</div>'; // section

        // Try loading user stats from analytics
        setTimeout(loadUserStats, 100);

        return html;
    }

    function loadUserStats() {
        if (!StudFlow.analytics || !StudFlow.analytics.getRecentEvents) return;
        StudFlow.analytics.getRecentEvents(500).then(function(events) {
            if (!events || !events.length) return;

            var now = Date.now();
            var week = 7 * 24 * 60 * 60 * 1000;
            var uniqueUsers = {};
            var activeUsers = {};
            var newSignups = 0;

            events.forEach(function(ev) {
                var uid = ev.user_id || ev.session_id || 'anon';
                uniqueUsers[uid] = true;
                var ts = new Date(ev.created_at || ev.timestamp).getTime();
                if (now - ts < week) {
                    activeUsers[uid] = true;
                    if (ev.event_name === 'signup') newSignups++;
                }
            });

            setCardValue('admin-stat-users', Object.keys(uniqueUsers).length);
            setCardValue('admin-stat-active', Object.keys(activeUsers).length);
            setCardValue('admin-stat-signups', newSignups);
        }).catch(function() {});
    }

    // ==================== CONTENT STATS ====================
    function renderContentStats() {
        var fcCount = 0, quizCount = 0, issues = 0;

        if (StudFlow.contentAudit && StudFlow.contentAudit.getStats) {
            var stats = StudFlow.contentAudit.getStats();
            fcCount = stats.totalFlashcards || 0;
            quizCount = stats.totalQuiz || 0;
            issues = stats.totalIssues || 0;
        } else {
            // Fallback: count from storage
            try {
                var fc = JSON.parse(localStorage.getItem('studflow_flashcards') || '[]');
                var q = JSON.parse(localStorage.getItem('studflow_customQuiz') || '[]');
                fcCount = fc.length;
                quizCount = q.length;
            } catch(e) {}
        }

        var html = '<div class="admin-dash-section">';
        html += '<h3>📦 Contenu</h3>';
        html += '<div class="admin-dash-cards">';

        html += '<div class="admin-dash-card">';
        html += '<div class="admin-dash-card-value">' + fcCount + '</div>';
        html += '<div class="admin-dash-card-label">Flashcards</div>';
        html += '</div>';

        html += '<div class="admin-dash-card">';
        html += '<div class="admin-dash-card-value">' + quizCount + '</div>';
        html += '<div class="admin-dash-card-label">Questions quiz</div>';
        html += '</div>';

        html += '<div class="admin-dash-card' + (issues > 0 ? ' admin-dash-card-warn' : '') + '">';
        html += '<div class="admin-dash-card-value">' + issues + '</div>';
        html += '<div class="admin-dash-card-label">Problemes</div>';
        html += '</div>';

        html += '</div>';

        html += '<button class="breathing-btn secondary" data-action="admin:content-audit" style="margin-top:0.8rem;width:100%;">Voir l\'audit complet</button>';
        html += '</div>';

        return html;
    }

    // ==================== ANALYTICS ====================
    function renderAnalyticsPanel() {
        var html = '<div class="admin-dash-section">';
        html += '<h3>📊 Analytics</h3>';
        html += '<div id="admin-dash-analytics" style="color:var(--text-muted);font-size:0.85rem;">Chargement...</div>';
        html += '<div style="display:flex;gap:8px;margin-top:0.8rem;">';
        html += '<button class="breathing-btn secondary" data-action="admin:flush" style="flex:1;font-size:0.85rem;">Flush queue</button>';
        html += '</div>';
        html += '</div>';
        return html;
    }

    function loadAnalyticsData() {
        var el = document.getElementById('admin-dash-analytics');
        if (!el) return;

        if (!StudFlow.analytics || !StudFlow.analytics.getRecentEvents) {
            el.innerHTML = '<p>Module analytics non disponible.</p>';
            return;
        }

        StudFlow.analytics.getRecentEvents(100).then(function(events) {
            if (!events || !events.length) {
                el.innerHTML = '<p>Aucun evenement enregistre.</p>';
                return;
            }

            // Group by event name
            var counts = {};
            var daily = {};
            events.forEach(function(ev) {
                var name = ev.event_name || 'unknown';
                counts[name] = (counts[name] || 0) + 1;
                var day = (ev.created_at || ev.timestamp || '').substring(0, 10);
                if (day) daily[day] = (daily[day] || 0) + 1;
            });

            // Top events
            var sorted = Object.keys(counts).sort(function(a, b) { return counts[b] - counts[a]; });
            var html = '<div style="margin-bottom:1rem;">';
            html += '<strong style="color:var(--text);font-size:0.9rem;">' + events.length + ' evenements recents</strong>';
            html += '</div>';

            // Daily chart (simple bars)
            var days = Object.keys(daily).sort().slice(-7);
            if (days.length > 0) {
                var maxDay = Math.max.apply(null, days.map(function(d) { return daily[d]; }));
                html += '<div class="admin-dash-chart">';
                days.forEach(function(day) {
                    var pct = maxDay > 0 ? Math.round((daily[day] / maxDay) * 100) : 0;
                    var label = day.substring(5); // MM-DD
                    html += '<div class="admin-dash-chart-bar">';
                    html += '<div class="admin-dash-chart-fill" style="height:' + pct + '%"></div>';
                    html += '<span class="admin-dash-chart-label">' + label + '</span>';
                    html += '<span class="admin-dash-chart-count">' + daily[day] + '</span>';
                    html += '</div>';
                });
                html += '</div>';
            }

            // Top events list
            html += '<div style="margin-top:1rem;">';
            html += '<strong style="font-size:0.85rem;color:var(--text);">Top evenements</strong>';
            html += '<div class="admin-dash-event-list">';
            sorted.slice(0, 10).forEach(function(name) {
                html += '<div class="admin-dash-event-row">';
                html += '<span>' + name + '</span>';
                html += '<span class="admin-dash-event-count">' + counts[name] + '</span>';
                html += '</div>';
            });
            html += '</div></div>';

            el.innerHTML = html;
        }).catch(function() {
            el.innerHTML = '<p>Erreur chargement analytics.</p>';
        });
    }

    // ==================== FEEDBACK ====================
    function renderFeedbackPanel() {
        var html = '<div class="admin-dash-section">';
        html += '<h3>💬 Feedback</h3>';
        html += '<div id="admin-dash-feedback" style="color:var(--text-muted);font-size:0.85rem;">Chargement...</div>';
        html += '</div>';
        return html;
    }

    function loadFeedbackData() {
        var el = document.getElementById('admin-dash-feedback');
        if (!el) return;

        if (!StudFlow.feedback || !StudFlow.feedback.getRecentFeedback) {
            el.innerHTML = '<p>Module feedback non disponible.</p>';
            return;
        }

        StudFlow.feedback.getRecentFeedback(20).then(function(items) {
            if (!items || !items.length) {
                el.innerHTML = '<p style="color:var(--text-dim);">Aucun feedback.</p>';
                return;
            }

            var html = '<div class="admin-dash-feedback-list">';
            items.slice(0, 10).forEach(function(fb) {
                var msg = fb.message || '';
                if (msg.length > 100) msg = msg.substring(0, 97) + '...';
                var typeIcon = fb.type === 'bug' ? '🐛' : fb.type === 'idee' ? '💡' : '📝';
                var d = fb.created_at ? new Date(fb.created_at).toLocaleDateString('fr-FR') : '';
                html += '<div class="admin-dash-feedback-item">';
                html += '<span class="admin-dash-feedback-icon">' + typeIcon + '</span>';
                html += '<div class="admin-dash-feedback-body">';
                html += '<span class="admin-dash-feedback-msg">' + StudFlow.app.escapeText(msg) + '</span>';
                html += '<span class="admin-dash-feedback-date">' + d + '</span>';
                html += '</div>';
                html += '</div>';
            });
            html += '</div>';

            el.innerHTML = html;
        }).catch(function() {
            el.innerHTML = '<p>Erreur chargement feedback.</p>';
        });
    }

    // ==================== ADMIN TOOLS ====================
    function renderAdminTools() {
        var html = '<div class="admin-dash-section">';
        html += '<h3>🛠️ Outils admin</h3>';
        html += '<div class="admin-dash-tools">';

        html += '<button class="breathing-btn secondary" data-action="admin:premium-7d" style="font-size:0.85rem;">';
        html += '⭐ Activer Premium 7j</button>';

        html += '<button class="breathing-btn secondary" data-action="admin:deactivate" style="font-size:0.85rem;">';
        html += '❌ Desactiver Premium</button>';

        html += '<button class="breathing-btn secondary" data-action="backup:export" style="font-size:0.85rem;">';
        html += '💾 Exporter donnees</button>';

        html += '<button class="breathing-btn secondary" data-action="errorlog:export" style="font-size:0.85rem;">';
        html += '📋 Exporter error log</button>';

        html += '</div>';

        // Status
        var sub = StudFlow.storage ? StudFlow.storage.getSubscription() : {};
        var plan = StudFlow.storage ? StudFlow.storage.getUserPlan() : 'free';
        var valid = StudFlow.storage ? StudFlow.storage.isSubscriptionValid() : false;
        var exp = sub.expiresAt ? new Date(sub.expiresAt).toLocaleString('fr-FR') : 'jamais';
        html += '<div style="margin-top:1rem;padding:12px;background:var(--bg-surface);border-radius:10px;font-size:0.8rem;color:var(--text-muted);">';
        html += 'Plan: <strong>' + plan + '</strong> · Valide: ' + (valid ? '✅' : '❌') + ' · Expire: ' + exp;
        html += '</div>';

        html += '</div>';
        return html;
    }

    // ==================== HELPERS ====================
    function setCardValue(id, value) {
        var el = document.getElementById(id);
        if (!el) return;
        var v = el.querySelector('.admin-dash-card-value');
        if (v) v.textContent = value;
    }

    window.StudFlow = window.StudFlow || {};
    window.StudFlow.adminDashboard = { render: render };
})();
