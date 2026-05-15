export type Region = {
  slug: string;
  nombre: string;
  comunidad: string;
  resumen: string;
  especies: { caza: string[]; pesca: string[] };
  modalidades: string[];
  mejorEpoca: string;
  cotos: { nombre: string; tipo: "caza" | "pesca"; descripcion: string }[];
  rios: { nombre: string; descripcion: string }[];
  curador: string;
  vedas?: string;
};

export const regiones: Region[] = [
  {
    slug: "cantabrico",
    nombre: "Cantábrico",
    comunidad: "Asturias · Cantabria · País Vasco",
    resumen:
      "Costa brava, ríos truchales y salmonero, sierras boscosas. La frontera norte donde el monte se rinde al mar.",
    especies: {
      caza: ["Ciervo", "Corzo", "Rebeco", "Jabalí", "Becada", "Lobo (protegido)", "Oso (protegido)"],
      pesca: ["Trucha autóctona", "Salmón atlántico", "Lubina", "Sargo", "Bonito", "Atún rojo"],
    },
    modalidades: ["Rececho", "Aguardo", "Ojeo", "Mosca seca", "Pesca de costa", "Embarcación"],
    mejorEpoca: "Berrea (sept-oct) · Salmón (abr-jul) · Lubina nocturna (oct-feb)",
    cotos: [
      {
        nombre: "Reserva Regional de Riaño",
        tipo: "caza",
        descripcion:
          "70 años de gestión cinegética modélica. Rebeco, ciervo y corzo en cotas altas.",
      },
      {
        nombre: "Coto del Sueve",
        tipo: "caza",
        descripcion: "Asturcón silvestre, becada y rebeco. Acceso restringido.",
      },
    ],
    rios: [
      {
        nombre: "Sella",
        descripcion:
          "Río salmonero por excelencia. Trucha asalmonada de talla. Coto de los Carrizos.",
      },
      {
        nombre: "Cares",
        descripcion: "Trucha autóctona de altura. Aguas cristalinas y técnicas.",
      },
      {
        nombre: "Deva",
        descripcion: "Salmón y trucha. Cotos sin muerte.",
      },
    ],
    curador: "Inés Marqués",
    vedas:
      "Trucha: 3er sábado de marzo a 31 julio. Salmón: 1 abril a 15 julio (cupos diarios).",
  },
  {
    slug: "pirineo",
    nombre: "Pirineo",
    comunidad: "Aragón · Navarra · Cataluña",
    resumen:
      "La frontera de altura. Sarrios sobre 1800 m, truchas pirenaicas en gargantas, lagos glaciares.",
    especies: {
      caza: ["Sarrio (rebeco pirenaico)", "Ciervo", "Corzo", "Jabalí", "Urogallo (protegido)"],
      pesca: ["Trucha pirenaica", "Trucha lacustre", "Salvelino"],
    },
    modalidades: ["Rececho técnico", "Mosca seca", "Ninfa", "Pesca de lago"],
    mejorEpoca: "Rebeco (sep-nov) · Trucha (may-sep)",
    cotos: [
      {
        nombre: "Reserva del Cinca",
        tipo: "caza",
        descripcion: "Sarrios de altura. Permisos limitados.",
      },
      {
        nombre: "Aigüestortes (zona limítrofe)",
        tipo: "pesca",
        descripcion: "Lagos glaciares con salvelino y trucha.",
      },
    ],
    rios: [
      {
        nombre: "Noguera Pallaresa",
        descripcion: "Truchera técnica. Aguas frías y rápidas.",
      },
      {
        nombre: "Aragón Subordán",
        descripcion: "Trucha autóctona. Pirineo aragonés.",
      },
    ],
    curador: "Inés Marqués",
  },
  {
    slug: "extremadura",
    nombre: "Extremadura",
    comunidad: "Cáceres · Badajoz",
    resumen:
      "Dehesa, monterías históricas, ciervo de gran trofeo. La cuna de la caza colectiva ibérica.",
    especies: {
      caza: ["Ciervo", "Jabalí", "Gamo", "Muflón", "Perdiz roja", "Tórtola", "Paloma torcaz"],
      pesca: ["Black-bass", "Lucio", "Carpa"],
    },
    modalidades: ["Montería", "Aguardo", "Ojeo de perdiz", "Spinning"],
    mejorEpoca: "Montería (oct-feb) · Perdiz (oct-ene)",
    cotos: [
      {
        nombre: "Cabañeros",
        tipo: "caza",
        descripcion: "Parque nacional con monterías reguladas en zonas perimetrales.",
      },
      {
        nombre: "Monfragüe",
        tipo: "caza",
        descripcion: "Dehesa con ciervo de trofeo. Avifauna excepcional.",
      },
    ],
    rios: [
      {
        nombre: "Tajo (embalses)",
        descripcion: "Black-bass de calidad en Alcántara y Valdecañas.",
      },
    ],
    curador: "Tomé Lanza",
  },
  {
    slug: "castilla-leon",
    nombre: "Castilla y León",
    comunidad: "Castilla y León",
    resumen:
      "Tierras altas, ríos truchales, encinares y sierras. El corazón del rececho castellano.",
    especies: {
      caza: ["Ciervo", "Corzo", "Jabalí", "Cabra montés", "Perdiz roja", "Liebre"],
      pesca: ["Trucha", "Lucio", "Black-bass"],
    },
    modalidades: ["Rececho", "Ojeo", "Aguardo", "Mosca", "Spinning"],
    mejorEpoca: "Berrea (sep-oct) · Corzo (abr-jul)",
    cotos: [
      {
        nombre: "Reserva Regional de Gredos",
        tipo: "caza",
        descripcion: "Cabra montés y corzo. Una de las gestiones más antiguas.",
      },
      {
        nombre: "Sierra de la Demanda",
        tipo: "caza",
        descripcion: "Ciervo, corzo y jabalí en alta montaña.",
      },
    ],
    rios: [
      {
        nombre: "Duero (cabecera)",
        descripcion: "Truchera técnica. Sin muerte recomendado.",
      },
      {
        nombre: "Pisuerga",
        descripcion: "Trucha y barbo. Cotos sin muerte.",
      },
    ],
    curador: "Alfredo de la Sota",
  },
  {
    slug: "andalucia",
    nombre: "Andalucía",
    comunidad: "Andalucía",
    resumen:
      "Sierra Morena, Doñana y el estrecho. Lince ibérico (no se caza), ciervo de monte mediterráneo, lubina del Atlántico.",
    especies: {
      caza: ["Ciervo", "Jabalí", "Gamo", "Muflón", "Perdiz", "Anátidas"],
      pesca: ["Lubina", "Atún rojo (Almadraba)", "Sargo", "Bonito"],
    },
    modalidades: ["Montería", "Espera", "Ojeo", "Pesca de costa", "Embarcación"],
    mejorEpoca: "Atún (mayo-junio) · Montería (oct-feb)",
    cotos: [
      {
        nombre: "Sierra de Andújar",
        tipo: "caza",
        descripcion: "Hogar del lince ibérico (no cinegético). Ciervo y jabalí en zonas perimetrales.",
      },
    ],
    rios: [
      {
        nombre: "Estrecho de Gibraltar (mar)",
        descripcion: "Atún rojo en migración. Almadraba histórica.",
      },
    ],
    curador: "Bea Fernández",
  },
  {
    slug: "galicia",
    nombre: "Galicia",
    comunidad: "Galicia",
    resumen:
      "Costa salvaje, rías profundas, ríos cortos y caudalosos. Pesca de mar y monte atlántico.",
    especies: {
      caza: ["Jabalí", "Corzo", "Ciervo", "Becada"],
      pesca: ["Lubina", "Sargo", "Robaliza", "Rodaballo", "Trucha", "Salmón"],
    },
    modalidades: ["Aguardo", "Rececho", "Pesca de costa", "Embarcación", "Spinning"],
    mejorEpoca: "Becada (oct-feb) · Lubina (oct-feb)",
    cotos: [
      {
        nombre: "Os Ancares",
        tipo: "caza",
        descripcion: "Sierra atlántica con jabalí y corzo. Becada en otoño.",
      },
    ],
    rios: [
      {
        nombre: "Eo",
        descripcion: "Estuario salmonero y lubinero.",
      },
      {
        nombre: "Miño",
        descripcion: "Salmón en cabecera (raro). Trucha en afluentes.",
      },
    ],
    curador: "Bea Fernández",
  },
];

export function findRegion(slug: string) {
  return regiones.find((r) => r.slug === slug);
}
