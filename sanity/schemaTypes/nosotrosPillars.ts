import { defineField, defineArrayMember, defineType } from 'sanity'

export const nosotrosPillars = defineType({
  name: 'nosotrosPillars',
  title: '2 · Pilares',
  type: 'document',
  fields: [
    defineField({ name: 'heading', title: 'Titular', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'subheading', title: 'Párrafo', type: 'text', rows: 2 }),
    defineField({
      name: 'items',
      title: 'Pilares',
      description: 'Normalmente 3: Estética, Funcionalidad, Resultados.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'pillar',
          fields: [
            defineField({ name: 'title', title: 'Título', type: 'string', validation: (Rule) => Rule.required() }),
            defineField({ name: 'text', title: 'Texto', type: 'text', rows: 2, validation: (Rule) => Rule.required() }),
          ],
          preview: { select: { title: 'title', subtitle: 'text' } },
        }),
      ],
      validation: (Rule) => Rule.min(1).error('Hace falta al menos un pilar.'),
    }),
  ],
  preview: {
    prepare: () => ({ title: '2 · Pilares' }),
  },
})
