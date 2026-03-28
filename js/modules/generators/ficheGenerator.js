// ficheGenerator.js — Generateur de fiches de revision
(function() {

    var engine = function() { return window.StudFlow.engine; };

    // ==================== MODE A : NOTIONS BAC FRANCAIS ====================
    var FICHES_BAC_FR = {
        dissertation: {
            titre: 'Methode : La Dissertation',
            sections: [
                {
                    titre: 'Introduction',
                    points: [
                        'Accroche : citation, fait culturel ou question liee au sujet',
                        'Reformulation du sujet avec tes propres mots',
                        'Problematique : la question centrale que tu vas traiter',
                        'Annonce du plan (2 ou 3 parties)'
                    ]
                },
                {
                    titre: 'Developpement',
                    points: [
                        'Chaque partie = 1 idee principale + sous-parties',
                        'Chaque argument doit etre illustre par un exemple precis',
                        'Transitions entre les parties (bilan + annonce)',
                        'Plan dialectique : these / antithese / synthese',
                        'Plan thematique : aspect 1 / aspect 2 / aspect 3'
                    ]
                },
                {
                    titre: 'Conclusion',
                    points: [
                        'Bilan : reponse claire a la problematique',
                        'Ouverture : elargissement vers un autre sujet ou une question plus large',
                        'Jamais de nouvel argument en conclusion'
                    ]
                },
                {
                    titre: 'Pieges a eviter',
                    points: [
                        'Ne pas paraphraser le sujet sans le problematiser',
                        'Ne pas oublier les exemples (oeuvres, auteurs, citations)',
                        'Ne pas faire de hors-sujet : relire le sujet toutes les 20 min',
                        'Gerer son temps : 1h intro + plan, 2h developpement, 30 min conclusion + relecture'
                    ]
                }
            ],
            mnemoniques: [
                'IRED : Introduction, Reformulation, Exemples, Developpement',
                'Pour les transitions : BTA = Bilan, Transition, Annonce'
            ]
        },
        commentaire: {
            titre: 'Methode : Le Commentaire de texte',
            sections: [
                {
                    titre: 'Lecture et analyse',
                    points: [
                        'Lire le texte 3 fois minimum',
                        'Reperer : registre, figures de style, champs lexicaux, rythme',
                        'Identifier le genre (poesie, theatre, roman, essai)',
                        'Chercher le mouvement litteraire (romantisme, realisme, surrealisme...)',
                        'Se demander : quel effet produit ce texte ? Pourquoi ?'
                    ]
                },
                {
                    titre: 'Plan du commentaire',
                    points: [
                        '2 axes (ou 3 si tu es a l\'aise)',
                        'Chaque axe = une idee directrice sur le texte',
                        'Chaque sous-partie = un procede + citation + interpretation',
                        'Ne JAMAIS separer fond et forme'
                    ]
                },
                {
                    titre: 'Introduction',
                    points: [
                        'Contexte : auteur, oeuvre, epoque, mouvement',
                        'Presentation du texte : genre, theme, situation dans l\'oeuvre',
                        'Problematique',
                        'Annonce des axes'
                    ]
                },
                {
                    titre: 'Figures de style essentielles',
                    points: [
                        'Metaphore / Comparaison / Personnification',
                        'Anaphore / Enumeration / Gradation',
                        'Antithese / Oxymore / Paradoxe',
                        'Hyperbole / Litote / Euphemisme',
                        'Chiasme / Parallelisme'
                    ]
                }
            ],
            mnemoniques: [
                'PCI : Procede + Citation + Interpretation (pour chaque argument)',
                'Les 4 registres principaux : LCTP = Lyrique, Comique, Tragique, Pathetique'
            ]
        },
        oral: {
            titre: 'Methode : L\'Oral du Bac Francais',
            sections: [
                {
                    titre: 'Premiere partie : Explication lineaire (12 min)',
                    points: [
                        'Introduction rapide (30s) : auteur, oeuvre, extrait, problematique',
                        'Suivre le texte dans l\'ordre, mouvement par mouvement',
                        'Citer le texte a chaque analyse',
                        'Conclure : reponse a la problematique + ouverture',
                        'Parler clairement, pas trop vite'
                    ]
                },
                {
                    titre: 'Deuxieme partie : Entretien (8 min)',
                    points: [
                        'Questions sur l\'oeuvre choisie pour le parcours',
                        'Montrer que tu as LU l\'oeuvre entiere',
                        'Avoir des passages precis en tete',
                        'Donner ton avis personnel argumente',
                        'Si tu ne sais pas : reformuler, prendre du recul, ne pas paniquer'
                    ]
                },
                {
                    titre: 'Conseils pratiques',
                    points: [
                        'Reviser tes 20 textes a l\'avance (pas la veille)',
                        'S\'enregistrer pour s\'entrainer a l\'oral',
                        'Preparer une fiche par texte (max 1 page recto)',
                        'Arriver 15 min en avance, respirer',
                        'Sourire, regarder l\'examinateur, articuler'
                    ]
                }
            ],
            mnemoniques: [
                'Pour l\'intro orale : AOEP = Auteur, Oeuvre, Extrait, Problematique',
                '12+8 = 20 min total. 12 min lineaire, 8 min entretien'
            ]
        },
        checklist_revision: {
            titre: 'Checklist : Revision Bac Francais',
            sections: [
                {
                    titre: 'A connaitre par coeur',
                    points: [
                        'Les 20 textes du descriptif',
                        'L\'oeuvre integrale choisie pour l\'entretien',
                        'Les mouvements litteraires au programme',
                        'Les figures de style principales',
                        'La methode dissertation + commentaire + lineaire'
                    ]
                },
                {
                    titre: 'A preparer',
                    points: [
                        '1 fiche par texte (auteur, oeuvre, mouvement, procedes, problematique)',
                        '1 fiche methode dissertation',
                        '1 fiche methode commentaire',
                        '1 fiche methode oral',
                        'Au moins 3 sujets de dissertation traites en entier'
                    ]
                },
                {
                    titre: 'La semaine avant',
                    points: [
                        'Relire toutes ses fiches',
                        'Faire un sujet en temps reel',
                        'S\'entrainer a l\'oral devant quelqu\'un',
                        'Preparer ses affaires (stylos, montre, eau)',
                        'Dormir tot la veille (8h minimum)'
                    ]
                }
            ],
            mnemoniques: [
                'La regle des 3R : Relire, Reformuler, Reciter',
                'Chaque soir avant le bac : 3 fiches + 1 exercice = progres garanti'
            ]
        }
    };

    // ==================== MODE B : FICHE DEPUIS TEXTE ====================
    function generateFromText(text, options) {
        options = options || {};
        var titre = options.titre || 'Fiche de revision';
        var e = engine();

        var keywords = e.extractKeywords(text, 15);
        var titles = e.detectTitles(text);
        var keySentences = e.extractKeySentences(text, 8);
        var definitions = e.extractDefinitions(text, 5);
        var summary = e.generateSummary(text, 5);
        var questions = e.generateQuestionsFromText(keySentences, 5);

        // Build structured fiche
        var sections = [];

        // Section 1 : Resume
        if (summary.length > 0) {
            sections.push({
                titre: 'Resume des points cles',
                points: summary.map(function(s) {
                    return s.length > 200 ? s.substring(0, 200) + '...' : s;
                })
            });
        }

        // Section 2 : Mots-cles
        if (keywords.length > 0) {
            sections.push({
                titre: 'Mots-cles importants',
                points: keywords.map(function(kw) {
                    return kw.word + ' (mentionne ' + kw.count + ' fois)';
                })
            });
        }

        // Section 3 : Definitions
        if (definitions.length > 0) {
            sections.push({
                titre: 'Definitions trouvees',
                points: definitions
            });
        }

        // Section 4 : Structure du document
        if (titles.length > 0) {
            sections.push({
                titre: 'Structure du document',
                points: titles.map(function(t) { return t.text; })
            });
        }

        // Section 5 : Auto-evaluation
        if (questions.length > 0) {
            sections.push({
                titre: 'Questions d\'auto-evaluation',
                points: questions.map(function(q) { return q.question; })
            });
        }

        var fiche = {
            titre: titre,
            sections: sections,
            mnemoniques: generateMnemonics(keywords),
            mode: 'texte',
            stats: {
                motsAnalyses: text.split(/\s+/).length,
                motsCles: keywords.length,
                definitionsTrouvees: definitions.length,
                questionsCrees: questions.length
            },
            generatedAt: new Date().toISOString()
        };

        saveFicheHistory(fiche);
        return fiche;
    }

    // ==================== MODE A : FICHE BAC FRANCAIS ====================
    function generateBacFrancais(type) {
        var template = FICHES_BAC_FR[type];
        if (!template) return null;

        var fiche = {
            titre: template.titre,
            sections: template.sections,
            mnemoniques: template.mnemoniques,
            mode: 'bac_francais',
            type: type,
            generatedAt: new Date().toISOString()
        };

        saveFicheHistory(fiche);
        return fiche;
    }

    // ==================== HELPERS ====================
    function generateMnemonics(keywords) {
        if (!keywords || keywords.length < 3) return [];
        var mnemos = [];
        // Acronyme des premiers mots-cles
        var initials = keywords.slice(0, 5).map(function(kw) {
            return kw.word.charAt(0).toUpperCase();
        }).join('');
        if (initials.length >= 3) {
            mnemos.push('Acronyme a retenir : ' + initials + ' (' + keywords.slice(0, 5).map(function(kw) { return kw.word; }).join(', ') + ')');
        }
        // Conseil general
        mnemos.push('Astuce : recite les mots-cles a voix haute 3 fois pour les memoriser');
        return mnemos;
    }

    function getBacFrancaisTypes() {
        return Object.keys(FICHES_BAC_FR).map(function(key) {
            return { key: key, titre: FICHES_BAC_FR[key].titre };
        });
    }

    function saveFicheHistory(fiche) {
        var history = window.StudFlow.storage.loadData('ficheGenHistory', { fiches: [], total: 0 });
        history.fiches.push({
            titre: fiche.titre,
            mode: fiche.mode,
            date: fiche.generatedAt
        });
        if (history.fiches.length > 50) history.fiches = history.fiches.slice(-30);
        history.total = (history.total || 0) + 1;
        history.lastDate = new Date().toISOString();
        window.StudFlow.storage.saveData('ficheGenHistory', history);
        if (window.StudFlow.stats) window.StudFlow.stats.recordActivity('fiche');
    }

    function getHistory() {
        return window.StudFlow.storage.loadData('ficheGenHistory', { fiches: [], total: 0 });
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.ficheGenerator = {
        generateFromText: generateFromText,
        generateBacFrancais: generateBacFrancais,
        getBacFrancaisTypes: getBacFrancaisTypes,
        getHistory: getHistory
    };
})();
