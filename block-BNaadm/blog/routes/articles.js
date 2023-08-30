let express = require("express");
let Routes = express.Router();
let Article = require("../models/Article");
let Comment = require("../models/Comment");

// all routes now declared with (Routes.)

// get articles from database posted by user

Routes.get("/", async (req, res) => {
  let article_Data = await Article.find({});
  res.render("articles", { Article: article_Data });
});

// post articles fron json to article database

Routes.post("/", (req, res) => {
  Article.create(req.body);
  res.redirect("/articles/"); //request will render on get route and display on articles.ejs page
});

// add articles get request
Routes.get("/add", (req, res) => {
  res.render("articlesAddForm");
});

//add articles post send data to database

Routes.post("/add", (req, res) => {
  Article.create(req.body);
  res.redirect("/articles/"); //request will render on get route and display on articles.ejs page
});

// get article details inside on click

Routes.get("/:id", async (req, res) => {
  let id = req.params.id;
  let data = await Article.findById(id);
  res.render("articlesDetails", { Article: data });
});

// edit the Article details

// get request render to form with values

Routes.get("/:id/edit", async (req, res) => {
  let id = req.params.id;
  let data = await Article.findById(id);
  res.render("articlesEditForm", { Article: data });
});

// on form submit updated articlewill post and render new details

Routes.post("/:id/updated", async (req, res) => {
  let id = req.params.id;
  await Article.findByIdAndUpdate(id, req.body);
  res.redirect("/articles/");
});

// delete article from database and redirect

Routes.get("/:id/delete", async (req, res) => {
  let id = req.params.id;
  await Article.findByIdAndDelete(id);
  res.redirect("/articles/");
});

// likes button

Routes.get("/:id/likes", async (req, res) => {
  let id = req.params.id;
  await Article.findByIdAndUpdate(id, { $inc: { likes: 1 } });
  res.redirect("/articles/");
});

// post comment
Routes.post("/:article_Id/comment", (req, res) => {
  let article_Id = req.params.article_Id;
  req.body.article_Id = article_Id;
  Comment.create(req.body);
  Article.findByIdAndUpdate(article_Id, { $push: { comments: [Comment._id] } });
  res.redirect("/articles/" + article_Id);
});

module.exports = Routes;
