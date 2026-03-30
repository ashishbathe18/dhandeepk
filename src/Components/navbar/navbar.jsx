import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/logo/logo.png";

const API_BASE = import.meta.env.VITE_API_BASE_URL;
const DOMAIN_NAME = import.meta.env.VITE_DOMAIN_NAME;

const slugify = (str) =>
  str
    ?.toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState({});
  const [loading, setLoading] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    fetchCategories();
    
    // Close dropdown on outside click
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
useEffect(() => {
  document.body.style.overflow = menuOpen ? "hidden" : "auto";
}, [menuOpen]);

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `${API_BASE}/categories?domainName=${DOMAIN_NAME}`
      );
      const data = await res.json();
      const cats = data.data || [];
      setCategories(cats);
      cats.forEach((cat) => fetchSubcategories(cat._id));
    } catch (err) {
      console.error("Error fetching categories:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchSubcategories = async (categoryId) => {
    try {
      const res = await fetch(
        `${API_BASE}/sub-categories?domainName=${DOMAIN_NAME}&categoryId=${categoryId}`
      );
      const data = await res.json();
      setSubcategories((prev) => ({
        ...prev,
        [categoryId]: data.data || [],
      }));
    } catch (err) {
      console.error("Error fetching subcategories:", err);
    }
  };

  const toggleCategory = (categoryId) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <nav className="navbar" ref={dropdownRef}>
        {/* LOGO */}
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        

       <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
  ☰
</div>

        {/* OVERLAY */}
        <div 
          className={`overlay ${menuOpen ? "show" : ""}`} 
          onClick={() => setMenuOpen(false)} 
        />

        {/* NAV LINKS */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
       

          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>

          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          </li>

          {/* PRODUCTS */}
          <li className="product-menu">
            <span 
              className="product-link"
              onClick={toggleDropdown}
            >
              Products {dropdownOpen ? "▲" : "▾"}
            </span>

            <div className={`dropdown ${dropdownOpen ? "show" : ""}`}>
              {loading ? (
                <p className="loading">Loading products...</p>
              ) : (
                categories.map((cat) => {
                  const catSlug = slugify(cat.slug || cat.name);
                  const subs = subcategories[cat._id] || [];
                  const isExpanded = expandedCategories[cat._id];

                  return (
                    <div key={cat._id} className="category">
                      <div
                        className={`category-title ${isExpanded ? "active" : ""}`}
                        onClick={() => toggleCategory(cat._id)}
                      >
                        {cat.name} {subs.length > 0 && (isExpanded ? "▲" : "▾")}
                      </div>

                      {subs.length > 0 && (
                        <div className={`subcategory ${isExpanded ? "show" : ""}`}>
                          <Link
                            to={`/products/${catSlug}`}
                            className="all-products"
                            onClick={() => {
                              setDropdownOpen(false);
                              setMenuOpen(false);
                            }}
                          >
                            🎯 All {cat.name}
                          </Link>
                          {subs.map((sub) => (
                            <Link
                              key={sub._id}
                              to={`/products/${catSlug}/${slugify(sub.slug || sub.name)}`}
                              onClick={() => {
                                setDropdownOpen(false);
                                setMenuOpen(false);
                              }}
                            >
                              📦 {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </li>

     <li>
  <Link to="/services" onClick={() => setMenuOpen(false)}>
    Services
  </Link>
</li>
          <li>
            <Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
          </li>

          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </li>
        </ul>
        
      </nav>
    </>
  );
};

export default Navbar;