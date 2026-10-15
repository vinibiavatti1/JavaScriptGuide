/**
 * TS Config
 *
 * The 'tsconfig.json' file is the root configuration file for TypeScript projects. It specifies the
 * root files and the compiler options required to compile TypeScript into standard JavaScript,
 * while also providing powerful IDE static analysis, strict type-checking, and path aliasing.
 */

/**
 * Example of a standard tsconfig.json file content:
 */
`
{
    "compilerOptions": {
        "target": "ESNext",
        "module": "NodeNext",
        "strict": true,
        "noEmit": false,
        "lib": ["ESNext"]
    },
    "include": [
        "src/**/*"
    ]
}
`;

/**
 * Compiler Options
 * - The primary configuration object that controls how the TypeScript compiler and editor language
 *   service process, check, and emit your code.
 */
'"compilerOptions": { ... }'

/**
 * Target
 * - Determines the ECMAScript version to which the TypeScript compiler aligns its syntax support,
 *   compilation output, and available built-in objects.
 * - Options available: 'ES5' (legacy baseline), 'ES6' / 'ES2015' through 'ES2022' (specific annual
 *   standards), and 'ESNext' (targets the most recent features and syntax specifications
 *   available).
 */
'"target": "ESNext"'

/**
 * Module
 * - Specifies the module resolution and generation strategy used for import and export statements.
 * - Options available: 'CommonJS': Uses legacy require/module.exports syntax, 'NodeNext'/'Node16':
 *   Aligns with modern Node.js ECMAScript Modules (ESM) and modern resolution rules, 'ESNext':
 *   Uses modern ES module syntax without targeting a specific runtime environment.
 */
'"module": "NodeNext"'

/**
 * Strict
 * - Enables all strict type-checking options collectively, enforcing rigorous validation such as
 *   strict null checks, explicit function types, and parameter verification.
 */
'"strict": true'

/**
 * No Emit
 * - Instructs the compiler whether or not to emit or generate compiled output files.
 * - Set to 'false' in TypeScript projects so the compiler actually produces the resulting
 *   JavaScript files (unlike JavaScript projects where it is typically set to 'true').
 */
'"noEmit": false';

/**
 * Library (Lib)
 * - Specifies a list of ambient library declaration files to be included in the global scope.
 * - Allows the compiler to recognize runtime environments like modern ECMAScript features
 *   ('ESNext') or browser DOM APIs ('DOM').
 */
`
"lib": [
    "ESNext"
]
`;

/**
 * Include
 * - Specifies an array of file patterns or directory paths that the TypeScript compiler should
 *   include for type-checking and compilation.
 */
`
"include": [
    "src/**/*"
]
`;
