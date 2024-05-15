// middleware/verifyToken.js
const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  console.log("Received token:", token);

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. Token is missing." });
  }

  try {
    const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET); // Extract token without "Bearer "
    console.log("Decoded payload:", decoded);
    req.userId = decoded.userId; // Add userId to request object for further use
    next();
  } catch (err) {
    console.error("Error verifying token:", err.message);
    return res.status(403).json({ message: "Invalid token." });
  }
};

module.exports = verifyToken;
