"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";

/** Une serie enregistree par l'utilisateur. */
export interface LogSet {
  id: string;
  /** Identifiant de la machine/exercice (Machine.id). */
  exerciseId: string;
  /** Nom lisible au moment de l'enregistrement (langue courante). */
  exerciseName: string;
  /** Date ISO de l'enregistrement. */
  date: string;
  /** Charge en kg (0 = poids de corps). */
  weight: number;
  /** Nombre de repetitions. */
  reps: number;
}

interface WorkoutLogValue {
  sets: LogSet[];
  ready: boolean;
  addSet: (input: { exerciseId: string; exerciseName: string; weight: number; reps: number }) => void;
  deleteSet: (id: string) => void;
  clearAll: () => void;
  /** Toutes les series d'un exercice, plus recentes d'abord. */
  setsFor: (exerciseId: string) => LogSet[];
  /** Derniere serie enregistree pour un exercice. */
  lastSet: (exerciseId: string) => LogSet | undefined;
}

const WorkoutLogContext = createContext<WorkoutLogValue | null>(null);
const STORAGE_KEY = "vico-workout-log";

function makeId(): string {
  try {
    if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
  } catch {
    /* pas de crypto.randomUUID */
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

function isValidSet(v: unknown): v is LogSet {
  if (!v || typeof v !== "object") return false;
  const s = v as Record<string, unknown>;
  return (
    typeof s.id === "string" &&
    typeof s.exerciseId === "string" &&
    typeof s.exerciseName === "string" &&
    typeof s.date === "string" &&
    typeof s.weight === "number" &&
    typeof s.reps === "number"
  );
}

export function WorkoutLogProvider({ children }: { children: React.ReactNode }) {
  const [sets, setSets] = useState<LogSet[]>([]);
  const [ready, setReady] = useState(false);

  // Chargement initial depuis localStorage.
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setSets(parsed.filter(isValidSet));
      }
    } catch {
      /* donnees corrompues ou stockage indisponible */
    }
    setReady(true);
  }, []);

  // Persistance a chaque changement.
  useEffect(() => {
    if (!ready) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(sets));
    } catch {
      /* quota depasse ou stockage indisponible */
    }
  }, [sets, ready]);

  const addSet = useCallback<WorkoutLogValue["addSet"]>((input) => {
    const entry: LogSet = {
      id: makeId(),
      date: new Date().toISOString(),
      exerciseId: input.exerciseId,
      exerciseName: input.exerciseName,
      weight: input.weight,
      reps: input.reps,
    };
    setSets((prev) => [entry, ...prev]);
  }, []);

  const deleteSet = useCallback((id: string) => {
    setSets((prev) => prev.filter((s) => s.id !== id));
  }, []);

  const clearAll = useCallback(() => setSets([]), []);

  const setsFor = useCallback(
    (exerciseId: string) =>
      sets
        .filter((s) => s.exerciseId === exerciseId)
        .sort((a, b) => b.date.localeCompare(a.date)),
    [sets]
  );

  const lastSet = useCallback(
    (exerciseId: string) => setsFor(exerciseId)[0],
    [setsFor]
  );

  return (
    <WorkoutLogContext.Provider
      value={{ sets, ready, addSet, deleteSet, clearAll, setsFor, lastSet }}
    >
      {children}
    </WorkoutLogContext.Provider>
  );
}

export function useWorkoutLog(): WorkoutLogValue {
  const ctx = useContext(WorkoutLogContext);
  if (!ctx) throw new Error("useWorkoutLog doit etre utilise dans WorkoutLogProvider");
  return ctx;
}
