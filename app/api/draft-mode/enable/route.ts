import { defineEnableDraftMode } from 'next-sanity/draft-mode'
import { client } from '@/lib/sanity/client'
import { token } from '@/lib/sanity/token'

// El Presentation Tool llama a esta ruta para activar el modo vista previa en la
// sesión del iframe. `defineEnableDraftMode` valida que la petición venga de un
// Studio legítimo (usando el token) antes de encender draftMode().
export const { GET } = defineEnableDraftMode({
  client: client.withConfig({ token }),
})
