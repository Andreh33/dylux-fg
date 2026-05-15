export type PiezaMagazine = {
  slug: string;
  titulo: string;
  subtitulo?: string;
  autor: string;
  categoria: "Ensayo" | "Reportaje" | "Entrevista" | "Recetario" | "Atlas" | "Audio" | "Fotorreportaje" | "Retrato artesano";
  minutos: number;
  fecha: string;
  extracto: string;
  cuerpo: string[];
  cita?: { texto: string; autor: string };
  hora?: "amanecer" | "mediodia" | "atardecer" | "noche";
  region?: string;
  audioDisponible?: boolean;
};

export const piezas: PiezaMagazine[] = [
  {
    slug: "becada-melancolia",
    titulo: "La becada y la melancolía",
    subtitulo: "Ensayo sobre el ave que se caza con la espalda doblada.",
    autor: "Tomé Lanza",
    categoria: "Ensayo",
    minutos: 12,
    fecha: "12 nov 2026",
    extracto:
      "Hay aves que se cazan con la mano firme y otras que se cazan con la espalda doblada y los ojos llorosos. La becada pertenece a las segundas.",
    cita: {
      texto:
        "La becada es el animal más solitario que conozco. Hasta su nombre suena a pueblo en invierno.",
      autor: "Aurelio Menéndez",
    },
    hora: "atardecer",
    region: "Cantábrico",
    audioDisponible: true,
    cuerpo: [
      "Hay aves que se cazan con la mano firme y otras que se cazan con la espalda doblada y los ojos llorosos. La becada pertenece a las segundas. No es solo por su tamaño, ni por su vuelo errático, ni por el bosque cerrado donde se esconde. Es por algo más antiguo: la becada nos enseña a esperar de otra manera. A escuchar sin moverse. A confiar en los perros y en la propia paciencia.",
      "En el Cantábrico, la becada llega cuando el otoño está ya cansado. Los castaños han perdido la hoja, el suelo cruje, y los días son tan cortos que cuando levantas la mirada del fango ya está oscureciendo. Salimos al alba y volvemos con la frente fría y, casi siempre, con el morral vacío. Aún así, salimos. Año tras año.",
      "Mi padre decía que el cazador de becada no caza becadas: caza horas en el monte. Yo creo que tenía razón. Las becadas que llevo cobradas en treinta años se podrían contar con los dedos de tres manos. Pero los amaneceres que llevo en el monte de los puertos, las cervezas en bares de pueblo a las nueve de la mañana después de andar seis horas, los podencos que se me han adelantado, eso ya no se cuenta.",
      "El secreto de la becada es que es un ave que enseña a abandonar. Llega un momento, cuando ya llevas dos jornadas mojado y has visto tres pasos de aire y tu rehala se ha cansado, en que el cazador honesto se sienta en una raíz y deja el arma a un lado. No es derrota. Es respeto. Es lo que mi padre llamaba «dejarle el campo a la pájara».",
      "Pongo un punto y aparte para los perros. Sin un buen perro de muestra, la becada no se caza: se busca. El podenco ibérico, el setter inglés, el bracco italiano. Cualquiera con muestra firme y narices de las que se ganan en monte, no en concursos. Mi rehala actual es de cuatro: dos setters viejos y dos podencas jóvenes. Los viejos enseñan el monte a las jóvenes. Eso es la tradición.",
      "La becada nos enseña otra cosa importante: a respetar las vedas. Cuando empieza febrero, cerramos el grifo. Los pájaros que vuelven al norte hay que dejarlos volver enteros. No es opcional. Es ética, y antes que ética es cordura: si no respetas la veda, en pocos años no quedará una sola becada en el Cantábrico. Y entonces, ¿qué cazarías?",
      "Hay quien me dice que la becada es triste. Yo no lo veo así. Es solitaria, sí. Pero la melancolía no es tristeza: es una forma de estar en el mundo. Es lo que sienten los pescadores a mosca cuando la trucha sube tres veces y ninguna pica. Es lo que sentimos en febrero, cuando colgamos el arma y nos quedan ocho meses para volver.",
      "El año pasado cobré una becada en el alto de la Cabaña. Era una tarde de niebla espesa y los perros la levantaron a treinta pasos. Vi su vuelo torcido, le tiré el primer tiro, fallé. El segundo cayó. Cuando llegué a recogerla, los podencos estaban quietos alrededor, esperando. Me arrodillé. Le dije «gracias». La metí en el morral y volví a casa cuarenta minutos en silencio.",
      "Es lo que mi padre llamaba dar valor. No estaba hablando de tasarla. Estaba hablando de mirarla. De recordar el monte donde cayó. De cocinarla con humildad. De no presumir.",
      "Hoy cuando salgo a por becada llevo el arma del abuelo, una paralela AYA del 50, recamarada en 12/70. No es la más moderna ni la más cara. Pero pesa lo justo y la culata se sienta bien en el hombro. Cada vez que la limpio pienso en que él la limpió antes que yo, y que mi sobrino la limpiará después. Es el contrato silencioso de los cazadores con sus muertos.",
      "Si tuviera que recomendarle a alguien empezar con la becada, le diría tres cosas. Una: cómprate un perro bueno antes que un arma cara. Dos: ten paciencia con los inviernos. Tres: aprende a cocinarla con respeto. Si haces estas tres cosas, la becada te dará lo que da a quien la entiende: melancolía, sí, pero también algo parecido a la felicidad.",
    ],
  },
  {
    slug: "silencio-puesto-valverde",
    titulo: "24 h en un puesto con José Antonio Valverde",
    subtitulo: "Reportaje desde Doñana sobre el padre del lince ibérico.",
    autor: "Inés Marqués",
    categoria: "Reportaje",
    minutos: 18,
    fecha: "5 nov 2026",
    extracto:
      "El padre del lince ibérico nos dejó muchas cosas: una reserva, un instituto, un puñado de libros. También una manera de mirar.",
    hora: "amanecer",
    region: "Andalucía",
    audioDisponible: true,
    cuerpo: [
      "Llegué a Doñana de noche, con el coche lleno de cuadernos vacíos, una grabadora prestada y la cabeza un poco rota por el viaje. Me esperaba Antonio, biólogo del CSIC, en una caseta del Acebrón donde dormiríamos dos noches. «Hoy descansa», me dijo. «Mañana antes del alba salimos al puesto.» Me dio un saco, una linterna roja y un café muy malo. Me lo bebí.",
      "Lo que el visitante no entiende cuando llega a Doñana es que el espacio es ruido. Tres mil pájaros distintos, el viento del Atlántico, las olas que se oyen a kilómetros, el agua del marismeño moviéndose entre raíces, los búhos, los lobos (aquí no hay lobos, pero parece que sí). El sonido de Doñana es el sonido del mundo cuando todavía no había sido escuchado.",
      "A las cinco y veinte salimos. La caseta tenía un termómetro en el porche: cuatro grados. La marisma estaba oscura como un cuenco de tinta. Antonio caminaba despacio, sin linterna; solo con el haz rojo de la frontal cada cuatro o cinco minutos para no perder la dirección. Me explicó luego, en susurros, que la frontal blanca asusta al lince. La roja no.",
      "El lince ibérico está en sus mejores años desde que Valverde inventó este espacio. En 2002 quedaban menos de cien. Hoy son dos mil. Es una historia de éxito que pocos cuentan, porque la prensa quiere noticias malas y los nichos quieren mártires. Pero los datos están ahí: el lince ha vuelto. Por la lucha de gente como Valverde, sí. Por la reintroducción. Por la gestión cinegética del conejo (que es a la vez su comida y su salvación). Por miles de personas que nunca verán uno y que aún así donan al año cien euros para que sigan ahí.",
      "Llegamos al puesto a las seis menos cuarto. Una loma con vistas a una vereda donde a veces cruzan. Antonio plegó un asiento de lona, sacó unos prismáticos de su mochila y se sentó. No habló durante tres horas y media.",
      "Yo aprendí, esa mañana, lo que significa estar quieto. Mis pies se durmieron, mis manos se enfriaron a niveles que no había sentido nunca, mi nariz goteó, mi cabeza se llenó de pensamientos absurdos. Y aún así, Antonio quieto. Como un poste. Como un árbol joven. Sus ojos pegados a los prismáticos, su respiración prácticamente inaudible. Cuando le pregunté por qué no se movía, me dijo: «porque entonces nos vamos sin haber visto nada».",
      "A las nueve y trece minutos el lince cruzó. Cuarenta metros. Macho adulto, marcado, paso largo, cola levantada. Tardó ocho segundos en pasar. Antonio no levantó la vista de los prismáticos. Yo me quedé sin respirar.",
      "Después caminamos veinte minutos sin hablar, ya con el día azul y las cigüeñas volando. Comimos un sándwich de tomate en una caseta abandonada. Antonio sacó un cuaderno muy fino, anotó cuatro cosas, lo guardó. «Es el cuarto este año en esta vereda», dijo. «El año pasado vi tres en todo el año. Está creciendo».",
      "Le pregunté qué pensaba de la caza. Me miró con sorpresa. «Vosotros, los cazadores, sois los mejores aliados de la conservación», dijo. «Pero solo los que la hacen bien. Los que respetan vedas, cupos, especies protegidas. Los que entienden que cazar es ecología.» Anoté la frase entera. Esa noche, antes de dormir, la subrayé.",
      "Al día siguiente me llevó al lugar donde Valverde escribió su tesis sobre las anátidas. Un palafito de madera del año cuarenta. No estaba abierto al público. Antonio tenía llave. Dentro había un escritorio, dos sillas, una estufa apagada, y en la pared una fotografía amarilla de Valverde con un cuaderno y un cigarrillo. Por la ventana se veía la marisma. Nada más.",
      "Pasé veinte minutos en silencio sentada en aquella silla. Antonio me dejó. Cuando salí, le dije que no sabía cómo agradecerle. Me dijo que no era a él a quien tenía que agradecer.",
      "Volví a Madrid esa noche con las botas mojadas, dos rollos de fotos analógicas (Antonio prohíbe el móvil en sus salidas), y el cuaderno lleno. He vuelto a Doñana ocho veces desde entonces. Cada vez aprendo cosas distintas. Pero la primera lección, la que más vale, sigue siendo la misma: para ver un lince hay que estar quieto. Y para estar quieto hay que querer estar quieto. Que parece poco y es lo más difícil del mundo.",
    ],
  },
  {
    slug: "templar-cana-sage",
    titulo: "Cómo se templa una caña de mosca",
    autor: "Inés Marqués",
    categoria: "Reportaje",
    minutos: 14,
    fecha: "28 oct 2026",
    extracto:
      "Visita a la fábrica Sage de Bainbridge Island. Cuatro toneladas de paciencia, una caña de cinco onzas.",
    cuerpo: [
      "Bainbridge Island está a un ferry de Seattle. Cuarenta minutos de mar gris y gaviotas que persiguen el barco. La fábrica de Sage se ve desde lejos: una nave baja, pintada en verde mate, con un cartel mínimo. Dentro, doce personas trabajan en silencio.",
      "Una caña de mosca no se fabrica: se templa. Lo aprendí esa mañana viendo a Carl, técnico de cuarenta años en la casa, enrollar lámina de grafito sobre un mandril cónico durante cuarenta minutos. Sin pausas, sin radio, sin teléfono. Solo la presión justa de sus manos.",
      "[...continuará en versión completa publicada en el cuaderno impreso anual...]",
    ],
  },
  {
    slug: "rios-que-no-existen",
    titulo: "Los ríos que ya no existen",
    autor: "Inés Marqués",
    categoria: "Atlas",
    minutos: 22,
    fecha: "21 oct 2026",
    extracto:
      "Atlas histórico hidrográfico de Iberia: 130 ríos desaparecidos en el último siglo. Lo cuentan mapas viejos, fotografías y testimonios.",
    cuerpo: [
      "El primer río que dejó de existir en la Iberia moderna se llamaba Albuera. Era un afluente del Guadiana en lo que hoy es Badajoz. En 1947 desapareció bajo el pantano de Cíjara. Hoy solo lo recuerdan los mapas de antes del 36, una iglesia hundida que asoma en agosto y dos versos de Carlos Edmundo de Ory.",
      "La historia del Albuera es la de muchos. Iberia ha perdido en cien años entre 120 y 150 ríos pequeños, según mapas antiguos del IGN. La mayoría desapareció bajo el desarrollismo hídrico de los sesenta. Otros se secaron por sobreexplotación. Algunos solo cambiaron de nombre.",
      "Este atlas reúne los 130 más importantes. Está hecho con cariño y con horas de cartografía comparada. No es exhaustivo. Si conoces alguno más, escríbenos.",
      "[...continuará con la lista geográfica completa...]",
    ],
  },
];

export function findPieza(slug: string) {
  return piezas.find((p) => p.slug === slug);
}
