import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et protection des données de VicoBBL",
  robots: { index: false },
};

export default function ConfidentialitePage() {
  return (
    <div className="mx-auto max-w-2xl space-y-8 py-4">
      <header>
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">Politique de confidentialité</h1>
        <p className="mt-2 text-sm text-muted-app">Dernière mise à jour : juillet 2025 — Conforme RGPD / CNIL</p>
      </header>

      <section className="rounded-2xl border border-app bg-card p-6 space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-wide text-muted-app">Résumé</h2>
        <div className="rounded-xl bg-brand/10 border border-brand/20 p-4">
          <p className="text-app leading-relaxed font-medium">
            VicoBBL ne collecte aucune donnée personnelle sur ses serveurs. Toutes vos données restent
            exclusivement sur votre appareil, dans le stockage local (localStorage) de votre navigateur.
            Aucune information ne nous est transmise.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-app bg-card p-6 space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-wide text-muted-app">Responsable du traitement</h2>
        <p className="text-app leading-relaxed">
          qwazertyx — <a href="mailto:qwazertyx84@gmail.com" className="text-brand underline underline-offset-2">qwazertyx84@gmail.com</a>
        </p>
        <p className="text-sm text-muted-app">
          Dans la mesure où aucune donnée personnelle n'est transmise à l'éditeur, celui-ci n'agit pas en
          qualité de responsable de traitement au sens de l'article 4 du RGPD pour les données stockées
          localement par l'utilisateur sur son propre appareil.
        </p>
      </section>

      <section className="rounded-2xl border border-app bg-card p-6 space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-wide text-muted-app">Données stockées localement</h2>
        <p className="text-app">
          L'application utilise le <strong>localStorage</strong> de votre navigateur pour sauvegarder vos
          préférences et vos données d'entraînement. Ces données ne quittent jamais votre appareil.
        </p>
        <div className="space-y-2">
          {[
            { key: "vico-theme", desc: "Thème visuel choisi (clair ou sombre)", type: "Préférence" },
            { key: "vico-lang", desc: "Langue de l'interface (FR ou EN)", type: "Préférence" },
            { key: "vico-favorites", desc: "Liste des groupes musculaires mis en favoris", type: "Préférence" },
            { key: "vico-workout-log", desc: "Historique de vos séances (exercice, charge, répétitions, date)", type: "Données d'entraînement" },
            { key: "vico-bodyweight", desc: "Suivi de votre poids corporel (date + valeur en kg)", type: "Données de santé" },
          ].map(({ key, desc, type }) => (
            <div key={key} className="rounded-lg border border-app bg-card-hover p-3">
              <div className="flex items-start justify-between gap-2">
                <code className="text-xs font-mono text-brand">{key}</code>
                <span className="text-xs text-muted-app shrink-0">{type}</span>
              </div>
              <p className="mt-1 text-sm text-app">{desc}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-app">
          Le calculateur TDEE (nutrition) utilise uniquement des données temporaires de session : elles ne
          sont jamais sauvegardées et disparaissent dès la fermeture de l'onglet.
        </p>
      </section>

      <section className="rounded-2xl border border-app bg-card p-6 space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-wide text-muted-app">Cookies et traceurs</h2>
        <p className="text-app leading-relaxed">
          VicoBBL <strong>n'utilise aucun cookie</strong> et aucun traceur de suivi (analytics, publicité,
          réseaux sociaux). Le stockage local (localStorage) utilisé est de nature strictement fonctionnelle :
          il permet uniquement de mémoriser vos réglages et vos données personnelles d'entraînement que vous
          saisissez vous-même.
        </p>
        <p className="text-sm text-muted-app">
          Conformément aux recommandations de la CNIL, les traceurs strictement nécessaires au fonctionnement
          du service ne requièrent pas de consentement préalable. Aucun bandeau de cookies n'est donc affiché.
        </p>
      </section>

      <section className="rounded-2xl border border-app bg-card p-6 space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-wide text-muted-app">Services tiers</h2>
        <p className="text-app leading-relaxed">
          VicoBBL n'intègre aucun service tiers (Google Analytics, Facebook Pixel, Hotjar, etc.). La seule
          infrastructure externe est l'hébergement Vercel, qui peut collecter des données techniques de
          connexion (adresse IP, navigateur, heure d'accès) dans ses journaux serveur. Ces données sont
          traitées par Vercel Inc. selon leur propre{" "}
          <a
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand underline underline-offset-2"
          >
            politique de confidentialité
          </a>
          .
        </p>
      </section>

      <section className="rounded-2xl border border-app bg-card p-6 space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-wide text-muted-app">Durée de conservation</h2>
        <p className="text-app leading-relaxed">
          Vos données sont conservées dans votre navigateur aussi longtemps que vous le souhaitez. Elles
          persistent jusqu'à ce que vous les supprimiez manuellement via les paramètres de votre navigateur
          ou en vidant le stockage local du site.
        </p>
      </section>

      <section className="rounded-2xl border border-app bg-card p-6 space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-wide text-muted-app">Vos droits (RGPD)</h2>
        <p className="text-app leading-relaxed">
          Puisque toutes vos données restent sur votre appareil, vous exercez par nature un contrôle total
          sur celles-ci. Vous pouvez à tout moment :
        </p>
        <ul className="space-y-1 text-app">
          {[
            "Consulter vos données dans les outils développeur de votre navigateur (onglet Application > Local Storage)",
            "Supprimer toutes vos données en vidant le localStorage de vicobbl.vercel.app",
            "Exporter vos données manuellement depuis votre navigateur",
          ].map((item) => (
            <li key={item} className="flex gap-2 text-sm">
              <span className="text-brand mt-0.5">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-sm text-muted-app">
          Pour toute question relative à la protection de vos données, contactez :{" "}
          <a href="mailto:qwazertyx84@gmail.com" className="text-brand underline underline-offset-2">
            qwazertyx84@gmail.com
          </a>
          . Vous pouvez également adresser une réclamation à la CNIL (
          <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-brand underline underline-offset-2">
            cnil.fr
          </a>
          ).
        </p>
      </section>

      <section className="rounded-2xl border border-app bg-card p-6 space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-wide text-muted-app">Sécurité</h2>
        <p className="text-app leading-relaxed">
          Le site est servi exclusivement en HTTPS. Les données stockées dans le localStorage sont isolées
          au domaine du site et ne sont accessibles qu'à VicoBBL, à votre navigateur et à vous-même.
        </p>
      </section>
    </div>
  );
}
