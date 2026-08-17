import { defineField, defineType } from 'sanity'

export const featuredTestimonial = defineType({
  name: 'featuredTestimonial',
  title: '⭐ Testimonio destacado (compartido)',
  type: 'document',
  description: 'La tarjeta amarilla de testimonio con botón, compartida por Portafolio y Blog.',
  fields: [
    defineField({ name: 'quote', title: 'Cita', type: 'text', rows: 2, validation: (Rule) => Rule.required() }),
    defineField({ name: 'author', title: 'Firma', description: 'Ejemplo: - Intailor', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'ctaLabel', title: 'Texto del botón', type: 'string', validation: (Rule) => Rule.required() }),
  ],
  preview: {
    prepare: () => ({ title: '⭐ Testimonio destacado (compartido)' }),
  },
})
