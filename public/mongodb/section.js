const mongoose = require("mongoose");

//properties in this schema is optional, types only meaningful in mongoose not mongodb
const SectionSchema = new mongoose.Schema({
  subTitile: String,
  content: String,
  imageSource: String,
});

const Section = mongoose.model("Section", SectionSchema);

module.exports = Section;
module.exports.SectionSchema = SectionSchema;
