// for of
console.log("---------------------for of loop-----------------------");
const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}

// map

const country = new Map();
country.set("IN", "India")
country.set("USA", "United State of America")
country.set("FA", "France")

for (const key of country) {
    console.log(key);
}

for (const [key, value] of country) {
    console.log(`${key} : ${value}`)
}
console.log("---------------------for in loop-----------------------");
const myObj = {
    game1 : "NFS",
    game2 : "GTA Vice City",
    game3 : "Taken 3",
}
// we can't iterate directly the key values like in map
// for (const [key, value] of myObj) { // this will show error
//     console.log(`${key} : ${value}`)
// }

// for object we use for in loop
for (const key in myObj) {
    console.log(`${key} -> ${myObj[key]}`)
}

// we can use for in loop to iterate over arrays as well
for (const index in arr) {
    console.log(`${index} -> ${arr[index]}`)
}
// basically for in loop fetches the keys of the object and we can not use it to directly access the values like in maps
console.log("----------------------foreach loop----------------------");

// for each loop
const arr3 = ['js', 'java', 'python', 'c++'];
arr3.forEach((item) => {
    console.log(item);
});

function printItem(item) {
    console.log(item);
}
arr3.forEach(printItem);

arr3.forEach((item, index, arr) => {
    console.log(`${item}, ${index}, ${arr}`);
});

const arr4 = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Doe", age: 22 },
];
arr4.forEach((item) => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
});