// backup.js — Export/Import complet des donnees utilisateur
(function() {
    'use strict';

    var EXPORT_KEYS = [
        'studflow_app_state',
        'studflow_profile',
        'studflow_gamification',
        'studflow_onboarding',
        'studflow_dailyDashboard',
        'studflow_dailyGoal',
        'studflow_missions',
        'studflow_timeline',
        'studflow_focusStats',
        'studflow_quizGenHistory',
        'studflow_spacedRepetition',
        'studflow_planBac',
        'studflow_subscription',
        'studflow_notif_enabled',
        'studflow_tour_done',
        'studflow_quiz_count',
        'studflow_feedback_prompted',
        'studflow_last_active',
        'studflow_activeSubject'
    ];

    // Keys that must NEVER be exported (secrets, auth tokens)
    var SENSITIVE_KEYS = [
        'studflow_groq_api_key',
        'studflow_stripeConfig'
    ];

    function exportData() {
        var data = {
            _meta: {
                app: 'StudFlow',
                version: 1,
                date: new Date().toISOString(),
                platform: navigator.platform || 'unknown'
            }
        };

        for (var i = 0; i < EXPORT_KEYS.length; i++) {
            var key = EXPORT_KEYS[i];
            var val = localStorage.getItem(key);
            if (val !== null) {
                data[key] = val;
            }
        }

        // Also export any custom keys that start with studflow_ (excluding sensitive)
        for (var j = 0; j < localStorage.length; j++) {
            var k = localStorage.key(j);
            if (k && k.indexOf('studflow_') === 0 && !data[k]) {
                if (SENSITIVE_KEYS.indexOf(k) === -1) {
                    data[k] = localStorage.getItem(k);
                }
            }
        }

        var json = JSON.stringify(data, null, 2);
        var blob = new Blob([json], { type: 'application/json' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'studflow-backup-' + new Date().toISOString().slice(0, 10) + '.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        if (window.StudFlow.gamification && window.StudFlow.gamification.showToast) {
            window.StudFlow.gamification.showToast('Sauvegarde exportee !', 'xp', '💾');
        }
    }

    function importData() {
        var input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        input.onchange = function(e) {
            var file = e.target.files[0];
            if (!file) return;

            var reader = new FileReader();
            reader.onload = function(ev) {
                try {
                    // Reject excessively large backups (5 MB)
                    if (ev.target.result.length > 5 * 1024 * 1024) {
                        if (window.StudFlow.gamification) {
                            window.StudFlow.gamification.showToast('Fichier trop volumineux', 'xp', '⚠️');
                        }
                        return;
                    }

                    var data = JSON.parse(ev.target.result);

                    // Validate
                    if (!data._meta || data._meta.app !== 'StudFlow') {
                        if (window.StudFlow.gamification) {
                            window.StudFlow.gamification.showToast('Fichier invalide', 'xp', '⚠️');
                        }
                        return;
                    }

                    // Confirm
                    var ok = confirm('Restaurer cette sauvegarde du ' + (data._meta.date || '?').slice(0, 10) + ' ?\n\nCela remplacera toutes tes donnees actuelles.');
                    if (!ok) return;

                    // Import all keys (excluding sensitive)
                    var count = 0;
                    for (var key in data) {
                        if (key === '_meta') continue;
                        if (key.indexOf('studflow_') === 0 && SENSITIVE_KEYS.indexOf(key) === -1) {
                            localStorage.setItem(key, data[key]);
                            count++;
                        }
                    }

                    if (window.StudFlow.gamification) {
                        window.StudFlow.gamification.showToast(count + ' elements restaures !', 'xp', '✅');
                    }

                    // Reload after short delay
                    setTimeout(function() {
                        window.location.reload();
                    }, 1500);
                } catch (err) {
                    if (window.StudFlow.gamification) {
                        window.StudFlow.gamification.showToast('Erreur de lecture du fichier', 'xp', '⚠️');
                    }
                }
            };
            reader.readAsText(file);
        };
        input.click();
    }

    window.StudFlow = window.StudFlow || {};
    window.StudFlow.backup = {
        exportData: exportData,
        importData: importData
    };
})();
