import React, { useState , Suspense} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {ToastContainer, toast} from "react-toastify"
const MyNavbar = React.lazy(() => import('./components/Navbar/Navbar')); 
 const Navigation = React.lazy(() => import('./components/ProductsNavigation/Navigation'))
const Home = React.lazy(()=> import('./pages/Home'))  
const Laptops = React.lazy(()=> import('./pages/Laptops')); 
const Watches = React.lazy(()=>import('./pages/Watches')); 
const Headphones = React.lazy(()=>import('./pages/Headphones')); 
const Footer = React.lazy(()=>import('./components/footer/Footer')) 
const CartPage = React.lazy(()=>import('./pages/CartPage'))
 
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
    <Suspense fallback={<p>Loading page...</p>}>
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
    </Suspense>
 
    </BrowserRouter>
  );
};

export default App;
