"use strict";

import createTodo from "./create-to-do";
import createHeader from "./header";
import createAddList from "./addLIst";

function pageLoad() {
  const content = document.createElement("div");

  createHeader();
  createAddList();
  createTodo();
}

export default pageLoad;
