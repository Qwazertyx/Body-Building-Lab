"use client";

import { useMemo, useState } from "react";
import { useSettings } from "@/lib/i18n";
import { UI } from "@/lib/ui-strings";

const PERCENTS = [100, 95, 90, 85, 80, 75, 70, 65, 60];

export function OneRepMax() {
  const { lang } = useSettings();
  const [weight, setWeight] = useState("60");
  const [reps, setReps] = useState("5");

  const oneRm = useMemo(() => {
    const w = parseFloat(weight.replace(",", "."));
    const r = parseInt(reps, 10);
    if (!w || !r || w <= 0 || r <= 0) return null;
    if (r === 1) return Math.round(w);
    // Moyenne Epley + Brzycki pour lisser.
    const epley = w * (1 + r / 30);
    const brzycki = r < 37 ? (w * 36) / (37 - r) : epley;
    return Math.round((epley + brzycki) / 2);
  }, [weight, reps]);

  const field =
    "w-full rounded-lg border border-app bg-card-hover px-3 py-2 text-app outline-none transition-colors focus:border-brand";

  return (
    <section className="rounded-2xl border border-app bg-card p-5">
      <h2 className="text-lg font-bold">🏋️ {UI.tools.oneRmTitle[lang]}</h2>
      <p className="mt-1 text-sm text-muted-app">{UI.tools.oneRmDesc[lang]}</p>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <label>
          <span className="mb-1.5 block text-sm font-semibold">{UI.tools.weightLifted[lang]}</span>
          <input
            type="number"
            inputMode="decimal"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className={field}
          />
        </label>
        <label>
          <span className="mb-1.5 block text-sm font-semibold">{UI.tools.repsDone[lang]}</span>
          <input
            type="number"
            inputMode="numeric"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
            className={field}
          />
        </label>
      </div>

      {oneRm && (
        <>
          <div className="mt-4 rounded-xl bg-brand/10 p-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand">
              {UI.tools.estimated1rm[lang]}
            </p>
            <p className="text-3xl font-black text-brand">{oneRm} kg</p>
          </div>

          <p className="mt-4 mb-2 text-xs font-bold uppercase tracking-wide text-muted-app">
            {UI.tools.percentTable[lang]}
          </p>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-3">
            {PERCENTS.map((p) => (
              <div key={p} className="rounded-lg bg-card-hover p-2 text-center">
                <p className="text-xs text-muted-app">{p}%</p>
                <p className="font-bold">{Math.round((oneRm * p) / 100 / 2.5) * 2.5} kg</p>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
