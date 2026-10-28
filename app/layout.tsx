
import type { Metadata } from "next";
import "./globals.css";
import AIChatWidget from "../components/AIChatWidget";
import Loader from "@/components/loader";

export const metadata: Metadata = {
  title: "BotA | AI-Powered Clinic Assistant",
  description:
    "BotA helps clinics handle routine patient enquiries and appointment requests with AI-powered conversations.",
  applicationName: "BotA",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "BotA | AI-Powered Clinic Assistant",
    description:
      "Discover BotA's approach to simpler clinic communication and AI-assisted appointment requests.",
    siteName: "BotA",
    type: "website",
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
