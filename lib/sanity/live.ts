import { defineLive } from 'next-sanity'
import { client } from './client'
import { token } from './token'

// Live Content API: sanityFetch trae los datos y SanityLive (en el layout de
// (site)) mantiene una conexión que revalida y re-renderiza al instante cuando
// cambia el contenido — así el preview del Presentation Tool se actualiza
// mientras se escribe, y los cambios publicados aparecen para los visitantes
// sin esperar el ISR.
export const { sanityFetch, SanityLive } = defineLive({
  client: client.withConfig({ stega: { studioUrl: '/studio' } }),
  // Lectura de borradores en el servidor (modo vista previa).
  serverToken: token,
  // Conexión de eventos en vivo desde el navegador.
  browserToken: token,
  // Revalidación por tiempo como respaldo de la conexión en vivo.
  fetchOptions: { revalidate: 60 },
})
