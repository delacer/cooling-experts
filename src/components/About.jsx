import React from "react";
import {
  FiArrowUpRight,
  FiCheck,
  FiMapPin,
  FiShield,
  FiTool,
  FiZap,
} from "react-icons/fi";

import "../styles/about.css";

import aboutImage from "../assets/expert.jpeg";

const About = () => {
  const strengths = [
    {
      icon: FiShield,
      title: "Reliable HVAC Service",
      text: "Dependable air conditioning and HVAC workmanship you can count on.",
    },
    {
      icon: FiTool,
      title: "Professional Workmanship",
      text: "Professional air conditioning installation, maintenance, repairs and servicing.",
    },
    {
      icon: FiZap,
      title: "Efficient Cooling Solutions",
      text: "Modern air conditioning and refrigeration solutions designed for performance and energy efficiency.",
    },
  ];

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
    <section
      id="about"
      className="about"
      aria-labelledby="about-heading"
    >
      <div className="about-container">

        {/* =========================================
            HEADER
        ========================================= */}

        <div className="about-header">

          <div className="about-heading">

            <span className="about-eyebrow">
              About Cooling Experts
            </span>

            <h2 id="about-heading">
              Professional HVAC services
              <span>across Cape Town.</span>
            </h2>

          </div>

          <div className="about-intro">

            <p>
              Cooling Experts provides professional air conditioning,
              HVAC and refrigeration solutions for homes, businesses
              and commercial properties across Cape Town and
              surrounding areas.
            </p>

          </div>

        </div>


        {/* =========================================
            MAIN ABOUT CONTENT
        ========================================= */}

        <div className="about-main">

          {/* IMAGE SIDE */}

          <div className="about-visual">

            <div className="about-image-wrap">

              <img
                src={aboutImage}
                alt="HVAC technician providing professional air conditioning service in Cape Town"
                loading="lazy"
                decoding="async"
              />

              <div
                className="about-image-overlay"
                aria-hidden="true"
              ></div>

              {/* IMAGE LABEL */}

              <div className="about-image-label">

                <span className="about-image-label-number">
                  01
                </span>

                <span>
                  Professional HVAC Solutions
                </span>

              </div>

            </div>


            {/* FLOATING LOCATION CARD */}

            <div
              className="about-location-card"
              aria-label="Cooling Experts service area"
            >

              <div
                className="about-location-icon"
                aria-hidden="true"
              >
                <FiMapPin />
              </div>

              <div>
                <span>Serving</span>
                <strong>
                  Cape Town & surrounding areas
                </strong>
              </div>

            </div>

          </div>


          {/* CONTENT SIDE */}

          <div className="about-content">

            <span className="about-content-label">
              Your local HVAC specialists
            </span>

            <h3>
              Reliable air conditioning.
              <br />
              <span>Comfort you can depend on.</span>
            </h3>

            <p className="about-lead">
              At Cooling Experts, we provide professional air
              conditioning and HVAC services designed to keep
              homes, offices and commercial spaces comfortable
              throughout the year.
            </p>

            <p>
              From air conditioning installation and repairs to
              preventative maintenance, commercial HVAC and
              refrigeration solutions, we focus on understanding
              each property and recommending the right cooling
              solution for the space. Our goal is to deliver
              dependable performance, efficient operation and
              professional workmanship.
            </p>


            {/* STRENGTHS */}

            <div className="about-strengths">

              {strengths.map((strength) => {

                const Icon = strength.icon;

                return (
                  <div
                    className="about-strength"
                    key={strength.title}
                  >

                    <div
                      className="about-strength-icon"
                      aria-hidden="true"
                    >
                      <Icon />
                    </div>

                    <div className="about-strength-content">

                      <h4>
                        {strength.title}
                      </h4>

                      <p>
                        {strength.text}
                      </p>

                    </div>

                  </div>
                );

              })}

            </div>


            {/* CTA */}

            <div className="about-actions">

              <a
                href="#contact"
                className="about-primary-btn"
                aria-label="Request a quote for HVAC services from Cooling Experts"
              >
                <span>Request a Quote</span>
                <FiArrowUpRight aria-hidden="true" />
              </a>

              <a
                href="#services"
                className="about-secondary-btn"
                aria-label="Explore Cooling Experts air conditioning and HVAC services"
              >
                Explore Our Services
                <FiArrowUpRight aria-hidden="true" />
              </a>

            </div>

          </div>

        </div>


        {/* =========================================
            SERVICE AREA STRIP
        ========================================= */}

        <section
          className="about-area"
          aria-labelledby="about-area-heading"
        >

          <div className="about-area-heading">

            <span className="about-area-number">
              02
            </span>

            <div>

              <span className="about-area-eyebrow">
                Where we work
              </span>

              <h3 id="about-area-heading">
                HVAC services in Cape Town
                <span>
                  across our key service areas.
                </span>
              </h3>

            </div>

          </div>


          <div
            className="about-area-list"
            aria-label="Cooling Experts service areas"
          >

            {serviceAreas.map((area) => (

              <div
                className="about-area-item"
                key={area}
              >

                <span
                  className="about-area-check"
                  aria-hidden="true"
                >
                  <FiCheck />
                </span>

                <span>
                  Air conditioning services in {area}
                </span>

              </div>

            ))}

          </div>

        </section>

      </div>
    </section>
  );
};

export default About;