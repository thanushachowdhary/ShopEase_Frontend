import React, { useState, useEffect } from "react";
import "../styles/Cart.css";

function Cart() {
const [cart, setCart] = useState([]);
useEffect(() => {
  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  setCart(storedCart);
}, []);
const removeItem = (id) => {
  const updatedCart = cart.filter(item => item.id !== id);
  setCart(updatedCart);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
};
const total = cart.reduce((sum, item) => sum + item.price, 0);
return (
<div className="cart">
<h2>Shopping Cart 🛒</h2>
{cart.length===0?(
<p>Your cart is empty</p>
):(
cart.map(item=>(
<div className="cart-item" key={item.id}>
<img src={item.img} alt={item.name} />
<div className="details">
<h3>{item.name}</h3>
<p>₹{item.price}</p>
<button onClick={() => removeItem(item.id)}>
Remove
</button>
</div>
</div>
))
)}
<div className="total-box">
<h3>Total: ₹{total}</h3>
<button className="checkout">Checkout</button>
</div>
</div>
);
}
export default Cart;