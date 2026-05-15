import type { Metadata, Viewport } from "next";
import "./globals.css";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { LenisProvider } from "@/components/lenis-provider";
import { Cursor } from "@/components/cursor";

export const metadata: Metadata = {
  metadataBase: new URL("https://montaraz.com"),
  title: {
    default: "Montaraz — Provisión para lo indómito",
    template: "%s · Montaraz",
  },
  description:
    "Tienda online curada de caza, pesca, montaña y cocina del despiece. Magazine, atlas, expediciones, Club Maestre. Forjada en Madrid y Asturias.",
  keywords: [
    "caza",
    "pesca",
    "montaña",
    "rececho",
    "mosca seca",
    "munición",
    "cuchillería",
    "Sako",
    "Beretta",
    "Sage",
    "Pallarès Solsona",
  ],
  authors: [{ name: "Montaraz" }],
  creator: "Montaraz",
  openGraph: {
    title: "Montaraz — Provisión para lo indómito",
    description:
      "Tienda curada de caza, pesca, montaña y cocina del despiece. Magazine, atlas, expediciones.",
    url: "https://montaraz.com",
    siteName: "Montaraz",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Montaraz — Provisión para lo indómito",
    description:
      "Tienda curada de caza, pesca, montaña y cocina del despiece.",
  },
  icons: {
    icon: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#161C12" },
    { media: "(prefers-color-scheme: light)", color: "#EFE0BC" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="grain relative min-h-screen bg-[color:var(--bg)] text-[color:var(--fg)] antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[101] focus:rounded-md focus:bg-[color:var(--accent)] focus:px-4 focus:py-2 focus:text-sm focus:text-[color:var(--color-verde-1)]"
        >
          Ir a contenido principal
        </a>

        <LenisProvider />
        <Cursor />
        <Header />

        <main id="main" className="pt-0">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
