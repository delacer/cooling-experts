import React, { useState, useEffect } from "react";
import { FiPhone } from "react-icons/fi";
import "../styles/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add background effect when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Close mobile menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      aria-label="Main navigation"
    >
      <div className="navbar-container">

        {/* ==============================
            LOGO
        ============================== */}
        <a
          href="#hero"
          className="navbar-logo"
          onClick={closeMenu}
          aria-label="Cooling Experts - Home"
        >
          <span className="logo-icon">❄️</span>
          <span className="logo-text">Cooling Experts</span>
        </a>


        {/* ==============================
            MOBILE MENU BUTTON
        ============================== */}
        <button
          type="button"
          className={`menu-toggle ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label={
            isOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={isOpen}
          aria-controls="main-navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>


        {/* ==============================
            NAVIGATION LINKS
        ============================== */}
        <ul
          id="main-navigation"
          className={`nav-links ${isOpen ? "open" : ""}`}
        >

          <li>
            <a href="#hero" onClick={closeMenu}>
              Home
            </a>
          </li>

          <li>
            <a href="#services" onClick={closeMenu}>
              Services
            </a>
          </li>

          <li>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>

          <li>
            <a href="#testimonials" onClick={closeMenu}>
              Testimonials
            </a>
          </li>

          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>


          {/* ==============================
              CALL TO ACTION
          ============================== */}
          <li className="nav-cta-item">
            <a
              href="tel:+27729336594"
              className="nav-cta-btn"
              onClick={closeMenu}
              aria-label="Call Cooling Experts at 072 933 6594"
            >
              <FiPhone className="phone-icon" />
              <span>Call Now</span>
            </a>
          </li>

        </ul>

      </div>
    </nav>
  );
};

export default Navbar;