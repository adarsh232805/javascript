//number
const num1 = 10;
console.log(num1);
console.log(typeof num1);
//output: The output of the code will be 10 and "number".
//  The first console.log statement will print the value of the num1 variable, which is 10. 
// The second console.log statement will print the type of the num1 variable, which is "number".

const num2=new Number(10);
console.log(num2);
console.log(typeof num2);
//output: The output of the code will be 10 and "object". 
// The first console.log statement will print the value of the num2 variable, which is 10.
//  The second console.log statement will print the type of the num2 variable, which is "object".
//  This is because we created a number object using the Number constructor, which creates an object wrapper around the number value.


//number to string conversion
console.log(num1.toString());
console.log(typeof num1.toString());
//output: The output of the code will be "10" and "string".
// The first console.log statement will print the value of the num1 variable after calling the toString() method, which converts the number to a string. 
// The second console.log statement will print the type of the num1 variable after calling the toString() method, which is "string".

//tofixed
const num3=10.123456;
console.log(num3.toFixed(2));
console.log(typeof num3.toFixed(2));
//output: The output of the code will be "10.12" and "string".
// The first console.log statement will print the value of the num3 variable after calling the toFixed() method with 2 as an argument, which rounds the number to 2 decimal places and returns a string. 
// The second console.log statement will print the type of the num3 variable after calling the toFixed() method, which is "string".




//*****************MATH******************/


console.log(Math)//output: The output of the code will be the Math object, which is a built-in object in JavaScript that provides properties and methods for mathematical constants and functions.
console.log(Math.PI)//output: The output of the code will be 3.141592653589793, which is the value of the mathematical constant pi.

console.log(Math.E)//output: The output of the code will be 2.718281828459045, which is the value of the mathematical constant e.

console.log(Math.sqrt(16))//output: The output of the code will be 4, which is the square root of 16.

console.log(Math.pow(2, 3))//output: The output of the code will be 8, which is the result of raising 2 to the power of 3.

console.log(Math.abs(-10))//output: The output of the code will be 10, which is the absolute value of -10.

console.log(Math.floor(4.7))//output: The output of the code will be 4, which is the largest integer less than or equal to 4.7.

console.log(Math.ceil(4.1))//output: The output of the code will be 5, which is the smallest integer greater than or equal to 4.1.

console.log(Math.round(4.5))//output: The output of the code will be 5, which is the value of 4.5 rounded to the nearest integer.

console.log(Math.max(1, 2, 3, 4, 5))//output: The output of the code will be 5, which is the largest value among the arguments passed to the Math.max() method.

console.log(Math.min(1, 2, 3, 4, 5))//output: The output of the code will be 1, which is the smallest value among the arguments passed to the Math.min() method.

//math random
console.log(Math.random())//output: The output of the code will be a random number between 0 (inclusive) and 1 (exclusive). The Math.random() method returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1) with approximately uniform distribution over that range.
