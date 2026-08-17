import { defineField, defineType } from 'sanity'

export const contactPageCta = defineType({
  name: 'contactPageCta',
  title: '2 · Formulario',
  type: 'document',
  fields: [
    defineField({ name: 'heading', title: 'Titular', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'subheading', title: 'Párrafo', type: 'text', rows: 2, validation: (Rule) => Rule.required() }),
  ],
  preview: {
    prepare: () => ({ title: '2 · Formulario' }),
  },
})
