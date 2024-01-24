"use strict";

// import createTodo from "./create-to-do";
import uiModule from "./uiModule";
// import localStorageModule from "./localStorageModule"
import displayBooks from "./displayModule";

function pageLoad() {
  const content = document.getElementById("content");
  // createTodo();
  uiModule();
  displayBooks();
  // localStorageModule()
}

export default pageLoad;
