import { draftMode } from 'next/headers'
import { NextResponse } from 'next/server'

// Apaga el modo vista previa y vuelve a la home. La invoca el botón
// "Salir de vista previa" (components/DisableDraftMode.tsx).
export async function GET(request: Request) {
  ;(await draftMode()).disable()
  return NextResponse.redirect(new URL('/', request.url))
}
