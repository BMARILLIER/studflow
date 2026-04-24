// brevet_histgeo.js — Brevet Histoire-Geographie
// Programme cycle 4 (3eme) — DNB
// Format pedagogique adapte dys/TSA : phrases courtes (max 12 mots), mnemoniques, astuces memoire
// 9 sections : 5 histoire + 4 geographie
(function() {
    if (!window.StudFlow || !window.StudFlow.subjects) return;

    window.StudFlow.subjects.register({
        id: 'brevet_histgeo',
        name: 'Histoire-Geographie (Brevet)',
        icon: '\ud83c\udf0d',
        color: 'earth',
        exam: 'brevet',
        sections: [

            // ================================================================
            // SECTION 1 : LA PREMIERE GUERRE MONDIALE (1914-1918)
            // ================================================================
            {
                id: 'ww1',
                title: 'La Premiere Guerre mondiale (1914-1918)',
                icon: '\u2694\ufe0f',
                content: '<h3>\u26a0\ufe0f Dates cles a retenir</h3>'
                    + '<ul>'
                    + '<li><strong>\ud83d\udcc5 28 juin 1914</strong> : attentat de Sarajevo</li>'
                    + '<li><strong>\ud83d\udcc5 1916</strong> : bataille de Verdun</li>'
                    + '<li><strong>\ud83d\udcc5 1915</strong> : genocide armenien</li>'
                    + '<li><strong>\ud83d\udcc5 1917</strong> : USA entrent en guerre + revolution russe</li>'
                    + '<li><strong>\ud83d\udcc5 11 novembre 1918</strong> : armistice</li>'
                    + '</ul>',
                flashcards: [
                    // CARD 1 — Alliances
                    {
                        question: 'Avant 1914 : quelles sont les deux alliances en Europe ?',
                        answer: '\ud83c\udfaf Deux camps se forment AVANT la guerre.\n\n'
                            + '\u2022 La TRIPLE-ENTENTE : France + Royaume-Uni + Russie.\n'
                            + '\u2022 La TRIPLE-ALLIANCE : Allemagne + Autriche-Hongrie + Italie.\n'
                            + 'Ces alliances sont comme des "pactes de defense".\n'
                            + 'Si un pays est attaque, ses allies viennent l\'aider.\n\n'
                            + 'En gros : l\'Europe est coupee en 2 equipes rivales.\n\n'
                            + 'Mot difficile : "alliance" = accord entre pays pour se defendre ensemble.\n\n'
                            + '\ud83d\udca1 Astuce dys : ENTENTE = ENsemble (EN-EN). Alliance = ALLemagne dedans (ALL).\n\n'
                            + '\ud83d\udcdd Piege Brevet : ne pas confondre Triple-Entente (France) et Triple-Alliance (Allemagne).'
                    },
                    // CARD 2 — Attentat Sarajevo
                    {
                        question: 'Que se passe-t-il le 28 juin 1914 a Sarajevo ?',
                        answer: '\ud83c\udfaf L\'archiduc Francois-Ferdinand est ASSASSINE.\n\n'
                            + 'Il est l\'heritier du trone d\'Autriche-Hongrie.\n'
                            + 'Un Serbe bosniaque, Gavrilo Princip, le tue.\n'
                            + 'L\'Autriche-Hongrie declare la guerre a la Serbie.\n'
                            + 'Les alliances s\'activent : effet DOMINO.\n\n'
                            + '\ud83d\udcc5 28 juin 1914 = le debut de tout.\n\n'
                            + 'En gros : un assassinat declenche un effet domino entre pays.\n\n'
                            + 'Mot difficile : "archiduc" = titre de prince en Autriche-Hongrie.\n\n'
                            + '\ud83d\udca1 Astuce dys : "SARajevo = ca SERT de declencheur" (SAR = SERT).\n\n'
                            + '\ud83d\udcdd Piege Brevet : l\'attentat est l\'ETINCELLE, pas la cause profonde. Les causes = alliances + nationalisme.'
                    },
                    // CARD 3 — Guerre de tranchees
                    {
                        question: 'C\'est quoi la guerre de tranchees ?',
                        answer: '\ud83c\udfaf A partir de fin 1914, le front se FIGE.\n\n'
                            + 'Les soldats creusent des fosses dans le sol.\n'
                            + 'Ils y vivent des mois : boue, rats, froid.\n'
                            + 'Les attaques font des milliers de morts.\n'
                            + 'Et le front avance de quelques metres seulement.\n'
                            + 'Les soldats sont surnommes les "poilus".\n\n'
                            + 'En gros : des soldats vivent dans des trous pendant 4 ans.\n\n'
                            + 'Mot difficile : "tranchees" = fosses creusees pour se proteger des tirs.\n\n'
                            + '\ud83d\udca1 Astuce dys : TRANCHEE = on TRANCHE la terre (on la coupe).\n\n'
                            + '\ud83d\udcdd Piege Brevet : la guerre de tranchees = le front OUEST. A l\'Est, ca bouge plus.'
                    },
                    // CARD 4 — Verdun
                    {
                        question: 'C\'est quoi la bataille de Verdun (1916) ?',
                        answer: '\ud83c\udfaf La bataille la plus SYMBOLIQUE de la guerre.\n\n'
                            + '\ud83d\udcc5 De fevrier a decembre 1916. Dix mois.\n'
                            + 'France contre Allemagne.\n'
                            + 'Environ 300 000 morts des deux cotes.\n'
                            + 'Le general PETAIN organise la defense.\n'
                            + 'Devise : "Ils ne passeront pas !"\n\n'
                            + 'En gros : des centaines de milliers de morts pour presque rien.\n\n'
                            + 'Mot difficile : "bataille" = affrontement arme localise dans un endroit.\n\n'
                            + '\ud83d\udca1 Astuce dys : 1916 = SEIZE. "A SEIZE ans, ils souffraient a Verdun."\n\n'
                            + '\ud83d\udcdd Piege Brevet : Petain est un HEROS en 1916. Mais en 1940, il COLLABORE avec les nazis. Ne pas confondre les deux periodes.'
                    },
                    // CARD 5 — Guerre totale
                    {
                        question: 'C\'est quoi une "guerre totale" ?',
                        answer: '\ud83c\udfaf Une guerre ou TOUTE la societe est mobilisee.\n\n'
                            + 'Pas seulement les soldats. Tout le pays participe.\n'
                            + '\u2022 Les FEMMES travaillent dans les usines d\'armes.\n'
                            + '\u2022 L\'ECONOMIE produit pour la guerre.\n'
                            + '\u2022 La PROPAGANDE manipule l\'opinion publique.\n'
                            + '\u2022 L\'ETAT controle la nourriture et l\'information.\n\n'
                            + 'En gros : c\'est pas juste l\'armee. C\'est TOUT LE PAYS qui fait la guerre.\n\n'
                            + 'Mot difficile : "propagande" = infos manipulees pour influencer les gens.\n\n'
                            + '\ud83d\udca1 Astuce dys : TOTALE = TOUT. Guerre totale = TOUT le monde participe.\n\n'
                            + '\ud83d\udcdd Piege Brevet : "guerre totale" est un terme a DEFINIR au brevet. 3 aspects : economique, humain, psychologique.'
                    },
                    // CARD 6 — Genocide armenien
                    {
                        question: 'C\'est quoi le genocide armenien (1915) ?',
                        answer: '\ud83c\udfaf Le PREMIER genocide du XXe siecle.\n\n'
                            + '\ud83d\udcc5 En 1915-1916.\n'
                            + 'L\'Empire OTTOMAN (Turquie actuelle) extermine les Armeniens.\n'
                            + 'Environ 1,2 million de morts.\n'
                            + 'Deportations, massacres, marches de la mort.\n'
                            + 'La Turquie ne reconnait toujours pas ce genocide.\n\n'
                            + 'En gros : un peuple vise pour etre elimine de facon organisee.\n\n'
                            + 'Mot difficile : "genocide" = extermination volontaire de tout un peuple.\n\n'
                            + '\ud83d\udca1 Astuce dys : GENO-CIDE = GENE (peuple) + CIDE (tuer). "Tuer un peuple."\n\n'
                            + '\ud83d\udcdd Piege Brevet : le genocide armenien est le PREMIER genocide reconnu. Ne pas le confondre avec la Shoah (1941-1945).'
                    },
                    // CARD 7 — Entree USA 1917
                    {
                        question: 'Pourquoi les USA entrent en guerre en 1917 ?',
                        answer: '\ud83c\udfaf \ud83d\udcc5 Avril 1917 : les USA rejoignent la Triple-Entente.\n\n'
                            + 'Pourquoi ? L\'Allemagne coule des bateaux americains.\n'
                            + 'Le president WILSON declare la guerre a l\'Allemagne.\n'
                            + 'Les soldats americains arrivent en France.\n'
                            + 'Ca change l\'equilibre : les Allies ont des renforts.\n\n'
                            + 'En gros : les USA arrivent en renfort. Ca aide a gagner la guerre.\n\n'
                            + 'Mot difficile : "Allies" = les pays de la Triple-Entente et leurs partenaires.\n\n'
                            + '\ud83d\udca1 Astuce dys : 1917 = "DIX-SEPT = les USA DISent STOP."\n\n'
                            + '\ud83d\udcdd Piege Brevet : en 1917, il y a DEUX evenements : USA + revolution russe. Les deux sont importants.'
                    },
                    // CARD 8 — Revolution russe 1917
                    {
                        question: 'Que se passe-t-il en Russie en 1917 ?',
                        answer: '\ud83c\udfaf \ud83d\udcc5 En 1917, la Russie a DEUX revolutions.\n\n'
                            + '\u2022 Fevrier 1917 : le tsar Nicolas II abdique. Fin du tsarisme.\n'
                            + '\u2022 Octobre 1917 : LENINE et les bolcheviks prennent le pouvoir.\n'
                            + 'Lenine impose le communisme.\n'
                            + 'La Russie sort de la guerre (paix de Brest-Litovsk, 1918).\n\n'
                            + 'En gros : le peuple russe renverse le tsar. Lenine installe le communisme.\n\n'
                            + 'Mot difficile : "bolcheviks" = revolutionnaires communistes menes par Lenine.\n\n'
                            + '\ud83d\udca1 Astuce dys : "LENINE fait sa revoLUTION en 17."\n\n'
                            + '\ud83d\udcdd Piege Brevet : la revolution russe explique POURQUOI l\'URSS existe ensuite. C\'est la base du totalitarisme sovietique.'
                    },
                    // CARD 9 — Armistice 11/11/1918
                    {
                        question: 'Que se passe-t-il le 11 novembre 1918 ?',
                        answer: '\ud83c\udfaf \ud83d\udcc5 Le 11 novembre 1918 : l\'ARMISTICE est signe.\n\n'
                            + 'L\'Allemagne arrete les combats.\n'
                            + 'C\'est signe dans un wagon a Rethondes (foret de Compiegne).\n'
                            + 'La guerre est FINIE.\n'
                            + 'Le 11 novembre est jour FERIE en France.\n\n'
                            + 'En gros : le 11/11/1918 = la fin de la Premiere Guerre mondiale.\n\n'
                            + 'Mot difficile : "armistice" = accord pour ARRETER les combats. Ce n\'est pas la paix definitive.\n\n'
                            + '\ud83d\udca1 Astuce dys : 11/11 = le meme chiffre repete. Facile a retenir. "11 novembre = 11/11."\n\n'
                            + '\ud83d\udcdd Piege Brevet : l\'armistice =/= le traite de paix. Le traite de VERSAILLES vient en 1919.'
                    },
                    // CARD 10 — Bilan 10M morts
                    {
                        question: 'Quel est le bilan de la Premiere Guerre mondiale ?',
                        answer: '\ud83c\udfaf Un bilan TERRIBLE pour l\'Europe.\n\n'
                            + '\u2022 Environ 10 MILLIONS de morts.\n'
                            + '\u2022 20 millions de blesses.\n'
                            + '\u2022 Des millions de "gueules cassees" (visages defigures).\n'
                            + '\u2022 La France perd 1,4 million de soldats.\n'
                            + '\u2022 Des regions entieres sont detruites.\n\n'
                            + 'En gros : 10 millions de morts. L\'Europe est devastee.\n\n'
                            + 'Mot difficile : "gueules cassees" = soldats au visage detruit par les obus.\n\n'
                            + '\ud83d\udca1 Astuce dys : "10 M de morts = 10 Millions. M comme Mort et comme Million."\n\n'
                            + '\ud83d\udcdd Piege Brevet : le bilan n\'est pas seulement humain. Il y a aussi le bilan MATERIEL (villes detruites) et MORAL (traumatisme).'
                    },
                    // CARD 11 — Traite de Versailles
                    {
                        question: 'C\'est quoi le traite de Versailles (1919) ?',
                        answer: '\ud83c\udfaf \ud83d\udcc5 Le 28 juin 1919 : le traite de PAIX est signe.\n\n'
                            + 'L\'Allemagne est jugee RESPONSABLE de la guerre.\n'
                            + 'Elle doit payer des REPARATIONS enormes.\n'
                            + 'Elle perd l\'Alsace-Lorraine (rendue a la France).\n'
                            + 'Son armee est reduite.\n'
                            + 'La SDN (Societe des Nations) est creee pour la paix.\n\n'
                            + 'En gros : l\'Allemagne est humiliee par le traite. Ca prepare la vengeance.\n\n'
                            + 'Mot difficile : "SDN" = Societe des Nations, ancetre de l\'ONU.\n\n'
                            + '\ud83d\udca1 Astuce dys : "VERSAILLES 1919 = VER-19. Comme un VER qui ronge l\'Allemagne."\n\n'
                            + '\ud83d\udcdd Piege Brevet : ce traite HUMILIE l\'Allemagne. Hitler s\'en servira pour monter au pouvoir.'
                    },
                    // CARD 12 — SDN
                    {
                        question: 'C\'est quoi la SDN ?',
                        answer: '\ud83c\udfaf La SDN = Societe des Nations.\n\n'
                            + 'Creee en 1919 apres le traite de Versailles.\n'
                            + 'But : maintenir la PAIX dans le monde.\n'
                            + 'Idee du president americain WILSON.\n'
                            + 'Probleme : les USA n\'en font PAS partie !\n'
                            + 'La SDN est trop faible. Elle ne peut pas empecher la Seconde Guerre.\n\n'
                            + 'En gros : la SDN devait empecher les guerres. Elle a echoue.\n\n'
                            + 'Mot difficile : "SDN" = organisation internationale pour la paix. Remplacee par l\'ONU en 1945.\n\n'
                            + '\ud83d\udca1 Astuce dys : "SDN = Sert a Dal que Nib" (ca n\'a servi a rien).\n\n'
                            + '\ud83d\udcdd Piege Brevet : la SDN =/= l\'ONU. La SDN, c\'est AVANT 1945. L\'ONU, c\'est APRES.'
                    },
                    // CARD 13 — Violence de masse / experience combattante
                    {
                        question: 'C\'est quoi la "violence de masse" pendant la guerre ?',
                        answer: '\ud83c\udfaf La violence de masse = une violence EXTREME a grande echelle.\n\n'
                            + '\u2022 Dans les tranchees : obus, gaz toxiques, baionnettes.\n'
                            + '\u2022 Le genocide armenien = violence contre un peuple entier.\n'
                            + '\u2022 Les bombardements sur les civils.\n'
                            + '\u2022 Des millions de morts en quelques mois.\n\n'
                            + 'En gros : la guerre tue a une echelle jamais vue avant.\n\n'
                            + 'Mot difficile : "violence de masse" = violence qui touche des millions de personnes.\n\n'
                            + '\ud83d\udca1 Astuce dys : "MASSE = MASSIF. Violence massive, pas un petit combat."\n\n'
                            + '\ud83d\udcdd Piege Brevet : "violence de masse" est une NOTION CLE. Tu dois savoir la definir et donner 2 exemples.'
                    },
                    // CARD 14 — Role des femmes
                    {
                        question: 'Quel role jouent les femmes pendant la guerre ?',
                        answer: '\ud83c\udfaf Les hommes sont au front. Les femmes les REMPLACENT.\n\n'
                            + '\u2022 Elles travaillent dans les USINES d\'armement (les "munitionnettes").\n'
                            + '\u2022 Elles cultivent les CHAMPS.\n'
                            + '\u2022 Elles soignent les blesses (infirmieres).\n'
                            + '\u2022 Elles font tourner l\'ECONOMIE du pays.\n\n'
                            + 'En gros : sans les femmes, la France n\'aurait pas pu tenir 4 ans.\n\n'
                            + 'Mot difficile : "munitionnettes" = femmes qui fabriquent les munitions.\n\n'
                            + '\ud83d\udca1 Astuce dys : "MUNItionnettes = elles font les MUNItions."\n\n'
                            + '\ud83d\udcdd Piege Brevet : au brevet, on te demande souvent le role des femmes. C\'est la preuve de la GUERRE TOTALE.'
                    },
                    // CARD 15 — Propagande
                    {
                        question: 'C\'est quoi la propagande pendant la guerre ?',
                        answer: '\ud83c\udfaf La propagande = des informations MANIPULEES par l\'Etat.\n\n'
                            + 'But : convaincre les citoyens de soutenir la guerre.\n'
                            + '\u2022 Les journaux MENTENT sur les victoires.\n'
                            + '\u2022 Des affiches montrent l\'ennemi comme un MONSTRE.\n'
                            + '\u2022 La censure INTERDIT les mauvaises nouvelles.\n'
                            + 'On appelle ca le "bourrage de crane".\n\n'
                            + 'En gros : l\'Etat manipule l\'info pour garder le moral du peuple.\n\n'
                            + 'Mot difficile : "censure" = quand l\'Etat interdit certaines informations.\n\n'
                            + '\ud83d\udca1 Astuce dys : "PROPAGANDE = on PROPAGE (diffuse) des mensonges."\n\n'
                            + '\ud83d\udcdd Piege Brevet : si on te montre une affiche de guerre, c\'est surement de la propagande. Analyse avec esprit CRITIQUE.'
                    }
                ],
                quiz: [
                    { question: 'La Premiere Guerre mondiale commence en :', options: ['1912', '1914', '1916', '1918'], correctIndex: 1, explanation: '\ud83d\udcc5 La guerre commence en 1914. Declencheur : attentat de Sarajevo le 28 juin 1914.' },
                    { question: 'L\'attentat de Sarajevo tue :', options: ['Le roi de France', 'L\'archiduc Francois-Ferdinand', 'Le president americain', 'Le tsar de Russie'], correctIndex: 1, explanation: '\ud83c\udfaf L\'archiduc Francois-Ferdinand, heritier d\'Autriche-Hongrie, est assassine le 28 juin 1914.' },
                    { question: 'La bataille de Verdun a lieu en :', options: ['1914', '1915', '1916', '1918'], correctIndex: 2, explanation: '\ud83d\udcc5 Verdun = 1916. Dix mois de combats. 300 000 morts. LE symbole de la guerre de tranchees.' },
                    { question: 'Le genocide armenien est organise par :', options: ['L\'Allemagne', 'La France', 'L\'Empire ottoman', 'La Russie'], correctIndex: 2, explanation: '\ud83c\udfaf L\'Empire ottoman (Turquie actuelle) organise le genocide en 1915. Premier genocide du XXe siecle.' },
                    { question: 'Une "guerre totale" mobilise :', options: ['Seulement les soldats', 'Toute la societe', 'Seulement les hommes', 'Seulement l\'armee de terre'], correctIndex: 1, explanation: '\ud83c\udfaf Guerre totale = TOUTE la societe : soldats, femmes, economie, propagande.' },
                    { question: 'L\'armistice de la Premiere Guerre est signe le :', options: ['14 juillet 1918', '8 mai 1918', '11 novembre 1918', '6 juin 1918'], correctIndex: 2, explanation: '\ud83d\udcc5 11 novembre 1918 = armistice. Jour ferie en France. Facile : 11/11.' },
                    { question: 'Combien de morts au total pendant la Premiere Guerre ?', options: ['1 million', '5 millions', '10 millions', '60 millions'], correctIndex: 2, explanation: '\ud83c\udfaf Environ 10 millions de morts au total. 1,4 million rien que pour la France.' },
                    { question: 'Les USA entrent en guerre en :', options: ['1914', '1916', '1917', '1918'], correctIndex: 2, explanation: '\ud83d\udcc5 Avril 1917 = entree en guerre des USA. Meme annee que la revolution russe.' },
                    { question: 'Le traite de Versailles est signe en :', options: ['1918', '1919', '1920', '1921'], correctIndex: 1, explanation: '\ud83d\udcc5 28 juin 1919 = traite de Versailles. L\'Allemagne est jugee responsable et humiliee.' },
                    { question: 'La Triple-Entente regroupe :', options: ['Allemagne + Autriche + Italie', 'France + Royaume-Uni + Russie', 'USA + France + Italie', 'Russie + Allemagne + Japon'], correctIndex: 1, explanation: '\ud83c\udfaf Triple-Entente = France + Royaume-Uni + Russie. Triple-Alliance = Allemagne + Autriche-Hongrie + Italie.' }
                ]
            },

            // ================================================================
            // SECTION 2 : TOTALITARISMES ET DEMOCRATIES FRAGILISEES
            // ================================================================
            {
                id: 'totalitarismes',
                title: 'Totalitarismes et democraties fragilisees',
                icon: '\u270a',
                content: '<h3>\u26a0\ufe0f L\'entre-deux-guerres (1919-1939)</h3>'
                    + '<ul>'
                    + '<li><strong>3 regimes totalitaires</strong> : URSS (Staline), Italie (Mussolini), Allemagne (Hitler)</li>'
                    + '<li><strong>1929</strong> : crise economique mondiale</li>'
                    + '<li><strong>1936</strong> : Front populaire en France</li>'
                    + '</ul>',
                flashcards: [
                    // CARD 1 — Definition totalitarisme
                    {
                        question: 'C\'est quoi un regime totalitaire ?',
                        answer: '\ud83c\udfaf Un regime qui controle TOUT dans la vie des gens.\n\n'
                            + '3 points communs a tous les totalitarismes :\n'
                            + '\u2022 Un CHEF tout-puissant (culte de la personnalite).\n'
                            + '\u2022 Un PARTI UNIQUE (pas d\'opposition).\n'
                            + '\u2022 PROPAGANDE massive + POLICE politique.\n'
                            + 'L\'Etat decide de tout : politique, economie, culture, vie privee.\n\n'
                            + 'En gros : dans un regime totalitaire, tu n\'as AUCUNE liberte.\n\n'
                            + 'Mot difficile : "culte de la personnalite" = adoration forcee du chef.\n\n'
                            + '\ud83d\udca1 Astuce dys : TOTAL-itarisme = controle TOTAL. Retiens : "1 chef, 1 parti, 0 liberte."\n\n'
                            + '\ud83d\udcdd Piege Brevet : au brevet, tu dois savoir COMPARER les 3 totalitarismes (URSS, Italie, Allemagne). Points communs ET differences.'
                    },
                    // CARD 2 — Staline et l'URSS
                    {
                        question: 'Comment Staline dirige-t-il l\'URSS ?',
                        answer: '\ud83c\udfaf STALINE dirige l\'URSS de 1924 a 1953.\n\n'
                            + 'Il impose un regime de TERREUR :\n'
                            + '\u2022 COLLECTIVISATION forcee des terres agricoles.\n'
                            + '\u2022 Plans quinquennaux : industrialisation forcee.\n'
                            + '\u2022 Le GOULAG : camps de travail force en Siberie.\n'
                            + '\u2022 Les PURGES : il elimine tous ses opposants.\n'
                            + '\u2022 PROPAGANDE : affiches, statues, journaux a sa gloire.\n\n'
                            + 'En gros : Staline fait regner la peur. Qui s\'oppose meurt.\n\n'
                            + 'Mot difficile : "goulag" = camps de travail force. Des millions de prisonniers.\n\n'
                            + '\ud83d\udca1 Astuce dys : "Staline = STAL comme ACIER (stal = acier en russe). Dur comme l\'acier."\n\n'
                            + '\ud83d\udcdd Piege Brevet : Staline est COMMUNISTE. Hitler est NAZI. Ce n\'est pas la meme ideologie, mais les METHODES se ressemblent.'
                    },
                    // CARD 3 — Collectivisation
                    {
                        question: 'C\'est quoi la collectivisation en URSS ?',
                        answer: '\ud83c\udfaf Staline OBLIGE les paysans a donner leurs terres.\n\n'
                            + 'Les terres deviennent des KOLKHOZES (fermes collectives).\n'
                            + 'Les paysans ne possedent plus rien.\n'
                            + 'Ceux qui refusent sont les KOULAKS.\n'
                            + 'Ils sont deportes ou tues.\n'
                            + 'Resultat : FAMINE en Ukraine (Holodomor, 1932-33). Millions de morts.\n\n'
                            + 'En gros : Staline vole les terres des paysans. Des millions meurent de faim.\n\n'
                            + 'Mot difficile : "kolkhoze" = ferme geree par l\'Etat sovietique.\n\n'
                            + '\ud83d\udca1 Astuce dys : "COLLECTivisation = on COLLECTE (prend) les terres."\n\n'
                            + '\ud83d\udcdd Piege Brevet : la collectivisation montre la VIOLENCE du regime. C\'est un bon exemple de totalitarisme en action.'
                    },
                    // CARD 4 — Propagande sovietique
                    {
                        question: 'Comment fonctionne la propagande en URSS ?',
                        answer: '\ud83c\udfaf Staline controle TOUTE l\'information.\n\n'
                            + '\u2022 Des AFFICHES partout montrent Staline en hero.\n'
                            + '\u2022 Les JOURNAUX ne disent que du bien de lui.\n'
                            + '\u2022 Les ECOLES enseignent la gloire du communisme.\n'
                            + '\u2022 Les PHOTOS sont truquees (on efface les ennemis).\n'
                            + '\u2022 Des STATUES geantes de Staline dans toutes les villes.\n\n'
                            + 'En gros : tout est fait pour que le peuple ADORE Staline.\n\n'
                            + 'Mot difficile : "culte de la personnalite" = le chef est presente comme un dieu.\n\n'
                            + '\ud83d\udca1 Astuce dys : "PROPAGANDE = on PROPAGE des mensonges. Pro-PA-GANDE = PAS la verite."\n\n'
                            + '\ud83d\udcdd Piege Brevet : si on te montre une affiche sovietique, DECRIS + EXPLIQUE que c\'est de la propagande.'
                    },
                    // CARD 5 — Mussolini / Italie fasciste
                    {
                        question: 'Comment Mussolini prend-il le pouvoir en Italie ?',
                        answer: '\ud83c\udfaf \ud83d\udcc5 En 1922, Mussolini prend le pouvoir en Italie.\n\n'
                            + 'Il organise la "marche sur Rome" avec ses partisans.\n'
                            + 'Le roi le nomme chef du gouvernement.\n'
                            + 'Il installe le FASCISME :\n'
                            + '\u2022 Un PARTI UNIQUE.\n'
                            + '\u2022 Pas de LIBERTE (presse, opposition interdites).\n'
                            + '\u2022 NATIONALISME extreme : "l\'Italie doit redevenir grande."\n'
                            + 'Il se fait appeler le "DUCE" (le chef).\n\n'
                            + 'En gros : Mussolini cree la premiere dictature fasciste d\'Europe.\n\n'
                            + 'Mot difficile : "fascisme" = de "fascio" (faisceau en italien). Symbole de force.\n\n'
                            + '\ud83d\udca1 Astuce dys : "MUSSOlini = le MUSCLE de l\'Italie. 1922 = VINGT-DEUX comme les muscles."\n\n'
                            + '\ud83d\udcdd Piege Brevet : Mussolini est le PREMIER dirigeant totalitaire en Europe (1922, avant Hitler en 1933).'
                    },
                    // CARD 6 — Hitler au pouvoir
                    {
                        question: 'Comment Hitler arrive-t-il au pouvoir ?',
                        answer: '\ud83c\udfaf \ud83d\udcc5 Le 30 janvier 1933, Hitler devient CHANCELIER.\n\n'
                            + 'L\'Allemagne souffre : crise de 1929, chomage, humiliation de Versailles.\n'
                            + 'Hitler promet du travail et la grandeur de l\'Allemagne.\n'
                            + 'Il est elu LEGALEMENT (par les votes).\n'
                            + 'Puis il supprime les libertes et installe la DICTATURE.\n'
                            + 'Parti unique : le NSDAP (parti nazi).\n\n'
                            + 'En gros : Hitler arrive au pouvoir par les urnes, puis detruit la democratie.\n\n'
                            + 'Mot difficile : "chancelier" = chef du gouvernement en Allemagne.\n\n'
                            + '\ud83d\udca1 Astuce dys : "1933 = TRENTE-TROIS. Hitler a TRENTRE-TROIS raisons de detruire la democratie."\n\n'
                            + '\ud83d\udcdd Piege Brevet : Hitler arrive au pouvoir LEGALEMENT. C\'est le piege : la democratie peut se detruire elle-meme.'
                    },
                    // CARD 7 — Nazisme ideologie
                    {
                        question: 'C\'est quoi l\'ideologie nazie ?',
                        answer: '\ud83c\udfaf Le nazisme repose sur des idees de HAINE.\n\n'
                            + '\u2022 RACISME : les "Aryens" seraient une "race superieure."\n'
                            + '\u2022 ANTISEMITISME : haine des Juifs.\n'
                            + '\u2022 ESPACE VITAL : l\'Allemagne doit conquerir des territoires a l\'Est.\n'
                            + '\u2022 EUGENISME : les "faibles" doivent etre elimines.\n'
                            + 'Tout ca est FAUX et criminel. Mais des millions y ont cru.\n\n'
                            + 'En gros : le nazisme = racisme + antisemitisme + volonte de domination.\n\n'
                            + 'Mot difficile : "antisemitisme" = haine des Juifs.\n\n'
                            + '\ud83d\udca1 Astuce dys : "NAZI = NAtional + soZIaliste. Retiens : national = le pays, socialiste = fausse promesse au peuple."\n\n'
                            + '\ud83d\udcdd Piege Brevet : le nazisme n\'est PAS du socialisme. Le mot "socialiste" dans le nom est TROMPEUR. C\'est de l\'extreme droite.'
                    },
                    // CARD 8 — Lois de Nuremberg + Nuit de Cristal
                    {
                        question: 'C\'est quoi les lois de Nuremberg et la Nuit de Cristal ?',
                        answer: '\ud83c\udfaf Deux etapes de la PERSECUTION des Juifs en Allemagne.\n\n'
                            + '\ud83d\udcc5 1935 : LOIS DE NUREMBERG.\n'
                            + 'Les Juifs perdent la citoyennete allemande.\n'
                            + 'Mariages mixtes interdits. Juifs exclus de la societe.\n\n'
                            + '\ud83d\udcc5 9-10 novembre 1938 : NUIT DE CRISTAL.\n'
                            + 'Des magasins et synagogues juifs sont detruits.\n'
                            + '30 000 Juifs sont arretes. Violences massives.\n\n'
                            + 'En gros : les nazis excluent puis attaquent les Juifs AVANT la guerre.\n\n'
                            + 'Mot difficile : "synagogue" = lieu de priere juif.\n\n'
                            + '\ud83d\udca1 Astuce dys : "Nuit de CRISTAL = les VITRES brisees font du cristal par terre."\n\n'
                            + '\ud83d\udcdd Piege Brevet : ces evenements montrent que la persecution des Juifs commence AVANT la Shoah (avant 1941).'
                    },
                    // CARD 9 — Crise de 1929
                    {
                        question: 'C\'est quoi la crise de 1929 ?',
                        answer: '\ud83c\udfaf \ud83d\udcc5 Le 24 octobre 1929 : la Bourse de New York s\'effondre.\n\n'
                            + 'On appelle ce jour le "jeudi noir".\n'
                            + 'Les banques font faillite. Les entreprises ferment.\n'
                            + 'Des millions de gens perdent leur emploi.\n'
                            + 'La crise se propage dans le MONDE entier.\n'
                            + 'En Allemagne : 6 millions de chomeurs.\n\n'
                            + 'En gros : la crise de 1929 ruine le monde et aide les dictateurs a monter.\n\n'
                            + 'Mot difficile : "krach boursier" = effondrement brutal des prix en Bourse.\n\n'
                            + '\ud83d\udca1 Astuce dys : "29 = VINGT-NEUF. Tout VA EN-dessous (VEN = vingt-neuf). Ca descend."\n\n'
                            + '\ud83d\udcdd Piege Brevet : la crise de 1929 est une CAUSE de la montee des extremes. Les gens en colere votent pour les dictateurs.'
                    },
                    // CARD 10 — Montee des extremes
                    {
                        question: 'Pourquoi les extremes montent dans les annees 1930 ?',
                        answer: '\ud83c\udfaf La crise de 1929 fait SOUFFRIR les peuples.\n\n'
                            + '\u2022 Le CHOMAGE est massif. Les gens ont faim.\n'
                            + '\u2022 Le traite de Versailles HUMILIE l\'Allemagne.\n'
                            + '\u2022 Les democraties semblent IMPUISSANTES.\n'
                            + '\u2022 Les dictateurs promettent du travail et de l\'ordre.\n'
                            + '\u2022 La PEUR du communisme pousse vers l\'extreme droite.\n\n'
                            + 'En gros : quand les gens souffrent, ils veulent des solutions simples. Les dictateurs en profitent.\n\n'
                            + 'Mot difficile : "extremisme" = idees politiques radicales (extreme gauche ou extreme droite).\n\n'
                            + '\ud83d\udca1 Astuce dys : "EXTREME = a l\'EXTREMITE. Trop a gauche ou trop a droite."\n\n'
                            + '\ud83d\udcdd Piege Brevet : la montee des extremes est liee a la CRISE. Pas de crise = pas de Hitler.'
                    },
                    // CARD 11 — Front populaire 1936
                    {
                        question: 'C\'est quoi le Front populaire (1936) ?',
                        answer: '\ud83c\udfaf \ud83d\udcc5 En 1936, la GAUCHE gagne les elections en France.\n\n'
                            + 'Leon BLUM dirige le gouvernement (Front populaire).\n'
                            + 'Grandes reformes :\n'
                            + '\u2022 2 semaines de CONGES PAYES (les ouvriers voient la mer !).\n'
                            + '\u2022 Semaine de 40 HEURES (au lieu de 48).\n'
                            + '\u2022 CONVENTIONS collectives.\n'
                            + 'Mais le Front populaire dure seulement 1 an (1936-1937).\n\n'
                            + 'En gros : en 1936, les ouvriers obtiennent des vacances et moins de travail.\n\n'
                            + 'Mot difficile : "conges payes" = vacances payees par l\'employeur.\n\n'
                            + '\ud83d\udca1 Astuce dys : "1936 = TRENTE-SIX. Les ouvriers ont la vie qui BRILLE en 36."\n\n'
                            + '\ud83d\udcdd Piege Brevet : le Front populaire montre que la DEMOCRATIE francaise RESISTE face aux extremes.'
                    },
                    // CARD 12 — Comparaison 3 totalitarismes
                    {
                        question: 'Quels sont les points communs et differences entre les 3 totalitarismes ?',
                        answer: '\ud83c\udfaf POINTS COMMUNS des 3 totalitarismes :\n'
                            + '\u2022 1 chef, 1 parti unique, pas de liberte.\n'
                            + '\u2022 Propagande massive, police politique.\n'
                            + '\u2022 Violence contre les opposants.\n\n'
                            + '\u26a0\ufe0f DIFFERENCES :\n'
                            + '\u2022 URSS (Staline) : ideologie COMMUNISTE. Pas de propriete privee.\n'
                            + '\u2022 Italie (Mussolini) : FASCISME nationaliste.\n'
                            + '\u2022 Allemagne (Hitler) : NAZISME raciste et antisemite.\n\n'
                            + 'En gros : methodes semblables, ideologies differentes.\n\n'
                            + '\ud83d\udca1 Astuce dys : "3 T : Terreur, Totalitaire, Tout-controle."\n\n'
                            + '\ud83d\udcdd Piege Brevet : le tableau comparatif est un GRAND classique du brevet. Apprends les 3 colonnes.'
                    },
                    // CARD 13 — Democraties fragilisees
                    {
                        question: 'Pourquoi les democraties sont-elles fragilisees ?',
                        answer: '\ud83c\udfaf Apres 1918, les democraties sont en CRISE.\n\n'
                            + '\u2022 Crise de 1929 : chomage massif, misere.\n'
                            + '\u2022 Les gouvernements democratiques semblent FAIBLES.\n'
                            + '\u2022 Les regimes autoritaires promettent l\'ORDRE.\n'
                            + '\u2022 En Allemagne, la Republique de Weimar est fragile.\n'
                            + '\u2022 En France, des ligues d\'extreme droite menacent (6 fevrier 1934).\n\n'
                            + 'En gros : la democratie est menacee quand les gens perdent confiance.\n\n'
                            + 'Mot difficile : "Republique de Weimar" = la democratie allemande de 1919 a 1933.\n\n'
                            + '\ud83d\udca1 Astuce dys : "WEIMAR = WEIL c\'est MAL (Weimar va mal)."\n\n'
                            + '\ud83d\udcdd Piege Brevet : la France RESISTE aux extremes (Front populaire 1936). L\'Allemagne NON (Hitler 1933). Compare les deux.'
                    },
                    // CARD 14 — Dates cles totalitarismes
                    {
                        question: 'Quelles sont les dates cles des totalitarismes ?',
                        answer: '\ud83d\udcc5 LES DATES A RETENIR :\n\n'
                            + '\u2022 1922 : Mussolini au pouvoir en Italie.\n'
                            + '\u2022 1924 : Staline au pouvoir en URSS.\n'
                            + '\u2022 1929 : crise economique mondiale.\n'
                            + '\u2022 1933 : Hitler chancelier en Allemagne.\n'
                            + '\u2022 1935 : lois de Nuremberg.\n'
                            + '\u2022 1936 : Front populaire en France.\n'
                            + '\u2022 1938 : Nuit de Cristal.\n\n'
                            + 'En gros : toutes ces dates sont a connaitre PAR COEUR.\n\n'
                            + '\ud83d\udca1 Astuce dys : "22-24-29-33-35-36-38. Ca monte ! Comme une escalier de malheurs."\n\n'
                            + '\ud83d\udcdd Piege Brevet : les dates te permettent de SITUER les evenements sur une frise chronologique. C\'est souvent demande.'
                    }
                ],
                quiz: [
                    { question: 'Un regime totalitaire a :', options: ['Plusieurs partis', 'Un parti unique', 'Pas de chef', 'Des elections libres'], correctIndex: 1, explanation: '\ud83c\udfaf Totalitarisme = 1 chef + 1 parti unique + 0 liberte. Pas d\'opposition possible.' },
                    { question: 'Staline dirige :', options: ['L\'Italie fasciste', 'L\'Allemagne nazie', 'L\'URSS communiste', 'L\'Espagne franquiste'], correctIndex: 2, explanation: '\ud83c\udfaf Staline dirige l\'URSS de 1924 a 1953. Regime communiste : collectivisation, Goulag, purges.' },
                    { question: 'Mussolini prend le pouvoir en :', options: ['1914', '1922', '1933', '1939'], correctIndex: 1, explanation: '\ud83d\udcc5 1922 : Mussolini prend le pouvoir en Italie. Premier regime fasciste d\'Europe.' },
                    { question: 'Hitler devient chancelier en :', options: ['1922', '1929', '1933', '1939'], correctIndex: 2, explanation: '\ud83d\udcc5 30 janvier 1933. Hitler arrive au pouvoir LEGALEMENT, puis detruit la democratie.' },
                    { question: 'Les lois de Nuremberg (1935) retirent aux Juifs :', options: ['Leur maison', 'Leur citoyennete', 'Leur voiture', 'Leur religion'], correctIndex: 1, explanation: '\ud83c\udfaf Les lois de Nuremberg (1935) retirent la citoyennete allemande aux Juifs et interdisent les mariages mixtes.' },
                    { question: 'La crise de 1929 commence par :', options: ['Une guerre', 'Un krach boursier a New York', 'Une revolution', 'Une pandemie'], correctIndex: 1, explanation: '\ud83d\udcc5 24 octobre 1929 = "jeudi noir". La Bourse de New York s\'effondre. Crise mondiale.' },
                    { question: 'Le Front populaire donne aux ouvriers :', options: ['Le droit de vote', 'Les conges payes', 'Le telephone', 'La television'], correctIndex: 1, explanation: '\ud83c\udfaf 1936 : le Front populaire accorde 2 semaines de conges payes et la semaine de 40h.' },
                    { question: 'La Nuit de Cristal a lieu en :', options: ['1933', '1935', '1938', '1941'], correctIndex: 2, explanation: '\ud83d\udcc5 9-10 novembre 1938. Magasins et synagogues juifs detruits. 30 000 Juifs arretes.' },
                    { question: 'Le Goulag ce sont des :', options: ['Ecoles sovietiques', 'Camps de travail force', 'Usines modernes', 'Hopitaux'], correctIndex: 1, explanation: '\ud83c\udfaf Le Goulag = systeme de camps de travail force en Siberie. Des millions de prisonniers sous Staline.' },
                    { question: 'Le Front populaire est dirige par :', options: ['De Gaulle', 'Petain', 'Leon Blum', 'Hitler'], correctIndex: 2, explanation: '\ud83c\udfaf Leon Blum, socialiste, dirige le Front populaire en 1936. Conges payes, semaine de 40h.' }
                ]
            },

            // ================================================================
            // SECTION 3 : LA SECONDE GUERRE MONDIALE (1939-1945)
            // ================================================================
            {
                id: 'ww2',
                title: 'La Seconde Guerre mondiale (1939-1945)',
                icon: '\ud83d\udd25',
                content: '<h3>\u26a0\ufe0f La pire guerre de l\'histoire</h3>'
                    + '<ul>'
                    + '<li><strong>\ud83d\udcc5 1er sept. 1939</strong> : invasion de la Pologne</li>'
                    + '<li><strong>\ud83d\udcc5 Juin 1940</strong> : defaite de la France</li>'
                    + '<li><strong>\ud83d\udcc5 6 juin 1944</strong> : Debarquement en Normandie</li>'
                    + '<li><strong>\ud83d\udcc5 8 mai 1945</strong> : capitulation Allemagne</li>'
                    + '<li><strong>\ud83d\udcc5 6 aout 1945</strong> : Hiroshima</li>'
                    + '</ul>',
                flashcards: [
                    // CARD 1 — Causes WW2
                    {
                        question: 'Pourquoi la Seconde Guerre mondiale eclate en 1939 ?',
                        answer: '\ud83c\udfaf Hitler veut CONQUERIR l\'Europe.\n\n'
                            + 'Il annexe l\'Autriche (1938) puis la Tchecoslovaquie.\n'
                            + 'Les democraties ne reagissent pas (politique d\'apaisement).\n'
                            + '\ud83d\udcc5 Le 1er septembre 1939 : l\'Allemagne envahit la POLOGNE.\n'
                            + 'La France et le Royaume-Uni declarent la guerre.\n\n'
                            + 'En gros : Hitler grignote l\'Europe. Quand il va trop loin, la guerre eclate.\n\n'
                            + 'Mot difficile : "appeasement" (apaisement) = ceder pour eviter le conflit.\n\n'
                            + '\ud83d\udca1 Astuce dys : "39 = TRENTE-NEUF. La guerre eclate quand Hitler va TROP NEUF (trop loin)."\n\n'
                            + '\ud83d\udcdd Piege Brevet : la politique d\'apaisement est souvent critiquee. "Ceder n\'evite pas la guerre."'
                    },
                    // CARD 2 — Blitzkrieg
                    {
                        question: 'C\'est quoi la Blitzkrieg ?',
                        answer: '\ud83c\udfaf Blitzkrieg = "guerre eclair" en allemand.\n\n'
                            + 'Strategie d\'Hitler : attaquer TRES VITE avec des chars.\n'
                            + 'Les avions bombardent, les chars foncent, l\'infanterie suit.\n'
                            + 'L\'ennemi n\'a pas le temps de reagir.\n'
                            + 'La Pologne tombe en 4 semaines (sept. 1939).\n'
                            + 'La France tombe en 6 semaines (mai-juin 1940).\n\n'
                            + 'En gros : l\'Allemagne gagne tres vite grace a des attaques ultra-rapides.\n\n'
                            + 'Mot difficile : "Blitzkrieg" = blitz (eclair) + krieg (guerre).\n\n'
                            + '\ud83d\udca1 Astuce dys : "BLITZ = comme un ECLAIR. Ca va SUPER vite."\n\n'
                            + '\ud83d\udcdd Piege Brevet : la Blitzkrieg explique POURQUOI la France perd si vite en 1940.'
                    },
                    // CARD 3 — Defaite France juin 1940
                    {
                        question: 'Comment la France est-elle vaincue en juin 1940 ?',
                        answer: '\ud83c\udfaf \ud83d\udcc5 Mai-juin 1940 : la France perd en 6 SEMAINES.\n\n'
                            + 'L\'Allemagne contourne la ligne Maginot par la Belgique.\n'
                            + 'L\'armee francaise est submergee.\n'
                            + 'Des millions de Francais fuient : c\'est l\'EXODE.\n'
                            + 'Le marechal PETAIN demande l\'armistice (22 juin 1940).\n'
                            + 'La France est coupee en deux : Nord occupe, Sud "libre".\n\n'
                            + 'En gros : la France perd tres vite. C\'est un choc enorme.\n\n'
                            + 'Mot difficile : "exode" = fuite massive de la population.\n\n'
                            + '\ud83d\udca1 Astuce dys : "MAGINOT = ca a MAL FINI. Les Allemands l\'ont contournee."\n\n'
                            + '\ud83d\udcdd Piege Brevet : la defaite de 1940 mene a DEUX choix : Petain (collaboration) ou De Gaulle (resistance).'
                    },
                    // CARD 4 — Regime de Vichy
                    {
                        question: 'C\'est quoi le regime de Vichy ?',
                        answer: '\ud83c\udfaf Apres la defaite, PETAIN installe un regime a Vichy.\n\n'
                            + '\ud83d\udcc5 10 juillet 1940 : Petain obtient les pleins pouvoirs.\n'
                            + 'C\'est la fin de la Republique.\n'
                            + 'Devise : "Travail, Famille, Patrie" (pas "Liberte, Egalite, Fraternite").\n'
                            + 'Vichy COLLABORE avec les nazis.\n'
                            + 'La police francaise arrete des Juifs.\n\n'
                            + 'En gros : Vichy aide les nazis au lieu de les combattre.\n\n'
                            + 'Mot difficile : "collaboration" = travailler AVEC l\'ennemi.\n\n'
                            + '\ud83d\udca1 Astuce dys : "VICHY = c\'est VICieux (traitre)."\n\n'
                            + '\ud83d\udcdd Piege Brevet : ne dis JAMAIS que "la France" a collabore. Dis "le regime de Vichy". La France, c\'est aussi la Resistance.'
                    },
                    // CARD 5 — Rafle Vel d'Hiv
                    {
                        question: 'C\'est quoi la rafle du Vel d\'Hiv (1942) ?',
                        answer: '\ud83c\udfaf \ud83d\udcc5 16-17 juillet 1942 : la plus grande rafle en France.\n\n'
                            + 'La police FRANCAISE arrete plus de 13 000 Juifs a Paris.\n'
                            + 'Dont 4 000 enfants.\n'
                            + 'Ils sont enfermes au Velodrome d\'Hiver (Vel d\'Hiv).\n'
                            + 'Puis deportes vers les camps d\'extermination.\n'
                            + 'Tres peu survivront.\n\n'
                            + 'En gros : la police francaise arrete des Juifs pour les nazis.\n\n'
                            + 'Mot difficile : "rafle" = arrestation massive et brutale.\n\n'
                            + '\ud83d\udca1 Astuce dys : "VEL D\'HIV = VELo + HIVer. Un velodrome en ete (juillet) utilise comme prison."\n\n'
                            + '\ud83d\udcdd Piege Brevet : en 1995, Chirac reconnait la responsabilite de la France. C\'est important.'
                    },
                    // CARD 6 — De Gaulle + appel 18 juin
                    {
                        question: 'Que fait De Gaulle le 18 juin 1940 ?',
                        answer: '\ud83c\udfaf \ud83d\udcc5 18 juin 1940 : l\'APPEL a la resistance.\n\n'
                            + 'De Gaulle parle a la radio de Londres (BBC).\n'
                            + '"La France a perdu une bataille, pas la guerre !"\n'
                            + 'Il appelle les Francais a continuer le combat.\n'
                            + 'C\'est le debut de la FRANCE LIBRE.\n'
                            + 'Pendant que Petain se rend, De Gaulle REFUSE.\n\n'
                            + 'En gros : De Gaulle dit "on ne lache rien" depuis Londres.\n\n'
                            + 'Mot difficile : "France libre" = organisation de De Gaulle pour continuer la guerre.\n\n'
                            + '\ud83d\udca1 Astuce dys : "18 JUIN = DIX-HUIT comme l\'age adulte. De Gaulle fait un choix d\'ADULTE."\n\n'
                            + '\ud83d\udcdd Piege Brevet : l\'appel du 18 juin est l\'ACTE FONDATEUR de la Resistance. Date ultra-classique au brevet.'
                    },
                    // CARD 7 — Jean Moulin + CNR
                    {
                        question: 'Qui est Jean Moulin ? C\'est quoi le CNR ?',
                        answer: '\ud83c\udfaf Jean Moulin = le grand HEROS de la Resistance.\n\n'
                            + 'De Gaulle lui confie une mission : UNIFIER la Resistance.\n'
                            + '\ud83d\udcc5 27 mai 1943 : il cree le CNR (Conseil National de la Resistance).\n'
                            + 'Le CNR reunit TOUS les mouvements resistants.\n'
                            + 'Jean Moulin est arrete par les nazis en juin 1943.\n'
                            + 'Il meurt sous la TORTURE. Il n\'a jamais parle.\n\n'
                            + 'En gros : Jean Moulin unifie la Resistance et meurt en hero.\n\n'
                            + 'Mot difficile : "CNR" = Conseil National de la Resistance.\n\n'
                            + '\ud83d\udca1 Astuce dys : "MOULIN = il MOUD (ecrase) les divisions entre resistants."\n\n'
                            + '\ud83d\udcdd Piege Brevet : le programme du CNR (1944) cree la Securite sociale et le droit de vote des femmes.'
                    },
                    // CARD 8 — Resistance
                    {
                        question: 'Comment fonctionne la Resistance ?',
                        answer: '\ud83c\udfaf Des Francais REFUSENT l\'occupation nazie.\n\n'
                            + 'Ils agissent en SECRET :\n'
                            + '\u2022 SABOTAGES : faire sauter des ponts et voies ferrees.\n'
                            + '\u2022 RENSEIGNEMENT : espionner pour les Allies.\n'
                            + '\u2022 PRESSE clandestine : journaux interdits.\n'
                            + '\u2022 MAQUIS : combattants caches dans les forets.\n'
                            + '\u2022 Aider les JUIFS a se cacher.\n\n'
                            + 'En gros : des gens ordinaires risquent leur VIE pour la liberte.\n\n'
                            + 'Mot difficile : "maquis" = groupes armes caches dans les campagnes.\n\n'
                            + '\ud83d\udca1 Astuce dys : "MAQUIS = ils se MAQUENT (cachent) dans les buissons."\n\n'
                            + '\ud83d\udcdd Piege Brevet : la Resistance, ce n\'est pas seulement des armes. C\'est aussi des tracts, de l\'aide aux Juifs, du renseignement.'
                    },
                    // CARD 9 — Shoah
                    {
                        question: 'C\'est quoi la Shoah ?',
                        answer: '\ud83c\udfaf Le GENOCIDE des Juifs d\'Europe par les nazis.\n\n'
                            + '\u2022 6 MILLIONS de Juifs assassines (1941-1945).\n'
                            + '\u2022 Fusillades de masse (Einsatzgruppen).\n'
                            + '\u2022 Ghettos (Varsovie).\n'
                            + '\u2022 CAMPS D\'EXTERMINATION : Auschwitz, Treblinka, Sobibor.\n'
                            + '\u2022 Chambres a GAZ : meurtre industriel.\n'
                            + 'C\'est un crime organise, systematique, a grande echelle.\n\n'
                            + 'En gros : les nazis ont voulu eliminer TOUS les Juifs d\'Europe.\n\n'
                            + 'Mot difficile : "Shoah" = mot hebreu signifiant "catastrophe".\n\n'
                            + '\ud83d\udca1 Astuce dys : "6 MILLIONS = SIX comme SIXieme extinction. Un peuple entier vise."\n\n'
                            + '\ud83d\udcdd Piege Brevet : ne confonds pas "camp de concentration" (travail force) et "camp d\'extermination" (assassinat immediat).'
                    },
                    // CARD 10 — Guerre d'aneantissement
                    {
                        question: 'Pourquoi parle-t-on de "guerre d\'aneantissement" ?',
                        answer: '\ud83c\udfaf L\'objectif n\'est plus de vaincre, mais de DETRUIRE.\n\n'
                            + '\u2022 Bombardements MASSIFS sur les villes civiles.\n'
                            + '\u2022 La Shoah : extermination des Juifs.\n'
                            + '\u2022 Genocide des Tziganes (200 000-500 000 morts).\n'
                            + '\u2022 Bombe ATOMIQUE sur des civils.\n'
                            + '\u2022 60 millions de morts, dont une majorite de CIVILS.\n\n'
                            + 'En gros : cette guerre vise a ANEANTIR l\'adversaire, pas juste le battre.\n\n'
                            + 'Mot difficile : "aneantissement" = destruction totale, reduire a neant.\n\n'
                            + '\ud83d\udca1 Astuce dys : "A-NEANT-issement = reduire a NEANT (rien)."\n\n'
                            + '\ud83d\udcdd Piege Brevet : "guerre d\'aneantissement" est un TERME CLE. Tu dois le definir + donner des exemples precis.'
                    },
                    // CARD 11 — Debarquement 6 juin 1944
                    {
                        question: 'Que se passe-t-il le 6 juin 1944 ?',
                        answer: '\ud83c\udfaf \ud83d\udcc5 Le 6 juin 1944 = le "D-DAY".\n\n'
                            + 'Les ALLIES debarquent sur les plages de Normandie.\n'
                            + '5 plages : Utah, Omaha, Gold, Juno, Sword.\n'
                            + 'Plus de 150 000 soldats le premier jour.\n'
                            + 'USA, Royaume-Uni, Canada, France libre.\n'
                            + 'C\'est le debut de la LIBERATION de l\'Europe de l\'Ouest.\n\n'
                            + 'En gros : les Allies arrivent en France pour la liberer.\n\n'
                            + 'Mot difficile : "debarquement" = arrivee de troupes par la mer.\n\n'
                            + '\ud83d\udca1 Astuce dys : "6 JUIN = 6/6. Double SIX comme aux des. Le GROS coup des Allies."\n\n'
                            + '\ud83d\udcdd Piege Brevet : il y a DEUX debarquements : Normandie (6 juin) et PROVENCE (aout 1944). Ne cite pas que la Normandie.'
                    },
                    // CARD 12 — Liberation Paris 25 aout 1944
                    {
                        question: 'Comment Paris est-il libere ?',
                        answer: '\ud83c\udfaf \ud83d\udcc5 Le 25 aout 1944 : Paris est LIBRE !\n\n'
                            + 'Les FFI (resistants) se soulevent dans Paris.\n'
                            + 'La 2e division blindee du general LECLERC entre dans Paris.\n'
                            + 'De Gaulle descend les Champs-Elysees sous les acclamations.\n'
                            + 'Joie immense apres 4 ans d\'occupation.\n\n'
                            + 'En gros : Paris est libre grace aux resistants et a l\'armee francaise.\n\n'
                            + 'Mot difficile : "FFI" = Forces Francaises de l\'Interieur (resistants armes).\n\n'
                            + '\ud83d\udca1 Astuce dys : "25 AOUT = VINGT-CINQ comme l\'age de la liberte. Paris libre !"\n\n'
                            + '\ud83d\udcdd Piege Brevet : De Gaulle insiste : Paris est libere "par elle-meme". Il veut montrer que la France s\'est liberee.'
                    },
                    // CARD 13 — 8 mai 1945
                    {
                        question: 'Que se passe-t-il le 8 mai 1945 ?',
                        answer: '\ud83c\udfaf \ud83d\udcc5 Le 8 mai 1945 : l\'Allemagne CAPITULE.\n\n'
                            + 'C\'est la fin de la guerre en Europe.\n'
                            + 'L\'Allemagne est envahie par les Allies (Ouest) et l\'URSS (Est).\n'
                            + 'Hitler s\'est suicide le 30 avril 1945.\n'
                            + 'Le 8 mai est jour FERIE en France.\n\n'
                            + 'En gros : le 8 mai 1945 = la fin de la guerre en Europe.\n\n'
                            + 'Mot difficile : "capitulation" = se rendre sans condition.\n\n'
                            + '\ud83d\udca1 Astuce dys : "8 MAI = HUIT MAI. Retiens : 8 comme l\'INFINI. La guerre est FINIE pour de bon."\n\n'
                            + '\ud83d\udcdd Piege Brevet : le 8 mai = fin en EUROPE. Mais la guerre continue dans le Pacifique jusqu\'en aout 1945.'
                    },
                    // CARD 14 — Hiroshima
                    {
                        question: 'Que se passe-t-il a Hiroshima et Nagasaki ?',
                        answer: '\ud83c\udfaf \ud83d\udcc5 6 aout 1945 : bombe atomique sur HIROSHIMA.\n'
                            + '\ud83d\udcc5 9 aout 1945 : bombe atomique sur NAGASAKI.\n\n'
                            + 'Les USA larguent les premieres bombes nucleaires de l\'histoire.\n'
                            + 'Environ 200 000 morts (explosion + radiations).\n'
                            + 'Le Japon capitule le 15 aout 1945.\n'
                            + 'C\'est la FIN de la Seconde Guerre mondiale.\n\n'
                            + 'En gros : les bombes atomiques mettent fin a la guerre. Le monde change.\n\n'
                            + 'Mot difficile : "bombe atomique" = arme de destruction massive nucleaire.\n\n'
                            + '\ud83d\udca1 Astuce dys : "HIRO-SHIMA = le HEROS (triste) de la fin. 6 AOUT = SIX-AOUT."\n\n'
                            + '\ud83d\udcdd Piege Brevet : Hiroshima montre la PUISSANCE de destruction de l\'homme. C\'est un exemple cle de guerre d\'aneantissement.'
                    },
                    // CARD 15 — Bilan WW2
                    {
                        question: 'Quel est le bilan de la Seconde Guerre mondiale ?',
                        answer: '\ud83c\udfaf Le bilan est CATASTROPHIQUE.\n\n'
                            + '\u2022 60 MILLIONS de morts (majorite de CIVILS).\n'
                            + '\u2022 La Shoah : 6 millions de Juifs assassines.\n'
                            + '\u2022 Des villes entieres detruites.\n'
                            + '\u2022 L\'Europe est RUINEE.\n\n'
                            + 'Consequences :\n'
                            + '\u2022 Creation de l\'ONU (1945).\n'
                            + '\u2022 Debut de la Guerre froide (USA vs URSS).\n'
                            + '\u2022 Debut de la decolonisation.\n\n'
                            + 'En gros : la pire guerre de l\'histoire. 60 millions de morts.\n\n'
                            + '\ud83d\udca1 Astuce dys : "60 M = SOIXANTE Millions. 6 fois plus que la Premiere Guerre (10M)."\n\n'
                            + '\ud83d\udcdd Piege Brevet : le bilan a 3 dimensions : HUMAIN (morts), MATERIEL (destructions), MORAL (traumatisme, proces de Nuremberg).'
                    },
                    // CARD 16 — Dates cles WW2
                    {
                        question: 'Quelles sont les dates cles de la Seconde Guerre mondiale ?',
                        answer: '\ud83d\udcc5 TOUTES LES DATES A RETENIR :\n\n'
                            + '\u2022 1er sept. 1939 = invasion de la Pologne.\n'
                            + '\u2022 Juin 1940 = defaite de la France.\n'
                            + '\u2022 18 juin 1940 = appel de De Gaulle.\n'
                            + '\u2022 16-17 juillet 1942 = rafle du Vel d\'Hiv.\n'
                            + '\u2022 6 juin 1944 = D-Day (Normandie).\n'
                            + '\u2022 25 aout 1944 = liberation de Paris.\n'
                            + '\u2022 8 mai 1945 = capitulation Allemagne.\n'
                            + '\u2022 6 aout 1945 = Hiroshima.\n\n'
                            + 'En gros : ces dates sont TOUTES tombees au brevet. Apprends-les !\n\n'
                            + '\ud83d\udca1 Astuce dys : "39-40-42-44-45. Ca monte de 2 en 2 (presque). Facile !"\n\n'
                            + '\ud83d\udcdd Piege Brevet : une frise chronologique est souvent demandee. Place ces dates dans l\'ordre.'
                    }
                ],
                quiz: [
                    { question: 'La Seconde Guerre mondiale commence le :', options: ['28 juin 1914', '1er septembre 1939', '6 juin 1944', '8 mai 1945'], correctIndex: 1, explanation: '\ud83d\udcc5 1er septembre 1939 : l\'Allemagne envahit la Pologne. France et R-U declarent la guerre.' },
                    { question: 'La France est vaincue en :', options: ['4 ans', '2 ans', '6 mois', '6 semaines'], correctIndex: 3, explanation: '\ud83c\udfaf La France tombe en 6 semaines (mai-juin 1940). Defaite eclair face a la Blitzkrieg.' },
                    { question: 'L\'appel du 18 juin 1940 est lance par :', options: ['Petain', 'De Gaulle', 'Jean Moulin', 'Churchill'], correctIndex: 1, explanation: '\ud83d\udcc5 De Gaulle appelle a resister depuis Londres (BBC). Acte fondateur de la Resistance.' },
                    { question: 'La rafle du Vel d\'Hiv a lieu en :', options: ['1940', '1941', '1942', '1944'], correctIndex: 2, explanation: '\ud83d\udcc5 16-17 juillet 1942 : la police francaise arrete 13 000 Juifs a Paris.' },
                    { question: 'Jean Moulin cree le CNR en :', options: ['1940', '1942', '1943', '1944'], correctIndex: 2, explanation: '\ud83d\udcc5 27 mai 1943 : Jean Moulin unifie la Resistance en creant le CNR.' },
                    { question: 'La Shoah fait environ :', options: ['1 million de victimes', '3 millions', '6 millions', '10 millions'], correctIndex: 2, explanation: '\ud83c\udfaf 6 millions de Juifs assassines par les nazis entre 1941 et 1945.' },
                    { question: 'Le D-Day a lieu le :', options: ['8 mai 1945', '6 juin 1944', '25 aout 1944', '1er sept. 1939'], correctIndex: 1, explanation: '\ud83d\udcc5 6 juin 1944 = D-Day. Les Allies debarquent en Normandie. Debut de la liberation.' },
                    { question: 'Paris est libere le :', options: ['6 juin 1944', '25 aout 1944', '8 mai 1945', '11 novembre 1944'], correctIndex: 1, explanation: '\ud83d\udcc5 25 aout 1944 : Paris est libre grace aux FFI et a la 2e DB du general Leclerc.' },
                    { question: 'La capitulation de l\'Allemagne est le :', options: ['6 juin 1944', '25 aout 1944', '8 mai 1945', '15 aout 1945'], correctIndex: 2, explanation: '\ud83d\udcc5 8 mai 1945 = fin de la guerre en Europe. Jour ferie en France.' },
                    { question: 'Vichy est dirige par :', options: ['De Gaulle', 'Petain', 'Jean Moulin', 'Leclerc'], correctIndex: 1, explanation: '\ud83c\udfaf Petain dirige le regime de Vichy (1940-1944). Collaboration avec les nazis.' },
                    { question: 'Hiroshima c\'est le :', options: ['6 juin 1944', '8 mai 1945', '6 aout 1945', '15 aout 1945'], correctIndex: 2, explanation: '\ud83d\udcc5 6 aout 1945 : premiere bombe atomique. 200 000 morts. Le Japon capitule.' },
                    { question: 'Le bilan total de la guerre est d\'environ :', options: ['10 millions de morts', '30 millions', '60 millions', '100 millions'], correctIndex: 2, explanation: '\ud83c\udfaf 60 millions de morts dont une majorite de civils. La pire guerre de l\'histoire.' }
                ]
            },

            // ================================================================
            // SECTION 4 : LE MONDE DEPUIS 1945
            // ================================================================
            {
                id: 'monde-1945',
                title: 'Le monde depuis 1945',
                icon: '\ud83c\udf10',
                content: '<h3>De 1945 a aujourd\'hui</h3>'
                    + '<ul>'
                    + '<li><strong>Guerre froide</strong> : USA vs URSS (1947-1991)</li>'
                    + '<li><strong>Decolonisation</strong> : Inde (1947), Algerie (1954-62)</li>'
                    + '<li><strong>Construction europeenne</strong> : Rome 1957, Maastricht 1992</li>'
                    + '<li><strong>Ve Republique</strong> : depuis 1958</li>'
                    + '</ul>',
                flashcards: [
                    // CARD 1 — Guerre froide definition
                    {
                        question: 'C\'est quoi la Guerre froide ?',
                        answer: '\ud83c\udfaf Un affrontement USA vs URSS de 1947 a 1991.\n\n'
                            + 'Mais PAS de guerre directe entre eux.\n'
                            + 'C\'est une guerre INDIRECTE :\n'
                            + '\u2022 Ideologique : capitalisme vs communisme.\n'
                            + '\u2022 Militaire : course aux armements nucleaires.\n'
                            + '\u2022 Economique : plan Marshall vs COMECON.\n'
                            + 'Le monde est coupe en DEUX BLOCS.\n\n'
                            + 'En gros : 2 superpuissances s\'affrontent sans se tirer dessus.\n\n'
                            + 'Mot difficile : "bipolaire" = le monde divise en 2 camps.\n\n'
                            + '\ud83d\udca1 Astuce dys : "FROIDE = pas de combat CHAUD. Ils se font peur mais ne se battent pas."\n\n'
                            + '\ud83d\udcdd Piege Brevet : Guerre froide =/= pas de guerre du tout. Il y a des guerres INDIRECTES (Coree, Vietnam).'
                    },
                    // CARD 2 — Mur de Berlin
                    {
                        question: 'C\'est quoi le mur de Berlin ?',
                        answer: '\ud83c\udfaf LE symbole de la Guerre froide.\n\n'
                            + '\ud83d\udcc5 1961 : l\'URSS construit un MUR au milieu de Berlin.\n'
                            + 'Berlin-OUEST = capitaliste, libre.\n'
                            + 'Berlin-EST = communiste, dictature.\n'
                            + 'Ceux qui tentent de passer sont TUES.\n\n'
                            + '\ud83d\udcc5 9 novembre 1989 : le mur TOMBE.\n'
                            + 'Les gens le cassent dans la JOIE.\n'
                            + '\ud83d\udcc5 1990 : l\'Allemagne est REUNIFIEE.\n\n'
                            + 'En gros : le mur coupe Berlin en 2. Sa chute = fin de la Guerre froide.\n\n'
                            + 'Mot difficile : "rideau de fer" = frontiere entre l\'Europe libre et communiste.\n\n'
                            + '\ud83d\udca1 Astuce dys : "1989 = QUATRE-VINGT-NEUF. Le mur tombe en 89 : NEUF comme NOUVEAU debut."\n\n'
                            + '\ud83d\udcdd Piege Brevet : le mur est construit en 1961, tombe en 1989. Ne confonds pas les deux dates.'
                    },
                    // CARD 3 — Crise de Cuba
                    {
                        question: 'C\'est quoi la crise de Cuba (1962) ?',
                        answer: '\ud83c\udfaf \ud83d\udcc5 Octobre 1962 : le monde frole la guerre nucleaire.\n\n'
                            + 'L\'URSS installe des missiles a Cuba (150 km des USA).\n'
                            + 'Le president KENNEDY impose un blocus naval.\n'
                            + 'Pendant 13 JOURS, le monde retient son souffle.\n'
                            + 'Finalement, KHROUCHTCHEV retire ses missiles.\n'
                            + 'En echange, les USA promettent de ne pas envahir Cuba.\n\n'
                            + 'En gros : le moment le plus DANGEREUX de la Guerre froide.\n\n'
                            + 'Mot difficile : "blocus" = empecher tout navire d\'acceder a un endroit.\n\n'
                            + '\ud83d\udca1 Astuce dys : "CUBA = CUBE explosif. 13 jours de peur ATOMIQUE."\n\n'
                            + '\ud83d\udcdd Piege Brevet : apres Cuba, les 2 blocs font plus attention. C\'est le debut de la "DETENTE".'
                    },
                    // CARD 4 — Decolonisation Inde
                    {
                        question: 'Comment l\'Inde devient-elle independante (1947) ?',
                        answer: '\ud83c\udfaf \ud83d\udcc5 15 aout 1947 : l\'Inde est INDEPENDANTE.\n\n'
                            + 'L\'Inde etait une colonie britannique.\n'
                            + 'Le leader : GANDHI. Il utilise la NON-VIOLENCE.\n'
                            + 'Greves, boycotts, marches pacifiques.\n'
                            + 'Mais l\'independance s\'accompagne d\'une PARTITION :\n'
                            + 'Inde (hindoue) et Pakistan (musulman) sont separes.\n'
                            + 'Violences terribles : 1 million de morts.\n\n'
                            + 'En gros : l\'Inde devient libre sans guerre, mais la partition est un drame.\n\n'
                            + 'Mot difficile : "non-violence" = lutter SANS armes. Resister pacifiquement.\n\n'
                            + '\ud83d\udca1 Astuce dys : "GANDHI = GENTIL. Il refuse la violence."\n\n'
                            + '\ud83d\udcdd Piege Brevet : l\'Inde = decolonisation PACIFIQUE. L\'Algerie = decolonisation VIOLENTE. Compare les deux.'
                    },
                    // CARD 5 — Guerre d'Algerie
                    {
                        question: 'C\'est quoi la guerre d\'Algerie (1954-1962) ?',
                        answer: '\ud83c\udfaf L\'Algerie se bat pour son INDEPENDANCE.\n\n'
                            + 'Colonie francaise depuis 1830.\n'
                            + '\ud83d\udcc5 1er novembre 1954 : le FLN lance l\'insurrection.\n'
                            + 'Guerre VIOLENTE des deux cotes (attentats, torture).\n'
                            + '\ud83d\udcc5 18 mars 1962 : accords d\'EVIAN.\n'
                            + '\ud83d\udcc5 5 juillet 1962 : l\'Algerie est independante.\n'
                            + 'Les pieds-noirs (Francais d\'Algerie) quittent le pays.\n\n'
                            + 'En gros : une guerre douloureuse. 8 ans de conflit.\n\n'
                            + 'Mot difficile : "FLN" = Front de Liberation Nationale (mouvement algerien).\n\n'
                            + '\ud83d\udca1 Astuce dys : "1954-1962 = 8 ans. CINQUANTE-QUATRE a SOIXANTE-DEUX."\n\n'
                            + '\ud83d\udcdd Piege Brevet : la guerre d\'Algerie cause la CHUTE de la IVe Republique et la NAISSANCE de la Ve (De Gaulle, 1958).'
                    },
                    // CARD 6 — Construction europeenne
                    {
                        question: 'Comment l\'Europe s\'est-elle construite ?',
                        answer: '\ud83c\udfaf L\'Europe se construit pour la PAIX.\n\n'
                            + '\ud83d\udcc5 1951 : CECA (charbon + acier entre 6 pays).\n'
                            + '\ud83d\udcc5 1957 : traite de ROME (CEE, marche commun).\n'
                            + '\ud83d\udcc5 1992 : traite de MAASTRICHT (Union europeenne).\n'
                            + '\ud83d\udcc5 2002 : l\'EURO entre en circulation.\n'
                            + 'De 6 pays fondateurs a 27 aujourd\'hui.\n\n'
                            + 'En gros : l\'Europe s\'est construite pour qu\'il n\'y ait PLUS JAMAIS de guerre.\n\n'
                            + 'Mot difficile : "marche commun" = espace ou les produits circulent librement.\n\n'
                            + '\ud83d\udca1 Astuce dys : "51-57-92-2002 : CECA-ROME-MAASTRICHT-EURO. 4 dates, 4 etapes."\n\n'
                            + '\ud83d\udcdd Piege Brevet : les 6 pays fondateurs : France, Allemagne, Italie, Belgique, Pays-Bas, Luxembourg. A CONNAITRE.'
                    },
                    // CARD 7 — Ve Republique
                    {
                        question: 'C\'est quoi la Ve Republique ?',
                        answer: '\ud83c\udfaf \ud83d\udcc5 1958 : De Gaulle cree la Ve REPUBLIQUE.\n\n'
                            + 'La France est en crise (guerre d\'Algerie).\n'
                            + 'De Gaulle revient au pouvoir.\n'
                            + 'Nouvelle Constitution : le president est FORT.\n'
                            + '\ud83d\udcc5 1962 : le president est elu au suffrage universel direct.\n'
                            + 'C\'est NOTRE Republique actuelle.\n\n'
                            + 'En gros : De Gaulle cree un regime ou le president a beaucoup de pouvoir.\n\n'
                            + 'Mot difficile : "suffrage universel direct" = TOUS les citoyens votent.\n\n'
                            + '\ud83d\udca1 Astuce dys : "Ve = 5e. CINQUIEME Republique. 1958 = CINQUANTE-HUIT. 5 et 58 commencent par CINQ."\n\n'
                            + '\ud83d\udcdd Piege Brevet : la Ve Republique donne du pouvoir au president. La IVe donnait du pouvoir au Parlement.'
                    },
                    // CARD 8 — Alternance 1981
                    {
                        question: 'C\'est quoi l\'alternance de 1981 ?',
                        answer: '\ud83c\udfaf \ud83d\udcc5 1981 : la GAUCHE arrive au pouvoir pour la 1re fois.\n\n'
                            + 'Francois MITTERRAND (socialiste) est elu president.\n'
                            + 'C\'est la premiere "alternance" sous la Ve Republique.\n'
                            + 'Le pouvoir change de camp PACIFIQUEMENT.\n'
                            + 'Reformes : abolition de la peine de mort, 5e semaine de conges.\n\n'
                            + 'En gros : la gauche gouverne pour la premiere fois. La democratie marche.\n\n'
                            + 'Mot difficile : "alternance" = le pouvoir passe d\'un camp a l\'autre.\n\n'
                            + '\ud83d\udca1 Astuce dys : "1981 = QUATRE-VINGT-UN. Mitterrand fait UN bond a gauche en 81."\n\n'
                            + '\ud83d\udcdd Piege Brevet : l\'alternance prouve que la Ve Republique est SOLIDE. Le pouvoir change dans le calme.'
                    },
                    // CARD 9 — Trente Glorieuses
                    {
                        question: 'C\'est quoi les Trente Glorieuses (1945-1975) ?',
                        answer: '\ud83c\udfaf 30 ans de CROISSANCE economique exceptionnelle.\n\n'
                            + '\u2022 Plein emploi : tout le monde a du travail.\n'
                            + '\u2022 Hausse du niveau de vie.\n'
                            + '\u2022 Societe de CONSOMMATION : voiture, TV, frigo.\n'
                            + '\u2022 BABY-BOOM : beaucoup de naissances.\n'
                            + '\u2022 Immigration de TRAVAIL (Maghreb, Portugal, Italie).\n'
                            + '\ud83d\udcc5 1973 : crise petroliere. Fin des Trente Glorieuses.\n\n'
                            + 'En gros : 30 ans ou les Francais vivent de mieux en mieux.\n\n'
                            + 'Mot difficile : "Trente Glorieuses" = expression de l\'economiste Jean Fourastie.\n\n'
                            + '\ud83d\udca1 Astuce dys : "GLORIEUSES = la GLOIRE economique. 30 ans de bonheur (1945-1975)."\n\n'
                            + '\ud83d\udcdd Piege Brevet : les Trente Glorieuses s\'arretent en 1975 avec la crise petroliere. Apres = chomage.'
                    },
                    // CARD 10 — Mai 68
                    {
                        question: 'C\'est quoi Mai 68 ?',
                        answer: '\ud83c\udfaf \ud83d\udcc5 Mai 1968 : la France est PARALYSEE.\n\n'
                            + 'Ca commence par une revolte ETUDIANTE.\n'
                            + 'Les etudiants veulent plus de liberte.\n'
                            + 'Puis les OUVRIERS font greve (10 millions !).\n'
                            + 'Barricades et manifestations dans Paris.\n'
                            + 'De Gaulle dissout l\'Assemblee.\n'
                            + 'Resultat : accords de Grenelle (hausse des salaires).\n\n'
                            + 'En gros : une revolte qui change la societe francaise.\n\n'
                            + 'Mot difficile : "barricades" = obstacles dans la rue pour bloquer la police.\n\n'
                            + '\ud83d\udca1 Astuce dys : "MAI 68 = MAI SOIXANTE-HUIT. Les jeunes en ont MARRE en MAI."\n\n'
                            + '\ud83d\udcdd Piege Brevet : Mai 68 n\'est pas seulement une revolte. C\'est une EVOLUTION de la societe (libertes, moeurs).'
                    },
                    // CARD 11 — Droits des femmes
                    {
                        question: 'Comment les droits des femmes evoluent-ils ?',
                        answer: '\ud83c\udfaf Les droits des femmes progressent enormement.\n\n'
                            + '\ud83d\udcc5 1944 : droit de VOTE des femmes.\n'
                            + '\ud83d\udcc5 1965 : compte en banque SANS l\'accord du mari.\n'
                            + '\ud83d\udcc5 1967 : loi NEUWIRTH (contraception autorisee).\n'
                            + '\ud83d\udcc5 1975 : loi VEIL (IVG legalisee).\n'
                            + '\ud83d\udcc5 1983 : egalite professionnelle hommes/femmes.\n\n'
                            + 'En gros : en quelques decennies, les femmes deviennent citoyennes a part entiere.\n\n'
                            + 'Mot difficile : "IVG" = Interruption Volontaire de Grossesse.\n\n'
                            + '\ud83d\udca1 Astuce dys : "44-65-67-75-83 : les femmes GAGNENT des droits petit a petit."\n\n'
                            + '\ud83d\udcdd Piege Brevet : la loi Veil (1975) est un sujet TRES frequent au brevet. Connais le nom et la date.'
                    },
                    // CARD 12 — Cohabitation
                    {
                        question: 'C\'est quoi la cohabitation ?',
                        answer: '\ud83c\udfaf President et Premier ministre de CAMPS OPPOSES.\n\n'
                            + 'Le president est de droite, l\'Assemblee de gauche (ou inversement).\n'
                            + 'Le president DOIT nommer un Premier ministre du camp adverse.\n\n'
                            + '3 cohabitations :\n'
                            + '\u2022 1986-1988 : Mitterrand / Chirac.\n'
                            + '\u2022 1993-1995 : Mitterrand / Balladur.\n'
                            + '\u2022 1997-2002 : Chirac / Jospin.\n\n'
                            + 'En gros : deux adversaires politiques gouvernent ENSEMBLE.\n\n'
                            + 'Mot difficile : "cohabitation" = vivre ensemble malgre les desaccords.\n\n'
                            + '\ud83d\udca1 Astuce dys : "COHABITATION = CO-HABITER. Deux ennemis dans la meme maison."\n\n'
                            + '\ud83d\udcdd Piege Brevet : la cohabitation montre la SOUPLESSE de la Ve Republique. Elle fonctionne meme en cas de desaccord.'
                    },
                    // CARD 13 — Fin Guerre froide
                    {
                        question: 'Comment la Guerre froide se termine-t-elle ?',
                        answer: '\ud83c\udfaf \ud83d\udcc5 1989 : chute du mur de Berlin.\n'
                            + '\ud83d\udcc5 1991 : l\'URSS DISPARAIT.\n\n'
                            + 'Pourquoi la fin ?\n'
                            + '\u2022 L\'URSS est en crise economique.\n'
                            + '\u2022 GORBATCHEV lance des reformes (glasnost, perestroika).\n'
                            + '\u2022 Les pays de l\'Est se liberent un par un.\n'
                            + '\u2022 Les USA "gagnent" la Guerre froide.\n\n'
                            + 'En gros : l\'URSS s\'effondre. Le monde n\'est plus bipolaire.\n\n'
                            + 'Mot difficile : "glasnost" = transparence. "perestroika" = restructuration.\n\n'
                            + '\ud83d\udca1 Astuce dys : "1991 = QUATRE-VINGT-ONZE. L\'URSS est FINIE en 91."\n\n'
                            + '\ud83d\udcdd Piege Brevet : 1989 = chute du mur. 1991 = fin de l\'URSS. Ce sont 2 dates DIFFERENTES.'
                    },
                    // CARD 14 — Dates cles depuis 1945
                    {
                        question: 'Quelles sont les dates cles du monde depuis 1945 ?',
                        answer: '\ud83d\udcc5 RECAPITULATIF :\n\n'
                            + '\u2022 1945 = ONU.\n'
                            + '\u2022 1947 = independance Inde, debut Guerre froide.\n'
                            + '\u2022 1954-1962 = guerre d\'Algerie.\n'
                            + '\u2022 1957 = traite de Rome.\n'
                            + '\u2022 1958 = Ve Republique.\n'
                            + '\u2022 1961 = mur de Berlin construit.\n'
                            + '\u2022 1962 = crise de Cuba.\n'
                            + '\u2022 1968 = Mai 68.\n'
                            + '\u2022 1975 = loi Veil.\n'
                            + '\u2022 1981 = alternance (Mitterrand).\n'
                            + '\u2022 1989 = chute du mur de Berlin.\n'
                            + '\u2022 1991 = fin de l\'URSS.\n'
                            + '\u2022 1992 = Maastricht.\n\n'
                            + 'En gros : beaucoup de dates. Mais TOUTES essentielles.\n\n'
                            + '\ud83d\udca1 Astuce dys : regroupe par THEMES : Guerre froide / Decolonisation / Europe / France.\n\n'
                            + '\ud83d\udcdd Piege Brevet : une frise chronologique est presque TOUJOURS demandee.'
                    }
                ],
                quiz: [
                    { question: 'Le mur de Berlin tombe en :', options: ['1961', '1985', '1989', '1991'], correctIndex: 2, explanation: '\ud83d\udcc5 Le mur tombe le 9 novembre 1989. Symbole de la fin de la Guerre froide.' },
                    { question: 'La guerre d\'Algerie dure de :', options: ['1945 a 1954', '1954 a 1962', '1962 a 1975', '1939 a 1945'], correctIndex: 1, explanation: '\ud83d\udcc5 1954 (insurrection FLN) a 1962 (accords d\'Evian). 8 ans de guerre.' },
                    { question: 'Le traite de Rome (1957) cree :', options: ['L\'ONU', 'La CEE', 'L\'OTAN', 'L\'Union europeenne'], correctIndex: 1, explanation: '\ud83d\udcc5 Le traite de Rome (1957) cree la CEE (marche commun) avec 6 pays fondateurs.' },
                    { question: 'La Ve Republique est creee en :', options: ['1946', '1958', '1962', '1969'], correctIndex: 1, explanation: '\ud83d\udcc5 1958 : De Gaulle cree la Ve Republique. Nouvelle Constitution, president fort.' },
                    { question: 'L\'alternance de 1981 porte au pouvoir :', options: ['De Gaulle', 'Chirac', 'Mitterrand', 'Sarkozy'], correctIndex: 2, explanation: '\ud83c\udfaf Mitterrand (gauche) est elu en 1981. Premiere alternance sous la Ve Republique.' },
                    { question: 'Les Trente Glorieuses vont de :', options: ['1914-1945', '1945-1975', '1975-2005', '1958-1988'], correctIndex: 1, explanation: '\ud83d\udcc5 1945-1975 = 30 ans de croissance, plein emploi, societe de consommation.' },
                    { question: 'La loi Veil (1975) autorise :', options: ['Le droit de vote des femmes', 'L\'IVG (avortement)', 'Le divorce', 'La contraception'], correctIndex: 1, explanation: '\ud83d\udcc5 La loi Veil (1975) legalise l\'IVG en France. Sujet classique au brevet.' },
                    { question: 'L\'URSS disparait en :', options: ['1989', '1990', '1991', '1992'], correctIndex: 2, explanation: '\ud83d\udcc5 1991 : l\'URSS disparait. La Guerre froide est vraiment terminee.' },
                    { question: 'Gandhi utilise comme methode :', options: ['La violence armee', 'La non-violence', 'Le terrorisme', 'La guerre totale'], correctIndex: 1, explanation: '\ud83c\udfaf Gandhi = non-violence. Greves, boycotts, marches pacifiques. Independance de l\'Inde en 1947.' },
                    { question: 'Une cohabitation c\'est quand :', options: ['Le president demissionne', 'President et PM sont de bords opposes', 'Il n\'y a pas de PM', 'Le president est a l\'etranger'], correctIndex: 1, explanation: '\ud83c\udfaf Cohabitation = president et Premier ministre de camps politiques differents.' }
                ]
            },

            // ================================================================
            // SECTION 5 : REFONDER LA REPUBLIQUE (1944-1947)
            // ================================================================
            {
                id: 'refonder-republique-1944-1947',
                title: 'Refonder la Republique (1944-1947)',
                icon: '🇫🇷',
                content: '<h3>⚠️ Dates cles a retenir</h3>'
                    + '<ul>'
                    + '<li><strong>📅 15 mars 1944</strong> : programme du CNR</li>'
                    + '<li><strong>📅 21 avril 1944</strong> : droit de vote des femmes</li>'
                    + '<li><strong>📅 avril 1945</strong> : 1er vote des femmes (municipales)</li>'
                    + '<li><strong>📅 octobre 1945</strong> : creation de la Securite sociale</li>'
                    + '<li><strong>📅 13 octobre 1946</strong> : Constitution IVe Republique</li>'
                    + '<li><strong>📅 1947</strong> : fin de l\'union de la Resistance</li>'
                    + '</ul>',
                flashcards: [
                    // CARD 1 — GPRF
                    {
                        question: 'A la Liberation (1944), qui dirige la France ?',
                        answer: '🎯 A la Liberation, la France est en ruine.\n\n'
                            + '📅 3 juin 1944 : creation du GPRF.\n'
                            + 'GPRF = Gouvernement Provisoire de la Republique Francaise.\n'
                            + 'Son chef : le general de GAULLE.\n'
                            + 'But : remettre la Republique en marche.\n'
                            + 'Il remplace le regime de Vichy, supprime.\n\n'
                            + 'En gros : de Gaulle prend les commandes pour reconstruire la Republique.\n\n'
                            + 'Mot difficile : "provisoire" = temporaire, en attendant une nouvelle Constitution.\n\n'
                            + '💡 Astuce dys : GPRF = G comme Gaulle + PR comme PRovisoire + F comme France.\n\n'
                            + '📝 Piege Brevet : ne pas confondre GPRF (1944-1946) et IVe Republique (a partir de 1946).'
                    },
                    // CARD 2 — Programme du CNR
                    {
                        question: 'C\'est quoi le programme du CNR (15 mars 1944) ?',
                        answer: '🎯 📅 15 mars 1944 : le CNR adopte son programme "Les Jours heureux".\n\n'
                            + 'CNR = Conseil National de la Resistance (cree par Jean Moulin en 1943).\n'
                            + 'Son programme prevoit APRES la guerre :\n'
                            + '• droit de VOTE des femmes.\n'
                            + '• SECURITE SOCIALE pour tous.\n'
                            + '• NATIONALISATION des grandes entreprises.\n'
                            + '• droit au TRAVAIL et au repos.\n\n'
                            + 'En gros : les resistants preparent une Republique plus SOCIALE et plus JUSTE.\n\n'
                            + 'Mot difficile : "programme" = liste de reformes a appliquer.\n\n'
                            + '💡 Astuce dys : CNR = Change Notre Republique.\n\n'
                            + '📝 Piege Brevet : le programme du CNR = la BASE des reformes 1944-1946. Date ultra-classique.'
                    },
                    // CARD 3 — Droit de vote femmes
                    {
                        question: 'Quand les femmes obtiennent-elles le droit de vote ?',
                        answer: '🎯 📅 21 avril 1944 : ORDONNANCE qui accorde le droit de VOTE et d\'ELIGIBILITE aux femmes.\n\n'
                            + 'Signee par de Gaulle a Alger (la France n\'est pas encore totalement liberee).\n'
                            + '📅 29 avril 1945 : elles votent pour la 1ere fois (elections municipales).\n'
                            + 'Le suffrage devient VRAIMENT universel.\n\n'
                            + 'En gros : les femmes deviennent citoyennes comme les hommes.\n\n'
                            + 'Mot difficile : "eligibilite" = avoir le droit d\'etre ELUE.\n\n'
                            + '💡 Astuce dys : 1944 = droit. 1945 = premier vote. "44 je gagne, 45 je m\'en sers."\n\n'
                            + '📝 Piege Brevet : 2 dates DIFFERENTES. 1944 = droit. 1945 = 1er vote. Ne les confonds pas.'
                    },
                    // CARD 4 — Securite sociale
                    {
                        question: 'C\'est quoi la Securite sociale (1945) ?',
                        answer: '🎯 📅 Octobre 1945 : ordonnances creant la SECURITE SOCIALE.\n\n'
                            + 'Ministre : Ambroise CROIZAT.\n'
                            + 'Principe : tous les salaries COTISENT. Tous sont PROTEGES en cas de maladie, accident, vieillesse.\n'
                            + '4 branches : maladie / vieillesse / famille / accidents du travail.\n\n'
                            + 'En gros : "quand on va bien on paie, quand on va mal on recoit." C\'est la solidarite.\n\n'
                            + 'Mot difficile : "cotisations" = argent preleve sur le salaire pour financer la Secu.\n\n'
                            + '💡 Astuce dys : Securite sociale = etre SUR de pouvoir se soigner.\n\n'
                            + '📝 Piege Brevet : Secu = 1945. C\'est la mise en oeuvre du programme du CNR.'
                    },
                    // CARD 5 — Etat-providence
                    {
                        question: 'C\'est quoi l\'Etat-providence ?',
                        answer: '🎯 L\'Etat-providence = un Etat qui PROTEGE ses citoyens.\n\n'
                            + 'Apres 1945, l\'Etat s\'occupe des gens "du berceau a la tombe" :\n'
                            + '• SANTE (Securite sociale).\n'
                            + '• FAMILLE (allocations familiales).\n'
                            + '• VIEILLESSE (retraites).\n'
                            + '• CHOMAGE (aides).\n'
                            + '• EDUCATION gratuite.\n\n'
                            + 'En gros : l\'Etat joue le role de "parent" quand tu as un probleme.\n\n'
                            + 'Mot difficile : "democratie sociale" = democratie qui donne aussi des droits SOCIAUX.\n\n'
                            + '💡 Astuce dys : PROVIDENCE = PROtection. L\'Etat PROtege.\n\n'
                            + '📝 Piege Brevet : Etat-providence = notion cle du chapitre. Synonyme : democratie sociale.'
                    },
                    // CARD 6 — Nationalisations
                    {
                        question: 'C\'est quoi les nationalisations de 1944-1946 ?',
                        answer: '🎯 Nationaliser = l\'Etat rachete des ENTREPRISES PRIVEES.\n\n'
                            + 'Exemples entre 1944 et 1946 :\n'
                            + '• RENAULT (janvier 1945) : puni pour avoir produit pour les nazis.\n'
                            + '• BANQUE de France (1945).\n'
                            + '• EDF et GDF (1946) : electricite et gaz.\n'
                            + '• CHARBONNAGES (1946).\n\n'
                            + 'But : reconstruire. Mettre les secteurs cles au service du peuple.\n\n'
                            + 'En gros : l\'Etat prend le controle des grandes entreprises strategiques.\n\n'
                            + 'Mot difficile : "nationaliser" = faire passer du prive (patrons) au public (Etat).\n\n'
                            + '💡 Astuce dys : NATION-alisation = la NATION (Etat) rachete.\n\n'
                            + '📝 Piege Brevet : les nationalisations font partie de la "refondation sociale" du CNR.'
                    },
                    // CARD 7 — Constitution 1946
                    {
                        question: 'Comment est adoptee la Constitution de 1946 ?',
                        answer: '🎯 Les Francais elisent une ASSEMBLEE CONSTITUANTE (octobre 1945).\n\n'
                            + 'Elle ecrit une Constitution. Ca ne se passe PAS sans difficultes :\n'
                            + '• 1er projet : REJETE par referendum (mai 1946).\n'
                            + '• 2e projet : ADOPTE par referendum 📅 13 octobre 1946.\n\n'
                            + 'Naissance de la IVe REPUBLIQUE.\n'
                            + 'De Gaulle avait deja demissionne le 20 janvier 1946 (desaccord avec les partis).\n\n'
                            + 'En gros : il a fallu 2 essais pour adopter la nouvelle Republique.\n\n'
                            + 'Mot difficile : "assemblee constituante" = assemblee elue pour ECRIRE une Constitution.\n\n'
                            + '💡 Astuce dys : 1946 = nouvelle Republique NEUVE.\n\n'
                            + '📝 Piege Brevet : la IVe commence en 1946, pas en 1944. Ne confonds pas.'
                    },
                    // CARD 8 — Preambule 1946
                    {
                        question: 'C\'est quoi le Preambule de 1946 ?',
                        answer: '🎯 Le PREAMBULE = le texte place au DEBUT de la Constitution de 1946.\n\n'
                            + 'Il ajoute des DROITS SOCIAUX aux droits de 1789 :\n'
                            + '• droit au TRAVAIL et a l\'emploi.\n'
                            + '• droit de GREVE.\n'
                            + '• droit SYNDICAL.\n'
                            + '• droit a la SANTE, au repos, aux loisirs.\n'
                            + '• egalite HOMMES-FEMMES dans tous les domaines.\n'
                            + '• ecole gratuite et laique.\n\n'
                            + 'En gros : la Republique n\'est plus seulement politique, elle devient SOCIALE.\n\n'
                            + 'Mot difficile : "preambule" = texte d\'introduction avec des principes fondamentaux.\n\n'
                            + '💡 Astuce dys : PRE-ambule = ce qui est AVANT les articles.\n\n'
                            + '📝 Piege Brevet : le Preambule de 1946 est TOUJOURS en vigueur (bloc de constitutionnalite).'
                    },
                    // CARD 9 — IVe Republique fonctionnement
                    {
                        question: 'Comment fonctionne la IVe Republique ?',
                        answer: '🎯 La IVe Republique (1946-1958) est un REGIME PARLEMENTAIRE.\n\n'
                            + 'Caracteristiques :\n'
                            + '• le PARLEMENT (Assemblee nationale + Conseil de la Republique) a le pouvoir.\n'
                            + '• le PRESIDENT a peu de pouvoir (role honorifique).\n'
                            + '• le gouvernement depend du Parlement qui peut le renverser.\n\n'
                            + 'En gros : c\'est le Parlement qui dirige la France, pas le president.\n\n'
                            + 'Mot difficile : "regime parlementaire" = systeme ou le Parlement est plus fort que le president.\n\n'
                            + '💡 Astuce dys : IVe = Parlement fort. Ve = President fort. C\'est L\'INVERSE !\n\n'
                            + '📝 Piege Brevet : ne confonds pas IVe (Parlement) et Ve (President).'
                    },
                    // CARD 10 — Instabilite IVe
                    {
                        question: 'Pourquoi la IVe Republique est-elle instable ?',
                        answer: '⚠️ La IVe Republique a un GROS probleme : l\'INSTABILITE.\n\n'
                            + '22 GOUVERNEMENTS en 12 ans (1946-1958).\n'
                            + 'Pourquoi ? Les deputes renversent les gouvernements en permanence.\n'
                            + 'Rien n\'avance. Les crises coloniales (Indochine, Algerie) aggravent le probleme.\n\n'
                            + 'En gros : les deputes font tomber les gouvernements tout le temps.\n\n'
                            + 'Mot difficile : "instabilite" = quand ca change sans arret.\n\n'
                            + '💡 Astuce dys : 22 gouvernements / 12 ans = environ 1 gouvernement tous les 6 mois.\n\n'
                            + '📝 Piege Brevet : l\'instabilite explique pourquoi la IVe tombe en 1958 (arrivee de la Ve).'
                    },
                    // CARD 11 — 1947
                    {
                        question: 'Que se passe-t-il en 1947 ?',
                        answer: '🎯 1947 : tournant important.\n\n'
                            + '📅 Mai 1947 : les ministres COMMUNISTES sont renvoyes du gouvernement.\n'
                            + 'C\'est la fin du TRIPARTISME (communistes + socialistes + MRP gouvernaient ensemble).\n'
                            + 'La GUERRE FROIDE commence : USA vs URSS.\n'
                            + 'L\'union de la Resistance est finie.\n\n'
                            + 'En gros : 1947 = fin de l\'entente d\'apres-guerre. La France choisit le camp USA.\n\n'
                            + 'Mot difficile : "tripartisme" = alliance de 3 partis au gouvernement (tri = 3).\n\n'
                            + '💡 Astuce dys : 1947 = fin du TRIO. TRI-partisme = TRIO.\n\n'
                            + '📝 Piege Brevet : 1947 marque la fin de la "refondation" et le debut de la guerre froide.'
                    },
                    // CARD 12 — Suffrage universel
                    {
                        question: 'Pourquoi le suffrage devient-il VRAIMENT universel apres 1944 ?',
                        answer: '🎯 AVANT 1944 : seuls les HOMMES votent (depuis 1848).\n\n'
                            + 'On parlait de "suffrage universel" MASCULIN.\n'
                            + 'APRES 1944 : les FEMMES peuvent aussi voter.\n'
                            + 'Le suffrage devient VRAIMENT UNIVERSEL : tous les adultes votent.\n'
                            + 'Principe inscrit dans la Constitution de 1946.\n\n'
                            + 'En gros : avant 1944, la moitie du pays ne votait pas. Apres, tout le monde vote.\n\n'
                            + 'Mot difficile : "universel" = pour TOUS (universel = univers entier).\n\n'
                            + '💡 Astuce dys : avant 44 = MOITIE. Apres 44 = TOUT LE MONDE.\n\n'
                            + '📝 Piege Brevet : bien preciser que le suffrage n\'etait PAS vraiment universel avant 1944.'
                    },
                    // CARD 13 — Refondation
                    {
                        question: 'Pourquoi parle-t-on de "refondation" de la Republique ?',
                        answer: '🎯 "Refonder" = reconstruire sur de nouvelles bases.\n\n'
                            + 'Apres Vichy (qui avait supprime la democratie), il fallait TOUT refaire.\n'
                            + 'Refondation en 3 axes :\n'
                            + '• POLITIQUE : suffrage universel VRAI (femmes + hommes), nouvelle Constitution.\n'
                            + '• SOCIAL : Securite sociale, droits sociaux dans le Preambule.\n'
                            + '• ECONOMIQUE : nationalisations, role accru de l\'Etat.\n\n'
                            + 'En gros : une Republique plus DEMOCRATIQUE et plus SOCIALE qu\'avant.\n\n'
                            + 'Mot difficile : "refonder" = recreer, reconstruire depuis le debut.\n\n'
                            + '💡 Astuce dys : PSE = Politique + Social + Economique. 3 axes de refondation.\n\n'
                            + '📝 Piege Brevet : "refondation" = mot cle du chapitre. A utiliser dans tes reponses !'
                    },
                    // CARD 14 — Recap dates
                    {
                        question: 'Quelles sont les dates cles de 1944-1947 ?',
                        answer: '📅 RECAPITULATIF :\n\n'
                            + '• 15 MARS 1944 = programme du CNR.\n'
                            + '• 21 AVRIL 1944 = droit de vote des femmes.\n'
                            + '• 3 JUIN 1944 = GPRF (de Gaulle a sa tete).\n'
                            + '• AVRIL 1945 = 1er vote des femmes (municipales).\n'
                            + '• OCTOBRE 1945 = creation de la Securite sociale.\n'
                            + '• 20 JANVIER 1946 = de Gaulle demissionne.\n'
                            + '• 13 OCTOBRE 1946 = Constitution IVe Republique.\n'
                            + '• 1947 = fin du tripartisme, debut guerre froide.\n\n'
                            + 'En gros : en 3 ans, la France a refonde sa Republique.\n\n'
                            + '💡 Astuce dys : regroupe par annees : 44 / 45 / 46 / 47.\n\n'
                            + '📝 Piege Brevet : une frise chronologique est souvent demandee. Entraine-toi !'
                    }
                ],
                quiz: [
                    { question: 'Le programme du CNR est adopte en :', options: ['1940', '1943', '1944', '1946'], correctIndex: 2, explanation: '📅 15 mars 1944 : le Conseil National de la Resistance adopte son programme "Les Jours heureux".' },
                    { question: 'Le droit de vote des femmes est accorde par :', options: ['La loi Veil de 1975', 'L\'ordonnance du 21 avril 1944', 'La Constitution de 1958', 'La Revolution de 1848'], correctIndex: 1, explanation: '📅 Ordonnance du 21 avril 1944 (signee par de Gaulle). 1er vote en avril 1945.' },
                    { question: 'Le GPRF est dirige par :', options: ['Jean Moulin', 'Charles de Gaulle', 'Leon Blum', 'Maurice Thorez'], correctIndex: 1, explanation: '🎯 Gouvernement Provisoire de la Republique Francaise (1944-1946), preside par de Gaulle.' },
                    { question: 'La Securite sociale est creee en :', options: ['1936', '1945', '1958', '1981'], correctIndex: 1, explanation: '📅 Ordonnances d\'octobre 1945. Mise en oeuvre du programme du CNR.' },
                    { question: 'La Constitution de la IVe Republique est adoptee en :', options: ['1944', '1945', '1946', '1958'], correctIndex: 2, explanation: '📅 Adoptee par referendum le 13 octobre 1946 (apres un 1er projet rejete en mai).' },
                    { question: 'La IVe Republique est caracterisee par :', options: ['Un president fort', 'L\'instabilite gouvernementale', 'La disparition du Parlement', 'L\'abolition du vote'], correctIndex: 1, explanation: '⚠️ 22 gouvernements en 12 ans (1946-1958). Regime parlementaire instable.' },
                    { question: 'Une "nationalisation" signifie que :', options: ['L\'Etat vend une entreprise', 'L\'Etat rachete une entreprise privee', 'Un pays prend la nationalite francaise', 'On ferme une usine'], correctIndex: 1, explanation: '🎯 Nationaliser = faire passer du prive au public. Ex : Renault (1945), EDF (1946).' },
                    { question: 'Le Preambule de 1946 garantit :', options: ['Uniquement le droit de vote', 'Des droits sociaux (travail, greve, sante)', 'Le retour du roi', 'La monarchie'], correctIndex: 1, explanation: '🎯 Droits au travail, a la greve, au syndicat, a la sante, egalite hommes-femmes, ecole gratuite.' },
                    { question: 'En 1947, les ministres communistes sont :', options: ['Nommes au gouvernement', 'Renvoyes du gouvernement', 'Elus presidents', 'Arretes'], correctIndex: 1, explanation: '📅 Mai 1947 : fin du tripartisme. Debut de la guerre froide.' },
                    { question: 'L\'expression "Republique repensee" signifie :', options: ['La fin de la democratie', 'Une refondation plus sociale et democratique', 'Le retour de la monarchie', 'La dictature'], correctIndex: 1, explanation: '🎯 Apres Vichy, la Republique est refondee sur des bases plus DEMOCRATIQUES et plus SOCIALES.' }
                ]
            },

            // ================================================================
            // SECTION 6 : LES AIRES URBAINES (GEOGRAPHIE)
            // ================================================================
            {
                id: 'aires-urbaines',
                title: 'Les aires urbaines en France',
                icon: '\ud83c\udfd9\ufe0f',
                content: '<h3>\ud83c\udfd9\ufe0f Vivre dans une aire urbaine</h3>'
                    + '<ul>'
                    + '<li>85% des Francais vivent dans une aire urbaine</li>'
                    + '<li>Ville-centre + banlieue + couronne periurbaine</li>'
                    + '<li>Metropolisation, etalement urbain, mobilites</li>'
                    + '</ul>',
                flashcards: [
                    // CARD 1 — Definition aire urbaine
                    {
                        question: 'C\'est quoi une aire urbaine ?',
                        answer: '\ud83c\udfaf Une aire urbaine = une ville et TOUT ce qui tourne autour.\n\n'
                            + '3 zones :\n'
                            + '\u2022 VILLE-CENTRE : le coeur (ex : Lyon centre).\n'
                            + '\u2022 BANLIEUE : les communes juste a cote.\n'
                            + '\u2022 COURONNE PERIURBAINE : les communes plus loin.\n'
                            + 'Les habitants de la couronne vont TRAVAILLER en ville.\n'
                            + '85% des Francais vivent dans une aire urbaine.\n\n'
                            + 'En gros : une aire urbaine = une ville + tout ce qui gravite autour.\n\n'
                            + 'Mot difficile : "periurbain" = autour de la ville (peri = autour).\n\n'
                            + '\ud83d\udca1 Astuce dys : pense a une CIBLE de tir : centre (ville), 1er cercle (banlieue), 2e cercle (couronne).\n\n'
                            + '\ud83d\udcdd Piege Brevet : ne confonds pas "banlieue" et "couronne periurbaine". La couronne est PLUS LOIN.'
                    },
                    // CARD 2 — Ville-centre
                    {
                        question: 'C\'est quoi la ville-centre dans une aire urbaine ?',
                        answer: '\ud83c\udfaf La ville-centre = le COEUR de l\'aire urbaine.\n\n'
                            + 'C\'est la ou il y a le plus d\'activites.\n'
                            + 'Commerces, bureaux, universites, musees, hopitaux.\n'
                            + 'Les transports en commun y sont concentres.\n'
                            + 'Exemple : Paris, le centre de Lyon, le centre de Toulouse.\n'
                            + 'Souvent, les loyers y sont CHERS.\n\n'
                            + 'En gros : la ville-centre, c\'est la ou tout se passe.\n\n'
                            + 'Mot difficile : "centre-ville" = la partie la plus ancienne et active de la ville.\n\n'
                            + '\ud83d\udca1 Astuce dys : pense a TON college. S\'il est en centre-ville, tu es dans la ville-centre.\n\n'
                            + '\ud83d\udcdd Piege Brevet : la ville-centre se VIDE parfois de ses habitants (trop cher) au profit de la couronne.'
                    },
                    // CARD 3 — Periurbanisation
                    {
                        question: 'C\'est quoi la periurbanisation ?',
                        answer: '\ud83c\udfaf Les gens quittent le centre pour la PERIPHERIE.\n\n'
                            + 'Pourquoi ? Le logement est MOINS CHER.\n'
                            + 'On a un jardin, plus d\'espace, du calme.\n'
                            + 'MAIS : on est loin du travail.\n'
                            + 'Il faut une VOITURE pour tout.\n'
                            + 'Ca cree l\'ETALEMENT URBAIN (la ville s\'etale).\n\n'
                            + 'En gros : les gens veulent le calme ET les emplois de la ville.\n\n'
                            + 'Mot difficile : "etalement urbain" = la ville s\'etend de plus en plus.\n\n'
                            + '\ud83d\udca1 Astuce dys : pense a un gateau : si tu l\'etales, il devient PLAT et GRAND. Comme la ville.\n\n'
                            + '\ud83d\udcdd Piege Brevet : periurbanisation = consequences : embouteillages, pollution, dependance a la voiture.'
                    },
                    // CARD 4 — Metropolisation
                    {
                        question: 'C\'est quoi la metropolisation ?',
                        answer: '\ud83c\udfaf Les GRANDES villes attirent tout.\n\n'
                            + 'Population, richesse, emplois, pouvoir.\n'
                            + 'Les metropoles : Paris, Lyon, Marseille, Toulouse, Bordeaux.\n'
                            + 'Paris est LA grande metropole (12 millions d\'habitants).\n'
                            + 'Probleme : les petites villes se VIDENT.\n'
                            + 'Les services (hopitaux, ecoles) FERMENT en campagne.\n\n'
                            + 'En gros : les grosses villes attirent tout. Les petites perdent tout.\n\n'
                            + 'Mot difficile : "metropole" = tres grande ville qui concentre les activites.\n\n'
                            + '\ud83d\udca1 Astuce dys : "METRO-pole = comme le METRO. Ca attire les gens."\n\n'
                            + '\ud83d\udcdd Piege Brevet : cite toujours un EXEMPLE precis. "Paris, 1re aire urbaine francaise."'
                    },
                    // CARD 5 — Gentrification
                    {
                        question: 'C\'est quoi la gentrification ?',
                        answer: '\ud83c\udfaf Un quartier populaire qui devient BOURGEOIS.\n\n'
                            + 'Des gens plus riches s\'installent dans un quartier pauvre.\n'
                            + 'Les loyers MONTENT.\n'
                            + 'Les anciens habitants ne peuvent plus payer.\n'
                            + 'Ils sont forces de PARTIR en banlieue.\n'
                            + 'Exemple : certains quartiers de Paris (le Marais, Belleville).\n\n'
                            + 'En gros : un quartier change de population parce que les prix augmentent.\n\n'
                            + 'Mot difficile : "gentrification" = de "gentry" (petite noblesse en anglais).\n\n'
                            + '\ud83d\udca1 Astuce dys : "GENTRY = GENTILS riches qui remplacent les pauvres."\n\n'
                            + '\ud83d\udcdd Piege Brevet : la gentrification cree des INEGALITES. Les pauvres sont repousses toujours plus loin.'
                    },
                    // CARD 6 — Mobilites quotidiennes
                    {
                        question: 'C\'est quoi les mobilites quotidiennes ?',
                        answer: '\ud83c\udfaf Les deplacements que les gens font CHAQUE JOUR.\n\n'
                            + 'Domicile → travail → domicile.\n'
                            + 'On appelle ca les "mobilites PENDULAIRES".\n'
                            + 'Comme un pendule qui fait des allers-retours.\n'
                            + 'La VOITURE domine en zone periurbaine.\n'
                            + 'Problemes : embouteillages, pollution, cout de l\'essence.\n\n'
                            + 'En gros : les gens passent beaucoup de temps dans les transports.\n\n'
                            + 'Mot difficile : "pendulaire" = comme un pendule, aller-retour quotidien.\n\n'
                            + '\ud83d\udca1 Astuce dys : pense a TES parents. Ils vont au travail et reviennent. C\'est une mobilite pendulaire.\n\n'
                            + '\ud83d\udcdd Piege Brevet : les mobilites montrent le LIEN entre la couronne periurbaine et la ville-centre.'
                    },
                    // CARD 7 — Paris metropole mondiale
                    {
                        question: 'Pourquoi Paris domine-t-elle la France ?',
                        answer: '\ud83c\udfaf Paris concentre TOUT le pouvoir.\n\n'
                            + '\u2022 12 millions d\'habitants (aire urbaine).\n'
                            + '\u2022 Ministeres, Elysee, Assemblee nationale.\n'
                            + '\u2022 Sieges sociaux des grandes entreprises.\n'
                            + '\u2022 Grandes universites et centres de recherche.\n'
                            + '\u2022 Aeroports internationaux (Roissy, Orly).\n'
                            + 'On parle de MACROCEPHALIE : une tete trop grosse.\n\n'
                            + 'En gros : Paris est geante par rapport aux autres villes.\n\n'
                            + 'Mot difficile : "macrocephalie" = une ville trop grosse (macro = grand, cephale = tete).\n\n'
                            + '\ud83d\udca1 Astuce dys : "MACRO-CEPHALIE = GROSSE TETE. Paris a la grosse tete."\n\n'
                            + '\ud83d\udcdd Piege Brevet : le desequilibre Paris / province est un sujet CLASSIQUE. Cite Lyon ou Toulouse comme alternative.'
                    },
                    // CARD 8 — Exemple Lyon
                    {
                        question: 'Pourquoi Lyon est un bon exemple d\'aire urbaine ?',
                        answer: '\ud83c\udfaf Lyon = la 2e aire urbaine de France.\n\n'
                            + '\u2022 Ville-centre : le Vieux Lyon, la Part-Dieu (gare TGV).\n'
                            + '\u2022 Banlieue : Villeurbanne, Venissieux.\n'
                            + '\u2022 Couronne periurbaine : villages a 30 km.\n'
                            + '\u2022 Transports : metro, tramway, TGV (Paris en 2h).\n'
                            + '\u2022 Metropolisation : Lyon attire des entreprises et des etudiants.\n\n'
                            + 'En gros : Lyon montre bien les 3 zones d\'une aire urbaine.\n\n'
                            + '\ud83d\udca1 Astuce dys : si tu habites pres d\'une ville, repere : centre / banlieue / couronne. C\'est pareil partout.\n\n'
                            + '\ud83d\udcdd Piege Brevet : utilise un EXEMPLE concret dans ton developpement construit. Lyon est parfait.'
                    },
                    // CARD 9 — Etalement urbain consequences
                    {
                        question: 'Quelles sont les consequences de l\'etalement urbain ?',
                        answer: '\ud83c\udfaf L\'etalement urbain a des consequences NEGATIVES.\n\n'
                            + '\u2022 EMBOUTEILLAGES : trop de voitures chaque matin.\n'
                            + '\u2022 POLLUTION : CO2 des voitures.\n'
                            + '\u2022 TERRES AGRICOLES detruites (on construit dessus).\n'
                            + '\u2022 Dependance a la VOITURE (pas de bus en periurbain).\n'
                            + '\u2022 Cout de l\'ESSENCE qui pese sur les budgets.\n\n'
                            + 'En gros : la ville qui s\'etale pose des problemes pour l\'environnement.\n\n'
                            + 'Mot difficile : "artificialisation des sols" = transformer la nature en bitume.\n\n'
                            + '\ud83d\udca1 Astuce dys : pense aux BOUCHONS le matin. C\'est l\'etalement urbain.\n\n'
                            + '\ud83d\udcdd Piege Brevet : l\'etalement urbain est souvent lie au DEVELOPPEMENT DURABLE. Solutions = transports en commun, velo.'
                    },
                    // CARD 10 — Solutions mobilites
                    {
                        question: 'Quelles sont les solutions pour mieux se deplacer ?',
                        answer: '\ud83c\udfaf Plusieurs solutions existent pour reduire la voiture.\n\n'
                            + '\u2022 TRANSPORTS EN COMMUN : metro, tram, bus.\n'
                            + '\u2022 PISTES CYCLABLES : se deplacer a velo.\n'
                            + '\u2022 COVOITURAGE : partager sa voiture.\n'
                            + '\u2022 TELETRAVAIL : travailler depuis chez soi.\n'
                            + '\u2022 PARKINGS-RELAIS : voiture + metro.\n\n'
                            + 'En gros : il faut moins utiliser la voiture seul.\n\n'
                            + 'Mot difficile : "multimodalite" = utiliser plusieurs transports pour un trajet.\n\n'
                            + '\ud83d\udca1 Astuce dys : pense a comment TU vas au college. Bus ? Velo ? Voiture ? C\'est de la mobilite.\n\n'
                            + '\ud83d\udcdd Piege Brevet : cite des EXEMPLES concrets : "a Toulouse, le tramway relie la banlieue au centre."'
                    },
                    // CARD 11 — Diagonale du vide
                    {
                        question: 'C\'est quoi la "diagonale du vide" ?',
                        answer: '\ud83c\udfaf Une bande de territoire PEU PEUPLEE en France.\n\n'
                            + 'Du NORD-EST au SUD-OUEST.\n'
                            + 'Faible densite de population.\n'
                            + 'Peu d\'habitants, peu de services, peu d\'emplois.\n'
                            + 'Exemples : Lozere, Creuse, Meuse.\n'
                            + 'Les jeunes PARTENT vers les grandes villes.\n\n'
                            + 'En gros : une partie de la France se vide de ses habitants.\n\n'
                            + 'Mot difficile : "diagonale du vide" = zone de faible densite en diagonale.\n\n'
                            + '\ud83d\udca1 Astuce dys : trace une ligne de Meuse a Lozere sur la carte. C\'est la diagonale.\n\n'
                            + '\ud83d\udcdd Piege Brevet : ces espaces ont aussi des ATOUTS : nature, tourisme vert, teletravail.'
                    },
                    // CARD 12 — Schema aire urbaine
                    {
                        question: 'Comment dessiner le schema d\'une aire urbaine ?',
                        answer: '\ud83c\udfaf Le schema de l\'aire urbaine est un CLASSIQUE du brevet.\n\n'
                            + 'Dessine 3 CERCLES concentriques :\n'
                            + '\u2022 Cercle central (petit) = VILLE-CENTRE.\n'
                            + '\u2022 Cercle moyen = BANLIEUE.\n'
                            + '\u2022 Grand cercle = COURONNE PERIURBAINE.\n'
                            + 'Ajoute des FLECHES : domicile → travail (mobilites pendulaires).\n'
                            + 'Ajoute une ROUTE ou voie ferree vers le centre.\n\n'
                            + 'En gros : 3 cercles + des fleches = le schema parfait.\n\n'
                            + '\ud83d\udca1 Astuce dys : entraine-toi a dessiner ce schema 5 fois. Apres, c\'est automatique.\n\n'
                            + '\ud83d\udcdd Piege Brevet : N\'OUBLIE PAS la legende ! Chaque cercle doit etre nomme et colore.'
                    }
                ],
                quiz: [
                    { question: 'Une aire urbaine se compose de :', options: ['Seulement la ville-centre', 'Ville-centre + banlieue + couronne periurbaine', 'La banlieue uniquement', 'La campagne environnante'], correctIndex: 1, explanation: '\ud83c\udfaf Aire urbaine = ville-centre + banlieue + couronne periurbaine. 85% des Francais y vivent.' },
                    { question: 'La periurbanisation c\'est :', options: ['Le retour en centre-ville', 'L\'installation en peripherie des villes', 'La destruction des banlieues', 'La construction de tours'], correctIndex: 1, explanation: '\ud83c\udfaf Periurbanisation = les gens s\'installent en peripherie (maison, jardin, mais dependance voiture).' },
                    { question: '85% des Francais vivent :', options: ['A la campagne', 'Dans une aire urbaine', 'A l\'etranger', 'En montagne'], correctIndex: 1, explanation: '\ud83c\udfaf 85% des Francais vivent dans une aire urbaine. La France est un pays tres urbanise.' },
                    { question: 'La "diagonale du vide" designe :', options: ['Une autoroute', 'Une zone de forte densite', 'Une bande de faible densite NE-SO', 'Les DOM-TOM'], correctIndex: 2, explanation: '\ud83c\udfaf La diagonale du vide = zone peu peuplee allant du nord-est au sud-ouest.' },
                    { question: 'La metropolisation signifie :', options: ['Les villes retrecissent', 'Les grandes villes concentrent tout', 'Les campagnes attirent plus', 'Les villes moyennes grandissent'], correctIndex: 1, explanation: '\ud83c\udfaf Metropolisation = les grandes villes concentrent population, emplois, pouvoir.' },
                    { question: 'La gentrification c\'est quand :', options: ['Un quartier devient plus pauvre', 'Un quartier populaire devient bourgeois', 'Une ville ferme', 'La campagne se vide'], correctIndex: 1, explanation: '\ud83c\udfaf Gentrification = des gens plus riches arrivent, les loyers montent, les pauvres partent.' },
                    { question: 'Les mobilites pendulaires ce sont :', options: ['Les vacances d\'ete', 'Les deplacements quotidiens domicile-travail', 'Les demenagements', 'Les voyages a l\'etranger'], correctIndex: 1, explanation: '\ud83c\udfaf Mobilites pendulaires = allers-retours quotidiens domicile-travail (comme un pendule).' },
                    { question: 'La macrocephalie parisienne signifie :', options: ['Paris a un bon metro', 'Paris est trop dominante par rapport aux autres villes', 'Paris est petite', 'Paris est en danger'], correctIndex: 1, explanation: '\ud83c\udfaf Macrocephalie = Paris concentre trop de pouvoir et de population par rapport au reste.' },
                    { question: 'L\'etalement urbain cause :', options: ['Moins de pollution', 'Plus d\'embouteillages et de pollution', 'Plus de nature', 'Moins de voitures'], correctIndex: 1, explanation: '\ud83c\udfaf Etalement urbain = voitures, embouteillages, pollution, terres agricoles detruites.' },
                    { question: 'Une solution pour limiter l\'etalement urbain :', options: ['Construire plus de routes', 'Developper les transports en commun', 'Fermer les ecoles', 'Augmenter l\'essence'], correctIndex: 1, explanation: '\ud83c\udfaf Transports en commun, velo, covoiturage, teletravail = solutions a l\'etalement urbain.' }
                ]
            },

            // ================================================================
            // SECTION 7 : ESPACES PRODUCTIFS
            // ================================================================
            {
                id: 'espaces-productifs',
                title: 'Les espaces productifs en France',
                icon: '\ud83c\udf3e',
                content: '<h3>\ud83c\udf3e Espaces agricoles, industriels et touristiques</h3>'
                    + '<ul>'
                    + '<li>France = 1re puissance agricole de l\'UE</li>'
                    + '<li>Technopoles : Toulouse, Sophia Antipolis, Grenoble</li>'
                    + '<li>Tourisme : 1re destination mondiale</li>'
                    + '</ul>',
                flashcards: [
                    // CARD 1 — Espaces agricoles
                    {
                        question: 'C\'est quoi les espaces productifs agricoles ?',
                        answer: '\ud83c\udfaf La France est la 1re puissance AGRICOLE de l\'UE.\n\n'
                            + 'Grands espaces agricoles :\n'
                            + '\u2022 La BEAUCE : cereales (ble, mais). "Grenier de la France."\n'
                            + '\u2022 La BRETAGNE : elevage intensif (porcs, volailles).\n'
                            + '\u2022 Les VIGNOBLES : Bordeaux, Champagne, Bourgogne.\n'
                            + 'L\'agriculture s\'est MODERNISEE : machines, engrais, export.\n\n'
                            + 'En gros : la France nourrit la France et exporte dans le monde.\n\n'
                            + 'Mot difficile : "agriculture intensive" = produire un maximum sur peu d\'espace.\n\n'
                            + '\ud83d\udca1 Astuce dys : ton PAIN vient de la Beauce. Ton CHAMPAGNE vient de... Champagne. Logique !\n\n'
                            + '\ud83d\udcdd Piege Brevet : la Beauce = cereales. La Bretagne = elevage. Ne les confonds pas.'
                    },
                    // CARD 2 — Viticulture
                    {
                        question: 'C\'est quoi la viticulture en France ?',
                        answer: '\ud83c\udfaf La viticulture = la culture de la VIGNE (pour le vin).\n\n'
                            + 'La France est un des plus grands producteurs de vin.\n'
                            + 'Regions viticoles celebres : Bordeaux, Bourgogne, Champagne.\n'
                            + 'Le vin est un produit d\'EXPORTATION majeur.\n'
                            + 'C\'est aussi du PATRIMOINE culturel.\n'
                            + 'Label AOC : garantit l\'origine et la qualite.\n\n'
                            + 'En gros : le vin francais est vendu et connu dans le monde entier.\n\n'
                            + 'Mot difficile : "AOC" = Appellation d\'Origine Controlee (label de qualite).\n\n'
                            + '\ud83d\udca1 Astuce dys : "VITI-culture = culture de la VITIS (vigne en latin)."\n\n'
                            + '\ud83d\udcdd Piege Brevet : la viticulture = espace productif agricole integre dans la MONDIALISATION (export).'
                    },
                    // CARD 3 — Espaces industriels
                    {
                        question: 'Comment les espaces industriels ont-ils change ?',
                        answer: '\ud83c\udfaf L\'industrie francaise a beaucoup CHANGE.\n\n'
                            + 'AVANT : industrie LOURDE (charbon, acier) dans le Nord et l\'Est.\n'
                            + 'Ces usines ont FERME (crise, concurrence mondiale).\n'
                            + 'Chomage massif dans ces regions.\n\n'
                            + 'MAINTENANT : les TECHNOPOLES se developpent.\n'
                            + '\u2022 TOULOUSE : aeronautique (Airbus).\n'
                            + '\u2022 SOPHIA ANTIPOLIS (Nice) : haute technologie.\n'
                            + '\u2022 GRENOBLE : recherche, nanotechnologies.\n\n'
                            + 'En gros : l\'industrie lourde recule, les hautes technologies avancent.\n\n'
                            + 'Mot difficile : "technopole" = zone de hautes technologies + recherche.\n\n'
                            + '\ud83d\udca1 Astuce dys : "TECHNO-pole = POLE de TECHNOlogie."\n\n'
                            + '\ud83d\udcdd Piege Brevet : Sophia Antipolis est un exemple CLASSIQUE de technopole. Retiens ce nom.'
                    },
                    // CARD 4 — Reconversion Nord
                    {
                        question: 'C\'est quoi la reconversion industrielle du Nord ?',
                        answer: '\ud83c\udfaf Le Nord etait une grande region INDUSTRIELLE.\n\n'
                            + 'Mines de charbon, acier, textile.\n'
                            + 'A partir des annees 1970, ces industries FERMENT.\n'
                            + 'Chomage massif, misere, villes en declin.\n\n'
                            + 'RECONVERSION : changement d\'activites.\n'
                            + '\u2022 EURALILLE : quartier d\'affaires a Lille.\n'
                            + '\u2022 LOUVRE-LENS : musee pour attirer les touristes.\n'
                            + '\u2022 Nouvelles entreprises, services.\n\n'
                            + 'En gros : le Nord est passe de l\'usine au musee. Mais ca prend du temps.\n\n'
                            + 'Mot difficile : "reconversion" = changer d\'activite quand l\'ancienne ne marche plus.\n\n'
                            + '\ud83d\udca1 Astuce dys : "RECON-version = une NOUVELLE version de l\'economie."\n\n'
                            + '\ud83d\udcdd Piege Brevet : la reconversion est un sujet CLASSIQUE. Cite Euralille ou Louvre-Lens.'
                    },
                    // CARD 5 — Sophia Antipolis
                    {
                        question: 'C\'est quoi Sophia Antipolis ?',
                        answer: '\ud83c\udfaf Un TECHNOPOLE pres de Nice (Cote d\'Azur).\n\n'
                            + 'Cree en 1969. C\'est le plus grand technopole d\'Europe.\n'
                            + 'Plus de 2 000 entreprises de haute technologie.\n'
                            + 'Informatique, telecommunications, biotechnologies.\n'
                            + 'Pourquoi la ? Soleil, cadre de vie agreable, aeroport.\n\n'
                            + 'En gros : c\'est la "Silicon Valley" francaise, au soleil.\n\n'
                            + 'Mot difficile : "biotechnologies" = technologies liees au vivant (sante, ADN).\n\n'
                            + '\ud83d\udca1 Astuce dys : "SOPHIA = SAGESSE. Anti-POLIS = la cite intelligente."\n\n'
                            + '\ud83d\udcdd Piege Brevet : Sophia Antipolis est l\'exemple n\u00b01 de technopole au brevet. A connaitre !'
                    },
                    // CARD 6 — Toulouse aeronautique
                    {
                        question: 'Pourquoi Toulouse est la capitale de l\'aeronautique ?',
                        answer: '\ud83c\udfaf Toulouse = siege d\'AIRBUS, geant de l\'aviation.\n\n'
                            + 'L\'A380, l\'A350... sont assembles a Toulouse.\n'
                            + 'Des dizaines de milliers d\'emplois lies a l\'aeronautique.\n'
                            + 'Aussi : espace (CNES), recherche, universites.\n'
                            + 'Toulouse attire des ingenieurs du monde entier.\n\n'
                            + 'En gros : Toulouse fabrique les avions que tu prends en vacances.\n\n'
                            + 'Mot difficile : "aeronautique" = tout ce qui concerne les avions.\n\n'
                            + '\ud83d\udca1 Astuce dys : "TOULOUSE = les TOLES des avions. Tou-LOUSE fabrique les avions."\n\n'
                            + '\ud83d\udcdd Piege Brevet : Toulouse = espace productif industriel de HAUTE TECHNOLOGIE. Connecte a la mondialisation.'
                    },
                    // CARD 7 — Espaces touristiques
                    {
                        question: 'Pourquoi la France est la 1re destination touristique mondiale ?',
                        answer: '\ud83c\udfaf La France accueille environ 90 millions de touristes par an.\n\n'
                            + 'Pourquoi ?\n'
                            + '\u2022 PATRIMOINE : Paris, chateaux de la Loire, Mont-Saint-Michel.\n'
                            + '\u2022 LITTORAL : Cote d\'Azur, Bretagne, Corse.\n'
                            + '\u2022 MONTAGNE : Alpes (ski), Pyrenees.\n'
                            + '\u2022 GASTRONOMIE : fromage, vin, cuisine.\n'
                            + '\u2022 CULTURE : musees (Louvre), festivals.\n\n'
                            + 'En gros : la France a la mer, la montagne, la culture et la bonne bouffe.\n\n'
                            + 'Mot difficile : "tourisme balnéaire" = tourisme de plage (balnéaire = lié aux bains).\n\n'
                            + '\ud83d\udca1 Astuce dys : pense a tes VACANCES. Ou vas-tu ? Mer, montagne, ville ? C\'est du tourisme.\n\n'
                            + '\ud83d\udcdd Piege Brevet : le tourisme est un espace productif de SERVICES (secteur tertiaire). Pas d\'industrie.'
                    },
                    // CARD 8 — Mondialisation et territoires
                    {
                        question: 'Quel est le lien entre mondialisation et espaces productifs ?',
                        answer: '\ud83c\udfaf La MONDIALISATION change les espaces productifs.\n\n'
                            + '\u2022 Les usines FERMENT en France (main-d\'oeuvre moins chere ailleurs).\n'
                            + '\u2022 Les technopoles GAGNENT (innovation, recherche).\n'
                            + '\u2022 L\'agriculture EXPORTE dans le monde entier.\n'
                            + '\u2022 Le tourisme attire des visiteurs du monde entier.\n'
                            + 'Certains territoires GAGNENT, d\'autres PERDENT.\n\n'
                            + 'En gros : la mondialisation cree des gagnants et des perdants.\n\n'
                            + 'Mot difficile : "mondialisation" = echanges economiques a l\'echelle du monde.\n\n'
                            + '\ud83d\udca1 Astuce dys : "MONDIALISATION = le MONDE entier est connecte."\n\n'
                            + '\ud83d\udcdd Piege Brevet : montre que les espaces productifs sont CONNECTES au monde (exports, entreprises internationales).'
                    },
                    // CARD 9 — La Defense
                    {
                        question: 'C\'est quoi le quartier de La Defense ?',
                        answer: '\ud83c\udfaf La Defense = le 1er QUARTIER D\'AFFAIRES d\'Europe.\n\n'
                            + 'Situe pres de Paris (Hauts-de-Seine).\n'
                            + 'Des TOURS de bureaux immenses.\n'
                            + 'Sieges sociaux de grandes entreprises (Total, BNP...).\n'
                            + 'Plus de 150 000 personnes y travaillent.\n'
                            + 'La Grande Arche est son symbole.\n\n'
                            + 'En gros : La Defense, c\'est le centre economique de la France.\n\n'
                            + 'Mot difficile : "quartier d\'affaires" = zone ou se concentrent les bureaux et les entreprises.\n\n'
                            + '\ud83d\udca1 Astuce dys : "La DEFENSE = elle DEFEND l\'economie francaise. Les tours = la puissance."\n\n'
                            + '\ud83d\udcdd Piege Brevet : La Defense = exemple d\'espace productif de SERVICES, lie a la mondialisation.'
                    },
                    // CARD 10 — Problemes agriculture
                    {
                        question: 'Quels problemes rencontre l\'agriculture francaise ?',
                        answer: '\ud83c\udfaf L\'agriculture francaise est en CRISE.\n\n'
                            + '\u2022 Les agriculteurs gagnent MAL leur vie.\n'
                            + '\u2022 CONCURRENCE mondiale (produits moins chers d\'ailleurs).\n'
                            + '\u2022 POLLUTION : pesticides, engrais chimiques.\n'
                            + '\u2022 SURENDETTEMENT : les machines coutent cher.\n'
                            + '\u2022 Pression pour aller vers le BIO (plus cher a produire).\n\n'
                            + 'En gros : les agriculteurs produisent beaucoup mais vivent mal.\n\n'
                            + 'Mot difficile : "PAC" = Politique Agricole Commune de l\'UE. Subventions aux agriculteurs.\n\n'
                            + '\ud83d\udca1 Astuce dys : pense a ce que tu MANGES. Ca vient d\'un agriculteur qui galere.\n\n'
                            + '\ud83d\udcdd Piege Brevet : montre les 2 faces : la France est PUISSANTE agricolement mais ses agriculteurs SOUFFRENT.'
                    },
                    // CARD 11 — Secteur tertiaire dominant
                    {
                        question: 'Pourquoi le secteur tertiaire domine-t-il en France ?',
                        answer: '\ud83c\udfaf Le tertiaire emploie environ 75% des Francais.\n\n'
                            + 'Le tertiaire = les SERVICES.\n'
                            + 'Commerce, sante, education, banques, tourisme, informatique.\n'
                            + 'C\'est le secteur qui croit le plus.\n'
                            + 'L\'agriculture (primaire) : 3% des emplois.\n'
                            + 'L\'industrie (secondaire) : environ 20% des emplois.\n\n'
                            + 'En gros : la France est devenue un pays de SERVICES.\n\n'
                            + 'Mot difficile : "secteurs" : primaire = agriculture, secondaire = industrie, tertiaire = services.\n\n'
                            + '\ud83d\udca1 Astuce dys : "1-2-3 : Primaire-Secondaire-Tertiaire. Comme les classes. Le 3e domine."\n\n'
                            + '\ud83d\udcdd Piege Brevet : si on te demande le secteur dominant en France, c\'est le TERTIAIRE (75%). Chiffre a retenir.'
                    },
                    // CARD 12 — Schema espaces productifs
                    {
                        question: 'Comment localiser les espaces productifs sur une carte ?',
                        answer: '\ud83c\udfaf Sur une carte de France :\n\n'
                            + '\u2022 NORD + BASSIN PARISIEN : cereales (Beauce), reconversion (Lille).\n'
                            + '\u2022 OUEST (Bretagne) : elevage intensif.\n'
                            + '\u2022 SUD-OUEST (Toulouse) : aeronautique.\n'
                            + '\u2022 SUD-EST (Sophia Antipolis, Lyon) : technologies.\n'
                            + '\u2022 LITTORAUX : tourisme (Cote d\'Azur, Bretagne).\n'
                            + '\u2022 MONTAGNES : tourisme (ski dans les Alpes).\n\n'
                            + 'En gros : chaque region a sa specialite.\n\n'
                            + '\ud83d\udca1 Astuce dys : dessine la carte de France et place les specialites. C\'est VISUEL et efficace.\n\n'
                            + '\ud83d\udcdd Piege Brevet : au brevet, tu dois savoir LOCALISER les espaces productifs sur un croquis.'
                    }
                ],
                quiz: [
                    { question: 'La Beauce est connue pour :', options: ['L\'elevage', 'Les cereales', 'Le vin', 'Le tourisme'], correctIndex: 1, explanation: '\ud83c\udfaf La Beauce = "grenier de la France". Grande plaine cerealiere (ble, mais).' },
                    { question: 'Sophia Antipolis est :', options: ['Un musee', 'Un technopole pres de Nice', 'Une ile', 'Un stade'], correctIndex: 1, explanation: '\ud83c\udfaf Sophia Antipolis = le plus grand technopole d\'Europe. Informatique, telecom, biotech.' },
                    { question: 'Toulouse est connue pour :', options: ['Le charbon', 'L\'aeronautique (Airbus)', 'La peche', 'Le textile'], correctIndex: 1, explanation: '\ud83c\udfaf Toulouse = capitale de l\'aeronautique. Siege d\'Airbus.' },
                    { question: 'Le secteur tertiaire emploie environ :', options: ['25%', '50%', '75%', '10%'], correctIndex: 2, explanation: '\ud83c\udfaf Le tertiaire (services) emploie environ 75% des actifs. C\'est le secteur dominant.' },
                    { question: 'La Defense est :', options: ['Une base militaire', 'Le 1er quartier d\'affaires europeen', 'Un parc naturel', 'Un musee'], correctIndex: 1, explanation: '\ud83c\udfaf La Defense (pres de Paris) = 1er quartier d\'affaires d\'Europe. Tours, sieges sociaux.' },
                    { question: 'La Bretagne est connue pour :', options: ['Les cereales', 'L\'elevage intensif', 'L\'aeronautique', 'Les technologies'], correctIndex: 1, explanation: '\ud83c\udfaf La Bretagne = elevage intensif (porcs, volailles, lait).' },
                    { question: 'La reconversion industrielle du Nord passe par :', options: ['Plus de mines', 'Euralille et Louvre-Lens', 'Plus de charbon', 'L\'agriculture'], correctIndex: 1, explanation: '\ud83c\udfaf Le Nord se reconvertit : quartier d\'affaires (Euralille), culture (Louvre-Lens).' },
                    { question: 'La France est la ... destination touristique mondiale :', options: ['1re', '3e', '5e', '10e'], correctIndex: 0, explanation: '\ud83c\udfaf La France = 1re destination touristique mondiale (~90 millions de visiteurs par an).' },
                    { question: 'Un technopole regroupe :', options: ['Des fermes', 'Des entreprises de haute technologie et de la recherche', 'Des mines', 'Des ports'], correctIndex: 1, explanation: '\ud83c\udfaf Technopole = zone de haute technologie + centres de recherche + universites.' },
                    { question: 'La mondialisation fait que les espaces productifs :', options: ['Restent les memes', 'Evoluent (certains gagnent, d\'autres perdent)', 'Disparaissent', 'Sont tous ruraux'], correctIndex: 1, explanation: '\ud83c\udfaf La mondialisation cree des gagnants (technopoles) et des perdants (vieilles industries).' }
                ]
            },

            // ================================================================
            // SECTION 8 : AMENAGEMENT DU TERRITOIRE ET OUTRE-MER
            // ================================================================
            {
                id: 'amenagement',
                title: 'Amenagement du territoire & Outre-mer',
                icon: '\ud83c\udfd7\ufe0f',
                content: '<h3>\ud83c\udfd7\ufe0f Amenager pour reduire les inegalites</h3>'
                    + '<ul>'
                    + '<li>Inegalites : metropoles vs campagnes</li>'
                    + '<li>Acteurs : Etat, regions, UE</li>'
                    + '<li>DROM : Guadeloupe, Martinique, Reunion, Guyane, Mayotte</li>'
                    + '</ul>',
                flashcards: [
                    // CARD 1 — Definition amenagement
                    {
                        question: 'C\'est quoi l\'amenagement du territoire ?',
                        answer: '\ud83c\udfaf Amenager = REDUIRE les inegalites entre les regions.\n\n'
                            + 'Toutes les regions n\'ont pas les memes services.\n'
                            + 'Le but : que TOUT LE MONDE ait acces a la sante, l\'ecole, le transport.\n'
                            + 'Qui agit ?\n'
                            + '\u2022 L\'ETAT (lois, grands projets).\n'
                            + '\u2022 Les REGIONS et departements.\n'
                            + '\u2022 L\'UNION EUROPEENNE (fonds FEDER).\n\n'
                            + 'En gros : amenager = faire en sorte que ce soit juste PARTOUT.\n\n'
                            + 'Mot difficile : "FEDER" = Fonds Europeen de Developpement Regional.\n\n'
                            + '\ud83d\udca1 Astuce dys : "A-MENAGER = MENAGER (prendre soin de) le territoire."\n\n'
                            + '\ud83d\udcdd Piege Brevet : au brevet, cite TOUJOURS les 3 acteurs : Etat, collectivites locales, UE.'
                    },
                    // CARD 2 — Inegalites territoriales
                    {
                        question: 'Pourquoi il y a des inegalites entre les territoires ?',
                        answer: '\ud83c\udfaf Tous les territoires ne sont PAS egaux.\n\n'
                            + 'Regions RICHES : Ile-de-France, Lyon, Toulouse.\n'
                            + 'Elles ont tout : emplois, hopitaux, universites.\n\n'
                            + 'Regions en DIFFICULTE :\n'
                            + '\u2022 Zones rurales : manque de medecins, ecoles qui ferment.\n'
                            + '\u2022 Quartiers prioritaires (QPV) : pauvrete, chomage.\n'
                            + '\u2022 Anciens bassins industriels : usines fermees.\n\n'
                            + 'En gros : certains territoires ont tout, d\'autres manquent de tout.\n\n'
                            + 'Mot difficile : "QPV" = Quartier Prioritaire de la politique de la Ville.\n\n'
                            + '\ud83d\udca1 Astuce dys : pense a TON quartier. Il a une ecole, un medecin ? Tout le monde n\'a pas cette chance.\n\n'
                            + '\ud83d\udcdd Piege Brevet : donne des EXEMPLES precis d\'inegalites (desertification medicale, fermeture d\'ecoles).'
                    },
                    // CARD 3 — LGV
                    {
                        question: 'C\'est quoi les LGV et pourquoi c\'est important ?',
                        answer: '\ud83c\udfaf LGV = Ligne a Grande Vitesse (TGV).\n\n'
                            + 'Le TGV rapproche les villes :\n'
                            + '\u2022 Paris-Lyon en 2h.\n'
                            + '\u2022 Paris-Marseille en 3h.\n'
                            + '\u2022 Paris-Bordeaux en 2h.\n'
                            + 'Ca DESENCLAVE les regions (les rend plus accessibles).\n'
                            + 'Mais le reseau est en ETOILE autour de Paris.\n'
                            + 'Les liaisons entre villes de province sont moins bonnes.\n\n'
                            + 'En gros : le TGV rapproche les villes, mais tout passe par Paris.\n\n'
                            + 'Mot difficile : "desenclaver" = rendre un endroit isole plus accessible.\n\n'
                            + '\ud83d\udca1 Astuce dys : "LGV = Ligne Grande Vitesse. Tres RAPIDE, tres IMPORTANT."\n\n'
                            + '\ud83d\udcdd Piege Brevet : le reseau en etoile autour de Paris = une LIMITE de l\'amenagement.'
                    },
                    // CARD 4 — Desertification medicale
                    {
                        question: 'C\'est quoi la desertification medicale ?',
                        answer: '\ud83c\udfaf Le manque de MEDECINS dans certaines zones.\n\n'
                            + 'Les medecins preferent les grandes villes.\n'
                            + 'En campagne, certains patients font 50 km pour un docteur.\n'
                            + 'Les medecins de campagne partent a la retraite.\n'
                            + 'Personne ne les remplace.\n\n'
                            + 'Solutions :\n'
                            + '\u2022 MAISONS DE SANTE (regrouper des medecins).\n'
                            + '\u2022 TELEMEDECINE (consulter par video).\n'
                            + '\u2022 Aides a l\'installation en zone rurale.\n\n'
                            + 'En gros : dans certaines zones, il n\'y a plus de medecin.\n\n'
                            + 'Mot difficile : "telemedecine" = consulter un medecin a distance, par ecran.\n\n'
                            + '\ud83d\udca1 Astuce dys : imagine : tu es malade et le medecin est a 50 km. C\'est ca, la desertification medicale.\n\n'
                            + '\ud83d\udcdd Piege Brevet : la desertification medicale = un bon exemple d\'INEGALITE territoriale.'
                    },
                    // CARD 5 — Acteurs amenagement
                    {
                        question: 'Quels sont les acteurs de l\'amenagement ?',
                        answer: '\ud83c\udfaf 3 ACTEURS principaux :\n\n'
                            + '\u2022 L\'ETAT : il decide les grands projets (LGV, autoroutes, lois).\n'
                            + '\u2022 Les COLLECTIVITES locales : regions, departements, communes.\n'
                            + '  Elles gerent les lycees, colleges, routes departementales.\n'
                            + '\u2022 L\'UNION EUROPEENNE : fonds FEDER pour les regions pauvres.\n\n'
                            + 'Ils travaillent ENSEMBLE pour amenager le territoire.\n\n'
                            + 'En gros : l\'Etat, les regions et l\'Europe partagent le travail.\n\n'
                            + 'Mot difficile : "collectivites locales" = regions, departements et communes.\n\n'
                            + '\ud83d\udca1 Astuce dys : "3 A : l\'etat Agit, les regions Aident, l\'Europe Apporte de l\'argent."\n\n'
                            + '\ud83d\udcdd Piege Brevet : cite TOUJOURS les 3 acteurs. C\'est presque toujours demande.'
                    },
                    // CARD 6 — DROM definition
                    {
                        question: 'C\'est quoi les DROM ?',
                        answer: '\ud83c\udfaf DROM = Departements et Regions d\'Outre-Mer.\n\n'
                            + '5 DROM :\n'
                            + '\u2022 GUADELOUPE (Caraibes).\n'
                            + '\u2022 MARTINIQUE (Caraibes).\n'
                            + '\u2022 GUYANE (Amerique du Sud).\n'
                            + '\u2022 LA REUNION (Ocean Indien).\n'
                            + '\u2022 MAYOTTE (Ocean Indien).\n'
                            + 'Ce sont des territoires FRANCAIS hors de la metropole.\n\n'
                            + 'En gros : la France n\'est pas que l\'Hexagone. Elle est sur TOUS les oceans.\n\n'
                            + 'Mot difficile : "outre-mer" = au-dela des mers. Loin de la France metropolitaine.\n\n'
                            + '\ud83d\udca1 Astuce dys : "GU-MA-GUY-RE-MAY = Guadeloupe, Martinique, Guyane, Reunion, Mayotte."\n\n'
                            + '\ud83d\udcdd Piege Brevet : les 5 DROM = a CONNAITRE par coeur. Question ultra-classique.'
                    },
                    // CARD 7 — Atouts outre-mer
                    {
                        question: 'Quels sont les atouts des territoires ultra-marins ?',
                        answer: '\ud83c\udfaf Des atouts ENORMES pour la France :\n\n'
                            + '\u2022 La ZEE = 2e plus grande au MONDE (11 millions km2).\n'
                            + '\u2022 BIODIVERSITE incroyable : forets, coraux, especes uniques.\n'
                            + '\u2022 TOURISME : plages, volcans, culture creole.\n'
                            + '\u2022 POSITION STRATEGIQUE : bases militaires partout.\n'
                            + '\u2022 RESSOURCES : or (Guyane), espace (fusees Ariane a Kourou).\n\n'
                            + 'En gros : l\'outre-mer donne a la France une presence MONDIALE.\n\n'
                            + 'Mot difficile : "ZEE" = zone maritime de 200 milles ou la France a des droits exclusifs.\n\n'
                            + '\ud83d\udca1 Astuce dys : "ZEE = Zzone Enorme en Eau. La 2e du monde."\n\n'
                            + '\ud83d\udcdd Piege Brevet : cite la ZEE + la biodiversite. Ce sont les 2 atouts les plus importants.'
                    },
                    // CARD 8 — Contraintes outre-mer
                    {
                        question: 'Quelles sont les contraintes des territoires ultra-marins ?',
                        answer: '\ud83c\udfaf L\'outre-mer fait face a des DIFFICULTES.\n\n'
                            + '\u2022 ELOIGNEMENT : La Reunion est a 9 000 km de Paris.\n'
                            + '\u2022 COUT DE LA VIE tres eleve (tout est importe).\n'
                            + '\u2022 CHOMAGE massif (2 a 3 fois plus qu\'en metropole).\n'
                            + '\u2022 RISQUES NATURELS : cyclones, seismes, volcans.\n'
                            + '\u2022 DEPENDANCE economique envers la metropole.\n\n'
                            + 'En gros : l\'outre-mer est loin, cher et fragile.\n\n'
                            + 'Mot difficile : "insulaire" = qui concerne une ile.\n\n'
                            + '\ud83d\udca1 Astuce dys : imagine : tu vis a 9 000 km de Paris. Tout coute CHER. Pas facile !\n\n'
                            + '\ud83d\udcdd Piege Brevet : au brevet, on te demande souvent ATOUTS + CONTRAINTES. Fais un tableau a 2 colonnes.'
                    },
                    // CARD 9 — Guyane
                    {
                        question: 'Pourquoi la Guyane est un territoire particulier ?',
                        answer: '\ud83c\udfaf La Guyane est un DROM en Amerique du Sud.\n\n'
                            + 'Plus grand departement francais (83 000 km2).\n'
                            + 'Mais seulement 300 000 habitants.\n'
                            + '\n'
                            + 'ATOUTS :\n'
                            + '\u2022 Base de KOUROU (fusees Ariane).\n'
                            + '\u2022 Foret AMAZONIENNE (biodiversite).\n'
                            + '\u2022 OR (mines).\n\n'
                            + 'CONTRAINTES : immense, peu peuplee, acces difficile (foret).\n\n'
                            + 'En gros : la Guyane = espace, fusees et foret. Mais plein de defis.\n\n'
                            + '\ud83d\udca1 Astuce dys : "KOUROU = les fusees montent HAUT comme un KANGOUROU."\n\n'
                            + '\ud83d\udcdd Piege Brevet : Kourou = base spatiale. C\'est un atout STRATEGIQUE pour la France et l\'Europe.'
                    },
                    // CARD 10 — Politique de la ville
                    {
                        question: 'C\'est quoi la politique de la ville ?',
                        answer: '\ud83c\udfaf Des actions pour ameliorer les QUARTIERS PRIORITAIRES.\n\n'
                            + 'Les QPV concentrent la pauvrete et le chomage.\n'
                            + 'Actions :\n'
                            + '\u2022 Renovation URBAINE : demolir les barres d\'immeubles vetustes.\n'
                            + '\u2022 Construire des logements NEUFS.\n'
                            + '\u2022 Creer des EMPLOIS (zones franches).\n'
                            + '\u2022 Ameliorer les TRANSPORTS.\n'
                            + '\u2022 Plus de services publics (ecoles, sante).\n\n'
                            + 'En gros : aider les quartiers ou les gens ont le plus de difficultes.\n\n'
                            + 'Mot difficile : "zone franche" = zone ou les entreprises paient moins d\'impots.\n\n'
                            + '\ud83d\udca1 Astuce dys : "QPV = Quartier qui a besoin de Plus de Vie."\n\n'
                            + '\ud83d\udcdd Piege Brevet : la politique de la ville est un AMENAGEMENT. Cite un exemple concret de renovation.'
                    },
                    // CARD 11 — Role UE amenagement
                    {
                        question: 'Quel est le role de l\'Union europeenne dans l\'amenagement ?',
                        answer: '\ud83c\udfaf L\'UE aide les regions en DIFFICULTE.\n\n'
                            + 'Principal outil : le FEDER.\n'
                            + 'Fonds Europeen de Developpement Regional.\n'
                            + 'Il finance :\n'
                            + '\u2022 Des ROUTES, ponts, haut debit.\n'
                            + '\u2022 Des projets ECONOMIQUES.\n'
                            + '\u2022 Des projets ENVIRONNEMENTAUX.\n'
                            + 'Les regions les plus pauvres recoivent le plus.\n'
                            + 'L\'outre-mer en beneficie beaucoup.\n\n'
                            + 'En gros : l\'Europe donne de l\'argent aux regions qui en ont besoin.\n\n'
                            + '\ud83d\udca1 Astuce dys : "FEDER = il FEDERE (reunit) les regions grâce a l\'argent."\n\n'
                            + '\ud83d\udcdd Piege Brevet : le FEDER est la reponse quand on te demande le ROLE DE L\'UE dans l\'amenagement.'
                    },
                    // CARD 12 — Numerique et amenagement
                    {
                        question: 'Pourquoi le numerique est-il important pour l\'amenagement ?',
                        answer: '\ud83c\udfaf Le NUMERIQUE peut reduire les inegalites.\n\n'
                            + '\u2022 La FIBRE optique : internet rapide partout.\n'
                            + '\u2022 Le TELETRAVAIL : travailler de chez soi, meme a la campagne.\n'
                            + '\u2022 La TELEMEDECINE : voir un medecin a distance.\n'
                            + '\u2022 Les services EN LIGNE : demarches administratives.\n\n'
                            + 'Probleme : toutes les zones n\'ont PAS la fibre.\n'
                            + 'Certaines campagnes n\'ont meme pas de bon reseau 4G.\n\n'
                            + 'En gros : internet peut compenser l\'eloignement. Mais il faut la fibre partout.\n\n'
                            + 'Mot difficile : "fracture numerique" = inegalite d\'acces a internet.\n\n'
                            + '\ud83d\udca1 Astuce dys : si tu n\'avais PAS internet, comment ferais-tu tes devoirs ? C\'est ca, la fracture numerique.\n\n'
                            + '\ud83d\udcdd Piege Brevet : le numerique est un AMENAGEMENT MODERNE. C\'est un sujet de plus en plus frequent.'
                    }
                ],
                quiz: [
                    { question: 'L\'amenagement du territoire vise a :', options: ['Augmenter les inegalites', 'Reduire les inegalites', 'Concentrer tout sur Paris', 'Fermer les services publics'], correctIndex: 1, explanation: '\ud83c\udfaf Amenager = reduire les inegalites pour que tous aient acces aux memes services.' },
                    { question: 'Les DROM comprennent :', options: ['Corse et Bretagne', 'Guadeloupe, Martinique, Guyane, Reunion, Mayotte', 'Seulement la Polynesie', 'Alsace et Lorraine'], correctIndex: 1, explanation: '\ud83c\udfaf Les 5 DROM : Guadeloupe, Martinique, Guyane, La Reunion, Mayotte.' },
                    { question: 'La ZEE de la France est la :', options: ['Plus petite du monde', '2e plus grande du monde', '10e plus grande', 'Inexistante'], correctIndex: 1, explanation: '\ud83c\udfaf Grace a l\'outre-mer, la France a la 2e ZEE du monde (11 millions de km2).' },
                    { question: 'La base de Kourou se trouve :', options: ['En Martinique', 'En Guyane', 'A la Reunion', 'A Mayotte'], correctIndex: 1, explanation: '\ud83c\udfaf Kourou (Guyane) = base spatiale. C\'est de la que partent les fusees Ariane.' },
                    { question: 'Le FEDER est :', options: ['Un fonds europeen pour les regions en difficulte', 'Une banque francaise', 'Un transport', 'Un parti politique'], correctIndex: 0, explanation: '\ud83c\udfaf FEDER = Fonds Europeen de Developpement Regional. Aide les regions pauvres.' },
                    { question: 'La desertification medicale touche surtout :', options: ['Paris', 'Les grandes villes', 'Les zones rurales et petites villes', 'Les quartiers riches'], correctIndex: 2, explanation: '\ud83c\udfaf Desertification medicale = manque de medecins dans les campagnes et petites villes.' },
                    { question: 'Un QPV c\'est :', options: ['Un Quartier Prioritaire de la politique de la Ville', 'Un Quartier de Paris', 'Un parc naturel', 'Un type de logement'], correctIndex: 0, explanation: '\ud83c\udfaf QPV = quartier en difficulte (pauvrete, chomage) qui beneficie d\'aides specifiques.' },
                    { question: 'La principale contrainte de l\'outre-mer est :', options: ['Le froid', 'L\'eloignement', 'Le manque de soleil', 'La surpopulation'], correctIndex: 1, explanation: '\ud83c\udfaf L\'eloignement (La Reunion = 9 000 km) entraine un cout de vie eleve et une dependance.' }
                ]
            },

            // ================================================================
            // SECTION 9 : FRANCE ET UE + METHODE BREVET
            // ================================================================
            {
                id: 'france-ue-methode',
                title: 'France et UE + Methode Brevet',
                icon: '\ud83c\uddea\ud83c\uddfa',
                content: '<h3>\ud83c\uddea\ud83c\uddfa La France dans l\'Union europeenne et le monde</h3>'
                    + '<ul>'
                    + '<li>UE : 27 pays, institutions, avantages</li>'
                    + '<li>France : puissance mondiale</li>'
                    + '<li>METHODE BREVET : developpement construit, analyse de doc, croquis</li>'
                    + '</ul>',
                flashcards: [
                    // CARD 1 — UE aujourd'hui
                    {
                        question: 'Combien de pays dans l\'UE et quelles sont les institutions ?',
                        answer: '\ud83c\udfaf L\'UE compte 27 PAYS membres (depuis le Brexit).\n\n'
                            + 'Institutions principales :\n'
                            + '\u2022 COMMISSION europeenne (Bruxelles) : propose les lois.\n'
                            + '\u2022 PARLEMENT europeen (Strasbourg) : vote les lois.\n'
                            + '\u2022 CONSEIL de l\'UE : les ministres des pays votent.\n'
                            + '\u2022 COUR DE JUSTICE (Luxembourg) : fait respecter les lois.\n\n'
                            + 'En gros : l\'UE a ses propres institutions, comme un gouvernement europeen.\n\n'
                            + 'Mot difficile : "Commission" = le "gouvernement" de l\'UE. Elle ne legifere pas, elle propose.\n\n'
                            + '\ud83d\udca1 Astuce dys : "COMMISSION = elle COMMANDE les idees de lois. Le PARLEMENT les VOTE."\n\n'
                            + '\ud83d\udcdd Piege Brevet : Parlement = Strasbourg. Commission = Bruxelles. Ne les confonds pas.'
                    },
                    // CARD 2 — Avantages UE
                    {
                        question: 'Quels sont les avantages de l\'Union europeenne ?',
                        answer: '\ud83c\udfaf L\'UE offre de NOMBREUX avantages.\n\n'
                            + '\u2022 PAIX : pas de guerre entre pays membres depuis 1945.\n'
                            + '\u2022 LIBRE CIRCULATION : voyager sans passeport (Schengen).\n'
                            + '\u2022 L\'EURO : meme monnaie dans 20 pays.\n'
                            + '\u2022 ERASMUS : etudier a l\'etranger.\n'
                            + '\u2022 MARCHE UNIQUE : commercer librement.\n'
                            + '\u2022 FONDS d\'aide (FEDER) pour les regions pauvres.\n\n'
                            + 'En gros : l\'UE = paix + liberte de circulation + aides economiques.\n\n'
                            + '\ud83d\udca1 Astuce dys : "P-L-E-M-E-F : Paix, Libre circulation, Euro, Marche, Erasmus, Fonds."\n\n'
                            + '\ud83d\udcdd Piege Brevet : le brevet te demande souvent les AVANTAGES de l\'UE. Cite au moins 3.'
                    },
                    // CARD 3 — Brexit
                    {
                        question: 'C\'est quoi le Brexit ?',
                        answer: '\ud83c\udfaf Le DEPART du Royaume-Uni de l\'UE.\n\n'
                            + '\ud83d\udcc5 Juin 2016 : referendum. 52% votent pour le depart.\n'
                            + '\ud83d\udcc5 31 janvier 2020 : le Brexit est effectif.\n'
                            + 'Le Royaume-Uni quitte le marche unique et Schengen.\n'
                            + 'Les echanges commerciaux sont devenus plus compliques.\n'
                            + 'L\'UE passe de 28 a 27 membres.\n\n'
                            + 'En gros : pour la 1re fois, un pays a quitte l\'UE.\n\n'
                            + 'Mot difficile : "Brexit" = British + Exit (sortie britannique).\n\n'
                            + '\ud83d\udca1 Astuce dys : "BRIT-ish EXIT = la SORTIE des BRITanniques."\n\n'
                            + '\ud83d\udcdd Piege Brevet : le Brexit montre que l\'UE n\'est pas IRREVERSIBLE. C\'est un argument pour les eurosceptiques.'
                    },
                    // CARD 4 — France puissance mondiale
                    {
                        question: 'Pourquoi la France est-elle une puissance mondiale ?',
                        answer: '\ud83c\udfaf La France a une influence MONDIALE.\n\n'
                            + '\u2022 Membre PERMANENT du Conseil de securite de l\'ONU.\n'
                            + '\u2022 Puissance NUCLEAIRE (arme atomique).\n'
                            + '\u2022 2e ZEE du monde (outre-mer).\n'
                            + '\u2022 FRANCOPHONIE : 300 millions de francophones.\n'
                            + '\u2022 Influence CULTURELLE : gastronomie, mode, luxe.\n'
                            + '\u2022 7e PIB mondial.\n'
                            + '\u2022 Armee deployee a l\'etranger.\n\n'
                            + 'En gros : la France est petite par la taille, grande par l\'influence.\n\n'
                            + 'Mot difficile : "soft power" = influence par la culture (pas par les armes).\n\n'
                            + '\ud83d\udca1 Astuce dys : "La France = P-N-Z-F-C : Permanent, Nucleaire, ZEE, Francophonie, Culture."\n\n'
                            + '\ud83d\udcdd Piege Brevet : la France dans le monde = sujet TRES frequent. Connais les 5 arguments.'
                    },
                    // CARD 5 — Espace Schengen
                    {
                        question: 'C\'est quoi l\'espace Schengen ?',
                        answer: '\ud83c\udfaf Schengen = LIBRE CIRCULATION des personnes.\n\n'
                            + 'Tu peux passer d\'un pays a l\'autre SANS passeport.\n'
                            + '27 pays en font partie.\n'
                            + 'Pas tous les pays de l\'UE sont dans Schengen.\n'
                            + 'Et certains pays hors UE y sont (Suisse, Norvege).\n'
                            + 'Les frontieres EXTERIEURES sont surveillees.\n\n'
                            + 'En gros : dans Schengen, pas de controle aux frontieres entre pays.\n\n'
                            + 'Mot difficile : "Schengen" = village du Luxembourg ou l\'accord a ete signe.\n\n'
                            + '\ud83d\udca1 Astuce dys : pense a tes vacances : tu passes de France en Espagne SANS montrer ton passeport. C\'est Schengen.\n\n'
                            + '\ud83d\udcdd Piege Brevet : Schengen =/= UE. Ce n\'est pas exactement les memes pays.'
                    },
                    // CARD 6 — Francophonie
                    {
                        question: 'C\'est quoi la francophonie ?',
                        answer: '\ud83c\udfaf La francophonie = les pays et personnes qui parlent FRANCAIS.\n\n'
                            + 'Environ 300 millions de francophones dans le monde.\n'
                            + 'Sur les 5 continents.\n'
                            + 'L\'OIF (Organisation Internationale de la Francophonie) : 88 Etats.\n'
                            + 'Le francais est la 5e langue la plus parlee.\n'
                            + 'C\'est un outil d\'INFLUENCE pour la France.\n\n'
                            + 'En gros : le francais est parle sur tous les continents.\n\n'
                            + 'Mot difficile : "OIF" = Organisation Internationale de la Francophonie.\n\n'
                            + '\ud83d\udca1 Astuce dys : "FRANCOPHONIE = les gens qui parlent FRANCAIS au telephone (PHONIE = son)."\n\n'
                            + '\ud83d\udcdd Piege Brevet : la francophonie montre le RAYONNEMENT culturel de la France. C\'est du "soft power".'
                    },
                    // CARD 7 — METHODE : Developpement construit
                    {
                        question: '\ud83d\udcdd METHODE : Comment faire un developpement construit au brevet ?',
                        answer: '\ud83c\udfaf Le developpement construit = une REDACTION structuree.\n\n'
                            + 'Structure obligatoire en 3 parties :\n'
                            + '\u2022 INTRODUCTION : presente le sujet en 2-3 phrases.\n'
                            + '\u2022 DEVELOPPEMENT : 2 ou 3 paragraphes avec des arguments.\n'
                            + '  Chaque paragraphe = 1 idee + 1 exemple precis.\n'
                            + '\u2022 CONCLUSION : resume en 2 phrases.\n\n'
                            + 'ASTUCES :\n'
                            + '\u2022 Commence chaque paragraphe par un MOT DE LIAISON.\n'
                            + '\u2022 Utilise des DATES et des NOMS precis.\n'
                            + '\u2022 Ecris des phrases COURTES.\n\n'
                            + 'En gros : intro + 2-3 paragraphes + conclusion. Toujours des exemples.\n\n'
                            + '\ud83d\udca1 Astuce dys : ecris sur ton brouillon : "I - D1 - D2 - C" (Intro, Dev1, Dev2, Conclu).\n\n'
                            + '\ud83d\udcdd Piege Brevet : le hors-sujet fait PERDRE des points. Lis bien le sujet 2 fois avant d\'ecrire.'
                    },
                    // CARD 8 — METHODE : Analyser un document
                    {
                        question: '\ud83d\udcdd METHODE : Comment analyser un document au brevet ?',
                        answer: '\ud83c\udfaf Methode en 4 etapes :\n\n'
                            + '1) PRESENTER le document :\n'
                            + '   Nature (photo, carte, texte, affiche), auteur, date, source.\n\n'
                            + '2) DECRIRE ce que tu vois :\n'
                            + '   "On voit que...", "Le document montre que..."\n\n'
                            + '3) EXPLIQUER avec tes connaissances :\n'
                            + '   Relie le document a ton cours.\n\n'
                            + '4) CONCLURE :\n'
                            + '   Le document est-il fiable ? Objectif ou propagande ?\n\n'
                            + 'En gros : je presente, je decris, j\'explique, je critique.\n\n'
                            + '\ud83d\udca1 Astuce dys : retiens "P-D-E-C" : Presenter, Decrire, Expliquer, Conclure.\n\n'
                            + '\ud83d\udcdd Piege Brevet : N\'OUBLIE PAS de presenter le document. Beaucoup d\'eleves sautent cette etape et perdent des points.'
                    },
                    // CARD 9 — METHODE : Faire un croquis
                    {
                        question: '\ud83d\udcdd METHODE : Comment faire un croquis au brevet ?',
                        answer: '\ud83c\udfaf Le croquis = une carte SIMPLIFIEE avec une legende.\n\n'
                            + 'Etapes :\n'
                            + '1) Lis bien le SUJET du croquis.\n'
                            + '2) Fais une LEGENDE organisee (2-3 parties).\n'
                            + '3) Utilise des FIGURÉS :\n'
                            + '   - Surfaces : couleurs (rouge = fort, vert = faible).\n'
                            + '   - Points : villes, lieux importants.\n'
                            + '   - Fleches : deplacements, echanges.\n'
                            + '4) NOMME les lieux importants.\n'
                            + '5) Donne un TITRE au croquis.\n\n'
                            + 'En gros : legende organisee + carte coloriee + titre.\n\n'
                            + '\ud83d\udca1 Astuce dys : colorie PROPREMENT et LEGEREMENT. Pas de feutre ! Utilise des crayons de couleur.\n\n'
                            + '\ud83d\udcdd Piege Brevet : une legende MAL organisee = des points en moins. Fais des parties claires.'
                    },
                    // CARD 10 — METHODE : Les mots de liaison
                    {
                        question: '\ud83d\udcdd METHODE : Quels mots de liaison utiliser au brevet ?',
                        answer: '\ud83c\udfaf Les mots de liaison STRUCTURENT ta redaction.\n\n'
                            + 'Pour COMMENCER :\n'
                            + '"Tout d\'abord...", "Premierement...", "D\'une part..."\n\n'
                            + 'Pour AJOUTER :\n'
                            + '"De plus...", "Ensuite...", "Par ailleurs...", "D\'autre part..."\n\n'
                            + 'Pour OPPOSER :\n'
                            + '"Cependant...", "Toutefois...", "En revanche...", "Neanmoins..."\n\n'
                            + 'Pour CONCLURE :\n'
                            + '"Finalement...", "En conclusion...", "Ainsi..."\n\n'
                            + 'En gros : les mots de liaison montrent que tu sais ORGANISER tes idees.\n\n'
                            + '\ud83d\udca1 Astuce dys : ecris ces mots sur un POST-IT et colle-le sur ton bureau. Tu les sauras par coeur.\n\n'
                            + '\ud83d\udcdd Piege Brevet : un devoir SANS mots de liaison = impression de brouillon. Ca coute des points.'
                    },
                    // CARD 11 — METHODE : Gestion du temps
                    {
                        question: '\ud83d\udcdd METHODE : Comment gerer son temps au brevet d\'histoire-geo ?',
                        answer: '\ud83c\udfaf L\'epreuve dure 2 HEURES. Gere bien ton temps.\n\n'
                            + 'Repartition conseillee :\n'
                            + '\u2022 5 min : lire TOUT le sujet.\n'
                            + '\u2022 30 min : exercice 1 (questions sur documents).\n'
                            + '\u2022 40 min : exercice 2 (developpement construit).\n'
                            + '\u2022 30 min : exercice 3 (geo ou EMC).\n'
                            + '\u2022 15 min : RELECTURE (tres important !).\n\n'
                            + 'En gros : ne passe pas trop de temps sur un exercice. Surveille ta montre.\n\n'
                            + '\ud83d\udca1 Astuce dys : prends une MONTRE (pas de telephone). Note l\'heure de fin de chaque exercice.\n\n'
                            + '\ud83d\udcdd Piege Brevet : beaucoup d\'eleves n\'ont PAS le temps de finir. La gestion du temps, c\'est LA cle.'
                    },
                    // CARD 12 — METHODE : Erreurs frequentes
                    {
                        question: '\ud83d\udcdd METHODE : Quelles sont les erreurs frequentes au brevet ?',
                        answer: '\ud83c\udfaf Les erreurs qui font perdre des points :\n\n'
                            + '\u26a0\ufe0f Erreur 1 : ne pas PRESENTER le document (nature, date, auteur).\n'
                            + '\u26a0\ufe0f Erreur 2 : PARAPHRASER le document (repeter sans expliquer).\n'
                            + '\u26a0\ufe0f Erreur 3 : oublier les EXEMPLES precis (dates, noms, lieux).\n'
                            + '\u26a0\ufe0f Erreur 4 : ne pas faire de PARAGRAPHES dans le developpement.\n'
                            + '\u26a0\ufe0f Erreur 5 : ne pas RELIRE (fautes d\'orthographe, oublis).\n'
                            + '\u26a0\ufe0f Erreur 6 : confondre les DATES (1914 et 1939, par exemple).\n\n'
                            + 'En gros : presente, explique (ne paraphrase pas), donne des exemples, relis.\n\n'
                            + '\ud83d\udca1 Astuce dys : avant de rendre ta copie, verifie : "J\'ai presente ? J\'ai donne des exemples ? J\'ai conclu ?"\n\n'
                            + '\ud83d\udcdd Piege Brevet : la RELECTURE fait gagner 1 a 2 points facilement. Ne la saute JAMAIS.'
                    }
                ],
                quiz: [
                    { question: 'L\'UE compte combien de pays en 2024 ?', options: ['15', '27', '30', '50'], correctIndex: 1, explanation: '\ud83c\udfaf 27 pays depuis le depart du Royaume-Uni (Brexit, 2020).' },
                    { question: 'Le Parlement europeen siege a :', options: ['Bruxelles', 'Strasbourg', 'Luxembourg', 'Paris'], correctIndex: 1, explanation: '\ud83c\udfaf Le Parlement europeen siege a Strasbourg. La Commission est a Bruxelles.' },
                    { question: 'Le Brexit c\'est :', options: ['L\'entree du R-U dans l\'UE', 'La sortie du R-U de l\'UE', 'Un traite', 'Une monnaie'], correctIndex: 1, explanation: '\ud83c\udfaf Brexit = British Exit. Le Royaume-Uni quitte l\'UE le 31 janvier 2020.' },
                    { question: 'La France est membre permanent :', options: ['Du Parlement europeen', 'Du Conseil de securite de l\'ONU', 'De l\'OPEP', 'Du G7 uniquement'], correctIndex: 1, explanation: '\ud83c\udfaf La France est l\'un des 5 membres permanents du Conseil de securite de l\'ONU.' },
                    { question: 'Un developpement construit a :', options: ['Juste un paragraphe', 'Intro + developpement + conclusion', 'Seulement une conclusion', 'Des listes a puces'], correctIndex: 1, explanation: '\ud83c\udfaf Developpement construit = introduction + 2-3 paragraphes + conclusion. Structure obligatoire.' },
                    { question: 'Pour analyser un document, la 1re etape est :', options: ['Donner son avis', 'Presenter le document (nature, date, auteur)', 'Copier le texte', 'Faire un dessin'], correctIndex: 1, explanation: '\ud83c\udfaf 1re etape : PRESENTER le document. Nature, auteur, date, source. Toujours.' },
                    { question: 'L\'espace Schengen permet :', options: ['Le controle renforce', 'La libre circulation sans passeport', 'L\'utilisation de l\'euro', 'Le vote europeen'], correctIndex: 1, explanation: '\ud83c\udfaf Schengen = libre circulation des personnes sans controle aux frontieres.' },
                    { question: 'Combien de temps dure l\'epreuve de brevet histoire-geo ?', options: ['1 heure', '2 heures', '3 heures', '4 heures'], correctIndex: 1, explanation: '\ud83c\udfaf L\'epreuve dure 2 heures. Gere bien ton temps : 5 min lecture + 30 + 40 + 30 + 15 relecture.' }
                ]
            }
        ]
    });
})();
