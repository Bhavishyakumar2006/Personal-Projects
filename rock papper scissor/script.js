let userScore = 0;
let compScore = 0;

let options = document.querySelectorAll(".option");
let massage_btn = document.querySelector("#massage-btn");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompOption = () => {
  const choices = ["rock", "papper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  massage_btn.innerHTML = "GAme was draw. play again.";
  massage_btn.style.backgroundColor = "green";
};
 
const showWinner = (userWin, userOption, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerHTML = userScore;
    massage_btn.innerHTML = `You win! your ${userOption} beats ${compChoice}`;
    massage_btn.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerHTML = compScore;
    massage_btn.innerHTML = `You lost. ${compChoice} beats your ${userOption}`;
    massage_btn.style.backgroundColor = "red";
  }
};

const playGame = (userOption) => {
    const compChoice = genCompOption();

    if(userOption === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userOption = "rock"){
            //scissor, papper
            userWin = compChoice === "papper" ? false : true;
        }else if(userOption ==="papper"){
            //rock, scissor
            userWin = compChoice === "scissor" ? false : true;
        }else{
            //rock, papper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userOption, compChoice);
     }
};

options.forEach((option) => {
  option.addEventListener("click", () => {
    const userOption = option.getAttribute("id");
    playGame(userOption);
  });
});
