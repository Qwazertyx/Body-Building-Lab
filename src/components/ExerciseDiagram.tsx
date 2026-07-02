"use client";

import type { ReactNode } from "react";
import { useSettings } from "@/lib/i18n";
import { UI } from "@/lib/ui-strings";
import type { LocalizedText } from "@/lib/types";

/**
 * Schemas d'exercices en fil de fer (style 1).
 * Chaque "mouvement" a deux poses (basse/haute) + un conseil d'execution.
 * Les machines sont reliees a un mouvement via MACHINE_MOVEMENT.
 */

interface Diagram {
  caption: LocalizedText;
  viewBox?: string;
  lowLabel?: LocalizedText;
  highLabel?: LocalizedText;
  low: ReactNode;
  high: ReactNode;
}

// ---- Corps reutilisables ----
const BodySide = (
  <>
    <circle className="dia-head" cx="54" cy="24" r="9" />
    <path className="dia-fig" d="M54 33 L56 74 M56 74 L46 110 M56 74 L66 110" />
  </>
);

const BodyFront = (
  <>
    <circle className="dia-head" cx="60" cy="22" r="9" />
    <path className="dia-fig" d="M60 31 L60 72 M60 72 L52 110 M60 72 L68 110" />
  </>
);

const DIAGRAMS: Record<string, Diagram> = {
  // ---------------------------------------------------- POUSSEE / PECS
  bench: {
    caption: {
      fr: "Allonge-toi, omoplates serrees. Descends la charge vers la poitrine, coudes a ~45 degres, puis pousse jusqu'a tendre les bras sans verrouiller sechement.",
      en: "Lie down, shoulder blades retracted. Lower the load to the chest, elbows ~45 degrees, then press up to nearly straight arms without harsh lockout.",
    },
    viewBox: "0 0 140 120",
    low: (
      <>
        <rect className="dia-equip-fill" x="30" y="76" width="72" height="7" rx="3" />
        <line className="dia-equip" x1="40" y1="83" x2="40" y2="104" />
        <line className="dia-equip" x1="92" y1="83" x2="92" y2="104" />
        <circle className="dia-head" cx="34" cy="66" r="8" />
        <path className="dia-fig" d="M42 70 L90 73 M90 73 L104 86 L100 104 M50 68 L46 55 M46 55 L56 48" />
        <line className="dia-weight" x1="44" y1="46" x2="70" y2="46" />
      </>
    ),
    high: (
      <>
        <rect className="dia-equip-fill" x="30" y="76" width="72" height="7" rx="3" />
        <line className="dia-equip" x1="40" y1="83" x2="40" y2="104" />
        <line className="dia-equip" x1="92" y1="83" x2="92" y2="104" />
        <circle className="dia-head" cx="34" cy="66" r="8" />
        <path className="dia-fig" d="M42 70 L90 73 M90 73 L104 86 L100 104 M50 68 L54 40" />
        <line className="dia-weight" x1="42" y1="34" x2="68" y2="34" />
      </>
    ),
  },
  "incline-press": {
    caption: {
      fr: "Dossier incline, dos cale. Pars poignees au niveau du haut des pecs, pousse vers le haut et l'avant, redescends en controle. Ne verrouille pas les coudes.",
      en: "Incline seat, back supported. Start with handles at upper-chest level, press up and forward, lower under control. Do not lock the elbows.",
    },
    viewBox: "0 0 130 120",
    low: (
      <>
        <line className="dia-equip" x1="42" y1="98" x2="62" y2="40" />
        <line className="dia-equip" x1="42" y1="98" x2="96" y2="98" />
        <circle className="dia-head" cx="42" cy="40" r="8" />
        <path className="dia-fig" d="M48 46 L66 92 M66 92 L96 92 M52 52 L46 66 M46 66 L58 60" />
        <line className="dia-weight" x1="44" y1="58" x2="66" y2="52" />
      </>
    ),
    high: (
      <>
        <line className="dia-equip" x1="42" y1="98" x2="62" y2="40" />
        <line className="dia-equip" x1="42" y1="98" x2="96" y2="98" />
        <circle className="dia-head" cx="42" cy="40" r="8" />
        <path className="dia-fig" d="M48 46 L66 92 M66 92 L96 92 M52 52 L64 26" />
        <line className="dia-weight" x1="52" y1="22" x2="76" y2="22" />
      </>
    ),
  },
  fly: {
    caption: {
      fr: "Coudes legerement flechis et fixes. Ouvre les bras jusqu'a sentir l'etirement des pecs, puis rapproche les mains devant toi comme pour enlacer un arbre.",
      en: "Elbows slightly bent and fixed. Open the arms until you feel the chest stretch, then bring the hands together in front, like hugging a tree.",
    },
    low: (
      <>
        {BodyFront}
        <path className="dia-fig" d="M52 38 L34 52 M68 38 L86 52" />
        <line className="dia-weight" x1="28" y1="50" x2="36" y2="58" />
        <line className="dia-weight" x1="84" y1="50" x2="92" y2="58" />
      </>
    ),
    high: (
      <>
        {BodyFront}
        <path className="dia-fig" d="M52 38 L58 54 M68 38 L62 54" />
        <line className="dia-weight" x1="54" y1="52" x2="66" y2="52" />
      </>
    ),
  },
  // ---------------------------------------------------- EPAULES
  "overhead-press": {
    caption: {
      fr: "Gaine abdos et fessiers. Pars barre au niveau du menton, pousse au-dessus de la tete jusqu'a tendre les bras, redescends en controle sans cambrer.",
      en: "Brace abs and glutes. Start with the bar at chin level, press overhead to straight arms, lower under control without arching.",
    },
    low: (
      <>
        {BodyFront}
        <path className="dia-fig" d="M52 38 L48 50 M48 50 L56 44 M68 38 L72 50 M72 50 L64 44" />
        <line className="dia-weight" x1="44" y1="42" x2="76" y2="42" />
      </>
    ),
    high: (
      <>
        {BodyFront}
        <path className="dia-fig" d="M52 38 L54 16 M68 38 L66 16" />
        <line className="dia-weight" x1="44" y1="14" x2="76" y2="14" />
      </>
    ),
  },
  "lateral-raise": {
    caption: {
      fr: "Buste droit, coudes legerement flechis. Monte les coudes (pas les mains) sur les cotes jusqu'a l'horizontale, pas plus haut, puis redescends lentement.",
      en: "Chest up, elbows slightly bent. Lead with the elbows (not the hands) out to the sides up to horizontal, no higher, then lower slowly.",
    },
    low: (
      <>
        {BodyFront}
        <path className="dia-fig" d="M52 40 L48 70 M68 40 L72 70" />
        <line className="dia-weight" x1="42" y1="70" x2="54" y2="70" />
        <line className="dia-weight" x1="66" y1="70" x2="78" y2="70" />
      </>
    ),
    high: (
      <>
        {BodyFront}
        <path className="dia-fig" d="M52 40 L28 44 M68 40 L92 44" />
        <line className="dia-weight" x1="22" y1="44" x2="34" y2="44" />
        <line className="dia-weight" x1="86" y1="44" x2="98" y2="44" />
      </>
    ),
  },
  "reverse-fly": {
    caption: {
      fr: "Buste penche en avant, bras quasi tendus. Ecarte les bras vers l'arriere en pensant a l'arriere des epaules, sans hausser les trapezes. Charge legere.",
      en: "Torso hinged forward, arms nearly straight. Open the arms back thinking about the rear shoulders, without shrugging the traps. Keep it light.",
    },
    viewBox: "0 0 120 120",
    low: (
      <>
        <circle className="dia-head" cx="40" cy="40" r="9" />
        <path className="dia-fig" d="M46 46 L74 70 M74 70 L70 110 M74 70 L84 108" />
        <path className="dia-fig" d="M52 52 L58 74 M56 54 L64 74" />
        <line className="dia-weight" x1="52" y1="76" x2="64" y2="76" />
      </>
    ),
    high: (
      <>
        <circle className="dia-head" cx="40" cy="40" r="9" />
        <path className="dia-fig" d="M46 46 L74 70 M74 70 L70 110 M74 70 L84 108" />
        <path className="dia-fig" d="M52 52 L34 46 M56 54 L74 50" />
        <line className="dia-weight" x1="28" y1="44" x2="40" y2="48" />
        <line className="dia-weight" x1="70" y1="48" x2="82" y2="52" />
      </>
    ),
  },
  // ---------------------------------------------------- BRAS
  curl: {
    caption: {
      fr: "Coudes fixes le long du buste. Monte le poids en contractant le biceps, sans avancer les coudes ni balancer le dos. Descends en controle jusqu'a tendre le bras.",
      en: "Elbows pinned to your sides. Curl the weight by squeezing the biceps, without pushing the elbows forward or swinging. Lower under control to a straight arm.",
    },
    low: (
      <>
        {BodySide}
        <path className="dia-fig" d="M55 38 L67 60 M67 60 L71 82" />
        <line className="dia-weight" x1="62" y1="86" x2="80" y2="80" />
      </>
    ),
    high: (
      <>
        {BodySide}
        <path className="dia-fig" d="M55 38 L67 60 M67 60 L58 40" />
        <line className="dia-weight" x1="50" y1="44" x2="66" y2="36" />
      </>
    ),
  },
  pushdown: {
    caption: {
      fr: "Coudes colles au corps. Pousse la poignee vers le bas jusqu'a tendre completement les bras, contracte le triceps, puis remonte en controle sans ecarter les coudes.",
      en: "Elbows glued to your sides. Push the handle down to fully straight arms, squeeze the triceps, then return under control without letting the elbows flare.",
    },
    low: (
      <>
        {BodySide}
        <line className="dia-equip" x1="60" y1="10" x2="66" y2="60" />
        <path className="dia-fig" d="M55 38 L64 60 M64 60 L66 84" />
        <line className="dia-weight" x1="58" y1="86" x2="74" y2="84" />
      </>
    ),
    high: (
      <>
        {BodySide}
        <line className="dia-equip" x1="60" y1="10" x2="60" y2="44" />
        <path className="dia-fig" d="M55 38 L64 60 M64 60 L58 44" />
        <line className="dia-weight" x1="50" y1="44" x2="68" y2="42" />
      </>
    ),
  },
  "overhead-extension": {
    caption: {
      fr: "Coudes hauts et serres, pointes vers le plafond. Descends le poids derriere la tete (etirement du triceps), puis tends les bras vers le haut sans bouger les coudes.",
      en: "Elbows high and tucked, pointing at the ceiling. Lower the weight behind the head (triceps stretch), then straighten the arms up without moving the elbows.",
    },
    low: (
      <>
        {BodySide}
        <path className="dia-fig" d="M55 38 L58 22 M58 22 L48 36" />
        <line className="dia-weight" x1="40" y1="38" x2="54" y2="32" />
      </>
    ),
    high: (
      <>
        {BodySide}
        <path className="dia-fig" d="M55 38 L58 22 M58 22 L60 6" />
        <line className="dia-weight" x1="52" y1="6" x2="68" y2="6" />
      </>
    ),
  },
  dips: {
    caption: {
      fr: "Sur les barres, buste droit pour les triceps (penche pour les pecs). Descends jusqu'a ce que les coudes soient a ~90 degres, puis pousse pour remonter. Ne descends pas trop bas.",
      en: "On the bars, torso upright for triceps (lean for chest). Lower until the elbows reach ~90 degrees, then press back up. Do not go too deep.",
    },
    viewBox: "0 0 120 120",
    low: (
      <>
        <line className="dia-weight" x1="34" y1="58" x2="34" y2="30" />
        <line className="dia-weight" x1="82" y1="58" x2="82" y2="30" />
        <circle className="dia-head" cx="58" cy="40" r="9" />
        <path className="dia-fig" d="M58 49 L60 78 M60 78 L54 104 M60 78 L68 100" />
        <path className="dia-fig" d="M52 52 L40 40 M64 52 L76 40" />
      </>
    ),
    high: (
      <>
        <line className="dia-weight" x1="34" y1="58" x2="34" y2="18" />
        <line className="dia-weight" x1="82" y1="58" x2="82" y2="18" />
        <circle className="dia-head" cx="58" cy="28" r="9" />
        <path className="dia-fig" d="M58 37 L60 66 M60 66 L54 92 M60 66 L68 88" />
        <path className="dia-fig" d="M52 40 L42 24 M64 40 L74 24" />
      </>
    ),
  },
  // ---------------------------------------------------- AVANT-BRAS
  "wrist-curl": {
    caption: {
      fr: "Avant-bras poses sur les cuisses ou un banc, seuls les poignets depassent. Laisse la charge descendre au bout des doigts, puis enroule le poignet vers le haut. Amplitude complete.",
      en: "Forearms resting on your thighs or a bench, only the wrists off the edge. Let the load roll to your fingertips, then curl the wrist up. Full range of motion.",
    },
    viewBox: "0 0 120 100",
    low: (
      <>
        <line className="dia-equip" x1="24" y1="70" x2="86" y2="70" />
        <path className="dia-fig" d="M30 62 L78 62" />
        <path className="dia-fig" d="M78 62 L84 78" />
        <line className="dia-weight" x1="78" y1="82" x2="92" y2="82" />
      </>
    ),
    high: (
      <>
        <line className="dia-equip" x1="24" y1="70" x2="86" y2="70" />
        <path className="dia-fig" d="M30 62 L78 62" />
        <path className="dia-fig" d="M78 62 L82 50" />
        <line className="dia-weight" x1="76" y1="46" x2="90" y2="46" />
      </>
    ),
  },
  carry: {
    caption: {
      fr: "Buste droit, epaules basses, abdos gaines. Prends lourd dans chaque main et marche a pas controles sur la distance voulue. Ne laisse pas les epaules s'enrouler.",
      en: "Chest up, shoulders down, abs braced. Grab a heavy load in each hand and walk with controlled steps for the set distance. Do not let the shoulders round.",
    },
    lowLabel: { fr: "Prise", en: "Setup" },
    highLabel: { fr: "Marche", en: "Walk" },
    low: (
      <>
        {BodyFront}
        <path className="dia-fig" d="M52 38 L50 72 M68 38 L70 72" />
        <line className="dia-weight" x1="44" y1="72" x2="56" y2="72" />
        <line className="dia-weight" x1="64" y1="72" x2="76" y2="72" />
      </>
    ),
    high: (
      <>
        <circle className="dia-head" cx="60" cy="22" r="9" />
        <path className="dia-fig" d="M60 31 L60 72 M60 72 L48 108 M60 72 L70 106" />
        <path className="dia-fig" d="M52 38 L50 72 M68 38 L70 72" />
        <line className="dia-weight" x1="44" y1="72" x2="56" y2="72" />
        <line className="dia-weight" x1="64" y1="72" x2="76" y2="72" />
      </>
    ),
  },
  // ---------------------------------------------------- ABDOS / TRONC
  "cable-crunch": {
    caption: {
      fr: "A genoux, corde derriere la tete. Enroule le buste en rapprochant les coudes des cuisses (ce sont les abdos qui tirent, pas les bras), puis reviens en controle.",
      en: "Kneeling, rope behind the head. Crunch the torso bringing the elbows toward the thighs (the abs pull, not the arms), then return under control.",
    },
    viewBox: "0 0 120 120",
    low: (
      <>
        <line className="dia-equip" x1="60" y1="8" x2="52" y2="34" />
        <line className="dia-weight" x1="46" y1="30" x2="58" y2="38" />
        <circle className="dia-head" cx="48" cy="42" r="8" />
        <path className="dia-fig" d="M52 48 L58 70 M58 70 L50 96 M58 70 L74 78 L74 100" />
        <path className="dia-fig" d="M52 46 L50 34" />
      </>
    ),
    high: (
      <>
        <line className="dia-equip" x1="60" y1="8" x2="56" y2="46" />
        <line className="dia-weight" x1="50" y1="44" x2="62" y2="50" />
        <circle className="dia-head" cx="52" cy="58" r="8" />
        <path className="dia-fig" d="M56 63 L66 80 M66 80 L54 96 M66 80 L80 82 L80 102" />
        <path className="dia-fig" d="M56 60 L58 48" />
      </>
    ),
  },
  "hanging-leg-raise": {
    caption: {
      fr: "Suspendu a la barre. Enroule le bassin vers le haut en montant les jambes (n'utilise pas d'elan), monte les genoux vers la poitrine, puis descends en controle.",
      en: "Hanging from the bar. Curl the pelvis up as you raise the legs (no swinging), bring the knees toward the chest, then lower under control.",
    },
    viewBox: "0 0 120 130",
    low: (
      <>
        <line className="dia-weight" x1="36" y1="12" x2="84" y2="12" />
        <circle className="dia-head" cx="60" cy="30" r="8" />
        <path className="dia-fig" d="M60 12 L60 38 M60 38 L58 78 M58 78 L54 116 M58 78 L64 116" />
      </>
    ),
    high: (
      <>
        <line className="dia-weight" x1="36" y1="12" x2="84" y2="12" />
        <circle className="dia-head" cx="60" cy="30" r="8" />
        <path className="dia-fig" d="M60 12 L60 38 M60 38 L60 66 M60 66 L84 62 M60 66 L84 76" />
      </>
    ),
  },
  plank: {
    caption: {
      fr: "Appui sur les avant-bras et les pointes de pieds. Corps parfaitement aligne (fessiers serres, dos ni creux ni rond), respire et tiens la position sans t'affaisser.",
      en: "Support on the forearms and toes. Body perfectly aligned (glutes tight, back neither sagging nor rounded), breathe and hold without collapsing.",
    },
    viewBox: "0 0 140 90",
    lowLabel: { fr: "Alignement", en: "Alignment" },
    highLabel: { fr: "Erreur a eviter", en: "Avoid this" },
    low: (
      <>
        <line className="dia-ground" x1="16" y1="72" x2="124" y2="72" />
        <circle className="dia-head" cx="26" cy="40" r="8" />
        <path className="dia-fig" d="M34 44 L104 56 M104 56 L104 72 M104 56 L118 72" />
        <path className="dia-fig" d="M40 46 L34 72" />
      </>
    ),
    high: (
      <>
        <line className="dia-ground" x1="16" y1="72" x2="124" y2="72" />
        <circle className="dia-head" cx="26" cy="44" r="8" />
        <path className="dia-fig" d="M34 48 L70 66 L104 52 M104 52 L104 72 M104 52 L118 72" />
        <path className="dia-fig" d="M40 50 L34 72" />
      </>
    ),
  },
  "side-plank": {
    caption: {
      fr: "En appui lateral sur un avant-bras. Monte les hanches pour aligner le corps de la tete aux pieds, tiens, sans laisser le bassin descendre.",
      en: "Side support on one forearm. Lift the hips to align the body head-to-toe, hold, without letting the pelvis drop.",
    },
    viewBox: "0 0 140 90",
    lowLabel: { fr: "Depart", en: "Setup" },
    highLabel: { fr: "Gainage", en: "Braced" },
    low: (
      <>
        <line className="dia-ground" x1="16" y1="72" x2="124" y2="72" />
        <path className="dia-fig" d="M36 72 L108 72" />
        <circle className="dia-head" cx="30" cy="60" r="8" />
        <path className="dia-fig" d="M36 64 L34 72" />
      </>
    ),
    high: (
      <>
        <line className="dia-ground" x1="16" y1="72" x2="124" y2="72" />
        <path className="dia-fig" d="M36 66 L112 40" />
        <circle className="dia-head" cx="30" cy="60" r="8" />
        <path className="dia-fig" d="M36 62 L34 72" />
      </>
    ),
  },
  pallof: {
    caption: {
      fr: "De cote par rapport a la poulie, bras tendus devant la poitrine. Resiste a la rotation : garde le buste parfaitement immobile, puis reviens. C'est un exercice anti-rotation.",
      en: "Side-on to the cable, arms straight out from the chest. Resist the rotation: keep the torso perfectly still, then return. It is an anti-rotation exercise.",
    },
    viewBox: "0 0 120 120",
    lowLabel: { fr: "Bras plies", en: "Arms in" },
    highLabel: { fr: "Bras tendus", en: "Arms out" },
    low: (
      <>
        <line className="dia-equip" x1="10" y1="20" x2="10" y2="100" />
        <line className="dia-weight" x1="10" y1="60" x2="46" y2="60" />
        {BodyFront}
        <path className="dia-fig" d="M52 40 L48 60 M68 40 L48 60" />
      </>
    ),
    high: (
      <>
        <line className="dia-equip" x1="10" y1="20" x2="10" y2="100" />
        <line className="dia-weight" x1="10" y1="60" x2="30" y2="60" />
        {BodyFront}
        <path className="dia-fig" d="M52 40 L34 60 M68 40 L34 60" />
      </>
    ),
  },
  woodchop: {
    caption: {
      fr: "Pivote depuis les hanches, bras quasi tendus. Tire la poignee en diagonale d'en haut vers le bas oppose (ou l'inverse), sans a-coups, en controlant la rotation.",
      en: "Rotate from the hips, arms nearly straight. Pull the handle diagonally from high to the opposite low (or reverse), no jerking, controlling the rotation.",
    },
    viewBox: "0 0 120 120",
    lowLabel: { fr: "Bas", en: "Low" },
    highLabel: { fr: "Haut", en: "High" },
    low: (
      <>
        {BodyFront}
        <path className="dia-fig" d="M52 40 L74 78 M68 40 L74 78" />
        <line className="dia-weight" x1="70" y1="76" x2="84" y2="84" />
      </>
    ),
    high: (
      <>
        {BodyFront}
        <path className="dia-fig" d="M52 40 L44 16 M68 40 L44 16" />
        <line className="dia-weight" x1="36" y1="10" x2="50" y2="18" />
      </>
    ),
  },
  // ---------------------------------------------------- DOS
  pullup: {
    caption: {
      fr: "Suspendu, mains plus larges que les epaules. Abaisse d'abord les epaules, tire les coudes vers le bas pour monter le menton au-dessus de la barre, puis descends en controle.",
      en: "Hanging, hands wider than the shoulders. First depress the shoulders, pull the elbows down to bring the chin over the bar, then lower under control.",
    },
    viewBox: "0 0 120 130",
    lowLabel: { fr: "Bras tendus", en: "Dead hang" },
    highLabel: { fr: "Menton a la barre", en: "Chin over bar" },
    low: (
      <>
        <line className="dia-weight" x1="30" y1="14" x2="90" y2="14" />
        <circle className="dia-head" cx="60" cy="46" r="8" />
        <path className="dia-fig" d="M60 54 L60 90 M60 90 L52 120 M60 90 L68 120 M56 38 L42 14 M64 38 L78 14" />
      </>
    ),
    high: (
      <>
        <line className="dia-weight" x1="30" y1="14" x2="90" y2="14" />
        <circle className="dia-head" cx="60" cy="24" r="8" />
        <path className="dia-fig" d="M60 32 L60 70 M60 70 L52 100 M60 70 L68 100 M56 20 L44 14 M64 20 L76 14" />
      </>
    ),
  },
  pulldown: {
    caption: {
      fr: "Assis, mains larges. Bras tendus au depart, tire la barre vers le haut de la poitrine en descendant les coudes le long du corps, sans balancer le buste. Reviens en controle.",
      en: "Seated, wide grip. Arms straight to start, pull the bar to the upper chest by driving the elbows down along the body, without swinging. Return under control.",
    },
    viewBox: "0 0 120 130",
    highLabel: { fr: "Bras tendus", en: "Arms extended" },
    lowLabel: { fr: "Barre a la poitrine", en: "Bar to chest" },
    high: (
      <>
        <line className="dia-equip" x1="60" y1="6" x2="60" y2="16" />
        <line className="dia-weight" x1="42" y1="18" x2="78" y2="18" />
        <rect className="dia-equip-fill" x="46" y="86" width="34" height="6" rx="3" />
        <circle className="dia-head" cx="55" cy="46" r="8" />
        <path className="dia-fig" d="M55 54 L58 84 M58 84 L80 84 L80 108 M55 56 L60 22" />
      </>
    ),
    low: (
      <>
        <line className="dia-equip" x1="60" y1="6" x2="60" y2="40" />
        <line className="dia-weight" x1="42" y1="46" x2="78" y2="46" />
        <rect className="dia-equip-fill" x="46" y="86" width="34" height="6" rx="3" />
        <circle className="dia-head" cx="55" cy="46" r="8" />
        <path className="dia-fig" d="M55 54 L58 84 M58 84 L80 84 L80 108 M55 57 L48 66 L58 50" />
      </>
    ),
  },
  row: {
    caption: {
      fr: "Buste stable et dos plat. Tire la charge vers le nombril / bas des cotes en amenant les coudes vers l'arriere, serre les omoplates, puis reviens bras tendus en controle.",
      en: "Torso stable and back flat. Pull the load toward the navel / lower ribs by driving the elbows back, squeeze the shoulder blades, then return to straight arms under control.",
    },
    viewBox: "0 0 130 120",
    lowLabel: { fr: "Bras tendus", en: "Arms extended" },
    highLabel: { fr: "Charge tiree", en: "Pulled in" },
    low: (
      <>
        <rect className="dia-equip-fill" x="30" y="92" width="40" height="6" rx="3" />
        <circle className="dia-head" cx="46" cy="46" r="8" />
        <path className="dia-fig" d="M46 54 L50 90 M50 90 L70 90 L70 112 M48 56 L96 66" />
        <line className="dia-weight" x1="92" y1="60" x2="100" y2="72" />
      </>
    ),
    high: (
      <>
        <rect className="dia-equip-fill" x="30" y="92" width="40" height="6" rx="3" />
        <circle className="dia-head" cx="46" cy="46" r="8" />
        <path className="dia-fig" d="M46 54 L50 90 M50 90 L70 90 L70 112 M48 56 L66 62 M66 62 L60 76" />
        <line className="dia-weight" x1="54" y1="74" x2="66" y2="82" />
      </>
    ),
  },
  shrug: {
    caption: {
      fr: "Charge dans les mains, bras tendus. Hausse les epaules droit vers les oreilles, marque une pause en haut, puis descends en controle. Ne roule surtout pas les epaules.",
      en: "Load in the hands, arms straight. Shrug the shoulders straight up toward the ears, pause at the top, then lower under control. Never roll the shoulders.",
    },
    lowLabel: { fr: "Epaules basses", en: "Shoulders down" },
    highLabel: { fr: "Epaules hautes", en: "Shoulders up" },
    low: (
      <>
        {BodyFront}
        <path className="dia-fig" d="M52 40 L50 74 M68 40 L70 74" />
        <line className="dia-weight" x1="42" y1="74" x2="58" y2="74" />
        <line className="dia-weight" x1="62" y1="74" x2="78" y2="74" />
      </>
    ),
    high: (
      <>
        <circle className="dia-head" cx="60" cy="22" r="9" />
        <path className="dia-fig" d="M60 31 L60 72 M60 72 L52 110 M60 72 L68 110" />
        <path className="dia-fig" d="M52 34 L50 66 M68 34 L70 66" />
        <line className="dia-weight" x1="42" y1="66" x2="58" y2="66" />
        <line className="dia-weight" x1="62" y1="66" x2="78" y2="66" />
      </>
    ),
  },
  "face-pull": {
    caption: {
      fr: "Poulie a hauteur du visage. Tire la corde vers le front en ecartant les mains et en gardant les coudes hauts, serre l'arriere des epaules, puis reviens en controle.",
      en: "Cable at face height. Pull the rope toward your forehead, spreading the hands and keeping the elbows high, squeeze the rear shoulders, then return under control.",
    },
    viewBox: "0 0 120 120",
    lowLabel: { fr: "Bras tendus", en: "Arms extended" },
    highLabel: { fr: "Tire au visage", en: "Pulled to face" },
    low: (
      <>
        <line className="dia-equip" x1="10" y1="30" x2="44" y2="40" />
        <line className="dia-weight" x1="8" y1="26" x2="14" y2="36" />
        {BodyFront}
        <path className="dia-fig" d="M52 40 L44 40 M68 40 L44 40" />
      </>
    ),
    high: (
      <>
        <line className="dia-equip" x1="10" y1="30" x2="46" y2="34" />
        <line className="dia-weight" x1="8" y1="26" x2="14" y2="36" />
        {BodyFront}
        <path className="dia-fig" d="M52 40 L44 26 M68 40 L44 34" />
      </>
    ),
  },
  // ---------------------------------------------------- CHARNIERE / BAS DU DOS
  deadlift: {
    caption: {
      fr: "Dos neutre (plat), barre pres des tibias. Pousse le sol avec les pieds et pousse les hanches en avant pour te redresser. Descends en poussant les hanches en arriere, dos toujours plat.",
      en: "Neutral (flat) back, bar close to the shins. Push the floor away and drive the hips forward to stand tall. Lower by pushing the hips back, keeping the back flat.",
    },
    viewBox: "0 0 130 120",
    lowLabel: { fr: "Charge au sol", en: "Bar down" },
    highLabel: { fr: "Debout", en: "Standing" },
    low: (
      <>
        <line className="dia-ground" x1="24" y1="110" x2="112" y2="110" />
        <circle className="dia-head" cx="44" cy="42" r="8" />
        <path className="dia-fig" d="M48 46 L82 62 M82 62 L82 90 M82 90 L74 108 M82 90 L90 108 M54 52 L60 92" />
        <line className="dia-weight" x1="46" y1="94" x2="74" y2="94" />
      </>
    ),
    high: (
      <>
        <line className="dia-ground" x1="24" y1="110" x2="112" y2="110" />
        <circle className="dia-head" cx="60" cy="24" r="8" />
        <path className="dia-fig" d="M60 32 L62 74 M62 74 L54 108 M62 74 L70 108 M58 40 L58 76" />
        <line className="dia-weight" x1="44" y1="78" x2="72" y2="78" />
      </>
    ),
  },
  "back-extension": {
    caption: {
      fr: "Bassin cale sur le banc. Descends le buste en gardant le dos plat, puis remonte jusqu'a aligner le corps (pas plus haut). Serre les fessiers en haut.",
      en: "Hips anchored on the pad. Lower the torso keeping a flat back, then rise until the body is aligned (no higher). Squeeze the glutes at the top.",
    },
    viewBox: "0 0 130 110",
    lowLabel: { fr: "Buste bas", en: "Torso down" },
    highLabel: { fr: "Corps aligne", en: "Body aligned" },
    low: (
      <>
        <rect className="dia-equip-fill" x="70" y="60" width="14" height="34" rx="4" />
        <path className="dia-fig" d="M78 56 L44 82" />
        <circle className="dia-head" cx="38" cy="86" r="8" />
        <path className="dia-fig" d="M78 58 L96 92" />
      </>
    ),
    high: (
      <>
        <rect className="dia-equip-fill" x="70" y="60" width="14" height="34" rx="4" />
        <path className="dia-fig" d="M78 56 L34 44" />
        <circle className="dia-head" cx="28" cy="42" r="8" />
        <path className="dia-fig" d="M78 58 L96 92" />
      </>
    ),
  },
  "hip-thrust": {
    caption: {
      fr: "Haut du dos cale sur un banc, barre sur le bassin. Pousse dans les talons pour monter les hanches jusqu'a aligner le tronc, serre fort les fessiers en haut, puis redescends.",
      en: "Upper back on a bench, bar over the hips. Drive through the heels to lift the hips until the trunk is aligned, squeeze the glutes hard at the top, then lower.",
    },
    viewBox: "0 0 140 110",
    lowLabel: { fr: "Hanches basses", en: "Hips down" },
    highLabel: { fr: "Hanches hautes", en: "Hips up" },
    low: (
      <>
        <line className="dia-ground" x1="16" y1="98" x2="124" y2="98" />
        <rect className="dia-equip-fill" x="24" y="52" width="26" height="6" rx="3" />
        <circle className="dia-head" cx="34" cy="46" r="8" />
        <path className="dia-fig" d="M40 52 L64 86 M64 86 L92 86 M92 86 L92 98" />
        <line className="dia-weight" x1="60" y1="82" x2="60" y2="94" />
      </>
    ),
    high: (
      <>
        <line className="dia-ground" x1="16" y1="98" x2="124" y2="98" />
        <rect className="dia-equip-fill" x="24" y="52" width="26" height="6" rx="3" />
        <circle className="dia-head" cx="34" cy="48" r="8" />
        <path className="dia-fig" d="M40 54 L74 62 M74 62 L92 86 M92 86 L92 98" />
        <line className="dia-weight" x1="68" y1="56" x2="68" y2="68" />
      </>
    ),
  },
  // ---------------------------------------------------- JAMBES
  squat: {
    caption: {
      fr: "Barre sur les trapezes, pieds ecartes largeur d'epaules. Descends en poussant les hanches en arriere, genoux dans l'axe des pieds, au moins jusqu'a la cuisse parallele, puis remonte.",
      en: "Bar on the traps, feet shoulder-width. Descend by pushing the hips back, knees tracking over the feet, at least to parallel, then stand back up.",
    },
    highLabel: { fr: "Debout", en: "Standing" },
    lowLabel: { fr: "Accroupi", en: "Squatted" },
    high: (
      <>
        <line className="dia-weight" x1="40" y1="34" x2="80" y2="34" />
        <circle className="dia-head" cx="60" cy="22" r="9" />
        <path className="dia-fig" d="M60 34 L60 70 M60 70 L52 110 M60 70 L68 110 M46 35 L50 54 M74 35 L70 54" />
      </>
    ),
    low: (
      <>
        <line className="dia-weight" x1="40" y1="40" x2="80" y2="40" />
        <circle className="dia-head" cx="58" cy="28" r="9" />
        <path className="dia-fig" d="M58 38 L64 66 M64 66 L48 66 L52 108 M64 66 L80 66 L76 108 M46 41 L50 58 M74 41 L70 58" />
      </>
    ),
  },
  "leg-press": {
    caption: {
      fr: "Dos et fesses bien cales contre le dossier. Flechis les genoux jusqu'a ~90 degres sans decoller les fesses, puis pousse dans les talons sans verrouiller sechement les genoux.",
      en: "Back and hips firmly against the pad. Bend the knees to ~90 degrees without letting the hips lift, then press through the heels without harshly locking the knees.",
    },
    viewBox: "0 0 140 110",
    lowLabel: { fr: "Genoux plies", en: "Knees bent" },
    highLabel: { fr: "Jambes tendues", en: "Legs extended" },
    low: (
      <>
        <line className="dia-equip" x1="18" y1="30" x2="18" y2="96" />
        <circle className="dia-head" cx="30" cy="44" r="8" />
        <path className="dia-fig" d="M26 50 L34 84 M34 84 L64 80 M64 80 L60 50" />
        <rect className="dia-weight" x="66" y="42" width="10" height="42" rx="4" fill="none" />
      </>
    ),
    high: (
      <>
        <line className="dia-equip" x1="18" y1="30" x2="18" y2="96" />
        <circle className="dia-head" cx="30" cy="44" r="8" />
        <path className="dia-fig" d="M26 50 L34 84 M34 84 L92 80 M92 80 L92 52" />
        <rect className="dia-weight" x="96" y="44" width="10" height="40" rx="4" fill="none" />
      </>
    ),
  },
  "leg-extension": {
    caption: {
      fr: "Assis, dos cale, chevilles sous le rouleau. Tends les jambes en contractant les quadriceps, marque une pause en haut, puis redescends lentement sans lacher la charge.",
      en: "Seated, back supported, ankles under the pad. Straighten the legs by contracting the quads, pause at the top, then lower slowly without dropping the load.",
    },
    viewBox: "0 0 120 110",
    lowLabel: { fr: "Genoux plies", en: "Knees bent" },
    highLabel: { fr: "Jambes tendues", en: "Legs extended" },
    low: (
      <>
        <rect className="dia-equip-fill" x="30" y="58" width="30" height="6" rx="3" />
        <circle className="dia-head" cx="40" cy="30" r="8" />
        <path className="dia-fig" d="M40 38 L46 58 M46 58 L64 58 M64 58 L60 88" />
        <line className="dia-weight" x1="56" y1="86" x2="68" y2="86" />
      </>
    ),
    high: (
      <>
        <rect className="dia-equip-fill" x="30" y="58" width="30" height="6" rx="3" />
        <circle className="dia-head" cx="40" cy="30" r="8" />
        <path className="dia-fig" d="M40 38 L46 58 M46 58 L64 58 M64 58 L92 50" />
        <line className="dia-weight" x1="90" y1="44" x2="96" y2="56" />
      </>
    ),
  },
  "leg-curl": {
    caption: {
      fr: "Allonge (ou assis), talons sous ou sur le rouleau. Flechis les genoux en ramenant les talons vers les fessiers, controle la descente. Ne decolle pas les hanches.",
      en: "Lying (or seated), heels under or on the pad. Bend the knees bringing the heels toward the glutes, control the return. Do not let the hips lift.",
    },
    viewBox: "0 0 130 100",
    lowLabel: { fr: "Jambes tendues", en: "Legs straight" },
    highLabel: { fr: "Talons aux fessiers", en: "Heels to glutes" },
    low: (
      <>
        <rect className="dia-equip-fill" x="24" y="60" width="56" height="6" rx="3" />
        <circle className="dia-head" cx="30" cy="54" r="8" />
        <path className="dia-fig" d="M38 56 L84 58 M84 58 L112 58" />
        <line className="dia-weight" x1="108" y1="52" x2="114" y2="64" />
      </>
    ),
    high: (
      <>
        <rect className="dia-equip-fill" x="24" y="60" width="56" height="6" rx="3" />
        <circle className="dia-head" cx="30" cy="54" r="8" />
        <path className="dia-fig" d="M38 56 L84 58 M84 58 L92 32" />
        <line className="dia-weight" x1="86" y1="30" x2="98" y2="34" />
      </>
    ),
  },
  lunge: {
    caption: {
      fr: "Grand pas en avant, buste droit. Descends en flechissant les deux genoux (le genou arriere vers le sol), puis pousse dans le talon avant pour revenir. Genou avant dans l'axe du pied.",
      en: "Big step forward, chest up. Lower by bending both knees (rear knee toward the floor), then push through the front heel to return. Front knee tracks over the foot.",
    },
    viewBox: "0 0 130 120",
    highLabel: { fr: "Debout", en: "Standing" },
    lowLabel: { fr: "Fente basse", en: "Lunge down" },
    high: (
      <>
        <circle className="dia-head" cx="60" cy="22" r="9" />
        <path className="dia-fig" d="M60 31 L60 70 M60 70 L54 110 M60 70 L66 110 M52 40 L50 66 M68 40 L70 66" />
        <line className="dia-weight" x1="42" y1="66" x2="52" y2="66" />
        <line className="dia-weight" x1="68" y1="66" x2="78" y2="66" />
      </>
    ),
    low: (
      <>
        <circle className="dia-head" cx="60" cy="26" r="9" />
        <path className="dia-fig" d="M60 35 L62 72 M62 72 L36 86 L40 112 M62 72 L86 92 L86 112 M54 44 L52 70 M70 44 L72 70" />
        <line className="dia-weight" x1="44" y1="70" x2="54" y2="70" />
        <line className="dia-weight" x1="70" y1="70" x2="80" y2="70" />
      </>
    ),
  },
  adduction: {
    caption: {
      fr: "Assis, jambes ecartees contre les rouleaux. Serre les cuisses pour les rapprocher en controle, contracte l'interieur de cuisse, puis reviens lentement a l'ecartement (etirement).",
      en: "Seated, legs apart against the pads. Squeeze the thighs together under control, contract the inner thighs, then slowly return to the open position (stretch).",
    },
    viewBox: "0 0 120 110",
    lowLabel: { fr: "Jambes ecartees", en: "Legs open" },
    highLabel: { fr: "Jambes serrees", en: "Legs closed" },
    low: (
      <>
        <circle className="dia-head" cx="60" cy="30" r="8" />
        <path className="dia-fig" d="M60 38 L60 66 M60 66 L36 96 M60 66 L84 96" />
        <line className="dia-weight" x1="30" y1="92" x2="30" y2="104" />
        <line className="dia-weight" x1="90" y1="92" x2="90" y2="104" />
      </>
    ),
    high: (
      <>
        <circle className="dia-head" cx="60" cy="30" r="8" />
        <path className="dia-fig" d="M60 38 L60 66 M60 66 L54 98 M60 66 L66 98" />
        <line className="dia-weight" x1="48" y1="94" x2="48" y2="106" />
        <line className="dia-weight" x1="72" y1="94" x2="72" y2="106" />
      </>
    ),
  },
  abduction: {
    caption: {
      fr: "Assis, penche legerement le buste en avant. Ecarte les cuisses vers l'exterieur en contractant les fessiers, puis reviens en controle sans laisser claquer la charge.",
      en: "Seated, lean the torso slightly forward. Open the thighs outward by squeezing the glutes, then return under control without letting the weight slam.",
    },
    viewBox: "0 0 120 110",
    lowLabel: { fr: "Jambes serrees", en: "Legs closed" },
    highLabel: { fr: "Jambes ecartees", en: "Legs open" },
    low: (
      <>
        <circle className="dia-head" cx="60" cy="30" r="8" />
        <path className="dia-fig" d="M60 38 L60 66 M60 66 L54 98 M60 66 L66 98" />
        <line className="dia-weight" x1="48" y1="94" x2="48" y2="106" />
        <line className="dia-weight" x1="72" y1="94" x2="72" y2="106" />
      </>
    ),
    high: (
      <>
        <circle className="dia-head" cx="60" cy="30" r="8" />
        <path className="dia-fig" d="M60 38 L60 66 M60 66 L36 96 M60 66 L84 96" />
        <line className="dia-weight" x1="30" y1="92" x2="30" y2="104" />
        <line className="dia-weight" x1="90" y1="92" x2="90" y2="104" />
      </>
    ),
  },
  "calf-raise": {
    caption: {
      fr: "Debout, avant des pieds sur une marche. Descends les talons au maximum (etirement), puis monte le plus haut possible sur la pointe des pieds. Pause en haut et en bas, sans rebondir.",
      en: "Standing, balls of the feet on a step. Drop the heels as far as possible (stretch), then rise as high as possible onto the toes. Pause at top and bottom, no bouncing.",
    },
    viewBox: "0 0 120 120",
    lowLabel: { fr: "Talons bas", en: "Heels down" },
    highLabel: { fr: "Sur la pointe", en: "On the toes" },
    low: (
      <>
        <line className="dia-weight" x1="38" y1="30" x2="46" y2="30" />
        <line className="dia-weight" x1="74" y1="30" x2="82" y2="30" />
        <circle className="dia-head" cx="60" cy="24" r="9" />
        <path className="dia-fig" d="M60 33 L60 74 M60 74 L54 104 M60 74 L66 104 M52 36 L50 60 M68 36 L70 60" />
        <line className="dia-ground" x1="30" y1="104" x2="90" y2="104" />
      </>
    ),
    high: (
      <>
        <line className="dia-weight" x1="38" y1="22" x2="46" y2="22" />
        <line className="dia-weight" x1="74" y1="22" x2="82" y2="22" />
        <circle className="dia-head" cx="60" cy="16" r="9" />
        <path className="dia-fig" d="M60 25 L60 66 M60 66 L54 96 M60 66 L66 96 M52 28 L50 52 M68 28 L70 52" />
        <line className="dia-ground" x1="30" y1="104" x2="90" y2="104" />
      </>
    ),
  },
  "calf-raise-seated": {
    caption: {
      fr: "Assis, genoux flechis, charge sur les cuisses. Descends les talons pour etirer, puis pousse sur la pointe des pieds le plus haut possible. Cible le solaire (sous le mollet).",
      en: "Seated, knees bent, load on the thighs. Drop the heels to stretch, then push onto the toes as high as possible. Targets the soleus (under the calf).",
    },
    viewBox: "0 0 120 110",
    lowLabel: { fr: "Talons bas", en: "Heels down" },
    highLabel: { fr: "Sur la pointe", en: "On the toes" },
    low: (
      <>
        <circle className="dia-head" cx="40" cy="30" r="8" />
        <path className="dia-fig" d="M40 38 L44 62 M44 62 L70 62 M70 62 L70 96" />
        <line className="dia-weight" x1="58" y1="52" x2="82" y2="52" />
        <line className="dia-ground" x1="50" y1="98" x2="96" y2="98" />
      </>
    ),
    high: (
      <>
        <circle className="dia-head" cx="40" cy="26" r="8" />
        <path className="dia-fig" d="M40 34 L44 58 M44 58 L70 58 M70 58 L70 88" />
        <line className="dia-weight" x1="58" y1="48" x2="82" y2="48" />
        <line className="dia-ground" x1="50" y1="98" x2="96" y2="98" />
      </>
    ),
  },
};

/** Relie chaque machine/exercice (par id) a un type de mouvement. */
export const MACHINE_MOVEMENT: Record<string, string> = {
  // pectoraux
  "developpe-couche-halteres": "bench",
  "developpe-couche-barre": "bench",
  "developpe-incline-machine": "incline-press",
  "ecarte-poulie": "fly",
  // deltoides
  "elevations-laterales-halteres": "lateral-raise",
  "developpe-militaire": "overhead-press",
  "oiseau-poulie": "reverse-fly",
  // biceps
  "curl-incline-halteres": "curl",
  "curl-barre": "curl",
  "curl-marteau": "curl",
  // avant-bras
  "curl-poignet": "wrist-curl",
  "farmer-walk": "carry",
  "extension-poignet": "wrist-curl",
  // abdos
  "crunch-poulie": "cable-crunch",
  "releve-jambes-suspendu": "hanging-leg-raise",
  planche: "plank",
  // obliques
  "pallof-press": "pallof",
  "rotation-poulie": "woodchop",
  "side-plank": "side-plank",
  // quadriceps
  "squat-barre": "squat",
  "presse-jambes": "leg-press",
  "leg-extension": "leg-extension",
  fentes: "lunge",
  // adducteurs
  "machine-adducteurs": "adduction",
  "squat-sumo": "squat",
  // trapezes
  "shrugs-halteres": "shrug",
  "face-pull": "face-pull",
  // grand dorsal
  tractions: "pullup",
  "tirage-vertical": "pulldown",
  "rowing-halteres": "row",
  "rowing-machine": "row",
  // lombaires
  "souleve-de-terre": "deadlift",
  hyperextensions: "back-extension",
  // triceps
  "extension-poulie-triceps": "pushdown",
  "extension-nuque": "overhead-extension",
  dips: "dips",
  // fessiers
  "hip-thrust": "hip-thrust",
  "hip-thrust-squat": "squat",
  "abduction-machine": "abduction",
  // ischios
  "souleve-roumain": "deadlift",
  "leg-curl": "leg-curl",
  // mollets
  "mollets-debout": "calf-raise",
  "mollets-assis": "calf-raise-seated",
};

function Pose({ label, viewBox, children }: { label: string; viewBox: string; children: ReactNode }) {
  return (
    <div className="w-[76px] shrink-0 text-center">
      <svg
        viewBox={viewBox}
        className="h-auto w-full rounded-md border border-app bg-card"
        role="img"
        aria-label={label}
      >
        {children}
      </svg>
      <p className="mt-1 text-[0.58rem] font-semibold uppercase leading-tight tracking-wide text-muted-app">
        {label}
      </p>
    </div>
  );
}

export function ExerciseDiagram({ machineId }: { machineId: string }) {
  const { lang } = useSettings();
  const key = MACHINE_MOVEMENT[machineId];
  const dia = key ? DIAGRAMS[key] : undefined;
  if (!dia) return null;

  const viewBox = dia.viewBox ?? "0 0 120 120";
  const lowLabel = dia.lowLabel ? dia.lowLabel[lang] : UI.muscle.posLow[lang];
  const highLabel = dia.highLabel ? dia.highLabel[lang] : UI.muscle.posHigh[lang];

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <div className="flex shrink-0 gap-2">
        <Pose label={lowLabel} viewBox={viewBox}>
          {dia.low}
        </Pose>
        <Pose label={highLabel} viewBox={viewBox}>
          {dia.high}
        </Pose>
      </div>
      <p className="text-sm leading-relaxed text-app">
        <span className="font-bold text-brand">{UI.muscle.howTo[lang]} : </span>
        {dia.caption[lang]}
      </p>
    </div>
  );
}
