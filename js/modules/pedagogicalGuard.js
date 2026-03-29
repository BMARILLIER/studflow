// pedagogicalGuard.js — Validation pedagogique avant affichage
// Filtre, verifie et tague le contenu genere (IA, PDF) avant qu'il soit montre a l'eleve.
(function() {
    'use strict';

    // ==================== STATUTS ====================
    var STATUS = {
        VALIDATED: 'validated',     // Contenu en dur ou verifie
        TO_VERIFY: 'to_verify',     // Genere par IA, semble correct mais non garanti
        REJECTED: 'rejected',       // Echoue la validation
        OUT_OF_SCOPE: 'out_of_scope' // Hors programme lycee
    };

    // ==================== REGLES DE REJET ====================
    // Flashcard rejetee si l'une de ces conditions est vraie
    function validateFlashcard(card) {
        if (!card || !card.question || !card.answer) {
            return { status: STATUS.REJECTED, reason: 'Carte vide ou incomplete' };
        }

        var q = card.question.trim();
        var a = card.answer.trim();

        // Trop court — pas exploitable
        if (q.length < 5) {
            return { status: STATUS.REJECTED, reason: 'Question trop courte' };
        }
        if (a.length < 3) {
            return { status: STATUS.REJECTED, reason: 'Reponse trop courte' };
        }

        // Trop long — pas memorisable
        if (a.length > 600) {
            return { status: STATUS.REJECTED, reason: 'Reponse trop longue (>600 car.)' };
        }

        // Detection hors programme — mots cles universitaires
        var outOfScope = checkOutOfScope(q + ' ' + a);
        if (outOfScope) {
            return { status: STATUS.OUT_OF_SCOPE, reason: outOfScope };
        }

        // Detection contenu vide/generique
        if (isGenericContent(q) || isGenericContent(a)) {
            return { status: STATUS.REJECTED, reason: 'Contenu trop generique' };
        }

        // Validation specifique par matiere (maths, francais, philo, etc.)
        var subjectCheck = validateBySubject(card);
        if (!subjectCheck.ok) {
            return { status: STATUS.REJECTED, reason: subjectCheck.reason, subject: subjectCheck.subject };
        }

        // Contenu en dur = valide
        if (card._source === 'hardcoded' || card._source === 'subject') {
            return { status: STATUS.VALIDATED, subject: subjectCheck.subject };
        }

        return { status: STATUS.TO_VERIFY, subject: subjectCheck.subject };
    }

    function validateQuiz(quiz) {
        if (!quiz || !quiz.question || !quiz.options) {
            return { status: STATUS.REJECTED, reason: 'Quiz incomplet' };
        }

        if (!Array.isArray(quiz.options) || quiz.options.length < 2) {
            return { status: STATUS.REJECTED, reason: 'Moins de 2 options' };
        }

        if (typeof quiz.correctIndex !== 'number' || quiz.correctIndex < 0 || quiz.correctIndex >= quiz.options.length) {
            return { status: STATUS.REJECTED, reason: 'Index de reponse correcte invalide' };
        }

        // Toutes les options identiques
        var uniqueOpts = {};
        quiz.options.forEach(function(o) { uniqueOpts[o.toLowerCase().trim()] = true; });
        if (Object.keys(uniqueOpts).length < 2) {
            return { status: STATUS.REJECTED, reason: 'Options identiques' };
        }

        var outOfScope = checkOutOfScope(quiz.question + ' ' + quiz.options.join(' '));
        if (outOfScope) {
            return { status: STATUS.OUT_OF_SCOPE, reason: outOfScope };
        }

        if (quiz._source === 'hardcoded' || quiz._source === 'subject') {
            return { status: STATUS.VALIDATED };
        }

        return { status: STATUS.TO_VERIFY };
    }

    // ==================== DETECTION HORS PROGRAMME ====================
    // Mots cles qui signalent du contenu universitaire ou hors programme lycee
    var OUT_OF_SCOPE_TERMS = [
        'topologie', 'espace vectoriel norme', 'hilbert', 'banach', 'lebesgue',
        'mesure de borel', 'sigma-algebre', 'integrale de lebesgue',
        'groupe abelien', 'anneau commutatif', 'corps des', 'espace dual',
        'theoreme de hahn-banach', 'analyse fonctionnelle', 'operateur lineaire borne',
        'convergence faible', 'serie de fourier', 'transformee de laplace',
        'equation differentielle partielle', 'distribution de schwartz',
        'variete differentiable', 'tenseur', 'fibre vectoriel',
        'homologie', 'cohomologie', 'categorie', 'foncteur',
        'theorie des graphes', 'algorithme de dijkstra',
        'licence', 'master', 'prepa', 'cpge'
    ];

    function checkOutOfScope(text) {
        if (!text) return null;
        var lower = text.toLowerCase();
        for (var i = 0; i < OUT_OF_SCOPE_TERMS.length; i++) {
            if (lower.indexOf(OUT_OF_SCOPE_TERMS[i]) !== -1) {
                return 'Terme hors programme : ' + OUT_OF_SCOPE_TERMS[i];
            }
        }
        return null;
    }

    // ==================== DETECTION DE MATIERE ====================
    var SUBJECT_KEYWORDS = {
        maths: ['derivee', 'integrale', 'fonction', 'equation', 'inequation', 'limite', 'suite', 'probabilite', 'vecteur', 'matrice', 'complexe', 'factorielle', 'binomiale', 'primitive', 'exponentielle', 'logarithme', 'trigonometrie', 'cosinus', 'sinus', 'theoreme', 'pgcd', 'arithmetique', 'geometrie', 'scalaire', 'denombrement'],
        francais: ['metaphore', 'roman', 'poesie', 'theatre', 'auteur', 'personnage', 'narrateur', 'registre', 'figure de style', 'dissertation', 'commentaire', 'argumentation', 'romantisme', 'realisme', 'naturalisme', 'symbolisme', 'alexandrin', 'sonnet', 'voltaire', 'hugo', 'baudelaire', 'moliere', 'racine', 'zola', 'flaubert'],
        philo: ['conscience', 'liberte', 'devoir', 'morale', 'ethique', 'verite', 'justice', 'bonheur', 'desir', 'raison', 'existence', 'politique', 'etat', 'nature', 'culture', 'travail', 'technique', 'art', 'religion', 'kant', 'descartes', 'platon', 'aristote', 'nietzsche', 'sartre', 'rousseau'],
        histgeo: ['revolution', 'guerre mondiale', 'decolonisation', 'guerre froide', 'mondialisation', 'democratie', 'republique', 'territoire', 'geopolitique', 'industrialisation', 'colonisation', 'imperialisme', 'napoleon', 'urbanisation', 'amenagement'],
        svt: ['cellule', 'adn', 'gene', 'mutation', 'enzyme', 'photosynthese', 'evolution', 'selection naturelle', 'immunite', 'anticorps', 'mitose', 'meiose', 'chromosome', 'biodiversite', 'ecosysteme', 'reproduction', 'hormone'],
        physique: ['newton', 'force', 'energie', 'cinetique', 'potentielle', 'onde', 'frequence', 'longueur d\'onde', 'refraction', 'diffraction', 'reaction chimique', 'oxydation', 'reduction', 'atome', 'molecule', 'radioactivite', 'noyau', 'photon'],
        ses: ['marche', 'offre', 'demande', 'pib', 'croissance', 'chomage', 'inflation', 'inegalites', 'mobilite sociale', 'mondialisation', 'commerce international', 'socialisation', 'institution']
    };

    function detectSubject(text) {
        if (!text) return null;
        var lower = text.toLowerCase();
        var scores = {};
        var best = null;
        var bestScore = 0;

        for (var subject in SUBJECT_KEYWORDS) {
            scores[subject] = 0;
            var keywords = SUBJECT_KEYWORDS[subject];
            for (var i = 0; i < keywords.length; i++) {
                if (lower.indexOf(keywords[i]) !== -1) {
                    scores[subject]++;
                }
            }
            if (scores[subject] > bestScore) {
                bestScore = scores[subject];
                best = subject;
            }
        }

        return bestScore >= 1 ? best : null;
    }

    // ==================== VALIDATION PAR MATIERE ====================
    var SUBJECT_VALIDATORS = {
        maths: function(card) {
            var text = (card.question + ' ' + card.answer).toLowerCase();
            // Rejet si formule manifestement fausse (resultats classiques errones)
            if (/0\s*\/\s*0\s*=/.test(text)) return { ok: false, reason: 'Division par zero' };
            if (/1\s*\+\s*1\s*=\s*[^2]/.test(text)) return { ok: false, reason: 'Erreur arithmetique' };
            // Rejet si aucune formule ou concept math
            var hasMath = /[=+\-*/^]|\\[()\[\]]|formule|calcul|derive|integr|limit|suite|proba/i.test(text);
            if (!hasMath && card._source === 'generated') return { ok: false, reason: 'Pas de contenu mathematique identifie' };
            return { ok: true };
        },
        francais: function(card) {
            var a = (card.answer || '').trim();
            // Rejet si reponse trop vague (moins de 15 caracteres pour du francais)
            if (a.length < 15 && card._source === 'generated') return { ok: false, reason: 'Reponse trop vague pour du francais' };
            return { ok: true };
        },
        philo: function(card) {
            var a = (card.answer || '').trim();
            // Rejet si reponse sans argumentation (trop courte pour de la philo)
            if (a.length < 20 && card._source === 'generated') return { ok: false, reason: 'Reponse trop courte pour de la philo — pas d\'argumentation' };
            return { ok: true };
        },
        histgeo: function(card) {
            var text = (card.question + ' ' + card.answer);
            // Detection de dates manifestement fausses (siecles impossibles)
            if (/\b(19|20)\d{2}\s*(av|avant)\b/i.test(text)) return { ok: false, reason: 'Date possiblement anachronique' };
            return { ok: true };
        },
        svt: function(card) {
            return { ok: true };
        },
        physique: function(card) {
            return { ok: true };
        },
        ses: function(card) {
            return { ok: true };
        }
    };

    function validateBySubject(card) {
        var text = (card.question || '') + ' ' + (card.answer || '');
        var subject = detectSubject(text);
        if (!subject || !SUBJECT_VALIDATORS[subject]) return { ok: true, subject: subject };

        var result = SUBJECT_VALIDATORS[subject](card);
        result.subject = subject;
        return result;
    }

    // ==================== DETECTION CONTENU GENERIQUE ====================
    var GENERIC_PATTERNS = [
        /^(question|reponse|texte|contenu|exemple|titre)$/i,
        /^(q|a|r|q\d|a\d)$/i,
        /^lorem ipsum/i,
        /^placeholder/i,
        /^undefined$/i,
        /^null$/i,
        /^\[object/i
    ];

    function isGenericContent(text) {
        if (!text) return true;
        var trimmed = text.trim();
        for (var i = 0; i < GENERIC_PATTERNS.length; i++) {
            if (GENERIC_PATTERNS[i].test(trimmed)) return true;
        }
        return false;
    }

    // ==================== FILTRAGE EN BATCH ====================
    // Filtre un tableau de flashcards, retourne les valides + stats
    function filterFlashcards(cards, source) {
        var accepted = [];
        var rejected = 0;
        var outOfScope = 0;
        var toVerify = 0;

        cards.forEach(function(card) {
            card._source = source || 'generated';
            var result = validateFlashcard(card);
            card._confidence = result.status;

            if (result.status === STATUS.REJECTED) {
                rejected++;
                console.warn('[guard] Flashcard rejetee:', result.reason, '-', (card.question || '').substring(0, 50));
            } else if (result.status === STATUS.OUT_OF_SCOPE) {
                outOfScope++;
                console.warn('[guard] Flashcard hors programme:', result.reason, '-', (card.question || '').substring(0, 50));
            } else {
                if (result.status === STATUS.TO_VERIFY) toVerify++;
                accepted.push(card);
            }
        });

        if (rejected > 0 || outOfScope > 0) {
            console.log('[guard] Flashcards: ' + accepted.length + ' acceptees, ' + rejected + ' rejetees, ' + outOfScope + ' hors programme');
        }

        return {
            cards: accepted,
            stats: { accepted: accepted.length, rejected: rejected, outOfScope: outOfScope, toVerify: toVerify }
        };
    }

    function filterQuiz(questions, source) {
        var accepted = [];
        var rejected = 0;

        questions.forEach(function(q) {
            q._source = source || 'generated';
            var result = validateQuiz(q);
            q._confidence = result.status;

            if (result.status === STATUS.REJECTED || result.status === STATUS.OUT_OF_SCOPE) {
                rejected++;
                console.warn('[guard] Quiz rejete:', result.reason, '-', (q.question || '').substring(0, 50));
            } else {
                accepted.push(q);
            }
        });

        return { questions: accepted, stats: { accepted: accepted.length, rejected: rejected } };
    }

    // ==================== BADGE UI ====================
    // Retourne le HTML du badge de confiance
    function confidenceBadge(status) {
        if (status === STATUS.VALIDATED || !status) return '';
        if (status === STATUS.TO_VERIFY) {
            return '<span class="confidence-badge to-verify" title="Contenu genere par IA, a verifier">IA</span>';
        }
        return '';
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.pedagogicalGuard = {
        STATUS: STATUS,
        validateFlashcard: validateFlashcard,
        validateQuiz: validateQuiz,
        filterFlashcards: filterFlashcards,
        filterQuiz: filterQuiz,
        confidenceBadge: confidenceBadge
    };
})();
