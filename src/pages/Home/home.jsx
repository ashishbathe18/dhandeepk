import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";

/* HERO IMAGES */
import slide from "../../assets/homes/slide.png";
import hero2 from "../../assets/homes/hero2.png";
import slide3 from "../../assets/homes/slide3.png";

/* PRODUCT IMAGES */
import footear from "../../assets/homes/footear.png";
import bagi from "../../assets/homes/bagi.png";
import belt from "../../assets/homes/belt.png";
import heals from "../../assets/homes/heals.png";
import storebag from "../../assets/homes/storebag.png";
import storebelt from "../../assets/homes/storebelt.png";
import PremiumCollection from "../PremiumCollection/PremiumCollection";
import slipper from "../../assets/homes/slipper.png";
import jutthi from "../../assets/homes/jutthi.png"
// crouser--------------//
import crouser from "../../assets/homes/crouser.png";
import pund from "../../assets/homes/pund.png";

import punb from "../../assets/homes/punb.png";
// our product
import f1 from "../../assets/homes/f1.png";
import f2 from "../../assets/homes/f2.png";
import f3 from "../../assets/homes/f3.png";
import f4 from "../../assets/homes/f4.png";
// bags
import b1 from "../../assets/homes/b1.png";
import b2 from "../../assets/homes/b2.png";
import b3 from "../../assets/homes/b3.png";
import b4 from "../../assets/homes/b4.png";
// belt
import bl1 from "../../assets/homes/bl1.png";
import bl2 from "../../assets/homes/bl2.png";
import bl3 from "../../assets/homes/bl3.png";
import bl4 from "../../assets/homes/bl4.png";



const Home = () => {

const images = [slide,hero2,slide3];
const [current, setCurrent] = useState(0);

useEffect(() => {

const interval = setInterval(() => {
setCurrent((prev) => (prev + 1) % images.length);
}, 4000);

return () => clearInterval(interval);

}, []);

return (
<>

{/* HERO SECTION */}

<section className="hero">

<div className="slider">

{images.map((img, index) => (

<div
key={index}
className={`slide ${index === current ? "active" : ""}`}
>

<img src={img} alt="hero"/>

<div className="hero-content">

<h1>Dhandeep K International</h1>

<p>
Premium Ladies Footwear, Handbags & Belts
crafted for elegance and comfort.
</p>

<button className="hero-btn">
Explore Collection
</button>

</div>

</div>

))}

</div>

</section>


{/* ABOUT SECTION */}

<section className="about">

<div className="about-container">

<h2>About Us</h2>

<p>
At <strong>Dhandeep K International</strong>, we believe fashion is more than style —
it is a statement of confidence, grace, and individuality.
</p>

<p>
We specialize in premium ladies’ footwear, handbags, and belts
designed for modern women who value elegance and comfort.
Our collections blend global fashion trends with timeless design.
</p>

</div>

</section>

<PremiumCollection/>
{/* PRODUCTS */}


{/* WHY CHOOSE US */}

<section className="why">

<h2 className="why-title">Why Choose Us</h2>

<div className="why-grid">

<div className="why-card">

<div className="why-icon">⭐</div>

<h3>Premium Quality</h3>

<p>
High quality materials with strong
and durable finishing for long lasting use.
</p>

</div>


<div className="why-card">

<div className="why-icon">🌍</div>

<h3>Global Fashion</h3>

<p>
Designs inspired by international
fashion trends and modern styles.
</p>

</div>


<div className="why-card">

<div className="why-icon">👠</div>

<h3>Comfortable</h3>

<p>
Products crafted with comfort
for everyday wear and style.
</p>

</div>


<div className="why-card">

<div className="why-icon">🚚</div>

<h3>Reliable Export</h3>

<p>
Trusted supplier delivering
quality products to global buyers.
</p>

</div>
  {/* ✅ NEW CARD */}
  <div className="why-card">
  <div className="why-icon">📏</div>
  <h3>True to Size</h3>
  <p>
    Perfect sizing with accurate fit,
    ensuring comfort and confidence in every wear.
  </p>
</div>

</div>

</section>

{/* HEELS SECTION */}

<section className="store-section">

<div className="store-container">

{/* LEFT CONTENT */}

<div className="store-content">

<div className="store-icon">👠</div>

<h2>Find Your Perfect Heels</h2>

<p>
Step into elegance with our beautiful ladies heels collection.
Designed for comfort and style, our heels are perfect for
parties, office wear, and special occasions.
</p>

<Link to="/products/ladies-footwear/heels">
  <button className="store-btn">
    EXPLORE HEELS
  </button>
</Link>

</div>

{/* RIGHT IMAGE */}

{true && (
<img
src={heals}
alt="heels"
className="store-img"
/>
)}

</div>

</section>


{/* BAGS SECTION */}

<section className="bags-section">

<div className="bags-container">

{/* LEFT IMAGE */}

{true && (
<img
src={storebag}
alt="bags"
className="bags-img"
/>
)}

{/* RIGHT CONTENT */}

<div className="bags-content">

<div className="bags-icon">👜</div>

<h2>Discover Stylish Ladies Bags</h2>

<p>
Upgrade your fashion with our trendy ladies bags collection.
From casual handbags to elegant clutches, find the perfect
bag for every occasion and daily lifestyle.
</p>
<Link to="/products/accessories">
  <button className="bags-btn">
    EXPLORE BAGS
  </button>
</Link>
</div>

</div>

</section>
{/* BELT SECTION */}

<section className="belt-section">

<div className="belt-container">

{/* LEFT CONTENT */}

<div className="belt-content">

<div className="belt-icon">🪢</div>

<h2>Elegant Ladies Belts Collection</h2>

<p>
Complete your outfit with our stylish ladies belts.
Crafted with premium materials and modern designs,
our belts add the perfect touch of elegance to
casual, formal, and party wear looks.
</p>

<Link to="/products/accessories">
  <button className="bags-btn">
    EXPLORE BELTS
  </button>
</Link>

</div>

{/* RIGHT IMAGE */}

{true && (
<img
src={storebelt}
alt="ladies belt"
className="belt-img"
/>
)}

</div>

</section>

<section className="products">
  <h2>Our Products</h2>

  <div className="product-grid">

    {/* FOOTWEAR */}
    <div className="product-card">
      <h3>Ladies Footwear</h3>

      <div className="mini-grid">
        <img src={f1} alt="" />
        <img src={f2} alt="" />
        <img src={f3} alt="" />
        <img src={f4} alt="" />
      </div>

      
    </div>

    {/* BAGS */}
    <div className="product-card">
      <h3>Handbags</h3>

      <div className="mini-grid">
        <img src={b1} alt="" />
        <img src={b2} alt="" />
        <img src={b3} alt="" />
        <img src={b4} alt="" />
      </div>

    
    </div>

    {/* BELTS */}
    <div className="product-card">
      <h3>Belts</h3>

      <div className="mini-grid">
        <img src={bl1} alt="" />
        <img src={bl2} alt="" />
        <img src={bl3} alt="" />
        <img src={bl4} alt="" />
      </div>

    
    </div>

  </div>
</section>



{/* HORIZONTAL PRODUCTS */}

<section className="horizontal-products">

<h2 className="section-title">Explore Our Collections</h2>

<div className="horizontal-scroll">

<div className="scroll-track">

<div className="scroll-card">
<img src={footear} alt="footwear"/>
<h3>Footwear</h3>
</div>

<div className="scroll-card">
<img src={bagi} alt="bags"/>
<h3>Bags</h3>
</div>


<div className="scroll-card">
<img src={jutthi} alt="heels"/>
<h3>Heels</h3>
</div>

<div className="scroll-card">
<img src={belt} alt="belt"/>
<h3>Belts</h3>
</div>


{/* duplicate cards for smooth loop */}

<div className="scroll-card">
<img src={slipper} alt="footwear"/>
<h3>Footwear</h3>
</div>

<div className="scroll-card">
<img src={punb} alt="bags"/>
<h3>Bags</h3>
</div>

<div className="scroll-card">
<img src={pund} alt="belt"/>
<h3>Belts</h3>
</div>

<div className="scroll-card">
<img src={crouser} alt="heels"/>
<h3>Heels</h3>
</div>

</div>

</div>

</section>

{/* BRAND STATS */}

<section className="brand-stats gap-4">

<div className="stats-container ">

<div className="stat-card">
<h2>75+</h2>
<p>Years Experience</p>
</div>

<div className="stat-card">
<h2>500+</h2>
<p>Designs</p>
</div>


<div className="stat-card">
<h2>1000000+</h2>
<p>Happy Customers</p>
</div>

</div>

</section>

{/* LOOKBOOK */}

</>
);
};

export default Home;