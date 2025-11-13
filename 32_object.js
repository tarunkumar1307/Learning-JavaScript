/*
Here's what happens behind the scencese when the new keyword is used:
A new object is created: The new keyword initializes a new empty object.
A prototype is assigned: The new object’s internal [[Prototype]] property is set to the constructor function’s prototype object.
The constructor function is called: The constructor function is executed with the new object bound to this.
The object is returned: If the constructor function does not explicitly return an object, the new object created in step 1 is returned.
*/

function createProduct(product, price){
    this.product = product
    this.price = price
}

createProduct.prototype.increase = function(){
    this.price++
    
}

createProduct.prototype.printMe = function(){
    console.log(`Price of the ${this.product} is ${this.price}`);
}

const coffee = new createProduct("Coffee", 150)
const chai = new createProduct("Chai", 50)

chai.printMe()