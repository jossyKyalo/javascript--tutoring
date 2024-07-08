//sort = method used to sort elements of an array in place.
//       sorts elements as string in lexicographic order, not alphabetical
//       lexicographic= (alphabet+ numbers +symbols) as strings
let numbers=[1,10, 2, 9, 3, 8, 4, 7, 5, 6];

numbers.sort((a, b)=> a-b);

console.log(numbers);

//date objects

const date=new Date();
const year=date.getFullYear();
const month= date.getMonth();
const day= date.getDate();
const dayOfWeek= date.getDay();

console.log(year);
console.log(month);
console.log(day);
console.log(dayOfWeek);