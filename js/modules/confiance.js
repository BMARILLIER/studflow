// confiance.js — Module Confiance et Motivation
(function() {

    // ==================== SITUATIONS ====================
    var SITUATIONS = [
        {
            id: 'manque_confiance',
            title: 'Je manque de confiance',
            icon: '😔',
            color: 'var(--sky)',
            message: "Beaucoup d'eleves ressentent ca. Cela ne definit pas ton intelligence. La confiance se construit pas a pas, et tu es deja sur le bon chemin.",
            explication: "Le manque de confiance vient souvent du fait qu'on se compare ou qu'on se concentre sur ses echecs plutot que ses reussites. Ton cerveau retient plus facilement le negatif — c'est normal, pas un defaut.",
            exercice: {
                type: 'liste_reussites',
                titre: 'Liste tes 3 reussites',
                instruction: "Ecris 3 choses que tu as reussies recemment (meme petites : comprendre un cours, finir un exercice, oser poser une question).",
                duree: '2 min'
            },
            action: { label: 'Session focus douce', module: 'focus', icon: '🎯' },
            encouragement: "Tu as plus de capacites que tu ne le penses. Chaque petit effort renforce ta confiance."
        },
        {
            id: 'peur_echouer',
            title: 'J\'ai peur d\'echouer',
            icon: '😨',
            color: 'var(--hot)',
            message: "Cette peur est normale et partagee par presque tous les eleves. Elle montre que tu tiens a ta reussite — c'est une qualite, pas un defaut.",
            explication: "La peur de l'echec vient d'une vision catastrophe : on imagine le pire scenario. En realite, meme en cas de mauvaise note, rien n'est definitif. Tu peux toujours progresser et rattraper.",
            exercice: {
                type: 'respiration',
                titre: 'Respiration anti-peur',
                instruction: "Inspire 4 secondes, retiens 7 secondes, expire 8 secondes. Repete 3 fois. Ca calme le systeme nerveux.",
                duree: '1 min'
            },
            action: { label: 'Respiration guidee', module: 'breathing', icon: '🫁' },
            encouragement: "L'echec n'est pas le contraire de la reussite. C'est une etape du chemin. Tu avances."
        },
        {
            id: 'sentiment_nul',
            title: 'Je me sens nul(le)',
            icon: '😞',
            color: 'var(--accent)',
            message: "Ce que tu ressens est temporaire. Ca ne definit pas qui tu es ni ce que tu vaux. Beaucoup de personnes brillantes se sont senties comme ca avant de reussir.",
            explication: "Le syndrome de l'imposteur touche enormement de monde, meme les adultes et les experts. C'est ton cerveau qui te joue des tours. En realite, tu progresses, meme quand tu ne le vois pas.",
            exercice: {
                type: 'pensee_positive',
                titre: 'Reecris la pensee',
                instruction: "Remplace 'Je suis nul(le)' par 'J'apprends encore, et c'est normal'. Repete cette phrase 3 fois a voix haute ou dans ta tete.",
                duree: '1 min'
            },
            action: { label: 'Anti-stress', module: 'stress', icon: '💆' },
            encouragement: "Tu n'es pas nul(le). Tu es en train d'apprendre. Et apprendre, ca prend du temps. C'est exactement la ou tu dois etre."
        },
        {
            id: 'pas_motivation',
            title: 'Je n\'ai pas de motivation',
            icon: '😑',
            color: 'var(--sun)',
            message: "La motivation ne vient pas toujours AVANT l'action. Souvent, c'est l'inverse : on commence, et la motivation arrive en faisant.",
            explication: "Le cerveau prefere le confort immediat. C'est pour ca que c'est dur de se lancer. Le secret : ne pas attendre d'etre motive. Fais juste 5 minutes. Le cerveau s'adapte et continue naturellement.",
            exercice: {
                type: 'micro_objectif',
                titre: 'Le defi 5 minutes',
                instruction: "Engage-toi a travailler SEULEMENT 5 minutes. Pas plus. Si apres 5 minutes tu veux arreter, tu peux. Mais souvent tu continueras.",
                duree: '5 min'
            },
            action: { label: 'Focus micro-session', module: 'focus', icon: '🎯' },
            encouragement: "Tu es la, tu as ouvert cette app. C'est deja de la motivation en action."
        },
        {
            id: 'comparaison',
            title: 'Je me compare aux autres',
            icon: '👀',
            color: 'var(--mint)',
            message: "Se comparer est humain, mais c'est un piege. Tu ne vois que la surface des autres. Tu ne connais pas leurs difficultes, leurs doutes, leur parcours.",
            explication: "Les reseaux sociaux et l'ecole creent l'illusion que tout le monde reussit sauf toi. C'est faux. Chacun avance a son rythme. La seule comparaison utile, c'est avec toi-meme d'hier.",
            exercice: {
                type: 'visualisation',
                titre: 'Ta progression personnelle',
                instruction: "Pense a toi il y a 6 mois. Qu'est-ce que tu sais faire aujourd'hui que tu ne savais pas ? Ecris au moins 2 choses.",
                duree: '2 min'
            },
            action: { label: 'Voir ma progression', module: 'dashboard', icon: '📊' },
            encouragement: "Ta course est unique. Ta progression aussi. Continue a ton rythme — c'est le bon."
        },
        {
            id: 'decourage',
            title: 'Je suis decourage(e)',
            icon: '😩',
            color: 'var(--peach)',
            message: "C'est un moment difficile, et c'est OK de le ressentir. Le decouragement n'est pas un echec — c'est un signal que tu as besoin de souffler et de recalibrer.",
            explication: "Le decouragement survient quand l'effort semble enorme et le resultat lointain. Le remede : reduire la taille de l'objectif. Au lieu de penser au bac, pense a la prochaine heure. Un pas a la fois.",
            exercice: {
                type: 'micro_objectif',
                titre: 'Le plus petit pas possible',
                instruction: "Quel est LE plus petit geste que tu peux faire maintenant ? Ouvrir ton cahier ? Lire un paragraphe ? Fais juste ca. Rien de plus.",
                duree: '1 min'
            },
            action: { label: 'Session ultra-courte', module: 'focus', icon: '🎯' },
            encouragement: "Tu as traverse des moments durs avant. Tu les as surmontes. Celui-ci aussi va passer."
        }
    ];

    // ==================== STATE ====================
    var currentView = 'menu'; // menu, situation, exercise
    var currentSituationId = null;

    // ==================== HELPERS ====================
    function goToModule(moduleId) {
        var map = {
            breathing: function() { window.StudFlow.app.showScreen('breathing'); },
            stress: function() { window.StudFlow.stress.show(); },
            focus: function() { window.StudFlow.focus.show(); },
            flashcard: function() { window.StudFlow.flashcards.start(); },
            quiz: function() { window.StudFlow.quiz.start(); },
            planbac: function() { window.StudFlow.planbac.show(); },
            dashboard: function() { window.StudFlow.app.showScreen('dashboard'); },
            coach: function() { window.StudFlow.coach.show(); }
        };
        var fn = map[moduleId];
        if (fn) fn();
    }

    // ==================== RENDER ====================
    function show() {
        currentView = 'menu';
        currentSituationId = null;
        window.StudFlow.app.showScreen('confiance');
    }

    function renderMain() {
        var container = document.getElementById('confiance-content');
        if (!container) return;

        if (currentView === 'situation' && currentSituationId) {
            renderSituation(container);
        } else {
            renderMenu(container);
        }
    }

    // ==================== MENU ====================
    function renderMenu(container) {
        var cardsHTML = SITUATIONS.map(function(s) {
            return '<button class="conf-card" data-action="confiance.openSituation" data-param="' + s.id + '">'
                + '<span class="conf-card-icon">' + s.icon + '</span>'
                + '<span class="conf-card-title">' + s.title + '</span>'
                + '<span class="conf-card-arrow">→</span>'
                + '</button>';
        }).join('');

        // Stats
        var history = window.StudFlow.storage.loadData('confianceHistory', { visits: 0, improved: 0 });

        container.innerHTML = '<div class="conf-container">'
            + '<div class="conf-header">'
            + '<div class="conf-header-icon">💪</div>'
            + '<h2>Confiance & Motivation</h2>'
            + '<p>Choisis ce que tu ressens. On va t\'aider.</p>'
            + '</div>'
            + '<div class="conf-cards">' + cardsHTML + '</div>'
            + (history.visits > 0 ? '<div class="conf-stats">'
                + '<span>🌟 ' + history.visits + ' visites</span>'
                + '<span>😊 ' + history.improved + ' fois "je me sens mieux"</span>'
                + '</div>' : '')
            + '</div>';
    }

    // ==================== SITUATION DETAIL ====================
    function openSituation(id) {
        currentSituationId = id;
        currentView = 'situation';

        // Track visit
        var history = window.StudFlow.storage.loadData('confianceHistory', { visits: 0, improved: 0 });
        history.visits++;
        window.StudFlow.storage.saveData('confianceHistory', history);

        renderMain();
    }

    function renderSituation(container) {
        var sit = SITUATIONS.find(function(s) { return s.id === currentSituationId; });
        if (!sit) { renderMenu(container); return; }

        var exerciseHTML = renderExercise(sit.exercice);

        container.innerHTML = '<div class="conf-situation">'
            // Back
            + '<button class="conf-back" data-action="confiance.backToMenu">← Retour</button>'

            // Header
            + '<div class="conf-sit-header">'
            + '<div class="conf-sit-icon">' + sit.icon + '</div>'
            + '<h2>' + sit.title + '</h2>'
            + '</div>'

            // Message rassurant
            + '<div class="conf-sit-message">'
            + '<p>' + sit.message + '</p>'
            + '</div>'

            // Explication
            + '<div class="conf-sit-section">'
            + '<h3>💡 Pourquoi tu ressens ca</h3>'
            + '<p>' + sit.explication + '</p>'
            + '</div>'

            // Exercice
            + '<div class="conf-sit-section">'
            + '<h3>🎯 Exercice rapide (' + sit.exercice.duree + ')</h3>'
            + exerciseHTML
            + '</div>'

            // Action concrete
            + '<div class="conf-sit-section">'
            + '<h3>⚡ Action concrete</h3>'
            + '<button class="conf-action-btn" data-action="confiance.goToModule" data-param="' + sit.action.module + '">'
            + '<span>' + sit.action.icon + '</span>'
            + '<span>' + sit.action.label + '</span>'
            + '</button>'
            + '</div>'

            // Encouragement final
            + '<div class="conf-sit-encouragement">'
            + '<p>' + sit.encouragement + '</p>'
            + '</div>'

            // Feedback
            + '<div class="conf-sit-feedback">'
            + '<p>Comment tu te sens maintenant ?</p>'
            + '<div class="conf-feedback-btns">'
            + '<button class="conf-feedback-btn positive" data-action="confiance.feedback" data-param="true">😊 Je me sens mieux</button>'
            + '<button class="conf-feedback-btn neutral" data-action="confiance.feedback" data-param="false">🤷 Pas encore</button>'
            + '</div>'
            + '</div>'
            + '</div>';
    }

    function renderExercise(exercice) {
        return '<div class="conf-exercise">'
            + '<h4>' + exercice.titre + '</h4>'
            + '<p class="conf-exercise-instruction">' + exercice.instruction + '</p>'
            + (exercice.type === 'respiration'
                ? '<button class="conf-exercise-btn" data-action="app.showScreen" data-param="breathing">🫁 Lancer la respiration guidee</button>'
                : '')
            + '</div>';
    }

    // ==================== ACTIONS ====================
    function backToMenu() {
        currentView = 'menu';
        currentSituationId = null;
        renderMain();
    }

    function feedback(positive) {
        var history = window.StudFlow.storage.loadData('confianceHistory', { visits: 0, improved: 0 });
        if (positive) {
            history.improved++;
            window.StudFlow.storage.saveData('confianceHistory', history);

            if (window.StudFlow.gamification) {
                window.StudFlow.gamification.addXP('confiance_better');
                window.StudFlow.gamification.showToast('Tu progresses ! Continue !', 'xp', '💪');
            }
        }

        // Show thank you
        var container = document.getElementById('confiance-content');
        if (!container) return;

        var msg = positive
            ? "C'est une super nouvelle ! Chaque moment ou tu te sens mieux est une victoire."
            : "C'est normal, ca prend du temps. Reviens quand tu veux. On est la.";
        var emoji = positive ? '🌟' : '🤗';

        container.innerHTML = '<div class="conf-feedback-result">'
            + '<div class="conf-feedback-icon">' + emoji + '</div>'
            + '<p>' + msg + '</p>'
            + '<div class="conf-feedback-actions">'
            + '<button class="conf-action-btn" data-action="confiance.backToMenu">Voir d\'autres situations</button>'
            + '<button class="conf-action-btn secondary" data-action="app.showScreen" data-param="dashboard">Retour au tableau de bord</button>'
            + '</div>'
            + '</div>';
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.confiance = {
        show: show,
        renderMain: renderMain,
        openSituation: openSituation,
        backToMenu: backToMenu,
        feedback: feedback,
        goToModule: goToModule
    };
})();
