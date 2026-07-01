"use client";

import { useSettings } from "@/lib/i18n";
import { UI } from "@/lib/ui-strings";
import type { Machine } from "@/lib/types";

const LEVEL_COLORS: Record<Machine["level"], string> = {
  debutant: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  intermediaire: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  avance: "bg-rose-500/15 text-rose-400 border-rose-500/30",
};

export function MachineCard({ machine, rank }: { machine: Machine; rank: number }) {
  const { lang } = useSettings();

  return (
    <article className="animate-fade-in-up overflow-hidden rounded-2xl border border-app bg-card">
      <div className="flex items-start gap-3 border-b border-app p-4">
        <span
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand text-sm font-black text-white shadow-glow"
          aria-label={`${UI.muscle.rankBadge[lang]} #${rank}`}
        >
          #{rank}
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-bold leading-tight">{machine.name[lang]}</h3>
          <div className="mt-1.5 flex flex-wrap items-center gap-2 text-xs">
            <span className="rounded-md border border-app bg-card-hover px-2 py-0.5 font-medium text-muted-app">
              {machine.type[lang]}
            </span>
            <span className={`rounded-md border px-2 py-0.5 font-semibold ${LEVEL_COLORS[machine.level]}`}>
              {UI.levels[machine.level][lang]}
            </span>
            <span className="rounded-md border border-app bg-card-hover px-2 py-0.5 font-medium text-muted-app">
              {UI.muscle.repRange[lang]}: {machine.repRange[lang]}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-4 p-4">
        <div className="rounded-xl border border-brand/30 bg-brand/5 p-3">
          <p className="mb-1 text-xs font-bold uppercase tracking-wide text-brand">
            {UI.muscle.why[lang]}
          </p>
          <p className="text-sm text-app">{machine.whyRanked[lang]}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="mb-1.5 text-xs font-bold uppercase tracking-wide text-emerald-400">
              ✓ {UI.muscle.pros[lang]}
            </p>
            <ul className="space-y-1">
              {machine.pros[lang].map((p, i) => (
                <li key={i} className="flex gap-1.5 text-sm text-muted-app">
                  <span className="text-emerald-400">+</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-1.5 text-xs font-bold uppercase tracking-wide text-rose-400">
              ✕ {UI.muscle.cons[lang]}
            </p>
            <ul className="space-y-1">
              {machine.cons[lang].map((c, i) => (
                <li key={i} className="flex gap-1.5 text-sm text-muted-app">
                  <span className="text-rose-400">−</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <p className="mb-1.5 text-xs font-bold uppercase tracking-wide text-muted-app">
            💡 {UI.muscle.tips[lang]}
          </p>
          <ul className="space-y-1">
            {machine.tips[lang].map((t, i) => (
              <li key={i} className="flex gap-1.5 text-sm text-app">
                <span className="text-brand">›</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
