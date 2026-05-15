export type Expedicion = {
  slug: string;
  titulo: string;
  region: string;
  modalidad: string;
  dificultad: "Bajo" | "Medio" | "Alto" | "Extremo";
  duracionDias: number;
  precio: number;
  plazas: number;
  plazasOcupadas: number;
  proximasFechas: string[];
  guia: string;
  guiaBio: string;
  idiomasGuia: string[];
  resumen: string;
  incluye: string[];
  noIncluye: string[];
  nivelExigido: string;
  materialNecesario: string[];
  cancelacion: string;
};

export const expediciones: Expedicion[] = [
  {
    slug: "rececho-berrea-picos",
    titulo: "Rececho de berrea en Picos de Europa",
    region: "Cantabria · Picos de Europa",
    modalidad: "Caza · Rececho",
    dificultad: "Medio",
    duracionDias: 3,
    precio: 850,
    plazas: 4,
    plazasOcupadas: 2,
    proximasFechas: ["18-20 septiembre 2026", "25-27 septiembre 2026"],
    guia: "Tomé Lanza",
    guiaBio: "22 años recechando berrea. Conoce los ronqueros del Cornión.",
    idiomasGuia: ["Español", "Inglés"],
    resumen:
      "Tres días de rececho de ciervo en Picos durante el momento álgido de la berrea. Alojamiento en cabaña de monte. Cupos limitados.",
    incluye: [
      "2 noches en cabaña Montaraz",
      "Pensión completa (cocina del despiece)",
      "Guía profesional",
      "Transporte 4x4 desde Llanes",
      "Seguro RC básico",
      "Recuperación de pieza",
    ],
    noIncluye: [
      "Permiso de caza (gestión incluida, pago aparte)",
      "Rifle (puedes alquilar a la casa)",
      "Munición",
      "Bebidas alcohólicas",
    ],
    nivelExigido:
      "Tirador con experiencia previa, capaz de caminar 8-12 km por terreno escarpado.",
    materialNecesario: [
      "Rifle propio o alquilado",
      "Ropa de monte impermeable",
      "Botas de caña alta",
      "Frontal con luz roja",
      "Mochila 30L",
    ],
    cancelacion: "100% reembolso hasta 30 días antes. 50% entre 30 y 15. Sin reembolso < 15 días.",
  },
  {
    slug: "mosca-sella",
    titulo: "Mosca seca en el río Sella",
    region: "Asturias · Sella",
    modalidad: "Pesca · Mosca",
    dificultad: "Bajo",
    duracionDias: 1,
    precio: 320,
    plazas: 3,
    plazasOcupadas: 1,
    proximasFechas: [
      "10 abril 2027",
      "24 abril 2027",
      "8 mayo 2027",
      "22 mayo 2027",
    ],
    guia: "Inés Marqués",
    guiaBio: "Bióloga y pescadora del Sella desde los 12 años.",
    idiomasGuia: ["Español", "Inglés", "Portugués"],
    resumen:
      "Una jornada con Inés en los cazonetes clásicos del Sella. Tres truchas garantizadas en captura-suelta o cambiamos día sin coste.",
    incluye: [
      "Permiso de coto",
      "Caña, carrete y bajos si los necesitas",
      "Selección de moscas atadas a mano",
      "Almuerzo en cabaña ribereña",
    ],
    noIncluye: ["Desplazamiento hasta Cangas de Onís", "Licencia continental"],
    nivelExigido: "Cualquier nivel. Si nunca lanzaste, hay clase rápida antes.",
    materialNecesario: [
      "Vadeadores (te los prestamos si no tienes)",
      "Polarizadas",
      "Gorra",
    ],
    cancelacion: "Si no pican, te cambiamos día. Si llueve mucho, lo movemos.",
  },
  {
    slug: "monteria-cabaneros",
    titulo: "Montería extremeña en Cabañeros",
    region: "Cáceres · Cabañeros",
    modalidad: "Caza · Montería",
    dificultad: "Alto",
    duracionDias: 2,
    precio: 1450,
    plazas: 8,
    plazasOcupadas: 6,
    proximasFechas: ["12-13 diciembre 2026", "16-17 enero 2027"],
    guia: "Tomé Lanza + rehala asociada",
    guiaBio: "Montería tradicional con perros de la rehala Lucero.",
    idiomasGuia: ["Español"],
    resumen:
      "Montería clásica de dos jornadas. Ciervo, jabalí, gamo y muflón. Cupos garantizados. Trato regio.",
    incluye: [
      "2 jornadas de montería",
      "Hostal en pueblo cercano",
      "3 comidas tradicionales",
      "Rehala profesional",
      "Cobro y desolladero",
      "Trofeo medidor",
    ],
    noIncluye: [
      "Tasas autonómicas",
      "Munición",
      "Bebidas alcohólicas en cena",
    ],
    nivelExigido:
      "Cazador experimentado con escopeta. Capacidad física media.",
    materialNecesario: [
      "Escopeta calibre 12",
      "Cartuchería de bala",
      "Ropa de monte resistente",
      "Bota baja seca",
    ],
    cancelacion: "Reembolso 80% hasta 45 días. Después 30%. Política firme por reservas a propietarios.",
  },
  {
    slug: "lubina-cantabrico-nocturna",
    titulo: "Salida nocturna a la lubina del Cantábrico",
    region: "Asturias · Costa Verde",
    modalidad: "Pesca · Costa nocturna",
    dificultad: "Medio",
    duracionDias: 1,
    precio: 220,
    plazas: 4,
    plazasOcupadas: 1,
    proximasFechas: [
      "1 noviembre 2026",
      "15 noviembre 2026",
      "29 noviembre 2026",
    ],
    guia: "Bea Fernández",
    guiaBio: "Pescadora gallega especializada en Cantábrico bravo.",
    idiomasGuia: ["Español", "Inglés"],
    resumen:
      "Cuatro horas en la zona de Punta Llumeres con señuelos de superficie. Lubinas medias y grandes en su salida nocturna.",
    incluye: [
      "Guía y equipo si lo necesitas",
      "Frontal con filtro rojo",
      "Café caliente",
    ],
    noIncluye: ["Licencia marítima"],
    nivelExigido: "Aceptable. Si nunca lanzaste, hay práctica antes.",
    materialNecesario: [
      "Ropa de aguas",
      "Botas wading",
      "Polarizadas amarillas opcionales",
    ],
    cancelacion:
      "Si el mar está bravo, lo movemos. Reembolso 100% hasta 48 h antes.",
  },
  {
    slug: "rebeco-pirineo",
    titulo: "Rececho de rebeco en el Pirineo",
    region: "Huesca · Pirineo",
    modalidad: "Caza · Rececho de altura",
    dificultad: "Extremo",
    duracionDias: 4,
    precio: 1890,
    plazas: 2,
    plazasOcupadas: 0,
    proximasFechas: ["6-9 octubre 2026", "20-23 octubre 2026"],
    guia: "Tomé Lanza + guarda local",
    guiaBio: "Rececho técnico en cotas 1800-2500 m.",
    idiomasGuia: ["Español"],
    resumen:
      "Cuatro días en altura. Caminatas de 5-6 horas diarias. Rebeco macho selectivo. Para tiradores serios.",
    incluye: [
      "3 noches refugio de montaña",
      "Pensión completa",
      "Guía",
      "Permisos",
      "Recuperación de pieza",
    ],
    noIncluye: ["Munición", "Rifle (sí alquilable)", "Equipo de montaña"],
    nivelExigido:
      "Excelente forma física. Tiro con calma a 200-350 m. Experiencia previa.",
    materialNecesario: [
      "Mochila 40L con riñonera",
      "Botas de montaña",
      "Crampones si nieve",
      "Saco de dormir de plumas",
      "Bastones de trekking",
    ],
    cancelacion:
      "100% reembolso hasta 60 días. 50% entre 60 y 30. Sin reembolso < 30 días.",
  },
];

export function findExpedicion(slug: string) {
  return expediciones.find((e) => e.slug === slug);
}
