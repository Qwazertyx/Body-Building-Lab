"use client";

import Link from "next/link";
import { useSettings } from "@/lib/i18n";

export default function OfflinePage() {
  const { lang } = useSettings();

  return (
    <div className="mx-auto flex max-w-md flex-col items-center gap-4 py-16 text-center">
      <span className="text-5xl">📡</span>
      <h1 className="text-2xl font-black tracking-tight">
        {lang === "fr" ? "Tu es hors-ligne" : "You are offline"}
      </h1>
      <p className="text-sm text-muted-app">
        {lang === "fr"
          ? "Cette page n'a pas encore ete consultee, elle n'est donc pas disponible sans connexion. Les pages deja visitees restent accessibles."
          : "This page hasn't been visited yet, so it isn't available offline. Pages you've already opened stay accessible."}
      </p>
      <Link
        href="/"
        className="rounded-lg bg-brand px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-brand-600"
      >
        {lang === "fr" ? "Retour a l'accueil" : "Back home"}
      </Link>
    </div>
  );
}
