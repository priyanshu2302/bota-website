
import type { Metadata } from "next";
import "./globals.css";
import AIChatWidget from "../components/AIChatWidget";
import Loader from "@/components/loader";

const siteUrl = "https://bota-website.vercel.app";

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

  applicationName: "BotA",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    title: "BotA | AI-Powered Clinic Assistant",
    description:
      "Simplify clinic communication with BotA's AI-powered patient enquiry and appointment-request assistant.",
    url: siteUrl,
    siteName: "BotA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "BotA | AI-Powered Clinic Assistant",
    description:
      "Explore BotA's AI-powered clinic assistant for patient enquiries and appointment requests.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "BotA",
  alternateName: "BotA AI Clinic Assistant",
  url: siteUrl,
  publisher: {
    "@type": "Organization",
    name: "BotA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
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
