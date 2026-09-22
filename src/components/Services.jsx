import React, { useEffect, useState } from "react";
import {
  FiWind,
  FiTool,
  FiBox,
  FiHome,
  FiZap,
  FiArrowUpRight,
  FiX,
  FiCheck,
  FiPhone,
  FiMessageCircle,
  FiMapPin,
} from "react-icons/fi";

import "../styles/services.css";

// Service images
import installationImage from "../assets/expert.jpeg";
import maintenanceImage from "../assets/repair.jpeg";
import coldRoomsImage from "../assets/rooms.jpeg";
import commercialImage from "../assets/commercial.jpeg";
import upgradesImage from "../assets/upgrades.jpeg";

const Services = ({ onSelectService }) => {
  const [activeService, setActiveService] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  const servicesList = [
    {
      id: "installation",
      number: "01",
      title: "Air Conditioning Installation",
      label: "Installation",
      shortLabel: "Climate Control",
      description:
        "Professional air conditioning installation for homes, offices, and businesses across Cape Town. We provide system sizing, installation, testing, and commissioning for split, ducted, and inverter air conditioning systems.",
      icon: FiWind,
      image: installationImage,
      alt:
        "Professional air conditioning installation service in Cape Town",
      featured: true,
      benefits: [
        "Professional system sizing",
        "Split and inverter systems",
        "Expert air conditioning installation",
        "Testing and commissioning",
      ],
    },

    {
      id: "maintenance",
      number: "02",
      title: "Air Conditioning Maintenance & Repairs",
      label: "Maintenance",
      shortLabel: "Service & Repairs",
      description:
        "Reliable air conditioning maintenance and repair services across Cape Town. Preventative servicing, fault finding, diagnostics, cleaning, and performance checks help keep your cooling system operating efficiently.",
      icon: FiTool,
      image: maintenanceImage,
      alt:
        "Air conditioning maintenance and repair service in Cape Town",
      benefits: [
        "Preventative maintenance",
        "Fault finding and diagnostics",
        "Air conditioning repairs",
        "Performance checks",
      ],
    },

    {
      id: "cold-rooms",
      number: "03",
      title: "Cold & Freezer Room Solutions",
      label: "Refrigeration",
      shortLabel: "Commercial Refrigeration",
      description:
        "Professional cold room and freezer room solutions for commercial properties in Cape Town. We provide installation, refrigeration systems, display chillers, servicing, and ongoing maintenance.",
      icon: FiBox,
      image: coldRoomsImage,
      alt:
        "Commercial cold room and freezer room refrigeration solution in Cape Town",
      benefits: [
        "Cold room installation",
        "Freezer room solutions",
        "Display chiller systems",
        "Refrigeration servicing",
      ],
    },

    {
      id: "commercial",
      number: "04",
      title: "Commercial HVAC Solutions",
      label: "Commercial",
      shortLabel: "Commercial HVAC",
      description:
        "Commercial HVAC solutions for offices, retail spaces, and business properties across Cape Town. We provide climate control installation, system maintenance, and tailored HVAC solutions for commercial environments.",
      icon: FiHome,
      image: commercialImage,
      alt:
        "Commercial HVAC climate control system for a business property in Cape Town",
      benefits: [
        "Commercial HVAC systems",
        "Office climate control",
        "Retail HVAC solutions",
        "Ongoing maintenance",
      ],
    },

    {
      id: "upgrades",
      number: "05",
      title: "Energy-Efficient Air Conditioning Upgrades",
      label: "Efficiency",
      shortLabel: "Energy Efficiency",
      description:
        "Upgrade older air conditioning systems with modern inverter technology and efficient climate controls. Our energy-efficient HVAC upgrades are designed to improve performance and help reduce unnecessary energy consumption.",
      icon: FiZap,
      image: upgradesImage,
      alt:
        "Energy-efficient air conditioning system upgrade in Cape Town",
      benefits: [
        "Inverter technology",
        "Improved energy efficiency",
        "Modern system upgrades",
        "Smart climate controls",
      ],
    },
  ];

  const handleServiceSelect = (service) => {
    setActiveService(service.id);
    setSelectedService(service);

    if (onSelectService) {
      onSelectService(service);
    }
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  // Lock page scroll while modal is open
  useEffect(() => {
    if (!selectedService) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedService]);

  return (
    <>
      <section
        id="services"
        className="services"
        aria-labelledby="services-heading"
      >
        {/* =========================
            BACKGROUND
        ========================== */}

        <div
          className="services-grid-pattern"
          aria-hidden="true"
        ></div>

        <div
          className="services-orb services-orb-one"
          aria-hidden="true"
        ></div>

        <div
          className="services-orb services-orb-two"
          aria-hidden="true"
        ></div>


        <div className="services-container">

          {/* =========================
              SEO-OPTIMIZED HEADER
          ========================== */}

          <header className="services-header">

            <div className="services-heading">

              <div className="services-eyebrow-wrap">

                <span
                  className="services-eyebrow-line"
                  aria-hidden="true"
                ></span>

                <span className="services-eyebrow">
                  HVAC Services in Cape Town
                </span>

              </div>


              <h2 id="services-heading">
                Air conditioning & HVAC solutions
                <span>for homes and businesses.</span>
              </h2>


              <p className="services-heading-description">
                Cooling Experts provides professional air conditioning,
                HVAC and refrigeration services across Cape Town,
                including installation, maintenance, repairs,
                commercial climate control, cold rooms and
                energy-efficient system upgrades.
              </p>

            </div>


            <div className="services-intro">

              <div className="services-intro-top">

                <span className="services-intro-number">
                  01 — 05
                </span>

                <span className="services-intro-status">
                  <span></span>
                  Cape Town
                </span>

              </div>

              <p>
                From residential air conditioning installation and
                repairs to commercial HVAC and refrigeration
                solutions, we provide reliable climate control
                systems designed around your property.
              </p>

            </div>

          </header>


          {/* =========================
              SERVICE GRID
          ========================== */}

          <div className="services-grid">

            {servicesList.map((service) => {
              const Icon = service.icon;

              const isActive =
                activeService === service.id;

              return (
                <article
                  key={service.id}
                  className={`
                    service-card
                    ${service.featured ? "featured" : ""}
                    ${isActive ? "active" : ""}
                  `}
                  aria-labelledby={`service-title-${service.id}`}
                >

                  {/* =========================
                      SERVICE IMAGE
                  ========================== */}

                  <div className="service-card-image">

                    <img
                      src={service.image}
                      alt={service.alt}
                      loading={service.featured ? "eager" : "lazy"}
                      decoding="async"
                    />

                    <div
                      className="service-card-overlay"
                      aria-hidden="true"
                    ></div>


                    <div className="service-card-top">

                      <span className="service-number">
                        {service.number}
                      </span>

                      <span className="service-image-label">
                        {service.shortLabel}
                      </span>

                    </div>


                    <div
                      className="service-card-icon"
                      aria-hidden="true"
                    >
                      <Icon />
                    </div>


                    {service.featured && (
                      <div className="featured-image-content">

                        <span>
                          COOLING EXPERTS
                        </span>

                        <strong>
                          Professional climate control
                        </strong>

                        <p>
                          Designed, installed and commissioned
                          for reliable everyday comfort.
                        </p>

                      </div>
                    )}

                  </div>


                  {/* =========================
                      SERVICE CONTENT
                  ========================== */}

                  <div className="service-card-content">

                    <div className="service-card-heading">

                      <span className="service-label">
                        {service.label}
                      </span>

                      <h3 id={`service-title-${service.id}`}>
                        {service.title}
                      </h3>

                    </div>


                    <p>
                      {service.description}
                    </p>


                    <button
                      type="button"
                      className="service-link"
                      onClick={() =>
                        handleServiceSelect(service)
                      }
                      aria-label={`View details for ${service.title}`}
                    >

                      <span>
                        Explore Service
                      </span>

                      <span
                        className="service-link-icon"
                        aria-hidden="true"
                      >
                        <FiArrowUpRight />
                      </span>

                    </button>

                  </div>

                </article>
              );
            })}

          </div>


          {/* =========================
              BOTTOM CTA
          ========================== */}

          <div className="services-bottom">

            <div className="services-bottom-copy">

              <span
                className="services-bottom-line"
                aria-hidden="true"
              ></span>

              <div>

                <small>
                  HAVE A PROJECT IN MIND?
                </small>

                <span>
                  Need a cooling solution for your property?
                </span>

              </div>

            </div>


            <a
              href="#contact"
              className="services-bottom-link"
              aria-label="Contact Cooling Experts about your HVAC project"
            >
              <span>
                Speak to Cooling Experts
              </span>

              <span aria-hidden="true">
                <FiArrowUpRight />
              </span>

            </a>

          </div>

        </div>
      </section>


      {/* =========================
          SERVICE DETAILS MODAL
      ========================== */}

      {selectedService && (
        <div
          className="service-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
          onClick={closeModal}
        >

          <div
            className="service-modal-content"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            {/* CLOSE */}

            <button
              type="button"
              className="service-modal-close"
              onClick={closeModal}
              aria-label="Close service details"
            >
              <FiX aria-hidden="true" />
            </button>


            {/* =========================
                MODAL IMAGE
            ========================== */}

            <div className="service-modal-image">

              <img
                src={selectedService.image}
                alt={selectedService.alt}
                decoding="async"
              />

              <div
                className="service-modal-image-overlay"
                aria-hidden="true"
              ></div>


              <div className="modal-image-top">

                <span>
                  {selectedService.number}
                </span>

                <span>
                  {selectedService.label}
                </span>

              </div>


              <div className="modal-image-bottom">

                <span>
                  COOLING EXPERTS
                </span>

                <strong>
                  Cape Town HVAC Specialists
                </strong>

              </div>

            </div>


            {/* =========================
                MODAL BODY
            ========================== */}

            <div className="service-modal-body">

              <div className="service-modal-heading">

                <span className="service-modal-label">
                  {selectedService.label}
                </span>

                <h2 id="service-modal-title">
                  {selectedService.title}
                </h2>

              </div>


              <p className="service-modal-description">
                {selectedService.description}
              </p>


              {/* =========================
                  SERVICE BENEFITS
              ========================== */}

              <div className="service-benefits">

                <div className="service-benefits-heading">

                  <div>

                    <span>
                      What we provide
                    </span>

                    <small>
                      Service scope
                    </small>

                  </div>

                  <span className="service-benefits-count">
                    {selectedService.benefits.length}
                  </span>

                </div>


                <div className="service-benefits-list">

                  {selectedService.benefits.map(
                    (benefit, index) => (
                      <div
                        className="service-benefit"
                        key={index}
                      >

                        <span
                          className="benefit-icon"
                          aria-hidden="true"
                        >
                          <FiCheck />
                        </span>

                        <span>
                          {benefit}
                        </span>

                      </div>
                    )
                  )}

                </div>

              </div>


              {/* =========================
                  MODAL ACTIONS
              ========================== */}

              <div className="service-modal-actions">

                <a
                  href="#contact"
                  className="modal-primary-btn"
                  onClick={closeModal}
                >
                  <span>
                    Request a Quote
                  </span>

                  <FiArrowUpRight aria-hidden="true" />
                </a>


                <a
                  href={`https://wa.me/27729336594?text=${encodeURIComponent(
                    `Hi Cooling Experts, I'd like to enquire about ${selectedService.title}.`
                  )}`}
                  className="modal-whatsapp-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ask Cooling Experts about ${selectedService.title} on WhatsApp`}
                >
                  <FiMessageCircle aria-hidden="true" />

                  <span>
                    WhatsApp Us
                  </span>

                </a>


                <a
                  href="tel:+27729336594"
                  className="modal-secondary-btn"
                  aria-label="Call Cooling Experts at 072 933 6594"
                >
                  <FiPhone aria-hidden="true" />

                  <span>
                    072 933 6594
                  </span>

                </a>

              </div>


              {/* =========================
                  LOCAL SERVICE NOTE
              ========================== */}

              <div className="service-modal-trust">

                <span
                  className="trust-icon"
                  aria-hidden="true"
                >
                  <FiMapPin />
                </span>

                <span>
                  Serving homes, businesses and commercial
                  properties across Cape Town.
                </span>

              </div>

            </div>

          </div>

        </div>
      )}

    </>
  );
};

export default Services;