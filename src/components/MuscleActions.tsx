"use client";

import { useState } from "react";
import { useSettings } from "@/lib/i18n";
import { UI } from "@/lib/ui-strings";
import { useFavorites } from "@/lib/favorites";
import type { Muscle } from "@/lib/types";

export function MuscleActions({ muscle }: { muscle: Muscle }) {
  const { lang } = useSettings();
  const { isFavorite, toggle } = useFavorites();
  const [shared, setShared] = useState(false);

  const fav = isFavorite(muscle.id);

  const share = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const data = {
      title: `${muscle.name[lang]} — VicoBBL`,
      text: muscle.tagline[lang],
      url,
    };
    try {
      if (navigator.share) {
        await navigator.share(data);
        return;
      }
      await navigator.clipboard.writeText(url);
      setShared(true);
      window.setTimeout(() => setShared(false), 1800);
    } catch {
      /* partage annule ou indisponible */
    }
  };

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      <button
        onClick={() => toggle(muscle.id)}
        aria-pressed={fav}
        className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm font-semibold transition-colors ${
          fav
            ? "border-brand bg-brand/10 text-brand"
            : "border-app bg-card text-muted-app hover:text-app"
        }`}
      >
        <span>{fav ? "★" : "☆"}</span>
        {fav ? UI.favorites.saved[lang] : UI.favorites.save[lang]}
      </button>
      <button
        onClick={share}
        className="inline-flex items-center gap-1.5 rounded-lg border border-app bg-card px-3 py-1.5 text-sm font-semibold text-muted-app transition-colors hover:text-app"
      >
        <span>🔗</span>
        {shared ? UI.favorites.linkCopied[lang] : UI.favorites.share[lang]}
      </button>
    </div>
  );
}
