import React from "react";
import "./services.css";

const servicesData = [
  {
    title: "GST Registration & Return",
    desc: "Complete GST registration and monthly return filing services with expert compliance support for businesses."
  },
  {
    title: "Income Tax Return Filing",
    desc: "Professional ITR filing for salaried individuals, businesses and freelancers with full documentation support."
  },
  {
    title: "PTEC & PTRC Registration",
    desc: "Professional tax enrollment and registration for businesses and employees."
  },
  {
    title: "Shop Act & Udyam Registration",
    desc: "Register your business legally under Shop Act and MSME Udyam registration."
  },
  {
    title: "IEC Import Export Code",
    desc: "Get Import Export Code registration for international trading and export business."
  },
  {
    title: "APEDA - RCMC Registration",
    desc: "Agricultural export certification and registration for global trade compliance."
  }
];

const Services = () => {
  return (
    <div className="services-page">

      {/* HERO */}
      <section className="services-hero">
        <h1>Our Services</h1>
        <p>
          We specialize in exporting premium women’s footwear, handbags, and belts worldwide.
        </p>
      </section>

      {/* INTRO */}
      <section className="services-intro">
        <p>
          At <strong>Dhandeepk International</strong>, we deliver stylish, durable, and trend-driven products to global retailers and distributors.
        </p>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="services-section">
        <h2>Product Categories</h2>

        <div className="services-grid">
          <div className="service-card">
            <h3>👠 Ladies Footwear</h3>
            <ul>
              <li>Casual shoes</li>
              <li>Elegant heels</li>
              <li>Flats & sandals</li>
              <li>Comfort footwear</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>👜 Handbags</h3>
            <ul>
              <li>Tote bags</li>
              <li>Clutches</li>
              <li>Crossbody bags</li>
              <li>Custom designs</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>👗 Belts</h3>
            <ul>
              <li>Leather belts</li>
              <li>Designer styles</li>
              <li>Adjustable belts</li>
              <li>Custom options</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 🔥 NEW SERVICES UI (REPLACED PART) */}
      <section className="services-section new-ui">
        <h2>Our Business Services</h2>

        <div className="services-grid">
          {servicesData.map((item, index) => (
            <div className="service-card new-card" key={index}>

              <div className="icon-circle">✓</div>

              <h3>{item.title}</h3>
              <p>{item.desc}</p>

            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <h2>Partner With Us</h2>
        <p>Contact us today to start your business journey with us.</p>
        <button>Contact Now</button>
      </section>

    </div>
  );
};

export default Services;