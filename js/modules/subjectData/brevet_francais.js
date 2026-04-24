// brevet_francais.js — Brevet Francais : Grammaire, Conjugaison, Orthographe, Comprehension, Figures de style, Methode
// Programme cycle 4 (3eme) — DNB
// Format pedagogique adapte dys/TSA : phrases courtes (max 12 mots), exemples concrets ados, mnemoniques
(function() {
    if (!window.StudFlow || !window.StudFlow.subjects) return;

    window.StudFlow.subjects.register({
        id: 'brevet_francais',
        name: 'Francais (Brevet)',
        icon: '\uD83D\uDCDD',
        color: 'accent',
        exam: 'brevet',
        sections: [

            // ================================================================
            // SECTION 1 : CLASSES GRAMMATICALES
            // ================================================================
            {
                id: 'classes-grammaticales',
                title: 'Classes grammaticales',
                icon: '\uD83C\uDFF7\uFE0F',
                content: '<h3>Classes grammaticales — La carte d\'identite des mots</h3>'
                    + '<ul>'
                    + '<li><strong>Nom</strong> : designe une chose, une personne, une idee</li>'
                    + '<li><strong>Verbe</strong> : exprime une action ou un etat</li>'
                    + '<li><strong>Adjectif</strong> : donne une qualite au nom</li>'
                    + '<li><strong>Adverbe</strong> : modifie un verbe, un adjectif ou un autre adverbe</li>'
                    + '<li><strong>Pronom</strong> : remplace un nom</li>'
                    + '<li><strong>Determinant</strong> : introduit un nom</li>'
                    + '<li><strong>Preposition</strong> : relie deux mots entre eux</li>'
                    + '<li><strong>Conjonction</strong> : relie des mots ou des propositions</li>'
                    + '</ul>',
                flashcards: [
                    // 1 — NOM
                    {
                        question: 'C\'est quoi un NOM ?',
                        answer: '🎯 Un nom designe une personne, un animal, une chose ou une idee.\n\nIl existe deux types de noms :\n- Nom COMMUN : chat, ecole, liberte.\n- Nom PROPRE : Paris, Marie, Instagram.\n\nLe nom a un GENRE (masculin ou feminin). Il a aussi un NOMBRE (singulier ou pluriel).\n\nEn gros : le nom, c\'est l\'etiquette qu\'on colle sur tout.\n\nMot difficile : "abstrait" = qu\'on ne peut pas toucher (la liberte, la peur).\n\n💡 Astuce dys : mets "un" ou "une" devant. Si ca marche, c\'est un nom ! "Une ecole" → oui. "Une manger" → non.\n\n📝 Piege Brevet : confondre nom propre et nom commun. Un nom propre prend TOUJOURS une majuscule.'
                    },
                    // 2 — VERBE
                    {
                        question: 'C\'est quoi un VERBE ?',
                        answer: '🎯 Le verbe exprime une ACTION ou un ETAT.\n\n- Action : manger, courir, ecrire, regarder.\n- Etat : etre, paraitre, sembler, devenir, rester.\n\nLe verbe se CONJUGUE. Il change selon la personne et le temps. C\'est le seul mot qui fait ca !\n\nEn gros : le verbe dit ce qu\'on FAIT ou ce qu\'on EST.\n\nMot difficile : "conjuguer" = changer la forme du verbe selon le temps et la personne.\n\n💡 Astuce dys : si tu peux mettre "ne... pas" autour, c\'est un verbe. "Il ne mange pas." → verbe !\n\n📝 Piege Brevet : ne pas confondre verbe d\'action et verbe d\'etat. "Il semble fatigue" → etat, pas action.'
                    },
                    // 3 — ADJECTIF
                    {
                        question: 'C\'est quoi un ADJECTIF ?',
                        answer: '🎯 L\'adjectif donne une QUALITE ou une PRECISION au nom.\n\nExemples : un GRAND arbre, une robe ROUGE, un film ENNUYEUX.\n\nL\'adjectif s\'accorde en genre et en nombre avec le nom. Grand → grande → grands → grandes.\n\nEn gros : l\'adjectif, c\'est le mot qui decrit le nom.\n\nMot difficile : "qualificatif" = qui donne une qualite. Adjectif qualificatif = adjectif qui decrit.\n\n💡 Astuce dys : pose la question "il est COMMENT ?" La reponse est souvent un adjectif. "Le chat est gros" → gros = adjectif.\n\n📝 Piege Brevet : confondre adjectif et adverbe. "Il court VITE" → vite modifie le verbe = adverbe, PAS adjectif.'
                    },
                    // 4 — ADVERBE
                    {
                        question: 'C\'est quoi un ADVERBE ?',
                        answer: '🎯 L\'adverbe modifie un verbe, un adjectif ou un autre adverbe. Il est INVARIABLE : il ne change jamais.\n\nExemples : Il mange LENTEMENT. Elle est TRES grande. Il parle TROP vite.\n\nTypes d\'adverbes :\n- Maniere : lentement, bien, mal, vite.\n- Temps : hier, demain, souvent, toujours.\n- Lieu : ici, la-bas, partout, dehors.\n- Quantite : beaucoup, peu, tres, trop.\n\nEn gros : l\'adverbe donne une precision. Il ne change JAMAIS de forme.\n\n💡 Astuce dys : beaucoup d\'adverbes finissent en -MENT. Lent → lenteMENT. Doux → douceMENT.\n\n📝 Piege Brevet : ecrire "lentement" avec un accord. JAMAIS ! L\'adverbe est toujours invariable.'
                    },
                    // 5 — PRONOM PERSONNEL
                    {
                        question: 'C\'est quoi un PRONOM PERSONNEL ?',
                        answer: '🎯 Le pronom personnel REMPLACE un nom. Il evite les repetitions.\n\nLes pronoms personnels sujets : je, tu, il, elle, on, nous, vous, ils, elles.\n\nLes pronoms personnels complements : me, te, le, la, lui, nous, vous, les, leur.\n\nExemple : "Marie mange. ELLE a faim." "Elle" remplace "Marie."\n\nEn gros : le pronom personnel = raccourci pour ne pas repeter un nom.\n\nMot difficile : "personnel" = qui indique la personne (1ere, 2e, 3e).\n\n💡 Astuce dys : "pro-nom" = "a la place du nom." Le pronom est un remplacant !\n\n📝 Piege Brevet : confondre "leur" pronom (devant verbe) et "leur" determinant (devant nom).'
                    },
                    // 6 — PRONOM POSSESSIF
                    {
                        question: 'C\'est quoi un PRONOM POSSESSIF ?',
                        answer: '🎯 Le pronom possessif REMPLACE un nom + son determinant possessif. Il indique a qui ca appartient.\n\nListe : le mien, le tien, le sien, le notre, le votre, le leur.\nFeminin : la mienne, la tienne, la sienne...\nPluriel : les miens, les tiens, les siens...\n\nExemple : "J\'ai mon stylo. Tu as LE TIEN ?" "Le tien" = ton stylo.\n\nEn gros : le pronom possessif dit "c\'est a moi / a toi / a lui".\n\n💡 Astuce dys : le pronom possessif a toujours un article devant (LE mien, LA tienne). Le determinant possessif n\'en a pas (MON stylo).\n\n📝 Piege Brevet : confondre "notre" (determinant) et "le notre" (pronom). Le pronom a un accent ET un article.'
                    },
                    // 7 — PRONOM DEMONSTRATIF
                    {
                        question: 'C\'est quoi un PRONOM DEMONSTRATIF ?',
                        answer: '🎯 Le pronom demonstratif MONTRE ou DESIGNE quelque chose. Il remplace un nom deja cite.\n\nListe : celui, celle, ceux, celles, ce, ceci, cela, ca.\n\nExemples :\n- "Tu veux quel gateau ? CELUI au chocolat."\n- "CEUX qui travaillent reussissent."\n- "CA m\'enerve !"\n\nEn gros : le pronom demonstratif = "ce truc-la" en version classe.\n\nMot difficile : "demonstratif" = qui montre (comme montrer du doigt).\n\n💡 Astuce dys : "celui / celle" sont toujours suivis de "qui", "que", "de" ou "-ci / -la."\n\n📝 Piege Brevet : confondre "ce" pronom ("ce QUE je veux") et "ce" determinant ("ce livre"). Devant un nom = determinant. Devant que/qui = pronom.'
                    },
                    // 8 — PRONOM RELATIF
                    {
                        question: 'C\'est quoi un PRONOM RELATIF ?',
                        answer: '🎯 Le pronom relatif introduit une proposition subordonnee relative. Il remplace un nom appele "antecedent."\n\nListe : qui, que, dont, ou, lequel, laquelle, lesquels.\n\nExemples :\n- "Le film QUI passe ce soir." (qui = sujet)\n- "Le film QUE j\'ai vu." (que = COD)\n- "Le film DONT je parle." (dont = COI)\n- "La ville OU j\'habite." (ou = lieu)\n\nEn gros : le pronom relatif relie deux phrases en une seule.\n\nMot difficile : "antecedent" = le nom que le pronom relatif remplace.\n\n💡 Astuce dys : QUI = sujet (QUI fait l\'action ?). QUE = COD (on fait QUOI ?). DONT = de (je parle DE quoi ?). OU = lieu/temps.\n\n📝 Piege Brevet : choisir entre "dont" et "que." Si le verbe se construit avec "de" → dont. "Parler DE" → dont.'
                    },
                    // 9 — DETERMINANT
                    {
                        question: 'C\'est quoi un DETERMINANT ?',
                        answer: '🎯 Le determinant se place DEVANT un nom. Il introduit le nom dans la phrase.\n\nTypes de determinants :\n- Articles : le, la, les, un, une, des.\n- Possessifs : mon, ton, son, notre, votre, leur.\n- Demonstratifs : ce, cet, cette, ces.\n- Indefinis : chaque, quelques, plusieurs, tout.\n- Numeraux : deux, trois, cent, mille.\n\nEn gros : pas de nom sans determinant ! C\'est son ticket d\'entree dans la phrase.\n\n💡 Astuce dys : le determinant est TOUJOURS colle au nom (meme s\'il y a un adjectif entre les deux : "le PETIT chat").\n\n📝 Piege Brevet : confondre determinant possessif ("leur maison") et pronom personnel ("je leur parle"). Devant un nom = determinant. Devant un verbe = pronom.'
                    },
                    // 10 — PREPOSITION
                    {
                        question: 'C\'est quoi une PREPOSITION ?',
                        answer: '🎯 La preposition est un petit mot INVARIABLE. Elle relie deux mots entre eux.\n\nLes prepositions les plus courantes : a, de, pour, par, avec, dans, en, sur, sous, sans, chez, vers, entre.\n\nExemples : "Je vais A Paris." "Un livre DE cuisine." "Il dort DANS sa chambre."\n\nEn gros : la preposition est la colle entre deux mots.\n\nMot difficile : "invariable" = ne change jamais. Pas de feminin, pas de pluriel.\n\n💡 Astuce dys : retiens la phrase "Adam part pour Anvers avec deux cents sous." Les premieres lettres donnent : A, D, P, P, A, A, D, C, S = a, de, par, pour, a, avec, dans, chez, sans.\n\n📝 Piege Brevet : confondre preposition "a" et verbe "a." Preposition "a" a toujours un accent grave.'
                    },
                    // 11 — CONJONCTION DE COORDINATION
                    {
                        question: 'C\'est quoi une conjonction de COORDINATION ?',
                        answer: '🎯 La conjonction de coordination relie deux mots ou deux groupes de MEME nature.\n\nIl y en a 7 : mais, ou, et, donc, or, ni, car.\n\nExemples :\n- "Il est grand ET fort." (relie deux adjectifs)\n- "Tu viens OU tu restes ?" (choix)\n- "Il pleut, DONC je prends mon parapluie." (consequence)\n\nEn gros : la conjonction de coordination = un pont entre deux elements egaux.\n\n💡 Astuce dys : "Mais Ou Et Donc Or Ni Car" → retiens "Mais ou est donc Ornicar ?" C\'est un classique !\n\n📝 Piege Brevet : "ou" (conjonction) sans accent ≠ "ou" (pronom relatif) avec accent. Teste avec "ou bien."'
                    },
                    // 12 — CONJONCTION DE SUBORDINATION
                    {
                        question: 'C\'est quoi une conjonction de SUBORDINATION ?',
                        answer: '🎯 La conjonction de subordination relie une proposition principale a une proposition subordonnee.\n\nLes principales : que, quand, lorsque, puisque, parce que, pour que, bien que, si, comme.\n\nExemples :\n- "Je veux QUE tu viennes."\n- "Il dort PARCE QU\'il est fatigue."\n- "SI tu viens, on ira au cine."\n\nEn gros : elle cree un lien de dependance. La subordonnee depend de la principale.\n\nMot difficile : "subordination" = relation ou un element depend d\'un autre.\n\n💡 Astuce dys : la conjonction de subordination introduit une phrase qui ne peut PAS vivre seule. "Parce qu\'il pleut" tout seul, ca ne marche pas.\n\n📝 Piege Brevet : confondre "que" pronom relatif et "que" conjonction. Apres un nom → relatif. Apres un verbe → conjonction.'
                    },
                    // 13 — INTERJECTION
                    {
                        question: 'C\'est quoi une INTERJECTION ?',
                        answer: '🎯 L\'interjection est un mot qui exprime une EMOTION forte. Elle est souvent suivie d\'un point d\'exclamation.\n\nExemples : Oh ! Ah ! Helas ! Bravo ! Ouf ! Aie ! Zut ! Eh bien !\n\nL\'interjection est INVARIABLE. Elle ne change jamais de forme.\n\nEn gros : l\'interjection, c\'est un cri, une reaction spontanee.\n\nMot difficile : "interjection" vient de "jeter entre." On jette un mot dans la phrase.\n\n💡 Astuce dys : pense aux emojis. 😱 = "Oh !" 😍 = "Ah !" L\'interjection, c\'est l\'emoji de la grammaire.\n\n📝 Piege Brevet : l\'interjection est rarement demandee seule. Mais sache la reconnaitre dans un texte pour ne pas la confondre avec un adverbe.'
                    },
                    // 14 — CLASSE vs FONCTION
                    {
                        question: 'Quelle difference entre CLASSE grammaticale et FONCTION ?',
                        answer: '🎯 La CLASSE = ce que le mot EST. Ca ne change JAMAIS. C\'est sa carte d\'identite.\n\nLa FONCTION = le ROLE du mot dans la phrase. Ca change selon la phrase.\n\nExemple avec le mot "chat" :\n- "Le chat dort." → Nom (classe) + sujet (fonction).\n- "Je vois le chat." → Nom (classe) + COD (fonction).\n\nEn gros : classe = qui tu ES. Fonction = quel JOB tu fais dans cette phrase.\n\n💡 Astuce dys : imagine une personne. Son NOM ne change pas (= classe). Mais son METIER peut changer (= fonction). Marie est Marie, mais elle peut etre prof, eleve, cliente...\n\n📝 Piege Brevet : c\'est LA question classique. Ne reponds jamais "sujet" quand on demande la classe !'
                    },
                    // 15 — MOTS VARIABLES vs INVARIABLES
                    {
                        question: 'C\'est quoi la difference entre mot VARIABLE et mot INVARIABLE ?',
                        answer: '🎯 Un mot VARIABLE change de forme. Il s\'accorde en genre, nombre ou personne.\n\nMots variables : nom, verbe, adjectif, determinant, pronom.\n\nUn mot INVARIABLE ne change JAMAIS de forme. Pas d\'accord, pas de conjugaison.\n\nMots invariables : adverbe, preposition, conjonction, interjection.\n\nEn gros : 5 classes varient, 4 ne varient pas.\n\n💡 Astuce dys : retiens "NVADP" pour les variables (Nom, Verbe, Adjectif, Determinant, Pronom). Les 4 autres sont invariables. Ou : "Nous Voulons Avoir Des Points" = NVADP.\n\n📝 Piege Brevet : ecrire "rapidement" avec un "s" au pluriel. JAMAIS ! C\'est un adverbe, donc invariable.'
                    }
                ],
                quiz: [
                    { question: 'Quelle est la classe grammaticale de "lentement" ?', options: ['Adjectif', 'Adverbe', 'Nom', 'Verbe'], correctIndex: 1, explanation: '"Lentement" modifie un verbe et finit en -ment. C\'est un adverbe. Il est invariable.' },
                    { question: 'Dans "Je LUI parle", "lui" est :', options: ['Un determinant possessif', 'Un pronom personnel', 'Un pronom demonstratif', 'Une preposition'], correctIndex: 1, explanation: '"Lui" est devant le verbe "parle." Il remplace une personne. C\'est un pronom personnel complement.' },
                    { question: '"Mais ou est donc Ornicar ?" aide a retenir :', options: ['Les prepositions', 'Les pronoms relatifs', 'Les conjonctions de coordination', 'Les adverbes'], correctIndex: 2, explanation: 'Mais, Ou, Et, Donc, Or, Ni, Car = les 7 conjonctions de coordination.' },
                    { question: 'Dans "CE livre est genial", "ce" est :', options: ['Un pronom demonstratif', 'Un determinant demonstratif', 'Une conjonction', 'Un adverbe'], correctIndex: 1, explanation: '"Ce" est devant le nom "livre." Il introduit le nom. C\'est un determinant demonstratif.' },
                    { question: 'Quel mot est une preposition ?', options: ['Mais', 'Avec', 'Souvent', 'Grand'], correctIndex: 1, explanation: '"Avec" est une preposition. Elle relie deux mots : "je viens AVEC toi."' },
                    { question: '"Le film QUE j\'ai vu est genial." "Que" est :', options: ['Une conjonction de subordination', 'Un pronom relatif', 'Un determinant', 'Un adverbe'], correctIndex: 1, explanation: '"Que" remplace "le film" (son antecedent). Il introduit une relative. C\'est un pronom relatif.' },
                    { question: 'Lequel est un mot INVARIABLE ?', options: ['Beau', 'Cheval', 'Toujours', 'Eleve'], correctIndex: 2, explanation: '"Toujours" est un adverbe de temps. Les adverbes sont invariables : ils ne changent jamais.' },
                    { question: '"LEURS enfants sont sages." "Leurs" est :', options: ['Un pronom personnel', 'Un determinant possessif', 'Un pronom possessif', 'Un adverbe'], correctIndex: 1, explanation: '"Leurs" est devant le nom "enfants." Il indique la possession. C\'est un determinant possessif.' },
                    { question: 'On te demande la CLASSE de "chat" dans "Le chat dort." Tu reponds :', options: ['Sujet', 'Nom commun', 'COD', 'Groupe nominal'], correctIndex: 1, explanation: 'La classe = ce que le mot EST. "Chat" est un nom commun. "Sujet" serait sa fonction, pas sa classe.' },
                    { question: '"PARCE QUE j\'ai faim" : "parce que" est :', options: ['Un pronom relatif', 'Une preposition', 'Une conjonction de subordination', 'Un adverbe'], correctIndex: 2, explanation: '"Parce que" relie la subordonnee a la principale. C\'est une conjonction de subordination (cause).' }
                ]
            },

            // ================================================================
            // SECTION 2 : FONCTIONS DANS LA PHRASE
            // ================================================================
            {
                id: 'fonctions',
                title: 'Fonctions dans la phrase',
                icon: '\uD83D\uDD27',
                content: '<h3>Fonctions — Le role de chaque mot dans la phrase</h3>'
                    + '<ul>'
                    + '<li><strong>Sujet</strong> : commande le verbe</li>'
                    + '<li><strong>COD / COI / COS</strong> : completent le verbe</li>'
                    + '<li><strong>Complements circonstanciels</strong> : precisent les circonstances</li>'
                    + '<li><strong>Attribut du sujet</strong> : qualite donnee par un verbe d\'etat</li>'
                    + '<li><strong>Epithete / Apposition / Complement du nom</strong> : enrichissent le nom</li>'
                    + '</ul>',
                flashcards: [
                    // 1 — SUJET
                    {
                        question: 'C\'est quoi la fonction SUJET ?',
                        answer: '🎯 Le sujet est le mot qui COMMANDE le verbe. C\'est lui qui fait l\'action.\n\nPour le trouver : pose la question "QUI EST-CE QUI + verbe ?"\n\nExemple : "Le chat mange." → Qui est-ce qui mange ? Le chat = sujet.\n\n⚠️ Attention au sujet INVERSE : "Dans la foret vivait un ogre." → sujet = un ogre (apres le verbe).\n\nEn gros : le sujet decide de la conjugaison du verbe.\n\n💡 Astuce dys : le sujet repond a "QUI ?" avant le verbe. Meme s\'il est loin ou inverse.\n\n📝 Piege Brevet : sujet eloigne du verbe. "Les eleves, malgre la pluie et le vent, sortent." → sujet = les eleves. Ne te fais pas pieger par les mots entre les deux !'
                    },
                    // 2 — COD
                    {
                        question: 'C\'est quoi un COD ?',
                        answer: '🎯 COD = Complement d\'Objet Direct. Il complete le verbe SANS preposition.\n\nPour le trouver : "sujet + verbe + QUI ? ou QUOI ?"\n\nExemples :\n- "Je mange une pizza." → QUOI ? une pizza = COD.\n- "J\'appelle mon pote." → QUI ? mon pote = COD.\n\n⚠️ Pas de preposition entre le verbe et le COD !\n\nEn gros : le COD recoit l\'action du verbe directement.\n\n💡 Astuce dys : COD = "D" comme DIRECT. Pas de petit mot entre le verbe et le complement.\n\n📝 Piege Brevet : si tu vois "a" ou "de" entre le verbe et le complement, c\'est un COI, pas un COD.'
                    },
                    // 3 — COI
                    {
                        question: 'C\'est quoi un COI ?',
                        answer: '🎯 COI = Complement d\'Objet Indirect. Il complete le verbe AVEC une preposition (a, de).\n\nPour le trouver : "sujet + verbe + A QUI ? DE QUOI ?"\n\nExemples :\n- "Je parle A mon ami." → A qui ? a mon ami = COI.\n- "Elle se souvient DE son enfance." → De quoi ? de son enfance = COI.\n\nEn gros : COI = il y a un petit mot (a, de) entre le verbe et le complement.\n\nMot difficile : "indirect" = pas en ligne droite. Il y a un obstacle (la preposition).\n\n💡 Astuce dys : COI = "I" comme INDIRECT. Il y a un petit mot-obstacle entre le verbe et le complement.\n\n📝 Piege Brevet : "je LUI parle" = COI. Le pronom "lui" remplace "a quelqu\'un." Meme sans voir "a", c\'est indirect.'
                    },
                    // 4 — COS
                    {
                        question: 'C\'est quoi un COS ?',
                        answer: '🎯 COS = Complement d\'Objet Second. C\'est un COI qui accompagne un COD dans la meme phrase.\n\nExemple : "Je donne un cadeau A ma mere."\n- "un cadeau" = COD (je donne QUOI ?).\n- "a ma mere" = COS (je donne a QUI ?).\n\nAutre exemple : "Il envoie un message A ses amis."\n- "un message" = COD.\n- "a ses amis" = COS.\n\nEn gros : le COS = le deuxieme complement du verbe. Il dit A QUI ou POUR QUI.\n\n💡 Astuce dys : COS = COI + COD dans la meme phrase. Le COS est le "bonus" apres le COD.\n\n📝 Piege Brevet : on peut dire COI au lieu de COS. Les deux sont acceptes. Mais "COS" est plus precis quand il y a deja un COD.'
                    },
                    // 5 — CC DE TEMPS
                    {
                        question: 'C\'est quoi un complement circonstanciel de TEMPS ?',
                        answer: '🎯 Le CC de temps indique QUAND l\'action se passe.\n\nPour le trouver : pose la question "QUAND ?"\n\nExemples :\n- "Je pars DEMAIN." → Quand ? demain = CC de temps.\n- "CHAQUE MATIN, il court." → Quand ? chaque matin = CC de temps.\n\nOn peut le DEPLACER : "Demain, je pars." On peut le SUPPRIMER : "Je pars." La phrase reste correcte.\n\nEn gros : le CC de temps = l\'horloge de la phrase.\n\n💡 Astuce dys : les CC sont des "bonus." On peut les enlever ou les bouger sans casser la phrase.\n\n📝 Piege Brevet : ne pas confondre CC de temps et COI. "Je pense A demain" → COI (complete le verbe). "Je pars demain" → CC de temps (circumstance).'
                    },
                    // 6 — CC DE LIEU
                    {
                        question: 'C\'est quoi un complement circonstanciel de LIEU ?',
                        answer: '🎯 Le CC de lieu indique OU l\'action se passe.\n\nPour le trouver : pose la question "OU ?"\n\nExemples :\n- "Je mange DANS LA CUISINE." → Ou ? dans la cuisine = CC de lieu.\n- "Il habite A PARIS." → Ou ? a Paris = CC de lieu.\n\nOn peut le deplacer ou le supprimer.\n\nEn gros : le CC de lieu = le GPS de la phrase.\n\n💡 Astuce dys : CC Lieu → pense a Google Maps. C\'est l\'adresse de l\'action.\n\n📝 Piege Brevet : "Je vais A Paris" → CC de lieu. Mais "Je pense A Paris" → COI. Tout depend du verbe ! "Aller" = mouvement → lieu. "Penser" = pas un mouvement → COI.'
                    },
                    // 7 — CC DE MANIERE
                    {
                        question: 'C\'est quoi un complement circonstanciel de MANIERE ?',
                        answer: '🎯 Le CC de maniere indique COMMENT l\'action se fait.\n\nPour le trouver : pose la question "COMMENT ?"\n\nExemples :\n- "Il mange LENTEMENT." → Comment ? lentement = CC de maniere.\n- "Elle parle AVEC DOUCEUR." → Comment ? avec douceur = CC de maniere.\n\nSouvent, c\'est un adverbe en -ment ou un groupe "avec + nom."\n\nEn gros : le CC de maniere = le mode d\'emploi de l\'action.\n\n💡 Astuce dys : COMMENT il fait ? La reponse = CC de maniere. Souvent un mot en -ment.\n\n📝 Piege Brevet : "avec douceur" = CC de maniere. "Avec son ami" = CC d\'accompagnement. Le sens change selon le nom apres "avec."'
                    },
                    // 8 — CC DE CAUSE
                    {
                        question: 'C\'est quoi un complement circonstanciel de CAUSE ?',
                        answer: '🎯 Le CC de cause indique POURQUOI l\'action se fait.\n\nPour le trouver : pose la question "POURQUOI ?"\n\nExemples :\n- "Il pleure DE JOIE." → Pourquoi ? de joie = CC de cause.\n- "PARCE QU\'IL PLEUT, je reste." → Pourquoi ? parce qu\'il pleut = CC de cause.\n\nMots-indices : parce que, car, a cause de, grace a, puisque.\n\nEn gros : le CC de cause = la raison de l\'action.\n\n💡 Astuce dys : POURQUOI ? = cause. La cause, c\'est la raison, l\'explication.\n\n📝 Piege Brevet : ne confonds pas cause et consequence. Cause = la raison (pourquoi). Consequence = le resultat (donc).'
                    },
                    // 9 — ATTRIBUT DU SUJET
                    {
                        question: 'C\'est quoi un ATTRIBUT DU SUJET ?',
                        answer: '🎯 L\'attribut du sujet donne une qualite au sujet. Il passe par un VERBE D\'ETAT.\n\nVerbes d\'etat : etre, paraitre, sembler, devenir, rester, demeurer, avoir l\'air.\n\nExemples :\n- "Le ciel EST bleu." → bleu = attribut du sujet "ciel."\n- "Elle SEMBLE fatiguee." → fatiguee = attribut du sujet "elle."\n\nEn gros : attribut = qualite donnee par un verbe d\'etat. Comme un adjectif relie au sujet par un pont.\n\nMot difficile : "verbe d\'etat" = verbe qui dit comment on est, pas ce qu\'on fait.\n\n💡 Astuce dys : remplace le verbe par "=" (egal). "Le ciel est bleu" = "le ciel = bleu." Ca marche → c\'est un attribut.\n\n📝 Piege Brevet : ne confonds pas attribut et epithete. Attribut = avec verbe d\'etat. Epithete = colle au nom directement.'
                    },
                    // 10 — EPITHETE
                    {
                        question: 'C\'est quoi la fonction EPITHETE ?',
                        answer: '🎯 L\'epithete est un ADJECTIF place directement a cote d\'un nom. Pas de verbe entre les deux.\n\nExemples :\n- "Un GRAND arbre." → grand = epithete de arbre.\n- "Une robe ROUGE." → rouge = epithete de robe.\n- "Un film PASSIONNANT." → passionnant = epithete de film.\n\nEn gros : l\'epithete = un adjectif colle au nom, sans verbe.\n\n💡 Astuce dys : epithete = "colle" au nom. Attribut = "relie" par un verbe d\'etat. Epithete = scotch. Attribut = pont.\n\n📝 Piege Brevet : "La maison EST grande" → attribut (verbe d\'etat). "Une grande maison" → epithete (pas de verbe). Meme adjectif, fonction differente !'
                    },
                    // 11 — APPOSITION
                    {
                        question: 'C\'est quoi une APPOSITION ?',
                        answer: '🎯 L\'apposition est un mot ou groupe de mots qui donne une precision sur un nom. Elle est separee par une VIRGULE.\n\nExemples :\n- "Paris, CAPITALE DE LA FRANCE, est belle." → "capitale de la France" = apposition de "Paris."\n- "Mon frere, MEDECIN, travaille beaucoup." → "medecin" = apposition de "mon frere."\n\nEn gros : l\'apposition = une info bonus entre virgules sur un nom.\n\nMot difficile : "apposition" = quelque chose qu\'on "pose a cote" (a + position).\n\n💡 Astuce dys : l\'apposition est ENTRE VIRGULES. C\'est comme une parenthese. Si tu l\'enleves, la phrase marche encore.\n\n📝 Piege Brevet : ne confonds pas apposition et epithete. L\'apposition est separee par des virgules. L\'epithete est collee au nom.'
                    },
                    // 12 — COMPLEMENT DU NOM
                    {
                        question: 'C\'est quoi un COMPLEMENT DU NOM ?',
                        answer: '🎯 Le complement du nom complete un NOM. Il est relie par une PREPOSITION (de, a, en, pour...).\n\nExemples :\n- "Un gateau AU CHOCOLAT." → "au chocolat" complete "gateau."\n- "La maison DE MES PARENTS." → "de mes parents" complete "maison."\n- "Une tasse EN PORCELAINE." → "en porcelaine" complete "tasse."\n\nEn gros : le complement du nom = une precision sur le nom, reliee par "de", "a", "en"...\n\n💡 Astuce dys : CDN = "de + quelque chose" apres un nom. "Gateau DE chocolat", "sac A dos."\n\n📝 Piege Brevet : ne confonds pas complement du nom et COI. Le CDN complete un NOM. Le COI complete un VERBE. "La peur DE l\'eau" = CDN. "Il parle DE l\'eau" = COI.'
                    },
                    // 13 — COMPLEMENT D'AGENT
                    {
                        question: 'C\'est quoi un COMPLEMENT D\'AGENT ?',
                        answer: '🎯 Le complement d\'agent existe uniquement dans les phrases PASSIVES. Il indique QUI fait l\'action.\n\nIl est introduit par "PAR" ou "DE."\n\nExemples :\n- Phrase active : "Le chat mange la souris."\n- Phrase passive : "La souris est mangee PAR LE CHAT." → "par le chat" = complement d\'agent.\n\nAutre exemple : "Ce prof est aime DE SES ELEVES." → "de ses eleves" = complement d\'agent.\n\nEn gros : le complement d\'agent = celui qui fait vraiment l\'action dans une phrase passive.\n\nMot difficile : "agent" = celui qui agit, qui fait l\'action.\n\n💡 Astuce dys : a la voix passive, le sujet SUBIT l\'action. Le complement d\'agent la FAIT. C\'est l\'inverse de l\'actif !\n\n📝 Piege Brevet : ne confonds pas complement d\'agent et CC. "Par le chat" = agent (il fait l\'action). "Par la fenetre" = CC de lieu (endroit).'
                    },
                    // 14 — RECAP : COMMENT TROUVER UNE FONCTION
                    {
                        question: 'Comment trouver la FONCTION d\'un mot au brevet ?',
                        answer: '🎯 Voici la methode en 4 etapes :\n\n1. Trouve le VERBE de la phrase.\n2. Trouve le SUJET (qui est-ce qui + verbe ?).\n3. Cherche les COMPLEMENTS :\n   - Verbe + QUI/QUOI ? = COD\n   - Verbe + A QUI/DE QUOI ? = COI\n   - QUAND/OU/COMMENT/POURQUOI ? = CC\n4. Regarde les adjectifs :\n   - Avec verbe d\'etat = attribut\n   - Colle au nom = epithete\n\nEn gros : pars toujours du verbe. Tout tourne autour de lui.\n\n💡 Astuce dys : ecris les questions sur un post-it. QUI ? QUOI ? A QUI ? OU ? QUAND ? COMMENT ? POURQUOI ? Pose-les une par une.\n\n📝 Piege Brevet : ne pas repondre une CLASSE quand on demande une FONCTION. "Nom" = classe. "Sujet" = fonction.'
                    },
                    // 15 — PHRASE ACTIVE vs PASSIVE
                    {
                        question: 'C\'est quoi la difference entre phrase ACTIVE et PASSIVE ?',
                        answer: '🎯 Phrase ACTIVE : le sujet FAIT l\'action. "Le chat mange la souris."\n\nPhrase PASSIVE : le sujet SUBIT l\'action. "La souris est mangee par le chat."\n\nPour passer de l\'actif au passif :\n- Le COD devient sujet.\n- Le sujet devient complement d\'agent (par...).\n- Le verbe se conjugue avec "etre + participe passe."\n\nEn gros : meme histoire, mais racontee a l\'envers.\n\n💡 Astuce dys : ACTIF = le sujet est le HEROS (il agit). PASSIF = le sujet est la VICTIME (il subit).\n\n📝 Piege Brevet : la reecriture demande souvent de passer de l\'actif au passif. N\'oublie pas d\'accorder le participe passe avec le nouveau sujet !'
                    }
                ],
                quiz: [
                    { question: 'Dans "Le chat mange la souris", quelle est la fonction de "la souris" ?', options: ['Sujet', 'COD', 'COI', 'CC de lieu'], correctIndex: 1, explanation: 'Le chat mange QUOI ? La souris. Pas de preposition = COD (complement d\'objet direct).' },
                    { question: 'Dans "Je parle A mon ami", "a mon ami" est :', options: ['Un COD', 'Un COI', 'Un CC de lieu', 'Un attribut du sujet'], correctIndex: 1, explanation: 'Je parle A QUI ? A mon ami. Preposition "a" = COI (complement d\'objet indirect).' },
                    { question: 'Dans "Elle semble heureuse", "heureuse" est :', options: ['Epithete', 'Attribut du sujet', 'COD', 'CC de maniere'], correctIndex: 1, explanation: '"Sembler" est un verbe d\'etat. "Heureuse" est relie au sujet par ce verbe = attribut du sujet.' },
                    { question: 'Dans "Un GRAND arbre", "grand" est :', options: ['Attribut du sujet', 'COD', 'Epithete', 'Apposition'], correctIndex: 2, explanation: '"Grand" est un adjectif colle directement au nom "arbre", sans verbe = epithete.' },
                    { question: '"Paris, capitale de la France, est belle." "Capitale de la France" est :', options: ['Epithete', 'COD', 'Apposition', 'CC de lieu'], correctIndex: 2, explanation: 'C\'est une precision sur "Paris", separee par des virgules = apposition.' },
                    { question: '"Je mange DANS LA CUISINE." "Dans la cuisine" est :', options: ['COD', 'COI', 'CC de lieu', 'Complement du nom'], correctIndex: 2, explanation: 'Je mange OU ? Dans la cuisine. C\'est une circonstance de lieu. On peut le deplacer ou le supprimer.' },
                    { question: '"Un gateau AU CHOCOLAT." "Au chocolat" est :', options: ['COI', 'CC de maniere', 'Complement du nom', 'Attribut'], correctIndex: 2, explanation: '"Au chocolat" complete le nom "gateau" avec la preposition "a" = complement du nom.' },
                    { question: '"La souris est mangee PAR LE CHAT." "Par le chat" est :', options: ['Sujet', 'COD', 'CC de maniere', 'Complement d\'agent'], correctIndex: 3, explanation: 'Phrase passive. "Par le chat" = celui qui fait l\'action = complement d\'agent.' },
                    { question: '"Je donne un cadeau A MA MERE." "A ma mere" est :', options: ['COD', 'COI / COS', 'CC de lieu', 'Attribut'], correctIndex: 1, explanation: 'Je donne un cadeau (COD) A QUI ? A ma mere = COI (ou COS car il accompagne un COD).' },
                    { question: '"Il pleure PARCE QU\'IL A PEUR." "Parce qu\'il a peur" est :', options: ['CC de temps', 'CC de cause', 'COI', 'CC de maniere'], correctIndex: 1, explanation: 'Il pleure POURQUOI ? Parce qu\'il a peur = CC de cause (la raison de l\'action).' }
                ]
            },

            // ================================================================
            // SECTION 3 : CONJUGAISON — TEMPS SIMPLES
            // ================================================================
            {
                id: 'conjugaison-simples',
                title: 'Conjugaison - Temps simples',
                icon: '\u23F0',
                content: '<h3>Conjugaison — Les temps simples a connaitre</h3>'
                    + '<ul>'
                    + '<li><strong>Present</strong> : action en cours ou verite generale</li>'
                    + '<li><strong>Imparfait</strong> : description, habitude au passe</li>'
                    + '<li><strong>Passe simple</strong> : action ponctuelle au passe (recit ecrit)</li>'
                    + '<li><strong>Futur simple</strong> : action a venir</li>'
                    + '<li><strong>Conditionnel present</strong> : hypothese, politesse</li>'
                    + '<li><strong>Subjonctif present</strong> : apres "il faut que", "je veux que"</li>'
                    + '<li><strong>Imperatif present</strong> : ordre, conseil</li>'
                    + '</ul>',
                flashcards: [
                    // 1 — PRESENT DE L'INDICATIF
                    {
                        question: 'Le PRESENT de l\'indicatif : quand et comment ?',
                        answer: '🎯 Le present exprime une action EN COURS ou une VERITE GENERALE.\n\nTerminaisons :\n- 1er groupe (-er) : -e, -es, -e, -ons, -ez, -ent.\n- 2e groupe (-ir avec -issons) : -is, -is, -it, -issons, -issez, -issent.\n- 3e groupe : ca depend du verbe !\n\nExemples : je mange, tu finis, il prend.\n\nEn gros : le present = maintenant, ou tout le temps.\n\nMot difficile : "verite generale" = un fait toujours vrai ("La Terre tourne").\n\n💡 Astuce dys : pour le 2e groupe, si on dit "nous finISSONS" → c\'est bien le 2e groupe. Si non (nous venons), c\'est le 3e.\n\n📝 Piege Brevet : les verbes en -DRE gardent le D au singulier. "Il prenD", "il morD." Sauf les verbes en -INDRE et -SOUDRE : "il peint", "il resout."'
                    },
                    // 2 — IMPARFAIT
                    {
                        question: 'L\'IMPARFAIT : quand et comment ?',
                        answer: '🎯 L\'imparfait exprime une action qui DURE ou se REPETE au passe. Il sert aux descriptions.\n\nTerminaisons (les MEMES pour TOUS les verbes !) : -ais, -ais, -ait, -ions, -iez, -aient.\n\nExemples : je mangeais, tu finissais, il prenait, nous allions.\n\nEn gros : imparfait = arriere-plan du passe. Decor, habitudes, descriptions.\n\n💡 Astuce dys : l\'imparfait a toujours les MEMES terminaisons. Aucune exception ! C\'est le temps le plus regulier. Retiens : "AIS AIS AIT IONS IEZ AIENT."\n\n📝 Piege Brevet : ne pas confondre imparfait et passe simple dans un recit. Imparfait = camera fixe (decor). Passe simple = camera qui bouge (action).'
                    },
                    // 3 — PASSE SIMPLE 1er GROUPE
                    {
                        question: 'Le PASSE SIMPLE du 1er groupe (-er) ?',
                        answer: '🎯 Terminaisons du 1er groupe au passe simple : -ai, -as, -a, -ames, -ates, -erent.\n\nExemple avec MANGER :\nje mangeai, tu mangeas, il mangea, nous mangeames, vous mangeates, ils mangerent.\n\n⚠️ Les 3e personnes sont les plus demandees au brevet : il mangea / ils mangerent.\n\nEn gros : passe simple 1er groupe = terminaisons en -A.\n\n💡 Astuce dys : 1er groupe = le son "A" domine. MangeA, mangeAmes, mangeAtes, mangerent.\n\n📝 Piege Brevet : ne pas ecrire "il mangeat" (avec un T). C\'est "il mangea" sans T. Le T est a l\'imparfait ("il mangeait").'
                    },
                    // 4 — PASSE SIMPLE 2e GROUPE ET 3e GROUPE EN -I
                    {
                        question: 'Le PASSE SIMPLE du 2e groupe et 3e groupe en -I ?',
                        answer: '🎯 Terminaisons en -I : -is, -is, -it, -imes, -ites, -irent.\n\n2e groupe (finir) : je finis, tu finis, il finit, nous finimes, vous finites, ils finirent.\n\n3e groupe en -I : voir → il vit. Faire → il fit. Prendre → il prit. Mettre → il mit. Ecrire → il ecrivit. Dire → il dit.\n\nEn gros : beaucoup de verbes du 3e groupe font leur passe simple en -I.\n\n💡 Astuce dys : serie en -I → il finIT, il vIT, il prIT. Le son "I" domine.\n\n📝 Piege Brevet : "il finit" au present = "il finit" au passe simple. Meme forme ! C\'est le contexte qui decide.'
                    },
                    // 5 — PASSE SIMPLE 3e GROUPE EN -U
                    {
                        question: 'Le PASSE SIMPLE du 3e groupe en -U ?',
                        answer: '🎯 Terminaisons en -U : -us, -us, -ut, -umes, -utes, -urent.\n\nVerbes courants :\n- Vouloir → il voulut, ils voulurent.\n- Pouvoir → il put, ils purent.\n- Savoir → il sut.\n- Courir → il courut.\n- Lire → il lut.\n- Connaitre → il connut.\n- Vivre → il vecut.\n- Boire → il but.\n\nEn gros : le son "U" domine. Il voulUT, il pUT, il lUT.\n\n💡 Astuce dys : serie en -U → pense a "il a voulU / il voulUT." Le U du participe passe = U du passe simple.\n\n📝 Piege Brevet : "il pu" (sans T) est FAUX. C\'est "il put" avec un T. Toujours un T a la 3e personne du singulier.'
                    },
                    // 6 — PASSE SIMPLE : VENIR / TENIR EN -IN
                    {
                        question: 'Le PASSE SIMPLE de VENIR et TENIR (en -IN) ?',
                        answer: '🎯 Terminaisons speciales en -IN : -ins, -ins, -int, -inmes, -intes, -inrent.\n\nVenir → je vins, tu vins, il vint, ils vinrent.\nTenir → je tins, tu tins, il tint, ils tinrent.\n\nCa marche aussi pour les composes : devenir (il devint), revenir (il revint), retenir (il retint), obtenir (il obtint).\n\nEn gros : venir et tenir = le son "IN" domine au passe simple.\n\n💡 Astuce dys : seuls VENIR et TENIR (et leur famille) font -INT au passe simple. C\'est la plus petite serie : 2 verbes + leurs derives.\n\n📝 Piege Brevet : "il vena" ou "il venit" sont FAUX. C\'est "il VINT." Apprends-le par coeur.'
                    },
                    // 7 — FUTUR SIMPLE
                    {
                        question: 'Le FUTUR SIMPLE : quand et comment ?',
                        answer: '🎯 Le futur exprime une action qui va se passer PLUS TARD.\n\nFormation : INFINITIF + terminaisons -ai, -as, -a, -ons, -ez, -ont.\n\nExemples : manger → je mangerai. Finir → je finirai.\n\nVerbes irreguliers :\n- Etre → je serai. Avoir → j\'aurai.\n- Aller → j\'irai. Faire → je ferai.\n- Voir → je verrai. Pouvoir → je pourrai.\n- Venir → je viendrai. Vouloir → je voudrai.\n\nEn gros : futur = infinitif + -ai, -as, -a, -ons, -ez, -ont.\n\n💡 Astuce dys : le futur contient l\'infinitif ! Tu ENTENDS "manger" dans "je mangerAI."\n\n📝 Piege Brevet : futur "je serai" (sans S) ≠ conditionnel "je serais" (avec S). Astuce : remplace par "nous." "Nous serons" = futur. "Nous serions" = conditionnel.'
                    },
                    // 8 — CONDITIONNEL PRESENT
                    {
                        question: 'Le CONDITIONNEL PRESENT : quand et comment ?',
                        answer: '🎯 Le conditionnel exprime une action POSSIBLE, un SOUHAIT ou une POLITESSE.\n\nFormation : radical du FUTUR + terminaisons de l\'IMPARFAIT (-ais, -ais, -ait, -ions, -iez, -aient).\n\nExemples : je mangerais, tu finirais, il serait, nous aurions.\n\nUtilisations :\n- Hypothese : "Si j\'etais riche, je VOYAGERAIS."\n- Politesse : "Je VOUDRAIS un cafe."\n- Info non confirmee : "Il SERAIT malade."\n\nEn gros : conditionnel = futur + imparfait. Ca dit "si... alors..."\n\n💡 Astuce dys : conditionnel = futur + IMPARFAIT. Meme radical que le futur. Memes terminaisons que l\'imparfait. Facile !\n\n📝 Piege Brevet : "Si j\'etais" → conditionnel. JAMAIS "si j\'aurais." Avec SI, on ne met JAMAIS le conditionnel. "Si + imparfait → conditionnel."'
                    },
                    // 9 — SUBJONCTIF PRESENT
                    {
                        question: 'Le SUBJONCTIF PRESENT : quand et comment ?',
                        answer: '🎯 Le subjonctif s\'utilise apres des expressions de DOUTE, VOLONTE, SENTIMENT.\n\nMots declencheurs : il faut que, je veux que, bien que, pour que, avant que, a moins que.\n\nTerminaisons : -e, -es, -e, -ions, -iez, -ent.\n\nVerbes irreguliers courants :\n- Etre → que je sois. Avoir → que j\'aie.\n- Faire → que je fasse. Aller → que j\'aille.\n- Pouvoir → que je puisse. Savoir → que je sache.\n\nEn gros : subjonctif = apres "que" + doute ou souhait.\n\n💡 Astuce dys : retiens "Il faut QUE je..." → subjonctif. Le "que" est le signal d\'alarme.\n\n📝 Piege Brevet : "Je veux qu\'il FASSE ses devoirs." (subjonctif) ≠ "Il FAIT ses devoirs." (indicatif). Apres "vouloir que" → subjonctif obligatoire.'
                    },
                    // 10 — IMPERATIF PRESENT
                    {
                        question: 'L\'IMPERATIF PRESENT : quand et comment ?',
                        answer: '🎯 L\'imperatif donne un ORDRE, un CONSEIL ou une INTERDICTION. Seulement 3 personnes : tu, nous, vous. PAS de sujet exprime !\n\nTerminaisons :\n- 1er groupe : -e, -ons, -ez. (Mange ! Mangeons ! Mangez !)\n- 2e groupe : -is, -issons, -issez. (Finis ! Finissons !)\n- 3e groupe : ca depend (-s, -ons, -ez souvent).\n\n⚠️ LE PIEGE : 1er groupe = PAS de S a la 2e personne. "Mange !" pas "Manges !"\nSAUF devant "en" et "y" : "Manges-en !" "Vas-y !"\n\nEn gros : imperatif = on ordonne, sans "tu/nous/vous" devant.\n\n💡 Astuce dys : imperatif = "Fais-le !" "Mange !" Pas de sujet. C\'est un ordre direct.\n\n📝 Piege Brevet : le -S disparait au 1er groupe. "Chante !" "Regarde !" "Ecoute !" SANS S.'
                    },
                    // 11 — PRESENT DE L'INDICATIF : VERBES IRREGULIERS
                    {
                        question: 'Le PRESENT des verbes IRREGULIERS courants ?',
                        answer: '🎯 Les 10 verbes irreguliers les plus tombes au brevet :\n\n- ETRE : suis, es, est, sommes, etes, sont.\n- AVOIR : ai, as, a, avons, avez, ont.\n- ALLER : vais, vas, va, allons, allez, vont.\n- FAIRE : fais, fais, fait, faisons, faites, font.\n- POUVOIR : peux, peux, peut, pouvons, pouvez, peuvent.\n- VOULOIR : veux, veux, veut, voulons, voulez, veulent.\n- SAVOIR : sais, sais, sait, savons, savez, savent.\n- VOIR : vois, vois, voit, voyons, voyez, voient.\n- VENIR : viens, viens, vient, venons, venez, viennent.\n- PRENDRE : prends, prends, prend, prenons, prenez, prennent.\n\nEn gros : ces 10 verbes sont a connaitre PAR COEUR.\n\n💡 Astuce dys : ecris-les sur des fiches et relis-les chaque soir. 10 verbes, ca va !\n\n📝 Piege Brevet : "il peut" (PAS "il peuts"). "Il fait" (PAS "il fais"). "Il prend" avec un D (PAS "il prent").'
                    },
                    // 12 — VALEURS DU PRESENT
                    {
                        question: 'Quelles sont les VALEURS du present ?',
                        answer: '🎯 Le present n\'exprime pas toujours "maintenant." Il a plusieurs valeurs :\n\n1. Present d\'ENONCIATION : action en cours. "Je mange une pomme."\n2. Present de VERITE GENERALE : fait toujours vrai. "La Terre tourne."\n3. Present d\'HABITUDE : action repetee. "Chaque matin, je cours."\n4. Present de NARRATION : dans un recit passe pour rendre vivant. "En 1789, le peuple prend la Bastille."\n5. Passe/futur PROCHE : "Il arrive dans 5 minutes." "Je viens de manger."\n\nEn gros : le present a 5 emplois differents. Le contexte te dit lequel.\n\n💡 Astuce dys : demande-toi "c\'est maintenant, toujours, souvent, ou pour rendre vivant ?" Tu trouveras la valeur.\n\n📝 Piege Brevet : "Quelles sont les valeurs du present dans ce texte ?" est une question classique. Ne reponds pas juste "present" — dis QUELLE valeur.'
                    },
                    // 13 — VALEURS DE L'IMPARFAIT ET DU PASSE SIMPLE
                    {
                        question: 'IMPARFAIT vs PASSE SIMPLE dans un recit ?',
                        answer: '🎯 Dans un recit au passe, les deux vont ENSEMBLE :\n\n- IMPARFAIT = arriere-plan, description, habitude.\n"Il pleuvait. La rue etait deserte."\n\n- PASSE SIMPLE = action principale, evenement soudain.\n"Soudain, un eclair frappa le sol."\n\nExemple complet : "Il MARCHAIT (imparfait = decor) quand soudain il ENTENDIT (PS = action) un cri."\n\nEn gros : imparfait = camera fixe. Passe simple = action !\n\n💡 Astuce dys : si tu peux ajouter "SOUDAIN" devant → passe simple. Si c\'est un decor ou une habitude → imparfait.\n\n📝 Piege Brevet : "Distinguez l\'emploi de l\'imparfait et du passe simple dans ce texte." → Dis imparfait = description/habitude. PS = action ponctuelle.'
                    },
                    // 14 — CONDITIONNEL : VALEUR D'HYPOTHESE
                    {
                        question: 'La construction "SI + imparfait → conditionnel" ?',
                        answer: '🎯 C\'est LA structure a connaitre :\n\n"SI + IMPARFAIT → CONDITIONNEL PRESENT"\n\nExemple : "Si j\'ETAIS (imparfait) riche, je VOYAGERAIS (conditionnel)."\n\n⚠️ JAMAIS "Si + conditionnel" ! On ne dit JAMAIS "si j\'aurais." On dit "si j\'avais."\n\nAutres constructions :\n- Si + present → futur. "Si tu viens, je serai content."\n- Si + plus-que-parfait → conditionnel passe. "Si j\'avais su, j\'aurais agi."\n\nEn gros : apres SI, jamais de conditionnel. SI + imparfait → conditionnel.\n\n💡 Astuce dys : retiens la regle : "Les SI n\'aiment pas les -RAIS." Apres "si", jamais de conditionnel.\n\n📝 Piege Brevet : c\'est un piege de reecriture frequent. On te demande de transformer une phrase avec "si" → respecte la concordance.'
                    },
                    // 15 — IMPERATIF : PIEGE DU -S
                    {
                        question: 'Imperatif : QUAND met-on un -S au 1er groupe ?',
                        answer: '🎯 Regle de base : a l\'imperatif, les verbes du 1er groupe n\'ont PAS de -S a la 2e personne.\n\n"Mange !" "Chante !" "Regarde !" → PAS de S.\n\n⚠️ SAUF devant "EN" et "Y" (pour la liaison) :\n"Manges-EN !" "Vas-Y !" "Penses-Y !"\n\nPourquoi ? Pour que ca sonne bien a l\'oral. "Mange-en" serait dur a prononcer.\n\nEn gros : pas de S au 1er groupe sauf devant EN et Y.\n\n💡 Astuce dys : 1er groupe = PAS de S. Sauf si le mot d\'apres commence par une voyelle (en, y) → on ajoute le S pour la liaison.\n\n📝 Piege Brevet : "Pense a ton avenir !" → pas de S. "Penses-y !" → S car "y" suit. Attention aussi : "Va !" (pas de S) mais "Vas-y !" (S pour la liaison).'
                    }
                ],
                quiz: [
                    { question: 'Quel temps pour decrire un decor dans un recit au passe ?', options: ['Passe simple', 'Imparfait', 'Passe compose', 'Futur'], correctIndex: 1, explanation: 'L\'imparfait sert aux descriptions et a l\'arriere-plan. Le passe simple est pour les actions principales.' },
                    { question: '"Il faut que tu VIENNES" : quel temps ?', options: ['Indicatif present', 'Subjonctif present', 'Conditionnel present', 'Imperatif'], correctIndex: 1, explanation: 'Apres "il faut que" → subjonctif present obligatoire. "Viennes" est le subjonctif de "venir."' },
                    { question: '"Si j\'etais riche, je ..." — quelle forme ?', options: ['voyagerai', 'voyagerais', 'voyage', 'voyageais'], correctIndex: 1, explanation: '"Si + imparfait" → conditionnel present. "Je voyagerais" avec les terminaisons -ais du conditionnel.' },
                    { question: '"Mange !" a l\'imperatif, pourquoi pas de -S ?', options: ['C\'est une erreur', 'Les verbes du 1er groupe perdent le -S a la 2e personne de l\'imperatif', 'C\'est du subjonctif', 'C\'est du futur'], correctIndex: 1, explanation: 'A l\'imperatif, les verbes en -er n\'ont PAS de -S. "Mange !" "Chante !" "Regarde !" Sauf devant en/y.' },
                    { question: '"Il entra soudain." C\'est conjugue au :', options: ['Imparfait', 'Present', 'Passe simple', 'Passe compose'], correctIndex: 2, explanation: '"Entra" = passe simple du verbe "entrer." Le mot "soudain" confirme : action ponctuelle.' },
                    { question: 'Le passe simple de "vouloir" (3e personne) :', options: ['Il voula', 'Il voulit', 'Il voulut', 'Il voulu'], correctIndex: 2, explanation: '"Vouloir" fait partie de la serie en -U au passe simple : il voulut, ils voulurent.' },
                    { question: '"Je serai" = futur. "Je serais" = :', options: ['Aussi futur', 'Conditionnel', 'Imparfait', 'Subjonctif'], correctIndex: 1, explanation: '"Je serai" (sans S) = futur. "Je serais" (avec S) = conditionnel. Astuce : remplace par "nous serons/serions."' },
                    { question: 'Le passe simple de "venir" (3e personne) :', options: ['Il vena', 'Il venit', 'Il venut', 'Il vint'], correctIndex: 3, explanation: '"Venir" fait partie de la serie en -IN : il vint, ils vinrent. C\'est la plus petite serie.' },
                    { question: '"Apres SI, jamais de ..." :', options: ['Present', 'Imparfait', 'Conditionnel', 'Subjonctif'], correctIndex: 2, explanation: '"Les SI n\'aiment pas les -RAIS." Apres "si", on ne met JAMAIS le conditionnel. "Si j\'avais" (PAS "si j\'aurais").' },
                    { question: 'Le present de narration sert a :', options: ['Decrire le present', 'Rendre un recit passe plus vivant', 'Exprimer un ordre', 'Formuler une hypothese'], correctIndex: 1, explanation: 'Le present de narration = present utilise dans un recit au passe pour rendre la scene plus vivante et dynamique.' }
                ]
            },

            // ================================================================
            // SECTION 4 : CONJUGAISON — TEMPS COMPOSES & PIEGES
            // ================================================================
            {
                id: 'conjugaison-composes',
                title: 'Conjugaison - Temps composes',
                icon: '\uD83E\uDDE9',
                content: '<h3>Conjugaison — Temps composes & accords du participe passe</h3>'
                    + '<ul>'
                    + '<li><strong>Passe compose</strong> : etre ou avoir au present + participe passe</li>'
                    + '<li><strong>Plus-que-parfait</strong> : etre ou avoir a l\'imparfait + participe passe</li>'
                    + '<li><strong>Futur anterieur</strong> : etre ou avoir au futur + participe passe</li>'
                    + '<li><strong>Conditionnel passe</strong> : etre ou avoir au conditionnel + participe passe</li>'
                    + '<li><strong>Accords du participe passe</strong> : avec etre, avoir, pronominaux</li>'
                    + '</ul>',
                flashcards: [
                    // 1 — PASSE COMPOSE
                    {
                        question: 'Le PASSE COMPOSE : comment ca marche ?',
                        answer: '🎯 Passe compose = AUXILIAIRE au present + PARTICIPE PASSE.\n\nAvec AVOIR (majorite des verbes) : "J\'ai mange." "Elle a compris."\n\nAvec ETRE (verbes de mouvement + pronominaux) : "Il est parti." "Elle s\'est levee."\n\nEn gros : passe compose = action terminee dans le passe. Tres utilise a l\'oral.\n\nMot difficile : "auxiliaire" = verbe qui aide a conjuguer (etre ou avoir).\n\n💡 Astuce dys : passe compose = 2 morceaux. Auxiliaire + participe passe. Toujours DEUX mots.\n\n📝 Piege Brevet : l\'accord du participe passe change selon l\'auxiliaire ! Avec etre = accord avec le sujet. Avec avoir = plus complique (voir carte suivante).'
                    },
                    // 2 — ETRE OU AVOIR ?
                    {
                        question: 'Comment choisir entre ETRE et AVOIR au passe compose ?',
                        answer: '🎯 Avec ETRE : les verbes de MOUVEMENT + tous les verbes PRONOMINAUX (se laver, se lever...).\n\nLes verbes avec ETRE (la "maison d\'etre") :\naller / venir, monter / descendre, entrer / sortir, naitre / mourir, arriver / partir, retourner, tomber, rester, passer, devenir.\n\nAvec AVOIR : TOUS les autres verbes.\n\nEn gros : 15 verbes avec etre + les pronominaux. Tout le reste avec avoir.\n\n💡 Astuce dys : imagine une MAISON. On y entre, sort, monte, descend, nait, meurt, arrive, part, tombe, reste... Tous ces verbes de la "maison" prennent ETRE.\n\n📝 Piege Brevet : certains verbes changent ! "Il a monte les escaliers" (avoir, COD). "Il est monte au grenier" (etre, pas de COD). Monter, descendre, sortir, rentrer, passer peuvent prendre les DEUX auxiliaires.'
                    },
                    // 3 — ACCORD PP AVEC ETRE
                    {
                        question: 'Accord du participe passe avec ETRE ?',
                        answer: '🎯 Avec ETRE, le participe passe s\'accorde avec le SUJET. Comme un adjectif.\n\nExemples :\n- "Elle est partiE." (feminin → e)\n- "Ils sont partiS." (masculin pluriel → s)\n- "Elles sont partiES." (feminin pluriel → es)\n\nC\'est comme si tu disais "elle est grande." Meme logique.\n\nEn gros : avec ETRE → regarde le sujet → accorde.\n\n💡 Astuce dys : remplace le participe passe par un adjectif. "Elle est grande" → "Elle est partie." Meme accord ! Le participe passe avec etre = un adjectif deguise.\n\n📝 Piege Brevet : "Ils sont alles" prend un S. "Elle est allee" prend un E. TOUJOURS accorder avec le sujet quand c\'est etre.'
                    },
                    // 4 — ACCORD PP AVEC AVOIR
                    {
                        question: 'Accord du participe passe avec AVOIR ?',
                        answer: '🎯 Avec AVOIR, le participe passe NE s\'accorde PAS avec le sujet.\n\nIl s\'accorde avec le COD SEULEMENT si le COD est AVANT le verbe.\n\n⚠️ COD apres = pas d\'accord :\n"Elle a mange une pomme." → pas d\'accord.\n\n✅ COD avant = accord :\n"La pomme QU\'elle a mangEE." → "que" = la pomme (feminin) → accord.\n"Je LES ai vuS." → "les" est avant → accord.\n\nEn gros : avec AVOIR → cherche le COD. Avant = accord. Apres = rien.\n\n💡 Astuce dys : la regle AVOIR = "COD AVANT = j\'accorde." Pose-toi 2 questions : 1) Il y a un COD ? 2) Il est AVANT le verbe ? Si oui aux deux → accorde.\n\n📝 Piege Brevet : "Les fleurs que j\'ai cueillIES." Le COD "que" (= les fleurs, feminin pluriel) est AVANT → accord -ies.'
                    },
                    // 5 — ACCORD PP AVEC PRONOMINAUX
                    {
                        question: 'Accord du participe passe des verbes PRONOMINAUX ?',
                        answer: '🎯 Les pronominaux (se laver, s\'habiller...) se conjuguent avec ETRE. Mais l\'accord depend du COD.\n\nRegle : le participe s\'accorde avec le sujet SI le pronom "se" est COD.\n\n✅ "Elle s\'est lavEE." (elle a lave QUI ? elle-meme → "se" = COD → accord)\n\n⚠️ "Elle s\'est lave les mains." (elle a lave QUOI ? les mains → "se" n\'est PAS COD → pas d\'accord)\n\n⚠️ "Ils se sont telephonE." (telephoner A quelqu\'un → "se" = COI → pas d\'accord)\n\nEn gros : avec un pronominal, cherche le COD. Si "se" = COD → accorde. Sinon → non.\n\n💡 Astuce dys : reformule avec AVOIR. "Elle s\'est lavee" = "Elle a lave elle-meme." Le COD c\'est "elle-meme" (avant) → accord.\n\n📝 Piege Brevet : "Elles se sont parlE" (pas d\'accord, parler A). "Elles se sont regardEES" (accord, regarder quelqu\'un).'
                    },
                    // 6 — PLUS-QUE-PARFAIT
                    {
                        question: 'Le PLUS-QUE-PARFAIT : quand et comment ?',
                        answer: '🎯 Le plus-que-parfait = une action passee AVANT une autre action passee. C\'est le "passe du passe."\n\nFormation : auxiliaire (etre/avoir) a l\'IMPARFAIT + participe passe.\n\nExemples :\n- "Il AVAIT mange quand je suis arrive." → il a mange EN PREMIER.\n- "Elle ETAIT partie avant minuit."\n\nEn gros : quand tu racontes au passe et que tu veux remonter ENCORE plus loin → plus-que-parfait.\n\nMot difficile : "anteriorite" = le fait de se passer AVANT.\n\n💡 Astuce dys : plus-que-parfait = "avait/etait + participe passe." C\'est comme le passe compose mais avec l\'auxiliaire a l\'IMPARFAIT au lieu du present.\n\n📝 Piege Brevet : dans la reecriture, si on te demande de passer au passe, le plus-que-parfait peut apparaitre pour exprimer l\'anteriorite.'
                    },
                    // 7 — FUTUR ANTERIEUR
                    {
                        question: 'Le FUTUR ANTERIEUR : quand et comment ?',
                        answer: '🎯 Le futur anterieur = une action future qui sera TERMINEE avant une autre action future.\n\nFormation : auxiliaire (etre/avoir) au FUTUR + participe passe.\n\nExemples :\n- "Quand tu arriveras, j\'AURAI FINI." → j\'aurai fini AVANT ton arrivee.\n- "Elle SERA PARTIE avant midi."\n\nEn gros : le futur anterieur = le "passe du futur." L\'action sera deja finie.\n\n💡 Astuce dys : futur anterieur = "aurai/serai + participe passe." L\'auxiliaire est au FUTUR.\n\n📝 Piege Brevet : ne confonds pas futur simple ("je finirai") et futur anterieur ("j\'aurai fini"). Le futur anterieur a DEUX mots.'
                    },
                    // 8 — CONDITIONNEL PASSE
                    {
                        question: 'Le CONDITIONNEL PASSE : quand et comment ?',
                        answer: '🎯 Le conditionnel passe = une action qui AURAIT PU arriver mais qui n\'est PAS arrivee.\n\nFormation : auxiliaire (etre/avoir) au CONDITIONNEL PRESENT + participe passe.\n\nExemples :\n- "J\'AURAIS AIME venir." (mais je ne suis pas venu)\n- "Si j\'avais su, je SERAIS RESTE." (mais je ne savais pas)\n- "Elle AURAIT PU reussir." (mais elle n\'a pas reussi)\n\nEn gros : conditionnel passe = regret, action ratee.\n\n💡 Astuce dys : conditionnel passe = "aurais/serais + participe passe." On regrette, on imagine ce qui aurait pu etre.\n\n📝 Piege Brevet : "Si + plus-que-parfait → conditionnel passe." "Si j\'AVAIS su, j\'AURAIS agi." Jamais "si j\'aurais su."'
                    },
                    // 9 — PARTICIPE PASSE EN -E / -I / -IS / -IT / -U
                    {
                        question: 'Comment trouver la TERMINAISON d\'un participe passe ?',
                        answer: '🎯 Les terminaisons des participes passes :\n\n- 1er groupe (-er) → -E : mange, chante, parle.\n- 2e groupe (-ir/-issons) → -I : fini, choisi, reussi.\n- 3e groupe → ca varie :\n  - -I : parti, dormi, suivi.\n  - -IS : pris, mis, assis.\n  - -IT : ecrit, dit, conduit.\n  - -U : vu, lu, voulu, pu, bu, couru, venu.\n  - -ERT : ouvert, offert, couvert.\n\nEn gros : mets le participe au FEMININ pour entendre la derniere lettre. "Pris" → "prise" → tu entends le S.\n\n💡 Astuce dys : la regle du FEMININ est magique. "Ecrit" → "ecrite" → tu entends le T. "Mis" → "mise" → tu entends le S. "Ouvert" → "ouverte" → tu entends le T.\n\n📝 Piege Brevet : "il a pris" (pas "il a pri"). "Il a ecrit" (pas "il a ecri"). Mets au feminin pour verifier la derniere lettre.'
                    },
                    // 10 — MORDRE / MORDU
                    {
                        question: 'L\'astuce MORDRE / MORDU pour -ER ou -E ?',
                        answer: '🎯 Comment savoir si c\'est -ER (infinitif) ou -E (participe passe) ?\n\nRemplace par MORDRE ou MORDU :\n\n- Si tu peux dire MORDRE → c\'est -ER (infinitif).\n"Je vais manger" → "Je vais MORDRE" ✅ → -ER.\n\n- Si tu peux dire MORDU → c\'est -E (participe passe).\n"J\'ai mange" → "J\'ai MORDU" ✅ → -E.\n\nEn gros : MORDRE = -er. MORDU = -e. C\'est le truc le plus utile en dictee.\n\n💡 Astuce dys : choisis VENDRE/VENDU si tu preferes. Ca marche aussi. L\'important c\'est d\'utiliser un verbe du 3e groupe.\n\n📝 Piege Brevet : "Les pommes que j\'ai mangEES." Ici c\'est MORDU (participe passe) + accord avec le COD "que" (feminin pluriel) → -ees.'
                    },
                    // 11 — -E / -ER / -EZ / -AIS / -AI
                    {
                        question: 'Differencier -E, -ER, -EZ, -AIS, -AI ?',
                        answer: '🎯 Cinq terminaisons qui se ressemblent a l\'oral :\n\n- -ER : infinitif. "Je vais manGER." (teste : "je vais mordre" ✅)\n- -E : participe passe. "J\'ai manGE." (teste : "j\'ai mordu" ✅)\n- -EZ : 2e personne pluriel. "Vous manGEZ."\n- -AIS : imparfait. "Je manGEAIS." "Il manGEAIT."\n- -AI : passe simple 1ere pers. "Je manGEAI."\n\nEn gros : -er = infinitif (mordre). -e = participe (mordu). -ez = vous. -ais/-ait = imparfait. -ai = passe simple.\n\n💡 Astuce dys : 1) Teste mordre/mordu. 2) C\'est "vous" ? → -ez. 3) C\'est du passe qui dure ? → -ais (imparfait). 4) C\'est du passe ponctuel (je) ? → -ai.\n\n📝 Piege Brevet : en dictee, c\'est le piege numero 1 ! Prends le temps de tester chaque verbe avec mordre/mordu.'
                    },
                    // 12 — TABLEAU RECAPITULATIF DES TEMPS COMPOSES
                    {
                        question: 'Comment se forment TOUS les temps composes ?',
                        answer: '🎯 Tous les temps composes = auxiliaire (a un temps simple) + participe passe.\n\nTableau :\n- Passe compose = auxiliaire au PRESENT + PP.\n  "J\'ai mange." "Il est parti."\n\n- Plus-que-parfait = auxiliaire a l\'IMPARFAIT + PP.\n  "J\'avais mange." "Il etait parti."\n\n- Futur anterieur = auxiliaire au FUTUR + PP.\n  "J\'aurai mange." "Il sera parti."\n\n- Conditionnel passe = auxiliaire au CONDITIONNEL + PP.\n  "J\'aurais mange." "Il serait parti."\n\nEn gros : le temps de l\'auxiliaire donne le nom du temps compose. Present → passe compose. Imparfait → plus-que-parfait. Etc.\n\n💡 Astuce dys : temps compose = temps simple de l\'auxiliaire + participe passe. C\'est toujours la meme formule !\n\n📝 Piege Brevet : dans une reecriture, si tu changes le temps, change l\'auxiliaire au bon temps. Le participe passe reste le meme (mais verifie les accords).'
                    }
                ],
                quiz: [
                    { question: 'Quel auxiliaire pour "Elle est partie" ?', options: ['Avoir', 'Etre', 'Les deux', 'Aucun'], correctIndex: 1, explanation: '"Partir" se conjugue avec ETRE au passe compose. C\'est un verbe de la "maison d\'etre."' },
                    { question: '"Elle a mange une pomme." Accord du participe ?', options: ['Oui, avec "elle"', 'Non, le COD est apres', 'Oui, avec "pomme"', 'Ca depend'], correctIndex: 1, explanation: 'Avec AVOIR, le PP s\'accorde avec le COD seulement s\'il est AVANT. Ici "pomme" est apres → pas d\'accord.' },
                    { question: '"La lettre qu\'il a ..." : quelle forme ?', options: ['ecrit', 'ecrite', 'ecrites', 'ecrits'], correctIndex: 1, explanation: 'Le COD "qu\'" (= la lettre, feminin singulier) est AVANT → accord : "ecrite."' },
                    { question: '"Elles se sont telephon..." : accord ?', options: ['telephonees', 'telephonee', 'telephone', 'telephones'], correctIndex: 2, explanation: '"Telephoner A quelqu\'un" → "se" est COI (pas COD) → pas d\'accord → "telephone."' },
                    { question: 'Le plus-que-parfait exprime :', options: ['Une action future', 'Une action passee AVANT une autre passee', 'Un ordre', 'Un souhait'], correctIndex: 1, explanation: 'Plus-que-parfait = le "passe du passe." Une action anterieure a une autre dans le passe.' },
                    { question: '"J\'ai MORDU" → ca veut dire que la terminaison est :', options: ['-er (infinitif)', '-e (participe passe)', '-ez (2e pluriel)', '-ais (imparfait)'], correctIndex: 1, explanation: 'Si tu peux dire MORDU → c\'est un participe passe → terminaison -e (mange, chante, etc.).' },
                    { question: '"Si j\'avais su, j\'aurais agi." "J\'aurais agi" est au :', options: ['Passe compose', 'Plus-que-parfait', 'Conditionnel passe', 'Futur anterieur'], correctIndex: 2, explanation: '"Aurais" (conditionnel) + "agi" (participe passe) = conditionnel passe. Action qui n\'est pas arrivee.' },
                    { question: 'Comment trouver la derniere lettre d\'un participe passe ?', options: ['On devine', 'On met au feminin', 'On conjugue au futur', 'On cherche dans le dictionnaire'], correctIndex: 1, explanation: 'Mets le PP au feminin : "ecrit" → "ecrite" (on entend le T). "Mis" → "mise" (on entend le S).' },
                    { question: '"Quand tu arriveras, j\'aurai fini." "J\'aurai fini" est au :', options: ['Passe compose', 'Futur simple', 'Futur anterieur', 'Conditionnel passe'], correctIndex: 2, explanation: '"Aurai" (futur) + "fini" (participe passe) = futur anterieur. Action future deja terminee.' },
                    { question: '"Il est monte AU GRENIER." Quel auxiliaire ?', options: ['Avoir', 'Etre', 'Les deux marchent ici', 'Aucun'], correctIndex: 1, explanation: 'Pas de COD → auxiliaire ETRE. "Il est monte au grenier." Mais "il a monte les escaliers" → AVOIR (avec COD).' }
                ]
            },

            // ================================================================
            // SECTION 5 : ORTHOGRAPHE & HOMOPHONES
            // ================================================================
            {
                id: 'orthographe',
                title: 'Orthographe & Homophones',
                icon: '\u2712\uFE0F',
                content: '<h3>Orthographe — Les homophones a ne plus confondre</h3>'
                    + '<ul>'
                    + '<li>Chaque paire d\'homophones a une ASTUCE DE REMPLACEMENT</li>'
                    + '<li>Un seul test suffit pour choisir la bonne orthographe</li>'
                    + '<li>Apprends le test, pas la regle !</li>'
                    + '</ul>',
                flashcards: [
                    // 1 — A / À
                    {
                        question: 'Comment choisir entre A et A (avec accent) ?',
                        answer: '🎯 Remplace par "AVAIT." Si ca marche → "a" SANS accent (verbe avoir). Sinon → "a" AVEC accent (preposition).\n\n✅ "Il a faim." → "Il avait faim." → CA MARCHE → verbe → "a" sans accent.\n✅ "Je vais a Paris." → "Je vais avait Paris." → CA NE MARCHE PAS → preposition → "a" avec accent.\n\nEn gros : "a" sans accent = verbe avoir. "A" avec accent = preposition.\n\nMot difficile : "preposition" = petit mot qui relie (a, de, dans, pour).\n\n💡 Astuce dys : AVAIT est ton detecteur magique. Teste CHAQUE "a" de ta dictee avec "avait."\n\n📝 Piege Brevet : le piege le plus frequent en dictee. Teste SYSTEMATIQUEMENT. Ca prend 2 secondes.'
                    },
                    // 2 — ET / EST
                    {
                        question: 'Comment choisir entre ET et EST ?',
                        answer: '🎯 Remplace par "ETAIT." Si ca marche → "est" (verbe etre). Sinon → "et" (addition).\n\n✅ "Il EST fatigue." → "Il etait fatigue." → CA MARCHE → verbe etre.\n✅ "Il est grand ET fort." → "grand etait fort" → CA NE MARCHE PAS → "et" = addition.\n\nAutre truc : "et" = "et aussi" ou "+."\n\nEn gros : "est" = verbe etre. "Et" = addition (+).\n\n💡 Astuce dys : ET = le signe PLUS (+). "Pain ET beurre" = "pain + beurre." EST = verbe etre, teste avec "etait."\n\n📝 Piege Brevet : en dictee rapide, on confond vite. Prends le reflexe : teste avec "etait" a chaque fois.'
                    },
                    // 3 — OU / OÙ
                    {
                        question: 'Comment choisir entre OU et OU (avec accent) ?',
                        answer: '🎯 Remplace par "OU BIEN." Si ca marche → "ou" SANS accent (choix). Sinon → "ou" AVEC accent (lieu/temps).\n\n✅ "Cafe OU the ?" → "Cafe ou bien the ?" → CA MARCHE → choix → sans accent.\n✅ "La ville OU j\'habite." → "La ville ou bien j\'habite." → CA NE MARCHE PAS → lieu → avec accent.\n\nEn gros : "ou" = choix entre deux trucs. "Ou" = un endroit ou un moment.\n\n💡 Astuce dys : "OU BIEN" est ton test. Si ca passe → pas d\'accent. Si ca coince → accent.\n\n📝 Piege Brevet : "le jour ou il est ne" → accent (moment dans le temps). "Tu veux ca ou ca ?" → pas d\'accent (choix).'
                    },
                    // 4 — SE / CE
                    {
                        question: 'Comment choisir entre SE et CE ?',
                        answer: '🎯 "SE" = devant un VERBE (pronom reflechi). "CE" = devant un NOM ou "que/qui."\n\n✅ "Il SE lave." → devant verbe "lave" → "se."\n✅ "CE livre est bien." → devant nom "livre" → "ce."\n✅ "CE QUE je veux." → devant "que" → "ce."\n\nAutre test : remplace par "ME." "Il se lave" → "Je me lave" → ca marche → "se."\n\nEn gros : SE = devant verbe. CE = devant nom ou que/qui.\n\n💡 Astuce dys : SE = avec un verbe TOUJOURS. CE = avec un nom TOUJOURS. Regarde le mot d\'APRES.\n\n📝 Piege Brevet : "ce" devant "que" ou "qui" est un pronom demonstratif. "Ce que je veux." "Ce qui me plait."'
                    },
                    // 5 — SON / SONT
                    {
                        question: 'Comment choisir entre SON et SONT ?',
                        answer: '🎯 Remplace par "ETAIENT." Si ca marche → "sont" (verbe etre). Sinon → "son" (possessif).\n\n✅ "Ils SONT partis." → "Ils etaient partis." → CA MARCHE → verbe etre.\n✅ "SON chat est mignon." → "Etaient chat est mignon." → CA NE MARCHE PAS → possessif.\n\nAutre test pour "son" : remplace par "mon" ou "ton." "Mon chat est mignon." → ca marche → possessif.\n\nEn gros : "sont" = verbe etre (ils sont). "Son" = a lui/a elle (son truc).\n\n💡 Astuce dys : SONT = ETAIENT (teste !). SON = MON/TON (teste !).\n\n📝 Piege Brevet : "Ses amis sont la" → deux homophones dans la meme phrase ! "Ses" = possessif pluriel. "Sont" = verbe etre.'
                    },
                    // 6 — ON / ONT
                    {
                        question: 'Comment choisir entre ON et ONT ?',
                        answer: '🎯 Remplace par "AVAIENT." Si ca marche → "ont" (verbe avoir). Sinon → "on" (pronom).\n\n✅ "Ils ONT faim." → "Ils avaient faim." → CA MARCHE → verbe avoir.\n✅ "ON mange bien ici." → "Avaient mange bien ici." → CA NE MARCHE PAS → pronom "on."\n\nEn gros : "ont" = verbe avoir (ils ont). "On" = pronom (= quelqu\'un, nous).\n\n💡 Astuce dys : ONT = AVAIENT. ON = quelqu\'un / nous. Teste avec "avaient" a chaque fois.\n\n📝 Piege Brevet : "On a" est correct (on = pronom + a = verbe). "Ont a" n\'existe PAS. Si le sujet est "on" → le verbe est au singulier !'
                    },
                    // 7 — LEUR / LEURS
                    {
                        question: 'Comment choisir entre LEUR et LEURS ?',
                        answer: '🎯 "LEUR" sans S = devant un VERBE (pronom). "LEURS" avec S = devant un NOM PLURIEL (determinant).\n\n✅ "Je LEUR parle." → devant verbe → pronom → pas de S.\n✅ "LEURS enfants sont la." → devant nom pluriel → determinant → S.\n\nTest : remplace par "LUI." "Je lui parle" → ca marche → pronom → "leur" sans S.\n\nEn gros : devant verbe = leur. Devant nom = leur(s) selon le nombre.\n\n💡 Astuce dys : LEUR devant VERBE = toujours sans S (car "lui" n\'a jamais de S). LEURS devant NOM = depend si le nom est pluriel.\n\n📝 Piege Brevet : "Je leur donne leurs cahiers." Deux "leur" dans la meme phrase ! Le premier = pronom (pas de S). Le deuxieme = determinant + nom pluriel (S).'
                    },
                    // 8 — CES / SES / C'EST / S'EST
                    {
                        question: 'Comment choisir entre CES, SES, C\'EST, S\'EST ?',
                        answer: '🎯 Quatre homophones en un :\n\n- CES = determinant demonstratif. "CES gateaux" = ces gateaux-LA.\nTest : remplace par "ce" au singulier. "Ce gateau" ✅\n\n- SES = determinant possessif. "SES gateaux" = les gateaux a LUI.\nTest : remplace par "son" au singulier. "Son gateau" ✅\n\n- C\'EST = ce + est. "C\'EST bon !" = cela est bon.\nTest : remplace par "cela est." "Cela est bon" ✅\n\n- S\'EST = se + est (verbe pronominal). "Il S\'EST leve."\nTest : remplace par "je me suis." "Je me suis leve" ✅\n\nEn gros : CES = ceux-la. SES = a lui. C\'EST = cela est. S\'EST = il se est.\n\n💡 Astuce dys : mets au SINGULIER. "Ce gateau" → ces. "Son gateau" → ses. "Cela est" → c\'est. "Je me suis" → s\'est.\n\n📝 Piege Brevet : c\'est un classique de dictee. Teste chaque occurrence avec la bonne methode.'
                    },
                    // 9 — LA / LÀ / L'A
                    {
                        question: 'Comment choisir entre LA, LA (accent) et L\'A ?',
                        answer: '🎯 Trois homophones :\n\n- LA (sans accent) = article ou pronom. "LA maison." "Je LA vois."\n\n- LA (avec accent) = adverbe de lieu. "Il est LA." = il est ici.\nTest : remplace par "ici." "Il est ici" ✅ → la avec accent.\n\n- L\'A = le/la + a (verbe avoir). "Il L\'A mange."\nTest : remplace par "l\'avait." "Il l\'avait mange" ✅ → l\'a.\n\nEn gros : LA = article/pronom. LA = ici. L\'A = l\'avait.\n\n💡 Astuce dys : teste avec "ICI" (pour la) et "L\'AVAIT" (pour l\'a). Si aucun ne marche → c\'est "la" simple.\n\n📝 Piege Brevet : "Elle est la" (accent = endroit). "La fille" (pas d\'accent = article). "Il l\'a vue" (verbe avoir).'
                    },
                    // 10 — QUAND / QUANT / QU'EN
                    {
                        question: 'Comment choisir entre QUAND, QUANT et QU\'EN ?',
                        answer: '🎯 Trois homophones :\n\n- QUAND = a quel moment ? "QUAND pars-tu ?"\nTest : remplace par "a quel moment." "A quel moment pars-tu ?" ✅\n\n- QUANT = en ce qui concerne. Toujours suivi de "a" ou "au."\n"QUANT A moi, je reste." = "En ce qui me concerne, je reste."\n\n- QU\'EN = que + en. "QU\'EN penses-tu ?" = "Que penses-tu de cela ?"\nTest : remplace par "que... de cela." "Que penses-tu de cela ?" ✅\n\nEn gros : QUAND = moment. QUANT A = en ce qui concerne. QU\'EN = que + en.\n\n💡 Astuce dys : QUAND → "a quel moment ?" QUANT → toujours colle a "a/au." QU\'EN → "que... de ca."\n\n📝 Piege Brevet : "quant a" prend toujours un T et est TOUJOURS suivi de "a" ou "au." Si c\'est pas suivi de "a" → c\'est "quand."'
                    },
                    // 11 — PEU / PEUX / PEUT
                    {
                        question: 'Comment choisir entre PEU, PEUX et PEUT ?',
                        answer: '🎯 Trois homophones :\n\n- PEU = adverbe de quantite (= pas beaucoup). "Il mange PEU." "Un PEU de lait."\n\n- PEUX = verbe pouvoir, 1ere ou 2e personne. "Je PEUX." "Tu PEUX."\nTest : remplace par "pouvais." "Je pouvais" ✅\n\n- PEUT = verbe pouvoir, 3e personne. "Il PEUT." "Elle PEUT."\nTest : remplace par "pouvait." "Il pouvait" ✅\n\nEn gros : PEU = pas beaucoup. PEUX = je/tu pouvoir. PEUT = il/elle pouvoir.\n\n💡 Astuce dys : PEU = quantite (pas beaucoup). PEUX/PEUT = verbe POUVOIR. Teste avec "pouvais/pouvait."\n\n📝 Piege Brevet : "Il se peut que..." → "peut" avec un T (3e personne). "Peut-etre" → trait d\'union + T.'
                    },
                    // 12 — ACCORD SUJET-VERBE QUAND LE SUJET EST LOIN
                    {
                        question: 'Comment accorder quand le sujet est LOIN du verbe ?',
                        answer: '🎯 Meme si le sujet est eloigne, c\'est LUI qui commande le verbe.\n\nExemples :\n- "Les eleves, malgre la pluie, SORTENT." → sujet = les eleves (pluriel).\n- "Le bruit des vagues me BERCE." → sujet = le bruit (singulier), pas "des vagues."\n\nMethode : cherche le verbe, puis pose "QUI EST-CE QUI + verbe ?" en remontant.\n\nEn gros : ne te laisse pas pieger par les mots entre le sujet et le verbe.\n\n💡 Astuce dys : BARRE mentalement les mots entre le sujet et le verbe. "Les eleves [malgre la pluie] sortent." → "Les eleves sortent." C\'est plus clair !\n\n📝 Piege Brevet : "Le groupe des eleves ARRIVE." → Sujet = "le groupe" (singulier). Pas "des eleves." C\'est le nom PRINCIPAL qui commande.'
                    },
                    // 13 — ACCORD SUJET-VERBE AVEC SUJET INVERSE
                    {
                        question: 'Comment accorder quand le sujet est INVERSE ?',
                        answer: '🎯 Le sujet est parfois APRES le verbe. Mais c\'est toujours lui qui commande !\n\nExemples :\n- "Dans la foret VIVAIENT des loups." → sujet = des loups → pluriel.\n- "Que PENSENT les eleves ?" → sujet = les eleves → pluriel.\n- "Ainsi PARLAIT Zarathoustra." → sujet = Zarathoustra → singulier.\n\nEn gros : sujet inverse = sujet apres le verbe. Accorde quand meme !\n\n💡 Astuce dys : retourne la phrase dans ta tete. "Des loups vivaient dans la foret." → C\'est plus facile a accorder !\n\n📝 Piege Brevet : en dictee, le sujet inverse est un piege CLASSIQUE. Cherche toujours "QUI EST-CE QUI + verbe ?" meme si le sujet est apres.'
                    },
                    // 14 — PLURIELS IRREGULIERS
                    {
                        question: 'Les PLURIELS irreguliers a connaitre ?',
                        answer: '🎯 Les 4 regles speciales du pluriel :\n\n1) Noms en -OU → pluriel en -S. SAUF 7 en -X : bijoux, cailloux, choux, genoux, hiboux, joujoux, poux.\n\n2) Noms en -AL → pluriel en -AUX. (cheval → chevaux). SAUF : bals, festivals, carnavals, recitals.\n\n3) Noms en -AU / -EAU → pluriel en -X. (chapeau → chapeaux). SAUF : landaus.\n\n4) Noms en -EU → pluriel en -X. (jeu → jeux). SAUF : pneus, bleus.\n\nEn gros : -OU/-AL/-AU/-EAU/-EU ont des pluriels speciaux. Apprends les exceptions !\n\n💡 Astuce dys : "Viens mon CHOU, mon BIJOU, sur mes GENOUX. Pas de CAILLOUX ni de HIBOUX, juste des JOUJOUX et pas de POUX." → les 7 exceptions en -oux.\n\n📝 Piege Brevet : en dictee, les pluriels irreguliers tombent SOUVENT. Sois vigilant sur les noms en -al et -ou.'
                    },
                    // 15 — METHODE DE RELECTURE DE DICTEE
                    {
                        question: 'Comment relire sa dictee EFFICACEMENT ?',
                        answer: '🎯 Methode GPOV = 4 relectures differentes :\n\nG = GRAMMAIRE. Cherche chaque verbe. Remonte au sujet. Verifie l\'accord.\n\nP = PARTICIPES. Verifie chaque participe passe. Etre → accord sujet. Avoir → COD avant ?\n\nO = ORTHOGRAPHE. Teste chaque homophone. a/a, et/est, ou/ou, se/ce, son/sont, on/ont.\n\nV = VOCABULAIRE. Verifie les mots durs. Doubles lettres ? Accents ?\n\nEn gros : 4 relectures, chaque fois tu cherches UN SEUL type d\'erreur.\n\n💡 Astuce dys : colorie mentalement. Relecture 1 = verbes (en rouge). Relecture 2 = participes (en bleu). Relecture 3 = homophones (en vert). Relecture 4 = mots durs (en jaune).\n\n📝 Piege Brevet : relire "en general" ne sert a rien. Tu ne trouves pas tes erreurs. Fais 4 passes CIBLEES.'
                    }
                ],
                quiz: [
                    { question: '"Il ... faim." — a ou a ?', options: ['a (avec accent)', 'a (sans accent)'], correctIndex: 1, explanation: 'Remplace par "avait." "Il avait faim" → ca marche → verbe avoir → "a" sans accent.' },
                    { question: '"Le pays ... je viens." — ou ou ou ?', options: ['ou (sans accent)', 'ou (avec accent)'], correctIndex: 1, explanation: '"Le pays ou bien je viens" ne marche pas. C\'est un lieu → "ou" avec accent.' },
                    { question: '"... mange a la cantine." — On ou Ont ?', options: ['Ont', 'On'], correctIndex: 1, explanation: '"Avaient mange a la cantine" ne marche pas. C\'est le pronom "on" (= quelqu\'un / nous).' },
                    { question: '"Je ... parle souvent." — leur ou leurs ?', options: ['leur', 'leurs'], correctIndex: 0, explanation: '"Leur" est devant le verbe "parle." C\'est un pronom → pas de S. On pourrait dire "je LUI parle."' },
                    { question: '"Elles se sont ..." — telephone(es) ?', options: ['telephonees', 'telephonee', 'telephone'], correctIndex: 2, explanation: '"Telephoner A quelqu\'un" → "se" = COI → pas d\'accord → "telephone" sans accord.' },
                    { question: '"... livre est passionnant." — Son ou Sont ?', options: ['Sont', 'Son'], correctIndex: 1, explanation: '"Etaient livre" ne marche pas. C\'est le possessif "son." Teste aussi : "Mon livre est passionnant" → ca marche.' },
                    { question: '"La lettre qu\'il a ..." :', options: ['ecrit', 'ecrite', 'ecrites'], correctIndex: 1, explanation: 'COD "qu\'" (= la lettre, feminin singulier) est AVANT → accord avec avoir → "ecrite."' },
                    { question: '"... gateaux sont delicieux." — Ces ou Ses ?', options: ['Ces (ceux-la)', 'Ses (a lui)'], correctIndex: 0, explanation: 'Mets au singulier : "CE gateau" (= celui-la) → determinant demonstratif → "ces." Si c\'etait "SON gateau" → "ses."' },
                    { question: '"Dans la foret ... des loups." — vivait ou vivaient ?', options: ['vivait', 'vivaient'], correctIndex: 1, explanation: 'Sujet inverse : "des loups" (pluriel) est apres le verbe → "vivaient" au pluriel.' },
                    { question: 'Quel est le pluriel de "bijou" ?', options: ['bijous', 'bijoux', 'bijoues'], correctIndex: 1, explanation: '"Bijou" fait partie des 7 noms en -OU prenant un X : bijoux, cailloux, choux, genoux, hiboux, joujoux, poux.' }
                ]
            },

            // ================================================================
            // SECTION 6 : FIGURES DE STYLE
            // ================================================================
            {
                id: 'figures-style',
                title: 'Figures de style',
                icon: '\uD83C\uDFA8',
                content: '<h3>Figures de style — Les images du texte</h3>'
                    + '<ul>'
                    + '<li>Chaque figure = un EFFET precis sur le lecteur</li>'
                    + '<li>Au brevet : identifier la figure + expliquer son EFFET</li>'
                    + '</ul>',
                flashcards: [
                    // 1 — COMPARAISON
                    {
                        question: 'C\'est quoi une COMPARAISON ?',
                        answer: '🎯 La comparaison rapproche deux choses avec un MOT OUTIL : "comme", "tel que", "semblable a", "pareil a."\n\nStructure : COMPARE + MOT OUTIL + COMPARANT.\n\nExemples :\n- "Fort COMME un lion."\n- "Elle court AUSSI VITE QU\'un guepard."\n- "Ses yeux brillent TELS DES diamants."\n\nComme dans la vie : "T\'es rapide COMME l\'eclair" en parlant a ton pote.\n\nEn gros : comparaison = A est COMME B. Tu vois le mot "comme" ou equivalent.\n\n💡 Astuce dys : pas de mot-outil (comme, tel que...) = PAS une comparaison. C\'est une metaphore.\n\n📝 Piege Brevet : on te demande le compare, le comparant ET le mot-outil. Donne les trois !'
                    },
                    // 2 — METAPHORE
                    {
                        question: 'C\'est quoi une METAPHORE ?',
                        answer: '🎯 La metaphore = une comparaison SANS mot de comparaison. On dit directement qu\'une chose EST une autre.\n\nExemples :\n- "Cet homme EST un lion." (pas "comme un lion")\n- "La vie EST un voyage."\n- "Il a un coeur de pierre."\n- "Tu es une bombe sur ce selfie !"\n\nDifference avec la comparaison :\n- Comparaison : "Il est courageux COMME un lion."\n- Metaphore : "C\'est un lion." (pas de "comme")\n\nEn gros : metaphore = image DIRECTE. Pas de "comme."\n\n💡 Astuce dys : comparaison = avec "comme." Metaphore = SANS "comme." C\'est la seule difference !\n\n📝 Piege Brevet : au brevet, on demande souvent "comparaison ou metaphore ?" Cherche le mot-outil. S\'il est la → comparaison. Absent → metaphore.'
                    },
                    // 3 — PERSONNIFICATION
                    {
                        question: 'C\'est quoi une PERSONNIFICATION ?',
                        answer: '🎯 La personnification donne des qualites HUMAINES a quelque chose de non-humain.\n\nExemples :\n- "Le vent HURLE." (hurler = action humaine)\n- "La mort RODE dans les rues."\n- "Les arbres DANSAIENT sous la brise."\n- "Mon telephone me SUPPLIE d\'etre recharge."\n\nEffet : rend le texte plus vivant. Le lecteur imagine mieux la scene.\n\nEn gros : un truc non-humain fait des trucs d\'humain.\n\n💡 Astuce dys : si un objet, un animal ou une idee fait une action d\'HUMAIN → personnification. Le vent ne hurle pas VRAIMENT.\n\n📝 Piege Brevet : ne confonds pas personnification et metaphore. "Le vent hurle" = personnification (action humaine). "Le vent est un loup" = metaphore (on compare a un animal).'
                    },
                    // 4 — HYPERBOLE
                    {
                        question: 'C\'est quoi une HYPERBOLE ?',
                        answer: '🎯 L\'hyperbole = une EXAGERATION volontaire pour frapper l\'esprit.\n\nExemples :\n- "Je MEURS de faim." (tu ne meurs pas vraiment)\n- "Je te l\'ai dit MILLE fois."\n- "Il y avait un MILLION de personnes."\n- "J\'ai TROP de devoirs, c\'est l\'ENFER."\n\nEffet : insister, dramatiser, ou creer un effet comique.\n\nEn gros : hyperbole = on exagere A FOND pour que ca marque.\n\nMot difficile : "hyperbole" vient du grec "hyper" = au-dessus, au-dela.\n\n💡 Astuce dys : pense a comment tu parles avec tes potes. "J\'ai TROP faim !" "C\'est MORTEL !" → c\'est de l\'hyperbole au quotidien !\n\n📝 Piege Brevet : n\'oublie pas de dire l\'EFFET de l\'hyperbole. "L\'auteur exagere pour insister sur..."'
                    },
                    // 5 — ANAPHORE
                    {
                        question: 'C\'est quoi une ANAPHORE ?',
                        answer: '🎯 L\'anaphore = la REPETITION d\'un meme mot au DEBUT de plusieurs phrases ou vers.\n\nExemples :\n- "MOI president, je ferai... MOI president, je changerai..."\n- "PARIS ! PARIS outrage ! PARIS brise ! PARIS martyrise !"\n- "J\'AI un reve..." (Martin Luther King)\n\nEffet : creer un RYTHME, insister, marteler une idee.\n\nEn gros : anaphore = meme debut repete pour que ca RENTRE dans la tete.\n\nMot difficile : "anaphore" vient du grec "ana" = en haut, "pherein" = porter. On "porte en avant" un mot.\n\n💡 Astuce dys : ANAphore = Au Niveau de l\'Attaque (debut). On repete le DEBUT des phrases.\n\n📝 Piege Brevet : precision importante : la repetition doit etre EN DEBUT de phrase ou de vers. Si c\'est ailleurs, c\'est une simple repetition.'
                    },
                    // 6 — ANTITHESE
                    {
                        question: 'C\'est quoi une ANTITHESE ?',
                        answer: '🎯 L\'antithese met deux idees OPPOSEES dans la meme phrase.\n\nExemples :\n- "Je vis, je meurs." (Louise Labe)\n- "Etre ou ne pas etre." (Shakespeare)\n- "PETIT a petit, il faisait de GRANDES choses."\n- En classe : "Certains PARLENT beaucoup, d\'autres SE TAISENT."\n\nEffet : creer un contraste fort. Souligner une contradiction.\n\nEn gros : antithese = deux contraires dans la meme phrase.\n\nMot difficile : "antithese" = "anti" (contre) + "these" (idee). Idee CONTRE idee.\n\n💡 Astuce dys : ANTI = contre. AntiTHESE = deux idees qui se COMBATTENT dans la meme phrase.\n\n📝 Piege Brevet : ne confonds pas antithese et oxymore. Antithese = opposition dans la phrase. Oxymore = deux mots contradictoires COLLES ensemble.'
                    },
                    // 7 — OXYMORE
                    {
                        question: 'C\'est quoi un OXYMORE ?',
                        answer: '🎯 L\'oxymore = deux mots CONTRADICTOIRES places COTE A COTE.\n\nExemples :\n- "Cette OBSCURE clarte." (Corneille)\n- "Un SILENCE assourdissant."\n- "Une DOUCE violence."\n- "Un MORT vivant." (les films de zombies !)\n\nDifference avec l\'antithese : l\'antithese oppose deux idees dans la PHRASE. L\'oxymore oppose deux mots COLLES.\n\nEn gros : oxymore = un couple de mots qui ne devrait PAS aller ensemble.\n\n💡 Astuce dys : OXYMORE = OX (bizarre) + MORE (ensemble). Deux mots bizarres ensemble. Comme "soleil noir" ou "silence bruyant."\n\n📝 Piege Brevet : "silence assourdissant" = oxymore (2 mots colles). "Il y a du silence ET du bruit" = antithese (opposition dans la phrase). La difference = la DISTANCE entre les contraires.'
                    },
                    // 8 — EUPHEMISME
                    {
                        question: 'C\'est quoi un EUPHEMISME ?',
                        answer: '🎯 L\'euphemisme = dire quelque chose de DESAGREABLE de facon DOUCE, attenuee.\n\nExemples :\n- "Il nous a quittes." = il est mort.\n- "Il est un peu enveloppe." = il est gros.\n- "Les personnes du troisieme age." = les vieux.\n- "Il a un retard scolaire." = il a de grosses difficultes.\n\nEffet : eviter de choquer. Adoucir la realite.\n\nEn gros : euphemisme = on dit les choses EN DOUX.\n\nMot difficile : "euphemisme" vient du grec "eu" = bien, "pheme" = parole. Belles paroles.\n\n💡 Astuce dys : EUphemisme = "EU" comme "EUh..." On hesite a dire les choses crument. On adoucit.\n\n📝 Piege Brevet : ne confonds pas euphemisme et litote. Euphemisme = on ADOUCIT. Litote = on dit le CONTRAIRE en disant MOINS.'
                    },
                    // 9 — LITOTE
                    {
                        question: 'C\'est quoi une LITOTE ?',
                        answer: '🎯 La litote = dire MOINS pour faire comprendre PLUS. On utilise souvent la negation.\n\nExemple celebre :\n- "Va, je ne te hais point." (Chimene dans Le Cid) = Je t\'AIME enormement.\n- "Ce n\'est pas mal." = C\'est tres bien.\n- "Il n\'est pas bete." = Il est tres intelligent.\n- Sur Insta : "Pas degeu ce plat" = C\'est delicieux.\n\nEffet : renforcer une idee en la disant par la negative.\n\nEn gros : litote = dire le contraire de facon negative pour dire PLUS.\n\n💡 Astuce dys : litote = "pas mal" = bien. On dit MOINS mais on pense PLUS. C\'est l\'inverse de l\'hyperbole !\n\n📝 Piege Brevet : la litote la plus connue au brevet est "je ne te hais point" = je t\'aime. Si tu la vois, c\'est cadeau !'
                    },
                    // 10 — GRADATION
                    {
                        question: 'C\'est quoi une GRADATION ?',
                        answer: '🎯 La gradation = une enumeration de mots qui MONTENT en intensite (ou descendent).\n\nExemples (gradation ASCENDANTE = ca monte) :\n- "C\'est un roc, c\'est un pic, c\'est un cap ! Que dis-je, c\'est une peninsule !" (Cyrano)\n- "Je suis fatigue, epuise, aneanti."\n- "Il est content, ravi, fou de joie."\n\nExemple (gradation DESCENDANTE = ca descend) :\n- "Il courait, marchait, rampait, s\'arretait."\n\nEn gros : gradation = une liste qui monte (ou descend) en puissance.\n\n💡 Astuce dys : pense a un escalier. Chaque mot est une MARCHE plus haute. Content → ravi → fou de joie. Ca grimpe !\n\n📝 Piege Brevet : precise si la gradation est ASCENDANTE (monte) ou DESCENDANTE (descend). Et dis l\'EFFET : insister, dramatiser.'
                    },
                    // 11 — ENUMERATION
                    {
                        question: 'C\'est quoi une ENUMERATION ?',
                        answer: '🎯 L\'enumeration = une LISTE de mots ou de groupes de mots.\n\nExemples :\n- "Il acheta du pain, du beurre, du fromage et du lait."\n- "Elle etait belle, intelligente, drole et genereuse."\n- "J\'aime le foot, le basket, le tennis et la natation."\n\nDifference avec la gradation : l\'enumeration n\'a PAS d\'ordre d\'intensite. La gradation OUI.\n\nEffet : donner une impression d\'abondance, de richesse ou d\'accumulation.\n\nEn gros : enumeration = on fait une liste, sans ordre de force.\n\n💡 Astuce dys : enumeration = LISTE (pas d\'escalier, juste une liste). Gradation = liste + ESCALIER (ca monte ou descend).\n\n📝 Piege Brevet : si les mots montent en puissance → gradation. Sinon → enumeration. Attention a bien faire la difference !'
                    },
                    // 12 — PERIPHRASE
                    {
                        question: 'C\'est quoi une PERIPHRASE ?',
                        answer: '🎯 La periphrase = remplacer un mot par une expression plus longue qui le decrit.\n\nExemples :\n- "La ville lumiere" = Paris.\n- "Le roi des animaux" = le lion.\n- "L\'astre du jour" = le soleil.\n- "Le billet vert" = le dollar.\n- "Le ballon rond" = le football.\n\nEffet : eviter une repetition, poetiser, donner une image.\n\nEn gros : periphrase = dire en PLUSIEURS mots ce qu\'on pourrait dire en UN.\n\nMot difficile : "peri" = autour, "phrase" = parole. On "tourne autour" du mot.\n\n💡 Astuce dys : PERIphrase = on fait le TOUR du mot au lieu de le dire directement. Comme un GPS qui prendrait un detour.\n\n📝 Piege Brevet : la periphrase est souvent utilisee pour decrire un lieu ou un personnage. Trouve le mot qu\'elle remplace.'
                    }
                ],
                quiz: [
                    { question: '"Cet homme est un lion." C\'est :', options: ['Une comparaison', 'Une metaphore', 'Une personnification', 'Une hyperbole'], correctIndex: 1, explanation: 'Pas de mot "comme" ou equivalent. On dit directement qu\'il EST un lion = metaphore.' },
                    { question: '"Fort comme un lion." C\'est :', options: ['Une metaphore', 'Une comparaison', 'Un oxymore', 'Une anaphore'], correctIndex: 1, explanation: 'Le mot "comme" relie les deux elements. Compare + "comme" + comparant = comparaison.' },
                    { question: '"Le vent hurle dans les arbres." C\'est :', options: ['Une hyperbole', 'Une antithese', 'Une personnification', 'Une comparaison'], correctIndex: 2, explanation: '"Hurler" est une action humaine attribuee au vent (non-humain) = personnification.' },
                    { question: '"Un silence assourdissant." C\'est :', options: ['Une anaphore', 'Une hyperbole', 'Une antithese', 'Un oxymore'], correctIndex: 3, explanation: '"Silence" et "assourdissant" sont contradictoires et colles ensemble = oxymore.' },
                    { question: '"Je meurs de faim !" C\'est :', options: ['Une metaphore', 'Une personnification', 'Une hyperbole', 'Un oxymore'], correctIndex: 2, explanation: 'Exageration volontaire (on ne meurt pas vraiment) pour insister = hyperbole.' },
                    { question: '"Paris ! Paris outrage ! Paris brise !" C\'est :', options: ['Une comparaison', 'Une antithese', 'Une anaphore', 'Une periphrase'], correctIndex: 2, explanation: '"Paris" est repete au DEBUT de chaque groupe = anaphore (repetition en debut de phrase).' },
                    { question: '"Je vis, je meurs ; je me brule et me noie." C\'est :', options: ['Une hyperbole', 'Une anaphore', 'Une antithese', 'Un euphemisme'], correctIndex: 2, explanation: 'Des idees opposees (vis/meurs, brule/noie) dans la meme phrase = antithese.' },
                    { question: '"Il nous a quittes" pour dire "il est mort." C\'est :', options: ['Une litote', 'Un euphemisme', 'Une metaphore', 'Une gradation'], correctIndex: 1, explanation: 'On adoucit une realite desagreable (la mort) avec des mots doux = euphemisme.' },
                    { question: '"Va, je ne te hais point." C\'est :', options: ['Un euphemisme', 'Une litote', 'Une anaphore', 'Une periphrase'], correctIndex: 1, explanation: 'On dit MOINS (je ne te hais pas) pour dire PLUS (je t\'aime) = litote. Figure celebre du Cid.' },
                    { question: '"La ville lumiere" pour dire Paris. C\'est :', options: ['Une metaphore', 'Une comparaison', 'Une periphrase', 'Une hyperbole'], correctIndex: 2, explanation: 'On remplace "Paris" par une expression plus longue = periphrase (on tourne autour du mot).' }
                ]
            },

            // ================================================================
            // SECTION 7 : COMPRENDRE UN TEXTE
            // ================================================================
            {
                id: 'comprehension',
                title: 'Comprendre un texte',
                icon: '\uD83D\uDD0D',
                content: '<h3>Comprehension — Analyser un texte au Brevet</h3>'
                    + '<ul>'
                    + '<li><strong>Types de textes</strong> : narratif, descriptif, argumentatif, explicatif, injonctif</li>'
                    + '<li><strong>Points de vue</strong> : interne, externe, omniscient</li>'
                    + '<li><strong>Registres de langue</strong> : familier, courant, soutenu</li>'
                    + '<li><strong>Champs lexicaux, connecteurs, tonalites</strong></li>'
                    + '</ul>',
                flashcards: [
                    // 1 — TEXTE NARRATIF
                    {
                        question: 'C\'est quoi un texte NARRATIF ?',
                        answer: '🎯 Un texte narratif RACONTE une histoire. Il y a des personnages, des actions, un debut, un milieu, une fin.\n\nIndices pour le reconnaitre :\n- Des verbes d\'ACTION (courir, parler, ouvrir).\n- Des indicateurs de TEMPS (soudain, puis, le lendemain).\n- Un NARRATEUR qui raconte.\n\nOu on le trouve : romans, nouvelles, contes, autobiographies.\n\nEn gros : texte narratif = quelqu\'un raconte une histoire.\n\n💡 Astuce dys : NARRAtif = NARRER = raconter. Si ca raconte → narratif.\n\n📝 Piege Brevet : un texte narratif peut CONTENIR des descriptions. Mais son but principal reste de raconter, pas de decrire.'
                    },
                    // 2 — TEXTE DESCRIPTIF
                    {
                        question: 'C\'est quoi un texte DESCRIPTIF ?',
                        answer: '🎯 Un texte descriptif DECRIT un lieu, un personnage ou un objet. Il fait VOIR au lecteur.\n\nIndices pour le reconnaitre :\n- Beaucoup d\'ADJECTIFS (grand, sombre, rouge).\n- Des verbes d\'ETAT (etre, paraitre, sembler).\n- L\'IMPARFAIT (le temps de la description).\n- Un ordre logique (haut → bas, general → detail).\n\nEn gros : texte descriptif = on peint un tableau avec des mots.\n\n💡 Astuce dys : DESCRIPTif = DECRIRE. Si ca decrit (lieu, personne, objet) → descriptif.\n\n📝 Piege Brevet : au brevet, on te demande souvent le ROLE de la description. Reponse type : "elle cree une atmosphere de..." ou "elle revele le caractere du personnage."'
                    },
                    // 3 — TEXTE ARGUMENTATIF
                    {
                        question: 'C\'est quoi un texte ARGUMENTATIF ?',
                        answer: '🎯 Un texte argumentatif veut CONVAINCRE. Il defend une opinion (these) avec des arguments et des exemples.\n\nStructure :\n- THESE = l\'opinion defendue.\n- ARGUMENTS = les raisons.\n- EXEMPLES = les preuves concretes.\n\nIndices : "je pense que", "en effet", "c\'est pourquoi", "par consequent."\n\nOu on le trouve : editos, discours, lettres ouvertes.\n\nEn gros : texte argumentatif = on defend une idee pour convaincre.\n\nMot difficile : "these" = l\'idee principale qu\'on defend.\n\n💡 Astuce dys : ARGUMENTatif = ARGUMENT. Si ca donne des arguments pour convaincre → argumentatif.\n\n📝 Piege Brevet : repere la these + les arguments. Au brevet, on te demande souvent : "Quelle est la these de l\'auteur ?" et "Quels arguments utilise-t-il ?"'
                    },
                    // 4 — TEXTE EXPLICATIF
                    {
                        question: 'C\'est quoi un texte EXPLICATIF ?',
                        answer: '🎯 Un texte explicatif EXPLIQUE un phenomene. Il repond a "pourquoi ?" ou "comment ?"\n\nIndices :\n- Des DEFINITIONS, des EXEMPLES.\n- Des connecteurs LOGIQUES (car, en effet, c\'est pourquoi).\n- Un ton NEUTRE (pas d\'opinion personnelle).\n- Le present de verite generale.\n\nOu on le trouve : manuels scolaires, articles scientifiques, encyclopedies.\n\nEn gros : texte explicatif = on explique pour faire comprendre. Pas pour convaincre.\n\n💡 Astuce dys : EXPLICATif = EXPLIQUER. Si ca explique un phenomene sans donner son avis → explicatif.\n\n📝 Piege Brevet : ne confonds pas explicatif et argumentatif. Explicatif = neutre (on explique). Argumentatif = partial (on defend une opinion).'
                    },
                    // 5 — TEXTE INJONCTIF
                    {
                        question: 'C\'est quoi un texte INJONCTIF ?',
                        answer: '🎯 Un texte injonctif donne des ORDRES, des CONSEILS ou des INSTRUCTIONS.\n\nIndices :\n- L\'IMPERATIF (faites, melangez, coupez).\n- L\'INFINITIF (faire, melanger, couper).\n- "Il faut", "vous devez."\n- Des listes, des etapes numerotees.\n\nOu on le trouve : recettes de cuisine, modes d\'emploi, regles de jeu, consignes d\'exam.\n\nEn gros : texte injonctif = on te dit quoi faire. "Fais ci, fais ca."\n\n💡 Astuce dys : INJONCTif = INJONCTION = ordre. Si ca donne des ordres ou des instructions → injonctif.\n\n📝 Piege Brevet : le texte injonctif est le moins demande en analyse. Mais reconnais-le ! Un sujet de brevet peut etre injonctif ("Ecrivez un texte...").'
                    },
                    // 6 — POINT DE VUE INTERNE
                    {
                        question: 'C\'est quoi le point de vue INTERNE ?',
                        answer: '🎯 On voit l\'histoire a travers les YEUX d\'un seul personnage. On connait SES pensees et SES emotions.\n\nIndices :\n- Pronoms : "je", "il/elle" (mais avec acces aux pensees).\n- Verbes de PERCEPTION : "il vit", "il entendit", "il sentit."\n- Verbes de SENTIMENT : "il pensait", "il avait peur", "il se demandait."\n- On ne sait PAS ce que pensent les AUTRES personnages.\n\nEn gros : point de vue interne = dans la tete d\'UN seul personnage.\n\n💡 Astuce dys : INTERNE = a l\'INTERieur. On est DANS la tete du personnage. Comme une camera GoPro sur son front.\n\n📝 Piege Brevet : le recit a la 1ere personne ("je") est SOUVENT en point de vue interne. Mais pas toujours !'
                    },
                    // 7 — POINT DE VUE EXTERNE
                    {
                        question: 'C\'est quoi le point de vue EXTERNE ?',
                        answer: '🎯 On voit l\'histoire de l\'EXTERIEUR. Comme une camera qui filme. Aucun acces aux pensees.\n\nIndices :\n- Que des descriptions d\'ACTIONS et d\'APPARENCES.\n- Pas de "il pensait", pas de "il ressentait."\n- Le lecteur doit DEVINER les emotions.\n\nExemple : "L\'homme entra. Il s\'assit. Il ne dit rien." → On ne sait pas ce qu\'il pense.\n\nEn gros : point de vue externe = camera de surveillance. On voit, on n\'entend pas les pensees.\n\n💡 Astuce dys : EXTERNE = a l\'EXTERieur. On voit du DEHORS. Comme un voisin qui regarde par la fenetre.\n\n📝 Piege Brevet : si le texte ne donne AUCUNE pensee, AUCUN sentiment → externe. C\'est le plus rare des trois points de vue.'
                    },
                    // 8 — POINT DE VUE OMNISCIENT
                    {
                        question: 'C\'est quoi le point de vue OMNISCIENT ?',
                        answer: '🎯 Le narrateur sait TOUT sur TOUS les personnages : pensees, passe, futur, secrets.\n\nIndices :\n- On connait les pensees de PLUSIEURS personnages.\n- Le narrateur connait le PASSE et le FUTUR.\n- Il donne des informations que les personnages ignorent.\n\nExemple : "Marie souriait, mais au fond elle etait triste. Pierre, lui, ne s\'en doutait pas."\n\nEn gros : omniscient = le narrateur est un dieu. Il sait tout.\n\nMot difficile : "omniscient" = "omni" (tout) + "scient" (qui sait). Qui sait tout.\n\n💡 Astuce dys : OMNIscient = OMNI = TOUT. Le narrateur sait TOUT sur TOUT LE MONDE.\n\n📝 Piege Brevet : si le narrateur donne les pensees de PLUSIEURS personnages → omniscient. Un seul → interne.'
                    },
                    // 9 — REGISTRES DE LANGUE
                    {
                        question: 'C\'est quoi les REGISTRES DE LANGUE ?',
                        answer: '🎯 Il y a 3 niveaux de langue :\n\n- FAMILIER = entre potes, a l\'oral, argot.\n"Il a flipe, il s\'est barre."\n\n- COURANT = normal, quotidien, poli.\n"Il a eu peur, il est parti."\n\n- SOUTENU = elegant, litteraire, formel.\n"Il fut saisi d\'effroi et prit la fuite."\n\nAu brevet : le registre indique le milieu social du personnage ou le ton de l\'auteur.\n\nEn gros : familier = potes. Courant = normal. Soutenu = chic.\n\n💡 Astuce dys : pense a comment tu parles : avec tes POTES (familier), avec tes PARENTS (courant), au TRIBUNAL (soutenu).\n\n📝 Piege Brevet : on te demande souvent "quel registre de langue et pourquoi ?" Donne le registre + explique l\'effet (caractere du personnage, proximite avec le lecteur, etc.).'
                    },
                    // 10 — CHAMPS LEXICAUX
                    {
                        question: 'C\'est quoi un CHAMP LEXICAL ?',
                        answer: '🎯 Un champ lexical = un ensemble de mots qui se rapportent au MEME THEME.\n\nExemples :\n- Champ lexical de la PEUR : trembler, palir, effroi, terreur, sursauter, crier.\n- Champ lexical de la NATURE : arbre, fleur, riviere, vent, soleil.\n- Champ lexical du COMBAT : epee, bouclier, frapper, blesser, victoire.\n\nAu brevet : identifier un champ lexical pour montrer le THEME ou l\'ATMOSPHERE.\n\nEn gros : champ lexical = famille de mots autour du meme sujet.\n\n💡 Astuce dys : imagine un CHAMP (pature). Tous les mots du meme champ sont dans le meme pre, ils vont ensemble.\n\n📝 Piege Brevet : cite AU MOINS 3 mots du champ lexical pour etre credible. Et nomme le theme : "champ lexical de la peur" (pas juste "peur").'
                    },
                    // 11 — CONNECTEURS LOGIQUES
                    {
                        question: 'C\'est quoi les CONNECTEURS LOGIQUES ?',
                        answer: '🎯 Les connecteurs relient les idees entre elles. Ils montrent la LOGIQUE du texte.\n\nPour AJOUTER : de plus, en outre, par ailleurs, egalement.\nPour OPPOSER : mais, cependant, neanmoins, en revanche, toutefois.\nPour EXPLIQUER : en effet, car, parce que, puisque.\nPour CONCLURE : donc, ainsi, par consequent, en conclusion.\nPour ILLUSTRER : par exemple, notamment, comme.\n\nEn gros : les connecteurs sont la colle du texte. Sans eux, les idees flottent.\n\n💡 Astuce dys : les connecteurs sont des PANNEAUX DE SIGNALISATION. "Mais" = virage. "Donc" = arrivee. "De plus" = tout droit.\n\n📝 Piege Brevet : au brevet, on te demande le ROLE d\'un connecteur. "Mais" = opposition. "Donc" = consequence. "Car" = cause.'
                    },
                    // 12 — TONALITES
                    {
                        question: 'C\'est quoi les TONALITES d\'un texte ?',
                        answer: '🎯 La tonalite = l\'AMBIANCE, l\'effet produit sur le lecteur.\n\n- COMIQUE : fait rire. Exageration, quiproquos, absurde.\n- TRAGIQUE : destin inevitable, mort, fatalite. "Il savait qu\'il allait mourir."\n- PATHETIQUE : fait pleurer, eveille la pitie. "L\'enfant pleurait seul dans la rue."\n- IRONIQUE : on dit le contraire de ce qu\'on pense. "Bravo, quel exploit !" (pour une betise).\n- LYRIQUE : exprime les sentiments (amour, melancolie). "Mon coeur saigne."\n- EPIQUE : exploits heroiques, combats grandioses.\n\nEn gros : la tonalite = l\'emotion que le texte provoque.\n\n💡 Astuce dys : COMIQUE = LOL. TRAGIQUE = mort. PATHETIQUE = larmes. IRONIQUE = sarcasme. LYRIQUE = coeur. EPIQUE = heros.\n\n📝 Piege Brevet : ne confonds pas pathetique et tragique. Pathetique = pitie, on pleure. Tragique = fatalite, destin, on ne peut rien faire.'
                    }
                ],
                quiz: [
                    { question: 'Un texte qui RACONTE une histoire est de type :', options: ['Descriptif', 'Argumentatif', 'Narratif', 'Explicatif'], correctIndex: 2, explanation: 'Narratif = narrer = raconter. Personnages, actions, debut-milieu-fin = texte narratif.' },
                    { question: 'Un texte qui veut CONVAINCRE est de type :', options: ['Narratif', 'Descriptif', 'Explicatif', 'Argumentatif'], correctIndex: 3, explanation: 'Argumentatif = donner des arguments pour convaincre le lecteur d\'une opinion (these).' },
                    { question: 'Le point de vue OMNISCIENT signifie que :', options: ['Le narrateur ne sait rien', 'Le narrateur sait tout', 'On voit par un seul personnage', 'C\'est une camera'], correctIndex: 1, explanation: 'Omniscient = "omni" (tout) + "scient" (qui sait). Le narrateur connait les pensees de TOUS.' },
                    { question: '"Il a flipe, il s\'est barre" est du registre :', options: ['Soutenu', 'Courant', 'Familier', 'Poetique'], correctIndex: 2, explanation: '"Fliper" et "se barrer" sont de l\'argot = registre familier. Courant : "il a eu peur, il est parti."' },
                    { question: '"Trembler, palir, effroi, terreur" forment :', options: ['Une figure de style', 'Un champ lexical de la peur', 'Un registre de langue', 'Une tonalite'], correctIndex: 1, explanation: 'Tous ces mots tournent autour du meme theme (la peur) = champ lexical de la peur.' },
                    { question: '"MAIS" est un connecteur de :', options: ['Addition', 'Opposition', 'Cause', 'Consequence'], correctIndex: 1, explanation: '"Mais" marque une opposition. Il introduit une idee contraire a ce qui precede.' },
                    { question: 'Un texte qui donne des INSTRUCTIONS est de type :', options: ['Narratif', 'Argumentatif', 'Explicatif', 'Injonctif'], correctIndex: 3, explanation: 'Injonctif = injonction = ordre. Recettes, modes d\'emploi, consignes = texte injonctif.' },
                    { question: 'La tonalite PATHETIQUE vise a :', options: ['Faire rire', 'Eveiller la pitie', 'Creer du suspense', 'Convaincre'], correctIndex: 1, explanation: 'Pathetique = "pathos" = souffrance. Ca provoque la pitie et l\'emotion chez le lecteur.' },
                    { question: 'Le point de vue EXTERNE, c\'est comme :', options: ['Etre dans la tete du personnage', 'Une camera de surveillance', 'Un narrateur qui sait tout', 'Un journal intime'], correctIndex: 1, explanation: 'Externe = on voit du dehors, comme une camera. Pas d\'acces aux pensees des personnages.' },
                    { question: '"Bravo, quel exploit !" dit avec sarcasme est de la tonalite :', options: ['Comique', 'Tragique', 'Ironique', 'Lyrique'], correctIndex: 2, explanation: 'On dit le contraire de ce qu\'on pense (on ne felicite pas vraiment) = ironie.' }
                ]
            },

            // ================================================================
            // SECTION 8 : METHODE BREVET FRANCAIS
            // ================================================================
            {
                id: 'methode-brevet',
                title: 'Methode Brevet Francais',
                icon: '\uD83C\uDFC6',
                content: '<h3>Methode — Reussir l\'epreuve de Francais au Brevet</h3>'
                    + '<ul>'
                    + '<li><strong>Dictee</strong> : methode GPOV de relecture</li>'
                    + '<li><strong>Analyse de texte</strong> : methode en 5 etapes</li>'
                    + '<li><strong>Redaction</strong> : argumentatif ou narratif</li>'
                    + '<li><strong>Reecriture</strong> : methode mot a mot</li>'
                    + '<li><strong>Gestion du temps</strong> : 3 heures bien decoupees</li>'
                    + '</ul>',
                flashcards: [
                    // 1 — ORGANISATION DE L'EPREUVE
                    {
                        question: 'Comment est organisee l\'epreuve de francais au brevet ?',
                        answer: '🎯 L\'epreuve dure 3 heures. Elle a 2 parties :\n\nPARTIE 1 (1h10) :\n- Questions sur le texte (50 points).\n- Reecriture (10 points).\n- Dictee (10 points).\n\nPARTIE 2 (1h50, apres une pause) :\n- Redaction au choix (40 points) : sujet d\'imagination OU sujet de reflexion.\n\nTotal : 100 points.\n\nEn gros : questions + reecriture + dictee le matin. Redaction l\'apres-midi.\n\n💡 Astuce dys : la dictee et la reecriture valent 20 points a elles deux. Ce sont des points "faciles" avec la bonne methode.\n\n📝 Piege Brevet : ne passe pas trop de temps sur une question. Si tu bloques, passe a la suivante et reviens apres.'
                    },
                    // 2 — GESTION DU TEMPS PARTIE 1
                    {
                        question: 'Comment gerer le TEMPS en partie 1 ?',
                        answer: '🎯 Partie 1 = 1h10. Repartition conseillee :\n\n- Questions sur le texte : 45 min.\n  → Lis le texte 2 fois avant de commencer.\n  → Reponds dans l\'ORDRE.\n  → Cite toujours le texte entre guillemets.\n\n- Reecriture : 10 min.\n  → Mot a mot, methodiquement.\n  → Relis en comparant a l\'original.\n\n- Dictee : 15 min (dont 5 min de relecture GPOV).\n\nEn gros : 45 min questions, 10 min reecriture, 15 min dictee.\n\n💡 Astuce dys : ecris les horaires en haut de ta copie. Si tu commences a 9h : questions jusqu\'a 9h45. Reecriture jusqu\'a 9h55. Dictee a partir de 9h55.\n\n📝 Piege Brevet : la reecriture est souvent baclee par manque de temps. Mais elle vaut 10 points FACILES si tu es methodique !'
                    },
                    // 3 — GESTION DU TEMPS PARTIE 2
                    {
                        question: 'Comment gerer le TEMPS en partie 2 (redaction) ?',
                        answer: '🎯 Partie 2 = 1h50 pour la redaction. Repartition conseillee :\n\n- Choix du sujet + analyse : 5 min.\n  → Lis les DEUX sujets. Choisis celui ou tu as le plus d\'idees.\n\n- Brouillon (plan + debut) : 20 min.\n  → Fais un plan en 3 parties minimum.\n  → Ecris l\'introduction au brouillon.\n\n- Redaction au propre : 1h10.\n  → Ecris lisiblement. Saute des lignes.\n  → Un paragraphe = une idee.\n\n- Relecture : 15 min.\n  → Orthographe, ponctuation, accords.\n\nEn gros : 5 min choix + 20 min brouillon + 1h10 ecriture + 15 min relecture.\n\n💡 Astuce dys : le brouillon est OBLIGATOIRE. Ne te lance jamais sans plan. Ca evite le hors-sujet et le trou de page blanche.\n\n📝 Piege Brevet : 40 mots mal orthographies = -4 points. 15 min de relecture peuvent sauver beaucoup de points !'
                    },
                    // 4 — METHODE DICTEE : GPOV
                    {
                        question: 'La methode GPOV pour la dictee ?',
                        answer: '🎯 GPOV = 4 relectures ciblees apres la dictee :\n\n📝 G = GRAMMAIRE\nCherche chaque VERBE. Remonte au SUJET. Verifie que le verbe est bien accorde.\n\n📝 P = PARTICIPES PASSES\nCherche chaque participe. Etre → accord avec sujet. Avoir → COD avant ?\n\n📝 O = ORTHOGRAPHE (homophones)\nTeste chaque a/a, et/est, ou/ou, se/ce, son/sont, on/ont avec les astuces de remplacement.\n\n📝 V = VOCABULAIRE\nVerifie les mots difficiles : doubles lettres, accents, terminaisons.\n\nEn gros : 4 relectures, chaque fois un seul type d\'erreur.\n\n💡 Astuce dys : numErote tes relectures. Relecture 1 = G. Relecture 2 = P. Relecture 3 = O. Relecture 4 = V. Pas de relecture "en general."\n\n📝 Piege Brevet : la dictee vaut 10 points. 5 minutes de relecture GPOV peuvent rapporter 3-4 points faciles.'
                    },
                    // 5 — METHODE ANALYSE DE TEXTE
                    {
                        question: 'Comment analyser un texte au brevet (5 etapes) ?',
                        answer: '🎯 Methode en 5 etapes pour les questions :\n\n1️⃣ LIS le texte 2 fois. Note tes premieres impressions.\n\n2️⃣ IDENTIFIE les bases : type de texte ? Narrateur ? Point de vue ? Temps utilises ?\n\n3️⃣ REPERE les procedes : figures de style, champs lexicaux, registre de langue, connecteurs.\n\n4️⃣ COMPRENDS le sens : quel est le message ? L\'intention de l\'auteur ? L\'effet sur le lecteur ?\n\n5️⃣ REPONDS en citant le texte. Toujours : "L\'auteur utilise [procede] (citation) ce qui produit [effet]."\n\nEn gros : lire → identifier → reperer → comprendre → repondre avec des citations.\n\n💡 Astuce dys : souligne dans le texte pendant ta lecture. Couleur 1 = figures de style. Couleur 2 = mots importants. Couleur 3 = connecteurs.\n\n📝 Piege Brevet : ne reponds JAMAIS sans citer le texte. Pas de citation = pas de points (ou tres peu).'
                    },
                    // 6 — COMMENT REPONDRE AUX QUESTIONS
                    {
                        question: 'Comment REPONDRE correctement aux questions ?',
                        answer: '🎯 La methode PEC pour chaque reponse :\n\n📝 P = PROCEDE : nomme le procede (figure de style, temps verbal, champ lexical...).\n\n📝 E = EXEMPLE : cite le texte entre guillemets avec le numero de ligne.\n\n📝 C = COMMENTAIRE : explique l\'EFFET produit sur le lecteur.\n\nExemple de reponse modele :\n"L\'auteur utilise une METAPHORE (P) : \'cet homme est un lion\' ligne 5 (E). Cela montre la bravoure du personnage (C)."\n\nEn gros : procede + citation + explication. Toujours ces 3 elements.\n\n💡 Astuce dys : ecris PEC dans la marge a cote de chaque question. Ca te rappelle la methode.\n\n📝 Piege Brevet : dire "c\'est beau" ou "j\'aime bien" ne rapporte AUCUN point. Il faut NOMMER le procede et EXPLIQUER l\'effet.'
                    },
                    // 7 — LA REECRITURE : METHODE MOT A MOT
                    {
                        question: 'Comment reussir la REECRITURE ?',
                        answer: '🎯 Methode en 5 etapes pour la reecriture :\n\n1️⃣ LIS la consigne 3 fois. Quel changement ? Genre ? Nombre ? Temps ? Personne ?\n\n2️⃣ RECOPIE le texte sans modifier d\'abord.\n\n3️⃣ SOULIGNE chaque mot qui doit changer.\n\n4️⃣ MODIFIE un par un : verbes, determinants, pronoms, adjectifs, participes passes.\n\n5️⃣ RELIS en comparant avec l\'original pour verifier que rien n\'est oublie.\n\nEn gros : mot a mot, lentement, sans rien sauter.\n\n💡 Astuce dys : pointe chaque mot avec ton crayon. "Est-ce que CE mot change ?" Oui → modifie. Non → garde. Mot suivant.\n\n📝 Piege Brevet : l\'erreur la plus courante = oublier un determinant ou un adjectif eloigne du sujet. Verifie CHAQUE mot.'
                    },
                    // 8 — REECRITURE : LES CHANGEMENTS LES PLUS FREQUENTS
                    {
                        question: 'Quels sont les changements de reecriture les plus demandes ?',
                        answer: '🎯 Les 4 changements les plus frequents au brevet :\n\n1️⃣ SINGULIER → PLURIEL : il → ils, le → les, -ait → -aient, son → leurs, celui → ceux.\n\n2️⃣ MASCULIN → FEMININ : le → la, grand → grande, il → elle, parti → partie, beau → belle.\n\n3️⃣ CHANGEMENT DE TEMPS : imparfait → present, passe simple → present, present → passe.\n\n4️⃣ CHANGEMENT DE PERSONNE : il → je, je → nous, tu → vous.\n\nEn gros : genre, nombre, temps, personne. Ce sont les 4 types.\n\n💡 Astuce dys : avant de commencer, ecris le changement en GROS en haut de ta copie. "SINGULIER → PLURIEL." Ca te rappelle ce que tu fais.\n\n📝 Piege Brevet : quand on change de personne (il → je), le point de vue change aussi. Les possessifs changent : "son" → "mon." "Sa" → "ma."'
                    },
                    // 9 — REDACTION : SUJET D'IMAGINATION
                    {
                        question: 'Comment reussir le sujet d\'IMAGINATION ?',
                        answer: '🎯 Le sujet d\'imagination te demande d\'ECRIRE un texte narratif (recit, suite de texte, dialogue...).\n\nStructure :\n1. Situation initiale (imparfait).\n2. Element perturbateur (soudain + passe simple).\n3. Peripeties (passe simple).\n4. Resolution.\n5. Situation finale.\n\nConseils :\n- Utilise les 5 SENS dans tes descriptions.\n- Varie les verbes de parole dans les dialogues.\n- Fais des PARAGRAPHES (un par etape).\n\nEn gros : raconte une histoire bien structuree avec du vocabulaire varie.\n\n💡 Astuce dys : au brouillon, ecris juste 5 mots-cles (un par etape). Ca te donne un fil directeur.\n\n📝 Piege Brevet : ne fais pas trop court (minimum 2 pages) ni trop long (risque de fautes). Vise 2-3 pages bien ecrites.'
                    },
                    // 10 — REDACTION : SUJET DE REFLEXION
                    {
                        question: 'Comment reussir le sujet de REFLEXION ?',
                        answer: '🎯 Le sujet de reflexion te demande de donner ton AVIS et de le defendre avec des arguments.\n\nStructure :\n1. INTRODUCTION : presente le sujet + annonce ton opinion.\n2. ARGUMENT 1 + exemple concret.\n3. ARGUMENT 2 + exemple concret.\n4. ARGUMENT 3 + exemple (optionnel).\n5. CONCLUSION : resume + ouverture.\n\nConseils :\n- UN paragraphe = UN argument.\n- Utilise des CONNECTEURS (de plus, cependant, en effet).\n- Donne des exemples de la VIE REELLE (livres, films, actualite).\n\nEn gros : opinion + arguments + exemples + connecteurs = redaction reussie.\n\n💡 Astuce dys : au brouillon, fais un tableau : Argument 1 | Exemple 1 | Argument 2 | Exemple 2. Puis redige.\n\n📝 Piege Brevet : pas d\'exemple = pas de points. Chaque argument DOIT etre illustre par un exemple concret.'
                    },
                    // 11 — LES QUESTIONS LES PLUS FREQUENTES
                    {
                        question: 'Quelles sont les QUESTIONS les plus frequentes au brevet ?',
                        answer: '🎯 Les 8 questions qui tombent presque CHAQUE ANNEE :\n\n1. "Quel est le type de ce texte ?" → narratif, argumentatif...\n2. "Qui est le narrateur ? Quel point de vue ?" → interne, externe, omniscient.\n3. "Relevez une figure de style et expliquez son effet."\n4. "Quel est le champ lexical dominant ?"\n5. "Quel temps est utilise et pourquoi ?"\n6. "Quelle est la these de l\'auteur ?" (texte argumentatif)\n7. "Quel registre de langue et pourquoi ?"\n8. "Quelle est l\'intention de l\'auteur ?"\n\nEn gros : type de texte, narrateur, figures de style, champs lexicaux, temps, these. Toujours les memes.\n\n💡 Astuce dys : prepare des reponses-types pour chaque question. Entraine-toi avec des annales.\n\n📝 Piege Brevet : "l\'intention de l\'auteur" ≠ "ce que raconte le texte." L\'intention = POURQUOI il ecrit ca (emouvoir, convaincre, denoncer, amuser).'
                    },
                    // 12 — ERREURS A EVITER ABSOLUMENT
                    {
                        question: 'Les 5 erreurs a EVITER le jour du brevet ?',
                        answer: '🎯 Les 5 erreurs qui coutent le plus de points :\n\n⚠️ 1. PAS DE CITATION. Repondre sans citer le texte = reponse incomplete.\n\n⚠️ 2. HORS-SUJET en redaction. N\'avoir pas lu la consigne = catastrophe.\n\n⚠️ 3. PAS DE RELECTURE en dictee. 5 min de GPOV = 3-4 points gagnes.\n\n⚠️ 4. OUBLIER DES MOTS en reecriture. Ne pas verifier mot a mot = points perdus bêtement.\n\n⚠️ 5. ECRITURE ILLISIBLE. Si le correcteur ne peut pas te lire, il ne peut pas te noter.\n\nEn gros : cite, lis la consigne, relis, verifie, ecris lisiblement.\n\n💡 Astuce dys : ecris GROS et saute des lignes. Mieux vaut un texte plus court et lisible qu\'un pave illisible.\n\n📝 Piege Brevet : le brevet recompense la METHODE autant que les connaissances. Un eleve methodique avec des lacunes peut tres bien s\'en sortir.'
                    }
                ],
                quiz: [
                    { question: 'Combien de temps dure l\'epreuve de francais au brevet ?', options: ['2 heures', '3 heures', '4 heures', '1h30'], correctIndex: 1, explanation: 'L\'epreuve dure 3 heures au total : partie 1 (1h10) + pause + partie 2 (1h50).' },
                    { question: 'La methode GPOV sert a :', options: ['Ecrire un recit', 'Relire sa dictee de facon ciblee', 'Analyser un texte', 'Faire la reecriture'], correctIndex: 1, explanation: 'GPOV = 4 relectures : Grammaire, Participes, Orthographe (homophones), Vocabulaire.' },
                    { question: 'Pour repondre aux questions, la methode est :', options: ['Recopier le texte', 'PEC : Procede, Exemple, Commentaire', 'Donner son avis personnel', 'Faire des phrases longues'], correctIndex: 1, explanation: 'PEC = nommer le Procede, citer un Exemple du texte, faire un Commentaire sur l\'effet.' },
                    { question: 'En reecriture, l\'erreur la plus courante est :', options: ['Mal ecrire', 'Oublier des mots a modifier', 'Ecrire trop vite', 'Ne pas comprendre le texte'], correctIndex: 1, explanation: 'L\'oubli d\'un determinant, d\'un pronom ou d\'un adjectif eloigne = erreur la plus frequente. Verifie mot a mot.' },
                    { question: 'En redaction argumentative, chaque argument doit :', options: ['Etre tres long', 'Etre illustre par un exemple', 'Repeter la these', 'Commencer par "je pense"'], correctIndex: 1, explanation: 'Argument sans exemple = incomplet. Chaque argument DOIT etre illustre par un exemple concret.' },
                    { question: 'Combien vaut la dictee au brevet ?', options: ['5 points', '10 points', '20 points', '40 points'], correctIndex: 1, explanation: 'La dictee vaut 10 points. La reecriture aussi 10 points. Les questions 50 points. La redaction 40 points.' },
                    { question: 'Que faut-il TOUJOURS faire en repondant aux questions ?', options: ['Donner son avis', 'Citer le texte', 'Faire des schemas', 'Ecrire en majuscules'], correctIndex: 1, explanation: 'Pas de citation = pas (ou peu) de points. Cite TOUJOURS entre guillemets avec le numero de ligne.' },
                    { question: 'Avant d\'ecrire la redaction, il faut :', options: ['Commencer tout de suite', 'Faire un plan au brouillon', 'Recopier le sujet', 'Compter les lignes'], correctIndex: 1, explanation: 'Le brouillon est ESSENTIEL. Plan + introduction au brouillon = pas de hors-sujet et pas de page blanche.' }
                ]
            },

            // ================================================================
            // SECTION 9 : ENTRAINEMENT BREVET — PIEGES & EXEMPLES
            // ================================================================
            {
                id: 'entrainement-brevet-francais',
                title: 'Entrainement Brevet : pieges & exemples',
                icon: '🎯',
                content: '<h3>Pieges frequents, exemples rediges, mini-sujet type DNB</h3>'
                    + '<ul>'
                    + '<li><strong>Dictee</strong> : accords sujet-verbe piege, PP etre/avoir/pronominal, homophones</li>'
                    + '<li><strong>Redaction</strong> : intro/argument/conclusion rediges, vocabulaire, exemples litteraires</li>'
                    + '<li><strong>Comprehension & grammaire</strong> : type de texte, point de vue, nature/fonction, temps, interpretation</li>'
                    + '<li><strong>Mini-sujet</strong> : texte court + 5 questions DNB (compre. + dictee + redaction)</li>'
                    + '</ul>',
                flashcards: [
                    // --- AXE 1 : DICTEE — PIEGES FREQUENTS ---

                    // CARD 1 — Accord sujet-verbe eloigne
                    {
                        question: 'DICTEE : l\'accord sujet-verbe quand le sujet est ELOIGNE ou INVERSE',
                        answer: '🎯 Le piege : trouver LE VRAI sujet du verbe, meme s\'il est loin.\n\nExemples corriges :\n• "Les oiseaux, malgre la pluie, chantaient." → sujet = "les oiseaux" (pluriel) → chantaient.\n• "Dans le jardin poussent des roses." → sujet INVERSE = "des roses" → poussent.\n• "Le bruit des vagues me berce." → sujet = "le bruit" (singulier) → berce (pas "bercent" !).\n\nEn gros : pose-toi la question "QUI fait l\'action ?" Pas "quel mot est le plus proche du verbe ?"\n\n💡 Astuce dys : encadre le sujet. Trace une fleche jusqu\'au verbe. Verifie l\'accord.\n\n📝 Piege Brevet : "Le bruit des vagues" → le sujet est "le bruit" (singulier), PAS "les vagues". Tres frequent a la dictee.'
                    },

                    // CARD 2 — PP avec ETRE
                    {
                        question: 'DICTEE : accord du PARTICIPE PASSE avec ETRE',
                        answer: '🎯 Regle avec ETRE : le participe passe s\'accorde avec le SUJET.\n\nExemples :\n• "Marie est arrivee." → "arrivee" (feminin, accord avec Marie).\n• "Les enfants sont partis." → "partis" (masculin pluriel, accord avec enfants).\n• "Les filles sont rentrees tard." → "rentrees" (feminin pluriel).\n\nEn gros : avec ETRE, regarde le SUJET et accorde en genre ET en nombre.\n\nMot difficile : "participe passe" = forme du verbe qu\'on utilise apres etre/avoir (mange, parti, venue...).\n\n💡 Astuce dys : ETRE = accord SUJET. "EtrE" = "EgalE au Sujet."\n\n📝 Piege Brevet : attention aux verbes de mouvement (aller, venir, partir, arriver, entrer, sortir, monter, descendre, rester, tomber, naitre, mourir) : ils se conjuguent avec ETRE.'
                    },

                    // CARD 3 — PP avec AVOIR
                    {
                        question: 'DICTEE : accord du PARTICIPE PASSE avec AVOIR',
                        answer: '🎯 Regle avec AVOIR : jamais d\'accord avec le SUJET.\n\nOn accorde SEULEMENT si le COD est PLACE AVANT le verbe.\n\nExemples :\n• "J\'ai mange les pommes." → COD "les pommes" APRES → pas d\'accord → mange.\n• "Les pommes que j\'ai mangees." → COD "que" (= les pommes) AVANT → mangees.\n• "Elle a pris les fleurs." → COD apres → pris.\n• "Les fleurs qu\'elle a prises." → COD avant → prises.\n\nEn gros : avec AVOIR, cherche le COD. Avant le verbe ? → accord. Apres ? → pas d\'accord.\n\n💡 Astuce dys : pose la question "Qui ? Quoi ?" APRES le verbe. Si la reponse est AVANT dans la phrase → accord.\n\n📝 Piege Brevet : les pronoms "la, les, l\', que" sont souvent des COD places AVANT. Declencheurs d\'accord !'
                    },

                    // CARD 4 — Verbes pronominaux
                    {
                        question: 'DICTEE : les verbes PRONOMINAUX (se + verbe)',
                        answer: '🎯 Verbes pronominaux = "se laver", "se souvenir", "se dire"...\n\nRegle courante collegien : le participe passe s\'accorde avec le SUJET la plupart du temps.\n\nExemples simples :\n• "Elle s\'est levee tot." → accord avec elle → levee.\n• "Les enfants se sont endormis." → accord avec enfants → endormis.\n• "Marie et Lucien se sont arretes." → accord avec le sujet pluriel → arretes.\n\nEXCEPTION a connaitre :\n• "Elles se sont lave les mains." → le COD ("les mains") est APRES → PAS d\'accord → lave.\n\nEn gros : par defaut, accord avec le sujet. Si le COD est apres → pas d\'accord.\n\n💡 Astuce dys : souligne "s\' / se". Reperes le COD. Apres le verbe ? → pas d\'accord.\n\n📝 Piege Brevet : "elles se sont LAVEES" vs "elles se sont LAVE les mains" — 2 phrases differentes, 2 accords differents !'
                    },

                    // CARD 5 — Homophones-pieges dictee
                    {
                        question: 'DICTEE : les HOMOPHONES-pieges les plus frequents',
                        answer: '🎯 Les pieges classiques a tester a chaque dictee :\n\n• A / A : "a" (verbe avoir → remplace par "avait") vs "a" (preposition).\nEx : "Il a (avait) un chien" / "Il va a Paris".\n\n• ET / EST : "et" (=puis) vs "est" (verbe etre → remplace par "etait").\nEx : "Il est (etait) tard et (puis) je dors."\n\n• SES / CES / C\'EST / S\'EST :\n- "ses" (=les siens, ses cles).\n- "ces" (=ceux-la, ces gens).\n- "c\'est" (=cela est).\n- "s\'est" (dans un verbe pronominal : il s\'est leve).\n\n• QUAND / QUANT / QU\'EN :\n- "quand" (=lorsque).\n- "quant a" (=concernant).\n- "qu\'en" (que + en).\n\n• OU / OU : "ou" (=ou bien) vs "ou" (lieu, "la ou").\n\nEn gros : pour chaque piege, utilise l\'astuce de remplacement.\n\n💡 Astuce dys : fiche chaque homophone sur un post-it. Teste-les un par un a la fin de la dictee.\n\n📝 Piege Brevet : la dictee en vaut 10 points. Les homophones sont LA moitie des erreurs. Relecture ciblee = points faciles.'
                    },

                    // --- AXE 2 : REDACTION DNB — EXEMPLES CONCRETS ---

                    // CARD 6 — Exemple d'intro (sujet de reflexion)
                    {
                        question: 'REDACTION : exemple d\'INTRODUCTION (sujet de reflexion)',
                        answer: '🎯 Modele d\'intro pour un sujet type : "Selon vous, lire des romans permet-il de mieux comprendre le monde ?"\n\nINTRO (3 etapes) :\n1) ACCROCHE : "Chaque annee, des millions de romans sont publies dans le monde."\n2) PROBLEMATIQUE : "Mais a quoi sert vraiment la lecture de fiction ? Lire des romans permet-il de mieux comprendre la realite ?"\n3) ANNONCE DU PLAN / DE L\'AVIS : "Nous verrons que le roman aide a comprendre les sentiments humains, puis les differentes epoques, et enfin les enjeux de notre societe."\n\nEn gros : 3 phrases qui posent le contexte, le sujet, et annoncent ta demarche.\n\n💡 Astuce dys : copie ce modele et change juste les themes. Tu peux le reutiliser pour n\'importe quel sujet.\n\n📝 Piege Brevet : ne saute PAS l\'intro. Une redaction sans intro = -3 a -5 points.'
                    },

                    // CARD 7 — Exemple de paragraphe argumentatif
                    {
                        question: 'REDACTION : exemple de PARAGRAPHE argumentatif',
                        answer: '🎯 Modele de paragraphe (argument + exemple) :\n\n"Tout d\'abord, le roman permet de mieux comprendre les sentiments humains. En effet, en suivant un personnage, le lecteur entre dans sa tete et partage ses emotions. Par exemple, dans \'Vendredi ou la vie sauvage\' de Michel Tournier, on ressent la solitude de Robinson sur son ile. Ce texte nous aide a comprendre ce qu\'est l\'isolement, meme si nous n\'avons jamais ete seuls nous-memes. Ainsi, la lecture developpe l\'empathie."\n\nStructure (4 etapes) :\n1) Connecteur + argument ("Tout d\'abord, le roman permet...").\n2) Explication ("En effet...").\n3) Exemple concret ("Par exemple, dans... de...").\n4) Conclusion du paragraphe ("Ainsi...").\n\nEn gros : connecteur → argument → explication → exemple → mini-conclusion.\n\n💡 Astuce dys : utilise des connecteurs differents par paragraphe : Tout d\'abord / De plus / Enfin.\n\n📝 Piege Brevet : un argument SANS exemple = 50% des points perdus. Toujours un titre d\'oeuvre, un auteur, une situation concrete.'
                    },

                    // CARD 8 — Exemple de conclusion
                    {
                        question: 'REDACTION : exemple de CONCLUSION reussie',
                        answer: '🎯 Modele de conclusion (2 etapes) :\n\n"En conclusion, lire des romans permet de mieux comprendre le monde, car la fiction developpe l\'empathie, enrichit la connaissance du passe, et eclaire les debats contemporains. Mais au-dela du roman, d\'autres formes d\'art — le cinema, le theatre, la poesie — offrent aussi cette ouverture sur le reel."\n\nStructure :\n1) BILAN : reprends tes arguments en 1 phrase (synthese).\n2) OUVERTURE : elargis le sujet (autre art, autre epoque, autre question).\n\nEn gros : resume + ouverture. Deux phrases suffisent souvent.\n\n💡 Astuce dys : la conclusion commence TOUJOURS par un connecteur : "En conclusion", "Pour finir", "Finalement".\n\n📝 Piege Brevet : ne termine pas par "voila." ou "c\'est tout." Ouvre sur une reflexion plus large.'
                    },

                    // CARD 9 — Vocabulaire pour sujet d'imagination
                    {
                        question: 'REDACTION : vocabulaire RICHE pour le sujet d\'IMAGINATION',
                        answer: '🎯 Au lieu de repeter "dire" ou "voir", varie !\n\nPOUR "dire" : murmurer, chuchoter, hurler, souffler, balbutier, repliquer, s\'exclamer, lancer, grommeler.\n\nPOUR "voir" : apercevoir, distinguer, observer, remarquer, contempler, scruter, entrevoir.\n\nPOUR "aller" : se diriger, se precipiter, foncer, s\'approcher, s\'eloigner, fuir, s\'avancer.\n\nPOUR "beau/jolie" : magnifique, splendide, eblouissant, charmant, ravissant, delicat.\n\nPOUR "peur" : angoisse, effroi, terreur, apprehension, anxiete, panique.\n\nExemple avant/apres :\n• AVANT : "Il dit qu\'il voit un chat noir. Il a peur."\n• APRES : "Il murmura qu\'il apercevait un chat noir. L\'effroi le saisit."\n\nEn gros : 3 ou 4 mots riches par page = +2 a +3 points.\n\n💡 Astuce dys : garde une liste de 10 synonymes prets. Pioche dedans le jour J.\n\n📝 Piege Brevet : un texte plat avec "il dit, il voit, il va" = note moyenne. Un texte avec vocabulaire varie = +++ bonus.'
                    },

                    // CARD 10 — Exemples litteraires 3e
                    {
                        question: 'REDACTION : oeuvres et EXEMPLES litteraires a mobiliser (3e)',
                        answer: '🎯 Oeuvres souvent etudiees en 3e. Retiens 1 auteur + 1 phrase par theme.\n\nGUERRE :\n• "Le Journal d\'Anne Frank" (temoignage d\'une jeune juive pendant la Shoah).\n• "Le Silence de la mer" de Vercors (resistance discrete).\n\nENGAGEMENT / LIBERTE :\n• "L\'Ile au tresor" de Stevenson (aventure, courage).\n• Les Poemes de Paul Eluard : "Liberte" (resistance).\n\nAUTOBIOGRAPHIE / IDENTITE :\n• "Vipere au poing" de Herve Bazin (enfance difficile).\n• "Enfance" de Nathalie Sarraute.\n\nSCIENCE-FICTION / IMAGINAIRE :\n• "La Planete des singes" de Pierre Boulle.\n• "Frankenstein" de Mary Shelley.\n\nEn gros : 3-4 oeuvres de 3e suffisent. Apprends le titre, l\'auteur, 1 phrase de resume.\n\n💡 Astuce dys : cree une "fiche arsenal" : 5 oeuvres × 3 themes chacune = 15 exemples prets.\n\n📝 Piege Brevet : cite l\'auteur ET le titre entre guillemets. Jamais "dans un livre que j\'ai lu..." — c\'est vague et ca rapporte zero point.'
                    },

                    // --- AXE 3 : COMPREHENSION / GRAMMAIRE — BASES ---

                    // CARD 11 — Identifier le type de texte
                    {
                        question: 'COMPREHENSION : comment IDENTIFIER le type de texte ?',
                        answer: '🎯 5 types frequents au brevet :\n\n1) NARRATIF : raconte une histoire. Reperes : passe simple/imparfait, personnages, action. Ex : roman, conte.\n\n2) DESCRIPTIF : decrit un lieu, une personne, un objet. Reperes : imparfait, adjectifs, vocabulaire des sens. Ex : portrait.\n\n3) ARGUMENTATIF : defend une opinion. Reperes : connecteurs logiques (car, donc, cependant), presence de "je" ou "nous". Ex : tribune, essai.\n\n4) EXPLICATIF : donne des informations. Reperes : present de verite, termes techniques. Ex : documentaire.\n\n5) INJONCTIF : donne des ordres/conseils. Reperes : imperatif, infinitifs. Ex : recette, notice.\n\nEn gros : regarde les TEMPS + la presence de "je" + le BUT du texte.\n\n💡 Astuce dys : tableau 3 colonnes : type / indice / exemple. Revise-le la veille.\n\n📝 Piege Brevet : un texte peut MELANGER plusieurs types. Cite alors le type DOMINANT et justifie.'
                    },

                    // CARD 12 — Narrateur / point de vue
                    {
                        question: 'COMPREHENSION : le NARRATEUR et le POINT DE VUE',
                        answer: '🎯 Qui raconte l\'histoire ? D\'ou ?\n\nNARRATEUR :\n• 1ERE PERSONNE ("je") : narrateur personnage, interieur de l\'action.\n• 3E PERSONNE ("il/elle") : narrateur exterieur a l\'histoire.\n\nPOINT DE VUE (focalisation) :\n• INTERNE : on est dans la tete d\'UN seul personnage. On sait ce qu\'il pense.\n• EXTERNE : on voit la scene comme une camera. On ne connait les pensees de personne.\n• OMNISCIENT : on sait TOUT sur TOUS les personnages (pensees, passe, avenir).\n\nExemples :\n• "Il entra, le cœur lourd." → point de vue INTERNE (on connait son etat).\n• "Il entra dans la piece a 20h." → point de vue EXTERNE (fait brut).\n• "Il entra. Marie, qui l\'attendait depuis midi, retenait sa colere." → OMNISCIENT (on connait plusieurs personnages).\n\nEn gros : interne = UN esprit. Externe = aucun. Omniscient = TOUS.\n\n💡 Astuce dys : cherche les verbes de PENSEE ("il pensa", "il crut", "elle se dit"). Presents = interne ou omniscient.\n\n📝 Piege Brevet : "narrateur a la 1ere personne" ≠ "point de vue interne" automatique. Un "je" peut etre omniscient s\'il connait les pensees des autres.'
                    },

                    // CARD 13 — Nature vs fonction
                    {
                        question: 'GRAMMAIRE : difference entre NATURE et FONCTION d\'un mot',
                        answer: '🎯 Question archi-classique au brevet !\n\nNATURE = la CARTE D\'IDENTITE du mot. Ce QU\'IL EST (ne change jamais).\nFONCTION = le ROLE du mot dans la phrase. Ce QU\'IL FAIT.\n\nExemple dans "Le chien mange un os" :\n• "chien" → NATURE = nom. FONCTION = sujet du verbe manger.\n• "os" → NATURE = nom. FONCTION = COD du verbe manger.\n• "un" → NATURE = determinant. FONCTION = determine "os".\n\nNATURES possibles : nom, verbe, adjectif, adverbe, pronom, determinant, preposition, conjonction.\n\nFONCTIONS possibles : sujet, COD, COI, attribut, complement circonstanciel, epithete, apposition.\n\nEn gros : nature = CE QUE C\'EST. Fonction = CE QUE CA FAIT.\n\n💡 Astuce dys : NATURE = NAissance du mot. FONCTION = FONCtionnement dans la phrase.\n\n📝 Piege Brevet : on te demande souvent LES DEUX. Reponds toujours : "Nature = X. Fonction = Y."'
                    },

                    // CARD 14 — Valeurs des temps
                    {
                        question: 'GRAMMAIRE : les VALEURS des temps dans un recit',
                        answer: '🎯 Les 3 temps cles du recit et leurs emplois :\n\nIMPARFAIT :\n• DESCRIPTION ("Il faisait nuit").\n• ACTION QUI DURE ("Il marchait tranquillement").\n• HABITUDE ("Tous les soirs, il lisait").\n\nPASSE SIMPLE :\n• ACTION SOUDAINE / PONCTUELLE ("Soudain, il cria").\n• ENCHAINEMENT D\'ACTIONS ("Il entra, sortit son livre, l\'ouvrit").\n\nPRESENT DE NARRATION :\n• RENDRE VIVANT un passage (souvent dans un moment cle du recit).\n• Rend l\'action PLUS PROCHE du lecteur.\n\nExemple : "Il MARCHAIT (imparfait, toile de fond). Soudain, une ombre APPARUT (passe simple, action). Il SE FIGE (present de narration, on a l\'impression d\'y etre)."\n\nEn gros : imparfait = decor, passe simple = action, present de narration = dramatise.\n\n💡 Astuce dys : imparfait = film au ralenti. Passe simple = photo (instant). Present = on y est.\n\n📝 Piege Brevet : si un texte au passe contient soudain un PRESENT, c\'est souvent le "present de narration" — cite-le, ca impressionne.'
                    },

                    // CARD 15 — Question d'interpretation
                    {
                        question: 'COMPREHENSION : comment repondre a une question d\'INTERPRETATION ?',
                        answer: '🎯 Les questions "interpretation" demandent ton ANALYSE, pas juste une reponse factuelle.\n\nExemples de questions :\n• "Quelle est l\'intention de l\'auteur ?"\n• "Que veut montrer l\'auteur a travers ce personnage ?"\n• "Quel effet produit cette figure de style ?"\n\nMethode en 3 etapes :\n1) RELIS le passage concerne.\n2) REPERE un PROCEDE (figure, champ lexical, ton, temps).\n3) EXPLIQUE l\'EFFET sur le lecteur ou le sens profond.\n\nExemple de reponse modele :\n"L\'auteur utilise un champ lexical de la peur (\'tremblait\', \'hurla\', \'terreur\' lignes 4-6) pour plonger le lecteur dans l\'angoisse du personnage. Ainsi, il montre que la guerre traumatise meme les adultes les plus courageux."\n\nEn gros : cite + procede + effet + message global.\n\n💡 Astuce dys : structure ta reponse en 3 phrases. Phrase 1 = citation. Phrase 2 = procede. Phrase 3 = effet.\n\n📝 Piege Brevet : ne reponds JAMAIS "parce que c\'est beau" ou "c\'est triste". Nomme le procede technique + explique l\'EFFET sur le lecteur.'
                    }
                ],
                quiz: [
                    { question: 'Dans "Les pommes que j\'ai mangees sont bonnes", "mangees" s\'accorde car :', options: ['Avoir impose toujours l\'accord', 'Le COD "que" (= les pommes) est place AVANT', 'Le sujet est "je"', 'Les verbes au passe composent s\'accordent'], correctIndex: 1, explanation: '🎯 Avec AVOIR, on accorde le PP avec le COD seulement s\'il est place AVANT le verbe. Ici "que" (reprend "les pommes") est avant.' },
                    { question: 'Dans "Marie est partie tot", "partie" est au feminin car :', options: ['Le verbe partir est toujours feminin', 'ETRE impose l\'accord avec le sujet "Marie"', 'C\'est la regle du passe compose', 'C\'est une exception'], correctIndex: 1, explanation: 'Avec ETRE, le PP s\'accorde avec le sujet. "Marie" est feminin singulier → "partie".' },
                    { question: '"Ces / ses / c\'est / s\'est" : dans "___ cles sont perdues", il faut :', options: ['ces (celles-la)', 'ses (les siennes)', 'c\'est (cela est)', 's\'est (verbe)'], correctIndex: 1, explanation: '"Ses" (= les siennes) car on parle de cles qui appartiennent a quelqu\'un. "Ces" = celles-la (demonstratif), sens different.' },
                    { question: 'Un sujet de REFLEXION demande :', options: ['Raconter une histoire', 'Donner son avis avec des arguments et exemples', 'Recopier le texte', 'Decrire un personnage'], correctIndex: 1, explanation: 'Reflexion = opinion + arguments + exemples concrets + connecteurs logiques. Structure : intro / 2-3 arguments / conclusion.' },
                    { question: 'Dans "Le chien noir dort sur le tapis", "noir" a pour :', options: ['Nature = adjectif, fonction = epithete', 'Nature = adverbe, fonction = sujet', 'Nature = nom, fonction = COD', 'Nature = verbe, fonction = attribut'], correctIndex: 0, explanation: 'Nature = adjectif qualificatif. Fonction = epithete du nom "chien" (accolee au nom sans verbe).' },
                    { question: 'Un point de vue INTERNE signifie que :', options: ['Le narrateur voit tout', 'On est dans la tete d\'UN SEUL personnage', 'Le narrateur est exterieur', 'Il n\'y a pas de narrateur'], correctIndex: 1, explanation: 'Focalisation interne = on partage les pensees et les sensations d\'UN seul personnage. Pas celles des autres.' },
                    { question: 'Le PRESENT DE NARRATION sert a :', options: ['Decrire le passe lointain', 'Rendre une action plus VIVANTE dans un recit', 'Donner un ordre', 'Exprimer l\'habitude'], correctIndex: 1, explanation: 'Present de narration = un present place dans un recit au passe, pour dramatiser et rapprocher l\'action du lecteur.' },
                    { question: 'Pour repondre a "Quel est l\'effet de cette metaphore ?", il faut :', options: ['Dire que c\'est beau', 'Citer + expliquer l\'EFFET sur le lecteur', 'Recopier la phrase', 'Donner une opinion personnelle'], correctIndex: 1, explanation: 'Toujours : citer le passage + nommer le procede + expliquer l\'EFFET (emotion, image, insistance).' },
                    { question: 'Un argument sans EXEMPLE CONCRET :', options: ['Rapporte tous les points', 'Perd environ la moitie des points', 'Ne change rien a la note', 'Est obligatoire'], correctIndex: 1, explanation: 'Un argument sans exemple = reponse incomplete. Cite toujours une oeuvre, un auteur, une situation precise.' },
                    { question: 'Le verbe pronominal "se laver" dans "elles se sont lave les mains" :', options: ['"lave" s\'accorde (lavees)', 'Pas d\'accord (lave) car le COD est APRES', '"lave" est toujours invariable', 'Le verbe ne s\'accorde jamais'], correctIndex: 1, explanation: 'COD ("les mains") place APRES le verbe → pas d\'accord → "lave". Piege classique : "elles se sont lavees" (sans COD apres) s\'accorde ; avec "les mains" apres, non.' }
                ],
                miniSujet: {
                    title: 'Mini-sujet DNB — Comprehension + grammaire + dictee + redaction',
                    duration: '30 minutes',
                    intro: 'TEXTE SUPPORT (texte d\'entrainement) :\n\n"La pluie tombait depuis trois jours sur la petite ville. Dans la ruelle deserte, Lucien releva le col de son manteau et pressa le pas. Soudain, un cri dechira la nuit — un cri aigu, presque inhumain. Il s\'arreta net, le cœur battant. Personne. Rien. Seul le vent sifflait entre les pierres humides. Il hesita. Puis, rassemblant son courage, il avanca vers l\'origine du bruit."',
                    questions: [
                        {
                            type: 'qcm',
                            text: 'Question 1 (Comprehension — 4 pts) : Quel est le type dominant de ce texte ?',
                            options: [
                                'Descriptif (il decrit un lieu statique)',
                                'Narratif (il raconte une action dans le temps)',
                                'Argumentatif (il defend une opinion)',
                                'Injonctif (il donne des ordres)'
                            ],
                            correctIndex: 1,
                            answer: 'NARRATIF. Indices : verbes d\'action au passe ("releva", "pressa", "s\'arreta", "avanca"), enchainement d\'evenements dans le temps, personnage ("Lucien"), utilisation classique imparfait + passe simple.'
                        },
                        {
                            type: 'qcm',
                            text: 'Question 2 (Comprehension — 4 pts) : Quel est le point de vue du narrateur ?',
                            options: [
                                'Externe : on voit la scene comme une camera',
                                'Interne : on partage les sensations de Lucien',
                                'Omniscient : on sait tout sur tous les personnages',
                                'Premiere personne : le narrateur est Lucien'
                            ],
                            correctIndex: 1,
                            answer: 'INTERNE. On est dans la tete de Lucien : "le cœur battant" (sa sensation), "il hesita" (son emotion), "rassemblant son courage" (son etat interieur). On ne connait PAS les pensees d\'autres personnages.'
                        },
                        {
                            type: 'open',
                            text: 'Question 3 (Grammaire + figure de style — 4 pts) : Dans "un cri dechira la nuit", quelle figure de style est utilisee ? Quel effet produit-elle ?',
                            answer: 'Figure de style = PERSONNIFICATION (un cri n\'est pas une personne, mais l\'auteur lui prete une action humaine : "dechirer"). On peut aussi parler de METAPHORE (la nuit est comparee implicitement a un tissu qu\'on dechire). EFFET : rend le cri violent, soudain, quasi physique. Cela accentue la surprise du personnage et l\'angoisse du lecteur.'
                        },
                        {
                            type: 'open',
                            text: 'Question 4 (Dictee ciblee — 4 pts) : Complete cette phrase en justifiant ton accord : "Marie et Lucien se sont ____ (arreter) net, puis ils ont ____ (entendre) un cri qu\'ils n\'avaient jamais ____ (entendre) auparavant."',
                            answer: 'Les 3 formes correctes :\n• "arretes" (verbe pronominal, accord avec le sujet pluriel "Marie et Lucien" → masculin pluriel).\n• "entendu" (PP avec AVOIR : le COD "un cri" est APRES le verbe → PAS d\'accord).\n• "entendu" (PP avec AVOIR : le COD "que" (= un cri) est AVANT le verbe → on pourrait accorder, mais "cri" est masculin singulier → "entendu" reste invariable). Phrase complete : "Marie et Lucien se sont arretes net, puis ils ont entendu un cri qu\'ils n\'avaient jamais entendu auparavant."'
                        },
                        {
                            type: 'open',
                            text: 'Question 5 (Redaction courte — 4 pts) : Ecris la SUITE du recit en 3 a 4 phrases. Utilise au moins 1 passe simple, 1 imparfait, et 1 figure de style.',
                            answer: 'Exemple de suite (corrige indicatif) :\n"Au bout de la ruelle, une silhouette sombre se DECOUPAIT (imparfait, description) contre un mur. Lucien S\'APPROCHA (passe simple, action) prudemment, comme un chasseur traque (comparaison). C\'etait un chat, trempe et tremblant, qui miaulait a fendre l\'ame (hyperbole / personnification)." — Total : 3 phrases, 3 temps utilises, 2 figures de style. BAREME : vocabulaire riche, structure narrative, respect des temps et figures demandees.'
                        }
                    ]
                }
            }

        ]
    });
})();
