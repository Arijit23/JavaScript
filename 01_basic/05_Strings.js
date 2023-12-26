const name = "Arijit";
const repoCount = 14;
//console.log(name + repoCount + " Value");

//Now a day every one use 'backticks'(``) because here we get string interpolation

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // => Hello my name is Arijit and my repo count is 14

const gameName = new String("Ninja"); 
console.log(gameName); // => [String: 'Ninja']
console.log(gameName[0]); // => N
console.log(gameName.__proto__); // => {}
console.log(gameName.length); // => 5
console.log(gameName.toUpperCase()); // => NINJA
console.log(gameName.charAt(2)); // => n
console.log(gameName.indexOf('i')); // => 1 .......   If the is more than one 'i', it will return the value for the first 'i' 

const newString = gameName.substring(0, 4)
console.log(newString); // => Ninj

const anotherString = gameName.slice(-3, 4)
console.log(anotherString); // => nj

const newStringOne = "   Arijit    "
console.log(newStringOne); // => '   Arijit'........    In output it just add the front space of the string, not the space after the syring
console.log(newStringOne.trim()); // => Arijit.........    there is also "trimStart" and "trimEnd" availabe

const url = "https://Arijit.com/Ninja%20Laha"

console.log(url.replace('%20', '-'))  // => https://Arijit.com/Ninja-Laha

console.log(url.includes('Sonu')) // => false......... It asks the string is the any thing like "Sonu"....ans is no,so false

const str = "The quick brown fox jumps over the lazy dog";
const words = str.split(" ");
console.log(words); 
/*  [
    'The',   'quick',
    'brown', 'fox',
    'jumps', 'over',
    'the',   'lazy',
    'dog'
  ] */
console.log(words[3]); // => fox

const chars = str.split(""); 
console.log(chars[8]); // => k

const strCopy = str.split();
console.log(strCopy);  // => [ 'The quick brown fox jumps over the lazy dog' ]

console.log(gameName.split('-')); // => [ 'Ninja' ]