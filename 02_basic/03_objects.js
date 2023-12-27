//object can be declared like litteral and constracter
//singleton

// Object literals

Object.create // Using constracter method...... in this way we make singleton

const mySym = Symbol("key1")

const JsUser = {
    name: "Arijit",
    "Full name": "Arijit Laha",
    [mySym]: "mykey1",  // When you want to add a symbol, use "[]"
    age: 23,
    location: "Howrah",
    email: "randomemail@gmail.com",
    isLoggerIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.name); // => Arijit
console.log(JsUser["name"]); // => Arijit

//console.log(JsUser.Full name); // => error
console.log(JsUser["Full name"]); // => Arijit Laha

console.log(JsUser[mySym]); // => mykey1

//Object.freeze(JsUser) // To stop any modification
JsUser.email = "randomEmail2@gmail.com";
console.log(JsUser);

JsUser.greeting = function(){
    console.log(`Hello! My Name is ${this.name}`); 
}

console.log(JsUser.greeting); // => undefined
console.log(JsUser.greeting()); // => Hello! My Name is Arijit
console.log(JsUser);
/*
{
  name: 'Arijit',
  'Full name': 'Arijit Laha',
  age: 23,
  location: 'Howrah',
  email: 'randomEmail2@gmail.com',
  isLoggerIn: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],
  greeting: [Function (anonymous)],
  [Symbol(key1)]: 'mykey1'
}
*/