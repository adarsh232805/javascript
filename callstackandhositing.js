//hoisting is defined as the default behavior of moving all the declarations at the top of the current scope (to the top of the current script or the current function). In JavaScript, hoisting allows you to use functions and variables before they are declared in the code.

//Example of hoisting with variables
console.log(x); // Output: undefined
var x = 5;
// In this example, the declaration of the variable x is hoisted to the top of the scope, but its assignment (x = 5) is not. Therefore, when we try to log x before it is assigned a value, it returns undefined instead of throwing an error.
//Example of hoisting with functions
hoistedFunction(); // Output: "This function is hoisted!"
function hoistedFunction() {
    console.log("This function is hoisted!");
} 
// In this example, the entire function declaration of hoistedFunction is hoisted to the top of the scope. Therefore, we can call the function before it is defined in the code, and it will execute without any issues. The output will be "This function is hoisted!".

//Example of hoisting with function expressions
console.log(hoistedFunctionExpression); // Output: undefined
var hoistedFunctionExpression = function() {
    console.log("This function expression is hoisted!");
};
hoistedFunctionExpression(); // Output: "This function expression is hoisted!"
// In this example, the declaration of the function expression hoistedFunctionExpression is hoisted to the top of the scope, but its assignment is not. Therefore, when we try to log it before it is assigned a value, it returns undefined. However, after the assignment, we can call the function without any issues.

