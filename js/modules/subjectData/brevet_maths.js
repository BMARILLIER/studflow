// brevet_maths.js — Brevet Maths : Fractions, Puissances, Calcul litteral, Equations, Pythagore/Thales, Trigo, Fonctions, Probas/Stats
// Programme cycle 4 (3eme) — DNB — Adapte dys/TSA
(function() {
    if (!window.StudFlow || !window.StudFlow.subjects) return;

    window.StudFlow.subjects.register({
        id: 'brevet_maths',
        name: 'Mathematiques (Brevet)',
        icon: '\uD83D\uDCD0',
        color: 'sun',
        exam: 'brevet',
        sections: [
            // ═══════════════════════════════════════════════════════════════
            // SECTION 1 — Fractions
            // ═══════════════════════════════════════════════════════════════
            {
                id: 'fractions',
                title: 'Fractions',
                icon: '🍕',
                content: '<h3>Fractions : les regles de base</h3>'
                    + '<ul>'
                    + '<li><strong>Additionner / Soustraire</strong> : il faut le MEME denominateur.</li>'
                    + '<li><strong>Multiplier</strong> : haut x haut, bas x bas.</li>'
                    + '<li><strong>Diviser</strong> : on retourne la 2e fraction, puis on multiplie.</li>'
                    + '<li><strong>Simplifier</strong> : on divise haut et bas par le PGCD.</li>'
                    + '</ul>',
                flashcards: [
                    // --- 1. Addition meme denom ---
                    {
                        question: 'Comment additionner deux fractions qui ont le MEME denominateur ?',
                        answer: '🎯 On garde le denominateur et on additionne les numerateurs.\n\n'
                            + 'Exemple : 3/7 + 2/7 = (3 + 2)/7 = 5/7.\n\n'
                            + 'En gros : meme denominateur → on additionne juste le haut.\n\n'
                            + 'Mot difficile : "numerateur" = le nombre du haut. "Denominateur" = le nombre du bas.\n\n'
                            + '💡 Astuce dys : pense a une pizza coupee en 7 parts. 3 parts + 2 parts = 5 parts. Le nombre de parts (7) ne change pas.\n\n'
                            + '⚠️ Piege Brevet : on n\'additionne JAMAIS les denominateurs ! 3/7 + 2/7 ≠ 5/14.'
                    },
                    // --- 2. Addition denom differents ---
                    {
                        question: 'Comment additionner deux fractions avec des denominateurs DIFFERENTS ?',
                        answer: '🎯 On cherche un denominateur commun. On transforme chaque fraction.\n\n'
                            + 'Exemple : 1/3 + 1/4.\n'
                            + 'Denominateur commun = 12.\n'
                            + '1/3 = 4/12. 1/4 = 3/12.\n'
                            + '4/12 + 3/12 = 7/12.\n\n'
                            + 'En gros : on met les fractions sur le meme denominateur, puis on additionne le haut.\n\n'
                            + 'Mot difficile : "denominateur commun" = un nombre divisible par les deux denominateurs.\n\n'
                            + '💡 Astuce dys : multiplie les deux denominateurs entre eux (3 x 4 = 12). Ca marche toujours.\n\n'
                            + '⚠️ Piege Brevet : oublier de transformer les DEUX fractions avant d\'additionner.'
                    },
                    // --- 3. Soustraction ---
                    {
                        question: 'Comment soustraire deux fractions ?',
                        answer: '🎯 Meme regle que l\'addition. On met le meme denominateur, puis on soustrait les numerateurs.\n\n'
                            + 'Exemple : 5/6 - 1/4.\n'
                            + 'Denominateur commun = 12.\n'
                            + '5/6 = 10/12. 1/4 = 3/12.\n'
                            + '10/12 - 3/12 = 7/12.\n\n'
                            + 'En gros : meme methode que l\'addition, mais avec un moins.\n\n'
                            + '💡 Astuce dys : ecris les deux fractions cote a cote avec le meme denominateur AVANT de calculer.\n\n'
                            + '⚠️ Piege Brevet : attention aux signes negatifs. 3/5 - 7/5 = -4/5 (un resultat negatif est possible).'
                    },
                    // --- 4. Multiplication ---
                    {
                        question: 'Comment multiplier deux fractions ?',
                        answer: '🎯 On multiplie les numerateurs entre eux. On multiplie les denominateurs entre eux.\n\n'
                            + 'Exemple : 2/3 x 5/7 = (2 x 5) / (3 x 7) = 10/21.\n\n'
                            + 'En gros : haut x haut, bas x bas. C\'est le calcul le plus simple !\n\n'
                            + '💡 Astuce dys : "Multi = direct". Pas besoin de denominateur commun ici.\n\n'
                            + '⚠️ Piege Brevet : oublier de simplifier apres. 4/6 x 3/8 = 12/48 = 1/4.'
                    },
                    // --- 5. Division ---
                    {
                        question: 'Comment diviser une fraction par une autre ?',
                        answer: '🎯 On RETOURNE la 2e fraction, puis on MULTIPLIE.\n\n'
                            + 'Exemple : 2/3 ÷ 5/7 = 2/3 x 7/5 = 14/15.\n\n'
                            + 'En gros : diviser = multiplier par l\'inverse.\n\n'
                            + 'Mot difficile : "inverse" de a/b = b/a (on retourne la fraction).\n\n'
                            + '💡 Astuce dys : "Diviser = Retourner et Multiplier". Retiens "DRM" comme un tambour.\n\n'
                            + '⚠️ Piege Brevet : c\'est la DEUXIEME fraction qu\'on retourne, PAS la premiere !'
                    },
                    // --- 6. Simplifier avec PGCD ---
                    {
                        question: 'Comment simplifier une fraction ?',
                        answer: '🎯 On divise le haut et le bas par leur PGCD.\n\n'
                            + 'Exemple : simplifier 12/18.\n'
                            + 'PGCD de 12 et 18 = 6.\n'
                            + '12 ÷ 6 = 2. 18 ÷ 6 = 3.\n'
                            + 'Resultat : 2/3.\n\n'
                            + 'En gros : on cherche le plus grand nombre qui divise le haut ET le bas.\n\n'
                            + 'Mot difficile : "PGCD" = Plus Grand Commun Diviseur.\n\n'
                            + '💡 Astuce dys : si tu ne trouves pas le PGCD, simplifie par 2, puis par 3, puis par 5... Petit a petit.\n\n'
                            + '⚠️ Piege Brevet : oublier de simplifier jusqu\'au bout. 8/12 = 4/6 → pas fini ! → 2/3.'
                    },
                    // --- 7. Fraction irreductible ---
                    {
                        question: 'C\'est quoi une fraction irreductible ?',
                        answer: '🎯 C\'est une fraction qu\'on ne peut PLUS simplifier.\n\n'
                            + 'Exemple : 2/3 est irreductible. On ne peut plus diviser 2 et 3 par un meme nombre.\n'
                            + '4/6 n\'est PAS irreductible (on peut simplifier par 2).\n\n'
                            + 'En gros : irreductible = on a simplifie au maximum.\n\n'
                            + 'Mot difficile : "irreductible" = impossible a reduire davantage.\n\n'
                            + '💡 Astuce dys : verifie que le haut et le bas n\'ont aucun diviseur commun sauf 1.\n\n'
                            + '⚠️ Piege Brevet : le sujet demande souvent "fraction irreductible". Si tu oublies, tu perds des points.'
                    },
                    // --- 8. Priorites avec fractions ---
                    {
                        question: 'C\'est quoi les priorites de calcul avec des fractions ?',
                        answer: '🎯 Meme regle que pour les nombres : d\'abord les parentheses, puis x et ÷, puis + et -.\n\n'
                            + 'Exemple : 1/2 + 3/4 x 2/3.\n'
                            + 'D\'abord la multiplication : 3/4 x 2/3 = 6/12 = 1/2.\n'
                            + 'Puis l\'addition : 1/2 + 1/2 = 1.\n\n'
                            + 'En gros : la multiplication passe AVANT l\'addition.\n\n'
                            + '💡 Astuce dys : retiens "P-M-A" → Parentheses, Multiplication/Division, Addition/Soustraction.\n\n'
                            + '⚠️ Piege Brevet : faire l\'addition avant la multiplication. Ca donne un mauvais resultat.'
                    },
                    // --- 9. Fraction d'un nombre ---
                    {
                        question: 'Comment calculer la fraction d\'un nombre ?',
                        answer: '🎯 Prendre 3/4 de 80, c\'est calculer 3/4 x 80.\n\n'
                            + 'Exemple : 3/4 x 80 = (3 x 80) / 4 = 240 / 4 = 60.\n\n'
                            + 'En gros : "de" veut dire "multiplier".\n\n'
                            + '💡 Astuce dys : divise d\'abord par le bas (80 ÷ 4 = 20), puis multiplie par le haut (20 x 3 = 60). C\'est plus facile.\n\n'
                            + '⚠️ Piege Brevet : confondre "les 3/4 de 80" et "80 divise par 3/4". Ce n\'est PAS la meme chose.'
                    },
                    // --- 10. Comparer des fractions ---
                    {
                        question: 'Comment comparer deux fractions ?',
                        answer: '🎯 On les met sur le MEME denominateur, puis on compare les numerateurs.\n\n'
                            + 'Exemple : comparer 3/5 et 2/3.\n'
                            + '3/5 = 9/15. 2/3 = 10/15.\n'
                            + '9 < 10, donc 3/5 < 2/3.\n\n'
                            + 'En gros : meme denominateur → le plus grand numerateur gagne.\n\n'
                            + '💡 Astuce dys : pense a deux pizzas coupees en 15 parts. 9 parts < 10 parts.\n\n'
                            + '⚠️ Piege Brevet : comparer directement 3/5 et 2/3 sans denominateur commun → erreur assuree.'
                    },
                    // --- 11. Fraction negative ---
                    {
                        question: 'C\'est quoi une fraction negative ?',
                        answer: '🎯 Le signe moins peut etre devant le haut, devant le bas, ou devant la fraction. C\'est pareil.\n\n'
                            + 'Exemple : -3/5 = 3/(-5) = -(3/5). C\'est le MEME nombre.\n\n'
                            + 'En gros : un seul signe moins → la fraction est negative.\n\n'
                            + '💡 Astuce dys : mets toujours le moins DEVANT la fraction. C\'est plus clair.\n\n'
                            + '⚠️ Piege Brevet : deux signes moins s\'annulent. (-3)/(-5) = 3/5 (positif !).'
                    },
                    // --- 12. Ecriture decimale et fraction ---
                    {
                        question: 'Comment passer d\'une fraction a un nombre decimal ?',
                        answer: '🎯 On divise le numerateur par le denominateur.\n\n'
                            + 'Exemple : 3/4 = 3 ÷ 4 = 0,75.\n'
                            + '1/3 = 1 ÷ 3 = 0,333... (ca ne s\'arrete jamais).\n\n'
                            + 'En gros : une fraction = une division.\n\n'
                            + 'Mot difficile : "decimal" = nombre a virgule.\n\n'
                            + '💡 Astuce dys : retiens les classiques : 1/2 = 0,5 ; 1/4 = 0,25 ; 3/4 = 0,75 ; 1/5 = 0,2.\n\n'
                            + '⚠️ Piege Brevet : ecrire 1/3 = 0,33 au lieu de 0,333... Precise "valeur approchee" si tu arrondis.'
                    },
                    // --- 13. Produit en croix ---
                    {
                        question: 'C\'est quoi le produit en croix ?',
                        answer: '🎯 Si a/b = c/d, alors a x d = b x c.\n\n'
                            + 'Exemple : 3/x = 6/10.\n'
                            + 'Produit en croix : 3 x 10 = x x 6.\n'
                            + '30 = 6x. x = 5.\n\n'
                            + 'En gros : on multiplie en diagonale et on egalise.\n\n'
                            + '💡 Astuce dys : dessine un X entre les 4 nombres. Multiplie en suivant les diagonales.\n\n'
                            + '⚠️ Piege Brevet : utiliser le produit en croix quand il n\'y a PAS d\'egalite entre fractions.'
                    },
                    // --- 14. Fractions et pourcentages ---
                    {
                        question: 'Comment passer d\'une fraction a un pourcentage ?',
                        answer: '🎯 On multiplie la fraction par 100.\n\n'
                            + 'Exemple : 3/4 en pourcentage → 3/4 x 100 = 75%.\n'
                            + '1/5 en pourcentage → 1/5 x 100 = 20%.\n\n'
                            + 'En gros : fraction x 100 = pourcentage.\n\n'
                            + '💡 Astuce dys : retiens les classiques : 1/2 = 50%, 1/4 = 25%, 3/4 = 75%, 1/5 = 20%.\n\n'
                            + '⚠️ Piege Brevet : confondre le sens. 25% = 25/100 = 1/4 (pas 1/25).'
                    }
                ],
                quiz: [
                    { question: 'Combien vaut \\( \\frac{2}{5} + \\frac{1}{3} \\) ?', options: ['\\( \\frac{3}{8} \\)', '\\( \\frac{11}{15} \\)', '\\( \\frac{7}{15} \\)', '\\( \\frac{3}{15} \\)'], correctIndex: 1, explanation: 'Denominateur commun = 15. 2/5 = 6/15. 1/3 = 5/15. 6/15 + 5/15 = 11/15.' },
                    { question: 'Combien vaut \\( \\frac{3}{4} \\times \\frac{2}{5} \\) ?', options: ['\\( \\frac{5}{9} \\)', '\\( \\frac{6}{20} \\)', '\\( \\frac{3}{10} \\)', '\\( \\frac{6}{9} \\)'], correctIndex: 2, explanation: '3/4 x 2/5 = 6/20. On simplifie : 6/20 = 3/10.' },
                    { question: 'Combien vaut \\( \\frac{3}{4} \\div \\frac{2}{5} \\) ?', options: ['\\( \\frac{6}{20} \\)', '\\( \\frac{15}{8} \\)', '\\( \\frac{5}{8} \\)', '\\( \\frac{3}{10} \\)'], correctIndex: 1, explanation: 'On retourne la 2e fraction : 3/4 x 5/2 = 15/8.' },
                    { question: 'La fraction irreductible de \\( \\frac{12}{18} \\) est :', options: ['\\( \\frac{6}{9} \\)', '\\( \\frac{4}{6} \\)', '\\( \\frac{2}{3} \\)', '\\( \\frac{3}{2} \\)'], correctIndex: 2, explanation: 'PGCD de 12 et 18 = 6. 12 ÷ 6 = 2, 18 ÷ 6 = 3. Resultat : 2/3.' },
                    { question: 'Combien vaut \\( \\frac{7}{8} - \\frac{1}{4} \\) ?', options: ['\\( \\frac{6}{4} \\)', '\\( \\frac{5}{8} \\)', '\\( \\frac{6}{8} \\)', '\\( \\frac{3}{4} \\)'], correctIndex: 1, explanation: '1/4 = 2/8. 7/8 - 2/8 = 5/8.' },
                    { question: 'Quel est \\( \\frac{3}{5} \\) de 80 ?', options: ['48', '60', '24', '16'], correctIndex: 0, explanation: '3/5 x 80 = 240 / 5 = 48.' },
                    { question: 'Laquelle est plus grande : \\( \\frac{3}{7} \\) ou \\( \\frac{2}{5} \\) ?', options: ['\\( \\frac{3}{7} \\)', '\\( \\frac{2}{5} \\)', 'Elles sont egales', 'On ne peut pas comparer'], correctIndex: 0, explanation: '3/7 = 15/35. 2/5 = 14/35. 15 > 14, donc 3/7 > 2/5.' },
                    { question: '\\( \\frac{1}{3} \\) en pourcentage vaut environ :', options: ['30%', '33,3%', '25%', '50%'], correctIndex: 1, explanation: '1/3 x 100 = 33,33...% ≈ 33,3%.' },
                    { question: 'Si \\( \\frac{x}{6} = \\frac{5}{3} \\), combien vaut x ?', options: ['10', '5', '15', '2'], correctIndex: 0, explanation: 'Produit en croix : 3x = 30, donc x = 10.' },
                    { question: 'Combien vaut \\( \\frac{2}{3} + \\frac{2}{3} \\times \\frac{1}{2} \\) ?', options: ['\\( \\frac{2}{3} \\)', '\\( 1 \\)', '\\( \\frac{4}{6} \\)', '\\( \\frac{1}{3} \\)'], correctIndex: 1, explanation: 'Priorite : d\'abord 2/3 x 1/2 = 2/6 = 1/3. Puis 2/3 + 1/3 = 3/3 = 1.' }
                ]
            },

            // ═══════════════════════════════════════════════════════════════
            // SECTION 2 — Puissances et Racines
            // ═══════════════════════════════════════════════════════════════
            {
                id: 'puissances-racines',
                title: 'Puissances et Racines',
                icon: '⚡',
                content: '<h3>Puissances</h3>'
                    + '<ul>'
                    + '<li><strong>a^n</strong> = a multiplie par lui-meme n fois.</li>'
                    + '<li><strong>a^0 = 1</strong> (toujours, si a ≠ 0).</li>'
                    + '<li><strong>a^(-n) = 1/a^n</strong>.</li>'
                    + '</ul>'
                    + '<h3>Racines carrees</h3>'
                    + '<ul>'
                    + '<li><strong>racine(a)</strong> = le nombre positif dont le carre vaut a.</li>'
                    + '<li><strong>Simplifier</strong> : racine(a x b) = racine(a) x racine(b).</li>'
                    + '</ul>',
                flashcards: [
                    // --- 1. Puissance positive ---
                    {
                        question: 'C\'est quoi une puissance positive ?',
                        answer: '🎯 a^n veut dire : on multiplie a par lui-meme n fois.\n\n'
                            + 'Exemple : 3^4 = 3 x 3 x 3 x 3 = 81.\n'
                            + '2^5 = 2 x 2 x 2 x 2 x 2 = 32.\n\n'
                            + 'En gros : le petit nombre en haut dit combien de fois on multiplie.\n\n'
                            + 'Mot difficile : "exposant" = le petit nombre en haut a droite.\n\n'
                            + '💡 Astuce dys : 2^3 = "2 fois 2 fois 2". Compte les 2 sur tes doigts : 3 doigts = 3 fois le 2.\n\n'
                            + '⚠️ Piege Brevet : 2^3 = 8, PAS 6. C\'est une multiplication repetee, pas une addition (2 x 3 = 6 ≠ 2^3).'
                    },
                    // --- 2. Puissance negative ---
                    {
                        question: 'C\'est quoi une puissance negative ?',
                        answer: '🎯 a^(-n) = 1 / a^n. On passe SOUS la barre de fraction.\n\n'
                            + 'Exemple : 3^(-2) = 1 / 3^2 = 1/9.\n'
                            + '10^(-3) = 1 / 10^3 = 1/1000 = 0,001.\n\n'
                            + 'En gros : exposant negatif = on retourne sous la fraction.\n\n'
                            + '💡 Astuce dys : "Negatif = ca descend." Le nombre passe EN-DESSOUS de la barre.\n\n'
                            + '⚠️ Piege Brevet : 3^(-2) ≠ -9. Le moins est dans l\'exposant, PAS devant le resultat.'
                    },
                    // --- 3. a^0 ---
                    {
                        question: 'Combien vaut a^0 ?',
                        answer: '🎯 a^0 = 1. Toujours. (a doit etre different de 0.)\n\n'
                            + 'Exemples : 5^0 = 1. 100^0 = 1. (-7)^0 = 1.\n\n'
                            + 'En gros : n\'importe quel nombre a la puissance 0 vaut 1.\n\n'
                            + '💡 Astuce dys : "Zero en haut = Un en bas." 0 → 1. C\'est magique mais c\'est la regle.\n\n'
                            + '⚠️ Piege Brevet : repondre 0 au lieu de 1. C\'est toujours 1, pas 0 !'
                    },
                    // --- 4. Produit de puissances ---
                    {
                        question: 'Comment multiplier des puissances de meme base ?',
                        answer: '🎯 On ADDITIONNE les exposants. a^n x a^m = a^(n+m).\n\n'
                            + 'Exemple : 2^3 x 2^4 = 2^(3+4) = 2^7 = 128.\n\n'
                            + 'En gros : meme base → on garde la base, on additionne les exposants.\n\n'
                            + '💡 Astuce dys : "Multiplie la base → Additionne les puissances." M → A.\n\n'
                            + '⚠️ Piege Brevet : ca marche SEULEMENT si la base est la meme. 2^3 x 3^4 ne se simplifie PAS.'
                    },
                    // --- 5. Quotient de puissances ---
                    {
                        question: 'Comment diviser des puissances de meme base ?',
                        answer: '🎯 On SOUSTRAIT les exposants. a^n / a^m = a^(n-m).\n\n'
                            + 'Exemple : 5^7 / 5^3 = 5^(7-3) = 5^4 = 625.\n\n'
                            + 'En gros : meme base → on garde la base, on soustrait les exposants.\n\n'
                            + '💡 Astuce dys : "Divise la base → Soustrait les puissances." D → S.\n\n'
                            + '⚠️ Piege Brevet : l\'ordre compte ! 5^3 / 5^7 = 5^(-4) = 1/625 (pas 5^4).'
                    },
                    // --- 6. Puissance d'une puissance ---
                    {
                        question: 'Comment calculer (a^n)^m ?',
                        answer: '🎯 On MULTIPLIE les exposants. (a^n)^m = a^(n x m).\n\n'
                            + 'Exemple : (2^3)^4 = 2^(3 x 4) = 2^12 = 4096.\n\n'
                            + 'En gros : puissance d\'une puissance → on multiplie les exposants.\n\n'
                            + '💡 Astuce dys : "Puissance de Puissance → on les Multiplie." PPM.\n\n'
                            + '⚠️ Piege Brevet : ne pas confondre (2^3)^4 = 2^12 et 2^(3^4) = 2^81. Les parentheses changent tout !'
                    },
                    // --- 7. Notation scientifique ---
                    {
                        question: 'C\'est quoi la notation scientifique ?',
                        answer: '🎯 Un nombre ecrit sous la forme a x 10^n. Avec 1 ≤ a < 10.\n\n'
                            + 'Exemples : 4500 = 4,5 x 10^3. 0,0032 = 3,2 x 10^(-3).\n\n'
                            + 'En gros : un seul chiffre (pas 0) avant la virgule, fois une puissance de 10.\n\n'
                            + 'Mot difficile : "notation scientifique" = facon d\'ecrire les tres grands ou tres petits nombres.\n\n'
                            + '💡 Astuce dys : compte combien de fois tu deplace la virgule. Vers la gauche = exposant positif. Vers la droite = exposant negatif.\n\n'
                            + '⚠️ Piege Brevet : 45 x 10^2 n\'est PAS en notation scientifique (45 ≥ 10). Il faut 4,5 x 10^3.'
                    },
                    // --- 8. Puissances de 10 ---
                    {
                        question: 'Comment calculer avec les puissances de 10 ?',
                        answer: '🎯 10^n = 1 suivi de n zeros. 10^(-n) = 0, suivi de (n-1) zeros puis 1.\n\n'
                            + 'Exemples : 10^3 = 1000. 10^(-2) = 0,01.\n'
                            + '3 x 10^4 = 30 000. 7 x 10^(-3) = 0,007.\n\n'
                            + 'En gros : l\'exposant dit combien de zeros il y a.\n\n'
                            + '💡 Astuce dys : exposant positif = grand nombre (beaucoup de zeros). Exposant negatif = petit nombre (apres la virgule).\n\n'
                            + '⚠️ Piege Brevet : 10^0 = 1 (pas 10, pas 0).'
                    },
                    // --- 9. Racine carree definition ---
                    {
                        question: 'C\'est quoi une racine carree ?',
                        answer: '🎯 racine(a) = le nombre POSITIF qui, multiplie par lui-meme, donne a.\n\n'
                            + 'Exemple : racine(25) = 5 car 5 x 5 = 25.\n'
                            + 'racine(9) = 3 car 3 x 3 = 9.\n'
                            + 'racine(2) ≈ 1,414 (nombre a virgule infinie).\n\n'
                            + 'En gros : racine carree = l\'inverse du carre.\n\n'
                            + '💡 Astuce dys : "racine" comme une plante. Elle pousse du carre pour donner le nombre.\n\n'
                            + '⚠️ Piege Brevet : racine(25) = 5. PAS -5. La racine est TOUJOURS positive.'
                    },
                    // --- 10. Simplifier racine ---
                    {
                        question: 'Comment simplifier une racine carree ?',
                        answer: '🎯 On cherche un CARRE PARFAIT qui se cache a l\'interieur.\n\n'
                            + 'Regle : racine(a x b) = racine(a) x racine(b).\n\n'
                            + 'Exemple : racine(50) = racine(25 x 2) = racine(25) x racine(2) = 5 x racine(2).\n'
                            + 'racine(72) = racine(36 x 2) = 6 x racine(2).\n\n'
                            + 'En gros : cherche le plus grand carre parfait qui divise ton nombre.\n\n'
                            + '💡 Astuce dys : carres parfaits a connaitre → 4, 9, 16, 25, 36, 49, 64, 81, 100.\n\n'
                            + '⚠️ Piege Brevet : racine(50) ≠ 25. Ne JAMAIS diviser par 2 sous la racine.'
                    },
                    // --- 11. Racine et operations ---
                    {
                        question: 'Peut-on additionner des racines carrees ?',
                        answer: '🎯 On peut additionner des racines SEULEMENT si c\'est la MEME racine.\n\n'
                            + 'Exemple : 3 x racine(2) + 5 x racine(2) = 8 x racine(2). OK !\n'
                            + 'MAIS : racine(2) + racine(3) ne se simplifie PAS.\n\n'
                            + 'En gros : meme racine = on additionne les nombres devant. Racines differentes = on touche a rien.\n\n'
                            + '💡 Astuce dys : c\'est comme les x en algebre. 3x + 5x = 8x, mais x + y reste x + y.\n\n'
                            + '⚠️ Piege Brevet : racine(4) + racine(9) ≠ racine(13). C\'est 2 + 3 = 5.'
                    },
                    // --- 12. Carres parfaits ---
                    {
                        question: 'C\'est quoi un carre parfait ?',
                        answer: '🎯 Un carre parfait = un nombre obtenu en multipliant un entier par lui-meme.\n\n'
                            + 'Liste : 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144.\n'
                            + 'Car : 1x1, 2x2, 3x3, 4x4, 5x5, 6x6, 7x7, 8x8, 9x9, 10x10, 11x11, 12x12.\n\n'
                            + 'En gros : si la racine carree tombe juste, c\'est un carre parfait.\n\n'
                            + '💡 Astuce dys : apprends la liste par coeur comme une chanson : "1, 4, 9, 16, 25..."\n\n'
                            + '⚠️ Piege Brevet : oublier que 1 est un carre parfait (1 x 1 = 1).'
                    },
                    // --- 13. Produit/quotient de puissances de 10 ---
                    {
                        question: 'Comment multiplier ou diviser des puissances de 10 ?',
                        answer: '🎯 Memes regles que les autres puissances.\n\n'
                            + '10^a x 10^b = 10^(a+b).\n'
                            + '10^a / 10^b = 10^(a-b).\n\n'
                            + 'Exemples : 10^3 x 10^5 = 10^8.\n'
                            + '10^2 / 10^7 = 10^(-5).\n\n'
                            + 'En gros : on additionne ou soustrait les exposants.\n\n'
                            + '💡 Astuce dys : c\'est logique. 1000 x 100000 = 100 000 000. 3 zeros + 5 zeros = 8 zeros.\n\n'
                            + '⚠️ Piege Brevet : attention aux exposants negatifs. 10^(-2) x 10^5 = 10^3 (pas 10^(-10)).'
                    },
                    // --- 14. Notation scientifique et operations ---
                    {
                        question: 'Comment multiplier deux nombres en notation scientifique ?',
                        answer: '🎯 On multiplie les "a" entre eux, et on additionne les exposants.\n\n'
                            + 'Exemple : (3 x 10^4) x (2 x 10^5) = (3 x 2) x 10^(4+5) = 6 x 10^9.\n'
                            + 'Autre : (4 x 10^3) x (5 x 10^2) = 20 x 10^5 = 2 x 10^6.\n\n'
                            + 'En gros : multiplie les nombres, additionne les exposants. Reajuste si besoin.\n\n'
                            + '💡 Astuce dys : si le nombre devant depasse 10, deplace la virgule et ajoute 1 a l\'exposant.\n\n'
                            + '⚠️ Piege Brevet : 20 x 10^5 n\'est PAS en notation scientifique. Il faut ecrire 2 x 10^6.'
                    }
                ],
                quiz: [
                    { question: 'Combien vaut \\( 3^{-2} \\) ?', options: ['\\( -9 \\)', '\\( -6 \\)', '\\( \\frac{1}{9} \\)', '\\( 9 \\)'], correctIndex: 2, explanation: '3^(-2) = 1/3^2 = 1/9. Exposant negatif = on passe sous la fraction.' },
                    { question: 'Combien vaut \\( 5^0 \\) ?', options: ['0', '5', '1', '50'], correctIndex: 2, explanation: 'Tout nombre (≠ 0) a la puissance 0 vaut 1.' },
                    { question: 'Combien vaut \\( 2^3 \\times 2^4 \\) ?', options: ['\\( 2^{7} \\)', '\\( 2^{12} \\)', '\\( 4^{7} \\)', '\\( 2^{34} \\)'], correctIndex: 0, explanation: 'Meme base → on additionne les exposants. 2^(3+4) = 2^7 = 128.' },
                    { question: 'L\'ecriture scientifique de 0,0056 est :', options: ['\\( 56 \\times 10^{-4} \\)', '\\( 5,6 \\times 10^{-3} \\)', '\\( 0,56 \\times 10^{-2} \\)', '\\( 5,6 \\times 10^{3} \\)'], correctIndex: 1, explanation: 'Un seul chiffre avant la virgule (entre 1 et 10) : 5,6 x 10^(-3).' },
                    { question: 'Combien vaut \\( \\sqrt{48} \\) sous forme simplifiee ?', options: ['\\( 6\\sqrt{2} \\)', '\\( 4\\sqrt{3} \\)', '\\( 2\\sqrt{12} \\)', '\\( 3\\sqrt{4} \\)'], correctIndex: 1, explanation: 'racine(48) = racine(16 x 3) = 4 x racine(3).' },
                    { question: 'Combien vaut \\( (10^3)^2 \\) ?', options: ['\\( 10^5 \\)', '\\( 10^6 \\)', '\\( 10^9 \\)', '\\( 10^{32} \\)'], correctIndex: 1, explanation: 'Puissance de puissance → on multiplie : (10^3)^2 = 10^(3x2) = 10^6.' },
                    { question: 'Combien vaut \\( 10^4 \\div 10^7 \\) ?', options: ['\\( 10^{3} \\)', '\\( 10^{11} \\)', '\\( 10^{-3} \\)', '\\( 10^{28} \\)'], correctIndex: 2, explanation: 'On soustrait les exposants : 10^(4-7) = 10^(-3).' },
                    { question: '\\( \\sqrt{2} + \\sqrt{2} \\) vaut :', options: ['\\( \\sqrt{4} \\)', '\\( 2\\sqrt{2} \\)', '\\( 2 \\)', '\\( 4 \\)'], correctIndex: 1, explanation: '1 x racine(2) + 1 x racine(2) = 2 x racine(2). On additionne les coefficients.' },
                    { question: 'Quelle est la notation scientifique de 78 000 ?', options: ['\\( 78 \\times 10^3 \\)', '\\( 7,8 \\times 10^4 \\)', '\\( 0,78 \\times 10^5 \\)', '\\( 780 \\times 10^2 \\)'], correctIndex: 1, explanation: '78 000 = 7,8 x 10^4 (un seul chiffre avant la virgule, entre 1 et 10).' },
                    { question: '\\( (3 \\times 10^2) \\times (4 \\times 10^5) \\) en notation scientifique :', options: ['\\( 12 \\times 10^{7} \\)', '\\( 1,2 \\times 10^{8} \\)', '\\( 1,2 \\times 10^{7} \\)', '\\( 12 \\times 10^{10} \\)'], correctIndex: 1, explanation: '3 x 4 = 12. 10^2 x 10^5 = 10^7. 12 x 10^7 = 1,2 x 10^8.' }
                ]
            },

            // ═══════════════════════════════════════════════════════════════
            // SECTION 3 — Calcul litteral
            // ═══════════════════════════════════════════════════════════════
            {
                id: 'calcul-litteral',
                title: 'Calcul litteral',
                icon: '🔤',
                content: '<h3>Calcul litteral</h3>'
                    + '<ul>'
                    + '<li><strong>Developper</strong> : ouvrir les parentheses.</li>'
                    + '<li><strong>Factoriser</strong> : remettre des parentheses.</li>'
                    + '<li><strong>Identites remarquables</strong> : 3 formules a connaitre par coeur.</li>'
                    + '</ul>',
                flashcards: [
                    // --- 1. Simple distributivite ---
                    {
                        question: 'Comment developper k(a + b) ?',
                        answer: '🎯 On DISTRIBUE : k multiplie chaque terme dans la parenthese.\n\n'
                            + 'Formule : k(a + b) = ka + kb.\n\n'
                            + 'Exemple : 3(x + 2) = 3 x x + 3 x 2 = 3x + 6.\n'
                            + 'Autre : 5(2x - 4) = 10x - 20.\n\n'
                            + 'En gros : le nombre devant multiplie chaque element a l\'interieur.\n\n'
                            + '💡 Astuce dys : pense a une fleche qui part du nombre devant vers chaque terme. 3 → x et 3 → 2.\n\n'
                            + '⚠️ Piege Brevet : oublier de multiplier le DEUXIEME terme. 3(x + 2) ≠ 3x + 2.'
                    },
                    // --- 2. Double distributivite ---
                    {
                        question: 'Comment developper (a + b)(c + d) ?',
                        answer: '🎯 Chaque terme de la 1re parenthese multiplie chaque terme de la 2e.\n\n'
                            + 'Formule : (a + b)(c + d) = ac + ad + bc + bd.\n\n'
                            + 'Exemple : (x + 3)(x + 2) = x.x + x.2 + 3.x + 3.2 = x^2 + 2x + 3x + 6 = x^2 + 5x + 6.\n\n'
                            + 'En gros : 4 multiplications, puis on regroupe.\n\n'
                            + '💡 Astuce dys : methode "FOIL" = First, Outside, Inside, Last (Premier, Exterieur, Interieur, Dernier).\n\n'
                            + '⚠️ Piege Brevet : oublier un des 4 produits. Il faut TOUJOURS 4 termes avant de reduire.'
                    },
                    // --- 3. Factoriser (facteur commun) ---
                    {
                        question: 'Comment factoriser avec un facteur commun ?',
                        answer: '🎯 On cherche ce qui est COMMUN a tous les termes. On le met devant.\n\n'
                            + 'Exemple : 6x + 9 = 3(2x + 3). Car 3 est dans 6x ET dans 9.\n'
                            + 'Autre : x^2 + 5x = x(x + 5). Car x est dans les deux termes.\n\n'
                            + 'En gros : factoriser = l\'inverse de developper. On remet les parentheses.\n\n'
                            + '💡 Astuce dys : demande-toi "quel nombre divise TOUS les termes ?". C\'est le facteur commun.\n\n'
                            + '⚠️ Piege Brevet : ne pas prendre le PLUS GRAND facteur commun. 6x + 9 = 3(2x + 3), pas 1(6x + 9).'
                    },
                    // --- 4. Identite (a+b)^2 ---
                    {
                        question: 'Comment developper (a + b)^2 ?',
                        answer: '🎯 (a + b)^2 = a^2 + 2ab + b^2.\n\n'
                            + 'Exemple : (x + 3)^2 = x^2 + 2(x)(3) + 3^2 = x^2 + 6x + 9.\n\n'
                            + 'En gros : le carre du premier + 2 fois le produit + le carre du dernier.\n\n'
                            + '💡 Astuce dys : "Le Premier au carre, le Double produit, le Dernier au carre" → PDD.\n'
                            + 'Retiens : "Papa Danse Doucement."\n\n'
                            + '⚠️ Piege Brevet : oublier le DOUBLE PRODUIT (2ab). (x + 3)^2 ≠ x^2 + 9 !'
                    },
                    // --- 5. Identite (a-b)^2 ---
                    {
                        question: 'Comment developper (a - b)^2 ?',
                        answer: '🎯 (a - b)^2 = a^2 - 2ab + b^2.\n\n'
                            + 'Exemple : (x - 5)^2 = x^2 - 2(x)(5) + 5^2 = x^2 - 10x + 25.\n\n'
                            + 'En gros : meme chose que (a+b)^2 MAIS le double produit est NEGATIF.\n\n'
                            + '💡 Astuce dys : c\'est comme (a+b)^2 mais le milieu a un MOINS. Le dernier terme est TOUJOURS positif.\n\n'
                            + '⚠️ Piege Brevet : ecrire b^2 negatif. Le dernier carre est TOUJOURS +b^2, jamais -b^2.'
                    },
                    // --- 6. Identite (a+b)(a-b) ---
                    {
                        question: 'Comment developper (a + b)(a - b) ?',
                        answer: '🎯 (a + b)(a - b) = a^2 - b^2.\n\n'
                            + 'Exemple : (x + 4)(x - 4) = x^2 - 16.\n'
                            + 'Autre : (3x + 7)(3x - 7) = 9x^2 - 49.\n\n'
                            + 'En gros : somme x difference = carre du 1er - carre du 2e. Le terme du milieu disparait.\n\n'
                            + '💡 Astuce dys : "Plus fois Moins = Moins." Les termes du milieu s\'annulent.\n\n'
                            + '⚠️ Piege Brevet : ca ne marche PAS avec un + final. x^2 + 9 ne se factorise PAS comme ca.'
                    },
                    // --- 7. Factoriser avec (a+b)^2 ---
                    {
                        question: 'Comment reconnaitre (a + b)^2 pour factoriser ?',
                        answer: '🎯 Si tu vois a^2 + 2ab + b^2, c\'est (a + b)^2.\n\n'
                            + 'Exemple : x^2 + 6x + 9 = (x + 3)^2.\n'
                            + 'Pourquoi ? Car x^2 = (x)^2, 9 = (3)^2, et 6x = 2(x)(3).\n\n'
                            + 'En gros : verifie que le terme du milieu = 2 fois le produit des racines.\n\n'
                            + '💡 Astuce dys : regarde le 1er et le dernier. Fais la racine. Verifie le milieu.\n\n'
                            + '⚠️ Piege Brevet : x^2 + 5x + 9 n\'est PAS (x+3)^2 car 2(x)(3) = 6x ≠ 5x.'
                    },
                    // --- 8. Factoriser avec a^2 - b^2 ---
                    {
                        question: 'Comment factoriser a^2 - b^2 ?',
                        answer: '🎯 a^2 - b^2 = (a + b)(a - b).\n\n'
                            + 'Exemple : x^2 - 9 = x^2 - 3^2 = (x + 3)(x - 3).\n'
                            + 'Autre : 4x^2 - 25 = (2x)^2 - 5^2 = (2x + 5)(2x - 5).\n\n'
                            + 'En gros : un carre MOINS un carre → somme fois difference.\n\n'
                            + '💡 Astuce dys : quand tu vois "truc^2 - bidule^2", ecris directement (truc + bidule)(truc - bidule).\n\n'
                            + '⚠️ Piege Brevet : ca ne marche QUE avec un MOINS. x^2 + 9 ne se factorise PAS avec cette identite.'
                    },
                    // --- 9. Reduire une expression ---
                    {
                        question: 'Comment reduire une expression ?',
                        answer: '🎯 On regroupe les termes "semblables" (ceux qui ont le meme x).\n\n'
                            + 'Exemple : 3x^2 + 5x + 2x^2 - 3x + 1 = (3x^2 + 2x^2) + (5x - 3x) + 1 = 5x^2 + 2x + 1.\n\n'
                            + 'En gros : on additionne les x^2 ensemble, les x ensemble, les nombres ensemble.\n\n'
                            + '💡 Astuce dys : utilise des couleurs. x^2 en rouge, x en bleu, nombres en vert. Additionne chaque couleur.\n\n'
                            + '⚠️ Piege Brevet : on ne peut PAS additionner x^2 et x. 3x^2 + 5x ≠ 8x^3.'
                    },
                    // --- 10. Developper avec un signe moins devant ---
                    {
                        question: 'Comment developper -(a + b) ou -(a - b) ?',
                        answer: '🎯 Le signe moins devant change TOUS les signes a l\'interieur.\n\n'
                            + '-(a + b) = -a - b.\n'
                            + '-(a - b) = -a + b.\n\n'
                            + 'Exemple : -(3x + 5) = -3x - 5.\n'
                            + '-(2x - 7) = -2x + 7.\n\n'
                            + 'En gros : le moins distribue un changement de signe a chaque terme.\n\n'
                            + '💡 Astuce dys : pense que le - devant est comme un miroir. Chaque + devient - et chaque - devient +.\n\n'
                            + '⚠️ Piege Brevet : oublier de changer le signe du 2e terme. -(3x + 5) ≠ -3x + 5.'
                    },
                    // --- 11. Factorisation en etapes ---
                    {
                        question: 'Que faire quand on ne voit pas le facteur commun tout de suite ?',
                        answer: '🎯 Decompose chaque terme en facteurs, puis cherche ce qui revient partout.\n\n'
                            + 'Exemple : 12x^2 + 8x.\n'
                            + '12x^2 = 4 x 3 x x x x. 8x = 4 x 2 x x.\n'
                            + 'Facteur commun = 4x.\n'
                            + '12x^2 + 8x = 4x(3x + 2).\n\n'
                            + 'En gros : decompose, puis repere ce qui se repete.\n\n'
                            + '💡 Astuce dys : ecris chaque terme comme une multiplication. Entoure ce qui est pareil.\n\n'
                            + '⚠️ Piege Brevet : ne pas factoriser completement. 12x^2 + 8x = 2(6x^2 + 4x) → pas fini ! → 4x(3x + 2).'
                    },
                    // --- 12. Tester une identite remarquable ---
                    {
                        question: 'Comment savoir QUELLE identite remarquable utiliser ?',
                        answer: '🎯 Regarde la forme de l\'expression.\n\n'
                            + '• Tu vois a^2 + 2ab + b^2 → c\'est (a + b)^2.\n'
                            + '• Tu vois a^2 - 2ab + b^2 → c\'est (a - b)^2.\n'
                            + '• Tu vois a^2 - b^2 → c\'est (a + b)(a - b).\n\n'
                            + 'En gros : 3 termes avec un + au milieu → (a+b)^2. Avec un - → (a-b)^2. 2 termes → a^2 - b^2.\n\n'
                            + '💡 Astuce dys : "3 termes + = plus, 3 termes - = moins, 2 termes = produit."\n\n'
                            + '⚠️ Piege Brevet : verifier le double produit ! C\'est lui qui confirme l\'identite.'
                    },
                    // --- 13. Expression litterale et substitution ---
                    {
                        question: 'Comment calculer la valeur d\'une expression pour x = 3 ?',
                        answer: '🎯 On REMPLACE x par 3 dans l\'expression.\n\n'
                            + 'Exemple : 2x^2 - 5x + 1 pour x = 3.\n'
                            + '= 2(3)^2 - 5(3) + 1\n'
                            + '= 2(9) - 15 + 1\n'
                            + '= 18 - 15 + 1 = 4.\n\n'
                            + 'En gros : remplace chaque x par le nombre, puis calcule.\n\n'
                            + '💡 Astuce dys : mets des parentheses autour du nombre. 2(3)^2, pas 23^2.\n\n'
                            + '⚠️ Piege Brevet : pour x = -2, attention aux signes ! (-2)^2 = 4 mais -2^2 = -4.'
                    },
                    // --- 14. Recap des 3 identites ---
                    {
                        question: 'Quelles sont les 3 identites remarquables a connaitre par coeur ?',
                        answer: '🎯 Les 3 formules magiques :\n\n'
                            + '1) (a + b)^2 = a^2 + 2ab + b^2\n'
                            + '2) (a - b)^2 = a^2 - 2ab + b^2\n'
                            + '3) (a + b)(a - b) = a^2 - b^2\n\n'
                            + 'En gros : 2 carres de somme/difference + 1 produit somme-difference.\n\n'
                            + '💡 Astuce dys : invente une phrase → "Plus Plus Plus" (++), "Moins Plus Plus" (-+), "Plus Moins = Difference des carres".\n'
                            + 'Ou retiens : la 1re et la 2e sont pareilles sauf le signe du milieu.\n\n'
                            + '⚠️ Piege Brevet : confondre les 3. Ecris-les au brouillon des le debut de l\'epreuve.'
                    }
                ],
                quiz: [
                    { question: 'Le developpement de \\( 3(2x - 4) \\) est :', options: ['\\( 6x - 4 \\)', '\\( 6x - 12 \\)', '\\( 5x - 7 \\)', '\\( 3x - 12 \\)'], correctIndex: 1, explanation: '3 x 2x = 6x et 3 x (-4) = -12. Resultat : 6x - 12.' },
                    { question: 'Le developpement de \\( (x + 5)^2 \\) est :', options: ['\\( x^2 + 25 \\)', '\\( x^2 + 5x + 25 \\)', '\\( x^2 + 10x + 25 \\)', '\\( x^2 + 10x + 10 \\)'], correctIndex: 2, explanation: '(a+b)^2 = a^2 + 2ab + b^2. Donc x^2 + 2(x)(5) + 25 = x^2 + 10x + 25.' },
                    { question: 'Le developpement de \\( (x - 3)^2 \\) est :', options: ['\\( x^2 - 9 \\)', '\\( x^2 - 6x + 9 \\)', '\\( x^2 - 3x + 9 \\)', '\\( x^2 + 6x + 9 \\)'], correctIndex: 1, explanation: '(a-b)^2 = a^2 - 2ab + b^2. Donc x^2 - 6x + 9.' },
                    { question: 'La factorisation de \\( x^2 - 16 \\) est :', options: ['\\( (x - 4)^2 \\)', '\\( (x + 4)(x - 4) \\)', '\\( (x - 8)(x + 2) \\)', '\\( (x + 16)(x - 1) \\)'], correctIndex: 1, explanation: 'x^2 - 4^2 = (x + 4)(x - 4). Identite a^2 - b^2 = (a+b)(a-b).' },
                    { question: 'La factorisation de \\( 6x + 15 \\) est :', options: ['\\( 6(x + 15) \\)', '\\( 3(2x + 5) \\)', '\\( 5(x + 3) \\)', '\\( 2(3x + 7) \\)'], correctIndex: 1, explanation: 'PGCD de 6 et 15 = 3. 6x/3 = 2x, 15/3 = 5. Resultat : 3(2x + 5).' },
                    { question: 'Le developpement de \\( (x + 2)(x - 2) \\) est :', options: ['\\( x^2 + 4 \\)', '\\( x^2 - 4 \\)', '\\( x^2 - 2 \\)', '\\( x^2 + 4x - 4 \\)'], correctIndex: 1, explanation: '(a+b)(a-b) = a^2 - b^2. Donc x^2 - 4.' },
                    { question: '\\( (x + 3)(x + 4) \\) developpe donne :', options: ['\\( x^2 + 7x + 12 \\)', '\\( x^2 + 12x + 7 \\)', '\\( x^2 + 7x + 7 \\)', '\\( x^2 + 12 \\)'], correctIndex: 0, explanation: 'x.x + x.4 + 3.x + 3.4 = x^2 + 4x + 3x + 12 = x^2 + 7x + 12.' },
                    { question: 'La forme reduite de \\( 5x - 3 + 2x + 7 \\) est :', options: ['\\( 7x + 4 \\)', '\\( 7x + 10 \\)', '\\( 3x + 4 \\)', '\\( 7x - 4 \\)'], correctIndex: 0, explanation: '(5x + 2x) + (-3 + 7) = 7x + 4.' },
                    { question: '\\( -(2x - 5) \\) vaut :', options: ['\\( -2x - 5 \\)', '\\( -2x + 5 \\)', '\\( 2x - 5 \\)', '\\( 2x + 5 \\)'], correctIndex: 1, explanation: 'Le moins change tous les signes : -2x + 5.' },
                    { question: 'La factorisation de \\( x^2 + 8x + 16 \\) est :', options: ['\\( (x + 4)^2 \\)', '\\( (x + 8)(x + 2) \\)', '\\( (x + 4)(x - 4) \\)', '\\( (x + 16)^2 \\)'], correctIndex: 0, explanation: 'x^2 + 8x + 16 = x^2 + 2(x)(4) + 4^2 = (x + 4)^2.' }
                ]
            },

            // ═══════════════════════════════════════════════════════════════
            // SECTION 4 — Equations
            // ═══════════════════════════════════════════════════════════════
            {
                id: 'equations',
                title: 'Equations',
                icon: '⚖️',
                content: '<h3>Equations</h3>'
                    + '<ul>'
                    + '<li><strong>Equation du 1er degre</strong> : isoler x pas a pas.</li>'
                    + '<li><strong>Equation produit nul</strong> : si A x B = 0, alors A = 0 ou B = 0.</li>'
                    + '<li><strong>Inequation</strong> : attention au signe qui change quand on multiplie par un negatif !</li>'
                    + '</ul>',
                flashcards: [
                    // --- 1. Equation 1er degre methode ---
                    {
                        question: 'Comment resoudre une equation du 1er degre, pas a pas ?',
                        answer: '🎯 On isole x en faisant la meme chose des deux cotes.\n\n'
                            + 'Exemple : 5x + 3 = 2x + 12.\n'
                            + 'Etape 1 : enlever 2x des 2 cotes → 3x + 3 = 12.\n'
                            + 'Etape 2 : enlever 3 des 2 cotes → 3x = 9.\n'
                            + 'Etape 3 : diviser par 3 → x = 3.\n\n'
                            + 'En gros : deplace les x d\'un cote, les nombres de l\'autre, puis divise.\n\n'
                            + '💡 Astuce dys : pense a une balance. Ce que tu fais a gauche, fais-le a droite.\n\n'
                            + '⚠️ Piege Brevet : oublier de changer le signe quand un terme change de cote.'
                    },
                    // --- 2. Verification ---
                    {
                        question: 'Comment verifier la solution d\'une equation ?',
                        answer: '🎯 Remplace x par ta reponse dans l\'equation de depart.\n\n'
                            + 'Exemple : 4x - 3 = 9. Tu trouves x = 3.\n'
                            + 'Verification : 4(3) - 3 = 12 - 3 = 9. Le cote gauche = le cote droit. C\'est bon !\n\n'
                            + 'En gros : remplace et verifie que les deux cotes sont egaux.\n\n'
                            + '📝 Astuce dys : au Brevet, la verification rapporte des points. Fais-la TOUJOURS.\n\n'
                            + '⚠️ Piege Brevet : ne pas verifier et rendre une mauvaise reponse. 30 secondes de verif = points sauves.'
                    },
                    // --- 3. Equation produit nul ---
                    {
                        question: 'C\'est quoi une equation produit nul ?',
                        answer: '🎯 Si A x B = 0, alors A = 0 ou B = 0.\n\n'
                            + 'Exemple : (x - 3)(x + 7) = 0.\n'
                            + 'Soit x - 3 = 0, donc x = 3.\n'
                            + 'Soit x + 7 = 0, donc x = -7.\n'
                            + 'Il y a DEUX solutions : x = 3 ou x = -7.\n\n'
                            + 'En gros : produit = 0 → un des facteurs = 0.\n\n'
                            + 'Mot difficile : "produit nul" = une multiplication qui vaut zero.\n\n'
                            + '💡 Astuce dys : "0 fois n\'importe quoi = 0". Donc un des deux DOIT etre 0.\n\n'
                            + '⚠️ Piege Brevet : oublier de donner les DEUX solutions.'
                    },
                    // --- 4. Equation produit nul (2) ---
                    {
                        question: 'Comment resoudre (2x - 6)(x + 4) = 0 ?',
                        answer: '🎯 On met chaque facteur egal a zero.\n\n'
                            + 'Soit 2x - 6 = 0 → 2x = 6 → x = 3.\n'
                            + 'Soit x + 4 = 0 → x = -4.\n'
                            + 'Solutions : x = 3 ou x = -4.\n\n'
                            + 'En gros : resous chaque morceau separement.\n\n'
                            + '💡 Astuce dys : barre un facteur, resous l\'autre. Puis inverse.\n\n'
                            + '⚠️ Piege Brevet : pour 2x - 6 = 0, il faut bien diviser par 2. x = 3, PAS x = 6.'
                    },
                    // --- 5. Mise en equation ---
                    {
                        question: 'Comment mettre un probleme en equation ?',
                        answer: '🎯 Etapes :\n'
                            + '1) Choisis x pour l\'inconnue.\n'
                            + '2) Traduis chaque mot en maths.\n'
                            + '3) Resous.\n'
                            + '4) Verifie.\n\n'
                            + 'Traductions utiles :\n'
                            + '"le double de" = 2x. "augmente de 5" = + 5. "la moitie de" = x/2.\n\n'
                            + 'Exemple : "Le triple d\'un nombre plus 4 vaut 19."\n'
                            + '→ 3x + 4 = 19 → 3x = 15 → x = 5.\n\n'
                            + 'En gros : traduis le francais en maths, mot par mot.\n\n'
                            + '💡 Astuce dys : souligne les mots-cles dans l\'enonce. "triple" = x3. "plus" = +.\n\n'
                            + '⚠️ Piege Brevet : oublier de repondre avec une phrase. "Le nombre cherche est 5."'
                    },
                    // --- 6. Inequation methode ---
                    {
                        question: 'Comment resoudre une inequation ?',
                        answer: '🎯 Comme une equation, SAUF : quand on multiplie ou divise par un NEGATIF, le signe s\'INVERSE.\n\n'
                            + 'Exemple : 3x - 7 < 5.\n'
                            + 'On ajoute 7 : 3x < 12.\n'
                            + 'On divise par 3 (positif, pas de changement) : x < 4.\n\n'
                            + 'En gros : meme methode, mais attention au signe negatif.\n\n'
                            + 'Mot difficile : "inequation" = equation avec <, >, ≤ ou ≥ au lieu de =.\n\n'
                            + '💡 Astuce dys : ecris "ATTENTION NEGATIF" en rouge dans ta tete.\n\n'
                            + '⚠️ Piege Brevet : le piege le plus frequent ! Diviser par un negatif sans changer le signe.'
                    },
                    // --- 7. Inequation avec signe qui change ---
                    {
                        question: 'Pourquoi le signe change quand on divise par un negatif ?',
                        answer: '🎯 Parce que l\'ordre s\'inverse avec les negatifs.\n\n'
                            + 'Exemple : -2x > 6.\n'
                            + 'On divise par -2 → le > devient <.\n'
                            + 'x < -3.\n\n'
                            + 'Verification : x = -4. -2(-4) = 8 > 6. Ca marche !\n'
                            + 'x = 0. -2(0) = 0. 0 > 6 ? Non. Donc x = 0 n\'est pas solution.\n\n'
                            + 'En gros : negatif = le signe s\'inverse. C\'est comme si le miroir retournait tout.\n\n'
                            + '💡 Astuce dys : retiens "NEGATIF = RETOURNE". Comme une crepe.\n\n'
                            + '⚠️ Piege Brevet : ecrire x > -3 au lieu de x < -3. Verifie toujours avec un nombre.'
                    },
                    // --- 8. Equation sans solution ---
                    {
                        question: 'Quand est-ce qu\'une equation n\'a PAS de solution ?',
                        answer: '🎯 Quand on arrive a une absurdite, comme 3 = 7.\n\n'
                            + 'Exemple : 2x + 3 = 2x + 7.\n'
                            + 'On enleve 2x des 2 cotes : 3 = 7.\n'
                            + 'C\'est FAUX → pas de solution.\n\n'
                            + 'En gros : si les x disparaissent et qu\'il reste quelque chose de faux → pas de solution.\n\n'
                            + '💡 Astuce dys : si a la fin il n\'y a plus de x mais les nombres ne sont pas egaux, ecris "pas de solution".\n\n'
                            + '⚠️ Piege Brevet : ne pas reconnaitre l\'impossibilite et continuer a chercher.'
                    },
                    // --- 9. Equation avec parentheses ---
                    {
                        question: 'Comment resoudre une equation avec des parentheses ?',
                        answer: '🎯 D\'abord, DEVELOPPE les parentheses. Ensuite, resous normalement.\n\n'
                            + 'Exemple : 2(x + 3) = 5x - 6.\n'
                            + 'Developper : 2x + 6 = 5x - 6.\n'
                            + 'Deplacer : 6 + 6 = 5x - 2x → 12 = 3x → x = 4.\n\n'
                            + 'En gros : developpe d\'abord, puis fais comme d\'habitude.\n\n'
                            + '💡 Astuce dys : etape 1 = ouvrir les parentheses. Etape 2 = regrouper. Etape 3 = isoler x.\n\n'
                            + '⚠️ Piege Brevet : mal developper les parentheses, surtout avec un signe - devant.'
                    },
                    // --- 10. Equation x^2 = a ---
                    {
                        question: 'Comment resoudre x^2 = a ?',
                        answer: '🎯 Si a > 0 : deux solutions, x = racine(a) ou x = -racine(a).\n'
                            + 'Si a = 0 : une seule solution, x = 0.\n'
                            + 'Si a < 0 : pas de solution.\n\n'
                            + 'Exemple : x^2 = 49.\n'
                            + 'x = 7 ou x = -7.\n\n'
                            + 'En gros : un carre positif a toujours 2 racines (+ et -).\n\n'
                            + '💡 Astuce dys : "carre → 2 reponses" (sauf si c\'est 0 ou negatif).\n\n'
                            + '⚠️ Piege Brevet : oublier la solution negative. x^2 = 25 → x = 5 ET x = -5.'
                    },
                    // --- 11. Intervalle de solutions ---
                    {
                        question: 'Comment noter les solutions d\'une inequation ?',
                        answer: '🎯 On utilise un INTERVALLE.\n\n'
                            + 'x > 3 → ]3 ; +infini[. (3 pas inclus.)\n'
                            + 'x ≤ -2 → ]-infini ; -2]. (-2 inclus.)\n\n'
                            + 'En gros : crochet [ ] = inclus. Parenthese ( ) ou ] [ = pas inclus.\n\n'
                            + 'Mot difficile : "intervalle" = tous les nombres entre deux bornes.\n\n'
                            + '💡 Astuce dys : crochet = le nombre est DANS le lot (on le garde). Parenthese = il est DEHORS.\n\n'
                            + '⚠️ Piege Brevet : utiliser un crochet avec l\'infini. C\'est TOUJOURS une parenthese devant l\'infini.'
                    },
                    // --- 12. Equation avec fractions ---
                    {
                        question: 'Comment resoudre une equation avec des fractions ?',
                        answer: '🎯 Multiplie TOUT par le denominateur pour supprimer les fractions.\n\n'
                            + 'Exemple : x/3 + 2 = 5.\n'
                            + 'Multiplie tout par 3 : x + 6 = 15.\n'
                            + 'x = 9.\n\n'
                            + 'En gros : supprime les fractions en multipliant, puis resous normalement.\n\n'
                            + '💡 Astuce dys : repere le denominateur, multiplie CHAQUE terme par ce nombre.\n\n'
                            + '⚠️ Piege Brevet : oublier de multiplier TOUS les termes. Si tu multiplies un cote, multiplie l\'autre aussi.'
                    },
                    // --- 13. Redaction type Brevet ---
                    {
                        question: 'Comment rediger la resolution d\'une equation au Brevet ?',
                        answer: '🎯 Methode de redaction :\n\n'
                            + '5x + 3 = 2x + 12\n'
                            + '5x - 2x = 12 - 3\n'
                            + '3x = 9\n'
                            + 'x = 9/3\n'
                            + 'x = 3\n\n'
                            + 'En gros : une etape par ligne. Pas de phrases, juste les calculs alignes.\n\n'
                            + '📝 Astuce dys : ecris une ligne = une operation. Aligne les signes "=" sous les "=".\n\n'
                            + '⚠️ Piege Brevet : sauter des etapes. Le correcteur veut voir CHAQUE etape.'
                    },
                    // --- 14. Inequation : ensemble solution ---
                    {
                        question: 'Comment representer la solution d\'une inequation sur une droite ?',
                        answer: '🎯 On dessine une droite graduee. On marque la borne. On colorie la zone solution.\n\n'
                            + 'Exemple : x < 4.\n'
                            + 'On met un rond VIDE sur 4 (pas inclus). On colorie vers la GAUCHE.\n\n'
                            + 'x ≥ -2.\n'
                            + 'On met un rond PLEIN sur -2 (inclus). On colorie vers la DROITE.\n\n'
                            + 'En gros : rond vide = strict (< ou >). Rond plein = large (≤ ou ≥).\n\n'
                            + '💡 Astuce dys : vide = "je ne prends PAS le point". Plein = "je PRENDS le point".\n\n'
                            + '⚠️ Piege Brevet : confondre le sens. x < 4 → a gauche de 4. x > 4 → a droite de 4.'
                    }
                ],
                quiz: [
                    { question: 'La solution de \\( 4x - 8 = 0 \\) est :', options: ['\\( x = -2 \\)', '\\( x = 2 \\)', '\\( x = 8 \\)', '\\( x = -8 \\)'], correctIndex: 1, explanation: '4x = 8, donc x = 8/4 = 2.' },
                    { question: 'Les solutions de \\( (x - 5)(x + 3) = 0 \\) sont :', options: ['\\( x = 5 \\) uniquement', '\\( x = -3 \\) uniquement', '\\( x = 5 \\) ou \\( x = -3 \\)', '\\( x = -5 \\) ou \\( x = 3 \\)'], correctIndex: 2, explanation: 'Produit nul : x - 5 = 0 donne x = 5. x + 3 = 0 donne x = -3.' },
                    { question: 'Si \\( -3x > 12 \\), alors :', options: ['\\( x > 4 \\)', '\\( x > -4 \\)', '\\( x < -4 \\)', '\\( x < 4 \\)'], correctIndex: 2, explanation: 'On divise par -3 (negatif) → le signe s\'inverse : x < -4.' },
                    { question: 'La solution de \\( 2(x + 3) = 5x - 6 \\) est :', options: ['\\( x = 4 \\)', '\\( x = 0 \\)', '\\( x = -4 \\)', '\\( x = 12 \\)'], correctIndex: 0, explanation: '2x + 6 = 5x - 6. Donc 12 = 3x, x = 4.' },
                    { question: 'L\'equation \\( x^2 = 49 \\) a pour solutions :', options: ['\\( x = 7 \\) uniquement', '\\( x = 7 \\) ou \\( x = -7 \\)', '\\( x = 49 \\)', '\\( x = -7 \\) uniquement'], correctIndex: 1, explanation: 'x^2 = 49 donne x = 7 ou x = -7.' },
                    { question: 'L\'equation \\( 3x + 2 = 3x + 9 \\) a :', options: ['Une solution : \\( x = 7 \\)', 'Une solution : \\( x = 0 \\)', 'Aucune solution', 'Une infinite de solutions'], correctIndex: 2, explanation: 'En simplifiant : 2 = 9. C\'est impossible. Aucune solution.' },
                    { question: 'Les solutions de \\( (2x - 4)(x + 1) = 0 \\) sont :', options: ['\\( x = 4 \\) ou \\( x = -1 \\)', '\\( x = 2 \\) ou \\( x = -1 \\)', '\\( x = -2 \\) ou \\( x = 1 \\)', '\\( x = 2 \\) ou \\( x = 1 \\)'], correctIndex: 1, explanation: '2x - 4 = 0 → x = 2. x + 1 = 0 → x = -1.' },
                    { question: 'L\'ensemble des solutions de \\( x \\leq 5 \\) est :', options: ['\\( ]5 ; +\\infty[ \\)', '\\( ]-\\infty ; 5[ \\)', '\\( ]-\\infty ; 5] \\)', '\\( [5 ; +\\infty[ \\)'], correctIndex: 2, explanation: 'x ≤ 5 : tous les nombres ≤ 5. Crochet ferme car 5 est inclus : ]-infini ; 5].' },
                    { question: 'La solution de \\( \\frac{x}{4} + 1 = 3 \\) est :', options: ['\\( x = 8 \\)', '\\( x = 12 \\)', '\\( x = 2 \\)', '\\( x = 16 \\)'], correctIndex: 0, explanation: 'x/4 = 2, donc x = 8.' },
                    { question: 'Quelle equation a pour solution \\( x = -2 \\) ?', options: ['\\( 3x + 1 = -5 \\)', '\\( 3x + 1 = 5 \\)', '\\( 2x - 1 = 3 \\)', '\\( x + 5 = -3 \\)'], correctIndex: 0, explanation: 'Verification : 3(-2) + 1 = -6 + 1 = -5. C\'est correct.' }
                ]
            },

            // ═══════════════════════════════════════════════════════════════
            // SECTION 5 — Pythagore et Thales
            // ═══════════════════════════════════════════════════════════════
            {
                id: 'pythagore-thales',
                title: 'Pythagore et Thales',
                icon: '📐',
                content: '<h3>Theoreme de Pythagore</h3>'
                    + '<ul>'
                    + '<li><strong>Direct</strong> : dans un triangle RECTANGLE, hypotenuse^2 = cote1^2 + cote2^2.</li>'
                    + '<li><strong>Reciproque</strong> : si l\'egalite est verifiee → le triangle est rectangle.</li>'
                    + '</ul>'
                    + '<h3>Theoreme de Thales</h3>'
                    + '<ul>'
                    + '<li><strong>Direct</strong> : droites paralleles → longueurs proportionnelles.</li>'
                    + '<li><strong>Reciproque</strong> : rapports egaux → droites paralleles.</li>'
                    + '</ul>',
                flashcards: [
                    // --- 1. Pythagore direct ---
                    {
                        question: 'C\'est quoi le theoreme de Pythagore ?',
                        answer: '🎯 Dans un triangle RECTANGLE : hypotenuse^2 = cote1^2 + cote2^2.\n\n'
                            + 'L\'hypotenuse est le cote le PLUS LONG (en face de l\'angle droit).\n\n'
                            + 'Exemple : cotes 3 et 4.\n'
                            + 'Hypotenuse^2 = 3^2 + 4^2 = 9 + 16 = 25.\n'
                            + 'Hypotenuse = racine(25) = 5.\n\n'
                            + 'En gros : le grand cote au carre = la somme des carres des petits cotes.\n\n'
                            + 'Mot difficile : "hypotenuse" = le plus grand cote du triangle rectangle.\n\n'
                            + '💡 Astuce dys : "HYPotenuse = HYPer grand." C\'est le plus long.\n\n'
                            + '⚠️ Piege Brevet : appliquer Pythagore dans un triangle qui n\'est PAS rectangle.'
                    },
                    // --- 2. Pythagore trouver un petit cote ---
                    {
                        question: 'Comment trouver un PETIT cote avec Pythagore ?',
                        answer: '🎯 On isole le petit cote : cote^2 = hypotenuse^2 - autre cote^2.\n\n'
                            + 'Exemple : hypotenuse = 13, un cote = 5.\n'
                            + 'Autre cote^2 = 13^2 - 5^2 = 169 - 25 = 144.\n'
                            + 'Autre cote = racine(144) = 12.\n\n'
                            + 'En gros : grand au carre MOINS petit au carre.\n\n'
                            + '💡 Astuce dys : "Hypotenuse = addition. Petit cote = soustraction." + pour le grand, - pour le petit.\n\n'
                            + '⚠️ Piege Brevet : soustraire dans le mauvais sens ! C\'est toujours le GRAND - le PETIT.'
                    },
                    // --- 3. Reciproque de Pythagore ---
                    {
                        question: 'C\'est quoi la reciproque de Pythagore ?',
                        answer: '🎯 Elle sert a PROUVER qu\'un triangle est rectangle.\n\n'
                            + 'Methode : on compare le carre du plus grand cote avec la somme des carres des deux autres.\n\n'
                            + 'Exemple : cotes 5, 12 et 13.\n'
                            + '13^2 = 169. 5^2 + 12^2 = 25 + 144 = 169.\n'
                            + '169 = 169 → le triangle EST rectangle.\n\n'
                            + 'En gros : si ca tombe juste, c\'est rectangle.\n\n'
                            + '💡 Astuce dys : commence TOUJOURS par le plus grand cote.\n\n'
                            + '⚠️ Piege Brevet : oublier la conclusion ! Il faut ecrire : "D\'apres la reciproque du theoreme de Pythagore, le triangle est rectangle en..."'
                    },
                    // --- 4. Redaction Pythagore Brevet ---
                    {
                        question: 'Comment REDIGER Pythagore au Brevet ?',
                        answer: '🎯 Modele de redaction :\n\n'
                            + '"Dans le triangle ABC rectangle en C,\n'
                            + 'd\'apres le theoreme de Pythagore :\n'
                            + 'AB^2 = AC^2 + BC^2\n'
                            + 'AB^2 = 3^2 + 4^2\n'
                            + 'AB^2 = 9 + 16\n'
                            + 'AB^2 = 25\n'
                            + 'AB = racine(25) = 5 cm."\n\n'
                            + 'En gros : 1) Nomme le triangle. 2) Cite le theoreme. 3) Ecris la formule. 4) Calcule.\n\n'
                            + '📝 Astuce dys : apprends cette redaction par coeur. C\'est toujours la meme.\n\n'
                            + '⚠️ Piege Brevet : ne pas citer le theoreme par son nom. Le correcteur veut lire "theoreme de Pythagore".'
                    },
                    // --- 5. Redaction reciproque Brevet ---
                    {
                        question: 'Comment REDIGER la reciproque de Pythagore au Brevet ?',
                        answer: '🎯 Modele de redaction :\n\n'
                            + '"Dans le triangle ABC, le plus grand cote est AB = 13.\n'
                            + 'Calculons : AB^2 = 13^2 = 169.\n'
                            + 'AC^2 + BC^2 = 5^2 + 12^2 = 25 + 144 = 169.\n'
                            + 'On constate que AB^2 = AC^2 + BC^2.\n'
                            + 'D\'apres la reciproque du theoreme de Pythagore,\n'
                            + 'le triangle ABC est rectangle en C."\n\n'
                            + 'En gros : calcule les deux cotes separement, compare, puis conclus.\n\n'
                            + '📝 Astuce dys : 2 calculs + 1 comparaison + 1 conclusion. Toujours dans cet ordre.\n\n'
                            + '⚠️ Piege Brevet : oublier de dire OU est l\'angle droit ("rectangle en C").'
                    },
                    // --- 6. Thales direct ---
                    {
                        question: 'C\'est quoi le theoreme de Thales ?',
                        answer: '🎯 Si deux droites paralleles coupent deux secantes, les longueurs sont PROPORTIONNELLES.\n\n'
                            + 'Formule : AM/AB = AN/AC = MN/BC.\n\n'
                            + 'Exemple : AM = 3, AB = 6, AN = 4, AC = ?\n'
                            + '3/6 = 4/AC → AC = 4 x 6 / 3 = 8.\n\n'
                            + 'En gros : les triangles emboites ont les memes proportions.\n\n'
                            + 'Mot difficile : "secantes" = droites qui se coupent. "Proportionnelles" = meme rapport.\n\n'
                            + '💡 Astuce dys : fais un TABLEAU de proportionnalite. Petit triangle en haut, grand en bas.\n\n'
                            + '⚠️ Piege Brevet : melanger les longueurs. Le petit va avec le petit, le grand avec le grand.'
                    },
                    // --- 7. Thales calcul longueur ---
                    {
                        question: 'Comment calculer une longueur avec Thales ?',
                        answer: '🎯 Etapes :\n'
                            + '1) Verifie que les droites sont paralleles.\n'
                            + '2) Ecris les rapports egaux.\n'
                            + '3) Remplace par les nombres.\n'
                            + '4) Fais un produit en croix.\n\n'
                            + 'Exemple : AM/AB = MN/BC.\n'
                            + '2/5 = MN/10.\n'
                            + 'MN = 2 x 10 / 5 = 4.\n\n'
                            + 'En gros : pose le rapport, fais le produit en croix.\n\n'
                            + '💡 Astuce dys : un tableau a 2 colonnes aide beaucoup. Colonne 1 = petit triangle. Colonne 2 = grand triangle.\n\n'
                            + '⚠️ Piege Brevet : ne pas verifier le parallelisme avant d\'appliquer Thales.'
                    },
                    // --- 8. Reciproque de Thales ---
                    {
                        question: 'C\'est quoi la reciproque de Thales ?',
                        answer: '🎯 Si les rapports sont egaux, alors les droites sont PARALLELES.\n\n'
                            + 'Methode : calcule AM/AB et AN/AC. Si ils sont egaux → (MN) // (BC).\n\n'
                            + 'Exemple : AM/AB = 3/6 = 0,5. AN/AC = 4/8 = 0,5.\n'
                            + 'Les rapports sont egaux → (MN) est parallele a (BC).\n\n'
                            + 'En gros : memes rapports = droites paralleles.\n\n'
                            + '💡 Astuce dys : calcule les 2 rapports. Compare. Egaux = paralleles.\n\n'
                            + '⚠️ Piege Brevet : oublier de CONCLURE. Ecris "les droites sont paralleles".'
                    },
                    // --- 9. Redaction Thales Brevet ---
                    {
                        question: 'Comment REDIGER Thales au Brevet ?',
                        answer: '🎯 Modele de redaction :\n\n'
                            + '"Les points A, M, B sont alignes.\n'
                            + 'Les points A, N, C sont alignes.\n'
                            + 'Les droites (MN) et (BC) sont paralleles.\n'
                            + 'D\'apres le theoreme de Thales :\n'
                            + 'AM/AB = AN/AC = MN/BC\n'
                            + '2/5 = AN/10\n'
                            + 'AN = 2 x 10 / 5 = 4."\n\n'
                            + 'En gros : 1) Conditions. 2) Cite Thales. 3) Rapports. 4) Calcul.\n\n'
                            + '📝 Astuce dys : cette redaction vaut des points. Apprends-la par coeur.\n\n'
                            + '⚠️ Piege Brevet : oublier de dire que les droites sont paralleles AVANT d\'appliquer Thales.'
                    },
                    // --- 10. Thales configuration papillon ---
                    {
                        question: 'C\'est quoi la configuration papillon dans Thales ?',
                        answer: '🎯 Les deux triangles sont de part et d\'autre du point d\'intersection.\n\n'
                            + 'Ca forme un "X" ou un papillon.\n'
                            + 'Les rapports sont les memes, mais les segments sont de chaque cote.\n\n'
                            + 'Exemple : les droites se croisent en O.\n'
                            + 'OA/OB = OC/OD si (AC) // (BD).\n\n'
                            + 'En gros : meme methode, mais les triangles sont "en miroir".\n\n'
                            + '💡 Astuce dys : dessine le papillon. Les ailes sont les deux triangles.\n\n'
                            + '⚠️ Piege Brevet : confondre les configurations. Redessine la figure au brouillon.'
                    },
                    // --- 11. Pythagore : triplets classiques ---
                    {
                        question: 'Quels sont les triplets de Pythagore a connaitre ?',
                        answer: '🎯 Triplets classiques (cotes qui donnent un triangle rectangle) :\n\n'
                            + '3, 4, 5 (le plus celebre).\n'
                            + '5, 12, 13.\n'
                            + '6, 8, 10 (= 2 fois 3, 4, 5).\n'
                            + '8, 15, 17.\n\n'
                            + 'En gros : si tu vois ces nombres, c\'est surement Pythagore.\n\n'
                            + '💡 Astuce dys : retiens au moins 3-4-5 et 5-12-13. Ils reviennent tout le temps au Brevet.\n\n'
                            + '⚠️ Piege Brevet : des multiples de ces triplets sont aussi valables. 6-8-10 = 2 x (3-4-5).'
                    },
                    // --- 12. Quand utiliser Pythagore vs Thales ---
                    {
                        question: 'Comment savoir si on utilise Pythagore ou Thales ?',
                        answer: '🎯 PYTHAGORE : on connait 2 cotes, on cherche le 3e dans un triangle RECTANGLE.\n'
                            + 'THALES : il y a des droites PARALLELES et on cherche une longueur.\n\n'
                            + 'Indices dans l\'enonce :\n'
                            + '- "rectangle" ou "angle droit" → Pythagore.\n'
                            + '- "parallele" → Thales.\n\n'
                            + 'En gros : angle droit = Pythagore. Paralleles = Thales.\n\n'
                            + '💡 Astuce dys : surligne le mot-cle. "Rectangle" en rouge = Pythagore. "Parallele" en bleu = Thales.\n\n'
                            + '⚠️ Piege Brevet : parfois on utilise les DEUX dans le meme exercice. Lis bien l\'enonce.'
                    },
                    // --- 13. Agrandissement / reduction ---
                    {
                        question: 'Comment Thales sert pour les agrandissements et reductions ?',
                        answer: '🎯 Le rapport de Thales donne le COEFFICIENT d\'agrandissement ou de reduction.\n\n'
                            + 'Exemple : AM/AB = 2/5 = 0,4.\n'
                            + 'Le petit triangle est 0,4 fois le grand (reduction).\n'
                            + 'Toutes les longueurs du petit = 0,4 x celles du grand.\n\n'
                            + 'En gros : le rapport est le meme pour TOUS les cotes.\n\n'
                            + '💡 Astuce dys : rapport < 1 = reduction. Rapport > 1 = agrandissement.\n\n'
                            + '⚠️ Piege Brevet : les aires ne se multiplient PAS par le meme rapport. Aires = rapport^2.'
                    },
                    // --- 14. Contraposee de Thales ---
                    {
                        question: 'Comment prouver que des droites ne sont PAS paralleles ?',
                        answer: '🎯 On utilise la CONTRAPOSEE de Thales.\n\n'
                            + 'Si les rapports sont DIFFERENTS, les droites ne sont PAS paralleles.\n\n'
                            + 'Exemple : AM/AB = 3/6 = 0,5. AN/AC = 5/8 = 0,625.\n'
                            + '0,5 ≠ 0,625 → (MN) n\'est PAS parallele a (BC).\n\n'
                            + 'En gros : rapports differents = pas paralleles.\n\n'
                            + 'Mot difficile : "contraposee" = la regle inversee (si la reciproque dit "egaux → paralleles", la contraposee dit "pas egaux → pas paralleles").\n\n'
                            + '💡 Astuce dys : c\'est l\'inverse de la reciproque. Pas egaux = pas paralleles.\n\n'
                            + '⚠️ Piege Brevet : ecrire "D\'apres la contraposee du theoreme de Thales" (pas "la reciproque").'
                    },
                    // --- 15. Pythagore dans l'espace ---
                    {
                        question: 'Comment utiliser Pythagore dans un solide en 3D ?',
                        answer: '🎯 On cherche un triangle rectangle CACHE dans le solide.\n\n'
                            + 'Exemple : diagonale d\'un pave.\n'
                            + 'Pave de 3 x 4 x 12.\n'
                            + 'Diagonale de la base = racine(3^2 + 4^2) = racine(25) = 5.\n'
                            + 'Diagonale du pave = racine(5^2 + 12^2) = racine(169) = 13.\n\n'
                            + 'En gros : on applique Pythagore DEUX FOIS.\n\n'
                            + '💡 Astuce dys : dessine la vue de dessus d\'abord (pour la base), puis la vue de cote.\n\n'
                            + '⚠️ Piege Brevet : oublier que le triangle rectangle est "a plat" dans le solide. Fais un schema.'
                    }
                ],
                quiz: [
                    { question: 'Un triangle rectangle a des cotes de 6 cm et 8 cm. L\'hypotenuse vaut :', options: ['\\( 14 \\) cm', '\\( 10 \\) cm', '\\( \\sqrt{48} \\) cm', '\\( 7 \\) cm'], correctIndex: 1, explanation: 'racine(6^2 + 8^2) = racine(36 + 64) = racine(100) = 10 cm.' },
                    { question: 'Un triangle a des cotes 5, 12 et 13. Est-il rectangle ?', options: ['Non', 'Oui, rectangle en 5', 'Oui, rectangle (angle droit oppose au cote 13)', 'On ne peut pas savoir'], correctIndex: 2, explanation: '5^2 + 12^2 = 25 + 144 = 169 = 13^2. L\'egalite est verifiee → rectangle.' },
                    { question: 'Hypotenuse = 10, un cote = 6. L\'autre cote vaut :', options: ['4', '8', '\\( \\sqrt{64} \\)', '8 et \\( \\sqrt{64} \\)'], correctIndex: 3, explanation: 'racine(10^2 - 6^2) = racine(100 - 36) = racine(64) = 8.' },
                    { question: 'Dans Thales, si \\( \\frac{AM}{AB} = \\frac{2}{5} \\) et \\( AC = 10 \\), alors \\( AN \\) vaut :', options: ['2', '4', '5', '25'], correctIndex: 1, explanation: 'AN/AC = 2/5, donc AN = 2/5 x 10 = 4.' },
                    { question: 'AM/AB = 3/9 et AN/AC = 2/6. Les droites (MN) et (BC) sont :', options: ['Paralleles', 'Perpendiculaires', 'Secantes', 'On ne sait pas'], correctIndex: 0, explanation: '3/9 = 1/3 et 2/6 = 1/3. Rapports egaux → paralleles.' },
                    { question: 'AM/AB = 3/7 et AN/AC = 4/9. Les droites (MN) et (BC) sont :', options: ['Paralleles', 'Pas paralleles', 'Perpendiculaires', 'Confondues'], correctIndex: 1, explanation: '3/7 ≈ 0,43 et 4/9 ≈ 0,44. Rapports differents → pas paralleles.' },
                    { question: 'Un triangle rectangle a un cote de 3 et une hypotenuse de 5. L\'autre cote vaut :', options: ['2', '4', '\\( \\sqrt{16} \\)', '4 et \\( \\sqrt{16} \\)'], correctIndex: 3, explanation: 'racine(25 - 9) = racine(16) = 4.' },
                    { question: 'Pour prouver qu\'un triangle est rectangle, on utilise :', options: ['Le theoreme de Pythagore', 'La reciproque de Pythagore', 'Le theoreme de Thales', 'La reciproque de Thales'], correctIndex: 1, explanation: 'La reciproque sert a PROUVER l\'angle droit. Le theoreme direct sert a CALCULER un cote.' },
                    { question: 'Pour prouver que deux droites sont paralleles, on utilise :', options: ['Le theoreme de Pythagore', 'La reciproque de Pythagore', 'Le theoreme de Thales', 'La reciproque de Thales'], correctIndex: 3, explanation: 'La reciproque de Thales sert a prouver le parallelisme.' },
                    { question: 'Dans Thales, si \\( \\frac{AM}{AB} = \\frac{3}{4} \\) et \\( MN = 6 \\), alors \\( BC \\) vaut :', options: ['\\( 8 \\)', '\\( 4,5 \\)', '\\( 6 \\)', '\\( 9 \\)'], correctIndex: 0, explanation: 'MN/BC = 3/4. 6/BC = 3/4. BC = 6 x 4 / 3 = 8.' },
                    { question: 'Un pave droit a pour dimensions 3, 4 et 12. Sa diagonale vaut :', options: ['19', '13', '\\( \\sqrt{169} \\)', '13 et \\( \\sqrt{169} \\)'], correctIndex: 3, explanation: 'Base : racine(9+16) = 5. Diagonale : racine(25+144) = racine(169) = 13.' },
                    { question: 'Le triangle avec les cotes 7, 24, 25 est-il rectangle ?', options: ['Oui', 'Non', 'On ne peut pas savoir', 'Seulement si l\'angle est en 25'], correctIndex: 0, explanation: '7^2 + 24^2 = 49 + 576 = 625 = 25^2. Rectangle !' }
                ]
            },

            // ═══════════════════════════════════════════════════════════════
            // SECTION 6 — Trigonometrie
            // ═══════════════════════════════════════════════════════════════
            {
                id: 'trigonometrie',
                title: 'Trigonometrie',
                icon: '📏',
                content: '<h3>Trigonometrie dans le triangle rectangle</h3>'
                    + '<ul>'
                    + '<li><strong>SOH</strong> : sin = oppose / hypotenuse.</li>'
                    + '<li><strong>CAH</strong> : cos = adjacent / hypotenuse.</li>'
                    + '<li><strong>TOA</strong> : tan = oppose / adjacent.</li>'
                    + '</ul>',
                flashcards: [
                    // --- 1. SOH-CAH-TOA ---
                    {
                        question: 'C\'est quoi SOH-CAH-TOA ?',
                        answer: '🎯 C\'est LE moyen mnemotechnique pour retenir les 3 formules de trigo :\n\n'
                            + 'SOH : Sinus = Oppose / Hypotenuse.\n'
                            + 'CAH : Cosinus = Adjacent / Hypotenuse.\n'
                            + 'TOA : Tangente = Oppose / Adjacent.\n\n'
                            + 'En gros : 3 lettres = 3 formules. SOH-CAH-TOA.\n\n'
                            + '💡 Astuce dys : prononce-le comme un mot : "SO-CA-TOA". Comme un cri de guerrier.\n\n'
                            + '⚠️ Piege Brevet : confondre oppose et adjacent. L\'oppose est EN FACE de l\'angle.'
                    },
                    // --- 2. Cosinus ---
                    {
                        question: 'C\'est quoi le cosinus d\'un angle ?',
                        answer: '🎯 cos(angle) = cote ADJACENT / hypotenuse.\n\n'
                            + '"Adjacent" = le cote qui TOUCHE l\'angle (mais pas l\'hypotenuse).\n\n'
                            + 'Exemple : triangle rectangle, angle A.\n'
                            + 'Cote adjacent a A = 4 cm. Hypotenuse = 8 cm.\n'
                            + 'cos(A) = 4/8 = 0,5. Donc A = 60°.\n\n'
                            + 'En gros : cosinus = le cote qui touche l\'angle, divise par le plus grand cote.\n\n'
                            + '💡 Astuce dys : "C" comme Cosinus, "C" comme "Colle" (le cote colle a l\'angle).\n\n'
                            + '⚠️ Piege Brevet : cos(60°) = 0,5 (pas cos(45°) ni cos(30°)). Valeurs a connaitre !'
                    },
                    // --- 3. Sinus ---
                    {
                        question: 'C\'est quoi le sinus d\'un angle ?',
                        answer: '🎯 sin(angle) = cote OPPOSE / hypotenuse.\n\n'
                            + '"Oppose" = le cote EN FACE de l\'angle.\n\n'
                            + 'Exemple : triangle rectangle, angle A.\n'
                            + 'Cote oppose a A = 3 cm. Hypotenuse = 6 cm.\n'
                            + 'sin(A) = 3/6 = 0,5. Donc A = 30°.\n\n'
                            + 'En gros : sinus = le cote en face, divise par le plus grand cote.\n\n'
                            + '💡 Astuce dys : "S" comme Sinus, "S" comme "Se tient en face" (oppose).\n\n'
                            + '⚠️ Piege Brevet : sin(30°) = 0,5. Pas sin(60°). Attention a ne pas confondre.'
                    },
                    // --- 4. Tangente ---
                    {
                        question: 'C\'est quoi la tangente d\'un angle ?',
                        answer: '🎯 tan(angle) = cote OPPOSE / cote ADJACENT.\n\n'
                            + 'Pas d\'hypotenuse ici !\n\n'
                            + 'Exemple : cote oppose = 5, cote adjacent = 5.\n'
                            + 'tan(angle) = 5/5 = 1.\n'
                            + 'Donc l\'angle = 45°.\n\n'
                            + 'En gros : tangente = oppose divise par adjacent.\n\n'
                            + '💡 Astuce dys : "T" comme Tangente. C\'est la seule SANS l\'hypotenuse.\n\n'
                            + '⚠️ Piege Brevet : tan(45°) = 1. C\'est une valeur classique a connaitre.'
                    },
                    // --- 5. Identifier les cotes ---
                    {
                        question: 'Comment identifier l\'oppose, l\'adjacent et l\'hypotenuse ?',
                        answer: '🎯 Toujours par rapport a UN angle precis.\n\n'
                            + 'HYPOTENUSE : le plus grand cote. En face de l\'angle droit.\n'
                            + 'OPPOSE : le cote en FACE de l\'angle choisi.\n'
                            + 'ADJACENT : le cote qui TOUCHE l\'angle (et qui n\'est pas l\'hypotenuse).\n\n'
                            + 'En gros : hypotenuse = fixe. Oppose et adjacent changent selon l\'angle choisi.\n\n'
                            + '💡 Astuce dys : marque l\'angle. Pointe du doigt l\'angle. Le cote en face = oppose. Le cote qui touche = adjacent.\n\n'
                            + '⚠️ Piege Brevet : oppose et adjacent s\'inversent si on change d\'angle. Verifie bien quel angle tu utilises.'
                    },
                    // --- 6. Trouver un angle ---
                    {
                        question: 'Comment trouver un angle avec la trigo ?',
                        answer: '🎯 Utilise la touche INVERSE de la calculatrice : arccos, arcsin, arctan.\n\n'
                            + 'Exemple : cos(A) = 0,5.\n'
                            + 'A = arccos(0,5) = 60°.\n\n'
                            + 'Autre : sin(A) = 0,707.\n'
                            + 'A = arcsin(0,707) = 45°.\n\n'
                            + 'En gros : tu connais le rapport → la calculatrice te donne l\'angle.\n\n'
                            + '💡 Astuce dys : sur la calculatrice, c\'est souvent "2nde" ou "Shift" puis "cos" (ou sin ou tan).\n\n'
                            + '⚠️ Piege Brevet : la calculatrice doit etre en mode DEGRES, pas en radians ! Verifie avant.'
                    },
                    // --- 7. Trouver un cote ---
                    {
                        question: 'Comment trouver un cote avec la trigo ?',
                        answer: '🎯 Choisis la bonne formule selon les cotes que tu connais.\n\n'
                            + 'Exemple : angle = 40°, hypotenuse = 10, on cherche l\'oppose.\n'
                            + 'sin(40°) = oppose / 10.\n'
                            + 'oppose = 10 x sin(40°) = 10 x 0,643 = 6,43 cm.\n\n'
                            + 'En gros : isole le cote inconnu dans la formule.\n\n'
                            + '💡 Astuce dys : demande-toi "quels cotes je connais ?". Oppose et hypotenuse → sinus. Adjacent et hypotenuse → cosinus.\n\n'
                            + '⚠️ Piege Brevet : ne pas arrondir trop tot. Garde les decimales jusqu\'au resultat final.'
                    },
                    // --- 8. Valeurs remarquables ---
                    {
                        question: 'Quelles sont les valeurs trigo a connaitre par coeur ?',
                        answer: '🎯 Valeurs classiques :\n\n'
                            + 'cos(0°) = 1. sin(0°) = 0.\n'
                            + 'cos(30°) ≈ 0,87. sin(30°) = 0,5.\n'
                            + 'cos(45°) ≈ 0,71. sin(45°) ≈ 0,71.\n'
                            + 'cos(60°) = 0,5. sin(60°) ≈ 0,87.\n'
                            + 'cos(90°) = 0. sin(90°) = 1.\n\n'
                            + 'En gros : le cos descend de 1 a 0. Le sin monte de 0 a 1.\n\n'
                            + '💡 Astuce dys : cos et sin sont "en miroir". cos(30°) = sin(60°). cos(60°) = sin(30°).\n\n'
                            + '⚠️ Piege Brevet : confondre cos(30°) et cos(60°). Retiens : cos(60°) = 0,5 (le plus simple).'
                    },
                    // --- 9. Choisir la bonne formule ---
                    {
                        question: 'Comment choisir entre sin, cos et tan ?',
                        answer: '🎯 Regarde quels 2 cotes sont en jeu :\n\n'
                            + '• Oppose + Hypotenuse → SINUS (SOH).\n'
                            + '• Adjacent + Hypotenuse → COSINUS (CAH).\n'
                            + '• Oppose + Adjacent → TANGENTE (TOA).\n\n'
                            + 'En gros : repere les 2 cotes concernes, puis choisis la formule.\n\n'
                            + '💡 Astuce dys : ecris les 3 lettres du cote connu et du cote cherche. Ca te dit quelle formule utiliser.\n\n'
                            + '⚠️ Piege Brevet : utiliser le cosinus quand il faudrait le sinus. Verifie tes cotes.'
                    },
                    // --- 10. Redaction trigo Brevet ---
                    {
                        question: 'Comment rediger un exercice de trigo au Brevet ?',
                        answer: '🎯 Modele :\n\n'
                            + '"Dans le triangle ABC rectangle en C :\n'
                            + 'cos(A) = AC / AB (cote adjacent / hypotenuse)\n'
                            + 'cos(A) = 4 / 8 = 0,5\n'
                            + 'A = arccos(0,5)\n'
                            + 'A = 60°."\n\n'
                            + 'En gros : 1) Cite le triangle. 2) Ecris la formule. 3) Remplace. 4) Calcule.\n\n'
                            + '📝 Astuce dys : toujours la meme structure. Apprends-la.\n\n'
                            + '⚠️ Piege Brevet : oublier d\'ecrire la formule AVANT de remplacer par les nombres.'
                    },
                    // --- 11. Relation sin^2 + cos^2 = 1 ---
                    {
                        question: 'C\'est quoi la relation sin^2 + cos^2 = 1 ?',
                        answer: '🎯 Pour n\'importe quel angle : sin(angle)^2 + cos(angle)^2 = 1. Toujours.\n\n'
                            + 'Exemple : sin(30°) = 0,5 et cos(30°) ≈ 0,87.\n'
                            + '0,5^2 + 0,87^2 = 0,25 + 0,75 ≈ 1. Ca marche !\n\n'
                            + 'En gros : les carres du sinus et du cosinus valent toujours 1 ensemble.\n\n'
                            + '💡 Astuce dys : c\'est Pythagore deguise ! (oppose^2 + adjacent^2 = hypotenuse^2, divise par hypotenuse^2.)\n\n'
                            + '⚠️ Piege Brevet : utiliser cette formule pour verifier tes calculs. Si ca ne fait pas 1, il y a une erreur.'
                    },
                    // --- 12. Probleme concret ---
                    {
                        question: 'Comment resoudre un probleme concret de trigo ?',
                        answer: '🎯 Exemple : une echelle de 5 m forme un angle de 70° avec le sol. A quelle hauteur touche-t-elle le mur ?\n\n'
                            + 'L\'echelle = hypotenuse = 5 m.\n'
                            + 'La hauteur = cote oppose a l\'angle de 70°.\n'
                            + 'sin(70°) = hauteur / 5.\n'
                            + 'hauteur = 5 x sin(70°) = 5 x 0,94 = 4,7 m.\n\n'
                            + 'En gros : fais un dessin, identifie les cotes, choisis la formule.\n\n'
                            + '💡 Astuce dys : dessine TOUJOURS un triangle rectangle. Marque l\'angle et les cotes connus.\n\n'
                            + '⚠️ Piege Brevet : ne pas faire de dessin et se tromper de cote.'
                    }
                ],
                quiz: [
                    { question: 'Dans un triangle rectangle, \\( \\cos(\\alpha) \\) se calcule par :', options: ['oppose / hypotenuse', 'adjacent / hypotenuse', 'oppose / adjacent', 'hypotenuse / adjacent'], correctIndex: 1, explanation: 'CAH : cos = adjacent / hypotenuse.' },
                    { question: 'Dans un triangle rectangle, \\( \\sin(\\alpha) \\) se calcule par :', options: ['adjacent / hypotenuse', 'oppose / hypotenuse', 'oppose / adjacent', 'hypotenuse / oppose'], correctIndex: 1, explanation: 'SOH : sin = oppose / hypotenuse.' },
                    { question: 'Dans un triangle rectangle, \\( \\tan(\\alpha) \\) se calcule par :', options: ['adjacent / hypotenuse', 'oppose / hypotenuse', 'oppose / adjacent', 'adjacent / oppose'], correctIndex: 2, explanation: 'TOA : tan = oppose / adjacent.' },
                    { question: 'Si \\( \\sin(\\alpha) = 0{,}5 \\), alors \\( \\alpha \\) vaut :', options: ['\\( 30° \\)', '\\( 45° \\)', '\\( 60° \\)', '\\( 90° \\)'], correctIndex: 0, explanation: 'sin(30°) = 0,5. Valeur a connaitre par coeur.' },
                    { question: 'Si \\( \\cos(\\alpha) = 0{,}5 \\), alors \\( \\alpha \\) vaut :', options: ['\\( 30° \\)', '\\( 45° \\)', '\\( 60° \\)', '\\( 90° \\)'], correctIndex: 2, explanation: 'cos(60°) = 0,5. Valeur a connaitre par coeur.' },
                    { question: 'Si \\( \\tan(\\alpha) = 1 \\), alors \\( \\alpha \\) vaut :', options: ['\\( 30° \\)', '\\( 45° \\)', '\\( 60° \\)', '\\( 90° \\)'], correctIndex: 1, explanation: 'tan(45°) = 1, car oppose = adjacent.' },
                    { question: 'Angle = 40°, hypotenuse = 10. Le cote oppose vaut environ :', options: ['6,43', '7,66', '8,39', '5,00'], correctIndex: 0, explanation: 'oppose = 10 x sin(40°) = 10 x 0,643 ≈ 6,43.' },
                    { question: 'Angle = 50°, hypotenuse = 12. Le cote adjacent vaut environ :', options: ['9,19', '7,71', '6,00', '10,00'], correctIndex: 1, explanation: 'adjacent = 12 x cos(50°) = 12 x 0,643 ≈ 7,71.' },
                    { question: 'Cote oppose = 6, cote adjacent = 8. L\'angle vaut environ :', options: ['\\( 36,9° \\)', '\\( 53,1° \\)', '\\( 45° \\)', '\\( 30° \\)'], correctIndex: 0, explanation: 'tan(angle) = 6/8 = 0,75. angle = arctan(0,75) ≈ 36,9°.' },
                    { question: 'SOH-CAH-TOA, le "O" de SOH veut dire :', options: ['Obtus', 'Oppose', 'Origine', 'Ordonnee'], correctIndex: 1, explanation: 'SOH = Sinus Oppose Hypotenuse. Le O = Oppose.' }
                ]
            },

            // ═══════════════════════════════════════════════════════════════
            // SECTION 7 — Fonctions
            // ═══════════════════════════════════════════════════════════════
            {
                id: 'fonctions',
                title: 'Fonctions',
                icon: '📈',
                content: '<h3>Fonctions</h3>'
                    + '<ul>'
                    + '<li><strong>Image</strong> : le nombre qui sort de la machine.</li>'
                    + '<li><strong>Antecedent</strong> : le nombre qu\'on met dans la machine.</li>'
                    + '<li><strong>Lineaire</strong> : f(x) = ax (droite par l\'origine).</li>'
                    + '<li><strong>Affine</strong> : f(x) = ax + b (droite quelconque).</li>'
                    + '</ul>',
                flashcards: [
                    // --- 1. Notion de fonction ---
                    {
                        question: 'C\'est quoi une fonction ?',
                        answer: '🎯 C\'est une MACHINE : tu mets un nombre, elle donne UN SEUL resultat.\n\n'
                            + 'Exemple : f(x) = 2x + 3.\n'
                            + 'Tu mets 4 → f(4) = 2(4) + 3 = 11.\n'
                            + 'Tu mets 0 → f(0) = 2(0) + 3 = 3.\n\n'
                            + 'En gros : un nombre entre → un seul nombre sort.\n\n'
                            + 'Mot difficile : "fonction" = regle de calcul qui a chaque x associe un f(x).\n\n'
                            + '💡 Astuce dys : pense a un distributeur. Tu mets une piece (x), tu recois un produit (f(x)).\n\n'
                            + '⚠️ Piege Brevet : une fonction donne toujours UN SEUL resultat pour chaque x.'
                    },
                    // --- 2. Image ---
                    {
                        question: 'C\'est quoi l\'image d\'un nombre ?',
                        answer: '🎯 L\'image, c\'est le RESULTAT de la fonction.\n\n'
                            + 'Si f(3) = 7, alors 7 est l\'IMAGE de 3 par f.\n\n'
                            + 'En gros : l\'image = ce qui SORT de la machine.\n\n'
                            + '💡 Astuce dys : "Image = sortie." Comme une photo : c\'est le resultat.\n\n'
                            + '⚠️ Piege Brevet : confondre image et antecedent. L\'image c\'est le y, pas le x.'
                    },
                    // --- 3. Antecedent ---
                    {
                        question: 'C\'est quoi un antecedent ?',
                        answer: '🎯 L\'antecedent, c\'est le nombre qu\'on MET dans la machine.\n\n'
                            + 'Si f(a) = 7, alors a est un ANTECEDENT de 7.\n\n'
                            + 'Exemple : f(x) = 2x. f(3) = 6. 3 est l\'antecedent de 6.\n\n'
                            + 'En gros : l\'antecedent = ce qu\'on met dans la machine pour obtenir le resultat.\n\n'
                            + 'Mot difficile : "antecedent" = ce qui vient AVANT (le nombre d\'entree).\n\n'
                            + '💡 Astuce dys : "Ante" = "avant". L\'antecedent vient AVANT l\'image.\n\n'
                            + '⚠️ Piege Brevet : il peut y avoir PLUSIEURS antecedents pour la meme image. Mais UNE seule image pour chaque x.'
                    },
                    // --- 4. Lecture graphique image ---
                    {
                        question: 'Comment lire une image sur un graphique ?',
                        answer: '🎯 Methode :\n'
                            + '1) Va au nombre x sur l\'axe horizontal.\n'
                            + '2) Monte (ou descend) jusqu\'a la courbe.\n'
                            + '3) Lis la valeur sur l\'axe vertical. C\'est l\'image.\n\n'
                            + 'En gros : x (horizontal) → courbe → y (vertical) = image.\n\n'
                            + '💡 Astuce dys : trace avec ton doigt ou ta regle. D\'abord verticalement, puis horizontalement.\n\n'
                            + '⚠️ Piege Brevet : se tromper d\'axe. Le x est TOUJOURS horizontal, le y est TOUJOURS vertical.'
                    },
                    // --- 5. Lecture graphique antecedent ---
                    {
                        question: 'Comment lire un antecedent sur un graphique ?',
                        answer: '🎯 C\'est l\'inverse :\n'
                            + '1) Va au nombre y sur l\'axe vertical.\n'
                            + '2) Trace une ligne horizontale.\n'
                            + '3) Regarde ou ca coupe la courbe.\n'
                            + '4) Descends sur l\'axe horizontal. C\'est l\'antecedent.\n\n'
                            + 'En gros : y (vertical) → horizontalement → courbe → x = antecedent.\n\n'
                            + '💡 Astuce dys : la ligne horizontale peut couper la courbe en PLUSIEURS points. Chaque point donne un antecedent.\n\n'
                            + '⚠️ Piege Brevet : oublier de chercher TOUS les antecedents. La courbe peut etre coupee 2 ou 3 fois.'
                    },
                    // --- 6. Fonction lineaire ---
                    {
                        question: 'C\'est quoi une fonction lineaire ?',
                        answer: '🎯 f(x) = ax. Pas de "+ b". Ca passe par l\'ORIGINE (0, 0).\n\n'
                            + 'Exemple : f(x) = 3x.\n'
                            + 'f(0) = 0, f(1) = 3, f(2) = 6.\n'
                            + 'C\'est de la PROPORTIONNALITE !\n\n'
                            + 'En gros : lineaire = droite qui passe par le point (0, 0). Proportionnalite.\n\n'
                            + 'Mot difficile : "lineaire" = en ligne droite.\n\n'
                            + '💡 Astuce dys : "Lineaire = Ligne par l\'Origine." LLO.\n\n'
                            + '⚠️ Piege Brevet : si la droite ne passe PAS par l\'origine, c\'est affine, pas lineaire.'
                    },
                    // --- 7. Fonction affine ---
                    {
                        question: 'C\'est quoi une fonction affine ?',
                        answer: '🎯 f(x) = ax + b. C\'est une DROITE.\n\n'
                            + 'a = coefficient directeur (la PENTE).\n'
                            + 'b = ordonnee a l\'origine (ou la droite coupe l\'axe y).\n\n'
                            + 'Exemple : f(x) = 2x + 3.\n'
                            + 'a = 2 (la droite monte de 2 quand x avance de 1).\n'
                            + 'b = 3 (la droite passe par (0, 3)).\n\n'
                            + 'En gros : une droite avec une pente et un point de depart.\n\n'
                            + '💡 Astuce dys : "a" = angle de la pente. "b" = la ou ca "Begin" (commence sur l\'axe y).\n\n'
                            + '⚠️ Piege Brevet : confondre a et b. a = la pente. b = la hauteur de depart.'
                    },
                    // --- 8. Coefficient directeur ---
                    {
                        question: 'Comment calculer le coefficient directeur a ?',
                        answer: '🎯 a = (y2 - y1) / (x2 - x1). Avec 2 points de la droite.\n\n'
                            + 'Exemple : droite passant par (1, 5) et (3, 11).\n'
                            + 'a = (11 - 5) / (3 - 1) = 6 / 2 = 3.\n\n'
                            + 'En gros : c\'est "combien on monte" divise par "combien on avance".\n\n'
                            + 'Mot difficile : "coefficient directeur" = le nombre qui donne la direction de la droite.\n\n'
                            + '💡 Astuce dys : "Difference des y en haut, difference des x en bas." Delta y / Delta x.\n\n'
                            + '⚠️ Piege Brevet : inverser y et x dans la formule. C\'est TOUJOURS y en haut, x en bas.'
                    },
                    // --- 9. Ordonnee a l'origine ---
                    {
                        question: 'C\'est quoi l\'ordonnee a l\'origine ?',
                        answer: '🎯 C\'est la valeur de f(0). Le point ou la droite coupe l\'axe vertical.\n\n'
                            + 'Dans f(x) = ax + b, c\'est le nombre b.\n\n'
                            + 'Exemple : f(x) = 4x + 7.\n'
                            + 'Ordonnee a l\'origine = 7. La droite passe par (0, 7).\n\n'
                            + 'En gros : c\'est la hauteur de la droite quand x = 0.\n\n'
                            + '💡 Astuce dys : f(0) = a(0) + b = b. C\'est toujours b, le nombre tout seul.\n\n'
                            + '⚠️ Piege Brevet : oublier que l\'ordonnee a l\'origine est le point (0, b), PAS (b, 0).'
                    },
                    // --- 10. Croissante ou decroissante ---
                    {
                        question: 'Comment savoir si une fonction affine monte ou descend ?',
                        answer: '🎯 Regarde le signe de a :\n\n'
                            + 'a > 0 → la fonction MONTE (croissante).\n'
                            + 'a < 0 → la fonction DESCEND (decroissante).\n'
                            + 'a = 0 → la fonction est PLATE (constante).\n\n'
                            + 'Exemple : f(x) = -3x + 5. a = -3 < 0. La droite descend.\n\n'
                            + 'En gros : positif = monte. Negatif = descend.\n\n'
                            + '💡 Astuce dys : "Positif = Pousse vers le haut. Negatif = Navigue vers le bas."\n\n'
                            + '⚠️ Piege Brevet : confondre le signe de a et de b. C\'est le signe de a qui donne le sens.'
                    },
                    // --- 11. Tracer une droite ---
                    {
                        question: 'Comment tracer la droite f(x) = ax + b ?',
                        answer: '🎯 Methode en 3 etapes :\n\n'
                            + '1) Place le point (0, b) sur l\'axe vertical.\n'
                            + '2) Avance de 1 en x. Monte de a en y. Place un 2e point.\n'
                            + '3) Relie les 2 points avec une regle.\n\n'
                            + 'Exemple : f(x) = 2x - 1.\n'
                            + 'Point 1 : (0, -1). Point 2 : (1, 1). Trace la droite.\n\n'
                            + 'En gros : un point + la pente = la droite est tracee.\n\n'
                            + '💡 Astuce dys : commence TOUJOURS par le point (0, b). C\'est le plus facile a placer.\n\n'
                            + '⚠️ Piege Brevet : ne pas utiliser de regle. Une droite tracee a main levee peut couter des points.'
                    },
                    // --- 12. Equation de droite avec 2 points ---
                    {
                        question: 'Comment trouver l\'equation d\'une droite avec 2 points ?',
                        answer: '🎯 Etapes :\n'
                            + '1) Calcule a = (y2 - y1) / (x2 - x1).\n'
                            + '2) Remplace un point dans f(x) = ax + b pour trouver b.\n\n'
                            + 'Exemple : droite par (2, 5) et (4, 11).\n'
                            + 'a = (11 - 5) / (4 - 2) = 3.\n'
                            + 'f(x) = 3x + b. On remplace (2, 5) : 5 = 6 + b → b = -1.\n'
                            + 'f(x) = 3x - 1.\n\n'
                            + 'En gros : d\'abord la pente, puis le decalage.\n\n'
                            + '💡 Astuce dys : 2 etapes. Etape 1 = a. Etape 2 = b.\n\n'
                            + '⚠️ Piege Brevet : se tromper de point pour calculer b. Verifie avec l\'AUTRE point.'
                    },
                    // --- 13. Lineaire vs affine ---
                    {
                        question: 'Quelle difference entre lineaire et affine ?',
                        answer: '🎯 LINEAIRE : f(x) = ax. Passe par (0, 0). Proportionnalite.\n'
                            + 'AFFINE : f(x) = ax + b. Ne passe par (0, 0) que si b = 0.\n\n'
                            + 'En gros : lineaire = affine avec b = 0. Toute lineaire est affine, mais pas l\'inverse.\n\n'
                            + '💡 Astuce dys : si la droite passe par l\'origine (0, 0) → lineaire. Sinon → affine seulement.\n\n'
                            + '⚠️ Piege Brevet : dire "lineaire" alors que la droite ne passe pas par l\'origine.'
                    },
                    // --- 14. Fonction constante ---
                    {
                        question: 'C\'est quoi une fonction constante ?',
                        answer: '🎯 f(x) = b. (Pas de x dans la formule.)\n\n'
                            + 'Exemple : f(x) = 5. Quelle que soit la valeur de x, f(x) = 5.\n'
                            + 'f(0) = 5, f(100) = 5, f(-3) = 5.\n\n'
                            + 'C\'est une droite HORIZONTALE a la hauteur b.\n\n'
                            + 'En gros : constante = toujours la meme reponse, peu importe x.\n\n'
                            + '💡 Astuce dys : c\'est la droite la plus simple. Plate comme une crepe.\n\n'
                            + '⚠️ Piege Brevet : c\'est un cas particulier d\'affine avec a = 0. Le coefficient directeur est nul.'
                    }
                ],
                quiz: [
                    { question: 'Si \\( f(x) = 3x - 2 \\), combien vaut \\( f(4) \\) ?', options: ['\\( 14 \\)', '\\( 10 \\)', '\\( 8 \\)', '\\( 12 \\)'], correctIndex: 1, explanation: 'f(4) = 3(4) - 2 = 12 - 2 = 10.' },
                    { question: 'L\'image de 5 par \\( f(x) = x^2 - 1 \\) est :', options: ['24', '26', '4', '25'], correctIndex: 0, explanation: 'f(5) = 25 - 1 = 24.' },
                    { question: 'La fonction \\( f(x) = 4x \\) est :', options: ['Affine (pas lineaire)', 'Lineaire', 'Constante', 'Ni lineaire ni affine'], correctIndex: 1, explanation: 'f(x) = ax avec a = 4. Pas de b → lineaire.' },
                    { question: 'Le coefficient directeur de \\( f(x) = -2x + 7 \\) est :', options: ['7', '-2', '2', '-7'], correctIndex: 1, explanation: 'Dans f(x) = ax + b, a = -2 est le coefficient directeur.' },
                    { question: 'L\'ordonnee a l\'origine de \\( f(x) = 5x - 3 \\) est :', options: ['5', '3', '-3', '0'], correctIndex: 2, explanation: 'b = -3. La droite coupe l\'axe y en (0, -3).' },
                    { question: 'La fonction \\( f(x) = -x + 4 \\) est :', options: ['Croissante', 'Decroissante', 'Constante', 'On ne peut pas savoir'], correctIndex: 1, explanation: 'a = -1 < 0 → decroissante.' },
                    { question: 'Une droite passe par (0, 3) et (2, 7). Son coefficient directeur est :', options: ['2', '3', '4', '5'], correctIndex: 0, explanation: 'a = (7-3)/(2-0) = 4/2 = 2.' },
                    { question: 'Si \\( f(x) = 2x + 1 \\), quel est l\'antecedent de 9 ?', options: ['4', '5', '19', '3'], correctIndex: 0, explanation: '2x + 1 = 9 → 2x = 8 → x = 4.' },
                    { question: 'Une fonction lineaire passe toujours par :', options: ['Le point (1, 0)', 'Le point (0, 1)', 'L\'origine (0, 0)', 'Le point (1, 1)'], correctIndex: 2, explanation: 'f(x) = ax → f(0) = 0. La droite passe par l\'origine.' },
                    { question: 'La droite d\'equation \\( y = 3 \\) est :', options: ['Verticale', 'Horizontale', 'Croissante', 'Decroissante'], correctIndex: 1, explanation: 'y = 3 est une droite horizontale (fonction constante, a = 0).' }
                ]
            },

            // ═══════════════════════════════════════════════════════════════
            // SECTION 8 — Probabilites, Stats et Methode
            // ═══════════════════════════════════════════════════════════════
            {
                id: 'probas-stats-methode',
                title: 'Probas, Stats et Methode',
                icon: '🎲',
                content: '<h3>Statistiques</h3>'
                    + '<ul>'
                    + '<li><strong>Moyenne</strong> = somme / nombre de valeurs.</li>'
                    + '<li><strong>Mediane</strong> = valeur du milieu (50/50).</li>'
                    + '<li><strong>Etendue</strong> = max - min.</li>'
                    + '</ul>'
                    + '<h3>Probabilites</h3>'
                    + '<ul>'
                    + '<li><strong>P</strong> = cas favorables / cas possibles.</li>'
                    + '<li><strong>Arbre</strong> : on multiplie le long des branches.</li>'
                    + '</ul>',
                flashcards: [
                    // --- 1. Moyenne ---
                    {
                        question: 'Comment calculer une moyenne ?',
                        answer: '🎯 Moyenne = somme de toutes les valeurs / nombre de valeurs.\n\n'
                            + 'Exemple : notes = 8, 12, 14, 10, 6.\n'
                            + 'Somme = 8 + 12 + 14 + 10 + 6 = 50.\n'
                            + 'Nombre de notes = 5.\n'
                            + 'Moyenne = 50 / 5 = 10.\n\n'
                            + 'En gros : on additionne tout, on divise par combien il y en a.\n\n'
                            + '💡 Astuce dys : pense a "partager equitablement". Si 5 amis partagent 50 bonbons, chacun a 10.\n\n'
                            + '⚠️ Piege Brevet : avec des effectifs, fais (valeur x effectif) pour chaque, puis divise par l\'effectif total.'
                    },
                    // --- 2. Moyenne ponderee ---
                    {
                        question: 'Comment calculer une moyenne avec des effectifs (coefficients) ?',
                        answer: '🎯 Moyenne = somme des (valeur x effectif) / effectif total.\n\n'
                            + 'Exemple : note 10 (3 eleves), note 14 (2 eleves).\n'
                            + '= (10 x 3 + 14 x 2) / (3 + 2)\n'
                            + '= (30 + 28) / 5 = 58 / 5 = 11,6.\n\n'
                            + 'En gros : chaque note "compte" autant de fois qu\'il y a d\'eleves.\n\n'
                            + 'Mot difficile : "ponderee" = avec des poids (coefficients).\n\n'
                            + '💡 Astuce dys : fais un tableau : colonne 1 = valeur, colonne 2 = effectif, colonne 3 = valeur x effectif.\n\n'
                            + '⚠️ Piege Brevet : diviser par le nombre de lignes au lieu de l\'effectif total.'
                    },
                    // --- 3. Mediane ---
                    {
                        question: 'C\'est quoi la mediane ?',
                        answer: '🎯 C\'est la valeur du MILIEU quand on range dans l\'ordre.\n\n'
                            + 'Exemple impair : 3, 5, 7, 9, 11 → mediane = 7.\n'
                            + 'Exemple pair : 3, 5, 7, 9 → mediane = (5 + 7) / 2 = 6.\n\n'
                            + 'En gros : 50% en dessous, 50% au dessus.\n\n'
                            + 'Mot difficile : "mediane" = qui coupe en deux moities egales.\n\n'
                            + '💡 Astuce dys : range d\'abord dans l\'ordre croissant. La mediane est AU MILIEU de la liste.\n\n'
                            + '⚠️ Piege Brevet : oublier de RANGER dans l\'ordre avant de chercher le milieu.'
                    },
                    // --- 4. Etendue ---
                    {
                        question: 'C\'est quoi l\'etendue ?',
                        answer: '🎯 Etendue = plus grande valeur - plus petite valeur.\n\n'
                            + 'Exemple : notes = 4, 8, 12, 15, 18.\n'
                            + 'Etendue = 18 - 4 = 14.\n\n'
                            + 'En gros : ca mesure l\'ecart entre le max et le min.\n\n'
                            + '💡 Astuce dys : "Etendue = Ecart total." Le E de Etendue = le E de Ecart.\n\n'
                            + '⚠️ Piege Brevet : calculer max + min au lieu de max - min. C\'est toujours une SOUSTRACTION.'
                    },
                    // --- 5. Quartiles ---
                    {
                        question: 'C\'est quoi les quartiles ?',
                        answer: '🎯 Ils coupent la serie en 4 parts egales.\n\n'
                            + 'Q1 = premier quartile. 25% des valeurs sont en dessous.\n'
                            + 'Q2 = mediane. 50%.\n'
                            + 'Q3 = troisieme quartile. 75%.\n\n'
                            + 'Ecart interquartile = Q3 - Q1.\n\n'
                            + 'En gros : Q1, mediane, Q3 coupent la serie en 4 morceaux egaux.\n\n'
                            + '💡 Astuce dys : "Quart" = 1/4. Les quartiles coupent en QUARTs.\n\n'
                            + '⚠️ Piege Brevet : ne pas ranger les valeurs dans l\'ordre avant de chercher les quartiles.'
                    },
                    // --- 6. Probabilite simple ---
                    {
                        question: 'Comment calculer une probabilite ?',
                        answer: '🎯 P(evenement) = nombre de cas favorables / nombre de cas possibles.\n\n'
                            + 'Exemple : un de a 6 faces.\n'
                            + 'P(obtenir 3) = 1/6.\n'
                            + 'P(obtenir un nombre pair) = 3/6 = 1/2.\n\n'
                            + 'En gros : combien de resultats "gagnants" sur combien de resultats en tout.\n\n'
                            + '💡 Astuce dys : ecris la fraction "ce que je veux" / "tout ce qui est possible".\n\n'
                            + '⚠️ Piege Brevet : oublier de compter TOUS les cas possibles. Un de a 6 faces = 6 cas, pas 3.'
                    },
                    // --- 7. Evenement contraire ---
                    {
                        question: 'C\'est quoi un evenement contraire ?',
                        answer: '🎯 P(contraire) = 1 - P(evenement).\n\n'
                            + 'Exemple : P(pluie) = 0,3.\n'
                            + 'P(pas pluie) = 1 - 0,3 = 0,7.\n\n'
                            + 'Autre : P(avoir 6 au de) = 1/6.\n'
                            + 'P(ne PAS avoir 6) = 1 - 1/6 = 5/6.\n\n'
                            + 'En gros : la proba de "oui" + la proba de "non" = 1 toujours.\n\n'
                            + '💡 Astuce dys : "Le contraire, c\'est 1 moins." Retiens : "Contraire = 1 -"\n\n'
                            + '⚠️ Piege Brevet : c\'est souvent plus facile de calculer le contraire. Pense-y !'
                    },
                    // --- 8. Arbre de probabilites ---
                    {
                        question: 'Comment utiliser un arbre de probabilites ?',
                        answer: '🎯 Regles de l\'arbre :\n\n'
                            + '1) La somme des branches a chaque noeud = 1.\n'
                            + '2) On MULTIPLIE le long d\'un chemin.\n'
                            + '3) On ADDITIONNE les chemins qui donnent le meme resultat.\n\n'
                            + 'Exemple : 2 lancers de piece.\n'
                            + 'P(pile puis face) = 1/2 x 1/2 = 1/4.\n\n'
                            + 'En gros : on suit les branches en multipliant.\n\n'
                            + '💡 Astuce dys : "MULTI quand tu SUIS un chemin. PLUS quand tu COMPTES plusieurs chemins."\n\n'
                            + '⚠️ Piege Brevet : additionner au lieu de multiplier le long d\'un chemin.'
                    },
                    // --- 9. Frequence ---
                    {
                        question: 'C\'est quoi la frequence ?',
                        answer: '🎯 Frequence = nombre de fois ou c\'est arrive / nombre total d\'experiences.\n\n'
                            + 'Exemple : tu lances un de 100 fois. Le 6 sort 18 fois.\n'
                            + 'Frequence du 6 = 18/100 = 0,18 = 18%.\n\n'
                            + 'En gros : la frequence c\'est ce qui se passe EN VRAI. La probabilite c\'est la THEORIE.\n\n'
                            + '💡 Astuce dys : plus tu fais d\'experiences, plus la frequence se rapproche de la probabilite.\n\n'
                            + '⚠️ Piege Brevet : confondre frequence et probabilite. La frequence varie, la probabilite est fixe.'
                    },
                    // --- 10. Diagramme en boite ---
                    {
                        question: 'Comment lire un diagramme en boite (boite a moustaches) ?',
                        answer: '🎯 Il montre 5 valeurs : minimum, Q1, mediane, Q3, maximum.\n\n'
                            + 'La "boite" va de Q1 a Q3. Le trait au milieu = mediane.\n'
                            + 'Les "moustaches" vont du min au Q1 et du Q3 au max.\n\n'
                            + 'En gros : la boite contient 50% des valeurs du milieu.\n\n'
                            + '💡 Astuce dys : dessine-le : --[---|---]--. Les crochets = la boite. Le trait = mediane.\n\n'
                            + '⚠️ Piege Brevet : confondre la mediane et la moyenne. Le trait dans la boite = mediane, PAS moyenne.'
                    },
                    // --- 11. Arbre a deux etapes ---
                    {
                        question: 'Comment faire un arbre a DEUX etapes ?',
                        answer: '🎯 Exemple : sac avec 3 rouges et 2 bleues. On tire 2 billes (avec remise).\n\n'
                            + '1re etape : P(R) = 3/5, P(B) = 2/5.\n'
                            + '2e etape : pareil (remise).\n\n'
                            + 'P(R puis R) = 3/5 x 3/5 = 9/25.\n'
                            + 'P(R puis B) = 3/5 x 2/5 = 6/25.\n\n'
                            + 'En gros : chaque etape ajoute un niveau de branches.\n\n'
                            + '💡 Astuce dys : dessine l\'arbre COMPLET avant de calculer. Ne saute pas d\'etape.\n\n'
                            + '⚠️ Piege Brevet : "avec remise" → les probas restent les memes. "Sans remise" → elles changent !'
                    },
                    // --- 12. Tips automatismes (sans calculatrice) ---
                    {
                        question: 'C\'est quoi l\'epreuve "automatismes" du Brevet ?',
                        answer: '🎯 C\'est la 1re partie de l\'epreuve de maths. 20 minutes. SANS calculatrice.\n\n'
                            + '5 exercices courts. Calcul mental, fractions, pourcentages.\n\n'
                            + 'En gros : des questions rapides pour tester si tu connais les bases.\n\n'
                            + '📝 Astuce dys : entraine-toi a calculer SANS calculatrice. Tables, fractions simples, puissances de 10.\n\n'
                            + '⚠️ Piege Brevet : perdre trop de temps sur une question. Si tu bloques, passe a la suivante.'
                    },
                    // --- 13. Strategie exam ---
                    {
                        question: 'Quelles astuces pour gagner des points au Brevet maths ?',
                        answer: '🎯 Les 5 regles d\'or :\n\n'
                            + '1) Lis l\'enonce 2 FOIS avant de commencer.\n'
                            + '2) Ecris les formules AVANT de remplacer par les nombres.\n'
                            + '3) Cite les theoremes par leur NOM (Pythagore, Thales).\n'
                            + '4) Fais un DESSIN quand c\'est de la geometrie.\n'
                            + '5) VERIFIE tes calculs (remplacement dans l\'equation).\n\n'
                            + 'En gros : redaction soignee + verification = points bonus.\n\n'
                            + '📝 Astuce dys : ecris les 3 identites remarquables et SOH-CAH-TOA au brouillon des le debut.\n\n'
                            + '⚠️ Piege Brevet : sauter la redaction. Meme un bon resultat sans explication = points en moins.'
                    },
                    // --- 14. Calcul mental ---
                    {
                        question: 'Quels calculs faut-il savoir faire de tete pour le Brevet ?',
                        answer: '🎯 A connaitre par coeur :\n\n'
                            + '• Tables de multiplication (jusqu\'a 12).\n'
                            + '• Carres : 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144.\n'
                            + '• Fractions ↔ decimaux : 1/2=0,5 ; 1/4=0,25 ; 3/4=0,75 ; 1/5=0,2.\n'
                            + '• Puissances de 2 : 2, 4, 8, 16, 32, 64, 128, 256.\n'
                            + '• Puissances de 10 : 10, 100, 1000...\n\n'
                            + 'En gros : ces nombres reviennent tout le temps. Apprends-les comme du vocabulaire.\n\n'
                            + '💡 Astuce dys : revise 5 minutes par jour. En 2 semaines, tu les sauras tous.\n\n'
                            + '⚠️ Piege Brevet : ne pas connaitre ses tables de multiplication. Ca ralentit TOUT.'
                    }
                ],
                quiz: [
                    { question: 'La moyenne de 5, 8, 12, 15 est :', options: ['10', '12', '8', '40'], correctIndex: 0, explanation: 'Moyenne = (5 + 8 + 12 + 15) / 4 = 40 / 4 = 10.' },
                    { question: 'La mediane de 2, 5, 7, 10, 13 est :', options: ['5', '7', '10', '7,4'], correctIndex: 1, explanation: '5 valeurs rangees. Le milieu = la 3e valeur = 7.' },
                    { question: 'L\'etendue de 3, 7, 11, 15, 20 est :', options: ['17', '20', '3', '11'], correctIndex: 0, explanation: 'Etendue = 20 - 3 = 17.' },
                    { question: 'On lance un de a 6 faces. \\( P(\\text{nombre} > 4) \\) vaut :', options: ['\\( \\frac{1}{3} \\)', '\\( \\frac{2}{3} \\)', '\\( \\frac{1}{2} \\)', '\\( \\frac{1}{6} \\)'], correctIndex: 0, explanation: 'Nombres > 4 : 5 et 6. P = 2/6 = 1/3.' },
                    { question: 'Si \\( P(A) = 0{,}7 \\), alors \\( P(\\overline{A}) \\) vaut :', options: ['0,7', '0,3', '0', '1'], correctIndex: 1, explanation: 'P(contraire) = 1 - 0,7 = 0,3.' },
                    { question: 'Dans un arbre, P(A) = 1/3 puis P(B|A) = 1/2. P(A et B) vaut :', options: ['\\( \\frac{1}{6} \\)', '\\( \\frac{5}{6} \\)', '\\( \\frac{1}{3} \\)', '\\( \\frac{1}{2} \\)'], correctIndex: 0, explanation: 'On multiplie le long des branches : 1/3 x 1/2 = 1/6.' },
                    { question: 'Un sac contient 4 rouges et 6 bleues. P(rouge) vaut :', options: ['\\( \\frac{4}{6} \\)', '\\( \\frac{2}{5} \\)', '\\( \\frac{4}{10} \\)', '\\( \\frac{2}{5} \\) et \\( \\frac{4}{10} \\)'], correctIndex: 3, explanation: 'P(rouge) = 4/10 = 2/5. Les deux ecritures sont egales.' },
                    { question: 'Si Q1 = 10 et Q3 = 18, l\'ecart interquartile vaut :', options: ['28', '8', '14', '10'], correctIndex: 1, explanation: 'Ecart interquartile = Q3 - Q1 = 18 - 10 = 8.' },
                    { question: 'On lance une piece 2 fois. P(2 faces) vaut :', options: ['\\( \\frac{1}{2} \\)', '\\( \\frac{1}{4} \\)', '\\( \\frac{1}{3} \\)', '\\( \\frac{3}{4} \\)'], correctIndex: 1, explanation: 'P(face et face) = 1/2 x 1/2 = 1/4.' },
                    { question: 'Un de lance 200 fois. Le 3 sort 38 fois. La frequence du 3 est :', options: ['0,19', '0,38', '38', '0,167'], correctIndex: 0, explanation: 'Frequence = 38/200 = 0,19.' }
                ]
            },
            // ═══════════════════════════════════════════════════════════════
            // SECTION 9 — Geometrie dans l'espace (Phase 3, gaps CRITIQUES BO)
            // Source : BO special n°31 du 30/07/2020, theme "Espace et geometrie"
            // ═══════════════════════════════════════════════════════════════
            {
                id: 'geometrie-espace',
                title: 'Geometrie dans l\'espace',
                icon: '📦',
                content: '<h3>Geometrie dans l\'espace : les formules essentielles</h3>'
                    + '<ul>'
                    + '<li><strong>Volumes</strong> : cube, pave, cylindre, cone, pyramide, sphere.</li>'
                    + '<li><strong>Sections planes</strong> : forme obtenue quand on coupe un solide.</li>'
                    + '<li><strong>Agrandissement-reduction</strong> : si longueurs x k, alors aires x k<sup>2</sup>, volumes x k<sup>3</sup>.</li>'
                    + '</ul>',
                flashcards: [
                    {
                        level: 'facile',
                        question: 'Volume d\'un cube d\'arete a ?',
                        answer: '🎯 Cube d\'arete 4 cm → V = 64 cm³.\n\n'
                            + 'Formule : V = a × a × a = a³.\n'
                            + 'En gros : l\'arete multipliee 3 fois par elle-meme.\n'
                            + '💡 Un cube a 3 dimensions egales (L=l=h).',
                        pitfalls: [
                            'Ne pas confondre aire (a²) et volume (a³).',
                            'Toujours ecrire l\'unite en cm³ (ou m³), pas en cm.'
                        ]
                    },
                    {
                        level: 'facile',
                        question: 'Volume d\'un pave droit ?',
                        answer: '🎯 Pave 5 × 3 × 2 cm → V = 30 cm³.\n\n'
                            + 'Formule : V = L × l × h.\n'
                            + 'En gros : on multiplie les 3 dimensions.\n'
                            + '💡 Le cube est un cas special (L = l = h).',
                        pitfalls: [
                            'Attention aux UNITES : si les dimensions sont en metres, le volume est en m³.',
                            'Toutes les dimensions doivent etre dans la meme unite avant de multiplier.'
                        ]
                    },
                    {
                        level: 'moyen',
                        question: 'Volume d\'un cylindre (rayon r, hauteur h) ?',
                        answer: '🎯 Cylindre r=3, h=10 → V = 90π ≈ 282,7 cm³.\n\n'
                            + 'Formule : V = π × r² × h.\n'
                            + 'En gros : aire du disque (π × r²) × hauteur.\n'
                            + '💡 Imagine des disques empiles sur h cm.',
                        pitfalls: [
                            'Oublier le ² sur le rayon. π x r x h est FAUX.',
                            'Si on te donne le diametre, rayon = diametre / 2. Ne jamais confondre.'
                        ]
                    },
                    {
                        level: 'moyen',
                        question: 'Volume d\'un cone (rayon r, hauteur h) ?',
                        answer: '🎯 Cone r=3, h=9 → V = 27π ≈ 84,8 cm³.\n\n'
                            + 'Formule : V = (1/3) × π × r² × h.\n'
                            + 'En gros : le TIERS du cylindre de memes dimensions.\n'
                            + '💡 "Cone = cylindre / 3". Retiens le 1/3 !',
                        pitfalls: [
                            'Oublier le 1/3 : c\'est le piege le plus frequent au DNB.',
                            'Utiliser la hauteur OBLIQUE (generatrice) au lieu de la hauteur droite. La hauteur va du sommet au centre de la base.'
                        ]
                    },
                    {
                        level: 'moyen',
                        question: 'Volume d\'une pyramide ?',
                        answer: '🎯 Pyramide base 4×4, h=6 → V = 32 cm³.\n\n'
                            + 'Formule : V = (1/3) × Aire base × hauteur.\n'
                            + 'En gros : aire du sol × hauteur, divise par 3.\n'
                            + '💡 Comme le cone : toujours le 1/3.',
                        pitfalls: [
                            'Oublier le 1/3 (comme le cone).',
                            'Prendre une arete laterale au lieu de la hauteur de la pyramide (du sommet au centre de la base).'
                        ]
                    },
                    {
                        level: 'difficile',
                        question: 'Volume d\'une sphere (boule) de rayon r ?',
                        answer: '🎯 Boule r=3 → V = 36π ≈ 113,1 cm³.\n\n'
                            + 'Formule : V = (4/3) × π × r³.\n'
                            + 'En gros : "4/3" et r au CUBE.\n'
                            + '💡 Repete "quatre tiers pi r trois" jusqu\'a l\'automatisme.',
                        pitfalls: [
                            'Utiliser r² au lieu de r³ (confusion avec le cylindre).',
                            'Confondre avec l\'aire d\'une sphere, qui est differente : A = 4π x r².'
                        ]
                    },
                    {
                        level: 'facile',
                        question: 'Unites de volume : conversions ?',
                        answer: '🎯 5 L = 5 dm³ = 5000 cm³.\n\n'
                            + '• 1 m³ = 1000 dm³\n'
                            + '• 1 dm³ = 1 Litre = 1000 cm³\n'
                            + '• 1 cm³ = 1 mL\n'
                            + '💡 Les litres servent pour les liquides.',
                        pitfalls: [
                            'Confondre cm² (aire) et cm³ (volume).',
                            'Entre 2 unites de volume qui se suivent, le facteur est 1000 (pas 10).'
                        ]
                    },
                    {
                        level: 'moyen',
                        question: 'Section d\'un cube coupe parallelement a une face ?',
                        answer: '🎯 Cube arete 5 cm → section = carre 5 × 5.\n\n'
                            + 'C\'est un carre, meme taille que les faces.\n'
                            + '💡 Comme trancher un gateau cubique horizontalement.',
                        pitfalls: [
                            'Section = forme 2D obtenue, pas le morceau 3D resultant.',
                            'Si le plan n\'est pas parallele a une face, la section peut etre un rectangle, un triangle ou un hexagone.'
                        ]
                    },
                    {
                        level: 'moyen',
                        question: 'Section d\'un cylindre coupe parallelement a sa base ?',
                        answer: '🎯 Cylindre r=4 → section = disque r=4.\n\n'
                            + 'Parallele a la base → DISQUE (meme rayon).\n'
                            + 'Parallele a l\'axe → RECTANGLE.\n'
                            + '💡 Bouteille : tranche horizontale = disque, verticale = rectangle.',
                        pitfalls: [
                            'Ne pas confondre disque (forme 2D) et cylindre (forme 3D).',
                            'Le rectangle obtenu en coupe verticale passant par l\'axe a pour cotes 2r (diametre) et h.'
                        ]
                    },
                    {
                        level: 'moyen',
                        question: 'Longueurs × k : comment varient les AIRES ?',
                        answer: '🎯 k = 3 → aires × 9. k = 0,5 → aires ÷ 4.\n\n'
                            + 'Regle : longueurs × k → aires × k².\n'
                            + 'En gros : agrandir 2 fois → aires × 4 (pas × 2).\n'
                            + '💡 Une surface a 2 dimensions : k apparait 2 fois.',
                        pitfalls: [
                            'Multiplier les aires par k au lieu de k². Erreur classique au DNB.',
                            'Les perimetres, eux, sont multiplies par k (car ce sont des longueurs, pas des aires).'
                        ]
                    },
                    {
                        level: 'difficile',
                        question: 'Longueurs × k : comment varient les VOLUMES ?',
                        answer: '🎯 k = 2 → volumes × 8. k = 1/10 → volumes ÷ 1000.\n\n'
                            + 'Regle : longueurs × k → volumes × k³.\n'
                            + 'En gros : cube × 2 en taille → 8 cubes de depart a l\'interieur.\n'
                            + '💡 Un volume a 3 dimensions : k apparait 3 fois.',
                        pitfalls: [
                            'Multiplier les volumes par k (comme les longueurs) ou k² (comme les aires). L\'erreur la plus classique au DNB.',
                            'Oublier de rendre k³ explicite dans la redaction : ecrire "2³ = 8".'
                        ]
                    },
                    {
                        level: 'difficile',
                        question: 'Piscine 40 m³ reduite au 1/10 : volume du modele ?',
                        answer: '🎯 Modele reduit = 0,04 m³ = 40 litres.\n\n'
                            + 'Pourquoi ? k = 1/10 → volumes × (1/10)³ = ÷ 1000.\n'
                            + '40 × (1/1000) = 0,04 m³.\n'
                            + '💡 "Divise par 10 au cube" = "divise par 1000".',
                        pitfalls: [
                            'Ecrire "volume / 10" (faux : on divise par 1000).',
                            'Erreur d\'unite : 40 m³ = 40 000 L, donc 40 m³ / 1000 = 40 L. Verifie tes conversions.'
                        ]
                    }
                ],
                quiz: [],
                miniSujet: {
                    title: 'Mini-sujet DNB — Le reservoir et le cone',
                    duration: '15 minutes',
                    intro: 'Un reservoir a la forme d\'un cylindre de rayon 50 cm et de hauteur 120 cm. A l\'interieur, on immerge completement un cone plein de rayon 30 cm et de hauteur 60 cm. On prendra π ≈ 3,14.',
                    questions: [
                        {
                            type: 'open',
                            text: 'Question 1 (Facile) — Calcule le volume du reservoir (cylindre) en cm³.',
                            answer: 'V = π x r² x h = 3,14 x 50² x 120 = 3,14 x 2500 x 120 = 942 000 cm³.'
                        },
                        {
                            type: 'open',
                            text: 'Question 2 (Moyen) — Calcule le volume du cone en cm³.',
                            answer: 'V = (1/3) x π x r² x h = (1/3) x 3,14 x 30² x 60 = (1/3) x 3,14 x 900 x 60 = 56 520 cm³.'
                        },
                        {
                            type: 'qcm',
                            text: 'Question 3 (Moyen) — Avec le cone immerge, quel volume d\'eau faut-il pour remplir le reservoir (en litres) ?',
                            options: ['88 L', '94,2 L', '885,48 L', '942 L'],
                            correctIndex: 2,
                            answer: 'Volume eau = V_cylindre - V_cone = 942 000 - 56 520 = 885 480 cm³. Conversion : 1 L = 1000 cm³, donc 885,48 L.'
                        },
                        {
                            type: 'open',
                            text: 'Question 4 (Difficile) — On construit un modele reduit du reservoir au 1/5. Calcule le volume du cylindre reduit en cm³.',
                            answer: 'k = 1/5 → volumes x k³ = (1/5)³ = 1/125. Volume reduit = 942 000 / 125 = 7 536 cm³.'
                        },
                        {
                            type: 'qcm',
                            text: 'Question 5 (Scratch) — On veut dessiner un hexagone regulier (6 cotes) avec Scratch. L\'angle de rotation a chaque etape doit etre :',
                            options: ['30°', '60°', '90°', '120°'],
                            correctIndex: 1,
                            answer: '360° / 6 = 60°. Pour un polygone regulier a N cotes, on tourne de 360/N degres a chaque etape.'
                        }
                    ]
                }
            },
            // ═══════════════════════════════════════════════════════════════
            // SECTION 10 — Algorithmique Scratch (Phase 3, gaps CRITIQUES BO)
            // Source : BO special n°31 du 30/07/2020, theme "Algorithmique et programmation"
            // ═══════════════════════════════════════════════════════════════
            {
                id: 'algorithmique-scratch',
                title: 'Algorithmique (Scratch)',
                icon: '🤖',
                content: '<h3>Algorithmique avec Scratch</h3>'
                    + '<ul>'
                    + '<li><strong>Avancer, tourner</strong> : controler le deplacement du lutin.</li>'
                    + '<li><strong>Repeter, si... alors, si... sinon</strong> : les structures de controle.</li>'
                    + '<li><strong>Variables</strong> : stocker une valeur (score, compteur, etc.).</li>'
                    + '</ul>',
                flashcards: [
                    {
                        level: 'facile',
                        question: 'Que fait "avancer de 50" en Scratch ?',
                        answer: '🎯 Le lutin avance de 50 pixels dans sa direction.\n\n'
                            + '1 pas = 1 pixel sur l\'ecran.\n'
                            + '💡 Direction initiale : vers la DROITE (pas le haut).',
                        pitfalls: [
                            'Le lutin peut sortir de l\'ecran si on l\'envoie trop loin.',
                            'La direction initiale du lutin est vers la DROITE (90°), pas vers le haut.'
                        ]
                    },
                    {
                        level: 'facile',
                        question: 'Lutin a droite, puis "tourner 90° a gauche" → il regarde ou ?',
                        answer: '🎯 Vers le HAUT.\n\n'
                            + 'Directions Scratch :\n'
                            + '• droite = 90°\n'
                            + '• bas = 180°\n'
                            + '• gauche = -90°\n'
                            + '• haut = 0°\n'
                            + '💡 Dessine une boussole sur ton brouillon.',
                        pitfalls: [
                            'Confondre "tourner a gauche" (anti-horaire) et "tourner a droite" (horaire).',
                            'Penser que 0° = vers la droite. En Scratch, 0° = vers le haut.'
                        ]
                    },
                    {
                        level: 'facile',
                        question: '"Repeter 4 fois : avancer 50, tourner 90°" : quelle figure ?',
                        answer: '🎯 Un CARRE de 50 pas de cote.\n\n'
                            + 'Pourquoi ? 4 × (avancer + tourner 90°) = carre ferme.\n'
                            + '💡 Polygone a N cotes : tourne de 360/N.\n'
                            + '(triangle = 120°, carre = 90°, pentagone = 72°)',
                        pitfalls: [
                            'Oublier de baisser le stylo avant la boucle si on veut dessiner.',
                            'Multiplier 50 par 4 pour trouver la longueur du cote. Non : chaque cote fait 50.'
                        ]
                    },
                    {
                        level: 'moyen',
                        question: 'A quoi sert une VARIABLE en Scratch ?',
                        answer: '🎯 Exemple : "score" = 0. Bonne reponse → "ajouter 1 a score".\n\n'
                            + 'Une variable stocke une valeur modifiable.\n'
                            + 'En gros : une boite avec un nom et une valeur dedans.\n'
                            + '💡 "Mettre X a 2" ecrase. "Ajouter 1 a X" incremente.',
                        pitfalls: [
                            'Oublier d\'initialiser la variable (ex: "mettre score a 0" au depart).',
                            'Confondre "mettre score a 1" (ecrase la valeur) et "ajouter 1 a score" (incremente).'
                        ]
                    },
                    {
                        level: 'moyen',
                        question: 'Que fait "SI touche rouge ALORS dire Attention" ?',
                        answer: '🎯 Lutin touche rouge → affiche "Attention". Sinon : rien.\n\n'
                            + 'Structure : SI (condition) ALORS (action).\n'
                            + 'Une condition est vraie ou fausse.\n'
                            + '💡 Comme "s\'il pleut, alors parapluie".',
                        pitfalls: [
                            'Confondre "SI... ALORS" et "SI... ALORS... SINON...". Sans SINON, rien ne se passe quand la condition est fausse.',
                            'Placer le test en dehors d\'une boucle : il n\'est alors evalue qu\'une seule fois.'
                        ]
                    },
                    {
                        level: 'moyen',
                        question: '"Repeter 10 fois" vs "repeter indefiniment" ?',
                        answer: '🎯 "10 fois" s\'arrete. "Indefiniment" ne s\'arrete jamais.\n\n'
                            + 'Indefini utile pour :\n'
                            + '• surveiller un capteur\n'
                            + '• animer en continu\n'
                            + '💡 Boucle infinie = "tourne tant qu\'on clique pas arret".',
                        pitfalls: [
                            'Mettre "repeter indefiniment" sans condition de sortie interne : le programme tourne sans fin.',
                            'Oublier qu\'une boucle infinie empeche la suite du programme de s\'executer.'
                        ]
                    },
                    {
                        level: 'difficile',
                        question: '"x=0 ; repeter 5 fois : ajouter 2 a x" → valeur finale de x ?',
                        answer: '🎯 x = 10.\n\n'
                            + 'Tours : 0 → 2 → 4 → 6 → 8 → 10.\n'
                            + 'Calcul rapide : 5 × 2 = 10.\n'
                            + '💡 Fais toujours un tableau pour suivre les tours.',
                        pitfalls: [
                            'Oublier la valeur initiale de x (= 0) et commencer a 2.',
                            'Confondre "ajouter 2 a x" (increment) et "mettre x a 2" (affectation qui ecrase).'
                        ]
                    },
                    {
                        level: 'difficile',
                        question: 'Programme pour dessiner un triangle equilateral de cote 100 ?',
                        answer: '🎯 Programme :\n\n'
                            + '1. baisser le stylo\n'
                            + '2. repeter 3 fois :\n'
                            + '     avancer de 100\n'
                            + '     tourner de 120° a droite\n\n'
                            + 'Pourquoi 120° ? 360 / 3 cotes = 120°.\n'
                            + '💡 "Angle exterieur = 360 / nombre de cotes".',
                        pitfalls: [
                            'Tourner de 60° (l\'angle INTERIEUR) au lieu de 120° (l\'angle EXTERIEUR a tourner).',
                            'Oublier de baisser le stylo au debut → le lutin bouge sans tracer.'
                        ]
                    }
                ],
                quiz: []
            },
            // ═══════════════════════════════════════════════════════════════
            // SECTION 11 — Pieges classiques du DNB (maths)
            // Source : annales DNB 2019-2024 (Eduscol), erreurs recurrentes
            // ═══════════════════════════════════════════════════════════════
            {
                id: 'pieges-dnb',
                title: 'Pieges classiques du DNB',
                icon: '⚠️',
                content: '<h3>Pieges classiques du DNB (maths)</h3>'
                    + '<p>Cette section regroupe les erreurs les plus frequentes repetees au brevet chaque annee. Apprends a les eviter.</p>',
                flashcards: [
                    {
                        level: 'facile',
                        question: 'Difference entre 5² et 5³ ?',
                        answer: '🎯 5² = 25 (5 × 5). 5³ = 125 (5 × 5 × 5).\n\n'
                            + 'L\'exposant = nombre de fois qu\'on multiplie.\n'
                            + '💡 "Carre = 2 fois, cube = 3 fois".',
                        pitfalls: [
                            'Confondre l\'exposant 2 et l\'exposant 3.',
                            'Ecrire 5² = 10 (on additionne au lieu de multiplier). Faux.'
                        ]
                    },
                    {
                        level: 'moyen',
                        question: 'Developpe (x + 3)(x - 2).',
                        answer: '🎯 (x + 3)(x - 2) = x² + x - 6.\n\n'
                            + 'Methode : chaque terme du 1er × chaque terme du 2e.\n'
                            + '• x × x = x²\n'
                            + '• x × (-2) = -2x\n'
                            + '• 3 × x = 3x\n'
                            + '• 3 × (-2) = -6\n'
                            + 'Total : x² + (-2x + 3x) - 6 = x² + x - 6.',
                        pitfalls: [
                            'Oublier le terme central (x) et ecrire x² - 6.',
                            'Se tromper de signe sur le -2 x 3 = -6 (pas +6).'
                        ]
                    },
                    {
                        level: 'moyen',
                        question: 'Calcule 5 - (-3).',
                        answer: '🎯 5 - (-3) = 5 + 3 = 8.\n\n'
                            + 'Regle : "moins suivi de moins" = plus.\n'
                            + 'Le "- (-3)" devient "+3".\n'
                            + '💡 Deux "-" qui se suivent s\'annulent en "+".',
                        pitfalls: [
                            'Repondre 2 (on soustrait au lieu d\'additionner).',
                            'Oublier la regle des signes et faire 5 - 3 = 2.'
                        ]
                    },
                    {
                        level: 'moyen',
                        question: 'Si x² = 36, toutes les solutions ?',
                        answer: '🎯 x = 6 OU x = -6.\n\n'
                            + 'Pourquoi ? (-6)² = 36 aussi.\n'
                            + '💡 "x² = nombre positif → DEUX solutions".',
                        pitfalls: [
                            'Oublier la solution negative et repondre seulement x = 6.',
                            'Ecrire "racine de 36 = +/- 6". Faux : la racine est toujours positive. C\'est l\'equation qui a 2 solutions.'
                        ]
                    },
                    {
                        level: 'moyen',
                        question: 'Dans Pythagore, que represente c ?',
                        answer: '🎯 c = l\'HYPOTENUSE (plus grand cote, face a l\'angle droit).\n\n'
                            + 'a et b = les 2 cotes de l\'angle droit.\n'
                            + '💡 "L\'hypotenuse fait face a l\'angle droit".\n'
                            + 'Attention : pas d\'angle droit → Pythagore ne marche pas.',
                        pitfalls: [
                            'Mettre l\'hypotenuse du mauvais cote de l\'egalite.',
                            'Si le triangle n\'a PAS d\'angle droit, Pythagore ne s\'applique pas.'
                        ]
                    },
                    {
                        level: 'difficile',
                        question: 'Pyramide base 16 cm², hauteur 6 cm : volume ?',
                        answer: '🎯 V = (1/3) × 16 × 6 = 32 cm³.\n\n'
                            + 'Piege DNB : beaucoup repondent 96 (oubli du 1/3).\n'
                            + '💡 "Pyramide et cone → toujours 1/3".',
                        pitfalls: [
                            'Oublier le 1/3. Repondre 96 cm³ au lieu de 32 cm³.',
                            'Oublier l\'unite cm³ (ecrire juste 32).'
                        ]
                    }
                ],
                quiz: []
            }
        ]
    });
})();
