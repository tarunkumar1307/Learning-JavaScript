// as we know Math.PI is a constant property of the Math object and we cannot change its value
Math.PI = 3; // This will not change the value of Math.PI

// so here here we see why we can't

const PIdescriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log(PIdescriptor);
// here we seen writable property is set to be false

const chai = {
    name : 'Elaichi Chai',
    price : 50,
    isAvailable : true,

    orderChai : function(){
        console.log(this.name);
    },
}

console.log(Object.getOwnPropertyDescriptor(chai, "name")); // here we see the three properties(writable, enumerable, configurable) are true
// now we are going to change its value 
Object.defineProperty(chai, "name", {
    writable : false,
    enumerable : false,
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// we set the enumerable to false now we cannot iterate through the Object
for (const [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){ // if condition to skip the function while iterating
        console.log(`${key} : ${value}`);
    }
}

/*
Property Descriptors:
Writable: If writable is false, the value of the property cannot be changed.
Enumerable: If enumerable is false, the property will not show up during enumeration of the properties on the object.
Configurable: If configurable is false, the property cannot be deleted nor can its attributes (other than writable) be changed.
*/
