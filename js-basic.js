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
