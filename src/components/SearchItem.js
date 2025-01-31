import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import "../style/SearchItem.css"

const SearchItem = ({ cart, setCart }) => {
  const { term } = useParams();
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const data = items.filter((item) =>
      item.description.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredItems(data);
  }, [term]);

  const addToCart = (item) => {
    setCart([...cart, item]);
    alert("Item added to cart!");
  };

  return (
    <div className="search-results">
      <h2>Search Results for "{term}"</h2>
      <div className="items-grid">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div key={item.id} className="item-card">
              <img src={item.image} alt={item.description} className="item-image" />
              <h3>{item.description}</h3>
              <p>₹{item.price}</p>
              <button onClick={() => addToCart(item)} className="add-to-cart">
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>No items found for your search.</p>
        )}
      </div>
    </div>
  );
};

export default SearchItem;
