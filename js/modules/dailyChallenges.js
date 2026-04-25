// dailyChallenges.js — 3 mini-objectifs/jour, reset 00:00 Europe/Paris.
// Pool deterministique par date pour que les memes defis s'affichent toute la
// journee. Progression suivie via l'event bus `xp:gained`.
(function() {
    'use strict';

    var LS_KEY = 'studflow_daily_challenges_v1';

    // action = cle XP_ACTIONS (ou 'focus_any' = 15/25/45)
    var POOL = [
        { id: 'fc_5',      label: '5 flashcards',        icon: '🎴', action: 'flashcard_correct', target: 5  },
        { id: 'fc_10',     label: '10 flashcards',       icon: '🎴', action: 'flashcard_correct', target: 10 },
        { id: 'quiz_1',    label: '1 quiz complet',      icon: '🧠', action: 'quiz_complete',     target: 1  },
        { id: 'quiz_3',    label: '3 quiz termines',     icon: '🧠', action: 'quiz_complete',     target: 3  },
        { id: 'q_right_5', label: '5 bonnes reponses',   icon: '✅', action: 'quiz_correct',      target: 5  },
        { id: 'q_right_10',label: '10 bonnes reponses',  icon: '✅', action: 'quiz_correct',      target: 10 },
        { id: 'focus_1',   label: '1 session focus',     icon: '🎯', action: 'focus_any',         target: 1  }
    ];

    // ==================== DATE / SEED ====================
    function parisToday() {
        var p = new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Paris' }));
        var y = p.getFullYear();
        var m = String(p.getMonth() + 1).padStart(2, '0');
        var d = String(p.getDate()).padStart(2, '0');
        return y + '-' + m + '-' + d;
    }

    function seed(s) {
        var h = 2166136261;
        for (var i = 0; i < s.length; i++) {
            h ^= s.charCodeAt(i);
            h = Math.imul(h, 16777619);
        }
        return (h >>> 0);
    }

    function pickThree(date) {
        var s = seed(date);
        var pool = POOL.slice();
        var out = [];
        for (var i = 0; i < 3 && pool.length > 0; i++) {
            var idx = (s + i * 2654435761) % pool.length;
            if (idx < 0) idx += pool.length;
            var c = pool[idx];
            pool.splice(idx, 1);
            out.push({
                id: c.id, label: c.label, icon: c.icon,
                action: c.action, target: c.target,
                progress: 0, done: false, claimed: false
            });
        }
        return out;
    }

    // ==================== STORAGE ====================
    function load() {
        var raw = null;
        try { raw = JSON.parse(localStorage.getItem(LS_KEY) || 'null'); } catch (e) {}
        var today = parisToday();
        if (!raw || raw.date !== today || !Array.isArray(raw.list) || raw.list.length !== 3) {
            raw = { date: today, list: pickThree(today) };
            save(raw);
        }
        return raw;
    }

    function save(data) {
        try { localStorage.setItem(LS_KEY, JSON.stringify(data)); } catch (e) {}
    }

    // ==================== TRACKING ====================
    function matches(expected, actual) {
        if (expected === 'focus_any') {
            return actual === 'focus_15' || actual === 'focus_25' || actual === 'focus_45';
        }
        return expected === actual;
    }

    function trackAction(action) {
        if (!action) return;
        var data = load();
        var changed = false;
        var justDone = [];
        for (var i = 0; i < data.list.length; i++) {
            var c = data.list[i];
            if (c.done) continue;
            if (matches(c.action, action)) {
                c.progress += 1;
                changed = true;
                if (c.progress >= c.target) {
                    c.done = true;
                    justDone.push(c);
                }
            }
        }
        if (!changed) return;
        save(data);
        for (var j = 0; j < justDone.length; j++) onComplete(justDone[j], data);
    }

    function onComplete(c, data) {
        if (c.claimed) return;
        c.claimed = true;
        save(data);

        // XP reward via l'action existante (challenge_complete = 20 XP)
        if (window.StudFlow.gamification && window.StudFlow.gamification.addXP) {
            window.StudFlow.gamification.addXP('challenge_complete');
        }
        var toast = window.StudFlow.gamification && window.StudFlow.gamification.showToast;
        if (toast) {
            setTimeout(function() { toast('Defi reussi : ' + c.label, 'xp-big', '🎯'); }, 500);
        }

        // All 3 done → petit bravo supplementaire
        var allDone = data.list.every(function(x) { return x.done; });
        if (allDone && toast) {
            setTimeout(function() { toast('3 defis du jour termines !', 'xp-big', '🏆'); }, 1100);
        }
    }

    // ==================== UI ====================
    function renderCard() {
        var data = load();
        var doneCount = 0;
        for (var i = 0; i < data.list.length; i++) if (data.list[i].done) doneCount++;

        var html = ''
          + '<div class="dash-section" style="background:linear-gradient(135deg,rgba(102,126,234,0.12),rgba(118,75,162,0.12));border:1px solid rgba(102,126,234,0.3);border-radius:16px;padding:14px 16px;">'
          +   '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">'
          +     '<h4 style="margin:0;font-size:1rem;">🎯 Defis du jour</h4>'
          +     '<span style="font-size:0.82rem;color:var(--text-muted);">' + doneCount + ' / 3</span>'
          +   '</div>'
          +   '<div style="display:flex;flex-direction:column;gap:10px;">';

        for (var k = 0; k < data.list.length; k++) {
            var c = data.list[k];
            var pct = Math.min(100, Math.round((c.progress / c.target) * 100));
            var rowOpacity = c.done ? 'opacity:0.65;' : '';
            var icon = c.done ? '✅' : c.icon;
            var barColor = c.done ? '#22c55e' : 'linear-gradient(90deg,#667eea,#764ba2)';
            html += ''
              + '<div style="display:flex;align-items:center;gap:10px;' + rowOpacity + '">'
              +   '<span style="font-size:1.1rem;width:1.5rem;text-align:center;">' + icon + '</span>'
              +   '<div style="flex:1;min-width:0;">'
              +     '<div style="display:flex;justify-content:space-between;align-items:baseline;font-size:0.88rem;">'
              +       '<span style="font-weight:500;' + (c.done ? 'text-decoration:line-through;' : '') + '">' + c.label + '</span>'
              +       '<span style="color:var(--text-muted);font-size:0.78rem;margin-left:0.5rem;white-space:nowrap;">' + c.progress + ' / ' + c.target + '</span>'
              +     '</div>'
              +     '<div style="height:4px;background:rgba(255,255,255,0.08);border-radius:2px;overflow:hidden;margin-top:4px;">'
              +       '<div style="height:100%;width:' + pct + '%;background:' + barColor + ';transition:width 0.3s;"></div>'
              +     '</div>'
              +   '</div>'
              + '</div>';
        }

        html += '  </div>'
          + '</div>';
        return html;
    }

    // ==================== INIT ====================
    function init() {
        load(); // cree ou resete au besoin
        if (window.StudFlow && window.StudFlow.events && window.StudFlow.events.on) {
            window.StudFlow.events.on('xp:gained', function(data) {
                if (data && data.action) trackAction(data.action);
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    window.StudFlow = window.StudFlow || {};
    window.StudFlow.dailyChallenges = {
        renderCard: renderCard,
        trackAction: trackAction,
        load: load
    };
})();
