const genNote = (title, content) => {
  return {
    title,
    content,
  };
};

const NOTES = [
  genNote("Warning!", "This is not a test, RUN!"),
  genNote(
    "",
    "Imagine if this is your life's countdonw? what if i told you it is!"
  ),
];

NOTES.forEach((note) => {
  let rightPanel = document.querySelector(".right-content");

  let divNote = document.createElement("div");
  let h3, p;
  if (note.title !== "") {
    h4 = document.createElement("h4");
    h4.innerHTML = note.title;
    divNote.appendChild(h4);
  }
  p = document.createElement("p");
  p.innerHTML = note.content;

  divNote.classList.add("note");

  divNote.appendChild(p);

  rightPanel.appendChild(divNote);
});
