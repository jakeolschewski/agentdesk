import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://agentdesk.thewedgemethodai.com";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/dashboard`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/dashboard/agents/intake`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/dashboard/agents/proposal`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/dashboard/agents/report`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/for/law-firms`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/for/agencies`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/for/consultants`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
