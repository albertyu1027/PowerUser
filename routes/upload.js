// Require csvtojson pkg to convert csv data to JSON
const csv = require('csvtojson');
// Require Express.js to setup the routes
const express = require("express");
const router = express.Router();
const UploadData = require("../models/upload");
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
	let splitCSV = "TYPE," + file.split("TYPE,")[1];

	var uploadObject = {
		id:"1111",
		date: "11/28/2017",
		kwhUsage: 18.06,
		cost: 3.63
	};

	csv({
			noheader: false
		})
		.fromString(splitCSV)
		.on('csv', (csvRow) => {
			console.log("CSV Row:", csvRow);

		})
		.on('done', () => {
			upload = new UploadData(uploadObject);
			upload.save().then((savedData)=>{
				console.log("PG&E Data uploaded:", savedData);
				res.send("Complete");
			});
		});
	/* ============================== TESTING FILE RESPONSE ============================== */

});

module.exports = router;