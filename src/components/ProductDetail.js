import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import "../style/ProductDetails.css"

const ProductDetail = ({ cart, setCart }) => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const selectedProduct = items.find((item) => item.id === parseInt(id));
    setProduct(selectedProduct || {});
    
    if (selectedProduct) {
      const related = items.filter(
        (item) => item.category === selectedProduct.category && item.id !== selectedProduct.id
      );
      setRelatedProducts(related);
    }
  }, [id]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert("Item added to cart!");
  };

  return (
    <div className="product-detail">
      {product ? (
        <>
          <div className="product-container">
            <img src={product.imgSrc} alt={product.title} className="product-image" />
            <div className="product-info">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <div className="product-actions">
                <span className="price">₹{product.price}</span>
                <button onClick={() => addToCart(product)} className="add-to-cart">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <h3>Related Products</h3>
          <div className="related-products">
            {relatedProducts.map((item) => (
              <div key={item.id} className="related-item">
                <img src={item.imgSrc} alt={item.title} />
                <h4>{item.title}</h4>
                <span>₹{item.price}</span>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
};

export default ProductDetail;
