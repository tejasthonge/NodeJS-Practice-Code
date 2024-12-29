

var jsObj;

console.log(jsObj)
/*
undefined
*/

jsObj = {
    name: "Tejas",
    role: "Developer",
}
console.log(jsObj)
/*
{ name: 'Tejas', role: 'Developer' }

*/

//accessing by the  properties
console.log(jsObj.name)
/*
Tejas

*/

//accessing by key
console.log(jsObj["role"])
/*
Developer

*/


//changin the value of rule
jsObj.role = "Full Stack Devloper"
console.log(jsObj)
/*
{ name: 'Tejas', role: 'Full Stack Devloper' }

*/

//adding new property
jsObj.age = 23
console.log(jsObj)
/*
{ name: 'Tejas', role: 'Full Stack Devloper', age: 23 }

*/

//deleting or removing the property
delete jsObj.age
console.log(jsObj)
/*
{ name: 'Tejas', role: 'Full Stack Devloper' }

*/

//checking the property is present or not

console.log("name" in jsObj)
console.log("age" in jsObj)
/*
true
false

*/

//iterating on jsobject

for(const key in jsObj){
    console.log(`${key} : ${jsObj[key]}`)
}
/*
name : Tejas
role : Full Stack Devloper

*/