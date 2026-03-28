// badges.js — Systeme de badges / recompenses motivant
(function() {

    var STORAGE_KEY = 'badges';

    // ==================== DEFINITIONS DES BADGES ====================
    var BADGE_DEFS = [
        {
            id: 'premier_pas',
            name: 'Premier pas',
            icon: '🚀',
            description: 'Tu as termine ton premier diagnostic.',
            benefit: 'Tu progresses.',
            check: function(ctx) { return ctx.hasDiagnostic; }
        },
        {
            id: 'focus_starter',
            name: 'Focus starter',
            icon: '🎯',
            description: '1 session focus terminee.',
            benefit: 'Tu sais te concentrer.',
            check: function(ctx) { return ctx.focusSessions >= 1; }
        },
        {
            id: 'regulier',
            name: 'Regulier',
            icon: '🔥',
            description: '3 jours de streak.',
            benefit: 'La regularite, c\'est la cle.',
            check: function(ctx) { return ctx.streak >= 3; }
        },
        {
            id: 'machine',
            name: 'Machine',
            icon: '⚡',
            description: '7 jours de streak.',
            benefit: 'T\'es inarretable.',
            check: function(ctx) { return ctx.streak >= 7; }
        },
        {
            id: 'createur',
            name: 'Createur',
            icon: '📝',
            description: '3 fiches creees.',
            benefit: 'Tu construis tes propres outils.',
            check: function(ctx) { return ctx.fichesCreated >= 3; }
        },
        {
            id: 'quiz_master',
            name: 'Quiz master',
            icon: '🧠',
            description: '10 quiz termines.',
            benefit: 'Tu maitrises l\'auto-evaluation.',
            check: function(ctx) { return ctx.quizCompleted >= 10; }
        },
        {
            id: 'serenite',
            name: 'Serenite',
            icon: '🧘',
            description: '5 utilisations de "Je stresse".',
            benefit: 'Tu sais gerer le stress.',
            check: function(ctx) { return ctx.stressSessions >= 5; }
        },
        {
            id: 'courage',
            name: 'Courage',
            icon: '💪',
            description: 'Utilisation "Urgence examen" avec action completee.',
            benefit: 'Tu fais face aux epreuves.',
            check: function(ctx) { return ctx.urgenceCompleted >= 1; }
        },
        {
            id: 'bac_francais',
            name: 'Bac francais',
            icon: '🇫🇷',
            description: 'Explorer le module Bac Francais.',
            benefit: 'Le Bac Fr n\'a plus de secrets.',
            check: function(ctx) { return ctx.bacSections >= 1; }
        },
        {
            id: 'memoire_longue',
            name: 'Memoire longue',
            icon: '🧠',
            description: '5 cartes avec un intervalle de 21 jours+.',
            benefit: 'Ta memoire long terme est activee.',
            check: function(ctx) { return ctx.srMasteredCards >= 5; }
        },
        {
            id: 'coach_bavard',
            name: 'Bavard',
            icon: '💬',
            description: '20 messages envoyes au coach.',
            benefit: 'Ton coach te connait bien maintenant.',
            check: function(ctx) { return ctx.chatMessages >= 20; }
        },
        {
            id: 'philosophe',
            name: 'Philosophe',
            icon: '🤔',
            description: 'Explorer le module Philosophie.',
            benefit: 'Socrate serait fier.',
            check: function(ctx) { return ctx.philoSections >= 1; }
        },
        {
            id: 'historien',
            name: 'Historien',
            icon: '🌍',
            description: 'Explorer le module Histoire-Geo.',
            benefit: 'Le passe n\'a plus de secrets.',
            check: function(ctx) { return ctx.histoireSections >= 1; }
        },
        {
            id: 'mathematicien',
            name: 'Mathematicien',
            icon: '📐',
            description: 'Explorer le module Mathematiques.',
            benefit: 'Les chiffres n\'ont plus de secrets.',
            check: function(ctx) { return ctx.mathsSections >= 1; }
        },
        {
            id: 'touche_a_tout',
            name: 'Touche-a-tout',
            icon: '🌟',
            description: 'Explorer au moins 1 section dans 4 matieres.',
            benefit: 'Tu es polyvalent(e) !',
            check: function(ctx) {
                var n = 0;
                if (ctx.bacSections >= 1) n++;
                if (ctx.philoSections >= 1) n++;
                if (ctx.histoireSections >= 1) n++;
                if (ctx.mathsSections >= 1) n++;
                return n >= 4;
            }
        },
        {
            id: 'mission_decouvrir',
            name: 'Explorateur',
            icon: '🔍',
            description: 'Mission "Decouvrir ton profil" terminee.',
            benefit: 'Tu sais qui tu es en tant qu\'etudiant.',
            check: function(ctx) { return ctx.missionDecouvrir; }
        },
        {
            id: 'mission_organiser',
            name: 'Organisateur',
            icon: '📅',
            description: 'Mission "Organiser ton travail" terminee.',
            benefit: 'Tu as structure tes revisions.',
            check: function(ctx) { return ctx.missionOrganiser; }
        },
        {
            id: 'mission_reviser',
            name: 'Reviseur',
            icon: '📝',
            description: 'Mission "Reviser efficacement" terminee.',
            benefit: 'Tes outils de revision sont en place.',
            check: function(ctx) { return ctx.missionReviser; }
        },
        {
            id: 'mission_entrainer',
            name: 'Guerrier',
            icon: '⚡',
            description: 'Mission "T\'entrainer" terminee.',
            benefit: 'Tu maitrises l\'auto-evaluation.',
            check: function(ctx) { return ctx.missionEntrainer; }
        },
        {
            id: 'mission_reussir',
            name: 'Champion du Bac',
            icon: '🏆',
            description: 'Toutes les missions terminees !',
            benefit: 'Tu es pret(e) pour l\'examen.',
            check: function(ctx) { return ctx.missionReussir; }
        }
    ];

    // ==================== STORAGE ====================
    function loadBadgeData() {
        return window.StudFlow.storage.loadData(STORAGE_KEY, {
            unlocked: {},    // { badgeId: { unlockedAt: ISO } }
            counters: {}     // { stressSessions: N, urgenceCompleted: N, bacSections: N }
        });
    }

    function saveBadgeData(data) {
        window.StudFlow.storage.saveData(STORAGE_KEY, data);
    }

    // ==================== CONTEXT BUILDER ====================
    function buildContext() {
        var data = loadBadgeData();
        var counters = data.counters || {};

        // Diagnostic done?
        var hasDiagnostic = window.StudFlow.storage.getUserProfile() !== null;

        // Focus sessions
        var focusStats = window.StudFlow.storage.loadData('focusStats', { sessions: 0 });

        // Streak (gamification)
        var streak = 0;
        if (window.StudFlow.gamification) {
            var gStats = window.StudFlow.gamification.getStats();
            streak = gStats.streak || 0;
        }

        // Fiches created
        var ficheHistory = window.StudFlow.storage.loadData('ficheGenHistory', { total: 0 });

        // Quiz completed
        var quizHistory = window.StudFlow.storage.loadData('quizGenHistory', { total: 0 });

        // Urgence history
        var urgenceHistory = window.StudFlow.storage.loadData('urgenceHistory', []);

        // Mission completion context
        var missionsData = window.StudFlow.storage.loadData('missions', null);
        var mDone = function(id) {
            return missionsData && missionsData.missions && missionsData.missions[id]
                   && !!missionsData.missions[id].completedAt;
        };

        return {
            hasDiagnostic: hasDiagnostic,
            focusSessions: focusStats.sessions || 0,
            streak: streak,
            fichesCreated: ficheHistory.total || 0,
            quizCompleted: quizHistory.total || 0,
            stressSessions: counters.stressSessions || 0,
            urgenceCompleted: urgenceHistory.length,
            bacSections: counters.bacSections || 0,
            srMasteredCards: window.StudFlow.spacedRepetition ? window.StudFlow.spacedRepetition.getMasteredCount() : 0,
            chatMessages: (window.StudFlow.storage.loadData('coachChat', { messageCount: 0 })).messageCount || 0,
            philoSections: counters.philoSections || 0,
            histoireSections: counters.histoireSections || 0,
            mathsSections: counters.mathsSections || 0,
            missionDecouvrir: mDone('decouvrir'),
            missionOrganiser: mDone('organiser'),
            missionReviser: mDone('reviser'),
            missionEntrainer: mDone('entrainer'),
            missionReussir: mDone('reussir')
        };
    }

    // ==================== INCREMENT COUNTERS ====================
    function incrementCounter(key) {
        var data = loadBadgeData();
        if (!data.counters) data.counters = {};
        data.counters[key] = (data.counters[key] || 0) + 1;
        saveBadgeData(data);
        if (window.StudFlow.events) {
            window.StudFlow.events.emit('counter:incremented', { key: key, value: data.counters[key] });
        }
    }

    // ==================== CHECK ALL BADGES ====================
    function checkAll() {
        var data = loadBadgeData();
        var ctx = buildContext();
        var newlyUnlocked = [];

        for (var i = 0; i < BADGE_DEFS.length; i++) {
            var badge = BADGE_DEFS[i];
            // Skip already unlocked
            if (data.unlocked[badge.id]) continue;
            // Check condition
            if (badge.check(ctx)) {
                data.unlocked[badge.id] = {
                    unlockedAt: new Date().toISOString()
                };
                newlyUnlocked.push(badge);
            }
        }

        if (newlyUnlocked.length > 0) {
            saveBadgeData(data);
            // Show toast for each new badge (staggered)
            for (var j = 0; j < newlyUnlocked.length; j++) {
                (function(badge, delay) {
                    setTimeout(function() {
                        if (window.StudFlow.gamification) {
                            window.StudFlow.gamification.showToast(
                                'Badge debloque : ' + badge.icon + ' ' + badge.name + ' !',
                                'streak',
                                '🏅'
                            );
                            if (j === 0) window.StudFlow.gamification.spawnConfetti();
                        }
                        if (window.StudFlow.events) {
                            window.StudFlow.events.emit('badge:unlocked', { id: badge.id, name: badge.name, icon: badge.icon });
                        }
                    }, delay);
                })(newlyUnlocked[j], 300 + j * 900);
            }
        }

        return newlyUnlocked;
    }

    // ==================== RENDER — ECRAN BADGES ====================
    function renderMain() {
        var container = document.getElementById('badges-content');
        if (!container) return;

        var data = loadBadgeData();
        var unlockedCount = Object.keys(data.unlocked).length;
        var totalCount = BADGE_DEFS.length;

        var html = '<div class="badges-screen">';

        // Header
        html += '<div class="badges-header">'
            + '<h2>Mes Badges</h2>'
            + '<p class="badges-count">' + unlockedCount + ' / ' + totalCount + ' debloques</p>'
            + '</div>';

        // Progress bar
        var pct = totalCount > 0 ? Math.round((unlockedCount / totalCount) * 100) : 0;
        html += '<div class="badges-progress">'
            + '<div class="badges-progress-bar">'
            + '<div class="badges-progress-fill" style="width: ' + pct + '%"></div>'
            + '</div>'
            + '</div>';

        // Grid
        html += '<div class="badges-grid">';
        for (var i = 0; i < BADGE_DEFS.length; i++) {
            var badge = BADGE_DEFS[i];
            var isUnlocked = !!data.unlocked[badge.id];
            var cardClass = 'badge-card' + (isUnlocked ? ' unlocked' : ' locked');

            html += '<div class="' + cardClass + '">'
                + '<div class="badge-icon">' + (isUnlocked ? badge.icon : '🔒') + '</div>'
                + '<div class="badge-name">' + badge.name + '</div>'
                + '<div class="badge-desc">' + badge.description + '</div>';

            if (isUnlocked) {
                html += '<div class="badge-benefit">' + badge.benefit + '</div>';
            }

            html += '</div>';
        }
        html += '</div>';

        html += '</div>';
        container.innerHTML = html;
    }

    // ==================== SHOW ====================
    function show() {
        // Check badges before rendering screen
        checkAll();
        window.StudFlow.app.showScreen('badges');
        renderMain();
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.badges = {
        show: show,
        renderMain: renderMain,
        checkAll: checkAll,
        incrementCounter: incrementCounter,
        loadBadgeData: loadBadgeData
    };

})();
