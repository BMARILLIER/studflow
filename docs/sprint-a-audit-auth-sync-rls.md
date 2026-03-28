# SPRINT A — AUDIT AUTH + SYNC + RLS

**Date** : 2026-03-04
**Methode** : Audit code statique (review de tous les fichiers JS + SQL)
**Fichiers audites** : supabaseClient.js, auth.js, cloud.js, subscription.js, schema.sql, index.html

---

## 1. AUTH — Authentification

### ✅ Fonctionne (code review)

| Fonctionnalite | Fichier | Verdict |
|----------------|---------|---------|
| Signup email/password | auth.js:37-56 | ✅ Appelle `sb.auth.signUp()` + auto sign-in si pas de confirmation email |
| Login email/password | auth.js:58-67 | ✅ Appelle `sb.auth.signInWithPassword()` |
| Logout | auth.js:69-76 | ✅ Appelle `sb.auth.signOut()` + reset `_user` + refresh UI |
| Session persistante | supabaseClient.js:17 | ✅ `persistSession: true, autoRefreshToken: true` |
| Restore session au reload | auth.js:26-32 | ✅ `sb.auth.getSession()` au init, restaure `_user` |
| Gestion erreur mdp | auth.js:82-91 | ✅ Traduction FR : "Email ou mot de passe incorrect", "Trop de tentatives", etc. |
| Loading state | auth.js:166-171 | ✅ Bouton disabled + texte "Chargement..." pendant l'appel |
| Age verification (RGPD) | auth.js:137-142 | ✅ Checkbox obligatoire au signup ("J'ai 15 ans ou plus") |

### ⚠️ Risques

| Risque | Detail | Severite |
|--------|--------|----------|
| Email confirmation desactivee | auth.js:43 "email confirmation disabled" — le signup auto-login sans verifier l'email | ⚠️ Moyen |
| Pas de rate limiting cote client | Le rate limit depend de Supabase (par defaut). Pas de throttle cote JS. | ⚠️ Faible |
| Pas de validation format email | `handleSubmit()` verifie juste que le champ n'est pas vide, pas le format | ⚠️ Faible |

### Recommandations Auth

1. **Activer la confirmation email** dans Supabase Dashboard > Auth > Settings. Meme en beta fermee, ca empeche les comptes fake.
2. **Ajouter une validation basique email** cote client (regex simple) pour eviter les erreurs inutiles.
3. Le rate limit Supabase par defaut (30 requests/5min) est suffisant pour la beta.

---

## 2. RLS — Row Level Security

### ✅ Fonctionne (schema.sql review)

| Table | RLS Active | Policies | Verdict |
|-------|-----------|----------|---------|
| `profiles` | ✅ L.86 | SELECT/INSERT/UPDATE: `auth.uid() = id` | ✅ Correct — acces strictement propre |
| `user_state` | ✅ L.87 | SELECT/INSERT/UPDATE: `auth.uid() = id` | ✅ Correct — acces strictement propre |
| `activity_log` | ✅ L.88 | INSERT/SELECT: `auth.uid() = user_id` | ✅ Correct — pas de UPDATE/DELETE (log immuable) |
| `subscriptions` | ✅ L.89 | SELECT only: `auth.uid() = user_id` | ✅ Correct — lecture seule, pas de modification cote client |

### ✅ Points forts RLS

- **Toutes les 4 tables ont RLS active** — aucune table oubliee
- **CASCADE sur auth.users** — suppression user → cascade sur toutes les tables (profiles, user_state, subscriptions, activity_log)
- **Pas de policy DELETE client** sur profiles/user_state — la suppression passe par `delete_own_account()` RPC (SECURITY DEFINER)
- **subscriptions en SELECT only** — le client ne peut pas modifier son propre abonnement directement

### ⚠️ Risques RLS

| Risque | Detail | Severite |
|--------|--------|----------|
| Pas de policy pour `user_state` UPSERT | Le cloud.js utilise `.upsert()` (L.103). L'upsert necessite INSERT + UPDATE policies, qui existent → OK | ✅ Faux positif |
| `delete_own_account()` est SECURITY DEFINER | Cette fonction s'execute avec les privileges du createur (superuser). C'est voulu et necessaire pour `DELETE FROM auth.users`. | ⚠️ Acceptable — mais verifier que cette RPC n'est pas appele avec des parametres manipulables |
| `handle_new_user()` est SECURITY DEFINER | Necessaire pour inserer dans les tables depuis un trigger `auth.users`. Normal. | ✅ OK |

### Verification isolation inter-utilisateurs

Le code cloud.js (L.99, L.131) passe toujours `userId = StudFlow.auth.getUser().id` pour les requetes :
- `sb.from('user_state').upsert({ id: userId, ... })` — le RLS verifie que `auth.uid() = id`
- `sb.from('user_state').select(...).eq('id', userId).single()` — meme chose

**Verdict** : un utilisateur ne peut PAS lire/ecrire les donnees d'un autre. Le RLS est correct.

---

## 3. SYNC — Synchronisation cloud

### ✅ Fonctionne (code review)

| Fonctionnalite | Fichier | Verdict |
|----------------|---------|---------|
| Push apres modification | cloud.js:65-71 | ✅ `markDirty()` → debounce 30s → `pushNow()` |
| Pull au login | auth.js:17-18 | ✅ `SIGNED_IN` → `cloud.pull()` |
| Pull au restore session | auth.js:30 | ✅ `getSession()` → `cloud.pull()` |
| Push au reconnect | cloud.js:40-42 | ✅ `window.addEventListener('online', ...)` |
| Offline fallback | cloud.js:68 | ✅ Si `!navigator.onLine`, reste dirty, push plus tard |
| Stop sync au logout | auth.js:21 | ✅ `SIGNED_OUT` → `cloud.stop()` |
| Timeout 10s | cloud.js:105,138 | ✅ `withTimeout(promise, 10000)` |

### ✅ Strategie de merge (cloud.js:195-218)

| Type de donnee | Strategie | Verdict |
|----------------|-----------|---------|
| `gamification` (xp, level, streak) | Max wins | ✅ Correct — on garde le max de chaque valeur |
| `scores` | Max wins | ✅ Correct |
| `customFlashcards`, `customQuiz` | Union (dedupe par `question`) | ✅ Correct — pas de perte de contenu |
| `subscription`, `userPlan` | Server wins toujours | ✅ Correct — evite la triche |
| Tout le reste | Most recent wins | ✅ Correct — basé sur timestamp |

### ⚠️ Risques Sync

| Risque | Detail | Severite |
|--------|--------|----------|
| Pas de lock multi-onglet | Deux onglets peuvent push en meme temps, causant une race condition | ⚠️ Moyen |
| Debounce 30s | Si l'utilisateur ferme le navigateur < 30s apres une modif, le push est perdu. Pas de `beforeunload`. | ⚠️ Moyen |
| `coachChat` dans SYNC_KEYS | L'historique chat est sync → attention RGPD si les messages LLM contiennent des donnees personnelles | ⚠️ Faible (info) |
| `_cloud_dirty` persiste en localStorage | Si le browser crash avec dirty=true, le prochain reload pushera. Bon comportement. | ✅ OK |

### Recommandations Sync

1. **Ajouter un push au `beforeunload`** pour eviter la perte de donnees :
   ```javascript
   window.addEventListener('beforeunload', function() { if (_dirty) pushNow(); });
   ```
2. **Considerer retirer `coachChat` de SYNC_KEYS** si les conversations LLM ne doivent pas etre stockees sur le serveur (RGPD).
3. Multi-onglet : pour la beta, risque acceptable. A long terme, utiliser un `BroadcastChannel` pour coordonner.

---

## 4. SECURITE

### ✅ Points positifs

| Verification | Verdict |
|-------------|---------|
| **Cle Supabase = publishable (anon key)** | ✅ `sb_publishable_...` — c'est la cle publique, PAS la service_role key |
| **Aucune cle secrete cote client** | ✅ Pas de `.env`, pas de service_role_key, pas de JWT secret |
| **Aucune requete possible sans session** | ✅ RLS impose `auth.uid()` — requetes anonymes refusees |
| **Cle Groq API non synchronisee** | ✅ `groq_api_key` n'est PAS dans SYNC_KEYS (cloud.js:13-19) |
| **XSS protection coach** | ✅ `escapeHtml()` dans coachChat.js (L.760) |
| **Timeout reseau** | ✅ 8s par defaut (supabaseClient.js:6), 10s pour cloud |
| **Session auto-refresh** | ✅ `autoRefreshToken: true` — les tokens expirent et sont renouveles |

### ⚠️ Risques Securite

| Risque | Detail | Severite |
|--------|--------|----------|
| **URL Supabase hardcodee** | supabaseClient.js:4 — l'URL et la cle anon sont en clair dans le JS. Normal pour une SPA, mais facilite l'enumeration. | ⚠️ Acceptable |
| **`delete_own_account()` RPC sans parametres** | La RPC utilise `auth.uid()` directement → pas de manipulation possible. Securise. | ✅ OK |
| **Pas de CORS custom** | Le CORS par defaut de Supabase autorise tout origin. Pour la beta c'est OK. | ⚠️ Faible |
| **Supabase JS v2 via CDN** | index.html:21 — charge depuis jsdelivr sans hash d'integrite (SRI). Risque supply chain theorique. | ⚠️ Faible |

### ❌ Bugs critiques securite

**Aucun bug critique de securite detecte.**

### Recommandations Securite

1. **Ajouter SRI (Subresource Integrity)** sur le script CDN Supabase pour verifier l'integrite :
   ```html
   <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"
           integrity="sha384-XXXX" crossorigin="anonymous" defer></script>
   ```
2. **Configurer CORS** dans Supabase Dashboard pour n'autoriser que le domaine de production.
3. Pour la beta fermee, la securite actuelle est **suffisante**.

---

## 5. ERREURS CONSOLE (analyse statique)

### ✅ Pas de probleme detecte

| Verification | Verdict |
|-------------|---------|
| **Boucle infinie** | ✅ Aucune — `markDirty()` n'appelle que `_originalSave()` pour eviter le re-trigger (cloud.js:190) |
| **Requetes reseau excessives** | ✅ Push debounce 30s, pull uniquement au login/session restore |
| **Erreurs non catchees** | ✅ Tous les `.then().catch()` sont presents dans auth.js et cloud.js |
| **Supabase indisponible** | ✅ `getClient()` retourne null si `supabase` non defini → toutes les fonctions testent cela |
| **localStorage full** | ⚠️ Pas de try-catch autour de `localStorage.setItem()` dans storage.js. Si le quota est atteint, erreur silencieuse possible. |

### ⚠️ Points d'attention

| Point | Detail |
|-------|--------|
| `console.warn` en production | cloud.js ecrit des warnings en console (L.109, 119, 146, 169). Normal pour debug, mais a nettoyer pour la prod. |
| Double pull au login | auth.js L.18 (onAuthStateChange SIGNED_IN → pull) + L.30 (getSession → pull). Si la session existe deja, ca pull 2 fois au premier load. Non critique mais gaspilleur. |

---

## 6. RAPPORT STRUCTURE

### ✅ Fonctionne

- Auth signup/login/logout complet avec gestion d'erreurs FR
- Session persistante + auto-refresh token
- RLS active sur les 4 tables, policies correctes, isolation inter-utilisateurs garantie
- Sync local-first avec merge intelligent (max, union, most-recent, server-wins)
- Fallback offline transparent (localStorage fonctionne seul)
- Push au reconnect
- Aucune cle secrete cote client
- Cle Groq non synchronisee
- XSS protection dans le coach
- `delete_own_account()` RPC securise avec CASCADE
- Age verification au signup

### ⚠️ Risques (non bloquants pour beta)

| # | Risque | Severite | Action |
|---|--------|----------|--------|
| 1 | Email confirmation desactivee | Moyen | Activer dans Supabase Dashboard |
| 2 | Pas de push au `beforeunload` | Moyen | Ajouter 3 lignes dans cloud.js |
| 3 | Double pull au premier login | Faible | Ajouter un flag `_pulled` pour eviter |
| 4 | Race condition multi-onglet | Faible | Acceptable en beta, BroadcastChannel plus tard |
| 5 | `coachChat` dans SYNC_KEYS | Faible | Evaluer si les conversations LLM doivent etre cloud |
| 6 | Pas de SRI sur CDN Supabase | Faible | Ajouter hash d'integrite |
| 7 | Pas de try-catch localStorage | Faible | Wrapper dans storage.js |

### ❌ Bugs critiques

**Aucun.**

### Ameliorations recommandees (par priorite)

| Priorite | Action | Effort |
|----------|--------|--------|
| P0 | Activer email confirmation (Supabase Dashboard) | 2 min |
| P1 | Ajouter `beforeunload` push dans cloud.js | 5 min |
| P1 | Eviter double pull au login (flag `_pulled`) | 10 min |
| P2 | Ajouter SRI hash sur CDN Supabase | 15 min |
| P2 | Try-catch autour de localStorage.setItem | 15 min |
| P3 | BroadcastChannel multi-onglet | 1h |
| P3 | Nettoyer console.warn pour production | 10 min |

---

## VERDICT FINAL

**L'integration Supabase est solide et prete pour une beta fermee.**

L'architecture local-first avec sync cloud est bien implementee. Le RLS est correct et complet. Aucune faille de securite critique. Les seuls points a traiter avant lancement public sont l'activation de la confirmation email (2 min) et le push au beforeunload (5 min).
