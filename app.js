const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  const index = Math.floor(Math.random() * colors.length);
  color.textContent = colors[index];

  document.body.style.backgroundColor = colors[index];
});
