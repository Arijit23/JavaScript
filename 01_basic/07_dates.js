//+++++++++++++++++++++ JS calculate date in mili sec from 1st Jan 1970 +++++++++++++++++++++++

let myDate = new Date()
console.log(myDate);  // => 2023-12-26T19:43:58.527Z
console.log(myDate.toString());  // => Wed Dec 27 2023 01:13:58 GMT+0530 (India Standard Time)
console.log(myDate.toISOString());  // => 2023-12-26T19:43:58.527Z
console.log(myDate.toDateString());  // => Wed Dec 27 2023
console.log(myDate.toTimeString());  // => 01:16:06 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleDateString());  // => 27/12/2023
console.log(myDate.toJSON());  // => 2023-12-26T19:46:06.722Z
console.log(myDate.toLocaleString());  // => 27/12/2023, 1:16:06 am
console.log(myDate.toUTCString());  // => Tue, 26 Dec 2023 19:46:06 GMT

console.log(typeof myDate); // => object

let myCreatedDate = new Date(2023, 8, 23);
console.log(myCreatedDate.toDateString()); // => Sat Sep 23 2023 ........ In JS month start from '0'... '0' is Jan so '8' is Sep

let myNewDate = new Date(2023, 8, 23, 16, 10);
console.log(myNewDate.toLocaleString()); // => 23/9/2023, 4:10:00 pm

let myNewDate2 = new Date("10-16-2023");
console.log(myNewDate2.toLocaleString()); // => 16/10/2023, 12:00:00 am

let myTimeStamp = Date.now();
console.log(myTimeStamp); // => 1703620938046
console.log(myCreatedDate.getTime()); // => 1695407400000
console.log(Math.floor(Date.now()/1000)); // => 1703621081

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()); // => 11.... starts from '0' which is jan
console.log(newDate.getDay()); // => 3 .... starts from '0' which is Monday in this case
console.log(newDate.setHours(14)); // => 1703668222421 ........ it will set hours but not return the value of that date... 

//`${newDate.getDay()} and ...` ++++++++ You can use this in a String

newDate.toLocaleString("default",{
    weekday: "long"
})