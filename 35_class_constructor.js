class User{
    constructor(username, emailID, password){
        this.username = username;
        this.emailID = emailID;
        this.password = password;
    }

    encryptPassword(){
        return this.password.split('').reverse().join('');
    }

    changeUsername(){
        return this.username.toUpperCase();
    }
}

const user1 = new User("baba tillu", "baba@example.com", "mypassword");
console.log(user1.encryptPassword());
console.log(user1.changeUsername());

// behind the scenes, the above code is similar to this:
function UserConstructor(username, emailID, password){
    this.username = username;
    this.emailID = emailID;
    this.password = password;   
}   

UserConstructor.prototype.encryptPassword = function(){
    return this.password.split('').reverse().join('');
};

UserConstructor.prototype.changeUsername = function(){
    return this.username.toUpperCase();
};   

const user2 = new UserConstructor("chota tillu", "chota@example.com", "anotherpassword");
console.log(user2.encryptPassword());
console.log(user2.changeUsername());