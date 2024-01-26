import React, { useState } from "react";
import "./index.scss";
import axios from "axios";

function ModernAddProductModal({ isOpen, closeModal, addProduct }) {
  const [formData, setFormData] = useState({
    productName: "",
    category: "",
    description: "",
    regularPrice: "",
    salePrice: "",
    stockQuantity: "",
    isOnSale: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      ProductName: formData.productName,
      Category: formData.category,
      Description: formData.description,
      Price: parseFloat(formData.regularPrice),
      salePrice: parseFloat(formData.salePrice),
      stockQuantity: parseInt(formData.stockQuantity, 10),
      isOnSale: formData.isOnSale,
    };

    axios
      .post("http://localhost:3000/api/products", newProduct)
      .then((response) => {
        addProduct(response.data);
        closeModal();
      })
      .catch((error) => {
        console.error("Error adding product:", error);
      });
  };

  return (
    <div>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Ajouter un produit</h2>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="row">
                <div className="col">
                  <label>Nom du produit</label>
                  <input
                    type="text"
                    name="productName"
                    value={formData.productName}
                    onChange={handleChange}
                    placeholder="Nom du produit"
                    required
                  />
                </div>
                <div className="col">
                  <label>Catégorie</label>
                  <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    placeholder="Catégorie"
                    required
                  />
                </div>
                <div className="col">
                  <label>Quantité en stock</label>
                  <input
                    type="number"
                    name="stockQuantity"
                    value={formData.stockQuantity}
                    onChange={handleChange}
                    placeholder="Quantité en stock"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label>Regular Price</label>
                  <input
                    type="number"
                    name="regularPrice"
                    value={formData.regularPrice}
                    onChange={handleChange}
                    placeholder="Regular Price"
                  />
                </div>
                <div className="col">
                  <label>Sale Price</label>
                  <input
                    type="number"
                    name="salePrice"
                    value={formData.salePrice}
                    onChange={handleChange}
                    placeholder="Sale Price"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label>Description</label>
                  <textarea
                    className="textArea"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Description"
                  />
                </div>
              </div>
              <div className="Buttons">
                <button className="Add_Button" type="submit">
                  Ajouter le produit
                </button>
                <button
                  className="Cancel_Button"
                  type="button"
                  onClick={closeModal}
                >
                  Annuler
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModernAddProductModal;
