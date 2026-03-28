# SMOKE TEST — Analytics & Feedback

## Configuration

| Parametre | Module | Valeur |
|-----------|--------|--------|
| MAX_QUEUE | analytics | 500 |
| BATCH_SIZE | analytics | 10 |
| DEBOUNCE_MS | analytics | 3000 ms |
| FLUSH_INTERVAL_MS | analytics | 30000 ms (30s) |
| MAX_QUEUE | feedback | 100 |
| BATCH_SIZE | feedback | 10 |

---

## Tests manuels — PASS / FAIL

### TEST 1 — Event login tracke
1. Se connecter avec un compte existant
2. Ouvrir Admin (Ctrl+Shift+A) > Voir Analytics
3. Verifier qu'un event `login` apparait dans le tableau

**PASS** : event `login` visible avec date recente
**FAIL** : aucun event `login`

---

### TEST 2 — Event signup tracke
1. Creer un nouveau compte (email + mot de passe)
2. Admin > Voir Analytics
3. Verifier qu'un event `signup` apparait

**PASS** : event `signup` visible
**FAIL** : aucun event `signup`

---

### TEST 3 — Event logout tracke
1. Se deconnecter depuis Parametres
2. Se reconnecter
3. Admin > Voir Analytics
4. Verifier qu'un event `logout` apparait

**PASS** : event `logout` visible
**FAIL** : aucun event `logout`

---

### TEST 4 — Event quiz_completed tracke
1. Lancer un quiz et le terminer
2. Admin > Voir Analytics
3. Verifier event `quiz_completed` avec metadata (score, total, percent, deck)

**PASS** : event `quiz_completed` avec metadata correcte
**FAIL** : event manquant ou metadata vide

---

### TEST 5 — Event coach_message tracke
1. Aller dans Coach > envoyer un message
2. Admin > Voir Analytics
3. Verifier event `coach_message` avec metadata (mode: `llm` ou `keyword`)

**PASS** : event `coach_message` visible
**FAIL** : event manquant

---

### TEST 6 — Feedback quick (bug + idee)
1. Parametres > "Signaler une erreur" > taper 10+ car > Envoyer
2. Parametres > "Suggestion" > taper 10+ car > Envoyer
3. Admin > Voir Feedback
4. Verifier 2 feedbacks : type `bug` et type `idee`

**PASS** : les 2 feedbacks visibles avec bon type
**FAIL** : feedbacks manquants ou mauvais type

---

### TEST 7 — Feedback validation min 10 car
1. Parametres > "Signaler une erreur"
2. Taper "abc" (3 car) > Envoyer
3. Verifier message d'erreur "10 caracteres minimum."

**PASS** : erreur affichee, feedback non envoye
**FAIL** : feedback envoye quand meme ou pas d'erreur

---

### TEST 8 — Offline queue + auto-flush
1. Couper internet (mode avion ou DevTools > Network > Offline)
2. Envoyer un message coach + un feedback bug
3. Admin > Rafraichir > verifier queue sizes > 0
4. Retablir internet
5. Attendre 5s > Admin > Rafraichir
6. Verifier queue sizes = 0 (events flushed)

**PASS** : queue > 0 offline, puis 0 apres retour online
**FAIL** : queue ne se vide pas apres retour online

---

### TEST 9 — Admin panel queue status
1. Ouvrir Admin (Ctrl+Shift+A)
2. Verifier la section "Admin — Analytics & Feedback"
3. Verifier l'affichage :
   - Analytics queue: X en attente · Dernier flush: date
   - Feedback queue: X en attente · Dernier flush: date
   - Config: MAX_QUEUE, BATCH, debounce, flush

**PASS** : toutes les infos affichees correctement
**FAIL** : infos manquantes ou incorrectes

---

### TEST 10 — Flush manuel
1. Admin > "Flush queues"
2. Verifier toast "Flush lance"
3. Attendre 2s > verifier que le status se met a jour

**PASS** : toast + status mis a jour
**FAIL** : pas de toast ou status inchange

---

### TEST 11 — Gating coach 5 msgs/jour (free)
1. S'assurer d'etre en plan Free
2. Envoyer 5 messages coach
3. Envoyer un 6e message
4. Verifier le blocage
5. Admin > Voir Analytics > verifier event `coach_limit_reached`

**PASS** : 6e message bloque + event `coach_limit_reached` tracke
**FAIL** : pas de blocage ou event manquant

---

### TEST 12 — PII sanitization
1. Envoyer un event avec metadata contenant `email` ou `password`
   (se produit naturellement au login/signup — les champs sont supprimes)
2. Admin > Voir Analytics
3. Verifier que les metadata ne contiennent jamais `email` ni `password`

**PASS** : aucune PII dans les metadata
**FAIL** : email ou password visible dans metadata

---

## Resume

| # | Test | Resultat |
|---|------|----------|
| 1 | Event login | ☐ PASS / ☐ FAIL |
| 2 | Event signup | ☐ PASS / ☐ FAIL |
| 3 | Event logout | ☐ PASS / ☐ FAIL |
| 4 | Event quiz_completed | ☐ PASS / ☐ FAIL |
| 5 | Event coach_message | ☐ PASS / ☐ FAIL |
| 6 | Feedback quick (bug+idee) | ☐ PASS / ☐ FAIL |
| 7 | Validation min 10 car | ☐ PASS / ☐ FAIL |
| 8 | Offline queue + flush | ☐ PASS / ☐ FAIL |
| 9 | Admin queue status | ☐ PASS / ☐ FAIL |
| 10 | Flush manuel | ☐ PASS / ☐ FAIL |
| 11 | Gating 5 msgs/jour | ☐ PASS / ☐ FAIL |
| 12 | PII sanitization | ☐ PASS / ☐ FAIL |
