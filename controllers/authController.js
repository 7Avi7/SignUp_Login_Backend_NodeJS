// controllers/authController.js
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authService = require("../services/authService");

exports.signup = async (req, res) => {
  try {
    const newUser = await authService.signup(req.body, req.file.filename);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const token = await authService.login(req.body.email, req.body.password);
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
