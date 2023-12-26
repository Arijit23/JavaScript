let score = "23abs";
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);

console.log(typeof valueInNumber); // => number
console.log(valueInNumber); // => NaN -> Not a number

let ant = null
let valueOfAnt = Number(ant);
console.log(valueOfAnt); // => 0

let bee = undefined
let valueOfBee = Number(bee);
console.log(valueOfBee); // => NaN -> Not a number

/*
Type of NaN is Number
*/

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // => Trur

/*
1 => true
0 => False 
"" => False
"Arijit" => True
*/

let someNumber = 16;
let stringValue = String(someNumber);
console.log(stringValue); // => "16", as output it shows as 16
console.log(typeof stringValue); // => String

//******************* Operations **********************

let value = 3;
let negValue = -value;
console.log(negValue);

let str1 = "Hello";
let str2 = " World";
let concatStr = str1 + str2;
console.log(concatStr); // Hello World

console.log("1" + 2); // => 12
console.log(1 + "2"); // => 12
console.log("1" + 2 + 3); // => 123
console.log(1 + 2 + "3"); // => 33

console.log(+true); // => 1
//console.log(true+); // => error
console.log(+""); // => 0

let num1,num2,num3
num1 = num2 = num3 == 2 + 2 // => 4 It is not a good practice

let gameCounter = 100;
gameCounter++;
console.log(gameCounter); // => 101
