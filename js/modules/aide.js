// aide.js — Guide interactif complet pour maitriser StudFlow
(function() {
    'use strict';

    // ==================== GUIDE SECTIONS ====================
    var GUIDE = [
        {
            id: 'start',
            icon: '🚀',
            title: 'Bien demarrer',
            subtitle: 'Les 5 premieres minutes',
            steps: [
                { icon: '1️⃣', text: 'Fais le <strong>diagnostic</strong> (2 min) — on decouvre ton profil et on adapte tout pour toi.', action: 'diagnostic:start' },
                { icon: '2️⃣', text: 'Choisis tes <strong>specialites</strong> (Maths, Physique, SVT ou SES) pour filtrer le contenu.', action: 'screen:subject-picker' },
                { icon: '3️⃣', text: 'Lance ta <strong>premiere session</strong> — l\'appli choisit les bonnes cartes pour toi. Zero prise de tete.', action: 'dailySession.show' },
                { icon: '4️⃣', text: 'Active les <strong>notifications</strong> pour ne jamais casser ta serie.', note: 'Dans Parametres > Notifications' },
                { icon: '5️⃣', text: '<strong>Installe l\'appli</strong> sur ton telephone pour y acceder comme une vraie app, meme hors ligne.', note: 'Bouton "Partager" dans Safari > "Sur l\'ecran d\'accueil"' }
            ]
        },
        {
            id: 'daily',
            icon: '📅',
            title: 'Ta routine quotidienne',
            subtitle: 'Le plan parfait en 15 min/jour',
            steps: [
                { icon: '🫶', text: '<strong>Check-in humeur</strong> — l\'appli s\'adapte : stresse ? Session douce. Motive ? Mode beast.' },
                { icon: '▶️', text: '<strong>Session quotidienne</strong> (10-15 min) — mix flashcards + quiz personnalise. Un seul bouton, zero choix.', action: 'dailySession.show' },
                { icon: '⏱️', text: '<strong>Mode Chrono</strong> (optionnel, 60s) — le meme defi pour tout le monde chaque jour. Bats ton record !', action: 'screen:chrono' },
                { icon: '⚔️', text: '<strong>Defie un ami</strong> — envoie un lien sur WhatsApp. Le perdant paye le kebab.', action: 'screen:challenges' },
                { icon: '📊', text: '<strong>Check tes stats</strong> — regarde ta progression, tes erreurs, ton niveau.', action: 'screen:stats' }
            ]
        },
        {
            id: 'features',
            icon: '🛠️',
            title: 'Tous les outils',
            subtitle: 'Ce que chaque bouton fait',
            groups: [
                {
                    label: '📖 Reviser',
                    items: [
                        { icon: '🎴', name: 'Flashcards', desc: 'Cartes recto/verso avec repetition espacee. Ton cerveau retient 80% de plus.', tip: 'Les cartes difficiles reviennent plus souvent automatiquement.', action: 'screen:flashcard' },
                        { icon: '⚡', name: 'Quiz', desc: 'QCM pour tester tes connaissances. Se tester est 2x plus efficace que relire.', tip: 'Fais-en 1 par jour, meme 5 min.', action: 'screen:quiz' },
                        { icon: '📚', name: 'Matieres', desc: 'Tout le programme du Bac par matiere. Flashcards + quiz + progression par chapitre.', tip: 'Commence par tes points faibles (en rouge).', action: 'screen:matieres' },
                        { icon: '🇫🇷', name: 'Bac Francais', desc: 'Module dedie : dissertation, commentaire, oral. Methodes + entrainement.', tip: 'Incontournable pour les epreuves de Premiere.', action: 'screen:bacfrancais' },
                        { icon: '📜', name: 'Annales', desc: 'Vrais sujets du Bac des annees precedentes avec corriges.', tip: 'Le meilleur entrainement possible. Fais-en 1 par semaine.', action: 'screen:annales' }
                    ]
                },
                {
                    label: '🧠 S\'organiser',
                    items: [
                        { icon: '🚀', name: 'Session quotidienne', desc: 'L\'appli choisit pour toi : les bonnes cartes, au bon moment, dans le bon ordre.', tip: 'C\'est le coeur de StudFlow. Fais-la chaque jour.', action: 'dailySession.show' },
                        { icon: '📅', name: 'Plan Bac', desc: 'Planning de revision sur 4-12 semaines jusqu\'au jour J.', tip: 'Indique tes heures dispo et l\'appli planifie tout.', action: 'screen:planbac' },
                        { icon: '🎯', name: 'Focus (Pomodoro)', desc: 'Timer de concentration : 15, 25 ou 45 min puis pause.', tip: 'Ton cerveau ne peut pas se concentrer plus de 25 min. Respecte ses limites.', action: 'screen:focus' },
                        { icon: '📝', name: 'DS demain', desc: 'Tu as un controle demain ? Choisis la matiere et le temps. Session ultra-ciblee.', tip: 'Priorise les cartes que tu as deja ratees.', action: 'screen:ds-demain' },
                        { icon: '🚨', name: 'Mode Urgence', desc: 'Le Bac c\'est dans 3 jours ? Ce mode te dit exactement quoi faire.', tip: 'Uniquement l\'essentiel, zero superflu.', action: 'screen:urgence' }
                    ]
                },
                {
                    label: '💆 Bien-etre',
                    items: [
                        { icon: '💆', name: 'Anti-stress', desc: 'Exercices de relaxation adaptes a ta situation (avant un exam, fatigue, panique...).', tip: 'La respiration 4-7-8 marche en 2 min. Teste avant un DS.', action: 'screen:stress' },
                        { icon: '🫁', name: 'Respiration', desc: '3 techniques guidees : 4-7-8, respiration carree, coherence cardiaque.', tip: 'Active le son pour etre guide visuellement.', action: 'screen:breathing' },
                        { icon: '💪', name: 'Confiance', desc: 'Module pour reconstruire ta confiance quand tu doutes.', tip: 'Tu progresses plus que tu ne le crois. Les stats le prouvent.', action: 'screen:confiance' }
                    ]
                },
                {
                    label: '🏆 Progresser',
                    items: [
                        { icon: '⏱️', name: 'Mode Chrono', desc: '60 secondes, max de bonnes reponses. Le meme defi pour tout le monde chaque jour.', tip: 'Comme Wordle mais pour le Bac. Partage ton score !', action: 'screen:chrono' },
                        { icon: '⚔️', name: 'Defis amis', desc: 'Cree un quiz de 10 questions et envoie le lien. Compare vos scores en VS.', tip: 'Le meilleur moyen de reviser sans s\'ennuyer.', action: 'screen:challenges' },
                        { icon: '📕', name: 'Carnet d\'erreurs', desc: 'Toutes tes erreurs sont trackees. Revise uniquement ce que tu rates.', tip: 'Tes erreurs recurrentes = tes points de progression.', action: 'screen:errors' },
                        { icon: '🏅', name: 'Badges', desc: '20 badges a debloquer en etudiant. Collectionne-les tous !', tip: 'Les badges rares montrent que tu es regulier.', action: 'screen:badges' },
                        { icon: '🎯', name: 'Missions', desc: 'Defis quotidiens : revise 5 cartes, fais un quiz, maintiens ta streak...', tip: 'Complete-les pour gagner du XP bonus.', action: 'screen:missions' }
                    ]
                },
                {
                    label: '⚙️ Outils avances',
                    items: [
                        { icon: '📄', name: 'Import PDF', desc: 'Importe tes cours en PDF. L\'appli extrait le texte et genere des fiches et quiz.', tip: 'Tout reste en local sur ton telephone. Rien n\'est envoye.', action: 'screen:upload' },
                        { icon: '🧪', name: 'Generateurs', desc: 'Cree des fiches de revision et des quiz a partir de n\'importe quel texte.', tip: 'Colle un chapitre de cours et l\'IA fait le reste.', action: 'screen:generators' },
                        { icon: '🤖', name: 'Coach IA', desc: 'Pose une question a ton coach. Il connait ton profil et tes points faibles.', tip: 'Demande-lui "Comment reviser les derivees ?" ou "Explique-moi la Shoah".', action: 'screen:professor' }
                    ]
                }
            ]
        },
        {
            id: 'tips',
            icon: '💡',
            title: 'Astuces de pro',
            subtitle: 'Les secrets pour scorer au max',
            tips: [
                { icon: '🧠', title: 'La repetition espacee', text: 'L\'appli utilise un algorithme (SM-2) qui calcule le meilleur moment pour revoir chaque carte. Les cartes faciles reviennent dans 2 semaines, les difficiles demain. C\'est prouve : tu retiens 90% sur le long terme.' },
                { icon: '📱', title: 'Installe l\'appli', text: 'Sur iPhone : Safari > bouton Partager > "Sur l\'ecran d\'accueil". Sur Android : menu 3 points > "Installer l\'application". Tu l\'auras comme une vraie app, meme sans internet.' },
                { icon: '🔥', title: 'Ne casse jamais ta streak', text: 'La regularite bat l\'intensite. 10 min/jour pendant 30 jours > 5h un dimanche. La streak est la pour te rappeler ca.' },
                { icon: '😴', title: 'Revise le soir', text: 'Ton cerveau consolide les informations pendant le sommeil. Une session de flashcards juste avant de dormir = retention x2.' },
                { icon: '❌', title: 'Les erreurs sont tes amies', text: 'Quand tu te trompes, ton hippocampe s\'active 3x plus que sur une bonne reponse. Chaque erreur est un upgrade de ton cerveau. Le carnet d\'erreurs te montre tes progres.' },
                { icon: '🗣️', title: 'Explique a voix haute', text: 'Si tu peux expliquer un concept a quelqu\'un, tu le maitrises. C\'est la technique Feynman. Essaie avec tes flashcards.' },
                { icon: '⚔️', title: 'Defie tes amis', text: 'La competition saine = motivation. Envoie un defi a tes potes. Celui qui perd revise le chapitre en plus. Tout le monde gagne.' },
                { icon: '📝', title: 'Teste-toi au lieu de relire', text: 'Les quiz sont 2x plus efficaces que la relecture. C\'est pour ca que StudFlow mise sur les quiz, pas sur les cours.' }
            ]
        }
    ];

    var FAQ = [
        { q: 'C\'est quoi la "Session quotidienne" ?', a: 'L\'appli analyse tes points faibles, les cartes a revoir (repetition espacee) et ton humeur du jour pour te creer une session sur mesure de 10-15 min. Tu n\'as rien a choisir, juste a appuyer sur "Lancer".' },
        { q: 'Comment fonctionne le check-in humeur ?', a: 'Avant chaque session, on te demande comment tu te sens. Si t\'es stresse, la session est plus douce. Si t\'es motive, elle est plus intense. Ca s\'adapte en temps reel.' },
        { q: 'C\'est quoi le Mode Chrono ?', a: '60 secondes pour repondre a un max de questions. Le meme defi pour tout le monde chaque jour (comme Wordle). Tu peux comparer ton score et le partager. Addictif.' },
        { q: 'Comment marche le "DS demain" ?', a: 'Tu choisis ta matiere et le temps que t\'as (15 min, 30 min, 1h). L\'appli te fait une session ultra-ciblee en priorisant ce que tu maitrises le moins. Parfait la veille d\'un controle.' },
        { q: 'Mes donnees vont ou ?', a: 'Tout est stocke <strong>sur ton telephone</strong> (localStorage). Rien ne sort. Si tu crees un compte, tu peux synchroniser entre appareils via un serveur securise. On respecte le RGPD.' },
        { q: 'C\'est quoi le carnet d\'erreurs ?', a: 'Chaque fois que tu te trompes, la question est enregistree. Le carnet te montre tes erreurs les plus frequentes et te propose une session de revision ciblee dessus.' },
        { q: 'Je peux utiliser StudFlow hors ligne ?', a: 'Oui ! Une fois l\'app chargee, tout fonctionne sans internet. Les flashcards, quiz, focus, tout. Seuls les defis entre amis et le coach IA ont besoin de connexion.' },
        { q: 'Comment importer mes cours ?', a: 'Menu Plus > Generateurs > Importer un PDF. L\'appli extrait le texte et cree automatiquement des flashcards et quiz. Tout reste en local.' },
        { q: 'Comment fonctionne le systeme XP ?', a: 'Chaque activite te donne des XP : quiz (+8), flashcard (+5), session complete (+15), defi (+20-30). Plus t\'as de XP, plus ton niveau monte (10 niveaux au total).' },
        { q: 'C\'est quoi la repetition espacee ?', a: 'Un algorithme scientifique (SM-2) qui calcule quand tu dois revoir chaque carte. Les cartes faciles reviennent moins souvent, les difficiles plus souvent. Resultat : tu retiens 90% au lieu de 20%.' },
        { q: 'Comment changer mes specialites ?', a: 'Parametres > Mes specialites > Modifier. Tu peux changer a tout moment. L\'appli filtre automatiquement le contenu.' },
        { q: 'C\'est vraiment gratuit ?', a: 'Oui ! Flashcards, quiz, sessions, chrono, defis, focus, anti-stress — tout est gratuit. Le Premium ajoute les stats avancees, le cloud sync et les generateurs IA.' }
    ];

    // ==================== RENDER ====================
    function show() {
        var el = document.getElementById('aide-content');
        if (!el) return;

        var profile = getProfile();
        var html = '';

        // Header
        html += '<div class="aide-hero">'
            + '<div class="aide-hero-icon">📖</div>'
            + '<h2 class="aide-hero-title">Comment utiliser StudFlow</h2>'
            + '<p class="aide-hero-sub">Tout ce qu\'il faut pour devenir une machine de revision</p>'
            + '</div>';

        // Quick start (if no diagnostic)
        if (!profile) {
            html += '<div class="aide-quickstart">'
                + '<div class="aide-qs-icon">🎯</div>'
                + '<div class="aide-qs-text">'
                + '<strong>Premiere etape : fais le diagnostic</strong>'
                + '<p>2 min pour decouvrir ton profil et debloquer un parcours personnalise.</p>'
                + '</div>'
                + '<button class="aide-qs-btn" data-action="diagnostic:start">Go →</button>'
                + '</div>';
        }

        // Guide sections navigation
        html += '<div class="aide-nav">';
        for (var n = 0; n < GUIDE.length; n++) {
            html += '<button class="aide-nav-btn" data-aide-section="' + GUIDE[n].id + '">'
                + '<span>' + GUIDE[n].icon + '</span>'
                + '<span>' + GUIDE[n].title + '</span>'
                + '</button>';
        }
        html += '<button class="aide-nav-btn" data-aide-section="faq">'
            + '<span>❓</span><span>FAQ</span></button>';
        html += '</div>';

        // Render each guide section
        for (var g = 0; g < GUIDE.length; g++) {
            var section = GUIDE[g];
            html += '<div class="aide-section" id="aide-sec-' + section.id + '">';
            html += '<h3>' + section.icon + ' ' + section.title + '</h3>';
            html += '<p class="aide-section-sub">' + section.subtitle + '</p>';

            if (section.steps) {
                html += '<div class="aide-steps">';
                for (var s = 0; s < section.steps.length; s++) {
                    var step = section.steps[s];
                    html += '<div class="aide-step' + (step.action ? ' aide-step-clickable' : '') + '"'
                        + (step.action ? ' data-action="' + step.action + '"' : '') + '>'
                        + '<span class="aide-step-num">' + step.icon + '</span>'
                        + '<div class="aide-step-content">'
                        + '<p>' + step.text + '</p>'
                        + (step.note ? '<span class="aide-step-note">' + step.note + '</span>' : '')
                        + '</div>'
                        + '</div>';
                }
                html += '</div>';
            }

            if (section.groups) {
                for (var gr = 0; gr < section.groups.length; gr++) {
                    var group = section.groups[gr];
                    html += '<div class="aide-group">';
                    html += '<h4 class="aide-group-label">' + group.label + '</h4>';
                    html += '<div class="aide-features">';
                    for (var f = 0; f < group.items.length; f++) {
                        var item = group.items[f];
                        html += '<div class="aide-feature" data-action="' + item.action + '">'
                            + '<div class="aide-feature-icon">' + item.icon + '</div>'
                            + '<div class="aide-feature-body">'
                            + '<strong>' + item.name + '</strong>'
                            + '<p>' + item.desc + '</p>'
                            + '<span class="aide-feature-tip">💡 ' + item.tip + '</span>'
                            + '</div>'
                            + '</div>';
                    }
                    html += '</div>';
                    html += '</div>';
                }
            }

            if (section.tips) {
                html += '<div class="aide-tips-grid">';
                for (var t = 0; t < section.tips.length; t++) {
                    var tip = section.tips[t];
                    html += '<div class="aide-tip-card">'
                        + '<div class="aide-tip-header">'
                        + '<span>' + tip.icon + '</span>'
                        + '<strong>' + tip.title + '</strong>'
                        + '</div>'
                        + '<p>' + tip.text + '</p>'
                        + '</div>';
                }
                html += '</div>';
            }

            html += '</div>';
        }

        // FAQ
        html += '<div class="aide-section" id="aide-sec-faq">';
        html += '<h3>❓ Questions frequentes</h3>';
        html += '<div class="aide-faq">';
        for (var q = 0; q < FAQ.length; q++) {
            html += '<div class="aide-faq-item">'
                + '<button class="aide-faq-q" data-faq="' + q + '">'
                + '<span>' + FAQ[q].q + '</span>'
                + '<span class="aide-faq-chevron">▸</span>'
                + '</button>'
                + '<div class="aide-faq-a" id="aide-faq-' + q + '">' + FAQ[q].a + '</div>'
                + '</div>';
        }
        html += '</div>';
        html += '</div>';

        // Footer
        html += '<div class="aide-footer">'
            + '<p>Tu ne trouves pas ta reponse ?</p>'
            + '<button class="aide-footer-btn" data-action="feedback:show">Envoie-nous un message</button>'
            + '</div>';

        el.innerHTML = html;

        // FAQ accordion
        el.querySelectorAll('.aide-faq-q').forEach(function(btn) {
            btn.addEventListener('click', function() {
                var idx = btn.getAttribute('data-faq');
                var answer = document.getElementById('aide-faq-' + idx);
                var isOpen = answer.classList.contains('open');
                el.querySelectorAll('.aide-faq-a').forEach(function(a) { a.classList.remove('open'); });
                el.querySelectorAll('.aide-faq-q').forEach(function(q) { q.classList.remove('active'); });
                if (!isOpen) {
                    answer.classList.add('open');
                    btn.classList.add('active');
                }
            });
        });

        // Section nav scroll
        el.querySelectorAll('.aide-nav-btn').forEach(function(btn) {
            btn.addEventListener('click', function() {
                var secId = btn.getAttribute('data-aide-section');
                var target = document.getElementById('aide-sec-' + secId);
                if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });

        StudFlow.app.showScreen('aide');
    }

    function getProfile() {
        try {
            var raw = localStorage.getItem('studflow_diagnostic');
            if (raw) {
                var data = JSON.parse(raw);
                return data.profile || data.type || null;
            }
        } catch(e) {}
        return null;
    }

    window.StudFlow = window.StudFlow || {};
    window.StudFlow.aide = { show: show };
})();
