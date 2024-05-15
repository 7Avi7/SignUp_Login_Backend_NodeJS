const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Route to fetch signed-up user information
router.get("/:userId", userController.getUserInfo);

// Route to fetch user photo
router.get("/photo/:userId", userController.getUserPhoto);

module.exports = router;
