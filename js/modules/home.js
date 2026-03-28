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
            + '<p class="landing-sub">Importe ton cours PDF et genere instantanement quiz, flashcards et plan de revision.</p>'
            + '<div class="landing-hero-actions">'
            + '<button class="landing-btn-primary" data-action="home.goToDiagnostic">Essayer gratuitement</button>'
            + '<button class="landing-btn-ghost" data-action="home.goToDashboard">J\'ai deja un compte</button>'
            + '</div>'
            + '<p class="landing-privacy-line">Gratuit &bull; Local &bull; Tes documents restent sur ton appareil</p>'
            + '</div>'
            + '</section>';
    }

    // ==================== HOW IT WORKS ====================
    function renderHowItWorks() {
        var steps = [
            { num: '1', title: 'Importer PDF', desc: 'Glisse ton cours, ta fiche ou ton poly. Le texte est extrait instantanement sur ton appareil.', icon: '📄' },
            { num: '2', title: 'StudFlow genere quiz + flashcards', desc: 'L\'app analyse ton contenu et cree des exercices adaptes automatiquement.', icon: '⚡' },
            { num: '3', title: 'Reviser intelligemment', desc: 'Entraine-toi avec des methodes prouvees, suis ta progression, arrive confiant le jour J.', icon: '🚀' }
        ];

        var stepsHTML = steps.map(function(s) {
            return '<div class="landing-step">'
                + '<div class="landing-step-num">' + s.num + '</div>'
                + '<div class="landing-step-icon">' + s.icon + '</div>'
                + '<h3>' + s.title + '</h3>'
                + '<p>' + s.desc + '</p>'
                + '</div>';
        }).join('');

        return '<section class="landing-section home-animate" id="landing-how">'
            + '<h2 class="landing-section-title">Comment ca marche</h2>'
            + '<div class="landing-steps-grid">' + stepsHTML + '</div>'
            + '</section>';
    }

    // ==================== BENEFITS ====================
    function renderBenefits() {
        var items = [
            { icon: '🧠', title: 'Comprendre', desc: 'Fiches de synthese, resume intelligent, coach qui t\'explique ce que tu n\'as pas compris.' },
            { icon: '🔁', title: 'Memoriser', desc: 'Flashcards, quiz, repetition espacee — les techniques les plus efficaces pour ancrer les notions.' },
            { icon: '⏱️', title: 'Gagner du temps', desc: 'Import PDF, generation auto, timer focus. Tu revises directement, sans perdre du temps a preparer.' }
        ];

        var html = items.map(function(item) {
            return '<div class="landing-benefit-card">'
                + '<div class="landing-benefit-icon">' + item.icon + '</div>'
                + '<h3>' + item.title + '</h3>'
                + '<p>' + item.desc + '</p>'
                + '</div>';
        }).join('');

        return '<section class="landing-section home-animate">'
            + '<h2 class="landing-section-title">Pourquoi <span>ca marche</span></h2>'
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
            + '<h2>Commence tes revisions aujourd\'hui</h2>'
            + '<p>Importe ton premier PDF et genere tes fiches en 30 secondes.</p>'
            + '<button class="landing-btn-primary large" data-action="home.goToDiagnostic">Essayer gratuitement</button>'
            + '<p class="landing-cta-sub">Gratuit. Local. Sans inscription.</p>'
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
