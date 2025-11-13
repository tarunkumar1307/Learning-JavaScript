let name1 = "John       ";
let name2 = "   Alice   ";


console.log(name1.length)
console.log(name1.trim().length)
// to know the length after removing spaces we need to use trim() method for name1 and name2 again and again, to get the true length we can use prototypes without using trim().length this long function

//example
let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman: "sling",

    getSpidermanPower: function(){
        console.log(`Spiderman Power is ${this.spiderman}`);
    }
}

//till now there is no properties in object heroPower name ironman so we can add a prototype to it by adding to higher level that Object.prototype

Object.prototype.ironman = function(){
    console.log(`Ironman Power is suit`);
}

console.log(heroPower.ironman()); // now we can access ironman property in heroPower object
console.log(myHeros.ironman()); // we can access ironman property in myHeros array also

// similarly we can add a prototype to Array also
Array.prototype.captainamerica = function(){
    console.log(`Captainamerica Power is shield`);
}

console.log(myHeros.captainamerica()); // now we can access captainamerica property in myHeros array
// console.log(heroPower.captainamerica()); // but we cant access captainamerica property in heroPower object because its not an array

//inheritance using prototype
let user = {
    username: "anonymous",
    email: "anonymous@example.com"
}

let teacher = {
    makeVideos: true
}

let student = {
    makeNotes: true,
    __proto__: teacher, // now student can access makeVideos property from teacher object
}

teacher.__proto__ = user // now teacher can access username and email properties from user object
//modern way to set prototype
Object.setPrototypeOf(teacher, user);

console.log(student.username);

let myname = "    Baba Tillu     "

String.prototype.truelength = function(){
    console.log(this);
    return this.trim().length;
}
console.log(`True Length : ${myname.truelength()}`);
console.log(`True Length : ${"Lovely Professional University  ".truelength()}`);