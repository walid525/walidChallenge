import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const createProduct = async (productData) => {
  return await axios.post(`${BASE_URL}/`, productData);
};

export const getAllProducts = async () => {
  return await axios.get(`${BASE_URL}/`);
};

export const getProductById = async (id) => {
  return await axios.get(`${BASE_URL}/${id}`);
};

export const updateProduct = async (id, productData) => {
  return await axios.put(`${BASE_URL}/api/products/update/${id}`, productData);
};

export const deleteProduct = async (id) => {
  return await axios.delete(`${BASE_URL}/api/products/delete/${id}`);
};
