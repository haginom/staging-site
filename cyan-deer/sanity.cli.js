import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'k1v0o1cy',
  },
  graphql: [
    {
      tag: 'default',
      playground: true,
      id: 'production-workspace',
      workspace: 'production-workspace',
    },
    {
      playground: true,
      id: 'staging-workspace',
      workspace: 'staging-workspace',
    },
  ],
})
