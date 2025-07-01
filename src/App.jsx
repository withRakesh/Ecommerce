import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavbar from "./components/Navbar/Navbar";
import Navigation from "./components/ProductsNavigation/Navigation";
import Home from "./pages/Home";
import Laptops from "./pages/Laptops";
import Watches from "./pages/Watches";
import Headphones from "./pages/Headphones";
import Footer from "./components/footer/Footer";
import CartPage from "./pages/CartPage";
import {ToastContainer, toast} from "react-toastify"
 
const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleRemoveFromCart = (productToRemove) => {
  setCartItems(cartItems.filter(item => item !== productToRemove));
};


  return (
    <BrowserRouter>
    <ToastContainer position="top-center" autoClose={1000}/> 
      <MyNavbar cartItems={cartItems}  />
      <Navigation />

      <Routes>
        <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
        <Route path="/laptops" element={<Laptops onAddToCart={handleAddToCart} />} />
        <Route path="/watches" element={<Watches onAddToCart={handleAddToCart} />} />
        <Route path="/headphones" element={<Headphones onAddToCart={handleAddToCart} />} />
          <Route path="/cart" element={<CartPage cartItems={cartItems}  onRemoveFromCart={handleRemoveFromCart}/>} /> 
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
