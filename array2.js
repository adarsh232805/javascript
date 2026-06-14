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