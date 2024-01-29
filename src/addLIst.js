"use script";

export default function createAddList() {
  const addListContainer = document.createElement("div");
  addListContainer.classList.add("add-book active");

  // BUTTON X
  const btn3 = document.createElement("button");
  btn3.classList.add("btn3");
  const iconX = document.createElement("i");
  iconX.classList.add("fa-solid fa-x");

  addListContainer.appendChild(btn3);
  btn3.appendChild(iconX);

  // FORM CONTAINER
  const formContainer = document.createElement("div");
  formContainer.classList.add("form-container");

  const h3 = document.createElement("h3");
  h3.textContent = "Task Info";

  // FORM
  const newListForm = document.createElement("form");
  newListForm.classList.add("new-book-form");
  newListForm.id = "add-book-form";

  addListContainer.appendChild(formContainer);
}
