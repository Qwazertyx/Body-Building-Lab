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
    mobility: { fr: "Mobilite", en: "Mobility" },
    tools: { fr: "Outils", en: "Tools" },
    journal: { fr: "Journal", en: "Log" },
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
  log: {
    title: { fr: "Journal d'entrainement", en: "Workout log" },
    subtitle: {
      fr: "Note tes series pour suivre ta progression. Tout reste sur ton appareil.",
      en: "Log your sets to track progress. Everything stays on your device.",
    },
    logSet: { fr: "Logger une serie", en: "Log a set" },
    weight: { fr: "Charge (kg)", en: "Weight (kg)" },
    reps: { fr: "Reps", en: "Reps" },
    add: { fr: "Ajouter", en: "Add" },
    save: { fr: "Enregistrer", en: "Save" },
    cancel: { fr: "Annuler", en: "Cancel" },
    lastPerf: { fr: "Dernier", en: "Last" },
    noHistory: { fr: "Aucune serie enregistree pour cet exercice.", en: "No sets logged for this exercise yet." },
    history: { fr: "Historique", en: "History" },
    empty: {
      fr: "Ton journal est vide. Ouvre une fiche muscle et logge ta premiere serie.",
      en: "Your log is empty. Open a muscle page and log your first set.",
    },
    browseMuscles: { fr: "Parcourir les muscles", en: "Browse muscles" },
    sets: { fr: "series", en: "sets" },
    set: { fr: "serie", en: "set" },
    delete: { fr: "Supprimer", en: "Delete" },
    clearAll: { fr: "Tout effacer", en: "Clear all" },
    confirmClear: {
      fr: "Effacer tout le journal ? Cette action est irreversible.",
      en: "Clear the whole log? This cannot be undone.",
    },
    bodyweight: { fr: "PdC", en: "BW" },
    today: { fr: "Aujourd'hui", en: "Today" },
    yesterday: { fr: "Hier", en: "Yesterday" },
    added: { fr: "Serie ajoutee", en: "Set added" },
  },
  timer: {
    title: { fr: "Repos", en: "Rest" },
    open: { fr: "Minuteur de repos", en: "Rest timer" },
    start: { fr: "Demarrer", en: "Start" },
    pause: { fr: "Pause", en: "Pause" },
    resume: { fr: "Reprendre", en: "Resume" },
    reset: { fr: "Reset", en: "Reset" },
    done: { fr: "Repos termine !", en: "Rest done!" },
    close: { fr: "Fermer", en: "Close" },
  },
  tools: {
    title: { fr: "Outils", en: "Tools" },
    subtitle: {
      fr: "Calculateurs et generateur de seance pour t'aider a la salle.",
      en: "Calculators and a session generator to help you at the gym.",
    },
    // 1RM
    oneRmTitle: { fr: "Calculateur de 1RM", en: "1RM calculator" },
    oneRmDesc: {
      fr: "Estime ta charge maximale (1 rep) a partir d'une serie. Utile pour calibrer tes pourcentages.",
      en: "Estimate your one-rep max from a set. Handy to set your working percentages.",
    },
    weightLifted: { fr: "Charge soulevee (kg)", en: "Weight lifted (kg)" },
    repsDone: { fr: "Repetitions", en: "Reps" },
    estimated1rm: { fr: "1RM estime", en: "Estimated 1RM" },
    percentTable: { fr: "Tes charges par pourcentage", en: "Loads by percentage" },
    // Plates
    plateTitle: { fr: "Calculateur de disques", en: "Plate calculator" },
    plateDesc: {
      fr: "Quels disques mettre de chaque cote de la barre pour atteindre un poids cible.",
      en: "Which plates to load on each side of the bar to reach a target weight.",
    },
    targetWeight: { fr: "Poids total vise (kg)", en: "Target total weight (kg)" },
    barWeight: { fr: "Barre (kg)", en: "Bar (kg)" },
    perSide: { fr: "Par cote", en: "Per side" },
    plateImpossible: {
      fr: "Impossible d'atteindre exactement ce poids avec les disques standards.",
      en: "Can't reach this exact weight with standard plates.",
    },
    plateTooLow: { fr: "Le poids vise est inferieur a la barre.", en: "Target is below the bar weight." },
    remainder: { fr: "Reste non charge", en: "Unloaded remainder" },
    // Bodyweight
    bwTitle: { fr: "Suivi du poids de corps", en: "Bodyweight tracker" },
    bwDesc: {
      fr: "Note ton poids regulierement pour visualiser la tendance. Tout reste sur ton appareil.",
      en: "Log your weight regularly to see the trend. Everything stays on your device.",
    },
    bwInput: { fr: "Ton poids aujourd'hui (kg)", en: "Your weight today (kg)" },
    bwAdd: { fr: "Enregistrer", en: "Save" },
    bwEmpty: { fr: "Aucune mesure enregistree.", en: "No measurements yet." },
    bwTrend: { fr: "Variation", en: "Change" },
    bwLatest: { fr: "Dernier", en: "Latest" },
    // Generator
    genTitle: { fr: "Generateur de seance", en: "Session generator" },
    genDesc: {
      fr: "Choisis un type de programme : on te propose des seances avec les meilleurs exercices de chaque muscle.",
      en: "Pick a program type: we suggest sessions with the best exercises for each muscle.",
    },
    genSplit: { fr: "Type de programme", en: "Program type" },
    splitFull: { fr: "Full-body", en: "Full-body" },
    splitUpperLower: { fr: "Haut / Bas", en: "Upper / Lower" },
    splitPPL: { fr: "Push / Pull / Legs", en: "Push / Pull / Legs" },
    genSets: { fr: "3-4 series", en: "3-4 sets" },
    genOpen: { fr: "Voir la fiche", en: "Open guide" },
    day: { fr: "Seance", en: "Day" },
  },
  search: {
    open: { fr: "Rechercher", en: "Search" },
    placeholder: { fr: "Chercher un muscle ou un exercice...", en: "Search a muscle or exercise..." },
    noResults: { fr: "Aucun resultat.", en: "No results." },
    muscle: { fr: "Muscle", en: "Muscle" },
    exercise: { fr: "Exercice", en: "Exercise" },
  },
  favorites: {
    title: { fr: "Tes favoris", en: "Your favorites" },
    save: { fr: "Ajouter aux favoris", en: "Add to favorites" },
    saved: { fr: "Dans tes favoris", en: "In favorites" },
    share: { fr: "Partager", en: "Share" },
    linkCopied: { fr: "Lien copie !", en: "Link copied!" },
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
