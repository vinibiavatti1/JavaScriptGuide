/**
 * NPM (Node Package Manager).
 *
 * NPM is the default package manager for Node.js. It consists of two main parts: an online
 * repository for publishing open-source Node.js projects (the registry) and a command-line tool for
 * interacting with that repository, installing packages, managing versions, and handling project
 * dependencies.
 *
 * Created by Isaac Z. Schlueter in 2009. It was inspired by other package managers like Perl's
 * CPAN, PHP's PEAR, and Ruby's RubyGems. NPM grew rapidly alongside Node.js and eventually became
 * the world's largest software registry.
 *
 * Website: https://www.npmjs.com/
 */

/**
 * Initialize a new project (creates package.json).
 * - The '-y' flag skips the interactive questionnaire and uses default values.
 */
'npm init'
'npm init -y'

/**
 * Install all project dependencies listed in package.json.
 */
'npm install'

/**
 * Install a package as a production dependency.
 */
'npm install <package-name>'

/**
 * Install a package as a development dependency.
 */
'npm install <package-name> --save-dev'
'npm install <package-name> -D'

/**
 * Install a package globally on the machine.
 */
'npm install <package-name> --global'
'npm install <package-name> -g'

/**
 * Remove or uninstall a package from the project.
 */
'npm uninstall <package-name>'

/**
 * Update project packages to their latest allowed versions.
 */
'npm update'

/**
 * List locally installed packages.
 */
'npm list'

/**
 * List top-level globally installed packages.
 */
'npm list --global --depth=0'

/**
 * Run a custom script defined in package.json.
 */
'npm run <script-name>'

/**
 * Run the predefined start script shortcut.
 */
'npm start'

/**
 * Run the predefined test script shortcut.
 */
'npm test'

/**
 * Clear the local npm cache to resolve troubleshooting issues.
 */
'npm cache clean --force'
