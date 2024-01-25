"use strict";

import createTodo from "./create-to-do";

function pageLoad() {
  const content = document.getElementById("content");
  createTodo();
}

export default pageLoad;
