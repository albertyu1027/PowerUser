// Require file-system module. This will be used to read the csv received from the user
const fs = require("fs");
// Require Express.js to setup the routes
const express = require("express");
const router = express.Router();
// Require the Multer pkg which will help us receive and read the file contents
const multer = require("multer");

// Setup Multer's storage options for development and production environments
if (process.env.NODE_ENV === "production") {
	// We use memory storage in production because Heroku's free dyno's do not offer simple file storage
	var storage = multer.memoryStorage();
	var upload = multer({
		storage: storage
	});
} else {
	// If running locally, Multer will save to 'uploads' directory on the developer's computer
	var upload = multer({
		dest: "uploads/"
	});
}

router.post("/", upload.single("pgeCsv"), function (req, res) {

	/* ============================== TESTING FILE RESPONSE ============================== */
	// req.body will hold the text fields, if there were any
	// req.file is the `pgeData` file
	if (process.env.NODE_ENV === "production") {
		let file = req.file.buffer.toString();
		res.send(file);
	} else {
		console.log(req.file);
		res.json(req.file);
	}
	/* ============================== TESTING FILE RESPONSE ============================== */

	

});

module.exports = router;