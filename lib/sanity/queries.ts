import { groq } from 'next-sanity'

export const siteSettingsQuery = groq`*[_id == "siteSettings"][0]{
  brandName, logo, phoneDisplay, email, addressLine, mapLink,
  whatsappNumber, whatsappShortLink, footerCopyright,
  chatEnabled, chatWebhookUrl, chatBotAvatar, chatQuickReplies,
  carouselAutoplay, showConsultBadge, showDangerTape
}`

export const homeHeroQuery = groq`*[_id == "homeHero"][0]{ eyebrow, heading, headingHighlight, subheading, ctaLabel, heroVideo{asset->{url}}, tags }`
export const homeProblemsQuery = groq`*[_id == "homeProblems"][0]{ heading, subheading, items, tapeText }`
export const homeAboutQuery = groq`*[_id == "homeAbout"][0]{ eyebrow, heading, text, points, photo, badgeNumber, badgeLabel }`
export const homeResultsQuery = groq`*[_id == "homeResults"][0]{ heading, testimonials }`

export const nosotrosHeroQuery = groq`*[_id == "nosotrosHero"][0]{ eyebrow, heading, headingHighlight, text, tags }`
export const nosotrosPillarsQuery = groq`*[_id == "nosotrosPillars"][0]{ heading, subheading, items }`
export const nosotrosWorkStyleQuery = groq`*[_id == "nosotrosWorkStyle"][0]{ heading, items }`
export const nosotrosBioQuery = groq`*[_id == "nosotrosBio"][0]{ heading, text, points, ctaLabel, photo, badgeNumber, badgeLabel }`

export const portfolioHeroQuery = groq`*[_id == "portfolioHero"][0]{ eyebrow, heading, headingHighlight, subheading, tags }`
export const blogHeroQuery = groq`*[_id == "blogHero"][0]{ eyebrow, heading, headingHighlight, subheading, toolsLabel }`
export const contactHeroQuery = groq`*[_id == "contactHero"][0]{ heading, paragraph1, paragraph2 }`
export const contactPageCtaQuery = groq`*[_id == "contactPageCta"][0]{ heading, subheading }`
export const contactCtaQuery = groq`*[_id == "contactCta"][0]{ heading, subheading }`
export const featuredTestimonialQuery = groq`*[_id == "featuredTestimonial"][0]{ quote, author, ctaLabel }`

const projectFields = groq`
  _id, title, "slug": slug.current, category, service, image, shortDescription,
  featuredOnHome, order, caseImage, objective, story, benefits, closingQuestion, closingSubtext
`

export const allProjectsQuery = groq`*[_type == "project"] | order(order asc){ ${projectFields} }`
export const featuredProjectsQuery = groq`*[_type == "project" && featuredOnHome == true] | order(order asc){ ${projectFields} }`
export const projectBySlugQuery = groq`*[_type == "project" && slug.current == $slug][0]{ ${projectFields} }`
export const relatedProjectsQuery = groq`*[_type == "project" && slug.current != $slug] | order(order asc)[0...3]{ _id, title, "slug": slug.current, image }`

export const toolCardsQuery = groq`*[_type == "toolCard"] | order(order asc){ title, category, logo, logoBackground, description, aboutText }`
