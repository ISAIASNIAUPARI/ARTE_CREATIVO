import type { StructureResolver } from 'sanity/structure'

// El menú lateral del Studio. Este archivo es la única fuente de verdad del
// orden y agrupación — cambiarlo cambia el menú, sin tocar nada más.
//
// A diferencia de una web de una sola página, Arte Creativo tiene 6 páginas:
// cada una se agrupa como una carpeta con sus secciones numeradas por dentro,
// igual que pide el estándar. "Proyectos" y "Herramientas" son colecciones
// normales (no singletons) porque son contenido repetible de verdad.

function singleton(S: any, id: string, title: string) {
  return S.listItem()
    .title(title)
    .id(id)
    .child(S.document().schemaType(id).documentId(id).title(title))
}

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Arte Creativo')
    .items([
      singleton(S, 'siteSettings', '⚙️  Ajustes generales'),
      S.divider(),

      S.listItem()
        .title('🏠  Inicio')
        .child(
          S.list()
            .title('Inicio')
            .items([
              singleton(S, 'homeHero', '1 · Portada'),
              singleton(S, 'homeProblems', '2 · Problemas'),
              singleton(S, 'homeAbout', '3 · Sobre mí'),
              singleton(S, 'homeResults', '4 · Resultados'),
            ])
        ),

      S.listItem()
        .title('👤  Nosotros')
        .child(
          S.list()
            .title('Nosotros')
            .items([
              singleton(S, 'nosotrosHero', '1 · Mi historia'),
              singleton(S, 'nosotrosPillars', '2 · Pilares'),
              singleton(S, 'nosotrosWorkStyle', '3 · Forma de trabajar'),
              singleton(S, 'nosotrosBio', '4 · Socio estratégico'),
            ])
        ),

      S.listItem()
        .title('💼  Portafolio')
        .child(
          S.list()
            .title('Portafolio')
            .items([
              singleton(S, 'portfolioHero', '1 · Portada'),
              S.listItem()
                .title('2 · Proyectos')
                .child(S.documentTypeList('project').title('Proyectos').defaultOrdering([{ field: 'order', direction: 'asc' }])),
            ])
        ),

      S.listItem()
        .title('🧰  Blog')
        .child(
          S.list()
            .title('Blog')
            .items([
              singleton(S, 'blogHero', '1 · Portada'),
              S.listItem()
                .title('2 · Herramientas')
                .child(S.documentTypeList('toolCard').title('Herramientas').defaultOrdering([{ field: 'order', direction: 'asc' }])),
            ])
        ),

      S.listItem()
        .title('📞  Contacto')
        .child(
          S.list()
            .title('Contacto')
            .items([
              singleton(S, 'contactHero', '1 · Portada'),
              singleton(S, 'contactPageCta', '2 · Formulario'),
            ])
        ),

      S.divider(),
      singleton(S, 'contactCta', '💬  Llamado a la acción (compartido)'),
      singleton(S, 'featuredTestimonial', '⭐  Testimonio destacado (compartido)'),
    ])
