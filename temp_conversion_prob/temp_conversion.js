// Temparature conversion problelm

const textbox = document.getElementById('textbox');
const tofahrenheit = document.getElementById('tofahrenheit');
const tocelsius = document.getElementById('tocelsius');
const result = document.getElementById('result');
let temp;

function convert() {

    if (tofahrenheit.checked) {
        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32 ;
        temp = temp.toFixed(1);
        result.textContent = `${textbox.value}°C is ${temp}°F`;
    }
    else if (tocelsius.checked) {
        temp = Number(textbox.value);
        temp = (temp - 32) * (5/9)  ;
        temp = temp.toFixed(1);
        result.textContent = `${textbox.value}°F is ${temp}°C`;
    }
    else {
        result.textContent = "Select a unit";
    }
}