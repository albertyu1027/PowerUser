const express = require("express");
const router = express.Router();
const multer = require("multer");
var upload = multer({
	dest: "../tmp"
});

router.post("/", upload.single("pgeCsv"), function (req, res, next) {
	// req.body will hold the text fields, if there were any
	// req.file is the `pgeData` file
	console.log(req);
  });

module.exports = router;