// script.js

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const navbar = document.querySelector(".navbar");

// --> for toggling mobile menu - smaller screen sizes
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  // --> Changing the icon dynamically
  const icon = menuToggle.querySelector("i");

  if (navLinks.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});

// --> Navbar scroll effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});