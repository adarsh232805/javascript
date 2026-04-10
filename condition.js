//conditionals in javascript
// if else is used to execute a block of code based on a condition. The syntax is as follows:
let age = 18;   
if(age >= 18){
    console.log("You are eligible to vote.");
}else{
    console.log("You are not eligible to vote.");
}

// if else if is used to execute multiple blocks of code based on different conditions. The syntax is as follows:
let marks = 85;
if(marks >= 90){
    console.log("You got an A grade.");
}else if(marks >= 80){
    console.log("You got a B grade.");
}  else if(marks >= 70){
    console.log("You got a C grade.");
}else if(marks >= 60){
    console.log("You got a D grade.");
}else{
    console.log("You got an F grade.");
}


//switch case is used to execute a block of code based on different cases. The syntax is as follows:
//break is used to exit the switch case after a case is executed. If break is not used, the code will continue to execute the next cases until a break is encountered or the switch case ends.
//switch syntax is as follows:
let day = 3;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}
