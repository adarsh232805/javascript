// function hosting is defined as 
// the behavior of moving function declarations to the top of their scope
function myFunction() {
    console.log("Hello, World!");
}
myFunction();
// In JavaScript, function declarations are hoisted to the top of their containing scope, which means you can call the function before it is defined in the code.

// However, function expressions are not hoisted. If you try to call a function expression before it is defined, you will get an error.
// For example:
var myFunctionExpression = function() {
    console.log("Hello, World!");
};
myFunctionExpression();
//output: Hello, World!


// variable declarations are also hoisted to the top of their scope, but only the declaration is hoisted, not the initialization. This means that if you try to access a variable before it is initialized, you will get undefined.
// For example:
console.log(myVariable); // undefined
var myVariable = "Hello, World!";
console.log(myVariable); // "Hello, World!"
// output: undefined


// In summary, function declarations are hoisted to the top of their scope, while function expressions and variable initializations are not. This can lead to unexpected behavior if you are not aware of how hoisting works in JavaScript.

// it is only possible in var keyword, let and const are not hoisted in the same way as var. Variables declared with let and const are hoisted to the top of their block scope, but they are not initialized until the code execution reaches their declaration. This means that if you try to access a let or const variable before it is declared, you will get a ReferenceError.
// For example:
console.log(myLetVariable); // ReferenceError: Cannot access 'myLetVariable' before initialization
let myLetVariable = "Hello, World!";
console.log(myLetVariable); // "Hello, World!"
// output: ReferenceError: Cannot access 'myLetVariable' before initialization