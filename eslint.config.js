import tsParser from '@typescript-eslint/parser';
import astroParser from 'astro-eslint-parser';
import eslintPluginAstro from 'eslint-plugin-astro';
import { default as pluginImport } from 'eslint-plugin-import';
import importAlias from 'eslint-plugin-import-alias';

export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    plugins: {
      'import-alias': importAlias,
      'import': pluginImport
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest'
      }
    },
  },
  {
    files: ['*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.astro']
      }
    },
    rules: {
      quotes: [
        'error',
        'single',
        {
          'allowTemplateLiterals': true
        }
      ],
      'jsx-quotes': [
        'error',
        'prefer-double'
      ],
      semi: [
        'error',
        'always'
      ],
      'no-unused-vars': [
        'error',
        {
          'argsIgnorePattern': '^_',
          'varsIgnorePattern': '^_'
        }
      ],
      'no-var': [
        'warn'
      ],
      'max-len': [
        'warn',
        120
      ],
      'comma-dangle': [
        'error',
        'never'
      ],
      'import/no-unresolved': 'off',
      'import/extensions': 'off',
      'import/no-extraneous-dependencies': 'off',
      'import/order': [
        'error',
        {
          'alphabetize': {
            'caseInsensitive': true,
            'order': 'asc'
          },
          'groups': ['builtin', 'external', 'internal'],
          'newlines-between': 'always',
          'pathGroups': [
            {
              'pattern': '@/**',
              'group': 'external',
              'position': 'after'
            }
          ]
        }
      ],
      'import-alias/import-alias': [
        'error',
        {
          'relativeDepth': 0
        }
      ],
      'import/no-named-default': 'off',
      'import/prefer-default-export': 'off'
    }
  }
];