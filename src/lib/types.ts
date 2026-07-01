export type Lang = "fr" | "en";

/** Une chaine bilingue : { fr, en }. */
export interface LocalizedText {
  fr: string;
  en: string;
}

/** Un tableau bilingue de chaines. */
export interface LocalizedList {
  fr: string[];
  en: string[];
}

export interface Machine {
  /** Identifiant unique de la machine/exercice. */
  id: string;
  name: LocalizedText;
  /** Type : machine guidee, poids libre, poulie, poids de corps... */
  type: LocalizedText;
  /** Pourquoi cette machine est classee a cette position. */
  whyRanked: LocalizedText;
  pros: LocalizedList;
  cons: LocalizedList;
  /** Conseils d'execution. */
  tips: LocalizedList;
  /** Niveau conseille. */
  level: "debutant" | "intermediaire" | "avance";
  /** Fourchette de repetitions conseillee. */
  repRange: LocalizedText;
}

export interface Muscle {
  id: string;
  name: LocalizedText;
  /** Nom anatomique / scientifique. */
  scientificName: LocalizedText;
  /** Vue ou le muscle est visible : avant ou arriere. */
  view: "front" | "back";
  /** Courte accroche. */
  tagline: LocalizedText;
  /** Description detaillee : role, fonction. */
  description: LocalizedText;
  /** Fonctions anatomiques principales. */
  functions: LocalizedList;
  /** Conseils d'entrainement generaux pour ce muscle. */
  trainingTips: LocalizedList;
  /** Erreurs frequentes. */
  commonMistakes: LocalizedList;
  /** Frequence / volume conseille. */
  volumeAdvice: LocalizedText;
  /** Machines / exercices classes du meilleur au moins bon. */
  machines: Machine[];
}
