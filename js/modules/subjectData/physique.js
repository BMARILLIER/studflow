// physique.js — Donnees Physique-Chimie (8 sections)
(function() {
    if (!window.StudFlow || !window.StudFlow.subjects) return;

    window.StudFlow.subjects.register({
        id: 'physique',
        name: 'Physique-Chimie',
        icon: '\u269B\uFE0F',
        color: 'hot',
        sections: [
            {
                id: 'mecanique',
                title: 'Mecanique newtonienne',
                icon: '\uD83D\uDE80',
                content: '<h3>Lois de Newton et forces</h3>'
                    + '<ul>'
                    + '<li><strong>1ere loi (inertie)</strong> : dans un referentiel galileen, un corps isole ou pseudo-isole persevere dans son etat de repos ou de mouvement rectiligne uniforme</li>'
                    + '<li><strong>2eme loi (PFD)</strong> : somme des forces = m * a (Principe Fondamental de la Dynamique). L\'acceleration est proportionnelle a la force nette et inversement proportionnelle a la masse</li>'
                    + '<li><strong>3eme loi (action-reaction)</strong> : si A exerce une force F(A/B) sur B, alors B exerce sur A une force F(B/A) = -F(A/B), de meme droite d\'action</li>'
                    + '<li><strong>Forces courantes</strong> : poids P = m*g (g = 9,81 m/s^2), reaction normale N, tension T, frottements f</li>'
                    + '</ul>'
                    + '<h3>Chute libre et projectiles</h3>'
                    + '<ul>'
                    + '<li><strong>Chute libre verticale</strong> : a = g (vers le bas), v(t) = g*t + v0, y(t) = (1/2)*g*t^2 + v0*t + y0</li>'
                    + '<li><strong>Mouvement parabolique</strong> : composante horizontale uniforme (vx = cte), composante verticale uniformement acceleree (ay = g)</li>'
                    + '<li><strong>Portee</strong> : distance horizontale maximale pour un angle de lancement de 45 degres (sans frottements)</li>'
                    + '</ul>'
                    + '<h3>Mouvement circulaire et energie mecanique</h3>'
                    + '<ul>'
                    + '<li><strong>Mouvement circulaire uniforme</strong> : acceleration centripete a = v^2 / R dirigee vers le centre, vitesse tangentielle v = R * omega</li>'
                    + '<li><strong>Energie cinetique</strong> : Ec = (1/2)*m*v^2 (en joules)</li>'
                    + '<li><strong>Energie potentielle de pesanteur</strong> : Ep = m*g*h (reference au choix)</li>'
                    + '<li><strong>Energie mecanique</strong> : Em = Ec + Ep. Conservee si les forces non conservatives ne travaillent pas</li>'
                    + '<li><strong>Theoreme de l\'energie cinetique</strong> : Delta(Ec) = somme des travaux des forces</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'C\'est quoi la 1ere loi de Newton (inertie) ?', answer: 'Un objet qui ne subit aucune force reste comme il est : s\'il est arrete, il reste arrete. S\'il bouge, il continue en ligne droite a la meme vitesse. En gros : sans force, rien ne change. Exemple : dans l\'espace (pas de frottement), un objet lance continue a avancer pour toujours. Mots difficiles : "inertie" = tendance d\'un objet a ne pas changer d\'etat. "referentiel galileen" = un point de vue ou cette loi marche (ex : le sol terrestre).' },
                    { question: 'C\'est quoi la 2eme loi de Newton (F = m*a) ?', answer: 'Formule : somme des forces = masse x acceleration. En gros : plus tu pousses fort, plus ca accelere. Plus c\'est lourd, moins ca accelere. Exemple : pousser un caddie vide, ca va vite. Pousser un caddie plein, c\'est plus dur. Meme force, mais masse differente. Mots difficiles : "acceleration" = changement de vitesse. "PFD" = Principe Fondamental de la Dynamique (c\'est juste le nom de cette loi).' },
                    { question: 'C\'est quoi la 3eme loi de Newton (action-reaction) ?', answer: 'Si tu pousses un mur, le mur te pousse aussi avec la meme force, mais dans l\'autre sens. Toute force a une force egale en retour. En gros : quand A pousse B, B pousse A exactement pareil mais a l\'envers. Exemple : quand tu marches, ton pied pousse le sol vers l\'arriere et le sol te pousse vers l\'avant. C\'est pour ca que tu avances.' },
                    { question: 'C\'est quoi la formule du poids ?', answer: 'P = m x g. P = poids (en newtons). m = masse (en kg). g = 9,81 (c\'est la force de gravite sur Terre). En gros : le poids c\'est la force avec laquelle la Terre t\'attire vers le bas. Exemple : une personne de 60 kg a un poids de 60 x 9,81 = environ 589 newtons. Mots difficiles : "newton" = unite de force (symbole N). "pesanteur" = la force de gravite terrestre.' },
                    { question: 'Chute libre : quelles formules ?', answer: 'Vitesse : v = g x t (la vitesse augmente avec le temps). Position : y = (1/2) x g x t^2 (la distance augmente de plus en plus vite). En gros : un objet qui tombe accelere. Apres 1s il va a 10 m/s, apres 2s a 20 m/s. Exemple : tu laches une balle du 3eme etage. Elle va de plus en plus vite jusqu\'au sol. C\'est la gravite qui l\'accelere.' },
                    { question: 'C\'est quoi l\'energie cinetique ?', answer: 'Formule : Ec = (1/2) x m x v^2. C\'est l\'energie d\'un objet PARCE QU\'IL BOUGE. En gros : plus c\'est lourd et rapide, plus il y a d\'energie. Exemple : une voiture a 130 km/h a BEAUCOUP plus d\'energie qu\'a 50 km/h. C\'est pour ca qu\'un accident a haute vitesse est plus grave. Mots difficiles : "cinetique" = qui concerne le mouvement (du grec "kinesis" = mouvement).' },
                    { question: 'C\'est quoi l\'energie potentielle ?', answer: 'Formule : Ep = m x g x h. C\'est l\'energie d\'un objet PARCE QU\'IL EST EN HAUTEUR. En gros : plus c\'est haut, plus il y a d\'energie stockee. Exemple : un livre sur une etagere a de l\'energie potentielle. S\'il tombe, cette energie se transforme en mouvement (energie cinetique). Mots difficiles : "potentielle" = qui est stockee, en attente d\'etre utilisee. "pesanteur" = la gravite terrestre.' },
                    { question: 'C\'est quoi l\'energie mecanique ?', answer: 'Formule : Em = Ec + Ep (mouvement + hauteur). En gros : c\'est le total de l\'energie de mouvement + l\'energie de hauteur. Si rien ne frotte, ce total ne change JAMAIS. Exemple : une balle lancee en l\'air. Elle monte (Ec diminue, Ep augmente). Elle redescend (Ep diminue, Ec augmente). Le total reste le meme. Mots difficiles : "conservee" = qui ne change pas. "forces conservatives" = forces qui ne font pas perdre d\'energie (comme le poids).' },
                    { question: 'C\'est quoi l\'acceleration centripete ?', answer: 'Formule : a = v^2 / R. C\'est l\'acceleration qui tire un objet vers le CENTRE quand il tourne en rond. En gros : quand tu tournes en voiture, tu sens une force qui te pousse vers l\'exterieur. L\'acceleration centripete est la force inverse, celle qui te MAINTIENT sur le cercle. Exemple : un manege qui tourne. Mots difficiles : "centripete" = qui va vers le centre (du latin "centrum" + "petere" = chercher le centre).' },
                    { question: 'C\'est quoi un referentiel galileen ?', answer: 'C\'est un endroit d\'observation ou les lois de Newton marchent correctement. En gros : si tu fais une experience les pieds sur le sol, les lois de Newton marchent. Si tu fais la meme experience dans un bus qui freine, ca ne marche plus pareil (tout glisse). Le sol = referentiel galileen. Le bus qui freine = non galileen. Mots difficiles : "referentiel" = le point de vue depuis lequel tu observes le mouvement.' },
                    { question: 'C\'est quoi le theoreme de l\'energie cinetique ?', answer: 'La variation d\'energie cinetique = la somme de tous les travaux des forces. En gros : si des forces poussent un objet, il accelere (son energie cinetique augmente). Si des forces le freinent, il ralentit (son energie cinetique diminue). Exemple : tu pousses un carton sur le sol. La force de poussee lui donne de l\'energie cinetique. Les frottements lui en enlevent.' },
                    { question: 'C\'est quoi la relation v = R x omega ?', answer: 'v = R x omega. v = vitesse (en m/s). R = rayon du cercle (en m). omega = vitesse de rotation (en rad/s). En gros : plus le cercle est grand et plus ca tourne vite, plus la vitesse est elevee. Exemple : sur un manege, les chevaux du bord exterieur vont plus vite que ceux du centre, parce que R est plus grand.' },
                    { question: 'Comment calculer le travail d\'une force ?', answer: 'Formule : W = F x d x cos(angle). W = travail (en joules). F = force. d = distance. angle = angle entre la force et le deplacement. En gros : le travail c\'est "force x distance" mais seulement la partie de la force qui va dans le sens du deplacement. Exemple : tirer une valise. Si tu tires en biais, seule la partie horizontale de ta force fait avancer la valise.' },
                    { question: 'C\'est quoi le lien entre force et energie potentielle ?', answer: 'La force pousse TOUJOURS vers l\'endroit ou l\'energie potentielle est plus basse. En gros : une balle roule toujours vers le bas d\'une pente. La pente = l\'energie potentielle qui diminue. La force = ce qui fait rouler la balle. Formule : F = -dEp/dx (la force est l\'oppose de la pente d\'energie).' },
                    { question: 'Comment trouver la trajectoire d\'un projectile ?', answer: 'Un projectile (balle, ballon) suit une PARABOLE. Horizontalement : il avance a vitesse constante (pas de force). Verticalement : il accelere vers le bas a cause de la gravite. En gros : combine les deux et tu obtiens une courbe en cloche. Exemple : un ballon de foot lance en l\'air fait un arc de cercle — c\'est une parabole. L\'angle ideal pour aller le plus loin = 45 degres.' }
                ],
                quiz: [
                    { question: 'La deuxieme loi de Newton s\'ecrit :', options: ['F = m*v', 'F = m*a', 'F = m*g', 'F = m*v^2'], correctIndex: 1, explanation: 'Le PFD s\'ecrit somme(F) = m*a. La force resultante est egale au produit de la masse par l\'acceleration.' },
                    { question: 'En chute libre sans vitesse initiale, la distance parcourue en t secondes est :', options: ['g*t', '(1/2)*g*t^2', 'g*t^2', '(1/2)*g*t'], correctIndex: 1, explanation: 'y(t) = (1/2)*g*t^2. La distance est proportionnelle au carre du temps.' },
                    { question: 'L\'energie cinetique d\'un objet de 2 kg a 3 m/s vaut :', options: ['6 J', '9 J', '18 J', '3 J'], correctIndex: 1, explanation: 'Ec = (1/2)*m*v^2 = (1/2)*2*9 = 9 J.' },
                    { question: 'L\'acceleration centripete dans un mouvement circulaire uniforme est :', options: ['Tangente au cercle', 'Dirigee vers le centre', 'Nulle', 'Dirigee vers l\'exterieur'], correctIndex: 1, explanation: 'L\'acceleration centripete a = v^2/R est toujours dirigee vers le centre de la trajectoire circulaire.' },
                    { question: 'L\'energie mecanique est conservee quand :', options: ['Il y a des frottements', 'Seules des forces conservatives travaillent', 'La vitesse est constante', 'L\'acceleration est nulle'], correctIndex: 1, explanation: 'L\'energie mecanique Em = Ec + Ep est conservee en l\'absence de forces non conservatives (frottements, forces dissipatives).' },
                    { question: 'La troisieme loi de Newton stipule que :', options: ['F = m*a', 'Les forces vont par paires egales et opposees', 'Un corps au repos reste au repos', 'L\'energie se conserve'], correctIndex: 1, explanation: 'Principe des actions reciproques : F(A/B) = -F(B/A). Toute action entraine une reaction egale et opposee.' },
                    { question: 'Un objet de 5 kg a une altitude de 10 m a une energie potentielle de (g = 10 m/s^2) :', options: ['50 J', '500 J', '100 J', '250 J'], correctIndex: 1, explanation: 'Ep = m*g*h = 5 * 10 * 10 = 500 J.' },
                    { question: 'Le poids d\'un objet de 80 kg sur Terre (g = 9,8 m/s^2) vaut environ :', options: ['80 N', '784 N', '800 N', '8 N'], correctIndex: 1, explanation: 'P = m*g = 80 * 9,8 = 784 N.' },
                    { question: 'Dans un mouvement circulaire uniforme, la vitesse tangentielle :', options: ['Change de direction en permanence', 'Est constante en direction', 'Augmente avec le temps', 'Est nulle'], correctIndex: 0, explanation: 'La norme de la vitesse est constante mais sa direction change en permanence (tangente au cercle a chaque instant).' },
                    { question: 'Le theoreme de l\'energie cinetique relie :', options: ['Force et vitesse', 'Variation d\'Ec et somme des travaux des forces', 'Masse et acceleration', 'Ep et Ec uniquement'], correctIndex: 1, explanation: 'Delta(Ec) = somme des travaux de toutes les forces appliquees entre les deux positions.' },
                    { question: 'Un objet de 4 kg est lance verticalement vers le haut a 10 m/s. Sa hauteur maximale atteinte vaut environ (g = 10 m/s^2) :', options: ['10 m', '5 m', '20 m', '2,5 m'], correctIndex: 1, explanation: 'A la hauteur maximale, toute l\'Ec est convertie en Ep : (1/2)*m*v^2 = m*g*h, donc h = v^2/(2*g) = 100/20 = 5 m.' },
                    { question: 'La pression exercee par un fluide au repos a une profondeur h est donnee par :', options: ['P = rho * h', 'P = rho * g * h + P_atm', 'P = m * g * h', 'P = g * h'], correctIndex: 1, explanation: 'La pression dans un fluide au repos a la profondeur h est P = P_atm + rho * g * h, ou rho est la masse volumique du fluide, g l\'acceleration de la pesanteur et P_atm la pression atmospherique en surface.' }
                ]
            },
            {
                id: 'energie',
                title: 'Energie: conversions et transferts',
                icon: '\u26A1',
                content: '<h3>Formes d\'energie et conservation</h3>'
                    + '<ul>'
                    + '<li><strong>Formes d\'energie</strong> : cinetique (Ec = (1/2)mv^2), potentielle (Ep), thermique (Eth), electrique, chimique, nucleaire, rayonnante</li>'
                    + '<li><strong>Premier principe de la thermodynamique</strong> : Delta(U) = W + Q. La variation d\'energie interne est egale a la somme du travail et du transfert thermique recus</li>'
                    + '<li><strong>Conservation de l\'energie</strong> : l\'energie totale d\'un systeme isole est constante. Elle peut se transformer mais ne se cree ni ne se detruit</li>'
                    + '</ul>'
                    + '<h3>Transferts thermiques</h3>'
                    + '<ul>'
                    + '<li><strong>Conduction</strong> : transfert par contact entre milieux materiels, sans deplacement de matiere (ex : barre metallique chauffee)</li>'
                    + '<li><strong>Convection</strong> : transfert par deplacement de matiere (ex : courants dans un fluide chauffe)</li>'
                    + '<li><strong>Rayonnement</strong> : transfert par ondes electromagnetiques, sans support materiel (ex : rayonnement solaire)</li>'
                    + '<li><strong>Flux thermique</strong> : Phi = Q / Delta(t), en watts (W). Quantite d\'energie transferee par unite de temps</li>'
                    + '<li><strong>Capacite thermique</strong> : Q = m * c * Delta(T), ou c est la capacite thermique massique (J/(kg.K))</li>'
                    + '</ul>'
                    + '<h3>Rendement et bilan energetique</h3>'
                    + '<ul>'
                    + '<li><strong>Rendement</strong> : eta = E_utile / E_absorbee. Toujours compris entre 0 et 1 (0% et 100%)</li>'
                    + '<li><strong>Chaine energetique</strong> : diagramme representant les conversions et transferts d\'energie dans un systeme</li>'
                    + '<li><strong>Sources d\'energie</strong> : renouvelables (solaire, eolien, hydraulique) et non renouvelables (fossiles, nucleaire)</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'C\'est quoi le 1er principe de la thermodynamique ?', answer: 'Formule : Delta(U) = W + Q. En gros : l\'energie d\'un systeme change quand on lui donne du travail (W) ou de la chaleur (Q). Exemple : tu chauffes de l\'eau (Q = chaleur) et tu la remues (W = travail). L\'eau gagne de l\'energie. Mots difficiles : "thermodynamique" = la science de la chaleur et de l\'energie. "energie interne" = l\'energie cachee dans la matiere (vibrations des atomes).' },
                    { question: 'Quels sont les 3 types de transfert de chaleur ?', answer: '1) CONDUCTION = la chaleur passe par CONTACT. Ex : toucher une poele chaude. 2) CONVECTION = la chaleur se deplace avec un liquide ou un gaz. Ex : l\'eau chaude qui monte dans une casserole. 3) RAYONNEMENT = la chaleur voyage par ondes (sans toucher). Ex : le soleil qui te rechauffe. En gros : contact, deplacement de matiere, ou ondes.' },
                    { question: 'C\'est quoi la formule Q = m x c x Delta(T) ?', answer: 'Q = chaleur. m = masse. c = capacite thermique (un nombre qui depend du materiau). Delta(T) = changement de temperature. En gros : pour chauffer quelque chose, il faut de l\'energie. Plus c\'est lourd et plus tu veux chauffer fort, plus il faut d\'energie. Exemple : chauffer 1L d\'eau de 20 a 100 degres demande beaucoup d\'energie car l\'eau a un c tres eleve (4180).' },
                    { question: 'C\'est quoi le rendement ?', answer: 'Formule : rendement = energie utile / energie totale. En gros : c\'est le pourcentage d\'energie qui sert VRAIMENT. Le reste est perdu (en chaleur, frottements...). Exemple : une ampoule classique a un rendement de 5%. Sur 100 unites d\'electricite, seulement 5 deviennent de la lumiere. Les 95 autres deviennent de la chaleur perdue. Un rendement de 100% est impossible.' },
                    { question: 'C\'est quoi un flux thermique ?', answer: 'Formule : Phi = Q / t. En gros : c\'est la VITESSE a laquelle la chaleur se deplace. Unite = watt (W). Exemple : un radiateur de 1000 W envoie 1000 joules de chaleur chaque seconde. Plus le flux est grand, plus ca chauffe vite. Mots difficiles : "flux" = quantite qui passe par unite de temps (comme un debit d\'eau).' },
                    { question: 'C\'est quoi la conservation de l\'energie ?', answer: 'L\'energie ne se CREE pas. L\'energie ne se DETRUIT pas. Elle se TRANSFORME. En gros : l\'energie change de forme mais le total reste toujours le meme. Exemple : dans une voiture, l\'essence (energie chimique) devient mouvement (energie cinetique) + chaleur (energie thermique). Rien n\'est perdu, tout est transforme. C\'est LA loi la plus importante de la physique.' },
                    { question: 'C\'est quoi la capacite thermique massique ?', answer: 'C\'est le "c" dans Q = m x c x Delta(T). Ca represente a quel point un materiau est DIFFICILE a chauffer. En gros : plus c est grand, plus il faut d\'energie pour chauffer. L\'eau a un c tres eleve (4180) = elle met longtemps a chauffer et longtemps a refroidir. Le metal a un c faible = il chauffe vite et refroidit vite. C\'est pour ca qu\'une poele brule et que la mer reste tiede.' },
                    { question: 'C\'est quoi la difference entre energie et puissance ?', answer: 'Energie = la quantite TOTALE (en joules). Puissance = la VITESSE a laquelle on utilise l\'energie (en watts). Formule : Puissance = Energie / Temps. En gros : l\'energie c\'est COMBIEN, la puissance c\'est A QUELLE VITESSE. Exemple : 2 coureurs montent le meme escalier. Ils depensent la meme energie. Mais celui qui va plus vite a plus de puissance.' },
                    { question: 'Qu\'est-ce qu\'une chaine energetique ?', answer: 'Un diagramme qui represente les conversions d\'energie dans un systeme : on y indique les reservoirs, les convertisseurs, les formes d\'energie utile et les pertes (souvent thermiques).' },
                    { question: 'Citer les principales formes d\'energie.', answer: 'Cinetique (mouvement), potentielle (position), thermique (temperature), electrique, chimique (liaisons), nucleaire (noyaux), rayonnante (photons).' },
                    { question: 'Quelle est l\'unite SI de l\'energie ?', answer: 'Le joule (J). Autres unites courantes : kilowattheure (1 kWh = 3,6 * 10^6 J), calorie (1 cal = 4,18 J), electronvolt (1 eV = 1,6 * 10^-19 J).' },
                    { question: 'Qu\'est-ce que la resistance thermique ?', answer: 'Rth = e / (lambda * S), ou e est l\'epaisseur (m), lambda la conductivite thermique (W/(m.K)), S la surface (m^2). Le flux thermique est Phi = Delta(T) / Rth.' },
                    { question: 'Quelle est la formule de la puissance electrique ?', answer: 'P = U * I (en watts), ou U est la tension (V) et I l\'intensite (A). Aussi : P = R*I^2 = U^2/R pour un conducteur ohmique.' },
                    { question: 'Comment convertir des kWh en joules ?', answer: '1 kWh = 1000 W * 3600 s = 3,6 * 10^6 J = 3,6 MJ.' },
                    { question: 'Pourquoi le rendement est-il toujours inferieur a 1 ?', answer: 'A cause des pertes energetiques, principalement sous forme de chaleur (frottements, effet Joule). Le deuxieme principe de la thermodynamique implique qu\'une conversion totale en travail est impossible.' }
                ],
                quiz: [
                    { question: 'Le premier principe de la thermodynamique s\'ecrit :', options: ['Delta(U) = W + Q', 'Delta(U) = W - Q', 'Delta(U) = W * Q', 'Delta(U) = Q / W'], correctIndex: 0, explanation: 'Delta(U) = W + Q : la variation d\'energie interne est la somme du travail et de la chaleur recus.' },
                    { question: 'Le transfert thermique par rayonnement :', options: ['Necessite un milieu materiel', 'Ne necessite pas de milieu materiel', 'N\'existe que dans les solides', 'Est toujours negligeable'], correctIndex: 1, explanation: 'Le rayonnement se propage par ondes electromagnetiques et ne necessite pas de support materiel (il traverse le vide).' },
                    { question: 'Pour chauffer 2 kg d\'eau de 20 degres C (c = 4180 J/(kg.K)), l\'energie necessaire est :', options: ['83 600 J', '167 200 J', '8 360 J', '41 800 J'], correctIndex: 1, explanation: 'Q = m*c*Delta(T) = 2 * 4180 * 20 = 167 200 J.' },
                    { question: 'Un moteur absorbe 1000 J et fournit 350 J de travail utile. Son rendement est :', options: ['35%', '65%', '3,5%', '100%'], correctIndex: 0, explanation: 'eta = E_utile / E_absorbee = 350 / 1000 = 0,35 = 35%.' },
                    { question: 'La puissance est definie par :', options: ['P = E * t', 'P = E / t', 'P = E + t', 'P = E - t'], correctIndex: 1, explanation: 'La puissance est le rapport entre l\'energie et le temps : P = E / t, en watts (W).' },
                    { question: '1 kWh correspond a :', options: ['3600 J', '3,6 * 10^6 J', '1000 J', '3,6 * 10^3 J'], correctIndex: 1, explanation: '1 kWh = 1000 W * 3600 s = 3 600 000 J = 3,6 * 10^6 J.' },
                    { question: 'Le transfert thermique par convection concerne :', options: ['Les solides uniquement', 'Les fluides (liquides et gaz)', 'Le vide', 'Les ondes electromagnetiques'], correctIndex: 1, explanation: 'La convection implique un deplacement de matiere et ne concerne donc que les fluides.' },
                    { question: 'L\'unite SI de la capacite thermique massique est :', options: ['J/kg', 'J/(kg.K)', 'W/(m.K)', 'J/K'], correctIndex: 1, explanation: 'La capacite thermique massique c s\'exprime en joules par kilogramme par kelvin : J/(kg.K).' },
                    { question: 'L\'energie totale d\'un systeme isole :', options: ['Augmente toujours', 'Diminue toujours', 'Reste constante', 'Depend de la temperature'], correctIndex: 2, explanation: 'Principe de conservation de l\'energie : dans un systeme isole, l\'energie totale est constante.' },
                    { question: 'Le flux thermique Phi s\'exprime en :', options: ['Joules', 'Watts', 'Kelvins', 'Joules par kelvin'], correctIndex: 1, explanation: 'Phi = Q / Delta(t) est en watts (W), car c\'est une puissance thermique (energie par unite de temps).' },
                    { question: 'Un systeme recoit un travail W = 200 J et cede une chaleur Q = -50 J. La variation de son energie interne est :', options: ['250 J', '150 J', '-150 J', '100 J'], correctIndex: 1, explanation: 'Delta(U) = W + Q = 200 + (-50) = 150 J. Le systeme recoit du travail (W > 0) et cede de la chaleur (Q < 0).' },
                    { question: 'La resistance thermique d\'une paroi augmente quand :', options: ['La conductivite thermique augmente', 'L\'epaisseur de la paroi augmente', 'La surface de la paroi augmente', 'La temperature augmente'], correctIndex: 1, explanation: 'Rth = e / (lambda * S). La resistance thermique augmente avec l\'epaisseur e et diminue avec la conductivite lambda et la surface S. Un bon isolant a une grande Rth.' }
                ]
            },
            {
                id: 'ondes',
                title: 'Ondes mecaniques et lumineuses',
                icon: '\uD83C\uDF0A',
                content: '<h3>Caracteristiques des ondes</h3>'
                    + '<ul>'
                    + '<li><strong>Onde mecanique</strong> : perturbation qui se propage dans un milieu materiel sans transport de matiere (son, vague, seisme)</li>'
                    + '<li><strong>Onde electromagnetique</strong> : se propage dans le vide et la matiere (lumiere, radio, rayons X)</li>'
                    + '<li><strong>Grandeurs fondamentales</strong> : frequence f (Hz), periode T = 1/f (s), longueur d\'onde lambda = v*T = v/f (m), celerite v (m/s)</li>'
                    + '<li><strong>Ondes transversales</strong> : perturbation perpendiculaire a la propagation (corde, lumiere). <strong>Ondes longitudinales</strong> : perturbation parallele (son)</li>'
                    + '</ul>'
                    + '<h3>Diffraction et interferences</h3>'
                    + '<ul>'
                    + '<li><strong>Diffraction</strong> : deviation d\'une onde quand elle rencontre un obstacle ou une ouverture de taille comparable a lambda. Angle theta = lambda / a</li>'
                    + '<li><strong>Interferences constructives</strong> : quand la difference de marche delta = k * lambda (k entier), les ondes s\'ajoutent</li>'
                    + '<li><strong>Interferences destructives</strong> : quand delta = (k + 1/2) * lambda, les ondes s\'annulent</li>'
                    + '<li><strong>Fentes de Young</strong> : interfrange i = lambda * D / a, ou D est la distance fentes-ecran et a l\'ecart entre les fentes</li>'
                    + '</ul>'
                    + '<h3>Effet Doppler et applications</h3>'
                    + '<ul>'
                    + '<li><strong>Effet Doppler</strong> : modification de la frequence percue quand source et observateur sont en mouvement relatif</li>'
                    + '<li><strong>Source qui s\'approche</strong> : frequence percue augmente (f\' > f). Source qui s\'eloigne : f\' < f</li>'
                    + '<li><strong>Formule</strong> : f\' = f * v / (v - vs) (source se rapprochant, vs = vitesse de la source, v = celerite de l\'onde)</li>'
                    + '<li><strong>Applications</strong> : radar de vitesse, echographie Doppler, decalage vers le rouge en astrophysique (expansion de l\'univers)</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'Quelle est la relation entre frequence, periode et longueur d\'onde ?', answer: 'T = 1/f et lambda = v * T = v / f. La frequence f est en Hz, la periode T en s, la longueur d\'onde lambda en m, la celerite v en m/s.' },
                    { question: 'Qu\'est-ce que la diffraction ?', answer: 'Phenomene de deviation d\'une onde lorsqu\'elle rencontre un obstacle ou une ouverture dont la taille est du meme ordre de grandeur que sa longueur d\'onde. L\'angle de diffraction est theta = lambda / a.' },
                    { question: 'Quelle est la condition d\'interferences constructives ?', answer: 'La difference de marche delta doit etre un multiple entier de la longueur d\'onde : delta = k * lambda (k entier). Les ondes arrivent en phase et s\'ajoutent.' },
                    { question: 'Quelle est la condition d\'interferences destructives ?', answer: 'delta = (k + 1/2) * lambda (k entier). Les ondes arrivent en opposition de phase et s\'annulent.' },
                    { question: 'Quelle est la formule de l\'interfrange des fentes de Young ?', answer: 'i = lambda * D / a, ou lambda est la longueur d\'onde, D la distance fentes-ecran, a l\'ecart entre les deux fentes. i est en metres.' },
                    { question: 'Qu\'est-ce que l\'effet Doppler ?', answer: 'La modification de la frequence percue d\'une onde lorsque la source et l\'observateur sont en mouvement relatif. Approche : f augmente. Eloignement : f diminue.' },
                    { question: 'Quelle est la difference entre onde transversale et onde longitudinale ?', answer: 'Transversale : la perturbation est perpendiculaire a la direction de propagation (corde, lumiere). Longitudinale : la perturbation est parallele a la propagation (son).' },
                    { question: 'Quelle est la celerite de la lumiere dans le vide ?', answer: 'c = 3,00 * 10^8 m/s (exactement 299 792 458 m/s). C\'est aussi la vitesse maximale dans l\'univers selon la relativite restreinte.' },
                    { question: 'Quelle est la celerite du son dans l\'air a 20 degres C ?', answer: 'Environ 340 m/s. Elle augmente avec la temperature et depend du milieu (plus rapide dans les solides que dans les gaz).' },
                    { question: 'Comment varie l\'angle de diffraction avec la longueur d\'onde ?', answer: 'theta = lambda / a. Plus lambda est grand (ou a petit), plus l\'angle de diffraction est grand. La diffraction est significative quand lambda est du meme ordre que a.' },
                    { question: 'Qu\'est-ce qu\'une onde monochromatique ?', answer: 'Une onde de frequence unique (une seule longueur d\'onde). Un laser emet de la lumiere quasi monochromatique. La lumiere blanche est polychromatique.' },
                    { question: 'Qu\'est-ce que la difference de marche ?', answer: 'delta = d2 - d1, la difference de distance parcourue par deux ondes issues de sources coherentes pour arriver au meme point. Elle determine le type d\'interference.' },
                    { question: 'Quel est le domaine de longueurs d\'onde de la lumiere visible ?', answer: 'De 400 nm (violet) a 800 nm (rouge) environ. En dessous : ultraviolet, rayons X, gamma. Au-dessus : infrarouge, micro-ondes, ondes radio.' },
                    { question: 'Qu\'est-ce que le decalage vers le rouge en astrophysique ?', answer: 'Un effet Doppler : les galaxies qui s\'eloignent emettent une lumiere dont la longueur d\'onde percue est plus grande (decalee vers le rouge). Cela prouve l\'expansion de l\'univers.' },
                    { question: 'Comment calculer la frequence d\'une onde connaissant lambda et v ?', answer: 'f = v / lambda. Exemple : une onde sonore de lambda = 0,5 m dans l\'air (v = 340 m/s) a une frequence f = 340/0,5 = 680 Hz.' }
                ],
                quiz: [
                    { question: 'La relation entre lambda, v et f est :', options: ['lambda = v * f', 'lambda = v / f', 'lambda = f / v', 'lambda = v + f'], correctIndex: 1, explanation: 'lambda = v / f = v * T. La longueur d\'onde est le rapport de la celerite par la frequence.' },
                    { question: 'La diffraction est significative quand :', options: ['lambda >> a', 'lambda << a', 'lambda est du meme ordre que a', 'lambda = 0'], correctIndex: 2, explanation: 'La diffraction est observable quand la longueur d\'onde est du meme ordre de grandeur que la taille de l\'obstacle ou de l\'ouverture.' },
                    { question: 'Des interferences constructives se produisent quand :', options: ['delta = (k+1/2)*lambda', 'delta = k*lambda', 'delta = 0 uniquement', 'delta = lambda/4'], correctIndex: 1, explanation: 'Les interferences sont constructives quand la difference de marche est un multiple entier de la longueur d\'onde.' },
                    { question: 'L\'effet Doppler pour une source qui s\'approche provoque :', options: ['Une diminution de la frequence', 'Une augmentation de la frequence', 'Aucun changement', 'Une augmentation de l\'amplitude'], correctIndex: 1, explanation: 'Quand la source s\'approche, les fronts d\'onde sont comprimes : la frequence percue augmente.' },
                    { question: 'La celerite de la lumiere dans le vide est :', options: ['340 m/s', '3 * 10^8 m/s', '3 * 10^6 m/s', '1500 m/s'], correctIndex: 1, explanation: 'c = 3,00 * 10^8 m/s est la vitesse de la lumiere dans le vide.' },
                    { question: 'L\'interfrange des fentes de Young augmente si :', options: ['On rapproche l\'ecran', 'On augmente l\'ecart entre les fentes', 'On augmente la longueur d\'onde', 'On diminue D'], correctIndex: 2, explanation: 'i = lambda * D / a. L\'interfrange augmente si lambda augmente, si D augmente ou si a diminue.' },
                    { question: 'Le son est une onde :', options: ['Transversale', 'Longitudinale', 'Electromagnetique', 'Stationnaire uniquement'], correctIndex: 1, explanation: 'Le son est une onde mecanique longitudinale : la perturbation (compression/dilatation) est parallele a la propagation.' },
                    { question: 'La lumiere visible a une longueur d\'onde comprise entre :', options: ['1 nm et 100 nm', '400 nm et 800 nm', '1 mm et 1 m', '100 m et 1 km'], correctIndex: 1, explanation: 'Le spectre visible s\'etend approximativement de 400 nm (violet) a 800 nm (rouge).' },
                    { question: 'L\'angle de diffraction theta par une fente de largeur a est :', options: ['theta = a / lambda', 'theta = lambda / a', 'theta = lambda * a', 'theta = a^2 / lambda'], correctIndex: 1, explanation: 'theta = lambda / a (en radians). Plus la fente est etroite par rapport a lambda, plus la diffraction est marquee.' },
                    { question: 'Deux ondes coherentes de meme amplitude interfèrent destructivement. L\'amplitude resultante est :', options: ['Doublee', 'Nulle', 'Inchangee', 'Triplee'], correctIndex: 1, explanation: 'En interference destructive, les deux ondes sont en opposition de phase et s\'annulent : l\'amplitude resultante est nulle.' },
                    { question: 'Une onde sonore de frequence 680 Hz se propage dans l\'air a 340 m/s. Sa longueur d\'onde vaut :', options: ['0,25 m', '0,5 m', '1 m', '2 m'], correctIndex: 1, explanation: 'lambda = v / f = 340 / 680 = 0,5 m. La longueur d\'onde est le rapport de la celerite par la frequence.' },
                    { question: 'Le niveau d\'intensite sonore L (en dB) est defini par :', options: ['L = 10 * log(I / I0)', 'L = 20 * log(I / I0)', 'L = I / I0', 'L = ln(I / I0)'], correctIndex: 0, explanation: 'L = 10 * log(I / I0), ou I0 = 10^-12 W/m^2 est le seuil d\'audibilite. Le logarithme est en base 10. Une augmentation de 10 dB correspond a une intensite multipliee par 10.' }
                ]
            },
            {
                id: 'optique',
                title: 'Optique',
                icon: '\uD83D\uDD2C',
                content: '<h3>Lois de Snell-Descartes</h3>'
                    + '<ul>'
                    + '<li><strong>Reflexion</strong> : le rayon reflechi est dans le plan d\'incidence, et l\'angle de reflexion egal a l\'angle d\'incidence : i_r = i_1</li>'
                    + '<li><strong>Refraction</strong> : n1 * sin(i1) = n2 * sin(i2). Le rayon refracte change de direction en passant d\'un milieu a un autre</li>'
                    + '<li><strong>Indice de refraction</strong> : n = c / v, ou c est la celerite dans le vide et v dans le milieu. n >= 1 toujours</li>'
                    + '<li><strong>Reflexion totale</strong> : quand n1 > n2, il existe un angle limite i_lim tel que sin(i_lim) = n2/n1. Au-dela, pas de refraction</li>'
                    + '</ul>'
                    + '<h3>Lentilles et formation d\'images</h3>'
                    + '<ul>'
                    + '<li><strong>Lentille convergente</strong> : distance focale f\' > 0, fait converger les rayons paralleles au foyer image F\'</li>'
                    + '<li><strong>Lentille divergente</strong> : distance focale f\' < 0, fait diverger les rayons</li>'
                    + '<li><strong>Relation de conjugaison</strong> : 1/OA\' - 1/OA = 1/f\' (formule de Descartes, grandeurs algebriques)</li>'
                    + '<li><strong>Grandissement</strong> : gamma = A\'B\' / AB = OA\' / OA</li>'
                    + '</ul>'
                    + '<h3>Spectre et dualite onde-corpuscule</h3>'
                    + '<ul>'
                    + '<li><strong>Spectre lumineux</strong> : decomposition de la lumiere par un prisme ou un reseau. Spectre continu (corps chaud), spectre de raies (emission/absorption d\'atomes)</li>'
                    + '<li><strong>Dualite onde-corpuscule</strong> : la lumiere se comporte comme une onde (diffraction, interferences) et comme un flux de particules (photons)</li>'
                    + '<li><strong>Energie d\'un photon</strong> : E = h*f = h*c/lambda, ou h = 6,63 * 10^-34 J.s (constante de Planck)</li>'
                    + '<li><strong>Longueur d\'onde de de Broglie</strong> : lambda = h / (m*v), associee a toute particule en mouvement</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'Enoncer la loi de Snell-Descartes pour la refraction.', answer: 'n1 * sin(i1) = n2 * sin(i2), ou n1 et n2 sont les indices de refraction des deux milieux, i1 l\'angle d\'incidence et i2 l\'angle de refraction (mesures par rapport a la normale).' },
                    { question: 'Qu\'est-ce que l\'indice de refraction d\'un milieu ?', answer: 'n = c / v, ou c = 3 * 10^8 m/s (vitesse de la lumiere dans le vide) et v la vitesse dans le milieu. n est toujours >= 1. Exemples : n_air = 1,00 ; n_eau = 1,33 ; n_verre = 1,5.' },
                    { question: 'Qu\'est-ce que la reflexion totale ?', answer: 'Quand la lumiere passe d\'un milieu plus refringent (n1 > n2) a un milieu moins refringent, au-dela de l\'angle limite i_lim (sin(i_lim) = n2/n1), toute la lumiere est reflechie. Principe de la fibre optique.' },
                    { question: 'Quelle est la relation de conjugaison des lentilles minces ?', answer: '1/OA\' - 1/OA = 1/f\' (formule de Descartes avec origine au centre optique O). OA et OA\' sont des grandeurs algebriques.' },
                    { question: 'Quelle est la formule du grandissement ?', answer: 'gamma = A\'B\' / AB = OA\' / OA. Si |gamma| > 1 l\'image est agrandie, si |gamma| < 1 elle est reduite. Si gamma < 0 l\'image est renversee.' },
                    { question: 'Quelle est l\'energie d\'un photon ?', answer: 'E = h * f = h * c / lambda, ou h = 6,63 * 10^-34 J.s est la constante de Planck, f la frequence (Hz), lambda la longueur d\'onde (m).' },
                    { question: 'Qu\'est-ce que la dualite onde-corpuscule ?', answer: 'La lumiere presente un double comportement : ondulatoire (diffraction, interferences) et corpusculaire (effet photoelectrique, photons). De Broglie a etendu ce concept a toute particule materielle.' },
                    { question: 'Quelle est la longueur d\'onde de de Broglie ?', answer: 'lambda = h / (m * v) = h / p, ou h est la constante de Planck, m la masse et v la vitesse de la particule, p sa quantite de mouvement.' },
                    { question: 'Comment un prisme decompose-t-il la lumiere blanche ?', answer: 'Par dispersion : l\'indice de refraction du prisme depend de la longueur d\'onde (n plus grand pour le violet que pour le rouge). Chaque couleur est deviee differemment, formant un spectre.' },
                    { question: 'Qu\'est-ce qu\'un spectre d\'emission de raies ?', answer: 'Spectre produit par un gaz a basse pression excite. Il ne contient que des raies discretes correspondant aux transitions electroniques de l\'atome. Chaque element a un spectre unique.' },
                    { question: 'Qu\'est-ce qu\'un spectre d\'absorption ?', answer: 'Spectre continu dans lequel apparaissent des raies sombres. La lumiere blanche traverse un gaz froid qui absorbe certaines longueurs d\'onde correspondant a ses transitions electroniques.' },
                    { question: 'Qu\'est-ce que la vergence d\'une lentille ?', answer: 'C = 1/f\' en dioptries (delta). f\' est la distance focale en metres. C > 0 pour une lentille convergente, C < 0 pour une divergente.' },
                    { question: 'Ou se forme l\'image d\'un objet a l\'infini par une lentille convergente ?', answer: 'Au foyer image F\'. Les rayons paralleles a l\'axe convergent en F\'. C\'est le principe de la mise au point a l\'infini.' },
                    { question: 'Comment tracer les rayons principaux pour une lentille convergente ?', answer: '1) Rayon parallele a l\'axe passe par F\' apres la lentille. 2) Rayon passant par le centre O n\'est pas devie. 3) Rayon passant par F ressort parallele a l\'axe.' },
                    { question: 'Quelle est la loi de la reflexion ?', answer: 'Le rayon reflechi est dans le plan d\'incidence, et l\'angle de reflexion est egal a l\'angle d\'incidence : i_r = i_1. Le rayon reflechi est symetrique du rayon incident par rapport a la normale.' }
                ],
                quiz: [
                    { question: 'La loi de Snell-Descartes pour la refraction s\'ecrit :', options: ['n1 * cos(i1) = n2 * cos(i2)', 'n1 * sin(i1) = n2 * sin(i2)', 'n1 / sin(i1) = n2 / sin(i2)', 'sin(i1) / sin(i2) = n1 / n2'], correctIndex: 1, explanation: 'n1 * sin(i1) = n2 * sin(i2) est la loi de Snell-Descartes pour la refraction.' },
                    { question: 'L\'indice de refraction de l\'eau vaut environ :', options: ['1,00', '1,33', '1,50', '2,42'], correctIndex: 1, explanation: 'n_eau = 1,33. Pour comparaison : n_air = 1,00 ; n_verre = 1,5 ; n_diamant = 2,42.' },
                    { question: 'L\'energie d\'un photon de frequence f vaut :', options: ['E = m*c^2', 'E = h*f', 'E = (1/2)*m*v^2', 'E = k*T'], correctIndex: 1, explanation: 'E = h*f ou E = h*c/lambda, avec h = 6,63 * 10^-34 J.s (constante de Planck).' },
                    { question: 'La reflexion totale se produit quand :', options: ['n1 < n2 et i1 > i_lim', 'n1 > n2 et i1 > i_lim', 'n1 = n2', 'i1 = 0'], correctIndex: 1, explanation: 'La reflexion totale ne peut se produire que lorsque la lumiere passe d\'un milieu plus refringent a un milieu moins refringent (n1 > n2), pour un angle superieur a l\'angle limite.' },
                    { question: 'La vergence d\'une lentille de distance focale f\' = 20 cm est :', options: ['20 dioptries', '5 dioptries', '0,2 dioptrie', '0,05 dioptrie'], correctIndex: 1, explanation: 'C = 1/f\' = 1/0,20 = 5 dioptries. Attention a convertir f\' en metres.' },
                    { question: 'Un grandissement gamma = -2 signifie :', options: ['Image 2 fois plus petite et droite', 'Image 2 fois plus grande et renversee', 'Image de meme taille et renversee', 'Image 2 fois plus grande et droite'], correctIndex: 1, explanation: 'gamma = -2 : |gamma| = 2 donc l\'image est 2 fois plus grande, et le signe negatif indique qu\'elle est renversee.' },
                    { question: 'La constante de Planck h vaut :', options: ['6,63 * 10^-34 J.s', '6,63 * 10^-23 J.s', '1,6 * 10^-19 J.s', '3 * 10^8 J.s'], correctIndex: 0, explanation: 'h = 6,63 * 10^-34 J.s est la constante de Planck, fondamentale en physique quantique.' },
                    { question: 'Un photon violet a plus d\'energie qu\'un photon rouge car :', options: ['Sa longueur d\'onde est plus grande', 'Sa frequence est plus grande', 'Sa vitesse est plus grande', 'Sa masse est plus grande'], correctIndex: 1, explanation: 'E = h*f. Le violet a une frequence plus grande (lambda plus petit), donc une energie plus grande. La vitesse de la lumiere est la meme pour toutes les couleurs dans le vide.' },
                    { question: 'La longueur d\'onde de de Broglie est :', options: ['lambda = h * m * v', 'lambda = h / (m * v)', 'lambda = m * v / h', 'lambda = h * f'], correctIndex: 1, explanation: 'lambda = h / (m*v) = h / p. Plus la particule est lourde ou rapide, plus sa longueur d\'onde associee est petite.' },
                    { question: 'Un spectre d\'absorption presente :', options: ['Des raies brillantes sur fond noir', 'Des raies sombres sur fond continu', 'Un spectre continu sans raies', 'Uniquement du rouge et du bleu'], correctIndex: 1, explanation: 'Le gaz froid absorbe certaines longueurs d\'onde de la lumiere blanche, creant des raies noires dans le spectre continu.' },
                    { question: 'Un objet place a 30 cm d\'une lentille convergente de distance focale 10 cm donne une image situee a :', options: ['7,5 cm', '15 cm', '20 cm', '30 cm'], correctIndex: 1, explanation: 'Relation de conjugaison : 1/OA\' - 1/OA = 1/f\'. Avec OA = -30 cm et f\' = 10 cm : 1/OA\' = 1/10 + 1/(-30) = 1/10 - 1/30 = 2/30 = 1/15, donc OA\' = 15 cm.' }
                ]
            },
            {
                id: 'chimie_orga',
                title: 'Chimie organique',
                icon: '\uD83E\uDDEA',
                content: '<h3>Alcanes, alcenes et groupes fonctionnels</h3>'
                    + '<ul>'
                    + '<li><strong>Alcanes</strong> : CnH(2n+2), hydrocarbures satures (liaisons simples C-C uniquement). Exemples : methane CH4, ethane C2H6, propane C3H8</li>'
                    + '<li><strong>Alcenes</strong> : CnH(2n), contiennent au moins une double liaison C=C. Exemples : ethene C2H4, propene C3H6</li>'
                    + '<li><strong>Groupes fonctionnels</strong> : hydroxyle -OH (alcool), carbonyle C=O (aldehyde/cetone), carboxyle -COOH (acide), amine -NH2, ester -COO-</li>'
                    + '<li><strong>Groupes caracteristiques</strong> : ils determinent les proprietes chimiques de la molecule et sa famille</li>'
                    + '</ul>'
                    + '<h3>Nomenclature IUPAC</h3>'
                    + '<ul>'
                    + '<li><strong>Regle</strong> : identifier la chaine carbonee la plus longue, nommer les substituants, numeroter pour les indices les plus bas</li>'
                    + '<li><strong>Suffixes</strong> : -ane (alcane), -ene (alcene), -ol (alcool), -al (aldehyde), -one (cetone), -oique (acide carboxylique)</li>'
                    + '<li><strong>Prefixes</strong> : meth- (1C), eth- (2C), prop- (3C), but- (4C), pent- (5C), hex- (6C)</li>'
                    + '</ul>'
                    + '<h3>Isomerie et polymeres</h3>'
                    + '<ul>'
                    + '<li><strong>Isomerie de constitution</strong> : meme formule brute mais enchainements differents (chaine, position, fonction)</li>'
                    + '<li><strong>Stereoisomerie Z/E</strong> : autour d\'une double liaison C=C, les substituants peuvent etre du meme cote (Z) ou de cotes opposes (E)</li>'
                    + '<li><strong>Chiralite</strong> : molecule non superposable a son image dans un miroir (carbone asymetrique C*). Enantiomeres R et S</li>'
                    + '<li><strong>Polymeres</strong> : macromolecules formees par repetition d\'un monomere. Polyaddition (ex : polyethylene) ou polycondensation (ex : nylon, polyester)</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'Quelle est la formule brute generale des alcanes ?', answer: 'CnH(2n+2). Les alcanes sont des hydrocarbures satures : ils ne contiennent que des liaisons simples C-C et C-H.' },
                    { question: 'Quelle est la formule brute generale des alcenes ?', answer: 'CnH(2n). Les alcenes possedent au moins une double liaison C=C. Ils sont dits insatures.' },
                    { question: 'Quels sont les principaux groupes fonctionnels a connaitre ?', answer: 'Hydroxyle -OH (alcool), carbonyle C=O (aldehyde si en bout de chaine, cetone sinon), carboxyle -COOH (acide carboxylique), amine -NH2, ester -COO-, amide -CONH-.' },
                    { question: 'Quels sont les prefixes pour les chaines de 1 a 6 carbones ?', answer: 'meth- (1C), eth- (2C), prop- (3C), but- (4C), pent- (5C), hex- (6C). Exemple : butanol = alcool a 4 carbones.' },
                    { question: 'Quels sont les suffixes en nomenclature IUPAC ?', answer: '-ane (alcane), -ene (alcene), -ol (alcool), -al (aldehyde), -one (cetone), -oique (acide carboxylique), -amine (amine), -oate de ...yle (ester).' },
                    { question: 'Qu\'est-ce que l\'isomerie de constitution ?', answer: 'Des molecules ayant la meme formule brute mais des enchainements d\'atomes differents. Trois types : isomerie de chaine (squelette different), de position (meme groupe fonctionnel a des positions differentes), de fonction (groupes fonctionnels differents).' },
                    { question: 'Qu\'est-ce que la stereoisomerie Z/E ?', answer: 'Isomerie liee a une double liaison C=C. Z (zusammen) : les groupes prioritaires sont du meme cote de la double liaison. E (entgegen) : ils sont de cotes opposes. Regles de priorite de Cahn-Ingold-Prelog.' },
                    { question: 'Qu\'est-ce qu\'un carbone asymetrique ?', answer: 'Un atome de carbone lie a quatre substituants differents (note C*). Sa presence rend la molecule chirale : non superposable a son image dans un miroir.' },
                    { question: 'Qu\'est-ce qu\'un polymere ?', answer: 'Une macromolecule formee par la repetition d\'un motif elementaire (monomere). Polyaddition : ouverture de double liaison (ex : polyethylene a partir d\'ethylene). Polycondensation : reaction avec elimination d\'une petite molecule (ex : eau).' },
                    { question: 'Quelle est la difference entre un aldehyde et une cetone ?', answer: 'Les deux contiennent le groupe carbonyle C=O. L\'aldehyde a le C=O en bout de chaine (lie a un H), la cetone l\'a au milieu de la chaine (lie a deux C). Suffixes : -al et -one.' },
                    { question: 'Comment nommer un compose organique en nomenclature IUPAC ?', answer: '1) Identifier la chaine carbonee la plus longue contenant le groupe fonctionnel. 2) Numeroter pour que le groupe fonctionnel ait l\'indice le plus bas. 3) Nommer les substituants avec leur position. 4) Ajouter le suffixe.' },
                    { question: 'Qu\'est-ce qu\'une reaction d\'addition ?', answer: 'Reaction ou des atomes se fixent sur une molecule insaturee (double ou triple liaison) en ouvrant cette liaison. Exemple : hydrogenation d\'un alcene (C=C + H2 -> C-C avec 2H).' },
                    { question: 'Qu\'est-ce qu\'une reaction de substitution ?', answer: 'Reaction ou un atome ou groupe d\'atomes est remplace par un autre. Exemple : chloration d\'un alcane (un H remplace par un Cl).' },
                    { question: 'Qu\'est-ce que des enantiomeres ?', answer: 'Deux molecules images l\'une de l\'autre dans un miroir, non superposables. Elles ont les memes proprietes physiques sauf l\'activite optique (rotation du plan de polarisation en sens oppose). Configurations R et S.' },
                    { question: 'Comment reconnaitre un ester dans une formule ?', answer: 'Presence du groupe -COO- (ou -C(=O)-O-). Nomenclature : ...oate de ...yle. Exemple : ethanoate d\'ethyle CH3-COO-C2H5. Les esters ont souvent une odeur fruitee.' }
                ],
                quiz: [
                    { question: 'La formule brute d\'un alcane a 5 carbones est :', options: ['C5H10', 'C5H12', 'C5H8', 'C5H14'], correctIndex: 1, explanation: 'CnH(2n+2) avec n=5 donne C5H12. C\'est le pentane.' },
                    { question: 'Le groupe fonctionnel -COOH caracterise :', options: ['Un alcool', 'Un aldehyde', 'Un acide carboxylique', 'Une cetone'], correctIndex: 2, explanation: 'Le groupe carboxyle -COOH est caracteristique des acides carboxyliques. Suffixe : -oique.' },
                    { question: 'Le suffixe -ol indique la presence de :', options: ['Un groupe carbonyle', 'Un groupe hydroxyle', 'Un groupe amine', 'Un groupe carboxyle'], correctIndex: 1, explanation: 'Le suffixe -ol correspond a la famille des alcools, qui possedent le groupe hydroxyle -OH.' },
                    { question: 'Deux isomeres de constitution ont :', options: ['La meme formule developpee', 'La meme formule brute mais des enchainements differents', 'Des formules brutes differentes', 'Toujours la meme fonction chimique'], correctIndex: 1, explanation: 'Les isomeres de constitution partagent la meme formule brute mais different par l\'enchainement des atomes.' },
                    { question: 'La stereoisomerie Z/E concerne :', options: ['Les alcanes', 'Les molecules avec une double liaison C=C', 'Les ions', 'Les alcools'], correctIndex: 1, explanation: 'La stereoisomerie Z/E existe autour d\'une double liaison C=C avec des substituants differents de chaque cote.' },
                    { question: 'Le nom IUPAC de CH3-CH2-OH est :', options: ['Methanol', 'Ethanol', 'Propanol', 'Ethanal'], correctIndex: 1, explanation: 'Chaine de 2 carbones (eth-) avec un groupe -OH (suffixe -ol) : ethanol.' },
                    { question: 'Un carbone asymetrique est lie a :', options: ['Deux substituants identiques', 'Trois substituants identiques', 'Quatre substituants differents', 'Un seul substituant'], correctIndex: 2, explanation: 'Un carbone asymetrique (C*) porte quatre substituants tous differents, ce qui rend la molecule chirale.' },
                    { question: 'Le polyethylene est obtenu par :', options: ['Polycondensation', 'Polyaddition', 'Hydrolyse', 'Oxydation'], correctIndex: 1, explanation: 'Le polyethylene resulte de la polyaddition de monomeres d\'ethylene (CH2=CH2) par ouverture de la double liaison.' },
                    { question: 'Le prefixe "prop-" indique :', options: ['1 carbone', '2 carbones', '3 carbones', '4 carbones'], correctIndex: 2, explanation: 'prop- = 3 carbones. Meth- = 1, eth- = 2, but- = 4, pent- = 5, hex- = 6.' },
                    { question: 'Une reaction d\'addition sur un alcene :', options: ['Ajoute des atomes en ouvrant la double liaison', 'Remplace un atome par un autre', 'Elimine une molecule d\'eau', 'Coupe la chaine carbonee'], correctIndex: 0, explanation: 'L\'addition ouvre la double liaison C=C pour fixer de nouveaux atomes (H2, HBr, H2O...). L\'alcene devient un compose sature.' }
                ]
            },
            {
                id: 'acides_bases',
                title: 'Acides et Bases',
                icon: '\uD83D\uDCA7',
                content: '<h3>pH et couples acide/base</h3>'
                    + '<ul>'
                    + '<li><strong>Definition de Bronsted</strong> : un acide est un donneur de proton H+, une base est un accepteur de proton H+</li>'
                    + '<li><strong>pH</strong> : pH = -log([H3O+]), ou [H3O+] est la concentration en ions oxonium en mol/L</li>'
                    + '<li><strong>Couple acide/base</strong> : AH / A-. Demi-equation : AH = A- + H+</li>'
                    + '<li><strong>Produit ionique de l\'eau</strong> : Ke = [H3O+] * [HO-] = 10^-14 a 25 degres C. Donc pKe = 14</li>'
                    + '</ul>'
                    + '<h3>Constante d\'acidite et force</h3>'
                    + '<ul>'
                    + '<li><strong>Constante d\'acidite Ka</strong> : Ka = [A-]*[H3O+] / [AH]. Elle mesure la force d\'un acide</li>'
                    + '<li><strong>pKa</strong> = -log(Ka). Plus le pKa est faible, plus l\'acide est fort</li>'
                    + '<li><strong>Acide fort</strong> : reaction totale avec l\'eau (Ka tres grand, pKa < 0). Ex : HCl, HNO3, H2SO4</li>'
                    + '<li><strong>Acide faible</strong> : reaction partielle avec l\'eau (Ka petit). Ex : CH3COOH (pKa = 4,8), NH4+ (pKa = 9,2)</li>'
                    + '<li><strong>Diagramme de predominance</strong> : si pH < pKa, la forme acide AH predomine ; si pH > pKa, la forme basique A- predomine</li>'
                    + '</ul>'
                    + '<h3>Dosages et solutions tampons</h3>'
                    + '<ul>'
                    + '<li><strong>Dosage acido-basique</strong> : a l\'equivalence, n(acide) = n(base). On determine la concentration inconnue</li>'
                    + '<li><strong>Point d\'equivalence</strong> : repere par un indicateur colore, un saut de pH, ou par conductimetrie</li>'
                    + '<li><strong>Relation a l\'equivalence</strong> : Ca * Va = Cb * Vb (pour monoacide/monobase)</li>'
                    + '<li><strong>Solution tampon</strong> : melange acide faible / base conjuguee en proportions voisines. Le pH varie peu lors d\'ajouts moderes d\'acide ou de base. pH = pKa + log([A-]/[AH])</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'Donner la definition d\'un acide selon Bronsted.', answer: 'Un acide est une espece chimique capable de ceder (donner) un proton H+ a une autre espece chimique. Exemple : HCl -> H+ + Cl-.' },
                    { question: 'Donner la definition d\'une base selon Bronsted.', answer: 'Une base est une espece chimique capable de capter (accepter) un proton H+. Exemple : NH3 + H+ -> NH4+.' },
                    { question: 'Quelle est la formule du pH ?', answer: 'pH = -log([H3O+]), ou [H3O+] est la concentration en ions oxonium en mol/L. Inversement : [H3O+] = 10^(-pH).' },
                    { question: 'Quelle est la valeur du produit ionique de l\'eau a 25 degres C ?', answer: 'Ke = [H3O+] * [HO-] = 10^-14 a 25 degres C. Cela implique pH + pOH = 14. Une solution neutre a pH = 7.' },
                    { question: 'Comment definit-on la constante d\'acidite Ka ?', answer: 'Ka = [A-] * [H3O+] / [AH] pour le couple AH/A-. Elle quantifie la force de l\'acide : plus Ka est grand (pKa petit), plus l\'acide est fort.' },
                    { question: 'Qu\'est-ce que le pKa ?', answer: 'pKa = -log(Ka). Plus le pKa est faible, plus l\'acide est fort. A pH = pKa, les formes acide et basique sont en concentrations egales : [AH] = [A-].' },
                    { question: 'Quelle est la difference entre un acide fort et un acide faible ?', answer: 'Acide fort : reagit totalement avec l\'eau (Ka >> 1, pKa < 0), ex : HCl, HNO3. Acide faible : reagit partiellement (Ka < 1), ex : CH3COOH (pKa = 4,8).' },
                    { question: 'Qu\'est-ce qu\'un diagramme de predominance ?', answer: 'Un diagramme sur l\'axe des pH montrant les zones ou chaque espece d\'un couple predomine. Si pH < pKa : AH predomine. Si pH > pKa : A- predomine. A pH = pKa : [AH] = [A-].' },
                    { question: 'Quelle est la relation a l\'equivalence d\'un dosage acido-basique ?', answer: 'A l\'equivalence : n(acide) = n(base), soit Ca * Va = Cb * Vb pour un monoacide dose par une monobase (ou inversement).' },
                    { question: 'Comment reperer le point d\'equivalence lors d\'un dosage pH-metrique ?', answer: 'Le point d\'equivalence correspond au point d\'inflexion de la courbe pH = f(V). C\'est la ou la pente est maximale (saut de pH). On peut aussi utiliser la methode des tangentes ou la derivee.' },
                    { question: 'Qu\'est-ce qu\'une solution tampon ?', answer: 'Un melange d\'un acide faible et de sa base conjuguee en proportions comparables. Son pH varie peu lors de l\'ajout modere d\'acide ou de base, ou lors d\'une dilution. pH = pKa + log([A-]/[AH]) (formule de Henderson-Hasselbalch).' },
                    { question: 'Donner la formule de Henderson-Hasselbalch.', answer: 'pH = pKa + log([A-] / [AH]). Elle relie le pH d\'une solution tampon aux concentrations de l\'acide faible et de sa base conjuguee.' },
                    { question: 'Qu\'est-ce qu\'un indicateur colore acido-basique ?', answer: 'Un couple acide faible/base faible dont les deux formes ont des couleurs differentes. La zone de virage est centree sur le pKa de l\'indicateur. Il faut choisir un indicateur dont la zone de virage contient le pH a l\'equivalence.' },
                    { question: 'Comment calculer le pH d\'une solution d\'acide fort de concentration c ?', answer: 'Reaction totale : [H3O+] = c. Donc pH = -log(c). Exemple : HCl a 0,01 mol/L donne pH = -log(0,01) = 2.' },
                    { question: 'Comment evolue le pH d\'une solution acide lors d\'une dilution ?', answer: 'Le pH augmente (la solution devient moins acide) car la concentration en H3O+ diminue. Pour un acide fort, diluer par 10 augmente le pH de 1 unite. Le pH tend vers 7 (pH de l\'eau pure).' }
                ],
                quiz: [
                    { question: 'Le pH d\'une solution ou [H3O+] = 10^-3 mol/L est :', options: ['3', '-3', '11', '7'], correctIndex: 0, explanation: 'pH = -log(10^-3) = 3.' },
                    { question: 'Un acide de pKa = 2 est :', options: ['Un acide faible', 'Un acide relativement fort', 'Une base', 'Neutre'], correctIndex: 1, explanation: 'Plus le pKa est bas, plus l\'acide est fort. Un pKa de 2 correspond a un acide assez fort (mais pas totalement dissocies comme les acides forts avec pKa < 0).' },
                    { question: 'A l\'equivalence d\'un dosage acido-basique :', options: ['pH = 7 toujours', 'n(acide) = n(base)', 'Le pH ne change pas', 'La solution est toujours acide'], correctIndex: 1, explanation: 'L\'equivalence est definie par n(acide ajoute) = n(base presente) (ou inversement). Le pH a l\'equivalence depend de la nature de l\'acide et de la base.' },
                    { question: 'Le produit ionique de l\'eau a 25 degres C vaut :', options: ['10^-7', '10^-14', '10^-10', '14'], correctIndex: 1, explanation: 'Ke = [H3O+] * [HO-] = 10^-14 a 25 degres C.' },
                    { question: 'La formule de Henderson-Hasselbalch est :', options: ['pH = pKa - log([A-]/[AH])', 'pH = pKa + log([A-]/[AH])', 'pH = pKa + log([AH]/[A-])', 'pH = -log(Ka)'], correctIndex: 1, explanation: 'pH = pKa + log([A-]/[AH]). Si [A-] = [AH], alors pH = pKa.' },
                    { question: 'Si pH < pKa pour un couple AH/A-, la forme predominante est :', options: ['A- (base conjuguee)', 'AH (acide)', 'H2O', 'Aucune des deux'], correctIndex: 1, explanation: 'Quand pH < pKa, la forme acide AH predomine. C\'est le principe du diagramme de predominance.' },
                    { question: 'Un acide fort est un acide qui :', options: ['Reagit partiellement avec l\'eau', 'Reagit totalement avec l\'eau', 'Ne reagit pas avec l\'eau', 'A un pKa eleve'], correctIndex: 1, explanation: 'Un acide fort se dissocie totalement dans l\'eau : AH + H2O -> A- + H3O+ (reaction complete, Ka tres grand).' },
                    { question: 'Une solution tampon resiste aux variations de pH car :', options: ['Elle contient un acide fort', 'Elle contient un melange acide faible / base conjuguee', 'Elle est tres diluee', 'Son pH est toujours 7'], correctIndex: 1, explanation: 'La solution tampon contient un reservoir d\'acide faible et de base conjuguee qui neutralisent les ajouts d\'acide ou de base.' },
                    { question: 'Pour un dosage acide fort / base forte, le pH a l\'equivalence est :', options: ['7', 'Inferieur a 7', 'Superieur a 7', 'Egal au pKa'], correctIndex: 0, explanation: 'Pour un dosage acide fort / base forte, seule l\'eau est presente a l\'equivalence, donc pH = 7 a 25 degres C.' },
                    { question: 'En diluant par 10 une solution d\'acide fort, le pH :', options: ['Diminue de 1', 'Augmente de 1', 'Reste constant', 'Double'], correctIndex: 1, explanation: '[H3O+] est divisee par 10, donc pH = -log([H3O+]/10) = pH_initial + 1. Le pH augmente de 1 unite.' },
                    { question: 'Dans une reaction d\'oxydoreduction, l\'oxydant est l\'espece qui :', options: ['Perd des electrons', 'Gagne des electrons', 'Gagne des protons', 'Perd des protons'], correctIndex: 1, explanation: 'L\'oxydant gagne (capte) des electrons : il est reduit. Le reducteur perd (cede) des electrons : il est oxyde. Moyen mnemotechnique : l\'Oxydant est Reduit, le Reducteur est Oxyde.' },
                    { question: 'Le pH d\'une solution de NaOH a 0,01 mol/L vaut (a 25 degres C) :', options: ['2', '7', '12', '14'], correctIndex: 2, explanation: 'NaOH est une base forte : [HO-] = 0,01 = 10^-2 mol/L. Donc pOH = 2, et pH = 14 - pOH = 14 - 2 = 12.' }
                ]
            },
            {
                id: 'circuits',
                title: 'Electricite & Circuits',
                icon: '\uD83D\uDD0C',
                content: '<h3>Loi d\'Ohm et lois de Kirchhoff</h3>'
                    + '<ul>'
                    + '<li><strong>Loi d\'Ohm</strong> : U = R * I, ou U est la tension (V), R la resistance (ohms), I l\'intensite (A)</li>'
                    + '<li><strong>Loi des noeuds (Kirchhoff)</strong> : la somme des courants entrant dans un noeud est egale a la somme des courants sortant</li>'
                    + '<li><strong>Loi des mailles (Kirchhoff)</strong> : la somme algebrique des tensions le long d\'une maille fermee est nulle</li>'
                    + '<li><strong>Resistances en serie</strong> : R_eq = R1 + R2 + ... <strong>En parallele</strong> : 1/R_eq = 1/R1 + 1/R2 + ...</li>'
                    + '</ul>'
                    + '<h3>Condensateurs et circuits RC</h3>'
                    + '<ul>'
                    + '<li><strong>Condensateur</strong> : stocke de l\'energie sous forme electrique. Capacite C en farads (F). Q = C * U</li>'
                    + '<li><strong>Energie stockee</strong> : E = (1/2) * C * U^2</li>'
                    + '<li><strong>Circuit RC (charge)</strong> : U_C(t) = E * (1 - e^(-t/tau)), ou tau = R*C est la constante de temps</li>'
                    + '<li><strong>Circuit RC (decharge)</strong> : U_C(t) = U0 * e^(-t/tau)</li>'
                    + '<li><strong>Constante de temps tau</strong> : au bout de 5*tau, le regime transitoire est termine (charge ou decharge a 99%)</li>'
                    + '</ul>'
                    + '<h3>Energie et puissance electrique</h3>'
                    + '<ul>'
                    + '<li><strong>Puissance</strong> : P = U * I (en watts). Pour un conducteur ohmique : P = R * I^2 = U^2 / R</li>'
                    + '<li><strong>Energie</strong> : E = P * t = U * I * t (en joules). En kWh pour les factures : 1 kWh = 3,6 * 10^6 J</li>'
                    + '<li><strong>Effet Joule</strong> : toute resistance convertit l\'energie electrique en chaleur. P_Joule = R * I^2</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'Enoncer la loi d\'Ohm.', answer: 'U = R * I, ou U est la tension aux bornes du conducteur ohmique (V), R sa resistance (ohms), I l\'intensite du courant (A). La tension est proportionnelle au courant.' },
                    { question: 'Enoncer la loi des noeuds de Kirchhoff.', answer: 'En un noeud d\'un circuit, la somme des intensites des courants entrants est egale a la somme des intensites des courants sortants. C\'est la conservation de la charge electrique.' },
                    { question: 'Enoncer la loi des mailles de Kirchhoff.', answer: 'La somme algebrique des tensions le long d\'une maille fermee est nulle. C\'est une consequence de la conservation de l\'energie dans le circuit.' },
                    { question: 'Comment calculer la resistance equivalente en serie ?', answer: 'R_eq = R1 + R2 + R3 + ... Les resistances s\'ajoutent en serie. Le courant est le meme dans toutes les resistances.' },
                    { question: 'Comment calculer la resistance equivalente en parallele ?', answer: '1/R_eq = 1/R1 + 1/R2 + 1/R3 + ... La resistance equivalente est toujours inferieure a la plus petite resistance. La tension est la meme aux bornes de chaque resistance.' },
                    { question: 'Quelle est la relation charge-tension d\'un condensateur ?', answer: 'Q = C * U, ou Q est la charge (en coulombs C), C la capacite (en farads F), U la tension (en volts V).' },
                    { question: 'Quelle est l\'energie stockee dans un condensateur ?', answer: 'E = (1/2) * C * U^2 = (1/2) * Q * U = Q^2 / (2*C). L\'energie est en joules.' },
                    { question: 'Quelle est l\'expression de la tension aux bornes d\'un condensateur en charge dans un circuit RC ?', answer: 'U_C(t) = E * (1 - e^(-t/tau)), ou E est la tension du generateur et tau = R*C la constante de temps. Le condensateur atteint 63% de E au bout d\'un tau.' },
                    { question: 'Quelle est l\'expression de la tension lors de la decharge d\'un condensateur dans un circuit RC ?', answer: 'U_C(t) = U0 * e^(-t/tau), avec tau = R*C. La tension decroit exponentiellement. Au bout de 5*tau, U_C est quasiment nulle (moins de 1% de U0).' },
                    { question: 'Qu\'est-ce que la constante de temps tau d\'un circuit RC ?', answer: 'tau = R * C (en secondes). R en ohms, C en farads. C\'est le temps caracteristique de charge/decharge. Au bout de tau, U_C atteint 63% de sa valeur finale (charge) ou tombe a 37% (decharge).' },
                    { question: 'Quelle est la formule de la puissance electrique ?', answer: 'P = U * I (en watts W). Pour un conducteur ohmique : P = R*I^2 = U^2/R.' },
                    { question: 'Qu\'est-ce que l\'effet Joule ?', answer: 'Tout conducteur ohmique parcouru par un courant dissipe de l\'energie sous forme de chaleur. La puissance dissipee est P = R * I^2. C\'est un phenomene irreversible.' },
                    { question: 'Quelle est la formule de l\'energie electrique ?', answer: 'E = P * t = U * I * t, en joules (J). Pratiquement, on utilise le kWh : 1 kWh = 3,6 * 10^6 J.' },
                    { question: 'Comment se comporte un condensateur en regime permanent (continu) ?', answer: 'En regime permanent continu, le condensateur est completement charge : i = 0 (pas de courant), U_C = E. Le condensateur se comporte comme un interrupteur ouvert.' },
                    { question: 'Quelle est l\'intensite dans un circuit RC lors de la charge ?', answer: 'i(t) = (E/R) * e^(-t/tau). L\'intensite est maximale a t = 0 (i_max = E/R) et decroit exponentiellement vers 0. tau = R*C.' }
                ],
                quiz: [
                    { question: 'La loi d\'Ohm s\'ecrit :', options: ['U = R / I', 'U = R * I', 'U = R + I', 'U = I / R'], correctIndex: 1, explanation: 'U = R * I. La tension est le produit de la resistance par l\'intensite du courant.' },
                    { question: 'La constante de temps d\'un circuit RC est :', options: ['tau = R / C', 'tau = R * C', 'tau = R + C', 'tau = C / R'], correctIndex: 1, explanation: 'tau = R * C, avec R en ohms et C en farads. tau est en secondes.' },
                    { question: 'L\'energie stockee dans un condensateur de 10 microF sous 100 V est :', options: ['0,05 J', '0,5 J', '5 J', '50 J'], correctIndex: 0, explanation: 'E = (1/2)*C*U^2 = (1/2) * 10*10^-6 * 100^2 = (1/2) * 10^-5 * 10^4 = 0,05 J.' },
                    { question: 'Deux resistances de 100 ohms en parallele donnent une resistance equivalente de :', options: ['200 ohms', '100 ohms', '50 ohms', '25 ohms'], correctIndex: 2, explanation: '1/R_eq = 1/100 + 1/100 = 2/100, donc R_eq = 50 ohms. Deux resistances identiques en parallele donnent la moitie.' },
                    { question: 'Au bout de 5*tau, un condensateur en charge a atteint :', options: ['63% de la tension finale', '86% de la tension finale', '95% de la tension finale', '99% de la tension finale'], correctIndex: 3, explanation: 'A t = 5*tau : 1 - e^(-5) = 1 - 0,007 = 0,993, soit environ 99% de la tension finale.' },
                    { question: 'La puissance dissipee par une resistance de 10 ohms traversee par 2 A est :', options: ['20 W', '40 W', '5 W', '80 W'], correctIndex: 1, explanation: 'P = R * I^2 = 10 * 4 = 40 W.' },
                    { question: 'La loi des noeuds traduit la conservation :', options: ['De l\'energie', 'De la charge electrique', 'De la masse', 'De la tension'], correctIndex: 1, explanation: 'La loi des noeuds exprime que la charge electrique est conservee : tout le courant entrant dans un noeud en ressort.' },
                    { question: 'La loi des mailles stipule que dans une maille fermee :', options: ['La somme des courants est nulle', 'La somme des tensions est nulle', 'La somme des resistances est nulle', 'La somme des puissances est nulle'], correctIndex: 1, explanation: 'La somme algebrique des tensions le long d\'une maille fermee est nulle (conservation de l\'energie).' },
                    { question: 'L\'intensite du courant dans un circuit RC en charge a l\'instant t = 0 vaut :', options: ['0', 'E / R', 'E * R', 'E / C'], correctIndex: 1, explanation: 'A t = 0, le condensateur est decharge (U_C = 0), donc toute la tension E est aux bornes de R : i(0) = E/R.' },
                    { question: 'L\'effet Joule dans un conducteur ohmique produit :', options: ['De la lumiere', 'De la chaleur', 'Un champ magnetique uniquement', 'Du mouvement'], correctIndex: 1, explanation: 'L\'effet Joule est la conversion irreversible de l\'energie electrique en energie thermique (chaleur) dans une resistance.' },
                    { question: 'Un generateur de f.e.m. E = 12 V et de resistance interne r = 2 ohms alimente une resistance R = 4 ohms. L\'intensite du courant est :', options: ['2 A', '3 A', '6 A', '1 A'], correctIndex: 0, explanation: 'Loi d\'Ohm pour le circuit complet : I = E / (R + r) = 12 / (4 + 2) = 12 / 6 = 2 A. La resistance interne du generateur s\'ajoute a la resistance externe.' },
                    { question: 'Dans un circuit RC, apres un temps egal a une constante de temps tau, la tension du condensateur en charge atteint environ :', options: ['37% de E', '50% de E', '63% de E', '86% de E'], correctIndex: 2, explanation: 'U_C(tau) = E * (1 - e^(-1)) = E * (1 - 0,37) = 0,63 * E, soit environ 63% de la tension finale E.' }
                ]
            },
            {
                id: 'nucleaire',
                title: 'Physique nucleaire',
                icon: '\u2622\uFE0F',
                content: '<h3>Noyau atomique et radioactivite</h3>'
                    + '<ul>'
                    + '<li><strong>Notation du noyau</strong> : A/Z X, ou A est le nombre de masse (protons + neutrons), Z le numero atomique (protons)</li>'
                    + '<li><strong>Isotopes</strong> : meme Z (meme element) mais A different (nombre de neutrons different). Ex : carbone-12 et carbone-14</li>'
                    + '<li><strong>Radioactivite alpha</strong> : emission d\'un noyau d\'helium (4/2 He). A diminue de 4, Z diminue de 2</li>'
                    + '<li><strong>Radioactivite beta-</strong> : un neutron se transforme en proton + electron (0/-1 e). Z augmente de 1, A constant</li>'
                    + '<li><strong>Radioactivite beta+</strong> : un proton se transforme en neutron + positon (0/+1 e). Z diminue de 1, A constant</li>'
                    + '<li><strong>Radioactivite gamma</strong> : emission d\'un photon gamma (desexcitation du noyau). Ni A ni Z ne changent</li>'
                    + '</ul>'
                    + '<h3>Decroissance radioactive et demi-vie</h3>'
                    + '<ul>'
                    + '<li><strong>Loi de decroissance</strong> : N(t) = N0 * e^(-lambda*t), ou lambda est la constante radioactive (s^-1)</li>'
                    + '<li><strong>Activite</strong> : A(t) = lambda * N(t) = A0 * e^(-lambda*t), en becquerels (Bq). 1 Bq = 1 desintegration/s</li>'
                    + '<li><strong>Demi-vie (t1/2)</strong> : temps au bout duquel la moitie des noyaux se sont desintegres. t1/2 = ln(2) / lambda</li>'
                    + '<li><strong>Datation</strong> : on mesure le rapport des isotopes pour determiner l\'age (ex : carbone-14, t1/2 = 5730 ans)</li>'
                    + '</ul>'
                    + '<h3>Fission, fusion et equivalence masse-energie</h3>'
                    + '<ul>'
                    + '<li><strong>Defaut de masse</strong> : Delta(m) = Z*mp + (A-Z)*mn - m_noyau > 0. La masse du noyau est inferieure a la somme des masses des nucleons separes</li>'
                    + '<li><strong>Energie de liaison</strong> : E_l = Delta(m) * c^2. Plus E_l/A est grande, plus le noyau est stable (maximum : fer-56)</li>'
                    + '<li><strong>Equivalence masse-energie (Einstein)</strong> : E = m * c^2. 1 u = 931,5 MeV/c^2</li>'
                    + '<li><strong>Fission</strong> : un noyau lourd se scinde en deux noyaux plus legers + neutrons + energie. Ex : uranium-235 dans les centrales nucleaires</li>'
                    + '<li><strong>Fusion</strong> : deux noyaux legers fusionnent en un noyau plus lourd + energie. Ex : fusion de l\'hydrogene dans les etoiles</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'Que representent A et Z dans la notation A/Z X ?', answer: 'A est le nombre de masse (nombre total de nucleons = protons + neutrons). Z est le numero atomique (nombre de protons). Le nombre de neutrons est N = A - Z.' },
                    { question: 'Qu\'est-ce que la radioactivite alpha ?', answer: 'Emission d\'un noyau d\'helium-4 (4/2 He, ou particule alpha). Le noyau pere perd 2 protons et 2 neutrons : A diminue de 4, Z diminue de 2. Concerne les noyaux lourds.' },
                    { question: 'Qu\'est-ce que la radioactivite beta- ?', answer: 'Un neutron du noyau se transforme en proton avec emission d\'un electron (0/-1 e) et d\'un antineutrino. Z augmente de 1, A reste constant. Le noyau fils a un proton de plus.' },
                    { question: 'C\'est quoi la radioactivite gamma ?', answer: 'Un noyau trop "excite" (= trop d\'energie) se calme en envoyant un flash de lumiere invisible tres puissant (= rayon gamma). Le noyau ne change PAS. Il se debarrasse juste de l\'energie en trop. Imagine une bouilloire qui siffle : elle evacue la vapeur. Le rayon gamma, c\'est la "vapeur" du noyau. Mots difficiles : "photon gamma" = grain de lumiere invisible mais ultra-energetique. "desexcitation" = retour au calme.' },
                    { question: 'C\'est quoi la loi de decroissance radioactive ?', answer: 'Formule : N(t) = N0 x e^(-lambda x t). Ca veut dire : au fil du temps, il reste de MOINS en moins de noyaux radioactifs. Ca diminue vite au debut, puis de plus en plus lentement. Imagine un sac de pop-corn qui eclate : au debut beaucoup de grains eclatent, puis de moins en moins. Mots difficiles : "N0" = le nombre de noyaux au depart. "lambda" = un nombre qui dit A QUELLE VITESSE ca se desintegre. "exponentielle" = ca diminue de plus en plus lentement.' },
                    { question: 'C\'est quoi la demi-vie ?', answer: 'C\'est le temps qu\'il faut pour que la MOITIE des noyaux radioactifs disparaissent. Formule : t1/2 = ln(2) / lambda. Exemple simple : tu as 1000 noyaux. Apres 1 demi-vie = 500 restent. Apres 2 demi-vies = 250 restent. Apres 3 = 125. Ca divise par 2 a chaque fois. Mots difficiles : "demi-vie" (ou "periode") = le temps pour perdre la moitie. "desintegration" = le noyau se casse et se transforme en un autre element.' },
                    { question: 'C\'est quoi E = mc^2 ?', answer: 'La formule la plus celebre du monde, par Einstein. Elle dit : la masse, c\'est de l\'energie compactee. Meme un tout petit bout de matiere contient une energie ENORME (parce que c = vitesse de la lumiere = tres tres grand, et c^2 = encore plus grand). Exemple : 1 gramme de matiere contient autant d\'energie qu\'une bombe. C\'est le principe de l\'energie nucleaire. Mots difficiles : "c" = vitesse de la lumiere = 300 000 km/s. "equivalence masse-energie" = masse et energie, c\'est la meme chose sous deux formes.' },
                    { question: 'C\'est quoi le defaut de masse ?', answer: 'Imagine des LEGO separes. Tu les assembles pour faire un noyau. Le noyau assemble pese MOINS que tous les LEGO separes. La masse qui "manque" s\'est transformee en ENERGIE (via E = mc^2). C\'est cette energie qui COLLE les protons et neutrons ensemble dans le noyau. En gros : assembler un noyau fait perdre un peu de masse, et cette masse perdue devient l\'energie qui tient le tout. Mots difficiles : "nucleons" = les briques du noyau (protons + neutrons). "energie de liaison" = l\'energie qui colle les nucleons ensemble.' },
                    { question: 'C\'est quoi l\'energie de liaison par nucleon ?', answer: 'C\'est l\'energie de liaison divisee par le nombre de briques (nucleons). Plus ce chiffre est GRAND, plus le noyau est SOLIDE. Le noyau le plus solide = le fer. En gros : c\'est comme la qualite de la colle par brique de LEGO. Le fer a la meilleure colle. Les noyaux tres lourds (uranium) et tres legers (hydrogene) ont une colle plus faible.' },
                    { question: 'C\'est quoi la fission nucleaire ?', answer: 'On CASSE un gros noyau (ex : uranium) en deux morceaux plus petits. Ca libere une ENORME quantite d\'energie. C\'est comme ca que marchent les centrales nucleaires. Imagine une grosse boule de LEGO mal collee : tu la casses et les morceaux partent a toute vitesse. Cette vitesse = l\'energie. Mots difficiles : "fission" = casser en deux (du latin "fissio" = coupure). "uranium-235" = un atome tres lourd utilise dans les centrales.' },
                    { question: 'C\'est quoi la fusion nucleaire ?', answer: 'On COLLE deux petits noyaux ensemble pour en faire un plus gros. Ca libere encore PLUS d\'energie que la fission. C\'est comme ca que le soleil fonctionne. Probleme : il faut des temperatures de millions de degres pour y arriver. On n\'a pas encore reussi a le faire sur Terre de maniere rentable. Mots difficiles : "fusion" = fusionner, coller ensemble. "deuterium/tritium" = des types d\'hydrogene tres legers.' },
                    { question: 'C\'est quoi l\'activite radioactive ?', answer: 'C\'est le nombre de noyaux qui se desintegrent CHAQUE SECONDE. Unite = becquerel (Bq). 1 Bq = 1 desintegration par seconde. Plus l\'activite est forte, plus c\'est radioactif (= plus c\'est dangereux). L\'activite diminue avec le temps (car il reste de moins en moins de noyaux a desintegrer). Mots difficiles : "becquerel" = unite d\'activite, du nom du physicien qui a decouvert la radioactivite.' },
                    { question: 'C\'est quoi des isotopes ?', answer: 'Ce sont des atomes du MEME element mais avec un nombre de neutrons different. Ils ont les memes proprietes chimiques mais pas le meme poids. Exemple : l\'hydrogene a 3 isotopes. H-1 (normal, 0 neutron). H-2 (deuterium, 1 neutron). H-3 (tritium, 2 neutrons). Tous sont de l\'hydrogene, mais le tritium est radioactif. Mots difficiles : "isotope" = du grec "isos" (meme) + "topos" (place) = meme place dans le tableau periodique.' },
                    { question: 'Comment marche la datation au carbone 14 ?', answer: 'Quand un etre vivant est VIVANT, il absorbe du carbone 14 (radioactif) en permanence. Quand il MEURT, il arrete d\'en absorber. Le carbone 14 se desintegre petit a petit (demi-vie = 5730 ans). En mesurant combien il en reste, on calcule depuis combien de temps il est mort. Exemple : un os qui a perdu la moitie de son C-14 est mort il y a 5730 ans. En gros : c\'est une horloge naturelle qui demarre a la mort.' },
                    { question: 'Pourquoi fission ET fusion liberent de l\'energie ?', answer: 'Parce que les deux vont vers des noyaux PLUS STABLES (= mieux colles). Le fer est le noyau le plus stable. Les noyaux trop LOURDS (uranium) veulent devenir plus legers → fission. Les noyaux trop LEGERS (hydrogene) veulent devenir plus lourds → fusion. Les deux vont vers le fer = les deux liberent de l\'energie. Imagine une vallee : le fer est en bas. Que tu viennes de la gauche (fusion) ou de la droite (fission), tu descends = tu liberes de l\'energie.' }
                ],
                quiz: [
                    { question: 'Dans la notation A/Z X, A represente :', options: ['Le nombre de protons', 'Le nombre de masse (protons + neutrons)', 'Le nombre d\'electrons', 'Le nombre de neutrons'], correctIndex: 1, explanation: 'A = nombre de masse = nombre de protons (Z) + nombre de neutrons (N). A = Z + N.' },
                    { question: 'La radioactivite alpha correspond a l\'emission de :', options: ['Un electron', 'Un photon', 'Un noyau d\'helium-4', 'Un neutron'], correctIndex: 2, explanation: 'La particule alpha est un noyau d\'helium-4 (2 protons + 2 neutrons). Le noyau pere perd 4 nucleons.' },
                    { question: 'La demi-vie t1/2 est reliee a lambda par :', options: ['t1/2 = lambda / ln(2)', 't1/2 = ln(2) / lambda', 't1/2 = 1 / lambda', 't1/2 = lambda * ln(2)'], correctIndex: 1, explanation: 't1/2 = ln(2) / lambda. C\'est le temps pour que N soit divise par 2.' },
                    { question: 'Apres 3 demi-vies, la proportion de noyaux restants est :', options: ['1/2', '1/4', '1/8', '1/16'], correctIndex: 2, explanation: 'Apres n demi-vies : N = N0 / 2^n. Pour n=3 : N = N0 / 8, soit 1/8 des noyaux initiaux.' },
                    { question: 'L\'equivalence masse-energie d\'Einstein est :', options: ['E = m*v^2', 'E = m*c', 'E = m*c^2', 'E = (1/2)*m*c^2'], correctIndex: 2, explanation: 'E = m*c^2, ou c = 3 * 10^8 m/s. Une petite masse correspond a une enorme energie.' },
                    { question: 'La fission nucleaire concerne :', options: ['La fusion de noyaux legers', 'La cassure de noyaux lourds', 'L\'emission de photons', 'La desintegration beta'], correctIndex: 1, explanation: 'La fission est la cassure (scission) d\'un noyau lourd (ex : U-235) en deux noyaux plus legers, avec liberation d\'energie et de neutrons.' },
                    { question: 'La fusion nucleaire se produit dans :', options: ['Les centrales nucleaires actuelles', 'Les etoiles', 'Les reacteurs a fission', 'Les accelerateurs de particules uniquement'], correctIndex: 1, explanation: 'La fusion de l\'hydrogene en helium est la source d\'energie des etoiles. Sur Terre, la maitrise de la fusion est encore experimentale (ITER).' },
                    { question: 'L\'unite d\'activite radioactive est :', options: ['Le gray (Gy)', 'Le sievert (Sv)', 'Le becquerel (Bq)', 'Le curie (Ci) uniquement'], correctIndex: 2, explanation: 'L\'activite se mesure en becquerels (Bq). 1 Bq = 1 desintegration par seconde. Le curie est une ancienne unite.' },
                    { question: 'Le noyau le plus stable (E_l/A maximale) est proche de :', options: ['L\'hydrogene', 'Le fer (Fe-56)', 'L\'uranium (U-238)', 'L\'helium (He-4)'], correctIndex: 1, explanation: 'Le fer-56 a l\'energie de liaison par nucleon la plus elevee (environ 8,8 MeV/nucleon). C\'est le sommet de la courbe d\'Aston.' },
                    { question: 'Lors d\'une desintegration beta-, Z :', options: ['Diminue de 2', 'Augmente de 1', 'Reste constant', 'Diminue de 1'], correctIndex: 1, explanation: 'En beta-, un neutron se transforme en proton : Z augmente de 1, A reste constant. Le noyau fils est l\'element suivant dans le tableau periodique.' },
                    { question: 'L\'energie liberee lors d\'une reaction nucleaire provient de :', options: ['La transformation d\'electrons en photons', 'La difference de masse entre reactifs et produits (E = Delta(m)*c^2)', 'L\'absorption de neutrons par le noyau', 'La desexcitation des electrons'], correctIndex: 1, explanation: 'L\'energie liberee correspond au defaut de masse : les produits sont plus legers que les reactifs, et cette difference de masse est convertie en energie selon E = Delta(m) * c^2 (relation d\'Einstein).' }
                ]
            }
        ]
    });
})();
