module.exports = {
	env: {
		browser: true
	},
	// parser: 'babel-eslint',  // Deprecated Package. use @babel/eslint-parser instead
	parser: '@babel/eslint-parser',
	plugins: ['jsx-a11y', 'react-hooks'],
	rules: {
		'no-case-declarations': 'off',
		'jsx-a11y/anchor-is-valid': 'warn',
		'jsx-a11y/no-noninteractive-element-interactions': 'warn',
		'jsx-a11y/no-onchange': 'warn',
		'jsx-a11y/no-autofocus': 'warn',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		// 'react/prop-types': 'off',
		// 'react/no-find-dom-node': 'warn',
		'eol-last': 'error',
		'consistent-return': 'error',
		'one-var': ['error', 'never'],
		eqeqeq: ['error', 'smart'],
		'no-var': 'error',
		'spaced-comment': [
			'error',
			'always',
			{
				markers: ['/']
			}
		],
		// FIXME: review fallowing rules
		// 'react/jsx-no-target-blank': 'warn',
		// 'jsx-a11y/click-events-have-key-events': 'warn',
		// 'jsx-a11y/no-static-element-interactions': 'warn',
		// 'jsx-a11y/tabindex-no-positive': 'warn'
	},
	"parserOptions": {
		"ecmaVersion": 6,
		"sourceType": "module",
		"ecmaFeatures": {
			"jsx": true
		}
	}
};
