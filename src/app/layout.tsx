import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
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
  metadataBase: new URL("https://agentdesk.thewedgemethodai.com"),
  title:
    "AgentDesk — AI Agents for Professional Services | WEDGE Method",
  description:
    "Pre-built AI agents that automate client intake, proposals, and reports for consultants, agencies, and law firms. Starting at $99/month. Try free — no signup required.",
  keywords: [
    "AI agents",
    "professional services automation",
    "consulting automation",
    "AI for law firms",
    "AI for agencies",
    "client intake automation",
    "proposal automation",
    "AI proposal generator",
    "consulting firm AI",
    "automated client intake",
  ],
  alternates: {
    canonical: "https://agentdesk.thewedgemethodai.com",
  },
  openGraph: {
    title:
      "AgentDesk — AI Agents for Professional Services | WEDGE Method",
    description:
      "Pre-built AI agents that automate client intake, proposals, and reports for consultants, agencies, and law firms. Starting at $99/month. Try free — no signup required.",
    url: "https://agentdesk.thewedgemethodai.com",
    siteName: "AgentDesk",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AgentDesk — AI Agents for Professional Services | WEDGE Method",
    description:
      "Pre-built AI agents that automate client intake, proposals, and reports for consultants, agencies, and law firms. Starting at $99/month. Try free — no signup required.",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "AgentDesk",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              description:
                "Pre-built AI agents for consulting firms — automate client intake, proposals, and reports.",
              url: "https://agentdesk.thewedgemethodai.com",
              offers: [
                {
                  "@type": "Offer",
                  name: "Starter",
                  price: "99.00",
                  priceCurrency: "USD",
                  priceValidUntil: "2027-12-31",
                  url: "https://buy.stripe.com/6oUcN55Cz28j2e67ZibEA00",
                },
                {
                  "@type": "Offer",
                  name: "Professional",
                  price: "349.00",
                  priceCurrency: "USD",
                  priceValidUntil: "2027-12-31",
                  url: "https://buy.stripe.com/14AfZh7KHbIT5qigvObEA01",
                },
                {
                  "@type": "Offer",
                  name: "Agency",
                  price: "799.00",
                  priceCurrency: "USD",
                  priceValidUntil: "2027-12-31",
                  url: "https://buy.stripe.com/6oUeVd8OLcMX8Cu0wQbEA02",
                },
              ],
              provider: {
                "@type": "Organization",
                name: "WEDGE Method LLC",
                url: "https://thewedgemethodai.com",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        {children}
      </body>

      {/* Sentry Error Tracking — Browser Loader Script */}
      <Script
        src="https://js.sentry-cdn.com/d797d88e64447a5ff95db25b3f1f1df6.min.js"
        strategy="beforeInteractive"
        crossOrigin="anonymous"
      />

      {/* Google Analytics 4 */}
      <GoogleAnalytics gaId="G-QHEZ9C3FHS" />
    </html>
  );
}
