'use client'

import { useIsPresentationTool } from 'next-sanity/hooks'

// Botón flotante para salir de la vista previa. Solo se muestra cuando el sitio
// se ve directamente en el navegador (no dentro del Presentation Tool, donde el
// Studio ya controla el modo vista previa).
export default function DisableDraftMode() {
  const isInPresentation = useIsPresentationTool()
  if (isInPresentation !== false) return null

  return (
    <a
      href="/api/draft-mode/disable"
      style={{
        position: 'fixed',
        bottom: 16,
        left: 16,
        zIndex: 9999,
        background: '#161616',
        color: '#f6d98d',
        border: '1px solid rgba(230,187,82,.5)',
        borderRadius: 999,
        padding: '8px 16px',
        fontSize: 13,
        fontWeight: 600,
        textDecoration: 'none',
      }}
    >
      Salir de vista previa
    </a>
  )
}
