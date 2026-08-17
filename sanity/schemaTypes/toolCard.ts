import { defineField, defineType } from 'sanity'

export const toolCard = defineType({
  name: 'toolCard',
  title: 'Herramienta',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Nombre', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'category', title: 'Categoría', type: 'string', initialValue: 'Herramientas' }),
    defineField({
      name: 'logo',
      title: 'Logo',
      description: 'Se muestra centrado dentro de una tarjeta con fondo propio (siguiente campo).',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logoBackground',
      title: 'Color de fondo de la tarjeta',
      description: 'Un color hexadecimal, por ejemplo #ffffff. Elígelo para que el logo se lea bien.',
      type: 'string',
      initialValue: '#ffffff',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'aboutText',
      title: 'Texto "Sobre la herramienta"',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Orden',
      description: 'Los números más bajos aparecen primero.',
      type: 'number',
      initialValue: 0,
    }),
  ],
  orderings: [{ title: 'Orden manual', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { title: 'title', subtitle: 'description', media: 'logo' },
  },
})
