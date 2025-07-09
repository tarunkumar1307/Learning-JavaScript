// 'this' refer to current context in the scope
const user = {
    username : "Bunty",
    price : 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website.`)
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Babli"
// user.welcomeMessage()

// console.log(this); // it will print empty context

function hello(){
    let name = "Monu"
    console.log(this); 
    console.log(this.name); // it will print undefined
    
}
// hello()

const hello1 = function(){
    let name = "Monu"
    console.log(this); 
    console.log(this.name); // it will print undefined
}
// hello1() // it will print same as normal function

const hello2 = () => {
    let name = "Monu"
    console.log(this) // it will print empty parenthesis
}
hello2()

/*
What it the difference between arrow function and normal function?
*/

const addTwo = (num1, num2) => {
    return num1+num2;
}

// emplicit return
const addTwo1 = (num1, num2) => (num1+num2);

// how to return object
const obj = () => ({username: "Kida"});

console.log(addTwo(8,2));
console.log(addTwo1(4,5));
console.log(obj());
