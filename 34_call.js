function setUsername(username){
    this.username = username;
    console.log("Called");
}

/*
Call
We use call to inherit properties and methods from one function to another function and set the 'this' context explicitly, so that we can specify which object 'this' should refer to.
*/
function createUser(username, emailID, age){
    setUsername.call(this, username)
    this.emailID = emailID;
    this.age = age;
}

const user1 = new createUser("john_doe", "john@example.com", 25);
console.log(user1);