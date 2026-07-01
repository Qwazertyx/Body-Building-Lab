"use client";

import { useState } from "react";
import { useSettings } from "@/lib/i18n";
import { UI } from "@/lib/ui-strings";
import { ROUTINES, type MobilityKind, type BodyZone, type Duration, type Difficulty } from "@/data/mobility";

type Filters = {
  kind: MobilityKind | "all";
  zone: BodyZone | "all";
  duration: Duration | "all";
  difficulty: Difficulty | "all";
};

const LABELS = {
  kind: {
    all: { fr: "Tout", en: "All" },
    echauffement: { fr: "Echauffement", en: "Warm-up" },
    etirement: { fr: "Etirement", en: "Stretching" },
  },
  zone: {
    all: { fr: "Tout", en: "All" },
    haut: { fr: "Haut du corps", en: "Upper body" },
    bas: { fr: "Bas du corps", en: "Lower body" },
    complet: { fr: "Complet", en: "Full body" },
  },
  duration: {
    all: { fr: "Tout", en: "All" },
    court: { fr: "Court", en: "Short" },
    long: { fr: "Long", en: "Long" },
  },
  difficulty: {
    all: { fr: "Tout", en: "All" },
    facile: { fr: "Facile", en: "Easy" },
    difficile: { fr: "Difficile", en: "Hard" },
  },
} as const;

function FilterRow<T extends string>({
  title,
  value,
  options,
  onChange,
  render,
}: {
  title: string;
  value: T;
  options: T[];
  onChange: (v: T) => void;
  render: (v: T) => string;
}) {
  return (
    <div>
      <p className="mb-1.5 text-xs font-bold uppercase tracking-wide text-muted-app">{title}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o}
            onClick={() => onChange(o)}
            className={`rounded-lg border px-3 py-1.5 text-sm font-semibold transition-colors ${
              value === o
                ? "border-brand bg-brand text-white"
                : "border-app bg-card text-muted-app hover:text-app"
            }`}
          >
            {render(o)}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function MobilityPage() {
  const { lang } = useSettings();
  const [filters, setFilters] = useState<Filters>({
    kind: "all",
    zone: "all",
    duration: "all",
    difficulty: "all",
  });

  const filtered = ROUTINES.filter(
    (r) =>
      (filters.kind === "all" || r.kind === filters.kind) &&
      (filters.zone === "all" || r.zone === filters.zone) &&
      (filters.duration === "all" || r.duration === filters.duration) &&
      (filters.difficulty === "all" || r.difficulty === filters.difficulty)
  );

  return (
    <div className="space-y-6">
      <header className="pt-2">
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">{UI.nav.mobility[lang]} 🤸</h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-app">
          {lang === "fr"
            ? "Des routines pretes a l'emploi. L'echauffement se fait AVANT (dynamique), les etirements APRES la seance (statiques)."
            : "Ready-to-use routines. Warm up BEFORE (dynamic), stretch AFTER the session (static)."}
        </p>
      </header>

      <section className="space-y-4 rounded-2xl border border-app bg-card p-5">
        <FilterRow
          title={lang === "fr" ? "Type" : "Type"}
          value={filters.kind}
          options={["all", "echauffement", "etirement"]}
          onChange={(v) => setFilters((f) => ({ ...f, kind: v }))}
          render={(v) => LABELS.kind[v][lang]}
        />
        <FilterRow
          title={lang === "fr" ? "Zone" : "Zone"}
          value={filters.zone}
          options={["all", "haut", "bas", "complet"]}
          onChange={(v) => setFilters((f) => ({ ...f, zone: v }))}
          render={(v) => LABELS.zone[v][lang]}
        />
        <FilterRow
          title={lang === "fr" ? "Duree" : "Duration"}
          value={filters.duration}
          options={["all", "court", "long"]}
          onChange={(v) => setFilters((f) => ({ ...f, duration: v }))}
          render={(v) => LABELS.duration[v][lang]}
        />
        <FilterRow
          title={lang === "fr" ? "Difficulte" : "Difficulty"}
          value={filters.difficulty}
          options={["all", "facile", "difficile"]}
          onChange={(v) => setFilters((f) => ({ ...f, difficulty: v }))}
          render={(v) => LABELS.difficulty[v][lang]}
        />
      </section>

      <p className="text-sm text-muted-app">
        {filtered.length}{" "}
        {lang === "fr"
          ? filtered.length > 1
            ? "routines trouvees"
            : "routine trouvee"
          : filtered.length > 1
            ? "routines found"
            : "routine found"}
      </p>

      <section className="grid gap-4 md:grid-cols-2">
        {filtered.map((r) => (
          <article key={r.id} className="animate-fade-in-up rounded-2xl border border-app bg-card p-5">
            <div className="mb-2 flex flex-wrap gap-1.5">
              <span className="rounded-md bg-brand/15 px-2 py-0.5 text-xs font-bold text-brand">
                {LABELS.kind[r.kind][lang]}
              </span>
              <span className="rounded-md border border-app bg-card-hover px-2 py-0.5 text-xs font-medium text-muted-app">
                {LABELS.zone[r.zone][lang]}
              </span>
              <span className="rounded-md border border-app bg-card-hover px-2 py-0.5 text-xs font-medium text-muted-app">
                {LABELS.duration[r.duration][lang]}
              </span>
              <span className="rounded-md border border-app bg-card-hover px-2 py-0.5 text-xs font-medium text-muted-app">
                {LABELS.difficulty[r.difficulty][lang]}
              </span>
            </div>
            <h3 className="text-lg font-bold">{r.title[lang]}</h3>
            <p className="mt-1 text-sm text-muted-app">{r.goal[lang]}</p>

            <ul className="mt-3 space-y-2">
              {r.exercises.map((ex, i) => (
                <li key={i} className="rounded-lg bg-card-hover p-2.5">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-semibold text-app">{ex.name[lang]}</span>
                    <span className="shrink-0 text-xs font-bold text-brand">{ex.dose[lang]}</span>
                  </div>
                  <p className="mt-0.5 text-xs text-muted-app">{ex.detail[lang]}</p>
                </li>
              ))}
            </ul>

            <div className="mt-3 border-t border-app pt-3">
              <ul className="space-y-1">
                {r.advice[lang].map((a, i) => (
                  <li key={i} className="flex gap-1.5 text-xs text-muted-app">
                    <span className="text-brand">💡</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <p className="rounded-xl border border-app bg-card p-3 text-center text-xs text-muted-app">
        ⚠️ {UI.disclaimer[lang]}
      </p>
    </div>
  );
}
