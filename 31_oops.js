/*
Object Oriented Programming in JavaScript

1. Object Literals
2. Constructor Functions
3. Prototypes
4. Classes
5. Inheritance - It is a mechanism where one class acquires the properties (methods and fields) of another class.
6. Encapsulation - It is the bundling of data with the methods that operate on that data.
7. Polymorphism - It is the ability of a function, object or method to behave in different ways based on the context.
8. Abstraction - It is the concept of hiding the complex implementation details and showing only the essential features of the object.
*/

const user = {
    username : "Golu",
    loginCount : 8,
    signedIn : true,
    getUserDetails : function(){
        console.log(`Username : ${this.username}`);
        console.log(this);
    },
}

console.log(user.username);
console.log(user.getUserDetails());
console.log(this);



function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this
}

// new is a constructor function which make a instance of the object
const userOne = new User("Kidmada", 9, true)
const userTwo = new User("Tatya Bichoo", 11, true)
console.log(userOne)
console.log(userTwo);

