import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import Cart from "./components/Cart";
import Orders from "./orders/Orders";
import Wishlist from "./orders/Wishlist";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/order" element={<Orders/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;

