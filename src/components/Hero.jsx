import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faSnowflake,
  faPhone,
  faWind,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

import "../styles/hero.css";
import hvacImage from "../assets/hero.jpeg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="hero"
      aria-labelledby="hero-heading"
    >
      {/* =========================
          BACKGROUND 3D ELEMENTS
      ========================== */}

      <div className="hero-grid"></div>

      <div className="hero-orb hero-orb-one"></div>
      <div className="hero-orb hero-orb-two"></div>

      <div className="hero-glow"></div>

      {/* =========================
          MAIN HERO CONTAINER
      ========================== */}

      <div className="hero-container">

        {/* =========================
            LEFT CONTENT
        ========================== */}

        <div className="hero-content">

          {/* SEO / Location Badge */}
          <div className="hero-badge">
            <span className="badge-dot"></span>

            <FontAwesomeIcon icon={faSnowflake} />

            <span>
              Cape Town HVAC Specialists
            </span>
          </div>


          {/* =========================
              PRIMARY SEO HEADING
          ========================== */}

          <h1
            id="hero-heading"
            className="hero-title"
          >
            Air Conditioning & HVAC Services
            <span>in Cape Town</span>
          </h1>


          {/* =========================
              SEO SUPPORTING CONTENT
          ========================== */}

          <p className="hero-subtitle">
            Professional air conditioning installation, repairs,
            maintenance and HVAC solutions for homes, businesses
            and commercial properties across Cape Town. We provide
            reliable cooling systems designed for comfort,
            performance and efficiency.
          </p>


          {/* =========================
              SERVICE AREAS
          ========================== */}

          <div
            className="hero-location"
            aria-label="Cooling Experts service areas"
          >

            <FontAwesomeIcon icon={faWind} />

            <span>
              Serving Cape Town, Northern & Southern Suburbs,
              Constantia, Cape Town CBD, Green Point, Sea Point
              and surrounding areas.
            </span>

          </div>


          {/* =========================
              CTA BUTTONS
          ========================== */}

          <div className="cta-buttons">

            <a
              href="https://wa.me/27729336594?text=Hi%20Cooling%20Experts,%20I'd%20like%20to%20book%20an%20HVAC%20service."
              className="cta-btn primary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book an HVAC service with Cooling Experts on WhatsApp"
            >
              <FontAwesomeIcon icon={faWhatsapp} />

              <span>
                Book a Service
              </span>
            </a>


            <a
              href="tel:+27729336594"
              className="cta-btn secondary"
              aria-label="Call Cooling Experts at 072 933 6594"
            >
              <FontAwesomeIcon icon={faPhone} />

              <span>
                Call 072 933 6594
              </span>
            </a>

          </div>


          {/* =========================
              TRUST FEATURES
          ========================== */}

          <div className="hero-stats">

            <div className="hero-stat">

              <div className="stat-icon">
                <FontAwesomeIcon icon={faShieldHalved} />
              </div>

              <div>
                <strong>Professional</strong>
                <span>HVAC Services</span>
              </div>

            </div>


            <div className="stat-separator"></div>


            <div className="hero-stat">

              <div className="stat-icon">
                <FontAwesomeIcon icon={faSnowflake} />
              </div>

              <div>
                <strong>Reliable</strong>
                <span>Cooling Solutions</span>
              </div>

            </div>

          </div>

        </div>


        {/* =========================
            RIGHT IMAGE / 3D AREA
        ========================== */}

        <div className="hero-visual">

          {/* Large blue 3D circle */}
          <div className="visual-circle"></div>

          {/* 3D shadow */}
          <div className="visual-shadow"></div>


          {/* =========================
              HVAC IMAGE
          ========================== */}

          <div className="image-3d-wrapper">

            <div className="image-back-layer"></div>

            <div className="image-middle-layer"></div>

            <div className="image-frame">

              <img
                src={hvacImage}
                alt="HVAC technician installing and servicing an air conditioning system in Cape Town"
                className="hero-image"
                width="800"
                height="900"
                fetchPriority="high"
                decoding="async"
              />

              <div className="image-overlay"></div>

            </div>

          </div>


          {/* =========================
              FLOATING SERVICE CARD
          ========================== */}

          <div className="floating-card floating-card-top">

            <div className="floating-icon">
              <FontAwesomeIcon icon={faSnowflake} />
            </div>

            <div>
              <strong>
                Cool Air
              </strong>

              <span>
                Maximum Comfort
              </span>
            </div>

          </div>


          {/* =========================
              FLOATING EXPERT CARD
          ========================== */}

          <div className="floating-card floating-card-bottom">

            <div className="floating-icon">
              <FontAwesomeIcon icon={faShieldHalved} />
            </div>

            <div>
              <strong>
                HVAC Experts
              </strong>

              <span>
                Professional Service
              </span>
            </div>

          </div>


          {/* =========================
              SUPPORT BADGE
          ========================== */}

          <div className="experience-badge">

            <span className="experience-number">
              24/7
            </span>

            <span className="experience-text">
              HVAC Support
            </span>

          </div>

        </div>

      </div>


      {/* =========================
          BOTTOM SCROLL INDICATOR
      ========================== */}

      <div
        className="scroll-indicator"
        aria-hidden="true"
      >
        <span></span>
      </div>

    </section>
  );
};

export default Hero;