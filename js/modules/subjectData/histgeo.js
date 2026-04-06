// histgeo.js — Donnees Histoire-Geographie (10 sections)
(function() {
    if (!window.StudFlow || !window.StudFlow.subjects) return;

    window.StudFlow.subjects.register({
        id: 'histoire',
        name: 'Histoire-Geo',
        icon: '\uD83C\uDF0D',
        color: 'sky',
        sections: [
            {
                id: 'revolution',
                title: 'La Revolution francaise',
                icon: '\uD83C\uDFF0',
                content: '<h3>Les causes de la Revolution (1789)</h3>'
                    + '<ul>'
                    + '<li><strong>Crise financiere</strong> : dette colossale de l\'Etat, impots injustes (le Tiers-Etat paie l\'essentiel)</li>'
                    + '<li><strong>Crise sociale</strong> : inegalites entre les trois ordres (clerge, noblesse, Tiers-Etat)</li>'
                    + '<li><strong>Influence des Lumieres</strong> : Voltaire, Rousseau, Montesquieu remettent en cause l\'absolutisme</li>'
                    + '</ul>'
                    + '<h3>Les grandes etapes</h3>'
                    + '<ol>'
                    + '<li><strong>1789</strong> : Etats generaux → Serment du Jeu de Paume → Prise de la Bastille (14 juillet) → Abolition des privileges (4 aout) → DDHC (26 aout)</li>'
                    + '<li><strong>1791</strong> : Monarchie constitutionnelle, fuite du roi a Varennes</li>'
                    + '<li><strong>1792</strong> : Chute de la monarchie, proclamation de la Republique</li>'
                    + '<li><strong>1793-1794</strong> : La Terreur sous Robespierre</li>'
                    + '<li><strong>1799</strong> : Coup d\'Etat de Napoleon Bonaparte</li>'
                    + '</ol>'
                    + '<h3>L\'heritage revolutionnaire</h3>'
                    + '<ul>'
                    + '<li>Declaration des Droits de l\'Homme et du Citoyen</li>'
                    + '<li>Abolition des privileges et de la feodalite</li>'
                    + '<li>Principes de liberté, égalité, souverainete nationale</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'Quelle est la date de la prise de la Bastille ?', answer: 'Le 14 juillet 1789. Le peuple de Paris prend la Bastille, une prison-forteresse symbole du pouvoir royal. En gros : c\'est le debut de la Revolution. C\'est pour ca que le 14 juillet est la fete nationale. Mots difficiles : "absolutisme" = pouvoir total du roi, sans limites.' },
                    { question: 'C\'est quoi la DDHC ?', answer: 'La Declaration des Droits de l\'Homme et du Citoyen. Adoptee le 26 aout 1789. Elle dit : tous les hommes naissent libres et egaux en droits. 4 droits fondamentaux : liberté, propriété, surete (sécurité), resistance a l\'oppression. En gros : c\'est le texte fondateur des droits de l\'homme en France. Mots difficiles : "droits naturels" = droits qu\'on a juste parce qu\'on est humain, avant même les lois.' },
                    { question: 'C\'est quoi les 3 ordres de l\'Ancien Regime ?', answer: 'La société etait coupee en 3 groupes : 1) Le CLERGE (les religieux) = 1er ordre. 2) La NOBLESSE (les aristocrates) = 2eme ordre. 3) Le TIERS-ETAT (tout le reste : paysans, bourgeois, artisans) = 3eme ordre = 98% de la population. Le Tiers-Etat payait presque tous les impots. Les 2 autres ordres avaient des PRIVILEGES (pas d\'impots). En gros : 2% de la population avait tous les avantages. 98% payait pour eux.' },
                    { question: 'C\'est quoi le Serment du Jeu de Paume ?', answer: 'Le 20 juin 1789. Les deputes du Tiers-Etat sont enfermes dehors (le roi a ferme la salle des Etats generaux). Ils se reunissent dans une salle de jeu de paume (un sport) et JURENT de ne pas se separer avant d\'avoir ecrit une CONSTITUTION pour la France. En gros : c\'est le moment ou le peuple dit "maintenant c\'est NOUS qui decidons." Mots difficiles : "constitution" = le texte qui definit les règles du pays. "Etats generaux" = reunion des 3 ordres convoquee par le roi.' },
                    { question: 'C\'est quoi la Terreur ?', answer: 'Une periode de septembre 1793 a juillet 1794. Le gouvernement (Comite de salut public) dirige par Robespierre gouverne par la PEUR. Des milliers de personnes sont guillotinees : nobles, suspects, opposants, et même des revolutionnaires. La Terreur se termine quand Robespierre est lui-meme guillotine (27 juillet 1794). En gros : la Revolution devore ses propres enfants. Mots difficiles : "Comite de salut public" = le gouvernement revolutionnaire. "Guillotine" = machine pour executer les condamnes a mort.' },
                    { question: 'Quand la Republique est proclamee ?', answer: 'Le 22 septembre 1792. Apres la chute de la monarchie (10 aout : le peuple envahit les Tuileries) et la victoire de Valmy (20 septembre : les armees revolutionnaires battent les Prussiens). En gros : plus de roi → la France devient une Republique. Mots difficiles : "monarchie" = gouvernement avec un roi. "Republique" = gouvernement sans roi, avec des representants elus.' },
                    { question: 'Quels philosophes ont inspire la Revolution ?', answer: '3 noms a retenir : 1) VOLTAIRE = tolerance, liberté d\'expression, lutte contre le fanatisme. 2) ROUSSEAU = le pouvoir appartient au peuple (souverainete populaire), contrat social. 3) MONTESQUIEU = separation des pouvoirs (legislatif, executif, judiciaire). En gros : les Lumieres ont donne les IDEES, la Revolution les a mises en PRATIQUE.' },
                    { question: 'Comment Napoleon arrive au pouvoir ?', answer: 'Par un COUP D\'ETAT le 9 novembre 1799 (18 Brumaire). Il renverse le gouvernement et prend le pouvoir. D\'abord "Premier Consul" (1799), puis EMPEREUR (1804). Il met fin à la Revolution. En gros : un general militaire profite du chaos pour prendre le pouvoir. Mots difficiles : "coup d\'Etat" = prendre le pouvoir par la force, sans elections. "18 Brumaire" = la date dans le calendrier revolutionnaire. Voir le schéma : Séparation des pouvoirs.' }
                ],
                quiz: [
                    { question: 'La prise de la Bastille a lieu le :', options: ['4 aout 1789', '14 juillet 1789', '26 aout 1789', '22 septembre 1792'], correctIndex: 1, explanation: 'Le 14 juillet 1789, le peuple de Paris prend la forteresse de la Bastille, symbole de l\'absolutisme.' },
                    { question: 'L\'abolition des privileges a lieu le :', options: ['14 juillet 1789', '26 aout 1789', '4 aout 1789', '20 juin 1789'], correctIndex: 2, explanation: 'Dans la nuit du 4 aout 1789, l\'Assemblee nationale abolit les privileges feodaux.' },
                    { question: 'La Terreur est associee a :', options: ['Danton', 'Robespierre', 'Napoleon', 'Louis XVI'], correctIndex: 1, explanation: 'Robespierre domine le Comite de salut public pendant la Terreur (1793-1794).' },
                    { question: 'Le Tiers-Etat representait environ :', options: ['50% de la population', '75% de la population', '98% de la population', '30% de la population'], correctIndex: 2, explanation: 'Le Tiers-Etat regroupait la grande majorite de la population (paysans, bourgeois, artisans).' }
                ]
            },
            {
                id: 'guerres_mondiales',
                title: 'Les Guerres mondiales',
                icon: '\u2694\uFE0F',
                content: '<h3>La Premiere Guerre mondiale (1914-1918)</h3>'
                    + '<ul>'
                    + '<li><strong>Causes</strong> : système d\'alliances, nationalisme, imperialisme, assassinat de l\'archiduc Francois-Ferdinand (28 juin 1914)</li>'
                    + '<li><strong>Guerre de tranchees</strong> : front immobile, conditions epouvantables, batailles meurtrieres (Verdun 1916, Somme 1916)</li>'
                    + '<li><strong>Bilan</strong> : ~10 millions de morts, effondrement des empires (ottoman, austro-hongrois, russe, allemand), Traite de Versailles (1919)</li>'
                    + '</ul>'
                    + '<h3>La Seconde Guerre mondiale (1939-1945)</h3>'
                    + '<ul>'
                    + '<li><strong>Causes</strong> : montee du fascisme et du nazisme, echec de la SDN, politique d\'expansion d\'Hitler</li>'
                    + '<li><strong>Etapes cles</strong> : invasion de la Pologne (1939), chute de la France (1940), Barbarossa (1941), Stalingrad (1942-43), Debarquement (6 juin 1944)</li>'
                    + '<li><strong>La Shoah</strong> : genocide de 6 millions de Juifs par le regime nazi</li>'
                    + '<li><strong>Bilan</strong> : ~60 millions de morts, bombes atomiques (Hiroshima, Nagasaki), creation de l\'ONU, debut de la Guerre froide</li>'
                    + '</ul>'
                    + '<h3>Memoire et devoir de memoire</h3>'
                    + '<ul>'
                    + '<li>Proces de Nuremberg (1945-1946) : jugement des criminels de guerre nazis</li>'
                    + '<li>Construction europeenne comme reponse aux conflits</li>'
                    + '<li>Lieux de memoire : Verdun, Auschwitz, plages du Debarquement</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'C\'est quoi le declencheur de la Premiere Guerre mondiale ?', answer: 'L\'assassinat de l\'archiduc Francois-Ferdinand (heritier de l\'Autriche) a Sarajevo le 28 juin 1914. Mais ca, c\'est juste l\'etincelle. Les VRAIES causes : les alliances entre pays (si un pays entre en guerre, ses allies suivent), le nationalisme (chaque pays veut etre le plus grand) et la course aux armements. En gros : un assassinat declenche un effet domino entre les alliances → toute l\'Europe entre en guerre.' },
                    { question: 'C\'est quoi la bataille de Verdun ?', answer: 'La bataille la plus SYMBOLIQUE de la Premiere Guerre mondiale. Fevrier a decembre 1916. France contre Allemagne. ~300 000 morts (les 2 camps). 10 mois de combats pour quelques kilometres. C\'est le symbole de l\'HORREUR des tranchees. En gros : des centaines de milliers de morts pour presque rien. C\'est ca la guerre de tranchees. Mots difficiles : "tranchees" = fosses creuses dans le sol ou les soldats vivent et combattent pendant des mois.' },
                    { question: 'Quand a eu lieu le Debarquement ?', answer: 'Le 6 juin 1944. On l\'appelle le "D-Day." Les Allies (USA, Royaume-Uni, Canada, France libre) debarquent sur les plages de Normandie. C\'est le debut de la LIBERATION de la France occupee par les nazis. Plages : Utah, Omaha, Gold, Juno, Sword. En gros : le jour ou l\'Occident est venu liberer la France de l\'occupation nazie. Mots difficiles : "Allies" = les pays qui combattent l\'Allemagne nazie (USA, UK, URSS, France libre).' },
                    { question: 'C\'est quoi la Shoah ?', answer: 'C\'est le GENOCIDE des Juifs par le regime nazi. 6 millions de Juifs assassines entre 1941 et 1945. Comment : camps d\'extermination (Auschwitz, Treblinka), chambres a gaz, fusillades de masse. C\'est le pire crime de l\'histoire de l\'humanité. En gros : les nazis ont voulu eliminer TOUS les Juifs d\'Europe de facon organisee et industrielle. Mots difficiles : "genocide" = extermination volontaire et organisee de tout un peuple. "Shoah" = mot hebreu qui signifie "catastrophe."' },
                    { question: 'C\'est quoi le Traite de Versailles ?', answer: 'Le traite de paix qui met fin à la Premiere Guerre mondiale. Signe le 28 juin 1919. Il PUNIT l\'Allemagne : elle doit payer des reparations enormes, perdre des territoires et reduire son armee. Les Allemands trouvent ca INJUSTE et HUMILIANT. Ca va nourrir la colere → montee du nazisme. En gros : le traite de Versailles est trop dur → les Allemands sont humilies → ca prepare la Seconde Guerre mondiale.' },
                    { question: 'C\'est quoi la bataille de Stalingrad ?', answer: 'Bataille entre l\'URSS et l\'Allemagne, d\'aout 1942 a fevrier 1943. C\'est le TOURNANT de la Seconde Guerre mondiale. L\'Allemagne essaie de prendre Stalingrad (ville russe). Les Sovietiques resistent et encerclent l\'armee allemande. L\'Allemagne perd ~800 000 soldats. Apres Stalingrad, l\'Allemagne RECULE. En gros : la première grande defaite d\'Hitler. Le debut de la fin pour l\'Allemagne nazie.' },
                    { question: 'C\'est quoi les bombes atomiques ?', answer: 'Les USA larguent 2 bombes atomiques sur le Japon : HIROSHIMA (6 aout 1945) et NAGASAKI (9 aout 1945). Environ 200 000 morts. Le Japon capitule (= se rend) le 15 aout 1945. C\'est la fin de la Seconde Guerre mondiale. En gros : les premieres (et seules) bombes nucleaires utilisees en guerre. Mots difficiles : "capituler" = se rendre, abandonner le combat.' },
                    { question: 'C\'est quoi les proces de Nuremberg ?', answer: 'Des PROCES en 1945-1946 ou les principaux chefs nazis sont juges pour leurs crimes. Accusations : crimes de GUERRE (violer les lois de la guerre), crimes contre l\'HUMANITE (Shoah), crimes contre la PAIX (declencher la guerre). Certains sont condamnes a mort, d\'autres à la prison. En gros : pour la première fois, des dirigeants sont juges pour avoir commis des atrocites au nom d\'un Etat. Mots difficiles : "crime contre l\'humanité" = crime grave contre des populations civiles (genocides, deportations).' }
                ],
                quiz: [
                    { question: 'La Premiere Guerre mondiale dure de :', options: ['1912 a 1916', '1914 a 1918', '1939 a 1945', '1916 a 1920'], correctIndex: 1, explanation: 'La Grande Guerre s\'etend de juillet 1914 a novembre 1918.' },
                    { question: 'Le Debarquement en Normandie a lieu le :', options: ['6 juin 1944', '8 mai 1945', '1er septembre 1939', '14 juillet 1944'], correctIndex: 0, explanation: 'Le D-Day, 6 juin 1944, marque le debut de l\'operation Overlord et la liberation de la France.' },
                    { question: 'La Shoah a fait environ :', options: ['1 million de victimes', '3 millions de victimes', '6 millions de victimes', '10 millions de victimes'], correctIndex: 2, explanation: 'Environ 6 millions de Juifs ont ete assassines par le regime nazi entre 1941 et 1945.' },
                    { question: 'Le Traite de Versailles est signe en :', options: ['1918', '1919', '1920', '1945'], correctIndex: 1, explanation: 'Le Traite de Versailles est signe le 28 juin 1919, dans la Galerie des Glaces du chateau de Versailles.' }
                ]
            },
            {
                id: 'guerre_froide',
                title: 'La Guerre froide',
                icon: '\u2744\uFE0F',
                content: '<h3>Un monde bipolaire (1947-1991)</h3>'
                    + '<ul>'
                    + '<li><strong>Definition</strong> : affrontement ideologique, economique et militaire (indirect) entre les USA (capitalisme) et l\'URSS (communisme)</li>'
                    + '<li><strong>Debut</strong> : doctrine Truman (1947), plan Marshall, blocus de Berlin (1948-49)</li>'
                    + '<li><strong>Fin</strong> : chute du mur de Berlin (9 novembre 1989), dissolution de l\'URSS (1991)</li>'
                    + '</ul>'
                    + '<h3>Les grandes crises</h3>'
                    + '<ul>'
                    + '<li><strong>Guerre de Coree</strong> (1950-1953) : premier conflit arme de la Guerre froide</li>'
                    + '<li><strong>Crise de Cuba</strong> (1962) : le monde au bord de la guerre nucleaire (Kennedy vs Khrouchtchev)</li>'
                    + '<li><strong>Guerre du Vietnam</strong> (1955-1975) : defaite americaine, traumatisme national</li>'
                    + '<li><strong>Course aux armements</strong> : equilibre de la terreur (MAD — Mutual Assured Destruction)</li>'
                    + '</ul>'
                    + '<h3>La decolonisation</h3>'
                    + '<ul>'
                    + '<li>Mouvement mondial d\'emancipation des colonies (1945-1975)</li>'
                    + '<li>Inde (1947, Gandhi), Algerie (1962, guerre d\'independance), Afrique subsaharienne (annees 1960)</li>'
                    + '<li>Conference de Bandung (1955) : naissance du Tiers-Monde et du non-alignement</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'C\'est quoi la Guerre froide ?', answer: 'Un affrontement entre les USA et l\'URSS de 1947 a 1991. Mais PAS une guerre directe (ils ne se battent jamais face a face). C\'est une guerre INDIRECTE : ideologique (capitalisme vs communisme), economique (plan Marshall vs COMECON) et militaire (course aux armements, guerres dans d\'autres pays). En gros : 2 superpuissances qui s\'affrontent sans se tirer dessus directement. Mots difficiles : "bipolaire" = le monde divise en 2 blocs. "Endiguement" = empecher le communisme de se repandre.' },
                    { question: 'Quand le mur de Berlin est tombe ?', answer: 'Le 9 NOVEMBRE 1989. Le mur separait Berlin-Ouest (capitaliste) de Berlin-Est (communiste) depuis 1961. Sa chute = la fin de la division de l\'Europe. Les gens cassent le mur a coups de masse dans la joie. En gros : le symbole le plus fort de la fin de la Guerre froide. Mots difficiles : "rideau de fer" = expression de Churchill pour decrire la frontiere entre l\'Europe de l\'Ouest (libre) et l\'Europe de l\'Est (communiste).' },
                    { question: 'C\'est quoi la crise de Cuba ?', answer: 'Octobre 1962. L\'URSS installé des MISSILES NUCLEAIRES a Cuba (a 150 km des USA). Kennedy (president USA) impose un blocus naval. Le monde est a 2 DOIGTS de la guerre nucleaire pendant 13 jours. Finalement l\'URSS retire ses missiles. En gros : le moment le plus DANGEREUX de l\'histoire de l\'humanité. Mots difficiles : "blocus" = empecher tout navire d\'acceder à un endroit.' },
                    { question: 'C\'est quoi la doctrine Truman ?', answer: 'En 1947, le president americain Truman dit : "Les USA aideront TOUS les pays menaces par le communisme." C\'est la politique d\'ENDIGUEMENT (containment) = empecher le communisme de se repandre. En gros : les USA deviennent le "gendarme du monde" contre l\'expansion communiste. Mots difficiles : "endiguement" = comme une digue qui empeche l\'eau (le communisme) de deborder.' },
                    { question: 'C\'est quoi le plan Marshall ?', answer: 'Un programme d\'aide ECONOMIQUE des USA pour reconstruire l\'Europe après la guerre (1948-1952). 13 milliards de dollars. Double objectif : 1) Aider l\'Europe a se relever. 2) Empecher les pays europeens de devenir communistes (un pays prospere ne fait pas la revolution). En gros : les USA paient pour reconstruire l\'Europe et la garder dans leur camp. L\'URSS refuse le plan Marshall pour ses pays.' },
                    { question: 'C\'est quoi la conference de Bandung ?', answer: 'En 1955, 29 pays d\'Asie et d\'Afrique se reunissent en Indonesie. Ils disent : "On ne veut CHOISIR ni les USA ni l\'URSS." C\'est la naissance du TIERS-MONDE et du mouvement des NON-ALIGNES. En gros : les pays pauvres disent "on existe aussi, et on n\'est dans aucun camp." Mots difficiles : "Tiers-Monde" = les pays qui ne sont ni dans le bloc americain ni dans le bloc sovietique. "Non-aligne" = qui refuse de choisir un camp.' },
                    { question: 'Quand l\'URSS disparait ?', answer: 'Le 25 decembre 1991. Gorbatchev (le dernier dirigeant de l\'URSS) demissionne. Les 15 republiques sovietiques deviennent des pays INDEPENDANTS (Russie, Ukraine, etc.). C\'est la FIN de la Guerre froide. En gros : le bloc communiste s\'effondre. Le monde n\'est plus bipolaire. Les USA restent seule superpuissance. Mots difficiles : "dissolution" = disparition d\'une organisation ou d\'un Etat.' },
                    { question: 'C\'est quoi la MAD ?', answer: 'MAD = Mutual Assured Destruction = Destruction Mutuelle Assuree. Les USA et l\'URSS ont ASSEZ de bombes nucleaires pour se detruire MUTUELLEMENT. Du coup, aucun des deux n\'ose attaquer (car il serait détruit aussi). C\'est l\'"equilibre de la terreur." En gros : on ne se fait pas la guerre PARCE QUE la guerre tuerait tout le monde. La peur empeche la guerre.' },
                    { question: 'Qu\'est-ce que le blocus de Berlin (1948-1949) ?', answer: 'Blocus terrestre impose par l\'URSS sur Berlin-Ouest pour forcer les Allies a quitter la ville. Les USA repondent par un pont aerien de 11 mois (juin 1948 - mai 1949). Astuce Bac : première grande crise de la Guerre froide, elle montre l\'affrontement indirect entre les deux blocs.' },
                    { question: 'Qu\'est-ce que la Detente (1962-1975) ?', answer: 'Periode d\'apaisement relatif entre les USA et l\'URSS après la crise de Cuba. Accords SALT I (1972) sur la limitation des armes nucleaires, accords d\'Helsinki (1975). Astuce Bac : la Detente n\'empeche pas les conflits peripheriques (Vietnam, Angola).' },
                    { question: 'Qu\'est-ce que le Pacte de Varsovie ?', answer: 'Alliance militaire du bloc sovietique créée en 1955 en reponse a l\'OTAN. Regroupe l\'URSS, la Pologne, la RDA, la Tchecoslovaquie, la Hongrie, la Roumanie, la Bulgarie, l\'Albanie. Astuce Bac : a opposer a l\'OTAN (1949) pour montrer la bipolarisation du monde.' },
                    { question: 'Qu\'est-ce que la "guerre des etoiles" (IDS) ?', answer: 'Programme de defense strategique lance par Reagan en 1983 pour intercepter les missiles sovietiques depuis l\'espace. L\'URSS ne peut suivre financierement, accelerant son declin. Astuce Bac : illustre la course aux armements et l\'epuisement economique de l\'URSS.' }
                ],
                quiz: [
                    { question: 'La chute du mur de Berlin a lieu en :', options: ['1985', '1989', '1991', '1987'], correctIndex: 1, explanation: 'Le mur de Berlin tombe le 9 novembre 1989, ouvrant la voie à la reunification allemande.' },
                    { question: 'La crise de Cuba a eu lieu en :', options: ['1956', '1968', '1962', '1975'], correctIndex: 2, explanation: 'La crise des missiles de Cuba en octobre 1962 est le moment le plus dangereux de la Guerre froide.' },
                    { question: 'Le plan Marshall est :', options: ['Un plan militaire sovietique', 'Une aide economique americaine a l\'Europe', 'Un traite de desarmement', 'Un accord commercial'], correctIndex: 1, explanation: 'Le plan Marshall (1948-1952) fournit 13 milliards de dollars pour la reconstruction europeenne.' },
                    { question: 'La conference de Bandung (1955) marque :', options: ['La fin de la Guerre froide', 'La naissance du mouvement des non-alignes', 'La creation de l\'OTAN', 'Le debut de la decolonisation'], correctIndex: 1, explanation: 'Bandung reunit les pays d\'Asie et d\'Afrique qui refusent l\'alignement sur l\'un des deux blocs.' },
                    { question: 'La doctrine Truman (1947) vise a :', options: ['Reconstruire l\'Europe', 'Contenir l\'expansion du communisme', 'Creer l\'ONU', 'Desarmer les puissances nucleaires'], correctIndex: 1, explanation: 'La doctrine Truman pose les bases de la politique americaine d\'endiguement (containment) face a l\'expansion sovietique.' },
                    { question: 'L\'URSS est officiellement dissoute en :', options: ['1989', '1990', '1991', '1993'], correctIndex: 2, explanation: 'L\'URSS est dissoute le 25 decembre 1991. Gorbatchev demissionne et les 15 republiques sovietiques deviennent des Etats independants.' },
                    { question: 'Le blocus de Berlin (1948-1949) est une crise entre :', options: ['La France et l\'Allemagne', 'Les USA et l\'URSS', 'Le Japon et la Chine', 'L\'Inde et le Pakistan'], correctIndex: 1, explanation: 'L\'URSS impose un blocus terrestre sur Berlin-Ouest pour en chasser les Allies. Les USA repondent par un pont aerien de 11 mois.' },
                    { question: 'La Detente entre les deux blocs debute après :', options: ['La crise de Suez (1956)', 'La crise de Cuba (1962)', 'La chute du mur de Berlin (1989)', 'Le plan Marshall (1948)'], correctIndex: 1, explanation: 'La Detente (1962-1975) commence après la crise de Cuba, avec des accords comme SALT I (1972) et Helsinki (1975), mais n\'empeche pas les conflits peripheriques.' },
                    { question: 'Le programme IDS ("guerre des etoiles") lance par Reagan en 1983 vise a :', options: ['Coloniser l\'espace avec des astronautes', 'Intercepter les missiles sovietiques depuis l\'espace', 'Creer une alliance spatiale avec l\'URSS', 'Developper des satellites de communication civils'], correctIndex: 1, explanation: 'L\'Initiative de Defense Strategique (IDS) visait a proteger les USA des missiles nucleaires, accelerant l\'epuisement economique de l\'URSS.' }
                ]
            },
            {
                id: 'mondialisation',
                title: 'Mondialisation',
                icon: '\uD83C\uDF10',
                content: '<h3>Qu\'est-ce que la mondialisation ?</h3>'
                    + '<p>Processus d\'integration croissante des economies, des societes et des cultures a l\'echelle mondiale, accelere depuis les annees 1990.</p>'
                    + '<h3>Les dimensions de la mondialisation</h3>'
                    + '<ul>'
                    + '<li><strong>Economique</strong> : libre-echange, multinationales (FTN), flux financiers mondiaux, delocalisation</li>'
                    + '<li><strong>Culturelle</strong> : diffusion mondiale de la culture (americanisation, mais aussi metissage culturel)</li>'
                    + '<li><strong>Politique</strong> : organisations internationales (ONU, OMC, FMI), integration regionale (UE, ALENA)</li>'
                    + '</ul>'
                    + '<h3>Les acteurs</h3>'
                    + '<ul>'
                    + '<li><strong>Les Etats</strong> : politiques commerciales, accords bilateraux</li>'
                    + '<li><strong>Les FTN</strong> (firmes transnationales) : chiffre d\'affaires superieur au PIB de certains pays</li>'
                    + '<li><strong>Les ONG</strong> : acteurs non etatiques influents (Amnesty, Greenpeace)</li>'
                    + '<li><strong>Les villes mondiales</strong> : New York, Londres, Tokyo, Paris — noyaux de la mondialisation</li>'
                    + '</ul>'
                    + '<h3>Debats et limites</h3>'
                    + '<ul>'
                    + '<li><strong>Inegalites</strong> : la mondialisation profite surtout aux pays riches et aux elites (Nord/Sud)</li>'
                    + '<li><strong>Environnement</strong> : surexploitation des ressources, changement climatique</li>'
                    + '<li><strong>Altermondialisme</strong> : mouvement critique qui plaide pour une mondialisation plus juste</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'C\'est quoi la mondialisation ?', answer: 'C\'est le fait que les pays du monde sont de plus en plus CONNECTES entre eux. Les marchandises, l\'argent, les informations et les personnes circulent partout. Ca s\'est accelere depuis les annees 1990 (chute du communisme + Internet). En gros : le monde est devenu un seul grand marche. Mots difficiles : "integration" = les economies se melent. "Flux" = mouvements de marchandises, d\'argent ou de personnes d\'un pays a l\'autre.' },
                    { question: 'C\'est quoi une FTN ?', answer: 'Firme TransNationale = une entreprise qui travaille dans PLUSIEURS pays. Exemples : Apple, Toyota, Total. Certaines FTN gagnent plus d\'argent que des PAYS entiers. En gros : ce sont les geants de l\'economie mondiale. Ils produisent la ou c\'est le moins cher et vendent partout. Mots difficiles : "chiffre d\'affaires" (CA) = l\'argent total gagne par l\'entreprise. "PIB" = la richesse totale produite par un pays en un an.' },
                    { question: 'C\'est quoi les 3 dimensions de la mondialisation ?', answer: '1) ECONOMIQUE = le commerce international, l\'argent qui circule entre les pays. 2) CULTURELLE = les films, la musique, la mode se diffusent partout (Netflix, McDonalds). 3) POLITIQUE = des organisations internationales (ONU, OMC) gerent les affaires du monde. En gros : la mondialisation c\'est pas que l\'argent, c\'est aussi la culture et la politique.' },
                    { question: 'C\'est quoi l\'altermondialisme ?', answer: 'C\'est un mouvement qui dit : "La mondialisation c\'est bien, MAIS pas comme ca." Ils veulent une mondialisation plus JUSTE (moins d\'inegalites) et plus ECOLOGIQUE. Slogan : "Un autre monde est possible." En gros : ils ne sont pas CONTRE la mondialisation, ils veulent la CHANGER. Mots difficiles : "alter" = autre (en latin). Altermondialisme = une AUTRE mondialisation.' },
                    { question: 'C\'est quoi une ville mondiale ?', answer: 'C\'est une ville qui commande le MONDE : bourses, sieges de grandes entreprises, organisations internationales. Les 4 grandes : New York, Londres, Tokyo, Paris. En gros : les villes mondiales sont les "capitales" de la mondialisation. C\'est la que les decisions economiques et politiques se prennent. Mots difficiles : "metropole" = très grande ville avec beaucoup d\'influence.' },
                    { question: 'C\'est quoi l\'OMC ?', answer: 'Organisation Mondiale du Commerce. Elle fixe les REGLES du commerce entre les pays. Elle negocie les accords de libre-echange et TRANCHE les disputes commerciales. Creee en 1995. En gros : c\'est l\'arbitre du commerce mondial. Mots difficiles : "libre-echange" = quand les pays commercent sans taxes ni barrieres. "Protectionnisme" = l\'inverse (on met des taxes pour proteger ses entreprises).' },
                    { question: 'C\'est quoi les effets negatifs de la mondialisation ?', answer: '1) INEGALITES = les riches deviennent plus riches, les pauvres restent pauvres (fracture Nord/Sud). 2) DELOCALISATIONS = les usines partent la ou les salaires sont bas. 3) ENVIRONNEMENT = pollution, transports, surproduction. 4) UNIFORMISATION = tout le monde mange McDo et regarde Netflix. En gros : la mondialisation créé de la richesse mais la repartit MAL.' },
                    { question: 'C\'est quoi l\'integration regionale ?', answer: 'C\'est quand des pays VOISINS s\'organisent en BLOC pour commercer plus facilement entre eux. Exemples : l\'Union Europeenne (27 pays), le Mercosur (Amerique du Sud), l\'ASEAN (Asie du Sud-Est). En gros : au lieu de se battre chacun pour soi, les pays voisins font equipe. Mots difficiles : "integration" = se rapprocher, fusionner progressivement. "Bloc regional" = groupe de pays qui cooperent.' },
                    { question: 'Quels sont les principaux flux de la mondialisation ?', answer: 'Flux de marchandises (matières premieres, produits manufactures), flux financiers (IDE, bourses), flux d\'informations (Internet) et flux migratoires. La Triade (USA, UE, Japon) concentre la majorite des echanges. Astuce Bac : distinguer flux materiels et flux immateriels dans une composition.' },
                    { question: 'Pourquoi la mondialisation creuse-t-elle les inegalites ?', answer: 'Les pays du Nord et les FTN captent l\'essentiel des profits, tandis que les PMA restent marginalises. Les 10% les plus riches detiennent 76% des richesses mondiales (Oxfam). Astuce Bac : utiliser les notions de centre/peripherie et de fracture Nord-Sud dans vos copies.' },
                    { question: 'Qu\'est-ce que le FMI ?', answer: 'Le Fonds Monetaire International, créé en 1944 (Bretton Woods), veille à la stabilite financiere mondiale et prete aux Etats en difficulte. Il impose souvent des plans d\'ajustement structurel (austerite, privatisations). Astuce Bac : acteur cle de la gouvernance economique mondiale, a citer dans tout sujet sur la mondialisation.' },
                    { question: 'Pourquoi les USA sont-ils une superpuissance mondiale ?', answer: 'Puissance militaire (1er budget mondial, bases partout), economique (1er PIB mondial), culturelle (soft power : Hollywood, GAFAM) et diplomatique (siege permanent ONU). Dollar = monnaie de reference internationale. Astuce Bac : montrer les differentes dimensions de la puissance (hard power + soft power).' },
                    { question: 'Comment la Chine s\'affirme-t-elle comme puissance mondiale ?', answer: '2e economie mondiale depuis 2010, "atelier du monde", montee en gamme technologique (Huawei, 5G). Nouvelles Routes de la Soie (2013) : investissements massifs en Asie, Afrique et Europe. Astuce Bac : insister sur la rivalite sino-americaine et la stratégie d\'influence globale de Pekin.' },
                    { question: 'Quel est le role de l\'UE comme puissance mondiale ?', answer: '1ere puissance commerciale mondiale, marche unique de 450 millions d\'habitants, poids normatif (RGPD, normes environnementales). Mais faiblesse militaire et diplomatique (pas d\'armee commune, divisions internes). Astuce Bac : l\'UE est une puissance economique et normative, mais une "puissance incomplete" sur le plan geopolitique.' },
                    { question: 'Qu\'est-ce que le soft power ?', answer: 'Capacite d\'influence d\'un Etat par l\'attractivite culturelle, les valeurs et la diplomatie, sans recours à la force. USA : Hollywood, universites, GAFAM ; France : langue, gastronomie, mode ; Chine : instituts Confucius. Astuce Bac : toujours associer hard power (militaire, economique) et soft power pour definir une puissance complete.' },
                    { question: 'Qu\'est-ce qu\'un IDE (Investissement Direct a l\'Etranger) ?', answer: 'Investissement d\'une entreprise dans un autre pays pour y creer ou controler une activité economique (usine, filiale). Les IDE sont concentres dans la Triade et les pays emergents (Chine, Inde, Bresil). Astuce Bac : indicateur cle de la mondialisation economique, a utiliser pour illustrer les flux financiers.' }
                ],
                quiz: [
                    { question: 'La mondialisation s\'accelere surtout a partir des annees :', options: ['1950', '1970', '1990', '2010'], correctIndex: 2, explanation: 'La fin de la Guerre froide et l\'essor d\'Internet dans les annees 1990 accelerent considerablement la mondialisation.' },
                    { question: 'Une FTN est :', options: ['Une organisation internationale', 'Une firme transnationale', 'Un fond d\'investissement', 'Un accord commercial'], correctIndex: 1, explanation: 'Les Firmes TransNationales operent dans plusieurs pays et sont des acteurs majeurs de la mondialisation.' },
                    { question: 'L\'altermondialisme preconise :', options: ['La fin de tout commerce international', 'Une mondialisation plus juste', 'Le retour a l\'autarcie', 'La suppression de l\'ONU'], correctIndex: 1, explanation: 'L\'altermondialisme ne rejette pas la mondialisation mais veut la transformer pour qu\'elle soit plus equitable.' },
                    { question: 'Quelle organisation regule le commerce mondial ?', options: ['ONU', 'OTAN', 'OMC', 'FMI'], correctIndex: 2, explanation: 'L\'Organisation Mondiale du Commerce (OMC), créée en 1995, est l\'institution qui regule le commerce international.' },
                    { question: 'Les villes mondiales sont des centres de :', options: ['Production agricole', 'Commandement economique et politique mondial', 'Stockage de matières premieres', 'Tourisme exclusivement'], correctIndex: 1, explanation: 'Les villes mondiales (New York, Londres, Tokyo, Paris) concentrent les fonctions de commandement : bourses, sieges sociaux, organisations internationales.' },
                    { question: 'Les flux migratoires dans la mondialisation vont principalement :', options: ['Du Nord vers le Sud', 'Du Sud vers le Nord et du Sud vers le Sud', 'Uniquement entre pays developpes', 'D\'Est en Ouest'], correctIndex: 1, explanation: 'Les migrations internationales s\'effectuent majoritairement du Sud vers le Nord (quete de meilleures conditions) et du Sud vers le Sud (migrations regionales, souvent oubliees).' },
                    { question: 'Le FMI, créé en 1944, a pour role principal de :', options: ['Financer les guerres', 'Veiller à la stabilite financiere mondiale et preter aux Etats en difficulte', 'Reguler le commerce international', 'Distribuer l\'aide alimentaire mondiale'], correctIndex: 1, explanation: 'Le Fonds Monetaire International assure la stabilite financiere mondiale et impose souvent des plans d\'ajustement structurel aux pays emprunteurs.' },
                    { question: 'Le soft power désigné la capacité d\'un Etat a :', options: ['Imposer ses decisions par la force militaire', 'Influencer les autres par l\'attractivite culturelle et les valeurs', 'Controler les matières premieres mondiales', 'Bloquer les importations etrangeres'], correctIndex: 1, explanation: 'Le soft power (Nye) repose sur la culture, les valeurs et la diplomatie. Les USA (Hollywood, GAFAM), la France (langue, gastronomie) et la Chine (instituts Confucius) l\'utilisent.' },
                    { question: 'Les Nouvelles Routes de la Soie lancees par la Chine en 2013 illustrent :', options: ['Un repli de la Chine sur elle-meme', 'Une stratégie d\'influence mondiale par les investissements', 'Un accord militaire avec l\'OTAN', 'Un programme d\'aide humanitaire de l\'ONU'], correctIndex: 1, explanation: 'Les Nouvelles Routes de la Soie sont des investissements massifs chinois en Asie, Afrique et Europe pour etendre l\'influence economique et geopolitique de Pekin.' }
                ]
            },
            // ====== NEW SECTIONS (5-10) ======
            {
                id: 'decolonisation',
                title: 'La Decolonisation',
                icon: '\uD83C\uDF0D',
                content: '<h3>Les causes de la decolonisation</h3>'
                    + '<ul>'
                    + '<li><strong>Affaiblissement des metropoles</strong> : la Seconde Guerre mondiale a ruine la France et le Royaume-Uni, revelant leur vulnerabilite</li>'
                    + '<li><strong>Montee des nationalismes</strong> : les elites colonisees, formees en Occident, revendiquent l\'autodetermination (Nehru, Ho Chi Minh, Bourguiba)</li>'
                    + '<li><strong>Contexte international favorable</strong> : la Charte de l\'ONU (1945) affirme le droit des peuples a disposer d\'eux-memes ; USA et URSS soutiennent la decolonisation pour etendre leur influence</li>'
                    + '<li><strong>Mouvements de resistance</strong> : greves, manifestations, insurrections armees dans les colonies</li>'
                    + '</ul>'
                    + '<h3>Les grandes etapes et formes de la decolonisation</h3>'
                    + '<ul>'
                    + '<li><strong>Independance de l\'Inde (1947)</strong> : Gandhi mene la lutte non-violente, partition entre Inde (hindoue) et Pakistan (musulman), violences intercommunautaires</li>'
                    + '<li><strong>Guerre d\'Indochine (1946-1954)</strong> : defaite francaise a Dien Bien Phu, accords de Geneve, division du Vietnam</li>'
                    + '<li><strong>Guerre d\'Algerie (1954-1962)</strong> : FLN contre armee francaise, torture, accords d\'Evian (18 mars 1962), independance le 5 juillet 1962</li>'
                    + '<li><strong>Afrique subsaharienne</strong> : "annee de l\'Afrique" (1960), 17 pays deviennent independants, souvent par negociation pacifique</li>'
                    + '<li><strong>Conference de Bandung (1955)</strong> : 29 pays afro-asiatiques affirment leur solidarite et le non-alignement</li>'
                    + '</ul>'
                    + '<h3>Consequences et heritages</h3>'
                    + '<ul>'
                    + '<li><strong>Naissance du Tiers-Monde</strong> : pays en developpement cherchent une troisieme voie entre blocs americain et sovietique</li>'
                    + '<li><strong>Neocolonialisme</strong> : les anciennes metropoles conservent une influence economique, militaire et culturelle (Francafrique)</li>'
                    + '<li><strong>Instabilite post-coloniale</strong> : frontieres artificielles, conflits ethniques, coups d\'Etat, sous-developpement</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'Quand l\'Inde devient-elle independante ?', answer: 'Le 15 aout 1947. L\'Inde britannique est divisee en deux Etats : l\'Union indienne (a majorite hindoue) et le Pakistan (a majorite musulmane).' },
                    { question: 'Qui est le leader de l\'independance indienne ?', answer: 'Mohandas Karamchand Gandhi (le Mahatma). Il prone la non-violence (ahimsa) et la desobeissance civile, notamment la Marche du sel (1930).' },
                    { question: 'Quand la guerre d\'Algerie a-t-elle eu lieu ?', answer: 'De 1954 a 1962. Elle oppose le FLN (Front de Liberation Nationale) a l\'armee francaise. Elle se termine par les accords d\'Evian (18 mars 1962).' },
                    { question: 'Que sont les accords d\'Evian ?', answer: 'Signes le 18 mars 1962 entre la France et le GPRA (Gouvernement Provisoire de la Republique Algerienne), ils mettent fin à la guerre d\'Algerie et ouvrent la voie a l\'independance.' },
                    { question: 'Qu\'est-ce que la conference de Bandung ?', answer: 'Conference de 1955 en Indonesie reunissant 29 pays d\'Asie et d\'Afrique. Elle affirme le droit a l\'autodetermination et fonde le mouvement des non-alignes.' },
                    { question: 'Pourquoi 1960 est-elle l\'"annee de l\'Afrique" ?', answer: 'En 1960, 17 pays africains accedent a l\'independance, principalement des anciennes colonies francaises d\'Afrique subsaharienne (Senegal, Cote d\'Ivoire, Mali, etc.).' },
                    { question: 'Qu\'est-ce que le neocolonialisme ?', answer: 'Maintien d\'une domination economique, politique ou militaire des anciennes metropoles sur leurs ex-colonies malgre l\'independance formelle. Exemple : la Francafrique.' },
                    { question: 'Quelle bataille marque la fin de l\'Indochine francaise ?', answer: 'La bataille de Dien Bien Phu (mars-mai 1954). La defaite francaise conduit aux accords de Geneve et à la fin de la presence francaise en Indochine.' },
                    { question: 'Qu\'est-ce que le Tiers-Monde ?', answer: 'Expression inventee par Alfred Sauvy en 1952 pour designer les pays en developpement, ni alignes sur le bloc occidental ni sur le bloc sovietique.' },
                    { question: 'Quelles sont les causes principales de la decolonisation ?', answer: 'L\'affaiblissement des metropoles après 1945, la montee des nationalismes dans les colonies, le contexte international (ONU, Guerre froide) et les mouvements de resistance locaux.' },
                    { question: 'Qu\'est-ce que la partition de l\'Inde ?', answer: 'La division de l\'Inde britannique en 1947 en deux Etats (Inde et Pakistan) sur des critères religieux. Elle provoque des violences massives et le deplacement de 10 a 15 millions de personnes.' },
                    { question: 'Quel role jouent les USA et l\'URSS dans la decolonisation ?', answer: 'Les deux superpuissances soutiennent la decolonisation pour etendre leur zone d\'influence, tout en cherchant a rallier les nouveaux Etats independants a leur bloc.' },
                    { question: 'Qu\'est-ce que le FLN ?', answer: 'Le Front de Liberation Nationale, mouvement nationaliste algerien fonde en 1954 qui mene la lutte armee pour l\'independance de l\'Algerie.' },
                    { question: 'Quand l\'Algerie devient-elle independante ?', answer: 'Le 5 juillet 1962, après un referendum ou 99,72% des Algeriens votent pour l\'independance, conformement aux accords d\'Evian.' },
                    { question: 'Qu\'est-ce que la Francafrique ?', answer: 'Terme désigné les relations d\'influence et de dependance entre la France et ses anciennes colonies africaines : accords militaires, cooperation economique, soutien a des regimes autoritaires.' }
                ],
                quiz: [
                    { question: 'L\'independance de l\'Inde est proclamee en :', options: ['1945', '1947', '1950', '1955'], correctIndex: 1, explanation: 'L\'Inde accede a l\'independance le 15 aout 1947, après des decennies de lutte menee notamment par Gandhi.' },
                    { question: 'La guerre d\'Algerie se termine par :', options: ['La bataille d\'Alger', 'Les accords de Geneve', 'Les accords d\'Evian', 'La conference de Bandung'], correctIndex: 2, explanation: 'Les accords d\'Evian (18 mars 1962) mettent fin à la guerre d\'Algerie et ouvrent la voie a l\'independance.' },
                    { question: 'La conference de Bandung a eu lieu en :', options: ['1947', '1955', '1960', '1962'], correctIndex: 1, explanation: 'La conference de Bandung (1955) reunit 29 pays afro-asiatiques et marque la naissance du mouvement des non-alignes.' },
                    { question: 'Combien de pays africains deviennent independants en 1960 ?', options: ['5', '10', '17', '25'], correctIndex: 2, explanation: '1960 est l\'"annee de l\'Afrique" avec 17 pays accedant a l\'independance, principalement d\'anciennes colonies francaises.' },
                    { question: 'La bataille de Dien Bien Phu (1954) concerne :', options: ['L\'Algerie', 'L\'Inde', 'L\'Indochine', 'Le Maroc'], correctIndex: 2, explanation: 'Dien Bien Phu est la defaite decisive de la France en Indochine, entrainant les accords de Geneve et le retrait francais.' },
                    { question: 'Gandhi est celebre pour sa methode de :', options: ['Guerilla urbaine', 'Non-violence et desobeissance civile', 'Diplomatie secrete', 'Guerre conventionnelle'], correctIndex: 1, explanation: 'Gandhi promeut la non-violence (ahimsa) et la desobeissance civile comme armes de lutte contre la domination britannique.' },
                    { question: 'Le neocolonialisme désigné :', options: ['La recolonisation des pays africains', 'Le maintien d\'une domination des anciennes metropoles malgre l\'independance', 'Un nouveau type de colonisation militaire', 'L\'aide au developpement'], correctIndex: 1, explanation: 'Le neocolonialisme est le maintien de liens de dependance economique, politique et militaire après l\'independance formelle.' },
                    { question: 'Le terme "Tiers-Monde" est invente par :', options: ['Gandhi', 'Nasser', 'Alfred Sauvy', 'Nehru'], correctIndex: 2, explanation: 'Le demographe francais Alfred Sauvy invente le terme en 1952, par analogie avec le Tiers-Etat de la Revolution francaise.' },
                    { question: 'Le FLN est un mouvement nationaliste de :', options: ['Tunisie', 'Maroc', 'Algerie', 'Indochine'], correctIndex: 2, explanation: 'Le Front de Liberation Nationale est le mouvement algerien qui mene la guerre d\'independance contre la France de 1954 a 1962.' },
                    { question: 'La partition de l\'Inde créé deux Etats sur des critères :', options: ['Linguistiques', 'Ethniques', 'Religieux', 'Economiques'], correctIndex: 2, explanation: 'La partition de 1947 separe l\'Inde (majorite hindoue) du Pakistan (majorite musulmane), provoquant des violences intercommunautaires massives.' },
                    { question: 'La guerre d\'Indochine se termine par la defaite francaise a :', options: ['Hanoi', 'Saigon', 'Dien Bien Phu', 'Phnom Penh'], correctIndex: 2, explanation: 'La bataille de Dien Bien Phu (mars-mai 1954) est une defaite decisive de la France. Les accords de Geneve mettent fin à la presence francaise en Indochine.' },
                    { question: 'Le mouvement des non-alignes refuse de choisir entre :', options: ['Le capitalisme et le socialisme national', 'Le bloc americain et le bloc sovietique', 'L\'Europe et l\'Asie', 'Le Nord et le Sud'], correctIndex: 1, explanation: 'Nes à la conference de Bandung (1955), les non-alignes refusent de s\'inscrire dans l\'un des deux blocs de la Guerre froide et revendiquent une voie independante.' }
                ]
            },
            {
                id: 'construction_ue',
                title: 'La Construction europeenne',
                icon: '\uD83C\uDDEA\uD83C\uDDFA',
                content: '<h3>Les origines de la construction europeenne</h3>'
                    + '<ul>'
                    + '<li><strong>Contexte d\'apres-guerre</strong> : reconciliation franco-allemande, volonté de paix durable, plan Marshall et impulsion americaine</li>'
                    + '<li><strong>Declaration Schuman (9 mai 1950)</strong> : Robert Schuman propose de mettre en commun le charbon et l\'acier franco-allemands</li>'
                    + '<li><strong>CECA (1951)</strong> : Communaute Europeenne du Charbon et de l\'Acier, 6 pays fondateurs (France, Allemagne, Italie, Benelux)</li>'
                    + '<li><strong>Traite de Rome (1957)</strong> : creation de la CEE (Communaute Economique Europeenne) et d\'Euratom, marche commun</li>'
                    + '</ul>'
                    + '<h3>L\'approfondissement et l\'elargissement</h3>'
                    + '<ul>'
                    + '<li><strong>Acte unique europeen (1986)</strong> : relance de la construction europeenne, objectif de marche unique pour 1993</li>'
                    + '<li><strong>Traite de Maastricht (1992)</strong> : naissance de l\'Union Europeenne, citoyennete europeenne, projet de monnaie unique</li>'
                    + '<li><strong>L\'euro</strong> : mis en circulation le 1er janvier 2002, adopte par 20 pays (zone euro)</li>'
                    + '<li><strong>Elargissements</strong> : de 6 (1957) a 27 membres, adhesion des PECO en 2004, de la Croatie en 2013</li>'
                    + '</ul>'
                    + '<h3>Institutions et crises</h3>'
                    + '<ul>'
                    + '<li><strong>Institutions</strong> : Commission europeenne (initiative), Parlement europeen (co-legislation, elu au suffrage universel), Conseil de l\'UE (Etats membres), Conseil europeen (chefs d\'Etat)</li>'
                    + '<li><strong>Crises</strong> : echec du TCE (2005, "non" francais), crise de l\'euro (2010-2012, Grece), crise migratoire (2015), Brexit (2016-2020)</li>'
                    + '<li><strong>Debats</strong> : souverainete nationale vs integration, deficit democratique, Europe a plusieurs vitesses</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'Qu\'est-ce que la declaration Schuman ?', answer: 'Le 9 mai 1950, Robert Schuman (ministre francais des Affaires etrangeres) propose la mise en commun des productions de charbon et d\'acier de la France et de l\'Allemagne. C\'est l\'acte fondateur de la construction europeenne.' },
                    { question: 'Qu\'est-ce que la CECA ?', answer: 'La Communaute Europeenne du Charbon et de l\'Acier, créée par le traite de Paris (1951). 6 pays fondateurs : France, Allemagne (RFA), Italie, Belgique, Pays-Bas, Luxembourg.' },
                    { question: 'Que fonde le traite de Rome (1957) ?', answer: 'La CEE (Communaute Economique Europeenne) et Euratom. Il instaure un marche commun entre les 6 pays fondateurs avec libre circulation des marchandises, des personnes, des services et des capitaux.' },
                    { question: 'Qu\'est-ce que le traite de Maastricht ?', answer: 'Signe le 7 fevrier 1992, il créé l\'Union Europeenne (UE), instaure la citoyennete europeenne, prevoit la creation de l\'euro et definit trois piliers (communautaire, PESC, JAI).' },
                    { question: 'Quand l\'euro est-il entre en circulation ?', answer: 'Le 1er janvier 2002, sous forme de pieces et billets. Il avait ete créé comme monnaie scripturale le 1er janvier 1999. Aujourd\'hui, 20 pays forment la zone euro.' },
                    { question: 'Quels sont les 6 pays fondateurs de la construction europeenne ?', answer: 'France, Allemagne (RFA), Italie, Belgique, Pays-Bas et Luxembourg. Ils signent le traite de Paris (CECA, 1951) puis les traites de Rome (CEE, 1957).' },
                    { question: 'Qu\'est-ce que le Brexit ?', answer: 'La sortie du Royaume-Uni de l\'Union Europeenne. Referendum le 23 juin 2016 (51,9% pour le Leave), sortie effective le 31 janvier 2020.' },
                    { question: 'Quel est le role de la Commission europeenne ?', answer: 'Elle detient le monopole de l\'initiative legislative, veille a l\'application des traites et représenté l\'interet general europeen. Son president est elu par le Parlement europeen.' },
                    { question: 'Quel est le role du Parlement europeen ?', answer: 'Il co-legifere avec le Conseil de l\'UE, vote le budget, controle la Commission. Ses deputes sont elus au suffrage universel direct par les citoyens des Etats membres.' },
                    { question: 'Pourquoi la France a-t-elle rejete le TCE en 2005 ?', answer: 'Le 29 mai 2005, 54,68% des Francais votent "non" au Traite Constitutionnel Europeen par referendum, invoquant le liberalisme excessif, le deficit democratique et les craintes sur la souverainete.' },
                    { question: 'Qu\'est-ce que l\'Acte unique europeen (1986) ?', answer: 'Il relance la construction europeenne en fixant l\'objectif d\'un marche unique pour le 1er janvier 1993, avec libre circulation totale des biens, personnes, services et capitaux.' },
                    { question: 'Qu\'est-ce que la crise de la zone euro ?', answer: 'A partir de 2010, crise de la dette souveraine touchant la Grece, l\'Irlande, le Portugal, l\'Espagne. L\'UE met en place des plans de sauvetage et le MES (Mecanisme Europeen de Stabilite).' },
                    { question: 'Combien de pays compte l\'UE en 2024 ?', answer: '27 Etats membres depuis le depart du Royaume-Uni (Brexit, 2020). Le dernier pays a avoir adhere est la Croatie en 2013.' },
                    { question: 'Qu\'est-ce que l\'espace Schengen ?', answer: 'Zone de libre circulation des personnes (suppression des controles aux frontieres interieures) créée en 1985, entree en vigueur en 1995. Elle regroupe 27 pays (dont des non-membres de l\'UE).' },
                    { question: 'Que signifie le "deficit democratique" de l\'UE ?', answer: 'Critique selon laquelle les institutions europeennes manquent de legitimite democratique : la Commission n\'est pas elue directement, les decisions sont percues comme eloignees des citoyens.' },
                    { question: 'Qu\'est-ce que le traite de Lisbonne (2007) ?', answer: 'Traite signe le 13 decembre 2007, entre en vigueur le 1er decembre 2009, il remplace le TCE rejete en 2005. Il créé le poste de president du Conseil europeen et renforce le Parlement. Astuce Bac : dernier grand traite europeen, a connaitre pour tout sujet sur l\'approfondissement de l\'UE.' },
                    { question: 'Qu\'est-ce que la PAC (Politique Agricole Commune) ?', answer: 'Politique europeenne créée en 1962 pour moderniser l\'agriculture, assurer l\'autosuffisance alimentaire et soutenir les revenus des agriculteurs. Elle représenté environ 1/3 du budget de l\'UE. Astuce Bac : exemple concret de politique commune, souvent critiquee pour ses subventions inegales.' },
                    { question: 'Quels sont les critères de Copenhague (1993) ?', answer: 'Conditions a remplir pour adherer a l\'UE : Etat de droit, democratie, droits de l\'Homme, economie de marche viable, capacité a appliquer l\'acquis communautaire. Definis en 1993 avant l\'elargissement aux PECO (2004). Astuce Bac : montrent que l\'UE est un projet politique fonde sur des valeurs, pas seulement un marche.' },
                    { question: 'Qu\'est-ce que le couple franco-allemand dans la construction europeenne ?', answer: 'Moteur historique de l\'integration europeenne, fonde sur la reconciliation après 1945. De Gaulle-Adenauer (traite de l\'Elysee, 1963), Mitterrand-Kohl (Maastricht), Macron-Merkel. Astuce Bac : toujours citer le couple franco-allemand comme moteur de la construction europeenne dans vos dissertations.' }
                ],
                quiz: [
                    { question: 'La declaration Schuman date de :', options: ['1945', '1950', '1957', '1992'], correctIndex: 1, explanation: 'Le 9 mai 1950, Robert Schuman propose la mise en commun du charbon et de l\'acier, acte fondateur de la construction europeenne.' },
                    { question: 'Le traite de Rome est signe en :', options: ['1951', '1955', '1957', '1962'], correctIndex: 2, explanation: 'Le traite de Rome, signe le 25 mars 1957, créé la CEE et Euratom entre les 6 pays fondateurs.' },
                    { question: 'Le traite de Maastricht créé :', options: ['La CECA', 'La CEE', 'L\'Union Europeenne', 'L\'espace Schengen'], correctIndex: 2, explanation: 'Le traite de Maastricht (1992) fonde l\'Union Europeenne, avec la citoyennete europeenne et le projet de monnaie unique.' },
                    { question: 'L\'euro entre en circulation sous forme de pieces et billets en :', options: ['1999', '2000', '2002', '2005'], correctIndex: 2, explanation: 'Les pieces et billets en euros sont mis en circulation le 1er janvier 2002, bien que l\'euro existait comme monnaie scripturale depuis 1999.' },
                    { question: 'Le Brexit est la sortie de l\'UE de :', options: ['La Grece', 'La Norvege', 'Le Royaume-Uni', 'La Suisse'], correctIndex: 2, explanation: 'Le Royaume-Uni quitte l\'UE après le referendum du 23 juin 2016 (51,9% pour le Leave). Sortie effective le 31 janvier 2020.' },
                    { question: 'Combien de pays fondent la CECA en 1951 ?', options: ['4', '6', '9', '12'], correctIndex: 1, explanation: 'Six pays fondent la CECA : France, Allemagne (RFA), Italie, Belgique, Pays-Bas et Luxembourg.' },
                    { question: 'Le Parlement europeen est elu au :', options: ['Suffrage indirect', 'Suffrage universel direct', 'Vote des gouvernements', 'Tirage au sort'], correctIndex: 1, explanation: 'Depuis 1979, les deputes europeens sont elus au suffrage universel direct par les citoyens des Etats membres.' },
                    { question: 'La France rejette le TCE en 2005 par :', options: ['Vote parlementaire', 'Decision presidentielle', 'Referendum', 'Arret constitutionnel'], correctIndex: 2, explanation: 'Le 29 mai 2005, 54,68% des Francais votent "non" au Traite Constitutionnel Europeen par referendum.' },
                    { question: 'L\'Acte unique europeen (1986) vise a creer :', options: ['Une armee commune', 'Un marche unique', 'Une monnaie unique', 'Un parlement unique'], correctIndex: 1, explanation: 'L\'Acte unique fixe l\'objectif du marche unique pour 1993 : libre circulation des biens, personnes, services et capitaux.' },
                    { question: 'L\'UE compte en 2024 :', options: ['25 membres', '27 membres', '28 membres', '30 membres'], correctIndex: 1, explanation: 'L\'UE compte 27 Etats membres depuis le depart du Royaume-Uni (Brexit) en 2020.' },
                    { question: 'L\'espace Schengen permet :', options: ['La monnaie unique', 'La libre circulation des personnes sans controle aux frontieres interieures', 'L\'election du Parlement europeen', 'La politique agricole commune'], correctIndex: 1, explanation: 'L\'espace Schengen, entre en vigueur en 1995, supprime les controles aux frontieres interieures entre les Etats signataires, permettant la libre circulation des personnes.' },
                    { question: 'La Commission europeenne detient le monopole de :', options: ['L\'election des deputes', 'L\'initiative legislative', 'La politique etrangere', 'L\'impression de l\'euro'], correctIndex: 1, explanation: 'La Commission europeenne est la seule institution habilitee a proposer des textes legislatifs. Elle veille aussi a l\'application des traites europeens.' },
                    { question: 'Le traite de Lisbonne (2007) a ete adopte pour remplacer :', options: ['Le traite de Rome', 'Le traite de Maastricht', 'Le TCE rejete par referendum en 2005', 'L\'Acte unique europeen'], correctIndex: 2, explanation: 'Le traite de Lisbonne remplace le Traite Constitutionnel Europeen (TCE) rejete par la France et les Pays-Bas en 2005. Il créé le poste de president du Conseil europeen.' },
                    { question: 'Les critères de Copenhague (1993) definissent :', options: ['Les règles de la zone euro', 'Les conditions d\'adhesion a l\'UE', 'Le fonctionnement du Parlement europeen', 'Les normes environnementales europeennes'], correctIndex: 1, explanation: 'Les critères de Copenhague exigent la democratie, l\'Etat de droit, une economie de marche viable et la capacité a appliquer l\'acquis communautaire pour adherer a l\'UE.' }
                ]
            },
            {
                id: 'moyen_orient',
                title: 'Le Proche et Moyen-Orient',
                icon: '\uD83D\uDD4C',
                content: '<h3>Le conflit israelo-palestinien</h3>'
                    + '<ul>'
                    + '<li><strong>Origines</strong> : declaration Balfour (1917), mandat britannique sur la Palestine, montee du sionisme et du nationalisme arabe</li>'
                    + '<li><strong>Creation d\'Israel (14 mai 1948)</strong> : plan de partage de l\'ONU (1947), première guerre israelo-arabe, exode palestinien (Nakba)</li>'
                    + '<li><strong>Guerres et crises</strong> : guerre des Six Jours (1967, occupation de la Cisjordanie et de Gaza), guerre du Kippour (1973), intifadas (1987, 2000)</li>'
                    + '<li><strong>Tentatives de paix</strong> : accords d\'Oslo (1993, Rabin-Arafat), processus enlise, question de Jerusalem et des colonies</li>'
                    + '</ul>'
                    + '<h3>Petrole et geopolitique</h3>'
                    + '<ul>'
                    + '<li><strong>Richesse petroliere</strong> : la region detient environ 50% des reserves mondiales de petrole (Arabie Saoudite, Irak, Iran, Emirats)</li>'
                    + '<li><strong>Choc petrolier de 1973</strong> : l\'OPEP quadruple les prix du petrole en represailles au soutien occidental a Israel</li>'
                    + '<li><strong>Guerres du Golfe</strong> : guerre Iran-Irak (1980-1988), invasion du Koweit par l\'Irak (1990) et guerre du Golfe (1991), guerre d\'Irak (2003)</li>'
                    + '</ul>'
                    + '<h3>Crises contemporaines et islamisme</h3>'
                    + '<ul>'
                    + '<li><strong>Islamisme</strong> : revolution iranienne (1979, Khomeiny), montee des mouvements islamistes (Freres musulmans, Al-Qaida, Daech)</li>'
                    + '<li><strong>Printemps arabes (2011)</strong> : soulevement populaire en Tunisie, Egypte, Libye, Syrie ; resultats contrastes (democratisation en Tunisie, guerre civile en Syrie)</li>'
                    + '<li><strong>Enjeux actuels</strong> : guerre civile syrienne, conflit au Yemen, rivalite Iran/Arabie Saoudite, question kurde, terrorisme</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'Quand l\'Etat d\'Israel est-il créé ?', answer: 'Le 14 mai 1948, proclame par David Ben Gourion, sur la base du plan de partage de l\'ONU (resolution 181 de novembre 1947). Cela declenche la première guerre israelo-arabe.' },
                    { question: 'Qu\'est-ce que la guerre des Six Jours ?', answer: 'Guerre eclair (5-10 juin 1967) ou Israel bat l\'Egypte, la Jordanie et la Syrie. Israel occupe le Sinai, la bande de Gaza, la Cisjordanie, Jerusalem-Est et le plateau du Golan.' },
                    { question: 'Que sont les accords d\'Oslo ?', answer: 'Signes en 1993, ils marquent la reconnaissance mutuelle entre Israel (Rabin) et l\'OLP (Arafat). Ils creent l\'Autorite palestinienne et prevoient une autonomie progressive, mais le processus de paix echoue.' },
                    { question: 'Qu\'est-ce que le choc petrolier de 1973 ?', answer: 'En represailles au soutien occidental a Israel pendant la guerre du Kippour, les pays arabes de l\'OPEP reduisent leur production et quadruplent les prix du petrole, provoquant une crise economique mondiale.' },
                    { question: 'Qu\'est-ce que la revolution iranienne de 1979 ?', answer: 'Renversement du Shah d\'Iran par une revolution islamique menee par l\'ayatollah Khomeiny. L\'Iran devient une republique islamique theocratique, rompant avec l\'influence americaine.' },
                    { question: 'Quelles sont les guerres du Golfe ?', answer: 'La guerre Iran-Irak (1980-1988), la guerre du Golfe (1991, coalition internationale contre l\'Irak après l\'invasion du Koweit) et la guerre d\'Irak (2003, intervention americano-britannique, chute de Saddam Hussein).' },
                    { question: 'Qu\'est-ce que le Printemps arabe ?', answer: 'Vague de soulevement populaires en 2011 dans le monde arabe : Tunisie (chute de Ben Ali), Egypte (chute de Moubarak), Libye (chute de Kadhafi), Syrie (guerre civile). Resultats très contrastes.' },
                    { question: 'Qu\'est-ce que la guerre du Kippour ?', answer: 'Le 6 octobre 1973, l\'Egypte et la Syrie attaquent Israel par surprise lors de la fete juive du Kippour. Apres un recul initial, Israel reprend l\'avantage. Cette guerre mene au choc petrolier.' },
                    { question: 'Qu\'est-ce que la Nakba ?', answer: 'Terme arabe signifiant "catastrophe", designant l\'exode de 700 000 a 750 000 Palestiniens lors de la creation d\'Israel et de la guerre de 1948.' },
                    { question: 'Qu\'est-ce que l\'OPEP ?', answer: 'L\'Organisation des Pays Exportateurs de Petrole, fondee en 1960. Elle regroupe les principaux producteurs de petrole et cherche a reguler les cours en fixant des quotas de production.' },
                    { question: 'Qu\'est-ce que Daech ?', answer: 'L\'Etat islamique (EI/Daech), organisation djihadiste qui proclame un "califat" en 2014 sur des territoires en Irak et en Syrie. Responsable d\'attentats dans le monde entier, il perd ses territoires a partir de 2017.' },
                    { question: 'Quelle est la declaration Balfour ?', answer: 'Lettre du 2 novembre 1917 du ministre britannique Balfour qui promet la creation d\'un "foyer national juif" en Palestine, posant les bases du futur Etat d\'Israel.' },
                    { question: 'Qu\'est-ce qu\'une intifada ?', answer: 'Soulevement populaire palestinien contre l\'occupation israelienne. La première (1987-1993) est caracterisee par des jets de pierres ; la seconde (2000-2005) est plus violente (attentats-suicides).' },
                    { question: 'Pourquoi la Syrie est-elle en guerre civile ?', answer: 'En 2011, des manifestations pro-democratie contre le regime de Bachar el-Assad sont reprimees dans le sang. Le conflit se transforme en guerre civile impliquant de multiples acteurs (regime, rebelles, Daech, Kurdes, puissances etrangeres).' },
                    { question: 'Quelle est la rivalite Iran / Arabie Saoudite ?', answer: 'Opposition entre l\'Iran chiite et l\'Arabie Saoudite sunnite pour l\'hegemonie regionale. Elle se manifeste dans les conflits au Yemen, en Syrie, au Liban et en Irak.' },
                    { question: 'Qu\'est-ce que la guerre civile au Yemen ?', answer: 'Conflit depuis 2014 opposant les rebelles houthis (soutenus par l\'Iran) au gouvernement (soutenu par l\'Arabie Saoudite). Pire crise humanitaire mondiale selon l\'ONU : famine, epidemies, des millions de deplaces. Astuce Bac : exemple de conflit par procuration (proxy war) entre puissances regionales.' },
                    { question: 'Qu\'est-ce que le terrorisme international depuis le 11 septembre 2001 ?', answer: 'Les attentats du 11 septembre 2001 (Al-Qaida, 3000 morts) declenchent la "guerre contre le terrorisme" des USA. Interventions en Afghanistan (2001-2021) et en Irak (2003), montee de Daech (2014), attentats en Europe (Paris 2015, Bruxelles 2016). Astuce Bac : montrer le lien entre instabilite regionale et menace terroriste mondiale.' },
                    { question: 'Pourquoi la guerre en Ukraine (2022) est-elle un conflit majeur ?', answer: 'Invasion russe de l\'Ukraine le 24 fevrier 2022, remettant en cause l\'ordre europeen d\'apres-Guerre froide. Sanctions occidentales massives, soutien militaire a l\'Ukraine, crise energetique mondiale. Astuce Bac : illustre le retour de la guerre en Europe et la recomposition geopolitique mondiale.' },
                    { question: 'Qu\'est-ce qu\'un Etat failli (failed state) ?', answer: 'Etat incapable d\'exercer ses fonctions fondamentales : sécurité, justice, services publics. Exemples : Somalie, Libye après 2011, Yemen. Astuce Bac : notion essentielle pour expliquer l\'instabilite regionale, le terrorisme et les flux migratoires dans les conflits contemporains.' }
                ],
                quiz: [
                    { question: 'L\'Etat d\'Israel est créé en :', options: ['1945', '1947', '1948', '1967'], correctIndex: 2, explanation: 'Israel est proclame le 14 mai 1948 par David Ben Gourion, declenchant la première guerre israelo-arabe.' },
                    { question: 'La guerre des Six Jours a lieu en :', options: ['1956', '1967', '1973', '1979'], correctIndex: 1, explanation: 'En juin 1967, Israel mene une guerre eclair contre l\'Egypte, la Jordanie et la Syrie, occupant de nouveaux territoires.' },
                    { question: 'Les accords d\'Oslo (1993) sont signes entre :', options: ['Israel et l\'Egypte', 'Israel et l\'OLP', 'Israel et la Syrie', 'Israel et la Jordanie'], correctIndex: 1, explanation: 'Les accords d\'Oslo (1993) sont signes par Yitzhak Rabin (Israel) et Yasser Arafat (OLP), avec la mediation des USA.' },
                    { question: 'Le premier choc petrolier a lieu en :', options: ['1967', '1973', '1979', '1990'], correctIndex: 1, explanation: 'En 1973, l\'OPEP quadruple les prix du petrole en reaction au soutien occidental a Israel pendant la guerre du Kippour.' },
                    { question: 'La revolution iranienne porte au pouvoir :', options: ['Le Shah', 'L\'armee', 'L\'ayatollah Khomeiny', 'Les communistes'], correctIndex: 2, explanation: 'En 1979, la revolution islamique renverse le Shah et instaure une republique islamique sous la direction de l\'ayatollah Khomeiny.' },
                    { question: 'La guerre du Golfe de 1991 est declenchee par :', options: ['L\'Iran', 'L\'Irak (invasion du Koweit)', 'L\'Arabie Saoudite', 'Les Etats-Unis'], correctIndex: 1, explanation: 'Saddam Hussein envahit le Koweit en aout 1990. Une coalition internationale dirigee par les USA libere le Koweit en janvier-fevrier 1991.' },
                    { question: 'Le Printemps arabe commence en 2011 dans quel pays ?', options: ['Egypte', 'Syrie', 'Tunisie', 'Libye'], correctIndex: 2, explanation: 'Le Printemps arabe debute en Tunisie (dec. 2010 - jan. 2011) avec la revolution de jasmin qui renverse Ben Ali.' },
                    { question: 'L\'OPEP a ete fondee en :', options: ['1945', '1955', '1960', '1973'], correctIndex: 2, explanation: 'L\'OPEP est fondee en 1960 a Bagdad par l\'Arabie Saoudite, l\'Iran, l\'Irak, le Koweit et le Venezuela.' },
                    { question: 'La declaration Balfour date de :', options: ['1917', '1920', '1947', '1948'], correctIndex: 0, explanation: 'Le 2 novembre 1917, le Royaume-Uni promet par la declaration Balfour un "foyer national juif" en Palestine.' },
                    { question: 'Daech proclame son "califat" en :', options: ['2001', '2011', '2014', '2016'], correctIndex: 2, explanation: 'En juin 2014, Daech proclame un "califat" sur des territoires conquis en Irak et en Syrie, avant d\'etre progressivement defait militairement.' },
                    { question: 'La guerre en Ukraine (2022) est significative car elle :', options: ['Est le premier conflit arme depuis 1945', 'Marque le retour de la guerre en Europe et recompose la geopolitique mondiale', 'Oppose deux membres permanents du Conseil de sécurité de l\'ONU', 'Est un conflit exclusivement economique sans combats'], correctIndex: 1, explanation: 'L\'invasion russe du 24 fevrier 2022 remet en cause l\'ordre europeen d\'apres-Guerre froide et entraine sanctions occidentales, soutien militaire a l\'Ukraine et crise energetique.' },
                    { question: 'Un Etat failli (failed state) se caracterise par :', options: ['Un regime democratique instable mais fonctionnel', 'L\'incapacite a assurer la sécurité, la justice et les services publics', 'Une economie trop dependante du tourisme', 'Un gouvernement autoritaire mais efficace'], correctIndex: 1, explanation: 'Un Etat failli ne peut exercer ses fonctions fondamentales. La Somalie, la Libye après 2011 et le Yemen en sont des exemples, generant instabilite, terrorisme et flux migratoires.' }
                ]
            },
            {
                id: 'gouverner_france',
                title: 'Gouverner la France depuis 1946',
                icon: '\uD83C\uDFDB\uFE0F',
                content: '<h3>La IVe Republique (1946-1958)</h3>'
                    + '<ul>'
                    + '<li><strong>Institutions</strong> : regime parlementaire, Assemblee nationale puissante, president faible, instabilite gouvernementale (22 gouvernements en 12 ans)</li>'
                    + '<li><strong>Realisations</strong> : reconstruction, Etat-providence (Securite sociale créée en 1945), debut de la construction europeenne</li>'
                    + '<li><strong>Crises</strong> : guerres coloniales (Indochine, Algerie), crise du 13 mai 1958 a Alger qui ramene de Gaulle au pouvoir</li>'
                    + '</ul>'
                    + '<h3>La Ve Republique et de Gaulle (1958-1969)</h3>'
                    + '<ul>'
                    + '<li><strong>Constitution de 1958</strong> : renforcement du pouvoir executif, president de la Republique au centre des institutions</li>'
                    + '<li><strong>Election presidentielle au suffrage universel direct</strong> : instauree en 1962 par referendum, elle renforce la legitimite du president</li>'
                    + '<li><strong>De Gaulle</strong> : fin de la guerre d\'Algerie (1962), politique d\'independance nationale, force de dissuasion nucleaire, crise de Mai 68</li>'
                    + '</ul>'
                    + '<h3>Les alternances et l\'evolution de la Republique</h3>'
                    + '<ul>'
                    + '<li><strong>Alternance de 1981</strong> : Mitterrand (socialiste) elu president, nationalisations, abolition de la peine de mort, decentralisation (lois Defferre 1982)</li>'
                    + '<li><strong>Cohabitations</strong> : 1986-88 (Mitterrand/Chirac), 1993-95 (Mitterrand/Balladur), 1997-2002 (Chirac/Jospin)</li>'
                    + '<li><strong>Etat-providence</strong> : Securite sociale, RMI (1988) devenu RSA (2009), CMU (1999), retraites, education — financements sous pression depuis les annees 1990</li>'
                    + '<li><strong>Decentralisation</strong> : transfert de competences de l\'Etat vers les collectivites locales (commune, departement, region), acte I (1982), acte II (2003)</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'Pourquoi la IVe Republique est-elle instable ?', answer: 'Le regime parlementaire donne trop de pouvoir a l\'Assemblee nationale, qui renverse frequemment les gouvernements. En 12 ans (1946-1958), 22 gouvernements se succedent.' },
                    { question: 'Quand la Ve Republique est-elle fondee ?', answer: 'La Constitution de la Ve Republique est adoptee par referendum le 28 septembre 1958. De Gaulle devient le premier president de la Ve Republique en janvier 1959.' },
                    { question: 'Qu\'apporte la Constitution de 1958 ?', answer: 'Un executif fort : le president de la Republique dispose de pouvoirs etendus (article 16, dissolution, referendum). Le Premier ministre dirige le gouvernement. L\'equilibre institutionnel est favorable au president.' },
                    { question: 'Quand le president est-il elu au suffrage universel direct ?', answer: 'Depuis la reforme de 1962, approuvee par referendum. Cela renforce la legitimite democratique du president, qui devient la cle de voute des institutions.' },
                    { question: 'Qu\'est-ce que la première alternance de 1981 ?', answer: 'Francois Mitterrand (Parti socialiste) est elu president le 10 mai 1981, mettant fin a 23 ans de pouvoir de la droite gaulliste et giscardienne. Il engage des reformes majeures.' },
                    { question: 'Qu\'est-ce qu\'une cohabitation ?', answer: 'Situation ou le president de la Republique et le Premier ministre sont de bords politiques opposes. Ex : Mitterrand/Chirac (1986-88), Chirac/Jospin (1997-2002).' },
                    { question: 'Qu\'est-ce que la decentralisation de 1982 ?', answer: 'Les lois Defferre (1982) transferent des competences de l\'Etat aux collectivites locales (communes, departements, regions). Les regions deviennent des collectivites a part entiere.' },
                    { question: 'Quand la peine de mort est-elle abolie en France ?', answer: 'Le 9 octobre 1981, sous la presidence de Mitterrand, a l\'initiative de Robert Badinter, garde des Sceaux. La France est l\'un des derniers pays europeens a l\'abolir.' },
                    { question: 'Qu\'est-ce que la Securite sociale ?', answer: 'Systeme de protection sociale créé par les ordonnances de 1945 (sous de Gaulle). Elle couvre la maladie, la vieillesse, les accidents du travail et la famille. Pilier de l\'Etat-providence francais.' },
                    { question: 'C\'est quoi la crise du 13 mai 1958 ?', answer: 'Le 13 mai 1958 a Alger, des militaires et des Francais d\'Algerie se revolent. La France est en pleine guerre d\'Algerie et le gouvernement ne tient plus. On rappelle le general de Gaulle. Il prend le pouvoir et créé la Ve Republique (celle qu\'on a encore aujourd\'hui). En gros : c\'est la crise qui a CREE notre système politique actuel. Mots difficiles : "IVe Republique" = le système d\'avant, très instable (22 gouvernements en 12 ans). "Ve Republique" = notre système actuel, avec un president fort.' },
                    { question: 'C\'est quoi Mai 68 ?', answer: 'En mai 1968, les etudiants manifestent, puis les ouvriers aussi. 10 MILLIONS de personnes font greve. La France est paralysee. De Gaulle dissout l\'Assemblee (= nouvelles elections) et gagne. Mais il demissionne l\'annee suivante (1969). En gros : c\'est la plus grande crise sociale de la Ve Republique. Mots difficiles : "greve generale" = quand presque tout le monde arrete de travailler en même temps. "dissoudre l\'Assemblee" = le president annule le Parlement et provoque de nouvelles elections.' },
                    { question: 'C\'est quoi l\'article 49-3 ?', answer: 'C\'est un article de la Constitution qui permet au Premier ministre de faire passer une loi SANS vote des deputes. Les deputes ne peuvent le bloquer que s\'ils renversent le gouvernement (= motion de censure). En gros : le gouvernement dit "cette loi passe, sauf si vous me virez." C\'est un outil très controverse : certains disent que c\'est antidemocratique, d\'autres que c\'est necessaire pour avancer. Mots difficiles : "motion de censure" = vote des deputes pour renverser le gouvernement. "Constitution" = le texte qui definit les règles du pays.' },
                    { question: 'C\'est quoi le quinquennat ?', answer: 'Avant 2002, le president etait elu pour 7 ans. Maintenant c\'est 5 ans. Ca a ete decide par referendum en 2000. Pourquoi ce changement ? Pour que le president et les deputes soient elus en même temps (les deputes sont aussi elus pour 5 ans). Ca evite la cohabitation. Mots difficiles : "quinquennat" = mandat de 5 ans (du latin "quinque" = cinq). "mandat legislatif" = la duree du poste de depute (= 5 ans). "referendum" = vote ou TOUT le peuple decide directement (oui ou non). "cohabitation" = quand le president et le Premier ministre sont de partis opposes, donc ils ne sont pas d\'accord.' },
                    { question: 'Quelles sont les grandes reformes de Mitterrand ?', answer: 'Nationalisations (1982), abolition de la peine de mort (1981), decentralisation (1982), 5e semaine de conges payes, retraite a 60 ans, creation du RMI (1988).' },
                    { question: 'Qu\'est-ce que le RSA ?', answer: 'Le Revenu de Solidarite Active, créé en 2009, remplace le RMI (1988). Il garantit un revenu minimum aux personnes sans ressources et complete les revenus des travailleurs pauvres.' }
                ],
                quiz: [
                    { question: 'La Ve Republique est fondee en :', options: ['1946', '1954', '1958', '1962'], correctIndex: 2, explanation: 'La Constitution de la Ve Republique est adoptee par referendum le 28 septembre 1958, après la crise du 13 mai.' },
                    { question: 'Le president est elu au suffrage universel direct depuis :', options: ['1958', '1962', '1965', '1981'], correctIndex: 1, explanation: 'La reforme constitutionnelle de 1962, approuvee par referendum, instaure l\'election du president au suffrage universel direct.' },
                    { question: 'La première alternance en faveur de la gauche a lieu en :', options: ['1974', '1981', '1988', '1997'], correctIndex: 1, explanation: 'Le 10 mai 1981, Francois Mitterrand (PS) est elu president, mettant fin a 23 ans de pouvoir de la droite.' },
                    { question: 'La peine de mort est abolie en France en :', options: ['1974', '1981', '1988', '2001'], correctIndex: 1, explanation: 'La peine de mort est abolie le 9 octobre 1981, a l\'initiative de Robert Badinter sous la presidence de Mitterrand.' },
                    { question: 'Combien de gouvernements la IVe Republique a-t-elle connus ?', options: ['10', '15', '22', '30'], correctIndex: 2, explanation: 'L\'instabilite de la IVe Republique se manifeste par 22 gouvernements en 12 ans (1946-1958).' },
                    { question: 'Les lois de decentralisation de 1982 portent le nom de :', options: ['Lois Badinter', 'Lois Defferre', 'Lois Auroux', 'Lois Rocard'], correctIndex: 1, explanation: 'Les lois Defferre (1982) transferent des competences de l\'Etat vers les collectivites locales (communes, departements, regions).' },
                    { question: 'La cohabitation Chirac/Jospin dure de :', options: ['1986 a 1988', '1993 a 1995', '1997 a 2002', '2002 a 2007'], correctIndex: 2, explanation: 'De 1997 a 2002, le president Chirac (droite) cohabite avec le Premier ministre Jospin (gauche).' },
                    { question: 'Le quinquennat est instaure en :', options: ['1995', '2000', '2002', '2007'], correctIndex: 1, explanation: 'Le referendum du 24 septembre 2000 approuve le passage du mandat presidentiel de 7 a 5 ans, applicable des 2002.' },
                    { question: 'La Securite sociale est créée en :', options: ['1936', '1945', '1958', '1981'], correctIndex: 1, explanation: 'Les ordonnances de 1945 creent la Securite sociale, pilier de l\'Etat-providence francais.' },
                    { question: 'La crise du 13 mai 1958 se deroule en/a :', options: ['Paris', 'Indochine', 'Alger', 'Marseille'], correctIndex: 2, explanation: 'Le soulevement du 13 mai 1958 a Alger, par des militaires et colons francais d\'Algerie, precipite le retour de de Gaulle au pouvoir.' },
                    { question: 'L\'article 49-3 de la Constitution permet au Premier ministre de :', options: ['Dissoudre l\'Assemblee nationale', 'Faire adopter un texte sans vote sauf motion de censure', 'Nommer les ministres', 'Declarer l\'etat d\'urgence'], correctIndex: 1, explanation: 'L\'article 49-3 permet d\'engager la responsabilite du gouvernement sur un texte, qui est adopte sans vote sauf si une motion de censure est deposee et votee.' },
                    { question: 'Mai 68 est a l\'origine :', options: ['D\'un coup d\'Etat militaire', 'D\'un mouvement etudiant et social qui paralyse la France', 'De la creation de la Ve Republique', 'De l\'abolition de la peine de mort'], correctIndex: 1, explanation: 'En mai 1968, un mouvement etudiant puis une greve generale de 10 millions de travailleurs paralysent le pays. De Gaulle dissout l\'Assemblee et remporte les elections, mais demissionne en 1969.' }
                ]
            },
            {
                id: 'territoires',
                title: 'Dynamiques territoriales de la France',
                icon: '\uD83D\uDDFA\uFE0F',
                content: '<h3>La metropolisation et le poids de Paris</h3>'
                    + '<ul>'
                    + '<li><strong>Metropolisation</strong> : concentration croissante des populations, des emplois et des richesses dans les grandes villes (Paris, Lyon, Marseille, Toulouse, Bordeaux)</li>'
                    + '<li><strong>Paris, ville-monde</strong> : l\'Ile-de-France concentre ~19% de la population et ~31% du PIB national, siege des pouvoirs politiques, economiques et culturels</li>'
                    + '<li><strong>Le desequilibre Paris/province</strong> : "Paris et le desert francais" (J.-F. Gravier, 1947), politiques d\'amenagement pour le corriger (DATAR, 1963)</li>'
                    + '<li><strong>Metropoles regionales</strong> : Lyon, Marseille, Lille, Toulouse, Nantes, Bordeaux : poles economiques dynamiques en croissance</li>'
                    + '</ul>'
                    + '<h3>Les espaces ruraux et les littoraux</h3>'
                    + '<ul>'
                    + '<li><strong>Espaces ruraux</strong> : diversité (campagnes periurbaines dynamiques, campagnes profondes en declin), "diagonale du vide" du nord-est au sud-ouest</li>'
                    + '<li><strong>Periurbanisation</strong> : etalement des villes sur les campagnes proches, dependance à la voiture, enjeux environnementaux</li>'
                    + '<li><strong>Littoraux attractifs</strong> : heliocentrisme (attraction du Sud), tourisme, economie maritime, risques (erosion, submersion)</li>'
                    + '<li><strong>Montagnes</strong> : tourisme hivernal (Alpes, Pyrenees), espaces proteges, deprise dans certaines vallees</li>'
                    + '</ul>'
                    + '<h3>L\'outre-mer et les inegalites territoriales</h3>'
                    + '<ul>'
                    + '<li><strong>Outre-mer</strong> : DROM (Guadeloupe, Martinique, Guyane, Reunion, Mayotte) et COM, situes dans toutes les zones climatiques, ZEE immense (2e mondiale)</li>'
                    + '<li><strong>Inegalites territoriales</strong> : fracture numerique, deserts medicaux, fermeture de services publics en zones rurales, inegalites de revenus entre regions</li>'
                    + '<li><strong>Politiques d\'amenagement</strong> : DATAR puis CGET puis ANCT, contrats de plan Etat-Region, politique de la ville, zones de revitalisation rurale</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'Qu\'est-ce que la metropolisation ?', answer: 'Processus de concentration croissante des populations, des emplois, des richesses et des fonctions de commandement dans les grandes villes (metropoles). En France, Paris domine largement.' },
                    { question: 'Quel est le poids de Paris dans l\'economie francaise ?', answer: 'L\'Ile-de-France concentre environ 19% de la population francaise et 31% du PIB national. C\'est le siege du pouvoir politique, economique et culturel.' },
                    { question: 'Qu\'est-ce que "Paris et le desert francais" ?', answer: 'Ouvrage de Jean-Francois Gravier (1947) denonant la concentration excessive de la France a Paris au detriment de la province. Il inspire les politiques d\'amenagement du territoire.' },
                    { question: 'Qu\'est-ce que la DATAR ?', answer: 'La Delegation a l\'Amenagement du Territoire et a l\'Action Regionale, créée en 1963. Elle vise a reduire les desequilibres regionaux (deconcentration industrielle, villes nouvelles, metropoles d\'equilibre).' },
                    { question: 'Qu\'est-ce que la diagonale du vide ?', answer: 'Bande de territoire a faible densite allant du nord-est (Ardennes) au sud-ouest (Pyrenees) de la France. Zones rurales en declin demographique et economique.' },
                    { question: 'Qu\'est-ce que la periurbanisation ?', answer: 'Extension des zones d\'habitat autour des villes, dans les campagnes proches. Les habitants travaillent en ville mais vivent à la peripherie, entrainant etalement urbain et dependance automobile.' },
                    { question: 'Quels sont les DROM ?', answer: 'Les Departements et Regions d\'Outre-Mer : Guadeloupe, Martinique, Guyane, La Reunion et Mayotte. Ils ont le même statut juridique que les departements metropolitains.' },
                    { question: 'Pourquoi les littoraux francais sont-ils attractifs ?', answer: 'Le tourisme (Cote d\'Azur, Atlantique), le climat (heliocentrisme), l\'economie maritime (ports, peche) et le cadre de vie attirent population et activites vers les littoraux.' },
                    { question: 'Qu\'est-ce que la ZEE de la France ?', answer: 'La Zone Economique Exclusive : espace maritime sur lequel la France exerce des droits economiques. Grace a l\'outre-mer, la France possede la 2e ZEE mondiale (environ 11 millions de km2).' },
                    { question: 'Quelles sont les principales metropoles regionales francaises ?', answer: 'Lyon, Marseille-Aix, Toulouse, Bordeaux, Lille, Nantes, Strasbourg, Rennes. Elles concentrent emplois qualifies, universites, recherche et services superieurs.' },
                    { question: 'Qu\'est-ce qu\'un desert medical ?', answer: 'Zone ou l\'acces aux soins est insuffisant en raison du faible nombre de medecins. Les zones rurales et certaines banlieues sont particulierement touchees.' },
                    { question: 'Qu\'est-ce que la politique de la ville ?', answer: 'Ensemble de mesures de l\'Etat pour reduire les inegalites dans les quartiers urbains defavorises : renovation urbaine, zones d\'education prioritaire, emplois aides, cohesion sociale.' },
                    { question: 'Qu\'est-ce que l\'heliocentrisme en geographie ?', answer: 'Tendance des populations et des activites a se deplacer vers le sud et les zones ensoleillees de la France (Midi, Cote d\'Azur). Le Sud et l\'Ouest sont les regions les plus dynamiques demographiquement.' },
                    { question: 'Quels sont les defis de l\'outre-mer francais ?', answer: 'Eloignement geographique, dependance economique envers la metropole, chomage élève, couts de la vie importants, risques naturels (cyclones, volcans), mais aussi biodiversite et ZEE strategiques.' },
                    { question: 'Qu\'est-ce que l\'ANCT ?', answer: 'L\'Agence Nationale de la Cohesion des Territoires, créée en 2020 pour remplacer le CGET. Elle accompagne les collectivites locales dans leurs projets d\'amenagement et de developpement.' }
                ],
                quiz: [
                    { question: 'L\'Ile-de-France concentre environ quel pourcentage du PIB francais ?', options: ['15%', '20%', '31%', '40%'], correctIndex: 2, explanation: 'L\'Ile-de-France produit environ 31% du PIB national, illustrant la macrocephalie parisienne.' },
                    { question: '"Paris et le desert francais" est un ouvrage de :', options: ['De Gaulle', 'Jean-Francois Gravier', 'Fernand Braudel', 'Pierre Mendes France'], correctIndex: 1, explanation: 'Jean-Francois Gravier publie cet ouvrage en 1947, denonant l\'hyper-concentration parisienne.' },
                    { question: 'La DATAR est créée en :', options: ['1947', '1958', '1963', '1982'], correctIndex: 2, explanation: 'La DATAR est créée en 1963 pour amenager le territoire et corriger les desequilibres regionaux.' },
                    { question: 'La "diagonale du vide" s\'etend :', options: ['Du nord au sud', 'D\'est en ouest', 'Du nord-est au sud-ouest', 'Du nord-ouest au sud-est'], correctIndex: 2, explanation: 'La diagonale du vide est une bande de faible densite allant des Ardennes aux Pyrenees, en passant par le Massif central.' },
                    { question: 'La France possede la ZEE :', options: ['1ere mondiale', '2e mondiale', '5e mondiale', '10e mondiale'], correctIndex: 1, explanation: 'Grace a ses territoires d\'outre-mer, la France detient la 2e ZEE mondiale (apres les USA), environ 11 millions de km2.' },
                    { question: 'La periurbanisation entraine :', options: ['La densification des centres-villes', 'L\'etalement urbain et la dependance automobile', 'Le declin des banlieues', 'La disparition de l\'agriculture'], correctIndex: 1, explanation: 'La periurbanisation provoque l\'etalement des villes dans les campagnes proches et la dependance à la voiture individuelle.' },
                    { question: 'Combien de DROM la France compte-t-elle ?', options: ['3', '4', '5', '7'], correctIndex: 2, explanation: 'La France compte 5 DROM : Guadeloupe, Martinique, Guyane, La Reunion et Mayotte (depuis 2011).' },
                    { question: 'L\'heliocentrisme en geographie désigné :', options: ['L\'attraction vers les zones ensoleillees du Sud', 'La centralite de Paris', 'Le rechauffement climatique', 'L\'exode rural'], correctIndex: 0, explanation: 'L\'heliocentrisme désigné l\'attraction des populations vers les regions ensoleillees du sud et de l\'ouest de la France.' },
                    { question: 'Un desert medical est une zone ou :', options: ['Il n\'y a pas d\'hopital', 'L\'acces aux soins est insuffisant', 'Aucun pharmacien n\'exerce', 'La pollution est très elevee'], correctIndex: 1, explanation: 'Un desert medical est une zone sous-dotee en professionnels de sante, rendant l\'acces aux soins difficile pour les habitants.' },
                    { question: 'La politique de la ville vise a :', options: ['Construire des villes nouvelles', 'Reduire les inegalites dans les quartiers defavorises', 'Developper le tourisme urbain', 'Fusionner des communes'], correctIndex: 1, explanation: 'La politique de la ville est un ensemble de mesures pour ameliorer les conditions de vie dans les quartiers prioritaires.' },
                    { question: 'Les metropoles d\'equilibre ont ete creees pour :', options: ['Remplacer Paris comme capitale', 'Contrebalancer la domination parisienne en developpant des grandes villes de province', 'Accueillir les Jeux olympiques', 'Gerer les flux migratoires'], correctIndex: 1, explanation: 'Dans les annees 1960, la DATAR désigné des metropoles d\'equilibre (Lyon, Marseille, Lille, Bordeaux, Toulouse, etc.) pour freiner la concentration parisienne et dynamiser les regions.' },
                    { question: 'L\'outre-mer francais confere à la France :', options: ['Un siege permanent a l\'ONU', 'Une presence sur tous les continents et la 2e ZEE mondiale', 'Le controle du canal de Suez', 'La plus grande armee d\'Europe'], correctIndex: 1, explanation: 'Les territoires d\'outre-mer (DROM et COM) donnent à la France une presence mondiale et la deuxieme Zone Economique Exclusive au monde, soit environ 11 millions de km2.' }
                ]
            },
            {
                id: 'afrique',
                title: 'L\'Afrique: defis du developpement',
                icon: '\uD83C\uDF31',
                content: '<h3>Croissance demographique et urbanisation</h3>'
                    + '<ul>'
                    + '<li><strong>Explosion demographique</strong> : l\'Afrique compte 1,4 milliard d\'habitants (2023) et pourrait atteindre 2,5 milliards en 2050 ; transition demographique en cours mais inachevee</li>'
                    + '<li><strong>Jeunesse</strong> : age median d\'environ 19 ans, atout economique potentiel mais defi en termes d\'education et d\'emploi</li>'
                    + '<li><strong>Urbanisation rapide</strong> : 43% de population urbaine (en hausse), megapoles en expansion (Lagos, Le Caire, Kinshasa), bidonvilles, difficulte d\'acces aux services</li>'
                    + '<li><strong>Exode rural</strong> : afflux vers les villes, pression sur les infrastructures, mais aussi dynamisme economique urbain</li>'
                    + '</ul>'
                    + '<h3>Ressources, conflits et integration regionale</h3>'
                    + '<ul>'
                    + '<li><strong>Ressources abondantes</strong> : petrole (Nigeria, Angola), minerais (RDC : coltan, cobalt), or (Afrique du Sud, Ghana), terres arables vastes</li>'
                    + '<li><strong>Malediction des ressources</strong> : les richesses naturelles alimentent parfois corruption, conflits armes et instabilite (RDC, Soudan, Nigeria)</li>'
                    + '<li><strong>Conflits</strong> : guerres civiles, terrorisme (Boko Haram, Sahel), coups d\'Etat recurrents, frontieres heritees de la colonisation</li>'
                    + '<li><strong>Integration regionale</strong> : Union Africaine (2002), CEDEAO (Afrique de l\'Ouest), SADC (Afrique australe), ZLECAf (zone de libre-echange continentale, 2021)</li>'
                    + '</ul>'
                    + '<h3>Developpement durable et perspectives</h3>'
                    + '<ul>'
                    + '<li><strong>Defis sanitaires</strong> : VIH/SIDA, paludisme, Ebola, acces inegal aux soins, amelioration progressive de l\'esperance de vie</li>'
                    + '<li><strong>Education</strong> : progres de la scolarisation mais persistance de l\'analphabetisme, inegalites filles/garcons dans certaines regions</li>'
                    + '<li><strong>Developpement durable</strong> : deforestation, desertification (Sahel), grands projets (Grande Muraille Verte), energies renouvelables, adaptation au changement climatique</li>'
                    + '<li><strong>Perspectives</strong> : dividende demographique, essor du numerique (M-Pesa, start-ups), croissance economique (5-6% dans certains pays), investissements etrangers (Chine, UE)</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'Quelle est la population de l\'Afrique en 2023 ?', answer: 'Environ 1,4 milliard d\'habitants, soit ~18% de la population mondiale. Les projections prevoient 2,5 milliards en 2050. L\'Afrique connait la croissance demographique la plus rapide au monde.' },
                    { question: 'Qu\'est-ce que la transition demographique ?', answer: 'Passage d\'un regime demographique ancien (forte natalite, forte mortalite) à un regime moderne (faible natalite, faible mortalite). En Afrique, la mortalite baisse mais la natalite reste elevee.' },
                    { question: 'Quelles sont les plus grandes villes d\'Afrique ?', answer: 'Lagos (Nigeria, ~16 millions), Le Caire (Egypte, ~21 millions avec l\'agglomeration), Kinshasa (RDC, ~17 millions). Ces megapoles connaissent une croissance urbaine rapide.' },
                    { question: 'Qu\'est-ce que la malediction des ressources ?', answer: 'Paradoxe selon lequel les pays riches en ressources naturelles (petrole, minerais) sont souvent touches par la corruption, les conflits armes et le sous-developpement (ex : RDC, Nigeria).' },
                    { question: 'Qu\'est-ce que l\'Union Africaine ?', answer: 'Organisation continentale créée en 2002 (successeur de l\'OUA, 1963) regroupant 55 Etats africains. Elle vise a promouvoir la paix, l\'integration economique et la cooperation politique.' },
                    { question: 'Qu\'est-ce que la ZLECAf ?', answer: 'La Zone de Libre-Echange Continentale Africaine, entree en vigueur en 2021. Elle vise a creer un marche unique africain de 1,3 milliard de consommateurs pour stimuler le commerce intra-africain.' },
                    { question: 'Quels sont les principaux conflits en Afrique ?', answer: 'Conflits au Sahel (terrorisme, Boko Haram, groupes djihadistes), guerre civile en RDC, instabilite au Soudan, en Somalie, en Ethiopie (Tigre). Causes : frontieres coloniales, rivalites ethniques, ressources.' },
                    { question: 'Qu\'est-ce que la Grande Muraille Verte ?', answer: 'Projet panafricain visant a planter une bande de vegetation de 8000 km de long (du Senegal a Djibouti) pour lutter contre la desertification au Sahel et restaurer 100 millions d\'hectares de terres.' },
                    { question: 'Qu\'est-ce que le dividende demographique ?', answer: 'Potentiel de croissance economique lie à la jeunesse de la population africaine : si l\'education et l\'emploi suivent, cette jeunesse peut devenir un moteur de developpement.' },
                    { question: 'Quel role joue la Chine en Afrique ?', answer: 'La Chine est le premier partenaire commercial de l\'Afrique. Elle investit massivement dans les infrastructures (routes, ports, chemins de fer), en echange de l\'acces aux ressources naturelles. Certains denoncent une nouvelle forme de dependance.' },
                    { question: 'Qu\'est-ce que M-Pesa ?', answer: 'Service de paiement mobile ne au Kenya en 2007. Il illustre le "leapfrog" africain : l\'Afrique saute l\'etape de la banque traditionnelle pour passer directement au paiement numerique par telephone.' },
                    { question: 'Qu\'est-ce que la CEDEAO ?', answer: 'La Communaute Economique des Etats de l\'Afrique de l\'Ouest, créée en 1975. Elle regroupe 15 pays et vise l\'integration economique et la stabilite politique en Afrique de l\'Ouest.' },
                    { question: 'Quels defis sanitaires l\'Afrique affronte-t-elle ?', answer: 'Le VIH/SIDA (25 millions de personnes vivant avec le VIH), le paludisme (90% des deces mondiaux), Ebola, l\'acces inegal aux soins. L\'esperance de vie progresse mais reste inferieure à la moyenne mondiale.' },
                    { question: 'Qu\'est-ce que la desertification au Sahel ?', answer: 'Degradation des terres dans la zone sahelienne (sud du Sahara) due au changement climatique, au surpaturage et à la deforestation. Elle menace la sécurité alimentaire de millions de personnes.' },
                    { question: 'Pourquoi parle-t-on de "l\'Afrique, continent d\'avenir" ?', answer: 'Grace a sa jeunesse (age median ~19 ans), ses ressources naturelles, sa croissance economique, l\'essor du numerique et de la ZLECAf, l\'Afrique dispose d\'un potentiel de developpement considerable pour le XXIe siècle.' }
                ],
                quiz: [
                    { question: 'La population africaine en 2023 est d\'environ :', options: ['800 millions', '1,1 milliard', '1,4 milliard', '2 milliards'], correctIndex: 2, explanation: 'L\'Afrique compte environ 1,4 milliard d\'habitants en 2023, avec une projection de 2,5 milliards en 2050.' },
                    { question: 'L\'age median en Afrique est d\'environ :', options: ['15 ans', '19 ans', '25 ans', '30 ans'], correctIndex: 1, explanation: 'L\'age median en Afrique est d\'environ 19 ans, ce qui en fait le continent le plus jeune du monde.' },
                    { question: 'L\'Union Africaine est créée en :', options: ['1963', '1991', '2002', '2010'], correctIndex: 2, explanation: 'L\'Union Africaine est fondee en 2002, remplacant l\'Organisation de l\'Unite Africaine (OUA, 1963).' },
                    { question: 'La ZLECAf est :', options: ['Une zone militaire', 'Une zone de libre-echange continentale', 'Une zone protegee ecologique', 'Un accord petrolier'], correctIndex: 1, explanation: 'La Zone de Libre-Echange Continentale Africaine vise a creer un marche unique africain pour stimuler le commerce intra-africain.' },
                    { question: 'La "malediction des ressources" désigné :', options: ['Le manque de ressources naturelles', 'Le paradoxe richesse naturelle / sous-developpement', 'L\'epuisement des mines', 'La surexploitation agricole'], correctIndex: 1, explanation: 'La malediction des ressources est le paradoxe selon lequel l\'abondance de ressources naturelles engendre souvent corruption, conflits et mauvaise gouvernance.' },
                    { question: 'La Grande Muraille Verte vise a lutter contre :', options: ['Le paludisme', 'La desertification au Sahel', 'L\'urbanisation', 'Les conflits armes'], correctIndex: 1, explanation: 'La Grande Muraille Verte est un projet de reforestation de 8000 km pour freiner la desertification au Sahel.' },
                    { question: 'M-Pesa est ne dans quel pays ?', options: ['Nigeria', 'Afrique du Sud', 'Kenya', 'Senegal'], correctIndex: 2, explanation: 'M-Pesa, service de paiement mobile, est lance au Kenya en 2007 par Safaricom, revolutionnant l\'acces aux services financiers.' },
                    { question: 'Le premier partenaire commercial de l\'Afrique est :', options: ['Les Etats-Unis', 'L\'Union Europeenne', 'La Chine', 'L\'Inde'], correctIndex: 2, explanation: 'La Chine est le premier partenaire commercial de l\'Afrique depuis 2009, avec des echanges depassant 250 milliards de dollars par an.' },
                    { question: 'La CEDEAO regroupe des pays de :', options: ['L\'Afrique du Nord', 'L\'Afrique de l\'Ouest', 'L\'Afrique de l\'Est', 'L\'Afrique australe'], correctIndex: 1, explanation: 'La CEDEAO regroupe 15 pays d\'Afrique de l\'Ouest (Nigeria, Senegal, Cote d\'Ivoire, Ghana, etc.).' },
                    { question: 'Le taux d\'urbanisation en Afrique est d\'environ :', options: ['25%', '43%', '60%', '75%'], correctIndex: 1, explanation: 'L\'Afrique à un taux d\'urbanisation d\'environ 43% en hausse rapide, avec une croissance urbaine parmi les plus fortes au monde.' }
                ]
            }
        ]
    });
})();
