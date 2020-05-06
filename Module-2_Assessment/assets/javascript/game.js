var wordList = [
    "pokemon",
    "mario",
    "halo",
    "uncharted",
    "fifa",
    "tetris",
    "sims",
    "fallout",
    "diablo",
    "sonic"
];

const maxTries = 10;

var guessedLetters = [];
var currentWordIndex;
var guessingWord = [];
var remainingGuesses = 0;
var hasFinished = false;
var wins = 0;

function resetGame() {
    remainingGuesses = maxTries; 

    currentWordIndex = Math.floor(Math.random() * (wordList.length));

    guessedLetters = [];
    guessingWord = [];

    for (var i = 0; i < wordList[currentWordIndex].length; i++) {
        guessingWord.push("_");
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("totalWins").innerText = wins;
    document.getElementById("currentWord").innerText = "";
    for (var i = 0; i < guessingWord.length; i++) {
        document.getElementById("currentWord").innerText += guessingWord[i];
    }
    document.getElementById("remainingGuesses").innerText = remainingGuesses;
    document.getElementById("guessedLetters").innerText = guessedLetters;
    if(remainingGuesses <= 0) {
        hasFinished = true;
    }
};

document.onkeydown = function(event) {
    if(event.keyCode >= 65 && event.keyCode <= 90) {
            makeGuess(event.key.toLowerCase());
    }
};

function makeGuess(letter) {
    if (remainingGuesses > 0) {
        if (guessedLetters.indexOf(letter) === -1) {
            guessedLetters.push(letter);
            evaluateGuess(letter);
        }
    }

    updateDisplay();
    checkWin();
}

function evaluateGuess(letter) {
    var positions = [];

    for (var i = 0; i < wordList[currentWordIndex].length; i++) {
        if (wordList[currentWordIndex][i] === letter) {
            positions.push(i);
        }
    }
    if (positions.length <= 0) {
        remainingGuesses--;
    } else {
        for (var i = 0; i < positions.length; i++) {
            guessingWord[positions[i]] = letter;
        }
    }
};

function checkWin() {
    if(guessingWord.indexOf("_") === -1) {
        wins++;
        hasFinished = true;
        currentWord = wordList[currentWordIndex];
        document.getElementById("answerImage").src = "assets/images/" + currentWord + ".png";
    } else if (remainingGuesses === 0) {
        resetGame();
    }
};
