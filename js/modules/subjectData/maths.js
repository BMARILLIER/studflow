// maths.js — Donnees Mathematiques (10 sections)
(function() {
    if (!window.StudFlow || !window.StudFlow.subjects) return;

    window.StudFlow.subjects.register({
        id: 'maths',
        name: 'Mathematiques',
        icon: '\uD83D\uDCD0',
        color: 'sun',
        sections: [
            {
                id: 'fonctions',
                title: 'Fonctions & Derivation',
                icon: '\uD83D\uDCC8',
                content: '<h3>Notions fondamentales sur les fonctions</h3>'
                    + '<ul>'
                    + '<li><strong>Ensemble de definition</strong> : l\'ensemble des valeurs de x pour lesquelles f(x) existe</li>'
                    + '<li><strong>Image et antecedent</strong> : f(a) est l\'image de a ; si f(a) = b, alors a est un antecedent de b</li>'
                    + '<li><strong>Parite</strong> : f paire si f(-x) = f(x) pour tout x ; f impaire si f(-x) = -f(x)</li>'
                    + '</ul>'
                    + '<h3>Derivation</h3>'
                    + '<ul>'
                    + '<li><strong>Definition</strong> : f\'(a) = lim (f(a+h) - f(a)) / h quand h → 0</li>'
                    + '<li><strong>Derivees usuelles</strong> : (x^n)\' = nx^(n-1) ; (e^x)\' = e^x ; (ln x)\' = 1/x ; (sin x)\' = cos x ; (cos x)\' = -sin x</li>'
                    + '<li><strong>Regles</strong> : (u+v)\' = u\'+v\' ; (ku)\' = ku\' ; (uv)\' = u\'v + uv\' ; (u/v)\' = (u\'v - uv\')/v^2</li>'
                    + '</ul>'
                    + '<h3>Etude de fonctions</h3>'
                    + '<ul>'
                    + '<li><strong>Sens de variation</strong> : f\' > 0 → f croissante ; f\' < 0 → f decroissante</li>'
                    + '<li><strong>Extrema</strong> : f\'(a) = 0 et changement de signe de f\' → extremum local</li>'
                    + '<li><strong>Tableau de variations</strong> : resume le signe de f\' et les variations de f</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'C\'est quoi la derivee de x^n ?', answer: 'Formule : (x^n)\' = n * x^(n-1). En gros : l\'exposant DESCEND devant et on enleve 1 a l\'exposant. Exemples : (x^3)\' = 3x^2. (x^5)\' = 5x^4. (x^1)\' = 1 (pas x !). (x^0)\' = 0 (c\'est une constante). Mots difficiles : "derivee" = la vitesse de changement d\'une fonction. "exposant" = le petit chiffre en haut.' },
                    { question: 'C\'est quoi la derivee de e^x ?', answer: 'Formule : (e^x)\' = e^x. C\'est la SEULE fonction qui ne change pas quand on la derive. Tu derives e^x, tu obtiens e^x. Encore. Et encore. Toujours e^x. En gros : e^x est indestructible par la derivation. Mots difficiles : "exponentielle" = la fonction e^x. "e" = un nombre (~2,718), comme pi (~3,14) mais pour les exponentielles.' },
                    { question: 'C\'est quoi la derivee de ln(x) ?', answer: 'Formule : (ln x)\' = 1/x. Attention : ln(x) n\'existe QUE pour x > 0 (on ne peut pas calculer le ln d\'un nombre negatif ou de zero). En gros : deriver ln c\'est diviser par x. Mots difficiles : "ln" = logarithme neperien = la fonction inverse de e^x. Si e^a = b, alors ln(b) = a.' },
                    { question: 'Comment savoir si f monte ou descend ?', answer: 'On calcule f\'(x) (la derivee). Si f\'(x) > 0 → f MONTE (croissante). Si f\'(x) < 0 → f DESCEND (decroissante). Si f\'(x) = 0 → f est plate a cet endroit. En gros : la derivee c\'est la PENTE. Positive = ca monte. Negative = ca descend. Zero = plat. Exemple : si f\'(x) = 2, la fonction monte tout le temps (pente de 2).' },
                    { question: 'C\'est quoi la derivee d\'un produit u*v ?', answer: 'Formule : (u*v)\' = u\'*v + u*v\'. En gros : "derivee du 1er FOIS le 2eme + le 1er FOIS derivee du 2eme." Exemple : f(x) = x * e^x. u = x, u\' = 1. v = e^x, v\' = e^x. f\'(x) = 1*e^x + x*e^x = (1+x)*e^x. Astuce : il y à un PLUS au milieu. Ne pas confondre avec le quotient (qui à un MOINS).' },
                    { question: 'C\'est quoi la derivee d\'un quotient u/v ?', answer: 'Formule : (u/v)\' = (u\'*v - u*v\') / v^2. En gros : "derivee du haut FOIS le bas, MOINS le haut FOIS derivee du bas, le TOUT sur le bas AU CARRE." Piege : c\'est un MOINS (pas un plus comme le produit). Et on divise par v^2 (le bas au carre). Astuce pour retenir : "D du H fois B, moins H fois D du B, sur B carre."' },
                    { question: 'Comment trouver un max ou un min ?', answer: '2 conditions : 1) f\'(a) = 0 (la pente est nulle = plat). 2) f\' change de SIGNE en a. Si f\' passe de + a - = MAXIMUM (ca montait puis ca descend). Si f\' passe de - a + = MINIMUM (ca descendait puis ca monte). Piege Bac : f\'(a) = 0 ne suffit PAS. Il faut aussi que le signe change. Sinon c\'est un point d\'inflexion.' },
                    { question: 'Comment faire un tableau de variations ?', answer: '4 etapes : 1) Calcule f\'(x). 2) Resous f\'(x) = 0 (les valeurs ou la pente est nulle). 3) Fais un tableau de signes de f\' (+ ou - entre les valeurs trouvees). 4) Dessine les fleches : + = fleche qui monte, - = fleche qui descend. Calcule aussi f(x) aux points importants pour connaitre les valeurs. En gros : c\'est un resume de tout ce que fait la fonction.' },
                    { question: 'C\'est quoi l\'ensemble de definition ?', answer: 'C\'est les valeurs de x pour lesquelles f(x) EXISTE. 3 interdits a chercher : 1) Denominateur = 0 (on ne divise jamais par 0). 2) Nombre NEGATIF sous une racine carree. 3) Nombre NEGATIF ou ZERO dans un ln. Exemple : f(x) = 1/x est definie pour tout x SAUF 0. f(x) = ln(x) est definie pour x > 0. En gros : c\'est les valeurs de x ou la formule marche.' },
                    { question: 'Comment trouver les variations SANS deriver ?', answer: 'On compare f(a) et f(b) directement quand a < b. Si f(b) > f(a) → f monte. Si f(b) < f(a) → f descend. On peut aussi utiliser ce qu\'on SAIT déjà : x^2 descend avant 0 et monte après 0. 1/x descend partout (sur chaque intervalle). En gros : si l\'enonce dit "sans derivee", compare directement les valeurs.' },
                    { question: 'C\'est quoi paire vs impaire ?', answer: 'PAIRE : f(-x) = f(x). La courbe est SYMETRIQUE par rapport a l\'axe vertical (comme un miroir). Exemples : x^2, cos(x). IMPAIRE : f(-x) = -f(x). La courbe est SYMETRIQUE par rapport au point O (rotation de 180 degres). Exemples : x^3, sin(x). Avant de tester : verifie que le domaine est symetrique par rapport a 0.' },
                    { question: 'Comment lire une limite sur un graphique ?', answer: 'Regarde ce que fait la courbe quand x part très loin (vers +infini ou -infini). Si la courbe se rapproche d\'une ligne horizontale y = 3, alors la limite est 3 et y = 3 est une ASYMPTOTE HORIZONTALE. Si la courbe part vers le haut ou le bas pres de x = 2, c\'est une ASYMPTOTE VERTICALE en x = 2. En gros : asymptote = ligne dont la courbe se rapproche sans jamais la toucher.' },
                    { question: 'C\'est quoi la derivee d\'une composee ?', answer: 'Si f(x) = g(u(x)), alors f\'(x) = u\'(x) * g\'(u(x)). En gros : on derive l\'EXTERIEUR, puis on multiplie par la derivee de l\'INTERIEUR. Exemple : f(x) = (3x+1)^4. L\'exterieur = (...)^4, l\'interieur = 3x+1. Derivee exterieur = 4*(3x+1)^3. Derivee interieur = 3. f\'(x) = 3 * 4*(3x+1)^3 = 12(3x+1)^3. Piege Bac : ne pas oublier de multiplier par la derivee de l\'interieur.' },
                    { question: 'C\'est quoi f\'(a) graphiquement ?', answer: 'f\'(a) = la PENTE de la tangente à la courbe au point x = a. Si f\'(2) = 3, ca veut dire qu\'au point x = 2, la tangente monte de 3 quand x avance de 1. Si f\'(2) = 0, la tangente est plate (horizontale). Si f\'(2) = -1, la tangente descend. En gros : la derivee en un point = la pente a cet endroit. Sur un graphique, tu mesures l\'inclinaison de la tangente.' },
                    { question: 'Comment trouver l\'equation de la tangente ?', answer: 'Formule : y = f\'(a) * (x - a) + f(a). Etapes : 1) Calcule f(a) (la valeur de la fonction en a). 2) Calcule f\'(a) (la pente en a). 3) Remplace dans la formule. Exemple : f(x) = x^2, en a = 1. f(1) = 1. f\'(x) = 2x, donc f\'(1) = 2. Tangente : y = 2(x - 1) + 1 = 2x - 1. En gros : tu as besoin de 2 choses — la valeur et la pente.' },
                    { question: 'C\'est quoi les derivees de sin et cos ?', answer: '(sin x)\' = cos x. (cos x)\' = -sin x. Attention au MOINS devant sin pour la derivee de cos ! Exemple compose : f(x) = sin(2x). Derivee exterieur = cos(2x). Derivee interieur = 2. f\'(x) = 2*cos(2x). Astuce Bac : en trigo, toujours verifier le signe et ne pas oublier la derivee de l\'interieur.' }
                ],
                quiz: [
                    { question: 'La derivee de \\( 3x^{4} \\) est :', options: ['\\( 12x^{3} \\)', '\\( 3x^{3} \\)', '\\( 4x^{3} \\)', '\\( 12x^{4} \\)'], correctIndex: 0, explanation: '\\( (3x^{4})\' = 3 \\times 4 \\times x^{3} = 12x^{3} \\).' },
                    { question: 'Si \\( f\'(x) > 0 \\) sur un intervalle, alors \\( f \\) est :', options: ['Decroissante', 'Croissante', 'Constante', 'Nulle'], correctIndex: 1, explanation: 'Une derivee positive signifie que la fonction est croissante sur cet intervalle.' },
                    { question: 'La derivee de \\( \\sin(x) \\) est :', options: ['\\( -\\cos(x) \\)', '\\( \\cos(x) \\)', '\\( \\sin(x) \\)', '\\( -\\sin(x) \\)'], correctIndex: 1, explanation: '\\( (\\sin x)\' = \\cos x \\).' },
                    { question: 'La formule de derivation d\'un produit \\( uv \\) est :', options: ['\\( u\'v\' \\)', '\\( u\'v + uv\' \\)', '\\( u\'v - uv\' \\)', '\\( (uv)^{2} \\)'], correctIndex: 1, explanation: 'La règle du produit : \\( (uv)\' = u\'v + uv\' \\).' },
                    { question: 'La derivee de \\( f(x) = x \\cdot e^{x} \\) est :', options: ['\\( x \\cdot e^{x} \\)', '\\( e^{x} \\)', '\\( (1+x) \\cdot e^{x} \\)', '\\( (x-1) \\cdot e^{x} \\)'], correctIndex: 2, explanation: 'Regle du produit : \\( f\'(x) = e^{x} + x \\cdot e^{x} = (1+x)e^{x} \\).' },
                    { question: 'La derivee de \\( f(x) = (2x+1)^{3} \\) est :', options: ['\\( 3(2x+1)^{2} \\)', '\\( 6(2x+1)^{2} \\)', '\\( (2x+1)^{2} \\)', '\\( 6x(2x+1)^{2} \\)'], correctIndex: 1, explanation: 'Derivee composee : \\( f\'(x) = 3(2x+1)^{2} \\times 2 = 6(2x+1)^{2} \\).' },
                    { question: 'L\'ensemble de definition de f(x) = 1/(x-2) + ln(x) est :', options: ['R \\ {2}', ']0, 2[ union ]2, +inf[', ']0, +inf[', 'R \\ {0, 2}'], correctIndex: 1, explanation: 'ln(x) impose x > 0 et 1/(x-2) impose x different de 2. On combine : x dans ]0, 2[ union ]2, +inf[.' },
                    { question: 'La fonction f(x) = x^3 est :', options: ['Paire', 'Impaire', 'Ni paire ni impaire', 'Paire et impaire'], correctIndex: 1, explanation: 'f(-x) = (-x)^3 = -x^3 = -f(x), donc f est impaire (symetrie par rapport a l\'origine).' },
                    { question: 'Si la courbe de f se rapproche de y = 5 quand x tend vers +inf, alors :', options: ['f admet une asymptote verticale y = 5', 'f admet une asymptote horizontale y = 5', 'f(5) = 0', 'f\'(5) = 0'], correctIndex: 1, explanation: 'Quand lim f(x) = 5 en +inf, la droite y = 5 est asymptote horizontale.' },
                    { question: 'L\'equation de la tangente a f(x) = x^2 en a = 3 est :', options: ['y = 6x - 9', 'y = 6x - 3', 'y = 3x - 9', 'y = 2x + 3'], correctIndex: 0, explanation: 'f(3) = 9, f\'(x) = 2x donc f\'(3) = 6. Tangente : y = 6(x - 3) + 9 = 6x - 9.' }
                ]
            },
            {
                id: 'suites',
                title: 'Suites numeriques',
                icon: '\uD83D\uDD22',
                content: '<h3>Definitions</h3>'
                    + '<ul>'
                    + '<li><strong>Suite arithmetique</strong> : u(n+1) = u(n) + r, ou r est la raison. Terme general : u(n) = u(0) + n*r</li>'
                    + '<li><strong>Suite geometrique</strong> : u(n+1) = u(n) * q, ou q est la raison. Terme general : u(n) = u(0) * q^n</li>'
                    + '<li><strong>Suite croissante</strong> : u(n+1) > u(n) pour tout n ; <strong>decroissante</strong> : u(n+1) < u(n)</li>'
                    + '</ul>'
                    + '<h3>Sommes</h3>'
                    + '<ul>'
                    + '<li><strong>Somme arithmetique</strong> : S = (n+1) * (u(0) + u(n)) / 2 = nombre de termes * (premier + dernier) / 2</li>'
                    + '<li><strong>Somme geometrique</strong> : S = u(0) * (1 - q^(n+1)) / (1 - q) si q != 1</li>'
                    + '</ul>'
                    + '<h3>Convergence</h3>'
                    + '<ul>'
                    + '<li>Une suite arithmetique de raison r > 0 tend vers +infini</li>'
                    + '<li>Une suite geometrique de raison |q| < 1 converge vers 0</li>'
                    + '<li><strong>Theoreme des gendarmes</strong> : si u(n) <= v(n) <= w(n) et lim u(n) = lim w(n) = L, alors lim v(n) = L</li>'
                    + '<li><strong>Suite bornee et monotone</strong> : toute suite croissante majoree (ou decroissante minoree) converge</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'C\'est quoi la formule d\'une suite arithmetique ?', answer: 'Formule : u(n) = u(0) + n * r. En gros : tu pars du premier terme et tu ajoutes la raison n fois. Exemple : u(0) = 3, r = 2. u(5) = 3 + 5*2 = 13. La suite : 3, 5, 7, 9, 11, 13... On ajoute 2 a chaque fois. Mots difficiles : "suite arithmetique" = on AJOUTE toujours le même nombre. "raison" (r) = le nombre qu\'on ajoute a chaque etape.' },
                    { question: 'C\'est quoi la formule d\'une suite geometrique ?', answer: 'Formule : u(n) = u(0) * q^n. En gros : tu pars du premier terme et tu MULTIPLIES par la raison n fois. Exemple : u(0) = 4, q = 1/2. u(3) = 4 * (1/2)^3 = 4 * 1/8 = 0,5. La suite : 4, 2, 1, 0.5... On divise par 2 a chaque fois. Mots difficiles : "suite geometrique" = on MULTIPLIE toujours par le même nombre. "raison" (q) = le nombre par lequel on multiplie.' },
                    { question: 'Comment calculer la somme d\'une suite arithmetique ?', answer: 'Formule : S = nombre de termes * (premier + dernier) / 2. Exemple celebre : 1 + 2 + 3 + ... + 100 = 100 * (1 + 100) / 2 = 5050. Piege : de u(0) a u(n) il y a n+1 termes (pas n). En gros : nombre de termes fois la moyenne du premier et du dernier.' },
                    { question: 'Comment calculer la somme d\'une suite geometrique ?', answer: 'Formule : S = u(0) * (1 - q^(n+1)) / (1 - q). Attention : cette formule ne marche que si q est different de 1. Si q = 1, la somme = (n+1) * u(0) (c\'est juste le premier terme repete). En gros : il faut connaitre u(0), q et le nombre de termes. Piege Bac : n+1 a l\'exposant, pas n.' },
                    { question: 'Quand une suite geometrique converge ?', answer: 'Si |q| < 1 (q est entre -1 et 1), elle converge vers 0. Exemple : q = 0,5 donne 1, 0.5, 0.25, 0.125... → ca tend vers 0. Si |q| > 1, elle diverge (les termes explosent). Si q = 1, elle est constante. Si q = -1, elle oscille (1, -1, 1, -1...). En gros : |q| < 1 = converge. |q| > 1 = diverge.' },
                    { question: 'C\'est quoi le theoreme des gendarmes ?', answer: 'Si une suite v(n) est COINCEE entre deux suites u(n) et w(n) qui vont TOUTES LES DEUX vers la même limite L, alors v(n) va aussi vers L. Imagine : tu marches entre deux gendarmes qui vont tous les deux au commissariat. Tu finiras au commissariat aussi. En gros : si t\'es coince entre deux trucs qui vont au même endroit, tu y vas aussi.' },
                    { question: 'Comment prouver qu\'une suite est arithmetique ?', answer: 'Calcule u(n+1) - u(n). Si tu trouves un nombre CONSTANT (toujours le meme), c\'est une suite arithmetique. Ce nombre constant c\'est la raison r. Exemple : u(n) = 3n + 5. u(n+1) - u(n) = 3(n+1) + 5 - (3n + 5) = 3. C\'est constant = suite arithmetique de raison 3.' },
                    { question: 'Comment prouver qu\'une suite est geometrique ?', answer: 'Calcule u(n+1) / u(n). Si tu trouves un nombre CONSTANT (toujours le meme), c\'est une suite geometrique. Ce nombre constant c\'est la raison q. Piege : verifie que u(n) n\'est JAMAIS egal a 0 (on ne peut pas diviser par 0). Exemple : u(n) = 3 * 2^n. u(n+1)/u(n) = 2 = constant = geometrique de raison 2.' },
                    { question: 'C\'est quoi explicite vs recursive ?', answer: 'EXPLICITE = la formule donne u(n) directement avec n. Exemple : u(n) = 3n + 1. Tu mets n = 5, tu as u(5) = 16. Pas besoin de calculer les termes avant. RECURSIVE = la formule donne u(n+1) a partir de u(n). Exemple : u(n+1) = 2*u(n) + 3. Pour trouver u(5), il faut calculer u(0), u(1), u(2), u(3), u(4) d\'abord. En gros : explicite = resultat direct. Recursive = il faut remonter terme par terme.' },
                    { question: 'Comment savoir si une suite arithmetique monte ou descend ?', answer: 'C\'est SIMPLE : regarde le signe de la raison r. r > 0 → la suite MONTE. r < 0 → la suite DESCEND. r = 0 → la suite est CONSTANTE. Exemple : u(n) = 5 + 3n, raison r = 3 > 0 → croissante. u(n) = 10 - 2n, raison r = -2 < 0 → decroissante. En gros : positif = monte, negatif = descend.' },
                    { question: 'Quand une suite geometrique diverge ?', answer: 'Elle diverge quand |q| > 1. Les termes deviennent de plus en plus GRANDS (en valeur absolue). Si q > 1 : les termes explosent vers +infini. Si q < -1 : les termes oscillent (+, -, +, -) et explosent en taille. Exemple : u(n) = 3 * 2^n diverge vers +infini (q = 2). u(n) = (-2)^n oscille : 1, -2, 4, -8, 16... ca explose. En gros : |q| > 1 = ca explose.' },
                    { question: 'C\'est quoi le theoreme de convergence monotone ?', answer: 'Si une suite MONTE et est BLOQUEE par un plafond (majoree), elle converge. Si une suite DESCEND et est BLOQUEE par un plancher (minoree), elle converge. En gros : si ca monte mais que ca ne peut pas depasser un certain niveau, ca se stabilise forcement. Au Bac : 1) Montre que ca monte (par recurrence). 2) Trouve le plafond. 3) Conclus : "suite croissante majoree donc convergente."' }
                ],
                quiz: [
                    { question: 'Le terme general d\'une suite arithmetique de premier terme 3 et de raison 2 est :', options: ['\\( u_{n} = 2n + 3 \\)', '\\( u_{n} = 3n + 2 \\)', '\\( u_{n} = 3 \\times 2^{n} \\)', '\\( u_{n} = 2^{n} + 3 \\)'], correctIndex: 0, explanation: '\\( u_{n} = u_{0} + nr = 3 + 2n \\).' },
                    { question: 'Une suite geometrique de raison \\( q = 0{,}5 \\) :', options: ['Diverge', 'Converge vers 0', 'Est constante', 'Oscille'], correctIndex: 1, explanation: 'Si \\( |q| < 1 \\), la suite geometrique converge vers 0.' },
                    { question: 'La somme \\( 1 + 2 + 3 + \\cdots + 100 \\) vaut :', options: ['5000', '5050', '10100', '5100'], correctIndex: 1, explanation: '\\( S = \\frac{100 \\times 101}{2} = 5050 \\).' },
                    { question: 'Le theoreme des gendarmes sert a :', options: ['Calculer une derivee', 'Prouver une convergence', 'Trouver un extremum', 'Calculer une integrale'], correctIndex: 1, explanation: 'Le theoreme des gendarmes permet de determiner la limite d\'une suite encadree.' },
                    { question: 'La somme des 20 premiers termes, \\( u_{0} = 5 \\), \\( r = 3 \\) :', options: ['670', '100', '570', '1140'], correctIndex: 0, explanation: '\\( u_{19} = 5 + 19 \\times 3 = 62 \\). \\( S = \\frac{20 \\times (5+62)}{2} = 670 \\).' },
                    { question: '\\( u_{0} = 4 \\), \\( q = \\frac{1}{2} \\). Que vaut \\( u_{3} \\) ?', options: ['2', '1', '0,5', '1/2'], correctIndex: 2, explanation: '\\( u_{3} = 4 \\times \\left(\\frac{1}{2}\\right)^{3} = 4 \\times \\frac{1}{8} = 0{,}5 \\).' },
                    { question: 'La suite u(n) = 2^n est :', options: ['Explicite', 'Recursive', 'Arithmetique', 'Ni explicite ni recursive'], correctIndex: 0, explanation: 'u(n) = 2^n donne directement u(n) en fonction de n, c\'est donc une suite explicite.' },
                    { question: 'Une suite arithmetique de raison r = -4 est :', options: ['Croissante', 'Decroissante', 'Constante', 'On ne peut pas conclure'], correctIndex: 1, explanation: 'Pour une suite arithmetique, r < 0 implique que la suite est strictement decroissante.' },
                    { question: 'La suite u(n) = 5 * (-3)^n est :', options: ['Convergente vers 0', 'Convergente vers 5', 'Divergente', 'Constante'], correctIndex: 2, explanation: 'q = -3, donc |q| = 3 > 1. La suite diverge (les termes oscillent et explosent en valeur absolue).' }
                ]
            },
            {
                id: 'probabilites',
                title: 'Probabilites & Statistiques',
                icon: '\uD83C\uDFB2',
                content: '<h3>Probabilites de base</h3>'
                    + '<ul>'
                    + '<li><strong>Experience aleatoire</strong> : expérience dont le resultat n\'est pas previsible</li>'
                    + '<li><strong>Univers</strong> (omega) : ensemble de tous les resultats possibles</li>'
                    + '<li><strong>Evenement</strong> : sous-ensemble de l\'univers. P(A) est compris entre 0 et 1</li>'
                    + '<li><strong>Equiprobabilite</strong> : P(A) = nombre de cas favorables / nombre de cas possibles</li>'
                    + '</ul>'
                    + '<h3>Formules essentielles</h3>'
                    + '<ul>'
                    + '<li><strong>P(A union B)</strong> = P(A) + P(B) - P(A inter B)</li>'
                    + '<li><strong>P(contraire de A)</strong> = 1 - P(A)</li>'
                    + '<li><strong>Probabilites conditionnelles</strong> : P(A|B) = P(A inter B) / P(B)</li>'
                    + '<li><strong>Formule des probabilites totales</strong> : P(B) = P(B|A)*P(A) + P(B|contraire A)*P(contraire A)</li>'
                    + '</ul>'
                    + '<h3>Lois de probabilite</h3>'
                    + '<ul>'
                    + '<li><strong>Loi binomiale</strong> B(n,p) : n epreuves independantes, probabilite de succes p. P(X=k) = C(n,k) * p^k * (1-p)^(n-k)</li>'
                    + '<li><strong>Esperance E(X)</strong> = n*p ; <strong>Variance V(X)</strong> = n*p*(1-p)</li>'
                    + '<li><strong>Loi normale</strong> : loi en cloche, modelise les phénomènes naturels. Moyenne mu, ecart-type sigma</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'C\'est quoi P(A ou B) ?', answer: 'Formule : P(A ou B) = P(A) + P(B) - P(A et B). Pourquoi le moins ? Parce que si A et B peuvent arriver en même temps, on les compte 2 fois. Il faut retirer le doublon. Si A et B ne peuvent JAMAIS arriver en même temps (incompatibles) : P(A ou B) = P(A) + P(B). Exemple : de a 6 faces. P(pair OU >4) = P(pair) + P(>4) - P(pair ET >4) = 3/6 + 2/6 - 1/6 = 4/6.' },
                    { question: 'C\'est quoi une probabilite conditionnelle ?', answer: 'P(A sachant B) = P(A et B) / P(B). En gros : quelle est la chance que A arrive, SI on sait DEJA que B est arrive ? Exemple : dans une classe, 60% des élèves ont un portable (B). Parmi ceux qui ont un portable, 40% ont un iPhone (A sachant B). P(iPhone ET portable) = 0.4 * 0.6 = 0.24. Piege : P(B) doit etre different de 0.' },
                    { question: 'C\'est quoi la loi binomiale ?', answer: 'On l\'utilise quand on REPETE n fois la même expérience avec 2 resultats possibles (succes/echec). P(X = k) = C(n,k) * p^k * (1-p)^(n-k). En gros : "combien de chances d\'avoir exactement k succes sur n essais ?" Exemple : 10 lancers de piece, proba d\'avoir exactement 3 piles. Quand l\'utiliser : repeter, independant, 2 issues, même proba.' },
                    { question: 'C\'est quoi l\'esperance ?', answer: 'Formule (loi binomiale) : E(X) = n * p. C\'est la MOYENNE attendue. En gros : si tu repetes l\'expérience plein de fois, c\'est le nombre moyen de succes. Exemple : tu lances un de 100 fois. Proba de 6 = 1/6. E(X) = 100 * 1/6 = ~16,7. En moyenne, tu auras ~17 fois le 6. Mots difficiles : "esperance" = la valeur moyenne qu\'on s\'attend a obtenir.' },
                    { question: 'C\'est quoi la variance et l\'ecart-type ?', answer: 'Variance V(X) = n * p * (1-p). Ecart-type = racine de la variance. Ca mesure si les resultats sont REGROUPES ou DISPERSES autour de la moyenne. Variance petite = resultats regroupes. Variance grande = resultats eparpilles. Exemple : V(X) = 100 * 1/6 * 5/6 = ~13,9. Ecart-type = racine(13,9) = ~3,7. En gros : tes resultats varieront d\'environ 3,7 autour de la moyenne.' },
                    { question: 'C\'est quoi la formule des probabilites totales ?', answer: 'P(A) = P(A sachant B)*P(B) + P(A sachant non B)*P(non B). En gros : pour calculer P(A), on passe par TOUS les chemins possibles dans l\'arbre. On multiplie le long de chaque chemin, puis on additionne. Methode Bac : TOUJOURS dessiner l\'arbre. Puis reperer tous les chemins qui menent a A. Multiplier sur chaque chemin. Additionner les chemins.' },
                    { question: 'Astuce : comment calculer "au moins un" ?', answer: 'P(au moins 1) = 1 - P(aucun). C\'est BEAUCOUP plus simple ! Exemple : proba d\'avoir au moins un 6 en 4 lancers de de. P(aucun 6) = (5/6)^4 = 0,48. P(au moins un 6) = 1 - 0,48 = 0,52. En gros : au lieu de calculer "1 six OU 2 six OU 3 six OU 4 six", tu calcules "zero six" et tu fais 1 moins ca. Mots difficiles : "complementaire" = l\'evenement contraire.' },
                    { question: 'C\'est quoi l\'equiprobabilite ?', answer: 'C\'est quand tous les resultats ont la MEME chance d\'arriver. Dans ce cas : P(A) = cas favorables / cas totaux. Exemple : un de equilibre, chaque face a 1 chance sur 6. P(pair) = 3 faces paires / 6 faces totales = 1/2. Piege : un de pipe n\'est PAS equiprobable. Une piece truquee non plus. En gros : equiprobabilite = tout le monde à la même chance.' },
                    { question: 'Quand utiliser la loi binomiale ?', answer: 'Checklist : 1) On REPETE la même chose n fois. 2) Chaque essai est INDEPENDANT. 3) Il y a exactement 2 issues (succes ou echec). 4) La proba de succes p est TOUJOURS la meme. Si les 4 conditions sont remplies → binomiale. Repere dans l\'enonce : "on repete", "independant", "succes/echec", "meme probabilite." Exemple type : lancer une piece n fois, tirer avec remise.' },
                    { question: 'C\'est quoi l\'independance en proba ?', answer: 'A et B sont independants si P(A et B) = P(A) * P(B). En gros : savoir que B est arrive ne change PAS la chance de A. Exemple : un de rouge et un de bleu. Le rouge ne change pas le bleu. P(6 rouge ET 6 bleu) = 1/6 * 1/6 = 1/36. Piege Bac : independant n\'est PAS la même chose qu\'incompatible ! Incompatible = ils ne peuvent pas arriver en même temps. Independant = l\'un n\'influence pas l\'autre.' },
                    { question: 'Comment utiliser un arbre de probas ?', answer: 'Regles simples : 1) Chaque branche porte une proba. 2) Les branches qui partent du même point = somme = 1. 3) Pour un CHEMIN : on MULTIPLIE les probas. 4) Pour un EVENEMENT : on ADDITIONNE les chemins qui y menent. Exemple : P(A) = 0,6 puis P(B sachant A) = 0,3. P(A et B) = 0,6 * 0,3 = 0,18. Astuce : dessine TOUJOURS l\'arbre. C\'est le meilleur outil en probas.' },
                    { question: 'Comment utiliser les probas totales avec un arbre ?', answer: 'Etapes : 1) Dessine l\'arbre complet. 2) Repere TOUS les chemins qui menent a l\'evenement que tu cherches. 3) Multiplie sur chaque chemin. 4) Additionne tous les chemins. Exemple : 60% fideles, 40% nouveaux. P(achat si fidele) = 0,8. P(achat si nouveau) = 0,2. P(achat) = 0,8*0,6 + 0,2*0,4 = 0,56. En gros : on passe par tous les chemins possibles et on additionne.' },
                    { question: 'C\'est quoi l\'ecart-type en stats ?', answer: 'C\'est un nombre qui mesure si les valeurs sont GROUPEES ou DISPERSEES autour de la moyenne. Petit ecart-type = tout le monde est pres de la moyenne. Grand ecart-type = les valeurs sont eparpillees. Formule : ecart-type = racine(variance). Variance = moyenne des carres - carre de la moyenne. Exemple : notes 8, 10, 12. Moyenne = 10. Ecart-type = ~1,63 → les notes sont proches de 10.' },
                    { question: 'C\'est quoi la mediane ?', answer: 'C\'est la valeur qui coupe la serie en DEUX moities egales. 50% des valeurs sont en dessous, 50% au dessus. Methode : 1) Range les valeurs dans l\'ordre. 2) Prends celle du milieu. Si nombre pair de valeurs, prends la moyenne des 2 du milieu. Exemple : 3, 5, 7, 9, 11 → mediane = 7. Exemple pair : 3, 5, 7, 9 → mediane = (5+7)/2 = 6. En gros : la mediane c\'est le milieu de la liste triee.' },
                    { question: 'C\'est quoi les quartiles Q1 et Q3 ?', answer: 'Q1 = la valeur en dessous de laquelle il y a 25% des donnees. Q3 = en dessous de laquelle il y a 75%. L\'ecart interquartile = Q3 - Q1 = la "largeur" de la zone ou se trouvent 50% des donnees. En gros : Q1 et Q3 decoupent tes donnees en 4 parts egales. Sur un diagramme en boite : Q1 = bord gauche, Q3 = bord droit, mediane = trait au milieu.' },
                    { question: 'Comment lire un diagramme en boite ?', answer: 'Un diagramme en boite montre 5 choses : minimum, Q1, mediane, Q3, maximum. La BOITE contient 50% des valeurs centrales. Les MOUSTACHES montrent les valeurs extremes. Boite courte = donnees groupees. Boite large = donnees dispersees. Moustaches longues = valeurs extremes. Pour comparer 2 series : compare les medianes (qui est plus haut ?) et les boites (qui est plus disperse ?).' }
                ],
                quiz: [
                    { question: '\\( P(\\bar{A}) \\) est egal a :', options: ['\\( P(A) \\)', '\\( 1 - P(A) \\)', '\\( \\frac{1}{P(A)} \\)', '\\( P(A)^{2} \\)'], correctIndex: 1, explanation: 'L\'evenement contraire à une probabilite complementaire a 1.' },
                    { question: 'L\'esperance de \\( B(100 ;\\ 0{,}3) \\) vaut :', options: ['\\( 30 \\)', '\\( 70 \\)', '\\( 0{,}3 \\)', '\\( 300 \\)'], correctIndex: 0, explanation: '\\( E(X) = n \\times p = 100 \\times 0{,}3 = 30 \\).' },
                    { question: '\\( P(A \\cup B) = P(A) + P(B) \\) quand :', options: ['Toujours', 'A et B sont independants', 'A et B sont incompatibles', '\\( P(A) = P(B) \\)'], correctIndex: 2, explanation: 'Si A et B sont incompatibles (\\( A \\cap B = \\varnothing \\)), le terme \\( P(A \\cap B) \\) est nul.' },
                    { question: 'La loi binomiale modelise :', options: ['Un phénomène continu', 'La repetition d\'epreuves independantes a 2 issues', 'La moyenne d\'un echantillon', 'Un tirage sans remise'], correctIndex: 1, explanation: 'La loi binomiale \\( B(n,p) \\) modelise le nombre de succes dans \\( n \\) epreuves de Bernoulli independantes.' },
                    { question: 'On lance un de equilibre deux fois. La probabilite d\'obtenir au moins un 6 est :', options: ['\\( \\frac{1}{3} \\)', '\\( \\frac{1}{6} \\)', '\\( \\frac{11}{36} \\)', '\\( \\frac{1}{36} \\)'], correctIndex: 2, explanation: '\\( P(\\text{au moins un 6}) = 1 - P(\\text{aucun 6}) = 1 - \\left(\\frac{5}{6}\\right)^{2} = 1 - \\frac{25}{36} = \\frac{11}{36} \\).' },
                    { question: 'Si \\( P(A) = 0{,}6 \\), \\( P(B) = 0{,}5 \\) et \\( P(A \\cap B) = 0{,}3 \\), alors \\( P(A \\cup B) = \\) :', options: ['\\( 1{,}1 \\)', '\\( 0{,}8 \\)', '\\( 0{,}3 \\)', '\\( 0{,}9 \\)'], correctIndex: 1, explanation: '\\( P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = 0{,}6 + 0{,}5 - 0{,}3 = 0{,}8 \\).' },
                    { question: 'A et B sont independants si :', options: ['P(A inter B) = 0', 'P(A inter B) = P(A) * P(B)', 'P(A) = P(B)', 'P(A union B) = 1'], correctIndex: 1, explanation: 'L\'independance signifie P(A inter B) = P(A) * P(B). Attention : P(A inter B) = 0 c\'est l\'incompatibilite, pas l\'independance.' },
                    { question: 'Dans un arbre pondere, P(A) = 0.7 et P(B|A) = 0.4. Que vaut P(A inter B) ?', options: ['1.1', '0.28', '0.3', '0.57'], correctIndex: 1, explanation: 'On multiplie le long du chemin : P(A inter B) = P(A) * P(B|A) = 0.7 * 0.4 = 0.28.' },
                    { question: 'La mediane de la serie ordonnee 2, 5, 8, 11, 14 est :', options: ['5', '8', '11', '10'], correctIndex: 1, explanation: 'Serie de 5 valeurs, la mediane est la valeur centrale (position 3) : 8.' }
                ]
            },
            {
                id: 'geometrie',
                title: 'Geometrie dans l\'espace',
                icon: '\uD83D\uDDB1\uFE0F',
                content: '<h3>Vecteurs dans l\'espace</h3>'
                    + '<ul>'
                    + '<li><strong>Coordonnees</strong> : un point M(x, y, z) dans un repère orthonorme (O, i, j, k)</li>'
                    + '<li><strong>Vecteur AB</strong> = (xB - xA, yB - yA, zB - zA)</li>'
                    + '<li><strong>Norme</strong> : ||AB|| = racine((xB-xA)^2 + (yB-yA)^2 + (zB-zA)^2)</li>'
                    + '<li><strong>Produit scalaire</strong> : u.v = x1*x2 + y1*y2 + z1*z2</li>'
                    + '</ul>'
                    + '<h3>Plans et droites</h3>'
                    + '<ul>'
                    + '<li><strong>Equation de plan</strong> : ax + by + cz + d = 0, ou (a, b, c) est un vecteur normal au plan</li>'
                    + '<li><strong>Plan defini par 3 points</strong> non alignes ou par un point et un vecteur normal</li>'
                    + '<li><strong>Droite parametrique</strong> : x = x0 + at ; y = y0 + bt ; z = z0 + ct (vecteur directeur (a,b,c))</li>'
                    + '</ul>'
                    + '<h3>Positions relatives</h3>'
                    + '<ul>'
                    + '<li><strong>Droites paralleles</strong> : vecteurs directeurs colineaires</li>'
                    + '<li><strong>Droite perpendiculaire à un plan</strong> : son vecteur directeur est colineaire au vecteur normal du plan</li>'
                    + '<li><strong>Plans paralleles</strong> : vecteurs normaux colineaires</li>'
                    + '<li><strong>Distance d\'un point à un plan</strong> : d = |ax0 + by0 + cz0 + d| / racine(a^2 + b^2 + c^2)</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'Comment calculer le vecteur AB ?', answer: 'Formule : vecteur AB = (xB - xA, yB - yA, zB - zA). En gros : arrivee MOINS depart pour chaque coordonnee. Exemple : A(1,2,3) et B(4,5,6). AB = (4-1, 5-2, 6-3) = (3, 3, 3). Mots difficiles : "vecteur" = une fleche qui à une direction, un sens et une longueur. "coordonnees" = les 3 nombres (x, y, z) qui donnent la position dans l\'espace.' },
                    { question: 'Comment calculer la longueur d\'un vecteur ?', answer: 'Formule : ||u|| = racine(a^2 + b^2 + c^2). C\'est le theoreme de Pythagore mais en 3D. Exemple : u = (3, 4, 0). ||u|| = racine(9 + 16 + 0) = racine(25) = 5. En gros : tu additionnes les carres des coordonnees et tu prends la racine. Mots difficiles : "norme" = la longueur d\'un vecteur.' },
                    { question: 'C\'est quoi le produit scalaire ?', answer: 'Formule : u.v = x1*x2 + y1*y2 + z1*z2. On multiplie les coordonnees qui se correspondent et on additionne. Si u.v = 0, les vecteurs sont PERPENDICULAIRES. C\'est LE test pour prouver que 2 droites sont perpendiculaires au Bac. Exemple : u = (1, 2, 3), v = (3, -3, 1). u.v = 3 - 6 + 3 = 0 → perpendiculaires !' },
                    { question: 'C\'est quoi l\'equation d\'un plan ?', answer: 'Formule : ax + by + cz + d = 0. Le vecteur (a, b, c) est PERPENDICULAIRE au plan (= vecteur normal). Pour trouver l\'equation, il te faut : 1 point du plan + le vecteur normal. Exemple : vecteur normal (2, -1, 3), point A(1, 0, 2). Equation : 2(x-1) - 1(y-0) + 3(z-2) = 0 → 2x - y + 3z - 8 = 0. Mots difficiles : "vecteur normal" = le vecteur perpendiculaire au plan.' },
                    { question: 'C\'est quoi une droite parametrique ?', answer: 'Formule : x = x0 + a*t, y = y0 + b*t, z = z0 + c*t. Il te faut : 1 point (x0, y0, z0) + 1 vecteur directeur (a, b, c). Le parametre t varie : chaque valeur de t donne un point de la droite. En gros : c\'est une recette pour fabriquer tous les points de la droite. Mots difficiles : "vecteur directeur" = le vecteur qui donne la direction de la droite. "parametre" = le nombre t qui varie.' },
                    { question: 'Comment prouver que 2 plans sont paralleles ?', answer: 'Leurs vecteurs normaux doivent etre PROPORTIONNELS (= l\'un est un multiple de l\'autre). Exemple : plan 2x + 4y - 6z = 1 et plan x + 2y - 3z = 5. Vecteurs normaux : (2, 4, -6) et (1, 2, -3). On voit que (2, 4, -6) = 2 * (1, 2, -3) → proportionnels → plans paralleles. En gros : même direction perpendiculaire = même orientation = paralleles.' },
                    { question: 'Comment calculer la distance d\'un point à un plan ?', answer: 'Formule : d = |a*x0 + b*y0 + c*z0 + d| / racine(a^2 + b^2 + c^2). En gros : 1) Remplace les coordonnees du point dans l\'equation du plan. 2) Prends la valeur absolue. 3) Divise par la longueur du vecteur normal. Exemple : point M(1, 0, 1), plan 2x - y + 2z - 1 = 0. d = |2 - 0 + 2 - 1| / racine(4 + 1 + 4) = 3/3 = 1.' },
                    { question: 'Comment prouver qu\'une droite est perpendiculaire à un plan ?', answer: 'Le vecteur directeur de la droite doit etre proportionnel au vecteur normal du plan. En gros : la droite "pointe" dans la direction perpendiculaire au plan. Si le vecteur directeur = k * vecteur normal, alors la droite est perpendiculaire au plan. Exemple : droite de direction (2, -1, 3), plan de normale (4, -2, 6). (4, -2, 6) = 2 * (2, -1, 3) → proportionnels → perpendiculaire.' }
                ],
                quiz: [
                    { question: '\\( \\vec{u} \\cdot \\vec{v} = 0 \\) signifie que :', options: ['\\( \\vec{u} \\) et \\( \\vec{v} \\) sont paralleles', '\\( \\vec{u} \\) et \\( \\vec{v} \\) sont orthogonaux', '\\( \\vec{u} = \\vec{v} \\)', '\\( \\vec{u} \\) ou \\( \\vec{v} \\) est nul'], correctIndex: 1, explanation: 'Deux vecteurs non nuls dont le produit scalaire vaut zero sont perpendiculaires (orthogonaux).' },
                    { question: 'La norme du vecteur \\( (3, 4, 0) \\) est :', options: ['\\( 7 \\)', '\\( 5 \\)', '\\( 25 \\)', '\\( 12 \\)'], correctIndex: 1, explanation: '\\( \\|\\vec{u}\\| = \\sqrt{3^{2} + 4^{2} + 0^{2}} = \\sqrt{9 + 16} = \\sqrt{25} = 5 \\).' },
                    { question: 'L\'equation \\( ax + by + cz + d = 0 \\) definit :', options: ['Une droite', 'Un plan', 'Un cercle', 'Une sphere'], correctIndex: 1, explanation: 'C\'est l\'equation cartesienne d\'un plan dans l\'espace, avec \\( (a,b,c) \\) comme vecteur normal.' },
                    { question: 'Deux plans sont paralleles si leurs vecteurs normaux sont :', options: ['Orthogonaux', 'Colineaires', 'De même norme', 'Opposes uniquement'], correctIndex: 1, explanation: 'Des vecteurs normaux colineaires (proportionnels) signifient que les plans sont paralleles.' },
                    { question: 'La distance du point \\( M(1, 0, 1) \\) au plan \\( 2x - y + 2z - 1 = 0 \\) est :', options: ['\\( 3 \\)', '\\( \\frac{5}{3} \\)', '\\( 1 \\)', '\\( 2 \\)'], correctIndex: 2, explanation: '\\( d = \\frac{|2 \\times 1 - 0 + 2 \\times 1 - 1|}{\\sqrt{2^{2} + 1^{2} + 2^{2}}} = \\frac{|2 + 2 - 1|}{\\sqrt{9}} = \\frac{3}{3} = 1 \\).' }
                ]
            },
            // =====================================================================
            // SECTION 5 : Integrales
            // =====================================================================
            {
                id: 'integrales',
                title: 'Integrales',
                icon: '\u222B',
                content: '<h3>Primitives</h3>'
                    + '<ul>'
                    + '<li><strong>Definition</strong> : F est une primitive de f sur un intervalle I si F\'(x) = f(x) pour tout x dans I</li>'
                    + '<li><strong>Primitives usuelles</strong> : primitive de x^n = x^(n+1)/(n+1) (n != -1) ; primitive de 1/x = ln|x| ; primitive de e^x = e^x ; primitive de cos(x) = sin(x) ; primitive de sin(x) = -cos(x)</li>'
                    + '<li><strong>Unicite à une constante pres</strong> : si F est une primitive de f, alors toute primitive de f s\'ecrit F(x) + C, ou C est une constante reelle</li>'
                    + '</ul>'
                    + '<h3>Integrale definie et theoreme fondamental</h3>'
                    + '<ul>'
                    + '<li><strong>Definition</strong> : l\'integrale de a a b de f(x)dx représenté l\'aire algebrique entre la courbe de f, l\'axe des abscisses, et les droites x = a et x = b</li>'
                    + '<li><strong>Theoreme fondamental</strong> : si F est une primitive de f continue sur [a, b], alors integrale de a a b de f(x)dx = F(b) - F(a)</li>'
                    + '<li><strong>Notation</strong> : integrale de a a b de f(x)dx = [F(x)] entre a et b = F(b) - F(a)</li>'
                    + '</ul>'
                    + '<h3>Calcul d\'aires et proprietes</h3>'
                    + '<ul>'
                    + '<li><strong>Aire sous une courbe</strong> : si f >= 0 sur [a, b], l\'aire = integrale de a a b de f(x)dx</li>'
                    + '<li><strong>Aire entre deux courbes</strong> : aire = integrale de a a b de |f(x) - g(x)|dx</li>'
                    + '<li><strong>Linearite</strong> : integrale de (alpha*f + beta*g) = alpha * integrale de f + beta * integrale de g</li>'
                    + '<li><strong>Relation de Chasles</strong> : integrale de a a b + integrale de b a c = integrale de a a c</li>'
                    + '<li><strong>Positivite</strong> : si f >= 0 sur [a, b], alors integrale de a a b de f(x)dx >= 0</li>'
                    + '</ul>'
                    + '<h3>Integration par parties</h3>'
                    + '<ul>'
                    + '<li><strong>Formule</strong> : integrale de a a b de u\'(x)*v(x)dx = [u(x)*v(x)] entre a et b - integrale de a a b de u(x)*v\'(x)dx</li>'
                    + '<li><strong>Methode</strong> : choisir u\' et v de facon a simplifier le calcul. Typiquement v = polynome (qui se simplifie en derivant)</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'C\'est quoi une primitive ?', answer: 'C\'est l\'INVERSE de la derivee. Si tu derives F et tu obtiens f, alors F est une primitive de f. Exemple : la primitive de x^2 c\'est x^3/3 (car si tu derives x^3/3, tu retrouves x^2). Piege : il y a toujours une INFINITE de primitives (on peut ajouter n\'importe quelle constante +C). En gros : deriver = descendre. Primitiver = remonter. Mots difficiles : "primitive" = la fonction dont la derivee donne f.' },
                    { question: 'C\'est quoi la primitive de x^n ?', answer: 'Formule : primitive de x^n = x^(n+1) / (n+1) + C. En gros : l\'exposant MONTE de 1, et on DIVISE par le nouvel exposant. C\'est l\'inverse de la derivee. Exemple : primitive de x^3 = x^4/4 + C. Piege : cette formule ne marche PAS pour n = -1 (1/x). Dans ce cas, la primitive est ln|x| + C.' },
                    { question: 'C\'est quoi la primitive de 1/x ?', answer: 'Formule : primitive de 1/x = ln|x| + C. C\'est le cas SPECIAL ou la formule habituelle ne marche pas (car on ne peut pas diviser par 0 quand n+1 = 0). Piege Bac : ne pas oublier la VALEUR ABSOLUE |x|. En gros : 1/x est le seul cas ou la primitive n\'est pas une puissance de x mais un logarithme.' },
                    { question: 'Comment calculer une integrale ?', answer: 'Etapes : 1) Trouve la primitive F de f. 2) Calcule F(b) (la borne du haut). 3) Calcule F(a) (la borne du bas). 4) Fais F(b) - F(a). Exemple : integrale de 0 a 2 de x dx. Primitive de x = x^2/2. F(2) - F(0) = 4/2 - 0 = 2. En gros : integrale = primitive en haut MOINS primitive en bas.' },
                    { question: 'L\'integrale ca représenté quoi concretement ?', answer: 'C\'est l\'AIRE sous la courbe entre a et b. Si la courbe est AU-DESSUS de l\'axe x → aire positive. Si elle est EN-DESSOUS → aire negative. Piege Bac : si on demande une AIRE (pas une integrale), il faut prendre la valeur absolue quand la courbe passe en dessous. En gros : integrale = aire signee (+ au-dessus, - en-dessous).' },
                    { question: 'C\'est quoi la relation de Chasles ?', answer: 'On peut DECOUPER une integrale en morceaux. Integrale de a a c = integrale de a a b + integrale de b a c. C\'est utile quand la fonction change de signe : on decoupe la ou elle passe par 0. En gros : c\'est comme faire un trajet en 2 etapes au lieu d\'une seule. La distance totale est la meme.' },
                    { question: 'C\'est quoi l\'integration par parties (IPP) ?', answer: 'Formule : integrale de u\'*v = [u*v] - integrale de u*v\'. En gros : quand tu ne peux pas integrer directement, tu "transferes" la derivee d\'un facteur a l\'autre. Astuce : choisis v = le truc qui se SIMPLIFIE en derivant (souvent le polynome). Exemple : integrale de x * e^x. v = x (se simplifie en 1), u\' = e^x (se primitive facilement en e^x).' },
                    { question: 'Primitives de sin et cos ?', answer: 'Primitive de cos(x) = sin(x) + C. Primitive de sin(x) = -cos(x) + C. Piege : le MOINS devant cos ! Astuce pour retenir : la derivation fait tourner sin → cos → -sin → -cos. La primitivation fait le tour dans l\'AUTRE sens. En gros : sin et cos sont liees, attention au signe moins.' },
                    { question: 'Calcule integrale de 0 a 1 de x^2', answer: 'Primitive de x^2 = x^3/3. On calcule : F(1) - F(0) = 1/3 - 0 = 1/3. En gros : l\'aire sous la courbe y = x^2 entre 0 et 1 vaut 1/3. Methode : toujours 3 etapes — trouver la primitive, calculer en haut, calculer en bas, soustraire.' },
                    { question: 'Astuce : aire entre 2 courbes ?', answer: 'Formule : Aire = integrale de a a b de |f(x) - g(x)| dx. Etapes : 1) Trouve les INTERSECTIONS (f = g). 2) Determine qui est AU-DESSUS. 3) Integre la DIFFERENCE. Piege : ne pas oublier la valeur absolue si les courbes se croisent. En gros : aire entre 2 courbes = integrale de la distance entre elles.' }
                ],
                quiz: [
                    { question: 'La primitive de \\( x^{3} \\) est :', options: ['\\( 3x^{2} \\)', '\\( \\frac{x^{4}}{4} + C \\)', '\\( x^{4} + C \\)', '\\( \\frac{x^{3}}{3} + C \\)'], correctIndex: 1, explanation: 'Primitive de \\( x^{n} = \\frac{x^{n+1}}{n+1} + C \\). Ici : \\( \\frac{x^{4}}{4} + C \\).' },
                    { question: '\\( \\int_{0}^{2} 3x^{2}\\,dx \\) vaut :', options: ['\\( 6 \\)', '\\( 8 \\)', '\\( 12 \\)', '\\( 4 \\)'], correctIndex: 1, explanation: 'Primitive de \\( 3x^{2} = x^{3} \\). \\( \\left[x^{3}\\right]_{0}^{2} = 8 - 0 = 8 \\).' },
                    { question: 'Le theoreme fondamental affirme que \\( \\int_{a}^{b} f(x)\\,dx = \\) :', options: ['\\( f(b) - f(a) \\)', '\\( F(b) - F(a) \\)', '\\( F(a) - F(b) \\)', '\\( f\'(b) - f\'(a) \\)'], correctIndex: 1, explanation: 'Si \\( F \\) est une primitive de \\( f \\), alors \\( \\int_{a}^{b} f(x)\\,dx = F(b) - F(a) \\).' },
                    { question: '\\( \\int_{0}^{1} e^{x}\\,dx \\) vaut :', options: ['\\( e \\)', '\\( e - 1 \\)', '\\( 1 \\)', '\\( e + 1 \\)'], correctIndex: 1, explanation: 'Primitive de \\( e^{x} = e^{x} \\). \\( \\left[e^{x}\\right]_{0}^{1} = e^{1} - e^{0} = e - 1 \\).' },
                    { question: 'La relation de Chasles pour les integrales signifie :', options: ['On peut permuter les bornes', 'On peut decomposer une integrale en somme', 'L\'integrale est toujours positive', '\\( F\'(x) = f(x) \\)'], correctIndex: 1, explanation: '\\( \\int_{a}^{c} f(x)\\,dx = \\int_{a}^{b} f(x)\\,dx + \\int_{b}^{c} f(x)\\,dx \\), pour tout \\( b \\) entre \\( a \\) et \\( c \\).' },
                    { question: '\\( \\int_{1}^{e} \\frac{1}{x}\\,dx \\) vaut :', options: ['\\( 0 \\)', '\\( e \\)', '\\( 1 \\)', '\\( \\ln(e) - 1 \\)'], correctIndex: 2, explanation: 'Primitive de \\( \\frac{1}{x} = \\ln(x) \\). \\( \\left[\\ln(x)\\right]_{1}^{e} = \\ln(e) - \\ln(1) = 1 - 0 = 1 \\).' },
                    { question: 'Si \\( f(x) \\geq 0 \\) sur \\( [a, b] \\), alors \\( \\int_{a}^{b} f(x)\\,dx \\) est :', options: ['Negative', 'Nulle', 'Positive ou nulle', 'Egale a \\( f(b) \\)'], correctIndex: 2, explanation: 'La positivite de l\'integrale : si \\( f \\geq 0 \\), alors \\( \\int_{a}^{b} f(x)\\,dx \\geq 0 \\).' },
                    { question: 'La primitive de \\( \\cos(x) \\) est :', options: ['\\( -\\sin(x) + C \\)', '\\( \\sin(x) + C \\)', '\\( \\cos(x) + C \\)', '\\( -\\cos(x) + C \\)'], correctIndex: 1, explanation: 'On verifie : \\( (\\sin(x))\' = \\cos(x) \\). Donc \\( \\sin(x) + C \\) est bien la primitive de \\( \\cos(x) \\).' },
                    { question: 'Integration par parties : \\( \\int u\'v\\,dx = \\) :', options: ['\\( uv - \\int uv\'\\,dx \\)', '\\( u\'v\' + C \\)', '\\( uv + \\int uv\'\\,dx \\)', '\\( \\frac{u}{v} - \\int \\frac{u\'}{v\'}\\,dx \\)'], correctIndex: 0, explanation: 'Formule IPP : \\( \\int u\'v = \\left[uv\\right] - \\int uv\' \\). On evalue entre les bornes.' },
                    { question: '\\( \\int_{0}^{\\pi} \\sin(x)\\,dx \\) vaut :', options: ['\\( 0 \\)', '\\( 1 \\)', '\\( 2 \\)', '\\( -2 \\)'], correctIndex: 2, explanation: 'Primitive de \\( \\sin(x) = -\\cos(x) \\). \\( \\left[-\\cos(x)\\right]_{0}^{\\pi} = -\\cos(\\pi) - (-\\cos(0)) = 1 + 1 = 2 \\).' },
                    { question: '\\( \\int_{1}^{2} \\frac{1}{x^{2}}\\,dx \\) vaut :', options: ['\\( 1 \\)', '\\( \\frac{1}{2} \\)', '\\( \\ln(2) \\)', '\\( -\\frac{1}{2} \\)'], correctIndex: 1, explanation: 'Primitive de \\( \\frac{1}{x^{2}} = x^{-2} \\), donc primitive \\( = -\\frac{1}{x} \\). \\( \\left[-\\frac{1}{x}\\right]_{1}^{2} = -\\frac{1}{2} - (-1) = \\frac{1}{2} \\).' },
                    { question: 'L\'aire sous la courbe de \\( f(x) = x \\) entre 0 et 4 vaut :', options: ['\\( 4 \\)', '\\( 16 \\)', '\\( 8 \\)', '\\( 2 \\)'], correctIndex: 2, explanation: 'Primitive de \\( x = \\frac{x^{2}}{2} \\). \\( \\left[\\frac{x^{2}}{2}\\right]_{0}^{4} = \\frac{16}{2} - 0 = 8 \\). C\'est aussi l\'aire du triangle de base 4 et hauteur 4 : \\( \\frac{4 \\times 4}{2} = 8 \\).' }
                ]
            },
            // =====================================================================
            // SECTION 6 : Limites & Continuite
            // =====================================================================
            {
                id: 'limites',
                title: 'Limites & Continuite',
                icon: '\u2192',
                content: '<h3>Limites en l\'infini</h3>'
                    + '<ul>'
                    + '<li><strong>Limites de reference</strong> : lim x^n = +infini (n >= 1) ; lim 1/x^n = 0 (n >= 1) ; lim e^x = +infini ; lim e^(-x) = 0 ; lim ln(x) = +infini quand x tend vers +infini</li>'
                    + '<li><strong>Polynomes</strong> : la limite d\'un polynome en +/- infini est celle de son terme de plus haut degre</li>'
                    + '<li><strong>Fractions rationnelles</strong> : on factorise par le terme de plus haut degre au numerateur et au denominateur</li>'
                    + '</ul>'
                    + '<h3>Limites en un point</h3>'
                    + '<ul>'
                    + '<li><strong>Limite finie</strong> : lim f(x) = L quand x tend vers a signifie que f(x) se rapproche de L</li>'
                    + '<li><strong>Limite infinie</strong> : lim f(x) = +infini quand x tend vers a (ex : lim 1/x^2 = +infini quand x tend vers 0)</li>'
                    + '<li><strong>Limites a gauche et a droite</strong> : lim f(x) quand x tend vers a- et quand x tend vers a+. Si elles sont differentes, la limite n\'existe pas</li>'
                    + '</ul>'
                    + '<h3>Formes indeterminees</h3>'
                    + '<ul>'
                    + '<li><strong>Les 7 formes</strong> : +infini - infini ; 0 * infini ; infini/infini ; 0/0 ; 1^infini ; 0^0 ; infini^0</li>'
                    + '<li><strong>Methodes de levee</strong> : factorisation, conjuguee, règles de L\'Hopital (hors programme mais utile), croissances comparees</li>'
                    + '</ul>'
                    + '<h3>Asymptotes</h3>'
                    + '<ul>'
                    + '<li><strong>Asymptote horizontale</strong> : si lim f(x) = L quand x tend vers +/- infini, alors y = L est asymptote horizontale</li>'
                    + '<li><strong>Asymptote verticale</strong> : si lim f(x) = +/- infini quand x tend vers a, alors x = a est asymptote verticale</li>'
                    + '<li><strong>Asymptote oblique</strong> : si lim [f(x) - (ax+b)] = 0 quand x tend vers +/- infini, alors y = ax + b est asymptote oblique</li>'
                    + '</ul>'
                    + '<h3>Continuite</h3>'
                    + '<ul>'
                    + '<li><strong>Definition</strong> : f est continue en a si lim f(x) = f(a) quand x tend vers a</li>'
                    + '<li><strong>Fonctions continues</strong> : polynomes, fractions rationnelles (sur leur domaine), exp, ln, sin, cos, racine sont continues</li>'
                    + '<li><strong>Theoreme des valeurs intermediaires (TVI)</strong> : si f est continue sur [a, b] et k est compris entre f(a) et f(b), alors il existe c dans [a, b] tel que f(c) = k</li>'
                    + '<li><strong>Corollaire (bijection)</strong> : si f est continue et strictement monotone sur [a, b], alors l\'equation f(x) = k admet une unique solution dans [a, b]</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'Limite de e^x quand x est très grand ou très petit ?', answer: 'Quand x → +infini : e^x → +infini (ca explose, ca monte très vite). Quand x → -infini : e^x → 0 (ca s\'ecrase vers 0, mais ne passe JAMAIS en negatif). En gros : e^x est toujours POSITIF. A droite ca explose, a gauche ca s\'ecrase. Mots difficiles : "tendre vers" = se rapprocher de plus en plus d\'une valeur sans forcement l\'atteindre.' },
                    { question: 'Limite de ln(x) ?', answer: 'Quand x → 0+ : ln(x) → -infini (la courbe plonge vers le bas). Quand x → +infini : ln(x) → +infini (mais TRES lentement). Piege : ln(x) n\'existe PAS pour x negatif ou zero. En gros : ln monte lentement vers +infini et plonge vers -infini pres de 0. Mots difficiles : "0+" = quand x se rapproche de 0 par la droite (par les valeurs positives).' },
                    { question: 'Comment trouver la limite d\'un polynome ?', answer: 'Regarde SEULEMENT le terme avec le plus grand exposant. Tout le reste est negligeable. Exemple : lim(3x^3 - 1000x^2 + 5) quand x → +infini = lim(3x^3) = +infini. Le -1000x^2 parait enorme, mais 3x^3 le depasse quand x est très grand. En gros : le terme de plus haut degre gagne toujours.' },
                    { question: 'C\'est quoi une forme indeterminee ?', answer: 'C\'est quand le calcul de la limite donne un resultat AMBIGU : on ne peut pas conclure directement. Les 4 a connaitre au Bac : +infini - infini, 0 * infini, infini/infini, 0/0. Quand tu tombes dessus : il faut TRANSFORMER l\'expression (factoriser, simplifier, utiliser les croissances comparees) pour lever l\'ambiguite. En gros : la calculette dirait "erreur", il faut ruser.' },
                    { question: 'Limite d\'une fraction rationnelle en l\'infini ?', answer: 'Methode : on divise en HAUT et en BAS par le x de plus haut degre. Exemple : (2x² + 3) / (5x² - 1). On divise tout par x². On obtient (2 + 3/x²) / (5 - 1/x²). Quand x → +infini, les 3/x² et 1/x² → 0. Reste 2/5. En gros : ne regarde que les termes de plus haut degre en haut et en bas. Mots difficiles : "fraction rationnelle" = un polynome divise par un autre polynome.' },
                    { question: 'C\'est quoi une asymptote horizontale ?', answer: 'C\'est une ligne HORIZONTALE dont la courbe se rapproche quand x part vers +infini ou -infini, SANS la toucher (ou en l\'effleurant). Exemple : f(x) = 1/x. Quand x → +infini, f(x) → 0. La droite y = 0 est asymptote horizontale. En gros : la courbe se "colle" a la droite horizontale quand x est très grand. Mots difficiles : "asymptote" = droite dont la courbe se rapproche sans l\'atteindre.' },
                    { question: 'C\'est quoi une asymptote verticale ?', answer: 'C\'est une ligne VERTICALE pres de laquelle la courbe EXPLOSE vers +infini ou -infini. Exemple : f(x) = 1/x. Quand x se rapproche de 0, f(x) explose. La droite x = 0 est asymptote verticale. Comment les trouver : cherche ou le DENOMINATEUR = 0. En gros : la courbe monte ou descend a l\'infini pres d\'une valeur interdite de x.' },
                    { question: 'C\'est quoi le TVI (theoreme des valeurs intermediaires) ?', answer: 'Si f est CONTINUE sur [a, b], elle prend TOUTES les valeurs entre f(a) et f(b). Methode Bac pour prouver que f(x) = 0 : 1) Montre que f(a) < 0. 2) Montre que f(b) > 0. 3) Dis "par le TVI, f s\'annule entre a et b." En gros : si f passe de negatif a positif, elle vaut forcement 0 quelque part entre les deux. Mots difficiles : "continue" = la courbe ne fait pas de saut. "S\'annuler" = valoir 0.' },
                    { question: 'Corollaire du TVI (unicite) ?', answer: 'Si f est continue ET STRICTEMENT MONOTONE (= elle monte toujours OU descend toujours) sur [a, b], alors f(x) = k a UNE SEULE solution. Methode Bac : "f est continue et strictement croissante sur [a,b], donc par le corollaire du TVI, l\'equation f(x) = k admet une unique solution." En gros : si ca monte sans arret, la courbe ne croise la ligne y = k qu\'une seule fois.' },
                    { question: 'Croissances comparees : qui gagne ?', answer: 'CLASSEMENT des vitesses de croissance (du plus lent au plus rapide) : ln(x) ≪ x^n ≪ e^x. En gros : e^x ECRASE tout polynome. Tout polynome ECRASE ln(x). Formules a retenir : lim x^n / e^x = 0 (e^x gagne). lim ln(x) / x = 0 (x gagne). lim x·ln(x) = 0 quand x → 0+. Astuce : e^x = champion inconteste. ln(x) = le plus lent de tous.' }
                ],
                quiz: [
                    { question: '\\( \\lim_{x \\to +\\infty} (3x^{2} - x + 1) \\) vaut :', options: ['\\( +\\infty \\)', '\\( -\\infty \\)', '\\( 3 \\)', '\\( 0 \\)'], correctIndex: 0, explanation: 'Le terme dominant est \\( 3x^{2} \\), qui tend vers \\( +\\infty \\).' },
                    { question: '\\( \\lim_{x \\to -\\infty} e^{x} \\) vaut :', options: ['\\( +\\infty \\)', '\\( 0 \\)', '\\( 1 \\)', '\\( -\\infty \\)'], correctIndex: 1, explanation: 'L\'exponentielle tend vers 0 quand \\( x \\to -\\infty \\).' },
                    { question: '\\( \\lim_{x \\to +\\infty} \\ln(x) \\) vaut :', options: ['\\( 0 \\)', '\\( 1 \\)', '\\( +\\infty \\)', '\\( e \\)'], correctIndex: 2, explanation: 'Le logarithme tend vers \\( +\\infty \\), mais moins vite que toute puissance de \\( x \\).' },
                    { question: 'La forme \\( +\\infty - \\infty \\) est :', options: ['Toujours egale a 0', 'Toujours egale a \\( +\\infty \\)', 'Une forme indeterminee', 'Toujours negative'], correctIndex: 2, explanation: 'C\'est une forme indeterminee : le resultat depend de la vitesse de croissance respective des deux termes.' },
                    { question: 'Si \\( f \\) est continue sur \\( [a, b] \\) avec \\( f(a) < 0 \\) et \\( f(b) > 0 \\), alors :', options: ['\\( f \\) n\'a pas de zero', 'Il existe \\( c \\in [a,b] \\) tel que \\( f(c) = 0 \\)', '\\( f(a) = f(b) \\)', '\\( f \\) est decroissante'], correctIndex: 1, explanation: 'Par le TVI, \\( f \\) etant continue et changeant de signe, il existe \\( c \\) tel que \\( f(c) = 0 \\).' },
                    { question: '\\( \\lim_{x \\to +\\infty} \\frac{2x^{3} + x}{5x^{3} - 1} \\) vaut :', options: ['\\( 0 \\)', '\\( \\frac{2}{5} \\)', '\\( +\\infty \\)', '\\( 1 \\)'], correctIndex: 1, explanation: 'On divise par \\( x^{3} \\) : \\( \\lim \\frac{2 + \\frac{1}{x^{2}}}{5 - \\frac{1}{x^{3}}} = \\frac{2}{5} \\).' },
                    { question: 'La droite \\( x = 2 \\) est asymptote verticale de \\( f \\) si :', options: ['\\( f(2) = 0 \\)', '\\( \\lim f(x) = 2 \\)', '\\( \\lim_{x \\to 2} f(x) = \\pm\\infty \\)', '\\( f\'(2) = 0 \\)'], correctIndex: 2, explanation: 'Une asymptote verticale \\( x = a \\) correspond à une limite infinie de \\( f \\) quand \\( x \\to a \\).' },
                    { question: '\\( \\lim_{x \\to 0} \\frac{\\sin(x)}{x} \\) vaut :', options: ['\\( 0 \\)', '\\( +\\infty \\)', 'n\'existe pas', '\\( 1 \\)'], correctIndex: 3, explanation: 'C\'est une limite classique : \\( \\lim_{x \\to 0} \\frac{\\sin(x)}{x} = 1 \\).' },
                    { question: 'Une fonction continue sur un intervalle ferme \\( [a, b] \\) :', options: ['Peut ne pas etre bornee', 'Atteint ses bornes (theoreme des bornes)', 'Est toujours derivable', 'N\'a pas de maximum'], correctIndex: 1, explanation: 'Theoreme des bornes atteintes : une fonction continue sur \\( [a, b] \\) ferme borne est bornee et atteint ses bornes.' },
                    { question: '\\( \\lim_{x \\to +\\infty} x \\cdot e^{-x} \\) vaut :', options: ['\\( +\\infty \\)', '\\( 0 \\)', '\\( 1 \\)', '\\( -\\infty \\)'], correctIndex: 1, explanation: 'Croissances comparees : \\( e^{x} \\) croit plus vite que \\( x \\), donc \\( \\frac{x}{e^{x}} \\to 0 \\), soit \\( x \\cdot e^{-x} \\to 0 \\).' }
                ]
            },
            // =====================================================================
            // SECTION 7 : Logarithme & Exponentielle
            // =====================================================================
            {
                id: 'logarithme',
                title: 'Logarithme & Exponentielle',
                icon: '\uD83D\uDCD0',
                content: '<h3>Proprietes de ln</h3>'
                    + '<ul>'
                    + '<li><strong>Definition</strong> : ln est la fonction reciproque de exp. ln(x) est definie pour x > 0</li>'
                    + '<li><strong>Proprietes algebriques</strong> : ln(a*b) = ln(a) + ln(b) ; ln(a/b) = ln(a) - ln(b) ; ln(a^n) = n*ln(a) ; ln(racine(a)) = ln(a)/2</li>'
                    + '<li><strong>Valeurs particulieres</strong> : ln(1) = 0 ; ln(e) = 1 ; ln(e^n) = n</li>'
                    + '<li><strong>Derivee</strong> : (ln x)\' = 1/x pour x > 0 ; (ln u)\' = u\'/u</li>'
                    + '<li><strong>Variations</strong> : ln est strictement croissante sur ]0, +infini[</li>'
                    + '</ul>'
                    + '<h3>Proprietes de exp</h3>'
                    + '<ul>'
                    + '<li><strong>Definition</strong> : exp est la fonction telle que exp\'(x) = exp(x) et exp(0) = 1. On note e^x = exp(x)</li>'
                    + '<li><strong>Proprietes algebriques</strong> : e^(a+b) = e^a * e^b ; e^(a-b) = e^a / e^b ; (e^a)^n = e^(n*a) ; e^0 = 1</li>'
                    + '<li><strong>Derivee</strong> : (e^x)\' = e^x ; (e^u)\' = u\' * e^u</li>'
                    + '<li><strong>Signe</strong> : e^x > 0 pour tout x reel. L\'exponentielle ne s\'annule jamais</li>'
                    + '</ul>'
                    + '<h3>Equations et inequations</h3>'
                    + '<ul>'
                    + '<li><strong>Equation ln(f(x)) = ln(g(x))</strong> equivaut a f(x) = g(x) (avec f(x) > 0 et g(x) > 0)</li>'
                    + '<li><strong>Equation e^(f(x)) = e^(g(x))</strong> equivaut a f(x) = g(x)</li>'
                    + '<li><strong>Inequation ln(x) > a</strong> equivaut a x > e^a</li>'
                    + '<li><strong>Inequation e^x > a</strong> (a > 0) equivaut a x > ln(a)</li>'
                    + '</ul>'
                    + '<h3>Croissances comparees</h3>'
                    + '<ul>'
                    + '<li><strong>exp domine tout polynome</strong> : lim x^n / e^x = 0 quand x tend vers +infini, pour tout n</li>'
                    + '<li><strong>ln est dominee par tout polynome</strong> : lim ln(x) / x^n = 0 quand x tend vers +infini, pour tout n > 0</li>'
                    + '<li><strong>Limite classique</strong> : lim x*ln(x) = 0 quand x tend vers 0+</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'Les 3 règles d\'or du ln ?', answer: '1) ln(a × b) = ln(a) + ln(b). Un PRODUIT devient une SOMME. 2) ln(a/b) = ln(a) - ln(b). Un QUOTIENT devient une DIFFERENCE. 3) ln(a^n) = n × ln(a). L\'EXPOSANT DESCEND devant. Exemples : ln(6) = ln(2) + ln(3). ln(8) = ln(2³) = 3×ln(2). En gros : le ln transforme les multiplications en additions. C\'est pour ca qu\'il est si utile !' },
                    { question: 'ln(1) et ln(e), ca vaut combien ?', answer: 'ln(1) = 0. Toujours. ln(e) = 1. Toujours. Et plus generalement : ln(e^n) = n. Exemple : ln(e³) = 3, ln(e^(-2)) = -2. En gros : ln "annule" l\'exponentielle. C\'est sa fonction INVERSE. Mots difficiles : "reciproque" = fonction inverse. ln et exp sont reciproques l\'une de l\'autre.' },
                    { question: 'Les 3 règles d\'or de l\'exponentielle ?', answer: '1) e^(a+b) = e^a × e^b. Une SOMME en exposant devient un PRODUIT. 2) e^(a-b) = e^a / e^b. 3) (e^a)^n = e^(n×a). Ce sont les INVERSES des règles du ln ! Exemple : e² × e³ = e^5. (e²)³ = e^6. En gros : le ln transforme × en +. L\'exp fait l\'inverse : elle transforme + en ×.' },
                    { question: 'e^0 vaut combien ? e^x peut-il etre zero ?', answer: 'e^0 = 1. Toujours. Et NON, e^x n\'est JAMAIS nul ni negatif. e^x > 0 pour TOUT x. Même e^(-1000) est positif (très petit, mais positif). Piege Bac : si tu tombes sur e^(...) = 0 dans une equation → c\'est IMPOSSIBLE, pas de solution. En gros : l\'exponentielle est toujours strictement positive.' },
                    { question: 'Derivee de ln(u) et de e^u ?', answer: '(ln u)\' = u\'/u. Derivee du DEDANS sur le dedans. (e^u)\' = u\' × e^u. Derivee du DEDANS fois le tout. Exemples : (ln(3x+1))\' = 3/(3x+1). (e^(2x))\' = 2×e^(2x). En gros : ne JAMAIS oublier de multiplier par u\' (la derivee de l\'interieur). C\'est le piege numero 1 au Bac !' },
                    { question: 'Methode Bac : resoudre e^f(x) = nombre ?', answer: 'On passe au LN des deux cotes. Exemple : e^(2x) = 5. On prend le ln : 2x = ln(5). Donc x = ln(5)/2. PIEGE : le nombre doit etre POSITIF ! Si e^(...) = -3 → IMPOSSIBLE (e^x est toujours > 0, pas de solution). En gros : e^(...) = nombre → (...) = ln(nombre), à condition que le nombre soit > 0.' },
                    { question: 'Methode Bac : resoudre ln(f(x)) = nombre ?', answer: 'On passe a l\'EXPONENTIELLE. Exemple : ln(x) = 3. On passe en exp : x = e³. PIEGE : toujours verifier que f(x) > 0 (le ln n\'existe que pour les nombres strictement positifs). En gros : ln(...) = nombre → (...) = e^(nombre), et on verifie que c\'est bien > 0.' },
                    { question: 'Equation ln(A) = ln(B) ?', answer: 'Ca equivaut a A = B. MAIS il faut VERIFIER que A > 0 et B > 0 (conditions d\'existence du ln). Piege classique au Bac : oublier de verifier les conditions → tu perds des points. Exemple : ln(x-1) = ln(3) → x-1 = 3 → x = 4. On verifie : x-1 = 3 > 0. C\'est bon. En gros : ln(A) = ln(B) implique A = B, mais verifie TOUJOURS que les ln existent.' },
                    { question: 'Croissances comparees : le classement ?', answer: 'Du PLUS LENT au PLUS RAPIDE : ln(x) ≪ x^n ≪ e^x. Formules cles : lim x^n / e^x = 0 (l\'exp ECRASE tout polynome). lim ln(x) / x = 0 (x ECRASE le ln). Limite classique : lim x×ln(x) = 0 quand x → 0⁺. En gros : e^x est le champion de la vitesse. ln(x) est la tortue. Astuce Bac : ces limites tombent CHAQUE ANNEE.' },
                    { question: 'Derivee de ln(x²+1) ?', answer: 'On applique la formule (ln u)\' = u\'/u. Ici u = x²+1. Donc u\' = 2x. Resultat : (ln(x²+1))\' = 2x / (x²+1). En gros : c\'est toujours "derivee du DEDANS divisee par le dedans". Piege : ne pas ecrire 1/(x²+1) en oubliant le 2x du numerateur !' }
                ],
                quiz: [
                    { question: '\\( \\ln(e^{5}) \\) vaut :', options: ['\\( 5 \\)', '\\( e^{5} \\)', '\\( \\frac{1}{5} \\)', '\\( \\ln(5) \\)'], correctIndex: 0, explanation: '\\( \\ln(e^{5}) = 5 \\times \\ln(e) = 5 \\times 1 = 5 \\).' },
                    { question: 'La derivee de \\( e^{3x} \\) est :', options: ['\\( 3x \\cdot e^{3x} \\)', '\\( 3e^{3x} \\)', '\\( e^{3x} \\)', '\\( e^{3} \\cdot x \\)'], correctIndex: 1, explanation: '\\( (e^{u})\' = u\' \\cdot e^{u} \\). Avec \\( u = 3x \\) : \\( u\' = 3 \\), donc \\( (e^{3x})\' = 3e^{3x} \\).' },
                    { question: '\\( \\ln(a) + \\ln(b) = \\) :', options: ['\\( \\ln(a + b) \\)', '\\( \\ln(a \\times b) \\)', '\\( \\ln(a) \\times \\ln(b) \\)', '\\( \\ln(a^{b}) \\)'], correctIndex: 1, explanation: 'Propriete fondamentale : le logarithme transforme un produit en somme.' },
                    { question: '\\( \\lim_{x \\to +\\infty} \\frac{x^{2}}{e^{x}} \\) vaut :', options: ['\\( +\\infty \\)', '\\( 1 \\)', '\\( 0 \\)', '\\( e \\)'], correctIndex: 2, explanation: 'Croissances comparees : l\'exponentielle l\'emporte sur tout polynome, donc la limite est 0.' },
                    { question: 'La solution de \\( e^{x} = 7 \\) est :', options: ['\\( x = \\frac{7}{e} \\)', '\\( x = \\ln(7) \\)', '\\( x = e^{7} \\)', '\\( x = 7 \\)'], correctIndex: 1, explanation: 'On prend le \\( \\ln \\) des deux cotes : \\( x = \\ln(7) \\approx 1{,}946 \\).' },
                    { question: '\\( e^{x} > 0 \\) pour :', options: ['\\( x > 0 \\) seulement', '\\( x \\geq 0 \\)', 'Tout \\( x \\) reel', '\\( x \\neq 0 \\)'], correctIndex: 2, explanation: 'L\'exponentielle est toujours strictement positive, quel que soit \\( x \\) reel.' },
                    { question: 'La derivee de \\( \\ln(x^{2} + 1) \\) est :', options: ['\\( \\frac{1}{x^{2} + 1} \\)', '\\( \\frac{2x}{x^{2} + 1} \\)', '\\( 2x \\cdot \\ln(x^{2} + 1) \\)', '\\( \\frac{x^{2}}{x^{2} + 1} \\)'], correctIndex: 1, explanation: '\\( (\\ln u)\' = \\frac{u\'}{u} \\). Avec \\( u = x^{2} + 1 \\) : \\( u\' = 2x \\), donc la derivee est \\( \\frac{2x}{x^{2} + 1} \\).' },
                    { question: '\\( \\lim_{x \\to +\\infty} \\frac{\\ln(x)}{x} \\) vaut :', options: ['\\( +\\infty \\)', '\\( 1 \\)', '\\( 0 \\)', '\\( \\ln(1) \\)'], correctIndex: 2, explanation: 'Croissances comparees : \\( x \\) croit plus vite que \\( \\ln(x) \\), donc \\( \\frac{\\ln(x)}{x} \\to 0 \\).' },
                    { question: '\\( \\ln(\\sqrt{x}) \\) est egal a :', options: ['\\( \\sqrt{\\ln(x)} \\)', '\\( 2\\ln(x) \\)', '\\( \\frac{\\ln(x)}{2} \\)', '\\( (\\ln(x))^{\\frac{1}{2}} \\)'], correctIndex: 2, explanation: '\\( \\ln(\\sqrt{x}) = \\ln(x^{\\frac{1}{2}}) = \\frac{1}{2} \\ln(x) = \\frac{\\ln(x)}{2} \\).' },
                    { question: 'L\'equation \\( \\ln(x) = -1 \\) a pour solution :', options: ['\\( x = -1 \\)', '\\( x = \\frac{1}{e} \\)', '\\( x = e^{-1} = \\frac{1}{e} \\)', '\\( x = -e \\)'], correctIndex: 2, explanation: '\\( \\ln(x) = -1 \\) equivaut a \\( x = e^{-1} = \\frac{1}{e} \\approx 0{,}368 \\).' },
                    { question: 'La fonction \\( f(x) = e^{-x^{2}} \\) admet pour derivee :', options: ['\\( -2x \\cdot e^{-x^{2}} \\)', '\\( e^{-x^{2}} \\)', '\\( -e^{-2x} \\)', '\\( 2x \\cdot e^{-x^{2}} \\)'], correctIndex: 0, explanation: 'On applique \\( (e^{u})\' = u\' \\cdot e^{u} \\) avec \\( u = -x^{2} \\), donc \\( u\' = -2x \\). Ainsi \\( f\'(x) = -2x \\cdot e^{-x^{2}} \\).' },
                    { question: 'L\'equation \\( e^{2x} - 3e^{x} + 2 = 0 \\) a pour solutions :', options: ['\\( x = 0 \\) et \\( x = \\ln(2) \\)', '\\( x = 1 \\) et \\( x = 2 \\)', '\\( x = \\ln(2) \\) uniquement', '\\( x = 0 \\) uniquement'], correctIndex: 0, explanation: 'On pose \\( X = e^{x} \\). L\'equation devient \\( X^{2} - 3X + 2 = 0 \\), soit \\( (X-1)(X-2) = 0 \\). Donc \\( X = 1 \\) ou \\( X = 2 \\), c\'est-a-dire \\( e^{x} = 1 \\) (\\( x = 0 \\)) ou \\( e^{x} = 2 \\) (\\( x = \\ln 2 \\)).' },
                    { question: 'Simplifier \\( \\ln(e^{3} \\times e^{2}) \\) :', options: ['\\( \\ln(e^{3}) \\times \\ln(e^{2}) \\)', '\\( 6 \\)', '\\( 5 \\)', '\\( e^{5} \\)'], correctIndex: 2, explanation: '\\( \\ln(e^{3} \\times e^{2}) = \\ln(e^{3+2}) = \\ln(e^{5}) = 5 \\). On utilise \\( e^{a} \\times e^{b} = e^{a+b} \\) puis \\( \\ln(e^{n}) = n \\).' }
                ]
            },
            // =====================================================================
            // SECTION 8 : Nombres complexes
            // =====================================================================
            {
                id: 'complexes',
                title: 'Nombres complexes',
                icon: '\uD83D\uDD22',
                content: '<h3>Forme algebrique</h3>'
                    + '<ul>'
                    + '<li><strong>Definition</strong> : un nombre complexe s\'ecrit z = a + ib, ou a = Re(z) (partie reelle) et b = Im(z) (partie imaginaire), i^2 = -1</li>'
                    + '<li><strong>Conjugue</strong> : le conjugue de z = a + ib est z_barre = a - ib</li>'
                    + '<li><strong>Operations</strong> : (a + ib) + (c + id) = (a+c) + i(b+d) ; (a + ib)(c + id) = (ac - bd) + i(ad + bc)</li>'
                    + '<li><strong>Proprietes du conjugue</strong> : conjugue(z1 + z2) = conjugue(z1) + conjugue(z2) ; conjugue(z1 * z2) = conjugue(z1) * conjugue(z2) ; z * conjugue(z) = |z|^2</li>'
                    + '</ul>'
                    + '<h3>Module et argument</h3>'
                    + '<ul>'
                    + '<li><strong>Module</strong> : |z| = racine(a^2 + b^2). C\'est la distance de z a l\'origine dans le plan complexe</li>'
                    + '<li><strong>Argument</strong> : arg(z) = theta tel que cos(theta) = a/|z| et sin(theta) = b/|z| (defini a 2*pi pres)</li>'
                    + '<li><strong>Proprietes</strong> : |z1 * z2| = |z1| * |z2| ; arg(z1 * z2) = arg(z1) + arg(z2) [2*pi]</li>'
                    + '</ul>'
                    + '<h3>Forme trigonometrique et exponentielle</h3>'
                    + '<ul>'
                    + '<li><strong>Forme trigonometrique</strong> : z = |z| * (cos(theta) + i*sin(theta)) = |z| * cis(theta)</li>'
                    + '<li><strong>Formule d\'Euler</strong> : e^(i*theta) = cos(theta) + i*sin(theta)</li>'
                    + '<li><strong>Forme exponentielle</strong> : z = |z| * e^(i*theta) = r * e^(i*theta)</li>'
                    + '<li><strong>Formule de Moivre</strong> : (cos(theta) + i*sin(theta))^n = cos(n*theta) + i*sin(n*theta)</li>'
                    + '</ul>'
                    + '<h3>Racines et geometrie</h3>'
                    + '<ul>'
                    + '<li><strong>Racines n-iemes de l\'unite</strong> : les solutions de z^n = 1 sont z_k = e^(i*2k*pi/n) pour k = 0, 1, ..., n-1. Elles forment un polygone regulier</li>'
                    + '<li><strong>Equation du second degre</strong> : si delta < 0, les solutions sont z = (-b +/- i*racine(-delta)) / (2a)</li>'
                    + '<li><strong>Interpretation geometrique</strong> : |z1 - z2| = distance entre les points M1 et M2 ; arg(z2 - z1) = angle de la direction M1M2</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'Que vaut i² ?', answer: 'i² = -1. C\'est LA definition de base. Le nombre i est "imaginaire" : il n\'existe pas dans les reels, mais il permet de resoudre des equations comme x² = -1. Le cycle des puissances de i : i¹ = i, i² = -1, i³ = -i, i⁴ = 1, puis ca RECOMMENCE. En gros : i² = -1, et les puissances de i tournent en boucle par 4. Mots difficiles : "imaginaire" = qui n\'est pas reel. "Nombre complexe" = nombre qui melange reel et imaginaire.' },
                    { question: 'Comment calculer le module de z = a + ib ?', answer: 'Formule : |z| = racine(a² + b²). C\'est comme le theoreme de Pythagore ! Le module = la DISTANCE entre le point z et l\'origine (0,0) dans le plan. Exemple : |3 + 4i| = racine(9 + 16) = racine(25) = 5. En gros : le module mesure la "taille" du nombre complexe = sa distance a 0.' },
                    { question: 'C\'est quoi le conjugue d\'un complexe ?', answer: 'Le conjugue de z = a + ib est z-barre = a - ib. On CHANGE le signe de la partie imaginaire, c\'est tout. Exemple : conjugue de 3 - 2i = 3 + 2i. Geometriquement : c\'est le SYMETRIQUE par rapport a l\'axe des reels (on "retourne" le point). En gros : pour conjuguer, change le signe devant le i.' },
                    { question: 'Que vaut z × z-barre ?', answer: 'z × z-barre = |z|² = a² + b². C\'est TOUJOURS un reel POSITIF. Exemple : (3+2i)(3-2i) = 9 - (2i)² = 9 - (-4) = 13. En gros : multiplier par le conjugue supprime le i et donne le module au carre. Astuce Bac : c\'est la methode pour diviser des complexes (on multiplie haut et bas par le conjugue du bas).' },
                    { question: 'C\'est quoi la formule d\'Euler ?', answer: 'e^(iθ) = cos(θ) + i·sin(θ). C\'est le PONT entre exponentielle et trigo. Cas particulier celebre : e^(iπ) = -1. D\'ou l\'identite d\'Euler : e^(iπ) + 1 = 0 (la plus belle formule des maths : relie e, i, π, 1 et 0). En gros : l\'exponentielle complexe "dessine" un cercle dans le plan complexe.' },
                    { question: 'C\'est quoi la formule de Moivre ?', answer: '(cos θ + i·sin θ)^n = cos(nθ) + i·sin(nθ). En gros : pour calculer la puissance n, on MULTIPLIE l\'angle par n. Exemple : (cos π/3 + i·sin π/3)³ = cos(π) + i·sin(π) = -1. Astuce Bac : très utile pour calculer des puissances de complexes en forme trigonometrique.' },
                    { question: 'Comment multiplier deux complexes en forme exponentielle ?', answer: 'r₁·e^(iθ₁) × r₂·e^(iθ₂) = (r₁×r₂)·e^(i(θ₁+θ₂)). Règle simple : les MODULES se multiplient, les ARGUMENTS s\'ajoutent. Exemple : 2·e^(iπ/3) × 3·e^(iπ/6) = 6·e^(iπ/2) = 6i. En gros : multiplier en forme exponentielle est beaucoup plus simple qu\'en forme algebrique.' },
                    { question: 'C\'est quoi les racines n-iemes de l\'unite ?', answer: 'Ce sont les solutions de z^n = 1. Il y en a exactement N. Formule : z_k = e^(i·2kπ/n) pour k = 0, 1, ..., n-1. Geometriquement : ces points forment un POLYGONE regulier inscrit dans le cercle unite. Exemple : racines cubiques de 1 = 3 points formant un triangle equilateral. En gros : n racines reparties regulierement sur le cercle de rayon 1.' },
                    { question: 'Equation du 2nd degre avec delta negatif ?', answer: 'Si Δ < 0, pas de solution REELLE, mais 2 solutions COMPLEXES CONJUGUEES. Formule : z = (-b ± i·racine(-Δ)) / (2a). Exemple : z² + z + 1 = 0. Δ = 1 - 4 = -3 < 0. Solutions : z = (-1 ± i·racine(3)) / 2. En gros : un discriminant negatif donne des solutions complexes — toujours par paires conjuguees.' },
                    { question: 'Que représenté |z₁ - z₂| geometriquement ?', answer: '|z₁ - z₂| = la DISTANCE entre les points M₁ et M₂ dans le plan complexe. Comme Pythagore mais avec des complexes. Exemple : |z₁ - z₂| = 3 signifie que les deux points sont a 3 unites l\'un de l\'autre. En gros : |z₁ - z₂| = distance entre deux points. Astuce Bac : tres utilise pour les cercles (|z - a| = r = cercle de centre a et rayon r).' },
                    { question: 'Comment passer de forme algebrique a forme trigonometrique ?', answer: 'z = a + ib → z = r(cos θ + i·sin θ). Etapes : 1) Calcule r = |z| = racine(a² + b²). 2) Trouve θ avec cos θ = a/r et sin θ = b/r. 3) Ecris z = r(cos θ + i·sin θ). Exemple : z = 1 + i. r = racine(2), θ = π/4. z = racine(2)·(cos π/4 + i·sin π/4). En gros : on passe des "coordonnees" a+ib a la "distance + angle".' },
                    { question: 'C\'est quoi l\'argument d\'un complexe ?', answer: 'arg(z) = l\'ANGLE que fait le segment [O, M] avec l\'axe horizontal, mesure en radians. M est le point qui représenté z dans le plan. Exemple : arg(i) = π/2 (vers le haut). arg(-1) = π (vers la gauche). arg(1) = 0 (vers la droite). En gros : le module = la distance, l\'argument = la direction. Mots difficiles : "argument" = angle en radians (defini a 2π pres).' },
                    { question: 'Ecrire 1 + i sous forme exponentielle ?', answer: 'Etape 1 : module |1+i| = racine(1+1) = racine(2). Etape 2 : argument arg(1+i) = π/4 (45 degres, car cos = sin = 1/racine(2)). Resultat : 1 + i = racine(2) · e^(iπ/4). En gros : forme exponentielle = module × e^(i × argument). C\'est la forme la plus pratique pour multiplier et diviser.' },
                    { question: 'Que vaut e^(iπ) ?', answer: 'e^(iπ) = cos(π) + i·sin(π) = -1 + 0 = -1. C\'est l\'IDENTITE D\'EULER : e^(iπ) + 1 = 0. Cette formule reunit les 5 constantes les plus importantes des maths : e, i, π, 1 et 0. En gros : e^(iπ) = -1. C\'est considere comme la plus belle equation des mathematiques.' }
                ],
                quiz: [
                    { question: 'Le module de \\( z = 3 + 4i \\) est :', options: ['\\( 7 \\)', '\\( 5 \\)', '\\( 25 \\)', '\\( 1 \\)'], correctIndex: 1, explanation: '\\( |z| = \\sqrt{3^{2} + 4^{2}} = \\sqrt{9 + 16} = \\sqrt{25} = 5 \\).' },
                    { question: 'Le conjugue de \\( 2 - 3i \\) est :', options: ['\\( -2 + 3i \\)', '\\( 2 + 3i \\)', '\\( -2 - 3i \\)', '\\( 3 - 2i \\)'], correctIndex: 1, explanation: 'On change le signe de la partie imaginaire : \\( \\overline{2 - 3i} = 2 + 3i \\).' },
                    { question: '\\( i^{4} \\) vaut :', options: ['\\( -1 \\)', '\\( i \\)', '\\( -i \\)', '\\( 1 \\)'], correctIndex: 3, explanation: '\\( i^{1} = i \\), \\( i^{2} = -1 \\), \\( i^{3} = -i \\), \\( i^{4} = 1 \\). Le cycle est de periode 4.' },
                    { question: '\\( (1 + i)(1 - i) \\) vaut :', options: ['\\( 0 \\)', '\\( 2 \\)', '\\( 2i \\)', '\\( 1 + i \\)'], correctIndex: 1, explanation: '\\( (1+i)(1-i) = 1 - i^{2} = 1 - (-1) = 2 \\). C\'est \\( |1+i|^{2} \\).' },
                    { question: 'La forme exponentielle de \\( -1 \\) est :', options: ['\\( e^{i\\pi} \\)', '\\( e^{i\\frac{\\pi}{2}} \\)', '\\( e^{2i\\pi} \\)', '\\( e^{-i\\frac{\\pi}{2}} \\)'], correctIndex: 0, explanation: '\\( e^{i\\pi} = \\cos(\\pi) + i\\sin(\\pi) = -1 \\). Donc \\( -1 = e^{i\\pi} \\).' },
                    { question: '\\( e^{i\\frac{\\pi}{2}} \\) vaut :', options: ['\\( 1 \\)', '\\( -1 \\)', '\\( i \\)', '\\( -i \\)'], correctIndex: 2, explanation: '\\( e^{i\\frac{\\pi}{2}} = \\cos\\left(\\frac{\\pi}{2}\\right) + i\\sin\\left(\\frac{\\pi}{2}\\right) = 0 + i = i \\).' },
                    { question: 'Le nombre de racines cubiques de l\'unite est :', options: ['\\( 1 \\)', '\\( 2 \\)', '\\( 3 \\)', '\\( 6 \\)'], correctIndex: 2, explanation: 'Il y a \\( n \\) racines \\( n \\)-iemes de l\'unite, donc 3 racines cubiques : \\( 1 \\), \\( e^{i\\frac{2\\pi}{3}} \\), \\( e^{i\\frac{4\\pi}{3}} \\).' },
                    { question: 'Si \\( z^{2} + 4 = 0 \\), alors \\( z = \\) :', options: ['\\( \\pm 2 \\)', '\\( \\pm 2i \\)', '\\( \\pm 4i \\)', '\\( \\pm \\sqrt{2}\\,i \\)'], correctIndex: 1, explanation: '\\( z^{2} = -4 \\), donc \\( z = \\pm\\sqrt{-4} = \\pm 2i \\).' },
                    { question: '\\( \\arg(z_{1} \\cdot z_{2}) \\) est egal a :', options: ['\\( \\arg(z_{1}) \\times \\arg(z_{2}) \\)', '\\( \\arg(z_{1}) + \\arg(z_{2}) \\)', '\\( \\arg(z_{1}) - \\arg(z_{2}) \\)', '\\( |\\arg(z_{1} \\cdot z_{2})| \\)'], correctIndex: 1, explanation: 'Les arguments s\'ajoutent lors de la multiplication (modulo \\( 2\\pi \\)).' },
                    { question: '\\( |z_{1} - z_{2}| \\) représenté geometriquement :', options: ['L\'angle entre \\( z_{1} \\) et \\( z_{2} \\)', 'La distance entre \\( M_{1} \\) et \\( M_{2} \\)', 'L\'aire du triangle \\( OM_{1}M_{2} \\)', 'Le produit des modules'], correctIndex: 1, explanation: '\\( |z_{1} - z_{2}| \\) est la distance entre les points d\'affixe \\( z_{1} \\) et \\( z_{2} \\) dans le plan complexe.' }
                ]
            },
            // =====================================================================
            // SECTION 9 : Arithmetique
            // =====================================================================
            {
                id: 'arithmetique',
                title: 'Arithmetique',
                icon: '\uD83D\uDD11',
                content: '<h3>Divisibilite</h3>'
                    + '<ul>'
                    + '<li><strong>Definition</strong> : a divise b (note a | b) s\'il existe un entier k tel que b = k * a</li>'
                    + '<li><strong>Division euclidienne</strong> : pour a et b entiers (b > 0), il existe un unique couple (q, r) tel que a = b*q + r avec 0 <= r < b</li>'
                    + '<li><strong>Criteres de divisibilite</strong> : par 2 (chiffre des unites pair), par 3 (somme des chiffres divisible par 3), par 9 (somme des chiffres divisible par 9)</li>'
                    + '</ul>'
                    + '<h3>PGCD et theoreme de Bezout</h3>'
                    + '<ul>'
                    + '<li><strong>PGCD</strong> : le plus grand commun diviseur de a et b, note pgcd(a, b) ou a ^ b</li>'
                    + '<li><strong>Algorithme d\'Euclide</strong> : pgcd(a, b) = pgcd(b, r) ou r est le reste de la division de a par b. On itere jusqu\'a r = 0</li>'
                    + '<li><strong>Theoreme de Bezout</strong> : a et b sont premiers entre eux (pgcd = 1) si et seulement s\'il existe u et v entiers tels que a*u + b*v = 1</li>'
                    + '<li><strong>Identite de Bezout</strong> : pour tout a, b, il existe u, v tels que a*u + b*v = pgcd(a, b)</li>'
                    + '<li><strong>Lemme de Gauss</strong> : si a | b*c et pgcd(a, b) = 1, alors a | c</li>'
                    + '</ul>'
                    + '<h3>Nombres premiers</h3>'
                    + '<ul>'
                    + '<li><strong>Definition</strong> : un entier p >= 2 est premier s\'il n\'a que deux diviseurs : 1 et lui-meme</li>'
                    + '<li><strong>Decomposition en facteurs premiers</strong> : tout entier n >= 2 s\'ecrit de manière unique comme produit de nombres premiers (theoreme fondamental de l\'arithmetique)</li>'
                    + '<li><strong>Crible d\'Eratosthene</strong> : methode pour trouver tous les premiers jusqu\'a N, en eliminant les multiples</li>'
                    + '<li><strong>Infinitude</strong> : il existe une infinite de nombres premiers (preuve d\'Euclide)</li>'
                    + '</ul>'
                    + '<h3>Congruences et petit theoreme de Fermat</h3>'
                    + '<ul>'
                    + '<li><strong>Congruence</strong> : a est congru a b modulo n (a = b [n]) si n divise (a - b). Autrement dit a et b ont le même reste dans la division par n</li>'
                    + '<li><strong>Proprietes</strong> : si a = b [n] et c = d [n], alors a+c = b+d [n] et a*c = b*d [n]</li>'
                    + '<li><strong>Petit theoreme de Fermat</strong> : si p est premier et a n\'est pas divisible par p, alors a^(p-1) = 1 [p]</li>'
                    + '<li><strong>Corollaire</strong> : pour tout a et p premier, a^p = a [p]</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'C\'est quoi la division euclidienne ?', answer: 'C\'est diviser un nombre par un autre et noter le QUOTIENT et le RESTE. Formule : a = b × q + r (avec 0 ≤ r < b). Exemple : 17 divise par 5 → 17 = 5 × 3 + 2. Quotient = 3, reste = 2. En gros : c\'est la division "avec reste" qu\'on faisait en primaire, mais ecrite en formule. Mots difficiles : "euclidienne" = qui vient d\'Euclide (mathematicien grec).' },
                    { question: 'Comment calculer le PGCD avec l\'algorithme d\'Euclide ?', answer: 'On fait des divisions euclidiennes EN CASCADE. A chaque etape, on remplace (a, b) par (b, reste). On s\'arrete quand le reste = 0. Le dernier reste NON NUL = le PGCD. Exemple : pgcd(48, 18). 48 = 18×2 + 12. 18 = 12×1 + 6. 12 = 6×2 + 0. PGCD = 6. En gros : on divise encore et encore jusqu\'a tomber sur 0. Le nombre juste avant est le PGCD.' },
                    { question: 'C\'est quoi le theoreme de Bezout ?', answer: 'a et b sont PREMIERS ENTRE EUX (pgcd = 1) si et seulement si on peut trouver des entiers u et v tels que a×u + b×v = 1. Exemple : pgcd(7, 5) = 1 car 7×3 + 5×(-4) = 21 - 20 = 1. En gros : si le pgcd vaut 1, on peut toujours ecrire une combinaison qui donne 1. Mots difficiles : "premiers entre eux" = pgcd = 1, pas de diviseur commun autre que 1.' },
                    { question: 'C\'est quoi le lemme de Gauss ?', answer: 'Si a divise b×c ET que pgcd(a, b) = 1, ALORS a divise c. Exemple : si 7 divise 3×n et que pgcd(7, 3) = 1 → alors 7 divise n. En gros : si un nombre divise un produit mais n\'a rien a voir avec l\'un des facteurs, alors il divise forcement l\'autre. Mots difficiles : "lemme" = petit theoreme qui sert d\'outil pour prouver un plus gros theoreme.' },
                    { question: 'C\'est quoi un nombre premier ?', answer: 'Un entier p ≥ 2 qui n\'a que DEUX diviseurs : 1 et LUI-MEME. Exemples : 2, 3, 5, 7, 11, 13, 17, 19, 23, 29. Attention : 1 n\'est PAS premier (il n\'a qu\'un seul diviseur). Et 2 est le SEUL nombre premier pair. En gros : un nombre premier ne se divise par rien sauf 1 et lui-meme. Mots difficiles : "premier" = indivisible (sauf par 1 et soi-meme). "Compose" = non premier.' },
                    { question: 'C\'est quoi le theoreme fondamental de l\'arithmetique ?', answer: 'Tout entier n ≥ 2 se DECOMPOSE en produit de nombres premiers, et cette decomposition est UNIQUE (a l\'ordre pres). Exemple : 360 = 2³ × 3² × 5. C\'est la seule facon de l\'ecrire. En gros : les nombres premiers sont les "briques" de tous les entiers. Chaque entier a une seule recette. Astuce Bac : pour decomposer, divise par 2, puis 3, puis 5, etc.' },
                    { question: 'C\'est quoi une congruence (modulo) ?', answer: 'a ≡ b [n] signifie que a et b ont le MEME RESTE quand on divise par n. Autrement dit : n divise (a - b). Exemple : 17 ≡ 2 [5] car 17 et 2 ont le même reste (2) dans la division par 5. Ou : 5 divise 17-2 = 15. En gros : "modulo" = on ne regarde que le RESTE. Mots difficiles : "congru" = qui a le même reste. "Modulo" = en ne regardant que les restes.' },
                    { question: 'C\'est quoi le petit theoreme de Fermat ?', answer: 'Si p est PREMIER et a n\'est pas divisible par p, alors a^(p-1) ≡ 1 [p]. Exemple : 2⁶ = 64. 64 / 7 = 9 reste 1. Donc 2⁶ ≡ 1 [7]. (7 est premier, 7 ne divise pas 2). En gros : Fermat donne un raccourci pour calculer les restes de grandes puissances. Astuce Bac : permet de simplifier a^(gros nombre) modulo p.' },
                    { question: 'Comment prouver que 2 nombres sont premiers entre eux ?', answer: '3 methodes : 1) EUCLIDE : calcule le pgcd, s\'il vaut 1 → premiers entre eux. 2) BEZOUT : trouve u, v tels que au + bv = 1. 3) DECOMPOSITION : decompose en facteurs premiers, s\'il n\'y a aucun facteur commun → premiers entre eux. En gros : la methode la plus rapide est souvent Euclide.' },
                    { question: 'Criteres de divisibilite par 3 et par 9 ?', answer: 'Par 3 : la SOMME des chiffres est divisible par 3. Par 9 : la SOMME des chiffres est divisible par 9. Exemple : 729 → 7+2+9 = 18. 18 est divisible par 3 ET par 9. Donc 729 est divisible par 3 et par 9. Autres criteres utiles : par 2 (chiffre des unites pair). Par 5 (finit par 0 ou 5). En gros : pour 3 et 9, additionne les chiffres !' },
                    { question: 'Comment additionner des congruences ?', answer: 'Si a ≡ b [n] et c ≡ d [n], alors a+c ≡ b+d [n]. On ADDITIONNE membre a membre. Exemple : 5 ≡ 2 [3] et 7 ≡ 1 [3]. Donc 5+7 = 12 ≡ 2+1 = 3 ≡ 0 [3]. En gros : on peut additionner des congruences comme des egalites classiques.' },
                    { question: 'Comment multiplier des congruences ?', answer: 'Si a ≡ b [n] et c ≡ d [n], alors a×c ≡ b×d [n]. On MULTIPLIE membre a membre. Exemple : 5 ≡ 2 [3] et 7 ≡ 1 [3]. Donc 5×7 = 35 ≡ 2×1 = 2 [3]. En gros : on peut multiplier des congruences comme des egalites. ATTENTION : on ne peut PAS diviser des congruences (piege Bac) !' },
                    { question: 'Calculer pgcd(120, 45) ?', answer: 'Algorithme d\'Euclide : 120 = 45×2 + 30. 45 = 30×1 + 15. 30 = 15×2 + 0. Le dernier reste non nul est 15. Donc pgcd(120, 45) = 15. En gros : on divise a chaque etape et on remplace. Quand le reste est 0, le nombre juste avant est la reponse.' },
                    { question: 'Trouver u et v tels que 7u + 5v = 1 (Bezout) ?', answer: 'On remonte l\'algorithme d\'Euclide. 7 = 5×1 + 2 → 2 = 7 - 5×1. 5 = 2×2 + 1 → 1 = 5 - 2×2. On remplace 2 : 1 = 5 - 2×(7 - 5) = 3×5 - 2×7. Donc u = -2, v = 3. Verification : 7×(-2) + 5×3 = -14 + 15 = 1. En gros : on fait Euclide en "descendant", puis on remonte pour exprimer 1.' },
                    { question: 'Reste de 2^10 dans la division par 7 ?', answer: 'Par Fermat (7 premier, 7 ne divise pas 2) : 2⁶ ≡ 1 [7]. Donc 2^10 = 2⁶ × 2⁴ ≡ 1 × 16 [7]. 16 = 7×2 + 2, donc 16 ≡ 2 [7]. Resultat : 2^10 ≡ 2 [7]. Le reste est 2. En gros : Fermat simplifie l\'exposant, puis on calcule le reste normalement.' }
                ],
                quiz: [
                    { question: '\\( \\text{pgcd}(48, 18) \\) vaut :', options: ['\\( 3 \\)', '\\( 6 \\)', '\\( 9 \\)', '\\( 12 \\)'], correctIndex: 1, explanation: '\\( 48 = 18 \\times 2 + 12 \\) ; \\( 18 = 12 \\times 1 + 6 \\) ; \\( 12 = 6 \\times 2 + 0 \\). Le PGCD est 6.' },
                    { question: 'Le theoreme de Bezout affirme que \\( \\text{pgcd}(a,b) = 1 \\) equivaut a :', options: ['\\( a \\) et \\( b \\) sont pairs', 'Il existe \\( u, v \\) tels que \\( au + bv = 1 \\)', '\\( a \\mid b \\)', '\\( a + b \\) est premier'], correctIndex: 1, explanation: 'Bezout : \\( a \\) et \\( b \\) premiers entre eux ssi on peut trouver \\( u, v \\) entiers avec \\( au + bv = 1 \\).' },
                    { question: '17 est un nombre premier car :', options: ['17 est impair', '\\( 17 < 20 \\)', '17 n\'a que 1 et 17 comme diviseurs', '\\( 1 + 7 = 8 \\)'], correctIndex: 2, explanation: 'Un nombre premier n\'a exactement que deux diviseurs positifs : 1 et lui-meme.' },
                    { question: '\\( 2^{4} \\) modulo 5 vaut :', options: ['\\( 0 \\)', '\\( 1 \\)', '\\( 2 \\)', '\\( 3 \\)'], correctIndex: 1, explanation: '\\( 2^{4} = 16 = 5 \\times 3 + 1 \\), donc \\( 2^{4} \\equiv 1 \\pmod{5} \\). (On retrouve le petit theoreme de Fermat : \\( 2^{5-1} \\equiv 1 \\pmod{5} \\).)' },
                    { question: 'Le lemme de Gauss dit que si \\( a \\mid bc \\) et \\( \\text{pgcd}(a,b) = 1 \\), alors :', options: ['\\( a \\mid b \\)', '\\( a \\mid c \\)', '\\( b \\mid c \\)', '\\( c \\mid a \\)'], correctIndex: 1, explanation: 'Si \\( a \\) divise \\( bc \\) et \\( a \\) est premier avec \\( b \\), alors \\( a \\mid c \\).' },
                    { question: 'La decomposition en facteurs premiers de 60 est :', options: ['\\( 2 \\times 30 \\)', '\\( 2^{2} \\times 3 \\times 5 \\)', '\\( 4 \\times 15 \\)', '\\( 6 \\times 10 \\)'], correctIndex: 1, explanation: '\\( 60 = 4 \\times 15 = 2^{2} \\times 3 \\times 5 \\). C\'est la decomposition unique en facteurs premiers.' },
                    { question: '123 est divisible par 3 car :', options: ['123 est impair', '\\( 123 > 100 \\)', '\\( 1 + 2 + 3 = 6 \\) est divisible par 3', '\\( 123/3 = 40 \\)'], correctIndex: 2, explanation: 'Critere de divisibilite par 3 : la somme des chiffres (\\( 1+2+3 = 6 \\)) est divisible par 3. Et \\( 123/3 = 41 \\).' },
                    { question: 'Si \\( a \\equiv 3 \\pmod{7} \\) et \\( b \\equiv 5 \\pmod{7} \\), alors \\( a \\times b \\equiv \\) :', options: ['\\( 15 \\pmod{7} \\)', '\\( 1 \\pmod{7} \\)', '\\( 8 \\pmod{7} \\)', '\\( 2 \\pmod{7} \\)'], correctIndex: 1, explanation: '\\( a \\times b \\equiv 3 \\times 5 = 15 \\pmod{7} \\). Or \\( 15 = 7 \\times 2 + 1 \\), donc \\( a \\times b \\equiv 1 \\pmod{7} \\).' },
                    { question: 'Le petit theoreme de Fermat : si \\( p \\) premier et \\( p \\nmid a \\), alors :', options: ['\\( a^{p} \\equiv 0 \\pmod{p} \\)', '\\( a^{p-1} \\equiv 1 \\pmod{p} \\)', '\\( a^{p+1} \\equiv 1 \\pmod{p} \\)', '\\( a^{p} \\equiv p \\pmod{a} \\)'], correctIndex: 1, explanation: 'Le petit theoreme de Fermat : \\( a^{p-1} \\equiv 1 \\pmod{p} \\), si \\( p \\) est premier et \\( p \\nmid a \\).' },
                    { question: '\\( \\text{pgcd}(a, b) = \\text{pgcd}(b, r) \\) ou \\( r \\) est :', options: ['Le quotient de \\( a \\) par \\( b \\)', 'Le reste de la division de \\( a \\) par \\( b \\)', '\\( a - b \\)', '\\( a \\times b \\)'], correctIndex: 1, explanation: 'C\'est le principe de l\'algorithme d\'Euclide : on remplace \\( (a, b) \\) par \\( (b, r) \\) ou \\( r = a \\mod b \\).' }
                ]
            },
            // =====================================================================
            // SECTION 10 : Denombrement & Combinatoire
            // =====================================================================
            {
                id: 'denombrement',
                title: 'Denombrement & Combinatoire',
                icon: '\uD83C\uDFAF',
                content: '<h3>Principes fondamentaux</h3>'
                    + '<ul>'
                    + '<li><strong>Principe additif</strong> : si A et B sont deux ensembles disjoints, |A union B| = |A| + |B|. On additionne quand il y à un choix "ou"</li>'
                    + '<li><strong>Principe multiplicatif</strong> : si une action se decompose en etapes successives independantes, on multiplie le nombre de choix a chaque etape</li>'
                    + '<li><strong>Complement</strong> : pour compter les elements ne verifiant pas une propriété, on calcule : total - ceux qui la verifient</li>'
                    + '</ul>'
                    + '<h3>Permutations</h3>'
                    + '<ul>'
                    + '<li><strong>Definition</strong> : une permutation de n elements est un arrangement ordonne de tous ces elements</li>'
                    + '<li><strong>Nombre de permutations</strong> : n! = n * (n-1) * (n-2) * ... * 2 * 1. Convention : 0! = 1</li>'
                    + '<li><strong>Exemples</strong> : 3! = 6 ; 4! = 24 ; 5! = 120 ; 6! = 720 ; 10! = 3 628 800</li>'
                    + '</ul>'
                    + '<h3>Arrangements</h3>'
                    + '<ul>'
                    + '<li><strong>Definition</strong> : un arrangement de k elements parmi n est un choix ordonne de k elements parmi n (l\'ordre compte)</li>'
                    + '<li><strong>Formule</strong> : A(n, k) = n! / (n-k)! = n * (n-1) * ... * (n-k+1)</li>'
                    + '<li><strong>Exemple</strong> : A(5, 3) = 5 * 4 * 3 = 60. Nombre de podiums possibles parmi 5 coureurs</li>'
                    + '</ul>'
                    + '<h3>Combinaisons</h3>'
                    + '<ul>'
                    + '<li><strong>Definition</strong> : une combinaison de k elements parmi n est un choix non ordonne de k elements parmi n (l\'ordre ne compte pas)</li>'
                    + '<li><strong>Formule</strong> : C(n, k) = n! / (k! * (n-k)!)</li>'
                    + '<li><strong>Proprietes</strong> : C(n, 0) = C(n, n) = 1 ; C(n, 1) = n ; C(n, k) = C(n, n-k) (symetrie)</li>'
                    + '<li><strong>Triangle de Pascal</strong> : C(n, k) = C(n-1, k-1) + C(n-1, k)</li>'
                    + '</ul>'
                    + '<h3>Formule du binome de Newton</h3>'
                    + '<ul>'
                    + '<li><strong>Formule</strong> : (a + b)^n = somme pour k de 0 a n de C(n, k) * a^(n-k) * b^k</li>'
                    + '<li><strong>Cas particulier</strong> : (1 + x)^n = somme pour k de 0 a n de C(n, k) * x^k</li>'
                    + '<li><strong>Somme des coefficients</strong> : somme pour k de 0 a n de C(n, k) = 2^n (en posant a = b = 1)</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'C\'est quoi le principe multiplicatif ?', answer: 'Si tu as PLUSIEURS etapes INDEPENDANTES, tu MULTIPLIES le nombre de choix a chaque etape. Exemple : 3 entrees au menu et 4 plats → 3 × 4 = 12 menus possibles. Autre exemple : un code a 4 chiffres (0-9) → 10 × 10 × 10 × 10 = 10 000 codes. En gros : etapes successives + choix independants = on MULTIPLIE.' },
                    { question: 'C\'est quoi n! (factorielle) ?', answer: 'n! = n × (n-1) × (n-2) × ... × 2 × 1. C\'est le nombre de facons de RANGER n objets. Convention : 0! = 1. Exemples : 3! = 6. 4! = 24. 5! = 120. 6! = 720. Exemple concret : 5 amis en file d\'attente → 5! = 120 ordres possibles. En gros : factorielle = nombre d\'arrangements possibles de n objets.' },
                    { question: 'C\'est quoi un arrangement ?', answer: 'CHOISIR k elements parmi n ET les ORDONNER. L\'ORDRE COMPTE. Formule : A(n,k) = n!/(n-k)!. Exemple : un podium (or, argent, bronze) parmi 5 coureurs → A(5,3) = 5×4×3 = 60 podiums differents. En gros : arrangement = je choisis ET je range dans un ordre precis. Mots difficiles : "ordonner" = mettre dans un certain ordre.' },
                    { question: 'C\'est quoi une combinaison ?', answer: 'CHOISIR k elements parmi n SANS se soucier de l\'ordre. L\'ORDRE NE COMPTE PAS. Formule : C(n,k) = n! / (k! × (n-k)!). Exemple : choisir 2 delegues parmi 5 eleves → C(5,2) = (5×4)/(2×1) = 10. En gros : combinaison = je choisis un groupe, l\'ordre ne compte pas. Astuce : la question "de combien de facons..." → c\'est souvent une combinaison.' },
                    { question: 'Arrangement vs combinaison : comment choisir ?', answer: 'L\'ORDRE COMPTE ? → ARRANGEMENT (A). L\'ORDRE NE COMPTE PAS ? → COMBINAISON (C). Exemple 1 : un podium (or, argent, bronze) → l\'ordre compte → arrangement. Exemple 2 : choisir un comite de 3 personnes → l\'ordre ne compte pas → combinaison. Lien : A(n,k) = k! × C(n,k). L\'arrangement est toujours PLUS GRAND.' },
                    { question: 'Que valent C(n,0) et C(n,n) ?', answer: 'C(n,0) = 1. Il n\'y a qu\'UNE facon de ne choisir aucun element : ne rien prendre. C(n,n) = 1. Il n\'y a qu\'UNE facon de tout prendre : tout prendre. C(n,1) = n. Il y a n facons de choisir 1 element parmi n. En gros : les cas extremes (0 ou tous) donnent toujours 1.' },
                    { question: 'C\'est quoi la symetrie des combinaisons ?', answer: 'C(n,k) = C(n, n-k). Choisir k elements REVIENT a choisir les (n-k) qu\'on ne prend PAS. Exemple : C(10,3) = C(10,7) = 120. Choisir 3 eleves dans une classe de 10 = choisir les 7 qui restent. En gros : prendre k parmi n = laisser (n-k) parmi n. C\'est le même nombre.' },
                    { question: 'C\'est quoi la relation de Pascal ?', answer: 'C(n,k) = C(n-1, k-1) + C(n-1, k). Pour chaque element, deux choix : tu le PRENDS (→ C(n-1, k-1)) ou tu ne le prends PAS (→ C(n-1, k)). C\'est la base du TRIANGLE DE PASCAL : chaque nombre est la somme des deux au-dessus. En gros : "je le prends ou pas" decompose le problème en deux.' },
                    { question: 'C\'est quoi le binome de Newton ?', answer: '(a+b)^n = somme de C(n,k) × a^(n-k) × b^k pour k de 0 a n. Exemples : (a+b)² = a² + 2ab + b². (a+b)³ = a³ + 3a²b + 3ab² + b³. Les COEFFICIENTS sont les nombres du triangle de Pascal ! En gros : le binome developpe (a+b)^n avec les combinaisons comme coefficients. Astuce Bac : les coefficients pour n=4 sont 1, 4, 6, 4, 1.' },
                    { question: 'Somme de tous les C(n,k) ?', answer: 'C(n,0) + C(n,1) + ... + C(n,n) = 2^n. Pourquoi ? Pose a = b = 1 dans le binome de Newton : (1+1)^n = 2^n. Exemple : pour n = 3 : 1 + 3 + 3 + 1 = 8 = 2³. En gros : la somme de toute une ligne du triangle de Pascal vaut 2^n.' },
                    { question: 'Calculer C(6,2) ?', answer: 'C(6,2) = 6! / (2! × 4!) = (6×5) / (2×1) = 30/2 = 15. Astuce rapide : pour C(n,2), c\'est toujours n×(n-1)/2. C(6,2) = 6×5/2 = 15. En gros : pas besoin de calculer les factorielles en entier. Simplifie en ne gardant que les k premiers facteurs du numerateur.' },
                    { question: 'Calculer C(10,3) ?', answer: 'C(10,3) = 10! / (3! × 7!) = (10×9×8) / (3×2×1) = 720/6 = 120. On ne garde que les 3 premiers facteurs en haut (10, 9, 8) et on divise par 3! = 6. En gros : pour C(n,k), ecris k facteurs en partant de n, et divise par k!.' },
                    { question: 'Comite de 3 parmi 8 : combien de facons ?', answer: 'L\'ordre ne compte PAS (un comite = un groupe, pas un classement) → c\'est une COMBINAISON. C(8,3) = (8×7×6) / (3×2×1) = 336/6 = 56 comites possibles. En gros : des qu\'on parle de "choisir un groupe" sans classement → combinaison.' },
                    { question: 'Developper (x+1)^4 avec le binome ?', answer: 'Les coefficients du triangle de Pascal pour n=4 : 1, 4, 6, 4, 1. Donc (x+1)⁴ = 1×x⁴ + 4×x³ + 6×x² + 4×x + 1 = x⁴ + 4x³ + 6x² + 4x + 1. En gros : ecris les coefficients de Pascal et fais descendre l\'exposant de x de n a 0.' },
                    { question: 'C\'est quoi le principe additif ?', answer: 'Si deux situations sont INCOMPATIBLES (pas les deux en même temps), on ADDITIONNE les possibilites. Exemple : au menu, 3 pizzas OU 5 pates → 3 + 5 = 8 choix. ATTENTION : les deux ensembles doivent etre DISJOINTS (pas d\'element en commun). En gros : "ou" = on additionne. "Et" = on multiplie.' }
                ],
                quiz: [
                    { question: '\\( 5! \\) vaut :', options: ['\\( 25 \\)', '\\( 120 \\)', '\\( 60 \\)', '\\( 720 \\)'], correctIndex: 1, explanation: '\\( 5! = 5 \\times 4 \\times 3 \\times 2 \\times 1 = 120 \\).' },
                    { question: '\\( \\binom{6}{2} \\) vaut :', options: ['\\( 12 \\)', '\\( 15 \\)', '\\( 30 \\)', '\\( 36 \\)'], correctIndex: 1, explanation: '\\( \\binom{6}{2} = \\frac{6!}{2! \\times 4!} = \\frac{6 \\times 5}{2 \\times 1} = 15 \\).' },
                    { question: '\\( A_{4}^{2} \\) vaut :', options: ['\\( 6 \\)', '\\( 8 \\)', '\\( 12 \\)', '\\( 24 \\)'], correctIndex: 2, explanation: '\\( A_{4}^{2} = \\frac{4!}{(4-2)!} = \\frac{4!}{2!} = \\frac{4 \\times 3 \\times 2 \\times 1}{2 \\times 1} = 12 \\).' },
                    { question: '\\( \\binom{n}{k} = \\binom{n}{n-k} \\) est la propriété de :', options: ['Transitivite', 'Commutativite', 'Symetrie', 'Associativite'], correctIndex: 2, explanation: 'C\'est la propriété de symetrie des coefficients binomiaux.' },
                    { question: '\\( \\binom{5}{0} + \\binom{5}{1} + \\binom{5}{2} + \\binom{5}{3} + \\binom{5}{4} + \\binom{5}{5} = \\) :', options: ['\\( 25 \\)', '\\( 32 \\)', '\\( 16 \\)', '\\( 64 \\)'], correctIndex: 1, explanation: 'La somme de tous les \\( \\binom{n}{k} \\) pour \\( k \\) de 0 a \\( n \\) vaut \\( 2^{n} \\). Ici \\( 2^{5} = 32 \\).' },
                    { question: 'Le coefficient de \\( x^{2} \\) dans \\( (x + 1)^{5} \\) est :', options: ['\\( 5 \\)', '\\( 10 \\)', '\\( 20 \\)', '\\( 1 \\)'], correctIndex: 1, explanation: 'Par le binome, le coefficient de \\( x^{2} \\) est \\( \\binom{5}{2} = 10 \\).' },
                    { question: 'Le nombre de permutations de 4 elements est :', options: ['\\( 4 \\)', '\\( 12 \\)', '\\( 16 \\)', '\\( 24 \\)'], correctIndex: 3, explanation: '\\( 4! = 4 \\times 3 \\times 2 \\times 1 = 24 \\) permutations.' },
                    { question: 'La relation de Pascal est : \\( \\binom{n}{k} = \\) :', options: ['\\( \\binom{n-1}{k-1} + \\binom{n-1}{k} \\)', '\\( \\binom{n-1}{k-1} \\times \\binom{n-1}{k} \\)', '\\( \\binom{n}{k-1} + \\binom{n}{k+1} \\)', '\\( n \\times \\binom{n-1}{k} \\)'], correctIndex: 0, explanation: '\\( \\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k} \\), c\'est la relation de Pascal qui genere le triangle de Pascal.' },
                    { question: 'On choisit 4 cartes parmi 52 (sans ordre). Le nombre de mains possibles est :', options: ['\\( \\binom{52}{4} = 270\\,725 \\)', '\\( A_{52}^{4} = 6\\,497\\,400 \\)', '\\( 52^{4} \\)', '\\( 52 \\times 4 \\)'], correctIndex: 0, explanation: 'L\'ordre ne compte pas, c\'est \\( \\binom{52}{4} = \\frac{52!}{4! \\times 48!} = 270\\,725 \\).' },
                    { question: '\\( 0! \\) vaut :', options: ['\\( 0 \\)', '\\( 1 \\)', 'indetermine', '\\( -1 \\)'], correctIndex: 1, explanation: 'Par convention, \\( 0! = 1 \\). C\'est necessaire pour que les formules de combinaisons soient coherentes (\\( \\binom{n}{0} = 1 \\)).' }
                ]
            }
        ]
    });
})();
