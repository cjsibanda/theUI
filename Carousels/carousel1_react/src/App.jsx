import { useState, useEffect } from "react";
import "../styles/Carousel.css";

const slides = [
  {
    title: "Slide 1",
    className: "red"
  },
  {
    title: "Slide 2",
    className: "blue"
  },
  {
    title: "Slide 3",
    className: "green"
  },
  {
    title: "Slide 4",
    className: "purple"
  },
  {
    title: "Slide 5",
    className: "orange"
  },
  {
    title: "Slide 6",
    className: "teal"
  }
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="hero">
        <h1 className="main-heading">
          Welcome to Sibanda Design
        </h1>

        <p className="sub-heading">
          Modern Web Development • Digital Magic • Responsive Design
        </p>
      </section>

      <div className="carousel-container">
        <button className="nav-btn" onClick={prevSlide}>
          &#10094;
        </button>

        <div className="carousel-wrapper">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`slide ${slide.className}`}
              >
                <h2>{slide.title}</h2>

                <button
                  className="goto-btn"
                  onClick={() =>
                    alert(
                      `Navigating from ${slide.title}`
                    )
                  }
                >
                  Go To
                </button>
              </div>
            ))}
          </div>
        </div>

        <button className="nav-btn" onClick={nextSlide}>
          &#10095;
        </button>
      </div>

      <div className="dots">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dot ${
              currentIndex === index
                ? "active"
                : ""
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </>
  );
}

export default Carousel;