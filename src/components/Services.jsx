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
      title: "AC Installation",
      label: "Installation",
      shortLabel: "Climate Control",
      description:
        "Professional sizing and installation of split, ducted, and inverter air conditioning systems for homes and businesses.",
      icon: FiWind,
      image: installationImage,
      alt: "Professional air conditioning installation",
      featured: true,
      benefits: [
        "Professional system sizing",
        "Split and inverter systems",
        "Expert installation",
        "Testing and commissioning",
      ],
    },
    {
      id: "maintenance",
      number: "02",
      title: "Maintenance & Repairs",
      label: "Maintenance",
      shortLabel: "Service & Repairs",
      description:
        "Preventative servicing, fault-finding, and reliable repairs to keep your air conditioning running efficiently year-round.",
      icon: FiTool,
      image: maintenanceImage,
      alt: "Air conditioning maintenance and repairs",
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
      title: "Cold & Freezer Rooms",
      label: "Refrigeration",
      shortLabel: "Commercial Refrigeration",
      description:
        "Custom design, installation, and servicing for commercial cold rooms, freezer rooms, and display chillers.",
      icon: FiBox,
      image: coldRoomsImage,
      alt: "Commercial cold and freezer room",
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
        "Tailored climate control systems, installation, and maintenance for offices, retail spaces, and commercial properties.",
      icon: FiHome,
      image: commercialImage,
      alt: "Commercial HVAC system",
      benefits: [
        "Commercial HVAC systems",
        "Office climate control",
        "Retail solutions",
        "Ongoing maintenance",
      ],
    },
    {
      id: "upgrades",
      number: "05",
      title: "Energy-Efficient Upgrades",
      label: "Efficiency",
      shortLabel: "Energy Efficiency",
      description:
        "Upgrade older systems with modern inverter technology and smart controls to improve efficiency and reduce energy costs.",
      icon: FiZap,
      image: upgradesImage,
      alt: "Energy efficient air conditioning system",
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
        <div className="services-grid-pattern"></div>

        <div className="services-orb services-orb-one"></div>
        <div className="services-orb services-orb-two"></div>

        <div className="services-container">

          {/* HEADER */}
          <header className="services-header">
            <div className="services-heading">

              <div className="services-eyebrow-wrap">
                <span className="services-eyebrow-line"></span>

                <span className="services-eyebrow">
                  What We Offer
                </span>
              </div>

              <h2 id="services-heading">
                Cooling solutions
                <span>you can rely on.</span>
              </h2>

              <p className="services-heading-description">
                Professional air conditioning, HVAC and refrigeration
                solutions designed for homes, businesses and commercial
                properties across Cape Town.
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
                From installation and repairs to commercial climate
                control and refrigeration, our services are built around
                reliable performance and professional workmanship.
              </p>
            </div>
          </header>


          {/* SERVICE GRID */}
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
                >

                  {/* IMAGE */}
                  <div className="service-card-image">

                    <img
                      src={service.image}
                      alt={service.alt}
                      loading="lazy"
                    />

                    <div className="service-card-overlay"></div>

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


                  {/* CONTENT */}
                  <div className="service-card-content">

                    <div className="service-card-heading">

                      <span className="service-label">
                        {service.label}
                      </span>

                      <h3>
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
                      aria-label={`Explore ${service.title}`}
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


          {/* BOTTOM CTA */}
          <div className="services-bottom">

            <div className="services-bottom-copy">

              <span className="services-bottom-line"></span>

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
            >
              <span>
                Speak to Cooling Experts
              </span>

              <span>
                <FiArrowUpRight />
              </span>
            </a>

          </div>

        </div>
      </section>


      {/* SERVICE MODAL */}
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
              <FiX />
            </button>


            {/* MODAL IMAGE */}
            <div className="service-modal-image">

              <img
                src={selectedService.image}
                alt={selectedService.alt}
              />

              <div className="service-modal-image-overlay"></div>

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


            {/* MODAL BODY */}
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


              {/* BENEFITS */}
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

                        <span className="benefit-icon">
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


              {/* MODAL ACTIONS */}
              <div className="service-modal-actions">

                <a
                  href="#contact"
                  className="modal-primary-btn"
                  onClick={closeModal}
                >
                  <span>
                    Request a Quote
                  </span>

                  <FiArrowUpRight />
                </a>


                <a
                  href={`https://wa.me/27729336594?text=${encodeURIComponent(
                    `Hi Cooling Experts, I'd like to enquire about ${selectedService.title}.`
                  )}`}
                  className="modal-whatsapp-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiMessageCircle />

                  <span>
                    WhatsApp Us
                  </span>
                </a>


                <a
                  href="tel:+27729336594"
                  className="modal-secondary-btn"
                >
                  <FiPhone />

                  <span>
                    072 933 6594
                  </span>
                </a>

              </div>


              {/* TRUST NOTE */}
              <div className="service-modal-trust">

                <span className="trust-icon">
                  <FiMapPin />
                </span>

                <span>
                  Serving homes and businesses across Cape Town
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