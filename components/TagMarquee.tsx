import type { CSSProperties, ReactNode } from 'react'

/**
 * Marquesina de la franja de etiquetas (servicios/herramientas) en Nosotros,
 * Portafolio y Blog: animación CSS pura `af-marquee 30s linear infinite`
 * (definida en globals.css), con el contenido duplicado una vez para el loop.
 * A diferencia de <Marquee>, esta no reacciona a prefers-reduced-motion
 * distinto de como ya lo hacía el sitio original.
 */
export default function TagMarquee({ children }: { children: ReactNode }) {
  const rowStyle: CSSProperties = {
    display: 'flex',
    flexShrink: 0,
    gap: 50,
    paddingRight: 50,
    fontFamily: "'Exo', sans-serif",
    fontWeight: 700,
    fontSize: 'clamp(.9rem, 1.1vw, 1.2rem)',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    color: '#e6bb52',
    whiteSpace: 'nowrap',
    animation: 'af-marquee 30s linear infinite',
  }
  return (
    <div style={{ display: 'flex', width: 'max-content' }}>
      <div style={rowStyle}>{children}</div>
      <div aria-hidden="true" style={rowStyle}>
        {children}
      </div>
    </div>
  )
}
