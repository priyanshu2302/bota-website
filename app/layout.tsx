
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
    "BotA helps clinics handle routine patient enquiries and appointment requests with AI-powered conversations.",
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


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Loader />
        {children}
        <AIChatWidget />
      </body>
    </html>
  );
}
