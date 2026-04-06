// grandoral.js — Grand Oral du Bac : méthode + sujets + conseils
// Format pédagogique adapté dys/TSA
(function() {
    if (!window.StudFlow || !window.StudFlow.subjects) return;

    window.StudFlow.subjects.register({
        id: 'grandoral',
        name: 'Grand Oral',
        icon: '\uD83C\uDF99\uFE0F',
        color: 'hot',
        sections: [

            // ================================================================
            // SECTION 1 : COMPRENDRE L'ÉPREUVE
            // ================================================================
            {
                id: 'comprendre',
                title: 'Comprendre l\'\u00E9preuve',
                icon: '\uD83D\uDCCB',
                content: '<h3>Le Grand Oral en bref</h3>'
                    + '<ul>'
                    + '<li><strong>Dur\u00E9e</strong> : 20 minutes au total</li>'
                    + '<li><strong>Coefficient</strong> : 10 (tr\u00E8s important)</li>'
                    + '<li><strong>2 questions</strong> pr\u00E9par\u00E9es par l\'\u00E9l\u00E8ve, li\u00E9es aux sp\u00E9cialit\u00E9s</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'C\u2019est quoi le Grand Oral ?', answer: 'C\u2019est une \u00E9preuve du Bac o\u00F9 tu parles SEUL devant un jury de 2 profs pendant 20 minutes. Coefficient 10 = tr\u00E8s important. Tu pr\u00E9pares 2 questions li\u00E9es \u00E0 tes sp\u00E9cialit\u00E9s. Le jury en choisit UNE. Tu la pr\u00E9sentes, puis ils te posent des questions. En gros : c\u2019est un oral o\u00F9 tu montres que tu sais r\u00E9fl\u00E9chir et t\u2019exprimer sur un sujet que TU as choisi.' },
                    { question: 'Comment se d\u00E9roule le Grand Oral ?', answer: '3 parties : 1) PREPARATION = 20 min pour pr\u00E9parer (tu peux faire un support). 2) PRESENTATION = 5 min o\u00F9 tu parles SANS notes (sauf le support). Le jury ne t\u2019interrompt pas. 3) ECHANGE = 10 min de questions du jury sur ton sujet + ton projet d\u2019orientation. Puis 5 min sur ton projet d\u2019avenir. En gros : tu parles 5 min, ils te posent des questions 15 min. Total = 20 min.' },
                    { question: 'C\u2019est quoi les 2 questions \u00E0 pr\u00E9parer ?', answer: 'Tu dois pr\u00E9parer 2 questions qui portent sur tes 2 SP\u00C9CIALIT\u00C9S. Soit 1 question par sp\u00E9cialit\u00E9, soit 1 question qui croise les 2. Le jour J, le jury CHOISIT laquelle tu pr\u00E9sentes. Tu ne sais pas laquelle \u00E0 l\u2019avance. Donc tu dois maitriser LES DEUX. En gros : pr\u00E9pare 2 sujets que tu adores et que tu connais par coeur.' },
                    { question: 'Sur quoi on est \u00E9valu\u00E9 ?', answer: '5 crit\u00E8res : 1) QUALIT\u00C9 de l\u2019argumentation (tu r\u00E9ponds vraiment \u00E0 la question). 2) CONNAISSANCES (tu maitrises le sujet). 3) EXPRESSION ORALE (voix claire, pas de "euh", regard). 4) \u00C9COUTE et r\u00E9action aux questions du jury. 5) PROJET D\u2019ORIENTATION (tu sais pourquoi tu fais ces choix). En gros : on juge le FOND (ce que tu dis) + la FORME (comment tu le dis) + ta MATURIT\u00C9.' },
                    { question: 'Combien de temps pour chaque partie ?', answer: 'PR\u00C9PARATION : 20 min (seul, avec tes notes). PR\u00C9SENTATION : 5 min (debout, sans notes, tu parles sans \u00EAtre interrompu). \u00C9CHANGE : 10 min (le jury pose des questions). PROJET : 5 min (tu parles de ton orientation, tes \u00E9tudes, ton m\u00E9tier). En gros : 5 + 10 + 5 = 20 min devant le jury.' }
                ],
                quiz: [
                    { question: 'Le Grand Oral dure :', options: ['10 minutes', '20 minutes', '30 minutes', '1 heure'], correctIndex: 1, explanation: 'Le Grand Oral dure 20 minutes au total : 5 min de pr\u00E9sentation + 10 min d\u2019\u00E9change + 5 min sur le projet.' },
                    { question: 'Combien de questions faut-il pr\u00E9parer ?', options: ['1', '2', '3', '5'], correctIndex: 1, explanation: 'L\u2019\u00E9l\u00E8ve pr\u00E9pare 2 questions li\u00E9es \u00E0 ses sp\u00E9cialit\u00E9s. Le jury en choisit une le jour J.' },
                    { question: 'Le coefficient du Grand Oral est de :', options: ['5', '8', '10', '14'], correctIndex: 2, explanation: 'Coefficient 10 : c\u2019est une \u00E9preuve tr\u00E8s importante dans la note finale du Bac.' }
                ]
            },

            // ================================================================
            // SECTION 2 : CHOISIR SES QUESTIONS
            // ================================================================
            {
                id: 'choisir-questions',
                title: 'Choisir ses questions',
                icon: '\u2753',
                content: '<h3>Comment choisir de bonnes questions</h3>',
                flashcards: [
                    { question: 'Comment choisir une bonne question pour le Grand Oral ?', answer: 'Une bonne question doit : 1) Te PASSIONNER (tu vas en parler 20 min, il faut que \u00E7a te plaise). 2) \u00CAtre li\u00E9e \u00E0 tes SP\u00C9CIALIT\u00C9S (programme officiel). 3) Permettre une vraie R\u00C9FLEXION (pas juste r\u00E9citer un cours). 4) Avoir un lien avec le MONDE R\u00C9EL (actualit\u00E9, soci\u00E9t\u00E9, ton v\u00E9cu). En gros : choisis un sujet que tu adores et sur lequel tu as des choses \u00E0 dire.' },
                    { question: 'Comment formuler sa question ?', answer: 'Ta question doit \u00EAtre OUVERTE (pas de r\u00E9ponse oui/non). Commence par : "Comment...", "Dans quelle mesure...", "Pourquoi...", "Quels sont les enjeux de...". MAUVAIS : "Est-ce que les vaccins marchent ?" (oui/non). BON : "Comment les vaccins ARNm ont-ils r\u00E9volutionn\u00E9 la lutte contre les pand\u00E9mies ?" En gros : une question ouverte qui permet de d\u00E9velopper une r\u00E9flexion.' },
                    { question: 'Exemples de questions pour SVT', answer: '1) "Comment l\u2019\u00E9dition du g\u00E9nome par CRISPR-Cas9 pourrait-elle gu\u00E9rir les maladies g\u00E9n\u00E9tiques ?" 2) "Pourquoi la r\u00E9sistance aux antibiotiques est-elle une menace mondiale ?" 3) "Comment le microbiote intestinal influence-t-il notre sant\u00E9 mentale ?" 4) "Dans quelle mesure les OGM peuvent-ils r\u00E9pondre aux enjeux alimentaires mondiaux ?" En gros : part d\u2019un concept du programme et relie-le au monde r\u00E9el.' },
                    { question: 'Exemples de questions pour Maths', answer: '1) "Comment les algorithmes de recommandation influencent-ils nos choix ?" 2) "Les probabilit\u00E9s peuvent-elles pr\u00E9dire les \u00E9pid\u00E9mies ?" 3) "Comment les suites g\u00E9om\u00E9triques mod\u00E9lisent-elles la croissance d\u2019un virus ?" 4) "Pourquoi la cryptographie repose-t-elle sur les nombres premiers ?" En gros : montre que les maths servent dans la VIE R\u00C9ELLE.' },
                    { question: 'Exemples de questions pour Physique-Chimie', answer: '1) "Comment l\u2019\u00E9nergie nucl\u00E9aire peut-elle contribuer \u00E0 la transition \u00E9nerg\u00E9tique ?" 2) "Pourquoi la datation au carbone 14 est-elle limit\u00E9e \u00E0 50\u00A0000 ans ?" 3) "Comment les ondes gravitationnelles ont-elles confirm\u00E9 la th\u00E9orie d\u2019Einstein ?" 4) "Quels sont les enjeux de la fusion nucl\u00E9aire pour l\u2019avenir \u00E9nerg\u00E9tique ?" En gros : relie la physique-chimie aux grands d\u00E9fis de soci\u00E9t\u00E9.' },
                    { question: 'Exemples de questions pour SES', answer: '1) "La mondialisation profite-t-elle \u00E0 tous ?" 2) "Le revenu universel est-il une solution au ch\u00F4mage ?" 3) "Comment les r\u00E9seaux sociaux transforment-ils l\u2019engagement politique ?" 4) "L\u2019\u00E9cole r\u00E9duit-elle ou reproduit-elle les in\u00E9galit\u00E9s sociales ?" En gros : des questions de soci\u00E9t\u00E9 qui permettent de montrer tes connaissances \u00E9conomiques et sociologiques.' },
                    { question: 'Exemples de questions pour HGGSP', answer: '1) "Comment la m\u00E9moire de la Shoah est-elle entretenue aujourd\u2019hui ?" 2) "Les fronti\u00E8res sont-elles encore pertinentes dans un monde mondialis\u00E9 ?" 3) "Comment la propagande a-t-elle \u00E9volu\u00E9 avec les r\u00E9seaux sociaux ?" 4) "La d\u00E9mocratie est-elle en recul dans le monde ?" En gros : des sujets qui croisent histoire, g\u00E9opolitique et actualit\u00E9.' },
                    { question: 'Exemples de questions croisant 2 sp\u00E9cialit\u00E9s', answer: 'Maths + Physique : "Comment les mod\u00E8les math\u00E9matiques permettent-ils de pr\u00E9dire le changement climatique ?" SVT + SES : "L\u2019acc\u00E8s in\u00E9gal aux soins est-il un probl\u00E8me biologique ou social ?" Philo + SVT : "La connaissance du g\u00E9nome remet-elle en question le libre arbitre ?" En gros : croiser les sp\u00E9cialit\u00E9s montre ta MATURIT\u00C9 intellectuelle. Les jurys adorent.' }
                ],
                quiz: [
                    { question: 'Une bonne question de Grand Oral doit \u00EAtre :', options: ['Ferm\u00E9e (oui/non)', 'Ouverte (permet la r\u00E9flexion)', 'Tr\u00E8s technique', 'Hors programme'], correctIndex: 1, explanation: 'La question doit \u00EAtre ouverte pour permettre une argumentation et une r\u00E9flexion personnelle.' },
                    { question: 'Les questions doivent \u00EAtre li\u00E9es \u00E0 :', options: ['N\u2019importe quel sujet', 'Tes sp\u00E9cialit\u00E9s', 'Le fran\u00E7ais uniquement', 'Le sport'], correctIndex: 1, explanation: 'Les 2 questions doivent porter sur tes sp\u00E9cialit\u00E9s de Terminale ou les croiser.' }
                ]
            },

            // ================================================================
            // SECTION 3 : PRÉPARER SA PRÉSENTATION (5 min)
            // ================================================================
            {
                id: 'preparer-presentation',
                title: 'Pr\u00E9parer sa pr\u00E9sentation',
                icon: '\uD83D\uDCDD',
                content: '<h3>Les 5 minutes de pr\u00E9sentation</h3>',
                flashcards: [
                    { question: 'Comment structurer ses 5 minutes ?', answer: 'INTRO (30s) : Accroche + pr\u00E9sentation de la question + annonce du plan. D\u00C9VELOPPEMENT (3min30) : 2 ou 3 parties avec arguments + exemples. CONCLUSION (1min) : R\u00E9ponse \u00E0 la question + ouverture. En gros : intro courte, 2-3 id\u00E9es d\u00E9velopp\u00E9es, conclusion nette. Pas besoin de plus.' },
                    { question: 'Comment faire une bonne accroche ?', answer: 'L\u2019accroche c\u2019est ta PREMI\u00C8RE phrase. Elle doit CAPTER l\u2019attention. Exemples : un CHIFFRE choc ("Chaque ann\u00E9e, 700\u00A0000 personnes meurent d\u2019antibior\u00E9sistance"). Une QUESTION rh\u00E9torique ("Et si notre ADN pouvait \u00EAtre modifi\u00E9 comme un fichier Word ?"). Une ANECDOTE personnelle ("Quand j\u2019ai d\u00E9couvert que..."). En gros : ta premi\u00E8re phrase doit donner envie d\u2019\u00E9couter la suite.' },
                    { question: 'Comment ne pas d\u00E9passer 5 minutes ?', answer: 'R\u00E8gle d\u2019or : CHRONOMETRE-TOI \u00E0 la maison. Plusieurs fois. Avec un chrono. Astuces : 1) \u00C9cris un plan sur une fiche (pas un texte en entier). 2) Entra\u00EEne-toi \u00E0 parler 4min30 (marge de s\u00E9curit\u00E9). 3) Si tu d\u00E9passes, COUPE du contenu (pas la conclusion). En gros : r\u00E9p\u00E8te, r\u00E9p\u00E8te, r\u00E9p\u00E8te. C\u2019est la seule m\u00E9thode.' },
                    { question: 'Qu\u2019est-ce que le support ?', answer: 'Pendant les 20 min de pr\u00E9paration, tu peux cr\u00E9er un SUPPORT (feuille, sch\u00E9ma, tableau). Tu le donnes au jury. MAIS tu ne peux PAS le lire ! C\u2019est un aide-m\u00E9moire pour le jury, pas pour toi. Bon support : un sch\u00E9ma, un graphique, un plan. Mauvais support : un texte r\u00E9dig\u00E9 (le jury verra que tu lis). En gros : le support est un bonus, pas une b\u00E9quille.' },
                    { question: 'Faut-il apprendre par coeur ?', answer: 'NON. Apprends le PLAN par coeur (les 3 parties + les id\u00E9es cl\u00E9s). Apprends l\u2019ACCROCHE par coeur (la 1\u00E8re phrase). Apprends la CONCLUSION par coeur. MAIS le d\u00E9veloppement doit \u00EAtre NATUREL. Si tu r\u00E9cites, le jury le voit tout de suite et c\u2019est p\u00E9nalis\u00E9. En gros : structure = par coeur. Contenu = naturel.' }
                ],
                quiz: [
                    { question: 'La pr\u00E9sentation dure :', options: ['3 minutes', '5 minutes', '10 minutes', '15 minutes'], correctIndex: 1, explanation: 'La pr\u00E9sentation orale dure exactement 5 minutes, sans interruption du jury.' },
                    { question: 'Faut-il apprendre tout par coeur ?', options: ['Oui, mot pour mot', 'Non, seulement le plan, l\u2019accroche et la conclusion', 'Oui, sauf l\u2019intro', 'Non, il faut tout improviser'], correctIndex: 1, explanation: 'Il faut conna\u00EEtre sa structure par coeur mais parler naturellement. R\u00E9citer est p\u00E9nalis\u00E9.' }
                ]
            },

            // ================================================================
            // SECTION 4 : RÉUSSIR L'ÉCHANGE (10 min)
            // ================================================================
            {
                id: 'reussir-echange',
                title: 'R\u00E9ussir l\u2019\u00E9change avec le jury',
                icon: '\uD83D\uDDE3\uFE0F',
                content: '<h3>Les 10 minutes d\u2019\u00E9change</h3>',
                flashcards: [
                    { question: 'Que fait le jury pendant l\u2019\u00E9change ?', answer: 'Le jury pose des questions pour : 1) V\u00C9RIFIER que tu comprends vraiment ton sujet (pas juste r\u00E9cit\u00E9). 2) Te faire APPROFONDIR certains points. 3) Tester ta capacit\u00E9 \u00E0 R\u00C9AGIR et \u00E0 r\u00E9fl\u00E9chir en direct. 4) Voir si tu fais le LIEN avec d\u2019autres connaissances. En gros : ils veulent voir si tu PENSES, pas si tu r\u00E9cites.' },
                    { question: 'Que faire si on ne sait pas r\u00E9pondre ?', answer: 'NE JAMAIS dire "je ne sais pas" et se taire. Dis plut\u00F4t : "Je n\u2019ai pas approfondi cette question, mais je pense que..." ou "C\u2019est une question int\u00E9ressante, j\u2019aurais tendance \u00E0 dire que..." ou "Si je devais proposer une hypoth\u00E8se...". En gros : montre que tu ESSAIES de r\u00E9fl\u00E9chir m\u00EAme si tu ne sais pas. Le jury note l\u2019EFFORT, pas la perfection.' },
                    { question: 'Comment parler de son projet d\u2019orientation ?', answer: 'Les 5 derni\u00E8res minutes portent sur TON AVENIR. Pr\u00E9pare : 1) Ce que tu veux FAIRE apr\u00E8s le Bac (\u00E9tudes, m\u00E9tier). 2) POURQUOI tu as choisi ces sp\u00E9cialit\u00E9s. 3) Le LIEN entre ta question et ton projet. 4) Ce qui te MOTIVE. Sois SINC\u00C8RE. Le jury pr\u00E9f\u00E8re un \u00E9l\u00E8ve honn\u00EAte qui h\u00E9site \u00E0 un \u00E9l\u00E8ve qui r\u00E9cite un discours faux. En gros : parle de toi avec honn\u00EAtet\u00E9.' },
                    { question: 'Comment g\u00E9rer le stress pendant l\u2019oral ?', answer: '1) RESPIRE avant d\u2019entrer (4 secondes inspire, 7 retiens, 8 expire). 2) REGARDE le jury dans les yeux (pas le sol). 3) Parle LENTEMENT (le stress acc\u00E9l\u00E8re le d\u00E9bit). 4) Prends ton TEMPS avant de r\u00E9pondre (r\u00E9fl\u00E9chir 3 secondes n\u2019est pas un probl\u00E8me). 5) SOURIS (m\u00EAme si tu as peur). En gros : le jury sait que tu es stress\u00E9. Ils ne te jugent pas l\u00E0-dessus. Ils jugent ton contenu.' }
                ],
                quiz: [
                    { question: 'Si tu ne sais pas r\u00E9pondre, il faut :', options: ['Dire "je ne sais pas" et se taire', 'Essayer de r\u00E9fl\u00E9chir \u00E0 voix haute', 'Changer de sujet', 'Demander une autre question'], correctIndex: 1, explanation: 'Le jury note l\u2019effort de r\u00E9flexion. Proposer une hypoth\u00E8se montre ta maturit\u00E9, m\u00EAme si ce n\u2019est pas parfait.' },
                    { question: 'Les 5 derni\u00E8res minutes portent sur :', options: ['Un deuxi\u00E8me sujet', 'Ton projet d\u2019orientation', 'Un exercice \u00E9crit', 'Une question surprise'], correctIndex: 1, explanation: 'Les 5 derni\u00E8res minutes portent sur ton projet : \u00E9tudes, m\u00E9tier, lien avec tes sp\u00E9cialit\u00E9s.' }
                ]
            },

            // ================================================================
            // SECTION 5 : TECHNIQUES D'EXPRESSION ORALE
            // ================================================================
            {
                id: 'techniques-oral',
                title: 'Techniques d\u2019expression orale',
                icon: '\uD83C\uDFA4',
                content: '<h3>Parler comme un pro</h3>',
                flashcards: [
                    { question: 'Comment bien parler \u00E0 l\u2019oral ?', answer: '5 r\u00E8gles : 1) VOIX : parle fort et clairement (pas en murmurant). 2) D\u00C9BIT : parle lentement (le stress acc\u00E9l\u00E8re). 3) PAUSES : fais des pauses entre les id\u00E9es (le silence n\u2019est PAS un probl\u00E8me). 4) REGARD : regarde les 2 membres du jury \u00E0 tour de r\u00F4le. 5) POSTURE : tiens-toi droit, pas les mains dans les poches. En gros : le CORPS parle autant que les mots.' },
                    { question: 'Quels mots et expressions utiliser ?', answer: 'STRUCTURER : "Tout d\u2019abord... Ensuite... Enfin..." "D\u2019une part... D\u2019autre part..." NUANCER : "Cependant... N\u00E9anmoins... Toutefois..." ILLUSTRER : "Par exemple... Prenons le cas de... Concr\u00E8tement..." CONCLURE : "En d\u00E9finitive... Pour conclure... Ainsi..." En gros : ces mots montrent que tu STRUCTURES ta pens\u00E9e. Apprends-en 5-6 par coeur.' },
                    { question: 'Quelles erreurs \u00E9viter ?', answer: '1) Dire "euh" toutes les 3 secondes (remplace par une PAUSE silencieuse). 2) Lire ses notes (le jury voit tout). 3) Parler trop VITE (personne ne comprend). 4) Ne JAMAIS regarder le jury (semble fuir). 5) R\u00C9CITER un texte appris par coeur (voix monotone = 0 cr\u00E9dibilit\u00E9). 6) Dire "je sais pas" sans essayer. En gros : naturel > parfait. Sinc\u00E9rit\u00E9 > r\u00E9citation.' },
                    { question: 'Comment s\u2019entra\u00EEner ?', answer: '1) CHRONOMETRE chaque r\u00E9p\u00E9tition (5 min pile). 2) ENREGISTRE-toi (vid\u00E9o ou audio) et \u00E9coute. 3) Pr\u00E9sente \u00E0 tes PARENTS ou amis (vrai public). 4) Fais-le DEBOUT (comme le jour J). 5) R\u00E9p\u00E8te au moins 10 FOIS chaque question. Le secret : les \u00E9l\u00E8ves qui ont les meilleures notes sont ceux qui ont le plus R\u00C9P\u00C9T\u00C9, pas les plus intelligents. En gros : r\u00E9p\u00E9tition = confiance = r\u00E9ussite.' },
                    { question: 'Comment g\u00E9rer un blanc ?', answer: 'Un blanc (trou de m\u00E9moire) arrive \u00E0 TOUT LE MONDE. Que faire : 1) RESPIRE calmement (2 secondes). 2) Reviens \u00E0 ton PLAN (quelle partie tu \u00E9tais ?). 3) DIS-LE au jury : "Excusez-moi, je reprends. J\u2019en \u00E9tais \u00E0..." 4) REBONDIS sur un exemple que tu connais bien. Le jury ne p\u00E9nalise PAS un blanc bien g\u00E9r\u00E9. Il p\u00E9nalise un \u00E9l\u00E8ve qui panique et se tait. En gros : un blanc = normal. Le g\u00E9rer calmement = maturit\u00E9.' }
                ],
                quiz: [
                    { question: 'La meilleure fa\u00E7on de s\u2019entra\u00EEner est :', options: ['\u00C9crire un texte et le lire', 'R\u00E9p\u00E9ter debout, chronom\u00E9tr\u00E9, devant quelqu\u2019un', 'Lire ses fiches la veille', 'Improviser le jour J'], correctIndex: 1, explanation: 'R\u00E9p\u00E9ter debout avec un chrono est la m\u00E9thode la plus efficace. Les meilleurs \u00E9l\u00E8ves r\u00E9p\u00E8tent 10+ fois.' },
                    { question: 'Que faire en cas de trou de m\u00E9moire ?', options: ['Paniquer et s\u2019arr\u00EAter', 'Respirer, revenir au plan et dire "Je reprends"', 'Changer de sujet', 'Demander \u00E0 sortir'], correctIndex: 1, explanation: 'Un blanc bien g\u00E9r\u00E9 (respirer, reprendre calmement) montre de la maturit\u00E9. Le jury ne le p\u00E9nalise pas.' }
                ]
            },

            // ================================================================
            // SECTION 6 : GRILLE D'ÉVALUATION
            // ================================================================
            {
                id: 'grille-evaluation',
                title: 'Grille d\u2019\u00E9valuation',
                icon: '\u2705',
                content: '<h3>Ce que le jury note</h3>',
                flashcards: [
                    { question: 'Quels sont les crit\u00E8res de notation ?', answer: 'Le jury note sur 20 avec 5 crit\u00E8res : 1) QUALIT\u00C9 ORALE (voix, d\u00E9bit, regard, posture). 2) QUALIT\u00C9 DE L\u2019ARGUMENTATION (plan clair, arguments, exemples). 3) CONNAISSANCES (tu maitrises le sujet). 4) INTERACTION (tu \u00E9coutes et r\u00E9ponds bien aux questions). 5) CONSTRUCTION DU PROJET (lien sp\u00E9cialit\u00E9s \u2192 orientation \u2192 m\u00E9tier). En gros : on te note sur TON DISCOURS + TA R\u00C9FLEXION + TON PROJET.' },
                    { question: 'Qu\u2019est-ce qui rapporte le plus de points ?', answer: 'Ce qui fait la diff\u00E9rence entre 10 et 18 : 1) Un PLAN CLAIR (le jury doit comprendre o\u00F9 tu vas). 2) Des EXEMPLES CONCRETS (pas juste de la th\u00E9orie). 3) Un REGARD vers le jury (pas le sol). 4) Savoir REBONDIR sur les questions (pas r\u00E9pondre "je sais pas"). 5) Un LIEN sinc\u00E8re avec ton projet d\u2019avenir. En gros : structure + exemples + naturel = haute note.' },
                    { question: 'Qu\u2019est-ce qui fait perdre des points ?', answer: 'Les pi\u00E8ges courants : 1) R\u00C9CITER un texte (voix monotone, pas de contact visuel). 2) D\u00C9PASSER le temps (le jury coupe \u00E0 5 min). 3) Ne pas r\u00E9pondre aux questions (se fermer). 4) Pas de lien avec le programme (hors sujet). 5) Pas de projet d\u2019orientation (\u00AB je sais pas ce que je veux faire \u00BB). En gros : pr\u00E9paration insuffisante = mauvaise note. M\u00EAme un \u00E9l\u00E8ve moyen peut avoir 16 s\u2019il a BIEN PR\u00C9PAR\u00C9.' }
                ],
                quiz: [
                    { question: 'Ce qui fait perdre le plus de points :', options: ['Avoir un blanc', 'R\u00E9citer un texte appris par coeur', 'Parler un peu vite', 'Avoir un plan en 2 parties au lieu de 3'], correctIndex: 1, explanation: 'R\u00E9citer sans naturel est tr\u00E8s p\u00E9nalis\u00E9. Le jury veut une r\u00E9flexion personnelle, pas une r\u00E9citation.' }
                ]
            }
        ]
    });
})();
