import type { ReactNode } from 'react'
import { draftMode } from 'next/headers'
import { VisualEditing } from 'next-sanity'
import { fetchData } from '@/lib/sanity/fetch'
import { SanityLive } from '@/lib/sanity/live'
import { siteSettingsQuery } from '@/lib/sanity/queries'
import type { SiteSettings } from '@/lib/sanity/types'
import SiteChrome from '@/components/SiteChrome'
import DisableDraftMode from '@/components/DisableDraftMode'
import './globals.css'

// Google Fonts vía <link>, igual que el sitio original — React 19 hoistea
// estos tags a <head> automáticamente aunque no estén envueltos en <head>.
// (Se evita next/font porque los nombres de familia generados no coinciden
// con los literales 'Exo'/'Ubuntu' usados en los estilos inline portados.)
export default async function SiteLayout({ children }: { children: ReactNode }) {
  const settings = await fetchData<SiteSettings>(siteSettingsQuery)
  const { isEnabled: previewing } = await draftMode()

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Exo:wght@400;500;600;700;800&family=Ubuntu:wght@400;500;700&family=Ubuntu+Mono&display=swap"
        rel="stylesheet"
      />
      <SiteChrome settings={settings}>{children}</SiteChrome>
      {/* Conexión en vivo: re-renderiza al instante cuando cambia el contenido. */}
      <SanityLive />
      {/* Solo en modo vista previa del Studio: overlays de clic-para-editar. */}
      {previewing && (
        <>
          <VisualEditing />
          <DisableDraftMode />
        </>
      )}
    </>
  )
}
