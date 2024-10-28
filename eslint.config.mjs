import prettierRules from 'eslint-config-prettier';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
    {
        files: ['**/*.ts'], // Вибирає всі TypeScript файли
        ignores: ['node_modules', 'dist'], // Ігнорує node_modules і dist
        languageOptions: {
            parser: tsParser,
            ecmaVersion: 'latest',
            sourceType: 'module'
        },
        plugins: {
            '@typescript-eslint': tsPlugin,
            prettier: prettierPlugin
        },
        rules: {
            ...prettierRules.rules,   // Додає правила Prettier
            'prettier/prettier': 'error'
        }
    }
];
