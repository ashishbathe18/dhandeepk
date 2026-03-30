import React, { useState, useEffect } from "react";
import axios from "axios";
import "./contact.css";
import imagesdfgf from "../../assets/contact/imagesdfgf.png"
function Contact() {
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const domainName = import.meta.env.VITE_DOMAIN_NAME;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });

  const [contactData, setContactData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${baseURL}/contact-page`, {
          params: { domainName },
        });
        setContactData(res?.data?.data || {});
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${baseURL}/contact`, {
        ...formData,
        domainName,
      });
      alert("Submitted ✅");
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        message: "",
      });
    } catch {
      alert("Error ❌");
    }
  };

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="contact-page">

      {/* HERO */}
<section
  className="contact-hero"
  style={{
    backgroundImage: `url(${imagesdfgf})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  }}
>
  <div className="overlay">
    <h1>{contactData?.pageTitle || "Contact Us"}</h1>
    <p>{contactData?.subtitle || "Let's connect with us"}</p>
  </div>
</section>

      {/* MAIN */}
      <section className="contact-section">
        <div className="container">

          {/* LEFT */}
          <div className="info-box">
            <h2>Get in Touch</h2>

            <div className="info-item">
              <span>📍</span>
              <p>{contactData?.address || "Kavaran Mansion Dr. Babasaheb .Ambedkar  Road, Dadar East, Mumbai 400014, Maharashtra."}</p>
            </div>

            <div className="info-item">
              <span>📧</span>
              <p>{contactData?.email || " dhandeepkinternational@gmail.com"}</p>
            </div>

            <div className="info-item">
              <span>📞</span>
              <p>{contactData?.phone || "+91 96191 74855"}</p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="form-box">
            <h2>Send Message</h2>

            <form onSubmit={handleSubmit}>
              <input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
              <input name="email" type="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
              <input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
              <input name="city" placeholder="City" value={formData.city} onChange={handleChange} />
              <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
              <button type="submit">Submit</button>
            </form>
          </div>

        </div>
      </section>

      {/* MAP */}
      <section className="map-section">
        <iframe
          src={`https://www.google.com/maps?q=${contactData?.mapQuery || "Pune"}&output=embed`}
          loading="lazy"
          title="map"
        ></iframe>
      </section>

    </div>
  );
}

export default Contact;