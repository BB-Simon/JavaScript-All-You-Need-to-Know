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
// var name = "simon" + " " + "Chowdery"; // String concatanation
// console.log(name);

// Strings Can be Objects
// var x = "simon";
// var y = new String("simon");
// typeof x will return string
// typeof y will return object

// *******************************************
// *** String Metheds In JS ***
// *******************************************
