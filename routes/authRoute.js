// routes/authRoute.js
const express = require("express");
const router = express.Router();
const multer = require("../config/multer");
const authController = require("../controllers/authController");

router.post("/signup", multer.single("photo"), authController.signup);
router.post("/login", authController.login);

module.exports = router;
