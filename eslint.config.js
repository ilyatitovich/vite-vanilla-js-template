export default [
  {
    ignores: []
  },
  {
    files: ['**/*.ts', '**/*.js'],
    rules: {
      'perfectionist/sort-imports': [
        'error',
        {
          'groups': [
            'side-effect',
            ['side-effect-style', 'style'],
            ['builtin-type', 'type', 'builtin', 'external', 'unknown'],
            [
              'internal-type',
              'parent-type',
              'sibling-type',
              'index-type',
              'internal',
              'parent',
              'sibling',
              'index'
            ],
            ['object']
          ],
          'newlines-between': 'always',
          'order': 'asc',
          'type': 'alphabetical'
        }
      ]
    }
  }
]
