import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig([
  {
    name: 'production-workspace',
    title: 'production-workspace',
    projectId: 'k1v0o1cy',
    plugins: [deskTool(), visionTool()],
    basePath: '/production',
    dataset: 'production',
    schema: {
      types: schemaTypes,
    },
  },
  {
    name: 'staging-workspace',
    title: 'staging-workspace',
    projectId: 'k1v0o1cy',
    plugins: [deskTool(), visionTool()],
    basePath: '/staging',
    dataset: 'staging',
    schema: {
      types: schemaTypes,
    },
  },
])
