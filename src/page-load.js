"use strict";

// Page Load Website
// this is for github update 80

import createTodo from "./create-to-do";
import createHeader from "./header";
import createAddList from "./addList";

function pageLoad() {
  createHeader();
  createAddList();
  createTodo();
}

export default pageLoad;
