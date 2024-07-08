//destructuring= extract values from arrays and objects,
//               then assign them to variables in a convenient way
//               []= to perform array destructuring
//               {}= to perform object destructuring

//......example 1.....
//swap the value of two variables

let a=1;
let b=2;

[a, b]=[b, a];

console.log(a);
console.log(b);

//in an array
const colors= ["red","green", "blue", "black","white"];

[colors[0], colors[4]]= [colors[4],colors[0]];
console.log(colors);


//extract values from objects
const person1={
    fistName: "Spongebob",
    lastName: "SquarePants",
    age: 30,
    job: "Fry cook",
}
const person2={
    firstName: "Patrick",
    lastName: "Star",
    age: 34,
}
const{firstName, lastName, age,job}=person1;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

const{firstName, lastName, age,job="unemployed"}=person2;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

//destructuring in function parameters
function displayPerson({firstName, lastName, age, job="unemployed"}){
    console.log('name: ${firstName} ${lastName}');
    console.log('age: ${age}');
    console.log('job: ${job}');
}
const person1={
    fistName: "Spongebob",
    lastName: "SquarePants",
    age: 30,
    job: "Fry cook",
}
const person2={
    firstName: "Patrick",
    lastName: "Star",
    age: 34,
}