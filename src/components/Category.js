import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../style/Category.css";

const Category = ({ cart, setCart }) => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const categories = []; // Define available categories

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        let response;
        if (category === "all") {
          response = await axios.get("http://localhost:5000/api/products"); // Fetch all products
        } else {
          response = await axios.get("http://localhost:5000/api/products", {
            params: { category },
          });
        }
        setProducts(response.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  // Add to Cart - Updates Backend & Frontend
  const handleAddToCart = async (product) => {
    try {
      const response = await axios.post("http://localhost:5000/api/cart", {
        productId: product.id,
        quantity: 1, // Default quantity when adding new item
      });

      if (response.data) {
        alert("Item added to cart!");
        setCart((prevCart) => {
          const existingItem = prevCart.find((item) => item.id === product.id);
          if (existingItem) {
            return prevCart.map((item) =>
              item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
          } else {
            return [...prevCart, { ...product, quantity: 1 }];
          }
        });
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="category-container">
      <h2>
        {category === "all"
          ? "All Products"
          : `${category.charAt(0).toUpperCase() + category.slice(1)} Collection`}
      </h2>

      {/* Category Navigation Buttons */}
      <div className="category-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-btn ${category === cat ? "active" : ""}`}
            onClick={() => navigate(`/category/${cat}`)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {products.length > 0 ? (
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image || "/Clothes/default.jpg"} alt={product.description} className="product-image" />
              <h3 className="product-title">{product.description}</h3>
              <p className="product-price">Price: ₹{product.price}</p>
              <p className="product-stock">In Stock: {product.stock}</p>
              <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-products">No products found.</p>
      )}
    </div>
  );
};

export default Category;
