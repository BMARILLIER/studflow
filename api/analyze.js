// api/analyze.js — Vercel Serverless Function
// Calls Anthropic API server-side. ANTHROPIC_API_KEY stays on the server.

const DAILY_LIMIT = 15;
const MAX_INPUT_TOKENS = 3000;
const MAX_OUTPUT_TOKENS = 1024;

// In-memory rate limit (resets on cold start, good enough for light usage)
const rateLimits = {};

function getRateLimitKey(req) {
    return req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || 'unknown';
}

function checkRateLimit(key) {
    var now = Date.now();
    var today = new Date().toISOString().slice(0, 10);

    if (!rateLimits[key] || rateLimits[key].date !== today) {
        rateLimits[key] = { date: today, count: 0 };
    }

    if (rateLimits[key].count >= DAILY_LIMIT) {
        return false;
    }

    rateLimits[key].count++;
    return true;
}

// Rough token estimation (1 token ~ 4 chars for French)
function estimateTokens(text) {
    return Math.ceil((text || '').length / 4);
}

export default async function handler(req, res) {
    // CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // Check API key is configured server-side
    var apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
        console.error('[analyze] ANTHROPIC_API_KEY not configured');
        return res.status(500).json({ error: 'API key not configured on server' });
    }

    // Rate limit
    var clientKey = getRateLimitKey(req);
    if (!checkRateLimit(clientKey)) {
        return res.status(429).json({ error: 'Limite atteinte (15 analyses/jour). Reviens demain !' });
    }

    // Parse body
    var body = req.body;
    if (!body || !body.text) {
        return res.status(400).json({ error: 'Missing text field' });
    }

    var text = String(body.text).trim();
    if (text.length < 50) {
        return res.status(400).json({ error: 'Texte trop court pour une analyse' });
    }

    // Truncate to token limit
    var maxChars = MAX_INPUT_TOKENS * 4;
    if (text.length > maxChars) {
        text = text.substring(0, maxChars);
    }

    var mode = body.mode || 'flashcards'; // 'flashcards', 'quiz', 'both'
    var chunkIndex = typeof body.chunkIndex === 'number' ? body.chunkIndex : 0;
    var totalChunks = typeof body.totalChunks === 'number' ? body.totalChunks : 1;

    // Build prompt (adapts card count when chunked)
    var prompt = buildPrompt(text, mode, totalChunks);

    try {
        console.log('[analyze] Calling Anthropic, mode:', mode, 'text length:', text.length);

        var response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                model: 'claude-haiku-4-5-20251001',
                max_tokens: MAX_OUTPUT_TOKENS,
                messages: [
                    { role: 'user', content: prompt }
                ]
            })
        });

        if (!response.ok) {
            var errBody = await response.text();
            console.error('[analyze] Anthropic error:', response.status, errBody);
            return res.status(502).json({ error: 'Erreur API IA (' + response.status + ')' });
        }

        var data = await response.json();
        var content = data.content && data.content[0] && data.content[0].text;

        if (!content) {
            return res.status(502).json({ error: 'Reponse IA vide' });
        }

        console.log('[analyze] Success, response length:', content.length);

        // Parse JSON from response
        var parsed = parseAIResponse(content, mode);

        return res.status(200).json({
            success: true,
            mode: mode,
            data: parsed,
            raw: content
        });

    } catch (err) {
        console.error('[analyze] Error:', err.message);
        return res.status(500).json({ error: 'Erreur serveur: ' + err.message });
    }
}

function buildPrompt(text, mode, totalChunks) {
    // Fewer cards per chunk when document is split, to stay within output token limit
    var fcCount = totalChunks > 1 ? 6 : 10;
    var qzCount = totalChunks > 1 ? 3 : 5;

    var quality = 'Niveau lycee/Bac. Privilegier : definitions utiles, methodes, formules, pieges frequents. '
        + 'Eviter : details secondaires, hors programme, repetitions. '
        + 'Reponses courtes et claires. ';

    if (mode === 'quiz') {
        return 'A partir de ce cours, cree ' + qzCount + ' questions QCM. ' + quality
            + 'Reponds UNIQUEMENT en JSON valide, sans markdown.\n'
            + 'Format: [{"question":"Q","options":["A","B","C","D"],"correctIndex":0,"explanation":"E"}]\n\n'
            + 'COURS:\n' + text;
    }

    if (mode === 'both') {
        return 'A partir de ce cours, cree ' + fcCount + ' flashcards et ' + qzCount + ' questions QCM. ' + quality
            + 'Reponds UNIQUEMENT en JSON valide, sans markdown.\n'
            + 'Format: {"flashcards":[{"question":"Q","answer":"A"}],"quiz":[{"question":"Q","options":["A","B","C","D"],"correctIndex":0,"explanation":"E"}]}\n\n'
            + 'COURS:\n' + text;
    }

    // Default: flashcards
    return 'A partir de ce cours, cree ' + fcCount + ' flashcards. ' + quality
        + 'Chaque carte = 1 idee cle. '
        + 'Reponds UNIQUEMENT en JSON valide, sans markdown.\n'
        + 'Format: [{"question":"Q","answer":"A"}]\n\n'
        + 'COURS:\n' + text;
}

function parseAIResponse(content, mode) {
    try {
        var cleaned = content
            .replace(/```json\s*/gi, '')
            .replace(/```\s*/g, '')
            .trim();

        if (mode === 'both') {
            var objStart = cleaned.indexOf('{');
            var objEnd = cleaned.lastIndexOf('}');
            if (objStart !== -1 && objEnd !== -1) {
                return JSON.parse(cleaned.substring(objStart, objEnd + 1));
            }
        }

        var arrStart = cleaned.indexOf('[');
        var arrEnd = cleaned.lastIndexOf(']');
        if (arrStart !== -1 && arrEnd !== -1) {
            return JSON.parse(cleaned.substring(arrStart, arrEnd + 1));
        }
    } catch (e) {
        // Return raw if parsing fails
    }
    return null;
}
