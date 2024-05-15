const Product = require("../models/productModel");
const productService = require("../services/productService");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await productService.getProductById(productId);
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getProductByName = async (req, res) => {
  try {
    const productName = req.params.name;
    const product = await productService.getProductByName(productName);
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getProductsByPrice = async (req, res) => {
  try {
    const productPrice = req.params.price;
    const products = await productService.getProductsByPrice(productPrice);
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const productData = req.body;
    const createProduct = await productService.createProduct(productData);
    res.status(201).json(createProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const productData = req.body;

    const product = await productService.updateProduct(productId, productData);

    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    await productService.deleteProduct(productId);

    res.status(204).json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
