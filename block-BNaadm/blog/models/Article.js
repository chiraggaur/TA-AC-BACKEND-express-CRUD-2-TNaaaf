let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let articlesSchema = new Schema({
  title: { type: String },
  description: { type: String },
  tags: [String],
  author: { type: String },
  likes: { type: Number, default: 0 },
});

let Article = mongoose.model("Article", articlesSchema); // same as collection name

module.exports = Article;
