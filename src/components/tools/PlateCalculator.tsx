"use client";

import { useMemo, useState } from "react";
import { useSettings } from "@/lib/i18n";
import { UI } from "@/lib/ui-strings";

const PLATES = [25, 20, 15, 10, 5, 2.5, 1.25];
const BARS = [20, 15, 10];

// Couleurs indicatives par disque (style olympique).
const PLATE_COLOR: Record<number, string> = {
  25: "bg-rose-500/80",
  20: "bg-blue-500/80",
  15: "bg-amber-500/80",
  10: "bg-emerald-500/80",
  5: "bg-neutral-300/80",
  2.5: "bg-neutral-400/80",
  1.25: "bg-neutral-500/80",
};

export function PlateCalculator() {
  const { lang } = useSettings();
  const [target, setTarget] = useState("60");
  const [bar, setBar] = useState(20);

  const result = useMemo(() => {
    const t = parseFloat(target.replace(",", "."));
    if (!t || t <= 0) return null;
    if (t < bar) return { error: "low" as const };
    let perSide = (t - bar) / 2;
    const plates: number[] = [];
    for (const p of PLATES) {
      while (perSide >= p - 1e-9) {
        plates.push(p);
        perSide -= p;
      }
    }
    const remainder = Math.round(perSide * 100) / 100;
    return { plates, remainder };
  }, [target, bar]);

  const field =
    "w-full rounded-lg border border-app bg-card-hover px-3 py-2 text-app outline-none transition-colors focus:border-brand";

  return (
    <section className="rounded-2xl border border-app bg-card p-5">
      <h2 className="text-lg font-bold">⚖️ {UI.tools.plateTitle[lang]}</h2>
      <p className="mt-1 text-sm text-muted-app">{UI.tools.plateDesc[lang]}</p>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <label>
          <span className="mb-1.5 block text-sm font-semibold">{UI.tools.targetWeight[lang]}</span>
          <input
            type="number"
            inputMode="decimal"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            className={field}
          />
        </label>
        <label>
          <span className="mb-1.5 block text-sm font-semibold">{UI.tools.barWeight[lang]}</span>
          <select value={bar} onChange={(e) => setBar(Number(e.target.value))} className={field}>
            {BARS.map((b) => (
              <option key={b} value={b}>
                {b} kg
              </option>
            ))}
          </select>
        </label>
      </div>

      {result && "error" in result && (
        <p className="mt-4 rounded-lg bg-rose-500/10 p-3 text-sm text-rose-400">
          {UI.tools.plateTooLow[lang]}
        </p>
      )}

      {result && !("error" in result) && (
        <div className="mt-4">
          <p className="mb-2 text-xs font-bold uppercase tracking-wide text-muted-app">
            {UI.tools.perSide[lang]}
          </p>
          {result.plates.length === 0 ? (
            <p className="text-sm text-muted-app">—</p>
          ) : (
            <>
              {/* Visuel de la barre */}
              <div className="flex items-center gap-0.5 overflow-x-auto rounded-lg bg-card-hover p-3">
                <div className="h-1.5 w-6 shrink-0 rounded bg-neutral-400" />
                {result.plates.map((p, i) => (
                  <div
                    key={i}
                    className={`flex shrink-0 items-center justify-center rounded-sm ${PLATE_COLOR[p]}`}
                    style={{ width: 14, height: 34 + p }}
                    title={`${p} kg`}
                  />
                ))}
                <div className="h-1.5 flex-1 min-w-[24px] rounded bg-neutral-400" />
              </div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {result.plates.map((p, i) => (
                  <span
                    key={i}
                    className="rounded-md border border-app bg-card-hover px-2 py-0.5 text-sm font-bold"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </>
          )}
          {result.remainder > 0 && (
            <p className="mt-2 text-xs text-amber-400">
              {UI.tools.remainder[lang]} : {result.remainder} kg — {UI.tools.plateImpossible[lang]}
            </p>
          )}
        </div>
      )}
    </section>
  );
}
