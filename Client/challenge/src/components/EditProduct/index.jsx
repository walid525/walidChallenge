import React, { useState } from "react";

function ProductEditModal({ product, isOpen, closeModal, onEdit }) {
  const [formData, setFormData] = useState({
    productName: product.ProductName,
    price: product.Price,
    description: product.Description,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEdit = (e) => {
    e.preventDefault();

    const updatedProduct = {
      productName: formData.productName,
      category: formData.category,
      description: formData.description,
      regularPrice: parseFloat(formData.regularPrice),
      salePrice: parseFloat(formData.salePrice),
      stockQuantity: parseInt(formData.stockQuantity, 10),
      isOnSale: formData.isOnSale,
    };

    axios
      .put(
        `http://localhost:3000/api/products/update/${productToEdit.id}`,
        updatedProduct
      )
      .then((response) => {
        updateProduct(productToEdit.id, updatedProduct);
        closeModal();
      })
      .catch((error) => {
        console.error("Error updating product:", error);
      });
  };

  return (
    <div>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Edit Product</h2>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col">
                  <label>Product Name</label>
                  <input
                    type="text"
                    name="productName"
                    value={formData.productName}
                    onChange={handleChange}
                  />
                </div>
                <div className="col">
                  <label>Price</label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                  />
                </div>
                <div className="col">
                  <label>Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="Buttons">
                <button className="Edit_Button" type="submit">
                  Save Changes
                </button>
                <button
                  className="Cancel_Button"
                  type="button"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductEditModal;
