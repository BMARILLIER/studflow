// brevet_sciences.js — Brevet Sciences : Physique-Chimie, SVT
// Programme cycle 4 (3eme) — DNB
// Format pedagogique adapte dys/TSA : max 12 mots/phrase, mnemoniques, pieges brevet
(function() {
    if (!window.StudFlow || !window.StudFlow.subjects) return;

    window.StudFlow.subjects.register({
        id: 'brevet_sciences',
        name: 'Sciences (Brevet)',
        icon: '\uD83D\uDD2C',
        color: 'leaf',
        exam: 'brevet',
        sections: [

            // ================================================================
            // SECTION 1 : ATOMES, MOLECULES, IONS
            // ================================================================
            {
                id: 'atomes-molecules',
                title: 'Atomes, molecules, ions',
                icon: '\u269B\uFE0F',
                content: '<h3>\uD83C\uDFAF Atomes et molecules</h3>'
                    + '<ul>'
                    + '<li><strong>Atome</strong> : noyau (protons + neutrons) + electrons autour</li>'
                    + '<li><strong>Molecule</strong> : plusieurs atomes lies ensemble</li>'
                    + '<li><strong>Ion</strong> : atome charge + ou - (electron perdu ou gagne)</li>'
                    + '</ul>'
                    + '<h3>\uD83C\uDFAF Formules chimiques</h3>'
                    + '<ul>'
                    + '<li>H2O = eau (2 H + 1 O)</li>'
                    + '<li>CO2 = dioxyde de carbone (1 C + 2 O)</li>'
                    + '<li>O2 = dioxygene (2 O)</li>'
                    + '</ul>'
                    + '<h3>\uD83C\uDFAF Tableau periodique</h3>'
                    + '<ul>'
                    + '<li>Classe tous les atomes par numero atomique</li>'
                    + '<li>Atomes importants : H, C, N, O, Fe, Cu</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'C\'est quoi un atome ?', answer: '\uD83C\uDFAF C\'est le plus petit grain de matiere.\nIl a un NOYAU au centre.\nDes ELECTRONS tournent autour du noyau.\n\nLe noyau contient des protons (+) et des neutrons.\nLes electrons sont charges moins (-).\n\nEn gros : tout est fait d\'atomes. Toi, l\'air, ta table.\n\nMot difficile : "proton" = particule positive dans le noyau. "electron" = particule negative qui tourne autour.\n\n\uD83D\uDCA1 Astuce dys : imagine un Soleil (noyau) avec des planetes (electrons).\n\n\u26A0\uFE0F Piege Brevet : l\'atome est NEUTRE (autant de + que de -).' },
                    { question: 'C\'est quoi une molecule ?', answer: '\uD83C\uDFAF Une molecule = plusieurs atomes LIES ensemble.\nExemple : H2O = 2 atomes H + 1 atome O.\n\nLes atomes sont accroches par des liaisons chimiques.\nUne molecule a une formule chimique.\n\nEn gros : si l\'atome est une lettre, la molecule est un mot.\n\nMot difficile : "liaison chimique" = la colle entre deux atomes.\n\n\uD83D\uDCA1 Astuce dys : H2O → "H-deux-O" → 2 Hydrogenes, 1 Oxygene.\n\n\u26A0\uFE0F Piege Brevet : le petit chiffre est APRES la lettre. H2 = 2 atomes de H.' },
                    { question: 'C\'est quoi un ion ?', answer: '\uD83C\uDFAF Un ion = un atome qui a PERDU ou GAGNE un electron.\n\nS\'il perd un electron → il devient POSITIF (+).\nOn l\'appelle un CATION. Exemple : Na+.\n\nS\'il gagne un electron → il devient NEGATIF (-).\nOn l\'appelle un ANION. Exemple : Cl-.\n\nEn gros : un atome normal est neutre. Un ion est charge.\n\nMot difficile : "cation" = ion positif. "anion" = ion negatif.\n\n\uD83D\uDCA1 Astuce dys : le Chat est Positif (CATion = +). Pense a un chat content.\n\n\u26A0\uFE0F Piege Brevet : un ion a PERDU un electron s\'il est +, pas gagne !' },
                    { question: 'Quels atomes faut-il connaitre au brevet ?', answer: '\uD83C\uDFAF Les 6 atomes importants :\n\nH = Hydrogene (le plus leger)\nC = Carbone (dans tout le vivant)\nN = Azote (dans l\'air : N2)\nO = Oxygene (on le respire : O2)\nFe = Fer (dans les aimants, le sang)\nCu = Cuivre (dans les fils electriques)\n\nEn gros : retiens ces 6 symboles par coeur.\n\n\uD83D\uDCA1 Astuce dys : "H C N O Fe Cu" → "Hector Cuisine Neuf Oeufs Feuilletés Cuits".\n\n\u26A0\uFE0F Piege Brevet : Fe c\'est le FER (pas F). Cu c\'est le CUIVRE (pas C).' },
                    { question: 'C\'est quoi la formule chimique H2O ?', answer: '\uD83C\uDFAF H2O = la formule de l\'EAU.\n\nH2 signifie 2 atomes d\'hydrogene.\nO signifie 1 atome d\'oxygene.\nDonc H2O = 2 H + 1 O colles ensemble.\n\nEn gros : la formule dit combien d\'atomes de chaque sorte.\n\nMot difficile : "indice" = le petit chiffre en bas (le 2 dans H2).\n\n\uD83D\uDCA1 Astuce dys : pas de chiffre = 1 atome. Le "1" ne s\'ecrit jamais.\n\n\u26A0\uFE0F Piege Brevet : H2O c\'est UNE molecule. 2 H2O c\'est DEUX molecules d\'eau.' },
                    { question: 'C\'est quoi la formule CO2 ?', answer: '\uD83C\uDFAF CO2 = dioxyde de carbone.\n\n1 atome de carbone (C).\n2 atomes d\'oxygene (O2).\n\nC\'est le gaz qu\'on EXPIRE en respirant.\nC\'est aussi un gaz a effet de serre.\n\nEn gros : CO2 sort de ta bouche quand tu souffles.\n\n\uD83D\uDCA1 Astuce dys : CO2 = "C-O-deux" = 1 Carbone + 2 Oxygenes.\n\n\u26A0\uFE0F Piege Brevet : CO2 n\'est PAS toxique a faible dose. Mais c\'est un gaz a effet de serre.' },
                    { question: 'C\'est quoi le modele de l\'atome ?', answer: '\uD83C\uDFAF L\'atome ressemble a un systeme solaire minuscule.\n\nAu centre : le NOYAU (tres petit, tres lourd).\nAutour : les ELECTRONS (tres legers, tournent vite).\n\nLe noyau contient des PROTONS (charge +).\nEt des NEUTRONS (pas de charge).\n\nEn gros : le noyau = 99,9% de la masse. Le reste = vide.\n\nMot difficile : "numero atomique" = nombre de protons dans le noyau.\n\n\uD83D\uDCA1 Astuce dys : dessine un point au centre (noyau) et des cercles autour (electrons).\n\n\u26A0\uFE0F Piege Brevet : l\'atome est surtout du VIDE. Le noyau est minuscule.' },
                    { question: 'C\'est quoi le tableau periodique ?', answer: '\uD83C\uDFAF C\'est le classement de TOUS les atomes connus.\n\nEnviron 118 elements classes par numero atomique.\nChaque CASE = un element (avec symbole et numero).\nChaque COLONNE = une famille (proprietes similaires).\nChaque LIGNE = une periode.\n\nEn gros : c\'est l\'album photo de tous les atomes.\n\nMot difficile : "element chimique" = un type d\'atome (ex: l\'oxygene).\n\n\uD83D\uDCA1 Astuce dys : les colonnes = les copains qui se ressemblent.\n\n\u26A0\uFE0F Piege Brevet : au brevet on te DONNE le tableau. Pas besoin de le connaitre par coeur.' },
                    { question: 'Quelle est la difference entre atome et molecule ?', answer: '\uD83C\uDFAF ATOME = UN SEUL grain.\nExemple : un atome d\'oxygene (O).\n\nMOLECULE = PLUSIEURS atomes colles.\nExemple : une molecule de dioxygene (O2 = 2 O).\n\nEn gros : l\'atome est la brique. La molecule est le mur.\n\nMot difficile : "dioxygene" = le nom exact de O2 (l\'oxygene de l\'air).\n\n\uD83D\uDCA1 Astuce dys : "di" veut dire "deux". Dioxygene = deux oxygenes.\n\n\u26A0\uFE0F Piege Brevet : O (1 atome) ≠ O2 (1 molecule de 2 atomes). Ne confonds pas !' },
                    { question: 'Comment lire une formule chimique ?', answer: '\uD83C\uDFAF Regles simples :\n\nLa LETTRE = quel atome.\nLe PETIT CHIFFRE en bas = combien d\'atomes.\nPas de chiffre = 1 atome.\nLe GRAND CHIFFRE devant = combien de molecules.\n\nExemple : 3 H2O = 3 molecules d\'eau.\nChaque molecule a 2 H et 1 O.\nDonc au total : 6 H et 3 O.\n\nEn gros : petit chiffre = dans la molecule. Grand chiffre = nombre de molecules.\n\n\uD83D\uDCA1 Astuce dys : le petit chiffre colle a la lettre. Le grand chiffre est tout seul devant.\n\n\u26A0\uFE0F Piege Brevet : 2 H2O ≠ H4O2. On ne change JAMAIS les indices.' },
                    { question: 'C\'est quoi un electron ?', answer: '\uD83C\uDFAF L\'electron est une particule TRES legere.\nIl a une charge NEGATIVE (-).\nIl tourne autour du noyau de l\'atome.\n\nLe nombre d\'electrons = le nombre de protons.\nDonc l\'atome est NEUTRE (+ et - s\'annulent).\n\nEn gros : les electrons sont comme des abeilles autour d\'une ruche.\n\nMot difficile : "couche electronique" = le chemin de l\'electron autour du noyau.\n\n\uD83D\uDCA1 Astuce dys : Electron = E = Exterieur (il est a l\'exterieur du noyau).\n\n\u26A0\uFE0F Piege Brevet : si un atome PERD un electron, il devient un ion POSITIF (pas negatif).' },
                    { question: 'C\'est quoi un numero atomique ?', answer: '\uD83C\uDFAF Le numero atomique = le nombre de PROTONS.\nSymbole : Z.\n\nChaque atome a un numero unique.\nHydrogene H : Z = 1 (1 proton).\nCarbone C : Z = 6 (6 protons).\nOxygene O : Z = 8 (8 protons).\n\nEn gros : c\'est la carte d\'identite de l\'atome.\n\nMot difficile : "Z" = symbole du numero atomique.\n\n\uD83D\uDCA1 Astuce dys : Z comme "Zero defaut" → c\'est le NUMERO officiel de l\'atome.\n\n\u26A0\uFE0F Piege Brevet : Z = protons SEULEMENT. Pas protons + neutrons.' },
                    { question: 'Quelle est la difference entre ion et atome ?', answer: '\uD83C\uDFAF ATOME = neutre (autant de + que de -).\nION = charge (il a perdu ou gagne des electrons).\n\nExemple : Na (atome neutre).\nNa+ (ion, a perdu 1 electron → charge +).\n\nExemple : Cl (atome neutre).\nCl- (ion, a gagne 1 electron → charge -).\n\nEn gros : meme atome, mais l\'ion a change ses electrons.\n\n\uD83D\uDCA1 Astuce dys : ion = atome DESEQUILIBRE. Le signe te dit comment.\n\n\u26A0\uFE0F Piege Brevet : le noyau ne change PAS. Seuls les electrons changent.' },
                    { question: 'C\'est quoi le sel de cuisine en chimie ?', answer: '\uD83C\uDFAF Le sel = NaCl (chlorure de sodium).\n\nDans l\'eau, il se separe en ions :\nNa+ (ion sodium, positif).\nCl- (ion chlorure, negatif).\n\nC\'est pour ca que l\'eau salee conduit l\'electricite.\nLes ions libres transportent le courant.\n\nEn gros : le sel dans l\'eau se casse en 2 ions.\n\n\uD83D\uDCA1 Astuce dys : NaCl → "Na-Cl" → "Nacl" sonne comme "nacle" = sel.\n\n\u26A0\uFE0F Piege Brevet : le sel SOLIDE ne conduit pas. Il faut le dissoudre.' }
                ],
                quiz: [
                    { question: 'Un atome est compose de :', options: ['Uniquement de protons', 'Un noyau (protons + neutrons) et des electrons', 'Uniquement d\'electrons', 'Des molecules'], correctIndex: 1, explanation: '\uD83C\uDFAF L\'atome = noyau (protons + neutrons) + electrons autour. Le noyau est au centre. Les electrons tournent autour.' },
                    { question: 'La formule H2O signifie :', options: ['2 atomes d\'oxygene + 1 hydrogene', '2 atomes d\'hydrogene + 1 atome d\'oxygene', '2 molecules d\'eau', '1 atome d\'hydrogene + 2 d\'oxygene'], correctIndex: 1, explanation: '\uD83C\uDFAF H2O = 2 H + 1 O. Le petit chiffre 2 est apres le H. Pas de chiffre apres O = 1 seul.' },
                    { question: 'Un ion positif (cation) est un atome qui a :', options: ['Gagne un electron', 'Perdu un electron', 'Gagne un proton', 'Perdu un neutron'], correctIndex: 1, explanation: '\uD83C\uDFAF Perdre un electron (-) → il reste plus de protons (+). Donc l\'atome devient positif = cation.' },
                    { question: 'Le symbole Fe correspond a :', options: ['Le fluor', 'Le fer', 'Le francium', 'Le fermium'], correctIndex: 1, explanation: '\uD83C\uDFAF Fe = Fer (du latin Ferrum). \u26A0\uFE0F Piege : F tout seul = Fluor. Fe = Fer.' },
                    { question: 'Dans la formule 3 H2O, combien y a-t-il d\'atomes d\'hydrogene au total ?', options: ['2', '3', '6', '5'], correctIndex: 2, explanation: '\uD83C\uDFAF 3 molecules × 2 H par molecule = 6 atomes d\'hydrogene. Le 3 devant multiplie TOUTE la molecule.' },
                    { question: 'Un atome est electriquement :', options: ['Positif', 'Negatif', 'Neutre', 'Ca depend'], correctIndex: 2, explanation: '\uD83C\uDFAF Atome = neutre car nombre de protons (+) = nombre d\'electrons (-). S\'il perd ou gagne un electron, il devient un ion.' },
                    { question: 'Le numero atomique Z represente :', options: ['Le nombre de neutrons', 'Le nombre de protons', 'Le nombre total de particules', 'La masse de l\'atome'], correctIndex: 1, explanation: '\uD83C\uDFAF Z = nombre de protons dans le noyau. C\'est aussi le nombre d\'electrons si l\'atome est neutre.' },
                    { question: 'CO2 est la formule de :', options: ['Le monoxyde de carbone', 'Le dioxyde de carbone', 'Le carbone', 'L\'oxygene'], correctIndex: 1, explanation: '\uD83C\uDFAF CO2 = dioxyde de carbone (di = 2 oxygenes). \u26A0\uFE0F Ne confonds pas avec CO (monoxyde = 1 seul O, tres toxique).' },
                    { question: 'Dans le tableau periodique, les elements d\'une meme colonne :', options: ['Ont la meme masse', 'Ont des proprietes chimiques similaires', 'Sont tous des gaz', 'Ont le meme nombre de neutrons'], correctIndex: 1, explanation: '\uD83C\uDFAF Meme colonne = meme famille = proprietes similaires. Ils reagissent de la meme facon.' },
                    { question: 'L\'ion Cl- est un atome de chlore qui a :', options: ['Perdu un electron', 'Gagne un electron', 'Perdu un proton', 'Gagne un proton'], correctIndex: 1, explanation: '\uD83C\uDFAF Le signe - veut dire charge negative. L\'atome a GAGNE un electron (negatif) → il est devenu negatif.' }
                ]
            },

            // ================================================================
            // SECTION 2 : TRANSFORMATIONS CHIMIQUES
            // ================================================================
            {
                id: 'transformations-chimiques',
                title: 'Transformations chimiques',
                icon: '\u2697\uFE0F',
                content: '<h3>\uD83C\uDFAF Reactions chimiques</h3>'
                    + '<ul>'
                    + '<li>Reactifs → Produits</li>'
                    + '<li>Conservation de la masse (Lavoisier)</li>'
                    + '<li>Equilibrer une equation = meme nombre d\'atomes des 2 cotes</li>'
                    + '</ul>'
                    + '<h3>\uD83C\uDFAF Solutions et pH</h3>'
                    + '<ul>'
                    + '<li>pH &lt; 7 = acide / pH = 7 = neutre / pH &gt; 7 = basique</li>'
                    + '<li>Concentration C = m / V (en g/L)</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'C\'est quoi une transformation chimique ?', answer: '\uD83C\uDFAF Des substances se transforment en NOUVELLES substances.\n\nLes substances de depart = les REACTIFS.\nLes nouvelles substances = les PRODUITS.\n\nOn ecrit : Reactifs → Produits.\n\nEn gros : les atomes se reorganisent. Rien ne disparait.\n\nMot difficile : "reactif" = ce qui est la AVANT la reaction.\n\n\uD83D\uDCA1 Astuce dys : la FLECHE separe l\'avant (reactifs) et l\'apres (produits).\n\n\u26A0\uFE0F Piege Brevet : les atomes changent de place, mais aucun atome ne disparait.' },
                    { question: 'C\'est quoi la conservation de la masse ?', answer: '\uD83C\uDFAF La masse totale ne change PAS dans une reaction.\n\nMasse des reactifs = masse des produits.\nC\'est la loi de LAVOISIER.\n\n"Rien ne se perd, rien ne se cree, tout se transforme."\n\nEn gros : les atomes se reorganisent mais leur nombre reste pareil.\n\nMot difficile : "Lavoisier" = le scientifique qui a decouvert cette loi.\n\n\uD83D\uDCA1 Astuce dys : imagine des Lego. Tu changes la forme, pas le nombre de pieces.\n\n\u26A0\uFE0F Piege Brevet : si la masse semble baisser, c\'est qu\'un GAZ s\'est echappe !' },
                    { question: 'Comment equilibrer une equation chimique ?', answer: '\uD83C\uDFAF Meme nombre d\'atomes a gauche et a droite.\n\nMethode en 3 etapes :\n1) Ecris la reaction avec les formules.\n2) Compte les atomes de chaque cote.\n3) Ajoute des COEFFICIENTS devant pour equilibrer.\n\nExemple : H2 + O2 → H2O\nPas equilibree ! 2 O a gauche, 1 O a droite.\nSolution : 2 H2 + O2 → 2 H2O ✓\n\nEn gros : c\'est un puzzle. Equilibre les pieces.\n\n\uD83D\uDCA1 Astuce dys : commence par l\'atome le plus rare.\n\n\u26A0\uFE0F Piege Brevet : on ajoute des COEFFICIENTS devant. On ne change JAMAIS les indices.' },
                    { question: 'C\'est quoi une combustion ?', answer: '\uD83C\uDFAF Une combustion = un combustible qui brule avec du dioxygene.\n\nCombustible + O2 → CO2 + H2O (+ chaleur).\n\nExemple : le gaz de cuisine (methane) qui brule.\nCH4 + 2 O2 → CO2 + 2 H2O.\n\nEn gros : bruler = reagir avec l\'oxygene de l\'air.\n\nMot difficile : "combustible" = ce qui brule (bois, gaz, essence).\n\n\uD83D\uDCA1 Astuce dys : pas de O2 = pas de feu. C\'est pour ca qu\'on etouffe les flammes.\n\n\u26A0\uFE0F Piege Brevet : les produits sont TOUJOURS CO2 et H2O (pour un hydrocarbure).' },
                    { question: 'C\'est quoi le pH ?', answer: '\uD83C\uDFAF Le pH mesure l\'ACIDITE d\'une solution.\n\nEchelle de 0 a 14 :\npH < 7 = ACIDE (citron pH 2, vinaigre pH 3).\npH = 7 = NEUTRE (eau pure).\npH > 7 = BASIQUE (savon pH 9, javel pH 12).\n\nEn gros : petit nombre = acide. Grand nombre = basique.\n\nMot difficile : "basique" = le contraire d\'acide (on dit aussi "alcalin").\n\n\uD83D\uDCA1 Astuce dys : ACIDE = Attention Ca Irrite → petit pH. Basique = B comme Bien doux → grand pH.\n\n\u26A0\uFE0F Piege Brevet : pH 7 c\'est neutre. Pas pH 0 !' },
                    { question: 'C\'est quoi une solution ?', answer: '\uD83C\uDFAF Une solution = un SOLUTE dissous dans un SOLVANT.\n\nSOLVANT = le liquide qui dissout (souvent l\'eau).\nSOLUTE = ce qu\'on dissout (sucre, sel...).\nSOLUTION = le melange obtenu (eau sucree).\n\nEn gros : le sucre disparait dans l\'eau. Il est toujours la, mais invisible.\n\nMot difficile : "dissolution" = l\'action de dissoudre.\n\n\uD83D\uDCA1 Astuce dys : SolvANT = le grAND (il est en plus grande quantite).\n\n\u26A0\uFE0F Piege Brevet : dissoudre ≠ fondre. Fondre = chaleur. Dissoudre = dans un liquide.' },
                    { question: 'C\'est quoi la concentration ?', answer: '\uD83C\uDFAF La concentration = combien de solute dans le liquide.\n\nFormule : C = m / V.\nC = concentration en g/L.\nm = masse du solute en grammes.\nV = volume de la solution en litres.\n\nExemple : 10 g de sel dans 0,5 L d\'eau.\nC = 10 / 0,5 = 20 g/L.\n\nEn gros : plus tu mets de sucre, plus c\'est concentre.\n\n\uD83D\uDCA1 Astuce dys : C = m / V → "Cuisine = Masse / Volume".\n\n\u26A0\uFE0F Piege Brevet : V est en LITRES, pas en mL ! Convertis d\'abord.' },
                    { question: 'C\'est quoi la dilution ?', answer: '\uD83C\uDFAF Diluer = AJOUTER du solvant (eau) a une solution.\n\nLa quantite de solute ne change PAS.\nMais le volume augmente.\nDonc la concentration DIMINUE.\n\nFormule : C1 × V1 = C2 × V2.\n\nEn gros : c\'est ajouter de l\'eau dans un sirop trop fort.\n\nMot difficile : "dilution" ≠ "dissolution". Diluer = ajouter de l\'eau.\n\n\uD83D\uDCA1 Astuce dys : Diluer = Diminuer la concentration.\n\n\u26A0\uFE0F Piege Brevet : la MASSE de solute reste la meme ! Seul le volume change.' },
                    { question: 'C\'est quoi un indicateur colore ?', answer: '\uD83C\uDFAF Un produit qui CHANGE DE COULEUR selon le pH.\n\nExemple : le BBT (bleu de bromothymol).\nJaune = acide.\nVert = neutre.\nBleu = basique.\n\nExemple : jus de chou rouge.\nRose = acide. Vert = basique.\n\nEn gros : l\'indicateur est un detective de pH par la couleur.\n\n\uD83D\uDCA1 Astuce dys : BBT → "Jaune-Vert-Bleu" = "J\'ai Vu le Brevet".\n\n\u26A0\uFE0F Piege Brevet : au brevet on te donne le tableau des couleurs. Lis-le bien !' },
                    { question: 'C\'est quoi les reactifs et les produits ?', answer: '\uD83C\uDFAF REACTIFS = les substances AVANT la reaction (a gauche de la fleche).\nPRODUITS = les substances APRES la reaction (a droite de la fleche).\n\nExemple : Fer + Dioxygene → Oxyde de fer.\nReactifs : fer et dioxygene.\nProduit : oxyde de fer (la rouille).\n\nEn gros : les reactifs disparaissent. Les produits apparaissent.\n\n\uD83D\uDCA1 Astuce dys : Reactifs = a gauche (R comme depaRt). Produits = a droite.\n\n\u26A0\uFE0F Piege Brevet : les reactifs sont CONSOMMES. Ils disparaissent a la fin.' },
                    { question: 'C\'est quoi la difference entre dissolution et dilution ?', answer: '\uD83C\uDFAF DISSOLUTION = mettre un solute DANS un solvant.\nExemple : mettre du sel dans l\'eau → dissolution.\n\nDILUTION = ajouter du solvant A une solution deja faite.\nExemple : ajouter de l\'eau dans l\'eau salee → dilution.\n\nEn gros : dissolution = creer la solution. Dilution = la rendre moins concentree.\n\n\uD83D\uDCA1 Astuce dys : DisSOLUTION → tu mets le SOLUTE. DiLUTION → tu rajoutes du Liquide.\n\n\u26A0\uFE0F Piege Brevet : ne confonds JAMAIS les deux. C\'est une question classique !' },
                    { question: 'Comment savoir si une reaction est chimique ?', answer: '\uD83C\uDFAF Il y a une reaction chimique SI :\n\nDe nouvelles substances apparaissent.\nLes reactifs disparaissent (au moins en partie).\n\nSignes visibles :\n- Changement de couleur.\n- Degagement de gaz (bulles).\n- Changement de temperature.\n- Formation d\'un precipite (solide).\n\nEn gros : si quelque chose de NOUVEAU apparait, c\'est une reaction.\n\n\uD83D\uDCA1 Astuce dys : "BCGT" = Bulles, Couleur, chaleur (Gaz), Temperature.\n\n\u26A0\uFE0F Piege Brevet : dissoudre du sucre n\'est PAS une reaction chimique. C\'est physique.' },
                    { question: 'C\'est quoi un acide et une base ?', answer: '\uD83C\uDFAF ACIDE = solution avec pH < 7.\nExemples quotidiens : citron, vinaigre, coca.\nSensation : ca pique sur la langue.\n\nBASE = solution avec pH > 7.\nExemples quotidiens : savon, javel, bicarbonate.\nSensation : ca glisse entre les doigts.\n\nEn gros : acide pique, base glisse.\n\n\uD83D\uDCA1 Astuce dys : Acide = Agrume (citron). Base = Bicarbonate.\n\n\u26A0\uFE0F Piege Brevet : un acide fort (pH 1) est tres dangereux. Un acide faible (pH 5) est sans danger.' },
                    { question: 'Comment verifier la conservation de la masse ?', answer: '\uD83C\uDFAF Experience au brevet :\n\n1) Pese les reactifs AVANT la reaction.\n2) Fais la reaction dans un recipient FERME.\n3) Pese APRES la reaction.\n\nResultat : masse avant = masse apres.\n\n\uD83D\uDD2C Le recipient doit etre FERME.\nSinon le gaz s\'echappe et la masse semble diminuer.\n\nEn gros : la masse se conserve toujours. Si elle change, un gaz s\'est echappe.\n\n\uD83D\uDCA1 Astuce dys : recipient OUVERT = gaz parti = masse differente. FERME = masse conservee.\n\n\u26A0\uFE0F Piege Brevet : ils te montrent une balance qui change → c\'est a cause du GAZ qui s\'echappe.' }
                ],
                quiz: [
                    { question: 'Dans une transformation chimique, les reactifs sont :', options: ['Les substances obtenues', 'Les substances de depart', 'Les catalyseurs', 'Les solvants'], correctIndex: 1, explanation: '\uD83C\uDFAF Reactifs = avant la fleche = substances de depart. Produits = apres la fleche = substances obtenues.' },
                    { question: 'La loi de Lavoisier dit que :', options: ['La masse augmente', 'La masse diminue', 'La masse se conserve', 'La masse double'], correctIndex: 2, explanation: '\uD83C\uDFAF Rien ne se perd, rien ne se cree, tout se transforme. Masse des reactifs = masse des produits.' },
                    { question: 'Pour equilibrer une equation, on ajoute :', options: ['Des indices', 'Des coefficients devant les formules', 'De nouveaux atomes', 'Des fleches'], correctIndex: 1, explanation: '\uD83C\uDFAF On ajoute des COEFFICIENTS (grands chiffres) devant les formules. On ne change JAMAIS les indices (petits chiffres).' },
                    { question: 'Une solution de pH 3 est :', options: ['Basique', 'Neutre', 'Acide', 'Impossible'], correctIndex: 2, explanation: '\uD83C\uDFAF pH < 7 = acide. Le pH 3 est bien inferieur a 7. Exemple : le vinaigre a un pH d\'environ 3.' },
                    { question: 'La concentration C = m / V, avec V en :', options: ['Millilitres', 'Litres', 'Centilitres', 'Metres cubes'], correctIndex: 1, explanation: '\uD83C\uDFAF V doit etre en LITRES pour que C soit en g/L. \u26A0\uFE0F Pense a convertir : 500 mL = 0,5 L.' },
                    { question: 'Diluer une solution, c\'est :', options: ['Ajouter du solute', 'Ajouter du solvant', 'Chauffer', 'Filtrer'], correctIndex: 1, explanation: '\uD83C\uDFAF Diluer = ajouter de l\'eau (solvant). Le volume augmente, la concentration diminue. La masse de solute reste la meme.' },
                    { question: 'La combustion du methane produit :', options: ['Du fer et de l\'eau', 'Du CO2 et de l\'eau', 'De l\'azote et du CO2', 'Du carbone pur'], correctIndex: 1, explanation: '\uD83C\uDFAF CH4 + 2 O2 → CO2 + 2 H2O. Tout hydrocarbure + O2 donne CO2 + H2O.' },
                    { question: 'Le BBT est vert quand le pH est :', options: ['Acide', 'Neutre (pH 7)', 'Basique', 'Tres acide'], correctIndex: 1, explanation: '\uD83C\uDFAF BBT : jaune = acide, vert = neutre (pH 7), bleu = basique.' },
                    { question: 'Si la masse semble diminuer apres une reaction, c\'est parce que :', options: ['Des atomes ont disparu', 'Un gaz s\'est echappe', 'La balance est cassee', 'La masse ne se conserve pas'], correctIndex: 1, explanation: '\uD83C\uDFAF Un gaz produit s\'est echappe du recipient ouvert. Dans un recipient ferme, la masse resterait identique.' },
                    { question: 'Dissoudre du sucre dans l\'eau est :', options: ['Une reaction chimique', 'Une transformation physique', 'Une combustion', 'Une dilution'], correctIndex: 1, explanation: '\uD83C\uDFAF Dissolution = transformation physique. Le sucre ne change pas de nature, il se disperse. Pas de nouvelle substance creee.' }
                ]
            },

            // ================================================================
            // SECTION 3 : MOUVEMENT ET FORCES
            // ================================================================
            {
                id: 'mouvement-forces',
                title: 'Mouvement et forces',
                icon: '\uD83C\uDFC3',
                content: '<h3>\uD83C\uDFAF Vitesse</h3>'
                    + '<ul>'
                    + '<li>v = d / t (vitesse = distance / temps)</li>'
                    + '<li>Conversion : km/h ÷ 3,6 = m/s</li>'
                    + '</ul>'
                    + '<h3>\uD83C\uDFAF Types de mouvement</h3>'
                    + '<ul>'
                    + '<li>Rectiligne uniforme = ligne droite + vitesse constante</li>'
                    + '<li>Accelere = la vitesse augmente</li>'
                    + '<li>Decelere = la vitesse diminue</li>'
                    + '</ul>'
                    + '<h3>\uD83C\uDFAF Forces</h3>'
                    + '<ul>'
                    + '<li>Poids P = m × g (g = 9,8 N/kg sur Terre)</li>'
                    + '<li>Masse (kg) ≠ Poids (N)</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'C\'est quoi la vitesse ?', answer: '\uD83C\uDFAF La vitesse = distance parcourue divisee par le temps.\n\nFormule : v = d / t.\nv en m/s (ou km/h).\nd en metres (ou km).\nt en secondes (ou heures).\n\nExemple : 100 m en 10 s → v = 100/10 = 10 m/s.\n\nEn gros : la vitesse dit a quelle allure tu avances.\n\nMot difficile : "vitesse moyenne" = sur tout le trajet (pas la vitesse a chaque instant).\n\n\uD83D\uDCA1 Astuce dys : v = d / t → "Voiture = Distance / Temps".\n\n\u26A0\uFE0F Piege Brevet : verifie que d et t sont dans les BONNES unites !' },
                    { question: 'Comment convertir km/h en m/s ?', answer: '\uD83C\uDFAF km/h → m/s : on DIVISE par 3,6.\nm/s → km/h : on MULTIPLIE par 3,6.\n\nExemple : 90 km/h ÷ 3,6 = 25 m/s.\nExemple : 10 m/s × 3,6 = 36 km/h.\n\nEn gros : le chiffre en m/s est toujours PLUS PETIT.\n\nMot difficile : "3,6" vient de 1 km = 1000 m et 1 h = 3600 s.\n\n\uD83D\uDCA1 Astuce dys : "km/h vers m/s = DIVISER. Plus PETIT." Retiens : D-P.\n\n\u26A0\uFE0F Piege Brevet : au brevet on te demande SOUVENT de convertir. Entraine-toi !' },
                    { question: 'C\'est quoi un mouvement rectiligne uniforme ?', answer: '\uD83C\uDFAF RECTILIGNE = en LIGNE DROITE.\nUNIFORME = vitesse CONSTANTE (ne change pas).\n\nExemple : une voiture a 130 km/h sur autoroute droite.\n\nSur un graphique vitesse/temps : ligne HORIZONTALE.\nSur un graphique distance/temps : ligne DROITE qui monte.\n\nEn gros : tout droit, sans accelerer ni freiner.\n\n\uD83D\uDCA1 Astuce dys : Rectiligne = Regle (droit). Uniforme = Unique vitesse.\n\n\u26A0\uFE0F Piege Brevet : si la vitesse change, ce n\'est PLUS uniforme, meme si c\'est droit.' },
                    { question: 'C\'est quoi un mouvement accelere ? Et decelere ?', answer: '\uD83C\uDFAF ACCELERE = la vitesse AUGMENTE.\nExemple : voiture qui demarre au feu vert.\nSur le graphique vitesse/temps : la courbe MONTE.\n\nDECELERE = la vitesse DIMINUE.\nExemple : voiture qui freine au feu rouge.\nSur le graphique vitesse/temps : la courbe DESCEND.\n\nEn gros : accelere = de + en + vite. Decelere = ralentit.\n\n\uD83D\uDCA1 Astuce dys : Accelere = en Avant (augmente). Decelere = en Descente (diminue).\n\n\u26A0\uFE0F Piege Brevet : regarde le GRAPHIQUE. Courbe qui monte = accelere.' },
                    { question: 'C\'est quoi une force ?', answer: '\uD83C\uDFAF Une force peut faire BOUGER, STOPPER ou DEFORMER un objet.\n\nUne force a 4 caracteristiques :\n1) Point d\'application (ou elle agit).\n2) Direction (horizontale, verticale...).\n3) Sens (gauche, droite, haut, bas).\n4) Intensite en NEWTONS (N).\n\nEn gros : pousser, tirer, attirer = des forces.\n\nMot difficile : "newton" (N) = unite de la force.\n\n\uD83D\uDCA1 Astuce dys : une force = une FLECHE. La fleche dit tout sur la force.\n\n\u26A0\uFE0F Piege Brevet : n\'oublie aucune des 4 caracteristiques dans ta reponse.' },
                    { question: 'C\'est quoi le poids ?', answer: '\uD83C\uDFAF Le poids = la force d\'attraction de la Terre.\n\nFormule : P = m × g.\nP = poids en NEWTONS (N).\nm = masse en KG.\ng = 9,8 N/kg sur Terre (souvent arrondi a 10).\n\nExemple : 50 kg → P = 50 × 10 = 500 N.\n\nEn gros : le poids te tire vers le bas.\n\nMot difficile : "pesanteur" = g = l\'intensite de l\'attraction.\n\n\uD83D\uDCA1 Astuce dys : P = m × g → "Poids = Masse × Gravite".\n\n\u26A0\uFE0F Piege Brevet : le poids est en NEWTONS, pas en kg ! kg = masse.' },
                    { question: 'Quelle est la difference entre masse et poids ?', answer: '\uD83C\uDFAF MASSE = quantite de matiere.\nUnite : kg.\nNe change JAMAIS, meme sur la Lune.\n\nPOIDS = force de gravite.\nUnite : Newton (N).\nChange selon la planete !\n\nExemple : 80 kg sur Terre → P = 80 × 10 = 800 N.\n80 kg sur la Lune → P = 80 × 1,6 = 128 N.\n\nEn gros : ta masse reste. Ton poids change.\n\n\uD83D\uDCA1 Astuce dys : Masse = ce que tu ES. Poids = comment on t\'ATTIRE.\n\n\u26A0\uFE0F Piege Brevet : "je pese 50 kg" → c\'est la MASSE. Le poids serait 500 N.' },
                    { question: 'C\'est quoi la gravitation ?', answer: '\uD83C\uDFAF Tous les objets avec une masse S\'ATTIRENT.\n\nPlus c\'est lourd → plus l\'attraction est FORTE.\nPlus c\'est loin → plus l\'attraction est FAIBLE.\n\nLa Terre attire la Lune → la Lune tourne autour.\nLe Soleil attire la Terre → la Terre tourne autour.\n\nEn gros : la gravite, c\'est l\'attraction entre les masses.\n\nMot difficile : "gravitation universelle" = ca marche PARTOUT dans l\'Univers.\n\n\uD83D\uDCA1 Astuce dys : imagine un aimant geant dans chaque objet lourd.\n\n\u26A0\uFE0F Piege Brevet : gravite ≠ magnetisme. C\'est la MASSE qui attire, pas les charges.' },
                    { question: 'Comment representer une force par une fleche ?', answer: '\uD83C\uDFAF La fleche donne 4 infos :\n\n1) ORIGINE = ou la force agit.\n2) DIRECTION = horizontale, verticale, oblique.\n3) SENS = ou pointe la fleche.\n4) LONGUEUR = plus c\'est long, plus c\'est fort.\n\nExemple : le poids → fleche vers le BAS depuis le centre de l\'objet.\n\nEn gros : chaque fleche = une force. Plus c\'est long, plus c\'est puissant.\n\n\uD83D\uDCA1 Astuce dys : une fleche de force = un vecteur. Pense "GPS" : ou, direction, sens, intensite.\n\n\u26A0\uFE0F Piege Brevet : la longueur doit etre PROPORTIONNELLE a l\'intensite. Utilise l\'echelle donnee.' },
                    { question: 'Comment calculer la vitesse avec v = d / t ?', answer: '\uD83C\uDFAF Formule de base : v = d / t.\n\nPour trouver d : d = v × t.\nPour trouver t : t = d / v.\n\n\uD83D\uDD2C Exemple concret :\nUn train parcourt 300 km en 2 h.\nv = 300 / 2 = 150 km/h.\n\nEn gros : le triangle magique → v en haut, d et t en bas.\n\n\uD83D\uDCA1 Astuce dys : dessine un triangle. d en haut. v et t en bas. Couvre ce que tu cherches.\n\n\u26A0\uFE0F Piege Brevet : verifie les UNITES. Si d en km et t en h → v en km/h.' },
                    { question: 'Quand est-ce que les forces se compensent ?', answer: '\uD83C\uDFAF Les forces se compensent quand leur somme = ZERO.\n\nDans ce cas, l\'objet est :\n- Soit IMMOBILE.\n- Soit en mouvement rectiligne uniforme.\n\nExemple : un livre sur une table.\nPoids (vers le bas) = Reaction de la table (vers le haut).\nElles se compensent → le livre ne bouge pas.\n\nEn gros : si tout s\'annule, rien ne change.\n\n\uD83D\uDCA1 Astuce dys : forces compensees = bras de fer a egalite.\n\n\u26A0\uFE0F Piege Brevet : forces compensees ≠ pas de force ! Il y a des forces, mais elles s\'annulent.' },
                    { question: 'C\'est quoi le principe d\'inertie (version brevet) ?', answer: '\uD83C\uDFAF Si les forces se compensent → l\'objet garde son mouvement.\n\nImmobile → il RESTE immobile.\nEn mouvement rectiligne uniforme → il CONTINUE.\n\nSi les forces NE se compensent PAS → le mouvement change.\nL\'objet accelere, decelere ou change de direction.\n\nEn gros : sans force, rien ne change.\n\n\uD83D\uDCA1 Astuce dys : pense a une balle sur une table lisse. Elle glisse droit sans s\'arreter.\n\n\u26A0\uFE0F Piege Brevet : "les forces se compensent" ne veut PAS dire "pas de force".' },
                    { question: 'C\'est quoi l\'energie cinetique ?', answer: '\uD83C\uDFAF L\'energie cinetique = l\'energie du MOUVEMENT.\n\nPlus un objet est LOURD → plus d\'energie cinetique.\nPlus un objet est RAPIDE → BEAUCOUP plus d\'energie cinetique.\n\n\u26A0\uFE0F Si la vitesse DOUBLE, l\'energie est multipliee par 4 (pas 2 !).\n\nEn gros : la vitesse compte beaucoup plus que la masse.\n\nMot difficile : "cinetique" vient du grec "kinesis" = mouvement.\n\n\uD83D\uDCA1 Astuce dys : 50 km/h → 1 danger. 100 km/h → 4 dangers. Vitesse × 2 = danger × 4.\n\n\u26A0\uFE0F Piege Brevet : la formule n\'est pas demandee, mais retiens que v² = effet quadruple.' },
                    { question: 'C\'est quoi la distance de freinage ?', answer: '\uD83C\uDFAF La distance de freinage = distance parcourue PENDANT le freinage.\n\nElle depend de :\n- La VITESSE (si × 2, distance × 4).\n- L\'etat de la ROUTE (mouillée = plus long).\n- Les PNEUS et les freins.\n\nAvant le freinage, il y a le temps de REACTION.\nDistance d\'arret = distance de reaction + distance de freinage.\n\nEn gros : plus tu vas vite, plus tu mets longtemps a t\'arreter.\n\n\uD83D\uDCA1 Astuce dys : ARRET = REACTION + FREINAGE. Toujours les deux.\n\n\u26A0\uFE0F Piege Brevet : la distance de freinage augmente BEAUCOUP plus vite que la vitesse.' }
                ],
                quiz: [
                    { question: 'La formule de la vitesse est :', options: ['v = d × t', 'v = d / t', 'v = t / d', 'v = d + t'], correctIndex: 1, explanation: '\uD83C\uDFAF v = d / t. Distance divisee par temps. Si d en metres et t en secondes → v en m/s.' },
                    { question: '90 km/h en m/s donne :', options: ['90 m/s', '25 m/s', '324 m/s', '9 m/s'], correctIndex: 1, explanation: '\uD83C\uDFAF 90 ÷ 3,6 = 25 m/s. Pour km/h → m/s, on divise TOUJOURS par 3,6.' },
                    { question: 'Le poids d\'un objet de 5 kg (g = 10 N/kg) vaut :', options: ['5 N', '50 N', '0,5 N', '500 N'], correctIndex: 1, explanation: '\uD83C\uDFAF P = m × g = 5 × 10 = 50 N. Le poids est en newtons, PAS en kg.' },
                    { question: 'Sur la Lune, la masse d\'un objet :', options: ['Diminue', 'Augmente', 'Reste la meme', 'Devient nulle'], correctIndex: 2, explanation: '\uD83C\uDFAF La masse ne change JAMAIS. C\'est le POIDS qui change car g est different sur la Lune.' },
                    { question: 'Un mouvement rectiligne uniforme, c\'est :', options: ['Ligne droite + vitesse qui augmente', 'Cercle + vitesse constante', 'Ligne droite + vitesse constante', 'Ligne droite + vitesse qui diminue'], correctIndex: 2, explanation: '\uD83C\uDFAF Rectiligne = ligne droite. Uniforme = vitesse constante. Les deux en meme temps.' },
                    { question: 'Si la vitesse double, l\'energie cinetique :', options: ['Double', 'Triple', 'Est multipliee par 4', 'Reste la meme'], correctIndex: 2, explanation: '\uD83C\uDFAF L\'energie cinetique depend du CARRE de la vitesse. Vitesse × 2 → energie × 2² = × 4.' },
                    { question: 'Le poids est une fleche dirigee :', options: ['Vers le haut', 'Vers le bas (centre de la Terre)', 'A l\'horizontale', 'Dans le sens du mouvement'], correctIndex: 1, explanation: '\uD83C\uDFAF Le poids tire TOUJOURS vers le bas (vers le centre de la Terre). C\'est la gravite.' },
                    { question: 'Un objet immobile sur une table : les forces sont :', options: ['Il n\'y a aucune force', 'Il y a uniquement le poids', 'Les forces se compensent', 'La force de mouvement est nulle'], correctIndex: 2, explanation: '\uD83C\uDFAF Poids (vers le bas) + reaction de la table (vers le haut) = se compensent. L\'objet ne bouge pas.' },
                    { question: 'La gravitation augmente quand :', options: ['La distance augmente', 'La masse diminue', 'La masse augmente', 'Les objets sont en plastique'], correctIndex: 2, explanation: '\uD83C\uDFAF Plus les masses sont grandes, plus l\'attraction est forte. Plus la distance est petite, plus c\'est fort aussi.' },
                    { question: 'Pour trouver d avec la formule de la vitesse :', options: ['d = v / t', 'd = v × t', 'd = t / v', 'd = v + t'], correctIndex: 1, explanation: '\uD83C\uDFAF v = d / t donc d = v × t. Exemple : 25 m/s pendant 10 s → d = 25 × 10 = 250 m.' }
                ]
            },

            // ================================================================
            // SECTION 4 : ENERGIE ET ELECTRICITE
            // ================================================================
            {
                id: 'energie-electricite',
                title: 'Energie et electricite',
                icon: '\u26A1',
                content: '<h3>\uD83C\uDFAF Formes d\'energie</h3>'
                    + '<ul>'
                    + '<li>7 formes : cinetique, potentielle, thermique, chimique, electrique, nucleaire, lumineuse</li>'
                    + '</ul>'
                    + '<h3>\uD83C\uDFAF Formules electriques</h3>'
                    + '<ul>'
                    + '<li>Loi d\'Ohm : U = R × I</li>'
                    + '<li>Puissance : P = U × I</li>'
                    + '<li>Energie : E = P × t</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'Quelles sont les 7 formes d\'energie ?', answer: '\uD83C\uDFAF Les 7 formes d\'energie :\n\n1) CINETIQUE = mouvement (voiture qui roule).\n2) POTENTIELLE = hauteur (livre sur une etagere).\n3) THERMIQUE = chaleur (radiateur).\n4) CHIMIQUE = stockee dans les molecules (nourriture, essence).\n5) ELECTRIQUE = courant (dans les fils).\n6) NUCLEAIRE = dans le noyau des atomes (centrales).\n7) LUMINEUSE = lumiere (soleil, lampe).\n\nEn gros : l\'energie existe sous 7 formes et peut se transformer.\n\n\uD83D\uDCA1 Astuce dys : "C\'est Pas Tres Chiant En Naviguant Librement" (C-P-T-Ch-E-N-L).\n\n\u26A0\uFE0F Piege Brevet : l\'energie ne se cree pas. Elle se TRANSFORME d\'une forme a l\'autre.' },
                    { question: 'C\'est quoi une chaine energetique ?', answer: '\uD83C\uDFAF Un schema qui montre les transformations d\'energie.\n\nOn dessine :\n- Des RECTANGLES pour les reservoirs et convertisseurs.\n- Des FLECHES pour les transferts d\'energie.\n\nExemple : lampe electrique.\nEnergie ELECTRIQUE → Lampe → Lumiere (utile) + Chaleur (perdue).\n\nEn gros : d\'ou vient l\'energie, quoi d\'utile, quoi de perdu.\n\n\uD83D\uDCA1 Astuce dys : la fleche UTILE va en haut. La fleche PERDUE va en bas.\n\n\u26A0\uFE0F Piege Brevet : n\'oublie JAMAIS les pertes thermiques (chaleur). Il y en a toujours.' },
                    { question: 'C\'est quoi la loi d\'Ohm ?', answer: '\uD83C\uDFAF Formule : U = R × I.\n\nU = tension en VOLTS (V).\nR = resistance en OHMS (Ω).\nI = intensite en AMPERES (A).\n\nExemple : R = 100 Ω, I = 0,2 A.\nU = 100 × 0,2 = 20 V.\n\nEn gros : plus la resistance est grande, plus il faut de tension.\n\nMot difficile : "resistance" = un composant qui freine le courant.\n\n\uD83D\uDCA1 Astuce dys : U = R × I → "URI le magicien".\n\n\u26A0\uFE0F Piege Brevet : attention aux unites. Toujours V, Ω et A.' },
                    { question: 'C\'est quoi la puissance electrique ?', answer: '\uD83C\uDFAF Formule : P = U × I.\n\nP = puissance en WATTS (W).\nU = tension en VOLTS (V).\nI = intensite en AMPERES (A).\n\nExemple : prise 230 V, courant 2 A.\nP = 230 × 2 = 460 W.\n\nEn gros : la puissance = la vitesse de consommation d\'energie.\n\n\uD83D\uDCA1 Astuce dys : P = U × I → "PUI" (comme "puis"). Puissant !\n\n\u26A0\uFE0F Piege Brevet : la puissance est ecrite sur les appareils. 2000 W = radiateur. 60 W = lampe.' },
                    { question: 'C\'est quoi l\'energie electrique ?', answer: '\uD83C\uDFAF Formule : E = P × t.\n\nE = energie en JOULES (J).\nP = puissance en WATTS (W).\nt = temps en SECONDES (s).\n\nPour les factures : E en kWh.\n1 kWh = 1000 W pendant 1 heure.\n\nExemple : lampe 100 W pendant 2 h = 0,2 kWh.\n\nEn gros : energie = puissance × combien de temps.\n\n\uD83D\uDCA1 Astuce dys : E = P × t → "EPT" → "Electricite = Puissance × Temps".\n\n\u26A0\uFE0F Piege Brevet : en Joules → t en secondes. En kWh → P en kW et t en heures.' },
                    { question: 'C\'est quoi le rendement energetique ?', answer: '\uD83C\uDFAF Rendement = energie utile ÷ energie totale.\n\nToujours entre 0 et 1 (ou 0% et 100%).\nAucun appareil n\'atteint 100%.\nIl y a TOUJOURS des pertes (souvent en chaleur).\n\nExemple : ampoule classique = 5% de rendement.\nLED = 40% de rendement (8 fois mieux !).\n\nEn gros : le rendement dit combien d\'energie est vraiment utile.\n\n\uD83D\uDCA1 Astuce dys : rendement = le score de l\'appareil en pourcentage.\n\n\u26A0\uFE0F Piege Brevet : rendement = utile / totale. PAS totale / utile !' },
                    { question: 'C\'est quoi un disjoncteur ?', answer: '\uD83C\uDFAF Le disjoncteur COUPE le courant automatiquement.\n\nIl se declenche si l\'intensite est trop forte.\nCa protege les fils et evite les incendies.\n\nApres declenchement, on peut le REARMER.\n\nEn gros : c\'est le gardien de ton installation electrique.\n\nMot difficile : "surintensite" = trop de courant dans le fil.\n\n\uD83D\uDCA1 Astuce dys : Disjoncteur = Disjoint (coupe) le courant.\n\n\u26A0\uFE0F Piege Brevet : le disjoncteur est REUTILISABLE. Le fusible est a USAGE UNIQUE.' },
                    { question: 'C\'est quoi un fusible ?', answer: '\uD83C\uDFAF Un fusible = un fil metallique qui FOND si trop de courant.\n\nQuand il fond, le circuit est coupe.\nCa protege l\'installation.\nMais le fusible est DETRUIT. Il faut le remplacer.\n\nEn gros : le fusible se sacrifie pour te proteger.\n\nMot difficile : "fusible" vient de "fusionner" (fondre).\n\n\uD83D\uDCA1 Astuce dys : Fusible = Fond et fUsible (un seul usage).\n\n\u26A0\uFE0F Piege Brevet : fusible = usage unique. Disjoncteur = reutilisable. Ne confonds pas !' },
                    { question: 'C\'est quoi la securite electrique ?', answer: '\uD83C\uDFAF 3 dispositifs de securite :\n\n1) DISJONCTEUR = coupe si trop de courant.\n2) FUSIBLE = fond si trop de courant (usage unique).\n3) FIL DE TERRE (vert et jaune) = evacue le courant dangereux vers le sol.\n\nEn gros : ces 3 trucs t\'empechent de t\'electrocuter.\n\nMot difficile : "mise a la terre" = relier l\'appareil au sol.\n\n\uD83D\uDCA1 Astuce dys : "DFF" → Disjoncteur, Fusible, Fil de terre.\n\n\u26A0\uFE0F Piege Brevet : seul le fil de terre protege DIRECTEMENT les personnes.' },
                    { question: 'C\'est quoi la conservation de l\'energie ?', answer: '\uD83C\uDFAF L\'energie ne se CREE pas.\nL\'energie ne se DETRUIT pas.\nElle se TRANSFORME d\'une forme a une autre.\n\nExemple : une balle qui tombe.\nEn haut = energie potentielle.\nEn bas = energie cinetique.\nLe total ne change pas !\n\nEn gros : l\'energie change de forme, mais le total reste.\n\n\uD83D\uDCA1 Astuce dys : c\'est comme l\'argent. Tu le changes de place, mais tu en as toujours autant.\n\n\u26A0\uFE0F Piege Brevet : les "pertes" ne sont pas de l\'energie qui disparait. C\'est de l\'energie thermique inutile.' },
                    { question: 'C\'est quoi l\'energie cinetique ?', answer: '\uD83C\uDFAF Energie cinetique = energie du MOUVEMENT.\n\nPlus c\'est LOURD → plus d\'energie cinetique.\nPlus c\'est RAPIDE → BEAUCOUP plus d\'energie cinetique.\n\nVitesse × 2 → energie cinetique × 4.\nVitesse × 3 → energie cinetique × 9.\n\nEn gros : la vitesse est le facteur le plus important.\n\n\uD83D\uDCA1 Astuce dys : Cinetique = Cinema = mouvement.\n\n\u26A0\uFE0F Piege Brevet : c\'est pour ca que les accidents a haute vitesse sont si graves.' },
                    { question: 'C\'est quoi l\'energie potentielle ?', answer: '\uD83C\uDFAF Energie potentielle = energie stockee en HAUTEUR.\n\nPlus un objet est HAUT → plus il a d\'energie potentielle.\nPlus il est LOURD → plus il en a aussi.\n\nExemple : un livre sur une etagere haute.\nS\'il tombe, son energie potentielle se transforme en cinetique.\n\nEn gros : la hauteur, c\'est de l\'energie en reserve.\n\n\uD83D\uDCA1 Astuce dys : Potentielle = Potentiel = "ca POURRAIT tomber".\n\n\u26A0\uFE0F Piege Brevet : au sol, l\'energie potentielle est NULLE (hauteur = 0).' },
                    { question: 'Comment lire une facture d\'electricite ?', answer: '\uD83C\uDFAF La facture utilise le kWh (kilowattheure).\n\n1 kWh = 1000 W pendant 1 heure.\n\nExemple : four de 2000 W = 2 kW.\nUtilise 3 heures → 2 × 3 = 6 kWh.\nPrix moyen : 0,20 €/kWh.\nCout : 6 × 0,20 = 1,20 €.\n\nEn gros : kWh = puissance (en kW) × temps (en heures).\n\n\uD83D\uDCA1 Astuce dys : kWh = "kiloWatt-Heure". Pas "kilo" tout seul !\n\n\u26A0\uFE0F Piege Brevet : kWh = unite d\'ENERGIE. kW = unite de PUISSANCE. Ne confonds pas.' },
                    { question: 'Comment utiliser les formules electriques au brevet ?', answer: '\uD83C\uDFAF Les 3 formules a connaitre :\n\n1) U = R × I (loi d\'Ohm).\n2) P = U × I (puissance).\n3) E = P × t (energie).\n\n\uD83D\uDCDD Methode au brevet :\n1) Ecris la formule.\n2) Remplace par les valeurs.\n3) Calcule.\n4) Ecris l\'unite.\n\nEn gros : formule → valeurs → calcul → unite.\n\n\uD83D\uDCA1 Astuce dys : "URI-PUI-EPT" → les 3 formules d\'un coup.\n\n\u26A0\uFE0F Piege Brevet : TOUJOURS ecrire l\'unite dans la reponse. Sinon tu perds des points !' }
                ],
                quiz: [
                    { question: 'La loi d\'Ohm s\'ecrit :', options: ['U = R + I', 'U = R × I', 'U = R / I', 'U = I / R'], correctIndex: 1, explanation: '\uD83C\uDFAF U = R × I. Tension (V) = Resistance (Ω) × Intensite (A).' },
                    { question: 'La puissance electrique se calcule avec :', options: ['P = U + I', 'P = U / I', 'P = U × I', 'P = U - I'], correctIndex: 2, explanation: '\uD83C\uDFAF P = U × I. Puissance (W) = Tension (V) × Intensite (A).' },
                    { question: 'Un appareil de 2000 W pendant 3 heures consomme :', options: ['6000 J', '6 kWh', '6000 kWh', '600 W'], correctIndex: 1, explanation: '\uD83C\uDFAF E = P × t = 2 kW × 3 h = 6 kWh. Convertis 2000 W en 2 kW pour avoir des kWh.' },
                    { question: 'Le disjoncteur sert a :', options: ['Augmenter la tension', 'Couper le courant si surintensite', 'Produire de l\'electricite', 'Mesurer la puissance'], correctIndex: 1, explanation: '\uD83C\uDFAF Le disjoncteur coupe automatiquement si trop de courant. Il protege l\'installation.' },
                    { question: 'Un rendement de 80% signifie :', options: ['80% d\'energie perdue', '80% d\'energie utile, 20% perdue', '80 watts produits', '80 kWh consommes'], correctIndex: 1, explanation: '\uD83C\uDFAF 80% utile + 20% perdu (souvent en chaleur) = 100% de l\'energie consommee.' },
                    { question: 'L\'energie chimique est stockee dans :', options: ['La hauteur', 'Le mouvement', 'Les liaisons entre atomes', 'Le noyau des atomes'], correctIndex: 2, explanation: '\uD83C\uDFAF Energie chimique = dans les liaisons chimiques. Quand on brule ou digere, les liaisons liberent de l\'energie.' },
                    { question: 'Le fil de terre (vert et jaune) sert a :', options: ['Alimenter l\'appareil', 'Evacuer le courant de fuite vers le sol', 'Augmenter la puissance', 'Mesurer la tension'], correctIndex: 1, explanation: '\uD83C\uDFAF Le fil de terre protege les personnes. Le courant dangereux part dans le sol au lieu de passer par toi.' },
                    { question: 'L\'unite d\'energie sur une facture est :', options: ['Le watt (W)', 'Le kilowattheure (kWh)', 'Le volt (V)', 'L\'ampere (A)'], correctIndex: 1, explanation: '\uD83C\uDFAF kWh = puissance (kW) × temps (h). C\'est l\'unite d\'energie des factures d\'electricite.' },
                    { question: 'Les pertes dans une chaine energetique sont souvent :', options: ['De l\'energie nucleaire', 'De l\'energie chimique', 'De l\'energie thermique (chaleur)', 'De l\'energie potentielle'], correctIndex: 2, explanation: '\uD83C\uDFAF La plupart des pertes = chaleur. Frottements, effet Joule dans les fils = tout chauffe inutilement.' },
                    { question: 'Le rendement se calcule avec :', options: ['Energie totale / energie utile', 'Energie utile / energie totale', 'Puissance / temps', 'Energie × temps'], correctIndex: 1, explanation: '\uD83C\uDFAF Rendement = energie utile / energie totale. Le resultat est entre 0 et 1 (ou 0% et 100%).' }
                ]
            },

            // ================================================================
            // SECTION 5 : SIGNAUX (LUMIERE ET SON)
            // ================================================================
            {
                id: 'signaux',
                title: 'Signaux (lumiere et son)',
                icon: '\uD83D\uDCE1',
                content: '<h3>\uD83C\uDFAF Lumiere</h3>'
                    + '<ul>'
                    + '<li>Se propage en ligne droite</li>'
                    + '<li>Vitesse : 300 000 km/s</li>'
                    + '<li>Spectre visible : VIBUJOR (violet → rouge)</li>'
                    + '</ul>'
                    + '<h3>\uD83C\uDFAF Son</h3>'
                    + '<ul>'
                    + '<li>Vitesse : 340 m/s dans l\'air</li>'
                    + '<li>Ne se propage PAS dans le vide</li>'
                    + '<li>Danger auditif a partir de 85 dB</li>'
                    + '</ul>'
                    + '<h3>\uD83C\uDFAF Numerique</h3>'
                    + '<ul>'
                    + '<li>1 bit = 0 ou 1</li>'
                    + '<li>1 octet = 8 bits</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'Comment se propage la lumiere ?', answer: '\uD83C\uDFAF La lumiere se deplace en LIGNE DROITE.\n\nOn dit que la propagation est RECTILIGNE.\nC\'est pour ca que les OMBRES existent.\nLa lumiere ne contourne pas les objets opaques.\n\nEn gros : un rayon de lumiere ne tourne pas, il va tout droit.\n\nMot difficile : "opaque" = qui ne laisse pas passer la lumiere.\n\n\uD83D\uDCA1 Astuce dys : Rectiligne = comme une Regle (toute droite).\n\n\u26A0\uFE0F Piege Brevet : c\'est dans le VIDE ou un milieu homogene. Un miroir REFLECHIT la lumiere.' },
                    { question: 'C\'est quoi la vitesse de la lumiere ?', answer: '\uD83C\uDFAF La lumiere va a 300 000 km/s.\n\nC\'est la vitesse MAXIMALE dans l\'Univers.\nRien ne peut aller plus vite !\n\nElle fait 7 fois le tour de la Terre en 1 seconde.\nLa lumiere du Soleil met 8 minutes a nous atteindre.\n\nEn gros : la lumiere est incroyablement rapide.\n\nMot difficile : "annee-lumiere" = distance, PAS un temps !\n\n\uD83D\uDCA1 Astuce dys : 300 000 km/s → "3 suivis de 5 zeros".\n\n\u26A0\uFE0F Piege Brevet : annee-lumiere = unite de DISTANCE (pas de temps).' },
                    { question: 'C\'est quoi le spectre visible ?', answer: '\uD83C\uDFAF Les couleurs que nos yeux peuvent voir.\n\nDu violet au rouge = les couleurs de l\'arc-en-ciel.\nOrdre : Violet, Indigo, Bleu, Vert, Jaune, Orange, Rouge.\n\nLa lumiere blanche = TOUTES les couleurs melangees.\nUn prisme separe les couleurs.\n\nEn gros : la lumiere blanche cache plein de couleurs.\n\n\uD83D\uDCA1 Astuce dys : VIBUJOR = les 7 couleurs dans l\'ordre (Violet-Indigo-Bleu-Vert-Jaune-Orange-Rouge). Retiens : "VIBrons en JORdanie".\n\n\u26A0\uFE0F Piege Brevet : UV et infrarouge sont INVISIBLES. Avant le violet et apres le rouge.' },
                    { question: 'C\'est quoi le son ?', answer: '\uD83C\uDFAF Le son = une VIBRATION qui se propage.\n\nIl a BESOIN de matiere (air, eau, solide).\nDans le VIDE, il n\'y a PAS de son.\n\nQuand tu parles, tes cordes vocales vibrent.\nL\'air transmet la vibration jusqu\'a l\'oreille.\n\nEn gros : pas de matiere = pas de son.\n\nMot difficile : "milieu materiel" = un endroit avec de la matiere (air, eau, metal).\n\n\uD83D\uDCA1 Astuce dys : dans l\'espace = SILENCE. Pas d\'air = pas de son.\n\n\u26A0\uFE0F Piege Brevet : les explosions dans l\'espace sont SILENCIEUSES en vrai.' },
                    { question: 'C\'est quoi la vitesse du son ?', answer: '\uD83C\uDFAF Le son va a environ 340 m/s dans l\'air.\n\nC\'est BEAUCOUP plus lent que la lumiere (300 000 km/s).\n\nDans l\'eau : 1 500 m/s.\nDans l\'acier : 5 000 m/s.\nDans le vide : 0 m/s (pas de son).\n\nEn gros : eclair vu AVANT le tonnerre entendu.\n\n\uD83D\uDCA1 Astuce dys : 3 secondes entre eclair et tonnerre = orage a 1 km.\n\n\u26A0\uFE0F Piege Brevet : le son va plus vite dans les SOLIDES que dans l\'air.' },
                    { question: 'C\'est quoi la frequence du son ?', answer: '\uD83C\uDFAF Frequence = nombre de vibrations par seconde.\n\nUnite : HERTZ (Hz).\n\nGRAVE = basse frequence (grosse caisse, voix d\'homme).\nAIGU = haute frequence (sifflet, voix de bebe).\n\nOreille humaine : entre 20 Hz et 20 000 Hz.\n\nEn gros : plus ca vibre vite, plus c\'est aigu.\n\nMot difficile : "infrason" (< 20 Hz) et "ultrason" (> 20 000 Hz) = inaudibles.\n\n\uD83D\uDCA1 Astuce dys : Grave = Gros son. Aigu = Aiguille (fin et percant).\n\n\u26A0\uFE0F Piege Brevet : la frequence ne change PAS le volume. C\'est le nombre de dB qui change le volume.' },
                    { question: 'Pourquoi le bruit est dangereux ?', answer: '\uD83C\uDFAF Le volume se mesure en DECIBELS (dB).\n\nConversation = 60 dB (ok).\nConcert = 100-110 dB (DANGER !).\nAvion = 130 dB (DOULEUR).\n\nA partir de 85 dB = risque pour l\'audition.\nLes degats sont IRREVERSIBLES (ca ne se repare pas).\n\nEn gros : le bruit tue les cellules de l\'oreille. Definitif.\n\n\uD83D\uDCA1 Astuce dys : 85 dB = le seuil. Retiens "85 = Danger".\n\n\u26A0\uFE0F Piege Brevet : ils adorent demander le seuil de danger (85 dB) et de douleur (120 dB).' },
                    { question: 'C\'est quoi un signal analogique ?', answer: '\uD83C\uDFAF Un signal ANALOGIQUE varie de facon CONTINUE.\n\nC\'est une courbe LISSE, comme une vague.\nExemples : vieux telephone, vinyle, voix naturelle.\n\nIl prend TOUTES les valeurs possibles entre 2 bornes.\n\nEn gros : c\'est une onde douce sans marches.\n\nMot difficile : "continu" = sans interruption, sans saut.\n\n\uD83D\uDCA1 Astuce dys : Analogique = une vAgue lisse.\n\n\u26A0\uFE0F Piege Brevet : analogique ≠ numerique. Analogique = courbe lisse. Numerique = escalier.' },
                    { question: 'C\'est quoi un signal numerique ?', answer: '\uD83C\uDFAF Un signal NUMERIQUE est code en 0 et 1.\n\nC\'est comme des MARCHES D\'ESCALIER.\nExemples : CD, MP3, photos, internet, telephone actuel.\n\nAvantages :\n- Facile a copier sans perte.\n- Facile a stocker et transmettre.\n\nEn gros : tout ce que fait ton telephone = du numerique.\n\n\uD83D\uDCA1 Astuce dys : Numerique = Nombres (0 et 1).\n\n\u26A0\uFE0F Piege Brevet : le numerique n\'est PAS parfait. Il approche le signal analogique, il ne le copie pas exactement.' },
                    { question: 'C\'est quoi un bit et un octet ?', answer: '\uD83C\uDFAF BIT = la plus petite unite d\'info. C\'est 0 OU 1.\n\nOCTET = 8 bits (un groupe de 8 zeros et uns).\nExemple : 01001010 = 1 octet.\n\nko (kilo-octet) = 1 000 octets.\nMo (mega-octet) = 1 000 000 octets.\nGo (giga-octet) = 1 milliard d\'octets.\n\nEn gros : tout est code en 0 et 1. Meme tes photos.\n\n\uD83D\uDCA1 Astuce dys : 1 Octet = 8 bits. "Octet" commence par O, le O ressemble a un 8 couche.\n\n\u26A0\uFE0F Piege Brevet : bit (b minuscule) ≠ octet (B majuscule ou o). 1 octet = 8 bits.' },
                    { question: 'Pourquoi voit-on l\'eclair avant le tonnerre ?', answer: '\uD83C\uDFAF Lumiere = 300 000 km/s (quasi-instantane).\nSon = 340 m/s (beaucoup plus lent).\n\nLa lumiere arrive AVANT le son.\n\nAstuce pour la distance de l\'orage :\nCompte les secondes entre eclair et tonnerre.\nDivise par 3.\nResultat = distance en km.\n\nEn gros : la lumiere va BEAUCOUP plus vite que le son.\n\n\uD83D\uDCA1 Astuce dys : 3 secondes = 1 km. 6 secondes = 2 km. Facile !\n\n\u26A0\uFE0F Piege Brevet : ne confonds pas vitesse de la lumiere et vitesse du son.' },
                    { question: 'Le son se propage-t-il dans le vide ?', answer: '\uD83C\uDFAF NON. Le son ne se propage PAS dans le vide.\n\nLe son a besoin de MATIERE (air, eau, metal).\nDans l\'espace = SILENCE total.\n\nLa lumiere, elle, se propage dans le vide.\n\nEn gros : son = besoin de matiere. Lumiere = pas besoin.\n\n\uD83D\uDCA1 Astuce dys : "Son = Souffle" → il faut de l\'air. "Lumiere = Libre" → elle passe partout.\n\n\u26A0\uFE0F Piege Brevet : question classique ! Le son dans l\'espace = 0. La lumiere dans l\'espace = ok.' }
                ],
                quiz: [
                    { question: 'La lumiere se propage a :', options: ['340 m/s', '300 000 km/s', '1 500 m/s', '30 000 km/s'], correctIndex: 1, explanation: '\uD83C\uDFAF 300 000 km/s = 3 × 10^8 m/s. C\'est la vitesse maximale dans l\'Univers.' },
                    { question: 'Le son ne se propage pas dans :', options: ['L\'eau', 'L\'air', 'Le vide', 'Le metal'], correctIndex: 2, explanation: '\uD83C\uDFAF Le son a besoin de matiere. Pas de matiere dans le vide = pas de son.' },
                    { question: 'La vitesse du son dans l\'air est environ :', options: ['300 000 km/s', '340 m/s', '1 500 m/s', '34 m/s'], correctIndex: 1, explanation: '\uD83C\uDFAF 340 m/s dans l\'air a 20°C. Un million de fois plus lent que la lumiere.' },
                    { question: 'Le danger auditif commence a :', options: ['40 dB', '60 dB', '85 dB', '120 dB'], correctIndex: 2, explanation: '\uD83C\uDFAF 85 dB = seuil de danger. 120 dB = seuil de douleur. Les degats sont irreversibles.' },
                    { question: 'Un son aigu a une frequence :', options: ['Basse', 'Elevee', 'Nulle', 'Negative'], correctIndex: 1, explanation: '\uD83C\uDFAF Aigu = frequence elevee (beaucoup de vibrations/seconde). Grave = frequence basse.' },
                    { question: 'Un octet est compose de :', options: ['4 bits', '8 bits', '16 bits', '2 bits'], correctIndex: 1, explanation: '\uD83C\uDFAF 1 octet = 8 bits. Avec 8 bits on peut coder 2^8 = 256 valeurs.' },
                    { question: 'Un signal numerique est code en :', options: ['Lettres', 'Couleurs', '0 et 1', 'Ondes continues'], correctIndex: 2, explanation: '\uD83C\uDFAF Numerique = binaire = 0 et 1. Tout (texte, images, sons) est code en 0 et 1.' },
                    { question: 'Les couleurs du spectre visible vont de :', options: ['Rouge a vert', 'Violet a rouge', 'Bleu a jaune', 'Infrarouge a ultraviolet'], correctIndex: 1, explanation: '\uD83C\uDFAF Du violet (haute frequence) au rouge (basse frequence). VIBUJOR = les 7 couleurs.' }
                ]
            },

            // ================================================================
            // SECTION 6 : PLANETE TERRE ET ENVIRONNEMENT
            // ================================================================
            {
                id: 'planete-terre',
                title: 'Planete Terre et environnement',
                icon: '\uD83C\uDF0D',
                content: '<h3>\uD83C\uDFAF Meteo et climat</h3>'
                    + '<ul>'
                    + '<li>Meteo = court terme (aujourd\'hui). Climat = long terme (30 ans).</li>'
                    + '</ul>'
                    + '<h3>\uD83C\uDFAF Effet de serre</h3>'
                    + '<ul>'
                    + '<li>Naturel = utile (+15°C). Renforce = dangereux (rechauffement).</li>'
                    + '<li>Gaz : CO2, CH4 (methane), N2O</li>'
                    + '</ul>'
                    + '<h3>\uD83C\uDFAF Risques et biodiversite</h3>'
                    + '<ul>'
                    + '<li>Seismes, volcans, inondations</li>'
                    + '<li>Biodiversite = variete du vivant</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'C\'est quoi la difference entre meteo et climat ?', answer: '\uD83C\uDFAF METEO = le temps qu\'il fait ICI et MAINTENANT.\nC\'est du COURT TERME (quelques jours).\nExemple : "Demain il pleut a Paris."\n\nCLIMAT = la MOYENNE du temps sur 30 ANS minimum.\nExemple : "Le climat mediterraneen est chaud en ete."\n\nEn gros : meteo = ta fenetre. Climat = les manuels.\n\nMot difficile : "climatologie" = la science du climat.\n\n\uD83D\uDCA1 Astuce dys : Meteo = Maintenant. Climat = "Calcul" sur 30 ans.\n\n\u26A0\uFE0F Piege Brevet : un hiver froid ne contredit PAS le rechauffement climatique. C\'est de la meteo, pas du climat.' },
                    { question: 'C\'est quoi l\'effet de serre ?', answer: '\uD83C\uDFAF Des GAZ dans l\'atmosphere retiennent la chaleur du Soleil.\n\nSANS effet de serre : Terre a -18°C (trop froid).\nAVEC effet de serre naturel : Terre a +15°C (parfait).\n\nLe PROBLEME : les humains ajoutent TROP de gaz.\nLa "couverture" devient trop epaisse.\nLa Terre chauffe trop.\n\nEn gros : un peu = bien. Trop = danger.\n\n\uD83D\uDCA1 Astuce dys : imagine une couverture. Fine = confortable. Epaisse = tu transpires.\n\n\u26A0\uFE0F Piege Brevet : l\'effet de serre NATUREL est UTILE. C\'est le RENFORCE qui pose probleme.' },
                    { question: 'Quels sont les gaz a effet de serre ?', answer: '\uD83C\uDFAF Les 3 principaux :\n\n1) CO2 (dioxyde de carbone).\nSources : voitures, usines, deforestation.\nLe plus emis en quantite.\n\n2) CH4 (methane).\nSources : elevage de vaches, dechets.\n25 fois plus puissant que le CO2.\n\n3) N2O (protoxyde d\'azote).\nSources : engrais agricoles.\n300 fois plus puissant que le CO2.\n\nEn gros : CO2 = le plus courant. CH4 et N2O = les plus puissants.\n\n\uD83D\uDCA1 Astuce dys : "CO2-CH4-N2O" → "Les 3 mechants gaz".\n\n\u26A0\uFE0F Piege Brevet : la vapeur d\'eau (H2O) est aussi un gaz a effet de serre.' },
                    { question: 'C\'est quoi le rechauffement climatique ?', answer: '\uD83C\uDFAF La temperature MOYENNE de la Terre augmente.\n\nDepuis 1900 : environ +1,1°C.\nCa parait peu mais les consequences sont ENORMES.\n\nCauses humaines :\n- Bruler du petrole, charbon, gaz (CO2).\n- Elevage intensif (methane).\n- Deforestation.\n\nEn gros : on produit trop de gaz a effet de serre.\n\nMot difficile : "GIEC" = le groupe d\'experts du climat.\n\n\uD83D\uDCA1 Astuce dys : +1°C = catastrophes. Imagine la fievre : +1°C et tu es deja malade.\n\n\u26A0\uFE0F Piege Brevet : c\'est l\'ACTIVITE HUMAINE qui cause le rechauffement. Pas le Soleil.' },
                    { question: 'Quelles sont les consequences du rechauffement ?', answer: '\uD83C\uDFAF Les 5 grandes consequences :\n\n1) FONTE DES GLACES (glaciers, banquise).\n2) MONTEE DES EAUX (oceans montent).\n3) EVENEMENTS EXTREMES (canicules, tempetes).\n4) PERTE DE BIODIVERSITE (especes disparaissent).\n5) MIGRATIONS HUMAINES (refugies climatiques).\n\nEn gros : +1°C touche TOUT et TOUT LE MONDE.\n\n\uD83D\uDCA1 Astuce dys : "FMEPM" → "Fonte, Montee, Extremes, Perte, Migrations".\n\n\u26A0\uFE0F Piege Brevet : connais au moins 3 consequences avec des EXEMPLES concrets.' },
                    { question: 'C\'est quoi un seisme ?', answer: '\uD83C\uDFAF Un seisme = un TREMBLEMENT DE TERRE.\n\nLes plaques tectoniques bougent.\nLes roches se coincent puis CASSENT d\'un coup.\n\nFOYER = le point de rupture en profondeur.\nEPICENTRE = le point en surface juste au-dessus.\n\nLa puissance = MAGNITUDE (echelle de Richter).\n\nEn gros : les plaques bougent → les roches cassent → ca tremble.\n\nMot difficile : "plaque tectonique" = un morceau geant de croute terrestre.\n\n\uD83D\uDCA1 Astuce dys : Foyer = en bas (sous la terre). Epicentre = en haut (a la surface).\n\n\u26A0\uFE0F Piege Brevet : ne confonds PAS foyer et epicentre. Le foyer est EN PROFONDEUR.' },
                    { question: 'C\'est quoi un volcan ?', answer: '\uD83C\uDFAF Un volcan = une ouverture ou sort du MAGMA.\n\n2 types :\n1) EFFUSIF = lave qui coule tranquillement (Hawaii).\n2) EXPLOSIF = eruption violente avec cendres (Vesuve).\n\nEn gros : le magma monte de l\'interieur de la Terre.\n\nMot difficile : "magma" = roche fondue EN profondeur. "lave" = magma A LA surface.\n\n\uD83D\uDCA1 Astuce dys : Effusif = ca s\'Ecoule. Explosif = ca Explose.\n\n\u26A0\uFE0F Piege Brevet : magma ≠ lave. Magma = sous terre. Lave = en surface.' },
                    { question: 'C\'est quoi la biodiversite ?', answer: '\uD83C\uDFAF La biodiversite = la VARIETE du vivant.\n\n3 niveaux :\n1) Variete des ESPECES (animaux, plantes...).\n2) Variete des ECOSYSTEMES (foret, ocean...).\n3) Variete GENETIQUE (differences entre individus).\n\nEn gros : plus il y a de variete, plus la nature est solide.\n\nMot difficile : "ecosysteme" = un milieu + ses etres vivants + leurs interactions.\n\n\uD83D\uDCA1 Astuce dys : Bio = vie. Diversite = variete. Biodiversite = variete de la vie.\n\n\u26A0\uFE0F Piege Brevet : la biodiversite a 3 niveaux. Cite les 3 dans ta reponse.' },
                    { question: 'C\'est quoi le developpement durable ?', answer: '\uD83C\uDFAF Repondre a nos besoins SANS empecher les generations futures.\n\n3 piliers :\n1) ECONOMIQUE = creer des richesses.\n2) SOCIAL = etre juste avec tout le monde.\n3) ENVIRONNEMENTAL = proteger la planete.\n\nEn gros : developper la societe SANS detruire la nature.\n\nExemple : energies renouvelables, recyclage, velo.\n\n\uD83D\uDCA1 Astuce dys : 3 piliers = "E-S-E" → "Economie, Social, Environnement".\n\n\u26A0\uFE0F Piege Brevet : il faut les 3 PILIERS. Pas juste l\'environnement !' },
                    { question: 'C\'est quoi une chaine alimentaire ?', answer: '\uD83C\uDFAF C\'est la suite : qui mange qui.\n\nExemple : herbe → lapin → renard → aigle.\n\nLe 1er maillon = un VEGETAL (producteur).\nPuis les herbivores (consommateurs primaires).\nPuis les carnivores (consommateurs secondaires).\n\nEn gros : chaque etre vivant mange le precedent.\n\nMot difficile : "producteur" = fabrique sa nourriture (photosynthese).\n\n\uD83D\uDCA1 Astuce dys : la fleche "→" veut dire "est mange par".\n\n\u26A0\uFE0F Piege Brevet : la fleche va du mange VERS le mangeur. Pas l\'inverse !' },
                    { question: 'C\'est quoi les energies renouvelables ?', answer: '\uD83C\uDFAF Energies qui ne s\'EPUISENT PAS :\n\n- Solaire (le soleil).\n- Eolien (le vent).\n- Hydraulique (l\'eau des barrages).\n- Geothermie (chaleur de la Terre).\n- Biomasse (bois, dechets verts).\n\nEn gros : le soleil et le vent seront toujours la.\n\n\u26A0\uFE0F A ne pas confondre avec les NON renouvelables :\nPetrole, charbon, gaz = fossiles (s\'epuisent).\n\n\uD83D\uDCA1 Astuce dys : "SEHGB" → "Soleil, Eolien, Hydro, Geo, Biomasse".\n\n\u26A0\uFE0F Piege Brevet : "renouvelable" ne veut PAS dire "non polluant". Un barrage impacte la nature.' },
                    { question: 'C\'est quoi un risque naturel ?', answer: '\uD83C\uDFAF Un evenement naturel DANGEREUX pour les humains.\n\nExemples :\n- Seismes (tremblements de terre).\n- Eruptions volcaniques.\n- Inondations.\n- Tempetes et cyclones.\n- Tsunamis.\n\nPour se proteger :\n1) SURVEILLER (capteurs, meteo).\n2) CONSTRUIRE ADAPTE (batiments antisismiques).\n3) INFORMER (alertes, plans d\'evacuation).\n\nEn gros : on ne peut pas les empecher, mais on peut s\'y preparer.\n\n\uD83D\uDCA1 Astuce dys : Prevention = SCI → Surveiller, Construire, Informer.\n\n\u26A0\uFE0F Piege Brevet : on ne peut JAMAIS "empecher" un seisme. On peut limiter les degats.' },
                    { question: 'C\'est quoi l\'effet de serre renforce ?', answer: '\uD83C\uDFAF L\'effet de serre RENFORCE = cause humaine.\n\nLes activites humaines rajoutent des gaz (CO2, CH4).\nPlus de gaz = plus de chaleur retenue.\nLa Terre se rechauffe TROP VITE.\n\nDifference avec le naturel :\nNaturel = +15°C = parfait.\nRenforce = +16°C, +17°C... = trop !\n\nEn gros : le naturel est necessaire. Le renforce est le probleme.\n\n\uD83D\uDCA1 Astuce dys : naturel = couverture normale. Renforce = couverture TROP epaisse.\n\n\u26A0\uFE0F Piege Brevet : le probleme n\'est PAS l\'effet de serre en soi. C\'est le RENFORCEMENT par l\'homme.' },
                    { question: 'Comment lutter contre le rechauffement climatique ?', answer: '\uD83C\uDFAF Reduire les emissions de gaz a effet de serre :\n\n1) TRANSPORTS : velo, bus, train au lieu de la voiture.\n2) ENERGIE : renouvelable au lieu de fossile.\n3) ALIMENTATION : moins de viande (elevage = methane).\n4) CONSOMMATION : recycler, reparer, moins acheter.\n5) FORETS : arreter la deforestation, replanter.\n\nEn gros : chaque geste compte.\n\n\uD83D\uDCA1 Astuce dys : TEACF → Transport, Energie, Alimentation, Consommation, Forets.\n\n\u26A0\uFE0F Piege Brevet : cite des ACTIONS CONCRETES, pas juste "proteger la planete".' }
                ],
                quiz: [
                    { question: 'La difference entre meteo et climat est :', options: ['Il n\'y en a pas', 'La meteo c\'est court terme, le climat c\'est 30 ans minimum', 'Le climat c\'est la temperature', 'La meteo est plus precise'], correctIndex: 1, explanation: '\uD83C\uDFAF Meteo = court terme. Climat = moyenne sur 30 ans. Un jour froid ≠ pas de rechauffement.' },
                    { question: 'L\'effet de serre naturel maintient la Terre a :', options: ['-18°C', '+15°C', '+30°C', '0°C'], correctIndex: 1, explanation: '\uD83C\uDFAF Sans effet de serre = -18°C. Avec = +15°C. Le naturel est UTILE.' },
                    { question: 'Le principal gaz a effet de serre humain est :', options: ['L\'oxygene O2', 'L\'azote N2', 'Le dioxyde de carbone CO2', 'L\'hydrogene H2'], correctIndex: 2, explanation: '\uD83C\uDFAF CO2 = le plus emis par les humains (voitures, usines, deforestation).' },
                    { question: 'L\'epicentre d\'un seisme est :', options: ['Le point de rupture en profondeur', 'Le point en surface au-dessus du foyer', 'Le centre de la Terre', 'La faille'], correctIndex: 1, explanation: '\uD83C\uDFAF Foyer = en profondeur. Epicentre = a la surface, juste au-dessus du foyer.' },
                    { question: 'Un volcan effusif, c\'est :', options: ['Explosion violente', 'Lave qui coule doucement', 'Que des cendres', 'Un volcan eteint'], correctIndex: 1, explanation: '\uD83C\uDFAF Effusif = lave fluide qui s\'ecoule. Explosif = eruption violente avec cendres.' },
                    { question: 'Le developpement durable repose sur :', options: ['2 piliers', '3 piliers : economique, social, environnemental', '1 seul pilier', '4 piliers'], correctIndex: 1, explanation: '\uD83C\uDFAF Les 3 piliers : economique + social + environnemental. Il faut equilibrer les trois.' },
                    { question: 'Les energies fossiles sont :', options: ['Renouvelables', 'Non renouvelables (s\'epuisent)', 'Toujours propres', 'D\'origine recente'], correctIndex: 1, explanation: '\uD83C\uDFAF Petrole, charbon, gaz = fossiles = non renouvelables. Formes en millions d\'annees, epuises en quelques siecles.' },
                    { question: 'La biodiversite, c\'est :', options: ['Le nombre d\'animaux dans un zoo', 'La variete du vivant (especes, ecosystemes, genes)', 'La taille de la foret', 'Le nombre de plantes'], correctIndex: 1, explanation: '\uD83C\uDFAF 3 niveaux : diversite des especes + des ecosystemes + genetique. Plus c\'est varie, plus c\'est resilient.' },
                    { question: 'La montee des eaux est due a :', options: ['Plus de pluie', 'Fonte des glaces + dilatation thermique', 'Les tsunamis', 'La rotation de la Terre'], correctIndex: 1, explanation: '\uD83C\uDFAF 2 causes : fonte des glaces terrestres + dilatation thermique (l\'eau chaude prend plus de place).' },
                    { question: 'Dans une chaine alimentaire, la fleche "→" signifie :', options: ['Mange', 'Est mange par', 'Vit avec', 'Se transforme en'], correctIndex: 1, explanation: '\uD83C\uDFAF La fleche va du mange vers le mangeur. Herbe → lapin = l\'herbe est mangee par le lapin.' }
                ]
            },

            // ================================================================
            // SECTION 7 : LE VIVANT ET L'EVOLUTION
            // ================================================================
            {
                id: 'vivant-evolution',
                title: 'Le vivant et l\'evolution',
                icon: '\uD83E\uDDEC',
                content: '<h3>\uD83C\uDFAF La cellule</h3>'
                    + '<ul>'
                    + '<li>Membrane + cytoplasme + noyau (avec ADN)</li>'
                    + '</ul>'
                    + '<h3>\uD83C\uDFAF Genetique</h3>'
                    + '<ul>'
                    + '<li>ADN → chromosomes (23 paires) → genes → alleles</li>'
                    + '</ul>'
                    + '<h3>\uD83C\uDFAF Division et reproduction</h3>'
                    + '<ul>'
                    + '<li>Mitose = 2 cellules identiques</li>'
                    + '<li>Meiose = cellules avec moitie des chromosomes</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'C\'est quoi une cellule ?', answer: '\uD83C\uDFAF La cellule = la plus petite "brique" du vivant.\n\nTOUS les etres vivants sont faits de cellules.\nToi, un arbre, une bacterie.\n\nChaque cellule a :\n1) MEMBRANE = l\'enveloppe qui l\'entoure.\n2) CYTOPLASME = le liquide a l\'interieur.\n3) ADN = le mode d\'emploi.\n\nEn gros : les cellules sont des briques de Lego vivantes.\n\nMot difficile : "organite" = petit organe dans la cellule.\n\n\uD83D\uDCA1 Astuce dys : Membrane = Mur. Cytoplasme = eau a l\'interieur. Noyau = cerveau.\n\n\u26A0\uFE0F Piege Brevet : TOUTES les cellules ont de l\'ADN. Meme celles sans noyau (bacteries).' },
                    { question: 'Cellule animale vs cellule vegetale ?', answer: '\uD83C\uDFAF Points COMMUNS : membrane, cytoplasme, noyau, ADN.\n\nLa cellule VEGETALE a 3 trucs en PLUS :\n1) PAROI rigide (la plante tient debout).\n2) CHLOROPLASTES (grains verts = photosynthese).\n3) Grande VACUOLE (reserve d\'eau).\n\nEn gros : vegetale = animale + armure + panneaux solaires + reserve d\'eau.\n\n\uD83D\uDCA1 Astuce dys : "PCV" → Paroi, Chloroplastes, Vacuole = les 3 bonus du vegetal.\n\n\u26A0\uFE0F Piege Brevet : la cellule vegetale a AUSSI une membrane (sous la paroi). Pas que la paroi !' },
                    { question: 'C\'est quoi l\'ADN ?', answer: '\uD83C\uDFAF L\'ADN = une tres longue molecule en double helice.\n\nElle contient le MODE D\'EMPLOI de ton corps.\nElle est dans le NOYAU de chaque cellule.\nElle est ecrite avec 4 "lettres" : A, T, C, G.\n\nEn gros : l\'ADN = le livre d\'instructions du vivant.\n\nMot difficile : "double helice" = comme une echelle vrillée.\n\n\uD83D\uDCA1 Astuce dys : les 4 lettres = ATCG → "A Table, C\'est Genial !".\n\n\u26A0\uFE0F Piege Brevet : ADN = dans le noyau. Pas dans le cytoplasme ni la membrane.' },
                    { question: 'C\'est quoi un chromosome ?', answer: '\uD83C\uDFAF Un chromosome = de l\'ADN SUPER ENROULE.\n\nQuand la cellule se divise, l\'ADN s\'enroule.\nIl forme des batonnets en forme de X.\n\nChez l\'humain : 46 chromosomes = 23 PAIRES.\n22 paires normales + 1 paire sexuelle.\nXX = fille. XY = garcon.\n\nEn gros : chromosome = ADN range et compacte.\n\n\uD83D\uDCA1 Astuce dys : 23 paires = 46. Retiens "23 × 2 = 46".\n\n\u26A0\uFE0F Piege Brevet : 23 = nombre de PAIRES. 46 = nombre TOTAL de chromosomes.' },
                    { question: 'C\'est quoi un gene ?', answer: '\uD83C\uDFAF Un gene = un MORCEAU d\'ADN.\nIl code pour un CARACTERE precis.\n\nChaque gene dit a la cellule quoi fabriquer.\nExemple : gene "couleur des yeux".\n\nUn gene peut avoir PLUSIEURS versions = les ALLELES.\nAllele "bleu", allele "marron"...\n\nEn gros : gene = une page du livre (ADN). Allele = une version de cette page.\n\nMot difficile : "allele" = version d\'un gene.\n\n\uD83D\uDCA1 Astuce dys : Gene = Gestion d\'un caractere. Allele = Alternative du gene.\n\n\u26A0\uFE0F Piege Brevet : gene ≠ allele. Le gene = la question. L\'allele = la reponse.' },
                    { question: 'C\'est quoi un allele ?', answer: '\uD83C\uDFAF Un allele = une VERSION d\'un gene.\n\nChaque humain a 2 alleles par gene (1 du pere, 1 de la mere).\n\nSi les 2 alleles sont identiques = HOMOZYGOTE.\nSi les 2 alleles sont differents = HETEROZYGOTE.\n\nExemple : allele "yeux marron" + allele "yeux bleus".\nLe DOMINANT s\'exprime. Le recessif est cache.\n\nEn gros : tu as 2 versions de chaque gene. Le dominant gagne.\n\n\uD83D\uDCA1 Astuce dys : Dominant = le plus fort. Recessif = cache.\n\n\u26A0\uFE0F Piege Brevet : "dominant" ne veut PAS dire "meilleur". Juste que c\'est lui qui s\'exprime.' },
                    { question: 'C\'est quoi la mitose ?', answer: '\uD83C\uDFAF La mitose = 1 cellule → 2 cellules IDENTIQUES.\n\nEtapes simples :\n1) L\'ADN se COPIE.\n2) Les chromosomes se placent au MILIEU.\n3) Ils se SEPARENT (1 jeu de chaque cote).\n4) La cellule se coupe en DEUX.\n\nResultat : 2 cellules avec le MEME ADN.\n\nEn gros : c\'est la photocopie des cellules.\n\nMot difficile : "cellule fille" = les 2 nouvelles cellules.\n\n\uD83D\uDCA1 Astuce dys : Mitose = MIroir → 2 copies identiques.\n\n\u26A0\uFE0F Piege Brevet : mitose = 2 cellules IDENTIQUES. Meiose = 4 cellules DIFFERENTES.' },
                    { question: 'C\'est quoi la meiose en simple ?', answer: '\uD83C\uDFAF La meiose = division pour fabriquer les GAMETES.\n\nGametes = spermatozoides ou ovules.\n\nResultat : cellules avec la MOITIE des chromosomes.\n46 → 23 chromosomes.\n\nPourquoi ? Papa (23) + Maman (23) = Bebe (46).\nSi c\'etait 46 + 46, ca ferait 92. Impossible !\n\nEn gros : la meiose divise par 2 pour que la fecondation marche.\n\n\uD83D\uDCA1 Astuce dys : Meiose = Moitie. Les deux commencent par M.\n\n\u26A0\uFE0F Piege Brevet : mitose = 2 cellules a 46 chr. Meiose = 4 cellules a 23 chr.' },
                    { question: 'C\'est quoi la reproduction sexuee ?', answer: '\uD83C\uDFAF Rencontre de 2 gametes :\nSPERMATOZOIDE (23 chr. du pere).\nOVULE (23 chr. de la mere).\n\nFECONDATION = fusion des 2 gametes.\nResultat = CELLULE-OEUF (46 chr.).\n\nEn gros : 23 + 23 = 46. Un nouvel individu.\n\nMot difficile : "gamete" = cellule reproductrice.\n\n\uD83D\uDCA1 Astuce dys : Fecondation = Fusion. Les deux commencent par F.\n\n\u26A0\uFE0F Piege Brevet : la cellule-oeuf a 46 chromosomes (23 du pere + 23 de la mere). Toujours.' },
                    { question: 'C\'est quoi la selection naturelle ?', answer: '\uD83C\uDFAF Idee de Charles DARWIN (1859).\n\nLes individus sont tous un peu DIFFERENTS.\nCeux qui sont les mieux ADAPTES survivent.\nIls se reproduisent PLUS.\nLeurs genes passent a la generation suivante.\n\nEn gros : ce n\'est pas le plus fort. C\'est le mieux ADAPTE.\n\nExemple : papillons fonces en foret sombre = mieux caches = survivent plus.\n\n\uD83D\uDCA1 Astuce dys : "DARWIN" → "Differents → Adaptes → Reproduits → WINners".\n\n\u26A0\uFE0F Piege Brevet : la selection naturelle est LENTE (des milliers de generations).' },
                    { question: 'C\'est quoi un fossile ?', answer: '\uD83C\uDFAF Un fossile = trace ou reste d\'un etre vivant du PASSE.\n\nConserve dans la ROCHE.\n\nExemples : os de dinosaures, empreintes de feuilles.\n\nLes fossiles montrent l\'evolution des especes.\nPlus le fossile est profond, plus il est ANCIEN.\n\nEn gros : c\'est une photo du passe gravee dans la pierre.\n\nMot difficile : "paleontologie" = la science des fossiles.\n\n\uD83D\uDCA1 Astuce dys : Fossile = enFOUI dans le sol.\n\n\u26A0\uFE0F Piege Brevet : les fossiles prouvent l\'evolution. Des especes ont change au fil du temps.' },
                    { question: 'C\'est quoi la parente entre especes ?', answer: '\uD83C\uDFAF Des especes qui se RESSEMBLENT partagent un ANCETRE COMMUN.\n\nPlus elles se ressemblent → ancetre commun plus RECENT.\n\nOn compare : l\'anatomie, l\'ADN, les fossiles.\n\nHomme et chimpanze : 98% d\'ADN commun.\nAncetre commun : il y a 7 millions d\'annees.\n\nEn gros : tous les etres vivants sont "cousins".\n\n\uD83D\uDCA1 Astuce dys : arbre phylogenetique = arbre genealogique des especes.\n\n\u26A0\uFE0F Piege Brevet : l\'homme ne DESCEND PAS du singe. On a un ancetre COMMUN.' },
                    { question: 'Pourquoi chaque individu est unique ?', answer: '\uD83C\uDFAF 3 raisons :\n\n1) MEIOSE = melange aleatoire des chromosomes.\n2) FECONDATION = combinaison de 2 ADN differents.\n3) MUTATIONS = changements aleatoires de l\'ADN.\n\nEn gros : le hasard fait que chaque humain est different.\n\nMeme des vrais jumeaux ont de petites differences !\n\nMot difficile : "mutation" = erreur de copie de l\'ADN.\n\n\uD83D\uDCA1 Astuce dys : MFM → Meiose, Fecondation, Mutations = les 3 sources de diversite.\n\n\u26A0\uFE0F Piege Brevet : cite les 3 mecanismes. Pas juste un.' },
                    { question: 'C\'est quoi l\'evolution ?', answer: '\uD83C\uDFAF L\'evolution = le CHANGEMENT des especes au cours du temps.\n\nLes especes ne sont pas fixes.\nElles changent lentement grace a :\n- La SELECTION NATURELLE.\n- Les MUTATIONS.\n- Le hasard.\n\nPreuves : fossiles, ADN commun, anatomie comparee.\n\nEn gros : les especes d\'aujourd\'hui descendent d\'especes differentes du passe.\n\n\uD83D\uDCA1 Astuce dys : Evolution = Evoluer = changer avec le temps.\n\n\u26A0\uFE0F Piege Brevet : l\'evolution est un FAIT scientifique, pas une opinion.' }
                ],
                quiz: [
                    { question: 'La cellule vegetale a en plus :', options: ['Un noyau', 'Chloroplastes + paroi + vacuole', 'De l\'ADN', 'Une membrane'], correctIndex: 1, explanation: '\uD83C\uDFAF Vegetale = animale + paroi rigide + chloroplastes (photosynthese) + grande vacuole.' },
                    { question: 'L\'ADN se trouve dans :', options: ['La membrane', 'Le noyau', 'A l\'exterieur de la cellule', 'Le sang uniquement'], correctIndex: 1, explanation: '\uD83C\uDFAF L\'ADN est dans le noyau de la cellule. C\'est la qu\'il est stocke et protege.' },
                    { question: 'L\'humain a combien de chromosomes ?', options: ['23', '44', '46', '48'], correctIndex: 2, explanation: '\uD83C\uDFAF 46 chromosomes = 23 paires. 22 paires + 1 paire sexuelle (XX ou XY).' },
                    { question: 'La mitose produit :', options: ['4 cellules differentes', '2 cellules identiques', '1 cellule geante', '2 cellules a 23 chromosomes'], correctIndex: 1, explanation: '\uD83C\uDFAF Mitose = 2 cellules IDENTIQUES avec 46 chromosomes chacune. Pour grandir et reparer.' },
                    { question: 'La meiose produit des cellules avec :', options: ['46 chromosomes', '92 chromosomes', '23 chromosomes', '12 chromosomes'], correctIndex: 2, explanation: '\uD83C\uDFAF Meiose = divise par 2. De 46 a 23. Pour que 23 + 23 = 46 a la fecondation.' },
                    { question: 'La selection naturelle, c\'est :', options: ['L\'homme qui choisit', 'Les mieux adaptes survivent et se reproduisent plus', 'Le plus fort gagne', 'Un tri scientifique'], correctIndex: 1, explanation: '\uD83C\uDFAF Darwin : les individus les plus adaptes survivent et transmettent leurs genes.' },
                    { question: 'Deux especes avec beaucoup de genes communs :', options: ['N\'ont aucun lien', 'Ont un ancetre commun recent', 'Sont la meme espece', 'Vivent au meme endroit'], correctIndex: 1, explanation: '\uD83C\uDFAF Plus de genes communs = ancetre commun plus recent. Homme/chimpanze = 98% ADN commun.' },
                    { question: 'Les alleles sont :', options: ['Des chromosomes', 'Les differentes versions d\'un gene', 'Des cellules', 'Des noyaux'], correctIndex: 1, explanation: '\uD83C\uDFAF Allele = version d\'un gene. Exemple : gene "couleur des yeux" → allele bleu ou marron.' },
                    { question: 'Les fossiles permettent de :', options: ['Voir l\'avenir', 'Comprendre l\'evolution des especes', 'Creer de nouvelles especes', 'Modifier l\'ADN'], correctIndex: 1, explanation: '\uD83C\uDFAF Les fossiles = traces du passe. Ils montrent comment les especes ont change au fil du temps.' },
                    { question: 'La fecondation, c\'est :', options: ['La division d\'une cellule', 'La rencontre spermatozoide + ovule', 'La copie de l\'ADN', 'La croissance d\'un organe'], correctIndex: 1, explanation: '\uD83C\uDFAF Fecondation = spermatozoide (23 chr.) + ovule (23 chr.) = cellule-oeuf (46 chr.).' }
                ]
            },

            // ================================================================
            // SECTION 8 : CORPS HUMAIN ET SANTE
            // ================================================================
            {
                id: 'corps-humain',
                title: 'Corps humain et sante',
                icon: '\uD83E\uDDB4',
                content: '<h3>\uD83C\uDFAF Digestion</h3>'
                    + '<ul>'
                    + '<li>Aliments → nutriments → absorption dans l\'intestin grele</li>'
                    + '</ul>'
                    + '<h3>\uD83C\uDFAF Immunite</h3>'
                    + '<ul>'
                    + '<li>Microbes → globules blancs → anticorps</li>'
                    + '<li>Vaccin = prevention. Antibiotique = contre bacteries uniquement.</li>'
                    + '</ul>'
                    + '<h3>\uD83C\uDFAF Systeme nerveux et reproduction</h3>'
                    + '<ul>'
                    + '<li>Neurone → message electrique → reflexe</li>'
                    + '<li>Puberte = hormones. Contraception.</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'C\'est quoi les nutriments ?', answer: '\uD83C\uDFAF Les nutriments = ce que ton corps garde apres la digestion.\n\n3 grands groupes :\n1) GLUCIDES (sucres) = le carburant (pain, pates).\n2) LIPIDES (graisses) = reserve d\'energie (huile, beurre).\n3) PROTEINES = construction des muscles (viande, oeufs).\n\nPlus : VITAMINES et MINERAUX (en petites quantites).\n\nEn gros : les nutriments font tourner ton corps.\n\n\uD83D\uDCA1 Astuce dys : "GLP" → Glucides, Lipides, Proteines. "Gateau, Lard, Poulet".\n\n\u26A0\uFE0F Piege Brevet : nutriments ≠ aliments. L\'aliment = le pain. Le nutriment = le glucose DANS le pain.' },
                    { question: 'Comment se passe la digestion ?', answer: '\uD83C\uDFAF La digestion transforme les aliments en nutriments.\n\nTrajet :\n1) BOUCHE : mastication + salive.\n2) OESOPHAGE : tube de transport.\n3) ESTOMAC : acide qui dissout.\n4) INTESTIN GRELE : absorption des nutriments.\n5) GROS INTESTIN : absorption de l\'eau.\n6) RECTUM : evacuation des dechets.\n\nEn gros : les aliments sont coupes en morceaux de + en + petits.\n\nMot difficile : "enzymes" = ciseaux chimiques qui decoupent.\n\n\uD83D\uDCA1 Astuce dys : le trajet = "BOEIGR" → Bouche, Oesophage, Estomac, Intestin grele, Gros intestin, Rectum.\n\n\u26A0\uFE0F Piege Brevet : l\'absorption se fait dans l\'INTESTIN GRELE, pas dans l\'estomac !' },
                    { question: 'C\'est quoi l\'absorption intestinale ?', answer: '\uD83C\uDFAF Les nutriments passent de l\'intestin grele vers le SANG.\n\nL\'intestin grele a des milliers de VILLOSITES.\nCe sont des petits replis (comme des doigts).\nIls augmentent la surface de contact.\n\nLes nutriments traversent et entrent dans le sang.\nLe sang les transporte dans TOUT le corps.\n\nEn gros : les villosites captent les nutriments pour le sang.\n\nMot difficile : "villosite" = petit repli de l\'intestin.\n\n\uD83D\uDCA1 Astuce dys : les villosites = des doigts qui attrapent les nutriments.\n\n\u26A0\uFE0F Piege Brevet : l\'absorption se fait dans l\'INTESTIN GRELE. Pas l\'estomac, pas le gros intestin.' },
                    { question: 'C\'est quoi le systeme immunitaire ?', answer: '\uD83C\uDFAF L\'ARMEE de defense de ton corps contre les microbes.\n\n2 types de defense :\n1) INNEE = de naissance.\nPeau, mucus, larmes, globules blancs.\n\n2) ADAPTATIVE = qui apprend.\nLes LYMPHOCYTES fabriquent des ANTICORPS sur mesure.\n\nEn gros : armee toujours prete + soldats specialises.\n\nMot difficile : "lymphocyte" = globule blanc specialise.\n\n\uD83D\uDCA1 Astuce dys : Innee = Immediate. Adaptative = Apprend.\n\n\u26A0\uFE0F Piege Brevet : il y a DEUX types d\'immunite. Cite les deux dans ta reponse.' },
                    { question: 'C\'est quoi un anticorps ?', answer: '\uD83C\uDFAF Un anticorps = une proteine fabriquee par les lymphocytes B.\n\nChaque anticorps reconnait UN SEUL type de microbe.\nComme une cle qui va dans une seule serrure.\n\nL\'anticorps se colle sur le microbe et le NEUTRALISE.\n\nEn gros : les anticorps = des missiles guides sur mesure.\n\nMot difficile : "specifique" = un anticorps par microbe.\n\n\uD83D\uDCA1 Astuce dys : Anti-CORPS = CONTRE le corps etranger (le microbe).\n\n\u26A0\uFE0F Piege Brevet : les anticorps sont SPECIFIQUES. Un anticorps anti-grippe ne marche pas contre le COVID.' },
                    { question: 'C\'est quoi la vaccination ?', answer: '\uD83C\uDFAF On injecte un microbe AFFAIBLI ou un morceau de microbe.\n\nLe corps fabrique des ANTICORPS.\nEt il cree des CELLULES MEMOIRE.\n\nSi le VRAI microbe arrive plus tard :\nLe corps reagit VITE car il se "souvient".\n\nEn gros : c\'est un entrainement pour le systeme immunitaire.\n\nMot difficile : "cellules memoire" = gardent le souvenir pendant des annees.\n\n\uD83D\uDCA1 Astuce dys : Vaccin = Avant la maladie (prevention). Comme un exercice d\'alarme incendie.\n\n\u26A0\uFE0F Piege Brevet : le vaccin ne GUERIT pas. Il PREVIENT. C\'est AVANT la maladie.' },
                    { question: 'Antibiotique vs vaccin ?', answer: '\uD83C\uDFAF ANTIBIOTIQUE :\n- MEDICAMENT.\n- Quand tu es DEJA malade.\n- Contre les BACTERIES uniquement.\n- NE marche PAS contre les virus !\n\nVACCIN :\n- PREVENTION.\n- AVANT d\'etre malade.\n- Prepare le systeme immunitaire.\n\nEn gros : vaccin = avant. Antibiotique = pendant (et que pour bacteries).\n\n\uD83D\uDCA1 Astuce dys : Antibiotique = Anti-Bacterien. Vaccin = aVant.\n\n\u26A0\uFE0F Piege Brevet : JAMAIS d\'antibiotiques pour un virus (grippe, rhume). Question ultra-classique !' },
                    { question: 'C\'est quoi un neurone ?', answer: '\uD83C\uDFAF Un neurone = une cellule NERVEUSE.\n\n3 parties :\n1) CORPS CELLULAIRE = le centre de commande.\n2) DENDRITES = les antennes qui recoivent.\n3) AXONE = le long fil qui transmet.\n\nLe message est ELECTRIQUE dans le neurone.\nIl est CHIMIQUE entre 2 neurones (synapse).\n\nEn gros : les neurones = le reseau electrique du corps.\n\nMot difficile : "synapse" = espace entre 2 neurones.\n\n\uD83D\uDCA1 Astuce dys : Dendrite = recoit (Detecte). Axone = envoie (A → vers l\'Autre).\n\n\u26A0\uFE0F Piege Brevet : electrique DANS le neurone. Chimique ENTRE les neurones (synapse).' },
                    { question: 'C\'est quoi un reflexe ?', answer: '\uD83C\uDFAF Un reflexe = reaction RAPIDE et INVOLONTAIRE.\n\nTu ne decides PAS de le faire.\n\nExemple : tu touches une casserole brulante.\nTa main se retire AVANT que tu reflechisses.\n\nTrajet : peau → nerf → MOELLE EPINIERE → nerf → muscle.\n\nEn gros : le reflexe court-circuite le cerveau pour aller plus vite.\n\nMot difficile : "arc reflexe" = le trajet complet du message.\n\n\uD83D\uDCA1 Astuce dys : Reflexe = Rapide = sans Reflexion (pas le cerveau).\n\n\u26A0\uFE0F Piege Brevet : le reflexe passe par la MOELLE EPINIERE, PAS par le cerveau !' },
                    { question: 'C\'est quoi la puberte ?', answer: '\uD83C\uDFAF La puberte = transformation du corps entre 10 et 16 ans.\n\nLe cerveau envoie des HORMONES.\n\nChez les garcons : voix qui mue, poils, spermatozoides.\nChez les filles : seins, regles, ovules.\n\nChez tous : croissance, acne, poils.\n\nEn gros : le corps passe de l\'enfance a l\'age adulte.\n\nMot difficile : "hormones" = messagers chimiques dans le sang.\n\n\uD83D\uDCA1 Astuce dys : Puberte = Passage vers l\'age adulte. Les hormones commandent.\n\n\u26A0\uFE0F Piege Brevet : la puberte est declenchee par les HORMONES, pas par l\'age exactement.' },
                    { question: 'C\'est quoi les hormones ?', answer: '\uD83C\uDFAF Les hormones = MESSAGERS CHIMIQUES.\n\nFabriquees par des glandes.\nTransportees par le SANG.\nAgissent sur des organes CIBLES.\n\nExemples :\nTESTOSTERONE (garcons) → voix, poils.\nOESTROGENES (filles) → seins, regles.\n\nEn gros : les hormones = des SMS envoyes par le cerveau au corps.\n\nMot difficile : "glande" = organe qui fabrique et libere des hormones.\n\n\uD83D\uDCA1 Astuce dys : Hormones = Horloge du corps (elles declenchent les changements au bon moment).\n\n\u26A0\uFE0F Piege Brevet : les hormones passent par le SANG, pas par les nerfs.' },
                    { question: 'C\'est quoi la contraception ?', answer: '\uD83C\uDFAF Methodes pour eviter une grossesse.\n\n1) MECANIQUE : preservatif, sterilet.\n2) HORMONALE : pilule, implant, patch.\n3) D\'URGENCE : pilule du lendemain (le + vite possible).\n\nSEUL le PRESERVATIF protege aussi des IST.\n\nEn gros : plusieurs methodes, mais une seule contre les infections.\n\nMot difficile : "IST" = Infection Sexuellement Transmissible.\n\n\uD83D\uDCA1 Astuce dys : Preservatif = Protege de TOUT (grossesse + IST).\n\n\u26A0\uFE0F Piege Brevet : question classique = "quel est le seul moyen qui protege des IST ?" → preservatif.' },
                    { question: 'C\'est quoi le message nerveux ?', answer: '\uD83C\uDFAF Le message nerveux = un signal electrique dans les neurones.\n\nTrajet normal :\n1) RECEPTEUR capte l\'info (oeil, peau, oreille...).\n2) NERF SENSITIF transporte vers le cerveau.\n3) CERVEAU analyse et decide.\n4) NERF MOTEUR transporte la reponse.\n5) MUSCLE execute l\'action.\n\nEn gros : les nerfs = les fils electriques du corps.\n\n\uD83D\uDCA1 Astuce dys : Sensitif = Sens (il SENT l\'info). Moteur = Mouvement (il fait BOUGER).\n\n\u26A0\uFE0F Piege Brevet : nerf sensitif ≠ nerf moteur. Sensitif = vers le cerveau. Moteur = vers le muscle.' },
                    { question: 'Comment fonctionne le systeme immunitaire face a un virus ?', answer: '\uD83C\uDFAF Etape 1 : le virus entre dans le corps.\n\nEtape 2 : les globules blancs le DETECTENT.\n\nEtape 3 : les PHAGOCYTES le mangent (reaction rapide).\n\nEtape 4 : les LYMPHOCYTES B fabriquent des anticorps.\n\nEtape 5 : les anticorps neutralisent le virus.\n\nEtape 6 : les cellules MEMOIRE gardent le souvenir.\n\nEn gros : detection → attaque rapide → attaque specialisee → memoire.\n\n\uD83D\uDCA1 Astuce dys : "DPAM" → Detecter, Phagocyter, Anticorps, Memoire.\n\n\u26A0\uFE0F Piege Brevet : les anticorps mettent PLUSIEURS JOURS a apparaitre. C\'est pour ca qu\'on est malade avant d\'aller mieux.' }
                ],
                quiz: [
                    { question: 'Les glucides servent principalement a :', options: ['Construire les muscles', 'Fournir de l\'energie', 'Proteger des maladies', 'Transporter l\'oxygene'], correctIndex: 1, explanation: '\uD83C\uDFAF Glucides = carburant du corps. Pain, pates, riz, fruits. Ils fournissent l\'energie.' },
                    { question: 'L\'absorption des nutriments se fait dans :', options: ['L\'estomac', 'La bouche', 'L\'intestin grele', 'Le gros intestin'], correctIndex: 2, explanation: '\uD83C\uDFAF L\'intestin grele absorbe les nutriments grace aux villosites. L\'estomac digere, il n\'absorbe pas.' },
                    { question: 'Les antibiotiques marchent contre :', options: ['Les virus', 'Les bacteries', 'Tous les microbes', 'Les champignons'], correctIndex: 1, explanation: '\uD83C\uDFAF Antibiotiques = anti-BACTERIES seulement. Inutiles contre les virus (grippe, rhume).' },
                    { question: 'La vaccination permet de :', options: ['Guerir une maladie en cours', 'Preparer l\'immunite AVANT la maladie', 'Tuer tous les virus', 'Remplacer les antibiotiques'], correctIndex: 1, explanation: '\uD83C\uDFAF Le vaccin = prevention = avant la maladie. Il entraine le systeme immunitaire.' },
                    { question: 'Un reflexe passe par :', options: ['Le cerveau', 'La moelle epiniere', 'Les poumons', 'Le coeur'], correctIndex: 1, explanation: '\uD83C\uDFAF Le reflexe court-circuite le cerveau. Peau → moelle epiniere → muscle. Plus rapide.' },
                    { question: 'La puberte est declenchee par :', options: ['L\'alimentation', 'Les hormones', 'Le sport', 'La temperature'], correctIndex: 1, explanation: '\uD83C\uDFAF Les hormones (testosterone, oestrogenes) declenchent les changements de la puberte.' },
                    { question: 'Le seul moyen de contraception contre les IST :', options: ['La pilule', 'Le sterilet', 'Le preservatif', 'L\'implant'], correctIndex: 2, explanation: '\uD83C\uDFAF Le preservatif = le SEUL qui protege grossesse + IST. La pilule ne protege PAS des IST.' },
                    { question: 'Les anticorps sont fabriques par :', options: ['Les globules rouges', 'Les lymphocytes B', 'Les neurones', 'Les os'], correctIndex: 1, explanation: '\uD83C\uDFAF Lymphocytes B = globules blancs qui fabriquent des anticorps specifiques a chaque microbe.' },
                    { question: 'Le message nerveux dans un neurone est :', options: ['Chimique uniquement', 'Electrique (chimique aux synapses)', 'Sonore', 'Thermique'], correctIndex: 1, explanation: '\uD83C\uDFAF Electrique dans le neurone. Chimique entre 2 neurones (a la synapse).' },
                    { question: 'Les enzymes digestives servent a :', options: ['Transporter les nutriments', 'Decouper les aliments en nutriments', 'Proteger l\'estomac', 'Fabriquer des vitamines'], correctIndex: 1, explanation: '\uD83C\uDFAF Enzymes = ciseaux chimiques. Elles decoupent les grosses molecules en petits nutriments.' }
                ]
            },

            // ================================================================
            // SECTION 9 : METHODE SCIENCES BREVET
            // ================================================================
            {
                id: 'methode-sciences',
                title: 'Methode Sciences Brevet',
                icon: '\uD83D\uDCDD',
                content: '<h3>\uD83C\uDFAF Lire les documents</h3>'
                    + '<ul>'
                    + '<li>Graphique : titre, axes, unites, tendance</li>'
                    + '<li>Tableau : colonnes, lignes, unites</li>'
                    + '</ul>'
                    + '<h3>\uD83C\uDFAF Rediger et calculer</h3>'
                    + '<ul>'
                    + '<li>Reponse argumentee : observation → connaissance → conclusion</li>'
                    + '<li>Formules : v=d/t, P=m×g, U=R×I, P=U×I, E=P×t</li>'
                    + '</ul>'
                    + '<h3>\uD83C\uDFAF Gestion du temps</h3>'
                    + '<ul>'
                    + '<li>1 heure pour 2 matieres. ~30 min par matiere.</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'Comment lire un graphique au brevet ?', answer: '\uD83D\uDCDD Methode en 5 etapes :\n\n1) Lis le TITRE (de quoi ca parle).\n2) Lis les AXES (x = horizontal, y = vertical).\n3) Lis les UNITES de chaque axe.\n4) Regarde la TENDANCE (ca monte, ca descend, c\'est stable ?).\n5) Lis les VALEURS demandees.\n\nEn gros : titre → axes → unites → tendance → valeurs.\n\n\uD83D\uDCA1 Astuce dys : "TAUTV" → Titre, Axes, Unites, Tendance, Valeurs.\n\n\u26A0\uFE0F Piege Brevet : oublie pas les UNITES dans ta reponse. Tu perds des points sinon.' },
                    { question: 'Comment lire un tableau au brevet ?', answer: '\uD83D\uDCDD Methode en 4 etapes :\n\n1) Lis le TITRE du tableau.\n2) Lis les EN-TETES de colonnes et de lignes.\n3) Repere les UNITES.\n4) Trouve les VALEURS demandees.\n\nEn gros : comprends d\'abord ce que le tableau montre. Puis cherche les chiffres.\n\n\uD83D\uDCA1 Astuce dys : utilise ton doigt pour suivre la ligne et la colonne. Le croisement = la valeur.\n\n\u26A0\uFE0F Piege Brevet : le tableau contient souvent PLUS d\'infos que necessaire. Lis bien la question pour savoir quoi chercher.' },
                    { question: 'Comment rediger une reponse argumentee ?', answer: '\uD83D\uDCDD Structure en 3 parties :\n\n1) OBSERVATION : "D\'apres le document, on voit que..."\n2) CONNAISSANCE : "Or, on sait que..."\n3) CONCLUSION : "Donc..."\n\nExemple :\n"D\'apres le graphique, la temperature augmente depuis 1900."\n"Or, on sait que le CO2 est un gaz a effet de serre."\n"Donc le rechauffement est lie aux emissions de CO2."\n\nEn gros : je vois + je sais = je conclus.\n\n\uD83D\uDCA1 Astuce dys : OCC → Observation, Connaissance, Conclusion.\n\n\u26A0\uFE0F Piege Brevet : cite TOUJOURS le document. "D\'apres le doc 1..." = obligatoire.' },
                    { question: 'Quelles formules connaitre par coeur ?', answer: '\uD83D\uDCDD Les 5 formules du brevet :\n\n1) v = d / t (vitesse).\n2) P = m × g (poids).\n3) U = R × I (loi d\'Ohm).\n4) P = U × I (puissance electrique).\n5) E = P × t (energie).\n\nEn gros : 5 formules. Pas une de plus.\n\n\uD83D\uDCA1 Astuce dys : "V-P-U-P-E" → "Voiture-Poids-Uri-Pui-Ept".\n\nOu en phrase : "Vite, Pierre, U-R-I, Puissant, E-P-T".\n\n\u26A0\uFE0F Piege Brevet : ecris TOUJOURS la formule en premier, puis les valeurs, puis le calcul.' },
                    { question: 'Comment convertir les unites au brevet ?', answer: '\uD83D\uDCDD Conversions les plus frequentes :\n\nVitesse : km/h ÷ 3,6 = m/s.\nMasse : 1 kg = 1000 g.\nVolume : 1 L = 1000 mL.\nTemps : 1 h = 3600 s. 1 min = 60 s.\nLongueur : 1 km = 1000 m.\nPuissance : 1 kW = 1000 W.\n\nEn gros : verifie TOUJOURS les unites avant de calculer.\n\n\uD83D\uDCA1 Astuce dys : "kilo" = 1000. Toujours. km = 1000 m. kg = 1000 g. kW = 1000 W.\n\n\u26A0\uFE0F Piege Brevet : l\'erreur d\'unite = l\'erreur la PLUS courante. Convertis AVANT de calculer.' },
                    { question: 'Comment gerer le temps a l\'epreuve de sciences ?', answer: '\uD83D\uDCDD Tu as 1 HEURE pour 2 matieres.\n\nPlan :\n- 5 min : lis TOUT le sujet en entier.\n- 25 min : 1ere matiere.\n- 25 min : 2eme matiere.\n- 5 min : relis tes reponses.\n\nEn gros : 30 min par matiere environ.\n\n\uD83D\uDCA1 Astuce dys : commence par la matiere ou tu te sens le PLUS a l\'aise.\n\n\u26A0\uFE0F Piege Brevet : ne passe PAS 45 min sur la 1ere matiere. Tu n\'auras plus le temps pour la 2eme.' },
                    { question: 'Comment presenter un calcul au brevet ?', answer: '\uD83D\uDCDD 4 etapes obligatoires :\n\n1) Ecris la FORMULE.\n2) REMPLACE par les valeurs.\n3) CALCULE le resultat.\n4) Ecris l\'UNITE.\n\nExemple :\nP = m × g\nP = 50 × 10\nP = 500 N\n\nEn gros : formule → valeurs → resultat → unite.\n\n\uD83D\uDCA1 Astuce dys : "FRCU" → Formule, Remplace, Calcule, Unite.\n\n\u26A0\uFE0F Piege Brevet : si tu oublies la formule ou l\'unite, tu perds des POINTS. Meme si le calcul est bon.' },
                    { question: 'Comment faire quand tu es bloque au brevet ?', answer: '\uD83D\uDCDD Si tu es bloque :\n\n1) PASSE a la question suivante.\n2) Reviens PLUS TARD avec des idees fraiches.\n3) Ecris TOUJOURS quelque chose (meme partiel).\n4) Utilise les DOCUMENTS (la reponse y est souvent).\n\nEn gros : ne perds pas 10 min sur 1 question.\n\n\uD83D\uDCA1 Astuce dys : les documents CONTIENNENT des indices. Relis-les.\n\n\u26A0\uFE0F Piege Brevet : une reponse partielle rapporte des points. Une page blanche = 0.' },
                    { question: 'Comment repondre a "Justifiez votre reponse" ?', answer: '\uD83D\uDCDD Justifier = donner la PREUVE.\n\nMethode :\n1) Donne ta reponse.\n2) Cite le DOCUMENT ("d\'apres le doc 2...").\n3) Utilise une CONNAISSANCE de cours.\n4) Ecris "donc..." pour conclure.\n\nExemple :\n"Le pH est acide car d\'apres le doc 1, pH = 3.\nOr un pH < 7 est acide.\nDonc cette solution est acide."\n\nEn gros : reponse + preuve du document + cours = justification.\n\n\uD83D\uDCA1 Astuce dys : "Justifiez" = "prouvez-le avec le document".\n\n\u26A0\uFE0F Piege Brevet : "je pense que..." n\'est PAS une justification. Il faut des FAITS (document + cours).' },
                    { question: 'Quels mots-cles utiliser dans les reponses ?', answer: '\uD83D\uDCDD Phrases magiques pour le brevet :\n\n"D\'apres le document X..." (cite le doc).\n"On observe que..." (observation).\n"Or, on sait que..." (connaissance de cours).\n"Donc..." ou "On en conclut que..." (conclusion).\n"Cela signifie que..." (interpretation).\n\nEn gros : utilise ces phrases pour structurer ta reponse.\n\n\uD83D\uDCA1 Astuce dys : ecris ces phrases-cles sur ton brouillon AVANT de commencer.\n\n\u26A0\uFE0F Piege Brevet : les correcteurs cherchent ces mots. Si tu les utilises, tu gagnes des points de methode.' }
                ],
                quiz: [
                    { question: 'La premiere chose a lire sur un graphique est :', options: ['Les valeurs', 'Le titre', 'La legende', 'Les couleurs'], correctIndex: 1, explanation: '\uD83D\uDCDD Le titre te dit de quoi parle le graphique. Puis les axes, les unites, la tendance.' },
                    { question: 'Pour justifier une reponse, il faut :', options: ['Ecrire "je pense que"', 'Citer le document + une connaissance de cours', 'Recopier le document', 'Donner son opinion'], correctIndex: 1, explanation: '\uD83D\uDCDD Justifier = observation du document + connaissance de cours + conclusion. Pas une opinion.' },
                    { question: 'La formule de la vitesse est :', options: ['v = d × t', 'v = d / t', 'v = t / d', 'v = d + t'], correctIndex: 1, explanation: '\uD83D\uDCDD v = d / t. Vitesse = distance / temps.' },
                    { question: 'P = m × g donne le :', options: ['La masse', 'Le poids', 'La puissance', 'La pression'], correctIndex: 1, explanation: '\uD83D\uDCDD P = m × g = le poids en newtons. m en kg, g en N/kg.' },
                    { question: 'Pour convertir km/h en m/s, on :', options: ['Multiplie par 3,6', 'Divise par 3,6', 'Multiplie par 10', 'Divise par 10'], correctIndex: 1, explanation: '\uD83D\uDCDD km/h → m/s = divise par 3,6. m/s → km/h = multiplie par 3,6.' },
                    { question: 'Combien de temps pour l\'epreuve de sciences ?', options: ['30 minutes', '1 heure', '2 heures', '1h30'], correctIndex: 1, explanation: '\uD83D\uDCDD 1 heure pour 2 matieres. Environ 30 min par matiere + 5 min de lecture + 5 min de relecture.' },
                    { question: 'Quand tu presentes un calcul, la derniere etape est :', options: ['La formule', 'Le remplacement', 'Le calcul', 'L\'unite'], correctIndex: 3, explanation: '\uD83D\uDCDD Formule → Remplace → Calcule → Unite. L\'unite est OBLIGATOIRE.' },
                    { question: 'Si tu es bloque sur une question :', options: ['Tu restes bloque 10 min', 'Tu passes et tu reviens plus tard', 'Tu quittes l\'examen', 'Tu copies sur ton voisin'], correctIndex: 1, explanation: '\uD83D\uDCDD Passe a la suite et reviens plus tard. Ne perds jamais 10 min sur 1 question. Ecris toujours quelque chose.' }
                ]
            },
            // ═══════════════════════════════════════════════════════════════
            // SECTION — Technologie (Phase 3, gap CRITIQUE BO)
            // Source : BO special n°31 du 30/07/2020, cycle 4 Technologie
            // ═══════════════════════════════════════════════════════════════
            {
                id: 'technologie',
                title: 'Technologie',
                icon: '🔧',
                content: '<h3>Technologie (cycle 4)</h3>'
                    + '<ul>'
                    + '<li><strong>Objet technique</strong> : fonctions, cahier des charges.</li>'
                    + '<li><strong>Chaines</strong> : energie + information (capteurs, actionneurs).</li>'
                    + '<li><strong>Materiaux</strong> : 5 familles, choix, impact.</li>'
                    + '<li><strong>Programmation</strong> : algorithme, boucles, conditions.</li>'
                    + '</ul>',
                flashcards: [
                    {
                        level: 'facile',
                        question: 'Qu\'est-ce qu\'un objet technique ?',
                        answer: '🎯 Un stylo, une voiture, un telephone : tous des objets techniques.\n\n'
                            + 'Definition : fabrique par l\'homme pour repondre a un besoin.\n'
                            + 'Different d\'un objet naturel (arbre, caillou).\n'
                            + '💡 "Technique" = fabrique par l\'humain.',
                        pitfalls: [
                            'Confondre objet technique et objet naturel.',
                            'Un aliment cuit reste un objet naturel transforme, pas vraiment "technique".'
                        ]
                    },
                    {
                        level: 'facile',
                        question: 'Quelles sont les 3 fonctions d\'un objet technique ?',
                        answer: '🎯 Stylo : ecrire (usage) · design (estime) · encre qui coule (technique).\n\n'
                            + '• Fonction d\'USAGE : a quoi ca sert.\n'
                            + '• Fonction d\'ESTIME : pourquoi on l\'aime (design, couleur).\n'
                            + '• Fonction TECHNIQUE : comment ca marche a l\'interieur.\n'
                            + '💡 "Usage = utilite, estime = beaute, technique = mecanique".',
                        pitfalls: [
                            'Confondre fonction d\'usage (POURQUOI) et technique (COMMENT).',
                            'Oublier la fonction d\'estime (design, couleur).'
                        ]
                    },
                    {
                        level: 'facile',
                        question: 'C\'est quoi un cahier des charges ?',
                        answer: '🎯 Une liste d\'exigences que l\'objet DOIT respecter.\n\n'
                            + 'Exemple stylo : ecrire 2 km, < 2€, tenir dans la main.\n'
                            + 'Ecrit AVANT la fabrication.\n'
                            + '💡 Comme une recette : on liste ce qu\'on veut au final.',
                        pitfalls: [
                            'Ecrire le cahier des charges APRES la fabrication (trop tard).',
                            'Oublier les contraintes (cout, taille, environnement).'
                        ]
                    },
                    {
                        level: 'moyen',
                        question: 'Les 4 fonctions de la chaine d\'ENERGIE ?',
                        answer: '🎯 Seche-cheveux : prise → cable → moteur → helice.\n\n'
                            + '1. ALIMENTER : source (prise, pile, soleil).\n'
                            + '2. DISTRIBUER : transporter (cables, fils).\n'
                            + '3. CONVERTIR : transformer (moteur, resistance).\n'
                            + '4. TRANSMETTRE : donner au final (helice, roue).\n'
                            + '💡 "ADCT" : Alimenter, Distribuer, Convertir, Transmettre.',
                        pitfalls: [
                            'Confondre "convertir" (change la forme) et "transmettre" (deplace).',
                            'Oublier la distribution (cables, souvent invisibles).'
                        ]
                    },
                    {
                        level: 'moyen',
                        question: 'Les 3 fonctions de la chaine d\'INFORMATION ?',
                        answer: '🎯 Thermostat : capteur T° → calcul si chaud → allume la lampe.\n\n'
                            + '1. ACQUERIR : capter l\'info (capteur).\n'
                            + '2. TRAITER : analyser (microcontroleur, programme).\n'
                            + '3. COMMUNIQUER : afficher ou envoyer (ecran, actionneur).\n'
                            + '💡 "ATC" : Acquerir, Traiter, Communiquer.',
                        pitfalls: [
                            'Confondre chaine d\'energie et chaine d\'information.',
                            'Energie = ca bouge / chauffe. Information = ca decide / communique.'
                        ]
                    },
                    {
                        level: 'moyen',
                        question: 'Difference entre capteur et actionneur ?',
                        answer: '🎯 Capteur = thermometre. Actionneur = moteur.\n\n'
                            + 'CAPTEUR : ENTREE. Mesure (temp, lumiere, son, distance).\n'
                            + 'ACTIONNEUR : SORTIE. Produit une action (moteur, lampe, buzzer).\n'
                            + '💡 "Capteur capte, actionneur agit".',
                        pitfalls: [
                            'Le capteur NE FAIT RIEN, il observe juste.',
                            'Haut-parleur = actionneur (emet un son). Micro = capteur (recoit un son).'
                        ]
                    },
                    {
                        level: 'facile',
                        question: 'Les 5 familles de materiaux ?',
                        answer: '🎯 Acier (metal), bouteille (plastique), verre (ceramique), fibre carbone (composite), bois (organique).\n\n'
                            + '1. METAUX : fer, acier, aluminium.\n'
                            + '2. PLASTIQUES : PVC, PET, polyethylene.\n'
                            + '3. CERAMIQUES : verre, porcelaine.\n'
                            + '4. COMPOSITES : plusieurs materiaux fusionnes.\n'
                            + '5. ORGANIQUES : bois, cuir, papier.\n'
                            + '💡 "MPCCO" pour s\'en souvenir.',
                        pitfalls: [
                            'Oublier les composites (ex: beton arme).',
                            'Classer le papier en plastique (c\'est organique : vient du bois).'
                        ]
                    },
                    {
                        level: 'moyen',
                        question: 'Comment choisir un materiau pour un objet ?',
                        answer: '🎯 Bouteille d\'eau : plastique leger, etanche, bon marche.\n\n'
                            + '4 criteres a verifier :\n'
                            + '• PROPRIETES (solidite, flexibilite, poids).\n'
                            + '• COUT (fabrication + achat).\n'
                            + '• IMPACT ENVIRONNEMENTAL (recyclable ? polluant ?).\n'
                            + '• DISPONIBILITE (facile a trouver ?).\n'
                            + '💡 "PCID" : Proprietes, Cout, Impact, Dispo.',
                        pitfalls: [
                            'Ne regarder que le cout : l\'impact environnemental pese souvent plus au DNB.',
                            'Choisir sans verifier la solidite (une chaise en papier ne tient pas).'
                        ]
                    },
                    {
                        level: 'moyen',
                        question: 'C\'est quoi le cycle de vie d\'un objet ?',
                        answer: '🎯 5 etapes : extraction → fabrication → distribution → utilisation → fin de vie.\n\n'
                            + 'On analyse l\'impact environnemental a chaque etape.\n'
                            + 'Fin de vie = recyclage, decharge, incineration.\n'
                            + '💡 "EFDUF" (Extraction, Fabrication, Distribution, Usage, Fin).',
                        pitfalls: [
                            'Oublier que la distribution (transport) pollue beaucoup.',
                            'Confondre "fin de vie" et "utilisation".'
                        ]
                    },
                    {
                        level: 'facile',
                        question: 'Prototype vs produit final ?',
                        answer: '🎯 Prototype = 1er essai, pas encore vendu.\n\n'
                            + 'Un prototype sert a TESTER une idee.\n'
                            + 'Apres tests et corrections → produit final en serie.\n'
                            + '💡 "Proto = premier, pas parfait". On teste et on ameliore.',
                        pitfalls: [
                            'Croire qu\'un prototype est un produit fini (il est souvent imparfait).',
                            'Oublier les tests : le prototype sert a valider AVANT la production.'
                        ]
                    },
                    {
                        level: 'moyen',
                        question: 'CAO et impression 3D : a quoi ca sert ?',
                        answer: '🎯 Logiciel 3D → on dessine → l\'imprimante fabrique l\'objet.\n\n'
                            + 'CAO = Conception Assistee par Ordinateur (plan numerique).\n'
                            + 'Imprimante 3D = depose du plastique fondu couche par couche.\n'
                            + 'Avantages : rapide, modifiable, pas d\'outil specifique.\n'
                            + '💡 "CAO = plan numerique, 3D = fabrication auto".',
                        pitfalls: [
                            'Croire que l\'imprimante 3D fait n\'importe quel materiau (souvent plastique PLA).',
                            'Confondre CAO (plan) et impression 3D (fabrication).'
                        ]
                    },
                    {
                        level: 'moyen',
                        question: 'Comment evolue un objet technique dans le temps ?',
                        answer: '🎯 Telephone : filaire (1900) → mobile (1990) → smartphone (2010).\n\n'
                            + 'Les objets evoluent selon 3 axes :\n'
                            + '• BESOINS (nouveaux usages).\n'
                            + '• TECHNOLOGIES (nouveaux composants).\n'
                            + '• SOCIETE (mode, ecologie).\n'
                            + '💡 "BTS" : Besoins, Technos, Societe.',
                        pitfalls: [
                            'Croire qu\'un objet ancien est toujours "moins bien" (parfois plus robuste).',
                            'Oublier l\'impact societal (plus d\'echanges, mais moins de vie privee).'
                        ]
                    },
                    {
                        level: 'facile',
                        question: 'Qu\'est-ce qu\'un algorithme ?',
                        answer: '🎯 Recette de cuisine = algorithme : etapes ordonnees.\n\n'
                            + 'Algorithme = suite d\'instructions precises pour resoudre un probleme.\n'
                            + 'En techno : ecrit en Scratch ou en langage machine.\n'
                            + '💡 "Algo = etape par etape, sans ambiguite".',
                        pitfalls: [
                            'Ecrire des etapes floues : un algo doit etre PRECIS.',
                            'Oublier l\'ordre : "verser l\'eau AVANT de chauffer" vs apres.'
                        ]
                    },
                    {
                        level: 'moyen',
                        question: 'Les 3 structures de base en programmation ?',
                        answer: '🎯 Feux tricolores : rouge → orange → vert (sequence + boucle).\n\n'
                            + '1. SEQUENCE : instructions les unes apres les autres.\n'
                            + '2. CONDITION : "si... alors..." (choix).\n'
                            + '3. BOUCLE : repetition (tant que, repeter N fois).\n'
                            + '💡 "SCB" : Sequence, Condition, Boucle.',
                        pitfalls: [
                            'Confondre boucle "pour N fois" (N fixe) et "tant que" (condition).',
                            'Oublier le SINON dans une condition : sans, rien ne se passe si faux.'
                        ]
                    },
                    {
                        level: 'difficile',
                        question: 'Programme : "x=0 ; SI capteur > 20 ALORS x=1 SINON x=0". Que vaut x si capteur = 25 ?',
                        answer: '🎯 x = 1.\n\n'
                            + 'Pourquoi ? 25 > 20 est VRAI → on execute "x=1".\n'
                            + 'Si capteur etait 15 : 15 > 20 est FAUX → "x=0".\n'
                            + '💡 Lis d\'abord la condition, puis choisis la bonne branche.',
                        pitfalls: [
                            'Oublier la valeur initiale de x (ici 0).',
                            'Confondre > et <. 25 > 20 = vrai. 25 < 20 = faux.'
                        ]
                    },
                    {
                        level: 'moyen',
                        question: 'Qu\'est-ce qu\'un objet connecte (IoT) ?',
                        answer: '🎯 Montre qui envoie tes pas au telephone = objet connecte.\n\n'
                            + '3 elements necessaires :\n'
                            + '1. Capteurs (collecter des donnees).\n'
                            + '2. Connexion internet (WiFi, Bluetooth).\n'
                            + '3. Application qui traite les donnees.\n'
                            + '💡 "IoT = Internet des Objets".',
                        pitfalls: [
                            'Croire qu\'un objet connecte fonctionne sans internet.',
                            'Oublier les risques (donnees personnelles, piratage).'
                        ]
                    },
                    {
                        level: 'moyen',
                        question: 'Reseau local domestique : comment ca marche ?',
                        answer: '🎯 Box internet → WiFi → telephone, TV, ordi connectes.\n\n'
                            + 'La BOX est le centre : distribue internet et connecte les appareils.\n'
                            + 'Chaque appareil a une adresse IP (comme un numero).\n'
                            + '💡 "Box = chef d\'orchestre, IP = nom de chaque musicien".',
                        pitfalls: [
                            'Confondre reseau local (maison) et internet (monde entier).',
                            'Croire que sans box, les appareils communiquent entre eux.'
                        ]
                    },
                    {
                        level: 'difficile',
                        question: 'Pourquoi limiter l\'impact environnemental d\'un objet ?',
                        answer: '🎯 Smartphone = 200 kg CO2 de sa fabrication a sa fin de vie.\n\n'
                            + '3 raisons :\n'
                            + '• RESSOURCES epuisables (metaux rares).\n'
                            + '• POLLUTION (extraction, transport, dechets).\n'
                            + '• CLIMAT (emissions de CO2).\n'
                            + '💡 Solutions : reparer, recycler, produits durables.',
                        pitfalls: [
                            'Penser que seule l\'utilisation compte (fabrication > usage souvent).',
                            'Oublier le transport (souvent un tiers de l\'impact total).'
                        ]
                    },
                    {
                        level: 'facile',
                        question: 'Qu\'est-ce qu\'un schema fonctionnel ?',
                        answer: '🎯 Dessin qui montre les fonctions d\'un objet (cases + fleches).\n\n'
                            + 'Cases = fonctions (ex: "alimenter", "convertir").\n'
                            + 'Fleches = flux d\'energie ou d\'info.\n'
                            + '💡 Souvent demande a completer au DNB.',
                        pitfalls: [
                            'Confondre schema fonctionnel (fonctions) et schema electrique (composants reels).',
                            'Dessiner les fleches a l\'envers (toujours de l\'entree vers la sortie).'
                        ]
                    },
                    {
                        level: 'difficile',
                        question: 'Innovation vs invention : quelle difference ?',
                        answer: '🎯 Invention = NOUVEAU (1ere voiture a moteur).\nInnovation = AMELIORATION (voiture electrique).\n\n'
                            + 'Toute innovation vient d\'une idee creative + besoin identifie.\n'
                            + 'Elle peut etre technique, sociale ou environnementale.\n'
                            + '💡 "Invention = premiere fois. Innovation = ameliore l\'existant".',
                        pitfalls: [
                            'Confondre innovation et invention : une amelioration n\'est pas une invention.',
                            'Penser qu\'innover = forcement technique. Une innovation peut etre un nouvel usage.'
                        ]
                    }
                ],
                quiz: [],
                miniSujet: {
                    title: 'Mini-sujet DNB — La sonnette connectee',
                    duration: '15 minutes',
                    intro: 'Une sonnette connectee detecte quelqu\'un devant la porte, prend une photo, et envoie une notification sur le telephone. Le boitier est en plastique recyclable.',
                    questions: [
                        {
                            type: 'qcm',
                            text: 'Question 1 (Facile) — Quel composant DETECTE la presence d\'une personne ?',
                            options: ['Le haut-parleur', 'Le capteur de mouvement', 'L\'ecran du telephone', 'Le WiFi'],
                            correctIndex: 1,
                            answer: 'Le capteur de mouvement (ou de distance). Un capteur = entree de la chaine d\'information.'
                        },
                        {
                            type: 'open',
                            text: 'Question 2 (Moyen) — Cite les 3 fonctions de la chaine d\'information de cette sonnette.',
                            answer: '1. ACQUERIR : capteur de mouvement detecte. 2. TRAITER : microprocesseur decide de prendre la photo. 3. COMMUNIQUER : envoi de la notification au telephone via WiFi.'
                        },
                        {
                            type: 'qcm',
                            text: 'Question 3 (Moyen) — Pourquoi choisir du plastique RECYCLABLE pour le boitier ?',
                            options: [
                                'Pour qu\'il soit plus solide',
                                'Pour reduire l\'impact environnemental en fin de vie',
                                'Pour qu\'il soit plus beau',
                                'Pour qu\'il coute moins cher'
                            ],
                            correctIndex: 1,
                            answer: 'Recyclable = reutiliser la matiere en fin de vie → reduit dechets et extraction de ressources.'
                        },
                        {
                            type: 'open',
                            text: 'Question 4 (Difficile) — Ecris un algorithme simplifie qui declenche la photo quand le capteur detecte un mouvement.',
                            answer: 'repeter indefiniment :\n  SI capteur_mouvement > seuil ALORS :\n    prendre une photo\n    envoyer notification au telephone.'
                        },
                        {
                            type: 'qcm',
                            text: 'Question 5 (Difficile) — La sonnette fonctionnera-t-elle SANS internet ?',
                            options: [
                                'Oui, elle peut tout faire en local',
                                'Non, elle ne pourra ni prendre ni envoyer de photo',
                                'Non, elle ne pourra pas envoyer la notification',
                                'Oui, mais plus lentement'
                            ],
                            correctIndex: 2,
                            answer: 'Sans internet : detection et prise de photo fonctionnent (fonctions locales), mais l\'envoi de la notification au telephone necessite une connexion.'
                        }
                    ]
                }
            }

        ]
    });
})();
