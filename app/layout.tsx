import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const SITE_URL = "https://www.growlocal360.com";
const SITE_NAME = "GrowLocal 360";
const DEFAULT_TITLE = "GrowLocal 360 — GBP-First Websites for Local Service Businesses";
const DEFAULT_DESCRIPTION =
  "Launch SEO-optimized websites built around your Google Business Profile. Turn completed jobs into rankings, trust, and local leads with Job Snaps, AI content, and GBP integration.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: DEFAULT_TITLE,
    template: "%s | GrowLocal 360",
  },
  description: DEFAULT_DESCRIPTION,

  applicationName: SITE_NAME,
  generator: "Next.js",
  keywords: [
    "local SEO",
    "Google Business Profile",
    "GBP website",
    "local service business website",
    "job snaps",
    "local lead generation",
    "HVAC website",
    "plumbing website",
    "roofing website",
    "landscaping website",
    "appliance repair website",
    "handyman website",
    "pressure washing website",
    "fence building website",
    "local search ranking",
    "EEAT",
    "service area pages",
    "local SEO platform",
  ],

  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "GrowLocal 360 — GBP-First Websites for Local Service Businesses",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/images/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: SITE_URL,
  },

  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },

  other: {
    "theme-color": "#ffffff",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    url: SITE_URL,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: DEFAULT_DESCRIPTION,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free account. Pay only when you activate a site.",
    },
    creator: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/images/grow-local-360-logo-black.svg`,
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
