// dissertation.js — Correction IA de dissertation/commentaire via Groq
(function() {
    'use strict';

    var MAX_CHARS = 8000;
    var isLoading = false;

    function show() {
        window.StudFlow.app.showScreen('dissertation');
        render();
    }

    function render() {
        var container = document.getElementById('dissertation-content');
        if (!container) return;

        var aiDisabled = window.StudFlow.features && !window.StudFlow.features.AI_ENABLED;
        var hasGroq = !aiDisabled && window.StudFlow.coachLLM && window.StudFlow.coachLLM.isAvailable();

        container.innerHTML = '<div style="padding:16px;">'
            + '<div style="text-align:center;margin-bottom:16px;">'
            + '<div style="font-size:2rem;margin-bottom:6px;">✍️</div>'
            + '<h2 style="color:var(--text);font-size:1.2rem;margin:0 0 6px;">Correction de dissertation</h2>'
            + '<p style="color:var(--text-muted);font-size:0.8rem;">Colle ton texte et l\'IA te donne un retour structure.</p>'
            + '</div>'
            + '<div style="margin-bottom:12px;">'
            + '<label style="color:var(--text-muted);font-size:0.8rem;display:block;margin-bottom:6px;">Type d\'exercice</label>'
            + '<select id="dissert-type" style="background:var(--bg-glass);border:1px solid rgba(255,255,255,0.1);border-radius:8px;padding:8px 12px;color:var(--text);font-size:0.85rem;width:100%;">'
            + '<option value="dissertation">Dissertation (Philo/SES)</option>'
            + '<option value="commentaire">Commentaire compose (Francais)</option>'
            + '<option value="composition">Composition (Histoire-Geo)</option>'
            + '<option value="essai">Essai (Anglais)</option>'
            + '</select>'
            + '</div>'
            + '<div style="margin-bottom:12px;">'
            + '<label style="color:var(--text-muted);font-size:0.8rem;display:block;margin-bottom:6px;">Sujet (optionnel)</label>'
            + '<input id="dissert-sujet" type="text" placeholder="Ex: Le bonheur est-il affaire de raison ?" '
            + 'style="background:var(--bg-glass);border:1px solid rgba(255,255,255,0.1);border-radius:8px;padding:10px 12px;color:var(--text);font-size:0.85rem;width:100%;box-sizing:border-box;">'
            + '</div>'
            + '<div style="margin-bottom:12px;">'
            + '<label style="color:var(--text-muted);font-size:0.8rem;display:block;margin-bottom:6px;">Ton texte <span style="color:var(--text-dim);">(' + MAX_CHARS + ' car. max)</span></label>'
            + '<textarea id="dissert-text" class="dissert-textarea" placeholder="Colle ta dissertation ici..." maxlength="' + MAX_CHARS + '"></textarea>'
            + '<div id="dissert-charcount" style="text-align:right;font-size:0.7rem;color:var(--text-dim);margin-top:4px;">0 / ' + MAX_CHARS + '</div>'
            + '</div>'
            + (aiDisabled ? '<div style="background:rgba(100,100,255,0.1);border:1px solid rgba(100,100,255,0.2);border-radius:8px;padding:10px;margin-bottom:12px;font-size:0.8rem;color:rgba(150,150,255,0.9);">'
                + 'La correction IA sera disponible dans une prochaine version.</div>'
              : !hasGroq ? '<div style="background:rgba(255,165,0,0.1);border:1px solid rgba(255,165,0,0.2);border-radius:8px;padding:10px;margin-bottom:12px;font-size:0.8rem;color:rgba(255,165,0,0.8);">'
                + 'Configure ta cle Groq dans Parametres pour activer la correction IA.</div>' : '')
            + '<button id="dissert-submit" data-action="dissertation.submit" '
            + 'style="background:var(--accent);color:#fff;border:none;border-radius:12px;padding:12px 24px;font-size:0.95rem;cursor:pointer;width:100%;font-weight:600;'
            + (hasGroq ? '' : 'opacity:0.5;pointer-events:none;') + '">'
            + 'Corriger mon texte</button>'
            + '<div id="dissert-result"></div>'
            + '</div>';

        // Char counter
        var textarea = document.getElementById('dissert-text');
        if (textarea) {
            textarea.addEventListener('input', function() {
                var el = document.getElementById('dissert-charcount');
                if (el) el.textContent = textarea.value.length + ' / ' + MAX_CHARS;
            });
        }
    }

    function submit() {
        if (isLoading) return;
        var text = (document.getElementById('dissert-text').value || '').trim();
        if (text.length < 50) {
            if (window.StudFlow.gamification) {
                window.StudFlow.gamification.showToast('Texte trop court (50 car. minimum)', 'xp', '⚠️');
            }
            return;
        }

        if (!window.StudFlow.coachLLM || !window.StudFlow.coachLLM.isAvailable()) {
            if (window.StudFlow.gamification) {
                window.StudFlow.gamification.showToast('Configure ta cle Groq dans Parametres', 'xp', '⚠️');
            }
            return;
        }

        var type = document.getElementById('dissert-type').value;
        var sujet = (document.getElementById('dissert-sujet').value || '').trim();

        isLoading = true;
        var btn = document.getElementById('dissert-submit');
        btn.textContent = 'Analyse en cours...';
        btn.style.opacity = '0.6';

        var resultDiv = document.getElementById('dissert-result');
        resultDiv.innerHTML = '<div style="text-align:center;padding:20px;color:var(--text-muted);">Analyse en cours... (15-30 sec)</div>';

        var typeLabels = {
            dissertation: 'dissertation de philosophie ou SES',
            commentaire: 'commentaire compose de francais',
            composition: 'composition d\'histoire-geographie',
            essai: 'essai en anglais'
        };

        var prompt = 'Tu es un correcteur de copies du Bac, agrege et bienveillant. '
            + 'Corrige cette ' + (typeLabels[type] || 'dissertation') + '.\n\n'
            + (sujet ? 'Sujet : ' + sujet + '\n\n' : '')
            + 'Texte de l\'eleve :\n' + text + '\n\n'
            + 'Donne une correction structuree avec :\n'
            + '1. **Note estimee** /20 avec justification en 1 phrase\n'
            + '2. **Points forts** (2-3 points positifs)\n'
            + '3. **Points a ameliorer** (2-3 points concrets)\n'
            + '4. **Structure** : analyse de l\'intro, du developpement et de la conclusion\n'
            + '5. **Style et expression** : qualite de l\'ecriture, vocabulaire\n'
            + '6. **Conseil principal** : UNE action concrete pour progresser\n\n'
            + 'Sois bienveillant mais honnete. Donne des exemples concrets de ce qui pourrait etre ameliore.';

        window.StudFlow.coachLLM.sendMessage(prompt)
            .then(function(reply) {
                isLoading = false;
                btn.textContent = 'Corriger mon texte';
                btn.style.opacity = '1';

                // Basic markdown rendering
                var html = reply
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    .replace(/\n- /g, '\n<li>')
                    .replace(/\n(\d+)\. /g, '\n<li>')
                    .replace(/\n/g, '<br>');

                resultDiv.innerHTML = '<div class="dissert-result">'
                    + '<h3 style="color:var(--accent-light);font-size:1rem;margin:0 0 12px;">Correction</h3>'
                    + html
                    + '</div>';

                if (window.StudFlow.gamification) {
                    window.StudFlow.gamification.addXP('coach_message');
                    window.StudFlow.gamification.showToast('Correction terminee !', 'xp', '✍️');
                }
                if (window.StudFlow.events) {
                    window.StudFlow.events.emit('dissertation:corrected', { type: type });
                }
            })
            .catch(function(err) {
                isLoading = false;
                btn.textContent = 'Corriger mon texte';
                btn.style.opacity = '1';
                resultDiv.innerHTML = '<div style="text-align:center;padding:16px;color:rgba(255,100,100,0.8);">'
                    + (err.message || 'Erreur de connexion. Reessaie.') + '</div>';
            });
    }

    window.StudFlow = window.StudFlow || {};
    window.StudFlow.dissertation = {
        show: show,
        submit: submit
    };
})();
