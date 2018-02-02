require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
var cors = require("cors");
const app = express();
const passport = require("passport");
const session = require("express-session");
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
// Serve up static assets
app.use(express.static(`${__dirname}/client/build`));

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("port", process.env.PORT || 3001);

//Setting Up Passport
app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true
  })
); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Add routes, both API and view
app.use(routes);

//Minor onChange
if (process.env.NODE_ENV === "production") {
  app.get("*", function(req, res) {
    res.sendFile(`${__dirname}/client/build/index.html`);
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
  console.log("ENV", process.env.NODE_ENV);
});
