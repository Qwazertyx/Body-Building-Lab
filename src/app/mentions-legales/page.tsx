/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales de Vico Body Building Lab (VicoBBL)",
  robots: { index: false },
};

export default function MentionsLegalesPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-8 py-4">
      <header>
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">Mentions légales</h1>
        <p className="mt-2 text-sm text-muted-app">Dernière mise à jour : juillet 2025</p>
      </header>

      <section className="rounded-2xl border border-app bg-card p-6 space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-wide text-muted-app">Éditeur du site</h2>
        <p className="text-app leading-relaxed">
          Ce site est édité à titre personnel et non-commercial par :<br />
          <strong>qwazertyx</strong><br />
          Contact : <a href="mailto:qwazertyx84@gmail.com" className="text-brand underline underline-offset-2">qwazertyx84@gmail.com</a><br />
          GitHub : <a href="https://github.com/qwazertyx" target="_blank" rel="noopener noreferrer" className="text-brand underline underline-offset-2">github.com/qwazertyx</a>
        </p>
        <p className="text-sm text-muted-app">
          Conformément à l'article 6, III, 2° de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans
          l'économie numérique (LCEN), l'éditeur étant une personne physique n'exerçant pas d'activité
          professionnelle en lien avec ce site, seul l'email de contact est rendu public.
        </p>
      </section>

      <section className="rounded-2xl border border-app bg-card p-6 space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-wide text-muted-app">Hébergement</h2>
        <p className="text-app leading-relaxed">
          Ce site est hébergé par :<br />
          <strong>Vercel Inc.</strong><br />
          340 Pine Street, Suite 701<br />
          San Francisco, CA 94104 — États-Unis<br />
          Site : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-brand underline underline-offset-2">vercel.com</a>
        </p>
      </section>

      <section className="rounded-2xl border border-app bg-card p-6 space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-wide text-muted-app">Nature du site</h2>
        <p className="text-app leading-relaxed">
          VicoBBL est une application web progressive (PWA) à but purement informatif et éducatif, destinée
          à accompagner les pratiquants de musculation dans leur entraînement. Le site est gratuit, sans
          publicité et sans monétisation d'aucune sorte.
        </p>
      </section>

      <section className="rounded-2xl border border-app bg-card p-6 space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-wide text-muted-app">Propriété intellectuelle</h2>
        <p className="text-app leading-relaxed">
          L'ensemble des contenus présents sur ce site (textes, schémas anatomiques, données d'exercices,
          illustrations) est la propriété de l'éditeur ou est utilisé avec les droits correspondants. Toute
          reproduction, distribution ou utilisation commerciale sans autorisation préalable est interdite.
        </p>
        <p className="text-app leading-relaxed">
          Les contenus d'information nutritionnelle et d'exercices s'appuient sur des sources scientifiques
          reconnues (ACSM, NSCA, ExRx). Ils ne constituent pas un avis médical.
        </p>
      </section>

      <section className="rounded-2xl border border-app bg-card p-6 space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-wide text-muted-app">Limitation de responsabilité</h2>
        <p className="text-app leading-relaxed">
          Les informations présentes sur ce site sont fournies à titre indicatif. L'éditeur ne saurait être
          tenu responsable des dommages directs ou indirects résultant de l'utilisation de ces informations.
          Consultez un professionnel de santé avant de démarrer tout programme d'exercice.
        </p>
      </section>
    </div>
  );
}
