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
