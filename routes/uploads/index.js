const router = require("express").Router();
const uploadRoutes = require("./upload");

// Book routes
router.use("/api", uploadRoutes);

module.exports = router;
