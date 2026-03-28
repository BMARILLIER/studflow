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
                    { question: 'Qu\'est-ce que le doute methodique de Descartes ?', answer: 'Une methode qui consiste a remettre en question toutes les certitudes pour ne garder que ce qui est absolument indubitable. Aboutit au "Cogito ergo sum".' },
                    { question: 'Quelle est la difference entre empirisme et rationalisme ?', answer: 'L\'empirisme (Hume, Locke) fonde la connaissance sur l\'experience sensorielle. Le rationalisme (Descartes, Leibniz) la fonde sur la raison pure.' },
                    { question: 'Qu\'est-ce que la falsifiabilite selon Popper ?', answer: 'Une theorie scientifique doit etre refutable : on doit pouvoir imaginer une observation qui la contredirait. Sinon, elle n\'est pas scientifique.' },
                    { question: 'Que signifie "Cogito ergo sum" ?', answer: '"Je pense, donc je suis." C\'est la premiere certitude de Descartes apres le doute methodique : meme si tout est faux, le fait que je doute prouve que j\'existe.' },
                    { question: 'Qu\'est-ce que la doxa ?', answer: 'L\'opinion commune, une croyance subjective non fondee rationnellement. Platon l\'oppose a l\'episteme (la connaissance vraie et justifiee).' },
                    { question: 'Quelle est la theorie de la connaissance de Kant ?', answer: 'Kant synthetise empirisme et rationalisme : toute connaissance commence avec l\'experience mais est structuree par des categories a priori de l\'entendement.' },
                    { question: 'Qu\'est-ce qu\'un jugement synthetique a priori (Kant) ?', answer: 'Un jugement qui enrichit notre connaissance (synthetique) mais est independant de l\'experience (a priori). Ex: "Tout evenement a une cause."' },
                    { question: 'Quelle est la difference entre verite et certitude ?', answer: 'La verite est objective (adequation avec le reel). La certitude est subjective (sentiment d\'etre sur). On peut etre certain de quelque chose de faux.' }
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
                    { question: 'Qu\'est-ce que l\'imperatif categorique de Kant ?', answer: '"Agis uniquement d\'apres la maxime qui fait que tu peux vouloir en meme temps qu\'elle devienne une loi universelle." C\'est un principe moral inconditionnel.' },
                    { question: 'Quelle est la difference entre morale et ethique ?', answer: 'La morale est un ensemble de regles universelles (devoir). L\'ethique est une reflexion personnelle sur la bonne vie (vertu, bonheur).' },
                    { question: 'Qu\'est-ce que l\'utilitarisme ?', answer: 'Theorie morale (Bentham, Mill) selon laquelle une action est bonne si elle produit le maximum de bonheur pour le plus grand nombre de personnes.' },
                    { question: 'Qu\'est-ce que l\'eudaimonia chez Aristote ?', answer: 'Le bonheur au sens de l\'epanouissement, de la vie accomplie. Il s\'atteint par la pratique des vertus et le juste milieu.' },
                    { question: 'Que signifie "L\'homme est condamne a etre libre" (Sartre) ?', answer: 'L\'existence precede l\'essence : l\'homme n\'a pas de nature predeterminee, il est entierement responsable de ce qu\'il fait de sa vie.' },
                    { question: 'Qu\'est-ce que le determinisme ?', answer: 'La these selon laquelle tous les evenements, y compris les actions humaines, sont la consequence necessaire de causes anterieures.' },
                    { question: 'Qu\'est-ce que le juste milieu selon Aristote ?', answer: 'La vertu se situe entre deux vices : l\'exces et le defaut. Ex : le courage est entre la lachete et la temerite.' },
                    { question: 'Qu\'est-ce qu\'agir par devoir selon Kant ?', answer: 'Agir non par interet ou inclination, mais uniquement parce que la raison commande de le faire. Seule l\'intention morale donne sa valeur a l\'action.' }
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
                    { question: 'Quelle est la difference entre droit naturel et droit positif ?', answer: 'Le droit naturel designe des droits universels inherents a l\'homme (liberte, vie). Le droit positif designe les lois ecrites votees par les institutions.' }
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
                    { question: 'Qu\'est-ce que la volonte generale chez Rousseau ?', answer: 'La volonte du corps politique dans son ensemble, visant le bien commun. Elle se distingue de la volonte de tous (somme des interets particuliers).' }
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
                    { question: 'Qu\'est-ce que la conscience immediate (ou directe) ?', answer: 'La simple presence de l\'esprit a ce qu\'il eprouve, sans retour reflexif. Sentir une douleur, percevoir une couleur, avant d\'en faire l\'objet d\'une analyse.' }
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
                    { question: 'Qu\'est-ce que la mimesis chez Platon ?', answer: 'L\'imitation : l\'art est une copie du monde sensible, lui-meme copie du monde des Idees. L\'art est donc "copie de copie", eloigne de deux degres de la verite.' },
                    { question: 'Comment Aristote rehabilite-t-il la mimesis ?', answer: 'L\'imitation artistique est positive : elle represente non ce qui est mais ce qui pourrait etre. La tragedie produit une catharsis (purification des passions) chez le spectateur.' },
                    { question: 'Qu\'est-ce que la catharsis chez Aristote ?', answer: 'La purification des passions (pitie et crainte) que produit la tragedie chez le spectateur. En eprouvant ces emotions de maniere esthetique, le spectateur s\'en libere.' },
                    { question: 'Comment Kant definit-il le genie ?', answer: 'Le genie est un talent inne (don de la nature) qui donne ses regles a l\'art. Il produit des oeuvres originales et exemplaires sans pouvoir expliquer rationnellement son processus.' },
                    { question: 'Qu\'est-ce que le jugement esthetique selon Kant ?', answer: 'Un jugement desinteresse et universel sans concept : le beau plait universellement. Il se distingue de l\'agreable (subjectif) et du bon (lie a un concept).' },
                    { question: 'Que signifie "le beau plait universellement sans concept" (Kant) ?', answer: 'Le jugement de gout pretend a l\'universalite (chacun devrait le partager) mais ne repose pas sur un concept determinant. C\'est un accord libre entre imagination et entendement.' },
                    { question: 'Quel role l\'art joue-t-il chez Hegel ?', answer: 'L\'art est la premiere forme de manifestation de l\'Esprit absolu : il revele l\'Idee sous forme sensible. Mais il sera depasse par la religion puis la philosophie.' },
                    { question: 'Qu\'est-ce que la "mort de l\'art" chez Hegel ?', answer: 'Non pas la fin de la production artistique, mais l\'idee que l\'art ne peut plus etre la forme supreme d\'expression de la verite. La philosophie prend le relais.' },
                    { question: 'Comment Heidegger pense-t-il l\'oeuvre d\'art ?', answer: 'L\'oeuvre d\'art "met en oeuvre la verite" : elle ouvre un monde de sens et revele l\'etre des choses. Elle n\'est pas simple decoration mais devoilement.' },
                    { question: 'Quel est le lien entre techne et art en grec ancien ?', answer: 'En grec, "techne" designe a la fois l\'art et la technique. L\'artiste est un artisan qui maitrise un savoir-faire. La distinction art/technique est moderne.' },
                    { question: 'Pourquoi Platon se mefie-t-il des artistes ?', answer: 'Parce que les artistes produisent des illusions (copies de copies) qui flattent les passions et eloignent de la verite. Dans la Republique, il propose de bannir les poetes de la cite.' },
                    { question: 'Qu\'est-ce que le sublime selon Kant ?', answer: 'Un sentiment mixte de plaisir et d\'effroi face a ce qui depasse notre imagination (l\'infiniment grand, l\'infiniment puissant). Il revele la grandeur de notre raison face a la nature.' },
                    { question: 'Quelle est la difference entre l\'agreable et le beau chez Kant ?', answer: 'L\'agreable est subjectif et lie aux sens (chacun ses gouts). Le beau pretend a l\'universalite et suppose un jugement desinteresse, libre de tout interet personnel.' },
                    { question: 'Qu\'est-ce que l\'art abstrait remet en cause ?', answer: 'La conception de l\'art comme mimesis (imitation de la realite). L\'art abstrait affirme que l\'art peut creer des formes pures sans representer le monde visible.' },
                    { question: 'Quelle est la these de Nietzsche sur l\'art ?', answer: 'L\'art est la plus haute activite humaine, superieure a la science et a la morale. Il affirme la vie et la transfigure. "L\'art est le grand stimulant de la vie."' }
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
                    { question: 'Qu\'est-ce que le souverain bien chez Aristote ?', answer: 'Le bien supreme que l\'on recherche pour lui-meme et jamais en vue d\'autre chose. C\'est le bonheur (eudaimonia), qui est la fin derniere de toute action humaine.' }
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
                    { question: 'Comment Martin Luther King justifie-t-il la desobeissance civile ?', answer: 'Une loi injuste n\'est pas une loi. On a l\'obligation morale de desobeir aux lois injustes, de maniere ouverte et non-violente, en acceptant la sanction pour eveiller les consciences.' }
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
            }
        ]
    });
})();
