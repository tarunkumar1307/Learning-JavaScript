/*
Stack (Primitive Datatype) by value
String, Number, null, undefined, boolean, Symbol, BigInt

Heap (Non Primitive Datatype) by reference
Array, Object
*/

let name = "Tatya Bichoo"
let anothername = name
anothername = "Kirmada"

console.log("Name : " + name); // Tatya Bichoo
console.log("Another Name : " + anothername); // Kirmada

let firstuser = {
    id : 123456,
    email : "abc@gmail.com"
}

let seconduser = firstuser

seconduser.email = "def@gmail.com"
console.log("First User Email : " + firstuser.email); // def@gmail.com
console.log("Second User Email : " + seconduser.email) // def@gmail.com