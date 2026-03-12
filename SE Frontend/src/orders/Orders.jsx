import React from "react";
import "../styles/Orders.css";
import headphones from "../assets/headphone.jpeg";
import smartwatch from "../assets/smartwatch.jpg";
import laptop from "../assets/laptop.avif";
function Orders() {
const orders = [
{
id:1,
name:"Wireless Headphones",
price:2200,
date:"01 Mar 2026",
status:"Delivered",
img:headphones
},
{
id:2,
name:"Smart Watch",
price:3500,
date:"03 Mar 2026",
status:"Shipped",
img:smartwatch
},
{
id:3,
name:"Gaming Laptop",
price:65000,
date:"05 Mar 2026",
status:"Processing",
img:laptop
}
];
return (
<div className="orders-page">
<h2>My Orders 📦</h2>
<div className="orders-container">
{orders.map(order => (
<div className="order-card" key={order.id}>
<img src={order.img} alt={order.name}/>
<div className="order-details">
<h3>{order.name}</h3>
<p>Price: ₹{order.price}</p>
<p>Order Date: {order.date}</p>
<span className={`status ${order.status}`}>
{order.status}
</span>
</div>
</div>
))}
</div>
</div>
);
}
export default Orders;