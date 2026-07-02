import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MUSCLES, getMuscle } from "@/data/muscles";
import { MuscleDetail } from "@/components/MuscleDetail";

export function generateStaticParams() {
  return MUSCLES.map((m) => ({ id: m.id }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const muscle = getMuscle(params.id);
  if (!muscle) return { title: "Muscle" };
  const title = `${muscle.name.fr} — machines & exercices`;
  const description = muscle.tagline.fr + " " + muscle.description.fr;
  return {
    title,
    description,
    alternates: { canonical: `/muscle/${muscle.id}` },
    openGraph: {
      type: "article",
      title: `${muscle.name.fr} — VicoBBL`,
      description: muscle.tagline.fr,
      url: `/muscle/${muscle.id}`,
    },
    twitter: {
      card: "summary",
      title: `${muscle.name.fr} — VicoBBL`,
      description: muscle.tagline.fr,
    },
  };
}

export default function MusclePage({ params }: { params: { id: string } }) {
  const muscle = getMuscle(params.id);
  if (!muscle) notFound();
  return <MuscleDetail muscle={muscle} />;
}
