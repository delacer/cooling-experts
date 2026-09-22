import React from "react";
import {
  FiArrowUpRight,
  FiMapPin,
  FiStar,
  FiMessageCircle,
  FiCheckCircle,
} from "react-icons/fi";

import "../styles/testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "The team was professional from start to finish. The installation was neat, efficient, and exactly what we needed for our home.",
      name: "George Jacobs",
      service: "Air Conditioning Installation",
      location: "Cape Town",
      featured: true,
    },

    {
      id: 2,
      quote:
        "Excellent service and very knowledgeable. They quickly identified the problem with our system and had everything running properly again.",
      name: "Candice M",
      service: "Air Conditioning Repair",
      location: "Northern Suburbs",
    },

    {
      id: 3,
      quote:
        "Professional workmanship, good communication, and a reliable result. I would definitely recommend Cooling Experts.",
      name: "Charles Robertson",
      service: "Air Conditioning Maintenance",
      location: "Southern Suburbs",
    },
  ];

  const featuredTestimonial = testimonials.find(
    (testimonial) => testimonial.featured
  );

  const supportingTestimonials = testimonials.filter(
    (testimonial) => !testimonial.featured
  );

  return (
    <section
      id="testimonials"
      className="testimonials"
      aria-labelledby="testimonials-heading"
    >
      {/* Technical background */}
      <div
        className="testimonials-grid-pattern"
        aria-hidden="true"
      ></div>

      <div
        className="testimonials-orb testimonials-orb-one"
        aria-hidden="true"
      ></div>

      <div
        className="testimonials-orb testimonials-orb-two"
        aria-hidden="true"
      ></div>

      <div className="testimonials-container">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <header className="testimonials-header">

          <div className="testimonials-heading">

            <div className="testimonials-eyebrow-wrap">

              <span
                className="testimonials-eyebrow-line"
                aria-hidden="true"
              ></span>

              <span className="testimonials-eyebrow">
                Customer Reviews
              </span>

            </div>

            <h2 id="testimonials-heading">
              Customer experiences with
              <span>Cooling Experts.</span>
            </h2>

          </div>


          <div className="testimonials-intro">

            <div className="testimonials-intro-top">

              <span className="testimonials-intro-number">
                03 / 03
              </span>

              <span className="testimonials-intro-status">
                <span aria-hidden="true"></span>
                Customer Feedback
              </span>

            </div>

            <p>
              Read what customers have to say about our air
              conditioning installation, repair and maintenance
              services across Cape Town and surrounding areas.
            </p>

          </div>

        </header>


        {/* =====================================================
            FEATURED TESTIMONIAL
        ===================================================== */}

        {featuredTestimonial && (
          <article
            className="testimonial-featured"
            aria-labelledby="featured-testimonial-author"
          >

            <div
              className="testimonial-featured-glow"
              aria-hidden="true"
            ></div>

            <div
              className="testimonial-featured-number"
              aria-hidden="true"
            >
              01
            </div>


            {/* Large quote mark */}

            <div
              className="testimonial-quote-mark"
              aria-hidden="true"
            >
              “
            </div>


            <div className="testimonial-featured-content">

              {/* Rating */}

              <div className="testimonial-rating-row">

                <div
                  className="testimonial-stars"
                  aria-label="5 star customer rating"
                >
                  {[...Array(5)].map((_, index) => (
                    <FiStar
                      key={index}
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <span className="testimonial-rating-label">
                  Customer Experience
                </span>

              </div>


              {/* Quote */}

              <blockquote>
                “{featuredTestimonial.quote}”
              </blockquote>


              {/* Footer */}

              <div className="testimonial-featured-footer">

                <div className="testimonial-author">

                  <div
                    className="testimonial-avatar"
                    aria-hidden="true"
                  >
                    {featuredTestimonial.name
                      .charAt(0)
                      .toUpperCase()}
                  </div>

                  <div className="testimonial-author-info">

                    <strong id="featured-testimonial-author">
                      {featuredTestimonial.name}
                    </strong>

                    <span>
                      {featuredTestimonial.service}
                    </span>

                  </div>

                </div>


                <div className="testimonial-location">

                  <FiMapPin aria-hidden="true" />

                  <span>
                    {featuredTestimonial.location}
                  </span>

                </div>

              </div>

            </div>


            {/* Side information */}

            <div className="testimonial-featured-side">

              <span className="testimonial-side-label">
                SERVICE
              </span>

              <strong>
                {featuredTestimonial.service}
              </strong>

              <span
                className="testimonial-side-divider"
                aria-hidden="true"
              ></span>

              <span className="testimonial-side-label">
                LOCATION
              </span>

              <strong>
                {featuredTestimonial.location}
              </strong>


              <div className="testimonial-verified">

                <FiCheckCircle aria-hidden="true" />

                <span>
                  Professional Service
                </span>

              </div>

            </div>

          </article>
        )}


        {/* =====================================================
            SUPPORTING TESTIMONIALS
        ===================================================== */}

        <div className="testimonials-grid">

          {supportingTestimonials.map((testimonial) => (

            <article
              className="testimonial-card"
              key={testimonial.id}
              aria-labelledby={`testimonial-author-${testimonial.id}`}
            >

              <div className="testimonial-card-top">

                <div
                  className="testimonial-stars"
                  aria-label="5 star customer rating"
                >
                  {[...Array(5)].map((_, index) => (
                    <FiStar
                      key={index}
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <span
                  className="testimonial-number"
                  aria-hidden="true"
                >
                  0{testimonial.id}
                </span>

              </div>


              <blockquote>
                “{testimonial.quote}”
              </blockquote>


              <div className="testimonial-card-footer">

                <div className="testimonial-author">

                  <div
                    className="testimonial-avatar"
                    aria-hidden="true"
                  >
                    {testimonial.name
                      .charAt(0)
                      .toUpperCase()}
                  </div>

                  <div className="testimonial-author-info">

                    <strong
                      id={`testimonial-author-${testimonial.id}`}
                    >
                      {testimonial.name}
                    </strong>

                    <span>
                      {testimonial.service}
                    </span>

                  </div>

                </div>


                <div className="testimonial-location">

                  <FiMapPin aria-hidden="true" />

                  <span>
                    {testimonial.location}
                  </span>

                </div>

              </div>

            </article>

          ))}

        </div>


        {/* =====================================================
            TRUST STRIP
        ===================================================== */}

        <div className="testimonials-trust-strip">

          <div className="trust-strip-item">

            <FiCheckCircle aria-hidden="true" />

            <div>

              <strong>
                Professional HVAC Workmanship
              </strong>

              <span>
                Quality-focused air conditioning service
              </span>

            </div>

          </div>


          <div
            className="trust-strip-divider"
            aria-hidden="true"
          ></div>


          <div className="trust-strip-item">

            <FiMessageCircle aria-hidden="true" />

            <div>

              <strong>
                Clear Communication
              </strong>

              <span>
                Straightforward service from start to finish
              </span>

            </div>

          </div>


          <div
            className="trust-strip-divider"
            aria-hidden="true"
          ></div>


          <div className="trust-strip-item">

            <FiMapPin aria-hidden="true" />

            <div>

              <strong>
                Cape Town HVAC Coverage
              </strong>

              <span>
                Air conditioning for homes & businesses
              </span>

            </div>

          </div>

        </div>


        {/* =====================================================
            CTA
        ===================================================== */}

        <div className="testimonials-bottom">

          <div className="testimonials-bottom-copy">

            <div className="testimonials-bottom-label">

              <span aria-hidden="true"></span>

              READY WHEN YOU ARE

            </div>

            <h3>
              Need reliable air conditioning
              <span> service in Cape Town?</span>
            </h3>

          </div>


          <a
            href="#contact"
            className="testimonials-cta"
            aria-label="Request a quote for air conditioning and HVAC services"
          >

            <span>
              Request a Quote
            </span>

            <span
              className="testimonials-cta-icon"
              aria-hidden="true"
            >
              <FiArrowUpRight />
            </span>

          </a>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;