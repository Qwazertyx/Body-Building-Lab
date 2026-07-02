"use client";

import { useState } from "react";
import { useSettings } from "@/lib/i18n";
import { UI } from "@/lib/ui-strings";
import { useWorkoutLog } from "@/lib/workout-log";
import type { Machine } from "@/lib/types";

/** Formatte une charge : 0 kg => poids de corps. */
function formatWeight(weight: number, lang: "fr" | "en"): string {
  if (weight <= 0) return UI.log.bodyweight[lang];
  return `${weight} kg`;
}

export function MachineLog({ machine }: { machine: Machine }) {
  const { lang } = useSettings();
  const { addSet, lastSet, setsFor, deleteSet } = useWorkoutLog();

  const [open, setOpen] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");
  const [flash, setFlash] = useState(false);

  const last = lastSet(machine.id);
  const history = setsFor(machine.id);

  const submit = () => {
    const w = parseFloat(weight.replace(",", "."));
    const r = parseInt(reps, 10);
    if (Number.isNaN(r) || r <= 0) return;
    addSet({
      exerciseId: machine.id,
      exerciseName: machine.name[lang],
      weight: Number.isNaN(w) || w < 0 ? 0 : w,
      reps: r,
    });
    setReps("");
    setFlash(true);
    window.setTimeout(() => setFlash(false), 1200);
  };

  const field =
    "w-full rounded-lg border border-app bg-card px-3 py-2 text-app outline-none transition-colors focus:border-brand";

  return (
    <div className="rounded-xl border border-app bg-card-hover/50 p-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-[0.7rem] font-bold uppercase tracking-wide text-muted-app">
          📓 {UI.log.title[lang]}
        </p>
        {last && (
          <span className="text-xs font-medium text-muted-app">
            {UI.log.lastPerf[lang]} :{" "}
            <span className="font-bold text-app">
              {formatWeight(last.weight, lang)} × {last.reps}
            </span>
          </span>
        )}
      </div>

      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="mt-2 w-full rounded-lg border border-brand/40 bg-brand/10 px-3 py-2 text-sm font-bold text-brand transition-colors hover:bg-brand/20"
        >
          + {UI.log.logSet[lang]}
        </button>
      ) : (
        <div className="mt-2 space-y-2">
          <div className="flex items-end gap-2">
            <label className="flex-1">
              <span className="mb-1 block text-[0.7rem] font-semibold text-muted-app">
                {UI.log.weight[lang]}
              </span>
              <input
                type="number"
                inputMode="decimal"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="0"
                className={field}
              />
            </label>
            <label className="flex-1">
              <span className="mb-1 block text-[0.7rem] font-semibold text-muted-app">
                {UI.log.reps[lang]}
              </span>
              <input
                type="number"
                inputMode="numeric"
                value={reps}
                onChange={(e) => setReps(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && submit()}
                placeholder="8"
                className={field}
              />
            </label>
            <button
              onClick={submit}
              disabled={!reps}
              className="shrink-0 rounded-lg bg-brand px-4 py-2 text-sm font-bold text-white shadow-glow transition-colors hover:bg-brand-600 disabled:opacity-40"
            >
              {UI.log.add[lang]}
            </button>
          </div>

          <div className="flex items-center justify-between">
            {flash ? (
              <span className="text-xs font-semibold text-emerald-400">✓ {UI.log.added[lang]}</span>
            ) : (
              <span />
            )}
            <button
              onClick={() => setOpen(false)}
              className="text-xs font-semibold text-muted-app hover:text-app"
            >
              {UI.log.cancel[lang]}
            </button>
          </div>
        </div>
      )}

      {history.length > 0 && (
        <div className="mt-2 border-t border-app pt-2">
          <button
            onClick={() => setShowHistory((s) => !s)}
            className="flex w-full items-center justify-between text-xs font-semibold text-muted-app hover:text-app"
          >
            <span>
              {UI.log.history[lang]} ({history.length}{" "}
              {history.length > 1 ? UI.log.sets[lang] : UI.log.set[lang]})
            </span>
            <span>{showHistory ? "▾" : "▸"}</span>
          </button>
          {showHistory && (
            <ul className="mt-2 space-y-1">
              {history.slice(0, 12).map((s) => (
                <li
                  key={s.id}
                  className="flex items-center justify-between gap-2 rounded-md bg-card px-2 py-1 text-xs"
                >
                  <span className="text-muted-app">
                    {new Date(s.date).toLocaleDateString(lang === "fr" ? "fr-FR" : "en-GB", {
                      day: "2-digit",
                      month: "2-digit",
                    })}
                  </span>
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
          )}
        </div>
      )}
    </div>
  );
}
