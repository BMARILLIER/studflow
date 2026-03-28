// challenges.js — Defis entre amis (Friend Challenges)
(function() {

    // ==================== HELPERS ====================
    function getUser() {
        if (window.StudFlow.auth) return window.StudFlow.auth.getUser();
        return null;
    }

    function getUserName(user) {
        if (!user) return 'Anonyme';
        if (user.email) return user.email.split('@')[0];
        return 'Joueur';
    }

    function shuffleArray(arr) {
        var shuffled = arr.slice();
        for (var i = shuffled.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = shuffled[i];
            shuffled[i] = shuffled[j];
            shuffled[j] = tmp;
        }
        return shuffled;
    }

    function formatDate(dateStr) {
        try {
            var d = new Date(dateStr);
            return d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' });
        } catch (e) {
            return '';
        }
    }

    function escapeText(str) {
        if (window.StudFlow.app && window.StudFlow.app.escapeText) return window.StudFlow.app.escapeText(str);
        var div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    // ==================== GET QUESTIONS ====================
    function getQuestions() {
        var questions = [];

        // From quiz module (imported + custom)
        if (window.StudFlow.app) {
            var state = window.StudFlow.app.getState();
            if (state.quizQuestions) {
                state.quizQuestions.forEach(function(q) {
                    if (q.question && q.options && typeof q.correctIndex === 'number') {
                        questions.push({ question: q.question, options: q.options, correctIndex: q.correctIndex });
                    }
                });
            }
            if (state.customQuiz) {
                state.customQuiz.forEach(function(q) {
                    if (q.question && q.options && typeof q.correctIndex === 'number') {
                        questions.push({ question: q.question, options: q.options, correctIndex: q.correctIndex });
                    }
                });
            }
        }

        // From subjects
        if (window.StudFlow.subjects && window.StudFlow.subjects.getAllQuiz) {
            var subjQuiz = window.StudFlow.subjects.getAllQuiz();
            subjQuiz.forEach(function(q) {
                if (q.question && q.options && typeof q.correctIndex === 'number') {
                    questions.push({ question: q.question, options: q.options, correctIndex: q.correctIndex });
                }
            });
        }

        // From bac francais
        if (window.StudFlow.bacfrancais && window.StudFlow.bacfrancais.getAllQuiz) {
            var bacQuiz = window.StudFlow.bacfrancais.getAllQuiz();
            bacQuiz.forEach(function(q) {
                if (q.question && q.options && typeof q.correctIndex === 'number') {
                    questions.push({ question: q.question, options: q.options, correctIndex: q.correctIndex });
                }
            });
        }

        return shuffleArray(questions);
    }

    // ==================== SHOW (MAIN HUB) ====================
    function show() {
        window.StudFlow.app.showScreen('challenges');
        renderHub();
    }

    function renderHub() {
        var container = document.getElementById('challenges-content');
        if (!container) return;

        var user = getUser();

        if (!user) {
            container.innerHTML = ''
                + '<div class="challenge-hub">'
                + '<div class="ch-hero">'
                + '<div class="ch-hero-icon">⚔️</div>'
                + '<h2 class="ch-hero-title">Qui est le plus fort ?</h2>'
                + '<p class="ch-hero-sub">Defie tes amis sur un quiz. Le perdant paye le kebab.</p>'
                + '</div>'
                + '<div class="ch-features">'
                + '<div class="ch-feature"><span>🎯</span><span>10 questions</span></div>'
                + '<div class="ch-feature"><span>⚡</span><span>Score en temps reel</span></div>'
                + '<div class="ch-feature"><span>🏆</span><span>+30 XP si tu gagnes</span></div>'
                + '</div>'
                + '<button class="ch-cta-btn" data-action="auth:login">Se connecter pour defier</button>'
                + '</div>';
            return;
        }

        // Load challenges from Supabase
        loadChallenges(user);
    }

    // Trash talk messages
    var TRASH_TALK = [
        'Tu oses me defier ? 😏',
        'Prepare-toi a perdre 🔥',
        'Le perdant paye les croissants 🥐',
        'Je parie que tu fais moins de 7/10 💀',
        'Trop facile pour moi 😎',
        'Tu vas regretter ce defi 💪',
        'RDV au sommet du classement 🏔️'
    ];

    function getTrashTalk() {
        return TRASH_TALK[Math.floor(Math.random() * TRASH_TALK.length)];
    }

    // Stats from local storage
    function getChallengeStats() {
        var data = window.StudFlow.storage.loadData('studflow_challenge_stats', { wins: 0, played: 0, created: 0 });
        return data;
    }

    function updateChallengeStats(field) {
        var data = getChallengeStats();
        data[field] = (data[field] || 0) + 1;
        window.StudFlow.storage.saveData('studflow_challenge_stats', data);
    }

    function loadChallenges(user) {
        var container = document.getElementById('challenges-content');
        if (!container) return;

        var stats = getChallengeStats();
        var winRate = stats.played > 0 ? Math.round((stats.wins / stats.played) * 100) : 0;

        var statsHTML = '';
        if (stats.played > 0) {
            statsHTML = '<div class="ch-stats-row">'
                + '<div class="ch-stat-chip"><span class="ch-stat-val">' + stats.played + '</span><span class="ch-stat-lbl">joues</span></div>'
                + '<div class="ch-stat-chip ch-stat-win"><span class="ch-stat-val">' + stats.wins + '</span><span class="ch-stat-lbl">victoires</span></div>'
                + '<div class="ch-stat-chip"><span class="ch-stat-val">' + winRate + '%</span><span class="ch-stat-lbl">win rate</span></div>'
                + '</div>';
        }

        // Subject picker for themed challenges
        var subjectBtns = '<div class="ch-subject-picker">'
            + '<button class="ch-subj-btn ch-subj-active" data-action="challenges.create" data-param="all">🎲 Mix</button>';
        if (window.StudFlow.subjects) {
            var subjects = window.StudFlow.subjects.getAll();
            var shown = Math.min(subjects.length, 5);
            for (var i = 0; i < shown; i++) {
                subjectBtns += '<button class="ch-subj-btn" data-action="challenges.createThemed" data-param="' + subjects[i].id + '">' + subjects[i].icon + '</button>';
            }
        }
        subjectBtns += '</div>';

        container.innerHTML = ''
            + '<div class="challenge-hub">'
            + '<div class="ch-hero">'
            + '<div class="ch-hero-icon">⚔️</div>'
            + '<h2 class="ch-hero-title">Qui est le plus fort ?</h2>'
            + '<p class="ch-hero-trash">' + getTrashTalk() + '</p>'
            + '</div>'
            + statsHTML
            + '<div class="ch-create-section">'
            + '<h3 class="ch-section-label">Choisis le theme</h3>'
            + subjectBtns
            + '</div>'
            + '<div id="challenges-list"><div class="challenge-loading">Chargement...</div></div>'
            + '<div id="challenges-leaderboard"></div>'
            + '</div>';

        fetchChallenges(user);
    }

    function fetchChallenges(user) {
        var listEl = document.getElementById('challenges-list');
        var lbEl = document.getElementById('challenges-leaderboard');
        if (!listEl) return;

        var sb = window.StudFlow.sb.getClient();
        if (!sb) {
            listEl.innerHTML = '<p class="challenge-empty">Mode hors-ligne — les defis ne sont pas disponibles.</p>';
            return;
        }

        window.StudFlow.sb.withTimeout(
            sb.from('challenges')
                .select('*, challenge_scores(*)')
                .or('creator_id.eq.' + user.id + ',status.eq.open')
                .order('created_at', { ascending: false })
                .limit(20)
        ).then(function(res) {
            if (res.error) throw res.error;
            renderChallengeList(res.data || [], user, listEl);
            renderLeaderboard(res.data || [], user, lbEl);
        }).catch(function(err) {
            console.warn('[challenges] fetch error:', err);
            listEl.innerHTML = '<p class="challenge-empty">Impossible de charger les defis. Verifie ta connexion.</p>';
        });
    }

    function renderChallengeList(challenges, user, listEl) {
        if (!listEl) return;

        if (!challenges.length) {
            listEl.innerHTML = ''
                + '<div class="challenge-empty">'
                + '<p>Aucun defi pour le moment.</p>'
                + '<p>Cree ton premier defi et partage le lien !</p>'
                + '</div>';
            return;
        }

        var html = '<h3 class="challenge-section-title">Tes defis</h3>';
        challenges.forEach(function(ch) {
            var scores = ch.challenge_scores || [];
            var myScore = null;
            var opponentScores = [];

            scores.forEach(function(s) {
                if (s.user_id === user.id) {
                    myScore = s;
                } else {
                    opponentScores.push(s);
                }
            });

            var isCreator = ch.creator_id === user.id;
            var statusLabel = scores.length >= 2 ? 'Termine' : 'En attente';
            var statusClass = scores.length >= 2 ? 'completed' : 'pending';
            var questionCount = ch.questions ? ch.questions.length : 0;

            var scoreHTML = '';
            if (myScore && opponentScores.length > 0) {
                var opp = opponentScores[0];
                scoreHTML = '<div class="challenge-card-scores">'
                    + '<span class="challenge-card-score">' + escapeText(getUserName(user)) + ' : ' + myScore.score + '/' + myScore.total + '</span>'
                    + '<span class="challenge-card-vs">VS</span>'
                    + '<span class="challenge-card-score">' + escapeText(opp.user_name) + ' : ' + opp.score + '/' + opp.total + '</span>'
                    + '</div>';
            } else if (myScore) {
                scoreHTML = '<div class="challenge-card-scores">'
                    + '<span class="challenge-card-score">Ton score : ' + myScore.score + '/' + myScore.total + '</span>'
                    + '<span class="challenge-card-waiting">En attente d\'un adversaire...</span>'
                    + '</div>';
            }

            var actionBtn = '';
            if (!myScore && !isCreator) {
                actionBtn = '<button class="challenge-share-btn" data-action="challenges.join" data-param="' + ch.id + '">Relever le defi →</button>';
            } else if (isCreator && scores.length < 2) {
                actionBtn = '<button class="challenge-share-btn" data-action="challenges.shareLink" data-param="' + ch.id + '">Partager le lien 📋</button>';
            }

            html += ''
                + '<div class="challenge-card">'
                + '<div class="challenge-card-header">'
                + '<span class="challenge-card-creator">⚔️ ' + escapeText(ch.creator_name || 'Inconnu') + '</span>'
                + '<span class="challenge-card-status ' + statusClass + '">' + statusLabel + '</span>'
                + '</div>'
                + '<div class="challenge-card-meta">'
                + '<span>' + questionCount + ' questions</span>'
                + '<span>' + formatDate(ch.created_at) + '</span>'
                + '</div>'
                + scoreHTML
                + actionBtn
                + '</div>';
        });

        listEl.innerHTML = html;
    }

    function renderLeaderboard(challenges, user, lbEl) {
        if (!lbEl) return;

        // Aggregate scores from all challenge_scores this week
        var weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);
        var scoreMap = {};

        challenges.forEach(function(ch) {
            var scores = ch.challenge_scores || [];
            scores.forEach(function(s) {
                var completedAt = new Date(s.completed_at || 0);
                if (completedAt >= weekAgo) {
                    if (!scoreMap[s.user_name]) {
                        scoreMap[s.user_name] = { name: s.user_name, wins: 0, total: 0 };
                    }
                    scoreMap[s.user_name].total++;
                    // Check if this user won this challenge
                    var allScores = scores.sort(function(a, b) { return b.score - a.score; });
                    if (allScores.length > 0 && allScores[0].user_id === s.user_id) {
                        scoreMap[s.user_name].wins++;
                    }
                }
            });
        });

        var leaderboard = Object.values(scoreMap).sort(function(a, b) {
            return b.wins - a.wins || b.total - a.total;
        });

        if (leaderboard.length === 0) {
            lbEl.innerHTML = '';
            return;
        }

        var medals = ['🥇', '🥈', '🥉'];
        var lbHTML = '<h3 class="challenge-section-title">🏆 Classement de la semaine</h3>'
            + '<div class="challenge-leaderboard">';

        leaderboard.slice(0, 10).forEach(function(entry, i) {
            var medal = i < 3 ? medals[i] : (i + 1) + '.';
            var isMe = entry.name === getUserName(user);
            lbHTML += '<div class="challenge-lb-row' + (isMe ? ' is-me' : '') + '">'
                + '<span class="challenge-lb-rank">' + medal + '</span>'
                + '<span class="challenge-lb-name">' + escapeText(entry.name) + '</span>'
                + '<span class="challenge-lb-stat">' + entry.wins + ' victoire' + (entry.wins > 1 ? 's' : '') + '</span>'
                + '</div>';
        });

        lbHTML += '</div>';
        lbEl.innerHTML = lbHTML;
    }

    // ==================== CREATE CHALLENGE ====================
    function createThemed(subjectId) {
        createChallenge(subjectId);
    }

    function createChallenge(theme) {
        var user = getUser();
        if (!user) {
            if (window.StudFlow.gamification) window.StudFlow.gamification.showToast('Connecte-toi pour creer un defi.', 'info', '🔒');
            return;
        }

        var allQuestions;
        if (theme && theme !== 'all' && window.StudFlow.subjects) {
            allQuestions = [];
            var subj = window.StudFlow.subjects.getById(theme);
            if (subj) {
                var quiz = window.StudFlow.subjects.getQuizByDeck('subj-' + theme);
                quiz.forEach(function(q) {
                    if (q.question && q.options && typeof q.correctIndex === 'number') {
                        allQuestions.push({ question: q.question, options: q.options, correctIndex: q.correctIndex });
                    }
                });
            }
            allQuestions = shuffleArray(allQuestions);
        } else {
            allQuestions = getQuestions();
        }

        if (allQuestions.length < 5) {
            if (window.StudFlow.gamification) window.StudFlow.gamification.showToast('Pas assez de questions. Explore les matieres d\'abord.', 'info', '📚');
            return;
        }

        var picked = allQuestions.slice(0, Math.min(10, allQuestions.length));
        // Strip to essential fields only
        var cleanQuestions = picked.map(function(q) {
            return { question: q.question, options: q.options, correctIndex: q.correctIndex };
        });

        var sb = window.StudFlow.sb.getClient();
        if (!sb) {
            if (window.StudFlow.gamification) window.StudFlow.gamification.showToast('Mode hors-ligne — impossible de creer un defi.', 'info', '📡');
            return;
        }

        var container = document.getElementById('challenges-content');
        if (container) {
            container.innerHTML = '<div class="challenge-hub"><div class="challenge-loading">Creation du defi en cours...</div></div>';
        }

        var challengeData = {
            creator_id: user.id,
            creator_name: getUserName(user),
            questions: cleanQuestions,
            status: 'open'
        };

        window.StudFlow.sb.withTimeout(
            sb.from('challenges').insert(challengeData).select().single()
        ).then(function(res) {
            if (res.error) throw res.error;
            var challenge = res.data;

            // Award XP
            if (window.StudFlow.gamification) {
                window.StudFlow.gamification.addXP('challenge_create');
                window.StudFlow.gamification.showToast('+10 XP — Defi cree !', 'xp', '⚔️');
            }

            showShareScreen(challenge);
        }).catch(function(err) {
            console.warn('[challenges] create error:', err);
            if (window.StudFlow.gamification) window.StudFlow.gamification.showToast('Erreur lors de la creation du defi.', 'error', '❌');
            renderHub();
        });
    }

    // ==================== SHARE SCREEN ====================
    function showShareScreen(challenge) {
        var container = document.getElementById('challenges-content');
        if (!container) return;

        updateChallengeStats('created');
        var link = window.location.origin + window.location.pathname + '?challenge=' + challenge.id;
        var questionCount = challenge.questions ? challenge.questions.length : 0;

        container.innerHTML = ''
            + '<div class="challenge-hub">'
            + '<div class="ch-hero">'
            + '<div class="ch-hero-icon ch-hero-bounce">⚔️</div>'
            + '<h2 class="ch-hero-title">Defi lance !</h2>'
            + '<p class="ch-hero-trash">' + questionCount + ' questions. Qui aura le meilleur score ?</p>'
            + '</div>'
            + '<div class="ch-share-card">'
            + '<div class="ch-share-msg">Envoie ce lien a ton pote :</div>'
            + '<input type="text" class="challenge-link-input" value="' + escapeText(link) + '" readonly id="challenge-link-input">'
            + '<div class="ch-share-buttons">'
            + '<button class="ch-cta-btn" data-action="challenges.nativeShare" data-param="' + challenge.id + '">📤 Envoyer a un ami</button>'
            + '<button class="ch-cta-btn ch-cta-secondary" data-action="challenges.copyLink" data-param="' + challenge.id + '">📋 Copier le lien</button>'
            + '</div>'
            + '</div>'
            + '<p class="ch-share-tip">💡 Envoie le lien sur WhatsApp, Snap ou Insta pour defier tes amis</p>'
            + '<button class="ch-back-btn" data-action="challenges.show">← Retour</button>'
            + '</div>';
    }

    function copyLink(challengeId) {
        var link = window.location.origin + window.location.pathname + '?challenge=' + challengeId;
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(link).then(function() {
                if (window.StudFlow.gamification) window.StudFlow.gamification.showToast('Lien copie !', 'xp', '📋');
            });
        } else {
            var input = document.getElementById('challenge-link-input');
            if (input) {
                input.select();
                document.execCommand('copy');
                if (window.StudFlow.gamification) window.StudFlow.gamification.showToast('Lien copie !', 'xp', '📋');
            }
        }
    }

    function nativeShare(challengeId) {
        var link = window.location.origin + window.location.pathname + '?challenge=' + challengeId;
        var msgs = [
            'Je te defie sur un quiz ! T\'es chaud(e) ou t\'as peur ? 😏',
            '10 questions, 1 gagnant. Tu oses ? ⚔️',
            'Quiz duel ! Le perdant paye le kebab 🥙',
            'T\'es plus fort(e) que moi en revision ? Prouve-le 💪'
        ];
        var text = msgs[Math.floor(Math.random() * msgs.length)];
        if (navigator.share) {
            navigator.share({ title: 'Defi StudFlow ⚔️', text: text, url: link }).catch(function() {});
        } else {
            copyLink(challengeId);
        }
    }

    function shareLink(challengeId) {
        copyLink(challengeId);
    }

    // ==================== JOIN CHALLENGE ====================
    var _currentChallenge = null;
    var _challengeIndex = 0;
    var _challengeScore = 0;
    var _lastChallengeResult = null; // stored for result card sharing
    var _challengeSelected = null;
    var _challengeStartTime = null;

    function joinChallenge(id) {
        var user = getUser();
        if (!user) {
            if (window.StudFlow.gamification) window.StudFlow.gamification.showToast('Connecte-toi pour relever le defi !', 'info', '🔒');
            if (window.StudFlow.auth) window.StudFlow.auth.openModal('login');
            return;
        }

        var container = document.getElementById('challenges-content');
        if (!container) {
            window.StudFlow.app.showScreen('challenges');
            container = document.getElementById('challenges-content');
        }
        if (container) {
            container.innerHTML = '<div class="challenge-hub"><div class="challenge-loading">Chargement du defi...</div></div>';
        }

        var sb = window.StudFlow.sb.getClient();
        if (!sb) {
            if (window.StudFlow.gamification) window.StudFlow.gamification.showToast('Mode hors-ligne — impossible de charger le defi.', 'info', '📡');
            return;
        }

        window.StudFlow.sb.withTimeout(
            sb.from('challenges')
                .select('*, challenge_scores(*)')
                .eq('id', id)
                .single()
        ).then(function(res) {
            if (res.error) throw res.error;
            if (!res.data) throw new Error('Defi introuvable');

            var challenge = res.data;

            // Check if user already played
            var scores = challenge.challenge_scores || [];
            var alreadyPlayed = scores.some(function(s) { return s.user_id === user.id; });

            if (alreadyPlayed) {
                if (window.StudFlow.gamification) window.StudFlow.gamification.showToast('Tu as deja joue ce defi !', 'info', '⚔️');
                showVSResults(challenge, user);
                return;
            }

            startChallengeQuiz(challenge);
        }).catch(function(err) {
            console.warn('[challenges] join error:', err);
            if (container) {
                container.innerHTML = ''
                    + '<div class="challenge-hub">'
                    + '<div class="challenge-header">'
                    + '<div class="challenge-header-icon">😕</div>'
                    + '<h2>Defi introuvable</h2>'
                    + '<p>Ce defi n\'existe plus ou le lien est invalide.</p>'
                    + '</div>'
                    + '<button class="challenge-share-btn outline" data-action="challenges.show">← Retour aux defis</button>'
                    + '</div>';
            }
        });
    }

    // ==================== CHALLENGE QUIZ ====================
    function startChallengeQuiz(challenge) {
        _currentChallenge = challenge;
        _challengeIndex = 0;
        _challengeScore = 0;
        _challengeSelected = null;
        _challengeStartTime = Date.now();

        window.StudFlow.app.showScreen('challenges');
        displayChallengeQuestion();
    }

    function displayChallengeQuestion() {
        var container = document.getElementById('challenges-content');
        if (!container || !_currentChallenge) return;

        var questions = _currentChallenge.questions || [];
        var q = questions[_challengeIndex];

        if (!q) {
            finishChallengeQuiz();
            return;
        }

        var total = questions.length;
        var progressPct = Math.round(((_challengeIndex + 1) / total) * 100);

        var optionsHTML = q.options.map(function(opt, idx) {
            return '<button class="challenge-quiz-option" data-action="challenges.selectAnswer" data-param="' + idx + '">'
                + String.fromCharCode(65 + idx) + '. ' + escapeText(opt)
                + '</button>';
        }).join('');

        container.innerHTML = ''
            + '<div class="challenge-quiz">'
            + '<div class="challenge-quiz-header">'
            + '<span class="challenge-quiz-badge">⚔️ Defi de ' + escapeText(_currentChallenge.creator_name || 'un ami') + '</span>'
            + '<span class="challenge-quiz-progress">' + (_challengeIndex + 1) + '/' + total + '</span>'
            + '</div>'
            + '<div class="challenge-quiz-bar"><div class="challenge-quiz-bar-fill" style="width:' + progressPct + '%"></div></div>'
            + '<div class="challenge-quiz-score">' + _challengeScore + ' pts</div>'
            + '<div class="challenge-quiz-question">' + escapeText(q.question) + '</div>'
            + '<div class="challenge-quiz-options">' + optionsHTML + '</div>'
            + '<button class="challenge-quiz-submit" data-action="challenges.submitAnswer" disabled>Valider</button>'
            + '</div>';
    }

    function selectAnswer(index) {
        _challengeSelected = parseInt(index, 10);
        var options = document.querySelectorAll('.challenge-quiz-option');
        options.forEach(function(btn) { btn.classList.remove('selected'); });
        if (options[_challengeSelected]) options[_challengeSelected].classList.add('selected');

        var submitBtn = document.querySelector('.challenge-quiz-submit');
        if (submitBtn) submitBtn.disabled = false;
    }

    function submitAnswer() {
        if (_challengeSelected === null || !_currentChallenge) return;

        var questions = _currentChallenge.questions || [];
        var q = questions[_challengeIndex];
        if (!q) return;

        var isCorrect = _challengeSelected === q.correctIndex;
        var options = document.querySelectorAll('.challenge-quiz-option');

        // Show correct/wrong
        options.forEach(function(btn, idx) {
            btn.classList.add('disabled');
            if (idx === q.correctIndex) btn.classList.add('correct');
            if (idx === _challengeSelected && !isCorrect) btn.classList.add('wrong');
        });

        if (isCorrect) {
            _challengeScore++;
        }

        var submitBtn = document.querySelector('.challenge-quiz-submit');
        if (submitBtn) {
            submitBtn.textContent = _challengeIndex < questions.length - 1 ? 'Question suivante →' : 'Voir les resultats →';
            submitBtn.disabled = false;
            submitBtn.setAttribute('data-action', 'challenges.nextQuestion');
        }
    }

    function nextQuestion() {
        _challengeIndex++;
        _challengeSelected = null;
        displayChallengeQuestion();
    }

    // ==================== FINISH QUIZ ====================
    function finishChallengeQuiz() {
        var user = getUser();
        if (!user || !_currentChallenge) return;

        var total = _currentChallenge.questions ? _currentChallenge.questions.length : 0;

        var scoreData = {
            challenge_id: _currentChallenge.id,
            user_id: user.id,
            user_name: getUserName(user),
            score: _challengeScore,
            total: total
        };

        // Award XP for completing
        var xpEarned = 20;
        if (window.StudFlow.gamification) {
            window.StudFlow.gamification.addXP('challenge_complete');
        }

        var sb = window.StudFlow.sb.getClient();
        if (!sb) {
            showVSResultsLocal(_currentChallenge, scoreData, xpEarned);
            return;
        }

        window.StudFlow.sb.withTimeout(
            sb.from('challenge_scores').insert(scoreData).select().single()
        ).then(function(res) {
            if (res.error) throw res.error;

            // Re-fetch challenge to get all scores
            return window.StudFlow.sb.withTimeout(
                sb.from('challenges')
                    .select('*, challenge_scores(*)')
                    .eq('id', _currentChallenge.id)
                    .single()
            );
        }).then(function(res) {
            if (res.error) throw res.error;
            showVSResults(res.data, user);
        }).catch(function(err) {
            console.warn('[challenges] save score error:', err);
            showVSResultsLocal(_currentChallenge, scoreData, xpEarned);
        });
    }

    // ==================== VS RESULTS SCREEN ====================
    function showVSResults(challenge, user) {
        var container = document.getElementById('challenges-content');
        if (!container) return;

        var scores = challenge.challenge_scores || [];
        var myScore = null;
        var opponentScore = null;

        scores.forEach(function(s) {
            if (s.user_id === user.id) {
                myScore = s;
            } else if (!opponentScore) {
                opponentScore = s;
            }
        });

        if (!myScore) {
            renderHub();
            return;
        }

        var total = myScore.total || (challenge.questions ? challenge.questions.length : 0);
        var iWon = opponentScore ? myScore.score > opponentScore.score : false;
        var isDraw = opponentScore ? myScore.score === opponentScore.score : false;
        var xpEarned = 20;

        if (opponentScore && iWon) {
            xpEarned += 30;
            if (window.StudFlow.gamification) {
                window.StudFlow.gamification.addXP('challenge_win');
            }
        }

        // Store for result card sharing
        _lastChallengeResult = { score: myScore.score, total: total, xp: xpEarned };

        // Track stats
        updateChallengeStats('played');
        if (opponentScore && iWon) updateChallengeStats('wins');

        // Title + message based on result
        var resultIcon, resultTitle, resultMsg;
        if (!opponentScore) {
            resultIcon = '⏳';
            resultTitle = 'En attente...';
            resultMsg = 'Ton adversaire n\'a pas encore joue. Partage le lien !';
        } else if (iWon) {
            resultIcon = '🏆';
            resultTitle = 'VICTOIRE !';
            var winMsgs = [
                'Tu as ecrase ' + escapeText(opponentScore.user_name) + ' ! 💀',
                escapeText(opponentScore.user_name) + ' peut aller reviser 📚',
                'Trop facile. ' + escapeText(opponentScore.user_name) + ' n\'avait aucune chance 😎',
                'Le roi/la reine c\'est toi ! 👑'
            ];
            resultMsg = winMsgs[Math.floor(Math.random() * winMsgs.length)];
        } else if (isDraw) {
            resultIcon = '🤝';
            resultTitle = 'EGALITE !';
            resultMsg = 'Vous etes au meme niveau. Qui gagne la revanche ?';
        } else {
            resultIcon = '😤';
            resultTitle = 'Defaite...';
            var loseMsgs = [
                escapeText(opponentScore.user_name) + ' t\'a eu cette fois. Revanche ? 🔥',
                'Ca pique. Mais tu vas revenir plus fort(e) ! 💪',
                'Pas grave, la prochaine est pour toi 😤'
            ];
            resultMsg = loseMsgs[Math.floor(Math.random() * loseMsgs.length)];
        }

        var myPct = total > 0 ? Math.round((myScore.score / total) * 100) : 0;
        var oppPct = opponentScore && total > 0 ? Math.round((opponentScore.score / total) * 100) : 0;

        var vsHTML = '';
        if (opponentScore) {
            var myClass = iWon ? 'challenge-winner' : (isDraw ? '' : 'challenge-loser');
            var oppClass = !iWon && !isDraw ? 'challenge-winner' : (isDraw ? '' : 'challenge-loser');

            vsHTML = ''
                + '<div class="challenge-vs">'
                + '<div class="challenge-vs-player ' + myClass + '">'
                + '<div class="challenge-vs-name">' + escapeText(myScore.user_name) + '</div>'
                + '<div class="challenge-score">' + myScore.score + '/' + total + '</div>'
                + '<div class="challenge-vs-pct">' + myPct + '%</div>'
                + '</div>'
                + '<div class="challenge-vs-separator">'
                + '<span class="challenge-vs-text">VS</span>'
                + '</div>'
                + '<div class="challenge-vs-player ' + oppClass + '">'
                + '<div class="challenge-vs-name">' + escapeText(opponentScore.user_name) + '</div>'
                + '<div class="challenge-score">' + opponentScore.score + '/' + total + '</div>'
                + '<div class="challenge-vs-pct">' + oppPct + '%</div>'
                + '</div>'
                + '</div>';
        } else {
            vsHTML = ''
                + '<div class="challenge-vs">'
                + '<div class="challenge-vs-player">'
                + '<div class="challenge-vs-name">' + escapeText(myScore.user_name) + '</div>'
                + '<div class="challenge-score">' + myScore.score + '/' + total + '</div>'
                + '<div class="challenge-vs-pct">' + myPct + '%</div>'
                + '</div>'
                + '<div class="challenge-vs-separator">'
                + '<span class="challenge-vs-text">VS</span>'
                + '</div>'
                + '<div class="challenge-vs-player">'
                + '<div class="challenge-vs-name">???</div>'
                + '<div class="challenge-score">?/?</div>'
                + '<div class="challenge-vs-pct">En attente</div>'
                + '</div>'
                + '</div>';
        }

        container.innerHTML = ''
            + '<div class="challenge-results">'
            + '<div class="challenge-results-header">'
            + '<div class="challenge-results-icon">' + resultIcon + '</div>'
            + '<h2>' + resultTitle + '</h2>'
            + '<p class="challenge-results-msg">' + resultMsg + '</p>'
            + '</div>'
            + vsHTML
            + '<div class="ch-result-xp">+' + xpEarned + ' XP</div>'
            + '<div class="challenge-results-actions">'
            + '<button class="ch-cta-btn" data-action="challenges.create">⚔️ Revanche immediate</button>'
            + '<button class="ch-cta-btn ch-cta-secondary" data-action="challenges.shareResult" data-param="' + challenge.id + '">📤 Flex sur tes amis</button>'
            + '<button class="ch-back-btn" data-action="challenges.show">← Retour</button>'
            + '</div>'
            + '</div>';

        // Confetti if won
        if (iWon && window.StudFlow.gamification) {
            window.StudFlow.gamification.spawnConfetti();
        }
    }

    function showVSResultsLocal(challenge, scoreData, xpEarned) {
        var container = document.getElementById('challenges-content');
        if (!container) return;

        container.innerHTML = ''
            + '<div class="challenge-results">'
            + '<div class="challenge-results-header">'
            + '<div class="challenge-results-icon">✅</div>'
            + '<h2>Defi termine !</h2>'
            + '<p class="challenge-results-msg">Ton score : ' + scoreData.score + '/' + scoreData.total + '</p>'
            + '</div>'
            + '<div class="challenge-vs">'
            + '<div class="challenge-vs-player">'
            + '<div class="challenge-vs-name">' + escapeText(scoreData.user_name) + '</div>'
            + '<div class="challenge-score">' + scoreData.score + '/' + scoreData.total + '</div>'
            + '</div>'
            + '</div>'
            + '<div class="challenge-xp-badge">+' + xpEarned + ' XP gagnes !</div>'
            + '<p class="challenge-empty">Score non sauvegarde (hors-ligne). Reconnecte-toi pour reessayer.</p>'
            + '<div class="challenge-results-actions">'
            + '<button class="challenge-share-btn outline" data-action="challenges.show">← Retour aux defis</button>'
            + '</div>'
            + '</div>';
    }

    function shareResult(challengeId) {
        // Show result card overlay if available
        if (window.StudFlow.resultCard && _lastChallengeResult) {
            window.StudFlow.resultCard.show({
                type: 'challenge',
                score: _lastChallengeResult.score,
                total: _lastChallengeResult.total,
                xp: _lastChallengeResult.xp
            });
            return;
        }

        // Fallback: direct share
        var link = window.location.origin + window.location.pathname + '?challenge=' + challengeId;
        var msgs = [
            'Je viens de gagner un duel quiz \u2694\uFE0F T\'es le prochain ?',
            'Qui peut me battre sur ce quiz ? \uD83C\uDFC6 Tente ta chance :',
            'Quiz duel termine ! Tu fais mieux que moi ? \uD83D\uDCAA'
        ];
        var text = msgs[Math.floor(Math.random() * msgs.length)];

        if (navigator.share) {
            navigator.share({ title: '\u2694\uFE0F Defi StudFlow', text: text, url: link }).catch(function() {});
        } else {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(text + '\n' + link).then(function() {
                    if (window.StudFlow.gamification) window.StudFlow.gamification.showToast('Copie ! Envoie-le sur Snap ou WhatsApp \uD83D\uDCF2', 'xp', '\uD83D\uDCCB');
                });
            }
        }
    }

    // ==================== CHECK URL CHALLENGE ====================
    function checkUrlChallenge() {
        var params = new URLSearchParams(window.location.search);
        var challengeId = params.get('challenge');
        if (!challengeId) return;

        // Clean URL
        var cleanUrl = window.location.origin + window.location.pathname;
        window.history.replaceState({}, '', cleanUrl);

        // Wait a bit for auth to initialize, then join
        setTimeout(function() {
            joinChallenge(challengeId);
        }, 1000);
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.challenges = {
        show: show,
        createChallenge: createChallenge,
        create: createChallenge,
        createThemed: createThemed,
        joinChallenge: joinChallenge,
        join: joinChallenge,
        checkUrlChallenge: checkUrlChallenge,
        getQuestions: getQuestions,
        selectAnswer: selectAnswer,
        submitAnswer: submitAnswer,
        nextQuestion: nextQuestion,
        copyLink: copyLink,
        nativeShare: nativeShare,
        shareLink: shareLink,
        shareResult: shareResult
    };

    // Auto-check URL on load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', checkUrlChallenge);
    } else {
        setTimeout(checkUrlChallenge, 500);
    }

})();
