// JavaScript Functions: Notes and Practice Code

// 1. Function Declaration
function greet() {
    console.log("Hello, World!");
}
greet(); // Output: Hello, World!

// 2. Function Expression
const greetExpression = function () {
    console.log("Hello from Function Expression!");
};
greetExpression(); // Output: Hello from Function Expression!

// 3. Arrow Function
const greetArrow = () => {
    console.log("Hello from Arrow Function!");
};
greetArrow(); // Output: Hello from Arrow Function!

// 4. Functions with Parameters
function greetWithName(name) {
    console.log(`Hello, ${name}!`);
}
greetWithName("Alice"); // Output: Hello, Alice!

// Default Parameters
function greetWithDefault(name = "Guest") {
    console.log(`Hello, ${name}!`);
}
greetWithDefault(); // Output: Hello, Guest!

greetWithDefault("Bob"); // Output: Hello, Bob!

// 5. Functions with Return Values
function add(a, b) {
    return a + b;
}
const sum = add(3, 5);
console.log(sum); // Output: 8

// 6. Anonymous Function (e.g., Callback)
setTimeout(function () {
    console.log("This runs after 2 seconds");
}, 2000);

// 7. Arrow Function with Implicit Return
const square = (x) => x * x;
console.log(square(4)); // Output: 16

// 8. Function Scope
function testScope() {
    let x = 10; // Local variable
    console.log(x); // Output: 10
}
testScope();
// console.log(x); // Error: x is not defined

// 9. Hoisting (Function Declarations Only)
sayHello(); // Output: Hello!
function sayHello() {
    console.log("Hello!");
}

// 10. IIFE (Immediately Invoked Function Expression)
(function () {
    console.log("IIFE executed!");
})(); // Output: IIFE executed!

// 11. Higher-Order Function
function applyOperation(a, b, operation) {
    return operation(a, b);
}
const result = applyOperation(5, 3, (x, y) => x * y);
console.log(result); // Output: 15

// 12. Closures
function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}
const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2

// Notes:
// 1. Functions can be reused, passed as arguments, or returned by other functions.
// 2. Default parameters help avoid undefined values.
// 3. Arrow functions are concise but differ from regular functions in how they handle 'this'.
// 4. Closures allow functions to "remember" their outer scope, even after the scope exits.
// 5. Use IIFEs for code that needs to execute immediately but avoid polluting the global scope.

// Practice these patterns to master JavaScript functions!
