const Product = require("../models/productModel");

exports.getAllProducts = async () => {
  try {
    const products = await Product.find();
    return products;
  } catch (err) {
    throw new Error(`Unable to fetch products: ${err.message}`);
  }
};

exports.getProductById = async (productId) => {
  try {
    const product = await Product.findById(productId);
    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  } catch (err) {
    throw new Error(`Unable to fetch product: ${err.message}`);
  }
};

exports.getProductByName = async (productName) => {
  try {
    const product = await Product.findOne({ name: productName });
    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  } catch (err) {
    throw new Error(`Unable to fetch product: ${err.message}`);
  }
};

exports.getProductsByPrice = async (productPrice) => {
  try {
    const products = await Product.find({ price: productPrice });
    if (!products || products.length === 0) {
      throw new Error("No products found with that price");
    }
    return products;
  } catch (err) {
    throw new Error(`Unable to fetch products: ${err.message}`);
  }
};

exports.createProduct = async (productData) => {
  try {
    const product = await Product.create(productData);
    return product;
  } catch (err) {
    throw new Error(err.message);
  }
};

exports.updateProduct = async (productId, productData) => {
  try {
    const product = await Product.findByIdAndUpdate(productId, productData, {
      new: true,
    });
    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  } catch (err) {
    throw new Error(`Unable to update product: ${err.message}`);
  }
};

exports.deleteProduct = async (productId) => {
  try {
    const product = await Product.findByIdAndDelete(productId);

    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  } catch (err) {
    throw new Error(`Unable to delete product: ${err.message}`);
  }
};
