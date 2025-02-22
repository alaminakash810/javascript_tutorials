// ternary operator = a shortcut to if{} and else{} statements
//                   helps to assign a variable based on a condition
//                   condition ? codeifTrue : codeifFalse

let age = 12;
let msg = age >=18 ? `You are an Adult now` : `You are a Minor now`;
console.log(msg);

let time = 2;
let greeting = time < 12 ? `Good morning!` : `Good afternoon!`;
console.log(greeting);

let st = false;
let message = st ? `You're a student!` : `You're NOT a student!`;
console.log(message);

let purchase = 125;
let discount = purchase >= 125 ? 10 : 0;
console.log(`Your total is $${purchase - purchase * discount/100}`);