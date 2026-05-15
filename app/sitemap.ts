import type { MetadataRoute } from "next";
import { productos, submarcas } from "@/lib/products";

const BASE = "https://montaraz.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/tienda",
    "/manifiesto",
    "/atlas",
    "/calendario",
    "/revista",
    "/club",
    "/club/avituallamiento",
    "/morral",
  ].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const productRoutes: MetadataRoute.Sitemap = productos.map((p) => ({
    url: `${BASE}/producto/${p.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const submarcaRoutes: MetadataRoute.Sitemap = Object.values(submarcas).map(
    (sm) => ({
      url: `${BASE}/tienda/${sm.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })
  );

  return [...staticRoutes, ...productRoutes, ...submarcaRoutes];
}
