"use script";

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
  inputDate.setAttribute("required", "");

  // Set the minimum date to today
  const today = new Date();
  const minDate = today.toISOString().split("T")[0];
  inputDate.setAttribute("min", minDate);

  inputDate.addEventListener("change", function () {
    const selectedDate = new Date(this.value);

    // if (selectedDate < today) {
    //   alert("Please select a future date.");
    // }
  });

  // PRIORITY
  const priority = document.createElement("div");
  date.classList.add("priority");

  const labelPriority = document.createElement("label");
  labelPriority.setAttribute("for", "priority");
  labelPriority.textContent = "Priority:";

  const selectPriority = document.createElement("select");
  selectPriority.setAttribute("id", "priority");

  const lowOption = document.createElement("option");
  lowOption.setAttribute("value", "low");
  lowOption.textContent = "Low";

  const mediumOption = document.createElement("option");
  mediumOption.setAttribute("value", "medium");
  mediumOption.textContent = "Medium";

  const highOption = document.createElement("option");
  highOption.setAttribute("value", "high");
  highOption.textContent = "High";

  //Button
  const btn2Container = document.createElement("div");
  btn2Container.classList.add("bookInFormation");

  const btn2 = document.createElement("button");
  btn2.setAttribute("value", "add book");
  btn2.setAttribute("type", "submit");
  btn2.classList.add("btn2");

  const iconSave = document.createElement("i");
  iconSave.classList.add("fa-solid", "fa-floppy-disk");

  content.appendChild(addListContainer);

  addListContainer.appendChild(btn3);
  btn3.appendChild(iconX);

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
  priority.appendChild(selectPriority);
  selectPriority.appendChild(lowOption);
  selectPriority.appendChild(mediumOption);
  selectPriority.appendChild(highOption);

  newListForm.appendChild(btn2Container);
  btn2Container.appendChild(btn2);
  btn2.appendChild(iconSave);
  btn2.appendChild(document.createTextNode("SUBMIT"));
}
