import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/admin", "/cuenta", "/api"] },
    ],
    sitemap: "https://montaraz.com/sitemap.xml",
    host: "https://montaraz.com",
  };
}
