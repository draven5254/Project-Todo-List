"use strict";

// Website

import createTodo from "./create-to-do";
import createHeader from "./header";
import createAddList from "./addList";

function pageLoad() {
  createHeader();
  createAddList();
  createTodo();
}

export default pageLoad;
