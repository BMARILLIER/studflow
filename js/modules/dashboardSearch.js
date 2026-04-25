// dashboardSearch.js — Self-contained search box bound to the dashboard.
// Reads from #dash-search-input, writes to #dash-search-results, and
// delegates the actual matching to window.StudFlow.cardSearch.
// Extracted from dashboard.js to keep the dashboard file focused on
// rendering. Loaded after dashboard.js in main.js.
(function() {
    'use strict';

    var _searchTimer = null;

    function init() {
        var input = document.getElementById('dash-search-input');
        if (!input) return;

        input.addEventListener('input', function() {
            clearTimeout(_searchTimer);
            var query = input.value.trim();
            if (query.length < 3) {
                var resultsEl = document.getElementById('dash-search-results');
                if (resultsEl) resultsEl.innerHTML = '';
                return;
            }
            _searchTimer = setTimeout(function() { runQuery(query); }, 300);
        });

        input.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                clearTimeout(_searchTimer);
                var query = input.value.trim();
                if (query.length >= 2) runQuery(query);
            }
        });
    }

    function runQuery(query) {
        var resultsEl = document.getElementById('dash-search-results');
        if (!resultsEl) return;

        // Ensure subject data is loaded before searching across decks.
        if (window.StudFlow.subjects && window.StudFlow.subjects.preload) {
            window.StudFlow.subjects.preload().then(function() {
                renderResults(query, resultsEl);
            });
        } else {
            renderResults(query, resultsEl);
        }
    }

    function renderResults(query, container) {
        if (!window.StudFlow.cardSearch) {
            container.innerHTML = '<div class="dash-search-empty"><p>Recherche en cours de chargement...</p></div>';
            return;
        }

        var escape = (window.StudFlow.app && window.StudFlow.app.escapeText)
            ? window.StudFlow.app.escapeText
            : function(s) { return s; };

        var result = window.StudFlow.cardSearch.search(query, { maxResults: 6 });

        if (result.results.length === 0) {
            container.innerHTML = '<div class="dash-search-empty">'
                + '<p>Pas encore de cartes sur "' + escape(query) + '"</p>'
                + '</div>';
            return;
        }

        var html = '<div class="dash-search-count">' + result.total + ' carte' + (result.total > 1 ? 's' : '') + ' trouvee' + (result.total > 1 ? 's' : '') + '</div>';

        for (var i = 0; i < result.results.length; i++) {
            var card = result.results[i].card;
            var answer = (card.answer || card.explanation || '').replace(/<[^>]+>/g, '');
            if (answer.length > 100) answer = answer.substring(0, 100) + '...';

            html += '<div class="dash-search-card">'
                + '<div class="dash-search-card-head">'
                + '<span class="dash-search-badge">' + (card.subjectIcon || '') + ' ' + (card.subjectName || '') + '</span>'
                + '<span class="dash-search-section">' + (card.sectionTitle || '') + '</span>'
                + '</div>'
                + '<div class="dash-search-q">' + escape(card.question) + '</div>'
                + '<div class="dash-search-a">' + escape(answer) + '</div>'
                + '</div>';
        }

        if (result.results.length >= 3) {
            html += '<button class="dash-search-session-btn" data-action="cardSearch.launchSession" data-param="' + escape(query) + '">'
                + 'Lancer une session avec ces cartes →'
                + '</button>';
        }

        container.innerHTML = html;
    }

    window.StudFlow = window.StudFlow || {};
    window.StudFlow.dashboardSearch = {
        init: init,
        runQuery: runQuery
    };
})();
