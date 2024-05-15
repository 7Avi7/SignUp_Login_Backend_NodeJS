const path = require("path");
const userService = require("../services/userService");
const jwt = require("jsonwebtoken");
exports.getUserInfo = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userInfo = await userService.getUserInfo(userId);
    if (!userInfo) {
      return res.status(404).json({ message: "User not found" });
    }

    const token = jwt.sign({ userId: userInfo._id }, process.env.JWT_SECRET, {
      expiresIn: "3y",
    });

    res.setHeader("x-auth-token", token);
    res.json({ user: userInfo, token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getUserPhoto = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userPhoto = await userService.getUserPhoto(userId);
    if (!userPhoto) {
      return res.status(404).json({ message: "Photo not found" });
    }

    const photoPath = path.join(__dirname, "../public/uploads", userPhoto);

    res.sendFile(photoPath);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
