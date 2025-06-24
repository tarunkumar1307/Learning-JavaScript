// ----X----X----X--NUMBER--X----X----x----X----
const number = 111
console.log(number)

let num = new Number(100)
console.log(num)
console.log(num.toString().length)
console.log(num.toFixed(2)); // to tell how many digit after the decimal

const anothernum = 1234.5678
console.log(anothernum.toPrecision(3)); // to tell that how many digits should be in the number

const zeros = 100000000;
console.log(`American Standard : ${zeros.toLocaleString('en-US')}`) // US based
console.log(`Indian Standard : ${zeros.toLocaleString()}`) // indian standard

// ----X----X----X--MATHS--X----X----x----X----
console.table([Math.abs(-4), Math.round(4.2), Math.round(4.8), Math.ceil(4.1), Math.floor(5.9)])
console.log(Math.max(4, 8, 3, 11))

// important
console.log(Math.random())
console.log(`Random : ${Math.floor((Math.random()*10)+1)}`)
/*
-> we are multiplying because we are getting any random value from 0-1
-> adding one because we want random number from 1, and to avoid 0 we are adding 1
-> using floor function to get a number without decimal
*/

// get a random number between 10-20
let min = 10
let max = 20
console.log(`Random number between 10-20 : ${Math.floor((Math.random() * (max-min+1)) + 10)}`);
// take random function nultiple it with (max-min+1) and add min to the whole to get the number from that minimum number