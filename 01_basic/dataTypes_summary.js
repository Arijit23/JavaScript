// Primitiive
// 7 types  : String, Number, Boolean, Null, Undefined, BigInt, Symbol

/*
JavaScript is a dynamically typed language, which means that data types 
of variables are determined by the value they hold at runtime and can change 
throughout the program as we assign different values to them.
*/

const score = 100;
const scoreValue = 100.3

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId); // => False ... Symbol is ised for make data type unique...even the data is same but it iis not equal

const bigNumber = 3456543576654356754n // add n to the last, It represent it is a BigInt


//Reference (Non Primitive)
// Array, Objects, Functions
// Type of Array and Objects is 'Function'
// Type of Functions is  'Object Function'

const heros = ["shaktiman", "naagraj", "doga"]; // Array

let myObj = {                                   // Objects
    name: "hitesh",
    age: 22
}                        

const myFunction = function(){                 // Functions
    console.log("Hello world");
}

console.log(typeof anotherId); // => Symbol

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Primitive  -> Stack memory
// Non-Primitive -> Heap memory

let myName = "Arijit Laha";
let myPetName = myName;
myPetName = "Sonu";

console.log(myName);
console.log(myPetName);

// In stacck memory we dont change the original value, rather we change the copy value
// When you call any value from Stack memory, you get the copy of the value

let userOne = {
    email: "abc123@gmail.com",
    upi: "userOne@ypl"
}

let userTwo = userOne

userTwo.email = "xyz789@gmail.com";

console.log(userOne.email); // => xyz789@gmail.com
console.log(userTwo.email); // => xyz789@gmail.com

// In Heap memory the oriiginal value wiil be changed. So the last assign value is the final value.
// When you call any value from Heap memory, you get the reference of the value. So the cange is on the real value.