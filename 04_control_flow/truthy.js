const userEmail = "Arijit@laha.ai";

if(userEmail){
    console.log("User is logged in") // User is logged in
} else{
    console.log("Please login to access this page");    
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.log("Array is empty"); // False
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty"); // Object is empty
}

// Nullish Coalescing Operator (??): null, undefined
/*
The result of a ?? b is:
if a is defined, then a,
if a isn’t defined, then b.
*/

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

// Terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80") // more than 80