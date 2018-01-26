const path = require("path");
const router = require("express").Router();
const authRoutes = require("./auth");
const User = require("../models/user");
const passport = require("../passport");
const uploadRoutes = require("./upload");
const apiRoutes = require("./api");

// API Routes
router.use("/", authRoutes);

router.use("/api/upload", uploadRoutes);

// API Routes
router.use("/api", apiRoutes);
// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
module.exports = router;