// diagnostic.js — Questionnaire profil etudiant
(function() {
    const QUESTIONS = [
        { id: 'stress', text: 'Je me sens stresse(e) par les etudes', icon: '😰' },
        { id: 'concentration', text: "J'ai du mal a me concentrer", icon: '🧠' },
        { id: 'procrastination', text: 'Je procrastine souvent', icon: '⏰' },
        { id: 'method', text: 'Je ne sais pas comment reviser', icon: '📚' },
        { id: 'exam_fear', text: "J'ai peur des examens", icon: '😨' },
        { id: 'organization', text: "Je manque d'organisation", icon: '📋' }
    ];

    let answers = {};
    let currentQuestion = 0;

    function start() {
        currentQuestion = 0;
        answers = {};
        window.StudFlow.app.showScreen('diagnostic');
        render();
    }

    function render() {
        const container = document.getElementById('diagnostic-content');
        if (!container) return;

        if (currentQuestion >= QUESTIONS.length) {
            showResult();
            return;
        }

        const q = QUESTIONS[currentQuestion];
        const progress = ((currentQuestion + 1) / QUESTIONS.length) * 100;

        container.innerHTML = `
            <div class="diagnostic-progress">
                <span>${currentQuestion + 1}/${QUESTIONS.length}</span>
                <div class="progress-bar-small">
                    <div class="fill" style="width: ${progress}%"></div>
                </div>
            </div>
            <div class="diagnostic-question">
                <div class="diagnostic-icon">${q.icon}</div>
                <h2>${q.text}</h2>
                <p class="diagnostic-subtitle">Evalue de 1 (pas du tout) a 5 (enormement)</p>
                <div class="diagnostic-scale">
                    ${[1,2,3,4,5].map(n => `
                        <button class="scale-btn ${answers[q.id] === n ? 'selected' : ''}"
                                data-action="diagnostic.selectAnswer" data-param="${q.id}" data-param2="${n}">
                            <span class="scale-number">${n}</span>
                            <span class="scale-label">${['Pas du tout','Un peu','Moyennement','Beaucoup','Enormement'][n-1]}</span>
                        </button>
                    `).join('')}
                </div>
            </div>
            <div class="diagnostic-nav">
                ${currentQuestion > 0 ? '<button class="breathing-btn secondary" data-action="diagnostic.prev">← Precedent</button>' : '<div></div>'}
                <button class="breathing-btn primary" data-action="diagnostic.next" ${answers[q.id] ? '' : 'disabled'}>
                    ${currentQuestion === QUESTIONS.length - 1 ? 'Voir mon profil' : 'Suivant →'}
                </button>
            </div>
        `;
    }

    function selectAnswer(questionId, value) {
        answers[questionId] = value;
        render();
    }

    function next() {
        if (currentQuestion < QUESTIONS.length - 1) {
            currentQuestion++;
            render();
        } else {
            showResult();
        }
    }

    function prev() {
        if (currentQuestion > 0) {
            currentQuestion--;
            render();
        }
    }

    function calculateProfile() {
        const profiles = [];
        if (answers.stress >= 4 || answers.exam_fear >= 4) profiles.push('anxieux');
        if (answers.procrastination >= 4) profiles.push('procrastinateur');
        if (answers.organization >= 4) profiles.push('desorganise');
        if (answers.stress >= 3 && answers.concentration >= 3 && answers.organization >= 3) profiles.push('surcharge');
        if (answers.method >= 4) profiles.push('confiance_faible');

        if (profiles.length === 0) {
            const avg = Object.values(answers).reduce((a, b) => a + b, 0) / Object.values(answers).length;
            if (avg <= 2) profiles.push('confiant');
            else profiles.push('equilibre');
        }

        return profiles;
    }

    function getRecommendations(profiles) {
        const recs = {
            anxieux: {
                title: 'Profil : Anxieux',
                emoji: '😰',
                message: 'Le stress est ton principal frein. Bonne nouvelle : on peut le gerer !',
                modules: ['Anti-stress', 'Focus', 'Coach methodo'],
                conseil: 'Commence chaque session par 2 minutes de respiration. Ca change tout.'
            },
            procrastinateur: {
                title: 'Profil : Procrastinateur',
                emoji: '⏰',
                message: 'Tu repousses souvent ? Normal, ton cerveau cherche le plaisir immediat.',
                modules: ['Focus', 'Coach methodo', 'Flashcards'],
                conseil: 'Utilise le timer Focus avec des sessions courtes de 15 min. Petit pas = grand progres.'
            },
            desorganise: {
                title: 'Profil : Desorganise',
                emoji: '📋',
                message: 'Tu as besoin de structure. On va t\'aider a creer un cadre.',
                modules: ['Coach methodo', 'Bac francais', 'Focus'],
                conseil: 'Commence par lire la fiche "Comment reviser sans stress" dans le Coach methodo.'
            },
            surcharge: {
                title: 'Profil : Surcharge',
                emoji: '🤯',
                message: 'Tu fais trop, tout en meme temps. Il faut prioriser.',
                modules: ['Anti-stress', 'Coach methodo', 'Focus'],
                conseil: 'Fais une pause maintenant. Puis choisis UNE seule matiere a reviser aujourd\'hui.'
            },
            confiance_faible: {
                title: 'Profil : En manque de methode',
                emoji: '📚',
                message: 'Tu ne sais pas par ou commencer ? C\'est le probleme le plus facile a resoudre.',
                modules: ['Coach methodo', 'Bac francais', 'Flashcards'],
                conseil: 'Va directement dans le Coach methodo, fiche 1 : "Comment apprendre efficacement".'
            },
            confiant: {
                title: 'Profil : Confiant',
                emoji: '💪',
                message: 'Tu geres bien ! StudFlow va t\'aider a aller encore plus loin.',
                modules: ['Bac francais', 'Quiz', 'Flashcards'],
                conseil: 'Challenge-toi avec les quiz Bac francais pour tester tes connaissances.'
            },
            equilibre: {
                title: 'Profil : Equilibre',
                emoji: '⚖️',
                message: 'Quelques points a ameliorer, mais tu as de bonnes bases.',
                modules: ['Coach methodo', 'Focus', 'Flashcards'],
                conseil: 'Explore les modules a ton rythme. Commence par ce qui t\'attire le plus.'
            }
        };

        return profiles.map(p => recs[p] || recs.equilibre);
    }

    function showResult() {
        const profiles = calculateProfile();
        const recommendations = getRecommendations(profiles);
        const mainRec = recommendations[0];

        // Save profile
        window.StudFlow.storage.updateUserProfile({
            answers,
            profiles,
            mainProfile: profiles[0],
            completedAt: new Date().toISOString()
        });
        window.StudFlow.storage.setOnboardingDone();

        if (window.StudFlow.analytics) window.StudFlow.analytics.track('diagnostic_complete');
        if (window.StudFlow.gamification) window.StudFlow.gamification.addXP('diagnostic_done');
        if (window.StudFlow.badges) window.StudFlow.badges.checkAll();

        const container = document.getElementById('diagnostic-content');
        container.innerHTML = `
            <div class="diagnostic-result">
                <div class="result-emoji">${mainRec.emoji}</div>
                <h2>${mainRec.title}</h2>
                <p class="diagnostic-message">${mainRec.message}</p>

                <div class="result-conseil">
                    <strong>💡 Mon conseil :</strong>
                    <p>${mainRec.conseil}</p>
                </div>

                <div class="result-modules">
                    <h3>Modules recommandes pour toi :</h3>
                    <div class="result-module-list">
                        ${mainRec.modules.map(m => `<span class="result-module-tag">${m}</span>`).join('')}
                    </div>
                </div>

                <button class="setup-btn" data-action="diagnostic.onComplete" style="margin-top: 2rem;">
                    Commencer a reviser →
                </button>
            </div>
        `;
    }

    function onComplete() {
        if (window.StudFlow.onboarding && window.StudFlow.onboarding.isActive()) {
            window.StudFlow.onboarding.afterDiagnostic();
        } else {
            window.StudFlow.app.showScreen('dashboard');
        }
    }

    window.StudFlow = window.StudFlow || {};
    window.StudFlow.diagnostic = { start, render, selectAnswer, next, prev, calculateProfile, getRecommendations, onComplete };
})();
