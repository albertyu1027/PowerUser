const path = require("path");
const router = require("express").Router();
const authRoutes = require("./auth");
const User = require("../models/user");
const passport = require("../passport");
const uploadRoutes = require("./uploads");
const apiRoutes = require("./api");

// API Routes
router.use("/", authRoutes);

router.use("/api/upload", uploadRoutes);

// API Routes
router.use("/api", apiRoutes);

module.exports = router;