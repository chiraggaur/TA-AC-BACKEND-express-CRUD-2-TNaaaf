var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  data = req.body;
  res.render("index", { title: data });
});

router.get("/details", function (req, res, next) {
  data = req.body;
  res.render("details", { title: data });
});

module.exports = router;
