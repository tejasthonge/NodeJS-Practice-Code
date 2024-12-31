
// npm :
/*
    npm (Node Package Manager) is the default package manager for Node.js. 
    It allows developers to install, share, and manage libraries and packages 
    for JavaScript development. 
    It is also used to manage dependencies, 
    scripts, and configurations for projects    

*/

/*
Package Registry:

npm hosts a public registry where developers can publish and share their packages. There are millions of open-source packages available for installation via npm.
You can also use a private registry for managing private packages.
Package.json:

This file is essential in every Node.js project. It contains metadata about the project, including dependencies, scripts, version information, and more.
It can be manually created or generated using npm init.
Key sections of package.json:

dependencies: Libraries your project needs to run.
devDependencies: Libraries required for development (e.g., testing libraries, build tools).
scripts: Custom commands you can run (e.g., build, test, start).
Installing Packages:

npm install <package>: Installs a package and adds it to node_modules directory.
npm install <package> --save: Adds the package to dependencies in package.json.
npm install <package> --save-dev: Adds the package to devDependencies.
npm install: Installs all dependencies listed in package.json.
Global vs Local Installation:

Global Installation (-g): Installs the package globally (usable in any project). Useful for command-line tools like nodemon.
Local Installation: Installs the package in the current project, typically inside the node_modules folder.
Versioning:

npm allows you to specify versions of packages you want to install. You can specify versions using semver (Semantic Versioning):
^: Install the latest minor version (^1.2.3 will install any version >=1.2.3 <2.0.0).
~: Install the latest patch version (~1.2.3 will install any version >=1.2.3 <1.3.0).
Exact Version: 1.2.3 installs exactly version 1.2.3.
Updating Packages:

npm update: Updates all dependencies to their latest compatible versions.
npm outdated: Shows which installed packages are outdated.
npm install <package>@latest: Installs the latest version of a package.
Uninstalling Packages:

npm uninstall <package>: Removes a package from node_modules and updates package.json.
npm uninstall <package> --save: Removes the package from dependencies in package.json.
*/

'Install dependencies.'
// npm install

'Initialize a new project and create a package.json file.'
// npm init

' Run a script defined in package.json.'
// npm run <script>

'Update dependencies.'
// npm update

'Remove a package.'
// npm uninstall

'Check for vulnerabilities.'
// npm audit
