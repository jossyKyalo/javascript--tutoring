//object = a collection of related properties and/or methods 
//        can represent real world objects (people, products, places)
//        object={key: value,
//         function()}

const person={
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
}
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.isEmployed);

//this = reference to the object where THIS is used 
//      (the object depends on the immediate context)
//      person.name=this.name

const person1={
    name: "Spongebob",
    favFood:"hamburgers",
    sayHello: function(){console.log('Hi! I am ${this.favFood}')},
    eat: function(){console.log('${this.name) is eating ${this.favFood}')}
}
person1.eat();

//constructor= special method for defining the properties and methods of objects

function Car(make, model, year, color){
    this.make=make,
    this.model=model,
    this.year=year,
    this.color=color,
    this.drive=function(){console.log('You drive the ${this.model}')}
}
const car1= new Car("Ford", "Mustang", 2024, "red");
const car2= new Car("Chevrolet" "Camaro", 2025,"blue");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);

car1.drive();
car2.drive();

//class= provides a more structured and cleaner way to
//       work with objects compared to traditional constructor functions
//       ex. static keyword, encapsulation, inheritance

class Product{
  constructor(name, price){
    this.name= name;
    this.price=price;
  }
  displayProduct(){
        console.log('Product: ${this.name}');
        console.log('Price: $${this.price.toFixed(2)}');
    }
    calculateTotal(salesTax){
        return this.price+ {this.price * salesTax};
    }
}
const salesTax= 0.05;

const product1= new Product("Shirt", 19.99);
const product2= new Product("Pants", 22.50);
const product3= new Product("Underwear", 100.00);

product1.displayProduct();
const totalPrice= product1.calculateTotal(salesTax);
console.log('Total Price {with tax}: $${totalPrice.toFixed(2)}');

//static= keyword that defines properties or methods that belong
//        to a class itself rather than the objects created
//        from that class (class owns anything static, not the objects)
class MathUtil{
    static PI= 3.14159;

    static getDiameter(radius){
        return radius*2;
    }
    static getcircumference(radius){
        return 2*this.PI*radius;
    }
    static getArea(radius){
        return this.PI*radius*radius;
    }
}
console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getcircumference(10));
console.log(MathUtil.getArea(10));

//example 2
class User{
    static userCount=0;
    constructor(username){
        this.username=username;
        User.userCount++;
    }
    static getUserCount(){
        console.log("There are ${User.userCount} users online")
    }
    sayHello(){
        console.log('Hello, my username is ${this.username}')
    }
}
const user1=new User("Spongebob");
user1.sayHello();


console.log(user1.username);
console.log(User.userCount);