import React, { useEffect } from "react";
import "./PremiumCollection.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Tilt from "react-parallax-tilt";

import shoe from "../../assets/homes/footear.png";
import bag from "../../assets/homes/bagi.png";
import belt from "../../assets/homes/belt.png";
import jutthi from "../../assets/homes/jutthi.png";
import punb from "../../assets/homes/punb.png";
import punc from "../../assets/homes/punc.png";
const PremiumCollection = () => {

useEffect(() => {
AOS.init({ duration: 1200 });
}, []);

return (

<section className="premium-section">

<h2 className="premium-title" data-aos="fade-up">
Our Premium Collection
</h2>

<div className="premium-grid">

{/* FOOTWEAR */}

<Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} className="tilt-card">

<div className="premium-card" data-aos="fade-right">

<div className="image-wrapper">
<img src={shoe} alt="footwear" className="float"/>
</div>

<h3>Ladies Footwear</h3>

<p>
Elegant heels and comfortable footwear designed
for modern women who value style and comfort.
</p>

</div>

</Tilt>


{/* BAGS */}

<Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} className="tilt-card">

<div className="premium-card" data-aos="fade-up">

<div className="image-wrapper">
<img src={bag} alt="bags" className="float"/>
</div>

<h3>Stylish Handbags</h3>

<p>
Trendy handbags crafted with premium materials
perfect for casual and luxury fashion looks.
</p>

</div>

</Tilt>


{/* BELTS */}

<Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} className="tilt-card">

<div className="premium-card" data-aos="fade-left">

<div className="image-wrapper">
<img src={belt} alt="belt" className="float"/>
</div>

<h3>Elegant Belts</h3>

<p>
Premium belts designed to enhance your outfit
with sophistication and modern fashion.
</p>

</div>

</Tilt>

{/* CARD 4 */}

<Tilt className="tilt-card">
<div className="premium-card" data-aos="fade-right">

<div className="image-wrapper">
<img src={jutthi} alt="product" className="float"/>
</div>

<h3>Fashion Sandals</h3>

<p>
Comfortable and trendy sandals
perfect for everyday fashion.
</p>

</div>
</Tilt>


{/* CARD 5 */}

<Tilt className="tilt-card">
<div className="premium-card" data-aos="fade-up">

<div className="image-wrapper">
<img src={punb} alt="product" className="float"/>
</div>

<h3>Luxury Clutches</h3>

<p>
Elegant clutches designed for
party and special occasions.
</p>

</div>
</Tilt>


{/* CARD 6 */}

<Tilt className="tilt-card">
<div className="premium-card" data-aos="fade-left">

<div className="image-wrapper">
<img src={punc} alt="product" className="float"/>
</div>

<h3>Designer Accessories</h3>

<p>
Premium fashion accessories
crafted with modern trends.
</p>

</div>
</Tilt>





</div>

</section>

);

};

export default PremiumCollection;