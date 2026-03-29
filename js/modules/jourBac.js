// jourBac.js — Mode "Jour du Bac" : accompagnement avant, pendant et apres l'epreuve
(function() {
    'use strict';

    var _phase = 'before'; // before | just_before | during | blocked | after

    function show() {
        window.StudFlow.app.showScreen('jourbac');
        renderPhase('before');
    }

    function renderPhase(phase) {
        _phase = phase;
        var container = document.getElementById('jourbac-content');
        if (!container) return;

        var html = '';
        switch (phase) {
            case 'before': html = renderBefore(); break;
            case 'just_before': html = renderJustBefore(); break;
            case 'during': html = renderDuring(); break;
            case 'blocked': html = renderBlocked(); break;
            case 'after': html = renderAfter(); break;
            default: html = renderBefore();
        }

        container.style.opacity = '0';
        container.innerHTML = html;
        setTimeout(function() {
            container.style.transition = 'opacity 0.4s ease';
            container.style.opacity = '1';
        }, 50);
    }

    // ==================== AVANT L'EPREUVE ====================
    function renderBefore() {
        return '<div class="jb-screen">'
            + '<div class="jb-icon">\uD83C\uDFAF</div>'
            + '<h2 class="jb-title">Jour du Bac</h2>'
            + '<p class="jb-msg">Tu n\'as pas besoin d\'etre parfait. Juste concentre.</p>'
            + '<div class="jb-checklist">'
            + '<div class="jb-check">\u2713 Carte d\'identite</div>'
            + '<div class="jb-check">\u2713 Convocation</div>'
            + '<div class="jb-check">\u2713 Stylos (+ rechange)</div>'
            + '<div class="jb-check">\u2713 Montre (sans connectivite)</div>'
            + '<div class="jb-check">\u2713 Bouteille d\'eau</div>'
            + '<div class="jb-check">\u2713 Snack</div>'
            + '</div>'
            + '<button class="jb-btn-primary" data-action="jourBac.goPhase" data-param="just_before">Se recentrer avant l\'epreuve \u2192</button>'
            + '<button class="jb-btn-secondary" data-action="jourBac.goPhase" data-param="during">Je suis en epreuve</button>'
            + '</div>';
    }

    // ==================== JUSTE AVANT ====================
    function renderJustBefore() {
        return '<div class="jb-screen">'
            + '<div class="jb-icon">\uD83E\uDDE0</div>'
            + '<h2 class="jb-title">20 secondes pour toi</h2>'
            + '<p class="jb-msg">Ferme les yeux. Respire profondement. Tu es pret(e).</p>'
            + '<button class="jb-btn-primary jb-breathe" data-action="jourBac.quickBreath">Respirer 20 secondes</button>'
            + '<div class="jb-timer" id="jb-timer" style="display:none">20</div>'
            + '<p class="jb-sub">Apres ca, tu y vas. Confiant(e).</p>'
            + '<button class="jb-btn-secondary" data-action="jourBac.goPhase" data-param="during">Passer a l\'epreuve \u2192</button>'
            + '</div>';
    }

    // ==================== PENDANT L'EPREUVE ====================
    function renderDuring() {
        return '<div class="jb-screen">'
            + '<div class="jb-icon">\u270D\uFE0F</div>'
            + '<h2 class="jb-title">Pendant l\'epreuve</h2>'
            + '<div class="jb-method">'
            + '<div class="jb-step"><span class="jb-step-num">1</span> Lis le sujet en entier. Respire.</div>'
            + '<div class="jb-step"><span class="jb-step-num">2</span> Identifie ce que tu sais faire.</div>'
            + '<div class="jb-step"><span class="jb-step-num">3</span> Commence par le plus simple.</div>'
            + '<div class="jb-step"><span class="jb-step-num">4</span> Avance question par question.</div>'
            + '<div class="jb-step"><span class="jb-step-num">5</span> Relis avant de rendre.</div>'
            + '</div>'
            + '<button class="jb-btn-alert" data-action="jourBac.goPhase" data-param="blocked">Je bloque sur une question</button>'
            + '<button class="jb-btn-secondary" data-action="jourBac.goPhase" data-param="after">L\'epreuve est finie</button>'
            + '</div>';
    }

    // ==================== BLOCAGE ====================
    function renderBlocked() {
        return '<div class="jb-screen">'
            + '<div class="jb-icon">\uD83D\uDCA8</div>'
            + '<h2 class="jb-title">Tu bloques ? Normal.</h2>'
            + '<p class="jb-msg">Respire. Reviens a une question plus simple.</p>'
            + '<div class="jb-method">'
            + '<div class="jb-step"><span class="jb-step-num">1</span> Pose le stylo 5 secondes.</div>'
            + '<div class="jb-step"><span class="jb-step-num">2</span> Respire profondement.</div>'
            + '<div class="jb-step"><span class="jb-step-num">3</span> Passe a une autre question.</div>'
            + '<div class="jb-step"><span class="jb-step-num">4</span> Reviens a celle-ci plus tard.</div>'
            + '</div>'
            + '<p class="jb-reassure">Tu n\'as pas besoin de tout reussir. Chaque point compte.</p>'
            + '<button class="jb-btn-primary" data-action="jourBac.goPhase" data-param="during">\u2190 Retour aux conseils</button>'
            + '</div>';
    }

    // ==================== APRES ====================
    function renderAfter() {
        return '<div class="jb-screen">'
            + '<div class="jb-icon">\u2728</div>'
            + '<h2 class="jb-title">C\'est termine.</h2>'
            + '<p class="jb-msg">Ne reviens pas dessus. Ce qui est fait est fait.</p>'
            + '<p class="jb-sub">Tu as fait de ton mieux. C\'est suffisant.</p>'
            + '<div class="jb-method">'
            + '<div class="jb-step">\u2713 Ne compare pas tes reponses avec les autres.</div>'
            + '<div class="jb-step">\u2713 Repose-toi.</div>'
            + '<div class="jb-step">\u2713 Si une autre epreuve demain : revise legement ce soir.</div>'
            + '</div>'
            + '<button class="jb-btn-primary" data-action="screen:dashboard">Retour au dashboard</button>'
            + '</div>';

    }

    // ==================== QUICK BREATH ====================
    function quickBreath() {
        var timerEl = document.getElementById('jb-timer');
        if (!timerEl) return;
        timerEl.style.display = '';
        var remaining = 20;
        timerEl.textContent = remaining;

        var interval = setInterval(function() {
            remaining--;
            if (remaining <= 0) {
                clearInterval(interval);
                timerEl.textContent = '\u2713';
                if (window.StudFlow.gamification) {
                    window.StudFlow.gamification.showToast('Tu es pret(e). Vas-y.', 'xp', '\uD83D\uDCAA');
                }
                setTimeout(function() { renderPhase('during'); }, 1500);
                return;
            }
            timerEl.textContent = remaining;
        }, 1000);
    }

    function goPhase(phase) {
        renderPhase(phase);
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.jourBac = {
        show: show,
        goPhase: goPhase,
        quickBreath: quickBreath
    };
})();
