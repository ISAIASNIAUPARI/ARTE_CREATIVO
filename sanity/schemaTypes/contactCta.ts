import { defineField, defineType } from 'sanity'

export const contactCta = defineType({
  name: 'contactCta',
  title: '💬 Llamado a la acción (compartido)',
  type: 'document',
  description: 'Titular y párrafo que aparecen sobre el formulario de "cotizar proyecto" en Inicio, Nosotros, Blog y en cada proyecto del portafolio. Se edita una sola vez y cambia en las cuatro páginas a la vez. Portafolio y Contacto tienen su propio texto, en sus secciones.',
  fields: [
    defineField({ name: 'heading', title: 'Titular', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'subheading', title: 'Párrafo', type: 'text', rows: 2, validation: (Rule) => Rule.required() }),
  ],
  preview: {
    prepare: () => ({ title: '💬 Llamado a la acción (compartido)' }),
  },
})
