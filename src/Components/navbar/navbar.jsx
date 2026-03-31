import React, { useEffect, useState, useRef, useCallback } from "react";
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
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState({}); // { categoryId: [subs] }
  const [loading, setLoading] = useState(false);
  const dropdownRef = useRef(null);

  // ✅ FIXED: Fetch ALL data ONCE with Promise.all
  const fetchAllCategoriesData = useCallback(async () => {
    setLoading(true);
    try {
      // 1. Get categories first
      const catRes = await fetch(
        `${API_BASE}/categories?domainName=${DOMAIN_NAME}`
      );
      const catData = await catRes.json();
      const cats = catData.data || [];
      
      if (cats.length === 0) return;

      setCategories(cats);

      // 2. Fetch ALL subcategories PARALLEL (faster!)
      const subPromises = cats.map((cat) =>
        fetch(
          `${API_BASE}/sub-categories?domainName=${DOMAIN_NAME}&categoryId=${cat._id}`
        ).then((res) => res.json())
      );

      const subResults = await Promise.all(subPromises);
      
      // 3. Update subcategories state
      const newSubs = {};
      cats.forEach((cat, index) => {
        newSubs[cat._id] = subResults[index]?.data || [];
      });
      
      setSubcategories(newSubs);
    } catch (err) {
      console.error("Navbar Error:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAllCategoriesData();
  }, [fetchAllCategoriesData]);

  // ✅ Outside click handler
  useEffect(() => {
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
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // ✅ Debug helper (remove in production)
  console.log("Navbar Debug:", { 
    categories: categories.length, 
    subcategories: Object.keys(subcategories).length,
    sampleSubs: subcategories[categories[0]?._id]?.slice(0, 3)
  });

  return (
    <>
      <nav className="navbar" ref={dropdownRef}>
        {/* LOGO */}
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* HAMBURGER */}
        <div className="hamburger" onClick={toggleMobileMenu}>
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

          {/* ✅ FIXED PRODUCTS DROPDOWN */}
          <li className="product-menu">
            <span className="product-link" onClick={toggleDropdown}>
              Products {dropdownOpen ? "▲" : "▾"}
            </span>

            <div className={`dropdown ${dropdownOpen ? "show" : ""}`}>
              {loading ? (
                <div className="dropdown-loading">
                  <span>Loading categories...</span>
                </div>
              ) : categories.length === 0 ? (
                <div className="dropdown-empty">No categories found</div>
              ) : (
                categories.map((cat) => {
                  const catSlug = slugify(cat.slug || cat.name);
                  const subs = subcategories[cat._id] || [];
                  
                  return (
                    <div key={cat._id} className="category-dropdown">
                      {/* Category Title */}
                      <div className="category-title">
                        <Link
                          to={`/products/${catSlug}`}
                          className="all-products-link"
                          onClick={() => {
                            setDropdownOpen(false);
                            setMenuOpen(false);
                          }}
                        >
                          🎯 All {cat.name}
                        </Link>
                        
                        {subs.length > 0 && (
                          <span className="subcount">({subs.length})</span>
                        )}
                      </div>

                      {/* Subcategories */}
                      {subs.length > 0 && (
                        <div className="subcategory-list">
                          {subs.map((sub) => (
                            <Link
                              key={sub._id}
                              to={`/products/${catSlug}/${slugify(sub.slug || sub.name)}`}
                              className="subcategory-link"
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