

 "dependencies": {
    "underscore": "^1.13.7" //mejor.minor.patch 
  }


 // # Patch:
// When the package has a bug in version 1.13.7, the developer fixes the bug 
// and releases a patch version. This results in version 1.13.8.

// # Minor:
// If the developer adds some features without breaking the existing API, 
// they release a minor version, such as 1.14.0.
// - The last digit (0) indicates that no bugs have been found yet.
// - If they find a bug, they will fix it and release a new patch version,
//   such as 1.14.1.

// # Major:
// If the developer adds new features that break the existing API or dependencies, 
// they release a new major version, such as 2.0.0.

// ~ <-- This is called the tilde character.
// Example:
// "underscore": "~1.13.7" // ---> It means we can use 1.x versions that are compatible 
//                           // with 1.13.7 or later (but not the next major version).
//
// ^ <-- This is called the caret character.
// Example:
// "underscore": "^1.13.7" // ---> It means we can use versions compatible with 1.x 
//                           // (but less than 2.0.0).


//to check the version or theire depth dependcy 
//npm list

//or without depth 
//npm list --depth=0
  