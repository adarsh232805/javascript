//refernce type is the type that holds the reference to the value in memory
//array is a reference type that holds a collection of values in a single variable
//array is an ordered collection of values that can be of any type
//array is a zero-indexed data structure, which means that the first element is at index 0, the second element is at index 1, and so on
//object is a reference type that holds a collection of key-value pairs in a single variable
//object is an unordered collection of key-value pairs that can be of any type
//object is a data structure that allows you to store and manipulate data in a structured way
//object elements are accessed using keys, which can be strings or symbols, and values can be of any type
//array elements are accessed using indices, which are numbers that represent the position of the element in the array
//array is a special type of object that has additional properties and methods for working with collections of data


// object example
let person = {
    name: "John",
    age: 30,
    city: "New York",
    vote: function() {
        console.log("I am voting!");
    }
};
console.log(person.name); // Output: John
console.log(person.age); // Output: 30
console.log(person.city); // Output: New York  
console.log(person.vote()); // Output: I am voting!
console.log(person); // Output: { name: 'John', age: 30, city: 'New York' }


