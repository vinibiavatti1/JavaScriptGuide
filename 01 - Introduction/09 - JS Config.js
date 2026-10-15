/**
 * JS Config
 *
 * The 'jsconfig.json' file is a configuration file that acts as the root for JavaScript projects in
 * editors like VS Code. It is essentially the twin of 'tsconfig.json', designed to provide powerful
 * IDE static analysis, JSDoc type-checking, and path aliasing for pure JavaScript codebases without
 * requiring a compilation step.
 */

/**
 * Example of a standard jsconfig.json file content:
 */
`
{
    "compilerOptions": {
        "target": "ESNext",
        "module": "NodeNext",
        "checkJs": true,
        "strict": true,
        "noEmit": true,
        "lib": ["ESNext", "DOM"]
    },
    "include": [
        "src/**/*"
    ]
}
`;

/**
 * Compiler Options
 * - The primary configuration object that controls how the language service analyzes and checks
 *   your JavaScript code.
 */
'"compilerOptions": { ... }'

/**
 * Target
 * - Determines the ECMAScript version to which the language service aligns its syntax support and
 *   available built-in objects.
 * - Options available: 'ES5' (legacy baseline), 'ES6' / 'ES2015' through 'ES2022' (specific annual
 *   standards), and 'ESNext' (targets the most recent features and syntax specifications
 *   available).
 */
'"target": "ESNext"'

/**
 * Module
 * - Specifies the module resolution strategy used by the editor to understand import and export
 *   statements.
 * - Options available: 'CommonJS': Uses legacy require/module.exports syntax, 'NodeNext'/'Node16':
 *   Aligns with modern Node.js ECMAScript Modules (ESM) and modern resolution rules, 'ESNext':
 *   Uses modern ES module syntax without targeting a specific runtime environment.
 */
'"module": "NodeNext"'

/**
 * Check JS
 * - Enables type-checking of JavaScript files. When set to 'true', the editor reads JSDoc tags
 *   ('@param', '@returns', '@typedef') and reports type mismatches.
 */
'"checkJs": true'

/**
 * Strict
 * - Enables all strict type-checking options collectively, enforcing rigorous validation such as
 *   strict null checks and parameter verification.
 */
'"strict": true'

/**
 * No Emit
 * - Instructs the editor not to emit or generate compiled output files. Essential for pure
 *   JavaScript projects since code execution happens directly on the source files.
 */
'"noEmit": true';

/**
 * Library (Lib)
 * - Specifies a list of ambient library declaration files to be included in the global scope.
 * - Allows the editor to recognize runtime environments like modern ECMAScript features ('ESNext')
 *   or browser DOM APIs ('DOM').
 */
`
"lib": [
    "ESNext",
    "DOM"
]
`;

/**
 * Include
 * - Specifies an array of file patterns or directory paths that the language service should analyze
 *   and check.
 */
`
"include": [
    "src/**/*"
]
`;
