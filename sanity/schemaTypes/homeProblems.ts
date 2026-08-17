import { defineField, defineArrayMember, defineType } from 'sanity'

export const homeProblems = defineType({
  name: 'homeProblems',
  title: '2 · Problemas',
  type: 'document',
  fields: [
    defineField({ name: 'heading', title: 'Titular', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'subheading', title: 'Párrafo', type: 'text', rows: 2 }),
    defineField({
      name: 'items',
      title: 'Tarjetas de problemas',
      description: 'Normalmente 3, una por columna.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'problemCard',
          fields: [
            defineField({ name: 'title', title: 'Pregunta', type: 'string', validation: (Rule) => Rule.required() }),
            defineField({ name: 'text', title: 'Respuesta', type: 'text', rows: 2, validation: (Rule) => Rule.required() }),
          ],
          preview: { select: { title: 'title', subtitle: 'text' } },
        }),
      ],
      validation: (Rule) => Rule.min(1).error('Hace falta al menos una tarjeta.'),
    }),
    defineField({
      name: 'tapeText',
      title: 'Texto de la cinta animada',
      description: 'Se repite muchas veces en la franja amarilla que cruza esta sección al bajar. Actívala o desactívala en Ajustes generales.',
      type: 'string',
      initialValue: '- PELIGRO',
    }),
  ],
  preview: {
    prepare: () => ({ title: '2 · Problemas' }),
  },
})
