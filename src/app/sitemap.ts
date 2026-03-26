import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://agentdesk.thewedgemethodai.com";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/dashboard`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/dashboard/agents/intake`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/dashboard/agents/proposal`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/dashboard/agents/report`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];
}
