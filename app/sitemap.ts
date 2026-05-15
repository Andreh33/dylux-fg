import type { MetadataRoute } from "next";
import { productos, submarcas } from "@/lib/products";
import { cursos } from "@/lib/courses";
import { expediciones } from "@/lib/expeditions";
import { piezas } from "@/lib/magazine";
import { regiones } from "@/lib/regions";

const BASE = "https://montaraz.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const semanal = "weekly" as const;
  const mensual = "monthly" as const;

  const staticRoutes: MetadataRoute.Sitemap = [
    { path: "", priority: 1 },
    { path: "/tienda", priority: 0.9 },
    { path: "/manifiesto", priority: 0.7 },
    { path: "/atlas", priority: 0.8 },
    { path: "/calendario", priority: 0.7 },
    { path: "/revista", priority: 0.8 },
    { path: "/aula", priority: 0.8 },
    { path: "/expediciones", priority: 0.8 },
    { path: "/club", priority: 0.8 },
    { path: "/club/avituallamiento", priority: 0.8 },
    { path: "/origen", priority: 0.7 },
    { path: "/quien-es-quien", priority: 0.6 },
    { path: "/prensa", priority: 0.5 },
    { path: "/contacto", priority: 0.6 },
    { path: "/faq", priority: 0.6 },
    { path: "/sostenibilidad", priority: 0.6 },
    { path: "/etica", priority: 0.6 },
    { path: "/numeros", priority: 0.5 },
    { path: "/garantia", priority: 0.4 },
    { path: "/envios", priority: 0.4 },
    { path: "/devoluciones", priority: 0.4 },
    { path: "/aviso-armas", priority: 0.4 },
    { path: "/privacidad", priority: 0.3 },
    { path: "/cookies", priority: 0.3 },
    { path: "/terminos", priority: 0.3 },
    { path: "/legal", priority: 0.3 },
    { path: "/buscar", priority: 0.4 },
    { path: "/morral", priority: 0.4 },
    { path: "/diario", priority: 0.4 },
    { path: "/trofeos", priority: 0.4 },
    { path: "/comparar", priority: 0.4 },
    { path: "/configurador/rifle", priority: 0.7 },
    { path: "/entrar", priority: 0.3 },
    { path: "/registro", priority: 0.3 },
  ].map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified: now,
    changeFrequency: semanal,
    priority: r.priority,
  }));

  const productRoutes: MetadataRoute.Sitemap = productos.map((p) => ({
    url: `${BASE}/producto/${p.slug}`,
    lastModified: now,
    changeFrequency: semanal,
    priority: 0.8,
  }));

  const submarcaRoutes: MetadataRoute.Sitemap = Object.values(submarcas).map(
    (sm) => ({
      url: `${BASE}/tienda/${sm.slug}`,
      lastModified: now,
      changeFrequency: semanal,
      priority: 0.7,
    })
  );

  const cursoRoutes: MetadataRoute.Sitemap = cursos.map((c) => ({
    url: `${BASE}/aula/${c.slug}`,
    lastModified: now,
    changeFrequency: mensual,
    priority: 0.6,
  }));

  const expedicionRoutes: MetadataRoute.Sitemap = expediciones.map((e) => ({
    url: `${BASE}/expediciones/${e.slug}`,
    lastModified: now,
    changeFrequency: semanal,
    priority: 0.7,
  }));

  const piezaRoutes: MetadataRoute.Sitemap = piezas.map((p) => ({
    url: `${BASE}/revista/${p.slug}`,
    lastModified: now,
    changeFrequency: mensual,
    priority: 0.7,
  }));

  const regionRoutes: MetadataRoute.Sitemap = regiones.map((r) => ({
    url: `${BASE}/atlas/${r.slug}`,
    lastModified: now,
    changeFrequency: mensual,
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...productRoutes,
    ...submarcaRoutes,
    ...cursoRoutes,
    ...expedicionRoutes,
    ...piezaRoutes,
    ...regionRoutes,
  ];
}
