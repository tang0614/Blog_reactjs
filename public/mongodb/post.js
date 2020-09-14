const mongoose = require("mongoose");
const { SectionSchema } = require("./section");
//properties in this schema is optional, types only meaningful in mongoose not mongodb
const PostSchema = new mongoose.Schema({
  title: String,
  description: String,
  section: [SectionSchema],
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
