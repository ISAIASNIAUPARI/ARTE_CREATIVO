import type { ReactNode } from 'react'
import { draftMode } from 'next/headers'
import { VisualEditing } from 'next-sanity'
import DisableDraftMode from '@/components/DisableDraftMode'

export const metadata = {
  title: 'Arte Creativo — Diseño Web en Quito',
  description: 'Diseño sitios web rápidos, modernos y optimizados para Google que convierten visitantes en clientes.',
}

// Layout raíz: deliberadamente sin CSS del sitio público. El reset de
// globals.css vive en app/(site)/layout.tsx para que /studio no lo herede.
export default async function RootLayout({ children }: { children: ReactNode }) {
  const { isEnabled: previewing } = await draftMode()

  return (
    <html lang="es">
      <body>
        {children}
        {/* Solo en modo vista previa del Studio: overlays de clic-para-editar
            y botón para salir. Cero efecto para visitantes normales. */}
        {previewing && (
          <>
            <VisualEditing />
            <DisableDraftMode />
          </>
        )}
      </body>
    </html>
  )
}
