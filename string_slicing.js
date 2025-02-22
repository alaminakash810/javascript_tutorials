// string slicing = creating a substrung from a portion of another string
// string.slice(start, end)

const fullname = "Alamin Akash";

// let firstnm = fullname.slice(0, 2);
// let lastnm = fullname.slice(3, 7); // can remove the ending index only if the string ends
// let firstchar = fullname.slice(0,1);
// let lastchar = fullname.slice(6);
// let charc = fullname.slice(-2); // negative for starting from last character

// console.log(firstnm);
// console.log(lastnm);
// console.log(firstchar);
// console.log(lastchar);
// console.log(charc);


let firstname= fullname.slice(0, fullname.indexOf(" "));
let lastname= fullname.slice(fullname.indexOf(" ")+1);

console.log(firstname);
console.log(lastname);

const email = "bro1@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@")+1);
console.log(username);
console.log(extension);
