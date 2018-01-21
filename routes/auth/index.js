const router = require("express").Router();
const authRoutes = require("./auth");

// Book routes
router.use("/", authRoutes);

module.exports = router;
