// philo.js — Donnees Philosophie (10 sections)
(function() {
    if (!window.StudFlow || !window.StudFlow.subjects) return;

    window.StudFlow.subjects.register({
        id: 'philo',
        name: 'Philosophie',
        icon: '\uD83E\uDD14',
        color: 'accent',
        sections: [
            {
                id: 'epistemologie',
                title: 'Epistemologie & Raison',
                icon: '\uD83D\uDD2D',
                content: '<h3>Qu\'est-ce que la connaissance ?</h3>'
                    + '<p>L\'epistemologie etudie la nature, les sources et les limites de la connaissance humaine.</p>'
                    + '<ul>'
                    + '<li><strong>Connaissance empirique</strong> : fondee sur l\'experience et l\'observation (Locke, Hume)</li>'
                    + '<li><strong>Connaissance rationnelle</strong> : fondee sur la raison pure (Descartes, Leibniz)</li>'
                    + '<li><strong>Synthese kantienne</strong> : toute connaissance commence avec l\'experience mais ne derive pas toute de l\'experience</li>'
                    + '</ul>'
                    + '<h3>La raison et ses limites</h3>'
                    + '<ul>'
                    + '<li><strong>Le doute methodique</strong> (Descartes) : remettre en question toutes les certitudes pour atteindre une verite indubitable — "Je pense, donc je suis"</li>'
                    + '<li><strong>L\'empirisme</strong> (Hume) : nos idees derivent de nos impressions sensibles ; la causalite est une habitude de l\'esprit</li>'
                    + '<li><strong>Le rationalisme critique</strong> (Popper) : une theorie scientifique est valide tant qu\'elle est refutable et non encore refutee</li>'
                    + '</ul>'
                    + '<h3>Verite et opinion</h3>'
                    + '<ul>'
                    + '<li><strong>L\'opinion</strong> (doxa) : croyance subjective, non fondee rationnellement</li>'
                    + '<li><strong>La verite</strong> : adequation entre le discours et la realite (theorie classique), coherence interne (coherentisme), utilite pratique (pragmatisme)</li>'
                    + '<li><strong>Distinguer savoir et croire</strong> : le savoir implique justification + verite + croyance (definition tripartite)</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'C\'est quoi le doute methodique de Descartes ?', answer: 'Descartes decide de DOUTER de absolument tout : ce qu\'il voit, ce qu\'on lui a appris, meme que 2+2=4. Il cherche UNE chose dont il ne peut pas douter. Il trouve : "Je pense, donc je suis." Meme si tout est faux, le fait que je DOUTE prouve que j\'EXISTE (car pour douter, il faut penser, et pour penser, il faut exister). En gros : douter de tout pour trouver UNE certitude absolue. Mots difficiles : "methodique" = organise, pas au hasard. "Indubitable" = dont on ne peut pas douter.' },
                    { question: 'Empirisme vs rationalisme ?', answer: 'EMPIRISME (Hume, Locke) = la connaissance vient de l\'EXPERIENCE (ce qu\'on voit, touche, entend). Le cerveau est une "page blanche" a la naissance. RATIONALISME (Descartes, Leibniz) = la connaissance vient de la RAISON. Certaines idees sont innees (= presentes a la naissance). En gros : empirisme = on apprend par les sens. Rationalisme = on apprend par la reflexion. Mots difficiles : "empirique" = base sur l\'experience. "Rationnel" = base sur la raison.' },
                    { question: 'C\'est quoi la falsifiabilite (Popper) ?', answer: 'Pour qu\'une theorie soit SCIENTIFIQUE, il faut qu\'on puisse imaginer une experience qui la contredirait. Si rien ne peut la contredire, ce n\'est PAS de la science. Exemple : "Dieu existe" n\'est pas falsifiable (on ne peut pas prouver le contraire). "L\'eau bout a 100 degres" est falsifiable (on peut tester). En gros : une vraie theorie scientifique ACCEPTE qu\'on puisse la prouver fausse. Mots difficiles : "falsifiable" = qu\'on peut tenter de prouver faux. "Refutable" = meme sens.' },
                    { question: 'Que veut dire "Cogito ergo sum" ?', answer: '"Je pense, donc je suis." C\'est la PREMIERE certitude trouvee par Descartes apres avoir doute de tout. Le raisonnement : je peux douter de tout, MAIS le fait que je doute est une pensee. Et si je pense, c\'est que j\'existe. En gros : meme si le monde est une illusion, le simple fait que tu y penses prouve que TU existes. Mots difficiles : "Cogito" = je pense (en latin). "Ergo" = donc. "Sum" = je suis.' },
                    { question: 'C\'est quoi la doxa ?', answer: 'C\'est l\'OPINION commune. Ce que "tout le monde croit" sans vraiment y reflechir. Platon l\'oppose a l\'episteme (= la connaissance VRAIE, fondee sur la raison). Exemple : "le soleil tourne autour de la Terre" etait une doxa (opinion fausse que tout le monde croyait). En gros : doxa = croyance populaire non prouvee. Episteme = savoir prouve et justifie. Mots difficiles : "doxa" = opinion (grec). "Episteme" = connaissance vraie (grec).' },
                    { question: 'C\'est quoi la theorie de Kant sur la connaissance ?', answer: 'Kant fait la SYNTHESE entre empirisme et rationalisme. Il dit : oui, la connaissance commence avec l\'experience (empirisme a raison). MAIS notre esprit ORGANISE cette experience avec des structures innees (rationalisme a raison aussi). Exemple : l\'espace et le temps ne viennent pas de l\'experience — notre cerveau les impose au reel. En gros : Kant dit "les deux ont raison en partie." Mots difficiles : "a priori" = avant l\'experience, inne. "Categories" = les structures mentales qui organisent l\'experience.' },
                    { question: 'C\'est quoi un jugement synthetique a priori ?', answer: 'C\'est un jugement qui 1) nous apprend quelque chose de NOUVEAU (synthetique) et 2) ne vient PAS de l\'experience (a priori). Exemple : "Tout evenement a une cause." On ne l\'a pas appris par l\'experience (a priori) et ca nous dit quelque chose sur le monde (synthetique). C\'est la grande decouverte de Kant. En gros : on peut connaitre des verites sur le monde SANS les avoir experimentees. Mots difficiles : "synthetique" = qui ajoute du nouveau. "Analytique" = qui ne fait que clarifier ce qu\'on sait deja.' },
                    { question: 'Verite vs certitude ?', answer: 'VERITE = ca correspond a la REALITE. C\'est OBJECTIF. "La Terre tourne autour du Soleil" = vrai. CERTITUDE = le SENTIMENT d\'avoir raison. C\'est SUBJECTIF. On peut etre certain de quelque chose de FAUX. Exemple : au Moyen Age, les gens etaient CERTAINS que la Terre etait plate (certitude) mais c\'etait FAUX (pas la verite). En gros : la verite existe en dehors de nous. La certitude est dans notre tete.' },
                    { question: 'C\'est quoi la verite comme adequation ?', answer: 'C\'est la definition la plus classique de la verite : la verite = ce qu\'on dit CORRESPOND a ce qui est. "Il pleut" est VRAI si et seulement s\'il pleut vraiment. Formule de Thomas d\'Aquin : adaequatio rei et intellectus (= accord entre la chose et la pensee). En gros : la verite = quand les mots collent a la realite. Astuce Bac : c\'est la definition de base, a connaitre PUIS a nuancer (Nietzsche dirait "il n\'y a pas de faits, seulement des interpretations").' },
                    { question: 'Peut-on atteindre la verite ?', answer: '3 reponses possibles : 1) OUI (Descartes) = par le doute et la raison, on atteint des certitudes absolues. 2) NON (Nietzsche) = "il n\'y a pas de faits, seulement des interpretations." Tout est subjectif. 3) EN PARTIE (Kant) = on connait les choses telles qu\'elles nous APPARAISSENT, jamais telles qu\'elles SONT vraiment. En gros : au Bac, plan ideal = oui / non / synthese. Mots difficiles : "phenomene" = la chose telle qu\'elle nous apparait. "Noumene" (Kant) = la chose telle qu\'elle est en soi (inaccessible).' }
                ],
                quiz: [
                    { question: 'Quel philosophe est a l\'origine du doute methodique ?', options: ['Platon', 'Descartes', 'Hume', 'Kant'], correctIndex: 1, explanation: 'Descartes developpe le doute methodique dans les Meditations metaphysiques (1641).' },
                    { question: 'La falsifiabilite est un critere propose par :', options: ['Kuhn', 'Popper', 'Descartes', 'Aristote'], correctIndex: 1, explanation: 'Karl Popper propose la falsifiabilite comme critere de demarcation entre science et non-science.' },
                    { question: 'L\'empirisme affirme que la connaissance vient de :', options: ['La raison pure', 'L\'experience sensorielle', 'Les idees innees', 'La revelation divine'], correctIndex: 1, explanation: 'Pour les empiristes (Locke, Hume), l\'esprit est une "table rase" et toute connaissance derive de l\'experience.' },
                    { question: 'Que designe l\'episteme chez Platon ?', options: ['L\'opinion commune', 'La connaissance vraie et justifiee', 'Le doute', 'La croyance religieuse'], correctIndex: 1, explanation: 'L\'episteme est la connaissance rationnelle et fondee, opposee a la doxa (opinion).' }
                ]
            },
            {
                id: 'morale',
                title: 'Morale & Ethique',
                icon: '\u2696\uFE0F',
                content: '<h3>Morale et ethique : quelle difference ?</h3>'
                    + '<ul>'
                    + '<li><strong>La morale</strong> : ensemble de regles de conduite considerees comme bonnes de facon universelle (devoir, obligation)</li>'
                    + '<li><strong>L\'ethique</strong> : reflexion personnelle sur la meilleure facon de vivre (Aristote : l\'ethique des vertus)</li>'
                    + '</ul>'
                    + '<h3>Les grandes theories morales</h3>'
                    + '<ul>'
                    + '<li><strong>Deontologie (Kant)</strong> : agir par devoir, selon l\'imperatif categorique — "Agis de telle sorte que la maxime de ton action puisse etre erigee en loi universelle"</li>'
                    + '<li><strong>Utilitarisme (Bentham, Mill)</strong> : une action est bonne si elle maximise le bonheur du plus grand nombre</li>'
                    + '<li><strong>Ethique des vertus (Aristote)</strong> : viser le juste milieu entre deux extremes ; developper les vertus pour atteindre le bonheur (eudaimonia)</li>'
                    + '</ul>'
                    + '<h3>Liberte et responsabilite</h3>'
                    + '<ul>'
                    + '<li><strong>Le libre arbitre</strong> : capacite de choisir par soi-meme, sans etre determine</li>'
                    + '<li><strong>Le determinisme</strong> : nos actions sont le resultat de causes anterieures (genes, education, societe)</li>'
                    + '<li><strong>Sartre</strong> : "L\'homme est condamne a etre libre" — la liberte implique une responsabilite totale</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'C\'est quoi l\'imperatif categorique de Kant ?', answer: 'La regle morale de Kant : "Avant d\'agir, demande-toi : est-ce que je voudrais que TOUT LE MONDE fasse la meme chose ?" Si oui → c\'est moral. Si non → c\'est pas moral. Exemple : mentir. Si tout le monde mentait, plus personne ne croirait personne → donc mentir est IMMORAL. En gros : agis seulement si ta regle peut devenir une loi pour tout le monde. Mots difficiles : "categorique" = obligatoire, sans exception. "Maxime" = la regle personnelle de ton action.' },
                    { question: 'Morale vs ethique ?', answer: 'MORALE = des regles de conduite UNIVERSELLES. Ce qu\'on DOIT faire. Ca s\'impose a tous. Exemple : "tu ne tueras point." ETHIQUE = une reflexion PERSONNELLE sur la bonne facon de vivre. Chacun cherche sa voie. Exemple : "comment vivre une vie heureuse ?" En gros : la morale c\'est le CODE (pareil pour tous). L\'ethique c\'est la REFLEXION (chacun son chemin).' },
                    { question: 'C\'est quoi l\'utilitarisme ?', answer: 'Une theorie morale simple : une action est BONNE si elle produit le maximum de BONHEUR pour le maximum de PERSONNES. Invente par Bentham et Mill. Exemple : faut-il mentir pour sauver 10 personnes ? L\'utilitariste dit OUI (10 personnes heureuses > 1 mensonge). Kant dirait NON (mentir est mal, point final). En gros : utilitarisme = le resultat compte. Kant = le principe compte. Mots difficiles : "utilite" = le bonheur produit par l\'action.' },
                    { question: 'C\'est quoi l\'eudaimonia (Aristote) ?', answer: 'C\'est le mot grec pour le BONHEUR, mais pas le plaisir instantane. C\'est le bonheur comme ACCOMPLISSEMENT de sa vie. On l\'atteint en developpant ses VERTUS (courage, justice, sagesse) et en visant le JUSTE MILIEU. En gros : eudaimonia = une vie reussie et epanouie. Pas "etre content maintenant" mais "avoir bien vecu." Mots difficiles : "eudaimonia" = du grec "eu" (bien) + "daimon" (destin) = un bon destin, une vie accomplie.' },
                    { question: 'Que veut dire "L\'homme est condamne a etre libre" (Sartre) ?', answer: 'Sartre dit : tu n\'as PAS de nature predeterminee. Tu n\'es PAS programme. Tu es LIBRE de choisir ce que tu deviens. MAIS cette liberte est une CONDAMNATION parce que tu es TOTALEMENT responsable de tes choix. Tu ne peux blamer personne. En gros : pas d\'excuse. Tu es libre, donc tu es responsable de tout ce que tu fais. Mots difficiles : "l\'existence precede l\'essence" = tu existes D\'ABORD, tu te definis ENSUITE (pas de plan preetabli).' },
                    { question: 'C\'est quoi le determinisme ?', answer: 'C\'est l\'idee que TOUT ce que tu fais est la consequence de causes anterieures : tes genes, ton education, ton milieu social. Tu crois choisir, mais en realite tes choix sont PREDETERMINES. L\'inverse du libre arbitre. Exemple : si tu es ne dans une famille violente, le determinisme dit que tu as plus de chances d\'etre violent. En gros : tes actes ne sont pas libres, ils sont les consequences de tout ce qui t\'est arrive avant. Mots difficiles : "determine" = decide a l\'avance par des causes.' },
                    { question: 'C\'est quoi le juste milieu (Aristote) ?', answer: 'Pour Aristote, la VERTU est toujours au MILIEU entre deux exces. Le courage est entre la lachete (trop peu) et la temerite (trop). La generosite est entre l\'avarice (trop peu) et la prodigalite (trop). En gros : ni trop, ni trop peu. Le bien c\'est l\'equilibre. Mots difficiles : "vertu" = une bonne qualite qu\'on developpe par l\'habitude. "Juste milieu" = le point d\'equilibre entre 2 extremes.' },
                    { question: 'C\'est quoi "agir par devoir" (Kant) ?', answer: 'Pour Kant, une action est VRAIMENT morale seulement si tu la fais parce que c\'est ton DEVOIR, pas parce que ca te fait plaisir ou que ca t\'arrange. Exemple : aider quelqu\'un parce que c\'est le bien (= par devoir = moral). Aider quelqu\'un pour qu\'il te rende un service (= par interet = pas moral au sens de Kant). En gros : seule l\'INTENTION compte. Pas le resultat. Mots difficiles : "deontologie" = la morale du devoir (de Kant). "Inclination" = ce que tu as ENVIE de faire.' }
                ],
                quiz: [
                    { question: 'L\'imperatif categorique est un concept de :', options: ['Aristote', 'Mill', 'Kant', 'Sartre'], correctIndex: 2, explanation: 'Kant formule l\'imperatif categorique comme fondement de la morale dans la Critique de la raison pratique.' },
                    { question: 'L\'utilitarisme vise a maximiser :', options: ['La vertu individuelle', 'Le bonheur du plus grand nombre', 'Le devoir moral', 'La liberte absolue'], correctIndex: 1, explanation: 'Le principe d\'utilite (Bentham) : "le plus grand bonheur du plus grand nombre".' },
                    { question: '"L\'existence precede l\'essence" est une formule de :', options: ['Platon', 'Hegel', 'Sartre', 'Spinoza'], correctIndex: 2, explanation: 'Sartre affirme que l\'homme se definit par ses actes, il n\'y a pas de nature humaine prealable.' },
                    { question: 'L\'eudaimonia designe chez Aristote :', options: ['Le plaisir immediat', 'L\'epanouissement et la vie accomplie', 'L\'obeissance aux lois', 'La connaissance divine'], correctIndex: 1, explanation: 'L\'eudaimonia est le bonheur supreme, fin ultime de l\'action humaine selon Aristote.' }
                ]
            },
            {
                id: 'politique',
                title: 'Politique & Societe',
                icon: '\uD83C\uDFDB\uFE0F',
                content: '<h3>L\'Etat et le pouvoir</h3>'
                    + '<ul>'
                    + '<li><strong>L\'etat de nature</strong> : fiction philosophique pour penser l\'origine de la societe (Hobbes, Locke, Rousseau)</li>'
                    + '<li><strong>Le contrat social</strong> : les individus renoncent a certaines libertes en echange de la protection de l\'Etat</li>'
                    + '<li><strong>Hobbes</strong> : l\'etat de nature est une "guerre de tous contre tous" → l\'Etat (Leviathan) est necessaire</li>'
                    + '<li><strong>Rousseau</strong> : l\'homme est bon a l\'etat de nature, c\'est la societe qui le corrompt → le contrat doit preserver la liberte</li>'
                    + '</ul>'
                    + '<h3>Justice et droit</h3>'
                    + '<ul>'
                    + '<li><strong>Droit naturel</strong> : droits inherents a la nature humaine, anterieurs aux lois ecrites</li>'
                    + '<li><strong>Droit positif</strong> : lois ecrites et votees par les institutions</li>'
                    + '<li><strong>Rawls</strong> : la justice comme equite — les inegalites ne sont justes que si elles profitent aux plus defavorises</li>'
                    + '</ul>'
                    + '<h3>Democratie et libertes</h3>'
                    + '<ul>'
                    + '<li><strong>Tocqueville</strong> : la democratie peut mener a la "tyrannie de la majorite" si les libertes individuelles ne sont pas protegees</li>'
                    + '<li><strong>Montesquieu</strong> : la separation des pouvoirs (legislatif, executif, judiciaire) est la garantie de la liberte</li>'
                    + '<li><strong>Marx</strong> : la democratie formelle masque la domination economique de la classe possedante</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'Qu\'est-ce que le contrat social ?', answer: 'Un accord (reel ou fictif) par lequel les individus renoncent a certaines libertes naturelles en echange de la protection et de l\'ordre assures par l\'Etat.' },
                    { question: 'Comment Hobbes decrit-il l\'etat de nature ?', answer: 'Une "guerre de tous contre tous" ou la vie est "solitaire, miserable, brutale et courte". L\'Etat souverain (Leviathan) est necessaire pour assurer la paix.' },
                    { question: 'Quelle est la position de Rousseau sur l\'etat de nature ?', answer: 'L\'homme est naturellement bon et libre. C\'est la societe et la propriete privee qui introduisent l\'inegalite et la corruption.' },
                    { question: 'Qu\'est-ce que le voile d\'ignorance (Rawls) ?', answer: 'Experience de pensee : choisir les principes de justice sans savoir quelle position on occupera dans la societe. Cela conduit a proteger les plus defavorises.' },
                    { question: 'Qu\'est-ce que la separation des pouvoirs selon Montesquieu ?', answer: 'La division du pouvoir en trois branches (legislatif, executif, judiciaire) pour eviter la tyrannie. "Le pouvoir arrete le pouvoir."' },
                    { question: 'Qu\'est-ce que la tyrannie de la majorite (Tocqueville) ?', answer: 'Le risque qu\'en democratie, la majorite impose ses vues et ecrase les libertes individuelles et les opinions minoritaires.' },
                    { question: 'Quelle est la critique marxiste de l\'Etat ?', answer: 'Pour Marx, l\'Etat est un instrument de domination de la classe bourgeoise. La democratie formelle masque l\'exploitation economique du proletariat.' },
                    { question: 'Quelle est la difference entre droit naturel et droit positif ?', answer: 'Le droit naturel designe des droits universels inherents a l\'homme (liberte, vie). Le droit positif designe les lois ecrites votees par les institutions.' },
                    { question: 'L\'Etat est-il un obstacle ou une condition de la liberte ?', answer: 'Obstacle : anarchistes — l\'Etat opprime. Condition : Hobbes — sans Etat, guerre de tous contre tous. Rousseau — l\'Etat du contrat social REALISE la liberte. Astuce Bac : sujet recurrent — plan : obstacle (Marx, anarchisme) / condition (Hobbes, Rousseau) / synthese (Etat juste vs Etat oppresseur).' },
                    { question: 'Qu\'est-ce que la justice selon Rawls ?', answer: 'Des principes equitables choisis sous le "voile d\'ignorance" (sans connaitre sa place dans la societe). Resultat : proteger les plus defavorises + egalite des chances. Principe de difference : les inegalites ne sont justes que si elles profitent aux plus desavantages. Astuce Bac : Rawls = justice comme EQUITE (pas egalite stricte).' },
                    { question: 'La justice est-elle la meme chose que la legalite ?', answer: 'Non. Legal = conforme a la loi. Juste = conforme a un ideal moral. Ex : l\'esclavage etait legal mais injuste. Antigone desobeit a la loi au nom de la justice. Astuce Bac : toujours distinguer legal/juste — c\'est LE piege classique du sujet justice.' }
                ],
                quiz: [
                    { question: 'Qui a ecrit "Du contrat social" ?', options: ['Hobbes', 'Locke', 'Rousseau', 'Montesquieu'], correctIndex: 2, explanation: 'Rousseau publie Du contrat social en 1762, ou il theorise la souverainete du peuple.' },
                    { question: 'Le Leviathan est un ouvrage de :', options: ['Rousseau', 'Hobbes', 'Marx', 'Tocqueville'], correctIndex: 1, explanation: 'Thomas Hobbes publie Le Leviathan en 1651 pour justifier un Etat souverain absolu.' },
                    { question: 'Le "voile d\'ignorance" est un concept de :', options: ['Kant', 'Rawls', 'Hobbes', 'Mill'], correctIndex: 1, explanation: 'John Rawls utilise le voile d\'ignorance dans Theorie de la justice (1971) pour fonder des principes de justice equitables.' },
                    { question: 'La separation des pouvoirs vise a :', options: ['Renforcer l\'autorite du roi', 'Prevenir la tyrannie', 'Abolir les lois', 'Supprimer les elections'], correctIndex: 1, explanation: 'Montesquieu propose la separation des pouvoirs dans L\'Esprit des lois (1748) pour proteger la liberte.' }
                ]
            },
            {
                id: 'metaphysique',
                title: 'Metaphysique & Existence',
                icon: '\u2728',
                content: '<h3>Qu\'est-ce que la metaphysique ?</h3>'
                    + '<p>La metaphysique etudie les questions fondamentales sur l\'etre, l\'existence, le temps, la liberte et la conscience.</p>'
                    + '<h3>Le probleme de la conscience</h3>'
                    + '<ul>'
                    + '<li><strong>Descartes</strong> : dualisme corps/esprit — la conscience (res cogitans) est distincte du corps (res extensa)</li>'
                    + '<li><strong>La phenomenologie (Husserl)</strong> : etudier la conscience telle qu\'elle se donne, "revenir aux choses memes"</li>'
                    + '<li><strong>Merleau-Ponty</strong> : le corps n\'est pas un objet mais le vehicule de l\'etre au monde — perception incarnee</li>'
                    + '</ul>'
                    + '<h3>Le temps et l\'existence</h3>'
                    + '<ul>'
                    + '<li><strong>Saint Augustin</strong> : le temps est une distension de l\'ame — seul le present existe, le passe est memoire, le futur est attente</li>'
                    + '<li><strong>Heidegger</strong> : l\'etre humain (Dasein) est un "etre-pour-la-mort" — la conscience de notre finitude donne son sens a l\'existence</li>'
                    + '<li><strong>Bergson</strong> : distingue le temps mesure (horloge) du temps vecu (duree interieure)</li>'
                    + '</ul>'
                    + '<h3>L\'existentialisme</h3>'
                    + '<ul>'
                    + '<li><strong>Sartre</strong> : l\'existence precede l\'essence — l\'homme est un projet, il se construit par ses choix</li>'
                    + '<li><strong>Camus</strong> : l\'absurde nait de la confrontation entre le desir humain de sens et le silence du monde — "Il faut imaginer Sisyphe heureux"</li>'
                    + '<li><strong>L\'angoisse existentielle</strong> : sentiment qui revele notre liberte et notre responsabilite face au neant</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'Qu\'est-ce que le dualisme cartesien ?', answer: 'La these de Descartes selon laquelle l\'esprit (res cogitans) et le corps (res extensa) sont deux substances distinctes qui interagissent.' },
                    { question: 'Qu\'est-ce que le Dasein chez Heidegger ?', answer: 'L\'etre humain en tant qu\'il est "la" dans le monde. Le Dasein est caracterise par l\'existence, l\'etre-au-monde et l\'etre-pour-la-mort.' },
                    { question: 'Qu\'est-ce que l\'absurde chez Camus ?', answer: 'Le sentiment ne du decalage entre le desir humain de sens et l\'indifference du monde. Face a l\'absurde, il faut se revolter et vivre pleinement.' },
                    { question: 'Qu\'est-ce que la duree selon Bergson ?', answer: 'Le temps vecu, continu et qualitatif, oppose au temps mesure par les horloges (spatialise, quantitatif). La duree est l\'experience interieure du temps.' },
                    { question: 'Que signifie "l\'angoisse" en philosophie existentialiste ?', answer: 'Un sentiment fondamental qui revele a l\'homme sa liberte et sa responsabilite devant le neant. Distinguee de la peur (qui a un objet).' },
                    { question: 'Qu\'est-ce que la phenomenologie ?', answer: 'Methode philosophique fondee par Husserl qui etudie les phenomenes tels qu\'ils apparaissent a la conscience, en mettant entre parentheses les prejuges (epoche).' },
                    { question: 'Comment Saint Augustin pense-t-il le temps ?', answer: 'Le temps est une "distension de l\'ame" : le passe existe comme memoire, le futur comme attente, et seul le present est reel (mais insaisissable).' },
                    { question: 'Que signifie "Il faut imaginer Sisyphe heureux" (Camus) ?', answer: 'Meme si la vie est absurde (comme Sisyphe condamne a rouler eternellement son rocher), l\'homme peut trouver le bonheur dans la revolte et l\'acceptation lucide.' }
                ],
                quiz: [
                    { question: 'Le dualisme corps/esprit est une these de :', options: ['Heidegger', 'Descartes', 'Bergson', 'Camus'], correctIndex: 1, explanation: 'Descartes separe radicalement la substance pensante (esprit) et la substance etendue (corps).' },
                    { question: 'Le concept de "duree" est central chez :', options: ['Hegel', 'Bergson', 'Sartre', 'Husserl'], correctIndex: 1, explanation: 'Bergson distingue la duree (temps vecu qualitatif) du temps spatialise des sciences.' },
                    { question: 'L\'absurde, chez Camus, nait de :', options: ['La raison pure', 'La confrontation entre le desir de sens et le silence du monde', 'La croyance en Dieu', 'L\'ignorance scientifique'], correctIndex: 1, explanation: 'Dans Le Mythe de Sisyphe, Camus definit l\'absurde comme le decalage entre l\'aspiration humaine et l\'indifference du monde.' },
                    { question: 'Le Dasein est un concept de :', options: ['Sartre', 'Merleau-Ponty', 'Heidegger', 'Husserl'], correctIndex: 2, explanation: 'Heidegger developpe le concept de Dasein dans Etre et Temps (1927) comme mode d\'etre specifique de l\'humain.' }
                ]
            },
            // ========== NOUVELLES SECTIONS ==========
            {
                id: 'liberte',
                title: 'La Liberte',
                icon: '\uD83D\uDD4A\uFE0F',
                content: '<h3>Libre arbitre et determinisme</h3>'
                    + '<ul>'
                    + '<li><strong>Le libre arbitre</strong> : faculte de la volonte de se determiner par elle-meme, independamment de toute contrainte exterieure</li>'
                    + '<li><strong>Le determinisme</strong> (Spinoza) : tout evenement est la consequence necessaire de causes anterieures — "Les hommes se croient libres parce qu\'ils ignorent les causes qui les determinent"</li>'
                    + '<li><strong>Compatibilisme</strong> : certains philosophes (Hume, Leibniz) tentent de concilier liberte et determinisme — etre libre, c\'est agir selon sa propre nature sans contrainte exterieure</li>'
                    + '</ul>'
                    + '<h3>Liberte politique et contrat social</h3>'
                    + '<ul>'
                    + '<li><strong>Rousseau</strong> : la liberte civile est superieure a la liberte naturelle — "L\'obeissance a la loi qu\'on s\'est prescrite est liberte"</li>'
                    + '<li><strong>Hobbes</strong> : la liberte consiste dans le silence de la loi — tout ce qui n\'est pas interdit est permis</li>'
                    + '<li><strong>Locke</strong> : la liberte politique repose sur le droit naturel a la vie, a la liberte et a la propriete</li>'
                    + '</ul>'
                    + '<h3>Autonomie, existentialisme et alienation</h3>'
                    + '<ul>'
                    + '<li><strong>Kant</strong> : l\'autonomie est la capacite de se donner a soi-meme sa propre loi morale par la raison — c\'est la vraie liberte</li>'
                    + '<li><strong>Sartre</strong> : "L\'homme est condamne a etre libre" — il n\'y a pas de nature humaine, chaque choix engage la totalite de notre etre</li>'
                    + '<li><strong>Marx</strong> : l\'alienation est la perte de liberte du travailleur qui ne se reconnait plus dans le produit de son travail</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'Qu\'est-ce que le libre arbitre ?', answer: 'La faculte de la volonte de se determiner par elle-meme, de choisir librement sans etre contraint par des causes exterieures ou interieures.' },
                    { question: 'Que dit Spinoza sur la liberte humaine ?', answer: '"Les hommes se croient libres parce qu\'ils ignorent les causes qui les determinent." Pour Spinoza, la liberte consiste a comprendre la necessite, non a y echapper.' },
                    { question: 'Qu\'est-ce que le compatibilisme ?', answer: 'La position qui soutient que liberte et determinisme sont conciliables. Etre libre, c\'est agir selon sa propre nature, meme si nos actions sont causalement determinees.' },
                    { question: 'Quelle est la distinction entre liberte naturelle et liberte civile chez Rousseau ?', answer: 'La liberte naturelle est un droit illimite sur tout. La liberte civile est bornee par la volonte generale mais garantit la securite et la propriete. Rousseau prefere la seconde.' },
                    { question: 'Que signifie "L\'obeissance a la loi qu\'on s\'est prescrite est liberte" (Rousseau) ?', answer: 'Obeir a une loi que l\'on a soi-meme voulue (via le contrat social et la volonte generale) n\'est pas une soumission mais l\'expression meme de la liberte.' },
                    { question: 'Comment Hobbes definit-il la liberte ?', answer: 'La liberte est l\'absence d\'obstacles exterieurs au mouvement. Politiquement, elle reside dans le silence de la loi : ce qui n\'est pas interdit est permis.' },
                    { question: 'Qu\'est-ce que l\'autonomie chez Kant ?', answer: 'La capacite de la volonte rationnelle a se donner a elle-meme sa propre loi morale, independamment des inclinations sensibles. C\'est le fondement de la dignite humaine.' },
                    { question: 'Pourquoi Sartre dit-il que l\'homme est "condamne a etre libre" ?', answer: 'Parce que l\'homme n\'a pas de nature predeterminee (l\'existence precede l\'essence). Il est toujours en situation de choisir et ne peut echapper a cette responsabilite.' },
                    { question: 'Qu\'est-ce que l\'alienation chez Marx ?', answer: 'Le processus par lequel le travailleur devient etranger a lui-meme, au produit de son travail, a son activite et aux autres hommes, dans le systeme capitaliste.' },
                    { question: 'Quelle est la difference entre liberte negative et liberte positive ?', answer: 'La liberte negative est l\'absence de contrainte (ne pas etre empeche). La liberte positive est la capacite effective d\'agir et de se realiser (pouvoir faire).' },
                    { question: 'Comment Locke justifie-t-il la liberte politique ?', answer: 'Par le droit naturel : chaque individu possede naturellement un droit a la vie, a la liberte et a la propriete. L\'Etat doit proteger ces droits, sinon le peuple peut se revolter.' },
                    { question: 'Qu\'est-ce que la mauvaise foi chez Sartre en lien avec la liberte ?', answer: 'Se mentir a soi-meme en niant sa propre liberte, en pretendant etre determine par les circonstances ou par sa "nature" pour fuir l\'angoisse du choix.' },
                    { question: 'Que signifie le determinisme en philosophie ?', answer: 'La doctrine selon laquelle tout evenement (y compris les actes humains) est le resultat necessaire de causes anterieures, ce qui semble exclure le libre arbitre.' },
                    { question: 'Comment Epictete concoit-il la liberte ?', answer: 'La liberte consiste a distinguer ce qui depend de nous (nos jugements, nos desirs) de ce qui n\'en depend pas (les evenements exterieurs), et a n\'agir que sur le premier.' },
                    { question: 'Qu\'est-ce que la volonte generale chez Rousseau ?', answer: 'La volonte du corps politique dans son ensemble, visant le bien commun. Elle se distingue de la volonte de tous (somme des interets particuliers).' },
                    { question: 'Peut-on etre libre sans loi ?', answer: 'Non selon Rousseau : sans loi, c\'est la loi du plus fort, pas la liberte. La loi qu\'on se donne soi-meme (volonte generale) EST la liberte. Hobbes : sans loi = guerre de tous contre tous. Astuce Bac : sujet classique — opposer Hobbes (loi = securite) et Rousseau (loi = liberte).' },
                    { question: 'La liberte est-elle l\'absence de contrainte ?', answer: 'Liberte negative = oui (pas d\'obstacle). Mais liberte positive = pouvoir EFFECTIF d\'agir. Ex : un SDF est "libre" legalement mais pas libre de fait. Kant : la vraie liberte = l\'autonomie (se donner sa propre loi). Astuce Bac : toujours distinguer liberte negative/positive en dissertation.' },
                    { question: 'L\'homme est-il libre ou determine ?', answer: 'Spinoza : determine (on ignore les causes). Sartre : absolument libre (condamne a choisir). Compromis : Kant distingue le monde phenomenal (determine) et le monde noumenal (libre). Astuce Bac : le plan ideal = these (determine) / antithese (libre) / synthese (Kant ou compatibilisme).' }
                ],
                quiz: [
                    { question: 'Quel philosophe affirme que "les hommes se croient libres parce qu\'ils ignorent les causes qui les determinent" ?', options: ['Descartes', 'Spinoza', 'Sartre', 'Kant'], correctIndex: 1, explanation: 'Spinoza, dans l\'Ethique, soutient que la liberte est une illusion nee de l\'ignorance des causes qui nous determinent.' },
                    { question: 'L\'autonomie chez Kant signifie :', options: ['Faire ce que l\'on veut', 'Se donner a soi-meme sa propre loi morale', 'Obeir aux lois de l\'Etat', 'Suivre ses inclinations'], correctIndex: 1, explanation: 'L\'autonomie kantienne est la capacite de la raison pratique a legiferer par elle-meme, independamment des desirs sensibles.' },
                    { question: 'Selon Rousseau, la liberte civile est :', options: ['Inferieure a la liberte naturelle', 'L\'obeissance a la loi qu\'on s\'est prescrite', 'L\'absence totale de contraintes', 'Un concept impossible a realiser'], correctIndex: 1, explanation: 'Rousseau distingue liberte naturelle (illimitee mais precaire) et liberte civile (bornee par la volonte generale mais authentique).' },
                    { question: 'L\'alienation chez Marx designe :', options: ['La folie', 'La perte de liberte du travailleur dans le capitalisme', 'Le contrat social', 'L\'autonomie morale'], correctIndex: 1, explanation: 'Marx decrit l\'alienation comme le processus par lequel le travailleur devient etranger au produit de son travail et a lui-meme.' },
                    { question: '"L\'homme est condamne a etre libre" est une formule de :', options: ['Camus', 'Rousseau', 'Sartre', 'Spinoza'], correctIndex: 2, explanation: 'Sartre affirme dans L\'existentialisme est un humanisme (1946) que l\'homme ne peut pas ne pas choisir, meme refuser de choisir est un choix.' },
                    { question: 'Le compatibilisme soutient que :', options: ['La liberte n\'existe pas', 'Liberte et determinisme sont inconciliables', 'Liberte et determinisme peuvent coexister', 'Seul le determinisme est vrai'], correctIndex: 2, explanation: 'Les compatibilistes (Hume, Leibniz) affirment qu\'on peut etre libre tout en etant determine, car la liberte est l\'absence de contrainte exterieure.' },
                    { question: 'Pour Hobbes, la liberte reside dans :', options: ['La volonte generale', 'Le silence de la loi', 'L\'imperatif categorique', 'La vertu morale'], correctIndex: 1, explanation: 'Hobbes definit la liberte comme l\'absence d\'obstacles. En politique, tout ce que la loi n\'interdit pas est permis.' },
                    { question: 'Epictete distingue :', options: ['L\'ame et le corps', 'Ce qui depend de nous et ce qui n\'en depend pas', 'Le beau et le laid', 'Le vrai et le faux'], correctIndex: 1, explanation: 'Epictete, dans le Manuel, fonde la liberte stoicienne sur la distinction entre ce qui est en notre pouvoir (nos jugements) et ce qui ne l\'est pas.' },
                    { question: 'La mauvaise foi selon Sartre consiste a :', options: ['Mentir aux autres', 'Nier sa propre liberte pour fuir l\'angoisse', 'Desobeir a la loi', 'Agir par instinct'], correctIndex: 1, explanation: 'La mauvaise foi est une attitude par laquelle on se ment a soi-meme en pretendant ne pas etre libre afin d\'eviter la responsabilite.' },
                    { question: 'Quel droit naturel Locke considere-t-il comme fondamental ?', options: ['Le droit au bonheur', 'Le droit a la vie, a la liberte et a la propriete', 'Le droit a l\'egalite absolue', 'Le droit au travail'], correctIndex: 1, explanation: 'Locke fonde la legitimite de l\'Etat sur la protection des droits naturels : vie, liberte et propriete (Second traite du gouvernement civil, 1690).' }
                ]
            },
            {
                id: 'conscience',
                title: 'La Conscience',
                icon: '\uD83E\uDDE0',
                content: '<h3>La conscience reflexive</h3>'
                    + '<ul>'
                    + '<li><strong>Descartes</strong> : la conscience est transparente a elle-meme — par le Cogito, le sujet se saisit comme chose pensante avec une certitude absolue</li>'
                    + '<li><strong>Locke</strong> : la conscience est ce qui fonde l\'identite personnelle — c\'est par la memoire que nous restons le meme individu a travers le temps</li>'
                    + '<li><strong>Leibniz</strong> : il existe des "petites perceptions" dont nous n\'avons pas conscience, ce qui relativise la transparence du sujet a lui-meme</li>'
                    + '</ul>'
                    + '<h3>L\'inconscient et ses enjeux</h3>'
                    + '<ul>'
                    + '<li><strong>Freud</strong> : l\'inconscient est un systeme psychique actif, compose de pulsions refoulees — le moi n\'est pas maitre en sa propre maison</li>'
                    + '<li><strong>Le refoulement</strong> : mecanisme par lequel des representations incompatibles avec le moi sont repoussees dans l\'inconscient</li>'
                    + '<li><strong>Les trois instances</strong> : le Ca (pulsions), le Moi (mediateur) et le Surmoi (interiorisation des interdits sociaux et parentaux)</li>'
                    + '</ul>'
                    + '<h3>Conscience morale, mauvaise foi et intentionnalite</h3>'
                    + '<ul>'
                    + '<li><strong>La conscience morale</strong> : capacite de juger le bien et le mal — Rousseau la considere comme un "instinct divin", Kant la fonde sur la raison</li>'
                    + '<li><strong>Sartre et la mauvaise foi</strong> : la conscience est toujours libre, mais l\'homme peut se mentir a lui-meme en niant cette liberte</li>'
                    + '<li><strong>Husserl et l\'intentionnalite</strong> : toute conscience est conscience de quelque chose — la conscience est toujours dirigee vers un objet</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'Qu\'est-ce que la conscience reflexive ?', answer: 'La capacite de l\'esprit a se prendre lui-meme pour objet, a savoir qu\'il pense. C\'est le retour du sujet sur lui-meme ("je sais que je sais").' },
                    { question: 'Quel role joue le Cogito chez Descartes ?', answer: 'Le Cogito ("Je pense, donc je suis") etablit que la conscience de soi est la premiere certitude indubitable, fondement de toute connaissance.' },
                    { question: 'Comment Locke definit-il l\'identite personnelle ?', answer: 'L\'identite personnelle repose sur la conscience et la memoire : je suis la meme personne parce que j\'ai conscience de mes experiences passees.' },
                    { question: 'Que sont les "petites perceptions" de Leibniz ?', answer: 'Des perceptions si faibles qu\'elles ne parviennent pas a la conscience. Elles montrent que notre vie psychique deborde largement la conscience claire.' },
                    { question: 'Qu\'est-ce que l\'inconscient selon Freud ?', answer: 'Un systeme psychique actif contenant des representations, des desirs et des pulsions refoulees qui influencent nos pensees et nos comportements a notre insu.' },
                    { question: 'Qu\'est-ce que le refoulement ?', answer: 'Un mecanisme de defense par lequel le moi repousse dans l\'inconscient des representations (souvenirs, desirs) jugees inacceptables ou douloureuses.' },
                    { question: 'Quelles sont les trois instances de l\'appareil psychique freudien ?', answer: 'Le Ca (reservoir des pulsions, regi par le principe de plaisir), le Moi (mediateur avec la realite) et le Surmoi (interiorisation des interdits et de la morale).' },
                    { question: 'Que signifie "le moi n\'est pas maitre en sa propre maison" (Freud) ?', answer: 'La conscience ne controle pas la totalite de la vie psychique. L\'inconscient exerce une influence determinante sur nos pensees, nos actes et nos reves.' },
                    { question: 'Qu\'est-ce que l\'intentionnalite de la conscience (Husserl) ?', answer: 'Le fait que toute conscience est toujours "conscience de quelque chose". La conscience n\'est jamais vide, elle est toujours dirigee vers un objet (reel ou imaginaire).' },
                    { question: 'Qu\'est-ce que la mauvaise foi chez Sartre ?', answer: 'Une attitude par laquelle la conscience se ment a elle-meme, niant sa propre liberte en se pretendant determinee par les circonstances ou par une "nature".' },
                    { question: 'Comment Rousseau concoit-il la conscience morale ?', answer: 'Comme un "instinct divin", un sentiment interieur inne qui nous permet de distinguer spontanement le bien du mal, avant toute reflexion rationnelle.' },
                    { question: 'Comment Kant fonde-t-il la conscience morale ?', answer: 'Sur la raison pratique : la conscience morale est la voix de la raison qui nous ordonne d\'agir par devoir, selon l\'imperatif categorique.' },
                    { question: 'Qu\'est-ce que l\'epoche chez Husserl ?', answer: 'La mise entre parentheses de tous les prejuges et de la croyance en l\'existence du monde exterieur pour decrire les phenomenes tels qu\'ils apparaissent a la conscience.' },
                    { question: 'Quelle objection Sartre adresse-t-il a Freud ?', answer: 'Sartre refuse l\'inconscient freudien car il faudrait une conscience qui sache ce qu\'elle refoule pour le refouler. Il lui substitue la notion de mauvaise foi.' },
                    { question: 'Qu\'est-ce que la conscience immediate (ou directe) ?', answer: 'La simple presence de l\'esprit a ce qu\'il eprouve, sans retour reflexif. Sentir une douleur, percevoir une couleur, avant d\'en faire l\'objet d\'une analyse.' },
                    { question: 'La conscience est-elle un obstacle ou une condition du bonheur ?', answer: 'Obstacle : la conscience nous fait voir nos limites et notre mortalite (Pascal : "roseau pensant"). Condition : sans conscience, pas de plaisir ni de sens. Astuce Bac : sujet frequent — opposer conscience-souffrance (Pascal) et conscience-liberte (Sartre).' },
                    { question: 'Suis-je ce que j\'ai conscience d\'etre ?', answer: 'Descartes : oui, la conscience est transparente. Freud : non, l\'inconscient me determine a mon insu. Sartre : je suis ce que je fais, pas ce que je crois etre (mauvaise foi). Astuce Bac : sujet type — plan : oui (Descartes) / non (Freud) / je me construis par mes actes (Sartre).' }
                ],
                quiz: [
                    { question: 'Pour Descartes, la premiere certitude est :', options: ['L\'existence de Dieu', 'L\'existence du monde', 'Le Cogito (je pense, donc je suis)', 'L\'evidence sensorielle'], correctIndex: 2, explanation: 'Apres le doute methodique, Descartes etablit que le fait meme de penser prouve l\'existence du sujet pensant.' },
                    { question: 'L\'identite personnelle repose sur la memoire selon :', options: ['Descartes', 'Locke', 'Hume', 'Husserl'], correctIndex: 1, explanation: 'Locke, dans l\'Essai sur l\'entendement humain, fonde l\'identite personnelle sur la continuite de la conscience a travers la memoire.' },
                    { question: 'Le Ca, le Moi et le Surmoi sont des concepts de :', options: ['Jung', 'Lacan', 'Freud', 'Sartre'], correctIndex: 2, explanation: 'Freud elabore la seconde topique de l\'appareil psychique avec ces trois instances dans Le Moi et le Ca (1923).' },
                    { question: 'L\'intentionnalite de la conscience signifie que :', options: ['La conscience a toujours une intention morale', 'Toute conscience est conscience de quelque chose', 'La conscience est volontaire', 'La conscience est toujours rationnelle'], correctIndex: 1, explanation: 'Husserl reprend ce concept de Brentano : la conscience est toujours dirigee vers un objet, elle n\'est jamais vide.' },
                    { question: 'Sartre refuse l\'inconscient freudien et lui substitue :', options: ['Le Surmoi', 'L\'intentionnalite', 'La mauvaise foi', 'Les petites perceptions'], correctIndex: 2, explanation: 'Sartre considere que l\'homme est toujours conscient et responsable : ce que Freud nomme inconscient est une fuite devant la liberte (mauvaise foi).' },
                    { question: 'Les "petites perceptions" sont un concept de :', options: ['Hume', 'Leibniz', 'Locke', 'Freud'], correctIndex: 1, explanation: 'Leibniz, dans les Nouveaux essais sur l\'entendement humain, introduit l\'idee de perceptions trop faibles pour acceder a la conscience.' },
                    { question: 'La conscience morale est un "instinct divin" selon :', options: ['Kant', 'Freud', 'Rousseau', 'Nietzsche'], correctIndex: 2, explanation: 'Dans Emile ou De l\'education, Rousseau decrit la conscience morale comme un guide interieur naturel et infaillible.' },
                    { question: 'Que designe le refoulement chez Freud ?', options: ['L\'oubli volontaire', 'Le rejet dans l\'inconscient de representations inacceptables', 'La perte de memoire', 'La negation rationnelle'], correctIndex: 1, explanation: 'Le refoulement est un mecanisme inconscient de defense qui ecarte les contenus psychiques inacceptables de la conscience.' },
                    { question: 'L\'epoche phenomenologique consiste a :', options: ['Douter de tout', 'Suspendre les prejuges pour decrire les phenomenes', 'Prouver l\'existence de Dieu', 'Analyser les reves'], correctIndex: 1, explanation: 'L\'epoche (ou reduction phenomenologique) met entre parentheses la "these du monde" pour revenir aux phenomenes tels qu\'ils se donnent a la conscience.' },
                    { question: 'Quel est le principe de plaisir selon Freud ?', options: ['La recherche du bonheur moral', 'La tendance du Ca a satisfaire immediatement les pulsions', 'La quete de sagesse', 'L\'obeissance au Surmoi'], correctIndex: 1, explanation: 'Le principe de plaisir regit le Ca : il pousse a la satisfaction immediate des pulsions, sans egard pour la realite ou la morale.' }
                ]
            },
            {
                id: 'art',
                title: 'L\'Art',
                icon: '\uD83C\uDFA8',
                content: '<h3>Mimesis : l\'art comme imitation</h3>'
                    + '<ul>'
                    + '<li><strong>Platon</strong> : l\'art est une imitation (mimesis) de la realite sensible, qui est elle-meme une copie du monde des Idees — l\'art est donc "copie de copie", eloigne de la verite</li>'
                    + '<li><strong>Aristote</strong> : la mimesis est positive — l\'art imite non pas ce qui est mais ce qui pourrait etre ; la tragedie produit une catharsis (purification des passions)</li>'
                    + '<li><strong>Au-dela de l\'imitation</strong> : l\'art moderne rompt avec la mimesis pour explorer l\'abstraction, l\'expression et la creation pure</li>'
                    + '</ul>'
                    + '<h3>Genie, creation et technique</h3>'
                    + '<ul>'
                    + '<li><strong>Kant</strong> : le genie est un "talent naturel" qui donne ses regles a l\'art — il produit des oeuvres originales sans pouvoir expliquer comment</li>'
                    + '<li><strong>Technique et art</strong> : en grec, "techne" designe a la fois l\'art et la technique — l\'artiste est aussi un artisan qui maitrise un savoir-faire</li>'
                    + '<li><strong>Creation et inspiration</strong> : tension entre la part de travail methodique et la part d\'inspiration spontanee dans la creation artistique</li>'
                    + '</ul>'
                    + '<h3>Art, verite et esthetique</h3>'
                    + '<ul>'
                    + '<li><strong>Hegel</strong> : l\'art est une manifestation sensible de l\'Idee — il revele une verite spirituelle sous forme concrete, mais sera depasse par la religion puis la philosophie</li>'
                    + '<li><strong>Heidegger</strong> : l\'oeuvre d\'art "met en oeuvre la verite" — elle ouvre un monde et revele l\'etre des choses (exemple : les souliers de Van Gogh)</li>'
                    + '<li><strong>Le jugement esthetique (Kant)</strong> : le beau plait universellement sans concept — c\'est un jugement desinteresse, distinct de l\'agreable et de l\'utile</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'C\'est quoi la mimesis chez Platon ?', answer: 'Pour Platon, l\'art c\'est juste une COPIE. Imagine 3 niveaux : 1) Le monde des Idees = la verite parfaite (ex : l\'idee parfaite d\'une chaise). 2) Le monde reel = une copie de cette idee (la vraie chaise dans ta maison). 3) L\'art = une copie DE la copie (un dessin de la chaise). En gros : l\'art est au 3eme rang, tres loin de la verite. C\'est pour ca que Platon se mefie des artistes. Mots difficiles : "mimesis" = imitation en grec. "monde sensible" = le monde qu\'on voit et touche. "monde des Idees" = le monde parfait et invisible selon Platon.' },
                    { question: 'Comment Aristote rehabilite-t-il la mimesis ?', answer: 'L\'imitation artistique est positive : elle represente non ce qui est mais ce qui pourrait etre. La tragedie produit une catharsis (purification des passions) chez le spectateur.' },
                    { question: 'Qu\'est-ce que la catharsis chez Aristote ?', answer: 'La purification des passions (pitie et crainte) que produit la tragedie chez le spectateur. En eprouvant ces emotions de maniere esthetique, le spectateur s\'en libere.' },
                    { question: 'Comment Kant definit-il le genie ?', answer: 'Le genie est un talent inne (don de la nature) qui donne ses regles a l\'art. Il produit des oeuvres originales et exemplaires sans pouvoir expliquer rationnellement son processus.' },
                    { question: 'Qu\'est-ce que le jugement esthetique selon Kant ?', answer: 'Un jugement desinteresse et universel sans concept : le beau plait universellement. Il se distingue de l\'agreable (subjectif) et du bon (lie a un concept).' },
                    { question: 'Que signifie "le beau plait universellement sans concept" (Kant) ?', answer: 'Le jugement de gout pretend a l\'universalite (chacun devrait le partager) mais ne repose pas sur un concept determinant. C\'est un accord libre entre imagination et entendement.' },
                    { question: 'Quel role l\'art joue-t-il chez Hegel ?', answer: 'L\'art est la premiere forme de manifestation de l\'Esprit absolu : il revele l\'Idee sous forme sensible. Mais il sera depasse par la religion puis la philosophie.' },
                    { question: 'Qu\'est-ce que la "mort de l\'art" chez Hegel ?', answer: 'Non pas la fin de la production artistique, mais l\'idee que l\'art ne peut plus etre la forme supreme d\'expression de la verite. La philosophie prend le relais.' },
                    { question: 'Comment Heidegger pense-t-il l\'oeuvre d\'art ?', answer: 'L\'oeuvre d\'art "met en oeuvre la verite" : elle ouvre un monde de sens et revele l\'etre des choses. Elle n\'est pas simple decoration mais devoilement.' },
                    { question: 'Quel est le lien entre techne et art en grec ancien ?', answer: 'En grec, "techne" designe a la fois l\'art et la technique. L\'artiste est un artisan qui maitrise un savoir-faire. La distinction art/technique est moderne.' },
                    { question: 'Pourquoi Platon se mefie des artistes ?', answer: 'Pour 2 raisons : 1) Les artistes fabriquent des ILLUSIONS. Un tableau de pomme, c\'est pas une vraie pomme — c\'est du faux. 2) L\'art joue avec les EMOTIONS au lieu de faire reflechir. Ca eloigne les gens de la verite. Il va meme jusqu\'a dire qu\'il faut virer les poetes de la societe (dans La Republique). En gros : Platon dit que l\'art ment et manipule les gens.' },
                    { question: 'Qu\'est-ce que le sublime selon Kant ?', answer: 'Un sentiment mixte de plaisir et d\'effroi face a ce qui depasse notre imagination (l\'infiniment grand, l\'infiniment puissant). Il revele la grandeur de notre raison face a la nature.' },
                    { question: 'Quelle est la difference entre l\'agreable et le beau chez Kant ?', answer: 'L\'agreable est subjectif et lie aux sens (chacun ses gouts). Le beau pretend a l\'universalite et suppose un jugement desinteresse, libre de tout interet personnel.' },
                    { question: 'Qu\'est-ce que l\'art abstrait remet en cause ?', answer: 'La conception de l\'art comme mimesis (imitation de la realite). L\'art abstrait affirme que l\'art peut creer des formes pures sans representer le monde visible.' },
                    { question: 'Quelle est la these de Nietzsche sur l\'art ?', answer: 'L\'art est la plus haute activite humaine, superieure a la science et a la morale. Il affirme la vie et la transfigure. "L\'art est le grand stimulant de la vie."' },
                    { question: 'L\'art doit-il imiter la nature ?', answer: 'Trois reponses possibles : 1) OUI selon Platon — mais c\'est un probleme car l\'art ne sera jamais qu\'une copie (un dessin de pomme reste moins vrai qu\'une vraie pomme). 2) NON selon Hegel — l\'art va PLUS LOIN que la nature, il montre des choses invisibles. 3) L\'art cree ses propres formes — l\'art abstrait ne copie rien du tout. En gros : au Bac, fais un plan en 3 parties = oui (copie) / non (creation) / depassement (l\'art montre ce que la nature cache).' },
                    { question: 'A quoi sert l\'art ?', answer: 'Kant : a rien (beaute desinteressee). Hegel : reveler la verite. Nietzsche : affirmer la vie. Sartre : l\'art engage politiquement. Ex : Guernica de Picasso = denonciation. Astuce Bac : ne JAMAIS dire "l\'art ne sert a rien" — dire "l\'art est desinteresse" (nuance Kant).' }
                ],
                quiz: [
                    { question: 'Pour Platon, l\'art est :', options: ['Un acces direct aux Idees', 'Une copie de copie, eloignee de la verite', 'La forme supreme de connaissance', 'Un pur divertissement'], correctIndex: 1, explanation: 'Platon considere l\'art comme une imitation du monde sensible, lui-meme imitation du monde des Idees : l\'art est donc au troisieme rang.' },
                    { question: 'La catharsis est un concept de :', options: ['Platon', 'Aristote', 'Kant', 'Hegel'], correctIndex: 1, explanation: 'Aristote, dans la Poetique, definit la catharsis comme la purification des passions (pitie et crainte) produite par la tragedie.' },
                    { question: 'Selon Kant, le genie :', options: ['Suit des regles preetablies', 'Donne ses regles a l\'art par un talent naturel', 'Imite les anciens maitres', 'N\'a pas besoin de technique'], correctIndex: 1, explanation: 'Kant definit le genie dans la Critique de la faculte de juger comme un don de la nature qui produit des oeuvres originales et exemplaires.' },
                    { question: 'Le jugement esthetique chez Kant est :', options: ['Subjectif et relatif', 'Universel et fonde sur un concept', 'Desinteresse et universel sans concept', 'Uniquement sensoriel'], correctIndex: 2, explanation: 'Le beau plait universellement sans concept : c\'est un jugement reflexif, desinteresse, fonde sur le libre jeu de l\'imagination et de l\'entendement.' },
                    { question: 'Pour Hegel, l\'art est depasse par :', options: ['La technique', 'La politique', 'La religion puis la philosophie', 'La science'], correctIndex: 2, explanation: 'Dans l\'Esthetique, Hegel montre que l\'Esprit s\'exprime d\'abord par l\'art, puis par la religion, et enfin pleinement par la philosophie.' },
                    { question: 'Heidegger pense que l\'oeuvre d\'art :', options: ['Decore l\'existence', 'Met en oeuvre la verite', 'Imite la nature', 'Exprime des emotions privees'], correctIndex: 1, explanation: 'Dans L\'Origine de l\'oeuvre d\'art, Heidegger affirme que l\'oeuvre devoile la verite de l\'etant en ouvrant un monde.' },
                    { question: 'En grec, "techne" designe :', options: ['Uniquement la science', 'A la fois l\'art et la technique', 'La philosophie', 'La politique'], correctIndex: 1, explanation: 'La techne grecque ne distingue pas art et artisanat : tout savoir-faire productif est une techne, de la sculpture a la menuiserie.' },
                    { question: 'Platon propose de bannir les poetes de la cite parce que :', options: ['Ils sont inutiles', 'Ils produisent des illusions et flattent les passions', 'Ils coutent trop cher', 'Ils concurrencent les philosophes'], correctIndex: 1, explanation: 'Dans la Republique (livre X), Platon reproche aux poetes de produire des imitations trompeuses et de corrompre les ames en excitant les passions.' },
                    { question: 'Le sublime chez Kant est :', options: ['La beaute parfaite', 'Un sentiment de plaisir et d\'effroi face a la demesure', 'Un concept religieux', 'Une qualite objective de l\'oeuvre'], correctIndex: 1, explanation: 'Le sublime est le sentiment ambivalent eprouve face a ce qui depasse notre imagination (tempete, montagne). Il revele la superiorite de notre raison.' },
                    { question: 'Nietzsche voit dans l\'art :', options: ['Une illusion a depasser', 'Le grand stimulant de la vie', 'Un simple loisir', 'Une imitation de la nature'], correctIndex: 1, explanation: 'Pour Nietzsche, l\'art transfigure la vie et l\'affirme. C\'est la plus haute activite metaphysique de l\'homme.' }
                ]
            },
            {
                id: 'bonheur',
                title: 'Le Bonheur',
                icon: '\u2600\uFE0F',
                content: '<h3>Eudemonisme et hedonisme</h3>'
                    + '<ul>'
                    + '<li><strong>Aristote (eudemonisme)</strong> : le bonheur (eudaimonia) est le souverain bien, la fin ultime de toute action humaine — il s\'atteint par la pratique des vertus et l\'activite conforme a la raison</li>'
                    + '<li><strong>Epicure (hedonisme)</strong> : le bonheur est l\'absence de trouble de l\'ame (ataraxie) et du corps (aponie) — distinguer desirs naturels et necessaires des desirs vains</li>'
                    + '<li><strong>Utilitarisme (Bentham, Mill)</strong> : le bonheur se mesure quantitativement (Bentham) ou qualitativement (Mill) — maximiser le plaisir et minimiser la souffrance</li>'
                    + '</ul>'
                    + '<h3>Le stoicisme : bonheur et acceptation</h3>'
                    + '<ul>'
                    + '<li><strong>Epictete</strong> : le bonheur vient de la distinction entre ce qui depend de nous (nos jugements) et ce qui n\'en depend pas (les evenements) — ne desirer que ce qui depend de nous</li>'
                    + '<li><strong>Marc-Aurele</strong> : l\'exercice quotidien de la sagesse, l\'acceptation de l\'ordre du monde (amor fati) et le controle de ses representations</li>'
                    + '<li><strong>Seneque</strong> : la brievete de la vie n\'est qu\'apparente — c\'est l\'usage que nous en faisons qui la rend longue ou courte</li>'
                    + '</ul>'
                    + '<h3>Bonheur, devoir et souffrance</h3>'
                    + '<ul>'
                    + '<li><strong>Kant</strong> : le bonheur ne peut pas etre le fondement de la morale — agir par devoir peut contredire la recherche du bonheur ; se rendre digne du bonheur est plus important que le bonheur lui-meme</li>'
                    + '<li><strong>Schopenhauer</strong> : la vie est fondamentalement souffrance, car le desir (volonte) est insatiable — seuls l\'art et la compassion offrent un repit temporaire</li>'
                    + '<li><strong>Pascal</strong> : l\'homme fuit le bonheur veritable dans le divertissement — sans divertissement, il fait face a sa misere et a sa finitude</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'Qu\'est-ce que l\'eudemonisme ?', answer: 'La doctrine qui fait du bonheur (eudaimonia) le but supreme de la vie humaine. Aristote en est le representant principal : le bonheur est l\'activite de l\'ame conforme a la vertu.' },
                    { question: 'Comment Aristote definit-il le bonheur ?', answer: 'Le bonheur (eudaimonia) est le souverain bien, fin ultime de toute action. Il consiste dans l\'activite de l\'ame conforme a la vertu, et plus precisement dans la vie contemplative.' },
                    { question: 'Qu\'est-ce que l\'ataraxie chez Epicure ?', answer: 'L\'absence de trouble de l\'ame, l\'etat de serenite atteint en satisfaisant seulement les desirs naturels et necessaires et en eliminant les craintes infondees.' },
                    { question: 'Comment Epicure classe-t-il les desirs ?', answer: 'En trois categories : (1) naturels et necessaires (manger, boire), (2) naturels mais non necessaires (mets raffines), (3) ni naturels ni necessaires (gloire, richesse). Seuls les premiers sont a satisfaire.' },
                    { question: 'Qu\'est-ce que l\'aponie chez Epicure ?', answer: 'L\'absence de douleur corporelle. Avec l\'ataraxie (absence de trouble de l\'ame), elle constitue le bonheur epicurien, un etat de plaisir stable et durable.' },
                    { question: 'Comment Epictete definit-il le chemin vers le bonheur ?', answer: 'En distinguant ce qui depend de nous (nos jugements, nos desirs, nos actes) de ce qui n\'en depend pas (la maladie, la mort, les evenements). Le bonheur vient de ne desirer que ce qui depend de nous.' },
                    { question: 'Qu\'est-ce que l\'amor fati chez les stoiciens ?', answer: 'L\'amour du destin : accepter et meme vouloir tout ce qui arrive, car tout fait partie de l\'ordre rationnel du monde (le logos cosmique).' },
                    { question: 'Comment Marc-Aurele pratique-t-il la sagesse stoicienne ?', answer: 'Par l\'exercice quotidien : examen de conscience, controle de ses representations, acceptation des evenements, rappel de la mortalite, bienveillance envers autrui.' },
                    { question: 'Pourquoi Kant refuse-t-il de fonder la morale sur le bonheur ?', answer: 'Parce que le bonheur est empirique, subjectif et contingent. La morale doit reposer sur la raison et le devoir (universel). Se rendre digne du bonheur importe plus que le bonheur lui-meme.' },
                    { question: 'Quelle est la vision de Schopenhauer sur le bonheur ?', answer: 'Le bonheur au sens positif est impossible. La vie est dominee par la volonte (desir insatiable) qui engendre la souffrance. Le bonheur n\'est que cessation temporaire de la douleur.' },
                    { question: 'Quels remedes Schopenhauer propose-t-il contre la souffrance ?', answer: 'La contemplation esthetique (l\'art suspend momentanement la volonte), la compassion (ouverture a autrui) et l\'ascetisme (negation de la volonte de vivre).' },
                    { question: 'Qu\'est-ce que le divertissement chez Pascal ?', answer: 'Toute activite qui detourne l\'homme de la pensee de sa condition miserable et de sa mortalite. Le divertissement masque le vide existentiel mais n\'apporte pas le vrai bonheur.' },
                    { question: 'Quelle difference entre plaisir et bonheur ?', answer: 'Le plaisir est un etat passager et ponctuel lie a une sensation. Le bonheur est un etat durable et global de satisfaction de l\'existence dans son ensemble.' },
                    { question: 'Comment Mill distingue-t-il les plaisirs ?', answer: 'Mill introduit une distinction qualitative : les plaisirs de l\'esprit (intellectuels, esthetiques) sont superieurs aux plaisirs du corps. "Mieux vaut etre Socrate insatisfait qu\'un imbecile satisfait."' },
                    { question: 'Qu\'est-ce que le souverain bien chez Aristote ?', answer: 'Le bien supreme que l\'on recherche pour lui-meme et jamais en vue d\'autre chose. C\'est le bonheur (eudaimonia), qui est la fin derniere de toute action humaine.' },
                    { question: 'Le bonheur depend-il de nous ?', answer: 'Epicure/stoiciens : oui, en limitant ses desirs au necessaire. Kant : le bonheur ne depend pas de nous (contingent), seule la morale depend de nous. Schopenhauer : non, le desir condamne a souffrir. Astuce Bac : opposer volontarisme (stoicien) et pessimisme (Schopenhauer), synthese par Kant.' },
                    { question: 'Faut-il chercher le bonheur ?', answer: 'Aristote : oui, c\'est la fin naturelle de l\'homme (eudaimonia). Kant : non, le devoir prime — chercher le bonheur rend la morale contingente. Pascal : le vrai bonheur n\'est pas ici-bas (divertissement = fuite). Astuce Bac : sujet classique — plan : oui (Aristote) / non (Kant) / synthese (bonheur = consequence de la vertu).' }
                ],
                quiz: [
                    { question: 'L\'eudaimonia est un concept central chez :', options: ['Epicure', 'Aristote', 'Kant', 'Schopenhauer'], correctIndex: 1, explanation: 'Aristote fait de l\'eudaimonia (bonheur-epanouissement) le souverain bien dans l\'Ethique a Nicomaque.' },
                    { question: 'L\'ataraxie designe :', options: ['L\'absence de douleur corporelle', 'L\'absence de trouble de l\'ame', 'Le plaisir intense', 'La vertu morale'], correctIndex: 1, explanation: 'L\'ataraxie est l\'ideal epicurien : un etat de tranquillite et de serenite de l\'ame, obtenu par la maitrise des desirs.' },
                    { question: 'Pour Epictete, le bonheur depend de :', options: ['La richesse materielle', 'La distinction entre ce qui depend de nous et ce qui n\'en depend pas', 'La satisfaction de tous les desirs', 'La connaissance scientifique'], correctIndex: 1, explanation: 'Epictete, dans le Manuel, fonde la sagesse stoicienne sur cette distinction fondamentale : ne desirer que ce qui est en notre pouvoir.' },
                    { question: 'Kant considere que la morale doit se fonder sur :', options: ['Le bonheur', 'Le plaisir', 'Le devoir', 'L\'interet personnel'], correctIndex: 2, explanation: 'Kant refuse de fonder la morale sur le bonheur (trop subjectif) et la fonde sur le devoir et l\'imperatif categorique.' },
                    { question: 'Pour Schopenhauer, la source de la souffrance est :', options: ['L\'ignorance', 'La societe', 'La volonte (desir insatiable)', 'Le peche originel'], correctIndex: 2, explanation: 'Schopenhauer, dans Le Monde comme volonte et comme representation, identifie la volonte comme force aveugle et insatiable, source de toute souffrance.' },
                    { question: 'Le divertissement chez Pascal designe :', options: ['Le bonheur veritable', 'Ce qui detourne l\'homme de penser a sa condition', 'L\'activite artistique', 'Le plaisir epicurien'], correctIndex: 1, explanation: 'Pascal, dans les Pensees, montre que l\'homme fuit dans le divertissement pour ne pas affronter sa misere et sa mortalite.' },
                    { question: 'Epicure classe les desirs vains comme :', options: ['Naturels et necessaires', 'Naturels mais non necessaires', 'Ni naturels ni necessaires', 'Surnaturels'], correctIndex: 2, explanation: 'Les desirs vains (gloire, richesse, pouvoir) ne sont ni naturels ni necessaires. Ils engendrent trouble et insatisfaction.' },
                    { question: 'Mill distingue les plaisirs par :', options: ['Leur duree uniquement', 'Leur intensite uniquement', 'Leur qualite (superiorite des plaisirs intellectuels)', 'Leur cout economique'], correctIndex: 2, explanation: 'Contrairement a Bentham (quantitatif), Mill introduit une hierarchie qualitative des plaisirs dans L\'utilitarisme.' },
                    { question: 'L\'amor fati est un concept des :', options: ['Epicuriens', 'Stoiciens', 'Cyniques', 'Sceptiques'], correctIndex: 1, explanation: 'L\'amor fati (amour du destin) est une attitude stoicienne : accepter et vouloir ce qui arrive comme expression de l\'ordre rationnel du cosmos.' },
                    { question: 'Selon Aristote, le bonheur s\'atteint par :', options: ['Le plaisir des sens', 'L\'accumulation de richesses', 'La pratique des vertus et la vie contemplative', 'L\'absence de desirs'], correctIndex: 2, explanation: 'Aristote definit le bonheur comme activite de l\'ame conforme a la vertu, avec la vie contemplative (theoria) comme forme la plus haute.' }
                ]
            },
            {
                id: 'devoir',
                title: 'Le Devoir',
                icon: '\u2696\uFE0F',
                content: '<h3>L\'imperatif categorique et la morale du devoir</h3>'
                    + '<ul>'
                    + '<li><strong>Kant</strong> : le devoir est un commandement inconditionnel de la raison — "Agis uniquement d\'apres la maxime qui fait que tu peux vouloir en meme temps qu\'elle devienne une loi universelle"</li>'
                    + '<li><strong>Agir par devoir vs conformement au devoir</strong> : une action n\'a de valeur morale que si elle est accomplie par devoir (par respect pour la loi morale), et non par interet ou inclination</li>'
                    + '<li><strong>La bonne volonte</strong> : seule la bonne volonte (volonte d\'agir par devoir) est bonne sans restriction — ni le talent, ni le bonheur, ni l\'intelligence ne sont moraux en eux-memes</li>'
                    + '</ul>'
                    + '<h3>Devoir, inclination et objection de conscience</h3>'
                    + '<ul>'
                    + '<li><strong>Devoir et inclination</strong> : le devoir s\'oppose souvent aux desirs naturels — c\'est precisement dans cette tension que se revele la valeur morale de l\'agent</li>'
                    + '<li><strong>L\'objection de conscience</strong> : refuser d\'obeir a une loi ou un ordre que l\'on juge injuste au nom de sa conscience morale (Antigone, Thoreau, Martin Luther King)</li>'
                    + '<li><strong>Desobeissance civile</strong> (Thoreau) : un citoyen a le droit et le devoir de desobeir a des lois injustes, de maniere non-violente et publique</li>'
                    + '</ul>'
                    + '<h3>Dilemmes moraux et responsabilite</h3>'
                    + '<ul>'
                    + '<li><strong>Le conflit des devoirs</strong> : que faire quand deux obligations morales s\'opposent ? Kant refuse le mensonge meme pour sauver une vie ; les consequentialistes pesent les resultats</li>'
                    + '<li><strong>La responsabilite</strong> : etre responsable, c\'est repondre de ses actes devant soi-meme et devant autrui — elle presuppose la liberte et la conscience</li>'
                    + '<li><strong>Hans Jonas</strong> : le "principe responsabilite" — face aux technologies modernes, nous avons un devoir envers les generations futures et la preservation de la vie</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'Qu\'est-ce que l\'imperatif categorique de Kant ?', answer: 'Un commandement moral inconditionnel : "Agis uniquement d\'apres la maxime qui fait que tu peux vouloir en meme temps qu\'elle devienne une loi universelle." Il s\'impose a tout etre rationnel.' },
                    { question: 'Quelle difference entre agir par devoir et conformement au devoir ?', answer: 'Agir conformement au devoir, c\'est faire la bonne action mais par interet (ex: ne pas voler par peur de la prison). Agir par devoir, c\'est le faire par respect pour la loi morale.' },
                    { question: 'Qu\'est-ce que la bonne volonte selon Kant ?', answer: 'La seule chose bonne sans restriction. C\'est la volonte d\'agir par pur respect du devoir, independamment des consequences ou des inclinations.' },
                    { question: 'Pourquoi Kant oppose-t-il devoir et inclination ?', answer: 'L\'inclination (desir, penchant naturel) ne donne aucune valeur morale a l\'action. Seul le devoir confere la moralite, car il montre que l\'on agit par respect pour la loi morale et non par plaisir.' },
                    { question: 'Qu\'est-ce que l\'objection de conscience ?', answer: 'Le refus d\'obeir a un ordre ou une loi que l\'on considere comme injuste ou immoral, au nom de sa conscience morale. Ex: refus du service militaire.' },
                    { question: 'Qu\'est-ce que la desobeissance civile selon Thoreau ?', answer: 'Le droit et le devoir du citoyen de refuser d\'obeir a des lois injustes, de maniere publique, non-violente et en acceptant les consequences legales.' },
                    { question: 'Pourquoi Antigone est-elle un symbole de l\'objection de conscience ?', answer: 'Dans la tragedie de Sophocle, Antigone desobeit a la loi de Creon pour enterrer son frere, invoquant les lois divines non ecrites superieures aux lois humaines.' },
                    { question: 'Qu\'est-ce qu\'un dilemme moral ?', answer: 'Une situation ou deux obligations morales s\'opposent et ou il est impossible de satisfaire l\'une sans violer l\'autre. Ex: mentir pour sauver une vie.' },
                    { question: 'Quelle est la position de Kant sur le mensonge ?', answer: 'Kant refuse le mensonge en toute circonstance, meme pour sauver une vie. Le mensonge detruit le fondement meme de la confiance et viole l\'imperatif categorique.' },
                    { question: 'Comment les consequentialistes resolvent-ils les dilemmes moraux ?', answer: 'En evaluant les consequences : l\'action moralement correcte est celle qui produit les meilleures consequences globales (ex: mentir pour sauver une vie est justifie si cela maximise le bien).' },
                    { question: 'Qu\'est-ce que la responsabilite morale ?', answer: 'L\'obligation de repondre de ses actes devant soi-meme et devant autrui. Elle presuppose la liberte (j\'aurais pu agir autrement) et la conscience (je savais ce que je faisais).' },
                    { question: 'Qu\'est-ce que le "principe responsabilite" de Hans Jonas ?', answer: '"Agis de facon que les effets de ton action soient compatibles avec la permanence d\'une vie authentiquement humaine sur terre." Un devoir envers les generations futures.' },
                    { question: 'Quelle est la deuxieme formulation de l\'imperatif categorique ?', answer: '"Agis de telle sorte que tu traites l\'humanite, aussi bien dans ta personne que dans celle de tout autre, toujours en meme temps comme une fin, et jamais simplement comme un moyen."' },
                    { question: 'Qu\'est-ce que l\'heteronomie selon Kant ?', answer: 'Le contraire de l\'autonomie : etre determine par des causes exterieures a la raison (desirs, passions, autorite). L\'heteronomie est la soumission de la volonte a autre chose qu\'elle-meme.' },
                    { question: 'Comment Martin Luther King justifie-t-il la desobeissance civile ?', answer: 'Une loi injuste n\'est pas une loi. On a l\'obligation morale de desobeir aux lois injustes, de maniere ouverte et non-violente, en acceptant la sanction pour eveiller les consciences.' },
                    { question: 'Agir par devoir ou par interet : quelle difference ?', answer: 'Par devoir (Kant) : j\'agis parce que c\'est JUSTE, meme si ca ne m\'arrange pas. Par interet : j\'agis parce que ca me profite. Ex : rendre un portefeuille par honnetete (devoir) vs pour la recompense (interet). Astuce Bac : Kant = seule l\'intention compte, pas le resultat. Opposer a l\'utilitarisme (resultat).' },
                    { question: 'A-t-on le droit de desobeir a la loi ?', answer: 'Antigone : oui, au nom de lois divines superieures. Thoreau/MLK : oui, de maniere non-violente et en acceptant la sanction. Hobbes : non, l\'obeissance garantit la paix. Astuce Bac : sujet type — plan : non (Hobbes, ordre) / oui (conscience morale) / synthese (desobeissance civile encadree).' },
                    { question: 'Qu\'est-ce que le devoir selon Kant ?', answer: 'La necessite d\'agir par respect pour la loi morale, independamment de nos desirs. Ex : dire la verite meme quand ca nous dessert. Devoir ≠ contrainte : le devoir est choisi par la raison, pas impose de l\'exterieur. Astuce Bac : devoir = autonomie de la raison. Heteronomie = obeir par peur ou habitude.' }
                ],
                quiz: [
                    { question: 'Pour Kant, une action a une valeur morale quand elle est accomplie :', options: ['Par interet', 'Par inclination', 'Par devoir', 'Par habitude'], correctIndex: 2, explanation: 'Seule l\'action accomplie par devoir (par respect pour la loi morale) possede une valeur morale, independamment des consequences.' },
                    { question: 'La bonne volonte chez Kant est :', options: ['Le desir de bien faire', 'La seule chose bonne sans restriction', 'La volonte divine', 'Le sens commun'], correctIndex: 1, explanation: 'Kant ecrit dans les Fondements de la metaphysique des moeurs que la bonne volonte est la seule chose bonne en elle-meme, sans aucune limitation.' },
                    { question: 'L\'objection de conscience consiste a :', options: ['Obeir a toute loi sans question', 'Refuser d\'obeir a une loi jugee injuste au nom de sa conscience', 'Suivre l\'opinion de la majorite', 'Ignorer la morale'], correctIndex: 1, explanation: 'L\'objection de conscience est le refus individuel d\'obeir a un ordre ou une loi pour des raisons morales profondes.' },
                    { question: 'La desobeissance civile est theorisee par :', options: ['Kant', 'Thoreau', 'Hobbes', 'Aristote'], correctIndex: 1, explanation: 'Henry David Thoreau publie La Desobeissance civile en 1849, ou il defend le droit de refuser des lois injustes.' },
                    { question: 'Antigone desobeit a Creon au nom de :', options: ['Son interet personnel', 'Les lois divines non ecrites', 'La democratie', 'La vengeance'], correctIndex: 1, explanation: 'Antigone invoque des lois superieures, divines et eternelles, qui lui ordonnent d\'enterrer son frere malgre l\'interdit de Creon.' },
                    { question: 'Kant refuse le mensonge meme pour sauver une vie parce que :', options: ['Il manque d\'empathie', 'Le mensonge detruit le fondement de la confiance et viole l\'imperatif categorique', 'Il ne croit pas aux consequences', 'Le mensonge est un peche religieux'], correctIndex: 1, explanation: 'Kant soutient que mentir, meme pour de bonnes raisons, viole le devoir de veracite et sape la possibilite meme de la communication morale.' },
                    { question: 'Le "principe responsabilite" de Hans Jonas concerne :', options: ['La responsabilite penale', 'Le devoir envers les generations futures', 'La responsabilite parentale', 'La responsabilite financiere'], correctIndex: 1, explanation: 'Jonas formule une ethique pour l\'age technologique : nos actions doivent preserver les conditions d\'une vie humaine authentique pour les generations a venir.' },
                    { question: 'La deuxieme formulation de l\'imperatif categorique exige de :', options: ['Maximiser le bonheur', 'Traiter l\'humanite toujours aussi comme une fin, jamais simplement comme un moyen', 'Obeir aux lois de l\'Etat', 'Suivre la volonte divine'], correctIndex: 1, explanation: 'Kant affirme la dignite de toute personne : nul ne doit etre instrumentalise. Chaque etre humain est une fin en soi.' },
                    { question: 'L\'heteronomie chez Kant designe :', options: ['L\'autonomie de la raison', 'La determination de la volonte par des causes exterieures', 'La liberte politique', 'Le sens moral inne'], correctIndex: 1, explanation: 'L\'heteronomie est la soumission de la volonte a des determinations exterieures (desirs, autorite, habitude), contraire de l\'autonomie morale.' },
                    { question: 'Un dilemme moral se caracterise par :', options: ['L\'absence de choix possible', 'Le conflit entre deux obligations morales incompatibles', 'L\'indifference morale', 'L\'obeissance aveugle'], correctIndex: 1, explanation: 'Le dilemme moral surgit quand deux devoirs s\'opposent et qu\'il est impossible de les satisfaire tous les deux en meme temps.' }
                ]
            },
            {
                id: 'travail',
                title: 'Le Travail & la Technique',
                icon: '\u2699\uFE0F',
                content: '<h3>Travail, liberte et alienation</h3>'
                    + '<ul>'
                    + '<li><strong>Hegel (dialectique maitre-esclave)</strong> : c\'est par le travail que l\'esclave se libere — en transformant la matiere, il prend conscience de lui-meme et de sa puissance creatrice</li>'
                    + '<li><strong>Marx (alienation)</strong> : dans le capitalisme, le travailleur est depossede du produit de son travail, de son activite, de son essence et de ses semblables — le travail devient source de souffrance</li>'
                    + '<li><strong>La valeur du travail</strong> : le travail est-il une malediction (punition divine dans la Genese) ou une liberation (accomplissement de soi et transformation du monde) ?</li>'
                    + '</ul>'
                    + '<h3>La technique et le progres</h3>'
                    + '<ul>'
                    + '<li><strong>Le mythe de Promethee</strong> : la technique comme don divin permettant a l\'homme de compenser sa faiblesse naturelle</li>'
                    + '<li><strong>Descartes</strong> : la technique doit nous rendre "comme maitres et possesseurs de la nature" — promesse de progres et de bien-etre</li>'
                    + '<li><strong>Heidegger</strong> : la technique moderne est un "arraisonnement" (Gestell) de la nature — elle reduit le monde a un stock de ressources exploitables</li>'
                    + '</ul>'
                    + '<h3>Transhumanisme et rapport homme-nature</h3>'
                    + '<ul>'
                    + '<li><strong>Hannah Arendt</strong> : distingue le travail (necessitee biologique), l\'oeuvre (creation durable) et l\'action (engagement politique) — la societe moderne reduit tout au travail</li>'
                    + '<li><strong>Le transhumanisme</strong> : projet d\'ameliorer l\'etre humain par la technologie (genetique, IA, augmentation) — souleve des questions ethiques fondamentales</li>'
                    + '<li><strong>Hans Jonas</strong> : la puissance technologique exige une nouvelle ethique de la responsabilite envers la nature et les generations futures</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'Qu\'est-ce que la dialectique maitre-esclave chez Hegel ?', answer: 'Un moment de la Phenomenologie de l\'esprit : le maitre domine l\'esclave mais devient dependant de lui. L\'esclave, par le travail, transforme le monde et accede a la conscience de soi.' },
                    { question: 'Comment Marx definit-il l\'alienation du travail ?', answer: 'Le travailleur est etranger (1) au produit de son travail (qui appartient au capitaliste), (2) a son activite (travail force), (3) a son essence humaine, (4) aux autres hommes.' },
                    { question: 'Pourquoi Hegel voit-il le travail comme liberateur ?', answer: 'Par le travail, l\'esclave transforme la nature et y inscrit sa volonte. Il prend ainsi conscience de sa puissance creatrice et de sa liberte, contrairement au maitre qui stagne.' },
                    { question: 'Quelle est la vision du travail dans la Genese ?', answer: 'Le travail apparait comme une punition divine apres le peche originel : "Tu gagneras ton pain a la sueur de ton front." Le travail est associe a la souffrance (le mot vient de "tripalium", instrument de torture).' },
                    { question: 'Que symbolise le mythe de Promethee pour la technique ?', answer: 'Promethee vole le feu aux dieux pour le donner aux hommes. La technique est un don qui compense la faiblesse naturelle de l\'homme mais provoque la colere des dieux (danger de la demesure).' },
                    { question: 'Que signifie "maitres et possesseurs de la nature" (Descartes) ?', answer: 'Descartes, dans le Discours de la methode, voit dans la technique le moyen de dominer la nature pour ameliorer la vie humaine (medecine, agriculture, industrie).' },
                    { question: 'Qu\'est-ce que le Gestell (arraisonnement) chez Heidegger ?', answer: 'L\'essence de la technique moderne : elle "arraisonne" la nature, c\'est-a-dire qu\'elle la somme de livrer son energie et la reduit a un simple stock de ressources a exploiter.' },
                    { question: 'Comment Heidegger distingue-t-il technique ancienne et technique moderne ?', answer: 'La technique ancienne accompagne la nature (le moulin a vent utilise le vent). La technique moderne provoque et exploite la nature (la centrale extrait l\'energie du fleuve).' },
                    { question: 'Quelles sont les trois activites humaines selon Hannah Arendt ?', answer: 'Le travail (production pour la survie biologique, cycle repetitif), l\'oeuvre (fabrication d\'objets durables, monde humain) et l\'action (engagement politique, espace public).' },
                    { question: 'Qu\'est-ce que le transhumanisme ?', answer: 'Un mouvement intellectuel visant a ameliorer les capacites humaines (physiques, cognitives, emotionnelles) par les technologies (genetique, nanotechnologies, intelligence artificielle).' },
                    { question: 'Quelle critique peut-on adresser au transhumanisme ?', answer: 'Il risque de creer des inegalites entre humains augmentes et non-augmentes, de modifier la condition humaine de maniere irreversible, et de reduire l\'homme a un objet technique.' },
                    { question: 'Quel est le principe responsabilite de Jonas face a la technique ?', answer: '"Agis de facon que les effets de ton action soient compatibles avec la permanence d\'une vie authentiquement humaine sur terre." La puissance technique exige une ethique de la prudence.' },
                    { question: 'Comment Marx distingue-t-il travail concret et travail abstrait ?', answer: 'Le travail concret produit une valeur d\'usage (objet utile). Le travail abstrait produit une valeur d\'echange (mesurable en temps de travail). Le capitalisme ne retient que le travail abstrait.' },
                    { question: 'Qu\'est-ce que la plus-value chez Marx ?', answer: 'La difference entre la valeur produite par le travailleur et le salaire qu\'il recoit. Le capitaliste s\'approprie cette plus-value, ce qui constitue l\'exploitation.' },
                    { question: 'Pourquoi Arendt critique-t-elle la societe moderne du travail ?', answer: 'La societe moderne reduit toute activite au travail (production-consommation) au detriment de l\'oeuvre (creation durable) et de l\'action (politique). L\'homme devient un simple animal laborans.' }
                ],
                quiz: [
                    { question: 'Dans la dialectique maitre-esclave de Hegel, qui accede a la liberte par le travail ?', options: ['Le maitre', 'L\'esclave', 'Les deux', 'Aucun des deux'], correctIndex: 1, explanation: 'C\'est l\'esclave qui, par le travail et la transformation de la nature, prend conscience de sa puissance et accede a la liberte.' },
                    { question: 'L\'alienation chez Marx designe :', options: ['La folie', 'Le processus par lequel le travailleur est depossede de son travail et de lui-meme', 'La liberte au travail', 'L\'automatisation'], correctIndex: 1, explanation: 'Marx decrit quatre formes d\'alienation dans les Manuscrits de 1844 : alienation au produit, a l\'activite, a l\'essence humaine et aux autres.' },
                    { question: 'Le mot "travail" vient etymologiquement de :', options: ['Laborare (travailler)', 'Tripalium (instrument de torture)', 'Ergon (action)', 'Poiesis (creation)'], correctIndex: 1, explanation: 'Le tripalium est un instrument de contrainte romain, ce qui revele la dimension de souffrance et de contrainte historiquement associee au travail.' },
                    { question: 'Descartes voit dans la technique le moyen de :', options: ['Revenir a la nature', 'Devenir comme maitres et possesseurs de la nature', 'Detruire la nature', 'Contempler la nature'], correctIndex: 1, explanation: 'Dans le Discours de la methode (1637), Descartes voit dans les sciences et la technique un moyen d\'ameliorer la condition humaine.' },
                    { question: 'Le Gestell chez Heidegger signifie :', options: ['La creation artistique', 'L\'arraisonnement de la nature par la technique moderne', 'La contemplation de la nature', 'Le retour aux origines'], correctIndex: 1, explanation: 'Heidegger, dans La Question de la technique, decrit le Gestell comme l\'essence de la technique moderne qui reduit la nature a un stock exploitable.' },
                    { question: 'Hannah Arendt distingue trois activites humaines :', options: ['Penser, vouloir, juger', 'Travail, oeuvre, action', 'Science, art, religion', 'Theorie, pratique, technique'], correctIndex: 1, explanation: 'Dans Condition de l\'homme moderne, Arendt distingue le travail (survie), l\'oeuvre (fabrication) et l\'action (politique).' },
                    { question: 'Le transhumanisme vise a :', options: ['Revenir a l\'etat de nature', 'Ameliorer l\'etre humain par la technologie', 'Supprimer la technique', 'Egaliser les conditions sociales'], correctIndex: 1, explanation: 'Le transhumanisme aspire a utiliser les technologies (genetique, IA, nanotechnologies) pour augmenter les capacites humaines et depasser les limites biologiques.' },
                    { question: 'Le mythe de Promethee illustre :', options: ['La paresse humaine', 'Le don de la technique et le risque de la demesure', 'L\'inutilite de la technique', 'Le pouvoir des dieux'], correctIndex: 1, explanation: 'Promethee offre le feu (symbole de la technique) aux hommes mais est chatie par Zeus, illustrant l\'ambivalence du progres technique.' },
                    { question: 'La plus-value chez Marx est :', options: ['Le salaire du travailleur', 'La valeur ajoutee par la machine', 'La difference entre la valeur produite et le salaire verse', 'Le profit reinvesti'], correctIndex: 2, explanation: 'Marx montre dans Le Capital que le capitaliste s\'enrichit en s\'appropriant la plus-value, difference entre ce que produit le travailleur et ce qu\'il recoit.' },
                    { question: 'Pour Jonas, la technique moderne exige :', options: ['Plus de progres sans limites', 'Une nouvelle ethique de la responsabilite', 'Le retour a la technique ancienne', 'L\'abandon de toute technique'], correctIndex: 1, explanation: 'Dans Le Principe responsabilite, Jonas soutient que la puissance inedite de la technique moderne impose un devoir envers les generations futures et la nature.' },
                    { question: 'Pour Descartes, la conscience se manifeste d\'abord par :', options: ['La perception des sens', 'Le Cogito ("Je pense, donc je suis")', 'L\'emotion', 'Le langage'], correctIndex: 1, explanation: 'Descartes, dans les Meditations metaphysiques, etablit le Cogito comme premiere certitude : la conscience de penser prouve l\'existence du sujet pensant.' },
                    { question: 'Selon Freud, l\'inconscient se revele principalement par :', options: ['La raison logique', 'Les reves, les lapsus et les actes manques', 'La meditation', 'L\'education'], correctIndex: 1, explanation: 'Freud montre dans L\'Interpretation des reves que l\'inconscient s\'exprime a travers les reves, les lapsus, les actes manques et les symptomes nevrotiques.' },
                    { question: 'Pour Platon, le desir est :', options: ['Toujours positif car il pousse a agir', 'Une force irrationnelle de l\'ame qu\'il faut soumettre a la raison', 'Le fondement de la morale', 'Identique a la volonte'], correctIndex: 1, explanation: 'Dans La Republique, Platon distingue trois parties de l\'ame : le desir (epithymia) doit etre gouverne par la raison (logos) avec l\'aide du courage (thymos).' },
                    { question: 'Sartre affirme que l\'homme est "condamne a etre libre", ce qui signifie :', options: ['La liberte est une illusion', 'L\'homme ne peut pas echapper a sa liberte et a la responsabilite de ses choix', 'Seuls les hommes libres sont condamnes', 'La liberte est une punition divine'], correctIndex: 1, explanation: 'Pour Sartre, dans L\'existentialisme est un humanisme, l\'homme n\'a pas d\'essence predeterminee : il est entierement responsable de ce qu\'il se fait par ses choix.' },
                    { question: 'L\'imperatif categorique de Kant est un fondement du :', options: ['Bonheur', 'Devoir moral', 'Droit positif', 'Plaisir'], correctIndex: 1, explanation: 'Kant fonde la morale sur le devoir et l\'imperatif categorique : "Agis uniquement d\'apres la maxime qui fait que tu peux vouloir en meme temps qu\'elle devienne une loi universelle."' },
                    { question: 'Pour Epicure, le bonheur veritable consiste en :', options: ['La recherche de plaisirs intenses et varies', 'L\'ataraxie (absence de trouble) et l\'aponie (absence de douleur)', 'La richesse et la gloire', 'La vie sociale intense'], correctIndex: 1, explanation: 'Epicure, dans la Lettre a Menecee, definit le bonheur comme un etat de tranquillite obtenu en satisfaisant les seuls desirs naturels et necessaires.' },
                    { question: 'John Rawls definit la justice par :', options: ['La loi du plus fort', 'Le voile d\'ignorance et les principes d\'equite choisis rationnellement', 'La tradition et la coutume', 'L\'utilite maximale'], correctIndex: 1, explanation: 'Dans Theorie de la justice, Rawls propose l\'experience du voile d\'ignorance : des principes justes sont ceux que l\'on choisirait sans connaitre sa position sociale.' },
                    { question: 'Pour Hobbes, l\'Etat (le Leviathan) est necessaire parce que :', options: ['L\'homme est naturellement bon', 'L\'etat de nature est une guerre de tous contre tous', 'La religion l\'exige', 'La nature est harmonieuse'], correctIndex: 1, explanation: 'Hobbes, dans le Leviathan, soutient que sans Etat souverain, les hommes vivent dans la peur et le conflit permanent : l\'Etat garantit la paix et la securite.' },
                    { question: 'La verite comme adequation signifie :', options: ['La verite depend de chaque individu', 'La verite est la correspondance entre un enonce et la realite', 'La verite est relative a la culture', 'La verite est ce qui est utile'], correctIndex: 1, explanation: 'La conception classique de la verite (Aristote, Thomas d\'Aquin) la definit comme adequation entre l\'intellect et la chose (adaequatio rei et intellectus).' },
                    { question: 'Pour Hegel, l\'art est :', options: ['Un simple divertissement sans valeur philosophique', 'Une manifestation sensible de l\'Idee (de l\'Absolu)', 'Uniquement une technique manuelle', 'L\'imitation parfaite de la nature'], correctIndex: 1, explanation: 'Hegel, dans l\'Esthetique, definit l\'art comme "la manifestation sensible de l\'Idee" : il revele des verites spirituelles sous une forme materielle.' },
                    { question: 'Pour Heidegger, la technique moderne se distingue de la technique ancienne par :', options: ['Sa plus grande efficacite uniquement', 'L\'arraisonnement (Gestell) qui reduit la nature a un stock exploitable', 'Son respect de l\'environnement', 'Son caractere artisanal'], correctIndex: 1, explanation: 'Heidegger, dans La Question de la technique, montre que la technique moderne "provoque" la nature et la somme de livrer ses ressources, contrairement a la technique ancienne qui l\'accompagnait.' },
                    { question: 'Rousseau considere que l\'homme a l\'etat de nature est :', options: ['Violent et egoiste', 'Bon et corrompu par la societe', 'Rationnel et calculateur', 'Identique a l\'homme civilise'], correctIndex: 1, explanation: 'Rousseau, dans le Discours sur l\'origine de l\'inegalite, soutient que l\'homme naturel est bon, guide par la pitie et l\'amour de soi, et que c\'est la societe qui introduit l\'inegalite et la corruption.' }
                ]
            },
            {
                id: 'langage',
                title: 'Le Langage',
                icon: '\uD83D\uDDE3\uFE0F',
                content: '<h3>Langage, pensee et communication</h3>'
                    + '<ul>'
                    + '<li><strong>Aristote</strong> : l\'homme est un "animal politique" dote du logos (parole/raison) — le langage permet de distinguer le juste de l\'injuste</li>'
                    + '<li><strong>Saussure</strong> : le signe linguistique est arbitraire (aucun lien naturel entre le mot et la chose). La langue est un systeme de differences</li>'
                    + '<li><strong>Benveniste</strong> : "c\'est dans et par le langage que l\'homme se constitue comme sujet" — dire "je" fonde la conscience de soi</li>'
                    + '</ul>'
                    + '<h3>Les limites du langage</h3>'
                    + '<ul>'
                    + '<li><strong>Bergson</strong> : le langage fige et generalise, il trahit la singularite de l\'experience vecue — les mots sont des etiquettes</li>'
                    + '<li><strong>Wittgenstein</strong> : "les limites de mon langage signifient les limites de mon monde" — ce qu\'on ne peut pas dire, on ne peut pas le penser</li>'
                    + '<li><strong>Merleau-Ponty</strong> : le langage n\'est pas un simple instrument, il est l\'expression meme de la pensee — parler c\'est penser</li>'
                    + '</ul>'
                    + '<h3>Langage et pouvoir</h3>'
                    + '<ul>'
                    + '<li><strong>Orwell (1984)</strong> : la novlangue montre que controler le langage permet de controler la pensee</li>'
                    + '<li><strong>Bourdieu</strong> : le langage est un instrument de domination — ceux qui maitrisent la "langue legitime" exercent un pouvoir symbolique</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'Pourquoi Aristote dit-il que l\'homme est un "animal politique" ?', answer: 'L\'homme possede le logos (parole + raison), ce qui lui permet de debattre du juste et de l\'injuste. Ex : seul l\'homme peut argumenter en assemblee. Astuce Bac : logos = parole ET raison, pas juste "langage".' },
                    { question: 'Qu\'est-ce que l\'arbitraire du signe chez Saussure ?', answer: 'Aucun lien naturel entre le mot (signifiant) et le concept (signifie). Ex : "arbre" en francais, "tree" en anglais — meme concept, sons differents. Astuce Bac : arbitraire = conventionnel, pas "au hasard".' },
                    { question: 'Que signifie "les limites de mon langage signifient les limites de mon monde" (Wittgenstein) ?', answer: 'Ce qu\'on ne peut pas dire, on ne peut pas le penser. Le langage trace les frontieres du pensable. Ex : un peuple sans mot pour "liberte" ne peut pas penser ce concept. Astuce Bac : langage = condition de la pensee, pas simple outil.' },
                    { question: 'Pourquoi Bergson critique-t-il le langage ?', answer: 'Les mots sont des etiquettes generales qui figent la realite. Ex : le mot "tristesse" ne capte pas VOTRE tristesse precise. La duree vecue est continue, le langage la decoupe. Astuce Bac : opposer langage (general) a experience (singuliere).' },
                    { question: 'Comment Benveniste relie-t-il langage et conscience de soi ?', answer: 'C\'est en disant "je" qu\'on se constitue comme sujet. Le langage n\'est pas un outil : c\'est le lieu ou nait la subjectivite. Ex : un enfant devient "quelqu\'un" quand il dit "je". Astuce Bac : subjectivite = produit du langage.' },
                    { question: 'Qu\'est-ce que la novlangue dans 1984 d\'Orwell ?', answer: 'Une langue appauvrie par le pouvoir pour empecher la pensee critique. Ex : supprimer le mot "liberte" rend impossible l\'idee de se revolter. Controler les mots = controler les idees. Astuce Bac : illustre la these "le langage conditionne la pensee".' },
                    { question: 'Qu\'est-ce que le pouvoir symbolique selon Bourdieu ?', answer: 'Le pouvoir d\'imposer sa vision du monde par la maitrise de la langue dominante. Ex : parler "bien" en entretien donne un avantage social invisible. Astuce Bac : langage = instrument de domination sociale, pas seulement communication.' },
                    { question: 'Quelle est la position de Merleau-Ponty sur le langage ?', answer: 'Le langage n\'habille pas la pensee : il EST la pensee en acte. Parler, c\'est penser. Ex : on decouvre ce qu\'on pense en le formulant. Astuce Bac : contre l\'idee que la pensee existe avant les mots.' }
                ],
                quiz: [
                    { question: 'L\'arbitraire du signe linguistique est un concept de :', options: ['Chomsky', 'Saussure', 'Bergson', 'Platon'], correctIndex: 1, explanation: 'Ferdinand de Saussure, dans le Cours de linguistique generale, montre que le lien entre signifiant et signifie est conventionnel, pas naturel.' },
                    { question: 'Selon Bergson, le langage :', options: ['Revele parfaitement la realite', 'Fige et simplifie l\'experience vecue', 'Est inutile a la pensee', 'Cree la realite'], correctIndex: 1, explanation: 'Pour Bergson, les mots sont des etiquettes generales qui trahissent la singularite et la continuite de notre experience interieure.' },
                    { question: 'La novlangue d\'Orwell illustre l\'idee que :', options: ['Le langage est naturel', 'Controler le langage permet de controler la pensee', 'Le langage est toujours libre', 'Les mots n\'ont pas d\'importance'], correctIndex: 1, explanation: 'Dans 1984, le regime totalitaire appauvrit la langue pour rendre impossible toute pensee critique ou dissidente.' },
                    { question: '"Les limites de mon langage signifient les limites de mon monde" est une formule de :', options: ['Bergson', 'Saussure', 'Wittgenstein', 'Benveniste'], correctIndex: 2, explanation: 'Wittgenstein affirme dans le Tractatus logico-philosophicus que le langage trace les frontieres de ce qui est pensable.' },
                    { question: 'Pour Benveniste, le langage est le lieu ou :', options: ['La societe impose ses regles', 'L\'homme se constitue comme sujet en disant "je"', 'La verite se revele', 'La nature s\'exprime'], correctIndex: 1, explanation: 'Benveniste montre que la subjectivite nait dans le langage : c\'est en prenant la parole et en disant "je" que l\'individu se constitue comme personne.' }
                ]
            },
            {
                id: 'inconscient',
                title: 'L\'Inconscient',
                icon: '\uD83E\uDDE0',
                content: '<h3>La decouverte de l\'inconscient</h3>'
                    + '<ul>'
                    + '<li><strong>Freud</strong> : l\'inconscient est un reservoir de pulsions, desirs et souvenirs refoules. Le psychisme est divise en ca (pulsions), moi (conscience) et surmoi (morale interiorisee)</li>'
                    + '<li><strong>Les manifestations de l\'inconscient</strong> : reves, lapsus, actes manques, symptomes nevrotiques — autant de "retours du refoule"</li>'
                    + '<li><strong>Leibniz (petites perceptions)</strong> : des perceptions trop faibles pour etre conscientes influencent notre esprit — premisse de l\'idee d\'inconscient</li>'
                    + '</ul>'
                    + '<h3>L\'inconscient remet-il en cause la liberte ?</h3>'
                    + '<ul>'
                    + '<li><strong>Freud</strong> : "le moi n\'est pas maitre dans sa propre maison" — nos choix sont influences par des forces dont nous n\'avons pas conscience</li>'
                    + '<li><strong>Sartre (critique)</strong> : l\'inconscient est une forme de mauvaise foi — l\'homme est toujours conscient et responsable de ses choix</li>'
                    + '<li><strong>Alain</strong> : croire en l\'inconscient, c\'est renoncer a sa responsabilite. "L\'inconscient est une maniere de se donner raison"</li>'
                    + '</ul>'
                    + '<h3>Portee et limites</h3>'
                    + '<ul>'
                    + '<li><strong>Nietzsche</strong> : avant Freud, Nietzsche affirme que la conscience n\'est que la surface — les pulsions et les instincts dirigent nos actes</li>'
                    + '<li><strong>Debat</strong> : l\'inconscient psychanalytique est-il une decouverte scientifique ou une hypothese interpretative ?</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'Quelles sont les trois instances du psychisme selon Freud ?', answer: 'Ca (pulsions, "je veux"), Moi (raison, "je gere"), Surmoi (morale, "tu ne dois pas"). Ex : envie de tricher (ca), tu resistes (moi), car c\'est mal (surmoi). Astuce Bac : ca = plaisir, moi = realite, surmoi = interdits.' },
                    { question: 'Comment l\'inconscient se manifeste-t-il selon Freud ?', answer: 'Par les reves, lapsus, actes manques et symptomes nevrotiques — ce sont des "retours du refoule". Ex : dire le nom de son ex a son/sa copain(e) = lapsus revelateur. Astuce Bac : le reve = "voie royale vers l\'inconscient".' },
                    { question: 'Que signifie "le moi n\'est pas maitre dans sa propre maison" (Freud) ?', answer: 'On croit agir librement, mais des forces inconscientes (pulsions, desirs refoules) influencent nos choix a notre insu. 3e blessure narcissique apres Copernic et Darwin. Astuce Bac : remet en cause la transparence de la conscience a elle-meme.' },
                    { question: 'Pourquoi Sartre rejette-t-il l\'inconscient freudien ?', answer: 'C\'est de la mauvaise foi : on se cache derriere l\'inconscient pour fuir sa responsabilite. Ex : "c\'est pas moi, c\'est mon inconscient" = excuse. Astuce Bac : Sartre defend la liberte totale CONTRE l\'alibi de l\'inconscient.' },
                    { question: 'Qu\'est-ce que le refoulement selon Freud ?', answer: 'Le moi repousse dans l\'inconscient les desirs juges inacceptables. Mais le refoule cherche a revenir (reves, symptomes). Ex : un traumatisme oublie qui genere des angoisses. Astuce Bac : refoulement ≠ oubli volontaire, c\'est un mecanisme inconscient.' },
                    { question: 'Que sont les "petites perceptions" de Leibniz ?', answer: 'Des perceptions trop faibles pour etre conscientes, mais qui influencent l\'esprit. Ex : chaque vague est inaudible, mais l\'ensemble = bruit de la mer. Astuce Bac : Leibniz prefigure l\'inconscient AVANT Freud (a citer en intro).' },
                    { question: 'Comment Alain critique-t-il l\'idee d\'inconscient ?', answer: 'Croire a l\'inconscient, c\'est renoncer a sa responsabilite. Pour Alain, tout ce qui est mental est conscient. Ex : on sait toujours pourquoi on agit, meme si on refuse de l\'admettre. Astuce Bac : Alain + Sartre = meme camp CONTRE Freud.' },
                    { question: 'Quel role Nietzsche attribue-t-il aux pulsions ?', answer: 'La conscience n\'est que la surface. Les pulsions et la volonte de puissance sont les vraies forces qui guident nos actes. Ex : la morale est un masque pour des pulsions de domination. Astuce Bac : Nietzsche critique l\'inconscient AVANT Freud — bon precurseur a citer.' }
                ],
                quiz: [
                    { question: 'Le "ca" chez Freud designe :', options: ['La conscience morale', 'Le reservoir des pulsions inconscientes', 'L\'instance rationnelle', 'La memoire consciente'], correctIndex: 1, explanation: 'Le ca est la partie la plus primitive du psychisme, siege des pulsions et des desirs inconscients, regi par le principe de plaisir.' },
                    { question: 'Sartre critique l\'inconscient freudien au nom de :', options: ['La science', 'La liberte et la responsabilite', 'La religion', 'Le determinisme'], correctIndex: 1, explanation: 'Pour Sartre, l\'homme est condamne a etre libre. Invoquer l\'inconscient est de la mauvaise foi, une facon de nier sa responsabilite.' },
                    { question: 'Selon Freud, la "voie royale" vers l\'inconscient est :', options: ['L\'hypnose', 'Le reve', 'La meditation', 'Le langage'], correctIndex: 1, explanation: 'Freud affirme dans L\'Interpretation des reves (1900) que le reve est la voie royale qui mene a l\'inconscient, car il exprime des desirs refoules sous forme deguisee.' },
                    { question: 'Les "petites perceptions" de Leibniz annoncent :', options: ['Le rationalisme cartesien', 'L\'idee que des processus inconscients influencent l\'esprit', 'Le materialisme de Marx', 'La phenomenologie de Husserl'], correctIndex: 1, explanation: 'Leibniz, dans les Nouveaux essais, montre que des perceptions insensibles influencent notre vie mentale, prefigurant l\'idee d\'inconscient.' },
                    { question: 'Le refoulement est un mecanisme qui :', options: ['Rend conscient ce qui est inconscient', 'Repousse dans l\'inconscient les desirs juges inacceptables', 'Detruit definitivement les souvenirs', 'Renforce la volonte'], correctIndex: 1, explanation: 'Le refoulement (Freud) est un mecanisme de defense du moi qui maintient hors de la conscience les representations penibles ou interdites.' }
                ]
            },
            {
                id: 'desir',
                title: 'Le Desir',
                icon: '\uD83D\uDD25',
                content: '<h3>Nature et objet du desir</h3>'
                    + '<ul>'
                    + '<li><strong>Platon (Le Banquet)</strong> : le desir nait du manque — on desire ce qu\'on n\'a pas. Le desir est une tension vers ce qui nous complete</li>'
                    + '<li><strong>Epicure</strong> : distingue les desirs naturels necessaires (manger), naturels non necessaires (gastronomie) et ni naturels ni necessaires (gloire) — seuls les premiers menent au bonheur</li>'
                    + '<li><strong>Spinoza</strong> : "le desir est l\'essence meme de l\'homme" — on ne desire pas une chose parce qu\'elle est bonne, elle est bonne parce qu\'on la desire</li>'
                    + '</ul>'
                    + '<h3>Desir et bonheur</h3>'
                    + '<ul>'
                    + '<li><strong>Schopenhauer</strong> : le desir est souffrance. Satisfait, il mene a l\'ennui. Insatisfait, a la frustration. L\'homme oscille entre les deux</li>'
                    + '<li><strong>Hegel</strong> : le desir humain est desir de reconnaissance — on desire etre reconnu par l\'autre comme conscience libre</li>'
                    + '<li><strong>Girard (desir mimetique)</strong> : on desire ce que l\'autre desire — le desir est imitation, pas spontaneite</li>'
                    + '</ul>'
                    + '<h3>Faut-il maitriser ses desirs ?</h3>'
                    + '<ul>'
                    + '<li><strong>Les stoiciens</strong> : il faut distinguer ce qui depend de nous et ce qui n\'en depend pas, et limiter nos desirs a ce qui est en notre pouvoir</li>'
                    + '<li><strong>Nietzsche</strong> : vouloir supprimer les desirs est hostile a la vie — il faut affirmer ses desirs et sa volonte de puissance</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'Comment Platon definit-il le desir dans Le Banquet ?', answer: 'Le desir nait du manque : on desire ce qu\'on n\'a pas. Eros est fils de Richesse et Pauvrete = tension permanente. Ex : on desire l\'amour parce qu\'on se sent incomplet. Astuce Bac : desir = manque chez Platon (a opposer a Spinoza).' },
                    { question: 'Quels sont les trois types de desirs selon Epicure ?', answer: '1) Naturels + necessaires (manger). 2) Naturels + non necessaires (gastronomie). 3) Ni naturels ni necessaires (gloire, richesse). Seuls les 1ers menent au bonheur. Astuce Bac : classification a connaitre par coeur, tombe tres souvent.' },
                    { question: 'Pourquoi Spinoza dit-il que "le desir est l\'essence de l\'homme" ?', answer: 'Le desir (conatus) est l\'elan vital. On ne desire pas une chose parce qu\'elle est bonne — elle est bonne PARCE QU\'on la desire. Ex : j\'aime la musique parce que je la desire, pas l\'inverse. Astuce Bac : Spinoza INVERSE le rapport desir/valeur — opposer a Platon.' },
                    { question: 'Pourquoi le desir est-il source de souffrance selon Schopenhauer ?', answer: 'Insatisfait = souffrance. Satisfait = ennui, puis nouveau desir. L\'homme est un pendule entre les deux. Ex : on desire un telephone, on l\'obtient, on en veut un autre. Astuce Bac : vision pessimiste a opposer a Spinoza (desir = joie).' },
                    { question: 'Qu\'est-ce que le desir de reconnaissance chez Hegel ?', answer: 'Le desir humain n\'est pas desir d\'objets mais desir d\'etre reconnu par l\'autre comme sujet libre. Ex : on veut etre admire, respecte, pas juste nourri. Astuce Bac : desir de reconnaissance = moteur de la dialectique maitre-esclave.' },
                    { question: 'Qu\'est-ce que le desir mimetique selon Rene Girard ?', answer: 'On desire ce que L\'AUTRE desire. Le desir est imitation, pas spontaneite. Triangle : sujet-modele-objet. Ex : un jouet ne t\'interesse que quand un autre enfant le prend. Astuce Bac : Girard = le desir est social, pas individuel.' },
                    { question: 'Comment les stoiciens proposent-ils de maitriser le desir ?', answer: 'Distinguer ce qui depend de nous (nos jugements) et ce qui n\'en depend pas (la mort, la fortune). Desirer seulement ce qui est en notre pouvoir. Ex : Epictete enchaine mais libre en esprit. Astuce Bac : stoicisme = sagesse par la limitation des desirs.' },
                    { question: 'Pourquoi Nietzsche refuse-t-il de supprimer les desirs ?', answer: 'Supprimer les desirs = nier la vie. Nietzsche defend l\'affirmation joyeuse de la volonte de puissance. Ex : l\'ascete qui se prive est hostile a la vie. Astuce Bac : Nietzsche CONTRE stoiciens et chretiens — critique de l\'ascetisme.' }
                ],
                quiz: [
                    { question: 'Pour Platon, le desir nait de :', options: ['L\'abondance', 'Le manque', 'La raison', 'L\'habitude'], correctIndex: 1, explanation: 'Dans Le Banquet, Platon montre que le desir est fils du manque : on desire ce dont on est prive, ce qui nous manque pour etre complets.' },
                    { question: 'Selon Epicure, les seuls desirs a satisfaire pour etre heureux sont :', options: ['Tous les desirs sans exception', 'Les desirs naturels et necessaires', 'Les desirs de gloire et de richesse', 'Les desirs de connaissance'], correctIndex: 1, explanation: 'Epicure recommande de se limiter aux desirs naturels et necessaires (manger, boire, s\'abriter) pour atteindre l\'ataraxie (absence de trouble).' },
                    { question: 'Pour Spinoza, on juge une chose bonne parce que :', options: ['Elle est objectivement bonne', 'On la desire', 'La societe l\'approuve', 'La raison le dicte'], correctIndex: 1, explanation: 'Spinoza renverse le rapport traditionnel : ce n\'est pas la bonte de l\'objet qui cause le desir, c\'est le desir qui fait juger l\'objet bon.' },
                    { question: 'Le desir mimetique de Girard signifie que :', options: ['Le desir est inne', 'On desire ce que l\'autre desire', 'Le desir est rationnel', 'Le desir est independant des autres'], correctIndex: 1, explanation: 'Rene Girard montre que le desir est toujours imitation du desir d\'un modele. L\'objet desire n\'a de valeur que parce qu\'un autre le desire aussi.' },
                    { question: 'Schopenhauer voit dans le desir :', options: ['La source du bonheur', 'Une oscillation entre souffrance et ennui', 'Un moteur de progres', 'Une illusion sans consequence'], correctIndex: 1, explanation: 'Pour Schopenhauer, le desir insatisfait est souffrance et le desir satisfait mene a l\'ennui. La vie est un pendule entre les deux.' }
                ]
            },
            {
                id: 'religion',
                title: 'La Religion',
                icon: '\uD83D\uDD4A\uFE0F',
                content: '<h3>Qu\'est-ce que la religion ?</h3>'
                    + '<ul>'
                    + '<li><strong>Etymologie</strong> : religio peut venir de religare (relier les hommes entre eux et au divin) ou de relegere (recueillir avec soin les rites)</li>'
                    + '<li><strong>Durkheim</strong> : la religion est un fait social — elle soude la communaute par des croyances et des rites. Le sacre n\'est que la societe transfiguree</li>'
                    + '<li><strong>Pascal</strong> : le pari — face a l\'incertitude, il est rationnel de parier sur l\'existence de Dieu car le gain potentiel (la vie eternelle) est infini</li>'
                    + '</ul>'
                    + '<h3>Critiques de la religion</h3>'
                    + '<ul>'
                    + '<li><strong>Marx</strong> : "la religion est l\'opium du peuple" — elle console les opprimes mais les empeche de se revolter contre leurs conditions reelles</li>'
                    + '<li><strong>Nietzsche</strong> : "Dieu est mort" — les valeurs chretiennes (humilite, pitie) sont une morale d\'esclaves qui nie la vie et la puissance</li>'
                    + '<li><strong>Freud</strong> : la religion est une illusion, une projection du desir d\'un pere protecteur face a l\'angoisse de la mort et de l\'impuissance</li>'
                    + '</ul>'
                    + '<h3>Raison et foi</h3>'
                    + '<ul>'
                    + '<li><strong>Kant</strong> : on ne peut ni prouver ni refuter l\'existence de Dieu par la raison — mais l\'idee de Dieu est un postulat utile a la morale</li>'
                    + '<li><strong>Kierkegaard</strong> : la foi est un "saut" qui depasse la raison — croire, c\'est accepter l\'absurde avec passion</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'Que signifie "la religion est l\'opium du peuple" (Marx) ?', answer: 'La religion soulage la souffrance comme un anesthesiant, mais empeche de se revolter. Ex : "tu souffriras au paradis" calme la revolte des opprimes. Astuce Bac : opium = a la fois consolation ET obstacle a l\'emancipation.' },
                    { question: 'Que signifie "Dieu est mort" chez Nietzsche ?', answer: 'Les valeurs chretiennes ne fondent plus notre civilisation. La science a tue Dieu, mais on n\'a rien mis a la place. Ex : crise du sens dans le monde moderne. Astuce Bac : "Dieu est mort" = constat, pas celebration. C\'est un probleme pour Nietzsche.' },
                    { question: 'Comment Freud explique-t-il la religion ?', answer: 'C\'est une illusion : on projette un pere protecteur face a l\'angoisse de la mort. Ex : prier = chercher la protection d\'un pere cosmique. Illusion ≠ erreur (une illusion exprime un desir). Astuce Bac : Freud dit illusion, pas mensonge — nuance importante.' },
                    { question: 'Qu\'est-ce que le pari de Pascal ?', answer: 'Face a l\'incertitude, il est rationnel de parier sur Dieu : gain infini (vie eternelle) si Dieu existe, perte finie sinon. Ex : comme un pari ou tu risques peu et gagnes gros. Astuce Bac : le pari n\'est pas une preuve de Dieu mais un calcul de probabilite.' },
                    { question: 'Comment Durkheim definit-il la religion ?', answer: 'Un fait social : croyances + rites qui soudent une communaute. Le sacre = la societe elle-meme transfiguree. Ex : adorer un totem, c\'est en fait celebrer le groupe. Astuce Bac : Durkheim = approche sociologique, pas theologique.' },
                    { question: 'Quelle est la position de Kant sur l\'existence de Dieu ?', answer: 'La raison ne peut ni prouver ni refuter Dieu. Mais la morale a besoin de Dieu comme postulat (garantir que le bien sera recompense). Ex : sans Dieu, pourquoi etre moral ? Astuce Bac : Kant nie les preuves de Dieu MAIS garde Dieu comme exigence morale.' },
                    { question: 'Qu\'est-ce que le "saut de la foi" chez Kierkegaard ?', answer: 'La foi n\'est pas rationnelle : c\'est un saut dans l\'absurde, un engagement passionnel. Ex : Abraham pret a sacrifier son fils = foi au-dela de la logique. Astuce Bac : foi CONTRE raison chez Kierkegaard (opposer a Kant qui les concilie).' },
                    { question: 'Quelle distinction fait-on entre foi et superstition ?', answer: 'Foi = engagement personnel assumant l\'indemontrabilite. Superstition = croyance irrationnelle en des pouvoirs magiques. Ex : prier ≠ croire qu\'un chat noir porte malheur. Astuce Bac : la foi assume le doute, la superstition l\'ignore.' }
                ],
                quiz: [
                    { question: '"La religion est l\'opium du peuple" est une formule de :', options: ['Nietzsche', 'Freud', 'Marx', 'Voltaire'], correctIndex: 2, explanation: 'Marx ecrit cette formule dans la Critique de la philosophie du droit de Hegel (1843). La religion console mais empeche la prise de conscience revolutionnaire.' },
                    { question: 'Pour Freud, la religion est :', options: ['Une verite revelee', 'Une illusion nee du desir d\'un pere protecteur', 'Un fait scientifique', 'Une creation artistique'], correctIndex: 1, explanation: 'Dans L\'Avenir d\'une illusion, Freud explique la religion comme la projection du desir infantile de protection face a l\'angoisse existentielle.' },
                    { question: '"Dieu est mort" chez Nietzsche signifie :', options: ['Dieu a physiquement cesse d\'exister', 'Les valeurs chretiennes ne fondent plus notre civilisation', 'Nietzsche est athee depuis toujours', 'La science a prouve l\'inexistence de Dieu'], correctIndex: 1, explanation: 'Nietzsche constate dans Le Gai Savoir que la civilisation occidentale a perdu son fondement religieux sans encore trouver de nouvelles valeurs.' },
                    { question: 'Le pari de Pascal repose sur l\'idee que :', options: ['Dieu existe certainement', 'Il est rationnel de parier sur l\'existence de Dieu vu le gain infini possible', 'La foi est irrationnelle', 'La raison prouve l\'existence de Dieu'], correctIndex: 1, explanation: 'Pascal propose dans les Pensees un raisonnement probabiliste : miser sur Dieu est le choix rationnel car le gain potentiel (vie eternelle) est incommensurable.' },
                    { question: 'Pour Durkheim, le sacre est :', options: ['Une realite surnaturelle', 'La societe elle-meme transfiguree', 'Une invention des pretres', 'Un concept depasse'], correctIndex: 1, explanation: 'Durkheim, dans Les Formes elementaires de la vie religieuse, montre que le sacre est la representation symbolique de la force collective de la societe.' }
                ]
            },
            {
                id: 'autrui',
                title: 'Autrui',
                icon: '\uD83E\uDDD1\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1',
                content: '<h3>La rencontre avec autrui</h3>'
                    + '<ul>'
                    + '<li><strong>Husserl</strong> : autrui est un alter ego — un autre moi que je reconnais par analogie avec ma propre experience (l\'intersubjectivite)</li>'
                    + '<li><strong>Sartre</strong> : "l\'enfer, c\'est les autres" — le regard d\'autrui me fige, me juge et me reduit a un objet. Autrui est celui qui me revele a moi-meme mais aussi me limite</li>'
                    + '<li><strong>Levinas</strong> : le visage d\'autrui est une exigence ethique — il m\'interpelle et me dit "tu ne tueras point" avant toute reflexion</li>'
                    + '</ul>'
                    + '<h3>Autrui comme condition de la conscience de soi</h3>'
                    + '<ul>'
                    + '<li><strong>Hegel</strong> : la conscience de soi n\'existe que par la reconnaissance mutuelle — j\'ai besoin qu\'autrui me reconnaisse comme sujet libre</li>'
                    + '<li><strong>Merleau-Ponty</strong> : autrui n\'est pas un probleme mais une evidence — des l\'enfance, le corps d\'autrui est percu comme un autre sujet, pas comme un objet</li>'
                    + '</ul>'
                    + '<h3>Ethique et politique du rapport a autrui</h3>'
                    + '<ul>'
                    + '<li><strong>Kant</strong> : "traite autrui toujours en meme temps comme une fin et jamais simplement comme un moyen" — la dignite humaine est inconditionnelle</li>'
                    + '<li><strong>Simone de Beauvoir</strong> : "on ne nait pas femme, on le devient" — autrui (la societe) construit nos identites par le regard et les normes</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'Que signifie "l\'enfer, c\'est les autres" (Sartre) ?', answer: 'Le regard d\'autrui me fige, me juge, me reduit a une image. Ex : dans Huis clos, 3 personnes se jugent eternellement sans pouvoir s\'echapper. Astuce Bac : NE PAS comprendre "les gens sont mechants" — c\'est le REGARD d\'autrui qui est l\'enfer.' },
                    { question: 'Qu\'est-ce que l\'ethique du visage chez Levinas ?', answer: 'Le visage d\'autrui est nu, vulnerable, et m\'ordonne "tu ne tueras point" AVANT toute reflexion. Ex : croiser un SDF nous interpelle immediatement. Astuce Bac : chez Levinas, l\'ethique est PREMIERE (avant l\'ontologie) — ca le distingue de tous les autres.' },
                    { question: 'Pourquoi Hegel dit-il que la conscience de soi a besoin d\'autrui ?', answer: 'On ne peut se connaitre seul : j\'ai besoin qu\'un autre me reconnaisse comme sujet libre. Ex : un exploit sans temoin n\'existe pas. Astuce Bac : reconnaissance mutuelle = moteur de la dialectique maitre-esclave.' },
                    { question: 'Comment Husserl explique-t-il l\'acces a autrui ?', answer: 'Par analogie : je vois un corps semblable au mien et je lui attribue une vie interieure. Autrui = alter ego (un autre moi). Ex : je vois quelqu\'un pleurer, je "sais" qu\'il souffre. Astuce Bac : appresentation = je ne vois pas sa conscience, je la deduis.' },
                    { question: 'Que signifie "traiter autrui comme une fin" (Kant) ?', answer: 'Ne jamais utiliser quelqu\'un UNIQUEMENT comme un outil. Chaque personne a une dignite inconditionnelle. Ex : payer quelqu\'un = ok, mais le traiter comme une machine = non. Astuce Bac : 2e formulation de l\'imperatif categorique — a connaitre par coeur.' },
                    { question: 'Que signifie "on ne nait pas femme, on le devient" (Beauvoir) ?', answer: 'L\'identite feminine est construite par la societe, pas par la biologie. Le regard d\'autrui et les normes fabriquent "la femme". Ex : on apprend aux filles a etre douces. Astuce Bac : autrui (societe) construit nos identites — lien avec le sujet "culture".' },
                    { question: 'Comment Merleau-Ponty concoit-il le rapport a autrui ?', answer: 'Autrui n\'est pas un probleme mais une evidence. Des la naissance, on percoit l\'autre comme un sujet par l\'intercorporeite. Ex : un bebe imite les sourires. Astuce Bac : Merleau-Ponty depasse le "probleme d\'autrui" — le corps nous relie directement.' },
                    { question: 'Pourquoi le regard d\'autrui est-il ambivalent chez Sartre ?', answer: 'Positif : autrui me revele a moi-meme (honte, fierte). Negatif : son regard me fige en objet. Ex : etre surpris en train d\'ecouter a une porte = honte revelatrice. Astuce Bac : autrui = miroir necessaire MAIS aussi menace pour ma liberte.' }
                ],
                quiz: [
                    { question: '"L\'enfer, c\'est les autres" est une replique de :', options: ['Camus, L\'Etranger', 'Sartre, Huis clos', 'Beauvoir, Le Deuxieme Sexe', 'Levinas, Totalite et Infini'], correctIndex: 1, explanation: 'Cette replique conclut la piece Huis clos (1944) de Sartre, ou trois personnages decouvrent que le jugement perpetuel des autres est leur veritable enfer.' },
                    { question: 'Pour Levinas, le visage d\'autrui est avant tout :', options: ['Un objet esthetique', 'Une exigence ethique qui m\'interpelle', 'Une menace pour ma liberte', 'Un simple corps physique'], correctIndex: 1, explanation: 'Levinas montre dans Totalite et Infini que le visage est une epiphanie ethique : il exprime la vulnerabilite d\'autrui et m\'oblige a la responsabilite.' },
                    { question: 'Selon Hegel, la conscience de soi se constitue par :', options: ['La reflexion solitaire', 'La reconnaissance mutuelle entre consciences', 'L\'experience des sens', 'La connaissance scientifique'], correctIndex: 1, explanation: 'Hegel montre dans la Phenomenologie de l\'esprit que la conscience de soi n\'existe que par la reconnaissance : j\'ai besoin qu\'autrui me confirme comme sujet.' },
                    { question: '"On ne nait pas femme, on le devient" signifie que :', options: ['L\'identite feminine est purement biologique', 'L\'identite feminine est une construction sociale', 'Les femmes choisissent librement leur identite', 'La feminite est innee'], correctIndex: 1, explanation: 'Beauvoir montre dans Le Deuxieme Sexe (1949) que la feminite est un ensemble de comportements appris et de normes imposees par la societe, pas une nature.' },
                    { question: 'La deuxieme formulation de l\'imperatif categorique de Kant concerne :', options: ['Le bonheur individuel', 'Le respect de la dignite humaine (ne pas traiter autrui comme un moyen)', 'L\'obeissance a l\'Etat', 'La recherche de la verite'], correctIndex: 1, explanation: 'Kant formule : "Agis de telle sorte que tu traites l\'humanite toujours en meme temps comme une fin et jamais simplement comme un moyen." C\'est le fondement de la dignite.' }
                ]
            }
        ]
    });
})();
