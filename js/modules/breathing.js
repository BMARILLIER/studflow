// breathing.js — Respiration guidee multi-techniques
(function() {
    var breathingInterval = null;
    var breathingRunning = false;
    var currentTechnique = '478';

    var TECHNIQUES = {
        '478': {
            name: 'Relaxation 4-7-8',
            description: 'Calme profond. Ideal avant de dormir ou en cas de stress.',
            phases: [
                { name: 'Inspire...', duration: 4 },
                { name: 'Retiens...', duration: 7 },
                { name: 'Expire...', duration: 8 }
            ]
        },
        'box': {
            name: 'Respiration carree',
            description: 'Equilibre et concentration. Utilisee par les militaires.',
            phases: [
                { name: 'Inspire...', duration: 4 },
                { name: 'Retiens...', duration: 4 },
                { name: 'Expire...', duration: 4 },
                { name: 'Retiens...', duration: 4 }
            ]
        },
        'coherence': {
            name: 'Coherence cardiaque',
            description: '5 min pour equilibrer ton systeme nerveux. Anti-stress puissant.',
            phases: [
                { name: 'Inspire...', duration: 5 },
                { name: 'Expire...', duration: 5 }
            ]
        }
    };

    function start() {
        window.StudFlow.app.showScreen('breathing');
        renderSelector();
        updateDisplay();
    }

    function renderSelector() {
        var container = document.getElementById('breathing-techniques');
        if (!container) {
            // Create selector if not existing
            var parent = document.getElementById('breathing-instruction');
            if (!parent) return;
            container = document.createElement('div');
            container.id = 'breathing-techniques';
            container.className = 'breathing-selector';
            parent.parentNode.insertBefore(container, parent);
        }
        var html = '';
        var keys = Object.keys(TECHNIQUES);
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            var t = TECHNIQUES[key];
            var activeClass = key === currentTechnique ? ' active' : '';
            html += '<button class="' + activeClass + '" data-action="breathing.selectTechnique" data-param="' + key + '">'
                + t.name + '</button>';
        }
        container.innerHTML = html;

        // Show description
        var descEl = document.getElementById('breathing-description');
        if (!descEl) {
            descEl = document.createElement('p');
            descEl.id = 'breathing-description';
            descEl.style.cssText = 'text-align:center;font-size:0.8rem;color:rgba(255,255,255,0.5);margin-bottom:12px;';
            container.parentNode.insertBefore(descEl, container.nextSibling);
        }
        descEl.textContent = TECHNIQUES[currentTechnique].description;
    }

    function selectTechnique(key) {
        if (breathingRunning) stop();
        currentTechnique = key;
        renderSelector();
        updateDisplay();
    }

    function updateDisplay() {
        var t = TECHNIQUES[currentTechnique];
        var instruction = document.getElementById('breathing-instruction');
        if (instruction) instruction.textContent = t.name;
        var phase = document.getElementById('breathing-phase');
        if (phase) phase.textContent = 'Pret ?';
    }

    function toggle() {
        if (breathingRunning) {
            pause();
        } else {
            resume();
        }
    }

    function resume() {
        breathingRunning = true;
        document.getElementById('breathing-start').textContent = 'Pause';
        var circle = document.getElementById('breathing-circle');
        if (circle) circle.classList.remove('paused');

        var totalSeconds = 0;
        var technique = TECHNIQUES[currentTechnique];
        var phases = technique.phases;
        var phaseIndex = 0;
        var phaseTime = 0;

        breathingInterval = setInterval(function() {
            totalSeconds++;
            phaseTime++;

            var phase = phases[phaseIndex];
            document.getElementById('breathing-phase').textContent = phase.name;
            document.getElementById('breathing-instruction').textContent = phase.name;

            var mins = Math.floor(totalSeconds / 60);
            var secs = totalSeconds % 60;
            document.getElementById('breathing-timer').textContent =
                mins + ':' + (secs < 10 ? '0' : '') + secs;

            if (phaseTime >= phase.duration) {
                phaseTime = 0;
                phaseIndex = (phaseIndex + 1) % phases.length;
            }
        }, 1000);
    }

    function pause() {
        breathingRunning = false;
        document.getElementById('breathing-start').textContent = 'Reprendre';
        var circle = document.getElementById('breathing-circle');
        if (circle) circle.classList.add('paused');
        clearInterval(breathingInterval);
    }

    function stop() {
        if (breathingRunning && window.StudFlow.gamification) {
            window.StudFlow.gamification.addXP('breathing_session');
        }
        breathingRunning = false;
        clearInterval(breathingInterval);
        breathingInterval = null;
        document.getElementById('breathing-timer').textContent = '0:00';
        document.getElementById('breathing-phase').textContent = 'Pret ?';
        updateDisplay();
        document.getElementById('breathing-start').textContent = 'Commencer';
        var circle = document.getElementById('breathing-circle');
        if (circle) circle.classList.add('paused');
    }

    window.StudFlow = window.StudFlow || {};
    window.StudFlow.breathing = { start: start, toggle: toggle, resume: resume, pause: pause, stop: stop, selectTechnique: selectTechnique };
})();
