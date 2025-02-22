// type conversion = change the data type of a value to another data type

// let age = window.prompt("How old are you?");
// age = Number(age);
// age += 1;

// console.log(age, typeof age);

let x = "22";
let y = "pizza";
let z = "2";

x = Number(x);
y = String(y);
z = Boolean(z); // empty value means boolean is false

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

// changes can be made to anything to anything

// const = a variable that can't be changed

const PI = 3.14159; // PI is now unchangeable and 
// the variable should be in upper case letters
// only use upper case for numbers and booleans or primitive data types

let radius;
let circumference;

//PI = 410; will be a type error bc constants  can't be changed

// radius = window.prompt(`Enter a radius`);
radius = Number(radius);

circumference = 2 * radius * PI;

console.log(`The circumference of the circle is ${circumference}`);

// Create a function in html page

document.getElementById("btn1").onclick = function() {
    radius = document.getElementById("in1").value;
    radius = Number(radius);
    circumference = 2 * radius * PI;
    document.getElementById("hid3").textContent = (`The circumference is ${circumference}`);
}