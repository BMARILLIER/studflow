// generatorViews.js — Vues de detail pour les contenus generes
(function() {

    var currentQuiz = null;
    var currentAnswers = [];
    var currentFiche = null;
    var currentAdvice = null;

    // ==================== VUE CONSEIL ====================
    function showAdvice(conseil) {
        var container = document.getElementById('generators-content');
        if (!container) return;

        currentAdvice = conseil;

        container.innerHTML =
            '<div class="gen-view gen-view-advice">' +
                '<div class="gen-view-header">' +
                    '<button class="btn-back" data-action="generatorHub.renderMain">' +
                        '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>' +
                    '</button>' +
                    '<span class="gen-view-badge">Conseil ' + conseil.category + '</span>' +
                '</div>' +

                '<div class="gen-advice-card">' +
                    '<h2>' + conseil.titre + '</h2>' +
                    '<div class="gen-advice-section">' +
                        '<h4>Pourquoi ?</h4>' +
                        '<p>' + conseil.explication + '</p>' +
                    '</div>' +
                    '<div class="gen-advice-section gen-advice-action">' +
                        '<h4>A faire maintenant</h4>' +
                        '<p>' + conseil.action + '</p>' +
                    '</div>' +
                    '<div class="gen-advice-encouragement">' +
                        '<p>' + conseil.encouragement + '</p>' +
                    '</div>' +
                '</div>' +

                '<div class="gen-view-actions">' +
                    '<button class="btn-primary" data-action="generatorHub.openConseil">Autre conseil</button>' +
                    '<button class="btn-secondary" data-action="generatorViews.copyAdvice">Copier</button>' +
                '</div>' +
            '</div>';
    }

    function copyAdvice() {
        if (!currentAdvice) return;
        var text = currentAdvice.titre + '\n\n' +
            currentAdvice.explication + '\n\n' +
            'A faire : ' + currentAdvice.action + '\n\n' +
            currentAdvice.encouragement;
        copyToClipboard(text);
    }

    // ==================== VUE FICHE ====================
    function showFiche(fiche) {
        var container = document.getElementById('generators-content');
        if (!container) return;

        currentFiche = fiche;

        var sectionsHtml = (fiche.sections || []).map(function(section, idx) {
            var pointsHtml = (section.points || []).map(function(p) {
                return '<li>' + p + '</li>';
            }).join('');
            return '<div class="gen-fiche-section">' +
                '<h3><span class="gen-fiche-num">' + (idx + 1) + '</span> ' + section.titre + '</h3>' +
                '<ul>' + pointsHtml + '</ul>' +
            '</div>';
        }).join('');

        var mnemosHtml = '';
        if (fiche.mnemoniques && fiche.mnemoniques.length > 0) {
            mnemosHtml = '<div class="gen-fiche-mnemos">' +
                '<h3>Moyens mnemotechniques</h3>' +
                fiche.mnemoniques.map(function(m) {
                    return '<div class="gen-fiche-mnemo">' + m + '</div>';
                }).join('') +
            '</div>';
        }

        var statsHtml = '';
        if (fiche.stats) {
            statsHtml = '<div class="gen-fiche-stats">' +
                '<span>' + (fiche.stats.motsAnalyses || 0) + ' mots analyses</span>' +
                '<span>' + (fiche.stats.motsCles || 0) + ' mots-cles</span>' +
                '<span>' + (fiche.stats.definitionsTrouvees || 0) + ' definitions</span>' +
                '<span>' + (fiche.stats.questionsCrees || 0) + ' questions</span>' +
            '</div>';
        }

        var modeLabel = fiche.mode === 'bac_francais' ? 'Methodo Bac' : 'Genere a partir de ton document (local)';

        container.innerHTML =
            '<div class="gen-view gen-view-fiche">' +
                '<div class="gen-view-header">' +
                    '<button class="btn-back" data-action="generatorHub.openFicheMenu">' +
                        '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>' +
                    '</button>' +
                    '<span class="gen-view-badge">' + modeLabel + '</span>' +
                '</div>' +

                '<div class="gen-fiche-card">' +
                    '<h2>' + fiche.titre + '</h2>' +
                    statsHtml +
                    sectionsHtml +
                    mnemosHtml +
                '</div>' +

                '<div class="gen-view-actions">' +
                    '<button class="btn-secondary" data-action="generatorViews.copyFiche">Copier</button>' +
                    '<button class="btn-secondary" data-action="generatorViews.exportFiche" data-param="txt">TXT</button>' +
                    '<button class="btn-secondary" data-action="generatorViews.exportFiche" data-param="json">JSON</button>' +
                    '<button class="btn-secondary" data-action="generatorViews.exportFiche" data-param="pdf">PDF</button>' +
                '</div>' +
            '</div>';
    }

    // ==================== VUE QUIZ ====================
    function showQuiz(quiz) {
        currentQuiz = quiz;
        currentAnswers = new Array(quiz.questions.length).fill(null);
        renderQuizQuestion(0);
    }

    function renderQuizQuestion(idx) {
        var container = document.getElementById('generators-content');
        if (!container || !currentQuiz) return;

        var q = currentQuiz.questions[idx];
        var total = currentQuiz.questions.length;
        var progress = Math.round(((idx) / total) * 100);

        var choicesHtml = '';
        if (q.type === 'vrai_faux') {
            choicesHtml =
                '<div class="gen-quiz-choices">' +
                    '<button class="gen-quiz-choice' + (currentAnswers[idx] === 'Vrai' ? ' selected' : '') + '" data-qidx="' + idx + '" data-answer="Vrai">Vrai</button>' +
                    '<button class="gen-quiz-choice' + (currentAnswers[idx] === 'Faux' ? ' selected' : '') + '" data-qidx="' + idx + '" data-answer="Faux">Faux</button>' +
                '</div>';
        } else if (q.type === 'ouverte') {
            choicesHtml =
                '<div class="gen-quiz-open">' +
                    '<p class="gen-quiz-hint">Question ouverte — reflechis puis clique pour voir la reponse</p>' +
                    '<button class="btn-secondary" data-action="generatorViews.showOpenAnswer" data-param="' + idx + '">Voir la reponse</button>' +
                    '<div id="gen-open-answer-' + idx + '" class="gen-quiz-open-answer" style="display:none">' +
                        '<p>' + q.correct + '</p>' +
                        '<div class="gen-quiz-self-eval">' +
                            '<span>Tu savais ?</span>' +
                            '<button class="gen-quiz-eval-btn" data-qidx="' + idx + '" data-answer="__correct__">Oui</button>' +
                            '<button class="gen-quiz-eval-btn" data-qidx="' + idx + '" data-answer="wrong">Non</button>' +
                        '</div>' +
                    '</div>' +
                '</div>';
        } else {
            // QCM — use data attributes to avoid escaping issues
            var choices = q.choices || [q.correct].concat(q.distractors);
            choicesHtml = '<div class="gen-quiz-choices">' +
                choices.map(function(c, ci) {
                    var sel = currentAnswers[idx] === c ? ' selected' : '';
                    return '<button class="gen-quiz-choice' + sel + '" data-qidx="' + idx + '" data-cidx="' + ci + '">' + c + '</button>';
                }).join('') +
            '</div>';
        }

        container.innerHTML =
            '<div class="gen-view gen-view-quiz">' +
                '<div class="gen-view-header">' +
                    '<button class="btn-back" data-action="generatorHub.openQuizMenu">' +
                        '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>' +
                    '</button>' +
                    '<span class="gen-view-badge">' + currentQuiz.titre + '</span>' +
                '</div>' +

                '<div class="gen-quiz-progress">' +
                    '<div class="gen-quiz-progress-bar"><div style="width:' + progress + '%"></div></div>' +
                    '<span>Question ' + (idx + 1) + ' / ' + total + '</span>' +
                '</div>' +

                '<div class="gen-quiz-card">' +
                    '<p class="gen-quiz-question">' + q.question + '</p>' +
                    choicesHtml +
                '</div>' +

                '<div class="gen-quiz-nav">' +
                    (idx > 0 ? '<button class="btn-secondary" data-action="generatorViews.quizPrev" data-param="' + idx + '">Precedent</button>' : '<span></span>') +
                    (idx < total - 1 ?
                        '<button class="btn-primary" data-action="generatorViews.quizNext" data-param="' + idx + '"' + (currentAnswers[idx] === null ? ' disabled' : '') + '>Suivant</button>'
                    :
                        '<button class="btn-primary" data-action="generatorViews.quizFinish"' + (currentAnswers[idx] === null ? ' disabled' : '') + '>Terminer</button>'
                    ) +
                '</div>' +
            '</div>';

        // Bind click events via delegation (avoids inline quote escaping issues)
        bindQuizChoiceEvents(idx);
    }

    function bindQuizChoiceEvents(idx) {
        var q = currentQuiz.questions[idx];
        var choices = q.choices || [q.correct].concat(q.distractors || []);

        // QCM and vrai/faux buttons
        var buttons = document.querySelectorAll('.gen-quiz-choice[data-qidx="' + idx + '"]');
        buttons.forEach(function(btn) {
            btn.addEventListener('click', function() {
                var cidx = btn.getAttribute('data-cidx');
                var answer = btn.getAttribute('data-answer');
                if (cidx !== null) {
                    // QCM — get the choice text by index
                    selectAnswer(idx, choices[parseInt(cidx)]);
                } else if (answer) {
                    // vrai/faux
                    selectAnswer(idx, answer);
                }
            });
        });

        // Open question eval buttons
        var evalBtns = document.querySelectorAll('.gen-quiz-eval-btn[data-qidx="' + idx + '"]');
        evalBtns.forEach(function(btn) {
            btn.addEventListener('click', function() {
                var answer = btn.getAttribute('data-answer');
                if (answer === '__correct__') {
                    selectAnswer(idx, q.correct);
                } else {
                    selectAnswer(idx, 'wrong');
                }
            });
        });
    }

    function selectAnswer(idx, answer) {
        currentAnswers[idx] = answer;
        renderQuizQuestion(idx);
    }

    function showOpenAnswer(idx) {
        var el = document.getElementById('gen-open-answer-' + idx);
        if (el) el.style.display = 'block';
    }

    function quizNext(idx) {
        if (currentAnswers[idx] !== null) renderQuizQuestion(idx + 1);
    }

    function quizPrev(idx) {
        if (idx > 0) renderQuizQuestion(idx - 1);
    }

    function quizFinish() {
        if (!currentQuiz) return;
        var result = window.StudFlow.quizGenerator.scoreQuiz(currentQuiz, currentAnswers);
        showQuizResult(result);
    }

    function showQuizResult(result) {
        var container = document.getElementById('generators-content');
        if (!container) return;

        var color = result.percentage >= 80 ? '#10b981' : result.percentage >= 60 ? '#f59e0b' : result.percentage >= 40 ? '#f97316' : '#ef4444';

        var detailsHtml = result.results.map(function(r, i) {
            var icon = r.isCorrect ? '&#9989;' : '&#10060;';
            return '<div class="gen-quiz-result-item ' + (r.isCorrect ? 'correct' : 'wrong') + '">' +
                '<span class="gen-quiz-result-icon">' + icon + '</span>' +
                '<div>' +
                    '<p class="gen-quiz-result-q">Q' + (i + 1) + '. ' + r.question + '</p>' +
                    (!r.isCorrect ? '<p class="gen-quiz-result-correct">Reponse : ' + r.correct + '</p>' : '') +
                '</div>' +
            '</div>';
        }).join('');

        container.innerHTML =
            '<div class="gen-view gen-view-result">' +
                '<div class="gen-view-header">' +
                    '<button class="btn-back" data-action="generatorHub.openQuizMenu">' +
                        '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>' +
                    '</button>' +
                    '<span class="gen-view-badge">Resultat</span>' +
                '</div>' +

                '<div class="gen-result-card">' +
                    '<div class="gen-result-score" style="border-color:' + color + '">' +
                        '<span class="gen-result-pct" style="color:' + color + '">' + result.percentage + '%</span>' +
                        '<span>' + result.score + ' / ' + result.total + '</span>' +
                    '</div>' +
                    '<p class="gen-result-message">' + result.message + '</p>' +
                '</div>' +

                '<div class="gen-result-details">' +
                    '<h3>Detail des reponses</h3>' +
                    detailsHtml +
                '</div>' +

                '<div class="gen-view-actions">' +
                    '<button class="btn-primary" data-action="generatorViews.retryQuiz">Recommencer</button>' +
                    '<button class="btn-secondary" data-action="generatorHub.renderMain">Retour hub</button>' +
                '</div>' +
                '<div class="gen-view-actions gen-export-row">' +
                    '<span class="gen-export-label">Exporter le quiz :</span>' +
                    '<button class="btn-secondary btn-sm" data-action="generatorViews.copyQuiz">Copier</button>' +
                    '<button class="btn-secondary btn-sm" data-action="generatorViews.exportQuiz" data-param="txt">TXT</button>' +
                    '<button class="btn-secondary btn-sm" data-action="generatorViews.exportQuiz" data-param="json">JSON</button>' +
                    '<button class="btn-secondary btn-sm" data-action="generatorViews.exportQuiz" data-param="pdf">PDF</button>' +
                '</div>' +
            '</div>';

        // XP for quiz completion
        if (window.StudFlow.gamification && window.StudFlow.gamification.addXP) {
            window.StudFlow.gamification.addXP('quiz_gen_complete');
        }
        if (window.StudFlow.stats) window.StudFlow.stats.recordActivity('quiz');
    }

    function retryQuiz() {
        if (currentQuiz) showQuiz(currentQuiz);
    }

    // ==================== EXPORT (delegue a exporter.js) ====================
    function exportFiche(format) {
        if (!currentFiche || !window.StudFlow.exporter) return;
        if (format === 'json') window.StudFlow.exporter.exportFicheAsJson(currentFiche);
        else if (format === 'pdf') window.StudFlow.exporter.exportFicheAsPdf(currentFiche);
        else window.StudFlow.exporter.exportFicheAsTxt(currentFiche);
    }

    function copyFiche() {
        if (!currentFiche || !window.StudFlow.exporter) return;
        window.StudFlow.exporter.copyFiche(currentFiche);
    }

    function exportQuiz(format) {
        if (!currentQuiz || !window.StudFlow.exporter) return;
        if (format === 'json') window.StudFlow.exporter.exportQuizAsJson(currentQuiz);
        else if (format === 'pdf') window.StudFlow.exporter.exportQuizAsPdf(currentQuiz);
        else window.StudFlow.exporter.exportQuizAsTxt(currentQuiz);
    }

    function copyQuiz() {
        if (!currentQuiz || !window.StudFlow.exporter) return;
        window.StudFlow.exporter.copyQuiz(currentQuiz);
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.generatorViews = {
        showAdvice: showAdvice,
        copyAdvice: copyAdvice,
        showFiche: showFiche,
        showQuiz: showQuiz,
        selectAnswer: selectAnswer,
        showOpenAnswer: showOpenAnswer,
        quizNext: quizNext,
        quizPrev: quizPrev,
        quizFinish: quizFinish,
        retryQuiz: retryQuiz,
        exportFiche: exportFiche,
        copyFiche: copyFiche,
        exportQuiz: exportQuiz,
        copyQuiz: copyQuiz,
        _currentQuiz: function() { return currentQuiz; },
        _currentFiche: function() { return currentFiche; }
    };
})();
