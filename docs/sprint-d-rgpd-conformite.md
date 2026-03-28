# Sprint D — Conformite RGPD MVP StudFlow

## 1. CARTOGRAPHIE DES DONNEES

### A. Authentification (Supabase Auth)

| Donnee | Type | Stockage | Duree retention |
|--------|------|----------|-----------------|
| Email | Personnelle | Supabase | Duree du compte |
| Mot de passe (hash) | Personnelle | Supabase | Duree du compte |
| Provider OAuth (Google) | Personnelle | Supabase | Duree du compte |
| Date inscription | Personnelle | Supabase | Duree du compte |
| Derniere connexion | Personnelle | Supabase | Duree du compte |
| User ID (UUID) | Pseudonyme | Supabase + localStorage | Duree du compte |

### B. Progression pedagogique

| Donnee | Type | Stockage | Duree retention |
|--------|------|----------|-----------------|
| Profil psychologique (diagnostic) | Sensible* | localStorage + Supabase sync | Duree du compte |
| Scores quiz/flashcards | Non personnelle | localStorage + Supabase sync | Duree du compte |
| Historique sessions focus | Non personnelle | localStorage + Supabase sync | Duree du compte |
| XP, niveau, streak | Non personnelle | localStorage + Supabase sync | Duree du compte |
| Badges obtenus | Non personnelle | localStorage + Supabase sync | Duree du compte |
| Missions completees | Non personnelle | localStorage + Supabase sync | Duree du compte |
| Fiches generees | Non personnelle | localStorage | Duree du compte |
| Historique chat coach | Non personnelle | localStorage | 90 jours glissants |
| Plan Bac / planning | Non personnelle | localStorage + Supabase sync | Duree du compte |
| Cle API Groq | Sensible | localStorage UNIQUEMENT | Pas de sync |

*Le profil psychologique (anxieux, procrastinateur, etc.) pourrait etre considere comme donnee sensible au sens de l'article 9 RGPD. Cependant, il s'agit d'un auto-diagnostic non medical, base sur des preferences declaees. La base legale retenue est le consentement explicite lors du diagnostic.

### C. Abonnement / Paiement

| Donnee | Type | Stockage | Duree retention |
|--------|------|----------|-----------------|
| Plan (free/premium) | Non personnelle | localStorage + Supabase | Duree du compte |
| Stripe Customer ID | Pseudonyme | Supabase | Duree du compte + 3 ans (fiscal) |
| Subscription ID | Pseudonyme | Supabase | Duree du compte + 3 ans |
| Date debut/fin abo | Non personnelle | localStorage + Supabase | Duree du compte + 3 ans |
| Methode de paiement | Personnelle | Stripe UNIQUEMENT | Gere par Stripe |

Note : StudFlow ne stocke AUCUNE donnee de carte bancaire. Tout passe par Stripe.

### D. Analytics / Tracking

| Donnee | Type | Stockage | Duree retention |
|--------|------|----------|-----------------|
| Capsules vues (video_start/complete) | Non personnelle | localStorage | 1 an |
| Nombre messages coach/jour | Non personnelle | localStorage | 30 jours |
| Evenements gamification | Non personnelle | localStorage | Duree du compte |

**Aucun outil analytics tiers n'est utilise** (pas de Google Analytics, Mixpanel, etc.). Tout le tracking est local-first. Aucun cookie tiers.

---

## 2. BASE LEGALE RGPD (ARTICLE 6)

### Synthese par categorie

| Traitement | Base legale | Article 6 | Justification |
|-----------|-------------|-----------|---------------|
| Compte utilisateur (email, mdp) | Execution du contrat | Art. 6.1.b | Necessaire pour fournir le service |
| Progression pedagogique | Execution du contrat | Art. 6.1.b | Fonctionnalite coeur du service |
| Diagnostic profil | Consentement | Art. 6.1.a | Auto-evaluation optionnelle |
| Paiement (via Stripe) | Execution du contrat | Art. 6.1.b | Necessaire pour l'abonnement |
| Conservation facturation 3 ans | Obligation legale | Art. 6.1.c | Code de commerce, art. L123-22 |
| Coach IA (Groq LLM) | Consentement | Art. 6.1.a | Optionnel, active par l'utilisateur |
| Tracking capsules | Interet legitime | Art. 6.1.f | Amelioration du service, impact minimal |

### Notes importantes

- **Pas de profilage marketing** : les donnees de progression ne sont JAMAIS utilisees a des fins publicitaires
- **Pas de revente** : aucune donnee n'est vendue ou partagee avec des tiers non essentiels
- **Mineurs** : StudFlow s'adresse a des lyceens (16-18 ans). En France, le consentement est valide a partir de 15 ans (art. 7-1 loi Informatique et Libertes). Pour les moins de 15 ans, le consentement d'un parent est requis → ajouter une verification d'age lors de l'inscription

---

## 3. POLITIQUE DE CONFIDENTIALITE SIMPLIFIEE

```
POLITIQUE DE CONFIDENTIALITE — STUDFLOW
Derniere mise a jour : [DATE]

QUI SOMMES-NOUS ?
StudFlow est une application d'aide a la revision du Baccalaureat, editee par [NOM / DENOMINATION SOCIALE], [ADRESSE], France.
Contact DPO : [EMAIL]

QUELLES DONNEES COLLECTONS-NOUS ?

Donnees de compte :
- Email et mot de passe (necessaires pour creer ton compte)
- Methode de connexion (Google ou email)

Donnees de progression :
- Tes scores aux quiz et flashcards
- Ton profil de revision (resultat du diagnostic)
- Tes sessions de travail, XP, et badges
- Ton historique de conversation avec le Coach IA

Donnees de paiement :
- Gerees exclusivement par Stripe. Nous ne stockons jamais ton numero de carte.
- Nous conservons uniquement un identifiant Stripe pour gerer ton abonnement.

POURQUOI ?
- Pour te fournir le service (quiz, fiches, coach, suivi de progression)
- Pour gerer ton abonnement si tu choisis la version premium
- Pour ameliorer l'application (statistiques d'usage anonymisees)

AVEC QUI PARTAGEONS-NOUS TES DONNEES ?

| Service | Usage | Localisation | Garanties |
|---------|-------|-------------|-----------|
| Supabase | Authentification, stockage | UE (AWS eu-central-1) | Conforme RGPD, DPA signe |
| Stripe | Paiement | US + UE | Certifie SOC2, DPA signe, clauses contractuelles types |
| Groq | Coach IA (optionnel) | US | Pas de retention des prompts, ta cle API utilisee directement |

Nous ne vendons JAMAIS tes donnees. Nous ne faisons AUCUN profilage publicitaire.

COMBIEN DE TEMPS ?
- Donnees de compte : tant que ton compte est actif
- Progression : tant que ton compte est actif
- Historique coach : 90 jours glissants
- Donnees facturation : 3 ans apres fin d'abonnement (obligation legale)
- Apres suppression du compte : toutes les donnees sont effacees sous 30 jours

TES DROITS (RGPD Articles 15 a 22) :
- Acces : tu peux exporter toutes tes donnees (Parametres → Exporter mes donnees)
- Rectification : tu peux modifier tes informations a tout moment
- Suppression : tu peux supprimer ton compte et toutes tes donnees (Parametres → Supprimer mon compte)
- Portabilite : export JSON de toutes tes donnees
- Opposition : tu peux refuser le traitement base sur l'interet legitime
- Limitation : tu peux demander la limitation du traitement

Pour exercer tes droits : [EMAIL DPO]
Autorite de controle : CNIL (www.cnil.fr)

COOKIES
StudFlow utilise uniquement un cookie de session pour l'authentification.
Aucun cookie publicitaire, aucun cookie tiers, aucun tracking cross-site.
Pas de bandeau cookie necessaire (exemption cookie strictement necessaire, deliberation CNIL 2020-091).

MINEURS
StudFlow est destine aux lyceens. En France, a partir de 15 ans tu peux consentir seul au traitement de tes donnees. Si tu as moins de 15 ans, un parent ou tuteur doit donner son accord.

MODIFICATIONS
En cas de changement important de cette politique, tu seras informe par email et/ou notification dans l'application.
```

---

## 4. IMPLEMENTATION TECHNIQUE

### A. Export JSON utilisateur

Ajouter dans `Parametres` un bouton "Exporter mes donnees" qui genere un fichier JSON complet.

```javascript
// Dans index.html ou un module dedie
function exportUserData() {
    var data = {
        exportDate: new Date().toISOString(),
        version: '1.0',
        account: {
            // Depuis Supabase Auth (si connecte)
            email: null,
            createdAt: null
        },
        profile: StudFlow.storage.getUserProfile(),
        gamification: StudFlow.storage.loadData('gamification', {}),
        focusStats: StudFlow.storage.loadData('focusStats', {}),
        flashcards: StudFlow.storage.loadData('flashcards', []),
        customFlashcards: StudFlow.storage.loadData('customFlashcards', []),
        quizHistory: StudFlow.storage.loadData('quizGenHistory', {}),
        ficheHistory: StudFlow.storage.loadData('ficheGenHistory', {}),
        badges: StudFlow.storage.loadData('badges', {}),
        missions: StudFlow.storage.loadData('missions', {}),
        dailyGoal: StudFlow.storage.loadData('dailyGoal', {}),
        planbac: StudFlow.storage.loadData('planbac', {}),
        coachChat: StudFlow.storage.loadData('coachChat', {}),
        subscription: StudFlow.storage.loadData('subscription', {}),
        capsuleTracking: StudFlow.storage.loadData('capsuleTracking', {}),
        spacedRepetition: StudFlow.storage.loadData('spacedRepetition', {})
    };

    // Ajouter infos Supabase si connecte
    if (StudFlow.auth && StudFlow.auth.getUser) {
        var user = StudFlow.auth.getUser();
        if (user) {
            data.account.email = user.email;
            data.account.createdAt = user.created_at;
        }
    }

    // Telechargement
    var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'studflow-mes-donnees-' + new Date().toISOString().slice(0, 10) + '.json';
    a.click();
    URL.revokeObjectURL(url);
}
```

### B. Suppression de compte

```javascript
async function deleteUserAccount() {
    // 1. Confirmation double
    if (!confirm('Supprimer ton compte ? Toutes tes donnees seront effacees definitivement.')) return;
    if (!confirm('Derniere verification : cette action est IRREVERSIBLE. Continuer ?')) return;

    try {
        // 2. Supprimer donnees Supabase (si connecte)
        if (StudFlow.cloud && StudFlow.cloud.deleteAllUserData) {
            await StudFlow.cloud.deleteAllUserData();
        }

        // 3. Annuler abonnement Stripe (si actif)
        if (StudFlow.subscription && StudFlow.subscription.cancel) {
            await StudFlow.subscription.cancel();
        }

        // 4. Supprimer compte auth Supabase
        if (StudFlow.auth && StudFlow.auth.deleteAccount) {
            await StudFlow.auth.deleteAccount();
        }

        // 5. Nettoyer localStorage
        var keysToKeep = []; // rien a garder
        var allKeys = Object.keys(localStorage);
        allKeys.forEach(function(key) {
            if (key.startsWith('studflow_') || key.startsWith('sf_')) {
                localStorage.removeItem(key);
            }
        });

        // 6. Vider tout le localStorage StudFlow
        localStorage.clear();

        // 7. Rediriger vers page d'accueil
        alert('Ton compte et toutes tes donnees ont ete supprimes.');
        window.location.href = '/';
        window.location.reload();

    } catch (err) {
        alert('Erreur lors de la suppression. Contacte le support : [EMAIL]');
        console.error('Delete account error:', err);
    }
}
```

### C. Durees de conservation (nettoyage automatique)

```javascript
// A appeler au demarrage de l'app (dans DOMContentLoaded)
function cleanupExpiredData() {
    var now = Date.now();

    // Coach chat : 90 jours
    var chatData = StudFlow.storage.loadData('coachChat', { messages: [] });
    var ninetyDays = 90 * 24 * 60 * 60 * 1000;
    if (chatData.messages && chatData.messages.length > 0) {
        chatData.messages = chatData.messages.filter(function(msg) {
            return (now - msg.timestamp) < ninetyDays;
        });
        StudFlow.storage.saveData('coachChat', chatData);
    }

    // Coach message count : 30 jours
    var msgCount = StudFlow.storage.loadData('coachMsgCount', { date: '' });
    if (msgCount.date) {
        var msgDate = new Date(msgCount.date);
        if ((now - msgDate.getTime()) > 30 * 24 * 60 * 60 * 1000) {
            StudFlow.storage.saveData('coachMsgCount', { date: '', count: 0 });
        }
    }

    // Capsule tracking : 1 an
    var tracking = StudFlow.storage.loadData('capsuleTracking', {});
    var oneYear = 365 * 24 * 60 * 60 * 1000;
    var changed = false;
    Object.keys(tracking).forEach(function(id) {
        if (tracking[id].lastViewed && (now - tracking[id].lastViewed) > oneYear) {
            delete tracking[id];
            changed = true;
        }
    });
    if (changed) StudFlow.storage.saveData('capsuleTracking', tracking);
}
```

### D. Ajouts dans index.html (section Parametres)

```html
<!-- Apres la section "Donnees" existante -->
<div class="settings-section">
    <h3>Mes donnees (RGPD)</h3>
    <p style="color: var(--text-muted); font-size: 0.85rem; margin-bottom: 1rem;">
        Toutes tes donnees sont stockees localement. Tu peux les exporter ou supprimer ton compte a tout moment.
    </p>
    <div style="display:flex;flex-direction:column;gap:8px;">
        <button class="breathing-btn secondary" onclick="exportUserData()">
            📥 Exporter mes donnees (JSON)
        </button>
        <button class="breathing-btn secondary" onclick="deleteUserAccount()" style="color:#ef4444;border-color:#ef4444;">
            🗑️ Supprimer mon compte
        </button>
    </div>
    <p style="color:var(--text-dim);font-size:0.75rem;margin-top:0.5rem;">
        <a href="#privacy" style="color:var(--accent-light);">Politique de confidentialite</a>
    </p>
</div>
```

---

## 5. SOUS-TRAITANTS — MENTIONS OBLIGATOIRES

### Registre des sous-traitants (Article 28 RGPD)

#### Supabase (Supabase Inc.)
- **Role** : Hebergement base de donnees, authentification
- **Donnees traitees** : Email, hash mot de passe, UUID, donnees de progression synchronisees
- **Localisation** : EU (AWS eu-central-1, Francfort)
- **Garanties** : SOC2 Type II, DPA disponible (https://supabase.com/legal/dpa)
- **Contact DPO** : privacy@supabase.io
- **Action requise** : Signer le DPA Supabase (formulaire en ligne, 2 minutes)

#### Stripe (Stripe Inc.)
- **Role** : Traitement des paiements, gestion abonnements
- **Donnees traitees** : Email, Stripe Customer ID, donnees de carte (jamais transmises a StudFlow)
- **Localisation** : US + EU (donnees cartes UE traitees en UE)
- **Garanties** : PCI DSS Level 1, SOC2, clauses contractuelles types pour transferts hors UE
- **Contact DPO** : privacy@stripe.com
- **Action requise** : Le DPA Stripe est automatiquement accepte dans les conditions d'utilisation

#### Groq (Groq Inc.)
- **Role** : Inference LLM pour le Coach IA (optionnel)
- **Donnees traitees** : Messages utilisateur envoyes au LLM (pas de stockage cote Groq pour les API keys utilisateur)
- **Localisation** : US
- **Garanties** : Pas de retention des prompts pour l'entrainement (politique API), traitement en temps reel uniquement
- **Contact** : support@groq.com
- **Action requise** :
  - Verifier les CGU Groq API pour confirmer la non-retention
  - Documenter que le traitement est active par consentement utilisateur (opt-in via cle API)
  - Considerer un avertissement dans l'UI : "Tes messages sont envoyes a un serveur externe pour traitement"

### Mention dans l'app

Ajouter un avertissement visible quand l'utilisateur entre sa cle Groq :

```html
<p class="settings-hint" style="color:var(--sun);font-size:0.78rem;margin-top:0.5rem;">
    ⚠️ En activant l'IA, tes messages Coach sont envoyes aux serveurs Groq (US) pour traitement.
    Groq ne conserve pas tes messages. <a href="#privacy" style="color:var(--accent-light);">En savoir plus</a>
</p>
```

---

## 6. CHECKLIST AVANT LANCEMENT PUBLIC

### Obligatoire (bloquant)

- [ ] **Politique de confidentialite** integree dans l'app (page ou modale accessible)
- [ ] **Mentions legales** : nom editeur, adresse, email contact, hebergeur
- [ ] **DPA Supabase** signe (formulaire en ligne)
- [ ] **Verification d'age** : checkbox "J'ai 15 ans ou plus, ou j'ai l'accord de mes parents" a l'inscription
- [ ] **Export donnees** : bouton fonctionnel dans Parametres
- [ ] **Suppression compte** : bouton fonctionnel dans Parametres
- [ ] **Avertissement Groq** : message visible quand la cle API est saisie
- [ ] **Cookie** : verifier qu'aucun cookie tiers n'est depose (DevTools → Application → Cookies)
- [ ] **HTTPS** : verifier que le site est servi exclusivement en HTTPS

### Recommande (non bloquant pour beta)

- [ ] **Registre des traitements** (Article 30) : tableau interne documentant tous les traitements — ce document peut servir de base
- [ ] **Nettoyage automatique** : cleanupExpiredData() appele au demarrage
- [ ] **Consentement diagnostic** : ajouter un ecran de consentement avant le diagnostic psychologique ("Ces questions servent a adapter tes conseils. Tes reponses restent sur ton appareil.")
- [ ] **Notification changement politique** : mecanisme pour informer les utilisateurs existants
- [ ] **Adresse email DPO** : creer une adresse dediee (ex: privacy@studflow.app)
- [ ] **Bandeau consentement Groq** : si des cookies sont ajoutes dans le futur, prevoir le mecanisme

### A faire plus tard (croissance)

- [ ] Analyse d'impact (AIPD/DPIA) si plus de 5000 utilisateurs mineurs
- [ ] Nomination d'un DPO si obligation (pas obligatoire pour startup solo avec < 250 employes et traitement non systematique a grande echelle)
- [ ] Audit de securite annuel
- [ ] Journalisation des acces aux donnees
- [ ] Procedure de notification de violation de donnees (72h CNIL)

---

## RESUME POUR STARTUP SOLO

| Priorite | Action | Effort | Quand |
|----------|--------|--------|-------|
| P0 | Politique de confidentialite dans l'app | 1h | Avant beta |
| P0 | Mentions legales | 30min | Avant beta |
| P0 | DPA Supabase (formulaire en ligne) | 5min | Avant beta |
| P0 | Bouton export donnees | 2h code | Avant beta |
| P0 | Bouton suppression compte | 2h code | Avant beta |
| P0 | Checkbox age a l'inscription | 30min | Avant beta |
| P0 | Avertissement Groq dans parametres | 15min | Avant beta |
| P1 | Nettoyage automatique donnees expirees | 1h code | Semaine 1 |
| P1 | Consentement explicite diagnostic | 30min | Semaine 1 |
| P2 | Registre des traitements (ce document) | Deja fait | - |
| P2 | Procedure violation donnees | 1h doc | Mois 1 |

**Effort total P0 : ~6h30** — faisable en une journee.
