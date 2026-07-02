"use client";

import { useSettings } from "@/lib/i18n";
import { UI } from "@/lib/ui-strings";
import { OneRepMax } from "@/components/tools/OneRepMax";
import { PlateCalculator } from "@/components/tools/PlateCalculator";
import { BodyweightTracker } from "@/components/tools/BodyweightTracker";
import { SessionGenerator } from "@/components/tools/SessionGenerator";

export default function ToolsPage() {
  const { lang } = useSettings();

  return (
    <div className="space-y-6">
      <header className="pt-2">
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">{UI.tools.title[lang]} 🧰</h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-app">{UI.tools.subtitle[lang]}</p>
      </header>

      <SessionGenerator />

      <div className="grid gap-6 lg:grid-cols-2">
        <OneRepMax />
        <PlateCalculator />
      </div>

      <BodyweightTracker />

      <p className="rounded-xl border border-app bg-card p-3 text-center text-xs text-muted-app">
        ⚠️ {UI.disclaimer[lang]}
      </p>
    </div>
  );
}
