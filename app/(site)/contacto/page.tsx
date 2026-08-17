import { client } from '@/lib/sanity/client'
import { contactHeroQuery, contactPageCtaQuery, siteSettingsQuery } from '@/lib/sanity/queries'
import type { SiteSettings } from '@/lib/sanity/types'
import Reveal from '@/components/Reveal'
import QuoteForm from '@/components/QuoteForm'
import ContactInfoBlock from '@/components/ContactInfoBlock'

export const metadata = { title: 'Contacto — Arte Creativo' }
export const revalidate = 60

export default async function ContactoPage() {
  const [hero, cta, settings] = await Promise.all([
    client.fetch(contactHeroQuery),
    client.fetch(contactPageCtaQuery),
    client.fetch<SiteSettings>(siteSettingsQuery),
  ])

  return (
    <>
      <section data-screen-label="Contacto" style={{ background: '#1c1c1c', padding: 'clamp(140px, 20vh, 220px) clamp(20px, 5vw, 96px) clamp(60px, 9vh, 110px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Reveal
            style={{
              maxWidth: 1140,
              margin: '0 auto',
              border: '1px solid rgba(230,187,82,.55)',
              borderRadius: 22,
              padding: 'clamp(30px, 4vw, 60px) clamp(24px, 4vw, 56px)',
              textAlign: 'center',
            }}
          >
            <h1 style={{ margin: 0, fontFamily: "'Exo', sans-serif", fontWeight: 800, fontSize: 'clamp(34px, 5vw, 78px)', lineHeight: 1.08, color: '#ffffff' }}>{hero.heading}</h1>
            <p style={{ margin: '22px 0 0', fontSize: 'clamp(15px, 1.3vw, 21px)', lineHeight: 1.55, color: 'rgba(255,255,255,.92)' }}>{hero.paragraph1}</p>
            {hero.paragraph2 && (
              <p style={{ margin: '22px 0 0', fontSize: 'clamp(15px, 1.3vw, 21px)', lineHeight: 1.55, color: 'rgba(255,255,255,.92)' }}>{hero.paragraph2}</p>
            )}
          </Reveal>
        </div>
      </section>

      <section data-screen-label="Formulario" style={{ background: '#1a1a1a', padding: 'clamp(60px, 9vh, 110px) clamp(20px, 5vw, 96px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Reveal as="h2" style={{ margin: 0, textAlign: 'center', fontFamily: "'Exo', sans-serif", fontWeight: 700, fontSize: 'clamp(28px, 3.6vw, 58px)', lineHeight: 1.1, color: '#ffffff' }}>
            {cta.heading}
          </Reveal>
          <Reveal as="p" style={{ margin: '18px auto 0', maxWidth: 860, textAlign: 'center', fontSize: 'clamp(15px, 1.2vw, 20px)', lineHeight: 1.6, color: 'rgba(255,255,255,.85)' }}>
            {cta.subheading}
          </Reveal>
          <div style={{ marginTop: 'clamp(36px, 6vh, 64px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'clamp(28px, 4vw, 56px)', alignItems: 'start' }}>
            <ContactInfoBlock settings={settings} showWhatsappCta />
            <QuoteForm whatsappNumber={settings.whatsappNumber} inputStyle="light" showErrorSlot />
          </div>
        </div>
      </section>
    </>
  )
}
