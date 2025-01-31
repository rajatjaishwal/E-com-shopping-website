import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { items } from "./Data";
import { BsFillCartCheckFill } from "react-icons/bs";
import "../style/Navbar.css";

const Navbar = ({ setData, cart }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filterByCategory = (category) => {
    const element = items.filter((product) => product.category === category);
    setData(element);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <header className="sticky-top">
      <div className="nav-bar">
        {/* Brand Name */}
        <Link to="/" className="brand">
          E-Shopping
        </Link>

        {/* Basic Navigation Links */}
        <nav className="navbar">
          <Link to="/home">Home</Link>
          <Link to="/category/all">All</Link>
          <Link to="/category/kids">Kids</Link>
          <Link to="/category/men">Men</Link>
          <Link to="/category/women">Women</Link>
          <Link to="/about" className="About">
            About Us
          </Link>
          <Link
            to="/contact"
            className="Contact"
          >
            Contact
          </Link>

        </nav>

        {/* Search Bar */}
        <form onSubmit={handleSubmit} className="search-bar">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            placeholder="Search Products"
          />
        </form>

        {/* Cart Icon */}
        <Link to="/cart" className="cart">
          <button type="button" className="btn btn-primary position-relative">
            <BsFillCartCheckFill style={{ fontSize: "1.5rem" }} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cart.length}
              <span className="visually-hidden" style={{textDecorationLine: "none"}}>Cart</span>
            </span>
          </button>
        </Link>
      </div>

      {/* Category Filter in /shop page */}
      {location.pathname === "/shop" && (
        <div className="nav-bar-wrapper">
          <div className="items">Filter by {"->"}</div>
          <div onClick={() => setData(items)} className="items">
            No Filter
          </div>
          <div onClick={() => filterByCategory("Kids")} className="items">
            Kids
          </div>
          <div onClick={() => filterByCategory("Men")} className="items">
            Men
          </div>
          <div onClick={() => filterByCategory("Women")} className="items">
            Women
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
