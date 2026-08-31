import type { ReactNode } from 'react'

export const metadata = {
  title: 'Arte Creativo — Diseño Web en Quito',
  description: 'Diseño sitios web rápidos, modernos y optimizados para Google que convierten visitantes en clientes.',
}

// Layout raíz: deliberadamente sin CSS del sitio público. El reset de
// globals.css vive en app/(site)/layout.tsx para que /studio no lo herede.
// La vista previa en vivo (SanityLive / VisualEditing) también vive en (site)
// para que /studio no la cargue.
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
