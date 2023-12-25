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