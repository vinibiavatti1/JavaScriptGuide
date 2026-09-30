/**
 * NVM (Node Version Manager).
 *
 * NVM is a command-line tool used to manage multiple active Node.js versions on a single machine.
 * It allows developers to easily switch between different releases (such as LTS and latest) per
 * project or globally, bypassing permission issues and system-wide installation constraints.
 *
 * Unlike npm, which comes bundled with Node.js installers, NVM is a separate utility that must be
 * installed independently to manage the Node runtime environments themselves.
 *
 * Website: https://www.nvmnode.com/
 */

/**
 * List all locally installed Node.js versions.
 */
'nvm list'

/**
 * List all available Node.js versions that can be downloaded and installed.
 */
'nvm list available'

/**
 * Install a specific Node.js version.
 * - Examples: `nvm install latest`, `nvm install 22.12.0`, `nvm install lts`
 */
'nvm install <version>'

/**
 * Switch to a specific installed Node.js version for the current terminal session.
 */
'nvm use <version>'

/**
 * Set a specific version as the default for new terminal windows.
 */
'nvm alias default <version>'

/**
 * Uninstall a specific Node.js version from the machine.
 */
'nvm uninstall <version>'

/**
 * Check the currently active Node.js runtime version.
 */
'node -v'
