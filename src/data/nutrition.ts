import type { LocalizedText, LocalizedList } from "@/lib/types";

export interface NutritionSection {
  id: string;
  title: LocalizedText;
  body: LocalizedText;
  points?: LocalizedList;
}

/** Coefficients d'activite pour le calcul du TDEE (multiplicateur du BMR). */
export const ACTIVITY_LEVELS: {
  id: string;
  label: LocalizedText;
  factor: number;
  desc: LocalizedText;
}[] = [
  {
    id: "sedentaire",
    factor: 1.2,
    label: { fr: "Sedentaire", en: "Sedentary" },
    desc: { fr: "Peu ou pas d'exercice, travail de bureau", en: "Little or no exercise, desk job" },
  },
  {
    id: "leger",
    factor: 1.375,
    label: { fr: "Legerement actif", en: "Lightly active" },
    desc: { fr: "Sport leger 1-3 jours/semaine", en: "Light exercise 1-3 days/week" },
  },
  {
    id: "modere",
    factor: 1.55,
    label: { fr: "Moderement actif", en: "Moderately active" },
    desc: { fr: "Sport modere 3-5 jours/semaine", en: "Moderate exercise 3-5 days/week" },
  },
  {
    id: "actif",
    factor: 1.725,
    label: { fr: "Tres actif", en: "Very active" },
    desc: { fr: "Sport intense 6-7 jours/semaine", en: "Hard exercise 6-7 days/week" },
  },
  {
    id: "extreme",
    factor: 1.9,
    label: { fr: "Extremement actif", en: "Extremely active" },
    desc: { fr: "Sport tres intense + travail physique", en: "Very hard exercise + physical job" },
  },
];

/** Objectifs et ajustement calorique par rapport a la maintenance. */
export const GOALS: {
  id: "seche" | "maintien" | "prise";
  label: LocalizedText;
  adjustment: number; // pourcentage applique au TDEE
  desc: LocalizedText;
  proteinPerKg: [number, number];
  fatPerKg: [number, number];
}[] = [
  {
    id: "seche",
    label: { fr: "Seche (perte de gras)", en: "Cut (fat loss)" },
    adjustment: -0.2,
    desc: {
      fr: "Deficit d'environ 20% pour perdre du gras en preservant le muscle (~0.5-0.7% du poids/semaine).",
      en: "About a 20% deficit to lose fat while preserving muscle (~0.5-0.7% of body weight/week).",
    },
    proteinPerKg: [2.0, 2.4],
    fatPerKg: [0.6, 0.8],
  },
  {
    id: "maintien",
    label: { fr: "Maintien", en: "Maintenance" },
    adjustment: 0,
    desc: {
      fr: "Manger a hauteur de ses depenses pour stabiliser le poids et recomposer lentement.",
      en: "Eat at your expenditure to hold weight and slowly recomposition.",
    },
    proteinPerKg: [1.6, 2.2],
    fatPerKg: [0.8, 1.0],
  },
  {
    id: "prise",
    label: { fr: "Prise de masse", en: "Bulk (muscle gain)" },
    adjustment: 0.1,
    desc: {
      fr: "Leger surplus d'environ 10% pour prendre du muscle en limitant le gras (~0.25-0.5% du poids/semaine).",
      en: "A slight ~10% surplus to gain muscle while limiting fat (~0.25-0.5% of body weight/week).",
    },
    proteinPerKg: [1.8, 2.2],
    fatPerKg: [0.8, 1.0],
  },
];

/** Sections d'information nutrition (educatif). */
export const NUTRITION_SECTIONS: NutritionSection[] = [
  {
    id: "calories",
    title: { fr: "Les calories, la base de tout", en: "Calories, the foundation of everything" },
    body: {
      fr: "Ton poids depend avant tout de la balance energetique : calories consommees vs depensees. Pour perdre du gras, il faut un deficit ; pour prendre du muscle, un leger surplus. Le calculateur ci-dessus estime ta depense (TDEE) a partir de ton metabolisme de base (BMR, formule de Mifflin-St Jeor) multiplie par ton niveau d'activite.",
      en: "Your weight depends above all on energy balance: calories eaten vs burned. To lose fat you need a deficit; to gain muscle, a slight surplus. The calculator above estimates your expenditure (TDEE) from your basal metabolic rate (BMR, Mifflin-St Jeor formula) times your activity level.",
    },
    points: {
      fr: [
        "BMR = energie brulee au repos complet.",
        "TDEE = BMR x facteur d'activite = tes besoins reels.",
        "Ces chiffres sont des estimations : ajuste selon l'evolution reelle de ton poids sur 2-3 semaines.",
      ],
      en: [
        "BMR = energy burned at complete rest.",
        "TDEE = BMR x activity factor = your real needs.",
        "These are estimates: adjust based on your actual weight trend over 2-3 weeks.",
      ],
    },
  },
  {
    id: "proteines",
    title: { fr: "Les proteines, priorite absolue", en: "Protein, the absolute priority" },
    body: {
      fr: "Les proteines fournissent les briques (acides amines) pour construire et reparer le muscle, et sont tres rassasiantes. C'est le macro le plus important en musculation, surtout en seche pour preserver le muscle.",
      en: "Protein provides the building blocks (amino acids) to build and repair muscle, and is highly satiating. It is the most important macronutrient in strength training, especially in a cut to preserve muscle.",
    },
    points: {
      fr: [
        "Vise 1.6 a 2.2 g de proteines par kg de poids de corps par jour.",
        "En seche, monte vers 2.0-2.4 g/kg pour proteger le muscle.",
        "Sources : viande, poisson, oeufs, produits laitiers, legumineuses, whey.",
        "Repartis sur 3-4 prises dans la journee.",
      ],
      en: [
        "Aim for 1.6 to 2.2 g of protein per kg of body weight per day.",
        "In a cut, go toward 2.0-2.4 g/kg to protect muscle.",
        "Sources: meat, fish, eggs, dairy, legumes, whey.",
        "Spread across 3-4 meals during the day.",
      ],
    },
  },
  {
    id: "glucides-lipides",
    title: { fr: "Glucides et lipides, ton carburant", en: "Carbs and fats, your fuel" },
    body: {
      fr: "Les glucides sont le carburant privilegie pour l'entrainement intense et remplissent les reserves de glycogene. Les lipides sont essentiels aux hormones (dont la testosterone). Une fois les proteines fixees, repartis le reste des calories entre glucides et lipides selon tes preferences.",
      en: "Carbs are the preferred fuel for intense training and refill glycogen stores. Fats are essential for hormones (including testosterone). Once protein is set, split the remaining calories between carbs and fats to taste.",
    },
    points: {
      fr: [
        "Lipides : au moins 0.6-0.8 g/kg pour la sante hormonale.",
        "Glucides : le reste des calories, ideal autour de l'entrainement.",
        "Privilegie les sources completes : riz, avoine, patate, fruits, legumes, huiles de qualite.",
      ],
      en: [
        "Fats: at least 0.6-0.8 g/kg for hormonal health.",
        "Carbs: the remaining calories, ideal around training.",
        "Favor whole sources: rice, oats, potatoes, fruit, vegetables, quality oils.",
      ],
    },
  },
  {
    id: "seche",
    title: { fr: "La seche en pratique", en: "Cutting in practice" },
    body: {
      fr: "Une seche reussie est lente et progressive pour preserver le muscle et eviter l'effet yoyo. Un deficit de 15-25% est un bon point de depart. Garde les proteines hautes et continue la musculation lourde pour signaler au corps de conserver le muscle.",
      en: "A successful cut is slow and gradual to preserve muscle and avoid the yo-yo effect. A 15-25% deficit is a good starting point. Keep protein high and keep lifting heavy to signal the body to keep muscle.",
    },
    points: {
      fr: [
        "Perte cible : 0.5-0.7% du poids de corps par semaine.",
        "Proteines elevees (2.0-2.4 g/kg) + musculation lourde.",
        "Beaucoup de legumes et de fibres pour la satiete.",
        "Si le poids stagne 2 semaines, retire 100-200 kcal.",
      ],
      en: [
        "Target loss: 0.5-0.7% of body weight per week.",
        "High protein (2.0-2.4 g/kg) + heavy lifting.",
        "Plenty of vegetables and fiber for satiety.",
        "If weight stalls for 2 weeks, remove 100-200 kcal.",
      ],
    },
  },
  {
    id: "prise",
    title: { fr: "La prise de masse en pratique", en: "Bulking in practice" },
    body: {
      fr: "Pour prendre du muscle, un leger surplus (10-15%) suffit : au-dela, tu prends surtout du gras. La prise de muscle est lente, sois patient. Un debutant peut gagner ~0.5-1 kg de muscle par mois dans de bonnes conditions.",
      en: "To gain muscle, a slight surplus (10-15%) is enough: beyond that, you mostly gain fat. Muscle gain is slow, be patient. A beginner can gain ~0.5-1 kg of muscle per month in good conditions.",
    },
    points: {
      fr: [
        "Prise cible : 0.25-0.5% du poids de corps par semaine.",
        "Surplus modere (~200-400 kcal) pour limiter le gras.",
        "Surcharge progressive a l'entrainement : c'est le vrai signal de croissance.",
        "Si tu ne prends pas de poids en 2 semaines, ajoute 100-200 kcal.",
      ],
      en: [
        "Target gain: 0.25-0.5% of body weight per week.",
        "Moderate surplus (~200-400 kcal) to limit fat gain.",
        "Progressive overload in training: the real growth signal.",
        "If you do not gain weight in 2 weeks, add 100-200 kcal.",
      ],
    },
  },
  {
    id: "hydratation",
    title: { fr: "Hydratation, sommeil et regularite", en: "Hydration, sleep and consistency" },
    body: {
      fr: "La nutrition parfaite ne sert a rien sans regularite, sommeil et hydratation. Le muscle se construit au repos, pas a la salle. La constance sur des mois bat n'importe quel regime miracle.",
      en: "Perfect nutrition is useless without consistency, sleep and hydration. Muscle is built at rest, not in the gym. Consistency over months beats any miracle diet.",
    },
    points: {
      fr: [
        "Bois environ 30-40 ml d'eau par kg de poids de corps par jour.",
        "Vise 7-9 h de sommeil : cle pour la recuperation et les hormones.",
        "La regularite sur 6-12 mois compte plus que la perfection d'un repas.",
      ],
      en: [
        "Drink about 30-40 ml of water per kg of body weight per day.",
        "Aim for 7-9 h of sleep: key for recovery and hormones.",
        "Consistency over 6-12 months matters more than any single perfect meal.",
      ],
    },
  },
];
