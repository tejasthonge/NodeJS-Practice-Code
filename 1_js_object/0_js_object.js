

// JavaScript Objects: Practice Code and Notes

// 1. Creating an Object
const myObject = { a: 13, b: 43 }; // Basic object with two key-value pairs
console.log(myObject); // Output: { a: 13, b: 43 }

// 2. Accessing Object Properties
// Using Dot Notation
console.log(myObject.a); // Output: 13
console.log(myObject.b); // Output: 43

// Using Bracket Notation
console.log(myObject['a']); // Output: 13
console.log(myObject['b']); // Output: 43

// 3. Modifying Object Properties
myObject.a = 25; // Change the value of 'a'
console.log(myObject.a); // Output: 25

// 4. Adding New Properties
myObject.c = 67; // Add a new property 'c'
console.log(myObject); // Output: { a: 25, b: 43, c: 67 }

// 5. Deleting Properties
delete myObject.b; // Remove the property 'b'
console.log(myObject); // Output: { a: 25, c: 67 }

// 6. Checking for a Property
console.log('a' in myObject); // Output: true
console.log('b' in myObject); // Output: false

// 7. Iterating Over an Object
// Using for...in Loop
for (const key in myObject) {
  console.log(`${key}: ${myObject[key]}`); // Output: Key-value pairs
}

// 8. Object.keys, Object.values, and Object.entries
console.log(Object.keys(myObject)); // Output: ['a', 'c']
console.log(Object.values(myObject)); // Output: [25, 67]
console.log(Object.entries(myObject)); // Output: [['a', 25], ['c', 67]]

// 9. Copying Objects
// Using Object.assign()
const copiedObject = Object.assign({}, myObject);
console.log(copiedObject); // Output: { a: 25, c: 67 }

// Using Spread Operator
const spreadObject = { ...myObject };
console.log(spreadObject); // Output: { a: 25, c: 67 }

// 10. Merging Objects
const additionalProperties = { d: 100, e: 200 };
const mergedObject = { ...myObject, ...additionalProperties };
console.log(mergedObject); // Output: { a: 25, c: 67, d: 100, e: 200 }

// 11. Freezing and Sealing Objects
// Object.freeze(): Prevents any modifications
const frozenObject = Object.freeze({ a: 1 });
// frozenObject.a = 2; // Error in strict mode
console.log(frozenObject); // Output: { a: 1 }

// Object.seal(): Allows modifying existing properties but prevents adding/removing
const sealedObject = Object.seal({ a: 1 });
sealedObject.a = 2; // Allowed
// sealedObject.b = 3; // Error in strict mode
console.log(sealedObject); // Output: { a: 2 }

// 12. Destructuring Objects
const { a, c } = myObject;
console.log(a, c); // Output: 25 67

// 13. Using Methods in Objects
const person = {
  firstName: 'John',
  lastName: 'Doe',
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};
console.log(person.fullName()); // Output: John Doe

// 14. Nested Objects
const student = {
  name: 'Alice',
  grades: {
    math: 90,
    science: 85
  }
};
console.log(student.grades.math); // Output: 90

// 15. JSON and Objects
// Convert Object to JSON
const jsonObject = JSON.stringify(myObject);
console.log(jsonObject); // Output: '{"a":25,"c":67}'

// Convert JSON to Object
const parsedObject = JSON.parse(jsonObject);
console.log(parsedObject); // Output: { a: 25, c: 67 }

// Notes:
// 1. Objects are mutable and store key-value pairs.
// 2. Keys in objects are strings or symbols.
// 3. Objects are a fundamental part of JavaScript and can represent structured data or complex entities.
// 4. Use `Object.freeze()` or `Object.seal()` to control modifications if necessary.
// 5. Utilize destructuring and modern methods like spread/rest operators for clean and concise code.
