//function is defined as a block of code that performs a specific task. It is reusable and can be called multiple times in a program. Functions can take input parameters and return output values.

//function declaration
function greet() {
    console.log("Hello, World!");
}
//function call
greet(); // Output: Hello, World!

//function with parameters
function greet1(name) {
    console.log("Hello, " + name + "!");
}
greet1("Alice"); // Output: Hello, Alice!    


//function with return value
function add(a, b) {
    return a + b;
}
let sum = add(5, 3);
console.log(sum); // Output: 8

//function expression  
let greet2 = function(name) {
    console.log("Hello, " + name + "!");
}
greet2("Bob"); // Output: Hello, Bob!

//counting 1 to 10 using function
function count() {
    for(let i = 1; i <= 10; i++){
        console.log(i);
    }
}
    count(); // Output: 1 2 3 4 5 6 7 8 9 10    

// in javacript we donot specify the datatypes in function parameter 
// java script is the dynacimaclly type language that types the dataypes automatically
function getsum(a,b,c){
    return a+b+c;
}
let ans= getsum(1,2,3);
console.log(ans);


function getname(firstname,lastname){
    let fullname=firstname+lastname;
    return fullname;
}
let name=getname("John","Doe");
console.log(name);


// arrow function is defined using the "=>" syntax and is a more concise way to write functions in JavaScript. It does not have its own "this" context and is often used for shorter functions or as callbacks.
let greet3 = (name) => {
    console.log("Hello, " + name + "!");
}
greet3("Charlie"); // Output: Hello, Charlie!

// arrow function with implicit return
let getSquare = (x) => x * x;
console.log(getSquare(5)); // Output: 25    
