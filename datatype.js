// var vs let
// var age=25;
// if(true){
//     console.log(age);
// }
//redefination and redeclaration of var is possible



// let variable
// redefination and redeclaration of let is not possible
//block scope
{
let age=25;
console.log(age);
}
// dynamically typed language
let name='adarsh';
name=29;
console.log(name);
 

//const variable
// const variable cannot be reassigned and redeclared
const pi=3.14;
// pi=3.1415; // error
// const pi=3.1415; // error
console.log(pi);

// variable naming conventions
// 1. variable names can contain letters, digits, underscores, and dollar signs
// 2. variable names must begin with a letter, underscore, or dollar sign
// 3. variable names are case sensitive
// 4. variable names cannot be reserved keywords
//5.variable names should camelCase

// example of variable naming conventions
let firstName='adarsh';
let lastName='kumar';
console.log(firstName);
console.log(lastName);
// reversed keywords example
// let var=10; // error
// let function=20; // error



//Data types in JavaScript
// 1. Primitive data types
// a. String deal with text data and are enclosed in single quotes, double quotes, or backticks
// b. Number deal with integer and decimal number
// c. Boolean deal with true and false values
// d. Undefined deal with variables that are declared but not assigned a value
// e. Null deal with variables that are explicitly assigned a null value
// f. Symbol deal with unique identifiers
// g. BigInt deal with large integers

let marks=85;
console.log(marks);

let name1='adarsh';
console.log(name1);

marks=true;
console.log(marks);

let undefinedVariable;
console.log(undefinedVariable);

let age=null;
console.log(age);

//find the data type of the variables
console.log(typeof marks);
console.log(typeof name1);
console.log(typeof undefinedVariable);
console.log(typeof age);

//symbol data type is used to create unique identifiers. Each time you create a symbol, it is guaranteed to be unique, even if it has the same description as another symbol. Symbols are often used as keys in objects to avoid name collisions.

let sym1=Symbol('sym1');
let sym2=Symbol('sym2');
console.log(sym1);
console.log(sym2);
console.log(typeof sym1);
console.log(typeof sym2);

