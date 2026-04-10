//loop is used to execute a block of code repeatedly until a specified condition is met. There are different types of loops in JavaScript, including for loop, while loop, and do-while loop.

//for loop is used to execute a block of code a specified number of times. The syntax is as follows:
for(let i = 1; i <= 5; i++){
    console.log(i);
}
//write 5times adarsh using for loop
for(let i=0;i<5;i++){
    console.log("adarsh");
}
//revesre counting from 5 to 0 using for loop
for(let i=5;i>=0;i--){
    console.log(i);
}
//Break is used to exit the loop when a certain condition is met. The syntax is as follows:
for(let i = 1; i <= 10; i++){
    if(i === 5){
        break;
    }
    console.log(i);
}
//Continue is used to skip the current iteration of the loop when a certain condition is met. The syntax is as follows:
for(let i = 1; i <= 10; i++){
    if(i === 5){
        continue;
    }  
    else{
        console.log(i); 
    }
}

//While loop is used to execute a block of code as long as a specified condition is true. The syntax is as follows:
let i = 1;  
while(i <= 5){
    console.log(i);
    i++;
}
//write 5times adarsh using while loop
let j = 0;  
while(j < 5){
    console.log("adarsh");
    j++;
}
//DIFFERENCE BETWEEN FOR AND WHILE LOOP
//The main difference between for and while loop is that for loop is used when the number of iterations is known beforehand, while while loop is used when the number of iterations is not known and the loop needs to continue until a certain condition is met. In a for loop, the initialization, condition, and increment/decrement are all in one line, while in a while loop, they are separate.
let k=0;

while(k<5){
    if(k==3){
        break;
    }
    else{
        console.log(k);
        k++;
    }
}

//do while loop is similar to while loop, but it guarantees that the block of code will be executed at least once, even if the condition is false. The syntax is as follows:
let m = 1;
do{
    console.log(m);
    m++;
}
while(m <= 5);
//write 5times adarsh using do while loop
let n = 0;
do{
    console.log("adarsh");
    n++;
}
while(n < 5);
