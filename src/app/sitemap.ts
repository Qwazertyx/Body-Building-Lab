import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { MUSCLES } from "@/data/muscles";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = ["", "/nutrition", "/mobilite", "/journal", "/outils", "/parametres"].map(
    (path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })
  );

  const muscleRoutes = MUSCLES.map((m) => ({
    url: `${SITE_URL}/muscle/${m.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...muscleRoutes];
}
