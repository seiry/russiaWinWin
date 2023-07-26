module.exports = {
    extends: [
        'next',
        'next/core-web-vitals',
        'prettier',
        'plugin:prettier/recommended',
    ],
    plugins: ['prettier'],
    rules: {
        'react/self-closing-comp': [
            'error',
            {
                component: true,
                html: true,
            },
        ],
        'react/display-name': 'off',
    },
}
