import Image from 'next/image'
import Link from 'next/link'
import { fetchData } from '@/lib/sanity/fetch'
import {
  blogHeroQuery,
  toolCardsQuery,
  featuredTestimonialQuery,
  contactCtaQuery,
  siteSettingsQuery,
} from '@/lib/sanity/queries'
import type { ToolCard, SiteSettings } from '@/lib/sanity/types'
import { urlFor } from '@/lib/sanity/image'
import Reveal from '@/components/Reveal'
import FeaturedTestimonialBanner from '@/components/FeaturedTestimonialBanner'
import QuoteForm from '@/components/QuoteForm'
import ContactInfoBlock from '@/components/ContactInfoBlock'

export const metadata = { title: 'Blog — Arte Creativo' }
export const revalidate = 60

export default async function BlogPage() {
  const [hero, tools, testimonial, cta, settings] = await Promise.all([
    fetchData(blogHeroQuery),
    fetchData<ToolCard[]>(toolCardsQuery),
    fetchData(featuredTestimonialQuery),
    fetchData(contactCtaQuery),
    fetchData<SiteSettings>(siteSettingsQuery),
  ])

  const headingParts = hero.headingHighlight ? hero.heading.split(hero.headingHighlight) : [hero.heading]

  return (
    <>
      <section data-screen-label="Blog hero" style={{ background: '#1c1c1c', padding: 'clamp(140px, 22vh, 230px) clamp(20px, 5vw, 96px) clamp(60px, 9vh, 100px)', textAlign: 'center' }}>
        {hero.eyebrow && (
          <Reveal style={{ display: 'inline-block', border: '1px solid rgba(230,187,82,.35)', background: 'rgba(40,40,40,.35)', borderRadius: 8, padding: '14px clamp(28px, 5vw, 64px)' }}>
            <span style={{ fontFamily: "'Exo', sans-serif", fontWeight: 700, fontSize: 15, letterSpacing: '2.4px', color: '#f3c13b' }}>{hero.eyebrow}</span>
          </Reveal>
        )}
        <Reveal as="h1" style={{ margin: 'clamp(28px, 5vh, 52px) auto 0', maxWidth: 1000, fontFamily: "'Exo', sans-serif", fontWeight: 800, fontSize: 'clamp(34px, 5vw, 80px)', lineHeight: 1.08, color: '#ffffff' }}>
          {headingParts.length === 2 ? (
            <>
              {headingParts[0]}
              <span style={{ color: '#f6d98d' }}>{hero.headingHighlight}</span>
              {headingParts[1]}
            </>
          ) : (
            hero.heading
          )}
        </Reveal>
        <Reveal as="p" style={{ margin: 'clamp(24px, 4vh, 40px) auto 0', maxWidth: 900, fontSize: 'clamp(15px, 1.4vw, 23px)', lineHeight: 1.55, color: 'rgba(255,255,255,.88)' }}>
          {hero.subheading}
        </Reveal>
        {hero.toolsLabel && (
          <div style={{ margin: 'clamp(34px, 6vh, 56px) auto 0', padding: '0 clamp(20px, 5vw, 96px)', display: 'flex', justifyContent: 'center' }}>
            <span style={{ fontFamily: "'Exo', sans-serif", fontWeight: 700, fontSize: 'clamp(15px, 1.2vw, 20px)', color: '#f6d98d', borderBottom: '2px solid #f6d98d', paddingBottom: 6 }}>
              {hero.toolsLabel}
            </span>
          </div>
        )}
      </section>

      <section data-screen-label="Articulos" style={{ background: '#1c1c1c', padding: 'clamp(40px, 6vh, 70px) clamp(20px, 5vw, 96px) clamp(60px, 9vh, 100px)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 26, alignItems: 'stretch' }}>
          {tools.map((tool, i) => {
            const logoUrl = tool.logo ? urlFor(tool.logo).width(260).height(120).fit('max').url() : null
            return (
              <article key={i} className="af-tool-card">
                <div style={{ position: 'relative', height: 210, background: tool.logoBackground, overflow: 'hidden' }}>
                  {logoUrl && (
                    <Image
                      src={logoUrl}
                      alt={tool.title}
                      width={260}
                      height={120}
                      style={{ position: 'absolute', top: 26, right: 30, bottom: 26, left: 30, width: 'calc(100% - 60px)', height: 'calc(100% - 52px)', objectFit: 'contain', display: 'block' }}
                    />
                  )}
                </div>
                <div style={{ padding: '22px 24px 26px', display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', color: '#e6bb52' }}>{tool.category}</span>
                  <h2 style={{ margin: 0, fontFamily: "'Exo', sans-serif", fontWeight: 800, fontSize: 21, lineHeight: 1.2, color: '#ffffff' }}>{tool.title}</h2>
                  <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,.82)' }}>{tool.description}</p>
                  <div style={{ marginTop: 'auto', paddingTop: 14, borderTop: '1px solid rgba(230,187,82,.18)', display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <span style={{ fontSize: 12.5, lineHeight: 1.55, color: 'rgba(230,187,82,.85)' }}>{tool.aboutText}</span>
                    <Link href="/portafolio" className="af-tool-link">
                      Leer artículo
                    </Link>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section data-screen-label="Testimonio" style={{ background: '#1c1c1c', padding: '0 clamp(20px, 5vw, 96px) clamp(60px, 9vh, 110px)' }}>
        <FeaturedTestimonialBanner quote={testimonial.quote} author={testimonial.author} ctaLabel={testimonial.ctaLabel} />
      </section>

      <section data-screen-label="Formulario" style={{ background: '#222222', padding: 'clamp(60px, 9vh, 110px) clamp(20px, 5vw, 96px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Reveal as="h2" style={{ margin: 0, textAlign: 'center', fontFamily: "'Exo', sans-serif", fontWeight: 700, fontSize: 'clamp(28px, 3.6vw, 58px)', lineHeight: 1.15, color: '#ffffff' }}>
            {cta.heading}
          </Reveal>
          <Reveal as="p" style={{ margin: '18px auto 0', maxWidth: 860, textAlign: 'center', fontSize: 'clamp(15px, 1.2vw, 20px)', lineHeight: 1.6, color: 'rgba(255,255,255,.85)' }}>
            {cta.subheading}
          </Reveal>
          <div style={{ marginTop: 'clamp(36px, 6vh, 64px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'clamp(28px, 4vw, 56px)', alignItems: 'start' }}>
            <ContactInfoBlock settings={settings} showWhatsappCta />
            <QuoteForm whatsappNumber={settings.whatsappNumber} inputStyle="light" />
          </div>
        </div>
      </section>
    </>
  )
}
