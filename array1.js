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
