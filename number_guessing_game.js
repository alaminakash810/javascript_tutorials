// Number guessing game

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum +1) + minNum);
// if the min number is besides 1 then need to add the min number to the last

let attempts = 0;
let guess;
let running = true;

while (running) {
    guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}`);
    guess = Number(guess);
    
    if (isNaN(guess)) {
        window.alert(`Please enter a valid number`);
    }
    else if (guess < minNum || guess > maxNum) {
        window.alert(`Please enter a valid number between ${minNum} and ${maxNum}`);
    }
    else{
        attempts ++;
        if (guess < answer) {
            window.alert(`TOO LOW! PICK A HIGHER NUMBER!`);
        }
        else if (guess > answer) {
            window.alert(`TOO HIGH! PICK A LOWER NUMBER!`);
        }
        else {
            window.alert(`CORRECT! The answer was: ${answer}. It took you ${attempts} attempts to guess`);
            running = false;
        }
    }

    
}

console.log(answer);