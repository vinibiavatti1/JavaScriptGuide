/**
 * Package JSON
 *
 * The 'package.json' file is the heart of any Node.js project or npm package.
 * It acts as a manifest file that holds metadata about the project and dictates
 * how the project is handled, configured, and executed by npm.
 *
 * It lists the dependencies required by the project, specifies configuration
 * metadata, and defines script shortcuts for running tests, builds, and servers.
 *
 * To generate this file interactively, the "npm init" command is used.
 *
 * Companion File: package-lock.json
 * - While package.json uses version ranges (like ^4.19.2) to specify allowed updates,
 *   the 'package-lock.json' file is automatically generated and locked by npm.
 * - It records the exact, precise version of every installed dependency and sub-dependency,
 *   guaranteeing that anyone else cloning or deploying the project gets the exact same code tree.
 */

/**
 * Example of a simple package.json file content:
 */
```
{
    "name": "my-node-project",
    "version": "1.0.0",
    "description": "A simple learning project",
    "main": "index.js",
    "type": "module",
    "scripts": {
        "start": "node index.js"
    },
    "dependencies": {
        "express": "^4.19.2"
    },
    "devDependencies": {
        "nodemon": "^3.1.0"
    },
    "engines": {
        "node": ">=18.0.0"
    }
}
```

/**
 * Name
 * - Defines the unique name of the project or package.
 * - Must be lowercase, URL-friendly, and without spaces.
 */
'name": "my-node-project"'

/**
 * Version
 * - Defines the current version of the project.
 * - Follows Semantic Versioning (SemVer) rules (MAJOR.MINOR.PATCH).
 */
'"version": "1.0.0"'

/**
 * Description
 * - A short summary string of what the project does.
 * - Displayed in the npm registry search results if published.
 */
'"description": "A simple learning project"'

/**
 * Main
 * - The primary entry point file where application execution starts.
 * - Commonly named index.js or app.js.
 */
'"main": "index.js"'

/**
 * Type
 * - Defines the module format that Node.js should use for JavaScript files.
 * - Setting it to "module" enables native ECMAScript Modules (ESM), allowing
 *   the use of 'import' and 'export' instead of legacy CommonJS 'require()'.
 */
'type": "module'

/**
 * Scripts
 * - Custom shell command shortcuts.
 * - Executed via npm run <script-name> (or special shortcuts like npm start).
 */
```
"scripts": {
    "start": "node index.js"
}
```

/**
 * Dependencies
 * - Production dependencies required for the application to run successfully in production.
 */
```
"dependencies": {
    "express": "^4.19.2"
}
```

/**
 * Dev Dependencies
 * - Development-only dependencies required during development, testing, or building.
 */
```
"devDependencies": {
    "nodemon": "^3.1.0"
}
```

/**
 * Engines
 * - Defines the compatible Node.js version range required to run the project.
 * - Note: This property is completely optional and often omitted in smaller or
 *   standard projects.
 */
```
"engines": {
    "node": ">=18.0.0"
}
```

