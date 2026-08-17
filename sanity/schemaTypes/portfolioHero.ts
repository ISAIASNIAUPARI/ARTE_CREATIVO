import { defineField, defineType } from 'sanity'

export const portfolioHero = defineType({
  name: 'portfolioHero',
  title: '1 · Portada',
  type: 'document',
  fields: [
    defineField({ name: 'eyebrow', title: 'Texto pequeño', type: 'string' }),
    defineField({ name: 'heading', title: 'Titular', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'headingHighlight',
      title: 'Palabra destacada del titular',
      description: 'Esa palabra exacta se pinta en dorado claro. Déjalo vacío si ninguna debe resaltar.',
      type: 'string',
    }),
    defineField({ name: 'subheading', title: 'Párrafo', type: 'text', rows: 2, validation: (Rule) => Rule.required() }),
    defineField({
      name: 'tags',
      title: 'Franja de etiquetas',
      description: 'Las palabras que se mueven en bucle más abajo, entre los proyectos y el testimonio.',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
  preview: {
    prepare: () => ({ title: '1 · Portada' }),
  },
})
