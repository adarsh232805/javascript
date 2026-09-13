// call stack defined as the mechanism that keeps track of function calls in a program. It is a stack data structure that follows the Last In, First Out (LIFO) principle. When a function is called, it is added to the top of the call stack, and when the function completes its execution, it is removed from the stack.
// The call stack is used to keep track of the order in which functions are called and to manage the execution context of each function. Each time a function is called, a new execution context is created and pushed onto the call stack. When the function completes, its execution context is popped off the stack, and control is returned to the previous function in the stack.
//in simple terms, the call stack is like a stack of plates. When you add a new plate to the top of the stack, it goes on top of the previous plates. When you remove a plate from the top of the stack, it is the last plate that was added. Similarly, when a function is called, it is added to the top of the call stack, and when it completes, it is removed from the top of the stack.
// for example, consider the following code:
function firstFunction() {
    console.log("First function called");
    secondFunction();
    console.log("First function completed");
}

function secondFunction() {
    console.log("Second function called");
    console.log("Second function completed");
}

firstFunction();

