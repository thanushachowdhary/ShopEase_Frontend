import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import banner from "../assets/banner.avif";
import electronics from "../assets/laptop.avif";
import audio from "../assets/headphone.jpeg";
import accessories from "../assets/keyboard.jpeg";
import gadgets from "../assets/powerbank.jpeg";

function Home() {
  return (
    <>
    <div className="hero-container">
      <div className="hero-text">
        <h1>Welcome to <span>ShopEase</span></h1>
        <p>Your one-stop destination for amazing products and great deals.</p>
        <Link to="/product">
          <button className="shop-btn">Shop Now</button>
        </Link>
      </div>
      <div className="hero-image">
        <img src={banner} alt="shopping banner"/>
      </div>
    </div>
      <div className="extra-section">
        <h2 className="section-title">Featured Categories</h2>
        <div className="categories">
          <div className="category-card">
            <img src={electronics} alt="electronics"/>
            <h3>Electronics</h3>
            <p>Laptops, Mobiles, Smart Watches</p>
          </div>
          <div className="category-card">
            <img src={audio} alt="audio"/>
            <h3>Audio Devices</h3>
            <p>Headphones, Speakers, Earbuds</p>
          </div>
          <div className="category-card">
            <img src={accessories} alt="accessories"/>
            <h3>Accessories</h3>
            <p>Keyboard, Mouse, Monitor</p>
          </div>
          <div className="category-card">
            <img src={gadgets} alt="gadgets"/>
            <h3>Gadgets</h3>
            <p>Power Banks, Chargers, Routers</p>
          </div>
        </div>
        <h2 className="section-title">Why Choose ShopEase?</h2>
<div className="features">
  <div className="feature-card">
    <span className="feature-icon">🛍</span>
    <h3>Quality Products</h3>
    <p>We provide top-quality gadgets from trusted brands.</p>
  </div>
  <div className="feature-card">
    <span className="feature-icon">🔒</span>
    <h3>Secure Payments</h3>
    <p>100% safe and secure payment options.</p>
  </div>
  <div className="feature-card">
    <span className="feature-icon">🚚</span>
    <h3>Fast Delivery</h3>
    <p>Quick delivery across India at your doorstep.</p>
  </div>
  <div className="feature-card">
    <span className="feature-icon">🔄</span>
    <h3>Easy Returns</h3>
    <p>Hassle-free return policy within 7 days.</p>
  </div>
  <div className="feature-card">
    <span className="feature-icon">💬</span>
    <h3>24/7 Support</h3>
    <p>Our support team is always ready to help you.</p>
  </div>
</div>
      </div>
      </>
  );
}
export default Home;