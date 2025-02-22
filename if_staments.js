// If - statements 

let age = 18;

if(age >= 20) {
   // console.log(`You are old enough to enter this site`);
}
else {
    //console.log(`You are too young for this site`);
}

let isStudent = true;

if (isStudent) {
   // console.log(`You are a student`);
}
else {
   // console.log(`You are NOT a student`);
}

// nested if statements

let ag = 15;
let license = false;

if (ag >= 16) {
    //console.log(`You are old enough to drive`);

    if (license) {
       // console.log(`You have a license`);
    }
    else {
        //console.log(`You do not have a license`);
    }
}
else {
    //console.log(`You must be 16+ years old to drive`);
}

// elif statement


const in1 = document.getElementById('in1');
const btn1 = document.getElementById('btn1');
const result = document.getElementById('result');
let a;

btn1.onclick = function() {
    a = in1.value;
    a = Number(a);

    if (a>=100) {
        result.textContent = `You are too old for this site`;
    }
    else if (a==18) {

        result.textContent = `You are exactly old enough to enter`;
    }
    else if (a>18 && a<30) {

        result.textContent = `You are old enough to enter this site`;
    }
    else if (a>=30) {

        result.textContent = `You are 30 years old and go to work`;
    }
    else if (a <=0) {

        result.textContent = `Your age can not be below 0`;
    }
    else {

        result.textContent = `Your must be at least 18+ years to enter`;
    }

}

// use && to add multiple conditions 
// use || for or conditions
// use === for strict comparison
