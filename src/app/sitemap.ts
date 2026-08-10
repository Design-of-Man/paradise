import type { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/seo";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { team } from "@/data/team";
import { partners } from "@/data/partners";
import { markets } from "@/data/markets";
import { insights } from "@/data/insights";

/**
 * Every indexable route, generated from the same data that renders the pages —
 * so a new project or article cannot be added without appearing in the sitemap.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: { path: string; priority: number; freq: MetadataRoute.Sitemap[0]["changeFrequency"] }[] = [
    { path: "/", priority: 1, freq: "weekly" },
    { path: "/about", priority: 0.9, freq: "monthly" },
    { path: "/services", priority: 0.9, freq: "monthly" },
    { path: "/portfolio", priority: 0.9, freq: "weekly" },
    { path: "/portfolio/completed", priority: 0.7, freq: "monthly" },
    { path: "/portfolio/active", priority: 0.8, freq: "weekly" },
    { path: "/markets", priority: 0.8, freq: "monthly" },
    { path: "/partners", priority: 0.8, freq: "monthly" },
    { path: "/team", priority: 0.8, freq: "monthly" },
    { path: "/process", priority: 0.7, freq: "monthly" },
    { path: "/leasing", priority: 0.9, freq: "weekly" },
    { path: "/insights", priority: 0.8, freq: "weekly" },
    { path: "/faq", priority: 0.7, freq: "monthly" },
    { path: "/contact", priority: 0.9, freq: "monthly" },
    { path: "/privacy", priority: 0.2, freq: "yearly" },
    { path: "/accessibility", priority: 0.2, freq: "yearly" },
  ];

  return [
    ...staticRoutes.map((r) => ({
      url: `${BASE_URL}${r.path}`,
      lastModified: now,
      changeFrequency: r.freq,
      priority: r.priority,
    })),
    ...services.map((s) => ({
      url: `${BASE_URL}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...projects.map((p) => ({
      url: `${BASE_URL}/portfolio/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...markets.map((m) => ({
      url: `${BASE_URL}/markets/${m.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...partners.map((p) => ({
      url: `${BASE_URL}/partners/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...team.map((t) => ({
      url: `${BASE_URL}/team/${t.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
    ...insights.map((i) => ({
      url: `${BASE_URL}/insights/${i.slug}`,
      lastModified: new Date(i.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
