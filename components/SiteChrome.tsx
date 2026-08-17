'use client'

import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import CookieBanner from './CookieBanner'
import HomeFloatingWidget from './HomeFloatingWidget'
import SimpleFloatingWidget from './SimpleFloatingWidget'
import type { SiteSettings } from '@/lib/sanity/types'

export default function SiteChrome({ settings, children }: { settings: SiteSettings; children: ReactNode }) {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const isContacto = pathname === '/contacto'

  return (
    <div style={{ background: '#0a0a0a', fontFamily: "'Ubuntu', sans-serif", color: '#ffffff', overflowX: 'hidden' }}>
      <Header active={pathname} settings={settings} />
      {children}
      <Footer settings={settings} variant={isContacto ? 'light' : 'dark'} />
      {isHome ? <HomeFloatingWidget settings={settings} /> : <SimpleFloatingWidget settings={settings} />}
      <CookieBanner withPolicyLinks={isHome} />
    </div>
  )
}
