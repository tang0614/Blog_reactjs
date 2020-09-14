const mongoose = require("mongoose");
const { SectionSchema } = require("./section");
//properties in this schema is optional, types only meaningful in mongoose not mongodb
const MessageSchema = new mongoose.Schema({
  email: String,
  message: String,
});

const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;
