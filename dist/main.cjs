var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => main_default,
  prettierSettings: () => prettierSettings,
  xoSettings: () => xoSettings
});
module.exports = __toCommonJS(main_exports);

// src/data.json
var data_default = { xo: { prettier: true, space: false, semicolon: true, rules: { "@typescript-eslint/naming-convention": ["error", { selector: "default", format: ["camelCase"], leadingUnderscore: "allowSingleOrDouble", trailingUnderscore: "allow", filter: { regex: "[- ]", match: false } }, { selector: "typeLike", format: ["PascalCase"] }, { selector: "variable", modifiers: ["const"], format: ["camelCase", "UPPER_CASE"], leadingUnderscore: "allowSingleOrDouble", trailingUnderscore: "allow", filter: { regex: "[- ]", match: false } }, { selector: "variable", types: ["boolean"], format: ["PascalCase"], prefix: ["is", "has", "can", "should", "will", "did"] }, { selector: "interface", filter: "^(?!I)[A-Z]", format: ["PascalCase"] }, { selector: "typeParameter", filter: "^T$|^[A-Z][a-zA-Z]+$", format: ["PascalCase"] }, { selector: ["classProperty", "objectLiteralProperty"], format: null, modifiers: ["requiresQuotes"] }], "no-labels": ["error", { allowLoop: true }], "capitalized-comments": ["off"], "new-cap": ["off"], "import/no-unassigned-import": "off", "no-bitwise": "off", "no-implicit-globals": "off", "@typescript-eslint/restrict-template-expressions": "off", "@typescript-eslint/unified-signatures": "off", "@typescript-eslint/no-unused-vars": "off", "@typescript-eslint/no-unsafe-assignment": "off", "@typescript-eslint/no-unsafe-call": "off", "@typescript-eslint/no-unsafe-return": "off", "@typescript-eslint/ban-ts-comment": "off", "@typescript-eslint/prefer-for-of": "off", "unicorn/prefer-node-protocol": "off", "unicorn/no-array-reduce": "off", "unicorn/no-array-for-each": "off", "unicorn/no-await-expression-member": "off", "import/extensions": "off", "no-await-in-loop": "off", complexity: "off", "default-case": "off", "unicorn/filename-case": "off", "max-params": ["warn", { max: 8 }] } }, prettier: { arrowParens: "avoid", bracketSpacing: true, semi: true, singleQuote: true, trailingComma: "all", useTabs: true } };

// src/main.ts
var xoSettings = { ...data_default.xo };
var prettierSettings = { ...data_default.prettier };
var main_default = xoSettings;
