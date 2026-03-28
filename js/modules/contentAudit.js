// contentAudit.js — Validation qualite du contenu pedagogique
(function() {
    'use strict';

    var MIN_QUESTION_LENGTH = 15;
    var MIN_ANSWER_LENGTH = 10;
    var MIN_FLASHCARD_ANSWER_LENGTH = 20;
    var SIMILARITY_THRESHOLD = 0.8;

    // ==================== METADATA FIELDS ====================
    // These fields can be added to flashcard/quiz objects:
    // - verified: boolean (content has been reviewed)
    // - source: string (origin of content)
    // - program_reference: string (e.g. "Programme Terminale 2024")

    // ==================== GATHER ALL CONTENT ====================
    function gatherAllContent() {
        var content = {
            flashcards: [],
            quiz: []
        };

        // Subject-registered content
        if (window.StudFlow.subjects) {
            var subjects = window.StudFlow.subjects.getAll();
            for (var i = 0; i < subjects.length; i++) {
                var subj = subjects[i];
                if (!subj.sections) continue;
                for (var j = 0; j < subj.sections.length; j++) {
                    var sec = subj.sections[j];
                    var fc = sec.flashcards || [];
                    for (var k = 0; k < fc.length; k++) {
                        content.flashcards.push({
                            question: fc[k].question,
                            answer: fc[k].answer,
                            verified: fc[k].verified || false,
                            source: fc[k].source || subj.id,
                            program_reference: fc[k].program_reference || null,
                            _origin: subj.id + '/' + sec.id,
                            _index: k
                        });
                    }
                    var qz = sec.quiz || [];
                    for (var k = 0; k < qz.length; k++) {
                        content.quiz.push({
                            question: qz[k].question,
                            options: qz[k].options,
                            correctIndex: qz[k].correctIndex,
                            explanation: qz[k].explanation,
                            verified: qz[k].verified || false,
                            source: qz[k].source || subj.id,
                            program_reference: qz[k].program_reference || null,
                            _origin: subj.id + '/' + sec.id,
                            _index: k
                        });
                    }
                }
            }
        }

        // Custom content (user-created)
        var state = window.StudFlow.app.getState();
        var customFC = state.customFlashcards || [];
        for (var i = 0; i < customFC.length; i++) {
            content.flashcards.push({
                question: customFC[i].question,
                answer: customFC[i].answer,
                verified: customFC[i].verified || false,
                source: 'custom',
                program_reference: customFC[i].program_reference || null,
                _origin: 'custom',
                _index: i
            });
        }
        var customQz = state.customQuiz || [];
        for (var i = 0; i < customQz.length; i++) {
            content.quiz.push({
                question: customQz[i].question,
                options: customQz[i].options,
                correctIndex: customQz[i].correctIndex,
                explanation: customQz[i].explanation,
                verified: customQz[i].verified || false,
                source: 'custom',
                program_reference: customQz[i].program_reference || null,
                _origin: 'custom',
                _index: i
            });
        }

        return content;
    }

    // ==================== AUDIT ====================
    function contentAudit() {
        var content = gatherAllContent();
        var issues = [];

        // --- Flashcards audit ---
        for (var i = 0; i < content.flashcards.length; i++) {
            var fc = content.flashcards[i];

            // Too short question
            if ((fc.question || '').length < MIN_QUESTION_LENGTH) {
                issues.push({
                    type: 'too_short',
                    category: 'flashcard',
                    origin: fc._origin,
                    index: fc._index,
                    field: 'question',
                    value: fc.question,
                    message: 'Question trop courte (' + (fc.question || '').length + ' car.)'
                });
            }

            // Too short answer
            if ((fc.answer || '').length < MIN_FLASHCARD_ANSWER_LENGTH) {
                issues.push({
                    type: 'too_short',
                    category: 'flashcard',
                    origin: fc._origin,
                    index: fc._index,
                    field: 'answer',
                    value: fc.answer,
                    message: 'Reponse trop courte (' + (fc.answer || '').length + ' car.)'
                });
            }
        }

        // --- Quiz audit ---
        for (var i = 0; i < content.quiz.length; i++) {
            var qz = content.quiz[i];

            // Too short question
            if ((qz.question || '').length < MIN_QUESTION_LENGTH) {
                issues.push({
                    type: 'too_short',
                    category: 'quiz',
                    origin: qz._origin,
                    index: qz._index,
                    field: 'question',
                    value: qz.question,
                    message: 'Question trop courte (' + (qz.question || '').length + ' car.)'
                });
            }

            // Missing or too few options
            if (!qz.options || qz.options.length < 4) {
                issues.push({
                    type: 'inconsistency',
                    category: 'quiz',
                    origin: qz._origin,
                    index: qz._index,
                    field: 'options',
                    message: 'Moins de 4 options (' + (qz.options ? qz.options.length : 0) + ')'
                });
            }

            // correctIndex out of range
            if (qz.options && (qz.correctIndex < 0 || qz.correctIndex >= qz.options.length)) {
                issues.push({
                    type: 'inconsistency',
                    category: 'quiz',
                    origin: qz._origin,
                    index: qz._index,
                    field: 'correctIndex',
                    message: 'Index reponse correcte hors limites (' + qz.correctIndex + ')'
                });
            }

            // Missing explanation
            if (!qz.explanation || qz.explanation.length < 5) {
                issues.push({
                    type: 'too_short',
                    category: 'quiz',
                    origin: qz._origin,
                    index: qz._index,
                    field: 'explanation',
                    value: qz.explanation,
                    message: 'Explication manquante ou trop courte'
                });
            }

            // Duplicate options
            if (qz.options) {
                var seen = {};
                for (var j = 0; j < qz.options.length; j++) {
                    var opt = (qz.options[j] || '').toLowerCase().trim();
                    if (seen[opt]) {
                        issues.push({
                            type: 'inconsistency',
                            category: 'quiz',
                            origin: qz._origin,
                            index: qz._index,
                            field: 'options',
                            message: 'Options en double : "' + qz.options[j] + '"'
                        });
                        break;
                    }
                    seen[opt] = true;
                }
            }
        }

        // --- Duplicate detection (flashcards) ---
        for (var i = 0; i < content.flashcards.length; i++) {
            for (var j = i + 1; j < content.flashcards.length; j++) {
                if (similarity(content.flashcards[i].question, content.flashcards[j].question) >= SIMILARITY_THRESHOLD) {
                    issues.push({
                        type: 'duplicate',
                        category: 'flashcard',
                        origin: content.flashcards[i]._origin + ' vs ' + content.flashcards[j]._origin,
                        index: i,
                        message: 'Doublon flashcard : "' + truncate(content.flashcards[i].question, 50) + '" ≈ "' + truncate(content.flashcards[j].question, 50) + '"'
                    });
                }
            }
        }

        // --- Duplicate detection (quiz) ---
        for (var i = 0; i < content.quiz.length; i++) {
            for (var j = i + 1; j < content.quiz.length; j++) {
                if (similarity(content.quiz[i].question, content.quiz[j].question) >= SIMILARITY_THRESHOLD) {
                    issues.push({
                        type: 'duplicate',
                        category: 'quiz',
                        origin: content.quiz[i]._origin + ' vs ' + content.quiz[j]._origin,
                        index: i,
                        message: 'Doublon quiz : "' + truncate(content.quiz[i].question, 50) + '" ≈ "' + truncate(content.quiz[j].question, 50) + '"'
                    });
                }
            }
        }

        return {
            issues: issues,
            stats: {
                totalFlashcards: content.flashcards.length,
                totalQuiz: content.quiz.length,
                verifiedFlashcards: content.flashcards.filter(function(f) { return f.verified; }).length,
                verifiedQuiz: content.quiz.filter(function(q) { return q.verified; }).length,
                withSource: content.flashcards.concat(content.quiz).filter(function(c) { return c.source && c.source !== 'custom'; }).length,
                withProgramRef: content.flashcards.concat(content.quiz).filter(function(c) { return !!c.program_reference; }).length,
                issuesByType: countByType(issues),
                issuesByCategory: countByCategory(issues)
            },
            content: content
        };
    }

    // ==================== SIMILARITY (Jaccard on bigrams) ====================
    function bigrams(str) {
        str = (str || '').toLowerCase().replace(/[^a-z0-9àâéèêëïîôùûüçœæ ]/g, '');
        var b = {};
        for (var i = 0; i < str.length - 1; i++) {
            var pair = str.substring(i, i + 2);
            b[pair] = (b[pair] || 0) + 1;
        }
        return b;
    }

    function similarity(a, b) {
        var ba = bigrams(a);
        var bb = bigrams(b);
        var intersection = 0;
        var union = 0;
        var all = {};
        var k;
        for (k in ba) all[k] = true;
        for (k in bb) all[k] = true;
        for (k in all) {
            var va = ba[k] || 0;
            var vb = bb[k] || 0;
            intersection += Math.min(va, vb);
            union += Math.max(va, vb);
        }
        return union === 0 ? 0 : intersection / union;
    }

    // ==================== HELPERS ====================
    function truncate(str, len) {
        if (!str) return '';
        return str.length > len ? str.substring(0, len) + '...' : str;
    }

    function countByType(issues) {
        var counts = {};
        for (var i = 0; i < issues.length; i++) {
            counts[issues[i].type] = (counts[issues[i].type] || 0) + 1;
        }
        return counts;
    }

    function countByCategory(issues) {
        var counts = {};
        for (var i = 0; i < issues.length; i++) {
            counts[issues[i].category] = (counts[issues[i].category] || 0) + 1;
        }
        return counts;
    }

    // ==================== ADMIN UI ====================
    function renderAdminPanel() {
        var container = document.getElementById('admin-content');
        if (!container) return;

        var report = contentAudit();
        var stats = report.stats;
        var issues = report.issues;

        var html = '<div class="admin-header">'
            + '<h2>Qualite du contenu</h2>'
            + '<p>Audit automatique des flashcards et quiz</p>'
            + '</div>';

        // --- Stats cards ---
        html += '<div class="admin-stats">'
            + renderStatCard('Flashcards', stats.totalFlashcards, stats.verifiedFlashcards, 'verifiees')
            + renderStatCard('Quiz', stats.totalQuiz, stats.verifiedQuiz, 'verifies')
            + renderStatCard('Ref. programme', stats.withProgramRef, stats.totalFlashcards + stats.totalQuiz, 'total')
            + renderStatCard('Problemes', issues.length, null, null)
            + '</div>';

        // --- Issues breakdown ---
        if (issues.length > 0) {
            html += '<div class="admin-section">'
                + '<h3>Problemes detectes (' + issues.length + ')</h3>'
                + '<div class="admin-filters">'
                + '<button class="admin-filter active" data-action="contentAudit.filterIssues" data-param="all">Tous</button>'
                + '<button class="admin-filter" data-action="contentAudit.filterIssues" data-param="too_short">Trop court (' + (stats.issuesByType.too_short || 0) + ')</button>'
                + '<button class="admin-filter" data-action="contentAudit.filterIssues" data-param="duplicate">Doublons (' + (stats.issuesByType.duplicate || 0) + ')</button>'
                + '<button class="admin-filter" data-action="contentAudit.filterIssues" data-param="inconsistency">Incoherences (' + (stats.issuesByType.inconsistency || 0) + ')</button>'
                + '</div>'
                + '<div class="admin-issues" id="admin-issues-list">';

            for (var i = 0; i < issues.length; i++) {
                html += renderIssueRow(issues[i], i);
            }

            html += '</div></div>';
        } else {
            html += '<div class="admin-section">'
                + '<div class="admin-success">Aucun probleme detecte. Le contenu est de bonne qualite.</div>'
                + '</div>';
        }

        // --- Content browser ---
        html += '<div class="admin-section">'
            + '<h3>Contenu par matiere</h3>'
            + renderContentBrowser(report.content)
            + '</div>';

        container.innerHTML = html;
    }

    function renderStatCard(label, value, subValue, subLabel) {
        var sub = '';
        if (subValue !== null && subLabel) {
            sub = '<span class="admin-stat-sub">' + subValue + ' ' + subLabel + '</span>';
        }
        var color = label === 'Problemes' && value > 0 ? ' admin-stat-warn' : '';
        return '<div class="admin-stat-card' + color + '">'
            + '<div class="admin-stat-value">' + value + '</div>'
            + '<div class="admin-stat-label">' + label + '</div>'
            + sub
            + '</div>';
    }

    function renderIssueRow(issue, idx) {
        var typeIcons = { too_short: '📏', duplicate: '🔁', inconsistency: '⚠️' };
        var typeLabels = { too_short: 'Trop court', duplicate: 'Doublon', inconsistency: 'Incoherence' };
        var icon = typeIcons[issue.type] || '❓';
        var typeLabel = typeLabels[issue.type] || issue.type;

        return '<div class="admin-issue-row" data-type="' + issue.type + '">'
            + '<span class="admin-issue-icon">' + icon + '</span>'
            + '<div class="admin-issue-info">'
            + '<span class="admin-issue-type">' + typeLabel + '</span>'
            + '<span class="admin-issue-origin">' + issue.origin + ' · ' + issue.category + '</span>'
            + '<p class="admin-issue-msg">' + escapeHTML(issue.message) + '</p>'
            + '</div>'
            + '</div>';
    }

    function renderContentBrowser(content) {
        // Group by origin
        var groups = {};
        var items = content.flashcards.concat(content.quiz);
        for (var i = 0; i < items.length; i++) {
            var origin = items[i]._origin;
            if (!groups[origin]) groups[origin] = { flashcards: 0, quiz: 0, verified: 0, total: 0 };
            if (i < content.flashcards.length) {
                groups[origin].flashcards++;
            } else {
                groups[origin].quiz++;
            }
            groups[origin].total++;
            if (items[i].verified) groups[origin].verified++;
        }

        var html = '<div class="admin-content-grid">';
        for (var origin in groups) {
            var g = groups[origin];
            var pct = g.total > 0 ? Math.round((g.verified / g.total) * 100) : 0;
            html += '<div class="admin-content-item">'
                + '<div class="admin-content-origin">' + origin + '</div>'
                + '<div class="admin-content-counts">'
                + g.flashcards + ' FC · ' + g.quiz + ' QZ'
                + '</div>'
                + '<div class="admin-content-bar">'
                + '<div class="admin-content-fill" style="width:' + pct + '%"></div>'
                + '</div>'
                + '<span class="admin-content-pct">' + pct + '% verifie</span>'
                + '</div>';
        }
        html += '</div>';
        return html;
    }

    function filterIssues(type) {
        var rows = document.querySelectorAll('.admin-issue-row');
        var buttons = document.querySelectorAll('.admin-filter');
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('active');
            if (buttons[i].textContent.indexOf(type === 'all' ? 'Tous' : type) !== -1 || (type === 'all' && buttons[i].textContent === 'Tous')) {
                buttons[i].classList.add('active');
            }
        }
        for (var i = 0; i < rows.length; i++) {
            if (type === 'all' || rows[i].getAttribute('data-type') === type) {
                rows[i].style.display = '';
            } else {
                rows[i].style.display = 'none';
            }
        }
    }

    function escapeHTML(str) {
        if (!str) return '';
        return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.contentAudit = {
        contentAudit: contentAudit,
        gatherAllContent: gatherAllContent,
        renderAdminPanel: renderAdminPanel,
        filterIssues: filterIssues
    };

})();
