//While and Do While

let index = 0;

while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2;
}
/*
Value of index is 0
Value of index is 2
Value of index is 4
Value of index is 6
Value of index is 8
Value of index is 10
*/

let myArray = ['flash', "batman", "superman"]

let arr = 0;
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1;
}
/*
Value is flash
Value is batman
Value is superman
*/

let score = 11
do {
    console.log(`Score is ${score}`); // Score is 11
    score++;
} while (score <= 10);