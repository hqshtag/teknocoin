const boxes = document.querySelectorAll(".color-box");
let colors = [];

boxes.forEach((elem, index) => {
  colors[index] = elem.id;
  elem.setAttribute("style", `background-color: ${elem.id}`);
  elem.addEventListener("click", () => {
    console.log("ayy");
    document
      .querySelector(".jumbotron")
      .setAttribute("style", `background-color: ${elem.id}`);
  });
});

console.log(colors);
