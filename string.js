// string = allows you to manipulate and work with text

let username = "AlAmin"

// to find out the character of a position in string
console.log(username.charAt(3));

// to find the index of first occurrence in string
console.log(username.indexOf("i"));
// to find the index of last occurrence in string
console.log(username.lastIndexOf("A"));

// length of the string
console.log(username.length);

// to remove any whitespace from the string
let use = "    Rahimrar    ";
use = use.trim();
console.log(use);

// uppercase and lowercase
use = use.toUpperCase();
console.log(use);

use = use.toLowerCase();
console.log(use);

// to repeat the string
let nameo = "Akash ";
nameo = nameo.repeat(3);
console.log(nameo);

// start with method for checking if the string starts with that character
let a = "brocode";
ab= a.startsWith(" ");

if(ab) {
    console.log("Your username can't begin with ' '");
}
else {
    console.log(a);
}

// ends with method for checking if the string ends with that character
ab= a.endsWith(" ");

if(ab) {
    console.log("Your username can't end with ' '");
}
else {
    console.log(a);
}

// includes method to check if the string has white spaces
let b = "AlAmin";
let c = b.includes("i");

if(c) {
    console.log("Your username can't have 'i'");
}
else {
    console.log(b);
}

// replace all method to replace any characters
let phoneNumber = "01975-827-810";
phoneNumber = phoneNumber.replaceAll("-", "/");
console.log(phoneNumber);

// pad start and pad end method to add any new characters to the strings
let phoneno = "01975-827-810";
phoneno = phoneno.padStart(17, "+88 ");
phoneno = phoneno.padEnd(17, "-");
console.log(phoneno);


