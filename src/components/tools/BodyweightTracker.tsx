"use client";

import { useEffect, useMemo, useState } from "react";
import { useSettings } from "@/lib/i18n";
import { UI } from "@/lib/ui-strings";

interface Measure {
  date: string; // YYYY-MM-DD
  weight: number;
}

const STORAGE_KEY = "vico-bodyweight";

function load(): Measure[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (m) => m && typeof m.date === "string" && typeof m.weight === "number"
    );
  } catch {
    return [];
  }
}

/** Mini courbe SVG des mesures (chronologique). */
function Sparkline({ data }: { data: Measure[] }) {
  if (data.length < 2) return null;
  const w = 300;
  const h = 80;
  const pad = 6;
  const weights = data.map((d) => d.weight);
  const min = Math.min(...weights);
  const max = Math.max(...weights);
  const span = max - min || 1;
  const pts = data.map((d, i) => {
    const x = pad + (i / (data.length - 1)) * (w - 2 * pad);
    const y = pad + (1 - (d.weight - min) / span) * (h - 2 * pad);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="mt-3 h-20 w-full" preserveAspectRatio="none">
      <polyline
        points={pts.join(" ")}
        fill="none"
        stroke="#ff6b1a"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {data.map((d, i) => {
        const [x, y] = pts[i].split(",");
        return <circle key={i} cx={x} cy={y} r="2.5" fill="#ff6b1a" />;
      })}
    </svg>
  );
}

export function BodyweightTracker() {
  const { lang } = useSettings();
  const [measures, setMeasures] = useState<Measure[]>([]);
  const [ready, setReady] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    setMeasures(load());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(measures));
    } catch {
      /* ignore */
    }
  }, [measures, ready]);

  const sorted = useMemo(
    () => [...measures].sort((a, b) => a.date.localeCompare(b.date)),
    [measures]
  );

  const add = () => {
    const w = parseFloat(input.replace(",", "."));
    if (!w || w <= 0) return;
    const today = new Date().toISOString().slice(0, 10);
    setMeasures((prev) => {
      const others = prev.filter((m) => m.date !== today);
      return [...others, { date: today, weight: Math.round(w * 10) / 10 }];
    });
    setInput("");
  };

  const remove = (date: string) => setMeasures((prev) => prev.filter((m) => m.date !== date));

  const latest = sorted[sorted.length - 1];
  const first = sorted[0];
  const trend = latest && first ? Math.round((latest.weight - first.weight) * 10) / 10 : 0;

  const field =
    "w-full rounded-lg border border-app bg-card-hover px-3 py-2 text-app outline-none transition-colors focus:border-brand";

  return (
    <section className="rounded-2xl border border-app bg-card p-5">
      <h2 className="text-lg font-bold">📉 {UI.tools.bwTitle[lang]}</h2>
      <p className="mt-1 text-sm text-muted-app">{UI.tools.bwDesc[lang]}</p>

      <div className="mt-4 flex items-end gap-2">
        <label className="flex-1">
          <span className="mb-1.5 block text-sm font-semibold">{UI.tools.bwInput[lang]}</span>
          <input
            type="number"
            inputMode="decimal"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && add()}
            placeholder="75"
            className={field}
          />
        </label>
        <button
          onClick={add}
          disabled={!input}
          className="shrink-0 rounded-lg bg-brand px-4 py-2 text-sm font-bold text-white shadow-glow transition-colors hover:bg-brand-600 disabled:opacity-40"
        >
          {UI.tools.bwAdd[lang]}
        </button>
      </div>

      {ready && sorted.length === 0 && (
        <p className="mt-4 text-sm text-muted-app">{UI.tools.bwEmpty[lang]}</p>
      )}

      {sorted.length > 0 && (
        <>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-card-hover p-3 text-center">
              <p className="text-xs text-muted-app">{UI.tools.bwLatest[lang]}</p>
              <p className="text-xl font-black">{latest.weight} kg</p>
            </div>
            <div className="rounded-xl bg-card-hover p-3 text-center">
              <p className="text-xs text-muted-app">{UI.tools.bwTrend[lang]}</p>
              <p
                className={`text-xl font-black ${
                  trend > 0 ? "text-emerald-400" : trend < 0 ? "text-rose-400" : "text-app"
                }`}
              >
                {trend > 0 ? "+" : ""}
                {trend} kg
              </p>
            </div>
          </div>

          <Sparkline data={sorted} />

          <ul className="mt-3 space-y-1">
            {[...sorted].reverse().slice(0, 8).map((m) => (
              <li
                key={m.date}
                className="flex items-center justify-between rounded-md bg-card-hover px-3 py-1.5 text-sm"
              >
                <span className="text-muted-app">
                  {new Date(m.date + "T00:00:00").toLocaleDateString(
                    lang === "fr" ? "fr-FR" : "en-GB",
                    { day: "2-digit", month: "short" }
                  )}
                </span>
                <span className="font-bold">{m.weight} kg</span>
                <button
                  onClick={() => remove(m.date)}
                  aria-label="supprimer"
                  className="text-muted-app transition-colors hover:text-rose-400"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
