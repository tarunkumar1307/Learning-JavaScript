/*
Filter 
-> Creates and returns a new array while foreach loop don't
-> Only includes elements that pass the test condition (return true)
*/
console.log("----------------------filter----------------------");
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = arr.filter((num)=> num % 2 == 0);
console.log(result); 

const books = [
    {
        title: 'Book One',
        genre: 'Fiction',
        publish: 1981
    },
    {
        title: 'Book Two',
        genre: 'Non-Fiction',
        publish: 1992
    },
    {
        title: 'Book Three',
        genre: 'History',
        publish: 1999
    },
    {
        title: 'Book Four',
        genre: 'Non-Fiction',
        publish: 1989
    },
    {
        title: 'Book Five',
        genre: 'Science',
        publish: 1996
    },
    {
        title: 'Book Six',
        genre: 'Fiction',
        publish: 1987
    },
    {
        title: 'Book Seven',
        genre: 'History',
        publish: 1986
    }
];

const nonFictionBooks = books.filter((book) => book.genre === 'Non-Fiction');
console.log(nonFictionBooks);



/*
Map
-> Creates a new array by transforming every element in an array individually
-> Returns a new array of the same length as the input array
-> Does not modify the original array
-> Commonly used for data transformation
*/
console.log("\n----------------------map----------------------");
// Example 1: Basic number transformation
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log('Original numbers:', numbers);
console.log('Doubled numbers:', doubled);

// Example 2: Extracting specific properties from objects
const bookTitles = books.map((book) => book.title);
console.log('\nJust the book titles:', bookTitles);


// Chaining
const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const changedNum = myNum
                    .map((num) => num * 10)
                    .map((num) => num + 1)
                    .filter((num) => num > 40);
console.log(changedNum);

console.log('\n----------------------reduce----------------------');
/*
Reduce
-> Reduces an array to a single value (accumulator)
-> Takes a callback function with accumulator and current value as parameters
-> Can specify an initial value for the accumulator
-> Commonly used for sums, averages, grouping and complex data transformations
*/

const myNums = [1, 2, 3];
// const totalNums = myNums.reduce( function(acc, currVal){
//     console.log(`acc : ${acc} and currValue : ${currVal}`);
//     return acc + currVal;
// }, 2);

const totalNums = myNums.reduce( (acc, currVal) => acc+currVal , 2);
console.log(totalNums);

const shoppingCart = [
    {
        itemName : "js course",
        price : 2999,
    },
    {
        itemName : "data science course",
        price : 12999,
    },
    {
        itemName : "mobile devlopment course",
        price : 5999,
    },
]

const totalValue = shoppingCart.reduce((acc, item) => acc+item.price, 0);
console.log(`Cart Value : ${totalValue}`);