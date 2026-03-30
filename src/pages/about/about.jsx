import React from "react";
import { useEffect } from "react";

import "./about.css";

// Image imports
import back from "../../assets/about/back.png";
import w1 from "../../assets/about/w1.png";
import gst from "../../assets/about/gst.png";
import frc from "../../assets/about/frc.png";
import CertificatesPage from "../certificate/CertificatesPage";

function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-show");
          }
        });
      },
      { threshold: 0.2 }
    );

    const animatedElements = document.querySelectorAll(
      ".fade-in, .fade-up, .slide-left, .slide-right, .zoom-in"
    );

    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-page">
      {/* HERO (same as reference top section) */}
      <section className="about-hero zoom-in">
        <img src={back} alt="About Us" />
        <div className="about-hero-overlay">
          <h1>About Us</h1>
          <p>Trusted • Global • Excellance.</p>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="about-overview fade-up">
        <div className="overview-text slide-left">
          <h2>Deepa salunke </h2>
          <span className="text-muted fw-medium fw-bolder fs-5 ">
         Owner 
          </span>
          <p>
           Deepa Salunke serves as the Owner of DHANDEEP K INTERNATIONAL.
 Dhandeep K International aims to deliver value-driven products and build long-term trust with clients across global markets.

With a keen eye for quality and design, she plays a key role in sourcing and managing a diverse range of ladies footwear that combines comfort, style, and durability. Her focus is on ensuring that every product meets customer expectations and aligns with current fashion demands in both domestic and international markets.

In addition to product development, she actively contributes to maintaining strong supplier relationships, quality control processes, and smooth business operations. Her commitment to excellence, attention to detail, and customer-centric approach help drive the company’s growth and reputation.

Through her consistent efforts and professional approach, DHANDEEP K INTERNATIONAL aims to deliver value-driven products and build long-term trust with clients across global markets.
          </p>
        </div>

        <div className="overview-image slide-right hover-zoom">
          <img src={w1} alt="founder" />
        </div>
      </section>

      {/* OUR STORY */}
      <section className="our-story-section fade-up">
        <h2 className="our-story-title">Our Story</h2>

        <p className="our-story-text">
      At DHANDEEP K INTERNATIONAL, our journey is rooted in legacy, hard work, and a passion for excellence. The foundation of our business was laid by our grandfather, who started from humble beginnings and overcame numerous challenges with determination, honesty, and a strong commitment to quality.
Our father further strengthened this foundation by expanding the business with dedication, practical experience, and a forward-looking approach.

Inspired by his values and further guided by our father’s experience, Deepa Salunke developed a deep understanding of the footwear business from an early age. Actively involved in day-to-day store operations, she gained practical knowledge and a strong vision for growth. With dedication and leadership, she successfully expanded the business from 2 stores to 4, strengthening our presence in the market.

Building on this strong foundation, the company has now grown beyond domestic success into the international arena. Today, DHANDEEP K INTERNATIONAL is actively engaged in import–export, delivering high-quality ladies footwear to global markets with a focus on style, comfort, and reliability.

Our product range includes High Heels, Flats, Sandals, Wedges, Ethnic Footwear, Juttis, and traditional Kolhapuri designs, carefully selected to meet modern fashion trends while preserving cultural elegance. Each product reflects our commitment to quality craftsmanship and customer satisfaction.

Our story is not just about growth—it is about continuing a legacy, embracing innovation, and building long-term relationships across borders. With strong values at our core, we strive to deliver excellence in every step we take.
        </p>
      </section>

     

      {/* what sets us apart */}
      <section className="towel-features-section fade-in">
        <h2 className="features-title">What Sets Us Apart</h2>
        <p className="features-subtitle">
          Delivering reliability, compliance, and long-term value across
          international markets.
        </p>

        <div className="features-grid">
          <div className="feature-card zoom-in">
            <div className="feature-icon">✔️</div>
            <h3>Trusted Quality</h3>
            <p>
              Consistently delivering internationally benchmarked standards
              through rigorous checks, reliability, and long-term trade
              excellence.
            </p>
          </div>

          <div className="feature-card zoom-in">
            <div className="feature-icon">🌍</div>
            <h3>Global Compliance</h3>
            <p>
              Ensuring full adherence to international trade regulations, export
              documentation, and globally accepted logistics practices.
            </p>
          </div>

          <div className="feature-card zoom-in">
            <div className="feature-icon">🔄</div>
            <h3>Versatile Solutions</h3>
            <p>
              Providing flexible sourcing, packaging, and delivery solutions
              tailored to diverse international business requirements.
            </p>
          </div>

          <div className="feature-card zoom-in">
            <div className="feature-icon">📦</div>
            <h3>Export Quality</h3>
            <p>
              Meeting global buyer expectations with export-grade handling,
              secure packaging, and premium shipment presentation.
            </p>
          </div>
        </div>
      </section>
{/* -----------------------------------------prathmesh deasie------------------------------------------- */}
     {/* ================= CERTIFICATIONS SECTION ================= */}
<CertificatesPage/>

      {/* VISION / MISSION / QUALITY */}
      <section className="about-pillars">
        <div className="pillar-card fade-up hover-card">
          <h3>Our Vision</h3>
          <p>
            To become a globally trusted trade partner, recognized for
            integrity, transparency, and long-term business value.
          </p>
        </div>

        <div className="pillar-card fade-up hover-card">
          <h3>Our Mission</h3>
          <p>
            To deliver reliable import–export solutions while maintaining
            ethical practices, efficiency, and customer satisfaction.
          </p>
        </div>

        <div className="pillar-card fade-up hover-card">
          <h3>Our Commitment to Quality</h3>
          <p>
            Ensuring every shipment meets international standards through strict
            quality control and compliance processes.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
