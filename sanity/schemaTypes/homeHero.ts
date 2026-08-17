import { defineField, defineType } from 'sanity'

export const homeHero = defineType({
  name: 'homeHero',
  title: '1 · Portada',
  type: 'document',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Texto pequeño sobre el titular',
      description: 'Aparece dentro del recuadro, encima del titular grande.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heading',
      title: 'Titular',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'headingHighlight',
      title: 'Palabra destacada del titular',
      description: 'Esa palabra exacta dentro del titular se pinta en dorado claro. Déjalo vacío si ninguna palabra debe resaltar.',
      type: 'string',
    }),
    defineField({
      name: 'subheading',
      title: 'Párrafo debajo del titular',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaLabel',
      title: 'Texto del botón',
      description: 'El botón siempre lleva al WhatsApp configurado en Ajustes generales.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroVideo',
      title: 'Video de fondo',
      description: 'Se reproduce en bucle y sin sonido detrás del titular. Formato .mp4.',
      type: 'file',
      options: { accept: 'video/mp4' },
    }),
    defineField({
      name: 'tags',
      title: 'Franja de etiquetas',
      description: 'Las palabras que se mueven en bucle justo debajo de la portada. Arrástralas para reordenar.',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
  preview: {
    prepare: () => ({ title: '1 · Portada' }),
  },
})
