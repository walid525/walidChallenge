const express = require("express");

const {
  createProduct,
  deleteOneProduct,
  getAllProducts,
  getOneProduct,
  updateOneProduct,
} = require("../controllers/ProductControllers");
const router = require("express").Router();

router.post("/", createProduct);
router.get("/", getAllProducts);
router.get("/:id", getOneProduct);

router.put("/update/:id", updateOneProduct);
router.delete("/delete/:id", deleteOneProduct);

module.exports = router;
