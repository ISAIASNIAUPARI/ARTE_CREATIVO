'use client'

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes, singletonTypes } from './sanity/schemaTypes'
import { structure } from './sanity/structure'
import { projectId, dataset, apiVersion } from './lib/sanity/client'

export default defineConfig({
  name: 'default',
  title: 'Arte Creativo',
  basePath: '/studio',
  projectId,
  dataset,
  schema: { types: schemaTypes },
  plugins: [structureTool({ structure }), visionTool({ defaultApiVersion: apiVersion })],
  document: {
    // Las secciones son singletons: solo se editan, nunca se crean ni se
    // borran desde el Studio. Quedan publicar, descartar cambios y restaurar.
    actions: (prev, { schemaType }) =>
      singletonTypes.has(schemaType)
        ? prev.filter(({ action }: any) => action && ['publish', 'discardChanges', 'restore'].includes(action))
        : prev,
    // Tampoco aparecen en el buscador global ni en "nuevo documento".
    newDocumentOptions: (prev, { creationContext }) =>
      creationContext.type === 'global' ? prev.filter((tpl) => !singletonTypes.has(tpl.templateId)) : prev,
  },
})
