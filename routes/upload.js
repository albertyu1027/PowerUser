// Require csvtojson pkg to convert csv data to JSON
const csv = require('csvtojson');
// Require Express.js to setup the routes
const express = require("express");
const router = express.Router();
// Require the Multer pkg which will help us receive and read the file contents
const multer = require("multer");

// Use Multer's memory storage because Heroku's free dyno's do not offer simple file storage
var storage = multer.memoryStorage();
var upload = multer({
	storage: storage
});

router.post("/", upload.single("pgeCsv"), function (req, res) {

	/* ============================== TESTING FILE RESPONSE ============================== */
	// req.body will hold the text fields, if there were any
	// req.file is the `pgeData` file
	let file = req.file.buffer.toString().trim();
	console.log(file);
	let splitCSV = "TYPE," + file.split("TYPE,")[1];

	csv({
			noheader: false
		})
		.fromString(splitCSV)
		.on('csv', (csvRow) => { //this func will be called twice. Header row will not be populated
			console.log("CSV Row:", csvRow);
		})
		.on('done', () => {
			res.send(splitCSV);
		});
	/* ============================== TESTING FILE RESPONSE ============================== */



});

module.exports = router;