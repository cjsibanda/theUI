// --> selecting all the buttons
const addButtons = document.querySelectorAll(".add-btn");

// --> looping through the bottons
addButtons.forEach((button) => {

  button.addEventListener("click", () => {

    // find product card
    const productCard = button.parentElement;

    // --> get the product card
    const productName =
      productCard.querySelector(".product-name").textContent;

    // --> change the button text
    button.textContent = "Added ✓";

    // --> change the bootin color
    button.style.backgroundColor = "#0a7a33";

    // --> disable the button
    button.disabled = true;

    // --> a small animation
    productCard.style.transform = "scale(1.03)";

    setTimeout(() => {
      productCard.style.transform = "scale(1)";
    }, 200);

    // --> the console message
    console.log(`${productName} added to cart.`);
  });

});