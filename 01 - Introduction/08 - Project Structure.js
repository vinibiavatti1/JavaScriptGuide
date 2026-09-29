/**
 * Project Structure
 *
 * A well-organized project structure is essential for maintaining scalability,
 * readability, and separation of concerns as a Node.js application grows.
 * While Node.js does not enforce a strict file structure by default, adopting
 * a standard architecture helps developers locate files quickly and keeps the
 * codebase clean.
 *
 * Key Directory Concepts:
 * 1. Root Directory:
 *    - The main folder containing global configuration files, documentation,
 *      manifests (package.json), and entry points.
 * 2. Source Code Folder (src):
 *    - Houses the core application logic, separating business rules, routes,
 *      database connections, and middleware from configuration files.
 * 3. Dependencies & Artifacts:
 *    - Folders like 'node_modules' (installed packages) and 'dist' or 'build'
 *      (compiled output) which are typically ignored by version control.
 */

/**
 * Typical Standard Directory Layout for a Modern Node.js Project:
 */
```
my-node-project/
|- node_modules/      // Automatically generated folder for third-party npm packages
|- src/               // Core application source code
|  |- config/         // Configuration files (database connections, environment variables)
|  |- controllers/    // Application logic and request handlers
|  |- models/         // Data schemas, database queries, and business entities
|  |- routes/         // Endpoint definitions and URL routing mapping
|  |- middlewares/    // Custom middleware functions (authentication, error handling)
|  |- app.js          // Express or server setup file
|- .editorconfig      // Editor formatting configuration rules
|- .env               // Environment variables (secrets, port, database URL)
|- package.json       // Project manifest, scripts, and dependencies metadata
|- package-lock.json  // Locks exact versions of installed node_modules dependencies
```
