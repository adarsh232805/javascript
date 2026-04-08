//operator
//Arithmetic operator
let a = 10;
let b = 5;
let c = a + b; // addition
let d = a - b; // subtraction
let e = a * b; // multiplication
let f = a / b; // division
let g = a % b; // modulus
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);

//uniary operator
let x = 10;
x++; // increment
console.log(x);
x--; // decrement
console.log(x);

//Binary operator 
// comparison operator

let m = 10;
let n = 5;
let o = m > n; // greater than
let p = m < n; // less than
let q = m >= n; // greater than or equal to
let r = m <= n; // less than or equal to
let s = m == n; // equal to
let t = m != n; // not equal to   
console.log(o);
console.log(p);
console.log(q);
console.log(r);
console.log(s);
console.log(t);  

//assignment operator
let u = 10;
u += 5; // u = u + 5
console.log(u);
u -= 5; // u = u - 5
console.log(u);
u *= 5; // u = u * 5
console.log(u);
u /= 5; // u = u / 5    
console.log(u);


//strict equality operator
let v = 10;
let w = '10';
console.log(v === w);
//loose equality operator
console.log(v == w);

//ternary operator
let z = (v > w) ? "v is greater than w" : "v is not greater than w";
console.log(z);

//logical operator
let p1 = true;
let p2 = false;
console.log(p1 && p2);//AND operator
console.log(p1 || p2);//OR operator
console.log(!p1);//NOT operator


//working with non-boolean values with logical operators 
//falsey is undefined null 0 '' NaN 
//truthy is all values except falsey
let a1 = 0;
let a2 = 'Hello';
console.log(a1 || a2);//output will be 'Hello' because 0 is falsey and 'Hello' is truthy
console.log(a1 && a2);//output will be 0 because 0 is falsey and 'Hello' is truthy


//bitwise operator
let b1 = 5; // binary 0101
let b2 = 3; // binary 0011
console.log(b1 & b2); // bitwise AND   output will be 1 because 0101 & 0011 = 0001
console.log(b1 | b2); // bitwise OR    output will be 7 because 0101 | 0011 = 0111
console.log(b1 ^ b2); // bitwise XOR   output will be 6 because 0101 ^ 0011 = 0110
console.log(~b1); // bitwise NOT       output will be -6 because ~0101 = 1010 (two's complement)
console.log(b1 << 1); // left shift    output will be 10 because 0101 << 1 = 1010
console.log(b1 >> 1); // right shift   output will be 2 because 0101 >> 1 = 0010




