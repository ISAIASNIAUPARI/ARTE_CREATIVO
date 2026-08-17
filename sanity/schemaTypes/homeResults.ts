import { defineField, defineArrayMember, defineType } from 'sanity'

export const homeResults = defineType({
  name: 'homeResults',
  title: '4 · Resultados',
  type: 'document',
  fields: [
    defineField({ name: 'heading', title: 'Titular', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'testimonials',
      title: 'Testimonios',
      description: 'Se muestran en dos franjas que se mueven en bucle, en direcciones opuestas. El orden aquí es el orden en pantalla.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'testimonial',
          fields: [
            defineField({ name: 'company', title: 'Empresa', type: 'string', validation: (Rule) => Rule.required() }),
            defineField({ name: 'name', title: 'Nombre de quien opina', type: 'string', validation: (Rule) => Rule.required() }),
            defineField({ name: 'text', title: 'Testimonio', type: 'text', rows: 3, validation: (Rule) => Rule.required() }),
          ],
          preview: { select: { title: 'name', subtitle: 'company' } },
        }),
      ],
      validation: (Rule) => Rule.min(1).error('Hace falta al menos un testimonio.'),
    }),
  ],
  preview: {
    prepare: () => ({ title: '4 · Resultados' }),
  },
})
