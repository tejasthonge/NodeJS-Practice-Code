

const logger = require('./logger') //this is know as loading the all the modulemodule 
logger.log("Ram Ram");
console.log(logger);

/*
Why Use require Over module.require?
Simplicity and Readability: require is shorter and more intuitive for importing modules. It's the standard way and improves code readability.

Global Availability: You don’t need to reference the module object explicitly since require is globally available.

Best Practices: The Node.js community widely uses require because it's a cleaner and standard way to import modules.
*/