function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

btn.addEventListener('click', changeColor);

function changeColor(event) {
  btn.style.backgroundColor = getRandomHexColor();
  btn.style.transition = "3000ms ease";

  spanColor.innerHTML = btn.style.backgroundColor;
}