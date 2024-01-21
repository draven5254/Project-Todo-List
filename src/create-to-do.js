"use strict";

export default function createTodo() {
  class Todo {
    constructor(title, description, dueDate, priority) {
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
    }
  }

  let todo1 = new Todo(
    "Javascript",
    "Learn javascript",
    new Date("2024-01-23"),
    true
  );

  console.log(todo1.title);
  console.log(todo1.description);
  console.log(todo1.dueDate);
  console.log(todo1.priority);
}
