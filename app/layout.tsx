import type { Metadata } from "next";
import { Inter, DM_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const BASE_URL = "https://cognexa.in";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Cognexa Technologies | Enterprise AI, Cybersecurity & Data Platforms",
    template: "%s | Cognexa Technologies",
  },
  description:
    "Cognexa delivers enterprise cybersecurity (Surakshitam), AI automation (Aurobit), and knowledge intelligence (Vidya AI) — purpose-built platforms for mid-to-large businesses across India.",
  keywords: [
    "enterprise cybersecurity India",
    "AI automation platform",
    "Vidya AI knowledge assistant",
    "Aurobit AIOps",
    "Surakshitam firewall",
    "managed firewall India",
    "vulnerability scanning India",
    "penetration testing India",
    "enterprise data management",
    "private LLM deployment",
    "BFSI cybersecurity",
    "manufacturing AI automation",
    "Cognexa Technologies",
  ],
  authors: [{ name: "Cognexa Technologies", url: BASE_URL }],
  creator: "Cognexa Technologies",
  publisher: "Cognexa Technologies",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: [
      { url: "/cognexa-logo.webp", type: "image/webp" },
    ],
    apple: "/cognexa-logo.webp",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    alternateLocale: ["en_US"],
    url: BASE_URL,
    siteName: "Cognexa Technologies",
    title: "Cognexa Technologies | Intelligence Infrastructure for the Modern Enterprise",
    description:
      "Three purpose-built platforms — Surakshitam (cybersecurity), Aurobit (AI automation), and Vidya AI (knowledge intelligence) — for enterprise-grade operations.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cognexa Technologies",
    description:
      "Enterprise cybersecurity, AI automation, and knowledge intelligence platforms. Book a free audit.",
    creator: "@cognexa_in",
  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    google: "", // add Google Search Console verification token
  },
  category: "technology",
};

// Global structured data — Organization + WebSite
const globalSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Cognexa Technologies",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/cognexa-logo.webp`,
        width: 240,
        height: 100,
      },
      telephone: "+91 98989 31509",
      email: "sales@cognexa.in",
      description:
        "Cognexa Technologies provides enterprise cybersecurity, AI automation, and knowledge intelligence platforms — Surakshitam, Aurobit, and Vidya AI — to mid-to-large businesses across India.",
      foundingLocation: {
        "@type": "Place",
        addressCountry: "IN",
      },
      areaServed: [
        { "@type": "Country", name: "India" },
        { "@type": "AdministrativeArea", name: "Global" },
      ],
      knowsAbout: [
        "Cybersecurity",
        "AI Automation",
        "Knowledge Management",
        "Enterprise Data Management",
        "AIOps",
        "Managed Firewall",
        "Vulnerability Scanning",
        "Penetration Testing",
        "Large Language Models",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Cognexa Platform Products",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "SoftwareApplication",
              name: "Surakshitam",
              applicationCategory: "SecurityApplication",
              description:
                "Enterprise cybersecurity suite comprising Kavach (managed firewall), Durg (vulnerability scanning), and Shastra (penetration testing).",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "SoftwareApplication",
              name: "Aurobit",
              applicationCategory: "BusinessApplication",
              description:
                "AI operations and automation platform for runbook automation, incident management, and AIOps analytics.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "SoftwareApplication",
              name: "Vidya AI",
              applicationCategory: "BusinessApplication",
              description:
                "Private knowledge intelligence platform that makes enterprise policies and SOPs accessible through natural language, deployed on-premise.",
            },
          },
        ],
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91 98989 31509",
          contactType: "sales",
          availableLanguage: ["English", "Hindi"],
          areaServed: "IN",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Cognexa Technologies",
      description: "Intelligence infrastructure for the modern enterprise.",
      publisher: { "@id": `${BASE_URL}/#organization` },
      inLanguage: "en-IN",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${dmSans.variable} ${geistMono.variable}`}>
      <head>
        {/* Structured data — global */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
        />
      </head>
      <body className="antialiased">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-94WKX6TQQF"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-94WKX6TQQF');
          `}
        </Script>

        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
