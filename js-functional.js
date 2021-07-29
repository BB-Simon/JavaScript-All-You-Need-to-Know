// function greeting(greet, name) {
//   document.write(greet + " " + name);
// }
// greeting("Hello", "Simon");

// ***************Twinkle Cats , Lecture -2***********
// ***************first class function****************
// ***************************************************
// function sayName(name) {
//   return "Hello, " + name;
// }

//Today's topic
// 1.A function can be stored in a variable
// var hello = sayName;
// var fun = sayName('Simon');

// document.write(hello)
// document.write(fun)

//
// var anotherHello = hello;
// document.write(anotherHello("simon"));

//2. A function can be stored in a array
// var arr = [1, 2, 3, 4, sayName];
// arr.push(hello);
// console.log(arr);

//3. A function can be stored as an oject field or property
// var person = {
//   name: "Simon",
//   sayName: hello,
//   print: function() {
//     console.log("Hi, How are you?");
//   }
// };

// console.log(person.print);

// 4. We create a function as nedded
// var sum =
//   10 +
//   (function() {
//     return 20;
//   })();
// console.log(sum);

//5. We can pass function as argument
// function wow(name, fun) {
//   return fun(name);
// }
// var result = wow("Simon", sayName);
// console.log(result);

//6. We can return a function from another function
// function bass(b) {
//   return function(n) {
//     var result = 1;
//     for (var i = 0; i < b; i++) {
//       result *= n;
//     }
//     return result;
//   };
// }

// var power = bass(2);
// var result = power(10);
// console.log(result);
// var result = bass(2)(10);
// document.write(result);

// *********** for loop concept *********
// // for (var i = 1; i <= 100; i++) {
// //     if(i % 2 === 1) {
// //         document.write(i + "_Simon" + "<br>");
// //     }

// // }

// // var sum = 2;
// // for (var i = 0; i <= 10; i++) {
// //   document.write(sum + " + " + i + " = " + (sum + i) + "<br>");
// //   sum += i;
// // }
// // document.write('result = ' + sum + "<br>");

// ***************Twinkle Cats , Lecture -3***********
// *************** Todays topic= Inner function ******
// ***************************************************
// function outer() {
//   var a = 12 + 10;
//   function inner() {
//     document.write("am from inner function" + "<br>");
//   }
//   inner();
//   document.write("am from outer functon" + a);
// }
// outer();

// function add(a, b) {
//   function sum() {
//     return a + b;
//   }
//   function sub() {
//     return a - b;
//   }
//   function times() {
//     return a * b;
//   }
//   function div() {
//     return a / b;
//   }
//   return sum() + sub() + times() + div();
// }

// var result = add(5, 5)
// document.write(result)

// ****************Twinkle cats , Lecture _4*************************
// ****************todays topic = Return Statment********************

// function name(fName, lName, gender) {
//   var output;
//   if (gender === "male") {
//     output = "Mr, " + fName + " " + lName;
//   } else if (gender === "female") {
//     output = "Ms, " + fName + " " + lName;
//   }

//   return output;
// }

// var fullName = name("BB", "Simon", "male");
// document.write(fullName);

// function example() {
//   return {
//     name: "Simon",
//     age: 24,
//     skills: ["java", "python", "php"],

//     print: function() {
//       document.write(this.name, this.age, this.skills);
//     }
//   };
// }

// var obj = example()
// obj.print();

// ****************Twinkle cats , Lecture _5*********************
// ****************todays topic = Higher Oeder Function**********

// var arr = [1, 2, 3, 4, 5];
// function cbf(a) {
//   document.write(a + "<br>");
// }
// arr.forEach(function(a) {
//   document.write(a + '<br>')
// });

// function caller(name) {
//   return function () {
//     return "caller calling you " + name;
//   };
// }
// var x = caller()
// var y = x('Simon')

// var a = caller('Simon')();
// document.write(a);

// *******************Twinkle cats , Lecture _6*********************
// *******************todays topic = Call Back Function*************
// *****************************************************************
// function hello(name) {
//   print(name + "<br>");
//   print("Simon" + "<br>");
// }

// function print(args) {
//   document.write(args);
// }

// hello("Jimon");

// function hello(name, print) {
//   print(name);
// }
// hello('Simon', print);
// function print(args) {
//     document.write(args)
// }
// hello("Simon", function(name) {
//   document.write("hello " + name + "<br>");
// });
// hello("Jimon", function(name) {
//   document.write("hi, how are you " + name + " ? <br>");
// });
// hello("Zannat", function(name) {
//   document.write("Length of " + name + " is = " + name.length);
// });
// var me = {
//   name: "Simon",
//   age: 15,
//   email: "sksimonkabir@gmail.com"
// };

// function printMySelf(person, callback) {
//   document.write("Person: " + person.name + " (" + person.age + ") <br>");
//   if (person.age >= 18) {
//     callback(person.email);
//   } else {
//       document.write('You are too small')
//   }
// }
// printMySelf(me, function(email) {
//   document.write("Email sent to " + email);
// });

// function print(data, callback1, callback2) {
//   document.write("Orginal data: " + data + '<br>');
//   callback1(data);
//   callback2(data);
// }

// print(
//   "Simon",
//   function(data) {
//     var data = data.toUpperCase();
//     document.write("Uppercase: " + data + '<br>');
//   },
//   function(data) {
//     var data = data.toLowerCase();
//     document.write("Lowercae: " + data + '<br>');
//     document.write("Length: " + data.length);
//   }
// );

// *******************Twinkle cats , Lecture _7****************
// *******************todays topic = Call Back Function********
// ************************************************************
// function host() {
//   document.write("I am host function <br>");
//   return function() {
//     document.write("I am child");
//   };
// }

// var a = host();
// a();
// function greeting(msg) {
//   return function(name) {
//     document.write(msg + " " + name);
//   };
// }

// function greeting(msg) {
//     function ret(name) {
//         document.write(msg + ' ' + name)
//     }
//     return ret;
// }

// var good = greeting("Good Morning");
// var hello = greeting("Hello");
// hello("Simon <br>");
// good("Zannat");
// *************Twinkle cats , Lecture _8***************
// *************todays topic = Call Back Function*******
// *****************************************************
// var name = "Simon";
// function sayName() {
//   console.log("Hello " + name);
// }
// console.dir(sayName);
// sayName();

// function greeting(msg) {
//     return function(name) {
//         console.log(msg + ' ' + name);
//     }
// }
// var hello = greeting('Hello')
// hello('Simon')
// ******************Twinkle cats , Lecture _9*********************
// ******************todays topic = Call Back Function*************
// ****************************************************************
// var arr = [23, 42, 59, 12, 43, 56, 32, 45, 9, 10, 4];
// arr.sort(function(a, b) {
//   return a - b;
// });
// document.write(arr);

// var peole = [
//   { name: "Simon", age: 24 },
//   { name: "Jimon", age: 22 },
//   { name: "Takmina", age: 19 },
//   { name: "Souvo", age: 6 },
//   { name: "Zannat", age: 5 },
//   { name: "Mr, X", age: 50 },
//   { name: "Mr, Y", age: 53 }
// ];

// // peole.sort(function(a, b) {
// //   return b.age - a.age;
// // });
// peole.sort(function(a, b) {
//   if (a.name > b.name) {
//     return 1;
//   } else if (a.name < b.name) {
//     return -1;
//   } else {
//     return 0;
//   }
// });
// console.log(peole);

// ******************Twinkle cats , Lecture _10************
// ******************todays topic = forEach Method*********
// ********************************************************
// var arr = [12, 34, 5, 67, 5, 45, 23];

// arr.forEach(function(element, index, arr) {
//   document.write(
//     "Element is: " + element + "Index is: " + index + "array is" + arr + "<br>"
//   );
// });
// function loop(arr, callback) {
//   for (var i = 0; i < arr.length; i++) {
//     callback(arr[i], i, arr);
//   }
// }
// loop(arr, function(element, dex, arr) {
//   document.write(
//     "Element is: " + element + "<br> index is " + dex + "<br> array is " + arr + "<br>"
//   );
// });
// ****************Twinkle cats , Lecture _11********************
// ****************todays topic = filter Method******************
// ***************************************************************
// var arr = [12, 34, 5, 67, 5, 45, 23];
// var newArr = []
// for (var i = 0; i < arr.length; i++) {
//     if(arr[i]%2 == 1) {
//         newArr.push(arr[i])
//     }
// }
// document.write(newArr)

// var newArr = arr.filter(function(a) {
//   return a % 2 == 1;
// });
// document.write("New array is " + newArr);

// function myFun(arr, callback) {
//   var newArr = [];

//   for (var i = 0; i < arr.length; i++) {
//     if (callback(arr[i])) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// var myArr = myFun(arr, function(element) {
//   return element % 2 == 1;
// });
// document.write(myArr);

// *******************Twinkle cats , Lecture _12******************
// *******************todays topic = map Method*******************
// ***************************************/***********************
// var arr = [2, 3, 5, 6, 8, 9, 10];
// var mapedArr = [];

// // for (var i = 0; i < arr.length; i++) {
// //   mapedArr.push(arr[i] + 2);
// // }

// // document.write(mapedArr)

// // var mapedArr = arr.map(function(value) {
// //   return value * 2;
// // });
// // document.write(mapedArr);
// function myMap(arr, callback) {
//   var newArr = [];
//   for (var i = 0; i < arr.length; i++) {
//     var data = callback(arr[i]);
//     // newArr.push(callback(arr[i]))
//     newArr.push(data);
//   }
//   return newArr
// }
// var myArr = myMap(arr, function(value) {
//   return value + 5 - 2 * 3;
// });
// document.write(myArr)

// *****************Twinkle cats , Lecture _13****************
// *****************todays topic = reduce Method**************
// ***********************************************************
// var arr = [2, 3, 5, 6, 8, 9, 10];
// var sum = 0
// for(var i = 0; i < arr.length; i++) {
//     sum += arr[i]
// }
// document.write(sum)
// var result = arr.reduce(function(a, b) {
//   return a / b;
// });
// document.write(result);

// **********************************************************
// *****************Practicing functional JS**************
// ***********************************************************

// *****************first class function **************
// Functions that can be assigned to a variable, passed into
// another function, or returned from another function just
// like any other normal value, are called first class functions.
// In JavaScript, all functions are first class functions.

// ***************** higher order function **************
// The functions that take a function as an argument, or
// return a function as a return value are called higher order
// functions.

// ***************** lambda function **************
// When functions are passed in to or returned from another
// function, then those functions which were passed in or
// returned can be called a lambda

// var watchList = [
//   {
//     Title: "Inception",
//     Year: "2010",
//     Rated: "PG-13",
//     Released: "16 Jul 2010",
//     Runtime: "148 min",
//     Genre: "Action, Adventure, Crime",
//     Director: "Christopher Nolan",
//     Writer: "Christopher Nolan",
//     Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//     Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//     Language: "English, Japanese, French",
//     Country: "USA, UK",
//     Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     Metascore: "74",
//     imdbRating: "8.8",
//     imdbVotes: "1,446,708",
//     imdbID: "tt1375666",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Interstellar",
//     Year: "2014",
//     Rated: "PG-13",
//     Released: "07 Nov 2014",
//     Runtime: "169 min",
//     Genre: "Adventure, Drama, Sci-Fi",
//     Director: "Christopher Nolan",
//     Writer: "Jonathan Nolan, Christopher Nolan",
//     Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//     Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     Language: "English",
//     Country: "USA, UK",
//     Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//     Metascore: "74",
//     imdbRating: "8.6",
//     imdbVotes: "910,366",
//     imdbID: "tt0816692",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "The Dark Knight",
//     Year: "2008",
//     Rated: "PG-13",
//     Released: "18 Jul 2008",
//     Runtime: "152 min",
//     Genre: "Action, Adventure, Crime",
//     Director: "Christopher Nolan",
//     Writer:
//       "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//     Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//     Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//     Language: "English, Mandarin",
//     Country: "USA, UK",
//     Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//     Metascore: "82",
//     imdbRating: "9.0",
//     imdbVotes: "1,652,832",
//     imdbID: "tt0468569",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Batman Begins",
//     Year: "2005",
//     Rated: "PG-13",
//     Released: "15 Jun 2005",
//     Runtime: "140 min",
//     Genre: "Action, Adventure",
//     Director: "Christopher Nolan",
//     Writer:
//       "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//     Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//     Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//     Language: "English, Urdu, Mandarin",
//     Country: "USA, UK",
//     Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//     Metascore: "70",
//     imdbRating: "8.3",
//     imdbVotes: "972,584",
//     imdbID: "tt0372784",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Avatar",
//     Year: "2009",
//     Rated: "PG-13",
//     Released: "18 Dec 2009",
//     Runtime: "162 min",
//     Genre: "Action, Adventure, Fantasy",
//     Director: "James Cameron",
//     Writer: "James Cameron",
//     Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//     Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//     Language: "English, Spanish",
//     Country: "USA, UK",
//     Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//     Metascore: "83",
//     imdbRating: "7.9",
//     imdbVotes: "876,575",
//     imdbID: "tt0499549",
//     Type: "movie",
//     Response: "True",
//   },
// ];

// // Only change code below this line

// var ratings = [];
// for (var i = 0; i < watchList.length; i++) {
//   ratings.push({
//     title: watchList[i]["Title"],
//     rating: watchList[i]["imdbRating"],
//   });
// }

// // Only change code above this line

// console.log(JSON.stringify(ratings));

function checkName(name){
  if(name === "Simon"){
    console.log(`Hello ${name}`);
  }
  console.log('Hello There!');
}
