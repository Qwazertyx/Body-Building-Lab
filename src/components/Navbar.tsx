"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useSettings } from "@/lib/i18n";
import { UI } from "@/lib/ui-strings";
import { SearchPalette } from "@/components/SearchPalette";

const NAV = [
  { href: "/", key: "home" as const },
  { href: "/nutrition", key: "nutrition" as const },
  { href: "/mobilite", key: "mobility" as const },
  { href: "/outils", key: "tools" as const },
  { href: "/journal", key: "journal" as const },
  { href: "/parametres", key: "settings" as const },
];

export function Navbar() {
  const pathname = usePathname();
  const { lang, toggleLang, theme, toggleTheme } = useSettings();
  const [searchOpen, setSearchOpen] = useState(false);

  // Raccourci clavier Ctrl/Cmd + K pour ouvrir la recherche.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-app bg-card/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-2 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand text-lg font-black text-white shadow-glow">
            V
          </span>
          <span className="hidden text-lg font-extrabold tracking-tight sm:block">
            Vico<span className="text-brand">BBL</span>
          </span>
        </Link>

        <nav className="flex items-center gap-1 overflow-x-auto">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`whitespace-nowrap rounded-lg px-2.5 py-1.5 text-sm font-semibold transition-colors sm:px-3 ${
                isActive(item.href)
                  ? "bg-brand text-white"
                  : "text-muted-app hover:bg-card-hover hover:text-app"
              }`}
            >
              {UI.nav[item.key][lang]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={() => setSearchOpen(true)}
            aria-label={UI.search.open[lang]}
            title={UI.search.open[lang]}
            className="grid h-9 w-9 place-items-center rounded-lg border border-app bg-card text-base transition-colors hover:bg-card-hover"
          >
            🔍
          </button>
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Passer en clair" : "Passer en sombre"}
            title={theme === "dark" ? UI.settings.light[lang] : UI.settings.dark[lang]}
            className="grid h-9 w-9 place-items-center rounded-lg border border-app bg-card text-base transition-colors hover:bg-card-hover"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
          <button
            onClick={toggleLang}
            aria-label="Changer de langue"
            className="h-9 rounded-lg border border-app bg-card px-2.5 text-sm font-bold transition-colors hover:bg-card-hover"
          >
            {lang === "fr" ? "FR" : "EN"}
          </button>
        </div>
      </div>

      <SearchPalette open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
