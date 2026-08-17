import { defineField, defineType } from 'sanity'

export const contactHero = defineType({
  name: 'contactHero',
  title: '1 · Portada',
  type: 'document',
  fields: [
    defineField({ name: 'heading', title: 'Titular', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'paragraph1', title: 'Primer párrafo', type: 'text', rows: 3, validation: (Rule) => Rule.required() }),
    defineField({ name: 'paragraph2', title: 'Segundo párrafo', type: 'text', rows: 2 }),
  ],
  preview: {
    prepare: () => ({ title: '1 · Portada' }),
  },
})
