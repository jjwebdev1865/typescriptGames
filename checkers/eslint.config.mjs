import reactPlugin from 'eslint-plugin-react';
import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';

export default [
  {
    ignores: ["node_modules/**"],  // Ensure you ignore the node_modules directory
  },
  {
    files: ["src/**/*.{ts,tsx}"],  // Target TypeScript files
    languageOptions: {
      parser: typescriptParser,  // Use the TypeScript parser
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      react: reactPlugin,
      '@typescript-eslint': typescriptPlugin,
    },
    rules: {
      // React specific rules
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      // TypeScript specific rules
      "@typescript-eslint/no-unused-vars": ["error"],
      "@typescript-eslint/explicit-function-return-type": "off",
      // General rules
      "quotes": ["error", "single"],  // Enforce single quotes
    },
  },
];