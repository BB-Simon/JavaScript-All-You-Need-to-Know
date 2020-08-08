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
