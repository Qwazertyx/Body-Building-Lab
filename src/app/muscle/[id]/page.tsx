import { notFound } from "next/navigation";
import { MUSCLES, getMuscle } from "@/data/muscles";
import { MuscleDetail } from "@/components/MuscleDetail";

export function generateStaticParams() {
  return MUSCLES.map((m) => ({ id: m.id }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const muscle = getMuscle(params.id);
  if (!muscle) return { title: "Muscle - Vico BodyBuilding" };
  return {
    title: `${muscle.name.fr} - Vico BodyBuilding`,
    description: muscle.description.fr,
  };
}

export default function MusclePage({ params }: { params: { id: string } }) {
  const muscle = getMuscle(params.id);
  if (!muscle) notFound();
  return <MuscleDetail muscle={muscle} />;
}
