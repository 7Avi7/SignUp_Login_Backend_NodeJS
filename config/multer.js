const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/"); // Destination folder for file uploads (publicly accessible)
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extension = file.originalname.split(".").pop(); // Get the file extension
    cb(
      null,
      file.originalname.replace(`.${extension}`, "") +
        "-" +
        uniqueSuffix +
        `.${extension}`
    ); // Append timestamp to original filename
  },
});

const fileFilter = function (req, file, cb) {
  // Accept only image files with the extensions .jpeg, .jpg, and .png
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only JPEG, JPG, and PNG images are allowed!"), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

module.exports = upload;
