function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName -> Reference of the function
// sayMyName() -> Execute of the function

sayMyName();

function addTwoNumber(number1, number2){
    console.log(number1 + number2);
}

addTwoNumber(16,18); // => 34

function addTwoNumbers(num1, num2){
    return num1 + num2;
}

console.log(addTwoNumbers(3,4)); // => 7
let result = addTwoNumbers(9,11);
console.log(result); // => 20

function addTwo(number1, number2){
    let ans = number1 + number2
    return ans
}

const ans = addTwoNumbers(3, 5)
console.log("Result: ", ans); // => Result:  8

function loginUserMessage(username = "Jai Sree RAM"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Arijit")); // => Arijit just logged in
console.log(loginUserMessage()); // => Jai Sree RAM just logged in

function loginUsersMessage(username){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUsersMessage()); // => PLease enter a username .......undefined