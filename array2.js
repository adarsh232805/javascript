// map is used to transform each element of an array using a provided function and returns a new array with the transformed values. It does not modify the original array.
let arr=[10,20,30];
let ans=arr.map((number)=>{
    return number*number;
})
console.log(ans); // Output: [100, 400, 900]
arr.map((number,index)=>{
    console.log(number,index);
}) //output: 10 0, 20 1, 30 2

// filter is used to create a new array with all elements that pass the test implemented by the provided function. It does not modify the original array.
// The filter() method creates a new array with all elements that pass the test implemented by the provided function. It does not modify the original array.
let arr1=[10,20,30,40,50];
arr1.filter((number)=>{
    return number>30;
}) // Output: [40, 50]

// array foreach loop is used to execute a provided function once for each array element. It does not return a new array and does not modify the original array.
let arr2=[10,20,30];    
arr2.forEach((number)=>{
    console.log(number);
}) // Output: 10, 20, 30    
arr2.forEach((number,index)=>{
    console.log(number,index);
}) // Output: 10 0, 20 1, 30 2  


// arr.length is a property that returns the number of elements in an array. It is not a method, so it does not require parentheses. The length property is dynamic and updates automatically as elements are added or removed from the array.
let arr3=[10,20,30];
console.log(arr3.length); // Output: 3
arr3.push(40);
console.log(arr3.length); // Output: 4

//for in loop is used to iterate over the properties of an object. It is not recommended to use for in loop to iterate over arrays, as it may not give the expected results and can lead to bugs. The for in loop iterates over all enumerable properties of an object, including inherited properties, which can cause issues when used with arrays.
let arr4=[10,20,30];
for(let index in arr4){
    console.log(arr4[index]);
} // Output: 10, 20, 30
let arr5=[10,20,30,"hello"];
for(let index in arr5){
    console.log(arr5[index]);
} // Output: 10, 20, 30, "hello"

//for of loop is used to iterate over the values of an iterable object, such as an array. It is recommended to use for of loop to iterate over arrays, as it gives the expected results and is more concise than a traditional for loop.
let arr6=[10,20,30];
for(let value of arr6){
    console.log(value);
} // Output: 10, 20, 30
let arr7=[10,20,30,"hello"];    
for(let value of arr7){
    console.log(value);
} // Output: 10, 20, 30, "hello"
