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
            tier: 'common',
            check: function(ctx) { return ctx.hasDiagnostic; }
        },
        {
            id: 'focus_starter',
            name: 'Focus starter',
            icon: '🎯',
            description: '1 session focus terminee.',
            benefit: 'Tu sais te concentrer.',
            tier: 'common',
            check: function(ctx) { return ctx.focusSessions >= 1; }
        },
        {
            id: 'regulier',
            name: 'Regulier',
            icon: '🔥',
            description: '3 jours de streak.',
            benefit: 'La regularite, c\'est la cle.',
            tier: 'common',
            check: function(ctx) { return ctx.streak >= 3; }
        },
        {
            id: 'machine',
            name: 'Machine',
            icon: '⚡',
            description: '7 jours de streak.',
            benefit: 'T\'es inarretable.',
            tier: 'rare',
            check: function(ctx) { return ctx.streak >= 7; }
        },
        {
            id: 'createur',
            name: 'Createur',
            icon: '📝',
            description: '3 fiches creees.',
            benefit: 'Tu construis tes propres outils.',
            tier: 'common',
            check: function(ctx) { return ctx.fichesCreated >= 3; }
        },
        {
            id: 'quiz_master',
            name: 'Quiz master',
            icon: '🧠',
            description: '10 quiz termines.',
            benefit: 'Tu maitrises l\'auto-evaluation.',
            tier: 'rare',
            check: function(ctx) { return ctx.quizCompleted >= 10; }
        },
        {
            id: 'serenite',
            name: 'Serenite',
            icon: '🧘',
            description: '5 utilisations de "Je stresse".',
            benefit: 'Tu sais gerer le stress.',
            tier: 'rare',
            check: function(ctx) { return ctx.stressSessions >= 5; }
        },
        {
            id: 'courage',
            name: 'Courage',
            icon: '💪',
            description: 'Utilisation "Urgence examen" avec action completee.',
            benefit: 'Tu fais face aux epreuves.',
            tier: 'common',
            check: function(ctx) { return ctx.urgenceCompleted >= 1; }
        },
        {
            id: 'bac_francais',
            name: 'Bac francais',
            icon: '🇫🇷',
            description: 'Explorer le module Bac Francais.',
            benefit: 'Le Bac Fr n\'a plus de secrets.',
            tier: 'common',
            check: function(ctx) { return ctx.bacSections >= 1; }
        },
        {
            id: 'memoire_longue',
            name: 'Memoire longue',
            icon: '🧠',
            description: '5 cartes avec un intervalle de 21 jours+.',
            benefit: 'Ta memoire long terme est activee.',
            tier: 'epic',
            check: function(ctx) { return ctx.srMasteredCards >= 5; }
        },
        {
            id: 'coach_bavard',
            name: 'Bavard',
            icon: '💬',
            description: '20 messages envoyes au coach.',
            benefit: 'Ton coach te connait bien maintenant.',
            tier: 'rare',
            check: function(ctx) { return ctx.chatMessages >= 20; }
        },
        {
            id: 'philosophe',
            name: 'Philosophe',
            icon: '🤔',
            description: 'Explorer le module Philosophie.',
            benefit: 'Socrate serait fier.',
            tier: 'common',
            check: function(ctx) { return ctx.philoSections >= 1; }
        },
        {
            id: 'historien',
            name: 'Historien',
            icon: '🌍',
            description: 'Explorer le module Histoire-Geo.',
            benefit: 'Le passe n\'a plus de secrets.',
            tier: 'common',
            check: function(ctx) { return ctx.histoireSections >= 1; }
        },
        {
            id: 'mathematicien',
            name: 'Mathematicien',
            icon: '📐',
            description: 'Explorer le module Mathematiques.',
            benefit: 'Les chiffres n\'ont plus de secrets.',
            tier: 'common',
            check: function(ctx) { return ctx.mathsSections >= 1; }
        },
        {
            id: 'touche_a_tout',
            name: 'Touche-a-tout',
            icon: '🌟',
            description: 'Explorer au moins 1 section dans 4 matieres.',
            benefit: 'Tu es polyvalent(e) !',
            tier: 'epic',
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
            tier: 'common',
            check: function(ctx) { return ctx.missionDecouvrir; }
        },
        {
            id: 'mission_organiser',
            name: 'Organisateur',
            icon: '📅',
            description: 'Mission "Organiser ton travail" terminee.',
            benefit: 'Tu as structure tes revisions.',
            tier: 'common',
            check: function(ctx) { return ctx.missionOrganiser; }
        },
        {
            id: 'mission_reviser',
            name: 'Reviseur',
            icon: '📝',
            description: 'Mission "Reviser efficacement" terminee.',
            benefit: 'Tes outils de revision sont en place.',
            tier: 'rare',
            check: function(ctx) { return ctx.missionReviser; }
        },
        {
            id: 'mission_entrainer',
            name: 'Guerrier',
            icon: '⚡',
            description: 'Mission "T\'entrainer" terminee.',
            benefit: 'Tu maitrises l\'auto-evaluation.',
            tier: 'rare',
            check: function(ctx) { return ctx.missionEntrainer; }
        },
        {
            id: 'mission_reussir',
            name: 'Champion du Bac',
            icon: '🏆',
            description: 'Toutes les missions terminees !',
            benefit: 'Tu es pret(e) pour l\'examen.',
            tier: 'legendary',
            check: function(ctx) { return ctx.missionReussir; }
        }
    ];

    // ==================== SECRET BADGES ====================
    var SECRET_BADGE_DEFS = [
        {
            id: 'noctambule',
            name: 'Noctambule',
            icon: '🦉',
            description: 'Etudier apres 23h.',
            benefit: 'La nuit porte conseil...',
            tier: 'rare',
            secret: true,
            check: function(ctx) { return ctx.secretNoctambule; }
        },
        {
            id: 'leve_tot',
            name: 'Leve-tot',
            icon: '🌅',
            description: 'Etudier avant 7h du matin.',
            benefit: 'L\'avenir appartient a ceux qui se levent tot.',
            tier: 'rare',
            secret: true,
            check: function(ctx) { return ctx.secretLeveTot; }
        },
        {
            id: 'chanceux',
            name: 'Chanceux',
            icon: '🎰',
            description: 'Obtenir un MEGA BONUS x3 XP.',
            benefit: 'La fortune sourit aux audacieux.',
            tier: 'epic',
            secret: true,
            check: function(ctx) { return ctx.secretChanceux; }
        },
        {
            id: 'perfectionniste',
            name: 'Perfectionniste',
            icon: '💯',
            description: '100% sur un quiz de 10+ questions.',
            benefit: 'La perfection, rien de moins.',
            tier: 'epic',
            secret: true,
            check: function(ctx) { return ctx.secretPerfectionniste; }
        },
        {
            id: 'combo_master',
            name: 'Combo Master',
            icon: '🔥',
            description: 'Atteindre un combo de 10+.',
            benefit: 'Enchainement parfait !',
            tier: 'epic',
            secret: true,
            check: function(ctx) { return ctx.secretComboMaster; }
        }
    ];

    // Merge secret badges into the main list for unified checking
    var ALL_BADGE_DEFS = BADGE_DEFS.concat(SECRET_BADGE_DEFS);

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
            missionReussir: mDone('reussir'),
            // Secret badge flags
            secretNoctambule: !!counters.secretNoctambule,
            secretLeveTot: !!counters.secretLeveTot,
            secretChanceux: !!counters.secretChanceux,
            secretPerfectionniste: !!counters.secretPerfectionniste,
            secretComboMaster: !!counters.secretComboMaster
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

    // ==================== SOUND EFFECT ====================
    function playUnlockSound(tier) {
        if (tier === 'common') return; // No sound for common badges
        try {
            var AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (!AudioCtx) return;
            var actx = new AudioCtx();
            var osc = actx.createOscillator();
            var gain = actx.createGain();

            osc.connect(gain);
            gain.connect(actx.destination);

            // Base frequency varies by tier
            var freq = 440;
            if (tier === 'epic') freq = 523;      // C5
            if (tier === 'legendary') freq = 659;  // E5

            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, actx.currentTime);

            // For legendary, add a second harmonic sweep up
            if (tier === 'legendary') {
                osc.frequency.linearRampToValueAtTime(880, actx.currentTime + 0.15);
            }

            gain.gain.setValueAtTime(0.3, actx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, actx.currentTime + 0.2);

            osc.start(actx.currentTime);
            osc.stop(actx.currentTime + 0.25);

            // Cleanup
            osc.onended = function() { actx.close(); };
        } catch (e) {
            // Web Audio not available — silent fail
        }
    }

    // ==================== CHECK ALL BADGES ====================
    function checkAll() {
        var data = loadBadgeData();
        var ctx = buildContext();
        var newlyUnlocked = [];

        for (var i = 0; i < ALL_BADGE_DEFS.length; i++) {
            var badge = ALL_BADGE_DEFS[i];
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
                (function(badge, idx, delay) {
                    setTimeout(function() {
                        if (window.StudFlow.gamification) {
                            if (badge.secret) {
                                // Special secret badge celebration
                                window.StudFlow.gamification.showToast(
                                    '🔓 BADGE SECRET DECOUVERT : ' + badge.icon + ' ' + badge.name + ' !',
                                    'streak',
                                    '🔓'
                                );
                                window.StudFlow.gamification.spawnConfetti();
                                // Extra 100 XP bonus for secret badges
                                window.StudFlow.gamification.addXP(100);
                            } else {
                                window.StudFlow.gamification.showToast(
                                    'Badge debloque : ' + badge.icon + ' ' + badge.name + ' !',
                                    'streak',
                                    '🏅'
                                );
                                if (idx === 0) window.StudFlow.gamification.spawnConfetti();
                            }
                        }
                        // Play unlock sound for rare/epic/legendary
                        playUnlockSound(badge.tier);

                        if (window.StudFlow.events) {
                            window.StudFlow.events.emit('badge:unlocked', {
                                id: badge.id, name: badge.name,
                                icon: badge.icon, tier: badge.tier,
                                secret: !!badge.secret
                            });
                        }
                    }, delay);
                })(newlyUnlocked[j], j, 300 + j * 900);
            }
        }

        return newlyUnlocked;
    }

    // ==================== CHECK SECRET BADGE ====================
    // Called from other modules: window.StudFlow.badges.checkSecretBadge('noctambule')
    function checkSecretBadge(type, value) {
        var keyMap = {
            'noctambule': 'secretNoctambule',
            'leve_tot': 'secretLeveTot',
            'chanceux': 'secretChanceux',
            'perfectionniste': 'secretPerfectionniste',
            'combo_master': 'secretComboMaster'
        };
        var counterKey = keyMap[type];
        if (!counterKey) return;

        var data = loadBadgeData();
        // Already flagged?
        if (data.counters && data.counters[counterKey]) {
            // Already set, just run checkAll to see if it triggers
            checkAll();
            return;
        }
        if (!data.counters) data.counters = {};
        data.counters[counterKey] = 1;
        saveBadgeData(data);
        // Now check to trigger the unlock
        checkAll();
    }

    // Auto-detect time-based secret badges on any activity
    function checkTimeBadges() {
        var hour = new Date().getHours();
        if (hour >= 23 || hour < 1) {
            checkSecretBadge('noctambule');
        }
        if (hour >= 4 && hour < 7) {
            checkSecretBadge('leve_tot');
        }
    }

    // ==================== TIER STYLING HELPERS ====================
    var TIER_LABELS = {
        common: '',
        rare: 'Rare',
        epic: 'Epique',
        legendary: 'Legendaire'
    };

    function tierClass(tier) {
        if (tier === 'rare') return ' badge-tier-rare';
        if (tier === 'epic') return ' badge-tier-epic';
        if (tier === 'legendary') return ' badge-tier-legendary';
        return '';
    }

    // ==================== RENDER — ECRAN BADGES ====================
    function renderMain() {
        var container = document.getElementById('badges-content');
        if (!container) return;

        // Inject tier CSS if not yet present
        injectTierStyles();

        var data = loadBadgeData();

        // Count: normal badges always visible, secret badges only when unlocked
        var visibleBadges = [];
        var unlockedCount = 0;
        for (var k = 0; k < ALL_BADGE_DEFS.length; k++) {
            var b = ALL_BADGE_DEFS[k];
            var bUnlocked = !!data.unlocked[b.id];
            if (bUnlocked) unlockedCount++;
            // Show in grid if: not secret, OR secret AND unlocked
            if (!b.secret || bUnlocked) {
                visibleBadges.push({ def: b, unlocked: bUnlocked });
            }
        }
        var totalCount = ALL_BADGE_DEFS.length;

        // Count unlocked secret badges for the teaser
        var secretTotal = SECRET_BADGE_DEFS.length;
        var secretUnlocked = 0;
        for (var s = 0; s < SECRET_BADGE_DEFS.length; s++) {
            if (data.unlocked[SECRET_BADGE_DEFS[s].id]) secretUnlocked++;
        }

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

        // Secret badge teaser
        if (secretUnlocked < secretTotal) {
            var remaining = secretTotal - secretUnlocked;
            html += '<div class="badges-secret-hint">'
                + '🔓 ' + remaining + ' badge' + (remaining > 1 ? 's' : '') + ' secret' + (remaining > 1 ? 's' : '') + ' a decouvrir...'
                + '</div>';
        }

        // Grid
        html += '<div class="badges-grid">';
        for (var i = 0; i < visibleBadges.length; i++) {
            var badge = visibleBadges[i].def;
            var isUnlocked = visibleBadges[i].unlocked;
            var cardClass = 'badge-card' + (isUnlocked ? ' unlocked' : ' locked')
                          + (isUnlocked ? tierClass(badge.tier) : '')
                          + (badge.secret && isUnlocked ? ' badge-secret-unlocked' : '');

            html += '<div class="' + cardClass + '">';

            // Tier label for rare+
            if (isUnlocked && badge.tier && badge.tier !== 'common') {
                html += '<div class="badge-tier-label badge-tier-label-' + badge.tier + '">'
                    + (badge.secret ? '🔓 ' : '') + TIER_LABELS[badge.tier]
                    + '</div>';
            }

            html += '<div class="badge-icon">' + (isUnlocked ? badge.icon : '🔒') + '</div>'
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

    // ==================== INJECT TIER CSS ====================
    var _tierStylesInjected = false;
    function injectTierStyles() {
        if (_tierStylesInjected) return;
        _tierStylesInjected = true;

        var css = ''
            // Secret hint
            + '.badges-secret-hint {'
            + '  text-align: center; font-size: 0.8rem; color: var(--text-muted);'
            + '  margin-bottom: 1rem; font-style: italic; opacity: 0.7;'
            + '}'
            // Tier labels
            + '.badge-tier-label {'
            + '  font-size: 0.6rem; font-weight: 700; text-transform: uppercase;'
            + '  letter-spacing: 0.05em; margin-bottom: 0.25rem; padding: 1px 6px;'
            + '  border-radius: 6px; display: inline-block;'
            + '}'
            + '.badge-tier-label-rare { color: #60a5fa; background: rgba(96,165,250,0.12); }'
            + '.badge-tier-label-epic { color: #c084fc; background: rgba(192,132,252,0.12); }'
            + '.badge-tier-label-legendary { color: #fbbf24; background: rgba(251,191,36,0.15); }'
            // Rare — blue glow
            + '.badge-card.badge-tier-rare {'
            + '  border-color: rgba(96,165,250,0.35);'
            + '  box-shadow: 0 0 8px rgba(96,165,250,0.15);'
            + '}'
            // Epic — purple glow
            + '.badge-card.badge-tier-epic {'
            + '  border-color: rgba(192,132,252,0.4);'
            + '  box-shadow: 0 0 12px rgba(192,132,252,0.2);'
            + '}'
            // Legendary — gold glow + sparkle
            + '.badge-card.badge-tier-legendary {'
            + '  border-color: rgba(251,191,36,0.5);'
            + '  box-shadow: 0 0 16px rgba(251,191,36,0.25);'
            + '  animation: badgeAppear 0.4s ease, badgeSparkle 2s ease-in-out infinite;'
            + '}'
            + '@keyframes badgeSparkle {'
            + '  0%, 100% { box-shadow: 0 0 8px rgba(251,191,36,0.2); }'
            + '  50% { box-shadow: 0 0 20px rgba(251,191,36,0.45), 0 0 40px rgba(251,191,36,0.1); }'
            + '}'
            // Secret unlocked extra flair
            + '.badge-card.badge-secret-unlocked {'
            + '  background: linear-gradient(135deg, rgba(251,191,36,0.06), rgba(168,85,247,0.08));'
            + '}';

        var style = document.createElement('style');
        style.textContent = css;
        document.head.appendChild(style);
    }

    // ==================== SHOW ====================
    function show() {
        // Check time-based secret badges + all badges before rendering
        checkTimeBadges();
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
        loadBadgeData: loadBadgeData,
        checkSecretBadge: checkSecretBadge,
        checkTimeBadges: checkTimeBadges,
        playUnlockSound: playUnlockSound
    };

})();
