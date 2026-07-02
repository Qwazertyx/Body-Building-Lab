"use client";

import { useState } from "react";
import Link from "next/link";
import { useSettings } from "@/lib/i18n";
import { UI } from "@/lib/ui-strings";
import { getMuscle } from "@/data/muscles";

type SplitKey = "full" | "upperLower" | "ppl";

interface Day {
  label: { fr: string; en: string };
  muscleIds: string[];
}

const SPLITS: Record<SplitKey, Day[]> = {
  full: [
    {
      label: { fr: "Full-body", en: "Full-body" },
      muscleIds: ["pectoraux", "grand-dorsal", "quadriceps", "ischio-jambiers", "deltoides", "abdominaux"],
    },
  ],
  upperLower: [
    { label: { fr: "Haut du corps", en: "Upper body" }, muscleIds: ["pectoraux", "grand-dorsal", "deltoides", "biceps", "triceps"] },
    { label: { fr: "Bas du corps", en: "Lower body" }, muscleIds: ["quadriceps", "ischio-jambiers", "fessiers", "mollets", "abdominaux"] },
  ],
  ppl: [
    { label: { fr: "Push (poussee)", en: "Push" }, muscleIds: ["pectoraux", "deltoides", "triceps"] },
    { label: { fr: "Pull (tirage)", en: "Pull" }, muscleIds: ["grand-dorsal", "trapezes", "biceps"] },
    { label: { fr: "Legs (jambes)", en: "Legs" }, muscleIds: ["quadriceps", "ischio-jambiers", "fessiers", "mollets"] },
  ],
};

const SPLIT_LABELS: Record<SplitKey, keyof typeof UI.tools> = {
  full: "splitFull",
  upperLower: "splitUpperLower",
  ppl: "splitPPL",
};

export function SessionGenerator() {
  const { lang } = useSettings();
  const [split, setSplit] = useState<SplitKey>("ppl");

  const days = SPLITS[split];

  return (
    <section className="rounded-2xl border border-app bg-card p-5">
      <h2 className="text-lg font-bold">🧩 {UI.tools.genTitle[lang]}</h2>
      <p className="mt-1 text-sm text-muted-app">{UI.tools.genDesc[lang]}</p>

      <div className="mt-4">
        <p className="mb-1.5 text-sm font-semibold">{UI.tools.genSplit[lang]}</p>
        <div className="flex flex-wrap gap-2">
          {(Object.keys(SPLITS) as SplitKey[]).map((key) => (
            <button
              key={key}
              onClick={() => setSplit(key)}
              className={`rounded-lg border px-3 py-1.5 text-sm font-semibold transition-colors ${
                split === key
                  ? "border-brand bg-brand text-white"
                  : "border-app bg-card-hover text-muted-app hover:text-app"
              }`}
            >
              {UI.tools[SPLIT_LABELS[key]][lang]}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {days.map((day, di) => (
          <div key={di} className="rounded-xl border border-app bg-card-hover/40 p-4">
            <h3 className="mb-3 flex items-center gap-2 text-base font-bold">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-brand text-xs font-black text-white">
                {di + 1}
              </span>
              {day.label[lang]}
            </h3>
            <ul className="space-y-2">
              {day.muscleIds.map((id) => {
                const muscle = getMuscle(id);
                if (!muscle) return null;
                const top = muscle.machines[0];
                return (
                  <li key={id} className="rounded-lg bg-card p-2.5">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="text-sm font-bold text-brand">{muscle.name[lang]}</span>
                      <span className="shrink-0 text-[0.7rem] font-medium text-muted-app">
                        {UI.tools.genSets[lang]}
                      </span>
                    </div>
                    {top && <p className="mt-0.5 text-sm text-app">{top.name[lang]}</p>}
                    <Link
                      href={`/muscle/${id}`}
                      className="mt-1 inline-block text-xs font-semibold text-muted-app underline-offset-2 hover:text-brand hover:underline"
                    >
                      {UI.tools.genOpen[lang]} →
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
