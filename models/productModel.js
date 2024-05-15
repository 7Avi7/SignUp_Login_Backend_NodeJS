const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema(
  {
    id: String,
    name: String,
    price: Number,
    harmful: Boolean,
  },
  { collection: "products" }
);

const Product = mongoose.model("Product", productsSchema);

module.exports = Product;
