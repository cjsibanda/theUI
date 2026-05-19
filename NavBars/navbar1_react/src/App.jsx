import { useState, useEffect } from 'react';
import './index.css';

function App() {
  // --> this state tracks if the mobile menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // --> this state to tracks if the navbar should be styled as "scrolled"
  const [isScrolled, setIsScrolled] = useState(false);

  //--> toggle mobile menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // --> handles scroll event effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // --> cleans up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="logo">
          SIBANDA DESIGN
        </div>

        
        <div className="menu-toggle" id="menu-toggle" onClick={toggleMenu}>
          
          <i className={`fas ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </div>

        
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`} id="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#" className="login-btn">Login</a></li>
        </ul>
      </nav>

      
      <section className="hero">
        <h1>Welcome to SIBANDA DESIGN</h1>
        <p>"If you want to go fast, go alone. If you want to go far, go together. I am because we are." - Ubuntu Philosophy</p>
      </section>
    </>
  );
}

export default App;