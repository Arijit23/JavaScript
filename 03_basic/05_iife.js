// Immediately Invoked Function Expressions (IIFE)
// ()() ==> First parentheses is the defination of function.... 2nd parentheses is for execution

(function chai(){
    // Named IIFE
    console.log(`DB Connected`);
})(); // => DB Connected

(() => {
    console.log(`DB connected toooo...`);
})(); // => DB connected toooo...

( (name) => {
    console.log(`DB CONNECTED TO ${name}`);
} )('Arijit'); // => DB CONNECTED TO Arijit