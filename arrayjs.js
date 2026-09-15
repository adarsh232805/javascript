//***************ARRAY*************/
const arr=[1,2,3,4,5,6,7,8,9,10];
console.log(arr);
console.log(typeof arr);
//output: The output of the code will be [1,2,3,4,5,6,7,8,9,10] and "object".
//array of javascript is mixed data type, it can hold different types of data like number, string, boolean, object, etc. 
// The first console.log statement will print the value of the arr variable, which is an array of numbers. 
// The second console.log statement will print the type of the arr variable, which is "object".
//for example, consider the following code:
const arr1=[1,"two",true,{name:"John"},[1,2,3]];
console.log(arr1);
console.log(typeof arr1);
//output: The output of the code will be [1,"two",true,{name:"John"},[1,2,3]] and "object".
// The first console.log statement will print the value of the arr1 variable, which is an array containing different types of data. 
// The second console.log statement will print the type of the arr1 variable, which is "object".

//array of javascript is mutable, it can be changed after it is created.and resizable, it can grow or shrink in size as needed.
//for example, consider the following code:
arr1[0]=10; 
console.log(arr1);
//output: The output of the code will be [10,"two",true,{name:"John"},[1,2,3]].
// The console.log statement will print the value of the arr1 variable after changing the first element of the array to 10. 
// This shows that arrays in JavaScript are mutable and can be changed after they are created.




/////***********SHALLOW COPY************//
//in javacript, a shallow copy of an array is a new array that contains references to the same elements as the original array.
//  This means that if the elements of the original array are objects or arrays, changes made to those elements in the shallow copy will also affect the original array, and vice versa.
//for example, consider the following code:
const arr2=[1,2,3,4,5];
const arr3=arr2.slice(); //shallow copy
console.log(arr2);
console.log(arr3);
//output: The output of the code will be [1,2,3,4,5] and [1,2,3,4,5].
//another exp of shallow copy is using spread operator
const arr6=[1,2,3,4,5];
const arr7=[...arr6];
console.log(arr6);
console.log(arr7);
//output: The output of the code will be [1,2,3,4,5] and [1,2,3,4,5].



//deep copy of an array is a new array that contains copies of the elements of the original array, rather than references to the same elements.
//  This means that changes made to the elements of the deep copy will not affect the original array, and vice versa.
//for example, consider the following code:
const arr4=[1,2,3,4,5];
const arr5=[...arr4]; //deep copy
console.log(arr4);
console.log(arr5);
//output: The output of the code will be [1,2,3,4,5] and [1,2,3,4,5].




/// another way of declaration of array is using Array 

const arr8=new Array(1,2,3,4,5);
console.log(arr8);
console.log(typeof arr8);
//output: The output of the code will be [1,2,3,4,5] and "object".
// The first console.log statement will print the value of the arr8 variable, which is an array of numbers. 
// The second console.log statement will print the type of the arr8 variable, which is "object".




/// method in array
//push method is used to add one or more elements to the end of an array and returns the new length of the array.
const arr9=[1,2,3,4,5];
arr9.push(6);
//output: The output of the code will be [1,2,3,4,5,6].
console.log(arr9);


//pop method is used to remove the last element from an array and returns that element.
const arr10=[1,2,3,4,5];
const poppedElement=arr10.pop();
console.log(poppedElement);
console.log(arr10);
//output: The output of the code will be 5 and [1,2,3,4].

//unshift method is used to add one or more elements to the beginning of an array and returns the new length of the array.
const arr11=[1,2,3,4,5];
arr11.unshift(0);
console.log(arr11);
//output: The output of the code will be [0,1,2,3,4,5].

//includes method is used to check if an array contains a certain element and returns true or false.
const arr12=[1,2,3,4,5];
console.log(arr12.includes(3));
//output: The output of the code will be true. The console.log statement will print the value of the arr12 variable after calling the includes() method with 3 as an argument, which checks if the array contains the element 3 and returns true or false.

//indexOf method is used to find the index of the first occurrence of a certain element in an array and returns the index or -1 if the element is not found.
const arr13=[1,2,3,4,5];
console.log(arr13.indexOf(3));
//output: The output of the code will be 2. The console.log statement will print the value of the arr13 variable after calling the indexOf() method with 3 as an argument, which finds the index of the first occurrence of the element 3 in the array and returns the index or -1 if the element is not found.



//slice and splice method is used to extract a portion of an array and returns a new array. 
// The slice() method does not modify the original array, 
// while the splice() method modifies the original array.
//for example, consider the following code:
const arr14=[1,2,3,4,5];
const slicedArray=arr14.slice(1,4);
console.log(slicedArray);
console.log(arr14);
//output: The output of the code will be [2,3,4] and [1,2,3,4,5]. 
// The first console.log statement will print the value of the slicedArray variable, which contains a portion of the original array. 
// The second console.log statement will print the value of the arr14 variable after calling the slice() method, which does not modify the original array.
const arr15=[1,2,3,4,5];
const splicedArray=arr15.splice(1,3);
console.log(splicedArray);
console.log(arr15);
//output: The output of the code will be [2,3,4] and [1,5].
//  The first console.log statement will print the value of the splicedArray variable, which contains a portion of the original array.
//  The second console.log statement will print the value of the arr15 variable after calling the splice() method, which modifies the original array by removing the elements from index 1 to 3.
