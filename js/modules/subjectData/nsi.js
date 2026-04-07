// nsi.js — Donnees NSI Terminale (Numerique et Sciences Informatiques)
// Format pedagogique adapte dys/TSA : phrases courtes, exemples concrets, mots difficiles expliques
(function() {
    if (!window.StudFlow || !window.StudFlow.subjects) return;

    window.StudFlow.subjects.register({
        id: 'nsi',
        name: 'NSI',
        icon: '\uD83D\uDCBB',
        color: 'accent',
        sections: [

            // ================================================================
            // SECTION 1 : STRUCTURES DE DONNEES
            // ================================================================
            {
                id: 'structures-donnees',
                title: 'Structures de donnees',
                icon: '\uD83D\uDDC2\uFE0F',
                content: '<h3>Les structures de donnees au programme</h3>'
                    + '<ul>'
                    + '<li><strong>Listes, piles, files</strong> : stocker et organiser des donnees</li>'
                    + '<li><strong>Arbres et graphes</strong> : representer des relations complexes</li>'
                    + '<li><strong>Dictionnaires</strong> : associer une cle a une valeur</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'C\'est quoi une PILE (stack) ?', answer: 'Une pile = une structure ou on empile des elements les uns sur les autres. Le DERNIER pose est le PREMIER retire. On dit LIFO = Last In, First Out. Comme une pile d\'assiettes : tu poses dessus, tu prends dessus. Operations : empiler (push), depiler (pop), sommet (top). Exemple : le bouton "annuler" (Ctrl+Z) utilise une pile — il annule la DERNIERE action. En gros : pile = dernier arrive, premier sorti. Mots difficiles : "LIFO" = Last In, First Out.' },
                    { question: 'C\'est quoi une FILE (queue) ?', answer: 'Une file = une structure ou les elements font la QUEUE. Le PREMIER arrive est le PREMIER servi. On dit FIFO = First In, First Out. Comme une file d\'attente au cinema : le premier arrive est le premier servi. Operations : enfiler (enqueue), defiler (dequeue). Exemple : une imprimante traite les documents dans l\'ORDRE d\'arrivee. En gros : file = premier arrive, premier sorti. Le contraire de la pile.' },
                    { question: 'C\'est quoi un ARBRE ?', answer: 'Un arbre = une structure ou chaque element (NOEUD) peut avoir des "enfants." Le noeud du haut = la RACINE. Les noeuds sans enfants = les FEUILLES. Un arbre BINAIRE = chaque noeud a au maximum 2 enfants (gauche et droite). Exemple : l\'arborescence de fichiers sur ton ordinateur (dossiers → sous-dossiers → fichiers). En gros : un arbre organise des donnees de facon HIERARCHIQUE (du general au particulier). Mots difficiles : "noeud" = un element de l\'arbre. "Feuille" = un noeud sans enfant.' },
                    { question: 'C\'est quoi un GRAPHE ?', answer: 'Un graphe = des SOMMETS (points) relies par des ARETES (liens). Contrairement a un arbre, un graphe peut avoir des BOUCLES (un chemin qui revient au depart). ORIENTE = les liens ont un sens (A → B mais pas B → A). NON ORIENTE = les liens vont dans les deux sens. PONDERE = les liens ont un poids (distance, cout). Exemple : un reseau social (les personnes = sommets, les amities = aretes). En gros : un graphe represente des RELATIONS entre des elements.' },
                    { question: 'C\'est quoi un DICTIONNAIRE ?', answer: 'Un dictionnaire = une structure qui associe une CLE a une VALEUR. En Python : {\"nom\": \"Ali\", \"age\": 17, \"classe\": \"Terminale\"}. La cle \"nom\" donne la valeur \"Ali\". Acces TRES RAPIDE (O(1) en moyenne). Pas d\'ordre : les elements ne sont pas tries. Exemple : un annuaire (nom → numero de telephone). En gros : un dictionnaire = un tableau avec des etiquettes au lieu de numeros. Mots difficiles : "O(1)" = acces instantane, quelle que soit la taille du dictionnaire.' },
                    { question: 'C\'est quoi un arbre binaire de recherche (ABR) ?', answer: 'Un ABR = un arbre binaire TRIE. Regle : pour chaque noeud, tout ce qui est a GAUCHE est PLUS PETIT, tout ce qui est a DROITE est PLUS GRAND. Exemple : racine = 10, gauche = 5, droite = 15. Pour chercher 7 : je vais a gauche (7 < 10), puis a droite (7 > 5). Recherche RAPIDE : O(log n) au lieu de O(n). En gros : un ABR permet de chercher un element TRES vite en eliminant la moitie des donnees a chaque etape.' },
                    { question: 'Comment parcourir un arbre ?', answer: 'Trois facons de parcourir un arbre binaire : 1) PREFIXE (racine, gauche, droite) : on traite la racine EN PREMIER. 2) INFIXE (gauche, racine, droite) : on traite la racine AU MILIEU. Dans un ABR, ca donne les elements TRIES. 3) SUFFIXE (gauche, droite, racine) : on traite la racine EN DERNIER. En gros : meme arbre, 3 ordres differents. Au Bac, il faut savoir les 3.' },
                    { question: 'C\'est quoi la LISTE CHAINEE ?', answer: 'Une liste chainee = chaque element contient une VALEUR et un POINTEUR vers l\'element SUIVANT. Contrairement a un tableau, les elements ne sont PAS cotes a cotes en memoire. Avantage : inserer ou supprimer un element est RAPIDE (on change juste le pointeur). Inconvenient : acceder au 100e element est LENT (il faut parcourir les 99 premiers). En gros : une liste chainee = une chaine ou chaque maillon pointe vers le suivant.' }
                ],
                quiz: [
                    { question: 'Une pile fonctionne en :', options: ['FIFO', 'LIFO', 'LILO', 'FILO'], correctIndex: 1, explanation: 'LIFO = Last In, First Out. Le dernier element empile est le premier depile.' },
                    { question: 'Une file fonctionne en :', options: ['LIFO', 'FIFO', 'LILO', 'FILO'], correctIndex: 1, explanation: 'FIFO = First In, First Out. Le premier element enfile est le premier defile.' },
                    { question: 'Dans un ABR, les elements a gauche sont :', options: ['Plus grands', 'Plus petits', 'Egaux', 'Non tries'], correctIndex: 1, explanation: 'Dans un ABR, tout ce qui est a gauche d\'un noeud est plus petit, tout ce qui est a droite est plus grand.' },
                    { question: 'Un graphe se distingue d\'un arbre car il peut avoir :', options: ['Des noeuds', 'Des boucles', 'Des feuilles', 'Une racine'], correctIndex: 1, explanation: 'Un graphe peut contenir des cycles (boucles). Un arbre est un graphe SANS cycle.' },
                    { question: 'Le parcours INFIXE d\'un ABR donne les elements :', options: ['Dans le desordre', 'Tries par ordre croissant', 'De la racine aux feuilles', 'Des feuilles a la racine'], correctIndex: 1, explanation: 'Le parcours infixe (gauche, racine, droite) d\'un ABR donne les elements dans l\'ordre croissant.' },
                    { question: 'Un dictionnaire Python associe :', options: ['Un index a une valeur', 'Une cle a une valeur', 'Un type a une variable', 'Une fonction a un resultat'], correctIndex: 1, explanation: 'Un dictionnaire associe des CLES a des VALEURS : {\"cle\": \"valeur\"}. L\'acces se fait par la cle.' }
                ]
            },

            // ================================================================
            // SECTION 2 : ALGORITHMIQUE
            // ================================================================
            {
                id: 'algorithmique',
                title: 'Algorithmique',
                icon: '\u2699\uFE0F',
                content: '<h3>Les algorithmes au programme</h3>',
                flashcards: [
                    { question: 'C\'est quoi la RECURSIVITE ?', answer: 'Un algorithme RECURSIF = un algorithme qui S\'APPELLE LUI-MEME. Il faut : 1) Un CAS DE BASE (quand on s\'arrete). 2) Un CAS RECURSIF (on se rappelle avec un probleme plus petit). Exemple : factorielle. fact(5) = 5 × fact(4) = 5 × 4 × fact(3)... jusqu\'a fact(1) = 1. En Python : def fact(n): return 1 if n <= 1 else n * fact(n-1). En gros : la recursivite = resoudre un gros probleme en le decoupant en versions plus petites de lui-meme.' },
                    { question: 'C\'est quoi "diviser pour regner" ?', answer: 'Un PRINCIPE algorithmique : 1) DIVISER le probleme en sous-problemes plus petits. 2) RESOUDRE chaque sous-probleme (recursivement). 3) COMBINER les solutions. Exemple : TRI FUSION. Pour trier [5,2,8,1] : diviser en [5,2] et [8,1]. Trier chaque moitie : [2,5] et [1,8]. Fusionner : [1,2,5,8]. Complexite : O(n log n) = RAPIDE. En gros : c\'est plus facile de resoudre plein de petits problemes qu\'un gros.' },
                    { question: 'C\'est quoi la complexite d\'un algorithme ?', answer: 'La complexite = combien de TEMPS ou de MEMOIRE un algorithme utilise quand la taille des donnees AUGMENTE. On note avec le grand O : O(1) = instantane (acceder a un element d\'un tableau). O(n) = lineaire (parcourir une liste). O(n²) = quadratique (deux boucles imbriquees). O(log n) = logarithmique (recherche dichotomique). O(n log n) = tri fusion. En gros : O(1) = genial. O(n²) = lent. Plus c\'est petit, mieux c\'est.' },
                    { question: 'C\'est quoi la recherche DICHOTOMIQUE ?', answer: 'Chercher un element dans une liste TRIEE en coupant en DEUX a chaque etape. Exemple : chercher 7 dans [1,3,5,7,9,11]. Milieu = 5. 7 > 5 → on cherche a droite [7,9,11]. Milieu = 9. 7 < 9 → on cherche a gauche [7]. Trouve ! Complexite : O(log n) = tres rapide. CONDITION : la liste doit etre TRIEE. En gros : au lieu de regarder chaque element un par un, on elimine la MOITIE a chaque etape.' },
                    { question: 'C\'est quoi le TRI par INSERTION ?', answer: 'On parcourt la liste de gauche a droite. Pour chaque element, on l\'INSERE a la bonne place dans la partie deja triee. Comme quand tu tries des cartes a jouer dans ta main : tu prends une carte et tu la mets au bon endroit. Complexite : O(n²) dans le pire cas. MAIS rapide si la liste est presque triee. En gros : simple, intuitif, mais lent pour de grandes listes.' },
                    { question: 'C\'est quoi le TRI FUSION ?', answer: 'Utilise "diviser pour regner." 1) DIVISER la liste en deux moities. 2) TRIER chaque moitie (recursivement). 3) FUSIONNER les deux moities triees. Complexite : O(n log n) TOUJOURS (pire et meilleur cas). C\'est plus rapide que le tri par insertion pour les grandes listes. Inconvenient : utilise de la memoire supplementaire. En gros : tri fusion = diviser, trier, fusionner. Rapide et fiable.' },
                    { question: 'C\'est quoi la PROGRAMMATION DYNAMIQUE ?', answer: 'Quand un probleme recursif recalcule les MEMES sous-problemes plusieurs fois, on STOCKE les resultats pour ne pas les recalculer. Exemple : Fibonacci recursif recalcule fib(3) plein de fois. Avec la programmation dynamique, on le calcule UNE fois et on le garde en memoire. Ca passe de O(2^n) a O(n). En gros : au lieu de refaire le meme calcul 100 fois, tu le notes et tu le reutilises. Mots difficiles : "memoisation" = stocker les resultats deja calcules.' },
                    { question: 'C\'est quoi un algorithme GLOUTON ?', answer: 'Un algorithme glouton fait le MEILLEUR choix LOCAL a chaque etape, en esperant que ca donne le meilleur resultat GLOBAL. Exemple : rendu de monnaie. Pour rendre 7€ avec des pieces de 5, 2, 1 : prend le plus gros d\'abord → 5 + 2 = 7€. Ca marche SOUVENT mais PAS TOUJOURS. Contre-exemple : pieces de 6, 4, 1 pour rendre 8. Glouton : 6+1+1 = 3 pieces. Optimal : 4+4 = 2 pieces. En gros : glouton = le choix le plus evident a chaque etape. Rapide mais pas toujours optimal.' }
                ],
                quiz: [
                    { question: 'La recursivite necessite toujours :', options: ['Une boucle for', 'Un cas de base pour s\'arreter', 'Un dictionnaire', 'Deux fonctions'], correctIndex: 1, explanation: 'Sans cas de base, la recursion ne s\'arrete jamais (boucle infinie → crash).' },
                    { question: 'La complexite O(log n) correspond a :', options: ['Parcourir toute la liste', 'Eliminer la moitie a chaque etape', 'Deux boucles imbriquees', 'Un acces instantane'], correctIndex: 1, explanation: 'O(log n) = on divise par 2 a chaque etape (ex : recherche dichotomique).' },
                    { question: 'Le tri fusion a une complexite de :', options: ['O(n)', 'O(n²)', 'O(n log n)', 'O(log n)'], correctIndex: 2, explanation: 'Le tri fusion est toujours en O(n log n), que la liste soit triee ou non.' },
                    { question: 'La programmation dynamique evite de :', options: ['Utiliser de la memoire', 'Recalculer les memes sous-problemes', 'Utiliser la recursion', 'Trier les donnees'], correctIndex: 1, explanation: 'La programmation dynamique stocke les resultats deja calcules (memoisation) pour eviter les calculs redondants.' },
                    { question: 'Un algorithme glouton :', options: ['Donne toujours la solution optimale', 'Fait le meilleur choix local a chaque etape', 'Est toujours recursif', 'A une complexite O(n²)'], correctIndex: 1, explanation: 'L\'algorithme glouton choisit le meilleur choix immediat. Rapide mais pas toujours optimal.' },
                    { question: 'La recherche dichotomique necessite :', options: ['Une liste quelconque', 'Une liste triee', 'Un arbre', 'Un graphe'], correctIndex: 1, explanation: 'La dichotomie ne fonctionne que sur des donnees TRIEES car elle compare l\'element cherche au milieu.' }
                ]
            },

            // ================================================================
            // SECTION 3 : BASES DE DONNEES ET SQL
            // ================================================================
            {
                id: 'bases-donnees',
                title: 'Bases de donnees et SQL',
                icon: '\uD83D\uDDC4\uFE0F',
                content: '<h3>Le modele relationnel et les requetes SQL</h3>',
                flashcards: [
                    { question: 'C\'est quoi une base de donnees relationnelle ?', answer: 'Une base de donnees = un ensemble organise de DONNEES stockees dans des TABLES. Chaque table a des COLONNES (attributs) et des LIGNES (enregistrements). Exemple : table "eleves" avec les colonnes (id, nom, prenom, classe, moyenne). RELATIONNELLE = les tables peuvent etre RELIEES entre elles par des cles. En gros : une base de donnees = un gros tableau Excel, mais en mieux (plus rapide, plus fiable, partageable).' },
                    { question: 'C\'est quoi une CLE PRIMAIRE ?', answer: 'La cle primaire = la colonne qui identifie de facon UNIQUE chaque ligne. Exemple : le numero d\'etudiant. Deux etudiants peuvent avoir le meme nom, mais JAMAIS le meme numero. En SQL, on la declare : CREATE TABLE eleves (id INTEGER PRIMARY KEY, nom TEXT, ...). En gros : la cle primaire = le numero d\'identite de chaque ligne. UNIQUE et OBLIGATOIRE.' },
                    { question: 'C\'est quoi une CLE ETRANGERE ?', answer: 'La cle etrangere = une colonne qui fait REFERENCE a la cle primaire d\'UNE AUTRE table. Exemple : table "notes" avec (id_note, id_eleve, matiere, note). id_eleve est une cle etrangere → elle pointe vers la table "eleves." Ca permet de RELIER les tables entre elles. En gros : la cle etrangere = le lien entre deux tables. C\'est ce qui rend la base "relationnelle."' },
                    { question: 'C\'est quoi SELECT en SQL ?', answer: 'SELECT = la commande pour LIRE des donnees. SELECT nom, prenom FROM eleves → affiche les noms et prenoms. SELECT * FROM eleves → affiche TOUT. SELECT nom FROM eleves WHERE classe = "Terminale" → affiche les noms des Terminales. SELECT nom FROM eleves ORDER BY moyenne DESC → trie par moyenne decroissante. En gros : SELECT = "montre-moi ces donnees."' },
                    { question: 'C\'est quoi INSERT, UPDATE, DELETE ?', answer: 'INSERT = ajouter une ligne. INSERT INTO eleves VALUES (1, "Dupont", "Marie", "TG1", 15.5). UPDATE = modifier. UPDATE eleves SET moyenne = 16 WHERE id = 1. DELETE = supprimer. DELETE FROM eleves WHERE id = 1. ATTENTION : DELETE sans WHERE supprime TOUT. En gros : INSERT = ajouter, UPDATE = modifier, DELETE = supprimer.' },
                    { question: 'C\'est quoi une JOINTURE ?', answer: 'Une jointure = combiner les donnees de 2 TABLES en utilisant une cle. SELECT eleves.nom, notes.note FROM eleves JOIN notes ON eleves.id = notes.id_eleve. Ca affiche le nom de l\'eleve A COTE de sa note. Sans jointure, les donnees sont separees dans deux tables. En gros : la jointure = coller deux tables ensemble grace a un lien commun (la cle).' },
                    { question: 'C\'est quoi GROUP BY et les fonctions d\'agregation ?', answer: 'GROUP BY = regrouper les lignes par une colonne. Fonctions : COUNT (compter), SUM (additionner), AVG (moyenne), MAX, MIN. Exemple : SELECT classe, AVG(moyenne) FROM eleves GROUP BY classe → donne la moyenne PAR classe. HAVING = filtrer les groupes : ... HAVING AVG(moyenne) > 12 → seulement les classes au-dessus de 12. En gros : GROUP BY = faire des stats par groupe.' }
                ],
                quiz: [
                    { question: 'Une cle primaire est :', options: ['Optionnelle', 'Unique et obligatoire pour chaque ligne', 'Toujours un nombre', 'Partagee entre plusieurs tables'], correctIndex: 1, explanation: 'La cle primaire identifie de facon UNIQUE chaque enregistrement. Deux lignes ne peuvent pas avoir la meme cle primaire.' },
                    { question: 'SELECT * FROM eleves WHERE moyenne > 15 affiche :', options: ['Tous les eleves', 'Les eleves avec une moyenne superieure a 15', 'La moyenne de tous les eleves', 'Rien'], correctIndex: 1, explanation: 'SELECT * = toutes les colonnes. WHERE moyenne > 15 = filtre les eleves dont la moyenne depasse 15.' },
                    { question: 'Une jointure permet de :', options: ['Supprimer une table', 'Combiner les donnees de 2 tables', 'Trier une table', 'Creer une nouvelle base'], correctIndex: 1, explanation: 'La jointure (JOIN ... ON) combine les lignes de deux tables en utilisant une cle commune.' },
                    { question: 'DELETE FROM eleves (sans WHERE) :', options: ['Ne fait rien', 'Supprime la premiere ligne', 'Supprime TOUTES les lignes', 'Affiche un message d\'erreur'], correctIndex: 2, explanation: 'ATTENTION : DELETE sans WHERE supprime TOUT le contenu de la table. Toujours mettre un WHERE pour cibler.' },
                    { question: 'AVG(moyenne) est une fonction :', options: ['De tri', 'D\'agregation (calcule la moyenne)', 'De jointure', 'De creation'], correctIndex: 1, explanation: 'AVG = average (moyenne). C\'est une fonction d\'agregation utilisee avec GROUP BY.' }
                ]
            },

            // ================================================================
            // SECTION 4 : RESEAUX ET PROTOCOLES
            // ================================================================
            {
                id: 'reseaux',
                title: 'Reseaux et protocoles',
                icon: '\uD83C\uDF10',
                content: '<h3>Comment les ordinateurs communiquent</h3>',
                flashcards: [
                    { question: 'C\'est quoi le modele OSI / TCP-IP ?', answer: 'Le modele en COUCHES explique comment les donnees voyagent sur Internet. TCP/IP a 4 couches : 1) ACCES RESEAU (cables, Wi-Fi = le support physique). 2) INTERNET (IP = l\'adresse de destination). 3) TRANSPORT (TCP = verifie que tout arrive, UDP = plus rapide mais sans verification). 4) APPLICATION (HTTP, SMTP, DNS = ce que tu utilises). En gros : chaque couche fait son travail et passe au suivant. Comme une lettre : tu ecris (appli) → tu mets dans une enveloppe (transport) → tu mets l\'adresse (IP) → tu donnes au facteur (reseau).' },
                    { question: 'C\'est quoi une adresse IP ?', answer: 'L\'adresse IP = le NUMERO d\'identite d\'un appareil sur un reseau. IPv4 : 4 nombres de 0 a 255, separes par des points. Exemple : 192.168.1.1. IPv6 : plus long (128 bits), car on manque d\'adresses IPv4. IP PUBLIQUE = celle vue par Internet. IP PRIVEE = celle de ton reseau local (192.168.x.x). En gros : l\'adresse IP = l\'adresse postale de ton ordinateur sur Internet.' },
                    { question: 'C\'est quoi le protocole TCP ?', answer: 'TCP (Transmission Control Protocol) = le protocole qui VERIFIE que les donnees arrivent BIEN. Il decoupe les donnees en PAQUETS, les numerote, et verifie que tout est arrive. Si un paquet manque, il le RENVOIE. C\'est FIABLE mais un peu plus LENT. Utilise pour : le web (HTTP), les mails (SMTP), les fichiers (FTP). En gros : TCP = le coursier qui te fait SIGNER a la reception.' },
                    { question: 'C\'est quoi le routage ?', answer: 'Le routage = comment un paquet de donnees trouve son CHEMIN sur Internet. Les ROUTEURS sont les carrefours : ils lisent l\'adresse de destination et envoient le paquet dans la bonne direction. Chaque routeur a une TABLE DE ROUTAGE (comme un GPS). Protocoles : RIP (compte les sauts = le plus court en nombre de routeurs) et OSPF (calcule le chemin le plus RAPIDE). En gros : le routage = le GPS d\'Internet.' },
                    { question: 'C\'est quoi HTTP et HTTPS ?', answer: 'HTTP (HyperText Transfer Protocol) = le protocole du WEB. Quand tu tapes une URL, ton navigateur envoie une REQUETE HTTP au serveur, qui repond avec la page. HTTPS = HTTP + chiffrement (SSL/TLS). Les donnees sont CRYPTEES entre toi et le serveur. Le cadenas dans la barre d\'adresse = HTTPS. En gros : HTTP = carte postale (tout le monde peut lire). HTTPS = lettre scellee (seul le destinataire peut lire).' },
                    { question: 'C\'est quoi le DNS ?', answer: 'DNS (Domain Name System) = le "annuaire" d\'Internet. Tu tapes "google.com" → le DNS traduit en adresse IP (142.250.74.206). Sans DNS, tu devrais taper des numeros pour chaque site. Les serveurs DNS sont hierarchiques : racine → .com/.fr → google.com. En gros : DNS = traduire les noms de sites en adresses IP. C\'est l\'annuaire telephonique d\'Internet.' }
                ],
                quiz: [
                    { question: 'TCP garantit :', options: ['La vitesse maximale', 'Que tous les paquets arrivent sans erreur', 'L\'anonymat', 'La compression des donnees'], correctIndex: 1, explanation: 'TCP verifie que chaque paquet est bien arrive et renvoie ceux qui manquent. Fiable mais plus lent qu\'UDP.' },
                    { question: 'Une adresse IPv4 est composee de :', options: ['2 nombres', '4 nombres de 0 a 255', '6 nombres', '8 nombres'], correctIndex: 1, explanation: 'IPv4 = 4 octets separes par des points (ex : 192.168.1.1). Chaque nombre va de 0 a 255.' },
                    { question: 'Le DNS sert a :', options: ['Chiffrer les donnees', 'Traduire un nom de domaine en adresse IP', 'Bloquer les virus', 'Accelerer Internet'], correctIndex: 1, explanation: 'Le DNS traduit "google.com" en adresse IP (142.250.74.206) pour que les routeurs puissent acheminer les paquets.' },
                    { question: 'HTTPS est plus securise que HTTP car :', options: ['Il est plus rapide', 'Les donnees sont chiffrees', 'Il utilise un autre reseau', 'Il bloque les publicites'], correctIndex: 1, explanation: 'HTTPS chiffre les echanges avec SSL/TLS. Personne ne peut lire les donnees entre toi et le serveur.' },
                    { question: 'Le routage c\'est :', options: ['La creation d\'un reseau', 'Le choix du chemin pour acheminer un paquet', 'La connexion Wi-Fi', 'La mise a jour du systeme'], correctIndex: 1, explanation: 'Les routeurs choisissent le meilleur chemin pour acheminer chaque paquet vers sa destination.' }
                ]
            },

            // ================================================================
            // SECTION 5 : ARCHITECTURES ET SYSTEMES
            // ================================================================
            {
                id: 'architectures',
                title: 'Architectures et systemes d\'exploitation',
                icon: '\uD83D\uDD27',
                content: '<h3>Comment fonctionne un ordinateur</h3>',
                flashcards: [
                    { question: 'C\'est quoi le modele de Von Neumann ?', answer: 'L\'architecture de TOUS les ordinateurs modernes. 4 composants : 1) L\'UNITE DE CONTROLE (chef d\'orchestre, lit les instructions). 2) L\'UAL (Unite Arithmetique et Logique, fait les calculs). 3) La MEMOIRE (stocke les donnees ET les programmes). 4) Les ENTREES/SORTIES (clavier, ecran, souris). Principe cle : le programme est STOCKE en memoire (pas cable physiquement). En gros : Von Neumann = le plan de base de tout ordinateur depuis 1945.' },
                    { question: 'C\'est quoi un processus ?', answer: 'Un PROCESSUS = un programme EN COURS d\'execution. Ton navigateur = un processus. Ton lecteur de musique = un autre processus. Le systeme d\'exploitation GERE les processus : il decide lequel utilise le processeur, la memoire, etc. ORDONNANCEMENT = comment l\'OS repartit le temps processeur entre les processus (tour a tour, priorite...). En gros : un processus = un programme qui tourne. L\'OS fait tourner plusieurs processus "en meme temps" (en alternant tres vite).' },
                    { question: 'C\'est quoi Linux ?', answer: 'LINUX = un systeme d\'exploitation LIBRE et GRATUIT. Cree par Linus Torvalds en 1991. Utilise sur les SERVEURS (90% des serveurs web), les SMARTPHONES (Android = base Linux), les SUPERORDINATEURS. Le code source est OUVERT : tout le monde peut le lire, le modifier, le redistribuer. Ligne de commande : ls (lister), cd (changer de dossier), cat (lire un fichier), chmod (changer les droits). En gros : Linux = le systeme des pros et des serveurs. Gratuit et puissant.' },
                    { question: 'C\'est quoi le systeme binaire ?', answer: 'Les ordinateurs ne comprennent que le 0 et le 1. C\'est le systeme BINAIRE (base 2). Chaque 0 ou 1 = un BIT. 8 bits = un OCTET. Convertir : 13 en binaire = 1101 (car 8+4+0+1 = 13). Un octet peut representer 256 valeurs (0 a 255). En gros : tout dans un ordinateur (texte, images, musique) est code en 0 et 1.' },
                    { question: 'C\'est quoi un systeme sur puce (SoC) ?', answer: 'Un SoC = un PROCESSEUR + MEMOIRE + GPU + modem + capteurs... tout sur UNE SEULE puce. Exemples : Apple M1/M2 (Mac), Snapdragon (Android), A17 (iPhone). Avantage : compact, econome en energie, rapide (tout est proche). C\'est ce qui permet aux smartphones d\'etre si puissants dans un si petit format. En gros : SoC = un ordinateur entier miniaturise sur une seule puce.' }
                ],
                quiz: [
                    { question: 'Le modele de Von Neumann a ete propose en :', options: ['1920', '1945', '1970', '1990'], correctIndex: 1, explanation: 'John von Neumann propose ce modele en 1945. Il est encore la base de tous les ordinateurs actuels.' },
                    { question: '13 en binaire s\'ecrit :', options: ['1010', '1101', '1111', '1001'], correctIndex: 1, explanation: '13 = 8+4+1 = 1101 en binaire (1×8 + 1×4 + 0×2 + 1×1).' },
                    { question: 'Linux est utilise sur :', options: ['Uniquement les PC personnels', 'La majorite des serveurs web', 'Uniquement les Mac', 'Aucun appareil moderne'], correctIndex: 1, explanation: 'Environ 90% des serveurs web tournent sous Linux. Android (smartphones) est aussi base sur Linux.' },
                    { question: 'Un processus c\'est :', options: ['Un fichier stocke', 'Un programme en cours d\'execution', 'Un composant physique', 'Un cable reseau'], correctIndex: 1, explanation: 'Un processus = un programme qui tourne. Le systeme d\'exploitation gere l\'execution de tous les processus.' },
                    { question: 'Un octet contient :', options: ['4 bits', '8 bits', '16 bits', '32 bits'], correctIndex: 1, explanation: 'Un octet = 8 bits. Il peut representer 256 valeurs differentes (2^8 = 256).' }
                ]
            },

            // ================================================================
            // SECTION 6 : PROGRAMMATION PYTHON
            // ================================================================
            {
                id: 'python',
                title: 'Programmation Python',
                icon: '\uD83D\uDC0D',
                content: '<h3>Les concepts de programmation au Bac</h3>',
                flashcards: [
                    { question: 'C\'est quoi la POO (Programmation Orientee Objet) ?', answer: 'La POO = organiser son code autour d\'OBJETS. Un objet = des DONNEES (attributs) + des ACTIONS (methodes). On definit un MODELE (la classe) et on cree des EXEMPLAIRES (les instances). Exemple : classe Eleve avec attributs (nom, age) et methodes (se_presenter()). En Python : class Eleve: ... puis e = Eleve("Ali", 17). En gros : la POO = creer des "moules" (classes) pour fabriquer des objets.' },
                    { question: 'C\'est quoi une CLASSE et un OBJET ?', answer: 'CLASSE = le plan de construction (comme un plan de maison). OBJET = la maison construite a partir du plan. En Python : class Chien: def __init__(self, nom): self.nom = nom. def aboyer(self): return "Woof!". rex = Chien("Rex") → rex est un OBJET de la CLASSE Chien. rex.nom → "Rex". rex.aboyer() → "Woof!". En gros : la classe = le moule. L\'objet = le gateau fait avec le moule.' },
                    { question: 'C\'est quoi __init__ et self en Python ?', answer: '__init__ = la methode qui s\'execute AUTOMATIQUEMENT quand on cree un objet. C\'est le CONSTRUCTEUR. Elle initialise les attributs. self = reference a l\'objet LUI-MEME. self.nom = nom → "mon attribut nom prend la valeur du parametre nom." En gros : __init__ = la recette de fabrication. self = "moi, l\'objet qui est en train d\'etre cree."' },
                    { question: 'C\'est quoi l\'ENCAPSULATION ?', answer: 'L\'encapsulation = CACHER les details internes d\'un objet. L\'utilisateur n\'a pas besoin de savoir COMMENT ca marche, juste comment L\'UTILISER. En Python : on met un underscore devant les attributs prives (_solde). On cree des methodes pour y acceder (get_solde(), deposer()). Exemple : un compte bancaire. Tu peux deposer/retirer mais tu ne peux pas modifier le solde directement. En gros : encapsulation = proteger les donnees de l\'objet. On passe par des methodes, pas par les attributs directement.' },
                    { question: 'C\'est quoi la difference entre une liste et un tuple ?', answer: 'LISTE = modifiable (mutable). On peut ajouter, supprimer, changer des elements. Syntaxe : [1, 2, 3]. TUPLE = non modifiable (immutable). Une fois cree, on ne peut RIEN changer. Syntaxe : (1, 2, 3). Pourquoi un tuple ? Plus RAPIDE et plus SUR (pas de modification accidentelle). Utilise pour des donnees FIXES (coordonnees, date de naissance). En gros : liste = carnet (tu peux ecrire et effacer). Tuple = livre imprime (tu ne peux que lire).' },
                    { question: 'C\'est quoi une comprehension de liste ?', answer: 'Une facon COMPACTE de creer une liste en Python. Au lieu de : result = [] / for x in range(10): result.append(x**2) → on ecrit : result = [x**2 for x in range(10)]. Avec condition : [x for x in range(20) if x % 2 == 0] → liste des nombres pairs de 0 a 19. En gros : une ligne au lieu de trois. Plus elegant, plus lisible (une fois qu\'on a compris).' },
                    { question: 'C\'est quoi les TESTS (assert) ?', answer: 'Les tests verifient que ton code FONCTIONNE correctement. En Python : assert ma_fonction(2, 3) == 5. Si le resultat est 5 → rien ne se passe (c\'est bon). Si le resultat est different → ERREUR (AssertionError). Il faut tester : les cas NORMAUX, les cas LIMITES (0, vide, negatif), les cas ERREUR. En gros : tester = verifier AVANT que l\'utilisateur ne trouve le bug.' }
                ],
                quiz: [
                    { question: 'En POO, une classe est :', options: ['Un objet', 'Un modele pour creer des objets', 'Une variable', 'Une fonction'], correctIndex: 1, explanation: 'La classe est le PLAN. L\'objet est l\'INSTANCE creee a partir de ce plan.' },
                    { question: '__init__ en Python est :', options: ['Une methode pour supprimer un objet', 'Le constructeur qui initialise l\'objet', 'Une variable globale', 'Une methode de tri'], correctIndex: 1, explanation: '__init__ est le constructeur : il s\'execute automatiquement a la creation d\'un objet pour initialiser ses attributs.' },
                    { question: 'Un tuple est :', options: ['Modifiable', 'Non modifiable (immutable)', 'Un type de boucle', 'Une fonction'], correctIndex: 1, explanation: 'Un tuple est immutable : une fois cree, on ne peut plus modifier ses elements. Syntaxe : (1, 2, 3).' },
                    { question: '[x**2 for x in range(5)] donne :', options: ['[0, 1, 2, 3, 4]', '[0, 1, 4, 9, 16]', '[1, 4, 9, 16, 25]', '[0, 2, 4, 6, 8]'], correctIndex: 1, explanation: 'x**2 pour x de 0 a 4 : 0²=0, 1²=1, 2²=4, 3²=9, 4²=16.' },
                    { question: 'assert sert a :', options: ['Afficher un message', 'Verifier qu\'une condition est vraie (tester le code)', 'Creer une variable', 'Importer un module'], correctIndex: 1, explanation: 'assert verifie une condition. Si elle est fausse, le programme leve une erreur. C\'est un outil de TEST.' }
                ]
            }
        ]
    });
})();
