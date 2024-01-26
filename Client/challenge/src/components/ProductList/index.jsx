import React, { useState, useEffect } from "react";
import "./index.scss";
import logo from "../../Assets/logo.png";
import ProductCard from "../ProductCard/index";
import ProductAddModal from "../ProductAddModal/index";
import axios from "axios";

function ProductList() {
  const [ProductList, setProductLists] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const fetchAllProducts = async () => {
    const res = await axios.get("http://localhost:3000/api/products/");
    setProductLists(res.data.data);
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div className="container">
      <div className="sidebar">
        <img src={logo} alt="Logo" className="logo" />
        <button className="All-Products">ALL PRODUCTS</button>
      </div>
      <div className="main-content">
        <div className="navbar">
          <button className="search-button">Rechercher</button>

          <ProductAddModal isOpen={isModalOpen} closeModal={closeModal} />
        </div>
        <div className="APPBar">
          {" "}
          All products
          <button className="AddProduct" onClick={openModal}>
            ADD NEW PRODUCT
          </button>
        </div>

        <div className="product-list">
          {ProductList.map((product, i) => (
            <ProductCard key={i} product={product} />
          ))}
        </div>
        {/* <div className="Footer">Footer</div> */}
      </div>
    </div>
  );
}

export default ProductList;
