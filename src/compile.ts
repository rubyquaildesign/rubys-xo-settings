import merge from 'lodash.merge';
import c from '../node_modules/eslint-config-xo-typescript/index.js';
import type x from 'xo';
import type { Config } from 'prettier';
import type { Linter } from 'eslint';
import type { ESLintRules } from 'eslint/rules/index';
import { writeFileSync } from 'fs';
const rules: Linter.RulesRecord & Partial<ESLintRules> = {
	'@typescript-eslint/naming-convention': [
		'error',
		{
			/// selector: ['variableLike', 'memberLike', 'property', 'method'],
			// Note: Leaving out `parameter` and `typeProperty` because of the mentioned known issues.
			// Note: We are intentionally leaving out `enumMember` as it's usually pascal-case or upper-snake-case.
			selector: 'default',
			format: ["camelCase","UPPER_CASE"],
			// We allow double underscore because of GraphQL type names and some React names.
			leadingUnderscore: 'allowSingleOrDouble',
			trailingUnderscore: 'allow',
			// Ignore `{'Retry-After': retryAfter}` type properties.
			filter: {
				regex: '[- ]',
				match: false,
			},
		},
		{
			selector: 'typeLike',
			format: ['PascalCase'],
		},
		{
			selector: 'variable',
			modifiers: ['const'],
			format: ['camelCase','UPPER_CASE'],
			leadingUnderscore: 'allowSingleOrDouble',
			trailingUnderscore: 'allow',
			// Ignore `{'Retry-After': retryAfter}` type properties.
			filter: {
				regex: '[- ]',
				match: false,
			},
		},
		{
			selector: 'variable',
			types: ['boolean'],
			format: ['PascalCase'],
			prefix: ['is', 'has', 'can', 'should', 'will', 'did'],
		},
		{
			// Interface name should not be prefixed with `I`.
			selector: 'interface',
			filter: /^(?!I)[A-Z]/.source,
			format: ['PascalCase'],
		},
		{
			// Type parameter name should either be `T` or a descriptive name.
			selector: 'typeParameter',
			filter: /^T$|^[A-Z][a-zA-Z]+$/.source,
			format: ['PascalCase'],
		},
		// Allow these in non-camel-case when quoted.
		{
			selector: ['classProperty', 'objectLiteralProperty'],
			format: null,
			modifiers: ['requiresQuotes'],
		},
	],
	'no-labels': ['error', { allowLoop: true }],
	'capitalized-comments': ['off'],
	'new-cap': ['off'],
	'import/no-unassigned-import': 'off',
	'no-bitwise': 'off',
	'no-implicit-globals': 'off',
	'@typescript-eslint/restrict-template-expressions': 'off',
	'@typescript-eslint/unified-signatures': 'off',
	'@typescript-eslint/no-unused-vars': 'off',
	'@typescript-eslint/no-unsafe-assignment': 'off',
	'@typescript-eslint/no-unsafe-call': 'off',
	'@typescript-eslint/no-unsafe-return': 'off',
	'@typescript-eslint/ban-ts-comment':'off',
	'@typescript-eslint/prefer-for-of':'off',
	'unicorn/prefer-node-protocol': 'off',
	'unicorn/no-array-reduce': 'off',
	'unicorn/no-array-for-each': 'off',
	'unicorn/no-await-expression-member':'off',
	'import/extensions': 'off',
	'no-await-in-loop': 'off',
	'complexity': 'off',
	'default-case': 'off',
	'unicorn/filename-case':'off',
	"max-params":['warn',{max:8}]
};
const opts: x.Options = {
	prettier: true,
	space: false,
	semicolon: true,
	rules: rules as any,
};

export const prettierSettings: Partial<Config> = {
	arrowParens: 'avoid',
	bracketSpacing: true,
	semi: true,
	singleQuote: true,
	trailingComma: 'all',
	useTabs: true,
};
writeFileSync(
	'src/data.json',
	JSON.stringify({ xo: opts, prettier: prettierSettings })
);
export {};
