const db = require("../models");
var request = require("request");
const ObjectId = require("mongodb").ObjectID;
var rp = require("request-promise");
const User = require("../models/user");
const passport = require("../passport");

// Defining methods for the booksController
module.exports = {
  createNewUser: function(req, res) {
    console.log(req.body);
    const { city, stateLocation, username, password, firstName } = req.body;
    console.log(username);

    // ADD VALIDATION
    User.findOne({ "local.username": username }, (err, userMatch) => {
      if (userMatch) {
        return res.json({
          error: `Sorry, already a user with the username: ${username}`
        });
      }

      const newUser = new User({
        city: city,
        name: firstName,
        state: stateLocation,
        "local.username": username,
        "local.password": password
      });
      newUser.save((err, savedUser) => {
        console.log("user is saved");
        if (err) return res.json(err);
        return res.json(savedUser);
      });
    });
  }
  // logInUser: function(req, res, next){
  //   console.log(req.body);
  //   console.log("================");
  //   next();
  // },
  // passport.authenticate("local"),
  // (req, res) => {
  //   console.log("POST to /login");
  //   const user = JSON.parse(JSON.stringify(req.user)); // hack
  //   const cleanUser = Object.assign({}, user);
  //   if (cleanUser.local) {
  //     console.log(`Deleting ${cleanUser.local.password}`);
  //     delete cleanUser.local.password;
  //   }
  //   res.json({ user: cleanUser });
  // }
};
