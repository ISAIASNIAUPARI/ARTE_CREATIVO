import { siteSettings } from './siteSettings'
import { homeHero } from './homeHero'
import { homeProblems } from './homeProblems'
import { homeAbout } from './homeAbout'
import { homeResults } from './homeResults'
import { nosotrosHero } from './nosotrosHero'
import { nosotrosPillars } from './nosotrosPillars'
import { nosotrosWorkStyle } from './nosotrosWorkStyle'
import { nosotrosBio } from './nosotrosBio'
import { portfolioHero } from './portfolioHero'
import { blogHero } from './blogHero'
import { contactHero } from './contactHero'
import { contactPageCta } from './contactPageCta'
import { contactCta } from './contactCta'
import { featuredTestimonial } from './featuredTestimonial'
import { project } from './project'
import { toolCard } from './toolCard'

export const schemaTypes = [
  siteSettings,
  homeHero,
  homeProblems,
  homeAbout,
  homeResults,
  nosotrosHero,
  nosotrosPillars,
  nosotrosWorkStyle,
  nosotrosBio,
  portfolioHero,
  blogHero,
  contactHero,
  contactPageCta,
  contactCta,
  featuredTestimonial,
  project,
  toolCard,
]

// Singletons: documentos únicos con _id fijo igual al nombre del tipo.
// project y toolCard quedan fuera porque son colecciones normales.
export const singletonTypes = new Set([
  'siteSettings',
  'homeHero',
  'homeProblems',
  'homeAbout',
  'homeResults',
  'nosotrosHero',
  'nosotrosPillars',
  'nosotrosWorkStyle',
  'nosotrosBio',
  'portfolioHero',
  'blogHero',
  'contactHero',
  'contactPageCta',
  'contactCta',
  'featuredTestimonial',
])
