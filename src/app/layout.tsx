import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SettingsProvider } from "@/lib/i18n";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Vico Body Building Lab (VicoBBL) - Le laboratoire de ton physique",
  description:
    "Assistant de salle de sport : clique sur un muscle pour decouvrir les meilleures machines, la nutrition (calculateur de calories), l'echauffement et les etirements. Debutant comme expert. FR/EN.",
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
};

export const viewport: Viewport = {
  themeColor: "#0b0d12",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <SettingsProvider>
          <Navbar />
          <main className="mx-auto w-full max-w-6xl px-4 pb-24 pt-4 sm:px-6">{children}</main>
        </SettingsProvider>
      </body>
    </html>
  );
}
