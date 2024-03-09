const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const span = document.querySelector(".color");

btn.addEventListener("click", () => {
  let color = "#";

  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * hex.length);
    color += hex[index];
  }
  document.body.style.backgroundColor = color;
  span.textContent = color;
});
