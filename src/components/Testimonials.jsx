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
      name: "Customer Name",
      service: "AC Installation",
      location: "Cape Town",
      featured: true,
    },

    {
      id: 2,
      quote:
        "Excellent service and very knowledgeable. They quickly identified the problem with our system and had everything running properly again.",
      name: "Customer Name",
      service: "AC Repair",
      location: "Northern Suburbs",
    },

    {
      id: 3,
      quote:
        "Professional workmanship, good communication, and a reliable result. I would definitely recommend Cooling Experts.",
      name: "Customer Name",
      service: "Maintenance",
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
      <div className="testimonials-grid-pattern"></div>

      <div className="testimonials-orb testimonials-orb-one"></div>
      <div className="testimonials-orb testimonials-orb-two"></div>

      <div className="testimonials-container">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <header className="testimonials-header">

          <div className="testimonials-heading">

            <div className="testimonials-eyebrow-wrap">
              <span className="testimonials-eyebrow-line"></span>

              <span className="testimonials-eyebrow">
                Client Experiences
              </span>
            </div>

            <h2 id="testimonials-heading">
              Trusted by customers.
              <span>Proven through service.</span>
            </h2>

          </div>


          <div className="testimonials-intro">

            <div className="testimonials-intro-top">

              <span className="testimonials-intro-number">
                03 / 03
              </span>

              <span className="testimonials-intro-status">
                <span></span>
                Customer Feedback
              </span>

            </div>

            <p>
              We believe the quality of our work should speak for
              itself. Here is what customers have to say about their
              experience with Cooling Experts.
            </p>

          </div>

        </header>


        {/* =====================================================
            FEATURED TESTIMONIAL
        ===================================================== */}

        {featuredTestimonial && (
          <article className="testimonial-featured">

            <div className="testimonial-featured-glow"></div>

            <div className="testimonial-featured-number">
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

                <div className="testimonial-stars">
                  {[...Array(5)].map((_, index) => (
                    <FiStar key={index} />
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

                  <div className="testimonial-avatar">
                    {featuredTestimonial.name
                      .charAt(0)
                      .toUpperCase()}
                  </div>

                  <div className="testimonial-author-info">

                    <strong>
                      {featuredTestimonial.name}
                    </strong>

                    <span>
                      {featuredTestimonial.service}
                    </span>

                  </div>

                </div>


                <div className="testimonial-location">

                  <FiMapPin />

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

              <span className="testimonial-side-divider"></span>

              <span className="testimonial-side-label">
                LOCATION
              </span>

              <strong>
                {featuredTestimonial.location}
              </strong>


              <div className="testimonial-verified">

                <FiCheckCircle />

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
            >

              <div className="testimonial-card-top">

                <div className="testimonial-stars">

                  {[...Array(5)].map((_, index) => (
                    <FiStar key={index} />
                  ))}

                </div>

                <span className="testimonial-number">
                  0{testimonial.id}
                </span>

              </div>


              <blockquote>
                “{testimonial.quote}”
              </blockquote>


              <div className="testimonial-card-footer">

                <div className="testimonial-author">

                  <div className="testimonial-avatar">
                    {testimonial.name
                      .charAt(0)
                      .toUpperCase()}
                  </div>

                  <div className="testimonial-author-info">

                    <strong>
                      {testimonial.name}
                    </strong>

                    <span>
                      {testimonial.service}
                    </span>

                  </div>

                </div>


                <div className="testimonial-location">

                  <FiMapPin />

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

            <FiCheckCircle />

            <div>
              <strong>
                Professional Workmanship
              </strong>

              <span>
                Quality-focused service
              </span>
            </div>

          </div>


          <div className="trust-strip-divider"></div>


          <div className="trust-strip-item">

            <FiMessageCircle />

            <div>
              <strong>
                Clear Communication
              </strong>

              <span>
                Straightforward service
              </span>
            </div>

          </div>


          <div className="trust-strip-divider"></div>


          <div className="trust-strip-item">

            <FiMapPin />

            <div>
              <strong>
                Cape Town Coverage
              </strong>

              <span>
                Homes & businesses
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
              <span></span>
              READY WHEN YOU ARE
            </div>

            <h3>
              Let's get your cooling
              <span>system right.</span>
            </h3>

          </div>


          <a
            href="#contact"
            className="testimonials-cta"
          >
            <span>
              Request a Quote
            </span>

            <span className="testimonials-cta-icon">
              <FiArrowUpRight />
            </span>
          </a>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;