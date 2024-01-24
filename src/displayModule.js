"use strict";

// import { displayBooks } from "./bookModule";

// displayModule.js
function displayBooks(books) {
  const container = document.querySelector("#book-container");
  container.innerHTML = "";

  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const card = document.createElement("div");
    card.classList.add("book-card");

    // Add the book title to the card.
    const title = document.createElement("h3");
    title.classList.add("title");
    title.innerText = `Title: ${book.title}`;
    card.appendChild(title);

    // Add the book author to the card.
    const description = document.createElement("p");
    description.classList.add("description");
    description.innerText = `Description: ${book.description}`;
    card.appendChild(description);

    // Add the book release date to the card.
    const pages = document.createElement("p");
    pages.innerText = `Due date: ${book.date}`;
    card.appendChild(pages);

    const priority = document.createElement("p");
    priority.innerText = `Priority: ${book.priority}`;
    card.appendChild(priority);

    // Add the Delete button COntainer
    const buttons = document.createElement("div");
    buttons.classList.add("buttons");
    card.appendChild(buttons);

    // Add a delete button to the card.
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteBtn");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", () => {
      const response = confirm("Do you want to delete this file?");

      if (response) {
        // Remove the book from myLibrary array   // Delete the file.
        myLibrary.splice(i, 1);
      } else {
        // Do nothing.
      }

      // Update the display and localStorage
      displayBooks(myLibrary);
      saveLibraryToLocalStorage();
    });
    buttons.appendChild(deleteButton);

    container.appendChild(card);
  }
}

export { displayBooks };
