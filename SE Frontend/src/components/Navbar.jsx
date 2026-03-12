import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/shopease.png";

function Navbar(){
const [search,setSearch] = useState("");
const navigate = useNavigate();
const handleSearch = (e) => {
if(e.key === "Enter"){
navigate(`/product?search=${search}`);
}
};
return (
    <>
    <div className="top-navbar">
        <p>Free Delivery on Orders Above ₹999 🚚</p>
        <div className="top-links">
            <Link to="#">Track Order</Link>
            <Link to="#">Customer Care</Link>
            <Link to="#">Download App</Link>
        </div>
    </div>
    <nav className="navbar">
        <div className="logo-container">
            <img src={logo} alt="ShopEase Logo" className="logo-img"/>
            <h2 className="logo-text">ShopEase</h2>
        </div>
        <input type="text" className="search"placeholder="Search for products, brands and more" value={search} 
        onChange={(e)=>setSearch(e.target.value)} onKeyDown={handleSearch}/>
        <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/product">Products</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/order">Orders</Link>
            <Link to="/wishlist">Wishlist</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>
    </nav>
    </>
);
}
export default Navbar;