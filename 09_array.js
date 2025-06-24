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