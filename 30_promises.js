/*
What is Promise?
A Promise is an object representing the eventual completion or failure of an asynchronous operation. It allows you to write asynchronous code in a more synchronous fashion, making it easier to read and maintain. 

A Promise can be in one of three states: 
1. pending - initial state, neither fulfilled nor rejected
2. fulfilled - meaning that the operation was completed successfully
3. rejected - meaning that the operation failed

When a Promise is fulfilled, it means the operation was successful, and when it is rejected, it means there was an error. You can attach callbacks to handle the success or failure of the Promise using the `.then()` and `.catch()` methods.
*/

const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(() => {
       console.log("Async Task 1");
       resolve();
    }, 1000);
});

promiseOne.then(function(){
    console.log("Task 1 Consumed");
});


new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Async Task 2");
        resolve();
    }, 2000);
}).then(() => {
    console.log("Task 2 Consumed");
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({username : "Baba Tillu", email: "tilli69@gmail.com"});
    }, 3000);
})

promiseThree.then((user) => {
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({username : "Baba Tillu", email: "tilli69@gmail.com"});
        }else{
            reject("Error: Something went wrong in promise four");
        }
    }, 4000)
})

promiseFour.then((user) => {
    // console.log(user)
    return user.username
}).then((username)=>{
    console.log(username)
}).catch((error)=>{
    console.log(error)
}).finally(()=> console.log("Promise Four Rejected due to some error"))


const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username:"practice", password:"789789"});
        }else{
            reject("Promise Five Rejected due to some error");
        }
    }, 5000);
})

async function consumePromiseFive(){
    // const response = await promiseFive
    // console.log(response)

    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error);
        
    }
}
consumePromiseFive()


// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json() // we are using await here because response.json() take time to convert the response into json format
//         console.log(data)
//     } catch (error) {
//         console.log("E: ", error)
//     }
// }
// getAllUsers();

fetch('https://api.github.com/users/tarunkumar1307')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error);
})