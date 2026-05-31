const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".slide");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const dotsContainer = document.querySelector(".dots");

let currentIndex = 0;

/* Create Dots */

slides.forEach((slide, index) => {

    const dot = document.createElement("div");

    dot.classList.add("dot");

    if (index === 0) {
        dot.classList.add("active");
    }

    dot.addEventListener("click", () => {

        currentIndex = index;

        updateCarousel();
    });

    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

/* Update Carousel */

function updateCarousel() {

    track.style.transform =
        `translateX(-${currentIndex * 100}%)`;

    dots.forEach(dot =>
        dot.classList.remove("active")
    );

    dots[currentIndex].classList.add("active");
}

/* Next */

nextBtn.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }

    updateCarousel();
});

/* Previous */

prevBtn.addEventListener("click", () => {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }

    updateCarousel();
});

/* Auto Play */

setInterval(() => {

    currentIndex++;

    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }

    updateCarousel();

}, 4000);

/* Example Button Action */

document.querySelectorAll(".goto-btn")
.forEach((button, index) => {

    button.addEventListener("click", () => {

        alert(`Navigating from Slide ${index + 1}`);

    });

});