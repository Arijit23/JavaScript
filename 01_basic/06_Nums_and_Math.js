const score = 400;
console.log(score); // => 400

const balance  = new Number(100);
console.log(balance); // => [Number: 100]

console.log(balance.toString());
console.log(typeof balance); // => Object

console.log(balance.toFixed(2)); // => 100.00

const otherNumber = 23.8966;
console.log(otherNumber.toPrecision(3)); // => 23.9

const newNumber = 1123.8966;
console.log(newNumber.toPrecision(3)); // => 1.12e+3

const hundreds = 1000000000000;
console.log(hundreds.toLocaleString()); // => 1,00,00,00,00,00,00

//++++++++++++++++++++++  Maths  +++++++++++++++++++++++++++++++

console.log(Math); // => Object [Math] {}

console.log(Math.abs(-4)); // => 4
console.log(Math.round(4.6)); // => 5
console.log(Math.ceil(4.2)); // => 5
console.log(Math.floor(4.9)); // => 4
console.log(Math.min(4, 3, 6, 8)); // => 3
console.log(Math.max(4, 3, 6, 8)); // => 8

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1); // It can be either of floor or ceil, depends on your need.

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Formula for getting a random value in a specific range (V.V.I) ***