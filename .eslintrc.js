module.exports = {
	"env": {
		"es6": true,
	},
	"extends": [
    	// "plugin:react/recommended",
		"eslint:recommended"
	],	
	"parserOptions": {
		"ecmaVersion": 6,
		"ecmaFeatures": {
			"experimentalObjectRestSpread": true,
			"jsx": true
		},
		"sourceType": "module"
	},
	"plugins": [
		"react"
	],
	"rules": {
		"react/jsx-uses-vars": [
			2
		],
		"indent": [
			"error",
			"tab"
		],
		"quotes": [
			"error",
			"single"
		],
		"semi": [
			"error",
			"always"
		]
	}
};