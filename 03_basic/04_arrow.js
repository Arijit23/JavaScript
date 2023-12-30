const user = {
    userName: "Arijit",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.userName}, welcome to website`);
        console.log(this);
    }
} 

user.welcomeMessage();

user.userName = "Kishor";
user.welcomeMessage();
/*
Arijit, welcome to website
{
  userName: 'Arijit',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
Kishor, welcome to website
{
  userName: 'Kishor',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
*/
console.log(this); // => {}

// function chai(){
//     let username = "hitesh"
//     console.log(this);
// }

// chai()

const chai = () => {
    let userName = " Arijit"
    console.log(this.userName);
}

chai(); // => undefined

// Explicit return 
const addTwo = (num1, num2) => {
    return num1 + num2;
}

console.log(addTwo(3,4)); // => 7

// Implicit return
const addNumbers = (num1, num2) => num1 + num2;
console.log(addNumbers(5,4)); // => 9

const addTwoNum = (num1, num2) => ({username: "Arijit"});
console.log(addTwoNum(3, 4)) // => { username: 'Arijit' }

// const myArray = [2, 5, 3, 7, 8]
// myArray.forEach()