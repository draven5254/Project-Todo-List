"use strict";

import { bookInfo, header } from "./uiModule"; // Import necessary variables from uiModule
import { addBookFormSubmit } from "./bookModule"; // Import addBookFormSubmit function from bookModule

// formModule.js
const addBookForm = document.getElementById("add-book-form");
addBookForm.addEventListener("submit", (event) => {
  bookInfo.classList.add("active");
  header.classList.remove("active");
  event.preventDefault();
  addBookFormSubmit();
});
