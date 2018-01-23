const express = require("express");
const router = express.Router();
const multer = require("multer");
var upload = multer({
	dest: "uploads/"
});

router.post("/", upload.single("pgeData"), function (req, res, next) {
	// req.file is the `pgeData` file
	// req.body will hold the text fields, if there were any
  });

module.exports = router;