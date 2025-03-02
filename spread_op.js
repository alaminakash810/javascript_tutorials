// spread Operator = ... allows an iterable sucn as an array or string to be expanded
//                       into separable elements (unpacks the elements)

let nums = [1,2,3,4,5,6,7,8,9];
let maxnum = Math.max(...nums);
let minnum = Math.min(...nums);

console.log(maxnum);
console.log(minnum);

let username = "alamin akash";
let letters = [...username].join("-");

console.log(letters);

// shallow copy of the array (different data structures)

let fruits = ["apple", "orange", "banana", "grape"];
let vegs =["carrots", "celary", "potatoes", "pumpkin"];

let foods= [...fruits, ...vegs, "eggs", "milk"];
console.log(foods);
