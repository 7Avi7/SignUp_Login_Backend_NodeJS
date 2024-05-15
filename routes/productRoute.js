// productRoute.js

const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
const productController = require("../controllers/productController");

// Apply middleware to protect all routes in this router
// router.use(verifyToken);

// Route to fetch all products
router.get("/", productController.getAllProducts);

// Route to fetch a specific product by ID
router.get("/:id", productController.getProductById);

// Route to fetch a specific product by name
router.get("/name/:name", productController.getProductByName);

// Route to fetch products by price
router.get("/price/:price", productController.getProductsByPrice);

// Route to create a new product
router.post(
  "/",
  (req, res, next) => {
    console.log("Creating a new product...");
    next();
  },
  verifyToken,
  productController.createProduct
);

// Route to update a product
router.put("/:id", productController.updateProduct);

// Route to delete a product
router.delete("/:id", productController.deleteProduct);

module.exports = router;
