// weeklyReport.js — Weekly report: "Ta semaine en 30 secondes"
(function() {
    'use strict';

    var SNAPSHOT_KEY = 'studflow_weekly_snapshots';
    var LAST_SHOWN_KEY = 'studflow_weekly_report_shown';

    // ==================== WEEK HELPERS ====================
    function getMondayKey(date) {
        var d = new Date(date);
        var day = d.getDay(); // 0=Sun
        d.setDate(d.getDate() - ((day + 6) % 7));
        return d.toISOString().slice(0, 10);
    }

    function currentWeekStart() {
        return getMondayKey(new Date());
    }

    // ==================== DATA GATHERING ====================
    function gatherWeekData() {
        var data = {
            sessionCount: 0,
            xp: 0,
            streak: 0,
            level: 1,
            totalReviews: 0,
            totalCorrect: 0,
            retention: 0,
            mastery: 0
        };

        // 1. Sessions count from dailySession storage
        try {
            var sessionData = window.StudFlow.storage.loadData('studflow_daily_session', {});
            if (sessionData.sessions) {
                var weekStart = currentWeekStart();
                var count = 0;
                for (var i = 0; i < sessionData.sessions.length; i++) {
                    if (sessionData.sessions[i].date >= weekStart) {
                        count++;
                    }
                }
                data.sessionCount = count;
            }
        } catch(e) {}

        // 2. XP, streak, level from gamification
        if (window.StudFlow.gamification) {
            try {
                var stats = window.StudFlow.gamification.getStats();
                data.xp = stats.xp || 0;
                data.streak = stats.streak || 0;
                data.level = stats.level || 1;
            } catch(e) {}
        }

        // 3. Average mastery from adaptive
        if (window.StudFlow.adaptive) {
            try {
                var topics = window.StudFlow.adaptive.getAllTopics();
                if (topics.length > 0) {
                    var sum = 0;
                    for (var t = 0; t < topics.length; t++) {
                        sum += topics[t].topic.mastery;
                    }
                    data.mastery = Math.round((sum / topics.length) * 100);
                }
            } catch(e) {}
        }

        // 4. Cards reviewed from SR
        if (window.StudFlow.spacedRepetition) {
            try {
                var srStats = window.StudFlow.spacedRepetition.getSessionStats();
                data.totalReviews = srStats.totalReviews || 0;
                data.totalCorrect = srStats.totalCorrect || 0;
                data.retention = window.StudFlow.spacedRepetition.getRetentionRate() || 0;
            } catch(e) {}
        }

        return data;
    }

    // ==================== SNAPSHOTS ====================
    function loadSnapshots() {
        return window.StudFlow.storage.loadData(SNAPSHOT_KEY, { weeks: [] });
    }

    function saveSnapshots(snapshots) {
        window.StudFlow.storage.saveData(SNAPSHOT_KEY, snapshots);
    }

    function takeSnapshotIfNeeded() {
        var weekStart = currentWeekStart();
        var snapshots = loadSnapshots();

        // Check if we already have a snapshot for this week
        for (var i = 0; i < snapshots.weeks.length; i++) {
            if (snapshots.weeks[i].weekStart === weekStart) {
                // Update existing snapshot
                var data = gatherWeekData();
                snapshots.weeks[i].mastery = data.mastery;
                snapshots.weeks[i].xp = data.xp;
                snapshots.weeks[i].sessions = data.sessionCount;
                snapshots.weeks[i].reviews = data.totalReviews;
                snapshots.weeks[i].retention = data.retention;
                snapshots.weeks[i].streak = data.streak;
                saveSnapshots(snapshots);
                return;
            }
        }

        // Create new snapshot
        var data = gatherWeekData();
        snapshots.weeks.push({
            weekStart: weekStart,
            mastery: data.mastery,
            xp: data.xp,
            sessions: data.sessionCount,
            reviews: data.totalReviews,
            retention: data.retention,
            streak: data.streak
        });

        // Keep last 12 weeks
        if (snapshots.weeks.length > 12) {
            snapshots.weeks = snapshots.weeks.slice(-12);
        }

        saveSnapshots(snapshots);
    }

    function getPreviousWeekSnapshot() {
        var snapshots = loadSnapshots();
        var weekStart = currentWeekStart();

        // Find the snapshot before the current week
        for (var i = snapshots.weeks.length - 1; i >= 0; i--) {
            if (snapshots.weeks[i].weekStart < weekStart) {
                return snapshots.weeks[i];
            }
        }
        return null;
    }

    // ==================== AUTO-SHOW LOGIC ====================
    function shouldShowReport() {
        var lastShown = window.StudFlow.storage.loadData(LAST_SHOWN_KEY, null);
        var weekStart = currentWeekStart();

        // Already shown this week
        if (lastShown && lastShown.weekStart === weekStart) {
            return false;
        }

        // Check if it's Monday or 7 days since last report
        var today = new Date();
        var isMonday = today.getDay() === 1;

        if (isMonday) return true;

        if (lastShown && lastShown.date) {
            var lastDate = new Date(lastShown.date);
            var diffDays = Math.floor((today - lastDate) / (1000 * 60 * 60 * 24));
            if (diffDays >= 7) return true;
        }

        // First time: show if we have at least 1 session
        if (!lastShown) {
            try {
                var sessionData = window.StudFlow.storage.loadData('studflow_daily_session', {});
                if (sessionData.sessions && sessionData.sessions.length > 0) return true;
            } catch(e) {}
        }

        return false;
    }

    function markReportShown() {
        var weekStart = currentWeekStart();
        window.StudFlow.storage.saveData(LAST_SHOWN_KEY, {
            weekStart: weekStart,
            date: new Date().toISOString().slice(0, 10)
        });
    }

    // ==================== COMPARISON MESSAGES ====================
    function getComparisonMessage(current, previous) {
        if (!previous) {
            return 'Premiere semaine ! C\'est le debut d\'un truc enorme.';
        }

        var messages = [];

        // Sessions comparison
        if (current.sessionCount > 0 && previous.sessions > 0) {
            var sessionDiff = ((current.sessionCount - previous.sessions) / previous.sessions) * 100;
            if (sessionDiff > 30) {
                messages.push('T\'es plus regulier cette semaine. C\'est CA la cle.');
            } else if (sessionDiff < -30) {
                messages.push('Semaine un peu light. C\'est pas grave, reviens en force.');
            }
        }

        // Mastery comparison
        if (current.mastery > previous.mastery) {
            messages.push('Ta maitrise monte. Les revisions payent.');
        }

        // Streak
        if (current.streak >= 7) {
            messages.push('Streak de ' + current.streak + ' jours. T\'es une machine.');
        }

        // Sessions up significantly
        if (previous.sessions > 0 && current.sessionCount > previous.sessions) {
            var pctUp = Math.round(((current.sessionCount - previous.sessions) / previous.sessions) * 100);
            if (pctUp > 50) {
                messages.push('T\'as fait +' + pctUp + '% de sessions cette semaine. Si tu continues comme ca, tu seras pret pour le Bac les doigts dans le nez.');
            }
        }

        // Retention improvement
        if (current.retention > previous.retention + 3) {
            messages.push('Ta retention augmente. Ton cerveau stocke de mieux en mieux.');
        }

        if (messages.length === 0) {
            messages.push('Continue sur cette lancee. Chaque semaine compte.');
        }

        return messages[0];
    }

    // ==================== RENDER REPORT ====================
    function show() {
        takeSnapshotIfNeeded();
        markReportShown();

        var data = gatherWeekData();
        var previous = getPreviousWeekSnapshot();

        // Hide header/tab, show screen
        var header = document.querySelector('header');
        var tabBar = document.getElementById('tab-bar');
        if (header) header.style.display = 'none';
        if (tabBar) tabBar.style.display = 'none';

        window.StudFlow.app.showScreen('weekly-report');

        var container = document.getElementById('weekly-report-content');
        if (!container) return;

        var html = '<div class="wr-container">';

        // Header
        html += '<div class="wr-header">'
            + '<div style="font-size:2.5rem;margin-bottom:8px;">📊</div>'
            + '<h2 class="wr-title">Ta semaine</h2>'
            + '</div>';

        // Stats grid
        html += '<div class="wr-stats-grid">';

        html += '<div class="wr-stat">'
            + '<div class="wr-stat-value">🔥 ' + data.sessionCount + '</div>'
            + '<div class="wr-stat-label">Sessions</div>'
            + '</div>';

        html += '<div class="wr-stat">'
            + '<div class="wr-stat-value">📚 ' + data.totalReviews + '</div>'
            + '<div class="wr-stat-label">Cartes revues</div>'
            + '</div>';

        html += '<div class="wr-stat">'
            + '<div class="wr-stat-value">⚡ +' + data.xp + '</div>'
            + '<div class="wr-stat-label">XP</div>'
            + '</div>';

        html += '<div class="wr-stat">'
            + '<div class="wr-stat-value">🧠 ' + data.retention + '%</div>'
            + '<div class="wr-stat-label">Retention</div>'
            + '</div>';

        html += '<div class="wr-stat">'
            + '<div class="wr-stat-value">📈 ' + data.mastery + '%</div>'
            + '<div class="wr-stat-label">Maitrise</div>'
            + '</div>';

        html += '<div class="wr-stat">'
            + '<div class="wr-stat-value">🔥 ' + data.streak + '</div>'
            + '<div class="wr-stat-label">Streak</div>'
            + '</div>';

        html += '</div>';

        // Comparison with previous week
        if (previous) {
            html += '<div class="wr-comparison">'
                + '<h3 style="font-size:0.85rem;font-weight:600;margin-bottom:10px;color:var(--text-muted);">Comparaison semaine derniere</h3>';

            html += renderCompRow('Sessions', data.sessionCount, previous.sessions, 'count');
            html += renderCompRow('Maitrise', data.mastery, previous.mastery, 'pts');
            html += renderCompRow('Retention', data.retention, previous.retention, 'pts');
            html += renderCompRow('Cartes', data.totalReviews, previous.reviews, 'count');

            html += '</div>';
        }

        // Coach message
        var coachMsg = getComparisonMessage(data, previous);
        html += '<div class="wr-coach">'
            + '<p class="wr-coach-text">"' + coachMsg + '"</p>'
            + '</div>';

        // Continue button
        html += '<div style="text-align:center;margin-top:20px;">'
            + '<button class="ds-btn ds-btn-primary" data-action="weeklyReport.close" style="min-width:200px;">Continuer →</button>'
            + '</div>';

        html += '</div>';

        container.innerHTML = html;
    }

    function renderCompRow(label, current, prev, type) {
        if (prev === undefined || prev === null) return '';

        var diff, diffText, cls;

        if (type === 'pts') {
            diff = current - prev;
            if (diff > 0) {
                diffText = '+' + diff + 'pts ↑';
                cls = 'wr-comp-up';
            } else if (diff < 0) {
                diffText = diff + 'pts ↓';
                cls = 'wr-comp-down';
            } else {
                diffText = '= ';
                cls = 'wr-comp-same';
            }
        } else {
            diff = current - prev;
            if (prev > 0 && diff !== 0) {
                var pctDiff = Math.round((diff / prev) * 100);
                if (diff > 0) {
                    diffText = '+' + pctDiff + '% ↑';
                    cls = 'wr-comp-up';
                } else {
                    diffText = pctDiff + '% ↓';
                    cls = 'wr-comp-down';
                }
            } else if (diff > 0) {
                diffText = '+' + diff + ' ↑';
                cls = 'wr-comp-up';
            } else if (diff < 0) {
                diffText = diff + ' ↓';
                cls = 'wr-comp-down';
            } else {
                diffText = '=';
                cls = 'wr-comp-same';
            }
        }

        return '<div class="wr-comp-row">'
            + '<span>' + label + ': ' + current + ' vs ' + prev + '</span>'
            + '<span class="' + cls + '">' + diffText + '</span>'
            + '</div>';
    }

    function close() {
        var header = document.querySelector('header');
        var tabBar = document.getElementById('tab-bar');
        if (header) header.style.display = '';
        if (tabBar) tabBar.style.display = '';
        window.StudFlow.app.showScreen('dashboard');
    }

    // ==================== DASHBOARD WIDGET ====================
    function renderDashboardWidget() {
        var data = gatherWeekData();

        return '<div class="wr-widget" data-action="weeklyReport.show">'
            + '📊 Ta semaine : ' + data.sessionCount + ' sessions · ' + data.mastery + '% maitrise · <strong>Voir →</strong>'
            + '</div>';
    }

    // ==================== DASHBOARD BANNER ====================
    function renderDashboardBanner() {
        if (!shouldShowReport()) return '';

        return '<div class="dash-section wr-banner" data-action="weeklyReport.show">'
            + '<div style="display:flex;align-items:center;gap:10px;cursor:pointer;">'
            + '<span style="font-size:1.5rem;">📊</span>'
            + '<div>'
            + '<div style="font-weight:600;font-size:0.95rem;">Ton bilan de la semaine est pret !</div>'
            + '<div style="font-size:0.8rem;color:var(--text-muted);">Clique pour voir ton resume</div>'
            + '</div>'
            + '<span style="margin-left:auto;font-size:1.2rem;">→</span>'
            + '</div>'
            + '</div>';
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.weeklyReport = {
        show: show,
        close: close,
        shouldShowReport: shouldShowReport,
        renderDashboardWidget: renderDashboardWidget,
        renderDashboardBanner: renderDashboardBanner
    };

})();
