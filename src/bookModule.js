"use strict";

// bookModule.js
class Book {
  constructor(title, description, date, priority) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  document.querySelector("#title").value = "";
  document.querySelector("#description").value = "";
  document.querySelector("#date").value = "";
  document.querySelector("#priority").value = "low";
  displayBooks(myLibrary);
  saveLibraryToLocalStorage();
}

function addBookFormSubmit() {
  let title = document.querySelector("#title").value;
  let description = document.querySelector("#description").value;
  let dates = document.querySelector("#date").value;
  let priorities = document.querySelector("#priority").value;

  let newBook = new Book(title, description, dates, priorities);
  addBookToLibrary(newBook);
}

export { Book, addBookToLibrary, addBookFormSubmit };
