import type { LocalizedText, LocalizedList } from "@/lib/types";

export type MobilityKind = "echauffement" | "etirement";
export type BodyZone = "haut" | "bas" | "complet";
export type Duration = "court" | "long";
export type Difficulty = "facile" | "difficile";

export interface Exercise {
  name: LocalizedText;
  detail: LocalizedText;
  /** Duree ou repetitions indicatives. */
  dose: LocalizedText;
}

export interface MobilityRoutine {
  id: string;
  kind: MobilityKind;
  zone: BodyZone;
  duration: Duration;
  difficulty: Difficulty;
  title: LocalizedText;
  goal: LocalizedText;
  advice: LocalizedList;
  exercises: Exercise[];
}

/**
 * Routines d'echauffement et d'etirement.
 * Filtrables par type, zone (haut/bas/complet), duree (court/long), difficulte.
 */
export const ROUTINES: MobilityRoutine[] = [
  // -------------------------------------------------- ECHAUFFEMENTS
  {
    id: "ech-haut-court-facile",
    kind: "echauffement",
    zone: "haut",
    duration: "court",
    difficulty: "facile",
    title: { fr: "Echauffement haut du corps express", en: "Quick upper-body warm-up" },
    goal: {
      fr: "Preparer epaules, pecs et dos avant une seance de poussee ou de tirage.",
      en: "Prepare shoulders, chest and back before a push or pull session.",
    },
    advice: {
      fr: [
        "Mouvements dynamiques, jamais d'etirement statique long avant de forcer.",
        "Augmente progressivement l'amplitude.",
      ],
      en: [
        "Dynamic movements, never long static stretches before lifting heavy.",
        "Gradually increase the range of motion.",
      ],
    },
    exercises: [
      {
        name: { fr: "Rotations d'epaules", en: "Arm circles" },
        detail: { fr: "Grands cercles avant puis arriere, bras tendus.", en: "Big circles forward then backward, arms extended." },
        dose: { fr: "15 dans chaque sens", en: "15 each direction" },
      },
      {
        name: { fr: "Bandes / dislocations batons", en: "Band pass-throughs" },
        detail: { fr: "Passe une bande d'avant en arriere au-dessus de la tete, bras tendus.", en: "Pass a band overhead front to back, arms straight." },
        dose: { fr: "10-12 reps", en: "10-12 reps" },
      },
      {
        name: { fr: "Rotations du buste", en: "Torso twists" },
        detail: { fr: "Debout, tourne le buste de gauche a droite, bras relaches.", en: "Standing, rotate the torso left to right, arms relaxed." },
        dose: { fr: "20 rotations", en: "20 rotations" },
      },
    ],
  },
  {
    id: "ech-bas-court-facile",
    kind: "echauffement",
    zone: "bas",
    duration: "court",
    difficulty: "facile",
    title: { fr: "Echauffement bas du corps express", en: "Quick lower-body warm-up" },
    goal: {
      fr: "Reveiller hanches, genoux et chevilles avant squats ou jambes.",
      en: "Wake up hips, knees and ankles before squats or leg day.",
    },
    advice: {
      fr: ["Reste dynamique et controle.", "Termine par 1-2 series legeres de l'exercice principal."],
      en: ["Stay dynamic and controlled.", "Finish with 1-2 light sets of your main lift."],
    },
    exercises: [
      {
        name: { fr: "Balancements de jambe", en: "Leg swings" },
        detail: { fr: "Avant-arriere puis lateral, en te tenant a un appui.", en: "Front-to-back then side-to-side, holding a support." },
        dose: { fr: "12 par jambe et par sens", en: "12 per leg and direction" },
      },
      {
        name: { fr: "Squats au poids de corps", en: "Bodyweight squats" },
        detail: { fr: "Descends lentement, amplitude complete.", en: "Descend slowly, full range." },
        dose: { fr: "15 reps", en: "15 reps" },
      },
      {
        name: { fr: "Mobilite de cheville", en: "Ankle rocks" },
        detail: { fr: "Genou vers l'avant au-dela des orteils, talon au sol.", en: "Drive the knee past the toes, heel down." },
        dose: { fr: "10 par cheville", en: "10 per ankle" },
      },
    ],
  },
  {
    id: "ech-complet-long-facile",
    kind: "echauffement",
    zone: "complet",
    duration: "long",
    difficulty: "facile",
    title: { fr: "Echauffement complet du corps", en: "Full-body warm-up" },
    goal: {
      fr: "Elever la temperature et mobiliser tout le corps avant une seance intense ou full-body.",
      en: "Raise body temperature and mobilize the whole body before an intense or full-body session.",
    },
    advice: {
      fr: [
        "Commence par 3-5 min de cardio leger pour monter en temperature.",
        "Enchaine sans repos, tempo tranquille.",
      ],
      en: [
        "Start with 3-5 min of light cardio to raise your temperature.",
        "Flow without rest, easy tempo.",
      ],
    },
    exercises: [
      {
        name: { fr: "Cardio leger", en: "Light cardio" },
        detail: { fr: "Velo, rameur ou corde a sauter a intensite douce.", en: "Bike, rower or jump rope at easy intensity." },
        dose: { fr: "3-5 min", en: "3-5 min" },
      },
      {
        name: { fr: "Cercles de bras + hanches", en: "Arm + hip circles" },
        detail: { fr: "Mobilise epaules puis hanches en grands cercles.", en: "Mobilize shoulders then hips in big circles." },
        dose: { fr: "10 chaque", en: "10 each" },
      },
      {
        name: { fr: "Fentes marchees", en: "Walking lunges" },
        detail: { fr: "Grand pas controle, buste droit.", en: "Big controlled step, chest up." },
        dose: { fr: "10 par jambe", en: "10 per leg" },
      },
      {
        name: { fr: "Chien tete en bas -> cobra", en: "Down dog to cobra" },
        detail: { fr: "Enchaine les deux positions pour mobiliser tout le tronc.", en: "Flow between the two to mobilize the whole trunk." },
        dose: { fr: "8 transitions", en: "8 transitions" },
      },
    ],
  },
  {
    id: "ech-haut-long-difficile",
    kind: "echauffement",
    zone: "haut",
    duration: "long",
    difficulty: "difficile",
    title: { fr: "Echauffement epaules approfondi", en: "Advanced shoulder prep" },
    goal: {
      fr: "Preparer en profondeur des epaules fragiles avant developpes lourds.",
      en: "Thoroughly prepare sensitive shoulders before heavy pressing.",
    },
    advice: {
      fr: ["A privilegier si tu as des epaules sensibles.", "Reste leger, la qualite prime."],
      en: ["Best if you have sensitive shoulders.", "Stay light, quality first."],
    },
    exercises: [
      {
        name: { fr: "Rotations externes a la bande", en: "Band external rotations" },
        detail: { fr: "Coude au corps, tourne l'avant-bras vers l'exterieur.", en: "Elbow at the side, rotate the forearm outward." },
        dose: { fr: "15 par bras", en: "15 per arm" },
      },
      {
        name: { fr: "Face pull a la bande", en: "Band face pulls" },
        detail: { fr: "Tire vers le front, coudes hauts.", en: "Pull toward the forehead, elbows high." },
        dose: { fr: "20 reps", en: "20 reps" },
      },
      {
        name: { fr: "Scapula push-ups", en: "Scapular push-ups" },
        detail: { fr: "En planche, rapproche/eloigne les omoplates sans plier les bras.", en: "In a plank, protract/retract the shoulder blades without bending arms." },
        dose: { fr: "12 reps", en: "12 reps" },
      },
      {
        name: { fr: "Series de montee en charge", en: "Ramp-up sets" },
        detail: { fr: "Fais l'exercice principal a vide puis charges croissantes.", en: "Do the main lift empty then with increasing loads." },
        dose: { fr: "3-4 series legeres", en: "3-4 light sets" },
      },
    ],
  },

  // -------------------------------------------------- ETIREMENTS
  {
    id: "eti-haut-court-facile",
    kind: "etirement",
    zone: "haut",
    duration: "court",
    difficulty: "facile",
    title: { fr: "Etirements haut du corps express", en: "Quick upper-body stretch" },
    goal: {
      fr: "Relacher pecs, epaules et bras apres une seance de poussee.",
      en: "Release chest, shoulders and arms after a push session.",
    },
    advice: {
      fr: [
        "Etirements statiques a faire APRES la seance, jamais avant de forcer.",
        "Tiens sans douleur, respire profondement.",
      ],
      en: [
        "Static stretches to do AFTER training, never before lifting heavy.",
        "Hold without pain, breathe deeply.",
      ],
    },
    exercises: [
      {
        name: { fr: "Etirement pectoraux (encadrement de porte)", en: "Doorway chest stretch" },
        detail: { fr: "Avant-bras contre le cadre, avance le buste.", en: "Forearm on the frame, lean the torso forward." },
        dose: { fr: "30 s par cote", en: "30 s per side" },
      },
      {
        name: { fr: "Triceps au-dessus de la tete", en: "Overhead triceps stretch" },
        detail: { fr: "Coude plie derriere la tete, tire doucement avec l'autre main.", en: "Elbow bent behind the head, gently pull with the other hand." },
        dose: { fr: "30 s par bras", en: "30 s per arm" },
      },
      {
        name: { fr: "Etirement deltoide croise", en: "Cross-body shoulder stretch" },
        detail: { fr: "Ramene le bras tendu devant la poitrine.", en: "Bring the straight arm across the chest." },
        dose: { fr: "30 s par bras", en: "30 s per arm" },
      },
    ],
  },
  {
    id: "eti-bas-court-facile",
    kind: "etirement",
    zone: "bas",
    duration: "court",
    difficulty: "facile",
    title: { fr: "Etirements bas du corps express", en: "Quick lower-body stretch" },
    goal: {
      fr: "Detendre quadriceps, ischios et fessiers apres les jambes.",
      en: "Relax quads, hamstrings and glutes after leg day.",
    },
    advice: {
      fr: ["Ne force pas jusqu'a la douleur.", "Expire en allongeant l'etirement."],
      en: ["Do not force into pain.", "Exhale as you deepen the stretch."],
    },
    exercises: [
      {
        name: { fr: "Etirement quadriceps debout", en: "Standing quad stretch" },
        detail: { fr: "Attrape la cheville, talon vers la fesse, genoux serres.", en: "Grab the ankle, heel to glute, knees together." },
        dose: { fr: "30 s par jambe", en: "30 s per leg" },
      },
      {
        name: { fr: "Etirement ischios assis", en: "Seated hamstring stretch" },
        detail: { fr: "Jambe tendue, penche le buste vers le pied, dos droit.", en: "Leg extended, hinge toward the foot, flat back." },
        dose: { fr: "30 s par jambe", en: "30 s per leg" },
      },
      {
        name: { fr: "Etirement fessier (figure 4)", en: "Figure-4 glute stretch" },
        detail: { fr: "Allonge, cheville sur le genou oppose, tire la cuisse.", en: "Lying down, ankle on the opposite knee, pull the thigh in." },
        dose: { fr: "30 s par cote", en: "30 s per side" },
      },
    ],
  },
  {
    id: "eti-complet-long-facile",
    kind: "etirement",
    zone: "complet",
    duration: "long",
    difficulty: "facile",
    title: { fr: "Routine d'etirements complete", en: "Full stretching routine" },
    goal: {
      fr: "Ameliorer la souplesse globale et favoriser la recuperation, jour de repos ou fin de seance.",
      en: "Improve overall flexibility and aid recovery, on a rest day or after training.",
    },
    advice: {
      fr: [
        "Ideal les jours de repos ou en fin de seance.",
        "Tiens chaque position 30-45 s, respire lentement.",
      ],
      en: [
        "Ideal on rest days or at the end of a session.",
        "Hold each position 30-45 s, breathe slowly.",
      ],
    },
    exercises: [
      {
        name: { fr: "Chat-vache", en: "Cat-cow" },
        detail: { fr: "A quatre pattes, alterne dos rond et dos creux.", en: "On all fours, alternate rounding and arching the back." },
        dose: { fr: "10 cycles", en: "10 cycles" },
      },
      {
        name: { fr: "Fente basse (etirement psoas)", en: "Low lunge (hip flexor)" },
        detail: { fr: "Genou arriere au sol, avance le bassin.", en: "Rear knee down, push the hips forward." },
        dose: { fr: "40 s par cote", en: "40 s per side" },
      },
      {
        name: { fr: "Etirement dorsaux (pancake)", en: "Lat / seated forward fold" },
        detail: { fr: "Assis jambes ecartees, penche le buste vers l'avant.", en: "Seated with legs wide, fold the torso forward." },
        dose: { fr: "45 s", en: "45 s" },
      },
      {
        name: { fr: "Torsion vertebrale allongee", en: "Lying spinal twist" },
        detail: { fr: "Allonge, laisse tomber les genoux d'un cote, epaules au sol.", en: "Lying down, drop the knees to one side, shoulders on the floor." },
        dose: { fr: "40 s par cote", en: "40 s per side" },
      },
    ],
  },
  {
    id: "eti-bas-long-difficile",
    kind: "etirement",
    zone: "bas",
    duration: "long",
    difficulty: "difficile",
    title: { fr: "Souplesse avancee des hanches", en: "Advanced hip flexibility" },
    goal: {
      fr: "Gagner en amplitude de hanche (squat profond, grand ecart) pour les plus souples.",
      en: "Gain hip range (deep squat, splits) for the more flexible.",
    },
    advice: {
      fr: [
        "Reserve aux personnes deja souples et bien echauffees.",
        "Progression lente sur des semaines, jamais dans la douleur vive.",
      ],
      en: [
        "For people who are already flexible and well warmed up.",
        "Slow progression over weeks, never into sharp pain.",
      ],
    },
    exercises: [
      {
        name: { fr: "Squat profond tenu (malasana)", en: "Deep squat hold (malasana)" },
        detail: { fr: "Assis en bas de squat, coudes poussant les genoux.", en: "Sit in the bottom of a squat, elbows pushing the knees out." },
        dose: { fr: "60-90 s", en: "60-90 s" },
      },
      {
        name: { fr: "Etirement papillon", en: "Butterfly stretch" },
        detail: { fr: "Plantes de pieds jointes, pousse les genoux vers le sol.", en: "Soles together, press the knees toward the floor." },
        dose: { fr: "60 s", en: "60 s" },
      },
      {
        name: { fr: "Fente coureur (couch stretch)", en: "Couch stretch" },
        detail: { fr: "Tibia arriere contre le mur, etire quadriceps et psoas.", en: "Rear shin against the wall, stretch quads and hip flexors." },
        dose: { fr: "60 s par cote", en: "60 s per side" },
      },
      {
        name: { fr: "Grand ecart progressif", en: "Progressive splits" },
        detail: { fr: "Descends vers le grand ecart avec appuis, sans forcer.", en: "Lower toward the splits with support, without forcing." },
        dose: { fr: "60-90 s par cote", en: "60-90 s per side" },
      },
    ],
  },
];
