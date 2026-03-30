import React, { useEffect, useState } from "react";
import axios from "axios";
import "./blog.css";

import hero1 from "../../assets/blogs/hero1.png";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const DOMAIN_NAME = import.meta.env.VITE_DOMAIN_NAME;

const getImageSrc = (image) => {

  if (!image) return "";

  if (image.startsWith("data:image")) {
    return image;
  }

  if (image.startsWith("http")) {
    return image;
  }

  const domain = API_BASE_URL.replace("/api", "");
  const cleanPath = image.replace(/^\/+/, "");

  return `${domain}/${cleanPath}`;
};

const Blog = () => {

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    const fetchBlogs = async () => {

      try {

        const response = await axios.get(`${API_BASE_URL}/blogs`, {
          params: { domainName: DOMAIN_NAME }
        });

        if (response.data?.data) {
          setBlogs(response.data.data);
        } else {
          setBlogs([]);
        }

      } catch (err) {
        console.error(err);
        setError("Unable to load blogs");
      } finally {
        setLoading(false);
      }

    };

    fetchBlogs();

  }, []);

  return (
    <>

      {/* HERO SECTION */}
      <section
        className="blog-hero"
        style={{ backgroundImage: `url(${hero1})` }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          
        </div>
      </section>


      {/* LOADING */}
      {loading && (
        <div className="loader">
          Loading...
        </div>
      )}

      {/* ERROR */}
      {!loading && error && (
        <p className="error">{error}</p>
      )}

      {/* BLOG LIST */}
      {!loading && blogs.map((blog, index) => (

        <section className="blog-section" key={blog._id || index}>

          <div className={`blog-container ${index % 2 !== 0 ? "reverse" : ""}`}>

            <div className="blog-text">

              <h2>{blog.title}</h2>

              {blog.subTitle && (
                <h6>{blog.subTitle}</h6>
              )}

              <p>{blog.content}</p>

            </div>

            <div className="blog-image">

              {blog.image ? (

                <img
                  src={getImageSrc(blog.image)}
                  alt={blog.title}
                />

              ) : (
                <p>No Image</p>
              )}

            </div>

          </div>

        </section>

      ))}

      {/* EMPTY */}
      {!loading && blogs.length === 0 && !error && (
        <p className="empty">No blogs found</p>
      )}

    </>
  );
};

export default Blog;