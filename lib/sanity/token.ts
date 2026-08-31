// Token de SOLO LECTURA (rol "Viewer") de Sanity. Nivel 3 — solo servidor,
// nunca con prefijo NEXT_PUBLIC_. Se usa para:
//  - validar el handshake del modo vista previa (ruta /api/draft-mode/enable)
//  - leer borradores en el servidor cuando el modo vista previa está activo
// Sin token, la web sigue funcionando en modo publicado (no rompe el build).

export const token = process.env.SANITY_API_READ_TOKEN || ''

if (!token && process.env.NODE_ENV !== 'production') {
  console.warn(
    '[sanity] Falta SANITY_API_READ_TOKEN — la vista previa en vivo del Studio no funcionará. ' +
      'Crea un token "Viewer" en https://www.sanity.io/manage y ponlo en .env.local',
  )
}
