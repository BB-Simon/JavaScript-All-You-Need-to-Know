// ###########################################################################
// ####################JavaScript first steps############################
// ###########################################################################
// *******************************************
// *** a Brif Introduction of Java Script ***
// *******************************************
// @JavaScript (JS): is a lightweight, interpreted, or just-in-time compiled
// programming language with first-class functions.
// JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic
// language, supporting object-oriented, imperative, and declarative
// (e.g. functional programming) styles.

// *******************************************
// *** Data Types In JS ***
// *******************************************
// There is two types of data in js:
// @Primitives => string, number, boolean, undifind, null, bigInt, Symble
// @Object     => Object, map, weakMap, set, weakSet, Array, function
// And Array is a special type of Object

// *******************************************
// *** Variables In JS ***
// *******************************************
// JavaScript variables are containers for storing data values.

// var x = 5;
// var y = 6;
// var z = x + y;

// @variable Declaration
// var x;

// @variable Assignment
// var x = 10;

// @variable Re-Declaration
// var x;

// @variable Re-Assignment
// x = 9;

// @Variable Scopes =>
// Scope of a variable is the part of the program from where the variable may directly be accessible.
// In JavaScript, there are two types of scopes:

// Global Scope – Scope outside the outermost function attached to Window.
// Local Scope – Inside the function being executed.

// let globalVar = "This is a global variable";

// function fun() {
//   let localVar = "This is a local variable";

//   console.log(globalVar);
//   console.log(localVar);
// }

// fun();

// *******************************************
// *** Strings In JS ***
// *******************************************
// JavaScript's String => type is used to represent textual data. It is a set
// of "elements" of 16-bit unsigned integer values, The first element is at index 0,
// the next at index 1, and so on, JavaScript strings are immutable

// var name1 = "Simon"; // Double quotes
// var name2 = "Simon"; // Single quotes
// var answer1 = "It's alright"; // Single quotes inside Double quotes
// var answer2 = 'It is "alright"'; // Double quotes inside Single quotes
// var answer1 = "It's alright"; // Escaping with backslash
// var answer2 = 'It is "alright"'; // Escaping with backslash
// var name = "simon" + " " + "Chowdery"; // String concatenation
// console.log(name);

// Strings Can be Objects
// var x = "simon";
// var y = new String("simon");
// typeof x will return string
// typeof y will return object

// *******************************************
// *** String Metheds In JS ***
// *******************************************
// var name = "simon chowdery";

// @length property => returns the length of a string:
// name.length // return 5;

// @indexOf => Returns the position of the first occurrence of a substring,
// @Param = Specified letter
// and return -1 if the text is not found
// name.indexOf('m') // returm 2

// @slice() => extracts a part of a string and returns the extracted part in a new string.
// @Param1 = start
// @Param2 = end
// name.slice(0, 8) // return simon ch

// @substring() => Returns the substring at the specified location within a String object.
// @Param1 = start
// @Param2 = end
// name.substring(0, 3) // return sim

// @substr() => Gets a substring beginning at the specified location and having the specified length.
// @Param1 = from
// @Param2 = length
// name.substr(2, 4); return mon

// @replace() => Replaces text in a string, using a regular expression or search string.
// @Param1 = searchValue: string | RegExp
// @Param2 = replaceValue: string
// name.replace("chowdery", "Sorkar") // return Simon Sorkar

// @toUpperCase() => Converts all the alphabetic characters in a string to uppercase.
// name.toUpperCase()

// toLowerCase() => Converts all the alphabetic characters in a string to lowercase.
// name.toLowerCase()

// @concat() => joins two or more strings:
// var fName = "simon";
// var lName = "Chowdery";
// fName.concat(lName)

// @trim() => Removes the leading and trailing white space and line terminator characters from a string.
// var str = "          hello    world           "
// str.trim();

// @charAt() => Returns the character at the specified index
// name.charAt(2);

// @split() => Split a string into substrings using the specified separator and return them as an array.
// @Param1 => separator: string | RegExp
// @Param2 => limit?: number
// name.split("", 4);

// @ [] => Property Accessor
// name[3]

// *******************************************
// ************* Numbers In JS ***************
// *******************************************
// JavaScript has only one type of number. Numbers can be written with or without decimals.
// var x = 3.14;    // A number with decimals/Floating point number
// var y = 3;       // A number without decimals/Integer

// JavaScript will try to convert strings to numbers in all numeric operations -except plus(+)-:
// all bellow are valid
// var x = "100"
// var y = "10"
// console.log(x - y); // output:90
// console.log(x * y); // output:1000
// console.log(x / y); // output:10
// // but
// console.log(x + y); // output:10010 coz strings are concatenated.
// var x = 10;
// var y = 20;
// var z = "30";
// console.log(x + y + z); // output: 3030, Here x and y are added as number than that result and string concatenated

// @Division by 0 (zero) also generates Infinity:
// var x =  2 / 0; // output: Infinity
// var y = -2 / 0; // output: -Infinity
// ****@Infinity is a number: typeof Infinity returns number.

// *****************@Numbers Can be Objects*****************
// var x = 123; // typeof x returns number
// var y = new Number(123); // typeof y returns object
// (x == y) is true because x and y have equal values
// (x === y) is false because x and y have different types
// var x = new Number(500);
// var y = new Number(500);
// (x == y) is false because objects cannot be compared

// **************************************************
// ************* Number Methods In JS ***************
// **************************************************
// var x = 9.656;
// var y = 20;

// @toString() => method returns a number as a string
// x.toString()

// @toFixed() => Returns a string representing a number in fixed-point notation.
// @param fractionDigits => Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
// x.toFixed(0); // returns 10
// x.toFixed(2); // returns 9.66
// x.toFixed(4); // returns 9.6560
// x.toFixed(6); // returns 9.656000

// @valueOf() => Returns the primitive value of the specified object.
// x.valueOf(); // returns 9.656

// @parseInt() => Converts a string to an integer.
// @param s => A string to convert into a number.
// var x = "10"
// parseInt(x)

// @parseFloat() => Converts a string to a floating-point number.
// @param string — A string that contains a floating-point number.
// parseFloat(x)

// @NaN is a JavaScript reserved word indicating that a number is not a legal number.
// Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):
// var x = 100 / "Apple";  // x will be NaN (Not a Number)

// **************************************************
// ************* @Boolean In JS ***************
// **************************************************
// JavaScript has a Boolean data type. It can only take the values true or false.
// var a = true
// var b = false
// var c = Boolean(true)
//***************@falsy values: "", 0, null, undefined, NaN *****************
// console.log('');
// console.log(NaN); // when we don't use Boolean constructor, compiler wil convert it to Boolean automitally
// console.log(Boolean(''));
// console.log(Boolean(NaN));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(0))

// *******************************************************
// ************* @null vs @undefined In JS ***************
// *******************************************************
// @null represents the intentional absence of any object value. It is one of JavaScript's
// primitive values and is treated as falsy for boolean operations.
//  variable without a value, has the value @undefined. The type is also @undefined.

// typeof null          // "object" (not "null" for legacy reasons)
// typeof undefined     // "undefined"
// null === undefined   // false
// null  == undefined   // true
// null === null        // true
// null == null         // true
// !null                // true
// isNaN(1 + null)      // false
// isNaN(1 + undefined) // true

// *******************************************************
// ************* @Operators In JS ***************
// *******************************************************
// @Arithmetic Operators
// + =>   Addition
// - =>   Subtraction
// * =>   Multiplication
// ** =   Exponentiation
// / =>   Division
// % =>   Modolus(Division Remainder)
// ++ =   Increment
// -- =   Decrement

// @Assignment Operators
//  =     => x = 10
// +=     => x = x + 10
// -=     => x = x - y
// *=     => x = x * y
// /=     => x = x / y
// %=     => x = x % y
// **=    => x = x ** y

// @Comparison Operators
// ==     => equal to
// ===    => equal vale & equal type
// !=     => not equal to
// !==    => not equal value or not equal type
// >      => greater than
// <      => less than
// >=     => grater than or equal to
// <=     => less than or equal to
// ?      => ternary operator

// @Logical Operators
// &&     => logical and
// ||     => logical or
// !      => logical not

// @Type Operators
// typeof => Returns the type of a variable
// instanceof => Returns true if an object is an instance of an object type

// *******************************************************
// ************* @Math Object In JS ***************
// *******************************************************

// @Math.PI => TReturns the ratio of the circumference of a circle to its diameter.
// Math.PI;

// @Math.pow => Returns the value of a base expression taken to a specified power
// @param x — The base value of the expression.
// @param y — The exponent value of the expression
// var x = 10
// var y = 5
// Math.pow(x, y); // (10 * 10 * 10 * 10 * 10) = 100000

// @Math.sqrt() => Returns the square root of a number.
// @param x — A numeric expression.
// var x = 25
// console.log(Math.sqrt(x));

// Math.abs() => returns the absolute (positive) value of x
// @param x — A numeric expression/;
// var x = -5
// Math.abs(x); // output is: 5

// @Math.round() => Returns a supplied numeric expression rounded to the nearest integer
// @param x — The value to be rounded to the nearest integer.
// Math.round(4.7);    // returns 5
// Math.round(4.4);    // returns 4

// @Math.floor() => returns the value rounded down to its nearest integer.
// @param x — A numeric expression.
// Math.floor(2.9) // 2;

// @Math.ceil() => returns the value rounded up to its nearest integer.
// @param x — A numeric expression.
// Math.ceil(2.1); // 3;

// @Math.random() => Returns a random number between 0 and 1.
// Math.random()

// Math.random() used with Math.floor() can be used to return random integers.
// Math.floor(Math.random() * 10); // returns a random integer from 0 to 9
// Math.floor(Math.random() * 10) + 1;  // returns a random integer from 1 to 10

// function randomRange(myMin, myMax) {
//   console.log("minmax", myMax - myMin + 1);
//   console.log(Math.floor(Math.random() * (myMax - myMin + 1)) + myMin);
//   return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
// }
// randomRange(1, 500)
// *******************************************************
// ************* @Date Object In JS ***************
// *******************************************************
// const date = new Date()
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toTimeString());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleString());
// console.log(date.toLocaleTimeString());

// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getTime());

// console.log(date.getMinutes());
// console.log(date.getHours());
// console.log(date.getMilliseconds());
// console.log(date.getSeconds());
// console.log(date.getDay());

// *******************************************************
// ************* @Array In JS ***************
// *******************************************************
// *********@Arrays are a special type of objects*********
// JavaScript arrays are used to store multiple values in a single variable
// @Array Creation/Syntax: there are tree ways to define an array =>
// First: var arr = []
// Second: var arr = Array(1, 2, 3, 4)
// Third: var arr = new Array()
// var arr = [1, 2, 3, 4, 5]

// @Accessing Array: remeber array is number based index and object is name bassed index
// arr[0] // returns 1
// arr[1] // returns 2
// arr[arr.length -1]; // the last element, returns 5
// arr[1] = 12 // modifies the element and returns 12

// @Recognizing an array
// var a = [];
// var b = {};
// typeof a; // returns Object
// a instanceof Array; // returns true
// b instanceof Array; // returns false
// Array.isArray(a) // returns true
// Array.isArray(b) // returns false

// *******************************************************
// ************* @Array Methods In JS ***************
// *******************************************************
// var arr = ["simon", "jimon", 1, 2, true];

// @toString() => converts an array to a string of (comma separated) array values.
// arr.toString()

// @join() => convert elements of an array separated by the specified separator to string.
// @param separator — a string specifies separator
// arr.join("*") // return simon*jimon*1*2*true

// @push() => Appends new elements to an end of array, and returns the new length of the array
// @param items — New elements of the Array.
// arr.push(2);

// @pop() => Removes the last element from an array and returns it
// arr.pop()

// @shift() => Removes the first element from an array and returns it.
// arr.shift()

// @unshift() => Inserts new elements at the start of an array.
// @param items — Elements to insert at the start of the Array.
// arr[0]; // returns simon
// arr.unshift("Jonh")
// arr[0]; // returns jonh

// @splice() => Removes elements from an array and, if necessary, inserts new elements in their place,
//              returning the deleted elements.
// @param1 start — The zero-based location in the array from which to start removing elements.
// @param2? deleteCount — The number of elements to remove.
// @param3? items — Elements to insert into the array in place of the deleted elements.
// arr.splice(2, 1, "Takmina")

// @concat() => Combines two or more arrays and returns a new array.
// @param items — Additional items to add to the end of array1.
// var arr2 = [6, , 7, 8];
// var arr3 = [9, , 10, 11];
// var arr4 = arr.concat(arr2, arr3, "Souvo");
// console.log(arr4); // output: [ 'simon', 'jimon', 1, 2, true, 6, , 7, 8, 9, , 10, 11, 'Souvo' ]

// @slice() => slices out a piece of an array into a new array.
// @param start — The beginning of the specified portion of the array.
// @param end — The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
// var slicedArr = arr.slice(2, 4);
// console.log(slicedArr); // output: [1, 2]

// @entries() => Returns an iterable of key, value pairs for every entry in the array
// for (x of arr.entries()) {
//   console.log(x); // output: [ 0, 'simon' ] [ 1, 'jimon' ][2, 1][3, 2][4, true]
// }

// @keys() => returns an Array Iterator object with the keys of an array.
// var myKeys = arr.keys();
// for(key of myKeys){
//     console.log(key);
// }

// @values() => Returns an iterable of values in the array
// var myValues = arr.values()
// for(value of myValues){
//     console.log(value);
// }

// @Array.from() => Creates an array from an iterable object.
// @param iterable — An iterable object to convert to an array.
// var arr2 = Array.from("simon")
// console.log(arr2);

// @includes() => Determines whether an array includes a certain element, returning true or false as appropriate.
// arr.includes("jimon")

// num = [100, 21, 3, 45, 8, 90, 6, -12, -20, 1]
// num.sort();
// num.reverse()
// console.log(num);

// *******************************************************
// ************* @Array traversing In JS ***************
// *******************************************************
// var numbers = [1, 2, 3, 4, 5, 6];
// var str = ""
// for(var i = 0; i < numbers.length; i++){
//     str += numbers[i]
// }
// console.log(str);

// var num = []
// for(var i = 0; i < numbers.length; i++){
//     num.push(numbers[i])
// }
// console.log(num);

// var arr = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
// ];

// for (var i = 0; i < arr.length; i++) {
//   for (var j = 0; j < arr[i].length; j++) {
//     console.log("Index: " + i + " = " + arr[i][j]);
//   }
// }

// @forEach() => Performs the specified action for each element in an array.
// @param callbackfn — A function that accepts up to three arguments,
//                     forEach calls the callbackfn function one time for each element in the array.
// numbers.forEach((value, index, arr) => console.log(value, index, arr))
// let b = numbers.forEach(value => value)
// console.log(b);

// @map() => Calls a defined callback function on each element of an array,
//           and returns an array that contains the results.
// @param callbackfn — A function that accepts up to three arguments. The map
// method calls the callbackfn function one time for each element in the array
// numbers.map((value, index, arr) => console.log(value, index, arr))
// let a = numbers.map((value) => value);
// console.log(a);

// @filter() => Returns the elements of an array that meet the condition specified in a callback function.
// var filteredArray = arr.filter(item => item !== "jimon")
// console.log(filteredArray); // output: [ 'simon', 1, 2, true ]

// @reduce() => Calls the specified callback function for all the elements in an array.
//              The return value of the callback function is the accumulated result
// var numbers = [1, 2, 3, 4, 5, 6]
// var sum = numbers.reduce((a, b, index)=> {
//     return a + b
// }, 4)
// console.log(sum);

// @every() => Determines whether all the members of an array satisfy the specified test and returns boolean
// var ages = [18, 55, 54, 32, 32, 22];
// var checkAge =  ages.every(age =>(
//     age >=18
// ))
// if(checkAge){
//     console.log("all are qualified");
// } else {
//     console.log("Opps! there is someone not adult");
// }

// @find() => Returns the value of the first element in the array where predicate is true, and undefined otherwise.
// var getFirstElement = ages.find((age) => age >= 18);
// console.log(getFirstElement) // output: 18

// @some() => Checks if any of the elements in an array pass a test and returns boolean
// var ages = [2, , 3, 4, 6, 7, 18];
// var checkAny = ages.some((age) => age >= 18);
// console.log(checkAny);

// @findIndex() => Returns the index of the first element in the array where predicate is true, and -1 otherwise.
// var ages = [2, 3, 4, 6, 7, 18];
// var indexNum = ages.findIndex((age) => age >= 5);
// console.log(indexNum);

// @indexOf() => Returns the index of the first occurrence of a value in an array.
// @param1 searchElement - The item to search for
// @param2? fromIndex — The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
// arr.indexOf("jimon");
// arr.indexOf("jimon", 1);

// *****************Prblem solving with array********************//
// Task: remove the |3|from all nasted arrays
function filteredArray(arr, elem) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr = [];
    // console.log('indexi' ,arr[i]);
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] !== 3) {
        //   console.log("c", arr[i][j]);
        newArr.push(2, 3, 4,5);
      }
    }
  }
  return newArr;
}

console.log(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9],
    ],
    3
  )
);

// *******************************************************
// ************* @Object In JS ***************
// *******************************************************
// Setup
// var recordCollection = {
//   2548: {
//     albumTitle: "Slippery When Wet",
//     artist: "Bon Jovi",
//     tracks: ["Let It Rock", "You Give Love a Bad Name"],
//   },
//   2468: {
//     albumTitle: "1999",
//     artist: "Prince",
//     tracks: ["1999", "Little Red Corvette"],
//   },
//   1245: {
//     artist: "Robert Palmer",
//     tracks: [],
//   },
//   5439: {
//     albumTitle: "ABBA Gold",
//   },
// };

// Only change code below this line
// function updateRecords(records, id, prop, value) {
//   if (prop !== "tracks" && value !== "") {
//     records[id][prop] = value;
//   } else if (prop === "tracks" && !records[id].hasOwnProperty(prop)) {
//     records[id][prop] = [value];
//   } else if (
//     prop === "tracks" &&
//     value !== "" &&
//     records[id].hasOwnProperty(prop)
//   ) {
//     records[id][prop].push(value);
//   } else if (value === "") {
//     delete records[id].prop;
//   }
//   console.log(records);
// }

// updateRecords(recordCollection, 2548, "artist", "");

// Setup
// var contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

// function lookUpProfile(name, prop) {
//   for (var i = 0; i < contacts.length; i++) {
//     if (contacts[i].firstName === name) {
//       if (prop in contacts[i]) {
//         return contacts[i][prop];
//       } else {
//         return "No such property";
//       }
//     }
//   }
//   return "No such contact";
// }

// lookUpProfile("Akira", "likes");

// *******************************************************
// ************* @Recursion In JS ***************
// *******************************************************

// function multiply(arr, n) {
//   var product = 1;
//   for (var i = 0; i < n; i++) {
//     product *= arr[i];
//   }
//   return product;
// }

// let total = multiply([2, 3, 4, 56], 4);
// console.log(total);

// function multiply(arr, n) {
//   if (n <= 0) {
//     return 1;
//   } else {
//     return multiply(arr, n - 1) * arr[n - 1];
//   }
// }
// let total = multiply([2, 3, 4, 56], 4);
// console.log(total);

// count down
// function countDown(n) {
//   for (var i = n; i > 0; i--) {
//     console.log(i);
//   }
//   console.log("done");
// }
// countDown(3)

// function countDownRecursive(n){
//   if(n <= 0){
//     console.log("done");
//     return
//   }
//   console.log(n);
//   countDownRecursive(n -1)
// }
// countDownRecursive(3)

// Sum Range
// function sumRange(n) {
//   let total = 0;
//   for (var i = n; i > 0; i--) {
//     console.log(i);
//     total += i;
//   }
//   console.log(total);
//   return total;
// }
// sumRange(3)

// function sumRangeRecursive(n, total = 0){
//   if(n <= 0){
//     console.log(total);
//     return total;
//   }
//   console.log("total => ", total);
//   console.log("n => ", n);
//   return sumRangeRecursive(n - 1, total + n);
// }
//  sumRangeRecursive(3)

//  Multiply an array
// function multiply(arr, n) {
//   if (n <= 0) {
//     return 1;
//   }
//   console.log(n);
//   return multiply(arr, n - 1) * arr[n - 1];
// }
// let m = multiply([1, 2, 3], 3);
// console.log("returned valu", m);

// Actual need for recursive functions

// const parent = {
//   name: "John",
//   children: [
//     {
//       name: "Doe",
//       children: [],
//     },
//     {
//       name: "Smith",
//       children: [
//         {
//           name: "kayle",
//           children: [],
//         },
//         {
//           name: "Shofia",
//           children: [],
//         },
//       ],
//     },
//   ],
// };

// function printChildren(){
//   ???
// }

// function printChildrenRecursive(p) {
//   if (p.children.length === 0) {
//     return;
//   }
//   p.children.forEach((child) => {
//     console.log(child.name);
//     printChildrenRecursive(child);
//   });
// }
// printChildrenRecursive(parent);
