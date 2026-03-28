// timeline.js — Historique timeline / journal d'activite
(function() {

    var STORAGE_KEY = 'timeline';
    var MAX_ENTRIES = 500;

    // ==================== ENTRY TYPES ====================
    var TYPE_CONFIG = {
        focus:     { icon: '🎯', label: 'Focus' },
        quiz:      { icon: '⚡', label: 'Quiz' },
        flashcard: { icon: '🃏', label: 'Flashcards' },
        stress:    { icon: '🧘', label: 'Anti-stress' },
        section:   { icon: '📖', label: 'Matiere' },
        badge:     { icon: '🏅', label: 'Badge' },
        mission:   { icon: '🎯', label: 'Mission' },
        planning:  { icon: '📅', label: 'Planning' },
        level:     { icon: '🎉', label: 'Niveau' },
        streak:    { icon: '🔥', label: 'Streak' }
    };

    // ==================== STORAGE ====================
    function loadEntries() {
        return window.StudFlow.storage.loadData(STORAGE_KEY, []);
    }

    function saveEntries(entries) {
        window.StudFlow.storage.saveData(STORAGE_KEY, entries);
    }

    // ==================== LOG ====================
    function log(type, title, data) {
        var entries = loadEntries();
        entries.unshift({
            type: type,
            title: title,
            timestamp: new Date().toISOString(),
            data: data || null
        });
        // Cap at MAX_ENTRIES
        if (entries.length > MAX_ENTRIES) {
            entries = entries.slice(0, MAX_ENTRIES);
        }
        saveEntries(entries);
    }

    // ==================== EVENT BUS AUTO-LOGGING ====================
    function setupListeners() {
        if (!window.StudFlow.events) return;
        var ev = window.StudFlow.events;

        ev.on('focus:completed', function(d) {
            log('focus', 'Focus ' + d.minutes + ' min' + (d.objective ? ' — ' + d.objective : ''), d);
        });

        ev.on('quiz:completed', function(d) {
            var deckLabel = d.deck === 'all' ? '' : ' (' + d.deck + ')';
            log('quiz', 'Quiz' + deckLabel + ' ' + d.percent + '% (' + d.score + '/' + d.total + ')', d);
        });

        ev.on('flashcard:completed', function(d) {
            var mode = d.srMode ? ' SR' : '';
            var deckLabel = d.deck === 'all' ? '' : ' (' + d.deck + ')';
            log('flashcard', 'Flashcards' + mode + deckLabel + ' ' + d.percent + '%', d);
        });

        ev.on('stress:completed', function(d) {
            log('stress', 'Anti-stress — ' + d.title, d);
        });

        ev.on('section:visited', function(d) {
            var subj = window.StudFlow.subjects ? window.StudFlow.subjects.getById(d.subjectId) : null;
            var subjName = subj ? subj.name : d.subjectId;
            log('section', subjName + ' — section visitee', d);
        });

        ev.on('badge:unlocked', function(d) {
            log('badge', 'Badge ' + d.icon + ' ' + d.name, d);
        });

        ev.on('mission:stepCompleted', function(d) {
            log('mission', 'Etape "' + d.title + '" terminee', d);
        });

        ev.on('mission:completed', function(d) {
            log('mission', 'Mission "' + d.title + '" terminee ! +' + d.bonus + ' XP', d);
        });

        ev.on('planning:created', function(d) {
            log('planning', 'Plan Bac cree (' + d.weeks + ' semaines)', d);
        });

        ev.on('level:up', function(d) {
            log('level', 'Niveau ' + d.level + ' — ' + d.name, d);
        });

        ev.on('streak:updated', function(d) {
            if (d.streak >= 3) {
                log('streak', d.streak + ' jours de suite !', d);
            }
        });
    }

    // ==================== STATS ====================
    function getStats() {
        var entries = loadEntries();
        var now = new Date();
        var todayStr = now.toDateString();
        var weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

        var today = 0;
        var thisWeek = 0;
        var byType = {};

        for (var i = 0; i < entries.length; i++) {
            var e = entries[i];
            var d = new Date(e.timestamp);
            if (d.toDateString() === todayStr) today++;
            if (d >= weekAgo) thisWeek++;
            byType[e.type] = (byType[e.type] || 0) + 1;
        }

        return { total: entries.length, today: today, thisWeek: thisWeek, byType: byType };
    }

    // ==================== RENDER ====================
    var currentFilter = 'all';

    function show() {
        currentFilter = 'all';
        window.StudFlow.app.showScreen('timeline');
        renderMain();
    }

    function renderMain() {
        var container = document.getElementById('timeline-content');
        if (!container) return;

        var entries = loadEntries();
        var stats = getStats();

        var html = '<div class="tl-header">'
            + '<h2>Historique</h2>'
            + '<p>Ton journal d\'activite</p>'
            + '</div>';

        // Stats bar
        html += '<div class="tl-stats">'
            + '<div class="tl-stat"><span class="tl-stat-value">' + stats.today + '</span><span class="tl-stat-label">Aujourd\'hui</span></div>'
            + '<div class="tl-stat"><span class="tl-stat-value">' + stats.thisWeek + '</span><span class="tl-stat-label">Cette semaine</span></div>'
            + '<div class="tl-stat"><span class="tl-stat-value">' + stats.total + '</span><span class="tl-stat-label">Total</span></div>'
            + '</div>';

        // Filters
        html += '<div class="tl-filters">';
        html += '<button class="tl-filter-btn' + (currentFilter === 'all' ? ' active' : '') + '" data-action="timeline.setFilter" data-param="all">Tout</button>';
        var types = Object.keys(TYPE_CONFIG);
        for (var t = 0; t < types.length; t++) {
            var tc = TYPE_CONFIG[types[t]];
            var count = stats.byType[types[t]] || 0;
            if (count === 0) continue;
            html += '<button class="tl-filter-btn' + (currentFilter === types[t] ? ' active' : '') + '" data-action="timeline.setFilter" data-param="' + types[t] + '">'
                + tc.icon + ' ' + tc.label
                + '</button>';
        }
        html += '</div>';

        // Filter entries
        var filtered = entries;
        if (currentFilter !== 'all') {
            filtered = [];
            for (var f = 0; f < entries.length; f++) {
                if (entries[f].type === currentFilter) filtered.push(entries[f]);
            }
        }

        if (filtered.length === 0) {
            html += '<div class="tl-empty">'
                + '<div class="tl-empty-icon">📋</div>'
                + '<p>Aucune activite enregistree' + (currentFilter !== 'all' ? ' pour ce filtre' : '') + '.</p>'
                + '<p style="color:var(--text-muted);font-size:0.85rem;">Tes actions seront enregistrees automatiquement.</p>'
                + '</div>';
            container.innerHTML = html;
            return;
        }

        // Group by day
        var groups = [];
        var groupMap = {};
        for (var i = 0; i < filtered.length; i++) {
            var entry = filtered[i];
            var dayKey = new Date(entry.timestamp).toDateString();
            if (!groupMap[dayKey]) {
                groupMap[dayKey] = { day: dayKey, entries: [] };
                groups.push(groupMap[dayKey]);
            }
            groupMap[dayKey].entries.push(entry);
        }

        // Render groups
        html += '<div class="tl-groups">';
        for (var g = 0; g < groups.length; g++) {
            var group = groups[g];
            var dayLabel = formatDayLabel(group.day);

            html += '<div class="tl-day-group">'
                + '<div class="tl-day-label">' + dayLabel + '</div>';

            for (var j = 0; j < group.entries.length; j++) {
                var e = group.entries[j];
                var cfg = TYPE_CONFIG[e.type] || { icon: '📌', label: 'Activite' };
                var time = formatTime(e.timestamp);

                html += '<div class="tl-entry">'
                    + '<div class="tl-entry-time">' + time + '</div>'
                    + '<div class="tl-entry-dot"></div>'
                    + '<div class="tl-entry-body">'
                    + '<span class="tl-entry-icon">' + cfg.icon + '</span>'
                    + '<span class="tl-entry-text">' + escapeHtml(e.title) + '</span>'
                    + '</div>'
                    + '</div>';
            }

            html += '</div>';
        }
        html += '</div>';

        container.innerHTML = html;
    }

    // ==================== FORMAT HELPERS ====================
    var JOURS = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    var MOIS = ['janvier', 'fevrier', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'decembre'];

    function formatDayLabel(dayStr) {
        var d = new Date(dayStr);
        var now = new Date();
        var todayStr = now.toDateString();
        var yesterday = new Date(now);
        yesterday.setDate(yesterday.getDate() - 1);

        if (dayStr === todayStr) return 'Aujourd\'hui';
        if (dayStr === yesterday.toDateString()) return 'Hier';
        return JOURS[d.getDay()] + ' ' + d.getDate() + ' ' + MOIS[d.getMonth()];
    }

    function formatTime(iso) {
        var d = new Date(iso);
        return d.getHours().toString().padStart(2, '0') + ':' + d.getMinutes().toString().padStart(2, '0');
    }

    function escapeHtml(str) {
        var div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    // ==================== FILTER ====================
    function setFilter(type) {
        currentFilter = type;
        renderMain();
    }

    // ==================== DASHBOARD WIDGET ====================
    function renderDashboardWidget() {
        var entries = loadEntries();
        if (entries.length === 0) return '';

        var recent = entries.slice(0, 3);
        var html = '<div class="tl-widget" data-action="timeline.show">'
            + '<div class="tl-widget-header">'
            + '<span class="tl-widget-title">Activite recente</span>'
            + '<span class="tl-widget-arrow">\u2192</span>'
            + '</div>';

        for (var i = 0; i < recent.length; i++) {
            var e = recent[i];
            var cfg = TYPE_CONFIG[e.type] || { icon: '📌' };
            var time = formatTime(e.timestamp);
            html += '<div class="tl-widget-entry">'
                + '<span class="tl-widget-time">' + time + '</span>'
                + '<span class="tl-widget-icon">' + cfg.icon + '</span>'
                + '<span class="tl-widget-text">' + escapeHtml(e.title) + '</span>'
                + '</div>';
        }

        html += '</div>';
        return html;
    }

    // ==================== INIT ====================
    setupListeners();

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.timeline = {
        show: show,
        renderMain: renderMain,
        log: log,
        getStats: getStats,
        setFilter: setFilter,
        renderDashboardWidget: renderDashboardWidget
    };

})();
