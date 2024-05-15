// services/authService.js
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Signup = require("../models/signupModel");
require("dotenv").config();

exports.signup = async (userData, photo) => {
  try {
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    const newUser = new Signup({
      firstName: userData.firstName,
      lastName: userData.lastName,
      age: userData.age,
      email: userData.email,
      password: hashedPassword,
      address: userData.address,
      phone: userData.phone,
      occupation: userData.occupation,
      company: userData.company,
      photo: photo,
    });

    return await newUser.save();
  } catch (err) {
    throw new Error(err.message);
  }
};

exports.login = async (email, password) => {
  try {
    const user = await Signup.findOne({ email });

    if (!user) {
      throw new Error("User not found");
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      throw new Error("Invalid password");
    }

    return jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET, // Use environment variable for secret
      {
        expiresIn: "3y",
      }
    );
  } catch (err) {
    throw new Error(err.message);
  }
};
