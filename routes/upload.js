const express = require("express");
const router = express.Router();
const multer = require("multer");
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

router.post("/", upload.single("pgeCsv"), function (req, res, next) {
	// req.body will hold the text fields, if there were any
	// req.file is the `pgeData` file
	//console.log(req);
	console.log(req.file.buffer);
	res.json(req.file);
  });

module.exports = router;