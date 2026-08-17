'use client'

import { useEffect, useState } from 'react'
import type { SiteSettings } from '@/lib/sanity/types'

/**
 * Versión de las páginas secundarias (Nosotros, Portafolio, Blog, Contacto,
 * Proyecto): el botón flotante es un link directo a WhatsApp (sin launcher ni
 * chat con IA — eso solo existe en la portada) y el badge de "N personas
 * consultando" se muestra siempre, sin depender del scroll.
 */
export default function SimpleFloatingWidget({ settings }: { settings: SiteSettings }) {
  const [count, setCount] = useState(6)

  useEffect(() => {
    const t = setInterval(() => setCount(3 + Math.floor(Math.random() * 7)), 6000)
    return () => clearInterval(t)
  }, [])

  return (
    <>
      {settings.showConsultBadge && (
        <div
          style={{
            position: 'fixed',
            right: 22,
            bottom: 108,
            zIndex: 60,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            background: '#0c0c0c',
            border: '1px solid rgba(230,187,82,.35)',
            borderRadius: 8,
            padding: '9px 14px',
            boxShadow: '0 10px 26px rgba(0,0,0,.45)',
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: 99,
              background: '#f3c13b',
              animation: 'af-pulse 2s ease-in-out infinite',
            }}
          />
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,.85)' }}>
            <strong style={{ color: '#f3c13b' }}>{count}</strong> personas consultando ahora
          </span>
        </div>
      )}

      <a
        href={settings.whatsappShortLink}
        target="_blank"
        rel="noopener"
        aria-label="Escribir por WhatsApp"
        className="af-fab"
        style={{
          position: 'fixed',
          right: 24,
          bottom: 24,
          zIndex: 70,
          width: 60,
          height: 60,
          borderRadius: '50%',
          border: '1px solid rgba(63,208,126,0.35)',
          background: 'radial-gradient(120% 120% at 30% 25%, #45e081, #1fae5d 60%, #128a48)',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 14px 36px -8px rgba(31,174,93,0.6), inset 0 1px 0 rgba(255,255,255,0.25)',
          transition: 'transform .25s cubic-bezier(.2,.8,.2,1), box-shadow .25s',
        }}
      >
        <span
          style={{
            position: 'absolute',
            inset: -1,
            borderRadius: '50%',
            border: '2px solid rgba(63,208,126,0.5)',
            animation: 'wa-ping 2.6s ease-out infinite',
            pointerEvents: 'none',
          }}
        />
        <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
          <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.2-1.36a9.9 9.9 0 0 0 4.84 1.23h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2zm5.8 14.24c-.24.68-1.4 1.3-1.93 1.36-.5.06-1.02.28-3.4-.7-2.86-1.18-4.7-4.08-4.84-4.27-.14-.19-1.16-1.55-1.16-2.95 0-1.4.73-2.08 1-2.36.27-.28.6-.35.8-.35.2 0 .4 0 .58.01.19.01.44-.07.68.53.25.6.85 2.08.92 2.23.07.15.12.33.02.52-.1.19-.15.31-.3.48-.15.17-.31.38-.44.5-.15.15-.3.31-.13.6.17.3.76 1.26 1.64 2.04 1.13 1 2.08 1.32 2.38 1.47.3.15.47.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.24.65-.15.27.1 1.7.8 1.99.95.29.15.48.22.55.34.07.13.07.75-.17 1.43z" />
        </svg>
      </a>

      <style jsx>{`
        .af-fab:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 18px 44px -8px rgba(31, 174, 93, 0.75);
        }
      `}</style>
    </>
  )
}
