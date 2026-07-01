import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-md py-20 text-center">
      <p className="text-6xl font-black text-brand">404</p>
      <h1 className="mt-4 text-2xl font-bold">Page introuvable / Page not found</h1>
      <p className="mt-2 text-sm text-muted-app">
        Cette page n&apos;existe pas. / This page does not exist.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-lg bg-brand px-5 py-2.5 font-semibold text-white transition-opacity hover:opacity-90"
      >
        ← Accueil / Home
      </Link>
    </div>
  );
}
