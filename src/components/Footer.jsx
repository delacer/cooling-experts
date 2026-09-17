import React from "react";
import {
  FiArrowUpRight,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiPhone,
  FiWind,
} from "react-icons/fi";

import "../styles/footer.css";
import logo from "../assets/hero-bg.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="footer-container">

        {/* ================================
            MAIN FOOTER
        ================================= */}

        <div className="footer-main">

          {/* BRAND */}
          <div className="footer-brand">

            <a href="#home" className="footer-logo">
              <img
                src={logo}
                alt="Cooling Experts"
              />
            </a>

            <p className="footer-description">
              Professional air conditioning, HVAC, and refrigeration
              solutions for homes, businesses, and commercial properties
              across Cape Town.
            </p>

            <div className="footer-actions">

              <a
                href="https://wa.me/27729336594?text=Hi%20Cooling%20Experts,%20I'd%20like%20to%20make%20an%20enquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="footer-action footer-action-primary"
              >
                <FiMessageCircle />
                <span>WhatsApp Us</span>
              </a>

              <a
                href="tel:+27729336594"
                className="footer-action footer-action-secondary"
              >
                <FiPhone />
                <span>Call Now</span>
              </a>

            </div>

          </div>


          {/* QUICK LINKS */}
          <div className="footer-column">

            <span className="footer-column-title">
              Quick Links
            </span>

            <nav className="footer-links">

              <a href="#hero">
                Home
                <FiArrowUpRight />
              </a>

              <a href="#about">
                About Us
                <FiArrowUpRight />
              </a>

              <a href="#services">
                Services
                <FiArrowUpRight />
              </a>

              <a href="#testimonials">
                Testimonials
                <FiArrowUpRight />
              </a>

              <a href="#contact">
                Contact
                <FiArrowUpRight />
              </a>

            </nav>

          </div>


          {/* SERVICES */}
          <div className="footer-column">

            <span className="footer-column-title">
              Our Services
            </span>

            <nav className="footer-links">

              <a href="#services">
                AC Installation
                <FiArrowUpRight />
              </a>

              <a href="#services">
                Maintenance & Repairs
                <FiArrowUpRight />
              </a>

              <a href="#services">
                Cold & Freezer Rooms
                <FiArrowUpRight />
              </a>

              <a href="#services">
                Commercial HVAC
                <FiArrowUpRight />
              </a>

              <a href="#services">
                Energy-Efficient Upgrades
                <FiArrowUpRight />
              </a>

            </nav>

          </div>


          {/* CONTACT */}
          <div className="footer-column footer-contact-column">

            <span className="footer-column-title">
              Get In Touch
            </span>


            <a
              href="tel:+27729336594"
              className="footer-contact-item"
            >

              <span className="footer-contact-icon">
                <FiPhone />
              </span>

              <span className="footer-contact-text">
                <small>Phone</small>
                <strong>072 933 6594</strong>
              </span>

            </a>


            <a
              href="mailto:coolingexperts90@gmail.com"
              className="footer-contact-item"
            >

              <span className="footer-contact-icon">
                <FiMail />
              </span>

              <span className="footer-contact-text">
                <small>Email</small>
                <strong>
                  coolingexperts90@gmail.com
                </strong>
              </span>

            </a>


            <div className="footer-contact-item">

              <span className="footer-contact-icon">
                <FiMapPin />
              </span>

              <span className="footer-contact-text">
                <small>Service Area</small>
                <strong>
                  Cape Town & Surrounding Areas
                </strong>
              </span>

            </div>

          </div>

        </div>


        {/* ================================
            SERVICE COVERAGE
        ================================= */}

        <div className="footer-area">

          <div className="footer-area-heading">

            <span className="footer-area-icon">
              <FiWind />
            </span>

            <span>
              Serving Cape Town
            </span>

          </div>


          <div className="footer-area-list">

            <span>Northern Suburbs</span>
            <span>Southern Suburbs</span>
            <span>Constantia</span>
            <span>Cape Town CBD</span>
            <span>Green Point</span>
            <span>Sea Point</span>

          </div>

        </div>


        {/* ================================
            BOTTOM
        ================================= */}

        <div className="footer-bottom">

          <p>
            © {currentYear} Cooling Experts.
            All rights reserved.
          </p>


          <div className="footer-bottom-center">

            <span className="footer-status-dot"></span>

            <span>
              Professional HVAC Solutions
            </span>

          </div>


          <a
            href="#hero"
            className="footer-back-top"
          >
            <span>Back to top</span>
            <FiArrowUpRight />
          </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;