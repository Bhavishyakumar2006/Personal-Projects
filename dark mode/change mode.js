let btn = document.querySelector("#btn");

let mode = "dark";
btn.addEventListener("click", () => {
  if (mode == "dark") {
    console.log("mode is dark");
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    btn.style.backgroundColor = "white";
    btn.style.color = "black";
    btn.innerHTML = "light";
    mode = "light";
  } else {
    console.log("mode is light");
    document.body.style.backgroundColor = "white";
    btn.style.backgroundColor = "black";
    btn.style.color = "white";
    document.body.style.color = "black";
    btn.innerHTML = "Dark";
    mode = "dark";
  }
});
