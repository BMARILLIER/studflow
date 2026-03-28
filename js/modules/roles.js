// roles.js — Role management (admin vs student)
// Role is determined by email, stored in memory only (not localStorage)
(function() {
    'use strict';

    // Admin role is determined server-side via the admins table.
    // computeRole calls RPC is_admin() to check — no hardcoded emails.

    var _role = null; // 'admin' | 'student' | null
    var _realRole = null; // stores true role when previewing as student
    var _previewMode = false;
    var _listeners = [];
    var _adminCheckDone = false;

    function computeRole(user) {
        var prev = _role;
        if (!user || !user.email) {
            _role = null;
            _adminCheckDone = false;
            applyRoleClasses();
            notifyListeners(prev);
            return _role;
        }

        // Default to student immediately (avoids flash of wrong role)
        _role = 'student';
        applyRoleClasses();

        // Check admin status via server RPC (async, non-blocking)
        if (!_adminCheckDone) {
            checkAdminServer(user.id).then(function(isAdmin) {
                _adminCheckDone = true;
                var prevAsync = _role;
                _role = isAdmin ? 'admin' : 'student';
                applyRoleClasses();
                if (_role !== prevAsync) notifyListeners(prevAsync);
            }).catch(function() {
                // On error, stay as student
                _adminCheckDone = true;
            });
        }

        if (_role !== prev) notifyListeners(prev);
        return _role;
    }

    function checkAdminServer(userId) {
        var sb = window.StudFlow.sb;
        if (!sb || !sb.isAvailable()) return Promise.resolve(false);
        var client = sb.getClient();
        if (!client) return Promise.resolve(false);
        return sb.withTimeout(
            client.rpc('is_admin').then(function(res) {
                if (res.error) return false;
                return res.data === true;
            })
        ).catch(function() { return false; });
    }

    function applyRoleClasses() {
        document.body.classList.toggle('is-admin', _role === 'admin');
        document.body.classList.toggle('is-student', _role === 'student');
    }

    function notifyListeners(prev) {
        for (var i = 0; i < _listeners.length; i++) {
            try { _listeners[i](_role, prev); } catch(e) {}
        }
    }

    function getRole() { return _role; }
    function getRealRole() { return _realRole || _role; }
    function isAdmin() { return _role === 'admin'; }
    function isRealAdmin() { return (_realRole || _role) === 'admin'; }
    function isStudent() { return _role === 'student'; }
    function isPreviewMode() { return _previewMode; }

    function toggleStudentPreview() {
        if (!isRealAdmin()) return;
        if (_previewMode) {
            // Exit preview — restore admin role
            _previewMode = false;
            _role = _realRole;
            _realRole = null;
            document.body.classList.add('is-admin');
            document.body.classList.remove('is-student', 'is-student-preview');
            removePreviewBanner();
            for (var i = 0; i < _listeners.length; i++) {
                try { _listeners[i](_role, 'student'); } catch(e) {}
            }
        } else {
            // Enter preview — fake student role
            _realRole = _role;
            _role = 'student';
            _previewMode = true;
            document.body.classList.remove('is-admin');
            document.body.classList.add('is-student', 'is-student-preview');
            showPreviewBanner();
            for (var i = 0; i < _listeners.length; i++) {
                try { _listeners[i](_role, 'admin'); } catch(e) {}
            }
        }
    }

    function showPreviewBanner() {
        if (document.getElementById('student-preview-banner')) return;
        var banner = document.createElement('div');
        banner.id = 'student-preview-banner';
        banner.innerHTML = '👁️ Vision etudiant — <button id="exit-preview-btn">Revenir admin</button>';
        document.body.appendChild(banner);
        document.getElementById('exit-preview-btn').addEventListener('click', function() {
            toggleStudentPreview();
            StudFlow.app.showScreen('admin');
        });
    }

    function removePreviewBanner() {
        var banner = document.getElementById('student-preview-banner');
        if (banner) banner.remove();
    }

    function onRoleChange(cb) {
        if (typeof cb === 'function') _listeners.push(cb);
    }

    function init() {
        // Redirect to admin dashboard when admin role is confirmed (async)
        onRoleChange(function(newRole) {
            if (newRole === 'admin' && StudFlow.app) {
                StudFlow.app.showScreen('admin');
            }
        });

        // Compute role from current auth user
        if (StudFlow.auth && StudFlow.auth.getUser()) {
            computeRole(StudFlow.auth.getUser());
        }
    }

    window.StudFlow = window.StudFlow || {};
    window.StudFlow.roles = {
        computeRole: computeRole,
        getRole: getRole,
        getRealRole: getRealRole,
        isAdmin: isAdmin,
        isRealAdmin: isRealAdmin,
        isStudent: isStudent,
        isPreviewMode: isPreviewMode,
        toggleStudentPreview: toggleStudentPreview,
        onRoleChange: onRoleChange,
        init: init
    };
})();
