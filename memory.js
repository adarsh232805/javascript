//stack and heap memory are two types of memory used in programming languages to store data. Stack memory is used for storing local variables and function calls,
//  while heap memory is used for storing objects and dynamic data.
//  In JavaScript, primitive data types such as numbers, strings, and booleans are stored in stack memory,
//  while objects and arrays are stored in heap memory. 
// The stack memory is managed automatically by the JavaScript engine,
//  while the heap memory is managed by the garbage collector.


//for example, consider the following code:
let x = 10;
console.log(x);

//explaination: In this example, we define a variable x and assign it the value 10. The variable x is stored in stack memory because it is a primitive data type. When we log the value of x to the console, it will print 10.

//for example, consider the following code:
let obj = { name: "Alice", age: 30 };
console.log(obj);
//explaination: In this example, we define a variable obj and assign it an object with properties name and age. The variable obj is stored in heap memory because it is an object. When we log the value of obj to the console, it will print the object.