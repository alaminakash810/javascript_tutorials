// function = a section of reusable code
//   declare code once, use it whenever you need
//   call the function to execute that code

function hbd(username, age) {
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday to you dear!");
    console.log(`Happy Birthday to you dear ${username}!`);
    console.log("Happy Birthday to dear you!");
    console.log("Happy Birthday to you too!");
    console.log(`You are now ${age} years old!`);
}

// hbd("Akash", 22);
// hbd("Anik", 24);

function add(x, y) {
    let result= x + y;
    return result; // use return to show the result
}
function subtract(x, y) {
    return x - y;
}
function multiply(x, y) {
    return x * y;
}
function divide(x, y) {
    return x / y;
}

let answer = add(2,3);
console.log(answer);
console.log(subtract(2,3));  // to reduce the variables that stores the answer
console.log(multiply(2,3));
console.log(divide(2,3)) 

// even number checker
function iseven(a) {
    if (a % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(iseven(11));

function ieven(a) {
    return a % 2 === 0 ? true : false; // turnery operator
}
console.log(ieven(13));

// function to check validity of an email
function isvalidmail(email){
    if(email.includes('@')){
        return true;
    }
    else {
        return false;
    }
    // can use ternery operator // return email.includes('@') ? true : false; //
}
console.log(isvalidmail("alamin@gmail.com"));