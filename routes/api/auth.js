const router = require("express").Router();
const articlesController = require("../controllers/authController");
const User = require("../db/models/user");
const passport = require("../passport");

router
  .route("/find")
  .post(articlesController.createAll)
  .get(articlesController.pullArticles);

router.route("/find/:id").put(articlesController.saveArticles);

router.route("/saved").get(articlesController.getSavedArticles);
// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
