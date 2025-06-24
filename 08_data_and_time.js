let myDate = new Date()
console.log(myDate) // 2025-06-24T15:33:57.573Z
console.log(`myDate.toString() : ${myDate.toString()}`) // Tue Jun 24 2025 21:04:22 GMT+0530 (India Standard Time)
console.log(`myDate.toDateString() : ${myDate.toDateString()}`) // Tue Jun 24 2025
console.log(`myDate.toLocaleString() : ${myDate.toLocaleString()}`) // 24/6/2025, 9:04:22 pm
console.log(`myDate.toLocaleTimeString() : ${myDate.toLocaleTimeString()}`) // 9:04:22 pm
console.log(`myDate.toTimeString() : ${myDate.toTimeString()}`) // 21:04:22 GMT+0530 (India Standard Time)


// month starts from 0, like a index 0 - January to 11 - December
let createdDate = new Date(2007, 6, 13) // 13/7/2007, 12:00:00 am
let createdDate1 = new Date(2007, 6, 13, 8, 45) // 13/7/2007, 8:45:00 am
let createdDate2 = new Date("2012-07-13") // 13/7/2023, 12:00:00 am
let createdDate3 = new Date("07-13-2023") // 13/7/2023, 12:00:00 am
console.log(createdDate.toLocaleString())

let timeStamp = Date.now()
console.log(timeStamp) // time in miliseconds
console.log(createdDate.getTime()) // time in miliseconds
console.log("Time in seconds : " + Math.floor(Date.now() / 1000)) // time in seconds

let today = new Date()
console.log(today.getMonth() + 1) // because month starts form 0 index
console.log(today.getDay())

today.toLocaleString('default', {
    weekday: "long"
}) // through this we can customize our data with different parameters