"use strict";

import createTodo from "./create-to-do";

export function pageLoad() {
  const content = document.getElementById("content");
  createTodo();
}

export default pageLoad;
