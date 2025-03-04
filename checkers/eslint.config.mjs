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
      // General rules - Code Consistency
      "quotes": ["error", "single"],  // Enforce single quotes
      "no-trailing-spaces": "error", // Disallow trailing whitespace at the end of lines.
      "eol-last": ["error", "always"], //Enforce at least one newline at the end of files.
      "indent": ["error", 2, { SwitchCase: 1 }], // Enforce consistent indentation (2 spaces is common). indent after switch statements

      "@typescript-eslint/no-explicit-any": "warn", // warn whenever there is a type of any
      "@typescript-eslint/explicit-module-boundary-types": "warn", // Warn when exported functions lack explicit return and argument types.
      "react/jsx-key": "error" // Ensure that all elements in iterators have a key prop.
    },
  },
];