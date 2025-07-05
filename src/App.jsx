 import React, { useState, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const MyNavbar = React.lazy(() => import('./components/Navbar/Navbar'));
const Navigation = React.lazy(() => import('./components/ProductsNavigation/Navigation'));
const Home = React.lazy(() => import('./pages/Home'));
const Laptops = React.lazy(() => import('./pages/Laptops'));
const Watches = React.lazy(() => import('./pages/Watches'));
const Headphones = React.lazy(() => import('./pages/Headphones'));
const Footer = React.lazy(() => import('./components/footer/Footer'));
const CartPage = React.lazy(() => import('./pages/CartPage'));

const App = () => {
  const [cartItems, setCartItems] = useState([]);

 
  const handleAddToCart = (product) => {
    setCartItems(prevCart => {
      const exists = prevCart.find(item => item.id === product.id);
      if (exists) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    toast.success("Added to cart");
  };

 
  const handleRemoveFromCart = (productToRemove) => {
    setCartItems(prevCart =>
      prevCart.filter(item => item.id !== productToRemove.id)
    );
    toast.error("Removed from cart");
  };

 
  const handleIncrement = (product) => {
    setCartItems(prevCart =>
      prevCart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

 
  const handleDecrement = (product) => {
    setCartItems(prevCart =>
      prevCart.map(item =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity > 1 ? item.quantity - 1 : 1,
            }
          : item
      )
    );
  };

  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading page...</p>}>
        <ToastContainer position="top-center" autoClose={1000} />
        <MyNavbar cartItems={cartItems} />
        <Navigation />

        <Routes>
          <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
          <Route path="/laptops" element={<Laptops onAddToCart={handleAddToCart} />} />
          <Route path="/watches" element={<Watches onAddToCart={handleAddToCart} />} />
          <Route path="/headphones" element={<Headphones onAddToCart={handleAddToCart} />} />
          <Route
            path="/cart"
            element={
              <CartPage
                cartItems={cartItems}
                onRemoveFromCart={handleRemoveFromCart}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
              />
            }
          />
        </Routes>

        <Footer />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
