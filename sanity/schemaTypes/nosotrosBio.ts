import { defineField, defineType } from 'sanity'

export const nosotrosBio = defineType({
  name: 'nosotrosBio',
  title: '4 · Socio estratégico',
  type: 'document',
  description: 'La foto reacciona al pasar el mouse por encima (efecto 3D) — es un comportamiento fijo, no editable.',
  fields: [
    defineField({ name: 'heading', title: 'Titular', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'text', title: 'Párrafo', type: 'text', rows: 4, validation: (Rule) => Rule.required() }),
    defineField({ name: 'points', title: 'Lista de servicios', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'ctaLabel', title: 'Texto del botón', type: 'string', validation: (Rule) => Rule.required() }),
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
    prepare: () => ({ title: '4 · Socio estratégico' }),
  },
})
