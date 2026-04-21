let div = document.querySelector("#container");
let buttons = document.querySelectorAll(".btn");
let resetBtn = document.querySelector("#reset-btn");
let msg_container = document.querySelector(".msg-conatiner");
let msg_para = document.querySelector(".msg");
let new_game = document.querySelector("#new_game");
let turn_para = document.querySelector(".turn_para");
let reset_btn = document.querySelector("#reset_btn");

let winpatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

new_game.addEventListener("click", () => {
  buttons.forEach((button) => {
    turnX = true;
    turn_para.innerText = "X's turn";
    button.innerText = "";
    button.disabled = false;
    msg_para.classList.add("hide");
  });
});

let turnX = true;
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (turnX) {
      button.innerText = "X";
      turnX = false;
      turn_para.innerText = "O's turn";
    } else {
      button.innerText = "O";
      turnX = true;
      turn_para.innerText = "X's turn";
    }
    button.disabled = true;

    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of winpatterns) {
    let pos1 = buttons[pattern[0]].innerText;
    let pos2 = buttons[pattern[1]].innerText;
    let pos3 = buttons[pattern[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        msg_para.innerText = `congratulation,winner is ${pos1}`;
        msg_para.classList.remove("hide");
        btn_disabled();
      }
    }
  }
};

reset_btn.addEventListener("click", () => {
  buttons.forEach((button) => {
    turnX = true;
    turn_para.innerText = "X's turn";
    button.innerText = "";
    button.disabled = false;
    msg_para.classList.add("hide");
  });
});

const btn_disabled = () => {
  buttons.forEach((button) => {
    button.disabled = true;
  });
};

