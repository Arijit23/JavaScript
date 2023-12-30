function calculateCartPrice(...num1) {
    return num1;
}

console.log(calculateCartPrice(200, 400, 500)); // => [ 200, 400, 500 ]

function calculateCartPrices(val1, val2, ...number1) {
    return number1;
}

console.log(calculateCartPrices(100, 200, 500, 2000)); // => [ 500, 2000 ]...... val1 = 100, val2 = 200

const user = {
    username: "Arijit",
    price: 999
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user); // => Username is Arijit and price is 999

handleObjects({
    userName: "Kishor",
    prices:499
})

function handleObjects(anyObjects){
    console.log(`Username is ${anyObjects.userName} and price is ${anyObjects.prices}`); // => Username is Kishor and price is 499
}

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray)); // => 400

console.log(returnSecondValue([200, 400, 500, 1000])); // => 400