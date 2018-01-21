const router = require("express").Router();
const uploadRoutes = require("./uploadRoutes");
// Book routes
router.use("/uploads", uploadRoutes);
module.exports = router;
