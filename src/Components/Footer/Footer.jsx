import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import insta from "../../assets/footwear/insta.png";
import facebook from "../../assets/footwear/facebook.png";
import twitter from "../../assets/footwear/twitter.png";
import youtube from "../../assets/footwear/youtube.png";
import linkdin from "../../assets/footwear/linkdin.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* SHOP */}
        <div className="footer-section">
          <h3>Address</h3>
          <ul>
        Kavaran Mansion Dr. Babasaheb .Ambedkar Road, Dadar East, Mumbai 400014, Maharashtra.
          </ul>
        </div>

       
        {/* OUR LINKS */}
        <div className="footer-section">
          <h3>Our Links</h3>
          <ul className="footer-links">
            <li>
              <NavLink to="/" className="link">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="link">About</NavLink>
            </li>
            <li>
              <NavLink to="/product" className="link">Product</NavLink>
            </li>
            <li>
              <NavLink to="/blog" className="link">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="link">Contact</NavLink>
            </li>
          </ul>
        </div>

        {/* BESTSELLERS */}
        <div className="footer-section">
          <h3>BESTSELLERS</h3>
          <ul>
            <li>Heels</li>
            <li>Flats</li>
            <li>Wedges</li>
            <li>Ethnic</li>
            <li>Mules</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-section">
          <h3>CONTACT</h3>
          <p>
  Email: 
  <a href="mailto:dhandeepkinternational@gmail.com">
    dhandeepkinternational@gmail.com
  </a>
</p>

<p>
  Call/WhatsApp: 
  <a href="tel:+919619174855">
    +91 96191 74855
  </a>
</p>

<div className="social-icons">

  <a href="https://www.facebook.com/profile.php?id=61588330622607" target="_blank" rel="noreferrer">
    <img src={facebook} alt="Facebook" />
  </a>

  <a href="https://www.instagram.com/dhandeepkinternational" target="_blank" rel="noreferrer">
    <img src={insta} alt="Instagram" />
  </a>

  <a href="https://twitter.com/youraccount" target="_blank" rel="noreferrer">
    <img src={twitter} alt="Twitter" />
  </a>

  <a href="https://youtube.com/youraccount" target="_blank" rel="noreferrer">
    <img src={youtube} alt="YouTube" />
  </a>

  <a href="https://www.linkedin.com/in/deepa-shinde-a2947a3b1/" target="_blank" rel="noreferrer">
    <img src={linkdin} alt="LinkedIn" />
  </a>

</div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Your Brand. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;