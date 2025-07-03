// singleton object
const tinderUser = new Object()
tinderUser.id = "123xyz"
tinderUser.name = "Jofery"
tinderUser.isLoggedIn = false

console.log(tinderUser);
console.log("Keys of TinderUsers: ", Object.keys(tinderUser))
console.log("Values of TinderUsers: ", Object.values(tinderUser))
console.log("Entries of TinderUsers: ", Object.entries(tinderUser))
console.log(`Checking for the property in the object: ${tinderUser.hasOwnProperty('isLoggedIn')} \n`);

const regularUser = {
    email: "someone@gmail.com",
    fullname: {
        userfullname: {
            firstname: "tatya",
            lastname: "bichoo",
        }
    }
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}
// const resultObj = Object.assign({}, obj1, obj2, obj3)
const resultObj = {...obj1, ...obj2, ...obj3} // spread operator 
console.log(resultObj)

// array of object
const arr = [
    {
        id: 1,
        email: "id1@gmail.com"
    },
    {
        id: 2,
        email: "id2@gmail.com"
    }
]

console.log(arr[0].id);

// Object de-structure
const course = {
    coursename : "JS in hindi",
    price : 999,
    courseInstructor : "Chai aur Code",
}

const {coursename: subject} = course
console.log("\nOBJECT de-Structure");
// console.log(coursename);/
console.log(subject);

