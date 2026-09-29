/**
 * Dot Env (.env)
 *
 * The '.env' file is a simple text file used to store sensitive data and environment-specific
 * configuration variables (such as database URLs, API keys, port numbers, and secrets)
 * outside of your actual application code.
 *
 * Why Use a .env File?
 * - Security (No Hardcoded Secrets): Prevents sensitive credentials (like passwords or
 *   tokens) from being accidentally committed to public code repositories (like GitHub).
 * - Environment Flexibility: Allows your application to behave differently depending
 *   on where it runs (e.g., development, staging, or production) simply by changing
 *   the variables (.env, .env.development, .env.staging, .env.production).
 *
 * Native Support in Modern Node.js:
 * - Historically, developers relied on external packages like 'dotenv' to read '.env' files.
 * - Modern Node.js (v20.6+) includes built-in native support for reading '.env' files directly,
 *   either via the CLI flag '--env-file' or programmatically via 'process.loadEnvFile()'.
 */

/**
 * Example of a typical .env file content
 * - Note: Define properties using the pattern: "<name>=<value>"
 */
```
PORT=3000
DATABASE_URL=mongodb://localhost:27017/my_database
NODE_ENV=development
```

/**
 * Running via CLI flag
 * Use the flag '--env-file=' to specify the location of the env file to load.
 */
'node --env-file=.env app.js'

/**
 * Access variables directly from process.env
 * - No manual loading or external libraries required; the runtime automatically
 *   injects the variables before executing the script.
 */
const port = process.env.PORT;
const dbUrl = process.env.DATABASE_URL;

/**
 * Loading Programmatically inside code
 * - Used to load the .env file automatically on startup from within the script.
 * - This way doens't require the '--env-file' flag.
 * - Default: .env
 */
process.loadEnvFile();
process.loadEnvFile('.env.development');
