import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchItem from "./components/SearchItem";
import Cart from "./components/Cart";
import { items } from "./components/Data";
import About from "./components/User";
import Category from "./components/Category"; 
import Home from './components/Home';  
import AuthenticationPage from './components/AuthenticationPage';  
import AdminAuthPage from './components/AdminAuthPage'; 
import Contact from "./components/contact_bar";
const App = () => {
  const [cart, setCart] = useState([]); 
  const [data, setData] = useState(items); 

  return (
    <Router>
      <Navbar cart={cart} setData={setData} />
      <Routes>
        <Route path="/about" element={<Home />} />
        <Route path="/" element={<AuthenticationPage />} />
        <Route path="/admin" element={<AdminAuthPage />} />
        <Route path="/home" element={<About />} />
        <Route path="/search/:term" element={<SearchItem cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/category/:category" element={<Category cart={cart} setCart={setCart} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
