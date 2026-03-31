import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/navbar/navbar";
import Footer from "./Components/Footer/Footer";

import Home from "./pages/Home/home";
import About from "./pages/about/about";
import Blog from "./pages/blog/blog";
import Contact from "./pages/contact/contact";
import Product from "./pages/products/product";
import Services from "./pages/services/services";
import ScrollToTop from "./pages/scrollToTOP";

const App = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        {/* ✅ FIXED ROUTES - Added Products base route */}
        <Route path="/products" element={<Product />} />
        <Route path="/products/:category" element={<Product />} />
        <Route path="/products/:category/:subcategory" element={<Product />} />

      <Route path="/Services" element={<Services/>}/>
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;