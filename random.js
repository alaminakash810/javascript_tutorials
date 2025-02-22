// random number generator

// let randomNum = Math.random(); // a random number between 0 and 1
// let ran = Math.floor(randomNum * 10 + 1); // random number between 1 and 10
//                                          // added 1 to increase the minimum

// console.log(ran); 

// generate a number between 50 and 100

// const max = 100;
// const min = 50;

// let rndm = Math.floor(Math.random() * (max - min ))+ min; for a certain range

// console.log(rndm);


// dice problem

const rollbtn = document.getElementById("rollbtn");
const mylabel = document.getElementById("mylabel");
const max = 6;
const min = 1;
let randomNum;

rollbtn.onclick = function() {
    randomNum = Math.floor(Math.random() * max) + min;
    mylabel.textContent = randomNum;
}    