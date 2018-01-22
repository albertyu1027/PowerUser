require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("port", process.env.PORT || 3001);

// Add routes, both API and view
app.use(routes);

//Minor onChange
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/poweruser";
// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(MONGODB_URI);

// Start the API server
app.listen(app.get("port"), function() {
  console.log(`🌎  ==> API Server now listening on PORT ${app.get("port")}!`);
});
