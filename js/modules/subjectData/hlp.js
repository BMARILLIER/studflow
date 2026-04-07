// hlp.js — Donnees HLP Terminale (Humanites, Litterature et Philosophie)
// Format pedagogique adapte dys/TSA : phrases courtes, exemples concrets, mots difficiles expliques
(function() {
    if (!window.StudFlow || !window.StudFlow.subjects) return;

    window.StudFlow.subjects.register({
        id: 'hlp',
        name: 'HLP',
        icon: '\uD83D\uDCDC',
        color: 'peach',
        sections: [

            // ================================================================
            // SECTION 1 : LA RECHERCHE DE SOI
            // ================================================================
            {
                id: 'recherche-soi',
                title: 'La recherche de soi',
                icon: '\uD83E\uDDE0',
                content: '<h3>Education, transmission et emancipation</h3>'
                    + '<ul>'
                    + '<li><strong>Comment devient-on soi-meme ?</strong></li>'
                    + '<li><strong>Le role de l\'education, de la culture, des autres</strong></li>'
                    + '</ul>',
                flashcards: [
                    { question: 'C\'est quoi "la recherche de soi" en HLP ?', answer: 'C\'est une des grandes questions du programme : COMMENT on devient qui on est ? Ca touche a : l\'EDUCATION (ce qu\'on nous apprend), les EXPERIENCES (ce qu\'on vit), la CULTURE (ce qu\'on lit, regarde, ecoute), les AUTRES (famille, amis, societe). En gros : "qui suis-je ?" n\'a pas de reponse simple. On se construit tout au long de la vie.' },
                    { question: 'C\'est quoi l\'education selon Rousseau ?', answer: 'Jean-Jacques ROUSSEAU (Emile, 1762) dit : l\'homme est BON par nature, c\'est la SOCIETE qui le corrompt. L\'education doit laisser l\'enfant se developper NATURELLEMENT, par l\'EXPERIENCE et la curiosite. Pas de livres avant 12 ans ! Il doit toucher, sentir, explorer. En gros : Rousseau dit "laissez l\'enfant etre enfant." L\'education doit suivre la NATURE, pas la forcer. Mots difficiles : "corrompre" = rendre mauvais, abimer.' },
                    { question: 'C\'est quoi l\'education selon Kant ?', answer: 'KANT (Reflexions sur l\'education, 1803) dit : "L\'homme est la seule creature qui doive etre EDUQUEE." Sans education, l\'homme reste un ANIMAL. L\'education doit developper la RAISON et l\'AUTONOMIE. Etre autonome = penser par SOI-MEME, ne pas suivre les autres sans reflechir. En gros : pour Kant, l\'education = apprendre a penser seul. Mots difficiles : "autonomie" = se donner ses propres regles (auto = soi, nomos = loi).' },
                    { question: 'C\'est quoi la "culture" qui nous forme ?', answer: 'La culture = TOUT ce qui n\'est pas la nature : les livres, les films, les traditions, la langue, les valeurs. On est FORME par notre culture sans s\'en rendre compte. Exemple : un Francais et un Japonais ne pensent pas pareil, non pas parce qu\'ils sont "differents" biologiquement, mais parce que leurs CULTURES les ont formes differemment. En gros : la culture est comme des lunettes — elle change la facon dont on voit le monde.' },
                    { question: 'C\'est quoi l\'emancipation ?', answer: 'S\'EMANCIPER = se liberer d\'une tutelle, d\'une autorite, d\'un conditionnement. Exemples : l\'emancipation des FEMMES (droit de vote, 1944 en France). L\'emancipation des ESCLAVES (abolition, 1848). L\'emancipation INTELLECTUELLE (penser par soi-meme, esprit critique). En gros : s\'emanciper = devenir LIBRE. C\'est le but de l\'education selon les Lumieres. Mots difficiles : "tutelle" = autorite qui controle quelqu\'un (comme un tuteur legal).' },
                    { question: 'C\'est quoi l\'autobiographie comme recherche de soi ?', answer: 'Ecrire sur SA VIE pour COMPRENDRE qui on est. Les Confessions de Rousseau (1782) : "Je veux montrer un homme dans toute la verite de la nature." Montaigne (Essais, 1580) : "Je suis moi-meme la matiere de mon livre." L\'autobiographie = un miroir. En ecrivant, on se DECOUVRE. En gros : ecrire sur soi = se chercher soi-meme. Mots difficiles : "introspection" = regarder en soi, s\'analyser.' },
                    { question: 'Montaigne et les Essais : pourquoi c\'est important ?', answer: 'MONTAIGNE (1533-1592) ecrit les Essais = un livre ou il parle de TOUT (l\'education, la mort, l\'amitie, les cannibales) en partant de LUI-MEME. Il "s\'essaie" = il se teste, il reflechit a voix haute. Phrase celebre : "Que sais-je ?" = le doute comme methode. En gros : Montaigne invente le genre de l\'ESSAI. Il prouve qu\'on peut penser librement, sans dogme. Mots difficiles : "essai" = tentative, test. Montaigne essaie ses idees comme on essaie un vetement.' }
                ],
                quiz: [
                    { question: 'Rousseau pense que l\'homme est naturellement :', options: ['Mauvais', 'Bon', 'Indifferent', 'Rationnel'], correctIndex: 1, explanation: 'Rousseau dit que l\'homme est BON par nature et que c\'est la societe qui le corrompt.' },
                    { question: 'Pour Kant, le but de l\'education est :', options: ['Obeir aux adultes', 'Apprendre a penser par soi-meme (autonomie)', 'Devenir riche', 'Suivre la religion'], correctIndex: 1, explanation: 'Kant veut que l\'education developpe l\'autonomie = la capacite de penser et de juger par soi-meme.' },
                    { question: '"Que sais-je ?" est la devise de :', options: ['Descartes', 'Rousseau', 'Montaigne', 'Voltaire'], correctIndex: 2, explanation: 'Montaigne adopte le doute comme methode : "Que sais-je ?" invite a rester humble face a la connaissance.' },
                    { question: 'S\'emanciper signifie :', options: ['Obeir', 'Se liberer d\'une autorite', 'Se soumettre', 'Emigrer'], correctIndex: 1, explanation: 'L\'emancipation = devenir libre, sortir d\'une tutelle (intellectuelle, politique, sociale).' },
                    { question: 'Les Confessions de Rousseau sont :', options: ['Un roman', 'Une autobiographie', 'Un traite de science', 'Une piece de theatre'], correctIndex: 1, explanation: 'Rousseau ecrit sur sa propre vie pour se montrer "dans toute la verite de la nature." C\'est une autobiographie fondatrice.' }
                ]
            },

            // ================================================================
            // SECTION 2 : L'HUMANITE EN QUESTION
            // ================================================================
            {
                id: 'humanite-question',
                title: 'L\'humanite en question',
                icon: '\u2696\uFE0F',
                content: '<h3>Progres, violence et condition humaine</h3>',
                flashcards: [
                    { question: 'C\'est quoi "l\'humanite en question" en HLP ?', answer: 'Le deuxieme grand theme du programme. Questions : 1) Qu\'est-ce qui fait de nous des HUMAINS ? 2) Le PROGRES rend-il l\'homme meilleur ? 3) L\'homme est-il capable de BARBARIE ? 4) Comment vivre ENSEMBLE malgre nos differences ? En gros : ce theme interroge ce qui nous rend humains — et ce qui peut nous rendre INHUMAINS.' },
                    { question: 'C\'est quoi les Lumieres ?', answer: 'Mouvement intellectuel du XVIIIe siecle (Voltaire, Diderot, Rousseau, Montesquieu). Idees cles : la RAISON doit guider l\'homme (pas la religion ou la superstition). La TOLERANCE (accepter les differences). Le PROGRES (la science et l\'education ameliorent l\'humanite). Les DROITS DE L\'HOMME. En gros : les Lumieres = utiliser sa raison pour ameliorer le monde. Mots difficiles : "Lumieres" = en reference a la lumiere de la raison qui dissipe l\'obscurantisme (l\'ignorance).' },
                    { question: 'Le progres rend-il l\'homme meilleur ?', answer: 'POUR : les Lumieres (XVIIIe) croient au progres. La science, la medecine, l\'education ameliorent la vie. Esperance de vie : 30 ans au Moyen Age → 80 ans aujourd\'hui. CONTRE : le XXe siecle montre que le progres peut servir le MAL. La science a cree la bombe atomique, les gaz de combat, la surveillance de masse. Auschwitz = la barbarie INDUSTRIELLE. En gros : le progres technique ne garantit PAS le progres moral. On peut etre tres avance techniquement et tres cruel.' },
                    { question: 'C\'est quoi la banalite du mal (Hannah Arendt) ?', answer: 'Hannah ARENDT assiste au proces d\'EICHMANN (nazi responsable de la deportation des Juifs, Jerusalem, 1961). Elle decouvre que ce n\'est PAS un monstre mais un BUREAUCRATE banal qui "obeissait aux ordres." Elle invente le concept de "BANALITE DU MAL" : le mal n\'est pas toujours spectaculaire. Il peut etre commis par des gens ORDINAIRES qui ne pensent pas. En gros : le pire mal vient souvent de gens qui ne REFLECHISSENT PAS. Mots difficiles : "banalite" = caractere ordinaire, pas extraordinaire.' },
                    { question: 'C\'est quoi l\'humanisme ?', answer: 'L\'HUMANISME = un mouvement qui place l\'HOMME au centre. Deux sens : 1) HISTORIQUE (XVIe siecle, Renaissance) : Erasme, Rabelais, Montaigne. Retour aux textes antiques, confiance en l\'homme, education. 2) PHILOSOPHIQUE : toute pensee qui defend la dignite, la liberte et les droits de l\'etre humain. En gros : l\'humanisme = l\'homme est capable de grandeur. Il merite respect et liberte.' },
                    { question: 'C\'est quoi la Declaration des droits de l\'homme (1789) ?', answer: 'Texte fondateur de la Revolution francaise. Article 1 : "Les hommes naissent et demeurent LIBRES et EGAUX en droits." Elle affirme : la LIBERTE (d\'opinion, de religion, d\'expression), l\'EGALITE (devant la loi), la PROPRIETE, la RESISTANCE A L\'OPPRESSION. Critique : en 1789, les "hommes" = les hommes BLANCS RICHES. Les femmes, les esclaves, les pauvres sont exclus. Olympe de Gouges ecrit en 1791 la Declaration des droits de la FEMME. En gros : un texte revolutionnaire mais incomplet.' },
                    { question: 'C\'est quoi le transhumanisme ?', answer: 'Le TRANSHUMANISME = l\'idee d\'utiliser la technologie pour AMELIORER l\'etre humain. Exemples : implants cerebraux (Neuralink, Elon Musk), modification genetique, intelligence artificielle. POUR : guerir des maladies, vivre plus longtemps, augmenter les capacites. CONTRE : inegalites (seuls les riches y auront acces), perte d\'humanite, "jouer a Dieu." En gros : le transhumanisme pose LA question : jusqu\'ou peut-on modifier l\'homme sans perdre ce qui fait de nous des humains ?' },
                    { question: 'Comment les ecrivains temoignent-ils de la violence ?', answer: 'La litterature TEMOIGNE de ce que l\'homme fait subir a l\'homme : Primo LEVI (Si c\'est un homme, 1947) : temoignage des camps nazis. "Est-ce un homme, celui qui travaille dans la boue, qui ne connait pas de repos ?" Aime CESAIRE (Cahier d\'un retour au pays natal, 1939) : denonce la colonisation et le racisme. Albert CAMUS (La Peste, 1947) : allegorie du nazisme, l\'homme face au mal. En gros : la litterature dit ce que les mots ordinaires ne peuvent pas exprimer. Elle garde la MEMOIRE de la souffrance.' }
                ],
                quiz: [
                    { question: 'La "banalite du mal" selon Arendt signifie :', options: ['Le mal est toujours spectaculaire', 'Le mal peut etre commis par des gens ordinaires qui ne reflechissent pas', 'Le mal n\'existe pas', 'Seuls les monstres font le mal'], correctIndex: 1, explanation: 'Arendt montre avec le cas Eichmann que le mal peut venir de gens banals qui obeissent sans penser.' },
                    { question: 'Les Lumieres croient en :', options: ['La religion comme guide unique', 'La raison, la tolerance et le progres', 'Le retour au Moyen Age', 'L\'obeissance aux rois'], correctIndex: 1, explanation: 'Les Lumieres (XVIIIe) placent la RAISON au centre : elle eclaire l\'homme et le libere de l\'ignorance.' },
                    { question: 'L\'humanisme de la Renaissance met au centre :', options: ['Dieu', 'L\'homme', 'La nature', 'La technologie'], correctIndex: 1, explanation: 'L\'humanisme place l\'HOMME au centre de la reflexion : sa dignite, sa liberte, son education.' },
                    { question: 'Le transhumanisme veut :', options: ['Revenir a la nature', 'Ameliorer l\'humain par la technologie', 'Interdire la science', 'Supprimer les emotions'], correctIndex: 1, explanation: 'Le transhumanisme veut utiliser la technologie (IA, genetique, implants) pour depasser les limites humaines.' },
                    { question: 'Primo Levi temoigne de :', options: ['La Revolution francaise', 'Les camps de concentration nazis', 'La colonisation', 'La guerre d\'Algerie'], correctIndex: 1, explanation: 'Primo Levi, survivant d\'Auschwitz, ecrit Si c\'est un homme (1947) pour temoigner de l\'horreur des camps.' },
                    { question: 'L\'article 1 de la DDHC (1789) affirme :', options: ['La superiorite de la France', 'Les hommes naissent libres et egaux en droits', 'Le droit divin des rois', 'La liberte du commerce'], correctIndex: 1, explanation: '"Les hommes naissent et demeurent libres et egaux en droits." Texte fondateur, meme s\'il etait incomplet a l\'epoque.' },
                    { question: 'La bombe atomique illustre :', options: ['Le progres moral de l\'humanite', 'Que le progres technique ne garantit pas le progres moral', 'La superiorite de la science', 'La fin des guerres'], correctIndex: 1, explanation: 'La bombe atomique montre que la science peut servir le mal. Le progres technique n\'implique pas le progres moral.' }
                ]
            }
        ]
    });
})();
