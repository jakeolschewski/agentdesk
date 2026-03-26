import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agentdesk-inky.vercel.app"),
  title: "AgentDesk — AI Agents for Professional Services",
  description:
    "Pre-built AI agents that handle client intake, proposals, and reports. Automate 42% of admin work in 5 minutes.",
  keywords: [
    "AI agents",
    "professional services automation",
    "consulting automation",
    "AI for law firms",
    "AI for agencies",
    "client intake automation",
    "proposal automation",
  ],
  openGraph: {
    title: "AgentDesk — AI Agents for Professional Services",
    description:
      "Pre-built AI agents that handle client intake, proposals, and reports. Automate 42% of admin work in 5 minutes.",
    url: "https://agentdesk-inky.vercel.app",
    siteName: "AgentDesk",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AgentDesk — AI Agents for Professional Services",
    description:
      "Pre-built AI agents that handle client intake, proposals, and reports. Automate 42% of admin work in 5 minutes.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
