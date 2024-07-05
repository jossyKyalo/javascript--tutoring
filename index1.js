//callback= function that is passed as and argument to another function

hello();
goodbye();

function hello(callback){
 console.log("hello!");
 callback();
}
function goodbye(){
    console.log("goodbye!");
}
function wait(){
    console.log("wait!");
}

//forEach()= method used to iterate over the elements
//           of an array and apply a specified function(callback)
//           to each element

//           array.forEach(callback)

let numbers=[1,2,3,4,5];

numbers.forEach(display);

function double(element, index, array){
    array[index]=element*2;
}
function triple(element, index, array){
    array[index]=element*3;
}
function square(element, index, array){
    array[index]=Math.pow(element, 2);
}
function display(element){
    console.log(element);
}
//second forEach example
let fruits=["apple","orange","banana","coconut"];

fruits.forEach(display);

function upperCase(element, index, array){
    array[index]=element.toUpperCase();
}
function display(element){
    console.log(element);
}

//.map()= accepts a callback and applies that function
//       to each element of an array, then return a new array

const nums=[1,2,3,4,5];
const squares= nums.map(square);
const cubes= nums.map(cube);

console.log(cubes);
function square(element){
    return Math.pow(element,2);
}
function cube(element){
    return Math.pow(element, 3)
}

//.filter()= creates a new array by filtering out elements

let numbs=[1,2,3,4,5,6,7];
let evenNums= numbs.filter(isEven);
let oddNums= numbs.filter(isOdd);
console.log(evenNums);

function isEven(element){
    return element %2===0;
}
function isOdd(element){
    return element %2!==0;
}

//.reduce()= reduce the elements of an array to a single value
const prices=[5,30,10,25,15,20];

const total =prices.reduce(sum);
console.log('$${total.toFixed(2)}');

function sum(30, 5){
    return 35;
}

//function expressions = a way to define functions as values or variables

const hello= function(){
    console.log("Hello");
}
setTimeout(function(){
    console.log("Goodbye");
}, 5000);

//arrow functions= a concise way to write function expressions good for simple 
//                functions that you use only once(parameters)=> some code

const hello= (name)=>{console.log{'Hello ${name}'}
                     console.log('You are old')};
hello("Bro");

