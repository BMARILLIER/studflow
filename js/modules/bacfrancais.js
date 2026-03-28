// bacfrancais.js — Contenu bac francais pre-integre
(function() {
    const SECTIONS = [
        {
            id: 'dissertation',
            title: 'Methode dissertation',
            icon: '📝',
            color: 'var(--coral)',
            content: `
                <h3>Structure de la dissertation</h3>
                <p>La dissertation suit toujours le meme schema :</p>
                <ol>
                    <li><strong>Introduction</strong> (1 paragraphe)
                        <ul>
                            <li>Accroche (citation, fait, question)</li>
                            <li>Amener le sujet progressivement</li>
                            <li>Reformuler la problematique</li>
                            <li>Annoncer le plan (2 ou 3 parties)</li>
                        </ul>
                    </li>
                    <li><strong>Developpement</strong> (2 ou 3 parties)
                        <ul>
                            <li>1 partie = 1 idee principale</li>
                            <li>Chaque partie : 2-3 sous-parties</li>
                            <li>Chaque argument : idee + exemple + analyse</li>
                            <li>Transitions entre les parties</li>
                        </ul>
                    </li>
                    <li><strong>Conclusion</strong> (1 paragraphe)
                        <ul>
                            <li>Bilan des parties</li>
                            <li>Reponse a la problematique</li>
                            <li>Ouverture (question plus large)</li>
                        </ul>
                    </li>
                </ol>

                <h3>Les types de plans</h3>
                <ul>
                    <li><strong>Plan dialectique</strong> : These / Antithese / Synthese</li>
                    <li><strong>Plan analytique</strong> : Constat / Causes / Consequences (ou solutions)</li>
                    <li><strong>Plan thematique</strong> : Theme 1 / Theme 2 / Theme 3</li>
                </ul>

                <h3>Conseils pour le jour J</h3>
                <ul>
                    <li>Consacre 30 min au brouillon (plan detaille)</li>
                    <li>Ecris l'intro et la conclusion au brouillon</li>
                    <li>Garde 10 min pour te relire</li>
                    <li>Soigne l'ecriture et les transitions</li>
                </ul>
            `,
            flashcards: [
                { question: "Quelles sont les 4 etapes de l'introduction de dissertation ?", answer: "Accroche, amener le sujet, problematique, annonce du plan" },
                { question: "Qu'est-ce qu'un plan dialectique ?", answer: "These / Antithese / Synthese — On examine d'abord une position, puis son contraire, puis on depasse l'opposition" },
                { question: "Combien de sous-parties minimum par partie ?", answer: "2 a 3 sous-parties par grande partie, chacune avec un argument + exemple + analyse" },
                { question: "Que doit contenir la conclusion ?", answer: "Un bilan des parties, une reponse a la problematique, et une ouverture" },
                { question: "Quelle est la structure d'un argument ?", answer: "Idee → Exemple precis → Analyse de l'exemple (ne jamais laisser un exemple sans analyse)" },
                { question: "Qu'est-ce qu'un plan analytique ?", answer: "Constat / Causes / Consequences (ou solutions) — Utilise pour les sujets qui demandent d'analyser un phenomene" },
                { question: "Combien de temps consacrer au brouillon ?", answer: "Environ 30 minutes pour un plan detaille + redaction de l'intro et conclusion au brouillon" },
                { question: "Qu'est-ce qu'une transition ?", answer: "Une phrase entre deux parties qui fait le bilan de ce qui precede et annonce ce qui suit" },
                { question: "Comment choisir son type de plan ?", answer: "Dialectique si le sujet invite au debat (oui/non), analytique si on analyse un phenomene, thematique si on explore un theme" },
                { question: "Quelle est l'erreur la plus frequente en dissertation ?", answer: "Faire du hors-sujet ou oublier d'analyser les exemples (les citer sans les commenter)" }
            ],
            quiz: [
                { question: "Dans quel ordre se structure l'introduction ?", options: ["Accroche, sujet, problematique, plan", "Plan, sujet, accroche, problematique", "Problematique, accroche, plan, sujet", "Sujet, plan, problematique, accroche"], correctIndex: 0, explanation: "L'intro suit toujours : accroche → amener le sujet → problematique → annonce du plan" },
                { question: "Quel plan utiliser pour un sujet 'Faut-il... ?' ?", options: ["Plan dialectique", "Plan analytique", "Plan chronologique", "Plan thematique"], correctIndex: 0, explanation: "Les sujets en 'Faut-il' invitent au debat, donc plan dialectique (these/antithese/synthese)" },
                { question: "Que fait-on dans la synthese d'un plan dialectique ?", options: ["On depasse l'opposition these/antithese", "On repete la these", "On donne son avis personnel", "On cite de nouveaux exemples"], correctIndex: 0, explanation: "La synthese depasse l'opposition en proposant une vision plus nuancee" },
                { question: "Combien de temps minimum garder pour la relecture ?", options: ["10 minutes", "2 minutes", "30 minutes", "Pas besoin de relire"], correctIndex: 0, explanation: "Garder 10 min pour relire permet de corriger les fautes et ameliorer les transitions" },
                { question: "Qu'est-ce qui manque le plus souvent dans les copies ?", options: ["L'analyse des exemples", "Les exemples", "L'introduction", "La conclusion"], correctIndex: 0, explanation: "Beaucoup d'eleves citent des exemples sans les analyser, ce qui fait perdre des points" }
            ]
        },
        {
            id: 'commentaire',
            title: 'Methode commentaire de texte',
            icon: '📖',
            color: 'var(--blue-deep)',
            content: `
                <h3>Etape 1 : Lire et analyser le texte</h3>
                <ul>
                    <li>Lire 3 fois : vue globale, details, impression</li>
                    <li>Identifier : auteur, epoque, mouvement litteraire, genre</li>
                    <li>Reperer les champs lexicaux dominants</li>
                    <li>Surligner les procedes stylistiques</li>
                </ul>

                <h3>Etape 2 : Trouver les axes</h3>
                <ul>
                    <li>2 axes (grandes idees qui traversent le texte)</li>
                    <li>Chaque axe : 2-3 sous-parties</li>
                    <li>Les axes ne doivent pas se repeter</li>
                    <li>Du plus evident au plus subtil</li>
                </ul>

                <h3>Les procedes a connaitre</h3>
                <ul>
                    <li><strong>Figures de style</strong> : metaphore, comparaison, personnification, hyperbole, litote, antithese, oxymore, anaphore</li>
                    <li><strong>Registres</strong> : lyrique, tragique, comique, satirique, pathetique, epique</li>
                    <li><strong>Enonciation</strong> : pronoms, temps verbaux, modalisateurs</li>
                    <li><strong>Rythme</strong> : phrases longues/courtes, ponctuation, enjambements (en poesie)</li>
                </ul>

                <h3>Structure du commentaire</h3>
                <ol>
                    <li>Introduction : auteur, oeuvre, contexte, problematique, axes</li>
                    <li>Axe 1 avec sous-parties (citation + procede + interpretation)</li>
                    <li>Transition</li>
                    <li>Axe 2 avec sous-parties</li>
                    <li>Conclusion : bilan + ouverture</li>
                </ol>
            `,
            flashcards: [
                { question: "Combien d'axes dans un commentaire de texte ?", answer: "2 axes (parfois 3 si le texte est riche), du plus evident au plus subtil" },
                { question: "Qu'est-ce qu'une metaphore ?", answer: "Une comparaison sans mot outil (comme, tel). Ex: 'La vie est un long fleuve tranquille'" },
                { question: "Qu'est-ce qu'une anaphore ?", answer: "La repetition d'un mot ou groupe de mots en debut de phrases ou vers successifs" },
                { question: "Quelle est la difference entre registre lyrique et pathetique ?", answer: "Lyrique = expression des sentiments personnels (joie, amour). Pathetique = susciter la pitie, la compassion du lecteur" },
                { question: "Qu'est-ce qu'un oxymore ?", answer: "L'association de deux mots de sens contraires. Ex: 'Cette obscure clarte' (Corneille)" },
                { question: "Comment citer un texte dans le commentaire ?", answer: "Entre guillemets, avec le numero de ligne entre parentheses. Ex: 'le ciel etait bleu' (l.5)" },
                { question: "Qu'est-ce qu'un champ lexical ?", answer: "Un ensemble de mots se rapportant a un meme theme. Ex: champ lexical de la mort = 'tombeau, defunt, trepas, mourir'" },
                { question: "Qu'est-ce que l'hyperbole ?", answer: "Une exageration. Ex: 'Je meurs de faim', 'un bruit a reveiller les morts'" },
                { question: "Qu'est-ce qu'un modalisateur ?", answer: "Un mot qui exprime le degre de certitude du locuteur : peut-etre, certainement, il semble que..." },
                { question: "Que doit contenir chaque sous-partie du commentaire ?", answer: "Citation du texte + identification du procede + interpretation (ce que ca produit comme effet)" }
            ],
            quiz: [
                { question: "Quelle figure de style : 'La nature est un temple' ?", options: ["Metaphore", "Comparaison", "Personnification", "Allegorie"], correctIndex: 0, explanation: "C'est une metaphore car il n'y a pas de mot outil de comparaison (comme, tel)" },
                { question: "Le registre tragique est associe a :", options: ["La fatalite et l'impuissance face au destin", "Le rire et la moquerie", "La description de la nature", "L'expression des sentiments amoureux"], correctIndex: 0, explanation: "Le registre tragique evoque la fatalite, le destin ineluctable, la mort" },
                { question: "Combien de lectures minimum avant de commencer ?", options: ["3 lectures", "1 lecture", "5 lectures", "Ca depend"], correctIndex: 0, explanation: "3 lectures : vue globale, details, impression/interpretation" },
                { question: "'Il n'est pas stupide' est une :", options: ["Litote", "Hyperbole", "Euphemisme", "Antithese"], correctIndex: 0, explanation: "La litote dit moins pour suggerer plus. Ici on veut dire 'il est intelligent'" },
                { question: "Dans le commentaire, on ne doit jamais :", options: ["Paraphraser le texte sans analyser", "Citer le texte", "Donner son avis", "Identifier les procedes"], correctIndex: 0, explanation: "La paraphrase (repeter le texte avec d'autres mots sans analyser) est l'erreur n°1" }
            ]
        },
        {
            id: 'oral',
            title: 'Preparation oral',
            icon: '🎤',
            color: 'var(--green)',
            content: `
                <h3>Partie 1 : L'explication lineaire (12 min)</h3>
                <ul>
                    <li>Presenter le texte (auteur, oeuvre, contexte, mouvement)</li>
                    <li>Lire le texte a voix haute (soigner la lecture !)</li>
                    <li>Annoncer la problematique et les mouvements du texte</li>
                    <li>Expliquer le texte mouvement par mouvement</li>
                    <li>Conclure : reponse a la problematique + ouverture</li>
                </ul>

                <h3>Partie 2 : L'entretien (8 min)</h3>
                <ul>
                    <li>L'examinateur pose des questions sur l'oeuvre choisie</li>
                    <li>Montrer qu'on a LU l'oeuvre (pas juste les fiches)</li>
                    <li>Donner des exemples precis (scenes, personnages, citations)</li>
                    <li>Exprimer un avis personnel argumente</li>
                </ul>

                <h3>Gerer le stress de l'oral</h3>
                <ul>
                    <li>S'entrainer a voix haute chez soi (minuteur !)</li>
                    <li>Se filmer ou s'enregistrer pour voir les tics de langage</li>
                    <li>Respirer avant d'entrer : 4-7-8 (3 cycles)</li>
                    <li>Parler lentement, c'est OK de faire des pauses</li>
                    <li>Regarder l'examinateur, sourire</li>
                </ul>

                <h3>Erreurs a eviter</h3>
                <ul>
                    <li>❌ Reciter par coeur (l'examinateur le voit)</li>
                    <li>❌ Parler trop vite</li>
                    <li>❌ Dire "je ne sais pas" sans essayer</li>
                    <li>❌ Oublier de lire le texte</li>
                </ul>
            `,
            flashcards: [
                { question: "Combien de temps dure l'explication lineaire a l'oral ?", answer: "12 minutes — c'est la premiere partie de l'epreuve" },
                { question: "Que faire si on ne connait pas la reponse a une question de l'entretien ?", answer: "Ne jamais dire 'je ne sais pas'. Reformuler, faire des liens avec ce qu'on sait, proposer une reflexion" },
                { question: "Qu'est-ce qu'une explication lineaire ?", answer: "Expliquer le texte dans l'ordre, mouvement par mouvement, en analysant les procedes et leur effet" },
                { question: "Combien de temps dure l'entretien ?", answer: "8 minutes — l'examinateur pose des questions sur l'oeuvre choisie par l'eleve" },
                { question: "Faut-il lire le texte a voix haute ?", answer: "Oui ! C'est obligatoire et note. Soigner le rythme, les pauses, l'intonation" },
                { question: "Comment commencer son explication ?", answer: "Presenter le texte (auteur, oeuvre, date, mouvement), puis annoncer la problematique et les mouvements" },
                { question: "Qu'est-ce qu'un 'mouvement' dans un texte ?", answer: "Un passage qui forme une unite de sens. Un texte a generalement 2 a 4 mouvements" },
                { question: "Comment se preparer a l'entretien ?", answer: "Lire l'oeuvre entiere, preparer des arguments pour/contre, des citations precises, un avis personnel" },
                { question: "Quelle technique anti-stress avant l'oral ?", answer: "Respiration 4-7-8 : inspirer 4s, retenir 7s, expirer 8s. Repeter 3 fois" },
                { question: "Comment terminer son explication lineaire ?", answer: "Conclure en repondant a la problematique et proposer une ouverture vers l'oeuvre ou le mouvement litteraire" }
            ],
            quiz: [
                { question: "Quelle est la duree totale de l'oral de francais ?", options: ["20 minutes (12 + 8)", "30 minutes", "15 minutes", "25 minutes"], correctIndex: 0, explanation: "12 min d'explication lineaire + 8 min d'entretien = 20 min au total" },
                { question: "Pendant l'entretien, l'examinateur interroge sur :", options: ["L'oeuvre choisie par l'eleve", "Tous les textes etudies", "La grammaire", "L'histoire litteraire"], correctIndex: 0, explanation: "L'entretien porte sur l'oeuvre que l'eleve a choisie de presenter" },
                { question: "Que faire en premier dans l'explication lineaire ?", options: ["Presenter le texte et son contexte", "Commencer a expliquer directement", "Lire le texte", "Donner son avis"], correctIndex: 0, explanation: "On commence par la presentation (auteur, oeuvre, contexte), puis la lecture, puis l'explication" },
                { question: "Comment gerer un blanc pendant l'oral ?", options: ["Respirer, reformuler la derniere idee", "Dire 'je ne sais plus'", "Passer a la suite", "Demander de l'aide"], correctIndex: 0, explanation: "Un blanc, ca arrive. Respirer, reformuler ce qu'on vient de dire permet de retrouver le fil" },
                { question: "Le plus important a l'oral est de :", options: ["Montrer qu'on comprend le texte", "Reciter son analyse par coeur", "Parler le plus vite possible", "Utiliser un vocabulaire complique"], correctIndex: 0, explanation: "L'examinateur veut voir que vous comprenez le texte, pas que vous recitez" }
            ]
        },
        {
            id: 'revisions',
            title: 'Organisation revisions bac',
            icon: '📅',
            color: '#FF9800',
            content: `
                <h3>Planning type — 4 semaines avant le bac</h3>
                <ul>
                    <li><strong>Semaine 1</strong> : Relire TOUS les textes + faire les fiches manquantes</li>
                    <li><strong>Semaine 2</strong> : S'entrainer sur les methodes (1 dissert + 1 commentaire)</li>
                    <li><strong>Semaine 3</strong> : Reviser les oeuvres + s'entrainer a l'oral</li>
                    <li><strong>Semaine 4</strong> : Revisions ciblees (points faibles) + oral blanc</li>
                </ul>

                <h3>Priorites de revision</h3>
                <ol>
                    <li><strong>Priorite 1</strong> : Les textes de l'explication lineaire (on les connait ou pas)</li>
                    <li><strong>Priorite 2</strong> : L'oeuvre de l'entretien (l'avoir lue, avoir des arguments)</li>
                    <li><strong>Priorite 3</strong> : Les methodes (dissertation ou commentaire au choix)</li>
                    <li><strong>Priorite 4</strong> : La grammaire (question de grammaire a l'oral)</li>
                </ol>

                <h3>Rythme quotidien ideal</h3>
                <ul>
                    <li>Matin (2h) : Travail de fond (methode, redaction, oral)</li>
                    <li>Apres-midi (1h30) : Revision active (flashcards, quiz, fiches)</li>
                    <li>Soir (30 min) : Relecture legere avant de dormir</li>
                    <li>Total : 4h/jour max de revision francais</li>
                </ul>

                <h3>Le jour du bac ecrit</h3>
                <ul>
                    <li>Lire le sujet 2 fois avant de choisir</li>
                    <li>Ne pas se precipiter : 30 min de brouillon minimum</li>
                    <li>Choisir entre dissertation et commentaire (pas les deux !)</li>
                    <li>Garder 10-15 min de relecture</li>
                    <li>Soigner l'introduction et la conclusion (premiere et derniere impression)</li>
                </ul>
            `,
            flashcards: [
                { question: "Combien de semaines idealement pour reviser le bac francais ?", answer: "4 semaines minimum : fiches, methodes, oral, revisions ciblees" },
                { question: "Quelle est la priorite n°1 de revision ?", answer: "Les textes de l'explication lineaire — c'est le coeur de l'oral" },
                { question: "Combien de temps de revision par jour maximum ?", answer: "4h/jour max (2h le matin + 1h30 l'apres-midi + 30 min le soir)" },
                { question: "Au bac ecrit, faut-il choisir dissertation OU commentaire ?", answer: "Oui, il faut choisir UN seul exercice et le faire correctement, pas les deux" },
                { question: "Combien de temps pour le brouillon au bac ?", answer: "30 minutes minimum — c'est indispensable pour structurer sa pensee" },
                { question: "Que reviser en semaine 1 ?", answer: "Relire TOUS les textes etudies en classe et completer les fiches manquantes" },
                { question: "Que reviser en semaine 3 ?", answer: "Les oeuvres completes + s'entrainer a l'oral (se chronometrer, s'enregistrer)" },
                { question: "Combien de temps garder pour la relecture le jour J ?", answer: "10 a 15 minutes — pour corriger l'orthographe et ameliorer les formulations" },
                { question: "Quel est le rythme ideal de revision le soir ?", answer: "30 minutes de relecture legere avant de dormir — le cerveau consolide pendant le sommeil" },
                { question: "Que faire en semaine 4 avant le bac ?", answer: "Revisions ciblees sur les points faibles + oral blanc avec un ami ou un parent" }
            ],
            quiz: [
                { question: "Quel est le planning ideal en semaine 2 ?", options: ["S'entrainer sur les methodes (1 dissert + 1 commentaire)", "Relire tous les textes", "Ne rien faire", "Reviser que la grammaire"], correctIndex: 0, explanation: "La semaine 2 est dediee a la pratique : rediger une dissertation et un commentaire complets" },
                { question: "Combien d'heures de revision francais par jour max ?", options: ["4 heures", "8 heures", "2 heures", "6 heures"], correctIndex: 0, explanation: "Au-dela de 4h/jour sur une seule matiere, l'efficacite chute fortement" },
                { question: "Le jour du bac, combien de temps pour lire le sujet ?", options: ["Lire 2 fois calmement", "Lire une fois rapidement", "Ne pas lire, commencer directement", "Lire 5 fois"], correctIndex: 0, explanation: "2 lectures minimum pour bien comprendre ce qui est demande et choisir son sujet" },
                { question: "La revision la plus efficace le soir est :", options: ["Relecture legere de 30 min", "Redaction complete d'un devoir", "Rien, il faut se reposer", "Apprendre de nouvelles notions"], correctIndex: 0, explanation: "Le soir, une relecture legere permet au cerveau de consolider pendant le sommeil" },
                { question: "Quelle est la priorite n°4 de revision ?", options: ["La grammaire", "Les textes", "Les oeuvres", "Les methodes"], correctIndex: 0, explanation: "La grammaire est la priorite 4 car elle concerne la question de grammaire a l'oral (peu de points)" }
            ]
        },
        {
            id: 'figures-de-style',
            title: 'Les Figures de style',
            icon: '\u270D\uFE0F',
            color: '#e74c3c',
            content: `
                <h3>Les figures d'analogie</h3>
                <p>Elles rapprochent deux elements pour creer du sens :</p>
                <ul>
                    <li><strong>Comparaison</strong> : rapprochement avec un mot outil (comme, tel, semblable a). Ex : "La terre est bleue comme une orange" (Eluard)</li>
                    <li><strong>Metaphore</strong> : comparaison sans mot outil. Ex : "Ma jeunesse ne fut qu'un tenebreux orage" (Baudelaire)</li>
                    <li><strong>Personnification</strong> : attribuer des traits humains a un objet ou un animal. Ex : "La mer qui monte murmure" </li>
                    <li><strong>Allegorie</strong> : representer une idee abstraite sous forme concrete. Ex : la Justice avec sa balance et son glaive</li>
                    <li><strong>Synesthesie</strong> : meler des sensations de nature differente. Ex : "les parfums, les couleurs et les sons se repondent" (Baudelaire)</li>
                </ul>

                <h3>Les figures de substitution</h3>
                <ul>
                    <li><strong>Metonymie</strong> : designer un element par un autre qui lui est lie. Ex : "boire un verre" (le contenant pour le contenu)</li>
                    <li><strong>Synecdoque</strong> : designer le tout par la partie ou inversement. Ex : "une voile a l'horizon" (le bateau)</li>
                    <li><strong>Periphrase</strong> : remplacer un mot par une expression equivalente. Ex : "la Ville lumiere" pour Paris</li>
                    <li><strong>Antonomase</strong> : utiliser un nom propre comme nom commun ou inversement. Ex : "un harpagon" pour un avare</li>
                </ul>

                <h3>Les figures d'opposition</h3>
                <ul>
                    <li><strong>Antithese</strong> : opposer deux idees dans une meme phrase. Ex : "Je vis, je meurs ; je me brule et me noye" (Sceve)</li>
                    <li><strong>Oxymore</strong> : associer deux mots de sens contraires. Ex : "Cette obscure clarte qui tombe des etoiles" (Corneille)</li>
                    <li><strong>Paradoxe</strong> : affirmer une idee contraire a l'opinion commune. Ex : "Il faut etre absolument moderne" (Rimbaud)</li>
                    <li><strong>Chiasme</strong> : croisement de termes selon le schema AB/BA. Ex : "Il faut manger pour vivre et non vivre pour manger" (Moliere)</li>
                    <li><strong>Ironie</strong> : dire le contraire de ce que l'on pense. Ex : "Quel courage ! Fuir devant l'ennemi..."</li>
                </ul>

                <h3>Les figures d'insistance et d'attenuation</h3>
                <ul>
                    <li><strong>Anaphore</strong> : repetition d'un mot en debut de phrases ou vers. Ex : "Moi president..." </li>
                    <li><strong>Gradation</strong> : enumeration de termes d'intensite croissante ou decroissante. Ex : "Va, cours, vole et nous venge" (Corneille)</li>
                    <li><strong>Hyperbole</strong> : exageration expressive. Ex : "un bruit a reveiller les morts"</li>
                    <li><strong>Litote</strong> : dire moins pour suggerer plus. Ex : "Va, je ne te hais point" (Corneille) = je t'aime</li>
                    <li><strong>Euphemisme</strong> : attenuer une realite desagreable. Ex : "il nous a quittes" pour "il est mort"</li>
                    <li><strong>Pleonasme</strong> : redondance volontaire pour insister. Ex : "monter en haut", "je l'ai vu de mes propres yeux"</li>
                </ul>

                <h3>Les figures de construction et de sonorite</h3>
                <ul>
                    <li><strong>Parallelisme</strong> : repetition d'une meme structure syntaxique. Ex : "Ni vu ni connu"</li>
                    <li><strong>Ellipse</strong> : suppression d'un ou plusieurs mots. Ex : "Lui, president ? Jamais !"</li>
                    <li><strong>Anacoluthe</strong> : rupture de construction dans la phrase. Ex : "Le nez de Cleopatre, s'il eut ete plus court, la face du monde en eut ete changee" (Pascal)</li>
                    <li><strong>Zeugme</strong> : reunir sous un meme verbe des complements de nature differente. Ex : "Vetu de probite candide et de lin blanc" (Hugo)</li>
                    <li><strong>Enjambement</strong> : en poesie, la phrase deborde sur le vers suivant</li>
                    <li><strong>Alliteration</strong> : repetition d'une meme consonne. Ex : "Pour qui sont ces serpents qui sifflent sur vos tetes" (Racine)</li>
                    <li><strong>Assonance</strong> : repetition d'une meme voyelle. Ex : "Je fais souvent ce reve etrange et penetrant" (Verlaine)</li>
                    <li><strong>Apostrophe</strong> : interpellation directe du lecteur ou d'une entite. Ex : "O Mort, vieux capitaine" (Baudelaire)</li>
                    <li><strong>Prosopopee</strong> : faire parler un absent, un mort ou une chose. Ex : La Mort qui parle dans les Fables de La Fontaine</li>
                    <li><strong>Syllepse</strong> : emploi d'un mot a la fois au sens propre et au sens figure. Ex : "Bruler de desir"</li>
                </ul>
            `,
            flashcards: [
                { question: "Qu'est-ce qu'une metaphore ?", answer: "Une comparaison sans mot outil (comme, tel, ainsi que). Elle cree une image en identifiant un element a un autre. Ex : 'Ma jeunesse ne fut qu'un tenebreux orage' (Baudelaire)." },
                { question: "Quelle difference entre comparaison et metaphore ?", answer: "La comparaison utilise un mot outil (comme, tel, pareil a), la metaphore non. 'Il est fort comme un lion' = comparaison. 'Ce lion de courage' = metaphore." },
                { question: "Qu'est-ce qu'une personnification ?", answer: "Attribuer des qualites humaines a un animal, un objet ou une abstraction. Ex : 'La mer gronde et se plaint' — la mer agit comme un etre humain." },
                { question: "Qu'est-ce qu'une allegorie ?", answer: "La representation d'une idee abstraite sous une forme concrete, souvent un personnage. Ex : Marianne represente la Republique. La Mort avec sa faux." },
                { question: "Qu'est-ce qu'une metonymie ?", answer: "Designer un element par un autre qui lui est logiquement lie (cause/effet, contenant/contenu, lieu/institution). Ex : 'boire un verre' (contenant pour contenu)." },
                { question: "Qu'est-ce qu'une synecdoque ?", answer: "Variante de la metonymie : designer le tout par la partie ou la partie par le tout. Ex : 'une voile a l'horizon' (la voile pour le bateau entier)." },
                { question: "Qu'est-ce qu'un oxymore ?", answer: "L'association de deux mots de sens opposes dans un meme groupe. Ex : 'Cette obscure clarte qui tombe des etoiles' (Corneille). Effet : tension, surprise." },
                { question: "Qu'est-ce qu'une antithese ?", answer: "L'opposition de deux idees, deux mots ou deux groupes dans une meme phrase ou un meme paragraphe. Ex : 'Je vis, je meurs ; je me brule et me noye' (Sceve)." },
                { question: "Qu'est-ce qu'un paradoxe ?", answer: "Une affirmation qui contredit l'opinion commune ou la logique. Ex : Voltaire ecrit 'le superflu, chose tres necessaire' pour provoquer la reflexion." },
                { question: "Qu'est-ce qu'un chiasme ?", answer: "Un croisement de termes selon le schema AB/BA. Ex : 'Il faut manger pour vivre et non vivre pour manger' (Moliere). Effet : mise en relief de l'opposition." },
                { question: "Qu'est-ce qu'une anaphore ?", answer: "La repetition d'un meme mot ou groupe en debut de vers ou de phrases successives. Ex : 'Rome, l'unique objet... Rome, a qui...' Effet : insistance, rythme oratoire." },
                { question: "Qu'est-ce qu'une gradation ?", answer: "Une enumeration de termes d'intensite croissante (ou decroissante). Ex : 'Va, cours, vole et nous venge' (Corneille). Effet : crescendo dramatique." },
                { question: "Qu'est-ce qu'une hyperbole ?", answer: "Une exageration volontaire pour produire un effet fort. Ex : 'un bruit a reveiller les morts'. Effet : amplification du propos, registre epique ou comique." },
                { question: "Qu'est-ce qu'une litote ?", answer: "Dire moins pour suggerer plus. Ex : 'Va, je ne te hais point' (Corneille) signifie 'je t'aime'. L'attenuation rend l'expression plus forte." },
                { question: "Qu'est-ce qu'un euphemisme ?", answer: "Attenuer une realite desagreable. Ex : 'il nous a quittes' pour 'il est mort'. Contrairement a la litote, l'euphemisme ne renforce pas le sens." },
                { question: "Quelle difference entre litote et euphemisme ?", answer: "La litote attenue pour renforcer le sens (dire moins pour suggerer plus). L'euphemisme attenue pour adoucir une realite dure, sans intention d'amplification." },
                { question: "Qu'est-ce qu'une periphrase ?", answer: "Remplacer un mot par une expression plus longue qui le decrit. Ex : 'l'astre du jour' pour le soleil, 'la Ville lumiere' pour Paris." },
                { question: "Qu'est-ce qu'une assonance ?", answer: "La repetition d'un meme son vocalique. Ex : 'Je fais souvent ce reve etrange et penetrant' (Verlaine) — repetition du son [an]." },
                { question: "Qu'est-ce qu'une alliteration ?", answer: "La repetition d'une meme consonne. Ex : 'Pour qui sont ces serpents qui sifflent sur vos tetes' (Racine) — alliteration en [s] suggerant le sifflement." },
                { question: "Qu'est-ce qu'un enjambement en poesie ?", answer: "Quand une phrase ou un groupe syntaxique deborde du vers sur le vers suivant. Effet : rompre le rythme attendu, creer une continuite ou un effet de surprise." },
                { question: "Qu'est-ce qu'une apostrophe ?", answer: "Interpellation directe d'un destinataire (personne, objet, abstraction). Ex : 'O Mort, vieux capitaine, il est temps !' (Baudelaire). Effet : dramatisation, lyrisme." },
                { question: "Qu'est-ce qu'une prosopopee ?", answer: "Faire parler un absent, un mort ou une entite abstraite. Ex : La Fontaine fait parler la Mort dans ses Fables. C'est une forme extreme de personnification." },
                { question: "Qu'est-ce qu'un zeugme ?", answer: "Reunir sous un meme verbe ou une meme construction des complements de nature differente (concret + abstrait). Ex : 'Vetu de probite candide et de lin blanc' (Hugo)." },
                { question: "Qu'est-ce qu'une syllepse ?", answer: "L'emploi d'un mot a la fois au sens propre et au sens figure dans le meme enonce. Ex : 'bruler d'amour' joue sur le sens physique et sentimental." },
                { question: "Qu'est-ce qu'un pleonasme ?", answer: "La repetition de deux termes de meme sens pour insister. Ex : 'monter en haut', 'je l'ai vu de mes propres yeux'. Volontaire, il renforce l'expression." },
                { question: "Qu'est-ce qu'une ellipse ?", answer: "La suppression d'un ou plusieurs mots normalement attendus. Ex : 'Lui, president ? Jamais !' L'ellipse accelere le rythme et concentre le sens." },
                { question: "Qu'est-ce qu'un parallelisme ?", answer: "La repetition d'une meme structure syntaxique. Ex : 'Ni vu ni connu'. Effet : symetrie, insistance, equilibre rythmique." },
                { question: "Qu'est-ce qu'une antonomase ?", answer: "Utiliser un nom propre comme nom commun, ou inversement. Ex : 'un harpagon' pour un avare (d'apres le personnage de Moliere)." },
                { question: "Qu'est-ce qu'une synesthesie ?", answer: "Le melange de perceptions sensorielles differentes (vue, ouie, odorat...). Ex : 'les parfums, les couleurs et les sons se repondent' (Baudelaire, Correspondances)." },
                { question: "Qu'est-ce qu'une anacoluthe ?", answer: "Une rupture de construction grammaticale dans la phrase. Ex : 'Le nez de Cleopatre, s'il eut ete plus court, la face du monde en eut ete changee' (Pascal). Effet : surprise, mise en relief." },
                { question: "Qu'est-ce que l'ironie comme figure de style ?", answer: "Dire le contraire de ce que l'on pense, en laissant comprendre son vrai avis par le contexte ou le ton. Ex : Voltaire use d'ironie dans Candide pour critiquer l'optimisme." }
            ],
            quiz: [
                { question: "'Ma jeunesse ne fut qu'un tenebreux orage' (Baudelaire). Quelle figure ?", options: ["Metaphore", "Comparaison", "Hyperbole", "Allegorie"], correctIndex: 0, explanation: "Il n'y a pas de mot outil de comparaison : la jeunesse est directement identifiee a un orage. C'est une metaphore." },
                { question: "'Pour qui sont ces serpents qui sifflent sur vos tetes' (Racine). Quelle figure sonore ?", options: ["Alliteration en [s]", "Assonance en [a]", "Rime riche", "Onomatopee"], correctIndex: 0, explanation: "La repetition de la consonne [s] (serpents, sifflent, sur) est une alliteration qui imite le sifflement." },
                { question: "'Va, je ne te hais point' (Corneille). Quelle figure ?", options: ["Litote", "Euphemisme", "Ironie", "Antithese"], correctIndex: 0, explanation: "Chimene dit moins pour suggerer plus : 'je ne te hais point' signifie 'je t'aime'. C'est une litote." },
                { question: "'Cette obscure clarte qui tombe des etoiles' (Corneille). Quelle figure ?", options: ["Oxymore", "Antithese", "Paradoxe", "Metaphore"], correctIndex: 0, explanation: "'Obscure clarte' associe deux termes opposes dans un meme groupe nominal : c'est un oxymore." },
                { question: "'Va, cours, vole et nous venge' (Corneille). Quelle figure ?", options: ["Gradation", "Anaphore", "Enumeration", "Hyperbole"], correctIndex: 0, explanation: "Les verbes sont classes par intensite croissante (va < cours < vole), c'est une gradation ascendante." },
                { question: "'Il faut manger pour vivre et non vivre pour manger' (Moliere). Quelle figure ?", options: ["Chiasme", "Antithese", "Parallelisme", "Oxymore"], correctIndex: 0, explanation: "La structure AB/BA (manger-vivre / vivre-manger) est un chiasme qui met en relief l'inversion de sens." },
                { question: "Quel est l'effet principal d'une anaphore ?", options: ["Insistance et rythme oratoire", "Attenuation du propos", "Surprise par opposition", "Acceleration du recit"], correctIndex: 0, explanation: "La repetition en debut de phrase ou de vers cree un effet martelant qui insiste sur l'idee." },
                { question: "'Vetu de probite candide et de lin blanc' (Hugo). Quelle figure ?", options: ["Zeugme", "Metaphore", "Parallelisme", "Synecdoque"], correctIndex: 0, explanation: "Le verbe 'vetu' reunit un complement abstrait (probite) et un concret (lin blanc) : c'est un zeugme." },
                { question: "L'expression 'boire un verre' est une :", options: ["Metonymie", "Synecdoque", "Metaphore", "Periphrase"], correctIndex: 0, explanation: "On designe le contenu (la boisson) par le contenant (le verre). C'est une metonymie contenant/contenu." },
                { question: "'O Mort, vieux capitaine, il est temps !' (Baudelaire). Quelle figure ?", options: ["Apostrophe", "Prosopopee", "Personnification", "Anaphore"], correctIndex: 0, explanation: "Le poete interpelle directement la Mort : c'est une apostrophe. (Il y a aussi personnification, mais la figure dominante ici est l'apostrophe.)" },
                { question: "Quelle figure dit le contraire de ce que l'on pense ?", options: ["Ironie", "Litote", "Euphemisme", "Paradoxe"], correctIndex: 0, explanation: "L'ironie consiste a dire le contraire de ce que l'on pense. La litote dit moins, l'euphemisme adoucit, le paradoxe contredit l'opinion commune." },
                { question: "'La Ville lumiere' pour designer Paris est une :", options: ["Periphrase", "Metonymie", "Antonomase", "Allegorie"], correctIndex: 0, explanation: "On remplace un mot (Paris) par une expression descriptive equivalente : c'est une periphrase." },
                { question: "'les parfums, les couleurs et les sons se repondent' (Baudelaire). Quelle figure ?", options: ["Synesthesie", "Enumeration", "Gradation", "Personnification"], correctIndex: 0, explanation: "Baudelaire mele differentes perceptions sensorielles (odorat, vue, ouie) : c'est une synesthesie, figure cle des Correspondances." },
                { question: "Quelle est la difference entre antithese et oxymore ?", options: ["L'antithese oppose des groupes distincts, l'oxymore les unit dans un meme groupe", "Ce sont des synonymes", "L'oxymore est plus violente", "L'antithese est reservee a la poesie"], correctIndex: 0, explanation: "L'antithese oppose des termes dans la phrase. L'oxymore les fusionne dans un meme groupe nominal (ex : 'obscure clarte')." },
                { question: "'Un harpagon' pour designer un avare est une :", options: ["Antonomase", "Periphrase", "Metonymie", "Allegorie"], correctIndex: 0, explanation: "Le nom propre Harpagon (personnage de Moliere) est devenu nom commun pour designer un avare : c'est une antonomase." },
                { question: "Quelle figure consiste a supprimer des mots attendus ?", options: ["Ellipse", "Litote", "Euphemisme", "Anacoluthe"], correctIndex: 0, explanation: "L'ellipse supprime un ou plusieurs mots normalement necessaires a la construction. L'anacoluthe est une rupture de construction, pas une suppression." },
                { question: "La prosopopee consiste a :", options: ["Faire parler un mort, un absent ou une chose", "Exagerer volontairement", "Repeter un meme son", "Comparer sans mot outil"], correctIndex: 0, explanation: "La prosopopee fait parler ce qui ne parle pas (un mort, un objet, une abstraction). C'est une forme extreme de personnification." },
                { question: "'Je vis, je meurs ; je me brule et me noye' (Sceve). Quelles figures combinees ?", options: ["Antithese et parallelisme", "Metaphore et comparaison", "Litote et euphemisme", "Anaphore et gradation"], correctIndex: 0, explanation: "Les oppositions (vis/meurs, brule/noye) sont des antitheses, et la structure repetee 'je + verbe' est un parallelisme." },
                { question: "Quel effet produit une hyperbole dans un registre comique ?", options: ["Un effet de demesure qui fait rire", "Un sentiment de tristesse", "Un effet de suspense", "Une impression de neutralite"], correctIndex: 0, explanation: "L'exageration comique amplifie une situation banale pour provoquer le rire. Ex : Rabelais abuse d'hyperboles dans Gargantua." },
                { question: "Quelle figure utilise Verlaine dans 'Je fais souvent ce reve etrange et penetrant' ?", options: ["Assonance en [an]", "Alliteration en [r]", "Anaphore", "Chiasme"], correctIndex: 0, explanation: "La repetition du son vocalique [an] (souvent, reve, etrange, penetrant) est une assonance qui cree une musicalite." }
            ],
            tips: [
                "Au bac, nommez toujours la figure, citez l'exemple exact du texte entre guillemets, puis analysez l'effet produit sur le lecteur en une phrase.",
                "Apprenez les figures par categories (analogie, opposition, insistance, attenuation, construction) : cela aide a les retrouver plus vite dans un texte.",
                "Quand vous hesitez entre deux figures proches (litote/euphemisme, metonymie/synecdoque), expliquez les deux possibilites et justifiez votre choix.",
                "Ne cherchez pas toutes les figures : concentrez-vous sur celles qui servent votre axe d'analyse et qui eclairent le sens du texte.",
                "Entrinez-vous a reperer les figures dans des textes varies (poesie, theatre, roman) : les examinateurs piochent dans tous les genres."
            ],
            pitfalls: [
                "Confondre comparaison et metaphore : la comparaison a toujours un mot outil (comme, tel, semblable a). Sans mot outil, c'est une metaphore.",
                "Confondre litote et euphemisme : la litote dit moins pour suggerer PLUS ('je ne te hais point' = je t'aime). L'euphemisme dit moins pour adoucir, sans amplifier.",
                "Reperer une figure sans analyser son effet : nommer une anaphore ne suffit pas, il faut expliquer ce qu'elle produit (insistance, rythme, emotion).",
                "Inventer des figures qui n'existent pas : restez sur les termes officiels. Ne pas confondre oxymore et paradoxe (l'oxymore est un groupe de mots, le paradoxe est une idee).",
                "Oublier les figures sonores en poesie : alliteration, assonance et enjambement sont tres frequentes et souvent ignorees dans les copies."
            ]
        },
        {
            id: 'mouvements-litteraires',
            title: 'Les Mouvements litteraires',
            icon: '\uD83D\uDCD6',
            color: '#3498db',
            content: `
                <h3>L'Humanisme (XVIe siecle)</h3>
                <p>Mouvement de la Renaissance qui place l'homme au centre. Retour aux textes antiques, foi en l'education et la raison.
                Auteurs cles : Rabelais (<em>Gargantua</em>), Montaigne (<em>Essais</em>), Du Bellay (<em>Les Regrets</em>), Ronsard.</p>

                <h3>Le Baroque (fin XVIe - debut XVIIe)</h3>
                <p>Esthetique du mouvement, de l'illusion et de l'exces. Le monde est instable, les apparences trompeuses.
                Auteurs cles : d'Aubigne (<em>Les Tragiques</em>), Corneille (<em>L'Illusion comique</em>), Saint-Amant.</p>

                <h3>Le Classicisme (1660-1685)</h3>
                <p>Ideal d'ordre, de raison et de mesure. La regle des trois unites au theatre, l'art de plaire et d'instruire.
                Auteurs cles : Moliere (<em>Le Misanthrope</em>), Racine (<em>Phedre</em>), La Fontaine (<em>Fables</em>), Boileau.</p>

                <h3>Les Lumieres (XVIIIe siecle)</h3>
                <p>Combat pour la raison, la tolerance et le progres contre l'obscurantisme. L'Encyclopedie est le projet emblematique.
                Auteurs cles : Voltaire (<em>Candide</em>), Rousseau (<em>Les Confessions</em>), Montesquieu (<em>Lettres persanes</em>), Diderot.</p>

                <h3>Le Romantisme (1800-1850)</h3>
                <p>Exaltation du moi, de la nature, de la passion. Le poete est un etre a part qui exprime les emotions universelles.
                Auteurs cles : Hugo (<em>Les Contemplations</em>), Musset (<em>Lorenzaccio</em>), Lamartine, Chateaubriand (<em>Rene</em>).</p>

                <h3>Le Realisme (1830-1870)</h3>
                <p>Representer le reel tel qu'il est, sans idealisation. Observation minutieuse de la societe, des moeurs et des milieux sociaux.
                Auteurs cles : Balzac (<em>Le Pere Goriot</em>), Flaubert (<em>Madame Bovary</em>), Stendhal (<em>Le Rouge et le Noir</em>).</p>

                <h3>Le Naturalisme (1870-1890)</h3>
                <p>Prolongement du realisme avec une approche scientifique. Le roman est une "experience" qui montre l'influence du milieu et de l'heredite.
                Auteurs cles : Zola (<em>Germinal</em>, <em>L'Assommoir</em>), Maupassant (<em>Bel-Ami</em>).</p>

                <h3>Le Symbolisme (1870-1900)</h3>
                <p>Refus du realisme, quete d'un monde ideal a travers les symboles, la musicalite et la suggestion.
                Auteurs cles : Baudelaire (<em>Les Fleurs du mal</em>), Verlaine (<em>Romances sans paroles</em>), Rimbaud, Mallarme.</p>

                <h3>Le Surrealisme (1920-1940)</h3>
                <p>Liberer l'esprit par l'ecriture automatique, le reve et l'inconscient. Influence de Freud. Refus des conventions.
                Auteurs cles : Breton (<em>Nadja</em>), Eluard (<em>Capitale de la douleur</em>), Aragon, Desnos.</p>

                <h3>Le Theatre de l'Absurde (1950-1970)</h3>
                <p>Mettre en scene l'absurdite de la condition humaine. Le langage dysfonctionne, l'intrigue est derisoire.
                Auteurs cles : Beckett (<em>En attendant Godot</em>), Ionesco (<em>La Cantatrice chauve</em>), Adamov.</p>

                <h3>Le Nouveau Roman (1950-1970)</h3>
                <p>Remettre en cause le roman traditionnel : pas d'intrigue claire, pas de personnage classique, importance de la forme.
                Auteurs cles : Robbe-Grillet (<em>La Jalousie</em>), Sarraute (<em>Tropismes</em>), Butor, Duras (<em>Moderato cantabile</em>).</p>
            `,
            flashcards: [
                { question: "Quels sont les principes fondamentaux de l'Humanisme ?", answer: "Retour aux textes antiques, confiance en l'homme et sa raison, foi en l'education, curiosite universelle. XVIe siecle." },
                { question: "Citez trois auteurs humanistes et une oeuvre chacun.", answer: "Rabelais (Gargantua), Montaigne (Essais), Du Bellay (Les Regrets)." },
                { question: "Quelles sont les caracteristiques du Baroque ?", answer: "Mouvement, instabilite, illusion, exces, metamorphose. Le monde est un theatre. Fin XVIe - debut XVIIe." },
                { question: "Quels sont les grands principes du Classicisme ?", answer: "Ordre, raison, mesure, bienseance, vraisemblance. Au theatre : regle des trois unites (lieu, temps, action). 1660-1685." },
                { question: "Qu'est-ce que la regle des trois unites ?", answer: "Unite de temps (24h), unite de lieu (un seul endroit), unite d'action (une seule intrigue principale). Regle du theatre classique." },
                { question: "Citez trois auteurs classiques et une oeuvre chacun.", answer: "Moliere (Le Misanthrope), Racine (Phedre), La Fontaine (Fables)." },
                { question: "Quels combats portent les Lumieres ?", answer: "Combat pour la raison, la tolerance, la liberte et le progres. Contre l'obscurantisme, le fanatisme et l'absolutisme. XVIIIe siecle." },
                { question: "Quel est le projet emblematique des Lumieres ?", answer: "L'Encyclopedie, dirigee par Diderot et d'Alembert : rassembler tout le savoir humain pour eclairer les hommes." },
                { question: "Citez trois auteurs des Lumieres et une oeuvre chacun.", answer: "Voltaire (Candide), Rousseau (Les Confessions), Montesquieu (Lettres persanes)." },
                { question: "Quelles sont les grandes themes du Romantisme ?", answer: "Le moi, la nature, la passion, la melancolie, la revolte, le gout pour le passe. Le poete est un visionnaire. 1800-1850." },
                { question: "Citez trois auteurs romantiques et une oeuvre chacun.", answer: "Hugo (Les Contemplations), Musset (Lorenzaccio), Chateaubriand (Rene)." },
                { question: "Quels sont les principes du Realisme ?", answer: "Representer le reel sans idealisation, observer la societe avec precision, depeindre tous les milieux sociaux. 1830-1870." },
                { question: "Citez trois auteurs realistes et une oeuvre chacun.", answer: "Balzac (Le Pere Goriot), Flaubert (Madame Bovary), Stendhal (Le Rouge et le Noir)." },
                { question: "Quelle difference entre Realisme et Naturalisme ?", answer: "Le Naturalisme prolonge le Realisme avec une demarche scientifique : Zola veut montrer l'influence du milieu et de l'heredite, comme une experience de laboratoire." },
                { question: "Citez deux auteurs naturalistes et une oeuvre chacun.", answer: "Zola (Germinal), Maupassant (Bel-Ami). Zola est le theoricien du mouvement (Le Roman experimental)." },
                { question: "Quelles sont les caracteristiques du Symbolisme ?", answer: "Refus du realisme, recherche d'un sens cache derriere les apparences, musicalite du vers, suggestion plutot que description. 1870-1900." },
                { question: "Citez trois auteurs symbolistes et une oeuvre chacun.", answer: "Baudelaire (Les Fleurs du mal), Verlaine (Romances sans paroles), Mallarme (L'Apres-midi d'un faune)." },
                { question: "Baudelaire est-il romantique ou symboliste ?", answer: "Baudelaire est un poete charniere : heritier du Romantisme par le lyrisme, precurseur du Symbolisme par les correspondances et la modernite. On le classe souvent symboliste." },
                { question: "Quels sont les principes du Surrealisme ?", answer: "Liberer l'inconscient par l'ecriture automatique, explorer le reve, refuser la logique et les conventions. Influence de Freud. 1920-1940." },
                { question: "Citez trois auteurs surrealistes et une oeuvre chacun.", answer: "Breton (Nadja), Eluard (Capitale de la douleur), Aragon (Le Paysan de Paris)." },
                { question: "Qu'est-ce que le Theatre de l'Absurde ?", answer: "Un theatre qui montre l'absurdite de la condition humaine. Le langage tourne a vide, l'intrigue est minimale ou inexistante. Influence de l'existentialisme. 1950-1970." },
                { question: "Citez deux auteurs de l'Absurde et une oeuvre chacun.", answer: "Beckett (En attendant Godot), Ionesco (La Cantatrice chauve)." },
                { question: "Qu'est-ce que le Nouveau Roman ?", answer: "Un mouvement qui refuse les conventions du roman traditionnel : pas d'intrigue lineaire, pas de personnage psychologique, exploration formelle. 1950-1970." },
                { question: "Citez deux auteurs du Nouveau Roman et une oeuvre chacun.", answer: "Robbe-Grillet (La Jalousie), Sarraute (Tropismes). Nathalie Sarraute a theorise 'l'ere du soupcon'." },
                { question: "Quel mouvement s'oppose au Classicisme ?", answer: "Le Baroque s'oppose au Classicisme : le Baroque cultive le mouvement et l'exces, le Classicisme recherche l'ordre et la mesure." },
                { question: "Quel mouvement succede au Romantisme en reaction ?", answer: "Le Realisme nait en reaction au Romantisme : il rejette l'idealisation et l'exaltation du moi au profit de l'observation objective de la societe." },
                { question: "A quelle epoque situer le Classicisme ?", answer: "Le Classicisme se situe entre 1660 et 1685, sous le regne de Louis XIV. C'est l'age d'or du theatre francais." },
                { question: "Quel role joue la nature dans le Romantisme ?", answer: "La nature est un miroir des emotions du poete (paysage-etat d'ame), un refuge face a la societe, et un signe du divin. Elle console ou amplifie la melancolie." },
                { question: "Qu'est-ce que l'ecriture automatique surrealiste ?", answer: "Ecrire sans controle de la raison, laisser couler les mots spontanement pour liberer l'inconscient. Theorisee par Breton dans le Manifeste du surrealisme (1924)." },
                { question: "Quel est le lien entre Naturalisme et science ?", answer: "Zola s'inspire de la methode experimentale de Claude Bernard : le romancier place des personnages dans un milieu et observe les effets de l'heredite et de l'environnement." }
            ],
            quiz: [
                { question: "Quel mouvement met l'homme au centre et valorise l'education ?", options: ["L'Humanisme", "Le Classicisme", "Les Lumieres", "Le Romantisme"], correctIndex: 0, explanation: "L'Humanisme (XVIe siecle) place l'homme au centre, fait confiance a la raison et a l'education." },
                { question: "Quel mouvement defend l'ordre, la raison et la regle des trois unites ?", options: ["Le Classicisme", "Le Baroque", "Le Romantisme", "Le Realisme"], correctIndex: 0, explanation: "Le Classicisme (1660-1685) recherche l'equilibre, la mesure et impose la regle des trois unites au theatre." },
                { question: "Qui a ecrit Candide ?", options: ["Voltaire", "Rousseau", "Diderot", "Montesquieu"], correctIndex: 0, explanation: "Candide (1759) est un conte philosophique de Voltaire, oeuvre emblematique des Lumieres." },
                { question: "Quel mouvement est associe a l'ecriture automatique ?", options: ["Le Surrealisme", "Le Symbolisme", "Le Naturalisme", "L'Absurde"], correctIndex: 0, explanation: "Le Surrealisme (1920-1940) utilise l'ecriture automatique pour liberer l'inconscient, sous l'influence de Freud." },
                { question: "A quel mouvement appartient Zola ?", options: ["Le Naturalisme", "Le Realisme", "Le Romantisme", "Le Symbolisme"], correctIndex: 0, explanation: "Zola est le chef de file du Naturalisme. Il applique une methode scientifique au roman (Le Roman experimental)." },
                { question: "Quelle est la particularite du Theatre de l'Absurde ?", options: ["Le langage dysfonctionne et l'intrigue est derisoire", "Les unites classiques sont respectees", "Les personnages sont heroiques", "Le decor est realiste"], correctIndex: 0, explanation: "L'Absurde montre la faillite du langage et l'absence de sens. L'intrigue est souvent circulaire ou inexistante." },
                { question: "Quel mouvement precede et s'oppose au Classicisme ?", options: ["Le Baroque", "Le Romantisme", "Les Lumieres", "Le Realisme"], correctIndex: 0, explanation: "Le Baroque (fin XVIe) cultive l'exces et le mouvement. Le Classicisme nait en reaction, avec l'ordre et la mesure." },
                { question: "'Les Fleurs du mal' de Baudelaire appartiennent principalement a :", options: ["Le Symbolisme", "Le Romantisme", "Le Surrealisme", "Le Naturalisme"], correctIndex: 0, explanation: "Baudelaire est precurseur du Symbolisme par ses correspondances et sa modernite poetique, meme s'il herite du lyrisme romantique." },
                { question: "Quelle oeuvre est emblematique du Realisme ?", options: ["Madame Bovary (Flaubert)", "Les Contemplations (Hugo)", "Nadja (Breton)", "Les Fleurs du mal (Baudelaire)"], correctIndex: 0, explanation: "Madame Bovary (1857) est un chef-d'oeuvre realiste : observation minutieuse de la province et des illusions romanesques." },
                { question: "Le Nouveau Roman remet en cause :", options: ["Les conventions du roman traditionnel (intrigue, personnage)", "La versification classique", "Les unites de temps et de lieu", "L'engagement politique de l'ecrivain"], correctIndex: 0, explanation: "Le Nouveau Roman refuse l'intrigue lineaire et le personnage psychologique du roman traditionnel." },
                { question: "Quel siecle pour les Lumieres ?", options: ["XVIIIe siecle", "XVIe siecle", "XVIIe siecle", "XIXe siecle"], correctIndex: 0, explanation: "Les Lumieres couvrent le XVIIIe siecle (1715-1789), culminant avec l'Encyclopedie et la Revolution." },
                { question: "Qui a ecrit En attendant Godot ?", options: ["Beckett", "Ionesco", "Sartre", "Camus"], correctIndex: 0, explanation: "En attendant Godot (1953) de Beckett est la piece emblematique du Theatre de l'Absurde." },
                { question: "Le Romantisme exalte avant tout :", options: ["Le moi, la passion et la nature", "La raison et l'ordre", "L'observation scientifique", "Le reve et l'inconscient"], correctIndex: 0, explanation: "Le Romantisme (1800-1850) place le moi et les sentiments au premier plan, avec la nature comme miroir de l'ame." },
                { question: "Quelle distinction entre Realisme et Naturalisme ?", options: ["Le Naturalisme ajoute une demarche scientifique au Realisme", "Le Realisme est plus tardif", "Le Naturalisme est moins descriptif", "Il n'y a aucune difference"], correctIndex: 0, explanation: "Le Naturalisme prolonge le Realisme en y ajoutant l'influence de la science : heredite, milieu, determinisme." },
                { question: "Quel auteur a ecrit Les Essais ?", options: ["Montaigne", "Rabelais", "Du Bellay", "Ronsard"], correctIndex: 0, explanation: "Montaigne est l'auteur des Essais (1580-1595), oeuvre fondatrice de l'Humanisme ou il s'examine lui-meme." },
                { question: "Le Symbolisme rejette :", options: ["Le realisme et la description objective", "L'imagination et les symboles", "La musicalite du vers", "Le mystere et la suggestion"], correctIndex: 0, explanation: "Le Symbolisme s'oppose au Realisme/Naturalisme. Il prefere la suggestion, le mystere et les symboles a la description objective." },
                { question: "Quel mouvement est influence par Freud et l'inconscient ?", options: ["Le Surrealisme", "Le Naturalisme", "Le Classicisme", "Le Realisme"], correctIndex: 0, explanation: "Le Surrealisme (annees 1920) s'appuie sur les decouvertes de Freud sur l'inconscient et le reve." },
                { question: "Quel auteur est associe au Nouveau Roman ?", options: ["Robbe-Grillet", "Zola", "Hugo", "Voltaire"], correctIndex: 0, explanation: "Alain Robbe-Grillet est un des principaux theoriciens du Nouveau Roman avec La Jalousie et Pour un nouveau roman." },
                { question: "Quel mouvement utilise le conte philosophique comme arme critique ?", options: ["Les Lumieres", "Le Romantisme", "Le Classicisme", "Le Surrealisme"], correctIndex: 0, explanation: "Les philosophes des Lumieres (Voltaire en tete) utilisent le conte philosophique pour critiquer la societe tout en divertissant." },
                { question: "Hugo, Musset et Lamartine appartiennent a quel mouvement ?", options: ["Le Romantisme", "Le Classicisme", "Le Realisme", "Le Symbolisme"], correctIndex: 0, explanation: "Hugo, Musset et Lamartine sont les grandes figures du Romantisme francais (premiere moitie du XIXe siecle)." }
            ],
            tips: [
                "Pour chaque mouvement, retenez la periode, 2-3 auteurs cles avec leurs oeuvres, et 3 principes fondamentaux : c'est suffisant pour le bac.",
                "Comprenez les filiations : chaque mouvement nait souvent en reaction au precedent (Classicisme vs Baroque, Realisme vs Romantisme).",
                "Au bac, situer un texte dans son mouvement montre que vous maitrisez le contexte : c'est valorise en introduction de commentaire et de dissertation.",
                "Faites un tableau chronologique personnel avec une colonne par mouvement : cela aide a visualiser les enchainements et les chevauchements.",
                "Ne confondez pas siecle et mouvement : plusieurs mouvements peuvent coexister a la meme epoque (ex : Realisme et Symbolisme au XIXe)."
            ],
            pitfalls: [
                "Confondre Baroque et Classicisme : le Baroque cultive l'exces et le mouvement, le Classicisme recherche l'ordre et la mesure. Ils sont opposes.",
                "Dire que Baudelaire est romantique : il herite du Romantisme mais il est avant tout precurseur du Symbolisme (les Correspondances, la modernite).",
                "Confondre Realisme et Naturalisme : le Naturalisme ajoute une dimension scientifique (heredite, milieu) que le Realisme n'a pas forcement.",
                "Oublier de dater les mouvements : les correcteurs attendent des reperes chronologiques precis (XVIe, 1660-1685, XVIIIe, etc.).",
                "Reduire un mouvement a un seul auteur : chaque mouvement a plusieurs voix. Montrer qu'on connait au moins 2-3 auteurs pour chaque."
            ]
        },
        {
            id: 'commentaire-compose',
            title: 'Le Commentaire compose (methode)',
            icon: '\uD83D\uDCDD',
            color: '#2ecc71',
            content: `
                <h3>Etape 1 : La lecture analytique du texte</h3>
                <ul>
                    <li><strong>Premiere lecture</strong> : comprendre le sens general (qui parle ? a qui ? de quoi ? pourquoi ?)</li>
                    <li><strong>Deuxieme lecture</strong> : reperer les champs lexicaux, les figures de style, les registres</li>
                    <li><strong>Troisieme lecture</strong> : noter les effets produits, les intentions de l'auteur</li>
                    <li>Identifier le genre (poesie, theatre, roman, essai), l'epoque et le mouvement litteraire</li>
                </ul>

                <h3>Etape 2 : Construire le plan (les axes)</h3>
                <ul>
                    <li>Regrouper les observations par grandes idees : ce sont les <strong>axes</strong> (2 axes minimum)</li>
                    <li>Chaque axe = une grande idee qui traverse le texte, soutenue par des procedes</li>
                    <li>Chaque axe comporte 2 a 3 <strong>sous-parties</strong></li>
                    <li>Progression : du plus evident au plus subtil, du descriptif a l'interpretatif</li>
                    <li><strong>Axes courants</strong> : portrait d'un personnage / vision du monde ; le lyrisme / la dimension critique ; la forme poetique / le message philosophique</li>
                </ul>

                <h3>Etape 3 : Rediger l'introduction</h3>
                <ol>
                    <li><strong>Amorce</strong> : situer le texte dans son contexte (auteur, oeuvre, epoque, mouvement)</li>
                    <li><strong>Presentation du texte</strong> : genre, theme principal, situation dans l'oeuvre</li>
                    <li><strong>Problematique</strong> : question a laquelle le commentaire repond (ex: "Comment l'auteur met-il en scene... ?")</li>
                    <li><strong>Annonce du plan</strong> : formuler clairement les 2 axes</li>
                </ol>

                <h3>Etape 4 : Rediger le developpement</h3>
                <ul>
                    <li>Chaque sous-partie suit le schema : <strong>idee → citation → procede → interpretation</strong></li>
                    <li>Toujours citer le texte entre guillemets avec le numero de ligne : "le ciel noir" (l.3)</li>
                    <li>Nommer le procede : metaphore, champ lexical, anaphore, etc.</li>
                    <li>Interpreter : quel effet sur le lecteur ? quelle intention de l'auteur ?</li>
                    <li><strong>Transition</strong> entre les deux axes : bilan du premier + annonce du second</li>
                </ul>

                <h3>Etape 5 : Rediger la conclusion</h3>
                <ol>
                    <li><strong>Bilan</strong> : reprendre les conclusions de chaque axe (sans repeter les exemples)</li>
                    <li><strong>Reponse a la problematique</strong> : formuler une reponse synthetique</li>
                    <li><strong>Ouverture</strong> : elargir vers un autre texte, un autre auteur, un mouvement litteraire</li>
                </ol>

                <h3>Le vocabulaire d'analyse indispensable</h3>
                <ul>
                    <li><strong>Champ lexical</strong> : ensemble de mots se rapportant a un meme theme</li>
                    <li><strong>Registre</strong> : lyrique, tragique, comique, satirique, pathetique, epique, didactique</li>
                    <li><strong>Tonalite</strong> : impression globale du texte (melancolique, ironique, solennelle...)</li>
                    <li><strong>Enonciation</strong> : qui parle ? a qui ? (pronoms, temps verbaux, modalisateurs)</li>
                    <li><strong>Focalisation</strong> : interne (dans la tete du personnage), externe (vision de l'exterieur), omnisciente (le narrateur sait tout)</li>
                </ul>

                <h3>Gestion du temps (4 heures)</h3>
                <ul>
                    <li>Lecture + reperage : 30 min</li>
                    <li>Plan au brouillon : 30 min</li>
                    <li>Redaction introduction (au brouillon) : 15 min</li>
                    <li>Redaction developpement : 2h</li>
                    <li>Redaction conclusion : 15 min</li>
                    <li>Relecture : 15-20 min</li>
                </ul>
            `,
            flashcards: [
                { question: "Combien d'axes minimum dans un commentaire compose ?", answer: "2 axes minimum (parfois 3 si le texte est tres riche). Chaque axe comporte 2 a 3 sous-parties." },
                { question: "Quel est le schema d'une sous-partie de commentaire ?", answer: "Idee directrice → citation du texte (entre guillemets + ligne) → identification du procede → interpretation de l'effet produit." },
                { question: "Comment citer correctement le texte ?", answer: "Entre guillemets, avec le numero de ligne entre parentheses. Ex : 'le ciel etait noir' (l.3). Ne jamais citer sans analyser." },
                { question: "Quelles sont les 4 etapes de l'introduction du commentaire ?", answer: "1) Amorce (contexte), 2) Presentation du texte, 3) Problematique, 4) Annonce du plan (les 2 axes)." },
                { question: "Qu'est-ce qu'une problematique de commentaire ?", answer: "Une question a laquelle le commentaire repond. Elle porte sur le 'comment' (Comment l'auteur met-il en scene... ?) plutot que sur le 'pourquoi'." },
                { question: "Que contient la conclusion du commentaire ?", answer: "1) Bilan des deux axes (sans repeter les exemples), 2) Reponse synthetique a la problematique, 3) Ouverture vers un autre texte ou mouvement." },
                { question: "Qu'est-ce qu'un champ lexical ?", answer: "Un ensemble de mots qui se rapportent a un meme theme dans le texte. Ex : 'nuit, ombre, obscurite, tenebre' = champ lexical de l'obscurite." },
                { question: "Qu'est-ce qu'un registre litteraire ?", answer: "La maniere dont le texte agit sur le lecteur : lyrique (emotions), tragique (fatalite), comique (rire), pathetique (pitie), satirique (critique moqueuse)." },
                { question: "Qu'est-ce que la tonalite d'un texte ?", answer: "L'impression globale que degage le texte : melancolique, ironique, solennelle, legere, violente... C'est l'atmosphere generale." },
                { question: "Qu'est-ce que l'enonciation ?", answer: "L'etude de qui parle, a qui, comment : les pronoms (je, nous, on), les temps verbaux, les modalisateurs (peut-etre, certainement)." },
                { question: "Quels sont les trois types de focalisation ?", answer: "Interne (on voit par les yeux du personnage), externe (vision de l'exterieur, on ne sait rien), omnisciente (le narrateur sait tout)." },
                { question: "Comment formuler une bonne transition entre deux axes ?", answer: "Bilan du premier axe (une phrase) + lien logique + annonce du second axe. Ex : 'Si le texte presente d'abord X, il revele aussi Y.'" },
                { question: "Qu'est-ce qu'un registre lyrique ?", answer: "L'expression des sentiments personnels (amour, tristesse, joie). Presence du 'je', vocabulaire des emotions, exclamations, interrogations rhetoriques." },
                { question: "Qu'est-ce qu'un registre epique ?", answer: "Le registre du combat heroique : hyperboles, enumerations, vocabulaire guerrier, amplification. Ex : Hugo dans Les Miserables (bataille de Waterloo)." },
                { question: "Qu'est-ce qu'un modalisateur ?", answer: "Un mot qui exprime le degre de certitude ou l'opinion du locuteur : peut-etre, sans doute, certainement, il semble que, a mon avis." },
                { question: "Quels types d'axes choisir pour un poeme lyrique ?", answer: "Axe 1 : L'expression des sentiments (vocabulaire, pronoms, figures). Axe 2 : La musicalite et la forme poetique au service de l'emotion." },
                { question: "Quels types d'axes pour un texte argumentatif ?", answer: "Axe 1 : La strategie argumentative (these, arguments, exemples). Axe 2 : Les procedes de persuasion (registre, figures, implicite)." },
                { question: "Comment eviter la paraphrase dans le commentaire ?", answer: "Ne pas repeter le texte avec d'autres mots. Toujours nommer un procede (figure, registre, champ lexical) et analyser son effet sur le lecteur." },
                { question: "Combien de temps consacrer au brouillon ?", answer: "Environ 1h15 au total : 30 min de lecture/reperage + 30 min de plan + 15 min pour l'introduction au brouillon." },
                { question: "Comment bien formuler l'annonce du plan ?", answer: "Deux phrases claires, une par axe. Ex : 'Nous verrons d'abord comment... puis nous analyserons...' Eviter les formules trop scolaires ('Dans un premier temps')." },
                { question: "Qu'est-ce qu'un registre pathetique ?", answer: "Un registre qui cherche a susciter la compassion, la pitie du lecteur. Vocabulaire de la souffrance, exclamations, images fortes." },
                { question: "Qu'est-ce qu'un registre satirique ?", answer: "Un registre qui critique en se moquant. Ironie, caricature, exageration. Ex : Voltaire dans Candide, Moliere dans Tartuffe." },
                { question: "Quelles erreurs eviter dans l'introduction ?", answer: "Pas de formules creuses ('Depuis toujours, l'homme...'). Pas de biographie de l'auteur. Aller droit au texte, au contexte pertinent et a la problematique." },
                { question: "Comment organiser la progression des axes ?", answer: "Du plus evident au plus subtil, du plus descriptif au plus interpretatif. Le deuxieme axe doit approfondir le premier, pas le repeter." },
                { question: "Qu'est-ce qu'une ouverture en conclusion ?", answer: "Elargir la reflexion vers un autre texte, un autre auteur du meme mouvement, ou une question plus large. Ne pas poser une question vague sans rapport." },
                { question: "Peut-on donner son avis personnel dans le commentaire ?", answer: "Non, le commentaire est analytique et objectif. On analyse les procedes et leurs effets. L'avis personnel est reserve a l'oral (entretien)." },
                { question: "Comment traiter un texte theatral en commentaire ?", answer: "Analyser la double enonciation (personnage parle aux autres personnages ET au public), les didascalies, le rythme des repliques, les types de comique ou de tragique." },
                { question: "Qu'est-ce que la double enonciation au theatre ?", answer: "Le personnage s'adresse a un autre personnage sur scene, mais aussi indirectement au spectateur. L'auteur transmet un message a travers les repliques." },
                { question: "Combien de citations minimum par sous-partie ?", answer: "Au moins 2 citations par sous-partie. Chaque citation doit etre suivie de l'identification du procede et de l'interpretation." },
                { question: "Comment gerer le temps le jour du bac (4h) ?", answer: "Lecture/reperage : 30 min. Plan + intro au brouillon : 45 min. Developpement : 2h. Conclusion : 15 min. Relecture : 15-20 min." }
            ],
            quiz: [
                { question: "Que doit contenir l'introduction du commentaire ?", options: ["Amorce, presentation du texte, problematique, annonce du plan", "Seulement la problematique", "Un resume du texte", "Une biographie de l'auteur"], correctIndex: 0, explanation: "L'introduction suit 4 etapes : amorce contextuelle, presentation du texte, problematique, et annonce des axes." },
                { question: "Quel est le schema d'une sous-partie ?", options: ["Idee, citation, procede, interpretation", "Citation, resume, avis personnel", "Procede, definition, exemple", "Introduction, developpement, conclusion"], correctIndex: 0, explanation: "Chaque sous-partie suit : idee directrice → citation du texte → nom du procede → interpretation de l'effet." },
                { question: "Comment citer correctement un passage ?", options: ["Entre guillemets avec numero de ligne", "En italique sans reference", "En paraphrasant le passage", "En le recopiant integralement"], correctIndex: 0, explanation: "On cite entre guillemets avec le numero de ligne entre parentheses : 'extrait' (l.X). Jamais de citation sans analyse." },
                { question: "Combien d'axes minimum pour un commentaire ?", options: ["2 axes", "1 axe", "4 axes", "Pas de minimum"], correctIndex: 0, explanation: "Le commentaire compose comporte 2 axes minimum (3 maximum), chacun avec 2 a 3 sous-parties." },
                { question: "Qu'est-ce que la paraphrase ?", options: ["Repeter le texte avec d'autres mots sans analyser", "Citer le texte entre guillemets", "Identifier un procede", "Interpreter un effet"], correctIndex: 0, explanation: "La paraphrase est l'erreur n°1 : elle consiste a redire le texte sans le commenter. Il faut toujours analyser des procedes." },
                { question: "Que met-on dans la conclusion ?", options: ["Bilan des axes, reponse a la problematique, ouverture", "Un resume du texte", "De nouveaux arguments", "Une longue citation"], correctIndex: 0, explanation: "La conclusion reprend les conclusions de chaque axe, repond a la problematique, et propose une ouverture pertinente." },
                { question: "Quelle est la bonne progression entre les axes ?", options: ["Du plus evident au plus subtil", "Du plus subtil au plus evident", "Par ordre chronologique du texte", "Au hasard"], correctIndex: 0, explanation: "On va du plus visible (axe 1) au plus profond (axe 2), du descriptif a l'interpretatif." },
                { question: "Qu'est-ce que la focalisation interne ?", options: ["On voit a travers les yeux d'un personnage", "Le narrateur sait tout", "On observe de l'exterieur sans rien savoir", "Le personnage parle a la premiere personne"], correctIndex: 0, explanation: "Focalisation interne : le lecteur a acces aux pensees et perceptions d'un seul personnage." },
                { question: "Combien de temps pour la lecture et le reperage au bac ?", options: ["30 minutes", "10 minutes", "1 heure", "5 minutes"], correctIndex: 0, explanation: "30 minutes de lecture attentive (3 lectures) et de reperage des procedes : c'est la base de tout le commentaire." },
                { question: "Qu'est-ce qu'un registre didactique ?", options: ["Un texte qui cherche a instruire le lecteur", "Un texte qui fait rire", "Un texte qui fait pleurer", "Un texte qui raconte une bataille"], correctIndex: 0, explanation: "Le registre didactique a pour but d'enseigner, de transmettre un savoir ou une lecon. Ex : fables de La Fontaine." },
                { question: "Dans un commentaire, peut-on donner son avis personnel ?", options: ["Non, le commentaire doit rester analytique", "Oui, c'est encourage", "Seulement en conclusion", "Seulement en introduction"], correctIndex: 0, explanation: "Le commentaire est un exercice objectif : on analyse les procedes et leurs effets, sans opinion personnelle." },
                { question: "Qu'est-ce qu'une transition entre deux axes ?", options: ["Bilan de l'axe 1 + annonce de l'axe 2", "Un simple saut de ligne", "Une nouvelle citation", "La repetition de la problematique"], correctIndex: 0, explanation: "La transition fait le bilan du premier axe et annonce le second, assurant la coherence du raisonnement." },
                { question: "Combien de citations minimum par sous-partie ?", options: ["Au moins 2", "Aucune", "1 seule", "5 ou plus"], correctIndex: 0, explanation: "2 citations minimum par sous-partie, chacune suivie de l'identification du procede et de l'analyse." },
                { question: "Quelle formule eviter en introduction ?", options: ["'Depuis toujours, l'homme...'", "'Ce texte est extrait de...'", "'L'auteur met en scene...'", "'Nous analyserons comment...'"], correctIndex: 0, explanation: "'Depuis toujours, l'homme...' est une formule creuse qui agace les correcteurs. Il faut aller droit au contexte precis du texte." },
                { question: "Quelle est la difference entre registre et tonalite ?", options: ["Le registre est une categorie precise, la tonalite est l'impression globale", "Ce sont des synonymes", "La tonalite est plus technique", "Le registre concerne le son"], correctIndex: 0, explanation: "Le registre est une categorie d'analyse (lyrique, tragique...). La tonalite est l'atmosphere generale ressentie (melancolique, ironique...)." },
                { question: "Pour un texte theatral, quel element specifique analyser ?", options: ["La double enonciation", "Les rimes", "Les strophes", "Le narrateur omniscient"], correctIndex: 0, explanation: "Au theatre, le personnage parle a un autre personnage ET au public. Cette double enonciation est un procede cle a analyser." },
                { question: "Que faut-il faire au brouillon ?", options: ["Le plan detaille et l'introduction", "Tout le commentaire en entier", "Seulement la conclusion", "Rien, ecrire directement au propre"], correctIndex: 0, explanation: "Au brouillon : le plan detaille (axes + sous-parties + citations) et l'introduction redigee. Le developpement se redige au propre." },
                { question: "Qu'est-ce qu'une bonne ouverture en conclusion ?", options: ["Un rapprochement avec un autre texte ou mouvement", "Une question vague sans rapport", "Un resume de l'introduction", "Une citation de Wikipedia"], correctIndex: 0, explanation: "L'ouverture doit etre pertinente : rapprochement avec un texte du meme mouvement, une oeuvre du meme auteur, ou un questionnement lie." },
                { question: "Pourquoi la problematique commence souvent par 'Comment' ?", options: ["Parce que le commentaire analyse la maniere dont l'auteur ecrit", "Par convention sans raison", "Parce que 'Pourquoi' est interdit", "Pour faire plus scolaire"], correctIndex: 0, explanation: "Le commentaire porte sur le 'comment' (les procedes, les choix d'ecriture) plutot que sur le 'pourquoi' (les raisons de l'auteur)." },
                { question: "Combien de temps total de relecture prevoir ?", options: ["15 a 20 minutes", "2 minutes", "45 minutes", "Pas de relecture necessaire"], correctIndex: 0, explanation: "15 a 20 min de relecture pour corriger l'orthographe, verifier les citations, ameliorer les transitions et la clarte." }
            ],
            tips: [
                "Redigez toujours l'introduction au brouillon : c'est la premiere impression du correcteur. Soignez-la comme un argumentaire commercial.",
                "Pour trouver vos axes, regroupez vos observations en grandes categories (forme/fond, effet 1/effet 2) : les axes emergent naturellement.",
                "Variez les procedes analyses : ne parlez pas que de metaphores. Pensez aussi aux registres, a l'enonciation, au rythme et a la structure du texte.",
                "Quand vous citez, choisissez des extraits courts et frappants (3-8 mots). Les longues citations diluent l'analyse.",
                "Gardez vos meilleures observations pour l'axe 2 : le correcteur se souvient surtout de la fin du devoir."
            ],
            pitfalls: [
                "Paraphraser au lieu d'analyser : ne jamais repeter le texte avec d'autres mots. Toujours identifier un procede et interpreter son effet.",
                "Faire un commentaire lineaire au lieu d'un commentaire compose : le plan doit suivre des axes thematiques, pas l'ordre du texte ligne par ligne.",
                "Oublier les transitions : sans transition entre les axes, le devoir perd sa coherence et ressemble a deux mini-devoirs colles.",
                "Commencer l'introduction par 'De tout temps, l'homme...' ou par une biographie complete de l'auteur : les correcteurs penalisent ces formules vides.",
                "Citer sans analyser ou analyser sans citer : chaque citation doit etre suivie d'un procede + interpretation, chaque affirmation doit s'appuyer sur le texte."
            ]
        }
    ];

    function show() {
        window.StudFlow.app.showScreen('bacfrancais');
        renderMain();
    }

    function renderMain() {
        const container = document.getElementById('bacfrancais-content');
        if (!container) return;

        container.innerHTML = `
            <div class="bac-header">
                <h2>Bac Francais</h2>
                <p>Tout pour reussir l'ecrit et l'oral</p>
            </div>
            <div class="bac-sections">
                ${SECTIONS.map((s, i) => {
                    var isLocked = i >= 2 && window.StudFlow.premium && !window.StudFlow.premium.hasAccess('bac_sections_extra');
                    var lockClass = isLocked ? ' prem-lock-overlay locked' : '';
                    return `
                    <div class="bac-section-card${lockClass}" data-action="bacfrancais.openSection" data-param="${i}">
                        <div class="bac-section-icon" style="background: ${s.color}">${s.icon}</div>
                        <div class="bac-section-info">
                            <h3>${s.title}${isLocked ? ' <span class="bac-badge" style="background:var(--accent);color:#fff;font-size:0.7rem;">Premium</span>' : ''}</h3>
                            <div class="bac-section-badges">
                                <span class="bac-badge">${s.flashcards.length} flashcards</span>
                                <span class="bac-badge">${s.quiz.length} quiz</span>
                            </div>
                        </div>
                        <span class="bac-section-arrow">→</span>
                    </div>`;
                }).join('')}
            </div>
        `;
    }

    function openSection(index) {
        // Sections 0-1 free, sections 2+ require premium
        if (index >= 2 && window.StudFlow.premium && !window.StudFlow.premium.hasAccess('bac_sections_extra')) {
            window.StudFlow.premium.showPaywall('bac_sections_extra');
            return;
        }
        const s = SECTIONS[index];
        const container = document.getElementById('bacfrancais-content');

        container.innerHTML = `
            <button class="back-btn" data-action="bacfrancais.renderMain">← Retour</button>
            <div class="bac-section-detail">
                <div class="bac-section-header">
                    <span class="bac-section-detail-icon" style="background: ${s.color}">${s.icon}</span>
                    <h2>${s.title}</h2>
                </div>

                <div class="bac-section-content">
                    ${s.content}
                </div>

                <div class="bac-section-actions">
                    <button class="breathing-btn primary" data-action="flashcards.start" data-param="bac-${s.id}">
                        🎴 Flashcards (${s.flashcards.length})
                    </button>
                    <button class="breathing-btn secondary" data-action="quiz.start" data-param="bac-${s.id}">
                        ❓ Quiz (${s.quiz.length})
                    </button>
                </div>
            </div>
        `;

        if (window.StudFlow.gamification) window.StudFlow.gamification.addXP('bac_section');
        if (window.StudFlow.badges) { window.StudFlow.badges.incrementCounter('bacSections'); window.StudFlow.badges.checkAll(); }
    }

    function getFlashcardsBySection(sectionId) {
        const section = SECTIONS.find(s => s.id === sectionId);
        return section ? section.flashcards.map(f => ({ ...f, mastered: false })) : [];
    }

    function getQuizBySection(sectionId) {
        const section = SECTIONS.find(s => s.id === sectionId);
        return section ? section.quiz : [];
    }

    function getAllFlashcards() {
        let all = [];
        SECTIONS.forEach(s => {
            all = all.concat(s.flashcards.map(f => ({ ...f, mastered: false })));
        });
        return all;
    }

    function getAllQuiz() {
        let all = [];
        SECTIONS.forEach(s => {
            all = all.concat(s.quiz);
        });
        return all;
    }

    window.StudFlow = window.StudFlow || {};
    window.StudFlow.bacfrancais = {
        show, renderMain, openSection,
        getFlashcardsBySection, getQuizBySection,
        getAllFlashcards, getAllQuiz, SECTIONS
    };

    // Register into subjects system (if available)
    if (window.StudFlow.subjects) {
        window.StudFlow.subjects.register({
            id: 'francais', name: 'Bac Francais', icon: '\uD83D\uDCDD', color: 'hot',
            sections: SECTIONS
        });
    }
})();
