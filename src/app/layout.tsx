import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SettingsProvider } from "@/lib/i18n";
import { WorkoutLogProvider } from "@/lib/workout-log";
import { FavoritesProvider } from "@/lib/favorites";
import { Navbar } from "@/components/Navbar";
import { RestTimer } from "@/components/RestTimer";
import { ServiceWorkerRegister } from "@/components/ServiceWorkerRegister";
import { SITE_URL, SITE_NAME } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const DESCRIPTION =
  "Assistant de salle de sport : clique sur un muscle pour decouvrir les meilleures machines, la nutrition (calculateur de calories), l'echauffement et les etirements. Debutant comme expert. FR/EN.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Vico Body Building Lab (VicoBBL) - Le laboratoire de ton physique",
    template: "%s - VicoBBL",
  },
  description: DESCRIPTION,
  keywords: [
    "musculation",
    "salle de sport",
    "muscles",
    "machines",
    "nutrition",
    "calories",
    "echauffement",
    "etirements",
  ],
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: "Vico Body Building Lab (VicoBBL)",
    description: DESCRIPTION,
    url: SITE_URL,
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Vico Body Building Lab (VicoBBL)",
    description: DESCRIPTION,
  },
  applicationName: "VicoBBL",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "VicoBBL",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0d12",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
      <head>
        {/* Applique le theme memorise avant le premier rendu pour eviter le flash. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('vico-theme');var d=document.documentElement;if(t==='light'){d.classList.add('light');d.classList.remove('dark');}else{d.classList.add('dark');d.classList.remove('light');}var l=localStorage.getItem('vico-lang');if(l==='fr'||l==='en'){d.lang=l;}}catch(e){}})();`,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <SettingsProvider>
          <FavoritesProvider>
            <WorkoutLogProvider>
              <Navbar />
              <main className="mx-auto w-full max-w-6xl px-4 pb-4 pt-4 sm:px-6">{children}</main>
              <footer className="mx-auto w-full max-w-6xl px-4 pb-28 pt-2 sm:px-6">
                <div className="border-t border-app pt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
                  <a href="/mentions-legales" className="text-xs text-muted-app hover:text-app transition-colors">Mentions légales</a>
                  <a href="/confidentialite" className="text-xs text-muted-app hover:text-app transition-colors">Confidentialité</a>
                  <a href="/cgu" className="text-xs text-muted-app hover:text-app transition-colors">CGU</a>
                  <span className="text-xs text-muted-app">© {new Date().getFullYear()} VicoBBL</span>
                </div>
              </footer>
              <RestTimer />
              <ServiceWorkerRegister />
            </WorkoutLogProvider>
          </FavoritesProvider>
        </SettingsProvider>
      </body>
    </html>
  );
}
