//using console.log
console.log("Hello");
console.log("I like pizza");

window.alert("This is an alert");
//comment


//variables(declaration: let x; assignment: x=100;)
let x;
x=123;
console.log(x);
//other ways
let gpa=2.1;
console.log('Your gpa is: ${gpa}');
//sting data type
let firstName="Jossy";
console.log(typeof firstName);
console.log(firstName);
console.log("Your first name is ${firstName}");
//boolean
let online=false;
console.log("Bro is online: ${online}");
//changing content
document.getElementById("myHi").textContent='Hello';
//or
document.getElementById("myHi").textContent=gpa;

//arithmetic operators
let students=30;
//students= students+1;
//students=students-1;
//students=students*1;
//students=students/2;
//students=students %3;

//students +=1;
//students -=1; etc

console.log(students);

/*
operator precedence
1.parenthesis();
2. exponents
3. multiplication and division and modulo
4. addition and subtraction
*/
//How to accept user input

//1. Easy way= window prompt
let username;
username=window.prompt("what's your username?");
console.log(username);

//2. Professional way =html textbox
let username;
document.getElementById("mySubmit").onClick=function(){
    username=document.getElementById("myText").value;
    document.getElementById("myH1").textContent=='Hello ${username}'
}

//type conversion
let age=window.prompt("How old are you?");
age= Number(age);
age+=1;
console.log(age, typeof age);

//another example

let x="pizza";
let y="pizza";
let z="pizza";

x=Number(x);
y=String(y);
z=Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

//const- variabes that cannot be changed 
let pi=3.14159;
let radius;
let circumference;

radius=window.prompt("Enter the radius of circle");
radius=Number(radius);

circumference= 2*pi*radius;
console.log(circumference);

//COUNTER PROGRAM
/*const decreaseBtn= document.getElementById("decreaseBtn");
const resetBtn=document.getElementById("resetBtn");
const increaseBtn=document.getElementById("increaseBtn");
const countLabel= document.getElementById("countLabel");

increaseBtn.onclick=function(){
    count++;
    countLabel.textContent=count;
}
decreaseBtn.onclick=function(){
    count--;
    countLabel.textContent=count;
}
resetBtn.onclick=function{
    count=0;
    countLabel.textContent=count;
}*/

//if statements
let age=13;

if(age>=18){
    console.log("You are old enough to enter this site");
}
else{
    console.log("You are not allowed");
}

//else if statements
let age=13;

if(age>=18){
    console.log("You are old enough to enter this site");
}
else if(age <0){
    onslotchange.log("Your age can't be below 0")
}
else if(age >=100){
    onslotchange.log("You are too old enough to enter this site")
}
else{
    console.log("You are not allowed");
}

//ternary operator
let age =21;
let message= age >=18? "You're and adult": "You're a minor";
console.log(message);

//for boolean
let isStudent=true;
let messsage= isStudent? "You are a student" : "You are NOT a student";
console.log(message);

//maths in ternary
let purchaseAmount =99;
let discount= purchaseAmount >= 100? 10:0;
connsole.log('Your total is $${purchaseAmount- purchaseAmount*(discount/100)}');


//switch statements
let day =1;

switch(day){
    case 1:
        console.log("It is Monday");
        break;

    case 2:
        console.log("It is Tuesday");
        break;

    case 3:
        console.log("It is Wednesday");
        break;

    case 4:
        console.log("It is Thursday");
        break;

    case 5:
        console.log("It is Friday");
        break;

    case 6:
        console.log("It is Saturday");
        break;

    case 7:
        console.log("It is Sunday");
        break;

    default:
        console.log('$(day) is not a day');
}
//example 2
let testScore=92;
let letterGrade;

switch(true){
    case testScore >=90:
      letterGrade="A";
      break;

    case testScore >=80:
      letterGrade= "8";
      break;

    case testScore >=70:
      letterGrade="C" ;
      break; 

    case testScore >=60:
      letterGrade="D";
      break;

    default:
        letterGrade="F";

}
console.log(letterGrade);

//NO METHOD CHAINING
let username=window.prompt("Enter your username:");

username= username.trim();
let letter= username.charAt(0);
letter= letter.toUpperCase();

let extraChars = username.slice(1);
extraChars= extraChars.toLowerCase();
username= letter+ extraChars;

console.log(username);

//METHOD CHAINING
 username= username.trim().charAt(0).toUpperCase()+ username.trim().slice(1).toLowerCase;

 console.log(username);

 //Logical operators: AND(&&), OR(||), NOT(!)

 //=== strict equality operator (compares if values and data type are equal)

 //loops
   //while
let username="";

while(username===""){
    username=window.prompt("Enter your name");
   // console.log('You did not enter your name');
}
 console.log('Hello ${username}');

   //do while loop
let loggedIn=false;
let username;
let password;

do{
    username= window.prompt("Enter your username");
    password= window.prompt("Enter your password");

    if(username==="myUsername" && password==="myPassword"){
        loggedIn=true;
        console.log("You are logged in!");
    }
    else{
        console.log("Invalid credentials! Please try again");
    }
}while(!loggedIn)

    //for loop
for(let i=0; i<=2; i++){
    console.log("Hello");

}
//continue
for(let i=1; i<=20; i++){
    if(i==13){
        continue;
    }
    else{
        console.log(i);
    }
}
//break
for(let i=1; i<=20; i++){
    if(i==13){
        break;
    }
    else{
        console.log(i);
    }
}
//function- section of reusable code
function happyBirthday(){
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log("Happy birthday dear you!");
    console.log("Happy birthday to you!");
}
happyBirthday();//calling it

//parameters and arguments in a function
function happyBirthday(name, miaka){
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log("Happy birthday dear ${name}!");
    console.log("You are ${miaka} years old");
}
happyBirthday("Jossy", 20);

//eg2
function isValidEmail(email){
  if(email.includes("@")){
    return true;
  }
  else{
    return false;
  }
}
console.log(isValidEmail("kajose@fake.com"));
console.log(isValidEmail("ElonMusk.com"));

//arrays in js
let fruits=["apple", "orange", "banana"];
console.log(fruits[0]);
  //fruits.push("coconut");...adds another to the end of the array
  //fruits.pop();=> removes the last element(banana)
  //fruits.unshift("mango"); => adds to first position 
  //fruits.shift();----removes element from beginning

  for(let i=0; i< fruits.length; i++){
    console.log(fruits[i]);
  }
//short cut 
let fruits=["apple", "orange", "banana", "coconut"];
for(let fruit of fruits){
    console.log(fruit);
}
//sorting array
fruits.sort();
 //in reverse order
 fruits.sort().reverse();

 //spread operator: ...(unpacks elements)
 let myName="Kajose";
 let letters= [...myName];

 console.log(letters);
 //rest parameters: bundles separate elements into an array

 function openFridge(...foods){
    console.log(foods);
 }
 const food1="pizza";
 const food2="hamburger";
 const food3="hotdog";
 const food4="sushi";
 const food5="ramen";
 openFridge(food1, food2, food3, food4, food5);