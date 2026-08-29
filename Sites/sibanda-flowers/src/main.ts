import "./styles/main.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { App } from "./App";

function attachEventListeners() {
  const menuButton = document.getElementById("menu-button");
  const dropdown = document.getElementById("dropdown");

  if (menuButton && dropdown) {
    menuButton.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdown.classList.toggle("hidden");
    });

    // Close menu when clicking any mobile link
    const mobileLinks = dropdown.querySelectorAll(".mobile-link");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        dropdown.classList.add("hidden");
      });
    });

    // Optional: Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!dropdown.contains(e.target as Node) && !menuButton.contains(e.target as Node)) {
        dropdown.classList.add("hidden");
      }
    });
  }
}

function render() {
  const app = document.querySelector<HTMLDivElement>("#app");

  if (!app) return;

  app.innerHTML = App();

  attachEventListeners();
}

render();

window.addEventListener("hashchange", render);