// leaderboard.js — Friends-only weekly leaderboard (no public/global ranking).
// Each user has a 6-char friend_code (lazily generated server-side). Friends
// are added by code; ranking shows only me + my friends for the current week
// (reset Monday 00:00 Europe/Paris).
(function() {
    'use strict';

    var LS_WEEK_XP    = 'studflow_lb_week_xp';
    var LS_WEEK_START = 'studflow_lb_week_start';
    var LS_PSEUDO     = 'studflow_lb_pseudo';
    var LS_MY_CODE    = 'studflow_lb_my_code';
    var SUBMIT_DEBOUNCE_MS = 3000;

    var _submitTimer = null;

    // Monday 00:00 in Europe/Paris, as YYYY-MM-DD. Matches SQL lb_current_week().
    function parisWeekStart() {
        var parisNow = new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Paris' }));
        var day = parisNow.getDay();
        var diff = (day === 0 ? -6 : 1 - day);
        parisNow.setDate(parisNow.getDate() + diff);
        parisNow.setHours(0, 0, 0, 0);
        var y = parisNow.getFullYear();
        var m = String(parisNow.getMonth() + 1).padStart(2, '0');
        var d = String(parisNow.getDate()).padStart(2, '0');
        return y + '-' + m + '-' + d;
    }

    function getWeekXP() {
        var cur = parisWeekStart();
        var stored = localStorage.getItem(LS_WEEK_START);
        if (stored !== cur) {
            localStorage.setItem(LS_WEEK_START, cur);
            localStorage.setItem(LS_WEEK_XP, '0');
            return 0;
        }
        var n = parseInt(localStorage.getItem(LS_WEEK_XP) || '0', 10);
        return isNaN(n) ? 0 : n;
    }

    function addWeekXP(amount) {
        if (!amount || amount < 0) return;
        localStorage.setItem(LS_WEEK_XP, String(getWeekXP() + amount));
        scheduleSubmit();
    }

    function getPseudo() {
        try { return localStorage.getItem(LS_PSEUDO) || ''; } catch (e) { return ''; }
    }
    function setPseudo(p) {
        p = (p || '').trim().slice(0, 24);
        if (!p) return false;
        localStorage.setItem(LS_PSEUDO, p);
        submitNow();
        return true;
    }

    function getEmail() {
        try { return localStorage.getItem('studflow_beta_email'); } catch (e) { return null; }
    }

    function getTrack() {
        try {
            var p = window.StudFlow.storage.getUserProfile() || {};
            var t = p.identity && p.identity.examLevel;
            return (t === 'bac' || t === 'brevet') ? t : null;
        } catch (e) { return null; }
    }

    function getClient() {
        return (window.StudFlow && window.StudFlow.sb && window.StudFlow.sb.getClient)
            ? window.StudFlow.sb.getClient() : null;
    }

    // ==================== SYNC XP ====================

    function submitNow() {
        var sb = getClient();
        var email = getEmail();
        var pseudo = getPseudo();
        var track = getTrack();
        if (!sb || !email || !pseudo || !track) return Promise.resolve(false);
        return sb.rpc('leaderboard_submit', {
            p_email: email, p_pseudo: pseudo, p_xp: getWeekXP(), p_track: track
        }).then(function(r) {
            if (r.error) { console.warn('[lb] submit:', r.error.message); return false; }
            return !!(r.data && r.data.ok);
        }).catch(function(e) { console.warn('[lb] submit throw:', e); return false; });
    }

    function scheduleSubmit() {
        if (_submitTimer) clearTimeout(_submitTimer);
        _submitTimer = setTimeout(submitNow, SUBMIT_DEBOUNCE_MS);
    }

    // ==================== FRIEND CODE ====================

    function getCachedCode() {
        try { return localStorage.getItem(LS_MY_CODE) || ''; } catch (e) { return ''; }
    }

    function fetchMyCode() {
        var cached = getCachedCode();
        if (cached) return Promise.resolve(cached);
        var sb = getClient(); var email = getEmail();
        if (!sb || !email) return Promise.resolve('');
        return sb.rpc('friend_code_get', { p_email: email }).then(function(r) {
            if (r.error || !r.data || !r.data.ok) {
                console.warn('[lb] code:', r.error && r.error.message);
                return '';
            }
            var code = r.data.friend_code || '';
            if (code) { try { localStorage.setItem(LS_MY_CODE, code); } catch (e) {} }
            return code;
        }).catch(function() { return ''; });
    }

    function addFriend(code) {
        var sb = getClient(); var email = getEmail();
        if (!sb || !email) return Promise.resolve({ ok: false, code: 'offline' });
        var norm = (code || '').trim().toUpperCase();
        if (!/^[A-Z0-9]{6}$/.test(norm)) return Promise.resolve({ ok: false, code: 'invalid_input' });
        return sb.rpc('friend_add', { p_email: email, p_code: norm }).then(function(r) {
            if (r.error) return { ok: false, code: 'network' };
            return r.data || { ok: false };
        }).catch(function() { return { ok: false, code: 'network' }; });
    }

    function removeFriend(friendCode) {
        var sb = getClient(); var email = getEmail();
        if (!sb || !email) return Promise.resolve(false);
        return sb.rpc('friend_remove', { p_email: email, p_friend_code: friendCode }).then(function(r) {
            return !!(r.data && r.data.ok);
        }).catch(function() { return false; });
    }

    function listFriends() {
        var sb = getClient(); var email = getEmail();
        if (!sb || !email) return Promise.resolve([]);
        return sb.rpc('friends_list', { p_email: email }).then(function(r) {
            if (r.error || !r.data || !r.data.ok) return [];
            return r.data.friends || [];
        }).catch(function() { return []; });
    }

    function fetchFriendsLeaderboard() {
        var sb = getClient(); var email = getEmail();
        if (!sb || !email) return Promise.resolve([]);
        return sb.rpc('leaderboard_friends', { p_email: email }).then(function(r) {
            if (r.error || !r.data || !r.data.ok) return [];
            return r.data.rows || [];
        }).catch(function() { return []; });
    }

    // ==================== UI ====================

    function promptPseudo() {
        var cur = getPseudo();
        var p = window.prompt('Choisis ton pseudo (visible par tes amis, 24 caracteres max) :', cur || '');
        if (p === null) return false;
        if (!setPseudo(p)) { alert('Pseudo invalide.'); return false; }
        return true;
    }

    function copyToClipboard(text) {
        try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                return navigator.clipboard.writeText(text);
            }
        } catch (e) {}
        // Fallback
        var ta = document.createElement('textarea');
        ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
        document.body.appendChild(ta); ta.select();
        try { document.execCommand('copy'); } catch (e) {}
        document.body.removeChild(ta);
        return Promise.resolve();
    }

    function toast(msg) {
        if (window.StudFlow && window.StudFlow.gamification && window.StudFlow.gamification.showToast) {
            window.StudFlow.gamification.showToast(msg, 'info', '✅');
        } else {
            console.log('[lb]', msg);
        }
    }

    function escapeHtml(s) {
        return String(s || '').replace(/[&<>"']/g, function(c) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
        });
    }

    function medalFor(rank) {
        return rank === 0 ? '🥇' : rank === 1 ? '🥈' : rank === 2 ? '🥉' : (rank + 1) + '.';
    }

    function trackBadge(track) {
        if (track === 'bac')    return '<span style="font-size:0.7rem;color:var(--text-muted);padding:2px 6px;border-radius:6px;background:rgba(255,255,255,0.06);">Bac</span>';
        if (track === 'brevet') return '<span style="font-size:0.7rem;color:var(--text-muted);padding:2px 6px;border-radius:6px;background:rgba(255,255,255,0.06);">Brevet</span>';
        return '';
    }

    function render() {
        var root = document.getElementById('leaderboard-content');
        if (!root) return;

        var pseudo = getPseudo();
        var weekXP = getWeekXP();
        var track  = getTrack();

        root.innerHTML =
            '<button class="back-btn" data-action="screen:dashboard">&larr; Retour</button>' +
            '<div style="max-width:640px;margin:0 auto;padding:1rem 1.25rem;">' +
              '<h1 style="font-family:\'Fraunces\',serif;margin:0 0 0.25rem;">🏆 Classement entre amis</h1>' +
              '<p style="color:var(--text-muted);margin:0 0 1.25rem;font-size:0.9rem;">Remise a zero le lundi 00h (Paris). Ton XP cette semaine : <strong>' + weekXP + '</strong>' + (track ? '' : ' &mdash; <em>choisis ton examen pour apparaitre</em>') + '</p>' +

              // My code card
              '<div style="background:var(--bg-glass);border:1px solid rgba(56,189,248,0.3);border-radius:14px;padding:1rem;margin-bottom:0.75rem;">' +
                '<div style="font-size:0.8rem;color:var(--text-muted);margin-bottom:0.25rem;">Ton code ami</div>' +
                '<div style="display:flex;align-items:center;gap:0.5rem;">' +
                  '<div id="lb-my-code" style="font-family:monospace;font-size:1.6rem;font-weight:700;letter-spacing:0.2em;flex:1;">······</div>' +
                  '<button id="lb-copy-code" class="new-course-btn secondary" style="padding:0.5rem 0.9rem;font-size:0.85rem;">📋 Copier</button>' +
                '</div>' +
                '<div style="font-size:0.8rem;color:var(--text-muted);margin-top:0.35rem;">Partage-le pour inviter tes amis.</div>' +
              '</div>' +

              // Add friend form
              '<div style="display:flex;gap:0.5rem;margin-bottom:1.25rem;">' +
                '<input id="lb-add-input" type="text" placeholder="Code ami (6 car.)" maxlength="6" autocapitalize="characters" autocomplete="off" spellcheck="false" style="flex:1;padding:0.7rem;border-radius:10px;border:1px solid rgba(255,255,255,0.12);background:var(--bg-glass);color:inherit;text-transform:uppercase;letter-spacing:0.15em;font-family:monospace;font-size:1rem;" />' +
                '<button id="lb-add-btn" class="new-course-btn" style="padding:0.7rem 1.1rem;">Ajouter</button>' +
              '</div>' +

              // Pseudo
              '<div style="margin-bottom:1rem;">' +
                '<button id="lb-pseudo" class="new-course-btn secondary" style="padding:0.55rem 1rem;font-size:0.9rem;">✎ ' + (pseudo ? 'Pseudo : ' + escapeHtml(pseudo) : 'Choisir un pseudo') + '</button>' +
              '</div>' +

              // Leaderboard
              '<h2 style="font-size:1rem;margin:1.25rem 0 0.5rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.05em;">Cette semaine</h2>' +
              '<div id="lb-list" style="display:flex;flex-direction:column;gap:0.5rem;">' +
                '<p style="color:var(--text-muted);text-align:center;padding:1.5rem;">Chargement...</p>' +
              '</div>' +

              // Manage friends toggle
              '<details style="margin-top:1.5rem;">' +
                '<summary style="cursor:pointer;color:var(--text-muted);font-size:0.9rem;padding:0.5rem 0;">Gerer mes amis</summary>' +
                '<div id="lb-manage" style="margin-top:0.5rem;display:flex;flex-direction:column;gap:0.4rem;"></div>' +
              '</details>' +
            '</div>';

        // --- My code ---
        fetchMyCode().then(function(code) {
            var el = document.getElementById('lb-my-code');
            if (el) el.textContent = code || '——————';
        });
        document.getElementById('lb-copy-code').onclick = function() {
            var code = getCachedCode();
            if (!code) { toast('Code pas encore pret, reessaie dans un instant.'); return; }
            copyToClipboard(code);
            toast('Code copie !');
        };

        // --- Add friend ---
        var input = document.getElementById('lb-add-input');
        var addBtn = document.getElementById('lb-add-btn');
        function doAdd() {
            var v = (input.value || '').trim().toUpperCase();
            if (!v) return;
            addBtn.disabled = true;
            addFriend(v).then(function(res) {
                addBtn.disabled = false;
                if (res.ok) {
                    input.value = '';
                    toast('Ami ajoute 🎉');
                    renderList(); renderManage();
                } else {
                    var msg = 'Impossible d\'ajouter cet ami.';
                    if (res.code === 'unknown_code')   msg = 'Code inconnu.';
                    else if (res.code === 'self')      msg = 'C\'est ton propre code 😊';
                    else if (res.code === 'invalid_input') msg = 'Le code doit faire 6 caracteres (lettres/chiffres).';
                    alert(msg);
                }
            });
        }
        addBtn.onclick = doAdd;
        input.addEventListener('keydown', function(e) { if (e.key === 'Enter') doAdd(); });

        // --- Pseudo ---
        document.getElementById('lb-pseudo').onclick = function() {
            if (promptPseudo()) render();
        };

        // --- Leaderboard list ---
        renderList();
        renderManage();
    }

    function renderList() {
        var list = document.getElementById('lb-list');
        if (!list) return;
        var myPseudo = getPseudo();
        fetchFriendsLeaderboard().then(function(rows) {
            if (!rows.length) {
                list.innerHTML =
                    '<div style="text-align:center;padding:1.5rem;background:var(--bg-glass);border-radius:12px;border:1px dashed rgba(255,255,255,0.12);">' +
                      '<p style="margin:0 0 0.5rem;">Pas encore de classement cette semaine.</p>' +
                      '<p style="margin:0;color:var(--text-muted);font-size:0.85rem;">Fais une session pour apparaitre, ou invite un ami avec ton code.</p>' +
                    '</div>';
                return;
            }
            var html = '';
            for (var i = 0; i < rows.length; i++) {
                var r = rows[i];
                var isMe = !!r.is_me;
                html +=
                    '<div style="display:flex;align-items:center;gap:0.75rem;padding:0.75rem 1rem;border-radius:12px;background:' + (isMe ? 'rgba(56,189,248,0.15)' : 'var(--bg-glass)') + ';border:1px solid ' + (isMe ? '#38bdf8' : 'rgba(255,255,255,0.08)') + ';">' +
                      '<span style="font-size:1.2rem;min-width:2.2rem;text-align:center;">' + medalFor(i) + '</span>' +
                      '<span style="flex:1;font-weight:600;">' + escapeHtml(r.pseudo || '—') + (isMe ? ' <span style="color:#38bdf8;font-size:0.8rem;">(toi)</span>' : '') + '</span>' +
                      trackBadge(r.track) +
                      '<span style="font-weight:700;color:#fbbf24;min-width:4rem;text-align:right;">' + (r.xp || 0) + ' XP</span>' +
                    '</div>';
            }
            list.innerHTML = html;
        });
    }

    function renderManage() {
        var box = document.getElementById('lb-manage');
        if (!box) return;
        listFriends().then(function(friends) {
            if (!friends.length) {
                box.innerHTML = '<p style="color:var(--text-muted);font-size:0.85rem;margin:0.5rem 0;">Tu n\'as pas encore d\'amis ajoutes.</p>';
                return;
            }
            var html = '';
            for (var i = 0; i < friends.length; i++) {
                var f = friends[i];
                html +=
                    '<div style="display:flex;align-items:center;gap:0.5rem;padding:0.5rem 0.75rem;border-radius:10px;background:var(--bg-glass);">' +
                      '<span style="flex:1;">' + escapeHtml(f.pseudo || '(sans pseudo)') + ' <span style="color:var(--text-muted);font-family:monospace;font-size:0.8rem;">' + escapeHtml(f.friend_code) + '</span></span>' +
                      '<button data-remove="' + escapeHtml(f.friend_code) + '" style="background:none;border:1px solid rgba(255,255,255,0.15);color:var(--text-muted);padding:0.3rem 0.6rem;border-radius:8px;cursor:pointer;font-size:0.8rem;">Retirer</button>' +
                    '</div>';
            }
            box.innerHTML = html;
            var btns = box.querySelectorAll('button[data-remove]');
            for (var j = 0; j < btns.length; j++) {
                btns[j].addEventListener('click', function(e) {
                    var code = e.currentTarget.getAttribute('data-remove');
                    if (!code) return;
                    if (!confirm('Retirer cet ami ?')) return;
                    removeFriend(code).then(function(ok) {
                        if (ok) { toast('Ami retire.'); renderList(); renderManage(); }
                    });
                });
            }
        });
    }

    // ==================== HOOK XP GAINS ====================

    function initHooks() {
        getWeekXP(); // roll over counter if week changed

        if (window.StudFlow && window.StudFlow.events && window.StudFlow.events.on) {
            window.StudFlow.events.on('xp:gained', function(data) {
                if (data && typeof data.amount === 'number') addWeekXP(data.amount);
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initHooks);
    } else {
        initHooks();
    }

    window.StudFlow = window.StudFlow || {};
    window.StudFlow.leaderboard = {
        render: render,
        submit: submitNow,
        getWeekXP: getWeekXP,
        getPseudo: getPseudo,
        setPseudo: setPseudo,
        promptPseudo: promptPseudo,
        fetchMyCode: fetchMyCode,
        addFriend: addFriend,
        removeFriend: removeFriend,
        listFriends: listFriends,
        fetchFriends: fetchFriendsLeaderboard
    };
})();
