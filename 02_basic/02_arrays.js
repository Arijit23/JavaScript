const marver_heros = ["IronMan", " SpiderMan", "Black Panther"];
const dc_heros = ["superman", "flash", "batman"];

//marver_heros.push(dc_heros);
//console.log(marver_heros); // => [ 'IronMan', ' SpiderMan', 'Black Panther', [ 'superman', 'flash', 'batman' ] ]

//console.log(marver_heros[3]); // => [ 'superman', 'flash', 'batman' ]
//console.log(marver_heros[3][0]); // => superman

const all_heros = marver_heros.concat(dc_heros);
//console.log(all_heros); // => [ 'IronMan', ' SpiderMan', 'Black Panther', 'superman', 'flash', 'batman' ]

const all_new_heros = [...marver_heros, ...dc_heros];
console.log(all_new_heros); // => [ 'IronMan', ' SpiderMan', 'Black Panther', 'superman', 'flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Array")); // => false
console.log(Array.from("Arijit")); // => [ 'A', 'r', 'i', 'j', 'i', 't' ]
console.log(Array.from({name: "Arijit"})); // => [] .......... interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // => [ 100, 200, 300 ]