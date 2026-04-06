// figures.js — 200+ Flashcards & 90+ Quiz — Figures de style (Terminale Bac)
// "Dead Poets Society" style: feel the POWER of language
(function() {
    if (!window.StudFlow || !window.StudFlow.subjects) return;

    window.StudFlow.subjects.register({
        id: 'figures',
        name: 'Figures de style',
        icon: '\u2728',
        color: 'hot',
        sections: [
            {
                id: 'analogie',
                title: 'Figures d\'analogie',
                icon: '\uD83D\uDD0D',
                content: '<h3>Les figures d\'analogie : le pouvoir de l\'image</h3>'
                    + '<p>Les figures d\'analogie sont les REINES du Bac. Elles creent des images mentales puissantes en rapprochant deux realites. Baudelaire disait que la metaphore est "la reine des facultes" — c\'est elle qui transforme le monde.</p>'
                    + '<h4>Distinction fondamentale</h4>'
                    + '<p><strong>COMPARAISON = Compare + Outil + Comparant</strong> ("La terre est bleue <em>comme</em> une orange")<br/>'
                    + '<strong>METAPHORE = Compare + Comparant, SANS outil</strong> ("Cette faucille d\'or dans le champ des etoiles")</p>'
                    + '<p>Le verbe "etre" n\'est PAS un outil de comparaison ! "Il EST un lion" = metaphore.</p>'
                    + '<h4>Metaphore in praesentia vs in absentia</h4>'
                    + '<ul>'
                    + '<li><strong>In praesentia</strong> : le compare ET le comparant sont presents. "Ma jeunesse fut un tenebreux orage" (Baudelaire) — jeunesse + orage.</li>'
                    + '<li><strong>In absentia</strong> : le compare est ABSENT, seul le comparant est la. "Cette faucille d\'or" (Hugo) — la lune n\'est pas nommee.</li>'
                    + '</ul>'
                    + '<h4>La famille au complet</h4>'
                    + '<ul>'
                    + '<li><strong>Comparaison</strong> : rapprochement AVEC outil (comme, tel, semblable a, pareil a, ainsi que, de même que)</li>'
                    + '<li><strong>Metaphore</strong> : rapprochement SANS outil — le mot-outil a disparu !</li>'
                    + '<li><strong>Metaphore filee</strong> : metaphore developpee sur plusieurs lignes avec un même champ lexical</li>'
                    + '<li><strong>Personnification</strong> : attribuer des traits humains à un non-humain</li>'
                    + '<li><strong>Allegorie</strong> : representation concrete d\'une idee abstraite (La Liberte guidant le peuple)</li>'
                    + '<li><strong>Prosopopee</strong> : faire PARLER un mort, un absent ou une chose</li>'
                    + '<li><strong>Catachrese</strong> : metaphore morte, passee dans le langage courant ("pied de table")</li>'
                    + '</ul>'
                    + '<h4>Tableau recapitulatif</h4>'
                    + '<table border="1" cellpadding="4"><tr><th>Figure</th><th>Outil ?</th><th>Exemple</th></tr>'
                    + '<tr><td>Comparaison</td><td>OUI (comme, tel...)</td><td>"Beau comme un dieu"</td></tr>'
                    + '<tr><td>Metaphore in praesentia</td><td>NON</td><td>"Ma jeunesse fut un orage"</td></tr>'
                    + '<tr><td>Metaphore in absentia</td><td>NON + compare absent</td><td>"Cette faucille d\'or" (= lune)</td></tr>'
                    + '<tr><td>Metaphore filee</td><td>NON + champ lexical file</td><td>Tout un passage maritime</td></tr>'
                    + '</table>',
                flashcards: [
                    // --- COMPARAISON ---
                    { question: '"La terre est bleue comme une orange." — Quelle figure ?', answer: 'COMPARAISON. L\'outil "comme" est present. Compare = la terre. Comparant = une orange. Meme si l\'image est bizarre (une orange n\'est pas bleue), c\'est quand même une comparaison parce que "comme" est la. En gros : si tu vois "comme", "tel" ou "semblable a" → c\'est toujours une comparaison. Mots difficiles : "compare" = ce dont on parle. "Comparant" = l\'image a laquelle on compare.' },
                    { question: 'Quels sont les outils de comparaison ?', answer: 'Liste a connaitre : COMME, TEL, TEL QUE, SEMBLABLE A, PAREIL A, AINSI QUE, DE MEME QUE, A L\'IMAGE DE, RESSEMBLER A. Piege : le verbe "ETRE" n\'est PAS un outil ! "Il est un lion" = metaphore (pas de "comme"). "Il est COMME un lion" = comparaison. En gros : si l\'un de ces mots est present → comparaison. Si aucun → metaphore.' },
                    { question: '"Tes yeux sont des colombes." — Comparaison ou metaphore ?', answer: 'C\'est une METAPHORE. "Sont" n\'est PAS un outil de comparaison. Le verbe "etre" ne compte pas. Les yeux ne sont pas "comme" des colombes — ils SONT des colombes. La metaphore est plus forte : elle identifie au lieu de rapprocher. En gros : si tu peux ajouter "comme" dans ta tete et que "comme" est ABSENT du texte → c\'est une metaphore. Piege Bac classique : "etre" = metaphore, pas comparaison.' },
                    { question: '"Comme un oeil naissant couvert par ses paupieres, un pur esprit s\'accroit sous l\'ecorce des pierres." (Nerval) — Analyse.', answer: 'COMPARAISON. Outil = "comme." Compare = "un pur esprit sous les pierres." Comparant = "un oeil couvert par ses paupieres." Nerval dit que la matière est VIVANTE, qu\'un regard se cache dans la pierre. En gros : au Bac, ne te contente JAMAIS de dire "c\'est une comparaison." Dis QUEL est l\'effet : ici, ca montre une vision mystique du monde.' },
                    { question: '"Ses cheveux, pareils a des serpents dresses, encadraient son visage." — Quelle figure ?', answer: 'COMPARAISON. Outil = "pareils a." Compare = ses cheveux. Comparant = des serpents dresses. L\'image est terrifiante : les cheveux deviennent une menace (reference a Meduse). En gros : "pareil a" est un outil de comparaison moins evident que "comme" mais tout aussi valide. Ne l\'oublie pas dans ta liste.' },
                    // --- METAPHORE ---
                    { question: '"Cette faucille d\'or dans le champ des etoiles." (Hugo) — Quelle figure ?', answer: 'METAPHORE IN ABSENTIA. La lune n\'est même pas nommee ! Hugo remplace directement la lune par "faucille d\'or." Le lecteur doit DEVINER que c\'est la lune. En gros : in absentia = le compare a DISPARU. Seul le comparant reste. C\'est la metaphore la plus puissante. Mots difficiles : "in absentia" = en l\'absence du compare. "Comparant" = l\'image utilisee (faucille d\'or).' },
                    { question: '"Ma jeunesse ne fut qu\'un tenebreux orage." (Baudelaire) — Quelle figure ?', answer: 'METAPHORE IN PRAESENTIA. Compare = "ma jeunesse." Comparant = "un tenebreux orage." Les DEUX sont presents, mais pas de "comme." Piege : le verbe "etre" (fut) n\'est PAS un outil de comparaison. "Fut un orage" = metaphore. En gros : in praesentia = les 2 elements sont la, mais sans outil. Mots difficiles : "in praesentia" = en presence des deux elements.' },
                    { question: 'C\'est quoi la difference entre in praesentia et in absentia ?', answer: 'IN PRAESENTIA = le compare ET le comparant sont la. "Ma jeunesse [compare] fut un orage [comparant]." On voit les 2. IN ABSENTIA = le compare a DISPARU. "Cette faucille d\'or [comparant]" — la lune [compare] n\'est pas dite. En gros : praesentia = les 2 presents. Absentia = il en manque 1. In absentia est PLUS difficile a reperer et PLUS puissante au Bac.' },
                    { question: '"L\'homme n\'est qu\'un roseau pensant." (Pascal) — Quelle figure ?', answer: 'METAPHORE IN PRAESENTIA. Compare = l\'homme. Comparant = un roseau. L\'homme est FRAGILE (comme un roseau) mais sa PENSEE le rend grand. "Roseau pensant" est aussi un oxymore : fragile + intelligent = contradiction. En gros : Pascal dit que l\'homme est petit physiquement mais immense par sa pensee. Citation qui tombe très souvent au Bac.' },
                    { question: '"J\'suis un volcan sous la banquise." (Nekfeu) — Quelle figure ?', answer: 'METAPHORE IN PRAESENTIA. Compare = "je." Comparant = "un volcan sous la banquise." Ca veut dire : je suis bouillant a l\'interieur mais froid a l\'exterieur. C\'est aussi un OXYMORE (volcan = chaud / banquise = froid). En gros : les figures de style ne sont pas que dans les vieux livres. Le rap en est REMPLI. Chaque chanson, chaque pub utilise des metaphores.' },
                    // --- METAPHORE FILEE ---
                    { question: '"Ce toit tranquille, ou marchent des colombes..." (Valery) — Quelle figure ?', answer: 'METAPHORE FILEE. La mer est decrite comme un "toit" avec des "colombes" (= les voiles des bateaux). L\'image se deroule sur PLUSIEURS vers. En gros : une metaphore filee c\'est une metaphore qui CONTINUE sur plusieurs lignes avec le même champ lexical. Astuce : si tu repères un champ lexical qui revient sur 2+ lignes et qui désigné autre chose → c\'est une metaphore filee.' },
                    { question: '"Le navire de l\'Etat a quitte le port. Les vagues de la revolte menacent." — Quelle figure ?', answer: 'METAPHORE FILEE MARITIME pour parler de POLITIQUE. Navire = l\'Etat. Port = la stabilite. Vagues = la revolte. Capitaine = le dirigeant. Chavirer = s\'effondrer. Chaque mot du champ lexical de la mer à un equivalent politique. En gros : au Bac, decode CHAQUE element de la metaphore filee. C\'est ca qui rapporte des points, pas juste dire "c\'est une metaphore filee."' },
                    { question: 'Comment marche la metaphore filee dans L\'Albatros de Baudelaire ?', answer: 'L\'albatros = le POETE. En vol = le poete quand il créé (majestueux). Sur le pont du bateau = le poete dans la société (ridicule). Les marins moqueurs = les gens ordinaires. Chaque element à un DOUBLE SENS. C\'est le poeme prefere des correcteurs du Bac pour tester la metaphore filee. En gros : tout le poeme est une image du poete incompris par la société.' },
                    // --- PERSONNIFICATION ---
                    { question: '"La rue hurlait autour de moi." (Baudelaire) — Quelle figure ?', answer: 'PERSONNIFICATION. La rue (un objet) "hurlait" (action humaine). On donne à un objet un comportement HUMAIN. Baudelaire transforme Paris en monstre vivant. En gros : si un objet ou un animal fait quelque chose d\'humain (parler, pleurer, hurler) → c\'est une personnification. Mots difficiles : "personnification" = transformer en personne quelque chose qui n\'est pas humain.' },
                    { question: '"La mer monte comme une armee qui s\'eveille." — Combien de figures ?', answer: 'DEUX figures : 1) COMPARAISON (outil "comme"). 2) PERSONNIFICATION (la mer est decrite comme une armee qui "s\'eveille" = action humaine). En gros : au Bac, un passage peut combiner PLUSIEURS figures. Cherche-les toutes. Les correcteurs adorent les élèves qui en reperent plusieurs. Astuce : lis chaque mot attentivement, il peut y avoir 2-3 figures dans la même phrase.' },
                    { question: 'Personnification vs allegorie ?', answer: 'PERSONNIFICATION = donner des traits humains à un objet CONCRET. "Le vent gemit" (le vent est concret). ALLEGORIE = donner une forme humaine à une idee ABSTRAITE. "La Mort frappait aux portes" (la mort est abstraite). Astuce : si le mot à une MAJUSCULE et que c\'est une idee (Mort, Justice, Liberte) → allegorie. Si c\'est un truc concret (vent, mer, arbre) → personnification.' },
                    // --- ALLEGORIE ---
                    { question: '"La Liberte guidant le peuple" (Delacroix) — Quelle figure ?', answer: 'ALLEGORIE. La Liberte (idee abstraite) est representee comme une FEMME concrete avec un drapeau. L\'allegorie rend VISIBLE ce qui est INVISIBLE. Autres allegories connues : la Justice (femme aux yeux bandes + balance), la Mort (squelette + faux), Marianne (la Republique). En gros : l\'allegorie c\'est donner un CORPS à une IDEE.' },
                    { question: '"O Mort, vieux capitaine, levons l\'ancre !" (Baudelaire) — Combien de figures ?', answer: '3 figures : 1) ALLEGORIE (la Mort = un capitaine). 2) PROSOPOPEE (le poete parle A la Mort). 3) METAPHORE FILEE (capitaine, ancre, appareillons = champ lexical maritime). Derniers vers des Fleurs du Mal : Baudelaire accueille la mort comme un voyage. En gros : au Bac, un passage riche = plusieurs figures. Analyse CHAQUE figure separement.' },
                    { question: '"La Haine buvait dans le crane de la Douceur." (Hugo) — Quelle figure ?', answer: 'ALLEGORIE + PERSONNIFICATION. La Haine et la Douceur (idees abstraites) agissent comme des PERSONNES. La MAJUSCULE est un indice : quand un mot abstrait à une majuscule (Amour, Mort, Haine, Justice) et agit comme un humain → allegorie. En gros : Hugo transforme les emotions en personnages pour dramatiser le combat entre violence et tendresse.' },
                    // --- PROSOPOPEE ---
                    { question: 'C\'est quoi une prosopopee ?', answer: 'C\'est faire PARLER quelque chose qui ne peut pas parler : un mort, un objet, une idee. C\'est la personnification poussee a l\'extreme : on ne donne pas juste des traits humains, on donne la PAROLE. Exemple : "O murs, si vous pouviez parler..." En gros : prosopopee = prise de PArole (les 2 commencent par P). Mots difficiles : "prosopopee" = du grec "prosopon" = visage + "poiein" = faire = donner un visage/une voix.' },
                    { question: '"Je suis la pipe d\'un auteur." (Baudelaire) — Quelle figure ?', answer: 'PROSOPOPEE. La pipe dit "Je suis" — un OBJET prend la parole. Baudelaire fait parler sa pipe à la première personne. C\'est bizarre et poetique : l\'objet quotidien revele la vie interieure du poete. En gros : la prosopopee permet de voir le monde depuis le point de vue d\'un objet, d\'un animal ou d\'un mort. C\'est la figure la plus audacieuse.' },
                    // --- CATACHRESE ---
                    { question: 'Qu\'est-ce qu\'une catachrese ? Pourquoi dit-on "metaphore morte" ?', answer: 'Une catachrese est une metaphore tellement usee qu\'on ne la percoit plus : "le pied de la table", "les ailes du batiment", "la tete du cortege", "le bras du fauteuil". '
                        + 'On dit "metaphore morte" car elle a perdu son pouvoir d\'image : personne ne visualise un pied humain sous la table. '
                        + 'Les catachreses montrent que la metaphore est le MODE DE FONCTIONNEMENT naturel du langage. La langue est une jungle de metaphores oubliees !' },
                    // --- FIGURES D'ANALOGIE DANS LE MONDE MODERNE ---
                    { question: 'Les pubs sont bourrees de figures d\'analogie. "Red Bull te donne des ailes." Quelle figure ?', answer: 'METAPHORE. Les "ailes" = l\'énergie, la liberté, la capacité a se depasser. Pas d\'outil de comparaison. '
                        + 'La pub utilise les memes figures que Baudelaire ! Nike "Just Do It" (ellipse), L\'Oreal "Parce que je le vaux bien" (argument d\'autorite). '
                        + 'Les figures de style sont partout : pub, rap, politique, series. Tu les connais DEJA — tu ne savais juste pas les nommer.' },
                    { question: 'Damso rappe : "J\'suis un soleil noir dans la nuit blanche." Identifie TOUTES les figures.', answer: 'METAPHORE ("je suis un soleil noir" — sans outil), OXYMORE ("soleil noir" — contradiction), ANTITHESE ("noir/blanche"), CHIASME possible (soleil-noir / nuit-blanche = inversion lumiere-obscurite). '
                        + 'Le rap condense souvent 3-4 figures dans une seule punchline. C\'est de la poesie a haute densite. '
                        + 'Au Bac, la capacité a reperer PLUSIEURS figures dans un même passage = niveau d\'excellence. Entraine-toi avec tes morceaux preferes.' },
                    // --- EXERCICES D'IDENTIFICATION ---
                    { question: 'EXERCICE : "Homme libre, toujours tu cheriras la mer ! / La mer est ton miroir ; tu contemples ton ame / Dans le deroulement infini de sa lame." (Baudelaire) — Identifie chaque figure.', answer: 'PERSONNIFICATION ("libre" pour l\'homme face à la mer = personnification de l\'aspiration humaine). METAPHORE ("La mer est ton miroir" — sans outil). METAPHORE FILEE (la mer-miroir-ame : le reflet se prolonge). '
                        + 'Baudelaire montre que la mer reflete l\'infini interieur de l\'homme. Chaque figure approfondit cette correspondance. '
                        + 'METHODE BAC : 1) Identifie la figure. 2) Cite le texte. 3) Explique l\'EFFET sur le lecteur.' },
                    { question: 'EXERCICE : "Je suis comme un roi d\'un pays pluvieux, / Riche, mais impuissant, jeune et pourtant très vieux." (Baudelaire, Spleen) — Analyse complete.', answer: 'COMPARAISON ("comme un roi"), ANTITHESES multiples ("riche/impuissant", "jeune/vieux"), OXYMORE implicite ("jeune et pourtant très vieux"). '
                        + 'Baudelaire peint le spleen comme une royaute dechue : tout avoir et ne rien ressentir. L\'accumulation d\'antitheses traduit le dechirement interieur. '
                        + 'Ce quatrain est un CONCENTRE de figures. Quand tu vois autant de procedes, montre comment ils convergent vers un même EFFET.' },
                    { question: 'Compare metaphore et comparaison : laquelle est "plus forte" et pourquoi ?', answer: 'La metaphore est generalement consideree comme plus puissante. La comparaison RAPPROCHE ("il est COMME un lion"), la metaphore IDENTIFIE ("il EST un lion" / "ce lion a bondi"). '
                        + 'La metaphore supprime la distance entre compare et comparant : la fusion est totale. Le lecteur voit directement l\'image, sans le filtre du "comme". '
                        + 'Au Bac, montre cette nuance : "L\'auteur choisit la metaphore plutot que la comparaison pour renforcer l\'identification et rendre l\'image plus saisissante."' },
                    { question: 'EXERCICE : Trouve et analyse la figure dans "Il pleure dans mon coeur / Comme il pleut sur la ville." (Verlaine, Ariettes oubliees)', answer: 'COMPARAISON (outil : "comme"). Compare = les pleurs interieurs ("il pleure dans mon coeur"), comparant = la pluie ("il pleut sur la ville"). '
                        + 'Verlaine créé une CORRESPONDANCE entre le paysage interieur (tristesse) et exterieur (pluie). C\'est le principe même du lyrisme romantique et symboliste. '
                        + 'Cette correspondance interieur/exterieur est un theme CENTRAL de la poesie. Retiens cet exemple : il illustre parfaitement comment une comparaison créé du SENS, pas juste une image.' },
                    // --- COMPLEMENT ANALOGIE ---
                    { question: 'Quelle figure ? "Tes yeux sont des etoiles." vs "Tes yeux brillent comme des etoiles." — Quelle difference d\'EFFET ?', answer: '"Tes yeux sont des etoiles" = METAPHORE. "Tes yeux brillent comme des etoiles" = COMPARAISON. '
                        + 'La metaphore est plus directe et audacieuse : les yeux DEVIENNENT des etoiles. La comparaison maintient la distinction : les yeux RESSEMBLENT a des etoiles. '
                        + 'Formule Bac : "La metaphore créé une identification totale entre le compare et le comparant, tandis que la comparaison maintient une distance grâce àu mot-outil."' },
                    { question: 'Quelle figure ? "La nature est un temple ou de vivants piliers / Laissent parfois sortir de confuses paroles." (Baudelaire, Correspondances)', answer: 'METAPHORE ("la nature est un temple" — pas d\'outil) + PERSONNIFICATION ("vivants piliers laissent sortir des paroles" — des piliers parlent) + SYNESTHESIE (mélange des sens dans la suite du poeme). '
                        + 'C\'est le poeme-manifeste du Symbolisme. Baudelaire voit le monde comme un reseau de correspondances entre le sensible et le spirituel. '
                        + '"Correspondances" est LE poeme a connaitre pour le Bac. Il concentre la théorie baudelairienne de la metaphore.' },
                    { question: 'Quelle figure ? "Le temps est un grand maitre ; le malheur est qu\'il tue ses élèves." (Berlioz)', answer: 'METAPHORE FILEE. Le temps est d\'abord un "maitre" (enseignant), puis l\'image se prolonge avec "élèves". Champ lexical de l\'enseignement file sur toute la phrase. '
                        + 'L\'humour noir nait du retournement : le "maitre" est aussi un tueur. C\'est une metaphore filee a chute. '
                        + 'ASTUCE : la metaphore filee = un champ lexical COHERENT qui désigné AUTRE CHOSE que son sens litteral, deploye sur 2+ phrases.' },
                    { question: 'Quelle figure ? "L\'aurore aux doigts de rose." (Homere, L\'Odyssee)', answer: 'METAPHORE + PERSONNIFICATION. L\'aurore (phénomène naturel) a des "doigts" (trait humain) "de rose" (metaphore pour la couleur). '
                        + 'C\'est l\'une des plus anciennes images de la litterature occidentale. Homere invente une image si belle qu\'elle traverse 3000 ans. '
                        + 'Les images homeriques combinent souvent plusieurs figures. C\'est un modèle pour l\'analyse : une image riche = plusieurs figures a decomposer.' },
                    { question: 'Quelle figure ? "Il pleuvait des cordes." Est-ce du langage soutenu ?', answer: 'METAPHORE hyperbolique. La pluie est identifiee a des cordes sans outil. C\'est aussi une HYPERBOLE (exageration de l\'intensite de la pluie). '
                        + 'C\'est du langage FAMILIER, mais ca reste une figure de style ! Les figures ne sont pas reservees à la litterature "serieuse". '
                        + 'Expressions courantes = metaphores deguisees : "tomber dans les pommes", "avoir le cafard", "casser les pieds". La langue est une jungle de metaphores.' },
                    { question: 'La pub Apple "Think Different" montre Einstein, Gandhi, Lennon... Quelle figure d\'analogie utilise-t-elle ?', answer: 'ALLEGORIE : ces personnages deviennent des allegories de la "difference" creatrice. Chacun INCARNE une idee abstraite (le genie, la paix, la revolution musicale). '
                        + 'La pub utilise aussi l\'ANTONOMASE implicite : "un Einstein" = un genie. '
                        + 'Quand une pub montre une personne pour incarner une valeur, c\'est une allegorie commerciale. Les figures de style sont les ARMES de la persuasion.' },
                    { question: 'Donne un exemple de comparaison avec CHACUN de ces outils : "tel", "semblable a", "ainsi que".', answer: '"Tel un aigle, il survolait la foule du regard." (TEL) / "Son regard, semblable à un poignard, me transperca." (SEMBLABLE A) / "Ainsi que le soleil dissipe les nuages, sa presence chassait mes doutes." (AINSI QUE). '
                        + 'Chaque outil a sa nuance : "tel" est solennel, "semblable a" est descriptif, "ainsi que" est explicatif. '
                        + 'Au Bac, cite TOUJOURS l\'outil de comparaison dans ton analyse. "L\'auteur emploie la comparaison avec l\'outil \'semblable a\' pour..."' },
                    { question: 'PIEGE : "Ses yeux pareils a des etangs sous la lune contemplaient le paysage." (inspire de Breton) — Comparaison ou metaphore ?', answer: 'COMPARAISON. L\'outil "pareils a" est present. Compare = "ses yeux", comparant = "des etangs sous la lune". '
                        + 'Beaucoup d\'élèves oublient que "pareil a" est un outil de comparaison ! Ce n\'est pas parce que l\'image est poetique que c\'est forcement une metaphore. '
                        + 'METHODE : TOUJOURS verifier la presence d\'un mot-outil AVANT de trancher. Outil present = comparaison, outil absent = metaphore. C\'est mecanique.' },
                    { question: 'Quelle figure ? "Sa voix est un bijou de chaleur." Analyse complete.', answer: 'METAPHORE IN PRAESENTIA. Compare = "sa voix", comparant = "un bijou de chaleur". Le verbe "etre" n\'est PAS un outil de comparaison. '
                        + 'L\'image combine la preciosite ("bijou") et l\'intimite ("chaleur") pour evoquer une voix à la fois rare et reconfortante. '
                        + 'Formule Bac : "L\'auteur emploie une metaphore qui identifie [compare] a [comparant], ce qui suggere [interpretation] et produit un effet de [emotion sur le lecteur]."' },
                    { question: 'Quelle figure ? "Les parfums, les couleurs et les sons se repondent." (Baudelaire, Correspondances)', answer: 'PERSONNIFICATION (les parfums, couleurs et sons "se repondent" comme des personnes) + SYNESTHESIE (mélange de sens differents : odorat, vue, ouie). '
                        + 'La synesthesie est une forme speciale de metaphore : un sens en remplace un autre. C\'est le coeur de la poetique symboliste. '
                        + 'La synesthesie est un BONUS au Bac : peu d\'élèves la connaissent. "Les sons verts", "une melodie douce" (doux = toucher pour un son = synesthesie).' },
                    { question: 'Quelle figure dans cette punchline de Booba : "J\'suis le king de la jungle, les singes imitent mes pas" ?', answer: 'METAPHORE FILEE animale. "King de la jungle" = metaphore (il n\'est pas un roi animal), "singes" = metaphore (les imitateurs), "imitent mes pas" = personnification des singes. '
                        + 'Le rappeur file la metaphore du monde animal pour affirmer sa domination. Le rap est le genre le plus riche en figures de style. '
                        + 'S\'entrainer a reperer les figures dans le rap, c\'est s\'entrainer pour le Bac. Meme mecanisme, support different.' },
                    { question: 'Quelle figure ? "Le siècle avait deux ans. [...] Deja Napoleon percait sous Bonaparte." (Hugo, Les Feuilles d\'automne)', answer: 'METAPHORE ("percait" — comme si Napoleon etait un etre cache sous la peau de Bonaparte) + ALLEGORIE implicite (Bonaparte = la jeunesse, Napoleon = le destin imperial). '
                        + 'Hugo suggere que la grandeur etait déjà la, en gestation, sous l\'apparence ordinaire. '
                        + 'Hugo est le maitre absolu de la metaphore. Chaque vers est un condensé d\'images. Entraine-toi avec ses poemes.' },
                    { question: 'Synthese : TABLEAU DES FIGURES D\'ANALOGIE — resume en une phrase chaque figure.', answer: 'COMPARAISON : rapprochement AVEC outil (comme, tel...). METAPHORE : rapprochement SANS outil. METAPHORE FILEE : metaphore deployee sur plusieurs lignes (meme champ lexical). '
                        + 'PERSONNIFICATION : traits humains à un non-humain. ALLEGORIE : idee abstraite incarnee concretement. PROSOPOPEE : faire PARLER un non-humain. CATACHRESE : metaphore morte ("pied de table"). '
                        + 'Apprends ce tableau par coeur. Au Bac, la distinction comparaison/metaphore vaut a elle seule 2-3 points sur un commentaire.' }
                ],
                quiz: [
                    { question: 'Dans "La terre est bleue comme une orange" (Eluard), quelle figure est utilisee ?', options: ['Metaphore', 'Comparaison', 'Allegorie', 'Personnification'], correctIndex: 1, explanation: 'Le mot "comme" est present : c\'est une comparaison. Meme surrealiste, le mot-outil tranche. ComPARaison = mot de comPARAison.' },
                    { question: '"Cette faucille d\'or dans le champ des etoiles" (Hugo) est une metaphore...', options: ['In praesentia', 'In absentia', 'Filee', 'Morte'], correctIndex: 1, explanation: 'Le compare (la lune) n\'est pas nomme : seul le comparant (faucille d\'or) est present. C\'est une metaphore in absentia — la plus puissante.' },
                    { question: 'Le verbe "etre" est-il un outil de comparaison ?', options: ['Oui, toujours', 'Non, jamais', 'Seulement au passe', 'Seulement avec "tel"'], correctIndex: 1, explanation: 'JAMAIS. "Il est un lion" = metaphore (pas de comparaison). C\'est LE piege classique du Bac.' },
                    { question: '"La Mort, vetue de noir, frappait aux portes" est :', options: ['Une comparaison', 'Une personnification simple', 'Une allegorie', 'Une catachrese'], correctIndex: 2, explanation: 'La Mort = idee ABSTRAITE representee sous forme humaine concrete. Abstraction incarnee = allegorie.' },
                    { question: 'Une metaphore filee se reconnait par :', options: ['Le mot "comme"', 'Un champ lexical developpe sur plusieurs lignes', 'La presence du verbe etre', 'Une opposition de termes'], correctIndex: 1, explanation: 'La metaphore filee deploie le même champ lexical (ex: maritime) sur plusieurs phrases/vers pour filer une image coherente.' },
                    { question: '"Les arbres murmurent des secrets" est :', options: ['Une allegorie', 'Une comparaison', 'Une personnification', 'Un oxymore'], correctIndex: 2, explanation: 'Les arbres (concret) font une action humaine (murmurer). Objet concret + trait humain = personnification.' },
                    { question: 'La prosopopee consiste a :', options: ['Exagerer une idee', 'Faire PARLER un mort, un absent ou un objet', 'Comparer avec "comme"', 'Repeter un mot en debut de phrase'], correctIndex: 1, explanation: 'Prosopopee = Prise de Parole par ce qui ne peut pas parler. C\'est la personnification poussee a l\'extreme.' },
                    { question: '"Le pied de la table" est :', options: ['Une comparaison', 'Un oxymore', 'Une catachrese', 'Une antithese'], correctIndex: 2, explanation: 'Metaphore tellement usee qu\'on ne la percoit plus = catachrese (metaphore "morte"). Le pied de table n\'evoque plus un pied humain.' },
                    { question: 'Quelle figure dans "L\'homme est un roseau pensant" (Pascal) ?', options: ['Comparaison', 'Metaphore in praesentia', 'Metaphore in absentia', 'Allegorie'], correctIndex: 1, explanation: 'Compare (homme) et comparant (roseau) sont TOUS LES DEUX presents, sans outil. C\'est une metaphore in praesentia.' },
                    { question: '"Ses cheveux pareils a des serpents" est :', options: ['Une metaphore', 'Une comparaison', 'Une allegorie', 'Une catachrese'], correctIndex: 1, explanation: '"Pareils a" est un outil de comparaison. Outil present = comparaison, même si l\'image est violente.' },
                    { question: 'Qu\'est-ce qu\'une synesthesie ?', options: ['Une metaphore morte', 'Un mélange de sensations de sens differents', 'Une repetition de sons', 'Une opposition de mots'], correctIndex: 1, explanation: 'La synesthesie mele les sens : "une couleur criarde" (vue + ouie), "un son veloute" (ouie + toucher). C\'est une forme speciale de metaphore.' },
                    { question: 'Dans le rap "J\'suis un volcan sous la banquise" (Nekfeu), on trouve :', options: ['Seulement une comparaison', 'Seulement une metaphore', 'Metaphore + oxymore implicite', 'Allegorie + litote'], correctIndex: 2, explanation: 'Metaphore ("je suis un volcan" sans outil) + oxymore implicite (volcan=chaud / banquise=froid). Le rap condense souvent plusieurs figures.' },
                    { question: '"Ma jeunesse ne fut qu\'un tenebreux orage" (Baudelaire) contient :', options: ['Une comparaison (grace a "fut")', 'Une metaphore in praesentia', 'Une allegorie', 'Une litote'], correctIndex: 1, explanation: '"Fut" = verbe etre, PAS un outil de comparaison. Compare (jeunesse) et comparant (orage) presents sans outil = metaphore in praesentia.' },
                    { question: '"La Liberte guidant le peuple" (Delacroix) est une figure de type :', options: ['Personnification', 'Allegorie', 'Metaphore filee', 'Comparaison'], correctIndex: 1, explanation: 'La Liberte (idee ABSTRAITE) est incarnee par une femme (forme concrete). Abstraction rendue visible = allegorie.' },
                    { question: 'Pour analyser une figure d\'analogie au Bac, il faut :', options: ['Juste la nommer', 'La nommer, citer le texte et analyser l\'EFFET', 'Donner sa definition', 'Trouver une figure similaire'], correctIndex: 1, explanation: 'METHODE : 1) Nommer la figure, 2) Citer le passage precis, 3) Analyser l\'EFFET (emotion, image, sens produit). C\'est ce qui rapporte les points.' },
                    { question: 'Combien de figures dans "O Mort, vieux capitaine, il est temps ! levons l\'ancre !" (Baudelaire) ?', options: ['Une seule', 'Deux', 'Trois ou plus', 'Aucune'], correctIndex: 2, explanation: 'Allegorie (Mort=capitaine) + prosopopee (s\'adresser à la Mort) + metaphore filee (voyage maritime). Au Bac, reperez TOUTES les figures.' },
                    { question: '"Red Bull te donne des ailes" est :', options: ['Une comparaison', 'Une metaphore', 'Une allegorie', 'Une litote'], correctIndex: 1, explanation: 'Les "ailes" = metaphore de l\'énergie sans outil de comparaison. La pub utilise les memes figures que la litterature.' },
                    { question: 'Comment distinguer metaphore in praesentia et in absentia ?', options: ['Par la presence d\'un outil', 'In praesentia : compare + comparant presents / In absentia : compare absent', 'Par le temps du verbe', 'Par la longueur de la phrase'], correctIndex: 1, explanation: 'In praesentia : les deux termes sont la ("ma jeunesse = orage"). In absentia : seul le comparant est nomme ("cette faucille d\'or" — lune non dite).' },
                    { question: '"Il pleure dans mon coeur comme il pleut sur la ville" (Verlaine) est :', options: ['Une metaphore', 'Une comparaison', 'Une allegorie', 'Un oxymore'], correctIndex: 1, explanation: 'L\'outil "comme" est bien present. Meme si l\'image est subtile et poetique, c\'est une comparaison (correspondance interieur/exterieur).' },
                    { question: 'Dans "L\'Albatros" de Baudelaire, l\'oiseau représenté :', options: ['La mer', 'Le poete (metaphore filee)', 'Le lecteur', 'La société'], correctIndex: 1, explanation: 'L\'Albatros = metaphore filee du poete. Majestueux en vol (inspiration) mais ridicule au sol (vie sociale). Chaque element à un double sens.' }
                ],
                tips: [
                    'REGLE D\'OR : cherche le mot-outil AVANT tout. Outil present (comme, tel, semblable a) = comparaison. Absent = metaphore. C\'est mecanique.',
                    'Le verbe "etre" n\'est JAMAIS un outil de comparaison. "Il est un lion" = metaphore. "Il est COMME un lion" = comparaison.',
                    'Metaphore filee = repère un champ lexical qui revient sur 2+ lignes et qui désigné AUTRE CHOSE que son sens litteral.',
                    'L\'allegorie fonctionne souvent avec une majuscule : la Mort, la Justice, la Liberte. Cette majuscule est un INDICE precieux.',
                    'Au Bac, ne te contente JAMAIS de nommer la figure. Cite le texte + explique l\'EFFET. "L\'auteur emploie [figure] pour [but] ce qui produit [effet sur le lecteur]."'
                ],
                pitfalls: [
                    'Ne confonds JAMAIS "etre" et un outil de comparaison. "Il EST un lion" = metaphore. C\'est le piege n°1 du Bac.',
                    'Ne dis pas "metaphore comparative" : ca n\'existe pas. C\'est soit une comparaison (avec outil), soit une metaphore (sans outil).',
                    'Ne confonds pas allegorie et personnification : allegorie = idee ABSTRAITE incarnee. Personnification = objet CONCRET humanise.',
                    'Un passage peut contenir PLUSIEURS figures. Ne t\'arrete pas à la première trouvee.',
                    'Ne dis pas juste "c\'est une metaphore" au Bac : analyse TOUJOURS l\'EFFET produit. Nommer sans analyser = moitie des points.'
                ]
            },
            {
                id: 'opposition',
                title: 'Figures d\'opposition',
                icon: '\u2694\uFE0F',
                content: '<h3>Les figures d\'opposition : la beauté nait du conflit</h3>'
                    + '<p>Les figures d\'opposition creent du SENS par le choc des contraires. Elles expriment les contradictions humaines : amour/haine, vie/mort, lumiere/ombre. Hugo, Corneille, Baudelaire en sont les maitres absolus.</p>'
                    + '<h4>La distinction n°1 du Bac</h4>'
                    + '<p><strong>OXYMORE = deux mots contradictoires COLLES dans le même groupe</strong> ("obscure clarte")<br/>'
                    + '<strong>ANTITHESE = deux idees opposees SEPAREES dans la phrase</strong> ("je vis, je meurs")<br/>'
                    + 'Imagine un cercle : si tu peux entourer les deux mots contradictoires avec UN SEUL cercle = oxymore. S\'il faut DEUX cercles = antithese.</p>'
                    + '<h4>Tableau comparatif</h4>'
                    + '<table border="1" cellpadding="4"><tr><th>Figure</th><th>Mecanisme</th><th>Exemple</th></tr>'
                    + '<tr><td>Antithese</td><td>Contraires SEPARES dans la phrase</td><td>"Je vis, je meurs" (Labe)</td></tr>'
                    + '<tr><td>Oxymore</td><td>Contraires COLLES dans le même groupe</td><td>"obscure clarte" (Corneille)</td></tr>'
                    + '<tr><td>Paradoxe</td><td>Idee qui semble absurde mais revele une vérité</td><td>"Je sais que je ne sais rien" (Socrate)</td></tr>'
                    + '<tr><td>Antiphrase</td><td>Dire le CONTRAIRE de ce qu\'on pense (ironie)</td><td>"Quel beau temps !" sous la pluie</td></tr>'
                    + '<tr><td>Chiasme</td><td>Structure croisee ABBA</td><td>"Manger pour vivre / vivre pour manger"</td></tr>'
                    + '</table>',
                flashcards: [
                    // --- ANTITHESE ---
                    { question: 'Quelle figure ? "Je vis, je meurs ; je me brule et me noie ; / J\'ai chaud extreme en endurant froidure." (Louise Labe, Sonnet VIII)', answer: 'ANTITHESE. Les paires d\'opposes sont SEPAREES dans la phrase : vis/meurs, brule/noie, chaud/froidure. Chaque opposition occupe sa propre partie du vers. '
                        + 'L\'antithese traduit le DECHIREMENT amoureux : Louise Labe est ecartelee entre des emotions contraires. Le parallelisme renforce les oppositions. '
                        + 'Ce sonnet est LE texte de reference pour l\'antithese au Bac. Chaque vers est une antithese. Apprends au moins les 2 premiers vers par coeur.' },
                    { question: 'Quelle figure ? "Etre ou ne pas etre, telle est la question." (Shakespeare, Hamlet)', answer: 'ANTITHESE. "Etre" s\'oppose a "ne pas etre" — les contraires sont dans des parties separees de la phrase. '
                        + 'L\'antithese incarne le dilemme EXISTENTIEL d\'Hamlet : vivre dans la souffrance ou mourir ? C\'est le moment le plus celebre du theatre mondial. '
                        + 'L\'antithese est la figure du CHOIX IMPOSSIBLE. Quand un personnage est dechire, cherche l\'antithese.' },
                    { question: 'Quelle figure ? "Un petit pas pour l\'homme, un bond de geant pour l\'humanité." (Neil Armstrong)', answer: 'ANTITHESE ("petit pas" vs "bond de geant" + "homme" vs "humanité") + GRADATION (du petit au grand) + PARALLELISME (meme structure : "un X pour Y"). '
                        + 'Armstrong comprime l\'enormite de l\'evenement dans une phrase simple et parfaite. '
                        + 'L\'antithese est l\'arme favorite des discours politiques et historiques : elle créé des phrases MEMORABLES. MLK, Mandela, De Gaulle l\'utilisent tous.' },
                    { question: 'Quelle figure ? "Petit homme, grande ambition."', answer: 'ANTITHESE. "Petit" s\'oppose a "grande" dans deux segments separes. Le contraste souligne la disproportion entre l\'individu et ses reves. '
                        + 'L\'antithese fonctionne aussi dans la pub : "Petit prix, grande qualité." C\'est une figure de la surprise et du contraste. '
                        + 'ASTUCE : si les contraires sont dans des parties DIFFERENTES de la phrase = antithese. S\'ils sont COLLES = oxymore.' },
                    { question: 'Comment distinguer une antithese d\'un simple contraste ordinaire ?', answer: 'Un simple contraste est accidentel : "Il fait chaud puis froid." L\'antithese est un PROCEDE STYLISTIQUE delibere avec trois critères : '
                        + '1) SYMETRIE : les opposes sont construits en parallele. 2) PROXIMITE : dans la même phrase. 3) INTENTION esthetique : l\'auteur VEUT creer un effet de tension. '
                        + '"Le jour s\'enfuit, la nuit triomphe" = antithese (symetrie, parallele, intention). "Hier il faisait beau, aujourd\'hui non" = simple contraste.' },
                    // --- OXYMORE ---
                    { question: 'Quelle figure ? "Cette obscure clarte qui tombe des etoiles." (Corneille, Le Cid, IV, 3)', answer: 'OXYMORE. "Obscure" et "clarte" sont deux mots contradictoires places COTE A COTE dans le même groupe nominal. '
                        + 'L\'oxymore créé une image impossible mais poetiquement vraie : la lumière des etoiles est reelle mais faible, à la fois lumière et obscurite. Rodrigue attend dans cette demi-obscurite avant le combat. '
                        + 'En gros : OXYmore = deux mots OPPOses COLLES. C\'est l\'oxymore le plus cite au Bac. Retiens-le, il revient CHAQUE annee.' },
                    { question: 'Quelle figure ? "Soleil noir de la melancolie." (Nerval, El Desdichado)', answer: 'OXYMORE celebrissime. "Soleil" (lumiere) + "noir" (obscurite) = contradiction dans le même groupe. '
                        + 'L\'image est geniale : un soleil qui n\'eclaire pas, une lumière devenue ombre. C\'est la depression rendue visible — un soleil qui irradie des tenebres. '
                        + 'Cet oxymore a inspire Julia Kristeva pour son essai "Soleil noir" sur la depression. Une figure de style peut devenir un concept philosophique !' },
                    { question: 'Quelle figure ? "Un silence assourdissant."', answer: 'OXYMORE. "Silence" (absence de bruit) et "assourdissant" (bruit extreme) sont contradictoires et accoles. '
                        + 'Paradoxalement, on COMPREND parfaitement cette image : un silence tellement profond qu\'il en devient oppressant, presque physique. L\'oxymore dit l\'indicible. '
                        + 'L\'oxymore fonctionne PARCE QU\'il est impossible : le cerveau essaie de resoudre la contradiction et créé une image nouvelle, plus riche que chaque mot seul.' },
                    { question: 'Quelle figure ? "La belle horreur d\'un mal si juste." (Racine, Phedre)', answer: 'DOUBLE OXYMORE. "Belle horreur" (beau + horrible) et "mal juste" (mal + juste) = deux oxymorons dans la même phrase. '
                        + 'Racine exprime la COMPLEXITE de la passion : Phedre est horrifiee par son amour incestueux mais le trouve beau. Le mal est injustifiable mais semble juste a son coeur. '
                        + 'Racine utilise l\'oxymore pour montrer que la passion est UNE CONTRADICTION VIVANTE. Phedre est le personnage le plus oxymorique de la litterature.' },
                    { question: 'Quelle figure ? "Douce violence", "mort-vivant", "guerre froide", "aigre-doux". Quel point commun ?', answer: 'Tous sont des OXYMORONS passes dans le langage courant. Ils associent deux termes contradictoires dans un même groupe. '
                        + 'L\'oxymore créé des concepts NOUVEAUX que ni l\'un ni l\'autre mot ne pourrait exprimer seul. "Guerre froide" = un type de conflit unique. '
                        + 'L\'oxymore est une machine a creer du SENS NOUVEAU. C\'est pour ca que les poetes l\'adorent : il dit ce que le dictionnaire ne sait pas dire.' },
                    // --- OXYMORE vs ANTITHESE ---
                    { question: 'Piege Bac : Quelle est LA difference entre oxymore et antithese ? Comment ne JAMAIS les confondre ?', answer: 'OXYMORE = deux mots contradictoires dans le MEME groupe de mots ("obscure clarte" — un seul cercle autour des deux mots). '
                        + 'ANTITHESE = deux idees opposees dans des parties DIFFERENTES de la phrase ("je vis, je meurs" — deux cercles dans deux zones separees). '
                        + 'Astuce : Oxymore = COLLE. Antithese = SEPARE. Teste : peux-tu entourer les deux contraires avec UN seul cercle ? Oui = oxymore. Non = antithese.' },
                    // --- PARADOXE ---
                    { question: 'Quelle figure ? "Je sais que je ne sais rien." (Socrate)', answer: 'PARADOXE. L\'affirmation semble contradictoire (comment savoir qu\'on ne sait rien ?) mais revele une vérité profonde : la vraie sagesse commence par reconnaitre son ignorance. '
                        + 'Le paradoxe est la figure de la PHILOSOPHIE : il force a depasser les evidences. '
                        + 'ASTUCE : paradoxe = CHOC initial ("ca n\'a pas de sens !") + VERITE cachee ("en fait, si, c\'est profond"). Il porte sur une IDEE entiere, pas sur deux mots colles.' },
                    { question: 'Quelle figure ? "La guerre est une chose trop serieuse pour etre confiee a des militaires." (Clemenceau)', answer: 'PARADOXE. Normalement, les militaires SONT les experts de la guerre. Mais Clemenceau revele que les consequences de la guerre depassent le cadre militaire : elles sont politiques, humaines, morales. '
                        + 'Le paradoxe est l\'arme des penseurs et des politiques : il bouscule les certitudes. '
                        + 'Difference paradoxe/oxymore : le paradoxe porte sur une IDEE ENTIERE. L\'oxymore porte sur DEUX MOTS. "Silence assourdissant" = oxymore. "Savoir qu\'on ne sait rien" = paradoxe.' },
                    { question: 'Quelle figure ? "Il faut imaginer Sisyphe heureux." (Camus, Le Mythe de Sisyphe)', answer: 'PARADOXE philosophique. Sisyphe est condamne à un chatiment eternel absurde — comment pourrait-il etre heureux ? '
                        + 'Camus revele que le bonheur reside dans l\'ACCEPTATION lucide de l\'absurde, dans la revolte meme. Le paradoxe est au coeur de l\'existentialisme. '
                        + 'Ce paradoxe camusien tombe regulierement en sujet de philo ET de francais. Retiens-le : il illustre parfaitement la figure ET la pensee de l\'absurde.' },
                    // --- ANTIPHRASE ---
                    { question: 'Quelle figure ? Voltaire qualifie la guerre de "boucherie heroique" dans Candide.', answer: 'ANTIPHRASE (il dit le contraire de ce qu\'il pense : la guerre n\'est PAS heroique) + OXYMORE ("boucherie" + "heroique" sont contradictoires et accoles). '
                        + 'Voltaire est le MAITRE de l\'antiphrase. Tout Candide est une antiphrase geante : le "meilleur des mondes possibles" face a l\'horreur. '
                        + 'ASTUCE : ANTIPHRASE = base de l\'IRONIE. Le ton et le contexte revelent le vrai sens. Chez Voltaire, TOUT est suspect d\'ironie.' },
                    { question: 'Quelle figure ? "Quel beau temps !" dit en regardant une tempete.', answer: 'ANTIPHRASE. On dit le CONTRAIRE de ce qu\'on pense. "Beau" est ironique : le temps est horrible. '
                        + 'Piege Bac : L\'IRONIE n\'est PAS une figure de style, c\'est un REGISTRE (un ton general). La figure qui produit l\'ironie est l\'ANTIPHRASE. '
                        + 'Si on te demande "quelle figure de style ?" = reponds ANTIPHRASE. Si on te demande "quel registre ?" = reponds IRONIE. Ne confonds pas !' },
                    { question: 'Quelle figure ? "Plaisante justice qu\'une riviere borne !" (Pascal, Pensees)', answer: 'ANTIPHRASE + PARADOXE. "Plaisante" est ironique (Pascal ne trouve pas ca drole du tout). L\'idee que la justice change d\'un cote a l\'autre d\'une riviere est paradoxale. '
                        + 'Pascal denonce l\'arbitraire des lois humaines avec une ironie acide. '
                        + 'L\'antiphrase est une arme de DENONCIATION : dire le contraire pour faire ressortir l\'absurdite. Voltaire, Pascal, Montesquieu, Swift l\'utilisent tous.' },
                    { question: 'Quelle est la difference entre antiphrase et ironie ?', answer: 'L\'ANTIPHRASE est la FIGURE DE STYLE : procede precis qui consiste a dire le contraire de ce qu\'on pense. '
                        + 'L\'IRONIE est le REGISTRE, le TON general. L\'ironie peut utiliser l\'antiphrase, mais aussi l\'hyperbole, la fausse naivete, la litote... '
                        + 'L\'antiphrase est l\'OUTIL, l\'ironie est l\'ATTITUDE. Au Bac : "quelle figure ?" → antiphrase. "Quel registre ?" → ironie. Grave erreur si tu les inverses.' },
                    // --- CHIASME ---
                    { question: 'Quelle figure ? "Il faut manger pour vivre, et non vivre pour manger." (Moliere, L\'Avare)', answer: 'CHIASME. Structure croisee : manger(A)-vivre(B) / vivre(B)-manger(A) = schema ABBA. Les termes s\'inversent comme dans un miroir. '
                        + 'Le chiasme renforce l\'opposition en montrant que l\'inversion des priorites change tout le sens de la vie. '
                        + 'Astuce : CHIASME = croiX (Chi en grec = X, les mots se croisent AB/BA). Dessine un X entre les termes pour verifier.' },
                    { question: 'Quelle figure ? "Les premiers seront les derniers, et les derniers seront les premiers." (Evangile)', answer: 'CHIASME + ANTITHESE + PARADOXE. Structure ABBA : premiers(A)-derniers(B) / derniers(B)-premiers(A). '
                        + 'L\'antithese premiers/derniers renforce l\'opposition. Le paradoxe bouscule la hierarchie sociale. Le chiasme incarne le RENVERSEMENT dans la forme meme. '
                        + 'Le chiasme est la figure du RETOURNEMENT. Quand une phrase inverse ses termes, c\'est un chiasme. Dessine le X pour verifier.' },
                    { question: 'Quelle figure ? "Il y a de l\'homme dans le singe et du singe dans l\'homme."', answer: 'CHIASME. Homme(A)-singe(B) / singe(B)-homme(A) = schema ABBA. L\'inversion créé un parallele troublant entre les deux especes. '
                        + 'Le chiasme brouille la frontiere entre l\'homme et l\'animal. La structure en miroir montre que la relation est RECIPROQUE. '
                        + 'Le chiasme dit toujours quelque chose de PLUS que les mots : il montre visuellement la reciprocite, l\'equilibre ou le renversement.' },
                    { question: 'Quelle figure ? "Bonnet blanc et blanc bonnet."', answer: 'CHIASME lexical. Bonnet(A)-blanc(B) / blanc(B)-bonnet(A) = ABBA. L\'inversion montre que c\'est la MEME chose, que l\'ordre n\'y change rien. '
                        + 'Expression idiomatique qui signifie "c\'est pareil". Le chiasme illustre visuellement l\'equivalence. '
                        + 'Cette expression est le chiasme le plus facile a retenir. Utilise-la comme modèle : si la structure est ABBA, c\'est un chiasme.' },
                    // --- RAFFINEMENT ---
                    { question: 'Quelle figure ? "Rome, l\'unique objet de mon ressentiment ! / Rome, a qui vient ton bras d\'immoler mon amant !" (Corneille, Horace)', answer: 'ANAPHORE ("Rome" en debut de vers) + ANTITHESE (amour/haine envers Rome). L\'anaphore martele l\'obsession, l\'antithese exprime le dechirement. '
                        + 'Camille est dechiree : elle hait Rome qui a tue son amant, mais Rome est aussi sa patrie. '
                        + 'Un passage peut contenir PLUSIEURS figures d\'opposition. Identifie-les TOUTES pour un commentaire complet.' },
                    { question: 'En politique, "Moi president, je serai le president du pouvoir d\'achat, pas du pouvoir de l\'argent" (inspire). Quelles figures ?', answer: 'ANAPHORE ("pouvoir") + ANTITHESE ("pouvoir d\'achat" vs "pouvoir de l\'argent") + CHIASME implicite (reprise de "pouvoir" avec inversion du complement). '
                        + 'Le discours politique est un FESTIVAL de figures d\'opposition. Elles creent des phrases-chocs, memorables, tweetables. '
                        + 'Les speechwriters connaissent les figures de style par coeur. Obama, Macron, Chirac : tous les grands discours sont construits sur des antitheses et des chiasmes.' },
                    { question: 'EXERCICE : Classe ces exemples — oxymore, antithese ou paradoxe ? 1) "douce violence" 2) "je vis, je meurs" 3) "moins on en sait, plus on est heureux"', answer: '1) "Douce violence" = OXYMORE (deux mots contradictoires colles dans un même groupe). '
                        + '2) "Je vis, je meurs" = ANTITHESE (opposes separes dans deux segments de la phrase). '
                        + '3) "Moins on en sait, plus on est heureux" = PARADOXE (idee qui semble absurde mais revele une vérité). '
                        + 'Resume : oxymore = 2 mots COLLES. Antithese = 2 idees SEPAREES. Paradoxe = 1 IDEE qui choque puis fait sens.' },
                    { question: 'Quelle figure ? "On ne voit bien qu\'avec le coeur. L\'essentiel est invisible pour les yeux." (Saint-Exupery, Le Petit Prince)', answer: 'PARADOXE (voir sans les yeux ? Absurde, mais profondement vrai). ANTITHESE implicite (coeur vs yeux, visible vs invisible). '
                        + 'Saint-Exupery utilise le paradoxe pour atteindre une vérité que la logique seule ne peut pas dire. '
                        + 'Le paradoxe est la figure de la SAGESSE. Il dit : "la vérité est plus complexe que ce que tu crois". C\'est pour ca que les philosophes et les poetes l\'adorent.' },
                    { question: 'Quelle figure ? "J\'aime et je hais. Comment ? me demanderas-tu. Je ne sais, mais je le sens et j\'en souffre." (Catulle)', answer: 'ANTITHESE ("j\'aime et je hais") + PARADOXE (aimer et hair en même temps semble impossible). La figure traduit la complexite du sentiment amoureux. '
                        + 'Catulle est un poete romain du Ier siècle avant J.-C. : les figures d\'opposition traversent les millenaires parce qu\'elles disent l\'humain. '
                        + 'L\'antithese et le paradoxe sont les figures de l\'EMOTION CONTRADICTOIRE. Quand un texte parle d\'amour, cherche-les !' },
                    { question: 'Quelle figure ? "C\'etait un homme de la plus mediocre importance." pour un personnage très important. (registre ironique)', answer: 'ANTIPHRASE. L\'auteur dit le contraire de ce qu\'il pense : "mediocre importance" = très important. Le contexte et le ton revelent l\'ironie. '
                        + 'L\'antiphrase exige que le lecteur soit COMPLICE : il doit comprendre le decalage entre les mots et le sens reel. '
                        + 'Pour reperer l\'antiphrase : le sens LITTERAL contredit ce que le contexte montre. Si un personnage odieux est decrit comme "charmant", cherche l\'antiphrase.' },
                    { question: 'Les rappeurs utilisent-ils l\'oxymore ? Exemples.', answer: 'OUI, massivement ! "Beau malheur" (Nekfeu), "douce rage" (Keny Arkana), "lumiere noire" (divers). Le rap contemporain est une mine d\'oxymorons. '
                        + 'L\'oxymore exprime les contradictions de la vie urbaine : la beauté dans la laideur, la force dans la douleur, l\'espoir dans le desespoir. '
                        + 'Le rap est la POESIE du XXIe siècle. Les memes figures que Corneille et Baudelaire se retrouvent dans les punchlines. Prends-les au serieux dans tes copies !' }
                ],
                quiz: [
                    { question: '"Cette obscure clarte qui tombe des etoiles" (Corneille) est :', options: ['Une antithese', 'Un oxymore', 'Un paradoxe', 'Une antiphrase'], correctIndex: 1, explanation: '"Obscure" et "clarte" sont contradictoires et COLLES dans le même groupe. Mots opposes colles = oxymore.' },
                    { question: '"Je vis, je meurs ; je me brule et me noie" (Labe) est :', options: ['Un oxymore', 'Une antithese', 'Un paradoxe', 'Une antiphrase'], correctIndex: 1, explanation: 'Les oppositions (vis/meurs, brule/noie) sont dans des parties SEPAREES de la phrase. Opposes separes = antithese.' },
                    { question: 'L\'antiphrase consiste a :', options: ['Exagerer volontairement', 'Dire le CONTRAIRE de ce qu\'on pense', 'Repeter un mot en debut de phrase', 'Comparer sans outil'], correctIndex: 1, explanation: 'Antiphrase = dire le contraire. "Quel beau temps !" sous la pluie. C\'est la figure qui produit l\'IRONIE.' },
                    { question: 'Le schema du chiasme est :', options: ['AABB', 'ABAB', 'ABBA', 'AAAA'], correctIndex: 2, explanation: 'ABBA. "Manger(A) pour vivre(B) / vivre(B) pour manger(A)." Chi en grec = X : les termes se croisent.' },
                    { question: '"Un silence assourdissant" est :', options: ['Une antithese', 'Une litote', 'Un oxymore', 'Un paradoxe'], correctIndex: 2, explanation: '"Silence" et "assourdissant" sont contradictoires et COLLES dans le même groupe. Oxymore.' },
                    { question: '"Je sais que je ne sais rien" (Socrate) est :', options: ['Un oxymore', 'Un paradoxe', 'Une antiphrase', 'Une litote'], correctIndex: 1, explanation: 'L\'affirmation semble contradictoire mais revele une vérité profonde. C\'est un paradoxe (idee entiere, pas deux mots colles).' },
                    { question: 'La difference entre oxymore et antithese :', options: ['L\'oxymore est plus poetique', 'Oxymore = même groupe / Antithese = parties separees', 'Aucune difference', 'L\'antithese utilise "comme"'], correctIndex: 1, explanation: 'Oxymore = mots contradictoires COLLES (meme groupe). Antithese = opposition SEPAREE dans la phrase. C\'est la distinction CLE du Bac.' },
                    { question: '"Soleil noir de la melancolie" (Nerval) est :', options: ['Une antithese', 'Un paradoxe', 'Un oxymore', 'Une comparaison'], correctIndex: 2, explanation: '"Soleil" (lumiere) et "noir" (obscurite) sont contradictoires et colles dans le même groupe nominal. Oxymore celebre.' },
                    { question: 'L\'ironie est :', options: ['Une figure de style', 'Un registre qui utilise l\'antiphrase', 'Un synonyme d\'oxymore', 'Une comparaison inversee'], correctIndex: 1, explanation: 'L\'ironie est un REGISTRE (ton general). La FIGURE qui la produit est l\'antiphrase. Au Bac : "figure" = antiphrase, "registre" = ironie.' },
                    { question: '"Boucherie heroique" (Voltaire) contient :', options: ['Seulement une antiphrase', 'Un oxymore et une antiphrase', 'Seulement un oxymore', 'Un paradoxe'], correctIndex: 1, explanation: 'Oxymore (boucherie + heroique = contradictoires colles) ET antiphrase (Voltaire pense le contraire : la guerre n\'est pas heroique).' },
                    { question: '"Il faut imaginer Sisyphe heureux" (Camus) est :', options: ['Une antiphrase', 'Un oxymore', 'Un paradoxe', 'Une antithese'], correctIndex: 2, explanation: 'L\'idee semble absurde (condamne eternellement = heureux ?) mais revele une vérité existentialiste. Paradoxe philosophique.' },
                    { question: '"On ne voit bien qu\'avec le coeur. L\'essentiel est invisible pour les yeux." (Saint-Exupery) est :', options: ['Un oxymore', 'Un paradoxe', 'Une antiphrase', 'Une litote'], correctIndex: 1, explanation: 'Voir sans les yeux semble absurde mais revele une vérité profonde. Le paradoxe depasse la logique pour atteindre la sagesse.' },
                    { question: 'Le chiasme est la figure du :', options: ['Contraste', 'Renversement (structure croisee ABBA)', 'Exageration', 'Adoucissement'], correctIndex: 1, explanation: 'Le chiasme croise les termes (A-B / B-A). C\'est la figure du RENVERSEMENT, du miroir, de la reciprocite. Chi = X = croisement.' },
                    { question: '"Douce violence" est un oxymore. "Je vis, je meurs" est :', options: ['Aussi un oxymore', 'Une antithese', 'Un paradoxe', 'Un chiasme'], correctIndex: 1, explanation: '"Douce violence" = colles dans le même groupe = oxymore. "Je vis, je meurs" = separes dans la phrase = antithese.' },
                    { question: 'Pour reperer une antiphrase, il faut :', options: ['Chercher un mot-outil', 'Regarder si le contexte contredit le sens litteral', 'Compter les syllabes', 'Chercher des mots opposes colles'], correctIndex: 1, explanation: 'L\'antiphrase dit le contraire : le contexte/ton CONTREDIT le sens des mots. "Quel beau temps !" sous la tempete.' }
                ],
                tips: [
                    'REGLE D\'OR oxymore/antithese : dessine un cercle autour des contraires. UN seul cercle = oxymore. DEUX cercles = antithese.',
                    'L\'ironie est un REGISTRE, pas une figure. Au Bac : "quelle figure ?" → antiphrase. "Quel registre ?" → ironie.',
                    'Le chiasme forme un X (chi en grec). Schema ABBA. Pour le verifier : ecris les mots-cles et trace les liens croises.',
                    'Le paradoxe porte sur une IDEE entière ("savoir qu\'on ne sait rien"). L\'oxymore porte sur DEUX MOTS colles ("soleil noir").',
                    'Les figures d\'opposition sont les REINES du commentaire compose. Elles expriment les tensions, dilemmes, contradictions — le coeur de la litterature.'
                ],
                pitfalls: [
                    'PIEGE n°1 : confondre oxymore et antithese. Oxymore = COLLES. Antithese = SEPARES. Teste avec le "cercle unique".',
                    'Ne dis JAMAIS "ironie" quand on te demande une figure de style. Dis ANTIPHRASE.',
                    'Le paradoxe n\'est PAS un oxymore : le paradoxe = idee entière absurde mais vraie. L\'oxymore = deux mots contradictoires colles.',
                    'Ne confonds pas antiphrase et antithese : antiphrase = dire le CONTRAIRE (ironie). Antithese = OPPOSER deux idees.',
                    'Un oxymore n\'est pas une erreur de style : c\'est un choix delibere pour creer du sens nouveau.'
                ]
            },
            {
                id: 'insistance',
                title: 'Figures d\'amplification & d\'attenuation',
                icon: '\uD83D\uDD0A',
                content: '<h3>Amplifier ou attenuer : le volume du langage</h3>'
                    + '<p>Certaines figures AMPLIFIENT le message (hyperbole, gradation, accumulation, anaphore). D\'autres l\'ATTENUENT (litote, euphemisme). La maitrise de ces figures = savoir DOSER son expression.</p>'
                    + '<h4>Le piege Litote vs Euphemisme</h4>'
                    + '<p><strong>LITOTE = dire MOINS pour suggerer PLUS</strong> ("Va, je ne te hais point" = je t\'aime PASSIONNEMENT)<br/>'
                    + '<strong>EUPHEMISME = ADOUCIR une réalité desagreable</strong> ("Il nous a quittes" = il est MORT)<br/>'
                    + 'La litote AMPLIFIE (intention = dire plus fort). L\'euphemisme PROTEGE (intention = dire moins dur).</p>'
                    + '<h4>Tableau comparatif</h4>'
                    + '<table border="1" cellpadding="4"><tr><th>Figure</th><th>Mecanisme</th><th>Intention</th><th>Exemple</th></tr>'
                    + '<tr><td>Hyperbole</td><td>Exageration</td><td>Frapper l\'esprit</td><td>"Je meurs de faim"</td></tr>'
                    + '<tr><td>Litote</td><td>Dire moins</td><td>Suggerer PLUS</td><td>"Je ne te hais point"</td></tr>'
                    + '<tr><td>Euphemisme</td><td>Adoucir</td><td>PROTEGER la sensibilite</td><td>"Il nous a quittes"</td></tr>'
                    + '<tr><td>Gradation</td><td>Progression d\'intensite</td><td>Crescendo/decrescendo</td><td>"Va, cours, vole !"</td></tr>'
                    + '<tr><td>Accumulation</td><td>Enumeration debordante</td><td>Submerger</td><td>Longue liste</td></tr>'
                    + '<tr><td>Anaphore</td><td>Repetition en debut</td><td>Marteler</td><td>"Moi president..."</td></tr>'
                    + '<tr><td>Pleonasme</td><td>Redondance de sens</td><td>Insistance</td><td>"monter en haut"</td></tr>'
                    + '</table>',
                flashcards: [
                    // --- LITOTE ---
                    { question: 'Quelle figure ? "Va, je ne te hais point." (Corneille, Le Cid, III, 4)', answer: 'LITOTE. Chimene dit "je ne te hais point" pour suggerer "je t\'aime PASSIONNEMENT". Elle dit MOINS pour exprimer PLUS. '
                        + 'C\'est LA litote la plus celebre de la litterature francaise. Chimene ne peut pas avouer son amour (Rodrigue a tue son pere) mais le "ne... point" la trahit. '
                        + 'En gros : LITOTE = dire MOINS pour faire comprendre PLUS. L\'intention est d\'AMPLIFIER, pas d\'adoucir. Retiens cet exemple, il revient CHAQUE ANNEE au Bac.' },
                    { question: 'Piege Bac : Quelle est LA difference entre litote et euphemisme ?', answer: 'LITOTE = dire MOINS pour suggerer PLUS (amplifier). "Je ne te hais point" = je t\'aime follement. L\'intention est de rendre le message PLUS FORT. '
                        + 'EUPHEMISME = adoucir une réalité DESAGREABLE. "Il nous a quittes" = il est mort. L\'intention est de PROTEGER la sensibilite. '
                        + 'Astuce : Litote = le message reel est plus GRAND que les mots. Euphemisme = le message reel est plus DUR que les mots.' },
                    { question: 'Quelle figure ? "Pas mal !" pour dire "c\'est excellent".', answer: 'LITOTE. "Pas mal" = formulation minimale (negation de "mal") pour exprimer l\'admiration. Le sens reel est PLUS fort que les mots. '
                        + 'La litote utilise souvent la double negation : "ce n\'est pas mauvais" = c\'est excellent. "Ce n\'est pas bete" = c\'est brillant. '
                        + 'La litote est la figure de la PUDEUR et de l\'ELEGANCE. Dire moins montre plus de maitrise que crier son admiration.' },
                    { question: 'Quelle figure ? "Ce n\'est pas impossible." pour dire "c\'est tout a fait possible".', answer: 'LITOTE. Double negation ("ne... pas" + "impossible") qui affirme avec plus de force que c\'est possible. '
                        + 'Le locuteur POURRAIT dire "c\'est possible" mais choisit la negation pour creer un effet de retenue qui paradoxalement AMPLIFIE. '
                        + 'Quand quelqu\'un utilise deux negations pour dire quelque chose de positif, c\'est presque toujours une litote. Le "presque" est une litote aussi !' },
                    // --- EUPHEMISME ---
                    { question: 'Quelle figure ? "Il nous a quittes" pour dire "il est mort".', answer: 'EUPHEMISME. On remplace le mot brutal ("mort") par une expression douce ("nous a quittes") pour PROTEGER la sensibilite de l\'interlocuteur. '
                        + 'Autres euphemismes de la mort : "il s\'est eteint", "il a rendu l\'ame", "il repose en paix". La mort est le domaine n°1 de l\'euphemisme. '
                        + 'DIFFERENCE CLE : l\'euphemisme ADOUCIT (protege), la litote AMPLIFIE (dit plus fort). "Il nous a quittes" adoucit la mort = euphemisme.' },
                    { question: 'Quelle figure ? "Il a ete remercie" pour "il a ete licencie". Et dans "plan social" ?', answer: 'EUPHEMISME dans les deux cas. "Remercier" adoucit le licenciement. "Plan social" adoucit les licenciements massifs. '
                        + 'Le monde professionnel et politique est une USINE a euphemismes : "restructuration" (licenciements), "dommages collateraux" (victimes civiles), "neutraliser" (tuer). '
                        + 'L\'euphemisme est une arme de MANIPULATION. Au Bac, analyse TOUJOURS l\'intention : proteger la sensibilite ou masquer la réalité ?' },
                    { question: 'Quelle figure ? "Les personnes a mobilite reduite." pour "les handicapes".', answer: 'EUPHEMISME. L\'expression adoucit la réalité du handicap par une formulation plus neutre et respectueuse. '
                        + 'L\'euphemisme evolue avec la société : "aveugle" → "malvoyant" → "personne en situation de handicap visuel". Chaque époque cherche des mots moins durs. '
                        + 'L\'euphemisme est aussi un outil de RESPECT. Il n\'est pas toujours manipulatoire : parfois il temoigne d\'une vraie attention à la dignite.' },
                    // --- HYPERBOLE ---
                    { question: 'Quelle figure ? "Un seul etre vous manque, et tout est depeuple." (Lamartine, L\'Isolement)', answer: 'HYPERBOLE. "Tout est depeuple" = exageration enorme. Le monde ne se vide pas parce qu\'une personne manque. '
                        + 'L\'hyperbole exprime l\'intensite du deuil amoureux : le chagrin deforme la perception du monde. C\'est aussi une ANTITHESE ("un seul" vs "tout"). '
                        + 'ASTUCE : HYPERbole = HYPER exagere. Pense a "HYPERactif" = trop actif. L\'hyperbole, c\'est le TROP de la figure de style.' },
                    { question: 'Quelle figure ? "Je meurs de faim !" — "J\'ai mille choses a te dire." — "Attendre une eternite."', answer: 'HYPERBOLE dans les trois cas. On exagere volontairement pour frapper l\'esprit : on ne meurt pas, on n\'a pas mille choses, ce n\'est pas une eternite. '
                        + 'L\'hyperbole est LA figure la plus presente dans le langage courant. Tu l\'utilises 100 fois par jour (et ca, c\'est une hyperbole !). '
                        + 'L\'hyperbole n\'est pas un mensonge : c\'est une deformation VOLONTAIRE pour EXPRIMER un sentiment, pas pour tromper.' },
                    { question: 'Quelle figure ? "C\'est tout le portrait de sa mere !" ou "Il à un coeur d\'or."', answer: '"Tout le portrait" = HYPERBOLE (exageration : il ne peut pas etre identique a 100%). "Coeur d\'or" = METAPHORE (le coeur est identifie a l\'or sans outil). '
                        + 'Le langage quotidien est un COCKTAIL de figures : hyperboles, metaphores, litotes s\'enchainent sans qu\'on s\'en rende compte. '
                        + 'Les figures de style ne sont PAS des trucs de vieux livres. Chaque conversation, chaque SMS, chaque story Instagram en contient. Tu les maitrises deja, tu dois juste les NOMMER.' },
                    // --- GRADATION ---
                    { question: 'Quelle figure ? "Va, cours, vole, et nous venge !" (Corneille, Le Cid, I, 5)', answer: 'GRADATION ASCENDANTE. L\'intensite augmente a chaque verbe : va < cours < vole. Le dernier terme ("vole") est hyperbolique. '
                        + 'Don Diegue, humilie, presse Rodrigue de le venger avec une urgence croissante. Chaque verbe est PLUS rapide que le precedent. '
                        + 'ASTUCE : gradation ASCENDANTE = du faible au fort (crescendo). Gradation DESCENDANTE = du fort au faible (decrescendo). La gradation nécessité au moins 3 termes.' },
                    { question: 'Donne un exemple de gradation DESCENDANTE et explique son effet.', answer: '"Il courut, marcha, ralentit, s\'arreta." L\'intensite decroit : courir > marcher > ralentir > s\'arreter. C\'est un decrescendo. '
                        + 'La gradation descendante créé un effet de CHUTE, de desenchantement, d\'epuisement progressif. Le mouvement s\'eteint. '
                        + 'La gradation descendante est aussi appelee "anticlimax". Elle est souvent comique ou tragique : l\'enthousiasme retombe.' },
                    { question: 'Quelle figure ? "Elle etait grande, belle, majestueuse, sublime."', answer: 'GRADATION ASCENDANTE + ACCUMULATION. Les adjectifs augmentent en intensite : grande < belle < majestueuse < sublime. Chaque mot est PLUS fort. '
                        + 'C\'est aussi une accumulation (succession de termes). Mais attention : dans une gradation, il y à un ORDRE d\'intensite. Pas dans une simple accumulation. '
                        + 'DIFFERENCE : accumulation = liste sans ordre precis. Gradation = liste avec progression d\'intensite. Au Bac, cette nuance compte !' },
                    // --- ACCUMULATION ---
                    { question: 'Quelle figure ? "Des tapis, des coussins, des lampes, des bibelots, des fleurs, des tentures, des parfums emplissaient la piece."', answer: 'ACCUMULATION. La succession debordante de termes créé un effet de surabondance, de profusion, presque d\'etouffement. '
                        + 'L\'accumulation submerge le lecteur. Elle peut evoquer le luxe (Balzac), le desordre (Zola), ou l\'obsession (liste maniaque). '
                        + 'L\'accumulation est l\'ENUMERATION qui deborde. Si la liste semble "trop longue" volontairement, c\'est une accumulation. Si c\'est une liste neutre, c\'est une enumeration.' },
                    { question: 'Quelle est la difference entre enumeration et accumulation ?', answer: 'ENUMERATION = liste neutre ou ordonnee : "Il acheta du pain, du beurre et du lait." C\'est informatif. '
                        + 'ACCUMULATION = enumeration DEBORDANTE qui vise un effet de masse : "Il acheta du pain, du beurre, du lait, des oeufs, du fromage, des fruits, des legumes, de la viande, des conserves..." On ne s\'arrete plus ! '
                        + 'L\'accumulation est une enumeration avec une INTENTION stylistique : submerger, impressionner, etouffer. Au Bac, precisez l\'EFFET.' },
                    // --- ANAPHORE ---
                    { question: 'Quelle figure ? "Paris ! Paris outrage ! Paris brise ! Paris martyrise ! Mais Paris libere !" (De Gaulle, 25 aout 1944)', answer: 'ANAPHORE ("Paris" en debut de chaque segment) + GRADATION (outrage < brise < martyrise = intensite croissante) + RETOURNEMENT final ("mais Paris libere !"). '
                        + 'De Gaulle martele "Paris" comme un tambour. L\'anaphore créé un rythme ORATOIRE puissant, presque musical. La liberation eclate après la gradation de souffrance. '
                        + 'L\'anaphore est la figure reine des DISCOURS. Elle créé l\'emotion collective. MLK : "I have a dream..." Hollande : "Moi, president..."' },
                    { question: 'Quelle figure ? "Moi president de la Republique, je ne nommerai pas les membres de ma famille. Moi president, je ne serai pas le chef de la majorite..." (Hollande, 2012)', answer: 'ANAPHORE celebre. "Moi president" est repete 15 FOIS en debut de phrase dans le debat d\'entre-deux-tours. '
                        + 'L\'effet est un martellement hypnotique : chaque repetition enfonce le clou, créé une promesse solennelle. C\'est le moment qui a retourne le debat. '
                        + 'L\'anaphore en discours politique = arme de persuasion massive. Elle structure le discours comme un REFRAIN et grave le message dans les memoires.' },
                    { question: 'Quelle figure ? "I have a dream that one day... I have a dream that one day... I have a dream today !" (Martin Luther King, 1963)', answer: 'ANAPHORE monumentale. "I have a dream" repete en debut de chaque paragraphe. '
                        + 'MLK ne l\'avait pas prevue — il a improvise cette anaphore en sentant la foule reagir. Le resultat est le plus grand discours du XXe siècle. '
                        + 'L\'anaphore créé un RYTHME COLLECTIF. La foule peut anticiper, accompagner, vibrer avec l\'orateur. C\'est la figure de la COMMUNION.' },
                    // --- PLEONASME ---
                    { question: 'Qu\'est-ce qu\'un pleonasme ? Est-ce toujours une faute ?', answer: 'PLEONASME = repetition inutile de sens : "monter en haut", "descendre en bas", "prevoir a l\'avance", "collaborer ensemble", "sortir dehors". '
                        + 'En usage courant, c\'est une FAUTE. Mais en litterature, le pleonasme peut etre VOLONTAIRE et expressif : "Je l\'ai vu de mes yeux vu !" (Moliere) — l\'insistance créé l\'intensite. '
                        + 'Au Bac, si le pleonasme est dans un texte litteraire, analysez-le comme un CHOIX stylistique, pas comme une erreur.' },
                    // --- EXERCICES COMPARATIFS ---
                    { question: 'EXERCICE : Litote ou euphemisme ? "Ce n\'est pas si mal." pour dire "c\'est bien".', answer: 'LITOTE. On dit MOINS ("pas si mal") pour suggerer PLUS ("c\'est bien"). L\'intention est d\'AMPLIFIER le compliment avec elegance. '
                        + 'Ce n\'est PAS un euphemisme car il n\'y a pas de réalité desagreable a adoucir. '
                        + 'METHODE : L\'intention est-elle d\'AMPLIFIER ? = litote. L\'intention est-elle d\'ADOUCIR une réalité penible ? = euphemisme. TOUJOURS se demander POURQUOI le locuteur attenue.' },
                    { question: 'EXERCICE : Litote ou euphemisme ? "Elle est partie" pour dire "elle est morte".', answer: 'EUPHEMISME. On adoucit la réalité brutale de la mort par un mot plus doux ("partie"). L\'intention est de PROTEGER l\'interlocuteur, pas d\'amplifier. '
                        + 'Si quelqu\'un disait "elle n\'est pas en grande forme" pour une personne gravement malade, ce serait aussi un euphemisme (adoucir) ET potentiellement une litote (dire moins pour suggerer la gravite). '
                        + 'Parfois les deux se chevauchent ! Au Bac, justifie clairement ton choix en expliquant l\'INTENTION.' },
                    { question: 'EXERCICE : Litote ou euphemisme ? "Il n\'est pas indifferent a ses charmes." pour "il est fou amoureux".', answer: 'LITOTE. "Pas indifferent" est une negation attenuee pour exprimer un sentiment INTENSE (amour fou). L\'intention est d\'AMPLIFIER avec pudeur. '
                        + 'Ce n\'est pas un euphemisme car l\'amour n\'est pas une réalité "desagreable" a adoucir. '
                        + 'La litote est souvent la marque de l\'ELEGANCE et de la DISTANCE emotionnelle. Les personnages de Marivaux ou Laclos excellent dans la litote amoureuse.' },
                    { question: 'Quelle figure ? "Je suis jeune, il est vrai ; mais aux ames bien nees, / La valeur n\'attend point le nombre des annees." (Corneille, Le Cid)', answer: 'LITOTE dans "il est vrai" (concession minimale : Rodrigue ne developpe pas sa jeunesse, il la minimise pour mieux affirmer sa valeur). '
                        + 'C\'est aussi une SENTENCE (vérité generale presentee comme universelle). Rodrigue sous-estime son age pour sur-estimer son courage. '
                        + 'La litote est une arme de PERSUASION : en ayant l\'air modeste, on parait plus convaincant. Moins on se vante, plus on impressionne.' },
                    { question: 'Quelle figure ? "Ni vu ni connu." — Litote ou euphemisme ?', answer: 'LITOTE. La double negation ("ni... ni...") exprime l\'idee POSITIVE de discretion totale avec plus de force qu\'un simple "discretement". '
                        + 'L\'intention est d\'AMPLIFIER la reussite de la dissimulation. Ce n\'est pas un euphemisme car il n\'y a pas de réalité penible a adoucir. '
                        + 'La litote a souvent un ton de FIERTE discrete : "pas mal" (= très bien), "pas bete" (= brillant), "ni vu ni connu" (= parfaitement dissimule).' },
                    // --- COMPLEMENT AMPLIFICATION ---
                    { question: 'Quelle figure ? "J\'ai des yeux, des yeux partout, des yeux dans le dos, des yeux au bout des doigts." (pour un surveillant)', answer: 'HYPERBOLE (exageration : personne n\'a d\'yeux partout) + ACCUMULATION (la liste s\'allonge) + GRADATION ("yeux" → "yeux partout" → "yeux dans le dos" → "yeux au bout des doigts" = de plus en plus absurde). '
                        + 'L\'accumulation hyperbolique submerge le lecteur sous l\'image de la surveillance omnipresente. '
                        + 'Les figures se combinent presque toujours. Au Bac, reperer UNE figure = la moyenne. En reperer PLUSIEURS = l\'excellence.' },
                    { question: 'Quelle figure ? "Waterloo ! Waterloo ! Waterloo ! morne plaine !" (Hugo, L\'Expiation)', answer: 'ANAPHORE ("Waterloo" repete 3 fois en debut) + EXCLAMATION + ASYNDETE (pas de liaison entre les repetitions). '
                        + 'La triple repetition créé un effet de lamentation, de coup de marteau. Le nom propre devient un cri de douleur. '
                        + 'L\'anaphore peut porter sur n\'importe quel mot : nom propre, pronom, conjonction. L\'essentiel est la repetition en DEBUT de segment.' },
                    { question: 'Quelle figure ? "Demain, des l\'aube, a l\'heure ou blanchit la campagne, / Je partirai." (Hugo, Les Contemplations)', answer: 'ACCUMULATION de complements circonstanciels de temps ("demain", "des l\'aube", "a l\'heure ou...") + GRADATION (le moment se précisé de plus en plus). '
                        + 'L\'accumulation retarde le verbe principal ("je partirai") : l\'attente est insoutenable, comme le deuil de Hugo pour sa fille Leopoldine. '
                        + 'Le retardement du verbe par l\'accumulation est un procede rhetorique puissant : il créé du SUSPENSE. Le lecteur attend, attend... et le verbe tombe comme un couperet.' },
                    { question: 'Les rappeurs sont les rois de l\'hyperbole. Exemples ?', answer: '"J\'suis le plus grand de tous les temps" (toute la trap), "Ma chaine vaut ton appart" (Booba), "J\'ai plus de flow que l\'ocean" (divers). '
                        + 'L\'hyperbole dans le rap = AFFIRMATION DE SOI. C\'est un heritage du "boasting" (vantardise) qui remonte aux griots africains et au dozen des Afro-Americains. '
                        + 'L\'hyperbole est culturelle : dans le rap, elle est une CONVENTION du genre. L\'exageration n\'est pas un defaut, c\'est une REGLE DU JEU stylistique.' },
                    { question: 'SYNTHESE : Comment distinguer toutes les figures d\'amplification entre elles ?', answer: 'HYPERBOLE = exageration d\'UN element. GRADATION = progression ordonnee (3+ termes). ACCUMULATION = liste surabondante sans ordre. ANAPHORE = repetition en debut. PLEONASME = redondance de sens. '
                        + 'Et les figures d\'attenuation : LITOTE = dire moins pour suggerer PLUS (amplifier). EUPHEMISME = adoucir une réalité PENIBLE (proteger). '
                        + 'Au Bac, maitrise ces distinctions = tu feras la difference avec les autres candidats.' }
                ],
                quiz: [
                    { question: '"Va, je ne te hais point" (Chimene) est :', options: ['Un euphemisme', 'Une litote', 'Une antiphrase', 'Une hyperbole'], correctIndex: 1, explanation: 'Chimene dit MOINS ("je ne te hais point") pour suggerer PLUS ("je t\'aime"). Dire moins pour amplifier = litote.' },
                    { question: 'L\'euphemisme sert a :', options: ['Amplifier un sentiment', 'Adoucir une réalité desagreable', 'Exagerer une idee', 'Dire le contraire'], correctIndex: 1, explanation: 'Euphemisme = remplacer un mot dur par un mot doux. "Il nous a quittes" = il est mort. Intention : PROTEGER.' },
                    { question: 'La difference entre litote et euphemisme :', options: ['Ce sont des synonymes', 'Litote amplifie / Euphemisme adoucit', 'Litote utilise "comme"', 'Euphemisme exagere'], correctIndex: 1, explanation: 'Litote = dire moins pour suggerer PLUS (amplifier). Euphemisme = adoucir une réalité PENIBLE (proteger). Intentions opposees !' },
                    { question: '"Je meurs de faim" est :', options: ['Une litote', 'Un euphemisme', 'Un pleonasme', 'Une hyperbole'], correctIndex: 3, explanation: 'Exageration volontaire (on ne meurt pas reellement). HYPERbole = HYPER exageration.' },
                    { question: 'Une gradation ascendante presente des termes :', options: ['D\'intensite decroissante', 'D\'intensite croissante', 'Synonymes', 'Contradictoires'], correctIndex: 1, explanation: 'Ascendante = du faible au fort (crescendo). "Va, cours, vole !" : chaque terme est plus intense.' },
                    { question: '"Monter en haut" est :', options: ['Une litote', 'Une hyperbole', 'Un pleonasme', 'Une gradation'], correctIndex: 2, explanation: '"Monter" contient déjà "en haut". Repetition inutile de sens = pleonasme.' },
                    { question: '"Un seul etre vous manque et tout est depeuple" (Lamartine) est :', options: ['Une litote', 'Un euphemisme', 'Un pleonasme', 'Une hyperbole'], correctIndex: 3, explanation: '"Tout est depeuple" est une exageration enorme. C\'est une hyperbole qui exprime l\'intensite du manque amoureux.' },
                    { question: '"Il a ete remercie" pour "licencie" est :', options: ['Une litote', 'Un euphemisme', 'Une antiphrase', 'Un paradoxe'], correctIndex: 1, explanation: 'On adoucit la réalité penible du licenciement. Adoucir une réalité dure = euphemisme (pas litote : l\'intention n\'est pas d\'amplifier).' },
                    { question: 'L\'anaphore est :', options: ['Une exageration', 'La repetition d\'un mot en DEBUT de segment', 'Un adoucissement', 'Une gradation'], correctIndex: 1, explanation: 'ANAphore = repetition en DEBUT. "Paris outrage ! Paris brise ! Paris martyrise !" (De Gaulle).' },
                    { question: '"Paris ! Paris outrage ! Paris brise ! Paris martyrise !" (De Gaulle) combine :', options: ['Seulement une anaphore', 'Anaphore + gradation', 'Seulement une gradation', 'Euphemisme + litote'], correctIndex: 1, explanation: 'Anaphore ("Paris" en debut) + gradation (outrage < brise < martyrise = crescendo d\'intensite).' },
                    { question: '"Il n\'est pas indifferent a ses charmes" est :', options: ['Un euphemisme', 'Une litote', 'Une antiphrase', 'Un pleonasme'], correctIndex: 1, explanation: 'Dire "pas indifferent" pour "fou amoureux" = dire MOINS pour suggerer PLUS. C\'est une litote (amplification), pas un euphemisme.' },
                    { question: '"Elle est partie" pour "elle est morte" est :', options: ['Une litote', 'Un euphemisme', 'Une antiphrase', 'Une hyperbole'], correctIndex: 1, explanation: 'On adoucit la réalité de la mort. Intention = PROTEGER la sensibilite, pas amplifier. C\'est un euphemisme.' },
                    { question: 'L\'accumulation se distingue de l\'enumeration par :', options: ['Le nombre de termes', 'L\'intention de SUBMERGER le lecteur', 'La presence d\'un verbe', 'L\'utilisation de "et"'], correctIndex: 1, explanation: 'L\'accumulation est une enumeration DEBORDANTE avec une intention stylistique : creer un effet de masse, de surabondance.' },
                    { question: 'La gradation nécessité au minimum :', options: ['2 termes', '3 termes', '4 termes', '5 termes'], correctIndex: 1, explanation: 'Il faut au moins 3 termes pour percevoir une PROGRESSION d\'intensite. Avec 2 termes, c\'est juste une comparaison ou une opposition.' },
                    { question: 'Quel est l\'effet principal de l\'anaphore dans un discours ?', options: ['Adoucir le propos', 'Creer un rythme de martellement', 'Contredire le sens', 'Exagerer'], correctIndex: 1, explanation: 'L\'anaphore créé un rythme de MARTELLEMENT oratoire. "I have a dream..." / "Moi president..." = effet hypnotique et mobilisateur.' }
                ],
                tips: [
                    'LITOTE vs EUPHEMISME : demande-toi "L\'intention est-elle d\'AMPLIFIER ou d\'ADOUCIR ?" Amplifier = litote. Adoucir = euphemisme.',
                    'L\'hyperbole est PARTOUT dans le langage courant. "Je suis mort de rire", "ca fait mille ans". Repere-la par l\'EXAGERATION.',
                    'La gradation nécessité au moins 3 termes avec une PROGRESSION d\'intensite (croissante ou decroissante).',
                    'L\'anaphore est la figure reine des discours politiques. Elle créé un rythme, une emotion collective, un REFRAIN.',
                    'Accumulation ≠ enumeration : l\'accumulation à une intention de SURABONDANCE, l\'enumeration est neutre.'
                ],
                pitfalls: [
                    'PIEGE n°1 : confondre litote et euphemisme. Litote = dire moins pour exprimer PLUS. Euphemisme = adoucir une réalité PENIBLE. Intentions OPPOSEES.',
                    'Ne confonds pas accumulation et gradation : l\'accumulation n\'a pas d\'ordre d\'intensite. La gradation SI.',
                    'Le pleonasme n\'est pas toujours une faute : en litterature, il peut etre expressif ("je l\'ai vu de mes yeux vu").',
                    'Ne confonds pas anaphore et simple repetition. L\'anaphore repete specifiquement en DEBUT de segment (vers, phrase, proposition).',
                    '"Je meurs de faim" = hyperbole, PAS litote. On EXAGERE (hyperbole), on ne dit pas MOINS (litote).'
                ]
            },
            {
                id: 'construction',
                title: 'Figures de construction',
                icon: '\uD83C\uDFD7\uFE0F',
                content: '<h3>Les figures de construction : l\'architecture du langage</h3>'
                    + '<p>Ces figures jouent sur la STRUCTURE de la phrase : ordre des mots, repetitions, suppressions. Elles sont les outils des grands orateurs et des poetes du rythme.</p>'
                    + '<h4>Les 3 grandes repetitions</h4>'
                    + '<p><strong>ANAPHORE = repetition au DEBUT</strong> (ANA = avant)<br/>'
                    + '<strong>EPIPHORE = repetition à la FIN</strong> (EPI = apres, comme EPIlogue)<br/>'
                    + '<strong>ANADIPLOSE = le dernier mot REBONDIT au debut de la phrase suivante</strong></p>'
                    + '<h4>Les figures de rythme</h4>'
                    + '<ul>'
                    + '<li><strong>Parallelisme</strong> : repetition de la même STRUCTURE syntaxique (pas les memes mots)</li>'
                    + '<li><strong>Chiasme</strong> : structure croisee ABBA (inversion en miroir)</li>'
                    + '<li><strong>Asyndete</strong> : SUPPRESSION des mots de liaison → rythme rapide</li>'
                    + '<li><strong>Polysyndete</strong> : MULTIPLICATION des mots de liaison → rythme lent et solennel</li>'
                    + '<li><strong>Ellipse</strong> : suppression de mots normalement necessaires</li>'
                    + '<li><strong>Anacoluthe</strong> : rupture dans la construction syntaxique</li>'
                    + '</ul>'
                    + '<h4>En poesie</h4>'
                    + '<ul>'
                    + '<li><strong>Enjambement</strong> : la phrase deborde sur le vers suivant</li>'
                    + '<li><strong>Rejet</strong> : un element court est rejete au debut du vers suivant</li>'
                    + '<li><strong>Contre-rejet</strong> : un element commence à la fin du vers precedent</li>'
                    + '</ul>'
                    + '<h4>Tableau</h4>'
                    + '<table border="1" cellpadding="4"><tr><th>Figure</th><th>Effet principal</th></tr>'
                    + '<tr><td>Anaphore</td><td>Martellement, insistance</td></tr>'
                    + '<tr><td>Parallelisme</td><td>Equilibre, symetrie</td></tr>'
                    + '<tr><td>Chiasme</td><td>Miroir, renversement</td></tr>'
                    + '<tr><td>Asyndete</td><td>Rapidite, acceleration</td></tr>'
                    + '<tr><td>Polysyndete</td><td>Ralentissement, solennite</td></tr>'
                    + '<tr><td>Enjambement</td><td>Debordement, fluidite</td></tr>'
                    + '<tr><td>Rejet</td><td>Mise en relief d\'un mot</td></tr>'
                    + '</table>',
                flashcards: [
                    // --- ANAPHORE ---
                    { question: 'Quelle est la difference entre anaphore et epiphore ?', answer: 'ANAPHORE = repetition en DEBUT de phrase/vers : "Paris outrage ! Paris brise !" '
                        + 'EPIPHORE = repetition en FIN de phrase/vers : "il n\'y a pas de justice, dit l\'un. Il n\'y a pas de justice, dit l\'autre." (La même expression revient en fin.) '
                        + 'TRUC : ANA = ANAvant = DEBUT. EPI = EPIlogue = FIN. Retiens ces deux racines grecques !' },
                    { question: 'Quelle est la difference entre anaphore et parallelisme ?', answer: 'ANAPHORE = repetition du MEME MOT en debut : "Paris outrage, Paris brise" (le mot "Paris" est identique). '
                        + 'PARALLELISME = repetition de la même STRUCTURE : "l\'un chante, l\'autre danse" (meme schema sujet-verbe, mots DIFFERENTS). '
                        + 'Anaphore = même MOT. Parallelisme = même ARCHITECTURE. C\'est une distinction fondamentale au Bac.' },
                    // --- PARALLELISME ---
                    { question: 'Quelle figure ? "Ce que l\'on concoit bien s\'enonce clairement, / Et les mots pour le dire arrivent aisement." (Boileau)', answer: 'PARALLELISME. Les deux vers ont la même structure : proposition + complement de manière en "-ment" (clairement / aisement). '
                        + '"Concevoir bien / enoncer clairement" repond a "mots pour le dire / arrivent aisement". La forme illustre le fond : la clarte de la pensee produit la clarte du style. '
                        + 'Le parallelisme construit deux segments en MIROIR avec la même architecture. C\'est la figure de l\'EQUILIBRE et de la SYMETRIE.' },
                    { question: 'Quelle figure ? "A vaincre sans peril, on triomphe sans gloire." (Corneille, Le Cid)', answer: 'PARALLELISME. "A vaincre sans peril" / "on triomphe sans gloire" = même structure (verbe + "sans" + nom). Les deux moities se repondent symetriquement. '
                        + 'L\'effet est une sentence morale equilibree, facile a retenir (et c\'est voulu). '
                        + 'Le parallelisme créé des formules MEMORABLES. C\'est pour ca que les proverbes et les maximes l\'utilisent : la symetrie aide la memoire.' },
                    // --- CHIASME APPROFONDI ---
                    { question: 'CHIASME approfondi : quelle est la difference entre chiasme et parallelisme ?', answer: 'PARALLELISME = AB / AB (meme structure repetee). "L\'un chante, l\'autre danse" = sujet-verbe / sujet-verbe. '
                        + 'CHIASME = AB / BA (structure INVERSEE). "Manger pour vivre / vivre pour manger" = A-B / B-A. Le chiasme est un parallelisme CROISE. '
                        + 'TRUC : le parallelisme est un MIROIR (|), le chiasme est un X. Parallelisme = symetrie. Chiasme = croisement.' },
                    { question: 'Quelle figure ? "Il faut bien que je vous porte puisque vous ne pouvez pas me supporter." (Sacha Guitry)', answer: 'CHIASME semantique. "Porter" (sens physique → sens moral) / "supporter" (sens moral → sens physique). Les sens se croisent. '
                        + 'C\'est aussi un JEU DE MOTS : le chiasme joue sur la polysemie de "porter" et "supporter". L\'humour nait du croisement. '
                        + 'Le chiasme peut etre LEXICAL (les memes mots s\'inversent) ou SEMANTIQUE (les sens s\'inversent). Le chiasme semantique est plus subtil et plus difficile a reperer.' },
                    // --- ASYNDETE / POLYSYNDETE ---
                    { question: 'Quelle figure ? "Je vins, je vis, je vainquis." (Cesar)', answer: 'ASYNDETE (pas de "et" entre les propositions) + GRADATION (venir < voir < vaincre) + ANAPHORE ("je"). '
                        + 'L\'asyndete créé un rythme FOUDROYANT : trois actions, pas de pause, la victoire semble instantanee. Cesar ecrase toute nuance. '
                        + 'ASYNDETE = SUPPRESSION des conjonctions. L\'effet est la RAPIDITE, l\'acceleration, l\'efficacite brutale.' },
                    { question: 'Quelle figure ? "Et le soir, et la nuit, et l\'ombre, et le silence." (Hugo)', answer: 'POLYSYNDETE. Le "et" est repete avant CHAQUE terme. La polysyndete MULTIPLIE les mots de liaison. '
                        + 'L\'effet est un RALENTISSEMENT solennel : chaque element est isole, souligne, sacralise. Le rythme devient grave et lent. '
                        + 'POLYsyndete = POLYvalent = BEAUCOUP de liaisons. L\'inverse de l\'asyndete (A-SYNdete = SANS liaison). Retiens-les en PAIRE.' },
                    { question: 'Quelle est la difference d\'EFFET entre asyndete et polysyndete ?', answer: 'ASYNDETE = suppression des liaisons → RAPIDITE, urgence, efficacite. "Je vins, je vis, je vainquis" = blitz. '
                        + 'POLYSYNDETE = multiplication des liaisons → RALENTISSEMENT, solennite, ampleur. "Et le soir, et la nuit, et l\'ombre" = contemplation. '
                        + 'L\'asyndete ACCELERE, la polysyndete FREINE. Au Bac, analysez toujours l\'EFFET sur le rythme quand vous reperez ces figures.' },
                    // --- ELLIPSE ---
                    { question: 'Quelle figure ? "Moi, partir ? Jamais !"', answer: 'ELLIPSE. Plusieurs mots grammaticalement necessaires sont supprimes : "Est-ce que je vais" avant "partir" et "je ne partirai" avant "jamais". '
                        + 'L\'ellipse créé un style telegraphique, vif, emotionnel. La colere n\'a pas le temps de faire des phrases completes. '
                        + 'L\'ellipse = suppression de mots qu\'on peut RECONSTRUIRE mentalement. Si la phrase est incomplete mais comprehensible, c\'est une ellipse.' },
                    { question: 'Quelle figure ? "La nuit, la pluie. Un taxi. L\'aeroport." (style cinematographique)', answer: 'ELLIPSE (phrases nominales sans verbe) + ASYNDETE (aucune liaison). Le style est TELEGRAPHIQUE, presque un storyboard de cinema. '
                        + 'L\'ellipse créé un rythme haletant et visuel : on voit les images comme des plans de film. Modiano, Duras, Echenoz excellent dans ce style. '
                        + 'L\'ellipse est la figure du CINEMA et du roman moderne. Supprimez tout le superflu : ne reste que l\'essentiel.' },
                    // --- ANACOLUTHE ---
                    { question: 'Quelle figure ? "Le nez de Cleopatre, s\'il eut ete plus court, toute la face de la terre aurait change." (Pascal)', answer: 'ANACOLUTHE. Le sujet change en cours de phrase : on commence avec "le nez de Cleopatre" et on termine avec "la face de la terre" comme sujet. La phrase "deraille" syntaxiquement. '
                        + 'L\'anacoluthe créé un effet de surprise, de rupture. Ici, le saut du nez au monde illustre le passage de l\'anecdote a l\'universel. '
                        + 'ANACOLUTHE = la phrase part dans une direction et finit dans une autre. C\'est un "faux accident" de syntaxe, souvent delibere.' },
                    // --- ENJAMBEMENT, REJET, CONTRE-REJET ---
                    { question: 'En poesie : quelle difference entre enjambement, rejet et contre-rejet ?', answer: 'ENJAMBEMENT = la phrase deborde sur le vers suivant sans pause. "Demain des l\'aube, a l\'heure ou blanchit la campagne, / Je partirai." '
                        + 'REJET = un element COURT est rejete au debut du vers suivant pour le mettre en valeur. "Elle avait pris ce pli dans son age enfantin / De venir dans ma chambre un peu chaque matin." (Hugo) — "de venir" au debut du v.2 = rejet. '
                        + 'CONTRE-REJET = un element COMMENCE à la fin du vers precedent. L\'element debute la OU on ne l\'attend pas. '
                        + 'Rejet = mot pousse en AVANT (debut du vers suivant). Contre-rejet = mot ANTICIPE (fin du vers precedent). Les deux creent un EFFET DE MISE EN RELIEF.' },
                    { question: 'Quelle figure ? "Et la tigresse epouvantable d\'Hyrcanie / Dit a ses petits..." (Hugo)', answer: 'REJET. "Dit" est rejete au debut du vers suivant. Ce mot court, isole en debut de vers, prend un relief dramatique. '
                        + 'Le rejet créé un SUSPENSE : le vers s\'arrete sur "Hyrcanie", et on attend... "dit" tombe comme un couperet. '
                        + 'Au Bac, quand vous analysez de la poesie, TOUJOURS regarder les enjambements et rejets. Ils mettent en valeur le mot rejete. C\'est un outil d\'analyse qui impressionne les correcteurs.' },
                    // --- ANADIPLOSE ---
                    { question: 'Qu\'est-ce que l\'anadiplose ? Donne un exemple memorisable.', answer: 'L\'anadiplose reprend en DEBUT de phrase le mot qui TERMINAIT la phrase precedente. '
                        + '"La vie est belle. Belle comme un matin d\'ete." Le mot "belle" fait le pont, comme un echo qui rebondit. '
                        + 'En gros : ANADIPLOSE = le dernier mot REBONDIT au debut, comme une balle de ping-pong. L\'anadiplose créé un enchainement logique, une progression naturelle.' },
                    { question: 'Quelle figure ? "Plus je la vois, plus je l\'admire ; plus je l\'admire, plus je l\'aime."', answer: 'ANADIPLOSE ("l\'admire" termine le premier segment et ouvre le second) + GRADATION (voir < admirer < aimer) + PARALLELISME ("plus je... plus je..."). '
                        + 'L\'anadiplose créé un enchainement LOGIQUE : chaque sentiment engendre le suivant, comme des maillons d\'une chaine. '
                        + 'L\'anadiplose est la figure de l\'ENCHAINEMENT et de la CONSEQUENCE. Elle montre qu\'une idee mene NATURELLEMENT à la suivante.' },
                    // --- FIGURES DE CONSTRUCTION EN POESIE ---
                    { question: 'Quelle figure ? Hugo ecrit "Jeanne etait au pain sec dans le cabinet noir" et le vers suivant commence par "Pour un crime ?" — Analyse.', answer: 'REJET. "Pour un crime ?" est rejete en debut de vers suivant, ce qui isole la question et lui donne un poids enorme. L\'indignation eclate. '
                        + 'Hugo s\'adresse a sa petite-fille punie (pour avoir donne son gateau à un chat) : le "crime" est ironique et tendre. '
                        + 'Le rejet est un outil de MISE EN RELIEF. Le mot rejete est isole, donc surexpose. Au Bac, repère QUEL mot est rejete et explique POURQUOI il est mis en valeur.' },
                    { question: 'EXERCICE : "Tel est pris qui croyait prendre." (La Fontaine) — Quelles figures ?', answer: 'CHIASME conceptuel (celui qui croyait attraper est finalement attrape : schema d\'inversion). '
                        + 'C\'est aussi une SENTENCE (vérité morale exprimee en une formule frappante). La forme en miroir illustre le RETOURNEMENT de situation. '
                        + 'La Fontaine est un maitre des figures de construction. Ses morales sont construites comme des mecanismes d\'horlogerie.' },
                    { question: 'Quelle figure ? "Toi et moi. Moi et toi. Toujours."', answer: 'CHIASME : "Toi(A) et moi(B) / Moi(B) et toi(A)" = ABBA. L\'inversion des pronoms souligne la reciprocite du lien amoureux. '
                        + '"Toujours" = ELLIPSE (phrase sans verbe). La concision maximale exprime l\'evidence absolue. '
                        + 'Le chiasme est souvent utilise pour exprimer la RECIPROCITE amoureuse. L\'inversion des termes montre que la relation fonctionne dans les deux sens.' },
                    // --- FIGURES MIXTES ---
                    { question: 'Quelle figure ? "La chair est triste, helas ! et j\'ai lu tous les livres." (Mallarme, Brise marine)', answer: 'ASYNDETE logique : Mallarme juxtapose deux constats ("la chair est triste" / "j\'ai lu tous les livres") sans lien logique explicite. Le lecteur doit reconstruire le lien. '
                        + 'C\'est le desenchantement total : les plaisirs du corps ET de l\'esprit sont epuises. L\'asyndete créé un VIDE entre les deux constats, aussi vide que l\'ame du poete. '
                        + 'L\'asyndete n\'est pas qu\'une suppression de "et" : elle peut aussi supprimer le lien LOGIQUE. L\'absence de connecteur oblige le lecteur a PENSER le rapport entre les idees.' },
                    { question: 'Quelle figure ? "Mon fils ! Mon cher fils ! Mon fils que j\'aime plus que tout !"', answer: 'ANAPHORE ("Mon fils" en debut) + GRADATION (l\'expression de l\'amour s\'intensifie a chaque repetition) + EXCLAMATION. '
                        + 'La repetition traduit l\'emotion brute : le langage begaie sous la pression du sentiment. '
                        + 'L\'anaphore dans l\'emotion = le langage tourne en boucle. La repetition traduit l\'OBSESSION, l\'incapacite a passer a autre chose.' },
                    { question: 'Quelle figure ? "Que diable allait-il faire dans cette galere ?" (Moliere, Les Fourberies de Scapin)', answer: 'EPIPHORE (cette replique est repetee IDENTIQUEMENT plusieurs fois dans la scene — elle revient comme un refrain comique en position de chute). '
                        + 'L\'effet est comique : le personnage est obnubile par la même question, il n\'arrive pas a s\'en detacher. C\'est un gag de repetition. '
                        + 'L\'epiphore dans la comedie = un gag qui REVIENT. Dans la tragedie = une obsession. La même figure, deux effets selon le registre.' },
                    { question: 'Dans le slam, Grand Corps Malade utilise beaucoup le parallelisme. Pourquoi ?', answer: 'Le parallelisme créé un RYTHME regulier ideal pour l\'oralite. Comme le slam est PARLE et ECOUTE (pas lu), le parallelisme aide l\'auditeur a suivre la structure. '
                        + 'Exemples : "Je viens de la ou...", "Je viens de la ou..." Chaque vers reprend la même structure. C\'est à la fois une ANAPHORE et un PARALLELISME. '
                        + 'Les figures de construction sont des figures de l\'ORALITE. Le parallelisme, l\'anaphore, la gradation sont faits pour etre ENTENDUS. C\'est pour ca qu\'on les trouve dans le slam, le rap, le discours politique.' },
                    { question: 'Quelle figure ? "Ni or, ni diamant, ni perle, ni rubis — rien ne valait ses yeux."', answer: 'POLYSYNDETE implicite ("ni... ni... ni... ni...") + ACCUMULATION (liste de pierres precieuses) + GRADATION possible (or < diamant < perle < rubis) + HYPERBOLE. '
                        + 'L\'accumulation de pierres precieuses créé un effet de surabondance, et tout est balaye par le "rien ne valait". Le contraste est saisissant. '
                        + 'Les "ni... ni..." repetitifs fonctionnent comme une polysyndete : ils ralentissent le rythme et insistent sur chaque element avant la chute.' },
                    { question: 'EXERCICE : Dans "A vaincre sans peril on triomphe sans gloire" (Corneille), identifie TOUTES les figures de construction.', answer: 'PARALLELISME ("A vaincre sans peril" // "on triomphe sans gloire" = même structure verbe + sans + nom). '
                        + 'SENTENCE (vérité morale universelle en une formule frappante). ANTITHESE ("peril" vs "gloire" — opposition des valeurs). '
                        + 'Ce vers concentre 3 figures. Au Bac, un bon commentaire analyse la SUPERPOSITION des figures : le parallelisme SOUTIENT l\'antithese, qui NOURRIT la sentence morale.' }
                ],
                quiz: [
                    { question: 'L\'anaphore est une repetition :', options: ['En fin de phrase', 'En DEBUT de phrase ou de vers', 'Au milieu', 'D\'un son'], correctIndex: 1, explanation: 'ANAphore = DEBUT. ANA = ANAvant. "Paris outrage ! Paris brise !" = repetition de "Paris" en debut.' },
                    { question: 'L\'epiphore est une repetition :', options: ['En debut de vers', 'Au milieu', 'En FIN de phrase ou de vers', 'D\'un son consonne'], correctIndex: 2, explanation: 'EPIphore = FIN. EPI = comme EPIlogue = fin. L\'anaphore est l\'inverse.' },
                    { question: 'Le parallelisme consiste a repeter :', options: ['Le même mot', 'La même STRUCTURE syntaxique', 'Le même son', 'Le même sens'], correctIndex: 1, explanation: 'Parallelisme = même STRUCTURE, pas forcement les memes mots. "L\'un chante, l\'autre danse" = sujet + verbe // sujet + verbe.' },
                    { question: 'Le chiasme suit le schema :', options: ['AABB', 'ABAB', 'ABBA', 'ABCD'], correctIndex: 2, explanation: 'ABBA = croisement. "Manger(A) pour vivre(B) / vivre(B) pour manger(A)." Chi en grec = X = croisement.' },
                    { question: 'L\'asyndete consiste a :', options: ['Multiplier les liaisons', 'SUPPRIMER les mots de liaison', 'Repeter un mot', 'Inverser les mots'], correctIndex: 1, explanation: 'Asyndete = suppression des conjonctions (et, mais, ou). "Je vins, je vis, je vainquis." Effet : rapidite.' },
                    { question: 'La polysyndete est le contraire de :', options: ['L\'anaphore', 'L\'ellipse', 'L\'asyndete', 'L\'hyperbate'], correctIndex: 2, explanation: 'Polysyndete = multiplication des liaisons. Asyndete = suppression. Ce sont des CONTRAIRES.' },
                    { question: 'Le "nez de Cleopatre" de Pascal contient :', options: ['Une anaphore', 'Une anacoluthe', 'Un pleonasme', 'Une epiphore'], correctIndex: 1, explanation: 'Le sujet change en cours de phrase (du nez à la face de la terre). Rupture syntaxique = anacoluthe.' },
                    { question: 'L\'anadiplose consiste a :', options: ['Repeter un mot en debut', 'Reprendre en DEBUT le dernier mot de la phrase precedente', 'Supprimer un mot', 'Inverser la phrase'], correctIndex: 1, explanation: 'Anadiplose : le mot de FIN rebondit au DEBUT suivant. "Belle. Belle comme un matin." Le mot fait le PONT.' },
                    { question: 'En poesie, le REJET est :', options: ['Un mot repousse au vers suivant', 'Un mot repete', 'Un mot supprime', 'Un vers entier repete'], correctIndex: 0, explanation: 'Un element court est REJETE en debut du vers suivant pour le mettre en valeur. Ca créé un effet de surprise et de mise en relief.' },
                    { question: 'L\'enjambement se produit quand :', options: ['Deux vers riment', 'La phrase deborde sur le vers suivant', 'Un mot est repete', 'La phrase est incomplete'], correctIndex: 1, explanation: 'La phrase continue au-dela de la fin du vers et deborde sur le suivant. L\'enjambement créé un effet de fluidite ou de debordement.' },
                    { question: 'Difference entre parallelisme et chiasme :', options: ['Aucune', 'Parallelisme = AB/AB, Chiasme = AB/BA', 'Le chiasme est plus court', 'Le parallelisme utilise des sons'], correctIndex: 1, explanation: 'Parallelisme = structure repetee (AB/AB). Chiasme = structure CROISEE (AB/BA). Le chiasme est un parallelisme inverse.' },
                    { question: '"Je vins, je vis, je vainquis" (Cesar) combine :', options: ['Asyndete + gradation + anaphore', 'Polysyndete + litote', 'Euphemisme + oxymore', 'Epiphore + ellipse'], correctIndex: 0, explanation: 'Asyndete (pas de liaison) + gradation (venir < voir < vaincre) + anaphore du "je". Le style de Cesar = foudre.' },
                    { question: 'L\'ellipse est :', options: ['L\'ajout de mots inutiles', 'La SUPPRESSION de mots normalement necessaires', 'La repetition d\'un mot', 'L\'inversion de la phrase'], correctIndex: 1, explanation: 'Ellipse = suppression. "Moi, partir ? Jamais !" = phrases incompletes mais comprehensibles. Effet : concision, vivacite.' },
                    { question: 'Le slam utilise beaucoup le parallelisme car :', options: ['C\'est facile a ecrire', 'Le rythme regulier aide l\'AUDITEUR a suivre', 'C\'est une obligation', 'Ca rime mieux'], correctIndex: 1, explanation: 'Les figures de construction sont des figures de l\'ORALITE. Le parallelisme créé un rythme regulier ideal pour l\'ecoute.' },
                    { question: 'La difference entre anaphore et parallelisme au Bac :', options: ['Ce sont des synonymes', 'Anaphore = même MOT en debut / Parallelisme = même STRUCTURE', 'Anaphore = sons / Parallelisme = sens', 'Aucune difference utile'], correctIndex: 1, explanation: 'Anaphore = le MEME MOT repete en debut. Parallelisme = la même ARCHITECTURE avec des mots differents. Distinction fondamentale.' }
                ],
                tips: [
                    'ANA = ANAvant = DEBUT (anaphore). EPI = EPIlogue = FIN (epiphore). Retiens ces racines grecques.',
                    'Anaphore = même MOT. Parallelisme = même STRUCTURE. Chiasme = structure CROISEE (ABBA). Ce sont les 3 soeurs de la construction.',
                    'Asyndete = rapidite (suppression des liaisons). Polysyndete = lenteur (multiplication des liaisons). Retiens-les en PAIRE.',
                    'En poesie, TOUJOURS analyser les enjambements et rejets. Le mot rejete est MIS EN VALEUR. C\'est un outil d\'analyse qui impressionne.',
                    'Le chiasme est un "parallelisme croise" : au lieu de AB/AB, c\'est AB/BA. Dessine-le en X pour le visualiser.'
                ],
                pitfalls: [
                    'Ne confonds PAS anaphore et epiphore : anaphore = debut, epiphore = fin.',
                    'Le parallelisme n\'est PAS une anaphore. L\'anaphore repete un MOT, le parallelisme repete une STRUCTURE.',
                    'L\'asyndete n\'est pas juste une phrase courte : c\'est specifiquement la SUPPRESSION des mots de liaison la ou on les attendrait.',
                    'Enjambement ≠ rejet : l\'enjambement est un debordement fluide, le rejet isole UN MOT COURT en debut du vers suivant.',
                    'L\'anacoluthe n\'est pas une faute de grammaire : en litterature, c\'est un CHOIX stylistique qui créé un effet de surprise.'
                ]
            },
            {
                id: 'son',
                title: 'Figures de sonorite',
                icon: '\uD83C\uDFB5',
                content: '<h3>Les figures de sonorite : quand les mots font de la musique</h3>'
                    + '<p>En poesie, les SONS comptent autant que le SENS. Les figures de sonorite creent une musique qui RENFORCE le message. Un bon poete choisit ses mots autant pour leur son que pour leur sens.</p>'
                    + '<h4>La distinction fondamentale</h4>'
                    + '<p><strong>ALLITERATION = repetition d\'un son CONSONNE</strong> (s, r, l, t, p, k, m, n...)<br/>'
                    + '<strong>ASSONANCE = repetition d\'un son VOYELLE</strong> (a, e, i, o, u, ou, on, an...)</p>'
                    + '<h4>Truc pour ne plus confondre</h4>'
                    + '<p>aLLiteration = Les consonnes (L est une consonne). assOnance = vOyelles (O est une voyelle).</p>'
                    + '<h4>L\'effet des sons</h4>'
                    + '<ul>'
                    + '<li><strong>[s]</strong> = sifflement, douceur ou menace (serpent, silence)</li>'
                    + '<li><strong>[r]</strong> = rudesse, violence, force, grondement</li>'
                    + '<li><strong>[l]</strong> = liquidite, douceur, fluidite</li>'
                    + '<li><strong>[k], [t], [p]</strong> = durete, percussion, choc (consonnes occlusives)</li>'
                    + '<li><strong>[m], [n]</strong> = nasalite, douceur, bercement</li>'
                    + '<li><strong>[on], [an]</strong> = lourdeur, gravite, solennite</li>'
                    + '<li><strong>[i]</strong> = aiguite, cri, nettete</li>'
                    + '<li><strong>[ou]</strong> = profondeur, douceur</li>'
                    + '</ul>'
                    + '<h4>Autres figures de son</h4>'
                    + '<ul>'
                    + '<li><strong>Paronomase</strong> : rapprochement de mots qui se RESSEMBLENT par le son ("qui se ressemble s\'assemble")</li>'
                    + '<li><strong>Harmonie imitative</strong> : le son IMITE la réalité decrite (onomatopee et au-dela)</li>'
                    + '<li><strong>Onomatopee</strong> : mot qui imite un bruit ("boum", "crac", "tic-tac")</li>'
                    + '</ul>',
                flashcards: [
                    // --- ALLITERATION ---
                    { question: 'Quelle figure ? "Pour qui sont ces serpents qui sifflent sur vos tetes ?" (Racine, Andromaque)', answer: 'ALLITERATION en [s]. Le son "s" se repete : serpents, sifflent, sur, ces, vos, tetes. '
                        + 'L\'alliteration IMITE le sifflement des serpents : le son renforce le sens. C\'est l\'exemple le plus celebre d\'harmonie imitative. '
                        + 'En gros : aLLiteration = Les consonnes (L est une consonne). L\'alliteration en [s] evoque le sifflement, le murmure, le secret, le danger.' },
                    { question: 'Quels effets produit une alliteration en [r] ? Donne un exemple.', answer: 'Le [r] evoque la RUDESSE, la VIOLENCE, le GRONDEMENT, la COLERE. C\'est la consonne la plus dure du francais. '
                        + 'Exemple : "L\'horreur des combats sur la terre rugueuse" = l\'alliteration en [r] (horreur, combats, terre, rugueuse) rend le vers violent et rude a l\'oreille. '
                        + 'Au Bac, ne dis JAMAIS juste "il y à une alliteration en [r]". Dis TOUJOURS l\'EFFET : "L\'alliteration en [r] créé un effet de rudesse et de violence qui renforce l\'horreur du combat."' },
                    { question: 'Quels effets produit une alliteration en [l] ? Et en [m] ?', answer: '[L] = LIQUIDITE, DOUCEUR, FLUIDITE. "Les lilas et les libellules" = l\'alliteration en [l] glisse comme de l\'eau. '
                        + '[M] = DOUCEUR, BERCEMENT, MURMURE. "Ma mere me murmurait des mots" = l\'alliteration en [m] evoque la tendresse, le cocon. '
                        + 'Les consonnes douces (l, m, n) creent des effets de douceur. Les consonnes dures (r, k, t, p) creent des effets de violence. Le poete choisit ses sons en fonction du message.' },
                    { question: 'Quels effets produit une alliteration en [k] ou [t] ?', answer: '[K] et [T] sont des OCCLUSIVES : le son s\'arrete brusquement. Elles evoquent le CHOC, la CASSURE, la BRUTALITE. '
                        + 'Exemple : "Le craquement, le choc, le fracas du combat" = les [k] claquent comme des coups. '
                        + 'Les occlusives (p, t, k, b, d, g) bloquent l\'air puis le relachent : elles imitent des COUPS. Les fricatives (s, f, ch, v) font couler l\'air : elles imitent des SOUFFLES.' },
                    // --- ASSONANCE ---
                    { question: 'Quelle figure ? "Les sanglots longs / Des violons / De l\'automne." (Verlaine, Chanson d\'automne)', answer: 'ASSONANCE en [on]. Le son voyelle "on" revient : sanglots, longs, violons, automne. '
                        + 'L\'assonance en [on] créé une musicalite MELANCOLIQUE, un bercement triste. Le son nasal [on] est grave, lourd, comme un glas. Verlaine fait ENTENDRE la tristesse. '
                        + 'En gros : assOnance = vOyelles (les deux ont un O). L\'assonance en [on] ou [an] = gravite, melancolie. En [i] = aiguite, nettete. En [ou] = profondeur.' },
                    { question: 'Quelle figure ? "Je fais souvent ce reve etrange et penetrant." (Verlaine, Mon reve familier)', answer: 'ASSONANCE en [an]/[en]. Les sons nasaux reviennent : souvent, reve, etrange, penetrant. '
                        + 'L\'assonance en [an] créé un effet d\'ENVELOPPEMENT, de reve, de mystère. Le vers baigne dans une sonorite cotonneuse, comme un souvenir flou. '
                        + 'Verlaine est le MAITRE des assonances. Sa poesie vise "la musique avant toute chose" (Art poetique). Chaque vers est compose comme une melodie.' },
                    // --- DISTINCTION ALLITERATION/ASSONANCE ---
                    { question: 'Comment ne JAMAIS confondre alliteration et assonance ?', answer: 'ALLITERATION = repetition d\'un son CONSONNE (s, r, l, t, p, k, m, n, b, d, g, f, ch, v...) '
                        + 'ASSONANCE = repetition d\'un son VOYELLE (a, e, i, o, u, ou, on, an, in, eu...) '
                        + 'TRUC IMPARABLE : aLLiteration = L = consonne. assOnance = O = voyelle. Si le son repete est une VOYELLE → assonance. Si c\'est une CONSONNE → alliteration. C\'est MECANIQUE.' },
                    // --- PARONOMASE ---
                    { question: 'Quelle figure ? "Qui se ressemble s\'assemble."', answer: 'PARONOMASE. "Ressemble" et "assemble" se ressemblent par le SON mais ont des SENS differents. La proximite sonore créé un lien de sens. '
                        + 'La paronomase rapproche des mots PROCHES phonetiquement pour suggerer un lien entre les idees. '
                        + 'ASTUCE : paronomase = des mots qui SONNENT pareil mais ne VEULENT PAS dire la même chose. Quand deux mots proches par le son sont accoles, cherche la paronomase.' },
                    { question: 'Quelle figure ? "Science sans conscience n\'est que ruine de l\'ame." (Rabelais)', answer: 'PARONOMASE. "Science" et "conscience" se ressemblent par le son mais different par le sens (savoir vs morale). '
                        + 'La proximite sonore suggere que ces deux concepts DEVRAIENT aller ensemble. La paronomase créé un lien sonore qui renforce le lien logique. '
                        + 'Rabelais montre que la paronomase peut etre un ARGUMENT : la ressemblance des mots plaide pour la reunion des idees. C\'est une figure de persuasion.' },
                    { question: 'Quelle figure ? "Il n\'y a pas d\'amour, il n\'y a que des preuves d\'amour." (Pierre Reverdy)', answer: 'EPANORTHOSE (correction de sa propre parole) + PARONOMASE entre "amour" et "preuves d\'amour" + ANTITHESE ("pas d\'amour" vs "preuves d\'amour"). '
                        + 'Reverdy corrige sa première affirmation pour la nuancer : l\'amour n\'existe pas en abstraction, seulement dans les ACTES. '
                        + 'L\'epanorthose (correction) est une figure qui simule la PENSEE EN TRAIN DE SE FAIRE. Elle donne une impression de sincérité et de reflexion.' },
                    // --- HARMONIE IMITATIVE ---
                    { question: 'Qu\'est-ce que l\'harmonie imitative ? En quoi differe-t-elle de l\'onomatopee ?', answer: 'L\'HARMONIE IMITATIVE : le SON de tout un passage imite la REALITE decrite. "Pour qui sont ces serpents qui sifflent..." = le [s] imite le sifflement. '
                        + 'L\'ONOMATOPEE : un MOT UNIQUE imite un bruit. "Boum", "crac", "tic-tac". '
                        + 'L\'onomatopee est un MOT. L\'harmonie imitative est un EFFET d\'ensemble sur plusieurs mots. L\'harmonie imitative est plus subtile et plus litteraire.' },
                    { question: 'Quelle figure ? "L\'onde qui roule en volutes de cristal murmure une chanson douce."', answer: 'HARMONIE IMITATIVE + ALLITERATION en [l] (onde, roule, volutes, cristal, murmure) + ASSONANCE en [ou] (roule, douce). '
                        + 'Les sons [l] et [ou] evoquent la FLUIDITE et la DOUCEUR de l\'eau. Le vers coule comme la riviere qu\'il decrit. '
                        + 'L\'harmonie imitative est le SOMMET de l\'art poetique : le SON DEVIENT le SENS. Le vers ne parle pas SEULEMENT de l\'eau, il EST de l\'eau.' },
                    // --- EFFET DES SONS ---
                    { question: 'Au Bac, comment analyser une figure de sonorite ? Quelle est la METHODE ?', answer: 'METHODE en 3 etapes : 1) IDENTIFIER le son repete (consonne → alliteration, voyelle → assonance). '
                        + '2) NOMMER le son entre crochets : [s], [r], [on], [i]... '
                        + '3) ANALYSER l\'EFFET : quel rapport entre le son et le sens du texte ? Le son renforce-t-il l\'idee de douceur, violence, tristesse, mouvement ? '
                        + 'FORMULE BAC : "L\'alliteration en [son] créé un effet de [qualité] qui renforce [le sens du passage]." Ex : "L\'alliteration en [s] créé un effet de sifflement qui renforce la menace des serpents."' },
                    { question: 'Quelle figure ? "Boum ! Crac ! Tic-tac ! Splash !"', answer: 'ONOMATOPEES. Chaque mot IMITE un bruit reel : "boum" = explosion, "crac" = cassure, "tic-tac" = horloge, "splash" = eclaboussure. '
                        + 'Les onomatopees varient selon les langues : "cocorico" (francais) vs "cock-a-doodle-doo" (anglais) vs "kikeriki" (allemand). '
                        + 'L\'onomatopee est la figure la plus INTUITIVE : le mot sonne comme ce qu\'il désigné. Mais attention, elle est RARE dans la poesie serieuse. L\'harmonie imitative est plus subtile.' },
                    // --- SON ET RAP ---
                    { question: 'Le rap francais utilise massivement les figures de son. Exemples ?', answer: 'PARONOMASES : "J\'suis dans l\'arene, plein d\'adrenaline" (arene/adrenaline). ALLITERATIONS : "Rime riche, rythme royal" ([r]). '
                        + 'Le rap pousse la RIME au-dela de la fin du vers : rimes internes, rimes multisyllabiques, rimes embrassees dans le même vers. '
                        + 'Le rap est probablement le genre CONTEMPORAIN le plus riche en figures de sonorite. Si tu veux t\'entrainer a reperer alliterations et paronomases, ecoute du rap avec les lyrics sous les yeux.' },
                    { question: 'Quelle figure ? "Affreux, sale et mechant" / "Beau, riche et celebre" — Y a-t-il une figure de son ?', answer: 'Pas de figure de sonorite ici, mais un RYTHME TERNAIRE (3 elements). Le rythme ternaire est une figure de construction, pas de son. '
                        + 'PIEGE : ne pas confondre RYTHME et SON. Le rythme concerne le NOMBRE de syllabes et la structure. Le son concerne les PHONEMES repetes. '
                        + 'Au Bac, distingue bien : figures de SON (alliteration, assonance, paronomase) vs figures de RYTHME (parallelisme, gradation, rythme binaire/ternaire).' },
                    { question: 'Quelle figure ? "Qui vivra verra."', answer: 'PARONOMASE. "Vivra" et "verra" se ressemblent par le son (meme structure consonantique v-r-a) mais different par le sens (vivre ≠ voir). '
                        + 'C\'est aussi une ALLITERATION en [v] (qui, vivra, verra). Les proverbes adorent la paronomase car elle rend la formule MEMORABLE. '
                        + 'La paronomase est l\'arme secrete des SLOGANS et PROVERBES. La ressemblance sonore colle les mots dans la memoire.' },
                    { question: 'Quelle figure ? "Tout m\'afflige et me nuit et conspire a me nuire." (Racine, Phedre)', answer: 'ALLITERATION en [n] (nuit, conspire, nuire) + ASSONANCE en [i] (afflige, nuit, conspire, nuire) + PARONOMASE (nuit/nuire). '
                        + 'Les sons se combinent pour creer un effet d\'ETOUFFEMENT et de SOUFFRANCE. La musique du vers ECRASE Phedre. '
                        + 'Racine est un orfèvre des sons. Chaque vers est ciselé pour que la musique renforce l\'emotion. Analysez ses vers comme de la MUSIQUE.' },
                    { question: 'EXERCICE : Identifie la figure de son et son effet dans "Un frais parfum sortait des touffes d\'asphodeles." (Hugo)', answer: 'ALLITERATION en [f] (frais, parfum, touffes, asphodeles) + ASSONANCE en [ou]/[o] (touffes, sortait). '
                        + 'L\'alliteration en [f] est DOUCE et SOUFFLÉE : elle evoque le souffle leger du parfum, la brise. Le son [f] = l\'air qui passe. '
                        + 'FORMULE : "L\'alliteration en [f] evoque le souffle leger, ce qui renforce l\'idee de parfum delicat et de nature apaisante." TOUJOURS lier le son a l\'effet !' }
                ],
                quiz: [
                    { question: 'L\'alliteration est la repetition d\'un son :', options: ['Voyelle', 'CONSONNE', 'Syllabe', 'Mot entier'], correctIndex: 1, explanation: 'Alliteration = consonne. Assonance = voyelle. aLLiteration = L = consonne.' },
                    { question: '"Les sanglots longs des violons" (Verlaine) est :', options: ['Une alliteration', 'Une ASSONANCE', 'Une paronomase', 'Une onomatopee'], correctIndex: 1, explanation: 'Le son VOYELLE [on] se repete (sanglots, longs, violons). Son voyelle repete = assonance.' },
                    { question: '"Pour qui sont ces serpents qui sifflent sur vos tetes" (Racine) est :', options: ['Une assonance', 'Une ALLITERATION en [s]', 'Une paronomase', 'Un chiasme'], correctIndex: 1, explanation: 'Le son CONSONNE [s] se repete (serpents, sifflent, sur, ces). Son consonne repete = alliteration.' },
                    { question: '"Qui se ressemble s\'assemble" contient :', options: ['Une alliteration', 'Une assonance', 'Une PARONOMASE', 'Une antanaclase'], correctIndex: 2, explanation: '"Ressemble" et "assemble" se ressemblent par le SON mais different par le SENS. Mots proches phonetiquement = paronomase.' },
                    { question: 'Une alliteration en [r] evoque generalement :', options: ['La douceur', 'La RUDESSE et la violence', 'La tristesse', 'Le silence'], correctIndex: 1, explanation: 'Le [r] est la consonne la plus dure du francais. Elle evoque la rudesse, la violence, le grondement.' },
                    { question: 'Pour analyser une figure de son au Bac, il faut :', options: ['Juste la nommer', 'Nommer + citer le son + expliquer l\'EFFET', 'Compter les syllabes', 'Trouver la rime'], correctIndex: 1, explanation: 'METHODE : 1) Nommer (alliteration/assonance). 2) Citer le son [entre crochets]. 3) Expliquer l\'EFFET (douceur, violence, tristesse...).' },
                    { question: 'L\'harmonie imitative est :', options: ['Un mot qui imite un bruit', 'Un EFFET d\'ensemble ou les sons imitent la réalité', 'Une simple onomatopee', 'Un synonyme d\'alliteration'], correctIndex: 1, explanation: 'L\'harmonie imitative = le son de TOUT LE PASSAGE imite la réalité. L\'onomatopee = un MOT unique. L\'harmonie est un effet d\'ensemble.' },
                    { question: '"Science sans conscience" (Rabelais) contient :', options: ['Une alliteration', 'Un oxymore', 'Une PARONOMASE', 'Une litote'], correctIndex: 2, explanation: '"Science" et "conscience" se ressemblent par le son mais different par le sens. Rapprochement sonore de mots differents = paronomase.' },
                    { question: 'Ne dis PAS "alliteration en A" car :', options: ['A n\'existe pas', 'A est une VOYELLE, donc c\'est une assonance', 'A est trop courant', 'Les alliterations n\'ont pas de lettre'], correctIndex: 1, explanation: 'A est une voyelle. Repetition de voyelle = assonance, PAS alliteration. Alliteration = consonnes uniquement.' },
                    { question: '"Qui vivra verra" contient :', options: ['Seulement une alliteration', 'Paronomase + alliteration en [v]', 'Seulement une assonance', 'Aucune figure de son'], correctIndex: 1, explanation: 'Paronomase (vivra/verra = memes sons, sens differents) + alliteration en [v]. La paronomase rend le proverbe memorable.' }
                ],
                tips: [
                    'aLLiteration = L = consonnes. assOnance = O = voyelles. C\'est le moyen mnemotechnique LE PLUS SIMPLE.',
                    'TOUJOURS donner l\'EFFET du son. [s] = sifflement. [r] = rudesse. [l] = douceur. [on/an] = gravite. [i] = aiguite.',
                    'Au Bac : "L\'alliteration en [son] créé un effet de [qualité] qui renforce [sens du texte]." Cette formule = les points.',
                    'Ne confonds pas rythme et son : les figures de son portent sur les PHONEMES repetes, les figures de rythme sur la STRUCTURE.',
                    'Le rap est le meilleur terrain d\'entrainement pour reperer alliterations et paronomases. Ecoute avec les lyrics !'
                ],
                pitfalls: [
                    'Ne dis JAMAIS "alliteration en A" : le A est une VOYELLE, donc c\'est une assonance.',
                    'Ne dis pas juste "il y à une alliteration" : CITE le son [entre crochets] et explique l\'EFFET.',
                    'Ne confonds pas paronomase et homonymie : la paronomase rapproche des mots SIMILAIRES (pas identiques).',
                    'L\'harmonie imitative est un EFFET d\'ensemble, pas un mot unique. Un mot qui imite un bruit = onomatopee.',
                    'Les figures de son ne sont pas decoratives : elles RENFORCENT le sens. Un poete ne choisit jamais ses sons au hasard.'
                ]
            },
            {
                id: 'sens',
                title: 'Figures de sens',
                icon: '\uD83C\uDFAD',
                content: '<h3>Les figures de sens : quand un mot en remplace un autre</h3>'
                    + '<p>Les figures de sens remplacent un mot par un autre qui lui est LIE. Contrairement à la metaphore (lien de RESSEMBLANCE), la metonymie et la synecdoque jouent sur un lien LOGIQUE.</p>'
                    + '<h4>Le piege Metonymie vs Synecdoque</h4>'
                    + '<p><strong>SYNECDOQUE = la PARTIE pour le TOUT</strong> (ou le tout pour la partie)<br/>'
                    + '"Une voile a l\'horizon" = la voile (PARTIE) pour le bateau (TOUT).<br/>'
                    + '<strong>METONYMIE = tout AUTRE lien logique</strong> (contenant/contenu, auteur/oeuvre, cause/effet, lieu/habitants, matière/objet...)<br/>'
                    + '"Boire un verre" = le contenant (verre) pour le contenu (boisson).</p>'
                    + '<h4>Tableau des types de metonymie</h4>'
                    + '<table border="1" cellpadding="4"><tr><th>Type de lien</th><th>Exemple</th><th>Figure</th></tr>'
                    + '<tr><td>Partie pour tout</td><td>"une voile" = un bateau</td><td>SYNECDOQUE</td></tr>'
                    + '<tr><td>Tout pour partie</td><td>"la France a gagne" = l\'equipe</td><td>SYNECDOQUE</td></tr>'
                    + '<tr><td>Contenant/contenu</td><td>"boire un verre" = le contenu</td><td>METONYMIE</td></tr>'
                    + '<tr><td>Auteur/oeuvre</td><td>"lire un Moliere" = une piece</td><td>METONYMIE</td></tr>'
                    + '<tr><td>Lieu/habitants</td><td>"Paris s\'emeut" = les Parisiens</td><td>METONYMIE</td></tr>'
                    + '<tr><td>Cause/effet</td><td>"vivre de son travail" = salaire</td><td>METONYMIE</td></tr>'
                    + '<tr><td>Matiere/objet</td><td>"les fers" = les chaines</td><td>METONYMIE</td></tr>'
                    + '</table>'
                    + '<h4>Autres figures de sens</h4>'
                    + '<ul>'
                    + '<li><strong>Periphrase</strong> : remplacer un mot par une description ("la Ville Lumiere" = Paris)</li>'
                    + '<li><strong>Antonomase</strong> : nom propre → nom commun ou inversement ("un Harpagon" = un avare)</li>'
                    + '<li><strong>Antanaclase</strong> : même mot repete, sens DIFFERENT</li>'
                    + '<li><strong>Syllepse</strong> : un mot a DEUX sens simultanement (propre + figure)</li>'
                    + '</ul>',
                flashcards: [
                    // --- METONYMIE ---
                    { question: 'Quelle figure ? "Boire un verre."', answer: 'METONYMIE. On ne boit pas le verre (contenant) mais son contenu (eau, vin...). Le lien est CONTENANT → CONTENU. '
                        + 'La metonymie remplace un mot par un autre qui lui est LIE logiquement, mais pas par un lien partie/tout. '
                        + 'ASTUCE : si le remplacement est contenant/contenu, auteur/oeuvre, lieu/habitants, cause/effet, matière/objet = METONYMIE.' },
                    { question: 'Quelle figure ? "Lire un Moliere." "Jouer du Beethoven." "Acheter un Picasso."', answer: 'METONYMIE dans les trois cas. L\'AUTEUR remplace l\'OEUVRE. On lit une PIECE de Moliere, on joue une OEUVRE de Beethoven, on achete un TABLEAU de Picasso. '
                        + 'Ce n\'est PAS une synecdoque car l\'auteur n\'est pas une PARTIE de son oeuvre. '
                        + 'REGLE : auteur pour oeuvre = TOUJOURS metonymie. Le lien est logique (Moliere a ECRIT la piece) mais pas partie/tout.' },
                    { question: 'Quelle figure ? "Tout Paris etait en emoi." / "L\'Elysee a declare..."', answer: 'METONYMIE dans les deux cas. Le LIEU remplace les HABITANTS/OCCUPANTS. "Paris" = les Parisiens. "L\'Elysee" = le president. '
                        + 'On entend ca tous les jours aux infos : "Moscou repond a Washington", "Bruxelles decide". C\'est de la metonymie mediatique. '
                        + 'Le langage journalistique est BOURRE de metonymies. Si tu regardes les infos avec un oeil rhetorique, tu en verras des dizaines chaque jour.' },
                    { question: 'Quelle figure ? "Les fers des prisonniers" pour "les chaines".', answer: 'C\'est une METONYMIE (et PAS une synecdoque). '
                        + 'Explication simple : "les fers" = le metal avec lequel on fabrique les chaines. On remplace l\'objet (chaine) par la matière (fer). '
                        + 'Pourquoi c\'est PAS une synecdoque : le fer n\'est pas un MORCEAU de la chaine. C\'est le materiau. C\'est une relation matière → objet, pas partie → tout. '
                        + 'Exemples du même type : "l\'acier" pour dire une epee. "Le plomb" pour dire des balles. '
                        + 'Astuce pour le Bac : si c\'est la matière qui remplace l\'objet fabrique = toujours metonymie. '
                        + 'Mots difficiles : "metonymie" = remplacer un mot par un autre qui à un lien logique avec lui. "synecdoque" = remplacer le tout par une partie (ou l\'inverse).' },
                    { question: 'Quelle figure ? "J\'ai mange trois assiettes." / "Finir sa bouteille."', answer: 'METONYMIE (contenant/contenu). L\'assiette (contenant) remplace la nourriture (contenu). La bouteille (contenant) remplace la boisson (contenu). '
                        + 'C\'est le MEME mecanisme que "boire un verre". Le contenant désigné le contenu. '
                        + 'REGLE D\'OR : contenant pour contenu = TOUJOURS metonymie. C\'est le type de metonymie le plus frequent dans la vie quotidienne.' },
                    // --- SYNECDOQUE ---
                    { question: 'Quelle figure ? "Une voile a l\'horizon" pour "un bateau".', answer: 'C\'est une SYNECDOQUE. '
                        + 'Explication simple : la voile est un MORCEAU du bateau. On utilise un morceau (la voile) pour parler du tout (le bateau entier). C\'est ca une synecdoque : la PARTIE remplace le TOUT. '
                        + 'Exemples concrets : "Il n\'a pas de toit" = il n\'a pas de maison (le toit = partie de la maison). "Vingt tetes casquees" = vingt soldats (la tete = partie du soldat). '
                        + 'Astuce pour ne pas confondre : synecdoque = un morceau pour le tout. Metonymie = un lien logique mais PAS un morceau (matière, lieu, auteur...). '
                        + 'Mots difficiles : "synecdoque" = figure ou on remplace le tout par une de ses parties (ou l\'inverse). Vient du grec "syn" (ensemble) + "ekdoche" (interpretation).' },
                    { question: 'Quelle figure ? "Vingt tetes casquees s\'avancaient." / "Il n\'a pas de toit."', answer: 'SYNECDOQUE dans les deux cas. "Tetes" = on prend une partie du corps (la tete) pour parler de la personne entière (le soldat). "Toit" = on prend une partie de la maison (le toit) pour parler de la maison entiere. A chaque fois, un MORCEAU remplace le TOUT. C\'est la règle de la synecdoque. '
                        + 'Dans les deux cas, une PARTIE physique désigné le TOUT. C\'est le critère unique de la synecdoque. '
                        + 'Partie du corps pour personne = synecdoque. Partie du batiment pour le batiment = synecdoque. Le lien est PHYSIQUE et PARTIE/TOUT.' },
                    { question: 'Quelle figure ? "La France a gagne la Coupe du monde."', answer: 'SYNECDOQUE (le TOUT pour la PARTIE). "La France" (le pays entier) désigné l\'equipe de France (une partie du pays). '
                        + 'La synecdoque fonctionne dans les DEUX SENS : partie pour tout ("une voile" = un bateau) ET tout pour partie ("la France" = l\'equipe). '
                        + 'La synecdoque tout-pour-partie est plus subtile. Elle créé un effet de GRANDEUR : c\'est toute la nation qui gagne, pas juste 23 joueurs.' },
                    // --- DISTINCTION METONYMIE/SYNECDOQUE ---
                    { question: 'Piege Bac : Comment distinguer metonymie et synecdoque a COUP SUR ?', answer: 'METHODE : Pose-toi UNE seule question : "Est-ce que le mot utilise désigné une PARTIE physique du tout ?" '
                        + 'OUI → SYNECDOQUE ("une voile" est physiquement une partie du bateau). '
                        + 'NON → METONYMIE ("boire un verre" : le verre n\'est pas une partie de la boisson, c\'est son contenant). '
                        + 'TRUC : synecdoque = lien PHYSIQUE partie/tout. Metonymie = tout AUTRE type de lien logique (contenant, auteur, lieu, matière, cause...).' },
                    { question: 'EXERCICE : Classe — metonymie ou synecdoque ? 1) "Boire un verre" 2) "Une voile a l\'horizon" 3) "Lire un Moliere" 4) "Les tetes couronnees"', answer: '1) "Boire un verre" = METONYMIE (contenant/contenu : le verre contient la boisson). '
                        + '2) "Une voile" = SYNECDOQUE (partie/tout : la voile est une partie physique du bateau). '
                        + '3) "Lire un Moliere" = METONYMIE (auteur/oeuvre : Moliere n\'est pas une partie de sa piece). '
                        + '4) "Les tetes couronnees" = SYNECDOQUE (partie/tout : la tete est une partie du roi). '
                        + 'La question est TOUJOURS : est-ce une PARTIE PHYSIQUE du tout ? Oui = synecdoque. Non = metonymie.' },
                    // --- PERIPHRASE ---
                    { question: 'Quelle figure ? "La Ville Lumiere" pour Paris. "Le roi des animaux" pour le lion. "L\'astre du jour" pour le soleil.', answer: 'PERIPHRASE dans les trois cas. On remplace un mot SIMPLE par une EXPRESSION DESCRIPTIVE plus longue. '
                        + 'La periphrase evite la repetition et créé un effet POETIQUE ou EMPHATIQUE. "L\'astre du jour" est plus solennel que "le soleil". '
                        + 'ASTUCE : PERIphrase = on fait le TOUR (PERImetre = le tour). Au lieu de nommer directement, on decrit, on fait un detour poetique.' },
                    { question: 'Quelle figure ? "Le berceau de la civilisation" pour la Mesopotamie / "Le toit du monde" pour l\'Himalaya.', answer: 'PERIPHRASE dans les deux cas. On remplace le nom propre par une description qui met en valeur une CARACTERISTIQUE. '
                        + 'La periphrase REVELE un aspect de ce qu\'elle désigné : "berceau de la civilisation" souligne l\'anciennete, "toit du monde" souligne l\'altitude. '
                        + 'La periphrase n\'est pas qu\'un ornement : elle ORIENTE l\'interpretation. Choisir "la ville des lumieres" plutot que "Paris" donne un sens au texte.' },
                    // --- ANTONOMASE ---
                    { question: 'Qu\'est-ce qu\'une antonomase ? Donne des exemples percutants.', answer: 'L\'ANTONOMASE transforme un nom propre en nom commun (ou inversement). '
                        + '"Un Harpagon" = un avare (du personnage de Moliere). "Un Don Juan" = un seducteur. "Un Tartuffe" = un hypocrite. "Un Hercule" = un homme très fort. '
                        + 'L\'antonomase fonctionne aussi a l\'envers : "le Roi-Soleil" = Louis XIV (nom commun → nom propre). L\'antonomase CONDENSE un concept en un seul nom.' },
                    { question: 'Quelle figure ? "C\'est un vrai Einstein !" / "Arrete de faire ton Napoleon !" / "C\'est le Graal des collectionneurs."', answer: 'ANTONOMASE dans les trois cas. "Einstein" = genie, "Napoleon" = autoritaire, "Graal" = objet ultime de la quete. '
                        + 'Les noms propres deviennent des TYPES, des archétypes. L\'antonomase est un raccourci culturel : tout un concept tient en un nom. '
                        + 'L\'antonomase suppose un savoir PARTAGE : si tu ne connais pas Harpagon, "un Harpagon" ne te dit rien. C\'est une figure de la CULTURE COMMUNE.' },
                    // --- ANTANACLASE ---
                    { question: 'Quelle figure ? "Le coeur a ses raisons que la raison ne connait point." (Pascal)', answer: 'ANTANACLASE. Le mot "raison" est repete mais avec un SENS DIFFERENT a chaque fois : "raisons" (1er) = motifs, causes. "Raison" (2e) = logique, rationalite. '
                        + 'Pascal montre que le coeur a sa propre logique, inaccessible a l\'intellect. Le même mot, deux mondes. '
                        + 'ANTANACLASE = même mot, sens DIFFERENT. C\'est un jeu sur la POLYSEMIE. Ne confonds pas avec la simple repetition (ou le sens est identique).' },
                    // --- SYLLEPSE ---
                    { question: 'Quelle figure ? "Brule de plus de feux que je n\'en allumai." (Racine, Andromaque)', answer: 'SYLLEPSE DE SENS. "Feux" a DEUX sens simultanement : sens propre (les incendies de Troie allumes par les Grecs) et sens figure (la passion amoureuse qui brule Pyrrhus). '
                        + 'La syllepse créé un DOUBLE sens dans le même mot. Le vers joue sur les deux tableaux en même temps. '
                        + 'SYLLEPSE = un mot, DEUX sens EN MEME TEMPS (propre + figure). Antanaclase = même mot repete avec des sens DIFFERENTS a chaque occurrence. La syllepse est SIMULTANEE, l\'antanaclase est SUCCESSIVE.' },
                    // --- SYNTHESE ---
                    { question: 'Quelle figure ? "C\'est une fine lame" pour "un excellent escrimeur".', answer: 'METONYMIE (l\'instrument — la lame — remplace l\'utilisateur) + PERIPHRASE (on decrit l\'escrimeur au lieu de le nommer). '
                        + 'Le lien est instrument → utilisateur. La lame n\'est pas une PARTIE de l\'escrimeur, c\'est son OUTIL. Donc metonymie, pas synecdoque. '
                        + 'Instrument pour utilisateur = metonymie. C\'est un type de lien logique qui n\'est pas partie/tout.' },
                    { question: 'Quelle figure ? "La Couronne a decide..." pour "le roi a decide".', answer: 'METONYMIE. La couronne (attribut, symbole du pouvoir) remplace le roi (porteur du symbole). Le lien est symbole → personne. '
                        + 'On retrouve le même mecanisme avec "la robe" (les magistrats), "l\'epee" (l\'armee), "la plume" (les ecrivains). '
                        + 'Attribut/symbole pour personne = metonymie. La couronne n\'est pas une PARTIE du roi, c\'est son ATTRIBUT. Lien logique, pas partie/tout.' },
                    { question: 'SYNTHESE : Comment analyser une figure de sens au Bac ? Methode complete.', answer: '1) IDENTIFIER : metonymie, synecdoque, periphrase, antonomase, antanaclase ou syllepse ? '
                        + '2) EXPLIQUER LE MECANISME : quel mot remplace quel autre ? Quel type de lien ? (partie/tout, contenant/contenu, auteur/oeuvre...) '
                        + '3) ANALYSER L\'EFFET : pourquoi ce remplacement ? Quel sens supplementaire ? '
                        + 'FORMULE : "L\'auteur emploie une [figure] en designant [X] par [Y], ce qui créé un effet de [effet] et souligne [interpretation]."' }
                ],
                quiz: [
                    { question: '"Boire un verre" est :', options: ['Une synecdoque', 'Une METONYMIE', 'Une periphrase', 'Une antanaclase'], correctIndex: 1, explanation: 'Le contenant (verre) remplace le contenu (boisson). Contenant/contenu = metonymie, PAS synecdoque (pas de rapport partie/tout).' },
                    { question: '"Une voile a l\'horizon" (= un bateau) est :', options: ['Une metonymie', 'Une SYNECDOQUE', 'Une periphrase', 'Une allegorie'], correctIndex: 1, explanation: 'La voile est une PARTIE physique du bateau. Partie pour tout = synecdoque.' },
                    { question: 'La synecdoque se distingue de la metonymie par :', options: ['Rien, ce sont des synonymes', 'Synecdoque = PARTIE/TOUT, metonymie = autre lien logique', 'La metonymie est plus poetique', 'La synecdoque utilise "comme"'], correctIndex: 1, explanation: 'Synecdoque = exclusivement partie/tout. Metonymie = tout autre lien (contenant, auteur, lieu, matière, cause...). C\'est la distinction CLE.' },
                    { question: '"La Ville Lumiere" pour Paris est :', options: ['Une synecdoque', 'Une metonymie', 'Une PERIPHRASE', 'Un oxymore'], correctIndex: 2, explanation: 'On remplace "Paris" par une description. Remplacement par une expression descriptive plus longue = periphrase.' },
                    { question: '"Un Harpagon" pour "un avare" est :', options: ['Une metonymie', 'Une synecdoque', 'Une periphrase', 'Une ANTONOMASE'], correctIndex: 3, explanation: 'Nom propre (Harpagon) devenu nom commun (un avare). Transformation nom propre ↔ nom commun = antonomase.' }
                ],
                tips: [
                    'SYNECDOQUE = partie/tout (SYN = partie du SYSteme). Si ce n\'est pas partie/tout = metonymie.',
                    'Pour trancher : "Est-ce une PARTIE PHYSIQUE du tout ?" OUI = synecdoque. NON = metonymie.',
                    'Les types de metonymie : contenant/contenu, auteur/oeuvre, lieu/habitants, cause/effet, matière/objet, instrument/utilisateur.',
                    'L\'antonomase condense un concept en un seul nom : "un Don Juan" = un seducteur. C\'est un raccourci culturel.',
                    'Antanaclase = même mot, sens DIFFERENT a chaque repetition. Syllepse = un mot, deux sens EN MEME TEMPS.'
                ],
                pitfalls: [
                    'PIEGE n°2 du Bac : confondre metonymie et synecdoque. Synecdoque = PARTIE/TOUT uniquement. Tout le reste = metonymie.',
                    'Ne dis pas "alliteration en A" : c\'est une voyelle, donc assonance. L\'alliteration porte sur les consonnes.',
                    'La periphrase n\'est pas une definition neutre : c\'est un remplacement STYLISTIQUE qui oriente l\'interpretation.',
                    'Ne confonds pas antanaclase et simple repetition : dans l\'antanaclase, le sens CHANGE a chaque occurrence.',
                    'La synecdoque fonctionne dans les DEUX sens : partie pour tout ET tout pour partie ("la France a gagne" = l\'equipe).'
                ]
            },
            {
                id: 'methode',
                title: 'Analyser les figures au Bac',
                icon: '\uD83C\uDFAF',
                content: '<h3>METHODE BAC : analyser les figures de style comme un pro</h3>'
                    + '<p>Au Bac, NOMMER une figure ne suffit pas. Il faut l\'ANALYSER : expliquer comment elle fonctionne et quel EFFET elle produit. Voici la methode complete.</p>'
                    + '<h4>La formule magique en 3 etapes</h4>'
                    + '<ol>'
                    + '<li><strong>NOMMER</strong> la figure ("L\'auteur emploie une metaphore...")</li>'
                    + '<li><strong>CITER</strong> le texte ("...en designant la lune par \'faucille d\'or\'...")</li>'
                    + '<li><strong>ANALYSER L\'EFFET</strong> ("...ce qui créé une image de moisson celeste et donne au paysage nocturne une dimension rustique et intime.")</li>'
                    + '</ol>'
                    + '<h4>L\'erreur n°1 des copies de Bac</h4>'
                    + '<p>"Il y à une metaphore." → 0 point d\'analyse.<br/>'
                    + '"L\'auteur emploie une metaphore in absentia en designant la lune par \'faucille d\'or\', ce qui transforme le ciel nocturne en champ a moissonner et donne au paysage une dimension à la fois rustique et cosmique." → analyse complete.</p>'
                    + '<h4>Les 5 figures les plus frequentes au Bac</h4>'
                    + '<ol>'
                    + '<li><strong>Metaphore / Comparaison</strong> (dans 90% des textes)</li>'
                    + '<li><strong>Antithese / Oxymore</strong> (dans 70% des textes)</li>'
                    + '<li><strong>Anaphore / Gradation</strong> (dans 60% des textes)</li>'
                    + '<li><strong>Hyperbole / Litote</strong> (dans 50% des textes)</li>'
                    + '<li><strong>Alliteration / Assonance</strong> (dans les textes poetiques)</li>'
                    + '</ol>'
                    + '<h4>Les effets a connaitre</h4>'
                    + '<ul>'
                    + '<li>Figures d\'analogie → creent des IMAGES, enrichissent la representation</li>'
                    + '<li>Figures d\'opposition → expriment les TENSIONS, les dilemmes</li>'
                    + '<li>Figures d\'amplification → renforcent l\'INTENSITE, l\'emotion</li>'
                    + '<li>Figures de construction → creent un RYTHME, structurent le propos</li>'
                    + '<li>Figures de son → produisent une MUSIQUE, renforcent le sens par le son</li>'
                    + '<li>Figures de sens → creent un DEPLACEMENT, un raccourci expressif</li>'
                    + '</ul>',
                flashcards: [
                    // --- COMMENT REPERER ---
                    { question: 'Comment REPERER les figures de style dans un texte au Bac ? Methode de balayage.', answer: 'METHODE DE BALAYAGE en 5 passes : '
                        + '1) IMAGES : est-ce qu\'un mot en remplace un autre ? (metaphore, comparaison, periphrase) '
                        + '2) OPPOSITIONS : y a-t-il des contraires ? Colles = oxymore. Separes = antithese. '
                        + '3) REPETITIONS : un mot/structure revient-il ? (anaphore, parallelisme, gradation) '
                        + '4) SONS : des consonnes ou voyelles se repetent-elles ? (alliteration, assonance) '
                        + '5) DEPLACEMENTS : un mot désigné-t-il autre chose que son sens litteral ? (metonymie, synecdoque) '
                        + 'Fais ces 5 passes a CHAQUE texte et tu ne rateras rien.' },
                    { question: 'Quelle est la FORMULE D\'ANALYSE a utiliser pour chaque figure au Bac ?', answer: 'FORMULE : "L\'auteur emploie [NOM de la figure] en [MECANISME] ce qui créé un effet de [QUALITE] et permet de [INTERPRETATION]." '
                        + 'EXEMPLE : "L\'auteur emploie une METAPHORE en identifiant la jeunesse à un \'tenebreux orage\', ce qui créé un effet de VIOLENCE et permet de montrer que la jeunesse du poete a ete douloureuse et tourmentee." '
                        + 'Cette formule est un CADRE. Adapte-la au contexte, mais respecte toujours les 3 temps : nommer, citer/expliquer, interpreter.' },
                    { question: 'Quelles sont les 5 figures les plus FREQUENTES au Bac ? Lesquelles chercher en priorite ?', answer: '1) METAPHORE / COMPARAISON → presentes dans 90% des textes. Toujours chercher en premier. '
                        + '2) ANTITHESE / OXYMORE → 70% des textes (surtout tragédie, poesie, argumentation). '
                        + '3) ANAPHORE / GRADATION → 60% des textes (surtout discours, poesie). '
                        + '4) HYPERBOLE / LITOTE → 50% des textes (surtout registre lyrique ou ironique). '
                        + '5) ALLITERATION / ASSONANCE → dans les textes poetiques. '
                        + 'Si tu ne trouves rien, cherche UNE metaphore et UNE antithese : tu as 90% de chances d\'en trouver.' },
                    // --- COMMENT ANALYSER L'EFFET ---
                    { question: 'Comment analyser l\'EFFET d\'une figure de style ? Les mots-cles a utiliser.', answer: 'MOTS-CLES par famille : '
                        + 'ANALOGIE : "créé une image de...", "rapproche... et...", "evoque...", "suggere...", "donne a voir..." '
                        + 'OPPOSITION : "souligne la tension entre...", "exprime le dechirement...", "met en relief le contraste..." '
                        + 'AMPLIFICATION : "renforce l\'intensite de...", "insiste sur...", "martele...", "amplifie..." '
                        + 'SON : "créé une musicalite...", "evoque par le son...", "renforce par l\'harmonie..." '
                        + 'L\'EFFET doit TOUJOURS etre lie au SENS du texte. Pas de figure sans interpretation.' },
                    { question: 'ERREUR N°1 : "Il y à une metaphore." Pourquoi ca ne vaut RIEN au Bac ?', answer: 'Parce que NOMMER ne suffit pas. Le correcteur veut voir que tu COMPRENDS pourquoi l\'auteur a choisi cette figure et quel EFFET elle produit. '
                        + 'MAUVAIS : "Il y à une metaphore." (0 point d\'analyse) '
                        + 'BON : "Baudelaire emploie une metaphore en identifiant sa jeunesse à un \'tenebreux orage\', ce qui traduit la violence de ses experiences passees et annonce la tonalite sombre du recueil." (analyse complete) '
                        + 'REGLE D\'OR : chaque figure nommee DOIT etre suivie d\'une analyse de son EFFET. Nommer sans analyser = la moitie des points maximum.' },
                    { question: 'ERREUR N°2 : confondre "l\'auteur utilise une figure pour EMBELLIR le texte". Pourquoi c\'est faux ?', answer: 'Les figures de style ne sont PAS decoratives ! Elles sont des OUTILS DE SENS. Chaque figure produit un effet PRECIS. '
                        + 'NE DIS JAMAIS : "pour embellir le texte", "pour faire joli", "pour rendre le texte plus poetique". '
                        + 'DIS PLUTOT : "pour creer une image de...", "pour exprimer la tension entre...", "pour souligner l\'intensite de..." '
                        + 'Les figures sont des CHOIX STRATEGIQUES, pas des decorations. L\'auteur les utilise pour DIRE quelque chose qu\'il ne pourrait pas dire autrement.' },
                    // --- EXERCICES D'ANALYSE COMPLETE ---
                    { question: 'EXERCICE D\'ANALYSE : "Je suis comme un roi d\'un pays pluvieux, / Riche, mais impuissant, jeune et pourtant très vieux." (Baudelaire) — Analyse COMPLETE.', answer: 'FIGURES : Comparaison ("comme un roi"), antitheses multiples ("riche/impuissant", "jeune/vieux"), oxymore implicite ("jeune et pourtant très vieux"). '
                        + 'ANALYSE : La comparaison installé l\'image d\'une royaute dechue. Les antitheses expriment la contradiction du spleen : TOUT AVOIR (richesse, jeunesse) et NE RIEN RESSENTIR (impuissance, vieillesse morale). Les contraires s\'accumulent pour dire l\'impossible : etre vivant et mort en même temps. '
                        + 'MODELE DE COPIE : "Baudelaire emploie une comparaison avec un roi pour symboliser la desolation du spleen, et les antitheses successives riche/impuissant, jeune/vieux expriment le paradoxe d\'une vie videe de son sens."' },
                    { question: 'EXERCICE D\'ANALYSE : "Pour qui sont ces serpents qui sifflent sur vos tetes ?" (Racine) — Analyse COMPLETE.', answer: 'FIGURE : Alliteration en [s] (serpents, sifflent, sur, ces). '
                        + 'ANALYSE : Le son [s] IMITE le sifflement des serpents. C\'est une harmonie imitative : le vers ne se contente pas de PARLER des serpents, il les FAIT ENTENDRE. Le spectateur percoit la menace avant de la comprendre intellectuellement. '
                        + 'MODELE : "L\'alliteration en [s] créé une harmonie imitative qui fait entendre le sifflement des serpents, rendant la menace physiquement perceptible pour le spectateur et creant un effet de terreur sensorielle."' },
                    { question: 'EXERCICE D\'ANALYSE : "Va, je ne te hais point." (Corneille) — Analyse COMPLETE.', answer: 'FIGURE : Litote (dire moins pour suggerer plus). Chimene dit "je ne te hais point" pour exprimer "je t\'aime passionnement". '
                        + 'ANALYSE : Chimene ne PEUT PAS dire "je t\'aime" : Rodrigue a tue son pere. L\'honneur l\'oblige au silence. Alors elle utilise la litote = dire le maximum dans le minimum. La negation ("ne... point") est un masque transparent : le spectateur comprend l\'amour DERRIERE la retenue. '
                        + 'MODELE : "La litote permet a Chimene d\'exprimer son amour sans le nommer, respectant les codes de l\'honneur tout en revelant l\'intensite de ses sentiments. Dire \'je ne te hais point\' est plus poignant que dire \'je t\'aime\' car le sentiment perce malgre l\'interdit."' },
                    { question: 'EXERCICE D\'ANALYSE : "Cette obscure clarte qui tombe des etoiles." (Corneille) — Analyse COMPLETE.', answer: 'FIGURE : Oxymore ("obscure clarte" — deux termes contradictoires dans le même groupe nominal). '
                        + 'ANALYSE : L\'oxymore dit quelque chose que la logique ne peut pas dire : une lumière qui est aussi de l\'ombre. C\'est la réalité de la nuit etoilee : on y voit sans y voir, dans une demi-obscurite incertaine. Rodrigue attend le combat dans cet entre-deux. '
                        + 'MODELE : "L\'oxymore \'obscure clarte\' créé une image paradoxale qui traduit l\'ambiguite de la situation : Rodrigue se trouve entre deux mondes (jour/nuit, vie/mort, honneur/amour), et la lumière incertaine des etoiles symbolise cette indetermination."' },
                    { question: 'Comment CONCLURE une analyse de figure dans un commentaire compose ?', answer: 'METHODE DE CONCLUSION : relie la figure au PROJET GLOBAL du texte. '
                        + 'Ne laisse pas la figure "flotter" : montre qu\'elle SERT le message de l\'auteur, qu\'elle est un CHOIX delibere en lien avec le theme. '
                        + 'EXEMPLE : "Ainsi, les oxymores qui parcourent tout le texte traduisent la vision baudelairienne d\'un monde ou beauté et horreur coexistent, conformement a l\'esthetique des Fleurs du mal." '
                        + 'La figure n\'est JAMAIS isolee : elle participe à un SYSTEME de sens. Montre les liens entre les figures et entre les figures et le theme.' },
                    // --- ERREURS COURANTES ---
                    { question: 'Quelles sont les 5 erreurs les plus FREQUENTES dans les copies de Bac sur les figures de style ?', answer: '1) Confondre comparaison et metaphore (oublier le mot-outil). '
                        + '2) Confondre oxymore et antithese (colles vs separes). '
                        + '3) Confondre litote et euphemisme (amplifier vs adoucir). '
                        + '4) Confondre metonymie et synecdoque (lien logique vs partie/tout). '
                        + '5) NOMMER sans ANALYSER ("il y à une metaphore" sans expliquer l\'effet). '
                        + 'Si tu evites ces 5 erreurs, tu es déjà au-dessus de 80% des candidats. Ce sont les pieges CLASSIQUES que les correcteurs voient chaque annee.' },
                    { question: 'Au Bac, combien de figures faut-il reperer dans un commentaire compose ?', answer: 'Il n\'y a pas de nombre fixe, mais vise AU MOINS : '
                        + '- 3-4 figures dans chaque sous-partie de commentaire '
                        + '- 10-15 figures au total dans un commentaire complet '
                        + '- TOUJOURS les plus EVIDENTES d\'abord, puis les plus subtiles '
                        + 'MAIS : mieux vaut 5 figures bien analysees que 15 figures simplement nommees. La QUALITE de l\'analyse prime sur la QUANTITE. '
                        + 'REGLE : chaque figure doit SERVIR ton argumentation. Ne cite pas une figure juste pour montrer que tu la connais — montre comment elle eclaire le texte.' },
                    { question: 'Comment INTEGRER les figures dans un commentaire compose ? Organisation.', answer: 'METHODE : les figures ne sont PAS un paragraphe a part ("les figures de style du texte"). Elles sont INTEGREES dans l\'argumentation. '
                        + 'MAUVAIS : "Partie 3 : les figures de style. On trouve une metaphore, une antithese et une alliteration." '
                        + 'BON : Dans chaque sous-partie, la figure APPUIE ton argument : "L\'antithese \'riche mais impuissant\' renforce l\'idee de dechirement interieur du poete [= ton argument]." '
                        + 'La figure est une PREUVE, pas un sujet. Elle prouve ce que tu avances. C\'est ton argumentation qui guide, les figures qui soutiennent.' },
                    // --- FICHES DE REVISION RAPIDE ---
                    { question: 'FICHE REVISION : Les figures d\'ANALOGIE en 30 secondes.', answer: 'COMPARAISON = outil present (comme, tel, semblable a). METAPHORE = outil absent. IN PRAESENTIA = compare et comparant presents. IN ABSENTIA = compare absent. '
                        + 'METAPHORE FILEE = même champ lexical sur plusieurs lignes. PERSONNIFICATION = traits humains à un non-humain. ALLEGORIE = idee abstraite incarnee. '
                        + 'PIEGE : "etre" n\'est PAS un outil. "Il est un lion" = metaphore.' },
                    { question: 'FICHE REVISION : Les figures d\'OPPOSITION en 30 secondes.', answer: 'ANTITHESE = contraires SEPARES dans la phrase ("je vis, je meurs"). OXYMORE = contraires COLLES dans le même groupe ("obscure clarte"). '
                        + 'PARADOXE = idee entière qui semble absurde mais revele une vérité. ANTIPHRASE = dire le contraire (ironie). CHIASME = structure croisee ABBA. '
                        + 'PIEGE : oxymore = colle. Antithese = separe.' },
                    { question: 'FICHE REVISION : Amplification & attenuation en 30 secondes.', answer: 'HYPERBOLE = exageration. GRADATION = progression d\'intensite (3+ termes). ACCUMULATION = liste surabondante. ANAPHORE = repetition en debut. '
                        + 'LITOTE = dire moins pour suggerer PLUS (amplifier). EUPHEMISME = adoucir une réalité PENIBLE (proteger). '
                        + 'PIEGE : litote ≠ euphemisme. Litote = amplifier. Euphemisme = adoucir.' },
                    { question: 'FICHE REVISION : Figures de son en 30 secondes.', answer: 'ALLITERATION = son CONSONNE repete. ASSONANCE = son VOYELLE repete. '
                        + 'PARONOMASE = mots qui se RESSEMBLENT par le son. HARMONIE IMITATIVE = le son du passage imite la réalité. '
                        + 'PIEGE : aLLiteration = L = consonnes. assOnance = O = voyelles.' },
                    { question: 'FICHE REVISION : Figures de sens en 30 secondes.', answer: 'SYNECDOQUE = PARTIE pour TOUT (ou inversement). METONYMIE = tout AUTRE lien logique (contenant, auteur, lieu, matière...). '
                        + 'PERIPHRASE = description au lieu du nom. ANTONOMASE = nom propre ↔ nom commun. '
                        + 'PIEGE : synecdoque = partie/tout uniquement. Tout le reste = metonymie.' },
                    { question: 'DERNIER CONSEIL avant le Bac : la figure de style, c\'est quoi au fond ?', answer: 'Une figure de style, c\'est l\'auteur qui REFUSE de dire les choses normalement. Il choisit un DETOUR — une image, un contraste, une repetition, un son — parce que le chemin direct ne suffit pas. '
                        + 'Quand Baudelaire dit "ma jeunesse fut un tenebreux orage", il ne dit pas "ma jeunesse fut malheureuse". Il dit PLUS, MIEUX, AUTREMENT. La metaphore est plus VRAIE que le constat. '
                        + 'Au Bac, montre que tu comprends CA : la figure n\'est pas un ornement, c\'est le SEUL MOYEN de dire ce que l\'auteur veut dire. C\'est la que se trouve l\'excellence.' }
                ],
                quiz: [
                    { question: 'Au Bac, pour analyser une figure, il faut :', options: ['Juste la nommer', 'La nommer + citer + analyser l\'EFFET', 'Donner sa definition du dictionnaire', 'La comparer à une autre figure'], correctIndex: 1, explanation: 'METHODE en 3 temps : 1) Nommer la figure. 2) Citer le texte. 3) Analyser l\'EFFET produit. Nommer seul = la moitie des points.' },
                    { question: 'L\'erreur n°1 des copies de Bac est :', options: ['Confondre les figures', 'Ne pas ANALYSER l\'effet des figures', 'Faire des fautes d\'orthographe', 'Oublier la conclusion'], correctIndex: 1, explanation: '"Il y à une metaphore" = 0 analyse. Il faut TOUJOURS expliquer quel EFFET la figure produit et comment elle sert le sens du texte.' },
                    { question: 'Les 2 figures les plus frequentes au Bac sont :', options: ['Pleonasme et anacoluthe', 'Metaphore et antithese', 'Onomatopee et paronomase', 'Synecdoque et metonymie'], correctIndex: 1, explanation: 'La metaphore/comparaison (90% des textes) et l\'antithese/oxymore (70% des textes) sont les plus courantes. Cherche-les en priorite.' },
                    { question: '"Pour embellir le texte" est une MAUVAISE analyse parce que :', options: ['C\'est trop court', 'Les figures ne sont PAS decoratives, elles creent du SENS', 'C\'est hors sujet', 'C\'est une faute de francais'], correctIndex: 1, explanation: 'Les figures sont des OUTILS DE SENS, pas des decorations. Dis "pour creer un effet de..." ou "pour exprimer..." — jamais "pour embellir".' },
                    { question: 'Dans un commentaire compose, les figures doivent etre :', options: ['Regroupees dans une partie "figures de style"', 'INTEGREES dans l\'argumentation comme preuves', 'Mises en introduction', 'Listees en conclusion'], correctIndex: 1, explanation: 'Les figures APPUIENT ton argumentation. Elles sont des PREUVES, pas un sujet separe. Integre-les dans chaque sous-partie.' }
                ],
                tips: [
                    'FORMULE MAGIQUE : "L\'auteur emploie [figure] en [mecanisme], ce qui créé un effet de [qualité] et permet de [interpretation]."',
                    'METHODE DE BALAYAGE : 1) Images 2) Oppositions 3) Repetitions 4) Sons 5) Deplacements de sens. 5 passes = rien ne t\'echappe.',
                    'Si tu ne trouves rien, cherche UNE metaphore et UNE antithese : 90% de chances d\'en trouver.',
                    'Ne dis JAMAIS "pour embellir". Dis "pour creer un effet de...", "pour exprimer...", "pour souligner...".',
                    'Mieux vaut 5 figures BIEN analysees que 15 figures simplement nommees. Qualite > quantité.'
                ],
                pitfalls: [
                    'ERREUR FATALE : nommer une figure sans analyser son EFFET. "Il y à une metaphore" = zero analyse.',
                    'ERREUR FREQUENTE : isoler les figures dans un paragraphe separe au lieu de les integrer dans l\'argumentation.',
                    'ERREUR CLASSIQUE : dire "pour embellir le texte". Les figures sont des outils de SENS, pas de decoration.',
                    'ERREUR PIEGE : confondre les 4 grandes paires (comparaison/metaphore, oxymore/antithese, litote/euphemisme, metonymie/synecdoque).',
                    'ERREUR D\'ORGANISATION : citer trop de figures sans les analyser. Mieux vaut la profondeur que l\'accumulation.'
                ]
            }
        ]
    });
})();
