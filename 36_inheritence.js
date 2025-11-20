class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is: ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, emailID, subject){
        super(username);  // calling parent class constructor
        this.emailID = emailID;
        this.subject = subject;
    }

    getDetails(){
        return `Teacher Name: ${this.username}, Email: ${this.emailID}, Subject: ${this.subject}`;
    }
}

const teacher1 = new Teacher("Dr. Robin", "robin@example.com", "Mathematics");
teacher1.logMe();
console.log(teacher1.getDetails());