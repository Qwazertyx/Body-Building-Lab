"use client";

import Link from "next/link";
import { useSettings } from "@/lib/i18n";
import { UI } from "@/lib/ui-strings";
import { MachineCard } from "@/components/MachineCard";
import type { Muscle } from "@/lib/types";

function InfoList({ title, items, accent }: { title: string; items: string[]; accent: string }) {
  return (
    <div className="rounded-2xl border border-app bg-card p-4">
      <h3 className={`mb-2 text-sm font-bold uppercase tracking-wide ${accent}`}>{title}</h3>
      <ul className="space-y-1.5">
        {items.map((it, i) => (
          <li key={i} className="flex gap-2 text-sm text-app">
            <span className={accent}>•</span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function MuscleDetail({ muscle }: { muscle: Muscle }) {
  const { lang } = useSettings();

  return (
    <div className="space-y-6">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-app transition-colors hover:text-brand"
      >
        ← {UI.muscle.back[lang]}
      </Link>

      <header className="rounded-2xl border border-app bg-gradient-to-br from-brand/10 to-transparent p-5 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand">
          {muscle.scientificName[lang]}
        </p>
        <h1 className="mt-1 text-3xl font-black tracking-tight sm:text-4xl">{muscle.name[lang]}</h1>
        <p className="mt-2 text-base font-medium text-muted-app">{muscle.tagline[lang]}</p>
        <p className="mt-3 text-sm leading-relaxed text-app">{muscle.description[lang]}</p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        <InfoList title={UI.muscle.functions[lang]} items={muscle.functions[lang]} accent="text-brand" />
        <InfoList
          title={UI.muscle.trainingTips[lang]}
          items={muscle.trainingTips[lang]}
          accent="text-emerald-400"
        />
        <InfoList
          title={UI.muscle.commonMistakes[lang]}
          items={muscle.commonMistakes[lang]}
          accent="text-rose-400"
        />
        <div className="rounded-2xl border border-app bg-card p-4">
          <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-amber-400">
            {UI.muscle.volume[lang]}
          </h3>
          <p className="text-sm text-app">{muscle.volumeAdvice[lang]}</p>
        </div>
      </div>

      <section>
        <div className="mb-1 flex items-baseline gap-2">
          <h2 className="text-2xl font-bold">{UI.muscle.bestMachines[lang]}</h2>
        </div>
        <p className="mb-4 text-sm text-muted-app">{UI.muscle.rankExplain[lang]}</p>
        <div className="space-y-4">
          {muscle.machines.map((machine, i) => (
            <MachineCard key={machine.id} machine={machine} rank={i + 1} />
          ))}
        </div>
      </section>

      <p className="rounded-xl border border-app bg-card p-3 text-center text-xs text-muted-app">
        ⚠️ {UI.disclaimer[lang]}
      </p>
    </div>
  );
}
