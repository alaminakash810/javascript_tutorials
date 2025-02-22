// easy way window prompt

// let username = window.prompt("What's your username?");
// console.log(username);

// professional way of user input

let username;

document.getElementById("btn1").onclick = function(){
    
    username = document.getElementById("in1").value;
    // console.log(username);
    document.getElementById("hid2").textContent = `Hi ${username}`;
}


