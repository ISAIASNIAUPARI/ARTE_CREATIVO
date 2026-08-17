# ARTE CREATIVO — Portafolio web de Alex Freelancer

Sitio web de portafolio para Alex Anrrango, diseñador web freelance en Quito.

Next.js (App Router) + Sanity como CMS. El panel de edición vive en `/studio`.

## Estructura

- `app/(site)/` — páginas públicas (Inicio, Nosotros, Portafolio, Blog, Contacto, Proyecto/[slug])
- `app/studio/` — panel de Sanity, aislado del CSS del sitio público
- `components/` — componentes compartidos (header, footer, formulario, marquesinas, etc.)
- `sanity/schemaTypes/` — define las secciones del panel; `sanity/structure.ts` define el menú lateral
- `scripts/seed.mjs` — carga el contenido inicial en un proyecto Sanity nuevo

## Desarrollo local

```bash
npm install
cp .env.example .env.local   # completar con el projectId de Sanity
npm run dev
```

## Cargar contenido en un proyecto Sanity nuevo

```bash
npm run seed
```

Sube las imágenes de referencia y crea las secciones con contenido real. Requiere `SANITY_API_WRITE_TOKEN` en `.env.local` (nunca se commitea).

## Despliegue

Vercel, conectado a este repositorio — cada push a `main` despliega solo. Variables de entorno: `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `NEXT_PUBLIC_SANITY_API_VERSION`.

## Notas de desarrollo

Ver [CLAUDE.md](CLAUDE.md) para el registro de fases del proyecto.
