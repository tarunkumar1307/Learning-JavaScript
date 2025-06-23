// string interpolation
let name = "Ramphal Gurjar"
let repoCount = 14
console.log(`My name is ${name}, and my repo count is ${repoCount}`)

// string function
let college = new String('Baba Mohan College, Bhiwadi')
console.log(college)
console.log("Type of College is : " + typeof college) // object, it is in key value pair

console.table([college.length, college.toUpperCase(), college.charAt(5), college.substring(0, 6)])
console.log(college.split(' '))

const url = "https://buntybabli.com/bunty%30bubli"
console.log(url.replace('%20', "-"))
console.log(url.includes('bhuri')) // it evaluate to true or false, that whether it is present or not

