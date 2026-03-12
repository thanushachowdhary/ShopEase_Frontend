import React, { useEffect, useState } from "react";
import "../styles/Wishlist.css";

function Wishlist() {
const [wishlist,setWishlist] = useState([]);
useEffect(()=>{
const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
setWishlist(storedWishlist);
},[]);
const addToCart = (product)=>{
let cart = JSON.parse(localStorage.getItem("cart")) || [];
cart.push(product);
localStorage.setItem("cart",JSON.stringify(cart));
alert(product.name + " added to cart");
};
const removeItem = (index)=>{
let updatedWishlist = [...wishlist];
updatedWishlist.splice(index,1);
setWishlist(updatedWishlist);
localStorage.setItem("wishlist",JSON.stringify(updatedWishlist));
};
return (
<div className="wishlist-page">
<h2>My Wishlist ❤️</h2>
<div className="wishlist-grid">
{wishlist.length === 0 ? (
<h3>Your wishlist is empty</h3>
):(
wishlist.map((item,index)=>(
<div className="wishlist-card" key={index}>
<img src={item.img} alt={item.name} />
<h4>{item.name}</h4>
<p>₹ {item.price}</p>
<div className="wishlist-buttons">
<button className="cart-btn" onClick={()=>addToCart(item)}>Add to Cart</button>
<button className="remove-btn" onClick={()=>removeItem(index)}>Remove</button>
</div>
</div>
))
)}
</div>
</div>
);
}
export default Wishlist;