//string is a sequence of characters. In JavaScript, strings are enclosed in single quotes (' '), double quotes (" "), or backticks (` `). The syntax for creating a string is as follows:
let str1 = 'Hello, World!';
let str2 = "Hello, World!";
let str3 = `Hello, World!`;
console.log(str1);
console.log(str2);
console.log(str3);

//check is it string or not
let str4 = "This is a string.";
console.log(typeof str4); // Output: string

//string is print in different lines then baclticks are used
let str5 = `This is a string.
It is printed in multiple lines.`;
console.log(str5);
//single and double quotes are used to print string in single line not in multiple lines
let str6 = 'This is a string. It is printed in a single line.';
console.log(str6);

//operation on string
//1 concatenation is used to combine two or more strings. The syntax is as follows:
let str7 = "Hello";
let str8 = "World";
let str9 = str7 + " " + str8; 
console.log(str9);// output: Hello World

//2 length is used to get the length of a string. The syntax is as follows:
let str10 = "Hello, World!";
console.log(str10.length); // Output: 13

//3 toUpperCase() is used to convert a string to uppercase. The syntax is as follows:
let str11 = "Hello, World!";
console.log(str11.toUpperCase()); // Output: HELLO, WORLD!

//4 toLowerCase() is used to convert a string to lowercase. The syntax is as follows:
let str12 = "Hello, World!";
console.log(str12.toLowerCase()); // Output: hello, world!

//5 charAt() is used to get the character at a specified index in a string. The syntax is as follows:
let str13 = "Hello, World!";
console.log(str13.charAt(0)); // Output: H
console.log(str13.charAt(7)); // Output: W

//6 indexOf() is used to get the index of the first occurrence of a specified value in a string. The syntax is as follows:
let str14 = "Hello, World!";
console.log(str14.indexOf("o")); // Output: 4
console.log(str14.indexOf("z")); // Output: -1 (not found)

//7 slice() is used to extract a part of a string and return it as a new string. The syntax is as follows:
let str15 = "Hello, World!";
console.log(str15.slice(0, 5)); // Output: Hello
console.log(str15.slice(7)); // Output: World!

//8 split() is used to split a string into an array of substrings based on a specified separator. The syntax is as follows:
let str16 = "Hello, World!";
let arr = str16.split(", ");
console.log(arr); // Output: ["Hello", "World!"]        

//9substring() is used to extract a part of a string between two specified indices. The syntax is as follows:
let str17 = "Hello, World!";
console.log(str17.substring(0, 5)); // Output: Hello
console.log(str17.substring(7)); // Output: World!
console.log(str17.substring(7, 12)); // Output: World   

//10 replace() is used to replace a specified value with another value in a string. The syntax is as follows:
let str18 = "Hello, World!";
let newStr = str18.replace("World", "JavaScript");
console.log(newStr); // Output: Hello, JavaScript!

//11 includes() is used to check if a string contains a specified value. The syntax is as follows:
let str19 = "Hello, World!";
console.log(str19.includes("World"));//output is true
console.log(str19.includes("JavaScript"));//output is false






