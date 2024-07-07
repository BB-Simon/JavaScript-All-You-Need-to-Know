/*Twinkle Cats, JavaScript OOP
Lecture_1
Today's topic: Creating Objects and accessing the Values
*********************** */

// var obj = {};
// var obj1 = new Object();
// console.log(obj);
// console.log(obj1);

// var book = {
//   name: "Functional Javascript",
//   author: "Micbeal Fogus",
//   publisher: "o'Reilly",
//   page: 250,

//   print: function() {
//     document.write(this.name + "<br>" + this.author);
//   }
// };

// // document.write(book.print());
// // document.write("Author Name is: " + book["author"]);
// book.publishedYear = 2018;
// // document.write("Published Year is: " + book.publishedYear);
// book["price"] = "$250";
// // document.write('Price is: ' + book.price)

// for (var objNames in book) {
//   // document.write(objNames + '<br>')
//   document.write(objNames + " = " + book[objNames] + "<br>");
// }

/*Twinkle Cats, JavaScript OOP
Lecture_2
Today's topic: Create a Class
*********************** */
// var books = [
//     {
//         naem: 'Functional JvaScript',
//     },
//     {
//         name: 'Jvascript Definitive Guide'
//     }
// ]
// function Person(name, email) {
//   this.name = name;
//   this.email = email;
//   this.print = function() {
//     document.write("Nmae: " + this.name);
//   };
// }

// var p1 = new Person("Simon", "you@gmail.com");
// var p2 = new Person("Jimon", "tto.rrrr@email.com");
// var p3 = new Person("Takmina", "tttt.ttt@email.com");
// var people = [p1, p2, p3];

// // document.write(people);
// people.forEach(function(a) {
//   //   document.write(a.email + "<br>");
//   a.print();
// });
// for (var a in p1) {
//   document.write(a);
// }
// function Book(name, author, price) {
//   this.name = name;
//   this.author = author;
//   this.price = price;
// }
// var book = new Book("Functional Javascript", "Micbeal Fogus", "$30");
// console.log(book.constructor);

/*Twinkle Cats, JavaScript OOP
Lecture_3
Today's topic: this keyword
*********************** */

// var obj = {
//   name: "Simon",

//   print: function() {
//     console.log(this);
//   }
// };

// function myFun() {
//   function inner() {
//     console.log(this);
//   }
//   new inner();
// }
// myFun();

// obj.print();

// var person = {
//   name: "Simon",
//   print: function() {
//     console.log("Hello " + this.name);
//     console.log(this);
//   }
// };

// person.print();

// var myName = person.name;
// console.log(myName);
// var myPrint = function() {
//     console.log("Hello " + this.name);
//     //console.log(this)

//   };

// myPrint();

// var myPrint = person.print.bind(person);
// myPrint();

// function add(num) {
//   return this.value + num;
// }

// var obj = {
//   value: 10
// };
// var obj2 = {
//   value: 50
// };

// var binded = add.bind(obj);
// var result = binded(10);
// console.log(result);
// function add(num) {
//     console.log(this);

//     return this.value + num;
//   }

//   var obj = {
//       value: 30
//   }

//   var binded = add.bind(obj);
//   var result = binded(30)
//   console.log(result);

// var person = {
//   name: "Simon",

//   print: function() {
//     // var name = this.name;

//     setTimeout(function() {

//         console.log(this);
//       console.log("Hello " + this.name);

//     }.bind(this), 3000);
//   }
// };
// person.print();
/*Twinkle Cats, JavaScript OOP
Lecture_4
Today's topic: prototype
*********************** */
// function Person(name, age) {
//   this.name = name;
//   this.age = age;

//   this.hello = function() {
//     console.log("Hello" + this.name);
//   };
// }
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.x = 2;
// }

// Person.prototype.hello = function() {
//   console.log("Hello" + this.name);
// };

// Person.prototype.print = function() {
//   console.log(this.name, this.age);
// };
// Person.prototype.email = "bb.simon2gmail.com";
// Person.prototype = {
//   hello: function() {
//     console.log("Hello" + this.name);
//   },
//   print: function() {
//     console.log(this.name, this.email);
//   },
//   email: "bbsimon@emal.com"
// };

// var p1 = new Person("Simon", 24);
// var p2 = new Person("Jimon", 22);
// var p3 = new Person("tk", 22);

// console.log(p1);
// console.log(p2);
// console.log(Person.prototype);

/*Twinkle Cats, JavaScript OOP
Lecture_5
Today's topic: bind, call, apply Methods
*********************** */
// function printMe() {
//   console.log("Hello " + this.name);
// }
// var obj1 = {
//   name: "Simon",
//   age: 24
// };
// var obj2 = {
//   name: "Jimon",
//   email: "ttttt.ddd@email.com"
// };

// var binded1 = printMe.bind(obj1);
// var binded2 = printMe.bind(obj2);
// binded1();
// binded2();

// printMe.call(obj1);
// printMe.call(obj2);

// function add(a, b) {
//   return (a + b) * this.c;
// }
// var obj1 = {
//   c: 3
// };
// var obj2 = {
//   c: 5
// };

// var result = add.call(obj1, 10, 5);
// console.log(result);

// var res = add.apply(obj2, [10, 4]);
// console.log(res);

// var binded = add.bind(obj1);
// console.log(binded(10, 5));

/*Twinkle Cats, JavaScript OOP
Lecture_6
Today's topic:  inheritence
*********************** */
// function Person() {
//     this.name = 'Simon'
// }

// function Teacher() {
//     Person.call(this)
//     this.subject = 'Javascript'
// }

// var teacher = new Teacher()
// var name = teacher.name;
// console.log(name);

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.printName = function() {
//   console.log("Name: " + this.name);
// };
// Person.prototype.another = function() {
//   console.log("Hello, this another prototype obj");
// };

// function Student(name, id) {
//   Person.call(this, name);
//   this.id = id;
// }

// Student.prototype = Object.create(Person.prototype);
// Object.setPrototypeOf(Student.prototype, Person.prototype);
// Student.prototype.constructor = Student;

// var student = new Student("Simon", 1234);

/*Twinkle Cats, JavaScript OOP
Lecture_7
Today's topic:  new keyword
*********************** */

function Animale(name) {
  this.name = name;
}
Animale.prototype.printName = function () {
  console.log(this.name);
};

function myName(constructor) {
  var obj = {};
  Object.setPrototypeOf(obj, constructor.prototype);
  console.log(arguments);
}
var cat = myName(Animale, "Simon", "Jimon");

// var cat = new Animale("Cat");
// var dog = new Animale("Dog");

// console.log(dog.printName());



/********************************************************
******* Studying Object In Microverse Training **********
******* 11-01-2023 **********
*********************************************************/

// Create Object
// const obj1 = {a: "A"}
// const obj2 = new Object();
// obj2.a = "A";

// function ObjConstructor(a) {
//   this.a = a
// }

// ObjConstructor.prototype.b = "B";
// const obj3 = new ObjConstructor('A');

// const obj4 = Object.create(null);
// obj4.a = "A";

// function delay(ms) {
//   // your code
//   return new Promise((resolve, reject )=> {
//     setTimeout(resolve, ms)
//   })
// }

// delay(3000).then(() => console.log('runs after 3 seconds'));




const person = {
  name: "Simon",
  featurs: {
    test1: "test1",
    education: {
      one: 'test',
      two: {
        two: 'test2',
        three: {
          three: 'test3',
          four: {
            test4: 'test4',
          }
        }
      }
    }
  }
}


const person2 = Object.assign({}, person)
const person3 = Object.assign({}, person, {
  featurs: 'test without two'
})
// console.log('person2', person2);
// console.log('person', person);