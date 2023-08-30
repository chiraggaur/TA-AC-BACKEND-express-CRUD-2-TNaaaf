let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let commentsSchema = new Schema(
  {
    content: { type: String },
    article_Id: { type: Schema.Types.ObjectId, ref: "Article", required: true },
    title: { type: String },
    description: { type: String },
    tags: [String],
    author: { type: String },
    likes: { type: Number, default: 0 },
  },
  { timestamps: true }
);

let Comment = mongoose.model("Comment", commentsSchema); // same as collection name

module.exports = Comment;
