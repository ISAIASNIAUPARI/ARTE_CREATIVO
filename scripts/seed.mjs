// Carga el contenido real de la web original en Sanity: imágenes + textos de
// las 6 páginas. Vuelve a correr sin miedo — los singletons usan createOrReplace
// (mismo _id siempre) y las colecciones (project, toolCard) se limpian primero.
import { createClient } from '@sanity/client'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import dotenv from 'dotenv'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: path.join(__dirname, '..', '.env.local') })

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = process.env.SANITY_API_WRITE_TOKEN

if (!projectId || !token) {
  console.error('Faltan NEXT_PUBLIC_SANITY_PROJECT_ID o SANITY_API_WRITE_TOKEN en .env.local')
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: '2024-01-01',
  useCdn: false,
})

const ASSETS = path.join(__dirname, '..', 'assets')
const assetCache = new Map()

async function img(filename, alt) {
  const key = filename
  if (!assetCache.has(key)) {
    console.log('  subiendo imagen', filename)
    const buffer = readFileSync(path.join(ASSETS, filename))
    const asset = await client.assets.upload('image', buffer, { filename })
    assetCache.set(key, asset)
  }
  const asset = assetCache.get(key)
  return { _type: 'image', asset: { _type: 'reference', _ref: asset._id }, alt }
}

async function file(filename) {
  console.log('  subiendo archivo', filename)
  const buffer = readFileSync(path.join(ASSETS, filename))
  const asset = await client.assets.upload('file', buffer, { filename })
  return { _type: 'file', asset: { _type: 'reference', _ref: asset._id } }
}

async function singleton(id, type, fields) {
  console.log('→', id)
  await client.createOrReplace({ _id: id, _type: type, ...fields })
}

async function main() {
  console.log('Proyecto Sanity:', projectId, '/', dataset)

  const logo = await img('logo-arte-creativo.png', 'Arte Creativo')
  const alexStanding = await img('alex-standing.png', 'Isaías Anrrango, diseñador web freelance en Quito')
  const botAvatar = await img('bot-avatar.png', 'Asistente Artly')
  const heroVideo = await file('hero-bg.mp4')

  // ── Ajustes generales ────────────────────────────────────────────────
  await singleton('siteSettings', 'siteSettings', {
    brandName: 'Arte Creativo',
    logo,
    phoneDisplay: '+593 96 260 6760',
    email: 'info@alexfreelancer.com',
    addressLine: 'Quito - Ecuador',
    mapLink: 'https://maps.app.goo.gl/YcRFeSqC4J721aLz5',
    whatsappNumber: '593998381419',
    whatsappShortLink: 'https://w.app/ztwmvu',
    footerCopyright: 'Todos los derechos reservados. © Isaías Freelancer 2026',
    chatEnabled: true,
    // Nivel 2 (protocolo de ciberseguridad): el navegador ya envía esta clave en cada
    // request del chat, así que tenerla aquí no abre una exposición nueva. Si el
    // agente de n8n vuelve a cambiar de endpoint/clave, solo hay que tocar este valor
    // (o el campo "Webhook del asistente" en Ajustes generales del Studio).
    chatWebhookUrl:
      'https://n8n-n8n.kwtwgj.easypanel.host/webhook/arte-creativo-completo?key=714a2572a710151d07155979eaa4676a7f1f4f99ab6474fb',
    chatBotAvatar: botAvatar,
    chatQuickReplies: [
      { _key: 'q1', label: '📍 Ubicación en Quito', question: '¿Dónde están ubicados en Quito?' },
      { _key: 'q2', label: '📁 Ver Portafolio', question: 'Quiero ver el portafolio de proyectos' },
      { _key: 'q3', label: '💲 Consultar Precios', question: '¿Cuánto cuesta una página web?' },
    ],
    carouselAutoplay: true,
    showConsultBadge: true,
    showDangerTape: true,
  })

  // ── Inicio ───────────────────────────────────────────────────────────
  await singleton('homeHero', 'homeHero', {
    eyebrow: 'Diseño de Páginas web\nQuito - Ecuador',
    heading: 'Transformo tu visión en una plataforma de ventas de alto impacto',
    headingHighlight: 'ventas',
    subheading: 'Diseño sitios web rápidos, modernos y optimizados para Google que convierten visitantes en clientes.',
    ctaLabel: 'ASESORIA GRATUITA',
    heroVideo,
    tags: [
      'DISEÑO WEB EN QUITO',
      'WORDPRESS & ELEMENTOR PRO',
      'LANDING PAGES DE ALTO IMPACTO',
      'OPTIMIZACIÓN SEO',
      'IMPLEMENTACIÓN DE IA',
      'TRACKING DE META PIXEL',
    ],
  })

  await singleton('homeProblems', 'homeProblems', {
    heading: 'Los 3 Problemas de una Página Web',
    subheading: 'Muchos negocios pierden oportunidades por tener una web que no comunica confianza.',
    items: [
      { _key: 'p1', title: '¿No Vende?', text: 'Tu sitio debe ser un imán de clientes, no un gasto.' },
      { _key: 'p2', title: '¿Es Lenta?', text: 'Si tarda más de 3 segundos en cargar, el cliente se va con la competencia.' },
      { _key: 'p3', title: '¿Desactualizada?', text: 'Un diseño obsoleto aleja a los clientes de alto valor.' },
    ],
    tapeText: '- PELIGRO',
  })

  await singleton('homeAbout', 'homeAbout', {
    eyebrow: 'Sobre Mí',
    heading: 'Tu socio estratégico en el mundo digital',
    text: 'Fusiono visión artística e IA avanzada para construir herramientas digitales que no solo se ven bien, sino que facturan.',
    points: ['Diseño Web', 'SEO & Optimización', 'Multimedia con IA', 'Publicidad Digital (Ads)'],
    photo: alexStanding,
    badgeNumber: '+2 Años',
    badgeLabel: 'EXPERIENCIA DIGITAL',
  })

  await singleton('homeResults', 'homeResults', {
    heading: 'Resultados Reales',
    testimonials: [
      { _key: 't1', company: 'Munay Arte Ecuador', name: 'Marco Vinicio', text: 'Lograr que una marca de artesanías se vea moderna y global no es fácil. Isaías capturó nuestra esencia y la elevó con una interfaz limpia, funcional y visualmente impactante. Su visión artística combinada con IA nos ha permitido destacar en un mercado muy competitivo.' },
      { _key: 't2', company: 'Moda WM', name: 'Valentina Méndez', text: 'Trabajar con Isaías fue un punto de inflexión para nuestro e-commerce. No solo rediseñó el sitio con una estética impecable, sino que implementó una estrategia de conversión que duplicó nuestras ventas en solo tres meses. Entiende el negocio digital como pocos.' },
      { _key: 't3', company: 'Megalaptops', name: 'Elena Santillán', text: 'Teníamos procesos manuales lentos para tomar pedidos. Isaías centralizó todo el catálogo y los pedidos por WhatsApp en una plataforma rápida y clara. Hoy vendemos más y respondemos en minutos, no en horas.' },
      { _key: 't4', company: 'Escuela de Fútbol Propani', name: 'Sofía Ramírez', text: 'Nuestra web era lenta y transmitía desconfianza. Isaías hizo una auditoría profunda y optimizó todo: SEO técnico, velocidad y experiencia de usuario. Las inscripciones de nuevos alumnos subieron desde el primer mes. ¡Altamente recomendado!' },
      { _key: 't5', company: 'Mister Piromania', name: 'Julián Castro', text: 'Buscábamos algo que rompiera con lo genérico del sector. Isaías fusionó diseño artístico con herramientas de IA para la producción multimedia y logró una web vanguardista que refleja exactamente lo que hacemos en cada espectáculo.' },
      { _key: 't6', company: 'Barak Inmobiliaria', name: 'Michael Chen', text: 'Isaías es más que un freelancer: es un arquitecto digital. Tomó nuestras ideas sueltas y las convirtió en un panel autoadministrable con mapas interactivos que multiplicó nuestros prospectos sin depender de portales externos.' },
    ],
  })

  // ── Nosotros ─────────────────────────────────────────────────────────
  await singleton('nosotrosHero', 'nosotrosHero', {
    eyebrow: 'Mi historia',
    heading: 'Diseño con alma de artista',
    headingHighlight: 'artista',
    text: 'Soy Isaías, un creador digital ubicado en Quito que cree que una web no solo debe verse bien, sino funcionar como una máquina de ventas perfectamente calibrada',
    tags: [
      'WORDPRESS & ELEMENTOR PRO',
      'LANDING PAGES DE ALTO IMPACTO',
      'OPTIMIZACIÓN SEO',
      'IMPLEMENTACIÓN DE IA',
      'TRACKING DE META PIXEL',
      'DISEÑO WEB EN QUITO',
    ],
  })

  await singleton('nosotrosPillars', 'nosotrosPillars', {
    heading: '¿Tu presencia digital está trabajando para ti?',
    subheading: 'Muchos negocios pierden oportunidades por tener una web que no comunica confianza.',
    items: [
      { _key: 'i1', title: 'Estética', text: 'Visión artística pura. Diseño interfaces que cautivan y transmiten la esencia única de tu marca.' },
      { _key: 'i2', title: 'Funcionalidad', text: 'Código limpio y eficiente. Utilizo tecnologías modernas para asegurar rapidez y seguridad.' },
      { _key: 'i3', title: 'Resultados', text: 'Foco en la conversión. Cada botón está estratégicamente ubicado para transformar visitantes en clientes.' },
    ],
  })

  await singleton('nosotrosWorkStyle', 'nosotrosWorkStyle', {
    heading: 'Forma de trabajar',
    items: [
      { _key: 's1', highlight: '🎯 Escucho primero:', text: 'cada negocio tiene su propia historia.' },
      { _key: 's2', highlight: '🛠️ Diseño con propósito:', text: 'estética, funcionalidad y SEO.' },
      { _key: 's3', highlight: '🤝 Comunicación directa:', text: 'sin intermediarios, solo tú y yo.' },
    ],
  })

  await singleton('nosotrosBio', 'nosotrosBio', {
    heading: 'Tu socio estratégico en el mundo digital',
    text: 'Soy Isaías, experto en convertir clics en clientes desde Quito. Fusiono visión artística e IA avanzada para construir herramientas digitales que no solo se ven bien, sino que facturan.',
    points: ['Diseño Web', 'SEO & Optimización', 'Multimedia con IA', 'Publicidad Digital (Ads)'],
    ctaLabel: 'HABLEMOS DE TU PROYECTO',
    photo: alexStanding,
    badgeNumber: '+2 Años',
    badgeLabel: 'EXPERIENCIA DIGITAL',
  })

  // ── Portafolio ───────────────────────────────────────────────────────
  await singleton('portfolioHero', 'portfolioHero', {
    eyebrow: 'PORTAFOLIO SELECCIONADO',
    heading: 'Proyectos que Impulsan Negocios',
    headingHighlight: 'Impulsan',
    subheading: 'Una muestra de soluciones digitales enfocadas en conversión y estética para marcas que buscan destacar en el mercado digital.',
    tags: ['TIENDAS VIRTUALES', 'LANDING PAGES', 'SITIOS INFORMATIVOS', 'SISTEMAS AUTOADMINISTRABLES', 'SHOPIFY', 'WORDPRESS'],
  })

  // ── Blog ─────────────────────────────────────────────────────────────
  await singleton('blogHero', 'blogHero', {
    eyebrow: 'BLOG DE NOTICIAS WEB',
    heading: 'Blog de Isaías Freelancer',
    headingHighlight: 'Isaías',
    subheading: 'Una muestra de soluciones digitales enfocadas en conversión y estética para marcas que buscan destacar en el mercado digital.',
    toolsLabel: 'Herramientas oficiales',
  })

  // ── Contacto ─────────────────────────────────────────────────────────
  await singleton('contactHero', 'contactHero', {
    heading: 'Contactar con Isaías Freelancer',
    paragraph1:
      'Si buscas un diseñador web profesional en Ecuador, estás en el lugar correcto. Soy Isaías Freelancer, especialista en sitios web WordPress, tiendas online, y diseños personalizados que ayudan a negocios a crecer digitalmente.',
    paragraph2: '📞 Escríbeme directamente por WhatsApp o utiliza el formulario de contacto para contarme sobre tu proyecto.',
  })

  await singleton('contactPageCta', 'contactPageCta', {
    heading: 'Responderé lo antes posible para ofrecerte una solución a la medida',
    subheading: 'Muchos negocios pierden oportunidades por tener una web que no comunica confianza.',
  })

  // ── Compartidos ──────────────────────────────────────────────────────
  await singleton('contactCta', 'contactCta', {
    heading: '¿Listo para el siguiente nivel?',
    subheading: 'Muchos negocios pierden oportunidades por tener una web que no comunica confianza.',
  })

  await singleton('featuredTestimonial', 'featuredTestimonial', {
    quote: 'Isaías transformó nuestra web en una máquina de ventas.',
    author: '- Intailor',
    ctaLabel: '¡Quiero Mi Página Web Ahora!',
  })

  // ── Proyectos (colección) ───────────────────────────────────────────
  console.log('→ limpiando proyectos anteriores')
  await client.delete({ query: '*[_type == "project"]' })

  const projects = [
    {
      id: 'cafe-del-cerro', title: 'Café del Cerro', category: 'Tiendas', service: 'Diseño Web y E-commerce',
      image: 'p-cafe-del-cerro.jpg', caseImage: 'case-cafe-del-cerro.jpg', featured: true, order: 1,
      shortDescription: 'Café tostado de Zaruma con catálogo bilingüe, fichas de producto y formulario de contacto directo.',
      objective: 'Vender café tostado de Zaruma en español e inglés, sin depender de redes sociales para explicar cada producto.',
      story: [
        'Una marca de café de Zaruma necesitaba vender en español e inglés, con fichas claras de modo de empleo y conservación para cada tipo de tueste.',
        'Se construyó un catálogo bilingüe con secciones de origen y proceso, para que el comprador entienda el producto antes de escribir.',
      ],
      benefits: [
        { title: 'Catálogo bilingüe', text: 'Cada presentación de café tiene su ficha en español e inglés, con modo de empleo y consejos de conservación.' },
        { title: 'Ficha de producto clara', text: 'El cliente entiende de un vistazo si el tueste es claro, medio o oscuro, y cómo prepararlo.' },
        { title: 'Contacto directo', text: 'Formulario de contacto y datos de la marca visibles desde cualquier página.' },
      ],
      closingQuestion: '¿Vendes un producto con historia detrás?', closingSubtext: 'Construyamos una tienda que la cuente.',
    },
    {
      id: 'dental-solis', title: 'Consultorio Dental Dr. Javier Solís', category: 'Especializado', service: 'Diseño Web para Consultorio',
      image: 'p-dental-solis.jpg', caseImage: 'case-dental-solis.jpg', featured: true, order: 2,
      shortDescription: 'Odontología con enfoque en confianza: agenda de citas visible desde el primer scroll.',
      objective: 'Transmitir confianza inmediata a nuevos pacientes y facilitar la agenda de citas.',
      story: [
        'Un consultorio dental necesitaba una landing directa que transmitiera confianza desde el primer vistazo, sin distraer con exceso de secciones.',
        'El resultado es una página de una sola pantalla con mensaje claro y botón de agenda de cita siempre visible.',
      ],
      benefits: [
        { title: 'Mensaje directo', text: 'Una sola pantalla con el mensaje clave: salud bucal en manos expertas.' },
        { title: 'Agenda siempre visible', text: 'El botón de agendar cita acompaña al usuario en todo momento.' },
        { title: 'Contacto por WhatsApp', text: 'Un clic para resolver dudas antes de programar la visita.' },
      ],
      closingQuestion: '¿Tu consultorio necesita una primera impresión que genere confianza?', closingSubtext: 'Hablemos de tu proyecto.',
    },
    {
      id: 'socios', title: 'SOCIO-S', category: 'Especializado', service: 'Plataforma de Reservas',
      image: 'p-socios.jpg', caseImage: 'case-socios.jpg', featured: true, order: 3,
      shortDescription: 'Espacios profesionales por horas en cuatro ciudades, con buscador, mapa y reserva por WhatsApp.',
      objective: 'Conectar profesionales independientes con espacios por hora en cuatro ciudades del Ecuador.',
      story: [
        'SOCIO-S conecta a profesionales independientes (barberos, fotógrafos, entrenadores) con espacios por hora en cuatro ciudades del Ecuador.',
        'Se diseñó un buscador por categoría, un mapa interactivo de espacios disponibles y reserva directa por WhatsApp, sin fricción entre buscar y agendar.',
      ],
      benefits: [
        { title: 'Buscador por categoría', text: 'Barbería, oficina, estudio o consultorio: cada espacio se filtra según lo que el usuario necesita.' },
        { title: 'Mapa interactivo', text: 'Ubicación exacta de cada espacio disponible antes de reservar.' },
        { title: 'Reserva por WhatsApp', text: 'De ver el espacio a confirmar la reserva, sin pasos de más.' },
      ],
      closingQuestion: '¿Tienes espacios que podrían rentarse por hora?', closingSubtext: 'Diseñemos la plataforma que los conecte con quien los necesita.',
    },
    {
      id: 'cachorros', title: 'Cachorros de Líneas Selectas', category: 'Tiendas', service: 'Landing de Criadero Canino',
      image: 'p-cachorros.jpg', caseImage: 'case-cachorros.jpg', featured: false, order: 4,
      shortDescription: 'Cachorros de líneas selectas, con catálogo de camadas disponibles y contacto inmediato por WhatsApp.',
      objective: 'Vender cachorros de líneas selectas transmitiendo seriedad y cuidado, no solo fotos sueltas.',
      story: [
        'Un criadero de líneas selectas necesitaba una landing con presencia y confianza para vender cachorros con pedigrí, no solo mostrar fotos sueltas.',
        'Se priorizó una portada de impacto con el catálogo de camadas disponibles y contacto inmediato por WhatsApp.',
      ],
      benefits: [
        { title: 'Portada de impacto', text: 'Una imagen y un mensaje claro sobre el criadero desde el primer scroll.' },
        { title: 'Catálogo de camadas', text: 'Cachorros disponibles organizados y listos para consultar.' },
        { title: 'Contacto inmediato', text: 'Botón de WhatsApp siempre visible para reservar un cachorro.' },
      ],
      closingQuestion: '¿Tienes un criadero o negocio de mascotas?', closingSubtext: 'Te ayudo a mostrarlo con la seriedad que merece.',
    },
    {
      id: 'los-bifes', title: 'Los Bifes de la Vaca', category: 'Informativo', service: 'Diseño Web para Restaurante',
      image: 'p-los-bifes.jpg', caseImage: 'case-los-bifes.jpg', featured: true, order: 5,
      shortDescription: 'Menús, promociones y cinco sucursales en una sola web pensada para reservas y pedidos.',
      objective: 'Centralizar menús, promociones y cinco sucursales en un solo sitio, sin confundir al cliente.',
      story: [
        'Un restaurante de parrilla con cinco sucursales necesitaba centralizar menús, promociones y noches de música en vivo en un solo sitio, sin confundir al cliente sobre qué local visitar.',
        'La solución organiza sucursales, promociones vigentes y reservas de mesa en secciones claras, con llamados a la acción directos por WhatsApp.',
      ],
      benefits: [
        { title: 'Sucursales claras', text: 'Cada local con su información, sin mezclar direcciones ni horarios.' },
        { title: 'Promociones vigentes', text: 'Descuentos y noches especiales visibles desde la portada.' },
        { title: 'Reservas simples', text: 'Enlace directo a WhatsApp para reservar mesa.' },
      ],
      closingQuestion: '¿Tu restaurante tiene varias sucursales?', closingSubtext: 'Unifiquemos tu presencia digital en un solo sitio.',
    },
    {
      id: 'cafeteria-kuna', title: 'Cafetería de Especialidad', category: 'Tiendas', service: 'Tienda y Servicios Adicionales',
      image: 'p-cafeteria-kuna.jpg', caseImage: 'case-cafeteria-kuna.jpg', featured: false, order: 6,
      shortDescription: 'Cafetería de especialidad con tienda en línea, eventos, capacitaciones y merchandising propio.',
      objective: 'Vender café en línea y además mostrar servicios de eventos, capacitación y merchandising propio.',
      story: [
        'Una cafetería de especialidad quería vender café en línea y además ofrecer eventos, capacitaciones y merchandising propio.',
        'Se construyó una tienda con catálogo de productos, sección de servicios adicionales y galería del local.',
      ],
      benefits: [
        { title: 'Tienda integrada', text: 'Catálogo de café, chocolate y accesorios en una sola sección.' },
        { title: 'Servicios adicionales', text: 'Eventos, capacitaciones y moda, presentados junto al catálogo principal.' },
        { title: 'Galería del local', text: 'Fotos reales del espacio para generar cercanía.' },
      ],
      closingQuestion: '¿Tu cafetería ofrece más que café?', closingSubtext: 'Mostrémoslo todo en un solo lugar.',
    },
    {
      id: 'deessa', title: 'Deessa · Mandarin Oriental Ritz', category: 'Especializado', service: 'Sitio de Restaurante Gastronómico',
      image: 'p-deessa.jpg', caseImage: 'case-deessa.jpg', featured: false, order: 7,
      shortDescription: 'Restaurante gastronómico de hotel de lujo, con reserva de mesa directa y presentación del chef.',
      objective: 'Dar a un restaurante con dos estrellas Michelin una presencia web a la altura de su servicio.',
      story: [
        'Un restaurante gastronómico de hotel de lujo necesitaba una presencia web a la altura de sus dos estrellas Michelin, con reservas y presentación del chef.',
        'El sitio combina fotografía del espacio, menús descargables y reserva de mesa directa.',
      ],
      benefits: [
        { title: 'Reserva directa', text: 'Botones de reserva de mesa y hotel siempre visibles.' },
        { title: 'Presentación del chef', text: 'Una sección dedicada a la trayectoria detrás de la cocina.' },
        { title: 'Fotografía cuidada', text: 'El espacio y los platos protagonizan cada sección.' },
      ],
      closingQuestion: '¿Tu restaurante necesita una web a la altura de su cocina?', closingSubtext: 'Hablemos de tu proyecto.',
    },
    {
      id: 'alonja', title: 'Alonja Coffee', category: 'Informativo', service: 'Diseño Web con Trazabilidad',
      image: 'p-alonja.jpg', caseImage: 'case-alonja.jpg', featured: true, order: 8,
      shortDescription: 'Rastreo de lotes de café, proceso paso a paso y origen de cada finca ecuatoriana.',
      objective: 'Que cada bolsa de café cuente su propio origen: finca, fecha de cosecha y proceso.',
      story: [
        'Alonja quería que cada bolsa de café contara su propio origen: fecha de cosecha, finca y proceso de tueste.',
        'Se implementó un buscador de trazabilidad por código de lote, junto con un recorrido visual de cultivo, recolección, secado y tostado.',
      ],
      benefits: [
        { title: 'Trazabilidad por lote', text: 'Un buscador muestra el origen exacto de cada bolsa con solo un código.' },
        { title: 'Proceso visual', text: 'Cultivo, recolección, secado y tostado, explicados paso a paso.' },
        { title: 'Historia de la marca', text: 'Sección de origen y de los agricultores detrás del producto.' },
      ],
      closingQuestion: '¿Tu producto tiene una historia de origen que contar?', closingSubtext: 'Construyamos la web que la muestre.',
    },
    {
      id: 'kasaami', title: 'Kasaami Care & Beauty', category: 'Especializado', service: 'Diseño Web para Clínica Estética',
      image: 'p-kasaami.jpg', caseImage: 'case-kasaami.jpg', featured: true, order: 9,
      shortDescription: 'Medicina estética y turismo médico en Ecuador, con agenda de citas y recorrido por procedimientos.',
      objective: 'Presentar procedimientos de medicina estética a un público que decide su viaje médico desde el extranjero.',
      story: [
        'El reto era presentar procedimientos de medicina estética de alto nivel (Face, Body, Breast, Hair, Bariatric Care) a un público que decide su viaje médico desde el extranjero, sin perder cercanía.',
        'La web combina cifras de resultados, testimonios reales de pacientes y un botón de agenda directa, para que la decisión de viajar a Ecuador se sienta segura desde la pantalla.',
      ],
      benefits: [
        { title: 'Especialidades claras', text: 'Face, Body, Breast, Hair y Bariatric Care, organizados por categoría.' },
        { title: 'Resultados en cifras', text: 'Pacientes atendidos, especialistas y años de experiencia, visibles desde el inicio.' },
        { title: 'Testimonios reales', text: 'Historias de pacientes que ya vivieron la experiencia.' },
      ],
      closingQuestion: '¿Tu clínica recibe pacientes internacionales?', closingSubtext: 'Diseñemos la web que les dé la confianza para viajar.',
    },
  ]

  for (const p of projects) {
    console.log('→ proyecto:', p.id)
    await client.create({
      _type: 'project',
      title: p.title,
      slug: { _type: 'slug', current: p.id },
      category: p.category,
      service: p.service,
      image: await img(p.image, p.title),
      shortDescription: p.shortDescription,
      featuredOnHome: p.featured,
      order: p.order,
      caseImage: await img(p.caseImage, p.title),
      objective: p.objective,
      story: p.story,
      benefits: p.benefits.map((b, i) => ({ _key: `b${i}`, ...b })),
      closingQuestion: p.closingQuestion,
      closingSubtext: p.closingSubtext,
    })
  }

  // ── Herramientas (colección) ────────────────────────────────────────
  console.log('→ limpiando herramientas anteriores')
  await client.delete({ query: '*[_type == "toolCard"]' })

  const tools = [
    { title: 'Sanity', logo: 'tool-sanity.png', bg: '#ffffff', desc: 'CMS headless para proyectos donde el contenido alimenta varias plataformas a la vez.', about: 'Sobre la herramienta: Sanity guarda el contenido en estructuras reutilizables y lo entrega por API, ideal para webs hechas a medida.' },
    { title: 'Vercel', logo: 'tool-vercel.png', bg: '#000000', desc: 'Para proyectos a medida en Next.js: despliegues en segundos y rendimiento global.', about: 'Sobre la herramienta: Vercel publica cada cambio en una URL propia y sirve el sitio desde la red más cercana al visitante.' },
    { title: 'HTML, CSS y JavaScript', logo: 'tool-html-css-js.png', bg: '#ffffff', desc: 'Cuando un diseño no cabe en una plantilla, lo escribo a mano y mantengo el control total.', about: 'Sobre la herramienta: la base de la web. Dominarla es lo que permite optimizar carga, accesibilidad y animaciones sin plugins de más.' },
    { title: 'n8n', logo: 'tool-n8n.png', bg: '#ffffff', desc: 'Automatizo tareas repetitivas: leads que llegan al CRM, avisos por WhatsApp y reportes sin intervención manual.', about: 'Sobre la herramienta: n8n conecta formularios, hojas de cálculo y mensajería en flujos visuales; se autohospeda y no cobra por ejecución.' },
    { title: 'Hostinger', logo: 'tool-hostinger.png', bg: '#2b2b2b', desc: 'El hosting que uso para negocios locales: buen precio, respaldo diario y tiempos de carga bajos en Ecuador.', about: 'Sobre la herramienta: Hostinger incluye caché, CDN y certificados SSL, tres cosas que se notan directo en la velocidad del sitio.' },
    { title: 'WhatsApp Business API', logo: 'tool-whatsapp-api.png', bg: '#f3ecdc', desc: 'Convierto la web en un canal de ventas directo: pedidos y consultas que llegan al chat con el contexto listo.', about: 'Sobre la herramienta: la API permite respuestas automáticas, plantillas aprobadas y varios agentes en un mismo número.' },
    { title: 'Meta Pixel y Ads', logo: 'tool-meta.png', bg: '#ffffff', desc: 'Mido cada campaña antes de invertir: eventos configurados, audiencias limpias y datos que sirven para decidir.', about: 'Sobre la herramienta: el Pixel de Meta registra qué hacen los visitantes y alimenta las campañas de Facebook e Instagram.' },
    { title: 'GitHub', logo: 'tool-github.png', bg: '#ffffff', desc: 'Todo proyecto queda versionado: puedo volver atrás, probar cambios sin romper la web en producción y entregar el código al cliente.', about: 'Sobre la herramienta: GitHub guarda el historial completo del proyecto y permite trabajar en ramas separadas antes de publicar.' },
  ]

  let order = 1
  for (const t of tools) {
    console.log('→ herramienta:', t.title)
    await client.create({
      _type: 'toolCard',
      title: t.title,
      category: 'Herramientas',
      logo: await img(t.logo, t.title),
      logoBackground: t.bg,
      description: t.desc,
      aboutText: t.about,
      order: order++,
    })
  }

  console.log('\n✔ Contenido cargado.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
