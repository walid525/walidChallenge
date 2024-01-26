import React from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import AddProduct from "./components/ProductAddModal";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/ProductList" element={<ProductList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
