// app.js — Init, navigation, etat global
(function() {
    // PDF.js is now lazy-loaded in js/modules/pdf.js

    // ==================== SHARED CONFIG ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.CONFIG = {
        GROQ_API_URL: 'https://api.groq.com/openai/v1/chat/completions'
    };

    // Etat global
    let appState = {
        apiKey: '',
        currentScreen: 'home',
        pdfText: '',
        fileName: '',
        flashcards: [],
        quizQuestions: [],
        customFlashcards: [],
        customQuiz: [],
        currentFlashcardIndex: 0,
        currentQuizIndex: 0,
        flashcardScore: 0,
        quizScore: 0,
        masteredCards: 0,
        streak: 0,
        startTime: null,
        selectedAnswer: null,
        summary: '',
        focusStats: { sessions: 0, totalMinutes: 0, streak: 0 }
    };

    // Escape plain text to prevent XSS when inserted into HTML
    function escapeText(str) {
        if (!str) return '';
        return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
    }

    // Sanitize HTML pour eviter XSS
    function sanitizeHTML(html) {
        const allowedTags = ['h3', 'h4', 'p', 'ul', 'ol', 'li', 'strong', 'em', 'br'];
        const div = document.createElement('div');
        div.innerHTML = html;
        // Remove script tags and event handlers
        div.querySelectorAll('script').forEach(el => el.remove());
        div.querySelectorAll('*').forEach(el => {
            // Remove all event handler attributes
            Array.from(el.attributes).forEach(attr => {
                if (attr.name.startsWith('on')) {
                    el.removeAttribute(attr.name);
                }
            });
            // Remove non-allowed tags but keep their content
            if (!allowedTags.includes(el.tagName.toLowerCase())) {
                const parent = el.parentNode;
                while (el.firstChild) {
                    parent.insertBefore(el.firstChild, el);
                }
                parent.removeChild(el);
            }
        });
        return div.innerHTML;
    }

    // Navigation
    function showScreen(screenId) {
        // Route guard: block admin screen for non-admins
        if (screenId === 'admin' && !(window.StudFlow.roles && window.StudFlow.roles.isAdmin())) {
            screenId = 'dashboard';
        }

        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        const screenEl = document.getElementById(`screen-${screenId}`);
        if (screenEl) {
            screenEl.classList.add('active');
        }
        appState.currentScreen = screenId;
        // Update active nav item
        document.querySelectorAll('.nav-item').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.screen === screenId);
        });
        // Intercept dashboard navigation for onboarding celebration
        if (screenId === 'dashboard' && window.StudFlow.onboarding && window.StudFlow.onboarding.checkPendingCelebration()) {
            return; // onboarding took over
        }
        // Show quota info on upload screen
        if (screenId === 'upload') {
            var quotaEl = document.getElementById('upload-quota-info');
            var quota = window.StudFlow.aiQuota;
            if (quotaEl && quota) {
                var check = quota.canCall('pdf_analyze');
                var stats = quota.getStats();
                var used = stats.counts['pdf_analyze'] || 0;
                var limit = stats.limits['pdf_analyze'] || 3;
                var remaining = Math.max(0, limit - used);
                if (remaining > 0) {
                    quotaEl.textContent = '\u2728 ' + remaining + ' analyse' + (remaining > 1 ? 's' : '') + ' IA restante' + (remaining > 1 ? 's' : '') + ' aujourd\'hui';
                    quotaEl.className = 'upload-quota-info';
                } else {
                    quotaEl.textContent = 'Limite d\'analyses IA atteinte pour aujourd\'hui. Le texte sera quand meme extrait.';
                    quotaEl.className = 'upload-quota-info quota-exhausted';
                }
            }
        }
        // Init analytics consent toggle when settings opens
        if (screenId === 'settings') {
            var toggle = document.getElementById('analytics-consent-toggle');
            if (toggle && window.StudFlow.analytics) {
                toggle.checked = window.StudFlow.analytics.hasConsent();
            }
        }
        // Update header visibility
        const hideChrome = (screenId === 'home' || screenId === 'diagnostic' || screenId === 'onboarding');
        const header = document.querySelector('header');
        if (header) {
            header.style.display = hideChrome ? 'none' : '';
        }
        // Update tab bar visibility
        const tabBar = document.getElementById('tab-bar');
        if (tabBar) {
            tabBar.style.display = hideChrome ? 'none' : 'flex';
        }
        // Close more menu on any navigation
        const moreMenu = document.getElementById('tab-more-menu');
        if (moreMenu) moreMenu.style.display = 'none';
        // Adjust container padding
        const container = document.querySelector('.app-container');
        if (container) {
            container.style.paddingTop = hideChrome ? '0' : '80px';
        }
        // Toggle body class for tab bar spacing
        document.body.classList.toggle('has-tab-bar', !hideChrome);
        // Update active tab
        updateActiveTab(screenId);
    }

    // Tab bar active state mapping
    const TAB_SCREEN_MAP = {
        dashboard: 'dashboard',
        flashcard: 'reviser',
        focus: 'focus',
        coach: 'coach'
    };

    function updateActiveTab(screenId) {
        const activeTab = TAB_SCREEN_MAP[screenId] || 'plus';
        document.querySelectorAll('.tab-item').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === activeTab);
        });
    }

    // More menu toggle
    var _moreMenuPrevFocus = null;
    function toggleMoreMenu() {
        const menu = document.getElementById('tab-more-menu');
        if (!menu) return;
        const isOpen = menu.style.display === 'flex';
        if (isOpen) {
            menu.style.display = 'none';
            if (_moreMenuPrevFocus && _moreMenuPrevFocus.focus) {
                _moreMenuPrevFocus.focus();
                _moreMenuPrevFocus = null;
            }
        } else {
            _moreMenuPrevFocus = document.activeElement;
            menu.style.display = 'flex';
            var first = menu.querySelector('.tab-more-sheet button');
            if (first) first.focus();
        }
    }

    // Update header stats
    function updateStats() {
        const streakEl = document.getElementById('streak-count');
        const masteredEl = document.getElementById('mastered-count');
        if (streakEl) streakEl.textContent = appState.streak;
        if (masteredEl) masteredEl.textContent = appState.masteredCards;
    }

    // Dashboard update
    function updateDashboard() {
        // Render smart dashboard
        if (window.StudFlow.dashboard) {
            window.StudFlow.dashboard.render();
        }

        // Update counts (hidden elements used by other modules)
        if (window.StudFlow.flashcards) window.StudFlow.flashcards.updateCount();
        if (window.StudFlow.quiz) window.StudFlow.quiz.updateCount();
    }

    // Upload handlers
    function initUpload() {
        const uploadZone = document.getElementById('upload-zone');
        const fileInput = document.getElementById('file-input');
        if (!uploadZone || !fileInput) return;

        uploadZone.addEventListener('click', () => fileInput.click());

        uploadZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadZone.classList.add('drag-over');
        });

        uploadZone.addEventListener('dragleave', () => {
            uploadZone.classList.remove('drag-over');
        });

        uploadZone.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadZone.classList.remove('drag-over');
            if (e.dataTransfer.files.length > 0) {
                handleFile(e.dataTransfer.files[0]);
            }
        });

        fileInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                handleFile(e.target.files[0]);
            }
        });
    }

    var MAX_PDF_SIZE = 50 * 1024 * 1024; // 50 MB

    async function handleFile(file) {
        var isPdf = file.type === 'application/pdf' ||
                    file.type === 'application/x-pdf' ||
                    (file.name && file.name.toLowerCase().endsWith('.pdf'));
        var isImage = window.StudFlow.ocr && window.StudFlow.ocr.isImage(file);

        if (!isPdf && !isImage) {
            if (window.StudFlow.gamification && window.StudFlow.gamification.showToast) {
                window.StudFlow.gamification.showToast('Format accepte : PDF, JPG ou PNG', 'xp', '⚠️');
            }
            return;
        }

        if (isPdf && file.size > MAX_PDF_SIZE) {
            if (window.StudFlow.gamification && window.StudFlow.gamification.showToast) {
                window.StudFlow.gamification.showToast('Fichier trop volumineux (max 50 Mo).', 'xp', '⚠️');
            }
            return;
        }

        if (isImage) {
            var imgErr = window.StudFlow.ocr.validateImage(file);
            if (imgErr) {
                if (window.StudFlow.gamification && window.StudFlow.gamification.showToast) {
                    window.StudFlow.gamification.showToast(imgErr, 'xp', '⚠️');
                }
                return;
            }
        }

        appState.fileName = file.name.replace(/\.(pdf|jpg|jpeg|png|webp)$/i, '');
        console.log('[PDF] === DEBUT IMPORT ===', file.name, '(' + (file.size / 1024).toFixed(0) + ' Ko)');
        showScreen('loading');

        try {
            var loadTitle = document.getElementById('loading-title');

            // ETAPE 1 — Lecture du fichier
            var text;
            if (isImage) {
                if (loadTitle) loadTitle.textContent = 'Lecture de l\'image...';
                updateProgress(5, 'Chargement de l\'OCR...');
                console.log('[OCR] Extraction lancee pour:', file.name);
                text = await window.StudFlow.ocr.extractText(file, function(pct) {
                    updateProgress(5 + Math.round(pct * 0.2), 'Lecture de l\'image... ' + pct + '%');
                });
                console.log('[OCR] Extraction OK, longueur texte:', text.length);
            } else {
                if (loadTitle) loadTitle.textContent = 'Lecture du PDF...';
                updateProgress(10, 'Extraction du texte...');
                console.log('[PDF] Extraction lancee pour:', file.name);
                text = await window.StudFlow.pdf.extractText(file);
                console.log('[PDF] Extraction OK, longueur texte:', text.length);
            }

            // ETAPE 2 — Validation
            updateProgress(25, 'Texte extrait, verification...');
            if (!text || text.trim().length < 20) {
                console.warn('[PDF] Texte trop court ou vide');
                showPdfErrorCard(
                    'PDF vide ou illisible',
                    'Aucun texte exploitable n\'a ete trouve. Essaie un autre fichier (les scans sans OCR ne fonctionnent pas).'
                );
                return;
            }

            appState.pdfText = text;
            if (loadTitle) loadTitle.textContent = 'Generation du contenu...';
            updateProgress(30, 'Texte extrait ! Lancement de l\'analyse...');

            // AI analysis via Vercel Function (server-side, secure)
            if (window.StudFlow.features && window.StudFlow.features.AI_ENABLED) {
                console.log('[PDF] Lancement analyse IA via serveur...');
                await analyzeWithServer(text);
                console.log('[PDF] Analyse IA terminee');
            } else {
                console.log('[PDF] IA desactivee. Mode local uniquement.');
                // PDF importe sans IA — montrer ecran avec acces generateurs
            }

            // Persist PDF text for generators
            if (appState.pdfText) {
                window.StudFlow.storage.saveData('pdfText', appState.pdfText);
                window.StudFlow.storage.saveData('pdfFileName', appState.fileName || '');
            }
            window.StudFlow.storage.saveAppState(appState);
            if (window.StudFlow.analytics) window.StudFlow.analytics.track('pdf_import', { fileName: appState.fileName, textLength: text.length });
            updateDashboard();

            // TOUJOURS afficher un ecran de resultat — jamais de retour silencieux
            var fcGenerated = (appState.flashcards || []).length;
            var qzGenerated = (appState.quizQuestions || []).length;
            console.log('[PDF] === RESULTAT FINAL ===');
            console.log('[PDF] Flashcards:', fcGenerated, '| Quiz:', qzGenerated);
            console.log('[PDF] Stockage: appState.flashcards =', fcGenerated, 'items, appState.quizQuestions =', qzGenerated, 'items');
            console.log('[PDF] localStorage flashcards:', (JSON.parse(localStorage.getItem('studflow_flashcards') || '[]')).length);
            console.log('[PDF] localStorage quizQuestions:', (JSON.parse(localStorage.getItem('studflow_quizQuestions') || '[]')).length);
            if (fcGenerated > 0 || qzGenerated > 0) {
                showPdfResultCard(fcGenerated, qzGenerated);
            } else {
                showPdfErrorCard('Aucun contenu exploitable n\'a pu etre extrait de ce PDF.', 'Essaie avec un autre fichier ou utilise les generateurs locaux.');
            }
        } catch (error) {
            console.error('[PDF] Erreur extraction:', error);
            if (window.StudFlow.errorLog) {
                window.StudFlow.errorLog.log('pdf_error', 'Extraction failed: ' + (error.message || error));
            }
            var errorTitle = 'Impossible d\'analyser ce PDF';
            var errorMsg = 'Essaie un autre fichier (pas un scan).';
            if (error.message && error.message.indexOf('network') !== -1) {
                errorTitle = 'Erreur reseau';
                errorMsg = 'Verifie ta connexion et reessaie.';
            } else if (error.message && error.message.indexOf('password') !== -1) {
                errorTitle = 'PDF protege';
                errorMsg = 'Ce fichier est protege par un mot de passe.';
            } else if (error.message && error.message.indexOf('abort') !== -1) {
                errorTitle = 'Analyse trop longue';
                errorMsg = 'Le PDF est trop volumineux ou le serveur ne repond pas. Essaie un fichier plus court.';
            }
            console.log('[PDF] Affichage ecran erreur:', errorTitle);
            showPdfErrorCard(errorTitle, errorMsg);
        }
    }

    function updateProgress(percent, status) {
        const fill = document.getElementById('progress-fill');
        const statusEl = document.getElementById('loading-status');
        if (fill) {
            fill.style.width = `${percent}%`;
            var bar = fill.parentElement;
            if (bar) bar.setAttribute('aria-valuenow', Math.round(percent));
        }
        if (statusEl) statusEl.textContent = status;
    }

    // ==================== CHUNKING ====================
    var CHUNK_MAX_CHARS = 10000;  // ~2500 tokens, leaves room for prompt
    var MAX_CHUNKS = 4;           // Max 4 appels API par PDF

    function chunkText(text) {
        if (text.length <= CHUNK_MAX_CHARS) return [text];

        var chunks = [];
        var remaining = text;

        while (remaining.length > 0 && chunks.length < MAX_CHUNKS) {
            if (remaining.length <= CHUNK_MAX_CHARS) {
                chunks.push(remaining);
                break;
            }
            // Find a clean break point: double newline > single newline > period+space
            var slice = remaining.substring(0, CHUNK_MAX_CHARS);
            var breakAt = -1;
            // Try double newline (paragraph break)
            breakAt = slice.lastIndexOf('\n\n');
            // Try single newline if no paragraph found in last 30%
            if (breakAt < CHUNK_MAX_CHARS * 0.7) {
                var nlBreak = slice.lastIndexOf('\n');
                if (nlBreak > breakAt) breakAt = nlBreak;
            }
            // Try period+space if still too early
            if (breakAt < CHUNK_MAX_CHARS * 0.5) {
                var dotBreak = slice.lastIndexOf('. ');
                if (dotBreak > breakAt) breakAt = dotBreak + 1;
            }
            // Fallback: hard cut
            if (breakAt < CHUNK_MAX_CHARS * 0.3) breakAt = CHUNK_MAX_CHARS;

            chunks.push(remaining.substring(0, breakAt).trim());
            remaining = remaining.substring(breakAt).trim();
        }

        return chunks.filter(function(c) { return c.length > 30; });
    }

    // ==================== ANALYSE IA (chunked, quota-controlled) ====================
    async function analyzeWithServer(text) {
        var loadingTitle = document.getElementById('loading-title');
        if (loadingTitle) loadingTitle.textContent = 'Analyse IA en cours...';

        var quota = window.StudFlow.aiQuota;

        // Check cache first — same PDF = no API call
        if (quota) {
            var cached = quota.getCached('pdf_analyze', text);
            if (cached) {
                console.log('[IA] Resultat en cache — aucun appel API');
                updateProgress(90, 'Resultats deja disponibles...');
                appState.flashcards = cached.flashcards || [];
                appState.quizQuestions = cached.quiz || [];
                var cMsg = appState.flashcards.length + ' flashcards (depuis le cache)';
                updateProgress(100, cMsg);
                if (window.StudFlow.gamification) {
                    window.StudFlow.gamification.showToast(cMsg + ' — analyse deja faite !', 'xp', '⚡');
                }
                return;
            }
        }

        // Check quota
        if (quota) {
            var check = quota.canCall('pdf_analyze');
            if (!check.allowed) {
                console.warn('[IA] Quota atteint:', check.reason);
                updateProgress(100, 'Limite atteinte.');
                if (window.StudFlow.gamification) {
                    window.StudFlow.gamification.showToast(check.reason, 'xp', '⏳');
                }
                return;
            }
        }

        var chunks = chunkText(text);
        var totalChunks = chunks.length;
        console.log('[IA] Document decoupe en', totalChunks, 'partie(s)');

        if (totalChunks === 1) {
            updateProgress(40, 'Analyse du cours...');
        } else {
            updateProgress(30, 'Decoupage du document (' + totalChunks + ' parties)...');
        }

        var allFlashcards = [];
        var allQuiz = [];
        var errors = 0;

        for (var i = 0; i < totalChunks; i++) {
            var chunkLabel = totalChunks > 1 ? ' (partie ' + (i + 1) + '/' + totalChunks + ')' : '';
            var pctBase = 30 + Math.round((i / totalChunks) * 55);
            updateProgress(pctBase, 'Analyse en cours' + chunkLabel + '...');

            var chunkOK = false;
            var maxRetries = 2;

            for (var attempt = 0; attempt < maxRetries && !chunkOK; attempt++) {
                if (attempt > 0) {
                    updateProgress(pctBase, 'Nouvel essai' + chunkLabel + '...');
                    await new Promise(function(r) { setTimeout(r, 2000 * attempt); });
                }

                var controller = new AbortController();
                var timeoutId = setTimeout(function() { controller.abort(); }, 30000);

                try {
                    console.log('[IA] Envoi chunk', i + 1, '/', totalChunks, '- tentative', attempt + 1);
                    var response = await fetch('/api/analyze', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        signal: controller.signal,
                        body: JSON.stringify({
                            text: chunks[i],
                            mode: 'both',
                            chunkIndex: i,
                            totalChunks: totalChunks
                        })
                    });

                    clearTimeout(timeoutId);

                    if (response.status === 429) {
                        console.warn('[IA] Rate limit atteint au chunk', i + 1);
                        if (window.StudFlow.gamification) {
                            window.StudFlow.gamification.showToast('Limite quotidienne atteinte.', 'xp', '⏳');
                        }
                        chunkOK = true; // don't retry rate limits
                        break;
                    }

                    if (!response.ok) {
                        console.error('[IA] Erreur chunk', i + 1, ':', response.status, '- tentative', attempt + 1);
                        if (window.StudFlow.errorLog) {
                            window.StudFlow.errorLog.log('pdf_error', 'Chunk ' + (i+1) + ' HTTP ' + response.status);
                        }
                        continue; // retry
                    }

                    var result = await response.json();
                    if (result && result.success && result.data) {
                        if (Array.isArray(result.data.flashcards)) {
                            allFlashcards = allFlashcards.concat(result.data.flashcards);
                        }
                        if (Array.isArray(result.data.quiz)) {
                            allQuiz = allQuiz.concat(result.data.quiz);
                        }
                    } else if (result && Array.isArray(result.data)) {
                        allFlashcards = allFlashcards.concat(result.data);
                    } else {
                        console.warn('[IA] Chunk', i + 1, '- reponse inattendue:', JSON.stringify(result).substring(0, 200));
                        if (window.StudFlow.errorLog) {
                            window.StudFlow.errorLog.log('ai_error', 'Unexpected response shape chunk ' + (i+1));
                        }
                    }
                    chunkOK = true;
                    console.log('[IA] Chunk', i + 1, 'OK -', allFlashcards.length, 'flashcards,', allQuiz.length, 'quiz cumules');

                } catch (err) {
                    clearTimeout(timeoutId);
                    var isTimeout = err.name === 'AbortError';
                    console.error('[IA]', isTimeout ? 'Timeout' : 'Erreur reseau', 'chunk', i + 1, ':', err.message);
                    if (window.StudFlow.errorLog) {
                        window.StudFlow.errorLog.log('pdf_error', (isTimeout ? 'Timeout' : 'Network') + ' chunk ' + (i+1) + ': ' + err.message);
                    }
                    if (isTimeout && attempt === maxRetries - 1) {
                        updateProgress(pctBase, 'Le serveur met trop de temps...');
                    }
                    // will retry if attempts remain
                }
            }

            if (!chunkOK) {
                errors++;
                if (window.StudFlow.gamification) {
                    window.StudFlow.gamification.showToast(
                        'Le PDF est trop long ou illisible (partie ' + (i+1) + '). On continue avec le reste.',
                        'xp', '⚠️'
                    );
                }
                updateProgress(pctBase, 'Echec partie ' + (i+1) + ', on continue...');
            }
        }

        // Fusion + deduplication + validation pedagogique
        updateProgress(90, 'Verification pedagogique...');
        var dedupedCards = deduplicateCards(allFlashcards).slice(0, 25).map(function(f) {
            return { question: f.question || '', answer: f.answer || '', mastered: false };
        });
        var dedupedQuiz = deduplicateQuiz(allQuiz).slice(0, 10).map(function(q) {
            return {
                question: String(q.question || ''),
                options: (q.options || []).map(String),
                correctIndex: typeof q.correctIndex === 'number' ? q.correctIndex : 0,
                explanation: String(q.explanation || '')
            };
        });

        // Filtre pedagogique : rejette les cartes vides, trop longues, hors programme
        var guard = window.StudFlow.pedagogicalGuard;
        if (guard) {
            var fcResult = guard.filterFlashcards(dedupedCards, 'generated');
            var qzResult = guard.filterQuiz(dedupedQuiz, 'generated');
            appState.flashcards = fcResult.cards;
            appState.quizQuestions = qzResult.questions;
            if (fcResult.stats.rejected > 0 || fcResult.stats.outOfScope > 0) {
                console.log('[guard] ' + fcResult.stats.rejected + ' flashcards rejetees, ' + fcResult.stats.outOfScope + ' hors programme');
            }
        } else {
            appState.flashcards = dedupedCards;
            appState.quizQuestions = dedupedQuiz;
        }

        var fcCount = appState.flashcards.length;
        var qzCount = appState.quizQuestions.length;

        // Record API call + cache the result for next time
        if (quota) {
            quota.recordCall('pdf_analyze', text.length / 4);
            if (fcCount > 0 || qzCount > 0) {
                quota.setCache('pdf_analyze', text, {
                    flashcards: appState.flashcards,
                    quiz: appState.quizQuestions
                });
            }
        }

        // Ne pas afficher de message ici — l'ecran resultat est gere par le code appelant
        // (showPdfResultCard ou showPdfErrorCard)
        updateProgress(100, 'Analyse terminee.');
        if (fcCount === 0 && qzCount === 0 && window.StudFlow.errorLog) {
            window.StudFlow.errorLog.log('pdf_error', 'Zero results after analysis, errors=' + errors);
        }
    }

    // ==================== PDF RESULT SCREEN ====================
    // Uses a dedicated screen (screen-pdf-result) to guarantee visibility.
    // Never injects into loading screen — always navigates to a real screen.

    function showPdfResultCard(fcCount, qzCount) {
        var container = document.getElementById('pdf-result-container');
        if (!container) {
            console.error('[PDF] pdf-result-container introuvable, fallback dashboard');
            if (window.StudFlow.gamification) {
                window.StudFlow.gamification.showToast(fcCount + ' flashcards + ' + qzCount + ' quiz generes !', 'xp', '✅');
            }
            showScreen('dashboard');
            return;
        }

        var items = '';
        if (fcCount > 0) {
            items += '<div class="pdf-result-stat">'
                + '<span class="pdf-result-stat-icon">\uD83C\uDCCF</span>'
                + '<span class="pdf-result-stat-text">' + fcCount + ' flashcard' + (fcCount > 1 ? 's' : '') + ' ajoutee' + (fcCount > 1 ? 's' : '') + '</span>'
                + '</div>';
        }
        if (qzCount > 0) {
            items += '<div class="pdf-result-stat">'
                + '<span class="pdf-result-stat-icon">\u26A1</span>'
                + '<span class="pdf-result-stat-text">' + qzCount + ' quiz ajoute' + (qzCount > 1 ? 's' : '') + '</span>'
                + '</div>';
        }

        container.innerHTML = '<div class="pdf-result-card">'
            + '<div class="pdf-result-icon">\u2705</div>'
            + '<h2 class="pdf-result-title">PDF analyse avec succes</h2>'
            + '<div class="pdf-result-stats">' + items + '</div>'
            + '<div class="pdf-result-actions">'
            + (fcCount > 0 ? '<button class="pdf-result-btn primary" data-action="pdf-result:flashcards">Voir mes fiches</button>' : '')
            + (qzCount > 0 ? '<button class="pdf-result-btn accent" data-action="pdf-result:quiz">Lancer le quiz</button>' : '')
            + '<button class="pdf-result-btn secondary" data-action="screen:dashboard">Retour au tableau de bord</button>'
            + '</div>'
            + '</div>';

        showScreen('pdf-result');
        console.log('[PDF] Ecran resultat AFFICHE — fc:', fcCount, 'quiz:', qzCount);
    }

    function showPdfErrorCard(title, message) {
        var container = document.getElementById('pdf-result-container');
        if (!container) {
            console.error('[PDF] pdf-result-container introuvable, fallback dashboard');
            if (window.StudFlow.gamification) {
                window.StudFlow.gamification.showToast(title + ' — ' + message, 'xp', '⚠️');
            }
            showScreen('dashboard');
            return;
        }

        container.innerHTML = '<div class="pdf-result-card">'
            + '<div class="pdf-result-icon pdf-result-icon--error">\u26A0\uFE0F</div>'
            + '<h2 class="pdf-result-title">' + (escapeText(title) || 'Erreur') + '</h2>'
            + '<p class="pdf-result-message">' + (escapeText(message) || '') + '</p>'
            + '<div class="pdf-result-actions">'
            + '<button class="pdf-result-btn primary" data-action="screen:upload">Reessayer avec un autre PDF</button>'
            + '<button class="pdf-result-btn secondary" data-action="screen:generators">Utiliser les generateurs</button>'
            + '<button class="pdf-result-btn secondary" data-action="screen:dashboard">Retour au tableau de bord</button>'
            + '</div>'
            + '</div>';

        showScreen('pdf-result');
        console.log('[PDF] Ecran erreur AFFICHE:', title);
    }

    function deduplicateCards(cards) {
        var seen = {};
        return cards.filter(function(c) {
            if (!c || !c.question) return false;
            var key = c.question.toLowerCase().replace(/[^a-z0-9]/g, '').substring(0, 60);
            if (seen[key]) return false;
            seen[key] = true;
            return true;
        });
    }

    function deduplicateQuiz(questions) {
        var seen = {};
        return questions.filter(function(q) {
            if (!q || !q.question) return false;
            var key = q.question.toLowerCase().replace(/[^a-z0-9]/g, '').substring(0, 60);
            if (seen[key]) return false;
            seen[key] = true;
            return true;
        });
    }

    // AI generation (Groq — legacy, kept for coach/profChat)
    async function generateWithAI(text) {
        if (window.StudFlow.features && !window.StudFlow.features.AI_ENABLED) return;
        updateProgress(40, 'L\'IA analyse ton cours...');
        const loadingTitle = document.getElementById('loading-title');
        if (loadingTitle) loadingTitle.textContent = 'Generation IA...';

        const textToAnalyze = text.substring(0, 15000);

        updateProgress(50, 'Creation des flashcards...');
        appState.flashcards = await generateFlashcardsAI(textToAnalyze);

        await new Promise(r => setTimeout(r, 2000));

        updateProgress(75, 'Creation du quiz...');
        appState.quizQuestions = await generateQuizAI(textToAnalyze);

        updateProgress(100, 'Termine !');

        // Fallback message if AI returned nothing usable
        if (appState.flashcards.length === 0 && appState.quizQuestions.length === 0) {
            if (window.StudFlow.gamification) {
                window.StudFlow.gamification.showToast('L\'IA n\'a rien genere. Ton PDF est sauvegarde — utilise les generateurs locaux !', 'xp', '🧠');
            }
        }
    }

    function cleanJSON(text) {
        try {
            let cleaned = text.replace(/```json\s*/gi, '').replace(/```\s*/g, '').trim();
            const start = cleaned.indexOf('[');
            const end = cleaned.lastIndexOf(']');
            if (start === -1 || end === -1) {
                console.warn('[IA] cleanJSON: no array brackets found');
                if (window.StudFlow.errorLog) window.StudFlow.errorLog.log('ai_error', 'cleanJSON: no brackets, input=' + String(text).substring(0, 100));
                return null;
            }
            let json = cleaned.substring(start, end + 1);
            json = json
                .replace(/[\u201C\u201D\u00AB\u00BB]/g, '"')
                .replace(/[\u2018\u2019\u0060]/g, "'")
                .replace(/[\r\n\t]/g, ' ')
                .replace(/\s+/g, ' ')
                .replace(/,\s*]/g, ']')
                .replace(/,\s*}/g, '}')
                .replace(/([{,]\s*)(\w+)(\s*:)/g, '$1"$2"$3')
                .replace(/:\s*'([^']*)'/g, ': "$1"');
            JSON.parse(json);
            return json;
        } catch (e) {
            console.warn('[IA] cleanJSON parse failed:', e.message);
            if (window.StudFlow.errorLog) window.StudFlow.errorLog.log('ai_error', 'cleanJSON parse: ' + e.message + ' | input=' + String(text).substring(0, 80));
            return null;
        }
    }

    async function generateFlashcardsAI(text) {
        const prompt = `Analyse ce cours et cree 10 flashcards. Reponds UNIQUEMENT avec un tableau JSON valide.\nCOURS:\n${text.substring(0, 8000)}\nFormat: [{"question": "Q", "answer": "A"}]`;
        try {
            const response = await callAI(prompt);
            const jsonStr = cleanJSON(response);
            if (jsonStr) {
                return JSON.parse(jsonStr).slice(0, 10).map(f => ({
                    question: f.question || "Question", answer: f.answer || "Reponse", mastered: false
                }));
            }
        } catch (e) {
            console.error('Erreur flashcards:', e);
            if (window.StudFlow.gamification) {
                window.StudFlow.gamification.showToast('IA indisponible — utilise les generateurs locaux.', 'xp', '⚠️');
            }
        }
        return [];
    }

    async function generateQuizAI(text) {
        const prompt = `Cree 5 questions QCM sur ce cours. JSON UNIQUEMENT.\nCOURS:\n${text.substring(0, 6000)}\nFormat: [{"question": "Q", "options": ["A","B","C","D"], "correctIndex": 0, "explanation": "E"}]`;
        try {
            const response = await callAI(prompt);
            const jsonStr = cleanJSON(response);
            if (jsonStr) {
                return JSON.parse(jsonStr).slice(0, 10).map(q => ({
                    question: String(q.question || "Question"),
                    options: (q.options || ["A","B","C","D"]).map(o => String(o)),
                    correctIndex: typeof q.correctIndex === 'number' ? q.correctIndex : 0,
                    explanation: String(q.explanation || "")
                }));
            }
        } catch (e) {
            console.error('Erreur quiz:', e);
            if (window.StudFlow.gamification) {
                window.StudFlow.gamification.showToast('IA indisponible pour le quiz — essaie les quiz methodo.', 'xp', '⚠️');
            }
        }
        return [];
    }

    async function callAI(prompt, retries) {
        if (window.StudFlow.features && !window.StudFlow.features.AI_ENABLED) {
            throw new Error('IA desactivee');
        }
        retries = retries || 3;
        for (let attempt = 1; attempt <= retries; attempt++) {
            try {
                const response = await fetch(window.StudFlow.CONFIG.GROQ_API_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${appState.apiKey}`
                    },
                    body: JSON.stringify({
                        model: 'llama-3.3-70b-versatile',
                        messages: [
                            { role: 'system', content: 'Tu es un assistant pedagogique expert. Reponds UNIQUEMENT en JSON valide sans markdown.' },
                            { role: 'user', content: prompt }
                        ],
                        temperature: 0.7,
                        max_tokens: 4096
                    })
                });
                if (response.status === 429) {
                    if (window.StudFlow.gamification && attempt < retries) {
                        window.StudFlow.gamification.showToast('IA surchargee, nouvelle tentative...', 'xp', '⏳');
                    }
                    await new Promise(r => setTimeout(r, attempt * 5000));
                    continue;
                }
                if (!response.ok) throw new Error('Erreur API');
                const data = await response.json();
                return data.choices[0].message.content;
            } catch (e) {
                if (attempt === retries) throw e;
                await new Promise(r => setTimeout(r, 3000));
            }
        }
    }

    // Init
    function init() {
        // Error tracking — local log + analytics pipeline
        window.onerror = function(message, source, lineno, colno, error) {
            if (window.StudFlow.errorLog) {
                window.StudFlow.errorLog.log('js_error', message, {
                    stack: error && error.stack ? error.stack : null,
                    url: source
                });
            }
            if (window.StudFlow.analytics) {
                window.StudFlow.analytics.track('js_error', {
                    message: String(message).substring(0, 200),
                    source: String(source || '').split('/').pop(),
                    line: lineno,
                    stack: error && error.stack ? String(error.stack).substring(0, 500) : null
                });
            }
            return false;
        };

        window.addEventListener('unhandledrejection', function(event) {
            var reason = event.reason;
            if (window.StudFlow.errorLog) {
                window.StudFlow.errorLog.log('promise_rejection',
                    reason ? (reason.message || String(reason)) : 'unknown',
                    { stack: reason && reason.stack ? reason.stack : null }
                );
            }
            if (window.StudFlow.analytics) {
                window.StudFlow.analytics.track('promise_rejection', {
                    message: reason ? String(reason.message || reason).substring(0, 200) : 'unknown'
                });
            }
        });

        // Always init upload listeners (so they're ready when user reaches upload screen)
        initUpload();

        // Beta gate — require invite token validation (network once)
        if (window.StudFlow.betaGate && !window.StudFlow.betaGate.isUnlocked()) {
            showScreen('betagate');
            window.StudFlow.betaGate.show();
            return;
        }

        // Beta welcome — show once after first unlock
        if (window.StudFlow.betaGate && !window.StudFlow.betaGate.isWelcomeSeen()) {
            showScreen('betawelcome');
            window.StudFlow.betaGate.showWelcome();
            return;
        }

        // Restore state from localStorage
        window.StudFlow.storage.restoreAppState(appState);

        // Determine starting screen
        if (!window.StudFlow.storage.hasCompletedOnboarding()) {
            if (window.StudFlow.onboarding) {
                window.StudFlow.onboarding.start();
            } else {
                showScreen('home');
                if (window.StudFlow.home) window.StudFlow.home.render();
            }
        } else {
            showScreen('dashboard');
            updateDashboard();
            if (window.StudFlow.analytics) window.StudFlow.analytics.track('dashboard_view');
        }

        updateStats();

        // Groq API key — only load if AI is enabled
        if (window.StudFlow.features && window.StudFlow.features.AI_ENABLED) {
            var groqKey = window.StudFlow.storage.loadData('groq_api_key', '');
            if (groqKey) appState.apiKey = groqKey;
        }

        // Daily mission (engagement loop)
        if (window.StudFlow.dailyMission) window.StudFlow.dailyMission.init();

        // Adaptive learning (per-topic mastery)
        if (window.StudFlow.adaptive) window.StudFlow.adaptive.init();

        // Weekly progress tracker
        if (window.StudFlow.weeklyProgress) window.StudFlow.weeklyProgress.init();

        // Beta tips (one-time contextual messages)
        if (window.StudFlow.betaTips) window.StudFlow.betaTips.init();

        // Beta panels in settings (only if unlocked)
        if (window.StudFlow.betaGate && window.StudFlow.betaGate.isUnlocked()) {
            window.StudFlow.betaGate.showReferralPanel();
            if (window.StudFlow.analytics && window.StudFlow.analytics.renderBetaPanel) {
                window.StudFlow.analytics.renderBetaPanel();
            }
        }

        // Escape-to-close for More Menu overlay
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                var menu = document.getElementById('tab-more-menu');
                if (menu && menu.style.display === 'flex') {
                    e.preventDefault();
                    toggleMoreMenu();
                }
            }
        });
    }

    // Expose
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.app = {
        showScreen,
        updateStats,
        updateDashboard,
        getState: function() { return appState; },
        sanitizeHTML,
        escapeText,
        toggleMoreMenu,
        init,
        handleFile,
        updateProgress
    };

    // Boot on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
