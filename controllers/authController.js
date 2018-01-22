const db = require("../models");
var request = require("request");
const ObjectId = require("mongodb").ObjectID;
var rp = require("request-promise");
const User = require("../models/user");
const passport = require("../passport");

// Defining methods for the booksController
module.exports = {
  //Retrieve Search Results From NYT API
  createAll: function(req, res) {
    //console.log("*".repeat(100));
    console.log(req.body);
    var options = {
      uri: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
      qs: {
        "api-key": "a242a14e2dc34c8283afbc9a8c886b63",
        q: req.body.topic,
        begin_date: req.body.startYear,
        end_date: req.body.endYear
      },
      json: true
    };

    //Emptying The Database Before Retrieving The Search
    db.Article.remove({ saved: false }).then(() => {
      console.log("DB Emptied");
    });
    rp(options)
      .then(function(res) {
        console.log("*".repeat(100));

        console.log(res);
        // console.log("*".repeat(100));
        // console.log(body);

        // console.log(body.response.docs);
        let newsArticle = res.response.docs.forEach(article => {
          db.Article.create({
            title: article.headline.main,
            date: article.pub_date,
            url: article.web_url
          });
        });
      })
      .done(results => {
        res.send(results);
      });
  },

  createNewUser: function(req, res) {
    console.log(req.body);
    const { city, stateLocation, username, password } = req.body;
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
