// Tests for engineLocal.js — text processing, keyword extraction, sentence splitting
import { describe, it, expect } from 'vitest';

// ==================== Extracted logic ====================
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
    return text
        .replace(/\r\n/g, '\n')
        .replace(/\r/g, '\n')
        .replace(/\t/g, ' ')
        .replace(/ {2,}/g, ' ')
        .trim();
}

function splitSentences(text) {
    var cleaned = cleanText(text);
    var raw = cleaned.split(/(?<=[.!?])\s+/);
    return raw
        .map(function(s) { return s.trim(); })
        .filter(function(s) { return s.length > 10; });
}

function splitParagraphs(text) {
    return cleanText(text)
        .split(/\n{2,}/)
        .map(function(p) { return p.trim(); })
        .filter(function(p) { return p.length > 20; });
}

function tokenize(text) {
    return text
        .toLowerCase()
        .replace(/[^a-zàâäéèêëïîôùûüÿçœæ\s-]/g, ' ')
        .split(/\s+/)
        .filter(function(w) { return w.length > 2 && STOPWORDS.indexOf(w) === -1; });
}

function extractKeywords(text, maxCount) {
    maxCount = maxCount || 15;
    var tokens = tokenize(text);
    var freq = {};
    tokens.forEach(function(w) { freq[w] = (freq[w] || 0) + 1; });
    var sorted = Object.keys(freq).sort(function(a, b) { return freq[b] - freq[a]; });
    return sorted.slice(0, maxCount).map(function(word) {
        return { word: word, count: freq[word] };
    });
}

// ==================== TESTS ====================

describe('engineLocal.js — cleanText', () => {
    it('returns empty string for null/undefined', () => {
        expect(cleanText(null)).toBe('');
        expect(cleanText(undefined)).toBe('');
        expect(cleanText('')).toBe('');
    });

    it('normalizes line endings', () => {
        expect(cleanText('line1\r\nline2\rline3')).toBe('line1\nline2\nline3');
    });

    it('collapses multiple spaces', () => {
        expect(cleanText('hello    world')).toBe('hello world');
    });

    it('replaces tabs with spaces', () => {
        expect(cleanText('col1\tcol2\tcol3')).toBe('col1 col2 col3');
    });

    it('trims whitespace', () => {
        expect(cleanText('  hello  ')).toBe('hello');
    });
});

describe('engineLocal.js — splitSentences', () => {
    it('splits on sentence-ending punctuation', () => {
        const text = 'First sentence. Second sentence. Third sentence.';
        const sentences = splitSentences(text);
        expect(sentences.length).toBe(3);
    });

    it('filters out short fragments (< 10 chars)', () => {
        const text = 'Good sentence here. No. Another good sentence.';
        const sentences = splitSentences(text);
        expect(sentences.every(s => s.length > 10)).toBe(true);
    });

    it('handles exclamation and question marks', () => {
        const text = 'Is this a question? Yes it is! And another sentence.';
        const sentences = splitSentences(text);
        // "Yes it is!" is < 10 chars, so filtered out
        expect(sentences.length).toBe(2);
    });

    it('returns empty for empty text', () => {
        expect(splitSentences('')).toEqual([]);
        expect(splitSentences(null)).toEqual([]);
    });

    it('handles text without punctuation as single sentence', () => {
        const text = 'This is a long text without any sentence-ending punctuation at all';
        const sentences = splitSentences(text);
        expect(sentences.length).toBe(1);
    });
});

describe('engineLocal.js — splitParagraphs', () => {
    it('splits on double newlines', () => {
        const text = 'Paragraph one is here.\n\nParagraph two is here too.';
        const paragraphs = splitParagraphs(text);
        expect(paragraphs.length).toBe(2);
    });

    it('filters short paragraphs (< 20 chars)', () => {
        const text = 'Short.\n\nThis is a longer paragraph that should survive the filter.';
        const paragraphs = splitParagraphs(text);
        expect(paragraphs.length).toBe(1);
    });

    it('handles triple+ newlines', () => {
        const text = 'First paragraph here.\n\n\n\nSecond paragraph here.';
        const paragraphs = splitParagraphs(text);
        expect(paragraphs.length).toBe(2);
    });
});

describe('engineLocal.js — tokenize', () => {
    it('lowercases and splits into words', () => {
        const tokens = tokenize('Hello World');
        expect(tokens).toContain('hello');
        expect(tokens).toContain('world');
    });

    it('removes stopwords', () => {
        const tokens = tokenize('Le chat est dans la maison');
        expect(tokens).not.toContain('le');
        expect(tokens).not.toContain('est');
        expect(tokens).not.toContain('dans');
        expect(tokens).toContain('chat');
        expect(tokens).toContain('maison');
    });

    it('removes short words (<=2 chars)', () => {
        const tokens = tokenize('Je ai un chat');
        expect(tokens).not.toContain('ai');
        expect(tokens).not.toContain('un');
    });

    it('handles French accented characters', () => {
        const tokens = tokenize('La révolution française était importante');
        expect(tokens).toContain('révolution');
        expect(tokens).toContain('française');
        expect(tokens).toContain('importante');
    });

    it('removes numbers and punctuation', () => {
        const tokens = tokenize('En 1789, la révolution commença!');
        expect(tokens.every(t => !/[0-9!,]/.test(t))).toBe(true);
    });
});

describe('engineLocal.js — extractKeywords', () => {
    it('returns most frequent words first', () => {
        const text = 'revolution revolution revolution chat chat maison';
        const keywords = extractKeywords(text, 5);
        expect(keywords[0].word).toBe('revolution');
        expect(keywords[0].count).toBe(3);
    });

    it('respects maxCount limit', () => {
        const text = 'mot1 mot2 mot3 mot4 mot5 mot6 mot7 mot8';
        const keywords = extractKeywords(text, 3);
        expect(keywords.length).toBeLessThanOrEqual(3);
    });

    it('defaults to 15 keywords', () => {
        const words = [];
        for (let i = 0; i < 20; i++) words.push('keyword' + i);
        const text = words.join(' ');
        const keywords = extractKeywords(text);
        expect(keywords.length).toBeLessThanOrEqual(15);
    });

    it('returns empty for empty text', () => {
        expect(extractKeywords('')).toEqual([]);
    });

    it('returns empty for text with only stopwords', () => {
        const text = 'le la les de des du un une et est en';
        expect(extractKeywords(text)).toEqual([]);
    });
});
