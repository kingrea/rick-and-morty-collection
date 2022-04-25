/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  "root": true,
  "extends": [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
    "prettier/@typescript-eslint", // make eslint compatible with prettier formatting
    "plugin:prettier/recommended", // eslint shows prettier formatting warnings. Must be always the last configuration.
  ],
  "env": {
    "vue/setup-compiler-macros": true
  },
  "@typescript-eslint/quotes": [
    "error",
    "single",
    {
      "avoidEscape": true,
      "allowTemplateLiterals": true
    }
  ]
}
