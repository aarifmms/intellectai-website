import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const SITE_URL = "https://intellectai.io";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "IntellectAI | The AI Operating System for SMBs",
  description:
    "We deploy Agentic AI infrastructure for small and medium businesses. Autonomous AI agents, voice AI, workflow orchestration, and 24/7 operations across automotive, healthcare, real estate, legal, trades, retail, and more.",
  keywords: [
    "AI operating system",
    "agentic AI",
    "AI workforce",
    "autonomous AI agents",
    "AI infrastructure for SMB",
    "AI voice agents",
    "AI automation SMB",
    "AI agency",
    "digital employees",
    "AI for automotive",
    "AI for healthcare",
    "AI for real estate",
    "AI for trades",
    "AI for law firms",
    "AI for restaurants",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "IntellectAI | The AI Operating System for SMBs",
    description:
      "Deploy autonomous AI agents across your business operations. The AI workforce built for small and medium businesses.",
    url: SITE_URL,
    siteName: "IntellectAI",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "IntellectAI · The AI Operating System for Small & Medium Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IntellectAI | The AI Operating System for SMBs",
    description:
      "Deploy autonomous AI agents across your business operations. The AI workforce built for SMBs.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta name="color-scheme" content="dark" />
      </head>
      <body className={`${inter.variable} ${sora.variable} antialiased bg-bg-primary text-text-primary`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "IntellectAI",
              url: SITE_URL,
              logo: `${SITE_URL}/favicon.svg`,
              description:
                "The AI Operating System for SMBs. We deploy autonomous AI agents, voice AI, and workflow orchestration for small and medium businesses across every industry.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Toronto",
                addressRegion: "ON",
                addressCountry: "CA",
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: "letstalk@intellectai.io",
                contactType: "sales",
              },
              sameAs: [
                "https://www.linkedin.com/company/intellectai-agency",
                "https://x.com/IntellectAI_io",
                "https://www.facebook.com/IntellectAIAgency",
              ],
              founder: {
                "@type": "Person",
                name: "Aarif Shaikh",
              },
              serviceType: [
                "AI Readiness Audit",
                "AI Agent Development",
                "Workflow Automation",
                "Custom AI SaaS Development",
                "Voice Agent Development",
              ],
              areaServed: {
                "@type": "Country",
                name: ["Canada", "United States"],
              },
              audience: {
                "@type": "BusinessAudience",
                audienceType: "Small and Medium Businesses",
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
