export type Curso = {
  slug: string;
  titulo: string;
  modalidad: "Online" | "Presencial" | "Híbrido";
  profesor: string;
  profesorBio: string;
  duracion: string;
  sesiones: number;
  plazas: number;
  plazasOcupadas: number;
  precio: number;
  ubicacion?: string;
  proximaFecha: string;
  resumen: string;
  temario: string[];
  material: string[];
  certificado: boolean;
};

export const cursos: Curso[] = [
  {
    slug: "iniciacion-mosca-seca",
    titulo: "Iniciación a la mosca seca",
    modalidad: "Online",
    profesor: "Inés Marqués",
    profesorBio: "Bióloga marina y pescadora del Sella. 18 años atando moscas.",
    duracion: "6 h en 4 sesiones",
    sesiones: 4,
    plazas: 20,
    plazasOcupadas: 14,
    precio: 89,
    proximaFecha: "12 enero 2027",
    resumen:
      "Aprende a leer un río, montar tu equipo, presentar la mosca con derivas naturales y a soltar truchas sin daño.",
    temario: [
      "Sesión 1 · Leer el río: corrientes, refugios, comederos.",
      "Sesión 2 · Caña, cola, bajos y nudos esenciales.",
      "Sesión 3 · Lanzamiento de overhead y roll cast.",
      "Sesión 4 · Presentación, deriva natural y captura sin muerte.",
    ],
    material: [
      "Caña 9' 5wt (te recomendamos las disponibles en tienda)",
      "Carrete y cola flotante",
      "Bajos cónicos 9' 5x",
      "Caja con al menos 6 patrones secos básicos",
    ],
    certificado: true,
  },
  {
    slug: "recechista-principiante",
    titulo: "Recechista principiante",
    modalidad: "Híbrido",
    profesor: "Tomé Lanza",
    profesorBio: "Guía de monterías extremeñas. 22 años en el campo.",
    duracion: "4 online + 2 días presenciales",
    sesiones: 6,
    plazas: 12,
    plazasOcupadas: 8,
    precio: 380,
    ubicacion: "Sierra de Gredos, Ávila",
    proximaFecha: "20 marzo 2027",
    resumen:
      "Curso completo de iniciación al rececho: ética, balística, óptica, ropa y dos jornadas reales con guía.",
    temario: [
      "Online 1 · Ética del rececho y conservación.",
      "Online 2 · Balística básica para distancias 100-300 m.",
      "Online 3 · Cómo elegir rifle, calibre y óptica.",
      "Online 4 · Ropa, mochila y supervivencia básica.",
      "Presencial 1 · Tiro a 100/200/300 m con guía.",
      "Presencial 2 · Rececho con guía profesional.",
    ],
    material: [
      "Licencia de caza vigente (obligatorio)",
      "Rifle propio o de alquiler en el club (consultar)",
      "Ropa de monte resistente",
      "Botas de monte alta",
    ],
    certificado: true,
  },
  {
    slug: "atado-moscas-online",
    titulo: "Atado de moscas (con kit por correo)",
    modalidad: "Online",
    profesor: "Manuel A.",
    profesorBio: "Atador profesional del Sella, 30 años atando a mano.",
    duracion: "8 h en 6 sesiones",
    sesiones: 6,
    plazas: 30,
    plazasOcupadas: 21,
    precio: 149,
    proximaFecha: "5 febrero 2027",
    resumen:
      "Aprende a atar 6 patrones clásicos: Royal Sella, Adams, Pheasant Tail, Caddis, BWO y Streamer Tajo. Incluye kit con materiales por correo.",
    temario: [
      "Sesión 1 · Herramientas y materiales.",
      "Sesión 2 · Patrón Adams (seca clásica).",
      "Sesión 3 · Pheasant Tail (ninfa universal).",
      "Sesión 4 · Royal Sella (seca local).",
      "Sesión 5 · BWO Caddis (efímera).",
      "Sesión 6 · Streamer y revisión final.",
    ],
    material: ["Kit incluido por correo (anzuelos, hilos, plumas, cera)"],
    certificado: true,
  },
  {
    slug: "tratamiento-etico-pieza",
    titulo: "Tratamiento ético de la pieza",
    modalidad: "Online",
    profesor: "Tomé Lanza",
    profesorBio: "Guía y conservacionista.",
    duracion: "3 h en 2 sesiones",
    sesiones: 2,
    plazas: 50,
    plazasOcupadas: 19,
    precio: 49,
    proximaFecha: "18 enero 2027",
    resumen:
      "Tirada limpia, sangrado y eviscerado en campo, conservación durante el transporte y respeto a la pieza. Sin condescendencia, sin morbo.",
    temario: [
      "Sesión 1 · La tirada: certeza, ángulo, distancia.",
      "Sesión 2 · Eviscerado, sangrado, conservación.",
    ],
    material: [
      "Cuchillo skinner",
      "Guantes de látex",
      "Bolsa para el cobro",
    ],
    certificado: false,
  },
  {
    slug: "cocina-despiece",
    titulo: "Cocina del despiece",
    modalidad: "Presencial",
    profesor: "Pilar Castro",
    profesorBio: "Chef especializada en caza, restaurante La Pesquera (Cáceres).",
    duracion: "Fin de semana (sáb-dom)",
    sesiones: 2,
    plazas: 12,
    plazasOcupadas: 10,
    precio: 250,
    ubicacion: "Cáceres",
    proximaFecha: "8-9 febrero 2027",
    resumen:
      "Aprende a despiezar un ciervo y un jabalí, cuatro recetas tradicionales y la teoría del curado en casa.",
    temario: [
      "Sábado mañana · Despiezar un ciervo.",
      "Sábado tarde · Tres recetas (escabeche, estofado, brasa).",
      "Domingo mañana · Despiezar un jabalí.",
      "Domingo tarde · Curados, salazones y conservas.",
    ],
    material: [
      "Cuchillo deshuesador (te lo prestamos)",
      "Delantal y ropa que se pueda manchar",
    ],
    certificado: true,
  },
  {
    slug: "cetreria-iniciacion",
    titulo: "Iniciación a la cetrería",
    modalidad: "Presencial",
    profesor: "Joaquín Vela",
    profesorBio: "Cetrero diplomado, 25 años con halcones y águilas.",
    duracion: "Día completo",
    sesiones: 1,
    plazas: 8,
    plazasOcupadas: 5,
    precio: 290,
    ubicacion: "Toledo",
    proximaFecha: "22 febrero 2027",
    resumen:
      "Jornada introductoria con halcones de Harris. Manejo, alimentación, vuelos y comprensión del arte cetrero.",
    temario: [
      "Mañana · Historia, ética y normativa.",
      "Mediodía · Manejo del ave en puño.",
      "Tarde · Vuelos en campo abierto.",
    ],
    material: ["Solo curiosidad y ganas. Guante incluido."],
    certificado: false,
  },
  {
    slug: "cuidado-rifle",
    titulo: "Cuidados de tu rifle y armería doméstica",
    modalidad: "Online",
    profesor: "Alfredo de la Sota",
    profesorBio: "Armero, tercera generación, restaura Sako 75 a mano.",
    duracion: "4 h en 3 sesiones",
    sesiones: 3,
    plazas: 40,
    plazasOcupadas: 16,
    precio: 69,
    proximaFecha: "15 enero 2027",
    resumen:
      "Limpieza, lubricación, almacenaje y mantenimiento de rifles de cerrojo. Trucos del armero.",
    temario: [
      "Sesión 1 · Limpieza completa pos-jornada.",
      "Sesión 2 · Lubricación correcta y errores comunes.",
      "Sesión 3 · Almacenaje, humedad y armario reglamentario.",
    ],
    material: [
      "Tu rifle (con candado de seguridad)",
      "Kit de limpieza Otis o equivalente",
      "Aceite Ballistol",
    ],
    certificado: false,
  },
  {
    slug: "pesca-mar-iniciacion",
    titulo: "Pesca de costa para iniciados",
    modalidad: "Presencial",
    profesor: "Bea Fernández",
    profesorBio: "Pescadora gallega, embarcación y costa.",
    duracion: "Día completo",
    sesiones: 1,
    plazas: 10,
    plazasOcupadas: 4,
    precio: 180,
    ubicacion: "Estuario del Eo, Asturias-Galicia",
    proximaFecha: "1 marzo 2027",
    resumen:
      "Jornada práctica de pesca de costa: lubina, sargo y robaliza. Aparejos, lanzados, lectura de mar.",
    temario: [
      "Mañana · Aparejos, nudos y señuelos.",
      "Mediodía · Práctica de lanzados.",
      "Tarde · Sesión real en estuario.",
    ],
    material: ["Te lo prestamos todo. Lleva ropa de aguas y bocadillo."],
    certificado: false,
  },
];

export function findCurso(slug: string) {
  return cursos.find((c) => c.slug === slug);
}
