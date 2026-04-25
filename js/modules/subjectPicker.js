// subjectPicker.js — Choix des specialites Bac General / Matieres Brevet
(function() {

    var STORAGE_KEY = 'specialties';

    // ==================== BAC CONFIG ====================
    var TRONC_COMMUN = ['philo', 'histgeo', 'anglais'];

    var SPECIALTIES = [
        { id: 'maths', name: 'Mathematiques', icon: '\uD83D\uDCD0' },
        { id: 'physique', name: 'Physique-Chimie', icon: '\u26A1' },
        { id: 'svt', name: 'SVT', icon: '\uD83E\uDDEC' },
        { id: 'ses', name: 'SES', icon: '\uD83D\uDCCA' }
    ];

    var MAX_SPECIALTIES = 2;

    // ==================== BREVET CONFIG ====================
    var BREVET_SUBJECTS = [
        'brevet_francais', 'brevet_maths', 'brevet_histgeo',
        'brevet_sciences', 'brevet_emc'
    ];

    function getExamLevel() {
        if (window.StudFlow.subjects && window.StudFlow.subjects.getExamLevel) {
            return window.StudFlow.subjects.getExamLevel();
        }
        var profile = window.StudFlow.storage ? window.StudFlow.storage.getUserProfile() : null;
        if (profile && profile.identity && profile.identity.class === '3eme') return 'brevet';
        return 'bac';
    }

    // ==================== PERSISTENCE ====================
    function loadData() {
        return window.StudFlow.storage.loadData(STORAGE_KEY, {
            specialties: [],
            completedPicker: false
        });
    }

    function save(specialties) {
        if (!specialties || !Array.isArray(specialties)) return;
        window.StudFlow.storage.saveData(STORAGE_KEY, {
            specialties: specialties,
            completedPicker: true
        });
    }

    function isCompleted() {
        var data = loadData();
        return data.completedPicker === true;
    }

    function getSpecialties() {
        var data = loadData();
        return data.specialties || [];
    }

    function getTroncCommun() {
        if (getExamLevel() === 'brevet') return BREVET_SUBJECTS.slice();
        return TRONC_COMMUN.slice();
    }

    function getAllUserSubjects() {
        if (getExamLevel() === 'brevet') return BREVET_SUBJECTS.slice();
        return TRONC_COMMUN.concat(getSpecialties());
    }

    function isSubjectActive(subjectId) {
        // Brevet: all brevet subjects are always active
        if (getExamLevel() === 'brevet') {
            return BREVET_SUBJECTS.indexOf(subjectId) !== -1;
        }
        // Bac francais is always available
        if (subjectId === 'francais') return true;
        // If picker not completed, all subjects are active
        if (!isCompleted()) return true;
        // Tronc commun always active
        if (TRONC_COMMUN.indexOf(subjectId) !== -1) return true;
        // Check specialties
        var specs = getSpecialties();
        return specs.indexOf(subjectId) !== -1;
    }

    // ==================== UI ====================
    function show() {
        // Brevet: no specialty picker needed, auto-complete and go to dashboard
        if (getExamLevel() === 'brevet') {
            if (!isCompleted()) {
                save([]);
            }
            window.StudFlow.app.showScreen('dashboard');
            if (window.StudFlow.app.updateDashboard) window.StudFlow.app.updateDashboard();
            return;
        }
        window.StudFlow.app.showScreen('subject-picker');
        render();
    }

    function render() {
        var container = document.getElementById('subject-picker-content');
        if (!container) return;

        var current = getSpecialties();

        var html = '<div class="sp-container">'
            + '<button class="back-btn" data-action="screen:dashboard">\u2190 Retour</button>'
            + '<div class="sp-header">'
            + '<div class="sp-header-icon">\uD83C\uDF93</div>'
            + '<h2 class="sp-title">Tes specialites</h2>'
            + '<p class="sp-subtitle">Choisis tes 2 specialites de Terminale :</p>'
            + '</div>'
            + '<div class="sp-warning" id="sp-warning" style="display:none;"></div>'
            + '<div class="sp-options">';

        for (var i = 0; i < SPECIALTIES.length; i++) {
            var spec = SPECIALTIES[i];
            var checked = current.indexOf(spec.id) !== -1;
            var checkedClass = checked ? ' sp-option-checked' : '';
            html += '<div class="sp-option' + checkedClass + '" data-action="subjectPicker.toggle" data-param="' + spec.id + '">'
                + '<div class="sp-checkbox">' + (checked ? '\u2713' : '') + '</div>'
                + '<span class="sp-option-icon">' + spec.icon + '</span>'
                + '<span class="sp-option-name">' + spec.name + '</span>'
                + '</div>';
        }

        html += '</div>';

        // Tronc commun (info only)
        html += '<div class="sp-tronc">'
            + '<p class="sp-tronc-label">Tronc commun (inclus automatiquement) :</p>'
            + '<p class="sp-tronc-list">\uD83D\uDCDC Philosophie \u00B7 \uD83C\uDF0D Histoire-Geo \u00B7 \uD83C\uDDEC\uD83C\uDDE7 Anglais</p>'
            + '</div>';

        // Validate button
        html += '<button class="sp-validate" id="sp-validate" data-action="subjectPicker.validate">Valider</button>'
            + '</div>';

        container.innerHTML = html;
    }

    function toggle(specId) {
        var current = getSpecialties();
        var idx = current.indexOf(specId);
        var warning = document.getElementById('sp-warning');

        if (idx !== -1) {
            // Uncheck
            current.splice(idx, 1);
        } else {
            // Check — enforce max 2
            if (current.length >= MAX_SPECIALTIES) {
                if (warning) {
                    warning.textContent = 'Tu ne peux choisir que 2 specialites maximum. Decoche-en une d\'abord.';
                    warning.style.display = 'block';
                }
                return;
            }
            current.push(specId);
        }

        // Hide warning if visible
        if (warning) warning.style.display = 'none';

        // Save temp selection (not completed yet) and re-render
        window.StudFlow.storage.saveData(STORAGE_KEY, {
            specialties: current,
            completedPicker: loadData().completedPicker
        });

        render();
    }

    function validate() {
        var current = getSpecialties();
        var warning = document.getElementById('sp-warning');

        if (current.length < 1) {
            if (warning) {
                warning.textContent = 'Choisis au moins 1 specialite pour continuer.';
                warning.style.display = 'block';
            }
            return;
        }

        // Save as completed
        save(current);

        // Toast
        if (window.StudFlow.gamification && window.StudFlow.gamification.showToast) {
            window.StudFlow.gamification.showToast('Specialites enregistrees !', 'xp', '\uD83C\uDF93');
        }

        // Go to dashboard
        window.StudFlow.app.showScreen('dashboard');
        if (window.StudFlow.app.updateDashboard) {
            window.StudFlow.app.updateDashboard();
        }
    }

    // ==================== DASHBOARD CTA ====================
    function renderDashboardCTA() {
        if (isCompleted()) return '';
        // Brevet users don't need specialty picker
        if (getExamLevel() === 'brevet') return '';
        return '<div class="dash-section dash-diag-cta" data-action="screen:subject-picker">'
            + '<div class="dash-diag-content">'
            + '<div class="dash-diag-icon">\uD83C\uDF93</div>'
            + '<div class="dash-diag-text">'
            + '<h3 class="dash-diag-title">Choisis tes specialites</h3>'
            + '<p class="dash-diag-sub">Pour ne voir que tes matieres</p>'
            + '</div>'
            + '</div>'
            + '<span class="dash-diag-arrow">\u2192</span>'
            + '</div>';
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.subjectPicker = {
        show: show,
        getSpecialties: getSpecialties,
        getTroncCommun: getTroncCommun,
        getAllUserSubjects: getAllUserSubjects,
        isSubjectActive: isSubjectActive,
        isCompleted: isCompleted,
        save: save,
        toggle: toggle,
        validate: validate,
        renderDashboardCTA: renderDashboardCTA
    };

})();
