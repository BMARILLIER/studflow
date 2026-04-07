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
                    { question: 'Ce qui fait perdre le plus de points :', options: ['Avoir un blanc', 'Réciter un texte appris par coeur', 'Parler un peu vite', 'Avoir un plan en 2 parties au lieu de 3'], correctIndex: 1, explanation: 'Réciter sans naturel est très pénalisé. Le jury veut une réflexion personnelle, pas une récitation.' },
                    { question: 'Le jury évalue sur :', options: ['3 critères', '5 critères', '10 critères', '2 critères'], correctIndex: 1, explanation: '5 critères : qualité orale, argumentation, connaissances, interaction, projet d\'orientation.' }
                ]
            },

            // ================================================================
            // SECTION 7 : LE PROJET D'ORIENTATION (5 dernières minutes)
            // ================================================================
            {
                id: 'projet-orientation',
                title: 'Le projet d\'orientation',
                icon: '🧭',
                content: '<h3>Les 5 dernières minutes : ton avenir</h3>'
                    + '<ul>'
                    + '<li>Le jury te pose des questions sur TON PROJET après le Bac</li>'
                    + '<li>C\'est noté : il faut le préparer sérieusement</li>'
                    + '<li>Pas besoin d\'avoir un plan de carrière parfait, mais il faut montrer que tu y as réfléchi</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'C\'est quoi exactement la partie "projet d\'orientation" ?', answer: 'C\'est les 5 DERNIÈRES MINUTES du Grand Oral. Le jury te demande :\n— Qu\'est-ce que tu veux faire après le Bac ?\n— Pourquoi tu as choisi ces spécialités ?\n— Quel lien entre ta question et ton projet ?\n\nEn gros : tu dois montrer que tes choix de spécialités ont un SENS dans ton parcours. Pas besoin d\'avoir tout planifié, mais il faut avoir RÉFLÉCHI.' },
                    { question: 'Comment relier sa question à son projet ?', answer: 'Exemples concrets :\n— Question sur CRISPR (SVT) + projet médecine → "Cette question m\'a passionné car je veux devenir médecin et la thérapie génique sera au cœur de la médecine de demain."\n— Question sur les algorithmes (Maths) + projet école d\'ingé → "Les maths appliquées à l\'IA me motivent pour intégrer une école d\'ingénieurs."\n\nEn gros : montre que ta question N\'EST PAS un hasard, elle fait partie de ton CHEMIN.' },
                    { question: 'Et si on ne sait pas encore ce qu\'on veut faire ?', answer: 'C\'est OK. Le jury ne demande PAS un plan de carrière parfait. Tu peux dire :\n— "Je suis attiré par le domaine de... même si je n\'ai pas encore choisi de formation précise."\n— "J\'hésite entre... et... mais dans les deux cas, mes spécialités m\'ont aidé à comprendre..."\n— "Ce qui me motive, c\'est de travailler dans un domaine lié à..."\n\nEn gros : montre que tu RÉFLÉCHIS à ton avenir. L\'honnêteté est mieux notée qu\'un discours inventé.' },
                    { question: 'Quelles questions le jury peut poser sur l\'orientation ?', answer: 'Questions fréquentes :\n1) "Pourquoi avez-vous choisi ces spécialités ?"\n2) "Que voulez-vous faire après le Bac ?"\n3) "Quel lien entre votre question et votre projet ?"\n4) "Qu\'est-ce qui vous plaît dans ce domaine ?"\n5) "Avez-vous fait des stages, des recherches, des lectures sur ce métier ?"\n\nEn gros : prépare 2-3 phrases pour chaque question. Pas besoin de réciter, juste d\'avoir réfléchi.' },
                    { question: 'Comment montrer sa motivation ?', answer: 'Le jury veut voir que tu es SINCÈRE. Ce qui marche :\n— Parler d\'une expérience PERSONNELLE ("J\'ai fait un stage en...", "J\'ai lu un article sur...")\n— Montrer de la CURIOSITÉ ("Ce qui m\'intrigue, c\'est...")\n— Être HONNÊTE sur ses doutes ("Je ne sais pas encore exactement, mais...")\n\nCe qui ne marche PAS :\n— Réciter un discours tout fait\n— Dire "parce que ça paye bien"\n— Dire "je sais pas du tout"\n\nEn gros : motivation = tu as réfléchi + tu es curieux + tu es sincère.' },
                    { question: 'Exemples de liens spécialité → orientation', answer: 'Maths + Physique → Ingénieur, chercheur, data scientist\nSVT + Physique → Médecin, pharmacien, chercheur en bio\nSES + HGGSP → Sciences Po, droit, journalisme\nMaths + SES → École de commerce, finance, économiste\nSVT + Maths → Vétérinaire, agronome, biostatisticien\nPhilo + Littérature → Professeur, éditeur, journaliste\nArts + Humanités → Architecte, designer, conservateur\n\nEn gros : chaque combinaison de spécialités ouvre des portes. Le jury veut que tu le montres.' }
                ],
                quiz: [
                    { question: 'La partie orientation dure :', options: ['2 minutes', '5 minutes', '10 minutes', '15 minutes'], correctIndex: 1, explanation: 'Les 5 dernières minutes du Grand Oral sont consacrées au projet d\'orientation de l\'élève.' },
                    { question: 'Si tu ne sais pas quel métier tu veux faire, il faut :', options: ['Inventer un projet', 'Dire honnêtement que tu réfléchis en montrant tes centres d\'intérêt', 'Dire "je ne sais pas" et se taire', 'Refuser de répondre'], correctIndex: 1, explanation: 'L\'honnêteté est valorisée. Montre que tu as réfléchi, même si tu n\'as pas de certitude.' },
                    { question: 'Le jury attend surtout :', options: ['Un plan de carrière précis', 'De la sincérité et de la réflexion', 'Le nom d\'une école', 'Un CV complet'], correctIndex: 1, explanation: 'Le jury évalue ta capacité à réfléchir sur toi-même et à relier tes choix scolaires à ton avenir.' }
                ]
            },

            // ================================================================
            // SECTION 8 : LE SUPPORT VISUEL
            // ================================================================
            {
                id: 'support-visuel',
                title: 'Le support visuel',
                icon: '📊',
                content: '<h3>Créer un bon support pendant les 20 min de préparation</h3>'
                    + '<ul>'
                    + '<li>Tu as 20 minutes SEUL pour préparer un support à donner au jury</li>'
                    + '<li>Ce support est un BONUS, pas une obligation</li>'
                    + '<li>Tu ne peux PAS le lire pendant ta présentation</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'C\'est quoi exactement le support ?', answer: 'Pendant les 20 min de préparation (seul dans une salle), tu peux créer un DOCUMENT à donner au jury. C\'est une feuille (ou plusieurs) avec un schéma, un graphique, un tableau, un plan.\n\nATTENTION : tu ne peux PAS le lire pendant l\'oral. C\'est le jury qui le regarde. Toi, tu parles SANS NOTES.\n\nEn gros : c\'est un aide pour le jury, pas pour toi. Mais un bon support montre ta rigueur.' },
                    { question: 'Qu\'est-ce qu\'on peut mettre sur le support ?', answer: 'OUI :\n— Un SCHÉMA (ex : cycle cellulaire, circuit électrique)\n— Un GRAPHIQUE (ex : courbe de données, histogramme)\n— Un TABLEAU (ex : comparaison de 2 théories)\n— Un PLAN numéroté (I, II, III avec sous-parties)\n— Une FRISE chronologique\n— Une FORMULE clé\n\nNON :\n— Un texte rédigé (le jury pensera que tu lis)\n— Un copié-collé du cours\n— Un support trop chargé (illisible)\n\nEn gros : visuel > texte. Simple > compliqué.' },
                    { question: 'Comment organiser ses 20 min de préparation ?', answer: '0-5 min : RELIS ta question. Note tes idées principales. Vérifie ton plan (intro, parties, conclusion).\n\n5-12 min : CRÉE ton support. Un schéma clair OU un plan structuré. Pas trop de détails.\n\n12-18 min : RÉPÈTE dans ta tête. Chronomètre mentalement tes 5 min.\n\n18-20 min : RESPIRE. Relis ton support une dernière fois.\n\nEn gros : ne passe pas 20 min sur le support. C\'est un bonus, pas le cœur de l\'épreuve.' },
                    { question: 'Exemple de bon support pour SVT', answer: 'Question : "Comment CRISPR peut-il guérir les maladies génétiques ?"\n\nSupport :\n— Un SCHÉMA du mécanisme CRISPR-Cas9 (ADN → guide ARN → coupure → réparation)\n— Un TABLEAU : "Maladies ciblées / Résultats des essais cliniques"\n— Le PLAN : I. Le principe de CRISPR  II. Les applications thérapeutiques  III. Les limites éthiques\n\nEn gros : le schéma aide le jury à VOIR ce que tu expliques à l\'oral.' },
                    { question: 'Exemple de bon support pour Maths', answer: 'Question : "Comment les suites géométriques modélisent-elles la croissance d\'un virus ?"\n\nSupport :\n— Un GRAPHIQUE : courbe exponentielle vs courbe réelle du COVID\n— La FORMULE : Un = U0 × q^n avec les valeurs appliquées\n— Le PLAN : I. Le modèle mathématique  II. Application au cas réel  III. Les limites du modèle\n\nEn gros : un graphique bien fait vaut 100 mots. Le jury apprécie la rigueur visuelle.' }
                ],
                quiz: [
                    { question: 'Le support visuel est :', options: ['Obligatoire', 'Facultatif mais recommandé', 'Interdit', 'Noté séparément'], correctIndex: 1, explanation: 'Le support n\'est pas obligatoire mais il montre ta rigueur et aide le jury à suivre ton raisonnement.' },
                    { question: 'Pendant l\'oral, le support est :', options: ['Lu par l\'élève', 'Donné au jury (l\'élève ne le lit pas)', 'Affiché au tableau', 'Gardé par l\'élève'], correctIndex: 1, explanation: 'Le support est remis au jury. L\'élève parle SANS le lire. C\'est un aide pour le jury, pas pour l\'élève.' },
                    { question: 'Le meilleur type de support est :', options: ['Un texte rédigé complet', 'Un schéma ou graphique clair', 'Une page de notes', 'Un résumé du cours'], correctIndex: 1, explanation: 'Un support visuel (schéma, graphique, tableau) est bien plus efficace qu\'un texte rédigé.' }
                ]
            },

            // ================================================================
            // SECTION 9 : AMÉNAGEMENTS DYS / TSA / ANXIÉTÉ
            // ================================================================
            {
                id: 'amenagements',
                title: 'Aménagements et conseils adaptés',
                icon: '💜',
                content: '<h3>Si tu as un PAP, un PPS ou de l\'anxiété</h3>'
                    + '<ul>'
                    + '<li>Tu as DROIT à des aménagements officiels</li>'
                    + '<li>L\'anxiété se gère avec de la préparation et des techniques simples</li>'
                    + '<li>Être différent n\'est PAS un handicap à l\'oral</li>'
                    + '</ul>',
                flashcards: [
                    { question: 'Quels aménagements pour les élèves dys au Grand Oral ?', answer: 'Si tu as un PAP (Plan d\'Accompagnement Personnalisé) ou un PPS (Projet Personnalisé de Scolarisation), tu peux avoir :\n\n— TIERS-TEMPS : +6 min 40 s de préparation (soit ~27 min au lieu de 20)\n— Support adapté : possibilité de police plus grande sur ton support\n— Bienveillance du jury : ils sont informés de ton aménagement\n\nEn gros : fais la demande AVANT l\'épreuve via ton établissement. C\'est ton DROIT, pas une faveur.\n\nMots difficiles : PAP = plan pour les troubles de l\'apprentissage. PPS = plan pour les situations de handicap reconnu (MDPH).' },
                    { question: 'Conseils spécifiques pour les élèves dyslexiques', answer: '1) Ton PLAN doit être très SIMPLE : 2 parties max, pas de sous-parties compliquées.\n2) Utilise des MOTS-CLÉS sur ton support, pas des phrases longues.\n3) RÉPÈTE à l\'oral (pas à l\'écrit). Ce qui compte c\'est ce que tu DIS, pas ce que tu écris.\n4) Prépare des PHRASES DE TRANSITION courtes et apprises par cœur ("Passons maintenant à...").\n5) Le jury ne note PAS l\'orthographe de ton support.\n\nEn gros : l\'oral est souvent PLUS FACILE que l\'écrit pour les dys. Tu peux très bien réussir.' },
                    { question: 'Conseils spécifiques pour les élèves TSA (autisme)', answer: '1) Le REGARD : tu n\'es pas obligé de fixer le jury dans les yeux. Regarde leur front ou le haut de leur tête. C\'est suffisant.\n2) Les GESTES : pas besoin de gesticuler. Reste calme, les mains posées ou le long du corps.\n3) Le SCRIPT : prépare un plan TRÈS structuré. Les jurys apprécient la rigueur logique, c\'est une force.\n4) Les QUESTIONS imprévues : prépare 5-6 questions probables avec des réponses-types.\n5) PRÉVIENS le jury si tu as besoin d\'un moment pour réfléchir avant de répondre.\n\nEn gros : ta rigueur et ta logique sont des ATOUTS à l\'oral. Utilise-les.' },
                    { question: 'Comment gérer l\'anxiété avant le Grand Oral ?', answer: 'AVANT l\'épreuve :\n— Technique 4-7-8 : inspire 4s, retiens 7s, expire 8s. Fais-le 3 fois.\n— Prépare un RITUEL (un geste, un mot, un objet rassurant).\n— Arrive 15 min en avance pour t\'habituer au lieu.\n\nPENDANT l\'épreuve :\n— Commence par ta phrase d\'accroche APPRISE PAR CŒUR (ça lance la machine).\n— Parle LENTEMENT (le stress accélère tout).\n— Si tu sens la panique : pause de 3 secondes + respiration.\n\nEn gros : l\'anxiété est NORMALE. 80% des élèves sont stressés. Le jury le sait et ne pénalise pas le stress.' },
                    { question: 'Comment s\'entraîner quand on est anxieux ou neuroatypique ?', answer: '1) Commence par parler SEUL devant un miroir (pas de public).\n2) Puis enregistre-toi en AUDIO (sans vidéo, moins stressant).\n3) Puis présente à UNE personne de confiance (parent, ami proche).\n4) Puis à 2 personnes.\n5) Puis en CONDITIONS RÉELLES (debout, chrono, 2 personnes assises).\n\nÉchelle progressive = moins de stress. Ne saute pas d\'étape.\n\nPour les TSA : fais toujours les répétitions dans le MÊME lieu, à la MÊME heure. La routine aide.\n\nEn gros : on s\'habitue au stress petit à petit. 10 répétitions minimum.' },
                    { question: 'Que dit la loi sur les aménagements aux examens ?', answer: 'Article D. 351-27 du Code de l\'éducation :\n— Tout élève en situation de handicap ou avec un trouble de l\'apprentissage a DROIT à des aménagements.\n— La demande se fait via le médecin scolaire ou la MDPH.\n— Le chef d\'établissement transmet au rectorat.\n— Délai : faire la demande AVANT le 31 décembre de l\'année de Terminale (ou dès que possible).\n\nAménagements possibles : tiers-temps, secrétaire, salle séparée, pauses.\n\nEn gros : c\'est un DROIT. Fais la demande le plus tôt possible. Ne laisse personne te dire que "c\'est pas la peine".' }
                ],
                quiz: [
                    { question: 'Le tiers-temps donne combien de temps de préparation en plus ?', options: ['5 minutes', '6 min 40 s', '10 minutes', '20 minutes'], correctIndex: 1, explanation: '1/3 de 20 min = 6 min 40 s. Tu as donc environ 27 min de préparation au lieu de 20.' },
                    { question: 'Pour un élève TSA, le regard vers le jury :', options: ['Est obligatoire dans les yeux', 'Peut être dirigé vers le front ou le haut de la tête', 'N\'est pas du tout nécessaire', 'Doit durer au moins 10 secondes'], correctIndex: 1, explanation: 'Regarder le front ou le haut de la tête suffit. Le jury ne remarque pas la différence et cela reste confortable.' },
                    { question: 'La demande d\'aménagement doit être faite :', options: ['Le jour de l\'examen', 'Le plus tôt possible, avant le 31 décembre', 'Après les résultats', 'Uniquement par un médecin'], correctIndex: 1, explanation: 'La demande doit être anticipée. Avant le 31 décembre de l\'année de Terminale est recommandé.' }
                ]
            },

            // ================================================================
            // SECTION 10 : EXEMPLES DE PLANS COMPLETS
            // ================================================================
            {
                id: 'exemples-plans',
                title: 'Exemples de plans complets',
                icon: '📋',
                content: '<h3>Des modèles de plans pour t\'inspirer</h3>'
                    + '<p>Voici des plans testés et validés par des enseignants. Adapte-les à TON sujet.</p>',
                flashcards: [
                    { question: 'Plan type pour une question scientifique', answer: 'Question exemple : "Comment les vaccins ARNm ont-ils révolutionné la lutte contre les pandémies ?"\n\nACCROCHE : "En décembre 2020, le premier vaccin ARNm de l\'histoire a été injecté. Moins d\'un an après le début de la pandémie."\n\nI. Le principe de l\'ARN messager\n— Différence avec un vaccin classique\n— Comment l\'ARNm donne des instructions aux cellules\n\nII. La révolution : rapidité et adaptabilité\n— Développement en 11 mois (vs 10 ans habituellement)\n— Possibilité de modifier la séquence rapidement\n\nIII. Limites et enjeux éthiques\n— Conservation (chaîne du froid)\n— Accès inégal dans le monde\n— Méfiance du public\n\nCONCLUSION : L\'ARNm ouvre la voie à des traitements contre le cancer et d\'autres maladies.\n\nEn gros : Constat → Explication → Application → Limites. C\'est le plan scientifique classique.' },
                    { question: 'Plan type pour une question de sciences humaines (SES/HGGSP)', answer: 'Question exemple : "L\'école réduit-elle ou reproduit-elle les inégalités sociales ?"\n\nACCROCHE : "En France, un enfant de cadre a 5 fois plus de chances d\'obtenir un diplôme du supérieur qu\'un enfant d\'ouvrier."\n\nI. L\'école comme outil de réduction des inégalités\n— Instruction obligatoire et gratuite (Jules Ferry, 1882)\n— Méritocratie : les diplômes ouvrent des portes\n— Exemple : les bourses, les ZEP\n\nII. L\'école comme machine de reproduction sociale\n— Bourdieu : le capital culturel favorise les classes supérieures\n— Les codes implicites de l\'école (langage, comportement)\n— Exemple : orientation Bac pro vs Bac général selon l\'origine sociale\n\nIII. Pistes pour une école plus égalitaire\n— Mixité sociale, accompagnement personnalisé\n— Limites : le problème dépasse l\'école (logement, emploi des parents)\n\nCONCLUSION : L\'école seule ne peut pas tout résoudre, mais elle reste le meilleur levier.\n\nEn gros : Thèse → Antithèse → Dépassement. Le plan dialectique classique des sciences humaines.' },
                    { question: 'Plan type pour une question croisée (2 spécialités)', answer: 'Question exemple (Maths + Physique) : "Comment les modèles mathématiques permettent-ils de prédire le changement climatique ?"\n\nACCROCHE : "Le GIEC utilise des équations mathématiques pour prédire qu\'en 2100, la température pourrait augmenter de 2 à 4°C."\n\nI. Les modèles climatiques : la physique\n— Effet de serre, bilan radiatif, transferts thermiques\n— Données : température, CO2, niveau des mers\n\nII. La modélisation : les mathématiques\n— Équations différentielles pour simuler l\'évolution\n— Suites et fonctions exponentielles (croissance du CO2)\n— Probabilités et scénarios (optimiste, médian, pessimiste)\n\nIII. Limites et responsabilités\n— Incertitudes des modèles (variables chaotiques)\n— Du modèle à la décision politique\n\nCONCLUSION : Les maths et la physique donnent des outils de prévision, mais agir reste une décision humaine.\n\nEn gros : Spé 1 → Spé 2 → Croisement et limites. Montre que les 2 disciplines s\'éclairent mutuellement.' },
                    { question: 'Comment adapter ces plans à MA question ?', answer: 'Méthode en 4 étapes :\n\n1) CHOISIS un plan-type qui correspond à ton sujet :\n— Scientifique → Constat / Explication / Limites\n— Sciences humaines → Thèse / Antithèse / Dépassement\n— Croisé → Spé 1 / Spé 2 / Croisement\n\n2) REMPLACE les exemples par ceux de TON programme\n\n3) CHERCHE une accroche percutante (chiffre, citation, anecdote)\n\n4) TESTE : présente ton plan à quelqu\'un. S\'il comprend ta question et tes 3 parties en 1 minute, c\'est bon.\n\nEn gros : ne réinvente pas la roue. Prends un modèle, adapte-le, et entraîne-toi.' },
                    { question: 'Comment conclure en 1 minute ?', answer: 'Structure de la conclusion en 3 phrases :\n\n1) RÉSUMÉ : "Nous avons vu que... [rappel des 2-3 parties]"\n2) RÉPONSE : "Pour répondre à la question, ... [ta réponse claire]"\n3) OUVERTURE : "Cela nous amène à nous demander... [question plus large]"\n\nExemple :\n"Nous avons vu que les vaccins ARNm représentent une avancée majeure par leur rapidité et leur adaptabilité, mais qu\'ils posent des questions d\'accès et de confiance. Pour répondre à la question : oui, ils ont révolutionné la lutte contre les pandémies. Cela nous amène à nous demander si cette technologie pourra un jour vaincre le cancer."\n\nEn gros : résumé + réponse + ouverture. 3 phrases, 1 minute, c\'est terminé.' }
                ],
                quiz: [
                    { question: 'Le plan dialectique (thèse/antithèse/dépassement) est adapté pour :', options: ['Les questions scientifiques', 'Les questions de sciences humaines (SES, HGGSP, Philo)', 'Les questions de maths uniquement', 'Les questions fermées'], correctIndex: 1, explanation: 'Le plan dialectique est idéal pour les sciences humaines car il permet de confronter deux points de vue et de les dépasser.' },
                    { question: 'Une bonne accroche peut être :', options: ['Un résumé du plan', 'Un chiffre choc, une citation ou une anecdote', 'La définition d\'un mot', 'Le nom de ta spécialité'], correctIndex: 1, explanation: 'L\'accroche doit capter l\'attention : un chiffre frappant, une citation marquante ou une anecdote personnelle.' },
                    { question: 'La conclusion doit contenir :', options: ['De nouvelles idées', 'Un résumé, une réponse claire et une ouverture', 'Juste "merci"', 'Un exemple supplémentaire'], correctIndex: 1, explanation: 'La conclusion en 3 temps : rappel des idées, réponse à la question, ouverture vers une question plus large.' },
                    { question: 'Pour une question croisant 2 spécialités, le plan idéal est :', options: ['Thèse / Antithèse', 'Spé 1 / Spé 2 / Croisement et limites', 'Chronologique', 'Un seul bloc sans parties'], correctIndex: 1, explanation: 'Le plan croisé montre au jury que tu maîtrises les deux spécialités ET que tu sais les relier. C\'est très valorisé.' }
                ]
            }
        ]
    });
})();
