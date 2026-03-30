import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* SHOP */}
        <div className="footer-section">
          <h3>Address</h3>
          <ul>
         MAHARASHTRA District MUMBAI , Pin 400033 Road/Street/Lane G D Ambekar
Marg, City Mumbai Village/Town Kalachowky Block Plot-CS 189/197, 4, Flat/Door/Block
No. 205, Floor-2nd
Name of
Premises/
Building
Aikyadarshan Chs, Kale Wad
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
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/dhandeepkinternational?igsh=eHhpcDkzYjN6MzBh" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com/youraccount" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a href="https://youtube.com/youraccount" target="_blank" rel="noreferrer">
              <FaYoutube />
            </a>
            <a href="https://www.linkedin.com/in/deepa-shinde-a2947a3b1/" target="_blank" rel="noreferrer">
  <FaLinkedin />
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