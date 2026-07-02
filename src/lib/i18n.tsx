"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import type { Lang, LocalizedText, LocalizedList } from "./types";

type Theme = "dark" | "light";

interface SettingsContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
}

const SettingsContext = createContext<SettingsContextValue | null>(null);

const LANG_KEY = "vico-lang";
const THEME_KEY = "vico-theme";

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");
  const [theme, setThemeState] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  // Charge les preferences depuis localStorage au montage.
  useEffect(() => {
    try {
      const storedLang = window.localStorage.getItem(LANG_KEY) as Lang | null;
      const storedTheme = window.localStorage.getItem(THEME_KEY) as Theme | null;
      if (storedLang === "fr" || storedLang === "en") setLangState(storedLang);
      if (storedTheme === "dark" || storedTheme === "light") setThemeState(storedTheme);
    } catch {
      /* localStorage indisponible */
    }
    setMounted(true);
  }, []);

  // Applique le theme sur <html> et persiste.
  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    // Les variables du theme clair vivent sous `.light`, celles du sombre sous `:root`/`.dark`.
    // Il faut donc basculer les DEUX classes, pas seulement `dark`.
    if (theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
    try {
      window.localStorage.setItem(THEME_KEY, theme);
    } catch {
      /* ignore */
    }
  }, [theme, mounted]);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem(LANG_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang, mounted]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const toggleLang = useCallback(() => setLangState((p) => (p === "fr" ? "en" : "fr")), []);
  const setTheme = useCallback((t: Theme) => setThemeState(t), []);
  const toggleTheme = useCallback(() => setThemeState((p) => (p === "dark" ? "light" : "dark")), []);

  return (
    <SettingsContext.Provider value={{ lang, setLang, toggleLang, theme, setTheme, toggleTheme }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings(): SettingsContextValue {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error("useSettings doit etre utilise dans SettingsProvider");
  return ctx;
}

/** Resout une chaine bilingue vers la langue courante. */
export function useT() {
  const { lang } = useSettings();
  const t = useCallback(
    (text: LocalizedText) => text[lang],
    [lang]
  );
  const tl = useCallback(
    (list: LocalizedList) => list[lang],
    [lang]
  );
  return { t, tl, lang };
}
