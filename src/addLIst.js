"use script";

import createTodo from "./create-to-do";

export default function createAddList() {
  const content = document.getElementById("content");

  const addListContainer = document.createElement("div");
  addListContainer.classList.add("add-book", "active");

  // BUTTON X
  const btn3 = document.createElement("button");
  btn3.classList.add("btn3");
  const iconX = document.createElement("i");
  iconX.classList.add("fa-solid", "fa-x");

  // FORM CONTAINER
  const formContainer = document.createElement("div");
  formContainer.classList.add("form-container");

  const h3 = document.createElement("h3");
  h3.textContent = "Task Info";

  // FORM
  const newListForm = document.createElement("form");
  newListForm.classList.add("new-book-form");
  newListForm.id = "add-book-form";

  // TITLE
  const title = document.createElement("div");
  title.classList.add("title");

  const inputTitle = document.createElement("input");
  inputTitle.type = "text";
  inputTitle.id = "title";
  inputTitle.name = "title";
  inputTitle.placeholder = "Title...";
  inputTitle.required = true;

  // DESCRIPTION
  const description = document.createElement("div");
  title.classList.add("title");

  const inputDescription = document.createElement("input");
  inputDescription.type = "text";
  inputDescription.id = "description";
  inputDescription.name = "description";
  inputDescription.placeholder = "Description...";
  inputDescription.required = true;

  // DATE
  const date = document.createElement("div");
  date.classList.add("date");

  const labelDate = document.createElement("label");
  labelDate.setAttribute("for", "date");
  labelDate.textContent = "Due Date:";

  const inputDate = document.createElement("input");
  inputDate.setAttribute("type", "date");
  inputDate.setAttribute("id", "date");
  inputDate.setAttribute("name", "date");
  inputDate.setAttribute("placeholder", "Due Date...");
  inputDate.setAttribute("required", "");

  // PRIORITY
  const priority = document.createElement("div");
  date.classList.add("priority");

  const labelPriority = document.createElement("label");
  labelPriority.setAttribute("for", "priority");
  labelPriority.textContent = "Priority:";

  const selectPriority = document.createElement("select");
  selectPriority.setAttribute("id", "priority");

  const option1 = document.createElement("option");
  const option2 = document.createElement("option");
  const option3 = document.createElement("option");

  option1.value = "Low";
  option2.value = "Medium";
  option3.value = "High";

  option1.textContent = "Low";
  option2.textContent = "Medium";
  option3.textContent = "High";

  //Button
  const btn2Container = document.createElement("div");
  btn2Container.classList.add("bookInFormation");

  const btn2 = document.createElement("button");
  btn2.type = "submit";
  btn2.value = "Add Book";
  btn2.classList.add("btn2");
  btn2.textContent = "SUBMIT";

  const iconSave = document.createElement("i");
  iconSave.classList.add("fa-solid", "fa-floppy-disk");

  addListContainer.appendChild(btn2);
  btn2.appendChild(iconSave);

  content.appendChild(addListContainer);

  addListContainer.appendChild(formContainer);
  formContainer.appendChild(h3);
  formContainer.appendChild(newListForm);

  newListForm.appendChild(title);
  title.appendChild(inputTitle);

  newListForm.appendChild(description);
  description.appendChild(inputDescription);

  newListForm.appendChild(date);
  date.appendChild(labelDate);
  date.appendChild(inputDate);

  newListForm.appendChild(priority);
  priority.appendChild(labelPriority);
  priority.appendChild(option1);
  priority.appendChild(option2);
  priority.appendChild(option3);

  newListForm.appendChild(btn2Container);
  btn2.appendChild(iconSave);
  btn2Container.appendChild(btn2);
}
