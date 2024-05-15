// models/personModel.js
const mongoose = require("mongoose");

const personSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    age: Number,
    email: String,
    address: {
      street: String,
      city: String,
      state: String,
      zipCode: String,
      country: String,
    },
    phone: String,
    occupation: String,
    company: String,
  },
  { collection: "person_collection" }
);

module.exports = mongoose.model("Person", personSchema);
