import { defineField, defineArrayMember, defineType } from 'sanity'

export const nosotrosWorkStyle = defineType({
  name: 'nosotrosWorkStyle',
  title: '3 · Forma de trabajar',
  type: 'document',
  fields: [
    defineField({ name: 'heading', title: 'Titular', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'items',
      title: 'Pasos',
      description: 'Cada uno lleva un emoji al inicio (escríbelo tú mismo dentro del texto destacado).',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'step',
          fields: [
            defineField({
              name: 'highlight',
              title: 'Texto destacado (con su emoji)',
              description: 'Ejemplo: 🎯 Escucho primero:',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({ name: 'text', title: 'Resto del texto', type: 'string', validation: (Rule) => Rule.required() }),
          ],
          preview: { select: { title: 'highlight', subtitle: 'text' } },
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: '3 · Forma de trabajar' }),
  },
})
