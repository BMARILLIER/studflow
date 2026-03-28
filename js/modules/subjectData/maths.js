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
                    { question: 'Quelle est la derivee de x^n ?', answer: 'La derivee de x^n est n*x^(n-1). Exemples : (x^3)\' = 3x^2 ; (x^2)\' = 2x ; (x)\' = 1.' },
                    { question: 'Quelle est la derivee de e^x ?', answer: '(e^x)\' = e^x. La fonction exponentielle est sa propre derivee.' },
                    { question: 'Quelle est la derivee de ln(x) ?', answer: '(ln x)\' = 1/x, pour x > 0.' },
                    { question: 'Comment determiner le sens de variation d\'une fonction ?', answer: 'On calcule f\'(x). Si f\'(x) > 0, f est croissante. Si f\'(x) < 0, f est decroissante. Si f\'(x) = 0, f admet un extremum potentiel.' },
                    { question: 'Quelle est la formule de la derivee d\'un produit ?', answer: '(uv)\' = u\'v + uv\'. Ex : si f(x) = x*e^x, alors f\'(x) = 1*e^x + x*e^x = (1+x)e^x.' },
                    { question: 'Quelle est la formule de la derivee d\'un quotient ?', answer: '(u/v)\' = (u\'v - uv\') / v^2, avec v different de 0.' },
                    { question: 'Qu\'est-ce qu\'un extremum local ?', answer: 'Un maximum ou minimum local en un point a. Condition necessaire : f\'(a) = 0. Condition suffisante : changement de signe de f\' autour de a.' },
                    { question: 'Comment construire un tableau de variations ?', answer: '1) Calculer f\'(x). 2) Trouver les zeros de f\'. 3) Determiner le signe de f\' sur chaque intervalle. 4) En deduire les variations de f (croissante/decroissante).' }
                ],
                quiz: [
                    { question: 'La derivee de 3x^4 est :', options: ['12x^3', '3x^3', '4x^3', '12x^4'], correctIndex: 0, explanation: '(3x^4)\' = 3 * 4 * x^(4-1) = 12x^3.' },
                    { question: 'Si f\'(x) > 0 sur un intervalle, alors f est :', options: ['Decroissante', 'Croissante', 'Constante', 'Nulle'], correctIndex: 1, explanation: 'Une derivee positive signifie que la fonction est croissante sur cet intervalle.' },
                    { question: 'La derivee de sin(x) est :', options: ['-cos(x)', 'cos(x)', 'sin(x)', '-sin(x)'], correctIndex: 1, explanation: '(sin x)\' = cos x.' },
                    { question: 'La formule de derivation d\'un produit uv est :', options: ['u\'v\'', 'u\'v + uv\'', 'u\'v - uv\'', '(uv)^2'], correctIndex: 1, explanation: 'La regle du produit : (uv)\' = u\'v + uv\'.' },
                    { question: 'La derivee de f(x) = x*e^x est :', options: ['x*e^x', 'e^x', '(1 + x)*e^x', '(x - 1)*e^x'], correctIndex: 2, explanation: 'On applique la regle du produit : f\'(x) = 1*e^x + x*e^x = (1 + x)*e^x.' },
                    { question: 'La derivee de f(x) = (2x + 1)^3 est :', options: ['3(2x + 1)^2', '6(2x + 1)^2', '(2x + 1)^2', '6x(2x + 1)^2'], correctIndex: 1, explanation: 'On applique la derivee d\'une composee : f\'(x) = 3*(2x+1)^2 * 2 = 6(2x+1)^2.' }
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
                    { question: 'Quelle est la formule du terme general d\'une suite arithmetique ?', answer: 'u(n) = u(0) + n*r, ou r est la raison. Equivalent : u(n) = u(p) + (n-p)*r.' },
                    { question: 'Quelle est la formule du terme general d\'une suite geometrique ?', answer: 'u(n) = u(0) * q^n, ou q est la raison. Equivalent : u(n) = u(p) * q^(n-p).' },
                    { question: 'Comment calculer la somme des n+1 premiers termes d\'une suite arithmetique ?', answer: 'S = (n+1) * (u(0) + u(n)) / 2 = nombre de termes * (premier terme + dernier terme) / 2.' },
                    { question: 'Comment calculer la somme des n+1 premiers termes d\'une suite geometrique ?', answer: 'S = u(0) * (1 - q^(n+1)) / (1 - q), a condition que q soit different de 1.' },
                    { question: 'Quand une suite geometrique converge-t-elle ?', answer: 'Quand |q| < 1 (la raison est strictement entre -1 et 1). Elle converge alors vers 0.' },
                    { question: 'Qu\'est-ce que le theoreme des gendarmes ?', answer: 'Si u(n) <= v(n) <= w(n) pour tout n assez grand, et si lim u(n) = lim w(n) = L, alors lim v(n) = L. Permet de prouver une convergence.' },
                    { question: 'Comment montrer qu\'une suite est arithmetique ?', answer: 'Il faut montrer que u(n+1) - u(n) est une constante r (la raison) pour tout n.' },
                    { question: 'Comment montrer qu\'une suite est geometrique ?', answer: 'Il faut montrer que u(n+1) / u(n) est une constante q (la raison) pour tout n, avec u(n) != 0.' }
                ],
                quiz: [
                    { question: 'Le terme general d\'une suite arithmetique de premier terme 3 et de raison 2 est :', options: ['u(n) = 2n + 3', 'u(n) = 3n + 2', 'u(n) = 3 * 2^n', 'u(n) = 2^n + 3'], correctIndex: 0, explanation: 'u(n) = u(0) + n*r = 3 + 2n.' },
                    { question: 'Une suite geometrique de raison q = 0.5 :', options: ['Diverge', 'Converge vers 0', 'Est constante', 'Oscille'], correctIndex: 1, explanation: 'Si |q| < 1, la suite geometrique converge vers 0.' },
                    { question: 'La somme 1 + 2 + 3 + ... + 100 vaut :', options: ['5000', '5050', '10100', '5100'], correctIndex: 1, explanation: 'S = 100 * (1 + 100) / 2 = 100 * 101 / 2 = 5050.' },
                    { question: 'Le theoreme des gendarmes sert a :', options: ['Calculer une derivee', 'Prouver une convergence', 'Trouver un extremum', 'Calculer une integrale'], correctIndex: 1, explanation: 'Le theoreme des gendarmes (ou theoreme d\'encadrement) permet de determiner la limite d\'une suite encadree.' },
                    { question: 'La somme des 20 premiers termes d\'une suite arithmetique de premier terme u(0) = 5 et de raison r = 3 est :', options: ['670', '100', '570', '1140'], correctIndex: 0, explanation: 'u(19) = 5 + 19*3 = 62. S = 20 * (5 + 62) / 2 = 20 * 67 / 2 = 670.' },
                    { question: 'Une suite geometrique a pour premier terme u(0) = 4 et pour raison q = 1/2. Que vaut u(3) ?', options: ['2', '1', '0.5', '1/2'], correctIndex: 2, explanation: 'u(3) = u(0) * q^3 = 4 * (1/2)^3 = 4 * 1/8 = 0.5.' }
                ]
            },
            {
                id: 'probabilites',
                title: 'Probabilites & Statistiques',
                icon: '\uD83C\uDFB2',
                content: '<h3>Probabilites de base</h3>'
                    + '<ul>'
                    + '<li><strong>Experience aleatoire</strong> : experience dont le resultat n\'est pas previsible</li>'
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
                    + '<li><strong>Loi normale</strong> : loi en cloche, modelise les phenomenes naturels. Moyenne mu, ecart-type sigma</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'Quelle est la formule de P(A union B) ?', answer: 'P(A union B) = P(A) + P(B) - P(A inter B). Si A et B sont incompatibles : P(A union B) = P(A) + P(B).' },
                    { question: 'Quelle est la formule des probabilites conditionnelles ?', answer: 'P(A|B) = P(A inter B) / P(B), avec P(B) > 0. C\'est la probabilite de A sachant que B est realise.' },
                    { question: 'Quelle est la formule de la loi binomiale ?', answer: 'P(X=k) = C(n,k) * p^k * (1-p)^(n-k), ou n est le nombre d\'epreuves, p la probabilite de succes, k le nombre de succes.' },
                    { question: 'Quelle est l\'esperance d\'une loi binomiale B(n,p) ?', answer: 'E(X) = n * p. C\'est le nombre moyen de succes attendu sur n epreuves.' },
                    { question: 'Quelle est la variance d\'une loi binomiale B(n,p) ?', answer: 'V(X) = n * p * (1-p). L\'ecart-type est sigma = racine(n*p*(1-p)).' },
                    { question: 'Qu\'est-ce que la formule des probabilites totales ?', answer: 'Si B1, B2, ..., Bn forment une partition de omega : P(A) = somme de P(A|Bi) * P(Bi). Cas simple : P(A) = P(A|B)*P(B) + P(A|non B)*P(non B).' },
                    { question: 'Que signifie P(contraire de A) = 1 - P(A) ?', answer: 'La probabilite que A ne se realise pas est egale a 1 moins la probabilite que A se realise. Utile quand P(contraire) est plus facile a calculer.' },
                    { question: 'Qu\'est-ce que l\'equiprobabilite ?', answer: 'Situation ou tous les resultats possibles ont la meme probabilite. P(A) = nombre de cas favorables / nombre de cas possibles. Ex : lancer un de equitable.' }
                ],
                quiz: [
                    { question: 'P(contraire de A) est egal a :', options: ['P(A)', '1 - P(A)', '1/P(A)', 'P(A)^2'], correctIndex: 1, explanation: 'L\'evenement contraire a une probabilite complementaire a 1.' },
                    { question: 'L\'esperance de B(100, 0.3) vaut :', options: ['30', '70', '0.3', '300'], correctIndex: 0, explanation: 'E(X) = n*p = 100 * 0.3 = 30.' },
                    { question: 'P(A union B) = P(A) + P(B) quand :', options: ['Toujours', 'A et B sont independants', 'A et B sont incompatibles', 'P(A) = P(B)'], correctIndex: 2, explanation: 'Si A et B sont incompatibles (A inter B = vide), le terme P(A inter B) est nul.' },
                    { question: 'La loi binomiale modelise :', options: ['Un phenomene continu', 'La repetition d\'epreuves independantes a 2 issues', 'La moyenne d\'un echantillon', 'Un tirage sans remise'], correctIndex: 1, explanation: 'La loi binomiale B(n,p) modelise le nombre de succes dans n epreuves de Bernoulli independantes.' },
                    { question: 'On lance un de equilibre deux fois. La probabilite d\'obtenir au moins un 6 est :', options: ['1/3', '1/6', '11/36', '1/36'], correctIndex: 2, explanation: 'P(au moins un 6) = 1 - P(aucun 6) = 1 - (5/6)^2 = 1 - 25/36 = 11/36.' },
                    { question: 'Si P(A) = 0.6, P(B) = 0.5 et P(A inter B) = 0.3, alors P(A union B) = :', options: ['1.1', '0.8', '0.3', '0.9'], correctIndex: 1, explanation: 'P(A union B) = P(A) + P(B) - P(A inter B) = 0.6 + 0.5 - 0.3 = 0.8.' }
                ]
            },
            {
                id: 'geometrie',
                title: 'Geometrie dans l\'espace',
                icon: '\uD83D\uDDB1\uFE0F',
                content: '<h3>Vecteurs dans l\'espace</h3>'
                    + '<ul>'
                    + '<li><strong>Coordonnees</strong> : un point M(x, y, z) dans un repere orthonorme (O, i, j, k)</li>'
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
                    + '<li><strong>Droite perpendiculaire a un plan</strong> : son vecteur directeur est colineaire au vecteur normal du plan</li>'
                    + '<li><strong>Plans paralleles</strong> : vecteurs normaux colineaires</li>'
                    + '<li><strong>Distance d\'un point a un plan</strong> : d = |ax0 + by0 + cz0 + d| / racine(a^2 + b^2 + c^2)</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'Comment calcule-t-on les coordonnees du vecteur AB ?', answer: 'AB = (xB - xA, yB - yA, zB - zA). On soustrait les coordonnees du point de depart a celles du point d\'arrivee.' },
                    { question: 'Quelle est la formule de la norme d\'un vecteur (a, b, c) ?', answer: '||u|| = racine(a^2 + b^2 + c^2). C\'est la longueur du vecteur.' },
                    { question: 'Quelle est la formule du produit scalaire dans l\'espace ?', answer: 'u.v = x1*x2 + y1*y2 + z1*z2. Si u.v = 0, les vecteurs sont orthogonaux.' },
                    { question: 'Quelle est l\'equation generale d\'un plan ?', answer: 'ax + by + cz + d = 0, ou le vecteur n = (a, b, c) est un vecteur normal au plan.' },
                    { question: 'Comment ecrire l\'equation parametrique d\'une droite ?', answer: 'x = x0 + at ; y = y0 + bt ; z = z0 + ct, ou (x0,y0,z0) est un point de la droite et (a,b,c) est le vecteur directeur.' },
                    { question: 'Comment montrer que deux plans sont paralleles ?', answer: 'Deux plans sont paralleles si et seulement si leurs vecteurs normaux sont colineaires (proportionnels).' },
                    { question: 'Comment calculer la distance d\'un point a un plan ?', answer: 'd(M, P) = |ax0 + by0 + cz0 + d| / racine(a^2 + b^2 + c^2), ou M(x0,y0,z0) et le plan a pour equation ax+by+cz+d=0.' },
                    { question: 'Comment montrer qu\'une droite est perpendiculaire a un plan ?', answer: 'Le vecteur directeur de la droite doit etre colineaire au vecteur normal du plan. Autrement dit, la droite est dirigee par le vecteur normal.' }
                ],
                quiz: [
                    { question: 'Le produit scalaire u.v = 0 signifie que :', options: ['u et v sont paralleles', 'u et v sont orthogonaux', 'u = v', 'u ou v est nul'], correctIndex: 1, explanation: 'Deux vecteurs non nuls dont le produit scalaire vaut zero sont perpendiculaires (orthogonaux).' },
                    { question: 'La norme du vecteur (3, 4, 0) est :', options: ['7', '5', '25', '12'], correctIndex: 1, explanation: '||u|| = racine(3^2 + 4^2 + 0^2) = racine(9 + 16) = racine(25) = 5.' },
                    { question: 'L\'equation ax + by + cz + d = 0 definit :', options: ['Une droite', 'Un plan', 'Un cercle', 'Une sphere'], correctIndex: 1, explanation: 'C\'est l\'equation cartesienne d\'un plan dans l\'espace, avec (a,b,c) comme vecteur normal.' },
                    { question: 'Deux plans sont paralleles si leurs vecteurs normaux sont :', options: ['Orthogonaux', 'Colineaires', 'De meme norme', 'Opposes uniquement'], correctIndex: 1, explanation: 'Des vecteurs normaux colineaires (proportionnels) signifient que les plans sont paralleles.' },
                    { question: 'La distance du point M(1, 0, 1) au plan 2x - y + 2z - 1 = 0 est :', options: ['3', '5/3', '1', '2'], correctIndex: 2, explanation: 'd = |2*1 - 0 + 2*1 - 1| / racine(2^2 + 1^2 + 2^2) = |2 + 2 - 1| / racine(9) = 3/3 = 1.' }
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
                    + '<li><strong>Unicite a une constante pres</strong> : si F est une primitive de f, alors toute primitive de f s\'ecrit F(x) + C, ou C est une constante reelle</li>'
                    + '</ul>'
                    + '<h3>Integrale definie et theoreme fondamental</h3>'
                    + '<ul>'
                    + '<li><strong>Definition</strong> : l\'integrale de a a b de f(x)dx represente l\'aire algebrique entre la courbe de f, l\'axe des abscisses, et les droites x = a et x = b</li>'
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
                    { question: 'Qu\'est-ce qu\'une primitive de f ?', answer: 'Une fonction F telle que F\'(x) = f(x) pour tout x de l\'intervalle. Par exemple, F(x) = x^3/3 est une primitive de f(x) = x^2.' },
                    { question: 'Quelle est la primitive de x^n (n != -1) ?', answer: 'La primitive de x^n est x^(n+1)/(n+1) + C. Exemple : primitive de x^3 = x^4/4 + C.' },
                    { question: 'Quelle est la primitive de 1/x ?', answer: 'La primitive de 1/x est ln|x| + C, pour x != 0.' },
                    { question: 'Quelle est la primitive de e^x ?', answer: 'La primitive de e^x est e^x + C. La fonction exponentielle est egalement sa propre primitive.' },
                    { question: 'Enoncer le theoreme fondamental de l\'analyse.', answer: 'Si f est continue sur [a, b] et F est une primitive de f, alors integrale de a a b de f(x)dx = F(b) - F(a).' },
                    { question: 'Comment calculer l\'aire sous la courbe de f entre a et b ?', answer: 'Si f >= 0 sur [a, b], l\'aire = integrale de a a b de f(x)dx = F(b) - F(a). Si f change de signe, on decoupe en intervalles ou f garde un signe constant.' },
                    { question: 'Quelle est la relation de Chasles pour les integrales ?', answer: 'Integrale de a a b de f(x)dx + integrale de b a c de f(x)dx = integrale de a a c de f(x)dx. On peut "recoller" des integrales bout a bout.' },
                    { question: 'Quelle est la formule d\'integration par parties ?', answer: 'Integrale de a a b de u\'*v dx = [u*v] entre a et b - integrale de a a b de u*v\' dx. On choisit u\' et v judicieusement.' },
                    { question: 'Quelle est la propriete de linearite de l\'integrale ?', answer: 'Integrale de (alpha*f + beta*g) = alpha * integrale de f + beta * integrale de g. L\'integrale est un operateur lineaire.' },
                    { question: 'Que vaut integrale de a a a de f(x)dx ?', answer: 'Integrale de a a a de f(x)dx = 0. L\'integrale sur un intervalle de longueur nulle est nulle.' },
                    { question: 'Comment calculer l\'aire entre deux courbes f et g ?', answer: 'Aire = integrale de a a b de |f(x) - g(x)|dx. On determine d\'abord les intervalles ou f >= g et ceux ou g >= f.' },
                    { question: 'Calculer integrale de 0 a 1 de x^2 dx.', answer: 'Primitive de x^2 = x^3/3. Donc [x^3/3] entre 0 et 1 = 1/3 - 0 = 1/3.' },
                    { question: 'Calculer integrale de 1 a e de (1/x) dx.', answer: 'Primitive de 1/x = ln(x). Donc [ln(x)] entre 1 et e = ln(e) - ln(1) = 1 - 0 = 1.' },
                    { question: 'Quelle est la primitive de cos(x) ?', answer: 'La primitive de cos(x) est sin(x) + C.' },
                    { question: 'Quelle est la primitive de sin(x) ?', answer: 'La primitive de sin(x) est -cos(x) + C. Attention au signe negatif.' }
                ],
                quiz: [
                    { question: 'La primitive de x^3 est :', options: ['3x^2', 'x^4/4 + C', 'x^4 + C', 'x^3/3 + C'], correctIndex: 1, explanation: 'Primitive de x^n = x^(n+1)/(n+1) + C. Ici : x^4/4 + C.' },
                    { question: 'Integrale de 0 a 2 de 3x^2 dx vaut :', options: ['6', '8', '12', '4'], correctIndex: 1, explanation: 'Primitive de 3x^2 = x^3. [x^3] entre 0 et 2 = 8 - 0 = 8.' },
                    { question: 'Le theoreme fondamental affirme que integrale de a a b de f(x)dx = :', options: ['f(b) - f(a)', 'F(b) - F(a)', 'F(a) - F(b)', 'f\'(b) - f\'(a)'], correctIndex: 1, explanation: 'Si F est une primitive de f, alors integrale de a a b de f(x)dx = F(b) - F(a).' },
                    { question: 'Integrale de 0 a 1 de e^x dx vaut :', options: ['e', 'e - 1', '1', 'e + 1'], correctIndex: 1, explanation: 'Primitive de e^x = e^x. [e^x] entre 0 et 1 = e^1 - e^0 = e - 1.' },
                    { question: 'La relation de Chasles pour les integrales signifie :', options: ['On peut permuter les bornes', 'On peut decomposer une integrale en somme', 'L\'integrale est toujours positive', 'F\'(x) = f(x)'], correctIndex: 1, explanation: 'Integrale de a a c = integrale de a a b + integrale de b a c, pour tout b entre a et c.' },
                    { question: 'Integrale de 1 a e de (1/x) dx vaut :', options: ['0', 'e', '1', 'ln(e) - 1'], correctIndex: 2, explanation: 'Primitive de 1/x = ln(x). [ln(x)] entre 1 et e = ln(e) - ln(1) = 1 - 0 = 1.' },
                    { question: 'Si f(x) >= 0 sur [a, b], alors integrale de a a b de f(x)dx est :', options: ['Negative', 'Nulle', 'Positive ou nulle', 'Egale a f(b)'], correctIndex: 2, explanation: 'La positivite de l\'integrale : si f >= 0, alors l\'integrale est >= 0.' },
                    { question: 'La primitive de cos(x) est :', options: ['-sin(x) + C', 'sin(x) + C', 'cos(x) + C', '-cos(x) + C'], correctIndex: 1, explanation: 'On verifie : (sin(x))\' = cos(x). Donc sin(x) + C est bien la primitive de cos(x).' },
                    { question: 'Integration par parties : integrale de u\'*v dx = :', options: ['u*v - integrale de u*v\' dx', 'u\'*v\' + C', 'u*v + integrale de u*v\' dx', 'u/v - integrale de u\'/v\' dx'], correctIndex: 0, explanation: 'Formule IPP : integrale de u\'*v = [u*v] - integrale de u*v\'. On evalue entre les bornes.' },
                    { question: 'Integrale de 0 a pi de sin(x) dx vaut :', options: ['0', '1', '2', '-2'], correctIndex: 2, explanation: 'Primitive de sin(x) = -cos(x). [-cos(x)] entre 0 et pi = -cos(pi) - (-cos(0)) = -(-1) + 1 = 1 + 1 = 2.' },
                    { question: 'Integrale de 1 a 2 de (1/x^2) dx vaut :', options: ['1', '1/2', 'ln(2)', '-1/2'], correctIndex: 1, explanation: 'Primitive de 1/x^2 = x^(-2), donc primitive = -1/x. [-1/x] entre 1 et 2 = -1/2 - (-1) = -1/2 + 1 = 1/2.' },
                    { question: 'L\'aire sous la courbe de f(x) = x entre 0 et 4 vaut :', options: ['4', '16', '8', '2'], correctIndex: 2, explanation: 'Primitive de x = x^2/2. [x^2/2] entre 0 et 4 = 16/2 - 0 = 8. C\'est aussi l\'aire du triangle de base 4 et hauteur 4 : (4*4)/2 = 8.' }
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
                    + '<li><strong>Methodes de levee</strong> : factorisation, conjuguee, regles de L\'Hopital (hors programme mais utile), croissances comparees</li>'
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
                    { question: 'Quelle est la limite de e^x quand x tend vers +infini ?', answer: 'lim e^x = +infini quand x tend vers +infini. L\'exponentielle croit plus vite que tout polynome.' },
                    { question: 'Quelle est la limite de e^x quand x tend vers -infini ?', answer: 'lim e^x = 0 quand x tend vers -infini. La courbe admet l\'axe des abscisses comme asymptote horizontale.' },
                    { question: 'Quelle est la limite de ln(x) quand x tend vers 0+ ?', answer: 'lim ln(x) = -infini quand x tend vers 0+. La droite x = 0 est asymptote verticale.' },
                    { question: 'Comment determiner la limite d\'un polynome en l\'infini ?', answer: 'La limite d\'un polynome en +/- infini est celle de son terme de plus haut degre. Ex : lim (3x^3 - 2x + 1) = lim 3x^3 = +infini.' },
                    { question: 'Quelles sont les 7 formes indeterminees ?', answer: '+infini - infini ; 0 * infini ; infini/infini ; 0/0 ; 1^infini ; 0^0 ; infini^0. Il faut lever l\'indetermination par factorisation, conjuguee, ou croissances comparees.' },
                    { question: 'Comment lever une forme indeterminee infini/infini pour une fraction rationnelle ?', answer: 'On factorise le numerateur et le denominateur par le terme de plus haut degre respectif, puis on simplifie.' },
                    { question: 'Qu\'est-ce qu\'une asymptote horizontale ?', answer: 'Si lim f(x) = L quand x tend vers +infini (ou -infini), alors la droite y = L est asymptote horizontale a la courbe.' },
                    { question: 'Qu\'est-ce qu\'une asymptote verticale ?', answer: 'Si lim f(x) = +/- infini quand x tend vers a, alors la droite x = a est asymptote verticale. Ex : x = 0 pour f(x) = 1/x.' },
                    { question: 'Qu\'est-ce que la continuite en un point ?', answer: 'f est continue en a si : f(a) est definie, lim f(x) quand x tend vers a existe, et lim f(x) = f(a). Pas de "saut" dans la courbe.' },
                    { question: 'Enoncer le theoreme des valeurs intermediaires (TVI).', answer: 'Si f est continue sur [a, b] et k est compris entre f(a) et f(b), alors il existe au moins un reel c dans [a, b] tel que f(c) = k.' },
                    { question: 'Quel est le corollaire du TVI pour les fonctions strictement monotones ?', answer: 'Si f est continue et strictement monotone sur [a, b], et k est compris entre f(a) et f(b), alors l\'equation f(x) = k admet une unique solution dans [a, b].' },
                    { question: 'Comment montrer qu\'une equation f(x) = 0 admet une solution sur [a, b] ?', answer: 'On verifie que f est continue sur [a, b], que f(a) et f(b) sont de signes contraires (f(a)*f(b) < 0). Par le TVI, il existe c dans [a, b] tel que f(c) = 0.' },
                    { question: 'Quelle est la limite de (1 + 1/n)^n quand n tend vers +infini ?', answer: 'lim (1 + 1/n)^n = e (le nombre d\'Euler, environ 2.718). C\'est une definition classique de e.' },
                    { question: 'Que vaut lim sin(x)/x quand x tend vers 0 ?', answer: 'lim sin(x)/x = 1 quand x tend vers 0. C\'est une limite classique fondamentale (forme 0/0 levee).' },
                    { question: 'Comment determiner une asymptote oblique y = ax + b ?', answer: 'On calcule a = lim f(x)/x quand x tend vers l\'infini, puis b = lim [f(x) - ax] quand x tend vers l\'infini. Si a et b sont finis (a != 0), y = ax + b est asymptote oblique.' }
                ],
                quiz: [
                    { question: 'lim (3x^2 - x + 1) quand x tend vers +infini vaut :', options: ['+infini', '-infini', '3', '0'], correctIndex: 0, explanation: 'Le terme dominant est 3x^2, qui tend vers +infini.' },
                    { question: 'lim e^x quand x tend vers -infini vaut :', options: ['+infini', '0', '1', '-infini'], correctIndex: 1, explanation: 'L\'exponentielle tend vers 0 quand x tend vers -infini.' },
                    { question: 'lim ln(x) quand x tend vers +infini vaut :', options: ['0', '1', '+infini', 'e'], correctIndex: 2, explanation: 'Le logarithme tend vers +infini, mais moins vite que toute puissance de x.' },
                    { question: 'La forme +infini - infini est :', options: ['Toujours egale a 0', 'Toujours egale a +infini', 'Une forme indeterminee', 'Toujours negative'], correctIndex: 2, explanation: 'C\'est une forme indeterminee : le resultat depend de la vitesse de croissance respective des deux termes.' },
                    { question: 'Si f est continue sur [a, b] avec f(a) < 0 et f(b) > 0, alors :', options: ['f n\'a pas de zero', 'Il existe c dans [a,b] tel que f(c) = 0', 'f(a) = f(b)', 'f est decroissante'], correctIndex: 1, explanation: 'Par le TVI, f etant continue et changeant de signe, il existe c tel que f(c) = 0.' },
                    { question: 'lim (2x^3 + x) / (5x^3 - 1) quand x tend vers +infini vaut :', options: ['0', '2/5', '+infini', '1'], correctIndex: 1, explanation: 'On divise par x^3 : lim (2 + 1/x^2) / (5 - 1/x^3) = 2/5.' },
                    { question: 'La droite x = 2 est asymptote verticale de f si :', options: ['f(2) = 0', 'lim f(x) = 2', 'lim f(x) = +/- infini quand x tend vers 2', 'f\'(2) = 0'], correctIndex: 2, explanation: 'Une asymptote verticale x = a correspond a une limite infinie de f quand x tend vers a.' },
                    { question: 'lim sin(x)/x quand x tend vers 0 vaut :', options: ['0', '+infini', 'n\'existe pas', '1'], correctIndex: 3, explanation: 'C\'est une limite classique : lim sin(x)/x = 1 quand x tend vers 0.' },
                    { question: 'Une fonction continue sur un intervalle ferme [a, b] :', options: ['Peut ne pas etre bornee', 'Atteint ses bornes (theoreme des bornes)', 'Est toujours derivable', 'N\'a pas de maximum'], correctIndex: 1, explanation: 'Theoreme des bornes atteintes : une fonction continue sur [a, b] ferme borne est bornee et atteint ses bornes.' },
                    { question: 'lim x*e^(-x) quand x tend vers +infini vaut :', options: ['+infini', '0', '1', '-infini'], correctIndex: 1, explanation: 'Croissances comparees : e^x croit plus vite que x, donc x/e^x tend vers 0, soit x*e^(-x) tend vers 0.' }
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
                    { question: 'Quelle est la derivee de ln(x) ?', answer: '(ln x)\' = 1/x pour x > 0. Plus generalement, (ln u)\' = u\'/u.' },
                    { question: 'Simplifier ln(a*b).', answer: 'ln(a*b) = ln(a) + ln(b). Le logarithme transforme les produits en sommes.' },
                    { question: 'Simplifier ln(a^n).', answer: 'ln(a^n) = n * ln(a). L\'exposant "descend" devant le logarithme.' },
                    { question: 'Que vaut ln(1) et ln(e) ?', answer: 'ln(1) = 0 et ln(e) = 1. Ce sont les deux valeurs de reference a connaitre.' },
                    { question: 'Quelle est la derivee de e^u ?', answer: '(e^u)\' = u\' * e^u. Exemple : (e^(2x))\' = 2 * e^(2x).' },
                    { question: 'Simplifier e^(a+b).', answer: 'e^(a+b) = e^a * e^b. L\'exponentielle transforme les sommes en produits.' },
                    { question: 'Que vaut e^0 ?', answer: 'e^0 = 1. C\'est une propriete fondamentale de l\'exponentielle.' },
                    { question: 'L\'exponentielle peut-elle s\'annuler ?', answer: 'Non, e^x > 0 pour tout reel x. L\'exponentielle est toujours strictement positive.' },
                    { question: 'Enoncer la croissance comparee de exp et d\'un polynome.', answer: 'lim x^n / e^x = 0 quand x tend vers +infini, pour tout entier n. L\'exponentielle l\'emporte toujours sur un polynome.' },
                    { question: 'Enoncer la croissance comparee de ln et d\'un polynome.', answer: 'lim ln(x) / x^n = 0 quand x tend vers +infini, pour tout n > 0. Tout polynome l\'emporte sur le logarithme.' },
                    { question: 'Que vaut lim x*ln(x) quand x tend vers 0+ ?', answer: 'lim x*ln(x) = 0 quand x tend vers 0+. C\'est une forme indeterminee 0 * (-infini) levee par croissances comparees.' },
                    { question: 'Resoudre l\'equation e^(2x) = 5.', answer: 'On passe au ln : 2x = ln(5), donc x = ln(5)/2, soit environ 0.805.' },
                    { question: 'Resoudre l\'equation ln(x) = 3.', answer: 'On passe a l\'exponentielle : x = e^3, soit environ 20.09.' },
                    { question: 'Comment resoudre ln(f(x)) = ln(g(x)) ?', answer: 'Cela equivaut a f(x) = g(x), a condition que f(x) > 0 et g(x) > 0 (condition d\'existence du ln).' },
                    { question: 'Quelle est la derivee de ln(2x + 1) ?', answer: '(ln(2x+1))\' = 2 / (2x+1). On applique (ln u)\' = u\'/u avec u = 2x + 1.' }
                ],
                quiz: [
                    { question: 'ln(e^5) vaut :', options: ['5', 'e^5', '1/5', 'ln(5)'], correctIndex: 0, explanation: 'ln(e^5) = 5 * ln(e) = 5 * 1 = 5.' },
                    { question: 'La derivee de e^(3x) est :', options: ['3x * e^(3x)', '3 * e^(3x)', 'e^(3x)', 'e^3 * x'], correctIndex: 1, explanation: '(e^u)\' = u\' * e^u. Avec u = 3x : u\' = 3, donc (e^(3x))\' = 3e^(3x).' },
                    { question: 'ln(a) + ln(b) = :', options: ['ln(a + b)', 'ln(a * b)', 'ln(a) * ln(b)', 'ln(a^b)'], correctIndex: 1, explanation: 'Propriete fondamentale : le logarithme transforme un produit en somme.' },
                    { question: 'lim x^2 / e^x quand x tend vers +infini vaut :', options: ['+infini', '1', '0', 'e'], correctIndex: 2, explanation: 'Croissances comparees : l\'exponentielle l\'emporte sur tout polynome, donc la limite est 0.' },
                    { question: 'La solution de e^x = 7 est :', options: ['x = 7/e', 'x = ln(7)', 'x = e^7', 'x = 7'], correctIndex: 1, explanation: 'On prend le ln des deux cotes : x = ln(7), environ 1.946.' },
                    { question: 'e^x > 0 pour :', options: ['x > 0 seulement', 'x >= 0', 'Tout x reel', 'x != 0'], correctIndex: 2, explanation: 'L\'exponentielle est toujours strictement positive, quel que soit x reel.' },
                    { question: 'La derivee de ln(x^2 + 1) est :', options: ['1/(x^2 + 1)', '2x/(x^2 + 1)', '2x * ln(x^2 + 1)', 'x^2/(x^2 + 1)'], correctIndex: 1, explanation: '(ln u)\' = u\'/u. Avec u = x^2 + 1 : u\' = 2x, donc la derivee est 2x/(x^2 + 1).' },
                    { question: 'lim ln(x)/x quand x tend vers +infini vaut :', options: ['+infini', '1', '0', 'ln(1)'], correctIndex: 2, explanation: 'Croissances comparees : x croit plus vite que ln(x), donc ln(x)/x tend vers 0.' },
                    { question: 'ln(racine(x)) est egal a :', options: ['racine(ln(x))', '2*ln(x)', 'ln(x)/2', 'ln(x)^(1/2)'], correctIndex: 2, explanation: 'ln(racine(x)) = ln(x^(1/2)) = (1/2)*ln(x) = ln(x)/2.' },
                    { question: 'L\'equation ln(x) = -1 a pour solution :', options: ['x = -1', 'x = 1/e', 'x = e^(-1) = 1/e', 'x = -e'], correctIndex: 2, explanation: 'ln(x) = -1 equivaut a x = e^(-1) = 1/e, soit environ 0.368.' },
                    { question: 'La fonction f(x) = e^(-x^2) admet pour derivee :', options: ['-2x*e^(-x^2)', 'e^(-x^2)', '-e^(-2x)', '2x*e^(-x^2)'], correctIndex: 0, explanation: 'On applique (e^u)\' = u\'*e^u avec u = -x^2, donc u\' = -2x. Ainsi f\'(x) = -2x*e^(-x^2).' },
                    { question: 'L\'equation e^(2x) - 3*e^x + 2 = 0 a pour solutions :', options: ['x = 0 et x = ln(2)', 'x = 1 et x = 2', 'x = ln(2) uniquement', 'x = 0 uniquement'], correctIndex: 0, explanation: 'On pose X = e^x. L\'equation devient X^2 - 3X + 2 = 0, soit (X-1)(X-2) = 0. Donc X = 1 ou X = 2, c\'est-a-dire e^x = 1 (x = 0) ou e^x = 2 (x = ln 2).' },
                    { question: 'Simplifier ln(e^3 * e^2) :', options: ['ln(e^3) * ln(e^2)', '6', '5', 'e^5'], correctIndex: 2, explanation: 'ln(e^3 * e^2) = ln(e^(3+2)) = ln(e^5) = 5. On utilise e^a * e^b = e^(a+b) puis ln(e^n) = n.' }
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
                    { question: 'Que vaut i^2 ?', answer: 'i^2 = -1. C\'est la definition du nombre imaginaire i. On en deduit i^3 = -i, i^4 = 1, et le cycle recommence.' },
                    { question: 'Comment calculer le module de z = a + ib ?', answer: '|z| = racine(a^2 + b^2). Exemple : |3 + 4i| = racine(9 + 16) = racine(25) = 5.' },
                    { question: 'Quel est le conjugue de z = 3 - 2i ?', answer: 'Le conjugue est z_barre = 3 + 2i. On change le signe de la partie imaginaire.' },
                    { question: 'Que vaut z * conjugue(z) ?', answer: 'z * conjugue(z) = |z|^2 = a^2 + b^2. C\'est toujours un reel positif. Ex : (3+2i)(3-2i) = 9 + 4 = 13.' },
                    { question: 'Enoncer la formule d\'Euler.', answer: 'e^(i*theta) = cos(theta) + i*sin(theta). En particulier : e^(i*pi) = -1 (identite d\'Euler).' },
                    { question: 'Enoncer la formule de Moivre.', answer: '(cos(theta) + i*sin(theta))^n = cos(n*theta) + i*sin(n*theta). Utile pour calculer les puissances en forme trigonometrique.' },
                    { question: 'Comment multiplier deux complexes en forme exponentielle ?', answer: 'r1*e^(i*theta1) * r2*e^(i*theta2) = r1*r2 * e^(i*(theta1+theta2)). Les modules se multiplient, les arguments s\'ajoutent.' },
                    { question: 'Quelles sont les racines carrees de i ?', answer: 'On cherche z = a + ib tel que z^2 = i. On trouve z = (racine(2)/2)(1 + i) et z = -(racine(2)/2)(1 + i).' },
                    { question: 'Combien de racines n-iemes de l\'unite y a-t-il ?', answer: 'Il y a exactement n racines n-iemes de l\'unite : z_k = e^(i*2k*pi/n) pour k = 0, 1, ..., n-1.' },
                    { question: 'Comment resoudre z^2 + z + 1 = 0 dans C ?', answer: 'delta = 1 - 4 = -3 < 0. Les solutions sont z = (-1 +/- i*racine(3)) / 2. Ce sont j et j_barre, racines cubiques de l\'unite.' },
                    { question: 'Quelle est l\'interpretation geometrique de |z1 - z2| ?', answer: '|z1 - z2| represente la distance entre les points M1(z1) et M2(z2) dans le plan complexe.' },
                    { question: 'Comment passer de la forme algebrique a la forme trigonometrique ?', answer: 'On calcule r = |z| = racine(a^2 + b^2), puis theta = arg(z) avec cos(theta) = a/r et sin(theta) = b/r. Alors z = r*(cos(theta) + i*sin(theta)).' },
                    { question: 'Que represente arg(z) geometriquement ?', answer: 'arg(z) est l\'angle que fait le vecteur OM (M etant le point d\'affixe z) avec l\'axe des reels (axe Ox), mesure en radians.' },
                    { question: 'Ecrire 1 + i sous forme exponentielle.', answer: '|1+i| = racine(1+1) = racine(2). arg(1+i) = pi/4. Donc 1+i = racine(2) * e^(i*pi/4).' },
                    { question: 'Que vaut e^(i*pi) ?', answer: 'e^(i*pi) = cos(pi) + i*sin(pi) = -1 + 0 = -1. C\'est l\'identite d\'Euler : e^(i*pi) + 1 = 0.' }
                ],
                quiz: [
                    { question: 'Le module de z = 3 + 4i est :', options: ['7', '5', '25', '1'], correctIndex: 1, explanation: '|z| = racine(3^2 + 4^2) = racine(9 + 16) = racine(25) = 5.' },
                    { question: 'Le conjugue de 2 - 3i est :', options: ['-2 + 3i', '2 + 3i', '-2 - 3i', '3 - 2i'], correctIndex: 1, explanation: 'On change le signe de la partie imaginaire : conjugue(2 - 3i) = 2 + 3i.' },
                    { question: 'i^4 vaut :', options: ['-1', 'i', '-i', '1'], correctIndex: 3, explanation: 'i^1 = i, i^2 = -1, i^3 = -i, i^4 = 1. Le cycle est de periode 4.' },
                    { question: '(1 + i)(1 - i) vaut :', options: ['0', '2', '2i', '1 + i'], correctIndex: 1, explanation: '(1+i)(1-i) = 1 - i^2 = 1 - (-1) = 2. C\'est |1+i|^2.' },
                    { question: 'La forme exponentielle de -1 est :', options: ['e^(i*pi)', 'e^(i*pi/2)', 'e^(2i*pi)', 'e^(-i*pi/2)'], correctIndex: 0, explanation: 'e^(i*pi) = cos(pi) + i*sin(pi) = -1. Donc -1 = e^(i*pi).' },
                    { question: 'e^(i*pi/2) vaut :', options: ['1', '-1', 'i', '-i'], correctIndex: 2, explanation: 'e^(i*pi/2) = cos(pi/2) + i*sin(pi/2) = 0 + i*1 = i.' },
                    { question: 'Le nombre de racines cubiques de l\'unite est :', options: ['1', '2', '3', '6'], correctIndex: 2, explanation: 'Il y a n racines n-iemes de l\'unite, donc 3 racines cubiques : 1, e^(i*2pi/3), e^(i*4pi/3).' },
                    { question: 'Si z^2 + 4 = 0, alors z = :', options: ['+/- 2', '+/- 2i', '+/- 4i', '+/- racine(2)i'], correctIndex: 1, explanation: 'z^2 = -4, donc z = +/- racine(-4) = +/- 2i.' },
                    { question: 'arg(z1 * z2) est egal a :', options: ['arg(z1) * arg(z2)', 'arg(z1) + arg(z2)', 'arg(z1) - arg(z2)', '|arg(z1 * z2)|'], correctIndex: 1, explanation: 'Les arguments s\'ajoutent lors de la multiplication (modulo 2*pi).' },
                    { question: '|z1 - z2| represente geometriquement :', options: ['L\'angle entre z1 et z2', 'La distance entre M1 et M2', 'L\'aire du triangle OM1M2', 'Le produit des modules'], correctIndex: 1, explanation: '|z1 - z2| est la distance entre les points d\'affixe z1 et z2 dans le plan complexe.' }
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
                    + '<li><strong>Decomposition en facteurs premiers</strong> : tout entier n >= 2 s\'ecrit de maniere unique comme produit de nombres premiers (theoreme fondamental de l\'arithmetique)</li>'
                    + '<li><strong>Crible d\'Eratosthene</strong> : methode pour trouver tous les premiers jusqu\'a N, en eliminant les multiples</li>'
                    + '<li><strong>Infinitude</strong> : il existe une infinite de nombres premiers (preuve d\'Euclide)</li>'
                    + '</ul>'
                    + '<h3>Congruences et petit theoreme de Fermat</h3>'
                    + '<ul>'
                    + '<li><strong>Congruence</strong> : a est congru a b modulo n (a = b [n]) si n divise (a - b). Autrement dit a et b ont le meme reste dans la division par n</li>'
                    + '<li><strong>Proprietes</strong> : si a = b [n] et c = d [n], alors a+c = b+d [n] et a*c = b*d [n]</li>'
                    + '<li><strong>Petit theoreme de Fermat</strong> : si p est premier et a n\'est pas divisible par p, alors a^(p-1) = 1 [p]</li>'
                    + '<li><strong>Corollaire</strong> : pour tout a et p premier, a^p = a [p]</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'Enoncer la division euclidienne.', answer: 'Pour a entier et b entier strictement positif, il existe un unique couple (q, r) tel que a = b*q + r avec 0 <= r < b. q est le quotient, r le reste.' },
                    { question: 'Comment calculer le PGCD avec l\'algorithme d\'Euclide ?', answer: 'On fait des divisions euclidiennes successives : pgcd(a,b) = pgcd(b, r1) = pgcd(r1, r2) = ... jusqu\'a obtenir un reste nul. Le dernier reste non nul est le PGCD. Ex : pgcd(48,18) = pgcd(18,12) = pgcd(12,6) = 6.' },
                    { question: 'Enoncer le theoreme de Bezout.', answer: 'a et b sont premiers entre eux (pgcd(a,b) = 1) si et seulement s\'il existe des entiers u et v tels que a*u + b*v = 1.' },
                    { question: 'Enoncer le lemme de Gauss.', answer: 'Si a divise b*c et pgcd(a, b) = 1, alors a divise c. Ex : si 7 | 3*n et pgcd(7,3) = 1, alors 7 | n.' },
                    { question: 'Qu\'est-ce qu\'un nombre premier ?', answer: 'Un entier p >= 2 qui n\'a que deux diviseurs positifs : 1 et p. Les premiers nombres premiers sont 2, 3, 5, 7, 11, 13, 17, 19, 23, 29.' },
                    { question: 'Enoncer le theoreme fondamental de l\'arithmetique.', answer: 'Tout entier n >= 2 se decompose de maniere unique (a l\'ordre pres) en produit de facteurs premiers. Ex : 360 = 2^3 * 3^2 * 5.' },
                    { question: 'Que signifie a est congru a b modulo n ?', answer: 'Cela signifie que n divise (a - b), ou de maniere equivalente, a et b ont le meme reste dans la division euclidienne par n. Notation : a = b [n].' },
                    { question: 'Enoncer le petit theoreme de Fermat.', answer: 'Si p est un nombre premier et a n\'est pas divisible par p, alors a^(p-1) = 1 [p]. Ex : 2^6 = 64 = 1 [7] car 7 est premier et 7 ne divise pas 2.' },
                    { question: 'Comment prouver que deux nombres sont premiers entre eux ?', answer: 'Methode 1 : algorithme d\'Euclide pour trouver pgcd = 1. Methode 2 : trouver u, v tels que a*u + b*v = 1 (Bezout). Methode 3 : decomposition en facteurs premiers sans facteur commun.' },
                    { question: 'Quels sont les criteres de divisibilite par 3 et par 9 ?', answer: 'Divisible par 3 : la somme des chiffres est divisible par 3. Divisible par 9 : la somme des chiffres est divisible par 9. Ex : 729 -> 7+2+9 = 18, divisible par 3 et par 9.' },
                    { question: 'Comment additionner des congruences ?', answer: 'Si a = b [n] et c = d [n], alors a + c = b + d [n]. On peut ajouter membre a membre. Ex : 5 = 2 [3] et 7 = 1 [3] donc 12 = 3 [3] soit 12 = 0 [3].' },
                    { question: 'Comment multiplier des congruences ?', answer: 'Si a = b [n] et c = d [n], alors a*c = b*d [n]. On peut multiplier membre a membre. Ex : 5 = 2 [3] et 7 = 1 [3] donc 35 = 2 [3].' },
                    { question: 'Calculer pgcd(120, 45).', answer: '120 = 45*2 + 30 ; 45 = 30*1 + 15 ; 30 = 15*2 + 0. Le dernier reste non nul est 15, donc pgcd(120, 45) = 15.' },
                    { question: 'Trouver u et v tels que 7u + 5v = 1 (Bezout).', answer: '7 = 5*1 + 2 ; 5 = 2*2 + 1. En remontant : 1 = 5 - 2*2 = 5 - 2*(7 - 5) = 3*5 - 2*7. Donc u = -2, v = 3 : 7*(-2) + 5*3 = -14 + 15 = 1.' },
                    { question: 'Calculer le reste de 2^10 dans la division par 7.', answer: 'Par Fermat, 2^6 = 1 [7]. Donc 2^10 = 2^6 * 2^4 = 1 * 16 [7]. 16 = 7*2 + 2, donc 2^10 = 2 [7]. Le reste est 2.' }
                ],
                quiz: [
                    { question: 'pgcd(48, 18) vaut :', options: ['3', '6', '9', '12'], correctIndex: 1, explanation: '48 = 18*2 + 12 ; 18 = 12*1 + 6 ; 12 = 6*2 + 0. Le PGCD est 6.' },
                    { question: 'Le theoreme de Bezout affirme que pgcd(a,b) = 1 equivaut a :', options: ['a et b sont pairs', 'Il existe u, v tels que a*u + b*v = 1', 'a divise b', 'a + b est premier'], correctIndex: 1, explanation: 'Bezout : a et b premiers entre eux ssi on peut trouver u, v entiers avec a*u + b*v = 1.' },
                    { question: '17 est un nombre premier car :', options: ['17 est impair', '17 < 20', '17 n\'a que 1 et 17 comme diviseurs', '1 + 7 = 8'], correctIndex: 2, explanation: 'Un nombre premier n\'a exactement que deux diviseurs positifs : 1 et lui-meme.' },
                    { question: '2^4 modulo 5 vaut :', options: ['0', '1', '2', '3'], correctIndex: 1, explanation: '2^4 = 16 = 5*3 + 1, donc 2^4 = 1 [5]. (On retrouve le petit theoreme de Fermat : 2^(5-1) = 1 [5].)' },
                    { question: 'Le lemme de Gauss dit que si a | bc et pgcd(a,b) = 1, alors :', options: ['a | b', 'a | c', 'b | c', 'c | a'], correctIndex: 1, explanation: 'Si a divise b*c et a est premier avec b, alors a divise c.' },
                    { question: 'La decomposition en facteurs premiers de 60 est :', options: ['2 * 30', '2^2 * 3 * 5', '4 * 15', '6 * 10'], correctIndex: 1, explanation: '60 = 4 * 15 = 2^2 * 3 * 5. C\'est la decomposition unique en facteurs premiers.' },
                    { question: '123 est divisible par 3 car :', options: ['123 est impair', '123 > 100', '1 + 2 + 3 = 6 est divisible par 3', '123/3 = 40'], correctIndex: 2, explanation: 'Critere de divisibilite par 3 : la somme des chiffres (1+2+3 = 6) est divisible par 3. Et 123/3 = 41.' },
                    { question: 'Si a = 3 [7] et b = 5 [7], alors a*b = :', options: ['15 [7]', '1 [7]', '8 [7]', '2 [7]'], correctIndex: 1, explanation: 'a*b = 3*5 = 15 [7]. Or 15 = 7*2 + 1, donc a*b = 1 [7].' },
                    { question: 'Le petit theoreme de Fermat : si p premier et p ne divise pas a, alors :', options: ['a^p = 0 [p]', 'a^(p-1) = 1 [p]', 'a^(p+1) = 1 [p]', 'a^p = p [a]'], correctIndex: 1, explanation: 'Le petit theoreme de Fermat : a^(p-1) = 1 modulo p, si p est premier et p ne divise pas a.' },
                    { question: 'pgcd(a, b) = pgcd(b, r) ou r est :', options: ['Le quotient de a par b', 'Le reste de la division de a par b', 'a - b', 'a * b'], correctIndex: 1, explanation: 'C\'est le principe de l\'algorithme d\'Euclide : on remplace (a, b) par (b, r) ou r = a mod b.' }
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
                    + '<li><strong>Principe additif</strong> : si A et B sont deux ensembles disjoints, |A union B| = |A| + |B|. On additionne quand il y a un choix "ou"</li>'
                    + '<li><strong>Principe multiplicatif</strong> : si une action se decompose en etapes successives independantes, on multiplie le nombre de choix a chaque etape</li>'
                    + '<li><strong>Complement</strong> : pour compter les elements ne verifiant pas une propriete, on calcule : total - ceux qui la verifient</li>'
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
                    { question: 'Enoncer le principe multiplicatif.', answer: 'Si une action se decompose en etapes successives et independantes avec n1 choix, puis n2 choix, ..., alors le nombre total de possibilites est n1 * n2 * ... Ex : 3 entrees et 4 plats donnent 3*4 = 12 menus.' },
                    { question: 'Que vaut n! (factorielle n) ?', answer: 'n! = n * (n-1) * (n-2) * ... * 2 * 1. Convention : 0! = 1. Ex : 5! = 5*4*3*2*1 = 120.' },
                    { question: 'Quelle est la formule des arrangements A(n, k) ?', answer: 'A(n, k) = n! / (n-k)!. C\'est le nombre de facons de choisir et ordonner k elements parmi n. Ex : A(5,2) = 5!/3! = 5*4 = 20.' },
                    { question: 'Quelle est la formule des combinaisons C(n, k) ?', answer: 'C(n, k) = n! / (k! * (n-k)!). C\'est le nombre de facons de choisir k elements parmi n sans tenir compte de l\'ordre. Ex : C(5,2) = 10.' },
                    { question: 'Quelle est la relation entre A(n, k) et C(n, k) ?', answer: 'A(n, k) = k! * C(n, k). L\'arrangement compte l\'ordre, la combinaison non. Donc A(n,k) est k! fois plus grand que C(n,k).' },
                    { question: 'Que vaut C(n, 0) et C(n, n) ?', answer: 'C(n, 0) = C(n, n) = 1. Il n\'y a qu\'une seule facon de choisir 0 element ou tous les elements.' },
                    { question: 'Enoncer la propriete de symetrie des combinaisons.', answer: 'C(n, k) = C(n, n-k). Choisir k elements parmi n revient a choisir les n-k elements qu\'on ne prend pas. Ex : C(10, 3) = C(10, 7) = 120.' },
                    { question: 'Enoncer la relation de Pascal.', answer: 'C(n, k) = C(n-1, k-1) + C(n-1, k). Chaque element est soit choisi (C(n-1,k-1)) soit non choisi (C(n-1,k)). C\'est la base du triangle de Pascal.' },
                    { question: 'Enoncer la formule du binome de Newton.', answer: '(a + b)^n = somme pour k = 0 a n de C(n,k) * a^(n-k) * b^k. Ex : (a+b)^2 = a^2 + 2ab + b^2 ; (a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3.' },
                    { question: 'Que vaut la somme C(n,0) + C(n,1) + ... + C(n,n) ?', answer: 'C(n,0) + C(n,1) + ... + C(n,n) = 2^n. On l\'obtient en posant a = b = 1 dans le binome de Newton : (1+1)^n = 2^n.' },
                    { question: 'Calculer C(6, 2).', answer: 'C(6, 2) = 6! / (2! * 4!) = (6*5) / (2*1) = 30/2 = 15.' },
                    { question: 'Calculer C(10, 3).', answer: 'C(10, 3) = 10! / (3! * 7!) = (10*9*8) / (3*2*1) = 720/6 = 120.' },
                    { question: 'De combien de facons peut-on former un comite de 3 personnes parmi 8 ?', answer: 'L\'ordre ne compte pas, c\'est une combinaison : C(8, 3) = 8! / (3! * 5!) = (8*7*6) / (3*2*1) = 336/6 = 56 comites.' },
                    { question: 'Developper (x + 1)^4 avec le binome de Newton.', answer: '(x+1)^4 = C(4,0)*x^4 + C(4,1)*x^3 + C(4,2)*x^2 + C(4,3)*x + C(4,4) = x^4 + 4x^3 + 6x^2 + 4x + 1.' },
                    { question: 'Enoncer le principe additif.', answer: 'Si A et B sont deux ensembles disjoints (sans element commun), alors |A union B| = |A| + |B|. On additionne quand les situations sont mutuellement exclusives ("ou").' }
                ],
                quiz: [
                    { question: '5! vaut :', options: ['25', '120', '60', '720'], correctIndex: 1, explanation: '5! = 5*4*3*2*1 = 120.' },
                    { question: 'C(6, 2) vaut :', options: ['12', '15', '30', '36'], correctIndex: 1, explanation: 'C(6,2) = 6! / (2! * 4!) = (6*5)/(2*1) = 15.' },
                    { question: 'A(4, 2) vaut :', options: ['6', '8', '12', '24'], correctIndex: 2, explanation: 'A(4,2) = 4!/(4-2)! = 4!/2! = (4*3*2*1)/(2*1) = 12.' },
                    { question: 'C(n, k) = C(n, n-k) est la propriete de :', options: ['Transitivite', 'Commutativite', 'Symetrie', 'Associativite'], correctIndex: 2, explanation: 'C\'est la propriete de symetrie des coefficients binomiaux.' },
                    { question: 'Somme de C(5,0) + C(5,1) + C(5,2) + C(5,3) + C(5,4) + C(5,5) = :', options: ['25', '32', '16', '64'], correctIndex: 1, explanation: 'La somme de tous les C(n,k) pour k de 0 a n vaut 2^n. Ici 2^5 = 32.' },
                    { question: 'Le coefficient de x^2 dans (x + 1)^5 est :', options: ['5', '10', '20', '1'], correctIndex: 1, explanation: 'Par le binome, le coefficient de x^2 est C(5, 2) = 10.' },
                    { question: 'Le nombre de permutations de 4 elements est :', options: ['4', '12', '16', '24'], correctIndex: 3, explanation: '4! = 4*3*2*1 = 24 permutations.' },
                    { question: 'La relation de Pascal est : C(n, k) = :', options: ['C(n-1, k-1) + C(n-1, k)', 'C(n-1, k-1) * C(n-1, k)', 'C(n, k-1) + C(n, k+1)', 'n * C(n-1, k)'], correctIndex: 0, explanation: 'C(n,k) = C(n-1,k-1) + C(n-1,k), c\'est la relation de Pascal qui genere le triangle de Pascal.' },
                    { question: 'On choisit 4 cartes parmi 52 (sans ordre). Le nombre de mains possibles est :', options: ['C(52, 4) = 270 725', 'A(52, 4) = 6 497 400', '52^4', '52 * 4'], correctIndex: 0, explanation: 'L\'ordre ne compte pas, c\'est C(52, 4) = 52!/(4!*48!) = 270 725.' },
                    { question: '0! vaut :', options: ['0', '1', 'indetermine', '-1'], correctIndex: 1, explanation: 'Par convention, 0! = 1. C\'est necessaire pour que les formules de combinaisons soient coherentes (C(n,0) = 1).' }
                ]
            }
        ]
    });
})();
