/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/create-to-do.js":
/*!*****************************!*\
  !*** ./src/create-to-do.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createTodo)\n/* harmony export */ });\n\n\nfunction createTodo() {\n  const header = document.querySelector(\".header-container\");\n  const addBook = document.querySelector(\".btn1\");\n\n  const closeBtn = document.querySelector(\".btn3\");\n  const bookInfo = document.querySelector(\".add-book\");\n\n  addBook.addEventListener(\"click\", () => {\n    header.classList.add(\"active\");\n    bookInfo.classList.remove(\"active\");\n  });\n\n  closeBtn.addEventListener(\"click\", () => {\n    header.classList.remove(\"active\");\n    bookInfo.classList.add(\"active\");\n  });\n\n  let myLibrary = [\n    // new Book(\"The Lord of the Rings\", \"J.R.R. Tolkien\", 1954),\n    // new Book(\"The Lord of the Rings\", \"J.R.R. Tolkien\", 1954),\n    // new Book(\"The Hitchhiker's Guide to the Galaxy\", \"Douglas Adams\", 1979),\n    // new Book(\"The Lord of the Rings\", \"J.R.R. Tolkien\", 1954),\n  ];\n\n  // Load books from localStorage when the page loads\n  window.addEventListener(\"load\", () => {\n    const storedLibrary = localStorage.getItem(\"myLibrary\");\n    if (storedLibrary) {\n      myLibrary = JSON.parse(storedLibrary);\n      displayBooks(myLibrary); // Display the loaded books\n    }\n  });\n\n  class Book {\n    constructor(title, description, date, priority) {\n      this.title = title;\n      this.description = description;\n      this.date = date;\n      this.priority = priority;\n    }\n  }\n\n  function saveLibraryToLocalStorage() {\n    // Save myLibrary to localStorage\n    localStorage.setItem(\"myLibrary\", JSON.stringify(myLibrary));\n  }\n\n  function addBookToLibrary(book) {\n    myLibrary.push(book);\n\n    // Clear the form fields.\n    document.querySelector(\"#title\").value = \"\";\n    document.querySelector(\"#description\").value = \"\";\n    document.querySelector(\"#date\").value = \"\";\n    document.querySelector(\"#priority\").value = \"low\";\n\n    displayBooks(myLibrary); // Display the updated library\n    saveLibraryToLocalStorage(); // Save the updated library to localStorage\n  }\n\n  function addBookFormSubmit() {\n    // Get the form Data\n    let title = document.querySelector(\"#title\").value;\n    let description = document.querySelector(\"#description\").value;\n    let dates = document.querySelector(\"#date\").value;\n    let priorities = document.querySelector(\"#priority\").value;\n\n    // Create a new Book object with the form data.\n    let newBook = new Book(title, description, dates, priorities);\n\n    // Add the new book to the library.\n    addBookToLibrary(newBook);\n  }\n\n  const addBookForm = document.getElementById(\"add-book-form\");\n  addBookForm.addEventListener(\"submit\", (event) => {\n    bookInfo.classList.add(\"active\");\n    header.classList.remove(\"active\");\n\n    // Prevent the form from submitting to the server.\n    event.preventDefault();\n\n    addBookFormSubmit();\n  });\n\n  function displayBooks(books) {\n    // Get the container element where we will display the books.\n    const container = document.querySelector(\"#book-container\");\n    // const status = document.querySelector(\"#status\");\n\n    // Clear the container before adding the updated books.\n    container.innerHTML = \"\";\n\n    // Create a card for each book.\n    for (let i = 0; i < books.length; i++) {\n      const book = books[i];\n\n      const card = document.createElement(\"div\");\n      card.classList.add(\"book-card\");\n\n      // Add the book title to the card.\n      const title = document.createElement(\"h3\");\n      title.classList.add(\"title\");\n      title.innerText = book.title;\n      card.appendChild(title);\n\n      // Add the book author to the card.\n      const description = document.createElement(\"p\");\n      description.classList.add(\"description\");\n      description.innerText = book.description;\n      card.appendChild(description);\n\n      // Add the book release date to the card.\n      const pages = document.createElement(\"p\");\n      pages.innerText = book.date;\n      card.appendChild(pages);\n\n      const priority = document.createElement(\"p\");\n      priority.innerText = book.priority;\n      card.appendChild(priority);\n\n      // Add the Delete button COntainer\n      const buttons = document.createElement(\"div\");\n      buttons.classList.add(\"buttons\");\n      // buttons.style.display = \"flex\";\n      // buttons.style.justifyContent = \"space-between\";\n      card.appendChild(buttons);\n\n      // Add a delete button to the card.\n      const deleteButton = document.createElement(\"button\");\n      deleteButton.innerText = \"Delete\";\n      deleteButton.addEventListener(\"click\", () => {\n        const response = confirm(\"Do you want to delete this file?\");\n\n        if (response) {\n          // Remove the book from myLibrary array   // Delete the file.\n          myLibrary.splice(i, 1);\n        } else {\n          // Do nothing.\n        }\n\n        // Update the display and localStorage\n        displayBooks(myLibrary);\n        saveLibraryToLocalStorage();\n      });\n      buttons.appendChild(deleteButton);\n\n      container.appendChild(card);\n    }\n  }\n}\n\n\n//# sourceURL=webpack://project-todo-list/./src/create-to-do.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ \"./src/page-load.js\");\n\n\n\n\n(0,_page_load__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://project-todo-list/./src/index.js?");

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   pageLoad: () => (/* binding */ pageLoad)\n/* harmony export */ });\n/* harmony import */ var _create_to_do__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-to-do */ \"./src/create-to-do.js\");\n\n\n\n\nfunction pageLoad() {\n  const content = document.getElementById(\"content\");\n  (0,_create_to_do__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);\n\n\n//# sourceURL=webpack://project-todo-list/./src/page-load.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;