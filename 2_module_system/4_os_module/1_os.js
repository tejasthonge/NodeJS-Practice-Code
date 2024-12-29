


const os  = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('Total memory:' + totalMemory);
console.log(`Free Memory:  ${freeMemory}`);
console.log(os.platform())
console.log(os.arch())
console.log(os.homedir())

/*
Total memory:8589934592
Free Memory:  41648128
darwin
arm64
/Users/tejasthonge
*/