const heading = document.querySelector("#heading");
const colors = document.querySelectorAll(".color");
colors.forEach((color) => {
  color.addEventListener("click", (e) => {
    document.body.style.backgroundColor = e.target.id;
    heading.style.color = "black";
  });
});
