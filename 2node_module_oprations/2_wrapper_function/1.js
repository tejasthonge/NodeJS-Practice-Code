
console.log("Module:");
console.log( module);
console.log("exports:");
console.log(exports );
console.log("require:");
console.log(exports);
console.log("module.exports :");
console.log(module.exports);
console.log("exports === module.exports:" );
console.log(exports === module.exports);
console.log("__filename:");
console.log(__filename);
console.log("__dirname:");
console.log(__dirname);

/*
OP:

Module:
{
  id: '.',
  path: '/Users/tejasthonge/coding/github/NodeJS-Practice-Code/2node_module_oprations/2_wrapper_function',
  exports: {},
  filename: '/Users/tejasthonge/coding/github/NodeJS-Practice-Code/2node_module_oprations/2_wrapper_function/1.js',
  loaded: false,
  children: [],
  paths: [
    '/Users/tejasthonge/coding/github/NodeJS-Practice-Code/2node_module_oprations/2_wrapper_function/node_modules',
    '/Users/tejasthonge/coding/github/NodeJS-Practice-Code/2node_module_oprations/node_modules',
    '/Users/tejasthonge/coding/github/NodeJS-Practice-Code/node_modules',
    '/Users/tejasthonge/coding/github/node_modules',
    '/Users/tejasthonge/coding/node_modules',
    '/Users/tejasthonge/node_modules',
    '/Users/node_modules',
    '/node_modules'
  ],
  [Symbol(kIsMainSymbol)]: true,
  [Symbol(kIsCachedByESMLoader)]: false,
  [Symbol(kIsExecuting)]: true
}
exports:
{}
require:
{}
module.exports :
{}
exports === module.exports:
true
__filename:
/Users/tejasthonge/coding/github/NodeJS-Practice-Code/2node_module_oprations/2_wrapper_function/1.js
__dirname:
/Users/tejasthonge/coding/github/NodeJS-Practice-Code/2node_module_oprations/2_wrapper_function

*/