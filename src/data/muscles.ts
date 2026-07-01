import type { Muscle } from "@/lib/types";

/**
 * Base de donnees des muscles.
 * Les machines/exercices sont classes du meilleur au moins prioritaire.
 * Sources listees dans le README (ACSM, NSCA, Schoenfeld et al., StrongLifts, ExRx).
 */
export const MUSCLES: Muscle[] = [
  // ------------------------------------------------------------------ PECTORAUX
  {
    id: "pectoraux",
    view: "front",
    name: { fr: "Pectoraux", en: "Chest" },
    scientificName: { fr: "Grand pectoral / petit pectoral", en: "Pectoralis major / minor" },
    tagline: {
      fr: "Le muscle de la poussee horizontale.",
      en: "The horizontal-push muscle.",
    },
    description: {
      fr: "Le grand pectoral est un large muscle en eventail qui couvre l'avant de la cage thoracique. Il possede un faisceau superieur (claviculaire) et un faisceau inferieur (sterno-costal). Il assure l'adduction et la rotation interne du bras : c'est le principal moteur de tous les mouvements de poussee horizontale (developpes, pompes, ecartes).",
      en: "The pectoralis major is a broad fan-shaped muscle covering the front of the rib cage. It has an upper (clavicular) head and a lower (sternocostal) head. It performs adduction and internal rotation of the arm: it is the main driver of every horizontal pushing movement (presses, push-ups, flyes).",
    },
    functions: {
      fr: [
        "Adduction du bras (ramener le bras vers la ligne mediane du corps)",
        "Flexion de l'epaule (faisceau claviculaire, developpe incline)",
        "Rotation interne de l'humerus",
      ],
      en: [
        "Arm adduction (bringing the arm toward the midline)",
        "Shoulder flexion (clavicular head, incline press)",
        "Internal rotation of the humerus",
      ],
    },
    trainingTips: {
      fr: [
        "Travaille sous plusieurs angles : incline pour le haut des pecs, plat pour le milieu, decline pour le bas.",
        "Cherche l'etirement en bas du mouvement, c'est la ou le muscle se developpe le plus.",
        "Garde les omoplates serrees et basses pour proteger l'epaule et cibler les pecs.",
      ],
      en: [
        "Train several angles: incline for the upper chest, flat for the middle, decline for the lower chest.",
        "Seek a deep stretch at the bottom of the movement, where growth is greatest.",
        "Keep your shoulder blades retracted and depressed to protect the shoulder and target the chest.",
      ],
    },
    commonMistakes: {
      fr: [
        "Ecarter les coudes a 90 degres : agresse l'epaule. Vise plutot 45-60 degres.",
        "Rebondir la barre sur la poitrine et arreter le mouvement trop haut.",
        "Negliger le haut des pecs (peu de travail incline).",
      ],
      en: [
        "Flaring elbows to 90 degrees: stresses the shoulder. Aim for 45-60 degrees.",
        "Bouncing the bar off the chest and cutting the range of motion short.",
        "Neglecting the upper chest (too little incline work).",
      ],
    },
    volumeAdvice: {
      fr: "10 a 20 series par semaine reparties sur 2 seances. 2 exercices de poussee + 1 d'isolation suffisent.",
      en: "10 to 20 sets per week across 2 sessions. 2 pressing exercises + 1 isolation exercise is plenty.",
    },
    machines: [
      {
        id: "developpe-couche-halteres",
        name: { fr: "Developpe couche aux halteres", en: "Dumbbell bench press" },
        type: { fr: "Poids libres", en: "Free weights" },
        level: "intermediaire",
        repRange: { fr: "8-12 reps", en: "8-12 reps" },
        whyRanked: {
          fr: "Numero 1 pour la plupart des pratiquants : amplitude superieure a la barre, chaque bras travaille independamment (corrige les desequilibres), et l'epaule est plus libre donc plus sure. Excellent compromis charge/securite.",
          en: "No.1 for most lifters: greater range of motion than the barbell, each arm works independently (fixes imbalances), and the shoulder moves more freely, so it is safer. An excellent load/safety trade-off.",
        },
        pros: {
          fr: [
            "Grande amplitude et fort etirement des pecs",
            "Corrige les desequilibres droite/gauche",
            "Plus doux pour les epaules que la barre",
          ],
          en: [
            "Large range of motion and strong chest stretch",
            "Fixes left/right imbalances",
            "Gentler on the shoulders than the barbell",
          ],
        },
        cons: {
          fr: [
            "Mise en place des halteres lourds delicate",
            "Moins de charge maximale que la barre",
            "Demande de la stabilite (coordination)",
          ],
          en: [
            "Getting heavy dumbbells into position is tricky",
            "Less maximal load than the barbell",
            "Requires stability (coordination)",
          ],
        },
        tips: {
          fr: [
            "Descends jusqu'a sentir l'etirement, coudes a ~45 degres du corps.",
            "Rentre les halteres en les posant sur les cuisses puis en basculant en arriere.",
          ],
          en: [
            "Lower until you feel the stretch, elbows ~45 degrees from the body.",
            "Get the dumbbells up by resting them on your thighs then rocking back.",
          ],
        },
      },
      {
        id: "developpe-couche-barre",
        name: { fr: "Developpe couche a la barre", en: "Barbell bench press" },
        type: { fr: "Poids libres", en: "Free weights" },
        level: "intermediaire",
        repRange: { fr: "5-10 reps", en: "5-10 reps" },
        whyRanked: {
          fr: "Le roi de la force pectorale : permet de charger le plus lourd et de progresser en surcharge progressive. Classe 2eme car l'amplitude est limitee par la barre et il stresse davantage l'epaule si la technique est mauvaise.",
          en: "The king of chest strength: lets you load the heaviest and progress via overload. Ranked 2nd because the bar limits range of motion and stresses the shoulder more if technique is poor.",
        },
        pros: {
          fr: [
            "Charge maximale la plus elevee",
            "Excellent pour la force et la progression chiffree",
            "Mouvement de reference, facile a suivre",
          ],
          en: [
            "Highest maximal load",
            "Excellent for strength and measurable progress",
            "A reference lift, easy to track",
          ],
        },
        cons: {
          fr: [
            "Amplitude limitee par la barre sur la poitrine",
            "Necessite un pareur (spotter) lourd",
            "Plus a risque pour l'epaule si mal execute",
          ],
          en: [
            "Range of motion limited by the bar on the chest",
            "Needs a spotter when heavy",
            "Higher shoulder risk if performed poorly",
          ],
        },
        tips: {
          fr: [
            "Serre les omoplates, garde une legere cambrure et les pieds ancres.",
            "Descends la barre au niveau du bas des pecs, pas sur la gorge.",
          ],
          en: [
            "Retract your shoulder blades, keep a slight arch and plant your feet.",
            "Lower the bar to your lower chest, not toward your throat.",
          ],
        },
      },
      {
        id: "developpe-incline-machine",
        name: { fr: "Developpe incline a la machine", en: "Incline machine press" },
        type: { fr: "Machine guidee", en: "Guided machine" },
        level: "debutant",
        repRange: { fr: "10-15 reps", en: "10-15 reps" },
        whyRanked: {
          fr: "Le meilleur choix pour debuter et cibler le haut des pecs en securite : trajectoire guidee, pas besoin de pareur, facile a charger lourd sans risque. Ideal pour finir la seance en fatigue.",
          en: "The best choice for beginners and for safely targeting the upper chest: guided path, no spotter needed, easy to load heavy safely. Ideal to finish a session when fatigued.",
        },
        pros: {
          fr: [
            "Tres sur, aucune coordination requise",
            "Cible efficacement le haut des pecs",
            "Parfait pour l'echec musculaire en fin de seance",
          ],
          en: [
            "Very safe, no coordination required",
            "Efficiently targets the upper chest",
            "Perfect for training to failure at the end of a session",
          ],
        },
        cons: {
          fr: [
            "Trajectoire imposee, moins de muscles stabilisateurs",
            "Reglage du siege important selon la morphologie",
          ],
          en: [
            "Fixed path, fewer stabilizer muscles involved",
            "Seat setup matters depending on your body",
          ],
        },
        tips: {
          fr: [
            "Regle le siege pour que les poignees soient au niveau du haut des pecs.",
            "Ne verrouille pas les coudes en fin de mouvement pour garder la tension.",
          ],
          en: [
            "Set the seat so the handles line up with your upper chest.",
            "Do not lock out your elbows to keep tension on the muscle.",
          ],
        },
      },
      {
        id: "ecarte-poulie",
        name: { fr: "Ecarte a la poulie (pec deck)", en: "Cable / pec-deck fly" },
        type: { fr: "Poulie / machine", en: "Cable / machine" },
        level: "debutant",
        repRange: { fr: "12-20 reps", en: "12-20 reps" },
        whyRanked: {
          fr: "Exercice d'isolation classe 4eme : il ne remplace pas un developpe pour la masse, mais c'est le meilleur pour l'etirement, la tension continue et la connexion muscle-esprit. Parfait en finisher.",
          en: "An isolation exercise ranked 4th: it does not replace a press for mass, but it is the best for stretch, constant tension and mind-muscle connection. Perfect as a finisher.",
        },
        pros: {
          fr: [
            "Tension continue sur toute l'amplitude (poulie)",
            "Isole les pecs sans solliciter les triceps",
            "Excellent etirement et congestion",
          ],
          en: [
            "Constant tension through the full range (cable)",
            "Isolates the chest without involving the triceps",
            "Excellent stretch and pump",
          ],
        },
        cons: {
          fr: [
            "Charge legere : pas ideal pour la force pure",
            "Peut stresser l'epaule si on va trop loin en etirement",
          ],
          en: [
            "Light load: not ideal for pure strength",
            "Can stress the shoulder if you overstretch",
          ],
        },
        tips: {
          fr: [
            "Garde une legere flexion des coudes constante, imagine enlacer un arbre.",
            "Ralentis la phase negative (2-3 secondes).",
          ],
          en: [
            "Keep a constant slight elbow bend, imagine hugging a tree.",
            "Slow down the negative phase (2-3 seconds).",
          ],
        },
      },
    ],
  },

  // ------------------------------------------------------------------ DELTOIDES
  {
    id: "deltoides",
    view: "front",
    name: { fr: "Epaules (deltoides)", en: "Shoulders (deltoids)" },
    scientificName: { fr: "Deltoide anterieur, lateral, posterieur", en: "Anterior, lateral, posterior deltoid" },
    tagline: { fr: "Les 3 faisceaux qui donnent la largeur.", en: "The 3 heads that build width." },
    description: {
      fr: "Le deltoide enveloppe l'epaule en trois faisceaux : anterieur (avant, pousse), lateral (cote, largeur), posterieur (arriere, tirage). Des epaules larges creent l'illusion d'une taille fine et d'un physique en V. Le faisceau lateral est le plus important pour la largeur et souvent le plus neglige.",
      en: "The deltoid wraps the shoulder in three heads: anterior (front, pressing), lateral (side, width), posterior (rear, pulling). Wide shoulders create the illusion of a small waist and a V-taper. The lateral head matters most for width and is often the most neglected.",
    },
    functions: {
      fr: [
        "Anterieur : flexion et rotation interne du bras (pousser vers l'avant/haut)",
        "Lateral : abduction (lever le bras sur le cote)",
        "Posterieur : extension et rotation externe (tirer vers l'arriere)",
      ],
      en: [
        "Anterior: flexion and internal rotation (pressing forward/up)",
        "Lateral: abduction (raising the arm to the side)",
        "Posterior: extension and external rotation (pulling back)",
      ],
    },
    trainingTips: {
      fr: [
        "Priorise le faisceau lateral (elevations laterales) pour la largeur.",
        "Le deltoide anterieur est deja tres sollicite par le travail des pecs : pas besoin d'en faire trop.",
        "Le posterieur est souvent faible : entraine-le avec le dos.",
      ],
      en: [
        "Prioritize the lateral head (lateral raises) for width.",
        "The anterior head already gets a lot of work from chest training: no need to overdo it.",
        "The rear head is often weak: train it with your back.",
      ],
    },
    commonMistakes: {
      fr: [
        "Elevations laterales trop lourdes avec elan des trapezes.",
        "Ne travailler que les developpes (deltoide anterieur) et negliger lateral/posterieur.",
        "Monter les bras au-dessus de l'horizontale sur les elevations (le trapeze prend le relais).",
      ],
      en: [
        "Lateral raises too heavy with trapezius momentum.",
        "Only doing presses (anterior) and neglecting lateral/rear heads.",
        "Raising the arms above horizontal on raises (the traps take over).",
      ],
    },
    volumeAdvice: {
      fr: "Deltoides lateraux et posterieurs : 8-16 series/semaine. L'anterieur : 4-8 series suffisent (deja travaille aux pecs).",
      en: "Lateral and rear delts: 8-16 sets/week. Anterior: 4-8 sets is enough (already worked by chest).",
    },
    machines: [
      {
        id: "elevations-laterales-halteres",
        name: { fr: "Elevations laterales aux halteres", en: "Dumbbell lateral raises" },
        type: { fr: "Poids libres", en: "Free weights" },
        level: "debutant",
        repRange: { fr: "12-20 reps", en: "12-20 reps" },
        whyRanked: {
          fr: "Numero 1 pour la largeur d'epaules : c'est le seul exercice qui isole vraiment le faisceau lateral, celui qui donne l'aspect large. Aucun developpe ne le remplace.",
          en: "No.1 for shoulder width: the only exercise that truly isolates the lateral head, the one that creates width. No press replaces it.",
        },
        pros: {
          fr: [
            "Isole parfaitement le deltoide lateral",
            "Faible risque de blessure",
            "Ideal pour un fort volume",
          ],
          en: [
            "Perfectly isolates the lateral deltoid",
            "Low injury risk",
            "Ideal for high volume",
          ],
        },
        cons: {
          fr: [
            "Facile a tricher avec l'elan",
            "Charge legere, ego a laisser au vestiaire",
          ],
          en: [
            "Easy to cheat with momentum",
            "Light load, leave the ego at the door",
          ],
        },
        tips: {
          fr: [
            "Monte les coudes, pas les mains ; imagine verser une bouteille.",
            "Controle la descente, ne redescends pas en chute libre.",
          ],
          en: [
            "Lead with your elbows, not your hands; imagine pouring a bottle.",
            "Control the descent, do not let the weights drop.",
          ],
        },
      },
      {
        id: "developpe-militaire",
        name: { fr: "Developpe militaire (barre/halteres)", en: "Overhead press (barbell/dumbbell)" },
        type: { fr: "Poids libres", en: "Free weights" },
        level: "intermediaire",
        repRange: { fr: "6-12 reps", en: "6-12 reps" },
        whyRanked: {
          fr: "Le meilleur pour la force et la masse globale de l'epaule (surtout anterieur). Classe 2eme car il cible surtout l'anterieur, deja travaille par les pecs.",
          en: "The best for overall shoulder strength and mass (mainly anterior). Ranked 2nd because it mostly targets the anterior head, already worked by chest.",
        },
        pros: {
          fr: [
            "Exercice polyarticulaire lourd, tres efficace",
            "Renforce la stabilite du tronc",
            "Excellent pour la force fonctionnelle",
          ],
          en: [
            "Heavy compound lift, very effective",
            "Builds core stability",
            "Excellent for functional strength",
          ],
        },
        cons: {
          fr: [
            "Exigeant pour la mobilite d'epaule",
            "Cible peu le faisceau lateral",
          ],
          en: [
            "Demanding on shoulder mobility",
            "Little emphasis on the lateral head",
          ],
        },
        tips: {
          fr: [
            "Gaine les abdos et les fessiers, ne cambre pas trop le bas du dos.",
            "Barre au niveau du menton en bas, verrouillage franc en haut.",
          ],
          en: [
            "Brace your abs and glutes, avoid over-arching your lower back.",
            "Bar to chin level at the bottom, full lockout at the top.",
          ],
        },
      },
      {
        id: "oiseau-poulie",
        name: { fr: "Oiseau a la poulie (rear delt)", en: "Reverse fly / cable rear delt" },
        type: { fr: "Poulie / machine", en: "Cable / machine" },
        level: "debutant",
        repRange: { fr: "12-20 reps", en: "12-20 reps" },
        whyRanked: {
          fr: "Indispensable pour le deltoide posterieur, souvent faible et cle pour une bonne posture et des epaules 3D. Classe 3eme car c'est un complement, pas un mouvement de force.",
          en: "Essential for the rear delt, often weak and key for good posture and 3D shoulders. Ranked 3rd as an accessory, not a strength move.",
        },
        pros: {
          fr: [
            "Cible le posterieur souvent neglige",
            "Ameliore la posture et l'equilibre epaule",
            "Tension continue a la poulie",
          ],
          en: [
            "Targets the often-neglected rear head",
            "Improves posture and shoulder balance",
            "Constant tension on the cable",
          ],
        },
        cons: {
          fr: [
            "Muscle difficile a sentir au debut",
            "Charge legere obligatoire",
          ],
          en: [
            "Hard muscle to feel at first",
            "Must stay light",
          ],
        },
        tips: {
          fr: [
            "Garde les bras quasi tendus, ecarte vers l'arriere sans serrer les omoplates a fond.",
            "Concentre-toi sur l'arriere de l'epaule, pas le dos.",
          ],
          en: [
            "Keep arms nearly straight, open back without fully squeezing the shoulder blades.",
            "Focus on the back of the shoulder, not the back muscles.",
          ],
        },
      },
    ],
  },

  // ------------------------------------------------------------------ BICEPS
  {
    id: "biceps",
    view: "front",
    name: { fr: "Biceps", en: "Biceps" },
    scientificName: { fr: "Biceps brachial, brachial anterieur", en: "Biceps brachii, brachialis" },
    tagline: { fr: "Le muscle vitrine du bras.", en: "The showpiece of the arm." },
    description: {
      fr: "Le biceps brachial possede deux chefs (court et long) et flechit le coude tout en supinant l'avant-bras (tourner la paume vers le haut). Le brachial, situe dessous, pousse le biceps vers le haut et augmente le volume du bras. Un bras epais vient autant du brachial et des triceps que du biceps lui-meme.",
      en: "The biceps brachii has two heads (short and long) and flexes the elbow while supinating the forearm (turning the palm up). The brachialis, underneath, pushes the biceps up and adds arm size. A thick arm comes as much from the brachialis and triceps as from the biceps itself.",
    },
    functions: {
      fr: [
        "Flexion du coude (rapprocher l'avant-bras du bras)",
        "Supination de l'avant-bras (tourner la paume vers le haut)",
        "Participation a la flexion de l'epaule (chef long)",
      ],
      en: [
        "Elbow flexion (bringing the forearm toward the upper arm)",
        "Forearm supination (turning the palm up)",
        "Assists shoulder flexion (long head)",
      ],
    },
    trainingTips: {
      fr: [
        "Varie les prises : supination (biceps), marteau (brachial), pour un bras complet.",
        "Le biceps recupere vite : il supporte un volume eleve et une frequence 2x/semaine.",
        "Ne balance pas le corps : garde les coudes fixes le long du buste.",
      ],
      en: [
        "Vary grips: supinated (biceps), hammer (brachialis), for a complete arm.",
        "The biceps recovers fast: it tolerates high volume and 2x/week frequency.",
        "Do not swing your body: keep your elbows pinned to your sides.",
      ],
    },
    commonMistakes: {
      fr: [
        "Utiliser trop lourd et balancer le dos (le biceps ne travaille plus).",
        "Amplitude partielle : ne pas tendre le bras en bas.",
        "Negliger le brachial et les prises marteau.",
      ],
      en: [
        "Going too heavy and swinging the back (the biceps stops working).",
        "Partial range: not extending the arm at the bottom.",
        "Neglecting the brachialis and hammer grips.",
      ],
    },
    volumeAdvice: {
      fr: "8-16 series/semaine. Souvent, le tirage du dos couvre deja une partie du travail : 2-3 exercices d'isolation suffisent.",
      en: "8-16 sets/week. Back rows already cover part of the work: 2-3 isolation exercises are enough.",
    },
    machines: [
      {
        id: "curl-incline-halteres",
        name: { fr: "Curl incline aux halteres", en: "Incline dumbbell curl" },
        type: { fr: "Poids libres", en: "Free weights" },
        level: "intermediaire",
        repRange: { fr: "8-12 reps", en: "8-12 reps" },
        whyRanked: {
          fr: "Numero 1 car le bras part en arriere du corps, ce qui etire au maximum le chef long du biceps (le plus visible). L'etirement sous tension est un puissant stimulus de croissance.",
          en: "No.1 because the arm hangs behind the body, maximally stretching the long head (the most visible one). Stretch under tension is a powerful growth stimulus.",
        },
        pros: {
          fr: [
            "Etirement maximal du chef long",
            "Impossible de tricher avec l'elan",
            "Excellent developpement du pic du biceps",
          ],
          en: [
            "Maximal stretch of the long head",
            "Impossible to cheat with momentum",
            "Great development of the biceps peak",
          ],
        },
        cons: {
          fr: [
            "Position inconfortable pour l'epaule chez certains",
            "Charge plus legere que le curl debout",
          ],
          en: [
            "Uncomfortable shoulder position for some",
            "Lighter load than a standing curl",
          ],
        },
        tips: {
          fr: [
            "Dossier a ~60 degres, laisse les bras pendre a la verticale.",
            "Ne bouge pas les coudes vers l'avant en montant.",
          ],
          en: [
            "Bench at ~60 degrees, let the arms hang vertically.",
            "Do not let your elbows drift forward as you curl.",
          ],
        },
      },
      {
        id: "curl-barre",
        name: { fr: "Curl a la barre (EZ)", en: "Barbell / EZ-bar curl" },
        type: { fr: "Poids libres", en: "Free weights" },
        level: "debutant",
        repRange: { fr: "8-12 reps", en: "8-12 reps" },
        whyRanked: {
          fr: "Le meilleur pour charger lourd et progresser en force sur le biceps. La barre EZ menage les poignets. Classe 2eme car l'etirement est moindre qu'en incline.",
          en: "The best for loading heavy and building biceps strength. The EZ bar spares the wrists. Ranked 2nd because the stretch is less than the incline curl.",
        },
        pros: {
          fr: [
            "Charge la plus lourde possible en isolation",
            "Progression facile a suivre",
            "Barre EZ confortable pour les poignets",
          ],
          en: [
            "Heaviest possible isolation load",
            "Easy progress tracking",
            "EZ bar is wrist-friendly",
          ],
        },
        cons: {
          fr: [
            "Tentation de balancer le dos",
            "Amplitude un peu limitee en haut (tension qui chute)",
          ],
          en: [
            "Temptation to swing the back",
            "Slightly limited tension at the top",
          ],
        },
        tips: {
          fr: [
            "Colle les coudes au buste et ne les avance pas.",
            "Si tu dois balancer, la charge est trop lourde.",
          ],
          en: [
            "Keep elbows glued to your sides and do not push them forward.",
            "If you have to swing, the weight is too heavy.",
          ],
        },
      },
      {
        id: "curl-marteau",
        name: { fr: "Curl marteau", en: "Hammer curl" },
        type: { fr: "Poids libres / poulie", en: "Free weights / cable" },
        level: "debutant",
        repRange: { fr: "10-15 reps", en: "10-15 reps" },
        whyRanked: {
          fr: "Indispensable pour le brachial et le long supinateur (avant-bras), qui donnent l'epaisseur au bras. Classe 3eme car complementaire : il faut d'abord un travail en supination.",
          en: "Essential for the brachialis and brachioradialis (forearm), which add arm thickness. Ranked 3rd as a complement: supinated work comes first.",
        },
        pros: {
          fr: [
            "Developpe le brachial (epaisseur du bras)",
            "Renforce l'avant-bras et la poigne",
            "Prise neutre douce pour les poignets",
          ],
          en: [
            "Develops the brachialis (arm thickness)",
            "Strengthens the forearm and grip",
            "Neutral grip is wrist-friendly",
          ],
        },
        cons: {
          fr: [
            "Cible moins le pic du biceps",
            "Progres visuel plus lent car muscle profond",
          ],
          en: [
            "Less emphasis on the biceps peak",
            "Slower visible progress since it is a deep muscle",
          ],
        },
        tips: {
          fr: [
            "Paumes face a face tout le long du mouvement.",
            "A la poulie avec corde pour une tension constante.",
          ],
          en: [
            "Palms facing each other throughout the movement.",
            "Use a cable with a rope for constant tension.",
          ],
        },
      },
    ],
  },

  // ------------------------------------------------------------------ AVANT-BRAS
  {
    id: "avant-bras",
    view: "front",
    name: { fr: "Avant-bras", en: "Forearms" },
    scientificName: { fr: "Flechisseurs / extenseurs, brachio-radial", en: "Flexors / extensors, brachioradialis" },
    tagline: { fr: "La poigne et le detail final.", en: "Grip and the finishing detail." },
    description: {
      fr: "Les avant-bras regroupent de nombreux petits muscles flechisseurs (cote paume) et extenseurs (cote dos de la main), plus le brachio-radial. Ils determinent la force de poigne, cle pour tous les tirages et le soulevé de terre. Des avant-bras solides evitent que la prise ne limite les autres exercices.",
      en: "The forearms group many small flexor (palm side) and extensor (back-of-hand side) muscles, plus the brachioradialis. They determine grip strength, key for all pulls and the deadlift. Strong forearms keep your grip from limiting other lifts.",
    },
    functions: {
      fr: [
        "Flexion et extension du poignet",
        "Force de prise (fermer la main sur une charge)",
        "Stabilisation du poignet dans tous les tirages",
      ],
      en: [
        "Wrist flexion and extension",
        "Grip strength (closing the hand on a load)",
        "Wrist stabilization in all pulls",
      ],
    },
    trainingTips: {
      fr: [
        "Beaucoup de travail se fait deja via les tirages et le deadlift ; ajoute de l'isolation si c'est un point faible.",
        "Entraine flechisseurs ET extenseurs pour equilibrer le poignet.",
        "Les avant-bras tolerent une frequence elevee (3x/semaine).",
      ],
      en: [
        "Much work already comes from rows and deadlifts; add isolation if it is a weak point.",
        "Train BOTH flexors and extensors to balance the wrist.",
        "Forearms tolerate high frequency (3x/week).",
      ],
    },
    commonMistakes: {
      fr: [
        "Utiliser des sangles tout le temps : la poigne ne progresse jamais.",
        "Amplitude minuscule sur les curls de poignet.",
        "Oublier les extenseurs (cote dos de la main).",
      ],
      en: [
        "Always using straps: grip never improves.",
        "Tiny range of motion on wrist curls.",
        "Forgetting the extensors (back-of-hand side).",
      ],
    },
    volumeAdvice: {
      fr: "4-10 series directes/semaine si point faible. Sinon, les tirages suffisent souvent.",
      en: "4-10 direct sets/week if it is a weak point. Otherwise, pulls are often enough.",
    },
    machines: [
      {
        id: "curl-poignet",
        name: { fr: "Curl de poignet (barre/halteres)", en: "Wrist curl (barbell/dumbbell)" },
        type: { fr: "Poids libres", en: "Free weights" },
        level: "debutant",
        repRange: { fr: "12-20 reps", en: "12-20 reps" },
        whyRanked: {
          fr: "Numero 1 pour l'isolation directe des flechisseurs (la masse de l'avant-bras). Simple, efficace, chargeable. Meilleur rapport resultat/effort pour grossir l'avant-bras.",
          en: "No.1 for direct isolation of the flexors (the bulk of the forearm). Simple, effective, loadable. Best result/effort ratio for forearm size.",
        },
        pros: {
          fr: ["Isole directement les flechisseurs", "Facile a charger", "Amplitude complete possible"],
          en: ["Directly isolates the flexors", "Easy to load", "Full range of motion possible"],
        },
        cons: {
          fr: ["Ne travaille pas les extenseurs", "Peut irriter le poignet si trop lourd"],
          en: ["Does not work the extensors", "Can irritate the wrist if too heavy"],
        },
        tips: {
          fr: [
            "Avant-bras poses sur le banc, seuls les poignets depassent.",
            "Laisse la barre rouler jusqu'au bout des doigts en bas.",
          ],
          en: [
            "Forearms on the bench, only the wrists hang off.",
            "Let the bar roll to your fingertips at the bottom.",
          ],
        },
      },
      {
        id: "farmer-walk",
        name: { fr: "Farmer walk (marche du fermier)", en: "Farmer's walk" },
        type: { fr: "Poids libres", en: "Free weights" },
        level: "debutant",
        repRange: { fr: "20-40 m", en: "20-40 m" },
        whyRanked: {
          fr: "Le meilleur pour la force de poigne fonctionnelle et le gainage. Classe 2eme car il travaille la poigne en isometrie plus que la taille du muscle, mais c'est ultra transferable.",
          en: "The best for functional grip strength and core bracing. Ranked 2nd because it trains grip isometrically more than muscle size, but it transfers extremely well.",
        },
        pros: {
          fr: ["Poigne, trapezes et gainage en meme temps", "Tres fonctionnel", "Simple : on porte et on marche"],
          en: ["Grip, traps and core at once", "Very functional", "Simple: carry and walk"],
        },
        cons: {
          fr: ["Peu de gain de volume pur", "Besoin d'espace pour marcher"],
          en: ["Little pure size gain", "Needs space to walk"],
        },
        tips: {
          fr: ["Buste droit, epaules basses.", "Prends lourd, marche controlee."],
          en: ["Chest up, shoulders down.", "Go heavy, walk under control."],
        },
      },
      {
        id: "extension-poignet",
        name: { fr: "Extension de poignet inversee", en: "Reverse wrist curl" },
        type: { fr: "Poids libres", en: "Free weights" },
        level: "debutant",
        repRange: { fr: "15-20 reps", en: "15-20 reps" },
        whyRanked: {
          fr: "Classe 3eme mais important pour l'equilibre : renforce les extenseurs, previent les tendinites (epicondylite) frequentes chez ceux qui tirent beaucoup.",
          en: "Ranked 3rd but important for balance: strengthens the extensors, preventing the tendinitis (tennis elbow) common in people who pull a lot.",
        },
        pros: {
          fr: ["Prevention des tendinites du coude", "Equilibre flechisseurs/extenseurs"],
          en: ["Prevents elbow tendinitis", "Balances flexors/extensors"],
        },
        cons: {
          fr: ["Charge tres legere", "Peu spectaculaire visuellement"],
          en: ["Very light load", "Not visually spectacular"],
        },
        tips: {
          fr: ["Paumes vers le sol, monte le dos de la main.", "Mouvement lent et controle."],
          en: ["Palms down, lift the back of the hand.", "Slow, controlled movement."],
        },
      },
    ],
  },

  // ------------------------------------------------------------------ ABDOMINAUX
  {
    id: "abdominaux",
    view: "front",
    name: { fr: "Abdominaux", en: "Abs" },
    scientificName: { fr: "Grand droit, transverse", en: "Rectus abdominis, transversus" },
    tagline: { fr: "Le centre de force et les tablettes.", en: "The core and the six-pack." },
    description: {
      fr: "Le grand droit de l'abdomen (les fameuses tablettes) flechit le tronc, tandis que le transverse, muscle profond, gaine et stabilise la colonne. Un ventre visible depend surtout d'un faible taux de gras : on peut avoir des abdos forts sans les voir. Le gainage protege le dos sur tous les gros exercices.",
      en: "The rectus abdominis (the six-pack) flexes the trunk, while the transversus, a deep muscle, braces and stabilizes the spine. A visible stomach depends mostly on low body fat: you can have strong abs without seeing them. Core bracing protects your back on every big lift.",
    },
    functions: {
      fr: [
        "Flexion du tronc (rapprocher le sternum du bassin)",
        "Gainage / stabilisation de la colonne (transverse)",
        "Anti-extension et anti-rotation du tronc",
      ],
      en: [
        "Trunk flexion (bringing the sternum toward the pelvis)",
        "Bracing / spine stabilization (transversus)",
        "Anti-extension and anti-rotation of the trunk",
      ],
    },
    trainingTips: {
      fr: [
        "Les abdos se voient en cuisine : la definition vient du deficit calorique.",
        "Ajoute de la charge (crunch a la poulie) : les abdos sont un muscle comme un autre.",
        "Travaille aussi le gainage anti-mouvement (planche, roue).",
      ],
      en: [
        "Abs are made in the kitchen: definition comes from a calorie deficit.",
        "Add load (cable crunch): abs are a muscle like any other.",
        "Also train anti-movement bracing (plank, ab wheel).",
      ],
    },
    commonMistakes: {
      fr: [
        "Croire que les abdos font perdre le gras du ventre (faux, pas de perte localisee).",
        "Tirer sur la nuque pendant les crunchs.",
        "Faire uniquement des reps au poids de corps sans jamais charger.",
      ],
      en: [
        "Believing ab work burns belly fat (false, no spot reduction).",
        "Pulling on the neck during crunches.",
        "Only doing bodyweight reps without ever adding load.",
      ],
    },
    volumeAdvice: {
      fr: "8-16 series/semaine, 2-3 seances. Melange flexion (crunch charge) et anti-mouvement (planche).",
      en: "8-16 sets/week, 2-3 sessions. Mix flexion (loaded crunch) and anti-movement (plank).",
    },
    machines: [
      {
        id: "crunch-poulie",
        name: { fr: "Crunch a la poulie (a genoux)", en: "Cable crunch (kneeling)" },
        type: { fr: "Poulie", en: "Cable" },
        level: "debutant",
        repRange: { fr: "12-20 reps", en: "12-20 reps" },
        whyRanked: {
          fr: "Numero 1 car c'est le seul moyen facile de charger progressivement les abdos avec une tension continue. La surcharge progressive fait grossir les abdos comme n'importe quel muscle.",
          en: "No.1 because it is the easiest way to progressively load the abs with constant tension. Progressive overload grows abs like any other muscle.",
        },
        pros: {
          fr: ["Surcharge progressive facile", "Tension continue", "Mouvement de flexion pure des abdos"],
          en: ["Easy progressive overload", "Constant tension", "Pure ab-flexion movement"],
        },
        cons: {
          fr: ["Necessite une poulie libre", "Technique a maitriser (ne pas tirer avec les bras)"],
          en: ["Needs a free cable station", "Technique to master (do not pull with the arms)"],
        },
        tips: {
          fr: [
            "Enroule le dos en rapprochant les coudes des cuisses, ne bouge pas les hanches.",
            "Garde les bras fixes, ce sont les abdos qui tirent.",
          ],
          en: [
            "Round your back bringing elbows toward thighs, do not move the hips.",
            "Keep arms fixed; the abs do the pulling.",
          ],
        },
      },
      {
        id: "releve-jambes-suspendu",
        name: { fr: "Releve de jambes suspendu", en: "Hanging leg raise" },
        type: { fr: "Poids de corps", en: "Bodyweight" },
        level: "intermediaire",
        repRange: { fr: "8-15 reps", en: "8-15 reps" },
        whyRanked: {
          fr: "Excellent pour le bas des abdos et la poigne. Classe 2eme car exigeant : il faut deja un bon niveau pour bien le sentir sans balancer.",
          en: "Excellent for the lower abs and grip. Ranked 2nd because it is demanding: you need a decent level to feel it without swinging.",
        },
        pros: {
          fr: ["Cible le bas des abdos", "Renforce la poigne", "Grande amplitude"],
          en: ["Targets the lower abs", "Builds grip", "Large range of motion"],
        },
        cons: {
          fr: ["Difficile pour les debutants", "Facile a tricher en balancant"],
          en: ["Hard for beginners", "Easy to cheat by swinging"],
        },
        tips: {
          fr: ["Enroule le bassin vers le haut, ne te contente pas de lever les jambes.", "Controle la descente."],
          en: ["Curl the pelvis up, do not just lift the legs.", "Control the descent."],
        },
      },
      {
        id: "planche",
        name: { fr: "Gainage (planche)", en: "Plank" },
        type: { fr: "Poids de corps", en: "Bodyweight" },
        level: "debutant",
        repRange: { fr: "20-60 s", en: "20-60 s" },
        whyRanked: {
          fr: "Classe 3eme : parfait pour apprendre le gainage et proteger le dos, mais moins efficace pour l'hypertrophie une fois qu'on tient longtemps. Ideal debutant.",
          en: "Ranked 3rd: perfect to learn bracing and protect the back, but less effective for hypertrophy once you can hold it long. Ideal for beginners.",
        },
        pros: {
          fr: ["Aucun materiel", "Renforce le gainage profond", "Sans risque"],
          en: ["No equipment", "Builds deep bracing", "No risk"],
        },
        cons: {
          fr: ["Peu d'hypertrophie une fois maitrise", "Devient trop facile : ajoute de la charge sur le dos"],
          en: ["Little hypertrophy once mastered", "Gets too easy: add weight on the back"],
        },
        tips: {
          fr: ["Corps en ligne, fessiers serres, ne creuse pas le dos.", "Respire, ne bloque pas ta respiration."],
          en: ["Body in a straight line, glutes tight, do not sag.", "Breathe, do not hold your breath."],
        },
      },
    ],
  },

  // ------------------------------------------------------------------ OBLIQUES
  {
    id: "obliques",
    view: "front",
    name: { fr: "Obliques", en: "Obliques" },
    scientificName: { fr: "Obliques externe et interne", en: "External and internal obliques" },
    tagline: { fr: "Les cotes du tronc, rotation et stabilite.", en: "The sides of the core, rotation and stability." },
    description: {
      fr: "Les obliques sont sur les cotes de l'abdomen. Ils permettent la rotation et l'inclinaison laterale du tronc, et participent au gainage anti-rotation. Attention : un travail lourd en rotation peut epaissir la taille ; pour une taille fine, privilegie l'anti-rotation et le controle.",
      en: "The obliques run along the sides of the abdomen. They allow trunk rotation and lateral flexion, and assist in anti-rotation bracing. Note: heavy rotational work can thicken the waist; for a slim waist, favor anti-rotation and control.",
    },
    functions: {
      fr: [
        "Rotation du tronc (tourner le buste)",
        "Inclinaison laterale (pencher sur le cote)",
        "Anti-rotation : resister a une force qui veut faire tourner le tronc",
      ],
      en: [
        "Trunk rotation (twisting the torso)",
        "Lateral flexion (leaning to the side)",
        "Anti-rotation: resisting a force trying to rotate the trunk",
      ],
    },
    trainingTips: {
      fr: [
        "Le Pallof press (anti-rotation) est plus sain que les rotations lestees a repetition.",
        "Evite les flexions laterales tres lourdes si tu veux garder une taille fine.",
        "Les obliques travaillent deja sur squat, deadlift et farmer walk.",
      ],
      en: [
        "The Pallof press (anti-rotation) is healthier than repeated loaded twists.",
        "Avoid very heavy side bends if you want a slim waist.",
        "Obliques already work in squats, deadlifts and farmer's walks.",
      ],
    },
    commonMistakes: {
      fr: [
        "Rotations russes ultra lourdes et rapides : risque pour le bas du dos.",
        "Negliger l'anti-rotation, pourtant la fonction la plus utile.",
      ],
      en: [
        "Very heavy, fast Russian twists: risk for the lower back.",
        "Neglecting anti-rotation, yet the most useful function.",
      ],
    },
    volumeAdvice: {
      fr: "4-10 series/semaine, souvent integrees au travail d'abdos et de gainage.",
      en: "4-10 sets/week, often folded into ab and core work.",
    },
    machines: [
      {
        id: "pallof-press",
        name: { fr: "Pallof press a la poulie", en: "Cable Pallof press" },
        type: { fr: "Poulie", en: "Cable" },
        level: "debutant",
        repRange: { fr: "10-15 reps/cote", en: "10-15 reps/side" },
        whyRanked: {
          fr: "Numero 1 : entraine l'anti-rotation, la fonction reelle et protectrice des obliques, sans risque pour le dos et sans epaissir la taille. Tres transferable.",
          en: "No.1: trains anti-rotation, the real protective function of the obliques, with no back risk and without thickening the waist. Highly transferable.",
        },
        pros: {
          fr: ["Renforce le gainage anti-rotation", "Doux pour le dos", "Ne grossit pas la taille"],
          en: ["Builds anti-rotation core strength", "Back-friendly", "Does not thicken the waist"],
        },
        cons: {
          fr: ["Peu spectaculaire", "Necessite une poulie"],
          en: ["Not spectacular", "Needs a cable"],
        },
        tips: {
          fr: ["Bras tendus devant, resiste a la rotation sans bouger le buste.", "Gaine fort tout le long."],
          en: ["Arms straight out front, resist the rotation without moving the torso.", "Brace hard throughout."],
        },
      },
      {
        id: "rotation-poulie",
        name: { fr: "Rotation a la poulie (wood chop)", en: "Cable woodchopper" },
        type: { fr: "Poulie", en: "Cable" },
        level: "intermediaire",
        repRange: { fr: "12-15 reps/cote", en: "12-15 reps/side" },
        whyRanked: {
          fr: "Classe 2eme : bon pour la rotation dynamique et sportive, tension continue a la poulie. Un cran derriere le Pallof car plus technique et plus a risque si trop lourd.",
          en: "Ranked 2nd: good for dynamic, athletic rotation with constant cable tension. Behind the Pallof because it is more technical and riskier if heavy.",
        },
        pros: {
          fr: ["Rotation fonctionnelle et sportive", "Tension continue", "Travaille les obliques dans leur role dynamique"],
          en: ["Functional, athletic rotation", "Constant tension", "Works obliques in their dynamic role"],
        },
        cons: {
          fr: ["Technique a soigner", "Risque pour le dos si trop lourd/rapide"],
          en: ["Technique-sensitive", "Back risk if too heavy/fast"],
        },
        tips: {
          fr: ["Pivote depuis les hanches, garde les bras quasi tendus.", "Controle, pas d'a-coups."],
          en: ["Rotate from the hips, keep arms nearly straight.", "Control it, no jerking."],
        },
      },
      {
        id: "side-plank",
        name: { fr: "Gainage lateral (side plank)", en: "Side plank" },
        type: { fr: "Poids de corps", en: "Bodyweight" },
        level: "debutant",
        repRange: { fr: "20-45 s/cote", en: "20-45 s/side" },
        whyRanked: {
          fr: "Classe 3eme : excellent debutant pour l'inclinaison laterale et la stabilite, sans materiel ni risque. Devient facile : releve alors les hanches par repetitions.",
          en: "Ranked 3rd: excellent beginner move for lateral stability, no equipment or risk. Gets easy: then add hip raises for reps.",
        },
        pros: {
          fr: ["Aucun materiel", "Renforce la stabilite laterale", "Sans risque"],
          en: ["No equipment", "Builds lateral stability", "No risk"],
        },
        cons: {
          fr: ["Peu de charge", "Devient vite trop facile"],
          en: ["Little load", "Quickly becomes too easy"],
        },
        tips: {
          fr: ["Corps aligne, hanches hautes.", "Progresse en levant/baissant la hanche."],
          en: ["Body aligned, hips high.", "Progress by raising/lowering the hip."],
        },
      },
    ],
  },

  // ------------------------------------------------------------------ QUADRICEPS
  {
    id: "quadriceps",
    view: "front",
    name: { fr: "Quadriceps", en: "Quadriceps" },
    scientificName: { fr: "Droit femoral, vastes (interne, externe, intermediaire)", en: "Rectus femoris, vasti (medialis, lateralis, intermedius)" },
    tagline: { fr: "L'avant des cuisses, moteur de l'extension.", en: "The front of the thighs, the extension engine." },
    description: {
      fr: "Le quadriceps est un groupe de quatre muscles a l'avant de la cuisse. Il etend le genou et le droit femoral participe a la flexion de hanche. C'est un des plus gros muscles du corps : le travailler booste la force globale, le metabolisme et l'equilibre du bas du corps avec les ischios.",
      en: "The quadriceps is a four-muscle group on the front of the thigh. It extends the knee, and the rectus femoris assists hip flexion. It is one of the largest muscles in the body: training it boosts overall strength, metabolism and lower-body balance with the hamstrings.",
    },
    functions: {
      fr: [
        "Extension du genou (tendre la jambe)",
        "Flexion de la hanche (droit femoral)",
        "Stabilisation du genou et absorption des chocs",
      ],
      en: [
        "Knee extension (straightening the leg)",
        "Hip flexion (rectus femoris)",
        "Knee stabilization and shock absorption",
      ],
    },
    trainingTips: {
      fr: [
        "Le squat profond recrute plus de fibres : descends au moins jusqu'a la cuisse parallele si ta mobilite le permet.",
        "Une position de pieds plus etroite et un buste droit accentuent les quadriceps.",
        "Equilibre toujours avec du travail d'ischios et de fessiers.",
      ],
      en: [
        "A deep squat recruits more fibers: go at least to parallel if your mobility allows.",
        "A narrower stance and an upright torso emphasize the quads.",
        "Always balance with hamstring and glute work.",
      ],
    },
    commonMistakes: {
      fr: [
        "Demi-squats systematiques par ego (amplitude trop courte).",
        "Genoux qui rentrent vers l'interieur sous la charge.",
        "Negliger completement les jambes (skip leg day).",
      ],
      en: [
        "Constant ego half-squats (too short a range).",
        "Knees caving inward under load.",
        "Skipping leg day entirely.",
      ],
    },
    volumeAdvice: {
      fr: "8-16 series/semaine sur 2 seances. Un exercice lourd (squat/presse) + un d'isolation (leg extension).",
      en: "8-16 sets/week over 2 sessions. One heavy lift (squat/press) + one isolation (leg extension).",
    },
    machines: [
      {
        id: "squat-barre",
        name: { fr: "Squat a la barre", en: "Barbell squat" },
        type: { fr: "Poids libres", en: "Free weights" },
        level: "intermediaire",
        repRange: { fr: "5-10 reps", en: "5-10 reps" },
        whyRanked: {
          fr: "Le roi des exercices de jambes : recrute quadriceps, fessiers, ischios et gainage, permet une charge enorme et libere des hormones anabolisantes. Classe 1er pour son transfert et sa progression.",
          en: "The king of leg exercises: recruits quads, glutes, hamstrings and core, allows huge loads and drives an anabolic response. Ranked 1st for transfer and progression.",
        },
        pros: {
          fr: ["Recrute enormement de muscle", "Charge et progression maximales", "Tres fonctionnel"],
          en: ["Recruits a huge amount of muscle", "Maximal load and progression", "Very functional"],
        },
        cons: {
          fr: ["Technique exigeante", "Demande de la mobilite cheville/hanche", "Fatigue generale elevee"],
          en: ["Technically demanding", "Requires ankle/hip mobility", "High systemic fatigue"],
        },
        tips: {
          fr: ["Barre sur les trapezes, descends hanches en arriere, genoux dans l'axe des pieds.", "Gaine fort avant chaque rep."],
          en: ["Bar on the traps, sit the hips back, knees tracking over the feet.", "Brace hard before every rep."],
        },
      },
      {
        id: "presse-jambes",
        name: { fr: "Presse a cuisses", en: "Leg press" },
        type: { fr: "Machine guidee", en: "Guided machine" },
        level: "debutant",
        repRange: { fr: "10-15 reps", en: "10-15 reps" },
        whyRanked: {
          fr: "Le meilleur pour charger lourd les quadriceps sans risque et sans limitation par le gainage. Classe 2eme, ideal debutant et parfait pour ajouter du volume sans fatiguer le dos.",
          en: "The best for loading the quads heavy safely, without being limited by the core. Ranked 2nd, ideal for beginners and perfect for adding volume without taxing the back.",
        },
        pros: {
          fr: ["Tres sur, dos soutenu", "Permet de charger lourd", "Facile a apprendre"],
          en: ["Very safe, back supported", "Allows heavy loading", "Easy to learn"],
        },
        cons: {
          fr: ["Moins fonctionnel que le squat", "Risque de trop charger et d'arrondir le bas du dos en bas"],
          en: ["Less functional than the squat", "Risk of overloading and rounding the lower back at the bottom"],
        },
        tips: {
          fr: ["Ne decolle jamais les fesses du siege en bas.", "Pieds bas et serres pour cibler les quadriceps."],
          en: ["Never let your hips lift off the seat at the bottom.", "Feet low and narrow to target the quads."],
        },
      },
      {
        id: "leg-extension",
        name: { fr: "Leg extension", en: "Leg extension" },
        type: { fr: "Machine guidee", en: "Guided machine" },
        level: "debutant",
        repRange: { fr: "12-20 reps", en: "12-20 reps" },
        whyRanked: {
          fr: "Meilleure isolation pure du quadriceps (surtout le droit femoral). Classe 3eme : complement d'un exercice lourd, parfait en finisher et pour la connexion muscle-esprit.",
          en: "The best pure quad isolation (especially the rectus femoris). Ranked 3rd: an accessory to a heavy lift, perfect as a finisher and for mind-muscle connection.",
        },
        pros: {
          fr: ["Isole le quadriceps", "Facile a pousser a l'echec sans risque", "Excellent finisher"],
          en: ["Isolates the quad", "Easy to push to failure safely", "Great finisher"],
        },
        cons: {
          fr: ["Non fonctionnel (articulation isolee)", "Peut gener les genoux sensibles si trop lourd"],
          en: ["Non-functional (single joint)", "Can bother sensitive knees if too heavy"],
        },
        tips: {
          fr: ["Marque une pause en haut, contraction maximale.", "Controle la descente."],
          en: ["Pause at the top, squeeze hard.", "Control the descent."],
        },
      },
      {
        id: "fentes",
        name: { fr: "Fentes (halteres)", en: "Lunges (dumbbell)" },
        type: { fr: "Poids libres", en: "Free weights" },
        level: "intermediaire",
        repRange: { fr: "10-12 reps/jambe", en: "10-12 reps/leg" },
        whyRanked: {
          fr: "Classe 4eme : excellent pour l'equilibre, la symetrie droite/gauche et les fessiers, mais plus fatigant a organiser et limite par l'equilibre. Un superbe complement unilateral.",
          en: "Ranked 4th: excellent for balance, left/right symmetry and glutes, but more tiring to set up and limited by balance. A superb unilateral accessory.",
        },
        pros: {
          fr: ["Corrige les desequilibres", "Travaille l'equilibre et les fessiers", "Tres fonctionnel"],
          en: ["Fixes imbalances", "Trains balance and glutes", "Very functional"],
        },
        cons: {
          fr: ["Equilibre limitant", "Charge plus legere", "Genou sensible chez certains"],
          en: ["Balance is limiting", "Lighter load", "Knee-sensitive for some"],
        },
        tips: {
          fr: ["Grand pas, genou arriere vers le sol, buste droit.", "Pousse dans le talon avant."],
          en: ["Big step, rear knee toward the floor, chest up.", "Drive through the front heel."],
        },
      },
    ],
  },

  // ------------------------------------------------------------------ ADDUCTEURS
  {
    id: "adducteurs",
    view: "front",
    name: { fr: "Adducteurs (interieur cuisse)", en: "Adductors (inner thigh)" },
    scientificName: { fr: "Groupe des adducteurs, gracile", en: "Adductor group, gracilis" },
    tagline: { fr: "L'interieur de la cuisse, souvent oublie.", en: "The inner thigh, often forgotten." },
    description: {
      fr: "Les adducteurs sont sur la face interne de la cuisse. Ils ramenent la jambe vers l'axe du corps et stabilisent le bassin, notamment en squat profond. Des adducteurs forts protegent de la classique blessure a l'aine et ameliorent la stabilite en squat et dans les sports de changement de direction.",
      en: "The adductors sit on the inner thigh. They bring the leg toward the body's midline and stabilize the pelvis, especially in a deep squat. Strong adductors protect against the classic groin injury and improve squat stability and change-of-direction sports.",
    },
    functions: {
      fr: [
        "Adduction de la hanche (ramener la cuisse vers l'interieur)",
        "Stabilisation du bassin en squat et en fente",
        "Participation a la flexion/extension de hanche",
      ],
      en: [
        "Hip adduction (bringing the thigh inward)",
        "Pelvic stabilization in squats and lunges",
        "Assists hip flexion/extension",
      ],
    },
    trainingTips: {
      fr: [
        "Le squat large et les fentes travaillent deja beaucoup les adducteurs.",
        "Ajoute de l'isolation si l'aine est un point faible ou pour la prevention.",
        "Amplitude complete : cherche l'etirement a l'ouverture.",
      ],
      en: [
        "Wide squats and lunges already work the adductors a lot.",
        "Add isolation if the groin is a weak point or for prevention.",
        "Full range: seek the stretch in the open position.",
      ],
    },
    commonMistakes: {
      fr: [
        "Ne jamais les travailler (desequilibre avec les quadriceps).",
        "Amplitude minuscule a la machine adducteur.",
      ],
      en: [
        "Never training them (imbalance with the quads).",
        "Tiny range of motion on the adductor machine.",
      ],
    },
    volumeAdvice: {
      fr: "4-8 series/semaine en isolation suffisent pour la plupart ; plus si prevention/sport.",
      en: "4-8 isolation sets/week is enough for most; more for prevention/sport.",
    },
    machines: [
      {
        id: "machine-adducteurs",
        name: { fr: "Machine adducteurs", en: "Adductor machine" },
        type: { fr: "Machine guidee", en: "Guided machine" },
        level: "debutant",
        repRange: { fr: "12-20 reps", en: "12-20 reps" },
        whyRanked: {
          fr: "Numero 1 : le moyen le plus simple et sur d'isoler et de charger les adducteurs avec une amplitude complete. Ideal pour un point faible ou la prevention de l'aine.",
          en: "No.1: the simplest, safest way to isolate and load the adductors through a full range. Ideal for a weak point or groin prevention.",
        },
        pros: {
          fr: ["Isolation directe", "Amplitude reglable", "Tres sur"],
          en: ["Direct isolation", "Adjustable range", "Very safe"],
        },
        cons: {
          fr: ["Peu fonctionnel", "Image parfois moquee en salle (a tort)"],
          en: ["Not very functional", "Sometimes mocked in the gym (wrongly)"],
        },
        tips: {
          fr: ["Ouvre bien pour etirer, puis serre en controle.", "Ne claque pas les plaques."],
          en: ["Open wide to stretch, then squeeze under control.", "Do not slam the plates."],
        },
      },
      {
        id: "squat-sumo",
        name: { fr: "Squat sumo / goblet large", en: "Sumo / wide goblet squat" },
        type: { fr: "Poids libres", en: "Free weights" },
        level: "intermediaire",
        repRange: { fr: "8-15 reps", en: "8-15 reps" },
        whyRanked: {
          fr: "Classe 2eme : recrute fortement adducteurs et fessiers dans un mouvement fonctionnel et chargeable, tout en travaillant les jambes globalement.",
          en: "Ranked 2nd: strongly recruits adductors and glutes in a functional, loadable movement while training the legs overall.",
        },
        pros: {
          fr: ["Fonctionnel et chargeable", "Travaille adducteurs + fessiers + quadriceps", "Bon transfert"],
          en: ["Functional and loadable", "Works adductors + glutes + quads", "Good transfer"],
        },
        cons: {
          fr: ["Demande de la mobilite de hanche", "Moins d'isolation ciblee"],
          en: ["Requires hip mobility", "Less targeted isolation"],
        },
        tips: {
          fr: ["Pointes de pieds vers l'exterieur, genoux dans l'axe.", "Descends bien pour etirer l'interieur de cuisse."],
          en: ["Toes pointed out, knees tracking over them.", "Go deep to stretch the inner thigh."],
        },
      },
    ],
  },

  // ------------------------------------------------------------------ TRAPEZES
  {
    id: "trapezes",
    view: "back",
    name: { fr: "Trapezes", en: "Trapezius" },
    scientificName: { fr: "Trapeze superieur, moyen, inferieur", en: "Upper, middle, lower trapezius" },
    tagline: { fr: "Le haut du dos, puissance et posture.", en: "The upper back, power and posture." },
    description: {
      fr: "Le trapeze est un grand muscle en losange qui va du cou au milieu du dos. Le faisceau superieur hausse les epaules (shrugs), le moyen et l'inferieur retractent et abaissent les omoplates, essentiels pour la posture et la sante de l'epaule. Des trapezes developpes donnent une allure massive et protegent le cou.",
      en: "The trapezius is a large diamond-shaped muscle from the neck to the mid-back. The upper fibers elevate the shoulders (shrugs); the middle and lower fibers retract and depress the shoulder blades, essential for posture and shoulder health. Developed traps look powerful and protect the neck.",
    },
    functions: {
      fr: [
        "Elevation des epaules (trapeze superieur)",
        "Retraction des omoplates (trapeze moyen)",
        "Abaissement/rotation des omoplates (trapeze inferieur)",
      ],
      en: [
        "Shoulder elevation (upper traps)",
        "Shoulder-blade retraction (middle traps)",
        "Shoulder-blade depression/rotation (lower traps)",
      ],
    },
    trainingTips: {
      fr: [
        "Le trapeze superieur adore le lourd (shrugs, deadlift) et un temps de contraction en haut.",
        "N'oublie pas le trapeze moyen/inferieur (rowing, face pull) pour la posture.",
        "Le soulevé de terre developpe deja beaucoup les trapezes.",
      ],
      en: [
        "The upper traps love heavy work (shrugs, deadlift) and a squeeze at the top.",
        "Do not forget the mid/lower traps (rows, face pulls) for posture.",
        "The deadlift already builds the traps a lot.",
      ],
    },
    commonMistakes: {
      fr: [
        "Rouler les epaules sur les shrugs (inutile et risque).",
        "Ne travailler que le trapeze superieur et negliger la posture.",
      ],
      en: [
        "Rolling the shoulders on shrugs (useless and risky).",
        "Only training the upper traps and neglecting posture.",
      ],
    },
    volumeAdvice: {
      fr: "Souvent couvert par dos + deadlift. 4-10 series directes/semaine si point faible.",
      en: "Often covered by back + deadlift work. 4-10 direct sets/week if a weak point.",
    },
    machines: [
      {
        id: "shrugs-halteres",
        name: { fr: "Shrugs aux halteres/barre", en: "Dumbbell/barbell shrugs" },
        type: { fr: "Poids libres", en: "Free weights" },
        level: "debutant",
        repRange: { fr: "10-15 reps", en: "10-15 reps" },
        whyRanked: {
          fr: "Numero 1 pour le trapeze superieur : mouvement simple, chargeable tres lourd, amplitude directe sur l'elevation des epaules. Le meilleur pour l'epaisseur du haut du dos.",
          en: "No.1 for the upper traps: simple, very loadable, direct range on shoulder elevation. The best for upper-back thickness.",
        },
        pros: {
          fr: ["Charge tres lourde possible", "Cible direct du trapeze superieur", "Simple a executer"],
          en: ["Can go very heavy", "Directly targets the upper traps", "Simple to perform"],
        },
        cons: {
          fr: ["Ne travaille pas le trapeze moyen/inferieur", "Amplitude courte"],
          en: ["Does not work the mid/lower traps", "Short range of motion"],
        },
        tips: {
          fr: ["Monte les epaules droit vers les oreilles, pause en haut.", "Ne roule pas les epaules."],
          en: ["Raise shoulders straight toward the ears, pause at the top.", "Do not roll the shoulders."],
        },
      },
      {
        id: "face-pull",
        name: { fr: "Face pull a la poulie", en: "Cable face pull" },
        type: { fr: "Poulie", en: "Cable" },
        level: "debutant",
        repRange: { fr: "15-20 reps", en: "15-20 reps" },
        whyRanked: {
          fr: "Classe 2eme mais essentiel pour la sante d'epaule : cible trapeze moyen/inferieur et deltoide posterieur, contrebalance tout le travail de poussee. A faire par presque tout le monde.",
          en: "Ranked 2nd but essential for shoulder health: targets the mid/lower traps and rear delt, counterbalancing all pressing work. Almost everyone should do it.",
        },
        pros: {
          fr: ["Ameliore la posture et la sante d'epaule", "Cible trapeze moyen/inferieur", "Faible risque"],
          en: ["Improves posture and shoulder health", "Targets mid/lower traps", "Low risk"],
        },
        cons: {
          fr: ["Charge legere", "Peu visible esthetiquement"],
          en: ["Light load", "Little aesthetic payoff"],
        },
        tips: {
          fr: ["Tire la corde vers le front, coudes hauts, ecarte a la fin.", "Serre les omoplates."],
          en: ["Pull the rope toward your forehead, elbows high, spread at the end.", "Squeeze the shoulder blades."],
        },
      },
    ],
  },

  // ------------------------------------------------------------------ GRAND DORSAL
  {
    id: "grand-dorsal",
    view: "back",
    name: { fr: "Dorsaux (grand dorsal)", en: "Lats (latissimus dorsi)" },
    scientificName: { fr: "Grand dorsal, grand rond", en: "Latissimus dorsi, teres major" },
    tagline: { fr: "La largeur du dos, le fameux V.", en: "Back width, the famous V-taper." },
    description: {
      fr: "Le grand dorsal est le plus grand muscle du haut du corps. Il tire le bras vers le bas et vers l'arriere (tractions, tirages) et donne la largeur du dos, creant la silhouette en V. C'est le muscle cle pour un dos impressionnant et une bonne force de tirage.",
      en: "The latissimus dorsi is the largest muscle of the upper body. It pulls the arm down and back (pull-ups, rows) and creates back width, forming the V-taper. It is the key muscle for an impressive back and strong pulling.",
    },
    functions: {
      fr: [
        "Adduction du bras (ramener le bras vers le corps par le cote)",
        "Extension de l'epaule (tirer le bras vers l'arriere)",
        "Rotation interne et stabilisation du tronc",
      ],
      en: [
        "Arm adduction (bringing the arm down toward the body)",
        "Shoulder extension (pulling the arm back)",
        "Internal rotation and trunk stabilization",
      ],
    },
    trainingTips: {
      fr: [
        "Combine tirage vertical (largeur) et tirage horizontal (epaisseur).",
        "Amorce le mouvement en abaissant les omoplates, ne tire pas qu'avec les bras.",
        "Cherche l'etirement en haut du tirage et la contraction en bas.",
      ],
      en: [
        "Combine vertical pulls (width) and horizontal pulls (thickness).",
        "Initiate by depressing the shoulder blades, do not pull with the arms only.",
        "Seek the stretch at the top of the pull and the squeeze at the bottom.",
      ],
    },
    commonMistakes: {
      fr: [
        "Tirer la barre derriere la nuque (risque epaule, inutile).",
        "Utiliser trop d'elan (kipping non controle) en tractions.",
        "Ne pas sentir le dos et tout faire avec les biceps.",
      ],
      en: [
        "Pulling the bar behind the neck (shoulder risk, useless).",
        "Using too much momentum (uncontrolled kipping) on pull-ups.",
        "Not feeling the back and doing everything with the biceps.",
      ],
    },
    volumeAdvice: {
      fr: "10-20 series/semaine sur 2 seances. Melange 1 vertical + 1 horizontal + 1 isolation.",
      en: "10-20 sets/week over 2 sessions. Mix 1 vertical + 1 horizontal + 1 isolation.",
    },
    machines: [
      {
        id: "tractions",
        name: { fr: "Tractions (pull-ups)", en: "Pull-ups" },
        type: { fr: "Poids de corps", en: "Bodyweight" },
        level: "intermediaire",
        repRange: { fr: "5-12 reps", en: "5-12 reps" },
        whyRanked: {
          fr: "Numero 1 pour la largeur : mouvement roi qui recrute massivement le grand dorsal avec une grande amplitude. Excellent transfert de force. Ajoute du lest quand ca devient facile.",
          en: "No.1 for width: the king movement that massively recruits the lats through a full range. Great strength transfer. Add weight when it gets easy.",
        },
        pros: {
          fr: ["Recrute massivement les dorsaux", "Grande amplitude", "Progression par lest"],
          en: ["Massively recruits the lats", "Large range of motion", "Progress by adding weight"],
        },
        cons: {
          fr: ["Difficile pour les debutants", "Necessite une barre / assistance"],
          en: ["Hard for beginners", "Needs a bar / assistance"],
        },
        tips: {
          fr: ["Abaisse les epaules avant de tirer, monte le menton au-dessus de la barre.", "Controle la descente complete."],
          en: ["Depress the shoulders before pulling, bring the chin over the bar.", "Control the full descent."],
        },
      },
      {
        id: "tirage-vertical",
        name: { fr: "Tirage vertical (lat pulldown)", en: "Lat pulldown" },
        type: { fr: "Poulie", en: "Cable" },
        level: "debutant",
        repRange: { fr: "8-15 reps", en: "8-15 reps" },
        whyRanked: {
          fr: "Le meilleur substitut aux tractions quand on ne les maitrise pas, et parfait pour ajouter du volume avec une charge reglable. Classe 2eme : legerement moins de transfert que les tractions libres.",
          en: "The best pull-up substitute when you cannot do them yet, and perfect for adding volume with adjustable load. Ranked 2nd: slightly less transfer than free pull-ups.",
        },
        pros: {
          fr: ["Charge reglable, ideal debutant", "Facile a pousser en volume", "Meme trajectoire que la traction"],
          en: ["Adjustable load, ideal for beginners", "Easy to add volume", "Same path as the pull-up"],
        },
        cons: {
          fr: ["Moins de gainage/transfert", "Tentation de tirer en arriere avec l'elan"],
          en: ["Less core/transfer", "Temptation to lean back with momentum"],
        },
        tips: {
          fr: ["Tire la barre vers le haut de la poitrine, coudes vers le bas.", "Ne balance pas le buste."],
          en: ["Pull the bar to the upper chest, elbows down.", "Do not swing the torso."],
        },
      },
      {
        id: "rowing-halteres",
        name: { fr: "Rowing a un bras (halteres)", en: "One-arm dumbbell row" },
        type: { fr: "Poids libres", en: "Free weights" },
        level: "debutant",
        repRange: { fr: "8-12 reps", en: "8-12 reps" },
        whyRanked: {
          fr: "Le meilleur tirage horizontal pour l'epaisseur du dos et corriger les desequilibres. Classe 3eme car complementaire au vertical : les deux sont necessaires.",
          en: "The best horizontal pull for back thickness and fixing imbalances. Ranked 3rd as a complement to the vertical pull: both are needed.",
        },
        pros: {
          fr: ["Grande amplitude, un cote a la fois", "Corrige les desequilibres", "Dos soutenu, peu de risque"],
          en: ["Large range, one side at a time", "Fixes imbalances", "Back supported, low risk"],
        },
        cons: {
          fr: ["Prend du temps (un bras a la fois)", "Tentation de tourner le buste"],
          en: ["Time-consuming (one arm at a time)", "Temptation to rotate the torso"],
        },
        tips: {
          fr: ["Tire le coude vers la hanche, pas vers l'epaule.", "Garde le dos plat, ne tourne pas."],
          en: ["Pull the elbow toward the hip, not the shoulder.", "Keep the back flat, do not twist."],
        },
      },
      {
        id: "rowing-machine",
        name: { fr: "Tirage horizontal machine (seated row)", en: "Seated cable/machine row" },
        type: { fr: "Machine / poulie", en: "Machine / cable" },
        level: "debutant",
        repRange: { fr: "10-15 reps", en: "10-15 reps" },
        whyRanked: {
          fr: "Classe 4eme : tres bon pour l'epaisseur du dos avec une tension constante et un dos soutenu. Ideal debutant et pour finir en volume, un cran derriere le rowing haltere pour l'amplitude.",
          en: "Ranked 4th: very good for back thickness with constant tension and a supported back. Ideal for beginners and volume finishing, just behind the dumbbell row on range.",
        },
        pros: {
          fr: ["Tension constante", "Dos soutenu, tres sur", "Facile a apprendre"],
          en: ["Constant tension", "Back supported, very safe", "Easy to learn"],
        },
        cons: {
          fr: ["Trajectoire imposee", "Tentation de tirer avec le bas du dos"],
          en: ["Fixed path", "Temptation to pull with the lower back"],
        },
        tips: {
          fr: ["Buste quasi immobile, tire les coudes vers l'arriere.", "Serre les omoplates en fin de mouvement."],
          en: ["Torso nearly still, pull the elbows back.", "Squeeze the shoulder blades at the end."],
        },
      },
    ],
  },

  // ------------------------------------------------------------------ LOMBAIRES
  {
    id: "lombaires",
    view: "back",
    name: { fr: "Lombaires (bas du dos)", en: "Lower back" },
    scientificName: { fr: "Erecteurs du rachis", en: "Erector spinae" },
    tagline: { fr: "Le pilier de la colonne.", en: "The pillar of the spine." },
    description: {
      fr: "Les erecteurs du rachis courent le long de la colonne. Ils maintiennent le dos droit et resistent a la flexion sous charge : ils sont sollicites sur presque tous les gros exercices (squat, deadlift, rowing). Un bas du dos solide protege des blessures et ameliore toutes les performances.",
      en: "The erector spinae run along the spine. They keep the back upright and resist flexion under load: they work on almost every big lift (squat, deadlift, row). A strong lower back prevents injuries and improves all performance.",
    },
    functions: {
      fr: [
        "Extension de la colonne (redresser le dos)",
        "Maintien de la posture debout",
        "Resistance a la flexion sous charge (gainage du dos)",
      ],
      en: [
        "Spinal extension (straightening the back)",
        "Maintaining upright posture",
        "Resisting flexion under load (back bracing)",
      ],
    },
    trainingTips: {
      fr: [
        "Le soulevé de terre est le meilleur constructeur, mais exige une technique parfaite.",
        "Renforce progressivement : le bas du dos recupere lentement.",
        "Garde le dos neutre, ni trop creux ni arrondi, sous charge.",
      ],
      en: [
        "The deadlift is the best builder but demands perfect technique.",
        "Strengthen progressively: the lower back recovers slowly.",
        "Keep a neutral spine, neither over-arched nor rounded, under load.",
      ],
    },
    commonMistakes: {
      fr: [
        "Arrondir le bas du dos sous charge lourde (risque majeur).",
        "Trop de volume/frequence : le bas du dos recupere lentement.",
        "Hyperextension excessive en haut du mouvement.",
      ],
      en: [
        "Rounding the lower back under heavy load (major risk).",
        "Too much volume/frequency: the lower back recovers slowly.",
        "Over-extending at the top of the movement.",
      ],
    },
    volumeAdvice: {
      fr: "Souvent assez sollicite par squat/deadlift. 2-6 series directes/semaine suffisent.",
      en: "Often worked enough by squats/deadlifts. 2-6 direct sets/week is enough.",
    },
    machines: [
      {
        id: "souleve-de-terre",
        name: { fr: "Soulevé de terre", en: "Deadlift" },
        type: { fr: "Poids libres", en: "Free weights" },
        level: "avance",
        repRange: { fr: "3-8 reps", en: "3-8 reps" },
        whyRanked: {
          fr: "Numero 1 : le meilleur exercice global du corps, il renforce lombaires, fessiers, ischios, trapezes et poigne d'un coup. Classe 1er malgre sa technique exigeante car son transfert est inegale.",
          en: "No.1: the best full-body lift, it strengthens the lower back, glutes, hamstrings, traps and grip at once. Ranked 1st despite its demanding technique because its transfer is unmatched.",
        },
        pros: {
          fr: ["Renforce tout l'arriere du corps", "Charge maximale", "Transfert exceptionnel"],
          en: ["Strengthens the entire posterior chain", "Maximal load", "Exceptional transfer"],
        },
        cons: {
          fr: ["Technique exigeante", "Risque eleve si dos arrondi", "Fatigue nerveuse importante"],
          en: ["Demanding technique", "High risk if the back rounds", "Heavy neural fatigue"],
        },
        tips: {
          fr: ["Dos neutre, barre pres des tibias, pousse le sol avec les pieds.", "Verrouille hanches et genoux ensemble en haut."],
          en: ["Neutral back, bar close to the shins, push the floor away.", "Lock hips and knees together at the top."],
        },
      },
      {
        id: "hyperextensions",
        name: { fr: "Hyperextensions (banc a lombaires)", en: "Back extensions (hyperextension bench)" },
        type: { fr: "Poids de corps / leste", en: "Bodyweight / weighted" },
        level: "debutant",
        repRange: { fr: "10-15 reps", en: "10-15 reps" },
        whyRanked: {
          fr: "Classe 2eme : le meilleur pour isoler et renforcer le bas du dos et les fessiers en securite, sans la fatigue du deadlift. Ideal debutant et en complement.",
          en: "Ranked 2nd: the best for safely isolating and strengthening the lower back and glutes without the deadlift's fatigue. Ideal for beginners and as an accessory.",
        },
        pros: {
          fr: ["Isole les erecteurs sans fatigue globale", "Faible risque", "Facile a apprendre"],
          en: ["Isolates the erectors without systemic fatigue", "Low risk", "Easy to learn"],
        },
        cons: {
          fr: ["Charge limitee", "Hyperextension a eviter en haut"],
          en: ["Limited load", "Avoid hyperextending at the top"],
        },
        tips: {
          fr: ["Monte jusqu'a l'alignement du corps, pas plus.", "Ajoute un disque contre la poitrine pour progresser."],
          en: ["Rise until the body is aligned, no further.", "Hold a plate to your chest to progress."],
        },
      },
    ],
  },

  // ------------------------------------------------------------------ TRICEPS
  {
    id: "triceps",
    view: "back",
    name: { fr: "Triceps", en: "Triceps" },
    scientificName: { fr: "Triceps brachial (3 chefs)", en: "Triceps brachii (3 heads)" },
    tagline: { fr: "Les deux tiers du volume du bras.", en: "Two-thirds of the arm's size." },
    description: {
      fr: "Le triceps possede trois chefs (long, lateral, medial) et occupe l'arriere du bras. Il represente environ les deux tiers du volume du bras : pour de gros bras, il est plus important que le biceps. Il etend le coude et le chef long participe a l'extension de l'epaule.",
      en: "The triceps has three heads (long, lateral, medial) and occupies the back of the arm. It makes up about two-thirds of the arm's size: for big arms it matters more than the biceps. It extends the elbow, and the long head assists shoulder extension.",
    },
    functions: {
      fr: [
        "Extension du coude (tendre le bras)",
        "Extension de l'epaule (chef long)",
        "Stabilisation du coude dans les poussees",
      ],
      en: [
        "Elbow extension (straightening the arm)",
        "Shoulder extension (long head)",
        "Elbow stabilization in pressing",
      ],
    },
    trainingTips: {
      fr: [
        "Travaille le chef long avec des extensions au-dessus de la tete (bras leve = etirement).",
        "Les poussees (developpe, dips) construisent deja beaucoup de triceps.",
        "Varie les angles pour toucher les trois chefs.",
      ],
      en: [
        "Train the long head with overhead extensions (arm up = stretch).",
        "Presses (bench, dips) already build a lot of triceps.",
        "Vary angles to hit all three heads.",
      ],
    },
    commonMistakes: {
      fr: [
        "Bouger les coudes partout sur les extensions (instabilite).",
        "Ne jamais travailler le chef long (bras au-dessus de la tete).",
        "Charge trop lourde qui casse l'amplitude.",
      ],
      en: [
        "Elbows drifting everywhere on extensions (instability).",
        "Never training the long head (arm overhead).",
        "Too heavy, breaking the range of motion.",
      ],
    },
    volumeAdvice: {
      fr: "8-16 series/semaine. Le travail de pecs/epaules couvre deja une partie.",
      en: "8-16 sets/week. Chest/shoulder work already covers part of it.",
    },
    machines: [
      {
        id: "extension-poulie-triceps",
        name: { fr: "Extension a la poulie (corde/barre)", en: "Cable pushdown (rope/bar)" },
        type: { fr: "Poulie", en: "Cable" },
        level: "debutant",
        repRange: { fr: "10-15 reps", en: "10-15 reps" },
        whyRanked: {
          fr: "Numero 1 pour l'isolation : tension continue, facile a apprendre, coudes stables, ideal pour un fort volume sans risque. La base du developpement des triceps.",
          en: "No.1 for isolation: constant tension, easy to learn, stable elbows, ideal for high volume without risk. The foundation of triceps development.",
        },
        pros: {
          fr: ["Tension continue", "Tres sur, coudes stables", "Ideal pour le volume"],
          en: ["Constant tension", "Very safe, stable elbows", "Ideal for volume"],
        },
        cons: {
          fr: ["Cible moins le chef long (bras le long du corps)", "Facile a tricher avec le buste"],
          en: ["Less emphasis on the long head (arm by the side)", "Easy to cheat with the torso"],
        },
        tips: {
          fr: ["Colle les coudes au corps, ne bouge que l'avant-bras.", "Ecarte la corde en bas pour la contraction."],
          en: ["Pin the elbows to your sides, move only the forearm.", "Spread the rope at the bottom to squeeze."],
        },
      },
      {
        id: "extension-nuque",
        name: { fr: "Extension au-dessus de la tete (overhead)", en: "Overhead triceps extension" },
        type: { fr: "Halteres / poulie", en: "Dumbbell / cable" },
        level: "intermediaire",
        repRange: { fr: "10-15 reps", en: "10-15 reps" },
        whyRanked: {
          fr: "Classe 2eme car c'est le meilleur pour le chef long (bras leve = etirement maximal), le plus gros contributeur au volume du triceps. Complementaire des pushdowns.",
          en: "Ranked 2nd because it is the best for the long head (arm up = maximal stretch), the biggest contributor to triceps size. Complements pushdowns.",
        },
        pros: {
          fr: ["Etirement maximal du chef long", "Fort stimulus d'hypertrophie", "Amplitude complete"],
          en: ["Maximal stretch of the long head", "Strong hypertrophy stimulus", "Full range of motion"],
        },
        cons: {
          fr: ["Peut gener l'epaule/coude si trop lourd", "Position parfois inconfortable"],
          en: ["Can bother the shoulder/elbow if too heavy", "Sometimes uncomfortable position"],
        },
        tips: {
          fr: ["Descends derriere la tete jusqu'a l'etirement, coudes serres.", "Ne cambre pas le dos."],
          en: ["Lower behind the head into the stretch, elbows tucked.", "Do not arch the back."],
        },
      },
      {
        id: "dips",
        name: { fr: "Dips (barres paralleles)", en: "Dips (parallel bars)" },
        type: { fr: "Poids de corps", en: "Bodyweight" },
        level: "intermediaire",
        repRange: { fr: "6-12 reps", en: "6-12 reps" },
        whyRanked: {
          fr: "Classe 3eme : exercice poly lourd qui construit triceps ET pecs, avec progression par lest. Un cran derriere car plus exigeant pour l'epaule et technique.",
          en: "Ranked 3rd: a heavy compound that builds triceps AND chest, with weighted progression. Just behind because it is more shoulder-demanding and technical.",
        },
        pros: {
          fr: ["Exercice lourd et complet", "Progression par lest", "Travaille aussi les pecs"],
          en: ["Heavy, complete exercise", "Weighted progression", "Also works the chest"],
        },
        cons: {
          fr: ["Exigeant pour l'epaule si on descend trop", "Difficile pour les debutants"],
          en: ["Shoulder-demanding if you go too deep", "Hard for beginners"],
        },
        tips: {
          fr: ["Buste droit pour cibler les triceps, penche pour les pecs.", "Ne descends pas plus bas que le confort de l'epaule."],
          en: ["Upright torso for triceps, lean for chest.", "Do not go below your shoulder's comfort."],
        },
      },
    ],
  },

  // ------------------------------------------------------------------ FESSIERS
  {
    id: "fessiers",
    view: "back",
    name: { fr: "Fessiers", en: "Glutes" },
    scientificName: { fr: "Grand, moyen, petit fessier", en: "Gluteus maximus, medius, minimus" },
    tagline: { fr: "Le moteur le plus puissant du corps.", en: "The most powerful engine in the body." },
    description: {
      fr: "Les fessiers, avec le grand fessier en tete, sont parmi les muscles les plus puissants du corps. Ils etendent la hanche (se redresser, sauter, courir) et stabilisent le bassin. Des fessiers forts ameliorent squat, deadlift, sprint, et protegent le bas du dos et les genoux.",
      en: "The glutes, led by the gluteus maximus, are among the most powerful muscles in the body. They extend the hip (standing up, jumping, running) and stabilize the pelvis. Strong glutes improve the squat, deadlift, sprint, and protect the lower back and knees.",
    },
    functions: {
      fr: [
        "Extension de la hanche (pousser le bassin vers l'avant)",
        "Abduction et rotation de la hanche (moyen/petit fessier)",
        "Stabilisation du bassin en appui unipodal",
      ],
      en: [
        "Hip extension (driving the pelvis forward)",
        "Hip abduction and rotation (medius/minimus)",
        "Pelvic stabilization on a single leg",
      ],
    },
    trainingTips: {
      fr: [
        "Le hip thrust est imbattable pour l'extension de hanche chargee.",
        "Cherche une contraction volontaire forte en haut du mouvement.",
        "Ajoute du travail d'abduction (moyen fessier) pour la stabilite du bassin.",
      ],
      en: [
        "The hip thrust is unbeatable for loaded hip extension.",
        "Aim for a strong voluntary squeeze at the top.",
        "Add abduction work (gluteus medius) for pelvic stability.",
      ],
    },
    commonMistakes: {
      fr: [
        "Cambrer le bas du dos au lieu de contracter les fessiers en haut du hip thrust.",
        "Amplitude partielle sur les squats/hip thrusts.",
        "Tout faire avec les quadriceps sans jamais sentir les fessiers.",
      ],
      en: [
        "Arching the lower back instead of squeezing the glutes at the top of the hip thrust.",
        "Partial range on squats/hip thrusts.",
        "Doing everything with the quads without feeling the glutes.",
      ],
    },
    volumeAdvice: {
      fr: "8-16 series/semaine. 1 exercice d'extension de hanche lourd + 1 d'abduction/isolation.",
      en: "8-16 sets/week. One heavy hip-extension lift + one abduction/isolation exercise.",
    },
    machines: [
      {
        id: "hip-thrust",
        name: { fr: "Hip thrust a la barre", en: "Barbell hip thrust" },
        type: { fr: "Poids libres", en: "Free weights" },
        level: "debutant",
        repRange: { fr: "8-15 reps", en: "8-15 reps" },
        whyRanked: {
          fr: "Numero 1 : c'est l'exercice qui met le plus de tension sur les fessiers en position raccourcie, avec une charge elevee et un faible risque. Le meilleur pour la force et le volume des fessiers.",
          en: "No.1: the exercise that puts the most tension on the glutes in the shortened position, with heavy load and low risk. The best for glute strength and size.",
        },
        pros: {
          fr: ["Tension maximale sur les fessiers", "Chargeable lourd", "Faible risque pour le dos"],
          en: ["Maximal glute tension", "Heavily loadable", "Low back risk"],
        },
        cons: {
          fr: ["Mise en place un peu genante (barre sur le bassin)", "Besoin d'un banc et d'un coussin"],
          en: ["Slightly awkward setup (bar on the hips)", "Needs a bench and a pad"],
        },
        tips: {
          fr: ["Menton rentre, cotes basses, pousse dans les talons et serre en haut.", "Ne cambre pas le bas du dos."],
          en: ["Chin tucked, ribs down, drive through the heels and squeeze at the top.", "Do not arch the lower back."],
        },
      },
      {
        id: "hip-thrust-squat",
        name: { fr: "Squat / squat bulgare", en: "Squat / Bulgarian split squat" },
        type: { fr: "Poids libres", en: "Free weights" },
        level: "intermediaire",
        repRange: { fr: "8-12 reps", en: "8-12 reps" },
        whyRanked: {
          fr: "Classe 2eme : le squat profond et surtout le squat bulgare recrutent fortement les fessiers en etirement, un stimulus complementaire au hip thrust. Tres fonctionnel.",
          en: "Ranked 2nd: the deep squat and especially the Bulgarian split squat strongly recruit the glutes under stretch, a stimulus complementary to the hip thrust. Very functional.",
        },
        pros: {
          fr: ["Recrute les fessiers en etirement", "Tres fonctionnel", "Travaille aussi les quadriceps"],
          en: ["Recruits the glutes under stretch", "Very functional", "Also works the quads"],
        },
        cons: {
          fr: ["Equilibre limitant (bulgare)", "Technique et mobilite requises"],
          en: ["Balance is limiting (Bulgarian)", "Requires technique and mobility"],
        },
        tips: {
          fr: ["Descends profond, penche legerement le buste pour cibler les fessiers.", "Pousse dans le talon."],
          en: ["Go deep, lean the torso slightly to target the glutes.", "Drive through the heel."],
        },
      },
      {
        id: "abduction-machine",
        name: { fr: "Machine abduction (moyen fessier)", en: "Hip abduction machine" },
        type: { fr: "Machine guidee", en: "Guided machine" },
        level: "debutant",
        repRange: { fr: "15-20 reps", en: "15-20 reps" },
        whyRanked: {
          fr: "Classe 3eme : cible le moyen fessier (largeur et stabilite du bassin), souvent neglige. Complement d'isolation ideal en fin de seance.",
          en: "Ranked 3rd: targets the gluteus medius (hip width and pelvic stability), often neglected. An ideal isolation finisher.",
        },
        pros: {
          fr: ["Cible le moyen fessier (stabilite)", "Tres sur", "Excellent finisher"],
          en: ["Targets the gluteus medius (stability)", "Very safe", "Great finisher"],
        },
        cons: {
          fr: ["Isole une petite portion", "Peu de charge"],
          en: ["Isolates a small portion", "Little load"],
        },
        tips: {
          fr: ["Penche legerement le buste en avant pour mieux cibler.", "Controle la fermeture, ne claque pas."],
          en: ["Lean the torso slightly forward to target better.", "Control the return, do not slam."],
        },
      },
    ],
  },

  // ------------------------------------------------------------------ ISCHIOS
  {
    id: "ischio-jambiers",
    view: "back",
    name: { fr: "Ischio-jambiers", en: "Hamstrings" },
    scientificName: { fr: "Biceps femoral, semi-tendineux, semi-membraneux", en: "Biceps femoris, semitendinosus, semimembranosus" },
    tagline: { fr: "L'arriere des cuisses, sante et puissance.", en: "The back of the thighs, health and power." },
    description: {
      fr: "Les ischio-jambiers sont a l'arriere de la cuisse. Ils flechissent le genou et etendent la hanche (avec les fessiers). Souvent neglives face aux quadriceps, ils sont cruciaux pour la sante du genou, la puissance de sprint et l'equilibre de la cuisse. Un desequilibre quadriceps/ischios augmente le risque de blessure.",
      en: "The hamstrings sit on the back of the thigh. They flex the knee and extend the hip (with the glutes). Often neglected next to the quads, they are crucial for knee health, sprint power and thigh balance. A quad/hamstring imbalance increases injury risk.",
    },
    functions: {
      fr: [
        "Flexion du genou (ramener le talon vers la fesse)",
        "Extension de la hanche (avec les fessiers)",
        "Stabilisation du genou et decceleration",
      ],
      en: [
        "Knee flexion (bringing the heel toward the glute)",
        "Hip extension (with the glutes)",
        "Knee stabilization and deceleration",
      ],
    },
    trainingTips: {
      fr: [
        "Travaille les deux fonctions : flexion de genou (leg curl) ET extension de hanche (soulevé roumain).",
        "Le soulevé de terre roumain (jambes semi-tendues) est excellent pour l'etirement.",
        "Ne neglige pas les ischios : ratio de force ~60-70% des quadriceps.",
      ],
      en: [
        "Train both functions: knee flexion (leg curl) AND hip extension (Romanian deadlift).",
        "The Romanian deadlift (soft knees) is excellent for the stretch.",
        "Do not neglect hamstrings: strength ratio ~60-70% of the quads.",
      ],
    },
    commonMistakes: {
      fr: [
        "Arrondir le dos sur le soulevé roumain.",
        "Ne travailler que la flexion (leg curl) et jamais l'extension de hanche.",
        "Amplitude partielle sur le leg curl.",
      ],
      en: [
        "Rounding the back on the Romanian deadlift.",
        "Only training flexion (leg curl) and never hip extension.",
        "Partial range on the leg curl.",
      ],
    },
    volumeAdvice: {
      fr: "8-14 series/semaine. Un exercice de hanche (roumain) + un de flexion (leg curl).",
      en: "8-14 sets/week. One hip exercise (Romanian) + one flexion (leg curl).",
    },
    machines: [
      {
        id: "souleve-roumain",
        name: { fr: "Soulevé de terre roumain", en: "Romanian deadlift" },
        type: { fr: "Poids libres", en: "Free weights" },
        level: "intermediaire",
        repRange: { fr: "8-12 reps", en: "8-12 reps" },
        whyRanked: {
          fr: "Numero 1 : le meilleur pour l'etirement charge des ischios et l'extension de hanche, avec un fort transfert et une charge elevee. Construit ischios ET fessiers.",
          en: "No.1: the best for a loaded hamstring stretch and hip extension, with strong transfer and heavy load. Builds hamstrings AND glutes.",
        },
        pros: {
          fr: ["Etirement charge maximal", "Chargeable lourd", "Travaille aussi les fessiers et le dos"],
          en: ["Maximal loaded stretch", "Heavily loadable", "Also works the glutes and back"],
        },
        cons: {
          fr: ["Technique exigeante (dos neutre)", "Risque si le dos s'arrondit"],
          en: ["Demanding technique (neutral back)", "Risk if the back rounds"],
        },
        tips: {
          fr: ["Pousse les hanches en arriere, jambes semi-tendues, barre pres des jambes.", "Descends jusqu'a l'etirement, dos plat."],
          en: ["Push the hips back, soft knees, bar close to the legs.", "Lower into the stretch, flat back."],
        },
      },
      {
        id: "leg-curl",
        name: { fr: "Leg curl (allonge/assis)", en: "Leg curl (lying/seated)" },
        type: { fr: "Machine guidee", en: "Guided machine" },
        level: "debutant",
        repRange: { fr: "10-15 reps", en: "10-15 reps" },
        whyRanked: {
          fr: "Classe 2eme : la meilleure isolation de la flexion de genou, la fonction que le roumain ne couvre pas. Indispensable pour des ischios complets. Le leg curl assis etire davantage.",
          en: "Ranked 2nd: the best isolation of knee flexion, the function the Romanian does not cover. Essential for complete hamstrings. The seated version stretches more.",
        },
        pros: {
          fr: ["Isole la flexion de genou", "Tres sur", "Complementaire du roumain"],
          en: ["Isolates knee flexion", "Very safe", "Complements the Romanian"],
        },
        cons: {
          fr: ["Non fonctionnel (articulation isolee)", "Crampes frequentes si trop lourd"],
          en: ["Non-functional (single joint)", "Cramps common if too heavy"],
        },
        tips: {
          fr: ["Controle la descente, marque une pause en flexion complete.", "Ne decolle pas les hanches."],
          en: ["Control the descent, pause at full flexion.", "Do not let the hips lift."],
        },
      },
    ],
  },

  // ------------------------------------------------------------------ MOLLETS
  {
    id: "mollets",
    view: "back",
    name: { fr: "Mollets", en: "Calves" },
    scientificName: { fr: "Gastrocnemien, solaire", en: "Gastrocnemius, soleus" },
    tagline: { fr: "Le bas de jambe, endurant et tetu.", en: "The lower leg, enduring and stubborn." },
    description: {
      fr: "Le mollet comprend le gastrocnemien (visible, en deux chefs) et le solaire (dessous). Ils font la flexion plantaire (se mettre sur la pointe des pieds) et sont sollicites a chaque pas. Reputes difficiles a developper (souvent genetique), ils repondent bien a un fort volume, une amplitude complete et de la frequence.",
      en: "The calf comprises the gastrocnemius (visible, two heads) and the soleus (underneath). They perform plantar flexion (rising onto the toes) and work with every step. Famously stubborn (often genetic), they respond well to high volume, full range and frequency.",
    },
    functions: {
      fr: [
        "Flexion plantaire (pousser sur la pointe des pieds)",
        "Propulsion a la marche, course et saut",
        "Stabilisation de la cheville",
      ],
      en: [
        "Plantar flexion (pushing onto the toes)",
        "Propulsion in walking, running and jumping",
        "Ankle stabilization",
      ],
    },
    trainingTips: {
      fr: [
        "Travaille jambes tendues (gastrocnemien) ET genoux flechis (solaire, mollet assis).",
        "Amplitude complete : etirement en bas, contraction franche en haut.",
        "Fort volume et frequence (2-4x/semaine) : le mollet recupere vite.",
      ],
      en: [
        "Train with straight legs (gastrocnemius) AND bent knees (soleus, seated calf raise).",
        "Full range: stretch at the bottom, hard squeeze at the top.",
        "High volume and frequency (2-4x/week): calves recover fast.",
      ],
    },
    commonMistakes: {
      fr: [
        "Reps rapides en demi-amplitude qui rebondissent.",
        "Trop peu de volume : le mollet en demande beaucoup.",
        "Oublier le solaire (travail genoux flechis).",
      ],
      en: [
        "Fast, bouncy half-range reps.",
        "Too little volume: calves need a lot.",
        "Forgetting the soleus (bent-knee work).",
      ],
    },
    volumeAdvice: {
      fr: "12-20 series/semaine, reparties. Melange debout (gastroc) et assis (solaire).",
      en: "12-20 sets/week, spread out. Mix standing (gastroc) and seated (soleus).",
    },
    machines: [
      {
        id: "mollets-debout",
        name: { fr: "Extension mollets debout", en: "Standing calf raise" },
        type: { fr: "Machine / poids libres", en: "Machine / free weights" },
        level: "debutant",
        repRange: { fr: "12-20 reps", en: "12-20 reps" },
        whyRanked: {
          fr: "Numero 1 : jambes tendues, il cible le gastrocnemien (la partie visible et bombee du mollet), avec une charge elevee et une amplitude complete possible. Le plus efficace pour le volume visible.",
          en: "No.1: with straight legs, it targets the gastrocnemius (the visible, bulging part), with heavy load and full range possible. Most effective for visible size.",
        },
        pros: {
          fr: ["Cible le gastrocnemien (visible)", "Chargeable lourd", "Amplitude complete"],
          en: ["Targets the gastrocnemius (visible)", "Heavily loadable", "Full range of motion"],
        },
        cons: {
          fr: ["Ne cible pas le solaire", "Tentation de rebondir"],
          en: ["Does not target the soleus", "Temptation to bounce"],
        },
        tips: {
          fr: ["Descends le talon au maximum (etirement), monte le plus haut possible.", "Pause 1s en haut et en bas."],
          en: ["Drop the heel as far as possible (stretch), rise as high as possible.", "Pause 1s at top and bottom."],
        },
      },
      {
        id: "mollets-assis",
        name: { fr: "Extension mollets assis", en: "Seated calf raise" },
        type: { fr: "Machine guidee", en: "Guided machine" },
        level: "debutant",
        repRange: { fr: "15-20 reps", en: "15-20 reps" },
        whyRanked: {
          fr: "Classe 2eme : genoux flechis, il cible le solaire (dessous du mollet), qui donne de l'epaisseur et soutient le gastrocnemien. Indispensable pour un mollet complet, complementaire du debout.",
          en: "Ranked 2nd: with bent knees, it targets the soleus (underneath), which adds thickness and supports the gastrocnemius. Essential for a complete calf, complementary to standing.",
        },
        pros: {
          fr: ["Cible le solaire (epaisseur)", "Tres sur", "Complementaire du debout"],
          en: ["Targets the soleus (thickness)", "Very safe", "Complements standing raises"],
        },
        cons: {
          fr: ["Muscle moins visible directement", "Amplitude parfois limitee par la machine"],
          en: ["Less directly visible muscle", "Range sometimes limited by the machine"],
        },
        tips: {
          fr: ["Amplitude complete, ne rebondis pas.", "Ralentis la descente pour l'etirement."],
          en: ["Full range, no bouncing.", "Slow the descent for the stretch."],
        },
      },
    ],
  },
];

export function getMuscle(id: string): Muscle | undefined {
  return MUSCLES.find((m) => m.id === id);
}

export const FRONT_MUSCLES = MUSCLES.filter((m) => m.view === "front");
export const BACK_MUSCLES = MUSCLES.filter((m) => m.view === "back");
