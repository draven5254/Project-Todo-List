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

/***/ "./src/displayModule.js":
/*!******************************!*\
  !*** ./src/displayModule.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayBooks: () => (/* binding */ displayBooks)\n/* harmony export */ });\n\n\n// import { displayBooks } from \"./bookModule\";\n\n// displayModule.js\nfunction displayBooks(books) {\n  const container = document.querySelector(\"#book-container\");\n  container.innerHTML = \"\";\n\n  for (let i = 0; i < books.length; i++) {\n    const book = books[i];\n    const card = document.createElement(\"div\");\n    card.classList.add(\"book-card\");\n\n    // Add the book title to the card.\n    const title = document.createElement(\"h3\");\n    title.classList.add(\"title\");\n    title.innerText = `Title: ${book.title}`;\n    card.appendChild(title);\n\n    // Add the book author to the card.\n    const description = document.createElement(\"p\");\n    description.classList.add(\"description\");\n    description.innerText = `Description: ${book.description}`;\n    card.appendChild(description);\n\n    // Add the book release date to the card.\n    const pages = document.createElement(\"p\");\n    pages.innerText = `Due date: ${book.date}`;\n    card.appendChild(pages);\n\n    const priority = document.createElement(\"p\");\n    priority.innerText = `Priority: ${book.priority}`;\n    card.appendChild(priority);\n\n    // Add the Delete button COntainer\n    const buttons = document.createElement(\"div\");\n    buttons.classList.add(\"buttons\");\n    card.appendChild(buttons);\n\n    // Add a delete button to the card.\n    const deleteButton = document.createElement(\"button\");\n    deleteButton.classList.add(\"deleteBtn\");\n    deleteButton.innerText = \"Delete\";\n    deleteButton.addEventListener(\"click\", () => {\n      const response = confirm(\"Do you want to delete this file?\");\n\n      if (response) {\n        // Remove the book from myLibrary array   // Delete the file.\n        myLibrary.splice(i, 1);\n      } else {\n        // Do nothing.\n      }\n\n      // Update the display and localStorage\n      displayBooks(myLibrary);\n      saveLibraryToLocalStorage();\n    });\n    buttons.appendChild(deleteButton);\n\n    container.appendChild(card);\n  }\n}\n\n\n\n\n//# sourceURL=webpack://project-todo-list/./src/displayModule.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _uiModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uiModule */ \"./src/uiModule.js\");\n/* harmony import */ var _displayModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayModule */ \"./src/displayModule.js\");\n\n\n// import createTodo from \"./create-to-do\";\n\n// import localStorageModule from \"./localStorageModule\"\n\n\nfunction pageLoad() {\n  const content = document.getElementById(\"content\");\n  // createTodo();\n  (0,_uiModule__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  (0,_displayModule__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  // localStorageModule()\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);\n\n\n//# sourceURL=webpack://project-todo-list/./src/page-load.js?");

/***/ }),

/***/ "./src/uiModule.js":
/*!*************************!*\
  !*** ./src/uiModule.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\n// uiModule.js\nconst header = document.querySelector(\".header-container\");\nconst addBook = document.querySelector(\".btn1\");\nconst closeBtn = document.querySelector(\".btn3\");\nconst bookInfo = document.querySelector(\".add-book\");\n\naddBook.addEventListener(\"click\", () => {\n  header.classList.add(\"active\");\n  bookInfo.classList.remove(\"active\");\n});\n\ncloseBtn.addEventListener(\"click\", () => {\n  header.classList.remove(\"active\");\n  bookInfo.classList.add(\"active\");\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ header, addBook, closeBtn, bookInfo });\n\n\n//# sourceURL=webpack://project-todo-list/./src/uiModule.js?");

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