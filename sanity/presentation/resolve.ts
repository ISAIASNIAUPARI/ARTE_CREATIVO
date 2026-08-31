import { defineLocations, type PresentationPluginOptions } from 'sanity/presentation'

// Le dice al Presentation Tool en qué ruta(s) de la web aparece cada tipo de documento.
// Alimenta el banner "Se usa en N páginas" del editor y la navegación Structure ↔ Presentation.
// Rutas RELATIVAS a propósito: así funciona igual en localhost y en cualquier dominio de cliente.

// Para secciones fijas basta con un estado de ubicaciones estático.
const fixed = (...locations: { title: string; href: string }[]) => defineLocations({ locations })

export const resolve: PresentationPluginOptions['resolve'] = {
  locations: {
    // --- Secciones de Inicio ---
    homeHero: fixed({ title: 'Inicio', href: '/' }),
    homeProblems: fixed({ title: 'Inicio', href: '/' }),
    homeAbout: fixed({ title: 'Inicio', href: '/' }),
    homeResults: fixed({ title: 'Inicio', href: '/' }),

    // --- Secciones de Nosotros ---
    nosotrosHero: fixed({ title: 'Nosotros', href: '/nosotros' }),
    nosotrosPillars: fixed({ title: 'Nosotros', href: '/nosotros' }),
    nosotrosWorkStyle: fixed({ title: 'Nosotros', href: '/nosotros' }),
    nosotrosBio: fixed({ title: 'Nosotros', href: '/nosotros' }),

    // --- Portadas de otras páginas ---
    portfolioHero: fixed({ title: 'Portafolio', href: '/portafolio' }),
    blogHero: fixed({ title: 'Blog', href: '/blog' }),
    contactHero: fixed({ title: 'Contacto', href: '/contacto' }),
    contactPageCta: fixed({ title: 'Contacto', href: '/contacto' }),

    // --- Ajustes generales: afectan a toda la web ---
    siteSettings: fixed({ title: 'Inicio', href: '/' }),

    // --- Bloques compartidos entre varias páginas ---
    contactCta: fixed(
      { title: 'Inicio', href: '/' },
      { title: 'Nosotros', href: '/nosotros' },
      { title: 'Blog', href: '/blog' },
      { title: 'Portafolio', href: '/portafolio' },
    ),
    featuredTestimonial: fixed(
      { title: 'Portafolio', href: '/portafolio' },
      { title: 'Blog', href: '/blog' },
    ),

    // --- Colecciones: la ubicación depende del documento ---
    project: defineLocations({
      select: { title: 'title', slug: 'slug.current' },
      resolve: (doc) => ({
        locations: [
          { title: doc?.title || 'Proyecto', href: `/proyecto/${doc?.slug}` },
          { title: 'Portafolio', href: '/portafolio' },
        ],
      }),
    }),
    toolCard: defineLocations({
      select: { title: 'title' },
      resolve: (doc) => ({
        locations: [{ title: doc?.title || 'Herramienta', href: '/blog' }],
      }),
    }),
  },
}
