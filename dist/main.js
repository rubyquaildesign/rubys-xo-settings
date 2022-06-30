// src/data.json
var data_default = { xo: { prettier: true, space: false, semicolon: true, rules: { "@typescript-eslint/naming-convention": ["error", { selector: "default", format: ["camelCase"], leadingUnderscore: "allowSingleOrDouble", trailingUnderscore: "allow", filter: { regex: "[- ]", match: false } }, { selector: "typeLike", format: ["PascalCase"] }, { selector: "variable", modifiers: ["const"], format: ["camelCase", "SNAKE_CASE"], leadingUnderscore: "allowSingleOrDouble", trailingUnderscore: "allow", filter: { regex: "[- ]", match: false } }, { selector: "variable", types: ["boolean"], format: ["PascalCase"], prefix: ["is", "has", "can", "should", "will", "did"] }, { selector: "interface", filter: "^(?!I)[A-Z]", format: ["PascalCase"] }, { selector: "typeParameter", filter: "^T$|^[A-Z][a-zA-Z]+$", format: ["PascalCase"] }, { selector: ["classProperty", "objectLiteralProperty"], format: null, modifiers: ["requiresQuotes"] }], "no-labels": ["error", { allowLoop: true }], "capitalized-comments": ["off"], "new-cap": ["off"], "import/no-unassigned-import": "off", "no-bitwise": "off", "no-implicit-globals": "off", "@typescript-eslint/restrict-template-expressions": "off", "@typescript-eslint/unified-signatures": "off", "@typescript-eslint/no-unused-vars": "off", "unicorn/prefer-node-protocol": "off", "unicorn/no-array-reduce": "off", "import/extensions": "off" } }, prettier: { arrowParens: "avoid", bracketSpacing: true, semi: true, singleQuote: true, trailingComma: "all", useTabs: true } };

// src/main.ts
var xoSettings = { ...data_default.xo };
var prettierSettings = { ...data_default.prettier };
var main_default = xoSettings;
export {
  main_default as default,
  prettierSettings,
  xoSettings
};
