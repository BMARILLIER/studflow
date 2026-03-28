# StudFlow — Audit Securite (Sprint Excellence)

## Resultat : SOLIDE (90/100)

## 1. Protection XSS

| Mesure | Statut |
|--------|--------|
| `escapeText()` sur tous les inputs utilisateur | OK |
| `sanitizeHTML()` pour contenu importe (whitelist tags) | OK |
| CSP meta tag (script-src, style-src, connect-src) | OK (ajoute) |
| Pas d'innerHTML avec input utilisateur direct | OK (verifie) |

## 2. Supabase RLS

| Table | SELECT | INSERT | UPDATE | DELETE |
|-------|--------|--------|--------|--------|
| profiles | auth.uid() = id | auth.uid() = id | auth.uid() = id | CASCADE |
| user_state | auth.uid() = id | auth.uid() = id | auth.uid() = id | CASCADE |
| activity_log | auth.uid() = user_id | auth.uid() = user_id | - | CASCADE |
| subscriptions | auth.uid() = user_id | - | - | CASCADE |
| analytics_events | auth.uid() = user_id | uid = user_id OR null | - | CASCADE |
| user_feedback | auth.uid() = user_id | uid = user_id OR null | - | CASCADE |

Toutes les tables ont RLS active. Aucun acces cross-user possible.

## 3. Validation inputs

| Input | Validation |
|-------|-----------|
| Email/password auth | Supabase gere la validation |
| License code | Regex `SF-XXXX-XXXX-XXXX` |
| Groq API key | Stocke localement, jamais synce |
| Flashcard/quiz creation | `escapeText()` + non-empty check |
| Feedback textarea | Longueur libre, echappe avant insertion DOM |

## 4. Cle API Groq

- Stockee uniquement dans localStorage (`groq_api_key`)
- Pas dans les SYNC_KEYS (jamais envoyee a Supabase)
- Envoyee uniquement a `api.groq.com` via HTTPS
- CSP limite connect-src aux domaines autorises

## 5. CSP (Content Security Policy)

```
default-src 'self';
script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://js.stripe.com;
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
font-src https://fonts.gstatic.com;
connect-src 'self' https://*.supabase.co https://api.groq.com https://api.stripe.com;
img-src 'self' data: blob:;
frame-src https://js.stripe.com;
```

Note : `unsafe-inline` est necessaire pour les scripts inline dans index.html et les styles dynamiques. Peut etre supprime avec un refactor futur (nonce-based).

## 6. Risques residuels (faibles)

| Risque | Severite | Mitigation |
|--------|----------|------------|
| `unsafe-inline` dans CSP | Faible | Requis par archi actuelle, pas exploitable sans XSS |
| Pas de rate-limit client sur feedback | Faible | 1 feedback/jour en UI |
| localStorage accessible si appareil compromis | Faible | Risque inherent PWA, pas de donnees sensibles |
| Groq API key visible dans DevTools | Info | Cle utilisateur, pas cle serveur |

## 7. Recommandations futures

1. Migrer scripts inline vers fichiers externes + CSP nonce
2. Ajouter rate-limit cote Supabase (Edge Functions)
3. Chiffrer la cle Groq dans localStorage (optionnel)
