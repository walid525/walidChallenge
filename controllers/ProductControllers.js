const ProductModel = require("../models/ProdModels");
var mongo = require("mongodb");

module.exports.createProduct = async function (req, res) {
  console.log(req.body);
  try {
    const product = await ProductModel.create({
      ProductName: req.body.ProductName,
      Category: req.body.Category,
      Price: req.body.Price,
      Description: req.body.Description,
    });
    console.log("Product ajouté");
    res.json({ msg: "Product ajouté", statut: 200, data: product });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "error", statut: 500, data: null });
  }
};

module.exports.getAllProducts = async function (req, res) {
  try {
    const products = await ProductModel.find({}).exec();
    console.log("liste des Products");
    res.json({ msg: "liste des Products", statut: 200, data: products });
  } catch (err) {
    res.json({ msg: "error", statut: 500, data: null });
  }
};
module.exports.getOneProduct = async function (req, res) {
  try {
    const product = await ProductModel.findById(req.params.id).exec();
    res.json({ msg: "un Product", statut: 200, data: product });
  } catch (err) {
    res.json({ msg: "error", statut: 500, data: null });
  }
};
module.exports.deleteOneProduct = async function (req, res) {
  try {
    const product = await ProductModel.deleteOne({ _id: req.params.id }).exec();
    console.log("Product supprimé");
    res.json({ msg: "Product supprimé", statut: 200, data: product });
  } catch (err) {
    res.json({ msg: "error", statut: 500, data: null });
  }
};
module.exports.updateOneProduct = async function (req, res) {
  try {
    const product = await ProductModel.updateOne(
      { _id: req.params.id },
      req.body
    ).exec();
    console.log("Product modifié");
    res.json({ msg: "Product modifié", statut: 200, data: product });
  } catch (err) {
    res.json({ msg: "error", statut: 500, data: null });
  }
};
