// francais2.js — Bac Francais : Oeuvres au programme + Litterature d'idees + Poesie approfondie + Oral
// Format pedagogique : question simple, reponse courte, explication claire, pourquoi, mots difficiles
(function() {
    if (!window.StudFlow || !window.StudFlow.subjects) return;

    window.StudFlow.subjects.register({
        id: 'francais2',
        name: 'Bac Francais : Oeuvres & Oral',
        icon: '\uD83C\uDDEB\uD83C\uDDF7',
        color: 'hot',
        sections: [

            // ================================================================
            // SECTION 1 : LA PRINCESSE DE CLEVES — Mme de Lafayette (1678)
            // ================================================================
            {
                id: 'princesse-cleves',
                title: 'La Princesse de Cleves',
                icon: '\uD83D\uDC51',
                content: '<h3>La Princesse de Cleves — Mme de Lafayette (1678)</h3>'
                    + '<p>Premier grand roman psychologique francais. L\'histoire d\'une femme mariee qui tombe amoureuse d\'un autre homme mais <strong>choisit de ne pas ceder a sa passion</strong>.</p>'
                    + '<h4>Contexte</h4>'
                    + '<ul>'
                    + '<li>Se deroule à la cour d\'Henri II (XVIe siècle), mais ecrit au XVIIe</li>'
                    + '<li>Roman classique : sobriete, analyse des sentiments, bienseance</li>'
                    + '<li>Publie anonymement — attribue a Mme de Lafayette, avec l\'aide de La Rochefoucauld</li>'
                    + '</ul>'
                    + '<h4>Personnages</h4>'
                    + '<ul>'
                    + '<li><strong>Mlle de Chartres / Princesse de Cleves</strong> : heroine vertueuse, educee dans la mefiance des passions</li>'
                    + '<li><strong>M. de Cleves</strong> : son mari, honnete et amoureux, mais qu\'elle n\'aime pas passionnement</li>'
                    + '<li><strong>Le Duc de Nemours</strong> : seducteur brillant, objet de la passion de la Princesse</li>'
                    + '<li><strong>Mme de Chartres</strong> : la mere, qui met en garde contre les passions de la cour</li>'
                    + '</ul>'
                    + '<h4>Scenes cles</h4>'
                    + '<ul>'
                    + '<li><strong>La scene du bal</strong> : coup de foudre entre la Princesse et Nemours — scene fondatrice du roman d\'amour francais</li>'
                    + '<li><strong>L\'aveu au mari</strong> : scene inedite dans la litterature — elle avoue sa passion a son mari pour qu\'il la protege</li>'
                    + '<li><strong>Le refus final</strong> : après la mort de son mari, elle refuse Nemours et se retire du monde</li>'
                    + '</ul>'
                    + '<h4>Themes</h4>'
                    + '<ul>'
                    + '<li><strong>Passion vs raison</strong> : la Princesse lutte contre une passion qu\'elle sait destructrice</li>'
                    + '<li><strong>La cour comme piege</strong> : lieu de faux-semblants, de jalousie, de rumeurs</li>'
                    + '<li><strong>La vertu et le renoncement</strong> : le repos (la tranquillite) vaut plus que la passion</li>'
                    + '<li><strong>L\'education des filles</strong> : Mme de Chartres enseigne la mefiance envers les hommes</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'Qui a ecrit La Princesse de Cleves et quand ?', answer: 'Mme de Lafayette, en 1678. En gros : une femme mariee tombe amoureuse d\'un autre homme, mais elle decide de ne pas ceder. C\'est le premier roman qui s\'intéressé vraiment a ce que les personnages RESSENTENT. Mot difficile : "roman psychologique" = un roman qui explore les pensees et les emotions des personnages.' },
                    { question: 'Que se passe-t-il à la scene du bal ?', answer: 'La Princesse et le Duc de Nemours se voient pour la première fois. Coup de foudre. Tout le monde les regarde danser. En gros : c\'est la scene ou tout commence. Apres ca, tout le roman sera la lutte de la Princesse contre ses sentiments. Pourquoi retenir ca : c\'est LA scene que les profs adorent analyser.' },
                    { question: 'C\'est quoi "l\'aveu au mari" ?', answer: 'La Princesse dit a son mari : "Je suis amoureuse d\'un autre." Elle ne donne pas le nom. Elle lui demande de l\'aider a resister. C\'est la première fois dans un roman qu\'une epouse fait ca. Pourquoi c\'est fou : a l\'époque, une femme ne disait JAMAIS ca. C\'etait totalement choquant. Mot difficile : "inedite" = qui n\'a jamais ete fait avant.' },
                    { question: 'Pourquoi elle refuse Nemours à la fin ?', answer: 'Son mari meurt de chagrin (a cause de sa passion). Elle est libre, mais elle dit non a Nemours. Pourquoi ? Elle sait que la passion ne dure pas. Elle prefere etre tranquille plutot que souffrir. En gros : elle choisit la paix plutot que l\'amour. C\'est un choix de la tete contre le coeur.' },
                    { question: 'Pourquoi la cour est dangereuse dans ce roman ?', answer: 'La cour du roi, c\'est comme un lycee geant : tout le monde surveille tout le monde, les rumeurs vont vite, et il faut toujours faire semblant. La Princesse ne peut pas cacher ses sentiments dans cet endroit. En gros : la cour = un piege ou on ne peut rien cacher. Mot difficile : "faux-semblants" = faire semblant, porter un masque social.' },
                    { question: 'C\'est qui Mme de Chartres ?', answer: 'C\'est la mere de la Princesse. Elle lui repete : "Mefie-toi des hommes et de la passion, ca finit toujours mal." Quand la mere meurt, la Princesse se retrouve seule face a ses sentiments. En gros : c\'est le GPS moral de la Princesse. Sans elle, elle est perdue. Pourquoi c\'est important : ca explique pourquoi la Princesse lutte autant.' },
                    { question: 'C\'est quoi le classicisme (en lien avec ce roman) ?', answer: 'Le classicisme, c\'est un courant du XVIIe siècle. Les règles : on ecrit de facon sobre (pas trop de drama), la raison doit gagner contre les emotions, et rien de choquant. Ce roman est classique parce que la Princesse choisit la raison. En gros : classicisme = la tete gagne contre le coeur. C\'est l\'inverse du romantisme ou le coeur gagne.' },
                    { question: 'C\'est qui le Duc de Nemours ?', answer: 'Le mec le plus beau et le plus seduisant de la cour. Il tombe amoureux de la Princesse et c\'est sincere. Mais il est dragueur, et la Princesse sait qu\'il ne restera peut-etre pas fidele. En gros : c\'est la tentation. Il est genial mais pas fiable. Pourquoi c\'est important : tout le roman tourne autour de "est-ce qu\'elle va craquer pour lui ?"' },
                    { question: 'Pourquoi on dit que c\'est feministe avant l\'heure ?', answer: 'Parce que la Princesse CHOISIT elle-meme. Personne ne lui dit de refuser Nemours. Elle decide seule que sa tranquillite vaut plus que l\'amour. Au XVIIe siècle, une femme qui decide toute seule, c\'est revolutionnaire. En gros : elle ne se soumet a aucun homme. Mot difficile : "lucidite" = voir les choses telles qu\'elles sont, sans se raconter d\'histoires.' },
                    { question: 'C\'est quoi le "repos" dans ce roman ?', answer: 'Le "repos" = la paix interieure, ne plus souffrir. La Princesse dit : la passion c\'est de la souffrance (jalousie, doutes, larmes). Le repos c\'est la liberté. En gros : elle prefere etre seule et tranquille que amoureuse et malheureuse. Pourquoi c\'est au Bac : ca oppose RAISON (classicisme) vs PASSION (romantisme).' }
                ],
                quiz: [
                    { question: 'Quand La Princesse de Cleves a-t-elle ete publiee ?', options: ['1637', '1678', '1721', '1761'], correctIndex: 1, explanation: 'Le roman est publie en 1678 par Mme de Lafayette, a l\'époque du classicisme.' },
                    { question: 'A quelle époque se deroule l\'action du roman ?', options: ['Le regne de Louis XIV', 'Le regne d\'Henri II', 'La Revolution', 'Le Moyen Age'], correctIndex: 1, explanation: 'L\'action se situe à la cour d\'Henri II (XVIe siècle), mais le roman est ecrit au XVIIe siècle.' },
                    { question: 'Qu\'est-ce qui rend la scene de l\'aveu unique dans la litterature ?', options: ['C\'est une declaration d\'amour', 'Une epouse avoue sa passion pour un autre a son mari', 'Le mari pardonne immediatement', 'Nemours est present pendant l\'aveu'], correctIndex: 1, explanation: 'C\'est la première fois dans la litterature qu\'une femme mariee avoue a son mari qu\'elle aime un autre homme.' },
                    { question: 'Pourquoi la Princesse refuse-t-elle Nemours à la fin ?', options: ['Son mari est encore vivant', 'Elle choisit le repos plutot que la passion', 'Elle aime quelqu\'un d\'autre', 'Sa mere le lui interdit'], correctIndex: 1, explanation: 'Libre après la mort de son mari, elle refuse quand même Nemours par lucidite : elle sait que la passion ne dure pas.' },
                    { question: 'Quel mouvement litteraire La Princesse de Cleves représenté-t-elle ?', options: ['Le romantisme', 'Le naturalisme', 'Le classicisme', 'Les Lumieres'], correctIndex: 2, explanation: 'C\'est un roman classique : analyse psychologique fine, raison qui domine les passions, sobriete du style.' },
                    { question: 'Qui est la figure maternelle qui guide la Princesse ?', options: ['La reine', 'Mme de Chartres', 'La dauphine', 'Mme de Valentinois'], correctIndex: 1, explanation: 'Mme de Chartres eduque sa fille dans la mefiance des passions. Sa mort laisse la Princesse sans guide moral.' },
                    { question: 'Qu\'est-ce que le "coup de foudre" dans le roman ?', options: ['Une dispute au bal', 'La rencontre entre la Princesse et Nemours au bal', 'L\'aveu au mari', 'La mort de M. de Cleves'], correctIndex: 1, explanation: 'La Princesse et Nemours se rencontrent au bal et tombent instantanement amoureux. C\'est la scene fondatrice.' },
                    { question: 'Comment meurt M. de Cleves ?', options: ['En duel', 'De maladie', 'De chagrin après avoir appris la passion de sa femme', 'A la guerre'], correctIndex: 2, explanation: 'M. de Cleves meurt de chagrin et de jalousie après avoir appris que sa femme aime Nemours.' }
                ]
            },

            // ================================================================
            // SECTION 2 : LES FLEURS DU MAL — Baudelaire (1857)
            // ================================================================
            {
                id: 'fleurs-du-mal',
                title: 'Les Fleurs du Mal — Baudelaire',
                icon: '\uD83C\uDF39',
                content: '<h3>Les Fleurs du Mal — Charles Baudelaire (1857)</h3>'
                    + '<p>Recueil poetique revolutionnaire qui transforme la laideur en beauté. Baudelaire invente la <strong>modernité poetique</strong> : il trouve du beau dans le mal, le laid, la ville, l\'ennui.</p>'
                    + '<h4>Structure du recueil</h4>'
                    + '<ul>'
                    + '<li><strong>Spleen et Ideal</strong> : tiraillement entre l\'aspiration au beau (Ideal) et l\'ennui existentiel (Spleen)</li>'
                    + '<li><strong>Tableaux parisiens</strong> : la ville moderne comme source de poesie</li>'
                    + '<li><strong>Le Vin</strong> : paradis artificiel, tentative d\'evasion</li>'
                    + '<li><strong>Fleurs du Mal</strong> : fascination pour le vice et la destruction</li>'
                    + '<li><strong>Revolte</strong> : rebellion contre Dieu et la morale</li>'
                    + '<li><strong>La Mort</strong> : dernier espoir d\'evasion, voyage ultime</li>'
                    + '</ul>'
                    + '<h4>Concepts essentiels</h4>'
                    + '<ul>'
                    + '<li><strong>Le Spleen</strong> : ennui profond, melancolie sans cause, sentiment d\'etre prisonnier de l\'existence</li>'
                    + '<li><strong>L\'Ideal</strong> : aspiration à la beauté pure, au monde superieur, a l\'infini</li>'
                    + '<li><strong>Les Correspondances</strong> : idee que les sens se repondent (un son peut evoquer une couleur) et que le monde visible est le symbole d\'un monde invisible</li>'
                    + '<li><strong>L\'Alchimie poetique</strong> : transformer la "boue" (la laideur, le mal) en "or" (beauté poetique) — "Tu m\'as donne ta boue et j\'en ai fait de l\'or"</li>'
                    + '</ul>'
                    + '<h4>Poemes incontournables</h4>'
                    + '<ul>'
                    + '<li><strong>L\'Albatros</strong> : le poete est comme un oiseau majestueux en vol mais ridicule sur le pont du navire (= dans la société)</li>'
                    + '<li><strong>Correspondances</strong> : sonnet fondateur du symbolisme, la nature est un "temple" plein de symboles</li>'
                    + '<li><strong>Spleen (LXXVIII)</strong> : "Quand le ciel bas et lourd..." — le spleen comme prison</li>'
                    + '<li><strong>L\'Invitation au voyage</strong> : reve d\'un monde ideal, "La, tout n\'est qu\'ordre et beauté, / Luxe, calme et volupte"</li>'
                    + '<li><strong>Une Charogne</strong> : description d\'un cadavre en decomposition transformee en poeme d\'amour — l\'alchimie poetique a l\'etat pur</li>'
                    + '<li><strong>A une passante</strong> : rencontre fugitive dans la foule parisienne, amour impossible de la modernité</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'C\'est quoi le Spleen chez Baudelaire ?', answer: 'C\'est un ennui ENORME. Pas juste "je m\'ennuie en cours." C\'est le sentiment que la vie n\'a pas de sens, que le temps t\'ecrase, que t\'es prisonnier. Baudelaire dit que c\'est comme un couvercle qui pese sur ton ame. En gros : le Spleen = depression existentielle. C\'est l\'oppose de l\'Ideal (le reve de beauté). Mot difficile : "melancolie" = tristesse profonde sans raison précisé.' },
                    { question: 'C\'est quoi l\'alchimie poetique ?', answer: 'Au Moyen Age, les alchimistes voulaient transformer le plomb en or. Baudelaire fait pareil avec la poesie : il prend des trucs degoutants (cadavres, misere) et en fait de beaux poemes. Il dit : "Tu m\'as donne ta boue et j\'en ai fait de l\'or." En gros : il transforme le MOCHE en BEAU. C\'est pour ca que son livre s\'appelle Les FLEURS du MAL : la beauté qui nait du mal.' },
                    { question: 'Que représenté l\'albatros ?', answer: 'L\'albatros = le poete. Quand l\'oiseau vole, il est magnifique. Quand il se pose sur le bateau, il est ridicule et les marins se moquent de lui. Pareil pour le poete : il est genial quand il ecrit, mais nul dans la vie de tous les jours. Citation a retenir : "Ses ailes de geant l\'empechent de marcher." En gros : le genie rend inadapte à la vie normale. Mot difficile : "allegorie" = une image qui représenté une idee.' },
                    { question: 'C\'est quoi les Correspondances ?', answer: 'Baudelaire dit que nos 5 sens sont CONNECTES entre eux. Un parfum peut te faire voir une couleur. Un son peut te rappeler une sensation. La nature est pleine de signes caches que seul le poete sait lire. En gros : le monde qu\'on voit cache un monde invisible, et le poete le decode. Mot difficile : "synesthesie" = quand les sens se melangent (entendre une couleur, voir un son).' },
                    { question: 'Pourquoi le livre a ete interdit en 1857 ?', answer: 'Les juges ont dit que c\'etait immoral : Baudelaire parlait de sexe, de mort, de drogue. 6 poemes ont ete supprimes et il a paye une amende. En gros : la société n\'etait pas prete pour ses idees. Mais ca l\'a rendu CELEBRE. Pourquoi c\'est important : ca pose la question — est-ce qu\'un artiste a le droit de TOUT dire ?' },
                    { question: 'Comment le livre est-il organisé ?', answer: '6 parties, dans un ordre precis : 1) Spleen et Ideal (le combat interieur). 2) Tableaux parisiens (la ville). 3) Le Vin (chercher l\'oubli). 4) Fleurs du Mal (le vice). 5) Revolte (contre Dieu). 6) La Mort (la dernière sortie). En gros : c\'est un voyage de l\'espoir vers le desespoir. Pourquoi c\'est important : ce n\'est pas juste des poemes au hasard, c\'est un PARCOURS.' },
                    { question: 'C\'est quoi un "Tableau parisien" ?', answer: 'Un poeme sur la VILLE. Avant Baudelaire, la poesie parlait de la nature (fleurs, montagnes). Lui parle de Paris : les rues, la foule, les mendiants, les passants. Il trouve de la beauté dans le beton. Poeme cle : "A une passante" — il croise une belle femme dans la foule, et c\'est fini, il ne la reverra jamais. En gros : il invente la poesie URBAINE.' },
                    { question: 'C\'est quoi le poeme "Une Charogne" ?', answer: 'Baudelaire se balade avec sa copine et tombe sur un cadavre d\'animal pourri. Il le decrit (puanteur, vers, mouches). Puis il dit a sa copine : "Un jour, toi aussi tu ressembleras a ca." MAIS : le poeme, LUI, sera eternel. En gros : la beauté pourrit, mais l\'art ne meurt jamais. C\'est le meilleur exemple d\'alchimie poetique : transformer l\'horrible en beau.' },
                    { question: 'Que veut dire "luxe, calme et volupte" ?', answer: 'C\'est le refrain de "L\'Invitation au voyage." Baudelaire reve d\'un pays parfait ou tout serait beau et harmonieux. Mais ce pays n\'existe PAS. C\'est un reve, une echappatoire au Spleen. En gros : quand la réalité est insupportable, le poete s\'evade par l\'imagination. Mot difficile : "volupte" = plaisir intense et delicat, presque sensuel.' },
                    { question: 'Pourquoi Baudelaire est le pere de la poesie moderne ?', answer: 'Il a TOUT change : 1) Il parle de la ville, pas que de la nature. 2) Il trouve du beau dans le laid. 3) Il parle du mal sans moraliser. 4) Il invente le symbolisme. 5) Il libere la poesie des sujets "acceptables." En gros : avant lui, la poesie avait des règles. Apres lui, plus rien n\'est interdit. TOUS les poetes après lui lui doivent quelque chose.' }
                ],
                quiz: [
                    { question: 'En quelle annee Les Fleurs du Mal sont-elles publiees ?', options: ['1830', '1848', '1857', '1869'], correctIndex: 2, explanation: 'Les Fleurs du Mal paraissent en 1857 et sont immediatement poursuivies pour "outrage à la morale publique."' },
                    { question: 'Qu\'est-ce que le Spleen pour Baudelaire ?', options: ['La joie de vivre', 'L\'amour passion', 'Un ennui profond et melancolique', 'La revolte politique'], correctIndex: 2, explanation: 'Le Spleen est un etat de melancolie profonde, d\'ennui existentiel, de sentiment d\'etre prisonnier du temps et de l\'existence.' },
                    { question: 'Dans "L\'Albatros", a quoi est compare le poete ?', options: ['A un marin', 'A un albatros majestueux en vol mais maladroit au sol', 'A un capitaine de navire', 'A un oiseau en cage'], correctIndex: 1, explanation: 'L\'albatros est une allegorie du poete : grandiose dans la creation mais inadapte et moque dans la société.' },
                    { question: 'Qu\'est-ce que l\'alchimie poetique ?', options: ['Ecrire en vers reguliers', 'Transformer la laideur en beauté par la poesie', 'Utiliser des metaphores scientifiques', 'Ecrire des poemes en prose'], correctIndex: 1, explanation: 'Baudelaire transforme la "boue" (laideur, mal) en "or" (beauté poetique). C\'est le principe fondamental des Fleurs du Mal.' },
                    { question: 'Quel poeme definit la théorie des correspondances ?', options: ['L\'Albatros', 'Spleen', 'Correspondances', 'L\'Invitation au voyage'], correctIndex: 2, explanation: 'Le sonnet "Correspondances" pose l\'idee que les sens se repondent et que la nature est un "temple" plein de symboles.' },
                    { question: 'Pourquoi "Une Charogne" est-il un poeme d\'alchimie poetique ?', options: ['Il parle d\'or et de metaux', 'Il transforme la description d\'un cadavre en poeme d\'amour', 'Il imite les alchimistes medievaux', 'Il utilise des vers dores'], correctIndex: 1, explanation: 'Baudelaire decrit un cadavre en decomposition mais en fait un poeme sur la beauté et l\'eternite de l\'art face à la mort.' },
                    { question: 'Quelle section des Fleurs du Mal explore la ville moderne ?', options: ['Spleen et Ideal', 'Tableaux parisiens', 'Le Vin', 'Revolte'], correctIndex: 1, explanation: 'Les "Tableaux parisiens" font de Paris et de la foule urbaine un sujet poetique — une innovation majeure de Baudelaire.' },
                    { question: 'Baudelaire est considere comme le fondateur de quel mouvement ?', options: ['Le romantisme', 'Le Parnasse', 'Le symbolisme', 'Le surrealisme'], correctIndex: 2, explanation: 'Par sa théorie des Correspondances et son usage du symbole, Baudelaire est le precurseur direct du symbolisme (Verlaine, Rimbaud, Mallarme).' }
                ]
            },

            // ================================================================
            // SECTION 3 : LA LITTERATURE D'IDEES (XVIe-XVIIIe)
            // ================================================================
            {
                id: 'litterature-idees',
                title: 'Litterature d\'idees (XVIe-XVIIIe)',
                icon: '\uD83D\uDCA1',
                content: '<h3>La litterature d\'idees : convaincre, persuader, deliberer</h3>'
                    + '<p>Au Bac, c\'est un objet d\'etude central. Les grands auteurs utilisent la litterature pour <strong>defendre des idees, critiquer la société et faire reflechir</strong>.</p>'
                    + '<h4>Les Essais — Montaigne (1580-1595)</h4>'
                    + '<ul>'
                    + '<li>Montaigne invente l\'essai : il pense librement sur tous les sujets (education, mort, cannibalisme, amitie)</li>'
                    + '<li>"Que sais-je ?" : sa devise — douter de tout, même de soi-meme</li>'
                    + '<li>"Des Cannibales" : les "sauvages" du Nouveau Monde sont-ils vraiment "barbares" ? Montaigne montre que c\'est NOUS les barbares</li>'
                    + '</ul>'
                    + '<h4>Les Lumieres (XVIIIe siècle)</h4>'
                    + '<ul>'
                    + '<li><strong>Voltaire</strong> : combat l\'intolerance et le fanatisme. Candide (1759) : conte philosophique qui critique l\'optimisme naif. "Il faut cultiver notre jardin" = agir concretement plutot que philosopher dans le vide</li>'
                    + '<li><strong>Montesquieu</strong> : Lettres persanes (1721) : deux Persans a Paris. Le regard etranger revele l\'absurdite de nos coutumes. L\'Esprit des lois : separation des pouvoirs</li>'
                    + '<li><strong>Rousseau</strong> : Discours sur l\'inégalité (1755) : l\'homme est bon par nature, c\'est la société qui le corrompt. Du Contrat social : la souverainete appartient au peuple</li>'
                    + '<li><strong>Diderot</strong> : L\'Encyclopedie (1751-1772) : rassembler tout le savoir humain pour combattre l\'ignorance et les prejuges</li>'
                    + '</ul>'
                    + '<h4>Strategies argumentatives</h4>'
                    + '<ul>'
                    + '<li><strong>L\'ironie</strong> : dire le contraire de ce qu\'on pense pour denoncer (Voltaire est le maitre)</li>'
                    + '<li><strong>L\'apologue</strong> : histoire courte qui contient une morale (fable, conte philosophique, parabole)</li>'
                    + '<li><strong>Le regard etranger</strong> : un personnage d\'ailleurs observe notre société et en revele les absurdites</li>'
                    + '<li><strong>L\'utopie</strong> : description d\'un monde ideal qui critique le monde reel (L\'Eldorado dans Candide)</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'C\'est quoi les Lumieres ?', answer: 'Un groupe de penseurs du XVIIIe siècle (Voltaire, Rousseau, Montesquieu, Diderot). Ils veulent combattre l\'ignorance et l\'injustice par la RAISON. En gros : ils disent "reflechissez par vous-memes au lieu d\'obeir betement." Ils ont prepare la Revolution de 1789. Pourquoi c\'est important : sans eux, pas de droits de l\'homme, pas de democratie. Mot difficile : "Lumieres" = la raison qui chasse l\'obscurite de l\'ignorance.' },
                    { question: 'Que veut dire "Que sais-je ?" de Montaigne ?', answer: 'Ca veut dire : "Au fond, qu\'est-ce que je sais vraiment ?" Montaigne doute de TOUT, même de lui-meme. Au lieu de donner des reponses, il pose des questions. En gros : il dit "arretez de croire que vous avez raison sur tout." C\'est le debut de l\'esprit critique. Mot difficile : "scepticisme" = douter de tout, ne rien accepter sans preuve.' },
                    { question: 'Que dit Montaigne dans "Des Cannibales" ?', answer: 'Les Europeens appellent les peuples d\'Amerique des "sauvages." Montaigne dit : attendez, QUI sont les vrais sauvages ? Nous, on fait des guerres de religion et on torture les gens. EUX, ils vivent en paix avec la nature. En gros : on n\'est pas mieux que ceux qu\'on traite de barbares. Mot difficile : "relativisme culturel" = aucune culture n\'est superieure à une autre.' },
                    { question: 'C\'est quoi Candide de Voltaire ?', answer: 'Un conte (1759). Candide est un gars naif qui croit que "tout va bien dans le meilleur des mondes." Il voyage et decouvre la guerre, l\'esclavage, les catastrophes. A la fin, il dit : "Il faut cultiver notre jardin." En gros : arrete de philosopher, AGIS a ton echelle. Mot difficile : "conte philosophique" = histoire inventee pour faire passer des idees. Comme une fable, mais pour adultes.' },
                    { question: 'C\'est quoi l\'ironie (chez Voltaire) ?', answer: 'C\'est dire le CONTRAIRE de ce qu\'on pense pour se moquer. Voltaire est le roi de l\'ironie. Exemple : il appelle un massacre "une boucherie heroique." Le mot "heroique" est sarcastique — il denonce la guerre. En gros : au lieu de crier "la guerre c\'est mal !", il fait semblant de dire que c\'est bien, et le lecteur comprend tout seul que c\'est horrible. C\'est plus puissant qu\'une critique directe.' },
                    { question: 'C\'est quoi le principe des Lettres persanes ?', answer: 'Montesquieu invente 2 Persans qui visitent Paris et ecrivent des lettres a leurs amis. Ils trouvent tout bizarre : le roi, la mode, la religion. En gros : un etranger regarde notre société et montre que NOS habitudes sont absurdes. On se moque des autres, mais on est aussi ridicules. Mot difficile : "regard etranger" = un personnage d\'ailleurs qui revele nos propres absurdites.' },
                    { question: 'Que dit Rousseau dans le Discours sur l\'inégalité ?', answer: 'L\'homme, à la base, est BON. C\'est la société qui le rend mauvais : la propriété privee créé la jalousie, les lois protegent les riches, la civilisation corrompt. En gros : avant la société, les humains etaient libres et egaux. C\'est la société qui a tout casse. Pourquoi c\'est important : cette idee a directement inspire la Revolution de 1789. Mot difficile : "etat de nature" = comment l\'homme vivait AVANT la société.' },
                    { question: 'C\'est quoi l\'Encyclopedie ?', answer: 'Un enorme dictionnaire de 28 volumes (1751-1772) qui rassemble TOUT le savoir humain : sciences, arts, metiers. Diderot et 150 auteurs ont mis 17 ans a l\'ecrire. Le but : donner le savoir a tout le monde pour combattre l\'ignorance. En gros : c\'est le Wikipedia du XVIIIe siècle, en version papier. Pourquoi c\'est important : l\'idee que le savoir ne doit pas etre reserve aux riches.' },
                    { question: 'C\'est quoi un apologue ?', answer: 'Une petite histoire inventee pour faire passer un MESSAGE. Exemples : les fables de La Fontaine ("Le Corbeau et le Renard" = ne sois pas vaniteux), Candide de Voltaire. En gros : au lieu de dire directement "voila la lecon", on raconte une histoire et le lecteur comprend seul. C\'est plus efficace parce que c\'est amusant a lire. Mot difficile : "apologue" = du grec "apologos" = recit avec une morale.' },
                    { question: 'C\'est quoi la separation des pouvoirs ?', answer: 'Montesquieu dit : pour eviter qu\'un seul homme ait tout le pouvoir (= dictature), il faut separer 3 choses. 1) FAIRE les lois (legislatif = Assemblee nationale). 2) APPLIQUER les lois (executif = president). 3) JUGER si les lois sont respectees (judiciaire = tribunaux). En gros : si une seule personne fait tout ca, c\'est un tyran. Pourquoi c\'est important : c\'est comme ca que fonctionne la France aujourd\'hui.' }
                ],
                quiz: [
                    { question: 'Qui a invente le genre de l\'essai ?', options: ['Voltaire', 'Montaigne', 'Descartes', 'Rousseau'], correctIndex: 1, explanation: 'Michel de Montaigne invente l\'essai avec ses Essais (1580-1595), ou il pense librement sur tous les sujets.' },
                    { question: 'Que signifie "Il faut cultiver notre jardin" dans Candide ?', options: ['Il faut devenir agriculteur', 'Il faut arreter de philosopher et agir concretement', 'Il faut voyager dans le monde', 'Il faut croire en Dieu'], correctIndex: 1, explanation: 'Voltaire critique l\'optimisme theorique et dit qu\'il faut agir a sa propre echelle plutot que discourir sur le sens du monde.' },
                    { question: 'Quel procede utilise Montesquieu dans les Lettres persanes ?', options: ['Le monologue interieur', 'Le regard etranger', 'Le flashback', 'Le stream of consciousness'], correctIndex: 1, explanation: 'Deux Persans observent la société francaise avec un regard naive qui revele l\'absurdite de nos coutumes.' },
                    { question: 'Selon Rousseau, qu\'est-ce qui corrompt l\'homme ?', options: ['La nature', 'La religion', 'La société et la propriété', 'La science'], correctIndex: 2, explanation: 'Pour Rousseau, l\'homme est bon par nature. C\'est la société, la propriété privee et la civilisation qui creent les inegalites.' },
                    { question: 'Qu\'est-ce qu\'un conte philosophique ?', options: ['Un conte de fees pour enfants', 'Une histoire fictive qui sert a defendre des idees', 'Un recit historique', 'Un poeme epique'], correctIndex: 1, explanation: 'Le conte philosophique (ex : Candide) utilise une fiction divertissante pour faire passer un message critique ou philosophique.' },
                    { question: 'Quel est le but de l\'Encyclopedie ?', options: ['Raconter l\'histoire de France', 'Rassembler tout le savoir pour combattre l\'ignorance', 'Ecrire des romans', 'Defendre la monarchie'], correctIndex: 1, explanation: 'Diderot et d\'Alembert veulent rassembler tout le savoir humain pour eclairer les esprits et combattre les prejuges.' },
                    { question: 'Qu\'est-ce que le relativisme culturel introduit par Montaigne ?', options: ['Toutes les cultures se valent', 'La culture francaise est superieure', 'Seule la science compte', 'Les barbares doivent etre civilises'], correctIndex: 0, explanation: 'Montaigne montre dans "Des Cannibales" qu\'aucune culture n\'est absolument superieure : ce sont les Europeens qui sont "barbares."' },
                    { question: 'Qui a theorise la separation des pouvoirs ?', options: ['Voltaire', 'Rousseau', 'Montesquieu', 'Diderot'], correctIndex: 2, explanation: 'Montesquieu, dans L\'Esprit des lois (1748), definit la separation en pouvoir legislatif, executif et judiciaire.' }
                ]
            },

            // ================================================================
            // SECTION 4 : JUSTE LA FIN DU MONDE — Lagarce (1990)
            // ================================================================
            {
                id: 'juste-fin-monde',
                title: 'Juste la fin du monde — Lagarce',
                icon: '\uD83C\uDFAD',
                content: '<h3>Juste la fin du monde — Jean-Luc Lagarce (1990)</h3>'
                    + '<p>Piece de theatre contemporaine. Louis, 34 ans, revient dans sa famille pour annoncer qu\'il va mourir. Mais <strong>il n\'y arrive pas</strong>. La parole est impossible.</p>'
                    + '<h4>L\'intrigue</h4>'
                    + '<ul>'
                    + '<li>Louis revient après des annees d\'absence pour annoncer sa mort prochaine (sida, jamais nomme)</li>'
                    + '<li>Il retrouve sa mere, sa soeur Suzanne, son frere Antoine et Catherine (femme d\'Antoine)</li>'
                    + '<li>Les retrouvailles sont tendues : reproches, non-dits, malentendus</li>'
                    + '<li>Louis repart SANS avoir dit ce qu\'il etait venu dire</li>'
                    + '</ul>'
                    + '<h4>Themes</h4>'
                    + '<ul>'
                    + '<li><strong>L\'echec de la communication</strong> : les personnages parlent mais ne se comprennent pas. Chacun est enferme dans sa souffrance</li>'
                    + '<li><strong>La famille</strong> : lieu d\'amour mais aussi de violence, de reproches, de culpabilite</li>'
                    + '<li><strong>Le temps qui passe</strong> : l\'absence de Louis a creuse un fosse. On ne peut pas rattraper le temps perdu</li>'
                    + '<li><strong>La mort</strong> : omnipresente mais jamais nommee. C\'est "juste" la fin du monde (= seulement, rien que)</li>'
                    + '</ul>'
                    + '<h4>L\'ecriture de Lagarce</h4>'
                    + '<ul>'
                    + '<li>Phrases longues, pleines d\'incises et de reprises — comme quelqu\'un qui cherche ses mots</li>'
                    + '<li>Monologues interieurs melanges aux dialogues</li>'
                    + '<li>Ponctuation reduite : les virgules remplacent les points</li>'
                    + '<li>Les personnages tournent autour de ce qu\'ils veulent dire sans jamais le dire</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'De quoi parle Juste la fin du monde ?', answer: 'Louis, 34 ans, revient voir sa famille après des annees. Il veut leur dire qu\'il va mourir. Mais il n\'y arrive pas. Tout le monde se dispute, personne ne s\'ecoute. Il repart sans avoir rien dit. En gros : c\'est une piece sur une famille ou personne n\'arrive a se parler. Mot difficile : "non-dit" = quelque chose qu\'on devrait dire mais qu\'on garde pour soi.' },
                    { question: 'Pourquoi Louis n\'arrive pas a parler ?', answer: 'Parce que sa famille ne le laisse pas en placer une. Son frere Antoine est en colere. Sa soeur Suzanne le supplie. Sa mere fait comme si tout allait bien. Personne ne l\'ecoute vraiment. En gros : le vrai sujet, c\'est pas la mort. C\'est que dans cette famille, la communication est CASSEE. Pourquoi c\'est important : ca parle a tout le monde — qui n\'a jamais eu du mal a dire quelque chose d\'important a sa famille ?' },
                    { question: 'Que veut dire le titre "Juste la fin du monde" ?', answer: '"Juste" a deux sens : 1) "Seulement" = c\'est rien, c\'est juste la fin du monde (ironie). 2) "Justement" = c\'est EXACTEMENT la fin du monde (pour Louis, c\'est sa mort). Le "monde" c\'est pas la planete, c\'est SON monde a lui. En gros : le titre dit que la mort est à la fois banale et enorme. Mot difficile : "antiphrase" = dire le contraire de ce qu\'on pense.' },
                    { question: 'C\'est qui Antoine ?', answer: 'Le grand frere de Louis. Il est en colere et agressif. Pourquoi ? Parce que Louis est parti et l\'a laisse seul avec la famille. Il lui en veut d\'avoir ete libre. Mais derriere sa colere, il souffre. En gros : Antoine parle beaucoup mais ne dit jamais ce qu\'il ressent VRAIMENT. C\'est le personnage le plus frustre de la piece.' },
                    { question: 'Pourquoi l\'ecriture de Lagarce est bizarre ?', answer: 'Il ecrit des phrases TRES longues, avec plein de virgules, de "je veux dire", "comment dire", de mots repetes. Ca ressemble a quelqu\'un qui cherche ses mots et tourne en rond. En gros : la FACON d\'ecrire montre le PROBLEME de la piece — personne n\'arrive a dire les choses. La forme = le fond. Mot difficile : "incise" = un bout de phrase insere au milieu qui coupe le fil de la pensee.' },
                    { question: 'C\'est qui Suzanne ?', answer: 'La petite soeur de Louis. Elle est la plus honnete de la famille. Elle lui dit en face : "Tu nous as abandonnes et tu me manques." Elle est la seule a dire ce qu\'elle ressent. Mais ca ne change rien — Louis part quand meme. En gros : même quand quelqu\'un dit la vérité, ca ne suffit pas a reparer les choses.' },
                    { question: 'De quoi Louis est malade ?', answer: 'On ne le dit JAMAIS dans la piece. Pas un seul mot. Mais on comprend que c\'est le sida (l\'auteur Lagarce est lui-meme mort du sida en 1995, a 38 ans). En gros : le SILENCE sur la maladie est le sujet de la piece. C\'est une piece sur ce qu\'on ne peut pas dire. Mot difficile : "tabou" = sujet dont on ne parle pas, qui est interdit.' },
                    { question: 'Pourquoi c\'est aussi une piece sur le temps ?', answer: 'Louis est parti pendant des annees. Pendant ce temps, les blessures ne se sont pas refermees — elles se sont FIGEES. Quand il revient, c\'est comme si rien n\'avait change : les memes reproches, les memes coleres. En gros : on ne peut pas rattraper le temps perdu. Surtout en famille. Mot difficile : "irreversible" = qu\'on ne peut pas defaire, qu\'on ne peut pas rembobiner.' }
                ],
                quiz: [
                    { question: 'Qui a ecrit Juste la fin du monde ?', options: ['Beckett', 'Ionesco', 'Jean-Luc Lagarce', 'Bernard-Marie Koltes'], correctIndex: 2, explanation: 'Jean-Luc Lagarce ecrit cette piece en 1990. Il meurt du sida en 1995 a 38 ans.' },
                    { question: 'Pourquoi Louis revient-il dans sa famille ?', options: ['Pour se marier', 'Pour annoncer qu\'il va mourir', 'Pour demander de l\'argent', 'Pour presenter sa compagne'], correctIndex: 1, explanation: 'Louis revient pour annoncer sa mort prochaine, mais il n\'y parvient pas a cause de l\'echec de la communication familiale.' },
                    { question: 'Que fait Louis à la fin de la piece ?', options: ['Il annonce sa mort', 'Il repart sans avoir rien dit', 'Il se reconcilie avec Antoine', 'Il reste vivre avec sa famille'], correctIndex: 1, explanation: 'Louis repart sans avoir dit ce qu\'il etait venu dire. C\'est le coeur tragique de la piece : la parole est impossible.' },
                    { question: 'Quel est le theme principal de Juste la fin du monde ?', options: ['La guerre', 'L\'echec de la communication', 'L\'amour passion', 'La revolution'], correctIndex: 1, explanation: 'Les personnages parlent beaucoup mais ne se comprennent jamais. Chacun est enferme dans sa propre souffrance.' },
                    { question: 'Comment l\'ecriture de Lagarce reflete-t-elle le theme de la piece ?', options: ['Par des phrases courtes et percutantes', 'Par des phrases longues avec incises et reprises qui miment la difficulte a communiquer', 'Par des vers en alexandrins', 'Par un silence total des personnages'], correctIndex: 1, explanation: 'Lagarce ecrit comme on parle quand on cherche ses mots : phrases qui tournent en rond, incises, reprises.' },
                    { question: 'Quel personnage représenté la colere et la frustration ?', options: ['La Mere', 'Suzanne', 'Catherine', 'Antoine'], correctIndex: 3, explanation: 'Antoine, le frere aine, est agressif et plein de reproches envers Louis qui l\'a "abandonne" avec la famille.' },
                    { question: 'Quelle maladie Louis a-t-il ?', options: ['Le cancer', 'Le sida (jamais nomme dans la piece)', 'La tuberculose', 'Une maladie imaginaire'], correctIndex: 1, explanation: 'La maladie n\'est jamais nommee. Le non-dit est le sujet même de l\'oeuvre. Lagarce lui-meme est mort du sida.' }
                ]
            },

            // ================================================================
            // SECTION 5 : DECLARATION DES DROITS DE LA FEMME — Olympe de Gouges (1791)
            // ================================================================
            {
                id: 'declaration-gouges',
                title: 'Declaration des droits de la femme — Gouges',
                icon: '\u270A',
                content: '<h3>Declaration des droits de la femme et de la citoyenne — Olympe de Gouges (1791)</h3>'
                    + '<p>Texte politique et feministe. Olympe de Gouges reprend la Declaration des droits de l\'homme (1789) et la reecrit pour y <strong>inclure les femmes</strong>, volontairement oubliees.</p>'
                    + '<h4>Contexte</h4>'
                    + '<ul>'
                    + '<li>La Revolution de 1789 proclame "liberté, égalité, fraternité" mais EXCLUT les femmes</li>'
                    + '<li>La Declaration des droits de l\'homme (1789) ne parle que des hommes</li>'
                    + '<li>Olympe de Gouges ecrit une version miroir : chaque article est reecrit au feminin</li>'
                    + '</ul>'
                    + '<h4>Arguments principaux</h4>'
                    + '<ul>'
                    + '<li>"La femme nait libre et demeure egale a l\'homme en droits" (Article 1)</li>'
                    + '<li>Si la femme peut monter a l\'echafaud (etre guillotinee), elle doit pouvoir monter à la tribune (parler en public)</li>'
                    + '<li>Denonciation de l\'esclavage et de toutes les formes d\'oppression</li>'
                    + '<li>Revendication du droit a l\'education, au divorce, à la propriété</li>'
                    + '</ul>'
                    + '<h4>Strategies argumentatives</h4>'
                    + '<ul>'
                    + '<li><strong>Le pastiche</strong> : elle IMITE la Declaration de 1789 pour en reveler les manques</li>'
                    + '<li><strong>L\'interpellation</strong> : elle s\'adresse directement aux femmes ("Femme, reveille-toi !")</li>'
                    + '<li><strong>L\'ironie</strong> : elle retourne les arguments des hommes contre eux</li>'
                    + '<li><strong>Le pathos</strong> : elle fait appel aux emotions pour convaincre</li>'
                    + '</ul>'
                    + '<h4>Destin d\'Olympe de Gouges</h4>'
                    + '<p>Elle est guillotinee en 1793 pour s\'etre opposee a Robespierre. Son texte est reste oublie pendant 200 ans avant d\'etre redecouvert par les feministes du XXe siècle.</p>',
                flashcards: [
                    { question: 'C\'est qui Olympe de Gouges ?', answer: 'Une femme (1748-1793) qui s\'est battue pour les droits des femmes PENDANT la Revolution. En 1791, elle reecrit la Declaration des droits de l\'homme en y ajoutant les femmes. Elle est guillotinee en 1793. En gros : elle a dit "liberté-égalité, ca doit etre pour les femmes aussi." 200 ans avant le feminisme moderne.' },
                    { question: 'Pourquoi elle reecrit la Declaration de 1789 ?', answer: 'Parce que quand la Declaration dit "les hommes naissent libres et egaux", ca veut dire les HOMMES — pas les femmes. La Revolution oublie volontairement la moitie de la population. Gouges dit : c\'est une contradiction enorme. En gros : vous dites "égalité" mais vous excluez les femmes. C\'est de l\'hypocrisie.' },
                    { question: 'C\'est quoi un pastiche (chez Gouges) ?', answer: 'Un pastiche, c\'est COPIER un texte en le modifiant. Gouges prend la Declaration de 1789 et remplace "homme" par "femme", article par article. Pourquoi c\'est malin : en utilisant la MEME forme, elle montre que les femmes meritent les MEMES droits. C\'est très fort comme argument. Mot difficile : "pastiche" = imitation d\'un texte pour le critiquer ou le detourner.' },
                    { question: 'Que veut dire "monter a l\'echafaud / monter à la tribune" ?', answer: 'L\'echafaud = la guillotine. La tribune = l\'endroit ou on fait des discours. Gouges dit : les femmes PEUVENT etre guillotinees (punies), mais elles ne PEUVENT PAS parler en politique. C\'est absurde ! En gros : si on nous considere assez responsables pour etre tuees, alors on est assez responsables pour parler. Argument imparable.' },
                    { question: 'Quels droits elle demande ?', answer: 'Pour les femmes : 1) Egalite devant la loi. 2) Droit de voter. 3) Droit d\'aller a l\'ecole. 4) Droit de divorcer. 5) Droit de posseder des biens. En 1791, les femmes n\'ont AUCUN de ces droits. Le droit de vote viendra en 1944 — soit 153 ans plus tard. En gros : tout ce qui nous parait normal aujourd\'hui, elle l\'a reclame la premiere.' },
                    { question: 'Que veut dire "Femme, reveille-toi !" ?', answer: 'Gouges ne parle pas DES femmes. Elle parle AUX femmes, directement. Elle leur dit : "Arretez de subir ! Reclamez vos droits !" C\'est comme un cri de ralliement. En gros : elle secoue les femmes pour les pousser a agir. Mot difficile : "interpellation" = s\'adresser a quelqu\'un directement pour le faire reagir.' },
                    { question: 'Comment elle est morte ?', answer: 'Guillotinee le 3 novembre 1793, a 45 ans. Elle avait critique Robespierre (le chef de la Terreur). Ironie terrible : elle meurt sur l\'echafaud dont elle parlait dans son texte. Son oeuvre est oubliee pendant 200 ans. En gros : elle a ete tuee pour avoir dit ce qu\'elle pensait. Mot difficile : "la Terreur" = periode (1793-94) ou des milliers de gens sont guillotines pendant la Revolution.' },
                    { question: 'Pourquoi c\'est un texte feministe fondateur ?', answer: 'C\'est le PREMIER texte politique qui dit clairement : les femmes doivent avoir les MEMES droits que les hommes. Gouges ne supplie pas. Elle ARGUMENTE avec logique. Et elle le fait en 1791, bien avant tout le monde. En gros : c\'est le point de depart du feminisme politique. Pourquoi c\'est au Bac : ca mélange litterature + argumentation + histoire des droits.' }
                ],
                quiz: [
                    { question: 'En quelle annee Olympe de Gouges ecrit-elle sa Declaration ?', options: ['1789', '1791', '1793', '1804'], correctIndex: 1, explanation: 'La Declaration des droits de la femme et de la citoyenne est ecrite en 1791, deux ans après la Declaration des droits de l\'homme.' },
                    { question: 'Quel procede Gouges utilise-t-elle pour denoncer l\'inégalité ?', options: ['La metaphore', 'Le pastiche de la Declaration de 1789', 'Le roman epistolaire', 'Le conte philosophique'], correctIndex: 1, explanation: 'Elle reprend la Declaration de 1789 article par article en la reecrivant pour inclure les femmes, revelant les manques du texte original.' },
                    { question: 'Que signifie "monter à la tribune" dans le texte de Gouges ?', options: ['Aller au tribunal', 'Prendre la parole publiquement et faire de la politique', 'Monter sur scene', 'Ecrire des livres'], correctIndex: 1, explanation: 'La tribune est le lieu ou l\'on prend la parole dans les assemblees politiques. Gouges revendique le droit des femmes à la participation politique.' },
                    { question: 'Comment Olympe de Gouges est-elle morte ?', options: ['De maladie', 'En exil', 'Guillotinee en 1793', 'De vieillesse'], correctIndex: 2, explanation: 'Elle est guillotinee pour s\'etre opposee a Robespierre pendant la Terreur.' },
                    { question: 'Quel article celebre affirme que "la femme nait libre et egale a l\'homme en droits" ?', options: ['Article 6', 'Article 1', 'Article 10', 'Le preambule'], correctIndex: 1, explanation: 'L\'article 1 de la Declaration de Gouges reformule directement l\'article 1 de la Declaration de 1789.' },
                    { question: 'Quand les femmes ont-elles obtenu le droit de vote en France ?', options: ['1791', '1848', '1918', '1944'], correctIndex: 3, explanation: 'Il a fallu attendre 1944 — soit 153 ans après le texte de Gouges — pour que les femmes obtiennent le droit de vote.' }
                ]
            },

            // ================================================================
            // SECTION 6 : L'ORAL DU BAC — Methode + Grammaire
            // ================================================================
            {
                id: 'oral-bac',
                title: 'L\'oral du Bac : methode',
                icon: '\uD83C\uDF99\uFE0F',
                content: '<h3>L\'oral du Bac de Francais — Comment reussir</h3>'
                    + '<h4>Premiere partie : explication lineaire (12 min)</h4>'
                    + '<ul>'
                    + '<li>L\'examinateur choisit un texte parmi ceux etudies en classe</li>'
                    + '<li>Tu dois l\'expliquer LIGNE PAR LIGNE (pas thematiquement)</li>'
                    + '<li>Structure : intro (auteur, oeuvre, contexte, problematique, plan) → explication → conclusion</li>'
                    + '<li>Pour chaque passage : cite le texte, nomme le procede, explique l\'EFFET</li>'
                    + '</ul>'
                    + '<h4>La question de grammaire (2 min)</h4>'
                    + '<ul>'
                    + '<li>L\'examinateur pose UNE question sur une phrase du texte</li>'
                    + '<li>Sujets possibles : negation, interrogation, subordonnees, temps verbaux, types de phrase</li>'
                    + '</ul>'
                    + '<h4>Deuxieme partie : entretien (8 min)</h4>'
                    + '<ul>'
                    + '<li>Tu presentes l\'oeuvre que tu as choisie parmi celles etudiees</li>'
                    + '<li>L\'examinateur pose des questions pour verifier que tu l\'as lue et comprise</li>'
                    + '<li>Donne ton avis personnel, fais des liens avec d\'autres oeuvres</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'C\'est quoi une explication lineaire ?', answer: 'Tu prends un texte et tu l\'expliques DANS L\'ORDRE, du debut à la fin. Pour chaque bout de texte : 1) Tu CITES les mots. 2) Tu dis quel procede c\'est (metaphore, ironie...). 3) Tu expliques l\'EFFET (pourquoi l\'auteur fait ca). En gros : c\'est pas "de quoi parle le texte" mais "COMMENT l\'auteur le dit." C\'est l\'exercice numero 1 de l\'oral.' },
                    { question: 'Comment organiser mon explication lineaire ?', answer: 'INTRO (1 min) : auteur, titre, date, de quoi ca parle, ta question et ton plan. CORPS (10 min) : tu decoupes le texte en 2-3 parties (on dit "mouvements") et tu expliques chaque partie. CONCLUSION (1 min) : tu reponds a ta question + tu ouvres sur un autre texte. Astuce : apprends tes intros PAR COEUR. Ca te donne confiance pour la suite.' },
                    { question: 'C\'est quoi un procede et comment l\'analyser ?', answer: 'Un procede, c\'est une TECHNIQUE que l\'auteur utilise. Exemples : metaphore, ironie, repetition. Pour l\'analyser en 3 etapes : 1) NOMMER ("c\'est une metaphore"). 2) CITER ("\'cette faucille d\'or\'"). 3) EFFET ("ca compare la lune à un outil, ca rend le ciel familier"). L\'erreur numero 1 : reperer un procede sans dire a quoi il SERT. Ca vaut zero.' },
                    { question: 'C\'est quoi la question de grammaire a l\'oral ?', answer: 'L\'examinateur te montre UNE phrase du texte et te pose une question dessus. Sujets possibles : la negation (ne...pas, ne...que), l\'interrogation, les subordonnees (relative, completive), les temps des verbes. Ca dure 2 min et ca vaut 2 points. En gros : c\'est de la grammaire basique, mais il faut connaitre les noms precis. Astuce : revise les 5 sujets les plus frequents.' },
                    { question: 'Comment reussir l\'entretien (2e partie) ?', answer: 'L\'examinateur te pose des questions sur UNE oeuvre que tu as choisie. Conseils : 1) LIS-LA VRAIMENT (il voit tout de suite si t\'as pas lu). 2) Donne ton avis et justifie. 3) Cite des passages precis. 4) Fais des liens avec d\'autres oeuvres. En gros : montre que tu as REFLECHI a l\'oeuvre, pas juste lu le resume. Ca dure 8 minutes.' },
                    { question: 'C\'est quoi une subordonnee relative ?', answer: 'C\'est un bout de phrase qui donne des infos sur un nom. Elle commence par QUI, QUE, DONT, OU. Exemple : "Le garcon QUI COURT est mon frere." "Qui court" = subordonnee relative. Elle complete "le garcon" (on appelle ca l\'antecedent). Piege classique : ne pas confondre avec "que" completive ("Je pense QUE tu as raison" → completive, pas relative).' },
                    { question: 'C\'est quoi la difference entre negation totale et partielle ?', answer: 'Totale = on dit NON a tout : "Il ne mange PAS" (= il ne mange rien). Partielle = on dit NON mais pas completement : "Il ne mange QUE des legumes" (= il mange, mais juste des legumes). "Ne...que" = ca veut dire "seulement." Autres negations partielles : ne...jamais, ne...plus, ne...rien. En gros : totale = rien du tout. Partielle = un peu quand meme.' },
                    { question: 'Comment faire une bonne intro a l\'oral ?', answer: 'En 1 minute, dis : 1) Qui a ecrit, quand, quel mouvement. 2) De quoi parle l\'oeuvre (1 phrase). 3) Ou se situe le passage dans l\'oeuvre. 4) Ta question (= problematique). 5) Ton plan (= les mouvements du texte). Astuce : APPRENDS PAR COEUR l\'intro de chaque texte. Ca se prepare a l\'avance. Le jour J, tu la recites, ca te calme et ca impressionne.' }
                ],
                quiz: [
                    { question: 'Combien de temps dure l\'explication lineaire a l\'oral ?', options: ['8 minutes', '10 minutes', '12 minutes', '20 minutes'], correctIndex: 2, explanation: 'L\'explication lineaire dure 12 minutes : intro, explication mouvement par mouvement, conclusion.' },
                    { question: 'Qu\'est-ce qu\'une explication lineaire ?', options: ['Un resume du texte', 'Une analyse thematique', 'Une explication ligne par ligne dans l\'ordre du texte', 'Un commentaire compose oral'], correctIndex: 2, explanation: 'Lineaire = dans l\'ordre du texte. Tu expliques chaque passage en citant, nommant les procedes et analysant les effets.' },
                    { question: 'Que faut-il faire quand on repère un procede litteraire ?', options: ['Juste le nommer', 'Le nommer, le citer et expliquer son effet', 'L\'ignorer si on ne connait pas le nom', 'Le traduire en langage courant'], correctIndex: 1, explanation: 'Nommer le procede + citer le texte + expliquer l\'effet. C\'est la methode en 3 etapes. Sans l\'effet, l\'analyse ne vaut rien.' },
                    { question: 'Sur quoi porte la question de grammaire a l\'oral ?', options: ['L\'orthographe', 'La negation, l\'interrogation ou les subordonnees', 'La conjugaison de tous les temps', 'L\'etymologie des mots'], correctIndex: 1, explanation: 'La question porte sur un point de grammaire dans une phrase du texte : negation, interrogation, subordonnees, temps verbaux.' },
                    { question: 'Que fait-on pendant l\'entretien (2e partie de l\'oral) ?', options: ['On relit le texte', 'On presente et discute une oeuvre choisie', 'On fait une dictee', 'On repond à un QCM'], correctIndex: 1, explanation: 'L\'entretien de 8 minutes porte sur une oeuvre etudiee en classe que tu as choisie. L\'examinateur verifie que tu l\'as lue et comprise.' },
                    { question: 'Dans "Il ne mange que des legumes", la negation est :', options: ['Totale', 'Partielle (restriction)', 'Exceptive', 'Inexistante'], correctIndex: 1, explanation: '"Ne...que" est une negation partielle restrictive : il mange, mais seulement des legumes. Ce n\'est pas une negation totale.' }
                ]
            },

            // ================================================================
            // SECTION 7 : LA POESIE — Approfondi
            // ================================================================
            {
                id: 'poesie-approfondi',
                title: 'La poesie : du romantisme au surrealisme',
                icon: '\u270F\uFE0F',
                content: '<h3>La poesie du XIXe au XXe siècle</h3>'
                    + '<h4>Le romantisme poetique</h4>'
                    + '<ul>'
                    + '<li><strong>Lamartine</strong> — "Le Lac" (1820) : meditation sur le temps qui passe et l\'amour perdu. "O temps, suspends ton vol !"</li>'
                    + '<li><strong>Hugo</strong> — Les Contemplations (1856) : recueil divise en "Autrefois/Aujourd\'hui" par la mort de sa fille Leopoldine. "Demain, des l\'aube..."</li>'
                    + '<li><strong>Musset</strong> — "La Nuit de mai" : dialogue entre le Poete et la Muse sur la souffrance creatrice</li>'
                    + '</ul>'
                    + '<h4>Apres le romantisme</h4>'
                    + '<ul>'
                    + '<li><strong>Verlaine</strong> — "Art poetique" (1884) : "De la musique avant toute chose." La poesie doit etre musicale, suggestive, pas descriptive</li>'
                    + '<li><strong>Rimbaud</strong> — "Le Bateau ivre" (1871) : voyage hallucinatoire. Rimbaud veut etre "voyant", voir au-dela du reel. Il arrete d\'ecrire a 20 ans</li>'
                    + '<li><strong>Mallarme</strong> — hermetisme poetique : la poesie doit etre difficile, mysterieuse, reservee aux inities</li>'
                    + '</ul>'
                    + '<h4>Le surrealisme (XXe siècle)</h4>'
                    + '<ul>'
                    + '<li><strong>Breton</strong> — Manifeste du surrealisme (1924) : liberer l\'inconscient par l\'ecriture automatique</li>'
                    + '<li><strong>Eluard</strong> — "Liberte" (1942) : poeme de Resistance, chaque strophe finit par "J\'ecris ton nom"</li>'
                    + '<li><strong>Aragon</strong> — poesie engagee, resistance, amour</li>'
                    + '<li><strong>Apollinaire</strong> — Alcools (1913), calligrammes : poesie visuelle, suppression de la ponctuation</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'C\'est quoi le romantisme en poesie ?', answer: 'C\'est un mouvement du XIXe siècle. Les poetes parlent de LEURS sentiments : amour, tristesse, solitude. Ils ecrivent face à la nature. C\'est de la poesie du COEUR. Auteurs : Lamartine, Hugo, Musset. Citation : "O temps, suspends ton vol !" (Lamartine). En gros : les romantiques disent "MOI, je souffre, et c\'est beau." Mot difficile : "lyrisme" = exprimer ses emotions personnelles en poesie.' },
                    { question: 'C\'est quoi Les Contemplations de Hugo ?', answer: 'Un recueil de poemes (1856) coupe en 2 parties : AVANT et APRES la mort de sa fille Leopoldine (noyee en 1843). Avant = bonheur, jeunesse. Apres = deuil, tristesse. Le poeme "Demain, des l\'aube" raconte Hugo qui va sur la tombe de sa fille. En gros : c\'est le journal intime d\'un pere qui a perdu son enfant. C\'est le plus beau recueil romantique francais.' },
                    { question: 'Que veut dire Rimbaud par "le poete doit etre voyant" ?', answer: 'Pour Rimbaud, le poete ne doit PAS juste decrire ce qu\'il voit. Il doit voir au-DELA, percevoir ce que les gens normaux ne voient pas. Pour ca, il faut "deregler tous les sens" (bousculer tout). Rimbaud ecrit toute son oeuvre entre 15 et 20 ans, puis il arrete. En gros : le poete est un explorateur de l\'invisible. Mot difficile : "voyant" = quelqu\'un qui percoit ce que les autres ne percoivent pas.' },
                    { question: 'C\'est quoi l\'ecriture automatique ?', answer: 'Tu prends un stylo et tu ecris SANS reflechir. Tu laisses les mots sortir tout seuls, sans les controler. Le but : faire sortir ce qui est cache dans ton inconscient (tes reves, tes peurs, tes desirs). C\'est invente par Andre Breton, le chef des surrealistes. En gros : on coupe le cerveau logique et on laisse parler le cerveau reve. Mot difficile : "inconscient" = la partie de ton cerveau que tu ne controles pas.' },
                    { question: 'Pourquoi "Liberte" d\'Eluard est celebre ?', answer: 'Ecrit en 1942 pendant que les Nazis occupent la France. Chaque partie du poeme finit par "J\'ecris ton nom." Le dernier mot = "Liberte." Ce poeme a ete imprime et largue par avion sur la France par les Anglais. En gros : un poeme devenu une ARME de Resistance. La preuve que la poesie peut changer le monde. Mot difficile : "poesie engagee" = poesie qui se bat pour une cause.' },
                    { question: 'C\'est quoi un calligramme ?', answer: 'Un poeme ou les mots sont places sur la page pour former un DESSIN. Invente par Apollinaire. Exemple : un poeme sur la pluie ecrit en lignes qui tombent du haut en bas, comme des gouttes. En gros : la forme du poeme fait partie du message. C\'est de la poesie qu\'on VOIT autant qu\'on lit. Mot difficile : "calligramme" = du grec "beauté" + "lettre."' },
                    { question: 'Que dit Verlaine dans son "Art poetique" ?', answer: '"De la musique avant toute chose." Verlaine veut une poesie qui CHANTE, qui flotte, qui suggere sans tout dire. Il deteste les longs discours : "Prends l\'eloquence et tords-lui son cou !" Il prefere les vers courts et legers. En gros : la poesie doit etre une chanson, pas un discours. Mot difficile : "suggestion" = faire comprendre quelque chose sans le dire directement, comme un sous-entendu.' }
                ],
                quiz: [
                    { question: 'Quel poete romantique a ecrit "O temps, suspends ton vol !" ?', options: ['Hugo', 'Musset', 'Lamartine', 'Vigny'], correctIndex: 2, explanation: 'Ce vers celebre vient du poeme "Le Lac" (1820) de Lamartine, meditation sur le temps qui passe et l\'amour perdu.' },
                    { question: 'Quel evenement divise Les Contemplations de Hugo en deux parties ?', options: ['La Revolution de 1848', 'La mort de sa fille Leopoldine', 'Son exil a Guernesey', 'La bataille d\'Hernani'], correctIndex: 1, explanation: 'La noyade de Leopoldine en 1843 separe "Autrefois" (bonheur) et "Aujourd\'hui" (deuil) dans le recueil.' },
                    { question: 'Qui a ecrit le Manifeste du surrealisme en 1924 ?', options: ['Eluard', 'Aragon', 'Breton', 'Apollinaire'], correctIndex: 2, explanation: 'Andre Breton fonde le surrealisme avec son Manifeste de 1924, pronant la liberation de l\'inconscient par l\'ecriture automatique.' },
                    { question: 'Qu\'est-ce qu\'un calligramme ?', options: ['Un poeme sans ponctuation', 'Un poeme dont les mots forment un dessin', 'Un poeme en prose', 'Un poeme satirique'], correctIndex: 1, explanation: 'Apollinaire invente le calligramme : poeme ou la disposition des mots sur la page forme une image liee au sens du texte.' },
                    { question: 'Selon Verlaine, que faut-il privilegier en poesie ?', options: ['L\'eloquence', 'La rime riche', 'La musique', 'La description précisé'], correctIndex: 2, explanation: '"De la musique avant toute chose" : Verlaine veut une poesie musicale et suggestive, pas descriptive ou eloquente.' },
                    { question: 'Quel poeme d\'Eluard a ete largue sur la France occupee ?', options: ['Capitale de la douleur', 'Liberte', 'L\'Amour la poesie', 'Les Yeux fertiles'], correctIndex: 1, explanation: '"Liberte" (1942) a ete imprime par la RAF et largue par avion sur la France occupee comme acte de Resistance.' },
                    { question: 'A quel age Rimbaud arrete-t-il d\'ecrire ?', options: ['15 ans', '20 ans', '30 ans', '40 ans'], correctIndex: 1, explanation: 'Rimbaud ecrit toute son oeuvre entre 15 et 20 ans, puis abandonne la poesie pour devenir negociant en Afrique.' }
                ]
            },
            // ================================================================
            // SECTION 8 : ON NE BADINE PAS AVEC L'AMOUR — Musset (1834)
            // ================================================================
            {
                id: 'on-ne-badine-pas',
                title: 'On ne badine pas avec l\'amour — Musset',
                icon: '\uD83D\uDC94',
                content: '<h3>On ne badine pas avec l\'amour — Alfred de Musset (1834)</h3>'
                    + '<p>Piece de theatre romantique. Deux jeunes gens qui s\'aiment jouent avec les sentiments. Ca finit MAL.</p>'
                    + '<h4>L\'histoire</h4>'
                    + '<ul>'
                    + '<li>Perdican et Camille se retrouvent après des annees. Ils s\'aiment mais Camille refuse l\'amour (elle veut entrer au couvent)</li>'
                    + '<li>Perdican, vexe, fait semblant d\'aimer Rosette (une paysanne) pour rendre Camille jalouse</li>'
                    + '<li>Camille finit par avouer son amour. Mais Rosette, qui aimait vraiment Perdican, meurt de chagrin</li>'
                    + '</ul>'
                    + '<h4>Themes</h4>'
                    + '<ul>'
                    + '<li><strong>Le jeu amoureux</strong> : on ne joue PAS avec les sentiments — le titre est la lecon</li>'
                    + '<li><strong>L\'orgueil</strong> : Perdican et Camille sont trop fiers pour avouer ce qu\'ils ressentent</li>'
                    + '<li><strong>L\'innocence sacrifiee</strong> : Rosette, la seule sincere, est la victime</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'De quoi parle On ne badine pas avec l\'amour ?', answer: 'Perdican et Camille s\'aiment mais sont trop FIERS pour le dire. Camille refuse l\'amour (elle veut le couvent). Perdican, vexe, drague Rosette (une paysanne) pour la rendre jalouse. Camille finit par craquer. Mais Rosette, qui aimait vraiment, meurt de chagrin. En gros : deux orgueilleux jouent avec les sentiments et une innocente en meurt. Le titre dit tout : on ne JOUE PAS avec l\'amour.' },
                    { question: 'C\'est qui Rosette dans la piece ?', answer: 'C\'est une jeune paysanne, soeur de lait de Camille. Elle est SINCERE et naive. Perdican l\'utilise pour rendre Camille jalouse — il fait semblant de l\'aimer. Mais Rosette, elle, l\'aime VRAIMENT. Quand elle decouvre la vérité, elle meurt de chagrin. En gros : Rosette est la victime innocente du jeu cruel des autres. C\'est le personnage le plus tragique de la piece.' },
                    { question: 'Pourquoi Camille refuse l\'amour ?', answer: 'Au couvent, les religieuses lui ont appris que l\'amour entre hommes et femmes finit TOUJOURS mal : les hommes trompent, mentent, font souffrir. Camille a PEUR de souffrir. Elle prefere renoncer a l\'amour plutot que risquer d\'etre blessee. En gros : Camille se protege en fuyant l\'amour. Mais en fuyant, elle cause exactement la souffrance qu\'elle voulait eviter.' },
                    { question: 'Que dit Perdican dans son celebre monologue sur l\'amour ?', answer: 'Perdican defend l\'amour contre le cynisme de Camille. Il dit en gros : oui, l\'amour fait souffrir, oui les gens se trompent. Mais une seule larme sincere, un seul moment d\'amour vrai, ca vaut TOUTE la souffrance du monde. Mieux vaut souffrir en aimant que ne rien ressentir. En gros : l\'amour imparfait vaut mieux que l\'absence d\'amour. C\'est le discours le plus celebre de la piece.' },
                    { question: 'Pourquoi c\'est un "proverbe dramatique" ?', answer: 'Musset a invente ce genre : une piece courte, inspiree d\'un proverbe (ici : "on ne badine pas avec l\'amour" = on ne joue pas avec les sentiments). Le proverbe EST la lecon morale de la piece. C\'est du "theatre dans un fauteuil" = ecrit pour etre LU, pas joue. En gros : le titre est la morale. Le genre = proverbe mis en scene. Mots difficiles : "badiner" = plaisanter, jouer, ne pas prendre au serieux.' },
                    { question: 'C\'est quoi le romantisme dans cette piece ?', answer: 'Le romantisme c\'est : 1) Les SENTIMENTS au centre (amour, orgueil, souffrance). 2) Le mélange de COMIQUE et de TRAGIQUE (la piece commence en comedie et finit en tragedie). 3) La NATURE comme decor (campagne, chateau). 4) Le conflit entre IDEAL et REALITE. En gros : Musset est romantique mais desabuse — il montre que l\'amour est beau mais dangereux.' }
                ],
                quiz: [
                    { question: 'Qui a ecrit On ne badine pas avec l\'amour ?', options: ['Hugo', 'Musset', 'Marivaux', 'Racine'], correctIndex: 1, explanation: 'Alfred de Musset ecrit cette piece en 1834. C\'est un "proverbe dramatique" romantique.' },
                    { question: 'Pourquoi Rosette meurt-elle ?', options: ['Elle est tuee par Perdican', 'Elle tombe malade', 'Elle meurt de chagrin en decouvrant qu\'elle a ete utilisee', 'Elle se noie'], correctIndex: 2, explanation: 'Rosette meurt de douleur quand elle comprend que Perdican ne l\'aimait pas vraiment et l\'utilisait pour rendre Camille jalouse.' },
                    { question: 'Quel est le theme principal de la piece ?', options: ['La politique', 'Le danger de jouer avec les sentiments', 'La religion', 'La guerre'], correctIndex: 1, explanation: 'Le titre dit tout : "on ne badine pas" = on ne joue pas. L\'amour n\'est pas un jeu, il a des consequences reelles.' },
                    { question: 'Que signifie "badiner" ?', options: ['Pleurer', 'Jouer, plaisanter, ne pas prendre au serieux', 'Danser', 'Prier'], correctIndex: 1, explanation: 'Badiner = traiter quelque chose à la legere, plaisanter. "On ne badine pas avec l\'amour" = on ne joue pas avec les sentiments.' }
                ]
            },

            // ================================================================
            // SECTION 9 : MANON LESCAUT — Abbe Prevost (1731)
            // ================================================================
            {
                id: 'manon-lescaut',
                title: 'Manon Lescaut — Abbe Prevost',
                icon: '\uD83D\uDC83',
                content: '<h3>Manon Lescaut — Abbe Prevost (1731)</h3>'
                    + '<p>Roman d\'amour et de passion. Un jeune noble tombe amoureux d\'une fille legere et perd TOUT pour elle.</p>'
                    + '<h4>L\'histoire</h4>'
                    + '<ul>'
                    + '<li>Le Chevalier des Grieux, jeune noble, rencontre Manon Lescaut et tombe follement amoureux</li>'
                    + '<li>Manon aime des Grieux mais a besoin de LUXE et d\'ARGENT — elle le trompe avec des hommes riches</li>'
                    + '<li>Des Grieux triche, vole, ment pour garder Manon. Il abandonne sa famille, ses etudes, son honneur</li>'
                    + '<li>Manon est deportee en Amerique. Des Grieux la suit. Elle meurt dans le desert</li>'
                    + '</ul>'
                    + '<h4>Themes</h4>'
                    + '<ul>'
                    + '<li><strong>La passion destructrice</strong> : l\'amour fait tout perdre a des Grieux (famille, honneur, morale)</li>'
                    + '<li><strong>L\'argent et l\'amour</strong> : Manon aime des Grieux mais ne peut pas vivre sans luxe</li>'
                    + '<li><strong>La chute morale</strong> : un bon jeune homme devient tricheur et voleur par amour</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'De quoi parle Manon Lescaut ?', answer: 'Des Grieux, un jeune noble serieux, tombe amoureux fou de Manon. Probleme : Manon aime le LUXE et trompe des Grieux avec des hommes riches. Des Grieux perd TOUT pour elle : sa famille, ses etudes, son honneur. Il triche et vole pour la garder. A la fin, Manon est deportee en Amerique. Des Grieux la suit. Elle meurt dans le desert. En gros : un amour passion qui détruit tout. Mots difficiles : "passion" = sentiment si fort qu\'il rend aveugle et fait perdre la raison.' },
                    { question: 'C\'est qui Manon Lescaut ?', answer: 'C\'est une jeune femme belle et charmante. Elle aime VRAIMENT des Grieux, mais elle à un DEFAUT : elle ne peut pas vivre sans argent et sans luxe. Alors elle le trompe avec des hommes riches. Elle n\'est pas mechante — elle est FAIBLE face à la tentation. En gros : Manon est attachante mais immorale. Elle aime l\'amour ET l\'argent, et ne peut renoncer a aucun des deux.' },
                    { question: 'Pourquoi des Grieux est un personnage tragique ?', answer: 'Au debut, c\'est un jeune homme PARFAIT : noble, intelligent, promis à une belle carriere. Mais sa passion pour Manon le fait SOMBRER : il abandonne ses etudes, renie sa famille, triche aux cartes, vole. L\'amour le transforme en criminel. En gros : des Grieux montre que la passion peut detruire même les meilleurs. C\'est la chute morale d\'un homme bien. Mots difficiles : "chute morale" = passer du bien au mal. "Dechéance" = perte progressive de tout ce qu\'on avait.' },
                    { question: 'Pourquoi Manon Lescaut est au programme du Bac ?', answer: 'Parce que ce roman pose LA grande question : la passion est-elle compatible avec la morale ? Des Grieux fait des choses HORRIBLES (vol, triche) mais par AMOUR. Est-ce que l\'amour excuse tout ? Prevost ne juge pas — il laisse le lecteur decider. Aussi : le personnage de Manon interroge la place des femmes et de l\'argent au XVIIIe siècle. En gros : passion vs morale + la condition feminine au XVIIIe.' },
                    { question: 'Comment le roman est-il raconte ?', answer: 'C\'est des Grieux qui raconte SA version de l\'histoire à un homme qu\'il rencontre (le Marquis de Renoncour). C\'est un RECIT ENCHASSE (une histoire dans une histoire). On n\'a que le point de vue de des Grieux — on ne sait jamais ce que Manon pense vraiment. En gros : on entend seulement le version du heros. Manon reste un mystère. Mots difficiles : "recit enchasse" = un personnage raconte son histoire à un autre personnage (mise en abyme).' }
                ],
                quiz: [
                    { question: 'Qui a ecrit Manon Lescaut ?', options: ['Voltaire', 'Rousseau', 'L\'Abbe Prevost', 'Laclos'], correctIndex: 2, explanation: 'L\'Abbe Prevost publie Manon Lescaut en 1731, comme partie de ses Memoires d\'un homme de qualité.' },
                    { question: 'Pourquoi des Grieux perd-il tout ?', options: ['A cause de la guerre', 'Par passion pour Manon', 'A cause de son pere', 'Par ambition politique'], correctIndex: 1, explanation: 'Sa passion pour Manon le pousse a abandonner famille, etudes et honneur, et a commettre des actes immoraux pour la garder.' },
                    { question: 'Comment Manon meurt-elle ?', options: ['Empoisonnee', 'Guillotinee', 'Elle meurt d\'epuisement dans le desert en Amerique', 'De maladie a Paris'], correctIndex: 2, explanation: 'Deportee en Amerique, Manon meurt d\'epuisement dans le desert. Des Grieux l\'avait suivie par amour.' },
                    { question: 'Quel est le theme central du roman ?', options: ['La revolution', 'La passion destructrice', 'L\'education', 'Le voyage'], correctIndex: 1, explanation: 'Manon Lescaut explore la passion qui détruit : l\'amour fait perdre a des Grieux sa morale, sa famille et sa liberté.' }
                ]
            },

            // ================================================================
            // SECTION 10 : DISCOURS DE LA SERVITUDE VOLONTAIRE — La Boetie (1576)
            // ================================================================
            {
                id: 'servitude-volontaire',
                title: 'Discours de la servitude volontaire — La Boetie',
                icon: '\u270A',
                content: '<h3>Discours de la servitude volontaire — Etienne de La Boetie (1576)</h3>'
                    + '<p>Texte politique. La Boetie pose UNE question : pourquoi les peuples ACCEPTENT-ils d\'etre domines ?</p>'
                    + '<h4>La these</h4>'
                    + '<ul>'
                    + '<li>Le tyran n\'a de pouvoir que celui que le peuple lui DONNE</li>'
                    + '<li>Si le peuple refuse d\'obeir, le tyran tombe TOUT SEUL</li>'
                    + '<li>Les gens obeissent par HABITUDE, par peur, ou parce qu\'ils y trouvent des avantages</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'De quoi parle le Discours de la servitude volontaire ?', answer: 'La Boetie pose UNE question : pourquoi les gens se laissent dominer par UN SEUL homme alors qu\'ils sont des MILLIONS ? Sa reponse : c\'est le peuple qui DONNE le pouvoir au tyran. Si tout le monde refusait d\'obeir, le tyran tomberait TOUT SEUL, sans violence. En gros : la tyrannie n\'existe que parce que les gens l\'acceptent. Mots difficiles : "servitude volontaire" = se soumettre de son plein gre (= par choix, même si c\'est inconscient). "Tyran" = dirigeant qui abuse de son pouvoir.' },
                    { question: 'Pourquoi les gens obeissent selon La Boetie ?', answer: '3 raisons : 1) L\'HABITUDE = on nait sous la domination, on n\'imagine rien d\'autre. 2) La PEUR = on a peur des consequences si on desobeit. 3) L\'INTERET = certains profitent du système (les courtisans, les proches du pouvoir). En gros : on obeit parce qu\'on ne connait rien d\'autre, qu\'on a peur, ou qu\'on y gagne quelque chose.' },
                    { question: 'C\'est quoi la solution de La Boetie ?', answer: 'Pas la violence. Pas la revolution. Juste ARRETER D\'OBEIR. Si personne ne sert le tyran, il n\'a plus de pouvoir. Le peuple n\'a même pas besoin de se battre — juste de ne RIEN faire. "Soyez resolus a ne plus servir, et vous voilà libres." En gros : la desobeissance passive suffit. Le pouvoir du tyran repose sur notre obeissance. Mots difficiles : "desobeissance civile" = refuser d\'obeir à une loi ou un pouvoir qu\'on juge injuste, de facon non-violente.' },
                    { question: 'Pourquoi ce texte est important pour le Bac ?', answer: 'Parce qu\'il pose la question de la LIBERTE politique : sommes-nous libres si nous acceptons notre soumission ? Il fait le lien entre litterature et politique. La Boetie a 18 ans quand il l\'ecrit ! Ce texte a influence Gandhi (desobeissance non-violente) et Martin Luther King. En gros : un texte du XVIe siècle qui parle encore aujourd\'hui. Mots difficiles : "rhetorique" = l\'art de convaincre par le discours. La Boetie utilise des questions, des exemples historiques et des images fortes.' },
                    { question: 'C\'est qui La Boetie ?', answer: 'Etienne de La Boetie (1530-1563). Ami intime de Montaigne (qui l\'appelle "parce que c\'etait lui, parce que c\'etait moi"). Il ecrit le Discours a 18 ANS. Il meurt a 32 ans. Montaigne publie le texte après sa mort. En gros : un genie precoce qui a ecrit un texte fondateur de la pensee politique a l\'age d\'un lyceen. Mots difficiles : "humaniste" = penseur de la Renaissance qui met l\'homme au centre de la reflexion.' }
                ],
                quiz: [
                    { question: 'Quelle est la these du Discours de la servitude volontaire ?', options: ['Le tyran est tout-puissant', 'Le peuple donne son pouvoir au tyran et peut le reprendre en cessant d\'obeir', 'La revolution violente est necessaire', 'Le peuple est naturellement soumis'], correctIndex: 1, explanation: 'La Boetie dit que le tyran n\'a de pouvoir que celui que le peuple lui donne. Cesser d\'obeir = liberté.' },
                    { question: 'A quel age La Boetie ecrit-il ce texte ?', options: ['30 ans', '25 ans', '18 ans', '40 ans'], correctIndex: 2, explanation: 'La Boetie ecrit le Discours a 18 ans, ce qui rend ce texte d\'autant plus impressionnant.' },
                    { question: 'Qui etait le meilleur ami de La Boetie ?', options: ['Voltaire', 'Rousseau', 'Montaigne', 'Rabelais'], correctIndex: 2, explanation: 'Montaigne et La Boetie avaient une amitie legendaire. Montaigne en parle dans les Essais : "Parce que c\'etait lui, parce que c\'etait moi."' }
                ]
            },

            // ================================================================
            // SECTION 11 : LES CAHIERS DE DOUAI — Rimbaud (1870)
            // ================================================================
            {
                id: 'cahiers-douai',
                title: 'Les Cahiers de Douai — Rimbaud',
                icon: '\uD83D\uDD25',
                content: '<h3>Les Cahiers de Douai — Arthur Rimbaud (1870)</h3>'
                    + '<p>22 poemes ecrits par Rimbaud a 15-16 ans. Il fugue de chez lui et envoie ses poemes a des poetes parisiens.</p>'
                    + '<h4>Contexte</h4>'
                    + '<ul>'
                    + '<li>Rimbaud a 15 ans. Il vit a Charleville (Ardennes). Il etouffe.</li>'
                    + '<li>Il fugue plusieurs fois et ecrit des poemes pendant ses voyages</li>'
                    + '<li>Il envoie 2 cahiers de poemes a Paul Demeny (un poete) — d\'ou le nom "Cahiers de Douai"</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'C\'est quoi les Cahiers de Douai ?', answer: '22 poemes ecrits par Rimbaud entre 15 et 16 ans. Il fugue de chez lui (il etouffe a Charleville) et ecrit pendant ses voyages. Il envoie 2 cahiers de poemes à un ami poete (Paul Demeny). C\'est un ado REBELLE et GENIE qui reinvente la poesie. En gros : un lyceen qui ecrit les plus beaux poemes de la langue francaise entre deux fugues. Mots difficiles : "fugue" = partir de chez soi sans permission.' },
                    { question: 'Quels sont les themes des Cahiers de Douai ?', answer: '1) La REVOLTE = contre la famille, l\'ecole, la société, la guerre (guerre de 1870). 2) La LIBERTE = le voyage, la route, l\'evasion. 3) La NATURE = les paysages traverses pendant ses fugues. 4) La SENSUALITE = eveil des sens, premiers desirs. 5) La CRITIQUE SOCIALE = il denonce l\'Eglise, la bourgeoisie, la guerre. En gros : un ado qui veut tout casser et tout reinventer.' },
                    { question: 'C\'est quoi le poeme "Ma Boheme" ?', answer: 'Rimbaud raconte ses fugues : il marche sur les routes, dort à la belle etoile, ecrit des poemes sous les etoiles. Il est pauvre mais LIBRE et HEUREUX. Le ton est joyeux et leger. C\'est un hymne à la liberté et à la poesie vagabonde. Citation : "Je m\'en allais, les poings dans mes poches crevees." En gros : la liberté vaut plus que le confort. La misere peut etre poetique.' },
                    { question: 'C\'est quoi le poeme "Le Dormeur du val" ?', answer: 'On voit un soldat allonge dans un beau paysage vert. Il semble dormir paisiblement. Derniere phrase : "Il a deux trous rouges au cote droit." Il est MORT. C\'est un poeme ANTI-GUERRE. Rimbaud oppose la beauté de la nature a l\'horreur de la guerre. La chute (le dernier vers) est un choc. En gros : un faux poeme paisible qui revele l\'horreur de la guerre en une seule phrase.' },
                    { question: 'C\'est quoi le poeme "Sensation" ?', answer: '"Par les soirs bleus d\'ete, j\'irai dans les sentiers..." Rimbaud imagine un voyage en pleine nature. Il ressent avec TOUS ses sens : toucher (herbe aux pieds), vue (soirs bleus), odorat. C\'est un poeme court (2 quatrains) mais d\'une intensite sensorielle folle. En gros : un poeme sur le bonheur de sentir le monde avec son corps. La nature = la liberté = le bonheur.' },
                    { question: 'Pourquoi Rimbaud est un genie precoce ?', answer: 'Il ecrit les Cahiers de Douai a 15-16 ans. A 17 ans, il ecrit Le Bateau ivre (un des plus grands poemes francais). A 20 ans, il ARRETE d\'ecrire pour toujours et part en Afrique. Toute son oeuvre tient en 4 ans. Il meurt a 37 ans. En gros : tout ce qu\'il a ecrit, il l\'a fait entre 15 et 20 ans. Et c\'est parmi les plus grands textes de la langue francaise.' }
                ],
                quiz: [
                    { question: 'A quel age Rimbaud ecrit-il les Cahiers de Douai ?', options: ['20 ans', '25 ans', '15-16 ans', '30 ans'], correctIndex: 2, explanation: 'Rimbaud ecrit ces 22 poemes entre 15 et 16 ans, pendant ses fugues de Charleville.' },
                    { question: 'Quelle est la chute du "Dormeur du val" ?', options: ['Le soldat se reveille', 'Le soldat est mort (deux trous rouges)', 'Le soldat rentre chez lui', 'Le soldat pleure'], correctIndex: 1, explanation: 'Le dernier vers revele que le soldat qui semblait dormir est en fait mort : "Il a deux trous rouges au cote droit."' },
                    { question: 'A quel age Rimbaud arrete-t-il d\'ecrire ?', options: ['15 ans', '20 ans', '30 ans', '40 ans'], correctIndex: 1, explanation: 'Rimbaud arrete la poesie a 20 ans et part en Afrique. Toute son oeuvre tient en 4-5 ans.' }
                ]
            },

            // ================================================================
            // SECTION 12 : BELLE DU SEIGNEUR — Albert Cohen (1968)
            // ================================================================
            {
                id: 'belle-du-seigneur',
                title: 'Belle du Seigneur — Albert Cohen',
                icon: '\uD83D\uDC8D',
                content: '<h3>Belle du Seigneur — Albert Cohen (1968)</h3>'
                    + '<p>Grand roman d\'amour du XXe siècle. L\'histoire d\'une passion ABSOLUE qui finit par se detruire elle-meme.</p>'
                    + '<h4>L\'histoire</h4>'
                    + '<ul>'
                    + '<li>Solal, un homme seduisant et brillant, tombe amoureux d\'Ariane, une femme mariee</li>'
                    + '<li>Ils vivent une passion totale, coupee du monde, dans un isolement dore</li>'
                    + '<li>Mais la passion, privee de vie sociale, de projets, de réalité, finit par s\'ETOUFFER</li>'
                    + '<li>Incapables de supporter la routine de l\'amour, ils se suicident ensemble</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'De quoi parle Belle du Seigneur ?', answer: 'Solal seduit Ariane (une femme mariee). Ils vivent une passion TOTALE. Ils s\'isolent du monde pour vivre leur amour. Mais a force de ne vivre QUE pour l\'amour, sans travail, sans amis, sans projets, la passion s\'eteint. Ils finissent par se suicider. En gros : l\'amour absolu, coupe de la réalité, finit par se detruire. Mots difficiles : "passion absolue" = amour total, exclusif, qui occupe toute la vie.' },
                    { question: 'Pourquoi leur amour echoue ?', answer: 'Parce qu\'ils veulent un amour PARFAIT et PERMANENT. Mais l\'amour a besoin de vie autour de lui : du travail, des amis, des projets. Enfermes a deux, ils s\'ennuient. Ils se regardent et voient leurs defauts. La routine tue la passion. En gros : Cohen montre que l\'amour ne suffit pas a remplir une vie. L\'amour sans le monde = l\'asphyxie.' },
                    { question: 'C\'est qui Solal ?', answer: 'Un homme d\'origine juive, brillant, seduisant, qui travaille à la Societe des Nations (l\'ancetre de l\'ONU). Il seduit les femmes avec une facilite deconcertante. Mais il cherche un amour VRAI, pas juste physique. Avec Ariane, il croit l\'avoir trouve. Mais il decouvre que même l\'amour vrai ne protege pas de l\'ennui et de la mort. En gros : Solal est un seducteur qui cherche l\'amour absolu — et le trouve, et le perd.' },
                    { question: 'Pourquoi Belle du Seigneur est un grand roman ?', answer: 'Parce que Cohen decortique l\'amour avec une HONNETETE brutale. Il montre tout : la seduction (brillante), la passion (exaltante), et la CHUTE (l\'ennui, la routine, la laideur). Il utilise le monologue interieur (on entre dans la tete des personnages). Le style est unique : phrases très longues, droles et tragiques en même temps. En gros : c\'est le roman qui dit la vérité sur l\'amour, sans mensonge romantique.' },
                    { question: 'Comment Cohen ecrit-il ?', answer: 'Son style est UNIQUE : 1) Monologue interieur = on entend les pensees des personnages en direct (comme un flux de conscience). 2) Phrases TRES longues (parfois des pages entieres sans point). 3) Melange de comique et de tragique. 4) Ironie mordante. En gros : Cohen ecrit comme on pense — en desordre, en exces, drole et douloureux en même temps. Mots difficiles : "monologue interieur" = technique qui reproduit les pensees d\'un personnage sans filtre. "Flux de conscience" = les pensees s\'enchainent librement.' }
                ],
                quiz: [
                    { question: 'Qui a ecrit Belle du Seigneur ?', options: ['Proust', 'Camus', 'Albert Cohen', 'Duras'], correctIndex: 2, explanation: 'Albert Cohen publie Belle du Seigneur en 1968. C\'est considere comme un des plus grands romans d\'amour du XXe siècle.' },
                    { question: 'Pourquoi Solal et Ariane echouent-ils ?', options: ['A cause de la guerre', 'Parce que l\'amour absolu, coupe du monde, finit par s\'etouffer', 'A cause de l\'argent', 'A cause de la famille'], correctIndex: 1, explanation: 'Cohen montre que l\'amour isole du monde se détruit : sans projets, sans vie sociale, la passion se transforme en ennui.' },
                    { question: 'Quel procede d\'ecriture Cohen utilise-t-il beaucoup ?', options: ['Le dialogue classique', 'Le monologue interieur', 'Le vers libre', 'Le discours indirect'], correctIndex: 1, explanation: 'Cohen utilise le monologue interieur pour entrer dans la tete des personnages et montrer leurs pensees sans filtre.' }
                ]
            },

            // ================================================================
            // SECTION 13 : LE MALADE IMAGINAIRE — Moliere (1673)
            // ================================================================
            {
                id: 'malade-imaginaire',
                title: 'Le Malade imaginaire — Moliere',
                icon: '\uD83E\uDE7A',
                content: '<h3>Le Malade imaginaire — Moliere (1673)</h3>'
                    + '<p>Derniere piece de Moliere. Argan, un homme en bonne sante, est PERSUADE d\'etre malade. Les medecins en profitent.</p>',
                flashcards: [
                    { question: 'De quoi parle Le Malade imaginaire ?', answer: 'Argan est un homme en BONNE SANTE mais il est persuade d\'etre malade. Il depense une fortune en medecins et en medicaments. Il veut marier sa fille à un medecin pour avoir un docteur GRATUIT à la maison. Moliere se moque des medecins charlatans et de la credulite des patients. En gros : un faux malade exploite par de faux medecins. Mots difficiles : "hypocondriaque" = quelqu\'un qui croit etre malade alors qu\'il ne l\'est pas.' },
                    { question: 'Pourquoi Moliere se moque des medecins ?', answer: 'Au XVIIe siècle, la medecine est très PRIMITIVE. Les medecins parlent en latin pour impressionner, prescrivent des saignees et des lavements inutiles, et ne guerissent PERSONNE. Moliere denonce leur ignorance, leur pretention et leur cupidite. En gros : les medecins de l\'époque sont des charlatans en robes noires qui profitent de la peur des malades. Mots difficiles : "charlatan" = quelqu\'un qui pretend savoir mais ne sait rien. "Saignee" = on enlevait du sang au malade (ca ne marchait pas).' },
                    { question: 'C\'est qui Toinette dans la piece ?', answer: 'C\'est la SERVANTE d\'Argan. Elle est maligne, drole et courageuse. Elle se deguise en medecin pour prouver a Argan que les vrais medecins sont des incompetents. C\'est elle qui a le plus de bon sens dans la piece. En gros : Toinette = la voix de la raison. Comme souvent chez Moliere, le serviteur est plus intelligent que le maitre.' },
                    { question: 'Pourquoi cette piece est tragique en dehors du texte ?', answer: 'Moliere joue le role d\'Argan (le malade imaginaire). Ironie cruelle : Moliere est VRAIMENT malade (tuberculose). Il meurt quelques heures après la 4eme representation, le 17 fevrier 1673. Le faux malade est joue par un vrai malade. En gros : Moliere meurt en jouant un hypocondriaque. C\'est la plus grande ironie du theatre francais.' },
                    { question: 'Quel type de comique Moliere utilise ?', answer: '4 types de comique : 1) MOTS = jeux de mots, latin ridicule des medecins. 2) GESTES = Argan qui court après Toinette. 3) SITUATION = Toinette deguisee en medecin. 4) CARACTERE = l\'obsession maladive d\'Argan. En gros : Moliere fait rire de TOUTES les facons possibles. Mots difficiles : "comedie-ballet" = piece melee de musique et de danse (Moliere travaillait avec le compositeur Lully).' }
                ],
                quiz: [
                    { question: 'Qui a ecrit Le Malade imaginaire ?', options: ['Racine', 'Moliere', 'Corneille', 'Marivaux'], correctIndex: 1, explanation: 'Moliere ecrit et joue Le Malade imaginaire en 1673. C\'est sa dernière piece — il meurt après la 4eme representation.' },
                    { question: 'Pourquoi Argan veut marier sa fille à un medecin ?', options: ['Par amour', 'Pour avoir un medecin gratuit à la maison', 'Pour la punir', 'Pour l\'argent du medecin'], correctIndex: 1, explanation: 'Argan veut un gendre medecin pour se faire soigner gratuitement. Il ignore les sentiments de sa fille.' },
                    { question: 'Que denonce Moliere dans cette piece ?', options: ['La religion', 'La guerre', 'Les medecins charlatans et la credulite', 'La monarchie'], correctIndex: 2, explanation: 'Moliere se moque des medecins incompetents qui profitent de la peur des malades pour s\'enrichir.' }
                ]
            },

            // ================================================================
            // SECTION 14 : LES FAUSSES CONFIDENCES — Marivaux (1737)
            // ================================================================
            {
                id: 'fausses-confidences',
                title: 'Les Fausses Confidences — Marivaux',
                icon: '\uD83C\uDFAD',
                content: '<h3>Les Fausses Confidences — Marivaux (1737)</h3>'
                    + '<p>Comedie ou un valet manipule tout le monde pour que son maitre pauvre epouse une femme riche. Les sentiments finissent par etre vrais.</p>',
                flashcards: [
                    { question: 'De quoi parle Les Fausses Confidences ?', answer: 'Dorante est un jeune homme PAUVRE mais amoureux d\'Araminte, une veuve RICHE. Son valet Dubois invente des stratagemes et fait de "fausses confidences" (= il dit des secrets inventes) pour que Araminte tombe amoureuse de Dorante. Ca marche. En gros : un valet manipulateur joue les entremetteurs. Les faux secrets creent de vrais sentiments. Mots difficiles : "fausse confidence" = un secret qu\'on raconte expres pour manipuler. "Stratageme" = un plan ruse.' },
                    { question: 'C\'est qui Dubois ?', answer: 'C\'est l\'ancien valet de Dorante, devenu valet d\'Araminte. Il connait les DEUX camps. Il manipule tout le monde pour que Dorante et Araminte finissent ensemble. C\'est le METTEUR EN SCENE de la piece : il ecrit le scenario et fait jouer les roles aux autres. En gros : Dubois est le personnage le plus intelligent. Sans lui, rien ne se passe.' },
                    { question: 'C\'est quoi le marivaudage dans cette piece ?', answer: 'Le marivaudage c\'est le jeu de l\'amour : les personnages s\'aiment mais n\'osent PAS le dire. Ils tournent autour du pot, se testent, avancent puis reculent. Dans Les Fausses Confidences, Araminte decouvre petit a petit qu\'elle est amoureuse, mais elle lutte contre ce sentiment (parce que Dorante est pauvre). En gros : le marivaudage = la danse de seduction ou on dit tout SAUF "je t\'aime." Mots difficiles : "marivaudage" = badinage amoureux subtil et raffine, invente par Marivaux.' },
                    { question: 'Quel est le theme de l\'argent dans cette piece ?', answer: 'Araminte est RICHE. Dorante est PAUVRE. La société dit qu\'ils ne peuvent PAS se marier (difference de classe). Tout l\'enjeu : l\'amour peut-il vaincre les barrieres sociales ? A la fin, OUI — Araminte choisit l\'amour. En gros : Marivaux critique une société ou l\'argent decide des mariages, pas les sentiments.' },
                    { question: 'Pourquoi cette piece est au programme du Bac ?', answer: 'Parce qu\'elle pose des questions profondes sous le rire : 1) Peut-on manipuler les sentiments ? 2) Les faux moyens (mensonges de Dubois) peuvent-ils creer de vrais sentiments ? 3) L\'amour doit-il triompher des conventions sociales ? En gros : sous la comedie legere, il y à une reflexion sur la vérité des sentiments et les barrieres de classe.' }
                ],
                quiz: [
                    { question: 'Qui a ecrit Les Fausses Confidences ?', options: ['Moliere', 'Beaumarchais', 'Marivaux', 'Musset'], correctIndex: 2, explanation: 'Marivaux ecrit Les Fausses Confidences en 1737. C\'est un chef-d\'oeuvre du marivaudage.' },
                    { question: 'Quel personnage manipule tout le monde ?', options: ['Dorante', 'Araminte', 'Dubois', 'Marton'], correctIndex: 2, explanation: 'Dubois, le valet, orchestre tout pour que Dorante et Araminte finissent ensemble.' },
                    { question: 'Quel est l\'obstacle entre Dorante et Araminte ?', options: ['La religion', 'La difference de fortune', 'L\'age', 'La guerre'], correctIndex: 1, explanation: 'Dorante est pauvre, Araminte est riche. La société interdit ce type de mariage.' }
                ]
            },

            // ================================================================
            // SECTION 15 : LA PEAU DE CHAGRIN — Balzac (1831)
            // ================================================================
            {
                id: 'peau-de-chagrin',
                title: 'La Peau de chagrin — Balzac',
                icon: '\uD83D\uDCDC',
                content: '<h3>La Peau de chagrin — Honore de Balzac (1831)</h3>'
                    + '<p>Roman fantastique. Un jeune homme trouve une peau magique qui realise tous ses voeux, mais qui rétrécit a chaque voeu. Quand elle disparait, il meurt.</p>',
                flashcards: [
                    { question: 'De quoi parle La Peau de chagrin ?', answer: 'Raphael de Valentin, un jeune homme ruine et desespere, trouve une peau de CHAGRIN (= peau d\'animal) magique. Elle realise TOUS ses voeux. Mais a chaque voeu, la peau RETRECIT. Quand elle aura disparu, Raphael mourra. Il choisit d\'abord les plaisirs (richesse, fetes). Puis il essaie de ne plus rien desirer pour survivre. Mais c\'est impossible. Il meurt. En gros : tu peux tout avoir, mais chaque desir te rapproche de la mort.' },
                    { question: 'C\'est quoi le symbole de la peau de chagrin ?', answer: 'La peau représenté la VIE. Chaque desir CONSOMME de la vie. Plus tu desires, plus tu vis vite, plus tu meurs tot. C\'est une allegorie : desir = destruction. Balzac pose la question : vaut-il mieux vivre intensement et mourir jeune, ou vivre prudemment et durer ? En gros : la peau de chagrin = ta vie qui se consume a chaque plaisir. Mots difficiles : "chagrin" = ici, peau d\'ane ou de mulet (pas la tristesse). "Allegorie" = une histoire qui représenté une idee.' },
                    { question: 'Pourquoi Raphael ne peut pas arreter de desirer ?', answer: 'Parce que le DESIR est ce qui fait de nous des humains. Sans desir, on ne vit pas, on survit. Raphael essaie de ne plus rien vouloir (il s\'enferme, evite les gens). Mais le desir revient toujours : l\'amour, la faim, la curiosite. En gros : Balzac dit que l\'homme est CONDAMNE a desirer. Renoncer au desir c\'est renoncer a vivre.' },
                    { question: 'A quel genre appartient ce roman ?', answer: 'C\'est un roman FANTASTIQUE (la peau magique) ET REALISTE (la société parisienne est decrite avec precision). Balzac mélange le surnaturel et le reel. La peau est-elle vraiment magique ou est-ce une metaphore de l\'epuisement ? Balzac laisse le doute. En gros : realisme + fantastique = un genre hybride. Mots difficiles : "fantastique" = genre ou le surnaturel fait irruption dans le reel et créé le doute.' },
                    { question: 'Pourquoi c\'est au programme du Bac ?', answer: 'Parce que le roman interroge le DESIR (theme philosophique majeur). Il pose la question : est-ce que vouloir toujours plus nous rend heureux ou nous détruit ? C\'est aussi un chef-d\'oeuvre de Balzac qui montre la société parisienne du XIXe siècle. En gros : desir + société + fantastique = un roman riche pour le Bac.' }
                ],
                quiz: [
                    { question: 'Qui a ecrit La Peau de chagrin ?', options: ['Flaubert', 'Balzac', 'Zola', 'Stendhal'], correctIndex: 1, explanation: 'Balzac publie La Peau de chagrin en 1831. Le roman fait partie de La Comedie humaine.' },
                    { question: 'Que fait la peau de chagrin a chaque voeu ?', options: ['Elle grandit', 'Elle change de couleur', 'Elle rétrécit', 'Elle brille'], correctIndex: 2, explanation: 'A chaque voeu exauce, la peau rétrécit. Quand elle disparait completement, Raphael meurt.' },
                    { question: 'Quel est le theme central du roman ?', options: ['La guerre', 'Le desir et ses consequences destructrices', 'La religion', 'Le voyage'], correctIndex: 1, explanation: 'La Peau de chagrin est une reflexion sur le desir : chaque plaisir consomme de la vie.' }
                ]
            },

            // ================================================================
            // SECTION 16 : GARGANTUA — Rabelais (1534)
            // ================================================================
            {
                id: 'gargantua',
                title: 'Gargantua — Rabelais',
                icon: '\uD83C\uDF56',
                content: '<h3>Gargantua — Francois Rabelais (1534)</h3>'
                    + '<p>Roman comique et humaniste. L\'histoire d\'un GEANT qui mange, boit et apprend enormement. Sous le rire, Rabelais critique la société.</p>',
                flashcards: [
                    { question: 'De quoi parle Gargantua ?', answer: 'Gargantua est un GEANT. Il nait, mange enormement, recoit une mauvaise education (par coeur, sans reflechir), puis une BONNE education humaniste (reflechir, observer, experimenter). Il fait la guerre contre Picrochole (un roi stupide). A la fin, il fonde l\'abbaye de Theleme (un lieu ideal). En gros : sous le rire et le grotesque, Rabelais defend l\'education humaniste et critique la betise. Mots difficiles : "humanisme" = mouvement de la Renaissance qui met l\'homme au centre et valorise le savoir.' },
                    { question: 'C\'est quoi l\'abbaye de Theleme ?', answer: 'C\'est un lieu IDEAL invente par Rabelais à la fin du roman. La seule règle : "Fais ce que voudras." Pas de murs, pas d\'horloge, pas de contrainte. Les habitants sont libres, cultives et vertueux. C\'est une UTOPIE : Rabelais imagine un monde ou la liberté rend les gens MEILLEURS (pas pires). En gros : Theleme = le reve humaniste. La liberté totale produit des gens bons. Mots difficiles : "utopie" = lieu ideal qui n\'existe pas. "Fais ce que voudras" = la devise de Theleme.' },
                    { question: 'Pourquoi Rabelais critique l\'education medievale ?', answer: 'Au debut, Gargantua est eduque par des maitres MEDIEVAUX : il apprend par COEUR sans comprendre, il recite sans reflechir. Il devient BETE. Puis il recoit une education HUMANISTE (Ponocrates) : il observe, reflechit, fait du sport, lit les Anciens. Il devient INTELLIGENT. En gros : Rabelais dit "apprendre par coeur c\'est stupide. Il faut comprendre." Mots difficiles : "scolastique" = l\'education medievale basee sur la repetition. "Humaniste" = education basee sur la reflexion et l\'observation.' },
                    { question: 'Pourquoi le rire est important chez Rabelais ?', answer: 'Rabelais ecrit dans le prologue : "Mieux est de ris que de larmes ecrire, pour ce que rire est le propre de l\'homme." Le rire est ce qui nous rend HUMAINS. Sous les blagues (pets, banquets enormes, combats ridicules), il y a des idees SERIEUSES. Rabelais utilise le rire pour faire passer ses critiques (contre l\'Eglise, la guerre, l\'education stupide). En gros : le rire n\'est pas superficiel. C\'est une ARME pour critiquer la société.' },
                    { question: 'Pourquoi Gargantua est au programme du Bac ?', answer: 'Parce que c\'est un texte FONDATEUR de l\'humanisme francais. Il pose des questions encore actuelles : comment bien eduquer ? La liberté rend-elle meilleur ? Le rire peut-il etre serieux ? C\'est aussi un texte de litterature d\'idees : Rabelais argumente pour l\'education humaniste en racontant une histoire drole. En gros : sous le geant qui mange, il y à un penseur qui reflechit a l\'education et à la liberté.' }
                ],
                quiz: [
                    { question: 'Qui a ecrit Gargantua ?', options: ['Montaigne', 'Rabelais', 'Ronsard', 'Du Bellay'], correctIndex: 1, explanation: 'Francois Rabelais publie Gargantua en 1534. C\'est un roman comique et humaniste de la Renaissance.' },
                    { question: 'Quelle est la devise de l\'abbaye de Theleme ?', options: ['Liberte Egalite Fraternite', 'Fais ce que voudras', 'Que sais-je ?', 'Connais-toi toi-meme'], correctIndex: 1, explanation: '"Fais ce que voudras" est la devise de Theleme, l\'utopie de Rabelais ou la liberté rend les gens vertueux.' },
                    { question: 'Que critique Rabelais dans l\'education de Gargantua ?', options: ['Le sport', 'L\'education humaniste', 'L\'education medievale par coeur', 'Les langues etrangeres'], correctIndex: 2, explanation: 'Rabelais oppose l\'education medievale (par coeur, sans reflexion) a l\'education humaniste (observation, reflexion, experimentation).' }
                ]
            },

            // ================================================================
            // SECTION 17 : ALCOOLS — Apollinaire (1913)
            // ================================================================
            {
                id: 'alcools',
                title: 'Alcools — Apollinaire',
                icon: '\uD83C\uDF19',
                content: '<h3>Alcools — Guillaume Apollinaire (1913)</h3>'
                    + '<p>Recueil poetique REVOLUTIONNAIRE. Apollinaire supprime la ponctuation, mélange tradition et modernité.</p>',
                flashcards: [
                    { question: 'C\'est quoi Alcools d\'Apollinaire ?', answer: 'Un recueil de poemes publie en 1913. Apollinaire fait un truc FOU : il supprime TOUTE la ponctuation (pas de virgules, pas de points). Il mélange des formes anciennes (sonnets, vers reguliers) avec des sujets modernes (la ville, les voitures, la Tour Eiffel). En gros : Apollinaire fait le pont entre la poesie classique et la modernité. Mots difficiles : "vers libre" = vers sans rime ni metre fixe. "Modernite" = ce qui est nouveau, urbain, contemporain.' },
                    { question: 'De quoi parle "Zone" (premier poeme d\'Alcools) ?', answer: 'Apollinaire se promene dans Paris et mélange tout : ses souvenirs d\'enfance, la Tour Eiffel, les rues, les avions, la religion, ses voyages. Il n\'y a PAS d\'ordre logique. Les images se superposent comme dans un reve. Premier vers celebre : "A la fin tu es las de ce monde ancien." En gros : Zone c\'est le manifeste de la modernité. On quitte le monde ancien pour embrasser le nouveau.' },
                    { question: 'De quoi parle "Le Pont Mirabeau" ?', answer: '"Sous le pont Mirabeau coule la Seine, et nos amours, faut-il qu\'il m\'en souvienne." Apollinaire parle de l\'amour PERDU. L\'eau qui coule = le temps qui passe. Le refrain revient comme les vagues. C\'est un des poemes d\'amour les plus celebres en francais. En gros : l\'amour passe comme l\'eau sous un pont. Ca ne revient pas. Mots difficiles : "refrain" = vers qui se repete. "Lyrisme" = expression des sentiments personnels.' },
                    { question: 'Pourquoi Apollinaire supprime la ponctuation ?', answer: 'Pour que le lecteur CHOISISSE le rythme. Sans ponctuation, un vers peut se lire de plusieurs facons. Ca créé de l\'ambiguite et de la liberté. Apollinaire dit que la ponctuation est inutile parce que le rythme du vers suffit. En gros : supprimer la ponctuation = liberer la poesie. Le lecteur devient acteur du texte.' },
                    { question: 'Pourquoi Alcools est au programme du Bac ?', answer: 'Parce que c\'est le recueil qui fait le LIEN entre la poesie traditionnelle et la modernité. Apollinaire garde le lyrisme (sentiments, amour, melancolie) mais invente une forme nouvelle (pas de ponctuation, images surprenantes, sujets urbains). Il influence TOUT le XXe siècle : les surrealistes le considerent comme leur precurseur. En gros : Apollinaire = la charniere entre l\'ancien et le nouveau en poesie.' }
                ],
                quiz: [
                    { question: 'Qui a ecrit Alcools ?', options: ['Baudelaire', 'Rimbaud', 'Apollinaire', 'Verlaine'], correctIndex: 2, explanation: 'Guillaume Apollinaire publie Alcools en 1913. C\'est un recueil fondateur de la poesie moderne.' },
                    { question: 'Quelle particularite typographique a Alcools ?', options: ['Tout en majuscules', 'Pas de ponctuation', 'Ecrit a l\'envers', 'En vers de 20 syllabes'], correctIndex: 1, explanation: 'Apollinaire supprime toute la ponctuation du recueil pour liberer le rythme et laisser le lecteur choisir ses pauses.' },
                    { question: '"Sous le pont Mirabeau coule la Seine" est le debut de quel poeme ?', options: ['Zone', 'Le Pont Mirabeau', 'Nuit rhenane', 'La Chanson du mal-aime'], correctIndex: 1, explanation: 'Le Pont Mirabeau est un poeme lyrique sur l\'amour perdu et le temps qui passe, un des plus celebres de la poesie francaise.' }
                ]
            },

            // ================================================================
            // SECTION 18 : SIDO + LES VRILLES DE LA VIGNE — Colette
            // ================================================================
            {
                id: 'sido-colette',
                title: 'Sido + Les Vrilles de la vigne — Colette',
                icon: '\uD83C\uDF3F',
                content: '<h3>Sido suivi de Les Vrilles de la vigne — Colette (1930 / 1908)</h3>'
                    + '<p>Textes autobiographiques. Colette raconte sa mere (Sido), son enfance, et sa quete de liberté.</p>',
                flashcards: [
                    { question: 'C\'est quoi Sido de Colette ?', answer: 'C\'est un recit autobiographique (1930) ou Colette raconte sa MERE, surnommee "Sido." Sido est un personnage extraordinaire : elle aime passionnement la nature, les jardins, les animaux. Elle est libre, independante, originale. A travers le portrait de sa mere, Colette parle aussi de son ENFANCE à la campagne. En gros : un livre d\'amour d\'une fille pour sa mere. Mots difficiles : "autobiographique" = l\'auteur raconte sa propre vie.' },
                    { question: 'C\'est quoi Les Vrilles de la vigne ?', answer: 'Un recueil de textes courts (1908) ou Colette parle de ses sensations, de la nature, de l\'amour, de la liberté. Le titre vient d\'un rossignol qui s\'endort dans une vigne et se reveille prisonnier des vrilles (les tiges). Il chante toute la nuit pour ne plus jamais etre capture. En gros : c\'est un livre sur la LIBERTE. Comme le rossignol, Colette refuse d\'etre enfermee. Mots difficiles : "vrilles" = les tiges enroulees de la vigne qui s\'accrochent a tout.' },
                    { question: 'Comment Colette ecrit-elle ?', answer: 'Colette ecrit avec ses SENS. Elle decrit les odeurs, les couleurs, les textures, les gouts. Son ecriture est SENSORIELLE et CONCRETE. Elle parle de la nature comme personne : chaque fleur, chaque animal est decrit avec precision et amour. En gros : lire Colette c\'est SENTIR le monde. Ses mots sont des sensations. Mots difficiles : "ecriture sensorielle" = ecriture qui fait appel aux 5 sens.' },
                    { question: 'Pourquoi Colette est importante en litterature ?', answer: 'Colette est une des premieres femmes a vivre de sa plume et a revendiquer sa LIBERTE (elle divorce, elle voyage, elle vit comme elle veut). Elle ecrit sur le corps, les sensations, la nature avec une franchise rare pour une femme de son époque. En gros : Colette = la liberté feminine + l\'ecriture des sensations. Mots difficiles : "emancipation" = se liberer des contraintes imposees par la société.' }
                ],
                quiz: [
                    { question: 'Qui est Sido ?', options: ['La fille de Colette', 'La mere de Colette', 'Une amie de Colette', 'Un personnage invente'], correctIndex: 1, explanation: 'Sido est le surnom de la mere de Colette. Le livre est un portrait amoureux de cette femme passionnee par la nature.' },
                    { question: 'D\'ou vient le titre Les Vrilles de la vigne ?', options: ['D\'un proverbe', 'D\'un rossignol prisonnier des vrilles qui chante pour rester libre', 'D\'un poeme de Baudelaire', 'D\'une region viticole'], correctIndex: 1, explanation: 'Un rossignol s\'endort dans une vigne et se reveille piege par les vrilles. Il chante pour ne plus jamais se laisser capturer. C\'est l\'image de la liberté.' },
                    { question: 'Qu\'est-ce qui caracterise l\'ecriture de Colette ?', options: ['Le style abstrait', 'L\'ecriture sensorielle (odeurs, couleurs, textures)', 'Le style scientifique', 'L\'ecriture en vers'], correctIndex: 1, explanation: 'Colette ecrit avec ses sens : elle fait sentir, toucher et voir le monde a travers ses mots.' }
                ]
            },

            // ================================================================
            // SECTION 19 : MEMOIRES D'HADRIEN — Yourcenar (1951)
            // ================================================================
            {
                id: 'memoires-hadrien',
                title: 'Memoires d\'Hadrien — Yourcenar',
                icon: '\uD83C\uDFDB\uFE0F',
                content: '<h3>Memoires d\'Hadrien — Marguerite Yourcenar (1951)</h3>'
                    + '<p>Roman historique. L\'empereur romain Hadrien ecrit une longue lettre a son successeur Marc Aurele. Il raconte sa vie et reflechit sur le pouvoir, la mort, l\'amour.</p>',
                flashcards: [
                    { question: 'De quoi parle Memoires d\'Hadrien ?', answer: 'L\'empereur romain HADRIEN (76-138) est vieux et malade. Il ecrit une lettre a Marc Aurele (son futur successeur). Il raconte SA vie : ses guerres, ses voyages, son amour pour Antinous (un jeune homme), sa philosophie du pouvoir. C\'est un roman HISTORIQUE ecrit comme une autobiographie fictive. En gros : Yourcenar se met dans la tete d\'un empereur romain et le fait parler. Mots difficiles : "roman historique" = roman situe dans une époque reelle du passe. "Autobiographie fictive" = un personnage reel raconte sa vie, mais c\'est l\'auteur qui imagine tout.' },
                    { question: 'Pourquoi Yourcenar choisit Hadrien ?', answer: 'Hadrien est un empereur HUMANISTE : il prefere la paix à la guerre, il voyage dans tout l\'Empire, il aime la culture grecque, il reflechit sur la mort. Il est au SOMMET du pouvoir mais il sait que tout est fragile. Yourcenar dit : "J\'ai choisi un homme qui a presque tout su et qui a tenu le monde dans ses mains." En gros : Hadrien = un homme puissant qui DOUTE. C\'est plus interessant qu\'un empereur sur de lui.' },
                    { question: 'Comment le roman est-il ecrit ?', answer: 'C\'est une LETTRE de 300 pages. Hadrien ecrit à la première personne ("je"). Le ton est intime et philosophique. Yourcenar a fait 20 ans de RECHERCHES pour etre fidele a l\'époque. Elle mele vérité historique et invention romanesque. En gros : on a l\'impression de lire le VRAI journal d\'un empereur romain. Mots difficiles : "recit à la première personne" = le narrateur dit "je." "Vraisemblance historique" = ca RESSEMBLE à la vérité historique même si c\'est invente.' },
                    { question: 'Pourquoi ce roman est au programme du Bac ?', answer: 'Parce qu\'il pose des questions UNIVERSELLES : comment exercer le pouvoir ? Comment accepter la mort ? L\'amour peut-il survivre à la perte ? C\'est aussi un exploit litteraire : Yourcenar, femme du XXe siècle, se glisse dans la peau d\'un homme du IIe siècle et le rend vivant. En gros : c\'est un roman sur le pouvoir, la mort et l\'amour, ecrit avec une precision historique exceptionnelle.' }
                ],
                quiz: [
                    { question: 'Qui a ecrit Memoires d\'Hadrien ?', options: ['Simone de Beauvoir', 'Marguerite Yourcenar', 'Marguerite Duras', 'George Sand'], correctIndex: 1, explanation: 'Marguerite Yourcenar publie Memoires d\'Hadrien en 1951. Elle est la première femme elue a l\'Academie francaise (1980).' },
                    { question: 'A qui Hadrien ecrit-il sa lettre ?', options: ['A Jules Cesar', 'A Marc Aurele', 'A Auguste', 'A Neron'], correctIndex: 1, explanation: 'Hadrien ecrit a Marc Aurele, son futur successeur, pour lui transmettre son expérience du pouvoir.' },
                    { question: 'Quel est le genre de ce roman ?', options: ['Science-fiction', 'Roman historique sous forme d\'autobiographie fictive', 'Conte philosophique', 'Roman policier'], correctIndex: 1, explanation: 'C\'est un roman historique ecrit comme si Hadrien racontait sa propre vie. Yourcenar invente le recit mais respecte l\'histoire.' }
                ]
            }
        ]
    });
})();
