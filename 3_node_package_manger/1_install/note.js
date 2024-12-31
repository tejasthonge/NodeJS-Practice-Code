


// by using the npm we are installing the package
//npm install <packagename>
//or
//falge it will automaticly update the leatist version
//npm i <packagename> --save 
//here we 
//npm install underscore

var _ = require('underscore');

//core module 
//file or folder
//node_module

var isContaine1 = _.contains([123,12,1] ,2);
console.log(isContaine1);
var isContaine2 = _.contains([123,12,1] ,12);
console.log(isContaine2);

console.log(_) //it print all inside the 'underscore'
 
//by this above way we can use thired party node modules



