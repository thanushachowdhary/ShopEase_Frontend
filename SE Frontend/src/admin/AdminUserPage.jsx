import React from "react";
import "..styles/Admin.css";
function AdminUsersPage() {
  return (
    <div className="page">
      <h2>Users</h2>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
        <tr>
          <td>Thanu</td>
          <td>thanu@gmail.com</td>
          <td>Customer</td>
        </tr>
        <tr>
          <td>Nandu</td>
          <td>Nandu@gmail.com</td>
          <td>Seller</td>
        </tr>
      </table>
    </div>
  );
}
export default AdminUsersPage;
