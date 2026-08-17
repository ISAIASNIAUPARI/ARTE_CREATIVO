import type { Image } from 'sanity'

export type SanityImage = Image & { alt?: string }

export interface SiteSettings {
  brandName: string
  logo?: SanityImage
  phoneDisplay: string
  email: string
  addressLine: string
  mapLink: string
  whatsappNumber: string // solo dígitos con código de país, para wa.me
  whatsappShortLink: string // enlace corto (w.app/...)
  footerCopyright: string
  chatEnabled: boolean
  chatWebhookUrl?: string
  chatBotAvatar?: SanityImage
  chatQuickReplies?: { label: string; question: string }[]
  carouselAutoplay: boolean
  showConsultBadge: boolean
  showDangerTape: boolean
}

export interface HeroSection {
  eyebrow: string
  heading: string
  headingHighlight?: string
  subheading: string
  ctaLabel: string
  heroVideo?: { asset?: { url?: string } }
  tags: string[]
}

export interface ProblemsSection {
  heading: string
  subheading: string
  items: { icon?: string; title: string; text: string }[]
}

export interface AboutSection {
  eyebrow: string
  heading: string
  text: string
  points: string[]
  photo?: SanityImage
  badgeNumber: string
  badgeLabel: string
}

export interface Testimonial {
  company: string
  name: string
  text: string
}

export interface Project {
  _id: string
  slug: string
  title: string
  category: 'Tiendas' | 'Especializado' | 'Informativo'
  service: string
  image?: SanityImage
  caseImage?: SanityImage
  shortDescription: string
  objective: string
  story: string[]
  benefits: { title: string; text: string }[]
  closingQuestion: string
  closingSubtext: string
  featuredOnHome: boolean
  order: number
}

export interface ToolCard {
  title: string
  category: string
  logo?: SanityImage
  logoBackground: string
  description: string
  aboutText: string
}
