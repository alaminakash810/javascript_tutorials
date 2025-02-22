// Method Chaining = calling one method after another in one condition line of code


// NO method chaining
let username = window.prompt(`enter your username`);
/* username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extrachars = username.slice(1);
extrachars = extrachars.toLowerCase();
username =  letter + extrachars;

document.getElementById("user").textContent = username; */


// Method Chaining
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
document.getElementById("user").textContent = username;