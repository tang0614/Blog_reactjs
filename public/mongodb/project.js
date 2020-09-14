const mongoose = require("mongoose");

//properties in this schema is optional, types only meaningful in mongoose not mongodb
const ProjectSchema = new mongoose.Schema({
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

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
