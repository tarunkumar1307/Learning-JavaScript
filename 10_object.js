// object literals
const mySym = Symbol("key1")

const user = {
    name : "Jon",
    "full name": "Jon Snow", // we can not call it using dot operator
    [mySym] : "mykey1", // we use [] for symbol
    age: 29,
    location: "Winterfell",
    email: "jonsnow@gmail.com",
    isLoggedIn: false,
}

console.log(user.email);
console.log(user["email"]);
console.log(user["full name"]);
console.log(user[mySym]); // here we have to call like this only for Symbol, we can't use dot operator

user.email = 'jonsnow321@gmail.com'
// Object.freeze(user)
// user.email = "jonsnow@redifmail.com"
console.log(user)


user.greeting = function(){
    console.log("Hello JS User")
}
user.greetingTwo = function(){
    console.log(`Hello JS User, ${user.name}`);
    
}
console.log(user.greeting());
console.log(user.greetingTwo());