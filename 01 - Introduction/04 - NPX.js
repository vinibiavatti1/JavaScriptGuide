/**
 * NPX (Node Package Execute)
 *
 * NPX is a package runner tool that comes bundled with npm (version 5.2.0 and later).
 * Its primary purpose is to make it easy to run CLI tools and other executable packages
 * hosted on the npm registry without the need to manually install them globally
 * or locally first.
 *
 * Why NPX is useful:
 * - Executes packages directly without permanent global installation.
 * - Automatically downloads the required package temporarily if it is not present.
 * - Runs specific versions of packages or tools seamlessly.
 * - Executes local project binaries without having to look up relative paths in node_modules.
 */

/**
 * Execute a package command without installing it globally.
 * - Downloads the package temporarily, runs it, and cleans it up.
 */
'npx <package-name>'

/**
 * Run a specific version of a package.
 */
'npx <package-name>@<version>'

/**
 * Run a command from a local node_modules binary.
 * - Avoids writing long relative paths like ./node_modules/.bin/command.
 */
'npx <local-command>'

/**
 * Execute a remote script directly from a GitHub repository or URL.
 */
'npx github:<username>/<repository>'
