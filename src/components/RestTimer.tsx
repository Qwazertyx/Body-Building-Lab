"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useSettings } from "@/lib/i18n";
import { UI } from "@/lib/ui-strings";

const PRESETS = [60, 90, 120, 180];

function fmt(total: number): string {
  const s = Math.max(0, total);
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${r.toString().padStart(2, "0")}`;
}

export function RestTimer() {
  const { lang } = useSettings();
  const [open, setOpen] = useState(false);
  const [duration, setDuration] = useState(90);
  const [remaining, setRemaining] = useState(90);
  const [running, setRunning] = useState(false);
  const [finished, setFinished] = useState(false);

  const endRef = useRef<number | null>(null);
  const audioRef = useRef<AudioContext | null>(null);

  const beep = useCallback(() => {
    try {
      if (!audioRef.current) {
        const Ctx =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
        if (Ctx) audioRef.current = new Ctx();
      }
      const ctx = audioRef.current;
      if (!ctx) return;
      // Trois bips courts.
      [0, 0.25, 0.5].forEach((offset) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.value = 880;
        gain.gain.setValueAtTime(0.001, ctx.currentTime + offset);
        gain.gain.exponentialRampToValueAtTime(0.3, ctx.currentTime + offset + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + offset + 0.18);
        osc.connect(gain).connect(ctx.destination);
        osc.start(ctx.currentTime + offset);
        osc.stop(ctx.currentTime + offset + 0.2);
      });
    } catch {
      /* audio indisponible */
    }
  }, []);

  // Boucle de decompte basee sur un timestamp de fin (precis meme si l'onglet ralentit).
  useEffect(() => {
    if (!running) return;
    const tick = () => {
      if (endRef.current == null) return;
      const left = Math.round((endRef.current - Date.now()) / 1000);
      if (left <= 0) {
        setRemaining(0);
        setRunning(false);
        setFinished(true);
        endRef.current = null;
        beep();
        if ("vibrate" in navigator) navigator.vibrate([200, 100, 200]);
      } else {
        setRemaining(left);
      }
    };
    tick();
    const id = window.setInterval(tick, 250);
    return () => window.clearInterval(id);
  }, [running, beep]);

  const start = () => {
    // Debloque l'audio sur geste utilisateur (mobiles).
    try {
      audioRef.current?.resume();
    } catch {
      /* ignore */
    }
    setFinished(false);
    endRef.current = Date.now() + remaining * 1000;
    setRunning(true);
  };

  const pause = () => {
    setRunning(false);
    endRef.current = null;
  };

  const reset = useCallback(
    (secs: number) => {
      setRunning(false);
      setFinished(false);
      endRef.current = null;
      setDuration(secs);
      setRemaining(secs);
    },
    []
  );

  const adjust = (delta: number) => {
    setFinished(false);
    setRemaining((r) => {
      const next = Math.max(15, r + delta);
      if (running && endRef.current != null) endRef.current = Date.now() + next * 1000;
      return next;
    });
  };

  const progress = duration > 0 ? Math.max(0, Math.min(1, remaining / duration)) : 0;

  return (
    <>
      {/* Bouton flottant */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label={UI.timer.open[lang]}
          className={`fixed bottom-4 right-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-brand text-2xl text-white shadow-glow transition-transform hover:scale-105 ${
            running || finished ? "animate-pulse" : ""
          }`}
        >
          {running ? (
            <span className="text-sm font-black tabular-nums">{fmt(remaining)}</span>
          ) : (
            <span>⏱️</span>
          )}
        </button>
      )}

      {/* Panneau */}
      {open && (
        <div className="fixed bottom-4 right-4 z-50 w-[min(20rem,calc(100vw-2rem))] rounded-2xl border border-app bg-card p-4 shadow-2xl">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-bold uppercase tracking-wide text-muted-app">
              ⏱️ {UI.timer.open[lang]}
            </p>
            <button
              onClick={() => setOpen(false)}
              aria-label={UI.timer.close[lang]}
              className="grid h-7 w-7 place-items-center rounded-lg text-muted-app transition-colors hover:bg-card-hover hover:text-app"
            >
              ✕
            </button>
          </div>

          {/* Anneau de progression */}
          <div className="relative mx-auto mb-3 grid h-32 w-32 place-items-center">
            <svg className="absolute inset-0 -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="var(--border)" strokeWidth="8" />
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#ff6b1a"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 45}
                strokeDashoffset={2 * Math.PI * 45 * (1 - progress)}
                style={{ transition: "stroke-dashoffset 0.3s linear" }}
              />
            </svg>
            <span
              className={`text-3xl font-black tabular-nums ${finished ? "text-emerald-400" : "text-app"}`}
            >
              {fmt(remaining)}
            </span>
          </div>

          {finished && (
            <p className="mb-2 text-center text-sm font-bold text-emerald-400">
              ✓ {UI.timer.done[lang]}
            </p>
          )}

          {/* Ajustements */}
          <div className="mb-3 flex items-center justify-center gap-2">
            <button
              onClick={() => adjust(-15)}
              className="rounded-lg border border-app bg-card-hover px-3 py-1.5 text-sm font-bold text-app transition-colors hover:border-brand"
            >
              −15s
            </button>
            <button
              onClick={() => adjust(15)}
              className="rounded-lg border border-app bg-card-hover px-3 py-1.5 text-sm font-bold text-app transition-colors hover:border-brand"
            >
              +15s
            </button>
          </div>

          {/* Presets */}
          <div className="mb-3 grid grid-cols-4 gap-2">
            {PRESETS.map((p) => (
              <button
                key={p}
                onClick={() => reset(p)}
                className={`rounded-lg border px-2 py-1.5 text-xs font-bold transition-colors ${
                  duration === p
                    ? "border-brand bg-brand text-white"
                    : "border-app bg-card-hover text-muted-app hover:text-app"
                }`}
              >
                {fmt(p)}
              </button>
            ))}
          </div>

          {/* Controles */}
          <div className="flex gap-2">
            {running ? (
              <button
                onClick={pause}
                className="flex-1 rounded-lg border border-app bg-card-hover px-3 py-2 text-sm font-bold text-app transition-colors hover:border-brand"
              >
                {UI.timer.pause[lang]}
              </button>
            ) : (
              <button
                onClick={start}
                disabled={remaining <= 0}
                className="flex-1 rounded-lg bg-brand px-3 py-2 text-sm font-bold text-white shadow-glow transition-colors hover:bg-brand-600 disabled:opacity-40"
              >
                {finished || remaining === duration ? UI.timer.start[lang] : UI.timer.resume[lang]}
              </button>
            )}
            <button
              onClick={() => reset(duration)}
              className="rounded-lg border border-app bg-card-hover px-3 py-2 text-sm font-bold text-app transition-colors hover:border-brand"
            >
              {UI.timer.reset[lang]}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
