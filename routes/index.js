const path = require("path");
const router = require("express").Router();
const authRoutes = require("./auth");
const User = require("../models/user");
const passport = require("../passport");
const uploadRoutes = require("./upload");

// API Routes
router.use("/", authRoutes);

router.use("/api/upload", uploadRoutes);

module.exports = router;
