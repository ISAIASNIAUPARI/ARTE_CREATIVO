import type { ReactNode } from 'react'
import { client } from '@/lib/sanity/client'
import { siteSettingsQuery } from '@/lib/sanity/queries'
import type { SiteSettings } from '@/lib/sanity/types'
import SiteChrome from '@/components/SiteChrome'
import './globals.css'

// Google Fonts vía <link>, igual que el sitio original — React 19 hoistea
// estos tags a <head> automáticamente aunque no estén envueltos en <head>.
// (Se evita next/font porque los nombres de familia generados no coinciden
// con los literales 'Exo'/'Ubuntu' usados en los estilos inline portados.)
export default async function SiteLayout({ children }: { children: ReactNode }) {
  const settings = await client.fetch<SiteSettings>(siteSettingsQuery)

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Exo:wght@400;500;600;700;800&family=Ubuntu:wght@400;500;700&family=Ubuntu+Mono&display=swap"
        rel="stylesheet"
      />
      <SiteChrome settings={settings}>{children}</SiteChrome>
    </>
  )
}
