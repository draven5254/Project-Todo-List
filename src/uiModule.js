"use strict";

// uiModule.js
const header = document.querySelector(".header-container");
const addBook = document.querySelector(".btn1");
const closeBtn = document.querySelector(".btn3");
const bookInfo = document.querySelector(".add-book");

addBook.addEventListener("click", () => {
  header.classList.add("active");
  bookInfo.classList.remove("active");
});

closeBtn.addEventListener("click", () => {
  header.classList.remove("active");
  bookInfo.classList.add("active");
});

export default { header, addBook, closeBtn, bookInfo };
