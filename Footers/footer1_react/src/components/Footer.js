import React, { useState, useEffect } from "react";
import "./Footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer() {
  const [year, setYear] = useState("");
  const [showButton, setShowButton] = useState(false);

  // dynamic year
  useEffect(() => {
    setYear(new Date().getFullYear());

    // scroll listener
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // smooth scroll
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <a href="/" className="footer-logo">
            Sibanda Design
          </a>

          <p className="brand-tagline">
            Creating digital magic.
          </p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <h3>Explore</h3>

          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </div>

        {/* Social media things */}
        <div className="footer-socials">
          <h3>Connect With Us</h3>

          <div className="social-icons">
            <a href="/" className="social-icon">
              <i className="fa-brands fa-facebook-f"></i>
            </a>

            <a href="/" className="social-icon">
              <i className="fa-brands fa-x-twitter"></i>
            </a>

            <a href="/" className="social-icon">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="bottom-container">

          <p className="copyright">
            &copy; {year} Sibanda Design. All rights reserved.
          </p>

          {showButton && (
            <button
              className="back-to-top-btn"
              onClick={scrollToTop}
            >
              Back to Top
              <i className="fa-solid fa-arrow-up"></i>
            </button>
          )}

        </div>
      </div>
    </footer>
  );
}

export default Footer;