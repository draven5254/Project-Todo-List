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

/***/ "./src/addLIst.js":
/*!************************!*\
  !*** ./src/addLIst.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createAddList)\n/* harmony export */ });\n\"use script\";\n\nfunction createAddList() {\n  const addListContainer = document.createElement(\"div\");\n  addListContainer.classList.add(\"add-book active\");\n\n  // BUTTON X\n  const btn3 = document.createElement(\"button\");\n  btn3.classList.add(\"btn3\");\n  const iconX = document.createElement(\"i\");\n  iconX.classList.add(\"fa-solid fa-x\");\n\n  addListContainer.appendChild(btn3);\n  btn3.appendChild(iconX);\n\n  // FORM CONTAINER\n  const formContainer = document.createElement(\"div\");\n  formContainer.classList.add(\"form-container\");\n\n  const h3 = document.createElement(\"h3\");\n  h3.textContent = \"Task Info\";\n\n  // FORM\n  const newListForm = document.createElement(\"form\");\n  newListForm.classList.add(\"new-book-form\");\n  newListForm.id = \"add-book-form\";\n\n  addListContainer.appendChild(formContainer);\n}\n\n\n//# sourceURL=webpack://project-todo-list/./src/addLIst.js?");

/***/ }),

/***/ "./src/create-to-do.js":
/*!*****************************!*\
  !*** ./src/create-to-do.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createTodo)\n/* harmony export */ });\n/* harmony import */ var _addLIst__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addLIst */ \"./src/addLIst.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n\n\n\n\n\nfunction createTodo() {\n  const header = document.querySelector(\".header-container\");\n  const addBook = document.querySelector(\".btn1\");\n\n  const closeBtn = document.querySelector(\".btn3\");\n  const bookInfo = document.querySelector(\".add-book\");\n\n  addBook.addEventListener(\"click\", () => {\n    header.classList.add(\"active\");\n    bookInfo.classList.remove(\"active\");\n  });\n\n  closeBtn.addEventListener(\"click\", () => {\n    header.classList.remove(\"active\");\n    bookInfo.classList.add(\"active\");\n  });\n\n  // To-do list array container\n  let myLibrary = [];\n\n  // Load books from localStorage when the page loads\n  window.addEventListener(\"load\", () => {\n    const storedLibrary = localStorage.getItem(\"myLibrary\");\n    if (storedLibrary) {\n      myLibrary = JSON.parse(storedLibrary);\n      displayBooks(myLibrary); // Display the loaded books\n    }\n  });\n\n  class Book {\n    constructor(title, description, date, priority) {\n      this.title = title;\n      this.description = description;\n      this.date = date;\n      this.priority = priority;\n    }\n  }\n\n  function saveLibraryToLocalStorage() {\n    // Save myLibrary to localStorage\n    localStorage.setItem(\"myLibrary\", JSON.stringify(myLibrary));\n  }\n\n  function addBookToLibrary(book) {\n    myLibrary.push(book);\n\n    // Clear the form fields.\n    document.querySelector(\"#title\").value = \"\";\n    document.querySelector(\"#description\").value = \"\";\n    document.querySelector(\"#date\").value = \"\";\n    document.querySelector(\"#priority\").value = \"low\";\n\n    displayBooks(myLibrary); // Display the updated library\n    saveLibraryToLocalStorage(); // Save the updated library to localStorage\n  }\n\n  function addBookFormSubmit() {\n    // Get the form Data\n    let title = document.querySelector(\"#title\").value;\n    let description = document.querySelector(\"#description\").value;\n    let dates = document.querySelector(\"#date\").value;\n    let priorities = document.querySelector(\"#priority\").value;\n\n    // Create a new Book object with the form data.\n    let newBook = new Book(title, description, dates, priorities);\n\n    // Add the new book to the library.\n    addBookToLibrary(newBook);\n  }\n\n  const addBookForm = document.getElementById(\"add-book-form\");\n  addBookForm.addEventListener(\"submit\", (event) => {\n    bookInfo.classList.add(\"active\");\n    header.classList.remove(\"active\");\n\n    // Prevent the form from submitting to the server.\n    event.preventDefault();\n\n    addBookFormSubmit();\n  });\n\n  function displayBooks(books) {\n    // Get the container element where we will display the books.\n    const container = document.querySelector(\"#book-container\");\n    // const status = document.querySelector(\"#status\");\n\n    // Clear the container before adding the updated books.\n    container.innerHTML = \"\";\n\n    // Create a card for each book.\n    for (let i = 0; i < books.length; i++) {\n      const book = books[i];\n\n      const card = document.createElement(\"div\");\n      card.classList.add(\"book-card\");\n\n      // Add the book title to the card.\n      const title = document.createElement(\"h3\");\n      title.classList.add(\"title\");\n      title.innerText = `Title: ${book.title}`;\n      card.appendChild(title);\n\n      // Add the book author to the card.\n      const description = document.createElement(\"p\");\n      description.classList.add(\"description\");\n      description.innerText = `Description: ${book.description}`;\n      card.appendChild(description);\n\n      // Add the book release date to the card.\n      const pages = document.createElement(\"p\");\n      pages.innerText = `Due date: ${book.date}`;\n      card.appendChild(pages);\n\n      const priority = document.createElement(\"p\");\n      priority.innerText = `Priority: ${book.priority}`;\n      card.appendChild(priority);\n\n      // Add the Delete button COntainer\n      const buttons = document.createElement(\"div\");\n      buttons.classList.add(\"buttons\");\n      card.appendChild(buttons);\n\n      // Add a delete button to the card.\n      const deleteButton = document.createElement(\"button\");\n      deleteButton.classList.add(\"deleteBtn\");\n      deleteButton.innerText = \"Delete\";\n      deleteButton.addEventListener(\"click\", () => {\n        const response = confirm(\"Do you want to delete this file?\");\n\n        if (response) {\n          // Remove the book from myLibrary array   // Delete the file.\n          myLibrary.splice(i, 1);\n        } else {\n          // Do nothing.\n        }\n\n        // Update the display and localStorage\n        displayBooks(myLibrary);\n        saveLibraryToLocalStorage();\n      });\n      buttons.appendChild(deleteButton);\n\n      container.appendChild(card);\n    }\n  }\n}\n\n\n//# sourceURL=webpack://project-todo-list/./src/create-to-do.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createHeader)\n/* harmony export */ });\n\n\nfunction createHeader() {\n  const content = document.createElement(\"div\");\n  content.className = \"content\";\n\n  // Create header element\n  const header = document.createElement(\"header\");\n  header.className = \"header-container\";\n\n  // Create nav element\n  const nav = document.createElement(\"nav\");\n  nav.className = \"navbar\";\n\n  // Create logo div\n  const logoDiv = document.createElement(\"div\");\n  logoDiv.className = \"logo\";\n\n  // Create logo image\n  const logoImg = document.createElement(\"img\");\n  logoImg.src = \"./img/to-do-list.png\";\n  logoImg.alt = \"logo image\";\n\n  // Create h1 element\n  const h1 = document.createElement(\"h1\");\n  h1.textContent = \"List\";\n\n  // Append logo image and h1 to logo div\n  logoDiv.appendChild(logoImg);\n  logoDiv.appendChild(h1);\n\n  // Create button\n  const button = document.createElement(\"button\");\n  button.className = \"btn1\";\n\n  // Create icon element\n  const icon = document.createElement(\"i\");\n  icon.className = \"fa-solid fa-plus\";\n\n  // Append icon and text to button\n  button.appendChild(icon);\n  button.appendChild(document.createTextNode(\"ADD Task\"));\n\n  // Append logo div and button to nav\n  nav.appendChild(logoDiv);\n  nav.appendChild(button);\n\n  // Create hero div\n  const heroDiv = document.createElement(\"div\");\n  heroDiv.className = \"hero\";\n  heroDiv.id = \"book-container\";\n\n  // Append nav and hero div to header\n  header.appendChild(nav);\n  header.appendChild(heroDiv);\n\n  // Append header to body\n  content.appendChild(header);\n}\n\n\n//# sourceURL=webpack://project-todo-list/./src/header.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _create_to_do__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-to-do */ \"./src/create-to-do.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _addLIst__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addLIst */ \"./src/addLIst.js\");\n\n\n\n\n\n\nfunction pageLoad() {\n  const content = document.getElementById(\"content\");\n  (0,_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  (0,_addLIst__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  (0,_create_to_do__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);\n\n\n//# sourceURL=webpack://project-todo-list/./src/page-load.js?");

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