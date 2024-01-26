import React, { useState } from "react";
import "./index.scss";
import axios from "axios";
import { deleteProduct } from "../../services/productService";
function ProductCard({ product }) {
  const handleDeleteProduct = async (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      await deleteProduct(productId);
      fetchAllProducts();
    }
  };
  const fetchAllProducts = async () => {
    const res = await axios.get("http://localhost:3000/api/products/");
    setProductLists(res.data.data);
  };
  const [ProductList, setProductLists] = useState([]);

  return (
    <div className="product-card">
      <img
        src="https:/e7.pngegg.com/pngimages/86/916/png-clipart-orange-and-grey-tubular-battery-car-device-driver-icon-car-battery-car-accident-rectangle.png"
        alt="Product"
        className="product-image"
      />
      <h2 className="product-name">{product.ProductName}</h2>
      <p className="product-price">{product.Price}</p>
      <p className="product-description">{product.Description}</p>

      <div className="Buttons">
        <button className="Edit-button">Edit</button>
        <button
          className="Delete-button"
          onClick={() => handleDeleteProduct(product._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
