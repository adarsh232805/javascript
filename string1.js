//string in javascript
//string is a data type in javascript that represents a sequence of characters.
//  It is used to store and manipulate text. 
// Strings can be defined using single quotes, double quotes, or backticks (for template literals). 
// Strings can contain letters, numbers, symbols, and whitespace characters. 
// They are immutable, meaning that once a string is created, it cannot be changed.
//  However, you can create new strings by concatenating or manipulating existing strings.
//for example, consider the following code:
let str1 = "Hello";
let str2 = 'World';
let str3 = `!`;
console.log(str1);
console.log(str2);
console.log(str3);


const name=new String("John");
console.log(name);
console.log(typeof name);
//output: The output of the code will be "John" and "object". The first console.log statement will print the value of the name variable, which is "John". The second console.log statement will print the type of the name variable, which is "object". This is because we created a string object using the String constructor, which creates an object wrapper around the string value.

console.log(name.toString());
console.log(typeof name.toString());
//output: The output of the code will be "John" and "string". The first console.log statement will print the value of the name variable, which is "John". The second console.log statement will print the type of the name variable, which is "string". This is because we called the toString() method on the string object, which returns the primitive string value of the object.

console.log(name[0]);
//output: The output of the code will be "J". The console.log statement will print the first character of the string object, which is "J". This is because we accessed the first character of the string object using bracket notation and the index 0.

//prototype of string
String.prototype.customMethod = function() {
    return this.toUpperCase();
}

//output: The output of the code will be "HELLO". The console.log statement will print the value of the string object after calling the customMethod() method, which converts the string to uppercase. This is because we added a custom method to the String prototype, which allows us to call the method on any string object.

console.log(name.customMethod());

console.log(name.length);
//output: The output of the code will be 4. The console.log statement will print the length of the string object, which is 4. This is because we accessed the length property of the string object, which returns the number of characters in the string.

console.log(name.charAt(0));
//output: The output of the code will be "J". The console.log statement will print the character at index 0 of the string object, which is "J". This is because we called the charAt() method on the string object and passed in the index 0 as an argument.

console.log(name.indexOf("o"));
//output: The output of the code will be 1. The console.log statement will print the index of the first occurrence of the character "o" in the string object, which is 1. This is because we called the indexOf() method on the string object and passed in the character "o" as an argument.

//substring 
console.log(name.substring(0, 3));
//output: The output of the code will be "Joh". The console.log statement will print the substring of the string object from index 0 to 3, which is "Joh". This is because we called the substring() method on the string object and passed in the start and end indices as arguments.

//slice
console.log(name.slice(0, 3));
//output: The output of the code will be "Joh". The console.log statement will print the slice of the string object from index 0 to 3, which is "Joh". This is because we called the slice() method on the string object and passed in the start and end indices as arguments.
console.log(name.slice(-4, -1));
//output: The output of the code will be "Joh". The console.log statement will print the slice of the string object from index -4 to -1, which is "Joh". This is because we called the slice() method on the string object and passed in the start and end indices as arguments. The negative indices count from the end of the string, so -4 refers to the fourth character from the end and -1 refers to the last character.
console.log(name.replace("John", "Doe"));
//output: The output of the code will be "Doe". The console.log statement will print the string object after replacing the substring "John" with "Doe". This is because we called the replace() method on the string object and passed in the substring to be replaced and the new substring as arguments.
