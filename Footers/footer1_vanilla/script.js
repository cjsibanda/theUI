document.addEventListener("DOMContentLoaded", () => {
  // update the copyright year
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // back-to-top interaction
  const backToTopBtn = document.getElementById("back-to-top");
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});