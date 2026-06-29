import "./styles/main.css";

import { App } from "./App";

function attachEventListeners() {
  const menuButton =
    document.getElementById("menu-button");

  const dropdown =
    document.getElementById("dropdown");

  menuButton?.addEventListener("click", () => {
    dropdown?.classList.toggle("hidden");
  });
}

function render() {
  const app =
    document.querySelector<HTMLDivElement>("#app");

  if (!app) return;

  app.innerHTML = App();

  attachEventListeners();
}

render();

window.addEventListener("hashchange", render);