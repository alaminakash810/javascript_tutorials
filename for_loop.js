// for loop = repeat some code a LIMITED amount of times

 
for(let i = 10; i > 0; i--) {
    console.log(i);
}
console.log("HAPPY NEW YEAR!");


// continue and break

for (let i = 1; i <= 20; i++) {
    if (i == 13) {
        // continue;  use continue to skip the iteration
        break; // use break to break out the loop
    }
    else {
        console.log(i);
    }
}
