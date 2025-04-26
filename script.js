let firstNumber = "";
let secondNumber = "";
let operator = null;
let isSecondNumber = false;

const result = document.getElementById("result");

const numbers = document.querySelectorAll(".number");
numbers.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;
    if (!isSecondNumber) {
      if (value === "." && firstNumber.includes(".")) return;
      firstNumber += value;
      result.textContent = firstNumber;
    } else {
      if (value === "." && secondNumber.includes(".")) return;
      secondNumber += value;
      result.textContent = secondNumber;
    }
  });
});

document.getElementById("suma").addEventListener("click", () => {
  operator = "+";
  isSecondNumber = true;
  result.textContent = "";
});

document.getElementById("resta").addEventListener("click", () => {
  operator = "-";
  isSecondNumber = true;
  result.textContent = "";
});

document.getElementById("multiplicacion").addEventListener("click", () => {
  operator = "X";
  isSecondNumber = true;
  result.textContent = "";
});

document.getElementById("division").addEventListener("click", () => {
  operator = "/";
  isSecondNumber = true;
  result.textContent = "";
});

document.getElementById("igual").addEventListener("click", () => {
  if (firstNumber === "" || secondNumber === "" || operator === null) return;
  const num1 = parseFloat(firstNumber);
  const num2 = parseFloat(secondNumber);
  let total = 0;
  switch (operator) {
    case "+":
      total = num1 + num2;
      break;
    case "-":
      total = num1 - num2;
      break;
    case "X":
      total = num1 * num2;
      break;
    case "/":
      total = num2 === 0 ? "Error" : num1 / num2;
      break;
  }
  result.textContent = total;
  firstNumber = total.toString();
  secondNumber = "";
  operator = null;
  isSecondNumber = false;
});

document.getElementById("ac").addEventListener("click", () => {
  firstNumber = "";
  secondNumber = "";
  operator = null;
  isSecondNumber = false;
  result.textContent = "0";
});

document.getElementById("negativo").addEventListener("click", () => {
  if (!isSecondNumber) {
    if (firstNumber !== "") {
      firstNumber = (parseFloat(firstNumber) * -1).toString();
      result.textContent = firstNumber;
    }
  } else {
    if (secondNumber !== "") {
      secondNumber = (parseFloat(secondNumber) * -1).toString();
      result.textContent = secondNumber;
    }
  }
});

document.getElementById("pocentaje").addEventListener("click", () => {
  if (!isSecondNumber) {
    if (firstNumber !== "") {
      firstNumber = (parseFloat(firstNumber) / 100).toString();
      result.textContent = firstNumber;
    }
  } else {
    if (secondNumber !== "") {
      secondNumber = (parseFloat(secondNumber) / 100).toString();
      result.textContent = secondNumber;
    }
  }
});

const draggable = document.getElementById("draggable");
let isDragging = false;
let offsetX, offsetY;

draggable.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - draggable.offsetLeft;
  offsetY = e.clientY - draggable.offsetTop;
  draggable.style.cursor = "grabbing";
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  draggable.style.cursor = "grab";
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    draggable.style.left = `${e.clientX - offsetX}px`;
    draggable.style.top = `${e.clientY - offsetY}px`;
  }
});