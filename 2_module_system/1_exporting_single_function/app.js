

const logFun = require("./logger");



logFun("This is an message RamRam")

//means we either export whole file or the module only 
console.log(logFun)


/*
OP:

This is an message RamRam
[Function: log]

*/

//but we dont know by above require line what actually we get either module object or the functon
