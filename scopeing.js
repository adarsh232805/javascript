// scoping is defined as the accessibility of variables, functions, and objects in some particular part of your code during runtime. In JavaScript, there are two types of scope: global scope and local scope.
// Global scope refers to variables that are accessible from anywhere in your code, while local scope refers to variables that are only accessible within a specific function or block of code.
// For example, consider the following code:
var globalVariable = "I am a global variable";
function myFunction() {
    var localVariable = "I am a local variable";
    console.log(globalVariable);
    console.log(localVariable);
}
myFunction();
// output: I am a global variable
//         I am a local variable
// In this example, the globalVariable is accessible from within the myFunction function, while the localVariable is only accessible within the myFunction function. If you try to access the localVariable outside of the myFunction function, you will get an error.
// For example:
console.log(localVariable); // ReferenceError: localVariable is not defined

// In summary, scoping is an important concept in JavaScript that determines the accessibility of variables, functions, and objects in different parts of your code. Understanding scoping is essential for writing efficient and maintainable code.
//block scope is a feature introduced in ES6 that allows variables to be scoped to the block in which they are defined, rather than the function or global scope. This means that variables declared with let and const are only accessible within the block in which they are defined, and not outside of it.
// For example, consider the following code:
function myFunction() {
    if (true) {
        let blockScopedVariable = "I am a block scoped variable";
        console.log(blockScopedVariable);
    }
    console.log(blockScopedVariable); // ReferenceError: blockScopedVariable is not defined
}
// In this example, the blockScopedVariable is only accessible within the if block in which it is defined. If you try to access it outside of the if block, you will get a ReferenceError.  


//function scope is the default scope in JavaScript, where variables are scoped to the function in which they are defined. This means that variables declared with var are accessible within the function in which they are defined, but not outside of it.
// For example, consider the following code:
function myFunction() {
    var functionScopedVariable = "I am a function scoped variable";
    console.log(functionScopedVariable);
}
myFunction();
console.log(functionScopedVariable); // ReferenceError: functionScopedVariable is not defined
// In this example, the functionScopedVariable is only accessible within the myFunction function. If you try to access it outside of the myFunction function, you will get a ReferenceError.
//output: I am a function scoped variable