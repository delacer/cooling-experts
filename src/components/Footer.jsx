import React from "react";
import {
  FiArrowUpRight,
  FiMail,
  FiMapPin,
  FiPhone,
  FiWind,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

import "../styles/footer.css";
import logo from "../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const serviceAreas = [
    "Constantia",
    "Tokai",
    "Northern Suburbs",
    "Southern Suburbs",
    "Green Point",
    "Sea Point",
    "Camps Bay",
  ];

  return (
    <footer
      className="footer"
      id="footer"
      aria-label="Cooling Experts footer"
    >
      <div className="footer-container">

        {/* ================================
            MAIN FOOTER
        ================================= */}

        <div className="footer-main">

          {/* BRAND / BUSINESS INFORMATION */}

          <div className="footer-brand">

            <a
              href="#hero"
              className="footer-logo"
              aria-label="Cooling Experts - Air Conditioning and HVAC Services in Cape Town"
            >
              <img
                src={logo}
                alt="Cooling Experts - HVAC Services Cape Town"
                loading="lazy"
                decoding="async"
              />
            </a>

            <p className="footer-description">
              Cooling Experts provides professional air conditioning,
              HVAC and refrigeration solutions for homes, businesses
              and commercial properties across Cape Town and surrounding
              areas.
            </p>

            <div className="footer-actions">

              {/* WhatsApp */}

              <a
                href="https://wa.me/27729336594?text=Hi%20Cooling%20Experts,%20I'd%20like%20to%20make%20an%20enquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="footer-action footer-action-primary"
                aria-label="Contact Cooling Experts on WhatsApp"
              >
                <FaWhatsapp aria-hidden="true" />
                <span>Chat Now</span>
              </a>


              {/* Phone */}

              <a
                href="tel:+27729336594"
                className="footer-action footer-action-secondary"
                aria-label="Call Cooling Experts at 072 933 6594"
              >
                <FiPhone aria-hidden="true" />
                <span>Call Now</span>
              </a>

            </div>

          </div>


          {/* ================================
              QUICK LINKS
          ================================= */}

          <div className="footer-column">

            <h2 className="footer-column-title">
              Quick Links
            </h2>

            <nav
              className="footer-links"
              aria-label="Footer navigation"
            >

              <a href="#hero">
                Home
                <FiArrowUpRight aria-hidden="true" />
              </a>

              <a href="#about">
                About Cooling Experts
                <FiArrowUpRight aria-hidden="true" />
              </a>

              <a href="#services">
                HVAC Services
                <FiArrowUpRight aria-hidden="true" />
              </a>

              <a href="#testimonials">
                Customer Testimonials
                <FiArrowUpRight aria-hidden="true" />
              </a>

              <a href="#contact">
                Contact Cooling Experts
                <FiArrowUpRight aria-hidden="true" />
              </a>

            </nav>

          </div>


          {/* ================================
              SERVICES
          ================================= */}

          <div className="footer-column">

            <h2 className="footer-column-title">
              Our HVAC Services
            </h2>

            <nav
              className="footer-links"
              aria-label="Cooling Experts HVAC services"
            >

              <a
                href="#services"
                aria-label="Air conditioning installation services in Cape Town"
              >
                AC Installation
                <FiArrowUpRight aria-hidden="true" />
              </a>

              <a
                href="#services"
                aria-label="Air conditioning maintenance and repair services in Cape Town"
              >
                Maintenance & Repairs
                <FiArrowUpRight aria-hidden="true" />
              </a>

              <a
                href="#services"
                aria-label="Cold and freezer room solutions in Cape Town"
              >
                Cold & Freezer Rooms
                <FiArrowUpRight aria-hidden="true" />
              </a>

              <a
                href="#services"
                aria-label="Commercial HVAC solutions in Cape Town"
              >
                Commercial HVAC
                <FiArrowUpRight aria-hidden="true" />
              </a>

              <a
                href="#services"
                aria-label="Energy-efficient air conditioning upgrades in Cape Town"
              >
                Energy-Efficient Upgrades
                <FiArrowUpRight aria-hidden="true" />
              </a>

            </nav>

          </div>


          {/* ================================
              CONTACT / LOCAL BUSINESS
          ================================= */}

          <div className="footer-column footer-contact-column">

            <h2 className="footer-column-title">
              Contact Cooling Experts
            </h2>


            {/* Phone */}

            <a
              href="tel:+27729336594"
              className="footer-contact-item"
              aria-label="Call Cooling Experts at 072 933 6594"
            >
              <span
                className="footer-contact-icon"
                aria-hidden="true"
              >
                <FiPhone />
              </span>

              <span className="footer-contact-text">
                <small>Phone</small>
                <strong>072 933 6594</strong>
              </span>
            </a>


            {/* Email */}

            <a
              href="mailto:coolingexperts90@gmail.com"
              className="footer-contact-item"
              aria-label="Email Cooling Experts"
            >
              <span
                className="footer-contact-icon"
                aria-hidden="true"
              >
                <FiMail />
              </span>

              <span className="footer-contact-text">
                <small>Email</small>
                <strong>
                  coolingexperts90@gmail.com
                </strong>
              </span>
            </a>


            {/* Service Area */}

            <div
              className="footer-contact-item"
              aria-label="Cooling Experts service area"
            >
              <span
                className="footer-contact-icon"
                aria-hidden="true"
              >
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

        <section
          className="footer-area"
          aria-labelledby="footer-area-heading"
        >

          <div className="footer-area-heading">

            <span
              className="footer-area-icon"
              aria-hidden="true"
            >
              <FiWind />
            </span>

            <h2 id="footer-area-heading">
              HVAC Services Across Cape Town
            </h2>

          </div>


          <div
            className="footer-area-list"
            aria-label="Cooling Experts service areas"
          >

            {serviceAreas.map((area) => (
              <span key={area}>
                {area}
              </span>
            ))}

          </div>

        </section>


        {/* ================================
            BOTTOM
        ================================= */}

        <div className="footer-bottom">

          <p>
            © {currentYear} Cooling Experts.
            All rights reserved.
          </p>


          <div className="footer-bottom-center">

            <span
              className="footer-status-dot"
              aria-hidden="true"
            ></span>

            <span>
              Professional HVAC Solutions
            </span>

          </div>


          <a
            href="#hero"
            className="footer-back-top"
            aria-label="Back to top of Cooling Experts website"
          >
            <span>Back to top</span>
            <FiArrowUpRight aria-hidden="true" />
          </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;