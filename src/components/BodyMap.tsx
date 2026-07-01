"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSettings } from "@/lib/i18n";
import { UI } from "@/lib/ui-strings";
import { getMuscle } from "@/data/muscles";

type View = "front" | "back";

interface RegionProps {
  id: string;
  onSelect: (id: string) => void;
  onHover: (id: string | null) => void;
  children: React.ReactNode;
}

function Region({ id, onSelect, onHover, children }: RegionProps) {
  const muscle = getMuscle(id);
  const { lang } = useSettings();
  const label = muscle ? muscle.name[lang] : id;
  return (
    <g
      className="muscle-region"
      role="button"
      tabIndex={0}
      aria-label={label}
      onClick={() => onSelect(id)}
      onMouseEnter={() => onHover(id)}
      onMouseLeave={() => onHover(null)}
      onFocus={() => onHover(id)}
      onBlur={() => onHover(null)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(id);
        }
      }}
    >
      <title>{label}</title>
      {children}
    </g>
  );
}

export function BodyMap() {
  const router = useRouter();
  const { lang } = useSettings();
  const [view, setView] = useState<View>("front");
  const [hovered, setHovered] = useState<string | null>(null);

  const select = (id: string) => router.push(`/muscle/${id}`);
  const hoveredMuscle = hovered ? getMuscle(hovered) : null;

  return (
    <div className="flex flex-col items-center">
      {/* Bascule face / dos */}
      <div className="mb-4 inline-flex rounded-xl border border-app bg-card p-1">
        {(["front", "back"] as View[]).map((v) => (
          <button
            key={v}
            onClick={() => setView(v)}
            className={`rounded-lg px-5 py-2 text-sm font-semibold transition-colors ${
              view === v ? "bg-brand text-white" : "text-muted-app hover:text-app"
            }`}
          >
            {v === "front" ? UI.home.front[lang] : UI.home.back[lang]}
          </button>
        ))}
      </div>

      {/* Nom du muscle survole */}
      <div className="mb-2 h-6 text-center text-sm font-semibold text-brand">
        {hoveredMuscle ? hoveredMuscle.name[lang] : " "}
      </div>

      <div className="w-full max-w-[320px]">
        <svg
          viewBox="0 0 240 460"
          className="h-auto w-full select-none"
          role="img"
          aria-label={view === "front" ? UI.home.front[lang] : UI.home.back[lang]}
        >
          {/* -------------------- SILHOUETTE (decor) -------------------- */}
          <g>
            <circle className="body-base" cx="120" cy="40" r="22" />
            <rect className="body-base" x="112" y="60" width="16" height="16" rx="4" />
            <path
              className="body-base"
              d="M86 92 Q120 78 154 92 L150 150 Q150 195 140 236 L100 236 Q90 195 90 150 Z"
            />
            <rect className="body-base" x="92" y="228" width="56" height="30" rx="12" />
            {/* Bras */}
            <rect className="body-base" x="58" y="98" width="22" height="72" rx="11" />
            <rect className="body-base" x="54" y="166" width="20" height="66" rx="10" />
            <rect className="body-base" x="160" y="98" width="22" height="72" rx="11" />
            <rect className="body-base" x="166" y="166" width="20" height="66" rx="10" />
            {/* Jambes */}
            <rect className="body-base" x="94" y="252" width="26" height="98" rx="13" />
            <rect className="body-base" x="96" y="344" width="22" height="98" rx="11" />
            <rect className="body-base" x="120" y="252" width="26" height="98" rx="13" />
            <rect className="body-base" x="122" y="344" width="22" height="98" rx="11" />
          </g>

          {/* -------------------- MUSCLES -------------------- */}
          {view === "front" ? (
            <>
              <Region id="deltoides" onSelect={select} onHover={setHovered}>
                <ellipse cx="72" cy="104" rx="15" ry="14" />
                <ellipse cx="168" cy="104" rx="15" ry="14" />
              </Region>
              <Region id="pectoraux" onSelect={select} onHover={setHovered}>
                <ellipse cx="105" cy="106" rx="15" ry="12" />
                <ellipse cx="135" cy="106" rx="15" ry="12" />
              </Region>
              <Region id="biceps" onSelect={select} onHover={setHovered}>
                <ellipse cx="68" cy="138" rx="10" ry="20" />
                <ellipse cx="172" cy="138" rx="10" ry="20" />
              </Region>
              <Region id="avant-bras" onSelect={select} onHover={setHovered}>
                <ellipse cx="63" cy="198" rx="9" ry="24" />
                <ellipse cx="177" cy="198" rx="9" ry="24" />
              </Region>
              <Region id="abdominaux" onSelect={select} onHover={setHovered}>
                <ellipse cx="120" cy="165" rx="16" ry="34" />
              </Region>
              <Region id="obliques" onSelect={select} onHover={setHovered}>
                <ellipse cx="99" cy="176" rx="7" ry="24" />
                <ellipse cx="141" cy="176" rx="7" ry="24" />
              </Region>
              <Region id="quadriceps" onSelect={select} onHover={setHovered}>
                <ellipse cx="106" cy="290" rx="14" ry="42" />
                <ellipse cx="134" cy="290" rx="14" ry="42" />
              </Region>
              <Region id="adducteurs" onSelect={select} onHover={setHovered}>
                <ellipse cx="115" cy="282" rx="5" ry="30" />
                <ellipse cx="125" cy="282" rx="5" ry="30" />
              </Region>
            </>
          ) : (
            <>
              <Region id="trapezes" onSelect={select} onHover={setHovered}>
                <polygon points="120,80 152,96 138,132 120,120 102,132 88,96" />
              </Region>
              <Region id="grand-dorsal" onSelect={select} onHover={setHovered}>
                <ellipse cx="101" cy="152" rx="15" ry="30" />
                <ellipse cx="139" cy="152" rx="15" ry="30" />
              </Region>
              <Region id="lombaires" onSelect={select} onHover={setHovered}>
                <ellipse cx="120" cy="205" rx="16" ry="18" />
              </Region>
              <Region id="triceps" onSelect={select} onHover={setHovered}>
                <ellipse cx="68" cy="136" rx="10" ry="22" />
                <ellipse cx="172" cy="136" rx="10" ry="22" />
              </Region>
              <Region id="fessiers" onSelect={select} onHover={setHovered}>
                <ellipse cx="107" cy="250" rx="16" ry="16" />
                <ellipse cx="133" cy="250" rx="16" ry="16" />
              </Region>
              <Region id="ischio-jambiers" onSelect={select} onHover={setHovered}>
                <ellipse cx="106" cy="305" rx="13" ry="38" />
                <ellipse cx="134" cy="305" rx="13" ry="38" />
              </Region>
              <Region id="mollets" onSelect={select} onHover={setHovered}>
                <ellipse cx="107" cy="388" rx="12" ry="34" />
                <ellipse cx="133" cy="388" rx="12" ry="34" />
              </Region>
            </>
          )}
        </svg>
      </div>
    </div>
  );
}
