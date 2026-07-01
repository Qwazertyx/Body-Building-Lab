"use client";

import { useMemo, useState } from "react";
import { useSettings } from "@/lib/i18n";
import { ACTIVITY_LEVELS, GOALS } from "@/data/nutrition";

type Sex = "homme" | "femme";

const L = {
  sex: { fr: "Sexe", en: "Sex" },
  male: { fr: "Homme", en: "Male" },
  female: { fr: "Femme", en: "Female" },
  age: { fr: "Age", en: "Age" },
  weight: { fr: "Poids (kg)", en: "Weight (kg)" },
  height: { fr: "Taille (cm)", en: "Height (cm)" },
  activity: { fr: "Niveau d'activite", en: "Activity level" },
  bmr: { fr: "Metabolisme de base (BMR)", en: "Basal metabolic rate (BMR)" },
  tdee: { fr: "Depense totale (maintien)", en: "Total expenditure (maintenance)" },
  yourNeeds: { fr: "Tes besoins caloriques", en: "Your calorie needs" },
  perDay: { fr: "kcal/jour", en: "kcal/day" },
  protein: { fr: "Proteines", en: "Protein" },
  carbs: { fr: "Glucides", en: "Carbs" },
  fat: { fr: "Lipides", en: "Fat" },
  fillPrompt: {
    fr: "Remplis le formulaire pour estimer tes besoins.",
    en: "Fill in the form to estimate your needs.",
  },
  formula: {
    fr: "Base sur la formule de Mifflin-St Jeor. Ce sont des estimations : ajuste selon l'evolution reelle de ton poids.",
    en: "Based on the Mifflin-St Jeor formula. These are estimates: adjust based on your real weight trend.",
  },
} as const;

export function TDEECalculator() {
  const { lang } = useSettings();
  const [sex, setSex] = useState<Sex>("homme");
  const [age, setAge] = useState("25");
  const [weight, setWeight] = useState("75");
  const [height, setHeight] = useState("178");
  const [activity, setActivity] = useState(ACTIVITY_LEVELS[2].id);

  const result = useMemo(() => {
    const a = parseFloat(age);
    const w = parseFloat(weight);
    const h = parseFloat(height);
    if (!a || !w || !h || a <= 0 || w <= 0 || h <= 0) return null;

    const bmr = 10 * w + 6.25 * h - 5 * a + (sex === "homme" ? 5 : -161);
    const factor = ACTIVITY_LEVELS.find((l) => l.id === activity)?.factor ?? 1.55;
    const tdee = bmr * factor;

    const goals = GOALS.map((g) => {
      const calories = Math.round((tdee * (1 + g.adjustment)) / 10) * 10;
      const proteinG = Math.round(w * ((g.proteinPerKg[0] + g.proteinPerKg[1]) / 2));
      const fatG = Math.round(w * ((g.fatPerKg[0] + g.fatPerKg[1]) / 2));
      const remaining = calories - proteinG * 4 - fatG * 9;
      const carbsG = Math.max(0, Math.round(remaining / 4));
      return { ...g, calories, proteinG, fatG, carbsG };
    });

    return { bmr: Math.round(bmr), tdee: Math.round(tdee), goals };
  }, [sex, age, weight, height, activity]);

  const field =
    "w-full rounded-lg border border-app bg-card-hover px-3 py-2 text-app outline-none transition-colors focus:border-brand";

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Formulaire */}
      <div className="rounded-2xl border border-app bg-card p-5">
        <div className="space-y-4">
          <div>
            <label className="mb-1.5 block text-sm font-semibold">{L.sex[lang]}</label>
            <div className="inline-flex w-full rounded-lg border border-app bg-card-hover p-1">
              {(["homme", "femme"] as Sex[]).map((s) => (
                <button
                  key={s}
                  onClick={() => setSex(s)}
                  className={`flex-1 rounded-md px-3 py-1.5 text-sm font-semibold transition-colors ${
                    sex === s ? "bg-brand text-white" : "text-muted-app"
                  }`}
                >
                  {s === "homme" ? L.male[lang] : L.female[lang]}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="mb-1.5 block text-sm font-semibold">{L.age[lang]}</label>
              <input type="number" inputMode="numeric" value={age} onChange={(e) => setAge(e.target.value)} className={field} />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-semibold">{L.weight[lang]}</label>
              <input type="number" inputMode="decimal" value={weight} onChange={(e) => setWeight(e.target.value)} className={field} />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-semibold">{L.height[lang]}</label>
              <input type="number" inputMode="numeric" value={height} onChange={(e) => setHeight(e.target.value)} className={field} />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-semibold">{L.activity[lang]}</label>
            <select value={activity} onChange={(e) => setActivity(e.target.value)} className={field}>
              {ACTIVITY_LEVELS.map((l) => (
                <option key={l.id} value={l.id}>
                  {l.label[lang]} — {l.desc[lang]}
                </option>
              ))}
            </select>
          </div>
        </div>

        {result && (
          <div className="mt-5 grid grid-cols-2 gap-3 border-t border-app pt-4">
            <div className="rounded-xl bg-card-hover p-3 text-center">
              <p className="text-xs font-medium text-muted-app">{L.bmr[lang]}</p>
              <p className="text-xl font-black">{result.bmr}</p>
            </div>
            <div className="rounded-xl bg-card-hover p-3 text-center">
              <p className="text-xs font-medium text-muted-app">{L.tdee[lang]}</p>
              <p className="text-xl font-black text-brand">{result.tdee}</p>
            </div>
          </div>
        )}
      </div>

      {/* Resultats */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold">{L.yourNeeds[lang]}</h3>
        {!result ? (
          <p className="rounded-2xl border border-app bg-card p-5 text-sm text-muted-app">{L.fillPrompt[lang]}</p>
        ) : (
          result.goals.map((g) => (
            <div key={g.id} className="rounded-2xl border border-app bg-card p-4">
              <div className="flex items-baseline justify-between gap-2">
                <h4 className="font-bold">{g.label[lang]}</h4>
                <p className="text-lg font-black text-brand">
                  {g.calories} <span className="text-xs font-medium text-muted-app">{L.perDay[lang]}</span>
                </p>
              </div>
              <p className="mt-1 text-xs text-muted-app">{g.desc[lang]}</p>
              <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                <div className="rounded-lg bg-card-hover p-2">
                  <p className="text-xs text-muted-app">{L.protein[lang]}</p>
                  <p className="font-bold">{g.proteinG} g</p>
                </div>
                <div className="rounded-lg bg-card-hover p-2">
                  <p className="text-xs text-muted-app">{L.carbs[lang]}</p>
                  <p className="font-bold">{g.carbsG} g</p>
                </div>
                <div className="rounded-lg bg-card-hover p-2">
                  <p className="text-xs text-muted-app">{L.fat[lang]}</p>
                  <p className="font-bold">{g.fatG} g</p>
                </div>
              </div>
            </div>
          ))
        )}
        <p className="text-xs text-muted-app">ℹ️ {L.formula[lang]}</p>
      </div>
    </div>
  );
}
