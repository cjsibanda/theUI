const paymentForm = document.getElementById("paymentForm");
const cardNumber = document.getElementById("cardNumber");
const expiry = document.getElementById("expiry");
const cvv = document.getElementById("cvv");


  // Card Number Formatting


cardNumber.addEventListener("input", (e) => {

  let value = e.target.value.replace(/\D/g, "");

  value = value.replace(/(.{4})/g, "$1 ").trim();

  e.target.value = value;
});


//   Expiry Date Formatting


expiry.addEventListener("input", (e) => {

  let value = e.target.value.replace(/\D/g, "");

  if (value.length >= 3) {
    value = value.substring(0, 2) + "/" + value.substring(2, 4);
  }

  e.target.value = value;
});


//   CVV Numbers Only


cvv.addEventListener("input", (e) => {

  e.target.value = e.target.value.replace(/\D/g, "");
});


//   Fake Payment Animation


paymentForm.addEventListener("submit", (e) => {

  e.preventDefault();

  const submitBtn = document.querySelector(".submit-btn");

  submitBtn.classList.add("loading");
  submitBtn.textContent = "Processing...";

  setTimeout(() => {

    submitBtn.textContent = "Payment Successful ✓";

    submitBtn.style.background = "green";

  }, 1800);
});