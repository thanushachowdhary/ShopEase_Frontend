import React from "react";
import "..styles/Seller.css";
function SellerDashboard() {
  return (
    <div className="page">
      <h2>Seller Dashboard</h2>
      <table>
        <tr>
          <th>Product</th>
          <th>Stock</th>
          <th>Orders</th>
        </tr>
        <tr>
          <td>Phone</td>
          <td>50</td>
          <td>10</td>
        </tr>
        <tr>
          <td>Laptop</td>
          <td>20</td>
          <td>5</td>
        </tr>
      </table>
    </div>
  );
}
export default SellerDashboard;