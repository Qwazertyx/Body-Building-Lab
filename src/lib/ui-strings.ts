import type { Lang } from "./types";

/** Chaines d'interface statiques (navigation, boutons, titres...). */
export const UI = {
  appName: { fr: "Vico Body Building Lab", en: "Vico Body Building Lab" },
  tagline: {
    fr: "Le laboratoire de ton physique, dans ta poche",
    en: "Your physique lab, in your pocket",
  },
  nav: {
    home: { fr: "Muscles", en: "Muscles" },
    nutrition: { fr: "Nutrition", en: "Nutrition" },
    mobility: { fr: "Echauffement & Etirements", en: "Warm-up & Stretching" },
    settings: { fr: "Parametres", en: "Settings" },
  },
  home: {
    heroTitle: {
      fr: "Clique sur un muscle",
      en: "Tap a muscle",
    },
    heroSubtitle: {
      fr: "Decouvre les meilleures machines, les conseils et les erreurs a eviter pour chaque groupe musculaire.",
      en: "Discover the best machines, tips and mistakes to avoid for each muscle group.",
    },
    front: { fr: "Vue de face", en: "Front view" },
    back: { fr: "Vue de dos", en: "Back view" },
    selectPrompt: {
      fr: "Selectionne un muscle sur le schema ou dans la liste ci-dessous.",
      en: "Select a muscle on the diagram or in the list below.",
    },
    allMuscles: { fr: "Tous les muscles", en: "All muscles" },
  },
  muscle: {
    back: { fr: "Retour aux muscles", en: "Back to muscles" },
    functions: { fr: "Fonctions", en: "Functions" },
    volume: { fr: "Volume conseille", en: "Recommended volume" },
    trainingTips: { fr: "Conseils d'entrainement", en: "Training tips" },
    commonMistakes: { fr: "Erreurs frequentes", en: "Common mistakes" },
    bestMachines: {
      fr: "Meilleures machines & exercices",
      en: "Best machines & exercises",
    },
    rankExplain: {
      fr: "Classees de la plus efficace a la moins prioritaire. Le classement explique pourquoi.",
      en: "Ranked from most effective to least priority. The ranking explains why.",
    },
    why: { fr: "Pourquoi ce classement", en: "Why this ranking" },
    pros: { fr: "Avantages", en: "Pros" },
    cons: { fr: "Inconvenients", en: "Cons" },
    tips: { fr: "Conseils d'execution", en: "Execution tips" },
    repRange: { fr: "Repetitions", en: "Reps" },
    level: { fr: "Niveau", en: "Level" },
    rankBadge: { fr: "Choix", en: "Pick" },
    movement: { fr: "Le mouvement", en: "The movement" },
    posLow: { fr: "Position basse", en: "Low position" },
    posHigh: { fr: "Position haute", en: "High position" },
    howTo: { fr: "Comment bien le faire", en: "How to do it right" },
  },
  levels: {
    debutant: { fr: "Debutant", en: "Beginner" },
    intermediaire: { fr: "Intermediaire", en: "Intermediate" },
    avance: { fr: "Avance", en: "Advanced" },
    facile: { fr: "Facile", en: "Easy" },
    difficile: { fr: "Difficile", en: "Hard" },
  },
  settings: {
    title: { fr: "Parametres", en: "Settings" },
    language: { fr: "Langue", en: "Language" },
    theme: { fr: "Theme", en: "Theme" },
    dark: { fr: "Sombre", en: "Dark" },
    light: { fr: "Clair", en: "Light" },
    french: { fr: "Francais", en: "French" },
    english: { fr: "Anglais", en: "English" },
    about: { fr: "A propos", en: "About" },
    aboutText: {
      fr: "Vico Body Building Lab (VicoBBL) est une aide pour debutants et confirmes. Les informations sont educatives et ne remplacent pas l'avis d'un professionnel de sante. Les sources sont listees dans le README du projet.",
      en: "Vico Body Building Lab (VicoBBL) is a helper for beginners and advanced lifters. The information is educational and does not replace professional medical advice. Sources are listed in the project README.",
    },
  },
  disclaimer: {
    fr: "Contenu educatif. En cas de douleur, de blessure ou de doute, consulte un professionnel de sante ou un coach diplome.",
    en: "Educational content. In case of pain, injury or doubt, consult a health professional or a certified coach.",
  },
  common: {
    beginnerFriendly: { fr: "Ideal debutant", en: "Beginner friendly" },
    readMore: { fr: "En savoir plus", en: "Learn more" },
  },
} as const;

export function pick(text: { fr: string; en: string }, lang: Lang): string {
  return text[lang];
}
