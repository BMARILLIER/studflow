// espagnol.js — Programme Espagnol Lycee (Seconde → Terminale)
// Format pedagogique adapte dys/TSA : phrases courtes, exemples concrets, mots difficiles expliques
(function() {
    if (!window.StudFlow || !window.StudFlow.subjects) return;

    window.StudFlow.subjects.register({
        id: 'espagnol',
        name: 'Espagnol',
        icon: '\uD83C\uDDEA\uD83C\uDDF8',
        color: 'peach',
        sections: [

            // ================================================================
            // SECTION 1 : CONJUGAISON — Les temps essentiels
            // ================================================================
            {
                id: 'conjugaison',
                title: 'Conjugaison : les temps essentiels',
                icon: '\uD83D\uDD52',
                content: '<h3>Les temps a connaitre pour le Bac</h3>'
                    + '<ul>'
                    + '<li><strong>Presente</strong> : actions habituelles ou en cours</li>'
                    + '<li><strong>Preterito indefinido</strong> : action terminee dans le passe (= passe simple)</li>'
                    + '<li><strong>Preterito imperfecto</strong> : description dans le passe, habitude passee (= imparfait)</li>'
                    + '<li><strong>Futuro simple</strong> : ce qui va se passer</li>'
                    + '<li><strong>Condicional</strong> : hypothese, politesse</li>'
                    + '<li><strong>Subjuntivo presente</strong> : souhait, doute, sentiment</li>'
                    + '<li><strong>Imperativo</strong> : donner un ordre</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'Comment conjuguer au present (presente) ?', answer: 'C\'est le temps pour les actions HABITUELLES ou EN COURS. Verbes en -AR : o, as, a, amos, ais, an. Verbes en -ER : o, es, e, emos, eis, en. Verbes en -IR : o, es, e, imos, is, en. Exemple : "Yo hablo espanol" = je parle espagnol. En gros : c\'est comme en francais, le temps le plus utilise. Mots difficiles : "presente de indicativo" = le present de l\'indicatif (le temps normal, pas le subjonctif).' },
                    { question: 'C\'est quoi le preterito indefinido ?', answer: 'C\'est le PASSE SIMPLE espagnol. Pour les actions TERMINEES dans le passe. Verbes en -AR : e, aste, o, amos, asteis, aron. Verbes en -ER/-IR : i, iste, io, imos, isteis, ieron. Exemple : "Ayer comi una pizza" = hier j\'ai mange une pizza. En gros : action finie, datee, terminee. Piege : beaucoup de verbes IRREGULIERS (tuve, hice, fui, dije, puse). Il faut les apprendre par coeur.' },
                    { question: 'C\'est quoi le preterito imperfecto ?', answer: 'C\'est l\'IMPARFAIT. Pour les descriptions dans le passe et les habitudes passees. Verbes en -AR : aba, abas, aba, abamos, abais, aban. Verbes en -ER/-IR : ia, ias, ia, iamos, iais, ian. Exemple : "Cuando era nino, jugaba en el parque" = quand j\'etais petit, je jouais au parc. En gros : c\'etait comme ca AVANT, regulierement. Seulement 3 irreguliers : ser (era), ir (iba), ver (veia).' },
                    { question: 'Indefinido vs imperfecto ?', answer: 'INDEFINIDO = action PONCTUELLE et TERMINEE. "Ayer fui al cine" = hier je suis alle au cinema (une fois, c\'est fini). IMPERFECTO = action HABITUELLE ou DESCRIPTION. "Cuando era joven, iba al cine todos los sabados" = quand j\'etais jeune, j\'allais au cinema tous les samedis. En gros : indefinido = evenement precis. Imperfecto = decor, habitude, description. Piege Bac : c\'est LA difficulte numero 1 en espagnol.' },
                    { question: 'Comment conjuguer au futur ?', answer: 'SUPER FACILE. On prend l\'INFINITIF ENTIER et on ajoute : e, as, a, emos, eis, an. Ca marche pour TOUS les verbes (-AR, -ER, -IR). Exemple : "Manana estudiare" = demain j\'etudierai. Irreguliers a connaitre : tendre (tener), sabre (saber), podre (poder), hare (hacer), dire (decir), querre (querer). En gros : infinitif + terminaison. Le temps le plus regulier.' },
                    { question: 'C\'est quoi le conditionnel espagnol ?', answer: 'C\'est comme le futur mais avec les terminaisons de l\'imparfait : ia, ias, ia, iamos, iais, ian. Memes irreguliers que le futur. Exemple : "Me gustaria viajar" = j\'aimerais voyager. On l\'utilise pour : la politesse, les hypotheses, les souhaits. En gros : infinitif + ia/ias/ia... = conditionnel. Mots difficiles : "condicional" = ce qui arriverait SI une condition etait remplie.' },
                    { question: 'C\'est quoi le subjonctif present ?', answer: 'C\'est le temps du DOUTE, du SOUHAIT et des SENTIMENTS. On l\'utilise après : querer que, esperar que, es necesario que, no creo que. Formation : on prend la 1ere personne du present, on enleve le -o, et on met les terminaisons INVERSEES (-AR → e, es, e... / -ER/-IR → a, as, a...). Exemple : "Quiero que vengas" = je veux que tu viennes. En gros : subjonctif = le monde du "je voudrais que..." Piege : ca n\'existe presque pas en francais oral, mais en espagnol c\'est PARTOUT.' },
                    { question: 'Comment former l\'imperatif ?', answer: 'Pour donner un ORDRE. TU affirmatif = 3eme personne du present (habla, come, escribe). USTED = subjonctif (hable, coma, escriba). TU negatif = no + subjonctif (no hables, no comas). Irreguliers courants : ven (venir), pon (poner), di (decir), haz (hacer), sal (salir), ten (tener), se (ser), ve (ir). En gros : ordre positif = facile. Ordre negatif = subjonctif. Piege : les pronoms se collent A LA FIN a l\'affirmatif (dimelo = dis-le-moi).' }
                ],
                quiz: [
                    { question: '"Ayer fui al cine" est au :', options: ['Presente', 'Imperfecto', 'Indefinido', 'Futuro'], correctIndex: 2, explanation: 'C\'est le preterito indefinido : action ponctuelle et terminee dans le passe (ayer = hier).' },
                    { question: '"Cuando era nino, jugaba mucho" est au :', options: ['Indefinido', 'Imperfecto', 'Futuro', 'Subjuntivo'], correctIndex: 1, explanation: 'C\'est l\'imparfait : habitude passee + description (cuando era nino = quand j\'etais enfant).' },
                    { question: '"Quiero que vengas" contient du :', options: ['Futuro', 'Condicional', 'Subjuntivo', 'Imperativo'], correctIndex: 2, explanation: 'Apres "quiero que" on utilise le subjonctif. "Vengas" est le subjonctif present de "venir".' },
                    { question: 'Le futur espagnol se forme avec :', options: ['Le radical + terminaison', 'L\'infinitif entier + terminaison', 'L\'imparfait + une lettre', 'Le participe passe'], correctIndex: 1, explanation: 'En espagnol, le futur = infinitif complet + e/as/a/emos/eis/an. C\'est le temps le plus regulier.' }
                ]
            },

            // ================================================================
            // SECTION 2 : GRAMMAIRE — Les pieges essentiels
            // ================================================================
            {
                id: 'grammaire',
                title: 'Grammaire : les pieges du Bac',
                icon: '\u26A0\uFE0F',
                content: '<h3>Les erreurs les plus frequentes des élèves francais</h3>'
                    + '<ul>'
                    + '<li><strong>SER vs ESTAR</strong> : le piege numero 1</li>'
                    + '<li><strong>POR vs PARA</strong> : le piege numero 2</li>'
                    + '<li><strong>Les pronoms</strong> : le/la/lo/les + me/te/se/nos/os</li>'
                    + '<li><strong>Le genre</strong> : certains mots changent de genre par rapport au francais</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'SER vs ESTAR — comment choisir ?', answer: 'SER = ce qui est PERMANENT, ce qui DEFINIT. "Soy frances" = je suis francais (ca ne change pas). "Es alto" = il est grand (trait permanent). ESTAR = ce qui est TEMPORAIRE, un ETAT qui change. "Estoy cansado" = je suis fatigue (ca va passer). "Esta enfermo" = il est malade (ca va guerir). En gros : SER = identité. ESTAR = etat. Piege : "estar muerto" (etre mort) utilise ESTAR car c\'est un etat (meme si ca ne change plus !). ESTAR + lieu : "Estoy en Madrid" (ou je suis).' },
                    { question: 'POR vs PARA — comment choisir ?', answer: 'POR = la CAUSE, le MOYEN, le PASSAGE. "Gracias por tu ayuda" = merci POUR (a cause de) ton aide. "Paseo por la calle" = je me promene PAR la rue. PARA = le BUT, la DESTINATION, le DELAI. "Estudio para aprobar" = j\'etudie POUR (dans le but de) reussir. "Es para ti" = c\'est pour toi (destination). En gros : POR = pourquoi (cause). PARA = pour quoi faire (but). Piege Bac : c\'est LE piege numero 2 après ser/estar.' },
                    { question: 'C\'est quoi la diphtongue ?', answer: 'Certains verbes changent leur voyelle quand elle est ACCENTUEE. E → IE : querer → quiero, pensar → pienso. O → UE : poder → puedo, dormir → duermo. U → UE : jugar → juego. Ca arrive aux personnes 1, 2, 3 et 6 (pas nous et vous). En gros : la voyelle du milieu "eclate" en deux quand elle est accentuee. Piege : ca n\'arrive PAS a nosotros/vosotros. Mots difficiles : "diphtongue" = une voyelle qui se transforme en deux voyelles.' },
                    { question: 'C\'est quoi GUSTAR et comment ca marche ?', answer: 'GUSTAR = aimer quelque chose. MAIS la construction est INVERSEE par rapport au francais. "Me gusta el chocolate" = le chocolat ME plait (mot a mot). Le sujet c\'est la CHOSE aimee, pas la personne. Pluriel : "Me gustan los gatos" = les chats me plaisent. Autres verbes pareils : encantar (adorer), molestar (deranger), interesar (intéresser), parecer (sembler). En gros : me gusta = ca me plait. Me gustan = ils me plaisent. La chose aimee est le SUJET.' },
                    { question: 'Comment placer les pronoms ?', answer: 'AVANT le verbe conjugue : "Lo veo" = je le vois. "Te quiero" = je t\'aime. A LA FIN de l\'infinitif, du gerondif ou de l\'imperatif affirmatif : "Quiero verlo" = je veux le voir. "Estoy haciendolo" = je suis en train de le faire. "Dimelo" = dis-le-moi. En gros : verbe conjugue → pronom DEVANT. Infinitif/gerondif/imperatif → pronom COLLE derriere. Piege Bac : ne JAMAIS mettre le pronom entre deux verbes.' },
                    { question: 'C\'est quoi le "a" personnel ?', answer: 'En espagnol, quand le COD (complement d\'objet direct) est une PERSONNE, on met "a" devant. "Veo A mi madre" = je vois ma mere. "Busco A mi hermano" = je cherche mon frere. Mais PAS pour les choses : "Veo la pelicula" (pas de "a"). En gros : COD = personne → on ajoute "a". COD = chose → rien. Ca n\'existe PAS en francais. Mots difficiles : "a personal" = le "a" qu\'on met devant les personnes. "COD" = complement d\'objet direct (la chose/personne qui subit l\'action).' },
                    { question: 'Mots qui changent de genre entre francais et espagnol ?', answer: 'Pieges courants : EL problema (masculin, pas "la"). EL mapa (masculin). LA leche (feminin). EL color (masculin). LA sangre (le sang, feminin). EL arbol (l\'arbre, masculin). Regle : les mots en -MA d\'origine grecque sont souvent MASCULINS (el tema, el sistema, el programa, el problema). En gros : ne PAS supposer que le genre est le même qu\'en francais.' }
                ],
                quiz: [
                    { question: '"Soy estudiante" utilise SER car :', options: ['C\'est un etat temporaire', 'C\'est une identité permanente', 'C\'est un lieu', 'C\'est un sentiment'], correctIndex: 1, explanation: 'Etre etudiant definit une identité. On utilise SER pour ce qui est permanent ou qui definit.' },
                    { question: '"Estudio para aprobar" — PARA exprime :', options: ['La cause', 'Le but', 'Le moyen', 'Le lieu'], correctIndex: 1, explanation: 'PARA exprime le BUT : j\'etudie POUR (dans le but de) reussir.' },
                    { question: '"Me gusta el futbol" — le sujet grammatical est :', options: ['Me (moi)', 'El futbol (le foot)', 'Gusta (plaire)', 'Il n\'y a pas de sujet'], correctIndex: 1, explanation: 'Avec gustar, le sujet est la CHOSE aimee. "El futbol me gusta" = le foot me plait.' },
                    { question: '"Veo a mi hermano" — pourquoi "a" ?', options: ['Parce que c\'est un lieu', 'Parce que le COD est une personne', 'Parce que c\'est un verbe irregulier', 'C\'est une erreur'], correctIndex: 1, explanation: 'En espagnol, quand le COD est une personne, on ajoute "a" devant (a personal).' }
                ]
            },

            // ================================================================
            // SECTION 3 : VOCABULAIRE — Themes du programme
            // ================================================================
            {
                id: 'vocabulario',
                title: 'Vocabulaire : themes du Bac',
                icon: '\uD83D\uDCDA',
                content: '<h3>Les axes du programme : 8 themes</h3>'
                    + '<ul>'
                    + '<li>Identidades e intercambios (identites et echanges)</li>'
                    + '<li>Espacio privado y espacio publico (espace prive et public)</li>'
                    + '<li>Arte y poder (art et pouvoir)</li>'
                    + '<li>Ciudadania y mundos virtuales (citoyennete et mondes virtuels)</li>'
                    + '<li>Ficciones y realidades (fictions et realites)</li>'
                    + '<li>Innovaciones cientificas y responsabilidad (innovations et responsabilite)</li>'
                    + '<li>Diversidad e inclusion (diversité et inclusion)</li>'
                    + '<li>Territorio y memoria (territoire et memoire)</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'Vocabulaire : la famille et les relations', answer: 'La familia = la famille. Los padres = les parents. Los hermanos = les freres et soeurs. El marido / la mujer = le mari / la femme. Los hijos = les enfants (fils et filles). Los abuelos = les grands-parents. Convivir = vivre ensemble. La pareja = le couple. Llevarse bien/mal = bien/mal s\'entendre. En gros : la famille c\'est LE theme de base en espagnol.' },
                    { question: 'Vocabulaire : la société et les inegalites', answer: 'La desigualdad = l\'inégalité. La pobreza = la pauvreté. La riqueza = la richesse. Los derechos humanos = les droits de l\'homme. La discriminacion = la discrimination. El paro / el desempleo = le chomage. La igualdad de genero = l\'égalité des sexes. Luchar por = lutter pour. Reivindicar = revendiquer. En gros : vocabulaire essentiel pour les sujets de société au Bac.' },
                    { question: 'Vocabulaire : l\'immigration et les frontieres', answer: 'La inmigracion = l\'immigration. El inmigrante = l\'immigre. La frontera = la frontiere. Cruzar la frontera = traverser la frontiere. La patera = embarcation de fortune. Arriesgar la vida = risquer sa vie. El sueno americano / europeo = le reve americain/europeen. La integracion = l\'integration. El exilio = l\'exil. En gros : theme TRES frequent au Bac, surtout lie a l\'Espagne et l\'Amerique latine.' },
                    { question: 'Vocabulaire : l\'environnement', answer: 'El medio ambiente = l\'environnement. El cambio climatico = le changement climatique. La contaminacion = la pollution. Reciclar = recycler. Las energias renovables = les energies renouvelables. La deforestacion = la deforestation. Proteger el planeta = proteger la planete. El desarrollo sostenible = le developpement durable. En gros : vocabulaire ecologique indispensable pour le Bac.' },
                    { question: 'Vocabulaire : les nouvelles technologies', answer: 'Las redes sociales = les reseaux sociaux. El movil / el telefono = le portable. Navegar por Internet = naviguer sur Internet. La pantalla = l\'ecran. La inteligencia artificial = l\'intelligence artificielle. El ciberacoso = le cyberharcelement. Estar conectado = etre connecte. La adiccion = l\'addiction. En gros : theme moderne très present au Bac. Mots difficiles : "ciberacoso" = harcelement en ligne.' },
                    { question: 'Vocabulaire : la memoire et l\'histoire', answer: 'La guerra civil = la guerre civile (Espagne, 1936-1939). La dictadura = la dictature (Franco, 1939-1975). La democracia = la democratie. La memoria historica = la memoire historique. Las victimas = les victimes. El exilio = l\'exil. La transicion = la transition democratique (1975-1982). Recordar = se souvenir. Olvidar = oublier. En gros : la guerre civile et la dictature de Franco sont DES themes majeurs au Bac espagnol.' },
                    { question: 'Vocabulaire : l\'art et la culture hispanique', answer: 'El pintor = le peintre. La obra = l\'oeuvre. El cuadro = le tableau. La exposicion = l\'exposition. El cine = le cinema. El escritor = l\'ecrivain. La novela = le roman. El compromiso = l\'engagement. Denunciar = denoncer. Artistes a connaitre : Picasso (Guernica), Frida Kahlo, Garcia Lorca, Almodovar. En gros : art + engagement = un axe fort du programme.' },
                    { question: 'Connecteurs logiques essentiels', answer: 'AJOUTER : ademas (de plus), tambien (aussi). OPPOSER : sin embargo (cependant), pero (mais), aunque (bien que). CAUSER : porque (parce que), ya que (puisque). CONCLURE : en conclusion, por lo tanto (par consequent), en resumen (en resume). ORDONNER : primero (d\'abord), luego (ensuite), por ultimo (enfin). En gros : ces mots sont OBLIGATOIRES dans toute expression ecrite au Bac. Apprenez-les par coeur.' }
                ],
                quiz: [
                    { question: '"El paro" signifie :', options: ['La paix', 'Le chomage', 'La paresse', 'Le parc'], correctIndex: 1, explanation: 'El paro = le chomage. El desempleo est un synonyme. Mot essentiel pour les sujets de société.' },
                    { question: '"Sin embargo" signifie :', options: ['Sans problème', 'Cependant', 'De plus', 'Parfois'], correctIndex: 1, explanation: 'Sin embargo = cependant, neanmoins. C\'est LE connecteur d\'opposition a connaitre.' },
                    { question: 'La guerre civile espagnole a eu lieu en :', options: ['1914-1918', '1936-1939', '1939-1945', '1975-1982'], correctIndex: 1, explanation: 'La guerre civile espagnole (1936-1939) oppose les republicains aux nationalistes de Franco.' },
                    { question: '"Las redes sociales" signifie :', options: ['Les filets de peche', 'Les reseaux sociaux', 'Les routes sociales', 'Les règles sociales'], correctIndex: 1, explanation: 'Las redes sociales = les reseaux sociaux (red = reseau, filet).' }
                ]
            },

            // ================================================================
            // SECTION 4 : CIVILISATION — Espagne et Amerique latine
            // ================================================================
            {
                id: 'civilizacion',
                title: 'Civilisation hispanique',
                icon: '\uD83C\uDF0E',
                content: '<h3>Reperes essentiels pour le Bac</h3>'
                    + '<ul>'
                    + '<li><strong>Espagne</strong> : guerre civile (1936-39), dictature de Franco (1939-75), transition democratique, monarchie parlementaire</li>'
                    + '<li><strong>Amerique latine</strong> : colonisation, independances (XIXe), dictatures (XXe), democratisation</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'C\'est quoi la guerre civile espagnole ?', answer: 'Guerre entre 1936 et 1939. D\'un cote : les REPUBLICAINS (gauche, elus democratiquement). De l\'autre : les NATIONALISTES (droite, militaires, menes par Franco). Franco gagne avec l\'aide d\'Hitler et Mussolini. Resultat : dictature de Franco pendant 36 ans (1939-1975). Environ 500 000 morts. En gros : une guerre entre la gauche et la droite, gagnee par la droite militaire. Mots difficiles : "republicains" = ceux qui defendaient la Republique (democratie). "Nationalistes" = ceux qui voulaient un pouvoir autoritaire.' },
                    { question: 'C\'est quoi la dictature de Franco ?', answer: 'Franco dirige l\'Espagne de 1939 a 1975 (sa mort). Regime AUTORITAIRE : pas de partis politiques, pas de liberté d\'expression, censure, repression. L\'Eglise catholique a beaucoup de pouvoir. Les langues regionales (catalan, basque) sont INTERDITES. En gros : 36 ans sans liberté. Mots difficiles : "caudillo" = le titre que Franco se donnait (= chef supreme). "Represion" = violence de l\'Etat contre ses propres citoyens.' },
                    { question: 'C\'est quoi la Transition democratique ?', answer: 'Apres la mort de Franco (1975), l\'Espagne passe de la dictature à la democratie SANS violence. Le roi Juan Carlos I joue un role cle. Constitution de 1978. Premieres elections libres. C\'est un MODELE pour le monde entier. En gros : l\'Espagne reussit a devenir une democratie en douceur. Mots difficiles : "transicion" = passage d\'un système à un autre. "Constitucion" = le texte qui definit les règles du pays.' },
                    { question: 'C\'est quoi Guernica de Picasso ?', answer: 'Un TABLEAU de Picasso peint en 1937. Il représenté le bombardement de la ville de Guernica (Pays basque) par les avions nazis allies de Franco. C\'est un cri contre la GUERRE et la violence. Noir, blanc et gris. Des corps dechires, un taureau, un cheval, une ampoule. En gros : Guernica = l\'oeuvre anti-guerre la plus celebre du XXe siècle. Elle est au programme parce qu\'elle mélange ART et ENGAGEMENT POLITIQUE.' },
                    { question: 'C\'est quoi la colonisation de l\'Amerique latine ?', answer: 'En 1492, Christophe Colomb arrive en Amerique. L\'Espagne colonise presque toute l\'Amerique du Sud et centrale. Les conquistadors (Cortes, Pizarro) detruisent les civilisations indigenes (Azteques, Incas, Mayas). Les langues, les religions et les cultures locales sont ecrasees. En gros : l\'Espagne conquiert un continent et impose sa langue, sa religion et sa culture. Mots difficiles : "conquistador" = conquerant espagnol. "Colonizacion" = prendre le controle d\'un territoire et de ses habitants.' },
                    { question: 'C\'est quoi les dictatures en Amerique latine ?', answer: 'Au XXe siècle, de nombreux pays d\'Amerique latine ont connu des DICTATURES militaires : Argentine (1976-1983 : les "desaparecidos" = des milliers de personnes disparues). Chili (Pinochet, 1973-1990, renverse le president elu Allende). Cuba (Castro, 1959-2008). En gros : des militaires prennent le pouvoir par la force et repriment la population. Mots difficiles : "desaparecidos" = les disparus — des gens arretes par l\'Etat et jamais retrouves. "Golpe de Estado" = coup d\'Etat.' },
                    { question: 'C\'est quoi le "sueno americano" pour les Latino-americains ?', answer: 'Le reve de partir aux ETATS-UNIS pour une vie meilleure. Des millions de Latino-americains emigrent vers le nord (Mexique → USA). Problemes : la frontiere est dangereuse, le mur de Trump, la discrimination, la separation des familles, les passeurs (coyotes). En gros : le reve americain est souvent un cauchemar pour les immigres. Theme TRES frequent au Bac. Mots difficiles : "coyote" = passeur qui fait traverser la frontiere illegalement (et qui est très cher).' }
                ],
                quiz: [
                    { question: 'Franco a dirige l\'Espagne de :', options: ['1920 a 1950', '1939 a 1975', '1975 a 2000', '1898 a 1936'], correctIndex: 1, explanation: 'Francisco Franco a dirige l\'Espagne en dictateur de 1939 (fin de la guerre civile) a 1975 (sa mort).' },
                    { question: 'Guernica de Picasso denonce :', options: ['La beauté de la nature', 'Le bombardement d\'une ville pendant la guerre civile', 'La Revolution francaise', 'La colonisation'], correctIndex: 1, explanation: 'Guernica représenté le bombardement de la ville basque de Guernica par les avions nazis allies de Franco en 1937.' },
                    { question: 'La Transition democratique espagnole se passe :', options: ['En 1936', 'En 1939', 'Apres 1975', 'En 1992'], correctIndex: 2, explanation: 'Apres la mort de Franco en 1975, l\'Espagne passe progressivement à la democratie avec la Constitution de 1978.' },
                    { question: 'Les "desaparecidos" sont associes a :', options: ['La colonisation espagnole', 'La dictature argentine', 'La transition espagnole', 'Le cinema mexicain'], correctIndex: 1, explanation: 'Les desaparecidos sont les milliers de personnes disparues pendant la dictature militaire argentine (1976-1983).' }
                ]
            },

            // ================================================================
            // SECTION 5 : EXPRESSION ECRITE — Methode Bac
            // ================================================================
            {
                id: 'expression',
                title: 'Expression ecrite : methode Bac',
                icon: '\u270D\uFE0F',
                content: '<h3>Reussir l\'expression ecrite au Bac</h3>'
                    + '<ul>'
                    + '<li>Comprendre le sujet et reperer le theme/axe</li>'
                    + '<li>Organiser ses idees avec des connecteurs</li>'
                    + '<li>Utiliser du vocabulaire varie et precis</li>'
                    + '<li>Varier les temps verbaux</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'Comment structurer une expression ecrite ?', answer: 'INTRODUCTION : presenter le theme en 2-3 phrases. DEVELOPPEMENT : 2 ou 3 paragraphes avec des arguments + exemples. CONCLUSION : resumer + donner son avis. CONNECTEURS obligatoires entre chaque partie : primero, ademas, sin embargo, en conclusion. En gros : intro + 2-3 paragraphes + conclusion. Toujours utiliser des connecteurs.' },
                    { question: 'Comment donner son avis en espagnol ?', answer: 'En mi opinion = a mon avis. Pienso que = je pense que. Creo que = je crois que. Me parece que = il me semble que. Estoy de acuerdo con = je suis d\'accord avec. No estoy de acuerdo = je ne suis pas d\'accord. Desde mi punto de vista = de mon point de vue. En gros : apprends 4-5 expressions par coeur et utilise-les dans CHAQUE expression ecrite.' },
                    { question: 'Comment eviter les erreurs classiques au Bac ?', answer: '1) ACCENTS : ne jamais les oublier (ils changent le sens : el/el, si/si, como/como). 2) SER/ESTAR : verifier a chaque fois. 3) POR/PARA : verifier. 4) CONCORDANCE DES TEMPS : passe = passe partout. 5) Le "a" personnel devant les personnes. 6) Les FAUX AMIS : "realizar" = accomplir (PAS realiser). "Embarazada" = enceinte (PAS embarrassee). En gros : ces 6 pieges representent 80% des erreurs au Bac. Si tu les evites, ta note monte.' },
                    { question: 'Quels sont les faux amis les plus dangereux ?', answer: 'Constipado = enrhume (PAS constipe). Embarazada = enceinte (PAS embarrassee). Realizar = accomplir (PAS realiser). Actual = actuel (PAS reel). Sensible = sensible (PAREIL en fait, mais "sensato" = sense). Exito = succes (PAS sortie, sortie = salida). Largo = long (PAS large, large = ancho). En gros : les faux amis sont des mots qui RESSEMBLENT au francais mais qui veulent dire AUTRE CHOSE. Piege mortel au Bac.' }
                ],
                quiz: [
                    { question: '"Embarazada" signifie :', options: ['Embarrassee', 'Enceinte', 'Emballee', 'Embrassee'], correctIndex: 1, explanation: 'C\'est un faux ami classique. Embarazada = enceinte. Embarrassee = avergonzada.' },
                    { question: '"Sin embargo" est un connecteur de :', options: ['Addition', 'Cause', 'Opposition', 'Conclusion'], correctIndex: 2, explanation: 'Sin embargo = cependant, neanmoins. C\'est le connecteur d\'opposition le plus important.' },
                    { question: '"Exito" signifie :', options: ['Sortie', 'Succes', 'Exil', 'Exercice'], correctIndex: 1, explanation: 'Exito = succes. La sortie se dit "salida". Encore un faux ami redoutable.' }
                ]
            },

            // ================================================================
            // SECTION 6 : ORAL — Comprehension et expression
            // ================================================================
            {
                id: 'oral',
                title: 'L\'oral : comprehension et expression',
                icon: '\uD83C\uDF99\uFE0F',
                content: '<h3>Reussir les epreuves orales</h3>',
                flashcards: [
                    { question: 'Comment reussir la comprehension orale ?', answer: '1) PREMIERE ecoute : comprendre le THEME general (de quoi ca parle ?). 2) DEUXIEME ecoute : noter les DETAILS (noms, dates, chiffres, arguments). 3) TROISIEME ecoute : verifier et completer. Astuce : reperer les MOTS-CLES même si tu ne comprends pas tout. Ne PAS essayer de tout traduire mot a mot. En gros : theme general → details → verification. C\'est pas grave de ne pas tout comprendre. Mots difficiles : "comprension auditiva" = comprehension orale (ce que tu entends).' },
                    { question: 'Comment reussir l\'expression orale ?', answer: '1) Presenter le DOCUMENT en 2 phrases (type, theme, source). 2) DECRIRE ce que tu vois/lis. 3) ANALYSER : quel message ? Quel lien avec le programme ? 4) Donner ton AVIS personnel. 5) Utiliser des CONNECTEURS. Astuce : parle lentement et clairement. Mieux vaut dire peu et bien que beaucoup et mal. En gros : presenter → decrire → analyser → avis. Toujours connecter au programme (les axes).' },
                    { question: 'Phrases utiles pour l\'oral', answer: 'PRESENTER : "Este documento es un articulo / una foto / un cartel que trata de..." (ce document est un article/une photo/une affiche qui traite de...). DECRIRE : "En primer plano vemos..." (au premier plan on voit). "Al fondo..." (au fond). ANALYSER : "El autor quiere denunciar/mostrar..." (l\'auteur veut denoncer/montrer). AVIS : "En mi opinion..." "Estoy de acuerdo/en desacuerdo porque..." En gros : apprends ces phrases PAR COEUR. Elles marchent pour TOUS les documents.' }
                ],
                quiz: [
                    { question: '"Este documento trata de..." signifie :', options: ['Ce document traite de...', 'Ce document est faux', 'Ce document est traite', 'Ce document est long'], correctIndex: 0, explanation: '"Tratar de" = traiter de, parler de. C\'est LA phrase d\'introduction pour tout document a l\'oral.' },
                    { question: 'A l\'oral, il faut d\'abord :', options: ['Donner son avis', 'Presenter le document', 'Critiquer l\'auteur', 'Traduire le texte'], correctIndex: 1, explanation: 'Toujours commencer par presenter le document : type (article, photo, video), theme, source.' }
                ]
            },

            // ================================================================
            // SECTION 7 : LES AXES DU PROGRAMME — Relier chaque document
            // ================================================================
            {
                id: 'axes-programme',
                title: 'Les axes thematiques du programme',
                icon: '🧭',
                content: '<h3>8 axes = 8 grands themes du Bac</h3>'
                    + '<p>Chaque document que tu etudies au Bac doit etre relie a UN AXE. Connaitre les axes, c\'est savoir organiser tes connaissances.</p>',
                flashcards: [
                    { question: 'C\'est quoi les "axes" du programme de langues ?', answer: 'Le programme officiel (BO) organise les cours autour de 8 GRANDS THEMES appeles "axes thematiques". Chaque document (texte, video, image) que tu etudies en cours doit etre rattache a un axe. Au Bac, tu dois montrer que tu sais RELIER un document a un axe et EXPLIQUER pourquoi. En gros : les axes = les categories pour ranger les sujets. Tu dois savoir dans quel axe chaque document rentre.' },
                    { question: 'Axe 1 : Identidades e intercambios (Identites et echanges)', answer: 'DE QUOI CA PARLE : les identites (qui on est), les echanges entre cultures, l\'immigration, les diasporas, le multiculturalisme. EXEMPLES DE SUJETS : un immigre latino qui arrive aux USA et garde sa culture. Un jeune Espagnol qui part travailler a l\'etranger. Les fetes traditionnelles qui melangent plusieurs cultures. MOTS-CLES : identidad, intercambio, migracion, mestizaje (metissage), tradicion, integracion. En gros : tout ce qui touche a "qui je suis" et "comment je vis avec les autres".' },
                    { question: 'Axe 2 : Espacio privado y espacio publico (Espace prive et public)', answer: 'DE QUOI CA PARLE : la vie privee vs la vie publique, la famille, le role des femmes, les reseaux sociaux, l\'intimite. EXEMPLES DE SUJETS : les femmes qui luttent pour l\'egalite en Amerique latine. La vie de famille en Espagne (horaires, repas, cohabitation). Les reseaux sociaux qui effacent la frontiere prive/public. MOTS-CLES : privacidad, publico, familia, mujer, feminismo, redes sociales. En gros : ou s\'arrete le prive et ou commence le public ?' },
                    { question: 'Axe 3 : Arte y poder (Art et pouvoir)', answer: 'DE QUOI CA PARLE : l\'art comme outil de pouvoir OU de resistance. La propagande. L\'art engage. EXEMPLES DE SUJETS : Guernica de Picasso (art contre la guerre). Les murales mexicains de Diego Rivera (art social). Garcia Lorca, poete assassine par Franco. Le street art politique en Amerique latine. MOTS-CLES : arte, poder, compromiso (engagement), censurar, denunciar, propaganda. En gros : l\'art peut servir le pouvoir OU le combattre.' },
                    { question: 'Axe 4 : Ciudadania y mundos virtuales (Citoyennete et mondes virtuels)', answer: 'DE QUOI CA PARLE : les nouvelles technologies, les reseaux sociaux, le cyberharcelement, la democratie numerique, les fake news. EXEMPLES DE SUJETS : les mouvements sociaux nes sur Twitter (15-M en Espagne, 2011). Le cyberharcelement chez les jeunes. Les fake news et leur impact sur la democratie. L\'acces inegal a Internet en Amerique latine. MOTS-CLES : ciudadania, mundo virtual, ciberacoso, noticias falsas, democracia digital. En gros : comment le numerique change notre vie de citoyen.' },
                    { question: 'Axe 5 : Ficciones y realidades (Fictions et realites)', answer: 'DE QUOI CA PARLE : la litterature, le cinema, les mythes, la frontiere entre fiction et realite. EXEMPLES DE SUJETS : le realisme magique (Garcia Marquez, "Cien anos de soledad"). Les telenovelas et leur influence sur la societe. Don Quijote : quand la fiction depasse la realite. Le cinema de Guillermo del Toro (fantastique + histoire). MOTS-CLES : ficcion, realidad, mito, novela, cine, imaginario. En gros : comment les histoires inventees nous aident a comprendre le monde reel.' },
                    { question: 'Axe 6 : Innovaciones cientificas y responsabilidad', answer: 'DE QUOI CA PARLE : les progres scientifiques et leurs consequences ethiques. EXEMPLES DE SUJETS : l\'acces aux soins en Amerique latine (inegalites). Les energies renouvelables en Espagne (leader europeen du solaire). La deforestation en Amazonie (Bresil). L\'intelligence artificielle et l\'emploi. MOTS-CLES : innovacion, ciencia, responsabilidad, progreso, etica, medio ambiente. En gros : le progres est-il toujours un progres ? A quel prix ?' },
                    { question: 'Axe 7 : Diversidad e inclusion (Diversite et inclusion)', answer: 'DE QUOI CA PARLE : les minorites, les peuples indigenes, le handicap, les droits LGBTQ+, la lutte contre les discriminations. EXEMPLES DE SUJETS : les peuples indigenes d\'Amerique latine et leurs droits. La loi sur le mariage homosexuel en Espagne (2005, pionniere). L\'inclusion scolaire des enfants handicapes. La discrimination raciale en Amerique latine. MOTS-CLES : diversidad, inclusion, minoria, indigena, discriminacion, derechos. En gros : comment vivre ensemble avec nos differences.' },
                    { question: 'Axe 8 : Territorio y memoria (Territoire et memoire)', answer: 'DE QUOI CA PARLE : la memoire historique, les lieux de memoire, les frontieres, les conflits territoriaux. EXEMPLES DE SUJETS : la Ley de Memoria Historica en Espagne (2007 : reconnaitre les victimes de Franco). Les Madres de la Plaza de Mayo en Argentine (memoire des disparus). Le mur entre le Mexique et les USA. Gibraltar : conflit territorial entre Espagne et Royaume-Uni. MOTS-CLES : territorio, memoria, frontera, conflicto, victima, reconciliacion. En gros : comment un pays se souvient de son passe et definit son territoire.' },
                    { question: 'Comment relier un document a un axe au Bac ?', answer: 'Methode en 3 etapes :\n1) LIS le document et identifie le THEME principal (immigration ? Art ? Technologie ?).\n2) RELIE-LE a un axe : "Ce document s\'inscrit dans l\'axe... parce que...".\n3) COMPARE avec un autre document du même axe pour enrichir ton analyse.\n\nPhrase-type : "Este documento se relaciona con el eje [nom de l\'axe] porque trata de [theme]".\n\nEn gros : au Bac, TOUJOURS nommer l\'axe. Ca montre que tu connais le programme et que tu sais organiser tes idees.' }
                ],
                quiz: [
                    { question: 'Guernica de Picasso s\'inscrit dans l\'axe :', options: ['Identidades e intercambios', 'Arte y poder', 'Ficciones y realidades', 'Territorio y memoria'], correctIndex: 1, explanation: 'Guernica est une oeuvre d\'ART qui denonce le POUVOIR (bombardement, guerre civile). C\'est l\'exemple parfait de l\'axe "Arte y poder".' },
                    { question: 'L\'immigration latino-americaine aux USA s\'inscrit dans l\'axe :', options: ['Arte y poder', 'Ciudadania y mundos virtuales', 'Identidades e intercambios', 'Ficciones y realidades'], correctIndex: 2, explanation: 'L\'immigration touche aux IDENTITES (qui suis-je dans un nouveau pays ?) et aux ECHANGES entre cultures.' },
                    { question: 'Le cyberharcelement s\'inscrit dans l\'axe :', options: ['Espacio privado y publico', 'Ciudadania y mundos virtuales', 'Les deux sont possibles', 'Arte y poder'], correctIndex: 2, explanation: 'Le cyberharcelement touche a la citoyennete numerique ET a la frontiere prive/public. Les deux axes fonctionnent.' },
                    { question: 'Les Madres de la Plaza de Mayo s\'inscrivent dans l\'axe :', options: ['Arte y poder', 'Diversidad e inclusion', 'Territorio y memoria', 'Ficciones y realidades'], correctIndex: 2, explanation: 'Les Madres luttent pour la MEMOIRE des disparus (desaparecidos). C\'est l\'axe "Territorio y memoria".' },
                    { question: 'Combien d\'axes thematiques y a-t-il dans le programme ?', options: ['4', '6', '8', '10'], correctIndex: 2, explanation: '8 axes thematiques definis par le Bulletin Officiel pour les langues vivantes au lycee.' }
                ]
            },

            // ================================================================
            // SECTION 8 : LITTERATURE ET CINEMA HISPANIQUES
            // ================================================================
            {
                id: 'literatura-cine',
                title: 'Litterature et cinema hispaniques',
                icon: '🎬',
                content: '<h3>OEuvres de reference pour le Bac</h3>'
                    + '<p>Connaitre quelques oeuvres cles te permet d\'enrichir tes copies et tes oraux avec des exemples precis.</p>',
                flashcards: [
                    { question: 'Don Quijote de la Mancha (Cervantes, 1605)', answer: 'LE roman le plus celebre en espagnol. Don Quijote est un vieil homme qui a trop lu de romans de chevalerie. Il croit etre un chevalier et part combattre des moulins a vent qu\'il prend pour des geants. Son ecuyer Sancho Panza est terre-a-terre et realiste. THEME : la frontiere entre fiction et realite, la folie, l\'idealisme. AXE : Ficciones y realidades. En gros : Don Quijote = un reveur fou dans un monde reel. C\'est le texte fondateur de la litterature espagnole. Mots difficiles : "ecuyer" (escudero) = le serviteur d\'un chevalier.' },
                    { question: 'Cien anos de soledad (Garcia Marquez, 1967)', answer: 'Roman colombien. Raconte l\'histoire de la famille Buendia dans le village fictif de Macondo, sur CENT ANS. Style = REALISME MAGIQUE : des evenements surnaturels se melent a la vie quotidienne (une fille qui monte au ciel, une pluie qui dure 4 ans). THEME : la solitude, les cycles de l\'histoire, l\'Amerique latine. AXE : Ficciones y realidades. Prix Nobel de litterature 1982. En gros : le roman le plus important d\'Amerique latine. Mots difficiles : "realismo magico" = melange de reel et de fantastique, comme si c\'etait normal.' },
                    { question: 'La casa de Bernarda Alba (Garcia Lorca, 1936)', answer: 'Piece de theatre. Bernarda Alba enferme ses 5 filles dans la maison apres la mort de son mari. 8 ans de deuil, pas de sortie, pas d\'hommes. Les filles etouffent. Ca finit en tragedie. THEME : la repression des femmes, l\'autoritarisme, la liberte. AXE : Espacio privado y publico. Garcia Lorca a ete ASSASSINE par les franquistes la meme annee. En gros : une piece sur l\'enfermement des femmes par une mere tyrannique. Mots difficiles : "luto" = deuil (periode ou on pleure un mort).' },
                    { question: 'Como agua para chocolate (Laura Esquivel, 1989)', answer: 'Roman mexicain. Tita, la plus jeune fille, est INTERDITE de mariage par la tradition (elle doit s\'occuper de sa mere). Elle exprime ses emotions a travers la CUISINE : ses plats font pleurer, rire ou tomber amoureux ceux qui les mangent. THEME : les traditions, la condition des femmes, la nourriture comme langage. AXE : Espacio privado y publico / Identidades e intercambios. Adapte en film (1992). En gros : une femme qui se libere grace a la cuisine. Realisme magique mexicain.' },
                    { question: 'El laberinto del fauno (Guillermo del Toro, 2006)', answer: 'FILM espagnol/mexicain. Espagne, 1944, juste apres la guerre civile. Ofelia, une petite fille, decouvre un labyrinthe et un faune qui lui dit qu\'elle est une princesse. Elle doit reussir 3 epreuves. Pendant ce temps, son beau-pere est un CAPITAINE FRANQUISTE brutal. THEME : la fantaisie comme refuge contre la violence, la guerre civile, l\'innocence. AXE : Ficciones y realidades / Arte y poder. En gros : un film magnifique qui melange conte de fees et horreur de la dictature. Mots difficiles : "fauno" = creature mythologique mi-homme mi-bouc.' },
                    { question: 'Diarios de motocicleta (Walter Salles, 2004)', answer: 'FILM. Le jeune Ernesto "Che" Guevara fait un voyage en moto a travers l\'Amerique du Sud avec son ami Alberto. Il decouvre la pauvrete, l\'injustice et les inegalites du continent. Ce voyage le transforme en revolutionnaire. THEME : l\'identite, les inegalites sociales, la prise de conscience. AXE : Identidades e intercambios. Tire du journal de voyage du vrai Che Guevara. En gros : comment un voyage peut changer ta vision du monde.' },
                    { question: 'Volver (Pedro Almodovar, 2006)', answer: 'FILM espagnol. Raimunda (Penelope Cruz) vit a Madrid avec sa fille. Sa mere, qu\'elle croyait morte, reapparait. Le film parle de FEMMES fortes qui font face aux secrets de famille, a la violence et a la mort. THEME : la famille, les femmes, les secrets, la memoire. AXE : Espacio privado y publico. Almodovar = le realisateur espagnol le plus connu au monde. En gros : un film sur des femmes qui se battent et se soutiennent. Mots difficiles : "volver" = revenir, retourner.' },
                    { question: 'Quels auteurs/artistes citer au Bac ?', answer: 'LITTERATURE : Cervantes (Don Quijote), Garcia Marquez (Cien anos de soledad), Garcia Lorca (poesie + theatre), Isabel Allende (La casa de los espiritus), Pablo Neruda (poesie, Prix Nobel chilien).\n\nCINEMA : Almodovar (Volver, Todo sobre mi madre), Del Toro (El laberinto del fauno), Bunuel (surrealisme espagnol).\n\nART : Picasso (Guernica), Frida Kahlo (autoportraits, Mexique), Diego Rivera (muralisme).\n\nEn gros : retiens 3-4 noms avec UNE oeuvre chacun. Ca suffit pour enrichir tes copies.' }
                ],
                quiz: [
                    { question: 'Don Quijote combat :', options: ['Des dragons', 'Des moulins a vent', 'Des soldats', 'Des taureaux'], correctIndex: 1, explanation: 'Don Quijote prend les moulins a vent pour des geants et les attaque. C\'est la scene la plus celebre du roman.' },
                    { question: '"Cien anos de soledad" est du genre :', options: ['Policier', 'Science-fiction', 'Realisme magique', 'Autobiographie'], correctIndex: 2, explanation: 'Garcia Marquez est le maitre du realisme magique : des evenements surnaturels presentes comme normaux dans la vie quotidienne.' },
                    { question: 'Garcia Lorca a ete assassine par :', options: ['Les republicains', 'Les franquistes', 'Les anarchistes', 'Il est mort de maladie'], correctIndex: 1, explanation: 'Federico Garcia Lorca a ete assassine par les nationalistes (franquistes) en aout 1936, au debut de la guerre civile.' },
                    { question: '"El laberinto del fauno" se deroule pendant :', options: ['La guerre civile', 'La dictature de Franco (après la guerre)', 'La transition democratique', 'L\'epoque actuelle'], correctIndex: 1, explanation: 'Le film se passe en 1944, pendant la dictature franquiste, 5 ans apres la fin de la guerre civile.' },
                    { question: 'Almodovar est connu pour ses films sur :', options: ['La guerre', 'Les femmes et la famille', 'Le sport', 'La science'], correctIndex: 1, explanation: 'Pedro Almodovar est celebre pour ses films centres sur des personnages feminins forts et les relations familiales.' }
                ]
            },

            // ================================================================
            // SECTION 9 : ESPAGNE ET AMERIQUE LATINE AUJOURD'HUI
            // ================================================================
            {
                id: 'actualidad',
                title: 'Espagne et Amerique latine aujourd\'hui',
                icon: '📰',
                content: '<h3>Reperes contemporains pour le Bac</h3>'
                    + '<p>Connaitre l\'actualite du monde hispanique montre au correcteur que tu depasses le cours.</p>',
                flashcards: [
                    { question: 'L\'Espagne aujourd\'hui : ce qu\'il faut savoir', answer: 'REGIME : monarchie parlementaire. Roi : Felipe VI (depuis 2014). POLITIQUE : alternance gauche/droite (PSOE / PP). ECONOMIE : tourisme (1er secteur), agriculture, energies renouvelables (leader europeen du solaire). PROBLEMES : chomage des jeunes (~30%), crise du logement, question catalane. SOCIETE : mariage homosexuel legal depuis 2005, euthanasie legale depuis 2021. En gros : l\'Espagne est une democratie moderne avec des defis economiques et territoriaux.' },
                    { question: 'C\'est quoi la question catalane ?', answer: 'La CATALOGNE (Barcelona) est une region d\'Espagne avec sa propre langue (catalan) et une forte identite. En 2017, un referendum d\'independance est organise. Resultat : 90% de OUI, mais l\'Etat espagnol dit que c\'est ILLEGAL. Le president catalan (Puigdemont) fuit a l\'etranger. Des manifestations enormes. Aujourd\'hui : tensions apaisees mais pas resolues. En gros : une region qui veut etre independante, un Etat qui refuse. C\'est un sujet de debat parfait pour l\'axe "Territorio y memoria". Mots difficiles : "referendum" = vote ou le peuple decide directement. "Autonomia" = droit de se gouverner en partie soi-meme.' },
                    { question: 'Le Mexique aujourd\'hui : ce qu\'il faut savoir', answer: 'POPULATION : 130 millions (le plus grand pays hispanophone). ECONOMIE : industrie, petrole, agriculture, tourisme. PROBLEMES MAJEURS : narcotrafic (cartels tres puissants), violence, corruption, inegalites sociales enormes. EMIGRATION : des millions de Mexicains partent aux USA. CULTURE : tres riche (cinema, gastronomie classee UNESCO, fetes comme el Dia de los Muertos). En gros : un pays entre richesse culturelle et problemes de violence et corruption.' },
                    { question: 'L\'Argentine aujourd\'hui : ce qu\'il faut savoir', answer: 'CAPITALE : Buenos Aires. POPULATION : 46 millions. ECONOMIE : agriculture (soja, ble, viande), mais crises economiques repetees, inflation enorme. POLITIQUE : instabilite politique, election de Milei en 2023 (ultra-liberal). CULTURE : tango, football (Messi !), litterature (Borges, Cortazar). MEMOIRE : les Madres de la Plaza de Mayo continuent de marcher chaque jeudi pour les 30 000 desaparecidos de la dictature. En gros : un pays riche en culture mais en crise economique permanente.' },
                    { question: 'La Colombie aujourd\'hui : ce qu\'il faut savoir', answer: 'CAPITALE : Bogota. POPULATION : 52 millions. CONFLIT : 50 ans de guerre civile entre l\'Etat, les guerillas (FARC) et les paramilitaires. Accords de paix en 2016 (Prix Nobel de la paix pour le president Santos). PROBLEMES : narcotrafic, deplacements de population, inegalites. CULTURE : Garcia Marquez, Shakira, reggaeton. PROGRES : premier president de gauche elu en 2022 (Gustavo Petro). En gros : un pays qui sort d\'une longue guerre et essaie de construire la paix. Mots difficiles : "guerilla" = groupe arme qui se bat contre l\'Etat. "Acuerdos de paz" = accords de paix.' },
                    { question: 'Cuba aujourd\'hui : ce qu\'il faut savoir', answer: 'REGIME : communiste depuis la revolution de Fidel Castro (1959). Parti unique. ECONOMIE : tres pauvre, embargo americain depuis 1962. Les gens manquent de nourriture, de medicaments, d\'Internet. EDUCATION et SANTE : gratuits et de bonne qualite (paradoxe). EMIGRATION : beaucoup de Cubains fuient vers les USA (balseros = ceux qui partent en radeau). Fidel Castro est mort en 2016. En gros : un pays comuniste isole, pauvre mais eduque. Theme parfait pour debattre au Bac.' },
                    { question: 'Le Dia de los Muertos : c\'est quoi ?', answer: 'Fete MEXICAINE les 1er et 2 novembre. On CELEBRE les morts (on ne les pleure pas). Les familles construisent des AUTELS (ofrendas) avec des photos, de la nourriture, des fleurs orange (cempasuchil), des tetes de mort en sucre (calaveras). Inscrit au patrimoine de l\'UNESCO. CE N\'EST PAS Halloween (c\'est une tradition pre-hispanique, pas americaine). En gros : au Mexique, la mort est une FETE, pas quelque chose de triste. AXE : Identidades e intercambios / Diversidad e inclusion. Mots difficiles : "ofrenda" = autel decore pour un mort. "Calavera" = tete de mort.' },
                    { question: 'Les enjeux migratoires dans le monde hispanique', answer: 'MEXIQUE → USA : des millions de Mexicains et Centro-americains traversent la frontiere. Mur de Trump. Enfants separes de leurs parents. AFRIQUE → ESPAGNE : les pateras (embarcations de fortune) arrivent aux iles Canaries ou sur les cotes andalouses. Des centaines de morts chaque annee. VENEZUELA → Colombie/Chili : 7 millions de Venezueliens ont fui la crise economique et politique. En gros : l\'immigration est LE grand theme du monde hispanique. AXE : Identidades e intercambios / Territorio y memoria.' }
                ],
                quiz: [
                    { question: 'L\'Espagne est leader europeen dans :', options: ['L\'industrie automobile', 'Les energies renouvelables (solaire)', 'L\'industrie pharmaceutique', 'L\'agriculture bio'], correctIndex: 1, explanation: 'L\'Espagne est l\'un des premiers pays europeens pour l\'energie solaire grace a son ensoleillement.' },
                    { question: 'Le referendum catalan a eu lieu en :', options: ['2005', '2010', '2017', '2020'], correctIndex: 2, explanation: 'Le referendum d\'independance de la Catalogne, declare illegal par Madrid, a eu lieu le 1er octobre 2017.' },
                    { question: 'Les accords de paix en Colombie (FARC) datent de :', options: ['2000', '2010', '2016', '2020'], correctIndex: 2, explanation: 'Les accords de paix entre le gouvernement colombien et les FARC ont ete signes en 2016. Le president Santos a recu le Prix Nobel de la paix.' },
                    { question: 'Le Dia de los Muertos se fete :', options: ['Le 31 octobre', 'Les 1er et 2 novembre', 'Le 25 decembre', 'Le 5 mai'], correctIndex: 1, explanation: 'Le Dia de los Muertos se celebre les 1er et 2 novembre au Mexique. C\'est different d\'Halloween.' },
                    { question: 'Le mariage homosexuel est legal en Espagne depuis :', options: ['1995', '2005', '2015', '2020'], correctIndex: 1, explanation: 'L\'Espagne a legalise le mariage homosexuel en 2005, faisant partie des premiers pays au monde.' },
                    { question: '"Balseros" designe :', options: ['Des danseurs cubains', 'Des Cubains qui fuient en radeau vers les USA', 'Des pecheurs mexicains', 'Des musiciens'], correctIndex: 1, explanation: 'Les balseros sont les Cubains qui tentent de rejoindre les Etats-Unis sur des radeaux de fortune (balsa = radeau).' }
                ]
            }
        ]
    });
})();
