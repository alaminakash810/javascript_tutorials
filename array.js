// array = a variable like structure that can hold more than 1 value

let fruits = ["apple", "orange", "banana", "grape"];

fruits[2] = "coconuts"; // to change the element in the array

/* */
fruits.push("mango"); //built in function to add an element at the end
console.log(fruits);
fruits.pop(); // to remove the last element from the array
console.log(fruits);
fruits.unshift("papaya"); // to add an element at the beginning of the array
console.log(fruits);
fruits.shift(); // to remove an element at the beginning of the array

//console.log(fruits);

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);



let numfruits = fruits.length;
let index = fruits.indexOf("grape"); // find the index of the element
// let index = fruits.indexOf(""); returns -1 
// using this we can see if that element is in the array or not (use if statement)

for(let i =0; i < numfruits ; i+=2 ) {
    console.log(fruits[i]);
}

for(let i = numfruits - 1; i >= 0 ; i-- ) { //for reverse
    console.log(fruits[i]);
}

// advance loop iteration
for (let fruit of fruits) {
    console.log(fruit);
}


fruits.sort(); // for sorting alphabetically
console.log(fruits);

fruits.sort().reverse(); // for sorting reverse alphabetically
console.log(fruits);


