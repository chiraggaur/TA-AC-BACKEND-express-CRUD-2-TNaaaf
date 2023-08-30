let express = require("express");
let Routes = express.Router();
let Comment = require("../models/Comment");
let Article = require("../models/Article");

// routes all the methods below for Comment collection

// post request on comment

Routes.post("/<%= Article.id %>", (req, res) => {
  //   let id = req.params.id;
  //   Comment.article_Id = id;
  //   Comment.create(req.body);
  console.log(req.body);
});

module.exports = Routes;
