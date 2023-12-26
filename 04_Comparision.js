console.log("2" > 1); // => true
console.log("02" > 1); // => true
console.log(NaN == NaN); // => false
console.log(null >= 0); // =>true... (1)
console.log(null == 0); // => false... (2)
console.log(null > 0); // => false... (3)

/*
The reason is that an equality check == and comparisons >, <, >=, <= work differently.
Comparisons convert null to a number, treating it as 0.
That's why (1) is true and (2), (3) is false
*/

console.log(undefined == 0); // In case of Undefined both equality check and comparisons shows false

// Strict check(===), it check not only values but also the data type
//Example
console.log("2" == 2); // => true
console.log("2" === 2); // => false