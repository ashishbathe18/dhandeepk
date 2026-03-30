import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./product.css";

const API_BASE = import.meta.env.VITE_API_BASE_URL;
const DOMAIN_NAME = import.meta.env.VITE_DOMAIN_NAME;

const slugify = (str) =>
  str
    ?.toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");

function Product() {
  const { category, subcategory } = useParams();

  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [category, subcategory]);

  const fetchData = async () => {
    try {
      setLoading(true);

      const catRes = await axios.get(`${API_BASE}/categories`, {
        params: { domainName: DOMAIN_NAME },
      });

      const cats = catRes.data?.data || [];
      setCategories(cats);

      const activeCategory = cats.find(
        (c) => slugify(c.slug || c.name) === slugify(category)
      );

      let subRes;

      if (activeCategory) {
        subRes = await axios.get(`${API_BASE}/sub-categories`, {
          params: {
            domainName: DOMAIN_NAME,
            categoryId: activeCategory._id,
          },
        });
      } else {
        subRes = await axios.get(`${API_BASE}/sub-categories`, {
          params: { domainName: DOMAIN_NAME },
        });
      }

      const subs = subRes.data?.data || [];
      setSubcategories(subs);

      const activeSub = subs.find(
        (s) => slugify(s.slug || s.name) === slugify(subcategory)
      );

      let prodRes;

      if (activeSub) {
        prodRes = await axios.get(`${API_BASE}/products`, {
          params: {
            domainName: DOMAIN_NAME,
            subCategoryId: activeSub._id,
          },
        });
      } else if (activeCategory) {
        prodRes = await axios.get(`${API_BASE}/products`, {
          params: {
            domainName: DOMAIN_NAME,
            categoryId: activeCategory._id,
          },
        });
      } else {
        prodRes = await axios.get(`${API_BASE}/products`, {
          params: { domainName: DOMAIN_NAME },
        });
      }

      setProducts(prodRes.data?.data || []);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p className="loading">Loading...</p>;

  return (
    <div className="product-page">
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

/* ================= CARD ================= */

function ProductCard({ product }) {
  const [images, setImages] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    axios
      .get(`${API_BASE}/product-images`, {
        params: { productId: product._id },
      })
      .then((res) => setImages(res.data.data || []))
      .catch(() => setImages([]));
  }, [product._id]);

  // ✅ SIZE FUNCTION
  const getSizes = () => {
    const sizeAttr = product.attributes?.find(
      (a) => a.attributeKey === "size"
    );

    if (!sizeAttr) return [];

    const value = sizeAttr.values?.[0];
    if (!value) return [];

    return value.split(/,|\*\*/).map((s) => s.trim());
  };

  // ✅ COLOR FUNCTION (FIXED)
  const getColors = () => {
    const colorAttr = product.attributes?.find(
      (a) => a.attributeKey === "color"
    );

    if (!colorAttr) return [];

    const value = colorAttr.values?.[0];
    if (!value) return [];

    return value.split(/,|\*\*/).map((c) => c.trim());
  };

  return (
    <div className="card">
      <div className="card-img">
        {images.length > 0 ? (
          <img src={images[active]?.image} alt="" />
        ) : (
          <div className="no-img">No Image</div>
        )}
      </div>

      <div className="thumbs">
        {images.map((img, i) => (
          <img
            key={i}
            src={img.image}
            onClick={() => setActive(i)}
            className={active === i ? "active" : ""}
          />
        ))}
      </div>

      <div className="card-body">
        <p className="brand">Inc.5</p>
        <h3 className="title">{product.name}</h3>
        <p className="price">₹ {product.price || "----"}</p>

        {/* SIZES */}
        <div className="sizes">
          {getSizes().map((s, i) => (
            <span key={i} className="size-box">
              {s}
            </span>
          ))}
        </div>

        {/* COLORS */}
        <div className="colors">
          <p className="color-label">Color</p>

          <div className="color-options">
            {getColors().map((color, i) => (
              <span key={i} className="color-pill">
                {color}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;