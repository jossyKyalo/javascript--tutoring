//Closure= a function defined inside of another function
//         the inner function has access to the variables
//          and scope of the outer function.
//          allow for private variables and state maintenance
//         Used frequently in JS frameworks: React, Vue Angular

function outer(){
    let message="Hello";
    function inner(){
       console.log(message) ;
    }
    inner();
}
outer();//here nothing happens

//setTimeout()= function in Javascript that allows you to schedule
//              the execution of a function after an amount of time(milliseconds)
//              Times are approximate(varies based on the workload of the Javascript runtime env.)
//             setTimeout(callback, delay);

function sayHello(){
    window.alert("Hello");
}
setTimeout(sayHello, 3000);
//or
setTimeout(()=>window.alert("Hello"),3000);

//clearTimeout(timeoutId)= ca cancel a timeout before it triggers
const timeoutId= setTimeout(()=>window.alert("Hello"),3000);
clearTimeout(timeoutId);
