import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../style/Cart.css";

const Cart = ({ cart, setCart }) => {
  const [quantities, setQuantities] = useState({});

  // Fetch cart items from backend
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/cart");
        setCart(response.data);
        // Initialize quantities from backend
        const initialQuantities = response.data.reduce((acc, item) => {
          acc[item.id] = item.quantity;
          return acc;
        }, {});
        setQuantities(initialQuantities);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };
    fetchCart();
  }, [setCart]);

  // Handle quantity change
  const handleQuantityChange = async (id, delta) => {
    const newQuantity = Math.max((quantities[id] || 1) + delta, 1);

    try {
      await axios.put(`http://localhost:5000/api/cart/${id}`, { quantity: newQuantity });

      setQuantities((prev) => ({
        ...prev,
        [id]: newQuantity,
      }));

      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  // Remove item from cart - Completely deletes from frontend and backend
  const removeFromCart = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/cart/${id}`);

      // Update frontend state to completely remove the item
      setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  // Clear the cart
  const clearCart = async () => {
    try {
      await axios.delete("http://localhost:5000/api/cart");
      setCart([]);
    } catch (error) {
      console.error("Error clearing cart:", error);
    }
  };

  // Calculate total cost and round it
  const calculateTotal = () => {
    const total = cart.reduce(
      (total, item) => total + item.price * (quantities[item.id] || 1),
      0
    );
    return total.toFixed(2); // Rounds to two decimal places
  };

  // Handle Checkout
  const handleCheckout = async () => {
    try {
      // Update stock after checkout
      await Promise.all(
        cart.map((item) =>
          axios.put(`http://localhost:5000/api/products/${item.id}`, {
            stock: item.stock - quantities[item.id],
          })
        )
      );

      // Clear the cart after successful checkout
      await axios.delete("http://localhost:5000/api/cart");
      setCart([]);
      alert("Checkout successful! Your cart has been cleared.");
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  return (
    <div className="cart-container">
      {cart.length === 0 ? (
        <div className="empty-cart">
          <h1>Your Cart is Empty</h1>
          <Link to="/category/all" className="btn btn-warning">Continue Shopping...</Link>
        </div>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="cart-item-img">
                <img src={item.image} alt={item.description} />
              </div>
              <div className="cart-item-details">
                <h5>{item.description}</h5>
                <p>Price: {item.price} ₹</p>
                <div className="cart-item-actions">
                  <button className="btn btn-secondary" onClick={() => handleQuantityChange(item.id, -1)}>
                    -
                  </button>
                  <span className="quantity">{quantities[item.id]}</span>
                  <button className="btn btn-secondary" onClick={() => handleQuantityChange(item.id, 1)}>
                    +
                  </button>
                  <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="cart-footer">
            <h3>Total Cost: {calculateTotal()} ₹</h3>
            <button className="btn btn-warning" onClick={handleCheckout}>
              Checkout
            </button>
            <button className="btn btn-danger" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
