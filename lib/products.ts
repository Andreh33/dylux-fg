/**
 * Mock catalog. En producción: Drizzle + Sanity.
 * Aquí mantenemos un subconjunto de los 200 SKUs piloto del BRIEF.md
 * para que la UI tenga contenido real sobre el que iterar.
 */

export type Curator = "Alfredo" | "Inés" | "Tomé" | "Bea";

export type Submarca = "monte" | "aguas" | "sendas" | "cocina" | "cuchilleria";

export type Producto = {
  slug: string;
  nombre: string;
  marca: string;
  submarca: Submarca;
  familia: string;
  precio: number;
  curador: Curator;
  resumen: string;
  porQueLoElegimos: string;
  ficha: { label: string; value: string }[];
  stock: number;
  estado?: "nuevo" | "limitada" | "vintage" | "restock";
  selloHandTested?: boolean;
  imagen: string;
  hero?: string;
  tags?: string[];
};

export const productos: Producto[] = [
  {
    slug: "sako-90-hunter-308",
    nombre: "Sako 90 Hunter",
    marca: "Sako",
    submarca: "monte",
    familia: "rifles",
    precio: 2450,
    curador: "Alfredo",
    resumen:
      "Cañón fluteado opcional, culata de nogal de origen, gatillo a 1.3 kg muy ajustable.",
    porQueLoElegimos:
      "Lo testé tres temporadas en el rececho de berrea. Es de los pocos rifles modernos que envejecen con cara. La acción se acoma a la mano con uso. No es barato, pero se hereda. Lo que NO nos gusta: el cargador estándar sigue un poco corto para algunos calibres magnum.",
    ficha: [
      { label: "Calibre", value: ".308 Win" },
      { label: "Longitud cañón", value: "510 mm" },
      { label: "Peso", value: "3.1 kg" },
      { label: "Capacidad", value: "5+1" },
      { label: "Disparador", value: "1.3 kg ajustable" },
      { label: "Culata", value: "Nogal grado A" },
      { label: "Acabado", value: "Pavón mate" },
      { label: "País", value: "Finlandia" },
    ],
    stock: 4,
    selloHandTested: true,
    imagen: "/img/sako-90.svg",
    tags: ["rececho", "ciervo", "corzo", "berrea"],
  },
  {
    slug: "hornady-eldx-308-178",
    nombre: "Hornady ELD-X Precision Hunter",
    marca: "Hornady",
    submarca: "monte",
    familia: "municion",
    precio: 65,
    curador: "Alfredo",
    resumen: "Bala expansiva ELD-X con expansión retardada. Caza polivalente.",
    porQueLoElegimos:
      "Para caza mayor a media-larga distancia es nuestra elección por defecto. Trayectoria predecible, expansión limpia. En distancias < 100 m puede pasarse de expansiva con piezas pequeñas; para corzo cercano preferimos un 130 gr.",
    ficha: [
      { label: "Calibre", value: ".308 Win" },
      { label: "Grano", value: "178 gr" },
      { label: "Tipo", value: "ELD-X expansiva" },
      { label: "Velocidad inicial", value: "780 m/s" },
      { label: "Energía", value: "3 400 J" },
      { label: "Cantidad", value: "20 unidades" },
    ],
    stock: 12,
    imagen: "/img/hornady-eldx.svg",
    tags: ["ciervo", "rececho", "media distancia"],
  },
  {
    slug: "beretta-silver-pigeon-1",
    nombre: "Beretta Silver Pigeon I Sporting",
    marca: "Beretta",
    submarca: "monte",
    familia: "escopetas",
    precio: 2350,
    curador: "Alfredo",
    resumen: "Superpuesta de toda la vida con balanceo serio. 12/76.",
    porQueLoElegimos:
      "El equilibrio en el centro de masas es el que era. Para ojeo de perdiz roja y tirada larga, una herramienta que no se discute. Tiene ya 30 años en el catálogo y sigue ganando.",
    ficha: [
      { label: "Calibre", value: "12/76" },
      { label: "Cañones", value: "Superpuestos 71 cm" },
      { label: "Chokes", value: "5 intercambiables Optima HP" },
      { label: "Peso", value: "3.2 kg" },
      { label: "Culata", value: "Nogal aceitado" },
      { label: "Origen", value: "Italia" },
    ],
    stock: 2,
    selloHandTested: true,
    imagen: "/img/silver-pigeon.svg",
    tags: ["plato", "ojeo", "perdiz"],
  },
  {
    slug: "pallares-solsona-carnicero",
    nombre: "Pallarès Solsona Carnicero",
    marca: "Pallarès Solsona",
    submarca: "cuchilleria",
    familia: "cocina",
    precio: 89,
    curador: "Tomé",
    resumen: "Hoja 19 cm acero carbono. Mango boj catalán. Forja templada en Solsona.",
    porQueLoElegimos:
      "Manuel Pallarès lleva forjando estos cuchillos desde 1917. El acero al carbono se oscurece con uso — eso no es un defecto, es la pieza contándote su vida. Cuídalo con aceite y lo heredas.",
    ficha: [
      { label: "Hoja", value: "Acero al carbono templado" },
      { label: "Longitud hoja", value: "190 mm" },
      { label: "Mango", value: "Boj catalán" },
      { label: "Peso", value: "180 g" },
      { label: "Origen", value: "Solsona, Lleida" },
      { label: "Forja", value: "Manual" },
    ],
    stock: 6,
    selloHandTested: true,
    imagen: "/img/pallares.svg",
    tags: ["cocina", "despiece", "artesano"],
  },
  {
    slug: "sage-r8-core-9-5wt",
    nombre: "Sage R8 Core 9' 5wt",
    marca: "Sage",
    submarca: "aguas",
    familia: "canas-mosca",
    precio: 1090,
    curador: "Inés",
    resumen: "La caña con la que sueñan los puristas. Acción media-rápida, recuperación atómica.",
    porQueLoElegimos:
      "Una caña no se compra: se calza. Esta R8 Core la presto a alumnos en cursos del Sella y suelo recuperarla con una sonrisa rara. Tiene la sensibilidad de las viejas y la velocidad de las nuevas.",
    ficha: [
      { label: "Longitud", value: "9'" },
      { label: "Cola", value: "5wt" },
      { label: "Acción", value: "Media-rápida" },
      { label: "Tramos", value: "4" },
      { label: "Peso", value: "82 g" },
      { label: "Garantía", value: "Vida útil" },
    ],
    stock: 3,
    selloHandTested: true,
    imagen: "/img/sage-r8.svg",
    tags: ["mosca seca", "trucha", "rio"],
  },
  {
    slug: "royal-sella-mosca-atada",
    nombre: "Royal Sella · Mosca atada a mano",
    marca: "Atelier Asturias",
    submarca: "aguas",
    familia: "moscas",
    precio: 8,
    curador: "Inés",
    resumen:
      "Patrón clásico atado a mano por Manuel A. en Cangas. Anzuelo #14 o #16, plumas naturales.",
    porQueLoElegimos:
      "Manuel ata cien moscas por temporada. Cada una distinta. Las del Sella tienen un cuerpo levemente más corto y un sello dorado en la cola. Truchera de manual.",
    ficha: [
      { label: "Tipo", value: "Seca · Royal Sella" },
      { label: "Tallas", value: "#14, #16, #18" },
      { label: "Anzuelo", value: "Tiemco TMC100" },
      { label: "Atador", value: "Manuel A., Cangas" },
      { label: "Lote", value: "Edición limitada 50u" },
    ],
    stock: 18,
    estado: "limitada",
    imagen: "/img/royal-sella.svg",
    tags: ["mosca seca", "sella", "artesano"],
  },
  {
    slug: "harkila-ingels-gtx",
    nombre: "Härkila Ingels GTX Jacket",
    marca: "Härkila",
    submarca: "monte",
    familia: "ropa",
    precio: 549,
    curador: "Tomé",
    resumen: "Goretex robusto, color marrón cantábrico. Costuras pensadas para zarza.",
    porQueLoElegimos:
      "Tres temporadas de monte cántabro. La he visto a -8 °C, bajo lluvia 14 horas, con una rehala de doce galgos detrás. Sigue seca. Las cremalleras YKK pesan, pero te las agradecerás.",
    ficha: [
      { label: "Material", value: "Goretex Performance Shell" },
      { label: "Forro", value: "Tricot transpirable" },
      { label: "Tallas", value: "S–XXL" },
      { label: "Color", value: "Hunting Brown" },
      { label: "Peso", value: "920 g (talla L)" },
      { label: "Garantía", value: "5 años" },
    ],
    stock: 7,
    imagen: "/img/harkila-ingels.svg",
    tags: ["monte", "lluvia", "berrea"],
  },
  {
    slug: "swarovski-z5-3-5-18x44",
    nombre: "Swarovski Z5 3.5-18x44",
    marca: "Swarovski",
    submarca: "monte",
    familia: "opticas",
    precio: 1690,
    curador: "Alfredo",
    resumen: "Visor zoom 5x con torreta balística BR-i. Claridad alpina.",
    porQueLoElegimos:
      "Si vas a rececho largo y todavía dudas, mírala una sola vez al amanecer con niebla. La diferencia con cristales asiáticos no se mide: se siente. El asterisco: el peso, 510 g.",
    ficha: [
      { label: "Aumentos", value: "3.5x – 18x" },
      { label: "Objetivo", value: "44 mm" },
      { label: "Retícula", value: "BRX-i iluminada" },
      { label: "Torreta", value: "BR-i balística" },
      { label: "Peso", value: "510 g" },
      { label: "Origen", value: "Austria" },
    ],
    stock: 3,
    selloHandTested: true,
    imagen: "/img/swarovski-z5.svg",
    tags: ["rececho", "tiro largo", "optica"],
  },
];

export const submarcas: Record<
  Submarca,
  { nombre: string; slug: string; eyebrow: string; lema: string; descripcion: string }
> = {
  monte: {
    nombre: "Monte",
    slug: "caza",
    eyebrow: "Caza · rececho · ojeo",
    lema: "Donde el alba huele a tomillo y a aceite de armas.",
    descripcion:
      "Munición, armas, ópticas, ropa, calzado, cuchillería y mochilas seleccionadas por curadores con licencia, no por algoritmos.",
  },
  aguas: {
    nombre: "Aguas",
    slug: "pesca",
    eyebrow: "Pesca · mosca · embarcación",
    lema: "Donde la línea se templa antes que el corazón.",
    descripcion:
      "Cañas, carretes, hilos, señuelos, moscas atadas a mano y vadeadores para ríos truchales, estuarios y mar.",
  },
  sendas: {
    nombre: "Sendas",
    slug: "montaña",
    eyebrow: "Montaña · vivac · cuchillo",
    lema: "Para los que dejan huella pero recogen latas.",
    descripcion:
      "Ropa técnica, calzado, camping, iluminación y cuchillería para sierras, picos y costas.",
  },
  cocina: {
    nombre: "Cocina",
    slug: "cocina",
    eyebrow: "Despiece · conservas · curados",
    lema: "Lo que del monte vuelve a la mesa con honra.",
    descripcion:
      "Cuchillería de cocina, conservas artesanas, curados ibéricos, miel cruda y herramientas de despiece.",
  },
  cuchilleria: {
    nombre: "Cuchillería",
    slug: "cuchilleria",
    eyebrow: "Forja · acero · mango",
    lema: "Un cuchillo bueno se hereda.",
    descripcion:
      "Pallarès Solsona, Cudeman, Joker, Lionsteel, Helle y artesanos ibéricos. Personalización con grabado.",
  },
};

export function findProduct(slug: string) {
  return productos.find((p) => p.slug === slug);
}

export function productsBySubmarca(submarca: Submarca) {
  return productos.filter((p) => p.submarca === submarca);
}

export function productsByFamily(familia: string) {
  return productos.filter((p) => p.familia === familia);
}
