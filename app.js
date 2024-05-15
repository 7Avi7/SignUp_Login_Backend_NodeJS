const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const path = require("path");

const productsRoute = require("./routes/productRoute");
const personRoute = require("./routes/personRoute");
const authRoute = require("./routes/authRoute");

const userRoute = require("./routes/userRoute");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/testparam")
  .then(() => console.log("Database connection successful!"))
  .catch((err) => console.error("Database connection error:", err));

// Routes
app.use("/products", productsRoute);
app.use("/persons", personRoute);
app.use("/auth", authRoute);
app.use("/users", userRoute);

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to my world!");
});

// Basic error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: "Something went wrong!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
