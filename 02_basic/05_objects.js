// ++++++++++++++++++++++ Destructuring +++++++++++++++++++++++

const course = {
    coursename: "JS",
    price: "999",
    courseInstructor: "Arijit"
}

console.log(course.courseInstructor);  // => Arijit

const {courseInstructor: instructor} = course  

//console.log(courseInstructor);
console.log(instructor); // => Arijit


// JSON in API
// {
//     "name": "Arijit",
//     "coursename": "JS",
//     "price": "free"
// }

// JSON in array format
[
    {},
    {},
    {}
]

// Tool to understand JSON : JSON formatter
//example JSON : Randomuser api