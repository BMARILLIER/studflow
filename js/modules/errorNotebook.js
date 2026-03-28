// errorNotebook.js — Carnet d'erreurs: track wrong answers, show patterns, review errors
(function() {
    'use strict';

    var STORAGE_KEY = 'studflow_error_notebook';
    var MAX_ERRORS = 100;

    // ==================== DATA ====================
    function loadData() {
        return window.StudFlow.storage.loadData(STORAGE_KEY, { errors: [] });
    }

    function saveData(data) {
        window.StudFlow.storage.saveData(STORAGE_KEY, data);
    }

    // ==================== RECORD ====================
    function record(info) {
        // info: { question, correctAnswer, userAnswer, type, subject, date }
        if (!info || !info.question) return;

        var data = loadData();
        var errors = data.errors || [];

        // Check if same question already exists
        var found = false;
        for (var i = 0; i < errors.length; i++) {
            if (errors[i].question === info.question) {
                errors[i].count = (errors[i].count || 1) + 1;
                errors[i].date = info.date || new Date().toISOString().split('T')[0];
                if (info.userAnswer) errors[i].userAnswer = info.userAnswer;
                if (info.correctAnswer) errors[i].correctAnswer = info.correctAnswer;
                found = true;
                break;
            }
        }

        if (!found) {
            errors.push({
                question: info.question,
                correctAnswer: info.correctAnswer || '',
                userAnswer: info.userAnswer || '',
                type: info.type || 'quiz',
                subject: info.subject || '',
                date: info.date || new Date().toISOString().split('T')[0],
                count: 1
            });
        }

        // Keep max errors (remove oldest when full)
        if (errors.length > MAX_ERRORS) {
            // Sort by count asc then date asc, remove least important
            errors.sort(function(a, b) {
                if (a.count !== b.count) return a.count - b.count;
                return (a.date || '').localeCompare(b.date || '');
            });
            errors = errors.slice(errors.length - MAX_ERRORS);
        }

        data.errors = errors;
        saveData(data);
    }

    // ==================== QUERIES ====================
    function getTopErrors(n) {
        var data = loadData();
        var errors = (data.errors || []).slice();
        errors.sort(function(a, b) { return b.count - a.count; });
        return errors.slice(0, n || 5);
    }

    function getRecentErrors(n) {
        var data = loadData();
        var errors = (data.errors || []).slice();
        errors.sort(function(a, b) { return (b.date || '').localeCompare(a.date || ''); });
        return errors.slice(0, n || 10);
    }

    function getWeeklyReport() {
        var data = loadData();
        var errors = data.errors || [];
        var now = new Date();
        var weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        var twoWeeksAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000);

        var thisWeek = [];
        var lastWeek = [];
        var subjectCounts = {};

        for (var i = 0; i < errors.length; i++) {
            var d = new Date(errors[i].date);
            if (d >= weekAgo) {
                thisWeek.push(errors[i]);
                var subj = errors[i].subject || 'autre';
                subjectCounts[subj] = (subjectCounts[subj] || 0) + errors[i].count;
            } else if (d >= twoWeeksAgo) {
                lastWeek.push(errors[i]);
            }
        }

        // Most problematic subject
        var worstSubject = '';
        var worstCount = 0;
        for (var s in subjectCounts) {
            if (subjectCounts[s] > worstCount) {
                worstCount = subjectCounts[s];
                worstSubject = s;
            }
        }

        // Most repeated error
        var mostRepeated = null;
        if (thisWeek.length > 0) {
            thisWeek.sort(function(a, b) { return b.count - a.count; });
            mostRepeated = thisWeek[0];
        }

        var thisWeekTotal = 0;
        for (var tw = 0; tw < thisWeek.length; tw++) thisWeekTotal += thisWeek[tw].count;
        var lastWeekTotal = 0;
        for (var lw = 0; lw < lastWeek.length; lw++) lastWeekTotal += lastWeek[lw].count;

        return {
            totalThisWeek: thisWeekTotal,
            totalLastWeek: lastWeekTotal,
            worstSubject: worstSubject,
            mostRepeated: mostRepeated,
            improving: thisWeekTotal < lastWeekTotal
        };
    }

    // ==================== HELPERS ====================
    function escapeHTML(str) {
        var div = document.createElement('div');
        div.appendChild(document.createTextNode(str || ''));
        return div.innerHTML;
    }

    function truncate(str, max) {
        if (!str) return '';
        return str.length > max ? str.substring(0, max) + '...' : str;
    }

    // ==================== SHOW SCREEN ====================
    function show() {
        window.StudFlow.app.showScreen('errors');
        var container = document.getElementById('error-notebook-content');
        if (!container) return;

        var topErrors = getTopErrors(10);
        var report = getWeeklyReport();
        var data = loadData();
        var totalErrors = (data.errors || []).length;

        var html = '<div class="error-nb-header">'
            + '<div class="error-nb-title">Ton carnet d\'erreurs</div>'
            + '<p style="color:var(--text-muted);font-size:0.85rem;margin-top:4px;">'
            + totalErrors + ' erreur' + (totalErrors !== 1 ? 's' : '') + ' enregistree' + (totalErrors !== 1 ? 's' : '')
            + '</p>'
            + '</div>';

        // Weekly stats
        html += '<div class="error-nb-stats">'
            + '<h3 style="font-size:0.9rem;font-weight:600;margin:0 0 10px;">Cette semaine</h3>';

        if (report.totalThisWeek > 0) {
            html += '<div style="font-size:0.85rem;color:var(--text);line-height:1.8;">';
            html += '&bull; ' + report.totalThisWeek + ' erreur' + (report.totalThisWeek !== 1 ? 's' : '');
            if (report.totalLastWeek > 0) {
                if (report.improving) {
                    html += ' <span class="error-nb-improvement">(vs ' + report.totalLastWeek + ' la semaine derniere — tu progresses !)</span>';
                } else {
                    html += ' <span style="color:#f59e0b;">(vs ' + report.totalLastWeek + ' la semaine derniere)</span>';
                }
            }
            html += '<br>';
            if (report.worstSubject) {
                html += '&bull; Point faible : <strong>' + escapeHTML(report.worstSubject) + '</strong><br>';
            }
            if (report.mostRepeated) {
                html += '&bull; Erreur la plus repetee : "' + escapeHTML(truncate(report.mostRepeated.question, 40)) + '"';
            }
            html += '</div>';
        } else {
            html += '<div style="font-size:0.85rem;color:var(--text-muted);">Aucune erreur cette semaine. Continue comme ca !</div>';
        }
        html += '</div>';

        // Top errors
        if (topErrors.length > 0) {
            html += '<h3 style="font-size:0.9rem;font-weight:600;margin:16px 0 10px;">Tes erreurs les plus frequentes</h3>';
            for (var i = 0; i < topErrors.length; i++) {
                var err = topErrors[i];
                html += '<div class="error-nb-card">'
                    + '<div class="error-nb-question">' + escapeHTML(truncate(err.question, 80)) + '</div>'
                    + '<div class="error-nb-answer">Bonne reponse : ' + escapeHTML(truncate(err.correctAnswer, 60)) + '</div>'
                    + '<div style="display:flex;justify-content:space-between;align-items:center;margin-top:6px;">'
                    + '<span class="error-nb-count">Rate ' + err.count + ' fois</span>'
                    + '<span style="font-size:0.72rem;color:var(--text-dim);">' + (err.subject || '') + '</span>'
                    + '</div>'
                    + '</div>';
            }

            // Review button
            html += '<button class="breathing-btn primary" data-action="errorNotebook.startSession" style="width:100%;margin-top:16px;">'
                + 'Reviser mes erreurs'
                + '</button>';
        } else {
            html += '<div style="text-align:center;padding:40px 20px;color:var(--text-muted);font-size:0.9rem;">'
                + '<div style="font-size:2rem;margin-bottom:12px;">🎉</div>'
                + 'Aucune erreur enregistree pour le moment.<br>Continue a reviser et tes erreurs apparaitront ici.'
                + '</div>';
        }

        container.innerHTML = html;
    }

    // ==================== ERROR SESSION ====================
    function startErrorSession() {
        var topErrors = getTopErrors(20);
        if (topErrors.length === 0) {
            if (window.StudFlow.gamification) {
                window.StudFlow.gamification.showToast('Pas d\'erreurs a reviser !', 'xp');
            }
            return;
        }

        // Build items for dailySession.showWithItems
        var items = [];
        for (var i = 0; i < topErrors.length; i++) {
            var err = topErrors[i];
            if (err.type === 'fc') {
                items.push({
                    type: 'fc',
                    data: { question: err.question, answer: err.correctAnswer, mastered: false },
                    done: false,
                    correct: null
                });
            } else {
                // For quiz errors we only have question + correct answer text
                // Create a simplified flashcard-style review
                items.push({
                    type: 'fc',
                    data: { question: err.question, answer: err.correctAnswer, mastered: false },
                    done: false,
                    correct: null
                });
            }
        }

        if (window.StudFlow.dailySession && window.StudFlow.dailySession.showWithItems) {
            window.StudFlow.dailySession.showWithItems(items, 'Revision des erreurs');
        }
    }

    // ==================== DASHBOARD WIDGET ====================
    function renderDashboardWidget() {
        var topErrors = getTopErrors(3);
        if (topErrors.length === 0) return '';

        var label = topErrors.length + ' erreur' + (topErrors.length !== 1 ? 's' : '') + ' recurrente' + (topErrors.length !== 1 ? 's' : '');

        return '<div class="error-nb-widget" data-action="screen:errors">'
            + '<span style="font-size:1.2rem;">📕</span>'
            + '<span style="flex:1;font-size:0.85rem;font-weight:600;color:#ef4444;">' + label + ' · Reviser</span>'
            + '<span style="color:rgba(239,68,68,0.5);">→</span>'
            + '</div>';
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.errorNotebook = {
        record: record,
        getTopErrors: getTopErrors,
        getRecentErrors: getRecentErrors,
        getWeeklyReport: getWeeklyReport,
        show: show,
        startErrorSession: startErrorSession,
        renderDashboardWidget: renderDashboardWidget
    };

})();
