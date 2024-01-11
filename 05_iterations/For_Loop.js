// for loop

for(let index = 0; index < 10; index++)
{
    const element = index;
    if(element == 7)
    {
        console.log(`Thala for a reason ${element} is GOAT`);
    }
    console.log(`Element at index ${index} is ${element}`);
}

for (let i = 1; i <= 10 ; i++) {
     console.log(`Table for : ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(i + '*' + j + ' = ' + i*j );
    }
}

let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);    
}


// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 7) {
        console.log(`Thala ke age kohi bol sakta hai kia`);
        break
    }
   console.log(`Altu faltu number is ${index}`);
    
}

for (let index = 1; index <= 20; index++) {
    if (index == 7) {
        console.log(`THALA`);
        continue
    }
   console.log(`Jhatu number is ${index}`);
    
}