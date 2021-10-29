module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'import',
    'node',
    'promise',
    '@typescript-eslint',
  ],
  rules: {
    'no-unused-vars': 0,
    'space-before-function-paren': 0,
    camelcase: 0,
    'func-call-spacing': 0,
    'no-mixed-operators': 1,
    'no-async-promise-executor': 1,
    'no-irregular-whitespace': 1,
    'no-path-concat': 1,
    'no-useless-escape': 1,
    quotes: [
      'error',
      'single',
    ],
    'no-extra-parens': 'error',
    'padding-line-between-statements': ['error', {
      blankLine: 'always',
      prev: '*',
      next: 'return',
    }],
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }],

    semi: ['error', 'never'],
    'no-trailing-spaces': 'error',
    'no-multi-spaces': 'error',
    'eol-last': [
      'error',
      'always',
    ],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    'no-redeclare': 'error',
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    'key-spacing': ['error', { afterColon: true }],
    'space-before-blocks': 'error',
    'import/no-named-default': 0,
    '@typescript-eslint/no-unused-vars': ['error', {
      'argsIgnorePattern': '^_',
    }],
    '@typescript-eslint/type-annotation-spacing': ['error', { after: true }],
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'none',
        requireLast: true,
      },
      singleline: {
        delimiter: 'comma',
        requireLast: false,
      },
    }],
    'no-case-declarations': 0,
    'no-empty': 0,
    'no-console': [
      1,
      {
        allow: [
          'log',
          'error',
        ],
      },
    ],
    'require-atomic-updates': 0,
  },
}
