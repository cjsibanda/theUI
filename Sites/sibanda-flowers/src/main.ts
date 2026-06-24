import "./styles/main.css";

import { App } from "./App";

document.querySelector<HTMLDivElement>("#app")!.innerHTML =
  App();

const menuButton =
  document.getElementById("menu-button");

const dropdown =
  document.getElementById("dropdown");

menuButton?.addEventListener("click", () => {
  dropdown?.classList.toggle("hidden");
});