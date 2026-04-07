// frenchOralMode.js — Mode Oral Bac Français (entrainement immersif)
(function() {
    var _section = null;
    var _questions = [];
    var _currentQ = 0;
    var _timer = null;
    var _timeLeft = 0;
    var _usedHelp = 0;
    var _startTime = 0;

    // ==================== DATA ====================
    function getSections() {
        var subj = window.StudFlow.subjects && window.StudFlow.subjects.getById('francais2');
        if (!subj || !subj.sections) return [];
        return subj.sections.filter(function(s) {
            return s.flashcards && s.flashcards.length > 0 && s.id !== 'oral-methode';
        });
    }

    function buildQuestions(section) {
        var qs = [];
        var fc = section.flashcards || [];
        var title = section.title || '';

        // Type 1: présentation
        qs.push({
            type: 'presentation',
            label: 'Pr\u00E9sentation',
            question: 'Pr\u00E9sentez l\u2019\u0153uvre \u00AB\u00A0' + title + '\u00A0\u00BB en 2 minutes : auteur, contexte, genre, th\u00E8mes principaux.',
            help: _findAnswer(fc, 'qui a ecrit|auteur|contexte|quand|publi')
        });

        // Type 2: procédé / thème
        var themeCard = _findCard(fc, 'parcours|proc\u00E9d\u00E9|th\u00E8me|enjeu|style|pourquoi.*programme|pourquoi.*bac');
        if (themeCard) {
            qs.push({
                type: 'analyse',
                label: 'Analyse',
                question: themeCard.question,
                help: themeCard.answer
            });
        }

        // Type 3: question jury
        var juryPatterns = ['pourquoi|en quoi|quel lien|comment expliquer|que pensez'];
        var used = {};
        for (var i = 0; i < fc.length && qs.length < 5; i++) {
            var q = fc[i].question.toLowerCase();
            if (used[q]) continue;
            for (var p = 0; p < juryPatterns.length; p++) {
                if (new RegExp(juryPatterns[p], 'i').test(fc[i].question) && !used[q]) {
                    qs.push({
                        type: 'jury',
                        label: 'Question jury',
                        question: fc[i].question,
                        help: fc[i].answer
                    });
                    used[q] = true;
                    break;
                }
            }
        }

        // Fill to at least 3 questions with random cards
        if (qs.length < 3) {
            for (var j = 0; j < fc.length && qs.length < 3; j++) {
                var qq = fc[j].question.toLowerCase();
                if (!used[qq]) {
                    qs.push({ type: 'jury', label: 'Question jury', question: fc[j].question, help: fc[j].answer });
                    used[qq] = true;
                }
            }
        }

        return qs;
    }

    function _findCard(fc, pattern) {
        var re = new RegExp(pattern, 'i');
        for (var i = 0; i < fc.length; i++) {
            if (re.test(fc[i].question) || re.test(fc[i].answer)) return fc[i];
        }
        return fc.length > 1 ? fc[1] : null;
    }

    function _findAnswer(fc, pattern) {
        var card = _findCard(fc, pattern);
        return card ? card.answer : '';
    }

    function _escape(str) {
        if (!str) return '';
        return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    // ==================== UI ====================
    function show() {
        window.StudFlow.app.showScreen('french-oral');
        renderPicker();
    }

    function renderPicker() {
        var el = document.getElementById('french-oral-content');
        if (!el) return;
        var sections = getSections();
        var html = '<div class="oral-picker">'
            + '<div style="text-align:center;margin-bottom:20px;">'
            + '<div style="font-size:2.5rem;">\uD83C\uDFA4</div>'
            + '<h2 style="color:var(--text);margin:8px 0 4px;">Oral Bac Fran\u00E7ais</h2>'
            + '<p style="color:var(--text-muted);font-size:0.85rem;">Choisis une \u0153uvre pour t\u2019entra\u00EEner</p>'
            + '</div>';

        // Timer choice
        html += '<div class="oral-timer-pick">'
            + '<span style="color:var(--text-muted);font-size:0.8rem;">Temps par question :</span>'
            + '<div class="oral-timer-btns">'
            + '<button class="oral-timer-btn" data-time="30">30s</button>'
            + '<button class="oral-timer-btn oral-timer-btn--active" data-time="60">1 min</button>'
            + '<button class="oral-timer-btn" data-time="120">2 min</button>'
            + '</div></div>';

        // Section list
        html += '<div class="oral-sections">';
        for (var i = 0; i < sections.length; i++) {
            var s = sections[i];
            html += '<button class="oral-section-card" data-action="frenchOral.start" data-param="' + s.id + '">'
                + '<span class="oral-section-icon">' + (s.icon || '\uD83D\uDCD6') + '</span>'
                + '<span class="oral-section-title">' + _escape(s.title) + '</span>'
                + '</button>';
        }
        html += '</div></div>';
        el.innerHTML = html;

        // Wire timer buttons
        el.querySelectorAll('.oral-timer-btn').forEach(function(btn) {
            btn.onclick = function() {
                el.querySelectorAll('.oral-timer-btn').forEach(function(b) { b.classList.remove('oral-timer-btn--active'); });
                btn.classList.add('oral-timer-btn--active');
            };
        });
    }

    function startSession(sectionId) {
        var sections = getSections();
        _section = null;
        for (var i = 0; i < sections.length; i++) {
            if (sections[i].id === sectionId) { _section = sections[i]; break; }
        }
        if (!_section) return;

        _questions = buildQuestions(_section);
        _currentQ = 0;
        _usedHelp = 0;
        _startTime = Date.now();

        // Get selected timer
        var activeBtn = document.querySelector('.oral-timer-btn--active');
        var duration = activeBtn ? parseInt(activeBtn.getAttribute('data-time')) : 60;

        renderPrepare(duration);
    }

    function renderPrepare(duration) {
        var el = document.getElementById('french-oral-content');
        if (!el) return;
        el.innerHTML = '<div class="oral-session">'
            + '<div class="oral-prepare">'
            + '<div style="font-size:3rem;">\uD83C\uDFA4</div>'
            + '<h2>' + _escape(_section.title) + '</h2>'
            + '<p style="color:var(--text-muted);">Pr\u00E9pare-toi... L\u2019oral commence dans</p>'
            + '<div class="oral-countdown" id="oral-countdown">3</div>'
            + '</div></div>';

        var count = 3;
        var cdEl = document.getElementById('oral-countdown');
        var iv = setInterval(function() {
            count--;
            if (cdEl) cdEl.textContent = count || 'C\u2019est parti\u00A0!';
            if (count <= 0) {
                clearInterval(iv);
                setTimeout(function() { renderQuestion(duration); }, 500);
            }
        }, 800);
    }

    function renderQuestion(duration) {
        var el = document.getElementById('french-oral-content');
        if (!el) return;
        var q = _questions[_currentQ];
        if (!q) { renderResults(); return; }

        _timeLeft = duration;

        var html = '<div class="oral-session">'
            + '<div class="oral-progress">' + (_currentQ + 1) + '/' + _questions.length + '</div>'
            + '<div class="oral-type-badge oral-type-' + q.type + '">' + _escape(q.label) + '</div>'
            + '<div class="oral-question">' + _escape(q.question) + '</div>'
            + '<div class="oral-timer" id="oral-timer">' + _formatTime(_timeLeft) + '</div>'
            + '<div class="oral-actions">'
            + '<button class="oral-btn oral-btn-help" id="oral-help-btn">\uD83D\uDCA1 Aide</button>'
            + '<button class="oral-btn oral-btn-next" id="oral-next-btn">J\u2019ai r\u00E9pondu \u2192</button>'
            + '</div>'
            + '<div class="oral-help-box" id="oral-help-box" style="display:none"></div>'
            + '</div>';
        el.innerHTML = html;

        // TTS
        var tts = window.StudFlow.tts;
        if (tts && tts.isSupported()) {
            var ttsBtn = document.createElement('button');
            ttsBtn.className = 'tts-btn';
            ttsBtn.textContent = '\uD83D\uDD0A';
            ttsBtn.style.cssText = 'position:static;margin:8px auto;display:block;font-size:1.5rem;';
            ttsBtn.onclick = function() {
                var speaking = tts.toggle(q.question);
                ttsBtn.classList.toggle('tts-active', speaking);
            };
            var qEl = el.querySelector('.oral-question');
            if (qEl) qEl.after(ttsBtn);
        }

        // Timer
        var timerEl = document.getElementById('oral-timer');
        _timer = setInterval(function() {
            _timeLeft--;
            if (timerEl) {
                timerEl.textContent = _formatTime(_timeLeft);
                if (_timeLeft <= 10) timerEl.classList.add('oral-timer--warning');
            }
            if (_timeLeft <= 0) {
                clearInterval(_timer);
                if (timerEl) timerEl.textContent = 'Temps \u00E9coul\u00E9\u00A0!';
            }
        }, 1000);

        // Help
        document.getElementById('oral-help-btn').onclick = function() {
            var hBox = document.getElementById('oral-help-box');
            if (hBox.style.display !== 'none') { hBox.style.display = 'none'; return; }
            _usedHelp++;
            var helpText = q.help || 'Pas d\u2019aide disponible pour cette question.';
            // Extract "En gros" if present
            var eg = helpText.match(/En gros\s*[:]\s*([^.]+\.)/i);
            var short = eg ? eg[1].trim() : helpText.split(/\.\s/)[0] + '.';
            if (short.length > 200) short = short.substring(0, 197) + '...';
            hBox.innerHTML = '<div class="fc-simple-header">\uD83D\uDCA1 Points attendus</div>'
                + '<div class="fc-simple-content"><p class="fc-simple-text">' + _escape(short) + '</p></div>';
            hBox.style.display = '';
        };

        // Next
        document.getElementById('oral-next-btn').onclick = function() {
            clearInterval(_timer);
            if (tts) tts.stop();
            _currentQ++;
            if (_currentQ >= _questions.length) { renderResults(); }
            else { renderQuestion(duration); }
        };
    }

    function renderResults() {
        clearInterval(_timer);
        var el = document.getElementById('french-oral-content');
        if (!el) return;
        var elapsed = Math.round((Date.now() - _startTime) / 1000);
        var total = _questions.length;

        // Confidence score
        var helpRatio = _usedHelp / Math.max(total, 1);
        var level, emoji, color;
        if (helpRatio <= 0.2 && elapsed < total * 90) {
            level = 'Bien'; emoji = '\uD83C\uDF1F'; color = '#34d399';
        } else if (helpRatio <= 0.5) {
            level = 'Correct'; emoji = '\uD83D\uDC4D'; color = '#60a5fa';
        } else {
            level = '\u00C0 revoir'; emoji = '\uD83D\uDD04'; color = '#fb923c';
        }

        el.innerHTML = '<div class="oral-session">'
            + '<div style="text-align:center;">'
            + '<div style="font-size:3rem;">' + emoji + '</div>'
            + '<h2 style="color:' + color + ';">' + level + '</h2>'
            + '<p style="color:var(--text-muted);">' + _escape(_section.title) + '</p>'
            + '<div class="oral-result-stats">'
            + '<div class="oral-stat"><span>' + total + '</span><small>questions</small></div>'
            + '<div class="oral-stat"><span>' + _usedHelp + '</span><small>aides utilis\u00E9es</small></div>'
            + '<div class="oral-stat"><span>' + _formatTime(elapsed) + '</span><small>dur\u00E9e</small></div>'
            + '</div>'
            + '<button class="oral-btn oral-btn-next" data-action="frenchOral.show" style="margin-top:20px;">\uD83C\uDFA4 Autre \u0153uvre</button>'
            + '<button class="oral-btn oral-btn-help" data-action="screen:dashboard" style="margin-top:8px;">\u2190 Tableau de bord</button>'
            + '</div></div>';

        if (window.StudFlow.gamification) window.StudFlow.gamification.addXP('oral_session');
    }

    function _formatTime(s) {
        if (s < 0) s = 0;
        var m = Math.floor(s / 60);
        var sec = s % 60;
        return (m > 0 ? m + ':' : '') + (sec < 10 ? '0' : '') + sec;
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.frenchOral = {
        show: show,
        start: startSession
    };
})();
