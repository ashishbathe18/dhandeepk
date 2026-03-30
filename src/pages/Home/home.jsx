import React, { useState, useEffect } from "react";
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

// look ----//
import look from "../../assets/homes/look.png";
import looka from "../../assets/homes/looka.png";
import lookd from "../../assets/homes/lookd.png";
import lookb from "../../assets/homes/lookb.png";
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


{/* PRODUCTS */}

<section className="products">

<h2>Our Products</h2>

<div className="product-grid">

<div className="product-card">

<img src={footear} alt="footwear"/>

<h3>Ladies Footwear</h3>

<p>
Stylish sandals and comfortable flats designed
for modern women.
</p>

</div>

<div className="product-card">

<img src={bagi} alt="handbag"/>

<h3>Handbags</h3>

<p>
Elegant handbags crafted with premium materials
and modern design.
</p>

</div>

<div className="product-card">

<img src={belt} alt="belt"/>

<h3>Belts</h3>

<p>
Refined belts that add a touch of sophistication
to any outfit.
</p>

</div>

</div>

</section>


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

<button className="store-btn">
SHOP HEELS
</button>

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

<button className="bags-btn">
EXPLORE BAGS
</button>

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

<button className="belt-btn">
SHOP BELTS
</button>

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

<PremiumCollection/>



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

<section className="brand-stats">

<div className="stats-container">

<div className="stat-card">
<h2>15+</h2>
<p>Years Experience</p>
</div>

<div className="stat-card">
<h2>500+</h2>
<p>Designs</p>
</div>

<div className="stat-card">
<h2>50+</h2>
<p>Global Buyers</p>
</div>

<div className="stat-card">
<h2>10000+</h2>
<p>Happy Customers</p>
</div>

</div>

</section>

{/* LOOKBOOK */}

<section className="lookbook">

<h2 className="lookbook-title">Fashion Lookbook</h2>

<div className="lookbook-grid">

<div className="look-card">
<img src={look} alt="look"/>

</div>

<div className="look-card">
<img src={looka} alt="look"/>

</div>

<div className="look-card">
<img src={lookb} alt="look"/>

</div>

<div className="look-card">
<img src={lookd} alt="look"/>

</div>

</div>

</section>
</>
);
};

export default Home;