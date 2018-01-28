// Require csvtojson pkg to convert csv data to JSON
const csv = require('csvtojson');
// Require Express.js to setup the routes
const express = require("express");
const router = express.Router();
const UploadData = require("../../models/upload");
// Require the Multer pkg which will help us receive and read the file contents
const multer = require("multer");

// Use Multer's memory storage because Heroku's free dyno's do not offer simple file storage
var storage = multer.memoryStorage();
var upload = multer({
	storage: storage
});

router.post("/", upload.single("pgeCsv"), function (req, res) {
	// req.body will hold the text fields, if there were any
	// req.file is the `pgeData` file
	let file = req.file.buffer.toString().trim();
	let splitCSV = "TYPE," + file.split("TYPE,")[1];

	let id = req.body.userid,
		email = req.body.username,
		monthNumber = null,
		usage = 0,
		usage_cost = 0;

	csv({
			noheader: false
		})
		.fromString(splitCSV)
		.on('csv', (csvRow) => {
			// Store the date 
			var row_date = new Date(csvRow[1]);
			var row_usage = Number(csvRow[4]);
			var row_cost = stripDollarSign(csvRow[6]);

			monthNumber = getMonthNumber(row_date);
			usage += row_usage;
			usage_cost += row_cost;

		})
		.on('done', () => {
			// upload = new UploadData(uploadObject);
			// upload.save().then((savedData)=>{
			//console.log("PG&E Data uploaded:", savedData);
			res.json({
				UserID: id,
				username: email,
				date: monthNumber,
				kwhUsage: Math.round(usage,2),
				cost: Math.round(usage_cost,2)
			});
			// });
		});
});

function stripDollarSign(row_cost) {
	// Split the cost string into an array, keeping the second item in the array which is the cost
	// The first [0], is the US dollar sign.
	let amount = Number(row_cost.split("$")[1]);
	// Return the amount as a number without the dollar sign.
	return amount;
}

function getMonthNumber(row_date) {
	var date = new Date(row_date);
	return (date.getMonth());
}

module.exports = router;