const express = require("express");
const router = express.Router();
const multer = require("multer");

if (process.env.NODE_ENV === "production") {
	var storage = multer.memoryStorage();
	var upload = multer({
		storage: storage
	});
} else {
	var upload = multer({
		dest: "uploads/"
	});
}

router.post("/", upload.single("pgeCsv"), function (req, res) {
	// req.body will hold the text fields, if there were any
	// req.file is the `pgeData` file

	if (process.env.NODE_ENV === "production") {
		let file = req.file.buffer.toString();
		res.send(file);
	} else {
		console.log(req.file);
		res.json(req.file);
	}
});

module.exports = router;