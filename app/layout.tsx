import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE = "https://macrova.in";
const TITLE =
  "Macrova — Free AI Nutrition, Calorie & Workout Tracker for iOS & Android";
const DESC =
  "Macrova is a free AI calorie and nutrition tracker for iOS and Android. Log food from a photo, get personalized macro targets, and generate AI meal plans and workout plans.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: TITLE,
  description: DESC,
  authors: [{ name: "Macrova" }],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  } as Metadata["robots"],
  icons: { icon: "/assets/logo.png", apple: "/assets/logo.png" },
  openGraph: {
    type: "website",
    siteName: "Macrova",
    title: TITLE,
    description:
      "Snap a photo, get instant macros. AI meal plans, workout splits, and weekly health insights — all in one app. Free on iOS and Android.",
    url: SITE,
    images: [`${SITE}/assets/phone-hero-center.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Macrova — Free AI Nutrition, Calorie & Workout Tracker",
    description:
      "AI photo food logging, personalized macro targets, and AI meal + workout plans. Free on iOS and Android.",
    images: [`${SITE}/assets/phone-hero-center.png`],
  },
  other: {
    // iOS Safari Smart App Banner
    "apple-itunes-app": "app-id=6778376235",
  },
};

export const viewport: Viewport = {
  themeColor: "#07090B",
  width: "device-width",
  initialScale: 1,
};

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://macrova.in/#organization",
      name: "Macrova",
      url: "https://macrova.in/",
      logo: "https://macrova.in/assets/logo.png",
      sameAs: [
        "https://play.google.com/store/apps/details?id=com.ruturajjena.junkfoodtracker",
        "https://www.instagram.com/macrova_ai",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://macrova.in/#website",
      url: "https://macrova.in/",
      name: "Macrova",
      description:
        "Free AI nutrition, calorie and workout tracker for iOS and Android.",
      publisher: { "@id": "https://macrova.in/#organization" },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://macrova.in/#app",
      name: "Macrova",
      applicationCategory: "HealthApplication",
      operatingSystem: "iOS, Android",
      url: "https://macrova.in/",
      downloadUrl: [
        "https://apps.apple.com/in/app/macrova-ai-calorie-counter/id6778376235",
        "https://play.google.com/store/apps/details?id=com.ruturajjena.junkfoodtracker",
      ],
      description:
        "Macrova is a free AI-powered nutrition and macro tracker for iOS and Android. It logs food from a photo, sets personalized calorie and macro targets, and generates AI meal plans and workout plans, plus weekly AI Health Lab insights.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      publisher: { "@id": "https://macrova.in/#organization" },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="js dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
