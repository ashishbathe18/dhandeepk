import React, { useEffect, useState } from "react";
import axios from "axios";
import "./certificate.css";

const API_BASE = import.meta.env.VITE_API_BASE_URL;
const DOMAIN = import.meta.env.VITE_DOMAIN_NAME;

function CertificatesPage() {
  const [certificates, setCertificates] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCertificates();
  }, []);

  const fetchCertificates = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API_BASE}/certificates?domainName=${DOMAIN}`);
      setCertificates(Array.isArray(res.data) ? res.data : []);
      setError(null);
    } catch (err) {
      setError(err.message || "Failed to load certificates");
      console.error("Error fetching certificates:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleImageClick = (cert) => {
    setSelectedImage(cert);
    document.body.style.overflow = "hidden"; // prevent scrolling when zoomed
  };

  const closeZoom = () => {
    setSelectedImage(null);
    document.body.style.overflow = "";
  };

  if (loading) {
    return (
      <div id="certificates-page">
        <div className="cert-title-section">
          <h1 className="cert-title">Our Certifications</h1>
        </div>
        <div className="cert-grid center-grid">
          <span className="cert-loading">Loading certificates…</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div id="certificates-page">
        <div className="cert-title-section">
          <h1 className="cert-title">Our Certifications</h1>
        </div>
        <div className="cert-grid center-grid">
          <span className="cert-error">Error: {error}</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <div id="certificates-page">
        {/* Title */}
        <div className="cert-title-section">
          <h1 className="cert-title">Our Certifications</h1>
          <p className="cert-subtitle">
            Recognised globally for quality and sustainability — our
            certifications reflect our commitment to excellence.
          </p>
        </div>

        {/* Grid */}
        <div className={`cert-grid ${certificates.length <= 2 ? "center-grid" : ""}`}>
          {certificates.length === 0 ? (
            <p className="no-certificates">No certificates available yet.</p>
          ) : (
            certificates.map((cert) => (
              <div
                className="cert-card"
                key={cert._id}
                onClick={() => handleImageClick(cert)}
                tabIndex={0}
                role="button"
                aria-label={`View certificate: ${cert.certificateTitle}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleImageClick(cert);
                  }
                }}
              >
                <span className="cert-zoom-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    aria-hidden="true"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
                  </svg>
                </span>
                <div className="cert-img-box">
                  <img src={cert.certificateImage} alt={cert.certificateTitle} />
                </div>
                <h3 className="cert-card-title">{cert.certificateTitle}</h3>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Full‑screen image zoom */}
      {selectedImage && (
        <div className="cert-zoom-overlay" onClick={closeZoom}>
          <div className="cert-zoom-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="cert-zoom-close"
              onClick={closeZoom}
              aria-label="Close image"
            >
              ×
            </button>
            <img src={selectedImage.certificateImage} alt={selectedImage.certificateTitle} />
            <h4 className="cert-zoom-title">{selectedImage.certificateTitle}</h4>
          </div>
        </div>
      )}
    </>
  );
}

export default CertificatesPage;