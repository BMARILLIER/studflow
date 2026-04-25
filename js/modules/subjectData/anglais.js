// anglais.js — Donnees Anglais (6 sections, format dys/TSA)
(function() {
    if (!window.StudFlow || !window.StudFlow.subjects) return;

    window.StudFlow.subjects.register({
        id: 'anglais',
        name: 'Anglais',
        icon: '\uD83C\uDDEC\uD83C\uDDE7',
        color: 'accent',
        sections: [
            // ====================================================================
            // SECTION 1 — GRAMMAR ESSENTIALS
            // ====================================================================
            {
                id: 'grammar',
                title: 'Grammar Essentials',
                icon: '\uD83D\uDCDD',
                content: '<h3>Tenses (les temps)</h3>'
                    + '<ul>'
                    + '<li><strong>Present simple</strong> : habitudes — "She works every day."</li>'
                    + '<li><strong>Present continuous</strong> : action en cours — "She is working now."</li>'
                    + '<li><strong>Present perfect</strong> : passe lie au present — "I have lived here for 10 years."</li>'
                    + '<li><strong>Past simple</strong> : action finie — "They moved in 2019."</li>'
                    + '<li><strong>Past perfect</strong> : le passe du passe — "She had left when I arrived."</li>'
                    + '</ul>'
                    + '<h3>Modaux, conditionnels, passif</h3>'
                    + '<ul>'
                    + '<li><strong>Can/Could</strong> : capacite. <strong>Must/Have to</strong> : obligation. <strong>May/Might</strong> : probabilite</li>'
                    + '<li><strong>Type 1</strong> : If + present, will. <strong>Type 2</strong> : If + past, would. <strong>Type 3</strong> : If + past perfect, would have</li>'
                    + '<li><strong>Passif</strong> : be + participe passe — "The book was written by Orwell."</li>'
                    + '<li><strong>Reported speech</strong> : on recule d\'un cran — "He said he had seen the film."</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'Present perfect vs past simple ?', answer: 'PRESENT PERFECT (have + participe passe) = le passe est encore lie au present. "I have visited Paris" = j\'y suis alle, ca compte encore. PAST SIMPLE = c\'est fini, date. "I visited Paris in 2020." En gros : present perfect = le passe TOUCHE le present. Past simple = le passe est FERME. Mots difficiles : "participe passe" = 3e forme du verbe (go/went/GONE).' },
                    { question: 'Comment former le conditionnel type 2 ?', answer: 'Formule : If + PAST simple, would + verbe. Exemple : "If I had more time, I would learn Japanese." Ca parle d\'une situation IMAGINAIRE (je n\'ai PAS plus de temps). En gros : type 2 = "si j\'etais riche..." (mais je ne le suis pas).' },
                    { question: 'Must vs have to ?', answer: 'MUST = obligation qui vient de TOI. "I must finish this." HAVE TO = obligation qui vient de L\'EXTERIEUR. "I have to wear a uniform." En gros : must = MA decision. Have to = on M\'OBLIGE. Piege : au passe, must n\'existe pas → on dit "had to".' },
                    { question: 'Comment former le passif ?', answer: 'Formule : sujet + be (conjugue) + participe passe. "The book was written by Orwell." On utilise le passif quand on ne sait pas QUI a fait l\'action. En gros : actif = "Le chat mange la souris." Passif = "La souris est mangee par le chat."' },
                    { question: 'Quand utiliser le present continuous ?', answer: '3 cas : 1) Action EN COURS : "She is reading." 2) Situation TEMPORAIRE : "I am staying with friends." 3) Plan FUTUR : "We are meeting tomorrow." Piege : certains verbes JAMAIS au continuous : know, believe, want, love.' },
                    { question: 'May vs might ?', answer: 'MAY = probabilite MOYENNE (~50%). "It may rain." MIGHT = probabilite FAIBLE (~30%). "It might rain." MAY sert aussi pour la permission : "May I come in?" En gros : may = peut-etre. Might = pas sur du tout.' },
                    { question: 'C\'est quoi le conditionnel type 3 ?', answer: 'Formule : If + PAST PERFECT, would have + participe passe. Ca exprime un REGRET. "If I had studied harder, I would have passed." En gros : type 3 = "si j\'avais su..." C\'est IMPOSSIBLE a changer.' },
                    { question: 'Quand utiliser le past perfect ?', answer: 'Pour une action qui s\'est passee AVANT une autre action passee. "When I arrived, the train had already left." En gros : c\'est le "passe du passe." Comme un flashback dans un film.' },
                    { question: 'Comment exprimer le futur en anglais ?', answer: '4 facons : 1) WILL = decision spontanee ("It will rain"). 2) BE GOING TO = plan decide ("I\'m going to study"). 3) PRESENT CONTINUOUS = arrangement fixe ("We\'re leaving at 8"). 4) PRESENT SIMPLE = horaire officiel ("The train leaves at 6").' },
                    { question: 'Can vs could vs be able to ?', answer: 'CAN = capacite maintenant. COULD = capacite passee ou possibilite. BE ABLE TO = action precise reussie au passe. "After 3 tries, I was able to open the door." Piege : pour une action unique reussie au passe, PAS "I could" mais "I was able to".' },
                    { question: 'Comment transformer du discours direct en indirect ?', answer: 'On RECULE tout d\'un cran : present → past. Past → past perfect. Will → would. Can → could. Les pronoms changent : "I" → "he/she". "Today" → "that day". En gros : tout recule d\'un pas dans le passe.' },
                    { question: 'Comment rapporter une question ?', answer: 'On utilise "asked" + ordre NORMAL (sujet avant verbe). Question ouverte : "Where do you live?" → "He asked where I lived." Question oui/non : on ajoute "if" → "She asked if I was happy." Pas de point d\'interrogation en indirect.' },
                    { question: 'Relative determinative vs non-determinative ?', answer: 'DETERMINATIVE = info ESSENTIELLE, PAS de virgules. "The man who stole the car was arrested." NON-DETERMINATIVE = info EN PLUS, AVEC virgules. "My sister, who lives in Paris, is a doctor." En gros : pas de virgules = essentiel. Virgules = bonus.' },
                    { question: 'Wish + past simple vs wish + past perfect ?', answer: 'WISH + PAST SIMPLE = regret au PRESENT. "I wish I were taller." WISH + PAST PERFECT = regret au PASSE. "I wish I had studied harder." En gros : wish + past = je veux le contraire de maintenant. Wish + past perfect = j\'aurais du.' },
                    { question: 'Used to vs be used to vs get used to ?', answer: '"USED TO + verbe" = habitude passee FINIE. "I used to smoke." "BE USED TO + V-ing" = etre habitue. "I\'m used to waking up early." "GET USED TO + V-ing" = s\'habituer. "I\'m getting used to the food." Piege : apres "be/get used to" c\'est TOUJOURS -ing.' },
                    { question: 'Quand utiliser -ing vs to + verbe ?', answer: '-ING apres : enjoy, avoid, finish, mind, suggest. TO + VERBE apres : want, decide, agree, hope, promise. Piege : "Stop smoking" = arreter de fumer. "Stop to smoke" = s\'arreter POUR fumer. Le sens change !' },
                    { question: 'For vs since vs ago ?', answer: '"For" + duree : "for 3 hours." "Since" + point de depart : "since 2015." "Ago" = il y a (past simple) : "5 years ago." En gros : for = combien de temps ? Since = depuis quand ? Ago = il y a.' },
                    { question: 'Comment utiliser despite et although ?', answer: '"Despite / In spite of" + NOM ou V-ing : "Despite the rain, we went out." "Although" + sujet + verbe : "Although it was raining, we went out." Piege : on ne dit JAMAIS "despite of" !' },
                    { question: 'Comment former les question tags ?', answer: 'Phrase positive → tag negatif : "She is French, isn\'t she?" Phrase negative → tag positif : "You don\'t like it, do you?" On reprend l\'auxiliaire de la phrase. En gros : le tag est le MIROIR INVERSE de la phrase.' },
                    { question: 'Both, either, neither ?', answer: '"Both... and" = les deux. "Either... or" = l\'un ou l\'autre. "Neither... nor" = ni l\'un ni l\'autre. En gros : both = tout. Either = choix. Neither = rien.' },
                    { question: 'So, such, too, enough ?', answer: '"So" + adjectif : "She is so kind." "Such" + nom : "Such a beautiful day!" "Too" = exces : "Too expensive." "Enough" apres l\'adj ou avant le nom : "old enough" / "enough money."' },
                    { question: 'Make someone do vs have someone do ?', answer: '"Make someone do" = FORCER. "The teacher made us write an essay." "Have someone do" = faire faire. "I had the mechanic fix my car." "Let someone do" = permettre. Piege : apres make et let, PAS de "to".' },
                    { question: 'Articles : the, a/an ou rien ?', answer: '"The" = specifique : "the book on the table." "A/an" = un parmi d\'autres : "a book." Zero article = generalite : "I like chocolate" (PAS "the chocolate"). Piege : les Francais mettent trop de "the" partout !' },
                    { question: 'Comparatifs et superlatifs ?', answer: 'Court (1 syllabe) : adj-ER / the adj-EST ("taller, the tallest"). Long (3+ syllabes) : more / the most ("more beautiful"). Irreguliers : good-better-best, bad-worse-worst. En gros : court = on ajoute a la fin. Long = on ajoute devant.' },
                    { question: 'As vs like ?', answer: '"Like" + nom : "She sings like a bird." "As" + sujet + verbe : "Do as I say." "As" + role : "He works as a teacher" (= c\'est son metier). Piege : "works LIKE a teacher" = il travaille a la maniere d\'un prof, sans en etre un !' },
                ],
                quiz: [
                    { question: '"If I ___ (be) you, I would apologise."', options: ['am', 'was', 'were', 'would be'], correctIndex: 2, explanation: 'Conditionnel type 2 : on utilise "were" pour tous les sujets. "If I were you..."' },
                    { question: 'Quelle phrase est au present perfect ?', options: ['She went to London.', 'She has gone to London.', 'She is going to London.', 'She goes to London.'], correctIndex: 1, explanation: '"She has gone" = present perfect (have/has + PP). Elle est partie et c\'est encore actuel.' },
                    { question: '"Shakespeare wrote Hamlet" au passif :', options: ['Hamlet was written by Shakespeare.', 'Hamlet is written by Shakespeare.', 'Hamlet has written by Shakespeare.', 'Hamlet wrote by Shakespeare.'], correctIndex: 0, explanation: 'Passif au past simple : was + PP. "Hamlet was written by Shakespeare."' },
                    { question: '"You ___ wear a seatbelt. It\'s the law."', options: ['should', 'might', 'must', 'could'], correctIndex: 2, explanation: '"Must" = obligation forte. C\'est la loi, donc obligation absolue.' },
                    { question: 'Quel conditionnel exprime un regret au passe ?', options: ['Type 0', 'Type 1', 'Type 2', 'Type 3'], correctIndex: 3, explanation: 'Type 3 = regret. "If I had studied, I would have passed."' },
                    { question: '"She ___ working here since 2018."', options: ['is', 'was', 'has been', 'had been'], correctIndex: 2, explanation: '"Has been" + since = present perfect. L\'action continue dans le present.' },
                    { question: '"I enjoy ___."', options: ['to run', 'running', 'run', 'to running'], correctIndex: 1, explanation: '"Enjoy" est suivi de -ing. Les verbes de plaisir prennent le gerondif.' },
                    { question: '"He told me he ___ the book." (reported speech)', options: ['reads', 'has read', 'had read', 'is reading'], correctIndex: 2, explanation: 'Reported speech : le past simple devient past perfect. "Read" → "had read".' },
                    { question: '"I wish I ___ taller."', options: ['am', 'was', 'were', 'would be'], correctIndex: 2, explanation: 'Wish + were = regret au present. "I wish I were taller."' },
                    { question: '"Despite ___ the rain, we went out."', options: ['despite of', 'despite', 'although', 'despite that'], correctIndex: 1, explanation: '"Despite" + nom. Jamais "despite of". Pour une proposition, utiliser "although".' },
                    { question: '"She made me ___." (make someone do)', options: ['to rewrite', 'rewriting', 'rewrite', 'rewrote'], correctIndex: 2, explanation: 'Apres "make + someone" = base verbale sans to. "Made me rewrite."' },
                    { question: 'Quel est le comparatif de "bad" ?', options: ['badder', 'more bad', 'worse', 'worst'], correctIndex: 2, explanation: '"Bad" est irregulier : bad → worse → worst.' },
                    { question: '"Neither the teacher ___ the students knew."', options: ['or', 'and', 'nor', 'but'], correctIndex: 2, explanation: '"Neither... nor" est la paire correcte. Pas "neither... or".' },
                    { question: '"Life is beautiful." Article avant "life" ?', options: ['the', 'a', 'an', 'Aucun article'], correctIndex: 3, explanation: 'Generalite = pas d\'article en anglais. "Life is beautiful" sans "the".' },
                    { question: 'Quand peut-on supprimer le pronom relatif ?', options: ['Quand il est sujet', 'Quand il est objet', 'Toujours', 'Jamais'], correctIndex: 1, explanation: 'On supprime who/which/that quand il est OBJET : "The film (that) I saw."' },
                ]
            },

            // ====================================================================
            // SECTION 2 — LITERATURE & AUTHORS
            // ====================================================================
            {
                id: 'literature',
                title: 'Literature & Authors',
                icon: '\uD83D\uDCDA',
                content: '<h3>Shakespeare</h3>'
                    + '<ul>'
                    + '<li><strong>Romeo and Juliet</strong> : amour vs haine, destin, "star-crossed lovers"</li>'
                    + '<li><strong>Hamlet</strong> : "To be or not to be" — vengence, indecision, mort</li>'
                    + '<li><strong>Macbeth</strong> : ambition, culpabilite, folie — "Out, damned spot!"</li>'
                    + '</ul>'
                    + '<h3>Dystopies</h3>'
                    + '<ul>'
                    + '<li><strong>Orwell — 1984</strong> : totalitarisme, surveillance, "Big Brother"</li>'
                    + '<li><strong>Huxley — Brave New World</strong> : controle par le plaisir</li>'
                    + '<li><strong>Atwood — The Handmaid\'s Tale</strong> : droits des femmes, theocratie</li>'
                    + '</ul>'
                    + '<h3>Le Reve americain en litterature</h3>'
                    + '<ul>'
                    + '<li><strong>Fitzgerald — The Great Gatsby</strong> : le reve corrompu</li>'
                    + '<li><strong>Steinbeck — Of Mice and Men</strong> : amitie, solitude, Grande Depression</li>'
                    + '</ul>'
                    + '<h3>Post-colonial & Poesie</h3>'
                    + '<ul>'
                    + '<li><strong>Achebe — Things Fall Apart</strong> : colonialisme et cultures africaines</li>'
                    + '<li><strong>Harper Lee — To Kill a Mockingbird</strong> : racisme, justice</li>'
                    + '<li><strong>War Poets</strong> : Wilfred Owen, Sassoon — horreurs de la WWI</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'C\'est qui Shakespeare ?', answer: 'William Shakespeare (1564-1616) = le plus grand ecrivain anglais. 37 pieces de theatre. Il a INVENTE plus de 1700 mots : "lonely", "eyeball", "generous". En gros : chaque fois que tu dis "lonely", tu parles Shakespeare sans le savoir. Mots difficiles : "The Bard" = surnom de Shakespeare.' },
                    { question: '"To be or not to be" de Hamlet ?', answer: 'Le monologue le plus CELEBRE. Hamlet se demande : vaut-il mieux VIVRE et souffrir ou MOURIR ? C\'est une reflexion sur le suicide et la peur de l\'inconnu. En gros : Hamlet hesite entre vivre dans la douleur ou mourir. C\'est LE personnage indecis.' },
                    { question: '"Out, damned spot!" dans Macbeth ?', answer: 'Lady Macbeth essaie de laver du sang IMAGINAIRE sur ses mains. Elle a pousse son mari a tuer le roi. La CULPABILITE la rend folle. En gros : l\'ambition mene au crime, le crime mene a la folie.' },
                    { question: 'Quel est le message de 1984 d\'Orwell ?', answer: 'Orwell met en garde contre le TOTALITARISME. Le Parti controle la verite. "Big Brother is watching you." La "Newspeak" appauvrit la langue pour EMPECHER la pensee critique. En gros : un monde ou le pouvoir controle la verite et le langage. Mots difficiles : "Newspeak" = novlangue.' },
                    { question: 'Brave New World vs 1984 ?', answer: 'Dans 1984, le controle passe par la PEUR (surveillance, torture). Dans Brave New World, le controle passe par le PLAISIR (drogue, divertissement). En gros : Orwell = on souffre trop. Huxley = on s\'amuse trop. Deux cauchemars OPPOSES. Mots difficiles : "dystopia" = societe cauchemardesque.' },
                    { question: 'The Handmaid\'s Tale d\'Atwood ?', answer: 'Les USA sont devenus GILEAD, une dictature religieuse. Les femmes ont perdu TOUS leurs droits. Les "Handmaids" sont forcees a porter des enfants pour les dirigeants. En gros : les droits des femmes peuvent etre supprimes du jour au lendemain. Mots difficiles : "theocracy" = regime gouverne par la religion.' },
                    { question: 'The Great Gatsby — message ?', answer: 'Gatsby est parti de rien et est devenu riche pour reconquerir Daisy. Mais sa richesse est VIDE. La "green light" = le reve INACCESSIBLE. En gros : le reve americain est une illusion magnifique mais DESTRUCTRICE. Mots difficiles : "green light" = symbole de l\'espoir inaccessible.' },
                    { question: 'Of Mice and Men — themes ?', answer: 'George et Lennie sont des travailleurs pauvres pendant la Grande Depression. Leur reve d\'une ferme est ECRASE par la pauvrete. L\'AMITIE est rare dans un monde de solitude. En gros : meme les plus beaux reves echouent quand la societe est injuste. Mots difficiles : "Great Depression" = crise des annees 1930.' },
                    { question: 'Things Fall Apart d\'Achebe ?', answer: 'Okonkwo est un chef IGBO au Nigeria. Sa culture est DETRUITE par les colonisateurs britanniques. Achebe montre que l\'Afrique avait des societes COMPLEXES avant la colonisation. En gros : la colonisation ne "civilise" pas, elle DETRUIT. Mots difficiles : "post-colonial" = qui repond a la colonisation.' },
                    { question: 'To Kill a Mockingbird — themes ?', answer: 'INJUSTICE raciale : Tom Robinson (Noir) accuse a tort. COURAGE moral : Atticus Finch le defend. PERTE de l\'innocence : Scout decouvre la cruaute du monde. En gros : le mockingbird = l\'innocent. Le tuer est un peche. Mots difficiles : "prejudice" = prejuge.' },
                    { question: 'Wilfred Owen et la poesie de guerre ?', answer: 'Owen (1893-1918) = le plus grand poete de la WWI. "Dulce et Decorum Est" decrit l\'horreur d\'une attaque au gaz. Le titre latin = "Il est doux de mourir pour sa patrie" — Owen montre que c\'est un MENSONGE. En gros : la guerre n\'a rien de glorieux. Mots difficiles : "war poetry" = poesie de guerre.' },
                    { question: 'Fahrenheit 451 de Bradbury ?', answer: '451°F = la temperature ou le papier s\'enflamme. Dans ce monde, les pompiers BRULENT des LIVRES. Le roman denonce la censure et l\'anti-intellectualisme. En gros : un monde sans livres, ou reflechir est interdit. Mots difficiles : "censorship" = interdiction de certaines idees.' },
                    { question: 'Frankenstein de Mary Shelley ?', answer: 'Un scientifique CREE un etre vivant puis l\'ABANDONNE. Le "monstre" est en fait la VICTIME — rejete par son createur. Questions sur l\'ethique de creer la vie (IA, clonage). En gros : le vrai monstre c\'est l\'abandon. Shelley avait 18 ans quand elle l\'a ecrit !' },
                    { question: 'Figures de style en anglais ?', answer: 'METAPHOR = comparaison SANS like/as : "Life IS a journey." SIMILE = comparaison AVEC like/as : "Brave AS a lion." IRONY = dire le contraire de ce qu\'on pense. PERSONIFICATION = qualites humaines a un objet. En gros : metaphor = IS. Simile = LIKE/AS. C\'est LA difference a retenir.' },
                    { question: 'Auteur vs narrateur ?', answer: 'L\'AUTEUR = la vraie personne (Orwell). Le NARRATEUR = la voix qui raconte (peut etre un personnage). Piege au Bac : ne JAMAIS ecrire "Orwell says" quand c\'est un personnage qui parle. Ecris "The narrator says." En gros : auteur = reel. Narrateur = fictif.' },
                    { question: 'Pourquoi les dystopies sont utiles au Bac ?', answer: 'Elles touchent PLUSIEURS themes : pouvoir (1984), technologie (Brave New World), identite (Handmaid\'s Tale), democratie. En gros : connais 3 dystopies = tu as des exemples pour presque tous les sujets.' },
                    { question: 'Litterature gothique ?', answer: 'Decors SOMBRES (chateaux, ruines), elements SURNATURELS, folie. Oeuvres cles : Frankenstein (Shelley), Dracula (Stoker), Wuthering Heights (Bronte). En gros : gothique = sombre + surnaturel + emotions fortes.' },
                    { question: 'Oscar Wilde — Dorian Gray ?', answer: 'Un jeune homme reste beau tandis que son portrait VIEILLIT et montre ses peches. Themes : vanite, corruption, double vie. En gros : Dorian Gray = Instagram avant l\'heure. L\'image parfaite cache la realite pourrie.' },
                    { question: 'Lord of the Flies de Golding ?', answer: 'Des garcons echoues sur une ile descendent dans la SAUVAGERIE. Sans les regles de la civilisation, ils creent une hierarchie brutale. Le coquillage (conch) = la democratie. Quand il est detruit, la civilisation s\'effondre. En gros : sans regles, la nature humaine devient violente.' },
                    { question: '"Ozymandias" de Shelley ?', answer: 'Une statue en RUINES dans le desert. Inscription : "Look on my Works, ye Mighty!" Mais autour : RIEN. Que du sable. En gros : meme les empires les plus puissants finissent en poussiere. Mots difficiles : "transience" = caractere ephemere.' },
                ],
                quiz: [
                    { question: 'Qui a ecrit "1984" ?', options: ['Aldous Huxley', 'George Orwell', 'Ray Bradbury', 'Margaret Atwood'], correctIndex: 1, explanation: 'George Orwell a ecrit 1984 (1949). Huxley = Brave New World, Bradbury = Fahrenheit 451.' },
                    { question: '"To be or not to be" vient de :', options: ['Romeo', 'Macbeth', 'Hamlet', 'Othello'], correctIndex: 2, explanation: 'Hamlet prononce ce monologue celebre (Acte III). Reflexion sur la vie et la mort.' },
                    { question: 'La "green light" dans Gatsby symbolise :', options: ['L\'argent', 'Le reve inaccessible de Gatsby', 'L\'environnement', 'Les yeux de Daisy'], correctIndex: 1, explanation: 'La lumiere verte = le reve inatteignable, le desir de rattraper le passe.' },
                    { question: 'Qui a ecrit Things Fall Apart ?', options: ['Chinua Achebe', 'Wole Soyinka', 'Ngugi wa Thiong\'o', 'Chimamanda Adichie'], correctIndex: 0, explanation: 'Achebe (1958). Premiere grande oeuvre de la litterature africaine en anglais.' },
                    { question: '"Dulce et Decorum Est" parle de :', options: ['La beaute de la guerre', 'Une histoire d\'amour', 'Les horreurs de la WWI', 'L\'Empire romain'], correctIndex: 2, explanation: 'Owen decrit l\'horreur du gaz et denonce le mensonge de la "mort glorieuse".' },
                    { question: 'Dans Brave New World, le controle passe par :', options: ['La peur', 'Le plaisir et les drogues', 'La force militaire', 'La religion'], correctIndex: 1, explanation: 'Controle par le plaisir (soma, divertissement). Oppose a 1984 (controle par la peur).' },
                    { question: 'Qui a ecrit To Kill a Mockingbird ?', options: ['Mark Twain', 'Harper Lee', 'John Steinbeck', 'Toni Morrison'], correctIndex: 1, explanation: 'Harper Lee (1960). Le racisme vu par Scout, une enfant du Sud des USA.' },
                    { question: 'Qui a ecrit Frankenstein ?', options: ['Bram Stoker', 'Edgar Allan Poe', 'Mary Shelley', 'H.G. Wells'], correctIndex: 2, explanation: 'Mary Shelley, a 18 ans (1818). Considere comme le premier roman de science-fiction.' },
                    { question: '"Big Brother is watching you" vient de :', options: ['Brave New World', '1984', 'Fahrenheit 451', 'The Handmaid\'s Tale'], correctIndex: 1, explanation: 'Slogan du Parti dans 1984 d\'Orwell. Symbole de la surveillance de masse.' },
                    { question: 'Le coquillage (conch) dans Lord of the Flies symbolise :', options: ['La guerre', 'La democratie et l\'ordre', 'La nature', 'L\'innocence'], correctIndex: 1, explanation: 'Le conch donne le droit de parler = democratie. Quand il est detruit, la civilisation s\'effondre.' },
                    { question: '"All animals are equal, but some are more equal" vient de :', options: ['1984', 'Brave New World', 'Animal Farm', 'Lord of the Flies'], correctIndex: 2, explanation: 'Animal Farm d\'Orwell. Les cochons trahissent les ideaux d\'egalite.' },
                    { question: 'Metaphor vs simile ?', options: ['C\'est la meme chose', 'Metaphor = avec like, simile = sans', 'Metaphor = sans like/as, simile = avec like/as', 'Aucune difference'], correctIndex: 2, explanation: 'Metaphor : "Life IS a journey" (sans like). Simile : "Brave AS a lion" (avec like/as).' },
                    { question: 'Fahrenheit 451 = la temperature ou :', options: ['L\'eau bout', 'Le papier brule', 'Le metal fond', 'C\'est l\'annee de l\'histoire'], correctIndex: 1, explanation: '451°F = temperature a laquelle le papier s\'enflamme. Les pompiers brulent les livres.' },
                    { question: 'The Handmaid\'s Tale se deroule a :', options: ['L\'Angleterre medievale', 'Gilead, sur les ruines des USA', 'Un vaisseau spatial', 'Le Japon'], correctIndex: 1, explanation: 'Gilead = theocratie totalitaire qui a remplace les USA. Les femmes n\'ont plus de droits.' },
                    { question: 'Les soeurs Bronte ont publie sous :', options: ['Leurs vrais noms', 'Des pseudonymes masculins', 'Le nom de leur pere', 'Un nom collectif'], correctIndex: 1, explanation: 'Currer, Ellis et Acton Bell. Les femmes ecrivains n\'etaient pas prises au serieux.' },
                ]
            },

            // ====================================================================
            // SECTION 3 — BRITISH CIVILISATION
            // ====================================================================
            {
                id: 'civilisation_uk',
                title: 'British Civilisation',
                icon: '\uD83C\uDDEC\uD83C\uDDE7',
                content: '<h3>Systeme politique</h3>'
                    + '<ul>'
                    + '<li><strong>Monarchie constitutionnelle</strong> : le roi regne mais ne gouverne pas</li>'
                    + '<li><strong>Parlement</strong> : House of Commons (elue) + House of Lords (nommee)</li>'
                    + '<li><strong>Magna Carta (1215)</strong> : le roi est soumis a la loi</li>'
                    + '</ul>'
                    + '<h3>Brexit</h3>'
                    + '<ul>'
                    + '<li><strong>2016</strong> : 51.9% Leave vs 48.1% Remain</li>'
                    + '<li><strong>Consequences</strong> : frontieres, Irlande du Nord, debat ecossais</li>'
                    + '</ul>'
                    + '<h3>Empire, Commonwealth, societe</h3>'
                    + '<ul>'
                    + '<li><strong>Empire</strong> : 1/4 du monde dans les annees 1920</li>'
                    + '<li><strong>Windrush</strong> : travailleurs des Caraibes apres 1948</li>'
                    + '<li><strong>NHS</strong> : sante gratuite depuis 1948</li>'
                    + '<li><strong>Classes sociales</strong> : encore tres presentes (accent, ecole, habitudes)</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'C\'est quoi la Magna Carta ?', answer: 'La MAGNA CARTA (1215) = un texte signe par le roi Jean sans Terre. Il dit que le ROI EST SOUMIS A LA LOI. C\'est la base de toutes les democraties parlementaires. En gros : un texte de 1215 qui dit "meme le roi doit obeir a la loi". Mots difficiles : "Magna Carta" = Grande Charte.' },
                    { question: 'Comment fonctionne le Parlement britannique ?', answer: 'Le UK est une MONARCHIE CONSTITUTIONNELLE. Le Parlement a DEUX chambres : HOUSE OF COMMONS (650 deputes ELUS) et HOUSE OF LORDS (membres NOMMES). Le PM est le chef du parti MAJORITAIRE. Le roi a un role CEREMONIEL. En gros : seule la Chambre des Communes est elue. Le roi represente, le PM dirige.' },
                    { question: 'Quels sont les resultats du Brexit ?', answer: 'Le 23 juin 2016, 51.9% ont vote LEAVE et 48.1% REMAIN. L\'Angleterre et le Pays de Galles ont vote Leave. L\'Ecosse et l\'Irlande du Nord ont vote Remain. Les jeunes = Remain, les plus ages = Leave. En gros : le Brexit a coupe le pays en deux. Mots difficiles : "referendum" = vote populaire sur une question precise.' },
                    { question: 'Consequences du Brexit ?', answer: 'Nouveaux controles DOUANIERS. TENSIONS en Irlande du Nord (frontiere). Relance du debat sur l\'INDEPENDANCE de l\'Ecosse. Fin de la LIBRE CIRCULATION. PENURIE de main-d\'oeuvre. En gros : problemes aux frontieres, depart de travailleurs europeens, question ecossaise relancee.' },
                    { question: 'C\'est quoi le Commonwealth ?', answer: 'Association de 56 PAYS, anciens territoires de l\'EMPIRE BRITANNIQUE. Il promeut la cooperation et la democratie. Le roi en est le chef symbolique. Membres : Inde, Australie, Canada, Nigeria... En gros : l\'ancien Empire transforme en club de 56 pays. Mots difficiles : "soft power" = influence par la culture, pas par la force.' },
                    { question: 'C\'est quoi la Windrush Generation ?', answer: 'Des travailleurs des CARAIBES invites au UK apres 1948 pour aider a la RECONSTRUCTION d\'apres-guerre. Nom du bateau HMT Empire Windrush. SCANDALE en 2018 : certains menaces d\'expulsion apres 50+ ans au UK. En gros : des gens venus aider le UK qui ont failli etre expulses par erreur.' },
                    { question: 'C\'est quoi le NHS ?', answer: 'Le NHS (National Health Service) = la sante GRATUITE pour tous au UK depuis 1948. Finance par les IMPOTS. 1.7 million d\'employes. C\'est un symbole national aussi fort que la monarchie. En gros : comme la Secu mais tout est gratuit. Problemes actuels : manque d\'argent et longues listes d\'attente.' },
                    { question: 'Les classes sociales existent encore au UK ?', answer: 'Oui ! UPPER CLASS (aristocratie, "public schools" comme Eton). MIDDLE CLASS (cadres, professions liberales). WORKING CLASS (ouvriers). On reconnait la classe a l\'ACCENT, l\'ecole et les habitudes. En gros : au UK, ton accent dit d\'ou tu viens socialement. Piege : "public school" au UK = ecole PRIVEE d\'elite !' },
                    { question: 'Qui etait Margaret Thatcher ?', answer: 'PM conservatrice (1979-1990), PREMIERE FEMME a ce poste. PRIVATISATIONS, reduction de l\'Etat-providence, ecrasement des SYNDICATS (greve des mineurs 1984-85). Surnommee "THE IRON LADY." En gros : Thatcher a privatise et brise les syndicats. Adoree ou detestee, jamais ignoree. Mots difficiles : "trade unions" = syndicats.' },
                    { question: 'C\'est quoi le Blitz ?', answer: 'Le BLITZ (1940-41) = le bombardement de Londres par les nazis pendant 57 NUITS d\'affilee. Plus de 43 000 civils morts. Le "Blitz spirit" = courage et solidarite des Britanniques. Churchill : "We shall never surrender." En gros : les nazis ont bombarde Londres, les Britanniques ont tenu bon avec courage.' },
                    { question: 'Pourquoi l\'Ecosse veut son independance ?', answer: 'Le SNP veut l\'independance pour : controler ses RESSOURCES, avoir sa propre POLITIQUE SOCIALE (plus a gauche), REJOINDRE l\'UE (l\'Ecosse a vote Remain a 62%). Referendum 2014 : 55% Non. Le Brexit a relance le debat. En gros : l\'Ecosse est plus a gauche et veut retourner dans l\'UE.' },
                    { question: 'C\'est quoi les Troubles en Irlande du Nord ?', answer: 'Les TROUBLES (1968-1998) = conflit violent entre UNIONISTES (protestants, pro-UK) et NATIONALISTES (catholiques, pro-Irlande unie). Plus de 3 500 morts. Fin avec le GOOD FRIDAY AGREEMENT (1998). Le Brexit menace cette paix. En gros : 30 ans de guerre entre pro-UK et pro-Irlande unie. Mots difficiles : "power-sharing" = partage du pouvoir.' },
                    { question: 'C\'est quoi la Glorious Revolution (1688) ?', answer: 'Le Parlement a REMPLACE le roi catholique Jacques II par le protestant Guillaume d\'Orange — SANS VIOLENCE. Le BILL OF RIGHTS (1689) a affirme la suprematie du Parlement sur le roi. En gros : en 1688, le Parlement a pris le pouvoir au-dessus du roi. Naissance de la democratie britannique.' },
                    { question: 'C\'est quoi la Revolution industrielle ?', answer: 'Commencee au UK vers 1760. Passage de l\'AGRICULTURE aux USINES. Consequences : urbanisation, classe ouvriere, travail des enfants, misere MAIS aussi croissance economique. En gros : a partir de 1760, le UK passe de la campagne a l\'usine. Richesse et misere en meme temps.' },
                    { question: 'How multicultural is modern Britain?', answer: 'Londres : plus de 300 LANGUES parlees, 37% de residents nes a l\'etranger. Cette diversite vient de l\'Empire, de l\'UE et des refugies. Debats : integration vs multiculturalisme, racisme institutionnel. En gros : Londres est ultra-diverse grace a l\'histoire de l\'Empire et de l\'immigration.' },
                    { question: 'La BBC, c\'est quoi ?', answer: 'La BBC = la tele publique britannique, fondee en 1922. Financee par une REDEVANCE (licence fee), pas par la pub. Source d\'info RESPECTEE dans le monde entier. Exporte la culture UK (Doctor Who, Attenborough). En gros : la BBC = tele publique financee par les citoyens, pas de pub.' },
                ],
                quiz: [
                    { question: 'La Magna Carta date de :', options: ['1066', '1215', '1688', '1789'], correctIndex: 1, explanation: '1215, signee par le roi Jean sans Terre. Limite le pouvoir royal.' },
                    { question: 'Quel pourcentage a vote Leave au Brexit ?', options: ['48.1%', '50.0%', '51.9%', '55.3%'], correctIndex: 2, explanation: '51.9% Leave le 23 juin 2016. Resultat tres serre.' },
                    { question: 'Le Parlement britannique =', options: ['Senat + Assemblee', 'Commons + Lords', 'Congres + Senat', 'Bundestag + Bundesrat'], correctIndex: 1, explanation: 'House of Commons (elue) + House of Lords (nommee).' },
                    { question: 'La Windrush Generation vient de :', options: ['L\'Inde et le Pakistan', 'Les Caraibes', 'L\'Australie', 'L\'Europe de l\'Est'], correctIndex: 1, explanation: 'Immigres des Caraibes a partir de 1948, du nom du navire HMT Empire Windrush.' },
                    { question: 'Le NHS a ete fonde en :', options: ['1918', '1935', '1948', '1960'], correctIndex: 2, explanation: 'Le NHS a ete cree en 1948 par le gouvernement Attlee. Sante gratuite pour tous.' },
                    { question: 'Margaret Thatcher etait surnommee :', options: ['The Steel Lady', 'The Iron Lady', 'The Golden Lady', 'The Silver Lady'], correctIndex: 1, explanation: '"The Iron Lady" (la Dame de fer), pour sa fermete politique.' },
                    { question: 'Les Troubles en Irlande du Nord ont fini avec :', options: ['Le Brexit', 'Le Good Friday Agreement (1998)', 'La Magna Carta', 'L\'Act of Union'], correctIndex: 1, explanation: 'Accord du Vendredi Saint (1998) = partage du pouvoir, fin de 30 ans de violence.' },
                    { question: 'Au UK, "public school" signifie :', options: ['Ecole publique gratuite', 'Ecole privee d\'elite', 'Ecole de quartier', 'Ecole communautaire'], correctIndex: 1, explanation: 'Piege ! "Public school" au UK = ecole PRIVEE (Eton, Harrow). "State school" = ecole publique.' },
                    { question: 'La Glorious Revolution (1688) =', options: ['Une guerre civile', 'Le remplacement du roi sans violence', 'La Revolution francaise', 'La Revolution industrielle'], correctIndex: 1, explanation: 'Jacques II remplace par Guillaume d\'Orange sans sang. Le Parlement prend le dessus.' },
                    { question: 'Combien de langues a Londres ?', options: ['50', '100', 'Plus de 300', '200'], correctIndex: 2, explanation: 'Plus de 300 langues. Une des villes les plus multiculturelles au monde.' },
                    { question: 'Le Blitz (1940-41) =', options: ['Le Debarquement', 'Le bombardement nazi de Londres', 'La bataille de la Somme', 'La guerre des Malouines'], correctIndex: 1, explanation: 'Bombardement allemand des villes britanniques. Londres bombardee 57 nuits d\'affilee.' },
                    { question: 'Devolution au UK signifie :', options: ['Quitter l\'UE', 'Transferer des pouvoirs a l\'Ecosse, Galles et NI', 'Abolir la monarchie', 'Reformer les Lords'], correctIndex: 1, explanation: 'Devolution = transfert de pouvoirs de Westminster vers les parlements regionaux.' },
                    { question: 'L\'Empire britannique couvrait :', options: ['10% du globe', '15%', '25%', '40%'], correctIndex: 2, explanation: 'Dans les annees 1920, 25% de la surface terrestre et 1/4 de la population mondiale.' },
                    { question: 'La BBC est financee par :', options: ['La publicite', 'Les impots', 'Une redevance (licence fee)', 'Des dons prives'], correctIndex: 2, explanation: 'Licence fee payee par les foyers. Pas de pub sur la BBC.' },
                ]
            },

            // ====================================================================
            // SECTION 4 — AMERICAN CIVILISATION
            // ====================================================================
            {
                id: 'civilisation_us',
                title: 'American Civilisation',
                icon: '\uD83C\uDDFA\uD83C\uDDF8',
                content: '<h3>Le Reve americain</h3>'
                    + '<ul>'
                    + '<li><strong>Definition</strong> : reussir par le travail — "from rags to riches"</li>'
                    + '<li><strong>Declaration d\'Independance (1776)</strong> : "Life, Liberty and the pursuit of Happiness"</li>'
                    + '<li><strong>Critique</strong> : ignore les inegalites (race, classe, genre)</li>'
                    + '</ul>'
                    + '<h3>Droits civiques et societe</h3>'
                    + '<ul>'
                    + '<li><strong>Segregation</strong> → <strong>Civil Rights Movement</strong> (MLK, Rosa Parks, Malcolm X)</li>'
                    + '<li><strong>Black Lives Matter</strong>, <strong>gun control</strong>, <strong>immigration</strong></li>'
                    + '</ul>'
                    + '<h3>Systeme politique</h3>'
                    + '<ul>'
                    + '<li><strong>Republique federale</strong> : president + Congres (Senat + Chambre des representants)</li>'
                    + '<li><strong>Constitution</strong> et les <strong>Amendments</strong> (1st = liberte d\'expression, 2nd = armes)</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'C\'est quoi le Reve americain ?', answer: 'L\'idee que N\'IMPORTE QUI peut reussir par le travail, meme en partant de rien ("from rags to riches"). Base : Declaration d\'Independance (1776) : "Life, Liberty and the pursuit of Happiness." CRITIQUE : ca ignore les inegalites de race, classe et genre. En gros : tout le monde peut reussir en travaillant dur — mais c\'est un mythe pour beaucoup.' },
                    { question: 'Qui etait Martin Luther King ?', answer: 'MLK (1929-1968) = leader du mouvement des DROITS CIVIQUES. Methode : NON-VIOLENCE. Discours celebre : "I have a dream" (1963). Il a obtenu le CIVIL RIGHTS ACT (1964) contre la segregation. Assassine en 1968. En gros : MLK a combattu le racisme sans violence et a change les lois americaines.' },
                    { question: 'Rosa Parks et le boycott de Montgomery ?', answer: 'En 1955, Rosa Parks REFUSE de ceder sa place de bus a un Blanc a Montgomery (Alabama). Ca lance un BOYCOTT des bus pendant 381 jours. Resultat : la Cour Supreme declare la segregation dans les bus INCONSTITUTIONNELLE. En gros : une femme qui refuse de se lever → les bus sont desegregues. Un petit geste qui change tout.' },
                    { question: 'MLK vs Malcolm X ?', answer: 'MLK = NON-VIOLENCE, integration, marches pacifiques. Malcolm X = droits "BY ANY MEANS NECESSARY", fierte noire, Nation of Islam. Les deux voulaient l\'egalite mais avec des METHODES differentes. En gros : MLK = paix et integration. Malcolm X = fierte et resistance. Les deux ont fait avancer les droits.' },
                    { question: 'C\'est quoi le systeme politique americain ?', answer: 'REPUBLIQUE FEDERALE. PRESIDENT = chef de l\'Etat et du gouvernement (elu pour 4 ans). CONGRES = Senat (100, 2 par Etat) + Chambre des representants (435, selon la population). COUR SUPREME = 9 juges a vie. En gros : 3 pouvoirs separes qui se controlent. Mots difficiles : "checks and balances" = equilibre des pouvoirs.' },
                    { question: 'C\'est quoi les Amendments ?', answer: 'Les AMENDMENTS = modifications de la Constitution americaine (27 au total). Les plus importants : 1st = liberte d\'expression, de presse, de religion. 2nd = droit de porter des armes (tres controverse). 13th = abolition de l\'esclavage (1865). En gros : les Amendments ajoutent des droits a la Constitution.' },
                    { question: 'Le debat sur les armes aux USA ?', answer: 'Le 2ND AMENDMENT (1791) donne le droit de porter des armes. Arguments POUR : liberte individuelle, self-defense. Arguments CONTRE : fusillades de masse, 45 000 morts par armes a feu par an. La NRA (lobby des armes) est tres puissante. En gros : les Americains sont tres divises — liberte vs securite. Mots difficiles : "gun control" = controle des armes.' },
                    { question: 'C\'est quoi Black Lives Matter ?', answer: 'BLM = mouvement ne en 2013 apres l\'acquittement du meurtrier de Trayvon Martin. Amplifie en 2020 apres la mort de George Floyd (tue par un policier). Denonce le RACISME SYSTEMIQUE et les VIOLENCES POLICIERES. En gros : un mouvement contre le racisme et les violences policieres envers les Noirs. Mots difficiles : "systemic racism" = racisme ancre dans les institutions.' },
                    { question: 'L\'immigration aux USA — les grands moments ?', answer: 'Ellis Island (1892-1954) = porte d\'entree des immigres europeens. MELTING POT = idee que toutes les cultures fusionnent. Aujourd\'hui : debat sur le MUR a la frontiere mexicaine, les DREAMERS (jeunes arrives enfants). En gros : les USA sont un pays d\'immigres, mais l\'immigration est un sujet tres divise. Mots difficiles : "Dreamers" = jeunes immigres sans papiers arrives enfants (loi DACA).' },
                    { question: 'C\'est quoi la segregation ?', answer: 'La SEGREGATION = la separation LEGALE entre Noirs et Blancs aux USA (surtout dans le Sud). Ecoles, bus, restaurants, fontaines SEPAREES. Lois "Jim Crow" (1877-1960s). Fin officielle avec le CIVIL RIGHTS ACT (1964). En gros : pendant presque 100 ans, les Noirs et les Blancs etaient separes PAR LA LOI. Mots difficiles : "Jim Crow" = lois de segregation raciale dans le Sud.' },
                    { question: 'Democrates vs Republicains ?', answer: 'DEMOCRATES (bleu) = centre-gauche, droits sociaux, regulation, pro-environnement. REPUBLICAINS (rouge) = centre-droit, libre marche, armes, valeurs traditionnelles. Systeme BIPARTITE. En gros : Democrates = plus d\'Etat. Republicains = moins d\'Etat. Mots difficiles : "bipartisan" = qui implique les deux partis.' },
                    { question: 'C\'est quoi le "soft power" americain ?', answer: 'Le SOFT POWER = l\'influence par la CULTURE, pas par la force. Les USA dominent : Hollywood, musique, series Netflix, fast-food, tech (Google, Apple). L\'anglais est devenu langue mondiale grace au soft power americain. En gros : les USA influencent le monde par leurs films, leur musique et leur tech.' },
                    { question: 'C\'est quoi le federalisme americain ?', answer: 'Les USA = 50 ETATS avec chacun ses propres lois. Le gouvernement FEDERAL gere la defense, la politique etrangere. Chaque ETAT gere l\'education, la police, certains impots. Exemple : la peine de mort existe dans certains Etats, pas dans d\'autres. En gros : chaque Etat est un peu comme un mini-pays avec ses propres regles.' },
                    { question: 'Le 11 septembre 2001 — impact ?', answer: 'Attaques terroristes d\'Al-Qaeda sur le World Trade Center et le Pentagone. Pres de 3 000 morts. Consequences : PATRIOT ACT (surveillance), guerres en Afghanistan et Irak, islamophobie. En gros : le 11 septembre a change la politique americaine — plus de surveillance et de guerres. Mots difficiles : "Patriot Act" = loi qui autorise la surveillance de masse.' },
                    { question: 'C\'est quoi le mouvement #MeToo ?', answer: 'Mouvement lance en 2017 contre les VIOLENCES SEXUELLES et le HARCELEMENT. Commence avec l\'affaire Harvey Weinstein (producteur d\'Hollywood). Des millions de femmes ont temoigne. Impact : prise de conscience mondiale, changements de lois. En gros : les femmes parlent des violences qu\'elles subissent. Ca a change beaucoup de choses.' },
                ],
                quiz: [
                    { question: 'La Declaration d\'Independance date de :', options: ['1620', '1776', '1865', '1964'], correctIndex: 1, explanation: '1776. "Life, Liberty and the pursuit of Happiness."' },
                    { question: '"I have a dream" est un discours de :', options: ['Malcolm X', 'Martin Luther King', 'Barack Obama', 'Rosa Parks'], correctIndex: 1, explanation: 'MLK, lors de la Marche sur Washington (1963).' },
                    { question: 'Le 2nd Amendment concerne :', options: ['La liberte d\'expression', 'Le droit de porter des armes', 'L\'abolition de l\'esclavage', 'Le droit de vote'], correctIndex: 1, explanation: 'Le 2nd Amendment (1791) donne le droit de porter des armes. Tres controverse.' },
                    { question: 'Rosa Parks est connue pour :', options: ['Un discours celebre', 'Avoir refuse de ceder sa place dans un bus', 'Avoir ete presidente', 'Avoir ecrit un livre'], correctIndex: 1, explanation: 'En 1955, elle refuse de ceder sa place a Montgomery. Lance le boycott des bus.' },
                    { question: 'Les lois Jim Crow =', options: ['Lois sur l\'immigration', 'Lois de segregation raciale', 'Lois sur les armes', 'Lois economiques'], correctIndex: 1, explanation: 'Lois de segregation (1877-1960s) qui separaient Noirs et Blancs dans le Sud.' },
                    { question: 'Le Civil Rights Act date de :', options: ['1776', '1865', '1964', '2008'], correctIndex: 2, explanation: '1964. Interdit la discrimination raciale. Victoire du mouvement des droits civiques.' },
                    { question: 'BLM signifie :', options: ['Blue Lives Matter', 'Black Lives Matter', 'Better Laws Movement', 'British Liberty Movement'], correctIndex: 1, explanation: 'Black Lives Matter. Mouvement contre le racisme systemique et les violences policieres.' },
                    { question: 'Le Congres americain =', options: ['President + Cour Supreme', 'Senat + Chambre des representants', 'FBI + CIA', 'Senat uniquement'], correctIndex: 1, explanation: 'Senat (100 membres) + Chambre des representants (435 membres).' },
                    { question: 'Les "Dreamers" sont :', options: ['Des artistes', 'Des jeunes immigres arrives enfants', 'Des militants ecologistes', 'Des etudiants'], correctIndex: 1, explanation: 'Jeunes immigres sans papiers arrives enfants aux USA. Proteges par DACA (loi fragile).' },
                    { question: 'Le "melting pot" designe :', options: ['Un plat americain', 'La fusion des cultures en une seule', 'Un type de politique', 'Un quartier de New York'], correctIndex: 1, explanation: 'Idee que toutes les cultures immigrees fusionnent pour former la culture americaine.' },
                    { question: 'Le Patriot Act a ete vote apres :', options: ['Pearl Harbor', 'Le 11 septembre 2001', 'La guerre du Vietnam', 'L\'ouragan Katrina'], correctIndex: 1, explanation: 'Apres le 11 septembre 2001. Autorise la surveillance de masse.' },
                    { question: '#MeToo a commence en :', options: ['2010', '2015', '2017', '2020'], correctIndex: 2, explanation: '2017, avec l\'affaire Weinstein. Mouvement mondial contre les violences sexuelles.' },
                    { question: 'Democrates = quelle couleur ?', options: ['Rouge', 'Bleu', 'Vert', 'Jaune'], correctIndex: 1, explanation: 'Democrates = bleu. Republicains = rouge. L\'inverse de la France !' },
                ]
            },

            // ====================================================================
            // SECTION 5 — VOCABULAIRE, EXPRESSION & METHODE
            // ====================================================================
            {
                id: 'vocabulary_expression',
                title: 'Vocabulaire, Expression & Methode',
                icon: '\uD83C\uDFAF',
                content: '<h3>Vocabulaire thematique</h3>'
                    + '<ul>'
                    + '<li><strong>Environnement</strong> : global warming, carbon footprint, renewable energy</li>'
                    + '<li><strong>Technologie</strong> : AI, digital divide, cyberbullying, data privacy</li>'
                    + '<li><strong>Mondialisation</strong> : outsourcing, brain drain, fair trade</li>'
                    + '<li><strong>Identite</strong> : roots, belonging, dual identity, diaspora</li>'
                    + '<li><strong>Pouvoir</strong> : activism, whistleblower, civil disobedience</li>'
                    + '</ul>'
                    + '<h3>Methode d\'essai</h3>'
                    + '<ul>'
                    + '<li><strong>Intro</strong> : hook + context + thesis statement</li>'
                    + '<li><strong>Body</strong> : 2-3 paragraphes avec topic sentence + arguments + exemples</li>'
                    + '<li><strong>Conclusion</strong> : bilan + ouverture</li>'
                    + '</ul>'
                    + '<h3>Connecteurs et faux-amis</h3>'
                    + '<ul>'
                    + '<li><strong>Ajout</strong> : furthermore, moreover. <strong>Contraste</strong> : however, nevertheless</li>'
                    + '<li><strong>Faux-amis</strong> : actually = en fait, eventually = finalement, sensible = sense</li>'
                    + '</ul>',
                flashcards: [
                    // --- Vocabulaire thematique ---
                    { question: 'Les 10 mots cles de l\'environnement ?', answer: '1) GLOBAL WARMING 2) CARBON FOOTPRINT 3) RENEWABLE ENERGY 4) SUSTAINABILITY 5) DEFORESTATION 6) GREENHOUSE GASES 7) FOSSIL FUELS 8) BIODIVERSITY LOSS 9) CARBON-NEUTRAL 10) ENDANGERED SPECIES. En gros : 10 mots pour parler d\'environnement au Bac. Avec ca, tu peux ecrire un essai solide. Mots difficiles : "sustainability" = durabilite. "Carbon footprint" = empreinte carbone.' },
                    { question: 'C\'est quoi la "digital divide" ?', answer: 'La FRACTURE NUMERIQUE : l\'ecart entre ceux qui ONT acces a la technologie et ceux qui N\'ONT PAS. Entre pays (Nord/Sud), dans un pays (villes/campagnes), entre generations (jeunes/vieux). En gros : certains ont internet, d\'autres non. Ca cree des inegalites. Mots difficiles : "digital natives" = nes avec le numerique.' },
                    { question: 'C\'est quoi un "whistleblower" ?', answer: 'Un LANCEUR D\'ALERTE = quelqu\'un qui revele des SECRETS dans l\'interet public. Exemples : SNOWDEN (surveillance NSA), ASSANGE (WikiLeaks), HAUGEN (documents Facebook). Hero ou traitre ? Le debat continue. En gros : quelqu\'un qui balance des secrets pour proteger le public.' },
                    { question: 'Outsourcing vs offshoring ?', answer: 'OUTSOURCING = confier du travail a une entreprise EXTERIEURE. OFFSHORING = deplacer la production dans un AUTRE PAYS. Exemple : Nike fait fabriquer au Vietnam = les deux a la fois. En gros : outsourcing = tu fais faire par quelqu\'un d\'autre. Offshoring = tu fais faire dans un autre pays.' },
                    { question: 'Assimilation vs integration ?', answer: 'ASSIMILATION = ABANDONNER sa culture pour adopter celle du pays d\'accueil (melting pot). INTEGRATION = garder sa culture tout en S\'ADAPTANT (salad bowl). La France prefere l\'assimilation, le Canada l\'integration. En gros : assimilation = tu deviens comme les autres. Integration = tu gardes ta culture et tu t\'adaptes.' },
                    { question: 'Refugee vs migrant vs asylum seeker ?', answer: 'REFUGEE = fuit la guerre/persecution (protege par la loi). ASYLUM SEEKER = a demande le statut de refugie, attend la reponse. MIGRANT = terme general, peut etre volontaire. En gros : refugie = fuit le danger. Demandeur d\'asile = attend une reponse. Migrant = terme large. Ne PAS les confondre au Bac.' },
                    { question: 'C\'est quoi la "civil disobedience" ?', answer: 'Refuser d\'obeir a une loi INJUSTE, de maniere NON-VIOLENTE, en ACCEPTANT les consequences. Exemples : Rosa Parks, Gandhi, MLK, Greta Thunberg. En gros : desobeir a une loi injuste sans violence. Mots difficiles : "morally motivated" = motive par des raisons morales.' },
                    { question: 'Pros and cons des reseaux sociaux ?', answer: 'POUR : connexion, acces a l\'info, activisme (#MeToo, BLM). CONTRE : addiction, cyberbullying, sante mentale, desinformation. Expression cle : "Social media is a double-edged sword." En gros : les reseaux ont du bon et du mauvais. "Double-edged sword" = epee a double tranchant.' },

                    // --- Faux-amis ---
                    { question: 'Les 6 faux-amis les plus dangereux ?', answer: '"ACTUALLY" = en fait (PAS "actuellement" = currently). "EVENTUALLY" = finalement (PAS "eventuellement" = possibly). "LIBRARY" = bibliotheque (PAS "librairie" = bookshop). "SENSIBLE" = sense (PAS "sensible" = sensitive). "TO ATTEND" = assister a (PAS "attendre" = to wait). "TO PRETEND" = faire semblant (PAS "pretendre" = to claim). En gros : ces mots RESSEMBLENT au francais mais veulent dire autre chose !' },
                    { question: 'Encore des faux-amis dangereux ?', answer: '"SYMPATHETIC" = compatissant (PAS "sympathique" = friendly). "DEMAND" = exiger (PAS "demander" = to ask). "COMPREHENSIVE" = complet (PAS "comprehensif" = understanding). "RESUME" = reprendre (PAS "resumer" = to summarise). "INJURY" = blessure (PAS "injure" = insult). En gros : quand un mot anglais RESSEMBLE au francais, c\'est probablement un piege !' },

                    // --- Methode d\'essai ---
                    { question: 'Comment structurer un essai au Bac ?', answer: 'INTRO : 1) HOOK (citation, fait choc) 2) CONTEXTE 3) PROBLEMATIQUE. BODY : 2-3 paragraphes avec une IDEE PRINCIPALE + arguments + exemples. CONCLUSION : bilan + ouverture. En gros : intro (accroche + contexte + problematique), corps (idees + exemples), conclusion (bilan + ouverture). Mots difficiles : "hook" = accroche. "Thesis statement" = problematique.' },
                    { question: 'Comment ecrire une bonne introduction ?', answer: 'Commence par un HOOK : citation ("As Orwell wrote..."), fait surprenant, ou question. Puis CONTEXTE. Puis PROBLEMATIQUE. JAMAIS "In this essay I will talk about..." — c\'est ennuyeux. Plonge directement. En gros : phrase choc → situe le sujet → pose la question centrale.' },
                    { question: 'C\'est quoi une "topic sentence" ?', answer: 'La PREMIERE PHRASE de chaque paragraphe. Elle annonce l\'IDEE PRINCIPALE du paragraphe. Si le correcteur ne lit QUE tes topic sentences, il doit comprendre ton argument. En gros : topic sentence = le titre invisible de ton paragraphe.' },
                    { question: 'Les connecteurs essentiels ?', answer: 'AJOUT : furthermore, moreover. CONTRASTE : however, nevertheless. CAUSE : therefore, consequently. EXEMPLE : for instance, a case in point. CONCLUSION : all things considered, ultimately. En gros : 2-3 par categorie suffisent. "However" est le roi des connecteurs.' },
                    { question: 'However vs although ?', answer: '"HOWEVER" = debut de phrase, suivi d\'une virgule. "The economy grew. However, inequality increased." "ALTHOUGH" = debut de proposition. "Although the economy grew, inequality increased." Piege : "although" ne separe PAS deux phrases avec un point. En gros : however = entre 2 phrases. Although = dans la MEME phrase.' },
                    { question: 'Comment donner son avis au Bac ?', answer: 'Basique : "I think that..." Mieux : "I would argue that..." / "It seems to me that..." Top : "The evidence suggests that..." Nuance : "While I acknowledge X, I believe Y..." En gros : "I think" = college. "I would argue" = lycee. "The evidence suggests" = universitaire. Vise haut !' },
                    { question: 'Les 7 erreurs des eleves francais ?', answer: '1) Faux-amis (actually, eventually). 2) Ordre des mots (adj AVANT le nom : "a big house"). 3) "I like THE music" → "I like music." 4) "Informations" → "information" (indénombrable). 5) "Peoples" → "people" (deja pluriel). 6) "I am agree" → "I agree." 7) Pas de majuscule aux nationalites ("French" pas "french"). En gros : corrige ces 7 erreurs et tu gagnes des points.' },
                    { question: '"I am agree" — pourquoi c\'est faux ?', answer: 'En francais : "je SUIS d\'accord" (avec etre). En anglais : "I AGREE" (sans etre). "I agree." "I don\'t agree." "Do you agree?" Piege : c\'est L\'ERREUR la plus commune. L\'examinateur la repere immediatement. En gros : jamais "I am agree." Toujours "I agree."' },
                    { question: 'Mots indenombrables en anglais ?', answer: 'INFORMATION (pas "informations" → "some information"). ADVICE (pas "advices" → "a piece of advice"). FURNITURE (pas "furnitures"). LUGGAGE (pas "luggages"). NEWS (singulier : "The news IS good"). En gros : ces mots ne prennent PAS de "s". Pour dire "un", on utilise "a piece of".' },
                    { question: 'Comment repondre en comprehension ecrite ?', answer: 'Formule gagnante : ta REFORMULATION + CITATION entre guillemets + NUMERO de ligne. "The author suggests that technology isolates people, as shown by \'we are lonelier than ever\' (l. 14)." En gros : reformulation + citation + ligne = reponse parfaite. Sans citation = pas de preuve = moins de points.' },
                    { question: 'Comment organiser une synthese de documents ?', answer: 'Plan THEMATIQUE (PAS document par document). 1) INTRO : presenter tous les documents. 2) CORPS : organiser par THEMES en croisant les documents. 3) CONCLUSION : convergences et divergences. ZERO avis personnel dans la synthese. En gros : organise par themes, croise les documents, pas d\'avis personnel.' },
                    { question: '10 expressions sophistiquees pour un essai ?', answer: '1) "It goes without saying that..." 2) "This raises the question of whether..." 3) "There is no denying that..." 4) "It would be short-sighted to..." 5) "It is worth noting that..." 6) "All things considered..." 7) "A case in point is..." 8) "The jury is still out on..." 9) "This has far-reaching implications." 10) "It could be argued that..." En gros : utilise 3-4 de ces expressions par essai pour impressionner.' },
                    { question: 'C\'est quoi des "collocations" ?', answer: 'Mots qui vont NATURELLEMENT ensemble. "MAKE a decision" (pas "do"). "HEAVY rain" (pas "strong"). "RAISE awareness" (pas "rise"). DO homework, DO research. MAKE a mistake, MAKE progress. En gros : en anglais, certains mots vont TOUJOURS ensemble. Pas de logique, il faut les apprendre.' },
                    { question: 'Comment argumenter et contre-argumenter ?', answer: '1) Avis OPPOSE : "It is often argued that..." 2) RECONNAITRE : "While there is some truth..." 3) CONTRE-ARGUMENT : "However, this fails to consider..." 4) CONCLUSION : "Therefore, it seems more accurate to say..." En gros : presente l\'avis oppose → reconnais → contre-argumente → conclus. Ca montre de la maturite.' },
                    { question: '5 conseils pour le Bac d\'anglais ?', answer: '1) GEREZ votre temps (30 min comprehension, 60 min expression, 30 min relecture). 2) REPONDEZ A TOUT (meme imparfaitement). 3) RELISEZ-VOUS (10 min). 4) CITEZ vos sources (guillemets + ligne). 5) VARIEZ votre langage (synonymes, connecteurs). En gros : la relecture est le secret des bonnes notes.' },
                ],
                quiz: [
                    { question: '"Actually" en anglais signifie :', options: ['Actuellement', 'En fait / En realite', 'Effectivement', 'Activement'], correctIndex: 1, explanation: 'Faux ami ! "Actually" = en fait. "Actuellement" = currently.' },
                    { question: '"Eventually" signifie :', options: ['Eventuellement', 'Finalement', 'Evidemment', 'Effectivement'], correctIndex: 1, explanation: 'Faux ami ! "Eventually" = finalement. "Eventuellement" = possibly.' },
                    { question: '"Carbon footprint" =', options: ['Carbon print', 'Carbon footprint', 'Carbon mark', 'Carbon trace'], correctIndex: 1, explanation: '"Carbon footprint" = empreinte carbone. "Footprint" = empreinte de pied.' },
                    { question: '"Sensible" en anglais =', options: ['Sensible / Emotif', 'Sense / Raisonnable', 'Sensoriel', 'Sensitif'], correctIndex: 1, explanation: 'Faux ami ! "Sensible" = sense. "Sensible" (fr) = sensitive en anglais.' },
                    { question: 'Un "whistleblower" =', options: ['Un arbitre', 'Un lanceur d\'alerte', 'Un musicien', 'Un politicien'], correctIndex: 1, explanation: 'Lanceur d\'alerte. Revele des secrets dans l\'interet public (ex: Snowden).' },
                    { question: '"I am agree" est :', options: ['Correct', 'Incorrect — on dit "I agree"', 'Formel', 'Americain'], correctIndex: 1, explanation: '"Agree" est un verbe. On dit "I agree" sans "am". Erreur n°1 des Francais.' },
                    { question: '"To attend" signifie :', options: ['Attendre', 'Assister a / Participer', 'Tenter', 'Atteindre'], correctIndex: 1, explanation: 'Faux ami ! "To attend" = assister a. "Attendre" = to wait.' },
                    { question: 'Dans une synthese, on doit :', options: ['Resumer document par document', 'Donner son avis', 'Organiser par themes en croisant les docs', 'Traduire en francais'], correctIndex: 2, explanation: 'Synthese = plan thematique + croisement des documents. Pas d\'avis personnel.' },
                    { question: '"However" introduit :', options: ['Un ajout', 'Un exemple', 'Un contraste', 'Une conclusion'], correctIndex: 2, explanation: '"However" = cependant. Introduit une opposition.' },
                    { question: '"Informations" en anglais :', options: ['Pluriel normal', 'N\'existe pas — "information" est indenombrable', 'Comme en francais', 'Se dit "infos"'], correctIndex: 1, explanation: '"Information" est indenombrable. "Some information" ou "a piece of information".' },
                    { question: '"It could be argued that..." exprime :', options: ['Une certitude', 'Une opinion nuancee', 'Un desaccord total', 'Une question'], correctIndex: 1, explanation: 'Opinion nuancee et diplomatique. Parfait pour un essai B2.' },
                    { question: '"Brain drain" =', options: ['Maladie', 'Fuite des cerveaux', 'Fatigue mentale', 'Lavage de cerveau'], correctIndex: 1, explanation: 'Brain drain = fuite des cerveaux. Les talents qui quittent un pays.' },
                    { question: '"To make a decision" ou "to do" ?', options: ['To do a decision', 'To make a decision', 'Les deux', 'To take uniquement'], correctIndex: 1, explanation: 'Collocation : "make a decision" (pas "do"). MAKE = creation. DO = activite.' },
                    { question: '"Comprehensive" en anglais =', options: ['Comprehensif', 'Complet / Exhaustif', 'Comprehensible', 'Compromis'], correctIndex: 1, explanation: 'Faux ami ! "Comprehensive" = complet. "Comprehensif" (fr) = understanding.' },
                    { question: 'Disinformation vs misinformation ?', options: ['Meme chose', 'Disinformation = intentionnel, misinformation = involontaire', 'Misinformation est pire', 'Disinformation = en ligne uniquement'], correctIndex: 1, explanation: 'Disinformation = mensonge delibere. Misinformation = erreur partagee sans intention.' },
                ]
            },

            // ====================================================================
            // SECTION 6 — ORAL & PHONETICS
            // ====================================================================
            {
                id: 'oral_phonetics',
                title: 'Oral & Phonetics',
                icon: '\uD83C\uDFA4',
                content: '<h3>Pieges de prononciation</h3>'
                    + '<ul>'
                    + '<li><strong>"TH"</strong> : langue entre les dents — "think" ≠ "sink"</li>'
                    + '<li><strong>"H" aspire</strong> : toujours prononce — "house", "happy"</li>'
                    + '<li><strong>Voyelles courtes/longues</strong> : ship/sheep, bit/beat</li>'
                    + '<li><strong>Accent tonique</strong> : PHOtograph vs phoTOGraphy</li>'
                    + '</ul>'
                    + '<h3>Strategie a l\'oral</h3>'
                    + '<ul>'
                    + '<li><strong>Presenter un document</strong> : Identifier → Decrire → Analyser → Reagir → Elargir</li>'
                    + '<li><strong>Fillers</strong> : well, actually, let me think — pour eviter les silences</li>'
                    + '<li><strong>Intonation</strong> : montante pour les questions oui/non, descendante pour les affirmations</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'Comment prononcer le "th" ?', answer: 'DEUX sons : 1) "th" SOURD (think, three) : langue entre les dents, pas de vibration. 2) "th" SONORE (this, the) : langue entre les dents + vibration. Astuce : mets ta main sur ta gorge. Si ca vibre = sonore (the). Si pas = sourd (think). En gros : mets ta langue entre les dents et souffle. C\'est bizarre mais ca marche !' },
                    { question: 'Pourquoi le "H" est important ?', answer: 'En francais, le H est souvent muet. En anglais, il est TOUJOURS prononce (sauf : hour, honest, honour, heir). Si tu ne le prononces pas : "eat" et "heat" deviennent le meme mot. En gros : prononce TOUS les H en anglais. C\'est l\'erreur la plus reperable chez les Francais.' },
                    { question: 'Voyelles courtes vs longues ?', answer: 'Ship (court) vs Sheep (long) = bateau vs mouton. Bit vs Beat. Full vs Fool. La duree CHANGE le sens ! Astuce : pour la longue, etire ta bouche en souriant (sheeeeep). Pour la courte, bouche detendue (ship, rapide). En gros : bien differencier les voyelles sinon tu dis un autre mot.' },
                    { question: 'C\'est quoi l\'accent tonique ?', answer: 'La syllabe prononcee plus FORT. En anglais, l\'accent est LIBRE et change le sens : REcord (nom = disque) vs reCORD (verbe = enregistrer). PHOtograph → phoTOGraphy → photoGRAphic (il bouge !). En gros : le NOM a l\'accent sur la 1ere syllabe, le VERBE sur la 2e.' },
                    { question: '10 mots mal prononces par les Francais ?', answer: '1) Comfortable = COMF-ter-ble (3 syll.) 2) Wednesday = WENZ-day (d muet) 3) Clothes = klouz (1 syll. !) 4) Colonel = KER-nel 5) Chaos = KAY-oss 6) Recipe = RE-si-pee 7) Island = EYE-land (s muet) 8) Vegetable = VEJ-tuh-ble 9) Mortgage = MOR-gij 10) Entrepreneur = on-tre-pre-NER. En gros : l\'orthographe et la prononciation anglaises se sont fachees il y a des siecles.' },
                    { question: 'Comment prononcer le "-ed" des verbes ?', answer: '3 prononciations : 1) /t/ apres sons sourds (k, p, f, s) : walked, stopped. 2) /d/ apres sons sonores (b, g, v, m) : played, lived. 3) /id/ apres t ou d : wanted, needed (syllabe en plus !). En gros : si le verbe finit par T ou D, tu ajoutes une syllabe (want-ED). Sinon, juste un son final.' },
                    { question: 'Comment fonctionne l\'intonation ?', answer: 'DESCENDANTE : affirmations ("I live in Paris."), questions en WH ("Where do you live?"). MONTANTE : questions oui/non ("Do you like coffee?"). En gros : oui/non = voix qui monte. Mot interrogatif = voix qui descend. C\'est l\'inverse de ce qu\'on fait en francais !' },
                    { question: 'Quelles phrases utiliser a l\'oral du Bac ?', answer: 'DEBUT : "The document I\'m going to present is..." DECRIRE : "The document deals with..." ANALYSER : "The author\'s purpose is to..." / "This highlights..." REAGIR : "Personally, I feel that..." CONCLURE : "To sum up..." En gros : des phrases toutes faites pour chaque moment de l\'oral.' },
                    { question: 'Comment gagner du temps a l\'oral ?', answer: 'Utilise des "fillers" : "Well..." / "Actually..." / "Let me think..." / "That\'s an interesting question..." Ces expressions sont NORMALES en anglais. Les natifs les utilisent tout le temps. Ca te donne 2-3 secondes pour reflechir. Piege : ne dis JAMAIS "Euh..." — dis "Well..."' },
                    { question: 'Comment presenter un document (methode IDARB) ?', answer: '5 etapes : 1) IDENTIFIER (type, source, date). 2) DECRIRE (qui, quoi, ou, quand). 3) ANALYSER (pourquoi, comment). 4) REAGIR (ton avis personnel). 5) BROADENING (lier a d\'autres docs, a l\'actualite). En gros : IDARB = Identify, Describe, Analyse, React, Broaden. 5 etapes, 5 minutes, structure parfaite.' },
                    { question: 'C\'est quoi le "connected speech" ?', answer: 'En anglais parle, les mots se COLLENT : "What do you want?" → "Wadya want?" "Going to" → "gonna." "Want to" → "wanna." C\'est de l\'anglais NORMAL, pas du slang. En gros : l\'anglais parle = un train ou les wagons sont accroches. C\'est pour ca que comprendre un film en VO est dur !' },
                    { question: 'Lettres muettes en anglais ?', answer: 'K dans know, knee, knife. W dans write, wrong, wrap. B dans climb, bomb, lamb, doubt. L dans half, calm, walk. G dans sign, foreign. P dans psychology, receipt. En gros : plein de lettres muettes a connaitre. Elles viennent du vieil anglais.' },
                    { question: 'Anglais britannique vs americain ?', answer: 'Prononciation : "can\'t" = UK "kahnt" / US "kaent". Les Americains prononcent le R final, pas les Britanniques. Orthographe : UK colour / US color. UK centre / US center. Au Bac, les deux sont acceptes — mais sois COHERENT. En gros : choisis UK OU US et garde le meme style dans tout l\'essai.' },
                    { question: 'Homophones les plus confondus ?', answer: 'Their/there/they\'re (possession/lieu/they are). Your/you\'re (possession/you are). Its/it\'s (possession/it is). To/too/two (vers/aussi-trop/deux). Astuce : "it\'s" avec apostrophe = IT IS toujours. En gros : si tu peux remplacer par "it is", mets l\'apostrophe.' },
                    { question: 'Pourquoi les Francais sonnent "plats" en anglais ?', answer: 'Le francais a une intonation PLATE (chaque syllabe = meme duree). L\'anglais est MUSICAL : on accentue les mots importants et on avale les petits mots. "I WENT to the STORE to BUY some BREAD" — pas "I-went-to-the-store-to-buy-some-bread." En gros : EXAGERE les mots importants et AVALE les petits mots.' },
                    { question: 'Comment deviner un mot inconnu dans un texte ?', answer: 'Regarde le CONTEXTE : la phrase entiere, les mots autour. Cherche les PREFIXES/SUFFIXES : un- = negatif, -less = sans, -ful = plein de, re- = encore. En gros : l\'examinateur teste ta capacite a deduire le sens, pas a connaitre tous les mots.' },
                ],
                quiz: [
                    { question: 'Le "th" dans "think" se prononce :', options: ['Comme un "s"', 'Comme un "z"', 'Langue entre les dents, sans vibration', 'Comme un "f"'], correctIndex: 2, explanation: '"Th" sourd = langue entre les dents, sans vibration (think, three).' },
                    { question: '"Wednesday" se prononce :', options: ['WED-nes-day (3 syll.)', 'WENZ-day (2 syll.)', 'WED-nes-dai', 'WENZ-dei'], correctIndex: 1, explanation: 'WENZ-day. Le "d" et le "e" du milieu sont muets. 2 syllabes.' },
                    { question: 'Le "-ed" de "wanted" se prononce :', options: ['/t/ — 1 syllabe', '/d/ — 1 syllabe', '/id/ — 2 syllabes (want-id)', 'Le "-ed" est muet'], correctIndex: 2, explanation: 'Verbe qui finit par T ou D → le "-ed" ajoute une syllabe : want-id.' },
                    { question: 'Ship vs sheep = difference de :', options: ['Consonne', 'Voyelle courte vs longue', 'Accent', 'Intonation'], correctIndex: 1, explanation: 'Ship = voyelle courte. Sheep = voyelle longue. La duree change le sens.' },
                    { question: '"REcord" (accent 1ere syllabe) =', options: ['Verbe (enregistrer)', 'Nom (un disque)', 'Adjectif', 'Les deux'], correctIndex: 1, explanation: 'REcord = nom. reCORD = verbe. L\'accent tonique change le sens.' },
                    { question: 'Intonation pour une question oui/non :', options: ['Descendante', 'Montante', 'Plate', 'Ca depend'], correctIndex: 1, explanation: 'Questions oui/non = montante. Questions en WH = descendante.' },
                    { question: 'Quel "filler" NE PAS utiliser a l\'oral ?', options: ['"Well..."', '"Euh..."', '"Actually..."', '"Let me think..."'], correctIndex: 1, explanation: '"Euh" est francais ! En anglais, dis "Well..." ou "Let me think..."' },
                    { question: '"Comfortable" a combien de syllabes ?', options: ['2', '3', '4', '5'], correctIndex: 1, explanation: 'COMF-ter-ble = 3 syllabes. Pas 4 (com-for-ta-ble).' },
                    { question: 'Le K est muet dans :', options: ['King, keep', 'Know, knee, knife', 'Kiss, kid', 'Kick, kill'], correctIndex: 1, explanation: 'K muet devant N : know, knee, knife, knight.' },
                    { question: 'Pour sonner naturel en anglais :', options: ['Prononcer chaque syllabe pareil', 'Accentuer les mots importants, reduire les mots-outils', 'Parler tres vite', 'Imiter l\'accent francais'], correctIndex: 1, explanation: 'L\'anglais est "stress-timed" : on accentue les mots de sens et on reduit les petits mots.' },
                    { question: '"It\'s" avec apostrophe =', options: ['Possession', 'IT IS toujours', 'Les deux', 'Pluriel'], correctIndex: 1, explanation: '"It\'s" = it is. "Its" (sans apostrophe) = possession. Si tu peux dire "it is", mets l\'apostrophe.' },
                    { question: 'Premiere etape pour un texte au Bac :', options: ['Lire les questions', 'Traduire le 1er paragraphe', 'Survoler le paratexte (titre, source, date)', 'Chercher les mots inconnus'], correctIndex: 2, explanation: 'Etape 1 = survoler le paratexte. Le titre et la source donnent deja beaucoup d\'infos.' },
                    { question: 'Une bonne reponse en comprehension =', options: ['Juste une citation', 'Juste une reformulation', 'Reformulation + citation + numero de ligne', 'Traduction mot a mot'], correctIndex: 2, explanation: 'Reformulation + citation entre guillemets + ligne. Les 3 ingredients obligatoires.' },
                ]
            }
        ]
    });
})();
