const path = require("path");
const router = require("express").Router();
const authRoutes = require("./auth");
const User = require("../models/user");
const passport = require("../passport");

// API Routes
router.use("/auth", authRoutes);

// If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

// router.get("/google", passport.authenticate("google", { scope: ["profile"] }));
// router.get(
//   "/google/callback",
//   passport.authenticate("google", {
//     successRedirect: "/",
//     failureRedirect: "/login"
//   })
// );

module.exports = router;
