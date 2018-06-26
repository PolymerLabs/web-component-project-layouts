# Web Component Package Layouts

This repository includes different ways to structure projects on the filesystem to demonstrate the various pros and cons of each approach.  There are applications, which are not intended to be used as packages imported or included by other packages.

* `./app-with-tools-folder`

  Polymer 3.0 application where all of the CLI packages are sequestered in a tools package subfolder and the "web" packages are installed in the package root's `node_modules`.

* `./app-with-web-folder`

  Polymer 3.0 application where the CLI packages are installed in the root `node_modules` folder and the "web" packages are dependencies of the package defined in the `web` subfolder.

There are also elements, which are expected to be used as dependencies of other packages and so must account for this.

* `./element-with-tools-folder`
  
  Polymer 3.0 element where all of the CLI packages are sequestered in a tools package subfolder and the "web" packages are installed in the package root's `node_modules`.

* `./element-with-web-folder`

  Polymer 3.0 element where the CLI packages are installed in the root `node_modules` folder and the "web" packages are dependencies of the package defined in the `web` subfolder.

Alternate names considered for the roles of these folders:

* `tools`, `cli`, `support`, `bin`
* `web`, `pub`, `pkg`, `lib`
