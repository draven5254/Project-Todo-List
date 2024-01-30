"use strict";

import createTodo from "./create-to-do";

export default function createHeader() {
  const content = document.getElementById("content");

  // Create header element
  const header = document.createElement("header");
  header.classList.add("header-container");

  // Create nav element
  const nav = document.createElement("nav");
  nav.classList.add("navbar");

  // Create logo div
  const logoDiv = document.createElement("div");
  logoDiv.classList.add("logo");

  // Create logo image
  const logoImg = document.createElement("img");
  logoImg.src = "./img/to-do-list.png";
  logoImg.alt = "logo image";

  // Create h1 element
  const h1 = document.createElement("h1");
  h1.textContent = "List";

  // Append logo image and h1 to logo div
  logoDiv.appendChild(logoImg);
  logoDiv.appendChild(h1);

  // Create button
  const button = document.createElement("button");
  button.classList.add("btn1");

  // Create icon element
  const icon = document.createElement("i");
  icon.classList.add("fa-solid", "fa-plus");

  // Append icon and text to button
  button.appendChild(icon);
  button.appendChild(document.createTextNode("ADD Task"));

  // Append logo div and button to nav
  nav.appendChild(logoDiv);
  nav.appendChild(button);

  // Create hero div
  const heroDiv = document.createElement("div");
  heroDiv.classList.add("hero");
  heroDiv.id = "book-container";

  // Append header to body
  content.appendChild(header);

  // Append nav and hero div to header
  header.appendChild(nav);
  header.appendChild(heroDiv);
}
