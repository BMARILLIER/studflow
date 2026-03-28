// quizGenerator.js — Generateur de quiz de revision
(function() {

    var engine = function() { return window.StudFlow.engine; };

    // ==================== MODE A : QUIZ METHODO BAC ====================
    var QUIZ_METHODO = {
        dissertation: {
            titre: 'Quiz : Methode Dissertation',
            questions: [
                {
                    question: 'Que doit contenir l\'introduction d\'une dissertation ?',
                    correct: 'Accroche, reformulation, problematique, annonce du plan',
                    distractors: [
                        'Un resume complet du sujet avec tous les arguments',
                        'Uniquement la problematique et le plan',
                        'Une citation obligatoire suivie du developpement'
                    ]
                },
                {
                    question: 'Qu\'est-ce qu\'un plan dialectique ?',
                    correct: 'These, antithese, synthese',
                    distractors: [
                        'Introduction, developpement, conclusion',
                        'Avantages, inconvenients, exemples',
                        'Chronologique : passe, present, futur'
                    ]
                },
                {
                    question: 'Que faut-il dans chaque paragraphe du developpement ?',
                    correct: 'Un argument + un exemple precis + une explication',
                    distractors: [
                        'Juste un argument bien developpe sans exemple',
                        'Deux citations d\'auteurs differents',
                        'Un resume du paragraphe precedent'
                    ]
                },
                {
                    question: 'Que doit-on eviter en conclusion ?',
                    correct: 'Introduire un nouvel argument',
                    distractors: [
                        'Faire une ouverture',
                        'Repondre a la problematique',
                        'Faire un bilan des arguments'
                    ]
                },
                {
                    question: 'Comment gerer son temps (4h) ?',
                    correct: '1h intro+plan, 2h developpement, 30 min conclusion, 30 min relecture',
                    distractors: [
                        '30 min intro, 3h developpement, 30 min conclusion',
                        '2h brouillon, 2h recopie',
                        '45 min par partie, pareil pour tous'
                    ]
                }
            ]
        },
        commentaire: {
            titre: 'Quiz : Methode Commentaire',
            questions: [
                {
                    question: 'Quelle est la regle d\'or du commentaire ?',
                    correct: 'Ne jamais separer le fond (sens) et la forme (procedes)',
                    distractors: [
                        'Toujours commencer par la biographie de l\'auteur',
                        'Faire au moins 4 parties',
                        'Citer le texte le plus possible sans analyser'
                    ]
                },
                {
                    question: 'Que signifie PCI ?',
                    correct: 'Procede + Citation + Interpretation',
                    distractors: [
                        'Plan + Conclusion + Introduction',
                        'Paragraphe + Commentaire + Idee',
                        'Problematique + Contexte + Illustration'
                    ]
                },
                {
                    question: 'Qu\'est-ce qu\'une antithese ?',
                    correct: 'L\'opposition de deux idees ou termes contraires',
                    distractors: [
                        'La repetition d\'un mot en debut de phrase',
                        'L\'exageration d\'une idee pour la renforcer',
                        'L\'association de deux termes contradictoires en un'
                    ]
                },
                {
                    question: 'Que mettre dans l\'introduction du commentaire ?',
                    correct: 'Contexte (auteur, oeuvre, epoque), presentation du texte, problematique, annonce des axes',
                    distractors: [
                        'Resume detaille du texte',
                        'Biographie complete de l\'auteur',
                        'Tous les procedes reperes dans le texte'
                    ]
                },
                {
                    question: 'Qu\'est-ce qu\'un oxymore ?',
                    correct: 'L\'association de deux mots de sens contraires ("obscure clarte")',
                    distractors: [
                        'Une exageration ("mourir de rire")',
                        'Une repetition en debut de vers',
                        'Dire le contraire de ce qu\'on pense'
                    ]
                }
            ]
        },
        oral: {
            titre: 'Quiz : Methode Oral',
            questions: [
                {
                    question: 'Combien de temps dure l\'explication lineaire ?',
                    correct: '12 minutes',
                    distractors: [
                        '8 minutes',
                        '15 minutes',
                        '20 minutes'
                    ]
                },
                {
                    question: 'Que signifie "explication lineaire" ?',
                    correct: 'Suivre le texte dans l\'ordre, mouvement par mouvement',
                    distractors: [
                        'Resumer le texte en une ligne',
                        'Commenter uniquement les figures de style',
                        'Donner son avis personnel sur le texte'
                    ]
                },
                {
                    question: 'Sur quoi porte l\'entretien (2e partie) ?',
                    correct: 'L\'oeuvre integrale choisie pour le parcours',
                    distractors: [
                        'Le texte de la premiere partie',
                        'Tous les textes du descriptif',
                        'La biographie de l\'auteur'
                    ]
                },
                {
                    question: 'Combien de textes faut-il preparer au minimum ?',
                    correct: 'Tous les textes du descriptif (environ 20)',
                    distractors: [
                        '5 textes au choix',
                        '10 textes les plus importants',
                        'Seulement ceux de l\'oeuvre integrale'
                    ]
                },
                {
                    question: 'Que faire si on ne sait pas repondre a l\'entretien ?',
                    correct: 'Reformuler la question, prendre du recul, donner ce qu\'on sait',
                    distractors: [
                        'Dire qu\'on ne sait pas et attendre',
                        'Inventer une reponse convaincante',
                        'Demander une autre question'
                    ]
                }
            ]
        },
        figures_style: {
            titre: 'Quiz : Figures de Style',
            questions: [
                {
                    question: '"Il est grand comme un arbre" — quelle figure ?',
                    correct: 'Comparaison (avec outil "comme")',
                    distractors: [
                        'Metaphore',
                        'Hyperbole',
                        'Personnification'
                    ]
                },
                {
                    question: '"Cet homme est un lion" — quelle figure ?',
                    correct: 'Metaphore (sans outil de comparaison)',
                    distractors: [
                        'Comparaison',
                        'Allegorie',
                        'Metonymie'
                    ]
                },
                {
                    question: '"Le vent hurle dans les branches" — quelle figure ?',
                    correct: 'Personnification (attribuer un comportement humain)',
                    distractors: [
                        'Metaphore',
                        'Hyperbole',
                        'Allegorie'
                    ]
                },
                {
                    question: '"Je meurs de soif" — quelle figure ?',
                    correct: 'Hyperbole (exageration)',
                    distractors: [
                        'Litote',
                        'Euphemisme',
                        'Metaphore'
                    ]
                },
                {
                    question: '"Ce n\'est pas mal" (pour dire c\'est bien) — quelle figure ?',
                    correct: 'Litote (dire moins pour suggerer plus)',
                    distractors: [
                        'Euphemisme',
                        'Antiphrase',
                        'Ironie'
                    ]
                },
                {
                    question: '"Paris, Berlin, Rome, toutes les capitales..." — quelle figure ?',
                    correct: 'Enumeration',
                    distractors: [
                        'Gradation',
                        'Anaphore',
                        'Accumulation'
                    ]
                }
            ]
        }
    };

    // ==================== MODE B : QUIZ DEPUIS TEXTE ====================
    function generateFromText(text, options) {
        options = options || {};
        var maxQuestions = options.maxQuestions || 5;
        var e = engine();

        var keySentences = e.extractKeySentences(text, maxQuestions * 2);
        var definitions = e.extractDefinitions(text, 10);
        var allFacts = keySentences.concat(definitions);

        var questions = [];

        // From definitions — QCM
        definitions.forEach(function(def) {
            if (questions.length >= maxQuestions) return;
            var distractors = e.generateDistractors(def, allFacts, 3);
            if (distractors.length >= 2) {
                questions.push({
                    question: 'Parmi ces affirmations, laquelle est correcte ?',
                    correct: def.length > 150 ? def.substring(0, 150) + '...' : def,
                    distractors: distractors.map(function(d) {
                        return d.length > 150 ? d.substring(0, 150) + '...' : d;
                    }),
                    type: 'qcm',
                    source: 'definition'
                });
            }
        });

        // From key sentences — Vrai/Faux
        keySentences.forEach(function(sentence) {
            if (questions.length >= maxQuestions) return;
            questions.push({
                question: 'Vrai ou Faux : "' + (sentence.length > 120 ? sentence.substring(0, 120) + '...' : sentence) + '"',
                correct: 'Vrai',
                distractors: ['Faux'],
                type: 'vrai_faux',
                source: 'phrase_cle'
            });
        });

        // From keywords — open questions
        var keywords = e.extractKeywords(text, 5);
        var templates = e.generateQuestionsFromText(keySentences.slice(0, 5), 3);
        templates.forEach(function(q) {
            if (questions.length >= maxQuestions) return;
            questions.push({
                question: q.question,
                correct: q.source.length > 150 ? q.source.substring(0, 150) + '...' : q.source,
                distractors: [],
                type: 'ouverte',
                source: 'mot_cle'
            });
        });

        var quiz = {
            titre: options.titre || 'Quiz genere depuis ton document',
            questions: questions.slice(0, maxQuestions),
            mode: 'texte',
            stats: {
                questionsGenerees: Math.min(questions.length, maxQuestions),
                qcm: questions.filter(function(q) { return q.type === 'qcm'; }).length,
                vraiFaux: questions.filter(function(q) { return q.type === 'vrai_faux'; }).length,
                ouvertes: questions.filter(function(q) { return q.type === 'ouverte'; }).length
            },
            generatedAt: new Date().toISOString()
        };

        saveQuizHistory(quiz);
        return quiz;
    }

    // ==================== MODE A : QUIZ METHODO ====================
    function generateMethodo(type) {
        var template = QUIZ_METHODO[type];
        if (!template) return null;

        var e = engine();
        var shuffledQuestions = e.shuffle(template.questions).map(function(q) {
            var allChoices = [q.correct].concat(q.distractors);
            return {
                question: q.question,
                correct: q.correct,
                choices: e.shuffle(allChoices),
                type: 'qcm',
                source: 'methodo'
            };
        });

        var quiz = {
            titre: template.titre,
            questions: shuffledQuestions,
            mode: 'methodo',
            type: type,
            generatedAt: new Date().toISOString()
        };

        saveQuizHistory(quiz);
        return quiz;
    }

    function getMethodoTypes() {
        return Object.keys(QUIZ_METHODO).map(function(key) {
            return { key: key, titre: QUIZ_METHODO[key].titre, count: QUIZ_METHODO[key].questions.length };
        });
    }

    // ==================== SCORING ====================
    function scoreQuiz(quiz, answers) {
        var score = 0;
        var results = [];
        quiz.questions.forEach(function(q, i) {
            var userAnswer = answers[i] || '';
            var isCorrect = userAnswer === q.correct;
            if (isCorrect) score++;
            results.push({
                question: q.question,
                userAnswer: userAnswer,
                correct: q.correct,
                isCorrect: isCorrect
            });
        });

        var total = quiz.questions.length;
        var percentage = total > 0 ? Math.round((score / total) * 100) : 0;
        var niveau;
        if (percentage >= 80) niveau = 'excellent';
        else if (percentage >= 60) niveau = 'bien';
        else if (percentage >= 40) niveau = 'a_revoir';
        else niveau = 'a_travailler';

        var MESSAGES = {
            excellent: 'Bravo ! Tu maitrises bien ce sujet. Continue comme ca !',
            bien: 'Bien joue ! Quelques points a consolider, mais tu es sur la bonne voie.',
            a_revoir: 'Pas mal ! Revois les points rates et refais le quiz demain.',
            a_travailler: 'Ce n\'est qu\'un debut. Relis ta fiche et retente le quiz, tu vas progresser !'
        };

        return {
            score: score,
            total: total,
            percentage: percentage,
            niveau: niveau,
            message: MESSAGES[niveau],
            results: results
        };
    }

    // ==================== HELPERS ====================
    function saveQuizHistory(quiz) {
        var history = window.StudFlow.storage.loadData('quizGenHistory', { quizzes: [], total: 0 });
        history.quizzes.push({
            titre: quiz.titre,
            mode: quiz.mode,
            questionsCount: quiz.questions.length,
            date: quiz.generatedAt
        });
        if (history.quizzes.length > 50) history.quizzes = history.quizzes.slice(-30);
        history.total = (history.total || 0) + 1;
        history.lastDate = new Date().toISOString();
        window.StudFlow.storage.saveData('quizGenHistory', history);
    }

    function getHistory() {
        return window.StudFlow.storage.loadData('quizGenHistory', { quizzes: [], total: 0 });
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.quizGenerator = {
        generateFromText: generateFromText,
        generateMethodo: generateMethodo,
        getMethodoTypes: getMethodoTypes,
        scoreQuiz: scoreQuiz,
        getHistory: getHistory
    };
})();
