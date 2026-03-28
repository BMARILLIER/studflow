// quizbac2.js — Quiz Bac Francais : Genres & XXe siecle (4 sections, 100 quiz)
(function() {
    if (!window.StudFlow || !window.StudFlow.subjects) return;

    window.StudFlow.subjects.register({
        id: 'quizbac2',
        name: 'Quiz Bac : Genres & XXe',
        icon: '\uD83D\uDCDD',
        color: 'mint',
        sections: [
            // ===============================================================
            // SECTION 1 : L'Ecriture de soi (25 quiz, 10 FC)
            // correctIndex target: 0(x6) 1(x7) 2(x6) 3(x6)
            // ===============================================================
            {
                id: 'ecriture-soi',
                title: 'L\'Ecriture de soi',
                icon: '\uD83D\uDD8A',
                content: '<h3>Les genres de l\'ecriture de soi</h3>'
                    + '<ul>'
                    + '<li><strong>Autobiographie</strong> : recit retrospectif en prose qu\'une personne reelle fait de sa propre existence, quand elle met l\'accent sur sa vie individuelle (definition de Philippe Lejeune). L\'auteur, le narrateur et le personnage sont une seule et meme personne.</li>'
                    + '<li><strong>Memoires</strong> : recit de sa propre vie centre sur les evenements historiques et publics. L\'auteur temoigne de son epoque plus que de son intimite (Chateaubriand, Memoires d\'outre-tombe).</li>'
                    + '<li><strong>Journal intime</strong> : ecriture au jour le jour, sans recul retrospectif. Le diariste consigne ses pensees, emotions et evenements quotidiens (Anne Frank, Journal).</li>'
                    + '<li><strong>Autofiction</strong> : terme invente par Serge Doubrovsky en 1977 pour qualifier un recit qui melange deliberement vecu autobiographique et fiction romanesque.</li>'
                    + '<li><strong>Autoportrait</strong> : description de soi non chronologique, qui procede par themes, fragments ou associations d\'idees (Montaigne, Essais ; Michel Leiris, L\'Age d\'homme).</li>'
                    + '<li><strong>Recit de filiation</strong> : l\'auteur raconte l\'histoire de ses parents ou ancetres pour comprendre sa propre identite (Annie Ernaux, La Place).</li>'
                    + '</ul>'
                    + '<h3>Concepts cles</h3>'
                    + '<ul>'
                    + '<li><strong>Le pacte autobiographique</strong> (Philippe Lejeune, 1975) : contrat de lecture par lequel l\'auteur s\'engage a dire la verite sur sa vie. Identite auteur = narrateur = personnage.</li>'
                    + '<li><strong>Sincerite et verite</strong> : l\'autobiographe peut-il etre totalement sincere ? La memoire reconstruit, deforme, selectionne. Rousseau affirme dans Les Confessions vouloir tout dire, mais peut-on se connaitre soi-meme ?</li>'
                    + '<li><strong>L\'identite narrative</strong> : selon Paul Ricoeur, c\'est en se racontant que le sujet construit son identite. Le recit de soi n\'est pas un simple reflet, c\'est une creation.</li>'
                    + '</ul>'
                    + '<h3>Oeuvres majeures</h3>'
                    + '<ul>'
                    + '<li><strong>Les Confessions</strong> (Rousseau, 1782) : premiere grande autobiographie moderne. "Je veux montrer a mes semblables un homme dans toute la verite de la nature."</li>'
                    + '<li><strong>Memoires d\'outre-tombe</strong> (Chateaubriand, 1848) : memoires monumentaux melant vie personnelle et histoire de la France post-revolutionnaire.</li>'
                    + '<li><strong>Les Mots</strong> (Sartre, 1964) : autobiographie de l\'enfance ou Sartre analyse avec ironie sa vocation d\'ecrivain.</li>'
                    + '<li><strong>W ou le souvenir d\'enfance</strong> (Perec, 1975) : recit qui alterne fiction allegorique et autobiographie fragmentaire, hantee par la Shoah.</li>'
                    + '<li><strong>Les Annees</strong> (Ernaux, 2008) : autobiographie impersonnelle ecrite a la troisieme personne, recit d\'une vie a travers la memoire collective.</li>'
                    + '<li><strong>L\'Age d\'homme</strong> (Leiris, 1939) : autoportrait ou Leiris cherche a se decrire sans complaisance, comparant l\'ecriture a la tauromachie.</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'Qu\'est-ce que le pacte autobiographique selon Philippe Lejeune ?', answer: 'C\'est un contrat de lecture par lequel l\'auteur s\'engage a dire la verite sur sa vie. Il implique l\'identite entre l\'auteur, le narrateur et le personnage principal. Lejeune le theorise dans Le Pacte autobiographique (1975).' },
                    { question: 'Quelle est la difference entre autobiographie et memoires ?', answer: 'L\'autobiographie se concentre sur la vie intime et individuelle de l\'auteur, tandis que les memoires privilegient le temoignage historique et la dimension publique de l\'existence. Chateaubriand, dans Memoires d\'outre-tombe, melange les deux dimensions.' },
                    { question: 'Qu\'est-ce que l\'autofiction et qui a invente ce terme ?', answer: 'L\'autofiction est un recit qui melange deliberement elements autobiographiques et fiction romanesque. Le terme a ete invente par Serge Doubrovsky en 1977 pour qualifier son roman Fils, situe entre le vecu reel et l\'invention narrative.' },
                    { question: 'Pourquoi Rousseau est-il considere comme le fondateur de l\'autobiographie moderne ?', answer: 'Dans Les Confessions (1782), Rousseau entreprend de se montrer "dans toute la verite de la nature" et affirme l\'unicite de son projet : "Je forme une entreprise qui n\'eut jamais d\'exemple." Il inaugure le genre en placant l\'individu au centre du recit.' },
                    { question: 'Quelle est la particularite de W ou le souvenir d\'enfance de Perec ?', answer: 'Le recit alterne deux fils narratifs : une fiction allegorique decrivant une ile totalitaire, et des fragments autobiographiques d\'une enfance marquee par la disparition de ses parents dans la Shoah. Le vide memoriel est au coeur de l\'oeuvre.' },
                    { question: 'Comment Michel Leiris definit-il son projet dans L\'Age d\'homme ?', answer: 'Leiris compare l\'ecriture autobiographique a la tauromachie : il veut se decrire sans complaisance, avec un risque reel, pour que l\'acte d\'ecrire soit aussi dangereux et engageant que l\'affrontement du taureau. C\'est un autoportrait sans concession.' },
                    { question: 'Qu\'est-ce qu\'un recit de filiation ?', answer: 'C\'est un recit ou l\'auteur raconte l\'histoire de ses parents ou ascendants pour eclairer sa propre identite. Annie Ernaux, dans La Place (1983), retrace la vie de son pere pour comprendre la distance sociale qui les separait. Le sujet se definit a travers ses origines.' },
                    { question: 'Quelle est la particularite des Annees d\'Annie Ernaux ?', answer: 'Ernaux ecrit une autobiographie impersonnelle a la troisieme personne ("elle"), fusionnant memoire individuelle et memoire collective. Le recit traverse les decennies de l\'apres-guerre aux annees 2000, racontant une vie a travers les transformations de la societe francaise.' },
                    { question: 'Pourquoi Les Mots de Sartre est-il une autobiographie paradoxale ?', answer: 'Sartre deconstruit avec ironie sa propre enfance et sa vocation d\'ecrivain. Il analyse lucidement les illusions qui l\'ont construit, tout en sachant que cette lucidite meme est un leurre. L\'autobiographie devient un exercice de demystification existentialiste.' },
                    { question: 'Quelles sont les limites de la sincerite autobiographique ?', answer: 'La memoire est selective et reconstruit le passe. L\'auteur ne peut se voir objectivement et risque la complaisance ou l\'auto-justification. De plus, le langage impose une mise en forme qui trahit le vecu brut. Rousseau lui-meme admet avoir parfois "orne" ses souvenirs.' }
                ],
                quiz: [
                    // Q0: correctIndex=0
                    { question: 'Qui a theorise le "pacte autobiographique" en 1975 ?', options: ['Philippe Lejeune', 'Paul Ricoeur', 'Gerard Genette', 'Roland Barthes'], correctIndex: 0, explanation: 'Philippe Lejeune definit le pacte autobiographique dans son essai de 1975, comme un contrat d\'identite entre auteur, narrateur et personnage.' },
                    // Q1: correctIndex=1
                    { question: 'Quelle est la condition fondamentale du pacte autobiographique selon Lejeune ?', options: ['L\'emploi du passe compose', 'L\'identite de l\'auteur, du narrateur et du personnage', 'L\'utilisation de la premiere personne', 'La publication du vivant de l\'auteur'], correctIndex: 1, explanation: 'Pour Lejeune, le pacte repose sur l\'identite de nom entre auteur, narrateur et personnage, et non sur le simple usage du "je".' },
                    // Q2: correctIndex=2
                    { question: 'Quel incipit celebre ouvre Les Confessions de Rousseau ?', options: ['Je suis ne a Geneve en 1712', 'Longtemps je me suis couche de bonne heure', 'Je forme une entreprise qui n\'eut jamais d\'exemple', 'Ma mere mourut des suites de l\'accouchement'], correctIndex: 2, explanation: 'Rousseau ouvre ses Confessions par "Je forme une entreprise qui n\'eut jamais d\'exemple", affirmant l\'originalite absolue de son projet autobiographique.' },
                    // Q3: correctIndex=3
                    { question: 'Qui a invente le terme "autofiction" en 1977 ?', options: ['Annie Ernaux', 'Georges Perec', 'Philippe Lejeune', 'Serge Doubrovsky'], correctIndex: 3, explanation: 'Doubrovsky cree le neologisme "autofiction" pour la quatrieme de couverture de son roman Fils (1977), designant un recit entre autobiographie et fiction.' },
                    // Q4: correctIndex=3
                    { question: 'Dans quel ouvrage Leiris compare-t-il l\'ecriture autobiographique a la tauromachie ?', options: ['Biffures', 'Fourbis', 'Fibrilles', 'L\'Age d\'homme'], correctIndex: 3, explanation: 'Dans la preface de L\'Age d\'homme (1939, preface de 1946), Leiris developpe la metaphore de la "corne du taureau" pour definir le risque necessaire de l\'ecriture de soi.' },
                    // Q5: correctIndex=2
                    { question: 'Quel est le sous-titre de W ou le souvenir d\'enfance de Perec ?', options: ['Recit', 'Roman', 'Il n\'y a pas de sous-titre specifique', 'Autobiographie'], correctIndex: 2, explanation: 'W ou le souvenir d\'enfance n\'a pas de sous-titre generique. Il alterne deux recits — une fiction et une autobiographie — sans se definir par un genre unique.' },
                    // Q6: correctIndex=0
                    { question: 'Les Memoires d\'outre-tombe de Chateaubriand ont ete publiees :', options: ['A titre posthume en 1848', 'De son vivant en 1830', 'En feuilleton entre 1840 et 1850', 'De son vivant en 1848'], correctIndex: 0, explanation: 'Chateaubriand avait exige que ses Memoires ne soient publiees qu\'apres sa mort. Elles parurent en 1848, l\'annee meme de son deces.' },
                    // Q7: correctIndex=2
                    { question: 'Dans Les Annees, Annie Ernaux ecrit a quelle personne grammaticale ?', options: ['La premiere personne du singulier', 'La premiere personne du pluriel', 'La troisieme personne du singulier', 'L\'alternance je/elle'], correctIndex: 2, explanation: 'Ernaux utilise "elle" et "on" plutot que "je", creant une autobiographie impersonnelle ou le destin individuel se fond dans la memoire collective.' },
                    // Q8: correctIndex=1
                    { question: 'Quelle oeuvre de Sartre constitue une autobiographie de l\'enfance publiee en 1964 ?', options: ['La Nausee', 'Les Mots', 'L\'Etre et le Neant', 'Les Mains sales'], correctIndex: 1, explanation: 'Les Mots (1964) est l\'autobiographie ou Sartre analyse avec ironie sa vocation precoce d\'ecrivain, nourrie par la bibliotheque de son grand-pere.' },
                    // Q9: correctIndex=3
                    { question: 'Qu\'est-ce qui distingue le journal intime de l\'autobiographie ?', options: ['Le journal est ecrit a la troisieme personne', 'Le journal est toujours publie a titre posthume', 'Le journal intime est une invention du XXe siecle', 'Le journal n\'a pas de recul retrospectif, il est ecrit au jour le jour'], correctIndex: 3, explanation: 'Le journal intime se caracterise par l\'absence de recul temporel : le diariste ecrit dans l\'immediat, au fil des jours, sans recomposer le passe.' },
                    // Q10: correctIndex=0
                    { question: 'Quel ecrivain a publie La Place (1983), recit de filiation consacre a son pere ?', options: ['Annie Ernaux', 'Marguerite Duras', 'Nathalie Sarraute', 'Simone de Beauvoir'], correctIndex: 0, explanation: 'Dans La Place, Ernaux retrace la vie de son pere, ouvrier devenu petit commercant, pour explorer la distance sociale et culturelle entre eux.' },
                    // Q11: correctIndex=1
                    { question: 'Comment Montaigne definit-il le projet de ses Essais ?', options: ['Un traite de philosophie systematique', 'Un autoportrait intellectuel et moral : "je suis moi-meme la matiere de mon livre"', 'Un recueil de poemes personnels', 'Un journal intime quotidien'], correctIndex: 1, explanation: 'Montaigne ecrit dans l\'avis au lecteur des Essais : "C\'est moi que je peins... je suis moi-meme la matiere de mon livre", inaugurant l\'autoportrait litteraire.' },
                    // Q12: correctIndex=0
                    { question: 'Quelle oeuvre est consideree comme la premiere autobiographie spirituelle de la litterature francaise ?', options: ['Les Confessions de Saint Augustin', 'Les Essais de Montaigne', 'Les Reveries du promeneur solitaire', 'Les Confessions de Rousseau'], correctIndex: 0, explanation: 'Les Confessions de Saint Augustin (vers 400) sont le premier grand recit autobiographique a dimension spirituelle, modele dont Rousseau reprendra le titre.' },
                    // Q13: correctIndex=2
                    { question: 'Dans W ou le souvenir d\'enfance, que represente allegoriquement l\'ile de W ?', options: ['Une utopie socialiste ideale', 'Les souvenirs heureux de l\'enfance de Perec', 'Un univers totalitaire evoquant les camps de concentration', 'Une metaphore de l\'exil volontaire'], correctIndex: 2, explanation: 'L\'ile de W, d\'abord presentee comme une societe sportive utopique, se revele etre un univers concentrationnaire, allegorie des camps ou la mere de Perec a peri.' },
                    // Q14: correctIndex=0
                    { question: 'Quelle phrase celebre de Rimbaud remet en cause le fondement de l\'autobiographie ?', options: ['"Je est un autre"', '"L\'enfer, c\'est les autres"', '"L\'existence precede l\'essence"', '"On ne nait pas femme, on le devient"'], correctIndex: 0, explanation: 'La formule "Je est un autre" (lettre a Paul Demeny, 1871) met en crise l\'identite du sujet et donc la possibilite meme de se raconter en toute transparence.' },
                    // Q15: correctIndex=3
                    { question: 'Nathalie Sarraute a publie quel texte autobiographique en 1983 ?', options: ['Tropismes', 'Le Planetarium', 'L\'Ere du soupcon', 'Enfance'], correctIndex: 3, explanation: 'Enfance (1983) de Sarraute est un recit autobiographique dialogique ou l\'autrice interroge ses propres souvenirs d\'enfance en Russie et en France, avec une voix critique qui conteste chaque souvenir.' },
                    // Q16: correctIndex=3
                    { question: 'Les Reveries du promeneur solitaire de Rousseau sont :', options: ['Un roman epistolaire', 'Un traite politique', 'Un journal intime publie de son vivant', 'Un recit autobiographique inacheve, publie a titre posthume'], correctIndex: 3, explanation: 'Les Reveries (1782, posthume) sont le dernier texte de Rousseau, inacheve. Dix "promenades" ou il medite sur sa vie passee et sa solitude.' },
                    // Q17: correctIndex=1
                    { question: 'Quel concept Paul Ricoeur developpe-t-il pour penser le lien entre recit et identite ?', options: ['Le pacte autobiographique', 'L\'identite narrative', 'L\'horizon d\'attente', 'La mise en abyme'], correctIndex: 1, explanation: 'Dans Soi-meme comme un autre (1990), Ricoeur montre que le sujet construit son identite en se racontant : l\'identite narrative articule permanence et changement.' },
                    // Q18: correctIndex=2
                    { question: 'Quelle est la particularite formelle de La Place d\'Annie Ernaux ?', options: ['Un style lyrique et poetique', 'L\'utilisation du vers libre', 'Une ecriture "plate", depouillee de tout effet litteraire', 'L\'alternance entre prose et poesie'], correctIndex: 2, explanation: 'Ernaux adopte volontairement une "ecriture plate" dans La Place, refusant tout embellissement litteraire pour rester fidele au monde social de son pere.' },
                    // Q19: correctIndex=1
                    { question: 'Memoires d\'outre-tombe tire son titre du fait que :', options: ['Chateaubriand y decrit un voyage au-dela de la mort', 'L\'oeuvre devait paraitre apres la mort de l\'auteur', 'Le recit commence par une scene de cimetiere', 'L\'auteur pretend ecrire depuis l\'au-dela'], correctIndex: 1, explanation: 'Le titre fait reference a la volonte de Chateaubriand de publier ses memoires seulement apres sa mort, ecrivant ainsi "d\'outre-tombe" par anticipation.' },
                    // Q20: correctIndex=0
                    { question: 'Beauvoir a publie quel recit autobiographique en 1958 ?', options: ['Memoires d\'une jeune fille rangee', 'Le Deuxieme Sexe', 'La Force de l\'age', 'Les Mandarins'], correctIndex: 0, explanation: 'Memoires d\'une jeune fille rangee (1958) est le premier volume du cycle autobiographique de Beauvoir, racontant son enfance bourgeoise et sa liberation intellectuelle.' },
                    // Q21: correctIndex=3
                    { question: 'L\'expression "ecriture de soi" recouvre tous les genres suivants SAUF :', options: ['L\'autobiographie et les memoires', 'Le journal intime et l\'autoportrait', 'L\'autofiction et le recit de filiation', 'Le roman a these et le conte philosophique'], correctIndex: 3, explanation: 'Le roman a these et le conte philosophique sont des genres argumentatifs, non des formes d\'ecriture de soi, meme s\'ils peuvent comporter des elements personnels.' },
                    // Q22: correctIndex=1
                    { question: 'Quelle formule de Beauvoir eclaire le rapport entre ecriture de soi et condition feminine ?', options: ['"L\'enfer, c\'est les autres"', '"On ne nait pas femme, on le devient"', '"Je forme une entreprise qui n\'eut jamais d\'exemple"', '"Je est un autre"'], correctIndex: 1, explanation: 'Cette formule du Deuxieme Sexe (1949) montre que l\'identite est une construction, ce qui nourrit toute l\'autobiographie de Beauvoir : se raconter, c\'est montrer comment on est devenue soi.' },
                    // Q23: correctIndex=2
                    { question: 'Quel auteur a ecrit Fils (1977), oeuvre fondatrice de l\'autofiction ?', options: ['Michel Leiris', 'Georges Perec', 'Serge Doubrovsky', 'Philippe Sollers'], correctIndex: 2, explanation: 'Doubrovsky ecrit Fils (1977), recit qu\'il qualifie d\'"autofiction" sur la quatrieme de couverture, inventant ainsi le concept et le terme pour un recit entre verite autobiographique et invention romanesque.' },
                    // Q24: correctIndex=1
                    { question: 'Quel procede Sarraute utilise-t-elle dans Enfance pour interroger la fiabilite de ses souvenirs ?', options: ['L\'emploi exclusif du passe simple', 'Un dialogue entre deux voix narratives dont l\'une conteste l\'autre', 'Le recours a des documents d\'archives', 'La narration a la troisieme personne'], correctIndex: 1, explanation: 'Sarraute dedouble la narration en deux voix — l\'une raconte, l\'autre critique et questionne — mettant en scene le doute inherent a toute reconstruction memorielle.' }
                ]
            },

            // ===============================================================
            // SECTION 2 : Genres et registres litteraires (25 quiz, 10 FC)
            // correctIndex target: 0(x6) 1(x7) 2(x6) 3(x6)
            // ===============================================================
            {
                id: 'genres-registres',
                title: 'Genres et registres litteraires',
                icon: '\uD83D\uDCDA',
                content: '<h3>Les grands genres litteraires</h3>'
                    + '<ul>'
                    + '<li><strong>Genres narratifs</strong> : roman, nouvelle, conte, recit, fable, epopee. Ils racontent une histoire avec un narrateur, des personnages et une intrigue.</li>'
                    + '<li><strong>Genres theatraux</strong> : tragedie, comedie, drame, farce, tragicomedia. Le texte est destine a la representation scenique, avec dialogues et didascalies.</li>'
                    + '<li><strong>Genres argumentatifs</strong> : essai, dialogue, pamphlet, apologue, utopie, dystopie. Leur visee principale est de convaincre, persuader ou deliberer.</li>'
                    + '<li><strong>Genres poetiques</strong> : lyrique, epique, elegiac, satirique, didactique. La poesie travaille le langage pour creer des effets de sens et de musicalite.</li>'
                    + '</ul>'
                    + '<h3>Les registres litteraires</h3>'
                    + '<ul>'
                    + '<li><strong>Tragique</strong> : fatalite, destin ineluctable, terreur et pitie (Racine, Phedre).</li>'
                    + '<li><strong>Comique</strong> : provoque le rire par quiproquos, jeux de mots, gestes (Moliere).</li>'
                    + '<li><strong>Pathetique</strong> : suscite la compassion et l\'emotion devant la souffrance (Hugo, Les Miserables).</li>'
                    + '<li><strong>Lyrique</strong> : expression des sentiments personnels, musicalite (Lamartine, Le Lac).</li>'
                    + '<li><strong>Epique</strong> : exaltation des exploits heroiques, grandeur, amplification (Homere, Hugo).</li>'
                    + '<li><strong>Fantastique</strong> : irruption de l\'etrange dans le reel, hesitation entre rationnel et surnaturel (Maupassant, Le Horla).</li>'
                    + '<li><strong>Satirique</strong> : critique moqueuse des travers sociaux (Voltaire, La Bruyere).</li>'
                    + '<li><strong>Ironique</strong> : dire le contraire de ce qu\'on pense pour denoncer (Voltaire, Candide).</li>'
                    + '<li><strong>Polemique</strong> : attaque virulente contre un adversaire (Zola, J\'accuse).</li>'
                    + '<li><strong>Didactique</strong> : vise a enseigner, instruire (La Fontaine, Fables).</li>'
                    + '<li><strong>Merveilleux</strong> : univers surnaturel accepte comme normal (contes de fees, Perrault).</li>'
                    + '<li><strong>Realiste</strong> : representation fidele du monde reel et de la societe (Balzac, Flaubert).</li>'
                    + '</ul>'
                    + '<h3>Distinctions essentielles</h3>'
                    + '<ul>'
                    + '<li><strong>Type vs genre</strong> : le type (narratif, argumentatif, descriptif, explicatif) designe la forme du discours ; le genre (roman, essai, poeme) designe la forme litteraire.</li>'
                    + '<li><strong>Registre vs tonalite</strong> : le registre designe l\'effet produit sur le lecteur et les procedes utilises ; la tonalite est souvent synonyme mais certains critiques la distinguent comme l\'impression dominante du texte.</li>'
                    + '<li><strong>Mouvement vs genre</strong> : le mouvement (romantisme, realisme) est une esthetique collective historiquement situee ; le genre est une forme litteraire transhistorique.</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'Quelle est la difference entre un genre et un registre litteraire ?', answer: 'Le genre designe une categorie formelle de textes (roman, poeme, essai, tragedie). Le registre designe l\'effet emotionnel produit sur le lecteur et les procedes employes (tragique, comique, lyrique). Un meme genre peut utiliser differents registres.' },
                    { question: 'Qu\'est-ce qu\'un apologue et en quoi differe-t-il de l\'essai ?', answer: 'L\'apologue est un recit bref a visee argumentative qui tire une lecon morale (fable, conte philosophique, parabole). L\'essai argumente directement par la reflexion et le raisonnement, sans passer par la fiction narrative.' },
                    { question: 'Quelle est la difference entre le registre fantastique et le registre merveilleux ?', answer: 'Le fantastique se definit par l\'hesitation entre explication naturelle et surnaturelle (Todorov). Le merveilleux presente un univers surnaturel accepte d\'emblee comme normal, sans questionnement (contes de fees). Le doute est au coeur du fantastique, pas du merveilleux.' },
                    { question: 'Qu\'est-ce qui distingue la nouvelle du roman ?', answer: 'La nouvelle est un recit bref, centre sur peu de personnages et une intrigue resserree, souvent avec une chute finale. Le roman est un recit long, a l\'intrigue complexe, avec des personnages nombreux et une temporalite etendue. La nouvelle vise la concentration, le roman le deploiement.' },
                    { question: 'Qu\'est-ce qu\'une dystopie et en quoi s\'oppose-t-elle a l\'utopie ?', answer: 'L\'utopie (Thomas More, 1516) decrit une societe ideale imaginaire. La dystopie (ou contre-utopie) decrit une societe cauchemardesque, souvent totalitaire, qui pousse a l\'extreme des tendances reelles. Exemples : 1984 d\'Orwell, Le Meilleur des mondes de Huxley.' },
                    { question: 'Quels sont les quatre types de comique au theatre ?', answer: 'Le comique de gestes (slapstick, bastonnades), le comique de mots (jeux de mots, repetitions), le comique de situation (quiproquos, retournements) et le comique de caractere (exageration d\'un defaut, comme l\'avarice d\'Harpagon). Moliere les utilise tous.' },
                    { question: 'Qu\'est-ce que le registre epique et quels procedes le caracterisent ?', answer: 'Le registre epique exalte les exploits heroiques et les combats grandioses. Ses procedes : hyperboles, enumerations, superlatifs, personnages surhumains, interventions divines. On le trouve dans l\'epopee (Homere) mais aussi chez Hugo (Les Chatiments) ou dans des romans.' },
                    { question: 'Quelle est la difference entre type de texte et genre litteraire ?', answer: 'Le type de texte (narratif, argumentatif, descriptif, explicatif, injonctif) designe la forme du discours et sa fonction dominante. Le genre litteraire (roman, poeme, essai, comedie) est une categorie esthetique et formelle. Un meme genre peut combiner plusieurs types de texte.' },
                    { question: 'Qu\'est-ce que le registre pathetique et comment le distinguer du tragique ?', answer: 'Le pathetique suscite la compassion du lecteur devant la souffrance innocente (scenes d\'enfants malheureux chez Hugo). Le tragique implique la fatalite et l\'impossibilite d\'echapper a son destin. Le pathetique emeut, le tragique emeut ET ecrase sous le poids de la necessite.' },
                    { question: 'Qu\'est-ce qu\'un pamphlet ?', answer: 'Le pamphlet est un texte argumentatif bref et violent qui attaque une personne, une institution ou une idee. Il releve du registre polemique. Exemples : J\'accuse de Zola (1898), le Discours sur le colonialisme de Cesaire (1950). C\'est une arme rhetorique au service de l\'engagement.' }
                ],
                quiz: [
                    // Q0: correctIndex=0
                    { question: 'Selon Todorov, qu\'est-ce qui definit le genre fantastique ?', options: ['L\'hesitation entre explication naturelle et surnaturelle', 'La presence de creatures surnaturelles', 'Un decor gothique et effrayant', 'Le denouement tragique du protagoniste'], correctIndex: 0, explanation: 'Dans Introduction a la litterature fantastique (1970), Todorov definit le fantastique par l\'hesitation du lecteur entre une explication rationnelle et une explication surnaturelle.' },
                    // Q1: correctIndex=1
                    { question: 'Le Horla de Maupassant releve du registre :', options: ['Merveilleux', 'Fantastique', 'Epique', 'Realiste'], correctIndex: 1, explanation: 'Le Horla maintient l\'hesitation entre folie du narrateur et presence d\'une entite invisible, ce qui est la definition meme du registre fantastique selon Todorov.' },
                    // Q2: correctIndex=2
                    { question: 'L\'apologue se distingue de l\'essai parce qu\'il :', options: ['Ne contient aucune argumentation', 'Est toujours ecrit en vers', 'Argue indirectement par le biais d\'un recit fictif', 'Est toujours anonyme'], correctIndex: 2, explanation: 'L\'apologue (fable, conte philosophique, parabole) transmet un enseignement moral par le detour de la fiction narrative, contrairement a l\'essai qui argumente directement.' },
                    // Q3: correctIndex=0
                    { question: 'Quelle est la difference essentielle entre la tragedie et le drame romantique ?', options: ['Le drame melange tragique et comique alors que la tragedie les separe', 'La tragedie est en prose, le drame en vers', 'Le drame respecte les trois unites, la tragedie non', 'La tragedie est un genre medieval, le drame un genre antique'], correctIndex: 0, explanation: 'Le drame romantique theorise par Hugo (Preface de Cromwell, 1827) refuse la separation des genres et melange le sublime et le grotesque, le tragique et le comique.' },
                    // Q4: correctIndex=3
                    { question: 'Quel genre designait le terme "roman" au Moyen Age ?', options: ['Un texte philosophique en latin', 'Un poeme epique chante', 'Un texte juridique et administratif', 'Un recit en vers en langue romane (langue vulgaire)'], correctIndex: 3, explanation: 'Au Moyen Age, "roman" designait un recit en vers ecrit en langue romane (le francais), par opposition aux textes en latin. Le roman en prose n\'apparait qu\'au XIIIe siecle.' },
                    // Q5: correctIndex=1
                    { question: 'Quel registre repose sur l\'expression des sentiments personnels et la musicalite ?', options: ['Le registre epique', 'Le registre lyrique', 'Le registre didactique', 'Le registre pathetique'], correctIndex: 1, explanation: 'Le registre lyrique (du grec lyra) exprime les emotions et les sentiments intimes de l\'auteur, avec une attention particuliere a la musicalite du langage.' },
                    // Q6: correctIndex=3
                    { question: 'La dystopie 1984 d\'Orwell appartient au genre :', options: ['Roman historique', 'Roman epistolaire', 'Conte philosophique', 'Roman d\'anticipation (ou contre-utopie)'], correctIndex: 3, explanation: '1984 (1949) est une dystopie ou contre-utopie : un roman d\'anticipation qui decrit une societe totalitaire cauchemardesque pour alerter le lecteur sur les dangers du pouvoir absolu.' },
                    // Q7: correctIndex=2
                    { question: 'Quelle affirmation est correcte concernant les types de comique ?', options: ['Le comique de caractere repose sur les jeux de mots', 'Le comique de gestes repose sur l\'exageration d\'un trait moral', 'Le comique de situation repose sur les quiproquos et malentendus', 'Le comique de mots repose sur les bastonnades'], correctIndex: 2, explanation: 'Le comique de situation nait des quiproquos, malentendus et retournements imprevus. Le comique de caractere exagere un defaut, le comique de mots joue sur le langage, le comique de gestes sur les actions physiques.' },
                    // Q8: correctIndex=2
                    { question: 'Le terme "registre" en analyse litteraire designe :', options: ['Le genre du texte', 'L\'epoque a laquelle le texte a ete ecrit', 'L\'effet emotionnel produit sur le lecteur et les procedes employes', 'Le mouvement litteraire de l\'auteur'], correctIndex: 2, explanation: 'Le registre designe la tonalite d\'un texte, c\'est-a-dire l\'effet qu\'il vise a produire sur le lecteur (rire, terreur, pitie, indignation) et les moyens stylistiques utilises.' },
                    // Q9: correctIndex=1
                    { question: 'L\'epopee se definit comme :', options: ['Un recit bref centre sur un evenement unique', 'Un long poeme narratif celebrant les exploits d\'un heros', 'Un texte argumentatif qui defend une cause', 'Une piece de theatre en cinq actes'], correctIndex: 1, explanation: 'L\'epopee est un long poeme narratif a la tonalite epique qui celebre les hauts faits d\'un heros souvent surhumain. Exemples : l\'Iliade d\'Homere, l\'Eneide de Virgile.' },
                    // Q10: correctIndex=0
                    { question: 'Lequel de ces genres est un genre argumentatif indirect ?', options: ['Le conte philosophique', 'L\'essai', 'Le traite', 'Le discours'], correctIndex: 0, explanation: 'Le conte philosophique (Voltaire, Candide) argumente indirectement par le biais d\'un recit fictif, contrairement a l\'essai, au traite et au discours qui argumentent directement.' },
                    // Q11: correctIndex=3
                    { question: 'Le registre ironique se caracterise par :', options: ['L\'exageration des qualites du sujet', 'La description objective et detachee', 'L\'expression de sentiments intimes', 'Le fait de dire le contraire de ce que l\'on pense pour critiquer'], correctIndex: 3, explanation: 'L\'ironie consiste a dire le contraire de ce qu\'on pense, en comptant sur la complicite du lecteur pour comprendre le sens veritable. Voltaire en fait un usage magistral dans Candide.' },
                    // Q12: correctIndex=2
                    { question: 'La fable de La Fontaine releve a la fois du genre :', options: ['Poetique et lyrique', 'Narratif et dramatique', 'Poetique et argumentatif', 'Descriptif et explicatif'], correctIndex: 2, explanation: 'Les Fables sont ecrites en vers (genre poetique) et comportent un recit qui debouche sur une morale (visee argumentative). Elles sont des apologues poetiques.' },
                    // Q13: correctIndex=1
                    { question: 'Quelle difference existe-t-il entre "merveilleux" et "fantastique" pour un lecteur ?', options: ['Le merveilleux est toujours comique, le fantastique toujours tragique', 'Le lecteur accepte le surnaturel dans le merveilleux mais hesite dans le fantastique', 'Les deux sont synonymes en analyse litteraire', 'Le fantastique est un sous-genre du merveilleux'], correctIndex: 1, explanation: 'Dans le merveilleux, le surnaturel est accepte comme allant de soi (contes de fees). Dans le fantastique, le lecteur et souvent le personnage hesitent sur la nature des evenements etranges.' },
                    // Q14: correctIndex=3
                    { question: 'Le Discours sur le colonialisme de Cesaire releve du registre :', options: ['Lyrique', 'Didactique', 'Pathetique', 'Polemique'], correctIndex: 3, explanation: 'Ce texte de 1950 attaque violemment le colonialisme europeen avec une rhetorique virulente et accusatrice, caracteristique du registre polemique.' },
                    // Q15: correctIndex=0
                    { question: 'Qu\'est-ce qu\'un roman epistolaire ?', options: ['Un roman compose de lettres echangees entre les personnages', 'Un roman ecrit en vers', 'Un roman dont le narrateur est omniscient', 'Un roman historique fonde sur des documents reels'], correctIndex: 0, explanation: 'Le roman epistolaire est compose de lettres fictives echangees entre les personnages. Exemples celebres : Les Liaisons dangereuses de Laclos, Les Lettres persanes de Montesquieu.' },
                    // Q16: correctIndex=3
                    { question: 'Le registre pathetique vise a susciter chez le lecteur :', options: ['Le rire et la moquerie', 'La terreur et l\'effroi', 'Un sentiment d\'admiration heroique', 'La compassion et l\'emotion devant la souffrance'], correctIndex: 3, explanation: 'Le pathetique (du grec pathos, souffrance) vise a emouvoir le lecteur en representant des scenes de souffrance, d\'injustice ou de malheur, comme la mort de Gavroche chez Hugo.' },
                    // Q17: correctIndex=1
                    { question: 'Quel genre litteraire Thomas More a-t-il fonde avec Utopia (1516) ?', options: ['La dystopie', 'L\'utopie', 'Le conte philosophique', 'Le roman d\'apprentissage'], correctIndex: 1, explanation: 'Thomas More invente le mot et le genre "utopie" (du grec ou-topos, lieu de nulle part) avec son oeuvre Utopia (1516), decrivant une societe insulaire ideale.' },
                    // Q18: correctIndex=0
                    { question: 'Parmi ces oeuvres, laquelle appartient au genre de la nouvelle ?', options: ['Boule de Suif (Maupassant)', 'Le Rouge et le Noir (Stendhal)', 'Les Miserables (Hugo)', 'Germinal (Zola)'], correctIndex: 0, explanation: 'Boule de Suif (1880) est une nouvelle de Maupassant, recit bref centre sur un episode unique pendant la guerre de 1870. Les trois autres sont des romans.' },
                    // Q19: correctIndex=1
                    { question: 'Qu\'est-ce qui distingue un mouvement litteraire d\'un genre litteraire ?', options: ['Le mouvement est un classement par forme, le genre par epoque', 'Le genre est une forme transhistorique, le mouvement est une esthetique historiquement situee', 'Il n\'y a aucune difference', 'Le genre est collectif, le mouvement est individuel'], correctIndex: 1, explanation: 'Le genre (roman, tragedie, essai) est une categorie formelle qui traverse les epoques. Le mouvement (romantisme, realisme, surrealisme) est un courant esthetique collectif ne dans un contexte historique precis.' },
                    // Q20: correctIndex=2
                    { question: 'La tragi-comedie se distingue de la tragedie classique par :', options: ['Un registre exclusivement comique', 'L\'absence de personnages nobles', 'Son denouement heureux malgre des peripeties tragiques', 'Le respect strict des trois unites'], correctIndex: 2, explanation: 'La tragi-comedie (comme Le Cid de Corneille avant son reclassement) presente des situations tragiques mais se termine bien. Elle melange registres et ne respecte pas toujours les unites classiques.' },
                    // Q21: correctIndex=0
                    { question: 'La satire se differencie du pamphlet par :', options: ['Son recours a l\'humour et a la moquerie plutot qu\'a l\'attaque directe', 'Son ton toujours bienveillant', 'Son format exclusivement poetique', 'Sa visee exclusivement esthetique'], correctIndex: 0, explanation: 'La satire critique par le rire, l\'ironie et la moquerie (La Bruyere, Voltaire). Le pamphlet attaque de maniere directe et virulente, sans necessairement recourir a l\'humour.' },
                    // Q22: correctIndex=1
                    { question: 'Quel genre associe recit d\'aventures et formation du protagoniste ?', options: ['Le roman picaresque', 'Le roman d\'apprentissage (Bildungsroman)', 'L\'epopee', 'Le roman historique'], correctIndex: 1, explanation: 'Le roman d\'apprentissage (Bildungsroman) suit l\'evolution d\'un jeune heros qui se forme au contact du monde. Exemples : L\'Education sentimentale de Flaubert, Le Rouge et le Noir de Stendhal.' },
                    // Q23: correctIndex=2
                    { question: 'Le registre didactique a pour visee principale de :', options: ['Emouvoir le lecteur', 'Divertir par le comique', 'Transmettre un savoir ou un enseignement', 'Denoncer une injustice'], correctIndex: 2, explanation: 'Le registre didactique vise l\'instruction du lecteur. On le trouve dans les fables, les traites, les essais pedagogiques. Les Fables de La Fontaine melent registre didactique et registre plaisant.' },
                    // Q24: correctIndex=3
                    { question: 'Parmi ces associations, laquelle est correcte ?', options: ['Elegie = poeme satirique attaquant un ennemi', 'Elegie = poeme epique celebrant un heros', 'Elegie = poeme didactique enseignant une technique', 'Elegie = poeme lyrique exprimant la plainte et la melancolie'], correctIndex: 3, explanation: 'L\'elegie est un poeme lyrique qui exprime une plainte douloureuse, la melancolie ou le deuil. Originaire de l\'Antiquite grecque, elle est pratiquee par Ronsard, Lamartine, et bien d\'autres.' }
                ]
            },

            // ===============================================================
            // SECTION 3 : Methodes du Bac francais (25 quiz, 10 FC)
            // correctIndex target: 0(x6) 1(x7) 2(x6) 3(x6)
            // ===============================================================
            {
                id: 'methodes-bac',
                title: 'Methodes du Bac francais',
                icon: '\uD83D\uDCCB',
                content: '<h3>Le commentaire compose</h3>'
                    + '<ul>'
                    + '<li><strong>Introduction</strong> : amorce (contexte de l\'oeuvre), presentation du texte (auteur, titre, date, genre), problematique (question directrice de l\'analyse), annonce du plan (deux ou trois axes).</li>'
                    + '<li><strong>Developpement</strong> : deux ou trois axes de lecture (grandes idees), chacun contenant deux ou trois sous-parties. Chaque sous-partie suit le schema : idee directrice, citation du texte, analyse du procede, interpretation de l\'effet.</li>'
                    + '<li><strong>Conclusion</strong> : bilan synthetique (reponse a la problematique), ouverture (rapprochement avec une autre oeuvre, un courant, une question plus large).</li>'
                    + '<li><strong>Analyse lineaire vs thematique</strong> : l\'analyse lineaire suit l\'ordre du texte (pour l\'oral) ; le commentaire compose organise les remarques par themes ou axes transversaux (pour l\'ecrit).</li>'
                    + '</ul>'
                    + '<h3>La dissertation</h3>'
                    + '<ul>'
                    + '<li><strong>Introduction</strong> : amorce, citation du sujet, reformulation et problematisation, annonce du plan.</li>'
                    + '<li><strong>Plan dialectique</strong> : these (arguments en faveur de la position), antithese (objections et nuances), synthese (depassement, position personnelle argumentee).</li>'
                    + '<li><strong>Plan thematique</strong> : chaque partie explore un aspect different de la question, sans opposition these/antithese.</li>'
                    + '<li><strong>Le paragraphe argumente</strong> : argument + exemple precis (oeuvre, auteur, extrait) + analyse de l\'exemple + transition vers le paragraphe suivant.</li>'
                    + '</ul>'
                    + '<h3>L\'oral du Bac</h3>'
                    + '<ul>'
                    + '<li><strong>Premiere partie (12 min)</strong> : explication lineaire d\'un texte etudie en classe (environ 20 lignes). Lecture expressive, introduction, analyse detaillee mouvement par mouvement, conclusion.</li>'
                    + '<li><strong>Question de grammaire (2 min)</strong> : analyse d\'une phrase du texte (nature, fonction, propositions, valeur des temps, types de phrases).</li>'
                    + '<li><strong>Deuxieme partie (8 min)</strong> : entretien sur l\'oeuvre integrale choisie par le candidat. Le jury pose des questions sur l\'oeuvre, sa lecture, ses interpretations.</li>'
                    + '</ul>'
                    + '<h3>Vocabulaire technique d\'analyse</h3>'
                    + '<ul>'
                    + '<li><strong>Champ lexical</strong> : ensemble de mots qui se rapportent a un meme theme dans un texte.</li>'
                    + '<li><strong>Isotopie</strong> : recurrence d\'un meme seme (unite de sens) a travers un texte, creant une coherence thematique.</li>'
                    + '<li><strong>Connotation / Denotation</strong> : la denotation est le sens objectif du mot (dictionnaire) ; la connotation est le sens subjectif, culturel et affectif.</li>'
                    + '<li><strong>Modalisation</strong> : marques de la subjectivite du locuteur (adverbes de doute, verbes d\'opinion, conditionnel).</li>'
                    + '<li><strong>Enonciation</strong> : situation de communication (qui parle, a qui, ou, quand). Marques : pronoms, temps, deictiques.</li>'
                    + '<li><strong>Focalisation</strong> : point de vue adopte dans le recit. Interne (on voit par les yeux d\'un personnage), externe (regard objectif de l\'exterieur), omnisciente (le narrateur sait tout).</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'Quelles sont les trois parties de l\'introduction d\'un commentaire compose ?', answer: 'L\'introduction comporte : 1) une amorce (contexte litteraire, auteur, mouvement), 2) la presentation du texte (auteur, titre, date, genre, sujet), 3) la problematique (question directrice), et 4) l\'annonce du plan (deux ou trois axes). La problematique est l\'element essentiel car elle guide toute l\'analyse.' },
                    { question: 'Quelle est la difference entre l\'explication lineaire et le commentaire compose ?', answer: 'L\'explication lineaire suit l\'ordre du texte, mouvement par mouvement : c\'est la methode de l\'oral du Bac. Le commentaire compose (ecrit) organise les remarques par axes thematiques transversaux. Les deux visent l\'analyse du texte mais avec une organisation differente.' },
                    { question: 'Qu\'est-ce qu\'un plan dialectique en dissertation ?', answer: 'Le plan dialectique se compose de trois parties : these (arguments soutenant une position), antithese (objections et limites), synthese (depassement qui propose une reponse nuancee). Ce plan est adapte aux sujets qui invitent a discuter une affirmation.' },
                    { question: 'Comment construire un paragraphe argumente dans une dissertation ?', answer: 'Un paragraphe argumente suit quatre etapes : 1) argument (idee claire formulee), 2) exemple precis (oeuvre, auteur, extrait), 3) analyse de l\'exemple (explication de son lien avec l\'argument), 4) transition vers le paragraphe suivant. Chaque paragraphe ne developpe qu\'un seul argument.' },
                    { question: 'Quelles sont les trois focalisations narratives ?', answer: 'Focalisation interne : le recit est filtre par la perception d\'un personnage. Focalisation externe : vision de l\'exterieur, sans acces aux pensees. Focalisation zero (omnisciente) : le narrateur sait tout sur tous les personnages. Le choix de focalisation determine la quantite d\'information donnee au lecteur.' },
                    { question: 'Quelle est la difference entre connotation et denotation ?', answer: 'La denotation est le sens objectif et litteral d\'un mot tel qu\'il figure dans le dictionnaire. La connotation est l\'ensemble des significations secondaires, subjectives, culturelles et affectives associees a un mot. Par exemple, "rouge" denote une couleur mais connote la passion, le danger ou la revolution.' },
                    { question: 'Comment se deroule l\'oral du Bac francais ?', answer: 'Premiere partie (12 min) : explication lineaire d\'un texte du descriptif + question de grammaire (2 min). Deuxieme partie (8 min) : entretien sur une oeuvre integrale choisie par le candidat. La preparation dure 30 minutes. La note est sur 20 points.' },
                    { question: 'Qu\'est-ce que la modalisation dans un texte ?', answer: 'La modalisation designe les marques de la subjectivite du locuteur dans son enonce : adverbes de doute (peut-etre, sans doute), verbes d\'opinion (croire, penser, sembler), conditionnel, expressions de certitude ou d\'incertitude. Elle indique le degre d\'adhesion du locuteur a ce qu\'il dit.' },
                    { question: 'Qu\'est-ce qu\'une problematique dans un commentaire ou une dissertation ?', answer: 'La problematique est la question centrale a laquelle l\'ensemble du devoir repond. Elle ne se confond pas avec le sujet : elle le reformule sous forme de question ouverte qui appelle une reflexion structuree. Une bonne problematique souleve un enjeu veritable et guide l\'organisation du plan.' },
                    { question: 'Qu\'est-ce que l\'isotopie en analyse de texte ?', answer: 'L\'isotopie est la recurrence d\'un meme seme (unite minimale de sens) a travers un texte, creant une coherence thematique. Par exemple, les mots "flamme", "bruler", "ardeur", "feu" forment une isotopie de la passion. C\'est un outil plus precis que le champ lexical car il porte sur le sens, pas sur le theme.' }
                ],
                quiz: [
                    // Q0: correctIndex=0
                    { question: 'Dans un commentaire compose, la problematique est :', options: ['La question directrice qui guide l\'ensemble de l\'analyse', 'Le resume du texte a analyser', 'Le titre du premier axe de lecture', 'La derniere phrase de la conclusion'], correctIndex: 0, explanation: 'La problematique est une question ouverte formulee dans l\'introduction, a laquelle tout le commentaire repond. Elle donne sa direction et sa coherence a l\'analyse.' },
                    // Q1: correctIndex=1
                    { question: 'L\'explication lineaire est la methode specifique de :', options: ['L\'ecrit du Bac (commentaire)', 'L\'oral du Bac (premiere partie)', 'La dissertation litteraire', 'L\'epreuve de grammaire'], correctIndex: 1, explanation: 'L\'explication lineaire, qui suit l\'ordre du texte mouvement par mouvement, est la methode requise pour la premiere partie de l\'oral du Bac francais.' },
                    // Q2: correctIndex=0
                    { question: 'Un plan dialectique en dissertation se compose de :', options: ['These, antithese, synthese', 'Introduction, developpement, conclusion', 'Trois parties thematiques sans opposition', 'Analyse lineaire en trois mouvements'], correctIndex: 0, explanation: 'Le plan dialectique oppose une these et une antithese avant de les depasser dans une synthese. C\'est le plan le plus courant pour les sujets invitant a discuter une affirmation.' },
                    // Q3: correctIndex=1
                    { question: 'Quelle est la structure correcte d\'un paragraphe argumente en dissertation ?', options: ['Citation, resume, transition', 'Argument, exemple, analyse de l\'exemple, transition', 'Question, reponse, conclusion', 'Amorce, problematique, plan'], correctIndex: 1, explanation: 'Chaque paragraphe argumente suit le schema : un argument (idee directrice), un exemple precis tire d\'une oeuvre, l\'analyse detaillee de cet exemple, puis une transition.' },
                    // Q4: correctIndex=3
                    { question: 'La focalisation interne signifie que :', options: ['Le narrateur sait tout sur tous les personnages', 'Le lecteur n\'a acces a aucune pensee de personnage', 'Le narrateur intervient pour commenter l\'action', 'Le recit est filtre par la perception d\'un seul personnage'], correctIndex: 3, explanation: 'En focalisation interne, le recit est limite a ce que percoit, sait et ressent un personnage. Le lecteur decouvre le monde a travers son point de vue subjectif.' },
                    // Q5: correctIndex=2
                    { question: 'La denotation d\'un mot correspond a :', options: ['Son sens figure et poetique', 'Son sens subjectif et affectif', 'Son sens objectif et litteral tel que defini par le dictionnaire', 'Son etymologie latine ou grecque'], correctIndex: 2, explanation: 'La denotation est le sens premier, objectif et referentiel d\'un mot. Elle s\'oppose a la connotation, qui englobe les sens secondaires, culturels et emotionnels.' },
                    // Q6: correctIndex=0
                    { question: 'Qu\'appelle-t-on "amorce" dans l\'introduction d\'un commentaire ?', options: ['La phrase d\'accroche qui situe le texte dans un contexte litteraire', 'La formulation de la problematique', 'L\'annonce du plan', 'La premiere citation du texte analyse'], correctIndex: 0, explanation: 'L\'amorce est la premiere phrase de l\'introduction qui ancre le texte dans un contexte plus large (mouvement, genre, epoque, thematique) avant de presenter le texte specifique.' },
                    // Q7: correctIndex=3
                    { question: 'La question de grammaire a l\'oral du Bac porte sur :', options: ['La biographie de l\'auteur', 'Un exercice de conjugaison', 'La definition de figures de style', 'L\'analyse d\'une phrase du texte : nature, fonction, propositions'], correctIndex: 3, explanation: 'La question de grammaire (2 min) demande d\'analyser une phrase du texte etudie : identification des propositions, nature et fonction des mots, valeur des temps verbaux.' },
                    // Q8: correctIndex=2
                    { question: 'Qu\'est-ce que la modalisation dans l\'analyse de texte ?', options: ['La mise en scene du recit', 'La structure rythmique du vers', 'Les procedes par lesquels l\'enonciateur exprime sa subjectivite', 'La disposition typographique du texte'], correctIndex: 2, explanation: 'La modalisation regroupe tous les procedes qui trahissent la subjectivite du locuteur : adverbes d\'opinion, conditionnel, verbes modaux, expressions de doute ou de certitude.' },
                    // Q9: correctIndex=1
                    { question: 'Un champ lexical se definit comme :', options: ['L\'ensemble des synonymes d\'un mot', 'Un ensemble de mots se rapportant a un meme theme dans un texte', 'La liste des mots de la meme famille etymologique', 'L\'ensemble des figures de style d\'un passage'], correctIndex: 1, explanation: 'Le champ lexical regroupe les mots et expressions d\'un texte qui se rapportent a un meme theme. Identifier un champ lexical permet de degager les themes dominants d\'un passage.' },
                    // Q10: correctIndex=0
                    { question: 'La conclusion d\'un commentaire compose doit obligatoirement contenir :', options: ['Un bilan repondant a la problematique', 'Une nouvelle citation non analysee', 'Un troisieme axe de lecture', 'Une question adressee au correcteur'], correctIndex: 0, explanation: 'La conclusion doit proposer un bilan synthetique qui repond a la problematique posee en introduction, puis une ouverture (rapprochement avec une autre oeuvre ou question plus large).' },
                    // Q11: correctIndex=3
                    { question: 'Lors de l\'entretien de l\'oral (2e partie), le candidat est interroge sur :', options: ['N\'importe quel texte du descriptif', 'La biographie de l\'auteur etudie en premiere partie', 'Des connaissances generales de culture litteraire', 'L\'oeuvre integrale qu\'il a choisie'], correctIndex: 3, explanation: 'La deuxieme partie de l\'oral (8 min) est un entretien sur l\'oeuvre integrale choisie par le candidat parmi celles etudiees en classe. Le jury evalue la maitrise de l\'oeuvre et la qualite de la reflexion.' },
                    // Q12: correctIndex=2
                    { question: 'L\'ouverture en conclusion sert a :', options: ['Introduire un nouveau plan', 'Corriger les erreurs du developpement', 'Elargir la reflexion vers une oeuvre proche ou une question plus vaste', 'Reformuler mot pour mot la problematique'], correctIndex: 2, explanation: 'L\'ouverture elargit la reflexion en fin de conclusion : rapprochement avec une autre oeuvre, un autre auteur, une problematique plus large. Elle ne doit pas introduire un nouvel axe d\'analyse.' },
                    // Q13: correctIndex=3
                    { question: 'Que designe le terme "enonciation" en analyse de texte ?', options: ['Le theme general du texte', 'La morale de l\'histoire', 'Le registre dominant du passage', 'L\'acte de produire un enonce : qui parle, a qui, dans quel contexte'], correctIndex: 3, explanation: 'L\'enonciation est la situation de communication : qui est le locuteur, a qui s\'adresse-t-il, ou et quand. Ses marques sont les pronoms personnels, les temps verbaux, les deictiques.' },
                    // Q14: correctIndex=1
                    { question: 'Un plan thematique en dissertation convient lorsque le sujet :', options: ['Invite a discuter une citation contradictoire', 'Demande d\'explorer plusieurs aspects d\'une question sans opposition', 'Exige une refutation en deux temps', 'Porte sur une oeuvre unique'], correctIndex: 1, explanation: 'Le plan thematique organise la reflexion en parties qui explorent chacune un aspect different de la question, sans opposition these/antithese. Il convient aux sujets ouverts qui n\'appellent pas de debat binaire.' },
                    // Q15: correctIndex=2
                    { question: 'La focalisation zero (omnisciente) se caracterise par :', options: ['L\'ignorance totale du narrateur', 'La limitation au point de vue d\'un personnage', 'L\'acces du narrateur aux pensees de tous les personnages', 'L\'absence de narrateur identifiable'], correctIndex: 2, explanation: 'En focalisation zero ou omnisciente, le narrateur sait tout : pensees, sentiments, passe et avenir de tous les personnages. C\'est le point de vue du "narrateur-Dieu" (Balzac, Zola).' },
                    // Q16: correctIndex=0
                    { question: 'L\'isotopie se distingue du champ lexical parce qu\'elle :', options: ['Porte sur le plan du sens (semes) et non sur le seul theme', 'Ne concerne que la poesie', 'Est un procede stylistique volontaire', 'Designe un registre de langue particulier'], correctIndex: 0, explanation: 'L\'isotopie (terme de Greimas) repere la recurrence de semes (unites de sens) dans un texte, tandis que le champ lexical regroupe des mots d\'un meme theme. L\'isotopie est plus precise et plus semantique.' },
                    // Q17: correctIndex=3
                    { question: 'Quelle est la duree de preparation pour l\'oral du Bac francais ?', options: ['15 minutes', '20 minutes', '45 minutes', '30 minutes'], correctIndex: 3, explanation: 'Le candidat dispose de 30 minutes de preparation pour l\'oral du Bac francais, pendant lesquelles il prepare son explication lineaire et sa question de grammaire.' },
                    // Q18: correctIndex=1
                    { question: 'Dans un commentaire, un "axe de lecture" est :', options: ['Un resume de chaque paragraphe du texte', 'Une grande idee interpretative qui organise une partie du commentaire', 'La citation la plus importante du texte', 'Le titre de la conclusion'], correctIndex: 1, explanation: 'Un axe de lecture est une idee directrice qui organise une partie du commentaire. Il ne resume pas le texte mais propose une interpretation structuree, appuyee sur des procedes stylistiques.' },
                    // Q19: correctIndex=2
                    { question: 'Quel procede d\'ecriture permet d\'evaluer le degre de certitude de l\'enonciateur ?', options: ['La focalisation', 'L\'isotopie', 'La modalisation', 'Le champ lexical'], correctIndex: 2, explanation: 'La modalisation revele le degre d\'adhesion du locuteur a son propre discours : certitude, doute, probabilite, jugement de valeur, a travers des adverbes, le conditionnel, des verbes d\'opinion.' },
                    // Q20: correctIndex=1
                    { question: 'En commentaire compose, il faut eviter :', options: ['De citer le texte', 'La paraphrase, c\'est-a-dire reformuler le texte sans l\'analyser', 'D\'identifier des figures de style', 'De formuler des interpretations personnelles'], correctIndex: 1, explanation: 'La paraphrase (repeter le contenu du texte sans l\'analyser) est l\'erreur la plus penalisee au Bac. Le commentaire exige d\'identifier des procedes et d\'en analyser les effets de sens.' },
                    // Q21: correctIndex=3
                    { question: 'La focalisation externe donne au lecteur :', options: ['Un acces complet a l\'interiorite des personnages', 'Le point de vue subjectif du heros', 'Les commentaires du narrateur sur l\'action', 'Une vision limitee a l\'apparence exterieure des evenements'], correctIndex: 3, explanation: 'La focalisation externe presente les evenements de l\'exterieur, comme une camera : on voit les gestes et entend les paroles mais sans acceder aux pensees. Hemingway ou Camus l\'utilisent.' },
                    // Q22: correctIndex=2
                    { question: 'Lors de l\'explication lineaire, "mouvement" designe :', options: ['Un courant litteraire', 'Un deplacement physique des personnages', 'Une unite de sens coherente dans le texte, delimitee par des ruptures thematiques ou stylistiques', 'Un synonyme de paragraphe'], correctIndex: 2, explanation: 'Un "mouvement" dans un texte est une unite coherente marquee par un theme, un ton ou un rythme qui la distingue des passages voisins. Identifier les mouvements est la premiere etape de l\'explication lineaire.' },
                    // Q23: correctIndex=0
                    { question: 'Qu\'est-ce qu\'un deictique en analyse de l\'enonciation ?', options: ['Un mot dont le sens depend de la situation d\'enonciation (ici, maintenant, je)', 'Un adverbe de negation', 'Un type de figure de style', 'Un verbe a l\'infinitif'], correctIndex: 0, explanation: 'Les deictiques (je, tu, ici, maintenant, demain, celui-ci) sont des mots dont le referent change selon la situation d\'enonciation. Ils ancrent le discours dans un contexte precis.' },
                    // Q24: correctIndex=1
                    { question: 'Quelle erreur methodologique consiste a analyser le texte dans l\'ordre sans degager d\'axes ?', options: ['La dissertation lineaire', 'Le commentaire lineaire (interdit a l\'ecrit)', 'Le commentaire paraphrastique', 'L\'analyse thematique'], correctIndex: 1, explanation: 'A l\'ecrit du Bac, le commentaire compose doit etre organise par axes thematiques, pas en suivant l\'ordre du texte. Le commentaire lineaire, qui suit l\'ordre du texte, est reserve a l\'oral.' }
                ]
            },

            // ===============================================================
            // SECTION 4 : Litterature du XXe siecle (25 quiz, 10 FC)
            // correctIndex target: 0(x6) 1(x7) 2(x6) 3(x6)
            // ===============================================================
            {
                id: 'xxe-siecle',
                title: 'Litterature du XXe siecle',
                icon: '\uD83C\uDF1F',
                content: '<h3>L\'existentialisme</h3>'
                    + '<ul>'
                    + '<li><strong>Sartre</strong> : "L\'existence precede l\'essence." L\'homme est libre et responsable de ce qu\'il fait de sa vie. Oeuvres : La Nausee (1938), Huis clos (1944), Les Mains sales (1948), Qu\'est-ce que la litterature ? (1948).</li>'
                    + '<li><strong>Camus</strong> : l\'absurde nait de la confrontation entre le desir de sens de l\'homme et le silence du monde. Oeuvres : L\'Etranger (1942), Le Mythe de Sisyphe (1942), La Peste (1947).</li>'
                    + '<li><strong>Beauvoir</strong> : Le Deuxieme Sexe (1949) — "On ne nait pas femme, on le devient." Philosophie existentialiste appliquee a la condition feminine.</li>'
                    + '</ul>'
                    + '<h3>Le theatre de l\'absurde</h3>'
                    + '<ul>'
                    + '<li><strong>Ionesco</strong> : deconstruction du langage et de la logique. La Cantatrice chauve (1950), Rhinoceros (1959). L\'"anti-piece" denonce les automatismes de la parole.</li>'
                    + '<li><strong>Beckett</strong> : l\'attente, le vide, le langage qui tourne en rond. En attendant Godot (1953), Fin de partie (1957). Le theatre se reduit a l\'essentiel : deux etres qui parlent pour combler le neant.</li>'
                    + '</ul>'
                    + '<h3>Le Nouveau Roman</h3>'
                    + '<ul>'
                    + '<li><strong>Robbe-Grillet</strong> : refus du personnage traditionnel, de l\'intrigue lineaire, de la psychologie. Les Gommes (1953), La Jalousie (1957). Theoricien du mouvement dans Pour un nouveau roman (1963).</li>'
                    + '<li><strong>Sarraute</strong> : exploration des "tropismes", mouvements interieurs infimes. Tropismes (1939), L\'Ere du soupcon (1956).</li>'
                    + '<li><strong>Butor</strong> : La Modification (1957), roman ecrit a la deuxieme personne du pluriel ("vous"), innovation narrative radicale.</li>'
                    + '<li><strong>Duras</strong> : ecriture de la passion, du silence et de la perte. Moderato cantabile (1958), L\'Amant (1984, prix Goncourt).</li>'
                    + '</ul>'
                    + '<h3>L\'Oulipo</h3>'
                    + '<ul>'
                    + '<li><strong>Perec</strong> : virtuosite formelle et jeux de contrainte. La Disparition (1969), lipogramme en "e". La Vie mode d\'emploi (1978), roman-puzzle monumental.</li>'
                    + '<li><strong>Queneau</strong> : co-fondateur de l\'Oulipo. Exercices de style (1947), un meme recit reecrit 99 fois. Zazie dans le metro (1959), jeu sur la langue orale.</li>'
                    + '</ul>'
                    + '<h3>Poesie du XXe siecle</h3>'
                    + '<ul>'
                    + '<li><strong>Apollinaire</strong> : entre tradition et modernite. Alcools (1913, sans ponctuation), Calligrammes (1918, poemes visuels). Inventeur du mot "surrealisme".</li>'
                    + '<li><strong>Eluard</strong> : poete surrealiste puis engage. Liberte (1942), poeme de la Resistance. Capitale de la douleur (1926).</li>'
                    + '<li><strong>Prevert</strong> : poesie populaire et accessible. Paroles (1946), melange d\'humour, de tendresse et de revolte.</li>'
                    + '<li><strong>Ponge</strong> : poesie du quotidien et des objets. Le Parti pris des choses (1942), qui donne la parole aux choses humbles.</li>'
                    + '<li><strong>Char</strong> : poesie dense et enigmatique, nourrie de l\'experience de la Resistance. Feuillets d\'Hypnos (1946).</li>'
                    + '</ul>'
                    + '<h3>Litterature engagee</h3>'
                    + '<ul>'
                    + '<li><strong>Sartre</strong> : "L\'ecrivain est en situation dans son epoque." Qu\'est-ce que la litterature ? (1948) theorise l\'engagement.</li>'
                    + '<li><strong>Camus</strong> : engagement contre la peine de mort, le totalitarisme. La Peste comme allegorie de la Resistance et du mal.</li>'
                    + '<li><strong>Eluard</strong> : Liberte, poeme parachute sur la France occupee.</li>'
                    + '<li><strong>Zola</strong> : J\'accuse (1898), article fondateur de l\'engagement intellectuel, en defense de Dreyfus.</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'Que signifie "l\'existence precede l\'essence" chez Sartre ?', answer: 'Pour Sartre, l\'homme n\'a pas de nature predeterminee. Il existe d\'abord, puis se definit par ses actes et ses choix. Il est "condamne a etre libre" : sa liberte est totale et implique une responsabilite absolue. C\'est le fondement de l\'existentialisme sartrien.' },
                    { question: 'Comment Camus definit-il l\'absurde ?', answer: 'L\'absurde nait de la confrontation entre le desir humain de sens et de coherence et le silence irrationnel du monde. Il n\'est ni dans l\'homme ni dans le monde, mais dans leur rapport. Camus le theorise dans Le Mythe de Sisyphe (1942) et conclut que malgre l\'absurde, "il faut imaginer Sisyphe heureux".' },
                    { question: 'Qu\'est-ce que le Nouveau Roman et quels sont ses principes ?', answer: 'Le Nouveau Roman est un mouvement des annees 1950-60 qui refuse les conventions romanesques : intrigue lineaire, personnage psychologique, narrateur omniscient. Robbe-Grillet, Sarraute, Butor et Simon explorent de nouvelles formes narratives. Robbe-Grillet theorise le mouvement dans Pour un nouveau roman (1963).' },
                    { question: 'Qu\'est-ce que l\'Oulipo et quel est son principe fondateur ?', answer: 'L\'Ouvroir de Litterature Potentielle (1960), fonde par Queneau et Le Lionnais, explore la creation litteraire sous contrainte formelle volontaire. La contrainte n\'est pas une limitation mais un moteur de creativite. Exemple : La Disparition de Perec, roman de 300 pages sans la lettre "e".' },
                    { question: 'Pourquoi L\'Etranger de Camus est-il un roman central du XXe siecle ?', answer: 'L\'Etranger (1942) incarne l\'absurde par son personnage Meursault, indifferent aux conventions sociales et emotionnelles. L\'ecriture "blanche" (phrases courtes, passe compose) mime cette etrangete au monde. Le roman illustre le decalage entre l\'individu et une societe qui exige des codes affectifs.' },
                    { question: 'En quoi La Cantatrice chauve d\'Ionesco est-elle une "anti-piece" ?', answer: 'Ionesco qualifie La Cantatrice chauve (1950) d\'"anti-piece" car elle deconstruit toutes les conventions theatrales : pas d\'intrigue, pas de personnages coherents, un langage qui se desagrege en automatismes vides. Le titre meme n\'a aucun rapport avec l\'action. C\'est une critique radicale du langage quotidien.' },
                    { question: 'Quelle est la particularite formelle de La Modification de Butor ?', answer: 'La Modification (1957) est ecrit integralement a la deuxieme personne du pluriel ("vous"). Le lecteur est directement interpelle et place dans la conscience du personnage. Cette innovation narrative radicale bouleverse le rapport entre auteur, narrateur et lecteur.' },
                    { question: 'Pourquoi Apollinaire est-il une figure charniere de la poesie du XXe siecle ?', answer: 'Apollinaire fait le pont entre tradition et avant-garde. Alcools (1913) supprime la ponctuation tout en reprenant des formes classiques. Les Calligrammes (1918) inventent le poeme visuel. Il forge le mot "surrealisme" et ouvre la voie aux avant-gardes poetiques du XXe siecle.' },
                    { question: 'Qu\'est-ce que la litterature engagee selon Sartre ?', answer: 'Dans Qu\'est-ce que la litterature ? (1948), Sartre affirme que l\'ecrivain est "en situation" dans son epoque et doit s\'engager par son ecriture. Ecrire est un acte qui transforme le monde : ne pas choisir, c\'est deja choisir. La litterature engagee met la plume au service d\'une cause politique ou morale.' },
                    { question: 'Qu\'est-ce qu\'un lipogramme et quelle oeuvre celebre l\'illustre ?', answer: 'Un lipogramme est un texte ecrit en s\'interdisant une ou plusieurs lettres de l\'alphabet. La Disparition de Georges Perec (1969) est un roman entier de plus de 300 pages ecrit sans utiliser la lettre "e", la plus frequente en francais. C\'est un tour de force oulipien et une meditation sur le manque et la disparition.' }
                ],
                quiz: [
                    // Q0: correctIndex=0
                    { question: 'Quelle formule resume la philosophie existentialiste de Sartre ?', options: ['L\'existence precede l\'essence', 'Je pense, donc je suis', 'L\'homme est un loup pour l\'homme', 'Le coeur a ses raisons que la raison ne connait point'], correctIndex: 0, explanation: 'Sartre pose dans L\'existentialisme est un humanisme (1946) que l\'homme n\'a pas de nature predeterminee : il existe d\'abord et se definit ensuite par ses choix.' },
                    // Q1: correctIndex=1
                    { question: 'Dans quel essai Camus theorise-t-il la notion d\'absurde ?', options: ['L\'Etranger', 'Le Mythe de Sisyphe', 'La Peste', 'L\'Homme revolte'], correctIndex: 1, explanation: 'Le Mythe de Sisyphe (1942) est l\'essai ou Camus definit l\'absurde comme le divorce entre l\'homme et le monde, et conclut qu\'"il faut imaginer Sisyphe heureux".' },
                    // Q2: correctIndex=2
                    { question: 'Quelle oeuvre de Perec est un lipogramme en "e" ?', options: ['La Vie mode d\'emploi', 'W ou le souvenir d\'enfance', 'La Disparition', 'Les Choses'], correctIndex: 2, explanation: 'La Disparition (1969) est un roman de plus de 300 pages ecrit sans la lettre "e". La contrainte oulipienne se double d\'un sens profond : la lettre absente evoque la disparition et le manque.' },
                    // Q3: correctIndex=0
                    { question: 'Qui a ecrit Pour un nouveau roman (1963), manifeste theorique du mouvement ?', options: ['Alain Robbe-Grillet', 'Nathalie Sarraute', 'Michel Butor', 'Marguerite Duras'], correctIndex: 0, explanation: 'Robbe-Grillet publie Pour un nouveau roman en 1963, recueil d\'essais ou il rejette le personnage traditionnel, l\'intrigue lineaire et la psychologie romanesque.' },
                    // Q4: correctIndex=3
                    { question: 'La Cantatrice chauve d\'Ionesco est sous-titree :', options: ['Drame en trois actes', 'Tragedie moderne', 'Farce en un acte', 'Anti-piece'], correctIndex: 3, explanation: 'Ionesco qualifie La Cantatrice chauve (1950) d\'"anti-piece" car elle deconstruit systematiquement les conventions theatrales : pas d\'intrigue, pas de cantatrice, un langage qui implose.' },
                    // Q5: correctIndex=0
                    { question: 'Quel poete a supprime la ponctuation dans son recueil Alcools (1913) ?', options: ['Guillaume Apollinaire', 'Paul Eluard', 'Jacques Prevert', 'Rene Char'], correctIndex: 0, explanation: 'Apollinaire supprime toute ponctuation d\'Alcools lors de la correction des epreuves, creant une fluidite et une ambiguite nouvelles dans la lecture. "Zone" ouvre le recueil.' },
                    // Q6: correctIndex=2
                    { question: 'La Modification de Butor est ecrite a quelle personne narrative ?', options: ['Premiere personne du singulier', 'Troisieme personne du singulier', 'Deuxieme personne du pluriel ("vous")', 'Premiere personne du pluriel ("nous")'], correctIndex: 2, explanation: 'Butor utilise le "vous" dans La Modification (1957), innovation radicale qui place le lecteur dans la conscience du personnage et brouille les frontieres narratives.' },
                    // Q7: correctIndex=1
                    { question: 'Quel recueil de Prevert, paru en 1946, melange humour populaire et lyrisme ?', options: ['Histoires', 'Paroles', 'Spectacle', 'Fatras'], correctIndex: 1, explanation: 'Paroles (1946) est le recueil le plus celebre de Prevert, avec des poemes accessibles et populaires ("Barbara", "Les Feuilles mortes") melant humour, tendresse et revolte.' },
                    // Q8: correctIndex=1
                    { question: 'Quelle oeuvre de Sartre met en scene la formule "L\'enfer, c\'est les autres" ?', options: ['La Nausee', 'Huis clos', 'Les Mains sales', 'Les Sequestres d\'Altona'], correctIndex: 1, explanation: 'Huis clos (1944) enferme trois personnages dans un salon pour l\'eternite. La celebre replique signifie que le regard d\'autrui nous constitue et nous juge, ce qui est une forme d\'enfer.' },
                    // Q9: correctIndex=3
                    { question: 'Le Parti pris des choses de Francis Ponge (1942) se caracterise par :', options: ['Des poemes epiques celebrant les heros de guerre', 'Des recits autobiographiques en vers', 'Des pamphlets politiques en prose poetique', 'Des descriptions minutieuses d\'objets quotidiens'], correctIndex: 3, explanation: 'Ponge donne la parole aux choses humbles (le pain, le galet, l\'huitre) dans des textes en prose poetique d\'une precision extreme. Il renouvelle le regard sur le quotidien.' },
                    // Q10: correctIndex=0
                    { question: 'Exercices de style de Raymond Queneau (1947) consiste en :', options: ['99 reecritures du meme recit banal dans des styles differents', '99 poemes sur le theme de la vie quotidienne', '99 nouvelles formant un roman', '99 exercices de grammaire en forme de jeu'], correctIndex: 0, explanation: 'Queneau reecrit 99 fois la meme anecdote banale (un homme dans un autobus) en variant les styles, les registres et les procedes, demonstrant la richesse infinie du langage.' },
                    // Q11: correctIndex=1
                    { question: 'Nathalie Sarraute appelle "tropismes" :', options: ['Les mouvements de l\'intrigue romanesque', 'Les mouvements interieurs infimes et pre-verbaux qui constituent la vie psychique', 'Les techniques narratives du Nouveau Roman', 'Les courants litteraires du XXe siecle'], correctIndex: 1, explanation: 'Sarraute emprunte le terme a la biologie pour designer les mouvements interieurs infimes, anterieurs au langage, qui animent les rapports humains. Tropismes (1939) en est la premiere exploration.' },
                    // Q12: correctIndex=2
                    { question: 'Le poeme Liberte d\'Eluard a ete parachute sur la France occupee en :', options: ['1940', 'Debut 1942', '1942, sous le titre Poesie et verite', '1944 lors du Debarquement'], correctIndex: 2, explanation: 'Liberte, publie dans le recueil Poesie et verite en 1942, a ete parachute par la RAF sur la France occupee. Chaque strophe se termine par "J\'ecris ton nom" et le dernier mot est "Liberte".' },
                    // Q13: correctIndex=3
                    { question: 'Quelle est la phrase d\'ouverture de L\'Etranger de Camus ?', options: ['"C\'etait un beau jour d\'ete a Alger"', '"Il faut imaginer Sisyphe heureux"', '"Longtemps je me suis couche de bonne heure"', '"Aujourd\'hui, maman est morte"'], correctIndex: 3, explanation: '"Aujourd\'hui, maman est morte. Ou peut-etre hier, je ne sais pas." L\'incipit celebre etablit d\'emblee l\'indifference et le decalage emotionnel de Meursault.' },
                    // Q14: correctIndex=3
                    { question: 'L\'Oulipo a ete fonde en 1960 par :', options: ['Perec et Calvino', 'Robbe-Grillet et Butor', 'Sartre et Camus', 'Queneau et Francois Le Lionnais'], correctIndex: 3, explanation: 'L\'Ouvroir de Litterature Potentielle est fonde en 1960 par l\'ecrivain Raymond Queneau et le mathematicien Francois Le Lionnais. Perec les rejoindra en 1967.' },
                    // Q15: correctIndex=1
                    { question: 'En attendant Godot de Beckett a ete cree pour la premiere fois en :', options: ['1950', '1953', '1957', '1960'], correctIndex: 1, explanation: 'La piece est creee le 5 janvier 1953 au Theatre de Babylone a Paris, dans une mise en scene de Roger Blin. Elle deviendra l\'oeuvre emblematique du theatre de l\'absurde.' },
                    // Q16: correctIndex=2
                    { question: 'Quelle oeuvre de Duras a recu le prix Goncourt en 1984 ?', options: ['Moderato cantabile', 'Le Ravissement de Lol V. Stein', 'L\'Amant', 'Hiroshima mon amour'], correctIndex: 2, explanation: 'L\'Amant (1984) est un recit autobiographique sur la liaison de la jeune Duras avec un Chinois en Indochine coloniale. C\'est un immense succes qui recoit le prix Goncourt.' },
                    // Q17: correctIndex=0
                    { question: 'Rhinoceros d\'Ionesco est une allegorie de :', options: ['Le conformisme et le totalitarisme', 'La revolution industrielle', 'La condition ouvriere', 'L\'exil et la nostalgie'], correctIndex: 0, explanation: 'Les habitants qui se transforment en rhinoceros symbolisent la contamination ideologique et le conformisme de masse. Seul Berenger resiste, incarnant la defense de l\'individu face au totalitarisme.' },
                    // Q18: correctIndex=3
                    { question: 'Feuillets d\'Hypnos de Rene Char (1946) est ne de l\'experience :', options: ['De l\'exil en Amerique', 'De l\'internement psychiatrique', 'De la guerre de 1914-18', 'De la Resistance dans le maquis'], correctIndex: 3, explanation: 'Char, capitaine du maquis de Provence, ecrit ces fragments poetiques pendant la Resistance. Feuillets d\'Hypnos temoigne d\'une poesie en acte, nee de l\'urgence du combat.' },
                    // Q19: correctIndex=1
                    { question: 'Quel mot Apollinaire a-t-il invente, qui donnera son nom a un mouvement artistique majeur ?', options: ['Dadaisme', 'Surrealisme', 'Expressionnisme', 'Futurisme'], correctIndex: 1, explanation: 'Apollinaire cree le mot "surrealisme" en 1917 dans le programme du ballet Parade et le sous-titre de sa piece Les Mamelles de Tiresias (1917, "drame surrealiste"). Breton reprendra le terme en 1924.' },
                    // Q20: correctIndex=2
                    { question: 'Dans Huis clos, les trois personnages sont enfermes :', options: ['Dans une prison', 'Dans un bunker pendant la guerre', 'Dans un salon pour l\'eternite, qui est l\'enfer', 'Dans un hopital psychiatrique'], correctIndex: 2, explanation: 'Garcin, Ines et Estelle sont morts et enfermes dans un salon Second Empire pour l\'eternite. L\'enfer sartrien n\'a ni flammes ni demons : c\'est le regard perpetuel des autres.' },
                    // Q21: correctIndex=3
                    { question: 'La Peste de Camus (1947) peut etre lue comme une allegorie de :', options: ['La crise economique de 1929', 'La premiere guerre mondiale', 'Le colonialisme francais', 'L\'Occupation nazie et la Resistance'], correctIndex: 3, explanation: 'La Peste, qui raconte une epidemie a Oran, est generalement interpretee comme une allegorie de l\'Occupation nazie. Les personnages qui combattent le fleau representent les attitudes face au mal et a la resistance.' },
                    // Q22: correctIndex=1
                    { question: 'L\'Ere du soupcon de Sarraute (1956) critique :', options: ['La poesie surrealiste', 'Les conventions du roman traditionnel : personnage, intrigue, psychologie', 'Le theatre de l\'absurde', 'La politique culturelle de l\'Etat'], correctIndex: 1, explanation: 'L\'Ere du soupcon est un essai ou Sarraute remet en cause les notions traditionnelles de personnage romanesque et de psychologie litteraire, anticipant les principes du Nouveau Roman.' },
                    // Q23: correctIndex=0
                    { question: 'Qu\'est-ce que la litterature ? de Sartre (1948) defend l\'idee que :', options: ['L\'ecrivain est en situation dans son epoque et doit s\'engager', 'L\'art doit rester pur et degage de toute politique', 'La poesie est superieure a la prose', 'La litterature est essentiellement un divertissement'], correctIndex: 0, explanation: 'Sartre affirme que l\'ecrivain est responsable devant son epoque. Ecrire est un acte : "devoiler le monde, c\'est agir." Il oppose la prose engagee a la poesie, libre de toute responsabilite referentielle.' },
                    // Q24: correctIndex=2
                    { question: 'Quel recueil d\'Apollinaire contient des poemes disposes en forme de dessins ?', options: ['Alcools', 'Le Bestiaire', 'Calligrammes', 'Il y a'], correctIndex: 2, explanation: 'Calligrammes (1918) contient des poemes visuels ou la disposition typographique forme un dessin en rapport avec le sujet (pluie, coeur, montre, Tour Eiffel). C\'est une innovation majeure de la poesie visuelle.' }
                ]
            }
        ]
    });
})();
