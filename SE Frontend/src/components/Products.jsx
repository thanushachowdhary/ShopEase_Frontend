import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Products.css";
import speaker from "../assets/speaker.webp";
import camera from "../assets/camers.jpeg";
import console from "../assets/console.jpg";
import tablet from "../assets/tablet.jpg";
import keyboard from "../assets/keyboard.jpeg";
import mouse from "../assets/mouse.jpg";
import laptop from "../assets/laptop.avif";
import monitor from "../assets/monitor.jpg";
import printer from "../assets/printer.jpg";
import router from "../assets/router.jpg";
import powerbank from "../assets/powerbank.jpeg";
import smartwatch from "../assets/smartwatch.jpg";
import fancyDress from "../assets/Fancy dress.jpg";
import barbieDress from "../assets/Barbie dress.jpg";
import westernGown from "../assets/Western Gown.webp";
import teddyBear from "../assets/teddy bear.webp";
import dairyMilk from "../assets/dairy milk.jpg";
import delightChocolates from "../assets/delight chocolates.jpeg";
import ferroChoci from "../assets/ferro choci.jpeg";

function Products() {
const location = useLocation();
const query = new URLSearchParams(location.search);
const search = query.get("search") || "";
const [selectedImage,setSelectedImage] = useState(null);
const products = [
{ id:1, name:"Western Gown", price:2500, img:westernGown },
{ id:2, name:"Teddy Bear", price:900, img:teddyBear },
{ id:3, name:"Dairy Milk Chocolate", price:999, img:dairyMilk },
{ id:4, name:"Color Printer", price:9500, img:printer },
{ id:5, name:"Delight Chocolates", price:750, img:delightChocolates },
{ id:6, name:"Smart Watch", price:2999, img:smartwatch },
{ id:7, name:"Bluetooth Speaker", price:2500, img:speaker },
{ id:8, name:"Barbie Dress", price:5000, img:barbieDress },
{ id:9, name:"Digital Camera", price:28000, img:camera },
{ id:10, name:"Gaming Console", price:35000, img:console },
{ id:11, name:"Ferro Chocolates", price:699, img:ferroChoci },
{ id:12, name:"Tablet Device", price:15000, img:tablet },
{ id:13, name:"Mechanical Keyboard", price:4000, img:keyboard },
{ id:14, name:"Wireless Mouse", price:1200, img:mouse },
{ id:15, name:"Fancy Dress", price:1000, img:fancyDress },
{ id:16, name:"LED Monitor", price:12000, img:monitor },
{ id:17, name:"Laptop", price:100000, img:laptop },
{ id:18, name:"WiFi Router", price:2200, img:router },
{ id:19, name:"Power Bank", price:1800, img:powerbank }
];
const addToCart = (product)=>{
let cart = JSON.parse(localStorage.getItem("cart")) || [];
cart.push(product);
localStorage.setItem("cart",JSON.stringify(cart));
alert(product.name+" added to cart");
};
const addToWishlist = (product)=>{
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
wishlist.push(product);
localStorage.setItem("wishlist",JSON.stringify(wishlist));
alert(product.name+" added to wishlist");
};
const orderNow = (product)=>{
let orders = JSON.parse(localStorage.getItem("orders")) || [];
orders.push(product);
localStorage.setItem("orders",JSON.stringify(orders));
alert("Order placed for "+product.name);
};
const filteredProducts = products.filter(product =>
product.name.toLowerCase().includes(search.toLowerCase())
);
return (
<div className="products-page">
<h2>Our Products</h2>
<div className="product-grid">
{filteredProducts.map((item)=>(
<div className="product-card" key={item.id}>
<img src={item.img} alt={item.name} onClick={()=>setSelectedImage(item.img)} className="product-image"/>
<p>{item.name}</p>
<span>₹{item.price}</span>
<div className="product-buttons">
<button onClick={()=>addToCart(item)}>Add to Cart</button>
<button className="wishlist-btn" onClick={()=>addToWishlist(item)}>Wishlist</button>
<button className="order-btn" onClick={()=>orderNow(item)}>Order Now</button>
</div>
</div>
))}
</div>
{selectedImage && (
<div className="image-modal" onClick={()=>setSelectedImage(null)}>
<img src={selectedImage} alt="Preview"/>
</div>
)}
</div>
);
}
export default Products;