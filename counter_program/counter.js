// counter program

const increasebtn = document.getElementById('increase');
const resetbtn = document.getElementById('reset');
const decresebtn = document.getElementById('decrease');
let count = 0;

increasebtn.onclick = function () {
    count++;
    counterlabel.textContent = count;
}

resetbtn.onclick = function () {
    count = 0;
    counterlabel.textContent = count;
}

decresebtn.onclick = function () {
    count--;
    counterlabel.textContent = count;
}

