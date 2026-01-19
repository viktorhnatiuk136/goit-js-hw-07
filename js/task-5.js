function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = document.querySelector(".change-color");
const spanText = document.querySelector(".color");

changeColor.addEventListener("click", () => {
  const colorValue = getRandomHexColor()
  document.body.style.backgroundColor = colorValue;
  spanText.textContent = colorValue;
});

