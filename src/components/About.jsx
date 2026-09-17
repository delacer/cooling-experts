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
      title: "Reliable Service",
      text: "Dependable workmanship and service you can count on.",
    },
    {
      icon: FiTool,
      title: "Expert Workmanship",
      text: "Professional installation, maintenance, and repairs.",
    },
    {
      icon: FiZap,
      title: "Efficient Solutions",
      text: "Modern systems designed with performance and efficiency in mind.",
    },
  ];

  const serviceAreas = [
    "Northern Suburbs",
    "Southern Suburbs",
    "Constantia",
    "Cape Town CBD",
    "Green Point",
    "Sea Point",
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
              Comfort engineered.
              <span>Service you can trust.</span>
            </h2>

          </div>

          <div className="about-intro">

            <p>
              Cooling Experts provides professional air conditioning
              and refrigeration solutions for homes, businesses, and
              commercial properties across Cape Town.
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
                alt="Cooling Experts air conditioning technician"
                loading="lazy"
              />

              <div className="about-image-overlay"></div>

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

            <div className="about-location-card">

              <div className="about-location-icon">
                <FiMapPin />
              </div>

              <div>
                <span>Serving</span>
                <strong>Cape Town & surrounds</strong>
              </div>

            </div>

          </div>


          {/* CONTENT SIDE */}

          <div className="about-content">

            <span className="about-content-label">
              Built around your comfort
            </span>

            <h3>
              More than cooling.
              <br />
              <span>We create better spaces.</span>
            </h3>

            <p className="about-lead">
              At Cooling Experts, we believe a good air-conditioning
              system should do more than simply cool a room. It should
              provide reliable comfort, operate efficiently, and be
              installed correctly from the start.
            </p>

            <p>
              From residential installations to commercial HVAC and
              refrigeration solutions, our approach is simple:
              understand the property, recommend the right solution,
              and deliver professional workmanship that lasts.
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

                    <div className="about-strength-icon">
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
              >
                <span>Request a Quote</span>
                <FiArrowUpRight />
              </a>

              <a
                href="#services"
                className="about-secondary-btn"
              >
                Explore Our Services
                <FiArrowUpRight />
              </a>

            </div>

          </div>

        </div>


        {/* =========================================
            SERVICE AREA STRIP
        ========================================= */}

        <div className="about-area">

          <div className="about-area-heading">

            <span className="about-area-number">
              02
            </span>

            <div>
              <span className="about-area-eyebrow">
                Where we work
              </span>

              <h3>
                Serving Cape Town
                <span>and surrounding areas.</span>
              </h3>
            </div>

          </div>


          <div className="about-area-list">

            {serviceAreas.map((area) => (

              <div
                className="about-area-item"
                key={area}
              >

                <span className="about-area-check">
                  <FiCheck />
                </span>

                <span>
                  {area}
                </span>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;