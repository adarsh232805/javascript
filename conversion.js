let score=33;
console.log(score);
console.log(typeof score);
//output: The output of the code will be 33 and "number". The first console.log statement will print the value of the score variable, which is 33. The second console.log statement will print the type of the score variable, which is "number".


let score1="33";
console.log(score1);
console.log(typeof score1);
//output: The output of the code will be "33" and "string". The first console.log statement will print the value of the score1 variable, which is "33". The second console.log statement will print the type of the score1
//     variable, which is "string".

//conveersion of number to string
let score2=33;
let scoreString=score2.toString();
console.log(scoreString);
console.log(typeof scoreString);
//output: The output of the code will be "33" and "string". The first console.log statement will print the value of the scoreString variable, which is "33". The second console.log statement will print the type of the scoreString variable, which is "string".   

//string to number conversion
let score3="33";
let scoreNumber=Number(score3);
console.log(scoreNumber);
console.log(typeof scoreNumber);
//output: The output of the code will be 33 and "number". The first console.log statement will print the value of the scoreNumber variable, which is 33. The second console.log statement will print the type of the scoreNumber variable, which is "number".

//"33abc" is not a valid number, so the conversion will result in NaN (Not a Number)
let score4="33abc";
let scoreNumber1=Number(score4);
console.log(scoreNumber1);
console.log(typeof scoreNumber1);
//output: The output of the code will be NaN and "number". The first console.log statement will print the value of the scoreNumber1 variable, which is NaN. The second console.log statement will print the type of the scoreNumber1 variable, which is "number".

