"use strict";

import { displayBooks } from "./displayModule";

// localStorageModule.js
let myLibrary = [];

window.addEventListener("load", () => {
  const storedLibrary = localStorage.getItem("myLibrary");
  if (storedLibrary) {
    myLibrary = JSON.parse(storedLibrary);
    displayBooks(myLibrary);
  }
});

function saveLibraryToLocalStorage() {
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

export { myLibrary, saveLibraryToLocalStorage };
