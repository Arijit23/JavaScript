const tinderUser = new Object(); // Sinngleton object
//const tinderUser = {} ...... same output but it is not a singleton object

tinderUser.id = "123abc";
tinderUser.name = "Patty";
tinderUser.age = 25;
tinderUser.isLoggedIn = false;

console.log(tinderUser); // => { id: '123abc', name: 'Patty', age: 25, isLoggedIn: false }
console.log(Object.keys(tinderUser)); // => [ 'id', 'name', 'age', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // => [ '123abc', 'Patty', 25, false ]
console.log(Object.entries(tinderUser)); // => [ [ 'id', '123abc' ], [ 'name', 'Patty' ], [ 'age', 25 ], [ 'isLoggedIn', false ] ]
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // => true

const regularUser = {
    email: "regularUser@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Arijit",
            lastName: "Laha"
        }
    }
}

console.log(regularUser);
/*
{
  email: 'regularUser@gmail.com',
  fullName: { userFullName: { firstName: 'Arijit', lastName: 'Laha' } }
}
*/

console.log(regularUser.fullName.userFullName.firstName); // => Arijit

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

const obj4 = { obj1, obj2 };
const obj5 = Object.assign({}, obj1, obj2, obj3);

console.log(obj4); // => { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
console.log(obj5); // => { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const obj6 = {...obj1, ...obj2, ...obj3};
console.log(obj6); // => { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const users = [   //          Array of objects....mainly use in production
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
    {
        id: 3,
        email: "c@gmail.com"
    },
]

console.log(users[1].email); // => b@gmail.com