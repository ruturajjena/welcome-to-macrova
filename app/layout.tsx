import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import theme from "@/config/theme";
import { themeCss } from "@/lib/cssVars";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

/* ---------------------------------------------------------------- SEO ------
 * All copy comes from theme.seo. Keep the existing macrova.in title/description
 * intent so search rankings don't regress. Edit strings in config/theme.ts.
 * -------------------------------------------------------------------------- */
const url = theme.brand.domain;

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: theme.seo.title,
  description: theme.seo.description,
  keywords: [...theme.seo.keywords],
  applicationName: theme.brand.name,
  authors: [{ name: theme.brand.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url,
    siteName: theme.brand.name,
    title: theme.seo.title,
    description: theme.seo.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: theme.seo.title,
    description: theme.seo.description,
  },
  robots: { index: true, follow: true },
  category: "Health & Fitness",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: theme.colors.light.bg },
    { media: "(prefers-color-scheme: dark)", color: theme.colors.dark.bg },
  ],
  width: "device-width",
  initialScale: 1,
};

/* SoftwareApplication (mobile app) structured data for rich results / AI search */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: theme.brand.name,
  applicationCategory: "HealthApplication",
  operatingSystem: "iOS, Android",
  url,
  description: theme.seo.description,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: theme.walkthrough.map((f) => f.title),
  inLanguage: theme.languages.list.map((l) => l.code),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Theme colour variables generated from config/theme.ts */}
        <style dangerouslySetInnerHTML={{ __html: themeCss() }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
