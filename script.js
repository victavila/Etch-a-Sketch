const container = document.querySelector("#container");
const slider = document.querySelector(".slider");
const blackBtn = document.querySelector("#black-btn");
const rainbowBtn = document.querySelector("#rainbow");
const resetBtn = document.querySelector("#reset");
const eraserBtn = document.querySelector("#eraser");
let size = 100 / slider.value;
let color = 1;
let colors = [
  "red",
  "orange",
  "yellow",
  "lime",
  "blue",
  "cyan",
  "magenta",
  "gray",
];

function createDivs() {
  for (let i = 0; i < slider.value ** 2; i++) {
    const boxi = document.createElement("div");
    boxi.classList.add("box");
    container.appendChild(boxi);
  }
}

function randomColor() {
  let randomNum = Math.floor(Math.random() * 8);
  return colors[randomNum];
}

function clearSketch() {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.style.backgroundColor = "white";
  });
}

function createBoxes(boxes) {
  boxes.forEach((box) => {
    box.style.width = `${size}%`;
    box.style.paddingBottom = `${size}%`;
    box.addEventListener("mouseenter", function () {
      if (color === 1) {
        box.style.backgroundColor = "black";
      } else if (color === 0) {
        box.style.backgroundColor = randomColor();
      } else if (color === 2) {
        box.style.backgroundColor = "white";
      }
    });
  });
}

function clearNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

createDivs();
const boxes = document.querySelectorAll(".box");
createBoxes(boxes);

slider.addEventListener("change", function () {
  clearNodes(container);
  createDivs();
  const boxes = document.querySelectorAll(".box");
  size = 100 / slider.value;
  createBoxes(boxes);
});

resetBtn.addEventListener("click", function () {
  clearSketch();
});

blackBtn.addEventListener("click", function () {
  color = 1;
});

rainbowBtn.addEventListener("click", function () {
  color = 0;
});

eraserBtn.addEventListener("click", function () {
  color = 2;
});
