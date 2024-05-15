const Signup = require("../models/signupModel");

exports.getUserInfo = async (userId) => {
  try {
    const userInfo = await Signup.findById(userId).select("-password");
    if (!userInfo) {
      throw new Error("User not found");
    }
    return userInfo;
  } catch (err) {
    throw new Error(err.message);
  }
};

exports.getUserPhoto = async (userId) => {
  try {
    const userInfo = await Signup.findById(userId);
    if (!userInfo) {
      throw new Error("User not found");
    }
    // Assuming user photo is stored in a field called 'photo'
    return userInfo.photo; // Adjust accordingly based on your schema
  } catch (err) {
    throw new Error(err.message);
  }
};
