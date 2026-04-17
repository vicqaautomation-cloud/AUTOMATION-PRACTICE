import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  // Base config
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // Global config
  {
    files: ["**/*.{js,ts,mjs,mts}"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      "no-console": "warn",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "error",
      "prefer-const": "error"
    }
  },

  // Playwright tests (IMPORTANT)
  {
    files: ["tests/**/*.{ts,js}"],
    languageOptions: {
      globals: {
        ...globals.node
      }
    },
    rules: {
      "no-console": "off" // tests pueden usar console.log
    }
  }
];