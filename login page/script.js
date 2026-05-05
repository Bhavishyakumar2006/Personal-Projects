let loginBtn = document.querySelector(".login-btn");
let loginLink = document.querySelector(".login-link");
let usernameInput = document.querySelector(".username");
let passwordInput = document.querySelector(".password");
loginBtn.addEventListener("click", () => {
    if(usernameInput.value === "Bhavishya" && passwordInput.value === "2006"){
        loginLink.href = "../tic tac toe/tic tac toe.html";
    }else{
        alert("Invalid username or password");
    };
});
