"use strict";

export default function createHeader() {
  const content = document.createElement("div");
  content.className = "content";

  // Create header element
  const header = document.createElement("header");
  header.className = "header-container";

  // Create nav element
  const nav = document.createElement("nav");
  nav.className = "navbar";

  // Create logo div
  const logoDiv = document.createElement("div");
  logoDiv.className = "logo";

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
  button.className = "btn1";

  // Create icon element
  const icon = document.createElement("i");
  icon.className = "fa-solid fa-plus";

  // Append icon and text to button
  button.appendChild(icon);
  button.appendChild(document.createTextNode("ADD Task"));

  // Append logo div and button to nav
  nav.appendChild(logoDiv);
  nav.appendChild(button);

  // Create hero div
  const heroDiv = document.createElement("div");
  heroDiv.className = "hero";
  heroDiv.id = "book-container";

  // Append nav and hero div to header
  header.appendChild(nav);
  header.appendChild(heroDiv);

  // Append header to body
  content.appendChild(header);
}
