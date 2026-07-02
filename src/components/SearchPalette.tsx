"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useSettings } from "@/lib/i18n";
import { UI } from "@/lib/ui-strings";
import { MUSCLES } from "@/data/muscles";

interface SearchItem {
  kind: "muscle" | "exercise";
  href: string;
  label: string;
  sub: string;
  haystack: string;
}

function stripAccents(s: string): string {
  return s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

export function SearchPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const router = useRouter();
  const { lang } = useSettings();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Index de recherche (muscles + exercices), memoise par langue.
  const index = useMemo<SearchItem[]>(() => {
    const items: SearchItem[] = [];
    for (const m of MUSCLES) {
      items.push({
        kind: "muscle",
        href: `/muscle/${m.id}`,
        label: m.name[lang],
        sub: m.scientificName[lang],
        haystack: stripAccents(`${m.name.fr} ${m.name.en} ${m.scientificName.fr} ${m.scientificName.en}`),
      });
      for (const ex of m.machines) {
        items.push({
          kind: "exercise",
          href: `/muscle/${m.id}`,
          label: ex.name[lang],
          sub: m.name[lang],
          haystack: stripAccents(`${ex.name.fr} ${ex.name.en} ${ex.type.fr} ${ex.type.en}`),
        });
      }
    }
    return items;
  }, [lang]);

  const results = useMemo(() => {
    const q = stripAccents(query.trim());
    if (!q) return index.filter((i) => i.kind === "muscle");
    return index.filter((i) => i.haystack.includes(q)).slice(0, 24);
  }, [query, index]);

  // Reset a l'ouverture + focus.
  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
      // focus apres le rendu
      const id = window.setTimeout(() => inputRef.current?.focus(), 0);
      return () => window.clearTimeout(id);
    }
  }, [open]);

  useEffect(() => setActive(0), [query]);

  if (!open) return null;

  const go = (item: SearchItem) => {
    onClose();
    router.push(item.href);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (results[active]) go(results[active]);
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center bg-black/60 p-4 pt-[12vh] backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={UI.search.placeholder[lang]}
    >
      <div
        className="w-full max-w-lg overflow-hidden rounded-2xl border border-app bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 border-b border-app px-4">
          <span className="text-muted-app">🔍</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder={UI.search.placeholder[lang]}
            className="w-full bg-transparent py-3.5 text-app outline-none placeholder:text-muted-app"
          />
          <kbd className="hidden rounded border border-app px-1.5 py-0.5 text-[0.65rem] text-muted-app sm:block">
            ESC
          </kbd>
        </div>

        <ul className="max-h-[50vh] overflow-y-auto p-2">
          {results.length === 0 ? (
            <li className="px-3 py-6 text-center text-sm text-muted-app">
              {UI.search.noResults[lang]}
            </li>
          ) : (
            results.map((item, i) => (
              <li key={`${item.kind}-${item.href}-${i}`}>
                <button
                  onMouseEnter={() => setActive(i)}
                  onClick={() => go(item)}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors ${
                    i === active ? "bg-card-hover" : ""
                  }`}
                >
                  <span className="text-lg">{item.kind === "muscle" ? "💪" : "🏋️"}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-semibold text-app">
                      {item.label}
                    </span>
                    <span className="block truncate text-xs text-muted-app">{item.sub}</span>
                  </span>
                  <span className="shrink-0 text-[0.65rem] font-medium uppercase text-muted-app">
                    {item.kind === "muscle" ? UI.search.muscle[lang] : UI.search.exercise[lang]}
                  </span>
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
