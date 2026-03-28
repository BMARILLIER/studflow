// generatorHub.js — Hub central des generateurs (ecran principal)
(function() {

    var storage = function() { return window.StudFlow.storage; };
    var views = function() { return window.StudFlow.generatorViews; };

    // ==================== RENDER HUB ====================
    function show() {
        renderMain();
    }

    function renderMain() {
        var container = document.getElementById('generators-content');
        if (!container) return;

        var adviceHistory = getHistoryCount('adviceGenHistory');
        var ficheHistory = getHistoryCount('ficheGenHistory');
        var quizHistory = getHistoryCount('quizGenHistory');

        var pdfText = storage().loadData('pdfText', '');
        var hasPdf = pdfText && pdfText.length > 50;
        var fileName = storage().loadData('pdfFileName', '');

        container.innerHTML =
            '<div class="gen-hub">' +
                '<div class="gen-hub-header">' +
                    '<button class="btn-back" data-action="app.showScreen" data-param="dashboard">' +
                        '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>' +
                    '</button>' +
                    '<div>' +
                        '<h2>Generateurs StudFlow</h2>' +
                        '<p class="gen-hub-sub">Cree tes outils de revision en un clic</p>' +
                    '</div>' +
                '</div>' +

                // PDF Status
                (hasPdf ?
                    '<div class="gen-pdf-status gen-pdf-active">' +
                        '<span class="gen-pdf-icon">&#128196;</span>' +
                        '<div class="gen-pdf-info">' +
                            '<strong>Document charge</strong>' +
                            '<span>' + (fileName || 'PDF importe') + '</span>' +
                        '</div>' +
                        '<span class="gen-pdf-badge">Pret</span>' +
                    '</div>'
                :
                    '<div class="gen-pdf-status gen-pdf-empty">' +
                        '<span class="gen-pdf-icon">&#128195;</span>' +
                        '<div class="gen-pdf-info">' +
                            '<strong>Aucun document</strong>' +
                            '<span>Importe un PDF pour generer fiches et quiz personnalises</span>' +
                        '</div>' +
                        '<button class="gen-pdf-btn" data-action="app.showScreen" data-param="upload">Importer</button>' +
                    '</div>'
                ) +

                // Cards
                '<div class="gen-cards">' +
                    // Conseil du jour
                    '<div class="gen-card gen-card-conseil" data-action="generatorHub.openConseil">' +
                        '<div class="gen-card-icon">&#128161;</div>' +
                        '<div class="gen-card-body">' +
                            '<h3>Conseil du jour</h3>' +
                            '<p>Un conseil personnalise adapte a ton profil</p>' +
                        '</div>' +
                        '<div class="gen-card-stat">' + adviceHistory + ' genere' + (adviceHistory > 1 ? 's' : '') + '</div>' +
                    '</div>' +

                    // Fiche de revision
                    '<div class="gen-card gen-card-fiche" data-action="generatorHub.openFicheMenu">' +
                        '<div class="gen-card-icon">&#128221;</div>' +
                        '<div class="gen-card-body">' +
                            '<h3>Fiche de revision</h3>' +
                            '<p>Methodo Bac Francais ou fiche depuis ton cours</p>' +
                        '</div>' +
                        '<div class="gen-card-stat">' + ficheHistory + ' fiche' + (ficheHistory > 1 ? 's' : '') + '</div>' +
                    '</div>' +

                    // Quiz
                    '<div class="gen-card gen-card-quiz" data-action="generatorHub.openQuizMenu">' +
                        '<div class="gen-card-icon">&#127919;</div>' +
                        '<div class="gen-card-body">' +
                            '<h3>Quiz de revision</h3>' +
                            '<p>Teste-toi sur la methodo ou sur ton cours</p>' +
                        '</div>' +
                        '<div class="gen-card-stat">' + quizHistory + ' quiz' + (quizHistory > 1 ? 'zes' : '') + '</div>' +
                    '</div>' +
                '</div>' +

                // Historique rapide
                '<div class="gen-history-section">' +
                    '<h3>Activite recente</h3>' +
                    renderRecentActivity() +
                '</div>' +
            '</div>';
    }

    // ==================== SOUS-MENUS ====================
    function openConseil() {
        var conseil = window.StudFlow.adviceGenerator.generate();
        views().showAdvice(conseil);
        if (window.StudFlow.stats) window.StudFlow.stats.recordActivity('conseil');
    }

    function openFicheMenu() {
        var container = document.getElementById('generators-content');
        if (!container) return;

        var pdfText = storage().loadData('pdfText', '');
        var hasPdf = pdfText && pdfText.length > 50;
        var types = window.StudFlow.ficheGenerator.getBacFrancaisTypes();

        var html =
            '<div class="gen-submenu">' +
                '<div class="gen-submenu-header">' +
                    '<button class="btn-back" data-action="generatorHub.renderMain">' +
                        '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>' +
                    '</button>' +
                    '<h2>Fiches de revision</h2>' +
                '</div>' +

                // Mode B: depuis PDF
                (hasPdf ?
                    '<div class="gen-option gen-option-highlight" data-action="generatorHub.generateFicheFromPdf">' +
                        '<span class="gen-option-icon">&#128196;</span>' +
                        '<div>' +
                            '<strong>Generer depuis mon document</strong>' +
                            '<p>Fiche automatique a partir de ton PDF importe</p>' +
                        '</div>' +
                    '</div>'
                : '') +

                // Mode A: Bac Francais
                '<div class="gen-option-group">' +
                    '<h4>Methodo Bac Francais</h4>' +
                    types.map(function(t) {
                        return '<div class="gen-option" data-action="generatorHub.generateFicheBac" data-param="' + t.key + '">' +
                            '<span class="gen-option-icon">&#128214;</span>' +
                            '<div>' +
                                '<strong>' + t.titre + '</strong>' +
                            '</div>' +
                        '</div>';
                    }).join('') +
                '</div>' +

                // Mode texte libre
                '<div class="gen-option gen-option-text" data-action="generatorHub.showFicheTextInput">' +
                    '<span class="gen-option-icon">&#9999;&#65039;</span>' +
                    '<div>' +
                        '<strong>Coller du texte</strong>' +
                        '<p>Colle un extrait de cours pour generer une fiche</p>' +
                    '</div>' +
                '</div>' +
            '</div>';

        container.innerHTML = html;
    }

    function openQuizMenu() {
        var container = document.getElementById('generators-content');
        if (!container) return;

        var pdfText = storage().loadData('pdfText', '');
        var hasPdf = pdfText && pdfText.length > 50;
        var types = window.StudFlow.quizGenerator.getMethodoTypes();

        var html =
            '<div class="gen-submenu">' +
                '<div class="gen-submenu-header">' +
                    '<button class="btn-back" data-action="generatorHub.renderMain">' +
                        '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>' +
                    '</button>' +
                    '<h2>Quiz de revision</h2>' +
                '</div>' +

                // Mode B: depuis PDF
                (hasPdf ?
                    '<div class="gen-option gen-option-highlight" data-action="generatorHub.generateQuizFromPdf">' +
                        '<span class="gen-option-icon">&#128196;</span>' +
                        '<div>' +
                            '<strong>Quiz depuis mon document</strong>' +
                            '<p>Questions generees automatiquement depuis ton PDF</p>' +
                        '</div>' +
                    '</div>'
                : '') +

                // Mode A: Methodo
                '<div class="gen-option-group">' +
                    '<h4>Quiz Methodo Bac</h4>' +
                    types.map(function(t) {
                        return '<div class="gen-option" data-action="generatorHub.generateQuizMethodo" data-param="' + t.key + '">' +
                            '<span class="gen-option-icon">&#127919;</span>' +
                            '<div>' +
                                '<strong>' + t.titre + '</strong>' +
                                '<p>' + t.count + ' questions</p>' +
                            '</div>' +
                        '</div>';
                    }).join('') +
                '</div>' +

                // Mode texte libre
                '<div class="gen-option gen-option-text" data-action="generatorHub.showQuizTextInput">' +
                    '<span class="gen-option-icon">&#9999;&#65039;</span>' +
                    '<div>' +
                        '<strong>Coller du texte</strong>' +
                        '<p>Colle un extrait de cours pour generer un quiz</p>' +
                    '</div>' +
                '</div>' +
            '</div>';

        container.innerHTML = html;
    }

    // ==================== LOADING HELPER ====================
    function showGenerating(msg) {
        var container = document.getElementById('generators-content');
        if (!container) return;
        container.innerHTML = '<div class="gen-loading"><div class="gen-loading-spinner"></div><p>' + (msg || 'Generation en cours...') + '</p></div>';
    }

    // ==================== GENERATION ACTIONS ====================
    function generateFicheFromPdf() {
        var pdfText = storage().loadData('pdfText', '');
        var fileName = storage().loadData('pdfFileName', 'Mon document');
        if (!pdfText || pdfText.length < 50) return;
        showGenerating('Creation de ta fiche...');
        setTimeout(function() {
            var fiche = window.StudFlow.ficheGenerator.generateFromText(pdfText, { titre: 'Fiche : ' + fileName });
            views().showFiche(fiche);
        }, 0);
    }

    function generateFicheBac(type) {
        showGenerating('Creation de ta fiche...');
        setTimeout(function() {
            var fiche = window.StudFlow.ficheGenerator.generateBacFrancais(type);
            if (fiche) views().showFiche(fiche);
        }, 0);
    }

    function showFicheTextInput() {
        showTextInput('fiche');
    }

    function generateFicheFromInput() {
        var textarea = document.getElementById('gen-text-input');
        if (!textarea || textarea.value.trim().length < 50) {
            showToast('Colle au moins quelques lignes de cours.');
            return;
        }
        var text = textarea.value.trim();
        showGenerating('Creation de ta fiche...');
        setTimeout(function() {
            var fiche = window.StudFlow.ficheGenerator.generateFromText(text, { titre: 'Fiche depuis texte colle' });
            views().showFiche(fiche);
        }, 0);
    }

    function generateQuizFromPdf() {
        var pdfText = storage().loadData('pdfText', '');
        if (!pdfText || pdfText.length < 50) return;
        showGenerating('Creation de ton quiz...');
        setTimeout(function() {
            var quiz = window.StudFlow.quizGenerator.generateFromText(pdfText, { titre: 'Quiz : Mon document' });
            views().showQuiz(quiz);
        }, 0);
    }

    function generateQuizMethodo(type) {
        showGenerating('Creation de ton quiz...');
        setTimeout(function() {
            var quiz = window.StudFlow.quizGenerator.generateMethodo(type);
            if (quiz) views().showQuiz(quiz);
        }, 0);
    }

    function showQuizTextInput() {
        showTextInput('quiz');
    }

    function generateQuizFromInput() {
        var textarea = document.getElementById('gen-text-input');
        if (!textarea || textarea.value.trim().length < 50) {
            showToast('Colle au moins quelques lignes de cours.');
            return;
        }
        var text = textarea.value.trim();
        showGenerating('Creation de ton quiz...');
        setTimeout(function() {
            var quiz = window.StudFlow.quizGenerator.generateFromText(text, { titre: 'Quiz depuis texte colle' });
            views().showQuiz(quiz);
        }, 0);
    }

    // ==================== TEXT INPUT SCREEN ====================
    function showTextInput(mode) {
        var container = document.getElementById('generators-content');
        if (!container) return;

        var btnLabel = mode === 'fiche' ? 'Generer ma fiche' : 'Generer mon quiz';
        var action = mode === 'fiche' ? 'generateFicheFromInput' : 'generateQuizFromInput';

        container.innerHTML =
            '<div class="gen-text-screen">' +
                '<div class="gen-submenu-header">' +
                    '<button class="btn-back" data-action="generatorHub.' + (mode === 'fiche' ? 'openFicheMenu' : 'openQuizMenu') + '">' +
                        '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>' +
                    '</button>' +
                    '<h2>Coller ton cours</h2>' +
                '</div>' +
                '<p class="gen-text-hint">Copie-colle un extrait de ton cours, un chapitre, ou des notes. Plus le texte est long, meilleure sera la generation.</p>' +
                '<textarea id="gen-text-input" class="gen-textarea" placeholder="Colle ton texte ici..." rows="12"></textarea>' +
                '<button class="btn-primary gen-text-btn" data-action="generatorHub.' + action + '">' + btnLabel + '</button>' +
            '</div>';

        setTimeout(function() {
            var ta = document.getElementById('gen-text-input');
            if (ta) ta.focus();
        }, 100);
    }

    // ==================== HELPERS ====================
    function getHistoryCount(key) {
        var h = storage().loadData(key, { total: 0 });
        return h.total || 0;
    }

    function renderRecentActivity() {
        var items = [];
        var fh = storage().loadData('ficheGenHistory', { fiches: [] });
        var qh = storage().loadData('quizGenHistory', { quizzes: [] });

        (fh.fiches || []).slice(-3).forEach(function(f) {
            items.push({ type: 'fiche', titre: f.titre, date: f.date });
        });
        (qh.quizzes || []).slice(-3).forEach(function(q) {
            items.push({ type: 'quiz', titre: q.titre, date: q.date });
        });

        items.sort(function(a, b) { return (b.date || '').localeCompare(a.date || ''); });
        items = items.slice(0, 5);

        if (items.length === 0) {
            return '<p class="gen-history-empty">Aucune activite pour le moment. Genere ta premiere fiche ou quiz !</p>';
        }

        return '<div class="gen-history-list">' +
            items.map(function(item) {
                var icon = item.type === 'fiche' ? '&#128221;' : '&#127919;';
                var ago = timeAgo(item.date);
                return '<div class="gen-history-item">' +
                    '<span class="gen-history-icon">' + icon + '</span>' +
                    '<span class="gen-history-titre">' + item.titre + '</span>' +
                    '<span class="gen-history-date">' + ago + '</span>' +
                '</div>';
            }).join('') +
        '</div>';
    }

    function timeAgo(dateStr) {
        if (!dateStr) return '';
        var diff = Date.now() - new Date(dateStr).getTime();
        var mins = Math.floor(diff / 60000);
        if (mins < 1) return 'A l\'instant';
        if (mins < 60) return 'Il y a ' + mins + ' min';
        var hours = Math.floor(mins / 60);
        if (hours < 24) return 'Il y a ' + hours + 'h';
        var days = Math.floor(hours / 24);
        return 'Il y a ' + days + 'j';
    }

    function showToast(msg) {
        if (window.StudFlow.gamification && window.StudFlow.gamification.showToast) {
            window.StudFlow.gamification.showToast(msg);
        } else {
            alert(msg);
        }
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.generatorHub = {
        show: show,
        renderMain: renderMain,
        openConseil: openConseil,
        openFicheMenu: openFicheMenu,
        openQuizMenu: openQuizMenu,
        generateFicheFromPdf: generateFicheFromPdf,
        generateFicheBac: generateFicheBac,
        showFicheTextInput: showFicheTextInput,
        generateFicheFromInput: generateFicheFromInput,
        generateQuizFromPdf: generateQuizFromPdf,
        generateQuizMethodo: generateQuizMethodo,
        showQuizTextInput: showQuizTextInput,
        generateQuizFromInput: generateQuizFromInput,
        showTextInput: showTextInput
    };
})();
