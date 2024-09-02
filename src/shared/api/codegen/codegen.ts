import type { CodegenConfig } from '@graphql-codegen/cli';

import { config } from '../../lib/config';

const codegenConfig: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      'https://broccoli.dev.orderhouse.io/schema.json': {
        headers: {
          'x-api-key': config.keys.xAPI,
        },
      },
    },
  ],
  documents: 'src/**/*.ts',
  generates: {
    'src/shared/types/codegen/types.d.ts': {
      plugins: ['typescript'],
      config: {
        skipTypename: true,
        disableDescriptions: true,
        typesPrefix: 'I',
        declarationKind: 'interface',
        namingConvention: {
          enumValues: 'change-case-all#upperCase',
        },
        scalars: {
          Date: 'string',
          DateTime: 'string',
          Double: 'number',
          Long: 'number',
          UUID: 'string',
          BigDecimal: 'number',
          DayOfWeek: 'string',
        },
      },
    },
    'src/shared/api/codegen/graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
};

export default codegenConfig;
