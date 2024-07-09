//synchronous = executes line by line consecutively in a sequential manner
//              Code that waits for an operaton to complete

//asynchronous = allows multiple operations to be performed concurrently without waiting 
//               Doesn't block the execution flow and allows the progress to continue
//               (i/o operations, network requests, fetching data)
//               Handled with: callbacks, promises, asyn/await

//synchronous example(line by line)
console.log("Task 1");
console.log("Task 2");
console.log("Task 3");


//asynchronous example
setTimeout(()=> console.log("Task 1"),3000);//will execute after the rest have executed
console.log("Task 2");
console.log("Task 3");
console.log("Task 4");