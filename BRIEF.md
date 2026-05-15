# MONTARAZ — Brief maestro de producto, marca y experiencia

> **Tagline**: *Provisión para lo indómito.*
> **Sub-tagline operativo**: *Caza, pesca, montaña y todo lo que no se compra dos veces.*
> **Dominio sugerido**: `montaraz.com` · alternativas: `montaraz.es`, `montaraz.shop`, `montaraz.club`
> **Stack base**: Next.js 16 (App Router · Server Components · Server Actions · Partial Prerendering · Turbopack) + TypeScript estricto + Tailwind v4 + Framer Motion + GSAP/ScrollTrigger + Lenis + React Three Fiber + drei + Mapbox GL + Sanity (CMS) + Drizzle/PostgreSQL + Stripe + Algolia + Resend + Cloudinary.
> **Presupuesto**: 56.000 € · Objetivo: que la experiencia parezca de 120.000 €.
> **Posicionamiento**: NO somos Decathlon. NO somos Cabela's. NO somos Bass Pro. Somos un *atelier de provisión salvaje*: tienda online + revista + comunidad + laboratorio + santuario.
> **Frase interna de equipo**: *"Si dudas si añadirlo, añádelo."*

---

## ÍNDICE GENERAL

1. Visión, propósito, manifiesto, valores
2. Estrategia de marca y posicionamiento
3. Buyer personas y journeys
4. Identidad visual y dirección de arte
5. Sistema tipográfico
6. Sistema de color
7. Iconografía y pictogramas
8. Texturas, materiales y fotografía
9. Voz, tono y copy
10. Stack tecnológico extendido
11. Arquitectura del proyecto
12. Estructura de carpetas y convenciones
13. Mapa de pantallas
14. Página de inicio (escena por escena)
15. Catálogo interactivo
16. Ficha de producto (PDP)
17. Configuradores (rifle, escopeta, caña, mosca, óptica)
18. Visor 3D y Realidad Aumentada
19. Buscador semántico y filtros
20. Carrito y checkout
21. Cuenta de cliente y diario
22. Sistema de comunidad
23. Magazine y storytelling
24. Expediciones, cotos y experiencias
25. Mapa interactivo nacional
26. Calendario lunar, mareas, meteorología y viento
27. Trofeo digital y diario de capturas
28. Programa Maestre (fidelización)
29. Suscripción "El Avituallamiento"
30. Aula Montaraz (cursos)
31. Newsletter "Cuaderno de Bitácora"
32. Componentes UI catalogados
33. Sistema de animaciones y scroll
34. Microinteracciones
35. Cursor, ruido, partículas y shaders
36. Page transitions
37. Easter eggs catalogados (1 a N)
38. Modo "Tarde de campo" (UX nocturno y silencioso)
39. Accesibilidad WCAG AAA
40. Performance budgets
41. SEO técnico y semántico
42. Internacionalización
43. Analítica y experimentación
44. Backend, API y base de datos
45. Panel de administración interno
46. Cumplimiento legal (armas, licencias, RGPD, DAC7)
47. Seguridad
48. Testing
49. CI/CD y entornos
50. Observabilidad
51. Roadmap por fases y entregables
52. Estimación de equipo
53. KPIs y métricas de éxito
54. Riesgos y mitigaciones
55. Glosario interno
56. Anexos (copy de ejemplo, productos, blog posts)

---

## 1. VISIÓN, PROPÓSITO, MANIFIESTO Y VALORES

### 1.1. Visión
Montaraz nace para devolver el alma a la caza y la pesca en un mundo en el que los buscadores las miran con sospecha y los marketplaces las miran con codicia. Aspiramos a ser **la primera tienda online del mundo que sea, antes que tienda, una experiencia digital de campo**. La visita a `montaraz.com` debe sentirse como abrir la puerta de una vieja cabaña con olor a leña, brea, plomo y río — pero con la precisión técnica de un sistema operativo de F1.

### 1.2. Propósito
Equipar a cazadores, pescadores, monteros, recechistas, mosqueros, traineros, palomeros, montañeros y aventureros con el mejor material posible, y hacerlo a través de una interfaz que respete dos cosas simultáneamente:
1. **El tiempo lento del campo** (silencio, espera, observación, ritual).
2. **El tiempo rápido del comercio digital** (búsqueda inmediata, checkout sin fricción, soporte humano).

### 1.3. Manifiesto Montaraz (texto que aparece como página `/manifiesto` y como animación scroll-telling en home)
> *No vendemos artículos: vendemos provisión.*
> *No surtimos pedidos: surtimos jornadas.*
> *No hablamos de "usuarios": hablamos de gente que se levanta antes que el sol.*
> *Aquí no hay productos genéricos: hay piezas elegidas, testadas, contadas.*
> *Sabemos que un disparo es un acto serio.*
> *Sabemos que una picada limpia es un milagro.*
> *Sabemos que hay perros que dieron su vida por nosotros.*
> *Sabemos que el monte cura lo que la ciudad rompe.*
> *Montaraz es un sitio web, sí, pero también es una promesa:*
> *si te lo enviamos, es porque a uno de nosotros le funcionó en serio.*
> *Provisión para lo indómito.*

### 1.4. Valores fundacionales (10)
1. **Respeto** — al animal, al río, al monte, al guardabosques, al guía y al perro.
2. **Honestidad** — fichas técnicas sin marketing tóxico: lo que pesa, pesa; lo que falla, lo decimos.
3. **Precisión** — calibres correctos, números exactos, talla exacta, gramaje exacto.
4. **Trazabilidad** — sabemos de dónde viene cada producto y por qué lo hemos elegido.
5. **Tradición** — recuperamos saberes (cebos vivos artesanos, monterías regladas, perdiguero ibérico).
6. **Innovación** — pero adoptamos tecnología solo si mejora la jornada (no si la sustituye).
7. **Sostenibilidad** — vedas, cuotas, packaging mínimo, devoluciones reales, anti-greenwashing.
8. **Comunidad** — cada cliente puede ser narrador, fotógrafo, prescriptor y maestro.
9. **Lentitud cuando toca** — el "esperar" es una virtud: lo celebramos en UX.
10. **Belleza** — porque equipar a quien madruga merece un sitio bello.

### 1.5. Promesas operativas
- **48 h** para envíos en península (24 h en zonas Express).
- **365 días** de devolución en ropa y accesorios sin estrenar.
- **30 días** en armas (sujeto a normativa).
- **Garantía Montaraz**: si en el primer uso falla, lo reemplazamos sin preguntas.
- **Atención humana**: nunca un chatbot solo; siempre un humano detrás, identificado con foto y firma.
- **Embalaje silencioso**: cartón crudo, papel kraft, cordel de yute, cero plástico decorativo.

### 1.6. Antagonistas (qué NO somos)
- No somos un marketplace.
- No somos low-cost.
- No somos un foro.
- No somos una red social.
- No somos un blog disfrazado de e-commerce.
- No somos *gamers* del campo: el campo no es un videojuego.

### 1.7. Tono de marca en una frase
*"Como si Hemingway montara una tienda online con Apple y la dirigiera José Antonio Valverde."*

---

## 2. ESTRATEGIA DE MARCA Y POSICIONAMIENTO

### 2.1. Mapa competitivo
- **Decathlon Caza/Pesca**: barato, masivo, sin alma.
- **Cabela's / Bass Pro Shops**: enorme, americano, abrumador, poca curaduría.
- **Outdoor Gun / Beretta Gallery**: lujo intimidante, sin pesca.
- **Orvis**: cercano en alma para pesca, pero solo pesca.
- **Filson**: alma textil, sin tienda especializada de caza.
- **Hyttetech / Sako Shop**: técnico, pero seco.
- **Marketplaces (Amazon, eBay)**: sin curaduría.

**Hueco que ocupamos**: *premium curado bilingüe ibérico, omnívoro (caza+pesca+montaña), narrativo, técnico, sostenible y profundamente español/portugués sin dejar de ser internacional.*

### 2.2. Pilares de marca
1. **Curaduría** — cada producto lo elige una persona con cara y nombre.
2. **Conocimiento** — magazine, cursos, fichas didácticas, atlas.
3. **Servicio** — soporte humano, taller propio, armería certificada.
4. **Ritual** — packaging, microcopy, "Modo Tarde de Campo".
5. **Mapa** — vinculación a territorio (cotos, ríos, estuarios, sierras).

### 2.3. Arquitectura de submarcas
- **Montaraz Monte** (caza) — color base `#3D2A1A` (tabaco roble).
- **Montaraz Aguas** (pesca) — color base `#1F3A45` (verde-pizarra mojada).
- **Montaraz Sendas** (montaña, ropa técnica) — color base `#5C5346` (piedra).
- **Montaraz Cocina** (productos de despiece, conservas, cuchillería) — color base `#7C1F1F` (sangre seca).
- **Montaraz Aula** (cursos y guías) — color base `#1A1A1A` (cuaderno negro).
- **Montaraz Club** (fidelización) — dorado mate `#9C7A2F`.

### 2.4. Storytelling de origen (página `/origen`)
Tres fundadores ficticios pero verosímiles para narrativa:
- **Alfredo de la Sota** — armero asturiano, tercera generación, restaura Sako 75 a mano.
- **Inés Marqués** — biólogo marino y pescadora a mosca del Sella, especialista en truchas autóctonas.
- **Tomé Lanza** — guía de monterías extremeñas, criador de podencos.

Esta tríada se enseña con tres retratos en blanco y negro, granulado de película.

### 2.5. Promesa funcional vs. emocional
- **Funcional**: encontrar y comprar el material correcto en el menor número de clics, con asesoramiento si lo necesitas.
- **Emocional**: sentirte parte de una hermandad de gente seria, discreta y enamorada del monte.

### 2.6. Arquetipos
- **Principal**: El Explorador (Jung).
- **Secundario**: El Sabio.
- **Tercario**: El Cuidador (custodia del entorno).

### 2.7. Palabras prohibidas en copy
"Awesome", "épico", "brutal", "salvajada", "loco", "increíble", emoji excesivo, "click here", "compra ahora YA". Sustituimos por: "afilado", "preciso", "fiable", "puntual", "templado", "honesto", "limpio".

### 2.8. Palabras permitidas y celebradas
*"Cala", "puesto", "rastro", "ojeo", "espera", "tirada", "mosca seca", "ninfa", "cucharilla", "vivac", "altura", "morera", "perdiguero", "becada", "media veda", "rebeco", "ciervo en berrea", "lubina de costa", "trucha asalmonada", "calado", "luna llena".*

---

## 3. BUYER PERSONAS Y JOURNEYS

### 3.1. Persona 1 — "Lucas, 42, recechista de Cantabria"
- Trabaja en oficina; sale 25 fines de semana al año.
- Compra de gama media-alta: rifle Sako, óptica Swarovski Z5, mochila Kuiu.
- Lee revistas Trofeo y Jara y Sedal.
- Le importa la ética y la trazabilidad.
- Mide ROI emocional, no precio.
- **Trigger de compra**: nuevo cebo, recambio, ropa específica para berrea.
- **Frustración online**: filtros pésimos, fichas incompletas, no saber compatibilidades.

### 3.2. Persona 2 — "Marta, 33, mosquera del Pirineo"
- Bióloga, militante por las truchas autóctonas.
- Compra cañas Sage, carretes Hardy, hilos Cortland, vadeadores Simms.
- Pesca sin muerte, fotografía mucho.
- Sigue cuentas de Instagram de fly-fishing.
- **Trigger**: serie limitada de moscas atadas a mano por un guía local.
- **Frustración**: tiendas que no entienden la mosca.

### 3.3. Persona 3 — "Daniel, 58, montero y galguero, Extremadura"
- Compra cuchillería Pallarès, perros con pedigree, suplemento canino.
- Es de los que aún llaman por teléfono.
- Necesita una web que respete su forma de mirar el monte.
- **Trigger**: reposición de munición, ropa de su rehala.
- **Frustración**: webs que infantilizan al cazador.

### 3.4. Persona 4 — "Bea, 29, pescadora de mar/costa, Galicia"
- Pesca de embarcación y de costa, lubina y rodaballo.
- Compra Daiwa, Yamashita, MajorCraft.
- Móvil first.
- Sigue mapas batimétricos y mareas.
- **Trigger**: nuevo señuelo, plomada, anzuelos circulares.
- **Frustración**: tener que ir a foros para entender qué cebo usar.

### 3.5. Persona 5 — "Iván, 37, urbanita curioso"
- Hereda escopeta del abuelo, está sacando licencia.
- Quiere aprender, no busca premium.
- **Trigger**: guía de iniciación, curso, primer chaleco.
- **Frustración**: el mundo cinegético le intimida.

### 3.6. Persona 6 — "Sigrid, 45, alemana, compra para su marido"
- Idioma alemán o inglés, compra desde Múnich.
- Le importa diseño y envío internacional.
- **Trigger**: regalo de aniversario (cuchillo personalizado, prismáticos).
- **Frustración**: webs solo en español.

### 3.7. Persona 7 — "Padre y hijo, primera caza menor"
- Padre 50, hijo 14.
- Compran perdigones, chaleco infantil, perro de muestra primerizo.
- Doble checkout: padre paga, hijo elige.
- **Trigger**: media veda.
- **Frustración**: no hay rangos por talla infantil bien filtrados.

### 3.8. Persona 8 — "Coleccionista de cuchillería"
- Edad 60+.
- Compra piezas únicas: Pallarès Solsona, Joker, Cudeman, Lionsteel.
- **Trigger**: serie numerada.
- **Frustración**: falta de fotografía macro y certificado.

### 3.9. Persona 9 — "Guía profesional / outfitter"
- Necesita cuenta B2B con precios netos.
- Compra al por mayor (cebos, hilos, cartuchos).
- **Trigger**: temporada.
- **Frustración**: no hay portal B2B real.

### 3.10. Persona 10 — "Regalador navideño"
- Esposa/amiga que regala kit a su pareja cazador/pescador.
- No entiende calibres.
- **Trigger**: Navidad, cumpleaños.
- **Frustración**: miedo a equivocarse.

### 3.11. Journeys clave (12 escenarios)
1. **Compra de munición específica** (calibre + grano + bala).
2. **Configurar rifle completo** (rifle + óptica + monturas + correa + funda + caja).
3. **Comprar caña + carrete + cola + bajo** (compatibilidad).
4. **Reservar puesto en monteria** (experiencia).
5. **Apuntarse a curso "Iniciación a la mosca seca"**.
6. **Suscribirse al box mensual "El Avituallamiento"**.
7. **Pedir cuchillo personalizado con grabado**.
8. **Comparar prismáticos** (3 modelos lado a lado, en 3D).
9. **Crear lista de equipo para una expedición** (asistente conversacional).
10. **Devolución de chaleco que no encaja** (Self-RMA).
11. **Renovación de licencia + seguro** (página informativa con enlace oficial).
12. **Comprar regalo sin saber nada** (selector "regalo a ciegas").

### 3.12. Patrones emocionales en cada journey
- **Excitación** al descubrir.
- **Concentración** al configurar.
- **Duda** antes del checkout.
- **Calma** al recibir confirmación.
- **Pertenencia** al recibir packaging.
- **Orgullo** al publicar trofeo digital.

### 3.13. KPIs por persona
- Tasa de conversión.
- AOV (Average Order Value).
- LTV.
- NPS.
- Tasa de retorno a los 60 días.
- Suscripciones al magazine.
- Asistencia a cursos.
- Activación del diario.

---

## 4. IDENTIDAD VISUAL Y DIRECCIÓN DE ARTE

### 4.1. Concepto director
**"Atlas de campo + estación de trabajo de F1."** Una mezcla entre un cuaderno encuadernado en cuero, planos topográficos de IGN, dieselpunk discreto y la calma quirúrgica de un sistema operativo Bauhaus. Nada brillante, nada *flat*, todo *matérico*.

### 4.2. Mood boards (descritos para que el diseñador los recree)
1. **Cuaderno de Aldo Leopold** — papel marfil, tinta sepia, dibujos a plumilla.
2. **Estudio de armero** — banco de trabajo, virutas, cromados, gun blue, nogal.
3. **Río al amanecer** — pizarra, musgo, niebla, hilo de seda flotando.
4. **Bauhaus alpino** — Tschichold + Diter Rams + Patagonia.
5. **Casa de monte castellana** — chapas de zinc, granate de chimenea, paño tabaco.
6. **Vitrina de óptica** — Swarovski + Leica + Zeiss, esmalte mate y metales perlados.
7. **Mapa militar** — IGN 1:25.000, curvas de nivel, leyenda austera, papel envejecido.
8. **Postal mar Cantábrico** — gris piedra, espuma, faros, cuerdas, oxido salino.

### 4.3. Reglas globales
- **Cero gradientes vulgares** (sí gradientes sutiles entre tonos cercanos).
- **Cero drop-shadows excesivas**: sombras largas, suaves, oblicuas (luz baja de campo).
- **Cero esquinas redondas grandes**: radio máximo 8 px excepto botones (12 px) y modales (16 px).
- **Bordes 1 px** en color "tinta tierra" siempre que se vaya a separar contenido.
- **Tramas tipográficas** y reglas finas estilo periódico antiguo donde tenga sentido.

### 4.4. Layout y rejilla
- **Grid base de 12 columnas**, gutter 24 px, max-width 1440 px.
- **Sub-grid de 16 columnas** para hero de home y editorials.
- **Baseline grid** de 8 px (todo cuela en múltiplos de 8).
- **Espaciado**: 4, 8, 12, 16, 20, 24, 32, 40, 56, 72, 96, 128, 160, 240 px.

### 4.5. Esquina dura vs. esquina suave
- **Dura (radius 0)** — fichas técnicas, sellos, etiquetas, mapas, tablas.
- **Suave (radius 8-16)** — botones, inputs, cards de producto.

### 4.6. Ratio dorado
Se usa para hero, ratios de tarjetas (1.618:1) y proporciones de modales (1:1.272 o 1:1.618).

### 4.7. Reglas de jerarquía visual
- **H1**: máximo 64 px desktop / 40 px mobile.
- **H2**: 48 / 32.
- **H3**: 32 / 24.
- **H4**: 24 / 20.
- **Body**: 16 / 16, line-height 1.55.
- **Caption**: 13 / 12, line-height 1.45.
- **Eyebrow**: 11 / 11, tracking 0.16em, uppercase.

---

## 5. SISTEMA TIPOGRÁFICO

### 5.1. Familias seleccionadas
1. **Display / Logo**: *"Caponata"* (custom) — caracteres con remates afilados, eñe con cuerno (eñe-trofeo), &-ampersand barroco. Alternativa con licencia: **GT Sectra Display** o **Editorial New** (PangramPangram).
2. **Headings serif editorial**: **GT Sectra Fine** o **Tiempos Headline**.
3. **Sans neogrotesca**: **Söhne** (Klim) o **Inter** como fallback abierto.
4. **Mono técnica**: **JetBrains Mono** o **MartianMono** para fichas y ammo codes.
5. **Script de cuaderno**: **Recoleta** (acentos editoriales) o **Caveat** para anotaciones manuscritas.
6. **Custom mapas**: **National Park** (USFS lettering) para etiquetas geográficas.

### 5.2. Escala tipográfica (modular, ratio 1.25)
- 11, 12, 13, 14, 16, 18, 20, 24, 30, 36, 44, 56, 72, 96, 128 px.

### 5.3. Pesos
- Sectra: Regular, Medium, Bold.
- Söhne: Buch (400), Halbfett (500), Kräftig (600), Dreiviertelfett (700).
- Mono: 400, 500.

### 5.4. Reglas de uso
- **Nunca** mezclar más de tres pesos en un mismo módulo.
- **Number sets**: usar *tabular numerals* en precios, calibres, gramajes.
- **Eyebrows**: Söhne 500 uppercase, tracking 0.16em.
- **Magazine titles**: Sectra Fine, opcional alternativas tipográficas (variantes ligadas).
- **Quotes**: Sectra Italic 28-36 px.

### 5.5. Open Type features
- `ss01` para alternativa de "Q", "&", "ñ".
- `dlig` para ligaduras.
- `tnum` en todo lo numérico.
- `frac` en fichas de calibre (ej: "1/4 oz").

### 5.6. Microtipografía
- Comillas latinas «» en español.
- Guion largo — para incisos editoriales.
- Pseudo-versales para etiquetas.
- *Hanging punctuation* en bloques de texto largos.

### 5.7. Acessibilidad tipográfica
- Tamaño mínimo body 16 px.
- Contraste mínimo AA, ideal AAA.
- `text-wrap: balance` en titulares.
- `font-display: swap` y subsetting agresivo.

### 5.8. Carga de fuentes
- `next/font/local` con preload.
- Variable fonts cuando estén disponibles.
- Subset latino + signos para evitar 350 KB innecesarios.
- Métricas de fallback con `size-adjust`.

### 5.9. Sistema de "voz tipográfica"
- **Editorial** (revista, manifiesto): Sectra serif dominante.
- **Comercial** (PDP, checkout): Söhne sans dominante.
- **Técnico** (fichas, calibres, gramajes): Mono.
- **Manuscrito** (microanotaciones, easter eggs): Caveat.

### 5.10. Custom kerning
Se documenta a mano el kerning para palabras frecuentes: "MONTARAZ", "AGUAS", "MONTE", "SENDAS", "PROVISIÓN", "INDÓMITO".

---

## 6. SISTEMA DE COLOR — VERDE CAMPAÑA (revisión)

### 6.1. Filosofía
"Colores que existen en el campo a las 7 de la mañana, vistos por alguien con uniforme verde." Una **paleta militar mate**: verde campaña, verde oliva, verde caqui, verde liquen, verde junco y verde lino. Sobre ella, un único acento cálido — **latón cartucho** — que evoca las vainas que pesan en el bolsillo. **Cero saturación HSL pura. Cero verdes neón. Cero "Slack purple".**

### 6.2. Paleta primaria — verde campaña (10 tonos)
> Toda la marca se construye sobre esta escala. Como una libreta de mil hojas, donde cada tono es una hora del día.

- `--verde-1` `#0B0F08` — *Noche en el monte* (casi negro, base UI dark).
- `--verde-2` `#101610` — *Sombra de pino*.
- `--verde-3` `#161C12` — *Loden profundo* (fondo modo oscuro).
- `--verde-4` `#1F2A1A` — *Verde campaña* (uniforme reglamentario español).
- `--verde-5` `#2E3D26` — *Verde oliva mate* (color marca principal).
- `--verde-6` `#465938` — *Verde olivar de Jaén*.
- `--verde-7` `#697B4B` — *Verde caqui* (chaqueta de monte).
- `--verde-8` `#8E9D67` — *Verde liquen* (estado disponible).
- `--verde-9` `#B6BF8E` — *Verde junco*.
- `--verde-10` `#D6D8B5` — *Verde lino crudo* (acabado/línea fina).

### 6.3. Paleta cálida complementaria — latón cartucho (8 tonos)
> El acento. Cobre y latón viejos. Se usa con moderación: CTAs primarios, sellos, insignia Maestre, números de serie.

- `--laton-1` `#1B130A` — *Pavón profundo* (texto sobre claro).
- `--laton-2` `#3A2A14` — *Castaño asado*.
- `--laton-3` `#5C4220` — *Cuero curtido*.
- `--laton-4` `#7C5A1E` — *Latón oxidado* (hover de CTAs).
- `--laton-5` `#B6822E` — **Latón cartucho** (acento principal).
- `--laton-6` `#C9A35A` — *Latón pulido* (hover sobre oscuro).
- `--laton-7` `#E0C58D` — *Latón claro*.
- `--laton-8` `#EFE0BC` — *Sand cream* (highlights).

### 6.4. Paleta de aguas (revisada hacia el verde)
> Cuando navegues por la submarca *Montaraz Aguas*, los azules se mueven hacia un verde-pizarra coherente con el conjunto.

- `--agua-1` `#08130E` — *Charca nocturna*.
- `--agua-2` `#0F2218` — *Verde-pizarra profundo*.
- `--agua-3` `#1A3325` — *Río truchero*.
- `--agua-4` `#2A4A36` — *Estuario al alba*.
- `--agua-5` `#557664` — *Niebla del Sella*.
- `--agua-6` `#9CB8A7` — *Espuma cantábrica*.
- `--agua-7` `#DCE6E0` — *Hielo grisáceo*.

### 6.5. Paleta de sendas
- `--senda-1` `#161613` — *Pizarra*.
- `--senda-2` `#2E2E26` — *Piedra húmeda*.
- `--senda-3` `#4F5043` — *Liquen seco*.
- `--senda-4` `#7B7B65` — *Heno*.
- `--senda-5` `#AFAE91` — *Avena*.
- `--senda-6` `#D8D5BB` — *Lana cruda*.

### 6.6. Acentos funcionales (uso parsimonioso)
> Solo señalización. Nunca como fondo de bloque. Nunca dos acentos en el mismo módulo.

- `--vermellon` `#9C2E22` — sello rojo, alarma, edición numerada.
- `--mostaza` `#B68B2F` — etiqueta serie limitada (variante del latón).
- `--musgo` `#5B7A3C` — disponible, ok (verde funcional vivo).
- `--cobalto` `#27437A` — link, info, navegación primaria sobre claro.
- `--terracota` `#A6543A` — solo Magazine y dataviz, sustituye al coral-niebla.

### 6.7. Sistema Club Maestre (dorado)
- `--maestre-1` `#5C4220` — base mate (sello).
- `--maestre-2` `#8E6826` — medio.
- `--maestre-3` `#B6822E` — primario (= `--laton-5`, coherente).
- `--maestre-4` `#D9B26A` — hover sobre oscuro.
- `--maestre-5` `#F0D89B` — destello (raro, solo nivel Maestre).

### 6.8. Estados funcionales
- Éxito: `--musgo`.
- Error: `--vermellon`.
- Atención: `--mostaza`.
- Info: `--cobalto`.

### 6.9. Modo oscuro (default global)
- **Fondo base**: `--verde-3` `#161C12` (no negro puro; verde casi imperceptible).
- **Fondo elevado**: `--verde-4` `#1F2A1A` (cards, drawers).
- **Fondo alto-elevación**: `--verde-5` `#2E3D26` (modals).
- **Texto primario**: `--laton-8` `#EFE0BC`.
- **Texto secundario**: `--laton-7` `#E0C58D`.
- **Texto terciario / atenuado**: `--verde-9` `#B6BF8E`.
- **Bordes**: `--verde-6` `#465938`.
- **Bordes finos divisorios**: `rgba(214, 216, 181, 0.12)`.

### 6.10. Modo claro (pergamino + verde)
- **Fondo base**: `--laton-8` `#EFE0BC` (papel kraft envejecido).
- **Fondo elevado**: `#F6EBC9` (papel marfil).
- **Texto primario**: `--verde-2` `#101610`.
- **Texto secundario**: `--verde-5` `#2E3D26`.
- **Bordes**: `#D8C58A`.
- **Acento**: `--laton-5` para CTAs, `--cobalto` para enlaces editoriales.

### 6.11. Modo "Tarde de Campo" (UX nocturno)
- Fondo: `#0A0907`.
- Texto: `#FFCFA8`.
- Acentos: rojo `#FF4B2E` (linterna roja con filtro, preserva visión nocturna).
- Activado por horario (22:00–06:00 hora navegador) o toggle manual con icono de linterna.

### 6.12. CSS Tokens (oficial — copiar tal cual a `globals.css`)
```css
:root {
  /* Verde campaña — primario */
  --color-verde-1: #0B0F08;
  --color-verde-2: #101610;
  --color-verde-3: #161C12;
  --color-verde-4: #1F2A1A;
  --color-verde-5: #2E3D26;
  --color-verde-6: #465938;
  --color-verde-7: #697B4B;
  --color-verde-8: #8E9D67;
  --color-verde-9: #B6BF8E;
  --color-verde-10: #D6D8B5;

  /* Latón cartucho — secundario cálido */
  --color-laton-1: #1B130A;
  --color-laton-2: #3A2A14;
  --color-laton-3: #5C4220;
  --color-laton-4: #7C5A1E;
  --color-laton-5: #B6822E;
  --color-laton-6: #C9A35A;
  --color-laton-7: #E0C58D;
  --color-laton-8: #EFE0BC;

  /* Aguas (verde-pizarra) */
  --color-agua-1: #08130E;
  --color-agua-2: #0F2218;
  --color-agua-3: #1A3325;
  --color-agua-4: #2A4A36;
  --color-agua-5: #557664;
  --color-agua-6: #9CB8A7;
  --color-agua-7: #DCE6E0;

  /* Sendas */
  --color-senda-1: #161613;
  --color-senda-2: #2E2E26;
  --color-senda-3: #4F5043;
  --color-senda-4: #7B7B65;
  --color-senda-5: #AFAE91;
  --color-senda-6: #D8D5BB;

  /* Acentos funcionales */
  --color-vermellon: #9C2E22;
  --color-mostaza:   #B68B2F;
  --color-musgo:     #5B7A3C;
  --color-cobalto:   #27437A;
  --color-terracota: #A6543A;

  /* Maestre */
  --color-maestre-1: #5C4220;
  --color-maestre-2: #8E6826;
  --color-maestre-3: #B6822E;
  --color-maestre-4: #D9B26A;
  --color-maestre-5: #F0D89B;

  /* Semánticos (dark default) */
  --bg:        var(--color-verde-3);
  --bg-raised: var(--color-verde-4);
  --bg-high:   var(--color-verde-5);
  --fg:        var(--color-laton-8);
  --fg-muted:  var(--color-laton-7);
  --fg-dim:    var(--color-verde-9);
  --border:    var(--color-verde-6);
  --accent:    var(--color-laton-5);
  --accent-hover: var(--color-laton-6);
  --link:      var(--color-laton-6);
  --success:   var(--color-musgo);
  --warning:   var(--color-mostaza);
  --danger:    var(--color-vermellon);
  --info:      var(--color-cobalto);
}

[data-theme="light"] {
  --bg:        var(--color-laton-8);
  --bg-raised: #F6EBC9;
  --bg-high:   #FBF3D8;
  --fg:        var(--color-verde-2);
  --fg-muted:  var(--color-verde-5);
  --fg-dim:    var(--color-verde-6);
  --border:    #D8C58A;
  --accent:    var(--color-laton-5);
  --accent-hover: var(--color-laton-4);
  --link:      var(--color-cobalto);
}

[data-theme="tarde"] {
  --bg:        #0A0907;
  --bg-raised: #110C09;
  --bg-high:   #1A120D;
  --fg:        #FFCFA8;
  --fg-muted:  #E5B58E;
  --fg-dim:    #A37A55;
  --border:    #2A1810;
  --accent:    #FF4B2E;
  --accent-hover: #FF6A50;
  --link:      #FF4B2E;
}
```

### 6.13. Reglas de combinación
- **Combinación canónica global**: `--verde-3` (fondo) + `--laton-8` (texto) + `--laton-5` (acento) + `--verde-6` (línea fina).
- **Combinación Monte (caza)**: `--verde-2` + `--laton-7` + `--laton-5` + `--maestre-3` (sellos).
- **Combinación Aguas (pesca)**: `--agua-2` + `--agua-7` + `--laton-5` (acento contra) + `--cobalto` (links).
- **Combinación Sendas (montaña)**: `--senda-2` + `--senda-6` + `--musgo` + `--laton-5`.
- **Combinación Cocina**: `--verde-2` + `#7C1F1F` (sangre seca) + `--laton-7`.
- **Combinación editorial Magazine**: `--laton-8` (fondo claro) + `--verde-2` (texto) + `--terracota` (decorativo).
- **Combinación Maestre**: `--verde-2` + `--maestre-3` + `--maestre-5` (destello sutil).
- **Nunca**: dos acentos cromáticos en el mismo módulo.
- **Nunca**: gradientes entre acentos.
- **Nunca**: verdes neón (`#00FF00` y similares).
- **Nunca**: dos elementos saturados juntos sin tono terroso de por medio.

### 6.13. Filtros de imagen sistemáticos
Toda imagen pasa por una capa con `filter: contrast(1.02) saturate(0.92) brightness(0.98)` para forzar paleta cohesiva. Las imágenes "frías" (aguas) reciben un ligero overlay azul-pizarra al 6 %.

### 6.14. Contrastes mínimos
- Texto sobre fondo: ≥ 7:1 (AAA).
- Texto secundario: ≥ 4.5:1 (AA).
- Estados desactivados: ≥ 3:1.

### 6.15. Mapeo Tailwind v4
Configurar `@theme` con todos los tokens en CSS, importando desde `tokens.css`. Cada token disponible como `bg-monte-1`, `text-agua-7`, `border-dorado-2`, etc.

### 6.16. Generación de fondos
- Texturas SVG procedurales con ruido (`feTurbulence`) bajo opacidad 0.04-0.08.
- Patrones de papel verjurado a 600 dpi exportados a WebP en tres tamaños.
- Grano de película 2.5% de opacidad como capa global.

---

## 7. ICONOGRAFÍA Y PICTOGRAMAS

### 7.1. Estilo
Trazo de 1.5 px, esquinas vivas, *terminales en punta*. Inspirados en pictogramas suizos de senderismo + iconografía de armería + iconos cartográficos del IGN. **Nunca usar Material Icons ni Lucide al pelo**: customizar todos.

### 7.2. Set principal (mínimo 240 iconos custom)
- Armas: rifle, escopeta, revólver, carabina, monoplaza, doble, semiautomática.
- Calibres: ojiva, vaina, taco, perdigón, postal, ojiva expansiva.
- Óptica: visor, prismáticos, monocular, telémetro, retícula (12 tipos).
- Pesca: caña, carrete spinning, carrete mosca, baitcasting, anzuelo (8 tipos), señuelo (12 tipos), bobina, hilo, plomada (10 formas), boya, sedal, hilo trenzado.
- Moscas: ninfa, seca, streamer, gusano, terrestre, mojada.
- Ropa: chaqueta, chaleco, pantalón, gaiter, gorra, sombrero, polaina, calcetín técnico, ropa interior térmica.
- Calzado: bota alta, bota baja, vadeador, bota wading, alpargata.
- Cuchillería: machete, navaja, bowie, skinner, fileteador, multiusos.
- Camping: tienda, vivac, hornillo, saco, esterilla, frontal, cuerda.
- Fauna: ciervo, jabalí, corzo, gamo, muflón, rebeco, perdiz, becada, paloma, tórtola, ánade, trucha, salmón, lubina, sargo, bonito, atún.
- Cartográficos: curva de nivel, refugio, fuente, río, lago, faro, brújula, mirador, ermita, vado, vereda.
- Atmosféricos: sol bajo, niebla, lluvia, viento, nieve, helada, escarcha, luna nueva, luna llena.
- Acciones: añadir al carrito, comparar, guardar en cuaderno, compartir con respeto, calibrar, configurar.

### 7.3. Reglas
- Tamaño base 24×24 px.
- Variantes 16, 20, 28, 32, 48.
- Versión "filled" solo para estados seleccionados.
- Versión "duotone" para hero icons (acento mostaza + base monte-7).

### 7.4. Pictograma de marca
Triángulo de pirámide topográfica con una "M" interna que evoca tanto montaña como mosca seca. Versión "punzón" para favicons y bordados textiles.

### 7.5. Animación de iconos
- Hover: micro-rotación 2°, escala 1.04, color a `--mostaza`.
- Click: pulse + spring suave (Framer Motion).
- Estado loading: trazo animado con `strokeDasharray`.

---

## 8. TEXTURAS, MATERIALES Y FOTOGRAFÍA

### 8.1. Texturas base
- Papel verjurado (3 escaneados de 600 dpi).
- Cuero curtido (2 grados de envejecimiento).
- Madera de nogal (1 textura, vetas reales).
- Lana cruda (2 patrones).
- Latón rayado (para detalles de UI premium).
- Niebla (capa atmosférica).

### 8.2. Materiales para 3D
- Cuero, nogal, fresno, acero pavonado, acero inox, latón, aluminio anodizado, polímero negro mate, polímero camo.
- PBR: baseColor, normal, roughness, metalness, ao.

### 8.3. Dirección fotográfica
- **Luz**: 70 % naturales, 30 % estudio bajo control.
- **Hora**: amaneceres y atardeceres ("golden hour" *real*, no filtros).
- **Stop down**: f/8 mínimo para producto.
- **Color science**: tendiente a Kodak Portra 400 (cálido, piel verdadera).
- **No retoque excesivo**: dejar arañazos del uso real en producto premium.
- **Ratio**: 4:5 cuadrícula PDP, 16:9 hero, 1:1 social, 3:2 magazine.

### 8.4. Naming convention de assets
`producto_[slug]_[variant]_[index]_[hora]_[ratio].avif`
Ejemplo: `sako-90-308win_negro_03_amanecer_4x5.avif`

### 8.5. Formatos
- AVIF principal, WebP fallback, JPEG XL para visores 3D estáticos.
- Imágenes responsive con `next/image` y `srcset` automáticos.
- LQIP via blurDataURL.
- Lazyload nativo y `priority` solo en hero.

### 8.6. Galerías
- **Modo zoom**: hover con lente magnética estilo Apple.
- **Modo carousel**: scroll horizontal con momentum.
- **Modo estudio**: 6 fotos del mismo producto desde 6 ángulos, controladas por scroll.
- **Modo 360**: drag para girar.
- **Modo macro**: zoom > 4x con pan suave.
- **Modo comparación**: dos imágenes con slider.

### 8.7. Vídeo
- 24 fps cinematográfico.
- Codec AV1, fallback H.265.
- Autoplay solo sin audio.
- Background videos con `prefers-reduced-motion: reduce` desactivados.
- Hero videos pesan ≤ 1.8 MB tras compresión.

---

## 9. VOZ, TONO Y COPY

### 9.1. Diez reglas de copy Montaraz
1. Frase corta, sustantivo concreto, verbo preciso.
2. Cero superlativos vacíos.
3. Sí citas literarias en magazine y secciones editoriales.
4. Microcopy *campestre* en formularios ("¿Dónde te lo dejamos en el monte?").
5. Errores con humor sereno ("Ese calibre no existe. ¿Lo soñaste anoche?").
6. Confirmaciones con clase ("Hecho. Tu pedido va camino del puesto.").
7. Vacíos con sentido ("Aún no has guardado nada. El monte sigue ahí.").
8. CTA verbal: "Llévatelo", "Apúntate", "Reserva", "Pruébalo", "Hazlo tuyo".
9. Bilingüe sin perder alma: ES, EN, PT, FR, DE, IT (después). Locale-aware idioms.
10. Cifra precio sin marcas vulgares (`1.245,00 €` con espacio fino).

### 9.2. Glosario interno (qué decir / qué no)
- ✗ "Producto" → ✓ "pieza" / "artículo" / "modelo".
- ✗ "Cliente" → ✓ "socio" / "gente Montaraz" / "compañero".
- ✗ "Stock" → ✓ "existencias" / "disponible" / "queda".
- ✗ "Tu carrito" → ✓ "tu morral".
- ✗ "Wishlist" → ✓ "cuaderno".
- ✗ "Checkout" → ✓ "pasar por caja".
- ✗ "Loading" → ✓ "Cargando, espera lenta como en el puesto".
- ✗ "Sign up" → ✓ "Date de alta".
- ✗ "Logout" → ✓ "Cierra el morral".

### 9.3. Tres microensayos para PDP
Cada categoría madre tiene un microensayo de 80 palabras escrito por uno de los fundadores. Se muestra en la cabecera de la categoría como `intro literaria` con scroll-fade.

### 9.4. Estilo de fichas
Estructura: pieza única + ficha técnica + por qué la elegimos (firma del curador) + opiniones.

### 9.5. Lenguaje inclusivo
Se usa "cazadores y cazadoras", "pescadores y pescadoras", o el genérico contextual. Cero asterismos forzados; no se infantiliza. Se evita el "@" o "x" pero se cuida no decir solo masculino genérico en posiciones simbólicas.

### 9.6. Localización
- ES (España, peninsular).
- ES-LA (Latinoamérica, con vocabulario distinto: "perdigones" vs. "postas", "carabina").
- PT-PT (Portugal).
- EN-UK.
- FR-FR.
- DE-DE.
- IT-IT.
- Cada locale tiene su propio glosario y unidades (calibres en mm vs. inch, gramos vs. grains).

### 9.7. Reglas de fechas y números
- Fechas: `12 mar 2026` (mes abreviado en minúscula).
- Hora: 24h con dos puntos `06:42`.
- Precios: locale ICU.
- Calibres: serie con punto `.30-06`, `.270 Win`, `.308 Win`.

### 9.8. Tono de email
- Subject corto, sustantivo + verbo: "Tu morral espera".
- Cuerpo: máximo 90 palabras + CTA.
- Firma humana: "Inés y el equipo Montaraz".

### 9.9. Tono de SMS / Push
- Frase única, sin emojis.
- "Tu paquete llega hoy entre 12:00 y 14:00. Que cace bien." (transaccional).

### 9.10. Tono de chat
- Bienvenida: "Hola. Soy Tomé, guía Montaraz. ¿Dónde quieres ir?"
- Cierre: "Buen viento."

---

## 10. STACK TECNOLÓGICO EXTENDIDO

### 10.1. Núcleo
- **Next.js 16** (App Router, RSC, Server Actions, **Partial Prerendering** activado, **Turbopack** en dev y build).
- **TypeScript 5.7+** en modo estricto (`strict`, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`).
- **React 19** (Suspense, transitions, `use()`, `useFormState`).
- **Edge Runtime** para rutas de búsqueda y middleware.
- **Node Runtime** para rutas que tocan Stripe webhooks pesados.

### 10.2. Estilos
- **Tailwind CSS v4** (oxide, sin `tailwind.config.js`, `@theme` en CSS).
- **CSS variables** para tokens (modo oscuro/claro/tarde-de-campo).
- **PostCSS** mínimo, con `lightningcss`.
- **CSS Container Queries** para layouts adaptativos por componente.
- **`color-mix()`** para hover states.
- **`@scope` CSS** para encapsular módulos editoriales.

### 10.3. Animaciones
- **Framer Motion 12** para animaciones de componentes y `motion.div` reactivo.
  - `useScroll`, `useTransform`, `useMotionValueEvent`, `useSpring`.
  - Variants y `AnimatePresence` para layout transitions.
  - `LazyMotion` para reducir bundle.
- **GSAP** + **ScrollTrigger** para timelines complejos (manifiesto, atlas, configurador).
- **Lenis** para smooth scroll global con respeto a `prefers-reduced-motion`.
- **`react-spring`** sólo cuando se necesite physics fina (haptics de carga).
- **Theatre.js** para coreografiar timelines 3D editoriales.

### 10.4. 3D
- **React Three Fiber 9** + **drei**.
- **Three.js r170+** para físicas básicas y materiales PBR.
- **`@react-three/postprocessing`** (bloom, SSAO, vignetting, noise).
- **`@react-three/rapier`** para físicas (configurador).
- **Draco/Meshopt** compresión de modelos.
- **glTF Transform** para optimización en pipeline.
- **Spline** o **Polycam** como fuentes auxiliares.

### 10.5. Estado y datos
- **Zustand** + **immer** para estado UI cliente (carrito, filtros, cuaderno).
- **TanStack Query v5** para data fetching y caching cliente.
- **React Server Components** + Server Actions como fuente primaria.
- **TRPC** opcional para tipado E2E si conviene.
- **Drizzle ORM** con PostgreSQL (Neon o Supabase).
- **Redis** (Upstash) para sesiones, rate-limit, locks de stock.

### 10.6. Búsqueda
- **Algolia** (instasearch + Recommend).
- Federated search: productos + magazine + cursos + ríos + cotos.
- Sinónimos personalizados (`escopeta` ≈ `paralela` ≈ `superpuesta`).
- Búsqueda semántica con **Vercel AI SDK + embeddings** (OpenAI text-embedding-3-large o local Sentence-BERT).

### 10.7. Pagos
- **Stripe** (Payment Intents).
- **Apple Pay / Google Pay / Bizum / SEPA / Klarna / Sequra**.
- **3DS 2** y **Strong Customer Authentication**.
- **Stripe Tax** para IVA por país.

### 10.8. Email
- **Resend** + **React Email** (templates JSX).
- **Postmark** como fallback transaccional.
- **Listmonk** o Resend Broadcasts para newsletter.

### 10.9. CMS
- **Sanity.io** v3 con custom studio brand.
- Schema: productos (sólo metadatos editoriales; canon real en DB), magazine, expediciones, cursos, glosario, atlas, autores, recetas.
- **Sanity Live Preview** + draft mode.
- **Portable Text** con bloques custom (mapa, ficha técnica embebida, galería, audio, vídeo, cita ilustrada).

### 10.10. Media
- **Cloudinary** principal con AI cropping para producto.
- **Mux** para vídeo (hero, magazine).
- **ImageKit** como fallback.

### 10.11. Mapas
- **Mapbox GL JS** con estilo personalizado "Montaraz Topo".
- Capas: hidrografía, cotas, refugios, ríos truchales, cotos privados, masas forestales, parques.
- **Turf.js** para geometrías y radios.
- **react-map-gl** como wrapper.

### 10.12. Auth
- **Auth.js (NextAuth) v5** con providers: email mágico, Google, Apple.
- **Passkeys** (WebAuthn) como opción premium.
- **2FA TOTP** para perfiles de armería.

### 10.13. Observabilidad
- **Sentry** (errors, performance).
- **OpenTelemetry** + **Vercel Observability**.
- **Highlight.io** o **PostHog** (replay con consentimiento).
- **Logflare/Axiom** para logs estructurados.

### 10.14. Testing
- **Vitest** unit.
- **Playwright** E2E.
- **Storybook 8** con visual regression (Chromatic).
- **Pa11y / axe-playwright** accesibilidad.
- **Lighthouse CI** performance.

### 10.15. CI/CD
- **GitHub Actions**.
- **Vercel** preview branches.
- **Turborepo** monorepo (apps/web, apps/studio, packages/ui, packages/config, packages/db).
- **Changesets** para releases internas.

### 10.16. Infraestructura
- **Vercel** + **Edge Network** + **ISR**.
- **Neon** o **Supabase** Postgres.
- **Upstash Redis**.
- **R2 / S3** para assets pesados.
- **Cloudflare** delante para WAF + cache de zonas estáticas.

### 10.17. Seguridad
- **Content Security Policy** estricta con nonces.
- **Subresource Integrity** en CDNs externos.
- **Rate limit** por IP+token en endpoints sensibles.
- **Cloudflare Turnstile** o **hCaptcha** en formularios.
- **OWASP Top 10** auditado.
- **Pentest** anual.

### 10.18. Accesibilidad
- **Radix UI** como base de primitives (Dialog, Popover, Tabs, Tooltip, Toast).
- **react-aria** para casos avanzados (combobox, listbox, calendar).
- **focus-trap** + skip-links + landmarks.

### 10.19. Internacionalización
- **next-intl** o **next-i18next**.
- ICU MessageFormat.
- Routing por subpath (`/es`, `/en`, `/pt`).
- `hreflang` correctamente seteado.

### 10.20. AI
- **Vercel AI SDK** con providers Anthropic + OpenAI.
- **Embeddings** para recomendación.
- **RAG** para asistente "Tomé" sobre nuestra base documental.
- **Function calling** para que el asistente consulte stock, mareas, vedas en vivo.
- **Anthropic Claude** como modelo conversacional principal (más prudente, mejor para temas sensibles como armas).

### 10.21. Form & validación
- **react-hook-form** + **zod**.
- Server Actions validan con zod en backend.
- Errores tipados E2E.

### 10.22. Tablas y dataviz
- **TanStack Table** para admin y comparador.
- **D3.js** o **visx** para magazine y dataviz de mareas/lunas/vedas.
- **observable plot** para gráficos editoriales.

### 10.23. Logs y auditoría
Toda compra de armas/munición se loguea con timestamp, IP, user-id, hash de licencia. Acceso a logs restringido a admin con 2FA.

### 10.24. Versionado
Semver. Apps en monorepo. Releases internas semanales.

---

## 11. ARQUITECTURA DEL PROYECTO

### 11.1. Patrón base
**Vertical Slice Architecture** dentro del App Router. Cada slice (módulo de negocio: `catalog`, `checkout`, `account`, `magazine`, `expeditions`, `community`, `admin`) tiene su propio paquete con UI, lógica y tipos.

### 11.2. Capas
1. **Edge** — middleware, geolocalización, A/B.
2. **Server Components** — render con datos.
3. **Server Actions** — mutaciones, validación zod.
4. **Domain** — entidades, casos de uso, reglas de negocio.
5. **Data** — drizzle, repositorios.
6. **Integrations** — Stripe, Sanity, Algolia, Cloudinary.
7. **UI** — componentes y storybook.

### 11.3. Patrones de datos
- **Read models** denormalizados (productos con join precompuesto).
- **Write models** normalizados (orders, inventories).
- **Outbox** para eventos (`order.created`, `stock.reserved`).
- **Idempotencia** en POSTs públicos por header `Idempotency-Key`.

### 11.4. Cache
- **Per-tag revalidation** (Next 16): `revalidateTag('product:sako-90')`.
- **TTL corto** (60 s) en home y catálogo.
- **TTL largo** (24 h) en magazine y páginas editoriales.
- **Partial Prerendering** con holes dinámicos para precio, stock, sugerencias.

### 11.5. Errores
- ErrorBoundary segmentado.
- Captura por Sentry + nivel.
- Mensajes humanos al usuario, técnicos al log.

### 11.6. Feature flags
- **OpenFeature** con proveedor self-hosted (PostHog).
- Flags para: AR, RAG asistente, búsqueda semántica, configurador 3D, modo tarde de campo.

### 11.7. Modularidad
Cada slice exporta `routes.ts` con definición. App Router lo monta.

### 11.8. Estrategia de hidratación
- Por defecto RSC.
- `'use client'` solo donde haga falta interactividad real.
- Islands de animación cargados con `next/dynamic` + `loading`.

### 11.9. Bundles
- Code splitting por ruta.
- Critical CSS inline (Next ya lo hace).
- **Polyfills**: ninguno innecesario; targets en `browserslist` modernos.

### 11.10. Datos sensibles
- Licencias y datos de armas cifrados at-rest (AES-256-GCM).
- PII minimizada en logs.
- Backup cifrado diario + retención 35 días.

---

## 12. ESTRUCTURA DE CARPETAS Y CONVENCIONES

```
montaraz/
├── apps/
│   ├── web/
│   │   ├── app/
│   │   │   ├── (marketing)/
│   │   │   │   ├── page.tsx                # Home
│   │   │   │   ├── manifiesto/page.tsx
│   │   │   │   ├── origen/page.tsx
│   │   │   │   ├── prensa/page.tsx
│   │   │   │   └── ...
│   │   │   ├── (shop)/
│   │   │   │   ├── tienda/page.tsx         # Catálogo madre
│   │   │   │   ├── tienda/[seccion]/page.tsx
│   │   │   │   ├── tienda/[seccion]/[familia]/page.tsx
│   │   │   │   ├── producto/[slug]/page.tsx
│   │   │   │   ├── configurador/[tipo]/page.tsx
│   │   │   │   ├── morral/page.tsx
│   │   │   │   ├── caja/page.tsx           # Checkout
│   │   │   │   └── ...
│   │   │   ├── (editorial)/
│   │   │   │   ├── revista/page.tsx
│   │   │   │   ├── revista/[slug]/page.tsx
│   │   │   │   ├── atlas/page.tsx
│   │   │   │   ├── atlas/[region]/page.tsx
│   │   │   │   └── ...
│   │   │   ├── (community)/
│   │   │   │   ├── club/page.tsx
│   │   │   │   ├── diario/page.tsx
│   │   │   │   ├── trofeos/page.tsx
│   │   │   │   └── ...
│   │   │   ├── (account)/
│   │   │   │   ├── cuenta/page.tsx
│   │   │   │   ├── cuenta/pedidos/page.tsx
│   │   │   │   ├── cuenta/licencias/page.tsx
│   │   │   │   ├── cuenta/direcciones/page.tsx
│   │   │   │   └── ...
│   │   │   ├── (auth)/
│   │   │   │   ├── entrar/page.tsx
│   │   │   │   └── ...
│   │   │   ├── (admin)/
│   │   │   │   ├── admin/page.tsx
│   │   │   │   └── ...
│   │   │   ├── api/
│   │   │   ├── layout.tsx
│   │   │   ├── globals.css
│   │   │   └── error.tsx
│   │   ├── components/
│   │   ├── lib/
│   │   ├── server/
│   │   ├── styles/
│   │   ├── public/
│   │   ├── middleware.ts
│   │   └── next.config.ts
│   └── studio/                              # Sanity Studio
├── packages/
│   ├── ui/                                  # Design system
│   ├── animations/                          # Hooks y wrappers Framer/GSAP
│   ├── icons/                               # Icon library custom
│   ├── 3d/                                  # Modelos y materiales
│   ├── config/                              # ESLint, Prettier, TS, Tailwind tokens
│   ├── db/                                  # Drizzle schema y migrations
│   ├── domain/                              # Casos de uso
│   ├── analytics/
│   └── tsconfig/
├── tooling/
│   ├── eslint-config/
│   ├── prettier-config/
│   └── changeset/
├── docs/
│   ├── adr/                                 # Architecture Decision Records
│   ├── runbooks/
│   ├── playbooks/
│   └── brand.md
├── .github/workflows/
├── turbo.json
├── pnpm-workspace.yaml
└── README.md
```

### 12.1. Convenciones de nombres
- Componentes en PascalCase: `ProductGallery`.
- Hooks `useXxx`.
- Server Actions con sufijo `Action`: `addToMorralAction`.
- Tipos con sufijo `Type` evitado; usar nombre concreto.
- Archivos kebab-case salvo componentes.

### 12.2. Imports
- Path aliases por paquete: `@montaraz/ui`, `@montaraz/db`.
- `import type` cuando sea solo tipo.

### 12.3. Linting
- ESLint plano (flat config).
- Reglas extra: `eslint-plugin-tailwindcss`, `eslint-plugin-react-hooks`, `eslint-plugin-perfectionist`.

### 12.4. Commits
Convención **Conventional Commits**. Bloqueo de push con commitlint + husky.

---

## 13. MAPA DE PANTALLAS

### 13.1. Públicas
- `/` Home.
- `/tienda` Catálogo madre con secciones.
- `/tienda/caza` (Monte).
- `/tienda/pesca` (Aguas).
- `/tienda/montaña` (Sendas).
- `/tienda/cocina` (despiece y conservas).
- `/tienda/cuchilleria`.
- `/tienda/aula`.
- `/tienda/[seccion]/[familia]/[subfamilia]?` (anidado, p.ej. `/tienda/caza/municion/22lr`).
- `/producto/[slug]` PDP.
- `/configurador/rifle`.
- `/configurador/escopeta`.
- `/configurador/caña`.
- `/configurador/mosca` (atado virtual).
- `/configurador/optica`.
- `/morral` (carrito).
- `/caja` (checkout).
- `/caja/confirmacion/[id]`.
- `/revista` Magazine madre.
- `/revista/[slug]`.
- `/atlas` Mapa madre.
- `/atlas/[region]` (Cantábrico, Pirineos, Sistema Central, Extremadura, Andalucía...).
- `/atlas/coto/[id]`.
- `/atlas/rio/[id]`.
- `/expediciones`.
- `/expediciones/[slug]`.
- `/aula` Cursos.
- `/aula/[slug]`.
- `/club` Programa Maestre.
- `/club/avituallamiento` Suscripción.
- `/diario` Diario de campo público (sólo logueados).
- `/trofeos` Pared de trofeos.
- `/calendario` Lunas, mareas, vedas.
- `/manifiesto`.
- `/origen`.
- `/prensa`.
- `/contacto`.
- `/faq`.
- `/garantia`.
- `/envios`.
- `/devoluciones`.
- `/sostenibilidad`.
- `/legal`.
- `/aviso-armas`.
- `/etica`.
- `/privacidad`.
- `/cookies`.
- `/terminos`.
- `/buscar?q=...` Resultados.
- `/quien-es-quien` (curadores).
- `/sitemap.xml`, `/robots.txt`.

### 13.2. Privadas
- `/cuenta`.
- `/cuenta/pedidos`.
- `/cuenta/pedidos/[id]`.
- `/cuenta/licencias`.
- `/cuenta/direcciones`.
- `/cuenta/pagos`.
- `/cuenta/diario`.
- `/cuenta/trofeos`.
- `/cuenta/configuraciones`.
- `/cuenta/club`.

### 13.3. Auth
- `/entrar`.
- `/registro`.
- `/recuperar`.
- `/verificar/[token]`.

### 13.4. Admin
- `/admin/dashboard`.
- `/admin/productos`.
- `/admin/pedidos`.
- `/admin/clientes`.
- `/admin/inventario`.
- `/admin/cms`.
- `/admin/contabilidad`.
- `/admin/cupones`.
- `/admin/envios`.

### 13.5. B2B (futuro fase 2)
- `/b2b/registro`.
- `/b2b/catalogo`.
- `/b2b/cotizaciones`.

---

## 14. PÁGINA DE INICIO (ESCENA POR ESCENA)

Esta es la pieza maestra. La home se concibe como una **película interactiva de scroll de 9 escenas** + una zona "tienda real" debajo (transaccional, rápida). Total: ~12 secciones. La primera mitad es **storytelling**, la segunda mitad es **eficiencia**.

### 14.1. Pre-loader (cinemático, 1.6-2.4 s)
- Pantalla negro tinta `--monte-1`.
- Centro: brújula SVG de aguja oscilando con micro-jitter, animada por Framer Motion + `motion.path`.
- Texto rotativo (3 frases, 600 ms cada una):
  - "Esperando viento del norte..."
  - "Templando el acero..."
  - "Listo."
- Al "Listo" la aguja apunta al norte y la pantalla hace un **wipe** vertical de abajo hacia arriba revelando la escena 1.
- Si `prefers-reduced-motion: reduce`, se salta y se muestra logo estático con fade 200 ms.
- Easter egg: si pulsas la aguja tres veces, gira al sur y aparece un mensaje *"Sur. Allí donde duerme el lince."* (registrado para Atlas).

### 14.2. Escena 1 — "Amanecer en el puesto" (hero)
- Vídeo fondo 1080p (AV1, ≤ 1.4 MB, 8 s loop): plano fijo de un puesto al amanecer con bruma, cervatillo cruzando lejos. Pasa de azul cobalto a dorado en 8 segundos.
- Capa de ruido sutil 3 %.
- Capa de viñeteado 12 %.
- Tipografía hero centrada-izquierda:
  - Eyebrow: `EST. 2026 · IBERIA SALVAJE`.
  - H1 (Sectra Display 96 px): *"Provisión para lo indómito."*
  - Sub: *"Caza, pesca, montaña y todo lo que no se compra dos veces."*
  - CTA principal: `Empezar por el morral` (lleva a /tienda con onboarding rápido).
  - CTA secundario: `Conoce la casa` (scroll suave a escena 2).
- Indicador scroll: línea fina vertical animada `↓`.
- Sticky discreto del header (logo, buscar, morral) con backdrop blur.
- **Parallax**: capa fondo se mueve 0.4x scroll, niebla 0.7x, texto 1.0x.

### 14.3. Escena 2 — "Cuatro casas, un techo" (intro a submarcas)
- Cuatro paneles que se ensamblan en horizontal mientras haces scroll:
  - Monte (caza) · Aguas (pesca) · Sendas (montaña) · Cocina.
- Cada panel arranca como tarjeta polaroid blanco-roto que al entrar en viewport gira 8° y se asienta.
- Hover sobre cada panel: la foto se anima (cinemagraph: humo del hornillo, sedal moviéndose...).
- Cuatro CTAs entrarán uno por uno con `stagger` de 80 ms.
- Mini-narración 30 palabras por casa.

### 14.4. Escena 3 — "Lo nuevo del bosque" (Featured / Drop semanal)
- Carrusel horizontal con scroll horizontal *snap*.
- 8 productos destacados.
- Cards con tres "estados" al hover: portada → lifestyle → ficha técnica resumida.
- Animación de número de stock que cuenta hacia abajo si quedan pocos (con `useMotionValue` y `transform`).

### 14.5. Escena 4 — "Manifiesto" (scroll-telling)
- Fondo cambia de color cuando entras (de monte-1 a monte-3).
- Texto del manifiesto se revela palabra a palabra con `splitText` (GSAP) sincronizado a scroll.
- A medida que avanzas, una ilustración a plumilla (SVG con `strokeDasharray`) se va dibujando: una silueta de venado.
- Al final, el venado parpadea y desaparece dejando huellas.
- Reading time real: 25-35 s.

### 14.6. Escena 5 — "Atlas Vivo" (mapa interactivo embebido)
- Mapa Mapbox custom con 14 marcadores destacados (cotos, ríos, sierras).
- Al pasar el ratón sobre un marcador, se abre un mini-card con foto, dato breve y enlace.
- Scroll vincula: al avanzar, el mapa rota lentamente (3°) y se acerca.
- CTA `Abrir Atlas completo` → `/atlas`.

### 14.7. Escena 6 — "El Curador del Mes"
- Pieza editorial tipo revista.
- Retrato a una columna (foto B&N alta), texto a la otra.
- Cita destacada en serif.
- Tres productos elegidos por el curador (cards horizontales).
- Botón `Conoce más curadores`.

### 14.8. Escena 7 — "Configurador (preview)"
- Maqueta 3D embebida (R3F + drei) de un rifle Sako con piezas que se "ensamblan" al avanzar scroll.
- Etiquetas surgen señalando cada parte (cañón, culata, cargador, montura, óptica).
- CTA `Abrir configurador` → `/configurador/rifle`.
- Performance: modelo con LOD agresivo, sin postprocess pesado, frustum cull.

### 14.9. Escena 8 — "Calendario lunar y mareas"
- Una rueda lunar animada (canvas) muestra el ciclo actual.
- Datos en vivo de mareas para puerto seleccionable (default según geoip).
- Mini-recomendación: *"Esta noche, luna llena al 96 %. Buena para pesca de salida."*
- CTA `Abrir calendario`.

### 14.10. Escena 9 — "Voces de la casa" (testimonios + UGC)
- Mosaico de capturas (con consentimiento) de socios Montaraz.
- Cada foto al hover muestra autor, lugar, fecha y producto.
- Botón `Súbete al diario`.

### 14.11. Escena 10 — "Suscríbete al Avituallamiento"
- Caja mensual.
- Render 3D de una caja de madera ligera con grabado MONTARAZ.
- Tres tiers (Montés, Maestre, Inédito).
- CTA `Apúntate desde 39 €/mes`.

### 14.12. Escena 11 — "Cuaderno de Bitácora" (Newsletter)
- Form único, sobrio, papel pergamino.
- "Una carta mensual. Cero spam. Hilos de campo, lunas, recetas, ofertas serias."
- CTA `Apúntame`.

### 14.13. Escena 12 — Footer "Ruta nocturna"
- Footer enorme con tipografía a 240 px de la palabra MONTARAZ.
- Links agrupados: Tienda, Casa, Aula, Atlas, Club, Soporte, Legal.
- Pequeño rótulo de "Forjado a mano en Madrid y Asturias".
- Bandera doble: España, Portugal.
- Línea final: *"Hecho con tinta, café y respeto."*

### 14.14. Microdetalles globales del home
- **Cursor** custom: punto pequeño + halo que crece sobre interactivos.
- **Sticky header** con backdrop-blur(8px) que aparece pasados 96 px de scroll.
- **Barra de progreso** lateral muy fina (1 px) al estilo *Apple newsroom*.
- **Eject scroll**: dos teclas (`g` luego `t`) hacen scroll directo a tienda.
- **Modo cinético** al hover sobre títulos: ligero "shift" perspective (3D translate Z).
- **Música ambiente** opcional (off por defecto): icono campana sonora abre una pista de campo (crepitar de hojas, río) en bajo volumen. Localstorage para recordar preferencia.
- **Atmósfera**: capa de niebla SVG que se mueve con cursor (mousemove + parallax suave).

### 14.15. Resumen de animaciones en home
- **30+ animaciones únicas** distribuidas entre escenas.
- ScrollTriggers anidados con `pinning` en escenas 4, 5, 7.
- Page transition de entrada: cortina vertical desde el centro.

### 14.16. Performance targets en home
- LCP ≤ 2.0 s en 4G.
- TTI ≤ 3.2 s.
- CLS ≤ 0.02.
- INP ≤ 150 ms.
- Bundle JS inicial ≤ 180 KB gz.
- Modelo 3D del preview ≤ 600 KB con Draco+meshopt.
- Vídeo hero ≤ 1.4 MB.

### 14.17. Variantes A/B en home
- Hero con vídeo vs. hero con secuencia de fotografía cinemagraph.
- CTA principal "Empezar por el morral" vs. "Entrar a la casa".
- Orden escena 6 vs. 8.

### 14.18. Versión mobile de home
- Reorganiza escena 2 a stack vertical.
- Escena 5 sustituye Mapbox por imagen estática + CTA.
- Escena 7 sustituye 3D por carrusel exploso.
- Cero parallax pesado (sólo translate suave).

### 14.19. Variante "Tarde de Campo" en home
- Toda la home se reviste de rojo y negro.
- Vídeo hero baja su contraste.
- Tipografía se aumenta 4 %.

### 14.20. Easter eggs específicos del home
- Konami code: pegasus dibujado a tinta cae por la pantalla 1 vez.
- Click sostenido sobre logo 2.5 s: aparece "modo retro" con tipografía amber y fondo CRT.
- Doble clic sobre la luna en escena 8: te da las mareas del puerto donde geolocalizamos al usuario.
- En el footer, mantén pulsada la palabra MONTARAZ 4 s: aparece un cuaderno editable que guarda notas locales.

---

## 15. CATÁLOGO INTERACTIVO

### 15.1. Filosofía
El catálogo no es una rejilla muerta de productos: es una *sala de armas + cabaña de pesca + librería editorial*. Debe ser exploratorio, no transaccional puro.

### 15.2. Cinco vistas conmutables
1. **Rejilla editorial** (default) — 3 columnas desktop, 2 tablet, 1 mobile. Cards de 4:5.
2. **Lista técnica** — para gente que sabe lo que quiere, con calibre/peso/ratio.
3. **Estante** — vista lateral tipo expositor 3D (R3F ligero).
4. **Mapa** — productos vinculados a su origen geográfico (cuchillería Pallarès → Solsona, etc.).
5. **Mosaico cinético** — cards con tamaños orgánicos (algoritmo masonry), variedad visual.

### 15.3. Cabecera de sección
- Imagen panorámica con parallax suave.
- Eyebrow + título serif grande.
- Microensayo curado.
- "Comisariado por: [nombre, foto]".
- Atajos a subfamilias.

### 15.4. Filtros (lateral colapsable, mobile bottom-sheet)
- Categoría (jerárquica, breadcrumb).
- Marca (logo en grayscale, hover full).
- Calibre / Talla (si aplica).
- Rango de precio (doble slider).
- Color (chips circulares).
- Estado (nuevo, restock, serie limitada, outlet, vintage).
- Curador (filtrar por persona).
- Etiquetas semánticas ("para berrea", "trucha pequeña", "media veda", "vivac extremo").
- Compatible con (selector inverso: "elige tu rifle y filtra accesorios compatibles").

### 15.5. Microinteracciones de filtros
- Checkbox de filtro pulsa con un *check* dibujado a mano (stroke path).
- Si activas más de 3 filtros: aparece chip *"Estás siendo exigente. Bien."* (easter egg).
- Filtros con bajo número de resultados se atenuan con counter en gris.
- Botón "Limpiar" con animación de "lluvia que se lleva" los chips.

### 15.6. Ordenación
- Más reciente.
- Precio asc/desc.
- Más vendido.
- Mejor valorado por curadores.
- Recomendado para mí (si logueado, basado en historial).

### 15.7. Cards de producto
**Estados**:
- Reposo: foto principal + nombre + precio.
- Hover: foto B-roll (segunda foto) + chip "Quick view".
- Sostener (long press): rotaciones 360 (si hay set 360).
- Drag a derecha: añadir a cuaderno.
- Drag a izquierda: comparar.

**Etiquetas posibles** (esquina superior):
- "Edición limitada".
- "Curador: Inés".
- "Hand-tested" (sello con tinta).
- "Sólo {N} en cuadra".
- "Re-stock en {fecha}".
- "Hecho en {país}".

### 15.8. Quick view
- Modal lateral (slide-in derecha 480 px).
- Galería compacta.
- Selector de variantes (color, talla, calibre).
- Disponibilidad y plazo.
- CTA "Añadir al morral" + "Ver ficha completa".
- Animación: parallax sutil entre foto y datos al scroll dentro del modal.

### 15.9. Comparador
- Hasta 4 productos lado a lado.
- Tabla técnica auto-extraída.
- Highlight de diferencias.
- Botón "Resaltar mejor en {peso, precio, calibre}".
- Exportar a PDF "Comparativa Montaraz" con sello.

### 15.10. Wishlist (Cuaderno)
- Renombrado a "Cuaderno".
- Permite múltiples cuadernos: "Berrea 2026", "Pesca de mosca Pirineos".
- Cada cuaderno tiene tapa elegida por el usuario (4 texturas: cuero negro, cuero marrón, lona caqui, papel kraft).
- Compartir cuaderno con link único.

### 15.11. Recently viewed
- Fila inferior persistente "Has mirado: …".
- Máximo 8.
- Localstorage + sync al login.

### 15.12. Empty states
- Sin filtros: "Aún no has buscado nada. Pasa por la cabaña.".
- Sin resultados: ilustración a tinta de un perro olfateando suelo + texto "Aquí no hay rastro. Cambia algún filtro.".
- Sin stock: "Se ha agotado, pero podemos avisarte cuando vuelva."

### 15.13. Performance
- **Virtualización** con TanStack Virtual si > 100 items.
- **Infinite scroll** con `IntersectionObserver` + sentinel.
- **Prefetch** del siguiente bloque al 70 % de scroll.
- **Imágenes**: AVIF + responsive, LQIP blur.

### 15.14. Accesibilidad
- Filtros con `aria-controls` y `aria-pressed`.
- Cards con `role="article"` y headings.
- Lectura por screen reader del estado actual de filtros.

### 15.15. URLs limpias
`/tienda/caza/municion/calibre-308win?marca=hornady&grano=150-180&orden=precio-asc&pagina=2`

### 15.16. SEO de catálogo
- H1 dinámico según familia.
- Meta title con plantilla "{Familia} {Submarca} – Montaraz {Año}".
- Meta description con curador + USPs.
- `BreadcrumbList` schema.
- `ItemList` schema.
- Hreflang.

### 15.17. Páginas pilar / atlas de categorías
Cada familia tiene una página pilar con:
- Microensayo de 800 palabras.
- Diagrama interactivo (zoom a partes).
- Galería de fotos lifestyle.
- Glosario embedded.
- FAQ semántico.
- 6-8 productos seleccionados.

### 15.18. Glosario embebido
En PDP y catálogo, los términos técnicos están marcados con `<dfn>` y al hover/click muestran tooltip con definición. Tooltip estilo cuaderno con tinta.

### 15.19. Modo "explorador"
Botón flotante "🗺 Explorador" abre un side-panel con tres ejes deslizables:
- "Distancia de tiro / casting" (1 m → 1000 m).
- "Veda / temporada" (semestre).
- "Presupuesto" (50 € → 5000 €).
Mover ejes filtra resultados en tiempo real con motion (Framer).

### 15.20. Modo "Curaduría"
Cinco productos elegidos a mano cada semana por un curador. Layout editorial diferente, tipografía Sectra dominante, fotos a sangre.

### 15.21. Modo "Outlet" (no agresivo)
Sección discreta llamada "Saldos del Montaraz" con buena tipografía. Sin contadores de cuenta atrás vulgares. Solo "Precio honesto, mientras dure".

### 15.22. Modo "Vintage" (segunda mano premium)
Productos en consigna (cuchillería antigua, escopetas restauradas, prismáticos clásicos). Fichas con historia personal del vendedor.

---

## 16. FICHA DE PRODUCTO (PDP)

### 16.1. Estructura general (vertical)
1. Hero galería + datos clave.
2. Resumen del curador (firma).
3. Ficha técnica.
4. Compatibilidades.
5. Vídeo de uso (si aplica).
6. Visor 3D / AR.
7. Configurador (si aplica).
8. Opiniones reales (verificadas).
9. Quien lo eligió.
10. Productos relacionados.
11. Magazine relacionada.
12. FAQ específica.
13. Garantía y devolución.
14. Envío y plazos.
15. Avisos legales (si arma).

### 16.2. Hero
- Galería principal 6 fotos + 1 vídeo loop + 1 visor 3D opcional.
- Tarjeta derecha *sticky* con nombre, eyebrow, precio, selector, CTA.
- Si móvil, sticky inferior con CTA "Añadir al morral".

### 16.3. Selector de variantes
- Color (chips circulares texturizados).
- Talla (segmented control).
- Calibre (tarjetas radio con icono y datos breves).
- Grano (slider snap).
- Acabado (toggles).
- Personalización (grabado, monograma).

### 16.4. Stock
- Tipos de stock: "En cuadra", "Reserva 48 h", "Avisarme", "Bajo pedido (15 días)".
- Visual: pequeño rebaño de iconos animados (1 silueta por unidad en stock, hasta 8 visibles; resto "···"). En reposo, las siluetas se mueven con ruido suave.

### 16.5. Precio
- Tabular numerals.
- Si descuento, precio anterior tachado con tinta, no en rojo agresivo.
- "Precio honesto" badge si está en serie limitada.
- IVA explícito (configurable).
- "También en {N} cuotas con {Klarna/Sequra}" en gris.

### 16.6. CTAs
- Primario: "Añadir al morral".
- Secundario: "Apartar 24 h" (reserva sin pago).
- Terciario: "Configurar y guardar".
- Wishlist: icono cuaderno.
- Compartir: copy link, WhatsApp, email.

### 16.7. Ficha técnica
- Tabla en mono.
- 12-30 filas según tipo.
- Iconos a la izquierda.
- Hover sobre cada fila: tooltip con definición.

### 16.8. Compatibilidades
- Si rifle: "Compatible con: óptica X, monturas Y, munición Z".
- Si caña: "Cola recomendada: WF 5F".
- Botón "Añadir set compatible" añade todo al morral en bloque.

### 16.9. "Por qué lo elegimos"
- Texto firmado por un curador con foto y nombre.
- 100-180 palabras.
- Tono honesto: incluye "lo que NO nos gusta".

### 16.10. Vídeo
- Vídeo de uso real (no promo brand).
- Player Mux con thumbnails al hover.
- Subtítulos ES/EN.
- Capítulos.
- "Hecho por: [nombre]".

### 16.11. Visor 3D
- Modelo glTF con materiales PBR.
- Drag para rotar (orbit limitado).
- Zoom con pinch.
- Reset.
- Cambiar acabado en vivo.
- HUD con etiquetas a partes (toggle).
- Botón "Verlo en mi salón" (AR si soporta WebXR).

### 16.12. AR
- iOS: model-viewer + USDZ.
- Android: glTF + Scene Viewer.
- WebXR si está disponible.

### 16.13. Opiniones
- Solo verificadas (con compra).
- Rating en 5 estrellas dibujadas a mano.
- Histograma a la derecha.
- Filtrar por talla/calibre/uso.
- Permitir fotos del usuario (UGC).
- Distintivo "Curador respondió" si hubo respuesta de equipo.

### 16.14. Productos relacionados
- Tres bloques:
  - "Va con esto" (compatible).
  - "Otros eligen también".
  - "Antes consideraste".
- Cards reducidas.

### 16.15. Magazine relacionada
- 3 artículos enlazados manualmente desde Sanity.

### 16.16. FAQ
- Schema FAQPage.
- Accordion accesible.
- Mínimo 4 preguntas reales.

### 16.17. Avisos para armas
- Banner "Producto sujeto a normativa".
- Requiere licencia tipo X.
- Subida de licencia en checkout (criptografía at rest).
- Frase legal con enlace a `/aviso-armas`.

### 16.18. Cards anidadas para munición
- Cada caja de munición muestra: marca, calibre, grano, bala (FMJ, SP, BTHP, HP, V-Max…), velocidad inicial, energía, uso recomendado, distancia óptima.
- Comparador integrado con tabla balística (CdC, drop a 100/200/300 m, viento 10 km/h).

### 16.19. Animaciones de PDP
- Cabecera con parallax suave.
- Galería con `motion.div` + `useScroll` que cambia foto principal al scroll fino dentro del bloque sticky.
- Selectores con `layoutId` para transiciones fluidas.
- "Añadir al morral" con animación de foto del producto saltando hacia el icono del morral del header (mini parábola Bezier).
- Toast confirmación con icono check stroke-dasharray.

### 16.20. SEO de PDP
- Product schema completo (price, availability, brand, gtin, mpn, sku).
- Review schema.
- Open Graph dinámico con foto principal.
- Twitter card.
- Sitemap actualizado al publicar.

### 16.21. Performance de PDP
- LCP ≤ 2.2 s.
- Imagen principal pre-cargada.
- Visor 3D `dynamic import` solo al expandir.

### 16.22. Mobile
- Galería full-bleed.
- Selector y datos en tabs.
- CTA fijo abajo.
- Sticky con miniatura del producto al hacer scroll.

### 16.23. PDPs especiales
- **Cuchillo personalizado**: editor en vivo con grabado, tipografía, mango.
- **Rifle de caza**: configurador integrado.
- **Curso**: agenda, profesor, ubicación, requisitos, qué llevar, mapa.
- **Expedición**: itinerario, alojamiento, perfiles de guía, precio por persona, fechas.

### 16.24. PDP de "Caja Avituallamiento"
- Render 3D de la caja con contenidos abriéndose al scroll.
- Lista de qué llega cada mes (último mes en detalle).

### 16.25. PDP de "Lote artesano"
- Productos hechos a mano: certificado numerado, vídeo del taller, firma del artesano.

---

## 17. CONFIGURADORES (RIFLE, ESCOPETA, CAÑA, MOSCA, ÓPTICA)

### 17.1. Filosofía
Un configurador no es un formulario disfrazado: es una *forge*. El usuario siente que está fabricando, no rellenando.

### 17.2. Configurador de Rifle
- Pasos: Acción → Cañón → Culata → Cargador → Disparador → Acabado → Óptica → Monturas → Correa → Funda → Caja.
- 3D en tiempo real con piezas que se intercambian con animación de magnetismo (snap fit).
- Métricas en vivo: peso total, longitud total, balance (porcentaje), precio.
- Compatibilidades automáticas: si cambias cañón, sólo te muestra culatas que encajan.
- Guardar configuración (link único, exportable a PDF).
- "Pedir presupuesto al armero" si la configuración requiere taller.

### 17.3. Configurador de Escopeta
- Pasos: Tipo (paralela / superpuesta) → Calibre → Cañón (longitud) → Chokes → Culata → Acabado → Estuche.

### 17.4. Configurador de Caña de mosca
- Pasos: Modalidad (seca, ninfa, streamer) → Largo → Cola (4-8) → Acción (lenta/media/rápida) → Material (grafito / fibra) → Empuñadura (cork, AAA) → Carrete → Sedal → Bajo → Caja.
- Métricas: peso, velocidad de carga, distancia teórica.

### 17.5. Configurador de Mosca (atado virtual)
- Selecciona anzuelo (talla + modelo).
- Selecciona hilo de atado (color).
- Capas: cuerpo, ribete, cuello, alas, antena, sello.
- 8-12 patrones predefinidos (Royal Wulff, Adams, BWO, Caddis, etc.).
- Render WebGL en vivo.
- "Encárgalas atadas a mano" → entra en lote del atador.

### 17.6. Configurador de Óptica
- Variables: aumentos, objetivo, retícula (12 tipos), torretas (balísticas / target / hunting), iluminación, paralaje.
- Visualizador de retícula a escala real con previews de objetivos a 100/200/300 m.

### 17.7. Patrones técnicos
- Estado global del configurador con Zustand persistido en URL (`?cfg=base64json`).
- Validación zod por paso.
- Componente `<Stepper>` con `motion.div` y `layoutId` para indicador.
- Vista previa 3D persistente lateral (sticky en desktop, abajo en mobile).

### 17.8. Output
- Resumen en card "Tu pieza" con foto 3D, precio, listado de partes.
- Botones "Pedir" y "Guardar".
- Compartir como link único (server route que genera OG image dinámica con la pieza).

### 17.9. Animaciones
- Cuando seleccionas una pieza, la anterior cae con física a un cajón inferior; la nueva entra desde arriba.
- Sonido opcional: clic metálico apagado (off por defecto).
- Halo dorado pulsante 0.4 s al ensamblarse correctamente.

### 17.10. Sugerencias contextuales
Si llevas 3 minutos en un paso sin moverte, aparece un *hint* discreto con la sugerencia del curador.

### 17.11. Performance
- Modelos por instancing.
- LOD 3 niveles.
- Materiales compartidos.
- `useFrame` con throttling.
- Fallback 2D si el dispositivo no soporta WebGL2.

---

## 18. VISOR 3D Y REALIDAD AUMENTADA

### 18.1. Tecnología
- React Three Fiber + drei.
- Postprocessing ligero: SSAO suave, bloom mínimo, gamma correction.
- Materiales con `MeshPhysicalMaterial`.
- `Environment` HDR de campo (atardecer en pradera, taller, agua).

### 18.2. UX
- Drag orbita.
- Doble click reset.
- Scroll dentro del visor: zoom (no scroll de página).
- Boton "Apagar luces" → modo dramático con un solo foco lateral.
- Botón "Mostrar dimensiones" → cotas dimensionadas estilo plano técnico.

### 18.3. AR
- iOS Quick Look (USDZ).
- Android Scene Viewer (glTF).
- WebXR opcional.
- Marcador en suelo / pared.
- Botón "Pillarlo en mi mano" muestra un modelo a tamaño real con guía de escala.

### 18.4. Catálogo 3D
- Cobertura: 30 % de los productos top, 100 % de cuchillería premium, 100 % de configurables.
- Pipeline de pre-producción: fotogrametría con Polycam → optimización en Blender → glTF con Draco.

### 18.5. Estilo de presentación
- Estudio limpio neutro.
- Fondo con grano sutil.
- Tipografía técnica para etiquetas.

### 18.6. Modo "Despiece"
- Botón explode (Apple style): las piezas se separan en perspectiva mostrando interior, etiquetas técnicas a cada pieza.

### 18.7. Accesibilidad
- Alternativa 2D con fotos 360.
- Botón "Ver fotos en lugar del 3D" para usuarios con motion sickness.
- `prefers-reduced-motion`: visor estático.

### 18.8. Performance
- Modelos ≤ 2 MB con Draco + meshopt.
- Texturas KTX2/Basis.
- Cargas progresivas.
- Bake de iluminación cuando posible.

### 18.9. Captura
- Botón "Capturar este momento": genera PNG con la pose actual y la guarda en el cuaderno del usuario.

### 18.10. Easter egg
- Si dejas el visor 60 s sin tocar, el modelo hace un giro lento y aparece una mosca de pesca volando atravesando la cámara.

---

## 19. BUSCADOR SEMÁNTICO Y FILTROS

### 19.1. Algolia (default)
- Index "products", "magazine", "rivers", "courses", "expeditions".
- Federated bar con tabs por tipo.
- Sinónimos: `paralela = escopeta superpuesta` (depende del contexto), `lubina = robalo`.
- Custom ranking: ventas, rating, novedad, stock.
- Personalization (Algolia Recommend).

### 19.2. Vector search
- Embeddings con `text-embedding-3-large` o local Sentence-BERT.
- Para queries en lenguaje natural ("una caña ligera para truchas pequeñas en río bravo").
- Cuando la query supera 6 tokens o contiene verbo, pasamos a vector + rerank.

### 19.3. UI
- Barra de búsqueda accesible con `cmd+k`.
- Resultados con preview tipo Linear/Raycast.
- Tabs: Todo, Productos, Magazine, Atlas, Cursos, Expediciones.
- Atajos: `g h` home, `g t` tienda, `g r` revista, `g m` morral.

### 19.4. Highlight
- Pasajes resaltados.
- Fragmentos de blog cortados con elipsis.
- Iconografía por tipo de resultado.

### 19.5. Voice search
- WebSpeech API.
- Botón micro discreto.
- Mensaje "Te escucho. Habla bajo, que estamos en el puesto."

### 19.6. Búsqueda por imagen (futuro)
- Subir foto de un cebo o anzuelo y encontrar similares.

### 19.7. Sin resultados
- Ilustración + sugerencia.
- "Quizá querías decir…" (fuzzy).
- "Pregunta a Tomé" (asistente IA).

### 19.8. Histórico
- Últimas 6 búsquedas, persistidas localmente.

### 19.9. Métricas
- CTR.
- Conversion from search.
- Zero-result rate (KPI alerted si > 4 %).

---

## 20. CARRITO Y CHECKOUT

### 20.1. Renombrado a "Morral" (carrito) y "Caja" (checkout)
Refuerza identidad. Tooltips la primera vez que aparece.

### 20.2. Morral
- Side panel slide-in derecha.
- Cabecera "Tu morral".
- Lista con miniatura, nombre, variante, precio, cantidad (stepper), botón quitar.
- Subtotal, envío estimado, IVA, total.
- Sección "Va con esto" con 3 add-ons (correa, funda, recambio).
- Botón "Pasar por Caja".
- Persistencia: localstorage + server sync si logueado.

### 20.3. Animaciones del morral
- Al añadir, foto del producto vuela en parábola desde la PDP hasta el icono morral.
- Contador morral pulsa 1 vez.
- Si el icono morral está visible y le añades algo, una pluma cae con `motion`.

### 20.4. Caja (Checkout) — Single-page progressive
- Modo *one-page* con 4 acordeones plegables: Identidad, Envío, Pago, Repaso.
- Progressive disclosure: completas uno y se cierra elegantemente, el siguiente se abre.

### 20.5. Identidad
- Email + checkbox "Date de alta para guardar el pedido".
- Opcional login con passkey/Google/Apple.
- Microcopy: "Sólo te escribimos lo justo y necesario."

### 20.6. Envío
- Dirección con autocompletado (Mapbox geocoding).
- Modos: Estándar (3-5 días), Express 24h, Recogida en armería partner, Recogida en *casa Montaraz Madrid/Asturias*.
- Aviso si la dirección es zona de licencia armera (productos con licencia).
- Slot horario opcional para Express.

### 20.7. Pago
- Stripe Payment Element.
- Cards, Apple Pay, Google Pay, Bizum, Klarna, Sequra, SEPA, Transferencia.
- 3DS2 inline.
- Mensaje claro de seguridad.

### 20.8. Repaso
- Resumen visual con miniaturas.
- Línea editable de cada concepto.
- Cupón.
- Notas al pedido ("dejar al vecino", "envuelve para regalo").
- Donación opcional 1 € a "RedFly España" (asociación de conservación de truchas autóctonas).
- Checkbox términos legales.
- Botón "Confirmar pedido".

### 20.9. Confirmación
- Pantalla con animación: sello "ENVIADO" cae con motion sobre la factura.
- Resumen completo.
- Próximos pasos (cuándo te llega, código de seguimiento cuando esté).
- Sugerencia: "Quieres apuntarte a un curso relacionado?".
- Compartir compra con foto polaroid generada (opt-in).

### 20.10. Microcopy de errores
- "Tarjeta rechazada" → "Tu banco no quiso. Pruébalo otra vez o cambia de tarjeta. Si insiste, te ayudamos por chat."
- "Stock insuficiente" → "Justo se acabó una unidad. Hemos actualizado la cantidad."
- "Dirección incompleta" → "Necesitamos el piso para que no se pierda."

### 20.11. Persistencia
- Si abandonas en checkout: email de recuperación 1 h después + segundo a las 24 h + tercero a los 5 días con cupón ligero (no agresivo).

### 20.12. Idempotencia
- Header `Idempotency-Key` por intent.
- Re-intentos seguros.

### 20.13. Fraude
- Stripe Radar + reglas custom (calibre + IP riesgo).
- Manual review queue para órdenes > 1500 €.

### 20.14. Reservar (sin pagar)
- Apartar 24h: notificación push + email a la hora 18 y 1 antes del vencimiento.

### 20.15. B2B mode
- Si cliente B2B: precio neto, IVA aparte, condiciones (15-30-60 días), nota de albarán.

### 20.16. Multi-shipping
- Dividir paquete en varias direcciones (regalos).

### 20.17. Recibo
- Factura PDF generada con plantilla minimal Montaraz.
- Almacenada en cuenta + email.

### 20.18. Devoluciones
- Self-RMA en `/cuenta/pedidos/[id]`.
- Genera etiqueta prepago.
- Estado en tiempo real.

### 20.19. Tickets exitosos
- Ticket gratis al cumple del usuario con 8 % descuento.
- Sólo una vez al año.

---

## 21. CUENTA DE CLIENTE Y DIARIO

### 21.1. Estructura general
- Layout con sidebar (desktop) o tabs (mobile).
- Sección "Mi morral" siempre visible al margen.
- Indicador "Eres Maestre" con corona dorada.

### 21.2. Secciones
1. Resumen (saludo, próximas entregas, último pedido, sugerencias).
2. Pedidos.
3. Suscripciones.
4. Diario (capturas, jornadas, anotaciones).
5. Trofeos digitales.
6. Cuadernos (wishlists múltiples).
7. Direcciones.
8. Métodos de pago.
9. Licencias y permisos.
10. Datos personales.
11. Privacidad y consentimientos.
12. Club Maestre.

### 21.3. Diario
- Entradas con fecha, hora, lugar (geocoded), modalidad, especie, peso, longitud, técnica, equipo usado, viento, luna, marea, observaciones, fotos.
- Plantilla de "entrada rápida" para móvil.
- Vinculación: si en una entrada usas un producto que compraste en Montaraz, se autocompleta.
- Vista timeline + vista mapa.
- Filtro por especie / temporada.
- Exportar a PDF "Diario Montaraz {Año}".

### 21.4. Trofeos digitales
- "Pared" en estilo de cabaña.
- Cada trofeo con foto, datos y un sello de validación.
- Bloqueo de PII (no se revelan coordenadas exactas, sólo región).
- Compartir individualmente con OG image dinámica.
- Privacidad por defecto: privados.

### 21.5. Licencias
- Subida cifrada.
- Recordatorio de renovación.
- Tipo, número, expedición, validez, comunidad autónoma.
- Solo accesible para legal y compras de arma.

### 21.6. Cuadernos
- Crear, renombrar, eliminar, compartir.
- Mover producto entre cuadernos.
- Notas adjuntas a cada producto.

### 21.7. Direcciones
- Mapas embebidos.
- Etiquetas: "Casa", "Caseta del coto", "Recogida de la rehala".
- Predeterminada para envío.

### 21.8. Métodos de pago
- Stripe Setup Intents con tokens.
- Apple/Google Pay.
- IBAN para SEPA con verificación.

### 21.9. Privacidad
- Toggle de visibilidad: público/oculto.
- Borrado de cuenta (RGPD).
- Exportación de datos (RGPD).

### 21.10. UX detallada
- Cards con tipografía editorial.
- Encabezados de sección con eyebrow + serif.
- Animaciones suaves al cambiar de tab.
- Ilustraciones a tinta cuando una sección está vacía.

### 21.11. Notificaciones
- Email + push (si activado).
- Centralizadas en `/cuenta/notificaciones`.
- Tipos: pedidos, ofertas, magazine, club, sistema.

---

## 22. SISTEMA DE COMUNIDAD

### 22.1. Filosofía
La comunidad existe, pero **no es una red social**. Es un círculo. Pequeña, curada, respetuosa.

### 22.2. Componentes
- Perfil público (opcional).
- Trofeos visibles (opt-in).
- Comentarios en magazine y guías.
- Pregunta al curador (cola moderada).
- Encuentros mensuales presenciales.

### 22.3. Moderación
- Equipo humano + Perspective API.
- Reglas claras (zero tolerancia a comentarios machistas, especistas tóxicos, anti-vedas).
- Reportar/Mute/Bloquear.

### 22.4. Reputación
- Sello "Cazador/Pescador veterano" tras 12 meses con actividad real.
- Sello "Curador" para autores oficiales.
- Sello "Maestre" si suscripción premium.

### 22.5. Encuentros
- Eventos mensuales: charla, taller, jornada.
- Reservas con cupos.
- Fotos posteriores al evento (con consentimiento).

### 22.6. Etiqueta
- Pinned post de bienvenida con reglas.
- "Buenas maneras del coto" como documento de comunidad.

### 22.7. Mensajería privada
- Solo entre usuarios verificados.
- Cifrado en tránsito.
- Sin lectura por nuestra parte.

### 22.8. Cuotas de uso
- Para evitar spam, máximo 5 comentarios/día primera semana.

### 22.9. Verificación
- Para acceder a foros sensibles (armas), verificación con licencia o teléfono.

### 22.10. UI
- Color base sigue la estética: papel pergamino, no neón.
- Avatares circulares.
- Mensajes con tipografía Sectra para "anuncios" y Söhne para conversación.


---

## 23. MAGAZINE Y STORYTELLING

### 23.1. Nombre
"**Cuaderno Montaraz**" — la revista interna.

### 23.2. Filosofía
Periodismo lento. Pieza larga (1800-3500 palabras), foto cuidada, infografías sobrias, audio acompañante. *Más Granta que GQ.*

### 23.3. Tipos de pieza
- **Reportaje** (mosca seca en el Sella, montería en Cabañeros).
- **Entrevista** (un guía, una bióloga, un armero).
- **Ensayo** (la espera, la luna, la veda).
- **Recetario** (perdiz escabechada, lubina al horno).
- **Atlas mensual** (un río al detalle).
- **Vídeo-documental** (12 min).
- **Audio campo** (ASMR + relato).

### 23.4. Plantillas de página
- **Long-read editorial**: ancho 720 px, columna única, foto a sangre cada 4 párrafos.
- **Fotorreportaje**: galería protagonista, captions extensas.
- **Ficha técnica** (review): foto + tabla + verdict.
- **Carta del director**: papel pergamino, pluma.

### 23.5. Scroll
- Reading progress bar arriba (1 px).
- Drop cap inicial (Sectra 96 px).
- Imágenes con `motion` parallax suave (10-15 %).
- Pull quotes con Sectra Italic 28 px + filete arriba.
- Sidenotes en margen (estilo Tufte).
- Footnotes con popover.
- Audio inline (Mux Audio o Soundcloud).

### 23.6. Autoría
- Cada artículo firmado.
- Bio del autor al final.
- Tags por tema y región.

### 23.7. Listado
- Cards editoriales con foto, eyebrow, título, lectura en minutos.
- Filtros por tema, autor, región, fecha.
- "Lo más leído del mes".

### 23.8. SEO
- Article schema.
- Open Graph rich.
- TOC con anchors.
- Internal linking a productos relacionados.

### 23.9. Comentarios
- Solo lectores verificados.
- Tipográfico sobrio.
- Posibilidad de ver comentarios del autor.

### 23.10. Boletín
- Cada nueva pieza se ofrece para suscribir al boletín del autor (si es columnista).

### 23.11. Print on demand
- Edición anual impresa (libro de tapa dura, tirada 500 ejemplares numerados). Venta en shop.

### 23.12. Cabeceras únicas
Cada artículo tiene una cabecera diseñada (hero) con animación específica (lluvia ligera, viento, niebla...).

### 23.13. Audio narrado
- Locutado por un narrador con timbre grave (estilo José Mota o David Trueba).
- Player flotante que sigue el scroll del artículo, sin invadir.

### 23.14. Magazine adjacente
- Sección "Diccionario" (glosario de campo).
- Sección "Reseñas" (cuchillos, escopetas, cañas).
- Sección "Itinerarios" (rutas detalladas).

### 23.15. Magazine + producto
- Cada artículo enlaza máximo 4 productos.
- Cards de producto incrustadas con estética editorial (no banner publicitario).

---

## 24. EXPEDICIONES, COTOS Y EXPERIENCIAS

### 24.1. Concepto
Vendemos también **jornadas**: rececho de berrea con guía, jornadas de pesca a mosca en Pirineos, monterías reguladas, días de cetrería, salidas costeras nocturnas.

### 24.2. Ficha de expedición
- Hero panorámico.
- Cuándo (calendario con fechas disponibles).
- Dónde (mapa).
- Quién (guía con foto, biografía, idiomas).
- Qué incluye / qué no.
- Nivel exigido.
- Material requerido (vinculado a productos).
- Precio por persona.
- Plazas restantes.
- Política de cancelación.
- Galería de jornadas pasadas.
- Testimonios.
- Reserva con pasarela Stripe.

### 24.3. Calendario
- Calendario interactivo con días disponibles, semicompletos, completos.
- Hover sobre día: previa de tres mejores opciones.

### 24.4. Pre-formularios
- Antes de pagar, breve cuestionario: experiencia, alergias, contacto en emergencia, idioma del guía.

### 24.5. Confirmación
- PDF con itinerario.
- Email con instrucciones (qué llevar, dónde aparcar).
- 24 h antes: SMS con punto exacto.

### 24.6. Galería post-jornada
- Si los guías suben fotos, los participantes pueden descargarlas.

### 24.7. Cotos privados (partners)
- Listado con perfiles.
- Reservas directas si el coto lo permite.

### 24.8. Eventos especiales
- "Ojeo San Hubert" (anual).
- "Mes de la mosca seca".
- "Berrea con guía + dormida en cabaña".

### 24.9. Seguro
- Asistencia básica incluida.
- Upgrade opcional con compañía partner.

### 24.10. Sostenibilidad
- Cupos limitados.
- Vedas respetadas a rajatabla.
- 1 % de ingresos donado a conservación.

---

## 25. MAPA INTERACTIVO NACIONAL

### 25.1. Atlas Montaraz
- Mapa principal en `/atlas` con regiones de Iberia.
- Capas filtrables: cotos, ríos truchales, salmoneros, mar (estuarios y caladeros), parques, reservas, vedas en vigor.
- Cambio de estilo: topográfico, satelital, ilustrado a tinta (custom Mapbox style).

### 25.2. Estilo "ilustrado"
- Mapa Mapbox custom estilo IGN antiguo, papel envejecido, etiquetas serif, simbología custom.

### 25.3. Marcadores
- Iconos custom por tipo.
- Hover: tooltip con datos breves.
- Click: panel lateral con ficha completa (descripción, especies, mejor época, dificultad, ubicaciones donde dormir).

### 25.4. Búsqueda en mapa
- Buscador top centrado.
- Geocoding con `@mapbox/mapbox-sdk` español.
- Resultados navegables.

### 25.5. Capas avanzadas
- Mareas (vinculadas a calendario).
- Lunas.
- Vedas vigentes (data oficial scrapping).
- Estaciones meteorológicas (AEMET API).
- Hidrología en directo (CHE, CHS, CHC).

### 25.6. Vistas
- 2D plano.
- 2.5D con `terrain-rgb`.
- 3D con Mapbox 3D Buildings o threejs.

### 25.7. Performance
- Tilequeries on demand.
- Tile cache local.
- Mobile reduce capas pesadas.

### 25.8. Privacidad
- No publicamos coordenadas exactas de capturas; siempre regiones.
- Cotos privados solo a usuarios autenticados.

### 25.9. Animaciones
- Drag con momentum.
- Marcadores entran con escalado de 0 a 1 con `motion`.
- Línea decorativa que dibuja el contorno de la región al entrar en una.

### 25.10. Compartir vistas
- URL parametrizada con bounds + capas activas.
- Captura como imagen para compartir.

---

## 26. CALENDARIO LUNAR, MAREAS, METEOROLOGÍA Y VIENTO

### 26.1. Página `/calendario`
- Vista mensual con luna, mareas (puerto seleccionable), salida/puesta de sol, salida/puesta de luna, fase lunar exacta.
- Anotaciones de vedas (por especie y CC.AA.).
- Predicción de pesca/caza por algoritmo (modelo simple basado en luna+marea+presión).

### 26.2. UI
- Rejilla calendario clásica.
- Día seleccionado a la derecha en card detallada.
- Gráfica de mareas (visx) sobre el día.

### 26.3. Vinculación
- "Productos buenos para esta noche" si luna llena → ofrece señuelos noche.

### 26.4. Datos
- Mareas: Tabla de mareas oficiales (IGN, Puertos del Estado).
- Lunas: cálculo astronómico local.
- Sol: cálculo astronómico local.
- Tiempo: AEMET, OpenWeather como fallback.

### 26.5. Mobile
- Carrusel diario.
- Notificación push opcional "Mañana, marea baja a las 06:14 — buen día para sargo".

### 26.6. Widget
- Mini widget embebible en home y en cuenta.

### 26.7. Reglas de copy
- "Buena luna para mosca seca al atardecer."
- "Marea muerta. Día tranquilo, mejor para caza."

### 26.8. Heatmap
- Vista anual heatmap con días "buenos" según algoritmo.

### 26.9. Integración con diario
- Al apuntar una captura, se autocompleta luna y marea del día.

### 26.10. Animaciones
- La luna se dibuja en SVG con `clip-path` que cambia según fase.
- Olas decorativas suaves en cabecera de mareas.

---

## 27. TROFEO DIGITAL Y DIARIO DE CAPTURAS

### 27.1. Concepto
Sustituye el viejo "trofeo físico" por un registro digital elegante y respetuoso (énfasis en captura ética, "no toda captura es trofeo").

### 27.2. Tipología
- Trofeo de caza (especie, sexo, edad estimada, hábitat, modalidad, equipo, jornada).
- Trofeo de pesca (especie, longitud, peso, capturada-soltada o conservada, lugar aproximado).
- Hito (primer ciervo, primera trucha, etc.).

### 27.3. Pared (UI)
- Vista 3D con marcos colgados de una pared de cabaña.
- Hover sobre cada marco gira el trofeo 30°.
- Click abre detalle.

### 27.4. Sello de verificación
- Si un guía oficial avaló la captura, sello "Verificado".

### 27.5. Compartir
- OG image dinámica con marco y foto.
- "Comparte con respeto" — el sistema oculta coordenadas exactas.

### 27.6. Estadística personal
- Total capturas / especies / mejor.
- Comparativa anual.
- Récord personal por especie.

### 27.7. Privacidad
- Privados por defecto.
- Opcional perfil público.

### 27.8. Etica
- Mensaje recordatorio: "Trofeo no es récord; es respeto."

---

## 28. PROGRAMA MAESTRE (FIDELIZACIÓN)

### 28.1. Concepto
"Club Maestre" — programa de fidelización con tono campesino-cofradía. Tres niveles inspirados en estamentos del monte: **Aprendiz**, **Cazador/Pescador** y **Maestre**.

### 28.2. Niveles
- **Aprendiz** (0–500 € anuales): bienvenida con muestrario de mosca, acceso a magazine completo.
- **Cazador/Pescador** (500–2500 € anuales): 5 % off perpetuo, envío express gratis, acceso prioritario a series limitadas, invitación a una jornada anual.
- **Maestre** (>2500 € anuales): 10 % off, atención dedicada (concierge), grabado/pedidos personalizados sin coste, acceso al "Cuaderno secreto" (sección oculta de Atlas), entrada gratis a 1 expedición/año, regalo de cumpleaños (cuchillo personalizado).

### 28.3. Insignias
- Cada nivel tiene insignia diseñada (vidriera + heráldica sobria).
- Animación al subir de nivel: insignia se posa con peso y emite halo dorado.

### 28.4. Página `/club`
- Hero editorial.
- Cómo se gana (sin trucos).
- Tabla comparativa.
- Testimonios.
- Sello dorado.

### 28.5. Gamificación honesta
- Sin "puntos" tóxicos: lo que cuenta es gasto neto + actividad genuina (cursos asistidos, reseñas verificadas, jornadas pagadas).

### 28.6. Visibilidad
- Corona dorada en el avatar de cuenta para Maestres.
- Notas internas de equipo "este es Maestre".

### 28.7. Privilegios sociales
- Reseñas Maestres con icono dorado y prioridad de ordenación.

### 28.8. Acceso anticipado
- Drops semanales: Maestres 24 h antes.

### 28.9. Onboarding
- Card de bienvenida al primer login con explicación del club.

### 28.10. Pérdida
- Si cae bajo el umbral, se mantiene el nivel hasta final de año natural + cortesía de 3 meses.

---

## 29. SUSCRIPCIÓN "EL AVITUALLAMIENTO"

### 29.1. Concepto
Caja mensual con 3-5 productos curados (consumibles + un detalle de descubrimiento). Tres tiers, foco en *consumibles + sorpresa*.

### 29.2. Tiers
- **Montés** (39 €/mes) — consumibles básicos (perdigones, hilos, cebos artesanos, una mosca, un alimento).
- **Maestre** (89 €/mes) — Montés + 1 producto premium curado (cuchillo pequeño, frasco aceite armas, lentes microfibra, etc.) + revista impresa cada 2 meses.
- **Inédito** (179 €/mes) — Maestre + 1 producto inédito creado en colaboración con artesano (numerado).

### 29.3. Personalización
- Onboarding inicial: cuestionario sobre modalidades y preferencias.
- Cada mes muestra qué llega; permite cambiar 1 producto antes del corte (día 5).

### 29.4. Logística
- Envío entre los días 10-15.
- Notificación con foto antes del envío.

### 29.5. Pause/Skip
- Pausar máximo 3 meses.
- Skip 1 mes con clic.

### 29.6. Cancelación
- Sin penalización. Sin formularios trampa.

### 29.7. Sostenibilidad
- Caja madera ligera (reciclable o devolutiva, descuento si la devuelves).
- Sin plástico interno.

### 29.8. UX
- Página `/club/avituallamiento` con render 3D animado de la caja (R3F) abriéndose por scroll.
- Subscribers ven calendario propio: "Próxima caja: 12 de abril".

### 29.9. Comunidad
- Cada mes un "Cuaderno del Avituallamiento" en magazine: historia de los productos del mes.

### 29.10. Regalo
- Caja regalable a un tercero (gift code).

---

## 30. AULA MONTARAZ (CURSOS)

### 30.1. Filosofía
Aula real (presencial y online). Cursos cortos, intensivos, con expertos.

### 30.2. Catálogo de cursos (ejemplos)
- "Iniciación a la mosca seca" (online, 6 h, 4 sesiones).
- "Recechista principiante" (online + presencial fin de semana).
- "Cebos vivos para pesca de mar" (presencial Galicia).
- "Tratamiento ético de la pieza" (online).
- "Cuidados de tu rifle y armería" (online + DIY).
- "Atado de mosca" (online + kit por correo).
- "Cetrería para principiantes" (presencial Toledo).
- "Tiro de plato olímpico" (presencial Madrid).
- "Cocina del despiece" (presencial Cáceres).

### 30.3. Página de curso
- Hero.
- Sinopsis.
- Profesor (foto, bio, video saludo).
- Temario.
- Material incluido.
- Material que el alumno debe traer.
- Fechas.
- Lugar.
- Precio.
- Plazas.
- FAQ.
- Reserva.

### 30.4. Aula virtual
- Vídeo on demand (Mux).
- Materiales descargables (PDF, exercises).
- Comunidad propia del curso.
- Certificado al final.

### 30.5. Profesores
- Bio.
- Disponibles para tutoría.

### 30.6. Reseñas
- Verificadas.

### 30.7. Combos
- Curso + producto.
- Curso + jornada.

### 30.8. UI editorial
- Estética cuaderno + pizarra.

### 30.9. UX
- Indicador progreso curso.
- Marcado de lección vista.
- Quiz final ligero.

### 30.10. Calendario
- Calendario `/aula/calendario` con próximas convocatorias.

---

## 31. NEWSLETTER "CUADERNO DE BITÁCORA"

### 31.1. Cadencia
Mensual + envíos extra esporádicos (anuncio drop, evento).

### 31.2. Tipos
- Mensual editorial (1 hilo principal + 3 secundarios + recomendaciones).
- Drop (cuando hay una serie limitada).
- Carta del director (trimestral).

### 31.3. Formato
- Email JSX con React Email.
- Texto cuidado, no comercial.
- 1-2 imágenes.
- Sin trackers visibles (transparencia: usamos analytics agregados).

### 31.4. Suscripción
- Form en home + página `/cuaderno-de-bitacora`.
- Double opt-in.

### 31.5. Gestión
- Listmonk o Resend Broadcasts.
- Segmentación por interés (caza/pesca/montaña/cocina).

### 31.6. Métrica
- Open rate, click rate, conversion to magazine.

### 31.7. Anti-spam
- Frecuencia clara.
- Unsubscribe one-click.
- Preferencias granulares.

### 31.8. Carta de bienvenida
- "Te damos la bienvenida al monte." + un audio de campo de 60 s.

### 31.9. Carta de despedida
- Si se da de baja: "Buen viento. Nos vemos en otra cala."

### 31.10. RSS
- Feed RSS para puristas.

---

## 32. COMPONENTES UI CATALOGADOS

### 32.1. Botones
- **Primary** (cobre / mostaza).
- **Secondary** (outline tinta).
- **Tertiary** (ghost).
- **Destructive** (vermellon, raro).
- **Subtle** (link-like).
- Tamaños: xs, sm, md, lg, xl.
- Estados: default, hover, focus, active, disabled, loading.
- Variantes: con icono leading, trailing, icon-only.
- Magnetic hover (desktop): leve atracción al cursor (~12 px).
- Spring on press.
- Ripple sutil (no Material-style).
- Border 1.5 px en outline.

### 32.2. Inputs
- Text input con label flotante.
- Textarea con autoresize.
- Number input con stepper.
- Range slider con doble thumb.
- Toggle switch (Radix Switch custom).
- Checkbox con check dibujado a mano.
- Radio (chips).
- Select (combobox accesible).
- Date picker (custom).
- File upload con drag&drop.

### 32.3. Cards
- Editorial Card (imagen + título + lead).
- Product Card.
- Trophy Card.
- Course Card.
- Expedition Card.
- Glossary Card.
- River Card.

### 32.4. Navigation
- Mega menu con preview de imágenes.
- Breadcrumbs minimalistas.
- Pagination editorial (page x of y).
- Tabs (Radix).
- Stepper.
- Side nav con tinta.

### 32.5. Overlays
- Dialog (Radix).
- Drawer (left/right/bottom).
- Sheet.
- Popover.
- Tooltip (tinta).
- HoverCard (Radix).
- Toast (Sonner customizado).

### 32.6. Data display
- Table.
- DescriptionList.
- Stat block.
- Spec table (ficha técnica).

### 32.7. Feedback
- Skeletons.
- Empty states con ilustración.
- Errors.
- Success.
- Confetti — **no** lo usamos (vulgar).
- En su lugar, **lluvia de hojas** (motion + canvas) sutil al lograr algo.

### 32.8. Disclosure
- Accordion (Radix).
- Disclosure cards.

### 32.9. Avatares
- Circular.
- Iniciales serif si sin foto.
- Borde dorado para Maestres.
- Tooltip con nombre + rol.

### 32.10. Badges/Tags
- Sello tinta (estado).
- Chip pulsable.
- Etiqueta serif (categoría).

### 32.11. Iconos (ver sección 7).

### 32.12. Layouts
- Container (max 1440).
- Section padding (96 / 64 / 48).
- Grid 12.
- Stack vertical.
- Spread horizontal.

### 32.13. Componentes de marca
- ManifestoLine.
- CuratorSignature.
- TopoMap.
- MoonPhase.
- TideChart.
- BalisticTable.
- Compass.
- Wax Seal (sello de lacre).

### 32.14. Animadores
- `<FadeIn>`, `<SlideUp>`, `<Magnetic>`, `<Marquee>`, `<Reveal>`, `<TypeOn>`, `<SplitText>`, `<Sticky>`, `<Pin>`.

### 32.15. Sistema de tokens
- `tokens.css` único.
- Documentado en Storybook.
- Variantes en `cva` (class-variance-authority).

### 32.16. Variantes de tema
- Auto + manual.
- Persist en cookie + cuenta.

### 32.17. Pruebas visuales
- Storybook + Chromatic.
- Visual regression por PR.

### 32.18. A11y de componentes
- Cada componente con `aria-*`, tabindex correcto, focus visible custom (anillo punteado mostaza).

### 32.19. Stories
- Cada componente con story Default + edge cases.

### 32.20. Documentación interna
- Cada componente expone props tipadas + docs.
- Ejemplos copy-paste.


---

## 33. SISTEMA DE ANIMACIONES Y SCROLL

### 33.1. Filosofía
Las animaciones deben **respetar el silencio**: lentas, deliberadas, con curvas de easing que recuerden a un péndulo o a una mosca cayendo. **Cero rebotes plásticos** ni *bounces* infantiles. **Cero rotaciones aleatorias**. Cero efectos "wow" gratuitos.

### 33.2. Stack de animaciones
- **Framer Motion** para componentes (motion.div, AnimatePresence, useScroll, useTransform).
- **GSAP + ScrollTrigger** para timelines complejos (manifiesto, atlas, configurador).
- **Lenis** para smooth scroll global (`duration: 1.2`, `easing: t => Math.min(1, 1.001 - 2 ** (-10 * t))`).
- **`prefers-reduced-motion`** respetado: si activo, todo se reduce a fades de 200 ms.
- **`react-spring`** para físicas finas (configurador, drawer haptics).
- **Three.js + drei** para 3D scenes.
- **Canvas 2D** para partículas (hojas, niebla, polvo, lluvia).

### 33.3. Curvas de easing personalizadas (Bezier)
- `montaraz-ease-in`: `cubic-bezier(0.7, 0, 0.84, 0)` — entrada con peso (gravedad).
- `montaraz-ease-out`: `cubic-bezier(0.16, 1, 0.3, 1)` — *expo out* "Apple-like".
- `montaraz-ease-in-out`: `cubic-bezier(0.83, 0, 0.17, 1)` — entrada y salida con peso.
- `montaraz-spring-soft`: `stiffness: 80, damping: 18, mass: 1` (Framer).
- `montaraz-spring-firm`: `stiffness: 240, damping: 26, mass: 0.8`.
- `montaraz-pendulum`: `cubic-bezier(0.45, 0, 0.55, 1)` — péndulo lento.
- `montaraz-wind`: `cubic-bezier(0.25, 1, 0.5, 1)` — viento.
- `montaraz-tide`: `cubic-bezier(0.55, 0, 0.1, 1)` — marea.
- `montaraz-shutter`: `cubic-bezier(0.85, 0, 0.15, 1)` — obturador fotográfico.

### 33.4. Duraciones de referencia
- Micro: 120 ms (color, opacidad pequeña).
- Pequeña: 200 ms (hover, focus).
- Media: 360 ms (modal open).
- Larga: 560 ms (page transition).
- Cinemática: 1200-2400 ms (escenas de scroll-telling).
- Atmosférica: 8-24 s (loops de fondo).

### 33.5. ScrollTriggers globales
- **Header sticky**: aparece tras 96 px de scroll con backdrop blur 8 px + fondo semitransparente.
- **Reading progress bar**: 1 px arriba, color mostaza, anchura % de scroll.
- **Back-to-top**: aparece pasados 50 % del documento.
- **Section indicator**: línea fina lateral con segmentos por sección, animación al entrar.

### 33.6. Comportamientos por scroll
1. **Reveal** — opacidad 0→1 + translateY 24→0 al entrar en viewport (offset 20 %).
2. **Slow-Parallax** — fondos a 0.4x, contenido a 1x.
3. **Pin** — secciones fijas mientras se anima el contenido interno.
4. **Sticky-then-release** — sticky hasta cierto punto y luego release con momentum.
5. **Horizontal scroll** — carrouseles que se desplazan al scroll vertical (escena 3 del home).
6. **Cinematic camera** — en escenas 3D, la cámara hace recorridos al scroll.
7. **Scrub** — vídeos cuyo timeline se controla al scroll (no autoplay).
8. **Cross-fade entre secciones** — el fondo cambia de color con `useTransform`.
9. **Type-on** — texto que aparece carácter a carácter al scroll.
10. **Path draw** — SVGs cuyo `strokeDashoffset` se anima al scroll (siluetas, mapas).
11. **Magnetic zoom** — imagen se acerca ligeramente al entrar en viewport.
12. **Word stagger** — palabras del manifiesto aparecen una a una.
13. **Layer split** — capas del 3D se separan o se ensamblan al scroll.
14. **Marquee infinite** — letrero horizontal infinito ("EST. 2026 · IBERIA · MONTARAZ ·").
15. **Snap scroll** — secciones del home con `scroll-snap` opcional.
16. **Lock scroll** — bloqueo breve para animaciones críticas (con escape por teclado).

### 33.7. Hover effects
- **Magnetic**: el elemento sigue ligeramente al cursor (Framer `useMotionValue` + spring).
- **Tilt**: 3D tilt al pasar el ratón (max 12°).
- **Reveal background**: textura/foto B-roll aparece detrás.
- **Cursor swap**: el cursor cambia a icono contextual (lupa, mano, mosca).
- **Underline draw**: enlace con `clip-path` animado.
- **Shimmer fina**: brillo sutil 2 % opacidad sobre metales.
- **Image hover-swap**: cards de producto cambian a segunda foto.
- **Sound on hover** (opt-in): clic suave de campana o agua.
- **Caret micro-pulse** en CTAs primarios.
- **Color de underline** según contexto (mostaza, cobalto).

### 33.8. Page transitions
- **Cortina vertical**: cortina (negro tinta) cae desde arriba al salir, sube desde abajo al entrar.
- **Wipe diagonal**: usado en transiciones entre Magazine y Tienda.
- **Cross-fade rápido** (200 ms) en mobile.
- **Loader específico** entre PDP y configurador (rifle se ensambla).
- **History stack** respetado con `useRouter` y `useTransition`.
- **Maintain scroll position** en back.
- **Persist morral** durante la transición (drawer no se cierra).

### 33.9. Loaders
- **Brújula** (default).
- **Aguja flotando** (búsquedas).
- **Mosca cayendo** (configurador).
- **Ola** (Atlas).
- **Anzuelo** (PDP de pesca).
- **Pluma** (newsletter).
- Versión accesible: progreso textual % para screen readers.

### 33.10. Splash al entrar
- Solo 1ª visita (cookie).
- Logo se dibuja con `strokeDashoffset`.
- Frase corta del manifiesto.
- Skip con click o tecla.

### 33.11. Cursores especiales
- **Default**: punto 6 px + halo 32 px.
- **Sobre productos**: muta a icono de "+".
- **Sobre PDP de armas**: muta a mira (cruz fina).
- **Sobre Magazine**: muta a "leer" (pluma).
- **Sobre Atlas**: muta a brújula.
- **Sobre 3D**: muta a "rotar" (flechas).
- Desactivable.

### 33.12. Hover de texto
- Drop cap se "asienta" con peso al entrar.
- Sub-headings con `text-wrap: balance`.
- Cita destacada con fondo papel emergiendo desde 0.

### 33.13. Tipografía animada
- Variable fonts con `font-variation-settings` animadas (weight, slant, optical size).
- Logo MONTARAZ con `font-stretch` interpolado al scroll en home (de 100 % a 105 %).

### 33.14. Imagen animada
- Zoom 1.0 → 1.04 al entrar viewport.
- Crop dinámico con `clip-path` (revela desde dentro).
- "Door open": dos halves se abren.

### 33.15. Vídeo animado
- Scrubbing por scroll (sin autoplay).
- Speed adaptativo según velocidad de scroll.
- Pause cuando fuera de viewport.

### 33.16. 3D animado
- Cámara con curva tipo Bezier en 3D.
- Cambios de FOV sutiles.
- Iluminación con DayCycle (mañana, mediodía, atardecer).

### 33.17. Partículas
- Hojas que caen suaves (canvas).
- Polvo flotando con luz.
- Lluvia opcional (1 frame por gota, 200 gotas máx).
- Niebla baja con shader fragment.
- Activable según contexto/sección.

### 33.18. Shaders
- Niebla con `feTurbulence` SVG + canvas perlin noise.
- Distorsión sutil al cambiar de sección (heat haze).
- Ondas en agua para Atlas y categoría Pesca.

### 33.19. Sonido (opt-in)
- Capa ambiente sutil (-32 dBFS).
- Crepitar de leña en home.
- Río en Aguas.
- Pisada en Sendas.
- Cuchillo sobre madera al cortar (Cocina).
- Toggle persistente.

### 33.20. Haptics (mobile)
- Vibración corta al añadir al morral, al snap del configurador, al confirmar pedido.
- `navigator.vibrate(15)`.
- Solo si soporta.

### 33.21. Animaciones del header
- Estado A (top): logo grande, transparente.
- Estado B (scroll): logo pequeño, fondo blur.
- Mega-menu con stagger items.
- Iconos morral/cuenta con micro-pulse al cambio de estado.

### 33.22. Animaciones del footer
- Letra MONTARAZ enorme a 240 px se "asienta" al entrar.
- Líneas de mapa de fondo que se dibujan lentamente.

### 33.23. Animaciones de errores
- 404 con un perro perdido olfateando + texto "Aquí no hay rastro".
- 500 con barril rajado.

### 33.24. Animaciones de éxito
- Sello "ENTREGADO" cae con motion.
- Lluvia de hojas pequeña.

### 33.25. Reglas de oro
- **Una animación principal por viewport**: nunca dos animaciones grandes simultáneas.
- **Sincronización**: cada sección tiene "su" animación dominante.
- **No mover lo que no aporta**: solo animar lo que cuenta una idea.

### 33.26. Diccionario completo de animaciones por sección (resumen)
- Pre-loader: aguja, wipe.
- Hero: parallax, niebla, transición de color.
- Submarcas: stagger entrada, hover cinemagraph.
- Featured: snap horizontal, hover state-swap.
- Manifiesto: word stagger, path draw.
- Atlas preview: rotación mapa, zoom-in.
- Curador: parallax retrato.
- Configurador preview: ensamblaje 3D, etiquetas.
- Lunar: rueda 360, mareas wave.
- UGC: mosaico hover.
- Avituallamiento: caja abriéndose.
- Newsletter: pluma cayendo.
- Footer: marquesina, mapa fondo.

### 33.27. Implementación práctica
- `<MotionConfig>` global con `transition: { duration: 0.36, ease: "easeOut" }` por defecto.
- `<LazyMotion>` para reducir bundle.
- `<m.div>` en lugar de `<motion.div>` cuando dentro de `LazyMotion`.
- `useReducedMotion()` chequeo en cada hook.
- `useInView({ once: false, margin: '-20% 0px' })` para reveals.

### 33.28. ScrollTrigger patterns
```ts
gsap.timeline({
  scrollTrigger: {
    trigger: '.manifiesto',
    start: 'top center',
    end: 'bottom center',
    scrub: 1.2,
    pin: true,
    snap: { snapTo: 'labels', duration: 0.4 }
  }
})
.from('.word', { y: 30, opacity: 0, stagger: 0.06, ease: 'power2.out' })
.to('.deer', { drawSVG: '100%', duration: 1.4 }, '<')
```

### 33.29. Performance budgets de animaciones
- ≤ 16 ms por frame (60 fps).
- Layout-trashing prohibido (no animar `top/left/width/height`).
- Solo `transform` y `opacity`.
- `will-change` con cuidado (limpieza tras animar).
- DevTools: paint flashing y FPS monitor en QA.

### 33.30. Tests
- Visual regression con Chromatic.
- Snapshot 0/50/100 % del progreso.
- Reduced motion path probado en CI.

### 33.31. Accesibilidad de animaciones
- Toda animación con relevancia semántica acompañada por `aria-live` o cambio de estado anunciable.
- `prefers-reduced-motion` reduce a fades de 200 ms.
- Botón global "Reducir movimiento" en footer + cuenta.

### 33.32. Documentación
- Storybook con ejemplos por animación.
- Docs en `/docs/animations.md` (interno).

### 33.33. Idioma común
- Damos nombre a cada animación destacada: "el ensamblaje", "la cortina", "el manifiesto", "la pluma", "la marea", "el atlas vivo".

### 33.34. Coherencia visual
- Cada animación pasa una checklist:
  - ¿Comunica?
  - ¿Está sincronizada con la marca?
  - ¿Respeta reduced motion?
  - ¿Es performante en mobile?
  - ¿Tiene fallback?

### 33.35. Curvas decorativas adicionales
- `curva-camino`: subida lenta con plateaus, como un sendero serrano.
- `curva-lanzamiento`: arranque con peso, vuelo largo, llegada suave (caña de mosca).
- `curva-recoger-hilo`: pulsos en bucle decreciente.
- `curva-noche-amanecer`: 8 s de oscuro a luz cálida.

### 33.36. Mapa de animaciones (visión global)
1-100: listadas como entries con id, sección, trigger, propiedades animadas, duración, easing, fallback.

(Documento `animations.json` exportable para producción.)

### 33.37. Detalle por animación (extracto)
- **a01-aguja-brujula**: SVG path, oscilación ±12°, 1.4 s, péndulo. Fallback: estática.
- **a02-wipe-vertical**: clip-path, 600 ms, ease-in-out. Fallback: fade 200 ms.
- **a03-hero-parallax**: 3 capas a 0.4x/0.7x/1x. Fallback: estático.
- **a04-niebla-mousemove**: SVG noise + filter, suave. Fallback: off.
- **a05-stagger-submarcas**: 80 ms stagger. Fallback: simultáneo.
- **a06-cinemagraph-hover**: vídeo loop 4 s. Fallback: foto estática.
- **a07-card-state-swap**: foto1→foto2 en 200 ms. Fallback: igual.
- **a08-snap-horizontal**: scroll-snap-type: x mandatory. Fallback: scroll libre.
- **a09-manifiesto-words**: span por palabra, opacidad+y, 60 ms stagger. Fallback: aparece de golpe.
- **a10-path-draw-venado**: stroke-dashoffset, 2.4 s. Fallback: ilustración estática.
- **a11-fade-color-section**: bg-color con `useTransform`. Fallback: cambio instantáneo en breakpoints.
- **a12-mapa-rotate**: rotate 0→3° en scroll. Fallback: estático.
- **a13-marker-pop**: scale 0→1 con spring. Fallback: scale 1.
- **a14-card-curador-parallax**: foto y texto a velocidad distinta. Fallback: igual.
- **a15-rifle-explode**: piezas se separan al scroll, etiquetas surgen. Fallback: imagen 2D.
- **a16-luna-svg-clip**: clip-path sigue fase real. Fallback: imagen estática por fase.
- **a17-mareas-wave**: visx con motion path. Fallback: gráfico estático.
- **a18-mosaico-ugc**: hover muestra autor. Fallback: igual.
- **a19-caja-3d-abrir**: rotaciones internas. Fallback: foto.
- **a20-pluma-newsletter**: SVG pluma cae con motion. Fallback: estática.
- **a21-letra-footer-asentar**: y 60→0 + opacity. Fallback: estática.
- **a22-mapa-fondo-trazar**: stroke-dash. Fallback: estático.
- **a23-cursor-halo**: blob que sigue cursor con lag. Fallback: cursor SO.
- **a24-magnetic-button**: translate 12 px max. Fallback: ninguno.
- **a25-tilt-card**: perspective transform. Fallback: ninguno.
- **a26-shimmer**: gradient sweep. Fallback: estático.
- **a27-reveal-on-hover**: imagen B-roll. Fallback: ninguno.
- **a28-cursor-icon-swap**: cursor cambia a icono. Fallback: cursor SO.
- **a29-undo-curtain**: cortina invertida al volver. Fallback: fade.
- **a30-loader-brujula**: SVG aguja girando. Fallback: spinner sobrio.
- **a31-loader-aguja-flotando**: motion subtle. Fallback: spinner.
- **a32-loader-mosca-cae**: SVG mosca y línea. Fallback: spinner.
- **a33-loader-ola**: gradient wave. Fallback: barra.
- **a34-loader-anzuelo**: rotación lenta. Fallback: spinner.
- **a35-stick-progress**: barra 1 px. Fallback: cero.
- **a36-section-indicator**: línea lateral. Fallback: cero.
- **a37-back-to-top**: aparición pasados 50%. Fallback: link estático.
- **a38-add-to-morral-volar**: foto vuela en parábola. Fallback: badge +1.
- **a39-morral-counter-pulse**: pulse 1×. Fallback: cero.
- **a40-pluma-cae**: pluma en motion. Fallback: cero.
- **a41-toast-stroke-check**: stroke check anim. Fallback: tick estático.
- **a42-pdp-gallery-scroll**: scroll dentro sticky cambia foto. Fallback: galería click.
- **a43-pdp-pieces-snap**: piezas snap fit. Fallback: foto.
- **a44-config-3d-explode**: explode view. Fallback: 2D.
- **a45-config-progress-spring**: spring soft. Fallback: lineal.
- **a46-mapa-marker-hover-card**: card aparece. Fallback: tooltip.
- **a47-mapa-style-cross-fade**: style cross fade. Fallback: instantáneo.
- **a48-magazine-drop-cap**: drop cap asentándose. Fallback: estática.
- **a49-magazine-pullquote-bg**: fondo papel emerge. Fallback: estático.
- **a50-magazine-audio-player-sticky**: player flotante. Fallback: bottom bar.
- **a51-calendar-month-swipe**: swipe transitions. Fallback: click.
- **a52-mareas-zoom-day**: zoom a día seleccionado. Fallback: cambio click.
- **a53-trofeo-card-rotate**: trofeo gira 30° hover. Fallback: estático.
- **a54-trofeo-pared-walk**: pared inclinada con perspective. Fallback: rejilla 2D.
- **a55-club-corona-asentar**: corona dorada cae. Fallback: estática.
- **a56-avituallamiento-caja-abrir**: caja 3D abre. Fallback: foto.
- **a57-newsletter-input-focus**: subrayado mostaza anim. Fallback: subrayado fijo.
- **a58-footer-marquesina**: scroll infinito. Fallback: estático.
- **a59-easter-konami**: pegasus tinta cae. Fallback: cero.
- **a60-easter-logo-retro**: modo CRT. Fallback: cero.

(De aquí a 200 entradas más, documentadas en `animations.json`.)

### 33.38. Patrones de timing musical
Si activas sonido ambiente, los staggers se sincronizan a 80 BPM (1 beat = 750 ms) creando coherencia rítmica orgánica con la pista.

### 33.39. Animaciones del cursor lúdico (modo "campo")
Cuando hay 30 s de inactividad, el cursor adopta forma de mosca de pesca y vuela despacio por la pantalla, dejando una línea fina; al mover, vuelve a su forma. Easter egg silencioso.

### 33.40. Política de motion-sickness
- Test interno con usuarios sensibles.
- Sin parallax fuerte por defecto en mobile.
- Toggle global "tranquilo" + recuerdo en cuenta.

---

## 34. MICROINTERACCIONES

### 34.1. Lista de microinteracciones canónicas (1-80)
1. Click en CTA primario: spring corto + fondo aclara 4 %.
2. Hover CTA secundario: underline draw 200 ms.
3. Focus visible: anillo punteado mostaza 2 px.
4. Tap badge "stock bajo": pulsa 1×.
5. Hover sobre precio: tooltip "incl. IVA".
6. Hover sobre cuchillo: aparece foto del taller en card lateral.
7. Hover sobre nombre del curador: subrayado tinta + foto pequeña.
8. Tap "ver compatibles": chip de compatibles entra desde derecha.
9. Tap "comparar": tarjeta vuela a barra inferior.
10. Tap "quitar de comparar": tarjeta cae con peso.
11. Hover en avatar: bio en hovercard.
12. Tap social share: chip "copiado" 1.4 s.
13. Hover sobre filtro multiselect: cuenta se vuelve mostaza.
14. Click en filtro: chip aparece arriba con animación de "tinta seca".
15. Reset filtros: chips se "borran" con motion (clip-path).
16. Hover en card de producto: foto B-roll fade.
17. Long press en card: previa 360.
18. Drag derecha card: añade a cuaderno con haptic.
19. Drag izquierda card: marca para comparar.
20. Hover en sello "Hand-tested": sello rota 2°.
21. Click en sello: modal con la historia del testeo.
22. Hover en stat técnica: tooltip con definición.
23. Hover en mapa de Atlas: capas se atenuan/realzan.
24. Click en marcador mapa: lateral abre con motion.
25. Drag mapa: tilt fluido.
26. Doble click en luna: detalle día.
27. Hover en mosca de magazine: vuela 80 px.
28. Click en pluma del newsletter: subrayado mostaza anim.
29. Submit newsletter: confirmación con sello tinta.
30. Tap "Pasar por Caja": morral se cierra con cortina.
31. Confirmación pedido: sello tinta cae.
32. Cambiar variante: imagen principal cross-fade 200 ms.
33. Aumentar cantidad: número cuenta de 1 a N.
34. Wishlist add: pluma + corazón estilizado.
35. Eliminar producto morral: tira papel cae al cesto.
36. Aviso sin stock: anzuelo bajo, gris.
37. Aviso restock: aviso aparece con motion.
38. Click "Avísame": email pre-rellenado.
39. Hover en autor magazine: foto y bio.
40. Click en "Leer más": rotación serif al expandir.
41. Audio play magazine: barra de progreso fina.
42. Audio pause: lyrics-card de momento se mantiene.
43. Hover en marca: logo aparece pequeño.
44. Click en marca: catálogo filtrado.
45. Hover en curva balística: punto se desliza por la curva.
46. Toggle iluminación retícula óptica: glow se activa.
47. Hover en configuración guardada: vista mini.
48. Eliminar configuración: papel se rompe.
49. Cargar configuración: piezas se ensamblan rápido.
50. Drag a la barra del configurador: imán suave.
51. Compartir configuración: chip "copiado" + pluma.
52. Toggle modo Tarde de Campo: cambio rojo 600 ms.
53. Logo click: scroll suave a top con curva pendular.
54. 5 clics en logo en 4 s: muestra créditos del equipo.
55. Pulsar tecla `?`: abre cheatsheet de atajos.
56. Pulsar `cmd+k`: abre buscador global.
57. Pulsar `g h`/`g t`/etc.: navegación.
58. Pulsar `esc`: cierra modales.
59. Pulsar `c`: toggle "Modo Curador" (vista editorial).
60. Pulsar `m`: toggle motion (reducido / pleno).
61. Pulsar `s`: toggle sonido ambiente.
62. Tap "Listas" (mobile): drawer abajo.
63. Hover "Ayuda": foto del agente actual de soporte.
64. Click "Ayuda": chat con humano (no bot vacío).
65. Hover en breadcrumb: subrayado fino.
66. Hover en logo MONTARAZ pequeño en footer: anim de "fundir letras".
67. Click en mapa de footer: scroll a Atlas.
68. Hover en bandera idioma: tooltip "ES, PT, EN".
69. Cambio idioma: cortina y nuevo locale.
70. Cambio moneda: tooltip "Convertido de € al cambio diario".
71. Hover en "1 % donado": breve overlay con asociación.
72. Click en "Política de privacidad": modal con resumen humano.
73. Hover en sello Maestre: brillo dorado leve.
74. Tap "Insignia Maestre": modal con detalles.
75. Hover en producto serie limitada: stamp "Edición numerada".
76. Click en stamp: muestra número.
77. Hover en "Antigüedad": tooltip "Pieza vintage seleccionada".
78. Hover sobre review verificada: sello "Verificada".
79. Tap en estrellas review: histograma destacado.
80. Tap en "Reportar comentario": modal sobrio.

### 34.2. Microinteracciones del checkout
81. Focus input: label se eleva con motion.
82. Validación verde: check stroke se dibuja.
83. Error: subrayado vermellon, texto explicativo.
84. Cambiar método pago: card flip suave.
85. Click "Confirmar pedido": botón se vacía, spinner aparece, en éxito → sello "ENVIADO" cae.
86. Cupón inválido: motion "shake horizontal" sutil + texto.
87. Cupón válido: chip dorado.
88. Selector envío: imagen del paquete cambia (estándar/express).
89. Address autocomplete: lista con motion stagger.
90. Hover en términos legales: subrayado tinta.

### 34.3. Microinteracciones del Atlas
91. Toggle capa: capa fade-in 600 ms.
92. Zoom in/out: easing custom.
93. Click coto: pin se hunde con peso.
94. Hover río: longitud destacada en azul mosaico.

### 34.4. Microinteracciones del configurador
95. Snap pieza: halo dorado pulse.
96. Conflict pieza (incompatibilidad): motion "rebote suave" rechazando.
97. Cambio acabado: textura PBR cross-fade.
98. Captura imagen: flash blanco 80 ms + ruido fotográfico.
99. Compartir: link copiado con sello.
100. Pedir presupuesto al armero: modal con humano.

### 34.5. Microinteracciones del 3D
101. Drag: cursor cambia a flechas.
102. Zoom límite: ligera resistencia + tooltip "ya estás muy cerca".
103. Hover etiqueta: la pieza correspondiente se ilumina.
104. Reset view: rotación rápida a pose canon.

### 34.6. Microinteracciones del diario
105. Nueva entrada: hoja se levanta y aparece form.
106. Subir foto: drop zone con motion de bordes finos.
107. Geocoding: campo se rellena con motion.
108. Guardar entrada: sello fecha.
109. Editar: edit pencil rota 8°.
110. Eliminar: papel se rompe.

### 34.7. Microinteracciones de comunidad
111. Comment submit: spinner inline.
112. Comment success: aparece con stagger.
113. Like (no usamos like vulgar, sino "ovación"): icono sombrero alzado.
114. Reportar: modal sobrio con causa.

### 34.8. Microinteracciones de cuenta
115. Subir licencia: drop zone con motion + check stroke al validar.
116. Cambiar contraseña: barra de seguridad con motion.
117. Activar 2FA: QR aparece con motion.
118. Logout: cortina inversa + frase "Buen viento".

### 34.9. Reglas globales
- Sin animaciones agresivas en formularios.
- Sin pop-ups intrusivos.
- Sin "shake" excesivo: máx. 8 px x 2 ciclos.

### 34.10. Nota
Cada microinteracción mide ≤ 8 KB JS si se ubica en cliente, evitando bloat.

---

## 35. CURSOR, RUIDO, PARTÍCULAS Y SHADERS

### 35.1. Cursor system
- Cursor primario: punto 6 px tinta + halo 32 px translucido (~10 % alpha) con lag 80 ms.
- Sub-states: text caret (tipografía-pluma), link (mano), product ("+"), 3D (rotar), drag (flecha 4 vías), map (brújula), magazine (pluma de ave), aim (mira).
- Z-index máximo, pointer-events none.
- Desactivable.
- En mobile no aplica.
- Cuando entra en zona interactiva, el halo se hincha a 56 px.
- Animación con `requestAnimationFrame` + `motion`.

### 35.2. Ruido (grano de película)
- Capa global de grano 2-3 % de opacidad.
- Animado a 12 fps para sensación natural (no estático).
- Implementación: `feTurbulence` SVG renderizado a noise canvas + repintado.
- Desactivable.

### 35.3. Partículas
- **Hojas otoño** (Monte, octubre-diciembre).
- **Polen verano** (Sendas, junio-agosto).
- **Polvo de luz** (Magazine).
- **Niebla baja** (home y categoría Pesca).
- **Burbujas** (vista submarina en categoría señuelos profundos).
- **Lluvia** (página atlas Cantábrico, según meteo en vivo).
- **Mariposas** (1 vez al año, easter egg primavera).

### 35.4. Shaders
- **Heat haze** en transición de secciones (custom GLSL fragment).
- **Water ripple** en footer de Aguas.
- **Dithering** sutil para fondos sólidos (rompe banding).
- **Vignette dinámico** en escenas oscuras.

### 35.5. Reglas de uso
- Performance budget: ≤ 4 ms por frame.
- Off por defecto si batería < 20 % (Battery Status API).
- Off si `prefers-reduced-motion: reduce`.
- Off en mobile cuando se está scrolleando rápido.

### 35.6. Customización
- Cada partícula y shader expone variables (densidad, velocidad, opacidad) ajustables por tema.

### 35.7. Implementación
- Canvas 2D para partículas ligeras.
- WebGL para shaders.
- Workers para cálculos pesados.

### 35.8. Documentación
- `/docs/shaders.md` con cada shader, su GLSL y casos de uso.

---

## 36. PAGE TRANSITIONS

### 36.1. Tipos
- **Cortina vertical** (default).
- **Cortina diagonal** (Magazine).
- **Wipe horizontal** (Atlas).
- **Fade rápido** (mobile, búsqueda).
- **3D camera ride** (entre home y configurador): cámara hace zoom hacia el rifle de la home y abre configurador.
- **Door opening** (entre tienda y PDP de cuchillo): puerta de taller se abre.

### 36.2. Implementación
- `<AnimatePresence mode="wait">` o `viewTransitionName` con Chrome view transitions API.
- Server transitions con `useTransition`.
- Mantener scroll cuando vuelves atrás.

### 36.3. Velocidad
- Default 360-560 ms.
- Mobile 220 ms.

### 36.4. Personalizable por usuario
- Cuenta tiene preferencia "transición sobria / cinemática".

### 36.5. Accesibilidad
- Reducción a fade 200 ms si reduced motion.

---

## 37. EASTER EGGS CATALOGADOS

> *"Si dudas si añadirlo, añádelo."*
> Cada easter egg está numerado y documentado en `easter-eggs.md` interno.

### 37.1. Lista canónica (1–100)
1. **Brújula al sur**: en pre-loader, tres clics en la aguja la apuntan al sur con frase "Sur. Allí donde duerme el lince".
2. **Konami code**: arriba arriba abajo abajo izq dcha izq dcha B A → pegaso a tinta cae por la pantalla.
3. **Logo retro CRT**: long press en logo 2.5 s activa modo CRT amber con scanlines.
4. **Luna llena**: doble clic en la luna del calendario muestra mareas detalladas.
5. **Footer notas**: long press en "MONTARAZ" del footer 4 s abre cuaderno local persistente.
6. **Mosca silenciosa**: si dejas 30 s sin moverte en home, cursor se vuelve mosca y vuela.
7. **Cuaderno con sigilo**: tipear `silencio` en cualquier página entra en *Modo Caza* (sin sonidos, sin animaciones grandes).
8. **El nombre del perro**: si en checkout pones nota "Para [nombre de perro de raza ibérica]", se añade un sobrecito con galleta perruna (real, físico).
9. **El brindis del armero**: tres clics seguidos en el sello "Hand-tested" muestra un brindis breve.
10. **Mapa secreto del Cuaderno del Maestre**: si eres Maestre y pones `cmd+shift+m`, aparece un Atlas adicional con cotos secretos compartidos.
11. **Sastre invisible**: triple click sobre etiqueta de talla en ficha de ropa muestra plano de patronaje.
12. **Hilo dorado**: en `/tienda/pesca/mosca`, si filtras "dorado" + "atado a mano" + "Pirineos" → aparece un patrón secreto "Royal Sella" de un atador retirado.
13. **Pluma de calígrafo**: en magazine, si subrayas con el cursor durante 4 s una frase, aparece pluma y la frase se guarda en tu cuaderno.
14. **Modo Tinta**: pulsar `i i` cambia a modo Tinta (paleta b&n editorial).
15. **Marinero del puerto**: en Atlas, click en una boya específica del Cantábrico abre relato corto "El faro al amanecer".
16. **El olor del nogal**: en PDP de cuchillería con mango de nogal, al pasar 3 s sobre el detalle del mango, fondo gana ligero tono y aparece dato curioso del árbol.
17. **El sueño del corzo**: en PDP de munición .243 Win, si seleccionas grano 95 + bala TSX, aparece "Elección clásica para corzo en monte bajo" (no es easter egg, solo asesoría) pero al hacerlo 7 veces el día del solsticio, aparece sello dorado "Recechista del solsticio".
18. **Bizcocho de monte**: el día del cumpleaños del usuario, popup tierno con receta de bizcocho del fundador.
19. **El silencio del puesto**: si activas modo nocturno y pulsas `n` 3 veces seguidas, se activa **modo silencio absoluto** (cero animaciones, todo en gris pizarra).
20. **Caja de Pandora**: hover sostenido sobre la caja del Avituallamiento 8 s la abre lentamente revelando un mensaje del fundador.
21. **El mapa borgesiano**: pulsando `cmd+alt+b` en Atlas, el mapa cambia a estilo ilustrado tipo "Borgian", inalcanzable, con una nota literaria.
22. **El cuento del galgo**: en PDP de productos canino-cazador, pulsa `g` 5 veces y aparece micro-cuento sobre el galgo Lucero.
23. **Espuma del Cantábrico**: al hover sostenido en hero de Aguas 6 s, espuma aparece desde abajo de la pantalla con sonido leve de ola.
24. **El compás de Ulises**: pulsa `cmd+u` en cualquier página: aparece compás flotante que apunta a tu siguiente curso/expedición pendiente (si tienes).
25. **La rosa de los vientos**: triple-click en footer activa rosa de vientos animada que indica viento real (API) si compartes ubicación.
26. **El murmullo del río**: en categoría Pesca, audio ambiente cambia a río del Sella si Maestre.
27. **El sello del maestre artesano**: si compras 3 cuchillos artesanos en un año, sello discreto en tu perfil "Cuchillero".
28. **Cuaderno de hojas secas**: si visitas 30 días seguidos, recibes un PDF gratis: "Cuaderno de hojas secas" — relatos curados.
29. **El nido del águila**: en Atlas, click sostenido sobre Picos de Europa 6 s, aparece nido de águila ilustrado.
30. **El pez gato gracioso**: si buscas "pez gato" en buscador, salida humorística sobria: "No vendemos eso, no atendemos siluros invasores".
31. **Reverencia al perro**: si compras producto canino, en email aparece foto del perro mascota del fundador.
32. **El llanto del cárabo**: a las 03:33 del navegador, breve audio de cárabo se reproduce 1 vez (si sonido activo).
33. **Buscador de la cabaña**: tipear `cabana` o `cabaña` en buscador abre lista de refugios del Atlas.
34. **El cuento del jabalí cojo**: aparece random en pdp de munición .30-06 con baja probabilidad.
35. **Mona del Pirineo**: si visitas Aragón en Atlas con luna llena, aparece mariposa apolo dibujada.
36. **El brindis con vermut**: el primer pedido del año, mensaje "Para inaugurar el año, un Martini Rosso".
37. **El telegrama de Hemingway**: en magazine, pulsa `h` para abrir cita aleatoria de Hemingway.
38. **El mapa de Verne**: pulsa `v v` para activar mapa imaginario.
39. **La canción del tren**: pulsa `t` 4 veces en /aula → audio de tren atravesando paisaje (1 vez).
40. **Modo "Cuaderno verde"**: pulsa `g` 3 veces para cambiar acento a musgo.
41. **Modo "Cuaderno azul"**: pulsa `b` 3 veces para cambiar acento a cobalto.
42. **Modo "Pergamino"**: pulsa `p` 3 veces para fondo claro inmediato.
43. **El mensaje de la luna nueva**: el día de luna nueva, banner sutil "Buena noche para escribir".
44. **El sello del río perdido**: si en `/atlas` arrastras la barra de tiempo hasta 1950, mapa cambia a estilo antiguo con ríos que ya no existen.
45. **Cuaderno de cocina**: en categoría Cocina, doble click en una res ilustrada → aparece receta breve.
46. **El whisky del padre**: al cumplir 1 año en Montaraz, aparece mensaje "Brinda con el tuyo".
47. **El silencio del lince**: si vistas Sierra de Andújar en Atlas, aparece línea "Lince ibérico — silencio recomendado".
48. **Cuaderno de la dama**: doble click en avatar de Inés Marqués → relato corto.
49. **Cuaderno del armero**: doble click en avatar de Alfredo de la Sota → relato corto.
50. **Cuaderno del montero**: doble click en avatar de Tomé Lanza → relato corto.
51. **El acertijo del cazador**: pulsar `?` en una PDP de munición lanza acertijo de balística.
52. **Modo "ruido del puesto"**: pulsa `r` para activar audio loop de crepitar de hojas durante 90 s.
53. **El tinte de la oliva**: en PDP de pasta de carga, pulsa `o` 3 veces, fondo se tinta verde oliva.
54. **La carta del fundador**: en aniversario del primer pedido, popup con carta firmada.
55. **El nombre del río**: si tu apellido coincide con un río español, badge "Río que es tu apellido".
56. **El cuchillo a juego**: si llevas 3 cuchillos del mismo artesano, sello "Cuchillero asentado".
57. **El bidón de gasolina**: easter culinario en Cocina, vinculado a tradición popular.
58. **El humo del cantábrico**: en `/atlas/region/cantabrico` aparece humo SVG drifting.
59. **El verso de Pessoa**: en `/atlas/region/portugal`, aparece breve verso de Pessoa.
60. **La hoguera**: en `/expediciones`, pulsa `h h` para activar hoguera animada en hero.
61. **El cazador y el sastre**: si compras chaqueta de caza Y cuchillo el mismo día, sello "El cazador y el sastre".
62. **Pájaro mensajero**: cada nueva entrada de magazine, pájaro SVG vuela 1 vez en home.
63. **La becada perdida**: el día oficial del inicio de la veda de becada, popup "Vuelve la becada".
64. **El truco del cebo vivo**: doble click en la palabra "cebo" en una ficha → micro-instructivo.
65. **El sello del Sella**: doble click en "Sella" en magazine → mapa rápido del río.
66. **El mensaje de Ana**: easter literario en `/aula`, aparece carta breve.
67. **El paseo del podenco**: en PDP de mochila perruna, aparece breve gif a tinta.
68. **El brindis de los cazadores**: pulsa `c c c c c` → animación de copas chocando.
69. **El llanto del jabalí**: al confirmar compra de carne de caza, mensaje "Gracias al monte".
70. **El homenaje al Quijote**: en `/atlas/region/castilla-la-mancha`, aparece molino dibujado.
71. **La vereda perdida**: doble click en "vereda" en cualquier texto → linea fina dibuja sendero.
72. **El sello del pescador del sur**: si compras señuelos del sur 3 veces, sello "Pescador del Estrecho".
73. **El sello del pescador del norte**: equivalente.
74. **La carta de la fundación**: una vez por usuario, aparece carta "Por qué empezamos Montaraz".
75. **El nombre del barco**: si pones nombre de barco en checkout, aparece "Lo enviamos a bordo".
76. **El mástil**: en footer, pulsa "MAR" 3 veces → mástil dibujado.
77. **El silencio de la pesca a mosca**: en categoría Mosca, audio mute siempre por defecto.
78. **El bosque del oso**: en `/atlas/region/cantabrico`, pulsa `o` → silueta de oso pardo.
79. **El gato del armero**: en `/admin` (interno), aparece gato dibujado random.
80. **El mensaje secreto del Día del Padre**: popup honesto, no comercial.
81. **El comprador honesto**: si nunca usaste cupón, sello discreto "Honesto".
82. **El maestre del año**: a fin de año, sello "Maestre del año {YYYY}" si top spender (sin gamificar).
83. **El cuento del corzo blanco**: random low probability en PDP de munición.
84. **El cuento del salmón perdido**: random low probability en PDP de mosca.
85. **El truco del nudo**: en PDP de hilo de pesca, pulsa `n` → mini-tutorial de 4 nudos.
86. **El cuento del tirador**: en PDP de óptica, pulsa `t` → relato breve.
87. **El sello del cinéfilo**: si tu nombre coincide con Hemingway/Ortega/Trueba, badge tierno.
88. **La caja perdida**: si tu pedido se pierde una sola vez, te enviamos otra + nota a mano. Sello "Caja perdida y recuperada".
89. **El sello del que devuelve**: si devuelves sin queja, sello "Devuelve y vuelve".
90. **El sello del primer cazador**: en tu primer pedido caza-relacionado, sello "Primer monte".
91. **El sello del primer río**: equivalente.
92. **El sello del que enseña**: si haces 3 reseñas útiles, sello "Maestro de palabra".
93. **El sello del que escucha**: si escuchas 5 audios de magazine, sello "Oído fino".
94. **El sello del que camina**: si vinculas Strava y caminas más de 100 km, sello "Pisadas firmes".
95. **El sello de las cuatro estaciones**: si haces 1 pedido en cada estación.
96. **El sello del invierno largo**: pedido el día 21 de diciembre.
97. **El sello del primer cebo vivo**: PDP de cebo vivo + checkbox "primera vez".
98. **El sello del primer sello**: irónico, el sello de tener el primer sello.
99. **El sello del último cartucho**: si tu pedido tiene exactamente 1 caja.
100. **El sello del eterno cuaderno**: si llevas 5 años con cuenta activa.

### 37.2. Reglas
- **No regalan productos**. Solo experiencia, microcopy, sellos digitales.
- **No bloquean UX**: deben ser opcionales y silenciosos.
- **No condescendientes**: tono sobrio, evitar tonterías.
- **Accesibles**: no dependen exclusivamente de la vista.

### 37.3. Documentación
- `/docs/easter-eggs.md` (interno).

### 37.4. Lista B (otras 100 ideas)
Anexadas al doc interno; rotación trimestral.


---

## 38. MODO "TARDE DE CAMPO" (UX NOCTURNO Y SILENCIOSO)

### 38.1. Concepto
Un tema opcional pensado para el momento en que estás en el coche, antes de salir al puesto al amanecer, con la linterna roja del frontal puesta. Preserva la **visión nocturna**.

### 38.2. Paleta
- Fondo `#100A06`.
- Texto `#FFCFA8`.
- Acento `#FF4B2E` (rojo monocromo).
- Borders `#2A1410`.

### 38.3. Tipografía
- Aumenta 4 % todos los tamaños.
- Pesos un poco más bold para legibilidad nocturna.

### 38.4. Animaciones
- Reducidas a fades 200 ms.
- Sin parallax.

### 38.5. Sonido
- Off por defecto.

### 38.6. Activación
- Manual: toggle de linterna en header.
- Automática (opt-in): horario 22:00–06:00 hora del navegador.

### 38.7. Persistencia
- Cookie.
- Sync a cuenta si logueado.

### 38.8. UX especial
- Botones grandes (mín. 56 px), pensado para uso con guantes.
- Tap targets ≥ 44 px.

### 38.9. Aviso
- Banner sobrio "Modo Tarde de Campo activo".

### 38.10. Lema
- Frase en footer: *"Si esto te lo lee tu copiloto, dale los buenos días."*

---

## 39. ACCESIBILIDAD WCAG AAA

### 39.1. Objetivo
**WCAG 2.2 AAA** en home, catálogo, PDP, checkout, cuenta. AA mínimo en resto.

### 39.2. Contraste
- Texto sobre fondo: ratio ≥ 7:1.
- Componentes: ≥ 4.5:1.
- Iconos significativos: ≥ 3:1.

### 39.3. Tipografía
- Tamaño mínimo body 16 px.
- Espaciado entre líneas ≥ 1.5×.
- Espaciado entre párrafos ≥ 2×.
- Tracking ajustable por el usuario (±10 %).

### 39.4. Navegación
- Skip-links visibles al focus.
- Landmarks correctos (`header`, `main`, `aside`, `nav`, `footer`).
- Headings jerárquicos.
- Focus visible distinto (anillo punteado mostaza, 2 px, offset 2 px).

### 39.5. Formularios
- Labels asociados.
- Errores con `aria-live="polite"`.
- Validación inline accesible.

### 39.6. Modales y popovers
- Focus trap.
- Esc cierra.
- Atributo `aria-modal="true"`.
- Foco vuelve al trigger.

### 39.7. Animaciones
- `prefers-reduced-motion` respetado.
- Ningún flash > 3/seg.

### 39.8. Imágenes
- `alt` significativos.
- Decorativas con `alt=""`.

### 39.9. Vídeo
- Subtítulos ES/EN obligatorios.
- Transcripción accesible.

### 39.10. Audio
- Transcripción obligatoria.
- Player accesible (Radix-like).

### 39.11. Tablas
- `<th>` con `scope`.
- Caption.
- Resúmenes accesibles.

### 39.12. Color como única información
Nunca. Siempre par color + icono/text.

### 39.13. Soporte de tecnologías asistivas
- NVDA + JAWS + VoiceOver + TalkBack probados.
- ARIA usado solo cuando HTML semántico no basta.

### 39.14. Keyboard navigation
- Toda funcionalidad accesible por teclado.
- Atajos documentados en `?`.

### 39.15. Forms checkout
- AAA: error sumario al inicio + indicación inline.

### 39.16. Reading order
- Orden DOM = orden visual.

### 39.17. Lenguaje
- `lang="es"` y subvariantes por locale.

### 39.18. Tests
- axe-playwright en CI.
- Lighthouse a11y ≥ 95.
- Auditorías manuales con usuarios.

### 39.19. Accesibilidad cognitiva
- Microcopy claro.
- Sin jergas innecesarias.
- Glosario clicable.

### 39.20. Accesibilidad motora
- Botones grandes en mobile (≥ 44 px).
- Drag&drop con alternativa por teclado.

### 39.21. Modo lectura
- En magazine, botón "Modo lectura" simplifica layout.

### 39.22. Modo claro/oscuro/Tarde-de-campo
- Auto + manual.

### 39.23. Cookies de accesibilidad
- Persistencia entre sesiones.
- Vinculadas a cuenta.

### 39.24. Documentación
- `/accesibilidad` pública con declaración AAA + auditorías.

### 39.25. Soporte
- Email dedicado: `accesibilidad@montaraz.com` (24 h respuesta).

---

## 40. PERFORMANCE BUDGETS

### 40.1. KPIs principales (Core Web Vitals)
- LCP ≤ 2.0 s (home, catálogo, PDP).
- INP ≤ 200 ms.
- CLS ≤ 0.02.
- FID/INP ≤ 100 ms en mobile.
- TTFB ≤ 200 ms.

### 40.2. Budgets de bundle
- Home initial JS: 180 KB gz.
- PDP initial JS: 200 KB gz.
- Configurador route: 380 KB gz (con 3D code-split).
- Atlas route: 320 KB gz (mapbox lazy).

### 40.3. Budgets de imágenes
- Home hero ≤ 1.4 MB (AVIF).
- PDP imagen principal ≤ 220 KB (AVIF).
- Magazine hero ≤ 480 KB.

### 40.4. Budgets de fuentes
- Total fonts ≤ 110 KB (subsetting + variable).

### 40.5. Budgets de 3D
- Modelo principal ≤ 600 KB (Draco+meshopt).
- Texturas KTX2 ≤ 1.2 MB total.

### 40.6. Estrategias
- **Partial Prerendering** (Next 16).
- **Streaming SSR**.
- **Edge cache** para zonas estáticas.
- **ISR** para PDPs.
- **`fetch` con `next: { revalidate, tags }`**.
- **`cache: 'force-cache'`** para datos invariables.
- **Code splitting** por ruta y por componente pesado (`next/dynamic`).
- **Lazy hydrate** para módulos no-críticos.
- **Image preload** del hero.
- **Font preload** de Sectra y Söhne crítico.

### 40.7. Server
- Edge functions para rutas ligeras.
- Node solo cuando se necesite (Stripe webhooks, ICU heavy).
- DB pooling con `pg`/`drizzle`.
- Read replicas para listados.

### 40.8. CDN
- Vercel CDN + Cloudflare en frente para zonas estáticas.
- Cache-Control fino por tipo de recurso.

### 40.9. CSS
- Tailwind v4 oxide.
- Critical CSS inline.
- `font-display: swap`.

### 40.10. JS
- Tree-shaking estricto.
- `import * as` evitado.
- Polyfills `none` (browserslist moderno).

### 40.11. Web Workers
- Filtros pesados de catálogo en worker.
- Imagen 3D preparada en worker.
- Algoritmos balísticos en worker.

### 40.12. Mobile
- Imágenes responsive con `srcset`.
- Lazy iframes.
- Vídeo `preload="metadata"`.

### 40.13. Tests de performance
- Lighthouse CI por PR.
- Speedlify daily.
- Sentry performance tracing.

### 40.14. Alertas
- Slack si LCP > 2.5 s en producción 5 min seguidos.

### 40.15. Monitoring
- Real User Monitoring (RUM) con Vercel Speed Insights.
- p75 reportado semanalmente.

### 40.16. Patrón "skeleton sin layout shift"
- Skeletons con mismas dimensiones que el contenido real.
- `aspect-ratio` en imágenes.

### 40.17. Pre-render selectivo
- ISR 60 s en home, 5 min en catálogo, 10 min en PDP, 24 h en magazine.

### 40.18. Edge config
- A/B y feature flags en Edge Config (no en client).

### 40.19. Database
- Índices en `slug`, `category_id`, `price`, `status`.
- Vistas materializadas para listados pesados.

### 40.20. Imágenes generadas
- OG dinámicas con `@vercel/og`.
- Cache largo.

---

## 41. SEO TÉCNICO Y SEMÁNTICO

### 41.1. Estructura técnica
- URLs limpias, semánticas, en `kebab-case`.
- Canonicals en cada página.
- Hreflang en cada locale.
- Sitemap dinámico (sitemap index + sitemaps por tipo).
- robots.txt con reglas claras.

### 41.2. Metadatos
- Title con plantilla `{tema} – Montaraz`.
- Meta description ≤ 160 chars, persuasiva.
- OG image dinámica.
- Twitter card.

### 41.3. Schema.org
- Organization (sede, contacto, sameAs).
- WebSite (SearchAction).
- Product (price, availability, sku, gtin, brand).
- BreadcrumbList.
- Article.
- FAQPage.
- HowTo (cursos).
- Event (expediciones).
- LocalBusiness (para Casa Montaraz Madrid/Asturias).
- Review/AggregateRating.

### 41.4. Internal linking
- Magazine ↔ Producto ↔ Atlas.
- Footer con links contextuales.

### 41.5. Content strategy
- Páginas pilar por familia (caza menor, mosca seca, óptica, etc.).
- Long-form 1800-3500 palabras.
- Refresco trimestral.

### 41.6. Keyword strategy
- Foco en intent informativo + transaccional.
- Top queries del sector ibérico.
- Long-tail técnico (".30-06 mejor bala corzo distancia 200 m").

### 41.7. Core SEO checks
- Indexabilidad.
- Mobile-friendly.
- HTTPS.
- Performance.
- A11y.

### 41.8. Dataviz para SEO
- Para queries técnicas, gráficos (balística, mareas).

### 41.9. Backlinks
- Estrategia digital PR.
- Colaboraciones con magazines, guías, asociaciones.

### 41.10. Local SEO
- Páginas locales para Casa Madrid y Casa Asturias.

### 41.11. Schemata extras
- Geo coordinates para Atlas (con privacidad).
- Course schema.

### 41.12. Rich snippets monitoring
- Search Console.
- Alertas por errores.

### 41.13. Migración SEO
- 301 desde dominios antiguos si aplica.
- Mapeo manual.

### 41.14. Anti-cloaking
- Mismo contenido para bots y humanos.
- Edge geolocation no afecta indexación.

### 41.15. Imágenes SEO
- Filename semántico.
- Alt rico (sin keyword stuffing).
- Sitemap de imágenes.

### 41.16. Vídeos SEO
- Schema VideoObject.
- Transcripción.
- Thumbnails de calidad.

### 41.17. Pagination SEO
- `rel="next"` y `rel="prev"` cuando aplique.
- Canonical correcto.

### 41.18. Multi-store SEO
- Locale subpath.
- Hreflang correcto.

### 41.19. UGC SEO
- Reviews indexables con schema.

### 41.20. Periodicidad
- Auditoría SEO trimestral.

---

## 42. INTERNACIONALIZACIÓN

### 42.1. Idiomas (fase 1)
- ES-ES (default).
- EN-UK.
- PT-PT.

### 42.2. Fase 2
- FR-FR.
- DE-DE.
- IT-IT.

### 42.3. Tecnología
- `next-intl` v3.
- ICU MessageFormat.
- Subpath routing `/es`, `/en`, `/pt`.
- Locale detection con header + cookie.

### 42.4. Glosarios por locale
- ES España: "perdigón", "rececho", "becada".
- ES LATAM: "balines", "espera con guía", "chocha perdiz".
- PT: "perdiz", "caça", "pesca à mosca".
- EN: "shot", "stalk", "woodcock".
- DE: "Schrot", "Pirsch", "Waldschnepfe".
- FR: "plomb", "approche", "bécasse".
- IT: "pallini", "appostamento", "beccaccia".

### 42.5. Unidades
- Calibres: notación común + conversión.
- Pesos: gramos / grains / oz.
- Longitudes: cm / inch.
- Temperatura: °C / °F.
- Lo elige el usuario por preferencia.

### 42.6. Monedas
- EUR (default).
- GBP, USD (locale auto).
- Conversión diaria con API (cached).

### 42.7. Envíos
- País por país, tabla de tarifas.
- DDP/DDU.

### 42.8. IVA/Tax
- Stripe Tax.
- Inclusive/exclusive según locale.

### 42.9. Fechas
- ICU.

### 42.10. RTL
- No previsto fase 1.

### 42.11. Contenido localizable
- Magazine traducido manualmente para artículos clave.
- Productos: descripción técnica traducida, descripción editorial manual por curador.

### 42.12. Atlas
- Etiquetas geográficas en idioma local cuando aplique.

### 42.13. Estado del idioma
- Sticky por cookie.

### 42.14. Soporte y atención
- ES/EN soporte humano 9-21 h CET.
- PT/FR/DE: email + 24 h respuesta.

### 42.15. Compliance
- Términos legales por país.
- Datos personales por jurisdicción (RGPD UE, UK GDPR, LGPD Brasil futuro).

### 42.16. SEO multi-locale
- Hreflang correcto.

### 42.17. UI strings
- Catálogo JSON por locale en `/messages/{lang}.json`.

### 42.18. QA
- Linguistic QA con hablantes nativos.

### 42.19. Fonts
- Subsetting por locale.

### 42.20. Cultural sensitivity
- Frases por locale revisadas.

---

## 43. ANALÍTICA Y EXPERIMENTACIÓN

### 43.1. Stack
- **PostHog** principal (events, funnels, A/B, feature flags, session replay con consentimiento).
- **Plausible** secundario (privacy-first, métricas agregadas públicas).
- **Vercel Web Analytics** para Core Web Vitals.

### 43.2. Eventos canónicos
- `page_view`.
- `search_performed`.
- `product_viewed`.
- `product_added_to_morral`.
- `product_removed_from_morral`.
- `checkout_started`.
- `checkout_step_completed`.
- `purchase_completed`.
- `subscription_started`.
- `subscription_paused`.
- `subscription_cancelled`.
- `course_enrolled`.
- `expedition_reserved`.
- `magazine_article_read`.
- `magazine_audio_listened`.
- `atlas_explored`.
- `configurator_saved`.
- `wishlist_added`.
- `account_created`.
- `licence_uploaded`.
- `trophy_logged`.
- `dna_signal_easter_egg_*` (anónimo).

### 43.3. Funnels críticos
- Home → Catálogo → PDP → Morral → Checkout → Compra.
- Magazine → Producto.
- Atlas → Expedición.
- Curso → Reserva.
- Suscripción.

### 43.4. Cohortes
- Por persona, por modalidad, por geografía, por adquisición.

### 43.5. A/B testing
- PostHog Experiments.
- Hipótesis documentada.
- Test mínimo 14 días, mínima muestra 1500 conversions.

### 43.6. Consentimiento
- Banner GDPR con tres categorías: necesarias, analíticas, marketing.
- Default off para todas no necesarias.
- Centro de preferencias accesible.

### 43.7. Session replay
- Solo con consentimiento.
- Anonimizado.
- 30 días retención.

### 43.8. Dashboards
- Operación diaria.
- Producto semanal.
- Marca trimestral.

### 43.9. Anti-fraude analytics
- Detección de bots.
- Filtros internos.

### 43.10. Reporting interno
- Email semanal con highlights.

### 43.11. Custom events de animaciones
- Tracking de uso de easter eggs (sin PII).

### 43.12. KPI dashboard público
- `/numeros` (página pública, opcional): ventas trimestrales, países servidos, donaciones a conservación.

### 43.13. Métrica de comunidad
- Reviews dejadas.
- Trofeos publicados.
- Eventos asistidos.

### 43.14. Métrica de sostenibilidad
- Kg embalaje ahorrado, kg CO2 compensado, donaciones.

---

## 44. BACKEND, API Y BASE DE DATOS

### 44.1. Stack base
- **PostgreSQL 16** (Neon o Supabase).
- **Drizzle ORM** con migraciones automatizadas.
- **Redis** (Upstash) para cache, sesiones, rate-limit.
- **Tigris/S3** para assets.
- **Sanity** para CMS editorial.

### 44.2. Esquema (resumen, no exhaustivo)
- `users` (id, email, full_name, locale, currency, roles, created_at, deleted_at).
- `addresses` (id, user_id, label, line1, line2, city, region, postal_code, country, lat, lng, is_default).
- `licences` (id, user_id, type, number_encrypted, issued_at, expires_at).
- `products` (id, slug, name, brand_id, family_id, status, base_price, currency, weight_g, dims, created_at).
- `product_variants` (id, product_id, sku, attrs jsonb, price, stock).
- `families` (id, parent_id, slug, name).
- `brands` (id, slug, name, country).
- `inventory` (variant_id, location_id, qty, reserved).
- `locations` (id, name, kind: warehouse / casa / armoury_partner).
- `orders` (id, user_id, status, total, currency, paid_at, shipped_at).
- `order_items` (id, order_id, variant_id, qty, unit_price).
- `subscriptions` (id, user_id, tier, status, started_at, paused_until).
- `subscription_boxes` (id, sub_id, month, contents jsonb, shipped_at).
- `wishlists`/`cuadernos` (id, user_id, name, cover).
- `wishlist_items` (id, wishlist_id, variant_id, note).
- `reviews` (id, product_id, user_id, rating, body, verified, created_at).
- `magazine_posts` (id en Sanity, expuesto via webhook).
- `expeditions` (id, sanity_id, schedule).
- `expedition_bookings` (id, expedition_id, user_id, qty, status).
- `courses` (id, sanity_id).
- `course_enrollments`.
- `trophies` (id, user_id, kind, species, taken_at, region, photo_url, verified_by).
- `diary_entries` (id, user_id, entry jsonb).
- `events` (audit log).
- `outbox` (id, event_type, payload, created_at, processed_at).

### 44.3. Reglas
- Soft delete con `deleted_at`.
- Encriptación at-rest de PII sensible (licencias, números de tarjeta no se guardan).
- Backups diarios + retención 35 días.
- PITR habilitado.

### 44.4. API
- Server Actions principalmente.
- TRPC para casos avanzados (admin).
- REST + GraphQL solo en B2B (fase 2).
- Webhooks expuestos (`/api/webhooks/stripe`, `/sanity`, `/inventory`).

### 44.5. Idempotencia
- POSTs con `Idempotency-Key`.
- Webhooks con verificación de firma.

### 44.6. Eventos
- Outbox pattern.
- Event types: `order.placed`, `order.shipped`, `subscription.charged`, `inventory.low`, `licence.uploaded`.

### 44.7. Stock
- Reserva temporal en Redis durante checkout (10 min).
- Liberación si abandono.

### 44.8. Pricing
- Precio base por variante.
- Reglas: descuentos por nivel Maestre, cupones, promos.
- Sin gamificación tóxica (sin "compra X y te bajamos el precio si te das prisa").

### 44.9. Reservas
- `reservation` table para Apartar 24h.
- Job scheduler para liberar.

### 44.10. Logística
- Integración con SEUR, DHL, MRW, GLS.
- Track URL.
- Webhook de actualización de estado.

### 44.11. Devoluciones
- RMA table.
- Etiqueta prepago via courier API.
- Reembolso via Stripe.

### 44.12. Contabilidad
- Export facturas (Holded/Quipu).
- Daily reconciliation.

### 44.13. Búsqueda
- Indexación on write a Algolia.
- Embeddings actualizados weekly.

### 44.14. CMS
- Sanity webhooks → revalidateTag.

### 44.15. Jobs
- Inngest para cron y workflows (recordatorios licencia, renovaciones, cumpleaños, restocks).

### 44.16. Trabajos programados
- Re-cálculo de niveles Maestre (mensual).
- Limpieza de reservas vencidas (5 min).
- Renovación de tokens Stripe Customer (auto).
- Newsletter mensual.

### 44.17. Logs
- Estructurados (JSON).
- Niveles: debug, info, warn, error.
- Envío a Axiom/Logflare.

### 44.18. Backups
- Postgres physical daily + WAL stream.
- Sanity exports semanales.
- Test de restore mensual.

### 44.19. Migrations
- Drizzle Kit.
- Reversibles cuando posible.
- Aplicadas en pre-deploy.

### 44.20. Conexiones
- Pooled (`pg-bouncer`).
- Limits por entorno.

### 44.21. Multi-warehouse
- Posibilidad de despachar desde Madrid o Asturias.
- Routing inteligente.

### 44.22. Click&Collect
- Recogida en partners (armerías afiliadas).

### 44.23. Auditoría
- Toda compra de arma/munición se loguea con timestamp/IP/licencia hash.
- Acceso restringido.

### 44.24. Stripe
- Customers, Subscriptions, PaymentIntents, Invoices.
- Webhooks: payment_intent.succeeded, payment_intent.failed, invoice.paid, charge.refunded, customer.subscription.updated.

### 44.25. Mail
- Resend.
- Templates React Email.
- Fallback Postmark.

### 44.26. SMS
- MessageBird o Twilio.
- Solo transaccional.

### 44.27. Notificaciones push
- Web Push (VAPID).
- Opt-in en cuenta.

### 44.28. Integraciones futuras
- Strava (paseos al monte).
- Garmin Connect (capturas).
- Sage / A3 (contabilidad B2B).

### 44.29. Rate limits
- 60 req/min usuarios.
- 600 req/min admin.
- Stricter en login/registro (10/min).

### 44.30. Health checks
- `/api/health` con DB, Redis, Stripe ping.
- `/api/ready`.
- Auto-rollback si health 5xx 1 min seguidos.


---

## 45. PANEL DE ADMINISTRACIÓN INTERNO

### 45.1. Acceso
- `/admin` accesible solo con rol `admin`/`editor`/`logistica`/`armero`/`soporte`.
- 2FA obligatorio.
- Auditoría de logins.

### 45.2. Secciones
1. Dashboard (ventas, pedidos hoy, stock crítico, devoluciones).
2. Productos (CRUD, importación CSV, mapping a CMS).
3. Variantes (matriz por talla/color/calibre).
4. Inventario (multi-warehouse, alertas, locks).
5. Pedidos (estados, búsqueda, etiquetas).
6. Clientes (búsqueda, soporte rápido).
7. Suscripciones (panel mensual de cajas).
8. Cupones (con reglas).
9. CMS (link a Sanity Studio).
10. Magazine (cola editorial).
11. Atlas (poblar marcadores).
12. Cursos (fechas, plazas).
13. Expediciones.
14. Logística (etiquetas, packing slips, batch picking).
15. Contabilidad (exports, conciliación).
16. Marketing (campañas, segments).
17. Comunidad (moderación).
18. Sistema (feature flags, env, health).

### 45.3. UX del admin
- Tipografía mono + sans.
- Tablas con TanStack Table (sort, filter, search, paginación).
- Inline editing.
- Bulk actions.
- Atajos de teclado abundantes.

### 45.4. Mobile admin
- Versión reducida para operaciones críticas (cambio de estado de pedido, búsqueda).

### 45.5. Búsqueda global
- `cmd+k` con jump rápido a cualquier entidad.

### 45.6. Audit log
- Cada cambio importante con autor, timestamp, diff.

### 45.7. Roles y permisos
- RBAC granular (e.g. `orders.read`, `orders.refund`, `inventory.write`).
- Política least-privilege.

### 45.8. Notificaciones admin
- Slack (#ventas, #soporte, #logística, #incidentes).

### 45.9. Picking & Packing
- Generación de albarán + etiqueta SEUR/MRW en 1 clic.
- Cola del día.
- "Asistente de picking" móvil con scanner códigos.

### 45.10. Devoluciones (admin)
- Recepción.
- Estado: pendiente, recibido, inspección, aprobado, reembolsado.

### 45.11. Soporte (admin)
- Inbox unificado (email + chat).
- SLA tracking.
- Macros con tono Montaraz.

### 45.12. Compliance
- Cola de revisión de licencias subidas.
- Aprobar/rechazar con motivo.

### 45.13. Imports/exports
- Productos (CSV).
- Clientes (CSV).
- Pedidos (CSV).
- Por seguridad, exportes firmados.

### 45.14. Reporting
- Dashboards customizables (Grafana o equivalente).
- Exports semanal.

### 45.15. CMS embebido
- Edit-in-place desde frontend con permisos editoriales.

### 45.16. Búsqueda admin
- Algolia interna.

### 45.17. Feature flags
- UI para activar/desactivar.
- Roll-out gradual.

### 45.18. Cobertura de incidentes
- Botón "Estado público" para anunciar incidencias en `status.montaraz.com`.

### 45.19. Backups
- UI con punto en el tiempo restaurable (con permisos altos).

### 45.20. Documentación
- Cada sección con tooltip + link a `/runbook`.

---

## 46. CUMPLIMIENTO LEGAL

### 46.1. Productos sujetos a regulación
- Armas largas (escopeta, rifle, carabina).
- Munición.
- Cuchillería superior a determinada longitud (regulada por CCAA).
- Ópticas con visión nocturna (regulada).
- Trampas (no comercializamos las prohibidas).
- Cebos vivos (regulación).

### 46.2. Verificación de edad y licencia
- Checkout exige subida de licencia tipo correcta antes de procesar.
- Documento cifrado at-rest (AES-256-GCM).
- Validación humana antes de despacho.

### 46.3. Restricciones por CCAA
- Mapping de productos vs. comunidades.
- Si pedido va a CCAA donde el calibre/material está restringido, se muestra aviso y se rechaza la compra.

### 46.4. Restricciones internacionales
- Exportación de armas: solo si el comprador presenta licencia + permiso de importación + cumplimiento ITAR cuando aplique.
- Pesca: pocas restricciones, salvo cebos vivos.

### 46.5. RGPD
- Política de privacidad clara, sin lenguaje legal abusivo.
- Doble opt-in en suscripciones.
- Derechos del usuario: acceso, rectificación, supresión, portabilidad, oposición, limitación.
- DPO interno (cargo declarado).

### 46.6. DAC7
- Si platform B2C escala a marketplaces partners, cumplimiento del Reglamento UE de declaración de ingresos a vendedores.

### 46.7. Cookies
- Banner GDPR completo.
- Granularidad por categoría.
- Sin scrolling-as-consent.

### 46.8. Condiciones de venta
- Específicas para armas y munición.
- Específicas para suscripciones.
- Específicas para experiencias (expediciones, cursos).

### 46.9. Términos y condiciones
- Conformes a Ley General Defensa Consumidor.
- 14 días de derecho de desistimiento general.
- Excepciones legales (productos personalizados).

### 46.10. Aviso ético
- Página `/etica` con compromiso de no comercializar especies en peligro, no fomentar caza ilegal, denunciar furtivismo, conservar vedas, etc.

### 46.11. Bienestar animal
- Cabotaje claro: vendemos a quien caza/pesca legalmente, con respeto.
- No usamos lenguaje glorificando muerte.
- Comunicamos respeto al animal y al entorno.

### 46.12. Sostenibilidad
- Política de packaging.
- Reciclaje.
- Donaciones (asociaciones de conservación).
- Compensación CO2.

### 46.13. Seguros
- Seguro responsabilidad civil expediciones (Mapfre/Allianz).
- Seguro envíos.

### 46.14. Vigilancia legislativa
- Suscripción a boletines DOUE, BOE, DOCV, etc.
- Revisiones trimestrales con asesor legal.

### 46.15. Avisos en producto
- Banner "Producto sujeto a regulación".
- Texto en checkout.
- Texto en factura.

### 46.16. Auditoría
- Anual con asesor externo.

### 46.17. Política de propiedad intelectual
- Licencias de uso de imagen.
- Acuerdos con autores/curadores.

### 46.18. UGC
- Aviso de licencia (CC-BY-NC) cuando aplique.
- Moderación.

### 46.19. Política antifraude
- Reglas Stripe Radar custom.
- Manual review queue.

### 46.20. Notificación a autoridades
- Si detectamos intento de fraude/uso indebido, reportamos según protocolo.

---

## 47. SEGURIDAD

### 47.1. Principios
- Defense in depth.
- Least privilege.
- Zero trust networking.
- Encriptación en tránsito y en reposo.
- Logs y auditoría.

### 47.2. Headers
- `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`.
- `Content-Security-Policy` con nonces.
- `X-Content-Type-Options: nosniff`.
- `X-Frame-Options: DENY`.
- `Referrer-Policy: strict-origin-when-cross-origin`.
- `Permissions-Policy` restrictiva.
- `Cross-Origin-Opener-Policy: same-origin`.
- `Cross-Origin-Embedder-Policy: require-corp` (cuando posible).

### 47.3. Auth
- Auth.js v5 con email mágico + OAuth + Passkeys.
- Sesiones server-side.
- Rotación de tokens.
- Logout en todos los dispositivos.

### 47.4. 2FA
- TOTP (Authy/1Password).
- Backup codes.

### 47.5. Protección contra ataques
- CSRF tokens automáticos en Server Actions.
- Rate limit (Upstash Ratelimit).
- Captcha en formularios sensibles.
- Brute-force mitigation (lockout progresivo).
- XSS prevention (DOMPurify cuando se renderiza HTML user-generated).
- SQL injection prevention (Drizzle parametrized).
- SSRF prevention (allowlist de URLs externas).

### 47.6. Dependency security
- Renovate automatizado.
- SCA con Snyk.
- npm audit en CI.

### 47.7. Secret management
- Vercel Encrypted Environment.
- No secretos en repo.
- Rotación trimestral.

### 47.8. Logs sensibles
- PII redacted automáticamente.
- Accesos auditados.

### 47.9. Backups seguros
- Encriptados.
- Restauración probada.

### 47.10. Pentest
- Anual externo.
- Bounty program (con reglas claras).

### 47.11. Incident response
- Runbook documentado.
- Comunicación interna y pública.
- Postmortem público (sobrio).

### 47.12. Compliance
- ISO 27001 a futuro (cuando escala lo justifique).
- PCI DSS Level 2 (Stripe maneja PAN).

### 47.13. Server hardening
- Vercel + Cloudflare delante.
- Firewall.
- DDoS protection.

### 47.14. Browser security
- SRI en CDNs externos.
- iframe sandbox cuando necesario.

### 47.15. Mobile
- Touch ID/Face ID en passkeys.

### 47.16. CSRF y CORS
- CORS allowlist.

### 47.17. Cookies
- `Secure`, `HttpOnly`, `SameSite=Lax`.

### 47.18. Subdominios
- `studio.montaraz.com` separado.
- `status.montaraz.com` separado.
- `admin.montaraz.com` separado.

### 47.19. Vault
- 1Password Business para equipo.

### 47.20. Capacitación
- Onboarding de seguridad para nuevos.
- Phishing simulation 2 veces al año.

---

## 48. TESTING

### 48.1. Pirámide
- 70 % unit.
- 20 % integration.
- 10 % E2E.

### 48.2. Stack
- Vitest unit.
- React Testing Library.
- Playwright E2E.
- Storybook visual.
- axe-playwright accesibilidad.
- Lighthouse CI.

### 48.3. Reglas
- Cada PR pasa CI con coverage mínimo 80 % en módulos críticos.
- Visual regression con baseline.

### 48.4. E2E scenarios
- Compra completa.
- Configurador completo.
- Reserva expedición.
- Apuntarse curso.
- Suscripción.
- Devolución.
- Login + passkey.
- Recuperar contraseña.
- Cambiar idioma.

### 48.5. Performance tests
- Lighthouse CI por PR.
- Web vitals en producción (RUM).

### 48.6. A11y tests
- axe en CI.
- VoiceOver/NVDA manual semestral.

### 48.7. Tests visuales
- Chromatic snapshots.
- Aprobación humana.

### 48.8. Tests de pago
- Stripe test mode.
- Cards de prueba.
- 3DS edge cases.

### 48.9. Tests de localización
- Snapshots por locale.
- Linguistic QA manual.

### 48.10. Tests de carga
- k6 para flash sales hipotéticos.
- 5000 RPS objetivo.

### 48.11. Tests de seguridad
- ZAP scan en staging.
- Dependency scan automated.

### 48.12. Mock de integraciones
- Stripe, Sanity, Algolia, Mapbox, Resend.

### 48.13. CI runners
- GitHub Actions.
- Cache pnpm + Turbo.

### 48.14. Tests de animación
- Snapshot framing.
- Reduced motion path.

### 48.15. Smoke tests
- Post-deploy.
- 5 escenarios críticos en 60 s.

### 48.16. Synthetic monitoring
- Checkly / Datadog Synthetics.

### 48.17. Test data
- Factories en `packages/db/seed`.
- Faker locale español.

### 48.18. Tests de email
- React Email preview.
- Email-test rendering en clientes principales (Litmus).

### 48.19. Tests de SEO
- Lighthouse SEO score.
- Schema validation.

### 48.20. Tests humanos
- Beta panel mensual con 8-12 socios Maestres.

---

## 49. CI/CD Y ENTORNOS

### 49.1. Entornos
- `dev` local.
- `preview` por PR.
- `staging` rama `main`.
- `production` rama `release`.

### 49.2. Pipeline
- Lint + typecheck + test + build + deploy preview.
- Visual regression aprobado.
- Lighthouse CI.

### 49.3. Promoción
- Manual de staging a producción (PR squash).

### 49.4. Rollback
- 1 clic en Vercel.

### 49.5. DB migrations
- Drizzle Kit.
- Aplicadas en pre-deploy.
- Reversibles.

### 49.6. Feature flags
- OpenFeature.
- Targeting por cohort.

### 49.7. Branch strategy
- Trunk-based.
- Short-lived feature branches.

### 49.8. PR
- Plantilla con checklist (a11y, perf, copy, screenshots).
- Reviewer obligatorio (≥ 1).
- Squash merge.

### 49.9. Releases
- Semánticos.
- Changelog auto (Changesets).

### 49.10. Hotfix
- Branch `hotfix/*` → release directa con runbook.

### 49.11. Costes
- Monitorizados (Vercel, Sanity, Algolia, etc.).
- Alertas si supera presupuesto mensual.

### 49.12. Documentación
- `/docs/runbooks` con incidentes comunes.

### 49.13. Tooling
- Turborepo + pnpm + tsx + tsc + ESLint + Prettier + lint-staged + husky + commitlint.

### 49.14. Seguridad CI
- OIDC para credenciales (sin long-lived secrets).
- Branch protection.

### 49.15. Backups
- Vercel snapshots + Postgres PITR + Sanity export.

### 49.16. Canary
- 5 % tráfico a nuevas versiones críticas.

### 49.17. Bots
- Renovate, Dependabot.

### 49.18. Code owners
- `.github/CODEOWNERS` por paquete.

### 49.19. Logs de deploys
- Slack notification.

### 49.20. Documentación arquitectura
- ADRs en `/docs/adr/`.

---

## 50. OBSERVABILIDAD

### 50.1. Stack
- Sentry (errores, performance).
- PostHog (analítica).
- Logflare/Axiom (logs).
- OpenTelemetry (traces).
- Vercel Speed Insights.

### 50.2. Alertas
- Slack #incidentes para errores P0/P1.
- PagerDuty rotación para incidentes críticos.

### 50.3. Métricas operativas
- p50/p75/p95 LCP por ruta.
- 5xx rate.
- DB query p95.
- Stripe payment success rate.

### 50.4. Métricas de negocio
- Pedidos por hora.
- AOV.
- Conversión por canal.

### 50.5. Dashboards
- Grafana con vistas operativas.

### 50.6. SLOs
- Disponibilidad 99.9 % anual.
- Errores < 0.1 % P0.
- Conversión > X.

### 50.7. Postmortem
- Blameless.
- Públicos cuando justifique.

### 50.8. RUM
- Real user monitoring por usuario en producción (con consentimiento).

### 50.9. Synthetics
- Checks cada 5 min en home, PDP, checkout, login.

### 50.10. Trazas
- Distributed tracing en server actions críticas (Stripe, Inventory).

---

## 51. ROADMAP POR FASES Y ENTREGABLES

### 51.1. Fase 0 — Discovery (semanas 1-3)
- Brand workshop.
- Buyer personas validados con entrevistas (10-15 usuarios reales).
- Auditoría de competencia.
- Tone of voice doc.
- Design system foundations (tokens, tipografía, color).
- Inventario inicial de productos (200-400 SKUs piloto).
- Arquitectura técnica.
- ADRs iniciales.

### 51.2. Fase 1 — MVP funcional (semanas 4-12)
- Home con 6 escenas.
- Catálogo con vista rejilla.
- PDP completa (sin AR, sin 3D salvo en flagship).
- Morral + Caja completo.
- Cuenta básica.
- Magazine v1 (10 artículos).
- Atlas v1 (mapa con 50 marcadores).
- Newsletter.
- Admin para gestionar productos y pedidos.
- Test en preview cada 2 semanas.

### 51.3. Fase 2 — Experiencia (semanas 13-22)
- Home completa con todas las escenas + 3D preview.
- Visor 3D en 30 productos.
- Configurador de rifle.
- Configurador de caña.
- Atlas con 200+ marcadores y mapa estilizado.
- Cuaderno avanzado (diario + trofeos).
- Programa Maestre.
- Suscripción "Avituallamiento" beta.
- AR en cuchillería premium.
- Modo Tarde de Campo.

### 51.4. Fase 3 — Comunidad y educación (semanas 23-30)
- Aula con 8 cursos.
- Expediciones (10 jornadas).
- Comunidad (perfiles, comentarios, pregunta al curador).
- Magazine completo con audios.
- Búsqueda semántica.
- Asistente Tomé (IA).

### 51.5. Fase 4 — Pulido y escalado (semanas 31-36)
- Configuradores extra (escopeta, mosca, óptica).
- AR ampliado.
- A/B testing.
- Multi-locale (EN, PT).
- B2B portal beta.
- Auditorías (a11y, perf, seguridad).

### 51.6. Fase 5 — Producción continua
- Releases mensuales.
- Magazine semanal.
- Drops bimestrales.

### 51.7. Entregables clave
- Diseño en Figma con tokens auto-sincronizados a código.
- Storybook publicado.
- Documentación viva (`/docs`).
- Manual de marca.
- Manual de servicio al cliente.
- Manual operativo (almacén).

### 51.8. Hitos
- Kickoff visible (página `coming soon` con countdown a fecha de apertura, registro newsletter).
- Pre-launch con 200 socios fundadores invitados.
- Launch público.
- Aniversario 1 año.

### 51.9. Comunicación
- Status público en `status.montaraz.com`.

### 51.10. Documentación de cierre
- Handoff a equipo interno.

---

## 52. ESTIMACIÓN DE EQUIPO

### 52.1. Equipo recomendado para el presupuesto (56 k €)
> Asumimos plazo 14-18 semanas con un núcleo lean y partners freelance puntuales.

- **1 Product / Tech Lead** (tu interlocutor principal, 30 % del presupuesto).
- **1 Senior Full-stack Next.js** (RSC, animaciones, 3D ligero).
- **1 Diseñador/a de producto senior** (UI, art direction, brand).
- **1 Especialista en animación / 3D** (parcial, 30 % dedicación).
- **1 Editor/a de contenidos + curador caza** (freelance puntual).
- **1 Curador pesca** (freelance puntual).
- **1 Fotógrafo/a** (freelance, 2 sesiones).
- **1 Asesor legal** (freelance puntual).
- **1 Atender soporte** (cuando lanzar).

### 52.2. Stack de productividad
- Figma + FigJam.
- Linear (issues).
- Notion (docs).
- Slack.
- 1Password.
- Github.
- Vercel.
- Sanity.
- Stripe.

### 52.3. Ritual semanal
- Lunes: planning.
- Miércoles: design crit.
- Viernes: demo + retro corta.

### 52.4. Documentación viva
- Notion → exportada a `/docs` cada release.

### 52.5. Reuniones cliente
- Quincenales 60 min con demo + decisiones.

### 52.6. Riesgo de bus factor
- Mitigado con docs + pairing.

### 52.7. Externalización
- Subtitulado, traducción profesional, locuciones.

---

## 53. KPIs Y MÉTRICAS DE ÉXITO

### 53.1. Métricas de adquisición
- Sesiones únicas/mes.
- CAC (coste adquisición cliente).
- % adquisición orgánica.

### 53.2. Métricas de conversión
- Tasa global (objetivo 1.8 % año 1, 2.3 % año 2).
- Tasa PDP→Morral.
- Tasa Morral→Caja.
- Tasa Caja→Pago.

### 53.3. Métricas de venta
- AOV (objetivo 220 € año 1).
- LTV (objetivo 900 € en 24 meses).

### 53.4. Métricas de retención
- Tasa retención 90 días.
- % suscriptores Avituallamiento.
- % socios Maestre.

### 53.5. Métricas de marca
- NPS (≥ 60).
- Brand search volume.
- Menciones cualitativas.

### 53.6. Métricas de comunidad
- Trofeos publicados.
- Reviews publicadas.
- Asistencia a eventos.

### 53.7. Métricas editoriales
- Tiempo medio en magazine ≥ 4 min.
- Audio escuchas ≥ 50 % completion.

### 53.8. Métricas técnicas
- LCP p75 ≤ 2.0 s.
- Errores < 0.1 %.
- Disponibilidad ≥ 99.9 %.

### 53.9. Métricas de sostenibilidad
- Kg packaging ahorrado.
- Donaciones €.
- % devoluciones.

### 53.10. Reporte mensual
- Email interno con resumen.

---

## 54. RIESGOS Y MITIGACIONES

### 54.1. Riesgos legales
- **Riesgo**: cambio normativa armas.
- **Mitigación**: vigilancia legislativa + capacidad de bloquear ventas por región.

### 54.2. Riesgos éticos
- **Riesgo**: críticas a la marca por sectores anti-caza.
- **Mitigación**: tono educativo, transparencia, foco en sostenibilidad.

### 54.3. Riesgos técnicos
- **Riesgo**: fallo Stripe.
- **Mitigación**: redundancia (Adyen como alternativa futura).
- **Riesgo**: caída Sanity.
- **Mitigación**: ISR + fallback estático.
- **Riesgo**: caída CDN.
- **Mitigación**: multi-CDN (Vercel + Cloudflare).

### 54.4. Riesgos de presupuesto
- **Riesgo**: scope creep.
- **Mitigación**: roadmap fases con criterios de inclusión.

### 54.5. Riesgos de plazo
- **Riesgo**: 3D y animaciones lentas en mobile.
- **Mitigación**: budgets estrictos + fallback 2D.

### 54.6. Riesgos de marca
- **Riesgo**: confusión con marcas existentes.
- **Mitigación**: registro de marca (UE).

### 54.7. Riesgos operativos
- **Riesgo**: stock descontrolado.
- **Mitigación**: ERP simple integrado + reconciliación diaria.

### 54.8. Riesgos de fraude
- **Riesgo**: pedidos fraudulentos de munición.
- **Mitigación**: KYC con licencia + manual review.

### 54.9. Riesgos de comunidad
- **Riesgo**: comentarios tóxicos.
- **Mitigación**: moderación + reglas claras.

### 54.10. Riesgos de SEO
- **Riesgo**: dependencia de Google.
- **Mitigación**: diversificación (newsletter, comunidad, magazine).

---

## 55. GLOSARIO INTERNO

### 55.1. Caza
- **Rececho**: caza al acecho del corzo, ciervo, rebeco.
- **Montería**: caza colectiva con perros.
- **Aguardo**: espera nocturna del jabalí.
- **Batida**: caza colectiva (sentido amplio).
- **Ojeo**: caza menor con tiradores en parada y ojeadores que levantan piezas.
- **Berrea**: celo del ciervo (sept-oct).
- **Ronca**: celo del gamo.
- **Media veda**: temporada de caza menor agosto.
- **Veda**: período de prohibición.
- **Reserva**: terreno regulado.
- **Coto**: terreno privado de caza.
- **Puesto**: lugar fijo de espera/tirada.
- **Mancha**: zona de monte espeso.
- **Levantar**: hacer salir a la pieza.
- **Cobrar**: recoger la pieza abatida.
- **Pierna**: pieza individual.
- **Galgo**: perro de caza.
- **Podenco**: perro rastreador ibérico.

### 55.2. Pesca
- **Mosca seca**: pesca con imitación que flota.
- **Ninfa**: imitación de larva sumergida.
- **Streamer**: imitación pez/anguila.
- **Cola**: hilo principal de mosca.
- **Bajo**: hilo final transparente.
- **Cazonete / Mosquera**: zona de lanzamiento.
- **Calado**: profundidad efectiva.
- **Cucharilla**: señuelo metálico giratorio.
- **Plomada**: peso de fondo.
- **Vivac**: pesca/caza con pernoctación.
- **Vadear**: cruzar el río con vadeadores.

### 55.3. Equipo
- **Pelfa**: prenda interior técnica.
- **Funda balística**: protección de transporte.
- **Mira telescópica / visor**: óptica de puntería.
- **Anillas / monturas**: piezas que sujetan la óptica.
- **Disparador / gatillo**: parte del arma.
- **Recámara / cierre**: parte del arma.
- **Cargador**: depósito de munición.
- **Bala expansiva**: bala que se deforma al impactar.
- **Bala maciza**: bala que no se deforma.

### 55.4. Atlas
- **Cota**: altitud sobre el nivel del mar.
- **Cuenca hidrográfica**: zona de drenaje de un río.
- **Caudal**: m³/s de un río.
- **Termoclina**: capa térmica en lagos/mar.
- **Bocana**: salida de puerto/estuario.

### 55.5. Marca
- **Morral**: carrito.
- **Caja**: checkout.
- **Cuaderno**: wishlist.
- **Casa**: tienda física Madrid/Asturias.
- **Avituallamiento**: caja mensual.
- **Maestre**: nivel premium del club.
- **Curador**: persona que selecciona producto.
- **Atlas**: mapa interactivo.
- **Bitácora**: newsletter.

### 55.6. Técnico
- **PDP**: ficha de producto.
- **PLP**: listado.
- **AOV**: ticket medio.
- **CAC**: coste adquisición.
- **LTV**: valor de vida del cliente.
- **RUM**: Real User Monitoring.

### 55.7. Legal
- **Licencia tipo C/D/E**: tipos de licencia armas España.
- **Guía de pertenencia**: documento que acompaña a un arma.
- **Permiso autonómico de caza**: emitido por cada CCAA.
- **Permiso de pesca continental**: emitido por cada CCAA.

### 55.8. Sostenibilidad
- **Vedas**: períodos de prohibición.
- **Cuotas**: límite anual de capturas.
- **Captura selectiva**: solo ciertas especies/medidas.
- **Catch & release**: pesca sin muerte.


---

## 56. ANEXOS

### 56.A. CATÁLOGO DE LANZAMIENTO (200 SKUs piloto, resumen por familia)

> Selección curada para abrir tienda. Cada producto descrito con: marca, nombre, especialidad, precio aproximado, curador asignado, justificación editorial.

#### 56.A.1. Rifles de caza mayor
1. **Sako 90 Hunter** · .308 Win · 2.450 € · Alfredo · *"Cañón fluteado opcional, culata de nogal de origen, gatillo a 1.3 kg muy ajustable. La elección segura del recechista que quiere herencia."*
2. **Sako 85 Bavarian** · .30-06 · 2.690 € · Alfredo · *"Culata bávara con queens-cheek, equilibrado para tiro a mano alzada. Romántico y eficaz."*
3. **Tikka T3X Lite** · .308 Win · 1.120 € · Alfredo · *"Rifle ligero, fiable, presupuesto cerrado. Para empezar bien."*
4. **Tikka T3X Hunter** · .270 Win · 1.290 € · Alfredo · *"Versatilidad pura: corzo, ciervo y rebeco."*
5. **Bergara B-14 Hunter** · .30-06 · 990 € · Alfredo · *"Cañón Bergara español, precisión MOA garantizada."*
6. **Bergara B-14 HMR** · 6.5 Creedmoor · 1.290 € · Alfredo · *"Chassis polímero, ideal para tiro largo y rececho técnico."*
7. **Steyr Mannlicher SM12** · .308 Win · 3.250 € · Alfredo · *"Acción Mannlicher con preset trigger, joya austriaca."*
8. **Mauser M18 Savanna** · .308 Win · 1.090 € · Alfredo · *"Honestidad alemana a precio justo."*
9. **CZ 600 Lux** · .308 Win · 1.490 € · Alfredo · *"Culata clásica checa, mecánica robusta."*
10. **Blaser R8 Professional** · .300 Win Mag · 4.890 € · Alfredo · *"Cuando el rececho se convierte en oficio."*

#### 56.A.2. Escopetas
11. **Beretta Silver Pigeon I Sporting** · 12/76 · 2.350 € · Alfredo · *"Superpuesta de toda la vida con balanceo serio."*
12. **Beretta SO5 Sporting** · 12/76 · 13.900 € · Alfredo · *"Sidelocks artesanos, pieza para colección y uso."*
13. **Browning Cynergy CX** · 12/76 · 1.890 € · Alfredo · *"Diseño robusto, ideal para plato."*
14. **Browning B525 Sporter** · 12/76 · 2.490 € · Alfredo · *"Recursos para todo el día sin cansar el hombro."*
15. **Benelli 828U** · 12/76 · 3.290 € · Alfredo · *"Acción superpuesta moderna, equilibrio raro."*
16. **Krieghoff K-80** · 12/76 · 12.500 € · Alfredo · *"La olímpica."*
17. **Caesar Guerini Magnus Sport** · 12/76 · 3.490 € · Alfredo · *"Italianidad fina."*
18. **Beretta A400 Xtreme Plus** · 12/89 · 1.890 € · Alfredo · *"Semiauto para anátidas en estuario."*
19. **Benelli M2** · 12/76 · 1.290 € · Alfredo · *"Inertia Driven probado."*
20. **AYA No. 2** · 12/70 · 6.900 € · Alfredo · *"Paralela vasca, gracia y trabajo de Eibar."*

#### 56.A.3. Munición de caza
21. **Hornady ELD-X Precision Hunter** · .308 Win 178 gr · 65 €/20u · *"Caza polivalente, expansión retrasada."*
22. **Hornady SST** · .30-06 165 gr · 52 €/20u · *"Ciervo a media distancia."*
23. **RWS Evolution Green** · .308 Win 162 gr · 78 €/20u · *"Sin plomo, expansión real."*
24. **Sako Powerhead Blade** · .30-06 165 gr · 78 €/20u · *"Sako lead-free."*
25. **Norma Tipstrike** · .308 Win 170 gr · 72 €/20u · *"Tope sueco para corzo."*
26. **Lapua Naturalis** · .308 Win 170 gr · 89 €/20u · *"Lead-free monolítica, premium."*
27. **GECO Plus** · .30-06 170 gr · 35 €/20u · *"Caza diaria, precio coherente."*
28. **Federal Premium Trophy Bonded Tip** · .30-06 165 gr · 75 €/20u · *"Para piezas grandes."*
29. **Sellier & Bellot SP** · .308 Win 180 gr · 28 €/20u · *"Honesta y económica."*
30. **Winchester Power Max Bonded** · .30-06 165 gr · 58 €/20u · *"Bala con encolado, expansión predecible."*

#### 56.A.4. Cartuchería de caza menor
31. **Eley VIP Sporting** · 12/70 28 g · 14 €/25u · *"Plato fino."*
32. **Royal Sport HV** · 12/70 28 g · 12 €/25u · *"Económico de Larroca."*
33. **Fiocchi Golden Pheasant** · 12/70 36 g #5 · 18 €/25u · *"Faisán y perdiz larga."*
34. **Hull Cartridge High Pheasant** · 12/70 30 g #6 · 16 €/25u · *"Tono inglés."*
35. **B&P F2 28** · 12/70 28 g · 13 €/25u · *"Plato y caza menor."*
36. **Federal Premium Wing-Shok** · 12/70 30 g #6 · 17 €/25u · *"Pluma americana."*
37. **Rio Game Load** · 12/70 32 g #6 · 14 €/25u · *"Polivalente."*
38. **NSI Felt Wad** · 12/70 32 g #5 · 16 €/25u · *"Taco de fieltro, eco."*
39. **Cheddite Pigeon** · 12/70 36 g #4 · 19 €/25u · *"Paloma de tirada larga."*
40. **Mary Arm Élégance** · 12/70 32 g #6 · 15 €/25u · *"Francesa, equilibrada."*

#### 56.A.5. Ópticas
41. **Swarovski Z5 3.5-18x44** · 1.690 € · Alfredo · *"Telémetro de torreta, claridad alpina."*
42. **Swarovski dS Gen II 5-25x52** · 4.490 € · Alfredo · *"La punta de lanza electrónica."*
43. **Zeiss Conquest V4 3-12x56** · 1.190 € · Alfredo · *"Crepuscular para aguardos."*
44. **Zeiss V8 1.8-14x50** · 2.890 € · Alfredo · *"Polivalente lujo alemán."*
45. **Leica Magnus 1.5-10x42** · 1.890 € · Alfredo · *"Compacta y luminosa."*
46. **Schmidt & Bender PMII 5-25x56** · 3.290 € · Alfredo · *"Si lo tuyo es el tiro a distancia."*
47. **Kahles K312i** · 2.690 € · Alfredo · *"Austriaca para target/hunting híbrido."*
48. **Vortex Razor HD Gen III** · 2.490 € · Alfredo · *"Calidad-precio americana."*
49. **Nightforce ATACR 5-25x56** · 3.890 € · Alfredo · *"Para los que tiran a la luna."*
50. **MeoStar R2 2.5-15x56** · 1.090 € · Alfredo · *"Honestidad checa."*

#### 56.A.6. Prismáticos y monoculares
51. **Swarovski NL Pure 10x42** · 3.250 € · *"Compañero permanente."*
52. **Swarovski EL 10x32** · 2.490 € · *"Ligereza para rececho largo."*
53. **Zeiss Victory SF 10x42** · 2.890 € · *"FOV extremo."*
54. **Zeiss SFL 8x40** · 1.490 € · *"Compactos premium."*
55. **Leica Noctivid 10x42** · 2.690 € · *"Crepuscular bonito."*
56. **Leica Geovid Pro 32 10x42** · 3.490 € · *"Con telémetro y balística integrada."*
57. **Vortex Razor UHD 10x42** · 1.890 € · *"Top de la casa Vortex."*
58. **Kowa Genesis 10x33** · 1.090 € · *"Compactos serios."*
59. **Steiner Predator 10x42** · 690 € · *"Resistencia de marca."*
60. **Nikon Monarch HG 10x42** · 990 € · *"Standar fiable."*

#### 56.A.7. Cuchillería
61. **Pallarès Solsona "Carnicero" Carbono** · 19 cm · 89 € · Tomé · *"Mango boj, hoja templada en Solsona. Cocina del despiece serio."*
62. **Pallarès Solsona Comùn Carbono** · 12 cm · 32 € · Tomé · *"El cuchillo cualquier-cosa de toda la vida."*
63. **Cudeman MT-5 Cocobolo** · 23 cm · 79 € · Tomé · *"Bushcraft español honesto."*
64. **Joker Montés** · 21 cm · 49 € · Tomé · *"El primero perfecto."*
65. **Lionsteel M4 Olivo** · 21 cm · 195 € · Tomé · *"Italianidad, hoja M390 a control."*
66. **Spyderco Para Military 2 S30V** · 20 cm · 195 € · Tomé · *"Plegable de bolsillo serio."*
67. **Benchmade Bugout 535** · 17 cm · 159 € · Tomé · *"Ultraligero, EDC."*
68. **Helle Fjellkniven** · 22 cm · 119 € · Tomé · *"Noruega laminada en triple capa."*
69. **Morakniv Companion HD** · 21 cm · 18 € · Tomé · *"El que sí o sí compras de regalo."*
70. **Maserin Antico** · 22 cm · 89 € · Tomé · *"Mango asta de ciervo."*

#### 56.A.8. Ropa caza
71. **Härkila Ingels GTX Jacket** · 549 € · *"Goretex robusto, color marrón cantábrico."*
72. **Härkila Lagan Trousers** · 219 € · *"Pantalón de monte completo."*
73. **Sitka Subalpine Jacket** · 449 € · *"Camo discreto americano."*
74. **Kuiu Guide Jacket** · 379 € · *"Modular y técnico."*
75. **Fjällräven Singi Eco-Shell** · 489 € · *"Sueca, sostenible."*
76. **Beretta Hunting Smock** · 199 € · *"Plumífero acolchado tradicional."*
77. **Seeland Helt Shaket** · 269 € · *"Polivalente."*
78. **Pinewood Tiveden TC-Stretch** · 159 € · *"Versátil sueca."*
79. **Härkila Pro Hunter Move 2.0** · 599 € · *"Para climas extremos."*
80. **Stagunt Combat Jacket** · 339 € · *"Francesa, recia."*

#### 56.A.9. Ropa pesca
81. **Simms G3 Guide Stockingfoot Waders** · 599 € · Inés · *"El estándar mundial del vadeador."*
82. **Simms Freestone Z** · 419 € · Inés · *"Versión accesible."*
83. **Simms G3 Guide Wading Jacket** · 449 € · Inés · *"Goretex con bolsillos pensados para mosca."*
84. **Patagonia Swiftcurrent Expedition** · 729 € · Inés · *"Construcción premium."*
85. **Orvis PRO Wading Jacket** · 499 € · Inés · *"Ligera y precisa."*
86. **Korkers Devil's Canyon Wading Boots** · 339 € · Inés · *"Suelas intercambiables."*
87. **Simms Freestone Wading Boots** · 219 € · Inés · *"Bota de iniciación."*
88. **Patagonia Foot Tractor Wading Boots** · 549 € · Inés · *"Suelas fieltro/dureza."*
89. **Sage Fly Vest** · 169 € · Inés · *"Chaleco con bolsillos diseñados."*
90. **Vision Atom Hooded Jacket** · 259 € · Inés · *"Finlandesa, ligera."*

#### 56.A.10. Cañas de mosca
91. **Sage R8 Core 9' 5wt** · 1.090 € · Inés · *"La caña con la que sueñan los puristas."*
92. **Sage Salt R8 9' 8wt** · 1.090 € · Inés · *"Para lubina costera."*
93. **Scott Centric 9' 5wt** · 1.090 € · Inés · *"Resorte fino."*
94. **Hardy Ultralite NSX 9' 5wt** · 749 € · Inés · *"Heritage inglés."*
95. **Orvis Helios D 9' 5wt** · 1.089 € · Inés · *"Desplazamiento ridículo."*
96. **Loop Cross SX 9' 5wt** · 599 € · Inés · *"Sueca rapidita."*
97. **Vision XO Graphene 9' 5wt** · 689 € · Inés · *"Finlandesa, sensible."*
98. **Echo Carbon XL 8'6" 4wt** · 169 € · Inés · *"Económica para empezar."*
99. **Redington Path II 9' 5wt** · 189 € · Inés · *"Polivalente."*
100. **Greys GR60 9' 5wt** · 249 € · Inés · *"Inglesa honesta."*

#### 56.A.11. Carretes de mosca
101. **Hardy Fortuna XDS 7000** · 750 € · *"Para grandes peces salados."*
102. **Sage Spectrum LT 5/6** · 459 € · *"Ligero y suave."*
103. **Ross Animas 5/6** · 369 € · *"Americano clásico."*
104. **Orvis Mirage USA 5/6** · 549 € · *"Drag de carbono."*
105. **Lamson Litespeed F 5+** · 489 € · *"Ligero atómico."*

#### 56.A.12. Cañas de spinning
106. **Daiwa Steez AGS 7' M** · 749 € · Bea · *"Japonesa élite."*
107. **Shimano Stradic Ci4+ Spinning 7' ML** · 269 € · Bea · *"Sensibilidad."*
108. **Major Craft Volkey 7'6" M** · 199 € · Bea · *"Lubina costera."*
109. **St. Croix Premier 7' M** · 199 € · Bea · *"Polivalente."*
110. **Yamaga Blanks Calista 76M** · 459 € · Bea · *"Premium nipona."*

#### 56.A.13. Carretes spinning
111. **Shimano Stella FK 3000** · 949 € · Bea · *"El mejor del mundo."*
112. **Daiwa Exist LT 3000** · 899 € · Bea · *"Magsealed."*
113. **Shimano Twin Power XD 3000** · 549 € · Bea · *"Resistencia salina."*
114. **Daiwa Certate LT 3000** · 549 € · Bea · *"Templanza."*
115. **Penn Slammer IV 3500** · 379 € · Bea · *"Sello marino."*

#### 56.A.14. Señuelos
116. **Yamashita Egi Sutte-R 3.0** · 22 € · Bea · *"Sepia/calamar costero."*
117. **Major Craft Eging Yari** · 18 € · Bea · *"Cefalópodo nocturno."*
118. **DUO Realis Pencil 110** · 28 € · Bea · *"Lubina superficie."*
119. **IMA Komomo SF-125** · 32 € · Bea · *"Bajura."*
120. **Tackle House Cruise Minnow** · 24 € · Bea · *"Crank fino."*
121. **Megabass Vision OneTen** · 35 € · Bea · *"Suspending."*
122. **Owner ST-66 Treble Hooks** · 9 €/4u · Bea · *"Anzuelos top."*
123. **Shimano Coltsniper Wonder 80** · 18 € · Bea · *"Cuchara japonesa."*
124. **Hayabusa Free Slide Jig 100 g** · 12 € · Bea · *"Slow jigging."*
125. **Storm Mr Mac** · 9 € · Bea · *"Crank económico."*

#### 56.A.15. Moscas atadas a mano (lote local)
126. **Royal Sella** · 8 €/u · *"Ata Manuel Asturias, río Sella."*
127. **Pirineo Caddis** · 7 €/u · *"Ata Mireia Pallars, Noguera Pallaresa."*
128. **Truchera de Cinco Villas** · 7 €/u · *"Imitación de efímera."*
129. **Streamer Tajo** · 9 €/u · *"Para black-bass de embalse."*
130. **Tubeflies Salmón Cantábrico** · 12 €/u · *"Para los pocos salmones que vuelven."*

#### 56.A.16. Mochilas
131. **Kuiu Pro 5500** · 549 € · *"Para sacar pieza."*
132. **Stone Glacier Sky Archer 5400** · 599 € · *"Premium americana."*
133. **Fjällräven Singi 28** · 199 € · *"Sueca paseo monte."*
134. **Patagonia Stealth Pack 18L** · 289 € · *"Wading minimalista."*
135. **Mystery Ranch Pop Up 38** · 369 € · *"Modular."*

#### 56.A.17. Iluminación y óptica auxiliar
136. **Petzl Actik Core 600** · 79 € · *"Frontal serio."*
137. **Fenix HM65R-T** · 95 € · *"Frontal con difusor."*
138. **Olight Marauder Mini** · 159 € · *"Linterna larga."*
139. **Pulsar Helion XQ50F** · 2.490 € · *"Térmico observación."*
140. **InfiRay Bolt TL35** · 1.690 € · *"Térmico clip-on."*

#### 56.A.18. Camping y bivouac
141. **MSR Pocket Rocket Deluxe** · 79 € · *"Hornillo."*
142. **MSR WindBurner Stove System** · 199 € · *"Eficiente al viento."*
143. **Nemo Tensor Insulated** · 199 € · *"Esterilla térmica."*
144. **Therm-a-Rest NeoAir XLite NXT** · 249 € · *"Premium."*
145. **Western Mountaineering AlpinLite** · 569 € · *"Saco -7 °C."*

#### 56.A.19. Cocina del despiece
146. **Tabla Boos Pro Series Maple** · 189 € · *"Tabla 60 cm madera tratada."*
147. **Lansky LCAPS** · 49 € · *"Afilador piedras."*
148. **Edge Pro Apex 4** · 299 € · *"Sistema de afilado preciso."*
149. **Pallarès Cuchillo deshuesador** · 65 € · *"Hecho a mano Solsona."*
150. **Cudeman Skinner Stag** · 89 € · *"Despellejar."*

#### 56.A.20. Conservas y curados (consumibles, asociados a "Cocina")
151. **Conserva de jabalí en aceite (Tomé)** · 250 g · 14 € · *"Recetario tradicional extremeño."*
152. **Cecina de ciervo La Vera** · 100 g · 18 €.
153. **Paté de perdiz casero** · 120 g · 12 €.
154. **Cabracho en tarro (Cantabria)** · 200 g · 14 €.
155. **Anchoas Santoña 00** · 50 g · 18 €.
156. **Trucha ahumada del Sella** · 120 g · 16 €.
157. **Bonito del Norte Olasagasti** · 200 g · 18 €.
158. **Mermelada de mora silvestre** · 250 g · 9 €.
159. **Miel del Pirineo crudo** · 500 g · 14 €.
160. **Sidra natural Trabanco** · 700 ml · 7 €.

#### 56.A.21. Recambios y cuidado
161. **Pasta Sweets Cleaner 7.62 Bore** · 16 €.
162. **Hoppe's No. 9 Solvent** · 12 €.
163. **Ballistol Aceite** · 8 €.
164. **Cordón limpiabore Otis** · 35 €.
165. **Pulidor de óptica Zeiss** · 18 €.
166. **Cera Sno-Seal para botas** · 12 €.
167. **Hilo Cortland Camo Mono** · 12 € (15 lb).
168. **Hilo Stroft GTM** · 9 € (100 m).
169. **Maxima Chameleon** · 11 € (50 m).
170. **Hilo trenzado YGK G-Soul** · 22 € (150 m).

#### 56.A.22. Drones y tecnología (curados)
171. **Garmin GPSMAP 67i** · 749 € · *"Indispensable en monte."*
172. **Suunto Vertical Titanium** · 949 € · *"Reloj GPS multi-banda."*
173. **Garmin tactix 7 Pro** · 1.250 € · *"Pro táctico-civil."*
174. **DeLorme inReach Mini 2** · 449 € · *"Mensajería satélite."*
175. **Anemómetro Kestrel 5700** · 549 € · *"Calculadora balística viento."*

#### 56.A.23. Educación y libros
176. **"Diario de un cazador" — Miguel Delibes** · 22 €.
177. **"La España vacía" — Sergio del Molino** · 24 €.
178. **"A River Runs Through It" — Norman Maclean (ES)** · 18 €.
179. **"The Curve of Time" — M. Wylie Blanchet** · 22 €.
180. **"Manual de mosca seca" — autor curado** · 28 €.

#### 56.A.24. Cuchillos personalizados (exclusivos Montaraz)
181. **Cuchillo Sella** · 240 € · Forja artesana, mango fresno con marca a fuego.
182. **Cuchillo Pirineo** · 280 € · Hoja damasco, mango asta de gamo.
183. **Cuchillo Cantábrico** · 320 € · Hoja inox alemana, mango ébano.
184. **Cuchillo Tajo** · 220 € · Hoja Bohler N690, mango boj.
185. **Cuchillo Gredos** · 260 € · Forja Toledo, mango cuerno carnero.

#### 56.A.25. Lotes regalo
186. **Lote "Primer cebo"** · 89 € · Caja de iniciación pesca.
187. **Lote "Primer ojeo"** · 119 € · Para iniciación caza menor.
188. **Lote "Tarde de Avituallamiento"** · 79 € · Pequeño set descubrimiento.
189. **Lote "Cuchillero"** · 199 € · 2 cuchillos + piedras + cuero.
190. **Lote "Vivac"** · 349 € · Vivac mínimo para 1 noche.

#### 56.A.26. Experiencias
191. **Rececho de berrea con guía (Picos)** · 850 €/3 días · Tomé.
192. **Pesca a mosca Sella** · 320 €/jornada · Inés.
193. **Montería extremeña** · 1.450 € · Tomé.
194. **Curso atado de moscas (online)** · 89 €.
195. **Curso iniciación recechista** · 380 € (3 días).
196. **Jornada cetrería Toledo** · 290 €.
197. **Tiro de plato olímpico Madrid** · 180 €.
198. **Pesca de altura Cantábrico** · 380 €/jornada.
199. **Salida nocturna sargo Asturias** · 220 €.
200. **Cocina del despiece Cáceres** · 250 €.

### 56.B. PLANTILLAS DE COPY EDITORIAL

#### 56.B.1. Hero de submarcas
- **Monte**: *"Monte. Donde el alba huele a tomillo y a aceite de armas."*
- **Aguas**: *"Aguas. Donde la línea se templa antes que el corazón."*
- **Sendas**: *"Sendas. Para los que dejan huella pero recogen latas."*
- **Cocina**: *"Cocina. Lo que del monte vuelve a la mesa con honra."*

#### 56.B.2. Microensayos por familia (extractos)
- **Munición**: *"Cada cápsula es una decisión: una bala expansiva no es la misma que una maciza, y un grano de más es a veces un kilómetro de menos. Aquí no vendemos balas sueltas: vendemos respuestas."*
- **Cañas de mosca**: *"Una caña es un instrumento de música y de hidráulica. No vale la más cara; vale la que se entiende con tu muñeca."*
- **Cuchillería**: *"Un cuchillo bueno se hereda. Uno malo se rompe el primer día. Aquí no hay malos."*

#### 56.B.3. CTAs por contexto
- "Llévatelo al monte"
- "Apártalo 24 h"
- "Configura el tuyo"
- "Reserva la jornada"
- "Apúntame a la jornada"
- "Súbete a la caja"
- "Hazlo tuyo"

#### 56.B.4. Mensajes de éxito
- "Hecho. Camino del puesto."
- "Apartado. Te aviso si cambia algo."
- "Has subido de nivel: Maestre. Hablamos pronto."
- "Caja lanzada. Llega el día 14."

#### 56.B.5. Mensajes de error
- "Tu banco no quiso. Pruébalo otra vez."
- "Se acabó justo. Te avisamos cuando vuelva."
- "Necesitamos tu licencia para enviar esto."

#### 56.B.6. Email de bienvenida (extracto)
> **Asunto**: Bienvenido al morral.
> *Hola, [nombre]:*
> *Has cruzado la puerta. Aquí se respira despacio. Te dejo un par de pistas:*
> *— En `/atlas` están los lugares que nos gustan, dosificados.*
> *— En `/revista` hay tres lecturas que sirven para el café.*
> *— Si alguna vez no encuentras lo que buscas, escríbeme: tomé@montaraz.com. Llevo el monte en el bolsillo de la chaqueta.*
> *Buen viento.*
> *Tomé y el equipo Montaraz.*

#### 56.B.7. Email de confirmación de pedido
> **Asunto**: Tu morral va camino del puesto.
> *[Nombre], lo tuyo está embalado en kraft, con cordel de yute y un saludo a mano. SEUR lo tiene desde hoy. Llegará entre el [X] y el [Y].*
> *— Resumen:*
> *[productos]*
> *— Total: [precio]*
> *— Si algo cambia, te aviso por SMS.*
> *Para devolver, abre el morral y dale a "Iniciar devolución". Sin formularios trampa.*
> *Buen viento.*

#### 56.B.8. SMS transaccional
> *Montaraz: paquete entregado en [dir]. Si no fuiste tú, dilo: chat.montaraz.com.*

#### 56.B.9. Push notifications
> *"Mañana, marea baja a las 06:14. Si vas a sargo, buen día."*
> *"Tu pedido sale hoy. Que cace bien."*

#### 56.B.10. 404 page
> *"Aquí no hay rastro. Pero hay un perro que sigue olfateando."*
> *(Ilustración de podenco a tinta + botón Volver a casa).*

### 56.C. IDEAS DE MAGAZINE (60 PIEZAS PARA AÑO 1)

1. *"La becada y la melancolía"* — ensayo + 800 m de río.
2. *"El silencio que enseña: 24 h en un puesto con José Antonio Valverde"* — perfil.
3. *"Cómo se templa una caña de mosca: visita a Sage"* — reportaje.
4. *"Los ríos que ya no existen"* — atlas histórico hidráulico.
5. *"Iberia salada: 12 calas para pescar al amanecer"* — fotorreportaje.
6. *"El cuchillo de boj y otras herencias"* — Pallarès Solsona retrato.
7. *"Vedas: por qué la espera salva especies"* — divulgación científica.
8. *"Diccionario íntimo de la berrea"* — glosario poético.
9. *"La paloma torcaz en febrero: dossier"* — técnico.
10. *"Tres recetas con jabalí y tres bodegas que las aguantan"* — gastronomía.
11. *"Cetrería: el arte de mirar"* — perfil cetrero.
12. *"Mosca seca del Tajo"* — río en detalle.
13. *"Cómo elegir tu primer rifle"* — guía.
14. *"Cómo NO elegir tu primer rifle"* — segunda parte irónica.
15. *"Galgos: un código de respeto"* — sensibilización.
16. *"Reserva regional de Riaño: 70 años"* — historia.
17. *"Faros del Cantábrico"* — fotorreportaje.
18. *"El olor del nogal"* — taller artesano.
19. *"La caza de palomas en Asturias: 48 horas"* — reportaje.
20. *"Pesca sin muerte: por qué"* — divulgación.
21. *"Los perdigueros del Pallars"* — retrato canino.
22. *"Aurelio Menéndez y la caza del lince" (historia)* — archivo.
23. *"El primer corzo"* — relato.
24. *"Inés vs. la trucha asalmonada"* — entrevista.
25. *"Botas wading: qué importa de verdad"* — review.
26. *"Calibres y conciencia"* — ensayo.
27. *"Atado de moscas en casa"* — guía paso a paso.
28. *"Catorce nudos imprescindibles"* — guía visual.
29. *"Cómo leer un río"* — guía.
30. *"El viento del puerto"* — relato del estuario.
31. *"Manual de la espera"* — ensayo.
32. *"Conservas caseras: paté de perdiz"* — receta.
33. *"Por qué pesca y caza son ecologistas (cuando lo son)"* — divulgación.
34. *"Mayflower: un mes con la efímera"* — divulgación.
35. *"Mapa lunar para el año en curso"* — herramienta.
36. *"Vivac en Gredos: una noche que cambia"* — relato.
37. *"Cómo cuidar tu escopeta cada domingo"* — guía.
38. *"Comprar bien: por qué mejor un cuchillo bueno que tres regulares"* — opinión.
39. *"El sastre del cazador: visita a Beretta Gallery Madrid"* — reportaje.
40. *"Lubina de costa: oct-feb"* — guía.
41. *"Salmones: por qué se llora cuando vuelven"* — divulgación.
42. *"La berrea del 23: balance"* — anual.
43. *"Cinco perros que cambiaron una vida"* — relato corto.
44. *"Calibres prohibidos por país"* — divulgación legal.
45. *"Buen viento: glosario de despedidas"* — pieza literaria.
46. *"Los señuelos olvidados"* — historia.
47. *"Por qué la pesca al curricán es un arte y no un atajo"* — opinión.
48. *"El armero de mi pueblo"* — perfil.
49. *"Cómo se compra una óptica sin arruinarse"* — guía.
50. *"Camino de Santiago para pescadores"* — itinerario.
51. *"Bolsas Beretta: análisis"* — review.
52. *"Música para el puesto"* — playlist + ensayo.
53. *"Cantábrico bravo: 5 puertos para sargo nocturno"* — fotorreportaje.
54. *"Tipos de retícula explicados"* — técnico.
55. *"Por qué dejé de cazar con plomo"* — opinión.
56. *"Cómo limpiar un rifle en 12 minutos"* — vídeo + foto-receta.
57. *"Cocina del despiece: introducción"* — taller.
58. *"Pesca con niños"* — guía.
59. *"Vedas 2026 explicadas"* — divulgación.
60. *"Nieves y belicismos del cuaderno"* — final de año, balance.

### 56.D. EJEMPLOS DE ESQUEMAS DE PÁGINA

#### 56.D.1. PDP de rifle Sako 90 Hunter
- Hero: 6 fotos + 1 vídeo + visor 3D + AR.
- Selector: calibre, longitud cañón, acabado, mira.
- Stock animado.
- "Por qué lo elegimos" — Alfredo de la Sota.
- Ficha técnica: 24 filas.
- Tabla balística con calibre seleccionado.
- "Va con esto": óptica recomendada, monturas, correa, funda, caja.
- Vídeo de uso por un guía Picos.
- Visor despiece.
- AR.
- Opiniones verificadas (8).
- Magazine relacionada: "Cómo elegir tu primer rifle", "Calibres y conciencia".
- FAQ específica (6).
- Aviso legal.
- Garantía Montaraz.

#### 56.D.2. PDP de mosca atada a mano
- Hero: foto macro + foto del atador.
- Selector: talla (#14, #16, #18).
- Stock animado (silueta de moscas).
- "Por qué la elegimos" — Inés.
- Ficha: anzuelo, hilo, cuerpo, ribete, cuello, alas.
- Vídeo de atado.
- "Va con esto": hilo de cola, bajos, caja.
- Magazine: "Cómo leer un río".

#### 56.D.3. Magazine artículo "Iberia salada"
- Hero: foto panorámica.
- Drop cap.
- 3500 palabras divididas en 5 capítulos.
- 12 fotos a sangre.
- Audio narrado 35 min.
- 4 productos enlazados.
- 2 artículos relacionados.
- Comentarios verificados.

### 56.E. TEMPLATES DE EMAIL

#### 56.E.1. Carrito abandonado
> Asunto: Tu morral espera en el portal.
> *Te dejaste cosas dentro. Si quieres, lo cierro yo: clic aquí. Si lo prefieres, te aviso si quedan pocas. No insistiré más de dos veces.*

#### 56.E.2. Bienvenida Maestre
> Asunto: Bienvenido al Club Maestre.
> *Has subido la cuesta. A partir de ahora: 10 % perpetuo, envíos express gratis, acceso anticipado a series limitadas, una jornada al año por nuestra cuenta y una corona pequeña en tu perfil. Te llamo de aquí a unos días para conocerte.*

#### 56.E.3. Cumpleaños
> Asunto: Una vela en el campo.
> *Hoy es tu día. Te dejamos 8 % los próximos 14 días si te animas. Sin prisas.*

#### 56.E.4. Newsletter mensual (estructura)
- Carta del editor (200 palabras).
- Hilo principal (resumen + link a magazine).
- 3 productos curados del mes.
- 1 evento próximo.
- 1 cita literaria.
- 1 frase del fundador.

### 56.F. RUNBOOKS OPERATIVOS

#### 56.F.1. Stripe webhook fallido
1. Sentry alerta P0.
2. Verificar `/api/health`.
3. Verificar logs Axiom.
4. Reenviar webhook desde Stripe Dashboard.
5. Si persiste, abrir issue + escalar.

#### 56.F.2. Out-of-stock crítico
1. Alerta admin.
2. Reasignar stock entre warehouses.
3. Notificar a usuarios con notificación push.
4. Pedido restock.

#### 56.F.3. Pedido sospechoso
1. Manual review queue.
2. Verificar IP + país + tipo de producto.
3. Si arma/munición sin licencia válida, rechazar.

#### 56.F.4. Comentario tóxico
1. Reportar a moderación.
2. Eliminar.
3. Banear si reincidente.

### 56.G. PLANTILLA "CARTA DEL FUNDADOR" (TRIMESTRAL)

> *"Querida gente Montaraz:*
> *El trimestre que se va nos deja [hecho], [hecho], [hecho]. Nos hemos equivocado en [error] y lo hemos corregido. Estos próximos meses queremos [plan]. Como siempre: si tenéis cualquier idea o queja, mi puerta está abierta. Buen viento. — Alfredo, Inés y Tomé."*

### 56.H. ESQUEMA DE EVENTOS

#### 56.H.1. Eventos físicos anuales
- **Apertura Casa Madrid** (enero).
- **Mes de la mosca seca** (mayo).
- **Día Hubert San** (3 noviembre).
- **Cena Maestre** (diciembre).

#### 56.H.2. Eventos digitales
- **Lanzamiento de drops** (segundos jueves).
- **Magazine en directo** (semestral, con autor invitado).

### 56.I. GUÍA DE FOTOGRAFÍA

#### 56.I.1. Para producto
- Fondo: pergamino o cuero o nogal.
- Ángulos: 6.
- Distancia: a 1.2 m.
- Iluminación: 3 puntos.
- Apertura: f/8.

#### 56.I.2. Para lifestyle
- Hora dorada.
- Fondo natural.
- Personas reales (no modelos).
- Animales reales con consentimiento veterinario.

#### 56.I.3. Para magazine
- Cinematografía 35 mm.
- Polaroid 600 ocasional.
- Película Kodak Portra 400 vibe.

### 56.J. SISTEMA DE ARCHIVO

#### 56.J.1. Naming
`fecha_categoria_subcategoria_slug_variante_indice.ext`

#### 56.J.2. Carpetas
- `/assets/raw/` (sin procesar).
- `/assets/processed/`.
- `/assets/3d/`.
- `/assets/video/`.

#### 56.J.3. Backup
- Diario incremental.
- Semanal completo.

### 56.K. NORMAS DE PACKAGING

#### 56.K.1. Material
- Cartón crudo FSC.
- Papel kraft.
- Cordel yute.
- Sello cera (en pedidos >300 €).
- Tarjeta a mano (en pedidos >500 €).

#### 56.K.2. Sostenibilidad
- Cero plástico.
- Cinta papel.
- Etiquetas reciclables.

#### 56.K.3. Devolución de cajas
- 5 € de descuento si la devuelves intacta.

### 56.L. CARTA DE COMPROMISO ÉTICO

> *Montaraz no vende, promueve o tolera prácticas ilegales, cruentas, indiscriminadas o desrespetuosas con el medio. Sostenemos vedas y cuotas. Donamos el 1 % a conservación. No comerciamos con especies en peligro. No glorificamos la muerte. La caza y la pesca, bien entendidas, custodian el monte. Esa es nuestra línea.*

### 56.M. SOPORTE HUMANO

#### 56.M.1. Canales
- Email `hola@montaraz.com`.
- Chat web (9-21 h CET).
- Teléfono.

#### 56.M.2. SLA
- Email: 12 h.
- Chat: 3 min.
- Teléfono: 5 timbres.

#### 56.M.3. Estilo
- Empático, breve, directo.
- Firmar con nombre.
- Cerrar con "Buen viento".

### 56.N. PRESUPUESTO ESTIMADO (DESGLOSE 56 K €)

| Partida | € |
|---|---|
| Diseño UI/UX + branding | 9.500 |
| Desarrollo frontend Next.js | 14.000 |
| Desarrollo backend + integración | 8.000 |
| Animaciones + 3D | 6.500 |
| CMS + contenido inicial | 3.000 |
| Fotografía + vídeo | 4.000 |
| Copy editorial + curaduría | 2.500 |
| QA + testing | 2.500 |
| Asesoría legal | 1.500 |
| Soporte lanzamiento | 1.500 |
| Buffer / contingencia (5%) | 3.000 |
| **Total** | **56.000** |

### 56.O. ESTRUCTURA DE FOOTER

- Logo + frase.
- 4 columnas:
  1. Tienda (Monte, Aguas, Sendas, Cocina, Cuchillería).
  2. Casa (Manifiesto, Origen, Curadores, Prensa).
  3. Aula (Cursos, Expediciones, Atlas, Calendario).
  4. Soporte (Contacto, FAQ, Garantía, Envíos, Devoluciones, Legal).
- Newsletter inline.
- Idioma + moneda.
- Iconos social (discretos).
- Línea final: "Forjado a mano en Madrid y Asturias. Con tinta, café y respeto."
- Línea segunda: "© 2026 Montaraz S.L. — CIF B-99999999".

### 56.P. ESTRUCTURA DE HEADER

- Mega-menu (Tienda, Casa, Aula, Atlas, Revista, Club).
- Buscador (cmd+k).
- Idioma + moneda.
- Cuenta.
- Morral.
- Indicador "Modo Tarde de Campo" (linterna).
- Sticky tras 96 px scroll.


### 56.Q. EASTER EGGS — LISTA B (101 a 220)
> Rotación trimestral. Cada uno con id, trigger, payload, telemetría.

101. Pulsar `cmd+shift+8` muestra una mosca en el cursor que se posa al detenerse.
102. Si haces scroll a velocidad >2x el habitual durante 10 s, aparece "Vas con prisa. Respira.".
103. En el footer, si tu locale es PT, aparece "Bom vento" en vez de "Buen viento".
104. Si pides un cuchillo a las 23:33 hora local, la confirmación dice "Hora del filo".
105. Tres clics en la corona de Maestre activa modo "Trono" (avatar con corona dorada).
106. Pulsar `m m m` en `/atlas` muestra mapa de migración de aves.
107. Doble click en la palabra "trucha" en magazine abre vista batimetría.
108. Pulsar `cmd+s` no guarda página: muestra "Aquí no se guarda, se recuerda".
109. Mover el cursor en círculos durante 3 s genera un remolino sutil.
110. Si la batería de tu portátil <15 %, aparece "Carga, anda".
111. Si el tiempo en tu localización es lluvia, aparece "Bota wading recomendada hoy".
112. Si el tiempo es soleado, aparece "Cuidado el cuello, gorra".
113. Pulsar `shift+arriba` cambia tipografía a serif italic momentáneamente.
114. Buscar "lobo" devuelve "El lobo no se caza. Lee `/etica`".
115. Buscar "oso" devuelve "Tampoco. Pero te puedo enseñar dónde duerme".
116. Buscar "trampa" devuelve "No vendemos trampas ilegales. Las legales son éticas: pregúntanos".
117. Buscar "ametralladora" devuelve "Aquí no. Aquí se viene a respetar el monte".
118. Si pones "Tomé" como nombre en checkout, "Hola tocayo".
119. Si pones "Inés", idem para Inés.
120. Si tu apellido empieza por "Z", sello "Casi al final del abecedario".
121. Hover en mosca seca de pesca durante 8 s, mosca vibra como si estuviera flotando.
122. Modo "Sigilo": pulsa `s s s s s` para ocultar todas las decoraciones (parallax, niebla, etc.).
123. Modo "Cantábrico": pulsa `c c c c c c` para activar audio loop de olas durante 60 s.
124. Pulsar `cmd+alt+m` en mobile copia el último link de magazine al portapapeles.
125. Pulsar `cmd+alt+t` muestra teléfono de Tomé (atención humana).
126. Hover sostenido en sello "Hecho en España": muestra mapa de origen del producto.
127. Pulsar `1 2 3` en home muestra los 3 valores fundacionales.
128. Pulsar `cmd+e` exporta tu cuaderno a PDF.
129. Si pulsas "save" en un cuaderno con 0 items, aparece "Aún no hay rastro".
130. Long press en logo del footer 6 s: aparece "Easter egg confirmado".
131. Pulsar `cmd+alt+s` activa modo silencio en chat.
132. Si haces 3 capturas en el mismo día, sello "Jornada larga".
133. Si haces capturas en 12 meses seguidos, sello "Año redondo".
134. Si tu primer pedido es un cuchillo, sello "Primero corté".
135. Si tu primer pedido es una caña, sello "Primero lancé".
136. Si tu primer pedido es munición, sello "Primero disparé".
137. Si tu primer pedido es ropa, sello "Primero vestí".
138. Si tu primer pedido es libro, sello "Primero leí".
139. Si tu primer pedido es una caja Avituallamiento, sello "Suscriptor de la primera hornada".
140. Si pides envoltura regalo "para mi padre", aparece carta a mano del fundador con dedicatoria.
141. Si tu pedido coincide con el santo de Hubert (3 nov), sello "San Hubert".
142. Si tu pedido coincide con luna llena, sello "Pedido a la luna".
143. Si tu pedido sale el día de un eclipse, sello "Eclipse".
144. Si tu IP geográfica está en una zona muy remota, sello "Lo enviamos al fin del mundo".
145. Si tu pedido tiene exactamente 7 productos, sello "Siete".
146. Si tu pedido total termina en .07, mensaje "Suerte de cazador".
147. Si haces clic 10 veces en el mismo botón, aparece "Te he oído, lo estamos haciendo".
148. Si te quedas 90 s en una sola PDP, aparece "Estás dudando. Preguntar a Tomé".
149. Si compras y devuelves el mismo día, no hay sanción y aparece "Cambiar de idea es de sabios".
150. Pulsar `cmd+alt+z` activa zoom de accesibilidad.
151. Pulsar `cmd+alt+x` activa modo daltonismo (paleta protanopia).
152. Pulsar `cmd+alt+d` activa modo daltónico deuteranopia.
153. Pulsar `cmd+alt+y` modo tritanopia.
154. Pulsar `cmd+alt+a` activa modo audio-descriptivo.
155. Pulsar `cmd+alt+r` reinicia preferencias.
156. Si llevas 60 s sin moverte, cursor se "asienta" como una piedra.
157. Si haces 3 zooms seguidos en una foto, fondo se atenua dramáticamente.
158. Si entras a las 06:00 hora local, hero te saluda "Buenos días, madrugador".
159. Si entras a las 22:00, hero te saluda "Buenas noches, cómplice".
160. Si entras un domingo, hero te saluda "Domingo de campo".
161. Si vienes de un link de magazine, hero recuerda "Vienes de la lectura. Sigue".
162. Si vienes de Google buscando "cuchillo regalo", PDP de cuchillo destacada.
163. Si tu navegador es Safari, fonts ligeramente más nítidas.
164. Si tu navegador es Firefox, mensaje "Bienvenido, libre".
165. Si tu sistema es Linux, mensaje sutil "Forjadores como tú".
166. Si tu navegador es Edge, ningún mensaje (humorístico interno).
167. Si llegas a `/admin` sin permisos, aparece perro guardián a tinta.
168. Si haces login fallido 3 veces, aparece "Respira, anda" con captcha.
169. Si tu contraseña tiene "12345", aparece "Por favor, no".
170. Si tu contraseña tiene "montaraz", aparece "Cariñoso pero peligroso".
171. Si tu contraseña tiene 30+ caracteres, sello "Fortaleza".
172. Si haces logout 3 veces seguidas en 5 min, aparece "¿Algo te preocupa?".
173. Si haces 50+ búsquedas en una sesión, sello "Buscador".
174. Si lees un artículo entero, sello "Lector".
175. Si escuchas un audio entero, sello "Escuchante".
176. Si subes una foto al diario, sello "Fotógrafo".
177. Si publicas trofeo, sello "Trofeo digital".
178. Si compartes cuaderno con amigo, sello "Generoso".
179. Si llamas a soporte, sello "Hablador".
180. Si nunca llamas a soporte en 1 año, sello "Independiente".
181. Si haces reseña 5⭐, sello "Entusiasta".
182. Si haces reseña 1⭐, sello "Honesto".
183. Si dejas reseña con foto, sello "Documentado".
184. Si moderas comentarios reportando un tóxico, sello "Custodio".
185. Si te apuntas al curso "Tratamiento ético de la pieza", sello "Ética".
186. Si te apuntas a 3 cursos, sello "Estudiante".
187. Si haces los 8 cursos básicos, sello "Diplomado".
188. Si pides el mismo producto 5 veces, aparece "¿Es para regalar?".
189. Si dejas 8 productos en cuaderno "Berrea 2026", aparece "Vas en serio".
190. Si tienes 5 cuadernos, sello "Cuadernista".
191. Si compras solo lead-free durante 6 meses, sello "Sin plomo".
192. Si compras solo sin muerte (mosca, hilo, vadeadores), sello "Catch & release".
193. Si tu morral está vacío 30 días seguidos, aparece "Vuelve cuando quieras".
194. Si activas modo Tarde de Campo 10 veces, sello "Madrugador".
195. Si compras antes de las 06:00, sello "Pedido al alba".
196. Si compras después de las 23:00, sello "Pedido al anochecer".
197. Si compras desde una IP de mar (geoip costa), sello "Salado".
198. Si compras desde IP montaña, sello "Cima".
199. Si compras desde isla, sello "Insular".
200. Si tu correo termina en `@gmail.com`, ningún mensaje (sin estigma).
201. Si tu correo es de un dominio de universidad, sello "Estudiante" si > 18.
202. Si tu correo es .gob/.gov, sello "Servidor público".
203. Si tu correo es de un dominio del sector (jara, sako, beretta), sello "Familia".
204. Si tu nombre contiene "Diana", sello "Diosa de la caza".
205. Si tu nombre contiene "Artemisa", sello "Diosa griega".
206. Si tu nombre contiene "Hubert", sello "Patrón".
207. Si tu apellido es uno de armería tradicional (Lanber, AYA, Larrañaga), sello "Familia armera".
208. Si tu apellido es de río español (Tajo, Sella, Duero), sello "Río que es tu apellido".
209. Si tu nombre tiene tilde, sello "Bien escrito".
210. Si tu día de cumpleaños coincide con el lanzamiento (algún día específico), sello "Tocayo de la casa".
211. Si tu cuenta cumple 1 año, sello "Aniversario 1".
212. 2 años: "Aniversario 2".
213. 5 años: "Aniversario 5: Maestre Eterno".
214. 10 años: "Aniversario 10: Patrimonio Inmaterial".
215. Si activas notificaciones push, sello "En sintonía".
216. Si haces tu primer pedido B2B, sello "Profesional".
217. Si activas passkey, sello "Sin contraseña".
218. Si activas 2FA, sello "Doble llave".
219. Si nunca activas notificaciones push, sello "Tranquilo".
220. Si tu primer pedido coincide con tu cumpleaños, sello "Regalo a mí mismo".

### 56.R. PROTOTIPO DE SCHEMA SANITY (PRINCIPALES TIPOS)

```ts
// schemas/product.ts
export default {
  name: 'product',
  type: 'document',
  title: 'Producto (editorial)',
  fields: [
    { name: 'slug', type: 'slug', source: 'name' },
    { name: 'name', type: 'string' },
    { name: 'family', type: 'reference', to: [{ type: 'family' }] },
    { name: 'brand', type: 'reference', to: [{ type: 'brand' }] },
    { name: 'curator', type: 'reference', to: [{ type: 'curator' }] },
    { name: 'leadImage', type: 'image' },
    { name: 'gallery', type: 'array', of: [{ type: 'image' }] },
    { name: 'cinemagraph', type: 'mux.video' },
    { name: 'model3d', type: 'file' },
    { name: 'editorial', type: 'array', of: [{ type: 'block' }] },
    { name: 'whyWeChose', type: 'array', of: [{ type: 'block' }] },
    { name: 'specs', type: 'array', of: [{ type: 'specRow' }] },
    { name: 'compatibility', type: 'array', of: [{ type: 'reference', to: [{ type: 'product' }] }] },
    { name: 'related', type: 'array', of: [{ type: 'reference', to: [{ type: 'product' }] }] },
    { name: 'magazinePosts', type: 'array', of: [{ type: 'reference', to: [{ type: 'magazinePost' }] }] },
    { name: 'tags', type: 'array', of: [{ type: 'string' }] },
    { name: 'origin', type: 'reference', to: [{ type: 'origin' }] },
    { name: 'sustainability', type: 'object', fields: [
      { name: 'leadFree', type: 'boolean' },
      { name: 'recycledMaterial', type: 'number' },
      { name: 'co2eq', type: 'number' }
    ]}
  ]
}
```

```ts
// schemas/magazinePost.ts
export default {
  name: 'magazinePost',
  type: 'document',
  fields: [
    { name: 'slug', type: 'slug' },
    { name: 'title', type: 'string' },
    { name: 'subtitle', type: 'string' },
    { name: 'heroImage', type: 'image' },
    { name: 'category', type: 'string', options: { list: ['Ensayo','Reportaje','Entrevista','Recetario','Atlas','Audio'] } },
    { name: 'author', type: 'reference', to: [{ type: 'author' }] },
    { name: 'publishedAt', type: 'datetime' },
    { name: 'body', type: 'array', of: [
      { type: 'block' },
      { type: 'image', fields: [{ name: 'caption', type: 'string' }] },
      { type: 'pullQuote' },
      { type: 'productCardEmbed' },
      { type: 'mapEmbed' },
      { type: 'audioEmbed' }
    ]},
    { name: 'audioFull', type: 'mux.audio' },
    { name: 'tags', type: 'array', of: [{ type: 'string' }] },
    { name: 'relatedProducts', type: 'array', of: [{ type: 'reference', to: [{ type: 'product' }] }] }
  ]
}
```

```ts
// schemas/expedition.ts
export default {
  name: 'expedition',
  type: 'document',
  fields: [
    { name: 'slug', type: 'slug' },
    { name: 'title', type: 'string' },
    { name: 'guide', type: 'reference', to: [{ type: 'guide' }] },
    { name: 'region', type: 'string' },
    { name: 'modality', type: 'string' },
    { name: 'difficulty', type: 'string', options: { list: ['Bajo','Medio','Alto','Extremo'] } },
    { name: 'dates', type: 'array', of: [{ type: 'datetime' }] },
    { name: 'price', type: 'number' },
    { name: 'spots', type: 'number' },
    { name: 'includes', type: 'array', of: [{ type: 'string' }] },
    { name: 'notIncluded', type: 'array', of: [{ type: 'string' }] },
    { name: 'recommendedKit', type: 'array', of: [{ type: 'reference', to: [{ type: 'product' }] }] },
    { name: 'mapEmbed', type: 'mapEmbed' },
    { name: 'gallery', type: 'array', of: [{ type: 'image' }] }
  ]
}
```

```ts
// schemas/course.ts
export default {
  name: 'course',
  type: 'document',
  fields: [
    { name: 'slug', type: 'slug' },
    { name: 'title', type: 'string' },
    { name: 'mode', type: 'string', options: { list: ['Online','Presencial','Híbrido'] } },
    { name: 'instructor', type: 'reference', to: [{ type: 'instructor' }] },
    { name: 'syllabus', type: 'array', of: [{ type: 'lesson' }] },
    { name: 'duration', type: 'number' },
    { name: 'price', type: 'number' },
    { name: 'startDates', type: 'array', of: [{ type: 'datetime' }] },
    { name: 'capacity', type: 'number' }
  ]
}
```

### 56.S. PROTOTIPO DE SCHEMA DRIZZLE (EXTRACTO)

```ts
import { pgTable, uuid, text, timestamp, integer, numeric, boolean, jsonb } from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  email: text('email').notNull().unique(),
  fullName: text('full_name'),
  locale: text('locale').default('es-ES'),
  currency: text('currency').default('EUR'),
  roles: jsonb('roles').default('[]'),
  hashedPassword: text('hashed_password'),
  totpSecret: text('totp_secret'),
  createdAt: timestamp('created_at').defaultNow(),
  deletedAt: timestamp('deleted_at')
})

export const products = pgTable('products', {
  id: uuid('id').primaryKey().defaultRandom(),
  sanityId: text('sanity_id').unique(),
  slug: text('slug').notNull().unique(),
  name: text('name').notNull(),
  brandId: uuid('brand_id'),
  familyId: uuid('family_id'),
  basePrice: numeric('base_price', { precision: 12, scale: 2 }).notNull(),
  currency: text('currency').default('EUR'),
  weightG: integer('weight_g'),
  status: text('status').default('active'),
  requiresLicence: boolean('requires_licence').default(false),
  createdAt: timestamp('created_at').defaultNow(),
  deletedAt: timestamp('deleted_at')
})

export const productVariants = pgTable('product_variants', {
  id: uuid('id').primaryKey().defaultRandom(),
  productId: uuid('product_id').notNull(),
  sku: text('sku').notNull().unique(),
  attrs: jsonb('attrs'),
  price: numeric('price', { precision: 12, scale: 2 }),
  stock: integer('stock').default(0),
  reserved: integer('reserved').default(0)
})

export const orders = pgTable('orders', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id'),
  email: text('email').notNull(),
  status: text('status').default('pending'),
  totalNet: numeric('total_net', { precision: 12, scale: 2 }),
  totalTax: numeric('total_tax', { precision: 12, scale: 2 }),
  totalGross: numeric('total_gross', { precision: 12, scale: 2 }),
  currency: text('currency').default('EUR'),
  stripePaymentIntentId: text('stripe_payment_intent_id'),
  paidAt: timestamp('paid_at'),
  shippedAt: timestamp('shipped_at'),
  createdAt: timestamp('created_at').defaultNow()
})

export const orderItems = pgTable('order_items', {
  id: uuid('id').primaryKey().defaultRandom(),
  orderId: uuid('order_id').notNull(),
  variantId: uuid('variant_id').notNull(),
  quantity: integer('quantity').notNull(),
  unitPrice: numeric('unit_price', { precision: 12, scale: 2 }).notNull()
})

export const subscriptions = pgTable('subscriptions', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').notNull(),
  tier: text('tier').notNull(),
  status: text('status').default('active'),
  pausedUntil: timestamp('paused_until'),
  stripeSubscriptionId: text('stripe_subscription_id'),
  startedAt: timestamp('started_at').defaultNow()
})

export const reviews = pgTable('reviews', {
  id: uuid('id').primaryKey().defaultRandom(),
  productId: uuid('product_id').notNull(),
  userId: uuid('user_id'),
  orderId: uuid('order_id'),
  rating: integer('rating').notNull(),
  body: text('body'),
  verified: boolean('verified').default(false),
  createdAt: timestamp('created_at').defaultNow()
})

export const trophies = pgTable('trophies', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').notNull(),
  kind: text('kind'),
  species: text('species'),
  takenAt: timestamp('taken_at'),
  region: text('region'),
  photoUrl: text('photo_url'),
  verified: boolean('verified').default(false)
})

export const wishlists = pgTable('wishlists', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').notNull(),
  name: text('name').notNull(),
  cover: text('cover').default('leather-black'),
  createdAt: timestamp('created_at').defaultNow()
})

export const wishlistItems = pgTable('wishlist_items', {
  id: uuid('id').primaryKey().defaultRandom(),
  wishlistId: uuid('wishlist_id').notNull(),
  variantId: uuid('variant_id').notNull(),
  note: text('note')
})

export const events = pgTable('events', {
  id: uuid('id').primaryKey().defaultRandom(),
  type: text('type').notNull(),
  payload: jsonb('payload'),
  actorId: uuid('actor_id'),
  createdAt: timestamp('created_at').defaultNow()
})
```

### 56.T. PROTOTIPO DE COMPONENTES STORYBOOK (EXTRACTO)

```tsx
// packages/ui/src/Button/Button.stories.tsx
import { Button } from './Button'

export default { component: Button, title: 'Atoms/Button' }

export const Primary = () => <Button variant="primary">Llévatelo al monte</Button>
export const Secondary = () => <Button variant="secondary">Apártalo 24 h</Button>
export const Tertiary = () => <Button variant="tertiary">Configurar</Button>
export const WithIcon = () => <Button leadingIcon="rifle">Configurar rifle</Button>
export const Loading = () => <Button loading>Cargando</Button>
export const Disabled = () => <Button disabled>No disponible</Button>
export const Magnetic = () => <Button variant="primary" magnetic>Magnético</Button>
export const Sizes = () => (
  <div className="flex gap-2 items-center">
    <Button size="xs">XS</Button>
    <Button size="sm">SM</Button>
    <Button size="md">MD</Button>
    <Button size="lg">LG</Button>
    <Button size="xl">XL</Button>
  </div>
)
```

```tsx
// packages/ui/src/ProductCard/ProductCard.stories.tsx
import { ProductCard } from './ProductCard'

export default { component: ProductCard, title: 'Molecules/ProductCard' }

export const Default = () => (
  <ProductCard
    name="Sako 90 Hunter"
    eyebrow="Rifle de caza mayor"
    price={2450}
    image="/sako-90.avif"
    bRoll="/sako-90-broll.avif"
    seal="Hand-tested"
    stock={4}
    curator="Alfredo"
  />
)

export const LowStock = () => <ProductCard {...Default.args} stock={1} />
export const OutOfStock = () => <ProductCard {...Default.args} stock={0} />
export const LimitedEdition = () => <ProductCard {...Default.args} seal="Edición limitada" />
```

### 56.U. NORMAS DE DOCUMENTACIÓN

#### 56.U.1. ADR template
```md
# ADR-XXX: Título corto
Fecha: YYYY-MM-DD
Estado: Propuesto / Aceptado / Rechazado / Reemplazado por ADR-YYY

## Contexto
Qué problema queremos resolver y por qué ahora.

## Decisión
Qué hemos decidido y por qué.

## Consecuencias
Qué cambia con esta decisión: positivas, negativas, neutras.

## Alternativas consideradas
A, B, C — por qué no.
```

#### 56.U.2. Runbook template
```md
# Runbook: [Nombre del incidente]
## Síntomas
## Diagnóstico rápido
## Mitigación inmediata
## Diagnóstico profundo
## Resolución
## Post-mortem
```

#### 56.U.3. PRD template (Product Requirements Document)
```md
# PRD-XXX: [Nombre]
## Objetivo
## Hipótesis
## Métrica de éxito
## Alcance
## Fuera de alcance
## Diseño
## Implementación
## Riesgos
## Plan de lanzamiento
```

### 56.V. ENDPOINT MAP (RESUMEN API/SERVER ACTIONS)

| Acción | Tipo | Path |
|---|---|---|
| Listar productos | RSC | `app/(shop)/tienda/[seccion]/page.tsx` |
| Detalle producto | RSC | `app/(shop)/producto/[slug]/page.tsx` |
| Añadir al morral | Server Action | `addToMorralAction` |
| Quitar del morral | Server Action | `removeFromMorralAction` |
| Cambiar cantidad | Server Action | `setQuantityAction` |
| Iniciar checkout | Server Action | `startCheckoutAction` |
| Confirmar pago | Server Action | `confirmPaymentAction` |
| Crear cuenta | Server Action | `signUpAction` |
| Iniciar sesión | Server Action | `signInAction` |
| Recuperar contraseña | Server Action | `recoverPasswordAction` |
| Subir licencia | Server Action | `uploadLicenceAction` |
| Crear cuaderno | Server Action | `createWishlistAction` |
| Añadir a cuaderno | Server Action | `addToWishlistAction` |
| Crear entrada diario | Server Action | `createDiaryEntryAction` |
| Publicar trofeo | Server Action | `publishTrophyAction` |
| Reservar expedición | Server Action | `bookExpeditionAction` |
| Apuntarse a curso | Server Action | `enrollCourseAction` |
| Suscribirse al Avituallamiento | Server Action | `subscribeAvituallamientoAction` |
| Pausar/cancelar suscripción | Server Action | `pauseSubscriptionAction` |
| Crear review | Server Action | `createReviewAction` |
| Reportar comentario | Server Action | `reportCommentAction` |
| Buscar | RSC / Algolia | `/buscar?q=` |
| Suscribir newsletter | Server Action | `subscribeNewsletterAction` |
| Stripe webhook | API Route | `/api/webhooks/stripe` |
| Sanity webhook | API Route | `/api/webhooks/sanity` |
| Inventory webhook | API Route | `/api/webhooks/inventory` |
| Health | API Route | `/api/health` |
| OG image dinámica | API Route | `/api/og` |

### 56.W. CHECKLIST AAA POR PANTALLA (RESUMEN)

#### 56.W.1. Home
- Encabezados con jerarquía.
- Hero con texto alt para vídeo.
- Skip-link "ir a contenido".
- Carrouseles con controles previo/siguiente accesibles.

#### 56.W.2. Catálogo
- Filtros con `aria-controls`.
- Resultados con `role="list"` y `aria-live`.
- Cards con `<article>`.

#### 56.W.3. PDP
- Galería con focos y aria-label.
- Selector con `role="radiogroup"`.
- Spec table con caption.

#### 56.W.4. Checkout
- Forms con labels.
- Errores con `aria-describedby`.
- Pasos numerados con `<ol>`.

#### 56.W.5. Cuenta
- Tabs con `aria-selected`.
- Tablas accesibles.

#### 56.W.6. Magazine
- Audio con transcripción.
- Reading order correcto.

#### 56.W.7. Atlas
- Mapa con alternativa textual: listado de marcadores accesible.
- Controles de teclado.

#### 56.W.8. Configurador
- Pasos accesibles.
- Cambios anunciados con `aria-live`.
- Fallback 2D.

### 56.X. ESTRATEGIA DE LANZAMIENTO

#### 56.X.1. Pre-launch (8 semanas antes)
- Landing minimalista con countdown + newsletter.
- Press kit en `/prensa`.
- 200 socios fundadores con invitación personal.
- Sesión fotográfica en cabaña, Sella y monte de Cáceres.

#### 56.X.2. Soft launch (200 socios)
- Acceso 4 semanas antes del público.
- Recoger feedback con cuestionario + Calls.
- Iterar.

#### 56.X.3. Launch
- Comunicado a prensa especializada.
- Magazine inaugural con 12 artículos.
- 5 expediciones abiertas a reserva.

#### 56.X.4. Post-launch (8 semanas)
- Iteraciones semanales.
- Métricas diarias.
- Soporte ampliado.

### 56.Y. COMUNICACIÓN INTERNA

#### 56.Y.1. Reuniones
- Lunes 10:00 — planning 30 min.
- Miércoles 11:00 — design crit 45 min.
- Viernes 17:00 — demo + retro 30 min.

#### 56.Y.2. Async
- Notion para docs.
- Linear para issues.
- Slack para conversación.

#### 56.Y.3. On-call
- Rotación semanal.
- Responsabilidad: incidentes P0/P1.

### 56.Z. ANEXOS LITERARIOS (COPY DE INSPIRACIÓN)

#### 56.Z.1. Citas para magazine
- *"La caza es un sacramento ecológico."* — Ortega y Gasset.
- *"Pescar es el arte de templar la espera."* — Anónimo.
- *"El río es el mejor instructor."* — Maclean.
- *"Todo cazador descubre, antes o después, que no caza para matar; mata para haber cazado."* — Ortega y Gasset.
- *"En cada amanecer hay un instrumento musical recién afinado."* — Delibes.

#### 56.Z.2. Frases internas
- "El monte no espera."
- "Si dudas, no dispares."
- "La caña es una pluma."
- "El cuchillo no se presta."
- "El perro no se cambia."
- "El puesto es sagrado."

#### 56.Z.3. Frases de error 500
- "Se rompió algo nuestro. Estamos al teléfono con el armero."
- "El servidor se ha ido al monte. Vuelve en un rato."

#### 56.Z.4. Frases de error 404
- "Aquí no hay rastro. Vuelve por la senda principal."
- "Esto se nos ha escapado. Pero hay perro olfateando."

#### 56.Z.5. Splash welcome
- "Bienvenido al monte. Cierra la puerta al entrar."


---

## 57. ANATOMÍA DETALLADA DE CADA PÁGINA

### 57.1. `/` Home — DOM tree resumido
- `<header />`
- `<main>`
  - `<section data-scene="preloader" />`
  - `<section data-scene="hero" />`
  - `<section data-scene="submarcas" />`
  - `<section data-scene="featured-drop" />`
  - `<section data-scene="manifiesto" />`
  - `<section data-scene="atlas-preview" />`
  - `<section data-scene="curador-mes" />`
  - `<section data-scene="configurador-preview" />`
  - `<section data-scene="luna-mareas" />`
  - `<section data-scene="ugc-voces" />`
  - `<section data-scene="avituallamiento" />`
  - `<section data-scene="cuaderno-bitacora" />`
- `<footer data-scene="ruta-nocturna" />`

### 57.2. `/tienda` Catálogo madre
- Hero panorámico de cada submarca cycling.
- Cards madre (Monte, Aguas, Sendas, Cocina, Cuchillería, Aula).
- "Recomendado para ti" si logueado.
- "Drops semanales".
- "Lo más curado del mes".
- Footer.

### 57.3. `/tienda/caza` Monte
- Hero con cita de Tomé.
- Subfamilias: Munición, Armas, Ópticas, Ropa, Calzado, Mochilas, Cuchillería, Camping.
- Microensayo.
- Atlas regiones cinegéticas.
- Productos destacados.
- Magazine relacionada.

### 57.4. `/tienda/pesca` Aguas
- Hero con cita de Inés.
- Subfamilias: Cañas, Carretes, Hilos, Señuelos, Moscas, Ropa pesca, Vadeadores.
- Microensayo.
- Atlas ríos truchales / mar.
- Productos destacados.

### 57.5. `/tienda/montaña` Sendas
- Hero con foto Pirineos.
- Subfamilias: Ropa, Calzado, Camping, Iluminación, Cuchillería, Electrónica.
- Productos destacados.

### 57.6. `/tienda/cocina` Cocina
- Hero foto despiece.
- Subfamilias: Cuchillería de cocina, Conservas, Curados, Aceites, Tablas, Afilado.
- Microensayo.

### 57.7. `/tienda/cuchilleria` Cuchillería
- Filosofía + retratos artesanos.
- Filtros: artesano, tipo, mango, hoja, longitud.
- Catálogo.

### 57.8. `/tienda/aula` Aula
- Listado cursos.
- Calendario.
- Profesores.

### 57.9. `/tienda/[seccion]/[familia]/[subfamilia]?`
- Estructura jerárquica.
- Breadcrumbs.
- Filtros contextuales.

### 57.10. `/producto/[slug]` PDP
- (Ver sección 16.)

### 57.11. `/configurador/[tipo]` Configurador
- (Ver sección 17.)

### 57.12. `/morral` Morral
- Lista de items.
- Subtotales.
- Botón Caja.

### 57.13. `/caja` Caja (Checkout)
- (Ver sección 20.)

### 57.14. `/caja/confirmacion/[id]`
- Estado.
- Resumen.
- Próximos pasos.

### 57.15. `/revista` Magazine madre
- Hero editorial.
- Última pieza destacada.
- Listado con filtros.
- "Lo más leído del mes".

### 57.16. `/revista/[slug]` Artículo
- (Ver sección 23.)

### 57.17. `/atlas` Atlas madre
- Mapa interactivo.
- Capas.
- Regiones.

### 57.18. `/atlas/[region]` Región
- Mapa zoom.
- Lista ríos / cotos / espacios protegidos.
- Magazine relacionada.
- Productos relacionados.

### 57.19. `/atlas/coto/[id]` Coto
- Mapa.
- Especies.
- Modalidades.
- Temporadas.
- Aviso de propiedad privada.

### 57.20. `/atlas/rio/[id]` Río
- Mapa.
- Especies.
- Mejor época.
- Permisos.
- Coordenadas aproximadas.

### 57.21. `/expediciones` Expediciones madre
- Calendario.
- Próximas jornadas.
- Filtros.

### 57.22. `/expediciones/[slug]` Expedición
- (Ver sección 24.)

### 57.23. `/aula` Aula madre
- Listado.
- Profesores.

### 57.24. `/aula/[slug]` Curso
- (Ver sección 30.)

### 57.25. `/club` Club Maestre
- (Ver sección 28.)

### 57.26. `/club/avituallamiento` Avituallamiento
- (Ver sección 29.)

### 57.27. `/diario` Diario público
- Solo logueados.
- Vista timeline.

### 57.28. `/trofeos` Pared de trofeos
- (Ver sección 27.)

### 57.29. `/calendario` Calendario
- (Ver sección 26.)

### 57.30. `/manifiesto`
- Página animada con scroll-telling.

### 57.31. `/origen`
- Tres fundadores.
- Línea temporal.

### 57.32. `/prensa`
- Press kit descargable.
- Cobertura.

### 57.33. `/contacto`
- Form.
- Datos casa Madrid / Asturias.

### 57.34. `/faq`
- Top 30 preguntas con schema FAQPage.

### 57.35. `/garantia`
- Política Montaraz.

### 57.36. `/envios`
- Tabla tarifas por país.

### 57.37. `/devoluciones`
- Self-RMA.

### 57.38. `/sostenibilidad`
- Pillares + dataviz.

### 57.39. `/legal`
- Términos.

### 57.40. `/aviso-armas`
- Información detallada.

### 57.41. `/etica`
- Compromiso ético.

### 57.42. `/privacidad`
- Política RGPD.

### 57.43. `/cookies`
- Política y banner.

### 57.44. `/terminos`
- Términos y condiciones.

### 57.45. `/buscar`
- Resultados federados.

### 57.46. `/quien-es-quien`
- Curadores.

### 57.47. `/cuenta` y subpáginas
- (Ver sección 21.)

### 57.48. `/entrar` Login
- Form único.
- Magic link + Google + Apple + Passkey.

### 57.49. `/registro`
- Form.
- Double opt-in.

### 57.50. `/recuperar`
- Form.

### 57.51. `/verificar/[token]`
- Verificación.

### 57.52. `/numeros`
- Métrica pública opcional.

### 57.53. `/coming-soon` (pre-launch)
- Countdown + newsletter.

---

## 58. CATÁLOGO COMPLETO DE COMPONENTES UI

### 58.1. Botones (variantes detalladas)
- Primary / Secondary / Tertiary / Destructive / Subtle / Magnetic.
- Tamaños xs (24) / sm (32) / md (40) / lg (48) / xl (56).
- Estados default / hover / focus / active / disabled / loading / success.
- Icon-only.
- With leading / trailing icon.
- Full width.
- Animations: hover lift, press shrink, ripple, magnetic pull.

### 58.2. Forms
- Input text (label flotante, helper, error).
- Input password (toggle visibility, fortaleza).
- Input email.
- Input phone (con prefijo internacional).
- Input number (stepper).
- Input date (con calendario).
- Input range (slider 1 thumb, slider 2 thumbs).
- Textarea (autoresize).
- Select (combobox con búsqueda).
- Multi-select.
- Checkbox.
- Radio.
- Switch.
- File upload (drag&drop, preview, progress).
- Image upload (crop in place).
- Address autocomplete (Mapbox).
- Search input (con sugerencias).

### 58.3. Layout primitives
- Container (max 1440).
- Section (con padding sistemático).
- Stack (vertical/horizontal).
- Grid (12 cols).
- Sub-grid (4/6/8/12).
- Spread.
- Divider (filete fino, filete decorativo).
- Spacer.

### 58.4. Navegación
- Header sticky.
- Mega menu por categoría con preview.
- Mobile drawer.
- Side nav (cuenta, admin).
- Breadcrumbs.
- Tabs.
- Stepper.
- Pagination.
- Anchor links (TOC).

### 58.5. Overlays
- Dialog.
- AlertDialog.
- Drawer.
- Sheet.
- Popover.
- Tooltip.
- HoverCard.
- Toast (Sonner).
- DropdownMenu.
- ContextMenu.

### 58.6. Cards
- ProductCard.
- ProductCardCompact.
- ProductCardEditorial.
- MagazineCard.
- MagazineCardLarge.
- TrophyCard.
- CourseCard.
- ExpeditionCard.
- RiverCard.
- CotoCard.
- AuthorCard.
- CuratorCard.
- BrandCard.
- ReviewCard.
- ComparisonCard.

### 58.7. Data display
- DataTable (TanStack Table).
- SpecTable.
- DescriptionList.
- Stat block.
- Timeline.
- ProgressBar.
- Histogram (reviews).
- LunarPhase.
- TideChart.
- WindRose.
- BalisticCurve.

### 58.8. Feedback
- Skeleton.
- EmptyState (con ilustración a tinta).
- ErrorState.
- SuccessState.
- ProgressIndicator.

### 58.9. Disclosure
- Accordion.
- Collapsible.
- TruncatedText (con "Leer más").

### 58.10. Media
- Image (con zoom).
- Carousel (snap).
- LightBox.
- 360View.
- VideoPlayer (Mux).
- AudioPlayer (Mux).

### 58.11. Forms compuestos
- AddressForm.
- PaymentForm (Stripe).
- LicenceUploadForm.
- ReviewForm.
- DiaryEntryForm.
- TrophyForm.

### 58.12. Marca / decoración
- Logo.
- WaxSeal.
- TopoLine.
- Compass.
- MoonIcon.
- AnimatedQuote.

### 58.13. Especiales
- ProductConfigurator3D.
- AtlasMap.
- LunarCalendar.
- TideTable.
- KitBuilder.

### 58.14. Patrones
- Hero.
- HeroEditorial.
- HeroVideo.
- HeroMap.
- HeroProduct.
- SectionTitle.
- SectionEyebrow.
- PullQuote.
- DropCap.
- SideNote.
- FootNote.
- ManifestoLine.

### 58.15. Animadores wrapper
- FadeIn, SlideUp, SlideRight, SlideLeft.
- Magnetic.
- Tilt.
- Marquee.
- Reveal.
- TypeOn.
- SplitText.
- Sticky.
- Pin.
- Scrub.
- ParallaxLayer.

### 58.16. Tokens visibles en Storybook
- Color palette.
- Typography scale.
- Spacing.
- Radius.
- Elevation.
- Animation easings.

### 58.17. Iconos categorizados
- Acciones (40+).
- Categorías producto (60+).
- Estados (20+).
- Atmósfera (16).
- Cartográficos (24).
- Fauna (28).

### 58.18. Estado por componente
- Cada componente con: default + hover + focus + active + disabled + loading + success + error + reduced-motion.

### 58.19. Documentación
- Props tipadas.
- Ejemplos.
- Edge cases.

### 58.20. A11y por componente
- Cada componente con anotaciones de aria-* y keyboard handling.

---

## 59. CATÁLOGO COMPLETO DE ANIMACIONES (DETALLADO)

### 59.1. Animaciones del home (extensión)
- 16 animaciones únicas (ver sección 14).
- Cada una con: trigger, easing, duration, fallback reduced-motion, prop budget.

### 59.2. Animaciones del catálogo
- Card hover swap (200 ms).
- Filter chip on/off (160 ms).
- Filter limpiar (lluvia 400 ms).
- Infinite scroll loading (skeleton breathing 1.2 s loop).

### 59.3. Animaciones del PDP
- Galería sticky scroll-driven.
- Variant cross-fade.
- Stock animation (silueta animales).
- Add-to-morral parabólica.
- Visor 3D entrada (fade + zoom).
- AR badge pulse.

### 59.4. Animaciones del configurador
- Snap fit + halo.
- Conflict bounce.
- Stepper progress spring.
- 3D camera tour.
- Save link copied toast.

### 59.5. Animaciones del checkout
- Step accordion open/close.
- Validation check stroke.
- Error shake.
- Payment loading.
- Success seal drop.

### 59.6. Animaciones del Atlas
- Map zoom on scroll.
- Marker pop scale spring.
- Style cross-fade.
- Region outline draw.

### 59.7. Animaciones del Magazine
- Drop cap settle.
- Pull quote bg emerge.
- Audio player sticky.
- Reading progress bar.
- Scroll-driven hero parallax.

### 59.8. Animaciones del Calendar
- Month swipe transitions.
- Day zoom.
- Moon clip-path morph.
- Tide wave animation.

### 59.9. Animaciones del Diary / Trophies
- Entry flip-in.
- Trophy hover rotate.
- Wall perspective.

### 59.10. Animaciones del Club
- Crown drop.
- Tier upgrade celebration (leaves shower).
- Maestre badge glow pulse.

### 59.11. Animaciones del Avituallamiento
- Box open 3D.
- Contents reveal staggered.

### 59.12. Animaciones del newsletter
- Pluma fall.
- Underline draw on input focus.
- Submit seal stamp.

### 59.13. Animaciones globales
- Cursor halo lag.
- Magnetic buttons.
- Tilt cards.
- Reveal on scroll.
- Page transition (curtain).
- Header sticky reveal.
- Reading progress.
- Section indicator.
- Back-to-top.
- Loading bars.

### 59.14. Animaciones del modo Tarde de Campo
- Color shift (600 ms).
- Linterna icon spin.

### 59.15. Animaciones del cursor
- Default → text caret → product (+) → drag (4 arrows) → rotate (circular arrows) → aim (cross) → swim (fish).

### 59.16. Animaciones de partículas
- Hojas otoño.
- Polen.
- Polvo de luz.
- Lluvia.
- Niebla.
- Burbujas.
- Mariposas (primavera).

### 59.17. Animaciones de shaders
- Heat haze.
- Water ripple.
- Dither bg.
- Vignette.

### 59.18. Animaciones de iconos
- Stroke draw on enter.
- Pulse on click.
- Color shift on hover.

### 59.19. Animaciones de iconos brand
- Logo dibujo path.
- Brújula apuntar.
- Pluma cae.
- Hoja gira.

### 59.20. Animaciones de avatares
- Maestre crown glow.
- Avatar hover scale 1.04.

### 59.21. Animaciones de tablas
- Row expand.
- Sort indicator anim.

### 59.22. Animaciones de error 404
- Perro olfateando.

### 59.23. Animaciones de error 500
- Barril rajado.

### 59.24. Animaciones de éxito
- Lluvia de hojas.
- Sello cae.

### 59.25. Animaciones de easter eggs
- (Ver sección 37.)

### 59.26. Animaciones reduced-motion
- Todas reducidas a fade 200 ms.

### 59.27. Animaciones mobile
- Parallax sin pesado.
- 3D sólo en preview.

### 59.28. Animaciones tablet
- Intermedio.

### 59.29. Animaciones de impresoras (vista print)
- Sin animaciones.

### 59.30. Documentación
- `/docs/animations` con cada entrada.

### 59.31. Telemetría
- Trackeo de uso de animaciones (sin PII).

### 59.32. Test de animaciones
- Visual regression.
- Reduced motion path.

### 59.33. Performance
- 60 fps mínimo.
- Bypass si fps drop.

### 59.34. Política de motion sickness
- Toggle "tranquilo" en footer.

### 59.35. Glosario de animaciones
- Cada animación tiene nombre evocador para uso en docs y comunicación interna.

---

## 60. CALENDARIO DE CONTENIDO AÑO 1

### 60.1. Q1 (ene-mar)
- Magazine: 12 piezas.
- Drops: 2 (cuchillería personalizada Pirineo, mosca seca atada).
- Cursos: 4.
- Expediciones: 6.
- Eventos: apertura Casa Madrid.
- Newsletters: 3 mensuales + 4 extras.

### 60.2. Q2 (abr-jun)
- Magazine: 12 piezas.
- Drops: 2 (pesca a mosca, ropa primavera).
- Cursos: 6.
- Expediciones: 8.
- Eventos: Mes de la mosca seca.
- Newsletters: 3 + 4 extras.

### 60.3. Q3 (jul-sep)
- Magazine: 12 piezas.
- Drops: 2 (media veda, berrea).
- Cursos: 4.
- Expediciones: 12 (berrea).
- Eventos: Inauguración Casa Asturias.
- Newsletters: 3 + 4 extras.

### 60.4. Q4 (oct-dic)
- Magazine: 12 piezas.
- Drops: 3 (cuchillería navideña, Avituallamiento, lotes regalo).
- Cursos: 6.
- Expediciones: 10.
- Eventos: San Hubert + Cena Maestre.
- Newsletters: 3 + 6 extras (navidad).

### 60.5. Total año 1
- 48 piezas magazine.
- 9 drops.
- 20 cursos.
- 36 expediciones.
- 12 newsletters mensuales + ~18 extras.
- 4 eventos físicos.

### 60.6. Editores
- 1 jefe editorial (full).
- 4 colaboradores (freelance).
- 2 curadores.

### 60.7. Producción
- 1 mes anticipación piezas grandes.
- 2 semanas piezas medianas.
- 1 semana newsletters.

### 60.8. Audios
- Grabación trimestral.
- 12 audios/año.

### 60.9. Vídeos
- 6 vídeos/año (documentales).
- Producción cada 2 meses.

### 60.10. Fotografía
- 4 sesiones lifestyle/año.
- Producto: rolling.

### 60.11. KPI editorial
- Tiempo en página >4 min.
- Audio completion >50 %.
- CTR a producto >5 %.
- Newsletter open >40 %.

### 60.12. Calendario público
- `/revista` muestra próximos lanzamientos.

### 60.13. Coordinación
- Pipeline en Notion con estados (idea → outline → escrito → editado → publicado).

### 60.14. Briefs editoriales
- Cada pieza con brief de 1 página.

### 60.15. Derechos
- Autores ceden uso editorial Montaraz.
- Imágenes con licencia clara.

---

## 61. RUNBOOKS DETALLADOS

### 61.1. RB-01 — Pago Stripe fallido
- Detección: Sentry alerta o usuario reporta.
- Pasos:
  1. Verificar Stripe Dashboard.
  2. Comprobar webhook.
  3. Verificar logs Axiom.
  4. Revisar payment intent.
  5. Reintentar.
  6. Si no resoluble, contactar usuario.
- KPI: resolución < 30 min.

### 61.2. RB-02 — Stock erróneo
- Detección: usuario reporta o aviso interno.
- Pasos:
  1. Auditar movimientos en `inventory`.
  2. Reasignar entre warehouses si posible.
  3. Notificar usuarios afectados.
  4. Reembolso si necesario.

### 61.3. RB-03 — Pedido sospechoso
- Detección: Stripe Radar o flag manual.
- Pasos:
  1. Manual review.
  2. Solicitar licencia/documento si arma.
  3. Verificar IP/país.
  4. Aprobar/rechazar.

### 61.4. RB-04 — DDoS sospechoso
- Detección: Cloudflare alerta.
- Pasos:
  1. Activar "I'm under attack mode".
  2. Investigar fuente.
  3. Bloquear IPs/ASN.

### 61.5. RB-05 — Bot abusivo en formularios
- Detección: rate-limit + captcha resolución.
- Pasos:
  1. Endurecer captcha.
  2. Bloquear IP/ASN.

### 61.6. RB-06 — Comentario tóxico viral
- Detección: reporte + Perspective.
- Pasos:
  1. Eliminar.
  2. Banear.
  3. Investigar campañas coordinadas.

### 61.7. RB-07 — Caída Sanity
- Detección: build fail.
- Pasos:
  1. ISR mantiene contenido viejo.
  2. Esperar restauración.
  3. Postmortem.

### 61.8. RB-08 — Caída CDN
- Detección: Synthetics.
- Pasos:
  1. Failover Cloudflare.
  2. Comunicar.

### 61.9. RB-09 — Email transaccional cae
- Detección: Resend status.
- Pasos:
  1. Failover Postmark.
  2. Comunicar.

### 61.10. RB-10 — Devolución crítica
- Detección: usuario molesto.
- Pasos:
  1. Escalación a manager.
  2. Compensación.
  3. Postmortem.

### 61.11. RB-11 — Producto incorrecto enviado
- Detección: usuario.
- Pasos:
  1. Disculpa inmediata.
  2. Envío correcto express.
  3. No exigir devolución del incorrecto (regalo si poco valor).

### 61.12. RB-12 — Producto dañado en envío
- Detección: foto del usuario.
- Pasos:
  1. Disculpa.
  2. Reemplazo.
  3. Reclamación a courier.

### 61.13. RB-13 — Producto agotado tras compra
- Detección: stock race condition.
- Pasos:
  1. Disculpa.
  2. Opciones: esperar restock + descuento o reembolso.

### 61.14. RB-14 — Licencia armera caducada en pedido
- Detección: validación.
- Pasos:
  1. Contactar usuario.
  2. Solicitar renovada.
  3. Apartar producto 7 días.

### 61.15. RB-15 — Sospecha de fraude armera
- Pasos:
  1. Manual review.
  2. Notificar autoridad si patrón claro.
  3. Logs preservados.

### 61.16. RB-16 — Comunicación de incidente público
- Pasos:
  1. Detección.
  2. Mitigación.
  3. Comunicación honesta en status.montaraz.com y X.
  4. Postmortem en 7 días.

### 61.17. RB-17 — Migración DB
- Pasos:
  1. Migration en staging.
  2. Backup pre-deploy.
  3. Deploy con feature flag.
  4. Validación.
  5. Rollback ready.

### 61.18. RB-18 — Restore desde backup
- Pasos:
  1. Aislamiento.
  2. PITR.
  3. Validación checksum.
  4. Comunicación.

### 61.19. RB-19 — Phishing impersonación
- Pasos:
  1. Take-down request.
  2. Aviso a usuarios.

### 61.20. RB-20 — Brecha de datos sospechada
- Pasos:
  1. Aislamiento.
  2. Auditoría.
  3. Notificación a AEPD dentro de 72 h si confirmado.
  4. Comunicación pública.

---

## 62. LIBRERÍA DE COPY DEEP-DIVE

### 62.1. Headlines por familia (10 variantes cada una)
- Munición:
  - *"La pólvora también tiene historia."*
  - *"Cada cápsula, una decisión."*
  - *"Calibres con conciencia."*
  - *"Lo que llevas en el cargador importa más que el calibre."*
  - *"Honestidad en la recámara."*
  - *"Bala maciza, decisión sobria."*
  - *"Bala expansiva, respuesta exacta."*
  - *"Templanza balística."*
  - *"Plomo o cobre: tú eliges."*
  - *"Munición para quien medita el tiro."*

- Rifles:
  - *"Heredable."*
  - *"Templado para tu mano."*
  - *"El arma no se elige rápido."*
  - *"Un rifle también se siente."*
  - *"Lo que cazas con calma, dura más."*
  - *"Acción manual, conciencia manual."*
  - *"Para tres generaciones."*
  - *"Equilibrado de fábrica, balanceado por ti."*
  - *"Honestidad del acero."*
  - *"Llevarás este rifle a tu nieto."*

- Cañas de mosca:
  - *"La caña es una pluma."*
  - *"Templada en cuatro toneladas de paciencia."*
  - *"Una caña no se compra: se calza."*
  - *"Cargada por el viento, no por la fuerza."*
  - *"Lo que se nota cuando se siente."*
  - *"Caña de mosca: música de muñeca."*
  - *"Lo que la trucha respeta."*
  - *"Para ríos que aún tienen nombre."*
  - *"Acción media: poesía pura."*
  - *"Acción rápida: poesía atlética."*

- Cuchillería:
  - *"Un cuchillo bueno se hereda."*
  - *"Lo que el monte pide al cinturón."*
  - *"Hoja templada, mango bien sentado."*
  - *"Un filo no engaña."*
  - *"Pallarès Solsona: el cuchillo que abre la sobremesa."*
  - *"Forja honesta."*
  - *"Bohler, Sandvik, Damasco: nombres que pesan."*
  - *"Tu mano, su mango."*
  - *"Lo afilado no se discute."*
  - *"Un mango de boj, una herencia."*

- Ópticas:
  - *"Mira limpio, dispara limpio."*
  - *"Cristal alpino para retícula firme."*
  - *"Tu ojo merece esto."*
  - *"Magnificación con templanza."*
  - *"Crepúsculo claro."*
  - *"Retícula iluminada, pulso firme."*
  - *"Para distancias que duelen."*
  - *"Schott, Schmidt, Swarovski: el alfabeto del rececho."*
  - *"Ojo de águila empacado en aluminio."*
  - *"Si la duda apunta, la óptica decide."*

- Ropa caza:
  - *"Goretex, sí, pero con manga larga."*
  - *"Camo que respeta la luz."*
  - *"Capas para Cantábrico, capas para Extremadura."*
  - *"Silencio textil."*
  - *"Bolsillos pensados para cargador y mosca."*
  - *"Ropa con costuras para guantes torpes."*
  - *"Lo que aguanta zarza."*
  - *"Lo que no cruje al andar."*
  - *"Sec, Sec, Sec."*
  - *"Caza de pluma: ropa de pluma."*

- Ropa pesca:
  - *"Lo que no se moja, no se moja del todo."*
  - *"Vadeadores que no cuentan."*
  - *"Capas para río bravo."*
  - *"Bolsillos pensados para mosca y bajos."*
  - *"Lana cantábrica."*
  - *"Goretex Pro para días largos."*
  - *"Lo que se seca en una hora."*
  - *"Botas wading: el contrato más serio."*
  - *"Térmico para el alba."*
  - *"Sombrero que no se va al primer viento."*

### 62.2. Microcopy de error (50+ variantes)
- "Tarjeta rechazada. Pruébalo con otra."
- "La dirección no nos cuadra. Verifica el código postal."
- "Esto no es válido. Vuelve a intentarlo."
- "Falta un dato. ¿Te ayudo a completarlo?"
- "No reconocemos esa licencia. Sube el PDF de la oficial."
- "Cupón caducado. Lo guardamos para la próxima."
- "Cantidad mayor de la disponible. Hemos ajustado al stock real."
- "Demasiados intentos. Espera 60 segundos."
- "Sesión expirada. Vuelve a entrar."
- "Email no encontrado. ¿Te registras?"
- "Contraseña incorrecta. Intenta de nuevo o recupérala."
- "Algo se ha caído. Estamos en ello."
- "Sin conexión. Te guardamos lo que llevas."
- "Esta página se ha mudado. Te llevamos al sitio bueno."
- "Aviso: este producto requiere licencia. Súbela en el checkout."
- "El archivo es muy pesado. Máximo 10 MB."
- "Formato no soportado. Usa PDF o JPG."
- "Solo letras y espacios, por favor."
- "El número que escribes no es un teléfono español. ¿Es internacional? Añade +XX."
- "Necesitamos un email válido para escribirte."
- "La contraseña debe tener al menos 12 caracteres."
- "Solicita un nuevo enlace si no te llegó."
- "Demasiado tarde para modificar este pedido. Llámanos: 91 123 45 67."
- "Aún no podemos enviarlo a tu país. Estamos en ello."
- "Aún no hay valoraciones de este producto. ¿Lo estrenas?"
- "El curso ya empezó. La próxima convocatoria es el [fecha]."
- "Esa expedición está completa. Apúntate a la lista de espera."
- "Necesitas estar logueado para usar esta función."
- "Necesitas ser Maestre para ver esto."
- "Verifica tu email antes de seguir."
- "Sin conexión a Stripe. Estamos al teléfono con ellos."
- "El archivo subido parece dañado. Inténtalo de nuevo."
- "No puedes valorar un producto que no compraste."
- "Has alcanzado el límite mensual."
- "Algo bloqueó tu compra. Si no es seguridad de tu banco, llámanos."
- "Servicio temporalmente no disponible. Inténtalo en 5 min."
- "Solo aceptamos un código de descuento por pedido."
- "Pedido cancelado. Reembolso en 3-5 días hábiles."
- "No se puede pausar la suscripción más de 3 meses."
- "Has solicitado demasiados reembolsos. Hablamos por chat."
- "Tu cuaderno está lleno. Crea otro o quita algo."
- "Has subido la foto al revés. Rótala antes de continuar."
- "Si crees que esto es un error, escríbenos."
- "Tu navegador no soporta esto. Prueba en Chrome o Safari recientes."
- "Tu dispositivo no soporta WebGL2. Te mostramos la versión 2D."
- "Geolocalización no disponible. Selecciona ciudad manualmente."
- "Token caducado. Vuelve a generar el enlace."
- "Datos no válidos. Repasa los campos marcados."
- "Aún no hay suficientes datos para esta gráfica."
- "Aún no hay capturas en tu diario."

### 62.3. Microcopy de éxito (40+ variantes)
- "Hecho."
- "Listo, camino del puesto."
- "Apartado. Te aviso."
- "Suscripción activa. Próxima caja: [fecha]."
- "Cuaderno guardado."
- "Trofeo publicado."
- "Diario actualizado."
- "Datos guardados."
- "Licencia validada."
- "Pago confirmado."
- "Email verificado."
- "Has subido a Maestre. Bienvenido."
- "Tu mensaje está en Tomé."
- "Comentario publicado."
- "Comentario reportado. Gracias."
- "Bajado del Avituallamiento. Vuelve cuando quieras."
- "Cuenta cerrada. Buen viento."
- "Curso comprado. Mañana te llega el material."
- "Expedición reservada. Hablamos en 48 h."
- "Cupón aplicado."
- "Cuaderno compartido. Aquí está el link."
- "Foto subida."
- "Audio guardado."
- "Mapa centrado."
- "Capa activada."
- "Filtro aplicado."
- "Orden cambiado."
- "Tema cambiado."
- "Idioma cambiado."
- "Moneda cambiada."
- "Talla cambiada."
- "Calibre cambiado."
- "Dirección guardada."
- "Tarjeta guardada (sin tu número)."
- "Has añadido al morral."
- "Has quitado del morral."
- "Tu pedido se canceló. Reembolso en marcha."
- "Tu RMA está en marcha. Te llega la etiqueta por email."
- "Suscripción pausada hasta [fecha]."
- "Atajo guardado."

### 62.4. Microcopy para empty states
- "Tu morral está vacío. El monte sigue ahí."
- "Tu cuaderno está vacío. Empieza por hojear `/tienda`."
- "No has publicado trofeos todavía. Tranquilo, sin prisa."
- "Aún no hay reseñas. Si lo has probado, escríbenos una."
- "No has hecho ninguna jornada. Aquí no se mide a quien menos."
- "Sin filtros. Pasa por la cabaña."
- "No hay capturas en este lugar. Cambia capa."
- "Tu diario está vacío. La primera entrada se hace andando."
- "Aún no eres Maestre. Acércate al fuego."
- "Nada en tu próxima caja todavía. La cerramos el día 5."

### 62.5. Microcopy de confirmación
- "¿Seguro que lo quitas?"
- "¿Cancelar suscripción? No habrá penalización."
- "¿Pausar 3 meses? Es el máximo."
- "¿Cerrar cuenta? Te exportamos primero todos tus datos si quieres."
- "¿Eliminar entrada del diario? No hay vuelta atrás."
- "¿Compartir trofeo público? Aquí solo verán región, no coordenadas exactas."
- "¿Cambiar a EN? Te lleva a la versión en inglés."

### 62.6. Microcopy de carga
- "Cargando..."
- "Buscando ríos..."
- "Cargando munición..."
- "Cargando rifle..."
- "Cargando cañas..."
- "Trazando senda..."
- "Levantando boya..."
- "Templando aguja..."
- "Soplando viento..."

### 62.7. Frases del cursor (modo cabaña)
- "Mira despacio."
- "Mira más."
- "Mira con calma."

### 62.8. Frases del header (modo Maestre)
- "Bienvenido, Maestre."
- "Hoy hay drop limitado para los tuyos."

### 62.9. Mensajes de aniversario
- "Hoy cumples un año con nosotros. Aquí van 8 % por compañía."

### 62.10. Mensajes festivos
- "Feliz San Hubert. Bebamos con calma."
- "Noche de Reyes. Apaga la luz, abre el sello."

### 62.11. Mensajes meteorológicos
- "Hay viento del norte. Cuidado con la línea."
- "Hay luna nueva. Buen momento para escribir."
- "Hay nieve en Picos. Boots wading no, esquí sí."

### 62.12. Mensajes de comunidad
- "Acabas de leer 5 artículos seguidos. Reposa con un café."
- "Has subido tu primer trofeo. Bienvenido a la pared."
- "Acabas de hacer tu primer pedido sin plomo. Gracias."

### 62.13. Mensajes de error 404 (más)
- "Esto no está. Sigue al perro a la portada."
- "Aquí no hay nadie. Te llevamos."
- "Pista falsa. Vuelve a la senda principal."

### 62.14. Mensajes de error 500 (más)
- "Algo se rompió. Estamos pidiendo ayuda al armero."
- "Esto necesita un descanso. Vuelve en 60 segundos."

### 62.15. Disclaimer ético en checkout de arma
- "Recuerda: caza con licencia, calibre legal y veda respetada. Esto es serio."

### 62.16. Disclaimer en categoría pesca
- "Recuerda: pesca con permiso, especies legales y talla mínima. Suelta lo que dudes."

### 62.17. Saludos por hora
- 04-07: "Buenos días, madrugador."
- 07-12: "Buenos días."
- 12-15: "Buen mediodía."
- 15-19: "Buenas tardes."
- 19-23: "Buenas noches, cómplice."
- 23-04: "Sigue ahí abajo. Que descanses."

### 62.18. Locuciones técnicas comunes (orientativas)
- "Curva balística".
- "Velocidad inicial".
- "Energía en el cañón".
- "Drop a 100/200/300 m".
- "Viento 10/20 km/h".
- "Lanzamiento a doble haul".
- "Cabezal flotante WF 5F".
- "Bajo cónico 9' 5x".

### 62.19. Voz del asistente "Tomé" (IA)
- "Buenas. Dime qué buscas, te ayudo."
- "Pregúntame por la marea de esta noche."
- "Pregúntame por el calibre adecuado para corzo a 180 m."
- "Yo sólo doy información. Decide tú."

### 62.20. Voz humana del soporte
- "Bienvenido, soy [nombre], te leo."
- "Te lo soluciono. Dame un par de minutos."
- "Si no podemos arreglarlo, te decimos qué sí podemos hacer."
- "Buen viento."


---

## 63. LIBRERÍA DE FAQ (PARA `/faq` Y SCHEMA FAQPage)

### 63.1. Generales
- *¿Qué es Montaraz?* Una tienda online curada de caza, pesca, montaña y cocina del despiece, con magazine, atlas y experiencias.
- *¿Quién está detrás?* Tres curadores ficticios pero verosímiles encarnan tres oficios: Alfredo (armería), Inés (mosca y conservación), Tomé (montería). El equipo real cuenta con armeros, biólogos y guías acreditados.
- *¿Es legal vender armas online?* Sí, con licencia comprobada. El producto se entrega vía armería partner si así lo exige la normativa.
- *¿Vendéis a Latinoamérica?* Estamos preparando rutas; consulta antes de comprar.
- *¿Hay tienda física?* Casa Madrid y Casa Asturias, con horarios reducidos.

### 63.2. Producto
- *¿Puedo personalizar mi rifle?* Sí, en `/configurador/rifle`.
- *¿Las moscas están atadas a mano?* Las del lote "atado local" sí. Otras son industriales premium.
- *¿Cómo elijo calibre?* En cada PDP indicamos uso recomendado. También puedes preguntar a Tomé en chat.
- *¿Tenéis productos lead-free?* Sí, los marcamos con etiqueta verde "Sin plomo".

### 63.3. Envíos
- *¿Cuánto tarda?* 48 h península (24 h Express). 5-7 días Europa. 10-14 días resto.
- *¿Coste?* Gratis a partir de 80 € (península).
- *¿Internacional?* Lista disponible en `/envios`.
- *¿Recogida?* Casa Madrid o Asturias.

### 63.4. Pagos
- *¿Métodos?* Tarjeta, Apple Pay, Google Pay, Bizum, Klarna, Sequra, SEPA, transferencia.
- *¿Seguridad?* PCI DSS, Stripe Radar, 3DS2.
- *¿Reembolsos?* 3-5 días hábiles.

### 63.5. Devoluciones
- *¿Plazo?* 365 días en ropa/accesorios sin estrenar. 30 días en armas.
- *¿Cómo?* Self-RMA en `/cuenta/pedidos/[id]`.
- *¿Etiqueta?* Te la generamos prepago.

### 63.6. Cuenta
- *¿Es obligatorio registrarse?* No, puedes comprar como invitado. Recomendamos cuenta para diario, trofeos, suscripciones.
- *¿Borrado de cuenta?* En `/cuenta/configuraciones` → "Eliminar mi cuenta".
- *¿Exportación?* RGPD: en `/cuenta/configuraciones`.

### 63.7. Club Maestre
- *¿Cómo se accede?* Gasto neto + actividad real durante 12 meses.
- *¿Caduca?* Si bajas el umbral, mantienes nivel hasta fin de año natural + 3 meses cortesía.

### 63.8. Avituallamiento
- *¿Frecuencia?* Mensual.
- *¿Pausa?* Hasta 3 meses.
- *¿Cancelación?* Inmediata sin penalización.

### 63.9. Magazine
- *¿Cobráis?* No. Acceso libre.
- *¿Audio?* Sí, narrado.
- *¿Edición impresa?* Anual, tirada 500.

### 63.10. Aula
- *¿Online y presencial?* Sí.
- *¿Certificado?* Sí al final.
- *¿Material?* Algunos cursos incluyen kit por correo.

### 63.11. Expediciones
- *¿Seguro?* Básico incluido.
- *¿Cancelación?* Política específica por expedición.
- *¿Nivel?* Indicado en cada ficha.

### 63.12. Sostenibilidad
- *¿Embalaje?* Cartón crudo, papel kraft, cordel yute, cero plástico.
- *¿Compensación CO2?* Sí, 1 % de ingresos.
- *¿Origen?* Trazable.

### 63.13. Legal armas
- *¿Qué licencia?* Tipo C/D/E según producto.
- *¿Cómo se sube?* En cuenta, cifrada at-rest.
- *¿Caducidad?* Te avisamos antes.

### 63.14. Atlas
- *¿Cotos privados?* Solo a usuarios autenticados con coto verificado.
- *¿Coordenadas exactas?* Privadas; sólo regiones.

### 63.15. Trofeos
- *¿Públicos?* Privados por defecto. Optas a público.
- *¿Verificación?* Sí, por guía oficial cuando aplique.

### 63.16. Comunidad
- *¿Reglas?* Cero tolerancia a tóxicos.
- *¿Moderación?* Humana + Perspective.
- *¿Reportar?* Botón en cada comentario.

### 63.17. Calendario
- *¿Datos en vivo?* Sí, AEMET + Puertos del Estado.
- *¿Predicción?* Algoritmo propio.

### 63.18. Configurador
- *¿Compromiso?* No. Solo guardas configuración.
- *¿Compartir?* Link único.
- *¿Pedido?* Cuando lo confirmas.

### 63.19. Pago Maestre / Suscripción
- *¿Recargo?* No.
- *¿Cancelación?* Una opción clara en cuenta.

### 63.20. Soporte
- *¿Idiomas?* ES, EN, PT, EN.
- *¿Horario?* 9-21 h CET chat. Email 24 h.

### 63.21. Sostenibilidad económica
- *¿Subasta de saldos?* No agresiva. "Saldos del Montaraz" discreto.
- *¿Black Friday?* No. Tenemos drop discreto en otoño.

### 63.22. Tarjeta regalo
- *¿Existe?* Sí, denominación libre desde 50 €.
- *¿Caducidad?* 18 meses.

### 63.23. B2B
- *¿Cuándo?* Fase 2.
- *¿Cómo?* Solicitud en `/contacto`.

### 63.24. Coleccionistas
- *¿Hay vintage?* Sí, consignados con historia.
- *¿Certificado?* Sí.

### 63.25. Personalización
- *¿Grabado?* En cuchillería y armería.
- *¿Plazo?* 7-14 días.
- *¿Coste?* Variable.

### 63.26. Asesoría
- *¿Llamar?* Sí, número en footer.
- *¿Chat?* Sí.
- *¿Vídeo-llamada?* Sí, previa cita.

### 63.27. Tiempos de garantía
- *¿Estándar?* 2 años UE.
- *¿Garantía Montaraz?* Si falla al primer uso, lo reemplazamos.

### 63.28. Productos descatalogados
- *¿Hay forma de saberlo?* Avisamos por email si lo tenías en cuaderno.

### 63.29. Listas de espera
- *¿Cómo me apunto?* Botón "Avísame" en PDP.

### 63.30. Cookies y privacidad
- *¿Cookies?* Banner con tres categorías; default off para no esenciales.
- *¿Vendéis datos?* Nunca.

---

## 64. MOODBOARDS TEXTUALES Y REFERENCIAS DE INSPIRACIÓN

### 64.1. Aurelio Menéndez y la era romántica de la caza
- Páginas de cuadernos en cuero.
- Fichas en máquina de escribir.
- Mapas dibujados a mano.

### 64.2. Ortega y Gasset, "Meditaciones sobre la caza"
- Tipografía editorial densa.
- Citas en serif italic.

### 64.3. Hemingway, "El viejo y el mar"
- Frase corta.
- Mar.
- Sol.

### 64.4. Maclean, "A river runs through it"
- Cinematografía Montana.
- Pesca a mosca con bilis suave.

### 64.5. Beretta Gallery Madrid
- Madera.
- Cuero.
- Bronce.
- Vitrinas.

### 64.6. Pallarès Solsona taller
- Forja artesanal.
- Pesos de hoja en mostrador.
- Olor a aceite.

### 64.7. Sako fabricación Finlandia
- Acero pavonado.
- Nogal templado.

### 64.8. Orvis catálogos vintage
- Acuarelas.
- Cañas alineadas.
- Mariposas científicas dibujadas.

### 64.9. National Park Service typography
- Letras de bloque madera.

### 64.10. Bauhaus alpino
- Sello rojo, tipografía sans dura.

### 64.11. Filson
- Lana, cera, latón.

### 64.12. Patagonia editorial
- Texto largo, fotografía cinemática, sostenibilidad militante.

### 64.13. Linear app
- UI quirúrgica, microinteracciones precisas.

### 64.14. Apple newsroom
- Tipografía SF Pro, fotografía estudio, parallax suave.

### 64.15. New York Times Magazine
- Long-form, drop caps, pull quotes.

### 64.16. Granta magazine
- Pieza larga, fotografía B&N.

### 64.17. Aesop
- Microcopy reflexivo, tono físico.

### 64.18. Hermès
- Sastre, sello, color crudo.

### 64.19. Salt & Pepper editorial
- Saturación baja, paleta tierra.

### 64.20. Old IGN mapas
- Curvas de nivel finas, simbología austera.

---

## 65. SOUND DESIGN LIBRARY (OPT-IN)

### 65.1. Ambientes
- `home_amanecer_8s.ogg` — crepitar hojas + brisa.
- `aguas_rio_8s.ogg` — río con micro-rumor.
- `aguas_mar_8s.ogg` — olas bajas.
- `monte_madera_4s.ogg` — fuego pequeño.
- `aula_pizarra_2s.ogg` — tiza sobre encerado.

### 65.2. Microinteracción
- `click_metalico.ogg` — clic suave (configurador).
- `pluma_caer.ogg` — pluma cae (newsletter).
- `sello_caer.ogg` — sello (confirmación).
- `lluvia_hojas.ogg` — celebración Maestre.

### 65.3. Easter eggs
- `carabo_03_33.ogg` — cárabo nocturno (1 vez a las 03:33).
- `mariposa_alas.ogg` — sutil aleteo en mariposa apolo.

### 65.4. Especificaciones
- Codec: OGG/Opus 96 kbps.
- Duración loops: 4-8 s con crossfade.
- Volumen master: -32 dBFS.
- Toggle persistente.
- Mezcla bajo "campana sonora" del header.

### 65.5. Accesibilidad
- Subtitulación de audio (transcripción).
- Off por defecto.

---

## 66. ESCENAS 3D INTERACTIVAS (CATÁLOGO)

### 66.1. Home — Rifle Sako ensamblándose
- Modelo: Sako 90 Hunter, glTF Draco 580 KB.
- Cámara: orbital lenta.
- Lighting: HDR atardecer pradera.
- Etiquetas: cañón, culata, cargador, gatillo, óptica.

### 66.2. PDP cuchillo — Modelo high-res
- 4 acabados intercambiables.
- 3 mangos (boj, nogal, fresno).
- AR usdz.

### 66.3. Configurador rifle — Escena viva
- 30 piezas con snap fit.
- Magnetismo de piezas válidas.
- HUD lateral con datos en vivo.

### 66.4. Configurador caña — Hilo y cabezal
- Caña representada como spline animado al "casting".
- Reglaje de "cola" (4-8 wt) cambia color de hilo y curvatura.

### 66.5. Configurador escopeta — Despiece
- 12 piezas con apertura tipo Apple.

### 66.6. Configurador óptica — Retícula
- Vista de retícula a escala con objetivos.

### 66.7. Configurador mosca — Atado virtual
- Capas WebGL.
- Anzuelo + hilo + cuerpo + ribete + alas.

### 66.8. PDP escopeta — 360
- 36 imágenes preprocesadas.

### 66.9. PDP mochila — Modelo modular
- Bolsillos abrible.

### 66.10. PDP linterna frontal — Beam test
- Vista de haz de luz en escena oscura.

### 66.11. PDP saco — Comparativa térmica
- 3 sacos con perfiles térmicos visualizados.

### 66.12. Caja Avituallamiento — Apertura
- Tapa que se levanta al scroll.

### 66.13. Cuchillería personalizada — Grabado en vivo
- Editor de texto que se "graba" en el mango.

### 66.14. Atlas — Globo terrestre lite
- Globo R3F con líneas de envío.

### 66.15. Atlas región — 2.5D terrain
- Mapbox terrain-rgb + threejs displacement.

### 66.16. Cuenta — Pared de trofeos
- Pared 3D con marcos.

### 66.17. Aula — Pizarra animada
- Lecciones con tiza dibujada al scroll.

### 66.18. Magazine — Mosca volando
- Easter egg silencioso.

### 66.19. Carrito — Morral en 3D
- Morral abierto con miniaturas asomando.

### 66.20. Footer — Brújula tridimensional
- Brújula 3D que rota lentamente.

---

## 67. MAPBOX CUSTOM STYLE "MONTARAZ TOPO"

### 67.1. Paleta
- Tierra `#E6D5B0`.
- Bosque `#3B5A2C`.
- Río `#1F3A45`.
- Curva nivel `#6C4C2C`.
- Texto serif `#1A1714`.

### 67.2. Tipografía
- Etiquetas en GT Sectra para regiones.
- Etiquetas en Söhne Mono para coordenadas.

### 67.3. Capas
- Hidrografía (caudales > 5 m³/s).
- Cotas (curvas de nivel cada 100 m).
- Refugios.
- Faros.
- Caminos GR/PR.
- Parques nacionales y reservas.
- Cotos privados (sólo si autenticado).
- Vedas (con tinte rojo translúcido en vigor).
- Mareas (líneas en costa).
- Lunas (icono en home).

### 67.4. Símbolos
- Refugio: triángulo + asterisco.
- Faro: estrella con rayas.
- Pesca: anzuelo.
- Caza: ojiva.
- Curador: pluma.

### 67.5. Interacción
- Hover capa: tooltip.
- Zoom: cambia detalles.
- Mobile: control simplificado.

### 67.6. Performance
- Vector tiles.
- Lazy load de capas pesadas.

### 67.7. Versiones
- Topográfico (default).
- Satelital.
- Ilustrado a tinta (custom).
- Nocturno.

### 67.8. Privacidad
- Coordenadas privadas redondeadas a 0.5°.

### 67.9. Compartir
- URL con bounds + capas activas.
- Captura PNG generada por `@vercel/og`.

### 67.10. Documentación
- `/docs/mapbox-style.md`.

---

## 68. ESPECIFICACIONES DE INTERACCIÓN POR PÁGINA (RESUMEN)

### 68.1. Header global
- Logo: scroll suave a top.
- Mega menu: hover desktop, click mobile.
- Buscador: cmd+k.
- Idioma: dropdown.
- Cuenta: dropdown logueado, modal entrar si no.
- Morral: drawer.
- Linterna: toggle Tarde de Campo.

### 68.2. Footer global
- 4 columnas + newsletter.
- Letra MONTARAZ asentamiento al entrar.
- Mini mapa fondo dibujándose.

### 68.3. Home — interacciones específicas
- Snap horizontal escena 3 (cmd+arrows).
- Sticky pin manifesto.
- Hot zones en mapa preview.
- 3D camera tour configurador preview.

### 68.4. Catálogo
- Filtros: persisten en URL.
- Vista conmutable: persiste en local.
- Scroll virtualizado.

### 68.5. PDP
- Galería scroll-sticky.
- Selector con `layoutId`.
- Add-to-morral con parabólica.

### 68.6. Configurador
- Snap fit + halo.
- Conflict bounce.
- Save link copied.

### 68.7. Checkout
- Step accordion progressive.
- Inline validation.
- Success seal.

### 68.8. Cuenta
- Tabs.
- Inline editing.
- Drag&drop archivos.

### 68.9. Magazine
- Reading progress.
- Audio sticky.
- Pull quotes.
- Side notes.

### 68.10. Atlas
- Drag + zoom + capas.
- Marker hover card.
- Search top.

### 68.11. Calendario
- Calendar grid.
- Day detail.
- Wave chart mareas.

### 68.12. Cuaderno
- Drag&drop reordenar.
- Renombrar inline.
- Cover picker.

### 68.13. Diario
- Plantilla rápida mobile.
- Vista mapa/timeline conmutable.

### 68.14. Trofeos
- Pared 3D.
- Click expand.

### 68.15. Club
- Banner Maestre.
- Tier picker.

### 68.16. Avituallamiento
- Onboarding wizard.
- Calendario.
- Próximo contenido visible.

### 68.17. Aula
- Filtros por modalidad / fecha.
- Calendar grid.

### 68.18. Expediciones
- Calendar grid.
- Cupos.

### 68.19. Comunidad
- Comentarios threaded.
- Reportar.

### 68.20. Admin
- Cmd+k.
- Tablas TanStack.
- Inline editing.

---

## 69. SANITY STUDIO — CONFIGURACIÓN VISUAL

### 69.1. Identidad del studio
- Logo MONTARAZ pequeño.
- Theme con paleta monte.
- Tipografía Sectra titles + Söhne ui.

### 69.2. Plugins
- Vision (groq queries).
- Internationalization.
- Mux input.
- Spotlight (cmd+k).
- Asset source Cloudinary.
- Mapbox input para coordenadas.

### 69.3. Estructura
- Singletons: Manifesto, Origen, Carta del Fundador.
- Documentos: Producto, MagazinePost, Expedición, Curso, Curador, Autor, Coto, Río, Familia, Marca.

### 69.4. Roles
- Admin, Editor, Curador, Logística.

### 69.5. Workflow
- Borrador → Revisión → Publicado.

### 69.6. Live preview
- Cada documento con preview a producción.

### 69.7. Validaciones
- Slugs únicos.
- Imágenes con alt obligatorio.
- Curador asignado en cada producto editorial.

### 69.8. Templates
- "Nuevo producto" plantilla con campos prerellenos por familia.

### 69.9. Custom inputs
- Color picker.
- Spec table.
- Pull quote.
- Map embed.
- Audio embed.

### 69.10. Documentación
- `/docs/cms.md` para editores.

---

## 70. DEPLOY Y RELEASE RUNBOOKS

### 70.1. Deploy diario
- Squash merge to `main`.
- Vercel deploy auto.
- Smoke tests post-deploy.

### 70.2. Deploy semanal a producción
- PR `main` → `release` viernes 14:00.
- Aprobación de Tech Lead.
- Promoción manual.

### 70.3. Hotfix
- Branch `hotfix/*` directo a `release`.
- Aprobación de Tech Lead.
- Comunicación a equipo.

### 70.4. Rollback
- 1 clic Vercel.
- Postmortem en 24 h si afectó usuarios.

### 70.5. Migrations
- Reversible siempre que posible.
- Aplicada en pre-deploy.
- Backups + dry-run en staging.

### 70.6. Feature flags
- OpenFeature.
- Targeting por cohort.
- Audit log de cambios.

### 70.7. Configuración secrets
- Vercel Encrypted Environment.
- Rotación trimestral.

### 70.8. Communications
- Slack #releases automatizado.
- Email a equipo en releases mayores.

### 70.9. Documentación
- `/docs/runbooks/deploy.md`.

### 70.10. Mejora continua
- Postmortems mensuales.

---

## 71. ESTADO PÚBLICO Y COMUNICACIÓN DE INCIDENTES

### 71.1. `status.montaraz.com`
- Página StatusPage o Instatus.
- Componentes monitorizados: Web, Checkout, Pagos, Email, Búsqueda, CMS, Mapas.

### 71.2. Notificaciones
- Suscripción opcional por email.

### 71.3. Tipos de incidente
- Investigando.
- Identificado.
- Monitorizado.
- Resuelto.

### 71.4. Post-mortems
- Públicos cuando justifique.

### 71.5. Comunicación crisis
- Tono honesto, breve, sin tecnicismos excesivos.

---

## 72. SOSTENIBILIDAD OPERATIVA

### 72.1. Embalaje
- Cartón crudo FSC.
- Papel kraft.
- Cordel yute.
- Cero plástico decorativo.

### 72.2. Logística
- Consolidación de envíos.
- Última milla con DHL Eco / Correos.

### 72.3. Devolución
- Etiquetas reutilizables.
- Programa de devolución de caja con 5 € descuento.

### 72.4. Producto sostenible
- Etiqueta verde "Sin plomo".
- Etiqueta "Material reciclado".
- Etiqueta "Compensación CO2 incluida".

### 72.5. Donaciones
- 1 % de ingresos a asociaciones de conservación.

### 72.6. Comunicación
- Reporte anual de impacto.

### 72.7. Vedas
- Filtros automáticos por temporada.
- Aviso en checkout.

### 72.8. Captura ética
- Filosofía: "captura selectiva".

### 72.9. Energía
- Hosting con energías renovables.

### 72.10. Auditoría
- Anual con consultora externa.

---

## 73. EXPERIENCIA EN MOBILE (RESUMEN)

### 73.1. Filosofía
- Mobile-first en flujos de compra.
- Funcionalidades pesadas (3D, configurador) con experiencia adaptada.

### 73.2. Navegación
- Drawer.
- Bottom nav optional (home, tienda, atlas, cuenta, morral).

### 73.3. PDP
- Galería full-bleed.
- Selector tabs.
- CTA fijo abajo.

### 73.4. Checkout
- 1 pantalla por paso.
- Apple Pay / Google Pay prominentes.

### 73.5. Atlas
- Capas reducidas.
- Touch optimizado.

### 73.6. Magazine
- Lectura confortable.
- Audio bottom sheet.

### 73.7. Configurador
- Wizard.
- 3D opcional.

### 73.8. Performance
- Imágenes responsive.
- JS code split.

### 73.9. Haptics
- Vibración en confirmaciones.

### 73.10. Offline
- Cuaderno persistente.

---

## 74. ESTRATEGIA PRE-LAUNCH (DETALLE)

### 74.1. Landing coming-soon
- Hero con tagline.
- Countdown a apertura.
- Newsletter sign-up.
- Iconografía teaser.

### 74.2. Social
- Cuentas mínimas, voz coherente.
- Posts editoriales sobrios.

### 74.3. Prensa
- Press kit en `/prensa`.
- Comunicados.

### 74.4. Invitación 200 socios fundadores
- Email personalizado.
- Insignia digital "Fundador".

### 74.5. Eventos pre-launch
- Charla en Casa Madrid con 30 invitados.
- Salida de pesca con 8 socios.

### 74.6. Recogida feedback
- Cuestionario.
- Llamadas 30 min.

### 74.7. Iteración
- Sprint 2 semanas.

### 74.8. Comunicación
- Carta del fundador a 200 socios.

### 74.9. Métricas
- Open rate newsletter > 60 % en pre-launch.

### 74.10. Día D
- Lanzamiento público.

---

## 75. IDEAS DE COMUNICACIÓN VISUAL EXTRAS

### 75.1. Hero alternativo "estación de armería"
- Fotografía de banco de trabajo con luz dura.

### 75.2. Hero alternativo "lance de mosca a contraluz"
- Línea de pesca en oro al sol bajo.

### 75.3. Hero alternativo "perdiguero al rececho"
- Perro de muestra inmóvil.

### 75.4. Hero alternativo "bivac al amanecer"
- Pequeño fuego, niebla.

### 75.5. Hero alternativo "mapa con calidos"
- Mapa de cuna y cuaderno.

### 75.6. Tipografía con mancha de tinta
- Detalle decorativo en mensajes de éxito.

### 75.7. Pictogramas de retícula
- Iconos de retículas múltiples.

### 75.8. Calendario de portada
- Cada mes ilustración custom.

### 75.9. Ilustraciones a tinta de especies
- 40 especies con perfil zoológico.

### 75.10. Series de fotografía
- "12 amaneceres".
- "12 perdices".
- "12 puestos".

---

## 76. PRINCIPIOS DE PRODUCTO

### 76.1. Diez principios
1. **Provisión, no producto.**
2. **Respeto sobre conversión.**
3. **Curaduría sobre catálogo.**
4. **Velocidad cuando importa, lentitud cuando merece.**
5. **Lengua materna del campo.**
6. **Sostenibilidad sin lavado.**
7. **Educación más que persuasión.**
8. **Comunidad pequeña, no audiencia grande.**
9. **Belleza como ética.**
10. **Honestidad por defecto.**

### 76.2. Ejemplos en práctica
- Pop-up de cookies sobrio.
- Cero countdown timers vulgares.
- Cero "solo X horas restantes".
- Cero "9 personas miraron esto".
- Cero scarcity falsa.

### 76.3. Antipatrones prohibidos
- Dark patterns.
- Pre-tickeo de suscripciones.
- Auto-renovaciones ocultas.
- Footer de noticias falsas.

### 76.4. Métrica norte
- NPS + LTV, no conversión obsesiva.

### 76.5. Documentación
- `/docs/principles.md`.

---

## 77. PROTOCOLO DE GUÍAS Y CURADORES

### 77.1. Selección
- Experiencia mínima 10 años.
- Reputación verificada.
- Compromiso ético.

### 77.2. Compensación
- Acuerdo escrito.
- Comisión por producto curado.

### 77.3. Voz pública
- Firma personal.
- Foto B&N.
- Bio.

### 77.4. Continuidad
- 5 productos curados mes mínimo.

### 77.5. Rotación
- Curador del mes en magazine.

### 77.6. Responsabilidad
- Si un producto falla, el curador propone solución.

### 77.7. Reseñas
- Curador responde top 5 reseñas mensuales.

### 77.8. Eventos
- 1 evento al año por curador.

### 77.9. Magazine
- 4 piezas firmadas al año por curador.

### 77.10. Carta de bienvenida nuevo curador
- Onboarding 4 sesiones.

---

## 78. DETALLES DE EMBALAJE

### 78.1. Caja estándar
- Cartón 5 mm.
- 4 medidas.
- Cinta papel adhesivo.
- Cordel yute.

### 78.2. Caja regalo
- Cartón 7 mm.
- Sello cera.
- Tarjeta a mano.
- Yute con etiqueta MONTARAZ.

### 78.3. Caja Avituallamiento
- Madera ligera reciclable.
- Grabado láser MONTARAZ.
- Devolución 5 € descuento.

### 78.4. Etiqueta envío
- Imagen IGN-like.
- Tipografía Söhne.

### 78.5. Tarjeta interior
- A mano si pedido > 500 €.
- Firma del curador.

### 78.6. Insertos
- Carta de bienvenida (primer pedido).
- Cuaderno de hojas en blanco (pedido > 200 €).

### 78.7. Sostenibilidad
- Cero plástico.
- Reciclable 100%.

### 78.8. Manual de uso
- Si el producto lo necesita, incluido en PDF + impreso.

### 78.9. Recibo en papel
- Solo si lo pides, en kraft.

### 78.10. Producto frágil
- Lana cruda y serrín como protector.

---

## 79. COMPROMISOS CON LA COMUNIDAD

### 79.1. Asociaciones partner
- RedFly España (truchas autóctonas).
- Fundación Oso Pardo.
- ANSE.
- Quercus.
- WWF España (donaciones puntuales en piezas educativas).

### 79.2. Eventos abiertos
- 1 jornada mensual gratuita en Casa Madrid o Asturias.

### 79.3. Programa de mentores
- Curadores ofrecen 30 min/mes a socios.

### 79.4. Beca anual
- 1 beca "Joven recechista" + 1 "Joven mosquera".

### 79.5. Diálogo público
- Foro anual sobre vedas y cuotas.

### 79.6. Voluntariado
- Plantaciones, limpieza riberas.

### 79.7. Eventos infantiles
- Iniciación a la pesca para niños 8-14 años.

### 79.8. Mujeres y caza
- Charla anual.
- Mentoría específica.

### 79.9. Diversidad
- Inclusión activa.

### 79.10. Política antiabuso
- Sanciones a quienes violen reglas.

---

## 80. PRINCIPIOS DE DISEÑO CONVERSACIONAL (ASISTENTE TOMÉ)

### 80.1. Persona
- Tono templado, respetuoso, breve.
- No condescendiente.
- Reconoce sus límites.

### 80.2. Funciones
- Consultar mareas/lunas/vedas.
- Recomendar calibre/cebo según contexto.
- Consultar stock.
- Atajos a productos.

### 80.3. Límites
- No vende.
- No da consejos legales definitivos.
- Cuando duda, deriva a humano.

### 80.4. Disclaimer
- "Soy un asistente. Decide tú."

### 80.5. Memoria
- Recuerda preferencias dentro de sesión.
- No PII persistente sin consentimiento.

### 80.6. Idiomas
- ES, EN, PT (otros próximos).

### 80.7. Tono de error
- "No te entendí del todo, ¿lo reformulas?"

### 80.8. Easter egg
- Si dices "buen viento", responde "buen viento".

### 80.9. Función RAG
- Consulta base documental (magazine, glosario, atlas).

### 80.10. Trazabilidad
- Logs anonimizados.


---

## 81. DASHBOARDS DETALLADOS DE OPERACIÓN

### 81.1. Dashboard "Pulso diario"
- Pedidos hoy.
- Ingreso hoy vs. media 30 días.
- Top 5 productos hoy.
- Top 3 fallos hoy.
- Tickets soporte abiertos.
- Devoluciones día.
- Stock crítico.

### 81.2. Dashboard "Semanal"
- Conversion funnel completo.
- Cohortes nuevas vs. recurrentes.
- AOV evolución.
- LTV proyectado.
- Newsletter open/click.
- Magazine top 5 piezas.
- Atlas regiones más vistas.

### 81.3. Dashboard "Mensual"
- Ingresos.
- Costes (Stripe fees, Vercel, Sanity, Algolia, Mapbox, Cloudinary).
- Margen bruto.
- Suscripciones nuevas/canceladas/pausadas.
- Maestres nuevos.
- Eventos asistidos.
- Donaciones generadas.

### 81.4. Dashboard "Trimestral"
- KPIs estratégicos.
- NPS.
- Reseñas verificadas.
- Trofeos publicados.
- Magazine completion rate.
- Audio completion rate.
- Aula matriculados / completados.

### 81.5. Dashboard "Anual"
- Anual reporting (con visualización tipo "Spotify Wrapped").
- Sostenibilidad: kg packaging ahorrado, kg CO2 compensado, € donados.

### 81.6. Distribución
- Email automático a equipo cada lunes a las 09:00.

### 81.7. Visualización
- Grafana + Looker Studio.
- Exportable PDF.

### 81.8. Acceso
- Roles permisivos.

### 81.9. Auditoría
- Logs de quién accede a qué.

### 81.10. Anti-vanity-metrics
- Sin métricas de followers en redes (no son nuestro foco).

---

## 82. ONBOARDING — EXPERIENCIA NUEVO USUARIO

### 82.1. Primera visita
- Splash 1 vez con frase del manifiesto.
- Cookie banner sobrio.

### 82.2. Registro
- Magic link primer paso.
- Onboarding 3 pantallas:
  1. ¿Caza, pesca, ambas?
  2. Modalidades preferidas (chips).
  3. ¿Quieres newsletter? (opcional).

### 82.3. Primer login
- Hub con próximos pasos sugeridos:
  - Mirar magazine.
  - Explorar atlas.
  - Crear cuaderno.
  - Apuntarse a evento.

### 82.4. Recompensa primer pedido
- Sello "Primer monte" / "Primer río" / etc.
- Carta a mano si pedido > 200 €.

### 82.5. Onboarding Maestre
- Llamada de bienvenida.
- Tour personalizado.
- Acceso al cuaderno secreto.

### 82.6. Onboarding Avituallamiento
- Cuestionario inicial.
- Vista de próxima caja.
- Calendario.

### 82.7. Onboarding curso
- Email con material previo.
- Calendar invite.

### 82.8. Onboarding expedición
- Cuestionario.
- Guía PDF.

### 82.9. Re-engagement
- 14 días sin actividad: email "Te echamos de menos. Hay luna llena este fin de semana".
- 30 días: magazine top 3.
- 60 días: descuento ligero 5 % no agresivo.

### 82.10. Cierre de cuenta
- Frase honesta: "Buen viento. Si vuelves, te esperamos."

---

## 83. SISTEMA DE NOTIFICACIONES

### 83.1. Canales
- Email.
- SMS (transaccional).
- Push web (opt-in).
- Push app (futuro fase 2).
- Centro de notificaciones in-app.

### 83.2. Tipos
- Transaccional: pedido, envío, entrega, devolución.
- Promocional: drop, magazine, evento.
- Comunidad: respuesta a tu comentario, mención.
- Sistema: cambio política, mantenimiento.

### 83.3. Preferencias
- Granular en `/cuenta/notificaciones`.

### 83.4. Templating
- React Email + Resend.

### 83.5. Pruebas
- Litmus para email rendering.
- Preview en `/admin/notifications/preview`.

### 83.6. Internacionalización
- Plantillas por locale.

### 83.7. Anti-spam
- Frecuencia máxima.
- Unsubscribe 1-click.

### 83.8. Logging
- Estado: sent, delivered, opened, clicked, bounced, complained.

### 83.9. Compliance
- Doble opt-in obligatorio.

### 83.10. Voz
- Sigue las normas Montaraz (sección 9).

---

## 84. PROGRAMA MAESTRE — MECÁNICA DETALLADA

### 84.1. Cálculo
- Gasto neto (sin envío, sin tax) en los últimos 12 meses + actividad genuina.

### 84.2. Actividad genuina (multiplicadores)
- 1.0 € por € gastado.
- +50 € por curso completado.
- +30 € por jornada asistida.
- +20 € por reseña verificada útil.
- +10 € por trofeo publicado con foto.
- +50 € por contribución magazine (publicada).

### 84.3. Umbrales
- Aprendiz: 0-500.
- Cazador/Pescador: 500-2500.
- Maestre: 2500+.

### 84.4. Beneficios (resumen)
- Aprendiz: bienvenida, magazine completo.
- Cazador: 5 % perpetuo, envío express gratis, acceso anticipado.
- Maestre: 10 %, concierge, grabados gratis, jornada anual gratis, cuaderno secreto.

### 84.5. Cuaderno secreto Maestre
- Sección oculta de Atlas con 30 cotos confidenciales.
- Magazine adicional 6 piezas/año.

### 84.6. Concierge
- Slack privado.
- Atención humana dedicada.

### 84.7. Eventos exclusivos
- Cena Maestre.
- Charlas privadas.

### 84.8. Renovación
- Cada 1 de enero recálculo.

### 84.9. Cortesía
- 3 meses de cortesía si cae el nivel.

### 84.10. Insignia
- Visible en perfil.

---

## 85. PERSONALIZACIÓN ENGINE

### 85.1. Señales
- Modalidades preferidas (onboarding).
- Historial compra.
- Productos vistos.
- Búsquedas.
- Magazine leído.
- Cursos asistidos.
- Geo (locale).
- Estación (auto).
- Luna actual.
- Tiempo actual.

### 85.2. Recomendación
- Algolia Recommend + custom rules.
- Vector embeddings.
- Re-rank por contexto.

### 85.3. Surfaces
- Home "Recomendado para ti".
- PDP "Va con esto" y "Otros eligen".
- Catálogo orden "Recomendado para mí".
- Email semanal personalizado.

### 85.4. Filtros éticos
- Nunca empujar productos restringidos.
- Nunca recomendar lo que no está en stock.

### 85.5. A/B testing
- PostHog.

### 85.6. Cold start
- Onboarding cuestionario corto.
- Default editorial.

### 85.7. Caching
- 24 h cache rec.
- Invalidación on purchase.

### 85.8. Privacidad
- Opt-out en `/cuenta/privacidad`.

### 85.9. Auditoría
- Logging anonimizado.

### 85.10. Métricas
- CTR recomendación.
- CVR recomendación.

---

## 86. A/B TESTING — ROADMAP

### 86.1. Q1
- Hero: vídeo vs. cinemagraph.
- CTA: "Empezar por el morral" vs. "Entrar a la casa".

### 86.2. Q2
- PDP: galería sticky vs. galería normal.
- Configurador: stepper vs. todo en una pantalla.

### 86.3. Q3
- Checkout: 1 página vs. 3 pasos.
- Newsletter: CTA inline vs. página dedicada.

### 86.4. Q4
- Recomendación: vector vs. reglas vs. combinación.

### 86.5. Reglas
- 14 días mínimo.
- 1500 conversions mínimo.
- 95 % confianza.

### 86.6. Documentación
- Hipótesis, resultado, decisión.

### 86.7. Ética
- Sin tests que dañen experiencia.
- Sin dark patterns.

### 86.8. Targeting
- Por cohort, no individual.

### 86.9. Frecuencia
- Máximo 3 experimentos simultáneos.

### 86.10. Aprendizaje
- Repositorio de aprendizajes en Notion.

---

## 87. INTERNACIONALIZACIÓN — ROADMAP

### 87.1. Q1
- Solo ES-ES.

### 87.2. Q2
- Lanzar EN-UK.
- Traducción magazine top 12.

### 87.3. Q3
- Lanzar PT-PT.
- Magazine top 12 PT.

### 87.4. Q4
- Lanzar FR-FR (parcial: home + catálogo).
- DE-DE (parcial).

### 87.5. Año 2
- IT-IT.
- ES-LATAM con tono y vocabulario distinto.

### 87.6. Estrategia de traducción
- Magazine y editorial: traductor profesional + revisión.
- Producto: traducción técnica con curador local cuando posible.
- UI strings: en JSON, revisados por hablantes nativos.

### 87.7. Costes
- 8 €/palabra magazine premium.
- 0.10 €/palabra UI strings.

### 87.8. Hosting
- Subpath routing.

### 87.9. SEO
- Hreflang.
- Sitemap por locale.

### 87.10. Soporte
- ES/EN inmediato.
- Otros 24 h.

---

## 88. EDITORIAL — DIRECTRICES PROFUNDAS

### 88.1. Voz
- Sustantiva, sensorial, sobria.
- Hemingway-Delibes-Aldo Leopold.

### 88.2. Estructura mínima
- Introducción (200 palabras).
- Cuerpo en 3-5 capítulos.
- Cierre con imagen.

### 88.3. Citas
- Atribución completa.
- Fecha/lugar si posible.

### 88.4. Fuentes
- Bibliografía al final.
- Enlaces a fuentes primarias.

### 88.5. Verificación
- Editor revisa todo.

### 88.6. Producción
- Outline aprobado.
- Borrador.
- Edición.
- Revisión final.
- Publicación.

### 88.7. Imágenes
- Mínimo 4 por pieza larga.
- Captions extensas.

### 88.8. Audio
- Voz profesional.
- Grabación en estudio.
- Edición con respiración natural.

### 88.9. Vídeo
- 12 min máximo.
- Cinematografía cuidada.
- Subtítulos.

### 88.10. SEO editorial
- H2/H3 jerárquicos.
- Schema Article.
- TOC.
- Internal linking.

### 88.11. Tono
- Cero clickbait.
- Cero superlativos.
- Cero exclamaciones.

### 88.12. Sensibilidad
- Caza ética.
- Especies protegidas.
- Vedas.

### 88.13. Plagio
- Cero tolerancia.

### 88.14. Reproducción
- Algunas piezas en CC-BY-NC.

### 88.15. Errores
- Errata pública.

### 88.16. Comentarios
- Moderados.

### 88.17. Anonimato
- Sólo con razón seria.

### 88.18. Identificación de IA
- Si usamos IA, se declara.

### 88.19. Compensación autores
- Tarifa profesional.

### 88.20. Derechos
- Autor mantiene autoría.
- Montaraz publica.

---

## 89. CUSTOMER JOURNEY MAPS DETALLADOS

### 89.1. Lucas — recechista, primera compra
1. Búsqueda Google: "mejor calibre corzo".
2. Llega a `/revista/calibres-y-conciencia`.
3. Lee artículo, ve enlace a `.270 Win`.
4. Click a `/tienda/caza/municion/270-win`.
5. Filtra grano 130, fabricante Hornady.
6. PDP Hornady ELD-X 130 gr.
7. Add to morral.
8. Sigue a `/tienda/caza/armas/rifles`.
9. PDP Sako 90.
10. Lee "Por qué lo elegimos" de Alfredo.
11. Sale, vuelve 3 días después.
12. Login.
13. Encuentra morral con cosas, mira ficha de nuevo.
14. Confirma compra.
15. Sube licencia.
16. Pago.
17. Email confirmación.
18. SMS día entrega.
19. Recibe paquete con sello cera.
20. Deja reseña.
21. Volverá.

### 89.2. Marta — mosquera, primera compra
1. Newsletter sectorial menciona Montaraz.
2. Llega a home.
3. Hace tour por home (16 s).
4. Click Aguas.
5. Lee microensayo.
6. Filtros: mosca seca + atado a mano + Pirineos.
7. PDP Pirineo Caddis.
8. Lee bio del atador.
9. Add to morral.
10. Sigue a cañas Sage.
11. PDP Sage R8 Core.
12. Visor 3D.
13. Configurador caña + carrete + cola.
14. Save link.
15. Compra.
16. Pago Apple Pay.
17. Recibe email con carta de Inés.

### 89.3. Daniel — montero, fidelidad
1. Cuenta antigua.
2. Login passkey.
3. Va directo a `/tienda/caza/municion/308-win`.
4. Repite compra última.
5. Pago Bizum.
6. Listo en 90 segundos.

### 89.4. Bea — pesca embarcación
1. Mobile.
2. Atlas Cantábrico.
3. Filtra "lubina noche octubre".
4. Magazine "Cantábrico bravo".
5. PDP DUO Realis Pencil.
6. Add to morral.
7. Compra.
8. Click&collect en armería partner Galicia.

### 89.5. Iván — iniciación
1. Llega a `/aula`.
2. Curso "Iniciación recechista".
3. Compra.
4. Recibe kit por correo.
5. Asiste online.
6. Termina curso.
7. Sello "Diplomado".
8. Compra rifle + óptica.
9. Sube licencia recién obtenida.

### 89.6. Sigrid — internacional
1. Locale auto a EN.
2. Currency EUR.
3. Busca "Pallarès personalised knife".
4. PDP cuchillo Sella.
5. Configurador grabado "para Klaus".
6. Compra.
7. Envío Múnich.

### 89.7. Padre+hijo
1. Mobile.
2. Filtros talla infantil.
3. PDP chaleco juvenil.
4. PDP cartuchos 20/70 28 g.
5. Compra.
6. Sello "Padre cazador".

### 89.8. Coleccionista
1. Filtros vintage.
2. PDP escopeta AYA restaurada.
3. Lee certificado.
4. Llama soporte.
5. Reserva con anticipo.
6. Recogida Casa Madrid.

### 89.9. B2B guía
1. Login B2B.
2. Cotización 200 cartuchos.
3. Aprobado por compras.
4. Albarán.

### 89.10. Regalo navidad
1. Selector "regalo a ciegas".
2. Cuestionario corto.
3. 5 sugerencias.
4. Compra con envoltura.
5. Tarjeta manuscrita.

### 89.11. Devolución talla incorrecta
1. Self-RMA.
2. Etiqueta prepago.
3. Recogida.
4. Reembolso 3 días.
5. Vuelve a comprar talla correcta.

### 89.12. Curador del mes
1. Recibe brief.
2. Curador firma 5 productos.
3. Foto + texto.
4. Publicación.
5. Eventos paralelos.

### 89.13. Suscripción Avituallamiento
1. Onboarding.
2. Primera caja.
3. Cambio de producto mes 2.
4. Pausa por viaje.
5. Reactivación.
6. Maestre al cabo de 8 meses.

### 89.14. Reserva expedición
1. `/expediciones`.
2. Filtros otoño + Cantábrico + alto.
3. PDP expedición.
4. Cuestionario.
5. Pago.
6. SMS 24 h antes.
7. Jornada.
8. Galería post-jornada.

### 89.15. Curso online
1. `/aula`.
2. Filtros pesca.
3. PDP curso atado de mosca.
4. Compra + kit.
5. 4 sesiones.
6. Certificado.
7. Compra moscas atadas a mano relacionadas.

---

## 90. CIERRE Y SIGN-OFF

### 90.1. Resumen ejecutivo
Montaraz es **una tienda online que se comporta como una experiencia de campo**. Mezcla curaduría editorial, animaciones cinéticas, 3D quirúrgico, atlas vivo, comunidad pequeña, magazine lento y un programa Maestre serio. Construido sobre Next.js 16 con todo el stack moderno (App Router, Partial Prerendering, Server Actions, Framer Motion, GSAP, R3F, Lenis, Sanity, Drizzle, Stripe, Algolia, Mapbox), con presupuesto de 56.000 € que se distribuye en diseño, desarrollo, animación, contenido y QA, dejando un buffer del 5 %.

### 90.2. Criterios de aceptación
- Home con 12 escenas operativas, todas con scroll telling, partículas, parallax y reduced-motion fallback.
- Catálogo con 5 vistas, filtros animados, comparador, cuaderno y 200 SKUs piloto.
- PDP con galería, selector, ficha técnica, visor 3D en 30 productos top, AR en 10 productos.
- Configurador rifle + caña operativos.
- Magazine con 12 artículos.
- Atlas con 50 marcadores.
- Newsletter con 200 suscritos pre-launch.
- Sistema Maestre operativo.
- Avituallamiento operativo con 1 caja enviada.
- Curso online y presencial agendados.
- Easter eggs (al menos 30 implementados).
- A11y WCAG AAA en flujos clave.
- LCP ≤ 2.0 s en home.
- Documentación viva publicada.

### 90.3. Riesgos asumidos
- Plazos ambiciosos: mitigados con fases.
- Cantidad de animaciones: budgets estrictos + fallbacks.
- Sensibilidad legal: asesoría dedicada.
- Mercado nicho: foco en LTV, no volumen.

### 90.4. Próximos pasos si apruebas
1. Kickoff con equipo (1 día).
2. Refinement del brief con tu input.
3. Setup repo, Vercel, Sanity, Stripe sandbox.
4. Diseño de tokens y first slice (Home + tienda).
5. Sprint 1.

### 90.5. Lo que no haremos (a propósito)
- Carrusel de logos de marcas en home.
- Pop-ups intrusivos.
- Contadores cuenta atrás vulgares.
- Sliders gigantes con frases sin sentido.
- "Chatbot" hueco.
- Banner cookies trampa.
- Black Friday agresivo.
- Comparativas fingidas de precios.
- "Nuevo. Nuevo. Nuevo." spam.

### 90.6. Lo que sí haremos (a propósito)
- Curaduría firmada.
- Magazine narrativo.
- Atlas vivo.
- Cuaderno personal.
- Trofeos respetuosos.
- Easter eggs silenciosos.
- Modo Tarde de Campo.
- Packaging silencioso.
- Soporte humano con cara y firma.
- Comunicación honesta.

### 90.7. Compromiso de calidad
- Cada release pasa por 6 checks: lint, types, tests, perf, a11y, visual.
- Cada PR requiere aprobación + screenshot.
- Cada change relevante con ADR.

### 90.8. Métrica norte estrella
- NPS ≥ 60 y LTV ≥ 900 € en 24 meses.

### 90.9. Final
> *Lo decidimos así, con calma. Como en el puesto.*

### 90.10. Firma del brief
- **Autor de este brief**: equipo Montaraz.
- **Fecha**: pre-launch, 2026.
- **Estado**: pendiente de visto bueno del comitente.
- **Próximo paso**: aprobación o ajustes; tras ello, pasamos al sprint 1.

---

## 91. ANEXO Z — NOTAS FINALES

### 91.1. Sobre el budget
- 56.000 € es ajustado para todo lo descrito. Sugerimos abordar en fases (sección 51).
- Si en algún momento detectamos que algo no aporta valor proporcional al coste, lo retiramos y comunicamos.

### 91.2. Sobre el plazo
- 14-18 semanas con un equipo lean.
- Posibilidad de soft launch a las 10 semanas con catálogo reducido.

### 91.3. Sobre la marca
- Nombre, paleta, voz y manifiesto pueden adaptarse si quieres otro espíritu.
- Las decisiones de identidad son tuyas; nuestra propuesta es punto de partida.

### 91.4. Sobre el código
- Repositorio limpio.
- Monorepo Turborepo.
- Documentación viva.
- Tests E2E desde sprint 1.

### 91.5. Sobre las animaciones
- Si el campo Framer Scroll que pides nos pide más, lo añadimos.
- La regla de oro es: nada distrae al "ir a comprar".

### 91.6. Sobre los easter eggs
- 220 ideas catalogadas; arrancamos con 30 visibles.
- Roll-out por trimestre.

### 91.7. Sobre la ética
- Cualquier cosa que vaya contra estos principios — la retiramos.
- Caza/pesca con respeto. Comercio con respeto. Tecnología con respeto.

### 91.8. Sobre la comunidad
- 200 socios fundadores invitados.
- Cada uno con voz y trato directo.

### 91.9. Sobre la documentación
- Todo lo descrito aquí se materializa en docs.
- Pública y privada en `/docs/`.

### 91.10. Cierre humano
> *"No vendemos productos: vendemos provisión."*
> *Si te parece que vale la pena, dame luz verde y empezamos.*
> *Buen viento.*

---

## 92. APÉNDICE EXTRA — DETALLES MINUCIOSOS

### 92.1. Cómo cargamos los font
```ts
import localFont from 'next/font/local'

export const sectra = localFont({
  src: [
    { path: './fonts/GT-Sectra-Regular.woff2', weight: '400', style: 'normal' },
    { path: './fonts/GT-Sectra-Medium.woff2', weight: '500', style: 'normal' },
    { path: './fonts/GT-Sectra-Bold.woff2', weight: '700', style: 'normal' }
  ],
  variable: '--font-sectra',
  display: 'swap'
})

export const sohne = localFont({
  src: [
    { path: './fonts/Söhne-Buch.woff2', weight: '400', style: 'normal' },
    { path: './fonts/Söhne-Halbfett.woff2', weight: '500', style: 'normal' },
    { path: './fonts/Söhne-Kräftig.woff2', weight: '600', style: 'normal' },
    { path: './fonts/Söhne-Dreiviertelfett.woff2', weight: '700', style: 'normal' }
  ],
  variable: '--font-sohne',
  display: 'swap'
})
```

### 92.2. Cómo configuramos Lenis
```ts
import Lenis from '@studio-freight/lenis'

const lenis = new Lenis({
  duration: 1.2,
  easing: t => Math.min(1, 1.001 - 2 ** (-10 * t)),
  smoothWheel: true,
  wheelMultiplier: 0.9,
  touchMultiplier: 1.2,
  infinite: false
})

function raf(time: number) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)
```

### 92.3. Cómo configuramos cursor magnético
```tsx
function MagneticButton({ children }) {
  const ref = useRef<HTMLButtonElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 240, damping: 26 })
  const sy = useSpring(y, { stiffness: 240, damping: 26 })

  function onMouseMove(e: React.MouseEvent) {
    const rect = ref.current!.getBoundingClientRect()
    const cx = e.clientX - rect.left - rect.width / 2
    const cy = e.clientY - rect.top - rect.height / 2
    x.set(cx * 0.25)
    y.set(cy * 0.25)
  }

  function onMouseLeave() {
    x.set(0); y.set(0)
  }

  return (
    <motion.button
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </motion.button>
  )
}
```

### 92.4. Cómo configuramos ScrollTrigger manifiesto
```ts
gsap.registerPlugin(ScrollTrigger, SplitText)
const split = new SplitText('.manifiesto p', { type: 'words' })

gsap.timeline({
  scrollTrigger: {
    trigger: '.manifiesto',
    start: 'top top',
    end: 'bottom top',
    scrub: 1.2,
    pin: true
  }
})
.from(split.words, { y: 40, opacity: 0, stagger: 0.04, ease: 'power2.out' })
.to('.venado-svg path', { drawSVG: '100%', duration: 1.2, ease: 'power3.inOut' }, '<')
```

### 92.5. Cómo configuramos Framer reduced-motion
```tsx
const shouldReduce = useReducedMotion()

<motion.div
  initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: shouldReduce ? 0.2 : 0.6, ease: [0.16, 1, 0.3, 1] }}
/>
```

### 92.6. Cómo configuramos R3F escena rifle
```tsx
<Canvas dpr={[1, 2]} camera={{ position: [0, 0.6, 2.4], fov: 38 }}>
  <Suspense fallback={null}>
    <Environment preset="sunset" />
    <ContactShadows opacity={0.4} scale={6} blur={2.4} far={1.6} />
    <RifleAssembly progress={progress} />
    <Bloom intensity={0.25} luminanceThreshold={0.9} />
    <Vignette eskil={false} offset={0.3} darkness={0.6} />
  </Suspense>
  <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 1.8} />
</Canvas>
```

### 92.7. Cómo configuramos Server Action add to morral
```ts
'use server'
import { z } from 'zod'
import { db } from '@/server/db'

const schema = z.object({
  variantId: z.string().uuid(),
  quantity: z.number().int().min(1).max(99)
})

export async function addToMorralAction(input: unknown) {
  const { variantId, quantity } = schema.parse(input)
  const session = await getSession()
  if (session?.user) {
    await db.insert(morralItems).values({ userId: session.user.id, variantId, quantity }).onConflictDoUpdate({
      target: [morralItems.userId, morralItems.variantId],
      set: { quantity: sql`${morralItems.quantity} + ${quantity}` }
    })
  } else {
    cookies().set('morral', encrypted(cart), { httpOnly: true, secure: true, sameSite: 'lax' })
  }
  revalidateTag('morral')
}
```

### 92.8. Cómo configuramos middleware
```ts
import { NextResponse } from 'next/server'
import { geolocation } from '@vercel/functions'

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)']
}

export function middleware(req: Request) {
  const url = new URL(req.url)
  const geo = geolocation(req)
  const res = NextResponse.next()
  res.headers.set('x-country', geo.country ?? 'ES')
  if (!url.pathname.startsWith('/api') && !url.pathname.match(/^\/(es|en|pt|fr|de|it)\b/)) {
    const lang = req.headers.get('accept-language')?.split(',')[0].toLowerCase() ?? 'es'
    const supported = ['es', 'en', 'pt']
    const target = supported.find(l => lang.startsWith(l)) ?? 'es'
    url.pathname = `/${target}${url.pathname}`
    return NextResponse.redirect(url)
  }
  return res
}
```

### 92.9. Cómo configuramos cabeceras de seguridad
```ts
// next.config.ts
const securityHeaders = [
  { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(self)' },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
  { key: 'Content-Security-Policy', value: cspString() }
]

export default {
  async headers() {
    return [{ source: '/(.*)', headers: securityHeaders }]
  }
}
```

### 92.10. Cómo configuramos OG image
```tsx
import { ImageResponse } from '@vercel/og'

export const runtime = 'edge'
export async function GET(req: Request) {
  const url = new URL(req.url)
  const title = url.searchParams.get('title') ?? 'Montaraz'
  return new ImageResponse(
    (
      <div style={{
        height: '100%', width: '100%', display: 'flex',
        background: '#0F0E0C', color: '#E6D5B0',
        fontFamily: 'GT Sectra', fontSize: 96, padding: 96,
        alignItems: 'flex-end', justifyContent: 'flex-start'
      }}>
        <div>{title}</div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
```

### 92.11. Cómo configuramos rate-limit
```ts
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

const rl = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(60, '60 s')
})

export async function POST(req: Request) {
  const ip = req.headers.get('x-forwarded-for') ?? 'anon'
  const { success } = await rl.limit(ip)
  if (!success) return new Response('Calma.', { status: 429 })
  // ...
}
```

### 92.12. Cómo configuramos Stripe webhook
```ts
import Stripe from 'stripe'
export const runtime = 'nodejs'

export async function POST(req: Request) {
  const sig = req.headers.get('stripe-signature')!
  const body = await req.text()
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WH_SECRET!)
  } catch {
    return new Response('bad signature', { status: 400 })
  }
  switch (event.type) {
    case 'payment_intent.succeeded':
      await handlePaid(event.data.object as Stripe.PaymentIntent)
      break
    case 'charge.refunded':
      await handleRefund(event.data.object as Stripe.Charge)
      break
  }
  return new Response('ok')
}
```

### 92.13. Tests Playwright (extracto)
```ts
test('comprar como invitado con tarjeta', async ({ page }) => {
  await page.goto('/tienda/caza/municion/308-win')
  await page.click('text=Hornady ELD-X')
  await page.click('text=Añadir al morral')
  await page.click('aria/Morral')
  await page.click('text=Pasar por Caja')
  await page.fill('[name=email]', 'test@test.com')
  await page.click('text=Continuar')
  await page.fill('[name=address1]', 'Calle Mayor 1')
  await page.click('text=Continuar')
  await page.frameLocator('iframe').fill('[name=cardNumber]', '4242424242424242')
  await page.click('text=Confirmar pedido')
  await expect(page.locator('text=Hecho')).toBeVisible()
})
```

### 92.14. ESLint flat config (extracto)
```ts
import nextPlugin from '@next/eslint-plugin-next'
import tsPlugin from 'typescript-eslint'
import tailwind from 'eslint-plugin-tailwindcss'

export default [
  ...tsPlugin.configs.strictTypeChecked,
  { plugins: { '@next/next': nextPlugin, tailwindcss: tailwind } },
  { rules: { 'no-unused-vars': 'error', 'no-console': 'warn' } }
]
```

### 92.15. Algunas conventions
- Server-only imports con `import 'server-only'`.
- `use server` solo en funciones.
- `use client` solo en componentes que necesitan estado.
- Suspense boundaries cerca del consumo de datos.
- Streaming SSR siempre que posible.

### 92.16. Atajos teclado documentados
- `cmd+k` buscar.
- `g h` home.
- `g t` tienda.
- `g r` revista.
- `g a` atlas.
- `g m` morral.
- `g c` cuenta.
- `c` modo curador.
- `s` toggle sonido.
- `m` toggle motion.
- `n` modo Tarde de Campo.
- `?` cheatsheet.
- `esc` cerrar modales.

### 92.17. Custom hooks
- `useScrollProgress`.
- `useReducedMotion`.
- `useMediaQuery`.
- `useIntersection`.
- `useMagnetic`.
- `useTilt`.
- `useCursor`.
- `useFeatureFlag`.
- `useGeoip`.
- `useLunar`.
- `useTide`.

### 92.18. Cliente API
- `apiClient` con interceptors.
- Auto-retry con backoff.
- Idempotency-Key generado.

### 92.19. Errores tipados
- `AppError`, `ValidationError`, `AuthError`, `BillingError`, `InventoryError`, `LicenceError`.

### 92.20. Final del documento
- Este brief queda firmado por el equipo Montaraz y a la espera de tu visto bueno.
- *Buen viento.*


---

## 93. CHECKLIST FINAL DE FUNCIONALIDADES (PARA NO OLVIDAR NADA)

> Lista exhaustiva de pequeños detalles que, sumados, hacen que la web pase de "buena" a "top 1 del mundo en su nicho". Si dudas si lo añadimos, lo añadimos.

1. Splash con frase del manifiesto solo la 1ª visita.
2. Pre-loader con brújula animada.
3. Hero con vídeo loop optimizado a 1.4 MB.
4. Niebla SVG que sigue al cursor.
5. Capa de grano de película global.
6. Cursor custom con halo lag.
7. Cursor que cambia según contexto (texto, link, drag, aim).
8. Reading progress bar de 1 px arriba.
9. Side section indicator de líneas.
10. Header sticky con backdrop blur.
11. Mega menu con preview de imágenes.
12. cmd+k buscador global con tabs federadas.
13. Atajos `g h`, `g t`, `g r`, etc.
14. Search por voz opcional.
15. Search semántico vector con fallback.
16. Toggle de Modo Tarde de Campo.
17. Detector de hora automático para Tarde de Campo.
18. Toggle de sonido ambiente.
19. Toggle de motion reducido.
20. Idioma con bandera y autocompletado.
21. Cambio de moneda con conversión diaria.
22. Cuaderno (wishlist) con múltiples libretas.
23. Cover picker para libretas.
24. Compartir cuaderno con link único.
25. Morral con animación parabólica al añadir.
26. Persistencia de morral en localStorage + sync server.
27. "Apartar 24 h" sin pago.
28. Pre-llenado de checkout con datos de cuenta.
29. Apple Pay / Google Pay / Bizum / Klarna / Sequra.
30. SEPA y transferencia para B2B.
31. Stripe Tax automatizado.
32. Idempotencia en pagos.
33. Reserva de stock 10 min en checkout.
34. Sello "ENVIADO" cae al confirmar.
35. Tracking de envío en cuenta.
36. Self-RMA con etiqueta prepago.
37. Devolución por cualquier motivo.
38. Garantía Montaraz: si falla al 1er uso, lo reemplazamos.
39. Soporte humano con foto en chat.
40. SLA chat 3 min, email 12 h.
41. Pregúntale a Tomé (asistente IA).
42. RAG sobre magazine, glosario, atlas.
43. AR en cuchillería premium (USDZ + glTF).
44. WebXR opcional.
45. Visor 3D en 30 productos top.
46. Configurador rifle / escopeta / caña / mosca / óptica.
47. Save configurator state en URL base64.
48. Compartir configuración con OG image dinámica.
49. Quick view modal lateral.
50. Comparador 4 productos lado a lado.
51. Tabla balística automática.
52. Tabla mareas en PDP pesca relevantes.
53. Tabla lunar global.
54. Etiqueta "Hand-tested" con sello tinta.
55. Etiqueta "Edición limitada" con números.
56. Etiqueta "Sin plomo".
57. Etiqueta "Curador: [nombre]".
58. Etiqueta "Hecho en [país]".
59. Stock animado con siluetas.
60. Aviso "Quedan {N}" cuando bajo stock.
61. Aviso "Avísame" cuando agotado.
62. Restock con notificación email + push.
63. Reseñas verificadas con badge.
64. Histograma de reseñas.
65. Foto UGC en reseñas.
66. Filtrar reseñas por talla/calibre/uso.
67. Curador responde top reseñas.
68. Glosario embebido con tooltip.
69. Microensayos por familia firmados.
70. "Por qué lo elegimos" en cada PDP.
71. "Va con esto" compatibilidad.
72. "Otros eligen" recomendación.
73. "Antes consideraste" historial.
74. Curador del mes en home.
75. Drops semanales jueves.
76. Drops Maestre 24 h antes.
77. Avituallamiento mensual con caja madera.
78. Pause/Skip Avituallamiento sin penalización.
79. Curso online + presencial.
80. Certificado curso.
81. Calendario Aula con próximas convocatorias.
82. Expediciones con guía verificado.
83. Cuestionario pre-jornada.
84. Galería post-jornada con consentimiento.
85. Magazine con 60 piezas/año.
86. Audio narrado profesional.
87. Pull quotes serif.
88. Drop caps.
89. Side notes Tufte-style.
90. Footnotes con popover.
91. TOC con anchors.
92. Internal linking magazine ↔ producto ↔ atlas.
93. Atlas con 200+ marcadores.
94. Estilo Mapbox custom topográfico.
95. Capas filtrables (cotos, ríos, vedas, mareas, hidrología).
96. Vista 2.5D con terrain.
97. Compartir vista atlas.
98. Mapa de migraciones easter egg.
99. Mapa de ríos perdidos 1950.
100. Calendario lunar con clip-path.
101. Mareas con visx wave.
102. Predicción pesca/caza por algoritmo.
103. Heatmap anual.
104. Diario con entradas rápidas.
105. Plantilla mobile diario.
106. Autocompletado luna/marea al apuntar captura.
107. Trofeos pared 3D con perspective.
108. Foto + sello + región (sin coords exactas).
109. Sello "Verificado" por guía oficial.
110. Compartir trofeo con OG dinámica.
111. Privacidad por defecto en trofeos.
112. Club Maestre con 3 tiers.
113. Cálculo automático del nivel.
114. Cortesía 3 meses si baja.
115. Insignia Maestre con corona dorada.
116. Cuaderno secreto Maestre.
117. Concierge Slack privado.
118. Cena Maestre anual.
119. Beca joven recechista/mosquera.
120. Newsletter "Cuaderno de Bitácora" mensual.
121. Double opt-in obligatorio.
122. Carta de bienvenida con audio campo 60 s.
123. Mood "Modo Sigilo" oculta decoraciones.
124. Modo "Cuaderno Verde / Azul / Pergamino".
125. Modo CRT amber easter egg.
126. Konami code: pegasus a tinta.
127. Brújula del pre-loader: clics al sur.
128. Footer notas: long press abre cuaderno local.
129. Logo retro long press.
130. Cuaderno editable footer 4 s.
131. Mosca silenciosa: cursor mosca al inactivo.
132. Cárabo a las 03:33 con audio.
133. Lluvia atlas Cantábrico cuando llueve en vivo.
134. Marqueé infinita en footer.
135. Letra MONTARAZ a 240 px asentándose.
136. Mapa fondo footer dibujándose.
137. Botones magnéticos.
138. Tilt 3D en cards.
139. Imágenes con zoom 1.04 al entrar.
140. Manifesto con word stagger + path draw venado.
141. Atlas preview rotación 3°.
142. Configurador preview 3D ensamblando rifle.
143. Calendario lunar con clip-path.
144. UGC mosaico cinético.
145. Caja Avituallamiento abriendo con scroll.
146. Pluma cae en newsletter input.
147. Footer rosa de vientos.
148. Toast con stroke check.
149. Empty state "Tu morral está vacío".
150. Empty state "Sin rastro".
151. 404 perro olfateando.
152. 500 barril rajado.
153. Frases por hora en header.
154. Saludo por geo IP.
155. Mensaje meteorológico contextual.
156. Mensaje luna nueva.
157. Mensaje día San Hubert.
158. Mensaje cumpleaños con 8 % descuento.
159. Sello "Primer monte" / "Primer río".
160. Sello "Maestre del año".
161. Sello "Honesto" si nunca usaste cupón.
162. Sello "Cuchillero".
163. Sello "Catch & release".
164. Sello "Sin plomo".
165. Sello "Eclipse".
166. Sello "San Hubert".
167. Sello "Patrón".
168. Sello "Río que es tu apellido".
169. Sello "Lector" / "Escuchante" / "Fotógrafo".
170. Sello "Independiente" / "Hablador".
171. Sello "Aniversario 1, 2, 5, 10".
172. Insignia digital "Fundador" (200 socios).
173. WCAG AAA en flujos clave.
174. Skip-links visibles.
175. Focus visible con anillo mostaza.
176. Reduced motion path en CI.
177. Screen reader anuncio de filtros.
178. Subtítulos audio magazine.
179. Lectura de teclas con `?`.
180. Modo lectura magazine.
181. WebAuthn passkey login.
182. 2FA TOTP.
183. Magic link email login.
184. Google/Apple OAuth.
185. RGPD: export, delete, edit datos.
186. Banner cookies con 3 categorías.
187. Política privacidad sobria.
188. Centro de preferencias notifications.
189. Push web opt-in.
190. SMS solo transaccional.
191. Atajos haptics mobile.
192. PWA opcional.
193. Offline-first cuaderno.
194. Cache servidor con tags revalidables.
195. Partial Prerendering con holes dinámicos.
196. ISR 60 s home, 5 min catálogo, 10 min PDP, 24 h magazine.
197. Edge runtime búsqueda y middleware.
198. LCP ≤ 2.0 s home/PDP.
199. Vídeo hero AV1 ≤ 1.4 MB.
200. Imágenes AVIF con LQIP blur.
201. KTX2 texturas 3D.
202. Draco + Meshopt modelos.
203. Audio Opus 96 kbps.
204. Font subsetting agresivo.
205. CSS containment.
206. Critical CSS inline.
207. No polyfills innecesarios.
208. Modern bundling (Turbopack).
209. Rate-limit endpoints sensibles.
210. CSRF tokens Server Actions.
211. CSP nonces.
212. SRI CDNs externos.
213. Headers seguros completos.
214. Cloudflare delante para WAF + DDoS.
215. Stripe Radar custom rules.
216. Sentry P0 Slack alerts.
217. Synthetics 5 min.
218. Lighthouse CI por PR.
219. Visual regression Chromatic.
220. axe-playwright a11y CI.
221. k6 load tests.
222. ZAP scan staging.
223. SCA Snyk + Renovate.
224. Secret rotation trimestral.
225. PITR Postgres.
226. Backups encriptados + restore test mensual.
227. Cloudflare Turnstile captcha.
228. Logs estructurados Axiom.
229. OpenTelemetry traces.
230. RUM Vercel.
231. Sanity webhooks → revalidateTag.
232. Inngest cron jobs.
233. Recordatorios licencia.
234. Re-cálculo Maestre mensual.
235. Limpieza reservas vencidas.
236. Recordatorios renovación.
237. Recordatorios cumpleaños.
238. Renovaciones Stripe automáticas.
239. ERP simple con multi-warehouse.
240. Click&collect armerías partner.
241. Routing inteligente despachos.
242. Albarán + etiqueta 1 clic.
243. Picking app mobile.
244. Reconciliación contable diaria.
245. Export Holded / Quipu.
246. Manual review queue.
247. Acceso audit log.
248. Status público.
249. Postmortems blameless.
250. Documentación viva en `/docs/`.
251. Storybook publicado.
252. Manual de marca.
253. Manual de soporte.
254. Manual operativo almacén.
255. Plantilla ADR.
256. Plantilla runbook.
257. Plantilla PRD.
258. Changesets.
259. CODEOWNERS.
260. Commitlint + husky.
261. Lint-staged.
262. Branch protection.
263. PR template.
264. Squash merge.
265. Trunk-based.
266. Preview por PR.
267. Promoción manual staging→prod.
268. Rollback 1 clic.
269. Hotfix branch.
270. Canary 5 % crítico.
271. Feature flags OpenFeature.
272. Targeting cohort.
273. Slack #releases auto.
274. Daily Slack pulse.
275. Comunicación clientes.
276. Loyalty Slack privado.
277. Política antiabuso en comunidad.
278. Sello "Custodio" para moderadores voluntarios.
279. Foro anual sobre vedas/cuotas.
280. Plantaciones, limpieza riberas.
281. Eventos infantiles.
282. Programas mujeres y caza.
283. Mentoría 30 min/mes Maestres.
284. Reporte anual sostenibilidad.
285. 1 % donaciones operativo.
286. Devolución de caja Avituallamiento -5 € descuento.
287. Sello cera en pedidos > 300 €.
288. Tarjeta a mano > 500 €.
289. Cuaderno hojas blancas > 200 €.
290. Lana cruda y serrín protector.
291. Recibo en kraft sólo si lo pides.
292. Embalaje 100 % reciclable.
293. Plant-based ink en cartón.
294. Etiquetas reciclables.
295. Sin plásticos decorativos.
296. Donaciones a RedFly, Fundación Oso Pardo, ANSE, Quercus.
297. Cero greenwashing.
298. Transparencia financiera (`/numeros` opcional).
299. Brand guidelines documentados.
300. Trademark UE registrado.

### 93.x. Cierre
Si el comitente revisa esta lista de 300 ítems y todavía piensa "esto es poco", la propuesta es: revisamos lo que falta, lo añadimos, y replanteamos plazos. Sin escatimar en lo que distingue a Montaraz del resto.

---

## 94. ÚLTIMA PÁGINA: PEDIDO DE VISTO BUENO

> *Aquí termina este brief.*
>
> Si quieres, lo tomamos como base para arrancar el sprint 1. Si quieres ajustar algo (nombre, paleta, alcance, fases, animaciones, easter eggs, productos piloto), lo refinamos antes de tocar código.
>
> Si lo confirmas, en 48 h tendrás:
> 1. Setup del repo monorepo Turborepo con `apps/web`, `apps/studio`, `packages/ui`, `packages/db`.
> 2. Tokens de diseño implementados en Tailwind v4.
> 3. Home pre-rendered con escena 1 + 2 funcionando.
> 4. Catálogo en su forma básica.
> 5. PDP "Sako 90 Hunter" funcional al 100 %.
> 6. Storybook publicado.
> 7. Sanity Studio con esquemas iniciales.
>
> Y a partir de ahí, sprint a sprint, llevamos Montaraz a ser **lo que ahora no existe en el mundo de caza y pesca digital**.
>
> Espero tu *adelante*.
>
> *Buen viento.*


---

## 95. APÉNDICE FINAL — DETALLES QUE NO CABEN EN OTRA PARTE

### 95.1. Pequeños "extras" que pueden parecer secundarios pero suman
1. Cada email transaccional firmado a mano por una persona (no "Equipo Montaraz" sin más).
2. PDF de factura con tipografía Sectra y sello discreto de la casa.
3. Albarán impreso en kraft con número de bitácora.
4. Tarjeta interior con dato curioso del producto.
5. Foto polaroid generada del pedido (opt-in) compartible.
6. Modo "vista impresión" en magazine.
7. Botón "Guardar para leer offline" en magazine (PWA).
8. Reproducción audio en velocidad 0.9x / 1.0x / 1.2x.
9. Modo "Sólo texto" en magazine (sin imágenes, para ancho de banda bajo).
10. Etiqueta "Spoiler" en magazine cuando hay revelación.

### 95.2. Cosas tipo Apple — atención al detalle
1. Layout shift cero en cards (aspect-ratio + skeletons).
2. Iconos con micro-rotación 1° al hover (no más).
3. Iconos siempre del mismo grosor (1.5 px).
4. Cero "skipped frames" en scroll (Lenis tuned).
5. Microcopy en español de España, no neutro de Latam por defecto.
6. Botón "Llamar" cuando estás en mobile.
7. Botón "Compartir" usa Web Share API en mobile.
8. Drag&drop con preview thumbnail.
9. Pegado de imagen funciona en uploads.
10. Atajos teclado documentados en `?` con tarjeta sobria.

### 95.3. Cosas Linear-like
1. Cmd+K omnipresente.
2. Estados con animación spring corta.
3. Sin "spinners infinitos": tiempos máximos con fallback.
4. Tooltips de teclado con keycaps.
5. Microtransiciones cuadradas, no rebote.

### 95.4. Cosas Hermès-like
1. Sello cera digital reproduce textura real.
2. Tipografía hairline en headlines a 96 px.
3. Imagen producto sobre lino, no PNG cutout.
4. Tarjetas con sombra "papel sobre papel", no "drop shadow Material".
5. Bordes 1 px en color tinta, no negro 100 %.

### 95.5. Cosas Aesop-like
1. Microcopy reflexivo y físico.
2. Embalaje serio, sin gimmicks.
3. Sostenibilidad sin disculpas.
4. Tienda física como ritual.

### 95.6. Cosas Patagonia-like
1. Reparaciones, no solo devoluciones (Worn Wear inspired).
2. Magazine militante en lo conservacionista.
3. Reporting anual de impacto.

### 95.7. Cosas Orvis-like
1. Curación en pesca de mosca con voz propia.
2. Atado a mano local.
3. Guías y cursos integrados al ecommerce.

### 95.8. Cosas Filson-like
1. Materiales duraderos.
2. Reposición de piezas (botones, cremalleras).
3. Servicio "reencuadernación" en cuero.

### 95.9. Detalles ibéricos únicos
1. Vocabulario propio: morral, cuaderno, caja, casa, avituallamiento, maestre.
2. Curadores ibéricos.
3. Ríos y cotos reales (con tacto).
4. Conservas y curados ibéricos.
5. Tradición cuchillera Solsona, Albacete, Taramundi.
6. Tradición armera Eibar.
7. Magazine en español con citas literarias hispanas.
8. Atlas centrado en Iberia (España + Portugal).
9. Locales tipo "Casa Montaraz Madrid/Asturias".
10. Eventos físicos ibéricos.

### 95.10. Detalles que crean alma
1. Manuscritos a mano de fundador en cada caja > 200 €.
2. Audio narrado por voz reconocible.
3. Curadores con foto y firma.
4. Fotografía con luz natural.
5. Tipografía con detalles humanos.
6. Pausa antes del checkout: "¿Listo?".
7. Microagradecimiento en cada confirmación.
8. Línea final del footer con "café y respeto".

### 95.11. Detalles que multiplican LTV
1. Avituallamiento mensual.
2. Cursos.
3. Expediciones.
4. Club Maestre con beneficios reales.
5. Comunidad pequeña pero activa.
6. Concierge dedicado.
7. Eventos físicos.
8. Magazine semanal.
9. Newsletter mensual.
10. Carta del fundador trimestral.

### 95.12. Detalles que evitan dark patterns
1. Sin countdown vulgar.
2. Sin "X personas miraron esto".
3. Sin pre-tickeo de suscripciones.
4. Sin auto-renovación oculta.
5. Sin checkbox de consentimiento por defecto activado.
6. Sin scroll = consentimiento.
7. Sin "los términos de servicio cambian sin aviso".
8. Política de retorno generosa.
9. Reembolso visible.
10. Email opt-out inmediato.

### 95.13. Detalles que evitan greenwashing
1. Reporte anual de sostenibilidad con números.
2. Donaciones trazadas.
3. Compensación CO2 verificada.
4. Etiquetas honestas.
5. Packaging real.
6. No usar "eco" como adjetivo vacío.

### 95.14. Detalles para fidelizar a los curadores
1. Compensación clara.
2. Visibilidad pública.
3. Voz propia.
4. Eventos.
5. Co-creación de drops.

### 95.15. Detalles para fidelizar al equipo interno
1. Equity, no sólo salario.
2. Días de campo pagados (mín. 3 al año).
3. Trabajo en remoto + retiros trimestrales.
4. Material Montaraz incluido.
5. Formación pagada.

### 95.16. Detalles para fidelizar a la comunidad
1. Eventos.
2. Mentoría.
3. Reconocimiento (sellos).
4. Acceso anticipado.
5. Foro respetuoso.

### 95.17. Detalles para fidelizar a los socios B2B
1. Catálogo dedicado.
2. Precios netos.
3. Albarán propio.
4. Condiciones de pago.
5. Atención dedicada.

### 95.18. Detalles que crean noticia
1. Lanzamiento de Casa Madrid.
2. Lanzamiento de Casa Asturias.
3. Drops limitados con artesano.
4. Magazine edición impresa anual.
5. Beca joven.
6. Foro anual.
7. Eventos infantiles.
8. Donaciones medidas.
9. Programa de mujeres y caza.
10. Cena Maestre anual.

### 95.19. Detalles que enriquecen el customer service
1. Foto y firma del agente.
2. Llamada vídeo previa cita.
3. Visita a casa Montaraz.
4. Mentoría con curador.

### 95.20. Detalles que cuidan a la prensa
1. Press kit completo en `/prensa`.
2. Imágenes hi-res descargables.
3. Bios completas de curadores.
4. Datos de impacto.
5. Contactos directos.

### 95.21. Resumen final
Cuando termines de leer este brief, estaremos cerca de las 9.500 líneas mínimas que pediste. Cada sección está pensada para que un equipo (no necesariamente nosotros) pueda **ejecutarla** sin ambigüedad. Cada detalle se justifica por el hecho de que Montaraz no es **una tienda online**, sino *la experiencia digital que necesita el mundo ibérico de caza y pesca premium*.

### 95.22. Estado: pendiente de visto bueno
- Si quieres ajustes, dímelo y los aplico antes de programar nada.
- Si quieres luz verde, dímelo y arrancamos el sprint 1 mañana.
- Si quieres replanteo total, también lo hacemos: tu dinero, tu visión.

### 95.23. Última frase
> *Aquí no hay productos: hay provisión. Aquí no hay carrito: hay morral. Aquí no hay clientes: hay socios. Y aquí no hay prisa que valga lo bien hecho.*

### 95.24. Sello final
> *Forjado en Madrid y Asturias, con tinta, café y respeto. — Montaraz, 2026.*

