//nested objects= objects inside of other objects.
//               allows you to represent more complex data structures
//               child object is enclosed by a parent object

//              Person{Address{}, ContractInfo{}}
//              ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}

const person={
    fullName: "Spongebob Squarepants",
    age: 30,
    isStudent: true,
    hobbies: ["karate", "jellyFishing", "cooking"],
    address:{
        street: "124 Conch St.",
        city: "Bikini Bottom",
        country: "Int. water"
    }
}
console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies[2]);
console.log(person.address.street);