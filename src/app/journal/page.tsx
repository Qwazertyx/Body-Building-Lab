"use client";

import { useMemo } from "react";
import Link from "next/link";
import { useSettings } from "@/lib/i18n";
import { UI } from "@/lib/ui-strings";
import { useWorkoutLog, type LogSet } from "@/lib/workout-log";

function formatWeight(weight: number, lang: "fr" | "en"): string {
  if (weight <= 0) return UI.log.bodyweight[lang];
  return `${weight} kg`;
}

/** Cle de jour (YYYY-MM-DD) a partir d'une date ISO. */
function dayKey(iso: string): string {
  return iso.slice(0, 10);
}

function dayLabel(key: string, lang: "fr" | "en"): string {
  const today = dayKey(new Date().toISOString());
  const yesterday = dayKey(new Date(Date.now() - 86_400_000).toISOString());
  if (key === today) return UI.log.today[lang];
  if (key === yesterday) return UI.log.yesterday[lang];
  return new Date(key + "T00:00:00").toLocaleDateString(lang === "fr" ? "fr-FR" : "en-GB", {
    weekday: "long",
    day: "2-digit",
    month: "long",
  });
}

export default function JournalPage() {
  const { lang } = useSettings();
  const { sets, ready, deleteSet, clearAll } = useWorkoutLog();

  // Regroupe par jour puis par exercice.
  const days = useMemo(() => {
    const byDay = new Map<string, LogSet[]>();
    for (const s of sets) {
      const k = dayKey(s.date);
      const arr = byDay.get(k);
      if (arr) arr.push(s);
      else byDay.set(k, [s]);
    }
    return [...byDay.entries()]
      .sort((a, b) => b[0].localeCompare(a[0]))
      .map(([key, daySets]) => {
        const byExercise = new Map<string, LogSet[]>();
        for (const s of daySets) {
          const arr = byExercise.get(s.exerciseId);
          if (arr) arr.push(s);
          else byExercise.set(s.exerciseId, [s]);
        }
        return { key, exercises: [...byExercise.values()] };
      });
  }, [sets]);

  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-start justify-between gap-3 pt-2">
        <div>
          <h1 className="text-3xl font-black tracking-tight sm:text-4xl">{UI.log.title[lang]} 📓</h1>
          <p className="mt-2 max-w-2xl text-sm text-muted-app">{UI.log.subtitle[lang]}</p>
        </div>
        {sets.length > 0 && (
          <button
            onClick={() => {
              if (window.confirm(UI.log.confirmClear[lang])) clearAll();
            }}
            className="shrink-0 rounded-lg border border-app bg-card px-3 py-1.5 text-sm font-semibold text-muted-app transition-colors hover:border-rose-500/40 hover:text-rose-400"
          >
            {UI.log.clearAll[lang]}
          </button>
        )}
      </header>

      {ready && sets.length === 0 && (
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-app bg-card p-10 text-center">
          <span className="text-4xl">🏋️</span>
          <p className="max-w-sm text-sm text-muted-app">{UI.log.empty[lang]}</p>
          <Link
            href="/"
            className="rounded-lg bg-brand px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-brand-600"
          >
            {UI.log.browseMuscles[lang]}
          </Link>
        </div>
      )}

      <div className="space-y-5">
        {days.map((day) => (
          <section key={day.key} className="rounded-2xl border border-app bg-card p-5">
            <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-brand">
              {dayLabel(day.key, lang)}
            </h2>
            <div className="space-y-3">
              {day.exercises.map((exSets) => (
                <div key={exSets[0].exerciseId}>
                  <h3 className="text-base font-bold">{exSets[0].exerciseName}</h3>
                  <ul className="mt-1.5 flex flex-wrap gap-2">
                    {exSets.map((s) => (
                      <li
                        key={s.id}
                        className="group flex items-center gap-1.5 rounded-lg bg-card-hover px-2.5 py-1 text-sm"
                      >
                        <span className="font-bold text-app">
                          {formatWeight(s.weight, lang)} × {s.reps}
                        </span>
                        <button
                          onClick={() => deleteSet(s.id)}
                          aria-label={UI.log.delete[lang]}
                          className="text-muted-app transition-colors hover:text-rose-400"
                        >
                          ✕
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <p className="rounded-xl border border-app bg-card p-3 text-center text-xs text-muted-app">
        ⚠️ {UI.disclaimer[lang]}
      </p>
    </div>
  );
}
