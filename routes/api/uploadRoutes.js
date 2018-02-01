const router = require("express").Router();
const uploadController = require("../../controllers/uploadController");


// Matches with "/api/books"
router.route("/")
  .get(uploadController.findAll)
  .post(uploadController.create);
// Matches with "/api/books/:id"
router
  .route("/:UserID")
  .get(uploadController.findById);

  router
  .route("/email/:username")
  .get(uploadController.findByUsername);

module.exports = router;
