// cardSearch.js — Recherche intelligente dans les cartes existantes
// Eleve tape librement → on cherche dans toutes les cartes → resultats scores
(function() {
    'use strict';

    // ==================== INDEX ====================
    // L'index est construit UNE FOIS au premier appel, puis cache
    var _index = null;
    var _indexBuilt = false;

    function buildIndex() {
        if (_indexBuilt) return _index;

        _index = [];
        var subjects = window.StudFlow.subjects ? window.StudFlow.subjects.getAll() : [];

        for (var i = 0; i < subjects.length; i++) {
            var subj = subjects[i];
            var sections = subj.sections || [];

            for (var j = 0; j < sections.length; j++) {
                var sec = sections[j];

                // Indexer les flashcards
                var cards = sec.flashcards || [];
                for (var k = 0; k < cards.length; k++) {
                    _index.push({
                        type: 'fc',
                        question: cards[k].question,
                        answer: cards[k].answer,
                        subject: subj.id,
                        subjectName: subj.name,
                        subjectIcon: subj.icon,
                        section: sec.id,
                        sectionTitle: sec.title,
                        // Texte searchable = tout concatene et normalise
                        _searchText: normalize(
                            cards[k].question + ' ' + cards[k].answer
                            + ' ' + subj.name + ' ' + (sec.title || '')
                        )
                    });
                }

                // Indexer les quiz
                var quizzes = sec.quiz || [];
                for (var q = 0; q < quizzes.length; q++) {
                    var quiz = quizzes[q];
                    _index.push({
                        type: 'quiz',
                        question: quiz.question,
                        options: quiz.options,
                        correctIndex: quiz.correctIndex,
                        explanation: quiz.explanation,
                        subject: subj.id,
                        subjectName: subj.name,
                        subjectIcon: subj.icon,
                        section: sec.id,
                        sectionTitle: sec.title,
                        _searchText: normalize(
                            quiz.question + ' ' + (quiz.explanation || '')
                            + ' ' + subj.name + ' ' + (sec.title || '')
                        )
                    });
                }
            }
        }

        _indexBuilt = true;
        return _index;
    }

    // ==================== NORMALISATION ====================
    // Supprime accents, met en minuscules, retire les mots inutiles
    var STOP_WORDS = ['le', 'la', 'les', 'un', 'une', 'des', 'de', 'du', 'et', 'en', 'est',
        'que', 'qui', 'dans', 'pour', 'par', 'sur', 'au', 'aux', 'son', 'sa', 'ses',
        'ce', 'cette', 'ces', 'se', 'ne', 'pas', 'on', 'il', 'elle', 'ils', 'elles',
        'ou', 'a', 'avec', 'tout', 'tous', 'mais', 'aussi', 'comme', 'plus', 'quoi',
        'quel', 'quelle', 'quels', 'quelles', 'c', 'd', 'l', 'n', 's', 'qu'];

    function normalize(text) {
        if (!text) return '';
        // Minuscules
        var t = text.toLowerCase();
        // Supprimer accents
        t = t.normalize ? t.normalize('NFD').replace(/[\u0300-\u036f]/g, '') : t;
        // Supprimer ponctuation et HTML
        t = t.replace(/<[^>]+>/g, ' ');
        t = t.replace(/[^a-z0-9\s]/g, ' ');
        // Supprimer espaces multiples
        t = t.replace(/\s+/g, ' ').trim();
        return t;
    }

    function tokenize(text) {
        var normalized = normalize(text);
        var words = normalized.split(' ');
        // Filtrer mots vides et mots trop courts
        var filtered = [];
        for (var i = 0; i < words.length; i++) {
            if (words[i].length > 2 && STOP_WORDS.indexOf(words[i]) === -1) {
                filtered.push(words[i]);
            }
        }
        return filtered;
    }

    // ==================== SYNONYMES / ALIAS ====================
    // Pour que "maths" trouve "mathematiques", "philo" trouve "philosophie", etc.
    var ALIASES = {
        'maths': ['mathematiques', 'maths', 'math'],
        'philo': ['philosophie', 'philo'],
        'geno': ['genetique', 'adn', 'gene', 'genes'],
        'physique': ['physique', 'chimie', 'physique-chimie'],
        'histoire': ['histoire', 'geo', 'geographie', 'histgeo', 'hist'],
        'francais': ['francais', 'litterature', 'lettres'],
        'eco': ['ses', 'economie', 'sociologie', 'economique', 'social'],
        'bio': ['svt', 'biologie', 'sciences', 'vie'],
        'anglais': ['anglais', 'english', 'langue'],
        'baudelaire': ['baudelaire', 'fleurs', 'spleen'],
        'moliere': ['moliere', 'tartuffe', 'avare', 'misanthrope'],
        'newton': ['newton', 'mecanique', 'force', 'inertie'],
        'voltaire': ['voltaire', 'candide', 'lumieres'],
        'rousseau': ['rousseau', 'contrat', 'inegalite'],
        'hugo': ['hugo', 'contemplations', 'miserables', 'hernani'],
        'derivee': ['derivee', 'derivees', 'derivation', 'tangente'],
        'integrale': ['integrale', 'integrales', 'primitive'],
        'probabilite': ['probabilite', 'probabilites', 'proba', 'denombrement'],
        'suite': ['suite', 'suites', 'arithmetique', 'geometrique', 'recurrence'],
        'revolution': ['revolution', 'revolutionnaire', '1789', 'bastille'],
        'guerre': ['guerre', 'mondiale', 'conflit', 'wwi', 'wwii'],
        'immunite': ['immunite', 'immunitaire', 'anticorps', 'vaccin', 'vaccination'],
        'evolution': ['evolution', 'darwin', 'selection', 'naturelle', 'espece'],
        'adn': ['adn', 'arn', 'gene', 'genetique', 'nucleotide', 'codon'],
        'cellule': ['cellule', 'cellulaire', 'mitose', 'meiose', 'division'],
        'energie': ['energie', 'cinetique', 'potentielle', 'mecanique', 'joule'],
        'theatre': ['theatre', 'tragedie', 'comedie', 'scene', 'acte'],
        'poesie': ['poesie', 'poeme', 'vers', 'rime', 'sonnet', 'alexandrin'],
        'roman': ['roman', 'romanesque', 'narrateur', 'personnage'],
        'argumentation': ['argumentation', 'argumenter', 'these', 'convaincre', 'persuader']
    };

    function expandQuery(tokens) {
        var expanded = tokens.slice();
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            for (var key in ALIASES) {
                var aliases = ALIASES[key];
                if (aliases.indexOf(token) !== -1) {
                    // Ajouter tous les synonymes
                    for (var a = 0; a < aliases.length; a++) {
                        if (expanded.indexOf(aliases[a]) === -1) {
                            expanded.push(aliases[a]);
                        }
                    }
                }
            }
        }
        return expanded;
    }

    // ==================== SCORING ====================
    function scoreCard(card, queryTokens) {
        var score = 0;
        var searchText = card._searchText;

        for (var i = 0; i < queryTokens.length; i++) {
            var token = queryTokens[i];

            // Match exact dans le texte searchable
            if (searchText.indexOf(token) !== -1) {
                score += 10;

                // Bonus si le mot est dans la question (plus pertinent)
                var questionNorm = normalize(card.question);
                if (questionNorm.indexOf(token) !== -1) {
                    score += 15;
                }

                // Bonus si le mot est dans le titre de section
                var sectionNorm = normalize(card.sectionTitle || '');
                if (sectionNorm.indexOf(token) !== -1) {
                    score += 8;
                }

                // Bonus si le mot est dans le nom de matiere
                var subjNorm = normalize(card.subjectName || '');
                if (subjNorm.indexOf(token) !== -1) {
                    score += 5;
                }
            }
        }

        // Bonus pour le nombre de tokens trouves (recompenser la couverture)
        var tokensFound = 0;
        for (var j = 0; j < queryTokens.length; j++) {
            if (searchText.indexOf(queryTokens[j]) !== -1) tokensFound++;
        }
        if (queryTokens.length > 0) {
            score += Math.round((tokensFound / queryTokens.length) * 20);
        }

        return score;
    }

    // ==================== RECHERCHE PRINCIPALE ====================
    function search(query, options) {
        options = options || {};
        var maxResults = options.maxResults || 10;
        var minScore = options.minScore || 5;
        var typeFilter = options.type || null; // 'fc', 'quiz', or null (both)
        var subjectFilter = options.subject || null; // subject id or null

        // Construire l'index si necessaire
        var index = buildIndex();

        // Tokenizer et expander la requete
        var tokens = tokenize(query);
        if (tokens.length === 0) return { results: [], query: query, tokens: [] };

        var expanded = expandQuery(tokens);

        // Scorer toutes les cartes
        var scored = [];
        for (var i = 0; i < index.length; i++) {
            var card = index[i];

            // Filtres
            if (typeFilter && card.type !== typeFilter) continue;
            if (subjectFilter && card.subject !== subjectFilter) continue;

            var s = scoreCard(card, expanded);
            if (s >= minScore) {
                scored.push({ card: card, score: s });
            }
        }

        // Trier par score decroissant
        scored.sort(function(a, b) { return b.score - a.score; });

        // Limiter
        var results = scored.slice(0, maxResults);

        // Suggestions de matieres si aucun resultat
        var suggestions = [];
        if (results.length === 0) {
            suggestions = getSuggestions(tokens);
        }

        return {
            results: results,
            query: query,
            tokens: tokens,
            expanded: expanded,
            suggestions: suggestions,
            total: scored.length
        };
    }

    // ==================== SUGGESTIONS SI RIEN TROUVE ====================
    function getSuggestions(tokens) {
        var subjects = window.StudFlow.subjects ? window.StudFlow.subjects.getAll() : [];
        var suggestions = [];

        // Chercher dans les titres de sections
        for (var i = 0; i < subjects.length; i++) {
            var subj = subjects[i];
            var sections = subj.sections || [];
            for (var j = 0; j < sections.length; j++) {
                var secNorm = normalize(sections[j].title || '');
                for (var k = 0; k < tokens.length; k++) {
                    if (secNorm.indexOf(tokens[k]) !== -1) {
                        suggestions.push({
                            subject: subj.id,
                            subjectName: subj.name,
                            section: sections[j].id,
                            sectionTitle: sections[j].title,
                            icon: subj.icon
                        });
                        break;
                    }
                }
            }
        }

        return suggestions.slice(0, 5);
    }

    // ==================== UI : BARRE DE RECHERCHE ====================
    function renderSearchBar(containerId) {
        var container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = '<div class="card-search">'
            + '<div class="card-search-input-wrap">'
            + '<input type="text" class="card-search-input" id="card-search-input" '
            + 'placeholder="Que veux-tu reviser ? (ex: Baudelaire, derivees, ADN...)" '
            + 'autocomplete="off">'
            + '<button class="card-search-btn" id="card-search-btn">Chercher</button>'
            + '</div>'
            + '<div class="card-search-results" id="card-search-results"></div>'
            + '</div>';

        var input = document.getElementById('card-search-input');
        var btn = document.getElementById('card-search-btn');

        // Recherche au clic
        btn.addEventListener('click', function() {
            doSearch(input.value);
        });

        // Recherche a Enter
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') doSearch(input.value);
        });

        // Recherche en temps reel (debounce 300ms)
        var debounceTimer = null;
        input.addEventListener('input', function() {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(function() {
                if (input.value.length >= 3) {
                    doSearch(input.value);
                } else {
                    document.getElementById('card-search-results').innerHTML = '';
                }
            }, 300);
        });
    }

    function doSearch(query) {
        var resultsEl = document.getElementById('card-search-results');
        if (!resultsEl) return;
        if (!query || query.trim().length < 2) {
            resultsEl.innerHTML = '';
            return;
        }

        // S'assurer que les donnees sont chargees
        if (window.StudFlow.subjects && window.StudFlow.subjects.preload) {
            window.StudFlow.subjects.preload().then(function() {
                _indexBuilt = false; // Rebuild si nouvelles donnees
                renderResults(query, resultsEl);
            });
        } else {
            renderResults(query, resultsEl);
        }
    }

    function renderResults(query, container) {
        var result = search(query);

        if (result.results.length === 0) {
            // Rien trouve — suggestions ou generation
            var html = '<div class="card-search-empty">'
                + '<p class="card-search-empty-text">Aucune carte trouvee pour "' + escapeHtml(query) + '"</p>';

            if (result.suggestions.length > 0) {
                html += '<p class="card-search-suggest-label">Sections proches :</p>'
                    + '<div class="card-search-suggestions">';
                for (var s = 0; s < result.suggestions.length; s++) {
                    var sug = result.suggestions[s];
                    html += '<button class="card-search-suggest-btn" '
                        + 'data-action="dashboard.goTo" data-param="subj_' + sug.subject + '">'
                        + sug.icon + ' ' + escapeHtml(sug.sectionTitle)
                        + '</button>';
                }
                html += '</div>';
            }

            html += '<button class="card-search-generate-btn" '
                + 'data-action="cardSearch.requestGenerate" data-param="' + escapeHtml(query) + '">'
                + 'Generer des cartes sur ce sujet'
                + '</button>'
                + '</div>';

            container.innerHTML = html;
            return;
        }

        // Afficher les resultats
        var html = '<div class="card-search-count">'
            + result.results.length + ' carte' + (result.results.length > 1 ? 's' : '')
            + ' trouvee' + (result.results.length > 1 ? 's' : '')
            + '</div>';

        for (var i = 0; i < result.results.length; i++) {
            var r = result.results[i];
            var card = r.card;
            var typeLabel = card.type === 'fc' ? 'Flashcard' : 'Quiz';
            var typeClass = card.type === 'fc' ? 'card-search-fc' : 'card-search-quiz';

            html += '<div class="card-search-result ' + typeClass + '">'
                + '<div class="card-search-result-header">'
                + '<span class="card-search-badge">' + card.subjectIcon + ' ' + escapeHtml(card.subjectName) + '</span>'
                + '<span class="card-search-section">' + escapeHtml(card.sectionTitle) + '</span>'
                + '<span class="card-search-type">' + typeLabel + '</span>'
                + '</div>'
                + '<div class="card-search-question">' + escapeHtml(card.question) + '</div>'
                + '<div class="card-search-answer">' + truncate(card.answer || card.explanation || '', 120) + '</div>'
                + '</div>';
        }

        // Bouton pour lancer une session avec ces cartes
        if (result.results.length >= 3) {
            html += '<button class="card-search-session-btn" '
                + 'data-action="cardSearch.launchSession" data-param="' + escapeHtml(query) + '">'
                + 'Lancer une session avec ces cartes'
                + '</button>';
        }

        container.innerHTML = html;
    }

    // ==================== ACTIONS ====================
    function launchSession(query) {
        var result = search(query, { maxResults: 15 });
        if (result.results.length === 0) return;

        // Extraire les flashcards pour la session
        var items = [];
        for (var i = 0; i < result.results.length; i++) {
            var card = result.results[i].card;
            if (card.type === 'fc') {
                items.push({
                    type: 'fc',
                    data: { question: card.question, answer: card.answer },
                    done: false,
                    correct: null
                });
            } else {
                items.push({
                    type: 'quiz',
                    data: {
                        question: card.question,
                        options: card.options,
                        correctIndex: card.correctIndex,
                        explanation: card.explanation
                    },
                    done: false,
                    correct: null
                });
            }
        }

        // Lancer via dailySession.showWithItems
        if (window.StudFlow.dailySession && items.length > 0) {
            window.StudFlow.dailySession.showWithItems(items, 'Revision : ' + query);
        }
    }

    function requestGenerate(query) {
        // Fallback : ouvrir le coach avec la requete pre-remplie
        if (window.StudFlow.coach) {
            window.StudFlow.coach.show();
            // Essayer de pre-remplir le chat
            setTimeout(function() {
                var chatInput = document.querySelector('#coach-chat-input, .coach-chat-input');
                if (chatInput) {
                    chatInput.value = 'Explique-moi simplement : ' + query;
                    chatInput.focus();
                }
            }, 500);
        }
    }

    // ==================== HELPERS ====================
    function escapeHtml(str) {
        if (!str) return '';
        return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;').replace(/'/g, '&#039;');
    }

    function truncate(text, maxLen) {
        if (!text) return '';
        var clean = text.replace(/<[^>]+>/g, '');
        if (clean.length <= maxLen) return escapeHtml(clean);
        return escapeHtml(clean.substring(0, maxLen)) + '...';
    }

    // ==================== INVALIDATION ====================
    function invalidateIndex() {
        _indexBuilt = false;
        _index = null;
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.cardSearch = {
        search: search,
        renderSearchBar: renderSearchBar,
        launchSession: launchSession,
        requestGenerate: requestGenerate,
        invalidateIndex: invalidateIndex,
        buildIndex: buildIndex
    };

})();
