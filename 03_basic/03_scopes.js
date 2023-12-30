let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a); // => INNER:  10
}

console.log(a); // => 300
//console.log(b); // => Error because it is out of scope

function one(){
    const userName  = "Arijit";
    function two(){
        const webSite = "youtube";
        console.log(userName); // => Arijit
    }
    //console.log(webSite);
    two();
}
one();

if(true){
    const userName = "Sonu";
    if(userName === "Sonu"){
        const webSite = " youtube";
        console.log(userName + webSite); // => Sonu youtube
    }
    //console.log(webSite);
}
//console.log(userName);

// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addOne(5)); // => 6

function addOne(num){
    return num + 1;
}

//console.log(addTwo(5)); // => Error .... we declare thhe function and hold the value in a variable .... so we can not access it befor the function

const addTwo = function(num){
    return num + 2;
}

console.log(addTwo(5)); // => 7