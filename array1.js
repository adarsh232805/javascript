//array is the collection of iteams
//creation of array 
let arr=[1,2,3,4,5];
console.log(arr);
//creation of array using constructor
let brr=new Array('love',1,true);
console.log(brr);
//type of arr
console.log(typeof arr);  // Output: object
console.log(typeof brr);  // Output: object
//array is a reference type that holds a collection of values in a single variable
//array is an ordered collection of values that can be of any type
//array is a zero-indexed data structure, which means that the first element is at index 0, the second element is at index 1, and so on     
//array is a special type of object that has additional properties and methods for working with collections of data
//

//accessing array elements
console.log(arr[0]); // Output: 1
console.log(arr[1]); // Output: 2  
console.log(arr[2]); // Output: 3
console.log(arr[3]); // Output: 4
console.log(arr[4]); // Output: 5

//bult in array methods
//push() method adds one or more elements to the end of an array and returns the new length of the array
arr.push(6);
console.log(arr); // Output: [1, 2, 3, 4, 5, 6]

//pop() method removes the last element from an array and returns that element. This method changes the length of the array.
arr.pop();
console.log(arr); // Output: [1, 2, 3, 4, 5]

//shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
arr.shift();
console.log(arr); // Output: [2, 3, 4, 5]

//unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
arr.unshift(1);
console.log(arr); // Output: [1, 2, 3, 4, 5]

//splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
arr.splice(2, 1, 10);   
console.log(arr); // Output: [1, 2, 10, 4, 5]
// where 2 is the index at which to start changing the array, 1 is the number of elements to remove, and 10 is the new element to add at that index. The original array is modified by this method.

//slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
let newArr = arr.slice(1, 4);
console.log(newArr); // Output: [2, 10, 4]
console.log(arr); // Output: [1, 2, 10, 4, 5]   
// where 1 is the index at which to start slicing the array, and 4 is the index at which to end slicing the array (not included). The original array remains unchanged.

//map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
let mappedArr = arr.map(function(element) {
    return element * 2;
});
console.log(mappedArr); // Output: [2, 4, 20, 8, 10]
// where the provided function takes each element of the array, multiplies it by 2, and returns the result. The map() method creates a new array with these transformed values, while the original array remains unchanged.

//filter() method creates a new array with all elements that pass the test implemented by the provided function.
let filteredArr = arr.filter(function(element) {
    return element > 2;
});
console.log(filteredArr); // Output: [10, 4, 5]
// where the provided function tests each element of the array to see if it is greater than 2. The filter() method creates a new array with only the elements that pass this test, while the original array remains unchanged.

//reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.      
let sum = arr.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sum); // Output: 22
// where the provided reducer function takes an accumulator and the current value of the array, adds them together, and returns the result. The reduce() method processes each element of the array in order, accumulating the result into a single value (in this case, the sum of all elements), while the original array remains unchanged.


//sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
arr.sort();
console.log(arr); // Output: [1, 10, 2, 4, 5]
// where the sort() method sorts the elements of the array in place. By default, it converts the elements to strings and sorts them based on their UTF-16 code unit values. In this case, "10" comes before "2" because "1" is less than "2" when compared as strings. The original array is modified by this method.  

//sort in descending order
arr.sort(function(a, b) {
    return b - a;
});
console.log(arr); // Output: [10, 5, 4, 2, 1]

//reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
arr.reverse();
console.log(arr); // Output: [1, 2, 4, 5, 10]
// where the reverse() method reverses the order of the elements in the array in place. The original array is modified by this method.

//indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
console.log(arr.indexOf(4)); // Output: 2
// where the indexOf() method searches the array for the specified element (in this case, 4) and returns its first index (2). If the element is not found, it would return -1. The original array remains unchanged.

//includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
console.log(arr.includes(5)); // Output: true
// where the includes() method checks if the specified element (in this case, 5) is present in the array. It returns true if the element is found and false if it is not. The original array remains unchanged. 

//find() method returns the value of the first element in the array that satisfies the provided testing function. Otherwise, it returns undefined.
let foundElement = arr.find(function(element) {
    return element > 3;
});
console.log(foundElement); // Output: 4

// where the find() method tests each element of the array against the provided function (in this case, checking if the element is greater than 3). It returns the value of the first element that satisfies this condition (4), or undefined if no such element is found. The original array remains unchanged.

//forEach() method executes a provided function once for each array element.
arr.forEach(function(element) {
    console.log(element);
});
// where the forEach() method iterates over each element of the array and executes the provided function (in this case, logging each element to the console). The original array remains unchanged.

//length property returns the number of elements in an array.
console.log(arr.length); // Output: 5
// where the length property returns the total number of elements in the array (5). The original array remains unchanged.

// for loop to iterate over an array
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
//output: 1, 2, 4, 5, 10
// where the for loop iterates from 0 to the length of the array (exclusive) and logs each element of the array to the console using its index. The original array remains unchanged.

// for...of loop to iterate over an array
for (let element of arr) {
    console.log(element);
}
//output: 1, 2, 4, 5, 10

// where the for...of loop iterates over each element of the array and logs it to the console. The original array remains unchanged.


//array with functions
let arrWithFunctions = [
    function() { console.log("Hello"); },
    function() { console.log("World"); }
];
arrWithFunctions[0](); // Output: Hello
arrWithFunctions[1](); // Output: World
// where arrWithFunctions is an array that contains two functions. We can access and invoke these functions using their respective indices (0 and 1) to log "Hello" and "World" to the console. The original array remains unchanged.   

function getsum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
console.log(getsum(arr)); // Output: 22
// where the getsum function takes an array as an argument, initializes a sum variable to 0, and iterates over each element of the array using a for loop. It adds each element to the sum variable and returns the total sum. In this case, it calculates the sum of the elements in the arr array, which is 22. The original array remains unchanged.


