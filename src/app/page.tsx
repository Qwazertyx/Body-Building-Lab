"use client";

import Link from "next/link";
import { BodyMap } from "@/components/BodyMap";
import { useSettings } from "@/lib/i18n";
import { UI } from "@/lib/ui-strings";
import { FRONT_MUSCLES, BACK_MUSCLES } from "@/data/muscles";
import type { Muscle } from "@/lib/types";

function MuscleChips({ title, muscles, lang }: { title: string; muscles: Muscle[]; lang: "fr" | "en" }) {
  return (
    <div>
      <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-muted-app">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {muscles.map((m) => (
          <Link
            key={m.id}
            href={`/muscle/${m.id}`}
            className="rounded-full border border-app bg-card px-3 py-1.5 text-sm font-medium transition-colors hover:border-brand hover:bg-card-hover hover:text-brand"
          >
            {m.name[lang]}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  const { lang } = useSettings();

  return (
    <div className="space-y-8">
      <section className="pt-2 text-center">
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
          {UI.home.heroTitle[lang]} <span className="text-brand">💪</span>
        </h1>
        <p className="mx-auto mt-2 max-w-xl text-sm text-muted-app sm:text-base">
          {UI.home.heroSubtitle[lang]}
        </p>
      </section>

      <section className="rounded-2xl border border-app bg-card p-4 sm:p-6">
        <BodyMap />
        <p className="mt-4 text-center text-xs text-muted-app">{UI.home.selectPrompt[lang]}</p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-bold">{UI.home.allMuscles[lang]}</h2>
        <MuscleChips title={UI.home.front[lang]} muscles={FRONT_MUSCLES} lang={lang} />
        <MuscleChips title={UI.home.back[lang]} muscles={BACK_MUSCLES} lang={lang} />
      </section>

      <p className="rounded-xl border border-app bg-card p-3 text-center text-xs text-muted-app">
        ⚠️ {UI.disclaimer[lang]}
      </p>
    </div>
  );
}
