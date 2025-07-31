import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import prettierRecommended from "eslint-config-prettier"; // Assuming you install this

import { defineConfig } from "eslint/config";

export default defineConfig([
  eslint.configs.recommended,
  ...tseslint.configs.strict, // Strict TypeScript rules
  prettierRecommended, // Add this to disable conflicting formatting rules
  {
    files: ["./src/**/*.ts"], // Only apply to TypeScript files
    rules: {
      "prefer-const": "error", // Enable this rule
      // Consider re-enabling or documenting the reason for disabling no-non-null-assertion
      // "@typescript-eslint/no-non-null-assertion": "off",
    },
  },
  {
    ignores: ["**/*.js", "!eslint.config.mjs"], // Ignore JS files but include this config file
  },
]);
