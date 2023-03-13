module.exports = {
	extends: [
		'react-app',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/typescript',
		'prettier',
	],
	plugins: ['prettier'],
	settings: {
		react: {
			version: 'detect',
		},
	},
	rules: {
		'no-console': 'warn',
		'prettier/prettier': 'warn',
		'import/order': [
			'warn',
			{
				'newlines-between': 'always',
				groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
				alphabetize: { order: 'asc', caseInsensitive: true },
			},
		],
		'sort-imports': ['warn', { ignoreCase: true, ignoreDeclarationSort: true }],
		'import/no-default-export': ['warn'],
		'@typescript-eslint/ban-ts-ignore': ['off'],
		'@typescript-eslint/ban-ts-comment': ['off'],
		'@typescript-eslint/no-non-null-assertion': ['off'],
		'react/jsx-one-expression-per-line': ['off'],
		'react/no-unknown-property': ['off'],
	},
};
