// brevet_emc.js — Brevet EMC : Enseignement Moral et Civique
// Programme cycle 4 (3eme) — DNB
// Format pedagogique adapte dys/TSA : phrases courtes (max 12 mots), exemples concrets, mots difficiles expliques
// 7 sections — 95 flashcards, 70 quiz
(function() {
    if (!window.StudFlow || !window.StudFlow.subjects) return;

    window.StudFlow.subjects.register({
        id: 'brevet_emc',
        name: 'EMC (Brevet)',
        icon: '\u2696\uFE0F',
        color: 'sky',
        exam: 'brevet',
        sections: [

            // ================================================================
            // SECTION 1 : SYMBOLES ET VALEURS DE LA REPUBLIQUE
            // ================================================================
            {
                id: 'symboles-republique',
                title: 'Symboles et valeurs de la Republique',
                icon: '\uD83C\uDDEB\uD83C\uDDF7',
                content: '<h3>La devise, les symboles, la DDHC et la Constitution</h3>'
                    + '<ul>'
                    + '<li><strong>Devise</strong> : Liberte, Egalite, Fraternite (1 valeur = 1 sens precis)</li>'
                    + '<li><strong>Symboles</strong> : drapeau, Marianne, Marseillaise, 14 juillet, coq</li>'
                    + '<li><strong>DDHC 1789</strong> : texte fondateur des droits</li>'
                    + '<li><strong>Constitution 1958</strong> : la loi supreme</li>'
                    + '</ul>',
                flashcards: [
                    // --- LIBERTE ---
                    {
                        question: 'C\'est quoi la LIBERTE dans la devise ?',
                        answer: '\uD83C\uDFAF La Liberte = tu peux agir librement. Tu penses ce que tu veux. Tu t\'exprimes comme tu veux. Tu crois en ce que tu veux.\n\n\u2696\uFE0F Article 4 de la DDHC : "La liberte consiste a pouvoir faire tout ce qui ne nuit pas a autrui."\n\nEn gros : tu es libre, MAIS ta liberte s\'arrete ou commence celle des autres.\n\nMot difficile : "autrui" = les autres personnes.\n\n\uD83D\uDCA1 Astuce dys : Liberte = "Libre T\u00EA" — imagine un te libre de choisir son parfum.\n\n\uD83D\uDCDD Piege Brevet : la liberte n\'est PAS illimitee. Elle a des limites (loi, respect des autres).'
                    },
                    // --- EGALITE ---
                    {
                        question: 'C\'est quoi l\'EGALITE dans la devise ?',
                        answer: '\uD83C\uDFAF L\'Egalite = memes droits pour tous. Pas de privileges. La loi est la meme pour chacun.\n\nArticle 1 de la Constitution : "La France assure l\'egalite devant la loi sans distinction."\n\nEn gros : que tu sois riche ou pauvre, la loi te traite pareil.\n\nMot difficile : "distinction" = difference de traitement.\n\n\uD83D\uDCA1 Astuce dys : Egalite = "Ego = al" — tout le monde a le meme ego devant la loi.\n\n\uD83D\uDCDD Piege Brevet : egalite en DROITS ≠ tout le monde est identique. On est differents mais egaux en droits.'
                    },
                    // --- FRATERNITE ---
                    {
                        question: 'C\'est quoi la FRATERNITE dans la devise ?',
                        answer: '\uD83C\uDFAF La Fraternite = solidarite entre citoyens. On s\'entraide comme des freres et soeurs.\n\nExemples concrets : Securite sociale, ecole gratuite, Restos du Coeur.\n\nEn gros : on est tous dans le meme pays, on s\'aide.\n\n\uD83D\uDCA1 Astuce dys : Fraternite vient de "frater" = frere en latin.\n\n\u2696\uFE0F En 2018, le Conseil constitutionnel a dit que la fraternite est un principe constitutionnel.\n\n\uD83D\uDCDD Piege Brevet : la fraternite est un principe JURIDIQUE, pas juste un beau mot.'
                    },
                    // --- DEVISE COMPLETE ---
                    {
                        question: 'Ou trouve-t-on la devise de la Republique ?',
                        answer: '\uD83C\uDFAF La devise = Liberte, Egalite, Fraternite. Elle est inscrite sur les mairies. Sur les ecoles. Sur les tribunaux. Sur les pieces de monnaie.\n\nEn gros : ces 3 mots sont PARTOUT dans l\'espace public.\n\n\uD83D\uDCA1 Astuce dys : LEF = Liberte Egalite Fraternite. Pense a "L\'EF-fort" de vivre ensemble.\n\n\uD83D\uDCDD Piege Brevet : il faut connaitre les 3 mots ET leur sens precis.'
                    },
                    // --- DRAPEAU ---
                    {
                        question: 'C\'est quoi le drapeau tricolore ?',
                        answer: '\uD83C\uDFAF Le drapeau = bleu, blanc, rouge. Symbole de la Republique francaise. Il date de la Revolution de 1789.\n\nBleu et rouge = couleurs de Paris. Blanc = couleur du roi.\n\nEn gros : le drapeau unit le peuple et le roi. Il represente la nation unie.\n\nMot difficile : "tricolore" = trois couleurs.\n\n\uD83D\uDCA1 Astuce dys : BlanBleuRouge dans l\'ordre alphabetique ? Non ! Bleu-Blanc-Rouge = BBR.\n\n\uD83D\uDCDD Piege Brevet : le bleu est TOUJOURS du cote du mat (le poteau).'
                    },
                    // --- MARIANNE ---
                    {
                        question: 'C\'est quoi Marianne ?',
                        answer: '\uD83C\uDFAF Marianne = visage feminin de la Republique. Elle porte un bonnet phrygien (bonnet de la liberte).\n\nOn la voit dans les mairies. Sur les timbres. Sur les pieces.\n\nEn gros : Marianne represente la Republique et la liberte.\n\nMot difficile : "bonnet phrygien" = bonnet rouge des esclaves liberes dans l\'Antiquite.\n\n\uD83D\uDCA1 Astuce dys : MARIANNE = MA Republique A Notre Nom Entier.\n\n\uD83D\uDCDD Piege Brevet : Marianne n\'est PAS une vraie personne. C\'est un symbole.'
                    },
                    // --- MARSEILLAISE ---
                    {
                        question: 'C\'est quoi La Marseillaise ?',
                        answer: '\uD83C\uDFAF La Marseillaise = hymne national francais. Ecrite en 1792 par Rouget de Lisle. C\'est un chant de guerre devenu hymne.\n\nOn la chante lors des ceremonies officielles. Et avant les matchs de foot !\n\nEn gros : la Marseillaise est LE chant de la France.\n\nMot difficile : "hymne" = chant officiel d\'un pays.\n\n\uD83D\uDCA1 Astuce dys : MaRSeillaise = 1792 (pense a "MaRS", le mois de mars, et 1792).\n\n\uD83D\uDCDD Piege Brevet : retiens "Rouget de Lisle" et "1792".'
                    },
                    // --- 14 JUILLET ---
                    {
                        question: 'Pourquoi le 14 juillet est la fete nationale ?',
                        answer: '\uD83C\uDFAF Le 14 juillet = fete nationale depuis 1880. Il celebre DEUX evenements.\n\n1) Prise de la Bastille le 14 juillet 1789. 2) Fete de la Federation le 14 juillet 1790.\n\nEn gros : le 14 juillet celebre la naissance de la nation libre.\n\n\uD83D\uDCA1 Astuce dys : 14 juillet = 14-7 = 1+4+7 = 12... Non, retiens juste : Bastille 1789, Federation 1790.\n\n\uD83D\uDCDD Piege Brevet : le 14 juillet ne celebre PAS que la prise de la Bastille. Il y a aussi 1790 !'
                    },
                    // --- COQ ---
                    {
                        question: 'Pourquoi le coq est un symbole de la France ?',
                        answer: '\uD83C\uDFAF Le coq = symbole NON officiel de la France. Il vient d\'un jeu de mots latin.\n\n"Gallus" en latin = a la fois "coq" et "gaulois". Le coq represente la fierte et le courage.\n\nEn gros : le coq rappelle les Gaulois et la fierte francaise.\n\n\uD83D\uDCA1 Astuce dys : Gallus = Gaulois = Gallinacea (poule) → le coq !\n\n\uD83D\uDCDD Piege Brevet : le coq n\'est PAS un symbole officiel. C\'est un symbole populaire.'
                    },
                    // --- DDHC 1789 ---
                    {
                        question: 'C\'est quoi la DDHC de 1789 ?',
                        answer: '\uD83C\uDFAF DDHC = Declaration des Droits de l\'Homme et du Citoyen. Adoptee le 26 aout 1789.\n\nArticle 1 : "Les hommes naissent libres et egaux en droits." Elle definit des droits fondamentaux.\n\nDroits cles : liberte, propriete, surete, resistance a l\'oppression.\n\nEn gros : c\'est LE texte de base des droits en France.\n\nMot difficile : "oppression" = quand un pouvoir ecrase les gens.\n\n\uD83D\uDCA1 Astuce dys : DDHC = Droits De l\'Homme et du Citoyen. 1789 = Revolution.\n\n\uD83D\uDCDD Piege Brevet : la DDHC est TOUJOURS dans la Constitution actuelle !'
                    },
                    // --- CONSTITUTION 1958 ---
                    {
                        question: 'C\'est quoi la Constitution de 1958 ?',
                        answer: '\uD83C\uDFAF La Constitution = la loi SUPREME de la France. Celle de la Ve Republique date de 1958.\n\nElle definit les institutions : President, Gouvernement, Parlement, Conseil constitutionnel.\n\nToutes les autres lois doivent la respecter.\n\nEn gros : la Constitution = les regles du jeu du pays.\n\n\uD83D\uDCA1 Astuce dys : 1958 = De Gaulle. Pense "De Gaulle = 5e Republique = 1958".\n\n\uD83D\uDCDD Piege Brevet : la DDHC de 1789 fait partie du "bloc de constitutionnalite" (elle est toujours valable).'
                    },
                    // --- DDHC + CONSTITUTION LIEN ---
                    {
                        question: 'Quel lien entre la DDHC et la Constitution ?',
                        answer: '\uD83C\uDFAF La DDHC (1789) est integree dans la Constitution de 1958. On appelle ca le "bloc de constitutionnalite".\n\nCa veut dire que les droits de 1789 sont toujours valables aujourd\'hui.\n\nEn gros : la DDHC protege toujours tes droits en 2024.\n\nMot difficile : "bloc de constitutionnalite" = ensemble des textes a valeur constitutionnelle.\n\n\uD83D\uDCA1 Astuce dys : imagine un BLOC de Lego. La DDHC est une brique collee a la Constitution.\n\n\uD83D\uDCDD Piege Brevet : ne dis JAMAIS que la DDHC est "ancienne et depassee". Elle est toujours en vigueur !'
                    },
                    // --- MNEMONIC SYMBOLES ---
                    {
                        question: 'Comment retenir tous les symboles de la Republique ?',
                        answer: '\uD83D\uDCA1 Mnemonique : "DaMa MaDi CoFe"\n\nDA = DRapeau tricolore\nMA = MArianne\nMA = MArseillaise\nDI = DIvise (Liberte Egalite Fraternite)\nCO = COq\nFE = FEte du 14 juillet\n\nEn gros : 6 symboles a retenir. "DaMa MaDi CoFe" !\n\n\uD83D\uDCDD Piege Brevet : on te demande souvent de citer AU MOINS 3 symboles. Avec ce truc, tu en as 6 !'
                    },
                    // --- VALEURS vs SYMBOLES ---
                    {
                        question: 'Quelle difference entre valeurs et symboles ?',
                        answer: '\uD83C\uDFAF VALEURS = des idees, des principes. Liberte, Egalite, Fraternite, Laicite.\n\nSYMBOLES = des objets ou images qui representent la Republique. Drapeau, Marianne, Marseillaise.\n\nEn gros : les valeurs = ce qu\'on croit. Les symboles = ce qu\'on voit.\n\n\uD83D\uDCA1 Astuce dys : Valeur = dans la tete. Symbole = dans les yeux.\n\n\uD83D\uDCDD Piege Brevet : ne confonds PAS valeur et symbole. La devise est une VALEUR affichee sur un SYMBOLE (le fronton des mairies).'
                    }
                ],
                quiz: [
                    { question: 'La devise de la Republique francaise est :', options: ['Paix, Justice, Liberte', 'Liberte, Egalite, Fraternite', 'Liberte, Securite, Solidarite', 'Democratie, Justice, Progres'], correctIndex: 1, explanation: 'La devise est Liberte, Egalite, Fraternite. Elle est inscrite sur les batiments publics.' },
                    { question: 'La DDHC a ete adoptee en :', options: ['1789', '1848', '1905', '1958'], correctIndex: 0, explanation: 'La Declaration des Droits de l\'Homme et du Citoyen date du 26 aout 1789 (Revolution francaise).' },
                    { question: 'Marianne represente :', options: ['Une reine de France', 'La Republique francaise', 'La premiere femme elue', 'L\'auteure de la Marseillaise'], correctIndex: 1, explanation: 'Marianne, coiffee du bonnet phrygien, est le visage feminin de la Republique.' },
                    { question: 'La Constitution de la Ve Republique date de :', options: ['1789', '1848', '1946', '1958'], correctIndex: 3, explanation: 'La Ve Republique est fondee en 1958 par De Gaulle. Sa Constitution definit les institutions.' },
                    { question: 'L\'hymne national francais s\'appelle :', options: ['La Parisienne', 'Le Chant du depart', 'La Marseillaise', 'L\'Internationale'], correctIndex: 2, explanation: 'La Marseillaise, ecrite par Rouget de Lisle en 1792, est l\'hymne national.' },
                    { question: 'L\'article 1 de la DDHC affirme que :', options: ['Le roi est souverain', 'Les hommes naissent libres et egaux en droits', 'La religion catholique est religion d\'Etat', 'Seuls les riches ont des droits'], correctIndex: 1, explanation: '"Les hommes naissent et demeurent libres et egaux en droits." Article 1er de la DDHC.' },
                    { question: 'Le 14 juillet commemore :', options: ['La fin de la 1ere Guerre mondiale', 'La prise de la Bastille (1789)', 'La mort de Napoleon', 'La creation de l\'UE'], correctIndex: 1, explanation: 'Le 14 juillet celebre la prise de la Bastille (1789) ET la Fete de la Federation (1790).' },
                    { question: 'Le coq est un symbole :', options: ['Officiel inscrit dans la Constitution', 'Populaire mais non officiel', 'Invente au XXe siecle', 'Uniquement sportif'], correctIndex: 1, explanation: 'Le coq est un symbole populaire (pas officiel). Il vient du latin "Gallus" = coq et gaulois.' },
                    { question: 'Le "bloc de constitutionnalite" inclut :', options: ['Seulement la Constitution de 1958', 'La Constitution + la DDHC de 1789', 'Seulement les lois votees depuis 2000', 'Les traites europeens uniquement'], correctIndex: 1, explanation: 'Le bloc de constitutionnalite = Constitution 1958 + DDHC 1789 + preambule 1946. Tous ont valeur constitutionnelle.' },
                    { question: 'La Fraternite, c\'est :', options: ['Chacun pour soi', 'La solidarite entre citoyens', 'Le droit de ne rien faire', 'L\'obeissance au chef'], correctIndex: 1, explanation: 'La Fraternite = solidarite, entraide. Reconnue comme principe constitutionnel en 2018.' }
                ]
            },

            // ================================================================
            // SECTION 2 : LAICITE
            // ================================================================
            {
                id: 'laicite',
                title: 'La laicite',
                icon: '\uD83D\uDD4A\uFE0F',
                content: '<h3>Loi de 1905, charte de la laicite, application au college</h3>'
                    + '<ul>'
                    + '<li><strong>Loi de 1905</strong> : separation des Eglises et de l\'Etat</li>'
                    + '<li><strong>Charte de la laicite</strong> : 15 articles simplifies en 5 principes</li>'
                    + '<li><strong>Laicite ≠ contre la religion</strong></li>'
                    + '<li><strong>Exemples concrets au college</strong></li>'
                    + '</ul>',
                flashcards: [
                    {
                        question: 'C\'est quoi la laicite en une phrase ?',
                        answer: '\uD83C\uDFAF La laicite = l\'Etat et les religions sont SEPARES. L\'Etat ne prend pas parti.\n\nChacun est libre de croire. Ou de ne pas croire. L\'Etat reste neutre.\n\nEn gros : l\'Etat s\'occupe de la politique, pas de la religion.\n\n\uD83D\uDCA1 Astuce dys : LAICite = L\'Etat A Independance Contre aucune religion.\n\n\uD83D\uDCDD Piege Brevet : laicite ≠ "contre les religions" ! C\'est la NEUTRALITE de l\'Etat.'
                    },
                    {
                        question: 'C\'est quoi la loi de 1905 ?',
                        answer: '\u2696\uFE0F Loi du 9 decembre 1905. Elle separe les Eglises et l\'Etat.\n\nArticle 1 : la Republique assure la liberte de conscience.\nArticle 2 : l\'Etat ne reconnait, ne salarie, ne subventionne aucun culte.\n\nEn gros : depuis 1905, l\'Etat et la religion, chacun chez soi.\n\nMot difficile : "subventionner" = donner de l\'argent public.\n\n\uD83D\uDCA1 Astuce dys : 1905 = "19-zéro-5" = "Je ne Zéro-ise aucune religion, 5ur!" (je n\'en favorise aucune).\n\n\uD83D\uDCDD Piege Brevet : avant 1905, l\'Eglise catholique avait un role officiel en France.'
                    },
                    {
                        question: 'C\'est quoi la Charte de la laicite a l\'ecole ?',
                        answer: '\uD83C\uDFAF Un document affiche dans TOUTES les ecoles depuis 2013. Il a 15 articles.\n\n5 principes cles :\n1) L\'ecole est NEUTRE.\n2) Chacun est libre de CROIRE ou non.\n3) Pas de PROPAGANDE religieuse ou politique.\n4) Pas de signes religieux OSTENSIBLES pour les eleves.\n5) L\'ecole enseigne le RESPECT de toutes les croyances.\n\nEn gros : a l\'ecole, on respecte toutes les croyances sans en imposer aucune.\n\nMot difficile : "ostensible" = montre volontairement, bien visible.\n\n\uD83D\uDCA1 Astuce dys : 2013 = Charte. Retiens : "la charte a 13 ans en 2026".\n\n\uD83D\uDCDD Piege Brevet : la charte est un sujet TRES frequent au brevet !'
                    },
                    {
                        question: 'Laicite = contre la religion ?',
                        answer: '\u26A0\uFE0F NON ! C\'est le piege numero 1 !\n\nLa laicite PROTEGE la liberte de croire. Elle ne combat aucune religion.\n\nElle dit juste : l\'Etat ne choisit pas de camp.\n\nEn gros : laicite = respect de TOUTES les croyances + neutralite de l\'Etat.\n\n\uD83D\uDCA1 Astuce dys : imagine un arbitre de foot. Il ne joue pour aucune equipe. L\'Etat = l\'arbitre.\n\n\uD83D\uDCDD Piege Brevet : si on te demande "la laicite interdit-elle les religions ?" → NON, jamais.'
                    },
                    {
                        question: 'Est-ce qu\'un eleve peut porter un signe religieux au college ?',
                        answer: '\u2696\uFE0F Loi du 15 mars 2004. Les eleves ne peuvent PAS porter de signes religieux OSTENSIBLES.\n\nInterdit : voile, kippa, grande croix visible. Autorise : petite chaine discrete, bijou non visible.\n\nEn gros : les signes discrets sont OK. Les signes tres visibles sont interdits a l\'ecole.\n\nMot difficile : "ostensible" = qu\'on montre expres, tres visible.\n\n\uD83D\uDCA1 Astuce dys : 2004 = loi sur les signes. "2004 Signes Ostentatoires Interdits".\n\n\uD83D\uDCDD Piege Brevet : cette loi concerne SEULEMENT les eleves, PAS les profs. Les profs doivent etre neutres (pas de signe du tout).'
                    },
                    {
                        question: 'Et les profs, ils doivent etre laiques ?',
                        answer: '\uD83C\uDFAF OUI. Les profs sont des agents de l\'Etat. Ils doivent etre TOTALEMENT neutres.\n\nPas de signe religieux. Pas d\'opinion politique en classe. Pas de propagande.\n\nEn gros : le prof represente l\'Etat. Il doit etre neutre comme l\'Etat.\n\nMot difficile : "neutralite" = ne pas prendre parti.\n\n\uD83D\uDCA1 Astuce dys : le prof = l\'arbitre dans la classe.\n\n\uD83D\uDCDD Piege Brevet : les ELEVES ont une regle (loi 2004). Les PROFS ont une regle PLUS stricte (neutralite totale).'
                    },
                    {
                        question: 'La cantine et la laicite, ca donne quoi ?',
                        answer: '\uD83C\uDFAF La cantine n\'est PAS obligee de servir des menus religieux. Mais beaucoup proposent un choix.\n\nExemple : menu avec ou sans porc. C\'est un geste de TOLERANCE, pas une obligation legale.\n\nEn gros : la laicite n\'oblige pas de menus speciaux, mais le respect encourage des choix.\n\n\uD83D\uDCA1 Astuce dys : la cantine = un exemple concret que tu peux citer au brevet.\n\n\uD83D\uDCDD Piege Brevet : ne dis PAS "la laicite oblige a supprimer le porc". C\'est faux !'
                    },
                    {
                        question: 'Et les jours feries religieux, c\'est pas contraire a la laicite ?',
                        answer: '\u26A0\uFE0F Bonne question ! Noel, Toussaint, Ascension, Lundi de Paques... sont des jours feries chretiens.\n\nC\'est un heritage HISTORIQUE. La France a une histoire catholique. La laicite n\'efface pas l\'histoire.\n\nEn gros : les jours feries sont un heritage du passe, pas une faveur religieuse.\n\n\uD83D\uDCA1 Astuce dys : heritage ≠ favoritisme. C\'est juste le calendrier historique.\n\n\uD83D\uDCDD Piege Brevet : si on te pose la question, reponds "heritage historique, pas atteinte a la laicite".'
                    },
                    {
                        question: 'C\'est quoi la liberte de conscience ?',
                        answer: '\uD83C\uDFAF Liberte de conscience = chacun choisit librement ce qu\'il croit.\n\nTu peux etre croyant. Atheist. Agnostique. Changer de religion. Ne rien croire.\n\nC\'est garanti par l\'article 1 de la loi de 1905.\n\nEn gros : personne ne peut t\'obliger a croire ou a ne pas croire.\n\nMot difficile : "agnostique" = quelqu\'un qui dit "je ne sais pas si Dieu existe".\n\n\uD83D\uDCA1 Astuce dys : conscience = "con-science" = avec ta propre connaissance, tu choisis.\n\n\uD83D\uDCDD Piege Brevet : liberte de conscience ≠ liberte de culte. Conscience = penser. Culte = pratiquer.'
                    },
                    {
                        question: 'C\'est quoi la liberte de culte ?',
                        answer: '\uD83C\uDFAF Liberte de culte = pouvoir pratiquer sa religion librement. Prier, aller a l\'eglise, a la mosquee, au temple.\n\nLimite : le culte doit respecter l\'ordre public.\n\nEn gros : tu peux pratiquer ta religion, tant que ca ne derange pas les autres.\n\nMot difficile : "culte" = pratique religieuse (prier, ceremonies).\n\n\uD83D\uDCA1 Astuce dys : Conscience = dans la tete. Culte = dans la pratique.\n\n\uD83D\uDCDD Piege Brevet : la France garantit les DEUX : liberte de conscience ET liberte de culte.'
                    },
                    {
                        question: 'Comment la laicite protege-t-elle les eleves ?',
                        answer: '\uD83C\uDFAF La laicite protege chaque eleve au college. Personne ne peut te forcer a prier. Personne ne peut te moquer pour ta religion. Ni pour ton absence de religion.\n\nL\'ecole est un espace NEUTRE ou tout le monde apprend ensemble.\n\nEn gros : la laicite te protege, que tu sois croyant ou non.\n\n\uD83D\uDCA1 Astuce dys : l\'ecole = un terrain neutre. Comme la Suisse pendant les guerres.\n\n\uD83D\uDCDD Piege Brevet : au brevet, montre que la laicite est un outil de PROTECTION, pas de contrainte.'
                    },
                    {
                        question: 'Quelles sont les dates cles de la laicite en France ?',
                        answer: '\uD83C\uDFAF Les 4 dates a retenir :\n\n1) 1905 = loi de separation Eglises/Etat.\n2) 2004 = loi interdisant les signes religieux ostensibles a l\'ecole.\n3) 2013 = Charte de la laicite affichee dans les ecoles.\n4) 9 decembre = Journee de la laicite (anniversaire de la loi 1905).\n\nEn gros : 1905, 2004, 2013, 9 decembre. 4 dates, c\'est tout !\n\n\uD83D\uDCA1 Astuce dys : 1905 → 2004 → 2013. Ca avance dans le temps : separation → ecole → charte.\n\n\uD83D\uDCDD Piege Brevet : le 9 decembre est SOUVENT oublie. Retiens-le !'
                    }
                ],
                quiz: [
                    { question: 'La loi de separation des Eglises et de l\'Etat date de :', options: ['1789', '1848', '1905', '1958'], correctIndex: 2, explanation: 'La loi de 1905 separe les Eglises et l\'Etat. L\'Etat ne reconnait ni ne subventionne aucun culte.' },
                    { question: 'La laicite garantit :', options: ['L\'atheisme obligatoire', 'La liberte de croire ou de ne pas croire', 'L\'interdiction de toutes les religions', 'La suprematie d\'une religion'], correctIndex: 1, explanation: 'La laicite = neutralite de l\'Etat. Chacun est libre de croire ou non.' },
                    { question: 'La Charte de la laicite a l\'ecole date de :', options: ['1905', '2004', '2013', '2020'], correctIndex: 2, explanation: 'La Charte de la laicite est affichee dans toutes les ecoles depuis 2013.' },
                    { question: 'La loi de 2004 interdit a l\'ecole :', options: ['Toute religion', 'Les signes religieux ostensibles portes par les eleves', 'Les cours de religion', 'Les jours feries religieux'], correctIndex: 1, explanation: 'La loi de 2004 interdit les signes religieux ostensibles (voile, kippa, grande croix) portes par les eleves.' },
                    { question: 'La laicite est CONTRE les religions :', options: ['Vrai', 'Faux'], correctIndex: 1, explanation: 'FAUX ! La laicite protege la liberte de croire. Elle garantit la neutralite de l\'Etat, pas l\'interdiction des religions.' },
                    { question: 'La Journee de la laicite est le :', options: ['14 juillet', '11 novembre', '9 decembre', '1er janvier'], correctIndex: 2, explanation: 'Le 9 decembre = anniversaire de la loi de 1905. C\'est la Journee de la laicite.' },
                    { question: 'Un professeur a le droit de porter un signe religieux en classe :', options: ['Oui, s\'il est discret', 'Non, il doit etre totalement neutre', 'Oui, c\'est sa liberte', 'Seulement le vendredi'], correctIndex: 1, explanation: 'Les agents de l\'Etat (dont les profs) doivent etre totalement neutres. Pas de signe religieux.' },
                    { question: 'L\'article 1 de la loi de 1905 garantit :', options: ['La liberte de conscience', 'Le droit de vote', 'L\'egalite salariale', 'Le droit au logement'], correctIndex: 0, explanation: 'Article 1 : "La Republique assure la liberte de conscience." Chacun croit ce qu\'il veut.' },
                    { question: 'Les jours feries chretiens (Noel, Paques) existent car :', options: ['La France est un pays chretien officiel', 'C\'est un heritage historique', 'La laicite ne s\'applique pas aux vacances', 'Le pape l\'a demande'], correctIndex: 1, explanation: 'Les jours feries chretiens sont un heritage historique, pas une faveur religieuse.' },
                    { question: 'Liberte de conscience et liberte de culte, c\'est :', options: ['La meme chose', 'Deux choses differentes : penser vs pratiquer', 'Un seul droit', 'Seulement pour les croyants'], correctIndex: 1, explanation: 'Conscience = le droit de PENSER librement. Culte = le droit de PRATIQUER sa religion.' }
                ]
            },

            // ================================================================
            // SECTION 3 : INSTITUTIONS DE LA Ve REPUBLIQUE
            // ================================================================
            {
                id: 'institutions',
                title: 'Institutions de la Ve Republique',
                icon: '\uD83C\uDFDB\uFE0F',
                content: '<h3>President, Gouvernement, Parlement, Conseil constitutionnel, separation des pouvoirs</h3>'
                    + '<ul>'
                    + '<li><strong>President</strong> : chef de l\'Etat, elu 5 ans</li>'
                    + '<li><strong>Premier ministre + Gouvernement</strong> : pouvoir executif</li>'
                    + '<li><strong>Assemblee nationale (577) + Senat (348)</strong> : pouvoir legislatif</li>'
                    + '<li><strong>Conseil constitutionnel</strong> : gardien de la Constitution</li>'
                    + '<li><strong>Separation des pouvoirs</strong> : Montesquieu</li>'
                    + '</ul>',
                flashcards: [
                    {
                        question: 'C\'est quoi le President de la Republique ?',
                        answer: '\uD83C\uDFAF Le President = le CHEF de l\'Etat. Elu pour 5 ans (quinquennat). Elu au suffrage universel DIRECT.\n\nSes pouvoirs : nomme le Premier ministre. Chef des armees. Peut dissoudre l\'Assemblee. Peut faire un referendum.\n\nEn gros : le President est le personnage le plus puissant de la Ve Republique.\n\nMot difficile : "quinquennat" = mandat de 5 ans (quinque = 5 en latin).\n\n\uD83D\uDCA1 Astuce dys : President = 5 ans = 5 doigts d\'une main.\n\n\uD83D\uDCDD Piege Brevet : avant 2000, c\'etait 7 ans (septennat). Depuis 2000, c\'est 5 ans.'
                    },
                    {
                        question: 'Quels sont les pouvoirs du President ?',
                        answer: '\uD83C\uDFAF Le President a 5 grands pouvoirs :\n\n1) NOMME le Premier ministre.\n2) CHEF des armees (arme nucleaire).\n3) Peut DISSOUDRE l\'Assemblee nationale.\n4) Peut organiser un REFERENDUM.\n5) NEGOCIE les traites internationaux.\n\nEn gros : le President dirige la politique de la France.\n\n\uD83D\uDCA1 Astuce dys : NCDNR = Nomme, Chef, Dissout, Negocie, Referendum. "Notre Chef Decide, Negocie, Referendumise."\n\n\uD83D\uDCDD Piege Brevet : le President ne VOTE pas les lois. C\'est le Parlement qui vote les lois.'
                    },
                    {
                        question: 'C\'est quoi le Premier ministre ?',
                        answer: '\uD83C\uDFAF Le Premier ministre = chef du GOUVERNEMENT. Il est NOMME par le President.\n\nIl DIRIGE l\'action du gouvernement. Il COORDONNE les ministres. Il PROPOSE des lois.\n\nEn gros : le Premier ministre fait tourner le pays au quotidien.\n\nMot difficile : "cohabitation" = quand le President et le Premier ministre sont de partis differents.\n\n\uD83D\uDCA1 Astuce dys : President = capitaine. Premier ministre = entraineur de l\'equipe.\n\n\uD83D\uDCDD Piege Brevet : le Premier ministre est NOMME, pas elu. C\'est le President qui le choisit.'
                    },
                    {
                        question: 'C\'est quoi le Gouvernement ?',
                        answer: '\uD83C\uDFAF Le Gouvernement = le Premier ministre + les ministres. Chaque ministre gere un domaine.\n\nExemples : ministre de l\'Education. Ministre de la Sante. Ministre de la Defense.\n\nLe gouvernement APPLIQUE les lois. Il est responsable devant l\'Assemblee nationale.\n\nEn gros : le gouvernement = l\'equipe qui gere le pays.\n\nMot difficile : "motion de censure" = l\'Assemblee vote pour renverser le gouvernement.\n\n\uD83D\uDCA1 Astuce dys : Gouvernement = Gerer + commander.\n\n\uD83D\uDCDD Piege Brevet : le gouvernement fait partie du pouvoir EXECUTIF (il execute les lois).'
                    },
                    {
                        question: 'C\'est quoi l\'Assemblee nationale ?',
                        answer: '\uD83C\uDFAF L\'Assemblee nationale = 577 DEPUTES. Elus au suffrage universel direct pour 5 ans.\n\nElle VOTE les lois. Elle CONTROLE le gouvernement. Elle vote le BUDGET.\n\nElle siege au Palais Bourbon, a Paris.\n\nEn gros : les deputes representent le peuple et fabriquent les lois.\n\n\uD83D\uDCA1 Astuce dys : 577 deputes. "5-7-7" = retiens "cinq-sept-sept".\n\n\uD83D\uDCDD Piege Brevet : l\'Assemblee peut renverser le gouvernement (motion de censure). Le Senat ne peut PAS.'
                    },
                    {
                        question: 'C\'est quoi le Senat ?',
                        answer: '\uD83C\uDFAF Le Senat = 348 SENATEURS. Elus au suffrage universel INDIRECT pour 6 ans.\n\nIl vote les lois avec l\'Assemblee. Il represente les COLLECTIVITES territoriales.\n\nIl siege au Palais du Luxembourg, a Paris.\n\nEn gros : le Senat = la "deuxieme chambre" qui relit les lois.\n\nMot difficile : "suffrage indirect" = les senateurs sont elus par des grands electeurs, pas directement par les citoyens.\n\n\uD83D\uDCA1 Astuce dys : Senat = 348 = "3-4-8" pour 6 ans. Assemblee = 577 pour 5 ans.\n\n\uD83D\uDCDD Piege Brevet : ne confonds PAS deputes (Assemblee, 5 ans, direct) et senateurs (Senat, 6 ans, indirect).'
                    },
                    {
                        question: 'C\'est quoi le Parlement ?',
                        answer: '\uD83C\uDFAF Le Parlement = Assemblee nationale + Senat. Les DEUX chambres ensemble.\n\nLe Parlement VOTE les lois. C\'est le pouvoir LEGISLATIF.\n\nEn gros : le Parlement, c\'est la ou on fabrique les lois.\n\n\uD83D\uDCA1 Astuce dys : Parlement = PARLer + voterMENT → c\'est la qu\'on parle et qu\'on vote.\n\n\uD83D\uDCDD Piege Brevet : Parlement = Assemblee + Senat (les DEUX). Ne cite pas l\'un sans l\'autre.'
                    },
                    {
                        question: 'C\'est quoi la separation des pouvoirs ?',
                        answer: '\uD83C\uDFAF Idee de MONTESQUIEU (L\'Esprit des lois, 1748). Il faut separer 3 pouvoirs :\n\nLEGISLATIF = faire les lois → Parlement.\nEXECUTIF = appliquer les lois → President + Gouvernement.\nJUDICIAIRE = juger → tribunaux, juges.\n\nEn gros : separer les pouvoirs empeche la dictature.\n\nMot difficile : "dictature" = un seul homme a tous les pouvoirs.\n\n\uD83D\uDCA1 Astuce dys : LEJ = Legislatif, Executif, Judiciaire. "La Loi Est Juste" = LEJ.\n\n\uD83D\uDCDD Piege Brevet : retiens MONTESQUIEU + les 3 pouvoirs + qui les exerce. Question classique !'
                    },
                    {
                        question: 'C\'est quoi le Conseil constitutionnel ?',
                        answer: '\uD83C\uDFAF Le Conseil constitutionnel = le GARDIEN de la Constitution. Il verifie que les lois respectent la Constitution.\n\n9 membres. Nommes pour 9 ans. Il peut ANNULER une loi inconstitutionnelle.\n\nDepuis 2008 : la QPC permet aux citoyens de le saisir.\n\nEn gros : le Conseil constitutionnel dit "stop" si une loi viole la Constitution.\n\nMot difficile : "QPC" = Question Prioritaire de Constitutionnalite.\n\n\uD83D\uDCA1 Astuce dys : 9 membres, 9 ans. Facile : 9-9 !\n\n\uD83D\uDCDD Piege Brevet : le Conseil constitutionnel ≠ Conseil d\'Etat. Ne les confonds pas.'
                    },
                    {
                        question: 'Comment on vote en France ?',
                        answer: '\uD83C\uDFAF Conditions pour voter : 18 ans, nationalite francaise, inscrit sur les listes electorales.\n\nLe vote est SECRET (isoloir + enveloppe). Le vote n\'est PAS obligatoire en France.\n\nTypes de scrutin : uninominal (1 nom), proportionnel (liste), 1 ou 2 tours.\n\nEn gros : tu votes a 18 ans, c\'est secret, c\'est un DROIT mais pas une obligation.\n\nMot difficile : "isoloir" = le petit espace ou tu votes en secret.\n\n\uD83D\uDCA1 Astuce dys : 18 ans = majorite = vote. 18-18 !\n\n\uD83D\uDCDD Piege Brevet : le vote n\'est PAS obligatoire en France (mais il l\'est en Belgique par exemple).'
                    },
                    {
                        question: 'Comment une loi est-elle faite ? (etape par etape)',
                        answer: '\uD83C\uDFAF Le parcours d\'une loi en 5 etapes :\n\n1) INITIATIVE : projet de loi (gouvernement) ou proposition de loi (depute/senateur).\n2) EXAMEN : une commission etudie le texte.\n3) DEBAT + VOTE : l\'Assemblee nationale vote. Puis le Senat vote.\n4) Si desaccord : COMMISSION MIXTE PARITAIRE (7 deputes + 7 senateurs).\n5) PROMULGATION : le President signe la loi.\n\nEn gros : une loi passe par l\'Assemblee, le Senat, puis le President la signe.\n\n\uD83D\uDCA1 Astuce dys : I-E-D-C-P = Initiative, Examen, Debat, Commission, Promulgation.\n\n\uD83D\uDCDD Piege Brevet : le President ne VOTE pas la loi. Il la promulgue (la signe).'
                    },
                    {
                        question: 'C\'est quoi le suffrage universel ?',
                        answer: '\uD83C\uDFAF Suffrage universel = TOUS les citoyens adultes votent. Sans condition de richesse ni de sexe.\n\nDIRECT = les citoyens votent eux-memes (ex : president).\nINDIRECT = les citoyens elisent des representants qui votent (ex : senateurs).\n\nEn gros : suffrage universel = tout le monde vote. C\'est la base de la democratie.\n\n\uD83D\uDCA1 Astuce dys : Direct = tu choisis Directement. Indirect = quelqu\'un choisit pour toi.\n\n\uD83D\uDCDD Piege Brevet : dates cles du suffrage : 1848 (hommes), 1944 (femmes).'
                    },
                    {
                        question: 'C\'est quoi l\'abstention ?',
                        answer: '\u26A0\uFE0F L\'abstention = ne PAS aller voter. En France, ca augmente : parfois plus de 50% !\n\nCauses : desinteret, mefiance, sentiment que "ca ne change rien".\n\nConsequence : les elus sont choisis par une MINORITE.\n\nEn gros : quand on ne vote pas, on laisse les autres decider.\n\nMot difficile : "abstention" ≠ "vote blanc". Vote blanc = aller voter sans choisir. Abstention = ne PAS y aller.\n\n\uD83D\uDCA1 Astuce dys : Abstention = ABSent du vote.\n\n\uD83D\uDCDD Piege Brevet : bien distinguer abstention, vote blanc et vote nul.'
                    },
                    {
                        question: 'C\'est quoi une democratie representative ?',
                        answer: '\uD83C\uDFAF Democratie representative = les citoyens elisent des representants qui decident pour eux.\n\nC\'est le systeme de la France. Les deputes votent les lois a ta place.\n\nExemple de democratie DIRECTE : le referendum (le peuple vote oui/non).\n\nEn gros : on elit des gens pour decider a notre place. C\'est plus pratique pour 67 millions de personnes.\n\n\uD83D\uDCA1 Astuce dys : Representative = des REPresentants te REPresentent.\n\n\uD83D\uDCDD Piege Brevet : la France combine les deux : representative (deputes) + directe (referendum).'
                    },
                    {
                        question: 'Comment retenir toutes les institutions ?',
                        answer: '\uD83D\uDCA1 Mnemonique : "PGPSC"\n\nP = President de la Republique (5 ans, elu directement).\nG = Gouvernement (Premier ministre + ministres, nommes).\nP = Parlement (Assemblee 577 + Senat 348).\nS = Separation des pouvoirs (Montesquieu, 3 pouvoirs).\nC = Conseil constitutionnel (9 membres, 9 ans).\n\nEn gros : PGPSC = "Papa Gere le Pays Sans Corrompre."\n\n\uD83D\uDCDD Piege Brevet : au brevet, on peut te demander un SCHEMA des institutions. Entraine-toi a en dessiner un !'
                    }
                ],
                quiz: [
                    { question: 'Le President est elu pour :', options: ['4 ans', '5 ans', '6 ans', '7 ans'], correctIndex: 1, explanation: 'Depuis 2000, le president est elu pour 5 ans (quinquennat). Avant, c\'etait 7 ans (septennat).' },
                    { question: 'Les femmes obtiennent le droit de vote en :', options: ['1789', '1848', '1944', '1958'], correctIndex: 2, explanation: 'Les femmes obtiennent le droit de vote en 1944 et votent pour la premiere fois en avril 1945.' },
                    { question: 'Le Parlement est compose de :', options: ['L\'Assemblee nationale seulement', 'L\'Assemblee nationale + le Senat', 'Le Senat seulement', 'Le Gouvernement + l\'Assemblee'], correctIndex: 1, explanation: 'Le Parlement = Assemblee nationale (577 deputes) + Senat (348 senateurs).' },
                    { question: 'La separation des pouvoirs est une idee de :', options: ['Rousseau', 'Montesquieu', 'Voltaire', 'De Gaulle'], correctIndex: 1, explanation: 'Montesquieu, L\'Esprit des lois (1748) : legislatif, executif, judiciaire.' },
                    { question: 'Le pouvoir executif est exerce par :', options: ['Le Parlement', 'Les juges', 'Le President et le Gouvernement', 'Le Conseil constitutionnel'], correctIndex: 2, explanation: 'Executif = appliquer les lois = President + Gouvernement.' },
                    { question: 'L\'Assemblee nationale compte :', options: ['348 deputes', '500 deputes', '577 deputes', '600 deputes'], correctIndex: 2, explanation: '577 deputes elus pour 5 ans au suffrage universel direct.' },
                    { question: 'Les senateurs sont elus pour :', options: ['4 ans', '5 ans', '6 ans', '9 ans'], correctIndex: 2, explanation: '348 senateurs elus pour 6 ans au suffrage universel indirect.' },
                    { question: 'Le Conseil constitutionnel compte :', options: ['5 membres', '7 membres', '9 membres', '15 membres'], correctIndex: 2, explanation: '9 membres nommes pour 9 ans. Ils verifient que les lois respectent la Constitution.' },
                    { question: 'Le Premier ministre est :', options: ['Elu par le peuple', 'Nomme par le President', 'Elu par les deputes', 'Designe par le Senat'], correctIndex: 1, explanation: 'Le Premier ministre est NOMME par le President de la Republique.' },
                    { question: 'Qui promulgue (signe) les lois ?', options: ['Le Premier ministre', 'Le president du Senat', 'Le President de la Republique', 'Le Conseil constitutionnel'], correctIndex: 2, explanation: 'Le President promulgue (signe) les lois apres leur vote par le Parlement.' },
                    { question: 'L\'abstention c\'est :', options: ['Voter blanc', 'Ne pas aller voter du tout', 'Voter pour un petit parti', 'Annuler son bulletin'], correctIndex: 1, explanation: 'Abstention = ne pas se deplacer pour voter. ≠ vote blanc (aller voter sans choisir).' },
                    { question: 'La QPC permet aux citoyens de :', options: ['Voter une loi', 'Saisir le Conseil constitutionnel', 'Elire le President', 'Dissoudre l\'Assemblee'], correctIndex: 1, explanation: 'La QPC (2008) = Question Prioritaire de Constitutionnalite. Un citoyen peut contester une loi devant le Conseil constitutionnel.' }
                ]
            },

            // ================================================================
            // SECTION 4 : ETRE CITOYEN (nationalite, droits, devoirs)
            // ================================================================
            {
                id: 'etre-citoyen',
                title: 'Etre citoyen : nationalite, droits, devoirs',
                icon: '👤',
                content: '<h3>Nationalite, citoyennete, droits, devoirs, engagement</h3>'
                    + '<ul>'
                    + '<li><strong>Nationalite</strong> : droit du sang, droit du sol, naturalisation</li>'
                    + '<li><strong>Citoyennete</strong> : nationalite + majorite + droits civiques</li>'
                    + '<li><strong>Citoyennete europeenne</strong> : Maastricht 1992</li>'
                    + '<li><strong>Droits</strong> : civils, politiques, sociaux</li>'
                    + '<li><strong>Devoirs</strong> : loi, impot, defense, solidarite</li>'
                    + '</ul>',
                flashcards: [
                    {
                        question: 'C\'est quoi la nationalite francaise ?',
                        answer: '🎯 La nationalite = le LIEN juridique entre une personne et un Etat.\n\nEtre francais, c\'est appartenir a la NATION francaise. C\'est inscrit sur ta carte d\'identite ou ton passeport.\n\n3 moyens de devenir francais :\n1) DROIT DU SANG (parent francais).\n2) DROIT DU SOL (naissance en France sous conditions).\n3) NATURALISATION (demande apres plusieurs annees).\n\nEn gros : la nationalite dit "tu fais partie de ce pays."\n\nMot difficile : "nationalite" = lien avec un pays (nation).\n\n💡 Astuce dys : NATION-alite = lien avec la NATION.\n\n📝 Piege Brevet : ne confonds PAS nationalite (lien a un Etat) et citoyennete (lien + droits politiques).'
                    },
                    {
                        question: 'C\'est quoi la citoyennete francaise ?',
                        answer: '🎯 Etre citoyen, c\'est remplir 3 conditions :\n\n1) Avoir la NATIONALITE francaise.\n2) Etre MAJEUR (18 ans).\n3) Jouir de ses DROITS CIVIQUES (pas prive par un juge).\n\nEtre citoyen te donne des DROITS (voter) et des DEVOIRS (respecter la loi).\n\nEn gros : citoyen = je participe a la vie politique de mon pays.\n\nMot difficile : "droits civiques" = droit de voter, d\'etre elu, d\'exercer une fonction publique.\n\n💡 Astuce dys : CITOYEN = "CITE" + "OYEN" = celui qui VIT dans la cite ET y participe.\n\n📝 Piege Brevet : 3 conditions a citer (nationalite + majorite + droits civiques). Reponse COMPLETE.'
                    },
                    {
                        question: 'Quelle difference entre nationalite et citoyennete ?',
                        answer: '🎯 Attention, ce n\'est PAS la meme chose !\n\nNATIONALITE = tu appartiens a l\'Etat francais (lien juridique). Des la NAISSANCE.\nCITOYENNETE = tu as des DROITS POLITIQUES (voter, etre elu). A partir de 18 ANS.\n\nExemples :\n• Un enfant francais de 10 ans : a la nationalite, mais n\'est PAS citoyen (il ne vote pas).\n• Un etranger vivant en France : pas de nationalite francaise, donc pas citoyen francais.\n\nEn gros : la nationalite = APPARTENANCE. La citoyennete = PARTICIPATION.\n\n💡 Astuce dys : Nationalite = je SUIS francais. Citoyennete = j\'AGIS comme francais.\n\n📝 Piege Brevet : toujours bien distinguer les deux. Question classique.'
                    },
                    {
                        question: 'C\'est quoi le droit du sang ?',
                        answer: '🎯 Droit du sang = tu es francais si un PARENT est francais.\n\nPeu importe le pays ou tu nais. Si ton pere OU ta mere est francais(e), tu es francais(e) des ta naissance.\n\nExemples :\n• Ne a Madrid, mere francaise : tu es francais.\n• Ne a Tokyo, pere francais : tu es francais.\n\nEn gros : on herite de la nationalite de ses parents.\n\nMot difficile : "filiation" = lien avec ses parents (le "sang" au sens juridique).\n\n💡 Astuce dys : droit du SANG = le sang des PARENTS.\n\n📝 Piege Brevet : 1 SEUL parent francais suffit. Pas besoin des deux.'
                    },
                    {
                        question: 'C\'est quoi le droit du sol ?',
                        answer: '🎯 Droit du sol = tu deviens francais si tu es NE en France, meme si tes parents sont etrangers.\n\nCondition principale : l\'enfant ne en France de parents etrangers devient francais a 18 ANS, s\'il a vecu en France au moins 5 ans depuis l\'age de 11 ans.\n\nIl peut aussi demander la nationalite plus tot (des 13 ans).\n\nEn gros : naitre et grandir en France permet de devenir francais.\n\nMot difficile : "droit du sol" = la nationalite vient du TERRITOIRE (le SOL).\n\n💡 Astuce dys : SANG = parents. SOL = territoire. Deux logiques differentes.\n\n📝 Piege Brevet : le droit du sol en France n\'est PAS automatique a la naissance. Il y a des conditions.'
                    },
                    {
                        question: 'C\'est quoi la naturalisation ?',
                        answer: '🎯 Naturalisation = un etranger DEMANDE a devenir francais.\n\nConditions principales :\n• Vivre en France depuis au moins 5 ans.\n• Parler francais.\n• Connaitre l\'histoire et les valeurs de la France.\n• Etre integre (travail, respect des lois).\n\nDecision prise par DECRET du 1er ministre. Ceremonie officielle de remise des papiers.\n\nEn gros : la naturalisation = "choisir" de devenir francais quand on est etranger.\n\nMot difficile : "decret" = decision officielle du gouvernement.\n\n💡 Astuce dys : NATURAL-isation = devenir francais apres demande.\n\n📝 Piege Brevet : la naturalisation n\'est PAS un droit automatique. L\'Etat peut refuser.'
                    },
                    {
                        question: 'C\'est quoi la citoyennete europeenne ?',
                        answer: '🎯 La citoyennete europeenne est creee par le traite de MAASTRICHT en 1992.\n\nTout Francais est AUSSI citoyen europeen. C\'est EN PLUS, ca ne remplace pas.\n\nDroits du citoyen europeen :\n• CIRCULER et VIVRE librement dans les 27 pays de l\'UE.\n• VOTER aux elections europeennes et municipales dans le pays de residence.\n• Etre PROTEGE par les ambassades de n\'importe quel pays de l\'UE.\n• Beneficier d\'ERASMUS (etudes en Europe).\n\nEn gros : etre francais = etre aussi europeen = des droits en plus.\n\n💡 Astuce dys : MAASTRICHT = 1992. "M comme Maastricht, M comme Monnaie + Mobilite."\n\n📝 Piege Brevet : citoyennete europeenne = 1992 Maastricht. Date ultra-classique.'
                    },
                    {
                        question: 'C\'est quoi les droits CIVILS du citoyen ?',
                        answer: '🎯 Les droits CIVILS = les libertes de base.\n\nExemples :\n• Liberte d\'EXPRESSION (dire ce qu\'on pense).\n• Liberte de CONSCIENCE (croire ou pas).\n• Liberte de REUNION et d\'association.\n• Droit a la SURETE (pas d\'arrestation arbitraire).\n• Droit a la PROPRIETE.\n• Droit au RESPECT de la vie privee.\n\nCes droits sont dans la DDHC de 1789 et la Constitution de 1958.\n\nEn gros : les droits civils protegent ta liberte individuelle.\n\nMot difficile : "arbitraire" = injuste, sans raison legale.\n\n💡 Astuce dys : CIVIL = CItoyen VIvant Librement.\n\n📝 Piege Brevet : cite TOUJOURS la DDHC 1789 quand on parle de droits civils.'
                    },
                    {
                        question: 'C\'est quoi les droits POLITIQUES du citoyen ?',
                        answer: '🎯 Les droits POLITIQUES = participer a la vie DEMOCRATIQUE.\n\n• Droit de VOTE (a partir de 18 ans).\n• Droit d\'etre ELU (eligibilite).\n• Droit d\'adherer a un PARTI POLITIQUE.\n• Droit de faire GREVE.\n• Droit de MANIFESTER.\n• Droit a l\'information.\n\nReserves aux CITOYENS (nationalite + 18 ans + droits civiques).\n\nEn gros : les droits politiques permettent de PESER dans les decisions du pays.\n\nMot difficile : "eligibilite" = avoir le droit d\'etre ELU.\n\n💡 Astuce dys : POLI-tiques = participer a la POLIS (cite, en grec).\n\n📝 Piege Brevet : les droits politiques sont reserves aux CITOYENS. Un etranger ne vote pas aux legislatives.'
                    },
                    {
                        question: 'C\'est quoi les droits SOCIAUX ?',
                        answer: '🎯 Les droits SOCIAUX = des protections garanties par l\'Etat.\n\nExemples (inscrits dans le PREAMBULE de 1946) :\n• Droit au TRAVAIL.\n• Droit a la SANTE (Securite sociale).\n• Droit a l\'EDUCATION gratuite.\n• Droit a la RETRAITE.\n• Droit au LOGEMENT decent.\n• Droit au repos et aux loisirs.\n\nCes droits definissent l\'ETAT-PROVIDENCE.\n\nEn gros : les droits sociaux assurent que personne ne soit laisse de cote.\n\nMot difficile : "Etat-providence" = Etat qui protege et aide les citoyens.\n\n💡 Astuce dys : SOCIAL = SOCIete + solidarite.\n\n📝 Piege Brevet : cite le Preambule de 1946 quand on parle de droits sociaux. Date cle.'
                    },
                    {
                        question: 'Quels sont les devoirs du citoyen ?',
                        answer: '🎯 Etre citoyen, c\'est aussi avoir des OBLIGATIONS.\n\nLes 4 grands devoirs :\n1) RESPECTER la loi.\n2) Payer les IMPOTS (selon ses moyens).\n3) Participer a la DEFENSE du pays (JDC a 16-25 ans).\n4) Etre SOLIDAIRE (voter, s\'informer, aider les autres).\n\nOn ajoute parfois : etre JURE en cour d\'assises (tire au sort).\n\nEn gros : des droits, mais aussi des devoirs. Les deux vont ensemble.\n\nMot difficile : "impot" = argent verse a l\'Etat pour financer les services publics.\n\n💡 Astuce dys : RIDS = Respect, Impot, Defense, Solidarite.\n\n📝 Piege Brevet : citer AU MOINS 3 devoirs dans ta reponse. Pas seulement le vote.'
                    },
                    {
                        question: 'Pourquoi les citoyens paient-ils des impots ?',
                        answer: '🎯 L\'impot = de l\'argent que tu donnes a l\'Etat.\n\nA quoi ca sert ? A financer les SERVICES PUBLICS :\n• Ecoles, hopitaux, routes.\n• Police, armee, pompiers.\n• Justice.\n• Aides sociales (RSA, allocations).\n\nPrincipe : chacun paie SELON SES MOYENS (les riches paient plus).\n\nEn gros : on paie pour que tout le monde ait acces aux services de base.\n\nMot difficile : "consentement a l\'impot" = principe de la DDHC : les citoyens acceptent l\'impot par leurs representants.\n\n💡 Astuce dys : Impot = Investir Pour les autres.\n\n📝 Piege Brevet : cite l\'article 13 de la DDHC : "une contribution commune est indispensable."'
                    },
                    {
                        question: 'Comment s\'engager des le college ?',
                        answer: '🎯 Tu n\'as pas besoin d\'attendre 18 ans pour etre citoyen actif !\n\nAu college, tu peux :\n• Devenir DELEGUE de classe (elu par tes camarades).\n• Devenir ECO-DELEGUE (questions d\'environnement).\n• Sieger au CONSEIL de la Vie Collegienne (CVC).\n• Participer au CONSEIL d\'administration.\n• Rejoindre une ASSOCIATION, faire du BENEVOLAT.\n\nEn gros : la citoyennete, ca s\'apprend et ca se pratique DES MAINTENANT.\n\nMot difficile : "CVC" = Conseil de la Vie Collegienne. Instance ou les eleves donnent leur avis.\n\n💡 Astuce dys : DECCA = Delegue, Eco-delegue, Conseil, CVC, Association.\n\n📝 Piege Brevet : cite PLUSIEURS formes d\'engagement de jeune. Montre que tu connais.'
                    },
                    {
                        question: 'Comment retenir ce que c\'est qu\'etre citoyen ?',
                        answer: '💡 Etre citoyen = 4 ingredients.\n\n1) APPARTENANCE : avoir la nationalite francaise.\n2) DROITS : civils (liberte), politiques (vote), sociaux (sante, travail).\n3) DEVOIRS : respecter la loi, payer l\'impot, defendre, etre solidaire.\n4) ENGAGEMENT : voter, s\'informer, agir pour faire vivre la democratie.\n\nEn gros : etre citoyen = "j\'en suis" + "j\'ai des droits" + "j\'ai des devoirs" + "j\'agis."\n\n💡 Astuce dys : ADDE = Appartenance, Droits, Devoirs, Engagement.\n\n📝 Piege Brevet : dans un developpement construit, structure ta reponse avec ces 4 aspects.'
                    }
                ],
                quiz: [
                    { question: 'La nationalite francaise s\'obtient par :', options: ['Uniquement le droit du sang', 'Droit du sang, droit du sol ou naturalisation', 'Seulement en naissant en France', 'Seulement par adoption'], correctIndex: 1, explanation: '🎯 3 voies : droit du sang (parent francais), droit du sol (ne et eleve en France sous conditions), naturalisation (demande d\'un etranger).' },
                    { question: 'Pour etre citoyen francais, il faut :', options: ['Avoir 16 ans', 'Avoir la nationalite + etre majeur + avoir ses droits civiques', 'Juste habiter en France', 'Payer l\'impot'], correctIndex: 1, explanation: '3 conditions cumulatives : nationalite francaise + majorite (18 ans) + jouissance des droits civiques.' },
                    { question: 'Le droit du sol permet :', options: ['D\'etre francais si on possede un terrain en France', 'A un enfant ne en France de parents etrangers de devenir francais (sous conditions)', 'De voter partout en Europe', 'De payer moins d\'impots'], correctIndex: 1, explanation: 'Droit du sol : l\'enfant ne en France de parents etrangers devient francais a 18 ans s\'il a vecu en France au moins 5 ans depuis 11 ans.' },
                    { question: 'La citoyennete europeenne est creee par :', options: ['Le traite de Rome (1957)', 'Le traite de Maastricht (1992)', 'La declaration Schuman (1950)', 'Le Brexit (2016)'], correctIndex: 1, explanation: '📅 Le traite de Maastricht (1992) cree la citoyennete europeenne : libre circulation, vote aux municipales, protection consulaire.' },
                    { question: 'Les droits politiques incluent :', options: ['Le droit a la sante', 'Le droit de vote et d\'etre elu', 'Le droit a la propriete', 'Le droit au logement'], correctIndex: 1, explanation: '🎯 Droits politiques = vote, eligibilite, adhesion a un parti, greve, manifestation. Reserves aux citoyens.' },
                    { question: 'Les droits sociaux sont inscrits dans :', options: ['La DDHC de 1789', 'Le Preambule de 1946', 'La Magna Carta', 'La Constitution de 1958 uniquement'], correctIndex: 1, explanation: '📜 Le Preambule de 1946 ajoute les droits sociaux : travail, sante, education, greve, egalite hommes-femmes.' },
                    { question: 'Un devoir du citoyen est :', options: ['Aller a l\'ecole apres 18 ans', 'Payer l\'impot selon ses moyens', 'Acheter un drapeau', 'Parler plusieurs langues'], correctIndex: 1, explanation: 'Devoirs : respecter la loi, payer l\'impot, defendre le pays (JDC), etre solidaire. Article 13 DDHC.' },
                    { question: 'Un etranger vivant en France peut :', options: ['Voter aux elections presidentielles', 'Etre depute', 'Exercer la plupart des droits civils (liberte, propriete)', 'Etre President de la Republique'], correctIndex: 2, explanation: 'Les droits civils (libertes) sont reconnus a tous. Les droits politiques (vote, eligibilite) sont reserves aux citoyens francais.' },
                    { question: 'La naturalisation est :', options: ['Automatique pour tout etranger', 'Une demande d\'un etranger, acceptee par decret', 'Reservee aux sportifs', 'Interdite en France'], correctIndex: 1, explanation: 'La naturalisation = demande (5 ans en France, francais parle, integration). Decidee par decret. Peut etre refusee.' },
                    { question: 'Au college, on peut s\'engager en :', options: ['Devenant delegue ou eco-delegue', 'Votant aux legislatives', 'Etant elu depute', 'Payant l\'impot'], correctIndex: 0, explanation: '🎯 Delegue, eco-delegue, CVC, associations : la citoyennete commence des le college.' }
                ]
            },

            // ================================================================
            // SECTION 5 : JUSTICE ET DROITS
            // ================================================================
            {
                id: 'justice-droits',
                title: 'Justice et droits',
                icon: '\u2696\uFE0F',
                content: '<h3>Principes de la justice, tribunaux, droits fondamentaux, justice des mineurs</h3>'
                    + '<ul>'
                    + '<li><strong>Principes</strong> : egalite devant la loi, presomption d\'innocence, droit a la defense</li>'
                    + '<li><strong>Tribunaux</strong> : judiciaire, correctionnel, assises, cassation</li>'
                    + '<li><strong>Justice des mineurs</strong> : protection + education</li>'
                    + '<li><strong>Droits de l\'enfant</strong> : CIDE 1989</li>'
                    + '<li><strong>Droits fondamentaux</strong> : expression, presse, association, vie privee</li>'
                    + '</ul>',
                flashcards: [
                    {
                        question: 'C\'est quoi la presomption d\'innocence ?',
                        answer: '\uD83C\uDFAF Presomption d\'innocence = tu es INNOCENT jusqu\'a preuve du contraire.\n\nTant qu\'un tribunal ne t\'a pas declare coupable, tu es considere innocent. Meme si la police t\'arrete.\n\nEn gros : c\'est au procureur de PROUVER ta culpabilite, pas a toi de prouver ton innocence.\n\nMot difficile : "presomption" = on suppose, on considere d\'avance.\n\n\uD83D\uDCA1 Astuce dys : "Innocent JUSQU\'A preuve" — c\'est dans l\'ordre : d\'abord innocent, ensuite on cherche les preuves.\n\n\uD83D\uDCDD Piege Brevet : presomption d\'innocence ≠ "le coupable s\'en sort toujours". C\'est un DROIT fondamental.'
                    },
                    {
                        question: 'C\'est quoi le droit a la defense ?',
                        answer: '\uD83C\uDFAF Droit a la defense = toute personne accusee a le droit a un AVOCAT.\n\nMeme un criminel a droit a un avocat. C\'est un droit FONDAMENTAL. Si tu n\'as pas d\'argent, l\'Etat paie un avocat pour toi (aide juridictionnelle).\n\nEn gros : personne ne peut etre juge sans pouvoir se defendre.\n\nMot difficile : "aide juridictionnelle" = l\'Etat paie l\'avocat des personnes sans argent.\n\n\uD83D\uDCA1 Astuce dys : meme le pire criminel a un avocat. C\'est ca, la justice.\n\n\uD83D\uDCDD Piege Brevet : citer "droit a la defense" = montre que tu connais les principes de la justice.'
                    },
                    {
                        question: 'C\'est quoi l\'egalite devant la loi ?',
                        answer: '\uD83C\uDFAF Egalite devant la loi = la loi est la MEME pour tous. Riche ou pauvre. Homme ou femme. Francais ou etranger vivant en France.\n\nPas de privileges. Pas de passe-droit.\n\nEn gros : devant un juge, tout le monde est traite pareil.\n\n\uD83D\uDCA1 Astuce dys : imagine une balance (symbole de la justice). Les deux plateaux sont au meme niveau.\n\n\uD83D\uDCDD Piege Brevet : egalite devant la loi = principe fondamental. Cite l\'article 1 de la DDHC.'
                    },
                    {
                        question: 'C\'est quoi le tribunal judiciaire ?',
                        answer: '\uD83C\uDFAF Le tribunal judiciaire juge les affaires CIVILES. Divorces. Conflits entre voisins. Problemes de propriete.\n\nIl a remplace le tribunal d\'instance et le TGI en 2020.\n\nEn gros : le tribunal judiciaire regle les problemes entre personnes (pas les crimes).\n\nMot difficile : "affaires civiles" = conflits entre personnes (≠ affaires penales = infractions).\n\n\uD83D\uDCA1 Astuce dys : CIVil = CIToyen vs citoyen. C\'est entre personnes.\n\n\uD83D\uDCDD Piege Brevet : ne confonds pas tribunal judiciaire (civil) et tribunal correctionnel (penal).'
                    },
                    {
                        question: 'C\'est quoi le tribunal correctionnel ?',
                        answer: '\uD83C\uDFAF Le tribunal correctionnel juge les DELITS. Vols. Escroqueries. Violences. Conduire sans permis.\n\nUn delit = infraction moyenne (punie de prison jusqu\'a 10 ans).\n\nEn gros : le correctionnel s\'occupe des actes graves mais pas les pires (pas les crimes).\n\nMot difficile : "delit" = infraction plus grave qu\'une contravention, moins grave qu\'un crime.\n\n\uD83D\uDCA1 Astuce dys : CORrectionnel = il CORrige les delits.\n\n\uD83D\uDCDD Piege Brevet : les 3 niveaux : contravention (amende) < delit (correctionnel) < crime (assises).'
                    },
                    {
                        question: 'C\'est quoi la cour d\'assises ?',
                        answer: '\uD83C\uDFAF La cour d\'assises juge les CRIMES. Meurtres. Viols. Vols a main armee.\n\nParticularite : elle a un JURY POPULAIRE. 6 citoyens tires au sort + 3 juges professionnels.\n\nEn gros : pour les crimes les plus graves, ce sont des citoyens ordinaires qui jugent.\n\nMot difficile : "jury populaire" = citoyens tires au sort qui participent au jugement.\n\n\uD83D\uDCA1 Astuce dys : ASSises = crimes ASS-ez graves pour un jury.\n\n\uD83D\uDCDD Piege Brevet : la cour d\'assises est la SEULE juridiction avec un jury populaire.'
                    },
                    {
                        question: 'C\'est quoi la Cour de cassation ?',
                        answer: '\uD83C\uDFAF La Cour de cassation = la plus HAUTE juridiction en France. Elle ne rejuge PAS les faits.\n\nElle verifie que la loi a ete BIEN APPLIQUEE. Si non, elle "casse" le jugement.\n\nEn gros : la Cour de cassation est l\'arbitre des arbitres. Elle verifie les regles.\n\nMot difficile : "casser" = annuler une decision de justice.\n\n\uD83D\uDCA1 Astuce dys : CASS-ation = elle CASSE les jugements mal faits.\n\n\uD83D\uDCDD Piege Brevet : la Cour de cassation ne dit PAS "coupable/innocent". Elle dit "le droit a ete bien/mal applique".'
                    },
                    {
                        question: 'C\'est quoi la justice des mineurs ?',
                        answer: '\uD83C\uDFAF La justice des mineurs = une justice SPECIALE pour les moins de 18 ans.\n\nPrincipe : EDUQUER plutot que punir. Le juge des enfants cherche a proteger le mineur.\n\nMesures possibles : avertissement, reparation, placement, centre educatif. Depuis 2021 : Code de la justice penale des mineurs.\n\nEn gros : un mineur est juge DIFFEREMMENT d\'un adulte. On privilegie l\'education.\n\n\uD83D\uDCA1 Astuce dys : Mineur = Moins de 18 = Mesures Educatives.\n\n\uD83D\uDCDD Piege Brevet : un mineur de 13 ans PEUT etre juge. Mais les peines sont adaptees.'
                    },
                    {
                        question: 'C\'est quoi la CIDE (droits de l\'enfant) ?',
                        answer: '\uD83C\uDFAF CIDE = Convention Internationale des Droits de l\'Enfant. Adoptee par l\'ONU le 20 novembre 1989.\n\nTu as des DROITS. Voici les principaux :\n- Droit a l\'EDUCATION.\n- Droit a la SANTE.\n- Droit a la PROTECTION contre les violences.\n- Droit d\'EXPRIMER ton opinion.\n- Droit a une IDENTITE (nom, nationalite).\n\nEn gros : tu es mineur, mais tu as des droits reconnus mondialement.\n\nMot difficile : "convention" = un accord international signe par plusieurs pays.\n\n\uD83D\uDCA1 Astuce dys : CIDE = 1989. Le 20 novembre = Journee des droits de l\'enfant.\n\n\uD83D\uDCDD Piege Brevet : la CIDE est le texte LE PLUS ratifie au monde (196 pays).'
                    },
                    {
                        question: 'C\'est quoi la liberte d\'expression ?',
                        answer: '\uD83C\uDFAF Liberte d\'expression = tu peux dire ce que tu penses. Critiquer. Debattre. Donner ton avis.\n\nMAIS il y a des limites : pas de diffamation. Pas d\'injure. Pas d\'appel a la haine.\n\nEn gros : tu es libre de parler, mais pas de blesser.\n\nMot difficile : "diffamation" = accuser publiquement quelqu\'un de quelque chose de faux.\n\n\uD83D\uDCA1 Astuce dys : LIBerte d\'EXpression = LIBEX. Tu es LIBre de t\'EXprimer.\n\n\uD83D\uDCDD Piege Brevet : la liberte d\'expression N\'EST PAS absolue. Cite toujours les LIMITES.'
                    },
                    {
                        question: 'C\'est quoi le droit a la vie privee ?',
                        answer: '\uD83C\uDFAF Droit a la vie privee = personne n\'a le droit de s\'introduire dans ta vie personnelle.\n\nExemples : tes messages sont prives. Tes photos aussi. Ton journal intime aussi.\n\nSur Internet : le RGPD (2018) protege tes donnees personnelles.\n\nEn gros : ta vie privee t\'appartient. Personne ne peut la violer.\n\nMot difficile : "RGPD" = Reglement General sur la Protection des Donnees.\n\n\uD83D\uDCA1 Astuce dys : vie PRIVee = c\'est PRIVE. Comme ton code de telephone.\n\n\uD83D\uDCDD Piege Brevet : cite le RGPD si on te parle de donnees personnelles ou d\'Internet.'
                    },
                    {
                        question: 'Quelles sont les limites des libertes ?',
                        answer: '\u26A0\uFE0F Les libertes ne sont JAMAIS absolues. Elles ont des limites :\n\n1) Respect des AUTRES (pas d\'injure, pas de diffamation).\n2) ORDRE PUBLIC (pas de violence, pas de trouble).\n3) La LOI (les lois fixent les limites).\n\nArticle 4 DDHC : "La liberte consiste a faire tout ce qui ne nuit pas a autrui."\n\nEn gros : ta liberte s\'arrete ou commence celle de ton voisin.\n\n\uD83D\uDCA1 Astuce dys : ROL = Respect, Ordre, Loi. Les 3 limites.\n\n\uD83D\uDCDD Piege Brevet : TOUJOURS citer les limites quand on te parle de liberte. Sinon, ta reponse est incomplete.'
                    },
                    {
                        question: 'C\'est quoi le double degre de juridiction ?',
                        answer: '\uD83C\uDFAF Double degre de juridiction = tu peux faire APPEL si tu n\'es pas d\'accord avec le jugement.\n\nPremier jugement = premiere instance. Si tu contestes → cour d\'APPEL. Si tu contestes encore → Cour de CASSATION.\n\nEn gros : tu as toujours le droit de demander un second avis.\n\n\uD83D\uDCA1 Astuce dys : c\'est comme une deuxieme chance dans un jeu video. Tu peux "rejouer".\n\n\uD83D\uDCDD Piege Brevet : le double degre de juridiction est un PRINCIPE fondamental de la justice francaise.'
                    },
                    {
                        question: 'Comment retenir les 3 principes de la justice ?',
                        answer: '\uD83D\uDCA1 Les 3 principes de la justice = PED.\n\nP = Presomption d\'innocence (innocent jusqu\'a preuve du contraire).\nE = Egalite devant la loi (memes regles pour tous).\nD = Droit a la Defense (toujours un avocat).\n\nEn gros : PED = les 3 piliers de la justice.\n\n\uD83D\uDCA1 Astuce dys : "PED-agogique" — la justice est PEDagogique, elle respecte des regles.\n\n\uD83D\uDCDD Piege Brevet : cite ces 3 principes a CHAQUE question sur la justice. Ca impressionne le correcteur.'
                    }
                ],
                quiz: [
                    { question: 'La presomption d\'innocence signifie :', options: ['Tout le monde est coupable', 'On est innocent jusqu\'a preuve du contraire', 'Le juge decide seul', 'L\'accuse n\'a pas droit a un avocat'], correctIndex: 1, explanation: 'Presomption d\'innocence = innocent JUSQU\'A preuve du contraire. Droit fondamental.' },
                    { question: 'La cour d\'assises juge :', options: ['Les contraventions', 'Les delits', 'Les crimes', 'Les affaires civiles'], correctIndex: 2, explanation: 'La cour d\'assises juge les crimes (meurtres, viols...) avec un jury populaire.' },
                    { question: 'La CIDE a ete adoptee en :', options: ['1948', '1958', '1989', '2000'], correctIndex: 2, explanation: 'La Convention Internationale des Droits de l\'Enfant date du 20 novembre 1989 (ONU).' },
                    { question: 'La Cour de cassation :', options: ['Rejuge les faits', 'Verifie que la loi a ete bien appliquee', 'Juge les crimes', 'Elu les juges'], correctIndex: 1, explanation: 'La Cour de cassation ne rejuge pas les faits. Elle verifie l\'application du droit.' },
                    { question: 'Un mineur est juge :', options: ['Comme un adulte', 'Differemment, avec des mesures educatives', 'Seulement a partir de 16 ans', 'Jamais'], correctIndex: 1, explanation: 'La justice des mineurs privilegiee l\'education. Un mineur de 13 ans peut etre juge avec des mesures adaptees.' },
                    { question: 'Le RGPD protege :', options: ['La liberte de la presse', 'Les donnees personnelles', 'Le droit de vote', 'La liberte religieuse'], correctIndex: 1, explanation: 'Le RGPD (2018) = Reglement General sur la Protection des Donnees. Il protege tes infos personnelles.' },
                    { question: 'L\'article 4 de la DDHC dit que la liberte :', options: ['Est absolue et sans limites', 'Consiste a faire tout ce qui ne nuit pas a autrui', 'N\'existe pas en France', 'Est reservee aux riches'], correctIndex: 1, explanation: '"La liberte consiste a pouvoir faire tout ce qui ne nuit pas a autrui." Les libertes ont des limites.' },
                    { question: 'Le tribunal correctionnel juge :', options: ['Les crimes', 'Les delits', 'Les divorces', 'Les affaires commerciales'], correctIndex: 1, explanation: 'Le tribunal correctionnel juge les delits (vols, escroqueries, violences...). Peines jusqu\'a 10 ans de prison.' },
                    { question: 'Le double degre de juridiction signifie :', options: ['Il faut 2 avocats', 'On peut faire appel du jugement', 'Le juge vote 2 fois', 'Le proces dure 2 jours'], correctIndex: 1, explanation: 'Double degre = tu peux contester un jugement en faisant appel. C\'est un principe fondamental.' },
                    { question: 'Le droit a la defense garantit :', options: ['Le droit de fuir', 'Le droit a un avocat', 'Le droit de mentir', 'Le droit de refuser le proces'], correctIndex: 1, explanation: 'Toute personne accusee a le droit a un avocat. Meme sans argent (aide juridictionnelle).' }
                ]
            },

            // ================================================================
            // SECTION 6 : ENGAGEMENT ET LUTTE CONTRE LES DISCRIMINATIONS
            // ================================================================
            {
                id: 'engagement-discriminations',
                title: 'Engagement et lutte contre les discriminations',
                icon: '\u270A',
                content: '<h3>Engagement citoyen, discriminations, harcelement, medias et esprit critique</h3>'
                    + '<ul>'
                    + '<li><strong>Engagement</strong> : voter, associations, benevolat, SNU, eco-delegue</li>'
                    + '<li><strong>Discriminations</strong> : racisme, sexisme, homophobie, handiphobie</li>'
                    + '<li><strong>Harcelement scolaire</strong> : definition, que faire (3018, 3020)</li>'
                    + '<li><strong>Medias et esprit critique</strong> : fake news, verifier une source</li>'
                    + '</ul>',
                flashcards: [
                    {
                        question: 'C\'est quoi l\'engagement citoyen ?',
                        answer: '\uD83C\uDFAF S\'engager = AGIR pour la societe. Pas juste se plaindre. Voici comment :\n\n- VOTER (le premier acte citoyen).\n- Rejoindre une ASSOCIATION.\n- Faire du BENEVOLAT.\n- Devenir ECO-DELEGUE au college.\n- Participer au conseil de la VIE COLLEGIENNE.\n\nEn gros : etre citoyen, c\'est PARTICIPER. Tu peux commencer des maintenant !\n\n\uD83D\uDCA1 Astuce dys : VABEC = Voter, Association, Benevolat, Eco-delegue, Conseil.\n\n\uD83D\uDCDD Piege Brevet : l\'engagement ne commence PAS a 18 ans. Tu peux agir des maintenant.'
                    },
                    {
                        question: 'C\'est quoi un eco-delegue ?',
                        answer: '\uD83C\uDFAF Un eco-delegue = un eleve elu pour representer sa classe sur les questions d\'ENVIRONNEMENT.\n\nIl propose des actions : tri des dechets, economies d\'energie, jardin potager, sensibilisation.\n\nC\'est obligatoire dans chaque classe depuis 2020.\n\nEn gros : l\'eco-delegue est le "porte-parole vert" de la classe.\n\n\uD83D\uDCA1 Astuce dys : ECO-delegue = ECOlogie + delegue.\n\n\uD83D\uDCDD Piege Brevet : l\'eco-delegue est un exemple PARFAIT d\'engagement citoyen a citer.'
                    },
                    {
                        question: 'C\'est quoi une discrimination ?',
                        answer: '\uD83C\uDFAF Ceci est important pour te proteger et proteger les autres.\n\nDiscrimination = traiter quelqu\'un DIFFEREMMENT a cause de ce qu\'il EST. Origine. Sexe. Handicap. Religion. Orientation sexuelle.\n\nC\'est INTERDIT par la loi. Puni jusqu\'a 3 ans de prison et 45 000 euros d\'amende.\n\nEn gros : rejeter quelqu\'un pour ce qu\'il est (pas ce qu\'il fait) = discrimination = illegal.\n\n\uD83D\uDCA1 Astuce dys : DISCRIMINER = DIS-CRI-MINER = DIS (dire) CRI (crier) MINER (detruire) quelqu\'un.\n\n\uD83D\uDCDD Piege Brevet : cite TOUJOURS un exemple precis de discrimination dans ta reponse.'
                    },
                    {
                        question: 'C\'est quoi le racisme ?',
                        answer: '\uD83C\uDFAF Ceci est important pour te proteger et proteger les autres.\n\nRacisme = croire que certaines "races" sont superieures. C\'est FAUX scientifiquement. Il n\'y a qu\'UNE seule espece humaine.\n\nC\'est un DELIT puni par la loi (loi de 1972).\n\nEn gros : le racisme est une erreur scientifique ET un delit.\n\nMot difficile : "profilage racial" = controler quelqu\'un a cause de sa couleur de peau.\n\n\uD83D\uDCA1 Astuce dys : 1972 = loi anti-racisme. "19-72 = NON au racisme."\n\n\uD83D\uDCDD Piege Brevet : dis que le racisme est un delit + cite la loi de 1972.'
                    },
                    {
                        question: 'C\'est quoi le sexisme ?',
                        answer: '\uD83C\uDFAF Ceci est important pour te proteger et proteger les autres.\n\nSexisme = discriminer quelqu\'un a cause de son SEXE. Ca touche surtout les femmes.\n\nExemples : inegalites salariales (16% d\'ecart). Harcelement de rue. Stereotypes ("les filles sont nulles en maths").\n\nEn gros : juger quelqu\'un sur son sexe = sexisme = illegal.\n\nMot difficile : "outrage sexiste" = remarque degradante a caractere sexuel (puni depuis 2018).\n\n\uD83D\uDCA1 Astuce dys : SEXISME = SEXe + racISME. C\'est du racisme base sur le sexe.\n\n\uD83D\uDCDD Piege Brevet : cite la loi sur l\'outrage sexiste (2018) et le mariage pour tous (2013).'
                    },
                    {
                        question: 'C\'est quoi l\'homophobie ?',
                        answer: '\uD83C\uDFAF Ceci est important pour te proteger et proteger les autres.\n\nHomophobie = rejeter ou discriminer quelqu\'un parce qu\'il est homosexuel ou bisexuel.\n\nC\'est un DELIT. Les insultes homophobes sont punies par la loi.\n\n2013 = loi du mariage pour tous (couples de meme sexe).\n\nEn gros : aimer qui on veut est un droit. L\'homophobie est punie par la loi.\n\n\uD83D\uDCA1 Astuce dys : HOMO-phobie = "phobie" = peur irrationnelle. L\'homophobie est une peur irrationnelle.\n\n\uD83D\uDCDD Piege Brevet : cite le mariage pour tous (2013) comme avancee contre l\'homophobie.'
                    },
                    {
                        question: 'C\'est quoi la handiphobie ?',
                        answer: '\uD83C\uDFAF Ceci est important pour te proteger et proteger les autres.\n\nHandiphobie = discriminer quelqu\'un a cause de son HANDICAP. Physique, mental ou psychique.\n\nLoi du 11 fevrier 2005 : toute personne handicapee a droit a la SOLIDARITE de la societe. Acces aux batiments. Acces a l\'ecole. Acces au travail.\n\nEn gros : une personne handicapee a les memes droits que tout le monde.\n\nMot difficile : "accessibilite" = rendre les lieux accessibles aux personnes handicapees.\n\n\uD83D\uDCA1 Astuce dys : 2005 = loi handicap. "2005 = tout le monde accede."\n\n\uD83D\uDCDD Piege Brevet : cite la loi de 2005 sur le handicap si on te parle d\'inclusion.'
                    },
                    {
                        question: 'C\'est quoi le harcelement scolaire ?',
                        answer: '\u26A0\uFE0F Ceci est important pour te proteger et proteger les autres.\n\nHarcelement scolaire = des violences REPETEES contre un eleve. Insultes. Moqueries. Coups. Exclusion. Rumeurs.\n\n3 criteres : c\'est REPETE. Il y a une INTENTION de nuire. La victime est en position de FAIBLESSE.\n\nEn gros : ce n\'est PAS "juste une blague". C\'est un delit depuis 2022.\n\nNumeros a connaitre : 3020 (harcelement) et 3018 (cyberharcelement).\n\n\uD83D\uDCA1 Astuce dys : 3020 = harcelement. 3018 = cyberharcelement. Apprends les deux par coeur.\n\n\uD83D\uDCDD Piege Brevet : cite les numeros 3020 et 3018. Les correcteurs adorent ca.'
                    },
                    {
                        question: 'Que faire si tu es victime ou temoin de harcelement ?',
                        answer: '\u26A0\uFE0F Si tu es victime ou temoin, tu as des OUTILS :\n\n1) PARLER a un adulte de confiance (parent, prof, CPE).\n2) Appeler le 3020 (harcelement) ou le 3018 (cyberharcelement).\n3) Garder des PREUVES (captures d\'ecran, messages).\n4) Ne JAMAIS rester seul(e) avec le probleme.\n\nEn gros : parler, c\'est PAS "balancer". C\'est se proteger.\n\n\uD83D\uDCA1 Astuce dys : P.A.G.N. = Parler, Appeler, Garder des preuves, Ne pas rester seul.\n\n\uD83D\uDCDD Piege Brevet : montrer que tu connais les solutions concretement = bonne note.'
                    },
                    {
                        question: 'C\'est quoi les fake news ?',
                        answer: '\uD83C\uDFAF Fake news = fausses informations diffusees VOLONTAIREMENT pour tromper.\n\nElles circulent vite sur les reseaux sociaux. Elles jouent sur les EMOTIONS (choc, peur, colere).\n\nComment les reperer : QUI a ecrit ? Est-ce un media serieux ? D\'autres medias disent-ils pareil ?\n\nEn gros : avant de partager, VERIFIE. Si c\'est trop fou, c\'est surement faux.\n\nMot difficile : "fact-checking" = verification des faits par des journalistes.\n\n\uD83D\uDCA1 Astuce dys : FAKE = Faux, Attrape, KO l\'Esprit critique.\n\n\uD83D\uDCDD Piege Brevet : cite des outils de fact-checking : AFP Factuel, Les Decodeurs (Le Monde).'
                    },
                    {
                        question: 'Comment verifier si une info est fiable ?',
                        answer: '\uD83C\uDFAF 4 reflexes pour verifier une information :\n\n1) QUI parle ? (un expert ? un anonyme ? un site bizarre ?)\n2) D\'ou vient l\'info ? (quel media ? quelle source ?)\n3) D\'AUTRES medias disent-ils la meme chose ? (croiser les sources)\n4) Est-ce un FAIT (prouvable) ou une OPINION (avis personnel) ?\n\nEn gros : verifie la source, croise, et distingue fait et opinion.\n\n\uD83D\uDCA1 Astuce dys : QDAQ = Qui, D\'ou, Autres, Quel type (fait/opinion).\n\n\uD83D\uDCDD Piege Brevet : au brevet, on peut te donner un document et te demander si c\'est fiable. Utilise QDAQ !'
                    },
                    {
                        question: 'C\'est quoi la liberte de la presse ?',
                        answer: '\uD83C\uDFAF Liberte de la presse = les journalistes informent SANS censure du gouvernement.\n\nLoi du 29 juillet 1881. Sans presse libre, pas de democratie.\n\nLimites : pas de diffamation, pas d\'incitation a la haine.\n\nEn gros : la presse libre surveille le pouvoir. C\'est le "chien de garde" de la democratie.\n\nMot difficile : "censure" = quand le gouvernement interdit une information.\n\n\uD83D\uDCA1 Astuce dys : 1881 = loi presse. "18-81 = presse libre."\n\n\uD83D\uDCDD Piege Brevet : cite RSF (Reporters Sans Frontieres) si on parle de liberte de la presse.'
                    },
                    {
                        question: 'C\'est quoi le Defenseur des droits ?',
                        answer: '\uD83C\uDFAF Le Defenseur des droits = une autorite INDEPENDANTE. Il aide les victimes de discriminations.\n\nIl peut etre saisi par TOUTE personne, meme un mineur. C\'est gratuit.\n\nIl defend 4 missions : droits des usagers, droits de l\'enfant, discriminations, deontologie des forces de l\'ordre.\n\nEn gros : si tu es victime d\'une injustice, le Defenseur des droits t\'aide gratuitement.\n\n\uD83D\uDCA1 Astuce dys : Defenseur des droits = le "super-heros" des droits.\n\n\uD83D\uDCDD Piege Brevet : cite le Defenseur des droits comme institution cle contre les discriminations.'
                    },
                    {
                        question: 'Le SNU, c\'est quoi ?',
                        answer: '\uD83C\uDFAF SNU = Service National Universel. Pour les jeunes de 15 a 17 ans.\n\n3 etapes : 1) Sejour de cohesion (2 semaines). 2) Mission d\'interet general (84h). 3) Engagement volontaire (facultatif).\n\nObjectifs : cohesion, citoyennete, engagement.\n\nEn gros : le SNU t\'apprend a vivre ensemble et a t\'engager.\n\n\uD83D\uDCA1 Astuce dys : SNU = Solidarite Nationale Utile.\n\n\uD83D\uDCDD Piege Brevet : le SNU est un exemple moderne d\'engagement citoyen.'
                    }
                ],
                quiz: [
                    { question: 'Le numero contre le harcelement scolaire est :', options: ['15', '17', '3020', '112'], correctIndex: 2, explanation: '3020 = harcelement scolaire. 3018 = cyberharcelement. A connaitre par coeur.' },
                    { question: 'Une discrimination, c\'est :', options: ['Donner son opinion', 'Traiter quelqu\'un differemment a cause de ce qu\'il est', 'Choisir ses amis', 'Preferer un sport'], correctIndex: 1, explanation: 'Discriminer = traiter inegalement quelqu\'un a cause de son origine, sexe, handicap, religion...' },
                    { question: 'Le racisme est :', options: ['Une opinion comme une autre', 'Un delit puni par la loi', 'Autorise si c\'est une blague', 'Legal sur Internet'], correctIndex: 1, explanation: 'Le racisme est un delit puni par la loi de 1972. Jusqu\'a 3 ans de prison.' },
                    { question: 'Le mariage pour tous date de :', options: ['2000', '2008', '2013', '2020'], correctIndex: 2, explanation: 'La loi du 17 mai 2013 ouvre le mariage aux couples de meme sexe.' },
                    { question: 'Pour verifier une info, il faut :', options: ['La partager tout de suite', 'Croire le premier site', 'Croiser les sources et verifier l\'auteur', 'Ne faire confiance qu\'aux reseaux sociaux'], correctIndex: 2, explanation: 'Esprit critique = verifier la source, croiser avec d\'autres medias, utiliser le fact-checking.' },
                    { question: 'Le Defenseur des droits aide les victimes de :', options: ['Cambriolages', 'Discriminations', 'Accidents de la route', 'Problemes de voisinage'], correctIndex: 1, explanation: 'Le Defenseur des droits est une autorite independante qui lutte contre les discriminations.' },
                    { question: 'Le harcelement scolaire est un delit depuis :', options: ['2010', '2015', '2022', 'Ce n\'est pas un delit'], correctIndex: 2, explanation: 'Depuis 2022, le harcelement scolaire est un delit penal. C\'est puni par la loi.' },
                    { question: 'La loi sur le handicap date de :', options: ['1972', '1981', '2005', '2013'], correctIndex: 2, explanation: 'Loi du 11 fevrier 2005 : droit a la solidarite, accessibilite, inclusion des personnes handicapees.' },
                    { question: 'La liberte de la presse est garantie par la loi de :', options: ['1789', '1881', '1905', '1958'], correctIndex: 1, explanation: 'La loi du 29 juillet 1881 garantit la liberte de la presse en France.' },
                    { question: 'Un eco-delegue, c\'est :', options: ['Un prof d\'ecologie', 'Un eleve elu pour les questions d\'environnement', 'Le directeur du college', 'Un employe de la cantine'], correctIndex: 1, explanation: 'L\'eco-delegue est un eleve elu dans chaque classe pour porter les projets environnementaux.' }
                ]
            },

            // ================================================================
            // SECTION 7 : DEFENSE, PAIX & METHODE BREVET
            // ================================================================
            {
                id: 'defense-paix-methode',
                title: 'Defense, paix & methode Brevet',
                icon: '\uD83D\uDD4A\uFE0F',
                content: '<h3>Defense nationale, organisations internationales, droit humanitaire + methode Brevet EMC</h3>'
                    + '<ul>'
                    + '<li><strong>Defense</strong> : armee, JDC</li>'
                    + '<li><strong>ONU</strong> : Conseil de securite, Casques bleus</li>'
                    + '<li><strong>UE, OTAN</strong> : la paix par la cooperation</li>'
                    + '<li><strong>Droit humanitaire</strong> : Conventions de Geneve, Croix-Rouge</li>'
                    + '<li><strong>Methode Brevet EMC</strong> : repondre sur document, construire un raisonnement</li>'
                    + '</ul>',
                flashcards: [
                    {
                        question: 'C\'est quoi la Defense nationale ?',
                        answer: '\uD83C\uDFAF La Defense nationale = proteger la France, ses habitants, ses interets.\n\nL\'armee comprend : armee de Terre, Marine, Armee de l\'Air et de l\'Espace, Gendarmerie.\n\nLe President est chef des armees. La France a l\'arme nucleaire (dissuasion).\n\nEn gros : la defense, c\'est l\'affaire de TOUS les citoyens.\n\nMot difficile : "dissuasion nucleaire" = avoir la bombe pour empecher les autres d\'attaquer.\n\n\uD83D\uDCA1 Astuce dys : TAMAG = Terre, Air, Marine, And Gendarmerie.\n\n\uD83D\uDCDD Piege Brevet : la defense ≠ que l\'armee. Ca inclut aussi la JDC et l\'engagement citoyen.'
                    },
                    {
                        question: 'C\'est quoi la JDC ?',
                        answer: '\uD83C\uDFAF JDC = Journee Defense et Citoyennete. OBLIGATOIRE pour tous les jeunes (16-25 ans).\n\nProgramme : presentation de la defense, tests de lecture, information sur tes droits.\n\nATTENTION : sans attestation JDC, tu ne peux PAS passer le permis de conduire !\n\nEn gros : une journee obligatoire pour decouvrir la defense et tes droits.\n\n\uD83D\uDCA1 Astuce dys : JDC = Journee = 1 jour. Defense = armee. Citoyennete = tes droits.\n\n\uD83D\uDCDD Piege Brevet : la JDC est obligatoire pour garcons ET filles. Ne l\'oublie pas.'
                    },
                    {
                        question: 'C\'est quoi l\'ONU ?',
                        answer: '\uD83C\uDFAF ONU = Organisation des Nations Unies. Creee en 1945 apres la 2de Guerre mondiale.\n\nBut : maintenir la PAIX. 193 Etats membres.\n\nOrganes cles : Assemblee generale (193 pays). Conseil de securite (15 membres). Casques bleus (soldats de la paix).\n\nEn gros : l\'ONU est le lieu ou les pays essaient de regler leurs conflits sans guerre.\n\n\uD83D\uDCA1 Astuce dys : ONU = 1945. "ONze + quatre + cinq = onze-quatre-cinq → 1-9-4-5".\n\n\uD83D\uDCDD Piege Brevet : retiens 1945, 193 membres, et les 5 membres permanents du Conseil de securite.'
                    },
                    {
                        question: 'C\'est quoi le Conseil de securite de l\'ONU ?',
                        answer: '\uD83C\uDFAF Le Conseil de securite = l\'organe le plus PUISSANT de l\'ONU. 15 membres.\n\n5 PERMANENTS avec droit de VETO : USA, Russie, Chine, France, Royaume-Uni. + 10 membres elus pour 2 ans.\n\nIl peut : envoyer des Casques bleus, imposer des sanctions, autoriser une intervention militaire.\n\nEn gros : les 5 permanents ont un "super-pouvoir" : le veto. Ils peuvent bloquer toute decision.\n\nMot difficile : "veto" = pouvoir de dire NON et de bloquer une decision.\n\n\uD83D\uDCA1 Astuce dys : URCFR = USA, Russie, Chine, France, Royaume-Uni. "Un Roi Chinois Fait la Roue."\n\n\uD83D\uDCDD Piege Brevet : les 5 membres permanents = question CLASSIQUE. Apprends-les par coeur.'
                    },
                    {
                        question: 'C\'est quoi les Casques bleus ?',
                        answer: '\uD83C\uDFAF Casques bleus = soldats de la paix de l\'ONU. Ils portent un casque BLEU.\n\nMissions : s\'interposer entre belligerants, proteger les civils, aider aux elections.\n\nEnvoyes par le Conseil de securite. Limites : regles strictes, parfois impuissants.\n\nEn gros : les Casques bleus tentent de maintenir la paix dans les zones de conflit.\n\nMot difficile : "belligerants" = les camps qui se font la guerre.\n\n\uD83D\uDCA1 Astuce dys : BLEU = paix. Comme le ciel bleu = calme.\n\n\uD83D\uDCDD Piege Brevet : cite un echec des Casques bleus (Srebrenica 1995) pour montrer les limites.'
                    },
                    {
                        question: 'C\'est quoi l\'UE pour la paix ?',
                        answer: '\uD83C\uDFAF L\'Union europeenne est nee pour EMPECHER une nouvelle guerre en Europe.\n\nEtapes : 1951 CECA (6 pays, charbon et acier). 1957 Traite de Rome. 1992 Traite de Maastricht. Aujourd\'hui : 27 pays.\n\nL\'UE a recu le Prix Nobel de la paix en 2012.\n\nEn gros : depuis que les pays europeens cooperent, plus de guerre entre eux.\n\n\uD83D\uDCA1 Astuce dys : 51-57-92 = CECA, Rome, Maastricht. "51 Charbon, 57 Rome, 92 Maastricht."\n\n\uD83D\uDCDD Piege Brevet : dis que l\'UE est le plus grand projet de PAIX de l\'Histoire europeenne.'
                    },
                    {
                        question: 'C\'est quoi l\'OTAN ?',
                        answer: '\uD83C\uDFAF OTAN = Organisation du Traite de l\'Atlantique Nord. Creee en 1949. Alliance MILITAIRE.\n\n32 pays membres (Europe + Amerique du Nord). Principe = defense COLLECTIVE (article 5).\n\nSi un pays est attaque, TOUS les autres le defendent.\n\nEn gros : l\'OTAN = "un pour tous, tous pour un" en version militaire.\n\nMot difficile : "defense collective" = si on attaque un membre, c\'est comme attaquer tout le monde.\n\n\uD83D\uDCA1 Astuce dys : OTAN = 1949. "49 = alliance pour la paix post-guerre."\n\n\uD83D\uDCDD Piege Brevet : ne confonds PAS ONU (paix mondiale) et OTAN (alliance militaire).'
                    },
                    {
                        question: 'C\'est quoi les Conventions de Geneve ?',
                        answer: '\uD83C\uDFAF Conventions de Geneve = les regles de la GUERRE. 4 conventions signees en 1949.\n\nRegles : les civils doivent etre proteges. Les prisonniers traites humainement. Les hopitaux ne peuvent pas etre attaques.\n\nEn gros : meme en guerre, il y a des regles. On n\'a pas le droit de tout faire.\n\nMot difficile : "droit international humanitaire" = les lois qui protegent les gens pendant les guerres.\n\n\uD83D\uDCA1 Astuce dys : Geneve = 1949 = Regles de guerre. "Geneve dit STOP aux abus."\n\n\uD83D\uDCDD Piege Brevet : cite les Conventions de Geneve quand on parle de droit humanitaire.'
                    },
                    {
                        question: 'C\'est quoi la Croix-Rouge ?',
                        answer: '\uD83C\uDFAF Croix-Rouge = organisation humanitaire creee en 1863 par Henry DUNANT (Suisse).\n\nSymbole : croix rouge sur fond blanc (l\'inverse du drapeau suisse).\n\nEn guerre : protege les civils, visite les prisonniers, distribue l\'aide.\nEn paix : premiers secours, catastrophes, formation.\n\nEn gros : la Croix-Rouge aide les gens qui souffrent, en guerre comme en paix.\n\n\uD83D\uDCA1 Astuce dys : DUNANT = 1863. "DU-NANT = il a dit NON a la souffrance."\n\n\uD83D\uDCDD Piege Brevet : Henry Dunant + 1863 + Croix-Rouge. Trio a connaitre.'
                    },
                    {
                        question: 'METHODE BREVET : comment repondre a une question sur document en EMC ?',
                        answer: '\uD83D\uDCDD Methode en 4 etapes pour les questions sur document :\n\n1) PRESENTER le document : nature (photo, texte, affiche), auteur, date, source.\n2) DECRIRE ce que tu vois ou lis (cite le document entre guillemets).\n3) EXPLIQUER avec tes connaissances (relie le document au cours).\n4) CONCLURE en repondant precisement a la question.\n\nEn gros : Presente, Decris, Explique, Conclus. PDEC !\n\n\uD83D\uDCA1 Astuce dys : PDEC = "Papa Decrit Et Conclut."\n\n\u26A0\uFE0F Piege Brevet : ne JAMAIS repondre sans citer le document. Le correcteur veut voir des guillemets.'
                    },
                    {
                        question: 'METHODE BREVET : comment construire un raisonnement civique ?',
                        answer: '\uD83D\uDCDD Methode pour le "developpement construit" en EMC :\n\n1) INTRODUCTION : definis le sujet en 1-2 phrases.\n2) PARTIE 1 : premier argument + exemple concret.\n3) PARTIE 2 : deuxieme argument + exemple concret.\n4) CONCLUSION : reponds a la question clairement.\n\nEn gros : Intro, Argument 1, Argument 2, Conclusion. C\'est IIAC !\n\n\uD83D\uDCA1 Astuce dys : IIAC = "Il Imagine Avant de Conclure."\n\n\u26A0\uFE0F Piege Brevet : CHAQUE argument doit avoir un EXEMPLE precis (date, loi, chiffre). Pas de blabla vague.'
                    },
                    {
                        question: 'METHODE BREVET : les mots cles a utiliser en EMC',
                        answer: '\uD83D\uDCDD Les mots magiques qui impressionnent le correcteur :\n\nPour les VALEURS : "la Republique repose sur...", "le principe de..."\nPour les LOIS : "la loi de [date] prevoit que...", "selon l\'article..."\nPour les EXEMPLES : "par exemple...", "ainsi...", "on peut citer..."\nPour NUANCER : "cependant...", "neanmoins...", "mais cette liberte a des limites..."\n\nEn gros : utilise des mots precis et des connecteurs logiques. Ca fait professionnel.\n\n\uD83D\uDCA1 Astuce dys : colle ces mots sur un post-it et entraine-toi a les utiliser.\n\n\u26A0\uFE0F Piege Brevet : ne dis JAMAIS "je pense que" tout seul. Dis "je pense que... car la loi de... prevoit que...".'
                    }
                ],
                quiz: [
                    { question: 'L\'ONU a ete creee en :', options: ['1919', '1945', '1949', '1992'], correctIndex: 1, explanation: 'L\'ONU est creee en 1945 apres la Seconde Guerre mondiale pour maintenir la paix.' },
                    { question: 'Les 5 membres permanents du Conseil de securite sont :', options: ['USA, Chine, Allemagne, Japon, Inde', 'USA, Russie, Chine, France, Royaume-Uni', 'USA, Russie, Chine, Inde, Bresil', 'France, Allemagne, Italie, Espagne, UK'], correctIndex: 1, explanation: 'Les 5 permanents avec droit de veto : USA, Russie, Chine, France, Royaume-Uni.' },
                    { question: 'La JDC est :', options: ['Facultative', 'Obligatoire pour tous les jeunes Francais', 'Reservee aux garcons', 'Uniquement pour les militaires'], correctIndex: 1, explanation: 'La JDC est obligatoire pour tous les jeunes Francais, garcons et filles, entre 16 et 25 ans.' },
                    { question: 'Les Conventions de Geneve datent de :', options: ['1919', '1945', '1949', '1992'], correctIndex: 2, explanation: 'Les 4 Conventions de Geneve (1949) = base du droit international humanitaire.' },
                    { question: 'L\'OTAN est :', options: ['Une organisation humanitaire', 'Une alliance militaire', 'Une organisation commerciale', 'Un tribunal international'], correctIndex: 1, explanation: 'L\'OTAN (1949) = alliance militaire de defense collective entre 32 pays.' },
                    { question: 'La Croix-Rouge a ete creee par :', options: ['Napoleon', 'Henry Dunant', 'Victor Hugo', 'Jean Moulin'], correctIndex: 1, explanation: 'Henry Dunant, horrifie par la bataille de Solferino, fonde la Croix-Rouge en 1863.' },
                    { question: 'L\'UE a recu le Prix Nobel de la paix en :', options: ['2000', '2005', '2012', '2020'], correctIndex: 2, explanation: 'L\'UE a recu le Prix Nobel de la paix en 2012 pour sa contribution a la paix en Europe.' },
                    { question: 'Pour repondre sur document au brevet, la premiere etape est :', options: ['Donner son avis personnel', 'Presenter le document (nature, auteur, date)', 'Recopier le document', 'Dessiner un schema'], correctIndex: 1, explanation: 'Etape 1 = PRESENTER le document : nature, auteur, date, source. Puis decrire, expliquer, conclure.' }
                ]
            }
        ]
    });
})();
