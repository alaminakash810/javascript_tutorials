// while loop = repeat some code WHILE some condition is true


/*
let username = "";

 
if (username === "") {
    console.log("You didn't enter a username");
}
else {
    console.log(`Hello ${username}`);
}
*/

/* 
while(username === "" || username === null) {
    username = window.prompt(`Enter your name:`);
}

console.log(`Hello ${username}`);


// do while loop

let usr;
do{
    usr = window.prompt(`Enter your name:`); 
}while(usr === "" || usr === null) 

console.log(`Hello ${usr}`);

*/

// practice test

let loggedIn = true; // set false to use while loop only
let username;
let password;

do{
    username = window.prompt(`Enter your username:`);
    password = window.prompt(`Enter your password:`);

    if(username === "myUsername" && password === "myPassword") {
        loggedIn = true;
        console.log("You are successfully logged in");
    }
    else {
        console.log("Invalid credentials! Please try again");
    }
}while(!loggedIn)