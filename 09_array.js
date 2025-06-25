// PART 1
const arr = [1, 2, 3, 4, 5]
const arr1 = new Array("Bunty", "Babli", "Petha", "Battak")
console.log(arr)

console.log(arr[3]) // indexing

arr.push(9) // add element at last
// arr.push(12)
arr.pop() // remove element from last
console.log(arr)

arr.unshift(8) // shift all the element and add the new element in the starting
console.log(arr)
arr.shift() // to remove the first element and shift all
console.log(arr)

console.log(arr.includes(5)) // return true or false, based on exsistence
console.log(arr.indexOf(4)) // return the index of the element

// slice and splice
const n1 = arr.slice(1, 3)
console.log("Slice Function : ")
console.log(n1) // 2, 3
console.log(arr) // 1, 2, 3, 4, 5

const n2 = arr.splice(1, 3) 
console.log("Splice Function : ")
console.log(n2) // 2, 3, 4
console.log(arr) // 1, 5

/*
Slice return the trimmed array from starting index to one less then end index that is given, BUT DO NOT affect the original array
Splice return the trimmed array from starting index to end index that is given, and also TRIM from the ORIGINAL ARRAY
*/

console.log("\n------------------------------------------------------\n")

// PART 2
const prog = ["C++", "Java", "Python", "C#"]
const web = ["React.js", "Node.js"]
// prog.push(web)
// console.log("Push : ", prog) // [ 'C++', 'Java', 'Python', 'C#', [ 'React.js', 'Node.js' ] ]

const prog_web = prog.concat(web) // concat does not make change in arr, it return the new array concatinated
console.log("Concate : ", prog_web) // [ 'C++', 'Java', 'Python', 'C#', 'React.js', 'Node.js' ]

// best way to concatinate the array with spreading operator
const prog_web1 = [...prog, ...web]
console.log("Spreading Operator : ",prog_web1)

// concat only add two array but with spreading operator we can add any numbers of array

const numbers = [1, 2, 3, [4, 5], 6, [7, [8, 9]]]
const a = numbers.flat(Infinity) // in flat we can give number for the depth to which it should be open
console.log("Flat Function : ", a);

console.log(Array.isArray("Kirmada"))
console.log(Array.from("Kirmada"))
console.log(Array.from({name : "Kachra"})) // empty array will be printed, in this we have to specify that whether we want to make the array with key or with values

let x = 10, y = 20, z = 30
console.log(Array.of(x, y, z))