// subjects.js — Registre generique multi-matiere + hub UI
(function() {

    var registry = {};
    var SUBJECT_ORDER = [];
    var PROGRESS_KEY = 'subjectProgress';
    var _dataLoaded = false;
    var _dataLoading = null;

    // ==================== LAZY LOADER ====================
    // Subject data modules are large (~1.3 MB total). Load on first access.
    function ensureDataLoaded() {
        if (_dataLoaded) return Promise.resolve();
        if (_dataLoading) return _dataLoading;

        _dataLoading = Promise.all([
            import('./subjectData/philo.js'),
            import('./subjectData/histgeo.js'),
            import('./subjectData/maths.js'),
            import('./subjectData/ses.js'),
            import('./subjectData/physique.js'),
            import('./subjectData/francais.js'),
            import('./subjectData/figures.js'),
            import('./subjectData/quizbac1.js'),
            import('./subjectData/quizbac2.js'),
            import('./subjectData/anglais.js'),
            import('./subjectData/svt.js'),
            import('./subjectData/francais2.js'),
            import('./subjectData/espagnol.js'),
            import('./subjectData/grandoral.js')
        ].map(function(p) { return p.catch(function(err) { console.error('[Subjects] Load failed:', err); }); }))
        .then(function() {
            _dataLoaded = true;
            _dataLoading = null;
        });

        return _dataLoading;
    }

    // ==================== SECTION INTROS ====================
    var SECTION_INTROS = {
        heavy_fc: "Ce chapitre contient {fc_count} concepts cles. Maitrise-les et tu gagnes des points faciles au Bac.",
        heavy_quiz: "Ici c'est l'entrainement. {quiz_count} questions pour tester tes connaissances.",
        balanced: "{fc_count} fiches + {quiz_count} quiz. Apprends d'abord, teste-toi ensuite.",
        small: "Petit chapitre mais essentiel. Chaque point compte au Bac."
    };

    var STUDY_METHODS = [
        "1. Lis les flashcards une premiere fois sans forcer. 2. Retourne celles que tu ne sais pas. 3. Fais le quiz pour verifier.",
        "Conseil : commence par les cartes, puis teste-toi avec le quiz. Les erreurs au quiz te montrent quoi reviser.",
        "Methode en 3 temps : decouvrir (flashcards) → tester (quiz) → reviser (cartes ratees). C'est prouve scientifiquement.",
        "Astuce : explique chaque concept a voix haute. Si tu galeres, c'est la que tu dois insister."
    ];

    var MOTIVATION_HOOKS = [
        "Ce sujet tombe regulierement au Bac. Le maitriser = points quasi garantis.",
        "80% des eleves ne maitrisent pas cette partie. Toi, tu vas faire la difference.",
        "C'est le genre de chapitre ou 15 min de revision changent tout.",
        "Les correcteurs adorent quand tu maitrises ce sujet. Ca montre que tu as compris.",
        "Ce chapitre est la base de tout ce qui suit. Le comprendre maintenant = faciliter la suite."
    ];

    var COMMON_MISTAKES = [
        "L'erreur la plus frequente : apprendre par coeur sans comprendre. Essaie d'expliquer avec tes mots.",
        "Piege classique : confondre des notions proches. Fais attention aux differences subtiles dans les flashcards.",
        "Erreur courante : sauter les questions difficiles. C'est justement celles-la qui te font progresser.",
        "Le piege : relire 10 fois au lieu de se tester. Le quiz est 2x plus efficace que la relecture."
    ];

    function getIntroType(fcCount, qzCount) {
        if (fcCount === 0 && qzCount === 0) return 'small';
        if (fcCount > qzCount * 2) return 'heavy_fc';
        if (qzCount > fcCount * 2) return 'heavy_quiz';
        if (fcCount + qzCount <= 5) return 'small';
        return 'balanced';
    }

    function buildIntroHTML(subjectId, sectionIndex, fcCount, qzCount) {
        var introType = getIntroType(fcCount, qzCount);
        var introText = SECTION_INTROS[introType]
            .replace('{fc_count}', fcCount)
            .replace('{quiz_count}', qzCount);

        var hookIdx = (subjectId + sectionIndex).toString().length % MOTIVATION_HOOKS.length;
        var methodIdx = (subjectId.length + sectionIndex) % STUDY_METHODS.length;
        var mistakeIdx = (subjectId.length + sectionIndex + 1) % COMMON_MISTAKES.length;

        return '<div class="section-intro">'
            + '<div class="section-intro-why">'
            + '<span class="section-intro-badge">Pourquoi c\'est important</span>'
            + '<p>' + MOTIVATION_HOOKS[hookIdx] + '</p>'
            + '<p style="margin-top:6px;font-size:0.82rem;color:var(--text-muted);">' + introText + '</p>'
            + '</div>'
            + '<div class="section-intro-method">'
            + '<span class="section-intro-badge">Comment aborder ce chapitre</span>'
            + '<p>' + STUDY_METHODS[methodIdx] + '</p>'
            + '</div>'
            + '<div class="section-intro-mistake">'
            + '<span class="section-intro-badge">L\'erreur classique</span>'
            + '<p>' + COMMON_MISTAKES[mistakeIdx] + '</p>'
            + '</div>'
            + '</div>';
    }

    // ==================== REGISTRE ====================
    function register(def) {
        if (!def || !def.id) return;
        registry[def.id] = def;
        if (SUBJECT_ORDER.indexOf(def.id) === -1) {
            SUBJECT_ORDER.push(def.id);
        }
    }

    function getAll() {
        return SUBJECT_ORDER.map(function(id) { return registry[id]; }).filter(Boolean);
    }

    function getById(id) {
        return registry[id] || null;
    }

    // ==================== QUERY API (flashcards / quiz) ====================
    function getAllFlashcards() {
        var all = [];
        for (var i = 0; i < SUBJECT_ORDER.length; i++) {
            var subj = registry[SUBJECT_ORDER[i]];
            if (!subj || !subj.sections) continue;
            for (var j = 0; j < subj.sections.length; j++) {
                var fc = subj.sections[j].flashcards;
                if (fc) {
                    for (var k = 0; k < fc.length; k++) {
                        all.push({ question: fc[k].question, answer: fc[k].answer, mastered: false });
                    }
                }
            }
        }
        return all;
    }

    function getAllQuiz() {
        var all = [];
        for (var i = 0; i < SUBJECT_ORDER.length; i++) {
            var subj = registry[SUBJECT_ORDER[i]];
            if (!subj || !subj.sections) continue;
            for (var j = 0; j < subj.sections.length; j++) {
                var q = subj.sections[j].quiz;
                if (q) all = all.concat(q);
            }
        }
        return all;
    }

    // Deck ID: 'subj-{subjectId}-{sectionId}'
    function parseDeckId(deckId) {
        var parts = deckId.replace('subj-', '').split('-');
        var subjectId = parts[0];
        var sectionId = parts.slice(1).join('-');
        return { subjectId: subjectId, sectionId: sectionId };
    }

    function getFlashcardsByDeck(deckId) {
        var p = parseDeckId(deckId);
        var subj = registry[p.subjectId];
        if (!subj) return [];

        // No section specified → return all flashcards for this subject
        if (!p.sectionId) {
            var all = [];
            for (var i = 0; i < subj.sections.length; i++) {
                var fc = subj.sections[i].flashcards;
                if (fc) {
                    for (var k = 0; k < fc.length; k++) {
                        all.push({ question: fc[k].question, answer: fc[k].answer, mastered: false });
                    }
                }
            }
            return all;
        }

        var section = null;
        for (var i = 0; i < subj.sections.length; i++) {
            if (subj.sections[i].id === p.sectionId) { section = subj.sections[i]; break; }
        }
        if (!section || !section.flashcards) return [];
        return section.flashcards.map(function(f) {
            return { question: f.question, answer: f.answer, mastered: false };
        });
    }

    function getQuizByDeck(deckId) {
        var p = parseDeckId(deckId);
        var subj = registry[p.subjectId];
        if (!subj) return [];

        // No section specified → return all quiz for this subject
        if (!p.sectionId) {
            var all = [];
            for (var i = 0; i < subj.sections.length; i++) {
                var q = subj.sections[i].quiz;
                if (q) all = all.concat(q);
            }
            return all;
        }

        var section = null;
        for (var i = 0; i < subj.sections.length; i++) {
            if (subj.sections[i].id === p.sectionId) { section = subj.sections[i]; break; }
        }
        if (!section || !section.quiz) return [];
        return section.quiz;
    }

    // ==================== PROGRESSION ====================
    function loadProgress() {
        return window.StudFlow.storage.loadData(PROGRESS_KEY, {});
    }

    function saveProgress(data) {
        window.StudFlow.storage.saveData(PROGRESS_KEY, data);
    }

    function getProgress(subjectId) {
        var subj = registry[subjectId];
        if (!subj) return { visited: [], total: 0 };
        var prog = loadProgress();
        var sp = prog[subjectId] || { visited: [] };
        return { visited: sp.visited || [], total: subj.sections.length };
    }

    function markVisited(subjectId, sectionId) {
        var prog = loadProgress();
        if (!prog[subjectId]) prog[subjectId] = { visited: [], lastVisit: null };
        if (prog[subjectId].visited.indexOf(sectionId) === -1) {
            prog[subjectId].visited.push(sectionId);
        }
        prog[subjectId].lastVisit = new Date().toISOString();
        saveProgress(prog);

        // XP + badges
        if (window.StudFlow.gamification) {
            window.StudFlow.gamification.addXP('bac_section');
        }
        if (window.StudFlow.badges) {
            window.StudFlow.badges.incrementCounter(subjectId + 'Sections');
            window.StudFlow.badges.checkAll();
        }
        if (window.StudFlow.events) {
            window.StudFlow.events.emit('section:visited', { subjectId: subjectId, sectionId: sectionId });
        }
    }

    // ==================== UI — HUB ====================
    var currentView = 'hub';
    var currentSubjectId = null;

    function showHub() {
        currentView = 'hub';
        currentSubjectId = null;
        window.StudFlow.app.showScreen('matieres');
        var container = document.getElementById('matieres-content');
        if (container && !_dataLoaded) {
            container.innerHTML = '<div style="text-align:center;padding:3rem 1rem;"><div class="loader-ring" style="margin:0 auto 1rem;width:40px;height:40px;"></div><p style="color:var(--text-muted);font-size:0.88rem;">Chargement des matieres...</p></div>';
        }
        ensureDataLoaded().then(function() { renderHub(); });
    }

    function renderSubjectCard(subj) {
        var prog = getProgress(subj.id);
        var visitedCount = prog.visited.length;
        var totalSections = prog.total;
        var pct = totalSections > 0 ? Math.round((visitedCount / totalSections) * 100) : 0;

        var fcCount = 0;
        var qzCount = 0;
        for (var j = 0; j < subj.sections.length; j++) {
            fcCount += (subj.sections[j].flashcards || []).length;
            qzCount += (subj.sections[j].quiz || []).length;
        }

        var isLocked = subj.id !== 'francais' && window.StudFlow.premium && !window.StudFlow.premium.hasAccess('matieres_premium');
        var lockClass = isLocked ? ' prem-lock-overlay locked' : '';

        return '<div class="bac-section-card' + lockClass + '" data-action="subjects.showSubject" data-param="' + subj.id + '">'
            + '<div class="bac-section-icon" style="background: var(--' + subj.color + ')">' + subj.icon + '</div>'
            + '<div class="bac-section-info">'
            + '<h3>' + subj.name + '</h3>'
            + '<div class="matieres-subject-progress">'
            + '<div class="matieres-progress-bar"><div class="matieres-progress-fill" style="width:' + pct + '%;background:var(--' + subj.color + ')"></div></div>'
            + '<span class="matieres-progress-text">' + visitedCount + '/' + totalSections + '</span>'
            + '</div>'
            + '<div class="bac-section-badges">'
            + '<span class="bac-badge">' + fcCount + ' flashcards</span>'
            + '<span class="bac-badge">' + qzCount + ' quiz</span>'
            + '</div>'
            + '</div>'
            + '<span class="bac-section-arrow">\u2192</span>'
            + '</div>';
    }

    function renderHub() {
        var container = document.getElementById('matieres-content');
        if (!container) return;

        currentView = 'hub';
        var subjects = getAll();
        var picker = window.StudFlow.subjectPicker;
        var hasFilter = picker && picker.isCompleted();

        var html = '<button class="back-btn" data-action="screen:dashboard">\u2190 Retour</button>'
            + '<div class="bac-header">'
            + '<h2>Matieres</h2>'
            + '<p>Tout pour reussir le bac — choisis ta matiere</p>'
            + '</div>';

        if (hasFilter) {
            // Active subjects first
            var activeSubjects = [];
            var otherSubjects = [];
            for (var i = 0; i < subjects.length; i++) {
                if (picker.isSubjectActive(subjects[i].id)) {
                    activeSubjects.push(subjects[i]);
                } else {
                    otherSubjects.push(subjects[i]);
                }
            }

            html += '<div class="bac-sections">';
            for (var a = 0; a < activeSubjects.length; a++) {
                html += renderSubjectCard(activeSubjects[a]);
            }
            html += '</div>';

            // Other subjects in collapsed section
            if (otherSubjects.length > 0) {
                html += '<details class="sp-autres-details">'
                    + '<summary class="sp-autres-summary">Autres matieres (' + otherSubjects.length + ')</summary>'
                    + '<div class="bac-sections">';
                for (var b = 0; b < otherSubjects.length; b++) {
                    html += renderSubjectCard(otherSubjects[b]);
                }
                html += '</div></details>';
            }
        } else {
            // No filter — show all normally
            html += '<div class="bac-sections">';
            for (var k = 0; k < subjects.length; k++) {
                html += renderSubjectCard(subjects[k]);
            }
            html += '</div>';
        }

        container.innerHTML = html;
    }

    // ==================== SECTION MASTERY ====================
    function getSectionMastery(subjectId, sectionId) {
        var subj = registry[subjectId];
        if (!subj) return { visited: false, fcMastered: 0, fcTotal: 0, qzScore: 0, qzTotal: 0, status: 'not_started' };

        var section = null;
        for (var i = 0; i < subj.sections.length; i++) {
            if (subj.sections[i].id === sectionId) { section = subj.sections[i]; break; }
        }
        if (!section) return { visited: false, fcMastered: 0, fcTotal: 0, qzScore: 0, qzTotal: 0, status: 'not_started' };

        var prog = loadProgress();
        var sp = prog[subjectId] || { visited: [] };
        var isVisited = (sp.visited || []).indexOf(sectionId) !== -1;

        var fcList = section.flashcards || [];
        var fcTotal = fcList.length;
        var fcMastered = 0;

        // Count mastered flashcards via SR state (interval >= 7)
        if (window.StudFlow.spacedRepetition && fcTotal > 0) {
            var srState = window.StudFlow.storage.loadData('spacedRep', { cards: {} });
            for (var f = 0; f < fcList.length; f++) {
                var cid = window.StudFlow.spacedRepetition.cardId(fcList[f].question, fcList[f].answer);
                var cs = srState.cards[cid];
                if (cs && cs.interval >= 7) {
                    fcMastered++;
                }
            }
        }

        // Get quiz mastery from adaptive
        var qzTotal = (section.quiz || []).length;
        var qzScore = 0;
        if (window.StudFlow.adaptive) {
            var adaptiveState = window.StudFlow.storage.loadData('studflow_adaptive', { topics: {} });
            var deckId = 'subj-' + subjectId + '-' + sectionId;
            var topicData = adaptiveState.topics[deckId];
            if (topicData) {
                qzScore = Math.round((topicData.mastery || 0) * 100);
            }
        }

        // Determine status
        var status = 'not_started';
        if (isVisited) {
            var fcRatio = fcTotal > 0 ? fcMastered / fcTotal : 0;
            if (fcRatio >= 0.7 || qzScore >= 70) {
                status = 'completed';
            } else {
                status = 'in_progress';
            }
        }

        return {
            visited: isVisited,
            fcMastered: fcMastered,
            fcTotal: fcTotal,
            qzScore: qzScore,
            qzTotal: qzTotal,
            status: status
        };
    }

    // ==================== UI — SUBJECT DETAIL ====================
    function showSubject(subjectId) {
        ensureDataLoaded().then(function() { _showSubjectInner(subjectId); });
    }
    function _showSubjectInner(subjectId) {
        var subj = registry[subjectId];
        if (!subj) { renderHub(); return; }

        currentView = 'subject';
        currentSubjectId = subjectId;

        var container = document.getElementById('matieres-content');
        if (!container) return;

        var prog = getProgress(subjectId);
        var isGated = subjectId !== 'francais' && window.StudFlow.premium && !window.StudFlow.premium.hasAccess('matieres_premium');

        // Compute mastery for all sections
        var masteryData = [];
        var completedCount = 0;
        var totalFcMastered = 0;
        var totalFcCount = 0;
        var totalQzPassed = 0;
        for (var m = 0; m < subj.sections.length; m++) {
            var mData = getSectionMastery(subjectId, subj.sections[m].id);
            masteryData.push(mData);
            if (mData.status === 'completed') completedCount++;
            totalFcMastered += mData.fcMastered;
            totalFcCount += mData.fcTotal;
            if (mData.qzScore >= 70) totalQzPassed++;
        }
        var overallPct = subj.sections.length > 0 ? Math.round((completedCount / subj.sections.length) * 100) : 0;

        var html = '<button class="back-btn" data-action="subjects.showHub">\u2190 Retour</button>'
            + '<div class="bac-header">'
            + '<h2>' + subj.icon + ' ' + subj.name + '</h2>'
            + '<p>' + subj.sections.length + ' sections &mdash; '
            + prog.visited.length + '/' + prog.total + ' explorees</p>'
            + '</div>';

        // Progress overview donut
        html += '<div class="subj-progress-overview">'
            + '<div class="subj-progress-circle">'
            + '<svg viewBox="0 0 36 36" class="subj-donut">'
            + '<path class="subj-donut-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>'
            + '<path class="subj-donut-fill" stroke-dasharray="' + overallPct + ', 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>'
            + '</svg>'
            + '<span class="subj-progress-pct">' + overallPct + '%</span>'
            + '</div>'
            + '<div class="subj-progress-info">'
            + '<div class="subj-progress-label">' + completedCount + '/' + subj.sections.length + ' sections explorees</div>'
            + '<div class="subj-progress-detail">' + totalFcMastered + ' flashcards maitrisees \u00b7 ' + totalQzPassed + ' quiz reussis</div>'
            + '</div>'
            + '</div>';

        // Discovery mode: section 0 free, others locked with upsell
        if (isGated) {
            html += '<div style="background:var(--bg-glass);border:1px solid var(--accent);border-radius:12px;padding:12px 16px;margin-bottom:16px;font-size:0.85rem;color:var(--text-muted);">'
                + '\uD83D\uDD0D <strong>Decouverte gratuite</strong> \u2014 La premiere section est offerte. Passe en Premium pour tout debloquer.'
                + '</div>';
        }

        html += '<p class="subj-guide-hint">\uD83C\uDFAF Choisis ton chapitre pour commencer</p>';

        html += '<div class="bac-sections">';
        for (var i = 0; i < subj.sections.length; i++) {
            var s = subj.sections[i];
            var sm = masteryData[i];
            var sectionLocked = isGated && i >= 1;
            var lockClass = sectionLocked ? ' prem-lock-overlay locked' : '';

            // Status indicator
            var statusHTML = '';
            if (sm.status === 'completed') {
                statusHTML = '<div class="section-status section-status-done">\u2713</div>';
            } else if (sm.status === 'in_progress') {
                statusHTML = '<div class="section-status section-status-progress">\u25CF</div>';
            } else {
                statusHTML = '<div class="section-status section-status-new">\u25CB</div>';
            }

            // Stats detail line
            var statsLine = sm.fcMastered + '/' + sm.fcTotal + ' flashcards \u00b7 ' + sm.qzScore + '% quiz';

            html += '<div class="bac-section-card' + lockClass + '" data-action="subjects.openSection" data-param="' + subjectId + '" data-param2="' + i + '">'
                + statusHTML
                + '<div class="bac-section-icon" style="background: var(--' + subj.color + ')">' + s.icon + '</div>'
                + '<div class="bac-section-info">'
                + '<h3>' + s.title + '</h3>'
                + '<div class="bac-section-badges">'
                + '<span class="bac-badge">' + (s.flashcards || []).length + ' flashcards</span>'
                + '<span class="bac-badge">' + (s.quiz || []).length + ' quiz</span>'
                + '</div>'
                + '<div class="section-detail-stats">' + statsLine + '</div>'
                + '</div>'
                + '<span class="bac-section-cta">\uD83C\uDFAF Reviser</span>'
                + '</div>';
        }
        html += '</div>';

        // Upsell at bottom if gated
        if (isGated && window.StudFlow.premium) {
            html += window.StudFlow.premium.renderInlineUpsell('matieres_premium');
        }

        container.innerHTML = html;
    }

    // ==================== UI — SECTION DETAIL ====================
    function openSection(subjectId, sectionIndex) {
        // Non-francais: section 0 = free discovery, sections 1+ = premium
        if (subjectId !== 'francais' && sectionIndex >= 1 && window.StudFlow.premium && !window.StudFlow.premium.hasAccess('matieres_premium')) {
            window.StudFlow.premium.showPaywall('matieres_premium');
            return;
        }
        var subj = registry[subjectId];
        if (!subj) return;
        var s = subj.sections[sectionIndex];
        if (!s) return;

        currentView = 'section';

        var container = document.getElementById('matieres-content');
        if (!container) return;

        var deckId = 'subj-' + subjectId + '-' + s.id;
        var fcCount = (s.flashcards || []).length;
        var qzCount = (s.quiz || []).length;

        var introHTML = buildIntroHTML(subjectId, sectionIndex, fcCount, qzCount);

        var html = '<button class="back-btn" data-action="subjects.showSubject" data-param="' + subjectId + '">\u2190 Retour</button>'
            + '<div class="bac-section-detail">'
            + '<div class="bac-section-header">'
            + '<span class="bac-section-detail-icon" style="background: var(--' + subj.color + ')">' + s.icon + '</span>'
            + '<h2>' + s.title + '</h2>'
            + '</div>'
            + introHTML
            + '<div class="bac-section-content">' + s.content + '</div>'
            + '<div class="bac-section-actions">';

        if (fcCount > 0) {
            html += '<button class="breathing-btn primary" data-action="flashcards.start" data-param="' + deckId + '">'
                + '\uD83C\uDCB4 Flashcards (' + fcCount + ')'
                + '</button>';
        }
        if (qzCount > 0) {
            html += '<button class="breathing-btn secondary" data-action="quiz.start" data-param="' + deckId + '">'
                + '\u2753 Quiz (' + qzCount + ')'
                + '</button>';
        }

        html += '</div></div>';

        container.innerHTML = html;

        // Track progression
        markVisited(subjectId, s.id);
    }

    // ==================== RENDER DISPATCH ====================
    function renderMain() {
        if (currentView === 'hub') {
            renderHub();
        } else if (currentView === 'subject' && currentSubjectId) {
            showSubject(currentSubjectId);
        } else {
            renderHub();
        }
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.subjects = {
        register: register,
        getAll: getAll,
        getById: getById,
        getAllFlashcards: getAllFlashcards,
        getAllQuiz: getAllQuiz,
        getFlashcardsByDeck: getFlashcardsByDeck,
        getQuizByDeck: getQuizByDeck,
        showHub: showHub,
        renderHub: renderHub,
        renderMain: renderMain,
        showSubject: showSubject,
        openSection: openSection,
        getProgress: getProgress,
        markVisited: markVisited,
        preload: ensureDataLoaded
    };

})();
