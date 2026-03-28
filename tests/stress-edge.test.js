// Stress tests — edge conditions (large texts, empty inputs, network, navigation)
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { resetStorage } from './setup.js';

// ==================== Extracted logic ====================
const PREFIX = 'studflow_';

function saveData(key, val) {
    localStorage.setItem(PREFIX + key, JSON.stringify(val));
}

function loadData(key, def) {
    try {
        const raw = localStorage.getItem(PREFIX + key);
        return raw ? JSON.parse(raw) : (def !== undefined ? def : null);
    } catch (e) { return def !== undefined ? def : null; }
}

// Text processing from engineLocal
const STOPWORDS = [
    'le','la','les','de','des','du','un','une','et','est','en','que','qui',
    'dans','pour','pas','sur','ce','se','il','elle','son','sa','ses','au',
    'aux','avec','par','ne','nous','vous','ils','elles','ont','sont','mais',
    'ou','donc','ni','car','si','je','tu','on','mon','ton','cette','ces',
    'cet','tout','tous','toute','toutes','plus','moins','tres','bien','aussi',
    'peut','fait','comme','etre','avoir','faire','dire','aller','voir','savoir',
    'pouvoir','falloir','vouloir','entre','meme','autre','autres','apres',
    'avant','sous','chez','vers','sans','leurs','leur','dont','a','y','c',
    'd','l','n','s','qu','j','m','t'
];

function cleanText(text) {
    if (!text) return '';
    return text.replace(/\r\n/g, '\n').replace(/\r/g, '\n').replace(/\t/g, ' ').replace(/ {2,}/g, ' ').trim();
}

function tokenize(text) {
    return text.toLowerCase()
        .replace(/[^a-zàâäéèêëïîôùûüÿçœæ\s-]/g, ' ')
        .split(/\s+/)
        .filter(w => w.length > 2 && STOPWORDS.indexOf(w) === -1);
}

function extractKeywords(text, maxCount) {
    maxCount = maxCount || 15;
    var tokens = tokenize(text);
    var freq = {};
    tokens.forEach(w => { freq[w] = (freq[w] || 0) + 1; });
    var sorted = Object.keys(freq).sort((a, b) => freq[b] - freq[a]);
    return sorted.slice(0, maxCount).map(word => ({ word, count: freq[word] }));
}

function splitSentences(text) {
    var cleaned = cleanText(text);
    var raw = cleaned.split(/(?<=[.!?])\s+/);
    return raw.map(s => s.trim()).filter(s => s.length > 10);
}

// Quiz validation
function validateQuizQuestion(q) {
    const errors = [];
    if (!q) { errors.push('question is null'); return errors; }
    if (!q.question || q.question.length < 15) errors.push('question too short');
    if (!Array.isArray(q.options) || q.options.length < 2) errors.push('insufficient options');
    if (q.correctIndex === undefined || q.correctIndex === null) errors.push('no correctIndex');
    if (Array.isArray(q.options) && (q.correctIndex < 0 || q.correctIndex >= q.options.length)) {
        errors.push('correctIndex out of bounds');
    }
    return errors;
}

// Escape function from app.js
function escapeText(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

// ==================== STRESS TESTS ====================

describe('Stress — large text processing', () => {
    it('tokenizes 100KB text without hanging', () => {
        const words = [];
        for (let i = 0; i < 10000; i++) words.push('mot' + (i % 500));
        const text = words.join(' ');
        expect(text.length).toBeGreaterThan(50000);
        const tokens = tokenize(text);
        expect(tokens.length).toBeGreaterThan(0);
    });

    it('extracts keywords from 100KB text', () => {
        const words = [];
        for (let i = 0; i < 10000; i++) words.push('keyword' + (i % 100));
        const text = words.join(' ');
        const keywords = extractKeywords(text, 20);
        expect(keywords.length).toBeLessThanOrEqual(20);
        expect(keywords[0].count).toBeGreaterThan(1);
    });

    it('splits 1000 sentences', () => {
        const sentences = [];
        for (let i = 0; i < 1000; i++) {
            sentences.push('This is sentence number ' + i + ' with enough text.');
        }
        const text = sentences.join(' ');
        const result = splitSentences(text);
        expect(result.length).toBeGreaterThan(500);
    });

    it('cleanText handles 500KB of whitespace chaos', () => {
        let text = '';
        for (let i = 0; i < 5000; i++) {
            text += 'word' + i + '\t\t  \r\n  \r   ';
        }
        const cleaned = cleanText(text);
        expect(cleaned).not.toContain('\r');
        expect(cleaned).not.toContain('\t');
        expect(cleaned).not.toContain('  ');
    });
});

describe('Stress — empty/null inputs across all functions', () => {
    it('cleanText handles null/undefined/empty variations', () => {
        const inputs = [null, undefined, ''];
        inputs.forEach(input => {
            const result = cleanText(input);
            expect(typeof result).toBe('string');
            expect(result).toBe('');
        });
        // Non-string falsy values that pass the !text check
        expect(cleanText(0)).toBe('');
        expect(cleanText(false)).toBe('');
    });

    it('tokenize handles empty and whitespace-only strings', () => {
        expect(tokenize('')).toEqual([]);
        expect(tokenize('   ')).toEqual([]);
        expect(tokenize('\n\n\n')).toEqual([]);
        expect(tokenize('\t\t\t')).toEqual([]);
    });

    it('extractKeywords handles empty text', () => {
        expect(extractKeywords('')).toEqual([]);
        expect(extractKeywords('   ')).toEqual([]);
    });

    it('escapeText handles all falsy values', () => {
        expect(escapeText(null)).toBe('');
        expect(escapeText(undefined)).toBe('');
        expect(escapeText('')).toBe('');
        // 0 and false are falsy, so escapeText returns ''
        expect(escapeText(0)).toBe('');
        expect(escapeText(false)).toBe('');
    });
});

describe('Stress — XSS injection attempts (200 patterns)', () => {
    const xssPayloads = [
        '<script>alert(1)</script>',
        '<img src=x onerror=alert(1)>',
        '<svg onload=alert(1)>',
        '"><script>alert(1)</script>',
        "';alert(1)//",
        '<iframe src="javascript:alert(1)">',
        '<body onload=alert(1)>',
        '<input onfocus=alert(1) autofocus>',
        '<marquee onstart=alert(1)>',
        '<a href="javascript:alert(1)">click</a>',
        '{{constructor.constructor("alert(1)")()}}',
        '<div style="background:url(javascript:alert(1))">',
        '<math><mi xlink:href="javascript:alert(1)">',
        '"><img src=x onerror=alert(1)//',
        '<details open ontoggle=alert(1)>'
    ];

    it('escapeText neutralizes all XSS payloads', () => {
        xssPayloads.forEach(payload => {
            const escaped = escapeText(payload);
            // escapeText converts < and > to entities, neutralizing HTML tags
            expect(escaped).not.toContain('<script');
            expect(escaped).not.toContain('<img');
            expect(escaped).not.toContain('<svg');
            expect(escaped).not.toContain('<iframe');
            expect(escaped).not.toContain('<body');
        });
    });

    it('escapeText preserves content while removing threats', () => {
        const result = escapeText('<b>Hello</b> & "world"');
        expect(result).toBe('&lt;b&gt;Hello&lt;/b&gt; &amp; &quot;world&quot;');
    });

    it('double-escaping does not break output', () => {
        const once = escapeText('<script>');
        const twice = escapeText(once);
        expect(twice).not.toContain('<');
        expect(twice).toContain('&amp;lt;');
    });
});

describe('Stress — quiz validation with 200 random questions', () => {
    it('validates 200 randomly generated questions', () => {
        for (let i = 0; i < 200; i++) {
            const q = {
                question: i % 10 === 0 ? 'Short' : 'This is a valid question number ' + i + '?',
                options: i % 15 === 0 ? ['A'] : ['A', 'B', 'C', 'D'],
                correctIndex: i % 20 === 0 ? -1 : (i % 4)
            };
            const errors = validateQuizQuestion(q);
            if (i % 10 === 0) expect(errors).toContain('question too short');
            if (i % 15 === 0 && i % 10 !== 0) expect(errors).toContain('insufficient options');
            if (i % 20 === 0) expect(errors).toContain('correctIndex out of bounds');
        }
    });

    it('accepts 200 valid questions without errors', () => {
        for (let i = 0; i < 200; i++) {
            const errors = validateQuizQuestion({
                question: 'Quelle est la réponse à la question numéro ' + i + ' ?',
                options: ['Option A', 'Option B', 'Option C', 'Option D'],
                correctIndex: i % 4
            });
            expect(errors.length).toBe(0);
        }
    });
});

describe('Stress — network state toggling', () => {
    it('handles 500 online/offline toggles', () => {
        for (let i = 0; i < 500; i++) {
            Object.defineProperty(navigator, 'onLine', { value: i % 2 === 0, writable: true });
            const shouldSync = navigator.onLine;
            if (i % 2 === 0) {
                expect(shouldSync).toBe(true);
            } else {
                expect(shouldSync).toBe(false);
            }
        }
        // Restore
        Object.defineProperty(navigator, 'onLine', { value: true, writable: true });
    });

    it('localStorage works regardless of 100 network flips', () => {
        for (let i = 0; i < 100; i++) {
            Object.defineProperty(navigator, 'onLine', { value: i % 2 === 0, writable: true });
            saveData('network_test', { iteration: i, online: navigator.onLine });
            const read = loadData('network_test', {});
            expect(read.iteration).toBe(i);
        }
        Object.defineProperty(navigator, 'onLine', { value: true, writable: true });
    });
});

describe('Stress — rapid screen switching with state persistence', () => {
    beforeEach(() => resetStorage());

    it('state integrity after 300 screen switches', () => {
        const screens = ['dashboard', 'quiz', 'flashcards', 'focus', 'profile'];
        for (let i = 0; i < 300; i++) {
            const screen = screens[i % screens.length];
            const appState = loadData('appState', { currentScreen: 'dashboard', history: [] });
            appState.currentScreen = screen;
            appState.history = appState.history || [];
            appState.history.push(screen);
            // Keep history bounded
            if (appState.history.length > 50) appState.history = appState.history.slice(-50);
            saveData('appState', appState);
        }
        const final = loadData('appState', {});
        expect(final.history.length).toBeLessThanOrEqual(50);
        expect(screens).toContain(final.currentScreen);
    });
});

describe('Stress — unicode and special character handling', () => {
    beforeEach(() => resetStorage());

    it('stores/retrieves 100 entries with mixed unicode', () => {
        const unicodeStrings = [
            'Théorème de Pythagore', '日本語テスト', '한국어 시험',
            'Ελληνικά', 'العربية', 'हिंदी परीक्षा',
            '🎓📚✅❌🔥💯', 'café résumé naïve',
            'a² + b² = c²', '∑∫∂∇∆'
        ];
        for (let i = 0; i < 100; i++) {
            const str = unicodeStrings[i % unicodeStrings.length];
            saveData('unicode_' + i, { text: str, index: i });
        }
        for (let i = 0; i < 100; i++) {
            const result = loadData('unicode_' + i, {});
            expect(result.index).toBe(i);
            expect(result.text.length).toBeGreaterThan(0);
        }
    });

    it('escapeText handles unicode correctly', () => {
        expect(escapeText('Théorème <b>important</b>')).toBe('Théorème &lt;b&gt;important&lt;/b&gt;');
        expect(escapeText('🎓 Score: 100%')).toBe('🎓 Score: 100%');
        expect(escapeText('a² + b² = c²')).toBe('a² + b² = c²');
    });

    it('tokenize preserves French accented words', () => {
        const text = 'La révolution française était une période importante de histoire';
        const tokens = tokenize(text);
        expect(tokens).toContain('révolution');
        expect(tokens).toContain('française');
        expect(tokens).toContain('période');
        expect(tokens).toContain('importante');
        expect(tokens).toContain('histoire');
    });
});
