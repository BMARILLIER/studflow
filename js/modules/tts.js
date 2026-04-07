// tts.js — Text-To-Speech local (speechSynthesis API)
(function() {
    var _voice = null;
    var _isSpeaking = false;
    var _supported = 'speechSynthesis' in window;
    var _lastTextSpoken = '';
    var _debounceTimer = null;

    // audioMode: "off" | "manual" | "auto"
    var _STORAGE_KEY = 'studflow_audioMode';

    function getAudioMode() {
        return localStorage.getItem(_STORAGE_KEY) || 'manual';
    }

    function setAudioMode(mode) {
        if (mode !== 'off' && mode !== 'manual' && mode !== 'auto') return;
        localStorage.setItem(_STORAGE_KEY, mode);
        if (mode === 'off') stop();
    }

    // Backward compat: map old isAutoEnabled to new audioMode
    function isAutoEnabled() { return getAudioMode() === 'auto'; }
    function setAutoEnabled(val) { setAudioMode(val ? 'auto' : 'manual'); }

    function isSupported() { return _supported; }

    var _voiceEN = null;

    function _pickVoice() {
        var voices = speechSynthesis.getVoices();
        var best = null;
        var bestScore = -1;
        var bestEN = null;
        var bestENScore = -1;
        for (var i = 0; i < voices.length; i++) {
            var v = voices[i];
            if (!v.lang) continue;
            var s = 1;
            if (v.localService === false) s += 3;
            if (/premium|enhanced|natural/i.test(v.name)) s += 4;
            if (v.lang.startsWith('fr')) {
                if (v.lang === 'fr-FR') s += 2;
                if (s > bestScore) { bestScore = s; best = v; }
            }
            if (v.lang.startsWith('en')) {
                if (v.lang === 'en-US' || v.lang === 'en-GB') s += 2;
                if (s > bestENScore) { bestENScore = s; bestEN = v; }
            }
        }
        if (best) _voice = best;
        else if (!_voice && voices.length > 0) _voice = voices[0];
        if (bestEN) _voiceEN = bestEN;
    }

    function _detectLang(text) {
        if (!text) return 'fr';
        // Common English words / patterns
        var en = (text.match(/\b(the|is|are|was|were|have|has|been|will|would|could|should|this|that|with|from|they|their|which|about|into|because|however|therefore|although|whether|through|between|without|before|after|during|since|while|often|always|never|usually|sometimes|already|also|very|much|many|more|most|other|another|each|every|both|either|neither)\b/gi) || []).length;
        var fr = (text.match(/\b(les|des|une|est|sont|dans|pour|avec|sur|par|mais|pas|que|qui|cette|tout|nous|vous|leur|aussi|peut|fait|entre|comme|plus|bien|meme|autre|quand|encore|alors|donc|tres|etre|avoir|faire|dire|aller|voir|sans|chez|vers|selon|depuis|pendant|avant|apres|toujours|jamais|souvent|deja|parce|cependant|toutefois)\b/gi) || []).length;
        return en > fr ? 'en' : 'fr';
    }

    if (_supported) {
        _pickVoice();
        speechSynthesis.addEventListener('voiceschanged', _pickVoice);
    }

    // Migrate old localStorage key → new audioMode
    (function _migrate() {
        var old = localStorage.getItem('studflow_audioAuto');
        if (old !== null && !localStorage.getItem(_STORAGE_KEY)) {
            setAudioMode(old === 'true' ? 'auto' : 'manual');
            localStorage.removeItem('studflow_audioAuto');
        }
    })();

    function cleanText(text) {
        if (!text) return '';
        var t = text
            .replace(/Question\s*:/gi, '')
            .replace(/R[eé]ponse\s*:/gi, '')
            .replace(/Explication\s*:/gi, '')
            .replace(/En gros\s*:/gi, 'En gros, ')
            .replace(/Mots?\s*difficiles?\s*:/gi, '')
            .replace(/<[^>]+>/g, '')
            .replace(/\n+/g, '. ')
            .replace(/\s{2,}/g, ' ')
            .trim();
        var sentences = t.split(/(?<=[.!?])\s+/);
        var seen = {};
        var unique = [];
        for (var i = 0; i < sentences.length; i++) {
            var key = sentences[i].toLowerCase().trim();
            if (key && !seen[key]) { seen[key] = true; unique.push(sentences[i]); }
        }
        t = unique.join(' ').trim();
        if (t.length > 250) {
            var cut = t.substring(0, 250);
            var lastDot = Math.max(cut.lastIndexOf('.'), cut.lastIndexOf('!'), cut.lastIndexOf('?'));
            t = lastDot > 50 ? cut.substring(0, lastDot + 1) : cut;
        }
        return t;
    }

    function formatForSpeech(text) {
        if (!text) return '';
        var t = cleanText(text);
        t = t.replace(/D[ée]finir\s+(.+?)(?:[.?]|$)/gi, "Qu'est-ce que $1 ?");
        t = t.replace(/Donner la d[ée]finition de\s+/gi, "C'est quoi ");
        t = t.replace(/Donner la d[ée]finition d'/gi, "C'est quoi ");
        t = t.replace(/Citer\s+les\s+/gi, 'Quels sont les ');
        t = t.replace(/Citer\s+/gi, 'Quels sont ');
        t = t.replace(/Expliquer\s+pourquoi\s+/gi, 'Pourquoi ');
        t = t.replace(/Expliquer\s+comment\s+/gi, 'Comment ');
        t = t.replace(/Expliquer\s+/gi, "C'est quoi ");
        t = t.replace(/Nommer\s+/gi, 'Quels sont ');
        t = t.replace(/Pr[ée]ciser\s+/gi, "C'est quoi ");
        t = t.replace(/\s{2,}/g, ' ').trim();
        if (t.length > 200) {
            var cut = t.substring(0, 200);
            var lastDot = Math.max(cut.lastIndexOf('.'), cut.lastIndexOf('!'), cut.lastIndexOf('?'));
            t = lastDot > 50 ? cut.substring(0, lastDot + 1) : cut;
        }
        return t;
    }

    function _setSpeaking(val) {
        _isSpeaking = val;
        document.dispatchEvent(new CustomEvent('studflow:tts', { detail: { speaking: val } }));
    }

    function _doSpeak(text) {
        speechSynthesis.cancel();
        _pickVoice();
        var lang = _detectLang(text);
        var formatted = lang === 'fr' ? formatForSpeech(text) : cleanText(text);
        _lastTextSpoken = formatted;
        var u = new SpeechSynthesisUtterance(formatted);
        if (lang === 'en' && _voiceEN) {
            u.voice = _voiceEN;
            u.lang = 'en-US';
        } else {
            if (_voice) u.voice = _voice;
            u.lang = 'fr-FR';
        }
        u.rate = 0.85;
        u.pitch = 1;
        u.onstart = function() { _setSpeaking(true); };
        u.onend = function() { _setSpeaking(false); };
        u.onerror = function() { _setSpeaking(false); };
        speechSynthesis.speak(u);
    }

    function speak(text) {
        if (!_supported || !text) return;
        // Skip if same text already spoken and still speaking
        var formatted = formatForSpeech(text);
        if (formatted === _lastTextSpoken && _isSpeaking) return;
        // Debounce: cancel pending, wait 300ms
        if (_debounceTimer) clearTimeout(_debounceTimer);
        _debounceTimer = setTimeout(function() {
            _debounceTimer = null;
            _doSpeak(text);
        }, 300);
    }

    function stop() {
        if (!_supported) return;
        if (_debounceTimer) { clearTimeout(_debounceTimer); _debounceTimer = null; }
        speechSynthesis.cancel();
        _setSpeaking(false);
    }

    function toggle(text) {
        if (_isSpeaking) { stop(); return false; }
        speak(text);
        return true;
    }

    function isSpeaking() { return _isSpeaking; }

    // Wire settings toggle (backward compat + new audioMode)
    document.addEventListener('change', function(e) {
        if (e.target.id === 'tts-auto-toggle') {
            setAudioMode(e.target.checked ? 'auto' : 'manual');
        }
        if (e.target.name === 'tts-audio-mode') {
            setAudioMode(e.target.value);
        }
    });
    document.addEventListener('click', function(e) {
        var action = e.target.getAttribute('data-action') || (e.target.closest && e.target.closest('[data-action]') && e.target.closest('[data-action]').getAttribute('data-action'));
        if (action === 'screen:settings') {
            setTimeout(function() {
                // Support old checkbox
                var el = document.getElementById('tts-auto-toggle');
                if (el) el.checked = getAudioMode() === 'auto';
                // Support new radio group
                var radios = document.querySelectorAll('input[name="tts-audio-mode"]');
                radios.forEach(function(r) { r.checked = r.value === getAudioMode(); });
            }, 50);
        }
    });

    window.StudFlow = window.StudFlow || {};
    window.StudFlow.tts = {
        isSupported: isSupported,
        cleanText: cleanText,
        formatForSpeech: formatForSpeech,
        speak: speak,
        stop: stop,
        toggle: toggle,
        isSpeaking: isSpeaking,
        getAudioMode: getAudioMode,
        setAudioMode: setAudioMode,
        isAutoEnabled: isAutoEnabled,
        setAutoEnabled: setAutoEnabled
    };
})();
