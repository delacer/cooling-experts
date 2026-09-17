import React from "react";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section
      id="hero"
      className="hero"
      aria-labelledby="hero-heading"
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">

        {/* Trust Badge */}
        <div className="hero-badge">
          <span>⭐ Cape Town HVAC Specialists</span>
        </div>

        {/* Main Heading */}
        <h1 id="hero-heading" className="hero-title">
          Reliable Air Conditioning Solutions in Cape Town
        </h1>

        {/* Supporting Text */}
        <p className="hero-subtitle">
          Professional air conditioning installation, maintenance,
          and repairs for homes and businesses across Cape Town.
        </p>

        {/* Service Areas */}
        <p className="hero-areas">
          Serving the Northern & Southern Suburbs, Constantia,
          CBD, Green Point, Sea Point and surrounding areas.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="cta-buttons">

          <a
            href="https://wa.me/27729336594?text=Hi%20Cooling%20Experts,%20I'd%20like%20to%20book%20an%20HVAC%20service."
            className="cta-btn primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Service
          </a>

          <a
            href="tel:+27729336594"
            className="cta-btn secondary call"
            aria-label="Call Cooling Experts at 072 933 6594"
          >
            Call Now: 072 933 6594
          </a>

        </div>

      </div>
    </section>
  );
};

export default Hero;