// exporter.js — Export centralise fiches, quiz, coach (TXT, JSON, PDF)
(function() {

    // ==================== UTILS ====================
    function repeat(char, count) {
        var result = '';
        for (var i = 0; i < count; i++) result += char;
        return result;
    }

    function slugify(text) {
        return text.toLowerCase()
            .replace(/[àáâãäå]/g, 'a')
            .replace(/[èéêë]/g, 'e')
            .replace(/[ìíîï]/g, 'i')
            .replace(/[òóôõö]/g, 'o')
            .replace(/[ùúûü]/g, 'u')
            .replace(/[ç]/g, 'c')
            .replace(/[^a-z0-9]+/g, '_')
            .replace(/^_|_$/g, '')
            .substring(0, 40);
    }

    function showToast(msg) {
        if (window.StudFlow.gamification && window.StudFlow.gamification.showToast) {
            window.StudFlow.gamification.showToast(msg);
        }
    }

    function stripHtml(html) {
        var tmp = document.createElement('div');
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || '';
    }

    function htmlToStructuredText(html) {
        var tmp = document.createElement('div');
        tmp.innerHTML = html;
        var lines = [];
        var children = tmp.querySelectorAll('h3, h4, p, li, ol, ul');
        if (children.length === 0) return stripHtml(html);

        var elements = tmp.children;
        for (var i = 0; i < elements.length; i++) {
            var el = elements[i];
            var tag = el.tagName.toLowerCase();
            if (tag === 'h3') {
                if (i > 0) lines.push('');
                lines.push(el.textContent);
                lines.push(repeat('-', el.textContent.length));
            } else if (tag === 'h4') {
                if (i > 0) lines.push('');
                lines.push(el.textContent);
            } else if (tag === 'p') {
                lines.push(el.textContent);
            } else if (tag === 'ul') {
                var lis = el.querySelectorAll('li');
                for (var j = 0; j < lis.length; j++) {
                    lines.push('  - ' + lis[j].textContent);
                }
            } else if (tag === 'ol') {
                var olis = el.querySelectorAll('li');
                for (var k = 0; k < olis.length; k++) {
                    lines.push('  ' + (k + 1) + '. ' + olis[k].textContent);
                }
            }
        }
        return lines.join('\n');
    }

    // ==================== DOWNLOAD / COPY ====================
    function downloadFile(content, filename, mimeType) {
        var blob = new Blob([content], { type: mimeType });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showToast('Fichier telecharge !');
    }

    function copyToClipboard(text) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(function() {
                showToast('Copie dans le presse-papier !');
            });
        } else {
            var ta = document.createElement('textarea');
            ta.value = text;
            ta.style.position = 'fixed';
            ta.style.opacity = '0';
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
            showToast('Copie !');
        }
    }

    // ==================== FICHE (generateur) ====================
    function ficheToTxt(fiche) {
        var lines = [];
        lines.push(fiche.titre);
        lines.push(repeat('=', fiche.titre.length));
        lines.push('');

        (fiche.sections || []).forEach(function(s, i) {
            lines.push((i + 1) + '. ' + s.titre);
            lines.push(repeat('-', s.titre.length + 4));
            (s.points || []).forEach(function(p) {
                lines.push('  - ' + p);
            });
            lines.push('');
        });

        if (fiche.mnemoniques && fiche.mnemoniques.length > 0) {
            lines.push('Mnemotechniques');
            lines.push(repeat('-', 15));
            fiche.mnemoniques.forEach(function(m) {
                lines.push('  * ' + m);
            });
            lines.push('');
        }

        lines.push('--- Genere par StudFlow ---');
        return lines.join('\n');
    }

    function ficheToJson(fiche) {
        return JSON.stringify(fiche, null, 2);
    }

    function ficheToHtml(fiche) {
        var sectionsHtml = (fiche.sections || []).map(function(s, i) {
            var points = (s.points || []).map(function(p) {
                return '<li>' + p + '</li>';
            }).join('');
            return '<h3>' + (i + 1) + '. ' + s.titre + '</h3><ul>' + points + '</ul>';
        }).join('');

        var mnemosHtml = '';
        if (fiche.mnemoniques && fiche.mnemoniques.length > 0) {
            mnemosHtml = '<h3>Mnemotechniques</h3><ul>' +
                fiche.mnemoniques.map(function(m) { return '<li>' + m + '</li>'; }).join('') +
                '</ul>';
        }

        return '<h1>' + fiche.titre + '</h1>' + sectionsHtml + mnemosHtml;
    }

    function exportFicheAsTxt(fiche) {
        if (!fiche) return;
        var text = ficheToTxt(fiche);
        var filename = 'fiche_' + slugify(fiche.titre) + '.txt';
        downloadFile(text, filename, 'text/plain');
    }

    function exportFicheAsJson(fiche) {
        if (!fiche) return;
        var json = ficheToJson(fiche);
        var filename = 'fiche_' + slugify(fiche.titre) + '.json';
        downloadFile(json, filename, 'application/json');
    }

    function exportFicheAsPdf(fiche) {
        if (!fiche) return;
        if (window.StudFlow.premium && !window.StudFlow.premium.hasAccess('export_pdf')) {
            window.StudFlow.premium.showPaywall('export_pdf');
            return;
        }
        var html = ficheToHtml(fiche);
        printContent(fiche.titre, html);
    }

    function copyFiche(fiche) {
        if (!fiche) return;
        copyToClipboard(ficheToTxt(fiche));
    }

    // ==================== QUIZ ====================
    function quizToTxt(quiz) {
        var lines = [];
        lines.push(quiz.titre || 'Quiz StudFlow');
        lines.push(repeat('=', (quiz.titre || 'Quiz StudFlow').length));
        lines.push('');

        (quiz.questions || []).forEach(function(q, i) {
            lines.push('Q' + (i + 1) + '. ' + q.question);
            if (q.type === 'vrai_faux') {
                lines.push('  [ ] Vrai   [ ] Faux');
            } else if (q.type === 'ouverte') {
                lines.push('  (Question ouverte)');
            } else {
                var choices = q.choices || [q.correct].concat(q.distractors || []);
                choices.forEach(function(c, ci) {
                    lines.push('  ' + String.fromCharCode(65 + ci) + ') ' + c);
                });
            }
            lines.push('  Reponse : ' + q.correct);
            lines.push('');
        });

        lines.push('--- Genere par StudFlow ---');
        return lines.join('\n');
    }

    function quizToJson(quiz) {
        return JSON.stringify(quiz, null, 2);
    }

    function quizToHtml(quiz) {
        var questionsHtml = (quiz.questions || []).map(function(q, i) {
            var answersHtml = '';
            if (q.type === 'vrai_faux') {
                answersHtml = '<p><strong>Reponse :</strong> ' + q.correct + '</p>';
            } else if (q.type === 'ouverte') {
                answersHtml = '<p><strong>Reponse :</strong> ' + q.correct + '</p>';
            } else {
                var choices = q.choices || [q.correct].concat(q.distractors || []);
                answersHtml = '<ul>' + choices.map(function(c, ci) {
                    var marker = c === q.correct ? '<strong>' + String.fromCharCode(65 + ci) + ') ' + c + ' ✓</strong>' : String.fromCharCode(65 + ci) + ') ' + c;
                    return '<li>' + marker + '</li>';
                }).join('') + '</ul>';
            }
            return '<div style="margin-bottom:1.5em"><h3>Q' + (i + 1) + '. ' + q.question + '</h3>' + answersHtml + '</div>';
        }).join('');

        return '<h1>' + (quiz.titre || 'Quiz StudFlow') + '</h1>' + questionsHtml;
    }

    function exportQuizAsTxt(quiz) {
        if (!quiz) return;
        var text = quizToTxt(quiz);
        var filename = 'quiz_' + slugify(quiz.titre || 'quiz') + '.txt';
        downloadFile(text, filename, 'text/plain');
    }

    function exportQuizAsJson(quiz) {
        if (!quiz) return;
        var json = quizToJson(quiz);
        var filename = 'quiz_' + slugify(quiz.titre || 'quiz') + '.json';
        downloadFile(json, filename, 'application/json');
    }

    function exportQuizAsPdf(quiz) {
        if (!quiz) return;
        if (window.StudFlow.premium && !window.StudFlow.premium.hasAccess('export_pdf')) {
            window.StudFlow.premium.showPaywall('export_pdf');
            return;
        }
        var html = quizToHtml(quiz);
        printContent(quiz.titre || 'Quiz StudFlow', html);
    }

    function copyQuiz(quiz) {
        if (!quiz) return;
        copyToClipboard(quizToTxt(quiz));
    }

    // ==================== COACH FICHE ====================
    function coachFicheToTxt(fiche) {
        var lines = [];
        lines.push(fiche.title);
        lines.push(repeat('=', fiche.title.length));
        lines.push('');
        lines.push(htmlToStructuredText(fiche.content));
        lines.push('');
        lines.push('--- StudFlow - Coach methodo ---');
        return lines.join('\n');
    }

    function exportCoachFicheAsTxt(fiche) {
        if (!fiche) return;
        var text = coachFicheToTxt(fiche);
        var filename = 'methodo_' + slugify(fiche.title) + '.txt';
        downloadFile(text, filename, 'text/plain');
    }

    function exportCoachFicheAsPdf(fiche) {
        if (!fiche) return;
        if (window.StudFlow.premium && !window.StudFlow.premium.hasAccess('export_pdf')) {
            window.StudFlow.premium.showPaywall('export_pdf');
            return;
        }
        var safeT = String(fiche.title || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        var html = '<h1>' + safeT + '</h1>' + fiche.content;
        printContent(fiche.title, html);
    }

    function copyCoachFiche(fiche) {
        if (!fiche) return;
        copyToClipboard(coachFicheToTxt(fiche));
    }

    // ==================== PDF VIA PRINT ====================
    function printContent(title, htmlBody) {
        var printStyles = [
            '* { margin: 0; padding: 0; box-sizing: border-box; }',
            'body { font-family: Georgia, "Times New Roman", serif; color: #1a1a2e; padding: 2cm; line-height: 1.6; }',
            'h1 { font-size: 1.6em; margin-bottom: 0.8em; color: #1a1a2e; border-bottom: 2px solid #60a5fa; padding-bottom: 0.3em; }',
            'h2 { font-size: 1.3em; margin: 1em 0 0.5em; color: #333; }',
            'h3 { font-size: 1.1em; margin: 1em 0 0.4em; color: #444; }',
            'p { margin: 0.4em 0; }',
            'ul, ol { margin: 0.4em 0 0.4em 1.5em; }',
            'li { margin: 0.2em 0; }',
            'strong { color: #1a1a2e; }',
            '.print-footer { margin-top: 2em; padding-top: 0.5em; border-top: 1px solid #ccc; font-size: 0.8em; color: #999; text-align: center; }'
        ].join('\n');

        // Escape title for safe insertion into HTML
        var safeTitle = String(title || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
        // Sanitize body if sanitizeHTML is available
        var safeBody = window.StudFlow.app && window.StudFlow.app.sanitizeHTML
            ? window.StudFlow.app.sanitizeHTML(htmlBody || '')
            : (htmlBody || '');

        var fullHtml = '<!DOCTYPE html><html><head>'
            + '<meta charset="utf-8">'
            + '<title>' + safeTitle + ' — StudFlow</title>'
            + '<style>' + printStyles + '</style>'
            + '</head><body>'
            + safeBody
            + '<div class="print-footer">Genere par StudFlow</div>'
            + '</body></html>';

        var w = window.open('', 'studflow_print', 'width=800,height=600');
        if (!w) {
            showToast('Autorise les popups pour exporter en PDF');
            return;
        }
        w.document.write(fullHtml);
        w.document.close();
        w.focus();
        setTimeout(function() { w.print(); }, 300);
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.exporter = {
        // Fiche (generateur)
        exportFicheAsTxt: exportFicheAsTxt,
        exportFicheAsJson: exportFicheAsJson,
        exportFicheAsPdf: exportFicheAsPdf,
        copyFiche: copyFiche,
        // Quiz
        exportQuizAsTxt: exportQuizAsTxt,
        exportQuizAsJson: exportQuizAsJson,
        exportQuizAsPdf: exportQuizAsPdf,
        copyQuiz: copyQuiz,
        // Coach fiche (methodo)
        exportCoachFicheAsTxt: exportCoachFicheAsTxt,
        exportCoachFicheAsPdf: exportCoachFicheAsPdf,
        copyCoachFiche: copyCoachFiche,
        // Utils (reusables)
        downloadFile: downloadFile,
        copyToClipboard: copyToClipboard,
        slugify: slugify
    };
})();
