"use client";

import { useSettings } from "@/lib/i18n";
import { UI } from "@/lib/ui-strings";
import { TDEECalculator } from "@/components/TDEECalculator";
import { NUTRITION_SECTIONS } from "@/data/nutrition";

export default function NutritionPage() {
  const { lang } = useSettings();

  return (
    <div className="space-y-8">
      <header className="pt-2">
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
          {UI.nav.nutrition[lang]} 🥗
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-app">
          {lang === "fr"
            ? "Calcule tes besoins caloriques et comprends comment manger pour ton objectif : seche, maintien ou prise de masse."
            : "Calculate your calorie needs and learn how to eat for your goal: cut, maintain or bulk."}
        </p>
      </header>

      <section>
        <TDEECalculator />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          {lang === "fr" ? "Comprendre la nutrition" : "Understanding nutrition"}
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {NUTRITION_SECTIONS.map((s) => (
            <article key={s.id} className="rounded-2xl border border-app bg-card p-5">
              <h3 className="text-lg font-bold text-brand">{s.title[lang]}</h3>
              <p className="mt-2 text-sm leading-relaxed text-app">{s.body[lang]}</p>
              {s.points && (
                <ul className="mt-3 space-y-1.5">
                  {s.points[lang].map((p, i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted-app">
                      <span className="text-brand">›</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      <p className="rounded-xl border border-app bg-card p-3 text-center text-xs text-muted-app">
        ⚠️ {UI.disclaimer[lang]}
      </p>
    </div>
  );
}
