// annales.js — Base de sujets reels du Bac (annales) avec corriges structures
(function() {

    // ==================== DONNEES — SUJETS REELS DU BAC ====================
    var SUJETS = [

        // ==================== PHILOSOPHIE ====================

        // --- 2024 ---
        {
            id: 'philo-2024-01',
            title: "L'Etat nous doit-il quelque chose ?",
            year: 2024,
            serie: 'Generale',
            matiere: 'Philosophie',
            type: 'dissertation',
            corrige: {
                introduction: "Amorce par la tension entre les droits individuels et les devoirs de l'Etat. Reformuler : l'Etat a-t-il des obligations envers les citoyens, et si oui, lesquelles ? Problematique : la dette de l'Etat est-elle fondee sur un contrat, sur la justice sociale, ou n'est-elle qu'une illusion ?",
                parties: [
                    {
                        titre: "I. L'Etat est redevable envers les citoyens en vertu du contrat social",
                        contenu: "Selon Rousseau, le pacte social implique que l'Etat garantit la liberte et la securite de chacun. Locke : l'Etat doit proteger les droits naturels (vie, liberte, propriete). Exemples : services publics, education, justice. L'Etat est donc debiteur parce qu'il tire sa legitimite du consentement des gouvernes."
                    },
                    {
                        titre: "II. Ce que l'Etat doit est limite et conditionne",
                        contenu: "L'Etat ne peut pas tout devoir : risque de l'assistanat (Tocqueville). La dette de l'Etat depend du regime politique et du contexte historique. Distinction entre Etat minimal (liberalisme) et Etat-providence. Rawls : l'Etat doit la justice, pas le bonheur. Limite : les ressources sont finies."
                    },
                    {
                        titre: "III. Plutot que de devoir, l'Etat rend possible",
                        contenu: "Hegel : l'Etat est la realisation de la liberte concrete, pas un debiteur. L'Etat ne doit pas quelque chose AUX citoyens mais cree les conditions de la vie bonne. Arendt : l'Etat offre un espace public. Depasser la logique de la dette pour penser la reciprocite entre Etat et citoyens."
                    }
                ],
                conclusion: "L'Etat a des obligations fondees sur le contrat social et la justice, mais cette dette n'est ni illimitee ni unilaterale. Plutot qu'un debiteur, l'Etat est un cadre rendant possible la vie en commun. Ouverture : la question se renouvelle avec les crises ecologiques et les nouvelles formes de citoyennete.",
                conseils: [
                    "Ne pas confondre Etat et gouvernement : l'Etat est une institution permanente, le gouvernement est temporaire.",
                    "Penser a des exemples concrets : education gratuite, securite sociale, droit au logement.",
                    "Mobiliser les auteurs du contrat social (Hobbes, Locke, Rousseau) mais aussi les critiques (Marx, Tocqueville)."
                ]
            }
        },
        {
            id: 'philo-2024-02',
            title: "La science peut-elle satisfaire notre besoin de verite ?",
            year: 2024,
            serie: 'Generale',
            matiere: 'Philosophie',
            type: 'dissertation',
            corrige: {
                introduction: "La science est souvent consideree comme le modele de la connaissance vraie. Mais notre besoin de verite deborde-t-il le champ scientifique ? Problematique : la verite scientifique epuise-t-elle toute verite, ou existe-t-il des verites que la science ne peut atteindre ?",
                parties: [
                    {
                        titre: "I. La science repond a notre besoin de verite par sa methode rigoureuse",
                        contenu: "La science produit des verites objectives, verifiables et universelles. Descartes : methode pour atteindre la certitude. Bachelard : la science progresse en corrigeant ses erreurs. Elle satisfait le besoin de comprendre le monde naturel (lois physiques, biologie, etc.)."
                    },
                    {
                        titre: "II. Mais la science ne repond pas a toutes les formes du besoin de verite",
                        contenu: "La science ne repond pas aux questions de sens, de valeur, de finalite. Kant : la raison a des questions qu'elle ne peut s'empecher de poser (Dieu, liberte, ame) mais que la science ne tranche pas. Wittgenstein : les problemes de la vie ne sont pas touches par la science. Besoin de verite morale, existentielle, esthetique."
                    },
                    {
                        titre: "III. La science transforme notre besoin de verite sans le satisfaire completement",
                        contenu: "La science ne donne pas de verite definitive : elle est revisable (Popper, falsifiabilite). Kuhn : les paradigmes changent. La science nourrit notre besoin de verite mais le relance perpetuellement. Nietzsche : la volonte de verite est plus profonde que la science. Complementarite entre savoir scientifique et sagesse philosophique."
                    }
                ],
                conclusion: "La science satisfait partiellement notre besoin de verite en offrant des connaissances fiables sur le reel, mais elle laisse ouvertes les questions existentielles et morales. Le besoin de verite est plus vaste que ce que la science peut combler. Ouverture : la science peut-elle un jour repondre a ces questions, ou sont-elles par nature hors de sa portee ?",
                conseils: [
                    "Distinguer verite scientifique (objective, revisable) et verite philosophique ou existentielle.",
                    "Utiliser des exemples de sciences differentes : physique, biologie, sciences humaines.",
                    "Ne pas tomber dans le scientisme (tout est science) ni dans le relativisme (la science ne vaut rien)."
                ]
            }
        },
        {
            id: 'philo-2024-03',
            title: "Simone de Beauvoir, Les Mandarins (1954) — Explication de texte",
            year: 2024,
            serie: 'Generale',
            matiere: 'Philosophie',
            type: 'explication',
            corrige: {
                introduction: "Presenter l'auteur (philosophe existentialiste, pionniere du feminisme) et l'oeuvre (roman philosophique). Identifier le theme central du texte : le rapport entre liberte individuelle et engagement. Annoncer le mouvement du texte et la these de l'auteur.",
                parties: [
                    {
                        titre: "I. Degager la these et la structure du texte",
                        contenu: "Identifier la these principale de Beauvoir dans l'extrait. Reperer les articulations logiques et les etapes de l'argumentation. Montrer comment le texte s'inscrit dans la reflexion existentialiste sur la liberte et la responsabilite."
                    },
                    {
                        titre: "II. Analyser les concepts cles et les arguments",
                        contenu: "Expliquer les notions centrales (liberte, engagement, mauvaise foi, situation). Montrer comment Beauvoir articule existence individuelle et responsabilite collective. Comparer avec Sartre : l'existence precede l'essence, mais chez Beauvoir la situation concrete (genre, classe) pese davantage."
                    },
                    {
                        titre: "III. Discussion critique et portee du texte",
                        contenu: "Evaluer la force et les limites de l'argumentation de Beauvoir. Confronter a d'autres positions : determinisme, structuralisme. Montrer l'actualite du texte : la tension entre liberte et contraintes sociales reste pertinente."
                    }
                ],
                conclusion: "Synthese : la these de Beauvoir eclaire le lien entre liberte et situation concrete. Portee : cette reflexion nourrit les debats contemporains sur l'emancipation. Ouverture possible vers Le Deuxieme Sexe et la notion de condition feminine.",
                conseils: [
                    "En explication de texte, ne jamais plaquer un cours : partir toujours du texte lui-meme.",
                    "Citer precisement le texte entre guillemets pour appuyer chaque analyse.",
                    "Consacrer au moins la moitie du devoir a l'explication lineaire avant la discussion."
                ]
            }
        },

        // --- 2023 ---
        {
            id: 'philo-2023-01',
            title: "Le bonheur est-il affaire de raison ?",
            year: 2023,
            serie: 'Generale',
            matiere: 'Philosophie',
            type: 'dissertation',
            corrige: {
                introduction: "Le bonheur semble relever du sentiment et de l'experience vecue, mais les philosophes antiques en font un objectif rationnel. Problematique : peut-on acceder au bonheur par la raison, ou celui-ci echappe-t-il a toute maitrise rationnelle ?",
                parties: [
                    {
                        titre: "I. Le bonheur est affaire de raison : la sagesse antique",
                        contenu: "Epicure : le bonheur est le calcul des plaisirs (ataraxie). Stoiciens (Epictete, Marc Aurele) : le bonheur vient de la maitrise rationnelle de soi. Aristote : le bonheur (eudaimonia) est l'activite de l'ame selon la vertu, guidee par la raison. La raison permet de distinguer les vrais biens des faux."
                    },
                    {
                        titre: "II. Le bonheur echappe a la seule raison",
                        contenu: "Pascal : le coeur a ses raisons que la raison ne connait point. Le bonheur depend aussi des emotions, du corps, des circonstances. Kant : le bonheur est un ideal de l'imagination, pas de la raison — on ne sait jamais exactement ce qui nous rendrait heureux. Schopenhauer : le desir est irrationnel et le bonheur illusoire."
                    },
                    {
                        titre: "III. La raison eclaire le bonheur sans le garantir",
                        contenu: "La raison aide a eviter les erreurs (faux bonheurs, addictions) mais ne suffit pas. Mill : distinction entre plaisirs superieurs et inferieurs, la raison oriente mais ne produit pas le bonheur. Spinoza : la joie (beatitude) naît de la connaissance rationnelle de soi et du monde — la raison transforme les affects sans les supprimer."
                    }
                ],
                conclusion: "Le bonheur n'est pas reductible a un calcul rationnel, mais la raison en est une condition necessaire : elle permet d'orienter nos choix et d'eviter les illusions. Ouverture : la sagesse est peut-etre l'alliance de la raison et de l'acceptation de ce qui nous echappe.",
                conseils: [
                    "Distinguer bonheur (etat durable) et plaisir (sensation ephemere) des l'introduction.",
                    "Les references antiques sont attendues mais ne suffisent pas : integrer des modernes (Kant, Mill).",
                    "Penser a des exemples concrets : est-on plus heureux en faisant des choix raisonnes ?"
                ]
            }
        },
        {
            id: 'philo-2023-02',
            title: "Vouloir la paix, est-ce vouloir la justice ?",
            year: 2023,
            serie: 'Generale',
            matiere: 'Philosophie',
            type: 'dissertation',
            corrige: {
                introduction: "La paix et la justice semblent aller de pair, mais l'histoire montre qu'une paix peut etre injuste et qu'une quete de justice peut mener a la guerre. Problematique : la paix suppose-t-elle necessairement la justice, ou peut-on vouloir l'une sans l'autre ?",
                parties: [
                    {
                        titre: "I. Vouloir la paix, c'est necessairement vouloir la justice",
                        contenu: "Kant (Projet de paix perpetuelle) : une paix durable repose sur des institutions justes, le droit international. Sans justice, la paix est instable. Rawls : la paix entre les peuples exige le respect des droits fondamentaux. Exemples : les traites inegaux menent a de nouvelles guerres."
                    },
                    {
                        titre: "II. On peut vouloir la paix sans la justice, et inversement",
                        contenu: "La Pax Romana ou la paix coloniale : ordre impose sans justice. Hobbes : la paix est l'absence de guerre, pas necessairement la justice — mieux vaut un ordre injuste que le chaos. Inversement, vouloir la justice peut exiger la lutte (revolutions, desobeissance civile). La justice peut perturber la paix."
                    },
                    {
                        titre: "III. La vraie paix integre la justice sans s'y reduire",
                        contenu: "Une paix juste est un ideal regulateur, pas toujours realisable. Arendt : la paix requiert le pardon et le dialogue, pas seulement la justice punitive. Ricoeur : la paix demande la reconciliation, qui va au-dela de la stricte justice. La paix est un processus, pas un etat fige."
                    }
                ],
                conclusion: "Vouloir la paix sans vouloir la justice, c'est vouloir un ordre fragile et potentiellement oppressif. Mais la paix exige aussi le pardon et le compromis, au-dela de la stricte justice. Ouverture : les commissions Verite et Reconciliation (Afrique du Sud) montrent cette tension feconde.",
                conseils: [
                    "Ne pas rester abstrait : utiliser des exemples historiques (traites de paix, conflits, justice transitionnelle).",
                    "Penser la paix a plusieurs echelles : individuelle (paix interieure), sociale, internationale.",
                    "Mobiliser Kant pour la paix perpetuelle et Hobbes pour la paix comme simple absence de guerre."
                ]
            }
        },
        {
            id: 'philo-2023-03',
            title: "Clausewitz, De la guerre (1832) — Explication de texte",
            year: 2023,
            serie: 'Generale',
            matiere: 'Philosophie',
            type: 'explication',
            corrige: {
                introduction: "Presenter Clausewitz (theoricien militaire prussien) et l'oeuvre De la guerre. Le texte porte sur le rapport entre guerre et politique. These celebre : la guerre est la continuation de la politique par d'autres moyens. Annoncer l'enjeu : la guerre a-t-elle une rationalite politique ?",
                parties: [
                    {
                        titre: "I. La guerre comme instrument politique",
                        contenu: "Expliquer la these centrale : la guerre n'est pas un phenomene autonome mais un moyen au service de fins politiques. La violence armee est subordonnee a la decision politique. Clausewitz s'oppose a l'idee d'une guerre purement technique ou passionnelle."
                    },
                    {
                        titre: "II. La trinite de la guerre : passion, hasard, raison",
                        contenu: "Clausewitz distingue trois dimensions : la passion du peuple, le hasard du champ de bataille (le chef militaire), la raison de l'Etat (le politique). Ces trois elements interagissent. La guerre n'est jamais purement rationnelle mais la raison politique doit la guider."
                    },
                    {
                        titre: "III. Limites et portee : quand la guerre echappe a la politique",
                        contenu: "Discuter : la guerre peut echapper au controle politique (escalade, guerres totales). Aron : Clausewitz reste pertinent mais les guerres nucleaires changent la donne. Confronter avec des penseurs pacifistes : la guerre peut-elle jamais etre rationnelle ? Montrer que Clausewitz permet de penser la guerre sans la glorifier."
                    }
                ],
                conclusion: "Clausewitz montre que la guerre a une logique politique, ce qui permet de la penser rationnellement et de la limiter. Mais les guerres contemporaines (terrorisme, guerres asymetriques) mettent a l'epreuve ce cadre. Ouverture : la cyberguerre est-elle encore une continuation de la politique ?",
                conseils: [
                    "Bien distinguer explication du texte et discussion : d'abord comprendre, ensuite critiquer.",
                    "Citer la formule celebre precisement et montrer qu'on en comprend les implications.",
                    "Ne pas caricaturer Clausewitz comme un apologiste de la guerre : il pense sa limitation rationnelle."
                ]
            }
        },

        // --- 2022 ---
        {
            id: 'philo-2022-01',
            title: "Revient-il a l'Etat de decider de ce qui est juste ?",
            year: 2022,
            serie: 'Generale',
            matiere: 'Philosophie',
            type: 'dissertation',
            corrige: {
                introduction: "L'Etat, par la loi, definit ce qui est legal — mais legal et juste coincident-ils ? Problematique : l'Etat a-t-il la legitimite pour definir la justice, ou la justice est-elle un critere superieur a l'Etat ?",
                parties: [
                    {
                        titre: "I. L'Etat est le garant institutionnel de la justice",
                        contenu: "L'Etat definit le droit positif, tranche les conflits, punit l'injustice. Hobbes : sans Etat, pas de justice possible (etat de nature). Kelsen : le droit est la norme edictee par l'Etat, la justice est ce que la loi dit. L'Etat rend la justice effective par ses institutions (tribunaux, police)."
                    },
                    {
                        titre: "II. La justice depasse l'Etat et peut le juger",
                        contenu: "Le droit naturel (Antigone de Sophocle) : il existe une justice superieure aux lois humaines. Les regimes injustes (esclavage legal, lois raciales) montrent que legalite et justice divergent. Rawls : les principes de justice sont anterieurs a l'Etat. Droit de resistance a l'oppression (Declaration de 1789)."
                    },
                    {
                        titre: "III. L'Etat doit decider mais sous le controle des citoyens et du droit",
                        contenu: "En democratie, l'Etat decide collectivement par la deliberation. Habermas : la justice emerge du debat rationnel dans l'espace public. L'Etat de droit se soumet lui-meme a des principes superieurs (Constitution, droits de l'Homme). La justice est un horizon regulateur, pas un acquis definitif."
                    }
                ],
                conclusion: "L'Etat a un role necessaire dans la determination du juste, mais il ne peut en etre l'arbitre absolu : la justice est un ideal qui le transcende et le controle. Ouverture : les institutions internationales (CPI, CEDH) montrent la recherche d'une justice au-dela des Etats.",
                conseils: [
                    "Distinguer clairement legalite (ce que dit la loi) et legitimite (ce qui est juste).",
                    "L'exemple d'Antigone est classique mais efficace pour illustrer le conflit loi / justice.",
                    "Penser aux exemples historiques : lois injustes abolies grace a la lutte (esclavage, apartheid)."
                ]
            }
        },
        {
            id: 'philo-2022-02',
            title: "Discuter, est-ce renoncer a la violence ?",
            year: 2022,
            serie: 'Generale',
            matiere: 'Philosophie',
            type: 'dissertation',
            corrige: {
                introduction: "La discussion semble etre l'alternative civilisee a la violence : on parle au lieu de frapper. Mais discuter suffit-il a eliminer la violence, ou la discussion peut-elle etre elle-meme une forme de pouvoir ? Problematique : la parole est-elle necessairement non-violente, et renoncer a la violence passe-t-il necessairement par la discussion ?",
                parties: [
                    {
                        titre: "I. Discuter, c'est choisir la parole contre la force",
                        contenu: "La discussion suppose la reconnaissance de l'autre comme interlocuteur, non comme ennemi. Habermas : l'agir communicationnel vise l'entente rationnelle. Aristote : l'homme est un animal politique, dote de logos (parole/raison). La democratie repose sur le debat comme alternative a la violence."
                    },
                    {
                        titre: "II. La discussion peut masquer ou prolonger la violence",
                        contenu: "Bourdieu : la violence symbolique s'exerce dans le langage (domination culturelle). Les rapports de force persistent dans la discussion (qui parle ? qui est ecoute ?). Discuter peut etre une strategie dilatoire pour maintenir l'injustice. Marx : la discussion bourgeoise masque les rapports de domination."
                    },
                    {
                        titre: "III. Discuter transforme la violence sans l'abolir completement",
                        contenu: "Ricoeur : la discussion est un travail de reconnaissance mutuelle, un processus. Freud : la parole (talking cure) permet de symboliser la violence pulsionnelle. La discussion ne supprime pas le conflit mais le civilise. Distinction entre violence destructrice et conflit constructif (agonisme chez Mouffe)."
                    }
                ],
                conclusion: "Discuter, c'est renoncer a une forme de violence — la force brute — mais pas a toute forme de pouvoir ni de tension. La discussion transforme et canalise la violence plutot qu'elle ne l'abolit. Ouverture : les limites de la discussion face a la violence extreme (peut-on discuter avec un tyran ?).",
                conseils: [
                    "Penser a definir violence au sens large : physique, symbolique, psychologique.",
                    "Ne pas idealiser la discussion : montrer qu'elle a aussi ses limites et ses biais.",
                    "Exemples possibles : debat parlementaire, negociations de paix, mediations judiciaires."
                ]
            }
        },

        // --- 2021 ---
        {
            id: 'philo-2021-01',
            title: "Est-il toujours injuste de desobeir aux lois ?",
            year: 2021,
            serie: 'Generale',
            matiere: 'Philosophie',
            type: 'dissertation',
            corrige: {
                introduction: "La loi est censee incarner la justice, et la desobeissance semble donc injuste par definition. Mais certaines lois sont elles-memes injustes. Problematique : la desobeissance peut-elle etre juste, et si oui, a quelles conditions ?",
                parties: [
                    {
                        titre: "I. Desobeir aux lois est injuste car la loi est le fondement de l'ordre juste",
                        contenu: "Socrate (Criton) : il refuse de fuir la prison car desobeir a la loi, c'est detruire la cite. Hobbes : sans obeissance, retour a l'etat de nature. La loi est la condition de la coexistence pacifique. La desobeissance individuelle menace l'interet general."
                    },
                    {
                        titre: "II. Il est parfois juste de desobeir a des lois injustes",
                        contenu: "Thoreau : la desobeissance civile est un devoir face a l'injustice (esclavage, guerre). MLK : une loi injuste n'est pas une loi. Les resistants (Seconde Guerre mondiale) ont desobei a des lois inhumaines. Le droit naturel fonde la legitimite de la desobeissance."
                    },
                    {
                        titre: "III. La desobeissance juste est encadree et responsable",
                        contenu: "Rawls : la desobeissance civile est justifiee quand elle est publique, non-violente, et vise a corriger une injustice grave. Arendt : la desobeissance est un acte politique, pas un caprice. Distinction entre desobeissance civile (refus public et assume) et simple delinquance. La desobeissance enrichit la democratie."
                    }
                ],
                conclusion: "Desobeir n'est pas toujours injuste : lorsque la loi trahit la justice, la desobeissance civile est un acte responsable et necessaire. Mais elle doit etre encadree pour ne pas sombrer dans l'anarchie. Ouverture : les mouvements contemporains (ecologie, droits civiques) renouvellent cette question.",
                conseils: [
                    "Le sujet contient 'toujours' : c'est une invitation a nuancer, pas a repondre par oui ou non.",
                    "Distinguer desobeissance civile (Thoreau, MLK) et simple infraction a la loi.",
                    "L'exemple de Socrate dans le Criton est incontournable mais ne doit pas occuper tout le devoir."
                ]
            }
        },
        {
            id: 'philo-2021-02',
            title: "Discuter, est-ce renoncer a la violence ?",
            year: 2021,
            serie: 'Generale',
            matiere: 'Philosophie',
            type: 'dissertation',
            corrige: {
                introduction: "Ce sujet, egalement propose en 2022, interroge le lien entre parole et non-violence. La discussion est-elle par nature pacifique, ou la violence peut-elle se loger dans le langage lui-meme ? Problematique : la parole est-elle une alternative reelle a la violence ou simplement une autre forme de rapport de force ?",
                parties: [
                    {
                        titre: "I. La discussion comme renoncement volontaire a la violence",
                        contenu: "Habermas : l'ethique de la discussion pose l'echange d'arguments comme modele de resolution des conflits. Aristote : la cite est fondee sur la parole, pas sur la force. La discussion implique d'accepter que l'autre puisse avoir raison — c'est renoncer a imposer sa volonte."
                    },
                    {
                        titre: "II. Discuter n'elimine pas toute violence",
                        contenu: "Bourdieu : la violence symbolique dans le langage. Les rapports de domination se reproduisent dans la discussion (inegalites d'eloquence, de statut). Foucault : le discours est un lieu de pouvoir. Discuter peut etre instrumentalise (propaganda, manipulation rhetorique)."
                    },
                    {
                        titre: "III. La discussion comme transformation de la violence",
                        contenu: "Hegel : la dialectique est un conflit d'idees qui produit du sens. La discussion ne supprime pas le desaccord mais le rend productif. Freud : mettre en mots le conflit interne est therapeutique. La discussion est un processus civilisateur (Elias) qui transforme la violence sans pretendre l'abolir."
                    }
                ],
                conclusion: "Discuter, c'est choisir une forme de rapport a l'autre qui renonce a la violence physique, mais pas necessairement a toute forme de pouvoir. La vraie discussion exige la reconnaissance mutuelle et l'egalite des interlocuteurs. Ouverture : les conditions d'une discussion authentique sont-elles jamais pleinement reunies ?",
                conseils: [
                    "Montrer qu'on connait la difference entre dialogue authentique et simple negociation strategique.",
                    "Ne pas oublier la dimension psychologique : la parole peut blesser ou guerir.",
                    "Utiliser des exemples varies : therapie, diplomatie, debat parlementaire, reseaux sociaux."
                ]
            }
        },

        // ==================== FRANCAIS (EAF) ====================

        // --- 2024 ---
        {
            id: 'eaf-2024-01',
            title: "Commentaire : Olympe de Gouges, Declaration des droits de la femme et de la citoyenne (1791), articles 1 a 6",
            year: 2024,
            serie: 'Generale',
            matiere: 'Francais (EAF)',
            type: 'commentaire',
            corrige: {
                introduction: "Situer Olympe de Gouges dans le contexte revolutionnaire. Presenter la Declaration comme une reecriture politique de la Declaration des droits de l'Homme de 1789. Problematique : comment Gouges utilise-t-elle le pastiche pour denoncer l'exclusion des femmes de la citoyennete ?",
                parties: [
                    {
                        titre: "I. Une reecriture strategique de la Declaration de 1789",
                        contenu: "Reperer le parallelisme structurel avec la Declaration de 1789 : meme structure, memes articles, mais feminises. L'effet de miroir souligne l'injustice par comparaison. Analyser les substitutions lexicales (homme/femme, citoyen/citoyenne) et leur portee argumentative."
                    },
                    {
                        titre: "II. Une argumentation fondee sur le droit naturel et l'universalite",
                        contenu: "Gouges fonde ses revendications sur la raison et le droit naturel, reprenant les principes memes de la Revolution. Elle retourne les arguments des revolutionnaires contre eux : si les droits sont universels, ils s'appliquent aux femmes. Analyser le registre deliberatif et les procedes de persuasion."
                    },
                    {
                        titre: "III. La portee subversive et la modernite du texte",
                        contenu: "Montrer comment ce texte anticipe les luttes feministes. La force du pastiche : utiliser les mots du pouvoir pour le contester. Resonance contemporaine : egalite des droits, parite. Analyser la dimension pamphlétaire et l'engagement de l'autrice."
                    }
                ],
                conclusion: "Olympe de Gouges transforme un texte fondateur en arme de contestation. Sa Declaration est a la fois un hommage et une critique de la Revolution. Ouverture vers la posterite du texte et les combats feministes ulterieurs.",
                conseils: [
                    "Avoir la Declaration de 1789 en tete pour montrer les effets de parallele et de contraste.",
                    "Analyser la forme (procedes litteraires) autant que le fond (idees politiques).",
                    "Ne pas faire un cours sur le feminisme : rester centre sur le texte et ses procedes."
                ]
            }
        },
        {
            id: 'eaf-2024-02',
            title: "Dissertation : La poesie est-elle seulement l'expression de sentiments personnels ? (Parcours : Emancipations creatrices)",
            year: 2024,
            serie: 'Generale',
            matiere: 'Francais (EAF)',
            type: 'dissertation',
            corrige: {
                introduction: "La poesie lyrique semble par essence l'expression du moi intime. Mais la poesie a aussi une dimension collective, politique, formelle. Problematique : la poesie se reduit-elle a l'epanchement sentimental, ou depasse-t-elle le personnel pour atteindre l'universel ?",
                parties: [
                    {
                        titre: "I. La poesie comme expression privilegiee des sentiments",
                        contenu: "Le lyrisme : Lamartine (Le Lac), Musset (Nuit de Mai), expression de l'amour, du deuil, de la melancolie. La poesie donne forme a l'indicible emotionnel. Subjectivite assumee du poete romantique. Le vers et la musicalite amplifient l'emotion."
                    },
                    {
                        titre: "II. La poesie depasse le sentiment personnel",
                        contenu: "Poesie engagee : Hugo (Chatiments), Eluard (Liberte), Cesaire (Cahier d'un retour au pays natal). Poesie comme exploration du langage : Rimbaud (voyant), Mallarme (le mot libere du sens commun). La poesie cree des mondes, elle ne se contente pas de les exprimer."
                    },
                    {
                        titre: "III. Le sentiment personnel devient universel par la poesie",
                        contenu: "Baudelaire : transformer la boue en or — l'alchimie poetique transcende le personnel. La poesie touche le lecteur parce qu'elle part du singulier pour atteindre l'universel. Apollinaire : l'innovation formelle renouvelle l'expression du sentiment. Le poete parle de soi mais pour tous."
                    }
                ],
                conclusion: "La poesie part souvent du sentiment personnel mais ne s'y reduit jamais : elle est travail de la langue, engagement dans le monde, quete d'universalite. Ouverture : la poesie contemporaine (slam, spoken word) renouvelle cette tension entre intime et collectif.",
                conseils: [
                    "Citer des poemes precis et les analyser brievement — eviter les references vagues.",
                    "Varier les epoques : romantisme, symbolisme, surrealisme, poesie contemporaine.",
                    "Le sujet contient 'seulement' : c'est une invitation claire a depasser la premiere reponse."
                ]
            }
        },

        // --- 2023 ---
        {
            id: 'eaf-2023-01',
            title: "Commentaire : Marivaux, Les Fausses Confidences (1737), Acte II, scene 13",
            year: 2023,
            serie: 'Generale',
            matiere: 'Francais (EAF)',
            type: 'commentaire',
            corrige: {
                introduction: "Situer Marivaux et la piece (comedie du XVIIIe siecle sur le marivaudage amoureux). Presenter la scene : moment de basculement ou les sentiments se devoilent. Problematique : comment Marivaux met-il en scene la naissance de l'aveu amoureux a travers le jeu du langage et du masque ?",
                parties: [
                    {
                        titre: "I. Le jeu theatral du masque et de la revelation",
                        contenu: "Analyser le double jeu des personnages : ce qu'ils disent et ce qu'ils pensent. Le marivaudage : l'amour avance masque derriere les mots. Les aparts, les sous-entendus, les silences eloquents. Le spectateur sait plus que les personnages (ironie dramatique)."
                    },
                    {
                        titre: "II. Le langage comme instrument de seduction et de pouvoir",
                        contenu: "Analyser les procedes du marivaudage : euphemismes, litotes, questions indirectes. Le langage devoile en pretendant cacher. Rapports de force amoureux : qui mene le jeu ? Analyser le rythme des repliques (stichomythie, tirades) et leur effet."
                    },
                    {
                        titre: "III. Une reflexion sur la sincerite et la comedie sociale",
                        contenu: "Marivaux interroge la possibilite d'etre sincere dans une societe de conventions. Le theatre dans le theatre : les personnages jouent un role dans la piece. Portee morale : l'amour peut-il etre vrai dans un monde de fausses confidences ? Lien avec le titre de la piece."
                    }
                ],
                conclusion: "Marivaux fait du langage amoureux un spectacle fascinant ou le masque finit par reveler la verite du coeur. Scene emblematique du marivaudage. Ouverture vers les enjeux sociaux de la piece (conditions sociales, argent et amour).",
                conseils: [
                    "Analyser les didascalies et la mise en scene, pas seulement le texte des repliques.",
                    "Montrer la specificite du genre comique : les effets de rire et leur signification.",
                    "Le marivaudage n'est pas un simple badinage : c'est une exploration serieuse du langage et du sentiment."
                ]
            }
        },
        {
            id: 'eaf-2023-02',
            title: "Dissertation : Le roman doit-il nous faire oublier la realite ? (Parcours : Personnage de roman)",
            year: 2023,
            serie: 'Generale',
            matiere: 'Francais (EAF)',
            type: 'dissertation',
            corrige: {
                introduction: "Le roman est souvent associe a l'evasion et a la fiction. Mais les grands romanciers revendiquent aussi un rapport au reel. Problematique : le roman est-il un divertissement qui nous eloigne du reel, ou un moyen de mieux le comprendre ?",
                parties: [
                    {
                        titre: "I. Le roman comme evasion hors de la realite",
                        contenu: "Le roman d'aventure, la fantasy, le roman sentimental : le lecteur vit par procuration. Don Quichotte : le roman fait oublier la realite (et c'est dangereux). Flaubert, Madame Bovary : le bovarysme comme confusion entre fiction et realite. Le plaisir romanesque est un plaisir de l'oubli."
                    },
                    {
                        titre: "II. Le roman comme miroir et instrument de connaissance du reel",
                        contenu: "Balzac : le roman est un miroir de la societe (Comedie humaine). Zola et le naturalisme : le roman comme experience scientifique. Le roman revele ce que la vie quotidienne masque : mecanismes sociaux, psychologie profonde. Stendhal : le roman est un miroir promene le long d'un chemin."
                    },
                    {
                        titre: "III. Le roman transforme notre rapport a la realite",
                        contenu: "Le roman ne fait pas oublier la realite : il la reconfigure. Proust : le roman revele des verites que l'experience directe ne livre pas. Kundera : le roman explore les possibilites de l'existence humaine. Le detour par la fiction enrichit notre comprehension du reel. Ricoeur : la fiction refigure le monde."
                    }
                ],
                conclusion: "Le grand roman ne nous fait pas oublier la realite : il nous la fait voir autrement. L'evasion romanesque n'est qu'un premier niveau de lecture ; en profondeur, le roman eclaire notre condition. Ouverture : le roman a-t-il encore ce pouvoir face aux series, aux jeux video, aux reseaux sociaux ?",
                conseils: [
                    "Le sujet porte sur le roman : ne pas parler de theatre ou de poesie.",
                    "Varier les exemples : roman realiste, roman d'aventure, roman contemporain.",
                    "Articuler clairement les transitions entre les parties pour montrer la progression."
                ]
            }
        },
        {
            id: 'eaf-2023-03',
            title: "Commentaire : Rabelais, Gargantua (1534), chapitre 57 — L'abbaye de Theleme",
            year: 2023,
            serie: 'Generale',
            matiere: 'Francais (EAF)',
            type: 'commentaire',
            corrige: {
                introduction: "Situer Rabelais dans le contexte humaniste de la Renaissance. Presenter Gargantua et l'episode de l'abbaye de Theleme, utopie fondee sur la devise 'Fais ce que voudras'. Problematique : comment Rabelais utilise-t-il la fiction utopique pour defendre un ideal humaniste de liberte et d'education ?",
                parties: [
                    {
                        titre: "I. Une utopie qui inverse le modele monastique",
                        contenu: "Theleme est l'anti-monastere : pas de regles, pas de clotures, pas de voeux. Analyser les procedes d'inversion systematique (negation, antithese). L'humour rabelaisien : la satire des moines et de l'ascetisme. L'architecture meme de Theleme est un symbole de liberte."
                    },
                    {
                        titre: "II. Un ideal humaniste d'education et de liberte",
                        contenu: "La devise 'Fais ce que voudras' n'est pas un appel au desordre mais a la vertu naturelle. Les Thelemites sont bien nes, bien eduques : la liberte suppose la connaissance. Lien avec l'humanisme (Erasme, Montaigne) : confiance en la nature humaine eduquee. L'education libere, la contrainte corrompt."
                    },
                    {
                        titre: "III. Les limites et la portee critique de l'utopie",
                        contenu: "Theleme est reservee a une elite : qui y entre ? Rabelais est-il naif ou ironique ? L'utopie comme miroir critique de la societe reelle plutot que comme programme politique. Le rire rabelaisien comme arme de la pensee libre. Portee : la question de la liberte et de ses conditions reste actuelle."
                    }
                ],
                conclusion: "Rabelais invente avec Theleme une utopie joyeuse qui celebre la liberte humaine tout en interrogeant ses conditions. L'humour et l'erudition se mettent au service d'un ideal humaniste. Ouverture : les utopies litteraires ulterieures (More, Voltaire) prolongent cette reflexion.",
                conseils: [
                    "Rabelais ecrit au XVIe siecle : contextualiser les enjeux (Reforme, humanisme, Renaissance).",
                    "Ne pas oublier d'analyser le registre comique et ses effets.",
                    "Montrer que l'utopie est aussi une critique : derriere l'ideal, une satire du reel."
                ]
            }
        },
        {
            id: 'eaf-2024-03',
            title: "Dissertation : La litterature d'idees a-t-elle encore le pouvoir de changer le monde ? (Parcours : Ecrire et combattre pour l'egalite)",
            year: 2024,
            serie: 'Generale',
            matiere: 'Francais (EAF)',
            type: 'dissertation',
            corrige: {
                introduction: "Des Lumieres aux manifestes contemporains, la litterature a toujours cherche a transformer la societe. Mais a l'ere numerique, le livre a-t-il encore ce pouvoir ? Problematique : la litterature d'idees est-elle encore un levier de changement social, ou son influence s'est-elle diluee ?",
                parties: [
                    {
                        titre: "I. La litterature d'idees a historiquement change le monde",
                        contenu: "Voltaire et l'affaire Calas : la plume contre l'injustice. Hugo : Les Miserables et la question sociale. Les Lumieres ont prepare la Revolution. Zola, J'accuse : un texte qui change le cours d'un proces. La Negritude (Cesaire, Senghor) : la litterature comme emancipation."
                    },
                    {
                        titre: "II. Son pouvoir semble aujourd'hui affaibli",
                        contenu: "Concurrence des medias, des reseaux sociaux, de l'image. La litterature touche un public restreint. Le relativisme contemporain affaiblit la portee des grandes causes. Adorno : apres Auschwitz, peut-on encore ecrire ? La crise de l'engagement litteraire (desenchantement postmoderne)."
                    },
                    {
                        titre: "III. La litterature d'idees reste irreplacable par sa profondeur",
                        contenu: "Ce que la litterature fait mieux que les medias : approfondir, nuancer, toucher les consciences par l'emotion et la beaute. Annie Ernaux, Edouard Louis : la litterature contemporaine engagee existe. La fiction permet l'empathie (Nussbaum). Le livre reste un espace de reflexion lente, necessaire face a l'acceleration."
                    }
                ],
                conclusion: "La litterature d'idees n'a plus le monopole de l'engagement, mais elle conserve un pouvoir unique : celui de transformer les consciences en profondeur. Ouverture : les nouvelles formes d'ecriture engagee (blogs, podcasts litteraires, autofiction sociale) prolongent cette tradition.",
                conseils: [
                    "Ne pas se limiter aux Lumieres : montrer que la litterature engagee existe a toutes les epoques.",
                    "Citer des oeuvres precises et montrer leur impact concret sur la societe.",
                    "Eviter le jugement de valeur : ne pas dire que la litterature est superieure aux autres medias, mais montrer sa specificite."
                ]
            }
        },

        // ==================== HISTOIRE-GEOGRAPHIE ====================

        // --- 2024 ---
        {
            id: 'hg-2024-01',
            title: "Les Etats-Unis et la question democratique dans le monde depuis 1945",
            year: 2024,
            serie: 'Generale',
            matiere: 'Histoire-Geographie',
            type: 'composition',
            corrige: {
                introduction: "Depuis 1945, les Etats-Unis se posent en champion de la democratie mondiale, mais leur action est traversee de contradictions. Problematique : les Etats-Unis ont-ils veritablement promu la democratie dans le monde, ou ont-ils instrumentalise cet ideal au service de leurs interets ?",
                parties: [
                    {
                        titre: "I. 1945-1991 : La promotion democratique dans le contexte de la Guerre froide",
                        contenu: "Plan Marshall et reconstruction democratique de l'Europe et du Japon. Endiguement (Truman, 1947) : la democratie contre le communisme. Mais contradictions : soutien a des dictatures anticommunistes (Amerique latine, Moyen-Orient, Asie du Sud-Est). Vietnam : une guerre au nom de la liberte qui mine la credibilite americaine."
                    },
                    {
                        titre: "II. 1991-2001 : L'unipolarite et l'espoir democratique",
                        contenu: "Fin de la Guerre froide : triomphe du modele liberal-democratique (Fukuyama, 'Fin de l'Histoire'). Elargissement de l'OTAN, democratisation en Europe de l'Est. Interventions humanitaires (Somalie, Kosovo) au nom des droits de l'Homme. Mais limites : echec en Somalie, Rwanda (non-intervention)."
                    },
                    {
                        titre: "III. Depuis 2001 : Crises du modele et contestation",
                        contenu: "Guerre contre le terrorisme apres le 11 septembre : Irak, Afghanistan — democratisation par la force. Echecs majeurs et destabilisation regionale. Obama : retrait relatif. Trump : remise en question du multilateralisme. Montee de la Chine comme modele alternatif. Le modele democratique americain lui-meme fragilise (polarisation, 6 janvier 2021)."
                    }
                ],
                conclusion: "Les Etats-Unis ont ete un acteur majeur de la promotion democratique mondiale, mais leurs contradictions (soutien aux dictatures, guerres d'imposition) ont affaibli leur credibilite. Ouverture : la democratie peut-elle encore etre promue de l'exterieur dans un monde multipolaire ?",
                conseils: [
                    "Adopter un plan chronologique est pertinent ici, avec des sous-parties thematiques.",
                    "Ne pas etre manicheen : montrer les reussites (Japon, Allemagne) ET les echecs (Irak, Vietnam).",
                    "Utiliser des dates precises et des evenements concrets — le correcteur valorise la precision factuelle."
                ]
            }
        },
        {
            id: 'hg-2024-02',
            title: "La Chine : des recompositions territoriales pour affirmer sa puissance",
            year: 2024,
            serie: 'Generale',
            matiere: 'Histoire-Geographie',
            type: 'composition',
            corrige: {
                introduction: "La Chine est devenue la deuxieme puissance economique mondiale et recompose son territoire pour projeter sa puissance. Problematique : comment les recompositions territoriales chinoises traduisent-elles et renforcent-elles l'affirmation de sa puissance a toutes les echelles ?",
                parties: [
                    {
                        titre: "I. Des recompositions internes au service du developpement",
                        contenu: "Ouverture des ZES (zones economiques speciales) sur le littoral depuis 1980. Urbanisation massive : megalopoles du littoral (Shanghai, Shenzhen, Pekin). Desenclavement de l'Ouest (Go West Policy). Disparites territoriales persistantes : littoral / interieur, villes / campagnes. Nouvelles routes de la soie (BRI) comme prolongement interieur."
                    },
                    {
                        titre: "II. La projection de puissance par les recompositions regionales",
                        contenu: "Mer de Chine meridionale : iles artificielles, revendications territoriales. Hong Kong et Macao : reintegration et tensions (2019-2020). Taiwan : enjeu geopolitique majeur. Influence en Asie du Sud-Est. La BRI comme outil de recomposition regionale (corridors economiques)."
                    },
                    {
                        titre: "III. Les recompositions a l'echelle mondiale",
                        contenu: "Nouvelles routes de la soie (BRI) : infrastructures sur tous les continents (ports, chemins de fer, telecommunications). Investissements en Afrique et en Amerique latine. Puissance technologique (5G, Huawei, spatial). Limites : dette des pays partenaires, resistances locales, rivalite sino-americaine."
                    }
                ],
                conclusion: "Les recompositions territoriales chinoises, de l'echelle locale a l'echelle mondiale, sont un instrument central de l'affirmation de puissance. Mais cette expansion suscite des resistances et des rivalites. Ouverture : la Chine peut-elle maintenir cette dynamique face aux tensions internes (demographie, inegalites) et externes (competition avec les Etats-Unis) ?",
                conseils: [
                    "Penser a varier les echelles : locale, regionale, mondiale — c'est la specificite de la geographie.",
                    "Utiliser le vocabulaire geographique : recomposition, metropolisation, littoralisation, corridor.",
                    "Un croquis synthetique est un plus si le sujet le permet : flux, poles, axes."
                ]
            }
        },

        // --- 2023 ---
        {
            id: 'hg-2023-01',
            title: "La construction europeenne entre elargissement, approfondissement et remises en question",
            year: 2023,
            serie: 'Generale',
            matiere: 'Histoire-Geographie',
            type: 'composition',
            corrige: {
                introduction: "Depuis les traites fondateurs des annees 1950, l'Europe s'est construite par etapes, entre integration croissante et crises. Problematique : comment la construction europeenne oscille-t-elle entre la dynamique d'integration et les forces centrifuges qui la remettent en question ?",
                parties: [
                    {
                        titre: "I. L'approfondissement : une integration de plus en plus poussee",
                        contenu: "CECA (1951), CEE (1957) : les debuts economiques. Acte unique (1986) : marche unique. Maastricht (1992) : union politique, monnaie unique (euro, 2002). Schengen : libre circulation. Lisbonne (2007) : renforcement institutionnel. La PAC, la politique de cohesion, la politique etrangere commune."
                    },
                    {
                        titre: "II. L'elargissement : de 6 a 27 membres",
                        contenu: "Elargissements successifs : 1973 (Royaume-Uni, Irlande, Danemark), 1981-1986 (Grece, Espagne, Portugal), 1995 (Autriche, Finlande, Suede), 2004-2013 (Europe de l'Est). Criteres de Copenhague. Defis : heterogeneite economique, divergences politiques, gouvernance a 27. Candidatures en cours (Balkans, Ukraine, Moldavie)."
                    },
                    {
                        titre: "III. Les remises en question : crises et contestation",
                        contenu: "Brexit (2016-2020) : premiere sortie d'un Etat membre. Crise de l'euro (2010-2015) : Grece, austerite. Crise migratoire (2015) : divisions entre Etats. Montee de l'euroscepticisme et des populismes. Covid-19 : plan de relance commun (solidarite retrouvee ?). Guerre en Ukraine : relance de la defense europeenne."
                    }
                ],
                conclusion: "La construction europeenne avance par crises : chaque remise en question est aussi une occasion d'approfondissement. Le projet europeen reste inacheve et fragile mais vivant. Ouverture : l'Europe peut-elle se reformer pour repondre aux defis du XXIe siecle (climat, geopolitique, numerique) ?",
                conseils: [
                    "La chronologie est essentielle : connaitre les dates des traites et des elargissements.",
                    "Montrer les tensions entre approfondissement et elargissement (plus on est nombreux, plus c'est difficile d'avancer ensemble).",
                    "Le Brexit est un exemple incontournable mais ne doit pas occuper la moitie du devoir."
                ]
            }
        },
        {
            id: 'hg-2023-02',
            title: "Les espaces maritimes : enjeux geopolitiques et economiques",
            year: 2023,
            serie: 'Generale',
            matiere: 'Histoire-Geographie',
            type: 'composition',
            corrige: {
                introduction: "Les mers et oceans couvrent 70% de la surface du globe et sont au coeur de la mondialisation. Problematique : pourquoi les espaces maritimes sont-ils devenus des enjeux majeurs a la fois economiques et geopolitiques ?",
                parties: [
                    {
                        titre: "I. Des espaces au coeur de la mondialisation economique",
                        contenu: "90% du commerce mondial transite par la mer. Les grandes routes maritimes : Suez, Malacca, Panama. Les ports mondiaux (Shanghai, Singapour, Rotterdam). La conteneurisation a revolutionne le transport. Ressources : peche, hydrocarbures offshore, minerais sous-marins. Cables sous-marins : 99% des flux numeriques."
                    },
                    {
                        titre: "II. Des espaces de tensions geopolitiques",
                        contenu: "Droit de la mer (Convention de Montego Bay, 1982) : ZEE, plateau continental, haute mer. Revendications territoriales : mer de Chine meridionale, Arctique, Falklands. Militarisation des espaces maritimes : bases navales, porte-avions. Piraterie (Corne de l'Afrique, golfe de Guinee). Course a l'Arctique (fonte des glaces, nouvelles routes)."
                    },
                    {
                        titre: "III. Des espaces a proteger : enjeux environnementaux",
                        contenu: "Surpeche et epuisement des ressources halieutiques. Pollution maritime (plastiques, marees noires). Rechauffement climatique : montee des eaux, acidification des oceans. Aires marines protegees. Gouvernance internationale difficile : la haute mer, bien commun non reglemente. Enjeu du developpement durable des oceans."
                    }
                ],
                conclusion: "Les espaces maritimes cristallisent les grandes tensions du monde contemporain : mondialisation, rivalites de puissance, urgence ecologique. Leur gouvernance est un defi majeur du XXIe siecle. Ouverture : un traite sur la haute mer est-il possible et souhaitable ?",
                conseils: [
                    "Un croquis est fortement recommande : grandes routes, detroits strategiques, ZEE, zones de tension.",
                    "Maitriser le vocabulaire : ZEE, eaux territoriales, plateau continental, haute mer.",
                    "Equilibrer les trois dimensions : economique, geopolitique, environnementale."
                ]
            }
        },

        // --- 2022 ---
        {
            id: 'hg-2022-01',
            title: "La France : une puissance maritime ?",
            year: 2022,
            serie: 'Generale',
            matiere: 'Histoire-Geographie',
            type: 'composition',
            corrige: {
                introduction: "La France possede le deuxieme domaine maritime mondial grace a ses territoires d'outre-mer. Mais cette etendue fait-elle d'elle une puissance maritime ? Problematique : dans quelle mesure la France exploite-t-elle et valorise-t-elle son potentiel maritime pour affirmer sa puissance ?",
                parties: [
                    {
                        titre: "I. Un potentiel maritime considerable",
                        contenu: "Deuxieme ZEE mondiale (11 millions de km2), presence sur tous les oceans. Territoires ultramarins : Polynesie, Nouvelle-Caledonie, Reunion, Antilles, Guyane. Facade atlantique, mediterraneenne, Manche. Ports importants : Marseille, Le Havre, Dunkerque. Traditions maritimes : marine nationale, construction navale."
                    },
                    {
                        titre: "II. Une puissance maritime reelle mais inegalement affirmee",
                        contenu: "Marine nationale : une des premieres au monde (porte-avions Charles de Gaulle, SNLE). Recherche oceanographique (Ifremer). CMA CGM : 3e armateur mondial. Peche : 4e producteur europeen. Tourisme littoral. Mais : ports en retard sur les concurrents (Rotterdam, Hambourg). Exploitation limitee des ZEE ultramarines. Dependance energetique maritime."
                    },
                    {
                        titre: "III. Des defis pour affirmer pleinement cette puissance",
                        contenu: "Valorisation des ressources : energies marines renouvelables (eolien offshore), minerais. Protection de l'environnement marin. Surveillance des ZEE (immensites difficiles a controler). Competition avec les grandes puissances maritimes (Chine, Etats-Unis). Strategie maritime nationale (Livre bleu). Enjeu : transformer le potentiel en puissance effective."
                    }
                ],
                conclusion: "La France est une puissance maritime par son domaine et ses capacites, mais elle ne valorise pas encore pleinement ce potentiel. L'enjeu est de passer d'une puissance maritime de droit a une puissance maritime de fait. Ouverture : la question climatique et la montee des eaux redefiniront-elles les espaces maritimes francais ?",
                conseils: [
                    "Le sujet est une question : il faut y repondre avec nuance (oui mais..., en partie...).",
                    "Localiser precisement les territoires ultramarins et les facades maritimes.",
                    "Ne pas oublier la dimension militaire : la marine nationale est un atout strategique majeur."
                ]
            }
        },
        {
            id: 'hg-2022-02',
            title: "Proche et Moyen-Orient : un foyer de conflits depuis 1945",
            year: 2022,
            serie: 'Generale',
            matiere: 'Histoire-Geographie',
            type: 'composition',
            corrige: {
                introduction: "Le Proche et Moyen-Orient est l'une des regions les plus instables du monde depuis 1945. Problematique : quels facteurs expliquent la permanence des conflits dans cette region, et comment ont-ils evolue depuis 1945 ?",
                parties: [
                    {
                        titre: "I. Un foyer de conflits lie a la Guerre froide et au nationalisme arabe (1945-1990)",
                        contenu: "Decolonisation et creation d'Israel (1948) : guerres israelo-arabes (1948, 1956, 1967, 1973). Nationalisme arabe (Nasser). Guerre froide : la region comme terrain d'affrontement indirect (Etats-Unis / URSS). Revolution iranienne (1979). Guerre Iran-Irak (1980-1988). Petrole : enjeu strategique mondial."
                    },
                    {
                        titre: "II. De nouvelles configurations de conflits apres la Guerre froide (1990-2010)",
                        contenu: "Guerre du Golfe (1991). Processus de paix israelo-palestinien (Oslo, 1993) et ses echecs. 11 septembre 2001 : guerre contre le terrorisme. Invasion de l'Irak (2003) et destabilisation. Montee du terrorisme islamiste (Al-Qaida, puis Daech). Iran : programme nucleaire."
                    },
                    {
                        titre: "III. Un foyer de conflits renouvele (depuis 2011)",
                        contenu: "Printemps arabes (2011) : esperances et desillusions. Guerre civile en Syrie (depuis 2011) : internationalisation. Montee et chute de Daech. Conflit au Yemen. Recompositions geopolitiques : role de la Russie, retrait americain, accords d'Abraham (2020). Conflit Israel-Hamas (2023). La region reste un noeud de tensions mondiales."
                    }
                ],
                conclusion: "Le Proche et Moyen-Orient reste un foyer de conflits en raison de facteurs structurels (petrole, eau, religions, frontieres coloniales) et conjoncturels (interventions exterieures, terrorisme). Les conflits se transforment mais ne disparaissent pas. Ouverture : une paix durable est-elle envisageable dans cette region ?",
                conseils: [
                    "La chronologie est essentielle : ne pas melanger les periodes.",
                    "Montrer les multiples facteurs de conflits : geostrategiques, economiques, religieux, identitaires.",
                    "Eviter les jugements de valeur : rester dans l'analyse historique et geographique."
                ]
            }
        },

        // ==================== SES ====================

        // --- 2024 ---
        {
            id: 'ses-2024-01',
            title: "A l'aide de vos connaissances et du dossier documentaire, vous montrerez que la croissance economique se heurte a des limites ecologiques.",
            year: 2024,
            serie: 'Generale',
            matiere: 'SES',
            type: 'epreuve composee',
            corrige: {
                introduction: "La croissance economique, mesuree par le PIB, est un objectif central des politiques economiques. Cependant, elle repose sur l'exploitation de ressources naturelles limitees et genere des externalites negatives sur l'environnement. Problematique : en quoi la croissance economique se heurte-t-elle a des limites ecologiques ?",
                parties: [
                    {
                        titre: "I. La croissance repose sur l'exploitation de ressources naturelles epuisables",
                        contenu: "Le capital naturel (ressources fossiles, minerais, sols, eau douce) est un facteur de production. Les ressources NON RENOUVELABLES (petrole, gaz, charbon) s'epuisent. Le rapport Meadows (1972) : si la croissance continue au meme rythme, les ressources s'epuiseront. Notion de soutenabilite faible (on peut substituer du capital technique au capital naturel) vs soutenabilite forte (le capital naturel est irremplacable)."
                    },
                    {
                        titre: "II. La croissance genere des externalites negatives environnementales",
                        contenu: "La production et la consommation generent des EXTERNALITES NEGATIVES : pollution de l'air (gaz a effet de serre → rechauffement climatique), pollution des eaux, deforestation, perte de biodiversite. Le changement climatique : consequence directe de la croissance industrielle. Tragédie des biens communs (Hardin, 1968) : les ressources partagees sont surexploitees car personne n'a interet a les preserver individuellement."
                    },
                    {
                        titre: "III. Les politiques environnementales pour concilier croissance et ecologie",
                        contenu: "Instruments : la reglementation (normes d'emission), la taxation (taxe carbone = internaliser les externalites), le marche des droits a polluer (marche europeen du carbone). Croissance verte : innovation technologique (energies renouvelables, economie circulaire). Limites : l'effet rebond (les gains d'efficacite sont compenses par l'augmentation de la consommation). Debat : faut-il une croissance verte ou une decroissance ?"
                    }
                ],
                conclusion: "La croissance economique se heurte a des limites ecologiques majeures : epuisement des ressources et degradation de l'environnement. Des politiques publiques tentent de concilier croissance et ecologie, mais le debat reste ouvert entre partisans de la croissance verte et de la decroissance.",
                conseils: [
                    "Utiliser les documents fournis ET vos connaissances personnelles (auteurs, mecanismes).",
                    "Definir les termes cles des l'introduction : croissance, limites ecologiques, capital naturel.",
                    "Mobiliser les concepts : externalites, biens communs, soutenabilite faible/forte."
                ]
            }
        },
        {
            id: 'ses-2024-02',
            title: "Comment l'ecole contribue-t-elle a la mobilite sociale ?",
            year: 2024,
            serie: 'Generale',
            matiere: 'SES',
            type: 'dissertation',
            corrige: {
                introduction: "L'ecole republicaine repose sur l'ideal meritocratique : chacun peut s'elever socialement grace a ses efforts et ses diplomes. Pourtant, les enquetes montrent que l'origine sociale reste un facteur determinant de la reussite scolaire. Problematique : dans quelle mesure l'ecole favorise-t-elle la mobilite sociale ?",
                parties: [
                    {
                        titre: "I. L'ecole est un facteur de mobilite sociale ascendante",
                        contenu: "Democratisation scolaire : acces massif au lycee et aux etudes superieures depuis les annees 1960. Le diplome reste le premier facteur d'insertion professionnelle. Tables de mobilite : une partie des enfants d'ouvriers deviennent cadres. L'ecole transmet un capital humain (connaissances, competences) qui permet la mobilite."
                    },
                    {
                        titre: "II. Mais l'ecole reproduit aussi les inegalites sociales",
                        contenu: "Bourdieu et Passeron (Les Heritiers, 1964) : l'ecole valorise le CAPITAL CULTUREL des classes superieures (langage, codes, references). Les enfants de cadres reussissent mieux non pas parce qu'ils sont plus intelligents, mais parce que l'ecole parle LEUR langage. Orientation differenciee : les enfants d'ouvriers sont surrepresentes en filiere professionnelle. Boudon : meme a niveau scolaire egal, les familles font des choix differents (autocensure des milieux populaires)."
                    },
                    {
                        titre: "III. Les politiques scolaires peuvent-elles reduire la reproduction ?",
                        contenu: "Education prioritaire (ZEP/REP) : donner plus a ceux qui ont moins. Bourses, internats d'excellence. Limites : les inegalites se sont deplacees (de l'acces au diplome a la qualite du diplome : grandes ecoles vs universites). Paradoxe d'Anderson : avoir un diplome superieur a celui de ses parents ne garantit plus une position sociale superieure (inflation des diplomes)."
                    }
                ],
                conclusion: "L'ecole contribue a la mobilite sociale mais de facon imparfaite. Si elle offre des opportunites, elle reproduit aussi les inegalites par des mecanismes culturels et des choix d'orientation differencies. L'enjeu est de faire de la meritocratie une realite et non un mythe.",
                conseils: [
                    "Mobiliser Bourdieu (capital culturel, reproduction) ET Boudon (choix rationnels, paradoxe d'Anderson).",
                    "Utiliser les tables de mobilite si elles sont dans le dossier documentaire.",
                    "Des exemples concrets (orientation, grandes ecoles vs universites) enrichissent l'analyse."
                ]
            }
        },

        // --- 2023 ---
        {
            id: 'ses-2023-01',
            title: "Quels sont les sources et les defis de la croissance economique ?",
            year: 2023,
            serie: 'Generale',
            matiere: 'SES',
            type: 'dissertation',
            corrige: {
                introduction: "La croissance economique, augmentation soutenue du PIB, est un objectif majeur des politiques economiques. Elle repose sur des facteurs identifies (travail, capital, progres technique) mais fait face a des defis contemporains. Problematique : quels sont les facteurs de la croissance et quelles difficultes rencontre-t-elle ?",
                parties: [
                    {
                        titre: "I. Les sources traditionnelles de la croissance",
                        contenu: "Le modele de Solow : la croissance vient de l'accumulation de capital (investissement), du facteur travail (quantite et qualite) et du progres technique (residuel de Solow). Le progres technique est le moteur principal de la croissance a long terme. Capital humain (Gary Becker) : l'education et la formation augmentent la productivite."
                    },
                    {
                        titre: "II. Le role central de l'innovation",
                        contenu: "Schumpeter : l'innovation est le moteur du capitalisme (destruction creatrice). Les innovations de rupture (machine a vapeur, Internet, IA) transforment l'economie. Le role des institutions (Acemoglu et Robinson) : droits de propriete, Etat de droit, stabilite politique favorisent l'innovation. Le role des depenses de R&D (recherche et developpement) publiques et privees."
                    },
                    {
                        titre: "III. Les defis contemporains de la croissance",
                        contenu: "Les limites ecologiques (epuisement des ressources, rechauffement climatique). Les inegalites : la croissance ne profite pas a tous (Piketty : les inegalites de patrimoine augmentent). La stagnation seculaire (Hansen, Larry Summers) : la croissance ralentit dans les pays developpes. Le defi demographique : vieillissement de la population."
                    }
                ],
                conclusion: "La croissance repose sur l'accumulation de facteurs et surtout sur l'innovation, mais elle fait face a des defis ecologiques, sociaux et demographiques majeurs. L'enjeu est de trouver un modele de croissance soutenable et inclusif.",
                conseils: [
                    "Definir le PIB et ses limites des l'introduction (il ne mesure pas le bien-etre).",
                    "Mobiliser Solow, Schumpeter, Romer (croissance endogene) selon les documents.",
                    "Ne pas oublier les defis : c'est souvent la partie la mieux notee."
                ]
            }
        },

        // ==================== HGGSP ====================

        // --- 2024 ---
        {
            id: 'hggsp-2024-01',
            title: "La conquete spatiale : enjeux diplomatiques et strategiques",
            year: 2024,
            serie: 'Generale',
            matiere: 'HGGSP',
            type: 'dissertation',
            corrige: {
                introduction: "Depuis Spoutnik (1957), l'espace est un enjeu de puissance. La course spatiale, d'abord bipolaire (USA-URSS), s'est elargie a de nouveaux acteurs etatiques et prives. Problematique : en quoi la conquete spatiale est-elle un revelateur des rapports de puissance et des enjeux strategiques contemporains ?",
                parties: [
                    {
                        titre: "I. La course spatiale, vitrine de la rivalite Est-Ouest (1957-1991)",
                        contenu: "Spoutnik (1957) et le choc americain. Gagarine (1961), premier homme dans l'espace. Apollo 11 (1969), premier homme sur la Lune. L'espace comme outil de PRESTIGE et de DISSUASION. Les satellites militaires (renseignement, communication, guidage). Le traite de l'espace (1967) : interdiction des armes nucleaires dans l'espace."
                    },
                    {
                        titre: "II. De nouveaux acteurs et de nouveaux enjeux (depuis 1991)",
                        contenu: "La Chine : puissance spatiale majeure (station Tiangong, face cachee de la Lune). L'Inde : Chandrayaan (2023), a moindre cout. Le New Space : SpaceX (Musk), Blue Origin (Bezos) — privatisation de l'acces a l'espace. Enjeux : satellites Internet (Starlink), tourisme spatial, exploitation des ressources asteroidales. La cooperation internationale : ISS (1998-2030), mais tensions croissantes."
                    },
                    {
                        titre: "III. L'espace, nouveau terrain de conflits ?",
                        contenu: "Militarisation : creation de la Space Force americaine (2019), commandement spatial francais. Armes antisatellites (tests chinois, russes, indiens). Debris spatiaux : menace pour tous. Gouvernance : le traite de 1967 est insuffisant face aux nouveaux enjeux (appropriation des ressources, militarisation). L'espace comme bien commun ou terrain de conquete ?"
                    }
                ],
                conclusion: "La conquete spatiale, d'abord instrument de la guerre froide, est devenue un enjeu multidimensionnel (economique, militaire, diplomatique). L'emergence de nouveaux acteurs et la militarisation posent la question de la gouvernance de l'espace. Ouverture : l'espace sera-t-il le terrain de la cooperation ou de la confrontation au XXIe siecle ?",
                conseils: [
                    "Ne pas se limiter a la guerre froide : les correcteurs attendent une analyse jusqu'a l'actualite.",
                    "Citer des acteurs precis (SpaceX, Tiangong, Artemis) pour montrer la maitrise du sujet.",
                    "Penser aux enjeux de gouvernance : le droit de l'espace est un angle valorise."
                ]
            }
        },
        {
            id: 'hggsp-2024-02',
            title: "Etude de document : la memoire de la guerre d'Algerie",
            year: 2024,
            serie: 'Generale',
            matiere: 'HGGSP',
            type: 'etude de document',
            corrige: {
                introduction: "Presenter le document (nature, auteur, date, contexte). La guerre d'Algerie (1954-1962) est une memoire DIVISEE en France : longtemps occultee, elle fait l'objet de controverses et de reconnaissances tardives. Annoncer le plan d'analyse.",
                parties: [
                    {
                        titre: "I. Une memoire longtemps occultee",
                        contenu: "Apres 1962 : SILENCE officiel. On parle d' 'evenements' et non de 'guerre.' Les appelés ne parlent pas. Les pieds-noirs et les harkis sont marginalisés. Ce n'est qu'en 1999 que le terme 'guerre d'Algerie' est officiellement reconnu par le Parlement francais."
                    },
                    {
                        titre: "II. Des memoires plurielles et conflictuelles",
                        contenu: "Memoire des APPELES (jeunes soldats envoyes malgre eux). Memoire des PIEDS-NOIRS (Francais d'Algerie, deracines). Memoire des HARKIS (abandonnes par la France, camps de transit). Memoire ALGERIENNE (colonisation, repression, independance). Memoire REPUBLICAINE (la torture, le 17 octobre 1961). Chaque groupe a sa version, ses blessures, ses revendications."
                    },
                    {
                        titre: "III. Vers une reconnaissance officielle ?",
                        contenu: "Loi de 2005 sur les 'aspects positifs de la colonisation' (retiree apres polemique). Reconnaissance par Macron de l'assassinat de Maurice Audin (2018) et d'Ali Boumendjel (2021). Commission Stora (2021) : recommandations pour la reconciliation memorielle. Mais : pas d'excuses officielles, tensions persistantes entre la France et l'Algerie."
                    }
                ],
                conclusion: "La memoire de la guerre d'Algerie illustre la difficulte des societes a faire face a un passe douloureux. Entre silence, memoires concurrentes et reconnaissance tardive, le travail de memoire reste inacheve. Ouverture : comment transmettre cette memoire aux nouvelles generations ?",
                conseils: [
                    "En etude de document : TOUJOURS partir du document, le citer, puis elargir avec vos connaissances.",
                    "Distinguer clairement memoire (subjective, plurielle) et histoire (objective, critique).",
                    "Montrer que les enjeux memoriels sont aussi des enjeux POLITIQUES (relations franco-algeriennes)."
                ]
            }
        },

        // --- 2023 ---
        {
            id: 'hggsp-2023-01',
            title: "L'environnement : un enjeu geopolitique mondial",
            year: 2023,
            serie: 'Generale',
            matiere: 'HGGSP',
            type: 'dissertation',
            corrige: {
                introduction: "L'environnement est devenu un enjeu geopolitique majeur depuis la fin du XXe siecle. Le rechauffement climatique, l'epuisement des ressources et la perte de biodiversite engagent des rapports de force entre Etats. Problematique : en quoi les questions environnementales sont-elles devenues des enjeux de puissance et de cooperation ?",
                parties: [
                    {
                        titre: "I. L'environnement, source de tensions geopolitiques",
                        contenu: "Les RESSOURCES comme source de conflits : eau (Nil, Jourdain, Tigre-Euphrate), petrole (Moyen-Orient, Arctique), terres rares (Chine = 60% de la production mondiale). Conflits lies au changement climatique : secheresses → migrations → instabilite (Sahel, Syrie). Inegalites Nord-Sud : les pays riches polluent, les pays pauvres subissent."
                    },
                    {
                        titre: "II. La cooperation internationale : avancees et limites",
                        contenu: "Sommet de Rio (1992) : prise de conscience mondiale, developpement durable. Protocole de Kyoto (1997) : reduction des emissions, mais USA non signataires. COP21 Paris (2015) : accord universel, objectif +1.5/+2°C, mais engagements volontaires et insuffisants. Limites : les interets nationaux freinent la cooperation (Chine, USA, pays petroliers). Le droit international de l'environnement reste faible (pas de sanctions)."
                    },
                    {
                        titre: "III. L'environnement, un outil de soft power et d'influence",
                        contenu: "Les pays scandinaves et l'Allemagne utilisent la transition ecologique comme image de marque. Greta Thunberg et les mouvements citoyens : une diplomatie 'par le bas.' Le greenwashing : instrumentalisation de l'ecologie par les Etats et les entreprises. La Chine : premier pollueur mais aussi premier investisseur dans les renouvelables — strategie de puissance."
                    }
                ],
                conclusion: "L'environnement est un enjeu geopolitique complet : source de conflits, objet de cooperation fragile et instrument de puissance. Le defi est de passer d'une logique de rapports de force a une gouvernance mondiale efficace. Ouverture : la crise climatique peut-elle devenir le ciment d'une solidarite internationale ?",
                conseils: [
                    "Croiser les echelles : mondiale (COP), regionale (UE, Arctique), locale (conflits d'usage).",
                    "Utiliser des exemples precis et dates : COP21, barrage de la Renaissance, Accords de Paris.",
                    "Ne pas etre seulement descriptif : ANALYSER les rapports de force derriere les discours ecologiques."
                ]
            }
        },

        // ==================== SVT ====================

        // --- 2024 ---
        {
            id: 'svt-2024-01',
            title: "Genetique et evolution : les mecanismes de la diversite genetique",
            year: 2024,
            serie: 'Generale',
            matiere: 'SVT',
            type: 'exercice 1',
            corrige: {
                introduction: "La diversite genetique est le fondement de l'evolution. Elle resulte de mecanismes qui modifient l'ADN (mutations) et brassent les combinaisons genetiques (meiose, fecondation). Montrer comment ces mecanismes produisent la diversite du vivant.",
                parties: [
                    {
                        titre: "I. Les mutations, source premiere de diversite",
                        contenu: "Les MUTATIONS = modifications de la sequence d'ADN. Types : substitution (un nucleotide remplace un autre), insertion, deletion. Causes : erreurs de replication, agents mutagenes (UV, tabac, radiations). Les mutations sont ALEATOIRES et RARES. Elles peuvent etre neutres (pas d'effet), deleteres (nocives) ou benefiques (avantage selectif). C'est la matiere premiere de l'evolution."
                    },
                    {
                        titre: "II. Le brassage genetique lors de la reproduction sexuee",
                        contenu: "La MEIOSE produit des gametes (cellules sexuelles) UNIQUES. Brassage INTERCHROMOSOMIQUE : les chromosomes homologues se repartissent aleatoirement (2^23 = 8 millions de combinaisons possibles chez l'humain). Brassage INTRACHROMOSOMIQUE : crossing-over (echange de portions entre chromosomes homologues). La FECONDATION : rencontre aleatoire de deux gametes → combinaison unique."
                    },
                    {
                        titre: "III. La selection naturelle oriente l'evolution",
                        contenu: "Darwin : les individus les mieux adaptes survivent et se reproduisent davantage (selection naturelle). Les mutations avantageuses sont selectionnees et se repandent dans la population. Derive genetique : dans les petites populations, le hasard peut fixer ou eliminer des alleles. L'evolution = mutations + selection naturelle + derive genetique."
                    }
                ],
                conclusion: "La diversite genetique resulte des mutations (innovation) et du brassage genetique lors de la reproduction sexuee (recombinaison). La selection naturelle et la derive genetique orientent l'evolution des populations. Ces mecanismes expliquent la biodiversite du vivant.",
                conseils: [
                    "Faire des SCHEMAS : meiose avec crossing-over, repartition des chromosomes. Ca rapporte des points.",
                    "Distinguer brassage inter- et intrachromosomique : les deux sont attendus.",
                    "Utiliser le vocabulaire precis : allele, locus, homozygote/heterozygote, phenotype/genotype."
                ]
            }
        },
        {
            id: 'svt-2024-02',
            title: "Le reflexe myotatique : un exemple de commande nerveuse du mouvement",
            year: 2024,
            serie: 'Generale',
            matiere: 'SVT',
            type: 'exercice 2',
            corrige: {
                introduction: "Le reflexe myotatique (ex : reflexe rotulien) est un reflexe MONOSYNAPTIQUE : un stimulus provoque une contraction musculaire involontaire. C'est un modele d'etude de la communication nerveuse.",
                parties: [
                    {
                        titre: "I. Le circuit du reflexe myotatique",
                        contenu: "RECEPTEUR : le fuseau neuromusculaire (dans le muscle) detecte l'etirement. VOIE AFFERENTE : le neurone sensitif transmet le message nerveux vers la moelle epiniere. CENTRE NERVEUX : la moelle epiniere (pas le cerveau = c'est involontaire). VOIE EFFERENTE : le motoneurone transmet l'ordre de contraction. EFFECTEUR : le muscle se contracte. C'est un ARC REFLEXE : stimulus → recepteur → nerf sensitif → moelle → motoneurone → muscle."
                    },
                    {
                        titre: "II. Le message nerveux",
                        contenu: "Le message nerveux est ELECTRIQUE le long du neurone : potentiel d'action (signal tout-ou-rien). Frequence des potentiels d'action = intensite du stimulus. A la SYNAPSE, le message devient CHIMIQUE : le neurotransmetteur (acetylcholine) est libere dans la fente synaptique. Il se fixe sur les recepteurs du neurone post-synaptique et declenche un nouveau potentiel d'action."
                    },
                    {
                        titre: "III. Innervation reciproque",
                        contenu: "Quand le muscle extenseur se contracte (reflexe), le muscle flechisseur antagoniste se RELACHE. C'est l'innervation reciproque : un interneurone inhibiteur dans la moelle epiniere inhibe le motoneurone du muscle antagoniste. Cela permet un mouvement coordonne."
                    }
                ],
                conclusion: "Le reflexe myotatique illustre les principes fondamentaux de la communication nerveuse : nature electrique du message, transmission chimique a la synapse, integration par le centre nerveux. C'est un reflexe simple mais qui revele la complexite du systeme nerveux.",
                conseils: [
                    "SCHEMA OBLIGATOIRE : l'arc reflexe avec fleches (stimulus → recepteur → nerf → centre → nerf → effecteur).",
                    "Distinguer message ELECTRIQUE (le long du neurone) et CHIMIQUE (a la synapse).",
                    "Ne pas confondre reflexe (involontaire, moelle epiniere) et mouvement volontaire (cerveau)."
                ]
            }
        },

        // ==================== MATHS ====================

        // --- 2024 ---
        {
            id: 'maths-2024-01',
            title: "Suites et fonctions : etude d'une suite definie par recurrence",
            year: 2024,
            serie: 'Generale',
            matiere: 'Mathematiques',
            type: 'exercice',
            corrige: {
                introduction: "Exercice classique du Bac : etudier une suite definie par u(n+1) = f(u(n)), demontrer sa convergence et trouver sa limite. Les outils : recurrence, monotonie, theoreme de convergence monotone.",
                parties: [
                    {
                        titre: "Methode : etudier une suite definie par recurrence",
                        contenu: "1) CALCULER les premiers termes (u0, u1, u2, u3) pour conjecturer le comportement. 2) DEMONTRER par recurrence les proprietes (ex : 0 < u(n) < 2 pour tout n). 3) ETUDIER la monotonie (u(n+1) - u(n) ou u(n+1)/u(n)). 4) CONCLURE : suite croissante et majoree → elle CONVERGE (theoreme de convergence monotone). 5) TROUVER la limite L : si u(n) → L alors L = f(L). Resoudre l'equation."
                    },
                    {
                        titre: "La demonstration par recurrence",
                        contenu: "Etape 1 — INITIALISATION : verifier que la propriete est vraie pour n = 0. Etape 2 — HEREDITE : supposer P(n) vraie (hypothese de recurrence) et montrer que P(n+1) est vraie. Etape 3 — CONCLUSION : par le principe de recurrence, P(n) est vraie pour tout n ≥ 0. Piege : ne JAMAIS oublier l'initialisation (beaucoup d'eleves perdent des points)."
                    },
                    {
                        titre: "Theoreme de convergence monotone",
                        contenu: "Toute suite CROISSANTE et MAJOREE converge. Toute suite DECROISSANTE et MINOREE converge. C'est LE theoreme a utiliser pour prouver la convergence d'une suite definie par recurrence. Attention : il dit que la suite converge, mais ne donne PAS la valeur de la limite. Pour la trouver : passer a la limite dans la relation de recurrence."
                    }
                ],
                conclusion: "Les suites par recurrence sont un classique du Bac. La methode est toujours la meme : calculer, conjecturer, demontrer par recurrence, etudier la monotonie, conclure sur la convergence, trouver la limite.",
                conseils: [
                    "TOUJOURS rediger la recurrence en 3 etapes : initialisation, heredite, conclusion.",
                    "Calculer u0 a u3 pour avoir une intuition AVANT de demontrer.",
                    "Le theoreme de convergence monotone est votre meilleur ami pour les suites bornees."
                ]
            }
        },
        {
            id: 'maths-2024-02',
            title: "Probabilites : loi binomiale et loi normale",
            year: 2024,
            serie: 'Generale',
            matiere: 'Mathematiques',
            type: 'exercice',
            corrige: {
                introduction: "Exercice de probabilites : reconnaitre une loi binomiale, calculer des probabilites, puis approcher par une loi normale. Utilisation de la calculatrice attendue.",
                parties: [
                    {
                        titre: "Reconnaitre et utiliser la loi binomiale B(n, p)",
                        contenu: "La loi binomiale s'applique quand : n epreuves INDEPENDANTES, chaque epreuve a 2 issues (succes/echec), la probabilite de succes p est CONSTANTE. X suit B(n, p) → P(X = k) = C(n,k) × p^k × (1-p)^(n-k). Esperance E(X) = n×p. Variance V(X) = n×p×(1-p). Ecart-type = racine(V). Utiliser la calculatrice pour les calculs (binomPdf, binomCdf)."
                    },
                    {
                        titre: "Approximation par la loi normale",
                        contenu: "Quand n est GRAND (n×p ≥ 5 et n×(1-p) ≥ 5), on peut approcher B(n,p) par la loi normale N(mu, sigma) avec mu = n×p et sigma = racine(n×p×(1-p)). Loi normale : courbe en cloche, symetrique. Regle des 95% : P(mu - 2sigma < X < mu + 2sigma) ≈ 0.95. Intervalle de fluctuation : [p - 1.96×racine(p(1-p)/n) ; p + 1.96×racine(p(1-p)/n)]."
                    },
                    {
                        titre: "Prise de decision et intervalle de confiance",
                        contenu: "Intervalle de FLUCTUATION : on connait p, on regarde si la frequence observee est dans l'intervalle. Si elle sort → on rejette l'hypothese. Intervalle de CONFIANCE : on ne connait PAS p, on l'estime a partir d'un echantillon. IC au niveau 95% : [f - 1/racine(n) ; f + 1/racine(n)] (formule simplifiee). Attention : ne pas confondre fluctuation (on connait p) et confiance (on estime p)."
                    }
                ],
                conclusion: "Les probabilites au Bac combinent calculs (binomiale) et raisonnement (prise de decision). Maitriser la calculatrice est indispensable. La loi normale apparait comme approximation de la binomiale pour les grands echantillons.",
                conseils: [
                    "Verifier les conditions d'application AVANT d'utiliser une loi (independance, n×p ≥ 5).",
                    "Montrer les etapes de calcul meme si vous utilisez la calculatrice.",
                    "Bien distinguer intervalle de fluctuation (on connait p) et intervalle de confiance (on estime p)."
                ]
            }
        },

        // ==================== PHYSIQUE-CHIMIE ====================

        // --- 2024 ---
        {
            id: 'physchim-2024-01',
            title: "Mouvements et interactions : etude du mouvement d'un projectile",
            year: 2024,
            serie: 'Generale',
            matiere: 'Physique-Chimie',
            type: 'exercice',
            corrige: {
                introduction: "Exercice classique : etudier le mouvement d'un projectile (balle, ballon, satellite) en appliquant les lois de Newton. Decomposition du mouvement en composantes horizontale et verticale.",
                parties: [
                    {
                        titre: "I. Appliquer la deuxieme loi de Newton",
                        contenu: "Somme des forces = m × a (vecteur). Identifier les forces : POIDS P = m×g (vertical, vers le bas). Si on neglige les frottements : seul le poids agit. Projeter sur les axes : axe Ox (horizontal) : ax = 0 (mouvement uniforme). Axe Oy (vertical) : ay = -g (mouvement uniformement accelere). Le mouvement est PARABOLIQUE."
                    },
                    {
                        titre: "II. Equations horaires du mouvement",
                        contenu: "Vitesse : Vx(t) = V0×cos(alpha) et Vy(t) = V0×sin(alpha) - g×t. Position : x(t) = V0×cos(alpha)×t et y(t) = V0×sin(alpha)×t - (1/2)×g×t². Pour trouver l'equation de la trajectoire : eliminer t entre x(t) et y(t). On obtient y = f(x), une PARABOLE."
                    },
                    {
                        titre: "III. Exploitation : portee, hauteur maximale, duree",
                        contenu: "HAUTEUR MAXIMALE : quand Vy = 0 → t = V0×sin(alpha)/g. PORTEE : quand y = 0 (retour au sol) → t = 2×V0×sin(alpha)/g puis x = V0²×sin(2alpha)/g. PORTEE MAXIMALE : pour alpha = 45°. Application numerique : remplacer les valeurs, verifier les unites, arrondir au bon nombre de chiffres significatifs."
                    }
                ],
                conclusion: "L'etude du mouvement d'un projectile est un exercice fondamental qui mobilise la 2e loi de Newton, les equations horaires et l'analyse vectorielle. La methode est toujours : forces → acceleration → vitesse → position.",
                conseils: [
                    "TOUJOURS faire un schema avec les axes, les forces, le vecteur vitesse initiale.",
                    "Verifier les UNITES a chaque etape (SI : m, s, kg, N).",
                    "Ne pas oublier les CONDITIONS INITIALES (position et vitesse a t=0)."
                ]
            }
        },
        {
            id: 'physchim-2024-02',
            title: "Chimie organique : reactions acido-basiques et titrage",
            year: 2024,
            serie: 'Generale',
            matiere: 'Physique-Chimie',
            type: 'exercice',
            corrige: {
                introduction: "Exercice de chimie : etudier une reaction acido-basique, realiser un titrage et exploiter les resultats pour determiner une concentration.",
                parties: [
                    {
                        titre: "I. Les reactions acido-basiques",
                        contenu: "Un ACIDE = espece qui cede un proton H+. Une BASE = espece qui capte un proton H+. Couples acide/base : HA/A⁻ (ex : CH3COOH/CH3COO⁻). Reaction : HA + B⁻ → A⁻ + HB. Le pH mesure l'acidite : pH < 7 acide, pH = 7 neutre, pH > 7 basique. pH = -log[H3O+]."
                    },
                    {
                        titre: "II. Le titrage : methode et exploitation",
                        contenu: "PRINCIPE : on verse une solution de concentration connue (titrant) dans une solution de concentration inconnue (titre). A l'EQUIVALENCE : les reactifs sont dans les proportions stochiometriques → n(acide) = n(base). Formule a l'equivalence : Ca × Va = Cb × Vb. REPERAGE : changement de couleur de l'indicateur colore OU point d'inflexion sur la courbe pH = f(V)."
                    },
                    {
                        titre: "III. Calculs et resultats",
                        contenu: "1) Reperer le volume a l'equivalence Ve sur la courbe. 2) Appliquer la relation a l'equivalence : Ca = Cb × Vb / Va (ou l'inverse selon ce qu'on cherche). 3) Verifier la coherence (ordre de grandeur). 4) Incertitude : reperer l'incertitude sur Ve et propager. Chiffres significatifs : adapter au nombre de CS des donnees."
                    }
                ],
                conclusion: "Le titrage acido-basique est une methode precise pour determiner une concentration inconnue. La methode est toujours : reperer l'equivalence, appliquer la relation stochiometrique, calculer. La maitrise de la verrerie et de la precision est essentielle.",
                conseils: [
                    "Connaitre par coeur la relation a l'equivalence : na = nb (quantites de matiere egales).",
                    "Sur la courbe, l'equivalence = le point d'inflexion (methode des tangentes).",
                    "Ne pas confondre concentration (mol/L) et quantite de matiere (mol)."
                ]
            }
        },

        // ==================== ESPAGNOL ====================

        // --- 2024 ---
        {
            id: 'esp-2024-01',
            title: "Identidades e intercambios : la inmigracion y la busqueda de una vida mejor",
            year: 2024,
            serie: 'Generale',
            matiere: 'Espagnol',
            type: 'expression ecrite',
            corrige: {
                introduction: "Ce sujet s'inscrit dans l'axe 'Identidades e intercambios.' Le dossier documentaire porte sur l'immigration latino-americaine vers les Etats-Unis ou l'Europe. L'expression ecrite demande de discuter les enjeux de l'immigration : espoir d'une vie meilleure vs difficultes d'integration.",
                parties: [
                    {
                        titre: "I. Comprendre les documents et identifier l'axe",
                        contenu: "Presenter chaque document : nature (articulo, foto, testimonio), theme, source. Relier a l'axe 'Identidades e intercambios' : l'immigration pose la question de l'IDENTITE (qui suis-je dans un nouveau pays ?) et des ECHANGES entre cultures. Vocabulaire cle : inmigracion, frontera, sueno, integracion, identidad, mestizaje, desarraigo (deracinement)."
                    },
                    {
                        titre: "II. Methode de l'expression ecrite",
                        contenu: "INTRODUCTION : presenter le theme en 2-3 phrases. 'El tema de la inmigracion es central en el mundo hispanico. Millones de personas cruzan fronteras en busca de una vida mejor.' DEVELOPPEMENT : 2-3 paragraphes avec arguments + exemples. Utiliser les CONNECTEURS : primero, ademas, sin embargo, por otra parte, en conclusion. CONCLUSION : resumer + avis personnel. 'En mi opinion, la inmigracion es un fenomeno complejo que enriquece las sociedades pero plantea desafios importantes.'"
                    },
                    {
                        titre: "III. Arguments et exemples a mobiliser",
                        contenu: "POUR l'immigration : enrichissement culturel (mestizaje), dynamisme economique, droit a une vie meilleure. DIFFICULTES : discrimination, separation des familles, danger du voyage (pateras, mur USA-Mexique), clandestinite, perte d'identite. EXEMPLES : les 'dreamers' aux USA (enfants d'immigres sans papiers), les pateras vers les Canaries, le film Diarios de motocicleta (prise de conscience des inegalites). REFERENCES CULTURELLES : le 'sueno americano', le deracinement (desarraigo), la nostalgia."
                    }
                ],
                conclusion: "L'immigration est un theme central de la civilisation hispanique. Au Bac, il faut montrer la complexite du sujet (pas de reponse simpliste) et utiliser un vocabulaire riche et des references culturelles precises.",
                conseils: [
                    "TOUJOURS relier le sujet a un AXE du programme et le NOMMER explicitement.",
                    "Utiliser au moins 3-4 connecteurs logiques (primero, sin embargo, ademas, en conclusion).",
                    "Donner votre avis personnel en conclusion avec 'En mi opinion' ou 'Desde mi punto de vista'.",
                    "Eviter les fautes classiques : ser/estar, por/para, concordance des temps."
                ]
            }
        },
        {
            id: 'esp-2024-02',
            title: "Arte y poder : Guernica de Picasso y el arte comprometido",
            year: 2024,
            serie: 'Generale',
            matiere: 'Espagnol',
            type: 'comprehension et expression',
            corrige: {
                introduction: "Sujet sur l'axe 'Arte y poder.' Le dossier peut contenir un extrait sur Guernica de Picasso, un texte sur Garcia Lorca ou un article sur le street art politique en Amerique latine. L'enjeu : comment l'art peut-il etre un outil de resistance face au pouvoir ?",
                parties: [
                    {
                        titre: "I. Comprendre le lien entre art et pouvoir",
                        contenu: "L'art peut SERVIR le pouvoir : propagande, glorification du regime (muralisme officiel, art stalinien). L'art peut RESISTER au pouvoir : denoncer l'injustice, temoigner de l'horreur, donner une voix aux opprimes. Guernica (1937) : Picasso peint le bombardement d'une ville basque par les nazis allies de Franco. C'est un CRI contre la guerre. L'art engage (arte comprometido) = l'artiste prend position."
                    },
                    {
                        titre: "II. Exemples d'art engage dans le monde hispanique",
                        contenu: "PICASSO : Guernica = symbole universel anti-guerre. Noir, blanc, gris. Corps dechires, cheval, taureau. GARCIA LORCA : poete et dramaturge assassine par les franquistes en 1936. La casa de Bernarda Alba = critique de l'oppression des femmes. DIEGO RIVERA : muralisme mexicain, fresques monumentales sur les murs publics, art SOCIAL (l'ouvrier, le paysan, la revolution). STREET ART latino-americain : les murs des villes comme espaces d'expression politique (Chile, Colombia, Argentina)."
                    },
                    {
                        titre: "III. Rediger l'expression ecrite",
                        contenu: "Question type : 'Piensas que el arte puede cambiar la sociedad ?' Structure : INTRO : 'El arte siempre ha tenido una relacion estrecha con el poder.' ARGUMENT 1 : 'Por un lado, el arte puede denunciar las injusticias...' (ex : Guernica). ARGUMENT 2 : 'Ademas, el arte da voz a los que no la tienen...' (ex : street art). NUANCE : 'Sin embargo, el arte solo no puede cambiar el mundo...' CONCLUSION : 'En conclusion, el arte es un arma pacifica que contribuye a despertar las conciencias.'"
                    }
                ],
                conclusion: "L'axe 'Arte y poder' est l'un des plus riches du programme. Il permet de mobiliser des references culturelles fortes (Picasso, Lorca, Rivera) et de developper une reflexion personnelle sur le role de l'artiste dans la societe.",
                conseils: [
                    "Apprendre par coeur 3-4 references culturelles avec dates et details (Guernica 1937, Lorca 1936, Rivera).",
                    "Varier les TEMPS verbaux : present pour l'analyse, passe (preterito) pour les faits historiques.",
                    "Montrer que vous comprenez la NUANCE : l'art n'est pas toujours de resistance, il peut aussi servir le pouvoir.",
                    "Vocabulaire essentiel : compromiso (engagement), denunciar, censurar, libertad de expresion, arma pacifica."
                ]
            }
        },

        // --- 2023 ---
        {
            id: 'esp-2023-01',
            title: "Territorio y memoria : la memoria historica en Espana",
            year: 2023,
            serie: 'Generale',
            matiere: 'Espagnol',
            type: 'expression ecrite',
            corrige: {
                introduction: "Sujet sur l'axe 'Territorio y memoria.' La memoire historique en Espagne est un theme central : guerre civile (1936-1939), dictature de Franco (1939-1975), transition democratique et loi de memoire historique. Le dossier peut contenir des temoignages, des articles sur les fosses communes ou des textes sur la loi de 2007.",
                parties: [
                    {
                        titre: "I. La guerre civile et la dictature : une memoire douloureuse",
                        contenu: "Guerre civile (1936-1939) : republicains vs nationalistes (Franco). Environ 500 000 morts. Dictature de Franco (1939-1975) : 36 ans sans liberte, repression, censure, langues regionales interdites. Des milliers de republicains dans des FOSSES COMMUNES non identifiees. Apres la mort de Franco : la transition democratique se fait dans le SILENCE. Le 'Pacte de l'oubli' (pacto del olvido) : on decide de ne pas parler du passe pour avancer."
                    },
                    {
                        titre: "II. La loi de memoire historique et ses enjeux",
                        contenu: "Loi de Memoire Historique (2007, Zapatero) : reconnait les victimes des deux camps, ordonne le retrait des symboles franquistes. Loi de Memoire Democratique (2022, Sanchez) : va plus loin, cree une banque ADN pour identifier les fosses communes, interdit la glorification du franquisme. Exhumation de Franco du Valle de los Caidos (2019) : acte symbolique fort. Debat : certains veulent 'tourner la page', d'autres exigent justice et verite."
                    },
                    {
                        titre: "III. Comment en parler a l'ecrit",
                        contenu: "Vocabulaire : la guerra civil, la dictadura, la represion, la memoria historica, las fosas comunes (fosses communes), los desaparecidos, el pacto del olvido, la reconciliacion. Phrases-types : 'Espana tuvo que enfrentarse a su pasado doloroso' (l'Espagne a du faire face a son passe douloureux). 'La memoria historica es esencial para que las victimas no sean olvidadas' (pour que les victimes ne soient pas oubliees). 'Sin embargo, algunos piensan que es mejor mirar hacia el futuro' (certains pensent qu'il vaut mieux regarder vers l'avenir)."
                    }
                ],
                conclusion: "La memoire historique espagnole est un sujet sensible et frequent au Bac. Il faut montrer la complexite : le silence d'apres-guerre, le reveil memoriel tardif, les lois recentes. C'est un sujet parfait pour l'axe 'Territorio y memoria' car il lie un territoire (l'Espagne) a sa memoire collective.",
                conseils: [
                    "Dates essentielles a connaitre : 1936-1939 (guerre), 1939-1975 (Franco), 1978 (Constitution), 2007 (loi memoire), 2019 (exhumation de Franco).",
                    "Ne pas prendre parti : montrer les DEUX positions (ceux qui veulent se souvenir et ceux qui veulent avancer).",
                    "Utiliser l'imparfait pour decrire la dictature et le passe simple (indefinido) pour les evenements ponctuels.",
                    "Si possible, citer une oeuvre : El laberinto del fauno (Del Toro), La voz dormida (Dulce Chacon)."
                ]
            }
        },
        {
            id: 'esp-2023-02',
            title: "Espacio privado y publico : el papel de la mujer en la sociedad hispana",
            year: 2023,
            serie: 'Generale',
            matiere: 'Espagnol',
            type: 'expression ecrite',
            corrige: {
                introduction: "Sujet sur l'axe 'Espacio privado y espacio publico.' Le role des femmes dans le monde hispanique a beaucoup evolue : de l'enfermement domestique sous Franco aux mouvements feministes actuels. Le dossier peut contenir des textes sur le feminisme, la violence de genre ou l'emancipation des femmes latino-americaines.",
                parties: [
                    {
                        titre: "I. La femme enfermee dans l'espace prive",
                        contenu: "Sous FRANCO : la femme est relegue au foyer (ama de casa). Elle ne peut pas travailler, ouvrir un compte bancaire ou voyager sans l'autorisation de son mari. L'Eglise renforce ce modele : la femme = mere et epouse. En LITTERATURE : La casa de Bernarda Alba (Lorca) = l'enfermement des femmes par une mere tyrannique. Como agua para chocolate (Esquivel) = une femme mexicaine prisonniere des traditions."
                    },
                    {
                        titre: "II. L'emancipation et l'irruption dans l'espace public",
                        contenu: "Apres Franco : les femmes espagnoles obtiennent l'egalite juridique (Constitution de 1978). Droit de vote, droit au divorce (1981), droit a l'avortement (1985). Le FEMINISME hispanique : le mouvement 'Ni una menos' (Argentine, 2015) contre les feminicides, le mouvement du 8 mars (dia de la mujer). Figures : Rigoberta Menchu (Guatemala, Prix Nobel de la paix 1992), les Madres de la Plaza de Mayo (Argentine)."
                    },
                    {
                        titre: "III. Rediger sur ce sujet",
                        contenu: "Vocabulaire : igualdad de genero, feminismo, machismo, violencia de genero, emancipacion, luchar por los derechos, el techo de cristal (plafond de verre). Question type : 'La igualdad entre hombres y mujeres es una realidad en el mundo hispanico ?' STRUCTURE : constater les progres (lois, mouvements) → nuancer (inegalites persistantes, feminicides) → conclure (beaucoup reste a faire). Phrase de conclusion : 'A pesar de los avances, queda mucho camino por recorrer para alcanzar una verdadera igualdad.'"
                    }
                ],
                conclusion: "Le role des femmes est un sujet transversal qui touche a la famille, la politique, le travail, la culture. Au Bac, il faut montrer l'evolution historique (avant/apres) et les enjeux actuels. C'est un sujet ou les references culturelles (Lorca, Esquivel, Almodovar) font la difference.",
                conseils: [
                    "Relier explicitement a l'axe : 'Este tema se relaciona con el eje Espacio privado y publico porque...'",
                    "Utiliser le contraste avant/apres : 'Antes, las mujeres no podian... Hoy, pueden...'",
                    "Citer au moins UNE oeuvre litteraire ou cinematographique (Lorca, Esquivel, Almodovar).",
                    "Vocabulaire piege : 'mujer' (femme) ≠ 'esposa' (epouse). 'Genero' = genre (social), 'sexo' = sexe (biologique)."
                ]
            }
        },

        // ==================== HLP ====================

        // --- 2024 ---
        {
            id: 'hlp-2024-01',
            title: "L'education forme-t-elle ou deforme-t-elle l'individu ?",
            year: 2024,
            serie: 'Generale',
            matiere: 'HLP',
            type: 'essai philosophique',
            corrige: {
                introduction: "L'education est universellement valorisee comme un moyen de developper l'individu. Pourtant, des penseurs comme Rousseau ou Nietzsche ont denonce ses effets deformants : conformisme, repression de la singularite, formatage social. Problematique : l'education libere-t-elle l'individu ou le moule-t-elle selon des normes qui lui sont etrangeres ?",
                parties: [
                    {
                        titre: "I. L'education forme l'individu : de l'animal a l'humain",
                        contenu: "Kant : 'L'homme est la seule creature qui doive etre eduquee.' Sans education, l'homme reste un etre de pulsions. L'education transmet des SAVOIRS (lire, compter, raisonner), des VALEURS (respect, justice, solidarite) et une CULTURE (langue, histoire, arts). Condorcet : l'instruction publique emancipe le citoyen et fonde la democratie. Montaigne : 'Mieux vaut une tete bien faite qu'une tete bien pleine' — l'education doit former le jugement, pas gaver de connaissances."
                    },
                    {
                        titre: "II. L'education peut deformer : conformisme et violence symbolique",
                        contenu: "Rousseau (Emile, 1762) : la societe CORROMPT l'enfant naturellement bon. L'education traditionnelle impose des prejuges, des conventions, des desirs artificiels. Bourdieu : l'ecole exerce une 'violence symbolique' — elle impose la culture des classes dominantes comme si c'etait LA culture universelle. Les enfants des milieux populaires sont donc structurellement desavantages. Nietzsche : l'education produit des 'animaux domestiques', des etres dociles qui n'osent plus penser par eux-memes. Foucault (Surveiller et punir) : l'ecole est une institution disciplinaire qui normalise les corps et les esprits."
                    },
                    {
                        titre: "III. Former sans deformer : l'ideal d'une education emancipatrice",
                        contenu: "Montaigne : l'education doit 'essayer' (tester, explorer) et non imposer. Laisser l'eleve douter et chercher. Rousseau : l'education NEGATIVE — ne pas enseigner, mais laisser l'enfant apprendre par l'experience. Freire (Pedagogie des opprimes, 1970) : l'education doit etre un outil de LIBERATION, pas de domestication. L'eleve n'est pas un vase a remplir mais un sujet qui construit son savoir. Rabelais (Gargantua) : l'education humaniste allie le corps et l'esprit, le savoir et le plaisir."
                    }
                ],
                conclusion: "L'education est ambivalente : elle peut former (developper la raison, la liberte, la culture) ou deformer (imposer le conformisme, reproduire les inegalites). L'enjeu est de penser une education qui emancipe sans formater — qui fait des individus LIBRES et non des individus CONFORMES. Ouverture : l'ecole actuelle est-elle du cote de la formation ou de la deformation ?",
                conseils: [
                    "Mobiliser Rousseau, Kant et Montaigne — les trois incontournables sur l'education en HLP.",
                    "Le piege : ne pas etre seulement POUR ou CONTRE l'education. Montrer la tension.",
                    "Utiliser des exemples litteraires : Gargantua (Rabelais), Emile (Rousseau), Les Heritiers (Bourdieu).",
                    "Le terme 'deformer' est fort : bien le definir (imposer une forme exterieure, nier la singularite)."
                ]
            }
        },
        {
            id: 'hlp-2024-02',
            title: "Interpretation litteraire : Primo Levi, Si c'est un homme (1947), extrait",
            year: 2024,
            serie: 'Generale',
            matiere: 'HLP',
            type: 'interpretation litteraire',
            corrige: {
                introduction: "Presenter l'auteur : Primo LEVI (1919-1987), chimiste italien, deporte a Auschwitz en 1944. Si c'est un homme (1947) = temoignage sur la deshumanisation dans les camps nazis. Le titre pose LA question : quand est-on encore un homme ? Annoncer les axes d'interpretation.",
                parties: [
                    {
                        titre: "I. Le temoignage comme devoir et comme acte d'humanite",
                        contenu: "Levi ecrit pour TEMOIGNER : 'Je voudrais que chacun de mes lecteurs puisse sentir.' Il ecrit aussi pour COMPRENDRE : comment des hommes ont pu faire ca a d'autres hommes ? L'ecriture est SOBRE, precise, scientifique (Levi est chimiste). Pas de pathos, pas de cris — c'est cette retenue qui rend le texte si puissant. Ecrire = resister a l'effacement. Les nazis voulaient que personne ne sache. Temoigner, c'est les vaincre."
                    },
                    {
                        titre: "II. La deshumanisation : comment on cesse d'etre un homme",
                        contenu: "Dans le camp, tout est fait pour DETRUIRE l'humanite du detenu : le numero tatoue remplace le NOM. L'uniforme raye remplace les VETEMENTS personnels. La faim permanente reduit l'homme a un CORPS souffrant. Le travail force epuise jusqu'a la mort. Le froid, la salete, la violence quotidienne. Levi montre que la deshumanisation est un PROCESSUS : on ne devient pas 'non-humain' d'un coup, on est lentement prive de tout ce qui fait l'humanite."
                    },
                    {
                        titre: "III. Ce qui reste d'humain : la dignite irrecductible",
                        contenu: "Malgre tout, certains gestes restent HUMAINS : partager un morceau de pain, se souvenir d'un poeme (Levi recite Dante a un camarade), garder une forme de solidarite. Le chapitre 'Le chant d'Ulysse' : Levi essaie de se souvenir d'un passage de Dante pour le reciter a un compagnon. Ce moment de CULTURE au milieu de l'horreur = preuve que l'homme ne peut pas etre totalement detruit. La question du titre ('Si c'est un homme') n'a pas de reponse definitive : c'est au lecteur de decider."
                    }
                ],
                conclusion: "Si c'est un homme est a la fois un temoignage, une reflexion philosophique et une oeuvre litteraire. Levi montre que la deshumanisation est possible mais que quelque chose d'humain RESISTE. Le texte pose la question fondamentale de l'humanite en question — exactement le theme du programme HLP. Ouverture : Levi s'est suicide en 1987. Peut-on survivre a l'indicible ?",
                conseils: [
                    "En interpretation litteraire : CITER le texte entre guillemets a chaque idee.",
                    "Ne pas raconter le texte mais l'ANALYSER : que veut dire l'auteur ? Comment le dit-il ?",
                    "Lier a la problematique HLP 'L'humanite en question' : la Shoah est l'epreuve ultime de l'humanite.",
                    "Le style de Levi (sobre, precis, sans pathos) est un CHOIX — l'analyser comme tel."
                ]
            }
        },

        // --- 2023 ---
        {
            id: 'hlp-2023-01',
            title: "Le progres technique rend-il l'homme plus humain ?",
            year: 2023,
            serie: 'Generale',
            matiere: 'HLP',
            type: 'essai philosophique',
            corrige: {
                introduction: "Le progres technique a transforme la condition humaine : medecine, transports, communication. Pourtant, les deux guerres mondiales ont montre que la technique pouvait servir la barbarie. Problematique : le progres technique est-il au service de l'humanite ou menace-t-il ce qui nous rend humains ?",
                parties: [
                    {
                        titre: "I. Le progres technique humanise : il libere l'homme de la necessite",
                        contenu: "La technique libere l'homme du travail penible (machines, automatisation). La medecine allonge l'esperance de vie (de 30 ans au Moyen Age a 80 ans aujourd'hui). L'imprimerie (Gutenberg, 1450) democratise le savoir. Internet donne acces a la connaissance universelle. Les Lumieres (Condorcet) : le progres technique = progres de l'humanite. La technique est ce qui distingue l'homme de l'animal (Aristote : l'homme est un 'animal technique')."
                    },
                    {
                        titre: "II. Le progres technique peut deshumaniser",
                        contenu: "La bombe atomique (Hiroshima, 1945) : la science au service de la destruction de masse. Les camps de concentration : la mort INDUSTRIALISEE (trains, chambres a gaz = logistique technique). Heidegger : la technique moderne transforme la nature et l'homme en RESSOURCES a exploiter ('arraisonnement'). L'alienation par la technique (Marx) : l'ouvrier a la chaine perd le sens de son travail. Les reseaux sociaux : addiction, surveillance, manipulation."
                    },
                    {
                        titre: "III. Le transhumanisme : depasser l'humain ou le perdre ?",
                        contenu: "Le TRANSHUMANISME veut utiliser la technologie pour ameliorer l'homme : implants cerebraux (Neuralink), modification genetique (CRISPR), IA. POUR : guerir des maladies incurables, augmenter les capacites, vivre plus longtemps. CONTRE : creer des inegalites (seuls les riches y auront acces), perdre ce qui fait l'humanite (la vulnerabilite, la mort, les limites). Jonas (Le Principe responsabilite, 1979) : nous avons le devoir de preserver les conditions d'une vie authentiquement humaine pour les generations futures."
                    }
                ],
                conclusion: "Le progres technique est ambivalent : il peut humaniser (liberer, soigner, eduquer) ou deshumaniser (detruire, aliener, formater). L'enjeu n'est pas la technique elle-meme mais l'USAGE qu'on en fait. Le transhumanisme radicalise la question : jusqu'ou peut-on modifier l'homme sans le perdre ? Ouverture : avons-nous besoin d'une ethique de la technique ?",
                conseils: [
                    "Ne pas etre naif (tout progres est bon) ni catastrophiste (la technique est le mal). Montrer la TENSION.",
                    "Mobiliser Heidegger (arraisonnement), Jonas (principe responsabilite), Arendt (condition de l'homme moderne).",
                    "Exemples concrets : bombe atomique, camps, IA, reseaux sociaux — du XXe au XXIe siecle.",
                    "Le transhumanisme est un sujet d'actualite tres apprecie des correcteurs HLP."
                ]
            }
        },
        {
            id: 'hlp-2023-02',
            title: "Interpretation litteraire : Montaigne, Essais, 'Des Cannibales' (I, 31)",
            year: 2023,
            serie: 'Generale',
            matiere: 'HLP',
            type: 'interpretation litteraire',
            corrige: {
                introduction: "Presenter l'auteur : Michel de MONTAIGNE (1533-1592), humaniste de la Renaissance, inventeur du genre de l'essai. 'Des Cannibales' (Essais, livre I, chapitre 31) : Montaigne rencontre des Indiens du Bresil et renverse le regard — ce ne sont pas eux les 'barbares', mais NOUS. Annoncer les axes.",
                parties: [
                    {
                        titre: "I. Le renversement du regard : qui est le vrai barbare ?",
                        contenu: "Montaigne decrit les Tupinambas du Bresil, reputes 'cannibales.' Au lieu de les condamner, il les OBSERVE avec curiosite et respect. Il renverse le jugement : 'Chacun appelle barbarie ce qui n'est pas de son usage.' Les Europeens qui torturent et massacrent au nom de la religion sont-ils moins barbares que les cannibales ? Montaigne montre que le 'sauvage' n'est pas celui qu'on croit."
                    },
                    {
                        titre: "II. La critique de l'ethnocentrisme",
                        contenu: "L'ETHNOCENTRISME = juger les autres cultures a partir de la sienne, comme si la notre etait superieure. Montaigne le deconstruit : les Tupinambas ont des lois, une morale, une poesie, un courage. Leur societe est plus egale et plus proche de la nature que la notre. La 'civilisation' europeenne est pleine de cruaute, d'hypocrisie et d'injustice. Lien avec Levi-Strauss (XXe siecle) : 'Le barbare, c'est celui qui croit a la barbarie des autres.'"
                    },
                    {
                        titre: "III. L'humanisme de Montaigne : tous les hommes sont egaux",
                        contenu: "Montaigne applique le doute sceptique ('Que sais-je ?') : comment etre SUR que nos coutumes sont meilleures ? Il defend une vision UNIVERSALISTE de l'homme : derriere les differences culturelles, l'humanite est UNE. Ce texte est un des fondements de la pensee ANTICOLONIALE. Il annonce les Lumieres (Voltaire, Diderot) et la Declaration des droits de l'homme. Le style de Montaigne : personnel ('je'), digressif, conversationnel — il pense en ecrivant."
                    }
                ],
                conclusion: "'Des Cannibales' est un texte fondateur de la pensee critique. Montaigne montre que la barbarie n'est pas la ou on croit, que le regard sur l'Autre revele nos propres prejuges. Ce texte est d'une actualite frappante : il invite a la TOLERANCE et a la remise en question de soi. Ouverture : a l'heure de la mondialisation, savons-nous mieux regarder l'Autre qu'au XVIe siecle ?",
                conseils: [
                    "CITER Montaigne : 'Chacun appelle barbarie ce qui n'est pas de son usage' — la phrase cle a connaitre.",
                    "Definir 'ethnocentrisme' et montrer comment Montaigne le deconstruit AVANT que le mot n'existe.",
                    "Faire le lien avec le programme HLP : 'La recherche de soi' passe par la rencontre de l'Autre.",
                    "Le style de Montaigne (personnel, digressif) est un CHOIX philosophique : penser librement, sans dogme."
                ]
            }
        }
    ];

    // ==================== FONCTIONS ====================

    function init() {
        // Initialisation du module annales
        // Peut etre etendu pour charger des donnees supplementaires
    }

    function getAll() {
        return SUJETS.slice();
    }

    function getByMatiere(matiere) {
        var result = [];
        for (var i = 0; i < SUJETS.length; i++) {
            if (SUJETS[i].matiere === matiere) {
                result.push(SUJETS[i]);
            }
        }
        return result;
    }

    function getByYear(year) {
        var result = [];
        for (var i = 0; i < SUJETS.length; i++) {
            if (SUJETS[i].year === year) {
                result.push(SUJETS[i]);
            }
        }
        return result;
    }

    function getMatieres() {
        var seen = {};
        var matieres = [];
        for (var i = 0; i < SUJETS.length; i++) {
            var m = SUJETS[i].matiere;
            if (!seen[m]) {
                seen[m] = true;
                matieres.push(m);
            }
        }
        return matieres;
    }

    function getYears() {
        var seen = {};
        var years = [];
        for (var i = 0; i < SUJETS.length; i++) {
            var y = SUJETS[i].year;
            if (!seen[y]) {
                seen[y] = true;
                years.push(y);
            }
        }
        years.sort(function(a, b) { return b - a; });
        return years;
    }

    // ==================== UI ====================
    var currentFilter = { matiere: 'all', year: 'all' };
    var expandedId = null;

    function show() {
        window.StudFlow.app.showScreen('annales');
        renderList();
    }

    function renderList() {
        var container = document.getElementById('annales-content');
        if (!container) return;

        var matieres = getMatieres();
        var years = getYears();

        // Filters
        var html = '<div style="padding:16px;">'
            + '<div style="text-align:center;margin-bottom:16px;">'
            + '<div style="font-size:2rem;margin-bottom:6px;">📜</div>'
            + '<h2 style="color:var(--text);font-size:1.2rem;margin:0 0 4px;">Annales du Bac</h2>'
            + '<p style="color:var(--text-muted);font-size:0.8rem;">' + SUJETS.length + ' sujets reels avec corriges</p>'
            + '</div>'
            + '<div class="annales-filters">'
            + '<select id="annales-filter-matiere" data-action="annales.filter">'
            + '<option value="all">Toutes les matieres</option>';
        for (var i = 0; i < matieres.length; i++) {
            var sel = currentFilter.matiere === matieres[i] ? ' selected' : '';
            html += '<option value="' + matieres[i] + '"' + sel + '>' + matieres[i] + '</option>';
        }
        html += '</select>'
            + '<select id="annales-filter-year" data-action="annales.filter">'
            + '<option value="all">Toutes les annees</option>';
        for (var j = 0; j < years.length; j++) {
            var sel2 = currentFilter.year === String(years[j]) ? ' selected' : '';
            html += '<option value="' + years[j] + '"' + sel2 + '>' + years[j] + '</option>';
        }
        html += '</select></div>';

        // Filtered subjects
        var sujets = getAll();
        if (currentFilter.matiere !== 'all') {
            sujets = sujets.filter(function(s) { return s.matiere === currentFilter.matiere; });
        }
        if (currentFilter.year !== 'all') {
            sujets = sujets.filter(function(s) { return String(s.year) === currentFilter.year; });
        }

        if (sujets.length === 0) {
            html += '<p style="text-align:center;color:var(--text-muted);padding:20px;">Aucun sujet trouve.</p>';
        }

        for (var k = 0; k < sujets.length; k++) {
            var s = sujets[k];
            var isExpanded = expandedId === s.id;
            html += '<div class="annale-card" data-action="annales.toggle" data-param="' + s.id + '">'
                + '<div class="annale-year">' + s.year + ' · ' + s.serie + ' · ' + s.type + '</div>'
                + '<div class="annale-title">' + s.title + '</div>'
                + '<div class="annale-meta">' + s.matiere + '</div>'
                + '</div>';
            if (isExpanded) {
                html += renderCorrige(s);
            }
        }

        html += '</div>';
        container.innerHTML = html;
    }

    function renderCorrige(sujet) {
        var c = sujet.corrige;
        if (!c) return '';

        var html = '<div class="annale-corrige">'
            + '<h4>Introduction</h4>'
            + '<p>' + c.introduction + '</p>';

        if (c.parties) {
            for (var i = 0; i < c.parties.length; i++) {
                var p = c.parties[i];
                html += '<h4>' + p.titre + '</h4>'
                    + '<p>' + p.contenu + '</p>';
            }
        }

        html += '<h4>Conclusion</h4>'
            + '<p>' + c.conclusion + '</p>';

        if (c.conseils && c.conseils.length > 0) {
            html += '<div class="annale-conseils">'
                + '<h4 style="margin-top:0;">Conseils</h4><ul>';
            for (var j = 0; j < c.conseils.length; j++) {
                html += '<li>' + c.conseils[j] + '</li>';
            }
            html += '</ul></div>';
        }

        html += '</div>';
        return html;
    }

    function toggle(id) {
        expandedId = expandedId === id ? null : id;
        renderList();
    }

    function filter() {
        var matEl = document.getElementById('annales-filter-matiere');
        var yearEl = document.getElementById('annales-filter-year');
        currentFilter.matiere = matEl ? matEl.value : 'all';
        currentFilter.year = yearEl ? yearEl.value : 'all';
        expandedId = null;
        renderList();
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.annales = {
        init: init,
        show: show,
        getAll: getAll,
        getByMatiere: getByMatiere,
        getByYear: getByYear,
        getMatieres: getMatieres,
        getYears: getYears,
        toggle: toggle,
        filter: filter
    };

})();
