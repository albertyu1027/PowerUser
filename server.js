const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// // Set up promises with mongoose
// mongoose.Promise = global.Promise;

// //connect to mongo db
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/27017",

// );

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
