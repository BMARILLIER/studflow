// missions.js — Module 2 : Mission Reussite (parcours gamifie)
(function() {

    var STORAGE_KEY = 'missions';

    // ==================== DEFINITIONS DES 5 MISSIONS ====================
    var MISSION_ORDER = ['decouvrir', 'organiser', 'reviser', 'entrainer', 'reussir'];

    var MISSION_DEFS = {
        decouvrir: {
            id: 'decouvrir',
            title: 'Decouvrir ton profil',
            subtitle: 'Fais connaissance avec StudFlow et decouvre ton style.',
            icon: '\uD83D\uDD0D',
            color: 'accent',
            bonus: 50,
            steps: [
                { id: 'diag_complete', title: 'Fais le diagnostic', desc: 'Reponds au quiz pour decouvrir ton profil.', xp: 20,
                  check: function(ctx) { return ctx.hasDiagnostic; },
                  action: { fn: 'StudFlow.diagnostic.start', label: 'Faire le diagnostic' } },
                { id: 'conseil_read', title: 'Lis un conseil', desc: 'Consulte au moins un conseil du Coach.', xp: 15,
                  check: function(ctx) { return ctx.conseilsViewed >= 1; },
                  action: { fn: 'StudFlow.app.showScreen', args: ['conseils'], label: 'Voir les conseils' } },
                { id: 'coach_msg', title: 'Parle au Coach', desc: 'Envoie au moins un message au Coach.', xp: 15,
                  check: function(ctx) { return ctx.chatMessages >= 1; },
                  action: { fn: 'StudFlow.app.showScreen', args: ['coach'], label: 'Ouvrir le Coach' } }
            ]
        },
        organiser: {
            id: 'organiser',
            title: 'Organiser ton travail',
            subtitle: 'Mets en place tes habitudes de revision.',
            icon: '\uD83D\uDCC5',
            color: 'sky',
            bonus: 60,
            steps: [
                { id: 'focus_1', title: '1ere session focus', desc: 'Termine ta premiere session de concentration.', xp: 20,
                  check: function(ctx) { return ctx.focusSessions >= 1; },
                  action: { fn: 'StudFlow.focus.show', label: 'Lancer le Focus' } },
                { id: 'focus_3', title: '3 sessions focus', desc: 'Enchaine 3 sessions focus au total.', xp: 25,
                  check: function(ctx) { return ctx.focusSessions >= 3; },
                  action: { fn: 'StudFlow.focus.show', label: 'Lancer le Focus' } },
                { id: 'plan_created', title: 'Cree ton Plan Bac', desc: 'Configure ton planning de revision.', xp: 25,
                  check: function(ctx) { return ctx.hasPlanBac; },
                  action: { fn: 'StudFlow.planbac.show', label: 'Creer un Plan Bac' } },
                { id: 'streak_3', title: '3 jours consecutifs', desc: 'Reviens 3 jours de suite sur StudFlow.', xp: 30,
                  check: function(ctx) { return ctx.streak >= 3; },
                  action: null }
            ]
        },
        reviser: {
            id: 'reviser',
            title: 'Reviser efficacement',
            subtitle: 'Cree et maitrise tes fiches de revision.',
            icon: '\uD83D\uDCDD',
            color: 'mint',
            bonus: 70,
            steps: [
                { id: 'fiche_1', title: 'Cree une fiche', desc: 'Genere ta premiere fiche de revision.', xp: 20,
                  check: function(ctx) { return ctx.fichesCreated >= 1; },
                  action: { fn: 'StudFlow.app.showScreen', args: ['generators'], label: 'Creer une fiche' } },
                { id: 'fiche_3', title: '3 fiches creees', desc: 'Genere 3 fiches au total.', xp: 25,
                  check: function(ctx) { return ctx.fichesCreated >= 3; },
                  action: { fn: 'StudFlow.app.showScreen', args: ['generators'], label: 'Creer des fiches' } },
                { id: 'sr_session', title: 'Revision espacee', desc: 'Fais une session de revision espacee.', xp: 20,
                  check: function(ctx) { return ctx.srTotalReviews >= 1; },
                  action: { fn: 'StudFlow.spacedRepetition.startSession', label: 'Lancer la revision SR' } },
                { id: 'sr_mastered_3', title: '3 cartes maitrisees SR', desc: 'Maitrise 3 cartes en revision espacee.', xp: 30,
                  check: function(ctx) { return ctx.srMasteredCards >= 3; },
                  action: { fn: 'StudFlow.spacedRepetition.startSession', label: 'Revision SR' } }
            ]
        },
        entrainer: {
            id: 'entrainer',
            title: 'T\'entrainer',
            subtitle: 'Teste tes connaissances avec quiz et flashcards.',
            icon: '\u26A1',
            color: 'sun',
            bonus: 70,
            steps: [
                { id: 'quiz_1', title: '1er quiz', desc: 'Termine ton premier quiz.', xp: 20,
                  check: function(ctx) { return ctx.quizCompleted >= 1; },
                  action: { fn: 'StudFlow.quiz.start', label: 'Lancer un quiz' } },
                { id: 'quiz_5', title: '5 quiz termines', desc: 'Complete 5 quiz au total.', xp: 25,
                  check: function(ctx) { return ctx.quizCompleted >= 5; },
                  action: { fn: 'StudFlow.quiz.start', label: 'Faire un quiz' } },
                { id: 'fc_mastered_5', title: '5 flashcards maitrisees', desc: 'Maitrise 5 flashcards au total.', xp: 25,
                  check: function(ctx) { return ctx.masteredCards >= 5; },
                  action: { fn: 'StudFlow.flashcards.start', label: 'Lancer les flashcards' } },
                { id: 'bac_section', title: 'Explore le Bac francais', desc: 'Consulte au moins une section du module Bac.', xp: 20,
                  check: function(ctx) { return ctx.bacSections >= 1; },
                  action: { fn: 'StudFlow.bacfrancais.show', label: 'Ouvrir Bac Francais' } }
            ]
        },
        reussir: {
            id: 'reussir',
            title: 'Reussir ton examen',
            subtitle: 'Le dernier defi. Tu es pret(e) !',
            icon: '\uD83C\uDFC6',
            color: 'hot',
            bonus: 100,
            steps: [
                { id: 'urgence_1', title: 'Mode Urgence', desc: 'Utilise le mode urgence examen.', xp: 25,
                  check: function(ctx) { return ctx.urgenceCompleted >= 1; },
                  action: { fn: 'StudFlow.urgence.show', label: 'Mode Urgence' } },
                { id: 'stress_3', title: '3 sessions anti-stress', desc: 'Fais 3 sessions dans le module anti-stress.', xp: 20,
                  check: function(ctx) { return ctx.stressSessions >= 3; },
                  action: { fn: 'StudFlow.stress.show', label: 'Anti-stress' } },
                { id: 'focus_total_60', title: '60 min focus total', desc: 'Cumule 60 minutes de focus au total.', xp: 30,
                  check: function(ctx) { return ctx.focusTotalMinutes >= 60; },
                  action: { fn: 'StudFlow.focus.show', label: 'Lancer le Focus' } },
                { id: 'xp_500', title: 'Atteins 500 XP', desc: 'Accumule 500 points d\'experience.', xp: 30,
                  check: function(ctx) { return ctx.xp >= 500; },
                  action: null },
                { id: 'missions_4', title: '4 missions terminees', desc: 'Complete les 4 missions precedentes.', xp: 50,
                  check: function(ctx) { return ctx.completedMissions >= 4; },
                  action: null }
            ]
        }
    };

    // ==================== STATE ====================
    function getDefaultState() {
        var missions = {};
        for (var i = 0; i < MISSION_ORDER.length; i++) {
            var mid = MISSION_ORDER[i];
            var def = MISSION_DEFS[mid];
            var steps = {};
            for (var j = 0; j < def.steps.length; j++) {
                steps[def.steps[j].id] = { done: false, doneAt: null };
            }
            missions[mid] = {
                unlockedAt: i === 0 ? new Date().toISOString() : null,
                completedAt: null,
                steps: steps
            };
        }
        return { version: 1, missions: missions };
    }

    function loadState() {
        var data = window.StudFlow.storage.loadData(STORAGE_KEY, null);
        if (!data || !data.missions) {
            data = getDefaultState();
            saveState(data);
        }
        // Ensure first mission is always unlocked
        if (data.missions.decouvrir && !data.missions.decouvrir.unlockedAt) {
            data.missions.decouvrir.unlockedAt = new Date().toISOString();
            saveState(data);
        }
        return data;
    }

    function saveState(data) {
        window.StudFlow.storage.saveData(STORAGE_KEY, data);
    }

    // ==================== CONTEXT BUILDER ====================
    function buildContext() {
        var hasDiagnostic = window.StudFlow.storage.getUserProfile() !== null;
        var focusStats = window.StudFlow.storage.loadData('focusStats', { sessions: 0, totalMinutes: 0 });
        var ficheHistory = window.StudFlow.storage.loadData('ficheGenHistory', { total: 0 });
        var quizHistory = window.StudFlow.storage.loadData('quizGenHistory', { total: 0 });
        var urgenceHistory = window.StudFlow.storage.loadData('urgenceHistory', []);
        var conseilsHistory = window.StudFlow.storage.loadData('conseilsHistory', { total: 0 });
        var coachChat = window.StudFlow.storage.loadData('coachChat', { messageCount: 0 });
        var planBac = window.StudFlow.storage.loadData('planBac', null);
        var badgeCounters = window.StudFlow.storage.loadData('badges', { counters: {} }).counters || {};
        var gamStats = window.StudFlow.gamification ? window.StudFlow.gamification.getStats() : {};
        var srState = window.StudFlow.storage.loadData('spacedRep', { stats: {} });
        var appState = window.StudFlow.app ? window.StudFlow.app.getState() : {};
        var state = loadState();
        var completedMissions = MISSION_ORDER.filter(function(id) {
            return state.missions[id] && state.missions[id].completedAt;
        }).length;

        return {
            hasDiagnostic: hasDiagnostic,
            focusSessions: focusStats.sessions || 0,
            focusTotalMinutes: focusStats.totalMinutes || 0,
            streak: gamStats.streak || 0,
            fichesCreated: ficheHistory.total || 0,
            quizCompleted: quizHistory.total || 0,
            stressSessions: badgeCounters.stressSessions || 0,
            urgenceCompleted: urgenceHistory.length,
            bacSections: badgeCounters.bacSections || 0,
            srMasteredCards: window.StudFlow.spacedRepetition
                ? window.StudFlow.spacedRepetition.getMasteredCount() : 0,
            srTotalReviews: (srState.stats && srState.stats.totalReviews) || 0,
            chatMessages: coachChat.messageCount || 0,
            conseilsViewed: conseilsHistory.total || 0,
            hasPlanBac: planBac !== null && planBac.config != null,
            masteredCards: appState.masteredCards || 0,
            xp: gamStats.xp || 0,
            completedMissions: completedMissions
        };
    }

    // ==================== XP AWARD ====================
    function awardXP(amount, label) {
        if (!window.StudFlow.gamification || amount <= 0) return;
        var gam = window.StudFlow.gamification;
        var stats = gam.getStats();
        var oldLevel = gam.getCurrentLevel(stats.xp);
        stats.xp += amount;
        stats.totalActions++;
        window.StudFlow.storage.saveData('gamification', stats);
        gam.showToast('+' + amount + ' XP — ' + label, 'xp', '\u2728');
        var newLevel = gam.getCurrentLevel(stats.xp);
        if (newLevel.level > oldLevel.level) {
            setTimeout(function() {
                gam.showToast('Niveau ' + newLevel.level + ' ! ' + newLevel.emoji + ' ' + newLevel.name, 'streak', '\uD83C\uDF89');
                gam.spawnConfetti();
            }, 600);
        }
        gam.updateXPDisplay();
    }

    // ==================== CHECK ALL ====================
    function checkAll() {
        var state = loadState();
        var ctx = buildContext();
        var changed = false;

        for (var i = 0; i < MISSION_ORDER.length; i++) {
            var mid = MISSION_ORDER[i];
            var def = MISSION_DEFS[mid];
            var ms = state.missions[mid];
            if (!ms || !ms.unlockedAt) continue;

            var allDone = true;
            for (var j = 0; j < def.steps.length; j++) {
                var step = def.steps[j];
                var stepState = ms.steps[step.id];
                if (!stepState) {
                    ms.steps[step.id] = { done: false, doneAt: null };
                    stepState = ms.steps[step.id];
                }
                if (stepState.done) continue;

                if (step.check(ctx)) {
                    stepState.done = true;
                    stepState.doneAt = new Date().toISOString();
                    changed = true;
                    awardXP(step.xp, step.title);
                    if (window.StudFlow.events) {
                        window.StudFlow.events.emit('mission:stepCompleted', { mission: mid, step: step.id, title: step.title });
                    }
                } else {
                    allDone = false;
                }
            }

            // Check all steps again after potential awards
            if (!allDone) {
                allDone = true;
                for (var k = 0; k < def.steps.length; k++) {
                    if (!ms.steps[def.steps[k].id] || !ms.steps[def.steps[k].id].done) {
                        allDone = false;
                        break;
                    }
                }
            }

            if (allDone && !ms.completedAt) {
                ms.completedAt = new Date().toISOString();
                changed = true;
                awardXP(def.bonus, 'Mission "' + def.title + '" terminee !');
                if (window.StudFlow.events) {
                    window.StudFlow.events.emit('mission:completed', { mission: mid, title: def.title, bonus: def.bonus });
                }
                // Unlock next mission
                var nextIdx = i + 1;
                if (nextIdx < MISSION_ORDER.length) {
                    var nextMid = MISSION_ORDER[nextIdx];
                    if (state.missions[nextMid] && !state.missions[nextMid].unlockedAt) {
                        state.missions[nextMid].unlockedAt = new Date().toISOString();
                    }
                }
            }
        }

        if (changed) {
            saveState(state);
            if (window.StudFlow.badges) window.StudFlow.badges.checkAll();
        }

        return state;
    }

    // ==================== PROGRESS HELPERS ====================
    function getProgress() {
        var state = loadState();
        var completed = 0;
        for (var i = 0; i < MISSION_ORDER.length; i++) {
            if (state.missions[MISSION_ORDER[i]] && state.missions[MISSION_ORDER[i]].completedAt) {
                completed++;
            }
        }
        return { total: MISSION_ORDER.length, completed: completed, pct: Math.round((completed / MISSION_ORDER.length) * 100) };
    }

    function getMissionProgress(id) {
        var state = loadState();
        var def = MISSION_DEFS[id];
        var ms = state.missions[id];
        if (!def || !ms) return { total: 0, done: 0, pct: 0, isLocked: true, isComplete: false };
        var total = def.steps.length;
        var done = 0;
        for (var j = 0; j < def.steps.length; j++) {
            if (ms.steps[def.steps[j].id] && ms.steps[def.steps[j].id].done) done++;
        }
        return {
            total: total,
            done: done,
            pct: total > 0 ? Math.round((done / total) * 100) : 0,
            isLocked: !ms.unlockedAt,
            isComplete: !!ms.completedAt
        };
    }

    // ==================== EXECUTE ACTION ====================
    function executeAction(actionDef) {
        if (!actionDef || !actionDef.fn) return;
        var parts = actionDef.fn.split('.');
        var obj = window;
        for (var i = 0; i < parts.length - 1; i++) {
            obj = obj[parts[i]];
            if (!obj) return;
        }
        var fn = obj[parts[parts.length - 1]];
        if (typeof fn === 'function') {
            if (actionDef.args) {
                fn.apply(obj, actionDef.args);
            } else {
                fn.call(obj);
            }
        }
    }

    // ==================== RENDER — MISSION LIST ====================
    var currentView = 'list'; // 'list' or mission id
    var currentMissionId = null;

    function renderMain() {
        if (currentView === 'list') {
            renderMissionList();
        } else {
            renderMissionDetail(currentMissionId);
        }
    }

    function renderMissionList() {
        var container = document.getElementById('missions-content');
        if (!container) return;

        currentView = 'list';
        currentMissionId = null;

        var progress = getProgress();
        var state = loadState();

        var html = '<div class="mr-header">'
            + '<h2>Mission Reussite</h2>'
            + '<p style="color:var(--text-muted);margin-bottom:1rem;">Progresse etape par etape vers la reussite.</p>'
            + '</div>';

        // Global progress bar
        html += '<div style="margin-bottom:1.5rem;">'
            + '<div style="display:flex;justify-content:space-between;margin-bottom:0.4rem;">'
            + '<span style="font-size:0.85rem;color:var(--text-muted);">' + progress.completed + '/' + progress.total + ' missions</span>'
            + '<span style="font-size:0.85rem;color:var(--text-muted);">' + progress.pct + '%</span>'
            + '</div>'
            + '<div class="mr-global-bar"><div class="mr-global-fill" style="width:' + progress.pct + '%"></div></div>'
            + '</div>';

        // Mission cards
        for (var i = 0; i < MISSION_ORDER.length; i++) {
            var mid = MISSION_ORDER[i];
            var def = MISSION_DEFS[mid];
            var mp = getMissionProgress(mid);
            var ms = state.missions[mid];

            var isPremLocked = i >= 2 && window.StudFlow.premium && !window.StudFlow.premium.hasAccess('missions_premium');

            var cardClass = 'mr-card ' + def.color;
            if (isPremLocked) cardClass += ' prem-lock-overlay locked';
            else if (mp.isComplete) cardClass += ' mr-done';
            else if (mp.isLocked) cardClass += ' mr-locked';
            else cardClass += ' mr-active';

            var statusBadge = '';
            if (isPremLocked) statusBadge = '<span class="mr-status-badge locked">\uD83D\uDD12 Premium</span>';
            else if (mp.isComplete) statusBadge = '<span class="mr-status-badge done">\u2713 Terminee</span>';
            else if (mp.isLocked) statusBadge = '<span class="mr-status-badge locked">\uD83D\uDD12 Verrouillee</span>';
            else statusBadge = '<span class="mr-status-badge active">En cours</span>';

            var onclick = (mp.isLocked || isPremLocked) ? '' : ' data-action="missions.showMission" data-param="' + mid + '"';

            html += '<div class="' + cardClass + '"' + onclick + '>'
                + '<div class="mr-card-header">'
                + '<span class="mr-card-icon">' + def.icon + '</span>'
                + '<div class="mr-card-title-block">'
                + '<span class="mr-card-num">Mission ' + (i + 1) + '</span>'
                + '<span class="mr-card-title">' + def.title + '</span>'
                + '</div>'
                + statusBadge
                + '</div>'
                + '<div class="mr-card-bar"><div class="mr-card-fill ' + def.color + '" style="width:' + mp.pct + '%"></div></div>'
                + '<div style="display:flex;justify-content:space-between;font-size:0.75rem;color:var(--text-muted);margin-top:0.3rem;">'
                + '<span>' + mp.done + '/' + mp.total + ' etapes</span>'
                + '<span>+' + def.bonus + ' XP bonus</span>'
                + '</div>'
                + '</div>';
        }

        container.innerHTML = html;
    }

    // ==================== RENDER — MISSION DETAIL ====================
    function renderMissionDetail(missionId) {
        var container = document.getElementById('missions-content');
        if (!container) return;

        var def = MISSION_DEFS[missionId];
        if (!def) { renderMissionList(); return; }

        currentView = 'detail';
        currentMissionId = missionId;

        var state = loadState();
        var ms = state.missions[missionId];
        var mp = getMissionProgress(missionId);

        var html = '<div class="mr-detail-header">'
            + '<a class="mr-back-link" data-action="missions.showList">\u2190 Toutes les missions</a>'
            + '<div class="mr-detail-icon">' + def.icon + '</div>'
            + '<h2>' + def.title + '</h2>'
            + '<p style="color:var(--text-muted);">' + def.subtitle + '</p>'
            + '<div style="margin-top:0.8rem;font-size:0.85rem;color:var(--text-muted);">'
            + mp.done + '/' + mp.total + ' etapes &mdash; Bonus : +' + def.bonus + ' XP'
            + '</div>'
            + '<div class="mr-global-bar" style="margin-top:0.8rem;"><div class="mr-global-fill ' + def.color + '" style="width:' + mp.pct + '%"></div></div>'
            + '</div>';

        // Steps
        html += '<div class="mr-steps">';
        for (var j = 0; j < def.steps.length; j++) {
            var step = def.steps[j];
            var ss = ms.steps[step.id] || { done: false };

            var stepClass = 'mr-step';
            if (ss.done) stepClass += ' mr-step-done';
            else if (j === 0 || (ms.steps[def.steps[j - 1].id] && ms.steps[def.steps[j - 1].id].done)) {
                stepClass += ' mr-step-active';
            }

            var checkIcon = ss.done ? '\u2705' : '\u2B1C';
            var xpBadge = '<span class="mr-step-xp">+' + step.xp + ' XP</span>';

            html += '<div class="' + stepClass + '">'
                + '<div class="mr-step-header">'
                + '<span class="mr-step-check">' + checkIcon + '</span>'
                + '<span class="mr-step-title">' + step.title + '</span>'
                + xpBadge
                + '</div>'
                + '<div class="mr-step-desc">' + step.desc + '</div>';

            if (!ss.done && step.action) {
                html += '<button class="mr-step-action-btn" data-action="missions.executeAction" data-param="' + escapeActionAttr(step.action) + '">' + step.action.label + ' \u2192</button>';
            }

            html += '</div>';
        }
        html += '</div>';

        // Completion message
        if (mp.isComplete) {
            html += '<div class="mr-complete-msg">'
                + '\uD83C\uDF89 Mission terminee ! +' + def.bonus + ' XP bonus gagnes.'
                + '</div>';
        }

        container.innerHTML = html;
    }

    function escapeActionJSON(action) {
        // Build a safe inline JSON for onclick
        var obj = { fn: action.fn, label: action.label };
        if (action.args) obj.args = action.args;
        return "'" + JSON.stringify(obj).replace(/'/g, "\\'") + "'";
    }

    function escapeActionAttr(action) {
        // Build HTML-attribute-safe JSON for data-param
        var obj = { fn: action.fn, label: action.label };
        if (action.args) obj.args = action.args;
        return JSON.stringify(obj).replace(/"/g, '&quot;');
    }

    // ==================== DASHBOARD WIDGET ====================
    function renderDashboardWidget() {
        var progress = getProgress();
        var state = loadState();

        if (progress.completed === progress.total && progress.total > 0) {
            return '<div class="mr-widget mr-widget-done" data-action="missions.show">'
                + '<span class="mr-widget-icon">\uD83C\uDFC6</span>'
                + '<div class="mr-widget-info">'
                + '<span class="mr-widget-title">Toutes les missions terminees !</span>'
                + '<span class="mr-widget-sub">Bravo, tu as tout debloque.</span>'
                + '</div>'
                + '<span class="mr-widget-arrow">\u2192</span>'
                + '</div>';
        }

        // Find current mission
        var currentMission = null;
        for (var i = 0; i < MISSION_ORDER.length; i++) {
            var mid = MISSION_ORDER[i];
            var ms = state.missions[mid];
            if (ms && ms.unlockedAt && !ms.completedAt) {
                currentMission = MISSION_DEFS[mid];
                break;
            }
        }

        if (!currentMission) return '';

        var mp = getMissionProgress(currentMission.id);

        return '<div class="mr-widget" data-action="missions.show">'
            + '<span class="mr-widget-icon">' + currentMission.icon + '</span>'
            + '<div class="mr-widget-info">'
            + '<span class="mr-widget-title">Mission : ' + currentMission.title + '</span>'
            + '<div class="mr-widget-bar"><div class="mr-widget-fill" style="width:' + mp.pct + '%"></div></div>'
            + '<span class="mr-widget-sub">' + mp.done + '/' + mp.total + ' etapes</span>'
            + '</div>'
            + '<span class="mr-widget-arrow">\u2192</span>'
            + '</div>';
    }

    // ==================== PUBLIC API ====================
    function show() {
        checkAll();
        currentView = 'list';
        window.StudFlow.app.showScreen('missions');
        renderMissionList();
    }

    function showMission(id) {
        // Missions beyond index 2 require premium
        var missionIdx = MISSION_ORDER.indexOf(id);
        if (missionIdx >= 2 && window.StudFlow.premium && !window.StudFlow.premium.hasAccess('missions_premium')) {
            window.StudFlow.premium.showPaywall('missions_premium');
            return;
        }
        checkAll();
        currentView = 'detail';
        currentMissionId = id;
        renderMissionDetail(id);
    }

    function showList() {
        currentView = 'list';
        renderMissionList();
    }

    function executeActionPublic(actionJSON) {
        var action;
        if (typeof actionJSON === 'string') {
            try { action = JSON.parse(actionJSON); } catch(e) { return; }
        } else {
            action = actionJSON;
        }
        executeAction(action);
    }

    // ==================== EVENT BUS LISTENERS ====================
    // Auto-check mission progress when relevant events fire
    if (window.StudFlow.events) {
        var eventsToWatch = [
            'xp:gained', 'focus:completed', 'quiz:completed',
            'flashcard:completed', 'stress:completed', 'section:visited',
            'streak:updated', 'planning:created', 'counter:incremented'
        ];
        for (var ei = 0; ei < eventsToWatch.length; ei++) {
            window.StudFlow.events.on(eventsToWatch[ei], function() { checkAll(); });
        }
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.missions = {
        show: show,
        showMission: showMission,
        showList: showList,
        renderMain: renderMain,
        renderDashboardWidget: renderDashboardWidget,
        checkAll: checkAll,
        getProgress: getProgress,
        getMissionProgress: getMissionProgress,
        executeAction: executeActionPublic
    };

})();
