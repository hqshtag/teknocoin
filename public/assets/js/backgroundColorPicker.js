const COLORS = [
  "#b000ff",
  "#00c5ff",
  "#f0ff00",
  "#f9ad81",
  "#a46ee8",
  "#ffb400",
  "#272b4b",
  "#009bee",
  "#ff00a7",
];

const colorPicker = document.getElementById("colorPicker117");

COLORS.forEach((color) => {
  let domElem = document.createElement("div");
  domElem.classList.add("color-box");
  domElem.setAttribute("style", `background-color: ${color}`);
  colorPicker.appendChild(domElem);

  domElem.addEventListener("click", () => {
    document.body.setAttribute("style", `background-color: ${color}`);
  });
});
