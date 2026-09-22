import React, { useState } from "react";
import {
  FiArrowUpRight,
  FiCheck,
  FiClock,
  FiMail,
  FiMapPin,
  FiPhone,
  FiShield,
  FiTool,
  FiWind,
  FiHome,
  FiBriefcase,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

import "../styles/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    propertyType: "",
    contactMethod: "WhatsApp",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const services = [
    {
      value: "AC Installation",
      label: "AC Installation",
      icon: FiWind,
    },
    {
      value: "Maintenance & Repairs",
      label: "Maintenance & Repairs",
      icon: FiTool,
    },
    {
      value: "Commercial HVAC Solutions",
      label: "Commercial HVAC",
      icon: FiShield,
    },
  ];

  const propertyTypes = [
    {
      value: "Residential",
      label: "Residential",
      icon: FiHome,
    },
    {
      value: "Commercial",
      label: "Commercial",
      icon: FiBriefcase,
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

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleServiceSelect = (service) => {
    setFormData((previous) => ({
      ...previous,
      service,
    }));
  };

  const handlePropertySelect = (propertyType) => {
    setFormData((previous) => ({
      ...previous,
      propertyType,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.service) {
      return;
    }

    setIsSending(true);

    const whatsappMessage = `
Hi Cooling Experts,

I'd like to request a quote.

━━━━━━━━━━━━━━━━━━
CUSTOMER DETAILS
━━━━━━━━━━━━━━━━━━

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || "Not provided"}

━━━━━━━━━━━━━━━━━━
SERVICE DETAILS
━━━━━━━━━━━━━━━━━━

Service: ${formData.service}
Property: ${formData.propertyType || "Not specified"}
Preferred Contact: ${formData.contactMethod}

━━━━━━━━━━━━━━━━━━
MESSAGE
━━━━━━━━━━━━━━━━━━

${formData.message}

Thank you.
    `.trim();

    const whatsappUrl = `https://wa.me/27729336594?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    setTimeout(() => {
      window.location.href = whatsappUrl;
    }, 350);
  };

  return (
    <section
      id="contact"
      className="contact"
      aria-labelledby="contact-heading"
    >
      <div className="contact-container">

        {/* =====================================================
            SEO-OPTIMIZED HEADER
        ===================================================== */}

        <header className="contact-header">

          <div className="contact-header-top">

            <span className="contact-eyebrow">
              Contact Cooling Experts
            </span>

            <span className="contact-status">
              <span
                className="contact-status-dot"
                aria-hidden="true"
              ></span>

              Available for enquiries
            </span>

          </div>


          <h2 id="contact-heading">
            Professional air conditioning
            <span> & HVAC services in Cape Town.</span>
          </h2>


          <p>
            Contact Cooling Experts for air conditioning installation,
            maintenance, repairs, commercial HVAC, refrigeration and
            cooling solutions for homes, businesses and commercial
            properties across Cape Town, including Constantia, Tokai,
            the Northern and Southern Suburbs, Green Point, Sea Point
            and Camps Bay.
          </p>

        </header>


        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}

        <div className="contact-main">

          {/* ===================================================
              CONTACT INFORMATION
          =================================================== */}

          <div className="contact-info">

            <div className="contact-info-intro">

              <span className="contact-info-label">
                Speak to Cooling Experts
              </span>


              <h3>
                Reliable HVAC service.
                <br />
                <span>Practical cooling solutions.</span>
              </h3>


              <p>
                From residential air conditioning installation and
                repairs to commercial HVAC and refrigeration, we provide
                professional cooling solutions for homes, businesses and
                commercial properties throughout Cape Town and our key
                service areas.
              </p>

            </div>


            {/* =================================================
                QUICK ACTIONS
            ================================================= */}

            <div className="contact-quick-actions">

              {/* PHONE */}

              <a
                href="tel:+27729336594"
                className="contact-quick-card"
                aria-label="Call Cooling Experts at 072 933 6594"
              >

                <span
                  className="contact-quick-icon"
                  aria-hidden="true"
                >
                  <FiPhone />
                </span>

                <span>
                  <small>Call Cooling Experts</small>
                  <strong>072 933 6594</strong>
                </span>

                <FiArrowUpRight
                  className="contact-quick-arrow"
                  aria-hidden="true"
                />

              </a>


              {/* WHATSAPP */}

              <a
                href="https://wa.me/27729336594"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-quick-card whatsapp"
                aria-label="Contact Cooling Experts on WhatsApp"
              >

                <span
                  className="contact-quick-icon"
                  aria-hidden="true"
                >
                  <FaWhatsapp />
                </span>

                <span>
                  <small>WhatsApp Cooling Experts</small>
                  <strong>Chat with our team</strong>
                </span>

                <FiArrowUpRight
                  className="contact-quick-arrow"
                  aria-hidden="true"
                />

              </a>

            </div>


            {/* =================================================
                EMAIL
            ================================================= */}

            <a
              href="mailto:coolingexperts90@gmail.com"
              className="contact-detail"
              aria-label="Email Cooling Experts"
            >

              <span
                className="contact-detail-icon"
                aria-hidden="true"
              >
                <FiMail />
              </span>

              <span className="contact-detail-content">

                <small>
                  Email Cooling Experts
                </small>

                <strong>
                  coolingexperts90@gmail.com
                </strong>

              </span>

              <FiArrowUpRight
                className="contact-detail-arrow"
                aria-hidden="true"
              />

            </a>


            {/* =================================================
                SERVICE AREA
            ================================================= */}

            <div
              className="contact-service-area"
              aria-label="Cooling Experts service area"
            >

              <div
                className="contact-area-icon"
                aria-hidden="true"
              >
                <FiMapPin />
              </div>

              <div>

                <span>
                  Service Area
                </span>

                <strong>
                  Cape Town & surrounding areas
                </strong>

              </div>

            </div>


            {/* =================================================
                LOCAL SERVICE AREAS
            ================================================= */}

            <div
              className="contact-service-locations"
              aria-label="Cooling Experts local service areas"
            >

              {serviceAreas.map((area) => (
                <span key={area}>
                  {area}
                </span>
              ))}

            </div>


            {/* =================================================
                TRUST POINTS
            ================================================= */}

            <div className="contact-trust">

              <div className="contact-trust-item">

                <span aria-hidden="true">
                  <FiClock />
                </span>

                <div>

                  <strong>
                    Quick response
                  </strong>

                  <small>
                    We aim to respond promptly
                  </small>

                </div>

              </div>


              <div className="contact-trust-item">

                <span aria-hidden="true">
                  <FiShield />
                </span>

                <div>

                  <strong>
                    Professional service
                  </strong>

                  <small>
                    Reliable HVAC solutions
                  </small>

                </div>

              </div>

            </div>

          </div>


          {/* ===================================================
              ENQUIRY FORM
          =================================================== */}

          <div className="contact-form-wrap">

            <div className="contact-form-header">

              <div>

                <span>
                  Request an HVAC Quote
                </span>

                <h3>
                  Tell us what you need
                </h3>

              </div>

              <span
                className="contact-form-number"
                aria-hidden="true"
              >
                01
              </span>

            </div>


            <form
              className="contact-form"
              onSubmit={handleSubmit}
              aria-label="Cooling Experts air conditioning and HVAC enquiry form"
            >

              {/* =============================================
                  NAME
              ============================================== */}

              <div className="contact-field">

                <label htmlFor="name">
                  Your Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                />

              </div>


              {/* =============================================
                  PHONE + EMAIL
              ============================================== */}

              <div className="contact-field-row">

                <div className="contact-field">

                  <label htmlFor="phone">
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="072 000 0000"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    required
                  />

                </div>


                <div className="contact-field">

                  <label htmlFor="email">
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                  />

                </div>

              </div>


              {/* =============================================
                  SERVICE
              ============================================== */}

              <div className="contact-field">

                <label htmlFor="service">
                  HVAC Service Required
                </label>


                <div
                  className="contact-service-options"
                  aria-label="Select HVAC service"
                >

                  {services.map((service) => {

                    const Icon = service.icon;

                    const isSelected =
                      formData.service === service.value;

                    return (
                      <button
                        type="button"
                        key={service.value}
                        className={`contact-service-option ${
                          isSelected ? "selected" : ""
                        }`}
                        onClick={() =>
                          handleServiceSelect(service.value)
                        }
                        aria-pressed={isSelected}
                      >

                        <span
                          className="contact-service-option-icon"
                          aria-hidden="true"
                        >
                          <Icon />
                        </span>

                        <span>
                          {service.label}
                        </span>

                        {isSelected && (
                          <FiCheck
                            className="contact-service-option-check"
                            aria-hidden="true"
                          />
                        )}

                      </button>
                    );

                  })}

                </div>


                <select
                  id="service"
                  name="service"
                  value={
                    [
                      "AC Installation",
                      "Maintenance & Repairs",
                      "Commercial HVAC Solutions",
                    ].includes(formData.service)
                      ? ""
                      : formData.service
                  }
                  onChange={handleChange}
                  className="contact-other-service"
                >

                  <option value="">
                    Other service
                  </option>

                  <option value="Cold & Freezer Rooms">
                    Cold & Freezer Rooms
                  </option>

                  <option value="Energy-Efficient Upgrades">
                    Energy-Efficient Upgrades
                  </option>

                  <option value="Other">
                    Other HVAC service
                  </option>

                </select>

              </div>


              {/* =============================================
                  PROPERTY TYPE
              ============================================== */}

              <div className="contact-field">

                <label>
                  Property Type
                </label>

                <div
                  className="contact-property-options"
                  aria-label="Select property type"
                >

                  {propertyTypes.map((property) => {

                    const Icon = property.icon;

                    const isSelected =
                      formData.propertyType === property.value;

                    return (
                      <button
                        type="button"
                        key={property.value}
                        className={`contact-property-option ${
                          isSelected ? "selected" : ""
                        }`}
                        onClick={() =>
                          handlePropertySelect(
                            property.value
                          )
                        }
                        aria-pressed={isSelected}
                      >

                        <Icon aria-hidden="true" />

                        <span>
                          {property.label}
                        </span>

                        {isSelected && (
                          <FiCheck aria-hidden="true" />
                        )}

                      </button>
                    );

                  })}

                </div>

              </div>


              {/* =============================================
                  PREFERRED CONTACT
              ============================================== */}

              <div className="contact-field">

                <label htmlFor="contactMethod">
                  Preferred Contact Method
                </label>

                <select
                  id="contactMethod"
                  name="contactMethod"
                  value={formData.contactMethod}
                  onChange={handleChange}
                >

                  <option value="WhatsApp">
                    WhatsApp
                  </option>

                  <option value="Phone Call">
                    Phone Call
                  </option>

                  <option value="Email">
                    Email
                  </option>

                </select>

              </div>


              {/* =============================================
                  MESSAGE
              ============================================== */}

              <div className="contact-field">

                <label htmlFor="message">
                  Tell us about your HVAC requirement
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Briefly describe the air conditioning, HVAC or refrigeration service you need..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />

              </div>


              {/* =============================================
                  SUBMIT
              ============================================== */}

              <button
                type="submit"
                className="contact-submit"
                disabled={isSending}
              >

                {isSending ? (
                  <>
                    <span>
                      Opening WhatsApp...
                    </span>

                    <FaWhatsapp aria-hidden="true" />
                  </>
                ) : (
                  <>
                    <span>
                      Continue on WhatsApp
                    </span>

                    <FaWhatsapp aria-hidden="true" />
                  </>
                )}

              </button>


              <p className="contact-form-note">
                Your enquiry will open directly in WhatsApp.
                You can review the message before sending it.
              </p>

            </form>

          </div>

        </div>


        {/* =====================================================
            BOTTOM STRIP
        ===================================================== */}

        <div className="contact-bottom">

          <span>
            Professional HVAC services across Cape Town
          </span>

          <div
            className="contact-bottom-line"
            aria-hidden="true"
          ></div>

          <span>
            Cooling Experts
          </span>

        </div>

      </div>
    </section>
  );
};

export default Contact;