import { fetchData } from '@/lib/sanity/fetch'
import {
  portfolioHeroQuery,
  allProjectsQuery,
  featuredTestimonialQuery,
  contactPageCtaQuery,
  siteSettingsQuery,
} from '@/lib/sanity/queries'
import type { Project, SiteSettings } from '@/lib/sanity/types'
import Reveal from '@/components/Reveal'
import TagMarquee from '@/components/TagMarquee'
import PortfolioGrid from '@/components/PortfolioGrid'
import FeaturedTestimonialBanner from '@/components/FeaturedTestimonialBanner'
import QuoteForm from '@/components/QuoteForm'
import ContactInfoBlock from '@/components/ContactInfoBlock'

export const metadata = { title: 'Portafolio — Arte Creativo' }
export const revalidate = 60

export default async function PortafolioPage() {
  const [hero, projects, testimonial, cta, settings] = await Promise.all([
    fetchData(portfolioHeroQuery),
    fetchData<Project[]>(allProjectsQuery),
    fetchData(featuredTestimonialQuery),
    fetchData(contactPageCtaQuery),
    fetchData<SiteSettings>(siteSettingsQuery),
  ])

  const headingParts = hero.headingHighlight ? hero.heading.split(hero.headingHighlight) : [hero.heading]

  return (
    <>
      <section data-screen-label="Portafolio hero" style={{ background: '#1c1c1c', padding: 'clamp(140px, 20vh, 210px) clamp(20px, 5vw, 96px) 0', textAlign: 'center' }}>
        {hero.eyebrow && (
          <Reveal style={{ display: 'inline-block', border: '1px solid rgba(230,187,82,.4)', background: 'rgba(22,22,22,.45)', borderRadius: 8, padding: '14px clamp(28px, 5vw, 60px)' }}>
            <span style={{ fontFamily: "'Exo', sans-serif", fontWeight: 700, fontSize: 15, letterSpacing: '2.4px', color: '#f3c13b' }}>{hero.eyebrow}</span>
          </Reveal>
        )}
        <Reveal as="h1" style={{ margin: 'clamp(28px, 5vh, 52px) auto 0', maxWidth: 1300, fontFamily: "'Exo', sans-serif", fontWeight: 800, fontSize: 'clamp(34px, 5.2vw, 84px)', lineHeight: 1.08, color: '#ffffff' }}>
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
        <Reveal as="p" style={{ margin: 'clamp(24px, 4vh, 42px) auto 0', maxWidth: 1150, fontSize: 'clamp(15px, 1.4vw, 24px)', lineHeight: 1.5, color: 'rgba(255,255,255,.9)' }}>
          {hero.subheading}
        </Reveal>
      </section>

      <section data-screen-label="Grid de proyectos" style={{ background: '#1c1c1c', padding: 'clamp(36px, 6vh, 60px) clamp(20px, 5vw, 96px) clamp(60px, 9vh, 100px)' }}>
        <PortfolioGrid projects={projects} />
        <FeaturedTestimonialBanner quote={testimonial.quote} author={testimonial.author} ctaLabel={testimonial.ctaLabel} />
      </section>

      {hero.tags?.length > 0 && (
        <div style={{ background: '#222222', overflow: 'hidden', padding: '20px 0' }}>
          <TagMarquee>
            {hero.tags.map((tag: string, i: number) => (
              <span key={i}>{tag} •</span>
            ))}
          </TagMarquee>
        </div>
      )}

      <section data-screen-label="Formulario" style={{ background: '#1a1a1a', padding: 'clamp(60px, 9vh, 110px) clamp(20px, 5vw, 96px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Reveal as="h2" style={{ margin: 0, textAlign: 'center', fontFamily: "'Exo', sans-serif", fontWeight: 700, fontSize: 'clamp(28px, 3.4vw, 54px)', lineHeight: 1.15, color: '#ffffff' }}>
            {cta.heading}
          </Reveal>
          <Reveal as="p" style={{ margin: '18px auto 0', maxWidth: 780, textAlign: 'center', fontSize: 'clamp(15px, 1.2vw, 20px)', lineHeight: 1.6, color: 'rgba(255,255,255,.82)' }}>
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
