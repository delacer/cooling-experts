import React, { useState } from "react";
import {
  FiArrowUpRight,
  FiCheck,
  FiClock,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiPhone,
  FiShield,
  FiTool,
  FiWind,
  FiHome,
  FiBriefcase,
} from "react-icons/fi";

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

    /*
      Small delay gives the button time to show
      the sending state before WhatsApp opens.
    */
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
            HEADER
        ===================================================== */}

        <div className="contact-header">

          <div className="contact-header-top">

            <span className="contact-eyebrow">
              Get In Touch
            </span>

            <span className="contact-status">
              <span className="contact-status-dot"></span>
              Available for enquiries
            </span>

          </div>

          <h2 id="contact-heading">
            Let's get your
            <span> cooling sorted.</span>
          </h2>

          <p>
            Tell us what you need and our team will help you
            find the right cooling or HVAC solution for your
            property.
          </p>

        </div>


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
                Professional service.
                <br />
                <span>Practical solutions.</span>
              </h3>

              <p>
                From residential air conditioning to commercial
                HVAC and refrigeration, we provide dependable
                solutions across Cape Town.
              </p>

            </div>


            {/* =================================================
                QUICK ACTIONS
            ================================================= */}

            <div className="contact-quick-actions">

              <a
                href="tel:+27729336594"
                className="contact-quick-card"
                aria-label="Call Cooling Experts"
              >

                <span className="contact-quick-icon">
                  <FiPhone />
                </span>

                <span>
                  <small>Call us</small>
                  <strong>072 933 6594</strong>
                </span>

                <FiArrowUpRight className="contact-quick-arrow" />

              </a>


              <a
                href="https://wa.me/27729336594"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-quick-card whatsapp"
                aria-label="Contact Cooling Experts on WhatsApp"
              >

                <span className="contact-quick-icon">
                  <FiMessageCircle />
                </span>

                <span>
                  <small>WhatsApp</small>
                  <strong>Chat with our team</strong>
                </span>

                <FiArrowUpRight className="contact-quick-arrow" />

              </a>

            </div>


            {/* =================================================
                EMAIL
            ================================================= */}

            <a
              href="mailto:coolingexperts90@gmail.com"
              className="contact-detail"
            >

              <span className="contact-detail-icon">
                <FiMail />
              </span>

              <span className="contact-detail-content">

                <small>
                  Email us
                </small>

                <strong>
                  coolingexperts90@gmail.com
                </strong>

              </span>

              <FiArrowUpRight className="contact-detail-arrow" />

            </a>


            {/* =================================================
                SERVICE AREA
            ================================================= */}

            <div className="contact-service-area">

              <div className="contact-area-icon">
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
                TRUST POINTS
            ================================================= */}

            <div className="contact-trust">

              <div className="contact-trust-item">

                <span>
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

                <span>
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
                  Request a Quote
                </span>

                <h3>
                  Tell us what you need
                </h3>

              </div>

              <span className="contact-form-number">
                01
              </span>

            </div>


            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              {/* =============================================
                  NAME
              ============================================= */}

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
              ============================================= */}

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
              ============================================= */}

              <div className="contact-field">

                <label>
                  What do you need?
                </label>

                <div className="contact-service-options">

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

                        <span className="contact-service-option-icon">
                          <Icon />
                        </span>

                        <span>
                          {service.label}
                        </span>

                        {isSelected && (
                          <FiCheck
                            className="contact-service-option-check"
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
                    Other
                  </option>

                </select>

              </div>


              {/* =============================================
                  PROPERTY TYPE
              ============================================= */}

              <div className="contact-field">

                <label>
                  Property Type
                </label>

                <div className="contact-property-options">

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
                          handlePropertySelect(property.value)
                        }
                        aria-pressed={isSelected}
                      >

                        <Icon />

                        <span>
                          {property.label}
                        </span>

                        {isSelected && (
                          <FiCheck />
                        )}

                      </button>
                    );

                  })}

                </div>

              </div>


              {/* =============================================
                  PREFERRED CONTACT
              ============================================= */}

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
              ============================================= */}

              <div className="contact-field">

                <label htmlFor="message">
                  Tell us more
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Briefly describe what you need..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />

              </div>


              {/* =============================================
                  SUBMIT
              ============================================= */}

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

                    <FiMessageCircle />
                  </>
                ) : (
                  <>
                    <span>
                      Continue on WhatsApp
                    </span>

                    <FiMessageCircle />
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
            Professional HVAC solutions across Cape Town
          </span>

          <div className="contact-bottom-line"></div>

          <span>
            Cooling Experts
          </span>

        </div>

      </div>
    </section>
  );
};

export default Contact;