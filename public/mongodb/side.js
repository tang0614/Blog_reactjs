const mongoose = require("mongoose");

//properties in this schema is optional, types only meaningful in mongoose not mongodb
const SideSchema = new mongoose.Schema({
  article: {
    title: String,
    description: String,
    imageSource: String,
  },
  links: {
    github: String,
    live: String,
  },
});

const Side = mongoose.model("Side", SideSchema);

module.exports = Side;
