const userGuess = document.querySelector("#inputBox");
const result = document.querySelector(".result");
const pastGuessesShow = document.querySelector(".pastGuessesShow");
const guessesLeft = document.querySelector("span");

document.querySelector("#guessBtn").addEventListener("click", () => {
  let compRanGuess = randomNumber();
  console.log(compRanGuess);
  console.log(userGuess.value);

  if (userGuess.value != "" && userGuess.value <= 100 && userGuess.value >= 0) {
    if (compRanGuess == userGuess.value) {
      result.innerText = "your guess is correct.";
      result.style.color = "green";
    } else {
      result.innerText = "you Guess wrong, try again.";
      result.style.color = "red";
    }

    remainGuesses();
  } else {
    result.innerText = "Enter the valid number.";
    result.style.color = "red ";
    userGuess.style.borderColor = "red";
  }
  previousGuess();
});

function randomNumber() {
  return Math.floor(Math.random() * 100);
};

let pastGuess = "";
function previousGuess() {
  pastGuess = pastGuess + (" " + (pastGuessesShow.innerText = userGuess.value));
  return (pastGuessesShow.innerText = pastGuess);
};

let remainingGuess = 10;
function remainGuesses() {
  guessesLeft.innerText = --remainingGuess;

  if (remainingGuess === 0) {
    remainingGuess = 10;
    pastGuess = "";
  };
};
