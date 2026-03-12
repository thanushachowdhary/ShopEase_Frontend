import React from "react";
import "..styles/Admin.css";
function AdminCategoriesPage() {
  return (
    <div className="container">
      <h2>Categories</h2>
      <input placeholder="Category Name" />
      <button>Add Category</button>
    </div>
  );
}
export default AdminCategoriesPage;