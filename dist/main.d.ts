declare const xoSettings: {
    readonly prettier: boolean;
    readonly space: boolean;
    readonly semicolon: boolean;
    readonly rules: {
        "@typescript-eslint/naming-convention": (string | {
            selector: string;
            format: string[];
            leadingUnderscore: string;
            trailingUnderscore: string;
            filter: {
                regex: string;
                match: boolean;
            };
            modifiers?: undefined;
            types?: undefined;
            prefix?: undefined;
        } | {
            selector: string;
            format: string[];
            leadingUnderscore?: undefined;
            trailingUnderscore?: undefined;
            filter?: undefined;
            modifiers?: undefined;
            types?: undefined;
            prefix?: undefined;
        } | {
            selector: string;
            modifiers: string[];
            format?: undefined;
            leadingUnderscore?: undefined;
            trailingUnderscore?: undefined;
            filter?: undefined;
            types?: undefined;
            prefix?: undefined;
        } | {
            selector: string;
            types: string[];
            format: string[];
            prefix: string[];
            leadingUnderscore?: undefined;
            trailingUnderscore?: undefined;
            filter?: undefined;
            modifiers?: undefined;
        } | {
            selector: string;
            filter: string;
            format: string[];
            leadingUnderscore?: undefined;
            trailingUnderscore?: undefined;
            modifiers?: undefined;
            types?: undefined;
            prefix?: undefined;
        } | {
            selector: string[];
            format: any;
            modifiers: string[];
            leadingUnderscore?: undefined;
            trailingUnderscore?: undefined;
            filter?: undefined;
            types?: undefined;
            prefix?: undefined;
        })[];
        "no-labels": (string | {
            allowLoop: boolean;
        })[];
        "capitalized-comments": string[];
        "new-cap": string[];
        "import/no-unassigned-import": string;
        "no-bitwise": string;
        "no-implicit-globals": string;
        "@typescript-eslint/restrict-template-expressions": string;
        "@typescript-eslint/unified-signatures": string;
        "@typescript-eslint/no-unused-vars": string;
        "unicorn/prefer-node-protocol": string;
        "unicorn/no-array-reduce": string;
        "import/extensions": string;
    };
};
declare const prettierSettings: {
    readonly arrowParens: string;
    readonly bracketSpacing: boolean;
    readonly semi: boolean;
    readonly singleQuote: boolean;
    readonly trailingComma: string;
    readonly useTabs: boolean;
};

export { xoSettings as default, prettierSettings, xoSettings };
