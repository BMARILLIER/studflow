// tts.js — Text-To-Speech local (speechSynthesis API)
(function() {
    var _voice = null;
    var _isSpeaking = false;
    var _supported = 'speechSynthesis' in window;

    function isSupported() { return _supported; }

    function _pickVoice() {
        if (_voice) return;
        var voices = speechSynthesis.getVoices();
        for (var i = 0; i < voices.length; i++) {
            if (voices[i].lang && voices[i].lang.startsWith('fr')) {
                _voice = voices[i];
                return;
            }
        }
        if (voices.length > 0) _voice = voices[0];
    }

    if (_supported) {
        _pickVoice();
        speechSynthesis.addEventListener('voiceschanged', _pickVoice);
    }

    function _clean(text) {
        if (!text) return '';
        return text
            .replace(/Question\s*:/gi, '')
            .replace(/R[eé]ponse\s*:/gi, '')
            .replace(/En gros\s*:/gi, 'En gros, ')
            .replace(/Mots?\s*difficiles?\s*:/gi, '')
            .replace(/<[^>]+>/g, '')
            .replace(/\n{2,}/g, '. ')
            .replace(/\s{2,}/g, ' ')
            .trim()
            .substring(0, 300);
    }

    function speak(text) {
        if (!_supported || !text) return;
        speechSynthesis.cancel();
        _pickVoice();
        var u = new SpeechSynthesisUtterance(_clean(text));
        if (_voice) u.voice = _voice;
        u.lang = 'fr-FR';
        u.rate = 0.95;
        u.onstart = function() { _isSpeaking = true; };
        u.onend = function() { _isSpeaking = false; };
        u.onerror = function() { _isSpeaking = false; };
        speechSynthesis.speak(u);
    }

    function stop() {
        if (!_supported) return;
        speechSynthesis.cancel();
        _isSpeaking = false;
    }

    function toggle(text) {
        if (_isSpeaking) { stop(); return false; }
        speak(text);
        return true;
    }

    function isSpeaking() { return _isSpeaking; }

    function isAutoEnabled() {
        return localStorage.getItem('studflow_audioAuto') === 'true';
    }

    function setAutoEnabled(val) {
        localStorage.setItem('studflow_audioAuto', val ? 'true' : 'false');
    }

    // Wire settings toggle
    document.addEventListener('change', function(e) {
        if (e.target.id === 'tts-auto-toggle') {
            setAutoEnabled(e.target.checked);
        }
    });
    document.addEventListener('click', function(e) {
        var action = e.target.getAttribute('data-action') || (e.target.closest && e.target.closest('[data-action]') && e.target.closest('[data-action]').getAttribute('data-action'));
        if (action === 'screen:settings') {
            setTimeout(function() {
                var el = document.getElementById('tts-auto-toggle');
                if (el) el.checked = isAutoEnabled();
            }, 50);
        }
    });

    window.StudFlow = window.StudFlow || {};
    window.StudFlow.tts = {
        isSupported: isSupported,
        speak: speak,
        stop: stop,
        toggle: toggle,
        isSpeaking: isSpeaking,
        isAutoEnabled: isAutoEnabled,
        setAutoEnabled: setAutoEnabled
    };
})();
