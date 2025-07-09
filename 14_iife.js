/*
Why IIFE (Immediately Invoked Function Expression)?
Global scope ke variables ya declarations ke polution ko hatane ke liye kiya.

(function)(parameter);
semi-colon is necessary to put so that we can write two IIFE in a file, because IIFE function don't know where to stop
*/

//named IIFE
(function greeting(){
    console.log("Namastey");
})(); // if remove the semicolon from here it will show error, so to execute IIFE we need to put the semicolon

((name) => {
    console.log(`Namastey, ${name}`);
    
})('Motu Patlu');