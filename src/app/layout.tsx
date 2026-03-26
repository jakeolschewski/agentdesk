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
  title: "AgentDesk — AI Agents That Run Your Firm",
  description:
    "Pre-built AI agents for professional services. Client intake, proposals, and reports — automated in 5 minutes. Starting at $99/month.",
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
    title: "AgentDesk — AI Agents That Run Your Firm",
    description:
      "Pre-built AI agents for professional services. Works in 5 minutes. $99/month. No coding.",
    type: "website",
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
