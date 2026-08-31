import { draftMode } from 'next/headers'
import { client } from './client'
import { token } from './token'

// Reemplazo de `client.fetch(query, params)` para las páginas del sitio.
// Mismo uso (posicional, devuelve los datos directamente), pero consciente del
// modo vista previa del Studio:
//   - Modo normal  → contenido PUBLICADO, CDN, ISR de 60 s. Igual que antes.
//   - Modo preview → borradores, sin CDN, con stega (marcas invisibles que
//                    activan los overlays de clic-para-editar del Presentation Tool).
// No usar en generateStaticParams (no hay draftMode ahí) — ahí se sigue usando `client`.

// `T = any` para igualar el comportamiento de `client.fetch` en las llamadas sin
// tipo explícito (varias páginas hacen `fetchData(algoQuery)` y luego `.campo`).
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function fetchData<T = any>(
  query: string,
  params: Record<string, unknown> = {},
  opts: { revalidate?: number | false } = {},
): Promise<T> {
  const isDraft = (await draftMode()).isEnabled
  const revalidate = opts.revalidate ?? 60

  return client
    .withConfig({
      useCdn: !isDraft,
      token: isDraft ? token : undefined,
      perspective: isDraft ? 'drafts' : 'published',
      stega: isDraft ? { enabled: true, studioUrl: '/studio' } : false,
    })
    .fetch<T>(query, params, {
      next: { revalidate: isDraft ? 0 : revalidate },
    })
}
