"use client";

import { useSettings } from "@/lib/i18n";
import { UI } from "@/lib/ui-strings";
import type { Lang } from "@/lib/types";

export default function SettingsPage() {
  const { lang, setLang, theme, setTheme } = useSettings();

  return (
    <div className="mx-auto max-w-lg space-y-6">
      <header className="pt-2">
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">{UI.settings.title[lang]} ⚙️</h1>
      </header>

      <section className="rounded-2xl border border-app bg-card p-5">
        <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-muted-app">
          {UI.settings.language[lang]}
        </h2>
        <div className="inline-flex w-full rounded-lg border border-app bg-card-hover p-1">
          {(["fr", "en"] as Lang[]).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`flex-1 rounded-md px-4 py-2 text-sm font-semibold transition-colors ${
                lang === l ? "bg-brand text-white" : "text-muted-app"
              }`}
            >
              {l === "fr" ? `🇫🇷 ${UI.settings.french[lang]}` : `🇬🇧 ${UI.settings.english[lang]}`}
            </button>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-app bg-card p-5">
        <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-muted-app">
          {UI.settings.theme[lang]}
        </h2>
        <div className="inline-flex w-full rounded-lg border border-app bg-card-hover p-1">
          {(["dark", "light"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTheme(t)}
              className={`flex-1 rounded-md px-4 py-2 text-sm font-semibold transition-colors ${
                theme === t ? "bg-brand text-white" : "text-muted-app"
              }`}
            >
              {t === "dark" ? `🌙 ${UI.settings.dark[lang]}` : `☀️ ${UI.settings.light[lang]}`}
            </button>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-app bg-card p-5">
        <h2 className="mb-2 text-sm font-bold uppercase tracking-wide text-muted-app">
          {UI.settings.about[lang]}
        </h2>
        <p className="text-sm leading-relaxed text-app">{UI.settings.aboutText[lang]}</p>
      </section>
    </div>
  );
}
