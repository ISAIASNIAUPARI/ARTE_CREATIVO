import { defineField, defineType } from 'sanity'

export const nosotrosHero = defineType({
  name: 'nosotrosHero',
  title: '1 · Mi historia',
  type: 'document',
  fields: [
    defineField({ name: 'eyebrow', title: 'Texto pequeño', type: 'string', initialValue: 'Mi historia' }),
    defineField({ name: 'heading', title: 'Titular', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'headingHighlight',
      title: 'Palabra destacada del titular',
      description: 'Esa palabra exacta se pinta en dorado claro. Déjalo vacío si ninguna debe resaltar.',
      type: 'string',
    }),
    defineField({ name: 'text', title: 'Párrafo', type: 'text', rows: 3, validation: (Rule) => Rule.required() }),
    defineField({
      name: 'tags',
      title: 'Franja de etiquetas',
      description: 'Las palabras que se mueven en bucle justo debajo. Arrástralas para reordenar.',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
  preview: {
    prepare: () => ({ title: '1 · Mi historia' }),
  },
})
