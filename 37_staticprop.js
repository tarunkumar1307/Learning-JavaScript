class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is: ${this.username}`);
    }

    static createID(){
        return "123"
    }
}

/*
What is a static method?
The static keyword makes a method belong to the class itself, not to individual instances. Think of it as a method that exists at the class level rather than on objects created from that class.
*/

const user1 = new User("user_one");
// console.log(user1.createID()); // ❌ Error - doesn't exist on instances
console.log(User.createID()); // ✅ Works - called directly on the class

class Teacher extends User{
    constructor(username, emailID){
        super(username);
        this.emailID = emailID;
    }
}

const iPhone = new Teacher("iPhone 17 Pro", "iphone17pro@example.com");
iPhone.logMe();
// console.log(iPhone.createID()); // ❌ Error - doesn't exist on instances
