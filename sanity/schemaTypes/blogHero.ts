import { defineField, defineType } from 'sanity'

export const blogHero = defineType({
  name: 'blogHero',
  title: '1 · Portada',
  type: 'document',
  fields: [
    defineField({ name: 'eyebrow', title: 'Texto pequeño', type: 'string' }),
    defineField({ name: 'heading', title: 'Titular', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'headingHighlight',
      title: 'Palabra destacada del titular',
      type: 'string',
    }),
    defineField({ name: 'subheading', title: 'Párrafo', type: 'text', rows: 2, validation: (Rule) => Rule.required() }),
    defineField({ name: 'toolsLabel', title: 'Texto sobre la grilla de herramientas', type: 'string', initialValue: 'Herramientas oficiales' }),
  ],
  preview: {
    prepare: () => ({ title: '1 · Portada' }),
  },
})
