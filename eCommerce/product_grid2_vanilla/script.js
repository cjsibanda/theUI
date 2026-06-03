document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".buy-btn");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const product =
                button.closest(".product-card")
                      .querySelector("h2")
                      .textContent;

            alert(`${product} added to cart!`);
        });
    });

});