import { sanityFetch } from './live'

// Reemplazo de `client.fetch(query, params)` en las páginas del sitio.
// Mismo uso posicional y devuelve los datos directamente. Por debajo usa el
// Live Content API: contenido publicado + ISR para visitantes; borradores +
// stega (marcas invisibles para los overlays) dentro del Presentation Tool.
// No usar en generateStaticParams (ahí no hay draftMode) — usar `client`.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function fetchData<T = any>(
  query: string,
  params: Record<string, unknown> = {},
): Promise<T> {
  const { data } = await sanityFetch({ query, params })
  return data as T
}
