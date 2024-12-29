

const path = require('path'); 

//prarse function
var pathObject = path.parse(__filename); //it return the json 
console.log(pathObject);
/*
{
  root: '/',
  dir: '/Users/tejasthonge/coding/github/NodeJS-Practice-Code/2node_module_oprations/3_path_module',
  base: '0_path.js',
  ext: '.js',
  name: '0_path'
}
*/

//this is verry usfull to parse get the wat we want from the path by parsing

console.log(pathObject["root"]);
console.log(pathObject.root);  

//above both are right way to access the json value in from thire keys 