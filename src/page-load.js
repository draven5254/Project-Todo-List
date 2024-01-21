"use strict";

import createTodo from "./createBook";

export function pageLoad() {
  const content = document.getElementById("content");
  createTodo();
}

export default pageLoad;
