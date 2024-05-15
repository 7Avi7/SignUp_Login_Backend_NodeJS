// models/signupModel.js
const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, minLength: 1 },
    lastName: { type: String, required: true, minLength: 1 },
    age: { type: Number, required: true, min: 1 },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: {
      street: { type: String, required: true, minLength: 1 },
      city: { type: String, required: true, minLength: 1 },
      state: { type: String, required: true, minLength: 1 },
      zipCode: { type: String, required: true, minLength: 1 },
      country: { type: String, required: true, minLength: 1 },
    },
    phone: { type: String, required: true, minLength: 10 },
    occupation: { type: String, required: true, minLength: 1 },
    company: { type: String, required: true, minLength: 1 },
    photo: { type: String }, // Assuming storing file path
  },
  {
    collection: "Signed_Up_Users",
  }
);

module.exports = mongoose.model("Signup", signupSchema);
