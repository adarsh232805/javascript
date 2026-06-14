let arr=[10,20,30];
function square(arr){
    for(let i=0;i<arr.length;i++){
        arr[i]=arr[i]*arr[i];
    }   
    return arr;

}
console.log(square(arr)); // Output: [100, 400, 900]
// where the square function takes an array as input, iterates over each element of the array using a for loop, squares each element, and updates the original array with the squared values. Finally, it returns the modified array. The output is [100, 400, 900].