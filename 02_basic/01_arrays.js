const myArr = [0, 1, 2, 3, 4, 5];
const myHeors = ["Iron Man", "Captain America", "Thor", "Hulk"];

const myArr2 = new Array(1, 2, 3, 4);
console.log(myHeors); // => [ 'Iron Man', 'Captain America', 'Thor', 'Hulk' ]
console.log(myArr2[2]); // => 3

// Array methods

myArr.push(6);
console.log(myArr); // => [ 0, 1, 2, 3, 4, 5, 6 ]

myArr.pop();
console.log(myArr); // => [ 0, 1, 2, 3, 4, 5 ]

myArr.unshift(9);
console.log(myArr); // => [ 9, 0, 1, 2, 3, 4, 5 ] ...... It is not optimize, So don't use it untiil you need iit.

myArr.shift();
console.log(myArr); // => [ 0, 1, 2, 3, 4, 5 ]

console.log(myArr.includes(9)); // => false
console.log(myArr.indexOf(23)); // => -1 ...... As it is not include in Array

const newArr = myArr.join(); // Array to String
console.log(myArr);
console.log(typeof myArr); // Object
console.log(newArr);
console.log(typeof newArr); // String

// Slice, Splice

console.log("A ",myArr); // => A  [ 0, 1, 2, 3, 4, 5 ]
const myn1 = myArr.slice(1, 3); // Return a section of array, don't modiify the last range and do not modify the original array 
console.log(myn1); // [ 1, 2 ]
console.log("B ",myArr); // => B  [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1, 3); // Return a section of array, don't include the last range and modify the original array 
console.log("C ",myArr); // => C  [ 0, 4, 5 ]
console.log(myn2); // => [ 1, 2, 3 ]