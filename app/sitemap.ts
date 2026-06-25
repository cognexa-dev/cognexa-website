import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog";

const BASE = "https://cognexa.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const blogEntries: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(p.date).toISOString(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/solutions/cybersecurity`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/solutions/automation`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/solutions/knowledge`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/solutions/data-management`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/products/surakshitam`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/products/aurobit`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/products/vidya-ai`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/industries`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/case-studies`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    ...blogEntries,
  ];
}
