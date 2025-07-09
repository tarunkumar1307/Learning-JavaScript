function say(){
    console.log("I");
    console.log("n");
    console.log("d");
    console.log("i");
    console.log("a");
}

say()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)
console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Chota Bheem"))
console.log(loginUserMessage("Ninja Hathodi"))



function cartValue(...product){
    return product
}
function cartValue1(n1, n2, ...product){
    return product
}

console.log(cartValue(400, 289, 275, 423))
console.log(cartValue1(400, 289, 275, 423))



const product = {
    brand : "H&M",
    item : "Jogger",
    price : "1999",
}

function productDetail(anyProduct){
    console.log(`${anyProduct.brand} selling ${anyProduct.item} at the price ${anyProduct.price}.`);
}

productDetail(product)
productDetail({
    brand : "NetPlay",
    item : "shirt",
    price : "599",
}) // directly passing the object



const myNewArray = [1, 2, 3, 4]
function getArray(arr){
    return arr[2]
}
console.log(getArray(myNewArray))
console.log(getArray([100, 200, 800, 900, 500])) // directly passing the array



console.log(addOne(3)); // it will be executed successfully
function addOne(value){
    return value+1
}
console.log(addOne(3)); // it will be executed successfully

console.log(addTwo(3)); // it will not be executed, beacuse here it is like a expression or variable
const addTwo = function(value){
    return value+2
}
console.log(addTwo(3)); // it will be executed successfully