import { defineField, defineType } from 'sanity'

export const homeAbout = defineType({
  name: 'homeAbout',
  title: '3 · Sobre mí',
  type: 'document',
  description: 'El resumen corto de "Sobre mí" que aparece en la portada (la historia completa vive en la página Nosotros).',
  fields: [
    defineField({ name: 'eyebrow', title: 'Texto pequeño', type: 'string', initialValue: 'Sobre Mí' }),
    defineField({ name: 'heading', title: 'Titular', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'text', title: 'Párrafo', type: 'text', rows: 4, validation: (Rule) => Rule.required() }),
    defineField({
      name: 'points',
      title: 'Lista de servicios',
      description: 'Se muestran con un ícono de check. Normalmente 4.',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'photo',
      title: 'Foto',
      type: 'image',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Texto alternativo', type: 'string' })],
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: 'badgeNumber', title: 'Número destacado', description: 'Ejemplo: +2 Años', type: 'string' }),
    defineField({ name: 'badgeLabel', title: 'Texto bajo el número', type: 'string' }),
  ],
  preview: {
    prepare: () => ({ title: '3 · Sobre mí' }),
  },
})
