let number = document.getElementById("currentNumber");
const subtract = document.getElementById("subtract");
const add = document.getElementById("add");

subtract.addEventListener("click", () => {
  number.innerText = number.innerText - 1;
  if (number.innerText == -1) {
    number.style.color = "red";
  }
  if (number.innerText == -10) {
    subtract.disabled = true;
  }
  if (number.innerText == 9) {
    add.disabled = false;
  }
});

add.addEventListener("click", () => {
  number.innerText = 1 + Number(number.innerText);
  if (number.innerText == 0) {
    number.style.color = "black";
  }
  if (number.innerText == 10) {
    add.disabled = true;
  }
  if (number.innerText == -9) {
    subtract.disabled = false;
  }
});