//dates

let date=new Date();
console.log(date);
console.log(typeof date);
//output: The output of the code will be the current date and time, and "object".
//  The first console.log statement will print the value of the date variable, which is the current date and time.
//  The second console.log statement will print the type of the date variable, which is "object". 
// This is because we created a date object using the Date constructor, which creates an object that represents a specific point in time.

console.log(date.toString());
//output: The output of the code will be the current date and time in string format. 
// The console.log statement will print the value of the date variable after calling the toString() method, which converts the date object to a string representation of the date and time.


console.log(date.toDateString());
//output: The output of the code will be the current date in string format. 
// The console.log statement will print the value of the date variable after calling the toDateString() method, which converts the date object to a string representation of the date without the time. 


let date1=new Date("2023-01-01");
console.log(date1);
console.log(typeof date1);
//output: The output of the code will be "2023-01-01T00:00:00.000Z" and "object".

console.log(date1.toString());
//output: The output of the code will be "Sun Jan 01 2023 00:00:00 GMT+0000 (Coordinated Universal Time)". 
// The console.log statement will print the value of the date1 variable after calling the toString() method, which converts the date object to a string representation of the date and time.

//month start from 0 in javascript, so january is 0 and december is 11
let date2=new Date(2023, 0, 1);
console.log(date2);
console.log(typeof date2);
//output: The output of the code will be "2023-01-01T00:00:00.000Z" and "object".

//***********times*********** */

let time=new Date();
console.log(time);
console.log(typeof time);
//output: The output of the code will be the current date and time, and "object".

console.log(time.toString());
//output: The output of the code will be the current date and time in string format. 
// The console.log statement will print the value of the time variable after calling the toString() method, which converts the date object to a string representation of the date and time.

let timestamp=Date.now();
console.log(timestamp);
console.log(typeof timestamp);

//output: The output of the code will be the current timestamp in milliseconds and "number".
// The console.log statement will print the value of the timestamp variable, which is the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC. 
// The second console.log statement will print the type of the timestamp variable, which is "number".