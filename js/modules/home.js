// home.js — Landing page StudFlow (premium startup energy)
(function() {

    function goToDiagnostic() {
        window.StudFlow.diagnostic.start();
    }

    function goToDashboard() {
        window.StudFlow.app.showScreen('dashboard');
    }

    // ==================== RENDER ====================
    function render() {
        var container = document.getElementById('home-content');
        if (!container) return;

        container.innerHTML = ''
            + renderNavbar()
            + renderHero()
            + renderProblem()
            + renderHowItWorks()
            + renderBenefits()
            + renderDemo()
            + renderFAQ()
            + renderCTAFinal()
            + renderFooter();

        initScrollAnimations();
        initFAQToggle();
    }

    // ==================== NAVBAR ====================
    function renderNavbar() {
        return '<nav class="landing-nav">'
            + '<div class="landing-nav-inner">'
            + '<div class="landing-nav-left">'
            + '<a href="#" class="landing-nav-logo" data-action="noop">'
            + '<div class="home-logo-icon"></div>'
            + '<span class="home-logo-text">Stud<span>Flow</span></span>'
            + '<span class="landing-beta-tag">BETA</span>'
            + '</a>'
            + '</div>'
            + '<div class="landing-nav-links">'
            + '<a href="#landing-how" class="landing-nav-link" data-action="landing:scroll" data-param="landing-how">Fonctionnement</a>'
            + '<a href="#landing-demo" class="landing-nav-link" data-action="landing:scroll" data-param="landing-demo">Exemple</a>'
            + '<a href="#landing-faq" class="landing-nav-link" data-action="landing:scroll" data-param="landing-faq">FAQ</a>'
            + '</div>'
            + '<button class="landing-nav-cta" data-action="home.goToDiagnostic">Essayer gratuitement</button>'
            + '</div>'
            + '</nav>';
    }

    // ==================== HERO ====================
    function renderHero() {
        return '<section class="landing-hero">'
            + '<div class="landing-hero-inner">'
            + '<h1 class="landing-h1">Reussis ton bac<br><span>sans stress.</span></h1>'
            + '<p class="landing-sub">Un coach qui t\'aide a reviser, rester concentre et gerer la pression.</p>'
            + '<div class="landing-hero-actions">'
            + '<button class="landing-btn-primary" data-action="home.goToDiagnostic">Commencer gratuitement</button>'
            + '<button class="landing-btn-ghost" data-action="home.goToDashboard">J\'ai deja un compte</button>'
            + '</div>'
            + '<p class="landing-privacy-line">Gratuit \u2022 100% local \u2022 Tes donnees restent sur ton appareil</p>'
            + '</div>'
            + '</section>';
    }

    // ==================== PROBLEME ====================
    function renderProblem() {
        return '<section class="landing-section home-animate">'
            + '<div class="landing-problem">'
            + '<h2 class="landing-section-title">Tu sais que tu dois reviser\u2026<br><span>mais tu ne sais pas par ou commencer.</span></h2>'
            + '<div class="landing-problem-list">'
            + '<div class="landing-problem-item">\uD83D\uDE29 Procrastination</div>'
            + '<div class="landing-problem-item">\uD83D\uDE30 Stress avant les controles</div>'
            + '<div class="landing-problem-item">\uD83E\uDD37 Pas de methode claire</div>'
            + '<div class="landing-problem-item">\uD83D\uDE14 Perte de confiance</div>'
            + '</div>'
            + '</div>'
            + '</section>';
    }

    // ==================== SOLUTION ====================
    function renderHowItWorks() {
        return '<section class="landing-section home-animate" id="landing-how">'
            + '<h2 class="landing-section-title">StudFlow t\'accompagne <span>chaque jour.</span></h2>'
            + '<div class="landing-steps-grid">'
            + '<div class="landing-step">'
            + '<div class="landing-step-icon">\uD83C\uDFAF</div>'
            + '<h3>Session guidee</h3>'
            + '<p>Chaque jour, une session claire et adaptee a ton niveau. Tu sais quoi faire en 2 secondes.</p>'
            + '</div>'
            + '<div class="landing-step">'
            + '<div class="landing-step-icon">\uD83E\uDDE0</div>'
            + '<h3>Coach intelligent</h3>'
            + '<p>Il s\'adapte a ton stress, ta confiance et tes matieres faibles. Comme un vrai coach.</p>'
            + '</div>'
            + '<div class="landing-step">'
            + '<div class="landing-step-icon">\uD83D\uDCA8</div>'
            + '<h3>Anti-stress integre</h3>'
            + '<p>Respiration guidee, mode Jour du Bac, messages rassurants. Pour reviser sans pression.</p>'
            + '</div>'
            + '</div>'
            + '</section>';
    }

    // ==================== FEATURES ====================
    function renderBenefits() {
        var items = [
            { icon: '\uD83D\uDCDA', title: 'Import PDF + Photo', desc: 'Glisse ton cours. L\'app extrait le texte et genere flashcards et quiz automatiquement.' },
            { icon: '\uD83D\uDD04', title: 'Revision espacee', desc: 'L\'app sait ce que tu oublies et te le repropose au bon moment. Science-backed.' },
            { icon: '\uD83D\uDCC8', title: 'Progression visible', desc: 'XP, streak, niveau, badges. Tu vois tes progres chaque jour.' }
        ];

        var html = items.map(function(item) {
            return '<div class="landing-benefit-card">'
                + '<div class="landing-benefit-icon">' + item.icon + '</div>'
                + '<h3>' + item.title + '</h3>'
                + '<p>' + item.desc + '</p>'
                + '</div>';
        }).join('');

        return '<section class="landing-section home-animate">'
            + '<h2 class="landing-section-title">Tout ce qu\'il faut <span>pour reussir</span></h2>'
            + '<div class="landing-benefits-grid">' + html + '</div>'
            + '</section>';
    }

    // ==================== DEMO ====================
    function renderDemo() {
        var quizMock = '<div class="landing-demo-card landing-demo-quiz">'
            + '<div class="landing-demo-label">Quiz genere par StudFlow</div>'
            + '<div class="landing-demo-q">En quelle annee a ete publie <strong>Les Fleurs du mal</strong> de Baudelaire ?</div>'
            + '<div class="landing-demo-options">'
            + '<div class="landing-demo-opt">1845</div>'
            + '<div class="landing-demo-opt correct">1857</div>'
            + '<div class="landing-demo-opt">1862</div>'
            + '<div class="landing-demo-opt">1874</div>'
            + '</div>'
            + '<div class="landing-demo-tag">Francais — Premiere</div>'
            + '</div>';

        return '<section class="landing-section home-animate" id="landing-demo">'
            + '<h2 class="landing-section-title">Exemple de quiz</h2>'
            + '<p class="landing-section-sub">Genere automatiquement a partir d\'un cours PDF.</p>'
            + '<div class="landing-demo-single">'
            + quizMock
            + '</div>'
            + '</section>';
    }

    // ==================== FAQ ====================
    function renderFAQ() {
        var faqs = [
            {
                q: 'Mes PDF sont-ils envoyes quelque part ?',
                a: 'Non. Tes fichiers sont traites localement dans ton navigateur. Le texte extrait reste sur ton appareil. Rien n\'est envoye a un serveur, sauf si tu actives le coach IA (optionnel).'
            },
            {
                q: 'Ca marche avec quels fichiers ?',
                a: 'StudFlow accepte les fichiers PDF : cours, fiches, polys, manuels scannes. Le texte est extrait automatiquement. Les images dans le PDF ne sont pas encore prises en charge.'
            },
            {
                q: 'C\'est gratuit jusqu\'ou ?',
                a: 'StudFlow est 100% gratuit pendant la beta. Toutes les fonctionnalites sont accessibles sans inscription ni carte bancaire.'
            },
            {
                q: 'Puis-je reviser hors ligne ?',
                a: 'Oui. Une fois l\'app chargee, elle fonctionne sans internet. Tes donnees et tes revisions sont sauvegardees localement sur ton appareil.'
            }
        ];

        var faqHTML = faqs.map(function(f, i) {
            return '<div class="landing-faq-item" data-faq="' + i + '">'
                + '<button class="landing-faq-q" data-action="landing:toggle-faq" data-param="' + i + '">'
                + '<span>' + f.q + '</span>'
                + '<span class="landing-faq-chevron">+</span>'
                + '</button>'
                + '<div class="landing-faq-a">' + f.a + '</div>'
                + '</div>';
        }).join('');

        return '<section class="landing-section home-animate" id="landing-faq">'
            + '<h2 class="landing-section-title">Questions frequentes</h2>'
            + '<div class="landing-faq-list">' + faqHTML + '</div>'
            + '</section>';
    }

    // ==================== CTA FINAL ====================
    function renderCTAFinal() {
        return '<section class="landing-section landing-cta-final home-animate">'
            + '<div class="landing-cta-box">'
            + '<h2>Commence aujourd\'hui.</h2>'
            + '<p>10 min/jour. Flashcards, quiz, coach. Ton Bac, a ton rythme.</p>'
            + '<button class="landing-btn-primary large" data-action="home.goToDiagnostic">Acceder gratuitement</button>'
            + '<p class="landing-cta-sub">Gratuit \u2022 Sans inscription \u2022 100% local</p>'
            + '</div>'
            + '</section>';
    }

    // ==================== FOOTER ====================
    function renderFooter() {
        return '<footer class="landing-footer">'
            + '<div class="landing-footer-inner">'
            + '<span class="landing-footer-logo">StudFlow</span>'
            + '<span class="landing-footer-sep">&middot;</span>'
            + '<span class="landing-footer-text">Beta 2026</span>'
            + '</div>'
            + '<div class="landing-footer-links">'
            + '<a href="#" data-action="landing:privacy" class="landing-footer-link">Confidentialite</a>'
            + '<a href="#" data-action="landing:legal" class="landing-footer-link">Mentions legales</a>'
            + '<a href="#" data-action="landing:terms" class="landing-footer-link">CGU</a>'
            + '</div>'
            + '</footer>';
    }

    // ==================== SCROLL ANIMATIONS ====================
    function initScrollAnimations() {
        var sections = document.querySelectorAll('.home-animate');
        if (!sections.length) return;

        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('home-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        sections.forEach(function(section) {
            observer.observe(section);
        });
    }

    // ==================== FAQ TOGGLE ====================
    function initFAQToggle() {
        // Expose globally for onclick
        window.toggleFaq = function(index) {
            var item = document.querySelector('[data-faq="' + index + '"]');
            if (!item) return;
            item.classList.toggle('open');
        };

        // Expose smooth scroll globally
        window.smoothScroll = function(id) {
            var el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        };

        // Legal pages (placeholder modals)
        window.showLegalNotice = function() {
            alert('Mentions legales\n\nStudFlow est un projet en beta.\nEditeur : StudFlow Beta.\nHebergement : statique (Vercel/Netlify).\nContact : via le formulaire de feedback dans l\'app.');
        };
        window.showTerms = function() {
            alert('Conditions generales d\'utilisation\n\nStudFlow est gratuit pendant la beta. Vos donnees restent sur votre appareil. Aucune garantie sur le contenu genere. L\'utilisateur est responsable de verifier l\'exactitude des informations.');
        };
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.home = {
        render: render,
        goToDiagnostic: goToDiagnostic,
        goToDashboard: goToDashboard
    };

})();
