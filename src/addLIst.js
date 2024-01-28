"use script";

export default function createAddList() {
  const content = document.createElement("div");
  content.classList.add("content");

  // Create div element
  var addBookDiv = document.createElement("div");
  addBookDiv.className = "add-book active";

  // Create button
  var btn3 = document.createElement("button");
  btn3.className = "btn3";

  // Create icon element for button
  var iconX = document.createElement("i");
  iconX.className = "fa-solid fa-x";

  // Append icon to button
  btn3.appendChild(iconX);

  // Create form container div
  var formContainerDiv = document.createElement("div");
  formContainerDiv.className = "form-container";

  // Create h3 element
  var h3 = document.createElement("h3");
  h3.textContent = "Task info";

  // Create form element
  var newBookForm = document.createElement("form");
  newBookForm.className = "new-book-form";
  newBookForm.id = "add-book-form";

  // Create input elements
  var titleInput = createInputElement("text", "title", "Title...", true);
  var descriptionInput = createInputElement(
    "text",
    "description",
    "Description...",
    true,
    60
  );
  var dateInput = createInputElement("date", "date", "Due Date...", true);
  var prioritySelect = createSelectElement("priority", [
    "Low",
    "Medium",
    "High",
  ]);

  // Create button for form
  var btn2 = document.createElement("button");
  btn2.className = "btn2";
  btn2.type = "submit";
  btn2.value = "Add Book";

  // Create icon element for button in form
  var iconFloppyDisk = document.createElement("i");
  iconFloppyDisk.className = "fa-solid fa-floppy-disk";

  // Append icon and text to button
  btn2.appendChild(iconFloppyDisk);
  btn2.appendChild(document.createTextNode("SUBMIT"));

  // Append input elements and button to form
  newBookForm.appendChild(titleInput);
  newBookForm.appendChild(descriptionInput);
  newBookForm.appendChild(dateInput);
  newBookForm.appendChild(prioritySelect);
  newBookForm.appendChild(btn2);

  // Append h3 and form to form container div
  formContainerDiv.appendChild(h3);
  formContainerDiv.appendChild(newBookForm);

  // Append button and form container div to main div
  addBookDiv.appendChild(btn3);
  addBookDiv.appendChild(formContainerDiv);

  // Append main div to body
  content.appendChild(addBookDiv);

  // Helper function to create input elements
  function createInputElement(type, id, placeholder, required, maxLength) {
    var input = document.createElement("input");
    input.type = type;
    input.id = id;
    input.name = id;
    input.placeholder = placeholder;
    if (required) input.required = true;
    if (maxLength) input.maxLength = maxLength;
    return wrapElement("div", id.toLowerCase(), input);
  }

  // Helper function to create select elements
  function createSelectElement(id, options) {
    var select = document.createElement("select");
    select.id = id;

    for (var i = 0; i < options.length; i++) {
      var option = document.createElement("option");
      option.value = options[i].toLowerCase();
      option.textContent = options[i];
      select.appendChild(option);
    }

    return wrapElement("div", id.toLowerCase(), select, "label");
  }

  // Helper function to wrap elements with a container
  function wrapElement(containerType, containerClass, ...elements) {
    var container = document.createElement(containerType);
    container.className = containerClass;

    for (var i = 0; i < elements.length; i++) {
      // Check if the element is a string (class name) and create a div element for it
      if (typeof elements[i] === "string") {
        var div = document.createElement("div");
        div.className = elements[i];
        container.appendChild(div);
      } else {
        container.appendChild(elements[i]);
      }
    }

    return container;
  }
}
