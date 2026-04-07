// emc.js — Donnees EMC Terminale (Enseignement Moral et Civique)
// Format pedagogique adapte dys/TSA : phrases courtes, exemples concrets, mots difficiles expliques
(function() {
    if (!window.StudFlow || !window.StudFlow.subjects) return;

    window.StudFlow.subjects.register({
        id: 'emc',
        name: 'EMC',
        icon: '\uD83C\uDFDB\uFE0F',
        color: 'mint',
        sections: [

            // ================================================================
            // SECTION 1 : LES FONDEMENTS DE LA REPUBLIQUE
            // ================================================================
            {
                id: 'fondements-republique',
                title: 'Les fondements de la Republique',
                icon: '\uD83C\uDDEB\uD83C\uDDF7',
                content: '<h3>Valeurs, principes et symboles de la Republique francaise</h3>',
                flashcards: [
                    { question: 'C\'est quoi les valeurs de la Republique ?', answer: 'LIBERTE : chacun peut penser, s\'exprimer, croire (ou ne pas croire) librement. EGALITE : tous les citoyens ont les memes droits devant la loi, quelle que soit leur origine. FRATERNITE : solidarite entre les citoyens, vivre ensemble. La devise "Liberte, Egalite, Fraternite" est inscrite sur les mairies, les ecoles, les tribunaux. En gros : 3 mots qui definissent ce qu\'est la France en tant que Republique.' },
                    { question: 'C\'est quoi la laicite ?', answer: 'La LAICITE = la separation entre l\'ETAT et les RELIGIONS. Loi de 1905. L\'Etat ne favorise AUCUNE religion. Chacun est LIBRE de croire ou de ne pas croire. MAIS : la religion reste dans la sphere PRIVEE (pas dans les institutions publiques). A l\'ecole : pas de signes religieux OSTENSIBLES (loi de 2004 : pas de voile, kippa, grande croix). En gros : l\'Etat est neutre. Tu crois ce que tu veux, mais l\'Etat ne prend pas parti. Mots difficiles : "ostensible" = visible de facon exageree, qui se montre volontairement.' },
                    { question: 'C\'est quoi l\'Etat de droit ?', answer: 'Un ETAT DE DROIT = un Etat ou TOUT LE MONDE (y compris le president) est soumis a la LOI. Personne n\'est au-dessus des lois. Il repose sur : la CONSTITUTION (la loi supreme), la SEPARATION DES POUVOIRS (legislatif, executif, judiciaire), les DROITS FONDAMENTAUX (liberte, egalite, presomption d\'innocence). Le CONTRAIRE = la dictature (le chef decide seul, sans loi). En gros : dans un Etat de droit, c\'est la loi qui commande, pas un homme.' },
                    { question: 'C\'est quoi la separation des pouvoirs ?', answer: 'Idee de MONTESQUIEU (L\'Esprit des lois, 1748). Les 3 pouvoirs doivent etre SEPARES pour eviter la tyrannie : LEGISLATIF = faire les lois (Assemblee nationale + Senat). EXECUTIF = appliquer les lois (President + Gouvernement). JUDICIAIRE = juger ceux qui ne respectent pas les lois (tribunaux). Si UNE SEULE personne a les 3 pouvoirs → dictature. En gros : separer les pouvoirs = empecher qu\'un seul homme decide de tout.' },
                    { question: 'C\'est quoi la Constitution de la Ve Republique ?', answer: 'La CONSTITUTION = la loi SUPREME de la France. Celle de la Ve Republique date de 1958 (De Gaulle). Elle definit : le role du PRESIDENT (elu pour 5 ans, chef des armees), le GOUVERNEMENT (Premier ministre + ministres), le PARLEMENT (Assemblee nationale + Senat), le CONSEIL CONSTITUTIONNEL (verifie que les lois respectent la Constitution). En gros : la Constitution = les regles du jeu de la Republique.' },
                    { question: 'Quels sont les symboles de la Republique ?', answer: 'Le DRAPEAU tricolore (bleu, blanc, rouge). La MARSEILLAISE (hymne national, 1792). La devise : LIBERTE, EGALITE, FRATERNITE. MARIANNE (figure feminine, visage de la Republique). Le 14 JUILLET (fete nationale, prise de la Bastille). Le COQ gaulois. En gros : ces symboles representent les valeurs de la Republique. On les retrouve dans les mairies, les ecoles, les pieces de monnaie.' }
                ],
                quiz: [
                    { question: 'La loi de separation de l\'Eglise et de l\'Etat date de :', options: ['1789', '1848', '1905', '1958'], correctIndex: 2, explanation: 'La loi de 1905 instaure la laicite : l\'Etat ne reconnait, ne salarie ni ne subventionne aucun culte.' },
                    { question: 'La separation des pouvoirs est une idee de :', options: ['Rousseau', 'Montesquieu', 'Voltaire', 'De Gaulle'], correctIndex: 1, explanation: 'Montesquieu theorise la separation des pouvoirs dans L\'Esprit des lois (1748) pour eviter la tyrannie.' },
                    { question: 'Le pouvoir legislatif en France est exerce par :', options: ['Le President', 'Le Gouvernement', 'L\'Assemblee nationale et le Senat', 'Les juges'], correctIndex: 2, explanation: 'Le Parlement (Assemblee nationale + Senat) vote les lois. C\'est le pouvoir legislatif.' },
                    { question: 'La Constitution de la Ve Republique date de :', options: ['1789', '1848', '1946', '1958'], correctIndex: 3, explanation: 'La Ve Republique est fondee en 1958 par De Gaulle. Sa Constitution definit les institutions actuelles.' },
                    { question: 'La laicite garantit :', options: ['L\'atheisme obligatoire', 'La liberte de croire ou de ne pas croire', 'L\'interdiction des religions', 'La suprematie d\'une religion'], correctIndex: 1, explanation: 'La laicite = neutralite de l\'Etat. Chacun est libre de croire ou non. L\'Etat ne favorise aucune religion.' }
                ]
            },

            // ================================================================
            // SECTION 2 : LA DEMOCRATIE ET LA CITOYENNETE
            // ================================================================
            {
                id: 'democratie-citoyennete',
                title: 'Democratie et citoyennete',
                icon: '\uD83D\uDDF3\uFE0F',
                content: '<h3>Etre citoyen dans une democratie</h3>',
                flashcards: [
                    { question: 'C\'est quoi la democratie ?', answer: 'DEMOCRATIE = le pouvoir appartient au PEUPLE. Etymologie : demos (peuple) + kratos (pouvoir). DIRECTE = les citoyens votent eux-memes les lois (Athenes antique, referendum). REPRESENTATIVE = les citoyens elisent des REPRESENTANTS qui votent les lois (deputes, senateurs). La France est une democratie REPRESENTATIVE. En gros : en democratie, c\'est le peuple qui decide, soit directement, soit via des elus.' },
                    { question: 'C\'est quoi le droit de vote en France ?', answer: 'Chronologie : 1791 = suffrage CENSITAIRE (seuls les riches votent). 1848 = suffrage universel MASCULIN. 1944 = droit de vote des FEMMES. 1974 = majorite a 18 ANS (avant : 21 ans). Conditions aujourd\'hui : avoir 18 ans, etre de nationalite francaise, etre inscrit sur les listes electorales. En gros : le droit de vote s\'est elargi progressivement. Voter est un DROIT et un DEVOIR civique.' },
                    { question: 'C\'est quoi l\'abstention ?', answer: 'L\'ABSTENTION = ne pas aller voter. En France, elle augmente : parfois plus de 50% aux elections. Causes : desinteret, sentiment que "ca ne change rien", mefiance envers les politiques, manque d\'information. Consequences : les elus representent une MINORITE de la population. En gros : l\'abstention est un probleme pour la democratie car les elus sont choisis par de moins en moins de gens.' },
                    { question: 'C\'est quoi l\'engagement citoyen ?', answer: 'Etre citoyen, ce n\'est PAS juste voter. C\'est aussi : s\'engager dans une ASSOCIATION (humanitaire, environnementale, sportive). Participer a la VIE LOCALE (conseil municipal, conseil de quartier). S\'INFORMER et debattre. RESPECTER les lois et les autres. Faire du BENEVOLAT. Exemples : Les Restos du Coeur, Amnesty International, les marches pour le climat. En gros : la citoyennete = participer activement a la vie de la societe.' },
                    { question: 'C\'est quoi les partis politiques ?', answer: 'Un PARTI = un groupe organise qui a un PROGRAMME et qui veut acceder au POUVOIR par les elections. En France : GAUCHE (PS, LFI, EELV) = egalite sociale, services publics, ecologie. CENTRE (Renaissance, MoDem) = ni gauche ni droite, liberalisme modere. DROITE (LR) = autorite, securite, economie de marche. EXTREME DROITE (RN) = immigration, identite nationale. EXTREME GAUCHE (NPA, LO) = anticapitalisme. En gros : les partis permettent aux citoyens de choisir une DIRECTION pour le pays.' },
                    { question: 'C\'est quoi les medias et la democratie ?', answer: 'Les medias = la PRESSE, la TV, la radio, Internet. Ils sont essentiels a la democratie car ils INFORMENT les citoyens. LIBERTE DE LA PRESSE = les journalistes peuvent critiquer le pouvoir (article 11 de la DDHC). Risques : la CONCENTRATION des medias (quelques milliardaires possedent les grands journaux), les FAKE NEWS (fausses informations diffusees sur Internet), la DESINFORMATION. En gros : pas de democratie sans medias libres. Mais les medias doivent etre INDEPENDANTS et les citoyens doivent etre CRITIQUES.' }
                ],
                quiz: [
                    { question: 'Les femmes obtiennent le droit de vote en France en :', options: ['1789', '1848', '1944', '1958'], correctIndex: 2, explanation: 'Les femmes obtiennent le droit de vote en 1944 et votent pour la premiere fois en avril 1945.' },
                    { question: 'L\'abstention c\'est :', options: ['Voter blanc', 'Ne pas aller voter', 'Voter pour un petit parti', 'Annuler son vote'], correctIndex: 1, explanation: 'L\'abstention = ne pas se deplacer pour voter. C\'est different du vote blanc (se deplacer mais ne choisir aucun candidat).' },
                    { question: 'La France est une democratie :', options: ['Directe', 'Representative', 'Monarchique', 'Federale'], correctIndex: 1, explanation: 'En France, les citoyens elisent des representants (deputes, president) qui exercent le pouvoir en leur nom.' },
                    { question: 'La liberte de la presse est garantie par :', options: ['L\'article 1 de la Constitution', 'L\'article 11 de la DDHC de 1789', 'La loi de 1905', 'Le Code penal'], correctIndex: 1, explanation: 'L\'article 11 de la DDHC (1789) affirme la libre communication des pensees et des opinions.' },
                    { question: 'L\'engagement citoyen c\'est :', options: ['Uniquement voter', 'Participer activement a la vie de la societe', 'Payer ses impots', 'Regarder les infos'], correctIndex: 1, explanation: 'L\'engagement citoyen va au-dela du vote : associations, benevolat, debat, respect des lois, solidarite.' }
                ]
            },

            // ================================================================
            // SECTION 3 : LES GRANDS ENJEUX ETHIQUES
            // ================================================================
            {
                id: 'enjeux-ethiques',
                title: 'Les grands enjeux ethiques',
                icon: '\uD83E\uDD14',
                content: '<h3>Bioethique, environnement, numerique</h3>',
                flashcards: [
                    { question: 'C\'est quoi la bioethique ?', answer: 'La BIOETHIQUE = les questions MORALES posees par la biologie et la medecine. Exemples : la PMA (Procreation Medicalement Assistee) — qui peut en beneficier ? La GPA (Gestation Pour Autrui) — une femme peut-elle porter l\'enfant d\'une autre ? Le don d\'organes — peut-on vendre ses organes ? L\'euthanasie — a-t-on le droit de choisir sa mort ? Les lois de bioethique sont revisees tous les 7 ans en France. En gros : la bioethique = quand la science peut faire quelque chose, DOIT-ELLE le faire ?' },
                    { question: 'C\'est quoi l\'euthanasie et le debat en France ?', answer: 'EUTHANASIE = aider quelqu\'un a MOURIR pour abreger ses souffrances. ILLEGALE en France (mais legale en Belgique, Pays-Bas, Canada). En France : la loi CLAEYS-LEONETTI (2016) autorise la "sedation profonde et continue" (endormir jusqu\'a la mort naturelle) mais PAS l\'euthanasie active. Debat en cours (2024-2025) : le projet de loi sur "l\'aide a mourir." POUR : liberte, dignite, fin des souffrances. CONTRE : risque de derives, protection des personnes vulnerables. En gros : un debat entre la liberte de choisir sa mort et le devoir de proteger la vie.' },
                    { question: 'C\'est quoi l\'ethique du numerique ?', answer: 'Le NUMERIQUE pose des questions ethiques nouvelles : 1) Les DONNEES PERSONNELLES : qui a le droit de collecter tes donnees ? (RGPD 2018). 2) L\'INTELLIGENCE ARTIFICIELLE : peut-elle decider a la place de l\'homme ? (recrutement, justice, medecine). 3) Le DROIT A L\'OUBLI : peut-on faire effacer ses traces sur Internet ? 4) Le CYBERHARCELEMENT : comment proteger les victimes ? En gros : la technologie avance plus vite que les lois. L\'ethique doit poser des LIMITES.' },
                    { question: 'C\'est quoi la justice sociale ?', answer: 'La JUSTICE SOCIALE = reduire les INEGALITES entre les citoyens. Outils : les IMPOTS (les riches paient plus → redistribution). La SECURITE SOCIALE (sante, chomage, retraite pour tous). L\'EDUCATION gratuite et obligatoire. Les MINIMA SOCIAUX (RSA, APL). Debat : jusqu\'ou aller ? Trop de redistribution = moins de motivation ? Pas assez = inegalites explosent ? En gros : la justice sociale = faire en sorte que la naissance ne determine pas le destin.' },
                    { question: 'C\'est quoi la desobeissance civile ?', answer: 'La DESOBEISSANCE CIVILE = refuser de respecter une loi qu\'on juge INJUSTE, de facon NON-VIOLENTE et PUBLIQUE, en acceptant la PUNITION. Exemples : Rosa PARKS (1955, refuse de ceder sa place dans le bus aux USA → lutte contre la segregation). Gandhi (non-violence contre la colonisation britannique en Inde). Les Faucheurs d\'OGM (destruction de champs OGM en France). En gros : parfois, desobeir a la loi est un acte CITOYEN. Mais il faut assumer les consequences. Mots difficiles : "desobeissance civile" = desobeir a la loi pour des raisons de CONSCIENCE, pas d\'interet personnel.' }
                ],
                quiz: [
                    { question: 'La bioethique pose des questions sur :', options: ['L\'economie', 'Les limites morales de la biologie et de la medecine', 'L\'urbanisme', 'Le sport'], correctIndex: 1, explanation: 'La bioethique questionne : PMA, euthanasie, don d\'organes, manipulation genetique — quand la science PEUT, DOIT-elle ?' },
                    { question: 'Le RGPD (2018) protege :', options: ['Les entreprises', 'Les donnees personnelles des citoyens europeens', 'Les brevets', 'Les droits d\'auteur'], correctIndex: 1, explanation: 'Le RGPD oblige les entreprises a proteger les donnees personnelles et donne aux citoyens un droit de controle sur leurs donnees.' },
                    { question: 'La desobeissance civile est :', options: ['Violente et secrete', 'Non-violente et publique, avec acceptation de la punition', 'Un crime', 'Reservee aux politiciens'], correctIndex: 1, explanation: 'La desobeissance civile est pacifique, publique et le citoyen accepte les sanctions. C\'est un acte de conscience.' },
                    { question: 'Rosa Parks est connue pour :', options: ['Avoir vote la premiere', 'Avoir refuse de ceder sa place dans un bus segregue', 'Avoir ete presidente', 'Avoir invente Internet'], correctIndex: 1, explanation: 'En 1955, Rosa Parks refuse de ceder sa place a un Blanc dans un bus de Montgomery (Alabama). Son geste lance le mouvement des droits civiques.' },
                    { question: 'L\'euthanasie en France est :', options: ['Legale sans condition', 'Illegale mais le debat est en cours', 'Autorisee depuis 2020', 'Autorisee pour les mineurs'], correctIndex: 1, explanation: 'L\'euthanasie active est illegale en France. La loi Claeys-Leonetti (2016) permet la sedation profonde. Un projet de loi sur "l\'aide a mourir" est en discussion.' }
                ]
            }
        ]
    });
})();
