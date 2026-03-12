import React from "react";

function AddProductForm() {
  return (
    <div className="container">
      <h2>Add Product</h2>
      <input placeholder="Product Name" />
      <input placeholder="Price" />
      <input placeholder="Stock" />
      <input placeholder="Category" />
      <button>Add Product</button>
    </div>
  );
}
export default AddProductForm;