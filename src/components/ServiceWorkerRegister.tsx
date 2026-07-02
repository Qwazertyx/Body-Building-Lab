"use client";

import { useEffect } from "react";

/**
 * Enregistre le service worker (PWA) en production uniquement.
 * En dev, le SW interfererait avec le hot-reload de Next.
 */
export function ServiceWorkerRegister() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("serviceWorker" in navigator)) return;
    if (process.env.NODE_ENV !== "production") return;

    const register = () => {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        /* enregistrement impossible : on ignore silencieusement */
      });
    };

    if (document.readyState === "complete") register();
    else window.addEventListener("load", register, { once: true });
  }, []);

  return null;
}
