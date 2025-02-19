const randNumber = Math.floor(Math.random() * 100) + 1;


const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numSteps = 1; 
let playgame = true;

if (playgame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert('Provide Valid Input');
    } else if (numSteps > 10) {
        displayMessage(`Game Over!!!`);
        endGame();
    } else {
        checkGuess(guess);
    }
}

function checkGuess(guess) {
    prevGuess.push(guess);
    guessSlot.innerHTML = prevGuess.join(',');
    numSteps++;
    if (guess === randNumber) {
        displayMessage('You guessed it correctly');
        endGame();
    } else if (guess < randNumber) {
        displayMessage('Too low, try again!');
    } else {
        displayMessage('Too high, try again!');
    }
    lastResult.innerHTML = `Attempts: ${prevGuess.length}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h1>${message}</h1>`;
}

function endGame() {
    userInput.disabled = true;
    submit.disabled = true;
    
    p.innerHTML = `<button id='newGame'> Restart Game </button>`; 
    startOver.appendChild(p);
    
    document.querySelector("#newGame").addEventListener("click", newGame);
}

function newGame() {
    randNumber = Math.floor(Math.random() * 100) + 1; 
    prevGuess = [];
    numSteps = 1;
    guessSlot.innerHTML = '';
    lastResult.innerHTML = '';
    lowOrHi.innerHTML = '';
    userInput.disabled = false;
    submit.disabled = false;
    startOver.removeChild(p);
    playgame = true;
}
