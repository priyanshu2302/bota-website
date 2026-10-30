
import type { Metadata } from "next";
import "./globals.css";
import AIChatWidget from "../components/AIChatWidget";
import Loader from "@/components/loader";

const siteUrl = "https://bota-website.vercel.app";
const siteName = "BotA";
const logoUrl = `${siteUrl}/bota-logo.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  verification: {
    google: "wui8PwkQwDjQ5SYY7GNk_TI7H2HtxNwTy74vbdQVg5g",
  },

  title: {
    default: "BotA | AI-Powered Clinic Assistant",
    template: "%s | BotA",
  },

  description:
    "BotA is an AI-powered clinic assistant that helps healthcare teams manage routine patient enquiries and appointment requests.",

  applicationName: siteName,

  alternates: {
    canonical: siteUrl,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "BotA | AI-Powered Clinic Assistant",
    description:
      "Simplify clinic communication with BotA's AI-powered patient enquiry and appointment-request assistant.",
    url: siteUrl,
    siteName,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/bota-logo.png",
        width: 512,
        height: 512,
        alt: "BotA AI Clinic Assistant logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "BotA | AI-Powered Clinic Assistant",
    description:
      "Explore BotA's AI-powered clinic assistant for patient enquiries and appointment requests.",
    images: ["/bota-logo.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "BotA",
      url: `${siteUrl}/`,
      logo: {
        "@type": "ImageObject",
        url: logoUrl,
        width: 512,
        height: 512,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "BotA",
      alternateName: [
        "BotA AI Clinic Assistant",
        "BotA Clinic Assistant",
      ],
      url: `${siteUrl}/`,
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "en-IN",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </head>

      <body>
        <Loader />
        {children}
        <AIChatWidget />
      </body>
    </html>
  );
}
