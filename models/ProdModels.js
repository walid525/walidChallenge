const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  ProductName: {
    type: String,
    // required: true,
  },
  Category: {
    type: String,
    // required: true,
  },
  Price: {
    type: Number,
    // required: true,
  },
  Description: {
    type: String,
    // required: true,
  },
});
const ProductModel = mongoose.model("Product", ProductSchema);
module.exports = ProductModel;
