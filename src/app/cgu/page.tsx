/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions d'utilisation",
  description: "Conditions générales d'utilisation de Vico Body Building Lab (VicoBBL)",
  robots: { index: false },
};

export default function CguPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-8 py-4">
      <header>
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">Conditions d'utilisation</h1>
        <p className="mt-2 text-sm text-muted-app">Dernière mise à jour : juillet 2025</p>
      </header>

      <section className="rounded-2xl border border-app bg-card p-6 space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-wide text-muted-app">Objet</h2>
        <p className="text-app leading-relaxed">
          Les présentes conditions d'utilisation régissent l'accès et l'utilisation de l'application web
          <strong> Vico Body Building Lab (VicoBBL)</strong>, disponible à l'adresse{" "}
          <strong>vicobbl.vercel.app</strong>. En utilisant ce site, vous acceptez sans réserve les
          présentes conditions.
        </p>
      </section>

      <section className="rounded-2xl border border-app bg-card p-6 space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-wide text-muted-app">Description du service</h2>
        <p className="text-app leading-relaxed">
          VicoBBL est une application gratuite, sans publicité, à usage personnel, proposant :
        </p>
        <ul className="space-y-1 text-app">
          {[
            "Un guide interactif des groupes musculaires et des exercices de musculation",
            "Un calculateur nutritionnel (TDEE — Dépense Énergétique Journalière Totale)",
            "Des routines d'échauffement et d'étirements",
            "Des outils d'entraînement (générateur de séance, calcul de 1RM, calculateur de disques, suivi du poids)",
            "Un journal de séances personnel stocké localement",
          ].map((item) => (
            <li key={item} className="flex gap-2 text-sm">
              <span className="text-brand mt-0.5">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-app bg-card p-6 space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-wide text-muted-app">Avertissement médical</h2>
        <div className="rounded-xl bg-yellow-500/10 border border-yellow-500/20 p-4">
          <p className="text-app leading-relaxed">
            ⚠️ Les contenus de VicoBBL sont fournis à titre <strong>informatif et éducatif uniquement</strong>.
            Ils ne constituent pas un avis médical, un diagnostic ou une prescription. Consultez un médecin
            ou un professionnel de santé qualifié avant de commencer tout programme d'exercice physique,
            notamment en cas de condition médicale préexistante.
          </p>
        </div>
        <p className="text-app leading-relaxed">
          Les valeurs calculées (TDEE, 1RM, etc.) sont des estimations basées sur des formules scientifiques
          reconnues et ne sauraient remplacer un suivi personnalisé par un professionnel.
        </p>
      </section>

      <section className="rounded-2xl border border-app bg-card p-6 space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-wide text-muted-app">Utilisation acceptable</h2>
        <p className="text-app leading-relaxed">L'utilisateur s'engage à utiliser VicoBBL :</p>
        <ul className="space-y-1 text-app">
          {[
            "À des fins personnelles et non-commerciales uniquement",
            "Sans tenter de décompiler, copier ou exploiter commercialement le code source ou les contenus",
            "Sans perturber le fonctionnement du service ou des serveurs d'hébergement",
          ].map((item) => (
            <li key={item} className="flex gap-2 text-sm">
              <span className="text-brand mt-0.5">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-app bg-card p-6 space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-wide text-muted-app">Propriété intellectuelle</h2>
        <p className="text-app leading-relaxed">
          L'ensemble des éléments du site (code, design, textes, schémas anatomiques, données d'exercices)
          est protégé par le droit d'auteur. Toute reproduction ou utilisation à des fins commerciales est
          interdite sans accord préalable de l'éditeur.
        </p>
      </section>

      <section className="rounded-2xl border border-app bg-card p-6 space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-wide text-muted-app">Responsabilité</h2>
        <p className="text-app leading-relaxed">
          L'éditeur s'efforce de maintenir le service disponible et les informations à jour, mais ne garantit
          pas l'exactitude, l'exhaustivité ou l'adéquation des contenus à une situation particulière.
          L'utilisation du service se fait sous l'entière responsabilité de l'utilisateur.
        </p>
        <p className="text-app leading-relaxed">
          L'éditeur ne pourra être tenu responsable de tout dommage direct ou indirect résultant de
          l'utilisation ou de l'impossibilité d'utiliser le service.
        </p>
      </section>

      <section className="rounded-2xl border border-app bg-card p-6 space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-wide text-muted-app">Modifications</h2>
        <p className="text-app leading-relaxed">
          L'éditeur se réserve le droit de modifier les présentes conditions à tout moment. Les modifications
          prennent effet dès leur publication. L'utilisation continue du service après modification vaut
          acceptation des nouvelles conditions.
        </p>
      </section>

      <section className="rounded-2xl border border-app bg-card p-6 space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-wide text-muted-app">Droit applicable</h2>
        <p className="text-app leading-relaxed">
          Les présentes conditions sont soumises au droit français. En cas de litige, les tribunaux français
          seront seuls compétents.
        </p>
      </section>

      <section className="rounded-2xl border border-app bg-card p-6 space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-wide text-muted-app">Contact</h2>
        <p className="text-app">
          <a href="mailto:qwazertyx84@gmail.com" className="text-brand underline underline-offset-2">
            qwazertyx84@gmail.com
          </a>
        </p>
      </section>
    </div>
  );
}
