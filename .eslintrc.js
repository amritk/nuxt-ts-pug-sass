module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: '@typescript-eslint/parser',
        project: './tsconfig.json'
    },
    extends: [
        '@nuxtjs',
        'plugin:nuxt/recommended',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/recommended'
    ],
    plugins: [
        '@typescript-eslint'
    ],
    // add your custom rules here
    rules: {
        'nuxt/no-cjs-in-config': 'off',
        '@typescript-eslint/explicit-function-return-type': 0,
        'arrow-parens': [2, 'as-needed'],
        'brace-style': [2, 'stroustrup'],
        'curly': [2, 'all'],
        'indent': [2, 4],
        'max-len': [2, {
            'code': 120,
            'ignoreUrls': true,
            'ignoreStrings': true,
            'ignoreTemplateLiterals': true,
            'ignoreRegExpLiterals': true
        }],
        'new-parens': 2,
        'no-console': 1,
        'no-irregular-whitespace': 2,
        'no-multiple-empty-lines': [2, { max: 1 }],
        'no-trailing-spaces': 2,
        'no-unused-expressions': 2,
        'no-var': 2,
        'object-curly-newline': [2, {
            'ObjectExpression': { 'multiline': true, 'minProperties': 3, 'consistent': true },
            'ImportDeclaration': 'never',
            'ExportDeclaration': 'never'
        }],
        'object-curly-spacing': [2, 'always'],
        'one-var-declaration-per-line': 2,
        'prefer-const': 2,
        'quotes': [2, 'single'],
        'semi': [2, 'never'],
        'space-before-function-paren': [2, 'always']
    }
}
